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
          渲染图表
        </button>
        <button 
          @click="resetCode" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重置
        </button>
      </div>
      
      <div class="flex space-x-2">
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600 dark:text-gray-400">主题</span>
          <select 
            v-model="theme" 
            class="form-select px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            <option value="default">默认</option>
            <option value="forest">森林</option>
            <option value="dark">暗黑</option>
            <option value="neutral">中性</option>
            <option value="base">基础</option>
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
          下载SVG
        </button>
        <button 
          @click="copyToClipboard" 
          class="btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!isSvgReady"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          复制SVG
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
              Mermaid 代码
            </h3>
          </div>
          <div class="flex-grow overflow-auto p-4 bg-white dark:bg-gray-800">
            <textarea
              v-model="code"
              class="w-full h-full p-3 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="输入Mermaid语法代码..."
              spellcheck="false"
            ></textarea>
          </div>
          
          <!-- 示例按钮 -->
          <div class="bg-gray-50 dark:bg-gray-750 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="example in examples"
                :key="example.name"
                @click="setExample(example.code)"
                class="px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {{ example.name }}
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
              预览
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
              <p class="font-medium">渲染错误</p>
              <pre class="mt-2 text-xs overflow-auto">{{ error }}</pre>
            </div>
            
            <div id="diagram-container" class="flex items-center justify-center min-h-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import mermaid from 'mermaid'

// 状态变量
const code = ref('')
const theme = ref('default')
const isRendering = ref(false)
const isSvgReady = ref(false)
const error = ref('')

// 示例代码
const examples = [
  {
    name: '流程图',
    code: `graph TD
    A[开始] --> B{是否正确?}
    B -->|是| C[结果正确]
    B -->|否| D[结果错误]
    C --> E[结束]
    D --> E
`
  },
  {
    name: '时序图',
    code: `sequenceDiagram
    participant 客户端
    participant 服务器
    客户端->>服务器: 请求数据
    服务器-->>客户端: 响应数据
    客户端->>服务器: 提交表单
    服务器-->>客户端: 确认提交
`
  },
  {
    name: '甘特图',
    code: `gantt
    title 项目进度计划
    dateFormat  YYYY-MM-DD
    section 规划阶段
    需求收集           :a1, 2023-01-01, 30d
    系统设计           :after a1, 20d
    section 开发阶段
    后端开发           :2023-02-20, 45d
    前端开发           :2023-02-25, 40d
    section 测试阶段
    系统测试           :2023-04-05, 20d
    用户测试           :2023-04-20, 15d
    section 上线阶段
    部署上线           :2023-05-05, 10d
`
  },
  {
    name: '状态图',
    code: `stateDiagram-v2
    [*] --> 编辑中
    编辑中 --> 审核中: 提交审核
    审核中 --> 已拒绝: 拒绝
    审核中 --> 已发布: 通过
    已拒绝 --> 编辑中: 修改后重新提交
    已发布 --> [*]
`
  },
  {
    name: '饼图',
    code: `pie
    title 网站访问来源分布
    "搜索引擎" : 42.7
    "直接访问" : 28.9
    "社交媒体" : 18.5
    "其他渠道" : 9.9
`
  },
  {
    name: '类图',
    code: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Cat {
        +String color
        +climb() void
    }
    Animal <|-- Dog
    Animal <|-- Cat
`
  }
]

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
  setExample(examples[0].code)
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
    error.value = '请输入Mermaid语法代码'
    return
  }
  
  isRendering.value = true
  error.value = ''
  isSvgReady.value = false
  
  try {
    const container = document.getElementById('diagram-container')
    container.innerHTML = ''
    
    // 使用Mermaid渲染图表
    const { svg } = await mermaid.render('diagram', code.value.trim())
    container.innerHTML = svg
    isSvgReady.value = true
  } catch (err) {
    error.value = err.message || '渲染图表时出错'
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
    alert('SVG代码已复制到剪贴板')
  } catch (error) {
    console.error('复制SVG失败:', error)
    alert('复制失败，请手动复制')
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