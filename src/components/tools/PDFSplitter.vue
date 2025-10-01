<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.pdf-splitter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors mb-4"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept=".pdf" multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.pdf-splitter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-splitter.supported') }}</span>
                </div>

                <!-- URL导入 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.urlImport') }}</label>
                    <div class="flex gap-2">
                        <input type="url" v-model="pdfUrl" :placeholder="$t('tools.pdf-splitter.urlPlaceholder')"
                            class="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <button class="btn btn-secondary" @click="loadFromUrl" :disabled="!pdfUrl.trim()">
                            {{ $t('tools.pdf-splitter.loadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 示例按钮 -->
                <button class="btn btn-secondary mb-4" @click="loadSamplePdf">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {{ $t('tools.pdf-splitter.loadSample') }}
                </button>

                <!-- 文件队列 -->
                <div v-if="pdfFiles.length" class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.pdf-splitter.fileQueue') }} ({{ pdfFiles.length }})</h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearFiles">
                            {{ $t('tools.pdf-splitter.clearAll') }}
                        </button>
                    </div>

                    <div class="space-y-3 max-h-[400px] overflow-y-auto">
                        <div v-for="(file, idx) in pdfFiles" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="font-medium truncate flex-1 mr-2">{{ file.name }}</h4>
                                <button class="text-red-500 hover:text-red-600" @click="removeFile(idx)">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                <span>{{ $t('tools.pdf-splitter.fileSize') }}: {{ formatFileSize(file.size) }}</span>
                                <span v-if="file.pageCount" class="ml-4">{{ $t('tools.pdf-splitter.pageCount') }}: {{
                                    file.pageCount }}</span>
                            </div>
                            
                            <!-- 分割模式选择 -->
                            <div class="mb-3">
                                <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.splitMode') }}</label>
                                <select v-model="file.splitMode" class="w-full px-3 py-2 border rounded-md text-sm">
                                    <option value="pages">{{ $t('tools.pdf-splitter.splitByPages') }}</option>
                                    <option value="bookmarks">{{ $t('tools.pdf-splitter.splitByBookmarks') }}</option>
                                    <option value="size">{{ $t('tools.pdf-splitter.splitBySize') }}</option>
                                    <option value="blank">{{ $t('tools.pdf-splitter.splitByBlank') }}</option>
                                </select>
                            </div>

                            <!-- 页面范围设置 -->
                            <div v-if="file.splitMode === 'pages'" class="mb-3">
                                <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.pageRanges') }}</label>
                                <input type="text" v-model="file.pageRanges" 
                                    :placeholder="$t('tools.pdf-splitter.pageRangesPlaceholder')"
                                    class="w-full px-3 py-2 border rounded-md text-sm" />
                                <p class="text-xs text-gray-500 mt-1">{{ $t('tools.pdf-splitter.pageRangesHelp') }}</p>
                            </div>

                            <!-- 缩略图预览 -->
                            <div v-if="file.thumbnails && file.thumbnails.length" class="mt-3">
                                <h5 class="text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.preview') }}</h5>
                                <div class="grid grid-cols-4 gap-2 max-h-32 overflow-y-auto">
                                    <div v-for="(thumb, thumbIdx) in file.thumbnails.slice(0, 8)" :key="thumbIdx"
                                        class="relative">
                                        <img :src="thumb" class="w-full h-16 object-cover rounded border" 
                                            :alt="`Page ${thumbIdx + 1}`" />
                                        <span class="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-1 rounded-tl">
                                            {{ thumbIdx + 1 }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 输出设置 -->
                <div class="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
                    <h3 class="font-medium mb-4">{{ $t('tools.pdf-splitter.outputSettings') }}</h3>
                    
                    <!-- 文件命名规则 -->
                    <div class="mb-4">
                        <h4 class="text-sm font-medium mb-3">{{ $t('tools.pdf-splitter.namingRules') }}</h4>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.nameTemplate') }}</label>
                                <input type="text" v-model="outputSettings.nameTemplate" 
                                    :placeholder="$t('tools.pdf-splitter.nameTemplatePlaceholder')"
                                    class="w-full px-3 py-2 border rounded-md text-sm" />
                                <p class="text-xs text-gray-500 mt-1">{{ $t('tools.pdf-splitter.nameTemplateHelp') }}</p>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="outputSettings.includeOriginalName" 
                                        id="includeOriginalName" class="form-checkbox">
                                    <label for="includeOriginalName" class="text-sm">{{ $t('tools.pdf-splitter.includeOriginalName') }}</label>
                                </div>
                                
                                <div class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="outputSettings.includePageNumbers" 
                                        id="includePageNumbers" class="form-checkbox">
                                    <label for="includePageNumbers" class="text-sm">{{ $t('tools.pdf-splitter.includePageNumbers') }}</label>
                                </div>
                            </div>
                            
                            <!-- <div>
                                <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.numberingStart') }}</label>
                                <input type="number" v-model.number="outputSettings.numberingStart" min="1" 
                                    class="w-full px-3 py-2 border rounded-md text-sm" />
                            </div> -->
                        </div>
                    </div>
                    
                    <!-- 输出格式控制 -->
                    <div class="mb-4">
                        <h4 class="text-sm font-medium mb-3">{{ $t('tools.pdf-splitter.formatControl') }}</h4>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.outputMode') }}</label>
                                <select v-model="outputSettings.outputMode" class="w-full px-3 py-2 border rounded-md text-sm">
                                    <option value="original">{{ $t('tools.pdf-splitter.keepOriginalQuality') }}</option>
                                    <option value="compressed">{{ $t('tools.pdf-splitter.compressOptimize') }}</option>
                                    <option value="custom">{{ $t('tools.pdf-splitter.customSettings') }}</option>
                                </select>
                            </div>
                            
                            <div v-if="outputSettings.outputMode === 'custom'" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.resolution') }}</label>
                                    <select v-model="outputSettings.resolution" class="w-full px-3 py-2 border rounded-md text-sm">
                                        <option value="72">72 DPI</option>
                                        <option value="150">150 DPI</option>
                                        <option value="300">300 DPI</option>
                                        <option value="600">600 DPI</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.imageQuality') }}: {{ Math.round(outputSettings.imageQuality * 100) }}%</label>
                                    <input type="range" min="0.3" max="1" step="0.1" v-model.number="outputSettings.imageQuality" class="w-full" />
                                </div>
                            </div>
                            
                            <div v-if="outputSettings.outputMode === 'compressed'" class="space-y-2">
                                <div>
                                    <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-splitter.compressionLevel') }}: {{ outputSettings.compressionLevel }}</label>
                                    <input type="range" min="1" max="9" step="1" v-model.number="outputSettings.compressionLevel" class="w-full" />
                                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>{{ $t('tools.pdf-splitter.lowCompression') }}</span>
                                        <span>{{ $t('tools.pdf-splitter.highCompression') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 分割按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!pdfFiles.length || isProcessing" @click="splitPdfs">
                    <svg v-if="isProcessing" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ isProcessing ? $t('tools.pdf-splitter.processing') : $t('tools.pdf-splitter.splitBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.pdf-splitter.outputTitle') }}</h2>
                    <button v-if="splitResults.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.pdf-splitter.batchDownload') }}
                    </button>
                </div>

                <div v-if="splitResults.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                    <div v-for="(result, idx) in splitResults" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-medium">{{ result.name }}</h3>
                            <span class="text-sm text-gray-500">{{ result.pageCount }} {{ $t('tools.pdf-splitter.pages') }}</span>
                        </div>

                        <!-- PDF预览 -->
                        <div class="mb-4">
                            <div class="border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700" style="height: 300px;">
                                <div ref="previewContainer" class="w-full h-full overflow-auto" :data-index="idx">
                                    <!-- PDF预览将在这里渲染 -->
                                </div>
                            </div>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="downloadResult(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.pdf-splitter.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.pdf-splitter.noOutput') }}</p>
                </div>
            </div>
        </div>
        
        <PdfSplitterArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import PdfSplitterArticle from './PdfSplitterArticle.vue'

const { t } = useI18n()

// 动态加载的库
let pdfjsLib = null
let PDFDocument = null

// 响应式数据
const fileInput = ref(null)
const pdfFiles = ref([])
const splitResults = reactive([])
const isDragging = ref(false)
const isProcessing = ref(false)
const pdfUrl = ref('')
const previewContainer = ref(null)

// 输出设置
const outputSettings = reactive({
    // 文件命名规则
    nameTemplate: '{original}_{part}',
    includeOriginalName: true,
    includePageNumbers: false,
    numberingStart: 1,
    
    // 输出格式控制
    outputMode: 'original', // original, compressed, custom
    resolution: '150',
    imageQuality: 0.8,
    compressionLevel: 5,
    scaleFactor: 1.0
})

// 初始化库
onMounted(async () => {
    try {
        // 动态加载 PDF.js
        if (!window.pdfjsLib) {
            const script = document.createElement('script')
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
            document.head.appendChild(script)
            
            await new Promise((resolve, reject) => {
                script.onload = resolve
                script.onerror = reject
            })
            
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
        }
        pdfjsLib = window.pdfjsLib

        // 动态加载 pdf-lib
        const { PDFDocument: PDFDoc, degrees, rgb, StandardFonts } = await import('https://cdn.skypack.dev/pdf-lib@1.17.1')
        PDFDocument = PDFDoc
        
        // 加载示例PDF
        loadSamplePdf()
    } catch (error) {
        console.error('Failed to load PDF libraries:', error)
    }
})

// 文件处理
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (file.type === 'application/pdf') {
            addPdfFile(file)
        }
    })
    isDragging.value = false
}

function handleDrop(e) {
    handleFiles(e)
}

async function addPdfFile(file) {
    const pdfFile = {
        file,
        name: file.name,
        size: file.size,
        pageCount: 0,
        splitMode: 'pages',
        pageRanges: '',
        thumbnails: [],
        url: URL.createObjectURL(file)
    }

    try {
        // 获取页数和生成缩略图
        const arrayBuffer = await file.arrayBuffer()
        const loadingTask = pdfjsLib.getDocument(arrayBuffer)
        const pdf = await loadingTask.promise
        
        pdfFile.pageCount = pdf.numPages
        // 默认将每一页拆分为一份：生成 "1,2,...,N"
        pdfFile.pageRanges = Array.from({ length: pdf.numPages }, (_, i) => String(i + 1)).join(',')
        
        // 生成前几页的缩略图
        const maxThumbs = Math.min(8, pdf.numPages)
        for (let i = 1; i <= maxThumbs; i++) {
            const page = await pdf.getPage(i)
            const viewport = page.getViewport({ scale: 0.3 })
            
            const canvas = document.createElement('canvas')
            canvas.width = viewport.width
            canvas.height = viewport.height
            
            const context = canvas.getContext('2d')
            await page.render({ canvasContext: context, viewport }).promise
            
            pdfFile.thumbnails.push(canvas.toDataURL())
        }
    } catch (error) {
        console.error('Error processing PDF:', error)
    }

    pdfFiles.value.push(pdfFile)
}

async function loadFromUrl() {
    if (!pdfUrl.value.trim()) return
    
    try {
        const response = await fetch(pdfUrl.value)
        const blob = await response.blob()
        const file = new File([blob], 'downloaded.pdf', { type: 'application/pdf' })
        await addPdfFile(file)
        pdfUrl.value = ''
    } catch (error) {
        console.error('Error loading PDF from URL:', error)
        alert(t('tools.pdf-splitter.urlError'))
    }
}

async function loadSamplePdf() {
    try {
        // 尝试从 public 目录加载示例PDF
        const response = await fetch('/sample.pdf')
        if (response.ok) {
            const blob = await response.blob()
            const file = new File([blob], 'sample.pdf', { type: 'application/pdf' })
            await addPdfFile(file)
            return
        }
    } catch (error) {
        console.warn('Could not load sample.pdf from public directory, creating fallback:', error)
    }
    
    try {
        // 如果无法加载示例文件，创建一个示例PDF
        const pdfDoc = await PDFDocument.create()
        
        // 添加几页示例内容
        for (let i = 1; i <= 10; i++) {
            const page = pdfDoc.addPage([595, 842]) // A4 size
            const { width, height } = page.getSize()
            
            page.drawText(`Sample Page ${i}`, {
                x: 50,
                y: height - 100,
                size: 24
            })
            
            page.drawText(`This is page ${i} of the sample PDF document.`, {
                x: 50,
                y: height - 150,
                size: 12
            })
            
            page.drawText(`You can use this sample to test the PDF splitting functionality.`, {
                x: 50,
                y: height - 180,
                size: 12
            })
        }
        
        const pdfBytes = await pdfDoc.save()
        const blob = new Blob([pdfBytes], { type: 'application/pdf' })
        const file = new File([blob], 'sample.pdf', { type: 'application/pdf' })
        
        await addPdfFile(file)
    } catch (error) {
        console.error('Error creating sample PDF:', error)
    }
}

function removeFile(idx) {
    URL.revokeObjectURL(pdfFiles.value[idx].url)
    pdfFiles.value.splice(idx, 1)
}

function clearFiles() {
    pdfFiles.value.forEach(file => URL.revokeObjectURL(file.url))
    pdfFiles.value = []
    splitResults.splice(0)
}

// 分割功能
async function splitPdfs() {
    if (!PDFDocument || !pdfFiles.value.length) return
    
    isProcessing.value = true
    splitResults.splice(0)
    
    try {
        for (const pdfFile of pdfFiles.value) {
            await splitSinglePdf(pdfFile)
        }
    } catch (error) {
        console.error('Error splitting PDFs:', error)
        alert(t('tools.pdf-splitter.splitError'))
    } finally {
        isProcessing.value = false
    }
}

async function splitSinglePdf(pdfFile) {
    // 统一使用 Uint8Array，避免后续传递 ArrayBuffer 导致 detached 问题
    const srcBytes = new Uint8Array(await pdfFile.file.arrayBuffer())
    const pdfDoc = await PDFDocument.load(srcBytes)
    const totalPages = pdfDoc.getPageCount()
    
    let ranges = []
    
    switch (pdfFile.splitMode) {
        case 'pages':
            ranges = parsePageRanges(pdfFile.pageRanges, totalPages)
            break
        case 'bookmarks':
            ranges = await getBookmarkRanges(pdfDoc)
            break
        case 'size':
            ranges = getSizeBasedRanges(totalPages)
            break
        case 'blank':
            ranges = await getBlankPageRanges(pdfFile.file, totalPages)
            break
    }
    
    for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i]
        let pdfBytes
        
        if (outputSettings.outputMode === 'original') {
            // 原始模式：直接复制页面
            const newPdf = await PDFDocument.create()
            const pages = await newPdf.copyPages(pdfDoc, range.pages)
            pages.forEach(page => newPdf.addPage(page))
            pdfBytes = await newPdf.save()
        } else {
            // 压缩/自定义模式：将页面以指定分辨率和质量栅格化为 JPEG，再重建 PDF
            const dpi = outputSettings.outputMode === 'custom'
                ? parseInt(outputSettings.resolution, 10) || 150
                : mapCompressionToDpi(outputSettings.compressionLevel)
            const quality = outputSettings.outputMode === 'custom'
                ? Math.min(1, Math.max(0.3, outputSettings.imageQuality || 0.8))
                : mapCompressionToJpegQuality(outputSettings.compressionLevel)
            
            pdfBytes = await rebuildPdfWithRasterization(srcBytes, range.pages, dpi, quality)
        }
        
        const blob = new Blob([pdfBytes], { type: 'application/pdf' })
        const url = URL.createObjectURL(blob)
        
        // 生成文件名
        const fileName = generateFileName(pdfFile.name, i + 1, range)
        
        splitResults.push({
            name: fileName,
            blob,
            url,
            pageCount: range.pages.length
        })
    }
    
    // 渲染预览
    await nextTick()
    await renderPreviews()
}

function parsePageRanges(rangeStr, totalPages) {
    const ranges = []
    const parts = rangeStr.split(',')
    
    for (const part of parts) {
        const trimmed = part.trim()
        if (trimmed.includes('-')) {
            const [start, end] = trimmed.split('-').map(n => parseInt(n.trim()))
            if (start && end && start <= totalPages && end <= totalPages && start <= end) {
                const pages = []
                for (let i = start - 1; i < end; i++) {
                    pages.push(i)
                }
                ranges.push({ pages })
            }
        } else {
            const pageNum = parseInt(trimmed)
            if (pageNum && pageNum <= totalPages) {
                ranges.push({ pages: [pageNum - 1] })
            }
        }
    }
    
    return ranges
}

// 将 PDF 某些页面以栅格方式重建，支持 DPI 与 JPEG 质量控制
async function rebuildPdfWithRasterization(srcBytes, pageIndices, dpi, quality) {
    // 使用 data 形式传入，并拷贝一份，防止传入 detached 的缓冲区
    const loadingTask = pdfjsLib.getDocument({ data: srcBytes.slice(0) })
    const pdfSrc = await loadingTask.promise
    
    const target = await PDFDocument.create()
    
    // DPI 到缩放比例：pdf.js 的 1.0 scale 约等于 72 DPI
    const scale = Math.max(0.1, (dpi || 150) / 72)
    const jpegQuality = Math.min(1, Math.max(0.3, quality || 0.8))
    
    for (const idx of pageIndices) {
        const page = await pdfSrc.getPage(idx + 1)
        const viewport = page.getViewport({ scale })
        
        const canvas = document.createElement('canvas')
        canvas.width = Math.max(1, Math.floor(viewport.width))
        canvas.height = Math.max(1, Math.floor(viewport.height))
        const ctx = canvas.getContext('2d', { willReadFrequently: false })
        await page.render({ canvasContext: ctx, viewport }).promise
        
        // 导出为 JPEG，受 quality 影响
        const dataUrl = canvas.toDataURL('image/jpeg', jpegQuality)
        const bytes = dataURLToUint8Array(dataUrl)
        
        const embedded = await target.embedJpg(bytes)
        const pdfPage = target.addPage([canvas.width, canvas.height])
        pdfPage.drawImage(embedded, {
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height
        })
    }
    
    const outBytes = await target.save({
        useObjectStreams: true,
        addDefaultPage: false
    })
    return outBytes
}

// 将 dataURL 转换为 Uint8Array
function dataURLToUint8Array(dataURL) {
    const base64 = dataURL.split(',')[1]
    const binary = atob(base64)
    const len = binary.length
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i)
    return bytes
}

// 将压缩级别映射到合适的 DPI（数值越低体积越小）
function mapCompressionToDpi(level) {
    const lv = Math.min(9, Math.max(1, parseInt(level || 5, 10)))
    // 1..9 -> 高..低 DPI
    const table = { 1: 300, 2: 240, 3: 200, 4: 180, 5: 150, 6: 120, 7: 96, 8: 84, 9: 72 }
    return table[lv] || 150
}

// 将压缩级别映射到 JPEG 质量
function mapCompressionToJpegQuality(level) {
    const lv = Math.min(9, Math.max(1, parseInt(level || 5, 10)))
    // 1..9 -> 高..低 质量
    const table = { 1: 0.95, 2: 0.9, 3: 0.85, 4: 0.8, 5: 0.75, 6: 0.7, 7: 0.65, 8: 0.6, 9: 0.5 }
    return table[lv] || 0.75
}

async function getBookmarkRanges(pdfDoc) {
    // 简化实现：按每5页分割
    const totalPages = pdfDoc.getPageCount()
    const ranges = []
    
    for (let i = 0; i < totalPages; i += 5) {
        const pages = []
        for (let j = i; j < Math.min(i + 5, totalPages); j++) {
            pages.push(j)
        }
        ranges.push({ pages })
    }
    
    return ranges
}

function getSizeBasedRanges(totalPages) {
    // 按页面大小分组（简化实现：每3页一组）
    const ranges = []
    
    for (let i = 0; i < totalPages; i += 3) {
        const pages = []
        for (let j = i; j < Math.min(i + 3, totalPages); j++) {
            pages.push(j)
        }
        ranges.push({ pages })
    }
    
    return ranges
}

async function getBlankPageRanges(file, totalPages) {
    // 简化实现：假设没有空白页，按每2页分割
    const ranges = []
    
    for (let i = 0; i < totalPages; i += 2) {
        const pages = []
        for (let j = i; j < Math.min(i + 2, totalPages); j++) {
            pages.push(j)
        }
        ranges.push({ pages })
    }
    
    return ranges
}

async function renderPreviews() {
    if (!pdfjsLib) return
    
    for (let i = 0; i < splitResults.length; i++) {
        const result = splitResults[i]
        const container = document.querySelector(`[data-index="${i}"]`)
        
        if (!container) continue
        
        try {
            const loadingTask = pdfjsLib.getDocument(result.url)
            const pdf = await loadingTask.promise
            
            container.innerHTML = ''
            
            // 渲染所有页面，容器可滚动
            const scale = 0.8
            for (let p = 1; p <= pdf.numPages; p++) {
                const page = await pdf.getPage(p)
                const viewport = page.getViewport({ scale })
                
                const canvas = document.createElement('canvas')
                canvas.width = viewport.width
                canvas.height = viewport.height
                canvas.className = 'w-full h-auto block'
                
                const context = canvas.getContext('2d')
                await page.render({ canvasContext: context, viewport }).promise
                container.appendChild(canvas)
            }
        } catch (error) {
            console.error('Error rendering preview:', error)
        }
    }
}

// 下载功能
function downloadResult(idx) {
    const result = splitResults[idx]
    const url = URL.createObjectURL(result.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = result.name
    a.click()
    URL.revokeObjectURL(url)
}

async function downloadAll() {
    const zip = new JSZip()
    
    for (const result of splitResults) {
        zip.file(result.name, result.blob)
    }
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'split_pdfs.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 生成文件名
function generateFileName(originalName, partNumber, range) {
    const baseName = originalName.replace('.pdf', '')
    let template = outputSettings.nameTemplate
    
    // 替换模板变量
    template = template.replace('{original}', outputSettings.includeOriginalName ? baseName : 'document')
    template = template.replace('{part}', `part${partNumber.toString().padStart(2, '0')}`)
    template = template.replace('{index}', (outputSettings.numberingStart + partNumber - 1).toString())
    
    // 添加页码信息
    if (outputSettings.includePageNumbers && range.pages.length > 0) {
        const startPage = range.pages[0] + 1
        const endPage = range.pages[range.pages.length - 1] + 1
        if (startPage === endPage) {
            template += `_page${startPage}`
        } else {
            template += `_pages${startPage}-${endPage}`
        }
    }
    
    return template + '.pdf'
}

// 工具函数
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
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

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
}

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }
}
</style>