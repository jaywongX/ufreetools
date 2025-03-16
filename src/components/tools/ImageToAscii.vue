<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <label class="btn bg-primary hover:bg-primary-dark text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          选择图片
          <input type="file" accept="image/*" @change="loadImage" class="hidden" />
        </label>
        
        <button 
          @click="resetCanvas" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!hasImage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重置
        </button>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="generateAscii" 
          :disabled="!hasImage || isProcessing"
          class="btn bg-green-600 hover:bg-green-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ isProcessing ? '处理中...' : '生成ASCII' }}
        </button>
        
        <button 
          @click="copyAscii" 
          :disabled="!asciiResult"
          class="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          复制
        </button>
        
        <button 
          @click="downloadAscii" 
          :disabled="!asciiResult"
          class="btn bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          下载
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
        <!-- 左侧控制面板 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">ASCII设置</h3>
          
          <!-- 字符集选择 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">字符集</label>
            <select
              v-model="settings.charset"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              :disabled="!hasImage"
            >
              <option value="standard">标准 (@#W$9876543210?!abc+;:=-,._ )</option>
              <option value="simple">简单 (@%#*+=-:. )</option>
              <option value="blocks">方块 (█▓▒░ )</option>
              <option value="custom">自定义</option>
            </select>
          </div>
          
          <!-- 自定义字符集 -->
          <div v-if="settings.charset === 'custom'" class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">自定义字符集（从暗到亮）</label>
            <input
              v-model="settings.customCharset"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="输入字符，从暗到亮排序..."
            />
          </div>
          
          <!-- 宽度设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              ASCII宽度: {{ settings.width }}
            </label>
            <input
              v-model.number="settings.width"
              type="range"
              min="20"
              max="200"
              step="5"
              class="w-full"
              :disabled="!hasImage"
            />
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>20</span>
              <span>100</span>
              <span>200</span>
            </div>
          </div>
          
          <!-- 外观设置 -->
          <div class="mb-4">
            <div class="flex items-center">
              <input
                v-model="settings.invert"
                type="checkbox"
                id="invert"
                class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                :disabled="!hasImage"
              />
              <label for="invert" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                反转颜色
              </label>
            </div>
          </div>
          
          <div class="mb-4">
            <div class="flex items-center">
              <input
                v-model="settings.colorOutput"
                type="checkbox"
                id="colorOutput"
                class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                :disabled="!hasImage"
              />
              <label for="colorOutput" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                彩色输出
              </label>
            </div>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              字体大小: {{ settings.fontSize }}px
            </label>
            <input
              v-model.number="settings.fontSize"
              type="range"
              min="6"
              max="16"
              step="1"
              class="w-full"
              :disabled="!hasImage"
            />
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>6px</span>
              <span>12px</span>
              <span>16px</span>
            </div>
          </div>
          
          <!-- 提示信息 -->
          <div v-if="hasImage" class="text-sm text-gray-500 dark:text-gray-400 mt-4">
            <p>调整设置后点击"生成ASCII"按钮来查看效果</p>
          </div>
        </div>
        
        <!-- 中间图片预览 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">原始图片</h3>
          
          <div v-if="!imageUrl" class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center h-64">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">选择或拖放图片到这里</p>
          </div>
          
          <div v-else class="relative overflow-hidden rounded-lg">
            <img :src="imageUrl" :alt="fileName" class="w-full h-auto object-contain" ref="originalImage" />
            
            <div class="mt-2 flex items-center justify-between">
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ fileName }}</span>
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ imageSize.width }} x {{ imageSize.height }}</span>
            </div>
          </div>
          
          <canvas ref="canvas" class="hidden"></canvas>
        </div>
        
        <!-- 右侧结果展示 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">ASCII结果</h3>
          
          <div v-if="!asciiResult" class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center h-64">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {{ hasImage ? '点击"生成ASCII"按钮转换图片' : '请先选择一张图片' }}
            </p>
          </div>
          
          <div v-else>
            <div 
              ref="asciiContainer" 
              class="font-mono overflow-auto rounded-lg border border-gray-200 dark:border-gray-700 p-2"
              :class="{'bg-black text-white': !settings.invert && !settings.colorOutput, 'bg-white text-black': settings.invert && !settings.colorOutput}"
              :style="{
                fontSize: `${settings.fontSize}px`,
                lineHeight: '1',
                whiteSpace: 'pre',
                overflowWrap: 'normal'
              }"
            >
              <div v-if="settings.colorOutput" v-html="coloredAsciiHtml"></div>
              <template v-else>{{ asciiResult }}</template>
            </div>
            
            <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <p>提示：使用复制按钮可以将ASCII艺术复制到剪贴板，或使用下载按钮保存为文本文件。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// 状态变量
const imageUrl = ref(null)
const fileName = ref('')
const canvas = ref(null)
const originalImage = ref(null)
const asciiContainer = ref(null)
const asciiResult = ref('')
const coloredAsciiHtml = ref('')
const isProcessing = ref(false)
const imageSize = reactive({
  width: 0,
  height: 0
})

// 设置选项
const settings = reactive({
  charset: 'standard',
  customCharset: '@%#*+=-:. ',
  width: 100,
  invert: false,
  colorOutput: false,
  fontSize: 8
})

// 通知
const notification = reactive({
  show: false,
  message: '',
  fadeOut: false
})

// 计算属性
const hasImage = computed(() => !!imageUrl.value)

// 字符集映射
const charsets = {
  standard: '@#W$9876543210?!abc+;:=-,._ ',
  simple: '@%#*+=-:. ',
  blocks: '█▓▒░ ',
  custom: computed(() => settings.customCharset)
}

// 加载图片
async function loadImage(event) {
  const file = event.target.files[0]
  if (!file) return
  
  try {
    fileName.value = file.name
    imageUrl.value = URL.createObjectURL(file)
    
    // 重置结果
    asciiResult.value = ''
    coloredAsciiHtml.value = ''
    
    // 等待图片加载完成，然后获取尺寸
    const img = new Image()
    img.onload = () => {
      imageSize.width = img.width
      imageSize.height = img.height
    }
    img.src = imageUrl.value
    
    showNotification('图片已加载')
  } catch (error) {
    console.error('加载图片失败:', error)
    showNotification('加载图片失败')
  }
}

// 生成ASCII艺术
async function generateAscii() {
  if (!hasImage.value || isProcessing.value) return
  
  isProcessing.value = true
  
  try {
    // 获取图片数据
    const ctx = canvas.value.getContext('2d')
    const img = originalImage.value
    
    // 计算高度保持宽高比
    const aspectRatio = img.naturalHeight / img.naturalWidth
    const width = settings.width
    const height = Math.floor(width * aspectRatio * 0.5) // 字符高宽比约为2:1，乘0.5校正
    
    // 设置画布大小
    canvas.value.width = width
    canvas.value.height = height
    
    // 绘制图片到画布
    ctx.drawImage(img, 0, 0, width, height)
    
    // 获取像素数据
    const imageData = ctx.getImageData(0, 0, width, height)
    const pixels = imageData.data
    
    // 确定使用的字符集
    const chars = settings.charset === 'custom' 
      ? settings.customCharset 
      : charsets[settings.charset]
    
    let result = ''
    let coloredHtml = ''
    
    // 逐行处理像素
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4
        
        // 计算灰度值 (0.3R + 0.59G + 0.11B)
        const r = pixels[idx]
        const g = pixels[idx + 1]
        const b = pixels[idx + 2]
        let gray = Math.floor(0.3 * r + 0.59 * g + 0.11 * b)
        
        // 根据设置反转灰度值
        if (settings.invert) {
          gray = 255 - gray
        }
        
        // 将灰度值映射到字符集索引
        const charIdx = Math.floor(gray * (chars.length - 1) / 255)
        const char = chars[charIdx]
        
        // 添加字符到结果
        result += char
        
        // 如果需要彩色输出，构建HTML
        if (settings.colorOutput) {
          const color = `rgb(${r}, ${g}, ${b})`
          coloredHtml += `<span style="color: ${color}">${char}</span>`
        }
      }
      // 添加换行
      result += '\n'
      if (settings.colorOutput) {
        coloredHtml += '<br>'
      }
    }
    
    // 更新结果
    asciiResult.value = result
    coloredAsciiHtml.value = coloredHtml
    
    showNotification('ASCII艺术已生成')
  } catch (error) {
    console.error('生成ASCII失败:', error)
    showNotification('生成ASCII失败')
  } finally {
    isProcessing.value = false
  }
}

// 复制ASCII结果
function copyAscii() {
  if (!asciiResult.value) return
  
  try {
    navigator.clipboard.writeText(asciiResult.value)
    showNotification('ASCII已复制到剪贴板')
  } catch (error) {
    console.error('复制失败:', error)
    showNotification('复制失败')
  }
}

// 下载ASCII结果
function downloadAscii() {
  if (!asciiResult.value) return
  
  try {
    const blob = new Blob([asciiResult.value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `${fileName.value.replace(/\.[^/.]+$/, '')}_ascii.txt`
    link.click()
    
    URL.revokeObjectURL(url)
    showNotification('ASCII已下载')
  } catch (error) {
    console.error('下载失败:', error)
    showNotification('下载失败')
  }
}

// 重置
function resetCanvas() {
  imageUrl.value = null
  fileName.value = ''
  asciiResult.value = ''
  coloredAsciiHtml.value = ''
  
  // 重置设置
  settings.charset = 'standard'
  settings.width = 100
  settings.invert = false
  settings.colorOutput = false
  settings.fontSize = 8
  
  showNotification('已重置')
}

// 显示通知
function showNotification(message) {
  notification.message = message
  notification.show = true
  notification.fadeOut = false
  
  // 3秒后开始淡出
  setTimeout(() => {
    notification.fadeOut = true
    
    // 淡出后隐藏
    setTimeout(() => {
      notification.show = false
    }, 300)
  }, 3000)
}

onMounted(() => {
  // 确保canvas元素已创建
  if (!canvas.value) {
    canvas.value = document.createElement('canvas')
  }
})
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md flex items-center transition-colors duration-200 font-medium;
}
</style> 