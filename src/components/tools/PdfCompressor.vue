<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-compressor.inputTitle') }}</h2>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{
                    $t('tools.pdf-compressor.hintMultiple') }}</p>

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
                    <span class="text-gray-500">{{ $t('tools.pdf-compressor.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-compressor.supported') }}</span>
                </div>

                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.pdf-compressor.sampleBtn') }}
                    </button>
                    <button class="text-sm text-red-500 hover:text-red-600" @click="clearFiles">
                        {{ $t('tools.pdf-compressor.clearAll') }}
                    </button>
                </div>

                <div v-if="originalFiles.length" class="mt-6 space-y-3">
                    <h3 class="font-medium">{{ $t('tools.pdf-compressor.preview') }} ({{ originalFiles.length }})</h3>
                    <div class="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                        <div v-for="(file, idx) in originalFiles" :key="file.id"
                            class="border rounded-lg p-3 flex justify-between items-start bg-gray-50 dark:bg-gray-900">
                            <div>
                                <p class="font-semibold">{{ file.name }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.pdf-compressor.sizeLabel') }}:
                                    {{ formatSize(file.size) }}</p>
                                <p v-if="file.pages" class="text-xs text-gray-500">{{
                                    $t('tools.pdf-compressor.pagesLabel') }}: {{ file.pages }}</p>
                            </div>
                            <button class="text-sm text-red-500 hover:text-red-600" @click="removeFile(idx)">
                                {{ $t('tools.pdf-compressor.clearAll') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-8 space-y-6">
                    <div>
                        <h3 class="text-lg font-semibold flex items-center gap-2">
                            {{ $t('tools.pdf-compressor.presetTitle') }}
                        </h3>
                        <div class="space-y-3 mt-3">
                            <label class="flex items-start gap-3 cursor-pointer">
                                <input type="radio" name="preset" value="low" v-model="settings.preset"
                                    @change="applyPreset('low')" />
                                <span>{{ $t('tools.pdf-compressor.presetLow') }}</span>
                            </label>
                            <label class="flex items-start gap-3 cursor-pointer">
                                <input type="radio" name="preset" value="medium" v-model="settings.preset"
                                    @change="applyPreset('medium')" />
                                <span>{{ $t('tools.pdf-compressor.presetMedium') }}</span>
                            </label>
                            <label class="flex items-start gap-3 cursor-pointer">
                                <input type="radio" name="preset" value="high" v-model="settings.preset"
                                    @change="applyPreset('high')" />
                                <span>{{ $t('tools.pdf-compressor.presetHigh') }}</span>
                            </label>
                            <label class="flex items-start gap-3 cursor-pointer">
                                <input type="radio" name="preset" value="extreme" v-model="settings.preset"
                                    @change="applyPreset('extreme')" />
                                <span>{{ $t('tools.pdf-compressor.presetExtreme') }}</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <h3 class="text-lg font-semibold">{{ $t('tools.pdf-compressor.qualityTitle') }}</h3>
                            <span class="text-sm text-gray-500">{{ settings.quality }}{{
                                $t('tools.pdf-compressor.qualityUnit') }}</span>
                        </div>
                        <input type="range" min="10" max="100" step="1" v-model.number="settings.quality"
                            class="w-full mt-2" />
                        <p class="text-xs text-gray-500 mt-1">{{ $t('tools.pdf-compressor.tooltipQuality') }}</p>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <h3 class="text-lg font-semibold">{{ $t('tools.pdf-compressor.dpiTitle') }}</h3>
                            <span class="text-sm text-gray-500">{{ settings.dpi }} DPI</span>
                        </div>
                        <input type="range" min="72" max="300" step="1" v-model.number="settings.dpi"
                            class="w-full mt-2" />
                        <p class="text-xs text-gray-500 mt-1">{{ $t('tools.pdf-compressor.tooltipDpi') }}</p>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold">{{ $t('tools.pdf-compressor.colorModeTitle') }}</h3>
                        <div class="flex flex-wrap gap-4 mt-3">
                            <label class="flex items-center gap-2">
                                <input type="radio" value="color" v-model="settings.colorMode" />
                                <span>{{ $t('tools.pdf-compressor.colorModeColor') }}</span>
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="radio" value="gray" v-model="settings.colorMode" />
                                <span>{{ $t('tools.pdf-compressor.colorModeGray') }}</span>
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="radio" value="binary" v-model="settings.colorMode" />
                                <span>{{ $t('tools.pdf-compressor.colorModeBinary') }}</span>
                            </label>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">{{ $t('tools.pdf-compressor.tooltipColorMode') }}</p>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold">{{ $t('tools.pdf-compressor.resampleTitle') }}</h3>
                        <div class="flex flex-wrap gap-4 mt-3">
                            <label class="flex items-center gap-2">
                                <input type="radio" value="bicubic" v-model="settings.resample" />
                                <span>{{ $t('tools.pdf-compressor.resampleBicubic') }}</span>
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="radio" value="bilinear" v-model="settings.resample" />
                                <span>{{ $t('tools.pdf-compressor.resampleBilinear') }}</span>
                            </label>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">{{ $t('tools.pdf-compressor.tooltipResample') }}</p>
                    </div>
                </div>

                <button class="btn btn-primary w-full mt-6" :disabled="!originalFiles.length || isProcessing"
                    @click="compressAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ isProcessing ? $t('tools.pdf-compressor.compressing') : $t('tools.pdf-compressor.compressBtn') }}
                </button>

                <div v-if="isProcessing" class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                    <p class="font-medium">{{ $t('tools.pdf-compressor.processingFile') }}:{{ currentFileName }}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-300 mt-1">{{ $t('tools.pdf-compressor.compressing') }}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.pdf-compressor.outputTitle') }}</h2>
                    <button v-if="compressedFiles.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.pdf-compressor.batchDownload') }}
                    </button>
                </div>

                <div v-if="compressedFiles.length" class="space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div class="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
                        <h3 class="font-semibold mb-3">{{ $t('tools.pdf-compressor.resultSummary') }}</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                            <div>
                                <p class="text-gray-500">{{ $t('tools.pdf-compressor.resultOriginalSize') }}</p>
                                <p class="font-semibold">{{ formatSize(totalOriginalSize) }}</p>
                            </div>
                            <div>
                                <p class="text-gray-500">{{ $t('tools.pdf-compressor.resultCompressedSize') }}</p>
                                <p class="font-semibold">{{ formatSize(totalCompressedSize) }}</p>
                            </div>
                            <div>
                                <p class="text-gray-500">{{ $t('tools.pdf-compressor.resultSaved') }}</p>
                                <p class="font-semibold">{{ formatReduction(totalOriginalSize, totalCompressedSize) }}</p>
                            </div>
                        </div>
                    </div>

                    <div v-for="(result, idx) in compressedFiles" :key="result.id"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div>
                                <p class="font-semibold">{{ result.name }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.pdf-compressor.sizeLabel') }}:
                                    {{ formatSize(result.size) }} · {{ $t('tools.pdf-compressor.resultSaved') }}:
                                    {{ formatReduction(result.originalSize, result.size) }}</p>
                                <p class="text-xs text-gray-500">{{ $t('tools.pdf-compressor.pagesLabel') }}:
                                    {{ result.pages }}</p>
                            </div>
                            <div class="flex gap-2">
                                <button class="btn btn-secondary" @click="openPreview(result)">
                                    {{ $t('tools.pdf-compressor.openPreview') }}
                                </button>
                                <button class="btn btn-success" @click="downloadSingle(idx)">
                                    {{ $t('tools.pdf-compressor.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                        <div class="mt-3 text-xs text-gray-500">
                            <span class="mr-3">Preset: {{ result.options.presetLabel }}</span>
                            <span class="mr-3">Quality: {{ result.options.quality }}%</span>
                            <span class="mr-3">DPI: {{ result.options.dpi }}</span>
                            <span class="mr-3">Mode: {{ renderColorMode(result.options.colorMode) }}</span>
                            <span>Resample: {{ renderResample(result.options.resample) }}</span>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.pdf-compressor.noOutput') }}</p>
                </div>
            </div>
        </div>

        <div v-if="previewUrl" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-xl w-11/12 h-5/6 relative">
                <button class="absolute top-4 right-4 text-white bg-black/60 rounded-full px-3 py-1"
                    @click="closePreview">{{ $t('tools.pdf-compressor.closePreview') }}</button>
                <iframe :src="previewUrl" class="w-full h-full rounded-lg" frameborder="0"></iframe>
            </div>
        </div>

        <PdfCompressorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
// import { PDFDocument } from 'pdf-lib'
// import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist'
// import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.js?url'
import PdfCompressorArticle from './PdfCompressorArticle.vue'

// GlobalWorkerOptions.workerSrc = pdfWorkerUrl

const { t } = useI18n()

// 动态加载的库
let pdfjsLib = null
let PDFDocument = null

const fileInput = ref(null)
const originalFiles = ref([])
const compressedFiles = reactive([])
const isDragging = ref(false)
const isProcessing = ref(false)
const currentFileName = ref('')
const previewUrl = ref(null)

const settings = reactive({
    preset: 'medium',
    quality: 75,
    dpi: 150,
    colorMode: 'color',
    resample: 'bicubic'
})

const presetMap = {
    low: { quality: 90, dpi: 300, colorMode: 'color', resample: 'bicubic', label: t('tools.pdf-compressor.presetLow') },
    medium: { quality: 75, dpi: 180, colorMode: 'color', resample: 'bicubic', label: t('tools.pdf-compressor.presetMedium') },
    high: { quality: 50, dpi: 120, colorMode: 'gray', resample: 'bilinear', label: t('tools.pdf-compressor.presetHigh') },
    extreme: { quality: 30, dpi: 96, colorMode: 'binary', resample: 'bilinear', label: t('tools.pdf-compressor.presetExtreme') }
}

const sampleFile = {
    name: t('tools.pdf-compressor.sampleName'),
    url: '/image-doc.pdf',
    fallback: 'https://www.ufreetools.com/image-doc.pdf'
}

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
    } catch (error) {
        console.error('Failed to load PDF libraries:', error)
    }
})

function handleFiles(event) {
    const files = Array.from(event.target.files || event.dataTransfer.files)
    files.forEach(file => {
        if (file.type !== 'application/pdf') {
            return
        }
        const existingIndex = originalFiles.value.findIndex(item => item.name === file.name)
        if (existingIndex !== -1) {
            URL.revokeObjectURL(originalFiles.value[existingIndex].url)
            originalFiles.value.splice(existingIndex, 1)
        }
        const url = URL.createObjectURL(file)
        originalFiles.value.push({
            id: crypto.randomUUID(),
            file,
            name: file.name,
            size: file.size,
            url,
            pages: null
        })
    })
    isDragging.value = false
    if (event.target?.value) {
        event.target.value = ''
    }
}

function handleDrop(event) {
    handleFiles(event)
}

function clearFiles() {
    originalFiles.value.forEach(item => URL.revokeObjectURL(item.url))
    originalFiles.value = []
    resetCompressed()
}

function removeFile(index) {
    const [removed] = originalFiles.value.splice(index, 1)
    if (removed) {
        URL.revokeObjectURL(removed.url)
    }
}

function applyPreset(presetKey) {
    const preset = presetMap[presetKey]
    if (!preset) return
    settings.preset = presetKey
    settings.quality = preset.quality
    settings.dpi = preset.dpi
    settings.colorMode = preset.colorMode
    settings.resample = preset.resample
}

function formatSize(bytes) {
    if (!bytes) return '0 B'
    const units = ['B', 'KB', 'MB', 'GB']
    let idx = 0
    let value = bytes
    while (value >= 1024 && idx < units.length - 1) {
        value /= 1024
        idx++
    }
    return `${value.toFixed(value < 10 && idx > 0 ? 2 : 1)} ${units[idx]}`
}

function formatReduction(originalSize, compressedSize) {
    if (!originalSize || !compressedSize) return '0%'
    const saved = originalSize - compressedSize
    const percent = (saved / originalSize) * 100
    return `${percent <= 0 ? 0 : percent.toFixed(1)}%`
}

const totalOriginalSize = computed(() => compressedFiles.reduce((acc, item) => acc + item.originalSize, 0))
const totalCompressedSize = computed(() => compressedFiles.reduce((acc, item) => acc + item.size, 0))

async function loadSample() {
    clearFiles()
    try {
        let response
        try {
            response = await fetch(sampleFile.url)
            if (!response.ok) throw new Error('Local sample missing')
        } catch (error) {
            response = await fetch(sampleFile.fallback)
        }
        const blob = await response.blob()
        const file = new File([blob], sampleFile.name, { type: 'application/pdf' })
        const url = URL.createObjectURL(file)
        originalFiles.value.push({
            id: crypto.randomUUID(),
            file,
            name: file.name,
            size: file.size,
            url,
            pages: null
        })
        await compressAll()
    } catch (error) {
        console.error('Failed to load sample PDF:', error)
    }
}

async function compressAll() {
    if (!originalFiles.value.length) return
    if (isProcessing.value) return
    isProcessing.value = true
    resetCompressed()

    const snapshot = {
        preset: settings.preset,
        quality: settings.quality,
        dpi: settings.dpi,
        colorMode: settings.colorMode,
        resample: settings.resample,
        presetLabel: presetMap[settings.preset]?.label || ''
    }

    for (const item of originalFiles.value) {
        currentFileName.value = item.name
        try {
            const result = await compressSingle(item, snapshot)
            compressedFiles.push(result)
        } catch (error) {
            console.error('Compression error:', error)
            isProcessing.value = false
            currentFileName.value = ''
            return
        }
    }

    isProcessing.value = false
    currentFileName.value = ''
}

async function compressSingle(item, snapshot) {
    const arrayBuffer = await item.file.arrayBuffer()
    const task = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
    const pdfDoc = await PDFDocument.create()
    const smoothingQuality = snapshot.resample === 'bicubic' ? 'high' : 'medium'

    for (let pageIndex = 1; pageIndex <= task.numPages; pageIndex++) {
        const page = await task.getPage(pageIndex)
        const viewport = page.getViewport({ scale: snapshot.dpi / 72 })
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d', { willReadFrequently: true })
        canvas.width = Math.max(1, Math.floor(viewport.width))
        canvas.height = Math.max(1, Math.floor(viewport.height))
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = smoothingQuality

        await page.render({ canvasContext: context, viewport }).promise

        applyColorMode(context, canvas.width, canvas.height, snapshot.colorMode)

        const dataUrl = canvas.toDataURL('image/jpeg', Math.min(1, Math.max(0.1, snapshot.quality / 100)))
        const imageBytes = dataURLToUint8Array(dataUrl)
        const embeddedImage = await pdfDoc.embedJpg(imageBytes)
        const newPage = pdfDoc.addPage([embeddedImage.width, embeddedImage.height])
        newPage.drawImage(embeddedImage, {
            x: 0,
            y: 0,
            width: embeddedImage.width,
            height: embeddedImage.height
        })
    }

    const pdfBytes = await pdfDoc.save({ useObjectStreams: false })
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)

    item.pages = task.numPages

    if (typeof task.cleanup === 'function') {
        task.cleanup()
    }
    if (typeof task.destroy === 'function') {
        task.destroy()
    }

    return {
        id: crypto.randomUUID(),
        name: item.name.replace(/\.pdf$/i, '') + '_compressed.pdf',
        size: blob.size,
        originalSize: item.size,
        pages: task.numPages,
        blob,
        url,
        options: snapshot
    }
}

function applyColorMode(context, width, height, mode) {
    if (mode === 'color') return
    const imageData = context.getImageData(0, 0, width, height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b
        if (mode === 'gray') {
            data[i] = data[i + 1] = data[i + 2] = luminance
        } else if (mode === 'binary') {
            const threshold = luminance > 180 ? 255 : 0
            data[i] = data[i + 1] = data[i + 2] = threshold
        }
    }

    context.putImageData(imageData, 0, 0)
}

function dataURLToUint8Array(dataUrl) {
    const base64 = dataUrl.split(',')[1]
    const binary = atob(base64)
    const length = binary.length
    const bytes = new Uint8Array(length)
    for (let i = 0; i < length; i++) {
        bytes[i] = binary.charCodeAt(i)
    }
    return bytes
}

function openPreview(result) {
    previewUrl.value = result.url
}

function closePreview() {
    previewUrl.value = null
}

function downloadSingle(index) {
    const item = compressedFiles[index]
    if (!item) return
    const link = document.createElement('a')
    link.href = item.url
    link.download = item.name
    link.click()
}

async function downloadAll() {
    const zip = new JSZip()
    for (const item of compressedFiles) {
        const arrayBuffer = await item.blob.arrayBuffer()
        zip.file(item.name, arrayBuffer)
    }
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const link = document.createElement('a')
    link.href = url
    link.download = 'compressed-pdfs.zip'
    link.click()
    URL.revokeObjectURL(url)
}

function renderColorMode(mode) {
    switch (mode) {
        case 'gray':
            return t('tools.pdf-compressor.colorModeGray')
        case 'binary':
            return t('tools.pdf-compressor.colorModeBinary')
        default:
            return t('tools.pdf-compressor.colorModeColor')
    }
}

function renderResample(mode) {
    return mode === 'bicubic'
        ? t('tools.pdf-compressor.resampleBicubic')
        : t('tools.pdf-compressor.resampleBilinear')
}

function resetCompressed() {
    compressedFiles.forEach(item => {
        URL.revokeObjectURL(item.url)
    })
    compressedFiles.splice(0)
    previewUrl.value = null
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

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>

