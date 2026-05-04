<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.image-to-png.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop"
                    @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false"
                    @click="fileInput?.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/tiff,image/svg+xml,image/heic,image/heif"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.image-to-png.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.image-to-png.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImage">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.image-to-png.loadSample') }}
                    </button>
                    <button v-if="originalImages.length" class="text-sm text-red-500 hover:text-red-600"
                        @click="clearImages">
                        {{ $t('tools.image-to-png.clearAll') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalImages.length" class="mt-4">
                    <h3 class="font-medium mb-2">
                        {{ $t('tools.image-to-png.preview') }} ({{ originalImages.length }})
                    </h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.image-to-png.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.image-to-png.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 色彩模式选择 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.image-to-png.colorModeTitle') }}</h3>
                    <div class="space-y-2 text-sm">
                        <label class="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                            <input type="radio" v-model="colorMode" value="truecolor" class="form-radio" />
                            <span>{{ $t('tools.image-to-png.colorModeTruecolor') }}</span>
                        </label>
                        <label class="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                            <input type="radio" v-model="colorMode" value="truecolorAlpha" class="form-radio" />
                            <span>{{ $t('tools.image-to-png.colorModeTruecolorAlpha') }}</span>
                        </label>
                        <label class="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                            <input type="radio" v-model="colorMode" value="indexed" class="form-radio" />
                            <span>{{ $t('tools.image-to-png.colorModeIndexed') }}</span>
                        </label>
                        <label class="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                            <input type="radio" v-model="colorMode" value="grayscale" class="form-radio" />
                            <span>{{ $t('tools.image-to-png.colorModeGrayscale') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 压缩设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.image-to-png.compressionTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.image-to-png.compressionLevelLabel', { level: compressionLevel }) }}
                        </label>
                        <input type="range" min="0" max="9" v-model.number="compressionLevel" class="w-full" />
                        <div class="text-xs text-gray-500 dark:text-gray-400">
                            {{ $t('tools.image-to-png.fileSizeEstimate', { size: estimatedSize }) }}
                        </div>
                    </div>
                </div>

                <!-- 透明层处理 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.image-to-png.transparencyTitle') }}</h3>
                    <div class="space-y-2 text-sm">
                        <label class="flex items-center space-x-2">
                            <input type="radio" v-model="transparencyMode" value="preserve" class="form-radio" />
                            <span>{{ $t('tools.image-to-png.transparencyPreserve') }}</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="radio" v-model="transparencyMode" value="remove" class="form-radio" />
                            <span>{{ $t('tools.image-to-png.transparencyRemove') }}</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="radio" v-model="transparencyMode" value="fill" class="form-radio" />
                            <span>{{ $t('tools.image-to-png.transparencyFill') }}</span>
                        </label>
                    </div>
                    <div v-if="transparencyMode === 'fill'" class="mt-2">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.image-to-png.backgroundColor') }}
                        </label>
                        <input type="color" v-model="backgroundColor" class="w-full h-10 border rounded" />
                    </div>
                </div>

                <!-- 尺寸设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.image-to-png.sizeConfigTitle') }}</h3>
                    <div class="space-y-3">
                        <div>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="sizeMode" value="original" class="form-radio" />
                                <span class="text-sm">{{ $t('tools.image-to-png.sizeModeOriginal') }}</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="sizeMode" value="custom" class="form-radio" />
                                <span class="text-sm">{{ $t('tools.image-to-png.sizeModeCustom') }}</span>
                            </label>
                            <div v-if="sizeMode === 'custom'" class="ml-6 mt-2 space-y-2">
                                <div class="flex items-center space-x-2">
                                    <input type="number" v-model.number="customWidth" :placeholder="$t('tools.image-to-png.widthLabel')"
                                        class="w-24 px-2 py-1 border rounded text-sm" min="1" />
                                    <span class="text-sm">×</span>
                                    <input type="number" v-model.number="customHeight" :placeholder="$t('tools.image-to-png.heightLabel')"
                                        class="w-24 px-2 py-1 border rounded text-sm" min="1" />
                                    <label class="flex items-center space-x-1 text-sm">
                                        <input type="checkbox" v-model="keepAspectRatio" class="form-checkbox" />
                                        <span>{{ $t('tools.image-to-png.keepAspectRatio') }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="sizeMode" value="percent" class="form-radio" />
                                <span class="text-sm">{{ $t('tools.image-to-png.sizeModePercent') }}</span>
                            </label>
                            <div v-if="sizeMode === 'percent'" class="ml-6 mt-2">
                                <input type="number" v-model.number="percentScale" :placeholder="$t('tools.image-to-png.percentLabel')"
                                    class="w-32 px-2 py-1 border rounded text-sm" min="1" max="500" />
                                <span class="text-sm ml-2">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-6"
                    :disabled="!originalImages.length || isConverting"
                    @click="convertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="!isConverting">
                        {{ originalImages.length > 1 ? $t('tools.image-to-png.convertBtn') + ` (${originalImages.length}张)` : $t('tools.image-to-png.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.image-to-png.converting') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.image-to-png.tipsTitle') }}</h4>
                    <p>{{ $t('tools.image-to-png.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.image-to-png.outputTitle') }}</h2>
                    <button v-if="convertedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.image-to-png.batchDownload') }}
                    </button>
                </div>

                <div v-if="convertedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in convertedImages" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 转换前后对比 -->
                        <div class="mb-4">
                            <h3 class="text-sm font-semibold mb-2">{{ $t('tools.image-to-png.beforeAfterTitle') }}</h3>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                        {{ $t('tools.image-to-png.beforeLabel') }}
                                    </p>
                                    <img :src="img.originalUrl" class="w-full h-32 object-contain border rounded bg-gray-50 dark:bg-gray-900"
                                        :alt="$t('tools.image-to-png.originalImage')" />
                                    <p class="text-xs text-gray-500 mt-1">
                                        {{ $t('tools.image-to-png.originalSize', { size: formatFileSize(img.originalSize) }) }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                        {{ $t('tools.image-to-png.afterLabel') }}
                                    </p>
                                    <img :src="img.url" class="w-full h-32 object-contain border rounded bg-gray-50 dark:bg-gray-900"
                                        :alt="'PNG ' + (idx + 1)" />
                                    <p class="text-xs text-gray-500 mt-1">
                                        {{ $t('tools.image-to-png.convertedSize', { size: formatFileSize(img.size) }) }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.image-to-png.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.image-to-png.noOutput') }}</p>
                </div>
            </div>
        </div>
        <ImageToPngArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import ImageToPngArticle from './ImageToPngArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

const fileInput = ref(null)
const originalImages = ref([])
const convertedImages = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })

// 设置
const colorMode = ref('truecolorAlpha')
const compressionLevel = ref(6)
const transparencyMode = ref('preserve')
const backgroundColor = ref('#FFFFFF')
const sizeMode = ref('original')
const customWidth = ref(null)
const customHeight = ref(null)
const keepAspectRatio = ref(true)
const percentScale = ref(100)

// 预估文件大小
const estimatedSize = computed(() => {
    if (!originalImages.value.length) return '--'
    const firstImg = originalImages.value[0]
    if (!firstImg) return '--'
    // 简单估算：PNG通常比原始JPG大，但比原始PNG小（如果压缩）
    const estimated = Math.round(firstImg.file.size * 1.2 * (1 - compressionLevel.value * 0.05))
    return formatFileSize(estimated)
})

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer?.files || [])
    files.forEach(file => {
        const type = file.type.toLowerCase()
        const isImage = /^image\/(png|jpeg|jpg|webp|gif|bmp|tiff|svg\+xml|heic|heif)$/i.test(type) ||
            file.name.match(/\.(png|jpg|jpeg|webp|gif|bmp|tiff|svg|heic|heif)$/i)
        if (!isImage) return

        const url = URL.createObjectURL(file)
        originalImages.value.push({ file, url, name: file.name })
    })
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除所有图片
function clearImages() {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
    convertedImages.value.forEach(img => {
        URL.revokeObjectURL(img.url)
        URL.revokeObjectURL(img.originalUrl)
    })
    originalImages.value = []
    convertedImages.value = []
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
    if (convertedImages.value[idx]) {
        URL.revokeObjectURL(convertedImages.value[idx].url)
        URL.revokeObjectURL(convertedImages.value[idx].originalUrl)
        convertedImages.value.splice(idx, 1)
    }
}

// 加载示例图片
async function loadSampleImage() {
    try {
        clearImages()
        let response
        try {
            response = await fetch('/favicon.png')
            if (!response.ok) throw new Error('local not found')
        } catch (e) {
            response = await fetch('https://www.ufreetools.com/favicon.png')
        }
        const blob = await response.blob()
        const file = new File([blob], 'sample-favicon.png', { type: blob.type || 'image/png' })
        const url = URL.createObjectURL(blob)
        originalImages.value.push({ file, url, name: file.name })
    } catch (error) {
        console.error('Failed to load sample image', error)
    }
}

// 计算目标尺寸
function calculateTargetSize(originalWidth, originalHeight) {
    if (sizeMode.value === 'original') {
        return { width: originalWidth, height: originalHeight }
    } else if (sizeMode.value === 'custom') {
        let width = customWidth.value || originalWidth
        let height = customHeight.value || originalHeight
        if (keepAspectRatio.value) {
            const ratio = originalWidth / originalHeight
            if (width && !height) {
                height = Math.round(width / ratio)
            } else if (height && !width) {
                width = Math.round(height * ratio)
            } else if (width && height) {
                const newRatio = width / height
                if (newRatio > ratio) {
                    width = Math.round(height * ratio)
                } else {
                    height = Math.round(width / ratio)
                }
            }
        }
        return { width, height }
    } else if (sizeMode.value === 'percent') {
        const scale = (percentScale.value || 100) / 100
        return {
            width: Math.round(originalWidth * scale),
            height: Math.round(originalHeight * scale)
        }
    }
    return { width: originalWidth, height: originalHeight }
}

// 转换单张图片为PNG
async function convertImageToPng(imgData, index) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = async () => {
            try {
                const { width, height } = calculateTargetSize(img.naturalWidth, img.naturalHeight)
                const canvas = document.createElement('canvas')
                canvas.width = width
                canvas.height = height
                const ctx = canvas.getContext('2d')
                
                // 处理透明层
                if (transparencyMode.value === 'fill') {
                    ctx.fillStyle = backgroundColor.value
                    ctx.fillRect(0, 0, width, height)
                } else if (transparencyMode.value === 'remove') {
                    ctx.fillStyle = '#FFFFFF'
                    ctx.fillRect(0, 0, width, height)
                }
                // preserve模式不需要填充，保持透明
                
                // 绘制图片
                ctx.drawImage(img, 0, 0, width, height)
                
                // 根据色彩模式处理
                if (colorMode.value === 'grayscale') {
                    const imageData = ctx.getImageData(0, 0, width, height)
                    const data = imageData.data
                    for (let i = 0; i < data.length; i += 4) {
                        const gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2])
                        data[i] = gray
                        data[i + 1] = gray
                        data[i + 2] = gray
                    }
                    ctx.putImageData(imageData, 0, 0)
                } else if (colorMode.value === 'indexed') {
                    // Indexed color需要量化，这里简化处理
                    const imageData = ctx.getImageData(0, 0, width, height)
                    const data = imageData.data
                    for (let i = 0; i < data.length; i += 4) {
                        // 量化到256色
                        data[i] = Math.round(data[i] / 32) * 32
                        data[i + 1] = Math.round(data[i + 1] / 32) * 32
                        data[i + 2] = Math.round(data[i + 2] / 32) * 32
                    }
                    ctx.putImageData(imageData, 0, 0)
                }
                
                // 转换为PNG blob
                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject(new Error('转换失败'))
                        return
                    }
                    const url = URL.createObjectURL(blob)
                    resolve({
                        url,
                        blob,
                        size: blob.size,
                        originalSize: imgData.file.size,
                        originalUrl: imgData.url,
                        name: imgData.name.replace(/\.\w+$/, '.png')
                    })
                }, 'image/png', compressionLevel.value / 10)
            } catch (error) {
                reject(error)
            }
        }
        img.onerror = () => reject(new Error('图片加载失败'))
        img.src = imgData.url
    })
}

// 转换所有图片
async function convertAll() {
    if (!originalImages.value.length) return
    
    isConverting.value = true
    convertedImages.value = []
    convertingProgress.value = { current: 0, total: originalImages.value.length }
    
    try {
        for (let i = 0; i < originalImages.value.length; i++) {
            convertingProgress.value.current = i + 1
            const result = await convertImageToPng(originalImages.value[i], i)
            convertedImages.value.push(result)
        }
    } catch (error) {
        console.error('转换失败', error)
        toastRef.value.show(t('tools.image-to-png.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 下载单张图片
function download(idx) {
    const img = convertedImages.value[idx]
    if (!img) return
    
    const a = document.createElement('a')
    a.href = img.url
    a.download = img.name
    a.click()
}

// 批量下载
async function downloadAll() {
    if (!convertedImages.value.length) return
    
    const zip = new JSZip()
    
    for (let i = 0; i < convertedImages.value.length; i++) {
        const img = convertedImages.value[i]
        const response = await fetch(img.url)
        const blob = await response.blob()
        zip.file(img.name, blob)
    }
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'converted_images.zip'
    a.click()
    URL.revokeObjectURL(url)
}

onUnmounted(() => {
    clearImages()
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
</style>

