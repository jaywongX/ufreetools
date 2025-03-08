<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具控制栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="copyCSS" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          复制CSS
        </button>
        <button 
          @click="resetGradient" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重置
        </button>
      </div>
      <div class="flex space-x-2">
        <button 
          v-for="type in ['linear', 'radial']" 
          :key="type"
          @click="gradientType = type"
          class="btn-sm"
          :class="{
            'bg-primary text-white': gradientType === type,
            'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': gradientType !== type
          }"
        >
          {{ type === 'linear' ? '线性渐变' : '径向渐变' }}
        </button>
      </div>
    </div>
    
    <!-- 状态消息 -->
    <div 
      v-if="message" 
      class="p-3 text-sm" 
      :class="{ 
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error',
      }"
    >
      {{ message }}
    </div>
    
    <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 左侧：渐变预览 -->
      <div class="md:col-span-2 space-y-6">
        <!-- 预览区域 -->
        <div class="relative">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">预览</div>
          <div 
            class="w-full h-52 rounded-lg bg-checkerboard"
          >
            <div 
              class="absolute inset-0 rounded-lg transition-all duration-200"
              :style="{ background: gradientCSS }"
            ></div>
          </div>
        </div>
        
        <!-- 参数控制区域 -->
        <div class="space-y-4">
          <!-- 线性渐变角度控制 -->
          <div v-if="gradientType === 'linear'" class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">角度</label>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ angle }}°</span>
            </div>
            <input
              type="range"
              v-model.number="angle"
              min="0"
              max="360"
              step="1"
              class="w-full"
            />
          </div>
          
          <!-- 径向渐变形状控制 -->
          <div v-if="gradientType === 'radial'" class="space-y-2">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">形状</div>
            <div class="flex space-x-2">
              <button 
                v-for="shape in ['circle', 'ellipse']" 
                :key="shape"
                @click="radialShape = shape"
                class="px-3 py-1 text-sm rounded"
                :class="{
                  'bg-primary text-white': radialShape === shape,
                  'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': radialShape !== shape
                }"
              >
                {{ shape === 'circle' ? '圆形' : '椭圆形' }}
              </button>
            </div>
          </div>
          
          <!-- 径向渐变位置控制 -->
          <div v-if="gradientType === 'radial'" class="space-y-2">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">位置</div>
            <div class="grid grid-cols-3 gap-2">
              <button 
                v-for="pos in ['left top', 'center top', 'right top', 'left center', 'center', 'right center', 'left bottom', 'center bottom', 'right bottom']" 
                :key="pos"
                @click="radialPosition = pos"
                class="p-2 text-xs rounded border"
                :class="{
                  'border-primary bg-primary bg-opacity-10': radialPosition === pos,
                  'border-gray-300 dark:border-gray-600': radialPosition !== pos
                }"
              >
                {{ getPositionLabel(pos) }}
              </button>
            </div>
          </div>
          
          <!-- 色标管理 -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">色标</div>
              <button 
                @click="addColorStop" 
                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-200"
                :disabled="colorStops.length >= 10"
              >
                添加色标
              </button>
            </div>
            
            <!-- 色标条预览 -->
            <div class="relative h-8 rounded-md overflow-hidden bg-checkerboard">
              <div 
                class="absolute inset-0"
                :style="{ background: gradientCSS }"
              ></div>
              
              <div 
                v-for="(stop, index) in colorStops"
                :key="index"
                class="absolute top-0 bottom-0 w-2 cursor-move"
                :style="{ left: `calc(${stop.position}% - 4px)` }"
                @mousedown="startDragStop($event, index)"
                @touchstart="startDragStop($event, index)"
              >
                <div 
                  class="w-4 h-4 rounded-full border-2 border-white shadow-md"
                  :style="{ 
                    backgroundColor: stop.color,
                    top: '100%',
                    transform: 'translateY(-50%)',
                    position: 'relative'
                  }"
                ></div>
              </div>
            </div>
            
            <!-- 色标列表 -->
            <div class="space-y-2 mt-4">
              <div 
                v-for="(stop, index) in colorStops" 
                :key="index"
                class="flex items-center space-x-2 p-2 rounded-md bg-gray-50 dark:bg-gray-700"
              >
                <div 
                  class="w-6 h-6 rounded-md cursor-pointer border border-gray-300 dark:border-gray-600"
                  :style="{ backgroundColor: stop.color }"
                  @click="openColorPicker(index)"
                ></div>
                <input 
                  type="text" 
                  v-model="stop.color"
                  class="flex-grow p-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                />
                <input 
                  type="number" 
                  v-model.number="stop.position"
                  min="0"
                  max="100"
                  class="w-16 p-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                />
                <span class="text-xs text-gray-500 dark:text-gray-400">%</span>
                <button 
                  @click="removeColorStop(index)"
                  class="p-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                  :disabled="colorStops.length <= 2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右侧：CSS代码 -->
      <div class="space-y-4">
        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">生成的CSS</div>
        
        <div class="space-y-2">
          <!-- 现代浏览器代码 -->
          <div class="space-y-1">
            <div class="text-xs text-gray-500 dark:text-gray-400">标准语法</div>
            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
              <pre class="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{{ standardCSS }}</pre>
            </div>
          </div>
          
          <!-- WebKit前缀代码 -->
          <div class="space-y-1">
            <div class="text-xs text-gray-500 dark:text-gray-400">WebKit前缀</div>
            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
              <pre class="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{{ webkitCSS }}</pre>
            </div>
          </div>
          
          <!-- 完整CSS代码 -->
          <div class="space-y-1">
            <div class="text-xs text-gray-500 dark:text-gray-400">完整CSS代码</div>
            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
              <pre class="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{{ fullCSS }}</pre>
            </div>
          </div>
        </div>
        
        <!-- 预设模板 -->
        <div class="mt-6">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">渐变预设</div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <button 
              v-for="(preset, index) in gradientPresets" 
              :key="index"
              @click="applyPreset(preset)"
              class="h-12 rounded-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div class="h-full w-full" :style="{ background: preset.css }"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 渐变类型
const gradientType = ref('linear')
// 线性渐变角度
const angle = ref(90)
// 径向渐变形状
const radialShape = ref('circle')
// 径向渐变位置
const radialPosition = ref('center')

// 色标
const colorStops = ref([
  { color: '#FF5F6D', position: 0 },
  { color: '#FFC371', position: 100 }
])

// 状态消息
const message = ref('')
const messageType = ref('success')

// 计算生成的CSS
const gradientCSS = computed(() => {
  if (gradientType.value === 'linear') {
    return `linear-gradient(${angle.value}deg, ${colorStops.value.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`
  } else {
    return `radial-gradient(${radialShape.value} at ${radialPosition.value}, ${colorStops.value.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`
  }
})

// 标准CSS语法
const standardCSS = computed(() => {
  return `background: ${gradientCSS.value};`
})

// WebKit前缀CSS
const webkitCSS = computed(() => {
  if (gradientType.value === 'linear') {
    return `background: -webkit-linear-gradient(${convertAngleForWebkit(angle.value)}, ${colorStops.value.map(stop => `${stop.color} ${stop.position}%`).join(', ')});`
  } else {
    return `background: -webkit-radial-gradient(${radialPosition.value}, ${radialShape.value}, ${colorStops.value.map(stop => `${stop.color} ${stop.position}%`).join(', ')});`
  }
})

// 完整CSS代码
const fullCSS = computed(() => {
  return `/* 渐变背景 */
${webkitCSS.value}
${standardCSS.value}`
})

// 转换角度以兼容旧版WebKit
function convertAngleForWebkit(deg) {
  // WebKit使用的是反方向的角度，需要转换
  const oldWebkitAngle = (450 - deg) % 360
  return `${oldWebkitAngle}deg`
}

// 渐变预设
const gradientPresets = [
  { name: '日落', css: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%)', type: 'linear', angle: 45, stops: [{ color: '#ff9a9e', position: 0 }, { color: '#fad0c4', position: 100 }] },
  { name: '深海', css: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', type: 'linear', angle: 90, stops: [{ color: '#4facfe', position: 0 }, { color: '#00f2fe', position: 100 }] },
  { name: '紫梦', css: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', type: 'linear', angle: 135, stops: [{ color: '#667eea', position: 0 }, { color: '#764ba2', position: 100 }] },
  { name: '青草', css: 'linear-gradient(to right, #00b09b, #96c93d)', type: 'linear', angle: 90, stops: [{ color: '#00b09b', position: 0 }, { color: '#96c93d', position: 100 }] },
  { name: '橙光', css: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)', type: 'linear', angle: 90, stops: [{ color: '#f83600', position: 0 }, { color: '#f9d423', position: 100 }] },
  { name: '雾霾', css: 'radial-gradient(circle at center, #2b5876, #4e4376)', type: 'radial', shape: 'circle', position: 'center', stops: [{ color: '#2b5876', position: 0 }, { color: '#4e4376', position: 100 }] }
]

// 拖动状态
let dragIndex = -1
let isDragging = false

// 添加色标
function addColorStop() {
  if (colorStops.value.length >= 10) return
  
  // 找到中间位置
  const positions = colorStops.value.map(stop => stop.position).sort((a, b) => a - b)
  let newPos = 50
  
  // 找两个相邻色标之间的最大间距
  let maxGap = 0
  let gapPos = 50
  
  for (let i = 0; i < positions.length - 1; i++) {
    const gap = positions[i + 1] - positions[i]
    if (gap > maxGap) {
      maxGap = gap
      gapPos = positions[i] + gap / 2
    }
  }
  
  // 添加新色标
  colorStops.value.push({
    // 根据位置生成合适的颜色
    color: getInterpolatedColor(gapPos),
    position: gapPos
  })
  
  // 排序
  colorStops.value.sort((a, b) => a.position - b.position)
}

// 根据位置插值计算颜色
function getInterpolatedColor(position) {
  // 找到紧邻的两个色标
  let beforeStop = null
  let afterStop = null
  
  for (const stop of colorStops.value) {
    if (stop.position <= position && (!beforeStop || stop.position > beforeStop.position)) {
      beforeStop = stop
    }
    if (stop.position >= position && (!afterStop || stop.position < afterStop.position)) {
      afterStop = stop
    }
  }
  
  // 如果没有找到邻近色标，返回默认颜色
  if (!beforeStop && !afterStop) {
    return '#666666'
  }
  
  // 如果只找到一个邻近色标，返回该色标的颜色
  if (!beforeStop) return afterStop.color
  if (!afterStop) return beforeStop.color
  
  // 如果位置正好在某个色标上，返回该色标的颜色
  if (beforeStop.position === position) return beforeStop.color
  if (afterStop.position === position) return afterStop.color
  
  // 计算颜色插值
  const ratio = (position - beforeStop.position) / (afterStop.position - beforeStop.position)
  
  // 将颜色转换为RGB进行插值
  const beforeRGB = hexToRgb(beforeStop.color)
  const afterRGB = hexToRgb(afterStop.color)
  
  if (!beforeRGB || !afterRGB) {
    return beforeStop.color // 如果转换失败，返回前一个色标颜色
  }
  
  // 线性插值
  const resultRGB = {
    r: Math.round(beforeRGB.r + (afterRGB.r - beforeRGB.r) * ratio),
    g: Math.round(beforeRGB.g + (afterRGB.g - beforeRGB.g) * ratio),
    b: Math.round(beforeRGB.b + (afterRGB.b - beforeRGB.b) * ratio)
  }
  
  return rgbToHex(resultRGB)
}

// Hex颜色转RGB
function hexToRgb(hex) {
  // 移除#号
  hex = hex.replace(/^#/, '')
  
  // 标准化为6位
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  
  // 解析RGB值
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  
  // 验证是否有效
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null
  }
  
  return { r, g, b }
}

// RGB转Hex
function rgbToHex(rgb) {
  return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)}`
}

// 移除色标
function removeColorStop(index) {
  if (colorStops.value.length <= 2) return // 保留至少两个色标
  colorStops.value.splice(index, 1)
}

// 获取位置标签
function getPositionLabel(pos) {
  const map = {
    'left top': '左上',
    'center top': '上',
    'right top': '右上',
    'left center': '左',
    'center': '中',
    'right center': '右',
    'left bottom': '左下',
    'center bottom': '下',
    'right bottom': '右下'
  }
  return map[pos] || pos
}

// 开始拖动色标
function startDragStop(event, index) {
  event.preventDefault()
  dragIndex = index
  isDragging = true
  
  document.addEventListener('mousemove', handleDragMove)
  document.addEventListener('touchmove', handleDragMove)
  document.addEventListener('mouseup', stopDragStop)
  document.addEventListener('touchend', stopDragStop)
}

// 处理拖动移动
function handleDragMove(event) {
  if (!isDragging || dragIndex === -1) return
  
  const colorBar = event.target.closest('.rounded-md.overflow-hidden')
  if (!colorBar) return
  
  const rect = colorBar.getBoundingClientRect()
  const clientX = event.clientX || (event.touches && event.touches[0].clientX)
  
  if (!clientX) return
  
  let position = ((clientX - rect.left) / rect.width) * 100
  position = Math.max(0, Math.min(100, position))
  
  colorStops.value[dragIndex].position = Math.round(position)
  
  // 保持排序
  colorStops.value.sort((a, b) => a.position - b.position)
  
  // 更新当前拖动的索引
  dragIndex = colorStops.value.findIndex(stop => stop === colorStops.value[dragIndex])
}

// 停止拖动
function stopDragStop() {
  isDragging = false
  dragIndex = -1
  
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('touchmove', handleDragMove)
  document.removeEventListener('mouseup', stopDragStop)
  document.removeEventListener('touchend', stopDragStop)
}

// 复制CSS代码
async function copyCSS() {
  try {
    await navigator.clipboard.writeText(fullCSS.value)
    showMessage('CSS代码已复制到剪贴板', 'success')
  } catch (error) {
    showMessage('复制失败，请手动复制', 'error')
  }
}

// 重置渐变
function resetGradient() {
  gradientType.value = 'linear'
  angle.value = 90
  radialShape.value = 'circle'
  radialPosition.value = 'center'
  colorStops.value = [
    { color: '#FF5F6D', position: 0 },
    { color: '#FFC371', position: 100 }
  ]
}

// 应用预设
function applyPreset(preset) {
  gradientType.value = preset.type
  
  if (preset.type === 'linear') {
    angle.value = preset.angle
  } else {
    radialShape.value = preset.shape
    radialPosition.value = preset.position
  }
  
  colorStops.value = [...preset.stops]
  
  showMessage('已应用预设', 'success')
}

// 打开颜色选择器
function openColorPicker(index) {
  // 这里简单使用浏览器原生的颜色选择器
  const input = document.createElement('input')
  input.type = 'color'
  input.value = colorStops.value[index].color
  
  input.addEventListener('input', (e) => {
    colorStops.value[index].color = e.target.value
  })
  
  input.click()
}

// 显示消息
function showMessage(msg, type = 'success') {
  message.value = msg
  messageType.value = type
  
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 组件卸载时清理事件
onUnmounted(() => {
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('touchmove', handleDragMove)
  document.removeEventListener('mouseup', stopDragStop)
  document.removeEventListener('touchend', stopDragStop)
})
</script>

<style scoped>
.bg-checkerboard {
  background-image: 
    linear-gradient(45deg, #ccc 25%, transparent 25%), 
    linear-gradient(-45deg, #ccc 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, #ccc 75%), 
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

/* 优化滑块样式 */
input[type=range] {
  -webkit-appearance: none;
  height: 8px;
  border-radius: 4px;
  background: #f0f0f0;
  outline: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style> 