<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">URL 编码/解码</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        对URL字符串进行编码或解码，支持多种编码标准和特殊字符处理
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            输入文本
          </label>
          <div class="flex gap-2">
            <button 
              @click="clearInput" 
              class="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              清空
            </button>
            <button 
              @click="loadExample" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              加载示例
            </button>
          </div>
        </div>
        <textarea 
          v-model="inputText" 
          placeholder="输入要编码或解码的文本..."
          class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
        ></textarea>
      </div>
      
      <!-- 操作类型和选项 -->
      <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            操作类型
          </label>
          <div class="flex gap-4">
            <label class="inline-flex items-center">
              <input 
                type="radio" 
                v-model="operation" 
                value="encode" 
                class="text-primary"
              >
              <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">编码</span>
            </label>
            <label class="inline-flex items-center">
              <input 
                type="radio" 
                v-model="operation" 
                value="decode" 
                class="text-primary"
              >
              <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">解码</span>
            </label>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            编码方式
          </label>
          <select 
            v-model="encodeMethod" 
            class="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="encodeURI">encodeURI (只编码特殊字符)</option>
            <option value="encodeURIComponent">encodeURIComponent (编码所有非标准字符)</option>
            <option value="escape">escape (已废弃，仅用于兼容)</option>
          </select>
        </div>
      </div>
      
      <!-- 高级选项 -->
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            高级选项
          </label>
          <button 
            @click="toggleAdvancedOptions" 
            class="text-xs text-primary hover:text-primary-dark"
          >
            {{ showAdvancedOptions ? '隐藏' : '显示' }}
          </button>
        </div>
        
        <div v-if="showAdvancedOptions" class="mt-2 border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input 
                type="checkbox" 
                v-model="options.processSpaces" 
                class="text-primary rounded"
              >
              <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">空格转为 + 号 (适用于表单提交)</span>
            </label>
          </div>
          
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input 
                type="checkbox" 
                v-model="options.processLineBreaks" 
                class="text-primary rounded"
              >
              <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">处理换行符</span>
            </label>
          </div>
          
          <div>
            <label class="inline-flex items-center">
              <input 
                type="checkbox" 
                v-model="options.encodeUnicodeChars" 
                class="text-primary rounded"
              >
              <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">处理Unicode字符</span>
            </label>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex justify-center">
        <button 
          @click="processText" 
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          :disabled="!inputText"
        >
          {{ operation === 'encode' ? '编码' : '解码' }}
        </button>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="result" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">结果</h3>
        <button 
          @click="copyResult" 
          class="text-xs text-primary hover:text-primary-dark"
        >
          复制结果
        </button>
      </div>
      <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
        <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-all">{{ result }}</pre>
      </div>
      
      <!-- 结果统计信息 -->
      <div class="mt-3 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div>
          输入长度: {{ inputText.length }} 字符
        </div>
        <div>
          输出长度: {{ result.length }} 字符
        </div>
        <div>
          字符变化: {{ result.length - inputText.length }} 字符
        </div>
        <div>
          变化比例: {{ calculateChangePercentage() }}%
        </div>
      </div>
    </div>
    
    <!-- 常用URL编码参考 -->
    <div class="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">常用URL编码参考</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr>
              <th class="py-2 px-3 bg-gray-50 dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300 font-medium">字符</th>
              <th class="py-2 px-3 bg-gray-50 dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300 font-medium">URL编码</th>
              <th class="py-2 px-3 bg-gray-50 dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300 font-medium">说明</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="item in commonUrlEncodings" :key="item.char">
              <td class="py-2 px-3 text-gray-800 dark:text-gray-200">{{ item.char }}</td>
              <td class="py-2 px-3 text-gray-800 dark:text-gray-200 font-mono">{{ item.encoded }}</td>
              <td class="py-2 px-3 text-gray-600 dark:text-gray-400">{{ item.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 状态变量
const inputText = ref('')
const result = ref('')
const operation = ref('encode')
const encodeMethod = ref('encodeURIComponent')
const showAdvancedOptions = ref(false)
const options = ref({
  processSpaces: false,
  processLineBreaks: true,
  encodeUnicodeChars: false
})

// 常用URL编码参考
const commonUrlEncodings = [
  { char: '空格', encoded: '%20', description: '空格字符，有时也用+表示' },
  { char: '?', encoded: '%3F', description: 'URL查询参数起始符' },
  { char: '&', encoded: '%26', description: 'URL参数分隔符' },
  { char: '=', encoded: '%3D', description: 'URL参数键值分隔符' },
  { char: '#', encoded: '%23', description: 'URL片段标识符' },
  { char: '/', encoded: '%2F', description: 'URL路径分隔符' },
  { char: ':', encoded: '%3A', description: 'URL协议分隔符' },
  { char: '@', encoded: '%40', description: '电子邮件地址分隔符' },
  { char: '+', encoded: '%2B', description: '加号' },
  { char: '%', encoded: '%25', description: '百分号（编码前缀）' },
  { char: '<', encoded: '%3C', description: '小于号' },
  { char: '>', encoded: '%3E', description: '大于号' },
  { char: '"', encoded: '%22', description: '双引号' },
  { char: '\'', encoded: '%27', description: '单引号' },
  { char: '中文', encoded: '%E4%B8%AD%E6%96%87', description: '非ASCII字符（如中文）' }
]

// 加载示例文本
function loadExample() {
  inputText.value = 'https://example.com/path?name=测试&q=hello world&tag=test#section'
}

// 清空输入
function clearInput() {
  inputText.value = ''
  result.value = ''
}

// 切换高级选项显示
function toggleAdvancedOptions() {
  showAdvancedOptions.value = !showAdvancedOptions.value
}

// 处理文本（编码或解码）
function processText() {
  try {
    if (operation.value === 'encode') {
      result.value = encodeText(inputText.value)
    } else {
      result.value = decodeText(inputText.value)
    }
  } catch (error) {
    console.error('处理文本时出错:', error)
    result.value = `错误: ${error.message}`
  }
}

// 编码函数
function encodeText(text) {
  let encoded = text

  // 处理换行符
  if (options.value.processLineBreaks) {
    encoded = encoded.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  }

  // 使用选择的编码方法
  switch (encodeMethod.value) {
    case 'encodeURI':
      encoded = encodeURI(encoded)
      break
    case 'encodeURIComponent':
      encoded = encodeURIComponent(encoded)
      break
    case 'escape':
      encoded = escape(encoded)
      break
  }

  // 处理空格转加号
  if (options.value.processSpaces && encodeMethod.value === 'encodeURIComponent') {
    encoded = encoded.replace(/%20/g, '+')
  }

  return encoded
}

// 解码函数
function decodeText(text) {
  let decoded = text

  // 处理加号转回空格
  if (options.value.processSpaces) {
    decoded = decoded.replace(/\+/g, ' ')
  }

  // 使用选择的解码方法
  switch (encodeMethod.value) {
    case 'encodeURI':
      decoded = decodeURI(decoded)
      break
    case 'encodeURIComponent':
      decoded = decodeURIComponent(decoded)
      break
    case 'escape':
      decoded = unescape(decoded)
      break
  }

  return decoded
}

// 复制结果到剪贴板
function copyResult() {
  if (!result.value) return
  
  navigator.clipboard.writeText(result.value)
    .then(() => {
      alert('已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 计算字符变化百分比
function calculateChangePercentage() {
  if (!inputText.value || !result.value) return 0
  
  const change = (result.value.length - inputText.value.length) / inputText.value.length * 100
  return change.toFixed(2)
}
</script> 