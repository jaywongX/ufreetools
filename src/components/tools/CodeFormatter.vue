<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具控制栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="formatCode" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
          :disabled="isProcessing || !inputCode.trim()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {{ action === 'format' ? '美化代码' : '压缩代码' }}
        </button>
        <button 
          @click="copyResult" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!outputCode"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          复制结果
        </button>
        <button 
          @click="clearAll" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing || (!inputCode && !outputCode)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清空
        </button>
      </div>
      <div class="flex flex-wrap space-x-2">
        <!-- 操作类型 -->
        <div class="inline-flex rounded-md shadow-sm mr-2">
          <button
            @click="action = 'format'"
            type="button"
            class="px-3 py-1.5 text-xs rounded-l-md focus:z-10 focus:outline-none"
            :class="{
              'bg-primary text-white': action === 'format',
              'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': action !== 'format'
            }"
          >
            美化
          </button>
          <button
            @click="action = 'minify'"
            type="button"
            class="px-3 py-1.5 text-xs rounded-r-md focus:z-10 focus:outline-none"
            :class="{
              'bg-primary text-white': action === 'minify',
              'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': action !== 'minify'
            }"
          >
            压缩
          </button>
        </div>
        
        <!-- 语言选择 -->
        <select 
          v-model="language" 
          class="px-3 py-1.5 text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="json">JSON</option>
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
    
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 输入区域 -->
      <div class="space-y-2">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">输入代码</label>
          <div class="flex space-x-2">
            <button 
              @click="pasteFromClipboard" 
              class="text-xs text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
              title="从剪贴板粘贴"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </button>
            <button 
              @click="loadSampleCode" 
              class="text-xs text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
              title="加载示例代码"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 w-8 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-1 text-xs text-gray-400 select-none">
            <!-- 行号 -->
            <div v-for="i in Math.max(1, (inputCode.match(/\n/g) || []).length + 1)" :key="i" class="w-full text-center py-px">
              {{ i }}
            </div>
          </div>
          <textarea
            v-model="inputCode"
            class="w-full h-80 p-2 pl-10 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="在此输入您的代码..."
            :disabled="isProcessing"
            @keydown.tab.prevent="insertTab"
          ></textarea>
        </div>
        
        <!-- 输入设置 -->
        <div v-if="action === 'format'" class="grid grid-cols-2 gap-2 pt-2">
          <div class="space-y-1">
            <label class="block text-xs text-gray-600 dark:text-gray-400">缩进</label>
            <select 
              v-model="formatOptions.indent"
              class="w-full px-2 py-1 text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            >
              <option value="2">2 空格</option>
              <option value="4">4 空格</option>
              <option value="tab">Tab</option>
            </select>
          </div>
          <div class="space-y-1">
            <label class="block text-xs text-gray-600 dark:text-gray-400">换行符</label>
            <select 
              v-model="formatOptions.eol"
              class="w-full px-2 py-1 text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            >
              <option value="auto">自动</option>
              <option value="lf">LF (Unix)</option>
              <option value="crlf">CRLF (Windows)</option>
            </select>
          </div>
        </div>

        <div v-if="action === 'minify'" class="space-y-2 pt-2">
          <div class="flex items-center">
            <input 
              id="remove-comments" 
              type="checkbox" 
              v-model="minifyOptions.removeComments"
              class="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-800"
            >
            <label for="remove-comments" class="ml-2 text-xs text-gray-600 dark:text-gray-400">移除注释</label>
          </div>
          
          <div v-if="language === 'javascript'" class="flex items-center">
            <input 
              id="mangle" 
              type="checkbox" 
              v-model="minifyOptions.mangle" 
              class="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-800"
            >
            <label for="mangle" class="ml-2 text-xs text-gray-600 dark:text-gray-400">变量名混淆</label>
          </div>
        </div>
      </div>
      
      <!-- 输出区域 -->
      <div class="space-y-2">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">输出结果</label>
          <div class="text-xs text-gray-500 dark:text-gray-400">
            <span v-if="outputStats.charCount > 0">
              {{ outputStats.charCount }} 字符 
              <span v-if="inputStats.charCount > 0">
                ({{ outputStats.charCount < inputStats.charCount ? '-' : '+' }}{{ Math.abs(Math.round((outputStats.charCount - inputStats.charCount) / inputStats.charCount * 100)) }}%)
              </span>
            </span>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 w-8 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-1 text-xs text-gray-400 select-none">
            <!-- 行号 -->
            <div v-for="i in Math.max(1, (outputCode.match(/\n/g) || []).length + 1)" :key="i" class="w-full text-center py-px">
              {{ i }}
            </div>
          </div>
          <div 
            ref="outputContainer"
            class="w-full h-80 relative overflow-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md"
          >
            <pre
              class="p-2 pl-10 font-mono text-sm text-gray-900 dark:text-gray-100 min-h-full"
            ><code v-html="highlightedOutput"></code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

// 使用依赖包
import * as beautify from 'js-beautify'
import { minify as terserMinify } from 'terser'
import { minify as htmlMinify } from 'html-minifier-terser'
import CleanCSS from 'clean-css'

// 状态
const isProcessing = ref(false)
const inputCode = ref('')
const outputCode = ref('')
const message = ref('')
const messageType = ref('info')

// 格式化选项
const language = ref('javascript')
const action = ref('format')
const formatOptions = ref({
  indent: '2', // 缩进空格数量或tab
  maxLineLength: '100',
  wrapAttributes: 'auto',
  preserveNewlines: true,
  removeComments: false
})

// 压缩选项
const minifyOptions = ref({
  removeComments: true,
  mangle: true,
})

// 统计信息
const inputStats = computed(() => ({
  charCount: inputCode.value.length,
  lineCount: (inputCode.value.match(/\n/g) || []).length + 1
}))

const outputStats = computed(() => ({
  charCount: outputCode.value.length,
  lineCount: (outputCode.value.match(/\n/g) || []).length + 1
}))

// 高亮后的输出
const highlightedOutput = computed(() => {
  if (!outputCode.value) return ''
  
  try {
    const highlighted = hljs.highlight(outputCode.value, { language: language.value }).value
    return highlighted
  } catch (e) {
    console.error('Highlight error:', e)
    return outputCode.value
  }
})

// 格式化代码
async function formatCode() {
  if (!inputCode.value.trim()) {
    showMessage('请输入要处理的代码', 'error')
    return
  }
  
  isProcessing.value = true
  message.value = ''
  
  try {
    if (action.value === 'format') {
      // 美化代码
      await beautifyCode()
    } else {
      // 压缩代码
      await minifyCode()
    }
    
    showMessage(`代码${action.value === 'format' ? '美化' : '压缩'}成功！`, 'success')
  } catch (error) {
    console.error('格式化错误:', error)
    showMessage(`处理代码时出错: ${error.message}`, 'error')
    outputCode.value = ''
  } finally {
    isProcessing.value = false
  }
}

// 美化代码
async function beautifyCode() {
  const indent = formatOptions.indent === 'tab' ? '\t' : ' '.repeat(parseInt(formatOptions.indent))
  
  switch (language.value) {
    case 'html':
      outputCode.value = beautify.html(inputCode.value, {
        indent_size: formatOptions.indent === 'tab' ? 1 : parseInt(formatOptions.indent),
        indent_char: formatOptions.indent === 'tab' ? '\t' : ' ',
        max_preserve_newlines: formatOptions.preserveNewlines ? 2 : 0,
        preserve_newlines: formatOptions.preserveNewlines,
        indent_inner_html: true,
        wrap_line_length: parseInt(formatOptions.maxLineLength),
        unformatted: ['code', 'pre'],
        extra_liners: []
      })
      break
      
    case 'css':
      outputCode.value = beautify.css(inputCode.value, {
        indent_size: formatOptions.indent === 'tab' ? 1 : parseInt(formatOptions.indent),
        indent_char: formatOptions.indent === 'tab' ? '\t' : ' '
      })
      break
      
    case 'javascript':
      outputCode.value = beautify.js(inputCode.value, {
        indent_size: formatOptions.indent === 'tab' ? 1 : parseInt(formatOptions.indent),
        indent_char: formatOptions.indent === 'tab' ? '\t' : ' ',
        preserve_newlines: formatOptions.preserveNewlines,
        max_preserve_newlines: formatOptions.preserveNewlines ? 2 : 0,
        space_after_anon_function: true,
        brace_style: 'collapse,preserve-inline'
      })
      break
      
    case 'json':
      try {
        // 解析JSON以验证
        const jsonObj = JSON.parse(inputCode.value)
        outputCode.value = JSON.stringify(jsonObj, null, indent)
      } catch (error) {
        throw new Error(`无效的JSON: ${error.message}`)
      }
      break
  }
}

// 压缩代码
async function minifyCode() {
  switch (language.value) {
    case 'html':
      outputCode.value = await htmlMinify(inputCode.value, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      })
      break
      
    case 'css':
      const cssResult = new CleanCSS({
        level: 2
      }).minify(inputCode.value)
      
      if (cssResult.errors.length > 0) {
        throw new Error(cssResult.errors.join('; '))
      }
      
      outputCode.value = cssResult.styles
      break
      
    case 'javascript':
      try {
        const result = await terserMinify(inputCode.value, {
          compress: true,
          mangle: true
        })
        outputCode.value = result.code
      } catch (error) {
        throw new Error(`JavaScript压缩错误: ${error.message}`)
      }
      break
      
    case 'json':
      try {
        // 解析JSON以验证
        const jsonObj = JSON.parse(inputCode.value)
        outputCode.value = JSON.stringify(jsonObj)
      } catch (error) {
        throw new Error(`无效的JSON: ${error.message}`)
      }
      break
  }
}

// 复制结果
function copyResult() {
  if (!outputCode.value) {
    showMessage('没有可复制的结果', 'error')
    return
  }
  
  navigator.clipboard.writeText(outputCode.value)
    .then(() => {
      showMessage('已复制到剪贴板', 'success')
    })
    .catch(err => {
      console.error('复制失败:', err)
      showMessage('复制失败，请手动复制', 'error')
    })
}

// 清空所有
function clearAll() {
  inputCode.value = ''
  outputCode.value = ''
  message.value = ''
  showMessage('已清空', 'info')
}

// 从剪贴板粘贴
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText()
    inputCode.value = text
    showMessage('已从剪贴板粘贴内容', 'info')
  } catch (err) {
    console.error('粘贴失败:', err)
    showMessage('无法访问剪贴板，请手动粘贴', 'error')
  }
}

// 加载示例代码
function loadSampleCode() {
  let sample = ''
  
  switch (language.value) {
    case 'html':
      sample = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML示例</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.6; }
    header { background-color: #f4f4f4; padding: 20px; margin-bottom: 20px; }
    h1 { color: #333; }
    .container { max-width: 1200px; margin: 0 auto; }
    footer { margin-top: 30px; background-color: #333; color: white; padding: 10px; text-align: center; }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <h1>欢迎访问我的网站</h1>
      <p>这是一个HTML示例文档</p>
    </div>
  </header>
  
  <div class="container">
    <main>
      <article>
        <h2>文章标题</h2>
        <p>这是一段示例文本，用于展示HTML代码的格式化。格式化工具可以帮助开发者将凌乱的代码整理得更加规范和易读。</p>
        <ul>
          <li>列表项一</li>
          <li>列表项二</li>
          <li>列表项三</li>
        </ul>
      </article>
    </main>
  </div>
  
  <footer>
    <p>&copy; 2023 示例网站 版权所有</p>
  </footer>
</body>
</html>`
      break
      
    case 'css':
      sample = `.header {
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

.header-logo {
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
}

nav.main-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 15px;
}

.nav-links li:last-child {
  margin-right: 0;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-button {
    display: block;
  }
}`
      break
      
    case 'javascript':
      sample = `// 购物车计算器
function calculateTotal(items, promoCode = null) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return 0;
  }
  
  // 计算商品总价
  let total = 0;
  
  for (const item of items) {
    if (!item.price || !item.quantity) {
      console.warn("发现无效商品项:", item);
      continue;
    }
    
    // 应用单品折扣
    let itemPrice = item.price;
    if (item.discount) {
      itemPrice = item.price * (1 - item.discount);
    }
    
    total += itemPrice * item.quantity;
  }
  
  // 应用促销码
  let discount = 0;
  if (promoCode) {
    switch(promoCode.toUpperCase()) {
      case 'SAVE10':
        discount = total * 0.1;
        break;
      case 'SAVE20':
        discount = total * 0.2;
        break;
      case 'FREESHIP':
        discount = 12; // 免运费优惠金额
        break;
    }
  }
  
  const finalTotal = total - discount;
  
  // 打印收据
  console.log("购物车计算结果:");
  console.log("------------------------");
  
  items.forEach((item, index) => {
    console.log(\`\${index + 1}. \${item.name} - ¥\${item.price} x \${item.quantity}\`);
  });
  
  if (discount > 0) {
    console.log(\`小计: ¥\${total.toFixed(2)}\`);
    console.log(\`折扣: -¥\${discount.toFixed(2)}\`);
  }
  
  console.log(\`总计: ¥\${finalTotal.toFixed(2)}\`);
  
  return finalTotal;
}`
      break
      
    case 'json':
      sample = `{
  "name": "代码格式化工具",
  "version": "1.0.0",
  "description": "一个简单易用的在线代码格式化工具",
  "features": [
    "HTML格式化",
    "CSS格式化",
    "JavaScript格式化",
    "JSON格式化",
    "代码压缩"
  ],
  "settings": {
    "indent": {
      "options": ["2空格", "4空格", "Tab"],
      "default": "2空格"
    },
    "theme": {
      "light": {
        "background": "#ffffff",
        "text": "#333333"
      },
      "dark": {
        "background": "#1e1e1e",
        "text": "#f0f0f0"
      }
    }
  },
  "performance": {
    "formatSpeed": "fast",
    "supportedFileSizes": {
      "max": "5MB",
      "recommended": "1MB"
    }
  },
  "contact": {
    "website": "https://example.com",
    "email": "support@example.com"
  }
}`
      break
  }
  
  inputCode.value = sample
  outputCode.value = ''
  showMessage('已加载示例代码', 'info')
}

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

// 处理Tab键插入制表符
function insertTab(e) {
  // 插入制表符或空格
  const tabReplacement = formatOptions.indent === 'tab' ? '\t' : ' '.repeat(parseInt(formatOptions.indent))
  const start = e.target.selectionStart
  const end = e.target.selectionEnd
  
  inputCode.value = inputCode.value.substring(0, start) + tabReplacement + inputCode.value.substring(end)
  
  // 设置光标位置
  setTimeout(() => {
    e.target.selectionStart = e.target.selectionEnd = start + tabReplacement.length
  }, 0)
}

// 监听语言变化，修改示例代码和格式化选项
watch(language, () => {
  // 如果用户已输入代码，不要覆盖
  if (inputCode.value && !confirm('切换语言将清除当前代码，是否继续？')) {
    return
  }
  
  // 清空代码
  inputCode.value = ''
  outputCode.value = ''
  
  // 根据语言设置默认选项
  if (language.value === 'html') {
    formatOptions.indent = '2'
  } else if (language.value === 'css') {
    formatOptions.indent = '2'
  } else if (language.value === 'javascript') {
    formatOptions.indent = '2'
  } else if (language.value === 'json') {
    formatOptions.indent = '2'
  }
})

// 组件挂载后初始化
onMounted(() => {
  // 初始化
})
</script>

<style>
/* 代码高亮的自定义样式 */
.hljs {
  background: transparent !important;
  padding: 0 !important;
}

/* 在暗模式下调整高亮样式 */
.dark .hljs {
  filter: invert(0.85);
}
</style> 