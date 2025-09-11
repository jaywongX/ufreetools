<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.baseline-calculator.inputTitle') }}</h2>

                <!-- 输入模式切换 -->
                <div class="flex mb-4 border-b">
                    <button class="px-4 py-2 font-medium"
                        :class="inputMode === 'single' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'"
                        @click="inputMode = 'single'">
                        {{ $t('tools.baseline-calculator.singleInput') }}
                    </button>
                    <button class="px-4 py-2 font-medium"
                        :class="inputMode === 'batch' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'"
                        @click="inputMode = 'batch'">
                        {{ $t('tools.baseline-calculator.batchInput') }}
                    </button>
                </div>

                <!-- 单点输入 -->
                <div v-if="inputMode === 'single'" class="space-y-4 mb-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.baseline-calculator.startPoint') }}
                            </label>
                            <div class="space-y-2">
                                <input type="number" step="any" v-model="startX"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                    :placeholder="$t('tools.baseline-calculator.xCoordinate')" />
                                <input type="number" step="any" v-model="startY"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                    :placeholder="$t('tools.baseline-calculator.yCoordinate')" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.baseline-calculator.endPoint') }}
                            </label>
                            <div class="space-y-2">
                                <input type="number" step="any" v-model="endX"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                    :placeholder="$t('tools.baseline-calculator.xCoordinate')" />
                                <input type="number" step="any" v-model="endY"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                    :placeholder="$t('tools.baseline-calculator.yCoordinate')" />
                            </div>
                        </div>
                    </div>

                    <!-- 方差输入 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.baseline-calculator.varianceInput') }}
                        </label>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-xs text-gray-500">{{ $t('tools.baseline-calculator.startPoint')
                                    }}</label>
                                <div class="space-y-2">
                                    <input type="number" step="any" v-model="startVarianceX"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        :placeholder="$t('tools.baseline-calculator.varianceX')" />
                                    <input type="number" step="any" v-model="startVarianceY"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        :placeholder="$t('tools.baseline-calculator.varianceY')" />
                                </div>
                            </div>

                            <div>
                                <label class="text-xs text-gray-500">{{ $t('tools.baseline-calculator.endPoint')
                                    }}</label>
                                <div class="space-y-2">
                                    <input type="number" step="any" v-model="endVarianceX"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        :placeholder="$t('tools.baseline-calculator.varianceX')" />
                                    <input type="number" step="any" v-model="endVarianceY"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        :placeholder="$t('tools.baseline-calculator.varianceY')" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 批量输入 -->
                <div v-if="inputMode === 'batch'" class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {{ $t('tools.baseline-calculator.batchData') }}
                    </label>
                    <textarea v-model="batchInput" rows="8"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
                        :placeholder="batchInputPlaceholder"></textarea>
                </div>

                <!-- 操作按钮 -->
                <div class="flex flex-wrap gap-2">
                    <button class="btn btn-primary flex-1" @click="calculate" :disabled="!canCalculate">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.baseline-calculator.calculateBtn') }}
                    </button>

                    <button class="btn btn-secondary" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.baseline-calculator.loadSample') }}
                    </button>

                    <button class="btn btn-warning" @click="clearAll">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ $t('tools.baseline-calculator.clearAll') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.baseline-calculator.outputTitle') }}</h2>

                    <!-- 导出按钮 -->
                    <div class="flex gap-2" v-if="calculationResults.length > 0">
                        <button class="btn btn-primary btn-sm" @click="exportToCSV">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {{ $t('tools.baseline-calculator.exportCSV') }}
                        </button>
                        <button class="btn btn-primary btn-sm" @click="exportToTXT">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {{ $t('tools.baseline-calculator.exportTXT') }}
                        </button>
                    </div>
                </div>

                <!-- 结果显示 -->
                <div v-if="calculationResults.length > 0"
                    class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(result, idx) in calculationResults" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-bold text-lg">{{ $t('tools.baseline-calculator.calculation') }} #{{ idx + 1
                                }}</h3>
                            <button @click="copyResult(result)"
                                class="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                                {{ $t('tools.baseline-calculator.copy') }}
                            </button>
                        </div>

                        <!-- 基本信息 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                                <div class="font-medium text-blue-700 dark:text-blue-300">
                                    {{ $t('tools.baseline-calculator.baselineLength') }}
                                </div>
                                <div class="text-lg font-mono" :class="getLengthClass(result.length)">
                                    {{ result.length.toFixed(3) }}
                                </div>
                            </div>

                            <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                                <div class="font-medium text-green-700 dark:text-green-300">
                                    {{ $t('tools.baseline-calculator.azimuth') }}
                                </div>
                                <div class="text-lg font-mono">
                                    {{ result.azimuth.toFixed(6) }}°
                                </div>
                            </div>
                        </div>

                        <!-- 误差信息 -->
                        <div v-if="result.hasVariance" class="mb-4">
                            <h4 class="font-medium mb-2">{{ $t('tools.baseline-calculator.errorPropagation') }}</h4>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                                <div class="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                                    <div class="text-purple-700 dark:text-purple-300">{{
                                        $t('tools.baseline-calculator.lengthError') }}</div>
                                    <div class="font-mono">±{{ result.lengthError.toFixed(6) }}</div>
                                </div>
                                <div class="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                                    <div class="text-purple-700 dark:text-purple-300">{{
                                        $t('tools.baseline-calculator.azimuthError') }}</div>
                                    <div class="font-mono">±{{ result.azimuthError.toFixed(6) }}°</div>
                                </div>
                                <div class="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                                    <div class="text-purple-700 dark:text-purple-300">{{
                                        $t('tools.baseline-calculator.pointError') }}</div>
                                    <div class="font-mono">±{{ result.pointError.toFixed(6) }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- 误差椭圆参数 -->
                        <div v-if="result.hasVariance" class="mb-4">
                            <h4 class="font-medium mb-2">{{ $t('tools.baseline-calculator.errorEllipse') }}</h4>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                                <div class="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                                    <div class="text-yellow-700 dark:text-yellow-300">{{
                                        $t('tools.baseline-calculator.semiMajorAxis') }}</div>
                                    <div class="font-mono">{{ result.ellipseMajorAxis.toFixed(6) }}</div>
                                </div>
                                <div class="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                                    <div class="text-yellow-700 dark:text-yellow-300">{{
                                        $t('tools.baseline-calculator.semiMinorAxis') }}</div>
                                    <div class="font-mono">{{ result.ellipseMinorAxis.toFixed(6) }}</div>
                                </div>
                                <div class="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                                    <div class="text-yellow-700 dark:text-yellow-300">{{
                                        $t('tools.baseline-calculator.orientation') }}</div>
                                    <div class="font-mono">{{ result.ellipseOrientation.toFixed(2) }}°</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 地图可视化 -->
                <div v-if="calculationResults.length > 0" class="mt-6">
                    <h3 class="font-bold mb-2">{{ $t('tools.baseline-calculator.mapVisualization') }}</h3>
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <div ref="mapContainer"
                            class="relative w-full h-64 bg-white dark:bg-gray-800 border rounded overflow-hidden">
                            <!-- 网格线 -->
                            <div v-for="i in 9" :key="`v-${i}`"
                                class="absolute top-0 bottom-0 border-l border-gray-300 dark:border-gray-600"
                                :style="{ left: `${(i - 1) * 12.5}%` }"></div>
                            <div v-for="i in 9" :key="`h-${i}`"
                                class="absolute left-0 right-0 border-t border-gray-300 dark:border-gray-600"
                                :style="{ top: `${(i - 1) * 12.5}%` }"></div>

                            <!-- 基线 -->
                            <svg class="absolute inset-0 w-full h-full">
                                <line v-for="(result, idx) in calculationResults" :key="`line-${idx}`"
                                    :x1="getPointX(result.startX)" :y1="getPointY(result.startY)"
                                    :x2="getPointX(result.endX)" :y2="getPointY(result.endY)" stroke="blue"
                                    stroke-width="2" class="animate-pulse" />

                                <!-- 误差椭圆 -->
                                <ellipse v-for="(result, idx) in calculationResults.filter(r => r.hasVariance)"
                                    :key="`ellipse-${idx}`" :cx="getPointX(result.endX)" :cy="getPointY(result.endY)"
                                    :rx="result.ellipseMinorAxis * 10" :ry="result.ellipseMajorAxis * 10"
                                    fill="rgba(255, 0, 0, 0.2)" stroke="red" stroke-width="1" />
                            </svg>

                            <!-- 起点 -->
                            <div v-for="(result, idx) in calculationResults" :key="`start-${idx}`"
                                class="absolute w-3 h-3 rounded-full bg-green-500 transform -translate-x-1/2 -translate-y-1/2"
                                :style="{ left: getPointX(result.startX) + 'px', top: getPointY(result.startY) + 'px' }">
                            </div>

                            <!-- 终点 -->
                            <div v-for="(result, idx) in calculationResults" :key="`end-${idx}`"
                                class="absolute w-3 h-3 rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-1/2"
                                :style="{ left: getPointX(result.endX) + 'px', top: getPointY(result.endY) + 'px' }">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.baseline-calculator.noOutput') }}</p>
                </div>
            </div>
        </div>
        <BaselineCalculatorArticle />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaselineCalculatorArticle from './BaselineCalculatorArticle.vue'

const { t } = useI18n()

// 输入数据
const inputMode = ref('single')
const startX = ref('')
const startY = ref('')
const endX = ref('')
const endY = ref('')
const startVarianceX = ref('')
const startVarianceY = ref('')
const endVarianceX = ref('')
const endVarianceY = ref('')
const batchInput = ref('')
const isExporting = ref(false)

// 输出数据
const calculationResults = ref([])

// 计算按钮是否可用
const canCalculate = computed(() => {
    if (inputMode.value === 'single') {
        return startX.value && startY.value && endX.value && endY.value
    } else {
        return batchInput.value
    }
})

// 批量输入提示文本
const batchInputPlaceholder = computed(() => {
    return t('tools.baseline-calculator.batchInputPlaceholder')
})

// 示例数据
const sampleData = `
# ${t('tools.baseline-calculator.sampleDataComment')}
# startX,startY,endX,endY[,startVarX,startVarY,endVarX,endVarY]
0,0,3,4
1,1,5,6,0.01,0.01,0.02,0.02
2,2,8,10
`

// 加载示例数据
function loadSampleData() {
    clearAll()
    batchInput.value = sampleData.trim()
    inputMode.value = 'batch'
}

// 清除所有数据
function clearAll() {
    startX.value = ''
    startY.value = ''
    endX.value = ''
    endY.value = ''
    startVarianceX.value = ''
    startVarianceY.value = ''
    endVarianceX.value = ''
    endVarianceY.value = ''
    batchInput.value = ''
    calculationResults.value = []
}

// 计算基线长度
function calculateBaselineLength(startX, startY, endX, endY) {
    const dx = endX - startX
    const dy = endY - startY
    return Math.sqrt(dx * dx + dy * dy)
}

// 计算方位角
function calculateAzimuth(startX, startY, endX, endY) {
    const dx = endX - startX
    const dy = endY - startY
    let azimuth = Math.atan2(dx, dy) * 180 / Math.PI
    if (azimuth < 0) {
        azimuth += 360
    }
    return azimuth
}

// 计算误差传播
function calculateErrorPropagation(startX, startY, endX, endY, startVarX, startVarY, endVarX, endVarY) {
    const dx = endX - startX
    const dy = endY - startY
    const length = Math.sqrt(dx * dx + dy * dy)

    // 长度误差
    const lengthError = Math.sqrt(
        (dx * dx * (endVarX + startVarX) + dy * dy * (endVarY + startVarY)) / (length * length)
    )

    // 方位角误差
    const azimuthError = Math.sqrt(
        (dy * dy * endVarX + dx * dx * endVarY + dy * dy * startVarX + dx * dx * startVarY) / (length * length * length * length)
    ) * 180 / Math.PI

    // 点位误差
    const pointError = Math.sqrt(
        (endVarX + startVarX) + (endVarY + startVarY)
    )

    return { lengthError, azimuthError, pointError }
}

// 计算误差椭圆参数
function calculateErrorEllipse(startVarX, startVarY, endVarX, endVarY) {
    // 相对误差椭圆参数
    const varX = endVarX + startVarX
    const varY = endVarY + startVarY
    const covXY = 0 // 简化处理，假设协方差为0

    // 计算特征值
    const trace = varX + varY
    const det = varX * varY - covXY * covXY
    const sqrtTerm = Math.sqrt((varX - varY) * (varX - varY) + 4 * covXY * covXY)

    const majorAxis = Math.sqrt((trace + sqrtTerm) / 2)
    const minorAxis = Math.sqrt((trace - sqrtTerm) / 2)
    const orientation = Math.atan2(2 * covXY, varX - varY) / 2 * 180 / Math.PI

    return { majorAxis, minorAxis, orientation }
}

// 获取长度颜色类
function getLengthClass(length) {
    if (length < 5) return 'text-green-600'
    if (length < 10) return 'text-yellow-600'
    return 'text-red-600'
}

// 获取点在地图上的X坐标
function getPointX(x) {
    // 简化的坐标映射
    return (x % 10) * 10 + 50
}

// 获取点在地图上的Y坐标
function getPointY(y) {
    // 简化的坐标映射
    return (y % 10) * 10 + 50
}

// 计算
function calculate() {
    calculationResults.value = []

    if (inputMode.value === 'single') {
        // 单点计算
        if (startX.value && startY.value && endX.value && endY.value) {
            const startVarX = parseFloat(startVarianceX.value) || 0
            const startVarY = parseFloat(startVarianceY.value) || 0
            const endVarX = parseFloat(endVarianceX.value) || 0
            const endVarY = parseFloat(endVarianceY.value) || 0

            const hasVariance = !!(startVarX || startVarY || endVarX || endVarY)

            const result = {
                startX: parseFloat(startX.value),
                startY: parseFloat(startY.value),
                endX: parseFloat(endX.value),
                endY: parseFloat(endY.value),
                length: calculateBaselineLength(
                    parseFloat(startX.value),
                    parseFloat(startY.value),
                    parseFloat(endX.value),
                    parseFloat(endY.value)
                ),
                azimuth: calculateAzimuth(
                    parseFloat(startX.value),
                    parseFloat(startY.value),
                    parseFloat(endX.value),
                    parseFloat(endY.value)
                ),
                hasVariance
            }

            if (hasVariance) {
                const error = calculateErrorPropagation(
                    parseFloat(startX.value),
                    parseFloat(startY.value),
                    parseFloat(endX.value),
                    parseFloat(endY.value),
                    startVarX, startVarY, endVarX, endVarY
                )

                const ellipse = calculateErrorEllipse(startVarX, startVarY, endVarX, endVarY)

                result.lengthError = error.lengthError
                result.azimuthError = error.azimuthError
                result.pointError = error.pointError
                result.ellipseMajorAxis = ellipse.majorAxis
                result.ellipseMinorAxis = ellipse.minorAxis
                result.ellipseOrientation = ellipse.orientation
            }

            calculationResults.value.push(result)
        }
    } else {
        // 批量计算
        const lines = batchInput.value.split('\n').filter(line => line.trim() && !line.startsWith('#'))
        lines.forEach(line => {
            const parts = line.split(',').map(part => parseFloat(part.trim()))
            if (parts.length >= 4) {
                const startX = parts[0]
                const startY = parts[1]
                const endX = parts[2]
                const endY = parts[3]

                const hasVariance = parts.length >= 8
                const startVarX = hasVariance ? parts[4] : 0
                const startVarY = hasVariance ? parts[5] : 0
                const endVarX = hasVariance ? parts[6] : 0
                const endVarY = hasVariance ? parts[7] : 0

                const result = {
                    startX,
                    startY,
                    endX,
                    endY,
                    length: calculateBaselineLength(startX, startY, endX, endY),
                    azimuth: calculateAzimuth(startX, startY, endX, endY),
                    hasVariance
                }

                if (hasVariance) {
                    const error = calculateErrorPropagation(startX, startY, endX, endY, startVarX, startVarY, endVarX, endVarY)
                    const ellipse = calculateErrorEllipse(startVarX, startVarY, endVarX, endVarY)

                    result.lengthError = error.lengthError
                    result.azimuthError = error.azimuthError
                    result.pointError = error.pointError
                    result.ellipseMajorAxis = ellipse.majorAxis
                    result.ellipseMinorAxis = ellipse.minorAxis
                    result.ellipseOrientation = ellipse.orientation
                }

                calculationResults.value.push(result)
            }
        })
    }
}

// 复制结果
// function copyResult(result) {
//     const text = `${t('tools.baseline-calculator.baselineLength')}: ${result.length.toFixed(3)}\n` +
//                  `${t('tools.baseline-calculator.azimuth')}: ${result.azimuth.toFixed(6)}°\n` +
//                  (result.hasVariance ? 
//                     `${t('tools.baseline-calculator.lengthError')}: ±${result.lengthError.toFixed(6)}\n` +
//                     `${t('tools.baseline-calculator.azimuthError')}: ±${result.azimuthError.toFixed(6)}°\n` +
//                     `${t('tools.baseline-calculator.pointError')}: ±${result.pointError.toFixed(6)}\n` +
//                     `${t('tools.baseline-calculator.semiMajorAxis')}: ${result.ellipseMajorAxis.toFixed(6)}\n` +
//                     `${t('tools.baseline-calculator.semiMinorAxis')}: ${result.ellipseMinorAxis.toFixed(6)}\n` +
//                     `${t('tools.baseline-calculator.orientation')}: ${result.ellipseOrientation.toFixed(2)}°`
//                     : '')

//     navigator.clipboard.writeText(text).then(() => {
//         alert(t('tools.baseline-calculator.copySuccess'))
//     })
// }



// 生成结果文本
function generateResultText(result, delimiter = '\n') {
    return `${t('tools.baseline-calculator.baselineLength')}: ${result.length.toFixed(3)}${delimiter}` +
        `${t('tools.baseline-calculator.azimuth')}: ${result.azimuth.toFixed(6)}°${delimiter}` +
        (result.hasVariance ?
            `${t('tools.baseline-calculator.lengthError')}: ±${result.lengthError.toFixed(6)}${delimiter}` +
            `${t('tools.baseline-calculator.azimuthError')}: ±${result.azimuthError.toFixed(6)}°${delimiter}` +
            `${t('tools.baseline-calculator.pointError')}: ±${result.pointError.toFixed(6)}${delimiter}` +
            `${t('tools.baseline-calculator.semiMajorAxis')}: ${result.ellipseMajorAxis.toFixed(6)}${delimiter}` +
            `${t('tools.baseline-calculator.semiMinorAxis')}: ${result.ellipseMinorAxis.toFixed(6)}${delimiter}` +
            `${t('tools.baseline-calculator.orientation')}: ${result.ellipseOrientation.toFixed(2)}°`
            : '')
}

// 生成CSV格式数据
function generateCSVData() {
    // CSV表头
    let csvContent = "序号,起点X,起点Y,终点X,终点Y,基线长度,方位角"
    if (calculationResults.value.some(r => r.hasVariance)) {
        csvContent += ",长度中误差,方位角中误差,点位中误差,长半轴,短半轴,方向角"
    }
    csvContent += "\n"

    // 数据行
    calculationResults.value.forEach((result, idx) => {
        csvContent += `${idx + 1},${result.startX},${result.startY},${result.endX},${result.endY},${result.length.toFixed(3)},${result.azimuth.toFixed(6)}`
        if (result.hasVariance) {
            csvContent += `,${result.lengthError.toFixed(6)},${result.azimuthError.toFixed(6)},${result.pointError.toFixed(6)},${result.ellipseMajorAxis.toFixed(6)},${result.ellipseMinorAxis.toFixed(6)},${result.ellipseOrientation.toFixed(2)}`
        } else if (calculationResults.value.some(r => r.hasVariance)) {
            csvContent += ",,,,,,," // 填充空值
        }
        csvContent += "\n"
    })

    return csvContent
}

// 导出到CSV
function exportToCSV() {
    const csvContent = generateCSVData()
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)

    link.setAttribute('href', url)
    link.setAttribute('download', `baseline-calculation-${new Date().toISOString().slice(0, 10)}.csv`)
    link.style.visibility = 'hidden'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

// 导出到TXT
function exportToTXT() {
    let txtContent = `${t('tools.baseline-calculator.calculation')} - ${new Date().toLocaleString()}\n\n`

    calculationResults.value.forEach((result, idx) => {
        txtContent += `=== ${t('tools.baseline-calculator.calculation')} #${idx + 1} ===\n`
        txtContent += `${t('tools.baseline-calculator.startPoint')}: (${result.startX}, ${result.startY})\n`
        txtContent += `${t('tools.baseline-calculator.endPoint')}: (${result.endX}, ${result.endY})\n`
        txtContent += generateResultText(result) + '\n\n'
    })

    const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)

    link.setAttribute('href', url)
    link.setAttribute('download', `baseline-calculation-${new Date().toISOString().slice(0, 10)}.txt`)
    link.style.visibility = 'hidden'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}



// 复制结果
function copyResult(result) {
    const text = generateResultText(result)

    navigator.clipboard.writeText(text).then(() => {
        alert(t('tools.baseline-calculator.copySuccess'))
    })
}
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
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

.btn-warning {
    @apply bg-yellow-500 hover:bg-yellow-600 text-white;
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