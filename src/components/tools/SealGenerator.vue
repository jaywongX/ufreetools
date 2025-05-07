<template>
  <div class="seal-generator-container">
    <!-- 工具控制面板 -->
    <div class="control-panel mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 印章文本配置 -->
        <div class="flex flex-col space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.text') }}</label>
            <input 
              v-model="sealText" 
              type="text" 
              :placeholder="$t('tools.seal-generator.textPlaceholder')"
              maxlength="20"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ sealText.length }}/20</p>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.centerText') }}</label>
            <input 
              v-model="centerText" 
              type="text" 
              :placeholder="$t('tools.seal-generator.centerTextPlaceholder')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.centerSymbol') }}</label>
            <div class="flex space-x-3">
              <button 
                v-for="symbol in centerSymbols" 
                :key="symbol"
                @click="centerText = symbol"
                class="w-10 h-10 flex items-center justify-center text-xl border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                :class="centerText === symbol ? 'border-primary' : 'border-gray-300 dark:border-gray-600'"
              >
                {{ symbol }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.centerSymbolSize') }}</label>
            <div class="flex items-center space-x-4">
              <input 
                v-model="centerSymbolSize" 
                type="range" 
                min="10" 
                max="80" 
                step="5"
                class="w-full"
              />
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ centerSymbolSize }}%</span>
            </div>
          </div>
          
          <!-- 字体选择 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.font') }}</label>
            <select 
              v-model="fontFamily" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="'SimSun', serif">{{ $t('tools.seal-generator.fonts.simsun') }}</option>
              <option value="'KaiTi', serif">{{ $t('tools.seal-generator.fonts.kaiti') }}</option>
              <option value="'SimHei', sans-serif">{{ $t('tools.seal-generator.fonts.simhei') }}</option>
              <option value="'Microsoft YaHei', sans-serif">{{ $t('tools.seal-generator.fonts.yahei') }}</option>
              <option value="'STXingkai', cursive">{{ $t('tools.seal-generator.fonts.stxingkai') }}</option>
              <option value="'STZhongsong', serif">{{ $t('tools.seal-generator.fonts.stzhongsong') }}</option>
              <option value="'STFangsong', serif">{{ $t('tools.seal-generator.fonts.stfangsong') }}</option>
              <option value="'Arial', sans-serif">{{ $t('tools.seal-generator.fonts.arial') }}</option>
              <option value="'Times New Roman', serif">{{ $t('tools.seal-generator.fonts.times') }}</option>
              <option value="'Georgia', serif">{{ $t('tools.seal-generator.fonts.georgia') }}</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.centerImage') }}</label>
            <input 
              type="file" 
              @change="handleImageUpload" 
              accept="image/*"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
            />
          </div>
        </div>
        
        <!-- 印章样式配置 -->
        <div class="flex flex-col space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.shape') }}</label>
            <div class="flex space-x-4">
              <button 
                @click="sealShape = 'circle'"
                :class="['py-2 px-4 rounded-md', sealShape === 'circle' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200']"
              >
                {{ $t('tools.seal-generator.shapes.circle') }}
              </button>
              <button 
                @click="sealShape = 'ellipse'"
                :class="['py-2 px-4 rounded-md', sealShape === 'ellipse' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200']"
              >
                {{ $t('tools.seal-generator.shapes.ellipse') }}
              </button>
              <button 
                @click="sealShape = 'square'"
                :class="['py-2 px-4 rounded-md', sealShape === 'square' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200']"
              >
                {{ $t('tools.seal-generator.shapes.square') }}
              </button>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.size') }}</label>
            <div class="flex flex-col md:flex-row gap-4">
              <!-- 滑块控制 -->
              <div class="flex items-center space-x-4 flex-1">
                <input 
                  v-model="sealSize" 
                  type="range" 
                  min="100" 
                  max="500" 
                  step="10"
                  class="w-full"
                  @input="updateSealDimensions"
                />
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ sealSize }}px</span>
              </div>
              
              <!-- 精确尺寸控制 -->
              <div class="flex gap-2">
                <div>
                  <label class="text-xs text-gray-600 dark:text-gray-400">{{ $t('tools.seal-generator.width') }}</label>
                  <input 
                    v-model.number="sealWidth" 
                    type="number" 
                    min="50" 
                    max="1000" 
                    class="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md"
                    @input="widthChanged = true"
                    @change="updateSizeFromDimensions"
                  />
                </div>
                <div v-if="sealShape !== 'circle'">
                  <label class="text-xs text-gray-600 dark:text-gray-400">{{ $t('tools.seal-generator.height') }}</label>
                  <input 
                    v-model.number="sealHeight" 
                    type="number" 
                    min="50" 
                    max="1000" 
                    class="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md"
                    @input="heightChanged = true"
                    @change="updateSizeFromDimensions"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.color') }}</label>
            <div class="flex flex-col space-y-3">
              <!-- 预设颜色面板 -->
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="color in colors" 
                  :key="color.value" 
                  @click="sealColor = color.value"
                  class="w-8 h-8 rounded-full border-2"
                  :class="sealColor === color.value ? 'border-primary' : 'border-transparent'"
                  :style="{ backgroundColor: color.value }"
                  :title="color.name"
                ></button>
              </div>
              
              <!-- 增强的颜色选择器 -->
              <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <div class="flex flex-col space-y-2">
                  <label class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.seal-generator.customColor') }}</label>
                  
                  <!-- 颜色选择器 -->
                  <div class="flex flex-col sm:flex-row gap-3">
                    <div class="flex-1">
                      <input 
                        v-model="sealColor" 
                        type="color" 
                        class="w-full h-10 cursor-pointer rounded border-0"
                      />
                    </div>
                    
                    <!-- 十六进制输入 -->
                    <div class="w-full sm:w-auto flex flex-col">
                      <label class="text-xs text-gray-600 dark:text-gray-400 mb-1">{{ $t('tools.seal-generator.colorHex') }}</label>
                      <input 
                        v-model="sealColor" 
                        type="text" 
                        pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                        class="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md"
                        maxlength="7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.bottomText') }}</label>
            <input 
              v-model="bottomText" 
              type="text" 
              :placeholder="$t('tools.seal-generator.bottomTextPlaceholder')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.template') }}</label>
            <select 
              v-model="selectedTemplate" 
              @change="applyTemplate"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="none">{{ $t('tools.seal-generator.templates.custom') }}</option>
              <option value="company">{{ $t('tools.seal-generator.templates.company') }}</option>
              <option value="contract">{{ $t('tools.seal-generator.templates.contract') }}</option>
              <option value="finance">{{ $t('tools.seal-generator.templates.finance') }}</option>
              <option value="legal">{{ $t('tools.seal-generator.templates.legal') }}</option>
              <option value="personal">{{ $t('tools.seal-generator.templates.personal') }}</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.lineWidth') }}</label>
            <div class="flex items-center space-x-4">
              <input 
                v-model="lineWidth" 
                type="range" 
                min="1" 
                max="15" 
                step="0.5"
                class="w-full"
              />
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ lineWidth }}</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.seal-generator.agingEffect') }}</label>
            <div class="flex items-center space-x-4">
              <input 
                v-model="agingEffect" 
                type="range" 
                min="0" 
                max="100" 
                step="1"
                class="w-full"
              />
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ agingEffect }}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="mt-6 flex flex-wrap gap-3">
        <button 
          @click="generateSeal" 
          class="btn-primary"
        >
          {{ $t('tools.seal-generator.generate') }}
        </button>
        
        <div class="flex items-center gap-2">
          <button 
            @click="downloadSeal" 
            class="btn-secondary"
            :disabled="!canvasGenerated"
          >
            {{ $t('tools.seal-generator.download') }}
          </button>
          
          <select 
            v-model="exportFormat" 
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WebP</option>
          </select>
        </div>
        
        <button 
          @click="resetSettings" 
          class="btn-outline"
        >
          {{ $t('tools.seal-generator.reset') }}
        </button>
      </div>
    </div>
    
    <!-- 印章预览区域 -->
    <div class="preview-area bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.seal-generator.preview') }}</h3>
      <div class="seal-canvas-container relative">
        <canvas ref="sealCanvas" class="mx-auto border border-gray-200 dark:border-gray-700 bg-white"></canvas>
        <div v-if="!canvasGenerated" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75">
          <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.seal-generator.previewPlaceholder') }}</p>
        </div>
      </div>
    </div>
    
    <!-- 使用说明 -->
    <div class="instructions mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.seal-generator.howToUse') }}</h3>
      <ol class="list-decimal ml-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <li>{{ $t('tools.seal-generator.instructions.step1') }}</li>
        <li>{{ $t('tools.seal-generator.instructions.step2') }}</li>
        <li>{{ $t('tools.seal-generator.instructions.step3') }}</li>
        <li>{{ $t('tools.seal-generator.instructions.step4') }}</li>
      </ol>
    </div>

    <SealGeneratorArticle />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import SealGeneratorArticle from './SealGeneratorArticle.vue'

const { t } = useI18n()

// 印章设置状态
const sealText = ref(t('tools.seal-generator.defaultSealText'))
const centerText = ref('★')
const fontFamily = ref("'SimSun', serif")
const sealShape = ref('circle')
const sealSize = ref(300)
const sealColor = ref('#c00')
const canvasGenerated = ref(false)
const bottomText = ref(t('tools.seal-generator.defaultBottomText'))
const selectedTemplate = ref('none')
const centerImage = ref(null)
const centerSymbolSize = ref(50) // 中心符号大小，百分比值
const exportFormat = ref('png')  // 导出格式
const lineWidth = ref(6) // 线条粗细
const sealWidth = ref(300)
const sealHeight = ref(300)
const widthChanged = ref(false)
const heightChanged = ref(false)
const agingEffect = ref(0) // 做旧效果程度
const showColorPicker = ref(false)

// 可选颜色 - 添加更多预设颜色
const colors = reactive([
  { name: t('tools.seal-generator.colors.red'), value: '#c00' },
  { name: t('tools.seal-generator.colors.darkRed'), value: '#8B0000' },
  { name: t('tools.seal-generator.colors.blue'), value: '#1664c0' },
  { name: t('tools.seal-generator.colors.navy'), value: '#000080' },
  { name: t('tools.seal-generator.colors.green'), value: '#2e7d32' },
  { name: t('tools.seal-generator.colors.darkGreen'), value: '#006400' },
  { name: t('tools.seal-generator.colors.purple'), value: '#6a1b9a' },
  { name: t('tools.seal-generator.colors.magenta'), value: '#8B008B' },
  { name: t('tools.seal-generator.colors.brown'), value: '#8B4513' },
  { name: t('tools.seal-generator.colors.black'), value: '#000' },
])

// Canvas 引用
const sealCanvas = ref(null)

// 预设中心符号
const centerSymbols = ['★', '✓', '❤', '✦', '◆', '章', '印', '']

// 生成印章
const generateSeal = () => {
  if (!sealCanvas.value) return
  
  const canvas = sealCanvas.value
  const ctx = canvas.getContext('2d')
  
  // 设置画布大小为用户指定的宽高
  canvas.width = sealWidth.value
  canvas.height = sealHeight.value
  
  // 清除画布
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  // 设置绘图样式
  ctx.fillStyle = sealColor.value
  ctx.strokeStyle = sealColor.value
  ctx.lineWidth = lineWidth.value
  
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  
  // 根据形状计算半径
  let radiusX, radiusY
  if (sealShape.value === 'circle') {
    radiusX = radiusY = (Math.min(canvas.width, canvas.height) / 2) - 10
  } else if (sealShape.value === 'ellipse') {
    radiusX = (canvas.width / 2) - 10
    radiusY = (canvas.height / 2) - 10
  } else {
    // 方形不需要半径
    radiusX = (canvas.width / 2) - 10
    radiusY = (canvas.height / 2) - 10
  }
  
  // 绘制印章外形
  if (sealShape.value === 'circle') {
    ctx.beginPath()
    ctx.arc(centerX, centerY, radiusX, 0, Math.PI * 2)
    ctx.stroke()
  } else if (sealShape.value === 'ellipse') {
    ctx.beginPath()
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2)
    ctx.stroke()
  } else {
    // 方形印章
    ctx.beginPath()
    ctx.rect(centerX - radiusX, centerY - radiusY, radiusX * 2, radiusY * 2)
    ctx.stroke()
  }
  
  // 计算基于印章大小的动态文字大小
  const textSize = Math.max(12, radiusX / 5); // 最小12px，确保小尺寸下仍然可见
  
  // 绘制环绕文字
  if (sealText.value) {
    ctx.font = `bold ${textSize}px ${fontFamily.value}`
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    
    // 为椭圆形状调整文本半径，避免与边缘重叠
    let textRadius
    if (sealShape.value === 'ellipse') {
      // 椭圆形状时，减小文本环绕的半径以避免与边缘重叠
      textRadius = radiusX - (radiusX * 0.21)
    } else {
      textRadius = radiusX - 20
    }
    
    const characters = sealText.value.split('')
    
    // 10个文字作为半圆
    const arcLength = Math.PI * characters.length / 10
    
    const angleStep = arcLength / (characters.length - 1 || 1) // 均匀分布
    
    // 修改：起始角度为左侧(Math.PI)，结束于右侧(0)
    let startAngle = Math.PI * 1.5 - arcLength / 2  // 左侧开始
    
    characters.forEach((char, index) => {
      // 计算每个字符的角度位置 - 从左(Math.PI)到右(0)
      const angle = startAngle + index * angleStep
      let x, y;
      
      if (sealShape.value === 'ellipse') {
        // 椭圆形状特殊处理
        const ellipseRadiusX = textRadius
        const ellipseRadiusY = textRadius * 0.7
        x = centerX + ellipseRadiusX * Math.cos(angle)
        y = centerY + ellipseRadiusY * Math.sin(angle)
      } else {
        x = centerX + textRadius * Math.cos(angle)
        y = centerY + textRadius * Math.sin(angle)
      }
      
      ctx.save()
      ctx.translate(x, y)
      
      // 添加旋转使文字垂直于圆周，头朝外
      // 椭圆形状需要特殊处理文字旋转角度
      if (sealShape.value === 'ellipse') {
        // 计算椭圆上点的切线方向
        const tangentAngle = Math.atan2(
          Math.sin(angle) * (textRadius * 0.7), 
          Math.cos(angle) * textRadius
        )
        ctx.rotate(tangentAngle + Math.PI/2)
      } else {
        ctx.rotate(angle + Math.PI/2)
      }
      
      ctx.fillText(char, 0, 0)
      ctx.restore()
    })
    
    // 绘制底部文字
    if (bottomText.value) {
      // 动态调整底部文字大小
      const bottomTextSize = Math.max(10, radiusX / 6);
      ctx.font = `bold ${bottomTextSize}px ${fontFamily.value}`
      ctx.textAlign = 'center'
      
      // 椭圆形状时，底部文字位置需要特殊处理
      if (sealShape.value === 'ellipse') {
        ctx.fillText(bottomText.value, centerX, centerY + radiusY * 0.55)
      } else {
        ctx.fillText(bottomText.value, centerX, centerY + radiusX * 0.6)
      }
    }
  }
  
  // 绘制中心图片或文字
  if (centerImage.value) {
    // 计算合适的尺寸 - 使用centerSymbolSize作为百分比
    const imgSize = radiusX * (centerSymbolSize.value / 100) * 2
    ctx.drawImage(
      centerImage.value, 
      centerX - imgSize/2, 
      centerY - imgSize/2, 
      imgSize, 
      imgSize
    )
  } else if (centerText.value) {
    // 使用centerSymbolSize作为百分比调整中心符号大小
    const symbolSize = radiusX * (centerSymbolSize.value / 100)
    ctx.font = `bold ${symbolSize}px ${fontFamily.value}`
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillText(centerText.value, centerX, centerY)
  }
  
  // 应用做旧效果
  if (agingEffect.value > 0) {
    applyAgingEffect(ctx, canvas.width, canvas.height)
  }
  
  canvasGenerated.value = true
}

// 下载印章图片
const downloadSeal = () => {
  if (!canvasGenerated.value || !sealCanvas.value) return

  // 创建临时链接
  const link = document.createElement('a')
  link.download = `seal-${Date.now()}.${exportFormat.value}`
  
  // 根据选择的格式设置导出类型
  let mimeType;
  switch(exportFormat.value) {
    case 'jpeg':
      mimeType = 'image/jpeg';
      break;
    case 'webp':
      mimeType = 'image/webp';
      break;
    default:
      mimeType = 'image/png';
  }
  
  link.href = sealCanvas.value.toDataURL(mimeType, 0.8)
  link.click()
}

// 添加 applyTemplate 方法
const applyTemplate = () => {
  switch(selectedTemplate.value) {
    case 'company':
      // 公司公章模板
      sealText.value = t('tools.seal-generator.defaultSealText')
      centerText.value = '★'
      bottomText.value = ''
      fontFamily.value = "'SimSun', serif"
      sealShape.value = 'circle'
      sealColor.value = '#c00'
      break;
    
    case 'contract':
      // 合同专用章模板
      sealText.value = t('tools.seal-generator.defaultSealText')
      centerText.value = '★'
      bottomText.value = t('tools.seal-generator.defaultBottomText')
      fontFamily.value = "'SimSun', serif"
      sealShape.value = 'circle'
      sealColor.value = '#c00'
      break;
    
    case 'finance':
      // 财务专用章模板
      sealText.value = t('tools.seal-generator.defaultSealText')
      centerText.value = '财'
      bottomText.value = '财务专用章'
      fontFamily.value = "'KaiTi', serif"
      sealShape.value = 'circle'
      sealColor.value = '#c00'
      break;
    
    case 'legal':
      // 法人名章模板
      sealText.value = '法人名章'
      centerText.value = '法'
      bottomText.value = ''
      fontFamily.value = "'KaiTi', serif"
      sealShape.value = 'square'
      sealColor.value = '#c00'
      break;
    
    case 'personal':
      // 个人私章模板
      sealText.value = ''
      centerText.value = '印'
      bottomText.value = ''
      fontFamily.value = "'KaiTi', serif"
      sealShape.value = 'square'
      sealColor.value = '#c00'
      break;
    
    default:
      // 自定义，不做任何修改
      break;
  }
  
  // 应用模板后自动生成印章
  generateSeal();
}

// 重置设置
const resetSettings = () => {
  sealText.value = t('tools.seal-generator.defaultSealText')
  centerText.value = '★'
  fontFamily.value = "'SimSun', serif"
  sealShape.value = 'circle'
  sealSize.value = 300
  sealColor.value = '#c00'
  bottomText.value = t('tools.seal-generator.defaultBottomText')
  selectedTemplate.value = 'none'
  centerImage.value = null
  
  // 清除画布
  if (sealCanvas.value) {
    const ctx = sealCanvas.value.getContext('2d')
    ctx.clearRect(0, 0, sealCanvas.value.width, sealCanvas.value.height)
    canvasGenerated.value = false
  }
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        centerImage.value = img
        generateSeal()
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// 监听设置变化，自动更新预览
watch(
  [sealText, centerText, fontFamily, sealShape, sealSize, sealColor, centerSymbolSize, bottomText, lineWidth, agingEffect, sealWidth, sealHeight],
  () => {
    // 当形状改变时，重置宽高标志
    if (sealShape.value === 'circle') {
      sealHeight.value = sealWidth.value
      heightChanged.value = false
    }
    
    // 更新尺寸
    updateSealDimensions()
    
    // 当任何设置变化时重新生成印章
    generateSeal()
  },
  { deep: true }
)

const updateSealDimensions = () => {
  if (!widthChanged.value) {
    sealWidth.value = sealSize.value
  }
  
  if (!heightChanged.value) {
    if (sealShape.value === 'ellipse') {
      sealHeight.value = Math.round(sealSize.value * 0.7)
    } else {
      sealHeight.value = sealSize.value
    }
  }
}

const updateSizeFromDimensions = () => {
  // 当手动输入尺寸时，以宽度为基准更新sealSize
  if (widthChanged.value) {
    sealSize.value = sealWidth.value
  }
  
  // 确保椭圆和方形的高度可以独立设置
  if (sealShape.value !== 'circle') {
    if (heightChanged.value) {
      // 高度已手动修改，不需要自动计算
    } else if (sealShape.value === 'ellipse' && !heightChanged.value) {
      // 椭圆形默认高度为宽度的0.7倍
      sealHeight.value = Math.round(sealWidth.value * 0.7)
    } else {
      // 方形默认高度等于宽度
      sealHeight.value = sealWidth.value
    }
  } else {
    // 圆形时高度等于宽度
    sealHeight.value = sealWidth.value
  }
}

// 添加做旧效果的函数
function applyAgingEffect(ctx, width, height) {
  const intensity = agingEffect.value / 100
  
  // 1. 添加纹理噪点
  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data
  
  for (let i = 0; i < data.length; i += 4) {
    // 只处理有颜色的像素（非透明）
    if (data[i+3] > 0) {
      // 随机噪点
      const noise = Math.random() * 0.3 * intensity
      data[i] = Math.min(255, data[i] * (1 - noise))
      data[i+1] = Math.min(255, data[i+1] * (1 - noise))
      data[i+2] = Math.min(255, data[i+2] * (1 - noise))
      
      // 随机添加间隙（使印章看起来不完整）
      if (Math.random() < 0.05 * intensity) {
        data[i+3] = 0 // 完全透明
      } else if (Math.random() < 0.2 * intensity) {
        data[i+3] = data[i+3] * (1 - Math.random() * intensity) // 部分透明
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0)
  
  // 2. 添加模糊效果
  if (intensity > 0.3) {
    ctx.filter = `blur(${intensity * 0.5}px)`
    ctx.drawImage(sealCanvas.value, 0, 0)
    ctx.filter = 'none'
  }
}

const isPresetColor = (color) => {
  return colors.some(c => c.value === color)
}

onMounted(() => {
  updateSealDimensions()
  generateSeal()
})
</script>

<style scoped>
.seal-generator-container {
  width: 100%;
}

.seal-canvas-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.btn-primary {
  @apply bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50;
}

.btn-secondary {
  @apply bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-outline {
  @apply border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50;
}

/* 移动端响应式样式 */
@media (max-width: 640px) {
  .seal-canvas-container canvas {
    max-width: 100%;
    height: auto;
  }
}
</style> 