<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-batch-resizer.input.selectImages') }}
          <input type="file" accept="image/*" @change="loadImages" class="hidden" multiple />
        </label>
        
        <button 
          @click="resetAll" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasImages"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.image-batch-resizer.actions.reset') }}
        </button>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="processAllImages" 
          :disabled="!hasImages || isProcessing"
          class="btn bg-green-600 hover:bg-green-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ isProcessing ? $t('tools.image-batch-resizer.actions.processing') : $t('tools.image-batch-resizer.options.applyToAllImages') }}
        </button>
        
        <button 
          @click="downloadAll" 
          :disabled="!hasProcessedImages"
          class="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.image-batch-resizer.output.downloadAll') }}
        </button>
      </div>
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <!-- 左侧控制面板 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4" :class="{'opacity-50': !hasImages}">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-batch-resizer.options.settingsTitle') }}</h3>
          
          <!-- 调整尺寸方式 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-batch-resizer.options.resizeMethod') }}</label>
            <div class="flex space-x-2">
              <button
                @click="resizeMethod = 'pixel'"
                class="px-3 py-1.5 rounded text-sm"
                :class="resizeMethod === 'pixel' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
                :disabled="!hasImages"
              >
                {{ $t('tools.image-batch-resizer.options.pixelMode') }}
              </button>
              <button
                @click="resizeMethod = 'percentage'"
                class="px-3 py-1.5 rounded text-sm"
                :class="resizeMethod === 'percentage' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
                :disabled="!hasImages"
              >
                {{ $t('tools.image-batch-resizer.options.percentageMode') }}
              </button>
              <button
                @click="resizeMethod = 'maxdimension'"
                class="px-3 py-1.5 rounded text-sm"
                :class="resizeMethod === 'maxdimension' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
                :disabled="!hasImages"
              >
                {{ $t('tools.image-batch-resizer.options.maxDimensionMode') }}
              </button>
            </div>
          </div>
          
          <!-- 宽度设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-batch-resizer.options.width') }}</label>
            <div class="flex items-center">
              <input
                type="number"
                v-model="resizeOptions.width"
                :placeholder="resizeMethod === 'percentage' ? '50' : '800'"
                min="1"
                :max="resizeMethod === 'percentage' ? 100 : 10000"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                :disabled="!hasImages"
              />
              <span v-if="resizeMethod === 'percentage'" class="ml-2 text-gray-500 dark:text-gray-400">%</span>
              <span v-else class="ml-2 text-gray-500 dark:text-gray-400">px</span>
            </div>
          </div>
          
          <!-- 高度设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-batch-resizer.options.height') }}</label>
            <div class="flex items-center">
              <input
                type="number"
                v-model="resizeOptions.height"
                :placeholder="resizeMethod === 'percentage' ? '50' : '600'"
                min="1"
                :max="resizeMethod === 'percentage' ? 100 : 10000"
                :disabled="maintainAspectRatio || !hasImages"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <span v-if="resizeMethod === 'percentage'" class="ml-2 text-gray-500 dark:text-gray-400">%</span>
              <span v-else class="ml-2 text-gray-500 dark:text-gray-400">px</span>
            </div>
          </div>
          
          <!-- 保持纵横比 -->
          <div class="mb-4">
            <label class="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                v-model="maintainAspectRatio"
                class="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                :disabled="!hasImages"
              />
              {{ $t('tools.image-batch-resizer.options.maintainAspectRatio') }}
            </label>
          </div>
          
          <!-- 输出格式 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-batch-resizer.options.outputFormat') }}</label>
            <select
              v-model="outputFormat"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              :disabled="!hasImages"
            >
              <option value="image/jpeg">JPEG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WebP</option>
            </select>
          </div>
          
          <!-- 图像质量 (仅用于JPEG/WebP) -->
          <div class="mb-4" v-if="outputFormat !== 'image/png'">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              质量: {{ outputQuality }}%
            </label>
            <input
              type="range"
              v-model="outputQuality"
              min="1"
              max="100"
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              :disabled="!hasImages"
            />
          </div>
          
          <!-- Pica 选项 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-batch-resizer.options.quality') }}</label>
            <select
              v-model="picaOptions.quality"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              :disabled="!hasImages"
            >
              <option value="0">{{ $t('tools.image-batch-resizer.qualityOptions.fast') }}</option>
              <option value="1">{{ $t('tools.image-batch-resizer.qualityOptions.medium') }}</option>
              <option value="2">{{ $t('tools.image-batch-resizer.qualityOptions.high') }}</option>
              <option value="3">{{ $t('tools.image-batch-resizer.qualityOptions.best') }}</option>
            </select>
          </div>
        </div>
        
        <!-- 右侧图片预览区域 -->
        <div class="col-span-1 lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div v-if="!hasImages" class="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="text-gray-500 dark:text-gray-400 mb-2">{{ $t('tools.image-batch-resizer.preview.selectImage') }}</p>
            <p class="text-gray-400 dark:text-gray-500 text-sm text-center">{{ $t('tools.image-batch-resizer.preview.batchSupport') }}</p>
          </div>
          
          <div v-else>
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">
                {{ $t('tools.image-batch-resizer.preview.title', { count: imageList.length }) }}
              </h3>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ hasProcessedImages ? $t('tools.image-batch-resizer.messages.processingComplete') : $t('tools.image-batch-resizer.messages.waitingForProcess') }}
              </div>
            </div>
            
            <!-- 图片列表 -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="(image, index) in imageList" :key="index" class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div class="relative aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-900">
                  <!-- 原始图片预览 -->
                  <img 
                    v-if="!image.processedDataUrl"
                    :src="image.dataUrl" 
                    :alt="image.file.name"
                    class="object-contain w-full h-full"
                  />
                  
                  <!-- 处理后图片预览 -->
                  <img 
                    v-else
                    :src="image.processedDataUrl" 
                    :alt="image.file.name"
                    class="object-contain w-full h-full"
                  />
                  
                  <!-- 处理状态指示器 -->
                  <div v-if="image.isProcessing" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                  </div>
                </div>
                
                <div class="p-2 text-sm">
                  <div class="truncate text-gray-800 dark:text-gray-200">{{ image.file.name }}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                    <span>{{ formatFileSize(image.file.size) }}</span>
                    <span v-if="image.processedDataUrl">
                      {{ image.originalWidth }}x{{ image.originalHeight }} → 
                      {{ image.processedWidth }}x{{ image.processedHeight }}
                    </span>
                    <span v-else>
                      {{ image.originalWidth }}x{{ image.originalHeight }}
                    </span>
                  </div>
                </div>
                
                <div class="flex border-t border-gray-200 dark:border-gray-700">
                  <button 
                    @click="processImage(image, index)"
                    class="flex-1 py-1.5 text-xs text-center hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400"
                    :disabled="image.isProcessing"
                  >
                    {{ image.processedDataUrl ? '重新处理' : '处理' }}
                  </button>
                  
                  <button 
                    v-if="image.processedDataUrl"
                    @click="downloadImage(image)"
                    class="flex-1 py-1.5 text-xs text-center border-l border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-green-600 dark:text-green-400"
                  >
                  {{ $t('tools.image-batch-resizer.preview.download') }}
                  </button>
                  
                  <button 
                    @click="removeImage(index)"
                    class="flex-1 py-1.5 text-xs text-center border-l border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400"
                    :disabled="image.isProcessing"
                  >
                  {{ $t('tools.image-batch-resizer.preview.delete') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 通知提示 -->
    <div 
      v-if="notification.show" 
      class="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-md shadow-lg transition-opacity duration-300"
      :class="{'opacity-0': notification.fadeOut, 'opacity-100': !notification.fadeOut}"
    >
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import pica from 'pica'
import JSZip from 'jszip'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 创建pica实例
const picaInstance = pica()

// 状态变量
const imageList = ref([])
const resizeMethod = ref('pixel') // 'pixel', 'percentage', 'maxdimension'
const resizeOptions = ref({
  width: null,
  height: null
})
const maintainAspectRatio = ref(true)
const outputFormat = ref('image/jpeg')
const outputQuality = ref(90)
const picaOptions = ref({
  quality: 2, // 0-3, 越高质量越好但越慢
})
const isProcessing = ref(false)
const notification = ref({ show: false, message: '', fadeOut: false })

// 计算属性
const hasImages = computed(() => imageList.value.length > 0)
const hasProcessedImages = computed(() => {
  return imageList.value.some(img => img.processedDataUrl)
})

// 加载图片
async function loadImages(event) {
  const files = event.target.files
  if (!files || files.length === 0) return
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (!file.type.startsWith('image/')) continue
    
    const reader = new FileReader()
    
    reader.onload = async (e) => {
      const dataUrl = e.target.result
      
      // 获取原始图片尺寸
      const dimensions = await getImageDimensions(dataUrl)
      
      imageList.value.push({
        file,
        dataUrl,
        originalWidth: dimensions.width,
        originalHeight: dimensions.height,
        processedDataUrl: null,
        processedWidth: null,
        processedHeight: null,
        isProcessing: false
      })
    }
    
    reader.readAsDataURL(file)
  }
  
  // 清除input，以便可以选择相同的文件
  event.target.value = null
}

// 获取图片原始尺寸
function getImageDimensions(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      })
    }
    img.src = dataUrl
  })
}

// 处理单个图片
async function processImage(image, index) {
  if (image.isProcessing) return
  
  // 验证输入
  if (
    (resizeMethod.value !== 'maxdimension' && !resizeOptions.value.width) || 
    (resizeMethod.value !== 'maxdimension' && !maintainAspectRatio.value && !resizeOptions.value.height)
  ) {
    showNotification(t('tools.image-batch-resizer.messages.invalidWidthHeight'))
    return
  }
  
  // 标记为处理中
  imageList.value[index].isProcessing = true
  
  try {
    // 创建图片源
    const img = new Image()
    img.src = image.dataUrl
    
    await new Promise(resolve => { img.onload = resolve })
    
    // 根据调整方式计算新尺寸
    let newWidth, newHeight

    if (resizeMethod.value === 'pixel') {
      newWidth = parseInt(resizeOptions.value.width) || img.width
      
      if (maintainAspectRatio.value) {
        const ratio = img.height / img.width
        newHeight = Math.round(newWidth * ratio)
      } else {
        newHeight = parseInt(resizeOptions.value.height) || img.height
      }
    } 
    else if (resizeMethod.value === 'percentage') {
      const widthPercent = (parseInt(resizeOptions.value.width) || 100) / 100
      newWidth = Math.round(img.width * widthPercent)
      
      if (maintainAspectRatio.value) {
        newHeight = Math.round(img.height * widthPercent)
      } else {
        const heightPercent = (parseInt(resizeOptions.value.height) || 100) / 100
        newHeight = Math.round(img.height * heightPercent)
      }
    }
    else if (resizeMethod.value === 'maxdimension') {
      // 最大尺寸模式，保持比例缩放，使最长边不超过指定值
      const maxDimension = parseInt(resizeOptions.value.width) || 1000
      
      if (img.width >= img.height) {
        newWidth = Math.min(maxDimension, img.width)
        newHeight = Math.round((newWidth / img.width) * img.height)
      } else {
        newHeight = Math.min(maxDimension, img.height)
        newWidth = Math.round((newHeight / img.height) * img.width)
      }
    }
    
    // 创建源和目标canvas
    const srcCanvas = document.createElement('canvas')
    srcCanvas.width = img.width
    srcCanvas.height = img.height
    const srcCtx = srcCanvas.getContext('2d')
    srcCtx.drawImage(img, 0, 0)
    
    const destCanvas = document.createElement('canvas')
    destCanvas.width = newWidth
    destCanvas.height = newHeight
    
    // 使用pica调整大小
    await picaInstance.resize(srcCanvas, destCanvas, {
      quality: parseInt(picaOptions.value.quality),
      alpha: true,
      unsharpAmount: 80,
      unsharpRadius: 0.6,
      unsharpThreshold: 2
    })
    
    // 根据所选格式导出
    const processedDataUrl = destCanvas.toDataURL(
      outputFormat.value, 
      outputFormat.value !== 'image/png' ? outputQuality.value / 100 : undefined
    )
    
    // 更新图像列表
    imageList.value[index] = {
      ...image,
      processedDataUrl,
      processedWidth: newWidth,
      processedHeight: newHeight,
      isProcessing: false
    }
    
    showNotification(t('tools.image-batch-resizer.messages.processingComplete'))
  } catch (error) {
    console.error(error)
    showNotification(t('tools.image-batch-resizer.messages.processingError'))
    
    // 移除处理状态
    imageList.value[index].isProcessing = false
  }
}

// 处理所有图片
async function processAllImages() {
  if (isProcessing.value || !hasImages.value) return
  
  isProcessing.value = true
  showNotification(t('tools.image-batch-resizer.messages.processing'))
  
  try {
    for (let i = 0; i < imageList.value.length; i++) {
      const image = imageList.value[i]
      if (!image.isProcessing) {
        await processImage(image, i)
      }
    }
    
    showNotification(t('tools.image-batch-resizer.messages.processingComplete'))
  } catch (error) {
    console.error(t('tools.image-batch-resizer.messages.processingError'), error)
    showNotification(t('tools.image-batch-resizer.messages.processingError'))
  } finally {
    isProcessing.value = false
  }
}

// 下载单个图片
function downloadImage(image) {
  if (!image.processedDataUrl) return
  
  const link = document.createElement('a')
  
  // 获取文件名和扩展名
  const fileName = image.file.name
  const fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'))
  
  // 根据输出格式确定新的扩展名
  let newExtension
  switch (outputFormat.value) {
    case 'image/jpeg':
      newExtension = '.jpg'
      break
    case 'image/png':
      newExtension = '.png'
      break
    case 'image/webp':
      newExtension = '.webp'
      break
    default:
      newExtension = '.jpg'
  }
  
  // 构建新的文件名
  const newFileName = `${fileNameWithoutExt}-resized${newExtension}`
  
  link.download = newFileName
  link.href = image.processedDataUrl
  link.click()
}

// 批量下载所有处理过的图片
async function downloadAll() {
  const processedImages = imageList.value.filter(img => img.processedDataUrl)
  
  if (processedImages.length === 0) {
    showNotification(t('tools.image-batch-resizer.messages.noImagesToDownload'))
    return
  }
  
  if (processedImages.length === 1) {
    // 只有一张图片时直接下载
    downloadImage(processedImages[0])
    return
  }
  
  // 多张图片，使用JSZip创建zip文件
  try {
    const zip = new JSZip()
    const imgFolder = zip.folder('resized-images')
    
    // 添加所有处理过的图片
    for (const image of processedImages) {
      const fileName = image.file.name
      const fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'))
      
      let newExtension
      switch (outputFormat.value) {
        case 'image/jpeg':
          newExtension = '.jpg'
          break
        case 'image/png':
          newExtension = '.png'
          break
        case 'image/webp':
          newExtension = '.webp'
          break
        default:
          newExtension = '.jpg'
      }
      
      const newFileName = `${fileNameWithoutExt}-resized${newExtension}`
      
      // 从DataURL中提取base64数据
      const base64Data = image.processedDataUrl.split(',')[1]
      imgFolder.file(newFileName, base64Data, { base64: true })
    }
    
    // 生成zip文件并下载
    const zipBlob = await zip.generateAsync({ type: 'blob' })
    
    const link = document.createElement('a')
    link.download = `resized-images-${new Date().getTime()}.zip`
    link.href = URL.createObjectURL(zipBlob)
    link.click()
    
    showNotification(t('tools.image-batch-resizer.messages.zipCreated', { count: processedImages.length }))
  } catch (error) {
    console.error(error)
    showNotification(t('tools.image-batch-resizer.messages.zipError'))
  }
}

// 删除图片
function removeImage(index) {
  if (imageList.value[index].isProcessing) return
  imageList.value.splice(index, 1)
}

// 重置所有
function resetAll() {
  imageList.value = []
  resizeOptions.value = {
    width: null,
    height: null
  }
  resizeMethod.value = 'pixel'
  maintainAspectRatio.value = true
  outputFormat.value = 'image/jpeg'
  outputQuality.value = 90
  picaOptions.value = {
    quality: 2
  }
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
  else return (bytes / 1048576).toFixed(1) + ' MB'
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
  // 可以在这里添加初始化代码
})
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md flex items-center transition-colors duration-200 font-medium;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
}

.aspect-h-9 {
  position: relative;
}

.aspect-w-16 > *, .aspect-h-9 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style> 