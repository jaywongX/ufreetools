<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：输入和配置区域 -->
            <div class="space-y-6">
                <!-- 分数输入区域 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold mb-4">{{ $t('tools.comparing-fractions-calculator.inputTitle') }}</h2>
                    
                    <!-- 输入方式选择 -->
                    <div class="mb-4">
                        <div class="flex space-x-4 mb-4">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="inputMode" value="fraction" class="form-radio">
                                <span>{{ $t('tools.comparing-fractions-calculator.fractionInput') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="inputMode" value="mixed" class="form-radio">
                                <span>{{ $t('tools.comparing-fractions-calculator.mixedNumberInput') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="inputMode" value="decimal" class="form-radio">
                                <span>{{ $t('tools.comparing-fractions-calculator.decimalInput') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- 分数输入框 -->
                    <div class="space-y-3">
                        <div v-for="(fraction, index) in fractions" :key="index" 
                            class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                            <input 
                                v-model="fraction.value"
                                :placeholder="getPlaceholder()"
                                class="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                @input="parseFraction(index)"
                            />
                            <button @click="removeFraction(index)" 
                                class="text-red-500 hover:text-red-700 p-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- 添加分数按钮 -->
                    <div class="flex flex-wrap gap-2 mt-4">
                        <button @click="addFraction" class="btn btn-secondary flex-1 min-w-[120px]">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            {{ $t('tools.comparing-fractions-calculator.addFraction') }}
                        </button>
                        <button @click="loadSampleData" class="btn btn-secondary flex-1 min-w-[120px]">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            {{ $t('tools.comparing-fractions-calculator.loadSample') }}
                        </button>
                    </div>
                </div>

                <!-- 比较方法选择 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 class="text-lg font-bold mb-4">{{ $t('tools.comparing-fractions-calculator.comparisonMethod') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center space-x-2">
                            <input type="radio" v-model="comparisonMethod" value="commonDenominator" class="form-radio">
                            <span>{{ $t('tools.comparing-fractions-calculator.methods.commonDenominator') }}</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="radio" v-model="comparisonMethod" value="decimal" class="form-radio">
                            <span>{{ $t('tools.comparing-fractions-calculator.methods.decimal') }}</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="radio" v-model="comparisonMethod" value="crossMultiply" class="form-radio">
                            <span>{{ $t('tools.comparing-fractions-calculator.methods.crossMultiply') }}</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="radio" v-model="comparisonMethod" value="percentage" class="form-radio">
                            <span>{{ $t('tools.comparing-fractions-calculator.methods.percentage') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 可视化选项 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 class="text-lg font-bold mb-4">{{ $t('tools.comparing-fractions-calculator.visualization') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="showFractionBars" class="form-checkbox">
                            <span>{{ $t('tools.comparing-fractions-calculator.fractionBars') }}</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="showPieChart" class="form-checkbox">
                            <span>{{ $t('tools.comparing-fractions-calculator.pieChart') }}</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="showNumberLine" class="form-checkbox">
                            <span>{{ $t('tools.comparing-fractions-calculator.numberLine') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div class="flex space-x-3">
                        <button @click="compareFractions" 
                            :disabled="fractions.length < 2"
                            class="btn btn-primary flex-1">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            {{ $t('tools.comparing-fractions-calculator.compareBtn') }}
                        </button>
                        <button @click="clearAll" class="btn btn-secondary">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {{ $t('tools.comparing-fractions-calculator.clearBtn') }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- 右侧：结果展示区域 -->
            <div class="space-y-6">
                <!-- 比较结果 -->
                <div v-if="comparisonResult" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 class="text-lg font-bold mb-4">{{ $t('tools.comparing-fractions-calculator.resultTitle') }}</h3>
                    
                    <!-- 比较结果文本 -->
                    <div class="mb-6">
                        <div v-for="(result, index) in comparisonResult.comparisons" :key="index" 
                            class="p-3 bg-gray-50 dark:bg-gray-700 rounded mb-2">
                            <div class="flex items-center justify-between">
                                <span class="font-medium">{{ result.fraction1.display }} {{ result.relation }} {{ result.fraction2.display }}</span>
                                <span class="text-sm text-gray-600">{{ result.method }}</span>
                            </div>
                            <div v-if="result.steps" class="mt-2 text-sm text-gray-600">
                                <div v-for="(step, stepIndex) in result.steps" :key="stepIndex">
                                    {{ step }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 排序结果 -->
                    <div v-if="comparisonResult.sortedFractions" class="mb-6">
                        <h4 class="font-bold mb-3">排序结果</h4>
                        <div class="space-y-2">
                            <div v-for="(fraction, index) in comparisonResult.sortedFractions" :key="index"
                                class="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                                <span>{{ index + 1 }}. {{ fraction.display }}</span>
                                <span class="text-sm text-gray-600">{{ fraction.decimal }} ({{ fraction.percentage }}%)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 可视化图表 -->
                <div v-if="showVisualization && comparisonResult" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 class="text-lg font-bold mb-4">{{ $t('tools.comparing-fractions-calculator.visualization') }}</h3>
                    
                    <!-- 分数条 -->
                    <div v-if="showFractionBars" class="mb-6">
                        <h4 class="font-bold mb-3">{{ $t('tools.comparing-fractions-calculator.fractionBars') }}</h4>
                        <div class="space-y-3">
                            <div v-for="(fraction, index) in fractions" :key="index" class="flex items-center space-x-3">
                                <span class="w-20 text-sm">{{ fraction.display }}</span>
                                <div class="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-6 relative">
                                    <div class="bg-blue-500 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                        :style="{ width: (fraction.decimal * 100) + '%' }">
                                        {{ fraction.decimal }}
                                    </div>
                                </div>
                                <span class="w-16 text-sm text-gray-600">{{ (fraction.decimal * 100).toFixed(1) }}%</span>
                            </div>
                        </div>
                    </div>

                    <!-- 饼图 -->
                    <div v-if="showPieChart" class="mb-6">
                        <h4 class="font-bold mb-3">{{ $t('tools.comparing-fractions-calculator.pieChart') }}</h4>
                        <div class="flex flex-wrap justify-center">
                            <div class="relative w-48 h-48">
                                <svg class="w-full h-full" viewBox="0 0 100 100">
                                    <!-- 分数扇形 -->
                                    <template v-for="(fraction, index) in validFractions" :key="index">
                                        <path 
                                            v-if="fraction.decimal > 0"
                                            :d="describeArc(50, 50, 40, calculateStartAngle(validFractions, index), calculateEndAngle(validFractions, index))"
                                            :fill="getColor(index)"
                                            class="opacity-90 stroke-white stroke-0.5"
                                        />
                                    </template>
                                    
                                    <!-- 中心圆 -->
                                    <circle cx="50" cy="50" r="10" fill="white" />
                                    
                                    <!-- 中心文字 -->
                                    <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" font-size="4" font-weight="bold">
                                        {{ $t('tools.comparing-fractions-calculator.pieChart') }}
                                    </text>
                                </svg>
                            </div>
                            
                            <!-- 图例 -->
                            <div class="ml-0 md:ml-4 mt-4 md:mt-0">
                                <div v-for="(fraction, index) in validFractions" :key="index" class="flex items-center mb-2">
                                    <div class="w-4 h-4 rounded mr-2" :style="{ backgroundColor: getColor(index) }"></div>
                                    <span class="text-sm">{{ fraction.display }} ({{ (fraction.decimal * 100).toFixed(1) }}%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 数轴 -->
                    <div v-if="showNumberLine" class="mb-6">
                        <h4 class="font-bold mb-3">{{ $t('tools.comparing-fractions-calculator.numberLine') }}</h4>
                        <div class="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <!-- 数轴线 -->
                            <div class="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-400"></div>
                            
                            <!-- 刻度标记 -->
                            <div class="absolute top-1/2 left-4 transform -translate-y-1/2 -translate-x-1/2">
                                <div class="w-0.5 h-3 bg-gray-400 mx-auto"></div>
                                <div class="text-xs text-center mt-1">0</div>
                            </div>
                            <div class="absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-1/2">
                                <div class="w-0.5 h-3 bg-gray-400 mx-auto"></div>
                                <div class="text-xs text-center mt-1">1</div>
                            </div>
                            
                            <!-- 分数点 -->
                            <div v-for="(fraction, index) in validFractions" :key="index"
                                class="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                :style="{ left: (4 + (92 * fraction.decimal)) + '%' }">
                                <div class="w-4 h-4 rounded-full border-2 border-white shadow"
                                    :style="{ backgroundColor: getColor(index) }"></div>
                                <div class="text-xs mt-1 text-center font-medium whitespace-nowrap">{{ fraction.display }}</div>
                            </div>
                        </div>
                        
                        <!-- 数轴说明 -->
                        <div class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            {{ $t('tools.comparing-fractions-calculator.numberLineDescription') }}
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-if="!comparisonResult" class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">请输入至少两个分数进行比较</p>
                </div>
            </div>
        </div>
        
        <ComparingFractionsCalculatorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ComparingFractionsCalculatorArticle from './ComparingFractionsCalculatorArticle.vue'

const { t } = useI18n()

// 响应式数据
const inputMode = ref('fraction')
const fractions = ref([
    { value: '', parsed: null, display: '', decimal: 0, percentage: 0 },
    { value: '', parsed: null, display: '', decimal: 0, percentage: 0 }
])
const comparisonMethod = ref('commonDenominator')
const showFractionBars = ref(true)
const showPieChart = ref(false)
const showNumberLine = ref(false)
const comparisonResult = ref(null)

// 计算属性
const showVisualization = computed(() => showFractionBars.value || showPieChart.value || showNumberLine.value)
const validFractions = computed(() => fractions.value.filter(f => f.parsed))

// 获取输入提示
function getPlaceholder() {
    switch (inputMode.value) {
        case 'fraction': return t('tools.comparing-fractions-calculator.inputPlaceholder')
        case 'mixed': return t('tools.comparing-fractions-calculator.mixedNumberPlaceholder')
        case 'decimal': return t('tools.comparing-fractions-calculator.decimalPlaceholder')
        default: return '输入分数'
    }
}

// 添加分数
function addFraction() {
    fractions.value.push({ value: '', parsed: null, display: '', decimal: 0, percentage: 0 })
}

// 加载示例数据
function loadSampleData() {
    // 设置示例分数数据
    fractions.value = [
        { value: '1/2', parsed: { numerator: 1, denominator: 2 }, display: '1/2', decimal: 0.5, percentage: 50 },
        { value: '2/3', parsed: { numerator: 2, denominator: 3 }, display: '2/3', decimal: 0.6667, percentage: 66.67 },
        { value: '3/4', parsed: { numerator: 3, denominator: 4 }, display: '3/4', decimal: 0.75, percentage: 75 }
    ]
    
    // 自动选中可视化选项
    showPieChart.value = true
    showNumberLine.value = true
    
    // 触发比较
    compareFractions()
}

// 移除分数
function removeFraction(index) {
    if (fractions.value.length > 1) {
        fractions.value.splice(index, 1)
    }
}

// 解析分数
function parseFraction(index) {
    const fraction = fractions.value[index]
    const value = fraction.value.trim()
    
    if (!value) {
        fraction.parsed = null
        fraction.display = ''
        fraction.decimal = 0
        fraction.percentage = 0
        return
    }

    try {
        let parsed
        switch (inputMode.value) {
            case 'fraction':
                parsed = parseFractionString(value)
                break
            case 'mixed':
                parsed = parseMixedNumber(value)
                break
            case 'decimal':
                parsed = parseDecimal(value)
                break
        }

        if (parsed) {
            fraction.parsed = parsed
            fraction.display = formatFraction(parsed)
            fraction.decimal = parsed.numerator / parsed.denominator
            fraction.percentage = fraction.decimal * 100
        } else {
            throw new Error('Invalid format')
        }
    } catch (error) {
        fraction.parsed = null
        fraction.display = 'Invalid'
        fraction.decimal = 0
        fraction.percentage = 0
    }
}

// 解析分数字符串 (如 "3/4")
function parseFractionString(str) {
    const match = str.match(/^(-?\d+)\/(\d+)$/)
    if (!match) return null
    
    const numerator = parseInt(match[1])
    const denominator = parseInt(match[2])
    
    if (denominator === 0) return null
    
    return { numerator, denominator }
}

// 解析混合数 (如 "2 1/3")
function parseMixedNumber(str) {
    const match = str.match(/^(-?\d+)\s+(\d+)\/(\d+)$/)
    if (!match) return null
    
    const whole = parseInt(match[1])
    const numerator = parseInt(match[2])
    const denominator = parseInt(match[3])
    
    if (denominator === 0) return null
    
    const totalNumerator = whole * denominator + numerator
    return { numerator: totalNumerator, denominator }
}

// 解析小数 (如 "0.75")
function parseDecimal(str) {
    const decimal = parseFloat(str)
    if (isNaN(decimal)) return null
    
    return decimalToFraction(decimal)
}

// 小数转分数
function decimalToFraction(decimal) {
    const tolerance = 1e-6
    let h1 = 1, h2 = 0, k1 = 0, k2 = 1
    let b = decimal
    
    do {
        let a = Math.floor(b)
        let aux = h1
        h1 = a * h1 + h2
        h2 = aux
        aux = k1
        k1 = a * k1 + k2
        k2 = aux
        b = 1 / (b - a)
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance)
    
    return { numerator: h1, denominator: k1 }
}

// 格式化分数显示
function formatFraction(fraction) {
    if (!fraction) return ''
    
    const { numerator, denominator } = fraction
    const gcd = findGCD(Math.abs(numerator), Math.abs(denominator))
    const simplifiedNum = numerator / gcd
    const simplifiedDen = denominator / gcd
    
    if (simplifiedDen === 1) {
        return simplifiedNum.toString()
    }
    
    return `${simplifiedNum}/${simplifiedDen}`
}

// 求最大公约数
function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b)
}

// 比较分数
function compareFractions() {
    const validFractions = fractions.value.filter(f => f.parsed)
    
    if (validFractions.length < 2) {
        alert('请输入至少两个有效分数')
        return
    }

    const comparisons = []
    const sortedFractions = [...validFractions].sort((a, b) => a.decimal - b.decimal)

    // 两两比较
    for (let i = 0; i < validFractions.length; i++) {
        for (let j = i + 1; j < validFractions.length; j++) {
            const fraction1 = validFractions[i]
            const fraction2 = validFractions[j]
            
            const comparison = performComparison(fraction1, fraction2)
            comparisons.push(comparison)
        }
    }

    comparisonResult.value = {
        comparisons,
        sortedFractions
    }
}

// 执行比较
function performComparison(fraction1, fraction2) {
    const f1 = fraction1.parsed
    const f2 = fraction2.parsed
    
    let relation, method, steps = []
    
    switch (comparisonMethod.value) {
        case 'commonDenominator':
            const lcm = findLCM(f1.denominator, f2.denominator)
            const newNum1 = f1.numerator * (lcm / f1.denominator)
            const newNum2 = f2.numerator * (lcm / f2.denominator)
            
            steps.push(`通分：${fraction1.display} = ${newNum1}/${lcm}`)
            steps.push(`通分：${fraction2.display} = ${newNum2}/${lcm}`)
            
            if (newNum1 > newNum2) relation = '>'
            else if (newNum1 < newNum2) relation = '<'
            else relation = '='
            
            method = '通分比较'
            break
            
        case 'decimal':
            const dec1 = fraction1.decimal
            const dec2 = fraction2.decimal
            
            steps.push(`${fraction1.display} = ${dec1.toFixed(6)}`)
            steps.push(`${fraction2.display} = ${dec2.toFixed(6)}`)
            
            if (dec1 > dec2) relation = '>'
            else if (dec1 < dec2) relation = '<'
            else relation = '='
            
            method = '小数比较'
            break
            
        case 'crossMultiply':
            const product1 = f1.numerator * f2.denominator
            const product2 = f2.numerator * f1.denominator
            
            steps.push(`交叉相乘：${f1.numerator} × ${f2.denominator} = ${product1}`)
            steps.push(`交叉相乘：${f2.numerator} × ${f1.denominator} = ${product2}`)
            
            if (product1 > product2) relation = '>'
            else if (product1 < product2) relation = '<'
            else relation = '='
            
            method = '交叉相乘'
            break
            
        case 'percentage':
            const pct1 = fraction1.percentage
            const pct2 = fraction2.percentage
            
            steps.push(`${fraction1.display} = ${pct1.toFixed(2)}%`)
            steps.push(`${fraction2.display} = ${pct2.toFixed(2)}%`)
            
            if (pct1 > pct2) relation = '>'
            else if (pct1 < pct2) relation = '<'
            else relation = '='
            
            method = '百分比比较'
            break
    }
    
    return {
        fraction1: fraction1,
        fraction2: fraction2,
        relation,
        method,
        steps
    }
}

// 求最小公倍数
function findLCM(a, b) {
    return (a * b) / findGCD(a, b)
}

// 获取颜色 (返回十六进制颜色值)
function getColor(index) {
    const colors = [
        '#3b82f6', // blue-500
        '#ef4444', // red-500
        '#10b981', // green-500
        '#f59e0b', // yellow-500
        '#8b5cf6', // purple-500
        '#ec4899', // pink-500
        '#6366f1', // indigo-500
        '#f97316'  // orange-500
    ]
    return colors[index % colors.length]
}

// 计算饼图起始角度
function calculateStartAngle(fractions, index) {
    let startAngle = 0
    for (let i = 0; i < index; i++) {
        startAngle += fractions[i].decimal * 360
    }
    return startAngle
}

// 计算饼图结束角度
function calculateEndAngle(fractions, index) {
    const startAngle = calculateStartAngle(fractions, index)
    const endAngle = startAngle + fractions[index].decimal * 360
    return endAngle
}

// 创建弧形路径
function describeArc(x, y, radius, startAngle, endAngle) {
    if (startAngle >= endAngle) return ""
    
    const start = polarToCartesian(x, y, radius, endAngle)
    const end = polarToCartesian(x, y, radius, startAngle)
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    
    const d = [
        "M", x, y,
        "L", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        "L", x, y
    ].join(" ")
    
    return d
}

// 极坐标转直角坐标
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
    
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    }
}

// 清除所有
function clearAll() {
    fractions.value = [
        { value: '', parsed: null, display: '', decimal: 0, percentage: 0 },
        { value: '', parsed: null, display: '', decimal: 0, percentage: 0 }
    ]
    comparisonResult.value = null
}
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
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
}
</style>
