<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            操作类型
          </label>
          <select 
            v-model="operationType" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="encode">URL编码</option>
            <option value="decode">URL解码</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            编码模式
          </label>
          <select 
            v-model="encodeMode" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :disabled="operationType === 'decode'"
          >
            <option value="standard">标准编码 (encodeURI)</option>
            <option value="component">组件编码 (encodeURIComponent)</option>
            <option value="full">完全编码 (所有字符)</option>
          </select>
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>URL编码用于将特殊字符转换为URL可接受的格式，常用于处理URL参数和表单提交。</p>
        <ul class="list-disc pl-5 mt-1">
          <li><span class="font-medium">标准编码 (encodeURI)</span> - 对整个URL进行编码，保留URL结构字符如 /?:@&=+$,# 等</li>
          <li><span class="font-medium">组件编码 (encodeURIComponent)</span> - 适用于URL参数，编码包括 /?:@&=+$,# 在内的特殊字符</li>
          <li><span class="font-medium">完全编码</span> - 对所有非字母数字字符进行编码，包括空格（转为%20而非+）</li>
        </ul>
      </div>
    </div>
    
    <!-- 输入区域 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ operationType === 'encode' ? '需要编码的文本' : '需要解码的文本' }}
        </label>
        <button 
          @click="clearInput" 
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
          v-model="inputText" 
          rows="5" 
          class="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm rounded-md"
          :placeholder="operationType === 'encode' ? '输入要编码的URL或文本...' : '输入要解码的URL或文本...'"
        ></textarea>
      </div>
      
      <div class="flex justify-center mt-4">
        <button 
          @click="processText" 
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          {{ operationType === 'encode' ? '编码' : '解码' }}
        </button>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="outputText">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ operationType === 'encode' ? '编码结果' : '解码结果' }}
        </label>
        <button 
          @click="copyOutput" 
          class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          复制结果 {{ copyStatus ? '(已复制!)' : '' }}
        </button>
      </div>
      <div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
        <pre class="px-3 py-2 overflow-auto whitespace-pre-wrap font-mono text-sm text-gray-800 dark:text-gray-200" style="max-height: 300px;">{{ outputText }}</pre>
      </div>
      
      <!-- 错误消息显示 -->
      <div v-if="errorMessage" class="mt-3 text-red-500 text-sm">
        {{ errorMessage }}
      </div>
    </div>
    
    <!-- 常见URL字符编码参考表 -->
    <div class="mt-8">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">常见URL字符编码参考表</h3>
        <button
          @click="showReferenceTable = !showReferenceTable"
          class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
        >
          {{ showReferenceTable ? '隐藏表格' : '显示表格' }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" :class="{'rotate-180': !showReferenceTable}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <div v-if="showReferenceTable" class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">字符</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">URL编码</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">说明</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="item in referenceChars" :key="item.char">
                <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{{ item.char }}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{{ item.encoded }}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{{ item.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// 状态变量
const operationType = ref('encode')
const encodeMode = ref('standard')
const inputText = ref('')
const outputText = ref('')
const errorMessage = ref('')
const copyStatus = ref(false)
const showReferenceTable = ref(false)

// 重置错误消息
watch([operationType, inputText], () => {
  errorMessage.value = ''
})

// 处理文本（编码或解码）
function processText() {
  if (!inputText.value.trim()) {
    outputText.value = ''
    return
  }
  
  try {
    if (operationType.value === 'encode') {
      encodeText()
    } else {
      decodeText()
    }
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = `错误: ${error.message}`
    console.error('处理失败:', error)
  }
}

// 编码文本
function encodeText() {
  const lines = inputText.value.split('\n')
  const encodedLines = lines.map(line => {
    if (!line.trim()) return ''
    
    switch(encodeMode.value) {
      case 'standard':
        return encodeURI(line)
      case 'component':
        return encodeURIComponent(line)
      case 'full':
        return fullEncode(line)
      default:
        return encodeURI(line)
    }
  })
  
  outputText.value = encodedLines.join('\n')
}

// 解码文本
function decodeText() {
  const lines = inputText.value.split('\n')
  const decodedLines = lines.map(line => {
    if (!line.trim()) return ''
    
    try {
      // 尝试两种解码方式，先尝试component解码，如果失败再尝试URI解码
      return decodeURIComponent(line)
    } catch (e) {
      try {
        return decodeURI(line)
      } catch (e2) {
        throw new Error(`无法解码: "${line}"`)
      }
    }
  })
  
  outputText.value = decodedLines.join('\n')
}

// 完全编码（编码所有非字母数字字符）
function fullEncode(text) {
  return text.replace(/[^A-Za-z0-9]/g, char => {
    return '%' + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
  })
}

// 复制输出结果
function copyOutput() {
  if (!outputText.value) return
  
  navigator.clipboard.writeText(outputText.value)
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

// 清空输入
function clearInput() {
  inputText.value = ''
  outputText.value = ''
  errorMessage.value = ''
}

// 常见URL字符编码参考表
const referenceChars = [
  { char: 'space', encoded: '%20', description: '空格' },
  { char: '!', encoded: '%21', description: '感叹号' },
  { char: '"', encoded: '%22', description: '双引号' },
  { char: '#', encoded: '%23', description: '井号' },
  { char: '$', encoded: '%24', description: '美元符号' },
  { char: '%', encoded: '%25', description: '百分号' },
  { char: '&', encoded: '%26', description: '和号' },
  { char: '\'', encoded: '%27', description: '单引号' },
  { char: '(', encoded: '%28', description: '左括号' },
  { char: ')', encoded: '%29', description: '右括号' },
  { char: '*', encoded: '%2A', description: '星号' },
  { char: '+', encoded: '%2B', description: '加号' },
  { char: ',', encoded: '%2C', description: '逗号' },
  { char: '/', encoded: '%2F', description: '斜杠' },
  { char: ':', encoded: '%3A', description: '冒号' },
  { char: ';', encoded: '%3B', description: '分号' },
  { char: '<', encoded: '%3C', description: '小于号' },
  { char: '=', encoded: '%3D', description: '等号' },
  { char: '>', encoded: '%3E', description: '大于号' },
  { char: '?', encoded: '%3F', description: '问号' },
  { char: '@', encoded: '%40', description: '艾特符号' },
  { char: '[', encoded: '%5B', description: '左方括号' },
  { char: '\\', encoded: '%5C', description: '反斜杠' },
  { char: ']', encoded: '%5D', description: '右方括号' },
  { char: '^', encoded: '%5E', description: '脱字符' },
  { char: '`', encoded: '%60', description: '反引号' },
  { char: '{', encoded: '%7B', description: '左花括号' },
  { char: '|', encoded: '%7C', description: '竖线' },
  { char: '}', encoded: '%7D', description: '右花括号' },
  { char: '~', encoded: '%7E', description: '波浪号' },
  { char: '中文', encoded: '%E4%B8%AD%E6%96%87', description: 'UTF-8编码的中文' }
]
</script> 