<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.numbers-to-words-converter.inputTitle') }}</h2>

                <!-- 数字输入 -->
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.numbers-to-words-converter.numberInput') }}
                        </label>
                        <input
                            type="text"
                            v-model="inputNumber"
                            :placeholder="$t('tools.numbers-to-words-converter.numberPlaceholder')"
                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-lg"
                            @input="validateInput"
                        />
                        <p v-if="inputError" class="text-red-500 text-sm mt-1">{{ inputError }}</p>
                    </div>

                    <!-- 货币选择 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.numbers-to-words-converter.currencyType') }}
                        </label>
                        <select
                            v-model="selectedCurrency"
                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            @change="convertNumber"
                        >
                            <option value="USD">{{ $t('tools.numbers-to-words-converter.currencies.USD') }}</option>
                            <option value="EUR">{{ $t('tools.numbers-to-words-converter.currencies.EUR') }}</option>
                            <option value="GBP">{{ $t('tools.numbers-to-words-converter.currencies.GBP') }}</option>
                            <option value="INR">{{ $t('tools.numbers-to-words-converter.currencies.INR') }}</option>
                            <option value="CNY">{{ $t('tools.numbers-to-words-converter.currencies.CNY') }}</option>
                        </select>
                    </div>

                    <!-- 示例按钮 -->
                    <div class="flex flex-wrap gap-2">
                        <button
                            v-for="example in examples"
                            :key="example"
                            @click="loadExample(example)"
                            class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors"
                        >
                            {{ example }}
                        </button>
                    </div>

                    <!-- 转换按钮 -->
                    <button
                        @click="convertNumber"
                        :disabled="!isValidNumber"
                        class="w-full btn btn-primary"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                        </svg>
                        {{ $t('tools.numbers-to-words-converter.convertBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.numbers-to-words-converter.outputTitle') }}</h2>
                    <button
                        v-if="convertedText"
                        @click="copyToClipboard"
                        class="btn btn-secondary btn-sm"
                    >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        {{ $t('tools.numbers-to-words-converter.copyBtn') }}
                    </button>
                </div>

                <!-- 转换结果 -->
                <div v-if="convertedText" class="space-y-4">
                    <!-- 主要结果 -->
                    <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">
                            {{ $t('tools.numbers-to-words-converter.result') }}
                        </h3>
                        <p class="text-lg text-green-700 dark:text-green-300 font-medium leading-relaxed">
                            {{ convertedText }}
                        </p>
                    </div>

                    <!-- 详细信息 -->
                    <div class="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                            {{ $t('tools.numbers-to-words-converter.details') }}
                        </h3>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.numbers-to-words-converter.originalNumber') }}:</span>
                                <span class="font-mono">{{ inputNumber }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.numbers-to-words-converter.currency') }}:</span>
                                <span>{{ $t(`tools.numbers-to-words-converter.currencies.${selectedCurrency}`) }}</span>
                            </div>
                            <div v-if="integerPart !== null" class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.numbers-to-words-converter.integerPart') }}:</span>
                                <span>{{ integerPart }}</span>
                            </div>
                            <div v-if="decimalPart !== null" class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.numbers-to-words-converter.decimalPart') }}:</span>
                                <span>{{ decimalPart }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                    <p class="text-gray-500">{{ $t('tools.numbers-to-words-converter.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- 文章组件 -->
        <NumbersToWordsConverterArticle />
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import NumbersToWordsConverterArticle from './NumbersToWordsConverterArticle.vue'

const { t } = useI18n()

// 响应式数据
const inputNumber = ref('')
const selectedCurrency = ref('USD')
const convertedText = ref('')
const inputError = ref('')
const integerPart = ref(null)
const decimalPart = ref(null)

// 示例数字
const examples = ['123.45', '1000', '999999.99', '-500.25', '0']

// 数字转文字的基础数据
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion']

// 中文数字转换
const chineseOnes = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const chineseUnits = ['', '十', '百', '千']
const chineseBigUnits = ['', '万', '亿', '兆']

// 货币配置
const currencyConfig = {
    USD: { major: 'dollar', majorPlural: 'dollars', minor: 'cent', minorPlural: 'cents' },
    EUR: { major: 'euro', majorPlural: 'euros', minor: 'cent', minorPlural: 'cents' },
    GBP: { major: 'pound', majorPlural: 'pounds', minor: 'penny', minorPlural: 'pence' },
    INR: { major: 'rupee', majorPlural: 'rupees', minor: 'paisa', minorPlural: 'paise' },
    CNY: { major: '元', majorPlural: '元', minor: '角', minorPlural: '分' }
}

// 验证输入
const isValidNumber = computed(() => {
    if (!inputNumber.value) return false
    const num = parseFloat(inputNumber.value)
    return !isNaN(num) && isFinite(num) && Math.abs(num) < 1e15
})

// 验证输入函数
function validateInput() {
    inputError.value = ''
    const value = inputNumber.value.trim()
    
    if (!value) return
    
    // 检查是否为有效数字
    if (!/^-?\d*\.?\d*$/.test(value)) {
        inputError.value = t('tools.numbers-to-words-converter.invalidNumber')
        return
    }
    
    const num = parseFloat(value)
    if (isNaN(num)) {
        inputError.value = t('tools.numbers-to-words-converter.invalidNumber')
        return
    }
    
    if (Math.abs(num) >= 1e36) {
        inputError.value = t('tools.numbers-to-words-converter.numberTooLarge')
        return
    }
    
    // 自动转换
    convertNumber()
}

// 转换三位数字为英文
function convertThreeDigits(num) {
    let result = ''
    const hundreds = Math.floor(num / 100)
    const remainder = num % 100
    
    if (hundreds > 0) {
        result += ones[hundreds] + ' hundred'
        if (remainder > 0) result += ' '
    }
    
    if (remainder >= 20) {
        const tensDigit = Math.floor(remainder / 10)
        const onesDigit = remainder % 10
        result += tens[tensDigit]
        if (onesDigit > 0) result += '-' + ones[onesDigit]
    } else if (remainder >= 10) {
        result += teens[remainder - 10]
    } else if (remainder > 0) {
        result += ones[remainder]
    }
    
    return result
}

// 转换整数为英文
function convertIntegerToEnglish(num) {
    if (num === 0) return 'zero'
    
    let result = ''
    let groupIndex = 0
    
    while (num > 0) {
        const group = num % 1000
        if (group > 0) {
            const groupText = convertThreeDigits(group)
            if (thousands[groupIndex]) {
                result = groupText + ' ' + thousands[groupIndex] + (result ? ' ' + result : '')
            } else {
                result = groupText + (result ? ' ' + result : '')
            }
        }
        num = Math.floor(num / 1000)
        groupIndex++
    }
    
    return result
}

// 转换中文数字
function convertToChinese(num) {
    if (num === 0) return '零'
    
    let result = ''
    let unitIndex = 0
    
    while (num > 0) {
        const group = num % 10000
        if (group > 0) {
            const groupText = convertChineseGroup(group)
            if (unitIndex > 0 && chineseBigUnits[unitIndex]) {
                result = groupText + chineseBigUnits[unitIndex] + result
            } else {
                result = groupText + result
            }
        }
        num = Math.floor(num / 10000)
        unitIndex++
    }
    
    return result
}

// 转换中文四位数组
function convertChineseGroup(num) {
    if (num === 0) return ''
    
    let result = ''
    const thousands = Math.floor(num / 1000)
    const hundreds = Math.floor((num % 1000) / 100)
    const tens = Math.floor((num % 100) / 10)
    const ones = num % 10
    
    if (thousands > 0) {
        result += chineseOnes[thousands] + '千'
    }
    if (hundreds > 0) {
        result += chineseOnes[hundreds] + '百'
    } else if (thousands > 0 && (tens > 0 || ones > 0)) {
        result += '零'
    }
    
    if (tens > 0) {
        if (tens === 1 && result === '') {
            result += '十'
        } else {
            result += chineseOnes[tens] + '十'
        }
    } else if (hundreds > 0 && ones > 0) {
        result += '零'
    }
    
    if (ones > 0) {
        result += chineseOnes[ones]
    }
    
    return result
}

// 主转换函数
function convertNumber() {
    if (!isValidNumber.value) {
        convertedText.value = ''
        integerPart.value = null
        decimalPart.value = null
        return
    }
    
    const num = parseFloat(inputNumber.value)
    const isNegative = num < 0
    const absNum = Math.abs(num)
    
    // 分离整数和小数部分
    const parts = absNum.toString().split('.')
    const integerValue = parseInt(parts[0]) || 0
    const decimalValue = parts[1] ? parseInt(parts[1].padEnd(2, '0').substring(0, 2)) : 0
    
    const config = currencyConfig[selectedCurrency.value]
    let result = ''
    
    if (selectedCurrency.value === 'CNY') {
        // 中文转换
        if (integerValue === 0) {
            result = '零' + config.major
        } else {
            result = convertToChinese(integerValue) + config.major
        }
        
        if (decimalValue > 0) {
            if (decimalValue >= 10) {
                const jiao = Math.floor(decimalValue / 10)
                const fen = decimalValue % 10
                if (jiao > 0) result += convertToChinese(jiao) + config.minor
                if (fen > 0) result += convertToChinese(fen) + config.minorPlural
            } else {
                result += convertToChinese(decimalValue) + config.minorPlural
            }
        } else {
            result += '整'
        }
        
        integerPart.value = convertToChinese(integerValue) + config.major
        decimalPart.value = decimalValue > 0 ? 
            (decimalValue >= 10 ? 
                Math.floor(decimalValue / 10) + config.minor + (decimalValue % 10 > 0 ? decimalValue % 10 + config.minorPlural : '') :
                decimalValue + config.minorPlural) : 
            '整'
    } else {
        // 英文转换
        const integerText = convertIntegerToEnglish(integerValue)
        const majorUnit = integerValue === 1 ? config.major : config.majorPlural
        
        result = integerText + ' ' + majorUnit
        integerPart.value = integerText + ' ' + majorUnit
        
        if (decimalValue > 0) {
            const decimalText = convertIntegerToEnglish(decimalValue)
            const minorUnit = decimalValue === 1 ? config.minor : config.minorPlural
            result += ' and ' + decimalText + ' ' + minorUnit
            decimalPart.value = decimalText + ' ' + minorUnit
        } else {
            decimalPart.value = null
        }
    }
    
    if (isNegative) {
        result = (selectedCurrency.value === 'CNY' ? '负' : 'negative ') + result
    }
    
    // 首字母大写
    convertedText.value = result.charAt(0).toUpperCase() + result.slice(1)
}

// 加载示例
function loadExample(example) {
    inputNumber.value = example
    validateInput()
}

// 复制到剪贴板
async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(convertedText.value)
        // 这里可以添加成功提示
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}

// 监听输入变化
watch(inputNumber, validateInput)
watch(selectedCurrency, convertNumber)
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-sm {
    @apply px-3 py-1 text-sm;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }
    
    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>