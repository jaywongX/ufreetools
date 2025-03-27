<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.api-request-tool.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.api-request-tool.description') }}
      </p>
    </div>
    
    <!-- 主工作区域 -->
    <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- 请求配置区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col h-full">
        <!-- 请求URL和方法 -->
        <div class="flex flex-col sm:flex-row mb-4 gap-2">
          <div class="w-full sm:w-32">
            <select 
              v-model="method" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
              <option value="PATCH">PATCH</option>
              <option value="HEAD">HEAD</option>
              <option value="OPTIONS">OPTIONS</option>
            </select>
          </div>
          <div class="flex-1">
            <input 
              v-model="url" 
              type="text" 
              placeholder="https://api.example.com/endpoint" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
          <button 
            @click="sendRequest" 
            :disabled="!url || isLoading"
            class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading">{{ $t('tools.api-request-tool.request.send') }}...</span>
            <span v-else>{{ $t('tools.api-request-tool.request.send') }}</span>
          </button>
        </div>
        
        <!-- 请求配置选项卡 -->
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li class="mr-2" v-for="tab in tabs" :key="tab.id">
              <button 
                @click="activeTab = tab.id" 
                class="inline-block p-2 border-b-2 rounded-t-lg"
                :class="activeTab === tab.id ? 'border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'"
              >
                {{ tab.name }}
              </button>
            </li>
          </ul>
        </div>
        
        <!-- 请求参数配置 -->
        <div class="flex-1 overflow-y-auto">
          <!-- 查询参数 -->
          <div v-if="activeTab === 'params'">
            <div class="mb-2 flex justify-between items-center">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.api-request-tool.request.parameters') }}</h3>
              <button 
                @click="addParam" 
                class="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {{ $t('tools.api-request-tool.request.addParameter') }}
              </button>
            </div>
            
            <div v-for="(param, index) in params" :key="index" class="flex gap-2 mb-2">
              <input 
                v-model="param.key" 
                type="text" 
                :placeholder="$t('tools.api-request-tool.request.paramNamePlaceholder')" 
                class="flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
              <input 
                v-model="param.value" 
                type="text" 
                :placeholder="$t('tools.api-request-tool.request.paramValuePlaceholder')" 
                class="flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
              <button 
                @click="removeParam(index)" 
                class="px-2 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/40"
              >
                ×
              </button>
            </div>
            
            <div v-if="params.length === 0" class="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              {{ $t('tools.api-request-tool.history.empty') }}
            </div>
          </div>
          
          <!-- 请求头 -->
          <div v-if="activeTab === 'headers'">
            <div class="mb-2 flex justify-between items-center">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.api-request-tool.request.headers') }}</h3>
              <button 
                @click="addHeader" 
                class="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {{ $t('tools.api-request-tool.request.addHeader') }}
              </button>
            </div>
            
            <div v-for="(header, index) in headers" :key="index" class="flex gap-2 mb-2">
              <input 
                v-model="header.key" 
                type="text" 
                :placeholder="$t('tools.api-request-tool.request.headerNamePlaceholder')" 
                class="flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
              <input 
                v-model="header.value" 
                type="text" 
                :placeholder="$t('tools.api-request-tool.request.headerValuePlaceholder')" 
                class="flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
              <button 
                @click="removeHeader(index)" 
                class="px-2 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/40"
              >
                ×
              </button>
            </div>
            
            <div v-if="headers.length === 0" class="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              {{ $t('tools.api-request-tool.history.empty') }}
            </div>
          </div>
          
          <!-- 请求体 -->
          <div v-if="activeTab === 'body'">
            <div class="mb-2">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.api-request-tool.request.body') }}</h3>
              <select 
                v-model="bodyType" 
                class="w-full px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <option value="none">{{ $t('tools.api-request-tool.request.contentTypes.none') }}</option>
                <option value="json">{{ $t('tools.api-request-tool.request.contentTypes.json') }}</option>
                <option value="form">{{ $t('tools.api-request-tool.request.contentTypes.form') }}</option>
                <option value="raw">{{ $t('tools.api-request-tool.request.contentTypes.text') }}</option>
              </select>
            </div>
            
            <!-- JSON请求体 -->
            <div v-if="bodyType === 'json'" class="mt-3">
              <textarea 
                v-model="jsonBody" 
                rows="10" 
                placeholder="{&#10;  &quot;key&quot;: &quot;value&quot;&#10;}" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md font-mono text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              ></textarea>
              <div v-if="jsonError" class="mt-1 text-xs text-red-600 dark:text-red-400">
                {{ jsonError }}
              </div>
            </div>
            
            <!-- Form Data请求体 -->
            <div v-if="bodyType === 'form'" class="mt-3">
              <div class="mb-2 flex justify-between items-center">
                <h3 class="text-xs text-gray-700 dark:text-gray-300">{{ $t('tools.api-request-tool.request.formData') }}</h3>
                <button 
                  @click="addFormItem" 
                  class="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                >
                  {{ $t('tools.api-request-tool.request.addFormItem') }}
                </button>
              </div>
              
              <div v-for="(item, index) in formItems" :key="index" class="flex gap-2 mb-2">
                <input 
                  v-model="item.key" 
                  type="text" 
                  :placeholder="$t('tools.api-request-tool.request.paramName')" 
                  class="flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
                <input 
                  v-model="item.value" 
                  type="text" 
                  :placeholder="$t('tools.api-request-tool.request.paramValue')" 
                  class="flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
                <button 
                  @click="removeFormItem(index)" 
                  class="px-2 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/40"
                >
                  ×
                </button>
              </div>
              
              <div v-if="formItems.length === 0" class="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                {{ $t('tools.api-request-tool.history.empty') }}
              </div>
            </div>
            
            <!-- Raw请求体 -->
            <div v-if="bodyType === 'raw'" class="mt-3">
              <textarea 
                v-model="rawBody" 
                rows="10" 
                :placeholder="$t('tools.api-request-tool.request.bodyPlaceholder')" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md font-mono text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 响应区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col h-full">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.api-request-tool.response.title') }}</h3>
          
          <div class="flex items-center space-x-4">
            <div v-if="responseStatus" class="flex items-center">
              <span class="text-xs mr-2 text-gray-600 dark:text-gray-400">{{ $t('tools.api-request-tool.response.status') }}:</span>
              <span 
                class="px-2 py-1 rounded-full text-xs font-medium"
                :class="responseStatus >= 200 && responseStatus < 300 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                  : responseStatus >= 400 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' 
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'"
              >
                {{ responseStatus }}
              </span>
            </div>
            
            <div v-if="responseTime" class="text-xs text-gray-600 dark:text-gray-400">
              {{ $t('tools.api-request-tool.response.time') }}: {{ responseTime }}ms
            </div>
            
            <button 
              v-if="response" 
              @click="copyResponse" 
              class="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {{ $t('tools.api-request-tool.response.copyBody') }}
            </button>
          </div>
        </div>
        
        <!-- 响应内容 -->
        <div class="flex-1 overflow-auto">
          <div v-if="isLoading" class="h-full flex items-center justify-center">
            <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
          
          <div v-else-if="error" class="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/20 rounded-md p-4 text-red-600 dark:text-red-400">
            <h4 class="font-medium mb-2">{{ $t('tools.api-request-tool.response.error') }}</h4>
            <p>{{ error }}</p>
          </div>
          
          <div v-else-if="response" class="h-full">
            <!-- 响应选项卡 -->
            <div class="mb-2 border-b border-gray-200 dark:border-gray-700">
              <ul class="flex flex-wrap -mb-px text-xs font-medium text-center">
                <li class="mr-2" v-for="tab in responseTabs" :key="tab.id">
                  <button 
                    @click="activeResponseTab = tab.id" 
                    class="inline-block p-2 border-b-2 rounded-t-lg"
                    :class="activeResponseTab === tab.id ? 'border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'"
                  >
                    {{ tab.name }}
                  </button>
                </li>
              </ul>
            </div>
            
            <!-- 响应体 -->
            <div v-if="activeResponseTab === 'body'" class="h-[calc(100%-2rem)] overflow-auto">
              <pre v-if="formattedResponse" class="text-xs font-mono p-2 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 overflow-auto h-full"><code>{{ formattedResponse }}</code></pre>
              <div v-else class="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                {{ $t('tools.api-request-tool.response.noResponse') }}
              </div>
            </div>
            
            <!-- 响应头 -->
            <div v-if="activeResponseTab === 'headers'" class="h-[calc(100%-2rem)] overflow-auto">
              <table v-if="Object.keys(responseHeaders).length" class="w-full text-xs">
                <thead class="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th class="py-2 px-4 text-left text-gray-700 dark:text-gray-300 font-medium">{{ $t('tools.api-request-tool.response.headerName') }}</th>
                    <th class="py-2 px-4 text-left text-gray-700 dark:text-gray-300 font-medium">{{ $t('tools.api-request-tool.response.headerValue') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(value, key) in responseHeaders" :key="key" class="border-b border-gray-200 dark:border-gray-700">
                    <td class="py-2 px-4 text-gray-600 dark:text-gray-400 font-medium">{{ key }}</td>
                    <td class="py-2 px-4 text-gray-800 dark:text-gray-200 break-all">{{ value }}</td>
                  </tr>
                </tbody>
              </table>
              <div v-else class="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                {{ $t('tools.api-request-tool.response.noResponse') }}
              </div>
            </div>
          </div>
          
          <div v-else class="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div class="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>{{ $t('tools.api-request-tool.response.waiting') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 请求配置
const method = ref('GET')
const url = ref('')
const isLoading = ref(false)
const params = ref([])
const headers = ref([])
const bodyType = ref('none')
const jsonBody = ref('')
const rawBody = ref('')
const formItems = ref([])
const jsonError = ref('')

// 配置选项卡
const tabs = [
  { id: 'params', name: '查询参数' },
  { id: 'headers', name: '请求头' },
  { id: 'body', name: '请求体' }
]
const activeTab = ref('params')

// 响应数据
const response = ref(null)
const responseStatus = ref(null)
const responseTime = ref(null)
const responseHeaders = ref({})
const error = ref(null)

// 响应选项卡
const responseTabs = [
  { id: 'body', name: '响应体' },
  { id: 'headers', name: '响应头' }
]
const activeResponseTab = ref('body')

// 格式化响应
const formattedResponse = computed(() => {
  if (!response.value) return null
  
  try {
    // 尝试解析为JSON并格式化
    const parsed = JSON.parse(response.value)
    return JSON.stringify(parsed, null, 2)
  } catch (e) {
    // 如果不是JSON，直接返回原始内容
    return response.value
  }
})

// 监听JSON输入变化，验证格式
watch(jsonBody, (newVal) => {
  if (!newVal) {
    jsonError.value = ''
    return
  }
  
  try {
    JSON.parse(newVal)
    jsonError.value = ''
  } catch (e) {
    jsonError.value = $t('tools.api-request-tool.messages.invalidJson')
  }
})

// 添加查询参数
function addParam() {
  params.value.push({ key: '', value: '' })
}

// 移除查询参数
function removeParam(index) {
  params.value.splice(index, 1)
}

// 添加请求头
function addHeader() {
  headers.value.push({ key: '', value: '' })
}

// 移除请求头
function removeHeader(index) {
  headers.value.splice(index, 1)
}

// 添加表单项
function addFormItem() {
  formItems.value.push({ key: '', value: '' })
}

// 移除表单项
function removeFormItem(index) {
  formItems.value.splice(index, 1)
}

// 复制响应数据
function copyResponse() {
  if (!response.value) return
  
  navigator.clipboard.writeText(formattedResponse.value)
    .then(() => {
      alert('已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
    })
}

// 构建完整URL（包含查询参数）
function buildUrl() {
  if (!url.value) return ''
  
  const urlObj = new URL(url.value.startsWith('http') ? url.value : `https://${url.value}`)
  
  // 添加查询参数
  params.value.forEach(param => {
    if (param.key) {
      urlObj.searchParams.append(param.key, param.value)
    }
  })
  
  return urlObj.toString()
}

// 构建请求体
function buildRequestBody() {
  if (bodyType.value === 'none' || method.value === 'GET') {
    return null
  }
  
  if (bodyType.value === 'json') {
    try {
      return JSON.parse(jsonBody.value)
    } catch (e) {
      throw new Error($t('tools.api-request-tool.messages.invalidJson'))
    }
  }
  
  if (bodyType.value === 'raw') {
    return rawBody.value
  }
  
  if (bodyType.value === 'form') {
    const formData = new FormData()
    formItems.value.forEach(item => {
      if (item.key) {
        formData.append(item.key, item.value)
      }
    })
    return formData
  }
  
  return null
}

// 发送请求
async function sendRequest() {
  if (!url.value) return
  
  isLoading.value = true
  error.value = null
  response.value = null
  responseStatus.value = null
  responseTime.value = null
  responseHeaders.value = {}
  
  try {
    // 检查URL格式
    const finalUrl = buildUrl()
    
    // 构建请求头
    const requestHeaders = {}
    headers.value.forEach(header => {
      if (header.key) {
        requestHeaders[header.key] = header.value
      }
    })
    
    // 如果是JSON请求体，添加Content-Type
    if (bodyType.value === 'json' && method.value !== 'GET') {
      requestHeaders['Content-Type'] = 'application/json'
    }
    
    // 构建请求配置
    const fetchOptions = {
      method: method.value,
      headers: requestHeaders,
      mode: 'cors',
    }
    
    // 添加请求体（如果不是GET请求）
    if (method.value !== 'GET') {
      try {
        const body = buildRequestBody()
        if (body) {
          if (bodyType.value === 'json') {
            fetchOptions.body = JSON.stringify(body)
          } else if (bodyType.value === 'raw') {
            fetchOptions.body = body
          } else if (bodyType.value === 'form') {
            fetchOptions.body = body
            // FormData会自动设置Content-Type
            delete requestHeaders['Content-Type']
          }
        }
      } catch (e) {
        throw new Error($t('tools.api-request-tool.messages.requestBodyError')`: ${e.message}`)
      }
    }
    
    // 记录开始时间
    const startTime = Date.now()
    
    // 发送请求
    const res = await fetch(finalUrl, fetchOptions)
    
    // 记录响应时间
    responseTime.value = Date.now() - startTime
    
    // 获取响应头
    for (const [key, value] of res.headers.entries()) {
      responseHeaders.value[key] = value
    }
    
    // 获取响应状态
    responseStatus.value = res.status
    
    // 获取响应体
    const contentType = res.headers.get('content-type') || ''
    
    if (contentType.includes('application/json')) {
      const data = await res.json()
      response.value = JSON.stringify(data)
    } else {
      response.value = await res.text()
    }
  } catch (err) {
    error.value = err.message || '请求失败'
    console.error('请求错误:', err)
  } finally {
    isLoading.value = false
  }
}
</script> 