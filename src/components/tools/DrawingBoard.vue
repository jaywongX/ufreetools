<template>
  <div class="drawing-board w-full max-w-none">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
      <!-- 工具选择面板 - 减小宽度以留更多空间给画布 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 lg:col-span-1">
        <div class="flex flex-wrap gap-2 mb-4">
          <button 
            @click="setTool('brush')" 
            :class="['p-2 rounded-md text-sm flex items-center', 
                    activeTool === 'brush' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300']"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            {{ t('tools.drawing-board.tools.brush') }}
          </button>
          <button 
            @click="setTool('eraser')" 
            :class="['p-2 rounded-md text-sm flex items-center', 
                    activeTool === 'eraser' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300']"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            {{ t('tools.drawing-board.tools.eraser') }}
          </button>
        </div>
        
        <!-- 画笔设置 -->
        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">{{ t('tools.drawing-board.settings.brushSize') }}</label>
          <div class="flex items-center">
            <input 
              type="range" 
              v-model="brushSize" 
              min="1" 
              max="50" 
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            >
            <span class="ml-2 text-sm">{{ brushSize }}px</span>
          </div>
        </div>
        
        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">{{ t('tools.drawing-board.settings.opacity') }}</label>
          <div class="flex items-center">
            <input 
              type="range" 
              v-model="opacity" 
              min="0.1" 
              max="1" 
              step="0.1" 
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            >
            <span class="ml-2 text-sm">{{ Math.round(opacity * 100) }}%</span>
          </div>
        </div>
        
        <!-- 颜色选择 -->
        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">{{ t('tools.drawing-board.settings.color') }}</label>
          <div class="grid grid-cols-6 gap-1">
            <button 
              v-for="color in predefinedColors" 
              :key="color" 
              @click="brushColor = color"
              :style="{ backgroundColor: color }"
              class="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600"
              :class="{ 'ring-2 ring-blue-500': brushColor === color }"
            ></button>
            <input 
              type="color" 
              v-model="brushColor" 
              class="w-5 h-5"
            >
          </div>
        </div>
        
        <!-- 背景颜色 -->
        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">{{ t('tools.drawing-board.settings.backgroundColor') }}</label>
          <div class="flex items-center space-x-2">
            <input 
              type="color" 
              v-model="canvasBackground" 
              class="w-5 h-5 mr-2"
            >
            <button 
              @click="applyBackground" 
              class="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-sm"
            >
              {{ t('tools.drawing-board.tools.apply') }}
            </button>
          </div>
        </div>
        
        <!-- 操作按钮 -->
        <div class="grid grid-cols-2 gap-2 mb-3">
          <button 
            @click="undo" 
            :disabled="historyIndex <= 0"
            class="p-1.5 rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 flex items-center justify-center disabled:opacity-50 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            {{ t('tools.drawing-board.tools.undo') }}
          </button>
          <button 
            @click="redo" 
            :disabled="historyIndex >= history.length - 1"
            class="p-1.5 rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 flex items-center justify-center disabled:opacity-50 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            {{ t('tools.drawing-board.tools.redo') }}
          </button>
        </div>
        
        <button 
          @click="clearCanvas" 
          class="w-full mb-2 p-2 rounded bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 flex items-center justify-center text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          {{ t('tools.drawing-board.tools.clear') }}
        </button>
        
        <button 
          @click="saveDrawing" 
          class="w-full p-2 rounded bg-blue-600 text-white flex items-center justify-center text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          {{ t('tools.drawing-board.tools.save') }}
        </button>
      </div>
      
      <!-- 画布区域 - 增加宽度比例 -->
      <div class="lg:col-span-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-bold">{{ t('tools.drawing-board.name') }}</h2>
            <button 
              @click="saveDrawing" 
              class="p-2 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
          <!-- 画布容器 - 增加高度和调整居中方式 -->
          <div class="canvas-container flex justify-center items-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
            <canvas
              ref="canvas"
              :width="canvasWidth"
              :height="canvasHeight"
              @mousedown="startDrawing"
              @mousemove="draw"
              @mouseup="stopDrawing"
              @mouseleave="stopDrawing"
              @touchstart.prevent="handleTouchStart"
              @touchmove.prevent="handleTouchMove"
              @touchend.prevent="stopDrawing"
              class="border border-gray-300 dark:border-gray-600 shadow-lg bg-white"
            ></canvas>
          </div>
          
          <!-- 尺寸选择按钮 - 更突出的设计 -->
          <div class="flex justify-center mt-4 space-x-3">
            <button 
              @click="setCanvasSize(800, 600)" 
              class="flex-1 p-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-800 text-sm font-medium"
            >
              {{ t('tools.drawing-board.canvas.landscape') }} (800×600)
            </button>
            <button 
              @click="setCanvasSize(600, 800)" 
              class="flex-1 p-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-800 text-sm font-medium"
            >
              {{ t('tools.drawing-board.canvas.portrait') }} (600×800)
            </button>
            <button 
              @click="setCanvasSize(700, 700)" 
              class="flex-1 p-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-800 text-sm font-medium"
            >
              {{ t('tools.drawing-board.canvas.square') }} (700×700)
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 工具信息部分 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
      <h2 class="text-xl font-bold mb-4">{{ t('tools.drawing-board.aboutTitle') }}</h2>
      <p class="mb-6 text-gray-700 dark:text-gray-300">{{ t('tools.drawing-board.aboutDescription') }}</p>
      
      <h3 class="text-lg font-semibold mb-3">{{ t('tools.drawing-board.featuresTitle') }}</h3>
      <ul class="mb-6 text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
        <li>{{ t('tools.drawing-board.feature1') }}</li>
        <li>{{ t('tools.drawing-board.feature2') }}</li>
        <li>{{ t('tools.drawing-board.feature3') }}</li>
        <li>{{ t('tools.drawing-board.feature4') }}</li>
        <li>{{ t('tools.drawing-board.feature5') }}</li>
        <li>{{ t('tools.drawing-board.feature6') }}</li>
      </ul>
      
      <h3 class="text-lg font-semibold mb-3">{{ t('tools.drawing-board.howToUseTitle') }}</h3>
      <ol class="mb-6 text-gray-700 dark:text-gray-300 list-decimal pl-5 space-y-1">
        <li>{{ t('tools.drawing-board.howToUseStep1') }}</li>
        <li>{{ t('tools.drawing-board.howToUseStep2') }}</li>
        <li>{{ t('tools.drawing-board.howToUseStep3') }}</li>
        <li>{{ t('tools.drawing-board.howToUseStep4') }}</li>
        <li>{{ t('tools.drawing-board.howToUseStep5') }}</li>
      </ol>
      
      <h3 class="text-lg font-semibold mb-3">{{ t('tools.drawing-board.tipsTitle') }}</h3>
      <ul class="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
        <li>{{ t('tools.drawing-board.tip1') }}</li>
        <li>{{ t('tools.drawing-board.tip2') }}</li>
        <li>{{ t('tools.drawing-board.tip3') }}</li>
        <li>{{ t('tools.drawing-board.tip4') }}</li>
        <li>{{ t('tools.drawing-board.tip5') }}</li>
      </ul>
    </div>

    <!-- 添加文章部分 -->
    <DrawingBoardArticle />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import DrawingBoardArticle from './DrawingBoardArticle.vue'

const { t } = useI18n()

// 画布引用和上下文
const canvas = ref(null)
let ctx = null

// 画布状态
const canvasWidth = ref(800)  // 增大初始画布宽度
const canvasHeight = ref(600) // 增大初始画布高度
const canvasBackground = ref('#ffffff')

// 绘图状态
const isDrawing = ref(false)
const lastX = ref(0)
const lastY = ref(0)

// 工具设置
const activeTool = ref('brush')
const brushSize = ref(5)
const brushColor = ref('#000000')
const opacity = ref(1)

// 历史记录
const history = ref([])
const historyIndex = ref(-1)
const maxHistory = 50

// 预定义颜色
const predefinedColors = [
  '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00',
  '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#800000', '#008000'
]

// 设置当前工具
function setTool(tool) {
  activeTool.value = tool
}

// 开始绘制
function startDrawing(e) {
  isDrawing.value = true
  const { offsetX, offsetY } = getCoordinates(e)
  lastX.value = offsetX
  lastY.value = offsetY
}

// 绘制
function draw(e) {
  if (!isDrawing.value) return
  
  const { offsetX, offsetY } = getCoordinates(e)
  
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = brushSize.value
  
  if (activeTool.value === 'brush') {
    ctx.globalCompositeOperation = 'source-over'
    ctx.strokeStyle = brushColor.value
    ctx.globalAlpha = opacity.value
  } else if (activeTool.value === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out'
    ctx.globalAlpha = 1
  }
  
  ctx.beginPath()
  ctx.moveTo(lastX.value, lastY.value)
  ctx.lineTo(offsetX, offsetY)
  ctx.stroke()
  
  lastX.value = offsetX
  lastY.value = offsetY
}

// 停止绘制
function stopDrawing() {
  if (isDrawing.value) {
    isDrawing.value = false
    saveState()
  }
}

// 处理触摸事件
function handleTouchStart(e) {
  const touch = e.touches[0]
  const mouseEvent = {
    offsetX: touch.clientX - canvas.value.getBoundingClientRect().left,
    offsetY: touch.clientY - canvas.value.getBoundingClientRect().top
  }
  startDrawing(mouseEvent)
}

function handleTouchMove(e) {
  const touch = e.touches[0]
  const mouseEvent = {
    offsetX: touch.clientX - canvas.value.getBoundingClientRect().left,
    offsetY: touch.clientY - canvas.value.getBoundingClientRect().top
  }
  draw(mouseEvent)
}

// 获取坐标
function getCoordinates(e) {
  if (e.offsetX !== undefined) {
    return { offsetX: e.offsetX, offsetY: e.offsetY }
  } else {
    // 处理触摸事件
    return {
      offsetX: e.clientX - canvas.value.getBoundingClientRect().left,
      offsetY: e.clientY - canvas.value.getBoundingClientRect().top
    }
  }
}

// 清空画布
function clearCanvas() {
  if (confirm(t('tools.drawing-board.messages.confirmClear'))) {
    ctx.fillStyle = canvasBackground.value
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
    saveState()
  }
}

// 撤销操作
function undo() {
  if (historyIndex.value > 0) {
    historyIndex.value--
    const img = new Image()
    img.onload = () => {
      ctx.fillStyle = canvasBackground.value
      ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
      ctx.drawImage(img, 0, 0)
    }
    img.src = history.value[historyIndex.value]
  }
}

// 重做操作
function redo() {
  if (historyIndex.value < history.value.length - 1) {
    historyIndex.value++
    const img = new Image()
    img.onload = () => {
      ctx.fillStyle = canvasBackground.value
      ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
      ctx.drawImage(img, 0, 0)
    }
    img.src = history.value[historyIndex.value]
  }
}

// 保存图片
function saveDrawing() {
  const fileName = prompt(t('tools.drawing-board.messages.fileNamePrompt'), t('tools.drawing-board.messages.defaultFileName'))
  if (!fileName) return
  
  const link = document.createElement('a')
  link.download = `${fileName}.png`
  link.href = canvas.value.toDataURL('image/png')
  link.click()
}

// 设置画布尺寸
function setCanvasSize(width, height) {
  // 保存当前画布内容
  const imageData = ctx.getImageData(0, 0, canvasWidth.value, canvasHeight.value)
  
  // 更新尺寸
  canvasWidth.value = width
  canvasHeight.value = height
  
  // 等待DOM更新
  setTimeout(() => {
    // 重设背景
    ctx.fillStyle = canvasBackground.value
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
    
    // 尝试恢复原始内容（居中）
    const offsetX = Math.max(0, (canvasWidth.value - imageData.width) / 2)
    const offsetY = Math.max(0, (canvasHeight.value - imageData.height) / 2)
    
    try {
      ctx.putImageData(imageData, offsetX, offsetY)
    } catch (e) {
      console.error('Error restoring canvas content:', e)
    }
    
    // 保存新状态
    saveState()
  }, 0)
}

// 应用背景颜色
function applyBackground() {
  if (!ctx || !canvas.value) {
    console.error('Canvas context not available');
    return;
  }
  
  try {
    // 保存当前画布内容
    const imageData = ctx.getImageData(0, 0, canvasWidth.value, canvasHeight.value);
    
    // 填充新背景
    ctx.fillStyle = canvasBackground.value;
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value);
    
    // 将内容放回
    // ctx.putImageData(imageData, 0, 0);
    
    // 保存新状态
    saveState();
  } catch (error) {
    console.error('Error applying background:', error);
  }
}

// 保存状态到历史记录
function saveState() {
  // 如果当前不是最新状态，移除后面的历史
  if (historyIndex.value < history.value.length - 1) {
    history.value = history.value.slice(0, historyIndex.value + 1)
  }
  
  // 保存当前状态
  history.value.push(canvas.value.toDataURL())
  
  // 如果历史记录过长，移除最早的
  if (history.value.length > maxHistory) {
    history.value.shift()
  }
  
  // 更新索引
  historyIndex.value = history.value.length - 1
}

// 监听画笔属性变化
watch(brushColor, () => {
  if (activeTool.value === 'eraser') {
    activeTool.value = 'brush'
  }
})

// 初始化
onMounted(() => {
  if (!canvas.value) return;
  
  try {
    // 获取画布上下文
    ctx = canvas.value.getContext('2d');
    
    if (!ctx) {
      alert(t('tools.drawing-board.messages.unsupportedBrowser'));
      return;
    }
    
    // 初始化画布
    ctx.fillStyle = canvasBackground.value;
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value);
    
    // 保存初始状态
    saveState();
  } catch (error) {
    console.error('Error initializing canvas:', error);
    alert(t('tools.drawing-board.messages.unsupportedBrowser'));
  }
  
  // 处理窗口尺寸变化，保持画布比例
  window.addEventListener('resize', () => {
    // 这里可以添加处理逻辑，如果需要的话
  });
});

// 监听背景颜色变化
watch(canvasBackground, (newColor, oldColor) => {
  // 不要自动应用，保留用户点击应用的控制权
  // 可以在这里添加提示或预览效果
});
</script>

<style scoped>
.drawing-board {
  max-width: 100%;
}

canvas {
  touch-action: none;  /* 防止在触摸设备上的默认行为 */
  max-width: 100%;    /* 确保在小屏幕上不会溢出 */
  height: auto;       /* 保持宽高比 */
}

.canvas-container {
  min-height: 600px;  /* 增加最小高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: auto;
}

@media (max-width: 768px) {
  .canvas-container {
    min-height: 400px;
  }
}
</style> 