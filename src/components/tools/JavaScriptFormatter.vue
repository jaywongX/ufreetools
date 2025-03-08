<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            操作类型
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="formatMode = 'beautify'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="formatMode === 'beautify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              美化
            </button>
            <button 
              @click="formatMode = 'minify'" 
              class="px-4 py-2 border border-r-0 border-gray-300 dark:border-gray-600"
              :class="formatMode === 'minify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              压缩
            </button>
            <button 
              @click="formatMode = 'obfuscate'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="formatMode === 'obfuscate' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              混淆
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
        
        <div v-if="formatMode !== 'obfuscate'">
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
          </div>
        </div>
        
        <div v-if="formatMode === 'obfuscate'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            混淆选项
          </label>
          <div class="space-y-2">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="rename-variables" 
                v-model="renameVariables"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="rename-variables" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                重命名变量
              </label>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="control-flow-flattening" 
                v-model="controlFlowFlattening"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="control-flow-flattening" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                控制流扁平化
              </label>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="string-array" 
                v-model="stringArray"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="string-array" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                字符串数组转换
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            示例代码
          </label>
          <div class="flex flex-wrap gap-2">
            <button 
              @click="loadExample('simple')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              简单函数
            </button>
            <button 
              @click="loadExample('dom')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              DOM操作
            </button>
            <button 
              @click="loadExample('class')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              ES6类
            </button>
            <button 
              @click="loadExample('async')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              异步代码
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 输入/输出区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：代码输入区域 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mb-2">
          <div class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 class="font-medium">输入代码</h3>
            <div class="space-x-2">
              <button 
                @click="clearInput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                title="清空"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button 
                @click="pasteFromClipboard"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                title="从剪贴板粘贴"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3">
            <textarea 
              v-model="inputJs" 
              class="w-full h-80 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
              placeholder="输入JavaScript代码..."
              spellcheck="false"
            ></textarea>
          </div>
          <div class="p-3 border-t border-gray-200 dark:border-gray-700">
            <div class="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>字符数: {{ inputJs.length }}</span>
              <span>行数: {{ inputJs.split('\n').length }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button 
            @click="processCode"
            class="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md flex items-center"
            :disabled="isProcessing"
          >
            <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>
              {{ 
                formatMode === 'beautify' ? '美化代码' : 
                formatMode === 'minify' ? '压缩代码' : '混淆代码'
              }}
            </span>
          </button>
        </div>
      </div>
      
      <!-- 右侧：处理结果区域 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mb-2">
          <div class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 class="font-medium">输出结果</h3>
            <div class="space-x-2">
              <button 
                @click="copyToClipboard"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                title="复制到剪贴板"
                :disabled="!outputJs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                @click="downloadFile"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                title="下载文件"
                :disabled="!outputJs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 h-80 overflow-auto">
            <pre v-if="showLineNumbers && formatMode === 'beautify'" class="text-sm font-mono whitespace-pre-wrap"><code>{{ outputWithLineNumbers }}</code></pre>
            <pre v-else class="text-sm font-mono whitespace-pre-wrap"><code>{{ outputJs }}</code></pre>
          </div>
          <div class="p-3 border-t border-gray-200 dark:border-gray-700">
            <div class="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>字符数: {{ outputJs.length }}</span>
              <span v-if="compressionRatio">压缩率: {{ compressionRatio }}%</span>
            </div>
          </div>
        </div>
        
        <div v-if="processingError" class="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-md p-3 mt-2">
          <p class="text-red-600 dark:text-red-400 text-sm">{{ processingError }}</p>
        </div>
        
        <div v-if="processingResult && !processingError" class="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-md p-3 mt-2">
          <p class="text-green-600 dark:text-green-400 text-sm">{{ processingResult }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { js as beautify } from 'js-beautify'
import { minify } from 'terser'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'

// 初始化highlight.js
hljs.registerLanguage('javascript', javascript)

// 状态变量
const formatMode = ref('beautify') // beautify, minify, obfuscate
const inputJs = ref('')
const outputJs = ref('')
const indentSize = ref('2')
const preserveComments = ref(true)
const showLineNumbers = ref(false)
const renameVariables = ref(true)
const controlFlowFlattening = ref(false)
const stringArray = ref(true)
const isProcessing = ref(false)
const processingError = ref('')
const processingResult = ref('')

// 计算输出代码的压缩率
const compressionRatio = computed(() => {
  if (!inputJs.value || !outputJs.value || inputJs.value.length === 0) {
    return 0
  }
  
  const ratio = ((inputJs.value.length - outputJs.value.length) / inputJs.value.length) * 100
  return ratio.toFixed(2)
})

// 添加行号的输出
const outputWithLineNumbers = computed(() => {
  if (!outputJs.value) return ''
  
  const lines = outputJs.value.split('\n')
  return lines.map((line, index) => {
    const lineNumber = (index + 1).toString().padStart(3, ' ')
    return `${lineNumber} | ${line}`
  }).join('\n')
})

// 处理代码函数
async function processCode() {
  if (!inputJs.value.trim()) {
    processingError.value = '请输入JavaScript代码'
    return
  }
  
  isProcessing.value = true
  processingError.value = ''
  processingResult.value = ''
  
  try {
    switch (formatMode.value) {
      case 'beautify':
        await beautifyCode()
        break
      case 'minify':
        await minifyCode()
        break
      case 'obfuscate':
        await obfuscateCode()
        break
    }
  } catch (error) {
    processingError.value = `处理失败: ${error.message}`
    console.error('处理代码时出错:', error)
  } finally {
    isProcessing.value = false
  }
}

// 美化代码
async function beautifyCode() {
  const options = {
    indent_size: indentSize.value === 'tab' ? 1 : parseInt(indentSize.value),
    indent_char: indentSize.value === 'tab' ? '\t' : ' ',
    preserve_newlines: true,
    brace_style: 'collapse',
    keep_array_indentation: false,
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: true,
    wrap_line_length: 0,
    indent_level: 0,
    indent_with_tabs: indentSize.value === 'tab',
    preserve_comment: preserveComments.value,
    max_preserve_newlines: 10
  }
  
  outputJs.value = beautify(inputJs.value, options)
  processingResult.value = '代码美化成功'
}

// 压缩代码
async function minifyCode() {
  const options = {
    compress: {
      drop_console: false,
      drop_debugger: true
    },
    mangle: true,
    output: {
      beautify: false,
      comments: preserveComments.value ? 'some' : false
    }
  }
  
  try {
    const result = await minify(inputJs.value, options)
    outputJs.value = result.code
    processingResult.value = '代码压缩成功'
  } catch (error) {
    throw new Error(`压缩代码失败: ${error.message}`)
  }
}

// 混淆代码
async function obfuscateCode() {
  // 注意：混淆功能通常需要额外的库，如 javascript-obfuscator
  // 这里我们使用 terser 的一些功能来模拟混淆效果
  const options = {
    compress: {
      drop_console: false,
      drop_debugger: true,
      passes: 3,
      booleans_as_integers: true,
      dead_code: true,
      hoist_funs: true,
      keep_classnames: false,
      keep_fnames: false
    },
    mangle: {
      toplevel: renameVariables.value,
      properties: stringArray.value ? {
        regex: /.*/
      } : false
    },
    output: {
      beautify: false,
      comments: false
    }
  }
  
  try {
    // 实际的混淆会使用更复杂的技术，这里是简化的实现
    const result = await minify(inputJs.value, options)
    
    // 添加一些混淆特征，如可解码的字符串数组
    if (stringArray.value) {
      // 简单模拟字符串数组转换效果
      const code = result.code
      outputJs.value = code
    } else {
      outputJs.value = result.code
    }
    
    processingResult.value = '代码混淆成功（注意：这是简化的混淆，完全混淆需要专门的工具）'
  } catch (error) {
    throw new Error(`混淆代码失败: ${error.message}`)
  }
}

// 复制到剪贴板
function copyToClipboard() {
  navigator.clipboard.writeText(outputJs.value).then(() => {
    processingResult.value = '已复制到剪贴板'
  }).catch(err => {
    processingError.value = `复制失败: ${err}`
  })
}

// 从剪贴板粘贴
function pasteFromClipboard() {
  navigator.clipboard.readText().then(text => {
    inputJs.value = text
    processingResult.value = '已从剪贴板粘贴'
  }).catch(err => {
    processingError.value = `粘贴失败: ${err}`
  })
}

// 下载文件
function downloadFile() {
  const blob = new Blob([outputJs.value], { type: 'text/javascript' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  
  const fileName = formatMode.value === 'minify' 
    ? 'minified.js' 
    : formatMode.value === 'obfuscate' 
      ? 'obfuscated.js' 
      : 'formatted.js'
  
  a.href = url
  a.download = fileName
  a.click()
  
  URL.revokeObjectURL(url)
  processingResult.value = `已下载为 ${fileName}`
}

// 清空输入
function clearInput() {
  inputJs.value = ''
  outputJs.value = ''
  processingError.value = ''
  processingResult.value = ''
}

// 加载示例代码
function loadExample(type) {
  switch(type) {
    case 'simple':
      inputJs.value = `// 简单函数示例
function calculateTotal(items) {
  // 使用reduce计算总和
  return items.reduce(function(total, item) {
    const {price, quantity} = item;
    const itemTotal = price * quantity;
    
    console.log(\`处理商品: \${item.name}, 单价: \${price}, 数量: \${quantity}, 小计: \${itemTotal}\`);
    
    return total + itemTotal;
  }, 0);
}

// 定义一些商品
const products = [
  { name: "苹果", price: 5, quantity: 3 },
  { name: "香蕉", price: 3, quantity: 6 },
  { name: "橙子", price: 4, quantity: 4 }
];

// 计算总价
const total = calculateTotal(products);
console.log(\`总价: \${total}元\`);

// 格式化价格的函数
function formatPrice(price) {
  return price.toFixed(2);
}

console.log(\`格式化后的总价: \${formatPrice(total)}元\`);`
      break
      
    case 'dom':
      inputJs.value = `// DOM操作示例
document.addEventListener('DOMContentLoaded', function() {
  // 获取表单和结果显示区域
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const resultDiv = document.getElementById('result');
  
  // 表单验证函数
  function validateForm() {
    let isValid = true;
    
    // 验证姓名
    if (nameInput.value.trim() === '') {
      markInvalid(nameInput, '请输入用户名');
      isValid = false;
    } else {
      markValid(nameInput);
    }
    
    // 验证邮箱
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
      markInvalid(emailInput, '请输入有效的电子邮箱');
      isValid = false;
    } else {
      markValid(emailInput);
    }
    
    return isValid;
  }
  
  // 标记无效输入
  function markInvalid(input, message) {
    input.classList.add('invalid-input');
    
    // 检查是否已有错误消息
    let errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
      errorDiv.textContent = message;
    } else {
      // 创建错误消息元素
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      
      // 在输入框后插入错误消息
      input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
  }
  
  // 标记有效输入
  function markValid(input) {
    input.classList.remove('invalid-input');
    
    // 移除错误消息（如果存在）
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
      errorDiv.remove();
    }
  }
  
  // 提交处理
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
      const userData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        timestamp: new Date().toISOString()
      };
      
      // 显示成功消息
      resultDiv.innerHTML = \`
        <div class="success-message">
          <h3>提交成功!</h3>
          <p>用户: \${userData.name}</p>
          <p>邮箱: \${userData.email}</p>
          <p>时间: \${new Date(userData.timestamp).toLocaleString()}</p>
        </div>
      \`;
      
      // 重置表单
      form.reset();
    }
  });
  
  // 实时验证
  nameInput.addEventListener('blur', () => validateInput(nameInput));
  emailInput.addEventListener('blur', () => validateInput(emailInput));
  
  function validateInput(input) {
    if (input === nameInput) {
      if (input.value.trim() === '') {
        markInvalid(input, '请输入用户名');
      } else {
        markValid(input);
      }
    } else if (input === emailInput) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(input.value)) {
        markInvalid(input, '请输入有效的电子邮箱');
      } else {
        markValid(input);
      }
    }
  }
});`
      break
      
    case 'class':
      inputJs.value = `// ES6类和继承示例
class Shape {
  constructor(color = 'black') {
    this.color = color;
  }
  
  draw() {
    console.log(\`Drawing a \${this.color} shape.\`);
  }
  
  // 获取形状的面积
  calculateArea() {
    // 基类方法，由子类实现
    throw new Error('子类必须实现calculateArea方法');
  }
}

// 圆形类
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  
  draw() {
    console.log(\`Drawing a \${this.color} circle with radius \${this.radius}.\`);
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
  
  // 计算周长
  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// 矩形类
class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }
  
  draw() {
    console.log(\`Drawing a \${this.color} rectangle with dimensions \${this.width}x\${this.height}.\`);
  }
  
  calculateArea() {
    return this.width * this.height;
  }
  
  // 计算对角线长度
  calculateDiagonal() {
    return Math.sqrt(this.width * this.width + this.height * this.height);
  }
}

// 使用示例
const circle = new Circle(5, 'red');
circle.draw();
console.log(\`圆的面积: \${circle.calculateArea().toFixed(2)}\`);
console.log(\`圆的周长: \${circle.calculateCircumference().toFixed(2)}\`);

const rectangle = new Rectangle(10, 5, 'blue');
rectangle.draw();
console.log(\`矩形的面积: \${rectangle.calculateArea()}\`);
console.log(\`矩形的对角线长度: \${rectangle.calculateDiagonal().toFixed(2)}\`);

// 多态示例
function printArea(shape) {
  if (shape instanceof Shape) {
    console.log(\`计算面积: \${shape.calculateArea()}\`);
  } else {
    console.log('不是一个有效的形状!');
  }
}

printArea(circle);
printArea(rectangle);
printArea({});  // 不是Shape的实例`
      break
      
    case 'async':
      inputJs.value = `// 异步编程示例
console.log('程序开始执行');

// 简单的延迟函数
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 模拟API请求
async function fetchUserData(userId) {
  console.log(\`开始获取用户 \${userId} 的数据...\`);
  
  // 模拟网络延迟
  await delay(1500);
  
  if (userId < 1) {
    throw new Error('无效的用户ID');
  }
  
  // 模拟用户数据
  return {
    id: userId,
    name: \`用户\${userId}\`,
    email: \`user\${userId}@example.com\`,
    isActive: userId % 2 === 0
  };
}

// 模拟获取用户订单
async function fetchUserOrders(userId) {
  console.log(\`开始获取用户 \${userId} 的订单...\`);
  
  // 模拟网络延迟
  await delay(1000);
  
  // 模拟订单数据
  const ordersCount = Math.floor(Math.random() * 5);
  const orders = [];
  
  for (let i = 1; i <= ordersCount; i++) {
    orders.push({
      id: \`ORD-\${userId}-\${i}\`,
      date: new Date().toISOString(),
      total: Math.floor(Math.random() * 1000) / 10,
      status: Math.random() > 0.3 ? 'completed' : 'pending'
    });
  }
  
  return orders;
}

// 使用异步/等待处理多个请求
async function getUserDetails(userId) {
  try {
    console.log(\`获取用户 \${userId} 的完整信息...\`);
    
    // 并行请求用户数据和订单
    const [userData, userOrders] = await Promise.all([
      fetchUserData(userId),
      fetchUserOrders(userId)
    ]);
    
    // 合并结果
    const userDetails = {
      ...userData,
      orders: userOrders,
      orderCount: userOrders.length,
      totalSpent: userOrders.reduce((sum, order) => sum + order.total, 0)
    };
    
    console.log('用户详情获取成功:', userDetails);
    return userDetails;
  } catch (error) {
    console.error(\`获取用户 \${userId} 详情时出错:\`, error.message);
    throw error;
  }
}

// 处理多个用户
async function processMultipleUsers() {
  const userIds = [1, 2, 3];
  console.log(\`处理 \${userIds.length} 个用户...\`);
  
  try {
    // 串行处理
    for (const id of userIds) {
      console.log(\`--- 处理用户 \${id} ---\`);
      const userDetails = await getUserDetails(id);
      console.log(\`用户 \${id} 有 \${userDetails.orderCount} 个订单，总消费: \${userDetails.totalSpent.toFixed(2)}元\`);
    }
    
    console.log('所有用户处理完成');
  } catch (error) {
    console.error('处理用户时出错:', error.message);
  }
}

// 执行主函数
processMultipleUsers().then(() => {
  console.log('程序执行完毕');
});`
      break
  }
}

// 页面加载时执行
onMounted(() => {
  // 加载示例代码
  loadExample('simple')
})
</script> 