<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.image-to-pdf-converter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()" @paste="handlePaste"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept="image/png,image/jpeg,image/bmp,image/webp,image/gif" multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.image-to-pdf-converter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-1">{{ $t('tools.image-to-pdf-converter.pasteTip') }}</span>
                    <span class="text-xs text-gray-400 mt-1">{{ $t('tools.image-to-pdf-converter.supported') }}</span>
                </div>

                <!-- 额外输入选项 -->
                <div class="flex flex-wrap gap-2 mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.image-to-pdf-converter.loadSample') }}
                    </button>
                    <button class="btn btn-secondary" @click="showCameraModal = true">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {{ $t('tools.image-to-pdf-converter.captureFromCamera') }}
                    </button>
                    <button class="btn btn-secondary" @click="showUrlModal = true">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        {{ $t('tools.image-to-pdf-converter.importFromUrl') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="images.length" class="space-y-4 mt-6">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.image-to-pdf-converter.preview') }} ({{ images.length }})
                        </h3>
                        <div class="flex gap-2">
                            <!-- <button class="text-sm text-blue-500 hover:text-blue-600" @click="showReorderModal = true">
                                <svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                {{ $t('tools.image-to-pdf-converter.reorderImages') }}
                            </button> -->
                            <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                                {{ $t('tools.image-to-pdf-converter.clearAll') }}
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in images" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.image-to-pdf-converter.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.image-to-pdf-converter.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                            <div class="absolute top-1 left-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded">
                                {{ idx + 1 }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 页面设置 -->
                <div class="mt-6 space-y-4">
                    <h3 class="font-medium">{{ $t('tools.image-to-pdf-converter.pageSettings') }}</h3>

                    <!-- 页面大小 -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.image-to-pdf-converter.pageSize') }}
                            </label>
                            <select v-model="pageSettings.size" class="w-full rounded border-gray-300 shadow-sm">
                                <option value="a4">A4 (210×297mm)</option>
                                <option value="a5">A5 (148×210mm)</option>
                                <option value="letter">Letter (8.5×11in)</option>
                                <option value="legal">Legal (8.5×14in)</option>
                                <option value="custom">Custom</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.image-to-pdf-converter.pageOrientation') }}
                            </label>
                            <div class="flex gap-4">
                                <label class="flex items-center">
                                    <input type="radio" v-model="pageSettings.orientation" value="portrait"
                                        class="form-radio">
                                    <span class="ml-2">{{ $t('tools.image-to-pdf-converter.portrait') }}</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" v-model="pageSettings.orientation" value="landscape"
                                        class="form-radio">
                                    <span class="ml-2">{{ $t('tools.image-to-pdf-converter.landscape') }}</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- 自定义页面大小 -->
                    <div v-if="pageSettings.size === 'custom'" class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.image-to-pdf-converter.width') }} (mm)
                            </label>
                            <input type="number" v-model.number="pageSettings.width" min="1"
                                class="w-full rounded border-gray-300 shadow-sm">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.image-to-pdf-converter.height') }} (mm)
                            </label>
                            <input type="number" v-model.number="pageSettings.height" min="1"
                                class="w-full rounded border-gray-300 shadow-sm">
                        </div>
                    </div>

                    <!-- 边距设置 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.image-to-pdf-converter.margins') }} ({{ $t('tools.image-to-pdf-converter.mm')
                            }})
                        </label>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <div>
                                <label class="block text-xs text-gray-500">{{ $t('tools.image-to-pdf-converter.top')
                                    }}</label>
                                <input type="number" v-model.number="pageSettings.margins.top" min="0"
                                    class="w-full rounded border-gray-300 shadow-sm">
                            </div>
                            <div>
                                <label class="block text-xs text-gray-500">{{ $t('tools.image-to-pdf-converter.right')
                                    }}</label>
                                <input type="number" v-model.number="pageSettings.margins.right" min="0"
                                    class="w-full rounded border-gray-300 shadow-sm">
                            </div>
                            <div>
                                <label class="block text-xs text-gray-500">{{ $t('tools.image-to-pdf-converter.bottom')
                                    }}</label>
                                <input type="number" v-model.number="pageSettings.margins.bottom" min="0"
                                    class="w-full rounded border-gray-300 shadow-sm">
                            </div>
                            <div>
                                <label class="block text-xs text-gray-500">{{ $t('tools.image-to-pdf-converter.left')
                                    }}</label>
                                <input type="number" v-model.number="pageSettings.margins.left" min="0"
                                    class="w-full rounded border-gray-300 shadow-sm">
                            </div>
                        </div>
                    </div>

                    <!-- 图片质量设置 -->
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.image-to-pdf-converter.dpi') }}: {{ pageSettings.dpi }}
                            </label>
                            <input type="range" v-model.number="pageSettings.dpi" min="72" max="300" step="1"
                                class="w-full">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.image-to-pdf-converter.imageScale') }}
                            </label>
                            <div class="flex flex-wrap gap-4">
                                <label class="flex items-center">
                                    <input type="radio" v-model="pageSettings.imageScale" value="fit"
                                        class="form-radio">
                                    <span class="ml-2">{{ $t('tools.image-to-pdf-converter.fitToPage') }}</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" v-model="pageSettings.imageScale" value="original"
                                        class="form-radio">
                                    <span class="ml-2">{{ $t('tools.image-to-pdf-converter.originalSize') }}</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" v-model="pageSettings.imageScale" value="custom"
                                        class="form-radio">
                                    <span class="ml-2">{{ $t('tools.image-to-pdf-converter.customSize') }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- 自定义缩放 -->
                        <div v-if="pageSettings.imageScale === 'custom'" class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.image-to-pdf-converter.width') }} (%)
                                </label>
                                <input type="number" v-model.number="pageSettings.scaleWidth" min="1" max="100"
                                    class="w-full rounded border-gray-300 shadow-sm">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.image-to-pdf-converter.height') }} (%)
                                </label>
                                <input type="number" v-model.number="pageSettings.scaleHeight" min="1" max="100"
                                    class="w-full rounded border-gray-300 shadow-sm">
                            </div>
                        </div>

                        <!-- 跳过空白页 -->
                        <div class="flex items-center">
                            <input type="checkbox" v-model="pageSettings.skipBlankPages" id="skipBlankPages"
                                class="form-checkbox">
                            <label for="skipBlankPages" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                {{ $t('tools.image-to-pdf-converter.skipBlankPages') }}
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 添加转换按钮 -->
                <button class="btn btn-primary w-full mt-6" :disabled="!images.length || isGenerating"
                    @click="generatePDF">
                    <svg v-if="!isGenerating" class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    {{ isGenerating ? $t('tools.image-to-pdf-converter.processing') : $t('tools.image-to-pdf-converter.convertBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.image-to-pdf-converter.outputTitle') }}</h2>

                <!-- PDF预览 -->
                <div v-if="pdfUrl" class="space-y-4">
                    <div class="relative border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 h-[500px]">
                        <iframe :src="pdfUrl" class="w-full h-full"></iframe>

                        <!-- 控制按钮 -->
                        <div class="absolute top-2 right-2 flex space-x-2">
                            <button
                                class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                @click="openFullscreen" :aria-label="$t('tools.image-to-pdf-converter.fullscreen')">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- 下载按钮 -->
                    <button class="btn btn-success w-full flex items-center justify-center" @click="downloadPDF">
                        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {{ $t('tools.image-to-pdf-converter.downloadBtn') }}
                    </button>
                </div>

                <!-- 空状态 -->
                <div v-else
                    class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center h-[500px]">
                    <svg class="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.image-to-pdf-converter.noOutput') }}</p>

                    <!-- 生成动画 -->
                    <div v-if="isGenerating" class="mt-6">
                        <div class="flex items-center justify-center space-x-2">
                            <div class="w-16 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-md animate-pulse"></div>
                            <svg class="w-6 h-6 text-blue-500 animate-bounce" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <div class="w-16 h-20 bg-blue-500 dark:bg-blue-600 rounded-md shadow-lg animate-pulse">
                            </div>
                        </div>
                        <p class="mt-4 text-blue-500 animate-pulse">{{ $t('tools.image-to-pdf-converter.generatingPdf')
                            }}</p>
                    </div>
                </div>
            </div>
        </div>

        <ImageToPDFConverterArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { jsPDF } from 'jspdf'
import 'jspdf/dist/polyfills.es.js'
import ImageToPDFConverterArticle from './ImageToPDFConverterArticle.vue'
import Sortable from 'sortablejs'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 状态变量
const fileInput = ref(null)
const images = ref([])
const pdfUrl = ref(null)
const isDragging = ref(false)
const isGenerating = ref(false)
const showCameraModal = ref(false)
const showUrlModal = ref(false)
const showReorderModal = ref(false)
const imageUrl = ref('')
const videoElement = ref(null)
const canvasElement = ref(null)
const reorderContainer = ref(null)
const selectedPages = ref([])
const currentStream = ref(null)
const facingMode = ref('user') // 'user' 前置摄像头, 'environment' 后置摄像头

// 页面设置
const pageSettings = reactive({
    size: 'a4',
    orientation: 'portrait',
    width: 210, // 自定义宽度，单位mm
    height: 297, // 自定义高度，单位mm
    margins: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    },
    dpi: 150,
    imageScale: 'fit', // 'fit', 'original', 'custom'
    scaleWidth: 90, // 自定义宽度百分比
    scaleHeight: 90, // 自定义高度百分比
    skipBlankPages: false
})

// 计算属性
const isValidUrl = computed(() => {
    if (!imageUrl.value) return false
    try {
        new URL(imageUrl.value)
        return /\.(jpg|jpeg|png|webp|bmp|gif)$/i.test(imageUrl.value)
    } catch (e) {
        return false
    }
})

// 示例图片
const sampleImages = [
    {
        name: 'sample1.jpg',
        url: 'https://picsum.photos/id/1018/800/600',
    },
    {
        name: 'sample2.jpg',
        url: 'https://picsum.photos/id/1015/800/600',
    }
]

// 加载示例图片
async function loadSampleImages() {
    clearImages()
    for (const sample of sampleImages) {
        try {
            const response = await fetch(sample.url)
            if (!response.ok) throw new Error('Failed to fetch sample image')

            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            images.value.push({
                file: new File([blob], sample.name, { type: blob.type || 'image/jpeg' }),
                url,
                name: sample.name
            })
        } catch (error) {
            console.error('Failed to load sample image:', error)
        }
    }
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || [])
    addImageFiles(files)
    if (fileInput.value) fileInput.value.value = '' // 重置文件输入，允许重复选择相同文件
}

// 处理拖放
function handleDrop(e) {
    const files = Array.from(e.dataTransfer.files || [])
    addImageFiles(files)
    isDragging.value = false
}

// 处理粘贴
function handlePaste(e) {
    const items = Array.from(e.clipboardData.items || [])
    const imageItems = items.filter(item => item.type.startsWith('image/'))

    imageItems.forEach(item => {
        const blob = item.getAsFile()
        if (blob) {
            const url = URL.createObjectURL(blob)
            const name = `pasted-image-${Date.now()}.png`
            images.value.push({
                file: new File([blob], name, { type: blob.type }),
                url,
                name
            })
        }
    })
}

// 添加图片文件
function addImageFiles(files) {
    files.forEach(file => {
        if (!file.type.startsWith('image/')) return

        const url = URL.createObjectURL(file)
        images.value.push({
            file,
            url,
            name: file.name
        })
    })
}

// 清除所有图片
function clearImages() {
    images.value.forEach(img => URL.revokeObjectURL(img.url))
    images.value = []
    pdfUrl.value = null
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(images.value[idx].url)
    images.value.splice(idx, 1)
    if (images.value.length === 0) {
        pdfUrl.value = null
    }
}

// 从URL导入图片
async function importFromUrl() {
    if (!isValidUrl.value) {
        toastRef.value.show(t('tools.image-to-pdf-converter.invalidUrl'))
        return
    }

    try {
        const response = await fetch(imageUrl.value)
        if (!response.ok) throw new Error('Failed to fetch image')

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const filename = imageUrl.value.split('/').pop() || `image-${Date.now()}.jpg`

        images.value.push({
            file: new File([blob], filename, { type: blob.type || 'image/jpeg' }),
            url,
            name: filename
        })

        imageUrl.value = ''
        showUrlModal.value = false
    } catch (error) {
        console.error('Failed to import image from URL:', error)
        toastRef.value.show(t('tools.image-to-pdf-converter.error') + ': ' + error.message)
    }
}

// 摄像头功能
async function initCamera() {
    try {
        if (currentStream.value) {
            currentStream.value.getTracks().forEach(track => track.stop())
        }

        const constraints = {
            video: { facingMode: facingMode.value }
        }

        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        currentStream.value = stream

        if (videoElement.value) {
            videoElement.value.srcObject = stream
        }
    } catch (error) {
        console.error('Error accessing camera:', error)
        toastRef.value.show(t('tools.image-to-pdf-converter.error') + ': ' + error.message)
    }
}

function switchCamera() {
    facingMode.value = facingMode.value === 'user' ? 'environment' : 'user'
    initCamera()
}

function capturePhoto() {
    if (!videoElement.value || !canvasElement.value) return

    const video = videoElement.value
    const canvas = canvasElement.value

    // 设置画布尺寸与视频相同
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // 在画布上绘制当前视频帧
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    // 将画布内容转换为Blob
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob)
        const name = `camera-photo-${Date.now()}.jpg`

        images.value.push({
            file: new File([blob], name, { type: 'image/jpeg' }),
            url,
            name
        })

        closeCameraModal()
    }, 'image/jpeg', 0.95)
}

function closeCameraModal() {
    showCameraModal.value = false
    if (currentStream.value) {
        currentStream.value.getTracks().forEach(track => track.stop())
        currentStream.value = null
    }
}

// 监听摄像头模态框
watch(showCameraModal, (newVal) => {
    if (newVal) {
        nextTick(() => {
            initCamera()
        })
    } else {
        if (currentStream.value) {
            currentStream.value.getTracks().forEach(track => track.stop())
            currentStream.value = null
        }
    }
})

// 初始化排序功能
function initSortable() {
    if (reorderContainer.value) {
        Sortable.create(reorderContainer.value, {
            animation: 150,
            ghostClass: 'bg-blue-100',
            onEnd: ({ oldIndex, newIndex }) => {
                if (oldIndex !== newIndex) {
                    const item = images.value.splice(oldIndex, 1)[0]
                    images.value.splice(newIndex, 0, item)
                }
            }
        })
    }
}

// 监听重新排序模态框
watch(showReorderModal, (newVal) => {
    if (newVal) {
        nextTick(() => {
            initSortable()
        })
    }
})

// 生成PDF
async function generatePDF() {
    if (images.value.length === 0) return

    isGenerating.value = true

    try {
        // 创建PDF文档
        const orientation = pageSettings.orientation === 'landscape' ? 'landscape' : 'portrait'
        let format

        if (pageSettings.size === 'custom') {
            format = [pageSettings.width, pageSettings.height]
        } else {
            format = pageSettings.size
        }

        const doc = new jsPDF({
            orientation,
            unit: 'mm',
            format
        })

        // 获取页面尺寸
        const pageWidth = doc.internal.pageSize.getWidth()
        const pageHeight = doc.internal.pageSize.getHeight()

        // 计算可用区域（考虑边距）
        const margins = pageSettings.margins
        const contentWidth = pageWidth - margins.left - margins.right
        const contentHeight = pageHeight - margins.top - margins.bottom

        // 处理每张图片
        for (let i = 0; i < images.value.length; i++) {
            // 如果不是第一页，添加新页
            if (i > 0) {
                doc.addPage()
            }

            const img = images.value[i]

            // 创建临时图像对象以获取尺寸
            const imgObj = new Image()
            imgObj.src = img.url

            await new Promise((resolve) => {
                imgObj.onload = resolve
            })

            // 计算图像尺寸和位置
            let imgWidth = imgObj.width
            let imgHeight = imgObj.height

            // 根据DPI调整尺寸
            const dpiScale = pageSettings.dpi / 72 // jsPDF默认使用72 DPI
            imgWidth = imgWidth / dpiScale
            imgHeight = imgHeight / dpiScale

            // 根据缩放选项调整尺寸
            let finalWidth, finalHeight, x, y

            if (pageSettings.imageScale === 'fit') {
                // 适应页面
                const scaleWidth = contentWidth / imgWidth
                const scaleHeight = contentHeight / imgHeight
                const scale = Math.min(scaleWidth, scaleHeight)

                finalWidth = imgWidth * scale
                finalHeight = imgHeight * scale

                // 居中放置
                x = margins.left + (contentWidth - finalWidth) / 2
                y = margins.top + (contentHeight - finalHeight) / 2
            } else if (pageSettings.imageScale === 'original') {
                // 原始大小
                finalWidth = imgWidth
                finalHeight = imgHeight

                // 居中放置，但不超出页面
                x = margins.left + Math.max(0, (contentWidth - finalWidth) / 2)
                y = margins.top + Math.max(0, (contentHeight - finalHeight) / 2)
            } else {
                // 自定义大小
                finalWidth = imgWidth * (pageSettings.scaleWidth / 100)
                finalHeight = imgHeight * (pageSettings.scaleHeight / 100)

                // 居中放置
                x = margins.left + (contentWidth - finalWidth) / 2
                y = margins.top + (contentHeight - finalHeight) / 2
            }

            // 添加图像到PDF
            doc.addImage(
                img.url,
                'JPEG',
                x,
                y,
                finalWidth,
                finalHeight
            )
        }

        // 生成PDF并创建URL
        const pdfBlob = doc.output('blob')
        if (pdfUrl.value) {
            URL.revokeObjectURL(pdfUrl.value)
        }
        pdfUrl.value = URL.createObjectURL(pdfBlob)

    } catch (error) {
        console.error('Error generating PDF:', error)
        toastRef.value.show(t('tools.image-to-pdf-converter.error') + ': ' + error.message)
    } finally {
        isGenerating.value = false
    }
}

// 下载PDF
function downloadPDF() {
    if (!pdfUrl.value) return

    const a = document.createElement('a')
    a.href = pdfUrl.value
    a.download = `images-to-pdf-${Date.now()}.pdf`
    a.click()
}

// 全屏预览
function openFullscreen() {
    if (!pdfUrl.value) return

    window.open(pdfUrl.value, '_blank')
}

// 组件挂载时
onMounted(() => {
    // 加载示例图片
    loadSampleImages()
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

/* 拖拽时的浮动缩略图效果 */
.sortable-ghost {
    opacity: 0.5;
    background-color: #e0f2fe;
    border: 2px dashed #3b82f6;
    transform: scale(0.95);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.sortable-drag {
    opacity: 0.9;
    transform: rotate(2deg) scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>