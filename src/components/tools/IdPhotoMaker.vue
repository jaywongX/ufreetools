<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          选择照片
          <input type="file" accept="image/*" @change="loadImage" class="hidden" />
        </label>
        
        <button 
          @click="resetEditor" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重置
        </button>
      </div>
      
      <button 
        @click="downloadPhoto" 
        :disabled="!resultImageUrl || isProcessing"
        class="btn bg-green-600 hover:bg-green-700 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        下载证件照
      </button>
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
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">证件照设置</h3>
          
          <!-- 照片尺寸选择 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">照片尺寸</label>
            <select
              v-model="settings.photoSize"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              :disabled="!hasImage"
              @change="generatePhoto"
            >
              <option v-for="(size, key) in photoSizes" :key="key" :value="key">
                {{ size.name }} ({{ size.width }}×{{ size.height }}mm)
              </option>
            </select>
          </div>
          
          <!-- 自定义尺寸 -->
          <div v-if="settings.photoSize === 'custom'" class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">宽度 (mm)</label>
              <input
                v-model.number="settings.customWidth"
                type="number"
                min="10"
                max="100"
                step="1"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                :disabled="!hasImage"
                @change="generatePhoto"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">高度 (mm)</label>
              <input
                v-model.number="settings.customHeight"
                type="number"
                min="10"
                max="100"
                step="1"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                :disabled="!hasImage"
                @change="generatePhoto"
              />
            </div>
          </div>
          
          <!-- DPI设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              打印分辨率: {{ settings.dpi }} DPI
            </label>
            <select
              v-model.number="settings.dpi"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              :disabled="!hasImage"
              @change="generatePhoto"
            >
              <option :value="300">300 DPI (标准打印)</option>
              <option :value="600">600 DPI (高质量打印)</option>
              <option :value="72">72 DPI (屏幕显示)</option>
            </select>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              当前像素尺寸: {{ pixelWidth }}×{{ pixelHeight }} px
            </p>
          </div>
          
          <!-- 背景颜色选择 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">背景颜色</label>
            <div class="flex flex-wrap gap-2 mb-2">
              <button
                v-for="color in bgColors"
                :key="color.value"
                class="w-8 h-8 rounded-full border-2 transition-all"
                :style="{ 
                  backgroundColor: color.value, 
                  borderColor: settings.bgColor === color.value ? '#3B82F6' : 'transparent'
                }"
                :title="color.name"
                :disabled="!hasImage"
                @click="settings.bgColor = color.value; generatePhoto()"
              ></button>
            </div>
          </div>
        </div>
        
        <!-- 右侧预览区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">预览</h3>
          
          <div class="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img :src="resultImageUrl" alt="证件照预览" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  // Add any necessary props here
})

const imageUrl = ref(null)
const originalImageData = ref(null)
const resultImageUrl = ref(null)
const isProcessing = ref(false)
const notification = ref({ show: false, message: '', fadeOut: false })

const settings = ref({
  photoSize: 'oneInch',
  bgColor: '#FFFFFF',
  dpi: 300,
  customWidth: 35,
  customHeight: 45,
  bgRemovalMethod: 'chroma',
  chromaColor: '#00FF00',
  tolerance: 40
})

const photoSizes = ref([
  { name: '一寸', width: 25, height: 35 },
  { name: '二寸', width: 35, height: 49 },
  { name: '小一寸', width: 22, height: 32 },
  { name: '护照', width: 33, height: 48 },
  { name: '自定义', width: 0, height: 0 }
])

const bgColors = ref([
  { value: '#FFFFFF', name: '白色' },
  { value: '#0000FF', name: '蓝色' },
  { value: '#FF0000', name: '红色' },
  { value: '#00FF00', name: '绿色' },
  { value: '#FF00FF', name: '紫色' },
  { value: '#000000', name: '黑色' },
  { value: '#FFFF00', name: '黄色' },
  { value: '#00FFFF', name: '青色' }
])

const canvas = ref(null)
const ctx = ref(null)

// Add any necessary methods here

// 下载处理后的照片
function downloadPhoto() {
  if (!resultImageUrl.value) return
  
  try {
    const link = document.createElement('a')
    link.href = resultImageUrl.value
    link.download = `${selectedSize.name}_${new Date().getTime()}.png`
    link.click()
    
    showNotification('证件照已下载')
  } catch (error) {
    console.error('下载失败:', error)
    showNotification('下载失败')
  }
}

// 重置编辑器
function resetEditor() {
  imageUrl.value = null
  originalImageData.value = null
  resultImageUrl.value = null
  isProcessing.value = false
  
  // 重置设置
  settings.photoSize = 'oneInch'
  settings.bgColor = '#FFFFFF'
  settings.dpi = 300
  settings.customWidth = 35
  settings.customHeight = 45
  settings.bgRemovalMethod = 'chroma'
  settings.chromaColor = '#00FF00'
  settings.tolerance = 40
  
  showNotification('已重置')
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
  // 初始化
  canvas.value = document.createElement('canvas')
  ctx.value = canvas.value.getContext('2d')
})
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md flex items-center transition-colors duration-200 font-medium;
}

.color-picker {
  @apply h-10 w-full border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 0;
}

.color-picker::-webkit-color-swatch {
  border: none;
  border-radius: 0.375rem;
}
</style> 