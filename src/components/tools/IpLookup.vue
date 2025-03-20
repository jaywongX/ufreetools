<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">IP地址查询工具</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        查询IP地址的地理位置、ISP和ASN信息，支持IPv4和IPv6
      </p>
    </div>
    
    <!-- 查询表单区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <div class="flex flex-col sm:flex-row gap-3">
        <input 
          v-model="ipAddress" 
          type="text" 
          placeholder="输入IP地址 (例如: 8.8.8.8 或 2001:4860:4860::8888)" 
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
          <span>{{ isLoading ? '查询中...' : '查询IP信息' }}</span>
        </button>
        <button 
          @click="lookupCurrentIp" 
          :disabled="isLoading"
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap"
        >
          <span>查询本机IP</span>
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
          IP信息：{{ ipData.query }}
        </h3>
        
        <div class="overflow-y-auto flex-1">
          <!-- IP信息表格 -->
          <div class="border dark:border-gray-700 rounded-md overflow-hidden mb-4">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 w-1/3">IP版本</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">
                    {{ isIPv6(ipData.query) ? 'IPv6' : 'IPv4' }}
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">国家/地区</td>
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
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">地区</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.regionName }}</td>
                </tr>
                <tr v-if="ipData.city">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">城市</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.city }}</td>
                </tr>
                <tr v-if="ipData.zip">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">邮政编码</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.zip }}</td>
                </tr>
                <tr v-if="ipData.lat && ipData.lon">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">经纬度</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">
                    {{ formatCoordinates(ipData.lat, ipData.lon) }}
                  </td>
                </tr>
                <tr v-if="ipData.timezone">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">时区</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.timezone }}</td>
                </tr>
                <tr v-if="ipData.isp">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">ISP</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.isp }}</td>
                </tr>
                <tr v-if="ipData.org">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">组织</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.org }}</td>
                </tr>
                <tr v-if="ipData.as">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">AS信息</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.as }}</td>
                </tr>
                <tr v-if="ipData.asname">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">AS名称</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.asname }}</td>
                </tr>
                <tr v-if="ipData.reverse">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">反向DNS</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">{{ ipData.reverse }}</td>
                </tr>
                <tr v-if="ipData.mobile !== undefined">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">移动网络</td>
                  <td class="px-3 py-2 text-sm text-gray-900 dark:text-gray-100">
                    <span v-if="ipData.mobile" class="text-green-600 dark:text-green-400">是</span>
                    <span v-else class="text-gray-600 dark:text-gray-400">否</span>
                  </td>
                </tr>
                <tr v-if="ipData.proxy !== undefined">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">代理/VPN</td>
                  <td class="px-3 py-2 text-sm">
                    <span v-if="ipData.proxy" class="text-yellow-600 dark:text-yellow-400">是</span>
                    <span v-else class="text-gray-600 dark:text-gray-400">否</span>
                  </td>
                </tr>
                <tr v-if="ipData.hosting !== undefined">
                  <td class="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300">托管/数据中心</td>
                  <td class="px-3 py-2 text-sm">
                    <span v-if="ipData.hosting" class="text-blue-600 dark:text-blue-400">是</span>
                    <span v-else class="text-gray-600 dark:text-gray-400">否</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- 查询时间和API信息 -->
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
            <p>查询时间: {{ new Date().toLocaleString() }}</p>
            <p class="mt-1">数据来源: ip-api.com</p>
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
              复制信息
            </button>
            <button 
              @click="ipData = null; error = ''" 
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              清除结果
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
            位置地图
          </h3>
          
          <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
            <!-- 这里会加载一个iframe或地图组件 -->
            <div v-if="ipData && ipData.lat && ipData.lon" class="w-full h-full">
              <iframe 
                :src="`https://maps.google.com/maps?q=${ipData.lat},${ipData.lon}&z=8&output=embed`"
                class="w-full h-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div v-else class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              无法显示地图数据
            </div>
          </div>
        </div>
        
        <!-- 安全信息区域 -->
        <div v-if="ipData" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            安全评估
          </h3>
          
          <div class="space-y-3">
            <!-- 代理/VPN检测 -->
            <div class="flex items-start">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                :class="ipData.proxy ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400' : 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'"
              >
                <svg v-if="!ipData.proxy" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-800 dark:text-gray-200">代理/VPN检测</h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  {{ ipData.proxy ? '此IP可能来自代理、VPN或Tor出口节点' : '未检测到代理或VPN使用' }}
                </p>
              </div>
            </div>
            
            <!-- 托管/数据中心检测 -->
            <div class="flex items-start">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                :class="ipData.hosting ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'"
              >
                <svg v-if="!ipData.hosting" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-800 dark:text-gray-200">托管/数据中心</h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  {{ ipData.hosting ? '此IP来自托管服务商或数据中心' : '未检测到托管或数据中心IP' }}
                </p>
              </div>
            </div>
            
            <!-- 移动网络检测 -->
            <div class="flex items-start">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                :class="ipData.mobile ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-800 dark:text-gray-200">移动网络</h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  {{ ipData.mobile ? '此IP来自移动网络运营商' : '此IP不是移动网络' }}
                </p>
              </div>
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
        历史查询
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
          清除历史
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

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
  const latDir = lat >= 0 ? 'N' : 'S'
  const lonDir = lon >= 0 ? 'E' : 'W'
  
  const absLat = Math.abs(lat)
  const absLon = Math.abs(lon)
  
  return `${absLat.toFixed(6)}° ${latDir}, ${absLon.toFixed(6)}° ${lonDir}`
}

// 查询IP信息
async function lookupIp() {
  if (!isValidInput.value) {
    error.value = '请输入有效的IP地址或域名'
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
      error.value = '无法获取IP信息'
    }
  } catch (err) {
    console.error('IP查询错误:', err)
    error.value = '查询过程中发生错误，请稍后再试'
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
      error.value = '无法获取您的IP地址'
      isLoading.value = false
    }
  } catch (err) {
    console.error('获取当前IP错误:', err)
    error.value = '无法获取您的IP地址，请手动输入'
    isLoading.value = false
  }
}

// 复制IP信息到剪贴板
function copyIpInfo() {
  if (!ipData.value) return
  
  const info = [
    `IP地址: ${ipData.value.query}`,
    `国家/地区: ${ipData.value.country}`,
    ipData.value.regionName ? `地区: ${ipData.value.regionName}` : '',
    ipData.value.city ? `城市: ${ipData.value.city}` : '',
    ipData.value.isp ? `ISP: ${ipData.value.isp}` : '',
    ipData.value.org ? `组织: ${ipData.value.org}` : '',
    ipData.value.as ? `AS信息: ${ipData.value.as}` : '',
    `经纬度: ${ipData.value.lat}, ${ipData.value.lon}`,
    `查询时间: ${new Date().toLocaleString()}`
  ].filter(line => line).join('\n')
  
  navigator.clipboard.writeText(info)
    .then(() => showNotification('IP信息已复制到剪贴板'))
    .catch(err => {
      console.error('复制失败:', err)
      showNotification('复制失败，请手动复制')
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
  showNotification('历史记录已清除')
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