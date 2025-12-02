<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.csv-to-excel-converter.inputTitle') }}</h2>

                <!-- 文件上传 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false" @click="fileInput?.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept=".csv,.tsv,.txt,text/csv,text/tab-separated-values"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.csv-to-excel-converter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.csv-to-excel-converter.supported') }}</span>
                </div>

                <!-- URL 导入 -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {{ $t('tools.csv-to-excel-converter.urlImport') }}
                    </label>
                    <div class="flex gap-2">
                        <input class="form-input flex-1" type="text" v-model="urlInput"
                            :placeholder="$t('tools.csv-to-excel-converter.urlPlaceholder')"
                            @keyup.enter="importFromUrl" />
                        <button class="btn btn-secondary" @click="importFromUrl">
                            {{ $t('tools.csv-to-excel-converter.importUrl') }}
                        </button>
                    </div>
                </div>

                <!-- 控制按钮 -->
                <div class="flex items-center justify-between">
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.csv-to-excel-converter.loadSample') }}
                    </button>
                    <button v-if="uploadedFiles.length" class="text-sm text-red-500 hover:text-red-600" @click="clearAll">
                        {{ $t('tools.csv-to-excel-converter.clearAll') }}
                    </button>
                </div>

                <!-- 文件列表 -->
                <div v-if="uploadedFiles.length" class="space-y-3 max-h-[300px] overflow-y-auto">
                    <h3 class="font-medium">{{ $t('tools.csv-to-excel-converter.fileList') }} ({{ uploadedFiles.length }})</h3>
                    <div v-for="(item, idx) in uploadedFiles" :key="idx" class="border rounded-lg bg-gray-50 dark:bg-gray-700 p-3 space-y-2">
                        <div class="flex justify-between items-start">
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-semibold truncate">{{ item.name }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.csv-to-excel-converter.fileSize') }}: {{ formatFileSize(item.size) }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.csv-to-excel-converter.encodingDetected') }}: {{ item.encoding.toUpperCase() }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.csv-to-excel-converter.delimiterDetected') }}: {{ item.delimiterDisplay }}</p>
                            </div>
                            <button class="text-red-500 hover:text-red-600 ml-3" @click="removeFile(idx)">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                                <label class="text-xs text-gray-600 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.encodingLabel') }}</label>
                                <select class="form-select text-xs" v-model="item.encodingSelection" @change="recomputeFile(idx)">
                                    <option value="auto">{{ $t('tools.csv-to-excel-converter.encodingOptions.auto') }}</option>
                                    <option value="utf8">{{ $t('tools.csv-to-excel-converter.encodingOptions.utf8') }}</option>
                                    <option value="utf8bom">{{ $t('tools.csv-to-excel-converter.encodingOptions.utf8bom') }}</option>
                                    <option value="utf16le">{{ $t('tools.csv-to-excel-converter.encodingOptions.utf16le') }}</option>
                                    <option value="gbk">{{ $t('tools.csv-to-excel-converter.encodingOptions.gbk') }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-xs text-gray-600 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.delimiterLabel') }}</label>
                                <select class="form-select text-xs" v-model="item.delimiterSelection" @change="recomputeFile(idx)">
                                    <option value="auto">{{ $t('tools.csv-to-excel-converter.delimiterOptions.auto') }}</option>
                                    <option value="comma">{{ $t('tools.csv-to-excel-converter.delimiterOptions.comma') }}</option>
                                    <option value="semicolon">{{ $t('tools.csv-to-excel-converter.delimiterOptions.semicolon') }}</option>
                                    <option value="tab">{{ $t('tools.csv-to-excel-converter.delimiterOptions.tab') }}</option>
                                    <option value="pipe">{{ $t('tools.csv-to-excel-converter.delimiterOptions.pipe') }}</option>
                                    <option value="custom">{{ $t('tools.csv-to-excel-converter.delimiterOptions.custom') }}</option>
                                </select>
                                <input v-if="item.delimiterSelection === 'custom'" class="form-input text-xs mt-1" v-model="item.customDelimiter"
                                    :placeholder="$t('tools.csv-to-excel-converter.delimiterOptions.custom')" @change="recomputeFile(idx)" />
                            </div>
                        </div>
                        <div class="text-xs bg-white dark:bg-gray-800 rounded p-2 max-h-24 overflow-auto font-mono">
                            <strong>{{ $t('tools.csv-to-excel-converter.previewOriginal') }}:</strong>
                            <pre class="whitespace-pre-wrap">{{ item.preview }}</pre>
                        </div>
                    </div>
                </div>

                <!-- CSV 解析设置 -->
                <div class="space-y-4">
                    <h3 class="font-medium">{{ $t('tools.csv-to-excel-converter.csvOptions') }}</h3>
                    <label class="inline-flex items-center text-sm gap-2">
                        <input type="checkbox" v-model="csvOptions.autoDetect" />
                        {{ $t('tools.csv-to-excel-converter.detectionToggle') }}
                    </label>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.delimiterLabel') }}</label>
                            <select class="form-select w-full" v-model="csvOptions.delimiter">
                                <option value="auto">{{ $t('tools.csv-to-excel-converter.delimiterOptions.auto') }}</option>
                                <option value="comma">{{ $t('tools.csv-to-excel-converter.delimiterOptions.comma') }}</option>
                                <option value="semicolon">{{ $t('tools.csv-to-excel-converter.delimiterOptions.semicolon') }}</option>
                                <option value="tab">{{ $t('tools.csv-to-excel-converter.delimiterOptions.tab') }}</option>
                                <option value="pipe">{{ $t('tools.csv-to-excel-converter.delimiterOptions.pipe') }}</option>
                                <option value="custom">{{ $t('tools.csv-to-excel-converter.delimiterOptions.custom') }}</option>
                            </select>
                            <input v-if="csvOptions.delimiter === 'custom'" class="form-input mt-1" v-model="csvOptions.customDelimiter" />
                        </div>
                        <div>
                            <label class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.qualifierLabel') }}</label>
                            <select class="form-select w-full" v-model="csvOptions.qualifier">
                                <option value="double">{{ $t('tools.csv-to-excel-converter.qualifierOptions.double') }}</option>
                                <option value="single">{{ $t('tools.csv-to-excel-converter.qualifierOptions.single') }}</option>
                                <option value="none">{{ $t('tools.csv-to-excel-converter.qualifierOptions.none') }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.encodingLabel') }}</label>
                            <select class="form-select w-full" v-model="csvOptions.encoding">
                                <option value="auto">{{ $t('tools.csv-to-excel-converter.encodingOptions.auto') }}</option>
                                <option value="utf8">{{ $t('tools.csv-to-excel-converter.encodingOptions.utf8') }}</option>
                                <option value="utf8bom">{{ $t('tools.csv-to-excel-converter.encodingOptions.utf8bom') }}</option>
                                <option value="utf16le">{{ $t('tools.csv-to-excel-converter.encodingOptions.utf16le') }}</option>
                                <option value="gbk">{{ $t('tools.csv-to-excel-converter.encodingOptions.gbk') }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.newlineLabel') }}</label>
                            <select class="form-select w-full" v-model="csvOptions.newline">
                                <option value="auto">{{ $t('tools.csv-to-excel-converter.newlineOptions.auto') }}</option>
                                <option value="windows">{{ $t('tools.csv-to-excel-converter.newlineOptions.windows') }}</option>
                                <option value="unix">{{ $t('tools.csv-to-excel-converter.newlineOptions.unix') }}</option>
                                <option value="mac">{{ $t('tools.csv-to-excel-converter.newlineOptions.mac') }}</option>
                            </select>
                        </div>
                    </div>
                    <label class="inline-flex items-center text-sm gap-2">
                        <input type="checkbox" v-model="csvOptions.header" />
                        {{ $t('tools.csv-to-excel-converter.headerLabel') }}
                    </label>
                </div>

                <!-- Excel 设置 -->
                <div class="space-y-3">
                    <h3 class="font-medium">{{ $t('tools.csv-to-excel-converter.workbookOptions') }}</h3>
                    <div>
                        <label class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.workbookName') }}</label>
                        <input class="form-input w-full" v-model="workbookOptions.workbookName" />
                    </div>
                    <div>
                        <label class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-to-excel-converter.sheetNaming') }}</label>
                        <select class="form-select w-full" v-model="workbookOptions.sheetNaming">
                            <option value="filename">{{ $t('tools.csv-to-excel-converter.sheetNamingOptions.filename') }}</option>
                            <option value="custom">{{ $t('tools.csv-to-excel-converter.sheetNamingOptions.custom') }}</option>
                            <option value="timestamp">{{ $t('tools.csv-to-excel-converter.sheetNamingOptions.timestamp') }}</option>
                        </select>
                        <input v-if="workbookOptions.sheetNaming === 'custom'" class="form-input mt-1"
                            :placeholder="$t('tools.csv-to-excel-converter.customSheetPrefix')" v-model="workbookOptions.customSheetPrefix" />
                    </div>
                    <label class="inline-flex items-center gap-2 text-sm">
                        <input type="checkbox" v-model="workbookOptions.combineWorkbooks" />
                        {{ $t('tools.csv-to-excel-converter.combineWorkbooks') }}
                    </label>
                    <label class="inline-flex items-center gap-2 text-sm">
                        <input type="checkbox" v-model="workbookOptions.includeTimestamp" />
                        {{ $t('tools.csv-to-excel-converter.includeTimestamp') }}
                    </label>
                </div>

                <button class="btn btn-primary w-full" :disabled="!uploadedFiles.length || isConverting" @click="convertAll">
                    <svg v-if="!isConverting" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ isConverting ? $t('tools.csv-to-excel-converter.converting') : $t('tools.csv-to-excel-converter.convertBtn') }}
                </button>

                <div v-if="isConverting" class="space-y-1">
                    <div class="flex justify-between text-sm">
                        <span>{{ $t('tools.csv-to-excel-converter.conversionProgress') }}</span>
                        <span>{{ progress }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" :style="{ width: progress + '%' }"></div>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold">{{ $t('tools.csv-to-excel-converter.outputTitle') }}</h2>
                    <button v-if="convertedFiles.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.csv-to-excel-converter.batchDownload') }}
                    </button>
                </div>

                <div>
                    <button v-if="processLogs.length && !showLog" class="text-sm text-blue-500 hover:text-blue-600" @click="showLog = true">
                        {{ $t('tools.csv-to-excel-converter.showLog') }}
                    </button>
                    <div v-if="showLog" class="space-y-2">
                        <div class="flex justify-between items-center">
                            <h3 class="text-sm font-medium">{{ $t('tools.csv-to-excel-converter.processLog') }}</h3>
                            <div class="flex gap-3 text-xs">
                                <button class="text-blue-500 hover:text-blue-600" @click="copyLog">
                                    {{ $t('tools.csv-to-excel-converter.copyLog') }}
                                </button>
                                <button class="text-gray-500 hover:text-gray-600" @click="showLog = false">
                                    {{ $t('tools.csv-to-excel-converter.hideLog') }}
                                </button>
                            </div>
                        </div>
                        <div class="bg-gray-900 text-green-400 font-mono text-xs rounded-lg p-3 max-h-48 overflow-y-auto">
                            <div v-for="(log, idx) in processLogs" :key="`log-${idx}`">{{ log }}</div>
                        </div>
                    </div>
                </div>

                <div v-if="convertedFiles.length" class="space-y-4 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                    <div v-for="(file, idx) in convertedFiles" :key="`out-${idx}`" class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex-1 min-w-0">
                                <p class="font-semibold truncate">{{ file.name }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.csv-to-excel-converter.fileSize') }}: {{ formatFileSize(file.size) }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.csv-to-excel-converter.sheetCreated') }}: {{ file.sheetCount }}</p>
                            </div>
                            <button class="btn btn-success btn-sm" @click="downloadFile(idx)">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.csv-to-excel-converter.downloadBtn') }}
                            </button>
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-200">
                            <div>{{ $t('tools.csv-to-excel-converter.statsFields.rows') }}: {{ file.stats.rows }}</div>
                            <div>{{ $t('tools.csv-to-excel-converter.statsFields.columns') }}: {{ file.stats.columns }}</div>
                            <div>{{ $t('tools.csv-to-excel-converter.statsFields.encoding') }}: {{ file.encoding.toUpperCase() }}</div>
                            <div>{{ $t('tools.csv-to-excel-converter.statsFields.delimiter') }}: {{ file.delimiterDisplay }}</div>
                        </div>
                        <div v-if="file.preview" class="text-xs bg-white dark:bg-gray-800 rounded p-2 mt-2 max-h-20 overflow-auto font-mono whitespace-pre">
                            <strong>{{ $t('tools.csv-to-excel-converter.previewResult') }}:</strong>
                            {{ file.preview }}
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.csv-to-excel-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <CsvToExcelConverterArticle class="mt-12" />
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Papa from 'papaparse'
import * as XLSX from 'xlsx'
import JSZip from 'jszip'
import CsvToExcelConverterArticle from './CsvToExcelConverterArticle.vue'

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
    autoDetect: true,
    delimiter: 'auto',
    customDelimiter: '',
    qualifier: 'double',
    encoding: 'auto',
    newline: 'auto',
    header: true
})

const workbookOptions = reactive({
    workbookName: 'converted',
    sheetNaming: 'filename',
    customSheetPrefix: 'Sheet',
    combineWorkbooks: true,
    includeTimestamp: true
})

function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files || [])
    files.forEach(file => {
        if (!/\.(csv|tsv|txt)$/i.test(file.name)) return
        ingestFile(file)
    })
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
}

function handleDrop(e) {
    handleFiles(e)
}

async function importFromUrl() {
    if (!urlInput.value.trim()) return
    try {
        addLog(`${t('tools.csv-to-excel-converter.urlImport')}: ${urlInput.value}`)
        const response = await fetch(urlInput.value)
        if (!response.ok) throw new Error('HTTP ' + response.status)
        const blob = await response.blob()
        const fileName = extractFileName(urlInput.value) || 'imported.csv'
        const file = new File([blob], fileName, { type: blob.type })
        await ingestFile(file)
        urlInput.value = ''
    } catch (error) {
        addLog(`${t('tools.csv-to-excel-converter.urlError')}: ${error.message}`)
    }
}

function extractFileName(url) {
    try {
        const pathname = new URL(url).pathname
        const parts = pathname.split('/')
        return parts[parts.length - 1]
    } catch {
        return ''
    }
}

async function ingestFile(file) {
    try {
        const buffer = await file.arrayBuffer()
        const detectedEncoding = csvOptions.autoDetect ? detectEncoding(buffer) : csvOptions.encoding
        const encoding = resolveEncoding(csvOptions.encoding, detectedEncoding)
        const text = decodeBuffer(buffer, encoding)
        const detectedDelimiter = csvOptions.autoDetect ? detectDelimiter(text) : resolveDelimiter(csvOptions.delimiter, csvOptions.customDelimiter)
        const stats = analyzePreview(text, detectedDelimiter, encoding)

        uploadedFiles.value.push({
            file,
            buffer,
            name: file.name,
            size: file.size,
            encoding,
            detectedEncoding,
            delimiter: detectedDelimiter,
            delimiterDisplay: humanizeDelimiter(detectedDelimiter),
            encodingSelection: 'auto',
            delimiterSelection: 'auto',
            customDelimiter: '',
            preview: stats.preview,
            stats,
            sheetName: deriveSheetName(file.name, uploadedFiles.value.length + 1)
        })
        addLog(`${t('tools.csv-to-excel-converter.fileProcessed')}: ${file.name}`)
    } catch (error) {
        addLog(`${file.name}: ${t('tools.csv-to-excel-converter.invalidInput')} - ${error.message}`)
    }
}

function detectEncoding(buffer) {
    const view = new Uint8Array(buffer.slice(0, 4))
    if (view[0] === 0xEF && view[1] === 0xBB && view[2] === 0xBF) return 'utf8bom'
    if (view[0] === 0xFF && view[1] === 0xFE) return 'utf16le'
    return 'utf8'
}

function resolveEncoding(option, detected) {
    if (option && option !== 'auto') return option
    return detected || 'utf8'
}

function decodeBuffer(buffer, encodingOption) {
    const map = {
        utf8: 'utf-8',
        utf8bom: 'utf-8',
        utf16le: 'utf-16le',
        gbk: 'gbk'
    }
    const label = map[encodingOption] || 'utf-8'
    try {
        return new TextDecoder(label).decode(buffer)
    } catch {
        return new TextDecoder('utf-8').decode(buffer)
    }
}

function detectDelimiter(text) {
    const candidates = [',', ';', '\t', '|']
    const lines = text.split(/\r\n|\n|\r/).slice(0, 10)
    const scores = candidates.map(delim => {
        const counts = lines.map(line => (line.match(new RegExp(escapeReg(delim), 'g')) || []).length)
        const avg = counts.reduce((a, b) => a + b, 0) / (counts.length || 1)
        return { delim, avg }
    })
    scores.sort((a, b) => b.avg - a.avg)
    return scores[0]?.delim || ','
}

function escapeReg(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function resolveDelimiter(option, custom) {
    if (option === 'custom') return custom || ','
    if (option === 'comma') return ','
    if (option === 'semicolon') return ';'
    if (option === 'tab') return '\t'
    if (option === 'pipe') return '|'
    return ','
}

function analyzePreview(text, delimiter, encoding) {
    const newline = csvOptions.newline === 'auto' ? '' : newlineMap(csvOptions.newline)
    const qualifier = qualifierMap(csvOptions.qualifier)
    const parsed = Papa.parse(text, {
        delimiter,
        newline,
        quoteChar: qualifier,
        preview: 20,
        skipEmptyLines: false
    })
    const rows = parsed.data.filter(row => row.length)
    const stats = computeStats(rows, encoding, delimiter)
    const preview = rows.slice(0, 6).map(row => row.join(' | ')).join('\n')
    return { preview, stats }
}

function qualifierMap(option) {
    if (option === 'single') return '\''
    if (option === 'none') return ''
    return '"'
}

function newlineMap(option) {
    if (option === 'windows') return '\r\n'
    if (option === 'unix') return '\n'
    if (option === 'mac') return '\r'
    return ''
}

function computeStats(rows, encoding, delimiter) {
    const rowCount = rows.length
    const colCount = rows.reduce((max, row) => Math.max(max, row.length), 0)
    const emptyCells = rows.reduce((sum, row) => sum + row.filter(cell => cell === '').length, 0)
    return {
        rows: rowCount,
        columns: colCount,
        cells: rowCount * colCount,
        emptyCells,
        encoding,
        delimiterDisplay: humanizeDelimiter(delimiter)
    }
}

function humanizeDelimiter(delimiter) {
    if (delimiter === '\t') return 'TAB'
    if (delimiter === ',') return 'COMMA'
    if (delimiter === ';') return 'SEMICOLON'
    if (delimiter === '|') return 'PIPE'
    return delimiter || ','
}

function deriveSheetName(filename, index) {
    const base = filename.replace(/\.[^.]+$/, '') || `Sheet${index}`
    return sanitizeSheetName(base.substring(0, 28) || `Sheet${index}`)
}

function sanitizeSheetName(name) {
    // 移除Excel工作表名称中不允许的特殊字符：\ / ? * [ ] :
    // 同时限制名称长度不超过31个字符
    let cleanName = name.replace(/[\\/?*[\]:]/g, '_')
    // 确保名称不为空
    if (!cleanName || cleanName.trim() === '') {
        cleanName = 'Sheet'
    }
    // Excel工作表名称限制为31个字符
    if (cleanName.length > 31) {
        cleanName = cleanName.substring(0, 31)
    }
    return cleanName
}

function removeFile(idx) {
    uploadedFiles.value.splice(idx, 1)
}

function clearAll() {
    uploadedFiles.value = []
    convertedFiles.value = []
    processLogs.value = []
    progress.value = 0
    isConverting.value = false
}

function recomputeFile(idx) {
    const item = uploadedFiles.value[idx]
    if (!item) return
    const encoding = resolveEncoding(item.encodingSelection, item.detectedEncoding)
    const delimiter = item.delimiterSelection === 'auto'
        ? detectDelimiter(decodeBuffer(item.buffer, encoding))
        : resolveDelimiter(item.delimiterSelection, item.customDelimiter)
    const text = decodeBuffer(item.buffer, encoding)
    const stats = analyzePreview(text, delimiter, encoding)
    item.encoding = encoding
    item.delimiter = delimiter
    item.delimiterDisplay = humanizeDelimiter(delimiter)
    item.preview = stats.preview
    item.stats = stats.stats
}

async function convertAll() {
    if (!uploadedFiles.value.length) return
    isConverting.value = true
    convertedFiles.value = []
    processLogs.value = []
    progress.value = 0

    const total = uploadedFiles.value.length
    let processed = 0
    const combinedWorkbook = workbookOptions.combineWorkbooks ? XLSX.utils.book_new() : null

    for (let i = 0; i < uploadedFiles.value.length; i++) {
        const item = uploadedFiles.value[i]
        try {
            const text = decodeBuffer(item.buffer, item.encoding)
            const delimiter = item.delimiter
            const newline = csvOptions.newline === 'auto' ? '' : newlineMap(csvOptions.newline)
            const qualifier = qualifierMap(csvOptions.qualifier)
            const parsed = Papa.parse(text, {
                delimiter,
                newline,
                quoteChar: qualifier,
                skipEmptyLines: false
            })
            const rows = csvOptions.header ? parsed.data : parsed.data
            const sheetName = buildSheetName(item, i)
            const worksheet = XLSX.utils.aoa_to_sheet(rows)
            const workbook = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)

            const blob = workbookToBlob(workbook)
            convertedFiles.value.push({
                name: buildFileName(item, sheetName),
                sheetCount: 1,
                blob,
                size: blob.size,
                preview: item.preview,
                stats: item.stats,
                delimiterDisplay: item.delimiterDisplay,
                encoding: item.encoding
            })
            addLog(`${t('tools.csv-to-excel-converter.sheetCreated')}: ${sheetName}`)

            if (combinedWorkbook) {
                XLSX.utils.book_append_sheet(combinedWorkbook, worksheet, uniqueSheetName(combinedWorkbook, sheetName))
            }
        } catch (error) {
            addLog(`${item.name}: ${t('tools.csv-to-excel-converter.errorOccurred')} - ${error.message}`)
        }
        processed++
        progress.value = Math.round((processed / total) * 100)
    }

    if (combinedWorkbook) {
        const combinedBlob = workbookToBlob(combinedWorkbook)
        convertedFiles.value.unshift({
            name: combinedFileName(),
            sheetCount: uploadedFiles.value.length,
            blob: combinedBlob,
            size: combinedBlob.size,
            preview: '',
            stats: {
                rows: uploadedFiles.value.reduce((sum, f) => sum + f.stats.rows, 0),
                columns: '-',
                cells: '-',
                emptyCells: '-'
            },
            delimiterDisplay: '-',
            encoding: 'xlsx'
        })
    }

    isConverting.value = false
    progress.value = 100
    addLog(t('tools.csv-to-excel-converter.conversionComplete'))
}

function workbookToBlob(workbook) {
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
}

function buildSheetName(item, index) {
    if (workbookOptions.sheetNaming === 'custom') {
        return sanitizeSheetName(`${workbookOptions.customSheetPrefix || 'Sheet'}${index + 1}`)
    }
    if (workbookOptions.sheetNaming === 'timestamp') {
        // 生成时间戳后缀，但限制总长度在31字符以内（Excel工作表名称限制）
        const baseName = deriveSheetName(item.name, index + 1)
        const timestamp = formatTimestamp()
        // 确保基础名称至少有5个字符，如果太短则至少保留部分时间戳
        const maxBaseLength = Math.max(5, 31 - timestamp.length - 1) // -1 是为了分隔符"_"
        const truncatedBase = baseName.length > maxBaseLength ? baseName.substring(0, maxBaseLength) : baseName
        return sanitizeSheetName(`${truncatedBase}_${timestamp}`)
    }
    return sanitizeSheetName(deriveSheetName(item.name, index + 1))
}

function uniqueSheetName(workbook, desired) {
    // 确保工作表名称不超过31个字符
    let name = sanitizeSheetName(desired)
    let counter = 1
    while (workbook.SheetNames.includes(name)) {
        // 如果添加后缀会导致名称过长，先截短基础名称
        const suffix = `_${counter}`
        const maxBaseLength = Math.max(5, 31 - suffix.length)
        const baseName = name.length > maxBaseLength ? name.substring(0, maxBaseLength) : name
        name = sanitizeSheetName(`${baseName}${suffix}`)
        counter++
    }
    return name
}

function buildFileName(item, sheetName) {
    const base = workbookOptions.workbookName || 'converted'
    const time = workbookOptions.includeTimestamp ? `_${formatTimestamp()}` : ''
    const baseName = item.name.replace(/\.[^.]+$/, '')
    // 避免文件名过长，限制在100字符以内
    const maxBaseLength = Math.max(20, 100 - sheetName.length - time.length - 3) // -3 是为了扩展名".xlsx"和分隔符
    const truncatedBase = baseName.length > maxBaseLength ? baseName.substring(0, maxBaseLength) : baseName
    return `${truncatedBase}_${sheetName}${time}.xlsx`
}

function combinedFileName() {
    const base = workbookOptions.workbookName || 'combined'
    const time = workbookOptions.includeTimestamp ? `_${formatTimestamp()}` : ''
    // 确保合并文件名不会过长
    const maxBaseLength = 100 - time.length - 5 // -5 是为了".xlsx"扩展名
    const truncatedBase = base.length > maxBaseLength ? base.substring(0, maxBaseLength) : base
    return `${truncatedBase}${time}.xlsx`
}

function formatTimestamp() {
    const now = new Date()
    const pad = n => String(n).padStart(2, '0')
    // 使用更短但唯一的时间戳格式：MMDD_HHmmss
    return `${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`
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
    convertedFiles.value.forEach(file => zip.file(file.name, file.blob))
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'csv_to_excel_results.zip'
    a.click()
    URL.revokeObjectURL(url)
}

function formatFileSize(bytes) {
    if (!bytes) return '0 B'
    const units = ['B', 'KB', 'MB', 'GB']
    const index = Math.floor(Math.log(bytes) / Math.log(1024))
    const value = bytes / Math.pow(1024, index)
    return `${value.toFixed(2)} ${units[index]}`
}

function addLog(message) {
    const timestamp = new Date().toLocaleTimeString()
    processLogs.value.push(`[${timestamp}] ${message}`)
    if (processLogs.value.length > 500) processLogs.value.shift()
}

function copyLog() {
    const text = processLogs.value.join('\n')
    navigator.clipboard.writeText(text).then(() => {
        addLog(t('tools.csv-to-excel-converter.logCopied'))
    })
}

function loadSample() {
    const sample = [
        'name,age,city,role',
        'Alice,28,Shanghai,Developer',
        'Bob,32,Beijing,Product Manager',
        'Carol,26,Shenzhen,Designer'
    ].join('\n')
    const blob = new Blob([sample], { type: 'text/csv;charset=utf-8;' })
    const file = new File([blob], 'sample.csv', { type: 'text/csv' })
    ingestFile(file)
    addLog(t('tools.csv-to-excel-converter.sampleLoaded'))
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
    @apply px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.form-select {
    @apply px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500;
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

