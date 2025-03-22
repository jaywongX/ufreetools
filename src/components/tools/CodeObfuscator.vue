<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.code-obfuscator.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.code-obfuscator.description') }}
      </p>
      
      <!-- 语言选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.code-obfuscator.languages.title') }}
        </label>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="lang in languages" 
            :key="lang.id"
            @click="selectedLanguage = lang.id"
            class="px-3 py-1.5 rounded-md text-sm"
            :class="selectedLanguage === lang.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
          >
            {{ $t(`tools.code-obfuscator.languages.${lang.id}`) }}
          </button>
        </div>
      </div>
      
      <!-- 混淆选项 -->
      <div class="mb-4" v-if="selectedLanguage === 'javascript'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.code-obfuscator.options.title') }}
        </label>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div class="flex items-center mb-3">
              <input type="checkbox" id="compact" v-model="jsOptions.compact" class="mr-2">
              <label for="compact" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.compact') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="controlFlowFlattening" v-model="jsOptions.controlFlowFlattening" class="mr-2">
              <label for="controlFlowFlattening" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.controlFlowFlattening') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="deadCodeInjection" v-model="jsOptions.deadCodeInjection" class="mr-2">
              <label for="deadCodeInjection" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.deadCodeInjection') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="debugProtection" v-model="jsOptions.debugProtection" class="mr-2">
              <label for="debugProtection" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.debugProtection') }}
              </label>
            </div>
          </div>
          
          <div>
            <div class="flex items-center mb-3">
              <input type="checkbox" id="selfDefending" v-model="jsOptions.selfDefending" class="mr-2">
              <label for="selfDefending" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.selfDefending') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="stringArrayEncoding" v-model="jsOptions.stringArray" class="mr-2">
              <label for="stringArrayEncoding" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.stringArray') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="renameGlobals" v-model="jsOptions.renameGlobals" class="mr-2">
              <label for="renameGlobals" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.renameGlobals') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="renameProperties" v-model="jsOptions.renameProperties" class="mr-2">
              <label for="renameProperties" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.javascript.renameProperties') }}
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CSS混淆选项 -->
      <div class="mb-4" v-if="selectedLanguage === 'css'">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.code-obfuscator.options.title') }}
        </label>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div class="flex items-center mb-3">
              <input type="checkbox" id="cssCompact" v-model="cssOptions.compact" class="mr-2">
              <label for="cssCompact" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.css.compact') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="renameSelectors" v-model="cssOptions.renameSelectors" class="mr-2">
              <label for="renameSelectors" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.css.renameSelectors') }}
              </label>
            </div>
          </div>
          
          <div>
            <div class="flex items-center mb-3">
              <input type="checkbox" id="preserveImportant" v-model="cssOptions.preserveImportant" class="mr-2">
              <label for="preserveImportant" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.css.preserveImportant') }}
              </label>
            </div>
            
            <div class="flex items-center mb-3">
              <input type="checkbox" id="restructure" v-model="cssOptions.restructure" class="mr-2">
              <label for="restructure" class="text-sm text-gray-700 dark:text-gray-300">
                {{ $t('tools.code-obfuscator.options.css.restructure') }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 输入和结果区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 输入区域 -->
      <div>
        <h3 class="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
          {{ $t('tools.code-obfuscator.input.title') }}
        </h3>
        <div class="relative">
          <textarea 
            v-model="sourceCode"
            class="w-full h-72 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="$t('tools.code-obfuscator.input.placeholder')"
          ></textarea>
          <div class="absolute top-2 right-2 flex space-x-1">
            <button 
              v-if="sourceCode" 
              @click="clearInput" 
              class="p-1 text-gray-500 hover:text-red-500"
              :title="$t('tools.code-obfuscator.input.clear')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <!-- 源代码大小 -->
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {{ $t('tools.code-obfuscator.output.stats.original') }}: {{ formatSize(getByteSize(sourceCode)) }}
        </p>
        
        <!-- 示例按钮 -->
        <div class="mt-2 flex flex-wrap gap-2">
          <button 
            v-for="(example, index) in getExamples()" 
            :key="index"
            @click="loadExample(example)"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
          >
          {{ $t('tools.code-obfuscator.demo.title') }}: 
          {{ $t(`tools.code-obfuscator.demo.${example.name}`) }}
          </button>
        </div>
      </div>
      
      <!-- 输出区域 -->
      <div>
        <h3 class="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
          {{ $t('tools.code-obfuscator.output.title') }}
        </h3>
        <div class="relative">
          <textarea 
            v-model="resultCode"
            readonly
            class="w-full h-72 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="$t('tools.code-obfuscator.output.placeholder')"
          ></textarea>
          <div class="absolute top-2 right-2 flex space-x-1">
            <button 
              v-if="resultCode" 
              @click="copyResult" 
              class="p-1 text-gray-500 hover:text-blue-500"
              :title="$t('tools.code-obfuscator.output.copy')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- 结果大小和压缩率 -->
        <div class="mt-1 flex justify-between">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ $t('tools.code-obfuscator.output.stats.obfuscated') }}: {{ formatSize(getByteSize(resultCode)) }}
          </p>
          <p class="text-sm" :class="compressionRate > 0 ? 'text-red-500' : 'text-green-500'">
            {{ compressionRate > 0 ? $t('tools.code-obfuscator.output.increase') : $t('tools.code-obfuscator.output.decrease') }} {{ Math.abs(compressionRate).toFixed(1) }}%
          </p>
        </div>
        
        <!-- 错误信息 -->
        <div v-if="error" class="mt-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-md text-sm">
          {{ error }}
        </div>
      </div>
    </div>
    
    <!-- 混淆按钮 -->
    <div class="mt-6 flex justify-center">
      <button 
        @click="obfuscateCode" 
        class="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md"
        :disabled="!sourceCode || processing"
        :class="{'opacity-50 cursor-not-allowed': !sourceCode || processing}"
      >
        <div class="flex items-center">
          <svg v-if="processing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ processing ? $t('tools.code-obfuscator.messages.processing') : $t('tools.code-obfuscator.actions.obfuscate') }}
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import JavaScriptObfuscator from 'javascript-obfuscator'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 语言选择
const languages = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'css', name: 'CSS' }
]

// 状态变量
const selectedLanguage = ref('javascript')
const sourceCode = ref('')
const resultCode = ref('')
const error = ref('')
const processing = ref(false)

// JavaScript 混淆选项
const jsOptions = ref({
  compact: true,
  controlFlowFlattening: false,
  controlFlowFlatteningThreshold: 0.5,
  deadCodeInjection: false,
  deadCodeInjectionThreshold: 0.4,
  debugProtection: false,
  debugProtectionInterval: 4000,
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  renameGlobals: false,
  renameProperties: false,
  rotateStringArray: true,
  selfDefending: false,
  shuffleStringArray: true,
  simplify: true,
  splitStrings: false,
  stringArray: true,
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 0.75,
  transformObjectKeys: false,
  unicodeEscapeSequence: false
})

// CSS 混淆选项
const cssOptions = ref({
  compact: true,
  renameSelectors: true,
  preserveImportant: true,
  restructure: false,
  keepVendorPrefixes: true,
  removeComments: true
})

// 计算压缩率
const compressionRate = computed(() => {
  if (!sourceCode.value || !resultCode.value) return 0
  const srcSize = getByteSize(sourceCode.value)
  const resultSize = getByteSize(resultCode.value)
  return ((resultSize - srcSize) / srcSize) * 100
})

// 获取示例代码
function getExamples() {
  if (selectedLanguage.value === 'javascript') {
    return [
      {
        name: 'function',
        code: `function calculateTotal(items) {
  return items
    .map(item => item.price * item.quantity)
    .reduce((total, value) => total + value, 0);
}

// 示例用法
const cart = [
  { name: 'Widget', price: 9.95, quantity: 2 },
  { name: 'Gadget', price: 22.95, quantity: 1 }
];

console.log('Total: $' + calculateTotal(cart));`
      },
      {
        name: 'class',
        code: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
  }

  static createAnonymous() {
    return new Person('Anonymous', 0);
  }
}

const john = new Person('John', 30);
john.sayHello();

const anonymous = Person.createAnonymous();
anonymous.sayHello();`
      }
    ]
  } else {
    return [
      {
        name: 'simple',
        code: `.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #4285f4;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #3367d6;
}

.button.secondary {
  background-color: #34a853;
}

.button.secondary:hover {
  background-color: #2e8644;
}`
      },
      {
        name: 'animation',
        code: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.card {
  width: 300px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
  animation: fadeIn 0.5s ease-in-out;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-content {
  color: #333;
  line-height: 1.5;
}`
      }
    ]
  }
}

// 加载示例代码
function loadExample(example) {
  sourceCode.value = example.code
  resultCode.value = ''
  error.value = ''
}

// 混淆代码
async function obfuscateCode() {
  if (!sourceCode.value) return
  
  processing.value = true
  error.value = ''
  resultCode.value = ''
  
  try {
    if (selectedLanguage.value === 'javascript') {
      // JavaScript 混淆
      const result = JavaScriptObfuscator.obfuscate(
        sourceCode.value,
        jsOptions.value
      ).getObfuscatedCode()
      
      resultCode.value = result
    } else if (selectedLanguage.value === 'css') {
      // CSS 混淆 - 这里实现一个简单的CSS混淆逻辑
      // 在实际项目中，您可能需要使用专门的CSS混淆库
      obfuscateCSS()
    }
  } catch (err) {
    console.error('混淆过程出错:', err)
    error.value = `混淆失败: ${err.message}`
  } finally {
    processing.value = false
  }
}

// 简单的CSS混淆实现
function obfuscateCSS() {
  let css = sourceCode.value
  
  // 移除注释
  css = css.replace(/\/\*[\s\S]*?\*\//g, '')
  
  // 紧凑输出
  if (cssOptions.value.compact) {
    // 移除空格、换行符等
    css = css.replace(/\s+/g, ' ')
    css = css.replace(/\s*([{}:;,])\s*/g, '$1')
    css = css.replace(/;}/g, '}')
  }
  
  // 重命名选择器
  if (cssOptions.value.renameSelectors) {
    // 简单的选择器重命名逻辑
    // 在真实场景中，应该使用更复杂的算法来确保不会破坏CSS
    const selectorMap = {}
    let selectorCount = 0
    
    css = css.replace(/([.#][a-zA-Z][\w-]*)/g, function(match) {
      // 保留一些特殊选择器
      if (match.startsWith('.button') || match.startsWith('#main')) {
        return match
      }
      
      if (!selectorMap[match]) {
        selectorMap[match] = `._s${selectorCount++}`
      }
      return selectorMap[match]
    })
  }
  
  // 保留 !important
  if (!cssOptions.value.preserveImportant) {
    css = css.replace(/\s*!important/g, '')
  }
  
  // 重组样式规则
  if (cssOptions.value.restructure) {
    // 这只是个示例，真实的重组相当复杂
    // 需要解析CSS并分析属性关系
    // 在此简化为合并一些相似的选择器
    // 实际中应该使用专业CSS处理库
  }
  
  resultCode.value = css
}

// 辅助函数：获取字符串的字节大小
function getByteSize(str) {
  if (!str) return 0
  return new Blob([str]).size
}

// 辅助函数：格式化文件大小显示
function formatSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 清空输入
function clearInput() {
  sourceCode.value = ''
  resultCode.value = ''
  error.value = ''
}

// 复制结果
function copyResult() {
  if (!resultCode.value) return
  
  navigator.clipboard.writeText(resultCode.value)
    .then(() => {
      alert('已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 组件挂载
onMounted(() => {
  // 初始化操作
})
</script> 