<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ t('tools.number-converter.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ t('tools.number-converter.description') }}
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('tools.number-converter.input.title') }}
          </label>
          <div class="flex gap-2">
            <button 
              @click="clearInput" 
              class="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {{ t('tools.number-converter.actions.clear') }}
            </button>
            <button 
              @click="loadExample" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('common.loadExample') || '加载示例' }}
            </button>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-2">
          <input 
            v-model="inputValue" 
            @input="validateAndConvert"
            :placeholder="t('tools.number-converter.input.placeholder')"
            class="w-full sm:flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono"
          >
          <select 
            v-model="inputBase"
            @change="validateAndConvert"
            class="w-full sm:w-28 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="2">{{ t('tools.number-converter.bases.binary') }}</option>
            <option value="8">{{ t('tools.number-converter.bases.octal') }}</option>
            <option value="10">{{ t('tools.number-converter.bases.decimal') }}</option>
            <option value="16">{{ t('tools.number-converter.bases.hexadecimal') }}</option>
            <option value="32">{{ t('tools.number-converter.bases.base32') }}</option>
            <option value="36">{{ t('tools.number-converter.bases.base36') }}</option>
            <option value="64">{{ t('tools.number-converter.bases.base64') }}</option>
          </select>
        </div>
        <div v-if="localizedError" class="mt-1 text-sm text-red-500">
          {{ localizedError }}
        </div>
        <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {{ getInputHelper() }}
        </div>
      </div>
      
      <!-- 显示选项 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ t('tools.number-converter.options.formatOutput') }}
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.binary" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.output.binary') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.octal" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.output.octal') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.decimal" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.output.decimal') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.hex" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.output.hexadecimal') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.base32" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.bases.base32') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.base36" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.bases.base36') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="advancedOptions.showPrefix" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.options.prefix') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="advancedOptions.groupDigits" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.options.separator') }}</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="advancedOptions.upperCase" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('tools.number-converter.options.uppercase') }}</span>
          </label>
        </div>
      </div>
      
      <!-- 按钮区域 -->
      <div class="flex justify-between mt-4">
        <button 
          @click="copyAllResults"
          class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm"
        >
          {{ t('tools.number-converter.actions.copy') }}
        </button>
        <button 
          @click="validateAndConvert"
          class="px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark text-sm"
        >
          {{ t('tools.number-converter.actions.convert') }}
        </button>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{{ t('tools.number-converter.output.title') }}</h3>
      
      <div v-if="converted" class="space-y-4">
        <!-- 二进制结果 -->
        <div v-if="displayOptions.binary" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('tools.number-converter.output.binary') }}
            </label>
            <button 
              @click="copyResult('binary')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('tools.number-converter.actions.copy') }}
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.binary }}</pre>
          </div>
          <!-- <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            长度: {{ results.binary.replace(/\s/g, '').length }} 位
          </div> -->
        </div>
        
        <!-- 八进制结果 -->
        <div v-if="displayOptions.octal" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('tools.number-converter.output.octal') }}
            </label>
            <button 
              @click="copyResult('octal')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('tools.number-converter.actions.copy') }}
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.octal }}</pre>
          </div>
        </div>
        
        <!-- 十进制结果 -->
        <div v-if="displayOptions.decimal" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('tools.number-converter.output.decimal') }}
            </label>
            <button 
              @click="copyResult('decimal')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('tools.number-converter.actions.copy') }}
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.decimal }}</pre>
          </div>
        </div>
        
        <!-- 十六进制结果 -->
        <div v-if="displayOptions.hex" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('tools.number-converter.output.hexadecimal') }}
            </label>
            <button 
              @click="copyResult('hex')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('tools.number-converter.actions.copy') }}
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.hex }}</pre>
          </div>
        </div>
        
        <!-- Base32结果 -->
        <div v-if="displayOptions.base32" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('tools.number-converter.bases.base32') }}
            </label>
            <button 
              @click="copyResult('base32')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('tools.number-converter.actions.copy') }}
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.base32 }}</pre>
          </div>
        </div>
        
        <!-- Base36结果 -->
        <div v-if="displayOptions.base36" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('tools.number-converter.bases.base36') }}
            </label>
            <button 
              @click="copyResult('base36')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('tools.number-converter.actions.copy') }}
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.base36 }}</pre>
          </div>
        </div>
      </div>
      
      <div v-else class="p-4 bg-gray-50 dark:bg-gray-750 rounded-md text-center">
        <p class="text-gray-500 dark:text-gray-400">{{ t('tools.number-converter.input.placeholder') }}</p>
      </div>
    </div>
    
    <!-- 文章部分 -->
    <div class="mt-10 pt-6 border-t dark:border-gray-700">
      <NumberConverterArticle />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import NumberConverterArticle from './NumberConverterArticle.vue'

// 初始化国际化
const { t, locale } = useI18n()

// 输入值和选择的进制
const inputValue = ref('')
const inputBase = ref('10')
const inputError = ref('')
const errorKey = ref('') // 用于存储错误消息的键
const errorParams = ref({}) // 用于存储错误消息的参数

// 计算属性: 根据当前语言和错误键生成错误消息
const localizedError = computed(() => {
  if (!errorKey.value) return inputError.value
  
  try {
    if (errorParams.value && Object.keys(errorParams.value).length > 0) {
      return t(errorKey.value, errorParams.value)
    }
    return t(errorKey.value)
  } catch (err) {
    return inputError.value
  }
})

// 监听语言变化
watch(locale, () => {
  // 如果有错误键，则更新错误消息
  if (errorKey.value) {
    try {
      inputError.value = errorParams.value ? 
        t(errorKey.value, errorParams.value) : 
        t(errorKey.value)
    } catch (err) {
      // 保留原始错误消息
    }
  }
})

// 显示选项
const displayOptions = reactive({
  binary: true,
  octal: true,
  decimal: true,
  hex: true,
  base32: false,
  base36: false
})

// 高级选项
const advancedOptions = reactive({
  showPrefix: true, 
  groupDigits: true,
  upperCase: false
})

// 转换结果
const converted = ref(false)
const results = reactive({
  binary: '',
  octal: '',
  decimal: '',
  hex: '',
  base32: '',
  base36: ''
})

// 格式化后的结果
const formattedResults = computed(() => {
  const formatted = {}
  
  // 二进制格式化
  formatted.binary = formatNumber(results.binary, 2)
  
  // 八进制格式化
  formatted.octal = formatNumber(results.octal, 8)
  
  // 十进制格式化
  formatted.decimal = formatNumber(results.decimal, 10)
  
  // 十六进制格式化
  formatted.hex = formatNumber(results.hex, 16)
  
  // Base32格式化
  formatted.base32 = formatNumber(results.base32, 32)
  
  // Base36格式化
  formatted.base36 = formatNumber(results.base36, 36)
  
  return formatted
})

// 格式化数字显示
function formatNumber(number, base) {
  if (!number) return ''
  
  let result = number
  const isNegative = result.startsWith('-')
  
  // 去除负号进行格式化，后面再加回
  if (isNegative) {
    result = result.substring(1)
  }
  
  // 添加进制前缀
  if (advancedOptions.showPrefix) {
    if (base === 2) result = '0b' + result
    else if (base === 8) result = '0o' + result
    else if (base === 16) result = '0x' + result
    else if (base === 32) result = 'b32:' + result
    else if (base === 36) result = 'b36:' + result
  }
  
  // 应用大小写
  if (base > 10 && advancedOptions.upperCase) {
    result = result.toUpperCase()
  } else if (base > 10 && !advancedOptions.upperCase) {
    result = result.toLowerCase()
  }
  
  // 数字分组
  if (advancedOptions.groupDigits) {
    if (base === 2) {
      result = result.replace(/^(0b)?/, '')
      result = result.replace(/(.{4})/g, '$1 ').trim()
      if (advancedOptions.showPrefix) result = '0b ' + result
    }
    else if (base === 8) {
      result = result.replace(/^(0o)?/, '')
      result = result.replace(/(.{3})/g, '$1 ').trim()
      if (advancedOptions.showPrefix) result = '0o ' + result
    }
    else if (base === 10) {
      result = result.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    else if (base === 16) {
      result = result.replace(/^(0x)?/, '')
      result = result.replace(/(.{2})/g, '$1 ').trim()
      if (advancedOptions.showPrefix) result = '0x ' + result
    }
  }
  
  // 重新添加负号
  if (isNegative) {
    result = '-' + result
  }
  
  return result
}

// 获取输入提示
function getInputHelper() {
  const base = parseInt(inputBase.value)
  switch (base) {
    case 2:
      return t('tools.number-converter.bases.binary') + ': ' + '0, 1'
    case 8:
      return t('tools.number-converter.bases.octal') + ': ' + '0-7'
    case 10:
      return t('tools.number-converter.bases.decimal') + ': ' + '0-9'
    case 16:
      return t('tools.number-converter.bases.hexadecimal') + ': ' + '0-9, a-f'
    case 32:
      return t('tools.number-converter.bases.base32') + ': ' + '0-9, a-v'
    case 36:
      return t('tools.number-converter.bases.base36') + ': ' + '0-9, a-z'
    case 64:
      return t('tools.number-converter.bases.base64') + ': ' + t('tools.number-converter.messages.invalidInput')
    default:
      return ''
  }
}

// 验证输入并转换
function validateAndConvert() {
  inputError.value = ''  // 清除错误
  errorKey.value = ''    // 清除错误键
  errorParams.value = {} // 清除错误参数
  
  if (!inputValue.value) {
    converted.value = false
    return
  }
  
  // 去除空白和进制前缀
  let cleanedInput = inputValue.value.trim()
  
  // 处理负数
  const isNegative = cleanedInput.startsWith('-')
  if (isNegative) {
    cleanedInput = cleanedInput.substring(1)
  }
  
  // 移除进制前缀
  if (inputBase.value === '2' && /^0b/i.test(cleanedInput)) {
    cleanedInput = cleanedInput.substring(2)
  } else if (inputBase.value === '8' && /^0o/i.test(cleanedInput)) {
    cleanedInput = cleanedInput.substring(2)
  } else if (inputBase.value === '16' && /^0x/i.test(cleanedInput)) {
    cleanedInput = cleanedInput.substring(2)
  }
  
  // 移除分组符号
  cleanedInput = cleanedInput.replace(/[\s,_]/g, '')
  
  // 验证输入是否符合当前进制
  const base = parseInt(inputBase.value)
  const regexPatterns = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-f]+$/i,
    32: /^[0-9a-v]+$/i,
    36: /^[0-9a-z]+$/i
  }
  
  if (!regexPatterns[base].test(cleanedInput)) {
    errorKey.value = 'tools.number-converter.messages.invalidInput'
    inputError.value = t(errorKey.value) // 立即设置当前语言的错误消息
    converted.value = false
    return
  }
  
  try {
    // 使用BigInt解析输入
    let value
    if (cleanedInput) {
      value = BigInt(isNegative ? '-' : '') + BigInt(parseInt(cleanedInput, base))
    } else {
      value = BigInt(0)
    }
    
    // 将BigInt转换为各种进制的字符串
    results.binary = value.toString(2)
    results.octal = value.toString(8)
    results.decimal = value.toString(10)
    results.hex = value.toString(16)
    
    // Base32和Base36需要额外处理
    results.base32 = convertToBigIntBase(value, 32)
    results.base36 = value.toString(36)
    
    converted.value = true
  } catch (error) {
    console.error(t('tools.number-converter.messages.invalidInput') + ':', error)
    errorKey.value = 'tools.number-converter.messages.invalidInput'
    inputError.value = t(errorKey.value) + ': ' + error.message // 立即设置当前语言的错误消息
    converted.value = false
  }
}

// 自定义Base转换函数
function convertToBigIntBase(value, base) {
  if (base > 36) {
    // 处理超过JavaScript原生支持的进制
    let isNegative = value < 0n
    if (isNegative) value = -value
    
    const digits = "0123456789abcdefghijklmnopqrstuvwxyz"
    const chars = []
    
    do {
      chars.push(digits[Number(value % BigInt(base))])
      value = value / BigInt(base)
    } while (value > 0n)
    
    return (isNegative ? '-' : '') + chars.reverse().join('')
  } else {
    // 使用内置函数
    return value.toString(base)
  }
}

// 清空输入
function clearInput() {
  inputValue.value = ''
  inputError.value = ''
  errorKey.value = ''
  errorParams.value = {}
  converted.value = false
}

// 复制单个结果
function copyResult(type) {
  navigator.clipboard.writeText(results[type])
    .then(() => {
      alert(t('tools.number-converter.messages.copied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 复制所有结果
function copyAllResults() {
  if (!converted.value) return
  
  const allResults = []
  
  if (displayOptions.binary) allResults.push(`${t('tools.number-converter.output.binary')}: ${results.binary}`)
  if (displayOptions.octal) allResults.push(`${t('tools.number-converter.output.octal')}: ${results.octal}`)
  if (displayOptions.decimal) allResults.push(`${t('tools.number-converter.output.decimal')}: ${results.decimal}`)
  if (displayOptions.hex) allResults.push(`${t('tools.number-converter.output.hexadecimal')}: ${results.hex}`)
  if (displayOptions.base32) allResults.push(`${t('tools.number-converter.bases.base32')}: ${results.base32}`)
  if (displayOptions.base36) allResults.push(`${t('tools.number-converter.bases.base36')}: ${results.base36}`)
  
  navigator.clipboard.writeText(allResults.join('\n'))
    .then(() => {
      alert(t('tools.number-converter.messages.copied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 根据类型获取进制名称
function getBaseNameByType(type) {
  const nameMap = {
    binary: 'output.binary',
    octal: 'output.octal',
    decimal: 'output.decimal',
    hex: 'output.hexadecimal',
    base32: 'bases.base32',
    base36: 'bases.base36'
  }
  
  return nameMap[type] ? t(`tools.number-converter.${nameMap[type]}`) : '未知'
}

// 加载示例
function loadExample() {
  switch (inputBase.value) {
    case '2':
      inputValue.value = '1010101010101010'
      break
    case '8':
      inputValue.value = '52525'
      break
    case '10':
      inputValue.value = '1234567890'
      break
    case '16':
      inputValue.value = 'deadbeef'
      break
    case '32':
      inputValue.value = 'a1b2c3d4'
      break
    case '36':
      inputValue.value = 'hello123'
      break
    default:
      inputValue.value = '42'
  }
  validateAndConvert()
}

// 监听选项变化
watch(advancedOptions, () => {
  if (converted.value) {
    // 仅在已有转换结果时刷新格式化
  }
}, { deep: true })

// 监听输入进制变化
watch(inputBase, () => {
  // 当进制变化时清除输入错误
  inputError.value = ''
  errorKey.value = ''
  errorParams.value = {}
})
</script> 