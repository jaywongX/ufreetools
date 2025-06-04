<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.invert-image-colors.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="image/png,image/jpeg,image/bmp,image/webp"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.invert-image-colors.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.invert-image-colors.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.invert-image-colors.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalImages.length" class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.invert-image-colors.preview') }} ({{ originalImages.length
                        }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.invert-image-colors.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.invert-image-colors.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.invert-image-colors.deleteImage')">
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
                <button class="btn btn-primary w-full mt-4" :disabled="!originalImages.length" @click="invertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ $t('tools.invert-image-colors.invertBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.invert-image-colors.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="invertedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.invert-image-colors.batchDownload') }}
                    </button>
                </div>

                <div v-if="invertedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in invertedImages" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 图片预览 -->
                        <div class="relative group">
                            <div class="image-container overflow-hidden"
                                :ref="el => { if (el) imageContainers[idx] = el }">
                                <canvas :ref="el => setCanvasRef(el, idx)" :width="img.width" :height="img.height"
                                    class="w-full h-auto max-h-[400px] object-contain border rounded cursor-move"
                                    @mousedown="startPan($event, idx)" @wheel="handleZoom($event, idx)"
                                    @touchstart="startTouch($event, idx)" @touchmove="moveTouch($event, idx)"
                                    @touchend="endTouch"></canvas>
                            </div>
                            <div class="absolute top-2 right-2 flex space-x-2">
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomIn(idx)" :aria-label="$t('tools.invert-image-colors.zoomIn')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.invert-image-colors.zoomOut')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.invert-image-colors.resetView')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="previewImage(idx)" :aria-label="$t('tools.invert-image-colors.fullscreen')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 导出选项 -->
                        <div class="mt-4 space-y-4">
                            <!-- 导出格式选择 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.invert-image-colors.exportFormat') }}
                                </label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="img.exportType" value="image/png"
                                            class="form-radio">
                                        <span>PNG</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="img.exportType" value="image/jpeg"
                                            class="form-radio">
                                        <span>JPG</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="img.exportType" value="image/webp"
                                            class="form-radio">
                                        <span>WEBP</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="img.exportType" value="image/bmp"
                                            class="form-radio">
                                        <span>BMP</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 质量滑块 -->
                            <div v-if="img.exportType === 'image/jpeg'" class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.invert-image-colors.imageQuality') }}: {{ Math.round(img.quality * 100)
                                    }}%
                                </label>
                                <input type="range" min="0.5" max="1" step="0.01" v-model.number="img.quality"
                                    class="w-full" />
                            </div>

                            <!-- 下载按钮 -->
                            <div class="flex gap-2">
                                <button class="btn btn-success flex-1" @click="download(idx)">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ $t('tools.invert-image-colors.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.invert-image-colors.noOutput') }}</p>
                </div>
            </div>

        </div>
        <InvertImageColorsArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import InvertImageColorsArticle from './InvertImageColorsArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalImages = ref([])
const invertedImages = reactive([])
const previewUrl = ref(null)
const isDragging = ref(false)
const imageContainers = reactive([])
const canvasRefs = ref([])

// 图像变换状态
const transformStates = reactive([])

// 修改示例图片部分
const sampleImages = [
    {
        name: 'favicon.png',
        url: '/favicon.png',
        fallbackUrl: 'https://www.ufreetools.com/favicon.png'
    }
]

// 加载示例图片
async function loadSampleImages() {
    clearImages()
    for (const sample of sampleImages) {
        try {
            // 尝试加载本地图片，如果失败则使用备用URL
            let response;
            try {
                response = await fetch(sample.url)
                if (!response.ok) throw new Error('Local image not found')
            } catch (e) {
                response = await fetch(sample.fallbackUrl)
            }

            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            originalImages.value.push({
                file: new File([blob], sample.name, { type: blob.type || 'image/jpeg' }),
                url,
                name: sample.name
            })
        } catch (error) {
            console.error('Failed to load sample image:', error)
        }
    }
    // 自动执行反转
    if (originalImages.value.length > 0) {
        await nextTick()
        invertAll()
    }
}

// 在组件挂载时加载示例图片
onMounted(() => {
    loadSampleImages()
})

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (!/^image\/(png|jpeg|bmp|webp)$/.test(file.type)) return
        const url = URL.createObjectURL(file)
        originalImages.value.push({ file, url, name: file.name })
    })
    isDragging.value = false
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除所有图片
function clearImages() {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
    originalImages.value = []
    invertedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
    if (invertedImages[idx]) {
        invertedImages.splice(idx, 1)
        transformStates.splice(idx, 1)
    }
}

// 反转所有图片
function invertAll() {
    invertedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)

    originalImages.value.forEach(async (img, idx) => {
        const image = new window.Image()
        image.crossOrigin = "Anonymous"  // 允许跨域图片
        image.src = img.url

        try {
            await new Promise((resolve, reject) => {
                image.onload = resolve
                image.onerror = reject
                // 如果图片已经加载完成，立即解析
                if (image.complete) resolve()
            })

            const canvas = document.createElement('canvas')
            canvas.width = image.naturalWidth || image.width
            canvas.height = image.naturalHeight || image.height

            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0)

            // 确保图片数据可以被获取
            try {
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

                // 反转颜色
                for (let i = 0; i < imageData.data.length; i += 4) {
                    imageData.data[i] = 255 - imageData.data[i]     // R
                    imageData.data[i + 1] = 255 - imageData.data[i + 1] // G
                    imageData.data[i + 2] = 255 - imageData.data[i + 2] // B
                    // alpha 不变
                }

                ctx.putImageData(imageData, 0, 0)

                invertedImages.push({
                    canvas,
                    width: canvas.width,
                    height: canvas.height,
                    exportType: 'image/png',
                    quality: 0.92,
                    name: img.name.replace(/\.(\w+)$/, '_inverted.$1')
                })

                // 初始化变换状态
                transformStates.push({
                    scale: 1,
                    offsetX: 0,
                    offsetY: 0,
                    isDragging: false,
                    lastX: 0,
                    lastY: 0
                })

                await nextTick()
                if (canvasRefs.value[idx]) {
                    setCanvasRef(canvasRefs.value[idx], idx)
                }
            } catch (error) {
                console.error('Error processing image data:', error)
            }
        } catch (error) {
            console.error('Error loading image:', error)
        }
    })
}

// 设置画布引用
function setCanvasRef(el, idx) {
    if (!el || !invertedImages[idx]) return

    canvasRefs.value[idx] = el
    const ctx = el.getContext('2d')
    const img = invertedImages[idx]
    const state = transformStates[idx]

    // 使用父元素的宽度
    const container = imageContainers[idx]
    const parentWidth = container?.clientWidth || 300
    const maxHeight = 400

    // 保持图像比例
    const imgRatio = img.height / img.width
    const displayWidth = parentWidth
    const displayHeight = Math.min(parentWidth * imgRatio, maxHeight)

    // 设置画布尺寸
    el.width = displayWidth
    el.height = displayHeight

    // 应用变换
    ctx.clearRect(0, 0, el.width, el.height)
    ctx.save()

    // 计算居中位置
    const centerX = el.width / 2
    const centerY = el.height / 2

    // 应用变换
    ctx.translate(centerX + state.offsetX, centerY + state.offsetY)
    ctx.scale(state.scale, state.scale)

    // 绘制图片（居中）
    const drawWidth = img.width
    const drawHeight = img.height
    ctx.translate(-drawWidth / 2, -drawHeight / 2)
    ctx.drawImage(img.canvas, 0, 0, drawWidth, drawHeight)

    ctx.restore()
}

// 图片缩放和平移功能
function startPan(e, idx) {
    const state = transformStates[idx]
    state.isDragging = true
    state.lastX = e.clientX
    state.lastY = e.clientY

    // 添加全局事件监听
    const moveHandler = (e) => movePan(e, idx)
    window.addEventListener('mousemove', moveHandler)
    window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', moveHandler)
        state.isDragging = false
    }, { once: true })
}

function movePan(e, idx) {
    const state = transformStates[idx]
    if (!state.isDragging) return

    const deltaX = e.clientX - state.lastX
    const deltaY = e.clientY - state.lastY

    state.offsetX += deltaX / state.scale
    state.offsetY += deltaY / state.scale

    state.lastX = e.clientX
    state.lastY = e.clientY

    // 重新绘制
    setCanvasRef(canvasRefs.value[idx], idx)
}

// 触摸事件处理
function startTouch(e, idx) {
    if (e.touches.length !== 1) return

    const touch = e.touches[0]
    const state = transformStates[idx]
    state.isDragging = true
    state.lastX = touch.clientX
    state.lastY = touch.clientY

    e.preventDefault()
}

function moveTouch(e, idx) {
    if (e.touches.length !== 1) return

    const touch = e.touches[0]
    const state = transformStates[idx]
    if (!state.isDragging) return

    const deltaX = touch.clientX - state.lastX
    const deltaY = touch.clientY - state.lastY

    state.offsetX += deltaX / state.scale
    state.offsetY += deltaY / state.scale

    state.lastX = touch.clientX
    state.lastY = touch.clientY

    // 重新绘制
    setCanvasRef(canvasRefs.value[idx], idx)

    e.preventDefault()
}

function endTouch() {
    // 结束拖动状态
    transformStates.forEach(state => {
        state.isDragging = false
    })
}

// 缩放处理
function handleZoom(e, idx) {
    e.preventDefault()

    const state = transformStates[idx]
    const delta = e.deltaY > 0 ? 0.9 : 1.1

    // 限制缩放范围
    const newScale = Math.max(0.1, Math.min(10, state.scale * delta))
    state.scale = newScale

    // 重新绘制
    setCanvasRef(canvasRefs.value[idx], idx)
}

// 缩放按钮
function zoomIn(idx) {
    const state = transformStates[idx]
    state.scale = Math.min(10, state.scale * 1.2)
    setCanvasRef(canvasRefs.value[idx], idx)
}

function zoomOut(idx) {
    const state = transformStates[idx]
    state.scale = Math.max(0.1, state.scale / 1.2)
    setCanvasRef(canvasRefs.value[idx], idx)
}

function resetView(idx) {
    const state = transformStates[idx]
    state.scale = 1
    state.offsetX = 0
    state.offsetY = 0
    setCanvasRef(canvasRefs.value[idx], idx)
}

// 下载图片
function download(idx) {
    const img = invertedImages[idx]
    const originalCanvas = img.canvas
    const mime = img.exportType
    const ext = mime.split('/')[1]
    const quality = img.quality || 0.92

    // 使用原始画布导出，而不是缩放后的画布
    const url = originalCanvas.toDataURL(mime, quality)
    const a = document.createElement('a')
    a.href = url
    a.download = img.name.replace(/\.\w+$/, `.${ext}`)
    a.click()
}

// 预览图片
function previewImage(idx) {
    const img = invertedImages[idx]
    previewUrl.value = img.canvas.toDataURL(img.exportType, img.quality)
}

// 批量下载功能
async function downloadAll() {
    const zip = new JSZip()

    // 添加所有图片到 zip
    for (let i = 0; i < invertedImages.length; i++) {
        const img = invertedImages[i]
        const originalCanvas = img.canvas
        const mime = img.exportType
        const ext = mime.split('/')[1]
        const quality = img.quality || 0.92
        const url = originalCanvas.toDataURL(mime, quality)

        // 将 base64 转换为 blob
        const response = await fetch(url)
        const blob = await response.blob()

        // 添加到 zip
        zip.file(img.name.replace(/\.\w+$/, `.${ext}`), blob)
    }

    // 生成并下载 zip
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'inverted_images.zip'
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

.image-container {
    position: relative;
    width: 100%;
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