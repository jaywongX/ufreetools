<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.http-header-security-checker.title') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.http-header-security-checker.intro') }}
      </p>
    </div>
    
    <!-- URL输入区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <div class="flex flex-col sm:flex-row gap-3">
        <input 
          v-model="url" 
          type="text" 
          :placeholder="$t('tools.http-header-security-checker.input.urlPlaceholder')" 
          class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          @keyup.enter="analyzeHeaders"
        />
        <button 
          @click="analyzeHeaders" 
          :disabled="!isValidUrl || isLoading"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ isLoading ? $t('tools.http-header-security-checker.input.analyzing') : $t('tools.http-header-security-checker.actions.analyze') }}</span>
        </button>
      </div>
      <div v-if="error" class="mt-3 text-sm text-red-600 dark:text-red-400">
        {{ error }}
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="securityScore !== null" class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- 安全分数 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.http-header-security-checker.results.score') }}</h3>
        
        <div class="flex flex-col items-center justify-center">
          <div class="relative w-32 h-32">
            <svg class="w-32 h-32" viewBox="0 0 100 100">
              <!-- 背景圆环 -->
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e6e6e6"
                stroke-width="10"
                class="dark:stroke-gray-700"
              />
              <!-- 评分圆环 -->
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke-width="10"
                :stroke="scoreColor"
                stroke-dasharray="282.74"
                :stroke-dashoffset="282.74 - (securityScore / 100) * 282.74"
                stroke-linecap="round"
                transform="rotate(-90, 50, 50)"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="text-2xl font-bold" :class="`text-${scoreColorName}-600 dark:text-${scoreColorName}-400`">
                  {{ securityScore }}
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">{{ $t('tools.http-header-security-checker.results.totalScore') }}</div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 text-center">
            <div class="text-sm font-medium" :class="`text-${scoreColorName}-600 dark:text-${scoreColorName}-400`">
              {{ $t(`tools.http-header-security-checker.results.rating.${securityRating}`) }}
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {{ $t(`tools.http-header-security-checker.results.rating.descriptions.${securityRating}`) }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- 安全配置概览 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 lg:col-span-2">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.http-header-security-checker.results.headers.title') }}</h3>
        
        <div class="space-y-3">
          <div 
            v-for="(header, key) in securityHeaders" 
            :key="key" 
            class="flex items-center justify-between rounded-md p-2"
            :class="header.status === 'good' ? 'bg-green-50 dark:bg-green-900/20' : header.status === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-red-50 dark:bg-red-900/20'"
          >
            <div class="flex items-center">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                :class="header.status === 'good' ? 'bg-green-100 dark:bg-green-800' : header.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-800' : 'bg-red-100 dark:bg-red-800'"
              >
                <svg v-if="header.status === 'good'" class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <svg v-else-if="header.status === 'warning'" class="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <svg v-else class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium" 
                  :class="header.status === 'good' ? 'text-green-800 dark:text-green-300' : header.status === 'warning' ? 'text-yellow-800 dark:text-yellow-300' : 'text-red-800 dark:text-red-300'"
                >
                  {{ header.name }}
                </p>
                <p class="text-xs" 
                  :class="header.status === 'good' ? 'text-green-600 dark:text-green-400' : header.status === 'warning' ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'"
                >
                  {{ header.message }}
                </p>
              </div>
            </div>
            
            <button 
              @click="expandedHeader && expandedHeader.value === key ? expandedHeader.value = null : expandedHeader.value = key" 
              class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  :d="expandedHeader && expandedHeader.value === key ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 详细分析区域 -->
      <div v-if="expandedHeader && expandedHeader.value" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 lg:col-span-3">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">
            {{ securityHeaders[expandedHeader.value].name }} 详细分析
          </h3>
          <button 
            @click="expandedHeader.value = null" 
            class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.http-header-security-checker.results.headers.value') }}</h4>
            <div class="bg-gray-50 dark:bg-gray-700 rounded p-3 text-sm font-mono break-words">
              {{ securityHeaders[expandedHeader.value].value || '未设置' }}
            </div>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.http-header-security-checker.results.headers.description') }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ securityHeaders[expandedHeader.value].description }}
            </p>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.http-header-security-checker.results.recommendations.title') }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ securityHeaders[expandedHeader.value].recommendation }}
            </p>
          </div>
          
          <div v-if="securityHeaders[expandedHeader.value].example">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.http-header-security-checker.results.recommendations.example') }}</h4>
            <div class="bg-gray-50 dark:bg-gray-700 rounded p-3 text-sm font-mono break-words">
              {{ securityHeaders[expandedHeader.value].example }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 所有响应头 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 lg:col-span-3">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.http-header-security-checker.results.allHeaders.title') }}</h3>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-4 py-2 w-1/3">{{ $t('tools.http-header-security-checker.results.allHeaders.name') }}</th>
                <th class="px-4 py-2 w-2/3">{{ $t('tools.http-header-security-checker.results.allHeaders.value') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, name) in allHeaders" :key="name" class="border-b border-gray-200 dark:border-gray-700">
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-gray-100">{{ name }}</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300 break-words">{{ value }}</td>
              </tr>
              <tr v-if="Object.keys(allHeaders).length === 0">
                <td colspan="2" class="px-4 py-2 text-center text-gray-500 dark:text-gray-400">{{ $t('tools.http-header-security-checker.results.allHeaders.noData') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div v-else-if="!isLoading && !error" class="flex-1 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
      <svg class="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
      <p class="text-gray-600 dark:text-gray-400 text-center">
        {{ $t('tools.http-header-security-checker.emptyState.line1') }}<br>
        {{ $t('tools.http-header-security-checker.emptyState.line2') }}
      </p>
    </div>
    
    <!-- 在底部添加文章部分 -->
    <HttpHeaderSecurityCheckerArticle />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HttpHeaderSecurityCheckerArticle from './HttpHeaderSecurityCheckerArticle.vue'

const { t } = useI18n()

// 状态变量
const url = ref('')
const isLoading = ref(false)
const error = ref(null)
const allHeaders = ref({})
const securityHeaders = ref({})
const securityScore = ref(null)
const expandedHeader = ref(null)

// 验证URL
const isValidUrl = computed(() => {
  try {
    const parsedUrl = new URL(url.value)
    return ['http:', 'https:'].includes(parsedUrl.protocol)
  } catch (e) {
    return false
  }
})

// 评分颜色
const scoreColor = computed(() => {
  if (!securityScore.value) return '#ef4444' // 默认红色
  if (securityScore.value >= 80) return '#10b981' // 绿色
  if (securityScore.value >= 50) return '#f59e0b' // 黄色
  return '#ef4444' // 红色
})

const scoreColorName = computed(() => {
  if (securityScore.value >= 80) return 'green'
  if (securityScore.value >= 50) return 'yellow'
  return 'red'
})

// 安全评级
const securityRating = computed(() => {
  if (!securityScore.value) return 'unknown'
  if (securityScore.value >= 90) return 'excellent'
  if (securityScore.value >= 80) return 'good'
  if (securityScore.value >= 65) return 'fair'
  if (securityScore.value >= 50) return 'poor'
  return 'high_risk'
})

// 分析HTTP头
async function analyzeHeaders() {
  if (!isValidUrl.value) {
    error.value = t('tools.http-header-security-checker.messages.invalidUrlFormat')
    return
  }
  
  isLoading.value = true
  error.value = null
  allHeaders.value = {}
  securityHeaders.value = {}
  securityScore.value = null
  expandedHeader.value = null
  
  try {
    // 使用本地代理服务或其他可用的代理服务
    const response = await fetch(url.value, {
      method: 'HEAD',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    
    // 获取所有响应头
    const headers = {}
    for(const [key, value] of response.headers.entries()) {
      headers[key.toLowerCase()] = value
    }
    allHeaders.value = headers
    
    // 分析安全相关的头信息
    analyzeSecurityHeaders(headers)
    
  } catch (err) {
    error.value = t('tools.http-header-security-checker.messages.fetchError', { error: err.message })
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

// 分析安全头信息
function analyzeSecurityHeaders(headers) {
  const secHeaders = {}
  let totalScore = 0
  
  // Content-Security-Policy
  secHeaders.csp = {
    name: 'Content-Security-Policy',
    value: headers['content-security-policy'] || null,
    status: headers['content-security-policy'] ? 'good' : 'bad',
    message: headers['content-security-policy'] 
      ? t('tools.http-header-security-checker.headers.contentSecurityPolicy.status.good')
      : t('tools.http-header-security-checker.headers.contentSecurityPolicy.status.bad'),
    description: t('tools.http-header-security-checker.headers.contentSecurityPolicy.description'),
    recommendation: headers['content-security-policy'] 
      ? t('tools.http-header-security-checker.headers.contentSecurityPolicy.recommendationConfigured')
      : t('tools.http-header-security-checker.headers.contentSecurityPolicy.recommendationMissing'),
    example: "Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com"
  }
  
  // Strict-Transport-Security (HSTS)
  secHeaders.hsts = {
    name: 'Strict-Transport-Security',
    value: headers['strict-transport-security'] || null,
    status: headers['strict-transport-security'] ? 'good' : 'bad',
    message: headers['strict-transport-security']
      ? t('tools.http-header-security-checker.headers.strictTransportSecurity.status.good')
      : t('tools.http-header-security-checker.headers.strictTransportSecurity.status.bad'),
    description: t('tools.http-header-security-checker.headers.strictTransportSecurity.description'),
    recommendation: headers['strict-transport-security']
      ? t('tools.http-header-security-checker.headers.strictTransportSecurity.recommendationConfigured')
      : t('tools.http-header-security-checker.headers.strictTransportSecurity.recommendationMissing'),
    example: "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"
  }
  
  // X-Content-Type-Options
  secHeaders.xcto = {
    name: 'X-Content-Type-Options',
    value: headers['x-content-type-options'] || null,
    status: headers['x-content-type-options'] === 'nosniff' ? 'good' : 'bad',
    message: headers['x-content-type-options'] === 'nosniff' 
      ? t('tools.http-header-security-checker.headers.xContentTypeOptions.status.good')
      : t('tools.http-header-security-checker.headers.xContentTypeOptions.status.bad'),
    description: t('tools.http-header-security-checker.headers.xContentTypeOptions.description'),
    recommendation: headers['x-content-type-options'] === 'nosniff' 
      ? t('tools.http-header-security-checker.headers.xContentTypeOptions.recommendationConfigured')
      : t('tools.http-header-security-checker.headers.xContentTypeOptions.recommendationMissing'),
    example: "X-Content-Type-Options: nosniff"
  }
  
  // X-Frame-Options
  secHeaders.xfo = {
    name: 'X-Frame-Options',
    value: headers['x-frame-options'] || null,
    status: headers['x-frame-options'] ? 'good' : 'bad',
    message: headers['x-frame-options']
      ? t('tools.http-header-security-checker.headers.xFrameOptions.status.good')
      : t('tools.http-header-security-checker.headers.xFrameOptions.status.bad'),
    description: t('tools.http-header-security-checker.headers.xFrameOptions.description'),
    recommendation: headers['x-frame-options']
      ? t('tools.http-header-security-checker.headers.xFrameOptions.recommendationConfigured')
      : t('tools.http-header-security-checker.headers.xFrameOptions.recommendationMissing'),
    example: "X-Frame-Options: DENY"
  }
  
  // X-XSS-Protection
  secHeaders.xxp = {
    name: 'X-XSS-Protection',
    value: headers['x-xss-protection'] || null,
    status: headers['x-xss-protection'] ? (headers['x-xss-protection'].includes('1') ? 'good' : 'warning') : 'warning',
    message: headers['x-xss-protection'] 
      ? (headers['x-xss-protection'].includes('1') ? t('tools.http-header-security-checker.headers.xXssProtection.status.enabled') : t('tools.http-header-security-checker.headers.xXssProtection.status.disabled')) 
      : t('tools.http-header-security-checker.headers.xXssProtection.status.notConfigured'),
    description: t('tools.http-header-security-checker.headers.xXssProtection.description'),
    recommendation: t('tools.http-header-security-checker.headers.xXssProtection.recommendation'),
    example: "X-XSS-Protection: 1; mode=block"
  }
  
  // Referrer-Policy
  secHeaders.rp = {
    name: 'Referrer-Policy',
    value: headers['referrer-policy'] || null,
    status: headers['referrer-policy'] ? 'good' : 'warning',
    message: headers['referrer-policy'] 
      ? t('tools.http-header-security-checker.headers.referrerPolicy.status.good')
      : t('tools.http-header-security-checker.headers.referrerPolicy.status.bad'),
    description: t('tools.http-header-security-checker.headers.referrerPolicy.description'),
    recommendation: headers['referrer-policy'] 
      ? t('tools.http-header-security-checker.headers.referrerPolicy.recommendationConfigured')
      : t('tools.http-header-security-checker.headers.referrerPolicy.recommendationMissing'),
    example: "Referrer-Policy: strict-origin-when-cross-origin"
  }
  
  // Permissions-Policy (原Feature-Policy)
  secHeaders.pp = {
    name: 'Permissions-Policy',
    value: headers['permissions-policy'] || headers['feature-policy'] || null,
    status: (headers['permissions-policy'] || headers['feature-policy']) ? 'good' : 'warning',
    message: (headers['permissions-policy'] || headers['feature-policy']) 
      ? t('tools.http-header-security-checker.headers.permissionsPolicy.status.good')
      : t('tools.http-header-security-checker.headers.permissionsPolicy.status.bad'),
    description: t('tools.http-header-security-checker.headers.permissionsPolicy.description'),
    recommendation: (headers['permissions-policy'] || headers['feature-policy']) 
      ? t('tools.http-header-security-checker.headers.permissionsPolicy.recommendationConfigured')
      : t('tools.http-header-security-checker.headers.permissionsPolicy.recommendationMissing'),
    example: "Permissions-Policy: camera=(), microphone=(), geolocation=()"
  }
  
  // 计算安全分数
  // 主要安全头 (CSP, HSTS) 各占20分
  if (secHeaders.csp.status === 'good') totalScore += 20
  if (secHeaders.hsts.status === 'good') totalScore += 20
  
  // 其他安全头各占10-15分
  if (secHeaders.xcto.status === 'good') totalScore += 15
  if (secHeaders.xfo.status === 'good') totalScore += 15
  if (secHeaders.xxp.status === 'good') totalScore += 10
  if (secHeaders.rp.status === 'good') totalScore += 10
  if (secHeaders.pp.status === 'good') totalScore += 10
  
  // 保存结果
  securityHeaders.value = secHeaders
  securityScore.value = totalScore
}
</script>