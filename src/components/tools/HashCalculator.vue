<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            选择哈希算法
          </label>
          <select 
            v-model="selectedHash" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option v-for="hash in hashAlgorithms" :key="hash.value" :value="hash.value">
              {{ hash.name }}
            </option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            输入类型
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="inputMode = 'text'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="inputMode === 'text' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              文本输入
            </button>
            <button 
              @click="inputMode = 'file'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="inputMode === 'file' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              文件输入
            </button>
          </div>
        </div>
        
        <div v-if="inputMode === 'text'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            编码
          </label>
          <select 
            v-model="encoding" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="utf8">UTF-8</option>
            <option value="ascii">ASCII</option>
            <option value="latin1">Latin1</option>
          </select>
        </div>
      </div>
      
      <div class="mb-4">
        <div v-if="inputMode === 'text'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            输入文本
          </label>
          <textarea 
            v-model="inputText" 
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            placeholder="在此输入要计算哈希值的文本..."
          ></textarea>
        </div>
        
        <div v-else>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            选择文件
          </label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750">
              <div class="flex flex-col items-center justify-center pt-5 pb-6" v-if="!selectedFile">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-medium">点击上传文件</span> 或拖放文件到此处
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  文件将在本地处理，不会上传到服务器
                </p>
              </div>
              <div class="flex flex-col items-center justify-center pt-5 pb-6" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-sm text-gray-700 dark:text-gray-300 font-medium">已选择文件：{{ selectedFile.name }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {{ formatFileSize(selectedFile.size) }}
                </p>
                <button 
                  @click.prevent="selectedFile = null" 
                  class="text-xs text-red-500 hover:text-red-700 mt-2"
                >
                  移除文件
                </button>
              </div>
              <input 
                type="file" 
                class="hidden" 
                @change="handleFileUpload"
              />
            </label>
          </div>
        </div>
      </div>
      
      <div class="flex justify-end">
        <button 
          @click="calculateHash" 
          :disabled="isCalculating || (!inputText && inputMode === 'text') || (!selectedFile && inputMode === 'file')"
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
        >
          <span v-if="isCalculating" class="inline-flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            计算中...
          </span>
          <span v-else>计算哈希值</span>
        </button>
      </div>
    </div>
    
    <!-- 结果显示区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-6" v-if="hashResult">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">哈希计算结果</h3>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ getSelectedAlgorithmName() }} 哈希值
        </label>
        <div class="flex">
          <input 
            type="text" 
            readonly 
            :value="hashResult" 
            class="flex-grow px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          <button 
            @click="copyToClipboard(hashResult)" 
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 显示哈希值的不同格式表示 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            大写十六进制
          </label>
          <div class="flex">
            <input 
              type="text" 
              readonly 
              :value="hashResult.toUpperCase()" 
              class="flex-grow px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              @click="copyToClipboard(hashResult.toUpperCase())" 
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Base64 编码
          </label>
          <div class="flex">
            <input 
              type="text" 
              readonly 
              :value="hashResultBase64" 
              class="flex-grow px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              @click="copyToClipboard(hashResultBase64)" 
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 哈希验证区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700" v-if="hashResult">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">哈希验证</h3>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          输入待验证的哈希值
        </label>
        <input 
          type="text" 
          v-model="verifyHash" 
          placeholder="输入哈希值进行比对..."
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
      </div>
      
      <div v-if="verifyHash" class="mt-3">
        <div v-if="verifyHash.toLowerCase() === hashResult.toLowerCase()" class="p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-green-700 dark:text-green-400">哈希值匹配！</span>
        </div>
        <div v-else class="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="text-red-700 dark:text-red-400">哈希值不匹配！</span>
        </div>
      </div>
    </div>
    
    <!-- 算法说明 -->
    <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">关于哈希算法</h3>
      
      <div v-if="selectedHash" class="text-sm text-gray-600 dark:text-gray-400">
        <div class="mb-2" v-if="getSelectedAlgorithmDescription()">
          <p>{{ getSelectedAlgorithmDescription() }}</p>
        </div>
        
        <div class="mb-2" v-if="getSelectedAlgorithmUsage()">
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">常见用途</h4>
          <p>{{ getSelectedAlgorithmUsage() }}</p>
        </div>
        
        <div v-if="getSelectedAlgorithmSecurity()">
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">安全性</h4>
          <p>{{ getSelectedAlgorithmSecurity() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CryptoJS from 'crypto-js'

// 状态变量
const inputMode = ref('text')
const selectedHash = ref('sha256')
const inputText = ref('')
const selectedFile = ref(null)
const hashResult = ref('')
const hashResultBase64 = ref('')
const verifyHash = ref('')
const isCalculating = ref(false)
const encoding = ref('utf8')

// 可用的哈希算法
const hashAlgorithms = [
  { name: 'MD5 (128位)', value: 'md5', 
    description: 'MD5是一种广泛使用的哈希函数，可产生128位（16字节）哈希值，通常以32位十六进制数表示。', 
    usage: '文件完整性校验、存储密码（不安全）', 
    security: '已被证明不具备抗碰撞性，不应用于安全场景。' },
  { name: 'SHA-1 (160位)', value: 'sha1', 
    description: 'SHA-1是一种密码哈希函数，可产生160位（20字节）哈希值，通常以40位十六进制数表示。', 
    usage: '版本控制系统（如Git）、文件完整性验证', 
    security: '已被证明存在碰撞攻击风险，不建议用于安全关键应用。' },
  { name: 'SHA-256 (256位)', value: 'sha256', 
    description: 'SHA-256属于SHA-2家族，产生256位（32字节）哈希值，通常以64位十六进制数表示。', 
    usage: '数字签名、数字证书、密码存储、区块链', 
    security: '目前被认为安全，广泛应用于需要高安全性的场景。' },
  { name: 'SHA-384 (384位)', value: 'sha384', 
    description: 'SHA-384是SHA-512的截断版本，产生384位（48字节）哈希值。', 
    usage: '需要比SHA-256更高安全性的场景', 
    security: '提供比SHA-256更强的安全性，尚无已知的攻击方法。' },
  { name: 'SHA-512 (512位)', value: 'sha512', 
    description: 'SHA-512是SHA-2家族中最长的标准算法，产生512位（64字节）哈希值。', 
    usage: '要求最高安全级别的应用', 
    security: '提供最高级别的安全性，目前没有已知的有效攻击。' },
  { name: 'SHA3-256 (256位)', value: 'sha3_256', 
    description: 'SHA3-256是SHA-3标准的一部分，与SHA-2系列有完全不同的内部结构。', 
    usage: '对抗量子计算威胁的长期安全应用', 
    security: '设计目标是抵抗未来可能出现的攻击，包括量子计算攻击。' },
  { name: 'SHA3-512 (512位)', value: 'sha3_512', 
    description: 'SHA3-512是SHA-3标准中提供最高安全性的算法。', 
    usage: '需要极高安全性和抗量子计算能力的场景', 
    security: '提供最高级别的安全保障，是SHA-3系列中最安全的算法。' },
  { name: 'RIPEMD-160 (160位)', value: 'ripemd160', 
    description: 'RIPEMD-160是欧洲RIPE项目开发的哈希函数，产生160位哈希值。', 
    usage: '比特币地址生成、区块链应用', 
    security: '比同长度的SHA-1更安全，但使用率较低。' }
]

// 获取当前选择的算法名称
function getSelectedAlgorithmName() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.name : selectedHash.value
}

// 获取当前选择的算法描述
function getSelectedAlgorithmDescription() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.description : ''
}

// 获取当前选择的算法用途
function getSelectedAlgorithmUsage() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.usage : ''
}

// 获取当前选择的算法安全性描述
function getSelectedAlgorithmSecurity() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.security : ''
}

// 格式化文件大小显示
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 处理文件上传
function handleFileUpload(event) {
  selectedFile.value = event.target.files[0]
  hashResult.value = ''
  hashResultBase64.value = ''
  verifyHash.value = ''
}

// 使用Base64编码字节数组
function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

// 计算文件的哈希值
function calculateFileHash() {
  return new Promise((resolve, reject) => {
    if (!selectedFile.value) {
      reject(new Error('未选择文件'))
      return
    }
    
    const reader = new FileReader()
    
    reader.onload = function(event) {
      const wordArray = CryptoJS.lib.WordArray.create(event.target.result)
      let hash

      switch (selectedHash.value) {
        case 'md5':
          hash = CryptoJS.MD5(wordArray)
          break
        case 'sha1':
          hash = CryptoJS.SHA1(wordArray)
          break
        case 'sha256':
          hash = CryptoJS.SHA256(wordArray)
          break
        case 'sha384':
          hash = CryptoJS.SHA384(wordArray)
          break
        case 'sha512':
          hash = CryptoJS.SHA512(wordArray)
          break
        case 'sha3_256':
          hash = CryptoJS.SHA3(wordArray, { outputLength: 256 })
          break
        case 'sha3_512':
          hash = CryptoJS.SHA3(wordArray, { outputLength: 512 })
          break
        case 'ripemd160':
          hash = CryptoJS.RIPEMD160(wordArray)
          break
        default:
          hash = CryptoJS.SHA256(wordArray)
      }

      resolve({
        hex: hash.toString(CryptoJS.enc.Hex),
        base64: hash.toString(CryptoJS.enc.Base64)
      })
    }
    
    reader.onerror = function() {
      reject(new Error('读取文件失败'))
    }
    
    reader.readAsArrayBuffer(selectedFile.value)
  })
}

// 计算文本的哈希值
function calculateTextHash() {
  if (!inputText.value) {
    return Promise.reject(new Error('请输入文本'))
  }
  
  let hash
  
  switch (selectedHash.value) {
    case 'md5':
      hash = CryptoJS.MD5(inputText.value)
      break
    case 'sha1':
      hash = CryptoJS.SHA1(inputText.value)
      break
    case 'sha256':
      hash = CryptoJS.SHA256(inputText.value)
      break
    case 'sha384':
      hash = CryptoJS.SHA384(inputText.value)
      break
    case 'sha512':
      hash = CryptoJS.SHA512(inputText.value)
      break
    case 'sha3_256':
      hash = CryptoJS.SHA3(inputText.value, { outputLength: 256 })
      break
    case 'sha3_512':
      hash = CryptoJS.SHA3(inputText.value, { outputLength: 512 })
      break
    case 'ripemd160':
      hash = CryptoJS.RIPEMD160(inputText.value)
      break
    default:
      hash = CryptoJS.SHA256(inputText.value)
  }
  
  return Promise.resolve({
    hex: hash.toString(CryptoJS.enc.Hex),
    base64: hash.toString(CryptoJS.enc.Base64)
  })
}

// 计算哈希值
async function calculateHash() {
  isCalculating.value = true
  hashResult.value = ''
  hashResultBase64.value = ''
  verifyHash.value = ''
  
  try {
    let result
    
    if (inputMode.value === 'text') {
      result = await calculateTextHash()
    } else {
      result = await calculateFileHash()
    }
    
    hashResult.value = result.hex
    hashResultBase64.value = result.base64
  } catch (error) {
    alert(`计算哈希值失败: ${error.message}`)
  } finally {
    isCalculating.value = false
  }
}

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已复制到剪贴板')
  }).catch(err => {
    alert('复制失败，请手动复制')
    console.error('复制失败:', err)
  })
}

// 页面加载时执行
onMounted(() => {
  // 如果用户访问的是来自不安全源的页面，提示安全风险
  if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
    console.warn('在不安全的HTTP连接上使用哈希工具有安全风险')
  }
})
</script> 