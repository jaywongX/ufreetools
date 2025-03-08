<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">JWT解码器</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        解码并分析JWT令牌的内容，查看头部和载荷信息，不进行签名验证
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          JWT令牌
        </label>
        <div class="flex">
          <textarea 
            v-model="jwtToken"
            @input="decodeJwt"
            placeholder="将JWT令牌粘贴到这里..."
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        <div class="flex mt-2">
          <button 
            @click="pasteFromClipboard" 
            class="text-xs text-primary hover:text-primary-dark mr-3"
          >
            从剪贴板粘贴
          </button>
          <button 
            @click="loadSampleJwt" 
            class="text-xs text-primary hover:text-primary-dark mr-3"
          >
            加载示例
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
    </div>
    
    <!-- 解码结果区域 -->
    <div v-if="decoded" class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex -mb-px">
          <button 
            @click="activeTab = 'decoded'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'decoded' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            解码结果
          </button>
          <button 
            @click="activeTab = 'header'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'header' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            头部 (Header)
          </button>
          <button 
            @click="activeTab = 'payload'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'payload' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            载荷 (Payload)
          </button>
          <button 
            @click="activeTab = 'signature'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'signature' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            签名 (Signature)
          </button>
        </nav>
      </div>
      
      <!-- 全部解码结果视图 -->
      <div v-if="activeTab === 'decoded'" class="p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">全部解码结果</h3>
          <button 
            @click="copyJson()" 
            class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
          >
            复制为JSON
          </button>
        </div>
        
        <!-- JWT 结构图 -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-4 bg-gray-50 dark:bg-gray-750">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">JWT结构</h4>
          <div class="flex flex-col sm:flex-row gap-1 overflow-x-auto">
            <div 
              class="p-2 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-mono whitespace-nowrap"
              @click="activeTab = 'header'"
            >
              {{ jwtParts.header || 'xxxxx' }}
              <div class="text-xxs text-blue-600 dark:text-blue-300 mt-1">头部</div>
            </div>
            <div class="text-gray-400 self-center">.</div>
            <div 
              class="p-2 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-mono whitespace-nowrap"
              @click="activeTab = 'payload'"
            >
              {{ jwtParts.payload || 'yyyyy' }}
              <div class="text-xxs text-purple-600 dark:text-purple-300 mt-1">载荷</div>
            </div>
            <div class="text-gray-400 self-center">.</div>
            <div 
              class="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-mono whitespace-nowrap"
              @click="activeTab = 'signature'"
            >
              {{ jwtParts.signature || 'zzzzz' }}
              <div class="text-xxs text-gray-600 dark:text-gray-400 mt-1">签名</div>
            </div>
          </div>
        </div>
        
        <!-- 过期信息 -->
        <div v-if="expiryInfo" class="rounded-md p-3 mb-4" :class="expiryInfo.expired ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200' : 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'">
          <div class="flex items-start">
            <svg v-if="expiryInfo.expired" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5 mt-0.5 flex-shrink-0 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5 mt-0.5 flex-shrink-0 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p class="font-medium">{{ expiryInfo.title }}</p>
              <p class="mt-1 text-sm">{{ expiryInfo.description }}</p>
              <div v-if="expiryInfo.details" class="mt-2 text-sm">
                <div v-for="(detail, i) in expiryInfo.details" :key="i" class="flex">
                  <span class="font-medium w-20">{{ detail.label }}:</span>
                  <span>{{ detail.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 所有解码数据 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">头部 (Header)</h4>
            <pre class="p-3 bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md text-xs overflow-auto max-h-80">{{ headerFormatted }}</pre>
          </div>
          <div>
            <h4 class="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">载荷 (Payload)</h4>
            <pre class="p-3 bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md text-xs overflow-auto max-h-80">{{ payloadFormatted }}</pre>
          </div>
        </div>
      </div>
      
      <!-- 头部视图 -->
      <div v-if="activeTab === 'header'" class="p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">JWT 头部 (Header)</h3>
          <button 
            @click="copyJson('header')" 
            class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
          >
            复制为JSON
          </button>
        </div>
        <div class="mb-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            JWT的头部包含有关令牌类型和签名算法的元数据。
          </p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/3">
                  名称
                </th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  值
                </th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-2/5">
                  描述
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-if="!decodedHeader || Object.keys(decodedHeader).length === 0">
                <td colspan="3" class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                  无头部数据
                </td>
              </tr>
              <tr v-for="(value, key) in decodedHeader" :key="key">
                <td class="px-4 py-2 text-sm font-mono text-gray-900 dark:text-gray-100">
                  {{ key }}
                </td>
                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                  {{ typeof value === 'object' ? JSON.stringify(value) : value }}
                </td>
                <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                  {{ getHeaderFieldDescription(key) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">原始编码</h4>
          <div class="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md text-xs text-blue-800 dark:text-blue-200 font-mono overflow-auto">
            {{ jwtParts.header }}
          </div>
        </div>
      </div>
      
      <!-- 载荷视图 -->
      <div v-if="activeTab === 'payload'" class="p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">JWT 载荷 (Payload)</h3>
          <button 
            @click="copyJson('payload')" 
            class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
          >
            复制为JSON
          </button>
        </div>
        <div class="mb-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            JWT的载荷包含令牌的声明（claims），这些是关于实体（通常是用户）和其他数据的声明。
          </p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/3">
                  声明
                </th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  值
                </th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-2/5">
                  描述
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-if="!decodedPayload || Object.keys(decodedPayload).length === 0">
                <td colspan="3" class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                  无载荷数据
                </td>
              </tr>
              <tr v-for="(value, key) in decodedPayload" :key="key">
                <td class="px-4 py-2 text-sm font-mono text-gray-900 dark:text-gray-100">
                  {{ key }}
                </td>
                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                  <span v-if="key === 'exp' || key === 'iat' || key === 'nbf'">
                    {{ formatTimestamp(value) }}
                  </span>
                  <span v-else>
                    {{ typeof value === 'object' ? JSON.stringify(value) : value }}
                  </span>
                </td>
                <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                  {{ getClaimDescription(key) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">原始编码</h4>
          <div class="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-md text-xs text-purple-800 dark:text-purple-200 font-mono overflow-auto">
            {{ jwtParts.payload }}
          </div>
        </div>
      </div>
      
      <!-- 签名视图 -->
      <div v-if="activeTab === 'signature'" class="p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">JWT 签名 (Signature)</h3>
          <button 
            @click="copyText(jwtParts.signature)" 
            class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
          >
            复制签名
          </button>
        </div>
        <div class="mb-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            JWT的签名部分是对头部和载荷进行签名生成的，用于验证发送者的身份并确保消息在传输过程中未被篡改。
            <br><br>
            本工具只进行解码，不验证签名的有效性。
          </p>
        </div>
        <div class="mt-4">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">原始编码</h4>
          <div class="p-3 bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md text-xs text-gray-800 dark:text-gray-200 font-mono overflow-auto break-all">
            {{ jwtParts.signature }}
          </div>
        </div>
        <div v-if="decodedHeader && decodedHeader.alg" class="mt-6 p-4 bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">签名算法</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            此令牌使用 <span class="font-mono">{{ decodedHeader.alg }}</span> 算法进行签名。
            {{ getAlgorithmDescription(decodedHeader.alg) }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- 无数据状态 -->
    <div v-if="!decoded && !error" class="bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">输入JWT令牌</h3>
      <p class="text-gray-500 dark:text-gray-400 mb-4">
        粘贴JWT令牌以查看其解码内容和结构
      </p>
      <button 
        @click="loadSampleJwt" 
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20"
      >
        加载示例JWT查看效果
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { jwtDecode } from 'jwt-decode'

// 状态
const jwtToken = ref('')
const error = ref('')
const decoded = ref(false)
const activeTab = ref('decoded')
const decodedHeader = ref(null)
const decodedPayload = ref(null)
const jwtParts = ref({
  header: '',
  payload: '',
  signature: ''
})
const showManualInput = ref(false)

// 格式化后的JSON数据
const headerFormatted = computed(() => {
  return decodedHeader.value ? JSON.stringify(decodedHeader.value, null, 2) : ''
})

const payloadFormatted = computed(() => {
  return decodedPayload.value ? JSON.stringify(decodedPayload.value, null, 2) : ''
})

// 有关令牌过期的信息
const expiryInfo = computed(() => {
  if (!decodedPayload.value || !decodedPayload.value.exp) return null
  
  const now = Math.floor(Date.now() / 1000)
  const exp = decodedPayload.value.exp
  const iat = decodedPayload.value.iat || null
  const isExpired = now > exp
  
  const details = [
    { label: '过期时间', value: formatTimestamp(exp) },
  ]
  
  if (iat) {
    details.push({ label: '创建时间', value: formatTimestamp(iat) })
    
    const duration = exp - iat
    details.push({ 
      label: '有效期', 
      value: formatDuration(duration)
    })
  }
  
  if (isExpired) {
    const expiredFor = now - exp
    details.push({ 
      label: '已过期', 
      value: formatDuration(expiredFor) 
    })
  } else {
    const timeLeft = exp - now
    details.push({ 
      label: '剩余时间', 
      value: formatDuration(timeLeft) 
    })
  }
  
  return {
    expired: isExpired,
    title: isExpired ? '令牌已过期' : '令牌有效',
    description: isExpired 
      ? `该令牌已于 ${formatTimestamp(exp)} 过期` 
      : `该令牌将于 ${formatTimestamp(exp)} 过期`,
    details
  }
})

// 初始化
onMounted(() => {
  // 检查URL参数中是否有JWT
  const urlParams = new URLSearchParams(window.location.search)
  const tokenFromUrl = urlParams.get('token')
  if (tokenFromUrl) {
    jwtToken.value = tokenFromUrl
    decodeJwt()
  }
})

// 解码JWT
function decodeJwt() {
  if (!jwtToken.value) {
    resetDecoded()
    return
  }
  
  // 清除之前的错误
  error.value = ''
  
  // 分割JWT的三个部分
  const parts = jwtToken.value.trim().split('.')
  if (parts.length !== 3) {
    error.value = 'JWT格式不正确，应当包含3个由点(.)分隔的部分'
    resetDecoded()
    return
  }
  
  try {
    // 存储原始部分
    jwtParts.value = {
      header: parts[0],
      payload: parts[1],
      signature: parts[2]
    }
    
    // 解码头部和载荷
    decodedHeader.value = jwtDecode(jwtToken.value, { header: true })
    decodedPayload.value = jwtDecode(jwtToken.value)
    
    decoded.value = true
  } catch (err) {
    error.value = `解码失败: ${err.message}`
    resetDecoded()
  }
}

// 重置解码状态
function resetDecoded() {
  decoded.value = false
  decodedHeader.value = null
  decodedPayload.value = null
  jwtParts.value = { header: '', payload: '', signature: '' }
}

// 清空输入
function clearInput() {
  jwtToken.value = ''
  resetDecoded()
  error.value = ''
}

// 从剪贴板粘贴
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText()
    jwtToken.value = text.trim()
    decodeJwt()
  } catch (err) {
    error.value = '无法从剪贴板读取内容，请手动粘贴'
  }
}

// 加载示例JWT
function loadSampleJwt() {
  // 这是一个示例JWT，包含常见的字段
  jwtToken.value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE4MTYyMzkwMjIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdfQ.WqPyYq_RL4Q-Prxi9DOkBJbpU9SWF-XpQK8SYpgmX5A'
  decodeJwt()
}

// 复制JSON数据
function copyJson(part = 'all') {
  let text = ''
  
  switch (part) {
    case 'header':
      text = JSON.stringify(decodedHeader.value, null, 2)
      break
    case 'payload':
      text = JSON.stringify(decodedPayload.value, null, 2)
      break
    default:
      // 复制整个解码对象
      text = JSON.stringify({
        header: decodedHeader.value,
        payload: decodedPayload.value
      }, null, 2)
  }
  
  copyText(text)
}

// 复制文本到剪贴板
function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 格式化时间戳
function formatTimestamp(timestamp) {
  if (!timestamp) return 'N/A'
  
  try {
    const date = new Date(timestamp * 1000)
    return `${date.toLocaleString()} (${timestamp})`
  } catch {
    return timestamp.toString()
  }
}

// 格式化持续时间
function formatDuration(seconds) {
  if (seconds < 60) {
    return `${seconds} 秒`
  } else if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} 分钟 ${seconds % 60} 秒`
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    return `${hours} 小时 ${mins} 分钟`
  } else {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    return `${days} 天 ${hours} 小时`
  }
}

// 获取头部字段描述
function getHeaderFieldDescription(key) {
  const descriptions = {
    alg: '签名算法，用于验证JWT的签名',
    typ: '令牌类型，通常为"JWT"',
    kid: '密钥ID，用于指示使用哪个密钥进行签名',
    jku: 'JWK集合URL，指向包含用于签名密钥的JWK集合',
    jwk: 'JSON Web密钥，包含用于签名的公钥',
    x5u: 'X.509证书URL，指向包含用于签名密钥的证书',
    x5c: 'X.509证书链，包含用于签名的证书',
    x5t: 'X.509证书SHA-1指纹，证书的base64url编码SHA-1指纹',
    'x5t#S256': 'X.509证书SHA-256指纹，证书的base64url编码SHA-256指纹',
    cty: '内容类型，用于嵌套签名或加密的JWT',
    crit: '关键扩展，表示必须理解和处理的自定义头部',
    enc: '加密算法',
    zip: '压缩算法'
  }
  
  return descriptions[key] || '自定义头部字段'
}

// 获取载荷声明描述
function getClaimDescription(key) {
  const descriptions = {
    sub: '主题 - 令牌的主题，通常是用户ID',
    iss: '签发者 - 签发JWT的实体',
    aud: '受众 - JWT的接收者',
    exp: '过期时间 - JWT不再有效的时间戳',
    nbf: '生效时间 - JWT开始生效的时间戳',
    iat: '签发时间 - JWT的签发时间戳',
    jti: 'JWT ID - JWT的唯一标识符',
    name: '用户的全名',
    given_name: '用户的名',
    family_name: '用户的姓',
    email: '用户的电子邮件地址',
    email_verified: '用户的电子邮件是否已验证',
    picture: '用户的个人资料图片URL',
    roles: '用户角色或权限',
    permissions: '用户权限',
    scope: '授权范围',
    sid: '会话ID',
    azp: '授权方 - 请求授权的客户端',
    nonce: '一次性随机数，用于防止重放攻击',
    auth_time: '用户进行身份验证的时间',
    at_hash: '访问令牌哈希值',
    c_hash: '授权码哈希值',
    acr: '认证上下文类引用',
    amr: '认证方法引用',
    zoneinfo: '用户的时区',
    locale: '用户的本地化设置',
    updated_at: '用户信息最后更新时间'
  }
  
  return descriptions[key] || '自定义声明字段'
}

// 获取算法描述
function getAlgorithmDescription(alg) {
  const descriptions = {
    'HS256': '使用HMAC SHA-256算法，需要一个共享密钥。',
    'HS384': '使用HMAC SHA-384算法，需要一个共享密钥。',
    'HS512': '使用HMAC SHA-512算法，需要一个共享密钥。',
    'RS256': '使用RSA和SHA-256算法，基于公钥/私钥对。',
    'RS384': '使用RSA和SHA-384算法，基于公钥/私钥对。',
    'RS512': '使用RSA和SHA-512算法，基于公钥/私钥对。',
    'ES256': '使用ECDSA和SHA-256算法，基于椭圆曲线数字签名。',
    'ES384': '使用ECDSA和SHA-384算法，基于椭圆曲线数字签名。',
    'ES512': '使用ECDSA和SHA-512算法，基于椭圆曲线数字签名。',
    'PS256': '使用RSA-PSS和SHA-256算法，提供更安全的RSA变种。',
    'PS384': '使用RSA-PSS和SHA-384算法，提供更安全的RSA变种。',
    'PS512': '使用RSA-PSS和SHA-512算法，提供更安全的RSA变种。',
    'none': '无签名算法，不推荐在生产环境中使用。'
  }
  
  return descriptions[alg] || '未知签名算法。'
}
</script>

<style scoped>
.text-xxs {
  font-size: 0.625rem;
}
</style> 