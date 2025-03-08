<template>
  <div>
    <!-- 搜索和过滤 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex items-center mb-4">
        <div class="relative flex-1 mr-2">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="搜索状态码或描述" 
            class="pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </div>
        <select 
          v-model="categoryFilter" 
          class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          <option value="all">所有类别</option>
          <option value="1">1xx - 信息响应</option>
          <option value="2">2xx - 成功响应</option>
          <option value="3">3xx - 重定向</option>
          <option value="4">4xx - 客户端错误</option>
          <option value="5">5xx - 服务器错误</option>
        </select>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>HTTP状态码是服务器对浏览器请求的响应状态，分为5个类别：</p>
        <ul class="list-disc pl-5 mt-1">
          <li>1xx（信息性状态码）- 接收的请求正在处理</li>
          <li>2xx（成功状态码）- 请求正常处理完毕</li>
          <li>3xx（重定向状态码）- 需要进行附加操作以完成请求</li>
          <li>4xx（客户端错误状态码）- 服务器无法处理请求</li>
          <li>5xx（服务器错误状态码）- 服务器处理请求出错</li>
        </ul>
      </div>
    </div>
    
    <!-- 状态码列表 -->
    <div class="space-y-4">
      <div
        v-for="code in filteredStatusCodes"
        :key="code.code"
        class="bg-white dark:bg-gray-800 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        <div 
          class="flex items-center px-4 py-3 cursor-pointer"
          :class="{
            'bg-blue-50 dark:bg-blue-900/20': code.category === '1',
            'bg-green-50 dark:bg-green-900/20': code.category === '2',
            'bg-yellow-50 dark:bg-yellow-900/20': code.category === '3',
            'bg-red-50 dark:bg-red-900/20': code.category === '4',
            'bg-purple-50 dark:bg-purple-900/20': code.category === '5'
          }"
          @click="toggleExpanded(code.code)"
        >
          <div class="flex-1">
            <div class="flex items-center">
              <span 
                class="text-lg font-bold mr-2 px-2 py-1 rounded-md"
                :class="{
                  'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100': code.category === '1',
                  'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100': code.category === '2',
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100': code.category === '3',
                  'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100': code.category === '4',
                  'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100': code.category === '5'
                }"
              >
                {{ code.code }}
              </span>
              <span class="font-medium text-gray-800 dark:text-gray-200">{{ code.name }}</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">{{ code.shortDescription }}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transform transition-transform" :class="{ 'rotate-180': expandedCodes[code.code] }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <!-- 展开的详细信息 -->
        <div 
          v-show="expandedCodes[code.code]" 
          class="px-4 py-3 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="prose dark:prose-invert prose-sm max-w-none">
            <p class="mb-2">{{ code.description }}</p>
            
            <div v-if="code.example" class="mt-3">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">示例</h4>
              <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm font-mono">
                <pre>{{ code.example }}</pre>
              </div>
            </div>
            
            <div v-if="code.notes" class="mt-3">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">注意事项</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ code.notes }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 没有找到结果 -->
      <div 
        v-if="filteredStatusCodes.length === 0" 
        class="bg-white dark:bg-gray-800 rounded-md p-6 text-center border border-gray-200 dark:border-gray-700"
      >
        <p class="text-gray-600 dark:text-gray-400">没有找到匹配的HTTP状态码</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 搜索和过滤
const searchQuery = ref('')
const categoryFilter = ref('all')
const expandedCodes = ref({})

// HTTP状态码数据
const statusCodes = [
  {
    code: 100,
    category: '1',
    name: 'Continue',
    shortDescription: '继续发送请求',
    description: '服务器已收到请求的初始部分，客户端应继续发送剩余的请求。',
    example: 'HTTP/1.1 100 Continue',
    notes: '通常用于客户端在发送较大请求体之前，先检查服务器是否会接受该请求。'
  },
  {
    code: 101,
    category: '1',
    name: 'Switching Protocols',
    shortDescription: '切换协议',
    description: '服务器已经理解了客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。',
    example: 'HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade',
    notes: '常用于WebSocket连接的建立过程。'
  },
  {
    code: 200,
    category: '2',
    name: 'OK',
    shortDescription: '请求成功',
    description: '请求已成功，服务器已返回请求的内容。这是最常见的状态码。',
    example: 'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{"status": "success"}',
    notes: '所有GET请求成功都应返回此状态码。'
  },
  {
    code: 201,
    category: '2',
    name: 'Created',
    shortDescription: '已创建',
    description: '请求已成功，并且服务器创建了新的资源。通常在POST请求后返回。',
    example: 'HTTP/1.1 201 Created\nLocation: /api/resources/123',
    notes: '应返回新创建资源的位置（URI）。'
  },
  {
    code: 204,
    category: '2',
    name: 'No Content',
    shortDescription: '无内容',
    description: '服务器成功处理了请求，但不需要返回任何实体内容。',
    example: 'HTTP/1.1 204 No Content',
    notes: '常用于DELETE请求成功或仅需要客户端重置视图的情况。'
  },
  {
    code: 301,
    category: '3',
    name: 'Moved Permanently',
    shortDescription: '永久重定向',
    description: '请求的资源已永久移动到新位置，以后任何对此资源的引用都应使用新的URL。',
    example: 'HTTP/1.1 301 Moved Permanently\nLocation: https://example.com/new-url',
    notes: '搜索引擎会更新资源的URL，浏览器通常会缓存此重定向。'
  },
  {
    code: 302,
    category: '3',
    name: 'Found',
    shortDescription: '临时重定向',
    description: '请求的资源临时从不同的URL响应请求，但请求者应继续使用原有URL访问。',
    example: 'HTTP/1.1 302 Found\nLocation: https://example.com/temporary-url',
    notes: '与301不同，搜索引擎不会更新资源链接，浏览器可能不会缓存此重定向。'
  },
  {
    code: 304,
    category: '3',
    name: 'Not Modified',
    shortDescription: '未修改',
    description: '资源未被修改，可使用客户端缓存的版本。通常用于条件性GET请求。',
    example: 'HTTP/1.1 304 Not Modified\nETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"',
    notes: '服务器不应返回响应体，有助于提高性能和减少带宽消耗。'
  },
  {
    code: 400,
    category: '4',
    name: 'Bad Request',
    shortDescription: '错误请求',
    description: '服务器无法理解请求的格式，客户端不应该在未修改请求的情况下重复提交。',
    example: 'HTTP/1.1 400 Bad Request\nContent-Type: application/json\n\n{"error": "Invalid request parameters"}',
    notes: '通常是由于请求参数格式错误、缺少必要参数或参数值无效。'
  },
  {
    code: 401,
    category: '4',
    name: 'Unauthorized',
    shortDescription: '未授权',
    description: '请求要求用户的身份认证，如用户未提供凭据或提供的凭据无效。',
    example: 'HTTP/1.1 401 Unauthorized\nWWW-Authenticate: Basic realm="Access to the site"',
    notes: '客户端应提供或重新提供正确的认证信息。'
  },
  {
    code: 403,
    category: '4',
    name: 'Forbidden',
    shortDescription: '禁止访问',
    description: '服务器理解请求但拒绝执行，与401不同，身份认证不会提供任何帮助。',
    example: 'HTTP/1.1 403 Forbidden\nContent-Type: application/json\n\n{"error": "You don\'t have permission to access this resource"}',
    notes: '通常是由于权限不足，如尝试访问只有管理员才能查看的内容。'
  },
  {
    code: 404,
    category: '4',
    name: 'Not Found',
    shortDescription: '未找到',
    description: '服务器找不到请求的资源，可能是URL拼写错误或资源已被删除。',
    example: 'HTTP/1.1 404 Not Found\nContent-Type: application/json\n\n{"error": "Resource not found"}',
    notes: '最常见的错误状态码之一，应明确告知用户资源不存在。'
  },
  {
    code: 405,
    category: '4',
    name: 'Method Not Allowed',
    shortDescription: '方法不允许',
    description: '请求行中指定的请求方法不能被用于请求相应的资源。',
    example: 'HTTP/1.1 405 Method Not Allowed\nAllow: GET, POST',
    notes: '响应中必须包含Allow头，指明对该资源有效的请求方法。'
  },
  {
    code: 409,
    category: '4',
    name: 'Conflict',
    shortDescription: '冲突',
    description: '请求与服务器当前状态冲突，通常出现在PUT请求中。',
    example: 'HTTP/1.1 409 Conflict\nContent-Type: application/json\n\n{"error": "Resource already exists with that identifier"}',
    notes: '常见于尝试创建已存在的资源或并发编辑同一资源的情况。'
  },
  {
    code: 429,
    category: '4',
    name: 'Too Many Requests',
    shortDescription: '请求过多',
    description: '用户在给定时间内发送了太多请求（"限流"）。',
    example: 'HTTP/1.1 429 Too Many Requests\nRetry-After: 60',
    notes: '应包含Retry-After头，告知客户端多久后可以再次发送请求。'
  },
  {
    code: 500,
    category: '5',
    name: 'Internal Server Error',
    shortDescription: '服务器内部错误',
    description: '服务器遇到了不知道如何处理的情况，通常是代码错误或临时故障。',
    example: 'HTTP/1.1 500 Internal Server Error\nContent-Type: application/json\n\n{"error": "An unexpected error occurred on the server"}',
    notes: '服务器错误状态码中最常见的一种，应尽可能提供详细的错误信息和日志以便调试。'
  },
  {
    code: 502,
    category: '5',
    name: 'Bad Gateway',
    shortDescription: '错误网关',
    description: '作为网关或代理的服务器从上游服务器收到无效响应。',
    example: 'HTTP/1.1 502 Bad Gateway',
    notes: '通常出现在使用反向代理或负载均衡器时，上游服务不可用或响应异常。'
  },
  {
    code: 503,
    category: '5',
    name: 'Service Unavailable',
    shortDescription: '服务不可用',
    description: '服务器暂时不可用，通常是由于超载或系统维护。',
    example: 'HTTP/1.1 503 Service Unavailable\nRetry-After: 120',
    notes: '应包含Retry-After头指示客户端多久后重试，这有助于减轻服务器负载。'
  },
  {
    code: 504,
    category: '5',
    name: 'Gateway Timeout',
    shortDescription: '网关超时',
    description: '作为网关或代理的服务器未及时从上游服务器收到响应。',
    example: 'HTTP/1.1 504 Gateway Timeout',
    notes: '常见于代理后的服务处理时间过长或网络连接问题。'
  }
  // ...可以根据需要添加更多状态码
]

// 过滤状态码
const filteredStatusCodes = computed(() => {
  let result = statusCodes
  
  // 应用类别过滤
  if (categoryFilter.value !== 'all') {
    result = result.filter(code => code.category === categoryFilter.value)
  }
  
  // 应用搜索查询
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(code => 
      code.code.toString().includes(query) || 
      code.name.toLowerCase().includes(query) || 
      code.shortDescription.toLowerCase().includes(query) ||
      code.description.toLowerCase().includes(query)
    )
  }
  
  return result
})

// 切换状态码展开状态
function toggleExpanded(code) {
  expandedCodes.value[code] = !expandedCodes.value[code]
}
</script> 