<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-color-extractor.input.selectImage') }}
          <input type="file" accept="image/*" @change="loadImage" class="hidden" />
        </label>
        
        <button 
          @click="resetExtractor" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.image-color-extractor.actions.reset') }}
        </button>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="extractColors" 
          :disabled="!hasImage || isProcessing"
          class="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          {{ isProcessing ? $t('tools.image-color-extractor.actions.extracting') : $t('tools.image-color-extractor.actions.extract') }}
        </button>
        
        <button 
          @click="copyPalette" 
          :disabled="!colors.palette.length"
          class="btn bg-green-600 hover:bg-green-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {{ $t('tools.image-color-extractor.actions.copyPalette') }}
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
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-color-extractor.options.extractSettings') }}</h3>
          
          <!-- 调色板大小设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.image-color-extractor.options.paletteSize') }}: {{ settings.paletteSize }}
            </label>
            <input
              v-model.number="settings.paletteSize"
              type="range"
              min="3"
              max="20"
              step="1"
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              :disabled="!hasImage || isProcessing"
            />
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>{{ $t('tools.image-color-extractor.options.paletteMin') }}</span>
              <span>{{ $t('tools.image-color-extractor.options.paletteMax') }}</span>
            </div>
          </div>
          
          <!-- 颜色格式设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-color-extractor.options.colorFormat') }}</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                @click="settings.colorFormat = 'hex'"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.colorFormat === 'hex' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                HEX
              </button>
              <button
                @click="settings.colorFormat = 'rgb'"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.colorFormat === 'rgb' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                RGB
              </button>
              <button
                @click="settings.colorFormat = 'hsl'"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.colorFormat === 'hsl' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                HSL
              </button>
            </div>
          </div>
          
          <!-- 允许提取相似颜色 -->
          <div class="mb-4">
            <label class="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <input 
                type="checkbox" 
                v-model="settings.allowSimilar" 
                class="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                :disabled="!hasImage || isProcessing"
              >
              <span class="ml-2">{{ $t('tools.image-color-extractor.options.similiarityToggle') }}</span>
            </label>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {{ $t('tools.image-color-extractor.options.colorSimilarity') }}
            </p>
          </div>
          
          <!-- 排序方式 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-color-extractor.options.sortBy') }}</label>
            <select
              v-model="settings.sortBy"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              :disabled="!hasImage || isProcessing"
            >
              <option value="popularity">{{ $t('tools.image-color-extractor.options.sortByPopularity') }}</option>
              <option value="hue">{{ $t('tools.image-color-extractor.options.sortByHue') }}</option>
              <option value="luminance">{{ $t('tools.image-color-extractor.options.sortByLuminance') }}</option>
              <option value="saturation">{{ $t('tools.image-color-extractor.options.sortBySaturation') }}</option>
            </select>
          </div>
        </div>
        
        <!-- 中间区域：图片预览 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <h3 class="text-lg font-medium p-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">{{ $t('tools.image-color-extractor.display.originalImage') }}</h3>
          <div class="p-4 flex justify-center items-center min-h-[300px]">
            <img 
              v-if="imageUrl" 
              :src="imageUrl" 
              class="max-w-full max-h-[400px] object-contain" 
              :alt="$t('tools.image-color-extractor.display.originalImage')"
            />
            <div v-else class="text-center text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>{{ $t('tools.image-color-extractor.messages.noImageSelected') }}</p>
            </div>
          </div>
        </div>
        
        <!-- 右侧：颜色提取结果 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <h3 class="text-lg font-medium p-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">{{ $t('tools.image-color-extractor.results.colorPalette') }}</h3>
          <div class="p-4">
            <!-- 主色 -->
            <div v-if="colors.dominant" class="mb-6">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-color-extractor.results.mainColor') }}</h4>
              <div class="flex items-center space-x-2">
                <div 
                  class="w-12 h-12 rounded-md shadow-sm border border-gray-200 dark:border-gray-700"
                  :style="{ backgroundColor: colors.dominant.hex }"
                ></div>
                <div>
                  <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {{ formatColor(colors.dominant) }}
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    {{ $t('tools.image-color-extractor.results.percentage', { value: Math.round(colors.dominant.percentage * 100) }) }}
                  </div>
                </div>
                <button 
                  @click="copyColor(formatColor(colors.dominant))"
                  class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- 调色板 -->
            <div v-if="colors.palette.length">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.image-color-extractor.display.colorPalette') }}</h4>
              <div class="grid grid-cols-1 gap-2">
                <div 
                  v-for="(color, index) in colors.palette" 
                  :key="index"
                  class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div 
                    class="w-8 h-8 rounded-md shadow-sm border border-gray-200 dark:border-gray-700"
                    :style="{ backgroundColor: color.hex }"
                  ></div>
                  <div class="flex-grow">
                    <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {{ formatColor(color) }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      {{ $t('tools.image-color-extractor.results.percentage', { value: Math.round(color.percentage * 100) }) }}
                    </div>
                  </div>
                  <button 
                    @click="copyColor(formatColor(color))"
                    class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- 没有结果时的提示 -->
            <div v-if="!colors.dominant && !colors.palette.length && hasImage" class="text-center text-gray-500 dark:text-gray-400 my-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <p>{{ $t('tools.image-color-extractor.display.clickExtract') }}</p>
            </div>
            
            <!-- 没有图片时的提示 -->
            <div v-if="!hasImage" class="text-center text-gray-500 dark:text-gray-400 my-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>{{ $t('tools.image-color-extractor.display.uploadFirst') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 颜色预览 -->
      <div v-if="colors.palette.length" class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-color-extractor.results.palettePreview') }}</h3>
        <div class="flex overflow-x-auto pb-2">
          <div 
            v-for="(color, index) in colors.palette" 
            :key="index"
            class="flex-shrink-0 w-16 h-16 rounded-md mr-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            :style="{ backgroundColor: color.hex }"
            @click="copyColor(formatColor(color))"
            :title="$t('tools.image-color-extractor.results.clickToCopy', { color: formatColor(color) })"
          ></div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 在底部添加文章组件 -->
  <ImageColorExtractorArticle />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ImageColorExtractorArticle from './ImageColorExtractorArticle.vue'

const { t } = useI18n()

// 图片数据
const imageUrl = ref(null)
const fileName = ref('')
const canvas = ref(null)
const ctx = ref(null)
const isProcessing = ref(false)
const hasImage = computed(() => !!imageUrl.value)

// 设置
const settings = reactive({
  paletteSize: 8,
  colorFormat: 'hex', // hex, rgb, hsl
  allowSimilar: false,
  sortBy: 'popularity' // popularity, hue, luminance, saturation
})

// 颜色结果
const colors = reactive({
  dominant: null,
  palette: []
})

// 通知
const notification = ref({
  show: false,
  message: '',
  fadeOut: false
})

// 加载图片
async function loadImage(event) {
  const file = event.target.files[0]
  if (!file) return
  
  try {
    fileName.value = file.name
    imageUrl.value = URL.createObjectURL(file)
    
    // 清空之前的结果
    colors.dominant = null
    colors.palette = []
    
    // 提示用户
    showNotification(t('tools.image-color-extractor.messages.imageLoaded'))
  } catch (error) {
    console.error(error)
    showNotification(t('tools.image-color-extractor.messages.extractionFailed', { error: error.message }))
  }
}

// 提取颜色
async function extractColors() {
  if (!imageUrl.value) return
  
  isProcessing.value = true
  showNotification(t('tools.image-color-extractor.messages.processingImage'))
  
  try {
    // 创建Image对象
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    
    img.onload = () => {
      // 创建canvas
      if (!canvas.value) {
        canvas.value = document.createElement('canvas')
        ctx.value = canvas.value.getContext('2d')
      }
      
      // 设置canvas大小
      const maxSize = 500 // 限制处理大小以提高性能
      let width = img.width
      let height = img.height
      
      if (width > maxSize || height > maxSize) {
        const ratio = width / height
        if (width > height) {
          width = maxSize
          height = width / ratio
        } else {
          height = maxSize
          width = height * ratio
        }
      }
      
      canvas.value.width = width
      canvas.value.height = height
      
      // 绘制图像
      ctx.value.drawImage(img, 0, 0, width, height)
      
      // 获取像素数据
      const imageData = ctx.value.getImageData(0, 0, width, height)
      const pixels = imageData.data
      
      // 处理像素数据
      const colorMap = new Map()
      const totalPixels = width * height
      
      // 逐像素分析
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i]
        const g = pixels[i + 1]
        const b = pixels[i + 2]
        const a = pixels[i + 3]
        
        // 忽略完全透明的像素
        if (a === 0) continue
        
        // 忽略接近白色和黑色的像素(可选)
        // if ((r > 250 && g > 250 && b > 250) || (r < 5 && g < 5 && b < 5)) continue
        
        const hex = rgbToHex(r, g, b)
        const rgb = { r, g, b }
        const hsl = rgbToHsl(r, g, b)
        
        // 如果不允许相似颜色，则合并相似的颜色
        if (!settings.allowSimilar) {
          let found = false
          for (const [existingHex, colorInfo] of colorMap.entries()) {
            if (areColorsSimilar(rgb, hexToRgb(existingHex))) {
              colorInfo.count++
              found = true
              break
            }
          }
          
          if (found) continue
        }
        
        if (colorMap.has(hex)) {
          colorMap.get(hex).count++
        } else {
          colorMap.set(hex, { hex, rgb, hsl, count: 1 })
        }
      }
      
      // 转换为数组并计算百分比
      let colorArray = Array.from(colorMap.values()).map(color => {
        return {
          ...color,
          percentage: color.count / totalPixels
        }
      })
      
      // 按出现频率排序
      colorArray.sort((a, b) => b.count - a.count)
      
      // 设置主色
      if (colorArray.length > 0) {
        colors.dominant = colorArray[0]
      }
      
      // 根据排序方式重新排序调色板
      if (settings.sortBy !== 'popularity') {
        colorArray = colorArray.slice(0, settings.paletteSize).sort((a, b) => {
          switch (settings.sortBy) {
            case 'hue':
              return a.hsl.h - b.hsl.h
            case 'luminance':
              return b.hsl.l - a.hsl.l
            case 'saturation':
              return b.hsl.s - a.hsl.s
            default:
              return 0
          }
        })
      } else {
        colorArray = colorArray.slice(0, settings.paletteSize)
      }
      
      // 设置调色板
      colors.palette = colorArray
      
      isProcessing.value = false
      showNotification(t('tools.image-color-extractor.messages.extractionComplete'))
    }
    
    img.onerror = () => {
      isProcessing.value = false
      showNotification(t('tools.image-color-extractor.messages.extractionFailed', { error: '处理图片时出错' }))
    }
    
    img.src = imageUrl.value
  } catch (error) {
    console.error(error)
    showNotification(t('tools.image-color-extractor.messages.extractionFailed', { error: error.message }))
    isProcessing.value = false
  }
}

// RGB转十六进制
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

// 十六进制转RGB
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
  
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

// RGB转HSL
function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2
  
  if (max === min) {
    h = s = 0 // 灰色
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    
    h /= 6
  }
  
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

// 比较颜色是否相似
function areColorsSimilar(rgb1, rgb2, threshold = 25) {
  const dr = Math.abs(rgb1.r - rgb2.r)
  const dg = Math.abs(rgb1.g - rgb2.g)
  const db = Math.abs(rgb1.b - rgb2.b)
  
  return dr + dg + db < threshold
}

// 格式化颜色（根据设置）
function formatColor(color) {
  if (!color) return ''
  
  switch (settings.colorFormat) {
    case 'hex':
      return color.hex
    case 'rgb':
      return `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
    case 'hsl':
      return `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`
    default:
      return color.hex
  }
}

// 复制颜色
function copyColor(colorStr) {
  navigator.clipboard.writeText(colorStr)
    .then(() => {
      showNotification(t('tools.image-color-extractor.messages.copiedColor', { color: colorStr }))
    })
    .catch(err => {
      console.error('复制失败: ', err)
      showNotification(t('tools.image-color-extractor.messages.copyFailed'))
    })
}

// 复制所有调色板颜色
function copyPalette() {
  if (!colors.palette.length) return
  
  const colorTexts = colors.palette.map(color => formatColor(color))
  navigator.clipboard.writeText(colorTexts.join('\n'))
    .then(() => {
      showNotification(t('tools.image-color-extractor.messages.copiedAll'))
    })
    .catch(err => {
      console.error(err)
      showNotification(t('tools.image-color-extractor.messages.copyFailed'))
    })
}

// 重置工具
function resetExtractor() {
  imageUrl.value = null
  fileName.value = ''
  colors.dominant = null
  colors.palette = []
  
  // 重置设置
  settings.paletteSize = 8
  settings.colorFormat = 'hex'
  settings.allowSimilar = false
  settings.sortBy = 'popularity'
  
  showNotification(t('tools.image-color-extractor.messages.resetDone'))
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

/* 自定义滑块样式 */
input[type=range]::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 rounded-full bg-primary border-none cursor-pointer;
}

input[type=range]::-moz-range-thumb {
  @apply w-4 h-4 rounded-full bg-primary border-none cursor-pointer;
}
</style> 