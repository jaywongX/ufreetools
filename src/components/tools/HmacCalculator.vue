<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.hmac-calculator.title') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.hmac-calculator.intro') }}
      </p>
    </div>
    
    <!-- 主要内容区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
      <!-- 左侧输入区域 -->
      <div class="flex flex-col bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <!-- 算法选择 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.hmac-calculator.algorithms.label') }}</label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="algo in algorithms" 
              :key="algo.value"
              @click="algorithm = algo.value"
              class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              :class="algorithm === algo.value 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ algo.name }}
            </button>
          </div>
        </div>
        
        <!-- 密钥输入 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.hmac-calculator.input.keyLabel') }}</label>
          <div class="mb-2">
            <select 
              v-model="keyInputType" 
              class="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 mb-2"
            >
              <option value="text">{{ $t('tools.hmac-calculator.input.text') }}</option>
              <option value="hex">{{ $t('tools.hmac-calculator.input.hex') }}</option>
              <option value="base64">{{ $t('tools.hmac-calculator.input.base64') }}</option>
            </select>
          </div>
          <textarea
            v-model="secretKey"
            rows="2"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :placeholder="$t('tools.hmac-calculator.input.keyPlaceholder')"
          ></textarea>
          <p v-if="keyError" class="mt-1 text-sm text-red-600 dark:text-red-400">
            {{ keyError }}
          </p>
        </div>
        
        <!-- 消息输入 -->
        <div class="flex-1 flex flex-col mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.hmac-calculator.input.messageLabel') }}</label>
          <div class="mb-2">
            <select 
              v-model="messageInputType" 
              class="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 mb-2"
            >
              <option value="text">{{ $t('tools.hmac-calculator.input.text') }}</option>
              <option value="hex">{{ $t('tools.hmac-calculator.input.hex') }}</option>
              <option value="base64">{{ $t('tools.hmac-calculator.input.base64') }}</option>
            </select>
          </div>
          <textarea
            v-model="message"
            class="flex-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :placeholder="$t('tools.hmac-calculator.input.messageLongPlaceholder')"
          ></textarea>
          <p v-if="messageError" class="mt-1 text-sm text-red-600 dark:text-red-400">
            {{ messageError }}
          </p>
        </div>
      </div>
      
      <!-- 右侧结果区域 -->
      <div class="flex flex-col bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.hmac-calculator.result.outputLabel') }}</h3>
        
        <!-- 输出格式选择 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.hmac-calculator.input.outputFormat') }}</label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="format in outputFormats" 
              :key="format.value"
              @click="outputFormat = format.value"
              class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              :class="outputFormat === format.value 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ format.name }}
            </button>
          </div>
        </div>
        
        <!-- 计算按钮 -->
        <div class="mb-4">
          <button
            @click="calculateHmac"
            class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            :disabled="isCalculating || !canCalculate"
          >
            <svg v-if="isCalculating" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isCalculating ? $t('tools.hmac-calculator.input.calculating') : $t('tools.hmac-calculator.input.calculate') }}</span>
          </button>
        </div>
        
        <!-- 结果显示 -->
        <div class="flex-1 flex flex-col">
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.hmac-calculator.result.title') }}</label>
            
            <button
              v-if="hmacResult"
              @click="copyToClipboard(hmacResult)"
              class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center"
              :title="$t('tools.hmac-calculator.result.copy')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              {{ $t('tools.hmac-calculator.result.copy') }}
            </button>
          </div>
          
          <div 
            class="flex-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-md font-mono text-sm whitespace-pre-wrap break-all overflow-auto"
          >
            <div v-if="hmacResult" class="text-gray-800 dark:text-gray-200">{{ hmacResult }}</div>
            <div v-else-if="error" class="text-red-500 dark:text-red-400">{{ error }}</div>
            <div v-else class="text-gray-500 dark:text-gray-400">
              {{ $t('tools.hmac-calculator.result.placeholder') }}
            </div>
          </div>
        </div>
        
        <!-- 实用示例 -->
        <div class="mt-4">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.hmac-calculator.result.useExample') }}</h4>
          <div class="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
            <p v-if="hmacResult" class="mb-2">
              <span class="font-medium">{{ $t('tools.hmac-calculator.result.jsExample') }}</span>
            </p>
            <pre v-if="hmacResult" class="whitespace-pre-wrap break-all" v-html="algorithm === 'SM3' ? `import { sm3 } from 'sm-crypto';

const key = '${secretKey}';
const message = '${message}';

const result = sm3(message, {
  key: key,
  mode: 'hmac'
});

console.log(result);` : 
`const crypto = require('crypto');
const hmac = crypto.createHmac('${algorithm}', '${secretKey}');
hmac.update('${message}');
console.log(hmac.digest('${outputFormat}'));`"></pre>
            <p v-else class="text-gray-500 dark:text-gray-400">
              {{ $t('tools.hmac-calculator.result.placeholder') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 通知提示 -->
    <div 
      v-if="notification.show"
      class="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg animate-fade-in-out"
    >
      {{ notification.message }}
    </div>
    
    <!-- 文章部分 -->
    <HmacCalculatorArticle />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { sm3 } from 'sm-crypto'
import { useI18n } from 'vue-i18n'
import HmacCalculatorArticle from './HmacCalculatorArticle.vue'

const { t } = useI18n()

// 状态变量
const algorithm = ref('SHA-256')
const secretKey = ref('')
const message = ref('')
const keyInputType = ref('text')
const messageInputType = ref('text')
const outputFormat = ref('hex')
const hmacResult = ref('')
const error = ref('')
const isCalculating = ref(false)
const keyError = ref('')
const messageError = ref('')
const notification = ref({ show: false, message: '' })

// 支持的算法
const algorithms = [
  { name: 'SM3', value: 'SM3' },
  { name: 'SHA-256', value: 'SHA-256' },
  { name: 'SHA-1', value: 'SHA-1' },
  { name: 'SHA-384', value: 'SHA-384' },
  { name: 'SHA-512', value: 'SHA-512' },
  { name: 'MD5', value: 'MD5' }
]

// 输出格式
const outputFormats = [
  { name: t('tools.hmac-calculator.input.hex'), value: 'hex' },
  { name: t('tools.hmac-calculator.input.base64'), value: 'base64' },
  { name: t('tools.hmac-calculator.input.binary'), value: 'binary' },
  { name: 'base64url', value: 'base64url' },
]

// 判断是否可以计算
const canCalculate = computed(() => {
  return secretKey.value.trim() !== '' && message.value.trim() !== ''
})

// 监听输入变化，实时验证
watch(secretKey, validateSecretKey)
watch(keyInputType, validateSecretKey)
watch(message, validateMessage)
watch(messageInputType, validateMessage)

// 验证密钥
function validateSecretKey() {
  keyError.value = ''
  
  if (secretKey.value.trim() === '') return
  
  if (keyInputType.value === 'hex') {
    const hexRegex = /^[0-9a-fA-F]*$/
    if (!hexRegex.test(secretKey.value)) {
      keyError.value = t('tools.hmac-calculator.messages.invalidHex')
    }
  } else if (keyInputType.value === 'base64') {
    try {
      atob(secretKey.value)
    } catch (e) {
      keyError.value = t('tools.hmac-calculator.messages.invalidBase64')
    }
  }
}

// 验证消息
function validateMessage() {
  messageError.value = ''
  
  if (message.value.trim() === '') return
  
  if (messageInputType.value === 'hex') {
    const hexRegex = /^[0-9a-fA-F]*$/
    if (!hexRegex.test(message.value)) {
      messageError.value = t('tools.hmac-calculator.messages.invalidEncoding')
    }
  } else if (messageInputType.value === 'base64') {
    try {
      atob(message.value)
    } catch (e) {
      messageError.value = t('tools.hmac-calculator.messages.invalidEncoding')
    }
  }
}

// 将不同格式的输入转换为ArrayBuffer
function convertToArrayBuffer(input, type) {
  if (type === 'text') {
    return new TextEncoder().encode(input).buffer
  } else if (type === 'hex') {
    const bytes = []
    for (let i = 0; i < input.length; i += 2) {
      bytes.push(parseInt(input.substr(i, 2), 16))
    }
    return new Uint8Array(bytes).buffer
  } else if (type === 'base64') {
    const binary = atob(input)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }
    return bytes.buffer
  }
  
  throw new Error(t('tools.hmac-calculator.messages.invalidEncoding'))
}

// 将ArrayBuffer转换为不同的输出格式
function convertArrayBufferToOutput(buffer, format) {
  const bytes = new Uint8Array(buffer)
  
  if (format === 'hex') {
    return Array.from(bytes)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
  } else if (format === 'base64') {
    // 转换为Base64
    const binary = Array.from(bytes)
      .map(b => String.fromCharCode(b))
      .join('')
    return btoa(binary)
  } else if (format === 'base64url') {
    // 转换为URL安全的Base64
    const binary = Array.from(bytes)
      .map(b => String.fromCharCode(b))
      .join('')
    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
  }
  
  throw new Error(t('tools.hmac-calculator.messages.invalidEncoding'))
}

// 计算HMAC
async function calculateHmac() {
  if (!canCalculate.value || isCalculating.value) return
  
  // 验证输入
  validateSecretKey()
  validateMessage()
  
  if (keyError.value || messageError.value) {
    return
  }
  
  try {
    isCalculating.value = true
    error.value = ''
    hmacResult.value = ''
    
    // 将密钥和消息转换为正确的格式
    const keyBuffer = convertToArrayBuffer(secretKey.value, keyInputType.value)
    const messageBuffer = convertToArrayBuffer(message.value, messageInputType.value)
    
    if (algorithm.value === 'SM3') {
      // 使用SM3 HMAC
      const key = new Uint8Array(keyBuffer)
      const message = new Uint8Array(messageBuffer)
      
      // 直接使用sm3的hmac模式
      const hmacHex = sm3(Array.from(message), {
        key: Array.from(key),
        mode: 'hmac'
      })
      
      // 转换为所需的输出格式
      if (outputFormat.value === 'hex') {
        hmacResult.value = hmacHex
      } else {
        const hashBytes = new Uint8Array(hmacHex.match(/.{2}/g).map(byte => parseInt(byte, 16)))
        hmacResult.value = convertArrayBufferToOutput(hashBytes.buffer, outputFormat.value)
      }
    } else {
      // 使用Web Crypto API计算其他HMAC
      const cryptoKey = await window.crypto.subtle.importKey(
        'raw',
        keyBuffer,
        {
          name: 'HMAC',
          hash: { name: algorithm.value }
        },
        false,
        ['sign']
      )
      
      const signature = await window.crypto.subtle.sign(
        'HMAC',
        cryptoKey,
        messageBuffer
      )
      
      // 转换为所需的输出格式
      hmacResult.value = convertArrayBufferToOutput(signature, outputFormat.value)
    }
  } catch (err) {
    console.error(err)
    error.value = t('tools.hmac-calculator.messages.processingError', { error: err.message || t('tools.hmac-calculator.messages.processingError') })
    hmacResult.value = ''
  } finally {
    isCalculating.value = false
  }
}

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showNotification(t('tools.hmac-calculator.messages.copied'))
    })
    .catch(err => {
      console.error(err)
      showNotification(t('tools.hmac-calculator.messages.copyFailed'))
    })
}

// 显示通知
function showNotification(message) {
  notification.value = { show: true, message }
  
  // 3秒后自动隐藏
  setTimeout(() => {
    notification.value.show = false
  }, 3000)
}
</script>

<style scoped>
@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(20px); }
}

.animate-fade-in-out {
  animation: fadeInOut 3s forwards;
}
</style> 