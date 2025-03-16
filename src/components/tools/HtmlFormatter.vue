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
                id="remove-comments" 
                v-model="removeComments"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="remove-comments" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {{ formatMode === 'minify' ? '移除注释' : '保留注释' }}
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
                id="preserve-line-breaks" 
                v-model="preserveLineBreaks"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="preserve-line-breaks" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                保留换行符
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>HTML美化/压缩工具可以帮助开发者快速整理或优化HTML代码，提高可读性或减小文件体积。</p>
      </div>
    </div>
    
    <!-- 输入区域 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          HTML输入
        </label>
        <div class="flex space-x-2">
          <button 
            @click="formatHtml" 
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
          <div class="relative" v-if="examples && examples.length > 0">
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
                v-for="(example, index) in examples" 
                :key="index"
                @click="loadExample(example.id); showExamplesDropdown = false"
                class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {{ example.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="border border-gray-300 dark:border-gray-600 rounded-md">
          <textarea 
            v-model="inputHtml" 
            rows="10" 
            class="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm rounded-md"
            placeholder="在这里粘贴或输入HTML代码..."
          ></textarea>
        </div>
        <div class="mt-2 text-xs text-right text-gray-500 dark:text-gray-400">
          字符数: {{ inputHtml.length }} | 行数: {{ inputHtml.split('\n').length }}
        </div>
      </div>
      <div v-if="errorMessage" class="mt-2 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm">
        {{ errorMessage }}
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="outputHtml">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ formatMode === 'beautify' ? '美化结果' : '压缩结果' }}
        </label>
        <button 
          @click="copyOutput" 
          class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {{ copyStatus ? '已复制！' : '复制' }}
        </button>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <pre
          v-if="showLineNumbers && formatMode === 'beautify'"
          class="p-4 text-sm font-mono flex"
        >
          <div class="text-gray-400 dark:text-gray-500 pr-4 text-right select-none border-r border-gray-200 dark:border-gray-700 mr-4">
            <div v-for="i in outputHtml.split('\n').length" :key="i">{{ i }}</div>
          </div>
          <code class="text-gray-800 dark:text-gray-200">{{ outputHtml }}</code>
        </pre>
        <pre 
          v-else 
          class="p-4 text-sm font-mono text-gray-800 dark:text-gray-200"
        >{{ outputHtml }}</pre>
      </div>
      <div class="mt-2 text-xs text-right text-gray-500 dark:text-gray-400">
        字符数: {{ outputHtml.length }} | 行数: {{ outputHtml.split('\n').length }} | 
        {{ formatMode === 'minify' ? '减少了 ' + (inputHtml.length - outputHtml.length) + ' 个字符 (' + Math.round((1 - outputHtml.length / inputHtml.length) * 100) + '%)' : '' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// 状态变量
const formatMode = ref('beautify')  // 'beautify' 或 'minify'
const indentSize = ref('2')  // '2', '4' 或 'tab'
const showLineNumbers = ref(true)
const removeComments = ref(false)
const preserveLineBreaks = ref(true)
const inputHtml = ref('')
const outputHtml = ref('')
const errorMessage = ref('')
const copyStatus = ref(false)
const showExamplesDropdown = ref(false)

// HTML示例
const examples = [
  { 
    id: 'simple', 
    name: '简单HTML' 
  },
  { 
    id: 'complex', 
    name: '复杂HTML页面' 
  }
]

// 格式化HTML
function formatHtml() {
  if (!inputHtml.value.trim()) {
    errorMessage.value = '请输入需要处理的HTML代码'
    return
  }
  
  try {
    // 根据选择的模式处理HTML
    if (formatMode.value === 'beautify') {
      outputHtml.value = beautifyHtml(inputHtml.value)
    } else {
      outputHtml.value = minifyHtml(inputHtml.value)
    }
    
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = `处理HTML失败：${error.message}`
    console.error('HTML处理错误:', error)
  }
}

// 美化HTML
function beautifyHtml(html) {
  // 处理一些常见错误，例如缺少结束标签
  html = html.trim()
  
  // 移除注释（如果选择了该选项）
  if (removeComments.value) {
    html = html.replace(/<!--[\s\S]*?-->/g, '')
  }
  
  // 缩进设置
  let indent
  if (indentSize.value === 'tab') {
    indent = '\t'
  } else {
    indent = ' '.repeat(parseInt(indentSize.value))
  }
  
  // 格式化HTML
  return prettyPrintHtml(html, indent)
}

// 压缩HTML
function minifyHtml(html) {
  // 移除注释（如果选择了该选项）
  if (removeComments.value) {
    html = html.replace(/<!--[\s\S]*?-->/g, '')
  }
  
  // 移除所有不必要的空白字符
  let result = html
    .replace(/[\t\n\r]+/g, '') // 移除制表符和换行符
    .replace(/\s{2,}/g, ' ')   // 将多个空格替换为单个空格
    .replace(/>\s+</g, '><')   // 移除标签之间的空白
    .replace(/\s+>/g, '>')     // 移除结束尖括号前的空白
    .replace(/>\s+/g, '>')     // 移除结束尖括号后的空白
    .replace(/\s+</g, '<')     // 移除开始尖括号前的空白
    .replace(/\s+=/g, '=')     // 移除等号前的空白
    .replace(/=\s+/g, '=')     // 移除等号后的空白
  
  // 保留换行符（如果选择了该选项）
  if (preserveLineBreaks.value) {
    result = result.replace(/><(?!\/?(area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr))/g, '>\n<')
  }
  
  return result
}

// HTML美化核心算法
function prettyPrintHtml(html, indent) {
  let result = ''
  let indentLevel = 0
  
  // 预处理HTML
  html = html
    .replace(/<!DOCTYPE[^>]*>/i, match => match + '\n') // 在DOCTYPE声明后添加换行
    .replace(/<([^\/!])([^>]*)>/g, (match, p1, p2) => {
      // 对自闭合标签特殊处理
      if (p2.endsWith('/')) {
        return match
      }
      // 对内联元素不换行
      if (/^(a|abbr|b|bdi|bdo|br|button|cite|code|data|datalist|dfn|em|i|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var|wbr)(\s|$)/i.test(p1 + p2)) {
        return match
      }
      return match + '\n'
    })
    .replace(/<\/(html|head|body|div|p|ul|ol|li|dl|dt|dd|header|footer|section|article|aside|nav|table|thead|tbody|tr|th|td|form|fieldset|h[1-6]|blockquote|pre|figure|figcaption)[^>]*>/gi, match => match + '\n')
  
  // 处理每一行
  const lines = html.split('\n')
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim()
    if (!line) continue
    
    // 减少缩进级别的结束标签
    if (line.match(/^<\/[^>]+>/)) {
      indentLevel = Math.max(0, indentLevel - 1)
    }
    
    // 添加适当的缩进
    if (line.length > 0) {
      result += indent.repeat(indentLevel) + line + '\n'
    }
    
    // 增加缩进级别的开始标签（非自闭合）
    if (line.match(/^<[^\/!][^>]*>$/) && !line.match(/\/>$/) && !line.match(/^<(br|hr|img|input|link|meta|area|base|col|embed|keygen|source|track|wbr)/i)) {
      indentLevel++
    }
  }
  
  return result.trim()
}

// 复制输出结果
function copyOutput() {
  if (!outputHtml.value) return
  
  navigator.clipboard.writeText(outputHtml.value)
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
  inputHtml.value = ''
  outputHtml.value = ''
  errorMessage.value = ''
}

// 加载示例HTML
function loadExample(type) {
  switch(type) {
    case 'simple':
      inputHtml.value = `<!DOCTYPE html>
<html>
<head>
    <title>简单HTML页面</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <h1>欢迎访问我的网站</h1>
        <nav>
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>关于我们</h2>
            <p>这是一个<strong>HTML格式化示例</strong>，用于演示HTML美化和压缩功能。</p>
            <p>您可以看到这段代码在格式化前后的区别。</p>
        </section>
        
        <section>
            <h2>我们的服务</h2>
            <ul>
                <li>Web开发</li>
                <li>移动应用开发</li>
                <li>UI/UX设计</li>
            </ul>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 我的网站. All rights reserved.</p>
    </footer>
</body>
</html>`
      break
    case 'complex':
      inputHtml.value = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>复杂HTML示例</title><style>body{font-family:Arial,sans-serif;line-height:1.6;margin:0;padding:0;color:#333;background-color:#f5f5f5}.container{width:80%;margin:0 auto;padding:20px}header{background-color:#333;color:white;padding:1rem;text-align:center}nav{background-color:#444;padding:0.5rem}nav ul{display:flex;justify-content:center;list-style-type:none;margin:0;padding:0}nav ul li{margin:0 10px}nav ul li a{color:white;text-decoration:none}main{display:grid;grid-template-columns:70% 30%;gap:20px;margin-top:20px}article{background-color:white;padding:20px;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,0.1)}aside{background-color:white;padding:20px;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,0.1)}footer{background-color:#333;color:white;text-align:center;padding:1rem;margin-top:20px}.card{border:1px solid #ddd;border-radius:4px;padding:15px;margin-bottom:15px}.btn{display:inline-block;padding:8px 16px;background-color:#4CAF50;color:white;text-decoration:none;border-radius:4px;cursor:pointer}.btn:hover{background-color:#45a049}.highlight{background-color:#fff9c4;padding:2px 5px;border-radius:3px}</style></head><body><header><h1>复杂HTML示例页面</h1><p>这是一个复杂的HTML页面结构示例</p></header><nav><ul><li><a href="#">首页</a></li><li><a href="#">产品</a></li><li><a href="#">服务</a></li><li><a href="#">博客</a></li><li><a href="#">关于我们</a></li><li><a href="#">联系我们</a></li></ul></nav><div class="container"><main><article><section><h2>主要内容区域</h2><p>这是页面的主要内容区域，通常包含最重要的信息。这个区域可以包含多个部分。</p><p>这个<span class="highlight">HTML美化工具</span>可以帮助你整理混乱的HTML代码，使其更易于阅读和维护。</p></section><section><h3>文章列表</h3><div class="card"><h4>如何使用HTML格式化工具</h4><p>本文将介绍如何使用HTML格式化工具来改善你的代码质量和可读性...</p><a href="#" class="btn">阅读更多</a></div><div class="card"><h4>HTML编码最佳实践</h4><p>学习专业开发者使用的HTML编码技巧和最佳实践...</p><a href="#" class="btn">阅读更多</a></div><div class="card"><h4>响应式网页设计基础</h4><p>了解如何创建在各种设备上都能完美显示的响应式网页...</p><a href="#" class="btn">阅读更多</a></div></section></article><aside><section><h3>侧边栏</h3><p>这里通常包含次要信息，如相关链接、广告或小部件。</p></section><section><h4>最新文章</h4><ul><li><a href="#">CSS网格布局完全指南</a></li><li><a href="#">JavaScript异步编程</a></li><li><a href="#">Web性能优化技巧</a></li><li><a href="#">现代Web开发工具</a></li></ul></section><section><h4>分类</h4><ul><li><a href="#">HTML</a></li><li><a href="#">CSS</a></li><li><a href="#">JavaScript</a></li><li><a href="#">Web设计</a></li><li><a href="#">用户体验</a></li></ul></section></aside></main><footer><p>&copy; 2023 HTML美化工具示例 | 保留所有权利</p><p><small>这个页面仅用于演示目的</small></p><!-- 这是一个注释，可以被HTML压缩工具删除 --></footer></div></body></html>`
      break
  }
  
  // 自动格式化加载的示例
  formatHtml()
}

// 监听输入变化，清除错误信息
watch(inputHtml, () => {
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