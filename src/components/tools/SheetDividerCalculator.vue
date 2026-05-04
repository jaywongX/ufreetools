<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.sheet-divider-calculator.inputTitle') }}</h2>

                <!-- 坐标输入 -->
                <div class="space-y-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.sheet-divider-calculator.latitude') }}
                        </label>
                        <input type="number" step="any" v-model="inputLatitude"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            :placeholder="$t('tools.sheet-divider-calculator.latitudePlaceholder')" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.sheet-divider-calculator.longitude') }}
                        </label>
                        <input type="number" step="any" v-model="inputLongitude"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            :placeholder="$t('tools.sheet-divider-calculator.longitudePlaceholder')" />
                    </div>
                </div>

                <!-- 批量输入 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {{ $t('tools.sheet-divider-calculator.batchInput') }}
                    </label>
                    <textarea v-model="batchInput" rows="4"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.sheet-divider-calculator.batchInputPlaceholder')"></textarea>
                </div>

                <!-- 参数设置 -->
                <div class="space-y-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.sheet-divider-calculator.scale') }}
                        </label>
                        <select v-model="selectedScale"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600">
                            <option v-for="scale in scales" :key="scale.value" :value="scale.value">
                                {{ scale.label }}
                            </option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.sheet-divider-calculator.projectionZone') }}
                        </label>
                        <select v-model="projectionZone"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600">
                            <option value="6">{{ $t('tools.sheet-divider-calculator.sixDegreeZone') }}</option>
                            <option value="3">{{ $t('tools.sheet-divider-calculator.threeDegreeZone') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="flex flex-wrap gap-2">
                    <button class="btn btn-primary flex-1" @click="calculateSheet" :disabled="!canCalculate">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.sheet-divider-calculator.calculateBtn') }}
                    </button>

                    <button class="btn btn-secondary" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.sheet-divider-calculator.loadSample') }}
                    </button>

                    <button class="btn btn-warning" @click="clearAll">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ $t('tools.sheet-divider-calculator.clearAll') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.sheet-divider-calculator.outputTitle') }}</h2>

                    <!-- 导出按钮 -->
                    <div class="flex gap-2">
                        <button v-if="calculatedSheets.length > 0" class="btn btn-primary btn-sm" @click="exportToExcel"
                            :disabled="isExporting">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.sheet-divider-calculator.exportExcel') }}
                        </button>

                        <!-- <button v-if="calculatedSheets.length > 0" class="btn btn-secondary btn-sm" @click="exportToPDF"
                            :disabled="isExporting">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.sheet-divider-calculator.exportPDF') }}
                        </button> -->
                    </div>
                </div>

                <!-- 结果显示 -->
                <div v-if="calculatedSheets.length > 0"
                    class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(sheet, idx) in calculatedSheets" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
                        :class="{ 'ring-2 ring-blue-500': selectedSheetIndex === idx }" @click="selectSheet(idx)">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-lg">{{ sheet.sheetNumber }}</h3>
                                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {{ $t('tools.sheet-divider-calculator.coordinates') }}:
                                    {{ sheet.latitude.toFixed(6) }}, {{ sheet.longitude.toFixed(6) }}
                                </p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">
                                    {{ $t('tools.sheet-divider-calculator.scale') }}: {{ sheet.scaleLabel }}
                                </p>
                            </div>
                            <div class="text-right">
                                <p class="text-sm">
                                    <span class="font-medium">{{ $t('tools.sheet-divider-calculator.zone') }}:</span>
                                    {{ sheet.zone }}
                                </p>
                                <p class="text-sm">
                                    <span class="font-medium">{{ $t('tools.sheet-divider-calculator.centralMeridian')
                                        }}:</span>
                                    {{ sheet.centralMeridian }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 图幅格网可视化 -->
                <div v-if="calculatedSheets.length > 0" class="mt-6">
                    <h3 class="font-bold mb-2">{{ $t('tools.sheet-divider-calculator.sheetGrid') }}</h3>
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <div ref="gridContainer"
                            class="relative w-full h-64 bg-white dark:bg-gray-800 border rounded overflow-hidden"
                            @click="onGridClick">
                            <!-- 网格线 -->
                            <div v-for="i in 5" :key="`v-${i}`"
                                class="absolute top-0 bottom-0 border-l border-gray-300 dark:border-gray-600"
                                :style="{ left: `${(i - 1) * 25}%` }"></div>
                            <div v-for="i in 5" :key="`h-${i}`"
                                class="absolute left-0 right-0 border-t border-gray-300 dark:border-gray-600"
                                :style="{ top: `${(i - 1) * 25}%` }"></div>

                            <!-- 图幅点 -->
                            <div v-for="(sheet, idx) in calculatedSheets" :key="`point-${idx}`"
                                class="absolute w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"
                                :class="{ 'animate-ping': selectedSheetIndex === idx }" :style="getPointPosition(sheet)"
                                @click.stop="selectSheet(idx)"></div>

                            <!-- 选中图幅高亮 -->
                            <div v-if="selectedSheetIndex !== null"
                                class="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-20 rounded"
                                :style="getSelectedSheetPosition()"></div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.sheet-divider-calculator.noOutput') }}</p>
                </div>
            </div>
        </div>
        <SheetDividerCalculatorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import SheetDividerCalculatorArticle from './SheetDividerCalculatorArticle.vue'
import * as XLSX from 'xlsx'
// import { jsPDF } from 'jspdf'
// import 'jspdf-autotable'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 输入数据
const inputLatitude = ref('')
const inputLongitude = ref('')
const batchInput = ref('')
const selectedScale = ref('50000')
const projectionZone = ref('6')
const selectedSheetIndex = ref(null)
const isExporting = ref(false)

// 输出数据
const calculatedSheets = reactive([])

// 比例尺选项
const scales = [
    { value: '500', label: '1:500' },
    { value: '1000', label: '1:1000' },
    { value: '2000', label: '1:2000' },
    { value: '5000', label: '1:5000' },
    { value: '10000', label: '1:10000' },
    { value: '25000', label: '1:25000' },
    { value: '50000', label: '1:50000' },
    { value: '100000', label: '1:100000' },
    { value: '250000', label: '1:250000' },
    { value: '500000', label: '1:500000' },
    { value: '1000000', label: '1:1000000' }
]

// 计算按钮是否可用
const canCalculate = computed(() => {
    return (inputLatitude.value && inputLongitude.value) || batchInput.value
})

// 示例数据
const sampleData = [
    { lat: 39.9042, lon: 116.4074, desc: '北京市中心' },
    { lat: 31.2304, lon: 121.4737, desc: '上海市中心' },
    { lat: 23.1291, lon: 113.2644, desc: '广州市中心' }
]

// 加载示例数据
function loadSampleData() {
    clearAll()
    batchInput.value = sampleData.map(d => `${d.lat}, ${d.lon}, ${d.desc}`).join('\n')
}

// 清除所有数据
function clearAll() {
    inputLatitude.value = ''
    inputLongitude.value = ''
    batchInput.value = ''
    calculatedSheets.splice(0)
    selectedSheetIndex.value = null
}

// 计算图幅
function calculateSheet() {
    calculatedSheets.splice(0)

    // 单个坐标计算
    if (inputLatitude.value && inputLongitude.value) {
        const sheet = calculateSingleSheet(
            parseFloat(inputLatitude.value),
            parseFloat(inputLongitude.value),
            t('tools.sheet-divider-calculator.singlePointDesc')
        )
        if (sheet) {
            calculatedSheets.push(sheet)
        }
    }

    // 批量坐标计算
    if (batchInput.value) {
        const lines = batchInput.value.split('\n').filter(line => line.trim())
        lines.forEach(line => {
            const parts = line.split(',').map(part => part.trim())
            if (parts.length >= 2) {
                const lat = parseFloat(parts[0])
                const lon = parseFloat(parts[1])
                const desc = parts.slice(2).join(', ') || t('tools.sheet-divider-calculator.batchPointDesc')

                if (!isNaN(lat) && !isNaN(lon)) {
                    const sheet = calculateSingleSheet(lat, lon, desc)
                    if (sheet) {
                        calculatedSheets.push(sheet)
                    }
                }
            }
        })
    }

    // 默认选中第一个
    if (calculatedSheets.length > 0) {
        nextTick(() => {
            selectedSheetIndex.value = 0
        })
    }
}

// 计算单个图幅
function calculateSingleSheet(latitude, longitude, description) {
    try {
        const scale = parseInt(selectedScale.value)
        const zoneType = parseInt(projectionZone.value)

        // 计算所在带号
        let zone
        if (zoneType === 3) {
            // 3度分带
            zone = Math.floor(longitude / 3) + 1
        } else {
            // 6度分带
            zone = Math.floor((longitude + 180) / 6) + 1
        }

        // 计算中央子午线
        const centralMeridian = zoneType === 3 ? zone * 3 : zone * 6 - 3

        // 计算图幅编号（简化算法）
        const latIndex = Math.floor((latitude + 90) / 4) + 1
        const lonIndex = Math.floor((longitude + 180) / 6) + 1
        const sheetNumber = `${String.fromCharCode(64 + latIndex)}-${lonIndex}`

        // 获取比例尺标签
        const scaleLabel = scales.find(s => s.value === selectedScale.value)?.label || `1:${scale}`

        return {
            latitude,
            longitude,
            description,
            sheetNumber,
            scale,
            scaleLabel,
            zone,
            centralMeridian,
            latIndex,
            lonIndex
        }
    } catch (error) {
        console.error('计算图幅时出错:', error)
        return null
    }
}

// 选择图幅
function selectSheet(index) {
    selectedSheetIndex.value = index
}

// 获取点在网格中的位置
function getPointPosition(sheet) {
    // 找出所有点的经纬度范围
    const minLat = Math.min(...calculatedSheets.map(s => s.latitude))
    const maxLat = Math.max(...calculatedSheets.map(s => s.latitude))
    const minLon = Math.min(...calculatedSheets.map(s => s.longitude))
    const maxLon = Math.max(...calculatedSheets.map(s => s.longitude))
    
    // 计算归一化位置（添加一点边距）
    const padding = 10 // 百分比边距
    const latRange = maxLat - minLat || 1 // 避免除以零
    const lonRange = maxLon - minLon || 1
    
    const x = padding + ((sheet.longitude - minLon) / lonRange) * (100 - 2 * padding)
    const y = padding + ((maxLat - sheet.latitude) / latRange) * (100 - 2 * padding) // 纬度反转，因为地图上北方在上
    
    return {
        left: `${x}%`,
        top: `${y}%`
    }
}

// 获取选中图幅的位置
function getSelectedSheetPosition() {
    if (selectedSheetIndex.value === null) return {}
    
    const sheet = calculatedSheets[selectedSheetIndex.value]
    if (!sheet) return {}
    
    // 使用相同的算法计算位置
    const minLat = Math.min(...calculatedSheets.map(s => s.latitude))
    const maxLat = Math.max(...calculatedSheets.map(s => s.latitude))
    const minLon = Math.min(...calculatedSheets.map(s => s.longitude))
    const maxLon = Math.max(...calculatedSheets.map(s => s.longitude))
    
    const padding = 10
    const latRange = maxLat - minLat || 1
    const lonRange = maxLon - minLon || 1
    
    const x = padding + ((sheet.longitude - minLon) / lonRange) * (100 - 2 * padding)
    const y = padding + ((maxLat - sheet.latitude) / latRange) * (100 - 2 * padding)
    
    // 返回一个矩形区域，以点为中心
    return {
        left: `${x - 5}%`,
        top: `${y - 5}%`,
        width: '10%',
        height: '10%'
    }
}


// 网格点击事件
function onGridClick() {
    selectedSheetIndex.value = null
}

// 导出到Excel
function exportToExcel() {
    if (calculatedSheets.length === 0) return

    isExporting.value = true
    try {
        // 创建工作簿
        const wb = XLSX.utils.book_new()

        // 准备数据
        const data = calculatedSheets.map(sheet => ({
            [t('tools.sheet-divider-calculator.sheetNumber')]: sheet.sheetNumber,
            [t('tools.sheet-divider-calculator.latitude')]: sheet.latitude.toFixed(6),
            [t('tools.sheet-divider-calculator.longitude')]: sheet.longitude.toFixed(6),
            [t('tools.sheet-divider-calculator.scale')]: sheet.scaleLabel,
            [t('tools.sheet-divider-calculator.zone')]: sheet.zone,
            [t('tools.sheet-divider-calculator.centralMeridian')]: sheet.centralMeridian,
            [t('tools.sheet-divider-calculator.description')]: sheet.description || ''
        }))

        // 创建工作表
        const ws = XLSX.utils.json_to_sheet(data)

        // 将工作表添加到工作簿
        XLSX.utils.book_append_sheet(wb, ws, t('tools.sheet-divider-calculator.outputTitle'))

        // 生成Excel文件并下载
        const fileName = `${t('tools.sheet-divider-calculator.exportFileName')}.xlsx`
        XLSX.writeFile(wb, fileName)

        // 显示成功提示
        setTimeout(() => {
            toastRef.value.show(t('tools.sheet-divider-calculator.excelExportSuccess'))
        }, 500)
    } catch (error) {
        console.error('导出Excel失败:', error)
        toastRef.value.show(t('tools.sheet-divider-calculator.exportFailed'))
    } finally {
        isExporting.value = false
    }
}

// 导出到PDF
// function exportToPDF() {
//     if (calculatedSheets.length === 0) return

//     isExporting.value = true
//     try {
//         // 创建PDF文档
//         const doc = new jsPDF()

//         // 添加标题
//         doc.setFontSize(16)
//         doc.text(t('tools.sheet-divider-calculator.tableTitle'), 14, 15)

//         // 准备表格数据
//         const tableColumn = [
//             t('tools.sheet-divider-calculator.sheetNumber'),
//             t('tools.sheet-divider-calculator.latitude'),
//             t('tools.sheet-divider-calculator.longitude'),
//             t('tools.sheet-divider-calculator.scale'),
//             t('tools.sheet-divider-calculator.zone'),
//             t('tools.sheet-divider-calculator.description')
//         ]

//         const tableRows = calculatedSheets.map(sheet => [
//             sheet.sheetNumber,
//             sheet.latitude.toFixed(6),
//             sheet.longitude.toFixed(6),
//             sheet.scaleLabel,
//             sheet.zone,
//             sheet.description || ''
//         ])

//         // 添加表格
//         autoTable({
//             head: [tableColumn],
//             body: tableRows,
//             startY: 25,
//             theme: 'grid',
//             styles: {
//                 fontSize: 10,
//                 cellPadding: 3
//             },
//             headStyles: {
//                 fillColor: [66, 133, 244],
//                 textColor: 255
//             }
//         })

//         // 保存PDF并触发下载
//         const fileName = `${t('tools.sheet-divider-calculator.exportFileName')}.pdf`
//         doc.save(fileName)

//         // 显示成功提示
//         setTimeout(() => {
//             alert(t('tools.sheet-divider-calculator.pdfExportSuccess'))
//         }, 500)
//     } catch (error) {
//         console.error('导出PDF失败:', error)
//         alert(t('tools.sheet-divider-calculator.exportFailed'))
//     } finally {
//         isExporting.value = false
//     }
// }
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