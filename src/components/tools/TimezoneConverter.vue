<template>
  <div class="timezone-converter w-full max-w-none">
    <!-- 主内容区 -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
      <!-- 左侧：当前时区时间 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.timezone-converter.currentTime') }}</h2>
        <div class="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          {{ formatCurrentTime }}
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {{ formatCurrentDate }}
        </div>
        <div class="text-sm font-medium">
          {{ localTimezoneName }}
          <span class="text-gray-500 dark:text-gray-400">
            ({{ localTimezoneOffset }})
          </span>
        </div>
        <div class="mt-4 flex gap-2">
          <button 
            @click="is24Hour = !is24Hour" 
            class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-sm"
          >
            {{ is24Hour ? t('tools.timezone-converter.settings.select12Hour') : t('tools.timezone-converter.settings.select24Hour') }}
          </button>
          <button 
            @click="showSeconds = !showSeconds" 
            class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-sm"
          >
            {{ showSeconds ? t('tools.timezone-converter.settings.hideSeconds') : t('tools.timezone-converter.settings.showSeconds') }}
          </button>
        </div>
      </div>
      
      <!-- 中间：时区转换 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ t('tools.timezone-converter.convertTime') }}</h2>
        
        <!-- 源时区 -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">{{ t('tools.timezone-converter.conversion.from') }}</label>
          <select 
            v-model="sourceTimezone" 
            class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">{{ t('tools.timezone-converter.timezone.yourLocal') }}</option>
            <optgroup :label="t('tools.timezone-converter.timezone.popular')">
              <option v-for="tz in popularTimezones" :key="tz.name" :value="tz.name">
                {{ tz.label }}
              </option>
            </optgroup>
            <optgroup 
              v-for="(zones, region) in groupedTimezones" 
              :key="region" 
              :label="t(`tools.timezone-converter.regions.${region.toLowerCase()}`) || region"
            >
              <option v-for="tz in zones" :key="tz.name" :value="tz.name">
                {{ tz.label }}
              </option>
            </optgroup>
          </select>
        </div>
        
        <!-- 源时间 -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium mb-1">{{ t('tools.timezone-converter.settings.date') }}</label>
            <input 
              type="date" 
              v-model="sourceDate" 
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">{{ t('tools.timezone-converter.settings.time') }}</label>
            <input 
              type="time" 
              v-model="sourceTime" 
              :step="showSeconds ? 1 : 60"
              class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
          </div>
        </div>
        
        <!-- 目标时区 -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">{{ t('tools.timezone-converter.conversion.to') }}</label>
          <select 
            v-model="targetTimezone" 
            class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">{{ t('tools.timezone-converter.timezone.yourLocal') }}</option>
            <optgroup :label="t('tools.timezone-converter.timezone.popular')">
              <option v-for="tz in popularTimezones" :key="tz.name" :value="tz.name">
                {{ tz.label }}
              </option>
            </optgroup>
            <optgroup 
              v-for="(zones, region) in groupedTimezones" 
              :key="region" 
              :label="t(`tools.timezone-converter.regions.${region.toLowerCase()}`) || region"
            >
              <option v-for="tz in zones" :key="tz.name" :value="tz.name">
                {{ tz.label }}
              </option>
            </optgroup>
          </select>
        </div>
        
        <!-- 转换按钮 -->
        <button 
          @click="convertTime" 
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          {{ t('tools.timezone-converter.conversion.convert') }}
        </button>
        
        <!-- 转换结果 -->
        <div v-if="showConversionResult" class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
          <h3 class="font-medium mb-2">{{ t('tools.timezone-converter.conversion.result') }}</h3>
          <div class="text-xl font-bold mb-2">{{ convertedTime }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div>{{ sourceTzInfo }}</div>
            <div>{{ targetTzInfo }}</div>
          </div>
        </div>
      </div>
      
      <!-- 右侧：时区对比 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">{{ t('tools.timezone-converter.compareTimezones') }}</h2>
          <button 
            @click="addTimezoneToCompare" 
            class="bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-1.5 text-sm"
          >
            {{ t('tools.timezone-converter.addTimezone') }}
          </button>
        </div>
        
        <!-- 添加时区选择框 -->
        <div v-if="showAddTimezone" class="mb-4">
          <div class="flex gap-2 mb-2">
            <select 
              v-model="timezoneToAdd" 
              class="flex-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">{{ t('tools.timezone-converter.timezone.yourLocal') }}</option>
              <optgroup :label="t('tools.timezone-converter.timezone.popular')">
                <option v-for="tz in popularTimezones" :key="tz.name" :value="tz.name">
                  {{ tz.label }}
                </option>
              </optgroup>
              <optgroup 
                v-for="(zones, region) in groupedTimezones" 
                :key="region" 
                :label="t(`tools.timezone-converter.regions.${region.toLowerCase()}`) || region"
              >
                <option v-for="tz in zones" :key="tz.name" :value="tz.name">
                  {{ tz.label }}
                </option>
              </optgroup>
            </select>
            <button 
              @click="confirmAddTimezone" 
              class="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 text-sm"
            >
              {{ t('tools.timezone-converter.ui.add') }}
            </button>
          </div>
        </div>
        
        <!-- 时区列表 -->
        <div class="space-y-3">
          <div 
            v-for="(tz, index) in comparedTimezones" 
            :key="index"
            class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md"
          >
            <div class="flex justify-between items-start">
              <div>
                <div class="font-medium mb-1">{{ getTimezoneLabel(tz.name) }}</div>
                <div class="text-xl font-bold">{{ formatTimezoneTime(tz.name) }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{ formatTimezoneDate(tz.name) }}
                </div>
              </div>
              <button 
                @click="removeTimezone(index)" 
                class="text-red-500 hover:text-red-600 text-sm"
              >
                {{ t('tools.timezone-converter.removeTimezone') }}
              </button>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {{ getTimezoneOffsetText(tz.name) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 工具介绍部分 -->
    <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-4">{{ t('tools.timezone-converter.aboutTitle') }}</h2>
      <p class="mb-6 text-gray-600 dark:text-gray-300">
        {{ t('tools.timezone-converter.aboutDescription') }}
      </p>
      
      <h3 class="text-xl font-bold mb-3">{{ t('tools.timezone-converter.featuresTitle') }}</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-gray-600 dark:text-gray-300">
        <li>{{ t('tools.timezone-converter.feature1') }}</li>
        <li>{{ t('tools.timezone-converter.feature2') }}</li>
        <li>{{ t('tools.timezone-converter.feature3') }}</li>
        <li>{{ t('tools.timezone-converter.feature4') }}</li>
        <li>{{ t('tools.timezone-converter.feature5') }}</li>
        <li>{{ t('tools.timezone-converter.feature6') }}</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3">{{ t('tools.timezone-converter.useCasesTitle') }}</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-gray-600 dark:text-gray-300">
        <li>{{ t('tools.timezone-converter.useCase1') }}</li>
        <li>{{ t('tools.timezone-converter.useCase2') }}</li>
        <li>{{ t('tools.timezone-converter.useCase3') }}</li>
        <li>{{ t('tools.timezone-converter.useCase4') }}</li>
        <li>{{ t('tools.timezone-converter.useCase5') }}</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3">{{ t('tools.timezone-converter.howToUseTitle') }}</h3>
      <ol class="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
        <li>{{ t('tools.timezone-converter.howToUse1') }}</li>
        <li>{{ t('tools.timezone-converter.howToUse2') }}</li>
        <li>{{ t('tools.timezone-converter.howToUse3') }}</li>
        <li>{{ t('tools.timezone-converter.howToUse4') }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 基本状态
const now = ref(new Date())
const is24Hour = ref(true)
const showSeconds = ref(true)
const showConversionResult = ref(false)

// 时区比较状态
const comparedTimezones = ref([])
const showAddTimezone = ref(false)
const timezoneToAdd = ref('')

// 时区转换状态
const sourceTimezone = ref('')
const targetTimezone = ref('')
const sourceDate = ref('')
const sourceTime = ref('')
const convertedTime = ref('')
const sourceTzInfo = ref('')
const targetTzInfo = ref('')

// 获取本地时区名称
const localTimezoneName = computed(() => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
})

// 获取本地时区偏移
const localTimezoneOffset = computed(() => {
  const offset = -(new Date().getTimezoneOffset())
  const hours = Math.abs(Math.floor(offset / 60))
  const minutes = Math.abs(offset % 60)
  return `GMT${offset >= 0 ? '+' : '-'}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
})

// 格式化当前时间
const formatCurrentTime = computed(() => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    ...(showSeconds.value ? { second: '2-digit' } : {}),
    hour12: !is24Hour.value
  }
  
  return now.value.toLocaleTimeString(
    locale.value === 'zh' ? 'zh-CN' : 'en-US', 
    options
  )
})

// 格式化当前日期
const formatCurrentDate = computed(() => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  
  return now.value.toLocaleDateString(
    locale.value === 'zh' ? 'zh-CN' : 'en-US', 
    options
  )
})

// 获取常用时区列表
const popularTimezones = computed(() => {
  return timezones.filter(tz => tz.group === 'popular')
})

// 获取按区域分组的时区列表
const groupedTimezones = computed(() => {
  const groups = {}
  
  timezones.filter(tz => tz.group !== 'popular').forEach(tz => {
    if (!groups[tz.group]) {
      groups[tz.group] = []
    }
    
    groups[tz.group].push(tz)
  })
  
  return groups
})

// 获取源时区名称
const sourceTimezoneName = computed(() => {
  return sourceTimezone.value ? getTimezoneLabel(sourceTimezone.value) : t('tools.timezone-converter.timezone.yourLocal')
})

// 获取目标时区名称
const targetTimezoneName = computed(() => {
  return targetTimezone.value ? getTimezoneLabel(targetTimezone.value) : t('tools.timezone-converter.timezone.yourLocal')
})

// 开始定时更新时间
function startTimeUpdate() {
  // 定时更新当前时间
  const timeUpdateInterval = setInterval(() => {
    now.value = new Date()
  }, 1000)
  
  // 组件销毁时清除定时器
  onBeforeUnmount(() => {
    clearInterval(timeUpdateInterval)
  })
}

// 转换时间
function convertTime() {
  if (!sourceDate.value || !sourceTime.value) {
    // 如果没有输入日期或时间，设置为当前时间
    const now = new Date()
    sourceDate.value = now.toISOString().split('T')[0]
    sourceTime.value = now.toTimeString().substring(0, 8)
  }

  try {
    // 解析源日期和时间
    const [year, month, day] = sourceDate.value.split('-').map(Number)
    const [hours, minutes, seconds = 0] = sourceTime.value.split(':').map(Number)
    
    // 创建源时区的日期对象
    const sourceDate_obj = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds))
    
    // 调整为源时区
    if (sourceTimezone.value) {
      const sourceOffset = getTimezoneOffset(sourceTimezone.value)
      sourceDate_obj.setTime(sourceDate_obj.getTime() - sourceOffset * 60 * 60 * 1000)
    }
    
    // 格式化结果
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: showSeconds.value ? '2-digit' : undefined,
      hour12: !is24Hour.value,
      timeZone: targetTimezone.value || undefined
    }
    
    // 生成结果字符串
    convertedTime.value = sourceDate_obj.toLocaleString(
      locale.value === 'zh' ? 'zh-CN' : 'en-US',
      options
    )
    
    // 计算时差
    const sourceLabel = getTimezoneLabel(sourceTimezone.value)
    const targetLabel = getTimezoneLabel(targetTimezone.value)
    
    // 显示时区信息
    sourceTzInfo.value = `${sourceLabel} (${getTimezoneOffsetText(sourceTimezone.value)})`
    targetTzInfo.value = `${targetLabel} (${getTimezoneOffsetText(targetTimezone.value)})`
    
    // 显示转换结果区域
    showConversionResult.value = true
  } catch (error) {
    console.error('Time conversion error:', error)
    alert(t('tools.timezone-converter.messages.invalid'))
  }
}

// 获取时区标签
function getTimezoneLabel(tzName) {
  if (!tzName) return t('tools.timezone-converter.timezone.yourLocal')
  
  const timezone = timezones.find(tz => tz.name === tzName)
  return timezone ? timezone.label : tzName
}

// 获取时区偏移
function getTimezoneOffset(tzName) {
  try {
    if (!tzName) return new Date().getTimezoneOffset() / -60 // 本地时区
    
    const date = new Date()
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone: tzName }))
    return (tzDate - utcDate) / (60 * 60 * 1000)
  } catch (e) {
    console.error(`Error getting offset for ${tzName}:`, e)
    return 0
  }
}

// 显示添加时区界面
function addTimezoneToCompare() {
  if (comparedTimezones.value.length >= 10) {
    alert(t('tools.timezone-converter.messages.maxTimezones'))
    return
  }
  
  showAddTimezone.value = true
  timezoneToAdd.value = ''
}

// 确认添加时区
function confirmAddTimezone() {
  if (!timezoneToAdd.value && !comparedTimezones.value.some(tz => tz.name === '')) {
    comparedTimezones.value.push({ name: '' })
  } else if (timezoneToAdd.value && !comparedTimezones.value.some(tz => tz.name === timezoneToAdd.value)) {
    comparedTimezones.value.push({ name: timezoneToAdd.value })
  }
  
  showAddTimezone.value = false
}

// 移除时区
function removeTimezone(index) {
  comparedTimezones.value.splice(index, 1)
}

// 格式化时区时间
function formatTimezoneTime(tzName) {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    ...(showSeconds.value ? { second: '2-digit' } : {}),
    hour12: !is24Hour.value,
    ...(tzName ? { timeZone: tzName } : {})
  }
  
  return now.value.toLocaleTimeString(
    locale.value === 'zh' ? 'zh-CN' : 'en-US', 
    options
  )
}

// 格式化时区日期
function formatTimezoneDate(tzName) {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    ...(tzName ? { timeZone: tzName } : {})
  }
  
  return now.value.toLocaleDateString(
    locale.value === 'zh' ? 'zh-CN' : 'en-US', 
    options
  )
}

// 获取时区偏移文本
function getTimezoneOffsetText(tzName) {
  if (!tzName) return localTimezoneOffset.value
  
  try {
    const offset = getTimezoneOffset(tzName)
    const hours = Math.abs(Math.floor(offset))
    const minutes = Math.abs((offset - Math.floor(offset)) * 60)
    return `GMT${offset >= 0 ? '+' : '-'}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  } catch (e) {
    console.error(`Error getting offset text for ${tzName}:`, e)
    return ''
  }
}

// 时区数据
const timezones = [
  // 流行时区
  { name: 'UTC', label: 'UTC (Coordinated Universal Time)', group: 'popular' },
  { name: 'Etc/GMT', label: 'GMT (Greenwich Mean Time)', group: 'popular' },
  { name: 'America/New_York', label: 'New York (EST/EDT)', group: 'popular' },
  { name: 'America/Los_Angeles', label: 'Los Angeles (PST/PDT)', group: 'popular' },
  { name: 'Europe/London', label: 'London (GMT/BST)', group: 'popular' },
  { name: 'Europe/Paris', label: 'Paris (CET/CEST)', group: 'popular' },
  { name: 'Asia/Tokyo', label: 'Tokyo (JST)', group: 'popular' },
  { name: 'Asia/Shanghai', label: 'Shanghai (CST)', group: 'popular' },
  { name: 'Asia/Kolkata', label: 'India (IST)', group: 'popular' },
  { name: 'Australia/Sydney', label: 'Sydney (AEST/AEDT)', group: 'popular' },
  
  // 亚洲
  { name: 'Asia/Dubai', label: 'Dubai', group: 'Asia' },
  { name: 'Asia/Hong_Kong', label: 'Hong Kong', group: 'Asia' },
  { name: 'Asia/Seoul', label: 'Seoul', group: 'Asia' },
  { name: 'Asia/Singapore', label: 'Singapore', group: 'Asia' },
  { name: 'Asia/Taipei', label: 'Taipei', group: 'Asia' },
  { name: 'Asia/Bangkok', label: 'Bangkok', group: 'Asia' },
  { name: 'Asia/Jakarta', label: 'Jakarta', group: 'Asia' },
  { name: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur', group: 'Asia' },
  { name: 'Asia/Manila', label: 'Manila', group: 'Asia' },
  { name: 'Asia/Karachi', label: 'Karachi', group: 'Asia' },
  
  // 欧洲
  { name: 'Europe/Amsterdam', label: 'Amsterdam', group: 'Europe' },
  { name: 'Europe/Berlin', label: 'Berlin', group: 'Europe' },
  { name: 'Europe/Brussels', label: 'Brussels', group: 'Europe' },
  { name: 'Europe/Madrid', label: 'Madrid', group: 'Europe' },
  { name: 'Europe/Moscow', label: 'Moscow', group: 'Europe' },
  { name: 'Europe/Rome', label: 'Rome', group: 'Europe' },
  { name: 'Europe/Stockholm', label: 'Stockholm', group: 'Europe' },
  { name: 'Europe/Zurich', label: 'Zurich', group: 'Europe' },
  
  // 美洲
  { name: 'America/Chicago', label: 'Chicago', group: 'America' },
  { name: 'America/Denver', label: 'Denver', group: 'America' },
  { name: 'America/Mexico_City', label: 'Mexico City', group: 'America' },
  { name: 'America/Phoenix', label: 'Phoenix', group: 'America' },
  { name: 'America/Toronto', label: 'Toronto', group: 'America' },
  { name: 'America/Vancouver', label: 'Vancouver', group: 'America' },
  { name: 'America/Sao_Paulo', label: 'São Paulo', group: 'America' },
  { name: 'America/Buenos_Aires', label: 'Buenos Aires', group: 'America' },
  
  // 大洋洲
  { name: 'Pacific/Auckland', label: 'Auckland', group: 'Pacific' },
  { name: 'Pacific/Honolulu', label: 'Honolulu', group: 'Pacific' },
  { name: 'Pacific/Fiji', label: 'Fiji', group: 'Pacific' },
  { name: 'Australia/Perth', label: 'Perth', group: 'Australia' },
  { name: 'Australia/Brisbane', label: 'Brisbane', group: 'Australia' },
  { name: 'Australia/Melbourne', label: 'Melbourne', group: 'Australia' }
]

// 初始化设置默认值
onMounted(() => {
  // 设置今天的日期为默认值
  const today = new Date()
  sourceDate.value = today.toISOString().split('T')[0]
  
  // 设置当前时间为默认值
  const currentTime = today.toTimeString().substring(0, 8)
  sourceTime.value = currentTime
  
  // 初始化时区比较
  comparedTimezones.value = [
    { name: '' }, // 本地时区
    { name: 'UTC' }
  ]
  
  // 开始时间更新
  startTimeUpdate()
})
</script>

<style scoped>
.timezone-converter {
  max-width: 100%;
}

@media (min-width: 1280px) {
  .timezone-converter {
    max-width: 1280px;
    margin: 0 auto;
  }
}

select, input {
  background-color: transparent;
}

.dark select, .dark input {
  color: #fff;
}
</style> 