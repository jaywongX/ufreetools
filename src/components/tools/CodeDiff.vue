<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具控制栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="compareCodes" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
          :disabled="isProcessing || !originalCode.trim() || !modifiedCode.trim()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {{ $t('tools.code-diff.actions.compare') }}
        </button>
        <button 
          @click="clearAll" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing || (!originalCode && !modifiedCode)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {{ $t('tools.code-diff.actions.clear') }}
        </button>
      </div>
      <div class="flex space-x-2">
        <!-- 语言选择 -->
        <select 
          v-model="language" 
          class="px-3 py-1.5 text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="plaintext">{{ $t('tools.code-diff.options.languages.plaintext') }}</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="json">JSON</option>
          <option value="markdown">Markdown</option>
          <option value="xml">XML</option>
          <option value="yaml">YAML</option>
        </select>
        <!-- 显示模式 -->
        <select 
          v-model="displayMode" 
          class="px-3 py-1.5 text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="side-by-side">{{ $t('tools.code-diff.options.diffStyles.split') }}</option>
          <option value="unified">{{ $t('tools.code-diff.options.diffStyles.inline') }}</option>
        </select>
      </div>
    </div>
    
    <!-- 状态消息 -->
    <div 
      v-if="message" 
      class="p-3 text-sm" 
      :class="{ 
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error',
        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': messageType === 'info'
      }"
    >
      {{ message }}
    </div>
    
    <!-- 输入区域 -->
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 原始代码 -->
      <div class="space-y-2">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.code-diff.inputs.original') }}</label>
          <div class="flex space-x-2">
            <!-- 删除加载示例代码按钮 -->
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 w-8 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-1 text-xs text-gray-400 select-none">
            <!-- 行号 -->
            <div v-for="i in Math.max(1, (originalCode.match(/\n/g) || []).length + 1)" :key="i" class="w-full text-center py-px">
              {{ i }}
            </div>
          </div>
          <textarea
            v-model="originalCode"
            class="w-full h-64 p-2 pl-10 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            :placeholder="$t('tools.code-diff.inputs.placeholderOriginal')"
            :disabled="isProcessing"
          ></textarea>
        </div>
      </div>
      
      <!-- 修改后代码 -->
      <div class="space-y-2">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.code-diff.inputs.modified') }}</label>
          <button 
            @click="swapCodes" 
            class="text-xs text-primary hover:text-primary-dark"
            title="交换代码"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 w-8 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-1 text-xs text-gray-400 select-none">
            <!-- 行号 -->
            <div v-for="i in Math.max(1, (modifiedCode.match(/\n/g) || []).length + 1)" :key="i" class="w-full text-center py-px">
              {{ i }}
            </div>
          </div>
          <textarea
            v-model="modifiedCode"
            class="w-full h-64 p-2 pl-10 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            :placeholder="$t('tools.code-diff.inputs.placeholderModified')"
            :disabled="isProcessing"
          ></textarea>
        </div>
      </div>
    </div>
    
    <!-- 比较结果区域 -->
    <div v-if="diffResult" class="p-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
      <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">对比结果</h3>
      
      <!-- 并排视图 -->
      <div v-if="displayMode === 'side-by-side'" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1">
          <div class="text-xs text-gray-500 dark:text-gray-400">原始代码</div>
          <div 
            class="p-3 font-mono text-sm whitespace-pre-wrap border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 overflow-auto"
            style="max-height: 500px;"
            v-html="sideBySideDiff.left"
          ></div>
        </div>
        <div class="space-y-1">
          <div class="text-xs text-gray-500 dark:text-gray-400">修改后代码</div>
          <div 
            class="p-3 font-mono text-sm whitespace-pre-wrap border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 overflow-auto"
            style="max-height: 500px;"
            v-html="sideBySideDiff.right"
          ></div>
        </div>
      </div>
      
      <!-- 合并视图 -->
      <div v-else class="space-y-1">
        <div 
          class="p-3 font-mono text-sm whitespace-pre-wrap border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 overflow-auto"
          style="max-height: 500px;"
          v-html="unifiedDiff"
        ></div>
      </div>
      
      <!-- 差异统计 -->
      <div class="flex flex-wrap gap-4 text-sm">
        <div class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
          新增: {{ diffStats.additions }}
        </div>
        <div class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full">
          删除: {{ diffStats.deletions }}
        </div>
        <div class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
          变更行数: {{ diffStats.changes }}
        </div>
      </div>
    </div>
    
    <!-- 在底部添加文章部分 -->
    <CodeDiffArticle />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { diffLines, diffWords } from 'diff'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { useI18n } from 'vue-i18n'
import CodeDiffArticle from './CodeDiffArticle.vue'

const { t } = useI18n()

// 状态
const isProcessing = ref(false)
const message = ref('')
const messageType = ref('info')

// 输入
const originalCode = ref('')
const modifiedCode = ref('')
const language = ref('plaintext')
const displayMode = ref('side-by-side')

// 差异结果
const diffResult = ref(null)
const diffStats = ref({ additions: 0, deletions: 0, changes: 0 })

// 转义HTML字符
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// 高亮代码
function highlightCode(code, lang) {
  if (!code) return ''
  
  if (lang !== 'plaintext' && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(code, { language: lang }).value
    } catch (e) {
      console.error(e)
    }
  }
  
  return escapeHtml(code)
}

// 比较代码
async function compareCodes() {
  if (!originalCode.value.trim() || !modifiedCode.value.trim()) {
    showMessage(t('tools.code-diff.messages.inputRequired'), 'error')
    return
  }
  
  isProcessing.value = true
  showMessage(t('tools.code-diff.messages.loading'), 'info')
  
  try {
    // 使用 diff 库进行比较
    const diffResult = diffLines(originalCode.value, modifiedCode.value)
    
    // 计算统计信息
    let additions = 0
    let deletions = 0
    let changes = 0
    
    for (const part of diffResult) {
      const lineCount = (part.value.match(/\n/g) || []).length + (part.value.endsWith('\n') ? 0 : 1)
      
      if (part.added) {
        additions += lineCount
        changes += lineCount
      } else if (part.removed) {
        deletions += lineCount
        changes += lineCount
      }
    }
    
    diffStats.value = { additions, deletions, changes }
    
    // 保存比较结果
    diffResult.value = diffResult
    
    showMessage(t('tools.code-diff.messages.diffGenerated'), 'success')
  } catch (error) {
    console.error('比较代码出错:', error)
    showMessage(t('tools.code-diff.messages.error') + ': ' + error.message, 'error')
  } finally {
    isProcessing.value = false
  }
}

// 清空所有
function clearAll() {
  originalCode.value = ''
  modifiedCode.value = ''
  diffResult.value = null
  message.value = ''
}

// 交换代码
function swapCodes() {
  const temp = originalCode.value
  originalCode.value = modifiedCode.value
  modifiedCode.value = temp
}

// 生成合并视图HTML
const unifiedDiff = computed(() => {
  if (!diffResult.value) return ''
  
  let html = ''
  
  for (const part of diffResult.value) {
    const content = highlightCode(part.value, language.value)
    
    if (part.added) {
      html += `<div class="diff-line diff-addition">${content}</div>`
    } else if (part.removed) {
      html += `<div class="diff-line diff-deletion">${content}</div>`
    } else {
      html += `<div class="diff-line">${content}</div>`
    }
  }
  
  return html
})

// 生成并排视图HTML
const sideBySideDiff = computed(() => {
  if (!diffResult.value) return { left: '', right: '' }
  
  let leftHtml = ''
  let rightHtml = ''
  
  for (const part of diffResult.value) {
    const content = highlightCode(part.value, language.value)
    
    if (part.added) {
      rightHtml += `<div class="diff-line diff-addition">${content}</div>`
    } else if (part.removed) {
      leftHtml += `<div class="diff-line diff-deletion">${content}</div>`
    } else {
      leftHtml += `<div class="diff-line">${content}</div>`
      rightHtml += `<div class="diff-line">${content}</div>`
    }
  }
  
  return { left: leftHtml, right: rightHtml }
})

// 显示消息
function showMessage(msg, type = 'info') {
  message.value = msg
  messageType.value = type
  
  // 3秒后自动清除消息
  setTimeout(() => {
    if (message.value === msg) {
      message.value = ''
    }
  }, 3000)
}

// 监听语言变化
watch(language, () => {
  if (originalCode.value || modifiedCode.value) {
    if (confirm(t('tools.code-diff.messages.confirmLanguageChange'))) {
      originalCode.value = ''
      modifiedCode.value = ''
      diffResult.value = null
    }
  }
})

// 组件挂载初始化
onMounted(() => {
  // 可以在这里添加初始化代码
})
</script>

<style>
/* 差异行样式 */
.diff-line {
  padding: 2px 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.diff-addition {
  background-color: rgba(0, 255, 0, 0.1);
  border-left: 3px solid #28a745;
  padding-left: 5px;
}

.diff-deletion {
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 3px solid #dc3545;
  padding-left: 5px;
}

/* 在暗模式下调整样式 */
.dark .diff-addition {
  background-color: rgba(40, 167, 69, 0.2);
}

.dark .diff-deletion {
  background-color: rgba(220, 53, 69, 0.2);
}
</style> 