<template>
  <div>
    <div class="mb-6 grid gap-6">
      <!-- 当前时间部分 -->
      <div class="bg-gray-50 dark:bg-gray-800 rounded-md p-4">
        <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">当前时间</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">时间</div>
            <div class="bg-white dark:bg-gray-700 rounded-md p-3 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
              {{ currentDateTime }}
            </div>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Unix时间戳 (秒)</div>
            <div class="flex">
              <div class="flex-1 bg-white dark:bg-gray-700 rounded-l-md p-3 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 border-r-0">
                {{ currentTimestamp }}
              </div>
              <button 
                @click="copyToClipboard(currentTimestamp)" 
                class="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 px-3 rounded-r-md border border-gray-200 dark:border-gray-600"
                title="复制"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button 
          @click="updateCurrentTime" 
          class="mt-3 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          刷新
        </button>
      </div>
      
      <!-- 时间戳转日期 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">时间戳转日期</h3>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Unix时间戳 (秒)
          </label>
          <div class="flex">
            <input 
              type="number" 
              v-model="timestampInput"
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              placeholder="请输入Unix时间戳"
            />
            <button 
              @click="convertTimestampToDate"
              class="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark"
            >
              转换
            </button>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            日期时间
          </label>
          <div class="flex">
            <input 
              type="text" 
              v-model="dateFromTimestamp"
              readonly
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              v-if="dateFromTimestamp"
              @click="copyToClipboard(dateFromTimestamp)" 
              class="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 px-3 rounded-r-md border border-gray-300 dark:border-gray-600"
              title="复制"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 日期转时间戳 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">日期转时间戳</h3>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            日期时间
          </label>
          <div class="flex">
            <input 
              type="datetime-local" 
              v-model="dateInput"
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              @click="convertDateToTimestamp"
              class="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark"
            >
              转换
            </button>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Unix时间戳 (秒)
          </label>
          <div class="flex">
            <input 
              type="text" 
              v-model="timestampFromDate"
              readonly
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              v-if="timestampFromDate"
              @click="copyToClipboard(timestampFromDate)" 
              class="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 px-3 rounded-r-md border border-gray-300 dark:border-gray-600"
              title="复制"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="copyStatus" class="fixed right-4 bottom-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-2 rounded-md shadow-md">
      已复制到剪贴板
    </div>
    
    <div class="bg-gray-50 dark:bg-gray-800 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
      <h3 class="font-medium mb-2">关于Unix时间戳</h3>
      <p class="mb-2">Unix时间戳表示从UTC时间1970年1月1日0时0分0秒开始经过的秒数。它是一种广泛用于计算机系统和应用程序的时间表示方式。</p>
      <p class="mb-2">常见用途：</p>
      <ul class="list-disc pl-5 mb-2">
        <li>数据库记录时间</li>
        <li>API通信中的时间表示</li>
        <li>日志记录</li>
        <li>文件系统中的时间戳</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 当前时间相关
const currentDateTime = ref('')
const currentTimestamp = ref(0)

// 时间戳转日期相关
const timestampInput = ref('')
const dateFromTimestamp = ref('')

// 日期转时间戳相关
const dateInput = ref('')
const timestampFromDate = ref('')

// 复制状态
const copyStatus = ref(false)

// 初始化
onMounted(() => {
  updateCurrentTime()
  // 设置默认日期输入为当前时间
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  
  dateInput.value = `${year}-${month}-${day}T${hours}:${minutes}`
})

// 更新当前时间
function updateCurrentTime() {
  const now = new Date()
  currentDateTime.value = formatDate(now)
  currentTimestamp.value = Math.floor(now.getTime() / 1000)
}

// 时间戳转日期
function convertTimestampToDate() {
  if (!timestampInput.value) {
    dateFromTimestamp.value = ''
    return
  }
  
  try {
    const timestamp = parseInt(timestampInput.value)
    const date = new Date(timestamp * 1000)
    
    if (isNaN(date.getTime())) {
      throw new Error('无效的时间戳')
    }
    
    dateFromTimestamp.value = formatDate(date)
  } catch (error) {
    dateFromTimestamp.value = '无效的时间戳'
  }
}

// 日期转时间戳
function convertDateToTimestamp() {
  if (!dateInput.value) {
    timestampFromDate.value = ''
    return
  }
  
  try {
    const date = new Date(dateInput.value)
    
    if (isNaN(date.getTime())) {
      throw new Error('无效的日期')
    }
    
    timestampFromDate.value = Math.floor(date.getTime() / 1000).toString()
  } catch (error) {
    timestampFromDate.value = '无效的日期'
  }
}

// 格式化日期
function formatDate(date) {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      copyStatus.value = true
      setTimeout(() => {
        copyStatus.value = false
      }, 2000)
    })
    .catch((error) => {
      console.error('复制失败', error)
    })
}
</script> 