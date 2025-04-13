<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.symmetric-crypto.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.symmetric-crypto.description') }}
      </p>

      <!-- 算法选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.symmetric-crypto.algorithm.title') }}
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
            {{ $t(`tools.symmetric-crypto.algorithm.${algo.id}`) }}
          </button>
        </div>
      </div>

      <!-- 工作模式 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.symmetric-crypto.mode.title') }}
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
            {{ $t(`tools.symmetric-crypto.mode.${mode.id.toLowerCase()}`) }}
          </button>
        </div>
      </div>

      <!-- 填充方式 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none' && selectedMode !== 'CTR' && selectedMode !== 'OFB' && selectedMode !== 'CFB'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.symmetric-crypto.padding.title') }}
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
            {{ $t(`tools.symmetric-crypto.padding.${padding.id.toLowerCase()}`) }}
          </button>
        </div>
      </div>

      <!-- 加密/解密切换 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.symmetric-crypto.operation.title') }}
        </label>
        <div class="flex gap-2">
          <button 
            @click="switchOperation('encrypt')"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="operation === 'encrypt' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ $t('tools.symmetric-crypto.operation.encrypt') }}
          </button>
          <button 
            @click="switchOperation('decrypt')"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="operation === 'decrypt' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ $t('tools.symmetric-crypto.operation.decrypt') }}
          </button>
        </div>
      </div>

      <!-- 密钥和IV输入 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 密钥 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.symmetric-crypto.key.title') }} <span class="text-xs text-gray-500">({{ getKeySize() }})</span>
            </label>
            <!-- 密钥格式选择 -->
            <div class="flex mb-2 text-sm">
              <span class="mr-2 text-gray-600 dark:text-gray-400">{{ $t('tools.symmetric-crypto.inputFormat.title') }}:</span>
              <button 
                v-for="format in ['string', 'hex', 'base64']" 
                :key="`key-${format}`"
                @click="keyInputFormat = format"
                class="mr-2 px-2 py-0.5 rounded"
                :class="keyInputFormat === format 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                {{ $t(`tools.symmetric-crypto.inputFormat.${format}`) }}
              </button>
            </div>
            <div class="flex mb-2">
              <input 
                v-model="key" 
                type="text" 
                :placeholder="getKeyPlaceholder()"
                class="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <button 
                @click="generateRandomKey()"
                class="px-3 py-2 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                :title="$t('tools.symmetric-crypto.key.generateRandom')"
              >
                {{ $t('tools.symmetric-crypto.key.generateRandom') }}
              </button>
            </div>
            <!-- 密钥输入框下方 -->
            <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ $t('tools.symmetric-crypto.key.autoFillHint') }}
            </div>
          </div>

          <!-- IV (初始向量) -->
          <div v-if="needsIV()">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.symmetric-crypto.iv.label') }} <span class="text-xs text-gray-500">({{ getBlockSize() }})</span>
            </label>
            <!-- IV格式选择 -->
            <div class="flex mb-2 text-sm">
              <span class="mr-2 text-gray-600 dark:text-gray-400">{{ $t('tools.symmetric-crypto.inputFormat.title') }}:</span>
              <button 
                v-for="format in ['string', 'hex', 'base64']" 
                :key="`iv-${format}`"
                @click="ivInputFormat = format"
                class="mr-2 px-2 py-0.5 rounded"
                :class="ivInputFormat === format 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                {{ $t(`tools.symmetric-crypto.inputFormat.${format}`) }}
              </button>
            </div>
            <div class="flex mb-2">
              <input 
                v-model="iv" 
                type="text" 
                :placeholder="getIVPlaceholder()"
                class="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <button 
                @click="generateRandomIV()"
                class="px-3 py-2 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                :title="$t('tools.symmetric-crypto.iv.generateRandom')"
              >
                {{ $t('tools.symmetric-crypto.iv.generateRandom') }}
              </button>
            </div>
            <!-- IV输入框下方 -->
            <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ $t('tools.symmetric-crypto.iv.autoFillHint') }}
            </div>
          </div>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <div class="flex items-center gap-4 mb-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300 shrink-0">
            {{ operation === 'encrypt' ? $t('tools.symmetric-crypto.input.title') : $t('tools.symmetric-crypto.input.titleDecrypt') }}
          </label>
          <!-- 输入格式选择 -->
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="format in operation === 'encrypt' ? inputFormats : decryptInputFormats" 
              :key="format.id"
              @click="selectedInputFormat = format.id"
              class="px-3 py-1.5 rounded-md text-sm"
              :class="selectedInputFormat === format.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ $t(`tools.symmetric-crypto.inputFormat.${format.id}`) }}
            </button>
          </div>
          <button 
            @click="clearInput" 
            class="text-xs text-red-500 hover:text-red-700"
            v-if="input.length > 0"
          >
            {{ $t('tools.symmetric-crypto.input.clear') }}
          </button>
        </div>
        <textarea 
          v-model="input" 
          class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          :placeholder="operation === 'encrypt' ? $t('tools.symmetric-crypto.input.placeholder') : $t('tools.symmetric-crypto.input.placeholderDecrypt', { format: $t(`tools.symmetric-crypto.inputFormat.${selectedInputFormat}`) })"
        ></textarea>
      </div>

      <!-- 执行按钮 -->
      <div class="mb-4" v-if="selectedAlgorithm !== 'none'">
        <button 
          @click="processOperation"
          class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canProcess()"
        >
          {{ operation === 'encrypt' ? $t('tools.symmetric-crypto.buttons.process') : $t('tools.symmetric-crypto.buttons.processDecrypt') }}
        </button>
      </div>

      <!-- 结果区域 -->
      <div v-if="result" class="mb-4">
        <div class="flex items-center gap-4 mb-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300 shrink-0">
            {{ operation === 'encrypt' ? $t('tools.symmetric-crypto.output.title') : $t('tools.symmetric-crypto.output.titleDecrypt') }}
          </label>
          <!-- 输出格式选择 -->
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="format in operation === 'encrypt' ? outputFormats : decryptOutputFormats" 
              :key="format.id"
              @click="changeOutputFormat(format.id)"
              class="px-2 py-1 rounded text-xs"
              :class="(operation === 'encrypt' ? selectedOutputFormat : selectedDecryptOutputFormat) === format.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ $t(`tools.symmetric-crypto.outputFormat.${format.id}`) }}
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button 
              @click="copyResult" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.symmetric-crypto.output.copyResult') }}
            </button>
            <span 
              v-if="copySuccess"
              class="text-xs text-green-600 dark:text-green-400 transition-opacity duration-200"
            >
              {{ $t('tools.symmetric-crypto.output.copied') }}
            </span>
          </div>
        </div>
        <div class="w-full min-h-[100px] max-h-[200px] overflow-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm break-all whitespace-pre-wrap">
          {{ result }}
        </div>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 text-sm">
        <strong>{{ $t('tools.symmetric-crypto.error.title') }}：</strong> {{ error }}
      </div>

      <!-- 算法说明区域 -->
      <div class="mt-6 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.symmetric-crypto.info.title') }}</h3>
        <ul class="list-disc list-inside space-y-1">
          <li v-for="algo in algorithms" :key="`info-${algo.id}`">
            <strong>{{ algo.name }}</strong>: {{ $t(`tools.symmetric-crypto.info.algorithms.${algo.id}`) }}
          </li>
        </ul>
        
        <h3 class="font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2">{{ $t('tools.symmetric-crypto.info.modes.title') }}</h3>
        <ul class="list-disc list-inside space-y-1">
          <li v-for="mode in modes" :key="`info-${mode.id}`">
            <strong>{{ mode.name }}</strong>: {{ $t(`tools.symmetric-crypto.info.modes.${mode.id.toLowerCase()}`) }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 添加文章部分 -->
    <SymmetricCryptoArticle />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import CryptoJS from 'crypto-js'
import { sm4 } from 'sm-crypto'
import { useI18n } from 'vue-i18n'
import SymmetricCryptoArticle from './SymmetricCryptoArticle.vue'

// 定义状态
const selectedAlgorithm = ref('aes')
const selectedMode = ref('CBC')
const selectedPadding = ref('Pkcs7')
const selectedOutputFormat = ref('hex')  // 默认使用hex
const selectedInputFormat = ref('string')   // 默认使用string
const selectedDecryptOutputFormat = ref('string')  // 默认解密输出为string
const operation = ref('encrypt')
const key = ref('')
const iv = ref('')
const input = ref('')
const result = ref('')
const error = ref('')
const copySuccess = ref(false)  // 新增：复制成功提示状态
const keyInputFormat = ref('string')
const ivInputFormat = ref('string')

// 算法列表
const algorithms = [
  { id: 'aes', name: 'AES' },
  { id: 'des', name: 'DES' },
  { id: 'tripledes', name: '3DES' },
  { id: 'sm4', name: 'SM4 (国密)' }
]

// 模式列表
const modes = [
  { id: 'CBC', name: 'CBC' },
  { id: 'ECB', name: 'ECB' },
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
  { id: 'Pkcs7', name: 'PKCS7' },
  { id: 'ZeroPadding', name: '零填充' }
]

// 输入格式（用于加密）
const inputFormats = [
  { id: 'string', name: '字符串' },
  { id: 'hex', name: 'HEX' },
  { id: 'base64', name: 'Base64' }
]

// 输入格式（用于解密）
const decryptInputFormats = [
  { id: 'hex', name: 'HEX' },
  { id: 'base64', name: 'Base64' }
]

// 输出格式（用于加密）
const outputFormats = [
  { id: 'hex', name: 'HEX' },
  { id: 'base64', name: 'Base64' }
]

// 输出格式（用于解密）
const decryptOutputFormats = [
  { id: 'string', name: '字符串' },
  { id: 'hex', name: 'HEX' },
  { id: 'base64', name: 'Base64' }
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
  const { locale } = useI18n()
  const unit = locale.value === 'zh' ? '字节' : 'bytes'
  
  switch (selectedAlgorithm.value) {
    case 'aes':
      return `16/24/32 ${unit}`
    case 'des':
      return `8 ${unit}`
    case 'tripledes':
      return `24 ${unit}`
    case 'sm4':
      return `16 ${unit}`
    default:
      return ''
  }
}

// 获取当前算法的块大小
function getBlockSize() {
  const { locale } = useI18n()
  const unit = locale.value === 'zh' ? '字节' : 'bytes'
  
  switch (selectedAlgorithm.value) {
    case 'aes':
    case 'sm4':
      return `16 ${unit}`
    case 'des':
    case 'tripledes':
      return `8 ${unit}`
    default:
      return ''
  }
}

// 获取当前算法密钥大小（字节）
function getKeySizeBytes() {
  switch (selectedAlgorithm.value) {
    case 'aes':
      return 16 // AES-128 (16 bytes = 128 bits)
    case 'des':
      return 8  // DES (8 bytes = 64 bits, 但实际使用56位)
    case 'tripledes':
      return 24 // 3DES (24 bytes = 192 bits)
    case 'sm4':
      return 16 // SM4 (16 bytes = 128 bits)
    default:
      return 16
  }
}

// 获取当前算法块大小（字节）
function getBlockSizeBytes() {
  switch (selectedAlgorithm.value) {
    case 'aes':
      return 16 // AES 块大小: 16 bytes
    case 'des':
    case 'tripledes':
      return 8  // DES/3DES 块大小: 8 bytes
    case 'sm4':
      return 16 // SM4 块大小: 16 bytes
    default:
      return 16
  }
}

// 在setup函数中获取t函数
const { t } = useI18n()

// 修改getKeyPlaceholder和getIVPlaceholder函数
function getKeyPlaceholder() {
  const keySize = getKeySize()
  switch(keyInputFormat.value) {
    case 'string':
      return t('tools.symmetric-crypto.key.placeholderString', { keySize })
    case 'hex':
      return t('tools.symmetric-crypto.key.placeholderHex', { keySize })
    case 'base64':
      return t('tools.symmetric-crypto.key.placeholderBase64', { keySize })
    default:
      return t('tools.symmetric-crypto.key.placeholder', { keySize })
  }
}

function getIVPlaceholder() {
  const blockSize = getBlockSize()
  switch(ivInputFormat.value) {
    case 'string':
      return t('tools.symmetric-crypto.iv.placeholderString', { blockSize })
    case 'hex':
      return t('tools.symmetric-crypto.iv.placeholderHex', { blockSize })
    case 'base64':
      return t('tools.symmetric-crypto.iv.placeholderBase64', { blockSize })
    default:
      return t('tools.symmetric-crypto.iv.placeholder', { blockSize })
  }
}

// 生成随机密钥
function generateRandomKey() {
  const keySizeBytes = getKeySizeBytes()
  const randomBytes = new Uint8Array(keySizeBytes)
  crypto.getRandomValues(randomBytes)
  
  let randomKey
  switch(keyInputFormat.value) {
    case 'string':
      // 生成可打印字符的随机字符串
      randomKey = Array.from(randomBytes)
        .map(byte => String.fromCharCode(32 + (byte % 94))) // 可打印ASCII
        .join('')
      break
    case 'hex':
      randomKey = Array.from(randomBytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('')
      break
    case 'base64':
      randomKey = btoa(String.fromCharCode.apply(null, randomBytes))
      break
  }
  
  key.value = randomKey
}

// 生成随机IV
function generateRandomIV() {
  const blockSizeBytes = getBlockSizeBytes()
  const randomBytes = new Uint8Array(blockSizeBytes)
  crypto.getRandomValues(randomBytes)
  
  let randomIV
  switch(ivInputFormat.value) {
    case 'string':
      // 生成可打印字符的随机字符串
      randomIV = Array.from(randomBytes)
        .map(byte => String.fromCharCode(32 + (byte % 94))) // 可打印ASCII
        .join('')
      break
    case 'hex':
      randomIV = Array.from(randomBytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('')
      break
    case 'base64':
      randomIV = btoa(String.fromCharCode.apply(null, randomBytes))
      break
  }
  
  iv.value = randomIV
}

// 获取默认密钥长度
function getDefaultKeyLength() {
  switch (selectedAlgorithm.value) {
    case 'aes':
      return 16 // 128位
    case 'des':
      return 8 // 56位（实际使用64位，但有8位是校验位）
    case 'tripledes':
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
    case 'tripledes':
      return 8 // 64位
    default:
      return 16
  }
}

// 验证十六进制字符串
function isValidHex(str) {
  return /^[0-9a-fA-F]*$/.test(str)
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

/**
 * 处理密钥，确保长度符合算法要求
 * @param {CryptoJS.lib.WordArray} keyWordArray - 原始密钥WordArray
 * @param {number} requiredBytes - 需要的字节数
 * @returns {CryptoJS.lib.WordArray} - 处理后的密钥
 */
function padKey(keyWordArray, requiredBytes) {
  const keyBytes = keyWordArray.sigBytes;
  
  // 如果密钥长度已经符合要求，直接返回
  if (keyBytes === requiredBytes) {
    return keyWordArray;
  }
  
  // 如果密钥太长，截断它
  if (keyBytes > requiredBytes) {
    const truncatedWords = [];
    const words = keyWordArray.words;
    
    // 每个word是4字节，计算需要的word数
    const requiredWords = Math.ceil(requiredBytes / 4);
    
    for (let i = 0; i < requiredWords; i++) {
      truncatedWords[i] = words[i];
    }
    
    // 创建新的WordArray
    return CryptoJS.lib.WordArray.create(
      truncatedWords, 
      requiredBytes
    );
  }
  
  // 如果密钥太短，添加0填充
  const paddedWords = [...keyWordArray.words];
  const currentWords = Math.ceil(keyBytes / 4);
  const requiredWords = Math.ceil(requiredBytes / 4);
  
  // 添加全0的word
  for (let i = currentWords; i < requiredWords; i++) {
    paddedWords[i] = 0;
  }
  
  // 创建新的WordArray
  return CryptoJS.lib.WordArray.create(
    paddedWords, 
    requiredBytes
  );
}

// 加密函数
async function encrypt() {
  // 处理密钥
  let processedKey
  switch(keyInputFormat.value) {
    case 'string':
      processedKey = CryptoJS.enc.Utf8.parse(key.value)
      break
    case 'hex':
      if (!isValidHex(key.value)) {
        throw new Error(t('tools.symmetric-crypto.error.invalidHexKey'))
      }
      processedKey = CryptoJS.enc.Hex.parse(key.value)
      break
    case 'base64':
      try {
        processedKey = CryptoJS.enc.Base64.parse(key.value)
      } catch (e) {
        throw new Error(t('tools.symmetric-crypto.error.invalidBase64Key'))
      }
      break
  }
  
  // 确保密钥长度符合要求
  processedKey = padKey(processedKey, getKeySizeBytes())
  
  // 处理IV
  let processedIV
  if (needsIV()) {
    switch(ivInputFormat.value) {
      case 'string':
        processedIV = CryptoJS.enc.Utf8.parse(iv.value)
        break
      case 'hex':
        if (!isValidHex(iv.value)) {
          throw new Error(t('tools.symmetric-crypto.error.invalidHexIV'))
        }
        processedIV = CryptoJS.enc.Hex.parse(iv.value)
        break
      case 'base64':
        try {
          processedIV = CryptoJS.enc.Base64.parse(iv.value)
        } catch (e) {
          throw new Error(t('tools.symmetric-crypto.error.invalidBase64IV'))
        }
        break
    }
    
    // 确保IV长度符合要求
    processedIV = padKey(processedIV, getBlockSizeBytes())
  } else {
    processedIV = CryptoJS.lib.WordArray.create()
  }
  
  // 处理输入
  let processedInput
  switch (selectedInputFormat.value) {
    case 'string':
      processedInput = input.value
      break
    case 'hex':
      if (!isValidHex(input.value)) {
        throw new Error(t('tools.symmetric-crypto.error.invalidHexInput'))
      }
      processedInput = CryptoJS.enc.Hex.parse(input.value)
      break
    case 'base64':
      try {
        processedInput = CryptoJS.enc.Base64.parse(input.value)
      } catch (e) {
        throw new Error(t('tools.symmetric-crypto.error.invalidBase64'))
      }
      break
  }

  // 如果模式不需要IV，设置为空
  if (!needsIV()) {
    processedIV = CryptoJS.lib.WordArray.create()
  }
  
  // SM4特殊处理
  if (selectedAlgorithm.value === 'sm4') {
    return encryptSM4(processedInput, processedKey, processedIV)
  }
  
  // 使用CryptoJS处理其他算法
  let encrypted
  let options = {
    mode: CryptoJS.mode[selectedMode.value],
    padding: selectedPadding.value === 'ZeroPadding' ? CryptoJS.pad.ZeroPadding : CryptoJS.pad.Pkcs7
  }
  
  if (needsIV()) {
    options.iv = processedIV
  }
  
  switch (selectedAlgorithm.value) {
    case 'aes':
      encrypted = CryptoJS.AES.encrypt(processedInput, processedKey, options)
      break
    case 'des':
      encrypted = CryptoJS.DES.encrypt(processedInput, processedKey, options)
      break
    case 'tripledes':
      encrypted = CryptoJS.TripleDES.encrypt(processedInput, processedKey, options)
      break
    default:
      throw new Error(t('tools.symmetric-crypto.error.unsupportedAlgorithm'))
  }
  
  // 按照选择的格式输出
  if (selectedOutputFormat.value === 'hex') {
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex)
  }
  return encrypted.toString() // base64
}

// 解密函数
async function decrypt() {
  // 处理密钥
  let processedKey
  switch(keyInputFormat.value) {
    case 'string':
      processedKey = CryptoJS.enc.Utf8.parse(key.value)
      break
    case 'hex':
      if (!isValidHex(key.value)) {
        throw new Error(t('tools.symmetric-crypto.error.invalidHexKey'))
      }
      processedKey = CryptoJS.enc.Hex.parse(key.value)
      break
    case 'base64':
      try {
        processedKey = CryptoJS.enc.Base64.parse(key.value)
      } catch (e) {
        throw new Error(t('tools.symmetric-crypto.error.invalidBase64Key'))
      }
      break
  }
  
  // 确保密钥长度符合要求  
  processedKey = padKey(processedKey, getKeySizeBytes())
  
  // 处理IV
  let processedIV
  if (needsIV()) {
    switch(ivInputFormat.value) {
      case 'string':
        processedIV = CryptoJS.enc.Utf8.parse(iv.value)
        break
      case 'hex':
        if (!isValidHex(iv.value)) {
          throw new Error(t('tools.symmetric-crypto.error.invalidHexIV'))
        }
        processedIV = CryptoJS.enc.Hex.parse(iv.value)
        break
      case 'base64':
        try {
          processedIV = CryptoJS.enc.Base64.parse(iv.value)
        } catch (e) {
          throw new Error(t('tools.symmetric-crypto.error.invalidBase64IV'))
        }
        break
    }
    
    // 确保IV长度符合要求
    processedIV = padKey(processedIV, getBlockSizeBytes())
  } else {
    processedIV = CryptoJS.lib.WordArray.create()
  }
  
  // 按照输入格式解析密文
  let ciphertext
  if (selectedInputFormat.value === 'hex') {
    // HEX格式
    if (!isValidHex(input.value)) {
      throw new Error(t('tools.symmetric-crypto.error.invalidHexFormat'))
    }
    ciphertext = CryptoJS.enc.Hex.parse(input.value)
    // 对于非SM4算法，创建CipherParams对象
    if (selectedAlgorithm.value !== 'sm4') {
      let cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: ciphertext
      })
      return decryptWithCryptoJS(cipherParams, processedKey, processedIV)
    }
  } else {
    // Base64格式
    try {
      // 添加Base64格式验证
      if (!/^[A-Za-z0-9+/]*={0,2}$/.test(input.value)) {
        throw new Error(t('tools.symmetric-crypto.error.invalidBase64Format'))
      }
      ciphertext = CryptoJS.enc.Base64.parse(input.value)
      if (!ciphertext || ciphertext.sigBytes === 0) {
        throw new Error(t('tools.symmetric-crypto.error.emptyBase64'))
      }
      if (selectedAlgorithm.value !== 'sm4') {
        let cipherParams = CryptoJS.lib.CipherParams.create({
          ciphertext: ciphertext
        })
        return decryptWithCryptoJS(cipherParams, processedKey, processedIV)
      }
    } catch (e) {
      error.value = e.message || t('tools.symmetric-crypto.error.invalidBase64')
      return ''
    }
  }
  
  // SM4特殊处理
  if (selectedAlgorithm.value === 'sm4') {
    const decrypted = decryptSM4(input.value, processedKey, processedIV)
    return formatDecryptOutput(decrypted)
  }
}

// 使用CryptoJS进行解密的辅助函数
function decryptWithCryptoJS(cipherParams, key, iv) {
  let options = {
    mode: CryptoJS.mode[selectedMode.value],
    padding: selectedPadding.value === 'ZeroPadding' ? CryptoJS.pad.ZeroPadding : CryptoJS.pad.Pkcs7
  }
  
  if (needsIV()) {
    options.iv = iv
  }
  
  let decrypted
  switch (selectedAlgorithm.value) {
    case 'aes':
      decrypted = CryptoJS.AES.decrypt(cipherParams, key, options)
      break
    case 'des':
      decrypted = CryptoJS.DES.decrypt(cipherParams, key, options)
      break
    case 'tripledes':
      decrypted = CryptoJS.TripleDES.decrypt(cipherParams, key, options)
      break
    default:
      throw new Error('不支持的算法')
  }
  
  return formatDecryptOutput(decrypted.toString(CryptoJS.enc.Utf8))
}

// 格式化解密输出
function formatDecryptOutput(text) {
  switch (selectedDecryptOutputFormat.value) {
    case 'string':
      return text
    case 'hex':
      return CryptoJS.enc.Utf8.parse(text).toString(CryptoJS.enc.Hex)
    case 'base64':
      return CryptoJS.enc.Utf8.parse(text).toString(CryptoJS.enc.Base64)
    default:
      return text
  }
}

// SM4加密
function encryptSM4(plaintext, key, iv) {
  // 处理key为字符串格式
  const keyStr = key.toString(CryptoJS.enc.Hex)
  
  // 处理输入为字符串格式
  let inputStr
  if (typeof plaintext === 'string') {
    inputStr = plaintext
  } else {
    // 如果是WordArray对象，转换为字符串
    inputStr = plaintext.toString(CryptoJS.enc.Utf8)
  }

  // 转换填充模式名称为小写
  let paddingMode = selectedPadding.value === 'ZeroPadding' ? 'zero' : 'pkcs#7'
  
  // 根据模式处理加密
  if (selectedMode.value === 'ECB') {
    const ciphertext = sm4.encrypt(inputStr, keyStr, {
      mode: 'ecb',
      padding: paddingMode,
      output: selectedOutputFormat.value
    })
    return ciphertext
  } else {
    // CBC模式
    const ivStr = iv.toString(CryptoJS.enc.Hex).substring(0, 32)
    const ciphertext = sm4.encrypt(inputStr, keyStr, { 
      mode: 'cbc', 
      iv: ivStr,
      padding: paddingMode,
      output: selectedOutputFormat.value
    })
    return ciphertext
  }
}

// SM4解密
function decryptSM4(ciphertext, key, iv) {
  // 处理key为字符串格式
  const keyStr = key.toString(CryptoJS.enc.Hex)
  
  // 根据输入格式处理密文
  let processedCiphertext = ciphertext
  if (selectedInputFormat.value === 'base64') {
    try {
      // 添加Base64格式验证
      if (!/^[A-Za-z0-9+/]*={0,2}$/.test(ciphertext)) {
        throw new Error(t('tools.symmetric-crypto.error.invalidBase64Format'))
      }
      processedCiphertext = atob(ciphertext)
      if (!processedCiphertext) {
        throw new Error(t('tools.symmetric-crypto.error.emptyBase64'))
      }
    } catch (e) {
      error.value = e.message || t('tools.symmetric-crypto.error.invalidBase64')
      return ''
    }
  } else {
    // HEX格式
    if (!isValidHex(ciphertext)) {
      throw new Error(t('tools.symmetric-crypto.error.invalidHexFormat'))
    }
    processedCiphertext = ciphertext
  }

  // 转换填充模式名称为小写
  let paddingMode = selectedPadding.value === 'ZeroPadding' ? 'zero' : 'pkcs#7'
  
  // 根据模式处理解密
  try {
    if (selectedMode.value === 'ECB') {
      return sm4.decrypt(processedCiphertext, keyStr, {
        mode: 'ecb',
        padding: paddingMode,
        input: selectedInputFormat.value,
        output: 'string'
      })
    } else {
      // CBC模式
      const ivStr = iv.toString(CryptoJS.enc.Hex).substring(0, 32)
      return sm4.decrypt(processedCiphertext, keyStr, { 
        mode: 'cbc', 
        iv: ivStr,
        padding: paddingMode,
        input: selectedInputFormat.value,
        output: 'string'
      })
    }
  } catch (e) {
    error.value = t('tools.symmetric-crypto.error.decryptFailed') + (e.message || t('tools.symmetric-crypto.error.unknownError'))
    return ''
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
      copySuccess.value = true
      setTimeout(() => {
        copySuccess.value = false
      }, 2000)
    })
    .catch(err => {
      console.error(t('tools.symmetric-crypto.error.copyFailed'), err)
      error.value = t('tools.symmetric-crypto.error.copyFailed')
    })
}

// 切换操作类型
function switchOperation(newOperation) {
  operation.value = newOperation
  input.value = ''  // 清空输入框
  result.value = '' // 清空结果
  error.value = ''  // 清空错误信息
  
  // 设置默认输入格式
  if (newOperation === 'decrypt') {
    selectedInputFormat.value = 'hex'  // 解密时默认使用HEX格式
  } else {
    selectedInputFormat.value = 'string'  // 加密时默认使用字符串格式
  }
}

// 切换输出格式
function changeOutputFormat(formatId) {
  if (operation.value === 'encrypt') {
    selectedOutputFormat.value = formatId
  } else {
    selectedDecryptOutputFormat.value = formatId
  }
  
  // 如果已有结果，重新处理以更新输出格式
  if (result.value) {
    processOperation()
  }
}
</script> 