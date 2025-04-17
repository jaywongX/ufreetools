<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.color-scheme-generator.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.color-scheme-generator.description') }}
      </p>
    </div>
    
    <!-- 主要内容区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
      <!-- 左侧：基础颜色选择 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.color-scheme-generator.baseColor.title') }}</h3>
        
        <!-- 颜色选择器 -->
        <div class="mb-4">
          <div class="flex items-center space-x-3 mb-3">
            <div 
              class="w-10 h-10 rounded-md border border-gray-300 dark:border-gray-600 cursor-pointer" 
              :style="{ backgroundColor: baseColor }"
              @click="openColorPicker"
            ></div>
            <input 
              ref="colorInput"
              type="color" 
              v-model="baseColor" 
              class="hidden"
            />
            <input 
              type="text" 
              v-model="baseColor" 
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              @input="validateColor"
              placeholder="#RRGGBB"
            />
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.color-scheme-generator.baseColor.hint') }}</div>
        </div>
        
        <!-- 配色方案类型选择 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.color-scheme-generator.schemeTypes.title') }} 
          </label>
          <div class="grid grid-cols-2 gap-2">
            <button 
              v-for="scheme in colorSchemes" 
              :key="scheme.id"
              @click="selectedScheme = scheme.id"
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors"
              :class="selectedScheme === scheme.id 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
            >
              {{ t(`tools.color-scheme-generator.schemeTypes.${scheme.id}`) }}
            </button>
          </div>
        </div>
        
        <!-- 颜色调整 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ t('tools.color-scheme-generator.messages.adjustmentParam') }}
            </label>
          
          <!-- 色相偏移 -->
          <div class="mb-3">
            <div class="flex justify-between mb-1">
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ t('tools.color-scheme-generator.sortOptions.hue') }}
              </span>
              <span class="text-xs text-gray-600 dark:text-gray-300">{{ hueShift }}°</span>
            </div>
            <input 
              type="range" 
              v-model="hueShift" 
              min="0" 
              max="360" 
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <!-- 饱和度调整 -->
          <div class="mb-3">
            <div class="flex justify-between mb-1">
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ t('tools.color-scheme-generator.sortOptions.saturation') }}
              </span>
              <span class="text-xs text-gray-600 dark:text-gray-300">{{ saturation }}%</span>
            </div>
            <input 
              type="range" 
              v-model="saturation" 
              min="0" 
              max="100" 
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <!-- 明度调整 -->
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ t('tools.color-scheme-generator.sortOptions.brightness') }}
              </span>
              <span class="text-xs text-gray-600 dark:text-gray-300">{{ brightness }}%</span>
            </div>
            <input 
              type="range" 
              v-model="brightness" 
              min="0" 
              max="100" 
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        <!-- 随机生成按钮 -->
        <button 
          @click="generateRandomColor" 
          class="mt-auto mb-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-200"
        >
          {{ t('tools.color-scheme-generator.actions.regenerate') }}
        </button>
        
        <!-- 重置按钮 -->
        <button 
          @click="resetSettings" 
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-200"
        >
          {{ t('tools.color-scheme-generator.actions.reset') }}
        </button>
      </div>
      
      <!-- 中间：颜色方案展示 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">
          {{ t('tools.color-scheme-generator.palettes.title') }}
        </h3>
        
        <!-- 颜色方案展示 -->
        <div class="flex-1 overflow-y-auto space-y-3">
          <div 
            v-for="(color, index) in generatedColors" 
            :key="index"
            class="group relative rounded-md overflow-hidden cursor-pointer"
            @click="copyColor(color)"
          >
            <div 
              class="h-16 w-full transition-all duration-200 group-hover:h-12"
              :style="{ backgroundColor: color }"
            ></div>
            <div class="p-2 bg-white dark:bg-gray-900 transition-all duration-200">
              <div class="flex justify-between items-center">
                <div class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ color.toUpperCase() }}</div>
                <button 
                  class="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                  @click.stop="copyColor(color)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
              <div class="flex mt-1 text-xs">
                <div class="text-gray-500 dark:text-gray-400 mr-2">RGB: {{ getRgbString(color) }}</div>
                <div class="text-gray-500 dark:text-gray-400">HSL: {{ getHslString(color) }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 导出选项 -->
        <div class="mt-4 flex flex-col sm:flex-row gap-2">
          <button 
            @click="copyAllColors" 
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 flex-1 text-sm"
          >
            {{ t('tools.color-scheme-generator.palettes.copy') }}
          </button>
          <button 
            @click="exportAsCss" 
            class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-200 flex-1 text-sm"
          >
            {{ t('tools.color-scheme-generator.palettes.export') }}
          </button>
        </div>
      </div>
      
      <!-- 右侧：预览和保存 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">
          {{ t('tools.color-scheme-generator.preview.title') }}
        </h3>
        
        <!-- 设计预览 -->
        <div class="flex-1">
          <!-- 模拟界面预览 -->
          <div 
            class="border rounded-md overflow-hidden mb-4"
            :style="{ backgroundColor: previewStyles.background }"
          >
            <!-- 顶部导航栏 -->
            <div 
              class="p-3 border-b flex items-center justify-between"
              :style="{ backgroundColor: previewStyles.header }"
            >
              <div 
                class="h-4 w-24 rounded"
                :style="{ backgroundColor: previewStyles.accent }"
              ></div>
              <div class="flex space-x-2">
                <div 
                  class="h-4 w-4 rounded-full"
                  :style="{ backgroundColor: previewStyles.button }"
                ></div>
                <div 
                  class="h-4 w-4 rounded-full"
                  :style="{ backgroundColor: previewStyles.text }"
                ></div>
              </div>
            </div>
            
            <!-- 内容区域 -->
            <div class="p-3 flex flex-col space-y-3">
              <div 
                class="h-4 w-3/4 rounded"
                :style="{ backgroundColor: previewStyles.text }"
              ></div>
              <div 
                class="h-4 w-1/2 rounded"
                :style="{ backgroundColor: previewStyles.text, opacity: 0.6 }"
              ></div>
              
              <!-- 卡片 -->
              <div 
                class="p-3 rounded-md mt-2"
                :style="{ backgroundColor: previewStyles.card }"
              >
                <div 
                  class="h-4 w-1/3 rounded mb-2"
                  :style="{ backgroundColor: previewStyles.text }"
                ></div>
                <div 
                  class="h-4 w-full rounded mb-2"
                  :style="{ backgroundColor: previewStyles.text, opacity: 0.4 }"
                ></div>
                <div 
                  class="h-4 w-2/3 rounded mb-3"
                  :style="{ backgroundColor: previewStyles.text, opacity: 0.4 }"
                ></div>
                <div 
                  class="h-6 w-1/3 rounded"
                  :style="{ backgroundColor: previewStyles.button }"
                ></div>
              </div>
              
              <!-- 另一个卡片 -->
              <div 
                class="p-3 rounded-md"
                :style="{ backgroundColor: previewStyles.secondaryCard }"
              >
                <div 
                  class="h-4 w-1/4 rounded mb-2"
                  :style="{ backgroundColor: previewStyles.text }"
                ></div>
                <div 
                  class="h-4 w-full rounded mb-2"
                  :style="{ backgroundColor: previewStyles.text, opacity: 0.4 }"
                ></div>
              </div>
            </div>
          </div>
          
          <!-- 按钮和标签预览 -->
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-2">
              <div 
                class="p-2 rounded-md text-center text-xs"
                :style="{ 
                  backgroundColor: previewStyles.button,
                  color: previewStyles.buttonText
                }"
              >
                {{ t('tools.color-scheme-generator.preview.mainButton') }}
              </div>
              <div 
                class="p-2 rounded-md text-center text-xs"
                :style="{ 
                  backgroundColor: previewStyles.secondaryButton,
                  color: previewStyles.buttonText 
                }"
              >
                {{ t('tools.color-scheme-generator.preview.secondButton') }}
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <div 
                v-for="(color, index) in generatedColors.slice(0, 3)" 
                :key="'tag-'+index"
                class="px-2 py-1 rounded-full text-xs text-center"
                :style="{ 
                  backgroundColor: color, 
                  color: getContrastColor(color)
                }"
              >
                {{ t('tools.color-scheme-generator.preview.tag') }}
                {{ index + 1 }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- 保存方案 -->
        <div class="mt-4">
          <div class="flex items-center mb-2">
            <input 
              type="text" 
              v-model="schemeName" 
              :placeholder="t('tools.color-scheme-generator.messages.schemeName')"
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              @click="saveScheme" 
              class="ml-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-200"
            >
                {{ t('tools.color-scheme-generator.actions.save') }}
            </button>
          </div>
          
          <!-- 保存的方案列表 -->
          <div class="mt-2 max-h-32 overflow-y-auto">
            <div 
              v-for="(scheme, index) in savedSchemes" 
              :key="index"
              class="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mb-1"
            >
              <div class="flex items-center">
                <div class="flex">
                  <div 
                    v-for="color in scheme.colors.slice(0, 3)" 
                    :key="color"
                    class="w-4 h-4 mr-1 border border-gray-200 dark:border-gray-700"
                    :style="{ backgroundColor: color }"
                  ></div>
                </div>
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ scheme.name }}</span>
              </div>
              <div class="flex">
                <button 
                  @click="loadScheme(scheme)" 
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button 
                  @click="deleteScheme(index)" 
                  class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
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
    </div>
    
    <!-- 通知提示 -->
    <div 
      v-if="notification.show" 
      class="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center"
      :class="{ 'animate-fade-in': notification.show, 'animate-fade-out': notification.fadeOut }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {{ notification.message }}
    </div>
    
    <!-- 文章部分 -->
    <div class="mt-10 pt-6 border-t dark:border-gray-700">
      <ColorSchemeGeneratorArticle />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import chroma from 'chroma-js'
import { useI18n } from 'vue-i18n'
import ColorSchemeGeneratorArticle from './ColorSchemeGeneratorArticle.vue'
const { t } = useI18n();

// 基础颜色和设置
const baseColor = ref('#3b82f6')  // 默认蓝色
const colorInput = ref(null)
const hueShift = ref(30)
const saturation = ref(80)
const brightness = ref(50)

// 配色方案类型
const colorSchemes = [
  { id: 'monochromatic', name: t('tools.color-scheme-generator.schemeTypes.monochromatic') },
  { id: 'complementary', name: t('tools.color-scheme-generator.schemeTypes.complementary') },
  { id: 'analogous', name: t('tools.color-scheme-generator.schemeTypes.analogous') },
  { id: 'triadic', name: t('tools.color-scheme-generator.schemeTypes.triadic') },
  { id: 'tetradic', name: t('tools.color-scheme-generator.schemeTypes.tetradic') },
  { id: 'splitComplementary', name: t('tools.color-scheme-generator.schemeTypes.splitComplementary') }
]
const selectedScheme = ref('monochromatic')

// 生成的颜色
const generatedColors = ref([])

// 界面预览样式
const previewStyles = computed(() => {
  const colors = generatedColors.value
  if (colors.length === 0) return {}
  
  return {
    background: colors[0] || '#ffffff',
    header: colors[1] || '#f8f9fa',
    card: colors[2] || '#ffffff',
    secondaryCard: colors[3] || '#f1f5f9',
    text: getContrastColor(colors[0]),
    accent: colors[4] || '#4f46e5',
    button: colors[5] || '#4f46e5',
    secondaryButton: colors[6] || '#9ca3af',
    buttonText: '#ffffff'
  }
})

// 保存方案相关
const schemeName = ref('')
const savedSchemes = ref([])

// 通知
const notification = ref({
  show: false,
  message: '',
  fadeOut: false
})

// 打开颜色选择器
function openColorPicker() {
  colorInput.value.click()
}

// 验证颜色格式
function validateColor() {
  try {
    // 检查是否是有效的颜色格式
    chroma(baseColor.value)
    // 如果有效，确保使用十六进制格式
    baseColor.value = chroma(baseColor.value).hex()
  } catch (e) {
    // 如果无效，回退到之前的有效颜色
    console.log(e.message)
  }
  
  // 重新生成颜色方案
  generateColorScheme()
}

// 生成随机颜色
function generateRandomColor() {
  const randomColor = chroma.random().hex()
  baseColor.value = randomColor
  generateColorScheme()
}

// 重置设置
function resetSettings() {
  baseColor.value = '#3b82f6'
  hueShift.value = 30
  saturation.value = 80
  brightness.value = 50
  selectedScheme.value = 'monochromatic'
  generateColorScheme()
}

// 生成颜色方案
function generateColorScheme() {
  const baseChroma = chroma(baseColor.value)
  const baseHsl = baseChroma.hsl()
  const h = baseHsl[0] || 0
  const s = saturation.value / 100
  const l = brightness.value / 100
  
  // 根据不同的配色方案生成颜色
  let colors = []
  
  switch (selectedScheme.value) {
    case 'monochromatic':
      colors = generateMonochromaticScheme(h, s, l)
      break
    case 'complementary':
      colors = generateComplementaryScheme(h, s, l)
      break
    case 'analogous':
      colors = generateAnalogousScheme(h, s, l)
      break
    case 'triadic':
      colors = generateTriadicScheme(h, s, l)
      break
    case 'tetradic':
      colors = generateTetradicScheme(h, s, l)
      break
    case 'split-complementary':
      colors = generateSplitComplementaryScheme(h, s, l)
      break
    default:
      colors = generateMonochromaticScheme(h, s, l)
  }
  
  generatedColors.value = colors.map(color => chroma(color).hex())
}

// 生成单色方案
function generateMonochromaticScheme(h, s, l) {
  return [
    chroma.hsl(h, s, l).hex(),
    chroma.hsl(h, s, l * 1.2).hex(),
    chroma.hsl(h, s * 0.8, l * 1.3).hex(),
    chroma.hsl(h, s * 0.6, l * 1.4).hex(),
    chroma.hsl(h, s * 1.2, l * 0.8).hex(),
    chroma.hsl(h, s * 1.4, l * 0.6).hex(),
    chroma.hsl(h, s * 0.4, l).hex(),
  ]
}

// 生成互补色方案
function generateComplementaryScheme(h, s, l) {
  const complement = (h + 180) % 360
  
  return [
    chroma.hsl(h, s, l).hex(),
    chroma.hsl(h, s * 0.8, l * 1.2).hex(),
    chroma.hsl(h, s * 0.6, l * 1.3).hex(),
    chroma.hsl(complement, s * 0.4, l * 1.2).hex(),
    chroma.hsl(complement, s, l).hex(),
    chroma.hsl(complement, s * 1.2, l * 0.8).hex(),
    chroma.hsl(complement, s * 0.8, l * 0.9).hex(),
  ]
}

// 生成邻近色方案
function generateAnalogousScheme(h, s, l) {
  const shift = Number(hueShift.value)
  const hue1 = (h + shift) % 360
  const hue2 = (h - shift + 360) % 360
  
  return [
    chroma.hsl(h, s, l).hex(),
    chroma.hsl(h, s * 0.8, l * 1.2).hex(),
    chroma.hsl(hue1, s, l).hex(),
    chroma.hsl(hue1, s * 1.1, l * 0.9).hex(),
    chroma.hsl(hue2, s, l).hex(),
    chroma.hsl(hue2, s * 1.1, l * 0.9).hex(),
    chroma.hsl(h, s * 0.5, l * 1.3).hex(),
  ]
}

// 生成三角配色方案
function generateTriadicScheme(h, s, l) {
  const hue1 = (h + 120) % 360
  const hue2 = (h + 240) % 360
  
  return [
    chroma.hsl(h, s, l).hex(),
    chroma.hsl(h, s * 0.8, l * 1.2).hex(),
    chroma.hsl(hue1, s * 0.9, l * 1.1).hex(),
    chroma.hsl(hue1, s * 0.7, l * 1.3).hex(),
    chroma.hsl(hue2, s * 0.9, l * 1.1).hex(),
    chroma.hsl(hue2, s * 1.1, l * 0.9).hex(),
    chroma.hsl(h, s * 0.6, l * 1.4).hex(),
  ]
}

// 生成四角配色方案
function generateTetradicScheme(h, s, l) {
  const hue1 = (h + 90) % 360
  const hue2 = (h + 180) % 360
  const hue3 = (h + 270) % 360
  
  return [
    chroma.hsl(h, s, l).hex(),
    chroma.hsl(h, s * 0.8, l * 1.2).hex(),
    chroma.hsl(hue1, s * 0.9, l * 1.1).hex(),
    chroma.hsl(hue2, s * 0.9, l * 1.1).hex(),
    chroma.hsl(hue3, s * 0.9, l * 1.1).hex(),
    chroma.hsl(hue1, s * 1.1, l * 0.9).hex(),
    chroma.hsl(hue2, s * 0.6, l * 1.3).hex(),
  ]
}

// 生成分裂互补色方案
function generateSplitComplementaryScheme(h, s, l) {
  const complement = (h + 180) % 360
  const shift = Number(hueShift.value)
  const hue1 = (complement + shift) % 360
  const hue2 = (complement - shift + 360) % 360
  
  return [
    chroma.hsl(h, s, l).hex(),
    chroma.hsl(h, s * 0.8, l * 1.2).hex(),
    chroma.hsl(h, s * 0.6, l * 1.3).hex(),
    chroma.hsl(hue1, s * 0.9, l * 1.1).hex(),
    chroma.hsl(hue1, s * 1.1, l * 0.9).hex(),
    chroma.hsl(hue2, s * 0.9, l * 1.1).hex(),
    chroma.hsl(hue2, s * 1.1, l * 0.9).hex(),
  ]
}

// 复制颜色到剪贴板
function copyColor(color) {
  navigator.clipboard.writeText(color)
    .then(() => showNotification(t('tools.color-scheme-generator.messages.copied')+`: ${color}`))
    .catch((e) => showNotification(e.message))
}

// 复制所有颜色
function copyAllColors() {
  const colorText = generatedColors.value.join('\n')
  navigator.clipboard.writeText(colorText)
    .then(() => showNotification(t('tools.color-scheme-generator.messages.copyAllColors')))
    .catch((e) => showNotification(e.message))
}

// 导出为CSS变量
function exportAsCss() {
  const scheme = selectedScheme.value
  const cssVars = [':root {']
  
  generatedColors.value.forEach((color, index) => {
    let varName
    if (index === 0) varName = 'primary'
    else if (index === 1) varName = 'secondary'
    else if (index === 2) varName = 'tertiary'
    else varName = `color-${index + 1}`
    
    cssVars.push(`  --color-${varName}: ${color};`)
  })
  
  cssVars.push('}')
  const cssText = cssVars.join('\n')
  
  navigator.clipboard.writeText(cssText)
    .then(() => showNotification(t('tools.color-scheme-generator.messages.copied')))
    .catch((e) => showNotification(e.message))
}

// 保存当前方案
function saveScheme() {
  if (generatedColors.value.length === 0) {
    showNotification(t('tools.color-scheme-generator.savedPalettes.noSavedPalettes'))
    return
  }
  if (schemeName.value.length === 0) {
    showNotification(t('tools.color-scheme-generator.savedPalettes.schemeNameEmpty'))
    return
  }
  
  const name = schemeName.value.trim()
  const scheme = {
    name,
    colors: [...generatedColors.value],
    settings: {
      baseColor: baseColor.value,
      hueShift: hueShift.value,
      saturation: saturation.value,
      brightness: brightness.value,
      scheme: selectedScheme.value
    }
  }
  
  savedSchemes.value.push(scheme)
  localStorage.setItem('colorSchemes', JSON.stringify(savedSchemes.value))
  schemeName.value = ''
  showNotification(t('tools.color-scheme-generator.savedPalettes.saved')+`: ${name}`)
}

// 加载保存的方案
function loadScheme(scheme) {
  baseColor.value = scheme.settings.baseColor
  hueShift.value = scheme.settings.hueShift
  saturation.value = scheme.settings.saturation
  brightness.value = scheme.settings.brightness
  selectedScheme.value = scheme.settings.scheme
  
  // 应用方案颜色
  generatedColors.value = [...scheme.colors]
  
  showNotification(t('tools.color-scheme-generator.savedPalettes.load') + `: ${scheme.name}`)
}

// 删除保存的方案
function deleteScheme(index) {
  const name = savedSchemes.value[index].name
  savedSchemes.value.splice(index, 1)
  localStorage.setItem('colorSchemes', JSON.stringify(savedSchemes.value))
  showNotification(t('tools.color-scheme-generator.savedPalettes.delete') + `: ${name}`)
}

// 获取对比色（黑色或白色文本）
function getContrastColor(bgColor) {
  try {
    return chroma(bgColor).luminance() > 0.5 ? '#000000' : '#ffffff'
  } catch (e) {
    return '#000000'
  }
}

// 获取RGB字符串表示
function getRgbString(color) {
  try {
    const rgb = chroma(color).rgb()
    return `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`
  } catch (e) {
    return ''
  }
}

// 获取HSL字符串表示
function getHslString(color) {
  try {
    const hsl = chroma(color).hsl()
    return `${Math.round(hsl[0] || 0)}°, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%`
  } catch (e) {
    return ''
  }
}

// 显示通知
function showNotification(message) {
  // 重置之前的通知状态
  notification.value = {
    show: true,
    message,
    fadeOut: false
  }
  
  // 3秒后隐藏通知
  setTimeout(() => {
    notification.value.fadeOut = true
    setTimeout(() => {
      notification.value.show = false
    }, 300)
  }, 3000)
}

// 监听参数变化，重新生成配色方案
watch([baseColor, hueShift, saturation, brightness, selectedScheme], () => {
  generateColorScheme()
})

// 组件挂载时
onMounted(() => {
  // 生成初始配色方案
  generateColorScheme()
  
  // 加载保存的方案
  const savedSchemesStr = localStorage.getItem('colorSchemes')
  if (savedSchemesStr) {
    try {
      savedSchemes.value = JSON.parse(savedSchemesStr)
    } catch (e) {
      console.error(e)
    }
  }
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-out {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(10px); }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

.animate-fade-out {
  animation: fade-out 0.3s ease-out forwards;
}

/* 美化滑块样式 */
input[type="range"] {
  -webkit-appearance: none;
  height: 6px;
  border-radius: 5px;
  background: #e2e8f0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  border: none;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  border: none;
}

.dark input[type="range"] {
  background: #4b5563;
}

.dark input[type="range"]::-webkit-slider-thumb {
  background: #60a5fa;
}

.dark input[type="range"]::-moz-range-thumb {
  background: #60a5fa;
}
</style> 