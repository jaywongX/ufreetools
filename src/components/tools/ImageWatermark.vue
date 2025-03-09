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
      
      <button 
        @click="downloadImage" 
        :disabled="!hasImage"
        class="btn bg-green-600 hover:bg-green-700 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        下载图片
      </button>
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- 左侧控制面板 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4" :class="{'opacity-50': !hasImage}">
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">水印设置</h3>
          
          <!-- 水印类型选择 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">水印类型</label>
            <div class="flex space-x-2">
              <button
                @click="watermarkType = 'text'"
                class="px-3 py-1.5 rounded text-sm"
                :class="watermarkType === 'text' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
                :disabled="!hasImage"
              >
                文字水印
              </button>
              <button
                @click="watermarkType = 'image'"
                class="px-3 py-1.5 rounded text-sm"
                :class="watermarkType === 'image' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'"
                :disabled="!hasImage"
              >
                图片水印
              </button>
            </div>
          </div>
          
          <!-- 文字水印设置 -->
          <div v-if="watermarkType === 'text'" class="mb-4">
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">水印文字</label>
              <input
                type="text"
                v-model="textOptions.text"
                placeholder="输入水印文字..."
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                :disabled="!hasImage"
              />
            </div>
            
            <div class="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">字体</label>
                <select
                  v-model="textOptions.fontFamily"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  :disabled="!hasImage"
                >
                  <option value="Arial">Arial</option>
                  <option value="Verdana">Verdana</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                  <option value="微软雅黑">微软雅黑</option>
                  <option value="宋体">宋体</option>
                  <option value="黑体">黑体</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">字号</label>
                <input
                  type="number"
                  v-model="textOptions.fontSize"
                  min="10"
                  max="200"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  :disabled="!hasImage"
                />
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">字体样式</label>
                <select
                  v-model="textOptions.fontStyle"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  :disabled="!hasImage"
                >
                  <option value="normal">正常</option>
                  <option value="italic">斜体</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">字体粗细</label>
                <select
                  v-model="textOptions.fontWeight"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  :disabled="!hasImage"
                >
                  <option value="normal">正常</option>
                  <option value="bold">粗体</option>
                </select>
              </div>
            </div>
            
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">文字颜色</label>
              <input
                type="color"
                v-model="textOptions.fill"
                class="w-full h-10 p-1 rounded border border-gray-300 dark:border-gray-600"
                :disabled="!hasImage"
              />
            </div>
            
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">透明度: {{ textOptions.opacity }}</label>
              <input
                type="range"
                v-model="textOptions.opacity"
                min="0.1"
                max="1"
                step="0.1"
                class="w-full"
                :disabled="!hasImage"
              />
            </div>
          </div>
          
          <!-- 图片水印设置 -->
          <div v-if="watermarkType === 'image'" class="mb-4">
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">水印图片</label>
              <label class="block w-full p-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md text-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500">
                <span v-if="!watermarkImageSrc" class="text-gray-500 dark:text-gray-400">选择水印图片</span>
                <img v-else :src="watermarkImageSrc" class="max-h-20 mx-auto" />
                <input type="file" accept="image/*" @change="loadWatermarkImage" class="hidden" />
              </label>
            </div>
            
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">缩放比例: {{ imageOptions.scale }}</label>
              <input
                type="range"
                v-model="imageOptions.scale"
                min="0.1"
                max="1"
                step="0.1"
                class="w-full"
                :disabled="!hasImage || !watermarkImageSrc"
              />
            </div>
            
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">透明度: {{ imageOptions.opacity }}</label>
              <input
                type="range"
                v-model="imageOptions.opacity"
                min="0.1"
                max="1"
                step="0.1"
                class="w-full"
                :disabled="!hasImage || !watermarkImageSrc"
              />
            </div>
          </div>
          
          <!-- 通用水印设置 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">位置</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="position in ['top-left', 'top-center', 'top-right', 'middle-left', 'middle-center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right']"
                :key="position"
                @click="watermarkPosition = position"
                class="p-2 border rounded-md text-center"
                :class="watermarkPosition === position ? 'border-primary bg-primary-50 dark:bg-primary-900/30 text-primary dark:text-primary-300' : 'border-gray-300 dark:border-gray-600'"
                :disabled="!hasImage"
              >
                <div class="w-full h-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h14M5 12h14M5 19h14" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">旋转角度: {{ watermarkRotation }}°</label>
            <input
              type="range"
              v-model="watermarkRotation"
              min="-180"
              max="180"
              class="w-full"
              :disabled="!hasImage"
            />
          </div>
          
          <div class="mb-4">
            <label class="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                v-model="tileWatermark"
                class="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                :disabled="!hasImage"
              />
              平铺水印
            </label>
          </div>
          
          <button
            @click="applyWatermark"
            class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md font-medium"
            :disabled="!canApplyWatermark"
          >
            应用水印
          </button>
        </div>
        
        <!-- 右侧预览区域 -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-full flex flex-col">
            <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">图片预览</h3>
            
            <div v-if="!hasImage" class="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">请选择一张图片来添加水印</p>
              </div>
            </div>
            
            <div v-else class="flex-grow relative flex items-center justify-center">
              <canvas ref="canvas" class="max-w-full max-h-full shadow-sm"></canvas>
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
import { fabric } from 'fabric'

// 画布和状态变量
const canvas = ref(null)
const fabricCanvas = ref(null)
const hasImage = ref(false)
const backgroundImage = ref(null)
const watermarkObject = ref(null)
const notification = ref({
  show: false,
  message: '',
  fadeOut: false
})

// 水印配置
const watermarkType = ref('text')
const watermarkPosition = ref('bottom-right')
const watermarkRotation = ref(0)
const tileWatermark = ref(false)
const watermarkImageSrc = ref(null)

// 文字水印选项
const textOptions = ref({
  text: '© 2024 版权所有',
  fontFamily: '微软雅黑',
  fontSize: 36,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fill: '#ffffff',
  opacity: 0.7,
})

// 图片水印选项
const imageOptions = ref({
  scale: 0.5,
  opacity: 0.7
})

// 水印图片对象
const watermarkImage = ref(null)

// 计算属性 - 是否可以应用水印
const canApplyWatermark = computed(() => {
  if (!hasImage.value) return false
  
  if (watermarkType.value === 'text') {
    return textOptions.value.text.trim() !== ''
  } else {
    return watermarkImageSrc.value !== null
  }
})

// 加载主图片
async function loadImage(event) {
  const file = event.target.files[0]
  if (!file) return
  
  // 重置画布
  if (fabricCanvas.value) {
    fabricCanvas.value.clear()
  } else {
    fabricCanvas.value = new fabric.Canvas(canvas.value)
  }
  
  // 从文件创建图片URL
  const url = URL.createObjectURL(file)
  
  try {
    // 创建fabric图片对象
    fabric.Image.fromURL(url, img => {
      // 调整画布大小以适应图片
      const maxWidth = 1200
      const maxHeight = 800
      
      let width = img.width
      let height = img.height
      
      // 如果图片太大，按比例缩小
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height)
        width *= ratio
        height *= ratio
      }
      
      // 调整画布大小
      fabricCanvas.value.setWidth(width)
      fabricCanvas.value.setHeight(height)
      
      // 设置背景图片
      img.selectable = false
      fabricCanvas.value.setBackgroundImage(img, fabricCanvas.value.renderAll.bind(fabricCanvas.value))
      
      // 保存图片引用
      backgroundImage.value = img
      hasImage.value = true
      
      showNotification('图片已加载，可以添加水印了')
    })
  } catch (error) {
    console.error('加载图片失败:', error)
    showNotification('加载图片失败')
  }
}

// 加载水印图片
function loadWatermarkImage(event) {
  const file = event.target.files[0]
  if (!file) return
  
  const url = URL.createObjectURL(file)
  watermarkImageSrc.value = url
  
  // 创建fabric图片对象
  fabric.Image.fromURL(url, img => {
    watermarkImage.value = img
  })
}

// 应用水印
function applyWatermark() {
  if (!fabricCanvas.value || !hasImage.value) return
  
  // 移除已有的水印
  if (watermarkObject.value) {
    fabricCanvas.value.remove(watermarkObject.value)
    watermarkObject.value = null
  }
  
  // 根据设置创建水印
  if (tileWatermark.value) {
    createTiledWatermark()
  } else {
    if (watermarkType.value === 'text') {
      addTextWatermark()
    } else {
      addImageWatermark()
    }
  }
  
  showNotification('水印已应用')
}

// 添加文字水印
function addTextWatermark() {
  if (!fabricCanvas.value) return
  
  // 创建文本水印
  const text = new fabric.Text(textOptions.value.text, {
    fontFamily: textOptions.value.fontFamily,
    fontSize: textOptions.value.fontSize,
    fontStyle: textOptions.value.fontStyle,
    fontWeight: textOptions.value.fontWeight,
    fill: textOptions.value.fill,
    opacity: textOptions.value.opacity,
    angle: watermarkRotation.value,
  })
  
  // 定位水印
  positionWatermark(text)
  
  // 添加到画布并保存引用
  fabricCanvas.value.add(text)
  watermarkObject.value = text
  fabricCanvas.value.renderAll()
}

// 添加图片水印
function addImageWatermark() {
  if (!fabricCanvas.value || !watermarkImage.value) return
  
  // 克隆图片对象避免修改原始对象
  const img = fabric.util.object.clone(watermarkImage.value)
  
  // 应用设置
  const canvasWidth = fabricCanvas.value.width
  const scale = imageOptions.value.scale * (canvasWidth / img.width) * 0.3
  
  img.set({
    scaleX: scale,
    scaleY: scale,
    opacity: imageOptions.value.opacity,
    angle: watermarkRotation.value,
  })
  
  // 定位水印
  positionWatermark(img)
  
  // 添加到画布并保存引用
  fabricCanvas.value.add(img)
  watermarkObject.value = img
  fabricCanvas.value.renderAll()
}

// 定位水印
function positionWatermark(obj) {
  if (!fabricCanvas.value) return
  
  const canvasWidth = fabricCanvas.value.width
  const canvasHeight = fabricCanvas.value.height
  const objWidth = obj.getScaledWidth()
  const objHeight = obj.getScaledHeight()
  
  const padding = 20
  
  // 根据选定位置设置坐标
  switch (watermarkPosition.value) {
    case 'top-left':
      obj.set({ left: padding, top: padding })
      break
    case 'top-center':
      obj.set({ left: (canvasWidth - objWidth) / 2, top: padding })
      break
    case 'top-right':
      obj.set({ left: canvasWidth - objWidth - padding, top: padding })
      break
    case 'middle-left':
      obj.set({ left: padding, top: (canvasHeight - objHeight) / 2 })
      break
    case 'middle-center':
      obj.set({ left: (canvasWidth - objWidth) / 2, top: (canvasHeight - objHeight) / 2 })
      break
    case 'middle-right':
      obj.set({ left: canvasWidth - objWidth - padding, top: (canvasHeight - objHeight) / 2 })
      break
    case 'bottom-left':
      obj.set({ left: padding, top: canvasHeight - objHeight - padding })
      break
    case 'bottom-center':
      obj.set({ left: (canvasWidth - objWidth) / 2, top: canvasHeight - objHeight - padding })
      break
    case 'bottom-right':
      obj.set({ left: canvasWidth - objWidth - padding, top: canvasHeight - objHeight - padding })
      break
  }
}

// 创建平铺水印
function createTiledWatermark() {
  if (!fabricCanvas.value) return
  
  // 如果已有水印对象，先移除
  if (watermarkObject.value) {
    fabricCanvas.value.remove(watermarkObject.value)
    
    // 创建平铺图案
    const patternSource = watermarkType.value === 'text' 
      ? createTextPatternSource()
      : createImagePatternSource()
    
    if (patternSource) {
      // 创建覆盖整个画布的水印图案
      const patternRect = new fabric.Rect({
        left: 0,
        top: 0,
        width: fabricCanvas.value.width,
        height: fabricCanvas.value.height,
        fill: new fabric.Pattern({
          source: patternSource,
          repeat: 'repeat'
        }),
        selectable: false
      })
      
      fabricCanvas.value.add(patternRect)
      watermarkObject.value = patternRect
      fabricCanvas.value.renderAll()
    }
  } else {
    // 移除平铺水印
    fabricCanvas.value.remove(watermarkObject.value)
    
    // 重新添加单个水印
    if (watermarkType.value === 'text') {
      addTextWatermark()
    } else {
      addImageWatermark()
    }
  }
}

// 创建文字水印的模式源
function createTextPatternSource() {
  // 创建一个临时画布
  const tempCanvas = document.createElement('canvas')
  const tempContext = tempCanvas.getContext('2d')
  
  // 设置临时画布大小
  tempCanvas.width = textOptions.value.fontSize * 8
  tempCanvas.height = textOptions.value.fontSize * 4
  
  // 绘制文字
  tempContext.font = `${textOptions.value.fontStyle} ${textOptions.value.fontWeight} ${textOptions.value.fontSize}px ${textOptions.value.fontFamily}`
  tempContext.fillStyle = textOptions.value.fill
  tempContext.globalAlpha = textOptions.value.opacity
  
  // 添加阴影
  tempContext.shadowColor = 'rgba(0,0,0,0.5)'
  tempContext.shadowBlur = 3
  tempContext.shadowOffsetX = 2
  tempContext.shadowOffsetY = 2
  
  // 旋转
  tempContext.translate(tempCanvas.width / 2, tempCanvas.height / 2)
  tempContext.rotate(watermarkRotation.value * Math.PI / 180)
  
  // 测量文本宽度
  const textWidth = tempContext.measureText(textOptions.value.text).width
  
  // 绘制文本
  tempContext.fillText(textOptions.value.text, -textWidth / 2, 0)
  
  // 重置变换
  tempContext.resetTransform()
  
  return tempCanvas
}

// 创建图片水印的模式源
function createImagePatternSource() {
  if (!watermarkImage.value) return null
  
  // 图片间距
  const tileSize = watermarkImage.value.width * imageOptions.value.scale
  
  // 创建临时画布
  const tempCanvas = document.createElement('canvas')
  const tempContext = tempCanvas.getContext('2d')
  
  tempCanvas.width = tileSize * 1.5
  tempCanvas.height = tileSize * 1.5
  
  // 将fabric.Image对象转换为标准Image对象
  const img = new Image()
  img.src = watermarkImage.value._element.src
  
  // 绘制图片
  tempContext.globalAlpha = imageOptions.value.opacity
  tempContext.drawImage(
    img, 
    (tempCanvas.width - tileSize) / 2, 
    (tempCanvas.height - tileSize) / 2, 
    tileSize, 
    tileSize * (img.height / img.width)
  )
  
  return tempCanvas
}

// 重置画布
function resetCanvas() {
  if (!fabricCanvas.value || !backgroundImage.value) return
  
  // 移除所有对象
  fabricCanvas.value.clear()
  
  // 重新设置背景图
  fabricCanvas.value.setBackgroundImage(backgroundImage.value, fabricCanvas.value.renderAll.bind(fabricCanvas.value))
  
  // 重置水印状态
  watermarkObject.value = null
  tileWatermark.value = false
  
  // 重置选项
  textOptions.value = {
    fontFamily: '微软雅黑',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fill: '#ffffff',
    opacity: 0.7,
    text: '© 2024 版权所有'
  }
  
  watermarkPosition.value = 'bottom-right'
  watermarkRotation.value = 0
  
  showNotification('已重置')
}

// 下载图片
function downloadImage() {
  if (!fabricCanvas.value) return
  
  // 导出画布为数据URL
  const dataUrl = fabricCanvas.value.toDataURL({
    format: 'png',
    quality: 0.8
  })
  
  // 创建下载链接
  const link = document.createElement('a')
  link.download = `watermarked-image-${new Date().getTime()}.png`
  link.href = dataUrl
  link.click()
  
  showNotification('图片已下载')
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
  // 初始化Fabric.js画布
  fabricCanvas.value = new fabric.Canvas(canvas.value)
  
  // 监听窗口大小变化
  window.addEventListener('resize', () => {
    if (fabricCanvas.value && backgroundImage.value) {
      // 重新调整画布尺寸
      fabricCanvas.value.setDimensions({
        width: backgroundImage.value.width,
        height: backgroundImage.value.height
      })
      fabricCanvas.value.renderAll()
    }
  })
})
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md flex items-center transition-colors duration-200 font-medium;
}
</style> 