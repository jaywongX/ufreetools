<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">网络测速工具</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        测量资源加载时间，分析网络连接质量和性能
      </p>
    </div>
    
    <!-- 测速仪表盘 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <div class="flex items-center justify-between mb-4">
        <div class="flex flex-col">
          <span class="text-sm text-gray-600 dark:text-gray-400">当前状态</span>
          <span 
            class="text-md font-medium" 
            :class="{
              'text-gray-700 dark:text-gray-300': !isRunning && !testCompleted,
              'text-blue-600 dark:text-blue-400': isRunning,
              'text-green-600 dark:text-green-400': testCompleted && !isRunning
            }"
          >
            {{ statusMessage }}
          </span>
        </div>
        
        <button 
          @click="startTest" 
          class="px-4 py-2 rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="{
            'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500': !isRunning,
            'bg-red-600 hover:bg-red-700 focus:ring-red-500': isRunning
          }"
          :disabled="isRunning && !canCancel"
        >
          {{ isRunning ? '取消测试' : '开始测速' }}
        </button>
      </div>
      
      <!-- 速度仪表 -->
      <div class="relative flex flex-col items-center justify-center py-4">
        <div class="w-48 h-48 relative mb-4">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <!-- 仪表盘背景 -->
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#e6e6e6" 
              stroke-width="10" 
              class="dark:stroke-gray-700" 
            />
            
            <!-- 速度指示器 -->
            <circle 
              v-if="testCompleted || isRunning" 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              :stroke="getSpeedColor(downloadSpeed)" 
              stroke-width="10" 
              stroke-linecap="round"
              :stroke-dasharray="getSpeedDashArray(downloadSpeed)"
              stroke-dashoffset="0"
              transform="rotate(-90 50 50)"
            />
            
            <!-- 中心圆 -->
            <circle 
              cx="50" 
              cy="50" 
              r="38" 
              :fill="isRunning ? '#f3f4f6' : '#ffffff'" 
              class="dark:fill-gray-800" 
            />
          </svg>
          
          <!-- 中心速度显示 -->
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-3xl font-bold text-gray-800 dark:text-gray-200">
              {{ downloadSpeed.toFixed(1) }}
            </span>
            <span class="text-sm text-gray-600 dark:text-gray-400">Mbps</span>
          </div>
        </div>
        
        <!-- 延迟显示 -->
        <div class="flex items-center justify-center space-x-8 w-full">
          <div class="flex flex-col items-center">
            <span class="text-sm text-gray-600 dark:text-gray-400">延迟</span>
            <span class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ latency.toFixed(0) }} ms
            </span>
          </div>
          
          <div class="flex flex-col items-center">
            <span class="text-sm text-gray-600 dark:text-gray-400">上传</span>
            <span class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ uploadSpeed.toFixed(1) }} Mbps
            </span>
          </div>
        </div>
      </div>
      
      <!-- 测试进度 -->
      <div v-if="isRunning" class="mt-4">
        <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            class="h-full bg-blue-600 transition-all duration-300" 
            :style="{ width: `${testProgress}%` }"
          ></div>
        </div>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
          {{ testProgress.toFixed(0) }}% 完成
        </div>
      </div>
    </div>
    
    <!-- 测试结果详情 -->
    <div v-if="testCompleted" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">测试详情</h3>
      
      <div class="space-y-3">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="text-sm text-gray-600 dark:text-gray-400">下载速度</div>
            <div class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ downloadSpeed.toFixed(2) }} Mbps
            </div>
          </div>
          
          <div>
            <div class="text-sm text-gray-600 dark:text-gray-400">上传速度</div>
            <div class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ uploadSpeed.toFixed(2) }} Mbps
            </div>
          </div>
          
          <div>
            <div class="text-sm text-gray-600 dark:text-gray-400">延迟 (Ping)</div>
            <div class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ latency.toFixed(1) }} ms
            </div>
          </div>
          
          <div>
            <div class="text-sm text-gray-600 dark:text-gray-400">抖动</div>
            <div class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ jitter.toFixed(1) }} ms
            </div>
          </div>
        </div>
        
        <div>
          <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">资源加载时间</div>
          <div class="space-y-2">
            <div 
              v-for="(resource, index) in testResults" 
              :key="index"
              class="flex justify-between py-2 px-3 rounded-md bg-gray-50 dark:bg-gray-700"
            >
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ resource.name }}</span>
              <span class="text-sm font-medium text-gray-800 dark:text-gray-200">
                {{ resource.loadTime.toFixed(0) }} ms
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 历史记录 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">测试历史</h3>
      
      <div v-if="testHistory.length === 0" class="text-center py-6 text-gray-500 dark:text-gray-400">
        没有测试记录
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="bg-gray-50 dark:bg-gray-700">
              <th class="py-2 px-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">日期时间</th>
              <th class="py-2 px-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">下载速度</th>
              <th class="py-2 px-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">上传速度</th>
              <th class="py-2 px-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">延迟</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(record, index) in testHistory" 
              :key="index"
              class="border-b border-gray-200 dark:border-gray-700"
            >
              <td class="py-2 px-3 text-sm text-gray-700 dark:text-gray-300">
                {{ formatDateTime(record.timestamp) }}
              </td>
              <td class="py-2 px-3 text-sm text-gray-700 dark:text-gray-300">
                {{ record.downloadSpeed.toFixed(2) }} Mbps
              </td>
              <td class="py-2 px-3 text-sm text-gray-700 dark:text-gray-300">
                {{ record.uploadSpeed.toFixed(2) }} Mbps
              </td>
              <td class="py-2 px-3 text-sm text-gray-700 dark:text-gray-300">
                {{ record.latency.toFixed(1) }} ms
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

// 测试状态
const isRunning = ref(false)
const testCompleted = ref(false)
const canCancel = ref(true)
const testProgress = ref(0)

// 测试结果
const downloadSpeed = ref(0)
const uploadSpeed = ref(0)
const latency = ref(0)
const jitter = ref(0)
const testResults = ref([])
const testHistory = ref([])

// 测试资源
const testUrls = [
  { 
    name: '小图片 (10KB)', 
    url: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/1x1/cn.svg', 
    size: 10 * 1024 
  },
  { 
    name: '中等图片 (100KB)', 
    url: 'https://picsum.photos/200/300?random=1', 
    size: 100 * 1024 
  },
  { 
    name: '大图片 (1MB)', 
    url: 'https://picsum.photos/800/1200?random=2', 
    size: 1 * 1024 * 1024 
  },
  { 
    name: 'JSON API', 
    url: 'https://jsonplaceholder.typicode.com/photos', 
    size: 500 * 1024 
  }
]

// 取消控制器
let controllers = []

// 状态消息
const statusMessage = computed(() => {
  if (isRunning.value) return '测试进行中...'
  if (testCompleted.value) return '测试完成'
  return '准备就绪'
})

// 开始测试
async function startTest() {
  if (isRunning.value) {
    // 取消测试
    controllers.forEach(controller => controller.abort())
    controllers = []
    isRunning.value = false
    return
  }
  
  // 重置测试数据
  downloadSpeed.value = 0
  uploadSpeed.value = 0
  latency.value = 0
  jitter.value = 0
  testResults.value = []
  testProgress.value = 0
  testCompleted.value = false
  isRunning.value = true
  
  try {
    // 1. 测试延迟 (Ping)
    await testLatency()
    testProgress.value = 20
    
    // 2. 测试下载速度
    await testDownload()
    testProgress.value = 70
    
    // 3. 测试上传速度
    await testUpload()
    testProgress.value = 100
    
    // 保存测试历史
    testHistory.value.unshift({
      timestamp: new Date(),
      downloadSpeed: downloadSpeed.value,
      uploadSpeed: uploadSpeed.value,
      latency: latency.value,
      jitter: jitter.value
    })
    
    // 限制历史记录数量
    if (testHistory.value.length > 5) {
      testHistory.value = testHistory.value.slice(0, 5)
    }
    
    // 完成测试
    testCompleted.value = true
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('测试过程中出错:', error)
    }
  } finally {
    isRunning.value = false
  }
}

// 测试延迟
async function testLatency() {
  const controller = new AbortController()
  controllers.push(controller)
  
  // 模拟延迟测试，实际中可使用真实的API端点
  const pingUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  const pingCount = 5
  const pingResults = []
  
  for (let i = 0; i < pingCount; i++) {
    const startTime = performance.now()
    await fetch(pingUrl, { 
      method: 'HEAD',
      cache: 'no-store',
      signal: controller.signal
    })
    const endTime = performance.now()
    pingResults.push(endTime - startTime)
    
    // 添加一点延迟以避免请求过于频繁
    await new Promise(resolve => setTimeout(resolve, 200))
  }
  
  // 计算平均延迟和抖动
  latency.value = pingResults.reduce((sum, time) => sum + time, 0) / pingResults.length
  
  // 计算抖动 (延迟变化的平均值)
  if (pingResults.length > 1) {
    let totalVariation = 0
    for (let i = 1; i < pingResults.length; i++) {
      totalVariation += Math.abs(pingResults[i] - pingResults[i-1])
    }
    jitter.value = totalVariation / (pingResults.length - 1)
  }
}

// 测试下载速度
async function testDownload() {
  const results = []
  
  for (const resource of testUrls) {
    const controller = new AbortController()
    controllers.push(controller)
    
    const startTime = performance.now()
    const response = await fetch(resource.url, { 
      cache: 'no-store',
      signal: controller.signal 
    })
    const blob = await response.blob()
    const endTime = performance.now()
    
    const loadTime = endTime - startTime
    const fileSizeInBits = blob.size * 8
    const speedMbps = (fileSizeInBits / loadTime) / 1000 // 转换为Mbps
    
    results.push({
      name: resource.name,
      url: resource.url,
      size: blob.size,
      loadTime: loadTime,
      speedMbps: speedMbps
    })
    
    testProgress.value += 10
    
    // 添加到测试结果
    testResults.value.push({
      name: resource.name,
      loadTime: loadTime
    })
  }
  
  // 计算平均下载速度 (偏向大文件的加权平均)
  const totalSize = results.reduce((sum, item) => sum + item.size, 0)
  const weightedSpeed = results.reduce((sum, item) => sum + (item.speedMbps * item.size / totalSize), 0)
  downloadSpeed.value = weightedSpeed
}

// 测试上传速度 (模拟)
async function testUpload() {
  const uploadUrl = 'https://httpbin.org/post'
  const uploadSizes = [100 * 1024, 512 * 1024, 1024 * 1024] // 100KB, 512KB, 1MB
  const results = []
  
  for (const size of uploadSizes) {
    const controller = new AbortController()
    controllers.push(controller)
    
    // 创建随机数据
    const blob = new Blob([new ArrayBuffer(size)], { type: 'application/octet-stream' })
    
    const startTime = performance.now()
    await fetch(uploadUrl, { 
      method: 'POST',
      body: blob,
      signal: controller.signal
    })
    const endTime = performance.now()
    
    const uploadTime = endTime - startTime
    const dataSizeInBits = size * 8
    const speedMbps = (dataSizeInBits / uploadTime) / 1000
    
    results.push({
      size: size,
      uploadTime: uploadTime,
      speedMbps: speedMbps
    })
    
    testProgress.value += 5
  }
  
  // 计算平均上传速度
  const totalSize = results.reduce((sum, item) => sum + item.size, 0)
  const weightedSpeed = results.reduce((sum, item) => sum + (item.speedMbps * item.size / totalSize), 0)
  uploadSpeed.value = weightedSpeed
}

// 格式化日期时间
function formatDateTime(date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(date)
}

// 获取速度颜色
function getSpeedColor(speed) {
  if (speed < 5) return '#ef4444' // 红色 - 慢
  if (speed < 20) return '#f59e0b' // 橙色 - 中等
  if (speed < 50) return '#10b981' // 绿色 - 快
  return '#3b82f6' // 蓝色 - 非常快
}

// 获取仪表盘弧长 (基于速度)
function getSpeedDashArray(speed) {
  // 计算圆周长
  const circumference = 2 * Math.PI * 45
  
  // 根据速度计算弧长比例 (最大显示为100Mbps)
  let percentage = Math.min(speed / 100, 1)
  
  // 计算弧长和空白部分
  return `${circumference * percentage} ${circumference * (1 - percentage)}`
}

// 组件销毁时取消所有正在进行的请求
onUnmounted(() => {
  controllers.forEach(controller => {
    try {
      controller.abort()
    } catch (e) {
      // 忽略错误
    }
  })
})
</script> 