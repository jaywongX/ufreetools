<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.ai-face-landmark-painter.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.ai-face-landmark-painter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.ai-face-landmark-painter.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.ai-face-landmark-painter.loadSample') }}
                    </button>
                </div>

                <!-- 绘制设置 -->
                <div class="mt-6 space-y-4">
                    <h3 class="font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.ai-face-landmark-painter.paintSettings') }}</h3>
                    
                    <!-- 显示选项 -->
                    <div class="space-y-3">
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" v-model="showLandmarks" @change="updateAllCanvases" class="form-checkbox">
                            <span class="font-medium">{{ $t('tools.ai-face-landmark-painter.showLandmarks') }}</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" v-model="showConnections" @change="updateAllCanvases" class="form-checkbox">
                            <span class="font-medium">{{ $t('tools.ai-face-landmark-painter.showConnections') }}</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" v-model="showNumbers" @change="updateAllCanvases" class="form-checkbox">
                            <span class="font-medium">{{ $t('tools.ai-face-landmark-painter.showNumbers') }}</span>
                        </label>
                    </div>

                    <!-- 样式设置 -->
                    <div class="space-y-3">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.ai-face-landmark-painter.pointColor') }}
                            </label>
                            <input type="color" v-model="pointColor" @change="updateAllCanvases" class="w-full h-8 rounded border">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.ai-face-landmark-painter.lineColor') }}
                            </label>
                            <input type="color" v-model="lineColor" @change="updateAllCanvases" class="w-full h-8 rounded border">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.ai-face-landmark-painter.pointSize') }}: {{ pointSize }}px
                            </label>
                            <input type="range" min="1" max="10" v-model.number="pointSize" @input="updateAllCanvases" class="w-full">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.ai-face-landmark-painter.lineWidth') }}: {{ lineWidth }}px
                            </label>
                            <input type="range" min="1" max="5" v-model.number="lineWidth" @input="updateAllCanvases" class="w-full">
                        </div>
                    </div>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalImages.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.ai-face-landmark-painter.preview') }} ({{ originalImages.length }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.ai-face-landmark-painter.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.ai-face-landmark-painter.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.ai-face-landmark-painter.deleteImage')">
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
                <button class="btn btn-primary w-full mt-4" :disabled="!originalImages.length || isProcessing" @click="detectLandmarks">
                    <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ $t('tools.ai-face-landmark-painter.detectBtn') }}
                </button>

                <!-- 模型加载状态 -->
                <div v-if="modelLoadingStatus" class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div class="flex items-center space-x-2">
                        <svg class="animate-spin w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span class="text-sm text-blue-700 dark:text-blue-300">{{ modelLoadingStatus }}</span>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.ai-face-landmark-painter.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="paintedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.ai-face-landmark-painter.batchDownload') }}
                    </button>
                </div>

                <div v-if="paintedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in paintedImages" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 图片预览 -->
                        <div class="relative group">
                            <div class="image-container overflow-hidden"
                                :ref="el => { if (el) imageContainers[idx] = el }">
                                <canvas :ref="el => setCanvasRef(el, idx)" :width="img.width" :height="img.height"
                                    class="w-full h-auto max-h-[400px] object-contain border rounded cursor-move"
                                    @mousedown="startPan($event, idx)" @wheel="handleZoom($event, idx)"
                                    @touchstart="startTouch($event, idx)" @touchmove="moveTouch($event, idx)"
                                    @touchend="endTouch"
                                    @click="handleLandmarkClick($event, idx)"></canvas>
                            </div>
                            <div class="absolute top-2 right-2 flex space-x-2">
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomIn(idx)" :aria-label="$t('tools.ai-face-landmark-painter.zoomIn')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.ai-face-landmark-painter.zoomOut')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.ai-face-landmark-painter.resetView')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="previewImage(idx)" :aria-label="$t('tools.ai-face-landmark-painter.fullscreen')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 关键点信息 -->
                        <div v-if="img.landmarks && img.landmarks.length > 0" class="mt-4 space-y-4">
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 class="font-medium text-lg mb-2">{{ $t('tools.ai-face-landmark-painter.landmarkInfo') }}</h3>
                                <div class="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.ai-face-landmark-painter.totalPoints') }}:</span>
                                        <span class="font-medium ml-2">{{ img.landmarks.length }}</span>
                                    </div>
                                    <div>
                                        <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.ai-face-landmark-painter.editMode') }}:</span>
                                        <span class="font-medium ml-2">{{ $t('tools.ai-face-landmark-painter.enabled') }}</span>
                                    </div>
                                </div>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                    {{ $t('tools.ai-face-landmark-painter.editTip') }}
                                </p>
                            </div>

                            <!-- 导出选项 -->
                            <div class="space-y-4">
                                <!-- 导出格式选择 -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {{ $t('tools.ai-face-landmark-painter.exportFormat') }}
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
                                        <label class="flex items-center space-x-2">
                                            <input type="radio" v-model="img.exportType" value="image/svg+xml" class="form-radio">
                                            <span>SVG</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- 质量滑块 -->
                                <div v-if="img.exportType === 'image/jpeg'" class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {{ $t('tools.ai-face-landmark-painter.imageQuality') }}: {{ Math.round(img.quality * 100) }}%
                                    </label>
                                    <input type="range" min="0.5" max="1" step="0.01" v-model.number="img.quality" class="w-full" />
                                </div>

                                <!-- 下载按钮 -->
                                <div class="flex gap-2">
                                    <button class="btn btn-success flex-1" @click="download(idx)">
                                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {{ $t('tools.ai-face-landmark-painter.downloadBtn') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 未检测到人脸 -->
                        <div v-else class="mt-4 text-center py-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-gray-500">{{ $t('tools.ai-face-landmark-painter.noFaceDetected') }}</p>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.ai-face-landmark-painter.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- 声明部分 -->
        <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400">
            <h3 class="font-medium mb-2">{{ $t('tools.ai-face-landmark-painter.disclaimer') }}</h3>
            <p>{{ $t('tools.ai-face-landmark-painter.disclaimerText') }}</p>
            <p class="mt-2">{{ $t('tools.ai-face-landmark-painter.modelInfo') }}</p>
        </div>
        
        <AIFaceLandmarkPainterArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AIFaceLandmarkPainterArticle from './AIFaceLandmarkPainterArticle.vue'
import * as faceapi from 'face-api.js'

const { t } = useI18n()

// 基础状态
const fileInput = ref(null)
const originalImages = ref([])
const paintedImages = reactive([])
const isDragging = ref(false)
const imageContainers = reactive([])
const canvasRefs = ref([])
const transformStates = reactive([])
const isProcessing = ref(false)
const modelsLoaded = ref(false)
const modelLoadingStatus = ref('')

// 绘制设置
const showLandmarks = ref(true)
const showConnections = ref(true)
const showNumbers = ref(false)
const pointColor = ref('#ff0000')
const lineColor = ref('#00ff00')
const pointSize = ref(3)
const lineWidth = ref(2)

// 示例图片
const sampleImages = [
    {
        name: 'face-landmark-sample.png',
        url: '/images/face-landmark-sample.png',
        fallbackUrl: 'https://www.ufreetools.com/images/face-landmark-sample.png'
    }
]

// 人脸关键点连接关系（68点模型）
const faceConnections = [
    // 下颌线 (0-16)
    ...Array.from({length: 16}, (_, i) => [i, i + 1]),
    // 右眉毛 (17-21)
    ...Array.from({length: 4}, (_, i) => [17 + i, 18 + i]),
    // 左眉毛 (22-26)
    ...Array.from({length: 4}, (_, i) => [22 + i, 23 + i]),
    // 鼻梁 (27-30)
    ...Array.from({length: 3}, (_, i) => [27 + i, 28 + i]),
    // 鼻尖 (31-35)
    ...Array.from({length: 4}, (_, i) => [31 + i, 32 + i]),
    // 右眼 (36-41)
    ...Array.from({length: 5}, (_, i) => [36 + i, 37 + i]),
    [41, 36], // 闭合右眼
    // 左眼 (42-47)
    ...Array.from({length: 5}, (_, i) => [42 + i, 43 + i]),
    [47, 42], // 闭合左眼
    // 嘴唇外圈 (48-59)
    ...Array.from({length: 11}, (_, i) => [48 + i, 49 + i]),
    [59, 48], // 闭合外圈
    // 嘴唇内圈 (60-67)
    ...Array.from({length: 7}, (_, i) => [60 + i, 61 + i]),
    [67, 60] // 闭合内圈
]

// 加载face-api.js模型
async function loadModels() {
    if (modelsLoaded.value) return
    
    modelLoadingStatus.value = t('tools.ai-face-landmark-painter.loadingModels')
    try {
        const modelUrl = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model'
        
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl),
            faceapi.nets.faceLandmark68Net.loadFromUri(modelUrl)
        ])
        
        modelsLoaded.value = true
        modelLoadingStatus.value = ''
    } catch (error) {
        console.error('Error loading face-api.js models:', error)
        modelLoadingStatus.value = t('tools.ai-face-landmark-painter.modelLoadFailed')
    }
}

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
            originalImages.value.push({
                file: new File([blob], sample.name, { type: blob.type || 'image/jpeg' }),
                url,
                name: sample.name
            })
        } catch (error) {
            console.error('Failed to load sample image:', error)
        }
    }
    
    if (originalImages.value.length > 0) {
        await nextTick()
        detectLandmarks()
    }
}

// 组件挂载时加载模型和示例图片
onMounted(async () => {
    await loadModels()
    loadSampleImages()
})

// 组件卸载时清理资源
onBeforeUnmount(() => {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
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
    paintedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
    if (paintedImages[idx]) {
        paintedImages.splice(idx, 1)
        transformStates.splice(idx, 1)
    }
}

// 检测面部关键点
async function detectLandmarks() {
    if (!modelsLoaded.value) {
        await loadModels()
    }
    
    if (!originalImages.value.length) return
    
    isProcessing.value = true
    paintedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)

    try {
        for (let idx = 0; idx < originalImages.value.length; idx++) {
            const img = originalImages.value[idx]
            const image = new Image()
            image.crossOrigin = "Anonymous"
            image.src = img.url

            await new Promise((resolve, reject) => {
                image.onload = resolve
                image.onerror = reject
                if (image.complete) resolve()
            })

            // 创建画布
            const canvas = document.createElement('canvas')
            canvas.width = image.naturalWidth || image.width
            canvas.height = image.naturalHeight || image.height
            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0)
            
            // 检测面部关键点
            const detections = await faceapi.detectAllFaces(
                image, 
                new faceapi.TinyFaceDetectorOptions()
            ).withFaceLandmarks()
            
            let landmarks = []
            if (detections.length > 0) {
                // 获取第一个检测到的人脸的关键点
                landmarks = detections[0].landmarks.positions.map((point, index) => ({
                    x: point.x,
                    y: point.y,
                    index: index,
                    dragging: false
                }))
                
                // 绘制关键点和连线
                drawLandmarks(ctx, landmarks)
            }

            paintedImages.push({
                canvas,
                width: canvas.width,
                height: canvas.height,
                exportType: 'image/png',
                quality: 0.92,
                name: img.name.replace(/\.(\w+)$/, '_landmarks.$1'),
                landmarks,
                originalImage: image
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
        }
    } catch (error) {
        console.error('Error detecting landmarks:', error)
    } finally {
        isProcessing.value = false
    }
}

// 绘制面部关键点
function drawLandmarks(ctx, landmarks) {
    if (!landmarks || landmarks.length === 0) return

    // 绘制连线
    if (showConnections.value) {
        ctx.strokeStyle = lineColor.value
        ctx.lineWidth = lineWidth.value
        ctx.beginPath()
        
        faceConnections.forEach(([start, end]) => {
            if (start < landmarks.length && end < landmarks.length) {
                const startPoint = landmarks[start]
                const endPoint = landmarks[end]
                ctx.moveTo(startPoint.x, startPoint.y)
                ctx.lineTo(endPoint.x, endPoint.y)
            }
        })
        
        ctx.stroke()
    }

    // 绘制关键点
    if (showLandmarks.value) {
        ctx.fillStyle = pointColor.value
        landmarks.forEach((point, index) => {
            ctx.beginPath()
            ctx.arc(point.x, point.y, pointSize.value, 0, 2 * Math.PI)
            ctx.fill()
            
            // 绘制编号
            if (showNumbers.value) {
                ctx.fillStyle = '#ffffff'
                ctx.font = '10px Arial'
                ctx.textAlign = 'center'
                ctx.fillText(index.toString(), point.x, point.y + 3)
                ctx.fillStyle = pointColor.value
            }
        })
    }
}

// 更新所有画布
function updateAllCanvases() {
    paintedImages.forEach((img, idx) => {
        updateCanvas(idx)
    })
}

// 更新单个画布
function updateCanvas(idx) {
    const img = paintedImages[idx]
    if (!img || !img.canvas) return
    
    const ctx = img.canvas.getContext('2d')
    
    // 清除画布并重新绘制原始图像
    ctx.clearRect(0, 0, img.canvas.width, img.canvas.height)
    if (img.originalImage) {
        ctx.drawImage(img.originalImage, 0, 0)
    }
    
    // 重新绘制关键点
    if (img.landmarks && img.landmarks.length > 0) {
        drawLandmarks(ctx, img.landmarks)
    }
    
    // 更新显示画布
    if (canvasRefs.value[idx]) {
        setCanvasRef(canvasRefs.value[idx], idx)
    }
}

// 处理关键点点击（用于拖拽编辑）
function handleLandmarkClick(e, idx) {
    const img = paintedImages[idx]
    const state = transformStates[idx]
    if (!img || !img.landmarks) return

    const canvas = canvasRefs.value[idx]
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) / state.scale - state.offsetX
    const y = (e.clientY - rect.top) / state.scale - state.offsetY

    // 查找最近的关键点
    let closestPoint = null
    let minDistance = Infinity
    
    img.landmarks.forEach((point, index) => {
        const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2)
        if (distance < minDistance && distance < 20) { // 20px容差
            minDistance = distance
            closestPoint = { point, index }
        }
    })

    if (closestPoint) {
        // 开始拖拽
        const moveHandler = (e) => {
            const rect = canvas.getBoundingClientRect()
            const newX = (e.clientX - rect.left) / state.scale - state.offsetX
            const newY = (e.clientY - rect.top) / state.scale - state.offsetY
            
            closestPoint.point.x = newX
            closestPoint.point.y = newY
            
            updateCanvas(idx)
        }

        const upHandler = () => {
            window.removeEventListener('mousemove', moveHandler)
            window.removeEventListener('mouseup', upHandler)
        }

        window.addEventListener('mousemove', moveHandler)
        window.addEventListener('mouseup', upHandler)
    }
}

// 设置画布引用
function setCanvasRef(el, idx) {
    if (!el || !paintedImages[idx]) return

    canvasRefs.value[idx] = el
    const ctx = el.getContext('2d')
    const img = paintedImages[idx]
    const state = transformStates[idx]

    const container = imageContainers[idx]
    const parentWidth = container?.clientWidth || 300
    const maxHeight = 400

    const imgRatio = img.height / img.width
    const displayWidth = parentWidth
    const displayHeight = Math.min(parentWidth * imgRatio, maxHeight)

    el.width = displayWidth
    el.height = displayHeight

    ctx.clearRect(0, 0, el.width, el.height)
    ctx.save()

    const centerX = el.width / 2
    const centerY = el.height / 2

    ctx.translate(centerX + state.offsetX, centerY + state.offsetY)
    ctx.scale(state.scale, state.scale)

    const drawWidth = img.width
    const drawHeight = img.height
    ctx.translate(-drawWidth / 2, -drawHeight / 2)
    
    if (img.canvas) {
        ctx.drawImage(img.canvas, 0, 0, drawWidth, drawHeight)
    }

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
    state.scale = 1
    state.offsetX = 0
    state.offsetY = 0
    setCanvasRef(canvasRefs.value[idx], idx)
}

// 预览图片
function previewImage(idx) {
    const img = paintedImages[idx]
    const url = img.canvas.toDataURL(img.exportType, img.quality)
    window.open(url, '_blank')
}

// 生成SVG格式
function generateSVG(img) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', img.width)
    svg.setAttribute('height', img.height)
    svg.setAttribute('viewBox', `0 0 ${img.width} ${img.height}`)

    // 添加背景图片
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image')
    image.setAttribute('href', img.originalImage.src)
    image.setAttribute('width', img.width)
    image.setAttribute('height', img.height)
    svg.appendChild(image)

    // 添加连线
    if (showConnections.value && img.landmarks) {
        faceConnections.forEach(([start, end]) => {
            if (start < img.landmarks.length && end < img.landmarks.length) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
                line.setAttribute('x1', img.landmarks[start].x)
                line.setAttribute('y1', img.landmarks[start].y)
                line.setAttribute('x2', img.landmarks[end].x)
                line.setAttribute('y2', img.landmarks[end].y)
                line.setAttribute('stroke', lineColor.value)
                line.setAttribute('stroke-width', lineWidth.value)
                svg.appendChild(line)
            }
        })
    }

    // 添加关键点
    if (showLandmarks.value && img.landmarks) {
        img.landmarks.forEach((point, index) => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            circle.setAttribute('cx', point.x)
            circle.setAttribute('cy', point.y)
            circle.setAttribute('r', pointSize.value)
            circle.setAttribute('fill', pointColor.value)
            svg.appendChild(circle)

            if (showNumbers.value) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
                text.setAttribute('x', point.x)
                text.setAttribute('y', point.y + 3)
                text.setAttribute('text-anchor', 'middle')
                text.setAttribute('font-size', '10')
                text.setAttribute('fill', '#ffffff')
                text.textContent = index.toString()
                svg.appendChild(text)
            }
        })
    }

    return new XMLSerializer().serializeToString(svg)
}

// 下载图片
async function download(idx) {
    const img = paintedImages[idx]
    const mime = img.exportType
    const ext = mime.split('/')[1]
    const quality = img.quality || 0.92
    
    if (mime === 'image/svg+xml') {
        // 下载SVG
        const svgContent = generateSVG(img)
        const blob = new Blob([svgContent], { type: 'image/svg+xml' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = img.name.replace(/\.\w+$/, '.svg')
        a.click()
        URL.revokeObjectURL(url)
    } else {
        // 下载图片
        const url = img.canvas.toDataURL(mime, quality)
        const a = document.createElement('a')
        a.href = url
        a.download = img.name.replace(/\.\w+$/, `.${ext}`)
        a.click()
    }
}

// 批量下载功能
async function downloadAll() {
    const zip = new JSZip()

    for (let i = 0; i < paintedImages.length; i++) {
        const img = paintedImages[i]
        const mime = img.exportType
        const ext = mime.split('/')[1]
        const quality = img.quality || 0.92
        
        if (mime === 'image/svg+xml') {
            const svgContent = generateSVG(img)
            zip.file(img.name.replace(/\.\w+$/, '.svg'), svgContent)
        } else {
            const url = img.canvas.toDataURL(mime, quality)
            const response = await fetch(url)
            const blob = await response.blob()
            zip.file(img.name.replace(/\.\w+$/, `.${ext}`), blob)
        }
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'face_landmarks.zip'
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

.form-radio {
    @apply text-blue-600 focus:ring-blue-500 focus:ring-2;
}

.form-checkbox {
    @apply text-blue-600 focus:ring-blue-500 focus:ring-2;
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