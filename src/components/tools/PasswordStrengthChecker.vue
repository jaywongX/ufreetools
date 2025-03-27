<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{{ $t('tools.password-strength-checker.input.title') }}</h2>
      
      <div class="relative">
        <input 
          :type="showPassword ? 'text' : 'password'" 
          v-model="password" 
          :placeholder="$t('tools.password-strength-checker.input.placeholder')"
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          @input="analyzePassword"
        />
        <button 
          @click="showPassword = !showPassword"
          class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
      
      <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {{ $t('tools.password-strength-checker.input.disclaimer') }}
      </div>
    </div>
    
    <!-- 结果显示区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- 主要评分显示 -->
      <div class="p-6 pb-3 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">{{ $t('tools.password-strength-checker.results.title') }}</h3>
          <div class="flex items-center" v-if="password">
            <div 
              class="w-2 h-2 rounded-full mr-2"
              :class="getScoreColorClass(score, 'bg')"
            ></div>
            <span 
              class="font-medium"
              :class="getScoreColorClass(score, 'text')"
            >
              {{ getScoreLabel(score) }}
            </span>
          </div>
        </div>
        
        <!-- 强度条 -->
        <div class="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            class="h-full rounded-full transition-all duration-300 ease-out"
            :class="getScoreColorClass(score, 'bg')"
            :style="{ width: getScorePercentage(score) + '%' }"
          ></div>
        </div>
        
        <!-- 强度说明 -->
        <div class="mt-3 text-sm" v-if="password">
          <p class="text-gray-700 dark:text-gray-300">
            {{ getScoreDescription(score) }}
          </p>
        </div>
        <div class="mt-3 text-sm text-gray-500 dark:text-gray-400" v-else>
          {{ $t('tools.password-strength-checker.input.empty') }}
        </div>
      </div>
      
      <!-- 详细分析 -->
      <div class="p-6 border-b border-gray-200 dark:border-gray-700" v-if="password">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.password-strength-checker.details.title') }}</h3>
        
        <div class="space-y-5">
          <!-- 密码长度 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('tools.password-strength-checker.details.length') }} ({{ password.length }} {{ $t('tools.password-strength-checker.characters') }})
              </div>
              <div class="text-xs font-medium" :class="getLengthScoreClass()">
                {{ getLengthScore() }}
              </div>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                class="h-full rounded-full transition-all duration-300 ease-out"
                :class="getLengthScoreColorClass()"
                :style="{ width: getLengthScorePercentage() + '%' }"
              ></div>
            </div>
            <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ getLengthMessage() }}
            </div>
          </div>
          
          <!-- 字符多样性 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('tools.password-strength-checker.details.charset') }}
              </div>
              <div class="text-xs font-medium" :class="getComplexityScoreClass()">
                {{ getComplexityScore() }}
              </div>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                class="h-full rounded-full transition-all duration-300 ease-out"
                :class="getComplexityScoreColorClass()"
                :style="{ width: getComplexityScorePercentage() + '%' }"
              ></div>
            </div>
            <div class="mt-1 grid grid-cols-2 gap-3">
              <div class="flex items-center">
                <div 
                  class="w-3 h-3 flex items-center justify-center rounded-full text-xs mr-2"
                  :class="hasUppercase ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-600'"
                >
                  <span v-if="hasUppercase">✓</span>
                </div>
                <span class="text-xs text-gray-600 dark:text-gray-400">{{ $t('tools.password-strength-checker.details.uppercase') }} (A-Z)</span>
              </div>
              <div class="flex items-center">
                <div 
                  class="w-3 h-3 flex items-center justify-center rounded-full text-xs mr-2"
                  :class="hasLowercase ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-600'"
                >
                  <span v-if="hasLowercase">✓</span>
                </div>
                <span class="text-xs text-gray-600 dark:text-gray-400">{{ $t('tools.password-strength-checker.details.lowercase') }} (a-z)</span>
              </div>
              <div class="flex items-center">
                <div 
                  class="w-3 h-3 flex items-center justify-center rounded-full text-xs mr-2"
                  :class="hasNumbers ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-600'"
                >
                  <span v-if="hasNumbers">✓</span>
                </div>
                <span class="text-xs text-gray-600 dark:text-gray-400">{{ $t('tools.password-strength-checker.details.numbers') }} (0-9)</span>
              </div>
              <div class="flex items-center">
                <div 
                  class="w-3 h-3 flex items-center justify-center rounded-full text-xs mr-2"
                  :class="hasSymbols ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-600'"
                >
                  <span v-if="hasSymbols">✓</span>
                </div>
                <span class="text-xs text-gray-600 dark:text-gray-400">{{ $t('tools.password-strength-checker.details.symbols') }} (!@#$%^&*)</span>
              </div>
            </div>
          </div>
          
          <!-- 常见问题和漏洞 -->
          <div v-if="issues.length > 0">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('tools.password-strength-checker.results.warnings') }}
            </div>
            <ul class="space-y-2">
              <li v-for="(issue, index) in issues" :key="index" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ issue }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 改进建议 -->
      <div class="p-6" v-if="password">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.password-strength-checker.results.suggestions') }}</h3>
        
        <ul class="space-y-3">
          <li v-for="(suggestion, index) in suggestions" :key="index" class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm text-gray-600 dark:text-gray-400">{{ suggestion }}</span>
          </li>
        </ul>
      </div>
      
      <!-- 密码安全提示 -->
      <div class="bg-blue-50 dark:bg-blue-900 p-4" v-if="!password">
        <div class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 class="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">{{ $t('tools.password-strength-checker.tips.title') }}</h4>
            <ul class="text-xs text-blue-700 dark:text-blue-400 space-y-1 list-disc pl-4">
              <li>{{ $t('tools.password-strength-checker.tips.length') }}</li>
              <li>{{ $t('tools.password-strength-checker.tips.mix') }}</li>
              <li>{{ $t('tools.password-strength-checker.tips.avoid') }}</li>
              <li>{{ $t('tools.password-strength-checker.tips.unique') }}</li>
              <li>{{ $t('tools.password-strength-checker.tips.manager') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 状态变量
const password = ref('')
const showPassword = ref(false)
const score = ref(0)
const hasUppercase = ref(false)
const hasLowercase = ref(false)
const hasNumbers = ref(false)
const hasSymbols = ref(false)
const hasSequence = ref(false)
const hasRepeatedChars = ref(false)
const issues = ref([])
const suggestions = ref([])

// 常见弱密码列表
const commonPasswords = [
  'password', '123456', '12345678', 'qwerty', 'admin', 
  'welcome', 'football', '123123', 'monkey', '1234567890',
  'abc123', 'letmein', '111111', '1234', 'superman', 'iloveyou',
  'sunshine', 'ashley', 'bailey', 'passw0rd', 'shadow', 'michael',
  'football', 'baseball', 'master', 'killer', 'soccer', 'princess'
]

// 常见键盘序列
const keyboardSequences = [
  'qwerty', 'asdfgh', 'zxcvbn', '123456', '654321', 'abcdef',
  'qweasd', 'qazwsx', '1qaz2wsx'
]

// 分析密码强度
function analyzePassword() {
  if (!password.value) {
    resetAnalysis()
    return
  }
  
  // 检查字符类型
  hasUppercase.value = /[A-Z]/.test(password.value)
  hasLowercase.value = /[a-z]/.test(password.value)
  hasNumbers.value = /[0-9]/.test(password.value)
  hasSymbols.value = /[^A-Za-z0-9]/.test(password.value)
  
  // 计算多样性得分
  const varietyCount = [hasUppercase.value, hasLowercase.value, hasNumbers.value, hasSymbols.value]
    .filter(Boolean).length
  
  // 初始评分
  let calculatedScore = 0
  
  // 长度评分 (最多3分)
  if (password.value.length >= 8) calculatedScore += 1
  if (password.value.length >= 12) calculatedScore += 1
  if (password.value.length >= 16) calculatedScore += 1
  
  // 字符多样性评分 (最多4分)
  calculatedScore += varietyCount
  
  // 检查是否是常见密码 (扣4分)
  const lowerPassword = password.value.toLowerCase()
  const isCommonPassword = commonPasswords.some(common => 
    lowerPassword.includes(common) || common.includes(lowerPassword)
  )
  
  if (isCommonPassword) {
    calculatedScore = Math.max(0, calculatedScore - 4)
  }
  
  // 检查是否有键盘序列 (扣2分)
  hasSequence.value = keyboardSequences.some(seq => 
    lowerPassword.includes(seq) || 
    lowerPassword.includes(seq.split('').reverse().join(''))
  )
  
  if (hasSequence.value) {
    calculatedScore = Math.max(0, calculatedScore - 2)
  }
  
  // 检查重复字符 (扣1分)
  hasRepeatedChars.value = /(.)\1{2,}/.test(password.value)
  if (hasRepeatedChars.value) {
    calculatedScore = Math.max(0, calculatedScore - 1)
  }
  
  // 连续数字或字母 (扣1分)
  const hasConsecutiveSequence = /(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2,}/.test(password.value) ||
                              /(?:a(?=b)|b(?=c)|c(?=d)|d(?=e)|e(?=f)|f(?=g)|g(?=h)|h(?=i)|i(?=j)|j(?=k)|k(?=l)|l(?=m)|m(?=n)|n(?=o)|o(?=p)|p(?=q)|q(?=r)|r(?=s)|s(?=t)|t(?=u)|u(?=v)|v(?=w)|w(?=x)|x(?=y)|y(?=z)){2,}/i.test(password.value)
  
  if (hasConsecutiveSequence) {
    calculatedScore = Math.max(0, calculatedScore - 1)
  }
  
  // 计算最终得分 (0-10分)
  calculatedScore = Math.min(10, Math.max(0, calculatedScore))
  score.value = calculatedScore
  
  // 收集问题
  collectIssues()
  
  // 生成建议
  generateSuggestions()
}

// 重置分析结果
function resetAnalysis() {
  score.value = 0
  hasUppercase.value = false
  hasLowercase.value = false
  hasNumbers.value = false
  hasSymbols.value = false
  hasSequence.value = false
  hasRepeatedChars.value = false
  issues.value = []
  suggestions.value = []
}

// 收集密码问题
function collectIssues() {
  const newIssues = []
  
  if (password.value.length < 8) {
    newIssues.push(t('tools.password-strength-checker.issues.tooShort'))
  }
  
  if (!hasUppercase.value) {
    newIssues.push(t('tools.password-strength-checker.issues.noUppercase'))
  }
  
  if (!hasLowercase.value) {
    newIssues.push(t('tools.password-strength-checker.issues.noLowercase'))
  }
  
  if (!hasNumbers.value) {
    newIssues.push(t('tools.password-strength-checker.issues.noNumbers'))
  }
  
  if (!hasSymbols.value) {
    newIssues.push(t('tools.password-strength-checker.issues.noSymbols'))
  }
  
  if (hasSequence.value) {
    newIssues.push(t('tools.password-strength-checker.issues.hasSequence'))
  }
  
  if (hasRepeatedChars.value) {
    newIssues.push(t('tools.password-strength-checker.issues.hasRepeated'))
  }
  
  const lowerPassword = password.value.toLowerCase()
  const isCommonPassword = commonPasswords.some(common => 
    lowerPassword.includes(common) || common.includes(lowerPassword)
  )
  
  if (isCommonPassword) {
    newIssues.push(t('tools.password-strength-checker.issues.commonPassword'))
  }
  
  issues.value = newIssues
}

// 生成改进建议
function generateSuggestions() {
  const newSuggestions = []
  
  if (password.value.length < 12) {
    newSuggestions.push(t('tools.password-strength-checker.suggestions.addMoreChars'))
  }
  
  // 如果缺少字符类型
  const missingTypes = []
  if (!hasUppercase.value) missingTypes.push(t('tools.password-strength-checker.details.uppercase'))
  if (!hasLowercase.value) missingTypes.push(t('tools.password-strength-checker.details.lowercase'))
  if (!hasNumbers.value) missingTypes.push(t('tools.password-strength-checker.details.numbers'))
  if (!hasSymbols.value) missingTypes.push(t('tools.password-strength-checker.details.symbols'))
  
  if (missingTypes.length > 0) {
    newSuggestions.push(t('tools.password-strength-checker.suggestions.addTypes', { types: missingTypes.join('、') }))
  }
  
  if (hasSequence.value || hasRepeatedChars.value) {
    newSuggestions.push(t('tools.password-strength-checker.suggestions.avoidPatterns'))
  }
  
  if (issues.value.some(issue => issue.includes(t('tools.password-strength-checker.common.common')))) {
    newSuggestions.push(t('tools.password-strength-checker.suggestions.avoidCommon'))
  }
  
  // 增加通用的建议
  if (newSuggestions.length < 2) {
    newSuggestions.push(t('tools.password-strength-checker.suggestions.useManager'))
  }
  
  if (score.value < 5 && newSuggestions.length < 3) {
    newSuggestions.push(t('tools.password-strength-checker.suggestions.usePassphrase'))
  }
  
  suggestions.value = newSuggestions
}

// 获取得分的标签
function getScoreLabel(score) {
  if (score === 0) return t('tools.password-strength-checker.score.none')
  if (score < 3) return t('tools.password-strength-checker.results.very_weak')
  if (score < 5) return t('tools.password-strength-checker.results.weak')
  if (score < 7) return t('tools.password-strength-checker.results.fair')
  if (score < 9) return t('tools.password-strength-checker.results.good')
  return t('tools.password-strength-checker.results.very_strong')
}

// 获取得分的描述
function getScoreDescription(score) {
  if (score === 0) return t('tools.password-strength-checker.descriptions.none')
  if (score < 3) return t('tools.password-strength-checker.descriptions.veryWeak')
  if (score < 5) return t('tools.password-strength-checker.descriptions.weak')
  if (score < 7) return t('tools.password-strength-checker.descriptions.fair')
  if (score < 9) return t('tools.password-strength-checker.descriptions.good')
  return t('tools.password-strength-checker.descriptions.veryStrong')
}

// 获取得分的颜色类
function getScoreColorClass(score, type) {
  const prefix = type === 'bg' ? 'bg' : 'text'
  
  if (score === 0) return `${prefix}-gray-500`
  if (score < 3) return `${prefix}-red-500`
  if (score < 5) return `${prefix}-orange-500`
  if (score < 7) return `${prefix}-yellow-500`
  if (score < 9) return `${prefix}-green-500`
  return `${prefix}-green-600`
}

// 获取得分的百分比
function getScorePercentage(score) {
  return (score / 10) * 100
}

// 获取长度评分
function getLengthScore() {
  const length = password.value.length
  
  if (length === 0) return t('tools.password-strength-checker.length.none')
  if (length < 8) return t('tools.password-strength-checker.length.tooShort')
  if (length < 12) return t('tools.password-strength-checker.length.acceptable')
  if (length < 16) return t('tools.password-strength-checker.length.good')
  return t('tools.password-strength-checker.length.excellent')
}

// 获取长度评分的CSS类
function getLengthScoreClass() {
  const length = password.value.length
  
  if (length === 0) return 'text-gray-500'
  if (length < 8) return 'text-red-500'
  if (length < 12) return 'text-orange-500'
  if (length < 16) return 'text-green-500'
  return 'text-green-600'
}

// 获取长度评分的颜色类
function getLengthScoreColorClass() {
  const length = password.value.length
  
  if (length === 0) return 'bg-gray-500'
  if (length < 8) return 'bg-red-500'
  if (length < 12) return 'bg-orange-500'
  if (length < 16) return 'bg-green-500'
  return 'bg-green-600'
}

// 获取长度评分的百分比
function getLengthScorePercentage() {
  const length = Math.min(password.value.length, 20)
  return (length / 20) * 100
}

// 获取长度相关消息
function getLengthMessage() {
  const length = password.value.length
  
  if (length === 0) return t('tools.password-strength-checker.lengthMessage.none')
  if (length < 8) return t('tools.password-strength-checker.lengthMessage.needMore', { min: 8 })
  if (length < 12) return t('tools.password-strength-checker.lengthMessage.better', { min: 12 })
  if (length < 16) return t('tools.password-strength-checker.lengthMessage.good')
  return t('tools.password-strength-checker.lengthMessage.excellent')
}

// 获取复杂度评分
function getComplexityScore() {
  const types = [hasUppercase.value, hasLowercase.value, hasNumbers.value, hasSymbols.value]
    .filter(Boolean).length
  
  if (types === 0) return t('tools.password-strength-checker.complexity.none')
  if (types === 1) return t('tools.password-strength-checker.complexity.veryLow')
  if (types === 2) return t('tools.password-strength-checker.complexity.fair')
  if (types === 3) return t('tools.password-strength-checker.complexity.good')
  return t('tools.password-strength-checker.complexity.excellent')
}

// 获取复杂度评分的CSS类
function getComplexityScoreClass() {
  const types = [hasUppercase.value, hasLowercase.value, hasNumbers.value, hasSymbols.value]
    .filter(Boolean).length
  
  if (types === 0) return 'text-gray-500'
  if (types === 1) return 'text-red-500'
  if (types === 2) return 'text-orange-500'
  if (types === 3) return 'text-green-500'
  return 'text-green-600'
}

// 获取复杂度评分的颜色类
function getComplexityScoreColorClass() {
  const types = [hasUppercase.value, hasLowercase.value, hasNumbers.value, hasSymbols.value]
    .filter(Boolean).length
  
  if (types === 0) return 'bg-gray-500'
  if (types === 1) return 'bg-red-500'
  if (types === 2) return 'bg-orange-500'
  if (types === 3) return 'bg-green-500'
  return 'bg-green-600'
}

// 获取复杂度评分的百分比
function getComplexityScorePercentage() {
  const types = [hasUppercase.value, hasLowercase.value, hasNumbers.value, hasSymbols.value]
    .filter(Boolean).length
  
  return (types / 4) * 100
}

// 监听密码变化和语言变化
watch([password, locale], () => {
  analyzePassword()
})
</script> 