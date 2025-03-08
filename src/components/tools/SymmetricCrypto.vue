<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">对称加密算法</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        实现文本和文件的安全加密与解密，支持多种对称加密算法，包括AES、DES和国密SM4
      </p>

      <!-- 算法选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          选择算法
        </label>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="algo in algorithms" 
            :key="algo.id"
            @click="selectedAlgorithm = algo.id"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="selectedAlgorithm === algo.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ algo.name }}
          </button>
        </div>
      </div>

      <!-- 工作模式 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          工作模式
        </label>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="mode in getModes()" 
            :key="mode.id"
            @click="selectedMode = mode.id"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="selectedMode === mode.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ mode.name }}
          </button>
        </div>
      </div>

      <!-- 密钥和IV输入 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 密钥 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              密钥 <span class="text-xs text-gray-500">({{ getKeySize() }})</span>
            </label>
            <div class="flex mb-2">
              <input 
                v-model="key" 
                type="text" 
                :placeholder="`输入${getKeySize()}密钥`"
                class="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <button 
                @click="generateRandomKey()"
                class="px-3 py-2 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                title="生成随机密钥"
              >
                随机生成
              </button>
            </div>
            <div class="flex items-center mb-2">
              <input type="checkbox" id="keyHex" v-model="keyIsHex" class="mr-2">
              <label for="keyHex" class="text-sm text-gray-700 dark:text-gray-300">十六进制格式</label>
            </div>
          </div>

          <!-- IV (初始向量) -->
          <div v-if="needsIV()">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              初始向量 (IV) <span class="text-xs text-gray-500">({{ getBlockSize() }})</span>
            </label>
            <div class="flex mb-2">
              <input 
                v-model="iv" 
                type="text" 
                :placeholder="`输入${getBlockSize()}初始向量`"
                class="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <button 
                @click="generateRandomIV()"
                class="px-3 py-2 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                title="生成随机IV"
              >
                随机生成
              </button>
            </div>
            <div class="flex items-center mb-2">
              <input type="checkbox" id="ivHex" v-model="ivIsHex" class="mr-2">
              <label for="ivHex" class="text-sm text-gray-700 dark:text-gray-300">十六进制格式</label>
            </div>
          </div>
        </div>
      </div>

      <!-- 填充方式 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none' && selectedMode !== 'CTR' && selectedMode !== 'OFB' && selectedMode !== 'CFB'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          填充方式
        </label>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="padding in paddings" 
            :key="padding.id"
            @click="selectedPadding = padding.id"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="selectedPadding === padding.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ padding.name }}
          </button>
        </div>
      </div>

      <!-- 输出格式 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          输出格式
        </label>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="format in outputFormats" 
            :key="format.id"
            @click="selectedOutputFormat = format.id"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="selectedOutputFormat === format.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ format.name }}
          </button>
        </div>
      </div>

      <!-- 操作类型 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          操作类型
        </label>
        <div class="flex flex-wrap gap-2">
          <button 
            @click="operation = 'encrypt'"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="operation === 'encrypt' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            加密
          </button>
          <button 
            @click="operation = 'decrypt'"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="operation === 'decrypt' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            解密
          </button>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ operation === 'encrypt' ? '待加密内容' : '待解密内容' }}
          </label>
          <div class="flex space-x-2">
            <button 
              @click="clearInput" 
              class="text-xs text-red-500 hover:text-red-700"
              v-if="input.length > 0"
            >
              清空
            </button>
          </div>
        </div>
        <textarea 
          v-model="input" 
          class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          :placeholder="operation === 'encrypt' ? '输入要加密的文本' : '输入要解密的' + (selectedOutputFormat === 'base64' ? 'Base64' : '十六进制') + '文本'"
        ></textarea>
      </div>

      <!-- 执行按钮 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <button 
          @click="processOperation"
          class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canProcess()"
        >
          {{ operation === 'encrypt' ? '加密' : '解密' }}
        </button>
      </div>

      <!-- 结果区域 -->
      <div v-if="result" class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ operation === 'encrypt' ? '加密结果' : '解密结果' }}
          </label>
          <button 
            @click="copyResult" 
            class="text-xs text-primary hover:text-primary-dark"
          >
            复制结果
          </button>
        </div>
        <div class="w-full min-h-[100px] max-h-[200px] overflow-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm break-all whitespace-pre-wrap">
          {{ result }}
        </div>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 text-sm">
        <strong>错误：</strong> {{ error }}
      </div>

      <!-- 算法说明区域 -->
      <div class="mt-6 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">算法说明</h3>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>AES</strong>：高级加密标准，可以使用128位、192位或256位密钥</li>
          <li><strong>DES</strong>：数据加密标准，使用56位密钥，安全性较低</li>
          <li><strong>3DES</strong>：三重DES，使用三个56位DES密钥，提供更高安全性</li>
          <li><strong>SM4</strong>：中国国密标准，分组密码算法，使用128位密钥</li>
        </ul>
        
        <h3 class="font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2">工作模式说明</h3>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>ECB</strong>：电子密码本模式，各个分组独立加密，不推荐用于敏感数据</li>
          <li><strong>CBC</strong>：密码分组链接模式，每个分组依赖前一个分组，更加安全</li>
          <li><strong>CFB</strong>：密文反馈模式，将分组密码转换为流密码</li>
          <li><strong>OFB</strong>：输出反馈模式，也是一种流密码模式，加解密使用相同操作</li>
          <li><strong>CTR</strong>：计数器模式，每个分组使用递增计数器进行加密，可并行处理</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CryptoJS from 'crypto-js'
import { sm4 } from 'sm-crypto'

// 定义状态
const selectedAlgorithm = ref('aes')
const selectedMode = ref('CBC')
const selectedPadding = ref('PKCS7')
const selectedOutputFormat = ref('base64')
const operation = ref('encrypt')
const key = ref('')
const iv = ref('')
const keyIsHex = ref(false)
const ivIsHex = ref(false)
const input = ref('')
const result = ref('')
const error = ref('')

// 算法列表
const algorithms = [
  { id: 'aes', name: 'AES' },
  { id: 'des', name: 'DES' },
  { id: '3des', name: '3DES' },
  { id: 'sm4', name: 'SM4 (国密)' }
]

// 模式列表
const modes = [
  { id: 'ECB', name: 'ECB' },
  { id: 'CBC', name: 'CBC' },
  { id: 'CFB', name: 'CFB' },
  { id: 'OFB', name: 'OFB' },
  { id: 'CTR', name: 'CTR' }
]

// SM4特定模式
const sm4Modes = [
  { id: 'ECB', name: 'ECB' },
  { id: 'CBC', name: 'CBC' }
]

// 填充方式
const paddings = [
  { id: 'PKCS7', name: 'PKCS7' },
  { id: 'NoPadding', name: '无填充' },
  { id: 'ZeroPadding', name: '零填充' }
]

// 输出格式
const outputFormats = [
  { id: 'base64', name: 'Base64' },
  { id: 'hex', name: '十六进制' }
]

// 获取当前算法的可用模式
function getModes() {
  if (selectedAlgorithm.value === 'sm4') {
    return sm4Modes
  }
  return modes
}

// 检查当前模式是否需要IV
function needsIV() {
  return selectedMode.value !== 'ECB'
}

// 获取当前算法的密钥大小提示
function getKeySize() {
  switch (selectedAlgorithm.value) {
    case 'aes':
      return '16/24/32字节'
    case 'des':
      return '8字节'
    case '3des':
      return '24字节'
    case 'sm4':
      return '16字节'
    default:
      return ''
  }
}

// 获取当前算法的块大小
function getBlockSize() {
  switch (selectedAlgorithm.value) {
    case 'aes':
    case 'sm4':
      return '16字节'
    case 'des':
    case '3des':
      return '8字节'
    default:
      return ''
  }
}

// 生成随机密钥
function generateRandomKey() {
  const keyLength = getDefaultKeyLength()
  const randomKey = CryptoJS.lib.WordArray.random(keyLength)
  
  if (keyIsHex.value) {
    key.value = randomKey.toString(CryptoJS.enc.Hex)
  } else {
    key.value = randomKey.toString(CryptoJS.enc.Utf8)
  }
}

// 生成随机IV
function generateRandomIV() {
  const blockSize = getDefaultBlockSize()
  const randomIV = CryptoJS.lib.WordArray.random(blockSize)
  
  if (ivIsHex.value) {
    iv.value = randomIV.toString(CryptoJS.enc.Hex)
  } else {
    iv.value = randomIV.toString(CryptoJS.enc.Utf8)
  }
}

// 获取默认密钥长度
function getDefaultKeyLength() {
  switch (selectedAlgorithm.value) {
    case 'aes':
      return 16 // 128位
    case 'des':
      return 8 // 56位（实际使用64位，但有8位是校验位）
    case '3des':
      return 24 // 3个8字节密钥
    case 'sm4':
      return 16 // 128位
    default:
      return 16
  }
}

// 获取默认块大小
function getDefaultBlockSize() {
  switch (selectedAlgorithm.value) {
    case 'aes':
    case 'sm4':
      return 16 // 128位
    case 'des':
    case '3des':
      return 8 // 64位
    default:
      return 16
  }
}

// 处理加密解密操作
async function processOperation() {
  error.value = ''
  result.value = ''
  
  try {
    if (operation.value === 'encrypt') {
      result.value = await encrypt()
    } else {
      result.value = await decrypt()
    }
  } catch (e) {
    console.error(e)
    error.value = e.message || '处理过程中发生错误'
  }
}

// 加密函数
async function encrypt() {
  // 处理密钥和IV
  let processedKey = keyIsHex.value ? CryptoJS.enc.Hex.parse(key.value) : key.value
  let processedIV = ivIsHex.value ? CryptoJS.enc.Hex.parse(iv.value) : iv.value

  // 如果模式不需要IV，设置为空
  if (!needsIV()) {
    processedIV = CryptoJS.lib.WordArray.create()
  }
  
  // SM4特殊处理
  if (selectedAlgorithm.value === 'sm4') {
    return encryptSM4(input.value, processedKey, processedIV)
  }
  
  // 使用CryptoJS处理其他算法
  let encrypted
  let options = {
    mode: CryptoJS.mode[selectedMode.value],
    padding: CryptoJS.pad[selectedPadding.value]
  }
  
  if (needsIV()) {
    options.iv = processedIV
  }
  
  switch (selectedAlgorithm.value) {
    case 'aes':
      encrypted = CryptoJS.AES.encrypt(input.value, processedKey, options)
      break
    case 'des':
      encrypted = CryptoJS.DES.encrypt(input.value, processedKey, options)
      break
    case '3des':
      encrypted = CryptoJS.TripleDES.encrypt(input.value, processedKey, options)
      break
    default:
      throw new Error('不支持的算法')
  }
  
  // 按照选择的格式输出
  if (selectedOutputFormat.value === 'hex') {
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex)
  }
  return encrypted.toString() // 默认为 base64
}

// 解密函数
async function decrypt() {
  // 处理密钥和IV
  let processedKey = keyIsHex.value ? CryptoJS.enc.Hex.parse(key.value) : key.value
  let processedIV = ivIsHex.value ? CryptoJS.enc.Hex.parse(iv.value) : iv.value
  
  // 如果模式不需要IV，设置为空
  if (!needsIV()) {
    processedIV = CryptoJS.lib.WordArray.create()
  }
  
  // 按照输入格式解析密文
  let ciphertext
  if (selectedOutputFormat.value === 'hex') {
    ciphertext = CryptoJS.enc.Hex.parse(input.value)
  } else {
    // 尝试按base64格式解析
    try {
      // 如果是标准的cryptojs格式，直接使用
      if (input.value.indexOf('base64') !== -1) {
        ciphertext = input.value 
      } else {
        // 否则按纯base64处理
        ciphertext = CryptoJS.enc.Base64.parse(input.value).toString(CryptoJS.enc.Base64)
      }
    } catch (e) {
      ciphertext = input.value // 原样处理
    }
  }
  
  // SM4特殊处理
  if (selectedAlgorithm.value === 'sm4') {
    return decryptSM4(input.value, processedKey, processedIV)
  }
  
  // 使用CryptoJS处理其他算法
  let decrypted
  let options = {
    mode: CryptoJS.mode[selectedMode.value],
    padding: CryptoJS.pad[selectedPadding.value]
  }
  
  if (needsIV()) {
    options.iv = processedIV
  }
  
  // 如果是hex格式，需要特殊处理
  if (selectedOutputFormat.value === 'hex') {
    let encryptedObj = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Hex.parse(input.value)
    })
    
    switch (selectedAlgorithm.value) {
      case 'aes':
        decrypted = CryptoJS.AES.decrypt(encryptedObj, processedKey, options)
        break
      case 'des':
        decrypted = CryptoJS.DES.decrypt(encryptedObj, processedKey, options)
        break
      case '3des':
        decrypted = CryptoJS.TripleDES.decrypt(encryptedObj, processedKey, options)
        break
      default:
        throw new Error('不支持的算法')
    }
  } else {
    // base64格式
    switch (selectedAlgorithm.value) {
      case 'aes':
        decrypted = CryptoJS.AES.decrypt(ciphertext, processedKey, options)
        break
      case 'des':
        decrypted = CryptoJS.DES.decrypt(ciphertext, processedKey, options)
        break
      case '3des':
        decrypted = CryptoJS.TripleDES.decrypt(ciphertext, processedKey, options)
        break
      default:
        throw new Error('不支持的算法')
    }
  }
  
  return decrypted.toString(CryptoJS.enc.Utf8)
}

// SM4加密
function encryptSM4(plaintext, key, iv) {
  // 处理key为字符串格式
  const keyStr = typeof key === 'string' ? key : key.toString(CryptoJS.enc.Utf8)
  
  // 根据模式处理加密
  if (selectedMode.value === 'ECB') {
    const ciphertext = sm4.encrypt(plaintext, keyStr)
    return selectedOutputFormat.value === 'hex' ? ciphertext : btoa(ciphertext)
  } else {
    // CBC模式
    const ivStr = typeof iv === 'string' ? iv : iv.toString(CryptoJS.enc.Utf8)
    const ciphertext = sm4.encrypt(plaintext, keyStr, { mode: 'cbc', iv: ivStr })
    return selectedOutputFormat.value === 'hex' ? ciphertext : btoa(ciphertext)
  }
}

// SM4解密
function decryptSM4(ciphertext, key, iv) {
  // 处理key为字符串格式
  const keyStr = typeof key === 'string' ? key : key.toString(CryptoJS.enc.Utf8)
  
  // 如果是base64格式，先转为hex
  let processedCiphertext = ciphertext
  if (selectedOutputFormat.value === 'base64') {
    try {
      processedCiphertext = atob(ciphertext)
    } catch (e) {
      throw new Error('无效的Base64编码')
    }
  }
  
  // 根据模式处理解密
  if (selectedMode.value === 'ECB') {
    return sm4.decrypt(processedCiphertext, keyStr)
  } else {
    // CBC模式
    const ivStr = typeof iv === 'string' ? iv : iv.toString(CryptoJS.enc.Utf8)
    return sm4.decrypt(processedCiphertext, keyStr, { mode: 'cbc', iv: ivStr })
  }
}

// 检查是否可以执行加解密
function canProcess() {
  if (!key.value) return false
  if (needsIV() && !iv.value) return false
  if (!input.value) return false
  return true
}

// 清空输入
function clearInput() {
  input.value = ''
  result.value = ''
  error.value = ''
}

// 复制结果
function copyResult() {
  if (!result.value) return
  
  navigator.clipboard.writeText(result.value)
    .then(() => {
      alert('已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}
</script> 