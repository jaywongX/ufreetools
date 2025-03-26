<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex flex-wrap justify-between gap-2">
      <!-- 左侧操作区 -->
      <div class="flex items-center space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-cropper.actions.newImage') }}
          <input type="file" accept="image/*" @change="loadImage" class="hidden" />
        </label>
        
        <div class="h-8 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>
        
        <button 
          @click="rotate(-90)" 
          class="tool-btn" 
          :disabled="!hasImage"
          :title="$t('tools.image-cropper.editor.rotate') + ' ←'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        
        <button 
          @click="rotate(90)" 
          class="tool-btn" 
          :disabled="!hasImage"
          :title="$t('tools.image-cropper.editor.rotate') + ' →'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        
        <button 
          @click="flipHorizontal" 
          class="tool-btn" 
          :disabled="!hasImage"
          :title="$t('tools.image-cropper.editor.flipHorizontal')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
        
        <button 
          @click="flipVertical" 
          class="tool-btn" 
          :disabled="!hasImage"
          :title="$t('tools.image-cropper.editor.flipVertical')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
        
        <button 
          @click="resetCrop" 
          class="tool-btn" 
          :disabled="!hasImage"
          :title="$t('tools.image-cropper.editor.reset')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      
      <!-- 右侧操作区 -->
      <div class="flex items-center space-x-2">
        <select 
          v-model="aspectRatio" 
          @change="updateAspectRatio" 
          class="form-select h-9 px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          :disabled="!hasImage"
        >
          <option value="free">{{ $t('tools.image-cropper.crop.freeform') }}</option>
          <option value="1:1">{{ $t('tools.image-cropper.crop.square') }}</option>
          <option value="4:3">{{ $t('tools.image-cropper.crop.landscape') }}</option>
          <option value="16:9">{{ $t('tools.image-cropper.crop.widescreen') }}</option>
          <option value="3:4">{{ $t('tools.image-cropper.crop.portrait') }}</option>
          <option value="9:16">9:16</option>
        </select>
        
        <button 
          @click="crop" 
          class="btn bg-green-600 hover:bg-green-700 text-white" 
          :disabled="!hasImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          {{ $t('tools.image-cropper.actions.crop') }}
        </button>
        
        <button 
          @click="downloadImage" 
          class="btn bg-primary hover:bg-primary-dark text-white" 
          :disabled="!croppedImageUrl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.image-cropper.actions.download') }}
        </button>
      </div>
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        <!-- 原图和裁剪区域 -->
        <div class="lg:col-span-2 relative bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col h-full">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-cropper.presets.original') }}</h3>
          
          <div class="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded overflow-hidden" style="min-height: 60vh;">
            <div v-if="!hasImage" class="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.image-cropper.upload.select') }}</p>
            </div>
            <div v-else class="max-h-full max-w-full" style="width: 90%; height: 90%;">
              <img ref="image" :src="imageUrl" class="max-h-full max-w-full hidden" />
            </div>
          </div>
        </div>
        
        <!-- 预览区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col h-full lg:col-span-1">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-cropper.output.preview') }}</h3>
          
          <div class="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded overflow-hidden">
            <div v-if="!croppedImageUrl" class="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.image-cropper.messages.cropSuccess') }}</p>
            </div>
            <img v-else :src="croppedImageUrl" class="max-h-full max-w-full" />
          </div>
          
          <!-- 图片信息 -->
          <div v-if="croppedImageUrl" class="mt-3 text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
            <div class="flex justify-between">
              <span>{{ $t('tools.image-cropper.output.dimensions') }}: {{ imageInfo.width }} × {{ imageInfo.height }} px</span>
              <span>{{ $t('tools.image-cropper.output.quality') }}: {{ formatFileSize(imageInfo.size) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 状态变量
const image = ref(null)
const imageUrl = ref('')
const croppedImageUrl = ref('')
const hasImage = ref(false)
const aspectRatio = ref('free')
const cropper = ref(null)
const imageInfo = ref({ width: 0, height: 0, size: 0 })

// 初始化裁剪器
const initCropper = () => {
  if (!image.value) return
  
  // 销毁之前的裁剪器实例
  if (cropper.value) {
    cropper.value.destroy()
  }
  
  // 创建新的裁剪器实例
  cropper.value = new Cropper(image.value, {
    viewMode: 1,
    dragMode: 'move',
    aspectRatio: aspectRatio.value === 'free' ? NaN : getAspectRatioValue(),
    autoCropArea: 1,
    restore: false,
    guides: true,
    center: true,
    highlight: false,
    cropBoxMovable: true,
    cropBoxResizable: true,
    toggleDragModeOnDblclick: false,
    responsive: true
  })
}

// 加载图片
const loadImage = (event) => {
  const file = event.target.files[0]
  if (!file || !file.type.startsWith('image/')) {
    return
  }
  
  const reader = new FileReader()
  reader.onload = (e) => {
    imageUrl.value = e.target.result
    hasImage.value = true
    croppedImageUrl.value = ''
    
    // 确保DOM更新后初始化裁剪器
    setTimeout(initCropper, 100)
  }
  reader.readAsDataURL(file)
}

// 获取长宽比值
const getAspectRatioValue = () => {
  if (aspectRatio.value === 'free') return NaN
  
  const [width, height] = aspectRatio.value.split(':').map(Number)
  return width / height
}

// 更新长宽比
const updateAspectRatio = () => {
  if (cropper.value) {
    cropper.value.setAspectRatio(getAspectRatioValue())
  }
}

// 旋转
const rotate = (degree) => {
  if (cropper.value) {
    cropper.value.rotate(degree)
  }
}

// 水平翻转
const flipHorizontal = () => {
  if (cropper.value) {
    cropper.value.scaleX(cropper.value.getData().scaleX * -1)
  }
}

// 垂直翻转
const flipVertical = () => {
  if (cropper.value) {
    cropper.value.scaleY(cropper.value.getData().scaleY * -1)
  }
}

// 重置裁剪
const resetCrop = () => {
  if (cropper.value) {
    cropper.value.reset()
  }
}

// 执行裁剪
const crop = () => {
  if (!cropper.value) return
  
  const canvas = cropper.value.getCroppedCanvas({
    imageSmoothingEnabled: true,
    imageSmoothingQuality: 'high'
  })
  
  if (canvas) {
    croppedImageUrl.value = canvas.toDataURL('image/png')
    
    // 获取裁剪后图片信息
    canvas.toBlob((blob) => {
      if (blob) {
        imageInfo.value = {
          width: canvas.width,
          height: canvas.height,
          size: blob.size
        }
      }
    })
  }
}

// 下载图片
const downloadImage = () => {
  if (!croppedImageUrl.value) return
  
  const link = document.createElement('a')
  link.download = `cropped-image-${Date.now()}.png`
  link.href = croppedImageUrl.value
  link.click()
}

// 格式化文件大小
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 组件卸载前清理
onBeforeUnmount(() => {
  if (cropper.value) {
    cropper.value.destroy()
  }
})
</script>

<style scoped>
.btn {
  @apply px-3 py-1.5 rounded text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200;
}

.tool-btn {
  @apply p-2 rounded-md text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed;
}

/* 自定义Cropper.js样式以适配暗色模式 */
:deep(.cropper-view-box) {
  outline: 1px solid #3b82f6;
  outline-color: #3b82f6;
}

:deep(.cropper-line) {
  background-color: #3b82f6;
}

:deep(.cropper-point) {
  background-color: #3b82f6;
}
</style> 