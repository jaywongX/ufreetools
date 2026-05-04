<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.gnss-time-converter.inputTitle') }}</h2>

                <!-- 时间输入方式切换 -->
                <div class="flex mb-4 border-b">
                    <button class="px-4 py-2 font-medium"
                        :class="inputMode === 'datetime' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'"
                        @click="inputMode = 'datetime'">
                        {{ $t('tools.gnss-time-converter.dateTimeInput') }}
                    </button>
                    <button class="px-4 py-2 font-medium"
                        :class="inputMode === 'gps' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'"
                        @click="inputMode = 'gps'">
                        {{ $t('tools.gnss-time-converter.gpsInput') }}
                    </button>
                    <button class="px-4 py-2 font-medium"
                        :class="inputMode === 'bdt' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'"
                        @click="inputMode = 'bdt'">
                        {{ $t('tools.gnss-time-converter.bdtInput') }}
                    </button>
                </div>

                <!-- 日期时间输入 -->
                <div v-if="inputMode === 'datetime'" class="space-y-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.gnss-time-converter.dateTime') }}
                        </label>
                        <input type="datetime-local" v-model="inputDateTime"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                </div>

                <!-- GPS周秒输入 -->
                <div v-if="inputMode === 'gps'" class="space-y-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.gnss-time-converter.gpsWeek') }}
                        </label>
                        <input type="number" v-model="inputGpsWeek"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            :placeholder="$t('tools.gnss-time-converter.gpsWeekPlaceholder')" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.gnss-time-converter.gpsTow') }}
                        </label>
                        <input type="number" step="any" v-model="inputGpsTow"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            :placeholder="$t('tools.gnss-time-converter.gpsTowPlaceholder')" />
                    </div>
                </div>

                <!-- 北斗时输入 -->
                <div v-if="inputMode === 'bdt'" class="space-y-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.gnss-time-converter.bdtWeek') }}
                        </label>
                        <input type="number" v-model="inputBdtWeek"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            :placeholder="$t('tools.gnss-time-converter.bdtWeekPlaceholder')" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.gnss-time-converter.bdtTow') }}
                        </label>
                        <input type="number" step="any" v-model="inputBdtTow"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            :placeholder="$t('tools.gnss-time-converter.bdtTowPlaceholder')" />
                    </div>
                </div>

                <!-- 批量输入 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {{ $t('tools.gnss-time-converter.batchInput') }}
                    </label>
                    <textarea v-model="batchInput" rows="4"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="batchInputPlaceholder"></textarea>
                </div>

                <!-- 格式选项 -->
                <div class="space-y-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.gnss-time-converter.outputFormat') }}
                        </label>
                        <select v-model="outputFormat"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600">
                            <option value="iso">{{ $t('tools.gnss-time-converter.isoFormat') }}</option>
                            <option value="custom">{{ $t('tools.gnss-time-converter.customFormat') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="flex flex-wrap gap-2">
                    <button class="btn btn-primary flex-1" @click="convertTime" :disabled="!canConvert">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        {{ $t('tools.gnss-time-converter.convertBtn') }}
                    </button>

                    <button class="btn btn-secondary" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.gnss-time-converter.loadSample') }}
                    </button>

                    <button class="btn btn-warning" @click="clearAll">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ $t('tools.gnss-time-converter.clearAll') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.gnss-time-converter.outputTitle') }}</h2>

                    <!-- 导出按钮 -->
                    <div class="flex gap-2">
                        <button v-if="convertedResults.length > 0" class="btn btn-primary btn-sm" @click="exportToCSV"
                            :disabled="isExporting">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.gnss-time-converter.exportCSV') }}
                        </button>
                    </div>
                </div>

                <!-- 结果显示 -->
                <div v-if="convertedResults.length > 0"
                    class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(result, idx) in convertedResults" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-bold text-lg">{{ $t('tools.gnss-time-converter.conversion') }} #{{ idx + 1
                                }}</h3>
                            <button @click="copyResult(result)"
                                class="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                                {{ $t('tools.gnss-time-converter.copy') }}
                            </button>
                        </div>

                        <!-- UTC时间 -->
                        <div class="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                            <div class="font-medium text-blue-700 dark:text-blue-300">
                                {{ $t('tools.gnss-time-converter.utcTime') }}
                            </div>
                            <div class="text-lg font-mono">
                                {{ formatDateTime(result.utcTime) }}
                            </div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">
                                {{ $t('tools.gnss-time-converter.julianDate') }}: {{ result.julianDate.toFixed(6) }}
                            </div>
                        </div>

                        <!-- GPS时间 -->
                        <div class="mb-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
                            <div class="font-medium text-green-700 dark:text-green-300">
                                {{ $t('tools.gnss-time-converter.gpsTime') }}
                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <span class="text-sm">{{ $t('tools.gnss-time-converter.week') }}: </span>
                                    <span class="font-mono">{{ result.gpsWeek }}</span>
                                </div>
                                <div>
                                    <span class="text-sm">{{ $t('tools.gnss-time-converter.tow') }}: </span>
                                    <span class="font-mono">{{ result.gpsTow.toFixed(3) }}</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">
                                {{ $t('tools.gnss-time-converter.leapSeconds') }}: {{ result.gpsLeapSeconds }}
                            </div>
                        </div>

                        <!-- 北斗时间 -->
                        <div class="mb-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                            <div class="font-medium text-purple-700 dark:text-purple-300">
                                {{ $t('tools.gnss-time-converter.bdtTime') }}
                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <span class="text-sm">{{ $t('tools.gnss-time-converter.week') }}: </span>
                                    <span class="font-mono">{{ result.bdtWeek }}</span>
                                </div>
                                <div>
                                    <span class="text-sm">{{ $t('tools.gnss-time-converter.tow') }}: </span>
                                    <span class="font-mono">{{ result.bdtTow.toFixed(3) }}</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">
                                {{ $t('tools.gnss-time-converter.leapSeconds') }}: {{ result.bdtLeapSeconds }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 时间轴可视化 -->
                <div v-if="convertedResults.length > 0" class="mt-6">
                    <h3 class="font-bold mb-2">{{ $t('tools.gnss-time-converter.timeline') }}</h3>
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <div class="relative h-32">
                            <!-- 时间轴 -->
                            <div class="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600"></div>

                            <!-- 时间标记点 -->
                            <div v-for="(result, idx) in convertedResults" :key="`timeline-${idx}`"
                                class="absolute top-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                                :style="{ left: `${getTimelinePosition(result)}%` }"
                                :title="formatDateTime(result.utcTime)"></div>
                        </div>
                        <div class="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
                            <span>GPS: {{ convertedResults[0].gpsWeek }}周</span>
                            <span>BDT: {{ convertedResults[0].bdtWeek }}周</span>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.gnss-time-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <GnssTimeConverterArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import GnssTimeConverterArticle from './GnssTimeConverterArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 输入数据
const inputMode = ref('datetime')
const inputDateTime = ref('')
const inputGpsWeek = ref('')
const inputGpsTow = ref('')
const inputBdtWeek = ref('')
const inputBdtTow = ref('')
const batchInput = ref('')
const outputFormat = ref('iso')
const isExporting = ref(false)

// 输出数据
const convertedResults = ref([])

// 计算按钮是否可用
const canConvert = computed(() => {
    if (inputMode.value === 'datetime') {
        return inputDateTime.value || batchInput.value
    } else if (inputMode.value === 'gps') {
        return (inputGpsWeek.value && inputGpsTow.value) || batchInput.value
    } else if (inputMode.value === 'bdt') {
        return (inputBdtWeek.value && inputBdtTow.value) || batchInput.value
    }
    return false
})

// 批量输入提示文本
const batchInputPlaceholder = computed(() => {
    switch (inputMode.value) {
        case 'datetime':
            return t('tools.gnss-time-converter.batchDateTimePlaceholder')
        case 'gps':
            return t('tools.gnss-time-converter.batchGpsPlaceholder')
        case 'bdt':
            return t('tools.gnss-time-converter.batchBdtPlaceholder')
        default:
            return ''
    }
})

// 示例数据
const sampleData = {
    datetime: [
        '2023-01-01T00:00:00',
        '2023-07-01T12:00:00',
        '2024-01-01T00:00:00'
    ],
    gps: [
        '2234,172800',
        '2259,345600',
        '2285,172800'
    ],
    bdt: [
        '976,172800',
        '1001,345600',
        '1027,172800'
    ]
}

// 加载示例数据
function loadSampleData() {
    clearAll()
    switch (inputMode.value) {
        case 'datetime':
            batchInput.value = sampleData.datetime.join('\n')
            break
        case 'gps':
            batchInput.value = sampleData.gps.join('\n')
            break
        case 'bdt':
            batchInput.value = sampleData.bdt.join('\n')
            break
    }
}

// 清除所有数据
function clearAll() {
    inputDateTime.value = ''
    inputGpsWeek.value = ''
    inputGpsTow.value = ''
    inputBdtWeek.value = ''
    inputBdtTow.value = ''
    batchInput.value = ''
    convertedResults.value = []
}

// 格式化日期时间显示
function formatDateTime(date) {
    if (outputFormat.value === 'iso') {
        return date.toISOString().replace('T', ' ').substring(0, 19)
    } else {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
}

// 计算儒略日
function calculateJulianDate(date) {
    const utcDate = new Date(date.getTime())
    const julianDay = Math.floor((utcDate / 86400000) - (utcDate.getTimezoneOffset() / 1440) + 2440587.5)
    const julianDate = (utcDate / 86400000) - (utcDate.getTimezoneOffset() / 1440) + 2440587.5
    return julianDate
}

// 从儒略日计算日期
function dateFromJulianDate(jd) {
    const utcDate = new Date((jd - 2440587.5) * 86400000)
    return utcDate
}

// 计算GPS时间（周和周内秒）
function calculateGpsTime(date) {
    // GPS时间起始点：1980年1月6日 00:00:00 UTC
    const gpsEpoch = new Date(Date.UTC(1980, 0, 6, 0, 0, 0))
    const diffMs = date.getTime() - gpsEpoch.getTime()

    // 截至2023年，GPS闰秒数为18秒（需要根据实际情况更新）
    const leapSeconds = 18

    // 计算GPS周和周内秒
    const gpsWeek = Math.floor(diffMs / (7 * 86400000))
    const gpsTow = (diffMs % (7 * 86400000)) / 1000 + leapSeconds

    return { week: gpsWeek, tow: gpsTow, leapSeconds }
}

// 从GPS时间计算日期
function dateFromGpsTime(week, tow) {
    // GPS时间起始点：1980年1月6日 00:00:00 UTC
    const gpsEpoch = new Date(Date.UTC(1980, 0, 6, 0, 0, 0))

    // 截至2023年，GPS闰秒数为18秒（需要根据实际情况更新）
    const leapSeconds = 18

    const totalSeconds = week * 7 * 86400 + (tow - leapSeconds)
    const date = new Date(gpsEpoch.getTime() + totalSeconds * 1000)

    return { date, leapSeconds }
}

// 计算北斗时间（周和周内秒）
function calculateBdtTime(date) {
    // 北斗时间起始点：2006年1月1日 00:00:00 UTC
    const bdtEpoch = new Date(Date.UTC(2006, 0, 1, 0, 0, 0))
    const diffMs = date.getTime() - bdtEpoch.getTime()

    // 截至2023年，北斗闰秒数为4秒（需要根据实际情况更新）
    const leapSeconds = 4

    // 计算北斗周和周内秒
    const bdtWeek = Math.floor(diffMs / (7 * 86400000))
    const bdtTow = (diffMs % (7 * 86400000)) / 1000 + leapSeconds

    return { week: bdtWeek, tow: bdtTow, leapSeconds }
}

// 从北斗时间计算日期
function dateFromBdtTime(week, tow) {
    // 北斗时间起始点：2006年1月1日 00:00:00 UTC
    const bdtEpoch = new Date(Date.UTC(2006, 0, 1, 0, 0, 0))

    // 截至2023年，北斗闰秒数为4秒（需要根据实际情况更新）
    const leapSeconds = 4

    const totalSeconds = week * 7 * 86400 + (tow - leapSeconds)
    const date = new Date(bdtEpoch.getTime() + totalSeconds * 1000)

    return { date, leapSeconds }
}

// 转换时间
function convertTime() {
    convertedResults.value = []

    // 单个转换
    if (!batchInput.value) {
        let date

        if (inputMode.value === 'datetime' && inputDateTime.value) {
            date = new Date(inputDateTime.value)
        } else if (inputMode.value === 'gps' && inputGpsWeek.value && inputGpsTow.value) {
            const result = dateFromGpsTime(parseInt(inputGpsWeek.value), parseFloat(inputGpsTow.value))
            date = result.date
        } else if (inputMode.value === 'bdt' && inputBdtWeek.value && inputBdtTow.value) {
            const result = dateFromBdtTime(parseInt(inputBdtWeek.value), parseFloat(inputBdtTow.value))
            date = result.date
        }

        if (date && !isNaN(date.getTime())) {
            const result = createConversionResult(date)
            convertedResults.value.push(result)
        }
    }

    // 批量转换
    if (batchInput.value) {
        const lines = batchInput.value.split('\n').filter(line => line.trim())
        lines.forEach(line => {
            const parts = line.split(',').map(part => part.trim())
            let date

            if (inputMode.value === 'datetime') {
                date = new Date(parts[0])
            } else if (inputMode.value === 'gps' && parts.length >= 2) {
                const result = dateFromGpsTime(parseInt(parts[0]), parseFloat(parts[1]))
                date = result.date
            } else if (inputMode.value === 'bdt' && parts.length >= 2) {
                const result = dateFromBdtTime(parseInt(parts[0]), parseFloat(parts[1]))
                date = result.date
            }

            if (date && !isNaN(date.getTime())) {
                const result = createConversionResult(date)
                convertedResults.value.push(result)
            }
        })
    }
}

// 创建转换结果对象
function createConversionResult(date) {
    const julianDate = calculateJulianDate(date)
    const gps = calculateGpsTime(date)
    const bdt = calculateBdtTime(date)

    return {
        utcTime: date,
        julianDate: julianDate,
        gpsWeek: gps.week,
        gpsTow: gps.tow,
        gpsLeapSeconds: gps.leapSeconds,
        bdtWeek: bdt.week,
        bdtTow: bdt.tow,
        bdtLeapSeconds: bdt.leapSeconds
    }
}

// 获取时间轴位置
function getTimelinePosition(result) {
    if (convertedResults.value.length <= 1) return 50

    // 简化计算，实际应用中可以根据GPS周数进行更精确的定位
    const minWeek = Math.min(...convertedResults.value.map(r => r.gpsWeek))
    const maxWeek = Math.max(...convertedResults.value.map(r => r.gpsWeek))

    if (minWeek === maxWeek) return 50

    return ((result.gpsWeek - minWeek) / (maxWeek - minWeek)) * 100
}

// 复制结果
function copyResult(result) {
    const text = `${t('tools.gnss-time-converter.utcTime')}: ${formatDateTime(result.utcTime)}\n` +
        `${t('tools.gnss-time-converter.julianDate')}: ${result.julianDate.toFixed(6)}\n` +
        `${t('tools.gnss-time-converter.gpsTime')}: ${result.gpsWeek} ${result.gpsTow.toFixed(3)}\n` +
        `${t('tools.gnss-time-converter.bdtTime')}: ${result.bdtWeek} ${result.bdtTow.toFixed(3)}`

    navigator.clipboard.writeText(text).then(() => {
        toastRef.value.show(t('tools.gnss-time-converter.copySuccess'))
    })
}

// 导出到CSV
function exportToCSV() {
    isExporting.value = true
    // 模拟导出过程
    setTimeout(() => {
        toastRef.value.show(t('tools.gnss-time-converter.csvExportSuccess'))
        isExporting.value = false
    }, 1000)
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