<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">CORS配置生成器</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        快速创建跨域资源共享(CORS)配置，支持多种服务器环境
      </p>
      
      <!-- 允许的域名 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          允许的来源域名 (Access-Control-Allow-Origin)
        </label>
        <div class="mb-2">
          <div class="flex items-center">
            <input 
              type="radio" 
              id="origin-all" 
              v-model="allowAllOrigins" 
              :value="true" 
              class="mr-2"
            >
            <label for="origin-all" class="text-sm text-gray-700 dark:text-gray-300">
              允许所有来源 (*) <span class="text-yellow-500 text-xs ml-1">(不安全，不支持凭证)</span>
            </label>
          </div>
          <div class="flex items-center mt-2">
            <input 
              type="radio" 
              id="origin-specific" 
              v-model="allowAllOrigins" 
              :value="false" 
              class="mr-2"
            >
            <label for="origin-specific" class="text-sm text-gray-700 dark:text-gray-300">
              指定允许的域名 (推荐)
            </label>
          </div>
        </div>
        
        <div v-if="!allowAllOrigins" class="space-y-2">
          <div 
            v-for="(origin, index) in allowedOrigins" 
            :key="`origin-${index}`" 
            class="flex items-center"
          >
            <input 
              type="text" 
              v-model="allowedOrigins[index]" 
              placeholder="https://example.com" 
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
            <button 
              @click="removeOrigin(index)" 
              class="ml-2 p-2 text-red-500 hover:text-red-700"
              title="移除域名"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button 
            @click="addOrigin" 
            class="flex items-center text-primary hover:text-primary-dark"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span class="text-sm">添加域名</span>
          </button>
        </div>
      </div>
      
      <!-- HTTP方法 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          允许的HTTP方法 (Access-Control-Allow-Methods)
        </label>
        <div class="flex flex-wrap gap-3">
          <label class="flex items-center">
            <input type="checkbox" v-model="methods.GET" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">GET</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="methods.POST" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">POST</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="methods.PUT" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">PUT</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="methods.DELETE" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">DELETE</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="methods.PATCH" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">PATCH</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="methods.HEAD" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">HEAD</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="methods.OPTIONS" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">OPTIONS</span>
          </label>
        </div>
      </div>
      
      <!-- 允许的头部 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          允许的HTTP头部 (Access-Control-Allow-Headers)
        </label>
        <div class="space-y-2">
          <div class="flex flex-wrap gap-3">
            <label class="flex items-center">
              <input type="checkbox" v-model="commonHeaders.contentType" class="mr-1">
              <span class="text-sm text-gray-700 dark:text-gray-300">Content-Type</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="commonHeaders.accept" class="mr-1">
              <span class="text-sm text-gray-700 dark:text-gray-300">Accept</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="commonHeaders.authorization" class="mr-1">
              <span class="text-sm text-gray-700 dark:text-gray-300">Authorization</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="commonHeaders.origin" class="mr-1">
              <span class="text-sm text-gray-700 dark:text-gray-300">Origin</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="commonHeaders.xRequestedWith" class="mr-1">
              <span class="text-sm text-gray-700 dark:text-gray-300">X-Requested-With</span>
            </label>
          </div>
          
          <div class="mt-2">
            <div 
              v-for="(header, index) in customHeaders" 
              :key="`header-${index}`" 
              class="flex items-center mb-2"
            >
              <input 
                type="text" 
                v-model="customHeaders[index]" 
                placeholder="X-Custom-Header" 
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <button 
                @click="removeCustomHeader(index)" 
                class="ml-2 p-2 text-red-500 hover:text-red-700"
                title="移除头部"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <button 
              @click="addCustomHeader" 
              class="flex items-center text-primary hover:text-primary-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              <span class="text-sm">添加自定义头部</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 凭证和缓存设置 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            允许凭证 (Access-Control-Allow-Credentials)
          </label>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="credentials" 
              v-model="allowCredentials" 
              class="mr-2"
              :disabled="allowAllOrigins"
            >
            <label for="credentials" class="text-sm text-gray-700 dark:text-gray-300">
              允许凭证 (cookies, authorization headers)
              <span v-if="allowAllOrigins" class="text-yellow-500 text-xs ml-1">
                (通配符 * 不支持凭证)
              </span>
            </label>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            预检请求缓存时间 (Access-Control-Max-Age)
          </label>
          <div class="flex items-center">
            <input 
              type="number" 
              v-model.number="maxAge" 
              min="0" 
              max="86400"
              class="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">秒 (0-86400)</span>
          </div>
        </div>
      </div>
      
      <!-- 暴露的头部 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          暴露的响应头 (Access-Control-Expose-Headers)
        </label>
        <div class="space-y-2">
          <div 
            v-for="(header, index) in exposeHeaders" 
            :key="`expose-${index}`" 
            class="flex items-center"
          >
            <input 
              type="text" 
              v-model="exposeHeaders[index]" 
              placeholder="Content-Length" 
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
            <button 
              @click="removeExposeHeader(index)" 
              class="ml-2 p-2 text-red-500 hover:text-red-700"
              title="移除头部"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button 
            @click="addExposeHeader" 
            class="flex items-center text-primary hover:text-primary-dark"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span class="text-sm">添加暴露的头部</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 输出配置 -->
    <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <div class="flex">
          <button 
            v-for="format in formats" 
            :key="format.id"
            @click="selectedFormat = format.id"
            class="px-4 py-2 text-sm font-medium"
            :class="selectedFormat === format.id 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'"
          >
            {{ format.name }}
          </button>
        </div>
      </div>
      
      <div class="p-4">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">
            {{ getCurrentFormat().name }} 配置
          </h3>
          <button 
            @click="copyConfig" 
            class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            复制
          </button>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-900 rounded-md p-4 overflow-auto max-h-96">
          <pre class="text-gray-800 dark:text-gray-200 text-sm font-mono whitespace-pre-wrap">{{ generatedConfig }}</pre>
        </div>
      </div>
    </div>
    
    <!-- CORS相关信息 -->
    <div class="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">关于CORS</h3>
      <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>
          跨域资源共享 (CORS) 是一种基于HTTP头的机制，它允许服务器指示除了自己以外的其他源（域、协议或端口），浏览器可以从这些源加载资源。
        </p>
        <p>
          CORS防护是现代浏览器的安全功能，能够阻止网页向非同源服务器发出请求，从而保护用户免受跨站请求伪造攻击。
        </p>
        <h4 class="font-medium text-gray-800 dark:text-gray-200 mt-2">CORS使用场景:</h4>
        <ul class="list-disc ml-5 space-y-1">
          <li>允许前端JavaScript访问不同域的API</li>
          <li>支持跨域Ajax请求或Fetch请求</li>
          <li>允许跨域访问字体、CSS或其他资源</li>
          <li>设置微服务架构中的服务间通信</li>
        </ul>
        <p class="text-yellow-600 dark:text-yellow-400 mt-2">
          安全提示: 通常应该避免使用 "*" 通配符作为允许的来源，而应该明确指定您信任的域名，以减少潜在的安全风险。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

// 允许的域名设置
const allowAllOrigins = ref(false)
const allowedOrigins = ref(['https://example.com'])

// HTTP方法
const methods = reactive({
  GET: true,
  POST: true,
  PUT: true,
  DELETE: false,
  PATCH: false,
  HEAD: false,
  OPTIONS: true  // OPTIONS通常需要开启以支持预检请求
})

// 头部
const commonHeaders = reactive({
  contentType: true,
  accept: true,
  authorization: false,
  origin: true,
  xRequestedWith: false
})
const customHeaders = ref([])

// 凭证和缓存设置
const allowCredentials = ref(false)
const maxAge = ref(3600) // 1小时

// 暴露的头部
const exposeHeaders = ref([])

// 输出格式
const formats = [
  { id: 'node', name: 'Node.js/Express' },
  { id: 'apache', name: 'Apache (.htaccess)' },
  { id: 'nginx', name: 'Nginx' },
  { id: 'headers', name: 'HTTP Headers' }
]
const selectedFormat = ref('node')

// 域名管理
function addOrigin() {
  allowedOrigins.value.push('')
}

function removeOrigin(index) {
  allowedOrigins.value.splice(index, 1)
  if (allowedOrigins.value.length === 0) {
    allowedOrigins.value.push('')
  }
}

// 自定义头部管理
function addCustomHeader() {
  customHeaders.value.push('')
}

function removeCustomHeader(index) {
  customHeaders.value.splice(index, 1)
}

// 暴露的头部管理
function addExposeHeader() {
  exposeHeaders.value.push('')
}

function removeExposeHeader(index) {
  exposeHeaders.value.splice(index, 1)
}

// 获取当前选中的格式
function getCurrentFormat() {
  return formats.find(format => format.id === selectedFormat.value)
}

// 监听通配符设置，禁用凭证
watch(allowAllOrigins, (newValue) => {
  if (newValue) {
    allowCredentials.value = false
  }
})

// 获取允许的HTTP方法
const getAllowedMethods = computed(() => {
  return Object.keys(methods).filter(method => methods[method]).join(', ')
})

// 获取允许的头部
const getAllowedHeaders = computed(() => {
  const headers = []
  
  if (commonHeaders.contentType) headers.push('Content-Type')
  if (commonHeaders.accept) headers.push('Accept')
  if (commonHeaders.authorization) headers.push('Authorization')
  if (commonHeaders.origin) headers.push('Origin')
  if (commonHeaders.xRequestedWith) headers.push('X-Requested-With')
  
  // 添加自定义头部
  customHeaders.value.forEach(header => {
    if (header.trim()) {
      headers.push(header.trim())
    }
  })
  
  return headers.join(', ')
})

// 获取暴露的头部
const getExposeHeaders = computed(() => {
  return exposeHeaders.value
    .filter(header => header.trim())
    .join(', ')
})

// 生成不同格式的配置
const generatedConfig = computed(() => {
  const origin = allowAllOrigins.value ? '*' : allowedOrigins.value.filter(o => o.trim()).join(', ')
  
  switch (selectedFormat.value) {
    case 'node':
      return generateNodeConfig(origin)
    case 'apache':
      return generateApacheConfig(origin)
    case 'nginx':
      return generateNginxConfig(origin)
    case 'headers':
      return generateHeadersConfig(origin)
    default:
      return 'Unsupported format'
  }
})

// 生成Node.js/Express配置
function generateNodeConfig(origin) {
  let config = `const corsOptions = {
  origin: ${allowAllOrigins.value ? "'*'" : JSON.stringify(allowedOrigins.value.filter(o => o.trim()))},
  methods: [${Object.keys(methods).filter(method => methods[method]).map(m => `'${m}'`).join(', ')}],`
  
  if (getAllowedHeaders.value) {
    config += `\n  allowedHeaders: [${getAllowedHeaders.value.split(', ').map(h => `'${h}'`).join(', ')}],`
  }
  
  if (allowCredentials.value) {
    config += '\n  credentials: true,'
  }
  
  if (maxAge.value > 0) {
    config += `\n  maxAge: ${maxAge.value},`
  }
  
  if (getExposeHeaders.value) {
    config += `\n  exposedHeaders: [${getExposeHeaders.value.split(', ').map(h => `'${h}'`).join(', ')}],`
  }
  
  config += `\n  preflightContinue: false,
  optionsSuccessStatus: 204
}

// 使用Express应用中间件
const express = require('express')
const cors = require('cors')
const app = express()

// 应用CORS中间件
app.use(cors(corsOptions))

// 或者仅对特定路由应用
app.get('/api/resource', cors(corsOptions), (req, res) => {
  // 处理请求
})`

  return config
}

// 生成Apache配置
function generateApacheConfig(origin) {
  let config = `<IfModule mod_headers.c>
  # 允许的域名
  Header set Access-Control-Allow-Origin "${origin}"
`
  
  if (getAllowedMethods.value) {
    config += `  # 允许的HTTP方法
  Header set Access-Control-Allow-Methods "${getAllowedMethods.value}"
`
  }
  
  if (getAllowedHeaders.value) {
    config += `  # 允许的HTTP头部
  Header set Access-Control-Allow-Headers "${getAllowedHeaders.value}"
`
  }
  
  if (allowCredentials.value) {
    config += `  # 允许凭证
  Header set Access-Control-Allow-Credentials "true"
`
  }
  
  if (maxAge.value > 0) {
    config += `  # 预检请求缓存时间
  Header set Access-Control-Max-Age "${maxAge.value}"
`
  }
  
  if (getExposeHeaders.value) {
    config += `  # 暴露的响应头
  Header set Access-Control-Expose-Headers "${getExposeHeaders.value}"
`
  }
  
  config += `  # 处理预检请求
  RewriteEngine On
  RewriteRule ^(.*)$ $1 [R=200,L,E=HTTP_ORIGIN:%{HTTP:ORIGIN}]
</IfModule>`

  return config
}

// 生成Nginx配置
function generateNginxConfig(origin) {
  let config = `# CORS配置
# 将此配置添加到您的server或location块中

# 允许的域名
add_header 'Access-Control-Allow-Origin' '${origin}';
`
  
  if (getAllowedMethods.value) {
    config += `# 允许的HTTP方法
add_header 'Access-Control-Allow-Methods' '${getAllowedMethods.value}';
`
  }
  
  if (getAllowedHeaders.value) {
    config += `# 允许的HTTP头部
add_header 'Access-Control-Allow-Headers' '${getAllowedHeaders.value}';
`
  }
  
  if (allowCredentials.value) {
    config += `# 允许凭证
add_header 'Access-Control-Allow-Credentials' 'true';
`
  }
  
  if (maxAge.value > 0) {
    config += `# 预检请求缓存时间
add_header 'Access-Control-Max-Age' '${maxAge.value}';
`
  }
  
  if (getExposeHeaders.value) {
    config += `# 暴露的响应头
add_header 'Access-Control-Expose-Headers' '${getExposeHeaders.value}';
`
  }
  
  config += `
# 处理预检请求
if ($request_method = 'OPTIONS') {
  add_header 'Access-Control-Allow-Origin' '${origin}';
  add_header 'Access-Control-Allow-Methods' '${getAllowedMethods.value}';
  add_header 'Access-Control-Allow-Headers' '${getAllowedHeaders.value}';
  add_header 'Access-Control-Max-Age' '${maxAge.value}';
  add_header 'Content-Type' 'text/plain charset=UTF-8';
  add_header 'Content-Length' '0';
  return 204;
}`

  return config
}

// 生成HTTP头部配置
function generateHeadersConfig(origin) {
  let config = `# CORS HTTP头部配置

# 允许的域名
Access-Control-Allow-Origin: ${origin}
`
  
  if (getAllowedMethods.value) {
    config += `# 允许的HTTP方法
Access-Control-Allow-Methods: ${getAllowedMethods.value}
`
  }
  
  if (getAllowedHeaders.value) {
    config += `# 允许的HTTP头部
Access-Control-Allow-Headers: ${getAllowedHeaders.value}
`
  }
  
  if (allowCredentials.value) {
    config += `# 允许凭证
Access-Control-Allow-Credentials: true
`
  }
  
  if (maxAge.value > 0) {
    config += `# 预检请求缓存时间
Access-Control-Max-Age: ${maxAge.value}
`
  }
  
  if (getExposeHeaders.value) {
    config += `# 暴露的响应头
Access-Control-Expose-Headers: ${getExposeHeaders.value}
`
  }

  return config
}

// 复制配置
function copyConfig() {
  navigator.clipboard.writeText(generatedConfig.value).then(() => {
    alert('配置已复制到剪贴板')
  }).catch(err => {
    console.error('复制失败:', err)
    alert('复制失败，请手动复制')
  })
}
</script> 