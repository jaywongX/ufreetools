<template>
  <div class="flex flex-col h-full">
    <!-- 工具栏 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-wrap gap-2">
      <div class="flex space-x-2">
        <button 
          @click="renderDiagram" 
          class="btn bg-primary hover:bg-primary-dark text-white"
          :disabled="isRendering"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {{ $t('tools.flowchart-generator.renderBtn') }}
        </button>
        <button 
          @click="resetCode" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.flowchart-generator.resetBtn') }}
        </button>
      </div>
      
      <div class="flex space-x-2">
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.flowchart-generator.options.theme') }}</span>
          <select 
            v-model="theme" 
            class="form-select px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            <option value="default">{{ $t('tools.flowchart-generator.themes.default') }}</option>
            <option value="forest">{{ $t('tools.flowchart-generator.themes.forest') }}</option>
            <option value="dark">{{ $t('tools.flowchart-generator.themes.dark') }}</option>
            <option value="neutral">{{ $t('tools.flowchart-generator.themes.neutral') }}</option>
            <option value="base">{{ $t('tools.flowchart-generator.themes.base') }}</option>
          </select>
        </div>
        
        <button 
          @click="downloadSVG" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!isSvgReady"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.flowchart-generator.output.downloadSVG') }}
        </button>
        <button 
          @click="copyToClipboard" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!isSvgReady"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {{ $t('tools.flowchart-generator.output.copySVG') }}
        </button>
      </div>
    </div>
    
    <!-- 主内容区域 -->
    <div class="flex-grow overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 h-full divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
        <!-- 代码编辑区域 -->
        <div class="h-full flex flex-col">
          <div class="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {{ $t('tools.flowchart-generator.output.code') }}
            </h3>
          </div>
          <div class="flex-grow overflow-auto p-4 bg-white dark:bg-gray-800">
            <textarea
              v-model="code"
              class="w-full h-full p-3 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              :placeholder="$t('tools.flowchart-generator.input.placeholder')"
              spellcheck="false"
            ></textarea>
          </div>
          
          <!-- 示例按钮 -->
          <div class="bg-gray-50 dark:bg-gray-750 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="example in localizedExamples"
                :key="example.nameKey"
                @click="setExample(example.code)"
                class="px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {{ $t(`tools.flowchart-generator.examples.${example.nameKey}`) }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- 预览区域 -->
        <div class="h-full flex flex-col">
          <div class="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {{ $t('tools.flowchart-generator.output.preview') }}
            </h3>
          </div>
          
          <div class="flex-grow overflow-auto p-4 bg-white dark:bg-gray-800 relative">
            <div v-if="isRendering" class="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 z-10">
              <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            
            <div v-if="error" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 text-red-700 dark:text-red-300 mb-4">
              <p class="font-medium">{{ $t('tools.flowchart-generator.messages.errorTitle') }}</p>
              <pre class="mt-2 text-xs overflow-auto">{{ error }}</pre>
            </div>
            
            <div id="diagram-container" class="flex items-center justify-center min-h-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 添加文章部分 -->
  <FlowchartGeneratorArticle />
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import mermaid from 'mermaid'
import FlowchartGeneratorArticle from './FlowchartGeneratorArticle.vue'

const { t } = useI18n()

// 状态变量
const code = ref('')
const error = ref('')
const isRendering = ref(false)
const isSvgReady = ref(false)
const theme = ref('default')

// 示例代码定义
const examples = [
  { nameKey: 'flowchart' },
  { nameKey: 'sequenceDiagram' },
  { nameKey: 'gantt' },
  { nameKey: 'stateDiagram' },
  { nameKey: 'pieChart' },
  { nameKey: 'classDiagram' }
]

// 使用计算属性获取本地化的图表代码
const localizedExamples = computed(() => {
  return examples.map(example => {
    return {
      ...example,
      code: t(`tools.flowchart-generator.exampleCodes.${example.nameKey}`)
    };
  });
});

// 初始化 Mermaid
onMounted(() => {
  mermaid.initialize({
    startOnLoad: false,
    theme: theme.value,
    fontFamily: 'sans-serif',
    securityLevel: 'loose',
    logLevel: 'error'
  })
  
  // 设置默认代码示例
  setExample(localizedExamples.value[0].code)
})

// 监听主题变化，重新渲染图表
watch(theme, () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: theme.value,
    fontFamily: 'sans-serif',
    securityLevel: 'loose'
  })
  renderDiagram()
})

// 渲染流程图
async function renderDiagram() {
  if (!code.value.trim()) {
    error.value = t('tools.flowchart-generator.messages.emptyCode')
    return
  }
  
  isRendering.value = true
  error.value = ''
  isSvgReady.value = false
  
  try {
    const container = document.getElementById('diagram-container')
    container.innerHTML = ''
    
    // 根据图表类型添加简单的布局调整
    const codeType = code.value.trim().split('\n')[0].toLowerCase()
    if (codeType.includes('gantt')) {
      container.style.height = '500px'  // 为甘特图提供更大的高度
      container.style.overflow = 'auto' // 允许滚动
    } else if (codeType.includes('classDiagram')) {
      container.style.height = '600px'  // 为类图提供更大的高度
      container.style.overflow = 'auto' // 允许滚动
    } else {
      container.style.height = ''       // 重置高度
      container.style.overflow = ''     // 重置滚动
    }
    
    // 使用Mermaid渲染图表
    const { svg } = await mermaid.render('diagram', code.value.trim())
    container.innerHTML = svg
    isSvgReady.value = true
  } catch (err) {
    error.value = err.message || t('tools.flowchart-generator.messages.renderError', { error: 'Unknown error' })
    console.error('Mermaid渲染错误:', err)
  } finally {
    isRendering.value = false
  }
}

// 设置示例代码
function setExample(exampleCode) {
  code.value = exampleCode
  renderDiagram()
}

// 重置代码
function resetCode() {
  code.value = ''
  error.value = ''
  document.getElementById('diagram-container').innerHTML = ''
  isSvgReady.value = false
}

// 下载SVG
function downloadSVG() {
  if (!isSvgReady.value) return
  
  try {
    const svgEl = document.querySelector('#diagram-container svg')
    const svgData = new XMLSerializer().serializeToString(svgEl)
    const blob = new Blob([svgData], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `diagram-${new Date().getTime()}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('下载SVG失败:', error)
  }
}

// 复制SVG到剪贴板
async function copyToClipboard() {
  if (!isSvgReady.value) return
  
  try {
    const svgEl = document.querySelector('#diagram-container svg')
    const svgData = new XMLSerializer().serializeToString(svgEl)
    
    await navigator.clipboard.writeText(svgData)
    alert(t('tools.flowchart-generator.messages.copied'))
  } catch (error) {
    console.error('复制SVG失败:', error)
    alert(t('tools.flowchart-generator.messages.copyFailed'))
  }
}
</script>

<style scoped>
.btn {
  @apply px-3 py-1.5 rounded text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200;
}

/* 暗色模式下SVG样式调整 */
:deep(svg) {
  max-width: 100%;
}

/* 为了确保SVG在暗色模式下可见 */
:deep(.dark svg) {
  background-color: #1F2937;
}

/* 自定义背景 */
.dark .bg-gray-750 {
  background-color: #1c2431;
}
</style> 