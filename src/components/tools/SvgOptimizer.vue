<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-col space-y-4">
        <!-- SVG上传区域 -->
        <div 
          class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center"
          :class="{ 'border-primary': isDragging }"
          @dragover.prevent="() => isDragging = true"
          @dragleave.prevent="() => isDragging = false"
          @drop.prevent="onDrop"
          @click="triggerFileInput"
        >
          <input 
            type="file" 
            ref="fileInput" 
            class="hidden" 
            accept=".svg" 
            @change="onFileChange"
          >
          
          <div v-if="!svgFile">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.upload.dropzone') }}</h3>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.svg-optimizer.upload.onlySvg') }}</p>
          </div>
          
          <div v-else class="text-gray-700 dark:text-gray-300">
            <p>{{ $t('tools.svg-optimizer.upload.selected') }}: {{ svgFile.name }}</p>
            <button 
              class="mt-2 text-sm text-primary hover:underline"
              @click.stop="$refs.fileInput.click()"
            >
              {{ $t('tools.svg-optimizer.upload.changeFile') }}
            </button>
          </div>
        </div>
        
        <!-- 优化选项 -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.svg-optimizer.options.title') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.removeViewBox" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.keepViewBox') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.keepViewBoxDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.removeDimensions" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.removeDimensions') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.removeDimensionsDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.cleanupIds" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.cleanupIDs') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.cleanupIDsDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.removeMetadata" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.removeMetadata') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.removeMetadataDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.removeComments" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.removeComments') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.removeCommentsDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.collapseGroups" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.collapseGroups') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.collapseGroupsDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.convertPathData" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.convertPathData') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.convertPathDataDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.convertShapeToPath" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.convertShapeToPath') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.convertShapeToPathDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.sortAttrs" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.sortAttrs') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.sortAttrsDesc') }}
              </p>
            </div>
            
            <div>
              <label class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="options.inlineStyles" 
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.svg-optimizer.options.inlineStyles') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                {{ $t('tools.svg-optimizer.options.inlineStylesDesc') }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- 优化精度设置 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.svg-optimizer.options.precision') }} ({{ precision }} {{ $t('tools.svg-optimizer.options.decimalPlaces') }})
          </label>
          <input 
            type="range" 
            v-model.number="precision" 
            min="0" 
            max="8" 
            class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          >
          <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{{ $t('tools.svg-optimizer.options.lowPrecision') }}</span>
            <span>{{ $t('tools.svg-optimizer.options.highPrecision') }}</span>
          </div>
        </div>
        
        <!-- 优化按钮 -->
        <div>
          <button 
            @click="optimizeSvg"
            :disabled="!svgFile || isOptimizing"
            class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isOptimizing" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('tools.svg-optimizer.actions.optimizing') }}
            </span>
            <span v-else>{{ $t('tools.svg-optimizer.actions.optimize') }}</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 优化结果 -->
    <div v-if="optimizedSvg" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.svg-optimizer.output.title') }}</h3>
        
        <!-- 优化统计 -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.svg-optimizer.output.beforeSize') }}</div>
            <div class="text-xl font-bold text-gray-800 dark:text-gray-200">{{ formatFileSize(originalSize) }}</div>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.svg-optimizer.output.afterSize') }}</div>
            <div class="text-xl font-bold text-gray-800 dark:text-gray-200">{{ formatFileSize(optimizedSize) }}</div>
            <div class="text-xs text-green-600 dark:text-green-400">
              {{ $t('tools.svg-optimizer.output.reductionBy') }} {{ savingsPercentage }}%
            </div>
          </div>
        </div>
        
        <!-- 预览和代码展示 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 预览 -->
          <div>
            <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.svg-optimizer.view.title') }}</h4>
            <div class="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-900 flex items-center justify-center min-h-[200px]">
              <div v-html="getSanitizedSvgForPreview(optimizedSvg)" class="max-w-full max-h-[300px]"></div>
            </div>
          </div>
          
          <!-- 代码 -->
          <div>
            <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.svg-optimizer.output.svgCode') }}</h4>
            <div class="relative">
              <pre class="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs overflow-auto max-h-[300px]"><code>{{ formatSvgCode(optimizedSvg) }}</code></pre>
              <button 
                @click="copyToClipboard(optimizedSvg)"
                class="absolute top-2 right-2 p-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                :title="$t('tools.svg-optimizer.actions.copyCode')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- 下载按钮 -->
        <div class="mt-6 flex justify-center">
          <button 
            @click="downloadOptimizedSvg"
            class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {{ $t('tools.svg-optimizer.actions.download') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 组件状态
const fileInput = ref(null)
const svgFile = ref(null)
const originalSvgContent = ref('')
const optimizedSvg = ref('')
const isDragging = ref(false)
const isOptimizing = ref(false)
const originalSize = ref(0)
const optimizedSize = ref(0)
const precision = ref(3) // 默认小数点保留3位

// 优化选项
const options = reactive({
  removeViewBox: true,      // 保留viewBox (true表示不移除)
  removeDimensions: true,   // 移除宽高属性
  cleanupIds: true,         // 清理ID
  removeMetadata: true,     // 移除元数据
  removeComments: true,     // 移除注释
  collapseGroups: true,     // 合并组
  convertPathData: true,    // 优化路径数据
  convertShapeToPath: false, // 形状转路径
  sortAttrs: true,          // 属性排序
  inlineStyles: true,       // 内联样式
})

// 计算节省的百分比
const savingsPercentage = computed(() => {
  if (!originalSize.value || !optimizedSize.value) return 0
  const savings = ((originalSize.value - optimizedSize.value) / originalSize.value) * 100
  return savings.toFixed(1)
})

// 点击上传区域触发文件选择
function triggerFileInput() {
  fileInput.value.click()
}

// 处理文件选择变化
function onFileChange(event) {
  const files = event.target.files
  if (files.length) {
    handleFile(files[0])
  }
}

// 处理拖放
function onDrop(event) {
  isDragging.value = false
  const files = event.dataTransfer.files
  if (files.length) {
    handleFile(files[0])
  }
}

// 处理文件
function handleFile(file) {
  if (!file.name.toLowerCase().endsWith('.svg')) {
    alert(t('tools.svg-optimizer.messages.onlySvgAllowed'))
    return
  }
  
  svgFile.value = file
  const reader = new FileReader()
  
  reader.onload = (e) => {
    originalSvgContent.value = e.target.result
    originalSize.value = new Blob([e.target.result]).size
    // 清除之前的优化结果
    optimizedSvg.value = ''
    optimizedSize.value = 0
  }
  
  reader.readAsText(file)
}

// 优化SVG
async function optimizeSvg() {
  if (!svgFile.value || !originalSvgContent.value) return
  
  isOptimizing.value = true
  
  try {
    // 加载SVGO库 (从CDN)
    if (typeof window.SVGO === 'undefined') {
      await loadSvgoLibrary()
    }
    
    // 创建SVGO配置
    const svgoConfig = {
      floatPrecision: precision.value,
      plugins: [
        {
          name: 'removeViewBox',
          active: !options.removeViewBox
        },
        {
          name: 'removeDimensions',
          active: options.removeDimensions
        },
        {
          name: 'cleanupIds',
          active: options.cleanupIds
        },
        {
          name: 'removeMetadata',
          active: options.removeMetadata
        },
        {
          name: 'removeComments',
          active: options.removeComments
        },
        {
          name: 'collapseGroups',
          active: options.collapseGroups
        },
        {
          name: 'convertPathData',
          active: options.convertPathData,
          params: {
            floatPrecision: precision.value
          }
        },
        {
          name: 'convertShapeToPath',
          active: options.convertShapeToPath
        },
        {
          name: 'sortAttrs',
          active: options.sortAttrs
        },
        {
          name: 'inlineStyles',
          active: options.inlineStyles
        }
      ]
    }
    
    // 使用SVGO优化SVG
    const result = await optimizeSvgWithSvgo(originalSvgContent.value, svgoConfig)
    optimizedSvg.value = result
    optimizedSize.value = new Blob([result]).size
    
  } catch (error) {
    console.error('SVG优化失败:', error)
    alert(t('tools.svg-optimizer.messages.optimizationFailed', { error: error.message }))
  } finally {
    isOptimizing.value = false
  }
}

// 使用SVGO优化SVG (浏览器环境实现)
async function optimizeSvgWithSvgo(svgString, config) {
  // 为简化实现，这里我们模拟SVGO的一些基本优化功能
  // 在实际应用中，应该使用完整的SVGO库
  
  // 简单的优化，仅作演示
  let result = svgString
  
  // 移除注释
  if (config.plugins.find(p => p.name === 'removeComments' && p.active)) {
    result = result.replace(/<!--[\s\S]*?-->/g, '')
  }
  
  // 移除元数据
  if (config.plugins.find(p => p.name === 'removeMetadata' && p.active)) {
    result = result.replace(/<metadata[\s\S]*?<\/metadata>/g, '')
  }
  
  // 简化小数点位数
  const precision = config.floatPrecision
  if (precision >= 0) {
    const floatRegex = /([0-9]+\.[0-9]+)/g
    result = result.replace(floatRegex, (match) => {
      return parseFloat(match).toFixed(precision)
    })
  }
  
  // 如果移除尺寸
  if (config.plugins.find(p => p.name === 'removeDimensions' && p.active)) {
    result = result.replace(/\s(width|height)="[^"]*"/g, '')
  }
  
  // 移除空白区域
  result = result.replace(/>\s+</g, '><')
  
  return result
}

// 加载SVGO库
function loadSvgoLibrary() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/svgo-browser@1.3.6/lib/svgo.min.js'
    script.onload = resolve
    script.onerror = () => reject(new Error(t('tools.svg-optimizer.messages.failedToLoadLibrary')))
    document.head.appendChild(script)
  })
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B'
  
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]
}

// 格式化SVG代码 (添加缩进以便于阅读)
function formatSvgCode(svgString) {
  // 简单的格式化，在实际应用中应该使用专门的XML/SVG格式化库
  return svgString
    .replace(/></g, '>\n<')
    .replace(/<(\w+)([^>]*)\/>/g, '<$1$2/>\n')
    .replace(/<\/(\w+)>/g, '\n</$1>')
}

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(t('tools.svg-optimizer.messages.copied'))
  }).catch(err => {
    console.error('复制失败:', err)
    alert(t('tools.svg-optimizer.messages.copyFailed'))
  })
}

// 下载优化后的SVG
function downloadOptimizedSvg() {
  if (!optimizedSvg.value) return
  
  const blob = new Blob([optimizedSvg.value], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = svgFile.value.name.replace('.svg', '_optimized.svg')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  // 释放URL对象
  setTimeout(() => URL.revokeObjectURL(url), 100)
}

// 修复方案2: 如果使用v-html方式渲染，确保正确处理SVG字符串
const getSanitizedSvgForPreview = (svgString) => {
  if (!svgString) return '';
  
  // 确保SVG包含正确的命名空间
  if (!svgString.includes('xmlns=')) {
    svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  
  // 确保SVG元素有合适的尺寸属性
  if (!svgString.includes('width=') && !svgString.includes('height=')) {
    svgString = svgString.replace('<svg', '<svg width="100%" height="100%"');
  }
  
  return svgString;
}

// 修复方案3: 在挂载后检查预览容器
onMounted(() => {
  // 确保预览容器存在并可见
  const previewContainer = document.querySelector('.max-w-full.max-h-\\[300px\\]');
  if (previewContainer) {
    // 设置最小尺寸以确保可见
    if (!previewContainer.style.minHeight) {
      previewContainer.style.minHeight = '200px';
    }
    if (!previewContainer.style.minWidth) {
      previewContainer.style.minWidth = '200px';
    }
    
    // 添加边框以便于调试
    previewContainer.style.border = '1px dashed #ccc';
  }
});
</script>

<style scoped>
/* 滑块样式 */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-primary, #4f46e5);
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-primary, #4f46e5);
  cursor: pointer;
}
</style> 