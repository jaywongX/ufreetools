<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-to-word-converter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="$refs.fileInput.click()"
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

                <!-- 示例PDF按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSamplePDF" :disabled="!isLibrariesLoaded">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.pdf-to-word-converter.loadSample') }}
                    </button>

                    <!-- 库加载状态 -->
                    <div class="flex items-center text-sm">
                        <div v-if="!isLibrariesLoaded" class="flex items-center text-yellow-600">
                            <svg class="w-4 h-4 mr-1 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {{ $t('tools.pdf-to-word-converter.loading') }}
                        </div>
                        <div v-else class="flex items-center text-green-600">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {{ $t('tools.pdf-to-word-converter.ready') }}
                        </div>
                    </div>
                </div>

                <!-- 错误消息 -->
                <div v-if="errorMessage" class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-red-700 dark:text-red-300 text-sm">{{ errorMessage }}</span>
                    </div>
                </div>

                <!-- PDF 文件列表 -->
                <div v-if="pdfFiles.length" class="mt-4 space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.pdf-to-word-converter.preview') }} ({{ pdfFiles.length }})</h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearPDFs">
                            {{ $t('tools.pdf-to-word-converter.clearAll') }}
                        </button>
                    </div>

                    <div class="space-y-3 max-h-[500px] overflow-y-auto p-1">
                        <div v-for="(pdf, idx) in pdfFiles" :key="idx" class="border rounded-lg p-3 bg-gray-50 dark:bg-gray-700/50">
                            <div class="flex items-start justify-between">
                                <div class="flex-1 mr-3">
                                    <p class="text-sm font-medium truncate">{{ pdf.name }}</p>
                                    <div class="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                        <span>{{ formatFileSize(pdf.file.size) }}</span>
                                        <span>{{ pdf.pages }} {{ $t('tools.pdf-to-word-converter.pages') }}</span>
                                    </div>

                                    <!-- PDF 类型检测 -->
                                    <div v-if="pdf.detection" class="mt-2 space-y-2">
                                        <div class="flex items-center gap-2">
                                            <span class="text-xs font-medium">{{ $t('tools.pdf-to-word-converter.pdfType') }}:</span>
                                            <span class="px-2 py-0.5 rounded text-xs" :class="getPDFTypeClass(pdf.detection.type)">
                                                {{ $t(`tools.pdf-to-word-converter.pdfTypes.${pdf.detection.type}`) }}
                                            </span>
                                            <span class="text-xs text-gray-500">({{ Math.round(pdf.detection.confidence * 100) }}%)</span>
                                        </div>

                                        <!-- 转换模式选择 -->
                                        <div class="space-y-1">
                                            <label class="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {{ $t('tools.pdf-to-word-converter.conversionMode') }}:
                                            </label>
                                            <div class="flex flex-wrap gap-2">
                                                <label class="flex items-center text-xs cursor-pointer">
                                                    <input type="radio" :name="`mode-${idx}`" v-model="pdf.mode" value="editable" class="mr-1">
                                                    <span>{{ $t('tools.pdf-to-word-converter.modes.editable') }}</span>
                                                </label>
                                                <label class="flex items-center text-xs cursor-pointer">
                                                    <input type="radio" :name="`mode-${idx}`" v-model="pdf.mode" value="layout" class="mr-1">
                                                    <span>{{ $t('tools.pdf-to-word-converter.modes.layout') }}</span>
                                                </label>
                                                <label class="flex items-center text-xs cursor-pointer">
                                                    <input type="radio" :name="`mode-${idx}`" v-model="pdf.mode" value="ocr" class="mr-1">
                                                    <span>{{ $t('tools.pdf-to-word-converter.modes.ocr') }}</span>
                                                </label>
                                            </div>
                                            <p v-if="pdf.recommendedMode === pdf.mode" class="text-xs text-green-600">
                                                ✓ {{ $t('tools.pdf-to-word-converter.recommendedMode') }}
                                            </p>
                                        </div>
                                    </div>

                                    <!-- 检测中 -->
                                    <div v-else class="mt-2 flex items-center text-xs text-gray-500">
                                        <svg class="w-3 h-3 mr-1 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        {{ $t('tools.pdf-to-word-converter.detecting') }}
                                    </div>
                                </div>

                                <!-- 删除按钮 -->
                                <button @click="removePDF(idx)" class="text-red-500 hover:text-red-600">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>

                            <!-- 转换进度 -->
                            <div v-if="pdf.converting" class="mt-3">
                                <div class="flex justify-between text-xs mb-1">
                                    <span>{{ pdf.statusText || $t('tools.pdf-to-word-converter.converting') }}</span>
                                    <span>{{ pdf.progress }}%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5">
                                    <div class="bg-blue-600 h-1.5 rounded-full transition-all" :style="{ width: pdf.progress + '%' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 转换按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!canConvert" @click="convertAll">
                    <svg v-if="isConverting" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ isConverting ? $t('tools.pdf-to-word-converter.converting') : $t('tools.pdf-to-word-converter.convertBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.pdf-to-word-converter.outputTitle') }}</h2>
                    <button v-if="wordFiles.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.pdf-to-word-converter.batchDownload') }}
                    </button>
                </div>

                <!-- 总体进度 -->
                <div v-if="isConverting && totalProgress > 0" class="mb-4">
                    <div class="flex justify-between text-sm mb-1">
                        <span>{{ $t('tools.pdf-to-word-converter.totalProgress') }}</span>
                        <span>{{ Math.round(totalProgress * 100) }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-blue-600 h-2.5 rounded-full transition-all" :style="{ width: totalProgress * 100 + '%' }"></div>
                    </div>
                </div>

                <div v-if="wordFiles.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(word, idx) in wordFiles" :key="idx" class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <div class="flex items-center mb-3">
                            <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center mr-3">
                                <svg class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-medium text-sm">{{ word.name }}</h3>
                                <p class="text-xs text-gray-500">{{ formatFileSize(word.size) }}</p>
                            </div>
                        </div>

                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.pdf-to-word-converter.downloadBtn') }}
                        </button>
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
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import { detectPDFType, convertPDFToWord, recommendMode, ConversionMode } from '../../utils/pdfToWordCore.js'
import PDFToWordConverterArticle from './PDFToWordConverterArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const pdfFiles = ref([])
const wordFiles = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const totalProgress = ref(0)
const errorMessage = ref('')
const isLibrariesLoaded = ref(false)

// 计算属性：是否可以转换
const canConvert = computed(() => {
    return isLibrariesLoaded.value &&
           pdfFiles.value.length > 0 &&
           !isConverting.value &&
           pdfFiles.value.every(pdf => pdf.detection)
})

onMounted(async () => {
    // 库在 pdfToWordCore 模块中已初始化
    isLibrariesLoaded.value = true
})

// 加载示例 PDF
async function loadSamplePDF() {
    if (!isLibrariesLoaded.value) return
    clearPDFs()
    errorMessage.value = ''

    try {
        const response = await fetch('/sample.pdf')
        if (!response.ok) throw new Error('Failed to load sample PDF')
        const blob = await response.blob()
        const file = new File([blob], t('tools.pdf-to-word-converter.sampleFileName'), { type: 'application/pdf' })
        await processPDFFile(file)
    } catch (error) {
        console.error('Failed to load sample:', error)
        errorMessage.value = t('tools.pdf-to-word-converter.createSampleFailed')
    }
}

// 处理文件上传
async function handleFiles(e) {
    if (!isLibrariesLoaded.value) {
        errorMessage.value = t('tools.pdf-to-word-converter.librariesLoading')
        return
    }

    const files = Array.from(e.target.files || [])
    errorMessage.value = ''

    for (const file of files) {
        if (file.type !== 'application/pdf') continue
        await processPDFFile(file)
    }
    isDragging.value = false
}

// 处理 PDF 文件并检测类型
async function processPDFFile(file) {
    const pdfItem = {
        file,
        name: file.name,
        pages: 0,
        detection: null,
        mode: null,
        recommendedMode: null,
        converting: false,
        progress: 0,
        statusText: ''
    }

    pdfFiles.value.push(pdfItem)
    const idx = pdfFiles.value.length - 1

    try {
        const arrayBuffer = await file.arrayBuffer()

        // 检测 PDF 类型
        const detection = await detectPDFType(arrayBuffer)

        // 使用 Vue 响应式更新
        pdfFiles.value[idx].detection = detection
        pdfFiles.value[idx].pages = detection.numPages
        pdfFiles.value[idx].recommendedMode = recommendMode(detection)
        pdfFiles.value[idx].mode = pdfFiles.value[idx].recommendedMode

    } catch (error) {
        console.error('Error processing PDF:', error)
        errorMessage.value = `${t('tools.pdf-to-word-converter.processingError')}: ${error.message}`

        // 出错时从列表中移除
        if (!pdfFiles.value[idx].detection) {
            pdfFiles.value.splice(idx, 1)
        }
    }
}

function handleDrop(e) {
    handleFiles(e)
}

function clearPDFs() {
    pdfFiles.value = []
    wordFiles.value = []
    errorMessage.value = ''
}

function removePDF(idx) {
    pdfFiles.value.splice(idx, 1)
}

// 转换所有 PDF
async function convertAll() {
    if (!canConvert.value) return

    isConverting.value = true
    totalProgress.value = 0
    wordFiles.value = []
    errorMessage.value = ''

    try {
        const total = pdfFiles.value.length
        for (let i = 0; i < total; i++) {
            const pdfItem = pdfFiles.value[i]
            pdfItem.converting = true
            pdfItem.progress = 0

            await convertSinglePDF(pdfItem, i)

            pdfItem.converting = false
            pdfItem.progress = 100
            totalProgress.value = (i + 1) / total
        }
    } catch (error) {
        console.error('Conversion error:', error)
        errorMessage.value = `${t('tools.pdf-to-word-converter.conversionError')}: ${error.message}`
    } finally {
        isConverting.value = false
        totalProgress.value = 0
    }
}

// 转换单个 PDF
async function convertSinglePDF(pdfItem, index) {
    try {
        const progressCallback = (pageNum, totalPages) => {
            pdfFiles.value[index].progress = Math.round((pageNum / totalPages) * 100)
            pdfFiles.value[index].statusText = `${t('tools.pdf-to-word-converter.processingPage')} ${pageNum}/${totalPages}`
        }

        const { docData, pages } = await convertPDFToWord(
            pdfItem.file,
            pdfItem.mode,
            progressCallback,
            null
        )

        // 使用 npm 安装的 docx 库生成文档
        const { Document, Paragraph, TextRun, Packer, convertInchesToTwip } = await import('docx')

        // 构建段落
        const paragraphs = []
        docData.pages.forEach(item => {
            if (item.pageBreakBefore) {
                paragraphs.push(
                    new Paragraph({
                        text: '',
                        pageBreakBefore: true
                    })
                )
            }
            if (item.text && item.text.trim()) {
                paragraphs.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: item.text,
                                font: 'Arial'
                            })
                        ],
                        spacing: {
                            after: 100
                        }
                    })
                )
            }
        })

        // 创建文档
        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: convertInchesToTwip(1),
                            right: convertInchesToTwip(1),
                            bottom: convertInchesToTwip(1),
                            left: convertInchesToTwip(1)
                        }
                    }
                },
                children: paragraphs
            }]
        })

        // 生成 blob
        const blob = await Packer.toBlob(doc)

        wordFiles.value.push({
            blob,
            name: pdfItem.name.replace(/\.pdf$/i, '.docx'),
            pages: pdfItem.pages,
            size: blob.size,
            mode: pdfItem.mode
        })

    } catch (error) {
        console.error('Error converting PDF:', error)
        throw error
    }
}

// 下载单个文件
function download(idx) {
    const word = wordFiles.value[idx]
    const url = URL.createObjectURL(word.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = word.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

// 批量下载
async function downloadAll() {
    if (wordFiles.value.length === 0) return

    try {
        const zip = new JSZip()

        for (const word of wordFiles.value) {
            const arrayBuffer = await word.blob.arrayBuffer()
            zip.file(word.name, arrayBuffer, { binary: true })
        }

        const content = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 }
        })

        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = `pdf_to_word_${Date.now()}.zip`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    } catch (error) {
        console.error('Error creating ZIP:', error)
        errorMessage.value = `${t('tools.pdf-to-word-converter.zipCreationError')}: ${error.message}`
    }
}

// PDF 类型样式
function getPDFTypeClass(type) {
    const classes = {
        text: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        scanned: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
        mixed: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    }
    return classes[type] || 'bg-gray-100 text-gray-800'
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (!bytes) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
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

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>