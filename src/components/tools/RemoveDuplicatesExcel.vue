<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- 左侧：文件上传和配置区域 -->
            <div class="lg:col-span-1 space-y-6">
                <!-- 文件上传区域 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold mb-4">{{ $t('tools.remove-duplicates-excel.inputTitle') }}</h2>

                    <!-- 文件上传区域 -->
                    <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                        :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                        <input type="file" ref="fileInput" class="hidden" accept=".xlsx,.xls,.csv" multiple
                            @change="handleFiles" />
                        <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span class="text-gray-500">{{ $t('tools.remove-duplicates-excel.dragTip') }}</span>
                        <span class="text-xs text-gray-400 mt-2">{{ $t('tools.remove-duplicates-excel.supported')
                            }}</span>
                    </div>

                    <!-- 示例数据按钮 -->
                    <div class="flex justify-between items-center mt-4">
                        <button class="btn btn-secondary" @click="loadSampleData">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {{ $t('tools.remove-duplicates-excel.loadSample') }}
                        </button>
                        <button v-if="uploadedFiles.length" class="text-sm text-red-500 hover:text-red-600"
                            @click="clearFiles">
                            {{ $t('tools.remove-duplicates-excel.clearAll') }}
                        </button>
                    </div>

                    <!-- 文件列表 -->
                    <div v-if="uploadedFiles.length" class="mt-4 space-y-2">
                        <h3 class="font-medium">{{ $t('tools.remove-duplicates-excel.preview') }} ({{
                            uploadedFiles.length }})</h3>
                        <div class="space-y-2 max-h-40 overflow-y-auto">
                            <div v-for="(file, idx) in uploadedFiles" :key="idx"
                                class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                                <div class="flex items-center space-x-2">
                                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span class="text-sm">{{ file.name }}</span>
                                </div>
                                <button class="text-red-500 hover:text-red-600" @click="removeFile(idx)">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 去重规则配置 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 class="text-lg font-bold mb-4">{{ $t('tools.remove-duplicates-excel.duplicateRulesTitle') }}
                    </h3>

                    <!-- 去重类型选择 -->
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {{ $t('tools.remove-duplicates-excel.ruleType') }}
                            </label>
                            <div class="space-y-2">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="duplicateConfig.ruleType" value="fullRow"
                                        class="form-radio">
                                    <span>{{ $t('tools.remove-duplicates-excel.ruleTypes.fullRow') }}</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="duplicateConfig.ruleType" value="singleColumn"
                                        class="form-radio">
                                    <span>{{ $t('tools.remove-duplicates-excel.ruleTypes.singleColumn') }}</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="duplicateConfig.ruleType" value="multiColumn"
                                        class="form-radio">
                                    <span>{{ $t('tools.remove-duplicates-excel.ruleTypes.multiColumn') }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- 列选择 -->
                        <!-- Replace the existing column selection div with this -->
                        <div v-if="duplicateConfig.ruleType !== 'fullRow' && availableColumns.length">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {{ $t('tools.remove-duplicates-excel.selectedColumns') }}
                            </label>
                            <div class="space-y-2 max-h-32 overflow-y-auto border rounded p-2">
                                <label v-for="(col, idx) in availableColumns" :key="idx"
                                    class="flex items-center space-x-2">
                                    <input type="checkbox" :checked="duplicateConfig.selectedColumns.includes(idx)"
                                        @change="handleColumnSelection(idx)" class="form-checkbox">
                                    <span class="text-sm">{{ col }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- 高级选项 -->
                        <div class="space-y-3">
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="duplicateConfig.caseSensitive" class="form-checkbox">
                                <span class="text-sm">{{ $t('tools.remove-duplicates-excel.caseSensitive') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="duplicateConfig.trimSpaces" class="form-checkbox">
                                <span class="text-sm">{{ $t('tools.remove-duplicates-excel.trimSpaces') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="duplicateConfig.ignoreEmpty" class="form-checkbox">
                                <span class="text-sm">{{ $t('tools.remove-duplicates-excel.ignoreEmpty') }}</span>
                            </label>
                        </div>

                        <!-- 模板管理 -->
                        <div v-if="savedTemplates.length > 0" class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                            <h4 class="text-sm font-medium mb-2">{{ $t('tools.remove-duplicates-excel.savedTemplates')
                                }}</h4>
                            <div class="space-y-2">
                                <div v-for="(template, idx) in savedTemplates" :key="idx"
                                    class="flex items-center justify-between text-sm">
                                    <span>{{ template.name }}</span>
                                    <div class="flex space-x-1">
                                        <button @click="loadTemplate(template)"
                                            class="text-blue-600 hover:text-blue-800">{{
                                                $t('tools.remove-duplicates-excel.loadTemplate') }}</button>
                                        <button @click="deleteTemplate(idx)" class="text-red-600 hover:text-red-800">{{
                                            $t('tools.remove-duplicates-excel.deleteTemplate') }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <button class="btn btn-primary w-full mb-3" :disabled="!uploadedFiles.length"
                        @click="processDuplicates">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ $t('tools.remove-duplicates-excel.removeDuplicatesBtn') }}
                    </button>

                    <div class="flex gap-2">
                        <button class="btn btn-secondary flex-1" @click="saveTemplate">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            {{ $t('tools.remove-duplicates-excel.saveTemplate') }}
                        </button>
                        <button class="btn btn-secondary flex-1" @click="resetConfig">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {{ $t('tools.remove-duplicates-excel.resetBtn') }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- 右侧：结果展示区域 -->
            <div class="lg:col-span-2 space-y-6">
                <!-- 数据统计 -->
                <div v-if="statistics" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 class="text-lg font-bold mb-4">{{ $t('tools.remove-duplicates-excel.statisticsTitle') }}</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                            <div class="text-2xl font-bold text-blue-600">{{ statistics.originalRows }}</div>
                            <div class="text-sm text-gray-600">{{ $t('tools.remove-duplicates-excel.originalRows') }}
                            </div>
                        </div>
                        <div class="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded">
                            <div class="text-2xl font-bold text-red-600">{{ statistics.duplicateRows }}</div>
                            <div class="text-sm text-gray-600">{{ $t('tools.remove-duplicates-excel.duplicateRows') }}
                            </div>
                        </div>
                        <div class="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                            <div class="text-2xl font-bold text-green-600">{{ statistics.uniqueRows }}</div>
                            <div class="text-sm text-gray-600">{{ $t('tools.remove-duplicates-excel.uniqueRows') }}
                            </div>
                        </div>
                        <div class="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                            <div class="text-2xl font-bold text-yellow-600">{{ statistics.duplicateRate }}%</div>
                            <div class="text-sm text-gray-600">{{ $t('tools.remove-duplicates-excel.duplicateRate') }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 数据预览 -->
                <div v-if="processedData.length" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold">{{ $t('tools.remove-duplicates-excel.previewTitle') }}</h3>
                        <div class="flex space-x-2">
                            <button class="btn btn-sm" :class="viewMode === 'all' ? 'btn-primary' : 'btn-secondary'"
                                @click="viewMode = 'all'">
                                {{ $t('tools.remove-duplicates-excel.showUnique') }}
                            </button>
                            <button class="btn btn-sm"
                                :class="viewMode === 'duplicates' ? 'btn-primary' : 'btn-secondary'"
                                @click="viewMode = 'duplicates'">
                                {{ $t('tools.remove-duplicates-excel.showDuplicates') }}
                            </button>
                        </div>
                    </div>

                    <!-- 表格容器 -->
                    <div class="overflow-x-auto max-h-96 overflow-y-auto border rounded">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0">
                                <tr>
                                    <th v-for="(header, idx) in headers" :key="idx"
                                        class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        {{ header }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="(row, rowIdx) in filteredData" :key="rowIdx" :class="getRowClass(row)">
                                    <td v-for="(cell, cellIdx) in getDisplayData(row)" :key="cellIdx"
                                        class="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">
                                        {{ cell }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 导出选项 -->
                    <div class="mt-6 space-y-4">
                        <div class="flex flex-wrap gap-4">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="exportConfig.format" value="xlsx" class="form-radio">
                                <span>Excel (XLSX)</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="exportConfig.format" value="csv" class="form-radio">
                                <span>CSV</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="exportConfig.format" value="json" class="form-radio">
                                <span>JSON</span>
                            </label>
                        </div>

                        <div class="flex gap-2">
                            <button class="btn btn-success flex-1" @click="downloadResults">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.remove-duplicates-excel.downloadBtn') }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-if="!processedData.length" class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.remove-duplicates-excel.noOutput') }}</p>
                </div>
            </div>
        </div>

        <RemoveDuplicatesExcelArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import * as XLSX from 'xlsx'
import RemoveDuplicatesExcelArticle from './RemoveDuplicatesExcelArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 响应式数据
const fileInput = ref(null)
const uploadedFiles = ref([])
const isDragging = ref(false)
const processedData = ref([])
const headers = ref([])
const statistics = ref(null)
const viewMode = ref('all')

// 去重配置
const duplicateConfig = reactive({
    ruleType: 'fullRow',
    selectedColumns: [],
    caseSensitive: false,
    trimSpaces: true,
    ignoreEmpty: false
})

// 导出配置
const exportConfig = reactive({
    format: 'xlsx',
    includeHeaders: true,
    encoding: 'utf-8'
})

// 模板管理
const savedTemplates = ref([])
const currentTemplate = ref(null)

// 可用列
const availableColumns = computed(() => {
    if (headers.value.length === 0) return []
    return headers.value.map((header, idx) => header || t('tools.remove-duplicates-excel.columnNumber', { number: idx + 1 }))
})

// 过滤后的数据
const filteredData = computed(() => {
    if (viewMode.value === 'duplicates') {
        return processedData.value.filter(row => row._isDuplicate)
    }
    return processedData.value.filter(row => !row._isDuplicate)
})

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (isValidFile(file)) {
            uploadedFiles.value.push(file)
        }
    })
    isDragging.value = false
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 验证文件类型
function isValidFile(file) {
    const validTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
        'application/vnd.ms-excel', // .xls
        'text/csv' // .csv
    ]
    const validExtensions = ['.xlsx', '.xls', '.csv']
    return validTypes.includes(file.type) || validExtensions.some(ext => file.name.toLowerCase().endsWith(ext))
}

// 移除文件
function removeFile(idx) {
    uploadedFiles.value.splice(idx, 1)
    if (uploadedFiles.value.length === 0) {
        clearResults()
    }
}

// 清除所有文件
function clearFiles() {
    uploadedFiles.value = []
    clearResults()
}

// 清除结果
function clearResults() {
    processedData.value = []
    headers.value = []
    statistics.value = null
}

// 加载示例数据
function loadSampleData() {
    clearFiles()

    // 创建示例数据
    const sampleData = [
        [t('tools.remove-duplicates-excel.sampleHeaders.name'), t('tools.remove-duplicates-excel.sampleHeaders.email'), t('tools.remove-duplicates-excel.sampleHeaders.phone'), t('tools.remove-duplicates-excel.sampleHeaders.department')],
        [t('tools.remove-duplicates-excel.sampleData.zhangsan'), 'zhangsan@example.com', '13800138001', t('tools.remove-duplicates-excel.sampleData.techDept')],
        [t('tools.remove-duplicates-excel.sampleData.lisi'), 'lisi@example.com', '13800138002', t('tools.remove-duplicates-excel.sampleData.salesDept')],
        [t('tools.remove-duplicates-excel.sampleData.zhangsan'), 'zhangsan@example.com', '13800138001', t('tools.remove-duplicates-excel.sampleData.techDept')], // 重复
        [t('tools.remove-duplicates-excel.sampleData.wangwu'), 'wangwu@example.com', '13800138003', t('tools.remove-duplicates-excel.sampleData.hrDept')],
        [t('tools.remove-duplicates-excel.sampleData.lisi'), 'lisi@example.com', '13800138002', t('tools.remove-duplicates-excel.sampleData.salesDept')], // 重复
        [t('tools.remove-duplicates-excel.sampleData.zhaoliu'), 'zhaoliu@example.com', '13800138004', t('tools.remove-duplicates-excel.sampleData.financeDept')]
    ]

    // 创建虚拟文件
    const blob = new Blob([sampleData.map(row => row.join(',')).join('\n')], { type: 'text/csv' })
    const file = new File([blob], 'sample.csv', { type: 'text/csv' })
    uploadedFiles.value.push(file)

    // 自动处理
    nextTick(() => {
        processDuplicates()
    })
}

// 处理去重
async function processDuplicates() {
    if (uploadedFiles.value.length === 0) return

    try {
        const file = uploadedFiles.value[0] // 处理第一个文件
        const workbook = await readFile(file)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

        if (data.length === 0) return

        // 设置表头
        headers.value = data[0] || []
        const rows = data.slice(1)

        // 执行去重
        const result = performDeduplication(rows)
        processedData.value = result.data

        // 计算统计信息
        statistics.value = {
            originalRows: rows.length,
            duplicateRows: result.duplicateCount,
            uniqueRows: result.uniqueCount,
            duplicateRate: Math.round((result.duplicateCount / rows.length) * 100)
        }

    } catch (error) {
        console.error('处理文件时出错:', error)
        toastRef.value.show(t('tools.remove-duplicates-excel.processError'))
    }
}

// 解析CSV数据
function parseCSV(csvText) {
    const lines = csvText.split('\n')
    const result = []

    for (const line of lines) {
        if (line.trim()) {
            // 简单的CSV解析，处理引号内的逗号
            const row = []
            let current = ''
            let inQuotes = false

            for (let i = 0; i < line.length; i++) {
                const char = line[i]

                if (char === '"') {
                    inQuotes = !inQuotes
                } else if (char === ',' && !inQuotes) {
                    row.push(current.trim())
                    current = ''
                } else {
                    current += char
                }
            }

            // 添加最后一个字段
            row.push(current.trim())
            result.push(row)
        }
    }

    return result
}

// 读取文件
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            try {
                const data = e.target.result
                let workbook

                if (file.name.toLowerCase().endsWith('.csv')) {
                    // 处理CSV文件
                    const csvData = parseCSV(data)
                    workbook = XLSX.utils.book_new()
                    const worksheet = XLSX.utils.aoa_to_sheet(csvData)
                    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
                } else {
                    // 处理Excel文件
                    workbook = XLSX.read(data, { type: 'binary' })
                }

                resolve(workbook)
            } catch (error) {
                reject(error)
            }
        }
        reader.onerror = reject

        if (file.name.toLowerCase().endsWith('.csv')) {
            reader.readAsText(file, 'utf-8')
        } else {
            reader.readAsBinaryString(file)
        }
    })
}

// 执行去重算法
function performDeduplication(rows) {
    const seen = new Map() // 使用Map来跟踪重复项
    const result = []
    let duplicateCount = 0

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i]
        const key = generateKey(row)

        if (seen.has(key)) {
            // 标记为重复
            result.push({ ...row, _isDuplicate: true, _duplicateGroup: seen.get(key) })
            duplicateCount++
        } else {
            seen.set(key, i)
            result.push({ ...row, _isDuplicate: false, _duplicateGroup: i })
        }
    }

    return {
        data: result,
        duplicateCount,
        uniqueCount: result.length - duplicateCount
    }
}

// 生成去重键
function generateKey(row) {
    let keyData = row;

    if (duplicateConfig.ruleType === 'singleColumn' && duplicateConfig.selectedColumns.length > 0) {
        // Only use the first selected column for single column mode
        const firstColumnIndex = duplicateConfig.selectedColumns[0];
        keyData = [row[firstColumnIndex]];
    } else if (duplicateConfig.ruleType === 'multiColumn' && duplicateConfig.selectedColumns.length > 0) {
        keyData = duplicateConfig.selectedColumns.map(idx => row[idx]);
    }

    // 处理空值
    if (duplicateConfig.ignoreEmpty) {
        keyData = keyData.filter(cell => cell !== null && cell !== undefined && cell !== '')
    }

    // 处理空格
    if (duplicateConfig.trimSpaces) {
        keyData = keyData.map(cell => typeof cell === 'string' ? cell.trim() : cell)
    }

    // 处理大小写
    if (!duplicateConfig.caseSensitive) {
        keyData = keyData.map(cell => typeof cell === 'string' ? cell.toLowerCase() : cell)
    }

    // 处理特殊字符（可选）
    if (duplicateConfig.normalizeSpecialChars) {
        keyData = keyData.map(cell => {
            if (typeof cell === 'string') {
                return cell.replace(/[^\w\s]/g, '') // 移除特殊字符
            }
            return cell
        })
    }

    return JSON.stringify(keyData)
}

// Update the column selection handling
function handleColumnSelection(columnIndex) {
    if (duplicateConfig.ruleType === 'singleColumn') {
        // For single column mode, only allow one selection
        duplicateConfig.selectedColumns = [columnIndex];
    } else {
        // For other modes, use normal toggle behavior
        const index = duplicateConfig.selectedColumns.indexOf(columnIndex);
        if (index === -1) {
            duplicateConfig.selectedColumns.push(columnIndex);
        } else {
            duplicateConfig.selectedColumns.splice(index, 1);
        }
    }
}

// 获取行样式
function getRowClass(row) {
    if (row._isDuplicate) {
        return 'bg-red-50 dark:bg-red-900/20'
    }
    return ''
}

// 获取显示数据（过滤内部属性）
function getDisplayData(row) {
    const { _isDuplicate, _duplicateGroup, ...displayRow } = row
    return Object.values(displayRow)
}

// 下载结果
function downloadResults() {
    if (processedData.value.length === 0) return

    const uniqueData = processedData.value.filter(row => !row._isDuplicate)
    const dataToExport = [headers.value, ...uniqueData.map(row => {
        const { _isDuplicate, _duplicateGroup, ...cleanRow } = row
        return Object.values(cleanRow)
    })]

    if (exportConfig.format === 'xlsx') {
        downloadAsExcel(dataToExport)
    } else if (exportConfig.format === 'csv') {
        downloadAsCSV(dataToExport)
    } else if (exportConfig.format === 'json') {
        downloadAsJSON(dataToExport)
    }
}

// 下载为Excel
function downloadAsExcel(data) {
    const worksheet = XLSX.utils.aoa_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, t('tools.remove-duplicates-excel.exportSheetName'))

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = t('tools.remove-duplicates-excel.exportFileName') + '.xlsx'
    a.click()
    URL.revokeObjectURL(url)
}

// 下载为CSV
function downloadAsCSV(data) {
    const csvContent = data.map(row =>
        row.map(cell => {
            // 处理包含逗号、引号或换行符的字段
            const cellStr = String(cell || '')
            if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')) {
                return `"${cellStr.replace(/"/g, '""')}"` // 转义引号
            }
            return cellStr
        }).join(',')
    ).join('\n')

    // 添加BOM以支持中文
    const BOM = '\uFEFF'
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = t('tools.remove-duplicates-excel.exportFileName') + '.csv'
    a.click()
    URL.revokeObjectURL(url)
}

// 下载为JSON
function downloadAsJSON(data) {
    const headers = data[0]
    const rows = data.slice(1)
    const jsonData = {
        metadata: {
            title: t('tools.remove-duplicates-excel.jsonMetadataTitle'),
            processedAt: new Date().toISOString(),
            totalRows: rows.length,
            headers: headers,
            duplicateConfig: {
                ruleType: duplicateConfig.ruleType,
                selectedColumns: duplicateConfig.selectedColumns,
                caseSensitive: duplicateConfig.caseSensitive,
                trimSpaces: duplicateConfig.trimSpaces,
                ignoreEmpty: duplicateConfig.ignoreEmpty
            }
        },
        data: rows.map(row => {
            const obj = {}
            headers.forEach((header, idx) => {
                obj[header] = row[idx]
            })
            return obj
        })
    }

    const jsonContent = JSON.stringify(jsonData, null, 2)
    const blob = new Blob([jsonContent], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = t('tools.remove-duplicates-excel.exportFileName') + '.json'
    a.click()
    URL.revokeObjectURL(url)
}

// 保存模板
function saveTemplate() {
    const templateName = prompt(t('tools.remove-duplicates-excel.templateNamePrompt'))
    if (!templateName) return

    const template = {
        name: templateName,
        config: { ...duplicateConfig },
        createdAt: new Date().toISOString()
    }

    savedTemplates.value.push(template)
    localStorage.setItem('excel-dedup-templates', JSON.stringify(savedTemplates.value))
    toastRef.value.show(t('tools.remove-duplicates-excel.templateSaved'))
}

// 重置配置
function resetConfig() {
    duplicateConfig.ruleType = 'fullRow';
    duplicateConfig.selectedColumns = [];
    duplicateConfig.caseSensitive = false;
    duplicateConfig.trimSpaces = true;
    duplicateConfig.ignoreEmpty = false;
}


// 加载模板
function loadTemplate(template) {
    Object.assign(duplicateConfig, template.config)
    currentTemplate.value = template
}

// 删除模板
function deleteTemplate(index) {
    if (confirm(t('tools.remove-duplicates-excel.deleteTemplateConfirm'))) {
        savedTemplates.value.splice(index, 1)
        localStorage.setItem('excel-dedup-templates', JSON.stringify(savedTemplates.value))
    }
}

// 从本地存储加载模板
function loadTemplatesFromStorage() {
    const stored = localStorage.getItem('excel-dedup-templates')
    if (stored) {
        try {
            savedTemplates.value = JSON.parse(stored)
        } catch (error) {
            console.error(t('tools.remove-duplicates-excel.templateLoadError'), error)
        }
    }
}

// 组件挂载时加载模板
onMounted(() => {
    loadTemplatesFromStorage()
})
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-sm {
    @apply px-3 py-1 text-sm;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
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