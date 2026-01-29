<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-rotator.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="application/pdf"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.pdf-rotator.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-rotator.supported') }}</span>
                </div>

                <!-- 示例PDF按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSamplePdf">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.pdf-rotator.loadSample') }}
                    </button>
                </div>

                <!-- PDF列表和设置 -->
                <div v-if="pdfFiles.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.pdf-rotator.preview') }} ({{ pdfFiles.length }})</h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearAll">
                            {{ $t('tools.pdf-rotator.clearAll') }}
                        </button>
                    </div>

                    <div class="space-y-4 max-h-[600px] overflow-y-auto p-1">
                        <div v-for="(pdf, idx) in pdfFiles" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                            <!-- PDF信息 -->
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium truncate">{{ pdf.name }}</p>
                                    <p class="text-xs text-gray-500">{{ pdf.pageCount }} {{ $t('tools.pdf-rotator.pages') }}</p>
                                </div>
                                <button class="text-red-500 hover:text-red-600 ml-2" @click="removePdf(idx)"
                                    :aria-label="$t('tools.pdf-rotator.deletePdf')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>

                            <!-- 旋转角度选择 -->
                            <div class="mb-3">
                                <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-rotator.rotationAngle') }}</label>
                                <div class="flex flex-wrap gap-2">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" :value="90" v-model="pdf.rotationAngle" class="form-radio">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.rotate90') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" :value="180" v-model="pdf.rotationAngle" class="form-radio">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.rotate180') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" :value="270" v-model="pdf.rotationAngle" class="form-radio">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.rotate270') }}</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 页面范围选择 -->
                            <div class="mb-3">
                                <label class="block text-sm font-medium mb-2">{{ $t('tools.pdf-rotator.pageRange') }}</label>
                                <div class="space-y-2">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" value="all" v-model="pdf.pageRangeType" class="form-radio">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.allPages') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" value="range" v-model="pdf.pageRangeType" class="form-radio">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.selectPages') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" value="odd" v-model="pdf.pageRangeType" class="form-radio">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.oddPages') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" value="even" v-model="pdf.pageRangeType" class="form-radio">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.evenPages') }}</span>
                                    </label>
                                    <div v-if="pdf.pageRangeType === 'range'" class="flex items-center space-x-2 ml-6">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.pageFrom') }}</span>
                                        <input type="number" v-model.number="pdf.pageFrom" min="1" :max="pdf.pageCount"
                                            class="w-20 px-2 py-1 border rounded text-sm dark:bg-gray-700 dark:text-white">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.pageTo') }}</span>
                                        <input type="number" v-model.number="pdf.pageTo" min="1" :max="pdf.pageCount"
                                            class="w-20 px-2 py-1 border rounded text-sm dark:bg-gray-700 dark:text-white">
                                        <span class="text-sm">{{ $t('tools.pdf-rotator.page') }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- 预览第一页 -->
                            <div v-if="pdf.previewUrl" class="mt-3">
                                <img :src="pdf.previewUrl" :alt="`${$t('tools.pdf-rotator.originalPdf')} ${idx + 1}`"
                                    class="w-full h-32 object-contain border rounded bg-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!pdfFiles.length || processing"
                    @click="rotateAll">
                    <svg v-if="!processing" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="processing">{{ $t('tools.pdf-rotator.processing') }}</span>
                    <span v-else>{{ $t('tools.pdf-rotator.rotateBtn') }}</span>
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.pdf-rotator.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="rotatedPdfs.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.pdf-rotator.batchDownload') }}
                    </button>
                </div>

                <div v-if="rotatedPdfs.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(pdf, idx) in rotatedPdfs" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- PDF信息 -->
                        <div class="mb-3">
                            <p class="font-medium">{{ pdf.name }}</p>
                            <p class="text-sm text-gray-500">{{ pdf.pageCount }} {{ $t('tools.pdf-rotator.pages') }}</p>
                        </div>

                        <!-- PDF预览 -->
                        <div class="relative group mb-4">
                            <div class="border rounded overflow-hidden bg-gray-100 dark:bg-gray-700"
                                :ref="el => { if (el) previewContainers[idx] = el }">
                                <canvas :ref="el => setCanvasRef(el, idx)" 
                                    class="w-full max-h-[400px] object-contain"
                                    @wheel="handleZoom($event, idx)"></canvas>
                            </div>
                            
                            <!-- 页面导航 -->
                            <div class="flex items-center justify-between mt-2">
                                <button class="btn btn-secondary btn-sm" @click="previousPage(idx)"
                                    :disabled="pdf.currentPage <= 1">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 19l-7-7 7-7" />
                                    </svg>
                                    {{ $t('tools.pdf-rotator.previousPage') }}
                                </button>
                                <span class="text-sm">
                                    {{ $t('tools.pdf-rotator.currentPage') }} {{ pdf.currentPage }} {{ $t('tools.pdf-rotator.of') }} {{ pdf.pageCount }}
                                </span>
                                <button class="btn btn-secondary btn-sm" @click="nextPage(idx)"
                                    :disabled="pdf.currentPage >= pdf.pageCount">
                                    {{ $t('tools.pdf-rotator.nextPage') }}
                                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.pdf-rotator.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.pdf-rotator.noOutput') }}</p>
                </div>
            </div>
        </div>
        <PdfRotatorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, markRaw } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import PdfRotatorArticle from './PdfRotatorArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const pdfFiles = reactive([])
const rotatedPdfs = reactive([])
const isDragging = ref(false)
const processing = ref(false)
const previewContainers = reactive([])
const canvasRefs = ref([])
const pdfjsLib = ref(null)

// PDF预览状态
const previewStates = reactive([])

// 初始化PDF.js库
async function initialize() {
    if (window.pdfjsLib) {
        pdfjsLib.value = window.pdfjsLib
        return
    }

    // 使用CDN加载PDF.js
    const pdfjsScript = document.createElement('script')
    pdfjsScript.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js'
    pdfjsScript.async = true

    await new Promise((resolve) => {
        pdfjsScript.onload = resolve
        document.head.appendChild(pdfjsScript)
    })

    // 设置worker路径
    window.pdfjsLib = window.pdfjsLib || {}
    if (window.pdfjsLib.GlobalWorkerOptions) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js'
    }

    pdfjsLib.value = window.pdfjsLib
}

// 加载PDF-lib库
async function loadPdfLib() {
    if (window.PDFLib) {
        return window.PDFLib
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js'
    script.async = true

    await new Promise((resolve) => {
        script.onload = resolve
        document.head.appendChild(script)
    })

    return window.PDFLib
}

onMounted(async () => {
    await initialize()
})

// 处理文件上传
async function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    for (const file of files) {
        if (file.type !== 'application/pdf') continue
        
        await loadPdfFile(file)
    }
    isDragging.value = false
}

// 加载PDF文件
async function loadPdfFile(file) {
    try {
        await initialize()
        
        const arrayBuffer = await file.arrayBuffer()
        const pdf = await pdfjsLib.value.getDocument({ 
            data: arrayBuffer,
            cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
            cMapPacked: true,
            standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/'
        }).promise
        const pageCount = pdf.numPages

        // 生成第一页预览
        const firstPage = await pdf.getPage(1)
        const viewport = firstPage.getViewport({ scale: 0.5 })
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.height = viewport.height
        canvas.width = viewport.width

        await firstPage.render({
            canvasContext: context,
            viewport: viewport
        }).promise

        const previewUrl = canvas.toDataURL()

        pdfFiles.push({
            file,
            name: file.name,
            pageCount,
            rotationAngle: 90,
            pageRangeType: 'all',
            pageFrom: 1,
            pageTo: pageCount,
            previewUrl,
            pdfDoc: markRaw(pdf),
            arrayBuffer
        })
    } catch (error) {
        console.error('Error loading PDF:', error)
        alert(t('tools.pdf-rotator.errorMessage'))
    }
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 移除PDF
function removePdf(idx) {
    pdfFiles.splice(idx, 1)
    if (rotatedPdfs[idx]) {
        rotatedPdfs.splice(idx, 1)
        previewStates.splice(idx, 1)
    }
}

// 清除所有
function clearAll() {
    pdfFiles.splice(0)
    rotatedPdfs.splice(0)
    previewStates.splice(0)
}

// 旋转所有PDF
async function rotateAll() {
    if (!pdfFiles.length) return

    processing.value = true
    rotatedPdfs.splice(0)
    previewStates.splice(0)

    try {
        const PDFLib = await loadPdfLib()

        for (let i = 0; i < pdfFiles.length; i++) {
            const pdfFile = pdfFiles[i]
            const rotationAngle = pdfFile.rotationAngle
            const pageRangeType = pdfFile.pageRangeType

            // 加载PDF文档
            const arrayBuffer = await pdfFile.file.arrayBuffer()
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer)
            const pages = pdfDoc.getPages()

            // 计算需要旋转的页面索引（支持 全部/区间/奇数/偶数）
            const indices = []
            const totalPages = pages.length
            if (pageRangeType === 'all') {
                for (let j = 0; j < totalPages; j++) indices.push(j)
            } else if (pageRangeType === 'range') {
                let from = Math.max(0, (pdfFile.pageFrom || 1) - 1)
                let to = Math.min(totalPages - 1, (pdfFile.pageTo || totalPages) - 1)
                if (from > to) [from, to] = [to, from]
                for (let j = from; j <= to; j++) indices.push(j)
            } else if (pageRangeType === 'odd') {
                for (let j = 0; j < totalPages; j++) if ((j + 1) % 2 === 1) indices.push(j)
            } else if (pageRangeType === 'even') {
                for (let j = 0; j < totalPages; j++) if ((j + 1) % 2 === 0) indices.push(j)
            }

            // 旋转选定页面
            for (const j of indices) {
                const page = pages[j]
                const currentRotation = page.getRotation().angle
                page.setRotation(PDFLib.degrees(currentRotation + rotationAngle))
            }

            // 保存PDF
            const pdfBytes = await pdfDoc.save()
            // 使用拷贝的字节数据用于预览，避免传入 worker 后导致原始 ArrayBuffer 被转移(detached)
            const viewBytes = pdfBytes.slice()

            // 创建预览
            await initialize()
            const rotatedPdf = await pdfjsLib.value.getDocument({
                data: viewBytes,
                cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
                cMapPacked: true,
                standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/'
            }).promise
            const firstPage = await rotatedPdf.getPage(1)
            const viewport = firstPage.getViewport({ scale: 0.5 })
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            canvas.height = viewport.height
            canvas.width = viewport.width

            await firstPage.render({
                canvasContext: context,
                viewport: viewport
            }).promise

            rotatedPdfs.push({
                name: pdfFile.name.replace(/\.pdf$/i, '.pdf'),
                pageCount: pages.length,
                currentPage: 1,
                pdfBytes: markRaw(pdfBytes),
                pdfDoc: markRaw(rotatedPdf),
                scale: 1
            })

            previewStates.push({
                scale: 1
            })
        }

        await nextTick()
        // 渲染第一页预览
        for (let i = 0; i < rotatedPdfs.length; i++) {
            await renderPage(i, 1)
        }
    } catch (error) {
        console.error('Error rotating PDF:', error)
        alert(t('tools.pdf-rotator.error'))
    } finally {
        processing.value = false
    }
}

// 设置画布引用
function setCanvasRef(el, idx) {
    if (!el || !rotatedPdfs[idx]) return
    canvasRefs.value[idx] = el
}

// 渲染PDF页面
async function renderPage(idx, pageNum) {
    const pdf = rotatedPdfs[idx]
    const canvas = canvasRefs.value[idx]
    if (!canvas || !pdf || !pdf.pdfDoc || typeof pdf.pdfDoc.getPage !== 'function') return

    try {
        const page = await pdf.pdfDoc.getPage(pageNum)
        const state = previewStates[idx]
        const scale = state.scale || 1
        const viewport = page.getViewport({ scale: scale * 1.5 })

        canvas.height = viewport.height
        canvas.width = viewport.width

        const context = canvas.getContext('2d')
        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise
    } catch (error) {
        console.error('Error rendering page:', error)
    }
}

// 上一页
async function previousPage(idx) {
    const pdf = rotatedPdfs[idx]
    if (pdf.currentPage > 1) {
        pdf.currentPage--
        await renderPage(idx, pdf.currentPage)
    }
}

// 下一页
async function nextPage(idx) {
    const pdf = rotatedPdfs[idx]
    if (pdf.currentPage < pdf.pageCount) {
        pdf.currentPage++
        await renderPage(idx, pdf.currentPage)
    }
}

// 缩放
function handleZoom(e, idx) {
    e.preventDefault()
    const state = previewStates[idx]
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    state.scale = Math.max(0.5, Math.min(3, (state.scale || 1) * delta))
    renderPage(idx, rotatedPdfs[idx].currentPage)
}

// 下载PDF
async function download(idx) {
    const pdf = rotatedPdfs[idx]
    let bytes = pdf.pdfBytes
    const blob = new Blob([bytes], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = pdf.name
    a.click()
    URL.revokeObjectURL(url)
}

// 批量下载
async function downloadAll() {
    const zip = new JSZip()

    for (let i = 0; i < rotatedPdfs.length; i++) {
        const pdf = rotatedPdfs[i]
        let bytes = pdf.pdfBytes
        zip.file(pdf.name, bytes)
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rotated_pdfs.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 加载示例PDF
async function loadSamplePdf() {
    // 创建一个简单的示例PDF
    try {
        const PDFLib = await loadPdfLib()
        const pdfDoc = await PDFLib.PDFDocument.create()
        
        const page = pdfDoc.addPage([595, 842]) // A4 size
        const { width, height } = page.getSize()
        
        page.drawText('Sample PDF document', {
            x: width / 2 - 60,
            y: height / 2,
            size: 24,
        })
        
        page.drawText('This is a sample PDF file for testing', {
            x: width / 2 - 100,
            y: height / 2 - 30,
            size: 12,
        })

        const pdfBytes = await pdfDoc.save()
        const blob = new Blob([pdfBytes], { type: 'application/pdf' })
        const file = new File([blob], 'sample.pdf', { type: 'application/pdf' })
        
        await loadPdfFile(file)
    } catch (error) {
        console.error('Error creating sample PDF:', error)
    }
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
    @apply bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
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
