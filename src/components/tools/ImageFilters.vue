<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-filters.upload.title') }}
          <input type="file" accept="image/*" @change="loadImage" class="hidden" />
        </label>
        
        <button 
          @click="resetFilters" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.image-filters.actions.reset') }}
        </button>
      </div>
      
      <button 
        @click="downloadImage" 
        :disabled="!hasImage"
        class="btn bg-green-600 hover:bg-green-700 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {{ $t('tools.image-filters.actions.download') }}
      </button>
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- 左侧滤镜控制区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4" :class="{'opacity-50': !hasImage}">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-filters.filters.title') }}</h3>
          
          <div class="space-y-6">
            <!-- 预设滤镜快捷选择 -->
            <div>
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-filters.presets.title') }}</h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button 
                  v-for="preset in presetFilters" 
                  :key="preset.name"
                  @click="applyPresetFilter(preset.values)"
                  class="px-3 py-2 rounded-md text-xs font-medium flex flex-col items-center"
                  :class="[
                    activePreset === preset.name 
                      ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 border-primary' 
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                  ]"
                  :disabled="!hasImage"
                >
                  <span>{{ preset.name }}</span>
                </button>
              </div>
            </div>
            
            <!-- 滤镜控制滑块 -->
            <div v-for="filter in filters" :key="filter.name" class="space-y-2">
              <div class="flex justify-between items-center">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {{ filter.label }}
                </label>
                <span class="text-xs text-gray-500 dark:text-gray-400">
                  {{ formatFilterValue(filter) }}
                </span>
              </div>
              <input 
                type="range"
                v-model="filter.value"
                :min="filter.min"
                :max="filter.max"
                :step="filter.step"
                @input="applyFilters"
                class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                :disabled="!hasImage"
              />
            </div>
          </div>
        </div>
        
        <!-- 中间原图区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-filters.editor.original') }}</h3>
          
          <div class="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded overflow-hidden">
            <div v-if="!hasImage" class="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-gray-500 dark:text-gray-400">
                {{ $t('tools.image-filters.upload.dropzone') }}
              </p>
            </div>
            <img 
              v-if="originalImageUrl" 
              :src="originalImageUrl" 
              :alt="$t('tools.image-filters.editor.original')" 
              class="max-w-full max-h-full object-contain"
              ref="originalImage"
            />
          </div>
          
          <div v-if="imageInfo" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
            {{ $t('tools.image-filters.output.width') }}: {{ imageInfo.width }} × {{ imageInfo.height }} | 
            {{ $t('tools.image-filters.output.quality') }}: {{ formatFileSize(imageInfo.size) }}
          </div>
        </div>
        
        <!-- 右侧效果预览区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-filters.editor.filtered') }}</h3>
          
          <div class="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded overflow-hidden">
            <div v-if="!hasImage" class="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <p class="text-gray-500 dark:text-gray-400">
                {{ $t('tools.image-filters.messages.filterApplied') }}
              </p>
            </div>
            <div v-if="hasImage" class="relative w-full h-full flex items-center justify-center">
              <img 
                :src="originalImageUrl" 
                :alt="$t('tools.image-filters.editor.filtered')" 
                class="max-w-full max-h-full object-contain filtered-image"
                :style="filterStyle"
                ref="filteredImage"
              />
            </div>
          </div>
          
          <div v-if="hasImage" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
            {{ $t('tools.image-filters.presets.title') }}: {{ activePreset || $t('tools.image-filters.presets.custom') }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <ImageFiltersArticle />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import ImageFiltersArticle from './ImageFiltersArticle.vue'

const { t } = useI18n()

// 状态变量
const originalImageUrl = ref(null)
const imageInfo = ref(null)
const hasImage = computed(() => !!originalImageUrl.value)
const activePreset = ref(null)

// 滤镜控制
const filters = ref([
  { name: 'grayscale', label: t('tools.image-filters.filters.grayscale'), value: 0, min: 0, max: 100, step: 1, unit: '%' },
  { name: 'brightness', label: t('tools.image-filters.filters.brightness'), value: 100, min: 0, max: 200, step: 1, unit: '%' },
  { name: 'contrast', label: t('tools.image-filters.filters.contrast'), value: 100, min: 0, max: 200, step: 1, unit: '%' },
  { name: 'saturate', label: t('tools.image-filters.filters.saturation'), value: 100, min: 0, max: 200, step: 1, unit: '%' },
  { name: 'hue-rotate', label: t('tools.image-filters.filters.hue'), value: 0, min: 0, max: 360, step: 1, unit: 'deg' },
  { name: 'invert', label: t('tools.image-filters.filters.color'), value: 0, min: 0, max: 100, step: 1, unit: '%' },
  { name: 'sepia', label: t('tools.image-filters.filters.sepia'), value: 0, min: 0, max: 100, step: 1, unit: '%' },
  { name: 'blur', label: t('tools.image-filters.filters.blur'), value: 0, min: 0, max: 10, step: 0.1, unit: 'px' }
])

// 预设滤镜
const presetFilters = [
  { 
    name: t('tools.image-filters.presets.normal'), 
    values: { grayscale: 0, brightness: 100, contrast: 100, saturate: 100, 'hue-rotate': 0, invert: 0, sepia: 0, blur: 0 } 
  },
  { 
    name: t('tools.image-filters.presets.blackAndWhite'), 
    values: { grayscale: 100, brightness: 100, contrast: 100, saturate: 100, 'hue-rotate': 0, invert: 0, sepia: 0, blur: 0 } 
  },
  { 
    name: t('tools.image-filters.presets.vintage'), 
    values: { grayscale: 0, brightness: 100, contrast: 110, saturate: 80, 'hue-rotate': 0, invert: 0, sepia: 50, blur: 0 } 
  },
  { 
    name: t('tools.image-filters.presets.invert'), 
    values: { grayscale: 0, brightness: 100, contrast: 100, saturate: 100, 'hue-rotate': 0, invert: 100, sepia: 0, blur: 0 } 
  },
  { 
    name: t('tools.image-filters.presets.highContrast'), 
    values: { grayscale: 0, brightness: 90, contrast: 150, saturate: 110, 'hue-rotate': 0, invert: 0, sepia: 0, blur: 0 } 
  },
  { 
    name: t('tools.image-filters.presets.matte'), 
    values: { grayscale: 0, brightness: 105, contrast: 90, saturate: 100, 'hue-rotate': 0, invert: 0, sepia: 0, blur: 0 } 
  }
]

// 引用DOM元素
const originalImage = ref(null)
const filteredImage = ref(null)

// 计算CSS滤镜样式
const filterStyle = computed(() => {
  let style = ''
  filters.value.forEach(filter => {
    style += `${filter.name}(${filter.value}${filter.unit}) `
  })
  return { filter: style }
})

// 加载图片
const loadImage = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  // 重置所有滤镜
  resetFilters()
  
  const reader = new FileReader()
  reader.onload = (e) => {
    originalImageUrl.value = e.target.result
    
    // 获取图片信息
    const img = new Image()
    img.onload = () => {
      imageInfo.value = {
        width: img.width,
        height: img.height,
        size: file.size
      }
    }
    img.src = e.target.result
  }
  reader.readAsDataURL(file)
}

// 应用预设滤镜
const applyPresetFilter = (presetValues) => {
  // 找出预设名称
  const preset = presetFilters.find(p => 
    JSON.stringify(p.values) === JSON.stringify(presetValues)
  )
  activePreset.value = preset ? preset.name : null
  
  // 应用滤镜值
  filters.value.forEach(filter => {
    filter.value = presetValues[filter.name]
  })
}

// 应用滤镜
const applyFilters = () => {
  // 检查是否匹配任何预设
  const currentValues = {}
  filters.value.forEach(filter => {
    currentValues[filter.name] = filter.value
  })
  
  // 查找是否和某个预设匹配
  const matchedPreset = presetFilters.find(preset => {
    return Object.keys(preset.values).every(key => {
      return preset.values[key] === currentValues[key]
    })
  })
  
  activePreset.value = matchedPreset ? matchedPreset.name : null
}

// 重置滤镜
const resetFilters = () => {
  // 应用"正常"预设
  applyPresetFilter(presetFilters[0].values)
}

// 下载图片
const downloadImage = () => {
  if (!hasImage.value) return
  
  // 创建Canvas元素
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  // 设置Canvas尺寸为图片原始尺寸
  canvas.width = originalImage.value.naturalWidth
  canvas.height = originalImage.value.naturalHeight
  
  // 应用滤镜
  ctx.filter = filterStyle.value.filter
  
  // 绘制图片
  ctx.drawImage(originalImage.value, 0, 0)
  
  // 导出图片
  const link = document.createElement('a')
  link.download = `filtered-image-${Date.now()}.png`
  link.href = canvas.toDataURL('image/png')
  link.click()
}

// 格式化滤镜值显示
const formatFilterValue = (filter) => {
  return `${filter.value}${filter.unit}`
}

// 格式化文件大小
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script>

<style scoped>
.btn {
  @apply px-3 py-1.5 rounded text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200;
}

/* 自定义滑块样式 */
input[type="range"] {
  @apply h-2 bg-gray-200 dark:bg-gray-700 rounded-lg accent-primary;
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  @apply w-4 h-4 bg-primary rounded-full cursor-pointer;
  -webkit-appearance: none;
}

input[type="range"]::-moz-range-thumb {
  @apply w-4 h-4 bg-primary border-none rounded-full cursor-pointer;
}

input[type="range"]:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.filtered-image {
  transition: filter 0.3s ease;
}
</style> 