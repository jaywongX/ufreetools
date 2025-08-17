<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.round-corners-image.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.round-corners-image.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.round-corners-image.supported') }}</span>
                </div>

                <!-- 圆角设置 -->
                <div class="mt-6 space-y-6">
                    <!-- 圆角半径 -->
                    <div class="space-y-3">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.round-corners-image.radiusLabel') }}: {{ cornerRadius }}px
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="200"
                            step="1"
                            v-model.number="cornerRadius"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <div class="flex justify-between text-xs text-gray-500">
                            <span>0px</span>
                            <span>100px</span>
                            <span>200px</span>
                        </div>
                    </div>

                    <!-- 边距设置 -->
                    <div class="space-y-3">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.round-corners-image.marginLabel') }}: {{ margin }}px
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            v-model.number="margin"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <div class="flex justify-between text-xs text-gray-500">
                            <span>0px</span>
                            <span>50px</span>
                            <span>100px</span>
                        </div>
                    </div>

                    <!-- 背景颜色选择 -->
                    <div class="space-y-3">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.round-corners-image.backgroundLabel') }}
                        </label>
                        <div class="flex flex-wrap gap-3">
                            <label class="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" v-model="backgroundType" value="transparent" class="form-radio text-blue-600">
                                <span>{{ $t('tools.round-corners-image.transparent') }}</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" v-model="backgroundType" value="color" class="form-radio text-blue-600">
                                <span>{{ $t('tools.round-corners-image.solidColor') }}</span>
                            </label>
                        </div>
                        
                        <!-- 颜色选择器 -->
                        <div v-if="backgroundType === 'color'" class="flex items-center space-x-3">
                            <input
                                type="color"
                                v-model="backgroundColor"
                                class="w-12 h-8 rounded border border-gray-300 cursor-pointer"
                            />
                            <input
                                type="text"
                                v-model="backgroundColor"
                                class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="#FFFFFF"
                            />
                        </div>
                    </div>

                    <!-- 预设圆角 -->
                    <div class="space-y-3">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.round-corners-image.presets') }}
                        </label>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <button
                                v-for="preset in cornerPresets"
                                :key="preset.value"
                                @click="cornerRadius = preset.value"
                                class="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': cornerRadius === preset.value }"
                            >
                                {{ preset.label }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 示例图片按钮 -->
                <button class="btn btn-secondary w-full mt-6" @click="loadSampleImages">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ $t('tools.round-corners-image.loadSample') }}
                </button>

                <!-- 预览区域 -->
                <div v-if="originalImages.length" class="mt-6 space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.round-corners-image.preview') }} ({{ originalImages.length }})</h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.round-corners-image.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-20 object-cover"
                                :alt="`${$t('tools.round-corners-image.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.round-corners-image.deleteImage')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 处理按钮 -->
                <button 
                    class="btn btn-primary w-full mt-4" 
                    :disabled="!originalImages.length || isProcessing" 
                    @click="processImages"
                >
                    <svg v-if="isProcessing" class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ isProcessing ? $t('tools.round-corners-image.processing') : $t('tools.round-corners-image.processBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.round-corners-image.outputTitle') }}</h2>
                    <button v-if="processedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.round-corners-image.batchDownload') }}
                    </button>
                </div>

                <div v-if="processedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in processedImages" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 图片预览 -->
                        <div class="relative group mb-4">
                            <div class="image-container overflow-hidden rounded-lg"
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
                                    @click="zoomIn(idx)" :aria-label="$t('tools.round-corners-image.zoomIn')">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.round-corners-image.zoomOut')">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.round-corners-image.resetView')">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 导出选项 -->
                        <div class="space-y-4">
                            <!-- 导出格式选择 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.round-corners-image.exportFormat') }}
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
                            <div v-if="img.exportType === 'image/jpeg'" class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.round-corners-image.imageQuality') }}: {{ Math.round(img.quality * 100) }}%
                                </label>
                                <input type="range" min="0.5" max="1" step="0.01" v-model.number="img.quality" class="w-full" />
                            </div>

                            <!-- 下载按钮 -->
                            <button class="btn btn-success w-full" @click="download(idx)">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.round-corners-image.downloadBtn') }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="text-gray-500">{{ $t('tools.round-corners-image.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- 底部声明 -->
        <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="text-center">
                <h3 class="text-lg font-semibold mb-2">{{ $t('tools.round-corners-image.disclaimer.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ $t('tools.round-corners-image.disclaimer.content') }}
                </p>
            </div>
        </div>

        <RoundCornersImageArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import RoundCornersImageArticle from './RoundCornersImageArticle.vue'

const { t } = useI18n()

// 响应式数据
const fileInput = ref(null)
const originalImages = ref([])
const processedImages = reactive([])
const isDragging = ref(false)
const isProcessing = ref(false)
const imageContainers = reactive([])
const canvasRefs = ref([])

// 圆角设置
const cornerRadius = ref(20)
const margin = ref(0)
const backgroundType = ref('transparent')
const backgroundColor = ref('#FFFFFF')

// 图像变换状态
const transformStates = reactive([])

// 圆角预设
const cornerPresets = computed(() => [
    { label: t('tools.round-corners-image.none'), value: 0 },
    { label: t('tools.round-corners-image.small'), value: 10 },
    { label: t('tools.round-corners-image.medium'), value: 20 },
    { label: t('tools.round-corners-image.large'), value: 50 }
])

// 示例图片
const sampleImages = [
    {
        name: 'round-corners-image-sample-1.png',
        url: '/images/round-corners-image-sample-1.png',
        fallbackUrl: 'https://www.ufreetools.com/images/round-corners-image-sample-1.png'
    }
]

// 加载示例图片
async function loadSampleImages() {
    clearImages()
    for (const sample of sampleImages) {
        try {
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
    processedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
    if (processedImages[idx]) {
        processedImages.splice(idx, 1)
        transformStates.splice(idx, 1)
    }
}

// 处理图片圆角
async function processImages() {
    if (!originalImages.value.length) return
    
    isProcessing.value = true
    processedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)

    try {
        for (let i = 0; i < originalImages.value.length; i++) {
            const img = originalImages.value[i]
            await processImage(img, i)
        }
    } catch (error) {
        console.error('Error processing images:', error)
    } finally {
        isProcessing.value = false
    }
}

// 处理单张图片
async function processImage(imgData, idx) {
    return new Promise((resolve, reject) => {
        const image = new window.Image()
        image.crossOrigin = "Anonymous"
        image.src = imgData.url

        image.onload = () => {
            try {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                
                // 计算画布尺寸（包含边距）
                const canvasWidth = image.width + (margin.value * 2)
                const canvasHeight = image.height + (margin.value * 2)
                
                canvas.width = canvasWidth
                canvas.height = canvasHeight

                // 设置背景
                if (backgroundType.value === 'color') {
                    ctx.fillStyle = backgroundColor.value
                    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
                }

                // 创建圆角路径
                const x = margin.value
                const y = margin.value
                const width = image.width
                const height = image.height
                const radius = Math.min(cornerRadius.value, width / 2, height / 2)

                ctx.save()
                ctx.beginPath()
                ctx.moveTo(x + radius, y)
                ctx.lineTo(x + width - radius, y)
                ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
                ctx.lineTo(x + width, y + height - radius)
                ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
                ctx.lineTo(x + radius, y + height)
                ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
                ctx.lineTo(x, y + radius)
                ctx.quadraticCurveTo(x, y, x + radius, y)
                ctx.closePath()
                ctx.clip()

                // 绘制图片
                ctx.drawImage(image, x, y, width, height)
                ctx.restore()

                // 添加到处理结果
                processedImages.push({
                    canvas,
                    width: canvasWidth,
                    height: canvasHeight,
                    exportType: 'image/png',
                    quality: 0.92,
                    name: imgData.name.replace(/\.(\w+)$/, '_rounded.$1')
                })

                // 初始化变换状态
                transformStates.push({
                    scale: 0.3,
                    offsetX: 0,
                    offsetY: 0,
                    isDragging: false,
                    lastX: 0,
                    lastY: 0
                })

                nextTick(() => {
                    if (canvasRefs.value[idx]) {
                        setCanvasRef(canvasRefs.value[idx], idx)
                    }
                })

                resolve()
            } catch (error) {
                reject(error)
            }
        }

        image.onerror = reject
    })
}

// 设置画布引用
function setCanvasRef(el, idx) {
    if (!el || !processedImages[idx]) return

    canvasRefs.value[idx] = el
    const ctx = el.getContext('2d')
    const img = processedImages[idx]
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

    setCanvasRef(canvasRefs.value[idx], idx)
    e.preventDefault()
}

function endTouch() {
    transformStates.forEach(state => {
        state.isDragging = false
    })
}

// 缩放处理
function handleZoom(e, idx) {
    e.preventDefault()

    const state = transformStates[idx]
    const delta = e.deltaY > 0 ? 0.9 : 1.1

    const newScale = Math.max(0.1, Math.min(10, state.scale * delta))
    state.scale = newScale

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
    state.scale = 0.3
    state.offsetX = 0
    state.offsetY = 0
    setCanvasRef(canvasRefs.value[idx], idx)
}

// 下载图片
function download(idx) {
    const img = processedImages[idx]
    const originalCanvas = img.canvas
    const mime = img.exportType
    const ext = mime.split('/')[1]
    const quality = img.quality || 0.92

    const url = originalCanvas.toDataURL(mime, quality)
    const a = document.createElement('a')
    a.href = url
    a.download = img.name.replace(/\.\w+$/, `.${ext}`)
    a.click()
}

// 批量下载功能
async function downloadAll() {
    const zip = new JSZip()

    for (let i = 0; i < processedImages.length; i++) {
        const img = processedImages[i]
        const originalCanvas = img.canvas
        const mime = img.exportType
        const ext = mime.split('/')[1]
        const quality = img.quality || 0.92
        const url = originalCanvas.toDataURL(mime, quality)

        const response = await fetch(url)
        const blob = await response.blob()

        zip.file(img.name.replace(/\.\w+$/, `.${ext}`), blob)
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rounded_images.zip'
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

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
}

.image-container {
    position: relative;
    width: 100%;
}

/* 自定义滑块样式 */
input[type="range"]::-webkit-slider-thumb {
    @apply appearance-none w-4 h-4 bg-blue-600 rounded-full cursor-pointer;
}

input[type="range"]::-moz-range-thumb {
    @apply w-4 h-4 bg-blue-600 rounded-full cursor-pointer border-0;
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
