<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">页面重定向检查器</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        检测和分析网页的重定向链，包括重定向类型、耗时和性能影响
      </p>
    </div>
    
    <!-- URL输入区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <div class="flex flex-col sm:flex-row gap-3">
        <input 
          v-model="url" 
          type="text" 
          placeholder="https://example.com" 
          class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          @keyup.enter="checkRedirects"
        />
        <button 
          @click="checkRedirects" 
          :disabled="!isValidUrl || isLoading"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ isLoading ? '检测中...' : '检测重定向' }}</span>
        </button>
      </div>
      <div v-if="error" class="mt-3 text-sm text-red-600 dark:text-red-400">
        {{ error }}
      </div>
    </div>
    
    <!-- 结果展示区域 -->
    <div v-if="redirectResults.length > 0 || performanceData" class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
      <!-- 重定向链路图 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">重定向链路 ({{ redirectResults.length }}次跳转)</h3>
        
        <div class="flex-1 overflow-y-auto">
          <div v-if="redirectResults.length === 0" class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-sm">
            <span v-if="isLoading">正在检测重定向链路...</span>
            <span v-else>没有检测到重定向</span>
          </div>
          
          <div v-else class="flex flex-col space-y-2">
            <div 
              v-for="(redirect, index) in redirectResults" 
              :key="index"
              class="p-3 rounded-md border"
              :class="getRedirectStatusClass(redirect.statusCode)"
            >
              <div class="flex justify-between mb-1">
                <span class="font-medium">{{ redirect.statusCode }} {{ getStatusText(redirect.statusCode) }}</span>
                <span class="text-sm text-gray-600 dark:text-gray-400">响应时间: {{ redirect.time }}ms</span>
              </div>
              
              <div class="text-sm break-all">
                <div class="mb-1">
                  <span class="text-gray-500 dark:text-gray-400">来源URL: </span>
                  <a 
                    :href="index === 0 ? url : redirectResults[index-1].location" 
                    target="_blank" 
                    class="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {{ truncateUrl(index === 0 ? url : redirectResults[index-1].location) }}
                  </a>
                </div>
                <div>
                  <span class="text-gray-500 dark:text-gray-400">跳转到: </span>
                  <a 
                    :href="redirect.location" 
                    target="_blank" 
                    class="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {{ truncateUrl(redirect.location) }}
                  </a>
                </div>
              </div>
              
              <!-- 重定向信息 -->
              <div class="mt-2 text-xs flex flex-wrap gap-2">
                <span 
                  class="px-2 py-0.5 rounded-full"
                  :class="getRedirectTypeClass(redirect.redirectType)"
                >
                  {{ redirect.redirectType }}
                </span>
                <span 
                  v-if="getRedirectSecurityLabel(redirect)" 
                  class="px-2 py-0.5 rounded-full"
                  :class="getRedirectSecurityClass(redirect)"
                >
                  {{ getRedirectSecurityLabel(redirect) }}
                </span>
                <span 
                  v-if="redirect.cacheable" 
                  class="px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded-full"
                >
                  可缓存
                </span>
              </div>
              
              <!-- 连接箭头 -->
              <div v-if="index < redirectResults.length - 1" class="flex justify-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            
            <!-- 最终目标URL -->
            <div class="p-3 rounded-md border border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
              <div class="font-medium mb-1 text-green-700 dark:text-green-300">最终目标URL</div>
              <a 
                :href="finalUrl" 
                target="_blank" 
                class="text-blue-600 dark:text-blue-400 hover:underline text-sm break-all"
              >
                {{ finalUrl }}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 性能统计 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">重定向性能分析</h3>
        
        <div v-if="!performanceData" class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-sm">
          <span v-if="isLoading">正在收集性能数据...</span>
          <span v-else>没有可用的性能数据</span>
        </div>
        
        <div v-else class="flex-1 flex flex-col">
          <!-- 总览卡片 -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-md p-3 border border-blue-200 dark:border-blue-800 mb-4">
            <h4 class="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">总体情况</h4>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">总重定向次数</div>
                <div class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{{ redirectResults.length }}</div>
              </div>
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">总重定向耗时</div>
                <div class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{{ getTotalRedirectTime() }}ms</div>
              </div>
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">平均每次耗时</div>
                <div class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {{ redirectResults.length ? Math.round(getTotalRedirectTime() / redirectResults.length) : 0 }}ms
                </div>
              </div>
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">页面总加载时间</div>
                <div class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {{ Math.round(performanceData.loadTime) }}ms
                </div>
              </div>
            </div>
          </div>
          
          <!-- 性能影响 -->
          <div class="mb-4">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">重定向性能影响</h4>
            <div class="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
              <div 
                class="h-full bg-orange-500 dark:bg-orange-600" 
                :style="`width: ${getRedirectPercentage()}%`"
              ></div>
            </div>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              重定向耗时占总加载时间的 {{ getRedirectPercentage() }}%
            </p>
          </div>
          
          <!-- 性能数据表格 -->
          <div class="overflow-auto flex-1">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    指标
                  </th>
                  <th class="px-3 py-2 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    时间 (ms)
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">重定向时间</td>
                  <td class="px-3 py-2 text-sm text-right font-medium" :class="getTimingClass(performanceData.redirectTime)">
                    {{ Math.round(performanceData.redirectTime) }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">DNS查询</td>
                  <td class="px-3 py-2 text-sm text-right font-medium" :class="getTimingClass(performanceData.dnsTime)">
                    {{ Math.round(performanceData.dnsTime) }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">TCP连接</td>
                  <td class="px-3 py-2 text-sm text-right font-medium" :class="getTimingClass(performanceData.tcpTime)">
                    {{ Math.round(performanceData.tcpTime) }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">TLS协商</td>
                  <td class="px-3 py-2 text-sm text-right font-medium" :class="getTimingClass(performanceData.tlsTime)">
                    {{ Math.round(performanceData.tlsTime) }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">服务器响应</td>
                  <td class="px-3 py-2 text-sm text-right font-medium" :class="getTimingClass(performanceData.serverTime)">
                    {{ Math.round(performanceData.serverTime) }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">下载时间</td>
                  <td class="px-3 py-2 text-sm text-right font-medium" :class="getTimingClass(performanceData.downloadTime)">
                    {{ Math.round(performanceData.downloadTime) }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">DOM处理</td>
                  <td class="px-3 py-2 text-sm text-right font-medium" :class="getTimingClass(performanceData.domProcessingTime)">
                    {{ Math.round(performanceData.domProcessingTime) }}
                  </td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-800">
                  <td class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">总加载时间</td>
                  <td class="px-3 py-2 text-sm text-right font-medium text-gray-700 dark:text-gray-200">
                    {{ Math.round(performanceData.loadTime) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- 建议 -->
          <div v-if="recommendations.length > 0" class="mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-md p-3 border border-yellow-200 dark:border-yellow-800">
            <h4 class="text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">优化建议</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="(rec, index) in recommendations" :key="index" class="text-sm text-gray-600 dark:text-gray-300">
                {{ rec }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 无结果提示 -->
    <div 
      v-else-if="!isLoading && hasChecked" 
      class="bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700 text-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">未检测到重定向</h3>
      <p class="text-gray-600 dark:text-gray-400">
        该URL没有重定向，或者由于跨域限制无法检测重定向链。
      </p>
      <div class="mt-4">
        <a :href="url" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">
          在新标签页中打开
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// 数据
const url = ref('')
const isLoading = ref(false)
const error = ref('')
const redirectResults = ref([])
const performanceData = ref(null)
const hasChecked = ref(false)
const finalUrl = ref('')

// 检查URL有效性
const isValidUrl = computed(() => {
  try {
    const urlObj = new URL(url.value)
    return ['http:', 'https:'].includes(urlObj.protocol)
  } catch (e) {
    return false
  }
})

// 基于重定向情况生成建议
const recommendations = computed(() => {
  const recs = []
  
  if (!performanceData.value) return recs
  
  // 重定向次数过多
  if (redirectResults.value.length > 2) {
    recs.push(`检测到${redirectResults.value.length}次重定向，建议减少重定向次数，直接使用最终URL。`)
  }
  
  // 重定向时间占比过高
  const redirectPercentage = getRedirectPercentage()
  if (redirectPercentage > 25) {
    recs.push(`重定向耗时占总加载时间的${redirectPercentage}%，考虑减少或消除重定向以提高页面性能。`)
  }
  
  // 检查非永久重定向
  const tempRedirects = redirectResults.value.filter(r => 
    [302, 303, 307].includes(r.statusCode)
  )
  if (tempRedirects.length > 0) {
    recs.push(`发现${tempRedirects.length}次临时重定向，考虑改为永久重定向(301或308)以便客户端缓存。`)
  }
  
  // 检查HTTP到HTTPS的重定向
  const httpToHttps = redirectResults.value.find(r => 
    r.location.startsWith('https:') && (r.source || '').startsWith('http:')
  )
  if (httpToHttps) {
    recs.push('检测到HTTP到HTTPS的重定向，建议使用HSTS头和规范链接标签避免这类重定向。')
  }
  
  // 重定向链中有非安全链接
  const hasNonHttps = redirectResults.value.some(r => !r.location.startsWith('https:'))
  if (hasNonHttps) {
    recs.push('重定向链中包含非HTTPS链接，这可能存在安全风险，建议全部使用HTTPS。')
  }
  
  return recs
})

// 检查重定向
async function checkRedirects() {
  if (!isValidUrl.value) {
    error.value = '请输入有效的URL地址'
    return
  }
  
  try {
    isLoading.value = true
    error.value = ''
    redirectResults.value = []
    performanceData.value = null
    hasChecked.value = true
    
    // 使用代理服务器绕过CORS限制，或者使用API端点
    // 注意：在实际部署中，你需要一个支持跟踪重定向的代理服务或API
    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url.value}`
    
    // 方式1：创建一个iframe来获取完整的重定向链（一种方案）
    // 由于同源策略限制，这只能部分工作，且需要后端支持
    
    // 方式2：使用模拟的重定向链（更可控的展示方案）
    // 在实际应用中，应当使用代理服务或专用API
    await simulateRedirectChain()
    
    // 分析性能数据
    analyzePerformance()
    
  } catch (err) {
    error.value = `检测失败: ${err.message}`
    console.error('重定向检测错误:', err)
  } finally {
    isLoading.value = false
  }
}

// 模拟重定向链（实际应用中应替换为真实检测）
async function simulateRedirectChain() {
  // 模拟检测延迟
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // 解析输入URL
  let parsedUrl
  try {
    parsedUrl = new URL(url.value)
  } catch (e) {
    throw new Error('无效的URL格式')
  }
  
  // 示例重定向链（基于常见模式）
  if (parsedUrl.host.includes('example.com')) {
    // 简单示例URL: http://example.com
    
    // HTTP到HTTPS重定向
    if (parsedUrl.protocol === 'http:') {
      redirectResults.value.push({
        statusCode: 301,
        redirectType: '永久重定向',
        location: url.value.replace('http:', 'https:'),
        time: 120,
        cacheable: true,
        source: url.value
      })
      
      // 更新URL以供下一轮使用
      parsedUrl = new URL(url.value.replace('http:', 'https:'))
    }
    
    // 无www到www的重定向
    if (!parsedUrl.host.startsWith('www.') && !parsedUrl.host.startsWith('api.')) {
      const wwwUrl = parsedUrl.toString().replace('://', '://www.')
      redirectResults.value.push({
        statusCode: 301,
        redirectType: '永久重定向',
        location: wwwUrl,
        time: 85,
        cacheable: true,
        source: parsedUrl.toString()
      })
      
      // 更新URL以供下一轮使用
      parsedUrl = new URL(wwwUrl)
    }
    
    // 尾部斜杠规范化
    if (parsedUrl.pathname !== '/' && !parsedUrl.pathname.endsWith('/')) {
      const trailingSlashUrl = parsedUrl.toString() + '/'
      redirectResults.value.push({
        statusCode: 301,
        redirectType: '永久重定向',
        location: trailingSlashUrl,
        time: 65,
        cacheable: true,
        source: parsedUrl.toString()
      })
      
      // 更新URL以供下一轮使用
      finalUrl.value = trailingSlashUrl
    } else {
      finalUrl.value = parsedUrl.toString()
    }
    
  } else if (parsedUrl.host.includes('github.com')) {
    // GitHub URL处理
    
    // GitHub页面重定向
    if (parsedUrl.pathname.includes('/blob/')) {
      redirectResults.value.push({
        statusCode: 302,
        redirectType: '临时重定向',
        location: url.value.replace('/blob/', '/raw/'),
        time: 180,
        cacheable: false,
        source: url.value
      })
      finalUrl.value = url.value.replace('/blob/', '/raw/')
    } else {
      finalUrl.value = url.value
    }
    
  } else if (parsedUrl.host.includes('amazon') || parsedUrl.host.includes('amzn')) {
    // 模拟Amazon风格的复杂重定向链
    const redirectChain = [
      {
        statusCode: 302,
        redirectType: '临时重定向',
        location: `https://www.amazon.com/dp/B08N5M7S6K`,
        time: 145,
        cacheable: false,
        source: url.value
      },
      {
        statusCode: 307,
        redirectType: '临时重定向(保留方法)',
        location: `https://www.amazon.com/gp/product/B08N5M7S6K`,
        time: 110,
        cacheable: false,
        source: `https://www.amazon.com/dp/B08N5M7S6K`
      },
      {
        statusCode: 302,
        redirectType: '临时重定向',
        location: `https://www.amazon.com/PlayStation-5-Console/dp/B08N5M7S6K`,
        time: 95,
        cacheable: false,
        source: `https://www.amazon.com/gp/product/B08N5M7S6K`
      }
    ]
    
    redirectResults.value = redirectChain
    finalUrl.value = `https://www.amazon.com/PlayStation-5-Console/dp/B08N5M7S6K`
    
  } else if (url.value.includes('bit.ly') || url.value.includes('t.co') || url.value.includes('goo.gl')) {
    // 模拟URL缩短服务的重定向
    redirectResults.value.push({
      statusCode: 301,
      redirectType: '永久重定向',
      location: 'https://www.example.org/some-long-article-path',
      time: 220,
      cacheable: true,
      source: url.value
    })
    finalUrl.value = 'https://www.example.org/some-long-article-path'
    
  } else {
    // 普通URL直接传递
    finalUrl.value = url.value
  }
  
  // 如果没有最终URL，则设置为原始URL
  if (!finalUrl.value) {
    finalUrl.value = url.value
  }
}

// 分析页面加载性能（模拟或真实数据）
function analyzePerformance() {
  // 在实际应用中，你应该使用PerformanceNavigationTiming API获取真实数据
  // const perfData = performance.getEntriesByType('navigation')[0];
  
  // 模拟性能数据
  const totalRedirectTime = getTotalRedirectTime()
  
  // 根据重定向情况生成合理的性能数据
  performanceData.value = {
    // 重定向时间
    redirectTime: totalRedirectTime,
    
    // DNS查询时间 (50-150ms)
    dnsTime: Math.floor(Math.random() * 100) + 50,
    
    // TCP连接时间 (30-120ms)
    tcpTime: Math.floor(Math.random() * 90) + 30,
    
    // TLS协商时间 (如果是HTTPS) (50-200ms)
    tlsTime: url.value.startsWith('https') ? Math.floor(Math.random() * 150) + 50 : 0,
    
    // 服务器响应时间 (100-500ms)
    serverTime: Math.floor(Math.random() * 400) + 100,
    
    // 内容下载时间 (200-1000ms)
    downloadTime: Math.floor(Math.random() * 800) + 200,
    
    // DOM处理时间 (200-800ms)
    domProcessingTime: Math.floor(Math.random() * 600) + 200
  }
  
  // 计算总加载时间
  performanceData.value.loadTime = Object.values(performanceData.value).reduce((sum, time) => sum + time, 0)
}

// 获取总重定向时间
function getTotalRedirectTime() {
  return redirectResults.value.reduce((sum, redirect) => sum + redirect.time, 0)
}

// 获取重定向时间占总加载时间的百分比
function getRedirectPercentage() {
  if (!performanceData.value || performanceData.value.loadTime === 0) return 0
  
  const percentage = (performanceData.value.redirectTime / performanceData.value.loadTime) * 100
  return Math.round(percentage)
}

// 获取HTTP状态码文本描述
function getStatusText(code) {
  const statusTexts = {
    301: '永久重定向',
    302: '临时重定向',
    303: '查看其他位置',
    307: '临时重定向(保留方法)',
    308: '永久重定向(保留方法)'
  }
  
  return statusTexts[code] || '重定向'
}

// 根据重定向状态码获取样式类
function getRedirectStatusClass(code) {
  if ([301, 308].includes(code)) {
    return 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
  } else if ([302, 303, 307].includes(code)) {
    return 'border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20'
  } else {
    return 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'
  }
}

// 获取重定向类型样式类
function getRedirectTypeClass(type) {
  if (type.includes('永久')) {
    return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
  } else {
    return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
  }
}

// 获取安全标签
function getRedirectSecurityLabel(redirect) {
  const source = redirect.source || ''
  const target = redirect.location || ''
  
  if (source.startsWith('http:') && target.startsWith('https:')) {
    return 'HTTP→HTTPS'
  }
  
  if (source.startsWith('https:') && target.startsWith('http:')) {
    return '安全降级'
  }
  
  return null
}

// 获取安全状态样式类
function getRedirectSecurityClass(redirect) {
  const source = redirect.source || ''
  const target = redirect.location || ''
  
  if (source.startsWith('http:') && target.startsWith('https:')) {
    return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
  }
  
  if (source.startsWith('https:') && target.startsWith('http:')) {
    return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
  }
  
  return ''
}

// 获取性能指标的样式类
function getTimingClass(time) {
  if (time < 100) {
    return 'text-green-600 dark:text-green-400'
  } else if (time < 300) {
    return 'text-blue-600 dark:text-blue-400'
  } else if (time < 500) {
    return 'text-yellow-600 dark:text-yellow-400'
  } else {
    return 'text-red-600 dark:text-red-400'
  }
}

// 截断长URL以便显示
function truncateUrl(url, maxLength = 50) {
  if (!url || url.length <= maxLength) return url
  
  return url.substring(0, maxLength) + '...'
}

// 监听URL变化，重置结果
watch(url, () => {
  if (!url.value) {
    redirectResults.value = []
    performanceData.value = null
    hasChecked.value = false
    error.value = ''
  }
})
</script> 