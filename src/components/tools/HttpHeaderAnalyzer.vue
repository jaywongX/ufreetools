<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">HTTP头安全检测工具</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        分析网站的HTTP响应头，检测CSP、HSTS等安全配置，并提供改进建议
      </p>
    </div>
    
    <!-- URL输入区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-4">
      <div class="flex flex-col sm:flex-row gap-3">
        <input 
          v-model="url" 
          type="text" 
          placeholder="https://example.com" 
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
          <span>{{ isLoading ? '分析中...' : '分析头信息' }}</span>
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
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">安全评分</h3>
        
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
                <div class="text-xs text-gray-600 dark:text-gray-400">总分100</div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 text-center">
            <div class="text-sm font-medium" :class="`text-${scoreColorName}-600 dark:text-${scoreColorName}-400`">
              {{ securityRating }}
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {{ securityRatingDescription }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- 安全配置概览 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 lg:col-span-2">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">安全头信息概览</h3>
        
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
              @click="expandedHeader = (expandedHeader === key) ? null : key" 
              class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  :d="expandedHeader === key ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 详细分析区域 -->
      <div v-if="expandedHeader" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 lg:col-span-3">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">
            {{ securityHeaders[expandedHeader].name }} 详细分析
          </h3>
          <button 
            @click="expandedHeader = null" 
            class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">当前值</h4>
            <div class="bg-gray-50 dark:bg-gray-700 rounded p-3 text-sm font-mono break-words">
              {{ securityHeaders[expandedHeader].value || '未设置' }}
            </div>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">说明</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ securityHeaders[expandedHeader].description }}
            </p>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">建议</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ securityHeaders[expandedHeader].recommendation }}
            </p>
          </div>
          
          <div v-if="securityHeaders[expandedHeader].example">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">示例配置</h4>
            <div class="bg-gray-50 dark:bg-gray-700 rounded p-3 text-sm font-mono break-words">
              {{ securityHeaders[expandedHeader].example }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 所有响应头 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 lg:col-span-3">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">所有响应头</h3>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-4 py-2 w-1/3">名称</th>
                <th class="px-4 py-2 w-2/3">值</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, name) in allHeaders" :key="name" class="border-b border-gray-200 dark:border-gray-700">
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-gray-100">{{ name }}</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300 break-words">{{ value }}</td>
              </tr>
              <tr v-if="Object.keys(allHeaders).length === 0">
                <td colspan="2" class="px-4 py-2 text-center text-gray-500 dark:text-gray-400">无响应头数据</td>
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
        输入网站URL，分析HTTP响应头的安全配置<br>
        获取关于CSP、HSTS等安全头的详细评估与建议
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
  if (securityScore.value >= 90) return '优秀'
  if (securityScore.value >= 80) return '良好'
  if (securityScore.value >= 65) return '一般'
  if (securityScore.value >= 50) return '较差'
  return '风险高'
})

// 评级描述
const securityRatingDescription = computed(() => {
  if (securityScore.value >= 90) return '该网站实施了全面的安全头配置'
  if (securityScore.value >= 80) return '该网站具有良好的安全头配置，有少量改进空间'
  if (securityScore.value >= 65) return '该网站实施了基本安全措施，但存在提升空间'
  if (securityScore.value >= 50) return '该网站缺少多项重要安全头配置'
  return '该网站几乎没有实施安全头保护措施'
})

// 分析HTTP头
async function analyzeHeaders() {
  if (!isValidUrl.value) {
    error.value = '请输入有效的URL，以http://或https://开头'
    return
  }
  
  isLoading.value = true
  error.value = null
  allHeaders.value = {}
  securityHeaders.value = {}
  securityScore.value = null
  expandedHeader = null
  
  try {
    // 尝试通过代理服务或CORS获取头信息（这里使用代理服务避免CORS限制）
    // 在实际应用中需要使用自己的代理服务或支持CORS的API
    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url.value}`
    
    const response = await fetch(proxyUrl, {
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
    error.value = `无法获取头信息: ${err.message}`
    console.error('头信息分析错误:', err)
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
    message: headers['content-security-policy'] ? '已正确配置' : '未配置',
    description: 'CSP通过限制页面可以加载的资源来防止XSS和数据注入攻击。它可以限制脚本、样式、图像等资源的来源。',
    recommendation: headers['content-security-policy'] 
      ? '现有配置已实施，确保定期审核和更新策略' 
      : '建议配置CSP以限制可加载的资源来源，从而提高防御XSS攻击的能力',
    example: "Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com"
  }
  
  // Strict-Transport-Security (HSTS)
  secHeaders.hsts = {
    name: 'Strict-Transport-Security',
    value: headers['strict-transport-security'] || null,
    status: headers['strict-transport-security'] ? 'good' : 'bad',
    message: headers['strict-transport-security'] ? '已正确配置' : '未配置',
    description: 'HSTS强制浏览器通过HTTPS与网站通信，防止中间人攻击和降级攻击。',
    recommendation: headers['strict-transport-security'] 
      ? '现有配置已实施，确保包含足够长的max-age和includeSubDomains' 
      : '建议启用HSTS以确保所有通信都通过HTTPS进行',
    example: "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"
  }
  
  // X-Content-Type-Options
  secHeaders.xcto = {
    name: 'X-Content-Type-Options',
    value: headers['x-content-type-options'] || null,
    status: headers['x-content-type-options'] === 'nosniff' ? 'good' : 'bad',
    message: headers['x-content-type-options'] === 'nosniff' ? '已正确配置' : '未配置或配置不正确',
    description: '此头防止浏览器进行MIME类型嗅探，从而减少了与不正确解释内容类型相关的安全风险。',
    recommendation: headers['x-content-type-options'] === 'nosniff' 
      ? '配置正确，保持当前设置' 
      : '建议将此头设置为"nosniff"值',
    example: "X-Content-Type-Options: nosniff"
  }
  
  // X-Frame-Options
  secHeaders.xfo = {
    name: 'X-Frame-Options',
    value: headers['x-frame-options'] || null,
    status: headers['x-frame-options'] ? 'good' : 'bad',
    message: headers['x-frame-options'] ? '已配置' : '未配置',
    description: '此头防止网站在iframe中被嵌入，从而防止点击劫持攻击。',
    recommendation: headers['x-frame-options'] 
      ? '现有配置已实施，建议使用DENY或SAMEORIGIN' 
      : '建议配置此头为DENY或SAMEORIGIN以防止点击劫持',
    example: "X-Frame-Options: DENY"
  }
  
  // X-XSS-Protection
  secHeaders.xxp = {
    name: 'X-XSS-Protection',
    value: headers['x-xss-protection'] || null,
    status: headers['x-xss-protection'] ? (headers['x-xss-protection'].includes('1') ? 'good' : 'warning') : 'warning',
    message: headers['x-xss-protection'] 
      ? (headers['x-xss-protection'].includes('1') ? '已启用' : '已禁用') 
      : '未配置（现代浏览器建议使用CSP替代）',
    description: '此头在旧版浏览器中启用XSS过滤。在现代浏览器中，建议使用CSP代替。',
    recommendation: '虽然此头在现代浏览器中已被CSP替代，但仍建议设置为"1; mode=block"以兼容旧版浏览器',
    example: "X-XSS-Protection: 1; mode=block"
  }
  
  // Referrer-Policy
  secHeaders.rp = {
    name: 'Referrer-Policy',
    value: headers['referrer-policy'] || null,
    status: headers['referrer-policy'] ? 'good' : 'warning',
    message: headers['referrer-policy'] ? '已配置' : '未配置',
    description: '此头控制HTTP请求中包含多少引用来源信息，帮助保护用户隐私。',
    recommendation: headers['referrer-policy'] 
      ? '现有配置已实施，建议使用strict-origin或strict-origin-when-cross-origin' 
      : '建议配置此头以控制引用来源信息的传递',
    example: "Referrer-Policy: strict-origin-when-cross-origin"
  }
  
  // Permissions-Policy (原Feature-Policy)
  secHeaders.pp = {
    name: 'Permissions-Policy',
    value: headers['permissions-policy'] || headers['feature-policy'] || null,
    status: (headers['permissions-policy'] || headers['feature-policy']) ? 'good' : 'warning',
    message: (headers['permissions-policy'] || headers['feature-policy']) ? '已配置' : '未配置',
    description: '此头允许控制浏览器功能和API的使用，如地理位置、摄像头等。',
    recommendation: (headers['permissions-policy'] || headers['feature-policy']) 
      ? '现有配置已实施，确保限制不必要的功能' 
      : '建议配置此头以限制网站可以使用的浏览器功能',
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