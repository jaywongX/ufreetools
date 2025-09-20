<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-to-word-converter.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.pdf-to-word-converter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-to-word-converter.supported') }}</span>
                </div>

                <!-- 库加载状态和示例PDF按钮 -->
                <div class="flex justify-between items-center">
                    <button class="btn btn-secondary" @click="loadSamplePDFs" :disabled="!isLibrariesLoaded">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.pdf-to-word-converter.loadSample') }}
                    </button>

                    <!-- 库加载状态指示器 -->
                    <div class="flex items-center text-sm">
                        <div v-if="!isLibrariesLoaded" class="flex items-center text-yellow-600">
                            <svg class="w-4 h-4 mr-1 animate-spin" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {{ $t('tools.pdf-to-word-converter.loading') }}
                        </div>
                        <div v-else class="flex items-center text-green-600">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            {{ $t('tools.pdf-to-word-converter.ready') }}
                        </div>
                    </div>
                </div>

                <!-- 错误消息显示 -->
                <div v-if="errorMessage"
                    class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-red-700 dark:text-red-300 text-sm">{{ errorMessage }}</span>
                    </div>
                </div>

                <!-- 预览区域 -->
                <div v-if="pdfFiles.length" class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.pdf-to-word-converter.preview') }} ({{ pdfFiles.length }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearPDFs">
                            {{ $t('tools.pdf-to-word-converter.clearAll') }}
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
                                    $t('tools.pdf-to-word-converter.pages')
                                }}</p>
                            </div>
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removePDF(idx)"
                                    :aria-label="$t('tools.pdf-to-word-converter.deletePDF')">
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
                <button class="btn btn-primary w-full mt-4"
                    :disabled="!pdfFiles.length || isConverting || !isLibrariesLoaded" @click="convertAll">
                    <svg v-if="isConverting" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else-if="!isLibrariesLoaded" class="w-5 h-5 mr-2 animate-pulse" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{
                        isConverting ? $t('tools.pdf-to-word-converter.converting') :
                            !isLibrariesLoaded ? $t('tools.pdf-to-word-converter.librariesLoading') :
                                $t('tools.pdf-to-word-converter.convertBtn')
                    }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.pdf-to-word-converter.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="wordFiles.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.pdf-to-word-converter.batchDownload') }}
                    </button>
                </div>

                <!-- 转换进度条 -->
                <div v-if="isConverting" class="mb-4">
                    <div class="flex justify-between text-sm mb-1">
                        <span>{{ $t('tools.pdf-to-word-converter.converting') }}...</span>
                        <span>{{ Math.round(conversionProgress * 100) }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                            :style="{ width: conversionProgress * 100 + '%' }"></div>
                    </div>
                </div>

                <div v-if="wordFiles.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(word, idx) in wordFiles" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 文件预览 -->
                        <div class="flex items-center mb-4">
                            <div
                                class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center mr-3">
                                <svg class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-medium">{{ word.name }}</h3>
                                <p class="text-sm text-gray-500">
                                    {{ word.pages }} {{ $t('tools.pdf-to-word-converter.pages') }}
                                    <span v-if="word.size"> • {{ formatFileSize(word.size) }}</span>
                                </p>
                            </div>
                        </div>

                        <!-- 导出选项 -->
                        <div class="mt-4 space-y-4">
                            <!-- 导出格式选择 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.pdf-to-word-converter.exportFormat') }}
                                </label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="word.exportType" value="docx" class="form-radio">
                                        <span>DOCX</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 下载按钮 -->
                            <div class="flex gap-2">
                                <button class="btn btn-success flex-1" @click="download(idx)">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ $t('tools.pdf-to-word-converter.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.pdf-to-word-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <PDFToWordConverterArticle />
    </div>
</template>

<script setup>

import { Buffer } from 'buffer/';
// 确保在任何库导入之前设置全局Buffer
if (typeof window !== 'undefined') {
    window.Buffer = Buffer;
    // 添加这一行，因为某些库可能检查global.Buffer
    if (typeof global === 'undefined') {
        window.global = window;
    }
}

import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import PDFToWordConverterArticle from './PDFToWordConverterArticle.vue'

// PDF.js and DOCX libraries - 完全本地化
let pdfjsLib = null
let docx = null

const { t } = useI18n()

const fileInput = ref(null)
const pdfFiles = ref([])
const wordFiles = reactive([])
const isDragging = ref(false)
const isConverting = ref(false)
const conversionProgress = ref(0)
const errorMessage = ref('')
const isLibrariesLoaded = ref(false)

// 初始化库
async function initializeLibraries() {
    try {
        // 动态导入 PDF.js
        const pdfjsModule = await import('pdfjs-dist')
        pdfjsLib = pdfjsModule

        // 使用正确的 worker 路径
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`

        // 动态导入 DOCX
        const docxModule = await import('docx')
        docx = docxModule

        isLibrariesLoaded.value = true
        console.log('PDF.js and DOCX libraries loaded successfully')
    } catch (error) {
        console.error('Failed to load libraries:', error)
        errorMessage.value = t('tools.pdf-to-word-converter.libraryLoadFailed')
    }
}


// 组件挂载时初始化库
onMounted(() => {
    initializeLibraries()
})

// 加载示例文件（使用本地 sample.pdf）
async function loadSamplePDFs() {
    if (!isLibrariesLoaded.value) {
        errorMessage.value = t('tools.pdf-to-word-converter.librariesLoading')
        return
    }

    clearPDFs()
    try {
        // 从 public 文件夹加载示例 PDF 文件
        const response = await fetch('/sample.pdf')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const blob = await response.blob()
        const file = new File([blob], t('tools.pdf-to-word-converter.sampleFileName'), { type: 'application/pdf' })

        // 处理示例 PDF 文件
        await processPDFFile(file)
    } catch (error) {
        console.error('Failed to load sample PDF:', error)
        errorMessage.value = t('tools.pdf-to-word-converter.createSampleFailed')
    }
}

// 处理文件上传
async function handleFiles(e) {
    if (!isLibrariesLoaded.value) {
        errorMessage.value = t('tools.pdf-to-word-converter.librariesLoading')
        return
    }

    const files = Array.from(e.target.files || e.dataTransfer.files)
    errorMessage.value = ''

    for (const file of files) {
        if (file.type !== 'application/pdf') {
            console.warn(`Skipping non-PDF file: ${file.name}`)
            continue
        }
        await processPDFFile(file)
    }
    isDragging.value = false
}

// 处理 PDF 文件获取页数
async function processPDFFile(file) {
    try {
        const arrayBuffer = await file.arrayBuffer()
        const pdf = await pdfjsLib.getDocument({
            data: arrayBuffer,
            // 添加错误处理选项
            verbosity: 0,
            cMapUrl: null,
            cMapPacked: false
        }).promise

        const pages = pdf.numPages

        pdfFiles.value.push({
            file,
            name: file.name,
            pages
        })
    } catch (error) {
        console.error('Error processing PDF file:', error)
        errorMessage.value = `${t('tools.pdf-to-word-converter.processingError')} "${file.name}": ${error.message}`
    }
}

// 拖拽处理
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除所有 PDF
function clearPDFs() {
    pdfFiles.value = []
    wordFiles.splice(0)
    errorMessage.value = ''
}

// 移除单个 PDF
function removePDF(idx) {
    pdfFiles.value.splice(idx, 1)
}

// 转换所有 PDF 为 Word
async function convertAll() {
    if (!pdfFiles.value.length || !isLibrariesLoaded.value) return

    isConverting.value = true
    conversionProgress.value = 0
    wordFiles.splice(0)
    errorMessage.value = ''

    try {
        const totalFiles = pdfFiles.value.length
        for (let i = 0; i < totalFiles; i++) {
            const pdfFile = pdfFiles.value[i]
            await convertPDFToWord(pdfFile, i)
            conversionProgress.value = (i + 1) / totalFiles
        }
    } catch (error) {
        console.error('Error converting PDFs:', error)
        errorMessage.value = `${t('tools.pdf-to-word-converter.conversionError')}: ${error.message}`
    } finally {
        isConverting.value = false
        conversionProgress.value = 0
    }
}

// 转换单个 PDF 为 Word
async function convertPDFToWord(pdfFile, index) {
    try {
        const { Document, Paragraph, TextRun, HeadingLevel } = docx

        let sections = []

        // 处理 PDF 文件
        const arrayBuffer = await pdfFile.file.arrayBuffer()
        const pdf = await pdfjsLib.getDocument({
            data: arrayBuffer,
            verbosity: 0
        }).promise

        // 设置页面尺寸和边距
        const pageProperties = {
            page: {
                margin: {
                    top: 1440, // 1 inch in twips
                    right: 1440,
                    bottom: 1440,
                    left: 1440,
                },
            },
        }

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum)
            const textContent = await page.getTextContent()

            // 提取文本项并按位置排序
            const textItems = textContent.items
                .filter(item => item.str && item.str.trim())
                .sort((a, b) => {
                    // 按 Y 坐标排序（从上到下）
                    const yDiff = b.transform[5] - a.transform[5]
                    if (Math.abs(yDiff) > 5) return yDiff > 0 ? 1 : -1
                    // 同一行按 X 坐标排序（从左到右）
                    return a.transform[4] - b.transform[4]
                })

            if (textItems.length > 0) {
                // 将文本项组合成段落
                const paragraphs = []
                let currentParagraph = []
                let lastY = null

                for (const item of textItems) {
                    const currentY = item.transform[5]

                    // 如果 Y 坐标差异较大，开始新段落
                    if (lastY !== null && Math.abs(currentY - lastY) > 10) {
                        if (currentParagraph.length > 0) {
                            const text = currentParagraph.join(' ').trim()
                            if (text) {
                                paragraphs.push(new Paragraph({
                                    children: [new TextRun(text)],
                                    spacing: { after: 200 }
                                }))
                            }
                            currentParagraph = []
                        }
                    }

                    currentParagraph.push(item.str)
                    lastY = currentY
                }

                // 添加最后一个段落
                if (currentParagraph.length > 0) {
                    const text = currentParagraph.join(' ').trim()
                    if (text) {
                        paragraphs.push(new Paragraph({
                            children: [new TextRun(text)],
                            spacing: { after: 200 }
                        }))
                    }
                }

                // 添加页面分隔符（除了最后一页）
                if (pageNum < pdf.numPages) {
                    paragraphs.push(new Paragraph({
                        children: [new TextRun('')],
                        pageBreakBefore: true
                    }))
                }

                sections.push({
                    properties: pageProperties,
                    children: paragraphs
                })
            }
        }

        // 创建 Word 文档
        const doc = new Document({
            sections: sections.length > 0 ? sections : [{
                properties: pageProperties,
                children: [new Paragraph({
                    children: [new TextRun(t('tools.pdf-to-word-converter.noOutput'))]
                })]
            }],
            creator: t('tools.pdf-to-word-converter.name'),
            title: pdfFile.name.replace(/\.pdf$/, ''),
            description: t('tools.pdf-to-word-converter.description')
        })

        // 生成 blob
        const blob = await docx.Packer.toBlob(doc)

        // 添加到结果列表
        wordFiles.push({
            blob,
            name: pdfFile.name.replace(/\.pdf$/, '.docx'),
            pages: pdfFile.pages,
            exportType: 'docx',
            size: blob.size
        })
    } catch (error) {
        console.error('Error converting PDF to Word:', error)
        errorMessage.value = `${t('tools.pdf-to-word-converter.conversionError')} "${pdfFile.name}": ${error.message}`
    }
}

// 下载单个 Word 文件
function download(idx) {
    const wordFile = wordFiles[idx]
    const url = URL.createObjectURL(wordFile.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = wordFile.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

// 批量下载所有 Word 文件
async function downloadAll() {
    if (wordFiles.length === 0) return

    try {
        const zip = new JSZip()

        for (let i = 0; i < wordFiles.length; i++) {
            const wordFile = wordFiles[i];
            // 使用arrayBuffer而不是直接使用blob
            const arrayBuffer = await wordFile.blob.arrayBuffer();
            zip.file(wordFile.name, arrayBuffer, { binary: true });
        }


        const content = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 }
        })

        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = `converted_documents_${new Date().getTime()}.zip`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    } catch (error) {
        console.error('Error creating ZIP file:', error)
        errorMessage.value = `${t('tools.pdf-to-word-converter.zipCreationError')}: ${error.message}`
    }
}

// 格式化文件大小
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
    @apply px-4 py-2 rounded font-semibold shadow transition-all duration-200 flex items-center justify-center;
}

.btn-sm {
    @apply px-3 py-1 text-sm;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

/* 改进的拖拽区域样式 */
.border-dashed {
    transition: all 0.3s ease;
}

.border-dashed:hover {
    @apply border-blue-400 bg-blue-50 dark:bg-blue-900/10;
}

/* 进度条动画 */
.bg-blue-600 {
    transition: width 0.3s ease;
}

/* 错误消息动画 */
.bg-red-50 {
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 文件预览卡片悬停效果 */
.group:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }

    .grid-cols-2 {
        @apply grid-cols-1;
    }
}

/* 加载状态指示器 */
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .5;
    }
}

/* 成功状态指示器 */
.text-green-600 svg {
    animation: checkmark 0.5s ease-in-out;
}

@keyframes checkmark {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>