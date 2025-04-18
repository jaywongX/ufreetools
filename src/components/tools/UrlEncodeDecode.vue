<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.url-encode-decode.options.operationType') }}
          </label>
          <select 
            v-model="operationType" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="encode">{{ $t('tools.url-encode-decode.actions.encode') }}</option>
            <option value="decode">{{ $t('tools.url-encode-decode.actions.decode') }}</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.url-encode-decode.options.encodeMode') }}
          </label>
          <select 
            v-model="encodeMode" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :disabled="operationType === 'decode'"
          >
            <option value="standard">{{ $t('tools.url-encode-decode.encodeOptions.standard') }}</option>
            <option value="component">{{ $t('tools.url-encode-decode.encodeOptions.component') }}</option>
            <option value="full">{{ $t('tools.url-encode-decode.encodeOptions.full') }}</option>
          </select>
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>{{ $t('tools.url-encode-decode.description') }}</p>
        <ul class="list-disc pl-5 mt-1">
          <li><span class="font-medium">{{ $t('tools.url-encode-decode.encodeOptions.standard') }}</span> - {{ $t('tools.url-encode-decode.encodeOptions.standardDescription') }}</li>
          <li><span class="font-medium">{{ $t('tools.url-encode-decode.encodeOptions.component') }}</span> - {{ $t('tools.url-encode-decode.encodeOptions.componentDescription') }}</li>
          <li><span class="font-medium">{{ $t('tools.url-encode-decode.encodeOptions.full') }}</span> - {{ $t('tools.url-encode-decode.encodeOptions.fullDescription') }}</li>
        </ul>
      </div>
    </div>
    
    <!-- 输入区域 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ operationType === 'encode' ? $t('tools.url-encode-decode.input.textToEncode') : $t('tools.url-encode-decode.input.textToDecode') }}
        </label>
        <button 
          @click="clearInput" 
          class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {{ $t('tools.url-encode-decode.actions.clear') }}
        </button>
      </div>
      <div class="border border-gray-300 dark:border-gray-600 rounded-md">
        <textarea 
          v-model="inputText" 
          rows="5" 
          class="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm rounded-md"
          :placeholder="operationType === 'encode' ? $t('tools.url-encode-decode.input.encodePlaceholder') : $t('tools.url-encode-decode.input.decodePlaceholder')"
        ></textarea>
      </div>
      
      <div class="flex justify-center mt-4">
        <button 
          @click="processText" 
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          {{ operationType === 'encode' ? $t('tools.url-encode-decode.actions.encode') : $t('tools.url-encode-decode.actions.decode') }}
        </button>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="outputText">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ operationType === 'encode' ? $t('tools.url-encode-decode.output.encodeResult') : $t('tools.url-encode-decode.output.decodeResult') }}
        </label>
        <button 
          @click="copyOutput" 
          class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          {{ $t('tools.url-encode-decode.actions.copyResult') }} {{ copyStatus ? $t('tools.url-encode-decode.messages.copied') : '' }}
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
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.url-encode-decode.referenceTable.title') }}</h3>
        <button
          @click="showReferenceTable = !showReferenceTable"
          class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
        >
          {{ showReferenceTable ? $t('tools.url-encode-decode.referenceTable.hideTable') : $t('tools.url-encode-decode.referenceTable.showTable') }}
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
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.url-encode-decode.referenceTable.character') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.url-encode-decode.referenceTable.encoded') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.url-encode-decode.referenceTable.description') }}</th>
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
    <UrlEncodeDecodeArticle />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import UrlEncodeDecodeArticle from './UrlEncodeDecodeArticle.vue'

const { t } = useI18n()

// 状态变量
const operationType = ref('encode')
const encodeMode = ref('standard')
const inputText = ref('')
const outputText = ref('')
const errorMessage = ref('')
const copyStatus = ref(false)
const showReferenceTable = ref(true)

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
    errorMessage.value = t('tools.url-encode-decode.messages.error', { message: error.message })
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
        throw new Error(t('tools.url-encode-decode.messages.decodeError', { text: line }))
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
      errorMessage.value = t('tools.url-encode-decode.messages.copyFailed')
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
  { char: 'space', encoded: '%20', description: t('tools.url-encode-decode.referenceTable.descriptions.space') },
  { char: '!', encoded: '%21', description: t('tools.url-encode-decode.referenceTable.descriptions.exclamation') },
  { char: '"', encoded: '%22', description: t('tools.url-encode-decode.referenceTable.descriptions.doubleQuote') },
  { char: '#', encoded: '%23', description: t('tools.url-encode-decode.referenceTable.descriptions.hash') },
  { char: '$', encoded: '%24', description: t('tools.url-encode-decode.referenceTable.descriptions.dollar') },
  { char: '%', encoded: '%25', description: t('tools.url-encode-decode.referenceTable.descriptions.percent') },
  { char: '&', encoded: '%26', description: t('tools.url-encode-decode.referenceTable.descriptions.ampersand') },
  { char: '\'', encoded: '%27', description: t('tools.url-encode-decode.referenceTable.descriptions.singleQuote') },
  { char: '(', encoded: '%28', description: t('tools.url-encode-decode.referenceTable.descriptions.leftParenthesis') },
  { char: ')', encoded: '%29', description: t('tools.url-encode-decode.referenceTable.descriptions.rightParenthesis') },
  { char: '*', encoded: '%2A', description: t('tools.url-encode-decode.referenceTable.descriptions.asterisk') },
  { char: '+', encoded: '%2B', description: t('tools.url-encode-decode.referenceTable.descriptions.plus') },
  { char: ',', encoded: '%2C', description: t('tools.url-encode-decode.referenceTable.descriptions.comma') },
  { char: '/', encoded: '%2F', description: t('tools.url-encode-decode.referenceTable.descriptions.slash') },
  { char: ':', encoded: '%3A', description: t('tools.url-encode-decode.referenceTable.descriptions.colon') },
  { char: ';', encoded: '%3B', description: t('tools.url-encode-decode.referenceTable.descriptions.semicolon') },
  { char: '<', encoded: '%3C', description: t('tools.url-encode-decode.referenceTable.descriptions.lessThan') },
  { char: '=', encoded: '%3D', description: t('tools.url-encode-decode.referenceTable.descriptions.equals') },
  { char: '>', encoded: '%3E', description: t('tools.url-encode-decode.referenceTable.descriptions.greaterThan') },
  { char: '?', encoded: '%3F', description: t('tools.url-encode-decode.referenceTable.descriptions.questionMark') },
  { char: '@', encoded: '%40', description: t('tools.url-encode-decode.referenceTable.descriptions.at') },
  { char: '[', encoded: '%5B', description: t('tools.url-encode-decode.referenceTable.descriptions.leftBracket') },
  { char: '\\', encoded: '%5C', description: t('tools.url-encode-decode.referenceTable.descriptions.backslash') },
  { char: ']', encoded: '%5D', description: t('tools.url-encode-decode.referenceTable.descriptions.rightBracket') },
  { char: '^', encoded: '%5E', description: t('tools.url-encode-decode.referenceTable.descriptions.caret') },
  { char: '`', encoded: '%60', description: t('tools.url-encode-decode.referenceTable.descriptions.backtick') },
  { char: '{', encoded: '%7B', description: t('tools.url-encode-decode.referenceTable.descriptions.leftBrace') },
  { char: '|', encoded: '%7C', description: t('tools.url-encode-decode.referenceTable.descriptions.pipe') },
  { char: '}', encoded: '%7D', description: t('tools.url-encode-decode.referenceTable.descriptions.rightBrace') },
  { char: '~', encoded: '%7E', description: t('tools.url-encode-decode.referenceTable.descriptions.tilde') },
  { char: '中文', encoded: '%E4%B8%AD%E6%96%87', description: t('tools.url-encode-decode.referenceTable.descriptions.chinese') }
]
</script> 