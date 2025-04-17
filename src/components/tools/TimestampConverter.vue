<template>
  <div>
    <div class="mb-6 grid gap-6">
      <!-- 时间戳与日期互转 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">{{ $t('tools.timestamp-converter.labels.unixTimestamp') }}</h3>
        <div class="max-w-md space-y-4">
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ isTimestampToDate ? $t('tools.timestamp-converter.labels.unixTimestamp') : $t('tools.timestamp-converter.labels.dateTime') }}
              </label>
              <div class="flex items-center space-x-2">
                <button 
                  @click="setCurrentTime"
                  class="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary-dark flex items-center space-x-1"
                  title="使用当前时间"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>{{ $t('tools.timestamp-converter.actions.refresh') }}</span>
                </button>
                <button 
                  @click="switchConvertMode"
                  class="text-primary hover:text-primary-dark text-sm flex items-center space-x-1"
                >
                  <span>{{ $t('tools.timestamp-converter.actions.switch') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex">
              <input 
                v-if="isTimestampToDate"
                type="number" 
                v-model="timestampInput"
                @input="convertTimestampToDate"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                :placeholder="$t('tools.timestamp-converter.placeholders.enterTimestamp')"
              />
              <input 
                v-else
                type="datetime-local" 
                v-model="dateInput"
                @input="convertDateToTimestamp"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                step="1"
              />
              <button 
                v-if="isTimestampToDate ? timestampInput : dateInput"
                @click="copyToClipboard(isTimestampToDate ? timestampInput : dateInput)" 
                class="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 px-3 rounded-r-md border border-gray-200 dark:border-gray-600"
                :title="$t('tools.timestamp-converter.actions.copy')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ isTimestampToDate ? $t('tools.timestamp-converter.labels.dateTime') : $t('tools.timestamp-converter.labels.unixTimestamp') }}
            </label>
            <div class="flex">
              <input 
                type="text" 
                :value="isTimestampToDate ? dateFromTimestamp : timestampFromDate"
                readonly
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
              <button 
                v-if="isTimestampToDate ? dateFromTimestamp : timestampFromDate"
                @click="copyToClipboard(isTimestampToDate ? dateFromTimestamp : timestampFromDate)" 
                class="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 px-3 rounded-r-md border border-gray-200 dark:border-gray-600"
                :title="$t('tools.timestamp-converter.actions.copy')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 时间单位转换 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">{{ $t('tools.timestamp-converter.labels.unitConversion') }}</h3>
        <div class="max-w-md space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.timestamp-converter.labels.inputValue') }}
            </label>
            <div class="flex">
              <input 
                type="number" 
                v-model="timeValue"
                @input="convertTime"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                :placeholder="$t('tools.timestamp-converter.placeholders.enterValue')"
              />
              <select 
                v-model="selectedUnit"
                @change="convertTime"
                class="w-32 px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-r-md"
              >
                <option value="milliseconds">{{ $t('tools.timestamp-converter.timeUnits.milliseconds') }}</option>
                <option value="seconds">{{ $t('tools.timestamp-converter.timeUnits.seconds') }}</option>
                <option value="minutes">{{ $t('tools.timestamp-converter.timeUnits.minutes') }}</option>
                <option value="hours">{{ $t('tools.timestamp-converter.timeUnits.hours') }}</option>
                <option value="days">{{ $t('tools.timestamp-converter.timeUnits.days') }}</option>
              </select>
            </div>
          </div>
          
          <div class="space-y-2">
            <div v-for="(value, unit) in convertedTimes" :key="unit">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t(`tools.timestamp-converter.timeUnits.${unit}`) }}</div>
              <div class="flex">
                <div class="w-full bg-gray-50 dark:bg-gray-700 rounded-l-md p-2 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 border-r-0">
                  {{ value }}
                </div>
                <button 
                  @click="copyToClipboard(value)" 
                  class="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 px-3 rounded-r-md border border-gray-200 dark:border-gray-600"
                  :title="$t('tools.timestamp-converter.actions.copy')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="copyStatus" class="fixed right-4 bottom-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-2 rounded-md shadow-md">
      {{ $t('tools.timestamp-converter.messages.copied') }}
    </div>
    
    <div class="bg-gray-50 dark:bg-gray-800 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
      <h3 class="font-medium mb-2">{{ $t('tools.timestamp-converter.info.aboutTimestamp') }}</h3>
      <p class="mb-2">{{ $t('tools.timestamp-converter.info.timestampDescription') }}</p>
      <p class="mb-2">{{ $t('tools.timestamp-converter.info.commonUsage') }}</p>
      <ul class="list-disc pl-5 mb-2">
        <li>{{ $t('tools.timestamp-converter.info.usages.database') }}</li>
        <li>{{ $t('tools.timestamp-converter.info.usages.api') }}</li>
        <li>{{ $t('tools.timestamp-converter.info.usages.logging') }}</li>
        <li>{{ $t('tools.timestamp-converter.info.usages.filesystem') }}</li>
      </ul>
    </div>

    <!-- 文章部分 -->
    <div class="mt-10 pt-6 border-t dark:border-gray-700">
      <TimestampConverterArticle />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TimestampConverterArticle from './TimestampConverterArticle.vue'

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

// 时间单位转换相关
const timeValue = ref('')
const selectedUnit = ref('seconds')
const convertedTimes = ref({})

// 转换模式
const isTimestampToDate = ref(true)

// 初始化
onMounted(() => {
  setCurrentTime()
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

// 转换时间单位
function convertTime() {
  if (!timeValue.value) {
    convertedTimes.value = {}
    return
  }

  const value = parseFloat(timeValue.value)
  if (isNaN(value)) {
    return
  }

  const milliseconds = convertToMilliseconds(value, selectedUnit.value)
  
  convertedTimes.value = {
    milliseconds: milliseconds,
    seconds: milliseconds / 1000,
    minutes: milliseconds / (1000 * 60),
    hours: milliseconds / (1000 * 60 * 60),
    days: milliseconds / (1000 * 60 * 60 * 24)
  }
}

// 将输入值转换为毫秒
function convertToMilliseconds(value, unit) {
  const conversions = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24
  }
  return value * conversions[unit]
}

// 获取单位标签
function getUnitLabel(unit) {
  return this.$t(`tools.timestamp-converter.timeUnits.${unit}`)
}

// 切换转换模式
function switchConvertMode() {
  isTimestampToDate.value = !isTimestampToDate.value
  // 清空输入和输出
  timestampInput.value = ''
  dateInput.value = ''
  dateFromTimestamp.value = ''
  timestampFromDate.value = ''
}

// 设置当前时间
function setCurrentTime() {
  const now = new Date()
  if (isTimestampToDate.value) {
    timestampInput.value = Math.floor(now.getTime() / 1000).toString()
    convertTimestampToDate()
  } else {
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    dateInput.value = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
    convertDateToTimestamp()
  }
}
</script> 