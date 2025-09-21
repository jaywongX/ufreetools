<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-to-excel-converter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="application/pdf" multiple
                        @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.pdf-to-excel-converter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-to-excel-converter.supported') }}</span>
                </div>

                <!-- 示例PDF按钮 -->
                <div class="flex justify-between items-center">
                    <button class="btn btn-secondary" @click="loadSamplePDFs">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.pdf-to-excel-converter.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="pdfFiles.length" class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.pdf-to-excel-converter.preview') }} ({{ pdfFiles.length }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearPDFs">
                            {{ $t('tools.pdf-to-excel-converter.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(pdf, idx) in pdfFiles" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <div class="w-full h-24 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div class="p-2">
                                <p class="text-xs truncate">{{ pdf.name }}</p>
                                <p class="text-xs text-gray-500">{{ pdf.pages }} {{
                                    $t('tools.pdf-to-excel-converter.pages')
                                    }}</p>
                            </div>
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removePDF(idx)"
                                    :aria-label="$t('tools.pdf-to-excel-converter.deletePDF')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 转换按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!pdfFiles.length || isConverting"
                    @click="convertAll">
                    <svg v-if="isConverting" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ isConverting ? $t('tools.pdf-to-excel-converter.converting') :
                        $t('tools.pdf-to-excel-converter.convertBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.pdf-to-excel-converter.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <div v-if="excelFiles.length > 1" class="flex gap-2">
                        <button class="btn btn-primary btn-sm" @click="downloadAllXLSX">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.pdf-to-excel-converter.batchDownloadXLSX') }}
                        </button>
                        <button class="btn btn-primary btn-sm" @click="downloadAllCSV">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.pdf-to-excel-converter.batchDownloadCSV') }}
                        </button>
                    </div>
                </div>

                <!-- 转换进度条 -->
                <div v-if="isConverting" class="mb-4">
                    <div class="flex justify-between text-sm mb-1">
                        <span>{{ $t('tools.pdf-to-excel-converter.converting') }}...</span>
                        <span>{{ Math.round(conversionProgress * 100) }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                            :style="{ width: conversionProgress * 100 + '%' }"></div>
                    </div>
                </div>

                <div v-if="excelFiles.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(excel, idx) in excelFiles" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 文件预览 -->
                        <div class="flex items-center mb-4">
                            <div
                                class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mr-3">
                                <svg class="w-6 h-6 text-green-600 dark:text-green-300" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-medium">{{ excel.name }}</h3>
                                <p class="text-sm text-gray-500">{{ excel.pages }} {{
                                    $t('tools.pdf-to-excel-converter.pages') }}</p>
                            </div>
                        </div>

                        <!-- 导出选项 -->
                        <div class="mt-4 space-y-4">
                            <!-- 下载按钮 -->
                            <div class="flex gap-2">
                                <button class="btn btn-success flex-1" @click="downloadXLSX(idx)">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ $t('tools.pdf-to-excel-converter.downloadXLSX') }}
                                </button>
                                <button class="btn btn-success flex-1" @click="downloadCSV(idx)">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ $t('tools.pdf-to-excel-converter.downloadCSV') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.pdf-to-excel-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <PDFToExcelConverterArticle />
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import PDFToExcelConverterArticle from './PDFToExcelConverterArticle.vue'

// PDF.js and XLSX libraries will be loaded dynamically
let pdfjsLib = null
let XLSX = null

const { t } = useI18n()

const fileInput = ref(null)
const pdfFiles = ref([])
const excelFiles = reactive([])
const isDragging = ref(false)
const isConverting = ref(false)
const conversionProgress = ref(0)

// Sample PDF files
const samplePDFs = [
    {
        name: 'sample.pdf',
        url: '/sample.pdf',
        fallbackUrl: 'https://www.ufreetools.com/sample.pdf'
    }
]

// Load PDF.js and XLSX libraries dynamically
async function loadLibraries() {
    if (!pdfjsLib) {
        const pdfjsModule = await import('pdfjs-dist')
        pdfjsLib = pdfjsModule

        // 使用正确的 worker 路径
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`
    }



    if (!XLSX) {
        const xlsxModule = await import('xlsx')
        XLSX = xlsxModule
    }
}

// Load sample PDFs
async function loadSamplePDFs() {
    clearPDFs()
    for (const sample of samplePDFs) {
        try {
            // Try to load local PDF first, fallback to external URL
            let response
            try {
                response = await fetch(sample.url)
                if (!response.ok) throw new Error('Local PDF not found')
            } catch (e) {
                response = await fetch(sample.fallbackUrl)
            }

            const blob = await response.blob()
            const file = new File([blob], sample.name, { type: 'application/pdf' })
            await processPDFFile(file)
        } catch (error) {
            console.error('Failed to load sample PDF:', error)
        }
    }
}

// Handle file upload
async function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    for (const file of files) {
        if (file.type !== 'application/pdf') continue
        await processPDFFile(file)
    }
    isDragging.value = false
}

// Process PDF file to get page count
async function processPDFFile(file) {
    try {
        await loadLibraries()
        const arrayBuffer = await file.arrayBuffer()
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
        const pages = pdf.numPages

        pdfFiles.value.push({
            file,
            name: file.name,
            pages
        })
    } catch (error) {
        console.error('Error processing PDF file:', error)
    }
}

// Handle drag and drop
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// Clear all PDFs
function clearPDFs() {
    pdfFiles.value = []
    excelFiles.splice(0)
}

// Remove single PDF
function removePDF(idx) {
    pdfFiles.value.splice(idx, 1)
}

// Convert all PDFs to Excel
async function convertAll() {
    if (!pdfFiles.value.length) return

    isConverting.value = true
    conversionProgress.value = 0
    excelFiles.splice(0)

    await loadLibraries()

    try {
        const totalFiles = pdfFiles.value.length
        for (let i = 0; i < totalFiles; i++) {
            const pdfFile = pdfFiles.value[i]
            await convertPDFToExcel(pdfFile, i)
            conversionProgress.value = (i + 1) / totalFiles
        }
    } catch (error) {
        console.error('Error converting PDFs:', error)
    } finally {
        isConverting.value = false
        conversionProgress.value = 0
    }
}

// Convert a single PDF to Excel
async function convertPDFToExcel(pdfFile, index) {
    try {
        const arrayBuffer = await pdfFile.file.arrayBuffer()
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

        // Create workbook
        const workbook = XLSX.utils.book_new()

        // Process each page
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum)
            const textContent = await page.getTextContent()

            // Extract text items
            const textItems = textContent.items
                .filter(item => item.str !== undefined)
                .map(item => item.str)
                .filter(str => str.trim() !== '')

            // Convert to worksheet
            if (textItems.length > 0) {
                // Create a simple worksheet with the text
                const worksheetData = textItems.map((text, idx) => [text])
                const worksheet = XLSX.utils.aoa_to_sheet(worksheetData)
                XLSX.utils.book_append_sheet(workbook, worksheet, `Page ${pageNum}`)
            }
        }

        // Add to excelFiles
        excelFiles.push({
            workbook,
            name: pdfFile.name.replace(/\.pdf$/, '.xlsx'),
            pages: pdfFile.pages,
            exportType: 'xlsx'
        })
    } catch (error) {
        console.error('Error converting PDF to Excel:', error)
    }
}

// Download XLSX file
function downloadXLSX(idx) {
    const excelFile = excelFiles[idx]
    const wbout = XLSX.write(excelFile.workbook, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([wbout], { type: 'application/octet-stream' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = excelFile.name
    a.click()
    URL.revokeObjectURL(url)
}

// Download CSV file
function downloadCSV(idx) {
    const excelFile = excelFiles[idx]
    const csv = XLSX.utils.sheet_to_csv(excelFile.workbook.Sheets[excelFile.workbook.SheetNames[0]])
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = excelFile.name.replace(/\.xlsx$/, '.csv')
    a.click()
    URL.revokeObjectURL(url)
}

// Batch download all XLSX files
async function downloadAllXLSX() {
    const zip = new JSZip()

    for (let i = 0; i < excelFiles.length; i++) {
        const excelFile = excelFiles[i]
        const wbout = XLSX.write(excelFile.workbook, { bookType: 'xlsx', type: 'array' })
        const blob = new Blob([wbout], { type: 'application/octet-stream' })
        zip.file(excelFile.name, blob)
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'converted_documents.xlsx.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// Batch download all CSV files
async function downloadAllCSV() {
    const zip = new JSZip()

    for (let i = 0; i < excelFiles.length; i++) {
        const excelFile = excelFiles[i]
        const csv = XLSX.utils.sheet_to_csv(excelFile.workbook.Sheets[excelFile.workbook.SheetNames[0]])
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        zip.file(excelFile.name.replace(/\.xlsx$/, '.csv'), blob)
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'converted_documents.csv.zip'
    a.click()
    URL.revokeObjectURL(url)
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>