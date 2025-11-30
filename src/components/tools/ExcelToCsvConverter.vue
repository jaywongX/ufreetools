<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.excel-to-csv-converter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" 
                        accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.excel-to-csv-converter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.excel-to-csv-converter.supported') }}</span>
                </div>

                <!-- URL导入 -->
                <div class="mt-4 space-y-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {{ $t('tools.excel-to-csv-converter.urlImport') }}
                    </label>
                    <div class="flex gap-2">
                        <input type="text" v-model="urlInput" :placeholder="$t('tools.excel-to-csv-converter.urlPlaceholder')"
                            class="form-input flex-1" @keyup.enter="importFromUrl" />
                        <button class="btn btn-secondary" @click="importFromUrl">
                            {{ $t('tools.excel-to-csv-converter.importUrl') }}
                        </button>
                    </div>
                </div>

                <!-- 示例按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.excel-to-csv-converter.loadSample') }}
                    </button>
                    <button v-if="uploadedFiles.length" class="text-sm text-red-500 hover:text-red-600" @click="clearAll">
                        {{ $t('tools.excel-to-csv-converter.clearAll') }}
                    </button>
                </div>

                <!-- 文件列表 -->
                <div v-if="uploadedFiles.length" class="mt-4 space-y-4">
                    <h3 class="font-medium">{{ $t('tools.excel-to-csv-converter.fileList') }} ({{ uploadedFiles.length }})</h3>
                    <div class="space-y-2 max-h-[300px] overflow-y-auto">
                        <div v-for="(file, idx) in uploadedFiles" :key="idx"
                            class="border rounded-lg p-3 bg-gray-50 dark:bg-gray-700">
                            <div class="flex justify-between items-start mb-2">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium truncate">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                </div>
                                <button class="text-red-500 hover:text-red-600 ml-2" @click="removeFile(idx)">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                            <div v-if="file.sheets && file.sheets.length > 0" class="mt-2">
                                <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                                    {{ $t('tools.excel-to-csv-converter.selectSheet') }}
                                </label>
                                <select v-model="file.selectedSheets" multiple class="form-select text-xs w-full" size="3">
                                    <option :value="'all'">{{ $t('tools.excel-to-csv-converter.allSheets') }}</option>
                                    <option v-for="(sheet, sIdx) in file.sheets" :key="sIdx" :value="sheet">
                                        {{ sheet }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CSV格式设置 -->
                <div class="mt-6 space-y-4">
                    <h3 class="font-medium">{{ $t('tools.excel-to-csv-converter.csvOptions') }}</h3>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.excel-to-csv-converter.delimiter') }}
                        </label>
                        <select v-model="csvOptions.delimiter" class="form-select w-full">
                            <option value="comma">{{ $t('tools.excel-to-csv-converter.delimiterOptions.comma') }}</option>
                            <option value="semicolon">{{ $t('tools.excel-to-csv-converter.delimiterOptions.semicolon') }}</option>
                            <option value="tab">{{ $t('tools.excel-to-csv-converter.delimiterOptions.tab') }}</option>
                            <option value="pipe">{{ $t('tools.excel-to-csv-converter.delimiterOptions.pipe') }}</option>
                            <option value="custom">{{ $t('tools.excel-to-csv-converter.delimiterOptions.custom') }}</option>
                        </select>
                        <input v-if="csvOptions.delimiter === 'custom'" v-model="csvOptions.customDelimiter"
                            :placeholder="$t('tools.excel-to-csv-converter.customDelimiter')"
                            class="form-input w-full mt-2" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.excel-to-csv-converter.textQualifier') }}
                        </label>
                        <select v-model="csvOptions.qualifier" class="form-select w-full">
                            <option value="double">{{ $t('tools.excel-to-csv-converter.qualifierOptions.double') }}</option>
                            <option value="single">{{ $t('tools.excel-to-csv-converter.qualifierOptions.single') }}</option>
                            <option value="none">{{ $t('tools.excel-to-csv-converter.qualifierOptions.none') }}</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.excel-to-csv-converter.lineEnding') }}
                        </label>
                        <select v-model="csvOptions.lineEnding" class="form-select w-full">
                            <option value="windows">{{ $t('tools.excel-to-csv-converter.lineEndingOptions.windows') }}</option>
                            <option value="unix">{{ $t('tools.excel-to-csv-converter.lineEndingOptions.unix') }}</option>
                            <option value="mac">{{ $t('tools.excel-to-csv-converter.lineEndingOptions.mac') }}</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.excel-to-csv-converter.encoding') }}
                        </label>
                        <select v-model="csvOptions.encoding" class="form-select w-full">
                            <option value="utf8">{{ $t('tools.excel-to-csv-converter.encodingOptions.utf8') }}</option>
                            <option value="utf8bom">{{ $t('tools.excel-to-csv-converter.encodingOptions.utf8bom') }}</option>
                            <option value="gbk">{{ $t('tools.excel-to-csv-converter.encodingOptions.gbk') }}</option>
                            <option value="ansi">{{ $t('tools.excel-to-csv-converter.encodingOptions.ansi') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 转换按钮 -->
                <button class="btn btn-primary w-full mt-6" :disabled="!uploadedFiles.length || isConverting" @click="convertAll">
                    <svg v-if="!isConverting" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ isConverting ? $t('tools.excel-to-csv-converter.converting') : $t('tools.excel-to-csv-converter.convertBtn') }}
                </button>

                <!-- 进度条 -->
                <div v-if="isConverting" class="mt-4">
                    <div class="flex justify-between text-sm mb-1">
                        <span>{{ $t('tools.excel-to-csv-converter.conversionProgress') }}</span>
                        <span>{{ progress }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" :style="{ width: progress + '%' }"></div>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.excel-to-csv-converter.outputTitle') }}</h2>
                    <button v-if="convertedFiles.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.excel-to-csv-converter.batchDownload') }}
                    </button>
                </div>

                <!-- 处理日志 -->
                <div v-if="showLog" class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-sm font-medium">{{ $t('tools.excel-to-csv-converter.processLog') }}</h3>
                        <div class="flex gap-2">
                            <button class="text-xs text-blue-500 hover:text-blue-600" @click="copyLog">
                                {{ $t('tools.excel-to-csv-converter.copyLog') }}
                            </button>
                            <button class="text-xs text-gray-500 hover:text-gray-600" @click="showLog = false">
                                {{ $t('tools.excel-to-csv-converter.hideLog') }}
                            </button>
                        </div>
                    </div>
                    <div class="bg-gray-900 text-green-400 p-3 rounded text-xs font-mono max-h-[200px] overflow-y-auto">
                        <div v-for="(log, idx) in processLogs" :key="idx">{{ log }}</div>
                    </div>
                </div>
                <button v-else-if="processLogs.length" class="text-sm text-blue-500 hover:text-blue-600 mb-4" @click="showLog = true">
                    {{ $t('tools.excel-to-csv-converter.showLog') }}
                </button>

                <div v-if="convertedFiles.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(file, idx) in convertedFiles" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex-1 min-w-0">
                                <p class="font-medium truncate">{{ file.name }}</p>
                                <p class="text-xs text-gray-500">{{ file.sheetName }}</p>
                                <p class="text-xs text-gray-400">{{ formatFileSize(file.size) }}</p>
                            </div>
                            <button class="btn btn-success btn-sm" @click="downloadFile(idx)">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.excel-to-csv-converter.downloadBtn') }}
                            </button>
                        </div>
                        <div v-if="file.preview" class="mt-2 text-xs bg-gray-50 dark:bg-gray-700 p-2 rounded max-h-[100px] overflow-auto">
                            <pre class="whitespace-pre-wrap">{{ file.preview }}</pre>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.excel-to-csv-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <ExcelToCsvConverterArticle />
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import * as XLSX from 'xlsx'
import ExcelToCsvConverterArticle from './ExcelToCsvConverterArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const uploadedFiles = ref([])
const convertedFiles = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const progress = ref(0)
const urlInput = ref('')
const showLog = ref(false)
const processLogs = ref([])

const csvOptions = reactive({
    delimiter: 'comma',
    customDelimiter: '',
    qualifier: 'double',
    lineEnding: 'windows',
    encoding: 'utf8bom'
})

function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (file.name.match(/\.(xlsx|xls)$/i)) {
            uploadedFiles.value.push({
                file,
                name: file.name,
                size: file.size,
                sheets: [],
                selectedSheets: ['all']
            })
            readExcelFile(uploadedFiles.value.length - 1)
        }
    })
    isDragging.value = false
    if (fileInput.value) {
        fileInput.value.value = ''
    }
}

function handleDrop(e) {
    handleFiles(e)
}

async function importFromUrl() {
    if (!urlInput.value.trim()) return
    try {
        addLog(t('tools.excel-to-csv-converter.urlImport') + ': ' + urlInput.value)
        const response = await fetch(urlInput.value)
        if (!response.ok) throw new Error('Failed to fetch')
        const blob = await response.blob()
        const file = new File([blob], 'imported.xlsx', { type: blob.type })
        uploadedFiles.value.push({
            file,
            name: 'imported.xlsx',
            size: file.size,
            sheets: [],
            selectedSheets: ['all']
        })
        readExcelFile(uploadedFiles.value.length - 1)
        urlInput.value = ''
        notify(t('tools.excel-to-csv-converter.fileProcessed'))
    } catch (error) {
        addLog(t('tools.excel-to-csv-converter.urlError') + ': ' + error.message)
        notify(t('tools.excel-to-csv-converter.urlError'))
    }
}

function readExcelFile(idx) {
    const fileObj = uploadedFiles.value[idx]
    const reader = new FileReader()
    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target.result)
            const workbook = XLSX.read(data, { type: 'array' })
            fileObj.sheets = workbook.SheetNames
            addLog(`${fileObj.name}: ${fileObj.sheets.length} ${t('tools.excel-to-csv-converter.sheetName')}`)
        } catch (error) {
            addLog(`${fileObj.name}: ${t('tools.excel-to-csv-converter.errorOccurred')} - ${error.message}`)
        }
    }
    reader.readAsArrayBuffer(fileObj.file)
}

function removeFile(idx) {
    uploadedFiles.value.splice(idx, 1)
}

function clearAll() {
    uploadedFiles.value = []
    convertedFiles.value = []
    processLogs.value = []
    progress.value = 0
}

function getDelimiter() {
    if (csvOptions.delimiter === 'custom') {
        return csvOptions.customDelimiter || ','
    }
    const map = {
        comma: ',',
        semicolon: ';',
        tab: '\t',
        pipe: '|'
    }
    return map[csvOptions.delimiter] || ','
}

function getQualifier() {
    const map = {
        double: '"',
        single: "'",
        none: ''
    }
    return map[csvOptions.qualifier] || '"'
}

function getLineEnding() {
    const map = {
        windows: '\r\n',
        unix: '\n',
        mac: '\r'
    }
    return map[csvOptions.lineEnding] || '\r\n'
}

function escapeCSV(value, qualifier) {
    if (value === null || value === undefined) return ''
    const str = String(value)
    if (qualifier && (str.includes(qualifier) || str.includes('\n') || str.includes('\r') || str.includes(','))) {
        return qualifier + str.replace(new RegExp(qualifier, 'g'), qualifier + qualifier) + qualifier
    }
    return str
}

function convertToCSV(worksheet) {
    const delimiter = getDelimiter()
    const qualifier = getQualifier()
    const lineEnding = getLineEnding()
    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1')
    const rows = []
    
    for (let R = range.s.r; R <= range.e.r; R++) {
        const row = []
        for (let C = range.s.c; C <= range.e.c; C++) {
            const cellAddress = XLSX.utils.encode_cell({ r: R, c: C })
            const cell = worksheet[cellAddress]
            let value = ''
            if (cell) {
                if (cell.t === 'n') {
                    value = cell.v
                } else if (cell.t === 'd') {
                    value = XLSX.SSF.format('yyyy-mm-dd', cell.v)
                } else {
                    value = cell.w || cell.v || ''
                }
            }
            row.push(escapeCSV(value, qualifier))
        }
        rows.push(row.join(delimiter))
    }
    
    return rows.join(lineEnding)
}

async function convertAll() {
    if (!uploadedFiles.value.length) return
    
    isConverting.value = true
    convertedFiles.value = []
    processLogs.value = []
    progress.value = 0
    
    const total = uploadedFiles.value.length
    let processed = 0
    
    for (let i = 0; i < uploadedFiles.value.length; i++) {
        const fileObj = uploadedFiles.value[i]
        addLog(`${t('tools.excel-to-csv-converter.fileProcessed')}: ${fileObj.name}`)
        
        try {
            const reader = new FileReader()
            await new Promise((resolve, reject) => {
                reader.onload = (e) => {
                    try {
                        const data = new Uint8Array(e.target.result)
                        const workbook = XLSX.read(data, { type: 'array' })
                        const sheetsToConvert = fileObj.selectedSheets.includes('all')
                            ? workbook.SheetNames
                            : fileObj.selectedSheets.filter(s => workbook.SheetNames.includes(s))
                        
                        sheetsToConvert.forEach((sheetName, sIdx) => {
                            const worksheet = workbook.Sheets[sheetName]
                            const csvContent = convertToCSV(worksheet)
                            const blob = encodeCSVBlob(csvContent)
                            
                            const baseName = fileObj.name.replace(/\.(xlsx|xls)$/i, '')
                            const fileName = sheetsToConvert.length > 1
                                ? `${baseName}_${sheetName}.csv`
                                : `${baseName}.csv`
                            
                            convertedFiles.value.push({
                                name: fileName,
                                sheetName: sheetName,
                                content: csvContent,
                                blob: blob,
                                size: blob.size,
                                preview: csvContent.substring(0, 500)
                            })
                            
                            addLog(`${t('tools.excel-to-csv-converter.sheetProcessed')}: ${sheetName}`)
                        })
                        
                        processed++
                        progress.value = Math.round((processed / total) * 100)
                        resolve()
                    } catch (error) {
                        addLog(`${fileObj.name}: ${t('tools.excel-to-csv-converter.errorOccurred')} - ${error.message}`)
                        reject(error)
                    }
                }
                reader.onerror = reject
                reader.readAsArrayBuffer(fileObj.file)
            })
        } catch (error) {
            addLog(`${fileObj.name}: ${t('tools.excel-to-csv-converter.errorOccurred')} - ${error.message}`)
            processed++
            progress.value = Math.round((processed / total) * 100)
        }
    }
    
    isConverting.value = false
    progress.value = 100
    addLog(t('tools.excel-to-csv-converter.conversionComplete'))
    notify(t('tools.excel-to-csv-converter.conversionDone'))
}

function encodeCSVBlob(content) {
    const encoding = csvOptions.encoding
    let blob
    
    if (encoding === 'utf8bom') {
        const BOM = '\uFEFF'
        blob = new Blob([BOM + content], { type: 'text/csv;charset=utf-8;' })
    } else if (encoding === 'gbk') {
        blob = new Blob([content], { type: 'text/csv;charset=gbk;' })
    } else if (encoding === 'ansi') {
        blob = new Blob([content], { type: 'text/csv;charset=windows-1252;' })
    } else {
        blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
    }
    
    return blob
}

function downloadFile(idx) {
    const file = convertedFiles.value[idx]
    const url = URL.createObjectURL(file.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = file.name
    a.click()
    URL.revokeObjectURL(url)
}

async function downloadAll() {
    if (!convertedFiles.value.length) return
    
    const zip = new JSZip()
    convertedFiles.value.forEach(file => {
        zip.file(file.name, file.blob)
    })
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'excel_to_csv_converted.zip'
    a.click()
    URL.revokeObjectURL(url)
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

function addLog(message) {
    const timestamp = new Date().toLocaleTimeString()
    processLogs.value.push(`[${timestamp}] ${message}`)
    showLog.value = true
}

function copyLog() {
    const text = processLogs.value.join('\n')
    navigator.clipboard.writeText(text).then(() => {
        notify(t('tools.excel-to-csv-converter.logCopied'))
    })
}

function loadSample() {
    clearAll()
    const sampleData = [
        ['姓名', '年龄', '城市', '职业'],
        ['张三', 25, '北京', '工程师'],
        ['李四', 30, '上海', '设计师'],
        ['王五', 28, '广州', '产品经理']
    ]
    
    const ws = XLSX.utils.aoa_to_sheet(sampleData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const file = new File([blob], 'sample.xlsx', { type: blob.type })
    
    uploadedFiles.value.push({
        file,
        name: 'sample.xlsx',
        size: file.size,
        sheets: ['Sheet1'],
        selectedSheets: ['all']
    })
    
    notify(t('tools.excel-to-csv-converter.sampleLoaded'))
}

function notify(message) {
    console.log(message)
}
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

.form-input {
    @apply px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.form-select {
    @apply px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500;
}

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>