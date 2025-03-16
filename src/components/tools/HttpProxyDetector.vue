<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">前端代理检测器</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        检测您的网络连接是否使用了代理，分析X-Forwarded-For和其他代理相关的HTTP头信息
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
          <span>{{ isDetecting ? '检测中...' : '开始检测' }}</span>
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
            代理摘要
          </button>
          <button 
            @click="activeTab = 'headers'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'headers' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            完整请求头
          </button>
          <button 
            @click="activeTab = 'info'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'info' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            代理信息解释
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
                {{ proxyDetected ? '检测到代理' : '未检测到代理' }}
              </h3>
              <p class="text-sm mt-1" :class="proxyDetected ? 'text-yellow-700 dark:text-yellow-400' : 'text-green-700 dark:text-green-400'">
                {{ proxyDetected ? '您的请求可能经过了一个或多个代理服务器' : '您的请求似乎直接到达了目标服务器，未经过代理' }}
              </p>
            </div>
          </div>
          
          <!-- IP地址信息 -->
          <div class="mb-6 bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">客户端IP信息</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">远程IP地址:</p>
                <p class="font-mono text-gray-800 dark:text-gray-200">{{ proxyResults.remoteAddress || 'N/A' }}</p>
              </div>
              <div v-if="proxyResults.geoInfo">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">地理位置:</p>
                <p class="text-gray-800 dark:text-gray-200">
                  {{ proxyResults.geoInfo.country || 'N/A' }}{{ proxyResults.geoInfo.city ? `, ${proxyResults.geoInfo.city}` : '' }}
                </p>
              </div>
              <div v-if="proxyResults.geoInfo && proxyResults.geoInfo.isp">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">ISP提供商:</p>
                <p class="text-gray-800 dark:text-gray-200">{{ proxyResults.geoInfo.isp }}</p>
              </div>
            </div>
          </div>
          
          <!-- 代理头信息 -->
          <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">代理相关头信息</h3>
            
            <div class="space-y-4">
              <!-- X-Forwarded-For -->
              <div class="border-b border-gray-200 dark:border-gray-700 pb-3">
                <div class="flex justify-between items-center mb-2">
                  <p class="font-medium text-gray-700 dark:text-gray-300">X-Forwarded-For</p>
                  <span 
                    v-if="proxyResults.headers['x-forwarded-for']" 
                    class="px-2 py-0.5 text-xs rounded-full"
                    :class="proxyDetected ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'"
                  >
                    {{ proxyDetected ? '已检测' : '已设置' }}
                  </span>
                  <span v-else class="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-full">未设置</span>
                </div>
                
                <div v-if="proxyResults.headers['x-forwarded-for']" class="mb-2">
                  <div class="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                    <code class="font-mono text-sm text-gray-800 dark:text-gray-200">{{ proxyResults.headers['x-forwarded-for'] }}</code>
                  </div>
                  
                  <div v-if="forwardedIps.length > 0" class="mt-3">
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">代理链:</p>
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
                        {{ proxyResults.remoteAddress || 'Server' }}
                      </div>
                    </div>
                  </div>
                </div>
                <p v-else class="text-sm text-gray-600 dark:text-gray-400 italic">未发现X-Forwarded-For头，这表明请求可能未经过代理或代理未添加此头信息。</p>
              </div>
              
              <!-- 其他代理相关头 -->
              <div v-for="header in ['x-forwarded-proto', 'x-forwarded-host', 'via', 'forwarded']" :key="header" class="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0">
                <div class="flex justify-between items-center mb-2">
                  <p class="font-medium text-gray-700 dark:text-gray-300">{{ formatHeaderName(header) }}</p>
                  <span 
                    v-if="proxyResults.headers[header]" 
                    class="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full"
                  >
                    已设置
                  </span>
                  <span v-else class="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-full">未设置</span>
                </div>
                
                <div v-if="proxyResults.headers[header]" class="mb-2">
                  <div class="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                    <code class="font-mono text-sm text-gray-800 dark:text-gray-200">{{ proxyResults.headers[header] }}</code>
                  </div>
                </div>
                <p v-else class="text-sm text-gray-600 dark:text-gray-400 italic">未发现此头信息</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 完整请求头 -->
        <div v-if="activeTab === 'headers'">
          <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">所有HTTP请求头</h3>
            
            <div class="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
              <table class="w-full">
                <thead class="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">头名称</th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">值</th>
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
                复制到剪贴板
              </button>
            </div>
          </div>
        </div>
        
        <!-- 代理信息解释 -->
        <div v-if="activeTab === 'info'" class="space-y-6">
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">什么是X-Forwarded-For?</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              X-Forwarded-For (XFF) 是一个HTTP头字段，用于标识通过HTTP代理或负载均衡器连接到Web服务器的客户端的原始IP地址。
              当请求经过代理时，服务器通常只能看到代理服务器的IP地址，而XFF头提供了一个追溯原始客户端IP的方法。
            </p>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">XFF头的格式</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
              XFF头的标准格式是一个逗号分隔的IP地址列表，最左边的IP是原始客户端，而后续的IP是经过的代理服务器：
            </p>
            <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded border border-gray-200 dark:border-gray-700 font-mono text-sm">
              X-Forwarded-For: client, proxy1, proxy2
            </div>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">其他相关代理头</h3>
            <ul class="space-y-3">
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">X-Forwarded-Proto</span>: 
                标识客户端连接到代理使用的协议(HTTP或HTTPS)
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">X-Forwarded-Host</span>: 
                标识客户端请求的原始主机名
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">Via</span>: 
                指示请求和响应经过的代理服务器
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                <span class="font-medium text-gray-800 dark:text-gray-200">Forwarded</span>: 
                较新的标准头，包含了客户端和所有代理信息
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">为什么代理信息很重要</h3>
            <ul class="list-disc list-inside space-y-1">
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                安全和访问控制 - 准确识别客户端IP对于防止滥用和实施IP-based访问控制很重要
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                日志记录 - 对于审计和问题诊断，记录真实的客户端IP比代理IP更有用
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                地理位置服务 - 基于IP的地理位置服务需要真实的客户端IP才能提供准确结果
              </li>
              <li class="text-gray-600 dark:text-gray-400 text-sm">
                内容定制 - 一些服务根据用户地理位置提供本地化内容
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">安全注意事项</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              需要注意的是，X-Forwarded-For头可以被客户端伪造。在高安全性要求的环境中，应该仅信任来自已知代理服务器添加的XFF信息，
              或使用其他方法验证客户端IP。
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
          <p class="font-medium mb-1">隐私提示</p>
          <p class="mb-2">
            检测过程中，您的IP地址和HTTP头信息将被发送到第三方API服务用于分析。
            这些服务可能会收集并存储这些信息以提供服务。
          </p>
          <p>如有隐私顾虑，请选择不同的API提供商或考虑使用VPN服务。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 状态变量
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
            throw new Error(data.message || '获取IP信息失败')
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
    console.error('代理检测失败:', err)
    error.value = `检测失败: ${err.message || '未知错误'}`
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
      alert('已复制请求头到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 组件挂载时自动检测
onMounted(() => {
  detectProxy()
})
</script> 