<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            编程语言
          </label>
          <select 
            v-model="selectedLanguage" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option v-for="lang in languages" :key="lang.value" :value="lang.value">
              {{ lang.name }}
            </option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            主题样式
          </label>
          <select 
            v-model="selectedTheme" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option v-for="theme in themes" :key="theme.value" :value="theme.value">
              {{ theme.name }}
            </option>
          </select>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            显示行号
          </label>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="show-line-numbers" 
              v-model="showLineNumbers"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="show-line-numbers" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              显示代码行号
            </label>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            自动检测语言
          </label>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="auto-detect" 
              v-model="autoDetect"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="auto-detect" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              尝试自动检测语言
            </label>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 代码输入区域 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          输入代码
        </label>
        <button 
          @click="clearCode" 
          class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清空
        </button>
      </div>
      <div class="border border-gray-300 dark:border-gray-600 rounded-md">
        <textarea 
          v-model="codeInput" 
          rows="10" 
          class="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm rounded-md"
          placeholder="在此粘贴或输入代码..."
          @input="autoDetectLanguage"
        ></textarea>
      </div>
      
      <div class="flex justify-end mt-2">
        <button 
          @click="highlightCode" 
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          生成高亮代码
        </button>
      </div>
    </div>
    
    <!-- 高亮代码结果区域 -->
    <div v-if="highlightedCode" class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          高亮代码预览
        </label>
        <div class="flex space-x-2">
          <button 
            @click="copyHighlightedHTML" 
            class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            复制HTML {{ copyHtmlStatus ? '(已复制!)' : '' }}
          </button>
        </div>
      </div>
      
      <!-- 高亮代码预览 -->
      <div class="border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden code-preview-container">
        <div class="code-preview" v-html="highlightedCode"></div>
      </div>
      
      <!-- HTML 代码区域 -->
      <div class="mt-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            HTML 代码
          </label>
          <button 
            @click="copyRawHTML" 
            class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            复制代码 {{ copyRawStatus ? '(已复制!)' : '' }}
          </button>
        </div>
        <pre class="text-xs bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md p-3 overflow-auto max-h-60 font-mono">{{ htmlOutput }}</pre>
      </div>
    </div>
    
    <!-- 使用说明 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">使用提示</h3>
      <ul class="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
        <li>选择合适的编程语言以获得最佳语法高亮效果</li>
        <li>可以选择不同主题风格以适应您的网站样式</li>
        <li>复制生成的HTML代码，可直接粘贴到支持HTML的编辑器或网站中</li>
        <li>生成的高亮代码支持自适应和暗黑模式</li>
        <li>展示代码时添加行号可以提高可读性和引用便捷性</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

// 语言选项
const languages = [
  { name: 'JavaScript', value: 'javascript' },
  { name: 'HTML', value: 'html' },
  { name: 'CSS', value: 'css' },
  { name: 'Python', value: 'python' },
  { name: 'Java', value: 'java' },
  { name: 'C++', value: 'cpp' },
  { name: 'C#', value: 'csharp' },
  { name: 'PHP', value: 'php' },
  { name: 'TypeScript', value: 'typescript' },
  { name: 'Swift', value: 'swift' },
  { name: 'Ruby', value: 'ruby' },
  { name: 'Go', value: 'go' },
  { name: 'Kotlin', value: 'kotlin' },
  { name: 'Rust', value: 'rust' },
  { name: 'Scala', value: 'scala' },
  { name: 'SQL', value: 'sql' },
  { name: 'Shell/Bash', value: 'bash' },
  { name: 'JSON', value: 'json' },
  { name: 'XML', value: 'xml' },
  { name: 'YAML', value: 'yaml' },
  { name: 'Markdown', value: 'markdown' },
  { name: 'Dart', value: 'dart' },
  { name: 'GraphQL', value: 'graphql' },
  { name: 'Objective-C', value: 'objectivec' },
  { name: '纯文本', value: 'plaintext' }
]

// 主题选项
const themes = [
  { name: '默认', value: 'default' },
  { name: 'GitHub', value: 'github' },
  { name: 'VS Code', value: 'vs2015' },
  { name: 'Atom One Dark', value: 'atom-one-dark' },
  { name: 'Dracula', value: 'dracula' },
  { name: 'Monokai', value: 'monokai' },
  { name: 'Solarized Light', value: 'solarized-light' },
  { name: 'Solarized Dark', value: 'solarized-dark' },
  { name: 'Nord', value: 'nord' }
]

// 状态变量
const codeInput = ref('')
const selectedLanguage = ref('javascript')
const selectedTheme = ref('default')
const showLineNumbers = ref(true)
const autoDetect = ref(true)
const highlightedCode = ref('')
const htmlOutput = ref('')
const copyHtmlStatus = ref(false)
const copyRawStatus = ref(false)

// 监听主题变化
watch(selectedTheme, (newTheme) => {
  if (highlightedCode.value) {
    highlightCode()
  }
})

// 自动检测语言
function autoDetectLanguage() {
  if (autoDetect.value && codeInput.value) {
    try {
      const result = hljs.highlightAuto(codeInput.value)
      if (result.language) {
        // 检查我们是否支持检测到的语言
        const foundLanguage = languages.find(lang => lang.value === result.language)
        if (foundLanguage) {
          selectedLanguage.value = result.language
        }
      }
    } catch (error) {
      console.error('自动检测语言失败:', error)
    }
  }
}

// 高亮代码
function highlightCode() {
  if (!codeInput.value.trim()) {
    highlightedCode.value = ''
    htmlOutput.value = ''
    return
  }
  
  try {
    // 获取高亮后的代码
    let code
    if (selectedLanguage.value === 'plaintext') {
      code = escapeHtml(codeInput.value)
    } else {
      const highlighted = hljs.highlight(codeInput.value, {
        language: selectedLanguage.value,
        ignoreIllegals: true
      })
      code = highlighted.value
    }
    
    // 处理行号
    if (showLineNumbers.value) {
      const lines = code.split('\n')
      let numberedCode = '<table class="hljs-table"><tbody>'
      
      lines.forEach((line, index) => {
        numberedCode += `
          <tr>
            <td class="hljs-line-number">${index + 1}</td>
            <td class="hljs-line-code"><div>${line || ' '}</div></td>
          </tr>
        `
      })
      
      numberedCode += '</tbody></table>'
      code = numberedCode
    }
    
    // 设置最终HTML
    const themeClass = `hljs-theme-${selectedTheme.value}`
    const html = `<pre class="hljs ${themeClass}${showLineNumbers.value ? ' hljs-line-numbers' : ''}"><code>${code}</code></pre>`
    
    highlightedCode.value = html
    htmlOutput.value = html
    
    // 应用当前主题的样式
    applyThemeStyles()
    
  } catch (error) {
    console.error('代码高亮失败:', error)
    highlightedCode.value = `<pre class="hljs-error">代码高亮失败: ${error.message}</pre>`
    htmlOutput.value = '代码高亮处理过程中发生错误'
  }
}

// 应用主题样式
function applyThemeStyles() {
  // 这里可以动态加载或切换不同的高亮主题CSS
  // 实际项目中可能需要更复杂的处理
  
  const previewContainer = document.querySelector('.code-preview-container')
  if (previewContainer) {
    // 移除之前的主题类
    previewContainer.className = 'border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden code-preview-container'
    
    // 添加新的主题类
    previewContainer.classList.add(`theme-${selectedTheme.value}`)
  }
}

// HTML转义函数
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// 复制高亮HTML
function copyHighlightedHTML() {
  navigator.clipboard.writeText(highlightedCode.value)
    .then(() => {
      copyHtmlStatus.value = true
      setTimeout(() => {
        copyHtmlStatus.value = false
      }, 2000)
    })
    .catch(error => {
      console.error('复制失败:', error)
    })
}

// 复制原始HTML
function copyRawHTML() {
  navigator.clipboard.writeText(htmlOutput.value)
    .then(() => {
      copyRawStatus.value = true
      setTimeout(() => {
        copyRawStatus.value = false
      }, 2000)
    })
    .catch(error => {
      console.error('复制失败:', error)
    })
}

// 清空代码
function clearCode() {
  codeInput.value = ''
  highlightedCode.value = ''
  htmlOutput.value = ''
}

onMounted(() => {
  // 加载默认主题
  loadThemeStyle(selectedTheme.value)
})

// 加载主题样式
function loadThemeStyle(theme) {
  const themeId = `hljs-theme-${theme}`
  let linkElement = document.getElementById(themeId)
  
  if (!linkElement) {
    linkElement = document.createElement('link')
    linkElement.id = themeId
    linkElement.rel = 'stylesheet'
    linkElement.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${theme}.min.css`
    document.head.appendChild(linkElement)
  }
}
</script>

<style>
/* 代码高亮自定义样式 */
.code-preview-container {
  max-height: 400px;
  overflow: auto;
}

.code-preview {
  padding: 0;
}

.code-preview pre {
  margin: 0;
  border-radius: 0;
}

/* 行号样式 */
.hljs-line-numbers {
  padding: 0 !important;
  border: none !important;
}

.hljs-table {
  width: 100%;
  border-collapse: collapse;
}

.hljs-line-number {
  text-align: right;
  padding: 0 8px;
  min-width: 40px;
  color: #999;
  border-right: 1px solid #e1e4e8;
  user-select: none;
  background-color: rgba(0,0,0,0.03);
}

.hljs-line-code {
  padding: 0 8px;
}

.hljs-line-code div {
  min-height: 1.5em;
}

/* 错误提示样式 */
.hljs-error {
  background-color: #ffe6e6;
  color: #ff0000;
  padding: 10px;
  border-radius: 4px;
}

/* 暗黑模式支持 */
@media (prefers-color-scheme: dark) {
  .hljs-line-number {
    border-right-color: #555;
    background-color: rgba(255,255,255,0.05);
  }
  
  .hljs-error {
    background-color: rgba(255, 0, 0, 0.2);
    color: #ff6b6b;
  }
}
</style> 