<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.gif-frame-extractor.uploadBtn') }}
          <input type="file" accept="image/gif" @change="loadGif" class="hidden" />
        </label>
        
        <button 
          @click="resetExtractor" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasGif"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.gif-frame-extractor.resetBtn') }}
        </button>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="extractFrames" 
          :disabled="!hasGif || isProcessing"
          class="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          {{ isProcessing ? $t('tools.gif-frame-extractor.extractingBtn') : $t('tools.gif-frame-extractor.extractBtn') }}
        </button>
        
        <button 
          @click="downloadAllFrames" 
          :disabled="!frames.length"
          class="btn bg-green-600 hover:bg-green-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.gif-frame-extractor.downloadAllBtn') }}
        </button>
      </div>
    </div>
    
    <!-- 通知弹窗 -->
    <div 
      v-if="notification.show" 
      class="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300"
      :class="{ 'opacity-0': notification.fadeOut }"
    >
      {{ notification.message }}
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- 左侧设置面板 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gif-frame-extractor.analysis.title') }}</h3>
          
          <div v-if="!hasGif" class="text-center py-12 text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>{{ $t('tools.gif-frame-extractor.upload.selectGif') }}</p>
          </div>
          
          <div v-else class="space-y-4">
            <!-- GIF预览 -->
            <div class="flex justify-center mb-4">
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <img 
                  :src="gifUrl" 
                  alt="GIF预览" 
                  class="max-w-full h-auto"
                />
              </div>
            </div>
            
            <!-- GIF信息 -->
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.gif-frame-extractor.analysis.fileName') }}:</span>
                <span class="font-medium text-gray-800 dark:text-gray-200">{{ fileName }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.gif-frame-extractor.analysis.size') }}:</span>
                <span class="font-medium text-gray-800 dark:text-gray-200">{{ gifInfo.width }}×{{ gifInfo.height }}px</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.gif-frame-extractor.analysis.fileSize') }}:</span>
                <span class="font-medium text-gray-800 dark:text-gray-200">{{ formatFileSize(gifInfo.size) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.gif-frame-extractor.analysis.totalFrames') }}:</span>
                <span class="font-medium text-gray-800 dark:text-gray-200">{{ frames.length || $t('tools.gif-frame-extractor.analysis.notExtracted') }}</span>
              </div>
            </div>
            
            <!-- 导出设置 -->
            <div class="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 class="font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.gif-frame-extractor.output.title') }}</h4>
              
              <!-- 输出格式 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.gif-frame-extractor.output.format') }}</label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    v-for="format in ['png', 'jpeg', 'webp']"
                    :key="format"
                    @click="settings.outputFormat = format"
                    class="px-3 py-2 text-sm border rounded-md transition-colors"
                    :class="settings.outputFormat === format 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                  >
                    {{ format.toUpperCase() }}
                  </button>
                </div>
              </div>
              
              <!-- 质量设置 (仅适用于JPEG/WebP) -->
              <div v-if="settings.outputFormat !== 'png'">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('tools.gif-frame-extractor.output.qualityValue', { value: settings.quality }) }}
                </label>
                <input
                  v-model.number="settings.quality"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>{{ $t('tools.gif-frame-extractor.output.lowQuality') }}</span>
                  <span>{{ $t('tools.gif-frame-extractor.output.highQuality') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右侧预览区域 -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-full">
            <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
              {{ $t('tools.gif-frame-extractor.frames.title') }}
              <span v-if="frames.length" class="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({{ frames.length }}帧)
              </span>
            </h3>
            
            <div v-if="!frames.length" class="text-center py-12 text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p class="text-lg">{{ $t('tools.gif-frame-extractor.frames.noFrames') }}</p>
              <p v-if="hasGif" class="mt-2">{{ $t('tools.gif-frame-extractor.frames.extractFirst') }}</p>
            </div>
            
            <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div 
                v-for="(frame, index) in frames" 
                :key="index"
                class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group"
              >
                <div class="relative">
                  <img 
                    :src="frame.url" 
                    :alt="`Frame ${index + 1}`" 
                    class="w-full h-auto"
                  />
                  <div class="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-30 transition-all duration-200">
                    <button 
                      @click="downloadFrame(frame)"
                      class="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="p-2 text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex justify-between">
                  <span>{{ $t('tools.gif-frame-extractor.frames.frame') }} #{{ index + 1 }}</span>
                  <span>{{ frame.delay }}ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import gifFrames from 'gif-frames'
import JSZip from 'jszip'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// 状态变量
const gifUrl = ref(null)
const fileName = ref('')
const frames = ref([])
const isProcessing = ref(false)
const canvas = ref(null)
const ctx = ref(null)

// GIF信息
const gifInfo = reactive({
  width: 0,
  height: 0,
  size: 0,
  frameCount: 0
})

// 导出设置
const settings = ref({
  outputFormat: 'png',
  quality: 90
})

// 通知状态
const notification = ref({
  show: false,
  message: '',
  fadeOut: false
})

// 计算属性
const hasGif = computed(() => !!gifUrl.value)

// 图片加载事件
async function loadGif(event) {
  const file = event.target.files[0]
  if (!file) return
  
  // 检查文件类型
  if (!file.type.includes('gif')) {
    showNotification(t('tools.gif-frame-extractor.messages.invalidGif'))
    return
  }
  
  fileName.value = file.name
  gifInfo.size = file.size
  
  try {
    // 创建文件URL
    gifUrl.value = URL.createObjectURL(file)
    
    // 获取GIF尺寸
    const img = new Image()
    await new Promise((resolve) => {
      img.onload = resolve
      img.src = gifUrl.value
    })
    
    gifInfo.width = img.width
    gifInfo.height = img.height
    
    showNotification(t('tools.gif-frame-extractor.messages.processingGif'))
  } catch (error) {
    console.error('加载GIF失败:', error)
    showNotification(t('tools.gif-frame-extractor.messages.invalidGif'))
  }
}

// 提取帧
async function extractFrames() {
  if (!gifUrl.value) {
    showNotification(t('tools.gif-frame-extractor.messages.invalidGif'))
    return
  }
  
  isProcessing.value = true
  frames.value = []
  
  try {
    // 检查文件URL是否有效
    if (!gifUrl.value || typeof gifUrl.value !== 'string') {
      throw new Error(t('tools.gif-frame-extractor.messages.fileEmpty'))
    }
    
    // 提取帧
    const frameData = await gifFrames({
      url: gifUrl.value,
      frames: 'all',
      outputType: 'canvas'
    })
    
    // 处理帧数据
    frames.value = frameData.map((frame, index) => {
      const canvas = frame.getImage()
      
      return {
        index,
        url: canvas.toDataURL(`image/${settings.value.outputFormat === 'jpeg' ? 'jpeg' : 'png'}`),
        delay: frame.frameInfo.delay * 10 // 转换为毫秒
      }
    })
    
    gifInfo.frameCount = frames.value.length
    showNotification(t('tools.gif-frame-extractor.messages.extractionComplete'))
  } catch (error) {
    console.error('提取帧失败:', error)
    showNotification(error.message || t('tools.gif-frame-extractor.messages.invalidGif'))
  } finally {
    isProcessing.value = false
  }
}

// 下载单个帧
function downloadFrame(frame) {
  if (!frame) return
  
  const link = document.createElement('a')
  link.href = frame.url
  link.download = `${fileName.value.replace('.gif', '')}_frame_${frame.index + 1}.${settings.value.outputFormat}`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  showNotification(t('tools.gif-frame-extractor.messages.frameDownloaded'))
}

// 下载所有帧
async function downloadAllFrames() {
  if (!frames.value.length) return
  
  try {
    isProcessing.value = true
    showNotification(t('tools.gif-frame-extractor.messages.preparingFrames'))
    
    // 创建ZIP文件
    const zip = new JSZip()
    const mimeType = getMimeType()
    const ext = settings.value.outputFormat
    const quality = settings.value.outputFormat === 'png' ? undefined : settings.value.quality / 100
    
    // 处理每一帧
    for (let i = 0; i < frames.value.length; i++) {
      const frame = frames.value[i]
      
      // 创建图像对象
      const img = await new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = frame.url
      })
      
      // 设置画布尺寸
      canvas.value.width = img.width
      canvas.value.height = img.height
      
      // 清除画布
      ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
      
      // 绘制图像
      ctx.value.drawImage(img, 0, 0)
      
      // 转换为所需格式并添加到ZIP
      const dataUrl = canvas.value.toDataURL(mimeType, quality)
      const base64Data = dataUrl.substr(dataUrl.indexOf(',') + 1)
      
      zip.file(`${fileName.value.replace('.gif', '')}_frame_${i + 1}.${ext}`, base64Data, {base64: true})
    }
    
    // 生成ZIP文件
    const zipBlob = await zip.generateAsync({type: 'blob'})
    
    // 下载ZIP文件
    const link = document.createElement('a')
    link.href = URL.createObjectURL(zipBlob)
    link.download = `${fileName.value.replace('.gif', '')}_frames.zip`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    showNotification(t('tools.gif-frame-extractor.messages.allFramesDownloaded'))
  } catch (error) {
    console.error(error)
    showNotification(t('tools.gif-frame-extractor.messages.downloadError'))
  } finally {
    isProcessing.value = false
  }
}

// 获取MIME类型
function getMimeType() {
  switch (settings.value.outputFormat) {
    case 'jpeg': return 'image/jpeg'
    case 'webp': return 'image/webp'
    default: return 'image/png'
  }
}

// 重置提取器
function resetExtractor() {
  gifUrl.value = null
  fileName.value = ''
  frames.value = []
  
  gifInfo.width = 0
  gifInfo.height = 0
  gifInfo.size = 0
  gifInfo.frameCount = 0
  
  settings.value.outputFormat = 'png'
  settings.value.quality = 90
  
  showNotification(t('tools.gif-frame-extractor.messages.resetComplete'))
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B'
  
  const units = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + units[i]
}

// 显示通知
function showNotification(message) {
  notification.value = {
    show: true,
    message,
    fadeOut: false
  }
  
  // 3秒后开始淡出
  setTimeout(() => {
    notification.value.fadeOut = true
    
    // 淡出后隐藏
    setTimeout(() => {
      notification.value.show = false
    }, 300)
  }, 3000)
}

onMounted(() => {
  // 初始化画布
  canvas.value = document.createElement('canvas')
  ctx.value = canvas.value.getContext('2d')
})
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md flex items-center transition-colors duration-200 font-medium;
}

/* 自定义滑块样式 */
input[type=range]::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 rounded-full bg-primary border-none cursor-pointer;
}

input[type=range]::-moz-range-thumb {
  @apply w-4 h-4 rounded-full bg-primary border-none cursor-pointer;
}
</style> 