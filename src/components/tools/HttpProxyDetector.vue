<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.http-proxy-detector.title') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.http-proxy-detector.intro') }}
      </p>
      
      <!-- 操作按钮 -->
      <div class="flex flex-wrap gap-3 mb-6">
        <button 
          @click="detectProxy" 
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark flex items-center"
          :disabled="isDetecting"
        >
          <svg v-if="isDetecting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ isDetecting ? $t('tools.http-proxy-detector.detection.detecting') : $t('tools.http-proxy-detector.detection.start') }}</span>
        </button>
        
        <select 
          v-model="selectedApi" 
          class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          <option value="ipify">ipify API</option>
          <option value="ipapi">IP-API</option>
          <option value="httpbin">httpbin</option>
        </select>
      </div>
      
      <!-- 检测结果提示 -->
      <div v-if="error" class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md p-3 mb-6">
        <div class="flex">
          <svg class="h-5 w-5 text-red-400 dark:text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-sm text-red-700 dark:text-red-400">{{ error }}</p>
        </div>
      </div>
    </div>
    
    <!-- 检测结果 -->
    <div v-if="hasResults" class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex -mb-px">
          <button 
            @click="activeTab = 'summary'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'summary' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            {{ $t('tools.http-proxy-detector.results.summary') }}
          </button>
          <button 
            @click="activeTab = 'headers'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'headers' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            {{ $t('tools.http-proxy-detector.results.headers') }}
          </button>
          <button 
            @click="activeTab = 'info'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'info' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            {{ $t('tools.http-proxy-detector.results.info') }}
          </button>
        </nav>
      </div>
      
      <div class="p-4">
        <!-- 代理摘要 -->
        <div v-if="activeTab === 'summary'">
          <!-- 代理判断结果 -->
          <div class="mb-6 flex items-center p-4 rounded-md" :class="proxyDetected ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50' : 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50'">
            <div class="flex-shrink-0 mr-3">
              <svg v-if="proxyDetected" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <svg v-else class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-md font-medium" :class="proxyDetected ? 'text-yellow-800 dark:text-yellow-300' : 'text-green-800 dark:text-green-300'">
                {{ proxyDetected ? $t('tools.http-proxy-detector.results.detected') : $t('tools.http-proxy-detector.results.notDetected') }}
              </h3>
              <p class="text-sm mt-1" :class="proxyDetected ? 'text-yellow-700 dark:text-yellow-400' : 'text-green-700 dark:text-green-400'">
                {{ proxyDetected ? $t('tools.http-proxy-detector.results.detectedDescription') : $t('tools.http-proxy-detector.results.notDetectedDescription') }}
              </p>
            </div>
          </div>
          
          <!-- IP地址信息 -->
          <div class="mb-6 bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.http-proxy-detector.results.clientInfo') }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.http-proxy-detector.results.remoteIp') }}:</p>
                <p class="font-mono text-gray-800 dark:text-gray-200">{{ proxyResults.remoteAddress || 'N/A' }}</p>
              </div>
              <div v-if="proxyResults.geoInfo">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.http-proxy-detector.results.location') }}:</p>
                <p class="text-gray-800 dark:text-gray-200">
                  {{ proxyResults.geoInfo.country || 'N/A' }}{{ proxyResults.geoInfo.city ? `, ${proxyResults.geoInfo.city}` : '' }}
                </p>
              </div>
              <div v-if="proxyResults.geoInfo && proxyResults.geoInfo.isp">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.http-proxy-detector.results.isp') }}:</p>
                <p class="text-gray-800 dark:text-gray-200">{{ proxyResults.geoInfo.isp }}</p>
              </div>
            </div>
          </div>
          
          <!-- 代理头信息 -->
          <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.http-proxy-detector.results.proxyHeaders') }}</h3>
            
            <div class="space-y-4">
              <!-- X-Forwarded-For -->
              <div class="border-b border-gray-200 dark:border-gray-700 pb-3">
                <div class="flex justify-between items-center mb-2">
                  <p class="font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.http-proxy-detector.headers.common.xForwardedFor') }}</p>
                  <span 
                    v-if="proxyResults.headers['x-forwarded-for']" 
                    class="px-2 py-0.5 text-xs rounded-full"
                    :class="proxyDetected ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'"
                  >
                    {{ proxyDetected ? $t('tools.http-proxy-detector.detection.noProxies') : $t('tools.http-proxy-detector.headers.select') }}
                  </span>
                  <span v-else class="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-full">{{ $t('tools.http-proxy-detector.results.notSet') }}</span>
                </div>
                
                <div v-if="proxyResults.headers['x-forwarded-for']" class="mb-2">
                  <div class="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                    <code class="font-mono text-sm text-gray-800 dark:text-gray-200">{{ proxyResults.headers['x-forwarded-for'] }}</code>
                  </div>
                  
                  <div v-if="forwardedIps.length > 0" class="mt-3">
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ $t('tools.http-proxy-detector.results.proxyChain') }}:</p>
                    <div class="flex flex-wrap items-center">
                      <template v-for="(ip, index) in forwardedIps" :key="index">
                        <div class="bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary px-2 py-1 rounded font-mono text-xs">
                          {{ ip }}
                        </div>
                        <svg v-if="index < forwardedIps.length - 1" class="h-4 w-4 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </template>
                      <svg v-if="forwardedIps.length > 0" class="h-4 w-4 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <div class="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded font-mono text-xs">
                        {{ proxyResults.remoteAddress || $t('tools.http-proxy-detector.results.server') }}
                      </div>
                    </div>
                  </div>
                </div>
                <p v-else class="text-sm text-gray-600 dark:text-gray-400 italic">{{ $t('tools.http-proxy-detector.xff.notFound') }}</p>
              </div>
              
              <!-- 其他代理相关头 -->
              <div v-for="header in ['x-forwarded-proto', 'x-forwarded-host', 'via', 'forwarded']" :key="header" class="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0">
                <div class="flex justify-between items-center mb-2">
                  <p class="font-medium text-gray-700 dark:text-gray-300">{{ formatHeaderName(header) }}</p>
                  <span 
                    v-if="proxyResults.headers[header]" 
                    class="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full"
                  >
                    {{ $t('tools.http-proxy-detector.detection.completed') }}
                  </span>
                  <span v-else class="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-full">{{ $t('tools.http-proxy-detector.results.notSet') }}</span>
                </div>
                
                <div v-if="proxyResults.headers[header]" class="mb-2">
                  <div class="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                    <code class="font-mono text-sm text-gray-800 dark:text-gray-200">{{ proxyResults.headers[header] }}</code>
                  </div>
                </div>
                <p v-else class="text-sm text-gray-600 dark:text-gray-400 italic">{{ $t('tools.http-proxy-detector.headers.notFound') }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 完整请求头 -->
        <div v-if="activeTab === 'headers'">
          <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.http-proxy-detector.headers.all') }}</h3>
            
            <div class="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
              <table class="w-full">
                <thead class="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.http-proxy-detector.headers.name') }}</th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.http-proxy-detector.headers.value') }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(value, name) in proxyResults.headers" :key="name" class="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td class="py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">{{ formatHeaderName(name) }}</td>
                    <td class="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 font-mono break-all">{{ value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="mt-3 flex justify-end">
              <button 
                @click="copyHeadersToClipboard" 
                class="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
              >
                <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                {{ $t('tools.http-proxy-detector.actions.copyToClipboard') }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- 代理信息解释 -->
        <div v-if="activeTab === 'info'" class="space-y-6">
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.http-proxy-detector.xff.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ $t('tools.http-proxy-detector.xff.description') }}
            </p>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.http-proxy-detector.xff.format.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
              {{ $t('tools.http-proxy-detector.xff.format.description') }}
            </p>
            <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded border border-gray-200 dark:border-gray-700 font-mono text-sm">
              X-Forwarded-For: client, proxy1, proxy2
            </div>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.http-proxy-detector.xff.related.title') }}</h3>
            <ul class="space-y-3">
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">X-Forwarded-Proto</span>: 
                {{ $t('tools.http-proxy-detector.xff.related.forwardedProto') }}
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">X-Forwarded-Host</span>: 
                {{ $t('tools.http-proxy-detector.xff.related.forwardedHost') }}
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">Via</span>: 
                {{ $t('tools.http-proxy-detector.xff.related.via') }}
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">Forwarded</span>: 
                {{ $t('tools.http-proxy-detector.xff.related.forwarded') }}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.http-proxy-detector.xff.importance.title') }}</h3>
            <ul class="list-disc list-inside space-y-1">
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                {{ $t('tools.http-proxy-detector.xff.importance.security') }}
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                {{ $t('tools.http-proxy-detector.xff.importance.logging') }}
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                {{ $t('tools.http-proxy-detector.xff.importance.geolocation') }}
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                {{ $t('tools.http-proxy-detector.xff.importance.content') }}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.http-proxy-detector.xff.security.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ $t('tools.http-proxy-detector.xff.security.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部提示信息 -->
    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-md p-4 text-sm text-blue-700 dark:text-blue-300">
      <div class="flex">
        <svg class="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p class="font-medium mb-1">{{ $t('tools.http-proxy-detector.privacy.title') }}</p>
          <p class="mb-2">
            {{ $t('tools.http-proxy-detector.privacy.description') }}
          </p>
          <p>{{ $t('tools.http-proxy-detector.privacy.suggestion') }}</p>
        </div>
      </div>
    </div>
    <HttpProxyDetectorArticle />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import HttpProxyDetectorArticle from './HttpProxyDetectorArticle.vue'
const { t } = useI18n()

// 状态管理
const isDetecting = ref(false)
const error = ref('')
const activeTab = ref('summary')
const hasResults = ref(false)
const selectedApi = ref('ipify')
const proxyResults = ref({
  remoteAddress: '',
  headers: {},
  geoInfo: null
})

// 格式化头名称
function formatHeaderName(name) {
  return name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-')
}

// 检测是否存在代理
const proxyDetected = computed(() => {
  const headers = proxyResults.value.headers
  return !!(
    headers['x-forwarded-for'] || 
    headers['x-forwarded-proto'] || 
    headers['x-forwarded-host'] || 
    headers['via'] || 
    headers['forwarded']
  )
})

// 获取转发的IP列表
const forwardedIps = computed(() => {
  const xff = proxyResults.value.headers['x-forwarded-for']
  if (!xff) return []
  return xff.split(/\s*,\s*/).filter(ip => ip.trim())
})

// 检测代理
async function detectProxy() {
  isDetecting.value = true
  error.value = ''
  
  try {
    let response
    switch(selectedApi.value) {
      case 'ipify':
        response = await fetch('https://api.ipify.org?format=json')
        if (response.ok) {
          const ipData = await response.json()
          // 获取IP后，再获取详细信息
          const detailsResponse = await fetch(`https://ipinfo.io/${ipData.ip}/json`)
          if (detailsResponse.ok) {
            const details = await detailsResponse.json()
            proxyResults.value = {
              remoteAddress: ipData.ip,
              headers: {},
              geoInfo: {
                country: details.country,
                city: details.city,
                region: details.region,
                loc: details.loc,
                org: details.org,
                postal: details.postal,
                timezone: details.timezone,
                isp: details.org
              }
            }
            
            // 获取头信息
            const headersResponse = await fetch('https://httpbin.org/headers')
            if (headersResponse.ok) {
              const headersData = await headersResponse.json()
              proxyResults.value.headers = Object.entries(headersData.headers)
                .reduce((acc, [key, value]) => {
                  acc[key.toLowerCase()] = value
                  return acc
                }, {})
              
              hasResults.value = true
            }
          }
        }
        break
        
      case 'ipapi':
        response = await fetch('http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query')
        if (response.ok) {
          const data = await response.json()
          if (data.status === 'success') {
            proxyResults.value = {
              remoteAddress: data.query,
              headers: {},
              geoInfo: {
                country: data.country,
                city: data.city,
                region: data.regionName,
                loc: `${data.lat},${data.lon}`,
                org: data.org,
                postal: data.zip,
                timezone: data.timezone,
                isp: data.isp
              }
            }
            
            // 获取头信息
            const headersResponse = await fetch('https://httpbin.org/headers')
            if (headersResponse.ok) {
              const headersData = await headersResponse.json()
              proxyResults.value.headers = Object.entries(headersData.headers)
                .reduce((acc, [key, value]) => {
                  acc[key.toLowerCase()] = value
                  return acc
                }, {})
              
              hasResults.value = true
            }
          } else {
            throw new Error(data.message || $t('tools.http-proxy-detector.messages.unknown'))
          }
        }
        break
        
      case 'httpbin':
      default:
        response = await fetch('https://httpbin.org/anything')
        if (response.ok) {
          const data = await response.json()
          proxyResults.value = {
            remoteAddress: data.origin,
            headers: Object.entries(data.headers)
              .reduce((acc, [key, value]) => {
                acc[key.toLowerCase()] = value
                return acc
              }, {}),
            geoInfo: null
          }
          
          hasResults.value = true
        }
        break
    }
  } catch (err) {
    console.error(err)
    error.value = t('tools.http-proxy-detector.messages.error', { message: err.message || t('tools.http-proxy-detector.messages.unknown') })
    hasResults.value = false
  } finally {
    isDetecting.value = false
  }
}

// 复制头信息到剪贴板
function copyHeadersToClipboard() {
  const headersText = Object.entries(proxyResults.value.headers)
    .map(([name, value]) => `${formatHeaderName(name)}: ${value}`)
    .join('\n')
  
  navigator.clipboard.writeText(headersText)
    .then(() => {
      alert(t('tools.http-proxy-detector.messages.copied'))
    })
    .catch(err => {
      console.error(err)
      alert(t('tools.http-proxy-detector.messages.copyFailed'))
    })
}

// 组件挂载时自动检测
onMounted(() => {
  detectProxy()
})
</script> 