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
        @click="downloadImage" 
        :disabled="!processedImageUrl || isProcessing"
        class="btn bg-green-600 hover:bg-green-700 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        下载马赛克图片
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
          <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">马赛克设置</h3>
          
          <!-- 马赛克大小 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              马赛克大小: {{ settings.mosaicSize }}px
            </label>
            <input
              v-model.number="settings.mosaicSize"
              type="range"
              min="3"
              max="50"
              step="1"
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              :disabled="!hasImage || isProcessing"
              @input="applyMosaic"
            />
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>小块 (细致)</span>
              <span>大块 (粗糙)</span>
            </div>
          </div>
          
          <!-- 马赛克形状 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">马赛克形状</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                @click="settings.mosaicShape = 'square'; applyMosaic()"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.mosaicShape === 'square' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                方形
              </button>
              <button
                @click="settings.mosaicShape = 'circle'; applyMosaic()"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.mosaicShape === 'circle' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                圆形
              </button>
            </div>
          </div>
          
          <!-- 选择区域应用马赛克 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">马赛克应用方式</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                @click="settings.applyMode = 'all'; applyMosaic()"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.applyMode === 'all' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing || isSelecting"
              >
                全图
              </button>
              <button
                @click="startSelection"
                class="px-3 py-2 text-sm border rounded-md transition-colors"
                :class="settings.applyMode === 'region' || isSelecting
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
                :disabled="!hasImage || isProcessing"
              >
                {{ isSelecting ? '选择区域中...' : '选择区域' }}
              </button>
            </div>
          </div>
          
          <!-- 人脸检测 -->
          <div class="mb-4">
            <div class="flex items-center justify-between">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">自动检测人脸</label>
              <button
                @click="detectFaces"
                class="px-3 py-1 text-sm border rounded-md transition-colors bg-blue-600 text-white hover:bg-blue-700"
                :disabled="!hasImage || isProcessing"
              >
                检测人脸
              </button>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              检测图片中的人脸并自动为其应用马赛克
            </p>
          </div>
          
          <!-- 边缘平滑 -->
          <div class="mb-4">
            <div class="flex items-center">
              <input
                id="edgeSmoothing"
                v-model="settings.edgeSmoothing"
                type="checkbox"
                class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                :disabled="!hasImage || isProcessing"
                @change="applyMosaic"
              />
              <label for="edgeSmoothing" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                边缘平滑
              </label>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              平滑马赛克块的边缘，使过渡更自然
            </p>
          </div>
        </div>
        
        <!-- 中间和右侧 - 图片预览区域 -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- 原图 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">原图</h3>
              <div class="relative aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div v-if="!hasImage" class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  请选择图片
                </div>
                <img 
                  v-else 
                  :src="originalImageUrl" 
                  alt="原始图片" 
                  class="object-contain w-full h-full"
                  ref="originalImageRef"
                  @load="imageLoaded"
                />
                
                <!-- 选择区域覆盖层 -->
                <div 
                  v-if="isSelecting" 
                  class="absolute inset-0 cursor-crosshair"
                  @mousedown="handleMouseDown"
                  @mousemove="handleMouseMove"
                  @mouseup="handleMouseUp"
                  @mouseleave="handleMouseUp"
                >
                  <!-- 选择框 -->
                  <div 
                    v-if="selectionStart && selectionCurrent"
                    class="absolute border-2 border-primary bg-primary bg-opacity-20"
                    :style="{
                      left: `${Math.min(selectionStart.x, selectionCurrent.x)}px`,
                      top: `${Math.min(selectionStart.y, selectionCurrent.y)}px`,
                      width: `${Math.abs(selectionCurrent.x - selectionStart.x)}px`,
                      height: `${Math.abs(selectionCurrent.y - selectionStart.y)}px`
                    }"
                  ></div>
                </div>
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-2" v-if="imageInfo.width && imageInfo.height">
                尺寸: {{ imageInfo.width }} x {{ imageInfo.height }} 像素 | {{ formatFileSize(imageInfo.size) }}
              </div>
            </div>
            
            <!-- 马赛克效果预览 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">马赛克效果</h3>
              <div class="relative aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div v-if="isProcessing" class="flex items-center justify-center h-full">
                  <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
                <div v-else-if="!processedImageUrl" class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  请先选择图片并调整设置
                </div>
                <img 
                  v-else 
                  :src="processedImageUrl" 
                  alt="马赛克效果" 
                  class="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// 状态管理
const originalImageUrl = ref(null)
const processedImageUrl = ref(null)
const isProcessing = ref(false)
const fileName = ref('')
const canvas = ref(null)
const ctx = ref(null)
const originalImageRef = ref(null)

const imageInfo = reactive({
  width: 0,
  height: 0,
  size: 0
})

// 设置选项
const settings = reactive({
  mosaicSize: 10,
  mosaicShape: 'square', // 'square' 或 'circle'
  applyMode: 'all', // 'all' 或 'region'
  edgeSmoothing: false,
  regions: [] // 马赛克应用区域
})

// 选择区域相关
const isSelecting = ref(false)
const selectionStart = ref(null)
const selectionCurrent = ref(null)
const selectedRegion = ref(null)

// 计算属性
const hasImage = computed(() => !!originalImageUrl.value)

// 通知弹窗
const notification = ref({
  show: false,
  message: '',
  fadeOut: false
})

// 加载图片
function loadImage(event) {
  const file = event.target.files[0]
  if (!file) return
  
  fileName.value = file.name
  imageInfo.size = file.size
  
  const reader = new FileReader()
  reader.onload = (e) => {
    originalImageUrl.value = e.target.result
  }
  reader.readAsDataURL(file)
}

// 图片加载完成后调用
function imageLoaded() {
  if (!originalImageRef.value) return
  
  imageInfo.width = originalImageRef.value.naturalWidth
  imageInfo.height = originalImageRef.value.naturalHeight
  
  // 应用马赛克
  applyMosaic()
}

// 应用马赛克效果
async function applyMosaic() {
  if (!hasImage.value) return
  
  isProcessing.value = true
  
  try {
    // 延迟一下，让UI有时间更新
    await new Promise(resolve => setTimeout(resolve, 50))
    
    // 创建canvas
    if (!canvas.value) {
      canvas.value = document.createElement('canvas')
      ctx.value = canvas.value.getContext('2d')
    }
    
    // 设置canvas尺寸
    canvas.value.width = imageInfo.width
    canvas.value.height = imageInfo.height
    
    // 加载图片
    const img = new Image()
    img.src = originalImageUrl.value
    
    await new Promise((resolve, reject) => {
      img.onload = resolve
      img.onerror = reject
    })
    
    // 绘制原图
    ctx.value.drawImage(img, 0, 0, canvas.value.width, canvas.value.height)
    
    // 应用马赛克
    const mosaicSize = settings.mosaicSize
    
    if (settings.applyMode === 'all') {
      // 全图应用马赛克
      applyMosaicToRegion({
        x: 0,
        y: 0,
        width: canvas.value.width,
        height: canvas.value.height
      })
    } else if (settings.applyMode === 'region' && settings.regions.length > 0) {
      // 仅在选定区域应用马赛克
      settings.regions.forEach(region => {
        applyMosaicToRegion(region)
      })
    }
    
    // 输出处理后的图片
    processedImageUrl.value = canvas.value.toDataURL('image/png')
  } catch (error) {
    console.error('应用马赛克时出错:', error)
    showNotification('应用马赛克时出错')
  } finally {
    isProcessing.value = false
  }
}

// 在指定区域应用马赛克
function applyMosaicToRegion(region) {
  const { x, y, width, height } = region
  const mosaicSize = settings.mosaicSize
  
  // 获取区域像素数据
  const imageData = ctx.value.getImageData(x, y, width, height)
  const data = imageData.data
  
  // 应用马赛克效果
  for (let blockY = 0; blockY < height; blockY += mosaicSize) {
    for (let blockX = 0; blockX < width; blockX += mosaicSize) {
      // 计算块的实际大小（处理边界情况）
      const blockW = Math.min(mosaicSize, width - blockX)
      const blockH = Math.min(mosaicSize, height - blockY)
      
      // 采样该区域的平均颜色
      const color = getAverageColor(data, width, blockX, blockY, blockW, blockH)
      
      // 应用颜色到该区域的所有像素
      if (settings.mosaicShape === 'square') {
        // 方形马赛克
        fillMosaicBlock(data, width, blockX, blockY, blockW, blockH, color)
      } else {
        // 圆形马赛克
        fillCircleMosaicBlock(data, width, blockX, blockY, blockW, blockH, color)
      }
    }
  }
  
  // 如果启用边缘平滑
  if (settings.edgeSmoothing) {
    smoothMosaicEdges(data, width, height)
  }
  
  // 更新图像数据
  ctx.value.putImageData(imageData, x, y)
}

// 获取区域平均颜色
function getAverageColor(data, width, x, y, w, h) {
  let r = 0, g = 0, b = 0, a = 0
  let pixelCount = 0
  
  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const idx = ((y + py) * width + (x + px)) * 4
      r += data[idx]
      g += data[idx + 1]
      b += data[idx + 2]
      a += data[idx + 3]
      pixelCount++
    }
  }
  
  return {
    r: Math.round(r / pixelCount),
    g: Math.round(g / pixelCount),
    b: Math.round(b / pixelCount),
    a: Math.round(a / pixelCount)
  }
}

// 填充马赛克块
function fillMosaicBlock(data, width, x, y, w, h, color) {
  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const idx = ((y + py) * width + (x + px)) * 4
      data[idx] = color.r
      data[idx + 1] = color.g
      data[idx + 2] = color.b
      data[idx + 3] = color.a
    }
  }
}

// 填充圆形马赛克块
function fillCircleMosaicBlock(data, width, x, y, w, h, color) {
  const centerX = x + w / 2
  const centerY = y + h / 2
  const radius = Math.min(w, h) / 2
  
  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const distance = Math.sqrt((x + px - centerX) ** 2 + (y + py - centerY) ** 2)
      
      if (distance <= radius) {
        const idx = ((y + py) * width + (x + px)) * 4
        data[idx] = color.r
        data[idx + 1] = color.g
        data[idx + 2] = color.b
        data[idx + 3] = color.a
      }
    }
  }
}

// 平滑马赛克边缘
function smoothMosaicEdges(data, width, height) {
  // 简单高斯模糊处理，仅处理马赛克块边缘
  const tempData = new Uint8ClampedArray(data)
  const kernel = [
    [1, 2, 1],
    [2, 4, 2],
    [1, 2, 1]
  ]
  const kernelWeight = 16
  
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      // 检查是否在马赛克边缘
      const isEdge = isMosaicEdge(data, width, x, y)
      
      if (isEdge) {
        let r = 0, g = 0, b = 0, a = 0
        
        // 应用卷积核
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const idx = ((y + ky) * width + (x + kx)) * 4
            const weight = kernel[ky + 1][kx + 1]
            
            r += tempData[idx] * weight
            g += tempData[idx + 1] * weight
            b += tempData[idx + 2] * weight
            a += tempData[idx + 3] * weight
          }
        }
        
        const idx = (y * width + x) * 4
        data[idx] = r / kernelWeight
        data[idx + 1] = g / kernelWeight
        data[idx + 2] = b / kernelWeight
        data[idx + 3] = a / kernelWeight
      }
    }
  }
}

// 检查像素是否在马赛克块的边缘
function isMosaicEdge(data, width, x, y) {
  const idx = (y * width + x) * 4
  const color = {
    r: data[idx],
    g: data[idx + 1],
    b: data[idx + 2]
  }
  
  // 检查相邻像素是否颜色不同
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue
      
      const nx = x + dx
      const ny = y + dy
      
      if (nx >= 0 && ny >= 0 && nx < width) {
        const neighborIdx = (ny * width + nx) * 4
        const neighborColor = {
          r: data[neighborIdx],
          g: data[neighborIdx + 1],
          b: data[neighborIdx + 2]
        }
        
        // 如果颜色差异大，则判定为边缘
        const colorDiff = Math.abs(color.r - neighborColor.r) + 
                          Math.abs(color.g - neighborColor.g) + 
                          Math.abs(color.b - neighborColor.b)
        
        if (colorDiff > 30) {
          return true
        }
      }
    }
  }
  
  return false
}

// 开始选择区域
function startSelection() {
  isSelecting.value = true
  settings.applyMode = 'region'
  selectionStart.value = null
  selectionCurrent.value = null
  showNotification('请在图片上拖动选择要应用马赛克的区域')
}

// 处理鼠标按下事件
function handleMouseDown(event) {
  if (!isSelecting.value) return
  
  const rect = event.target.getBoundingClientRect()
  selectionStart.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
  selectionCurrent.value = { ...selectionStart.value }
}

// 处理鼠标移动事件
function handleMouseMove(event) {
  if (!isSelecting.value || !selectionStart.value) return
  
  const rect = event.target.getBoundingClientRect()
  selectionCurrent.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

// 处理鼠标释放事件
function handleMouseUp() {
  if (!isSelecting.value || !selectionStart.value || !selectionCurrent.value) {
    isSelecting.value = false
    return
  }
  
  // 计算选择的区域
  const x1 = Math.min(selectionStart.value.x, selectionCurrent.value.x)
  const y1 = Math.min(selectionStart.value.y, selectionCurrent.value.y)
  const x2 = Math.max(selectionStart.value.x, selectionCurrent.value.x)
  const y2 = Math.max(selectionStart.value.y, selectionCurrent.value.y)
  
  // 转换为图像坐标（考虑图像缩放）
  const imgElement = originalImageRef.value
  const imgRect = imgElement.getBoundingClientRect()
  const scaleX = imageInfo.width / imgElement.offsetWidth
  const scaleY = imageInfo.height / imgElement.offsetHeight
  
  // 计算实际图像上的坐标
  const imgX = Math.round(x1 * scaleX)
  const imgY = Math.round(y1 * scaleY)
  const imgWidth = Math.round((x2 - x1) * scaleX)
  const imgHeight = Math.round((y2 - y1) * scaleY)
  
  // 存储选择的区域
  const newRegion = {
    x: imgX,
    y: imgY,
    width: imgWidth,
    height: imgHeight
  }
  
  // 清空之前的区域并添加新区域
  settings.regions = [newRegion]
  
  // 结束选择模式
  isSelecting.value = false
  selectionStart.value = null
  selectionCurrent.value = null
  
  // 应用马赛克
  applyMosaic()
}

// 检测并马赛克人脸
async function detectFaces() {
  showNotification('人脸检测功能正在初始化...')
  
  try {
    isProcessing.value = true
    
    // 这里应该加载人脸检测模型，但由于模型加载可能需要额外的库，
    // 这里使用模拟的区域作为示例
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // 模拟检测到的人脸位置 (实际应用中应该使用人脸检测API)
    // 这里只是一个演示，使用图像中央区域作为"检测到的人脸"
    const faceRegion = {
      x: Math.floor(imageInfo.width * 0.3),
      y: Math.floor(imageInfo.height * 0.2),
      width: Math.floor(imageInfo.width * 0.4),
      height: Math.floor(imageInfo.height * 0.4)
    }
    
    // 设置区域并应用马赛克
    settings.regions = [faceRegion]
    settings.applyMode = 'region'
    
    showNotification('已检测到人脸区域')
    
    // 应用马赛克
    await applyMosaic()
  } catch (error) {
    console.error('人脸检测失败:', error)
    showNotification('人脸检测失败')
  } finally {
    isProcessing.value = false
  }
}

// 下载处理后的图片
function downloadImage() {
  if (!processedImageUrl.value) return
  
  const link = document.createElement('a')
  
  // 提取文件扩展名并构建新文件名
  const dotIndex = fileName.value.lastIndexOf('.')
  const nameWithoutExt = dotIndex !== -1 ? fileName.value.substring(0, dotIndex) : fileName.value
  const newFileName = `${nameWithoutExt}_mosaic.png`
  
  link.href = processedImageUrl.value
  link.download = newFileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  showNotification('图片已下载')
}

// 重置编辑器
function resetEditor() {
  originalImageUrl.value = null
  processedImageUrl.value = null
  fileName.value = ''
  imageInfo.width = 0
  imageInfo.height = 0
  imageInfo.size = 0
  
  settings.mosaicSize = 10
  settings.mosaicShape = 'square'
  settings.applyMode = 'all'
  settings.edgeSmoothing = false
  settings.regions = []
  
  isSelecting.value = false
  selectionStart.value = null
  selectionCurrent.value = null
  
  showNotification('已重置')
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