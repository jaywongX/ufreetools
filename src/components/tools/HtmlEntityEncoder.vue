<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.html-entity-encoder.operation.title') }}
          </label>
          <select 
            v-model="operationType" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="encode">{{ $t('tools.html-entity-encoder.operation.encode') }}</option>
            <option value="decode">{{ $t('tools.html-entity-encoder.operation.decode') }}</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.html-entity-encoder.mode.title') }}
          </label>
          <select 
            v-model="encodeMode" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :disabled="operationType === 'decode'"
          >
            <option value="named">{{ $t('tools.html-entity-encoder.mode.named') }}</option>
            <option value="decimal">{{ $t('tools.html-entity-encoder.mode.decimal') }}</option>
            <option value="hex">{{ $t('tools.html-entity-encoder.mode.hex') }}</option>
            <option value="full">{{ $t('tools.html-entity-encoder.mode.full') }}</option>
          </select>
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>{{ $t('tools.html-entity-encoder.intro') }}</p>
        <ul class="list-disc pl-5 mt-1">
          <li><span class="font-medium">{{ $t('tools.html-entity-encoder.mode.named') }}</span> - {{ $t('tools.html-entity-encoder.reference.description.named') }}</li>
          <li><span class="font-medium">{{ $t('tools.html-entity-encoder.mode.decimal') }}</span> - {{ $t('tools.html-entity-encoder.reference.description.decimal') }}</li>
          <li><span class="font-medium">{{ $t('tools.html-entity-encoder.mode.hex') }}</span> - {{ $t('tools.html-entity-encoder.reference.description.hex') }}</li>
          <li><span class="font-medium">{{ $t('tools.html-entity-encoder.mode.full') }}</span> - {{ $t('tools.html-entity-encoder.reference.description.full') }}</li>
        </ul>
      </div>
    </div>
    
    <!-- 输入区域 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ operationType === 'encode' ? $t('tools.html-entity-encoder.input.encodeTitle') : $t('tools.html-entity-encoder.input.decodeTitle') }}
        </label>
        <button 
          @click="clearInput" 
          class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {{ $t('tools.html-entity-encoder.input.clear') }}
        </button>
      </div>
      <div class="border border-gray-300 dark:border-gray-600 rounded-md">
        <textarea 
          v-model="inputText" 
          rows="5" 
          class="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm rounded-md"
          :placeholder="operationType === 'encode' ? $t('tools.html-entity-encoder.input.encodePlaceholder') : $t('tools.html-entity-encoder.input.decodePlaceholder')"
        ></textarea>
      </div>
      
      <div class="flex justify-center mt-4">
        <button 
          @click="processText" 
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          {{ operationType === 'encode' ? $t('tools.html-entity-encoder.operation.encode') : $t('tools.html-entity-encoder.operation.decode') }}
        </button>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="outputText">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ operationType === 'encode' ? $t('tools.html-entity-encoder.output.encodeTitle') : $t('tools.html-entity-encoder.output.decodeTitle') }}
        </label>
        <div class="flex space-x-2">
          <button 
            @click="copyOutput" 
            class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            {{ $t('tools.html-entity-encoder.output.copy') }} {{ copyStatus ? $t('tools.html-entity-encoder.output.copied') : '' }}
          </button>
          <button
            v-if="operationType === 'encode'"
            @click="togglePreview"
            class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {{ showPreview ? $t('tools.html-entity-encoder.output.showSource') : $t('tools.html-entity-encoder.output.preview') }}
          </button>
        </div>
      </div>
      
      <!-- 源码视图 -->
      <div v-if="!showPreview || operationType === 'decode'" class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
        <pre class="px-3 py-2 overflow-auto whitespace-pre-wrap font-mono text-sm text-gray-800 dark:text-gray-200" style="max-height: 300px;">{{ outputText }}</pre>
      </div>
      
      <!-- 预览视图 -->
      <div v-if="showPreview && operationType === 'encode'" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
        <div class="px-3 py-2 overflow-auto" style="max-height: 300px;" v-html="decodedPreview"></div>
      </div>
      
      <!-- 错误消息显示 -->
      <div v-if="errorMessage" class="mt-3 text-red-500 text-sm">
        {{ errorMessage }}
      </div>
    </div>
    
    <!-- 常见HTML实体参考表 -->
    <div class="mt-8">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">
          {{ $t('tools.html-entity-encoder.reference.commonReferenceTables') }}
        </h3>
        <button
          @click="showReferenceTable = !showReferenceTable"
          class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
        >
          {{ showReferenceTable ? $t('tools.html-entity-encoder.reference.hide') : $t('tools.html-entity-encoder.reference.show') }}
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
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.html-entity-encoder.reference.table.char') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.html-entity-encoder.reference.table.named') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.html-entity-encoder.reference.table.decimal') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.html-entity-encoder.reference.table.description') }}</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="item in entityReferences" :key="item.char">
                <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{{ item.char }}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{{ item.named }}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{{ item.decimal }}</td>
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
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 状态变量
const operationType = ref('encode')
const encodeMode = ref('named')
const inputText = ref('')
const outputText = ref('')
const errorMessage = ref('')
const copyStatus = ref(false)
const showReferenceTable = ref(false)
const showPreview = ref(false)

// 预览解码内容
const decodedPreview = computed(() => {
  if (!outputText.value) return ''
  // 解码结果用于预览
  return outputText.value
})

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
      encodeHtml()
    } else {
      decodeHtml()
    }
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = `错误: ${error.message}`
    console.error('处理失败:', error)
  }
}

// HTML实体编码
function encodeHtml() {
  let result = inputText.value
  
  switch(encodeMode.value) {
    case 'named':
      // 使用命名实体编码
      result = result
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
      break
      
    case 'decimal':
      // 使用十进制数字实体编码
      result = result
        .replace(/&/g, '&#38;')
        .replace(/</g, '&#60;')
        .replace(/>/g, '&#62;')
        .replace(/"/g, '&#34;')
        .replace(/'/g, '&#39;')
      break
      
    case 'hex':
      // 使用十六进制数字实体编码
      result = result
        .replace(/&/g, '&#x26;')
        .replace(/</g, '&#x3C;')
        .replace(/>/g, '&#x3E;')
        .replace(/"/g, '&#x22;')
        .replace(/'/g, '&#x27;')
      break
      
    case 'full':
      // 完全编码所有非字母数字字符
      result = Array.from(result).map(char => {
        const code = char.charCodeAt(0)
        if (/[a-zA-Z0-9]/.test(char)) {
          return char
        } else if (code <= 0xFF) {
          return `&#${code};` // 对于ASCII字符使用十进制
        } else {
          return `&#x${code.toString(16).toUpperCase()};` // 对于非ASCII字符使用十六进制
        }
      }).join('')
      break
  }
  
  outputText.value = result
}

// HTML实体解码
function decodeHtml() {
  // 创建一个textarea元素来使用浏览器原生的HTML实体解码
  const textarea = document.createElement('textarea')
  textarea.innerHTML = inputText.value
  outputText.value = textarea.value
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
      console.error(error)
    })
}

// 切换预览模式
function togglePreview() {
  showPreview.value = !showPreview.value
}

// 清空输入
function clearInput() {
  inputText.value = ''
  outputText.value = ''
  errorMessage.value = ''
}

// 常见HTML实体参考表
const entityReferences = [
  { char: '<', named: '&lt;', decimal: '&#60;', description: t('tools.html-entity-encoder.reference.entities.lt') },
  { char: '>', named: '&gt;', decimal: '&#62;', description: t('tools.html-entity-encoder.reference.entities.gt') },
  { char: '&', named: '&amp;', decimal: '&#38;', description: t('tools.html-entity-encoder.reference.entities.amp') },
  { char: '"', named: '&quot;', decimal: '&#34;', description: t('tools.html-entity-encoder.reference.entities.quot') },
  { char: '\'', named: '&#39;', decimal: '&#39;', description: t('tools.html-entity-encoder.reference.entities.apos') },
  { char: '©', named: '&copy;', decimal: '&#169;', description: t('tools.html-entity-encoder.reference.entities.copy') },
  { char: '®', named: '&reg;', decimal: '&#174;', description: t('tools.html-entity-encoder.reference.entities.reg') },
  { char: '™', named: '&trade;', decimal: '&#8482;', description: t('tools.html-entity-encoder.reference.entities.trade') },
  { char: ' ', named: '&nbsp;', decimal: '&#160;', description: t('tools.html-entity-encoder.reference.entities.nbsp') },
  { char: '¢', named: '&cent;', decimal: '&#162;', description: t('tools.html-entity-encoder.reference.entities.cent') },
  { char: '£', named: '&pound;', decimal: '&#163;', description: t('tools.html-entity-encoder.reference.entities.pound') },
  { char: '€', named: '&euro;', decimal: '&#8364;', description: t('tools.html-entity-encoder.reference.entities.euro') },
  { char: '¥', named: '&yen;', decimal: '&#165;', description: t('tools.html-entity-encoder.reference.entities.yen') },
  { char: '§', named: '&sect;', decimal: '&#167;', description: t('tools.html-entity-encoder.reference.entities.sect') },
  { char: '−', named: '&minus;', decimal: '&#8722;', description: t('tools.html-entity-encoder.reference.entities.minus') },
  { char: '×', named: '&times;', decimal: '&#215;', description: t('tools.html-entity-encoder.reference.entities.times') },
  { char: '÷', named: '&divide;', decimal: '&#247;', description: t('tools.html-entity-encoder.reference.entities.divide') },
  { char: '°', named: '&deg;', decimal: '&#176;', description: t('tools.html-entity-encoder.reference.entities.deg') },
  { char: '±', named: '&plusmn;', decimal: '&#177;', description: t('tools.html-entity-encoder.reference.entities.plusmn') },
  { char: '¼', named: '&frac14;', decimal: '&#188;', description: t('tools.html-entity-encoder.reference.entities.frac14') }
]
</script> 