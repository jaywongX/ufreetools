<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">URL参数解析器</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        解析URL查询字符串并提取参数，支持多种格式的参数分析和转换
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          输入URL或查询字符串
        </label>
        <div class="flex">
          <input 
            v-model="inputUrl" 
            @input="parseUrl"
            placeholder="https://example.com/path?param1=value1&param2=value2 或 param1=value1&param2=value2"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
        </div>
        <div class="flex mt-2">
          <button 
            @click="pasteFromClipboard" 
            class="text-xs text-primary hover:text-primary-dark mr-3"
          >
            从剪贴板粘贴
          </button>
          <button 
            @click="loadSampleUrl" 
            class="text-xs text-primary hover:text-primary-dark mr-3"
          >
            加载示例
          </button>
          <button 
            @click="parseCurrentUrl" 
            class="text-xs text-primary hover:text-primary-dark mr-3"
          >
            使用当前页面URL
          </button>
          <button 
            @click="clearInput" 
            class="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            清空
          </button>
        </div>
        <div v-if="error" class="mt-2 text-sm text-red-500">
          {{ error }}
        </div>
      </div>
      
      <!-- 选项区域 -->
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">解析模式</label>
          <select 
            v-model="parseMode" 
            @change="parseUrl"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="auto">自动检测</option>
            <option value="full-url">完整URL</option>
            <option value="query-only">仅查询字符串</option>
          </select>
        </div>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">URL解码</label>
          <select 
            v-model="decodeMode" 
            @change="parseUrl"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="auto">自动解码</option>
            <option value="decode-once">解码一次</option>
            <option value="decode-twice">解码两次</option>
            <option value="no-decode">不解码</option>
          </select>
        </div>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">排序方式</label>
          <select 
            v-model="sortMode" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="default">默认顺序</option>
            <option value="name-asc">参数名升序</option>
            <option value="name-desc">参数名降序</option>
            <option value="value-asc">参数值升序</option>
            <option value="value-desc">参数值降序</option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- 解析结果区域 -->
    <div v-if="hasParams" class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex -mb-px">
          <button 
            @click="activeTab = 'table'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'table' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            参数表格
          </button>
          <button 
            @click="activeTab = 'json'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'json' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            JSON格式
          </button>
          <button 
            @click="activeTab = 'url-parts'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'url-parts' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            URL组成部分
          </button>
          <button 
            @click="activeTab = 'export'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'export' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            导出选项
          </button>
        </nav>
      </div>
      
      <!-- 参数表格视图 -->
      <div v-if="activeTab === 'table'" class="p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">参数列表（{{ sortedParams.length }}个）</h3>
          <div class="flex items-center">
            <input 
              v-model="searchFilter" 
              placeholder="搜索参数..."
              class="mr-2 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
            <button 
              @click="copyParamsAsText()" 
              class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
            >
              复制为文本
            </button>
          </div>
        </div>
        
        <!-- 参数表格 -->
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-750">
              <tr>
                <th 
                  @click="toggleSort('name')" 
                  scope="col" 
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                >
                  参数名
                  <span v-if="sortMode === 'name-asc'">↑</span>
                  <span v-if="sortMode === 'name-desc'">↓</span>
                </th>
                <th 
                  @click="toggleSort('value')" 
                  scope="col" 
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                >
                  参数值
                  <span v-if="sortMode === 'value-asc'">↑</span>
                  <span v-if="sortMode === 'value-desc'">↓</span>
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="(param, index) in filteredParams" :key="index">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {{ param.name }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 break-all">
                  <div class="max-h-20 overflow-y-auto">
                    {{ param.value }}
                  </div>
                  <div v-if="isValidJson(param.value)" class="mt-1">
                    <button 
                      @click="toggleJsonView(index)" 
                      class="text-xs text-primary hover:text-primary-dark"
                    >
                      {{ expandedJsonParams.includes(index) ? '收起JSON' : '查看为JSON' }}
                    </button>
                    <div v-if="expandedJsonParams.includes(index)" class="mt-2 p-2 bg-gray-50 dark:bg-gray-750 rounded border border-gray-200 dark:border-gray-700 font-mono text-xs overflow-auto max-h-60">
                      <pre>{{ formatJson(param.value) }}</pre>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    @click="copyToClipboard(`${param.name}=${param.value}`)" 
                    class="text-primary hover:text-primary-dark"
                  >
                    复制
                  </button>
                </td>
              </tr>
              <tr v-if="filteredParams.length === 0">
                <td colspan="3" class="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  {{ searchFilter ? '没有找到匹配的参数' : '没有参数' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- JSON格式视图 -->
      <div v-else-if="activeTab === 'json'" class="p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">JSON格式</h3>
          <button 
            @click="copyJson()" 
            class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
          >
            复制JSON
          </button>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700 font-mono text-sm overflow-auto max-h-96">
          <pre>{{ formattedJson }}</pre>
        </div>
      </div>
      
      <!-- URL组成部分 -->
      <div v-else-if="activeTab === 'url-parts'" class="p-4">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">URL组成部分</h3>
        
        <div class="space-y-3">
          <div v-if="urlParts.protocol" class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-32 font-medium text-gray-700 dark:text-gray-300">协议</div>
            <div class="flex-1 font-mono text-gray-800 dark:text-gray-200 break-all">
              {{ urlParts.protocol }}
              <button 
                @click="copyToClipboard(urlParts.protocol)" 
                class="ml-2 text-xs text-primary hover:text-primary-dark"
              >
                复制
              </button>
            </div>
          </div>
          
          <div v-if="urlParts.host" class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-32 font-medium text-gray-700 dark:text-gray-300">主机名</div>
            <div class="flex-1 font-mono text-gray-800 dark:text-gray-200 break-all">
              {{ urlParts.host }}
              <button 
                @click="copyToClipboard(urlParts.host)" 
                class="ml-2 text-xs text-primary hover:text-primary-dark"
              >
                复制
              </button>
            </div>
          </div>
          
          <div v-if="urlParts.port" class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-32 font-medium text-gray-700 dark:text-gray-300">端口</div>
            <div class="flex-1 font-mono text-gray-800 dark:text-gray-200">
              {{ urlParts.port }}
              <button 
                @click="copyToClipboard(urlParts.port)" 
                class="ml-2 text-xs text-primary hover:text-primary-dark"
              >
                复制
              </button>
            </div>
          </div>
          
          <div v-if="urlParts.pathname" class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-32 font-medium text-gray-700 dark:text-gray-300">路径</div>
            <div class="flex-1 font-mono text-gray-800 dark:text-gray-200 break-all">
              {{ urlParts.pathname }}
              <button 
                @click="copyToClipboard(urlParts.pathname)" 
                class="ml-2 text-xs text-primary hover:text-primary-dark"
              >
                复制
              </button>
            </div>
          </div>
          
          <div v-if="urlParts.search" class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-32 font-medium text-gray-700 dark:text-gray-300">查询字符串</div>
            <div class="flex-1 font-mono text-gray-800 dark:text-gray-200 break-all">
              {{ urlParts.search }}
              <button 
                @click="copyToClipboard(urlParts.search)" 
                class="ml-2 text-xs text-primary hover:text-primary-dark"
              >
                复制
              </button>
            </div>
          </div>
          
          <div v-if="urlParts.hash" class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-32 font-medium text-gray-700 dark:text-gray-300">锚点</div>
            <div class="flex-1 font-mono text-gray-800 dark:text-gray-200 break-all">
              {{ urlParts.hash }}
              <button 
                @click="copyToClipboard(urlParts.hash)" 
                class="ml-2 text-xs text-primary hover:text-primary-dark"
              >
                复制
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 导出选项 -->
      <div v-else-if="activeTab === 'export'" class="p-4">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">导出选项</h3>
        
        <div class="space-y-4">
          <!-- 查询字符串 -->
          <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md border border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <h4 class="font-medium text-gray-700 dark:text-gray-300">查询字符串</h4>
              <button 
                @click="copyToClipboard(getExportedQueryString())" 
                class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
              >
                复制
              </button>
            </div>
            <div class="font-mono text-sm text-gray-600 dark:text-gray-400 break-all bg-white dark:bg-gray-800 p-2 rounded-md border border-gray-200 dark:border-gray-700 max-h-32 overflow-auto">
              {{ getExportedQueryString() }}
            </div>
          </div>
          
          <!-- JavaScript代码 -->
          <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md border border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <h4 class="font-medium text-gray-700 dark:text-gray-300">JavaScript (URLSearchParams)</h4>
              <button 
                @click="copyToClipboard(getJsCode())" 
                class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
              >
                复制
              </button>
            </div>
            <div class="font-mono text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded-md border border-gray-200 dark:border-gray-700 max-h-40 overflow-auto">
              <pre>{{ getJsCode() }}</pre>
            </div>
          </div>
          
          <!-- PHP代码 -->
          <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md border border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <h4 class="font-medium text-gray-700 dark:text-gray-300">PHP</h4>
              <button 
                @click="copyToClipboard(getPhpCode())" 
                class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
              >
                复制
              </button>
            </div>
            <div class="font-mono text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded-md border border-gray-200 dark:border-gray-700 max-h-40 overflow-auto">
              <pre>{{ getPhpCode() }}</pre>
            </div>
          </div>
          
          <!-- Python代码 -->
          <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md border border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <h4 class="font-medium text-gray-700 dark:text-gray-300">Python</h4>
              <button 
                @click="copyToClipboard(getPythonCode())" 
                class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
              >
                复制
              </button>
            </div>
            <div class="font-mono text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded-md border border-gray-200 dark:border-gray-700 max-h-40 overflow-auto">
              <pre>{{ getPythonCode() }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 空状态 -->
    <div v-else-if="inputUrl && !hasParams" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 text-center">
      <p class="text-gray-500 dark:text-gray-400">
        未检测到任何URL参数
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// 状态变量
const inputUrl = ref('')
const params = ref([])
const error = ref('')
const activeTab = ref('table')
const sortMode = ref('default')
const searchFilter = ref('')
const expandedJsonParams = ref([])
const parseMode = ref('auto')
const decodeMode = ref('auto')
const urlParts = ref({})

// 从剪贴板粘贴
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText()
    inputUrl.value = text
    parseUrl()
  } catch (err) {
    console.error('从剪贴板粘贴失败:', err)
    error.value = '无法从剪贴板读取内容。请确保您已授予剪贴板权限，或手动粘贴内容。'
  }
}

// 加载示例URL
function loadSampleUrl() {
  inputUrl.value = 'https://example.com/search?q=test&category=books&page=1&sort=relevance&filter=in_stock:true&price_range=10-50&features=["wifi","bluetooth"]&location={"lat":37.7749,"lng":-122.4194}&utm_source=google&utm_medium=cpc&utm_campaign=spring_sale'
  parseUrl()
}

// 加载当前页面URL
function parseCurrentUrl() {
  inputUrl.value = window.location.href
  parseUrl()
}

// 清空输入
function clearInput() {
  inputUrl.value = ''
  params.value = []
  error.value = ''
  urlParts.value = {}
}

// 切换JSON视图
function toggleJsonView(index) {
  const i = expandedJsonParams.value.indexOf(index)
  if (i === -1) {
    expandedJsonParams.value.push(index)
  } else {
    expandedJsonParams.value.splice(i, 1)
  }
}

// 检查值是否为有效的JSON
function isValidJson(str) {
  try {
    if (typeof str !== 'string') return false
    if (!str.trim().startsWith('{') && !str.trim().startsWith('[')) return false
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

// 格式化JSON
function formatJson(str) {
  try {
    return JSON.stringify(JSON.parse(str), null, 2)
  } catch (e) {
    return str
  }
}

// 切换排序模式
function toggleSort(field) {
  if (field === 'name') {
    if (sortMode.value === 'name-asc') {
      sortMode.value = 'name-desc'
    } else {
      sortMode.value = 'name-asc'
    }
  } else if (field === 'value') {
    if (sortMode.value === 'value-asc') {
      sortMode.value = 'value-desc'
    } else {
      sortMode.value = 'value-asc'
    }
  }
}

// 解析URL
function parseUrl() {
  try {
    error.value = ''
    
    if (!inputUrl.value) {
      params.value = []
      urlParts.value = {}
      return
    }
    
    let url = inputUrl.value.trim()
    let queryString = ''
    
    // 解析模式检测
    if (parseMode.value === 'auto') {
      // 检查是否是完整URL
      if (url.includes('://') || url.startsWith('//')) {
        try {
          const urlObj = new URL(url.includes('://') ? url : `http:${url}`)
          queryString = urlObj.search.replace(/^\?/, '')
          extractUrlParts(urlObj)
        } catch (e) {
          // 不是有效的URL，尝试作为查询字符串处理
          if (!url.includes('=')) {
            error.value = '无效的URL或查询字符串'
            params.value = []
            return
          }
          queryString = url
          urlParts.value = {}
        }
      } else if (url.includes('=')) {
        // 看起来是查询字符串
        queryString = url.startsWith('?') ? url.substring(1) : url
        urlParts.value = {}
      } else {
        error.value = '无法识别的输入格式'
        params.value = []
        return
      }
    } else if (parseMode.value === 'full-url') {
      // 强制作为完整URL处理
      try {
        if (!url.includes('://') && !url.startsWith('//')) {
          url = `http://${url}`
        } else if (url.startsWith('//')) {
          url = `http:${url}`
        }
        
        const urlObj = new URL(url)
        queryString = urlObj.search.replace(/^\?/, '')
        extractUrlParts(urlObj)
      } catch (e) {
        error.value = '无效的URL'
        params.value = []
        return
      }
    } else if (parseMode.value === 'query-only') {
      // 强制作为查询字符串处理
      queryString = url.startsWith('?') ? url.substring(1) : url
      urlParts.value = {}
    }
    
    // 根据解码模式处理
    if (decodeMode.value === 'auto' || decodeMode.value === 'decode-once') {
      // 自动解码或解码一次
      queryString = decodeURIComponent(queryString.replace(/\+/g, ' '))
    } else if (decodeMode.value === 'decode-twice') {
      // 解码两次（处理双重编码）
      queryString = decodeURIComponent(decodeURIComponent(queryString.replace(/\+/g, ' ')))
    }
    // no-decode 不执行解码
    
    // 解析查询参数
    const searchParams = new URLSearchParams(queryString)
    const paramArray = []
    
    for (const [name, value] of searchParams.entries()) {
      paramArray.push({ name, value })
    }
    
    params.value = paramArray
  } catch (err) {
    console.error('解析URL错误:', err)
    error.value = `解析错误: ${err.message}`
    params.value = []
  }
}

// 提取URL各部分
function extractUrlParts(urlObj) {
  urlParts.value = {
    protocol: urlObj.protocol,
    host: urlObj.hostname,
    port: urlObj.port,
    pathname: urlObj.pathname,
    search: urlObj.search,
    hash: urlObj.hash
  }
}

// 根据排序模式对参数进行排序
const sortedParams = computed(() => {
  if (sortMode.value === 'default') {
    return [...params.value]
  }
  
  return [...params.value].sort((a, b) => {
    if (sortMode.value === 'name-asc') {
      return a.name.localeCompare(b.name)
    } else if (sortMode.value === 'name-desc') {
      return b.name.localeCompare(a.name)
    } else if (sortMode.value === 'value-asc') {
      return a.value.localeCompare(b.value)
    } else if (sortMode.value === 'value-desc') {
      return b.value.localeCompare(a.value)
    }
    return 0
  })
})

// 应用搜索过滤
const filteredParams = computed(() => {
  if (!searchFilter.value) return sortedParams.value
  
  const search = searchFilter.value.toLowerCase()
  return sortedParams.value.filter(
    param => param.name.toLowerCase().includes(search) || 
             param.value.toLowerCase().includes(search)
  )
})

// 检查是否有参数
const hasParams = computed(() => {
  return params.value.length > 0
})

// 获取格式化的JSON
const formattedJson = computed(() => {
  const obj = {}
  for (const param of params.value) {
    // 如果参数名已存在，转换为数组
    if (obj[param.name] !== undefined) {
      if (!Array.isArray(obj[param.name])) {
        obj[param.name] = [obj[param.name]]
      }
      obj[param.name].push(param.value)
    } else {
      // 尝试解析JSON值
      if (isValidJson(param.value)) {
        try {
          obj[param.name] = JSON.parse(param.value)
        } catch (e) {
          obj[param.name] = param.value
        }
      } else {
        obj[param.name] = param.value
      }
    }
  }
  return JSON.stringify(obj, null, 2)
})

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 复制JSON
function copyJson() {
  copyToClipboard(formattedJson.value)
}

// 复制参数为文本格式
function copyParamsAsText() {
  const text = filteredParams.value.map(p => `${p.name} = ${p.value}`).join('\n')
  copyToClipboard(text)
}

// 获取导出的查询字符串
function getExportedQueryString() {
  const searchParams = new URLSearchParams()
  for (const param of sortedParams.value) {
    searchParams.append(param.name, param.value)
  }
  return searchParams.toString()
}

// 获取JavaScript代码
function getJsCode() {
  const paramsString = sortedParams.value
    .map(p => `params.append('${p.name.replace(/'/g, "\\'")}', '${p.value.replace(/'/g, "\\'")}')`).join('\n')
  
  return `// 创建URLSearchParams对象
const params = new URLSearchParams()
${paramsString}

// 获取查询字符串
const queryString = params.toString()
console.log(queryString)

// 添加到URL
const url = 'https://example.com/path?' + queryString`
}

// 获取PHP代码
function getPhpCode() {
  const paramsArray = sortedParams.value
    .map(p => `    '${p.name.replace(/'/g, "\\'")}' => '${p.value.replace(/'/g, "\\'")}'`)
    .join(",\n")
  
  return `<?php
// 参数数组
$params = [
${paramsArray}
];

// 构建查询字符串
$queryString = http_build_query($params);

// 完整URL
$url = 'https://example.com/path?' . $queryString;
echo $url;
?>`
}

// 获取Python代码
function getPythonCode() {
  const paramsDict = sortedParams.value
    .map(p => `    '${p.name.replace(/'/g, "\\'")}': '${p.value.replace(/'/g, "\\'")}'`)
    .join(",\n")
  
  return `# 使用 urllib.parse
import urllib.parse

# 参数字典
params = {
${paramsDict}
}

# 构建查询字符串
query_string = urllib.parse.urlencode(params)

# 完整URL
url = 'https://example.com/path?' + query_string
print(url)`
}

// 监听输入变化
watch(inputUrl, () => {
  if (!inputUrl.value) {
    params.value = []
    error.value = ''
    urlParts.value = {}
  }
})
</script> 