<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.ip-lookup.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.ip-lookup.description') }}
      </p>
    </div>
    
    <!-- 查询表单区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <div class="flex flex-col sm:flex-row gap-3">
        <input 
          v-model="ipAddress" 
          type="text" 
          :placeholder="$t('tools.ip-lookup.input.ipPlaceholder')"
          class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          @keyup.enter="lookupIp"
        />
        <button 
          @click="lookupIp" 
          :disabled="!isValidInput || isLoading"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap"
        >
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ isLoading ? $t('tools.ip-lookup.messages.lookingUp', { query: ipAddress }) : $t('tools.ip-lookup.actions.lookup') }}</span>
        </button>
        <button 
          @click="lookupCurrentIp" 
          :disabled="isLoading"
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap"
        >
          <span>{{ $t('tools.ip-lookup.input.myIP') }}</span>
        </button>
      </div>
      <div v-if="error" class="mt-3 text-sm text-red-600 dark:text-red-400">
        {{ error }}
      </div>
    </div>
    
    <!-- 查询结果区域 -->
    <div v-if="ipData" class="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
      <!-- 左侧：IP详细信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ $t('tools.ip-lookup.results.general.ipAddress') }}: {{ ipData.query }}
        </h3>
        
        <div class="overflow-y-auto flex-1">
          <!-- IP信息表格 -->
          <div class="border dark:border-gray-700 rounded-md overflow-hidden mb-4">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 w-1/3">{{ $t('tools.ip-lookup.results.general.type') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">
                    {{ isIPv6(ipData.query) ? $t('tools.ip-lookup.results.general.ipv6') : $t('tools.ip-lookup.results.general.ipv4') }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.location.country') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">
                    <div class="flex items-center">
                      <img 
                        v-if="ipData.countryCode" 
                        :src="`https://flagcdn.com/24x18/${ipData.countryCode.toLowerCase()}.png`" 
                        :alt="ipData.country" 
                        class="mr-2 h-4"
                      />
                      {{ ipData.country }}
                    </div>
                  </td>
                </tr>
                <tr v-if="ipData.regionName">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.location.region') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.regionName }}</td>
                </tr>
                <tr v-if="ipData.city">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.location.city') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.city }}</td>
                </tr>
                <tr v-if="ipData.zip">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.location.postalCode') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.zip }}</td>
                </tr>
                <tr v-if="ipData.lat && ipData.lon">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.location.coordinates') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">
                    {{ formatCoordinates(ipData.lat, ipData.lon) }}
                  </td>
                </tr>
                <tr v-if="ipData.timezone">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.location.timezone') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.timezone }}</td>
                </tr>
                <tr v-if="ipData.isp">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.network.isp') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.isp }}</td>
                </tr>
                <tr v-if="ipData.org">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.network.organization') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.org }}</td>
                </tr>
                <tr v-if="ipData.as">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.network.asn') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.as }}</td>
                </tr>
                <tr v-if="ipData.asname">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.network.organization') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.asname }}</td>
                </tr>
                <tr v-if="ipData.reverse">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.general.reverse') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.reverse }}</td>
                </tr>
                <tr v-if="ipData.mobile !== undefined">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.additional.mobile') }}</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">
                    <span v-if="ipData.mobile" class="text-green-600 dark:text-green-400">{{ $t('tools.ip-lookup.results.general.yes') }}</span>
                    <span v-else class="text-gray-600 dark:text-gray-400">{{ $t('tools.ip-lookup.results.general.no') }}</span>
                  </td>
                </tr>
                <tr v-if="ipData.proxy !== undefined">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.security.isProxy') }}</td>
                  <td class="px-3 py-2 text-sm">
                    <span v-if="ipData.proxy" class="text-yellow-600 dark:text-yellow-400">{{ $t('tools.ip-lookup.results.general.yes') }}</span>
                    <span v-else class="text-gray-600 dark:text-gray-400">{{ $t('tools.ip-lookup.results.general.no') }}</span>
                  </td>
                </tr>
                <tr v-if="ipData.hosting !== undefined">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.ip-lookup.results.additional.hosting') }}</td>
                  <td class="px-3 py-2 text-sm">
                    <span v-if="ipData.hosting" class="text-blue-600 dark:text-blue-400">{{ $t('tools.ip-lookup.results.general.yes') }}</span>
                    <span v-else class="text-gray-600 dark:text-gray-400">{{ $t('tools.ip-lookup.results.general.no') }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- 查询时间和API信息 -->
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
            <p>{{ $t('tools.ip-lookup.results.queryTime') }}: {{ new Date().toLocaleString() }}</p>
            <p class="mt-1">{{ $t('tools.ip-lookup.results.dataSource') }}: ip-api.com</p>
          </div>
          
          <!-- 操作按钮 -->
          <div class="mt-4 flex space-x-2">
            <button 
              @click="copyIpInfo" 
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {{ $t('tools.ip-lookup.actions.copyAll') }}
            </button>
            <button 
              @click="ipData = null; error = ''" 
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {{ $t('tools.ip-lookup.actions.clear') }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- 右侧：地图和额外信息 -->
      <div class="flex flex-col gap-4">
        <!-- 地图区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex-1">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ $t('tools.ip-lookup.map.title') }}
          </h3>
          
          <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
            <div v-if="ipData && ipData.lat && ipData.lon" class="w-full h-full">
              <iframe 
                :src="`https://maps.google.com/maps?q=${ipData.lat},${ipData.lon}&z=8&output=embed&hl=${locale.value === 'zh' ? 'zh-CN' : 'en'}&gl=${locale.value === 'zh' ? 'CN' : 'US'}`"
                class="w-full h-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div v-else class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              {{ $t('tools.ip-lookup.map.noLocation') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 历史查询记录 -->
    <div v-if="searchHistory.length > 0" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mt-4">
      <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{ $t('tools.ip-lookup.history.title') }}
      </h3>
      
      <div class="flex flex-wrap gap-2 mt-2">
        <button
          v-for="(item, index) in searchHistory"
          :key="index"
          @click="ipAddress = item; lookupIp()"
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md text-sm"
        >
          {{ item }}
        </button>
        <button
          @click="clearHistory"
          class="px-3 py-1 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-800 dark:text-red-300 rounded-md text-sm"
        >
          {{ $t('tools.ip-lookup.history.clear') }}
        </button>
      </div>
    </div>
    
    <!-- 通知提示 -->
    <div 
      v-if="notification.show" 
      class="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-md shadow-lg transition-opacity duration-300"
      :class="{'opacity-0': notification.fadeOut, 'opacity-100': !notification.fadeOut}"
    >
      {{ notification.message }}
    </div>
    
    <IpLookupArticle />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import IpLookupArticle from './IpLookupArticle.vue'

// 初始化国际化
const { t, locale } = useI18n()

// 状态变量
const ipAddress = ref('')
const ipData = ref(null)
const isLoading = ref(false)
const error = ref('')
const searchHistory = ref([])
const notification = ref({ show: false, message: '', fadeOut: false })

// 验证IP地址输入
const isValidInput = computed(() => {
  if (!ipAddress.value.trim()) return false
  
  // 允许域名、IPv4或IPv6地址
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}$|^([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}$|^([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}$|^([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$/
  const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9\-\.]+)?[a-zA-Z0-9](\.[a-zA-Z]{2,})+$/
  
  return ipv4Regex.test(ipAddress.value) || 
         ipv6Regex.test(ipAddress.value) || 
         domainRegex.test(ipAddress.value)
})

// 检查是否为IPv6地址
function isIPv6(ip) {
  return ip && ip.includes(':')
}

// 格式化坐标显示
function formatCoordinates(lat, lon) {
  const latDir = lat >= 0 ? (locale.value === 'zh' ? '北' : 'N') : (locale.value === 'zh' ? '南' : 'S')
  const lonDir = lon >= 0 ? (locale.value === 'zh' ? '东' : 'E') : (locale.value === 'zh' ? '西' : 'W')
  
  const absLat = Math.abs(lat)
  const absLon = Math.abs(lon)
  
  return `${absLat.toFixed(6)}° ${latDir}, ${absLon.toFixed(6)}° ${lonDir}`
}

// 查询IP信息
async function lookupIp() {
  if (!isValidInput.value) {
    error.value = t('tools.ip-lookup.messages.invalidIP')
    return
  }
  
  isLoading.value = true
  error.value = ''
  
  try {
    // 使用ip-api.com API
    const url = `http://ip-api.com/json/${encodeURIComponent(ipAddress.value)}?fields=status,message,continent,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.status === 'success') {
      ipData.value = {
        query: data.query,
        country: data.country,
        countryCode: data.countryCode,
        regionName: data.regionName,
        city: data.city,
        zip: data.zip,
        lat: data.lat,
        lon: data.lon,
        timezone: data.timezone,
        isp: data.isp,
        org: data.org,
        as: data.as,
        asname: data.asname,
        reverse: data.reverse,
        mobile: data.mobile,
        proxy: data.proxy,
        hosting: data.hosting
      }
      // 更新搜索历史
      if (!searchHistory.value.includes(ipAddress.value)) {
        searchHistory.value.unshift(ipAddress.value)
        
        // 限制历史记录数量为10个
        if (searchHistory.value.length > 10) {
          searchHistory.value = searchHistory.value.slice(0, 10)
        }
        
        // 保存到本地存储
        localStorage.setItem('ipLookupHistory', JSON.stringify(searchHistory.value))
      }
    } else {
      error.value = t('tools.ip-lookup.results.error', { message: data.message || t('tools.ip-lookup.results.unknown') })
    }
  } catch (err) {
    console.error('IP查询错误:', err)
    error.value = t('tools.ip-lookup.messages.rateLimited')
    ipData.value = null
  } finally {
    isLoading.value = false
  }
}

// 查询当前用户的IP地址
async function lookupCurrentIp() {
  isLoading.value = true
  error.value = ''
  
  try {
    // 使用ip-api.com获取当前用户的IP地址
    const url = 'http://ip-api.com/json/?fields=query'
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.query) {
      ipAddress.value = data.query
      lookupIp()
    } else {
      error.value = t('tools.ip-lookup.messages.invalidIP')
      isLoading.value = false
    }
  } catch (err) {
    console.error('获取当前IP错误:', err)
    error.value = t('tools.ip-lookup.messages.rateLimited')
    isLoading.value = false
  }
}

// 复制IP信息到剪贴板
function copyIpInfo() {
  if (!ipData.value) return
  
  const info = [
    `${t('tools.ip-lookup.results.general.ipAddress')}: ${ipData.value.query}`,
    `${t('tools.ip-lookup.results.location.country')}: ${ipData.value.country}`,
    ipData.value.regionName ? `${t('tools.ip-lookup.results.location.region')}: ${ipData.value.regionName}` : '',
    ipData.value.city ? `${t('tools.ip-lookup.results.location.city')}: ${ipData.value.city}` : '',
    ipData.value.isp ? `${t('tools.ip-lookup.results.network.isp')}: ${ipData.value.isp}` : '',
    ipData.value.org ? `${t('tools.ip-lookup.results.network.organization')}: ${ipData.value.org}` : '',
    ipData.value.as ? `${t('tools.ip-lookup.results.network.asn')}: ${ipData.value.as}` : '',
    `${t('tools.ip-lookup.results.location.coordinates')}: ${ipData.value.lat}, ${ipData.value.lon}`,
    `${t('tools.ip-lookup.results.queryTime')}: ${new Date().toLocaleString()}`
  ].filter(line => line).join('\n')
  
  navigator.clipboard.writeText(info)
    .then(() => showNotification(t('tools.ip-lookup.messages.copied')))
    .catch(err => {
      console.error('复制失败:', err)
      showNotification(t('tools.ip-lookup.messages.copyFailed'))
    })
}

// 显示通知
function showNotification(message) {
  // 如果已有通知正在显示，先隐藏它
  if (notification.value.show) {
    notification.value.fadeOut = true
    setTimeout(() => {
      notification.value.show = false
      notification.value.fadeOut = false
      displayNewNotification()
    }, 300)
  } else {
    displayNewNotification()
  }
  
  function displayNewNotification() {
    notification.value.message = message
    notification.value.show = true
    notification.value.fadeOut = false
    
    // 3秒后自动隐藏
    setTimeout(() => {
      notification.value.fadeOut = true
      setTimeout(() => {
        notification.value.show = false
      }, 300)
    }, 3000)
  }
}

// 清除历史记录
function clearHistory() {
  searchHistory.value = []
  localStorage.removeItem('ipLookupHistory')
  showNotification(t('tools.ip-lookup.messages.historyCleared'))
}

// 组件挂载时从本地存储加载历史记录
onMounted(() => {
  const savedHistory = localStorage.getItem('ipLookupHistory')
  if (savedHistory) {
    try {
      searchHistory.value = JSON.parse(savedHistory)
    } catch (e) {
      console.error('解析历史记录失败:', e)
    }
  }
})
</script>