<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.image-to-text-converter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div
                    class="border-2 border-dashed rounded-lg p-8 text-center transition-colors"
                    :class="isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600'"
                    @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false"
                    @drop.prevent="handleDrop"
                >
                    <input
                        type="file"
                        ref="fileInput"
                        @change="handleFileSelect"
                        accept="image/*,.pdf"
                        class="hidden"
                        multiple
                    />
                    <div class="space-y-4">
                        <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="text-gray-600 dark:text-gray-300">{{ $t('tools.image-to-text-converter.dragDropHint') }}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.image-to-text-converter.supportedFormats') }}</p>
                        <div class="flex gap-3 justify-center flex-wrap">
                            <button class="btn btn-primary" @click="$refs.fileInput.click()">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {{ $t('tools.image-to-text-converter.selectImages') }}
                            </button>
                            <button class="btn btn-secondary" @click="pasteFromClipboard">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                {{ $t('tools.image-to-text-converter.pasteFromClipboard') }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- OCR设置 -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold">{{ $t('tools.image-to-text-converter.ocrSettings') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.image-to-text-converter.language') }}</label>
                            <select v-model="settings.language" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="chi_sim">{{ $t('tools.image-to-text-converter.langChineseSimplified') }}</option>
                                <option value="chi_tra">{{ $t('tools.image-to-text-converter.langChineseTraditional') }}</option>
                                <option value="eng">{{ $t('tools.image-to-text-converter.langEnglish') }}</option>
                                <option value="jpn">{{ $t('tools.image-to-text-converter.langJapanese') }}</option>
                                <option value="kor">{{ $t('tools.image-to-text-converter.langKorean') }}</option>
                                <option value="fra">{{ $t('tools.image-to-text-converter.langFrench') }}</option>
                                <option value="deu">{{ $t('tools.image-to-text-converter.langGerman') }}</option>
                                <option value="spa">{{ $t('tools.image-to-text-converter.langSpanish') }}</option>
                                <option value="rus">{{ $t('tools.image-to-text-converter.langRussian') }}</option>
                                <option value="ara">{{ $t('tools.image-to-text-converter.langArabic') }}</option>
                                <option value="por">{{ $t('tools.image-to-text-converter.langPortuguese') }}</option>
                                <option value="ita">{{ $t('tools.image-to-text-converter.langItalian') }}</option>
                                <option value="hin">{{ $t('tools.image-to-text-converter.langHindi') }}</option>
                                <option value="tha">{{ $t('tools.image-to-text-converter.langThai') }}</option>
                                <option value="vie">{{ $t('tools.image-to-text-converter.langVietnamese') }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.image-to-text-converter.outputFormat') }}</label>
                            <select v-model="settings.outputFormat" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="plain">{{ $t('tools.image-to-text-converter.formatPlain') }}</option>
                                <option value="lines">{{ $t('tools.image-to-text-converter.formatLines') }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 已选择的文件列表 -->
                <div v-if="selectedFiles.length > 0" class="space-y-3">
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">{{ $t('tools.image-to-text-converter.selectedFiles') }}</h3>
                        <button class="text-sm text-red-600 hover:text-red-700" @click="clearFiles">
                            {{ $t('tools.image-to-text-converter.clearAll') }}
                        </button>
                    </div>
                    <div class="space-y-2 max-h-60 overflow-y-auto">
                        <div v-for="(file, idx) in selectedFiles" :key="idx"
                            class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <div class="flex items-center gap-3">
                                <img v-if="file.preview" :src="file.preview" class="w-12 h-12 object-cover rounded" />
                                <div>
                                    <p class="font-medium text-sm">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                </div>
                            </div>
                            <button class="text-gray-400 hover:text-red-500" @click="removeFile(idx)">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 识别按钮 -->
                <button
                    class="btn btn-primary w-full"
                    @click="startRecognition"
                    :disabled="selectedFiles.length === 0 || isProcessing"
                >
                    <svg v-if="isProcessing" class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ isProcessing ? $t('tools.image-to-text-converter.processing') : $t('tools.image-to-text-converter.startRecognition') }}
                </button>

                <!-- 进度条 -->
                <div v-if="isProcessing" class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span>{{ $t('tools.image-to-text-converter.progress') }}</span>
                        <span>{{ progress }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" :style="{ width: progress + '%' }"></div>
                    </div>
                    <p class="text-sm text-gray-500">{{ statusText }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.image-to-text-converter.outputTitle') }}</h2>
                    <div v-if="extractedText" class="flex gap-2">
                        <button class="btn btn-sm btn-secondary" @click="copyText">
                            {{ $t('tools.image-to-text-converter.copyText') }}
                        </button>
                        <button class="btn btn-sm btn-secondary" @click="clearOutput">
                            {{ $t('tools.image-to-text-converter.clearOutput') }}
                        </button>
                    </div>
                </div>

                <div v-if="extractedText" class="space-y-4">
                    <!-- 文本统计 -->
                    <div class="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div class="text-center">
                            <p class="text-2xl font-bold text-blue-600">{{ textStats.characters }}</p>
                            <p class="text-sm text-gray-500">{{ $t('tools.image-to-text-converter.characters') }}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-green-600">{{ textStats.words }}</p>
                            <p class="text-sm text-gray-500">{{ $t('tools.image-to-text-converter.words') }}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-purple-600">{{ textStats.lines }}</p>
                            <p class="text-sm text-gray-500">{{ $t('tools.image-to-text-converter.lines') }}</p>
                        </div>
                    </div>

                    <!-- 文本输出 -->
                    <div class="relative">
                        <textarea
                            v-model="extractedText"
                            class="w-full h-80 p-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600 resize-none font-mono text-sm"
                            :placeholder="$t('tools.image-to-text-converter.textPlaceholder')"
                        ></textarea>
                    </div>

                    <!-- 导出选项 -->
                    <div class="space-y-3">
                        <h3 class="font-semibold">{{ $t('tools.image-to-text-converter.exportOptions') }}</h3>
                        <div class="grid grid-cols-3 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportAsTxt">
                                {{ $t('tools.image-to-text-converter.exportTxt') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportAsWord">
                                {{ $t('tools.image-to-text-converter.exportWord') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportAsExcel">
                                {{ $t('tools.image-to-text-converter.exportExcel') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.image-to-text-converter.noOutput') }}</p>
                </div>
            </div>
        </div>

        <ImageToTextConverterArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ImageToTextConverterArticle from './ImageToTextConverterArticle.vue'

const { t } = useI18n()

// 状态
const selectedFiles = ref([])
const extractedText = ref('')
const isProcessing = ref(false)
const progress = ref(0)
const statusText = ref('')
const isDragging = ref(false)

// 设置
const settings = reactive({
    language: 'chi_sim',
    outputFormat: 'plain'
})

// 文件输入引用
const fileInput = ref(null)

// 文本统计
const textStats = computed(() => {
    const text = extractedText.value
    return {
        characters: text.length,
        words: text.trim() ? text.trim().split(/\s+/).length : 0,
        lines: text.trim() ? text.trim().split('\n').length : 0
    }
})

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 处理文件选择
function handleFileSelect(event) {
    const files = Array.from(event.target.files)
    addFiles(files)
}

// 处理拖放
function handleDrop(event) {
    isDragging.value = false
    const files = Array.from(event.dataTransfer.files)
    addFiles(files)
}

// 添加文件
function addFiles(files) {
    files.forEach(file => {
        if (file.type.startsWith('image/') || file.type === 'application/pdf') {
            const reader = new FileReader()
            reader.onload = (e) => {
                selectedFiles.value.push({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    preview: file.type.startsWith('image/') ? e.target.result : null,
                    data: e.target.result
                })
            }
            reader.readAsDataURL(file)
        }
    })
}

// 从剪贴板粘贴
async function pasteFromClipboard() {
    try {
        const clipboardItems = await navigator.clipboard.read()
        for (const item of clipboardItems) {
            for (const type of item.types) {
                if (type.startsWith('image/')) {
                    const blob = await item.getType(type)
                    const reader = new FileReader()
                    reader.onload = (e) => {
                        selectedFiles.value.push({
                            name: `clipboard-${Date.now()}.png`,
                            size: blob.size,
                            type: type,
                            preview: e.target.result,
                            data: e.target.result
                        })
                    }
                    reader.readAsDataURL(blob)
                }
            }
        }
    } catch (err) {
        console.error('Failed to paste from clipboard:', err)
        alert(t('tools.image-to-text-converter.clipboardError'))
    }
}

// 移除文件
function removeFile(idx) {
    selectedFiles.value.splice(idx, 1)
}

// 清除所有文件
function clearFiles() {
    selectedFiles.value = []
}

// 清除输出
function clearOutput() {
    extractedText.value = ''
}

// 开始识别
async function startRecognition() {
    if (selectedFiles.value.length === 0) return

    isProcessing.value = true
    progress.value = 0
    extractedText.value = ''
    statusText.value = t('tools.image-to-text-converter.loadingEngine')

    try {
        // 动态导入 Tesseract.js
        const Tesseract = await import('tesseract.js')

        const results = []
        const total = selectedFiles.value.length

        for (let i = 0; i < selectedFiles.value.length; i++) {
            const file = selectedFiles.value[i]
            statusText.value = t('tools.image-to-text-converter.processingFile', { name: file.name })

            try {
                const result = await Tesseract.recognize(file.data, settings.language, {
                    logger: (m) => {
                        if (m.status === 'recognizing text') {
                            progress.value = Math.round(((i + m.progress) / total) * 100)
                        }
                    }
                })

                results.push({
                    fileName: file.name,
                    text: result.data.text
                })
            } catch (err) {
                console.error(`Failed to process ${file.name}:`, err)
                results.push({
                    fileName: file.name,
                    text: `[${t('tools.image-to-text-converter.processingError')}]`
                })
            }
        }

        // 合并结果
        if (settings.outputFormat === 'plain') {
            extractedText.value = results.map(r => r.text).join('\n\n')
        } else {
            extractedText.value = results.map(r => `=== ${r.fileName} ===\n${r.text}`).join('\n\n')
        }

        progress.value = 100
        statusText.value = t('tools.image-to-text-converter.completed')
    } catch (err) {
        console.error('OCR Error:', err)
        alert(t('tools.image-to-text-converter.ocrError'))
    } finally {
        isProcessing.value = false
    }
}

// 复制文本
async function copyText() {
    try {
        await navigator.clipboard.writeText(extractedText.value)
        alert(t('tools.image-to-text-converter.copySuccess'))
    } catch (err) {
        console.error('Copy failed:', err)
    }
}

// 导出为TXT
function exportAsTxt() {
    const blob = new Blob([extractedText.value], { type: 'text/plain;charset=utf-8' })
    downloadBlob(blob, 'extracted-text.txt')
}

// 导出为Word
function exportAsWord() {
    const content = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset="utf-8"><title>Extracted Text</title></head>
        <body>${extractedText.value.replace(/\n/g, '<br>')}</body>
        </html>
    `
    const blob = new Blob([content], { type: 'application/msword' })
    downloadBlob(blob, 'extracted-text.doc')
}

// 导出为Excel
function exportAsExcel() {
    const lines = extractedText.value.split('\n')
    let csv = '\ufeff' + lines.map(line => `"${line.replace(/"/g, '""')}"`).join('\n')
    const blob = new Blob([csv], { type: 'application/vnd.ms-excel;charset=utf-8' })
    downloadBlob(blob, 'extracted-text.xls')
}

// 下载Blob
function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
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
