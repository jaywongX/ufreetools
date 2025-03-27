<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-pixelator.actions.selectImage') }}
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
          {{ $t('tools.image-pixelator.actions.reset') }}
        </button>
      </div>
      
      <button 
        @click="downloadImage" 
        :disabled="!processedImageUrl || isProcessing"
        class="btn bg-green-600 hover:bg-green-700 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {{ $t('tools.image-pixelator.actions.downloadImage') }}
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
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-pixelator.settings.title') }}</h3>
          
          <!-- 像素块大小 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.image-pixelator.settings.pixelSize') }}: {{ settings.pixelSize }}px
            </label>
            <input
              v-model.number="settings.pixelSize"
              type="range"
              min="2"
              max="50"
              step="1"
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              :disabled="!hasImage || isProcessing"
              @input="applyPixelate"
            />
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>{{ $t('tools.image-pixelator.settings.small') }}</span>
              <span>{{ $t('tools.image-pixelator.settings.large') }}</span>
            </div>
          </div>
          
          <!-- 像素形状 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-pixelator.settings.pixelShape') }}</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                @click="settings.pixelShape = 'square'; applyPixelate()"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.pixelShape === 'square' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                {{ $t('tools.image-pixelator.settings.shapes.square') }}
              </button>
              <button
                @click="settings.pixelShape = 'circle'; applyPixelate()"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.pixelShape === 'circle' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                {{ $t('tools.image-pixelator.settings.shapes.circle') }}
              </button>
              <button
                @click="settings.pixelShape = 'diamond'; applyPixelate()"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.pixelShape === 'diamond' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                {{ $t('tools.image-pixelator.settings.shapes.diamond') }}
              </button>
            </div>
          </div>
          
          <!-- 色彩设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.image-pixelator.settings.colorReduction') }}: {{ settings.colorSteps }}{{ $t('tools.image-pixelator.settings.colors') }}
            </label>
            <input
              v-model.number="settings.colorSteps"
              type="range"
              min="2"
              max="256"
              step="2"
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              :disabled="!hasImage || isProcessing"
              @input="applyPixelate"
            />
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>{{ $t('tools.image-pixelator.settings.low') }}</span>
              <span>{{ $t('tools.image-pixelator.settings.high') }}</span>
            </div>
          </div>
          
          <!-- 色彩风格 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-pixelator.settings.palette') }}</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                v-for="style in colorStyles"
                :key="style.id"
                @click="settings.colorStyle = style.id; applyPixelate()"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.colorStyle === style.id
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                {{ style.name }}
              </button>
            </div>
          </div>
          
          <!-- 边缘锐化 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.image-pixelator.effects.outline') }}: {{ settings.edgeEnhance }}%
            </label>
            <input
              v-model.number="settings.edgeEnhance"
              type="range"
              min="0"
              max="100"
              step="5"
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              :disabled="!hasImage || isProcessing"
              @input="applyPixelate"
            />
          </div>
          
          <!-- 噪点 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.image-pixelator.effects.noise') }}: {{ settings.noise }}%
            </label>
            <input
              v-model.number="settings.noise"
              type="range"
              min="0"
              max="100"
              step="5"
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              :disabled="!hasImage || isProcessing"
              @input="applyPixelate"
            />
          </div>
        </div>
        
        <!-- 中间原图预览 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-pixelator.output.original') }}</h3>
          
          <div class="w-full aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden flex items-center justify-center">
            <div v-if="!hasImage" class="text-gray-500 dark:text-gray-400 text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>{{ $t('tools.image-pixelator.output.noImage') }}</p>
            </div>
            <img 
              v-else 
              :src="originalImageUrl" 
              :alt="$t('tools.image-pixelator.output.original')" 
              class="max-w-full max-h-full object-contain"
            />
          </div>
          
          <div v-if="hasImage" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <p>{{ $t('tools.image-pixelator.messages.fileSize') }}: {{ imageWidth }} × {{ imageHeight }} {{ $t('tools.image-pixelator.messages.pixels') }}</p>
            <p>{{ $t('tools.image-pixelator.messages.fileName') }}: {{ fileName }}</p>
          </div>
        </div>
        
        <!-- 右侧处理后预览 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
            {{ $t('tools.image-pixelator.output.pixelated') }}
            <span v-if="isProcessing" class="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">{{ $t('tools.image-pixelator.output.processing') }}</span>
          </h3>
          
          <div class="w-full aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden flex items-center justify-center">
            <div v-if="!processedImageUrl" class="text-gray-500 dark:text-gray-400 text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <p>{{ $t('tools.image-pixelator.output.preview') }}</p>
            </div>
            <img 
              v-else 
              :src="processedImageUrl" 
              :alt="$t('tools.image-pixelator.output.pixelated')" 
              class="max-w-full max-h-full object-contain"
              :class="{ 'opacity-50': isProcessing }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 状态变量
const originalImageUrl = ref(null)
const processedImageUrl = ref(null)
const fileName = ref('')
const imageWidth = ref(0)
const imageHeight = ref(0)
const isProcessing = ref(false)

// 是否有图片
const hasImage = computed(() => !!originalImageUrl.value)

// 通知状态
const notification = ref({
  show: false,
  message: '',
  fadeOut: false
})

// 设置参数
const settings = ref({
  pixelSize: 8,
  pixelShape: 'square',
  colorSteps: 32,
  colorStyle: 'normal',
  edgeEnhance: 0,
  noise: 0
})

// 色彩风格预设
const colorStyles = [
  { id: 'normal', name: t('tools.image-pixelator.settings.palettes.normal') },
  { id: 'retro', name: t('tools.image-pixelator.settings.palettes.retro') },
  { id: 'sepia', name: t('tools.image-pixelator.settings.palettes.sepia') },
  { id: 'bright', name: t('tools.image-pixelator.settings.palettes.bright') },
  { id: 'cool', name: t('tools.image-pixelator.settings.palettes.cool') },
  { id: 'warm', name: t('tools.image-pixelator.settings.palettes.warm') },
  { id: 'bw', name: t('tools.image-pixelator.settings.palettes.bw') },
  { id: 'invert', name: t('tools.image-pixelator.settings.palettes.invert') }
]

// Canvas元素
const originalCanvas = ref(null)
const processedCanvas = ref(null)

// 加载图片
function loadImage(event) {
  const file = event.target.files[0]
  if (!file) return
  
  fileName.value = file.name
  
  const reader = new FileReader()
  reader.onload = function(e) {
    const img = new Image()
    img.onload = function() {
      // 记录原始尺寸
      imageWidth.value = img.width
      imageHeight.value = img.height
      
      // 创建原始图像画布
      if (!originalCanvas.value) {
        originalCanvas.value = document.createElement('canvas')
      }
      
      // 设置画布尺寸
      originalCanvas.value.width = img.width
      originalCanvas.value.height = img.height
      
      // 绘制图像到画布
      const ctx = originalCanvas.value.getContext('2d')
      ctx.clearRect(0, 0, originalCanvas.value.width, originalCanvas.value.height)
      ctx.drawImage(img, 0, 0)
      
      // 保存原始图像URL
      originalImageUrl.value = e.target.result
      
      // 应用像素化效果
      applyPixelate()
    }
    img.src = e.target.result
  }
  reader.readAsDataURL(file)
}

// 应用像素化效果
function applyPixelate() {
  if (!hasImage.value) return
  
  isProcessing.value = true
  showNotification(t('tools.image-pixelator.messages.processing'))
  
  setTimeout(() => {
    try {
      // 创建处理后的图像画布
      if (!processedCanvas.value) {
        processedCanvas.value = document.createElement('canvas')
      }
      
      // 设置处理后画布尺寸
      const width = imageWidth.value
      const height = imageHeight.value
      processedCanvas.value.width = width
      processedCanvas.value.height = height
      
      // 获取原始图像数据
      const originalCtx = originalCanvas.value.getContext('2d')
      const imageData = originalCtx.getImageData(0, 0, width, height)
      
      // 创建处理后的画布上下文
      const processedCtx = processedCanvas.value.getContext('2d')
      
      // 根据不同的像素形状应用不同的处理方法
      if (settings.value.pixelShape === 'square') {
        applySquarePixelate(processedCtx, imageData, width, height)
      } else if (settings.value.pixelShape === 'circle') {
        applyCirclePixelate(processedCtx, imageData, width, height)
      } else if (settings.value.pixelShape === 'diamond') {
        applyDiamondPixelate(processedCtx, imageData, width, height)
      }
      
      // 转换为Base64并更新预览
      processedImageUrl.value = processedCanvas.value.toDataURL('image/png')
      isProcessing.value = false
      showNotification(t('tools.image-pixelator.messages.success'))
    } catch (error) {
      console.error(error)
      isProcessing.value = false
      showNotification(t('tools.image-pixelator.messages.error', { error: error.message }))
    }
  }, 100)
}

// 应用方形像素化
function applySquarePixelate(ctx, imageData, width, height) {
  const pixelSize = settings.value.pixelSize
  const colorSteps = settings.value.colorSteps
  
  // 清除画布
  ctx.clearRect(0, 0, width, height)
  
  // 绘制像素化图像
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      // 获取区域平均颜色
      const color = getAverageColor(imageData, x, y, pixelSize, width, height)
      
      // 应用色彩风格
      const processedColor = applyColorStyle(color)
      
      // 应用色彩降低
      const quantizedColor = quantizeColor(processedColor, colorSteps)
      
      // 设置填充颜色
      ctx.fillStyle = `rgba(${quantizedColor.r}, ${quantizedColor.g}, ${quantizedColor.b}, ${quantizedColor.a})`
      
      // 绘制像素块
      ctx.fillRect(x, y, pixelSize, pixelSize)
    }
  }
  
  // 应用边缘锐化
  if (settings.value.edgeEnhance > 0) {
    applyEdgeEnhancement(ctx, width, height)
  }
  
  // 应用噪点
  if (settings.value.noise > 0) {
    applyNoise(ctx, width, height)
  }
}

// 应用圆形像素化
function applyCirclePixelate(ctx, imageData, width, height) {
  const pixelSize = settings.value.pixelSize
  const colorSteps = settings.value.colorSteps
  
  // 清除画布
  ctx.clearRect(0, 0, width, height)
  
  // 绘制像素化图像
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      // 获取区域平均颜色
      const color = getAverageColor(imageData, x, y, pixelSize, width, height)
      
      // 应用色彩风格
      const processedColor = applyColorStyle(color)
      
      // 应用色彩降低
      const quantizedColor = quantizeColor(processedColor, colorSteps)
      
      // 设置填充颜色
      ctx.fillStyle = `rgba(${quantizedColor.r}, ${quantizedColor.g}, ${quantizedColor.b}, ${quantizedColor.a})`
      
      // 绘制圆形像素
      ctx.beginPath()
      ctx.arc(x + pixelSize/2, y + pixelSize/2, pixelSize/2, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  
  // 应用边缘锐化
  if (settings.value.edgeEnhance > 0) {
    applyEdgeEnhancement(ctx, width, height)
  }
  
  // 应用噪点
  if (settings.value.noise > 0) {
    applyNoise(ctx, width, height)
  }
}

// 应用菱形像素化
function applyDiamondPixelate(ctx, imageData, width, height) {
  const pixelSize = settings.value.pixelSize
  const colorSteps = settings.value.colorSteps
  
  // 清除画布
  ctx.clearRect(0, 0, width, height)
  
  // 绘制像素化图像
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      // 获取区域平均颜色
      const color = getAverageColor(imageData, x, y, pixelSize, width, height)
      
      // 应用色彩风格
      const processedColor = applyColorStyle(color)
      
      // 应用色彩降低
      const quantizedColor = quantizeColor(processedColor, colorSteps)
      
      // 设置填充颜色
      ctx.fillStyle = `rgba(${quantizedColor.r}, ${quantizedColor.g}, ${quantizedColor.b}, ${quantizedColor.a})`
      
      // 绘制菱形像素
      const centerX = x + pixelSize/2
      const centerY = y + pixelSize/2
      ctx.beginPath()
      ctx.moveTo(centerX, y)
      ctx.lineTo(x + pixelSize, centerY)
      ctx.lineTo(centerX, y + pixelSize)
      ctx.lineTo(x, centerY)
      ctx.closePath()
      ctx.fill()
    }
  }
  
  // 应用边缘锐化
  if (settings.value.edgeEnhance > 0) {
    applyEdgeEnhancement(ctx, width, height)
  }
  
  // 应用噪点
  if (settings.value.noise > 0) {
    applyNoise(ctx, width, height)
  }
}

// 获取区域平均颜色
function getAverageColor(imageData, startX, startY, size, width, height) {
  let r = 0, g = 0, b = 0, a = 0
  let count = 0
  
  // 限制边界
  const endX = Math.min(startX + size, width)
  const endY = Math.min(startY + size, height)
  
  // 计算区域内所有像素的平均颜色
  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      const idx = (y * width + x) * 4
      r += imageData.data[idx]
      g += imageData.data[idx + 1]
      b += imageData.data[idx + 2]
      a += imageData.data[idx + 3]
      count++
    }
  }
  
  // 返回平均值
  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
    a: Math.round(a / count) / 255  // 转为0-1范围
  }
}

// 应用色彩风格
function applyColorStyle(color) {
  const style = settings.value.colorStyle
  
  // 复制颜色对象
  const result = { ...color }
  
  // 根据不同的风格应用不同的处理
  switch (style) {
    case 'retro':
      // 复古风格：增强红色，降低蓝色
      result.r = Math.min(255, result.r * 1.2)
      result.b = result.b * 0.8
      break
    case 'sepia':
      // 怀旧风格：棕褐色
      result.r = Math.min(255, (result.r * 0.393) + (result.g * 0.769) + (result.b * 0.189))
      result.g = Math.min(255, (result.r * 0.349) + (result.g * 0.686) + (result.b * 0.168))
      result.b = Math.min(255, (result.r * 0.272) + (result.g * 0.534) + (result.b * 0.131))
      break
    case 'bright':
      // 明亮风格：增加亮度
      result.r = Math.min(255, result.r * 1.2)
      result.g = Math.min(255, result.g * 1.2)
      result.b = Math.min(255, result.b * 1.2)
      break
    case 'cool':
      // 冷色调：增强蓝色和绿色
      result.b = Math.min(255, result.b * 1.2)
      result.g = Math.min(255, result.g * 1.1)
      result.r = result.r * 0.9
      break
    case 'warm':
      // 暖色调：增强红色和绿色
      result.r = Math.min(255, result.r * 1.2)
      result.g = Math.min(255, result.g * 1.1)
      result.b = result.b * 0.8
      break
    case 'bw':
      // 黑白：灰度处理
      const gray = 0.299 * result.r + 0.587 * result.g + 0.114 * result.b
      result.r = gray
      result.g = gray
      result.b = gray
      break
    case 'invert':
      // 反色：反转所有颜色
      result.r = 255 - result.r
      result.g = 255 - result.g
      result.b = 255 - result.b
      break
  }
  
  // 确保所有颜色值都是整数
  result.r = Math.round(result.r)
  result.g = Math.round(result.g)
  result.b = Math.round(result.b)
  
  return result
}

// 量化颜色（减少色阶）
function quantizeColor(color, steps) {
  if (steps >= 256) return color
  
  const factor = 255 / (steps - 1)
  
  return {
    r: Math.round(Math.round(color.r / factor) * factor),
    g: Math.round(Math.round(color.g / factor) * factor),
    b: Math.round(Math.round(color.b / factor) * factor),
    a: color.a
  }
}

// 应用边缘锐化
function applyEdgeEnhancement(ctx, width, height) {
  // 获取原始图像数据
  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data
  const intensity = settings.value.edgeEnhance / 100 * 5
  
  // 锐化卷积核
  const kernel = [
    [-1, -1, -1],
    [-1, 9 + intensity, -1],
    [-1, -1, -1]
  ]
  
  // 创建临时副本以避免计算干扰
  const tempData = new Uint8ClampedArray(data)
  
  // 锐化处理（简化版，仅处理完全在边界内的像素）
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4
      
      // 对每个颜色通道应用卷积
      for (let c = 0; c < 3; c++) {
        let sum = 0
        
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const pixel = ((y + ky) * width + (x + kx)) * 4
            sum += tempData[pixel + c] * kernel[ky + 1][kx + 1]
          }
        }
        
        data[idx + c] = Math.max(0, Math.min(255, sum))
      }
    }
  }
  
  // 更新图像
  ctx.putImageData(imageData, 0, 0)
}

// 应用噪点
function applyNoise(ctx, width, height) {
  // 获取图像数据
  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data
  
  // 噪点强度
  const noiseAmount = settings.value.noise / 100 * 50
  
  // 添加噪点
  for (let i = 0; i < data.length; i += 4) {
    if (Math.random() < 0.2) {
      const noise = (Math.random() - 0.5) * noiseAmount
      
      // 应用到RGB通道
      for (let j = 0; j < 3; j++) {
        data[i + j] = Math.max(0, Math.min(255, data[i + j] + noise))
      }
    }
  }
  
  // 更新图像
  ctx.putImageData(imageData, 0, 0)
}

// 下载图片
function downloadImage() {
  if (!processedImageUrl.value) return
  
  try {
    const link = document.createElement('a')
    link.href = processedImageUrl.value
    link.download = `pixelated_${fileName.value}`
    link.click()
    
    showNotification(t('tools.image-pixelator.messages.downloadSuccess'))
  } catch (error) {
    console.error('下载失败:', error)
    showNotification(t('tools.image-pixelator.messages.downloadFailed'))
  }
}

// 重置编辑器
function resetEditor() {
  originalImageUrl.value = null
  processedImageUrl.value = null
  fileName.value = ''
  imageWidth.value = 0
  imageHeight.value = 0
  isProcessing.value = false
  
  // 重置设置
  settings.value = {
    pixelSize: 8,
    pixelShape: 'square',
    colorSteps: 32,
    colorStyle: 'normal',
    edgeEnhance: 0,
    noise: 0
  }
  
  showNotification(t('tools.image-pixelator.messages.resetSuccess'))
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
  // 创建Canvas元素
  originalCanvas.value = document.createElement('canvas')
  processedCanvas.value = document.createElement('canvas')
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

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
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