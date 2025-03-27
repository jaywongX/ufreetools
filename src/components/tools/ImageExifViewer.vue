<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-exif-viewer.upload.title') }}
          <input type="file" accept="image/*" @change="loadImage" class="hidden" />
        </label>
        
        <button 
          @click="resetViewer" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.image-exif-viewer.actions.refresh') }}
        </button>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="copyExifData" 
          :disabled="!hasExifData"
          class="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-exif-viewer.actions.copyAll') }}
        </button>
        
        <button 
          @click="exportExifData" 
          :disabled="!hasExifData"
          class="btn bg-green-600 hover:bg-green-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.image-exif-viewer.actions.save') }}
        </button>
      </div>
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- 左侧图片预览 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-exif-viewer.display.title') }}</h3>
          
          <div v-if="!imageUrl" class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center h-64">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.upload.dropzone') }}</p>
          </div>
          
          <div v-else class="relative overflow-hidden rounded-lg">
            <img :src="imageUrl" :alt="fileName" class="w-full h-auto max-h-96 object-contain" />
            
            <div class="mt-2 flex items-center justify-between">
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ fileName }}</span>
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ fileSize }}</span>
            </div>
          </div>
          
          <!-- 地图显示（如果有GPS数据） -->
          <div v-if="hasGpsData" class="mt-4">
            <h4 class="text-md font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.image-exif-viewer.map.title') }}</h4>
            <div class="border rounded-lg overflow-hidden h-48">
              <div class="h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div class="text-center">
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.latitude') }}: {{ gpsCoordinates.latitude.toFixed(6) }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.longitude') }}: {{ gpsCoordinates.longitude.toFixed(6) }}</p>
                  <a 
                    :href="`https://maps.google.com/maps?q=${gpsCoordinates.latitude},${gpsCoordinates.longitude}&z=15`" 
                    target="_blank"
                    class="text-primary hover:underline text-sm inline-block mt-2"
                  >
                    {{ $t('tools.image-exif-viewer.map.show') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右侧EXIF数据显示 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-exif-viewer.display.title') }}</h3>
          
          <div v-if="!hasExifData" class="text-gray-500 dark:text-gray-400 italic text-center p-6">
            <p v-if="!hasImage">{{ $t('tools.image-exif-viewer.display.noExif') }}</p>
            <p v-else>{{ $t('tools.image-exif-viewer.messages.noExif') }}</p>
          </div>
          
          <div v-else class="overflow-auto max-h-[60vh]">
            <!-- 相机信息 -->
            <div v-if="exifData.make || exifData.model" class="mb-4">
              <h4 class="text-md font-medium mb-2 text-gray-800 dark:text-gray-200 pb-1 border-b border-gray-200 dark:border-gray-700">{{ $t('tools.image-exif-viewer.display.camera') }}</h4>
              <div class="grid grid-cols-2 gap-2">
                <div v-if="exifData.make" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.make') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.make }}</p>
                </div>
                <div v-if="exifData.model" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.model') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.model }}</p>
                </div>
                <div v-if="exifData.software" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.software') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.software }}</p>
                </div>
                <div v-if="exifData.lensModel" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.lens') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.lensModel }}</p>
                </div>
              </div>
            </div>
            
            <!-- 拍摄信息 -->
            <div v-if="hasPhotoInfo" class="mb-4">
              <h4 class="text-md font-medium mb-2 text-gray-800 dark:text-gray-200 pb-1 border-b border-gray-200 dark:border-gray-700">{{ $t('tools.image-exif-viewer.display.exposure') }}</h4>
              <div class="grid grid-cols-2 gap-2">
                <div v-if="exifData.exposureTime" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.exposureTime') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ formatExposureTime(exifData.exposureTime) }}</p>
                </div>
                <div v-if="exifData.fNumber" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.aperture') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">f/{{ exifData.fNumber }}</p>
                </div>
                <div v-if="exifData.iso" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.iso') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.iso }}</p>
                </div>
                <div v-if="exifData.focalLength" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.focalLength') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.focalLength }}mm</p>
                </div>
                <div v-if="exifData.flash !== undefined" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.flash') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.flash === 0 ? $t('tools.image-exif-viewer.messages.notUse') : $t('tools.image-exif-viewer.messages.use') }}</p>
                </div>
                <div v-if="exifData.whiteBalance" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.whiteBalance') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ exifData.whiteBalance === 0 ? $t('tools.image-exif-viewer.messages.auto') : $t('tools.image-exif-viewer.messages.manual') }}</p>
                </div>
              </div>
            </div>
            
            <!-- 时间信息 -->
            <div v-if="exifData.dateTimeOriginal" class="mb-4">
              <h4 class="text-md font-medium mb-2 text-gray-800 dark:text-gray-200 pb-1 border-b border-gray-200 dark:border-gray-700">{{ $t('tools.image-exif-viewer.display.dates') }}</h4>
              <div class="py-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.dateOriginal') }}</span>
                <p class="text-gray-900 dark:text-gray-100">{{ formatDate(exifData.dateTimeOriginal) }}</p>
              </div>
            </div>
            
            <!-- 图像信息 -->
            <div class="mb-4">
              <h4 class="text-md font-medium mb-2 text-gray-800 dark:text-gray-200 pb-1 border-b border-gray-200 dark:border-gray-700">{{ $t('tools.image-exif-viewer.display.basicInfo') }}</h4>
              <div class="grid grid-cols-2 gap-2">
                <div v-if="imageInfo.width" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.width') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ imageInfo.width }}px</p>
                </div>
                <div v-if="imageInfo.height" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.height') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ imageInfo.height }}px</p>
                </div>
                <div v-if="exifData.orientation" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.orientation') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ formatOrientation(exifData.orientation) }}</p>
                </div>
                <div v-if="imageInfo.type" class="py-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.image-exif-viewer.exif.fileType') }}</span>
                  <p class="text-gray-900 dark:text-gray-100">{{ imageInfo.type }}</p>
                </div>
              </div>
            </div>
            
            <!-- 所有EXIF数据 -->
            <div class="mb-4">
              <button 
                @click="showAllExif = !showAllExif" 
                class="flex items-center text-primary hover:text-primary-dark"
              >
                <span>{{ showAllExif ? $t('tools.image-exif-viewer.actions.hideAll') : $t('tools.image-exif-viewer.actions.showAll') }}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  :class="{'transform rotate-180': showAllExif}"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-if="showAllExif" class="mt-2 p-2 bg-gray-50 dark:bg-gray-900 rounded">
                <pre class="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto whitespace-pre-wrap">{{ JSON.stringify(exifData, null, 2) }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 通知提示 -->
    <div
      v-if="notification.show"
      class="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg transition-opacity duration-300"
      :class="{'opacity-0': notification.fadeOut}"
    >
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import * as exifr from 'exifr'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 状态变量
const imageUrl = ref(null)
const fileName = ref('')
const fileSize = ref('')
const exifData = ref({})
const imageInfo = ref({})
const showAllExif = ref(false)
const notification = ref({
  show: false,
  message: '',
  fadeOut: false
})

// 计算属性
const hasImage = computed(() => !!imageUrl.value)
const hasExifData = computed(() => exifData.value && Object.keys(exifData.value).length > 0)
const hasPhotoInfo = computed(() => 
  exifData.value.exposureTime || 
  exifData.value.fNumber || 
  exifData.value.iso || 
  exifData.value.focalLength || 
  exifData.value.flash !== undefined
)
const hasGpsData = computed(() => exifData.value.latitude && exifData.value.longitude)
const gpsCoordinates = computed(() => ({
  latitude: exifData.value.latitude || 0,
  longitude: exifData.value.longitude || 0
}))

// 加载图片
async function loadImage(event) {
  const file = event.target.files[0]
  if (!file) return
  
  try {
    // 获取文件基本信息
    fileName.value = file.name
    fileSize.value = formatFileSize(file.size)
    
    // 创建图片预览
    imageUrl.value = URL.createObjectURL(file)
    
    // 获取图片尺寸
    const img = new Image()
    img.onload = () => {
      imageInfo.value = {
        width: img.width,
        height: img.height,
        type: file.type
      }
    }
    img.src = imageUrl.value
    
    // 提取EXIF数据
    try {
      const data = await exifr.parse(file, { 
        tiff: true,
        ifd0: true,
        exif: true,
        gps: true,
        interop: true,
        ifd1: true,
        iptc: true,
        xmp: true,
        mergeOutput: true
      })
      
      if (data) {
        exifData.value = data
        showNotification(t('tools.image-exif-viewer.messages.exifExtracted'))
      } else {
        exifData.value = {}
        showNotification(t('tools.image-exif-viewer.display.noExif'))
      }
    } catch (error) {
      console.error(error)
      exifData.value = {}
      showNotification(t('tools.image-exif-viewer.error.extractFailed'))
    }
  } catch (error) {
    console.error(error)
    showNotification(t('tools.image-exif-viewer.error.loadFailed'))
  }
}

// 复制EXIF数据
function copyExifData() {
  if (!hasExifData.value) return
  
  try {
    const jsonStr = JSON.stringify(exifData.value, null, 2)
    navigator.clipboard.writeText(jsonStr)
    showNotification(t('tools.image-exif-viewer.messages.copied'))
  } catch (error) {
    console.error(error)
    showNotification(t('tools.image-exif-viewer.error.copyFailed'))
  }
}

// 导出EXIF数据为JSON文件
function exportExifData() {
  if (!hasExifData.value) return
  
  try {
    const jsonStr = JSON.stringify(exifData.value, null, 2)
    const blob = new Blob([jsonStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `${fileName.value.replace(/\.[^/.]+$/, '')}_exif.json`
    link.click()
    
    URL.revokeObjectURL(url)
    showNotification(t('tools.image-exif-viewer.messages.saved'))
  } catch (error) {
    console.error(error)
    showNotification(t('tools.image-exif-viewer.error.exportFailed'))
  }
}

// 重置查看器
function resetViewer() {
  imageUrl.value = null
  fileName.value = ''
  fileSize.value = ''
  exifData.value = {}
  imageInfo.value = {}
  showAllExif.value = false
  
  showNotification(t('tools.image-exif-viewer.messages.reset'))
}

// 格式化曝光时间
function formatExposureTime(time) {
  if (!time) return ''
  
  if (time < 1) {
    const denominator = Math.round(1 / time)
    return `1/${denominator}${t('tools.image-exif-viewer.exif.exposureTime')}`
  } else {
    return `${time}${t('tools.image-exif-viewer.exif.exposureTime')}`
  }
}

// 格式化日期
function formatDate(dateString) {
  if (!dateString) return ''
  
  try {
    const date = new Date(dateString)
    return date.toLocaleString()
  } catch {
    return dateString
  }
}

// 格式化方向
function formatOrientation(orientation) {
  const orientations = {
    1: t('tools.image-exif-viewer.orientation.normal'),
    2: t('tools.image-exif-viewer.orientation.horizontalFlip'),
    3: t('tools.image-exif-viewer.orientation.rotate180'),
    4: t('tools.image-exif-viewer.orientation.verticalFlip'),
    5: t('tools.image-exif-viewer.orientation.rotate90VerticalFlip'),
    6: t('tools.image-exif-viewer.orientation.rotate90'),
    7: t('tools.image-exif-viewer.orientation.rotate90HorizontalFlip'),
    8: t('tools.image-exif-viewer.orientation.rotate270')
  }
  
  return orientations[orientation] || orientation
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
</style> 