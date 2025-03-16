<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h1 class="text-2xl font-bold mb-4">渐变配色生成器</h1>
    <p class="mb-6 text-gray-600 dark:text-gray-400">
      创建并自定义漂亮的CSS渐变，实时预览效果，复制代码到您的项目中。
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧控制面板 -->
      <div class="lg:col-span-1 space-y-6">
        <!-- 渐变类型选择 -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h2 class="text-lg font-semibold mb-3">渐变类型</h2>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="type in gradientTypes" 
              :key="type.value"
              @click="gradientType = type.value"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                gradientType === type.value 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
              ]"
            >
              {{ type.label }}
            </button>
          </div>
        </div>

        <!-- 颜色控制 -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold">颜色控制</h2>
            <button 
              @click="addColorStop" 
              class="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors"
              :disabled="colorStops.length >= 10"
            >
              添加颜色
            </button>
          </div>
          
          <div class="relative h-8 mb-4 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden">
            <div 
              class="w-full h-full" 
              :style="{ 
                background: previewGradient,
                borderRadius: '0.25rem'
              }"
            ></div>
            
            <div 
              v-for="(stop, index) in colorStops" 
              :key="index"
              class="absolute top-0 cursor-pointer"
              :style="{ left: `${stop.position}%` }"
              @mousedown="startDrag(index, $event)"
            >
              <div 
                class="w-4 h-8 -ml-2 border-2 border-white dark:border-gray-900 shadow-md hover:scale-110 transition-transform"
                :style="{ backgroundColor: stop.color }"
                :class="{ 'ring-2 ring-blue-500': selectedStopIndex === index }"
                @click="selectStop(index)"
              ></div>
            </div>
          </div>
          
          <div v-if="selectedStopIndex !== null" class="space-y-3">
            <div>
              <label class="block text-sm font-medium mb-1">颜色</label>
              <div class="flex">
                <input 
                  type="color" 
                  v-model="colorStops[selectedStopIndex].color"
                  class="w-12 h-10 p-0 border-0 rounded-l-md cursor-pointer"
                >
                <input 
                  type="text" 
                  v-model="colorStops[selectedStopIndex].color"
                  class="flex-1 p-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-r-md"
                  pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                  placeholder="#RRGGBB"
                  @input="validateHexColor"
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">位置 ({{ colorStops[selectedStopIndex].position }}%)</label>
              <input 
                type="range" 
                v-model.number="colorStops[selectedStopIndex].position"
                min="0" 
                max="100" 
                step="1"
                class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
              >
            </div>
            
            <div class="flex justify-between">
              <button 
                @click="removeStop(selectedStopIndex)" 
                class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                :disabled="colorStops.length <= 2"
              >
                删除此颜色
              </button>
              <button 
                @click="selectedStopIndex = null" 
                class="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded"
              >
                完成编辑
              </button>
            </div>
          </div>
        </div>
        
        <!-- 渐变方向控制 -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h2 class="text-lg font-semibold mb-3">
            {{ gradientType === 'linear' ? '渐变角度' : '渐变位置' }}
          </h2>
          
          <div v-if="gradientType === 'linear'">
            <label class="block text-sm font-medium mb-1">角度 ({{ angle }}°)</label>
            <input 
              type="range" 
              v-model.number="angle"
              min="0" 
              max="360" 
              step="1"
              class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            >
            <div class="flex justify-between mt-2">
              <button 
                v-for="preset in anglePresets" 
                :key="preset.value"
                @click="angle = preset.value"
                class="p-1 text-xs bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded"
              >
                {{ preset.label }}
              </button>
            </div>
          </div>
          
          <div v-else-if="gradientType === 'radial'">
            <div class="mb-3">
              <label class="block text-sm font-medium mb-1">形状</label>
              <div class="flex gap-2">
                <button 
                  v-for="shape in radialShapes" 
                  :key="shape.value"
                  @click="radialShape = shape.value"
                  :class="[
                    'px-3 py-1 rounded text-sm font-medium transition-colors',
                    radialShape === shape.value 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
                  ]"
                >
                  {{ shape.label }}
                </button>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium mb-1">X位置 ({{ positionX }}%)</label>
                <input 
                  type="range" 
                  v-model.number="positionX"
                  min="0" 
                  max="100" 
                  step="1"
                  class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                >
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Y位置 ({{ positionY }}%)</label>
                <input 
                  type="range" 
                  v-model.number="positionY"
                  min="0" 
                  max="100" 
                  step="1"
                  class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                >
              </div>
            </div>
            
            <div class="mt-3">
              <label class="block text-sm font-medium mb-1">尺寸</label>
              <div class="flex gap-2">
                <button 
                  v-for="size in radialSizes" 
                  :key="size.value"
                  @click="radialSize = size.value"
                  :class="[
                    'px-2 py-1 rounded text-xs font-medium transition-colors',
                    radialSize === size.value 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
                  ]"
                >
                  {{ size.label }}
                </button>
              </div>
            </div>
          </div>
          
          <div v-else-if="gradientType === 'conic'">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium mb-1">开始角度 ({{ fromAngle }}°)</label>
                <input 
                  type="range" 
                  v-model.number="fromAngle"
                  min="0" 
                  max="360" 
                  step="1"
                  class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                >
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">X位置 ({{ positionX }}%)</label>
                <input 
                  type="range" 
                  v-model.number="positionX"
                  min="0" 
                  max="100" 
                  step="1"
                  class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                >
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Y位置 ({{ positionY }}%)</label>
                <input 
                  type="range" 
                  v-model.number="positionY"
                  min="0" 
                  max="100" 
                  step="1"
                  class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 中央预览和代码区域 -->
      <div class="lg:col-span-2 space-y-6">
        <!-- 预览区域 -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold">渐变预览</h2>
            <button 
              @click="downloadGradient" 
              class="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              下载PNG
            </button>
          </div>
          
          <div 
            ref="previewElement" 
            class="w-full h-64 rounded-lg shadow-inner transition-all duration-500 cursor-pointer"
            :style="{ background: previewGradient }"
            @click="copyGradientCSS"
          >
            <div v-if="showCopiedMessage" class="flex items-center justify-center h-full bg-black bg-opacity-50 rounded-lg transition-opacity">
              <div class="px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                <p class="text-center text-green-600 dark:text-green-400 font-medium">CSS已复制到剪贴板!</p>
              </div>
            </div>
          </div>
          <p class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">点击预览区域复制CSS代码</p>
        </div>
        
        <!-- CSS代码 -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold">CSS代码</h2>
            <button 
              @click="copyGradientCSS" 
              class="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              复制
            </button>
          </div>
          
          <div class="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto">
            <pre><code>{{ cssCode }}</code></pre>
          </div>
        </div>
        
        <!-- 快速预设 -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h2 class="text-lg font-semibold mb-3">渐变预设</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <div 
              v-for="(preset, index) in presets" 
              :key="index"
              class="h-16 rounded-md shadow-sm cursor-pointer hover:scale-105 transition-transform"
              :style="{ background: preset.gradient }"
              @click="applyPreset(preset)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 渐变类型
const gradientTypes = [
  { label: '线性渐变', value: 'linear' },
  { label: '径向渐变', value: 'radial' },
  { label: '锥形渐变', value: 'conic' }
]
const gradientType = ref('linear')

// 色标数据
const colorStops = ref([
  { color: '#3498db', position: 0 },
  { color: '#9b59b6', position: 100 }
])
const selectedStopIndex = ref(null)

// 线性渐变角度
const angle = ref(90)
const anglePresets = [
  { label: '上', value: 0 },
  { label: '右上', value: 45 },
  { label: '右', value: 90 },
  { label: '右下', value: 135 },
  { label: '下', value: 180 },
  { label: '左下', value: 225 },
  { label: '左', value: 270 },
  { label: '左上', value: 315 }
]

// 径向渐变选项
const radialShape = ref('circle')
const radialShapes = [
  { label: '圆形', value: 'circle' },
  { label: '椭圆', value: 'ellipse' }
]
const radialSize = ref('farthest-corner')
const radialSizes = [
  { label: '最远角', value: 'farthest-corner' },
  { label: '最近角', value: 'closest-corner' },
  { label: '最远边', value: 'farthest-side' },
  { label: '最近边', value: 'closest-side' }
]

// 锥形渐变选项
const fromAngle = ref(0)

// 位置控制（用于径向和锥形）
const positionX = ref(50)
const positionY = ref(50)

// 拖拽逻辑
const isDragging = ref(false)
const dragStopIndex = ref(null)

// 复制消息
const showCopiedMessage = ref(false)

// 预览元素引用
const previewElement = ref(null)

// 根据当前设置生成预览渐变
const previewGradient = computed(() => {
  if (gradientType.value === 'linear') {
    return generateLinearGradient()
  } else if (gradientType.value === 'radial') {
    return generateRadialGradient()
  } else {
    return generateConicGradient()
  }
})

// 生成CSS代码
const cssCode = computed(() => {
  let code = 'background: '
  
  if (gradientType.value === 'linear') {
    code += `linear-gradient(${angle.value}deg, `
  } else if (gradientType.value === 'radial') {
    code += `radial-gradient(${radialShape.value} ${radialSize.value} at ${positionX.value}% ${positionY.value}%, `
  } else {
    code += `conic-gradient(from ${fromAngle.value}deg at ${positionX.value}% ${positionY.value}%, `
  }
  
  // 添加颜色
  const sortedStops = [...colorStops.value].sort((a, b) => a.position - b.position)
  code += sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ')
  code += ');'
  
  return code
})

// 生成线性渐变
function generateLinearGradient() {
  const sortedStops = [...colorStops.value].sort((a, b) => a.position - b.position)
  return `linear-gradient(${angle.value}deg, ${sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`
}

// 生成径向渐变
function generateRadialGradient() {
  const sortedStops = [...colorStops.value].sort((a, b) => a.position - b.position)
  return `radial-gradient(${radialShape.value} ${radialSize.value} at ${positionX.value}% ${positionY.value}%, ${sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`
}

// 生成锥形渐变
function generateConicGradient() {
  const sortedStops = [...colorStops.value].sort((a, b) => a.position - b.position)
  return `conic-gradient(from ${fromAngle.value}deg at ${positionX.value}% ${positionY.value}%, ${sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`
}

// 选择色标
function selectStop(index) {
  selectedStopIndex.value = index
}

// 添加新色标
function addColorStop() {
  if (colorStops.value.length >= 10) return
  
  // 查找最大间隔
  const sortedStops = [...colorStops.value].sort((a, b) => a.position - b.position)
  let maxGap = 0
  let gapPosition = 50
  
  for (let i = 0; i < sortedStops.length - 1; i++) {
    const gap = sortedStops[i + 1].position - sortedStops[i].position
    if (gap > maxGap) {
      maxGap = gap
      gapPosition = sortedStops[i].position + gap / 2
    }
  }
  
  // 通过混合颜色创建中间色
  const prevIndex = sortedStops.findIndex(s => s.position >= gapPosition) - 1
  const nextIndex = prevIndex + 1
  
  const prevColor = sortedStops[prevIndex]?.color || '#000000'
  const nextColor = sortedStops[nextIndex]?.color || '#ffffff'
  
  const newColor = blendColors(prevColor, nextColor)
  
  colorStops.value.push({
    color: newColor,
    position: Math.round(gapPosition)
  })
  
  selectedStopIndex.value = colorStops.value.length - 1
}

// 移除色标
function removeStop(index) {
  if (colorStops.value.length <= 2) return
  
  colorStops.value.splice(index, 1)
  selectedStopIndex.value = null
}

// 混合两个颜色
function blendColors(color1, color2) {
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)
  
  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)
  
  const r = Math.floor((r1 + r2) / 2)
  const g = Math.floor((g1 + g2) / 2)
  const b = Math.floor((b1 + b2) / 2)
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

// 验证十六进制颜色
function validateHexColor(event) {
  const input = event.target
  const value = input.value
  
  // 简单的十六进制颜色验证
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
    input.setCustomValidity('请输入有效的十六进制颜色，例如 #FF0000')
  } else {
    input.setCustomValidity('')
  }
}

// 复制CSS到剪贴板
function copyGradientCSS() {
  navigator.clipboard.writeText(cssCode.value).then(() => {
    showCopiedMessage.value = true
    setTimeout(() => {
      showCopiedMessage.value = false
    }, 2000)
  }).catch(err => {
    console.error('无法复制到剪贴板:', err)
  })
}

// 拖拽色标开始
function startDrag(index, event) {
  isDragging.value = true
  dragStopIndex.value = index
  selectStop(index)
  
  document.addEventListener('mousemove', handleDrag)
  document.addEventListener('mouseup', stopDrag)
  
  // 阻止默认行为和冒泡
  event.preventDefault()
  event.stopPropagation()
}

// 处理拖拽过程
function handleDrag(event) {
  if (!isDragging.value || dragStopIndex.value === null) return
  
  const containerRect = event.target.closest('.relative').getBoundingClientRect()
  const x = event.clientX - containerRect.left
  
  // 计算位置百分比（限制在0-100之间）
  let position = Math.max(0, Math.min(100, (x / containerRect.width) * 100))
  
  // 更新位置
  colorStops.value[dragStopIndex.value].position = Math.round(position)
}

// 停止拖拽
function stopDrag() {
  isDragging.value = false
  dragStopIndex.value = null
  
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
}

// 下载渐变为PNG
function downloadGradient() {
  if (!previewElement.value) return
  
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 600
  
  const ctx = canvas.getContext('2d')
  
  // 创建渐变
  let gradient
  
  if (gradientType.value === 'linear') {
    // 转换角度为坐标
    const angleRad = (angle.value - 90) * Math.PI / 180
    const x0 = 400 - Math.cos(angleRad) * 400
    const y0 = 300 - Math.sin(angleRad) * 300
    const x1 = 400 + Math.cos(angleRad) * 400
    const y1 = 300 + Math.sin(angleRad) * 300
    
    gradient = ctx.createLinearGradient(x0, y0, x1, y1)
  } else if (gradientType.value === 'radial') {
    const x = (positionX.value / 100) * 800
    const y = (positionY.value / 100) * 600
    
    // 计算半径（使用较大尺寸）
    const radiusX = radialShape.value === 'circle' ? Math.max(800, 600) : 800
    const radiusY = radialShape.value === 'circle' ? Math.max(800, 600) : 600
    
    gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(radiusX, radiusY))
  } else {
    // 锥形渐变在Canvas中没有直接API，创建近似效果
    ctx.translate((positionX.value / 100) * 800, (positionY.value / 100) * 600)
    ctx.rotate((fromAngle.value * Math.PI) / 180)
    
    // 用多个扇形近似锥形渐变
    const sortedStops = [...colorStops.value].sort((a, b) => a.position - b.position)
    
    for (let i = 0; i < sortedStops.length - 1; i++) {
      const startAngle = (sortedStops[i].position / 100) * 2 * Math.PI
      const endAngle = (sortedStops[i + 1].position / 100) * 2 * Math.PI
      
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, 1000, startAngle, endAngle)
      ctx.closePath()
      
      ctx.fillStyle = sortedStops[i].color
      ctx.fill()
    }
    
    // 重置变换
    ctx.resetTransform()
    
    // 创建下载链接
    const link = document.createElement('a')
    link.download = 'gradient.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
    
    return
  }
  
  // 添加色标
  const sortedStops = [...colorStops.value].sort((a, b) => a.position - b.position)
  sortedStops.forEach(stop => {
    gradient.addColorStop(stop.position / 100, stop.color)
  })
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 800, 600)
  
  // 创建下载链接
  const link = document.createElement('a')
  link.download = 'gradient.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
}

// 预设渐变
const presets = [
  { gradient: 'linear-gradient(90deg, #3498db 0%, #9b59b6 100%)', type: 'linear', angle: 90, stops: [{ color: '#3498db', position: 0 }, { color: '#9b59b6', position: 100 }] },
  { gradient: 'linear-gradient(45deg, #f1c40f 0%, #e74c3c 100%)', type: 'linear', angle: 45, stops: [{ color: '#f1c40f', position: 0 }, { color: '#e74c3c', position: 100 }] },
  { gradient: 'linear-gradient(135deg, #1abc9c 0%, #3498db 50%, #9b59b6 100%)', type: 'linear', angle: 135, stops: [{ color: '#1abc9c', position: 0 }, { color: '#3498db', position: 50 }, { color: '#9b59b6', position: 100 }] },
  { gradient: 'linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%)', type: 'linear', angle: 90, stops: [{ color: '#d4fc79', position: 0 }, { color: '#96e6a1', position: 100 }] },
  { gradient: 'linear-gradient(180deg, #2980b9 0%, #6dd5fa 50%, #ffffff 100%)', type: 'linear', angle: 180, stops: [{ color: '#2980b9', position: 0 }, { color: '#6dd5fa', position: 50 }, { color: '#ffffff', position: 100 }] },
  { gradient: 'linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%)', type: 'linear', angle: 90, stops: [{ color: '#ff9a9e', position: 0 }, { color: '#fad0c4', position: 100 }] },
  { gradient: 'radial-gradient(circle at 50% 50%, #b8cbb8 0%, #b8cbb8 0%, #b465da 100%)', type: 'radial', radialShape: 'circle', positionX: 50, positionY: 50, radialSize: 'farthest-corner', stops: [{ color: '#b8cbb8', position: 0 }, { color: '#b8cbb8', position: 0 }, { color: '#b465da', position: 100 }] },
  { gradient: 'radial-gradient(circle at 20% 80%, #43e97b 0%, #38f9d7 100%)', type: 'radial', radialShape: 'circle', positionX: 20, positionY: 80, radialSize: 'farthest-corner', stops: [{ color: '#43e97b', position: 0 }, { color: '#38f9d7', position: 100 }] },
  { gradient: 'conic-gradient(from 0deg at 50% 50%, red, yellow, lime, aqua, blue, magenta, red)', type: 'conic', fromAngle: 0, positionX: 50, positionY: 50, stops: [{ color: '#ff0000', position: 0 }, { color: '#ffff00', position: 17 }, { color: '#00ff00', position: 33 }, { color: '#00ffff', position: 50 }, { color: '#0000ff', position: 67 }, { color: '#ff00ff', position: 83 }, { color: '#ff0000', position: 100 }] },
  { gradient: 'conic-gradient(from 90deg at 50% 50%, #fff 0%, #000 50%, #fff 100%)', type: 'conic', fromAngle: 90, positionX: 50, positionY: 50, stops: [{ color: '#ffffff', position: 0 }, { color: '#000000', position: 50 }, { color: '#ffffff', position: 100 }] },
  { gradient: 'linear-gradient(to right, #8e2de2, #4a00e0)', type: 'linear', angle: 90, stops: [{ color: '#8e2de2', position: 0 }, { color: '#4a00e0', position: 100 }] },
  { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', type: 'linear', angle: 135, stops: [{ color: '#667eea', position: 0 }, { color: '#764ba2', position: 100 }] }
]

// 应用预设
function applyPreset(preset) {
  gradientType.value = preset.type
  
  // 设置对应的参数
  if (preset.type === 'linear') {
    angle.value = preset.angle
  } else if (preset.type === 'radial') {
    radialShape.value = preset.radialShape
    positionX.value = preset.positionX
    positionY.value = preset.positionY
    radialSize.value = preset.radialSize
  } else {
    fromAngle.value = preset.fromAngle
    positionX.value = preset.positionX
    positionY.value = preset.positionY
  }
  
  // 设置色标
  colorStops.value = [...preset.stops]
  selectedStopIndex.value = null
}

onMounted(() => {
  // 添加键盘事件监听器（用于删除色标）
  document.addEventListener('keydown', (e) => {
    if (selectedStopIndex.value !== null && (e.key === 'Delete' || e.key === 'Backspace')) {
      removeStop(selectedStopIndex.value)
    }
  })
})
</script>

<style scoped>
/* 自定义范围输入样式 */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
}

input[type=color] {
  -webkit-appearance: none;
  border: none;
}

input[type=color]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type=color]::-webkit-color-swatch {
  border: none;
  border-radius: 0.375rem 0 0 0.375rem;
}
</style> 