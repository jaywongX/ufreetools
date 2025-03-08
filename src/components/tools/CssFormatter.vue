<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            操作类型
          </label>
          <div class="flex">
            <button 
              @click="formatMode = 'beautify'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="formatMode === 'beautify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              美化
            </button>
            <button 
              @click="formatMode = 'minify'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="formatMode === 'minify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              压缩
            </button>
          </div>
        </div>
        
        <div v-if="formatMode === 'beautify'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            缩进设置
          </label>
          <select 
            v-model="indentSize" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="2">2个空格</option>
            <option value="4">4个空格</option>
            <option value="tab">Tab缩进</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            格式化选项
          </label>
          <div class="space-y-2">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="preserve-comments" 
                v-model="preserveComments"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="preserve-comments" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                保留注释
              </label>
            </div>
            <div class="flex items-center" v-if="formatMode === 'beautify'">
              <input 
                type="checkbox" 
                id="show-line-numbers" 
                v-model="showLineNumbers"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="show-line-numbers" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                显示行号
              </label>
            </div>
            <div class="flex items-center" v-if="formatMode === 'minify'">
              <input 
                type="checkbox" 
                id="preserve-semicolons" 
                v-model="preserveSemicolons"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="preserve-semicolons" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                保留最后的分号
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>CSS压缩/美化工具可以帮助开发者整理或优化CSS代码，提高可读性或减小文件体积。</p>
      </div>
    </div>
    
    <!-- 输入区域 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          CSS输入
        </label>
        <div class="flex space-x-2">
          <button 
            @click="formatCss" 
            class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ formatMode === 'beautify' ? '美化' : '压缩' }}
          </button>
          <button 
            @click="clearInput" 
            class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            清空
          </button>
          <div class="relative">
            <button 
              @click="showExamplesDropdown = !showExamplesDropdown" 
              class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
              示例
            </button>
            <div 
              v-if="showExamplesDropdown"
              class="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700"
            >
              <button 
                @click="loadExample('simple'); showExamplesDropdown = false"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                简单样式
              </button>
              <button 
                @click="loadExample('responsive'); showExamplesDropdown = false"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                响应式布局
              </button>
              <button 
                @click="loadExample('animation'); showExamplesDropdown = false"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                动画效果
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-gray-300 dark:border-gray-600 rounded-md">
        <textarea 
          v-model="inputCss" 
          rows="10" 
          class="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm rounded-md"
          placeholder="请输入需要格式化的CSS代码..."
        ></textarea>
      </div>
      <div class="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span>{{ getInputStats }}</span>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="outputCss || errorMessage">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ formatMode === 'beautify' ? '美化结果' : '压缩结果' }}
        </label>
        <button 
          @click="copyOutput" 
          class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          :class="{'text-green-500 dark:text-green-400': copyStatus}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!copyStatus" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          {{ copyStatus ? '已复制！' : '复制' }}
        </button>
      </div>
      
      <!-- 错误信息 -->
      <div v-if="errorMessage" class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md mb-4 text-sm">
        <strong>错误:</strong> {{ errorMessage }}
      </div>
      
      <!-- 格式化结果 -->
      <div v-else class="border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 overflow-hidden">
        <pre v-if="showLineNumbers && formatMode === 'beautify'" class="p-3 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-auto whitespace-pre-wrap"><code><div v-for="(line, index) in outputCss.split('\n')" :key="index" class="flex">
          <span class="inline-block w-10 mr-4 text-right select-none text-gray-400 dark:text-gray-500">{{ index + 1 }}</span>
          <span class="flex-grow">{{ line }}</span>
        </div></code></pre>
        <pre v-else class="p-3 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-auto whitespace-pre-wrap"><code>{{ outputCss }}</code></pre>
      </div>
      
      <!-- 统计信息 -->
      <div v-if="outputCss" class="mt-2 flex justify-between text-xs">
        <span class="text-gray-500 dark:text-gray-400">{{ getOutputStats }}</span>
        <span v-if="getCompressionRatio !== null" :class="getCompressionRatioClass">
          {{ getCompressionRatio }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// 状态变量
const formatMode = ref('beautify') // 'beautify' or 'minify'
const indentSize = ref('2') // '2', '4', or 'tab'
const preserveComments = ref(true)
const preserveSemicolons = ref(true)
const showLineNumbers = ref(true)
const inputCss = ref('')
const outputCss = ref('')
const errorMessage = ref('')
const copyStatus = ref(false)
const showExamplesDropdown = ref(false)

// 计算属性
const getInputStats = computed(() => {
  if (!inputCss.value) return '0 个字符 | 0 行'
  const chars = inputCss.value.length
  const lines = inputCss.value.split('\n').length
  return `${chars} 个字符 | ${lines} 行`
})

const getOutputStats = computed(() => {
  if (!outputCss.value) return '0 个字符 | 0 行'
  const chars = outputCss.value.length
  const lines = outputCss.value.split('\n').length
  return `${chars} 个字符 | ${lines} 行`
})

const getCompressionRatio = computed(() => {
  if (!inputCss.value || !outputCss.value) return null
  
  const inputSize = inputCss.value.length
  const outputSize = outputCss.value.length
  
  if (formatMode.value === 'minify') {
    const ratio = ((inputSize - outputSize) / inputSize * 100).toFixed(1)
    return `减小了 ${ratio}%`
  } else {
    const ratio = ((outputSize - inputSize) / inputSize * 100).toFixed(1)
    if (ratio > 0) {
      return `增加了 ${ratio}%`
    } else if (ratio < 0) {
      return `减小了 ${Math.abs(ratio)}%`
    } else {
      return '大小不变'
    }
  }
})

const getCompressionRatioClass = computed(() => {
  if (!getCompressionRatio.value) return ''
  
  if (formatMode.value === 'minify') {
    return 'text-green-500 dark:text-green-400 font-medium'
  } else {
    if (getCompressionRatio.value.includes('减小')) {
      return 'text-green-500 dark:text-green-400 font-medium'
    } else if (getCompressionRatio.value.includes('增加')) {
      return 'text-amber-500 dark:text-amber-400 font-medium'
    } else {
      return 'text-gray-500 dark:text-gray-400 font-medium'
    }
  }
})

// 方法
function formatCss() {
  if (!inputCss.value.trim()) {
    errorMessage.value = '请输入需要处理的CSS代码'
    return
  }
  
  try {
    // 验证是否是有效的CSS
    if (!isValidCss(inputCss.value)) {
      errorMessage.value = '无效的CSS语法，请检查您的输入'
      return
    }
    
    errorMessage.value = ''
    
    if (formatMode.value === 'beautify') {
      // 美化CSS
      outputCss.value = beautifyCss(inputCss.value)
    } else {
      // 压缩CSS
      outputCss.value = minifyCss(inputCss.value)
    }
  } catch (error) {
    errorMessage.value = `处理CSS时出错: ${error.message}`
    console.error('CSS处理错误:', error)
  }
}

// 简单的CSS验证
function isValidCss(css) {
  // 这里使用简单的检查方法，实际应用中可能需要更复杂的验证
  try {
    // 检查括号是否匹配
    let openBraces = 0
    let closeBraces = 0
    
    for (let i = 0; i < css.length; i++) {
      if (css[i] === '{') openBraces++
      if (css[i] === '}') closeBraces++
    }
    
    // 若大括号不匹配，则CSS无效
    if (openBraces !== closeBraces) {
      return false
    }
    
    return true
  } catch (e) {
    return false
  }
}

// CSS美化
function beautifyCss(css) {
  // 确定缩进字符
  let indent = ' '.repeat(parseInt(indentSize.value) || 2)
  if (indentSize.value === 'tab') indent = '\t'
  
  // 处理注释
  if (!preserveComments.value) {
    css = css.replace(/\/\*[\s\S]*?\*\//g, '')
  }
  
  // 移除多余的空白字符
  css = css.replace(/\s+/g, ' ').trim()
  
  // 在适当的位置添加换行和缩进
  let formatted = ''
  let level = 0
  
  // 处理选择器和规则
  for (let i = 0; i < css.length; i++) {
    const char = css[i]
    
    // 添加当前字符
    formatted += char
    
    if (char === '{') {
      // 在左花括号后添加换行和增加缩进级别
      formatted += '\n' + indent.repeat(++level)
    } else if (char === '}') {
      // 在右花括号前添加换行和减少缩进级别
      if (i < css.length - 1 && css[i+1] !== '}') {
        formatted += '\n\n' + indent.repeat(--level > 0 ? level - 1 : 0)
      } else {
        formatted += '\n' + indent.repeat(--level > 0 ? level - 1 : 0)
      }
    } else if (char === ';') {
      // 在分号后添加换行
      if (i < css.length - 1 && css[i+1] !== '}') {
        formatted += '\n' + indent.repeat(level)
      }
    } else if (char === ':') {
      // 在冒号后添加空格
      formatted += ' '
    }
  }
  
  return formatted
}

// CSS压缩
function minifyCss(css) {
  // 处理注释
  if (!preserveComments.value) {
    css = css.replace(/\/\*[\s\S]*?\*\//g, '')
  }
  
  // 移除所有空白字符
  css = css.replace(/\s+/g, ' ')
  
  // 移除不必要的空格
  css = css.replace(/\s*([{}:;,])\s*/g, '$1')
  css = css.replace(/;\}/g, '}') // 移除最后的分号
  css = css.replace(/\s+/g, ' ') // 合并连续空格
  css = css.trim()
  
  // 如果需要保留最后的分号
  if (preserveSemicolons.value) {
    css = css.replace(/}/g, ';}').replace(/;+}/g, ';}')
  }
  
  return css
}

// 复制输出结果
function copyOutput() {
  if (!outputCss.value) return
  
  navigator.clipboard.writeText(outputCss.value)
    .then(() => {
      copyStatus.value = true
      setTimeout(() => {
        copyStatus.value = false
      }, 2000)
    })
    .catch(error => {
      console.error('复制失败:', error)
    })
}

// 清空输入和输出
function clearInput() {
  inputCss.value = ''
  outputCss.value = ''
  errorMessage.value = ''
}

// 加载示例CSS
function loadExample(type) {
  switch(type) {
    case 'simple':
      inputCss.value = `/* 简单的CSS样式 */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.btn {
  display: inline-block;
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background: #555;
}`
      break
      
    case 'responsive':
      inputCss.value = `/* 响应式布局样式 */
:root {
  --primary-color: #4caf50;
  --secondary-color: #2196f3;
  --dark-color: #333;
  --light-color: #f4f4f4;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: var(--light-color);
  color: var(--dark-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background-color: var(--dark-color);
  color: #fff;
  padding: 20px 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
  
  nav ul {
    margin-top: 10px;
    flex-direction: column;
  }
  
  nav ul li {
    margin: 5px 0;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }
}`
      break
      
    case 'animation':
      inputCss.value = `/* CSS动画效果示例 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}

.bounce {
  animation: bounce 2s infinite;
}

.spin {
  animation: spin 2s linear infinite;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  margin: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.box:hover {
  transform: scale(1.1);
  background-color: #2980b9;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}`
      break
  }
  
  // 自动格式化加载的示例
  formatCss()
}

// 监听输入变化，清除错误信息
watch(inputCss, () => {
  if (errorMessage.value) {
    errorMessage.value = ''
  }
})
</script>

<style scoped>
pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style> 