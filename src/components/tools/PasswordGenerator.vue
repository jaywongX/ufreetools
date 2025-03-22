<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <!-- 密码长度设置 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.password-generator.options.length') }}
          </label>
          <div class="flex items-center">
            <input 
              type="range" 
              v-model="passwordLength" 
              min="6" 
              max="64" 
              class="w-40 mr-3"
            />
            <input 
              type="number" 
              v-model="passwordLength" 
              min="6" 
              max="64" 
              class="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
        </div>
        
        <!-- 密码强度设置 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.password-generator.strength.title') }}
          </label>
          <select 
            v-model="passwordStrength"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="easy">{{ $t('tools.password-generator.presets.memorable') }} ({{ $t('tools.password-generator.presets.easyToRemember') }})</option>
            <option value="medium">{{ $t('tools.password-generator.presets.standard') }} ({{ $t('tools.password-generator.presets.balanced') }})</option>
            <option value="strong">{{ $t('tools.password-generator.presets.strong') }} ({{ $t('tools.password-generator.presets.secure') }})</option>
            <option value="custom">{{ $t('tools.password-generator.presets.custom') }}</option>
          </select>
        </div>
        
        <!-- 密码数量设置 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.password-generator.options.quantity') }}
          </label>
          <select 
            v-model="passwordCount"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option :value="1">1 {{ $t('tools.password-generator.units.passwords') }}</option>
            <option :value="5">5 {{ $t('tools.password-generator.units.passwords') }}</option>
            <option :value="10">10 {{ $t('tools.password-generator.units.passwords') }}</option>
            <option :value="20">20 {{ $t('tools.password-generator.units.passwords') }}</option>
            <option :value="50">50 {{ $t('tools.password-generator.units.passwords') }}</option>
          </select>
        </div>
      </div>
      
      <!-- 字符组合选项 -->
      <div v-if="passwordStrength === 'custom'" class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.password-generator.options.characterTypes') }}
        </label>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="include-uppercase" 
              v-model="includeUppercase"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="include-uppercase" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.password-generator.options.includeUppercase') }}
            </label>
          </div>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="include-lowercase" 
              v-model="includeLowercase"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="include-lowercase" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.password-generator.options.includeLowercase') }}
            </label>
          </div>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="include-numbers" 
              v-model="includeNumbers"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="include-numbers" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.password-generator.options.includeNumbers') }}
            </label>
          </div>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="include-symbols" 
              v-model="includeSymbols"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="include-symbols" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.password-generator.options.includeSymbols') }}
            </label>
          </div>
        </div>
      </div>
      
      <!-- 高级选项 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.password-generator.options.advancedOptions') }}
          </label>
          <button 
            @click="showAdvancedOptions = !showAdvancedOptions"
            class="text-sm text-primary dark:text-primary-light flex items-center"
          >
            {{ showAdvancedOptions ? $t('tools.password-generator.actions.collapse') : $t('tools.password-generator.actions.expand') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform" :class="{'rotate-180': showAdvancedOptions}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div v-if="showAdvancedOptions" class="space-y-3">
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="exclude-similar" 
              v-model="excludeSimilar"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="exclude-similar" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.password-generator.options.excludeSimilar') }}
            </label>
          </div>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="exclude-ambiguous" 
              v-model="excludeAmbiguous"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="exclude-ambiguous" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.password-generator.options.excludeAmbiguous') }}
            </label>
          </div>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="require-every-type" 
              v-model="requireEveryType"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="require-every-type" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.password-generator.options.requireAll') }}
            </label>
          </div>
        </div>
      </div>
      
      <!-- 生成按钮 -->
      <div class="flex justify-center mt-6">
        <button 
          @click="generatePassword"
          class="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.password-generator.actions.generate') }}
        </button>
      </div>
    </div>
    
    <!-- 生成的密码列表 -->
    <div>
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-lg font-medium">{{ $t('tools.password-generator.results.title') }}</h2>
        <div class="flex space-x-2">
          <button 
            v-if="generatedPasswords.length > 0"
            @click="copyAllPasswords"
            class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center"
            :title="$t('tools.password-generator.actions.copyAll')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {{ $t('tools.password-generator.actions.copyAll') }}
          </button>
          <button 
            v-if="generatedPasswords.length > 0"
            @click="clearPasswords"
            class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center"
            :title="$t('tools.password-generator.actions.clear')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            {{ $t('tools.password-generator.actions.clear') }}
          </button>
        </div>
      </div>
      
      <div v-if="generatedPasswords.length === 0" class="bg-gray-50 dark:bg-gray-800 rounded-md p-8 text-center">
        <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.password-generator.messages.clickToGenerate') }}</p>
      </div>
      
      <div v-else class="space-y-3">
        <div 
          v-for="(password, index) in generatedPasswords" 
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center"
        >
          <div>
            <p class="font-mono text-gray-800 dark:text-gray-200">{{ password }}</p>
            <div class="mt-1 flex items-center">
              <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  class="h-full rounded-full" 
                  :class="getStrengthColorClass(calculatePasswordStrength(password))"
                  :style="`width: ${calculatePasswordStrength(password) * 25}%`"
                ></div>
              </div>
              <span class="ml-2 text-xs text-gray-500 dark:text-gray-400">{{ getStrengthText(calculatePasswordStrength(password)) }}</span>
            </div>
          </div>
          <button 
            @click="copyPassword(password)"
            class="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            :title="$t('tools.password-generator.actions.copy') + ': ' + password"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 密码安全提示 -->
    <div class="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-md p-4 border border-blue-100 dark:border-blue-800">
      <h3 class="text-blue-700 dark:text-blue-300 font-medium mb-2">{{ $t('tools.password-generator.tips.title') }}</h3>
      <ul class="text-blue-600 dark:text-blue-400 text-sm space-y-1 list-disc pl-5">
        <li>{{ $t('tools.password-generator.tips.useLength') }}</li>
        <li>{{ $t('tools.password-generator.tips.useDifferent') }}</li>
        <li>{{ $t('tools.password-generator.tips.changeRegularly') }}</li>
        <li>{{ $t('tools.password-generator.tips.useManager') }}</li>
        <li>{{ $t('tools.password-generator.tips.use2FA') }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 基本参数
const passwordLength = ref(16)
const passwordStrength = ref('strong')
const passwordCount = ref(5)
const generatedPasswords = ref([])
const showAdvancedOptions = ref(false)

// 字符类型选项
const includeUppercase = ref(true)
const includeLowercase = ref(true)
const includeNumbers = ref(true)
const includeSymbols = ref(true)

// 高级选项
const excludeSimilar = ref(false)
const excludeAmbiguous = ref(false)
const requireEveryType = ref(true)

// 字符集定义
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz'
const NUMBER_CHARS = '0123456789'
const SYMBOL_CHARS = '!@#$%^&*()-_=+[]{}|;:,.<>?'
const SIMILAR_CHARS = 'iIlL1oO0'
const AMBIGUOUS_CHARS = '{}[]()/\\\'"`~,;:.<>'

// 监听密码强度变化，自动设置对应的字符类型
watch(passwordStrength, (newValue) => {
  if (newValue === 'easy') {
    includeUppercase.value = false
    includeLowercase.value = true
    includeNumbers.value = true
    includeSymbols.value = false
    excludeSimilar.value = true
    excludeAmbiguous.value = true
    requireEveryType.value = false
    passwordLength.value = 10
  } else if (newValue === 'medium') {
    includeUppercase.value = true
    includeLowercase.value = true
    includeNumbers.value = true
    includeSymbols.value = false
    excludeSimilar.value = false
    excludeAmbiguous.value = true
    requireEveryType.value = true
    passwordLength.value = 12
  } else if (newValue === 'strong') {
    includeUppercase.value = true
    includeLowercase.value = true
    includeNumbers.value = true
    includeSymbols.value = true
    excludeSimilar.value = false
    excludeAmbiguous.value = false
    requireEveryType.value = true
    passwordLength.value = 16
  }
})

// 根据设置生成字符集
function generateCharset() {
  // 检查至少选择了一种字符类型
  if (!includeUppercase.value && !includeLowercase.value && !includeNumbers.value && !includeSymbols.value) {
    // 默认启用小写字母
    includeLowercase.value = true
  }
  
  let charset = ''
  
  if (includeUppercase.value) {
    charset += UPPERCASE_CHARS
  }
  
  if (includeLowercase.value) {
    charset += LOWERCASE_CHARS
  }
  
  if (includeNumbers.value) {
    charset += NUMBER_CHARS
  }
  
  if (includeSymbols.value) {
    charset += SYMBOL_CHARS
  }
  
  // 排除相似字符
  if (excludeSimilar.value) {
    for (let i = 0; i < SIMILAR_CHARS.length; i++) {
      charset = charset.replace(new RegExp(SIMILAR_CHARS[i], 'g'), '')
    }
  }
  
  // 排除难以辨认的符号
  if (excludeAmbiguous.value) {
    for (let i = 0; i < AMBIGUOUS_CHARS.length; i++) {
      charset = charset.replace(new RegExp('\\' + AMBIGUOUS_CHARS[i], 'g'), '')
    }
  }
  
  return charset
}

// 生成随机密码
function generatePassword() {
  generatedPasswords.value = []
  
  const charset = generateCharset()
  if (!charset) {
    alert(t('tools.password-generator.messages.invalidOptions'))
    return
  }
  
  // 根据设置准备不同的字符集
  const uppercaseSet = includeUppercase.value ? UPPERCASE_CHARS : ''
  const lowercaseSet = includeLowercase.value ? LOWERCASE_CHARS : ''
  const numberSet = includeNumbers.value ? NUMBER_CHARS : ''
  const symbolSet = includeSymbols.value ? SYMBOL_CHARS : ''
  
  // 排除处理
  let finalUppercaseSet = uppercaseSet
  let finalLowercaseSet = lowercaseSet
  let finalNumberSet = numberSet
  let finalSymbolSet = symbolSet
  
  if (excludeSimilar.value) {
    for (let char of SIMILAR_CHARS) {
      finalUppercaseSet = finalUppercaseSet.replace(new RegExp(char, 'g'), '')
      finalLowercaseSet = finalLowercaseSet.replace(new RegExp(char, 'g'), '')
      finalNumberSet = finalNumberSet.replace(new RegExp(char, 'g'), '')
    }
  }
  
  if (excludeAmbiguous.value) {
    for (let char of AMBIGUOUS_CHARS) {
      finalSymbolSet = finalSymbolSet.replace(new RegExp('\\' + char, 'g'), '')
    }
  }
  
  for (let i = 0; i < passwordCount.value; i++) {
    let password
    
    if (requireEveryType.value && passwordLength.value >= 4 && 
        includeUppercase.value && includeLowercase.value && 
        includeNumbers.value && includeSymbols.value) {
      // 确保每种类型至少有一个字符
      password = generatePasswordWithAllTypes(charset, finalUppercaseSet, finalLowercaseSet, finalNumberSet, finalSymbolSet)
    } else {
      password = generateRandomPassword(charset)
    }
    
    generatedPasswords.value.push(password)
  }
}

// 普通随机密码生成
function generateRandomPassword(charset) {
  let password = ''
  const length = passwordLength.value
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }
  
  return password
}

// 确保每种字符类型都包含的密码生成
function generatePasswordWithAllTypes(charset, uppercaseSet, lowercaseSet, numberSet, symbolSet) {
  // 首先选择每种类型的至少一个字符
  let password = ''
  
  if (uppercaseSet && includeUppercase.value) {
    password += uppercaseSet[Math.floor(Math.random() * uppercaseSet.length)]
  }
  
  if (lowercaseSet && includeLowercase.value) {
    password += lowercaseSet[Math.floor(Math.random() * lowercaseSet.length)]
  }
  
  if (numberSet && includeNumbers.value) {
    password += numberSet[Math.floor(Math.random() * numberSet.length)]
  }
  
  if (symbolSet && includeSymbols.value) {
    password += symbolSet[Math.floor(Math.random() * symbolSet.length)]
  }
  
  // 填充剩余长度
  const remainingLength = passwordLength.value - password.length
  
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }
  
  // 随机打乱字符顺序
  return shuffleString(password)
}

// 随机打乱字符串
function shuffleString(str) {
  const array = str.split('')
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  
  return array.join('')
}

// 复制单个密码
function copyPassword(password) {
  navigator.clipboard.writeText(password).then(() => {
    alert(t('tools.password-generator.messages.copied'))
  }).catch(err => {
    console.error(t('tools.password-generator.errors.copyFailed'), err)
    alert(t('tools.password-generator.errors.copyFailedManual'))
  })
}

// 复制所有密码
function copyAllPasswords() {
  const allPasswords = generatedPasswords.value.join('\n')
  navigator.clipboard.writeText(allPasswords).then(() => {
    alert(t('tools.password-generator.messages.allCopied'))
  }).catch(err => {
    console.error(t('tools.password-generator.errors.copyFailed'), err)
    alert(t('tools.password-generator.errors.copyFailedManual'))
  })
}

// 清空密码列表
function clearPasswords() {
  generatedPasswords.value = []
}

// 计算密码强度 (0-4 分)
function calculatePasswordStrength(password) {
  if (!password) return 0
  
  let score = 0
  
  // 长度评分
  if (password.length >= 8) score += 1
  if (password.length >= 12) score += 1
  
  // 字符多样性评分
  if (/[A-Z]/.test(password)) score += 0.5
  if (/[a-z]/.test(password)) score += 0.5
  if (/[0-9]/.test(password)) score += 0.5
  if (/[^A-Za-z0-9]/.test(password)) score += 0.5
  
  // 字符类型的组合评分
  let typesCount = 0
  if (/[A-Z]/.test(password)) typesCount++
  if (/[a-z]/.test(password)) typesCount++
  if (/[0-9]/.test(password)) typesCount++
  if (/[^A-Za-z0-9]/.test(password)) typesCount++
  
  if (typesCount >= 3) score += 1
  
  return Math.min(4, Math.floor(score))
}

// 获取强度对应的颜色类
function getStrengthColorClass(strength) {
  switch (strength) {
    case 0: return 'bg-red-500'
    case 1: return 'bg-orange-500'
    case 2: return 'bg-yellow-500'
    case 3: return 'bg-green-400'
    case 4: return 'bg-green-600'
    default: return 'bg-gray-500'
  }
}

// 获取强度对应的文本
function getStrengthText(strength) {
  switch (strength) {
    case 0: return t('tools.password-generator.strength.veryWeak')
    case 1: return t('tools.password-generator.strength.weak')
    case 2: return t('tools.password-generator.strength.medium')
    case 3: return t('tools.password-generator.strength.strong')
    case 4: return t('tools.password-generator.strength.veryStrong')
    default: return t('tools.password-generator.strength.unknown')
  }
}

// 监听语言变化时重新生成密码
watch(locale, () => {
  if (generatedPasswords.value.length > 0) {
    generatePassword()
  }
})

// 页面加载时自动生成密码
generatePassword()
</script> 