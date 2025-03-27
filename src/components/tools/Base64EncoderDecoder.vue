<template>
  <div>
    <div class="mb-6">
      <div class="flex space-x-4 mb-4">
        <button 
          @click="mode = 'encode'" 
          class="px-4 py-2 rounded-md"
          :class="mode === 'encode' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
        >
          {{ $t('tools.base64-encoder-decoder.mode.encode') }}
        </button>
        <button 
          @click="mode = 'decode'" 
          class="px-4 py-2 rounded-md"
          :class="mode === 'decode' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
        >
          {{ $t('tools.base64-encoder-decoder.mode.decode') }}
        </button>
      </div>

      <!-- 输入类型选择 -->
      <div class="flex space-x-4 mb-4">
        <button 
          v-for="type in getInputTypes" 
          :key="type.value"
          @click="inputType = type.value" 
          class="px-4 py-2 rounded-md"
          :class="inputType === type.value ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
        >
          {{ $t(`tools.base64-encoder-decoder.input.${type.value}Option`) }}
        </button>
      </div>

      <!-- 图片编码选项 -->
      <div v-if="mode === 'encode' && inputType === 'file'" class="mb-4">
        <label class="inline-flex items-center">
          <input 
            type="checkbox" 
            v-model="addImageHeader"
            class="form-checkbox h-4 w-4 text-primary"
          >
          <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {{ $t('tools.base64-encoder-decoder.options.addImageHeader') }}
          </span>
        </label>
      </div>

      <!-- 字符集选择 -->
      <div v-if="mode === 'decode'" class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.base64-encoder-decoder.options.encoding') }}
        </label>
        <select 
          v-model="charset"
          class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="UTF-8">UTF-8</option>
          <option value="GBK">GBK</option>
        </select>
      </div>
      
      <!-- 文件输入 -->
      <div v-if="inputType === 'file'" class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.base64-encoder-decoder.input.selectFile') }}
        </label>
        <div class="relative">
          <input 
            type="file" 
            @change="handleFileInput"
            :key="fileInputKey"
            :disabled="isLoading"
            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
          <div 
            v-if="isLoading" 
            class="absolute inset-0 bg-gray-100 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center"
          >
            <div class="flex flex-col items-center space-y-2">
              <div class="flex items-center space-x-2">
                <svg class="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-sm text-gray-600 dark:text-gray-300">
                  {{ $t('tools.base64-encoder-decoder.messages.processing') }}
                </span>
              </div>
              <div v-if="processProgress > 0" class="w-full max-w-xs bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div class="bg-primary h-1.5 rounded-full" :style="{ width: processProgress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 文本输入 -->
      <div v-else class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.base64-encoder-decoder.input.title') }}
        </label>
        <div class="relative">
          <textarea 
            v-model="input" 
            class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            :placeholder="$t('tools.base64-encoder-decoder.input.placeholder')"
            :disabled="isLoading"
          ></textarea>
          <div 
            v-if="isLoading" 
            class="absolute inset-0 bg-gray-100 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center"
          >
            <div class="flex flex-col items-center space-y-2">
              <div class="flex items-center space-x-2">
                <svg class="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-sm text-gray-600 dark:text-gray-300">
                  {{ $t('tools.base64-encoder-decoder.messages.processing') }}
                </span>
              </div>
              <div v-if="processProgress > 0" class="w-full max-w-xs bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div class="bg-primary h-1.5 rounded-full" :style="{ width: processProgress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex justify-between mb-4">
        <button 
          @click="processData" 
          class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          {{ mode === 'encode' ? $t('tools.base64-encoder-decoder.mode.encode') : $t('tools.base64-encoder-decoder.mode.decode') }}
        </button>
        <button 
          @click="clearAll" 
          class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ $t('tools.base64-encoder-decoder.input.clear') }}
        </button>
      </div>
      
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.base64-encoder-decoder.output.placeholder') }}
          </label>
          <div class="flex space-x-2 items-center">
            <select 
              v-if="mode === 'decode' && output"
              v-model="selectedFileType"
              class="text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1"
            >
              <option v-for="type in fileTypeOptions" :key="type.value" :value="type.value">
                {{ $t(`tools.base64-encoder-decoder.fileTypeLabel.${type.value}`) }}
              </option>
            </select>
            <button 
              v-if="mode === 'decode' && isImage"
              @click="togglePreview" 
              class="text-sm text-primary hover:text-primary-dark"
            >
              {{ showPreview ? '显示文本' : '显示图片' }}
            </button>
            <button 
              v-if="mode === 'decode' && output"
              @click="downloadOutput" 
              class="text-sm text-primary hover:text-primary-dark"
            >
              {{ $t('tools.base64-encoder-decoder.output.download') }}
            </button>
          </div>
        </div>
        <div class="relative">
          <textarea 
            v-if="!showPreview"
            v-model="output" 
            class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            readonly
          ></textarea>
          <div 
            v-else
            class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 overflow-auto flex items-center justify-center"
          >
            <img 
              :src="imagePreviewUrl" 
              class="max-w-full max-h-full object-contain"
              alt="预览图片"
            />
          </div>
          <button 
            v-if="output" 
            @click="copyToClipboard" 
            class="absolute right-2 top-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            title="复制到剪贴板"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
        <div v-if="copyStatus" class="text-sm text-green-600 dark:text-green-400 mt-2">
          {{ $t('tools.base64-encoder-decoder.messages.copied') }}
        </div>
        <div v-if="error" class="text-sm text-red-600 dark:text-red-400 mt-2">
          {{ error }}
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 dark:bg-gray-800 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
      <h3 class="font-medium mb-2">{{ $t('tools.base64-encoder-decoder.about.title') }}</h3>
      <p class="mb-2">{{ $t('tools.base64-encoder-decoder.about.description') }}</p>
      
      <h4 class="font-medium mb-2">{{ $t('tools.base64-encoder-decoder.features.title') }}</h4>
      <ul class="list-disc pl-5 mb-2">
        <li>{{ $t('tools.base64-encoder-decoder.features.multiInput') }}</li>
        <li>{{ $t('tools.base64-encoder-decoder.features.charsetSupport') }}</li>
        <li>{{ $t('tools.base64-encoder-decoder.features.imagePreview') }}</li>
        <li>{{ $t('tools.base64-encoder-decoder.features.fileDownload') }}</li>
        <li>{{ $t('tools.base64-encoder-decoder.features.chunkProcessing') }}</li>
        <li>{{ $t('tools.base64-encoder-decoder.features.autoDetect') }}</li>
      </ul>
      <div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-md">
        <p class="text-yellow-800 dark:text-yellow-200">{{ $t('tools.base64-encoder-decoder.notes.title') }}</p>
        <ul class="list-disc pl-5 mt-1 text-yellow-700 dark:text-yellow-300">
          <li>{{ $t('tools.base64-encoder-decoder.notes.sizeIncrease') }}</li>
          <li>{{ $t('tools.base64-encoder-decoder.notes.chunkProcessing') }}</li>
          <li>{{ $t('tools.base64-encoder-decoder.notes.largeFiles') }}</li>
          <li>{{ $t('tools.base64-encoder-decoder.notes.fileInput') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { Buffer } from 'buffer'
import iconv from 'iconv-lite'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const mode = ref('encode')
const input = ref('')
const output = ref('')
const error = ref('')
const copyStatus = ref(false)
const charset = ref('UTF-8')
const inputType = ref('text')
const showPreview = ref(false)
const isImage = ref(false)
const imagePreviewUrl = ref('')
const fileInputKey = ref(0)
const isLoading = ref(false)
const decodedBinaryData = ref(null)
const processProgress = ref(0)
const selectedFileType = ref('pdf')
const addImageHeader = ref(false)

const inputTypes = [
  { label: '文本', value: 'text' },
  { label: '文件', value: 'file' },
  { label: 'Hex', value: 'hex' }
]

const decodeInputTypes = [
  { label: '文本', value: 'text' },
  { label: '文件', value: 'file' }
]

const getInputTypes = computed(() => {
  return mode.value === 'encode' ? inputTypes : decodeInputTypes
})

// 当输入改变时自动处理
watch([input, charset], () => {
  if (inputType.value !== 'file') {
    if (input.value.length > 10240) { // 10KB以上不自动处理
      output.value = ''
      return
    }
    // 增加防抖时间
    processDataDebounced()
  }
})

// 当模式改变时重置并处理
watch([mode, inputType], () => {
  clearAll()
})

// 检查是否为图片内容
function checkIfImage(base64String) {
  try {
    // 检查常见图片格式的magic numbers
    const decodedBuffer = Buffer.from(base64String, 'base64')
    const header = decodedBuffer.slice(0, 4).toString('hex').toLowerCase()
    
    // 检查常见图片格式的文件头
    const imageHeaders = {
      'ffd8ff': 'image/jpeg',  // JPEG
      '89504e47': 'image/png', // PNG
      '47494638': 'image/gif', // GIF
      '424d': 'image/bmp',     // BMP
      '52494646': 'image/webp' // WEBP
    }
    
    for (const [magic, mimeType] of Object.entries(imageHeaders)) {
      if (header.startsWith(magic)) {
        return mimeType
      }
    }
    
    return false
  } catch (e) {
    return false
  }
}

// 检测文件类型
function detectFileType(buffer) {
  const header = buffer.slice(0, 8).toString('hex').toLowerCase()
  
  // 文件类型签名库
  const signatures = {
    // 图片
    'ffd8ff': { mime: 'image/jpeg', ext: '.jpg' },
    '89504e47': { mime: 'image/png', ext: '.png' },
    '47494638': { mime: 'image/gif', ext: '.gif' },
    '424d': { mime: 'image/bmp', ext: '.bmp' },
    '52494646': { mime: 'image/webp', ext: '.webp' },
    
    // 文档
    '504b0304': { mime: 'application/zip', ext: '.zip' },
    '25504446': { mime: 'application/pdf', ext: '.pdf' },
    'd0cf11e0': { mime: 'application/msword', ext: '.doc' },
    
    // 音频
    '494433': { mime: 'audio/mpeg', ext: '.mp3' },
    'fff3': { mime: 'audio/mpeg', ext: '.mp3' },
    '4f676753': { mime: 'audio/ogg', ext: '.ogg' },
    
    // 视频
    '000001ba': { mime: 'video/mpeg', ext: '.mpeg' },
    '000001b3': { mime: 'video/mpeg', ext: '.mpeg' },
    '66747970': { mime: 'video/mp4', ext: '.mp4' },
    
    // 压缩文件
    '1f8b08': { mime: 'application/gzip', ext: '.gz' },
    '526172': { mime: 'application/x-rar-compressed', ext: '.rar' },
    '377abcaf': { mime: 'application/x-7z-compressed', ext: '.7z' }
  }
  
  for (const [magic, info] of Object.entries(signatures)) {
    if (header.startsWith(magic)) {
      return info
    }
  }
  
  // 尝试检测文本文件
  try {
    // 检查前1024字节是否都是可打印字符或常见控制字符
    const testSize = Math.min(buffer.length, 1024)
    const testBuffer = buffer.slice(0, testSize)
    const isPrintable = testBuffer.every(byte => 
      (byte >= 32 && byte <= 126) || // 可打印ASCII字符
      [9, 10, 13].includes(byte)     // tab, LF, CR
    )
    
    if (isPrintable) {
      return { mime: 'text/plain', ext: '.txt' }
    }
  } catch (e) {
    // 忽略检测错误
  }
  
  // 默认二进制文件
  return { mime: 'application/octet-stream', ext: '.bin' }
}

// 切换预览模式
function togglePreview() {
  showPreview.value = !showPreview.value
}

// 防抖处理
let debounceTimer = null
function processDataDebounced() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    processData()
  }, 500) // 增加到500ms
}

// 异步处理数据
async function processDataAsync(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (mode.value === 'encode') {
          if (inputType.value === 'hex') {
            // 处理Hex输入
            const hexString = data.replace(/[^0-9A-Fa-f]/g, '')
            if (hexString.length % 2 !== 0) {
              throw new Error($t('tools.base64-encoder-decoder.messages.invalidHex'))
          }
            const bytes = Buffer.from(hexString, 'hex')
            resolve(bytes.toString('base64'))
          } else {
            // 处理普通文本输入
            const buffer = Buffer.from(data)
            resolve(buffer.toString('base64'))
          }
        } else {
          // 解码
          // 首先验证是否为有效的Base64
          if (!isValidBase64(data.trim())) {
            throw new Error($t('tools.base64-encoder-decoder.messages.invalidBase64'))
          }
          
          const decoded = Buffer.from(data.trim(), 'base64')
          const result = iconv.decode(decoded, charset.value)
          
          // 仅在数据量较小时检查是否为图片
          const shouldCheckImage = decoded.length < 1024 * 1024 // 1MB以下才检查
          const mimeType = shouldCheckImage ? checkIfImage(data.trim()) : false
          
          resolve({ 
            text: result, 
            decoded: decoded,
            mimeType: mimeType
          })
        }
      } catch (e) {
        reject(e)
      }
    }, 0)
  })
}

// 验证Base64字符串
function isValidBase64(str) {
  if (!str) return false
  // 快速检查：长度必须是4的倍数（可能有补位）
  if (str.length % 4 !== 0) return false
  
  // 使用正则表达式检查字符集，但只检查开头的一小部分
  // 对于大文本，只检查前1000个字符
  const checkLength = Math.min(str.length, 1000)
  const checkStr = str.slice(0, checkLength)
  return /^[A-Za-z0-9+/]*={0,2}$/.test(checkStr)
}

// 更新处理数据函数
async function processData() {
  if ((!input.value.trim() && inputType.value !== 'file') || (!output.value && inputType.value === 'file')) {
    output.value = ''
    return
  }

  error.value = ''
  isImage.value = false
  imagePreviewUrl.value = ''
  showPreview.value = false
  isLoading.value = true
  processProgress.value = 0

  try {
    if (mode.value === 'encode') {
      let result
      if (inputType.value === 'file') {
        // 如果是文件输入，使用当前的 output 值作为基础
        const currentOutput = output.value
        // 如果当前输出已经包含 base64 头，先移除它
        result = currentOutput.replace(/^data:.*?;base64,/, '')
      } else {
        // 否则进行新的编码
        result = await processDataAsync(input.value)
      }
      
      // 如果选择了添加图片头，检查是否为图片内容
      if (addImageHeader.value) {
        // 检查是否为图片类型
        const mimeType = checkIfImage(result)
        if (mimeType) {
          output.value = `data:${mimeType};base64,${result}`
        } else {
          output.value = result
        }
      } else {
        output.value = result
      }
    } else {
      // 对大文本进行分块处理
      const content = input.value.trim()
      
      // 如果内容较小，直接处理
      if (content.length < 100 * 1024) { // 100KB以下直接处理
        const result = await processDataAsync(content)
        output.value = result.text
        if (result.mimeType) {
          isImage.value = true
          imagePreviewUrl.value = `data:${result.mimeType};base64,${content}`
          showPreview.value = true
        }
      } else {
        // 大文本分块处理
        const chunkSize = 256 * 1024 // 减小到256KB
        const totalChunks = Math.ceil(content.length / chunkSize)
        let decodedParts = []
        let processedChunks = 0
        
        // 第一阶段：分块和验证 (40% 的进度)
        for (let i = 0; i < totalChunks; i++) {
          const start = i * chunkSize
          const end = Math.min(start + chunkSize, content.length)
          const chunk = content.slice(start, end)
          
          if (!isValidBase64(chunk)) {
            throw new Error($t('tools.base64-encoder-decoder.messages.invalidBase64'))
          }
          
          processProgress.value = Math.round((i + 1) / totalChunks * 40)
          await new Promise(resolve => setTimeout(resolve, 0))
        }
        
        // 第二阶段：实际解码 (40%-100% 的进度)
        for (let i = 0; i < totalChunks; i++) {
          const start = i * chunkSize
          const end = Math.min(start + chunkSize, content.length)
          const chunk = content.slice(start, end)
          
          const decodedChunk = Buffer.from(chunk, 'base64')
          decodedParts.push(decodedChunk)
          processedChunks++
          
          // 更新进度从40%到100%
          processProgress.value = 40 + Math.round((processedChunks / totalChunks) * 60)
          
          // 每处理5个块后让UI更新一次
          if (processedChunks % 5 === 0) {
            await new Promise(resolve => setTimeout(resolve, 0))
          }
        }
        
        // 合并所有解码后的部分
        const decoded = Buffer.concat(decodedParts)
        decodedBinaryData.value = decoded
        
        // 仅对较小文本显示内容
        if (decoded.length < 10 * 1024 * 1024) { // 小于10MB才显示
          output.value = iconv.decode(decoded, charset.value)
        } else {
          output.value = $t('tools.base64-encoder-decoder.messages.fileTooLarge')
        }
      }
    }
  } catch (e) {
    error.value = e.message
    output.value = ''
    decodedBinaryData.value = null
  } finally {
    isLoading.value = false
    processProgress.value = 0
  }
}

// 优化文件处理函数
async function handleFileInput(event) {
  const file = event.target.files[0]
  if (!file) return

  isLoading.value = true
  error.value = ''
  output.value = ''
  isImage.value = false
  imagePreviewUrl.value = ''
  showPreview.value = false
  decodedBinaryData.value = null
  processProgress.value = 0

  try {
    if (mode.value === 'encode') {
      const buffer = await file.arrayBuffer()
      const base64Result = Buffer.from(buffer).toString('base64')
      
      // 如果是图片且选择了添加头
      if (file.type.startsWith('image/') && addImageHeader.value) {
        output.value = `data:${file.type};base64,${base64Result}`
      } else {
        output.value = base64Result
      }
    } else {
      const reader = new FileReader()
      reader.onload = async (e) => {
        try {
          const content = e.target.result
          // 对大文件进行分块处理
          const chunkSize = 1024 * 1024 // 1MB chunks
          const totalChunks = Math.ceil(content.length / chunkSize)
          let decodedParts = []
          
          for (let i = 0; i < totalChunks; i++) {
            const start = i * chunkSize
            const end = Math.min(start + chunkSize, content.length)
            const chunk = content.slice(start, end).trim()
            
            if (!isValidBase64(chunk)) {
              throw new Error($t('tools.base64-encoder-decoder.messages.invalidBase64'))
            }
            
            const decodedChunk = Buffer.from(chunk, 'base64')
            decodedParts.push(decodedChunk)
            
            // 更新进度
            processProgress.value = Math.round((i + 1) / totalChunks * 100)
          }
          
          // 合并所有解码后的部分
          const decoded = Buffer.concat(decodedParts)
          decodedBinaryData.value = decoded
          
          // 对于小文件（<1MB），检查是否为图片
          if (decoded.length < 1024 * 1024) {
            const mimeType = checkIfImage(content)
            if (mimeType) {
              isImage.value = true
              imagePreviewUrl.value = `data:${mimeType};base64,${content}`
              showPreview.value = true
            }
          }
          
          // 仅对文本内容进行字符集转换
          if (decoded.length < 10 * 1024 * 1024) { // 小于10MB的文件才尝试显示文本
            output.value = iconv.decode(decoded, charset.value)
          } else {
            output.value = $t('tools.base64-encoder-decoder.messages.fileTooLarge')
          }
          
        } catch (e) {
          error.value = $t('tools.base64-encoder-decoder.messages.invalidBase64')
          output.value = ''
          decodedBinaryData.value = null
        } finally {
          isLoading.value = false
          processProgress.value = 0
        }
      }
      reader.onerror = () => {
        error.value = $t('tools.base64-encoder-decoder.messages.readFailed')
        output.value = ''
        decodedBinaryData.value = null
        isLoading.value = false
        processProgress.value = 0
      }
      reader.readAsText(file)
    }
  } catch (e) {
    error.value = e.message
    output.value = ''
    decodedBinaryData.value = null
    processProgress.value = 0
  } finally {
    if (mode.value === 'encode') {
      isLoading.value = false
    }
  }
}

// 下载输出为文件
function downloadOutput() {
  if (mode.value === 'decode') {
    let binaryData
    if (inputType.value === 'file' && decodedBinaryData.value) {
      binaryData = decodedBinaryData.value
    } else if (input.value.trim()) {
      binaryData = Buffer.from(input.value.trim(), 'base64')
    } else {
      return
    }
    
    try {
      // 获取选择的文件类型信息
      const fileType = fileTypeOptions.find(type => type.value === selectedFileType.value)
      
      // 创建Blob对象
      const blob = new Blob([binaryData], { type: fileType.mime })
      const url = URL.createObjectURL(blob)
      
      // 创建下载链接
      const a = document.createElement('a')
      a.href = url
      a.download = `decoded_file${fileType.ext}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (e) {
      error.value = e.message
    }
  }
}

// 复制到剪贴板
function copyToClipboard() {
  if (!output.value) return
  
  navigator.clipboard.writeText(output.value)
    .then(() => {
      copyStatus.value = true
      setTimeout(() => {
        copyStatus.value = false
      }, 2000)
    })
    .catch(() => {
      error.value = $t('tools.base64-encoder-decoder.messages.copyFailed')
    })
}

// 清空输入和输出
function clearAll() {
  input.value = ''
  output.value = ''
  error.value = ''
  copyStatus.value = false
  isImage.value = false
  imagePreviewUrl.value = ''
  showPreview.value = false
  isLoading.value = false
  decodedBinaryData.value = null
  processProgress.value = 0
  selectedFileType.value = 'pdf' // 重置文件类型选择
  fileInputKey.value++
  addImageHeader.value = false
}

// 文件类型选项
const fileTypeOptions = [
  { value: 'pdf', mime: 'application/pdf', ext: '.pdf' },
  { value: 'txt', mime: 'text/plain', ext: '.txt' },
  { value: 'jpg', mime: 'image/jpeg', ext: '.jpg' },
  { value: 'png', mime: 'image/png', ext: '.png' },
  { value: 'zip', mime: 'application/zip', ext: '.zip' },
  { value: 'bin', mime: 'application/octet-stream', ext: '.bin' }
]
</script> 