<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">进制转换工具</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        在二进制、八进制、十进制和十六进制之间进行转换，支持大数字和负数
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            输入数值
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
        <div class="flex flex-col sm:flex-row gap-2">
          <input 
            v-model="inputValue" 
            @input="validateAndConvert"
            placeholder="输入需要转换的数值"
            class="w-full sm:flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono"
          >
          <select 
            v-model="inputBase"
            @change="validateAndConvert"
            class="w-full sm:w-28 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="2">二进制</option>
            <option value="8">八进制</option>
            <option value="10">十进制</option>
            <option value="16">十六进制</option>
            <option value="32">Base32</option>
            <option value="36">Base36</option>
            <option value="64">Base64</option>
          </select>
        </div>
        <div v-if="inputError" class="mt-1 text-sm text-red-500">
          {{ inputError }}
        </div>
        <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {{ getInputHelper() }}
        </div>
      </div>
      
      <!-- 显示选项 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          显示选项
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.binary" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">二进制</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.octal" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">八进制</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.decimal" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">十进制</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.hex" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">十六进制</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.base32" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">Base32</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="displayOptions.base36" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">Base36</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="advancedOptions.showPrefix" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">显示前缀</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="advancedOptions.groupDigits" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">分组显示</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" v-model="advancedOptions.upperCase" class="mr-1">
            <span class="text-sm text-gray-700 dark:text-gray-300">大写字母</span>
          </label>
        </div>
      </div>
      
      <!-- 按钮区域 -->
      <div class="flex justify-between mt-4">
        <button 
          @click="copyAllResults"
          class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm"
        >
          复制所有结果
        </button>
        <button 
          @click="validateAndConvert"
          class="px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark text-sm"
        >
          转换
        </button>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">转换结果</h3>
      
      <div v-if="converted" class="space-y-4">
        <!-- 二进制结果 -->
        <div v-if="displayOptions.binary" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              二进制
            </label>
            <button 
              @click="copyResult('binary')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.binary }}</pre>
          </div>
          <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            长度: {{ results.binary.replace(/\s/g, '').length }} 位
          </div>
        </div>
        
        <!-- 八进制结果 -->
        <div v-if="displayOptions.octal" class="border-b border-gray-200 dark:border-gray-700 pb-3">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              八进制
            </label>
            <button 
              @click="copyResult('octal')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
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
              十进制
            </label>
            <button 
              @click="copyResult('decimal')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
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
              十六进制
            </label>
            <button 
              @click="copyResult('hex')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
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
              Base32
            </label>
            <button 
              @click="copyResult('base32')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
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
              Base36
            </label>
            <button 
              @click="copyResult('base36')"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
            </button>
          </div>
          <div class="bg-gray-50 dark:bg-gray-750 p-3 rounded-md overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-wrap break-all">{{ formattedResults.base36 }}</pre>
          </div>
        </div>
      </div>
      
      <div v-else class="p-4 bg-gray-50 dark:bg-gray-750 rounded-md text-center">
        <p class="text-gray-500 dark:text-gray-400">输入数值后将显示转换结果</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

// 输入值和选择的进制
const inputValue = ref('')
const inputBase = ref('10')
const inputError = ref('')

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
      return '二进制数只能包含 0 和 1'
    case 8:
      return '八进制数只能包含 0-7 的数字'
    case 10:
      return '十进制数可以包含 0-9 的数字'
    case 16:
      return '十六进制数可以包含 0-9 的数字和 a-f 的字母'
    case 32:
      return 'Base32 可以包含 0-9 的数字和 a-v 的字母 (不区分大小写)'
    case 36:
      return 'Base36 可以包含 0-9 的数字和 a-z 的字母 (不区分大小写)'
    case 64:
      return 'Base64 不支持输入 (仅作为输出格式)'
    default:
      return ''
  }
}

// 验证输入并转换
function validateAndConvert() {
  inputError.value = ''  // 清除错误
  
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
    inputError.value = `无效的${base}进制数`
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
    console.error('转换错误:', error)
    inputError.value = '转换错误: ' + error.message
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
  converted.value = false
}

// 复制单个结果
function copyResult(type) {
  navigator.clipboard.writeText(results[type])
    .then(() => {
      alert(`已复制${getBaseNameByType(type)}结果`)
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
  
  if (displayOptions.binary) allResults.push(`二进制: ${results.binary}`)
  if (displayOptions.octal) allResults.push(`八进制: ${results.octal}`)
  if (displayOptions.decimal) allResults.push(`十进制: ${results.decimal}`)
  if (displayOptions.hex) allResults.push(`十六进制: ${results.hex}`)
  if (displayOptions.base32) allResults.push(`Base32: ${results.base32}`)
  if (displayOptions.base36) allResults.push(`Base36: ${results.base36}`)
  
  navigator.clipboard.writeText(allResults.join('\n'))
    .then(() => {
      alert('已复制所有结果')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 根据类型获取进制名称
function getBaseNameByType(type) {
  const names = {
    binary: '二进制',
    octal: '八进制',
    decimal: '十进制',
    hex: '十六进制',
    base32: 'Base32',
    base36: 'Base36'
  }
  return names[type] || '未知'
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
})
</script> 