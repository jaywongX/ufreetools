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
            :placeholder="$t('tools.http-status-code-lookup.search.placeholder')" 
            class="pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </div>
        <select 
          v-model="categoryFilter" 
          class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          <option value="all">{{ $t('tools.http-status-code-lookup.search.filter.all') }}</option>
          <option value="1">{{ $t('tools.http-status-code-lookup.search.filter.informational') }}</option>
          <option value="2">{{ $t('tools.http-status-code-lookup.search.filter.success') }}</option>
          <option value="3">{{ $t('tools.http-status-code-lookup.search.filter.redirection') }}</option>
          <option value="4">{{ $t('tools.http-status-code-lookup.search.filter.clientError') }}</option>
          <option value="5">{{ $t('tools.http-status-code-lookup.search.filter.serverError') }}</option>
        </select>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>{{ $t('tools.http-status-code-lookup.description.intro') }}</p>
        <ul class="list-disc pl-5 mt-1">
          <li>{{ $t('tools.http-status-code-lookup.description.informational') }}</li>
          <li>{{ $t('tools.http-status-code-lookup.description.success') }}</li>
          <li>{{ $t('tools.http-status-code-lookup.description.redirection') }}</li>
          <li>{{ $t('tools.http-status-code-lookup.description.clientError') }}</li>
          <li>{{ $t('tools.http-status-code-lookup.description.serverError') }}</li>
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
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.http-status-code-lookup.results.example') }}</h4>
              <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm font-mono">
                <pre>{{ code.example }}</pre>
              </div>
            </div>
            
            <div v-if="code.notes" class="mt-3">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.http-status-code-lookup.results.notes') }}</h4>
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
        <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.http-status-code-lookup.results.noResults') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
    shortDescription: t('tools.http-status-code-lookup.codes.100.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.100.description'),
    example: 'HTTP/1.1 100 Continue',
    notes: t('tools.http-status-code-lookup.codes.100.notes')
  },
  {
    code: 101,
    category: '1',
    name: 'Switching Protocols',
    shortDescription: t('tools.http-status-code-lookup.codes.101.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.101.description'),
    example: 'HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade',
    notes: t('tools.http-status-code-lookup.codes.101.notes')
  },
  {
    code: 200,
    category: '2',
    name: 'OK',
    shortDescription: t('tools.http-status-code-lookup.codes.200.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.200.description'),
    example: 'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{"status": "success"}',
    notes: t('tools.http-status-code-lookup.codes.200.notes')
  },
  {
    code: 201,
    category: '2',
    name: 'Created',
    shortDescription: t('tools.http-status-code-lookup.codes.201.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.201.description'),
    example: 'HTTP/1.1 201 Created\nLocation: /api/resources/123',
    notes: t('tools.http-status-code-lookup.codes.201.notes')
  },
  {
    code: 204,
    category: '2',
    name: 'No Content',
    shortDescription: t('tools.http-status-code-lookup.codes.204.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.204.description'),
    example: 'HTTP/1.1 204 No Content',
    notes: t('tools.http-status-code-lookup.codes.204.notes')
  },
  {
    code: 301,
    category: '3',
    name: 'Moved Permanently',
    shortDescription: t('tools.http-status-code-lookup.codes.301.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.301.description'),
    example: 'HTTP/1.1 301 Moved Permanently\nLocation: https://example.com/new-url',
    notes: t('tools.http-status-code-lookup.codes.301.notes')
  },
  {
    code: 302,
    category: '3',
    name: 'Found',
    shortDescription: t('tools.http-status-code-lookup.codes.302.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.302.description'),
    example: 'HTTP/1.1 302 Found\nLocation: https://example.com/temporary-url',
    notes: t('tools.http-status-code-lookup.codes.302.notes')
  },
  {
    code: 304,
    category: '3',
    name: 'Not Modified',
    shortDescription: t('tools.http-status-code-lookup.codes.304.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.304.description'),
    example: 'HTTP/1.1 304 Not Modified\nETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"',
    notes: t('tools.http-status-code-lookup.codes.304.notes')
  },
  {
    code: 400,
    category: '4',
    name: 'Bad Request',
    shortDescription: t('tools.http-status-code-lookup.codes.400.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.400.description'),
    example: 'HTTP/1.1 400 Bad Request\nContent-Type: application/json\n\n{"error": "Invalid request parameters"}',
    notes: t('tools.http-status-code-lookup.codes.400.notes')
  },
  {
    code: 401,
    category: '4',
    name: 'Unauthorized',
    shortDescription: t('tools.http-status-code-lookup.codes.401.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.401.description'),
    example: 'HTTP/1.1 401 Unauthorized\nWWW-Authenticate: Basic realm="Access to the site"',
    notes: t('tools.http-status-code-lookup.codes.401.notes')
  },
  {
    code: 403,
    category: '4',
    name: 'Forbidden',
    shortDescription: t('tools.http-status-code-lookup.codes.403.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.403.description'),
    example: 'HTTP/1.1 403 Forbidden\nContent-Type: application/json\n\n{"error": "You don\'t have permission to access this resource"}',
    notes: t('tools.http-status-code-lookup.codes.403.notes')
  },
  {
    code: 404,
    category: '4',
    name: 'Not Found',
    shortDescription: t('tools.http-status-code-lookup.codes.404.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.404.description'),
    example: 'HTTP/1.1 404 Not Found\nContent-Type: application/json\n\n{"error": "Resource not found"}',
    notes: t('tools.http-status-code-lookup.codes.404.notes')
  },
  {
    code: 405,
    category: '4',
    name: 'Method Not Allowed',
    shortDescription: t('tools.http-status-code-lookup.codes.405.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.405.description'),
    example: 'HTTP/1.1 405 Method Not Allowed\nAllow: GET, POST',
    notes: t('tools.http-status-code-lookup.codes.405.notes')
  },
  {
    code: 409,
    category: '4',
    name: 'Conflict',
    shortDescription: t('tools.http-status-code-lookup.codes.409.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.409.description'),
    example: 'HTTP/1.1 409 Conflict\nContent-Type: application/json\n\n{"error": "Resource already exists with that identifier"}',
    notes: t('tools.http-status-code-lookup.codes.409.notes')
  },
  {
    code: 429,
    category: '4',
    name: 'Too Many Requests',
    shortDescription: t('tools.http-status-code-lookup.codes.429.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.429.description'),
    example: 'HTTP/1.1 429 Too Many Requests\nRetry-After: 60',
    notes: t('tools.http-status-code-lookup.codes.429.notes')
  },
  {
    code: 500,
    category: '5',
    name: 'Internal Server Error',
    shortDescription: t('tools.http-status-code-lookup.codes.500.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.500.description'),
    example: 'HTTP/1.1 500 Internal Server Error\nContent-Type: application/json\n\n{"error": "An unexpected error occurred on the server"}',
    notes: t('tools.http-status-code-lookup.codes.500.notes')
  },
  {
    code: 502,
    category: '5',
    name: 'Bad Gateway',
    shortDescription: t('tools.http-status-code-lookup.codes.502.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.502.description'),
    example: 'HTTP/1.1 502 Bad Gateway',
    notes: t('tools.http-status-code-lookup.codes.502.notes')
  },
  {
    code: 503,
    category: '5',
    name: 'Service Unavailable',
    shortDescription: t('tools.http-status-code-lookup.codes.503.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.503.description'),
    example: 'HTTP/1.1 503 Service Unavailable\nRetry-After: 120',
    notes: t('tools.http-status-code-lookup.codes.503.notes')
  },
  {
    code: 504,
    category: '5',
    name: 'Gateway Timeout',
    shortDescription: t('tools.http-status-code-lookup.codes.504.shortDescription'),
    description: t('tools.http-status-code-lookup.codes.504.description'),
    example: 'HTTP/1.1 504 Gateway Timeout',
    notes: t('tools.http-status-code-lookup.codes.504.notes')
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