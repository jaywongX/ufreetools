<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.exif-remover.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept="image/jpeg,image/jpg,image/heic,image/webp,image/png,image/tiff,image/tif" multiple
                        @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.exif-remover.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.exif-remover.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.exif-remover.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="images.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.exif-remover.preview') }} ({{ images.length }})</h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.exif-remover.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in images" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover" :alt="`Image ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.exif-remover.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!images.length || processing" @click="removeExifFromAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {{ processing ? $t('tools.exif-remover.processing') : $t('tools.exif-remover.removeExif') }}
                </button>

                <!-- 隐私提示 -->
                <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <p class="text-sm text-blue-700 dark:text-blue-200">{{ $t('tools.exif-remover.privacyNote') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.exif-remover.outputTitle') }}</h2>
                    <button v-if="processedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.exif-remover.downloadAll') }}
                    </button>
                </div>

                <div v-if="processedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in processedImages" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 图片预览 -->
                        <div class="mb-4">
                            <img :src="img.url" class="w-full max-h-64 object-contain rounded border"
                                :alt="`Processed ${idx + 1}`" />
                        </div>

                        <!-- 处理信息 -->
                        <div class="mb-4 space-y-2">
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-medium">{{ $t('tools.exif-remover.exifInfo') }}:</span>
                                <span class="text-green-600 dark:text-green-400">{{ $t('tools.exif-remover.exifRemoved') }}</span>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-medium">{{ $t('tools.exif-remover.originalSize') }}:</span>
                                <span>{{ formatFileSize(img.originalSize) }}</span>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="font-medium">{{ $t('tools.exif-remover.processedSize') }}:</span>
                                <span>{{ formatFileSize(img.processedSize) }}</span>
                            </div>
                        </div>

                        <!-- 导出选项 -->
                        <div class="mt-4">
                            <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-remover.exportOptions') }}</h3>
                            
                            <!-- 导出格式选择 -->
                            <div class="space-y-2 mb-4">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.exif-remover.exportFormat') }}
                                </label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="img.exportType" value="image/png" class="form-radio">
                                        <span>PNG</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="img.exportType" value="image/jpeg" class="form-radio">
                                        <span>JPG</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="img.exportType" value="image/webp" class="form-radio">
                                        <span>WEBP</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 质量滑块 -->
                            <div v-if="img.exportType === 'image/jpeg'" class="space-y-2 mb-4">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.exif-remover.imageQuality') }}: {{ Math.round(img.quality * 100) }}%
                                </label>
                                <input type="range" min="0.5" max="1" step="0.01" v-model.number="img.quality"
                                    class="w-full" />
                            </div>

                            <!-- 下载按钮 -->
                            <button class="btn btn-success w-full" @click="download(idx)">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.exif-remover.downloadBtn') }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.exif-remover.noOutput') }}</p>
                </div>
            </div>
        </div>
        <ExifRemoverArticle />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import ExifRemoverArticle from './ExifRemoverArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const images = ref([])
const processedImages = reactive([])
const isDragging = ref(false)
const processing = ref(false)

// 示例图片
const sampleImages = [
    {
        name: 'sample-exif.jpeg',
        url: '/images/sample-exif.jpeg',
        fallbackUrl: 'https://www.ufreetools.com/images/sample-exif.jpeg'
    }
]

// 加载示例图片
async function loadSampleImages() {
    clearImages()
    for (const sample of sampleImages) {
        try {
            let response
            try {
                response = await fetch(sample.url)
                if (!response.ok) throw new Error('Local image not found')
            } catch (e) {
                response = await fetch(sample.fallbackUrl)
            }
            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            const file = new File([blob], sample.name, { type: blob.type || 'image/jpeg' })
            images.value.push({ file, url, name: file.name })
        } catch (error) {
            console.error('Failed to load sample image:', error)
        }
    }
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file)
            images.value.push({ file, url, name: file.name })
        }
    })
    isDragging.value = false
    if (fileInput.value) {
        fileInput.value.value = ''
    }
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 移除所有图片的EXIF数据
async function removeExifFromAll() {
    if (!images.value.length) return
    
    processing.value = true
    processedImages.splice(0)
    
    for (let i = 0; i < images.value.length; i++) {
        await removeExif(i)
    }
    
    processing.value = false
}

// 移除单张图片的EXIF数据
async function removeExif(idx) {
    const img = images.value[idx]
    if (!img) return

    try {
        const image = new window.Image()
        image.crossOrigin = 'Anonymous'
        image.src = img.url

        await new Promise((resolve, reject) => {
            image.onload = resolve
            image.onerror = reject
            if (image.complete) resolve()
        })

        // 创建canvas并绘制图片（这会自动移除EXIF数据）
        const canvas = document.createElement('canvas')
        canvas.width = image.naturalWidth || image.width
        canvas.height = image.naturalHeight || image.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0)

        // 将canvas转换为blob
        const blob = await new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(blob)
            }, 'image/png')
        })

        const processedUrl = URL.createObjectURL(blob)
        const originalSize = img.file.size
        const processedSize = blob.size

        processedImages.push({
            canvas,
            url: processedUrl,
            blob,
            originalSize,
            processedSize,
            exportType: 'image/png',
            quality: 0.92,
            name: img.name.replace(/\.(\w+)$/, '_no_exif.$1')
        })
    } catch (error) {
        console.error('Error removing EXIF:', error)
    }
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

// 清除所有图片
function clearImages() {
    images.value.forEach(img => URL.revokeObjectURL(img.url))
    processedImages.forEach(img => URL.revokeObjectURL(img.url))
    images.value = []
    processedImages.splice(0)
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(images.value[idx].url)
    images.value.splice(idx, 1)
    if (processedImages[idx]) {
        URL.revokeObjectURL(processedImages[idx].url)
        processedImages.splice(idx, 1)
    }
}

// 下载图片
function download(idx) {
    const img = processedImages[idx]
    if (!img) return

    const mime = img.exportType
    const ext = mime.split('/')[1]
    const quality = img.quality || 0.92

    // 如果格式改变，需要重新转换
    if (mime === 'image/png') {
        img.canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = img.name.replace(/\.\w+$/, `.${ext}`)
            a.click()
            URL.revokeObjectURL(url)
        }, mime)
    } else {
        img.canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = img.name.replace(/\.\w+$/, `.${ext}`)
            a.click()
            URL.revokeObjectURL(url)
        }, mime, quality)
    }
}

// 批量下载
async function downloadAll() {
    const zip = new JSZip()

    for (let i = 0; i < processedImages.length; i++) {
        const img = processedImages[i]
        const mime = img.exportType
        const ext = mime.split('/')[1]
        const quality = img.quality || 0.92

        await new Promise((resolve) => {
            img.canvas.toBlob((blob) => {
                zip.file(img.name.replace(/\.\w+$/, `.${ext}`), blob)
                resolve()
            }, mime, quality)
        })
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'images_no_exif.zip'
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

