<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.ai-age-gender-estimator.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.ai-age-gender-estimator.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.ai-age-gender-estimator.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.ai-age-gender-estimator.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalImages.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.ai-age-gender-estimator.preview') }} ({{ originalImages.length
                        }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.ai-age-gender-estimator.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.ai-age-gender-estimator.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.ai-age-gender-estimator.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 模式选择 -->
                <div class="mt-4">
                    <h3 class="font-medium mb-2">{{ $t('tools.ai-age-gender-estimator.modeTitle') }}</h3>
                    <div class="flex space-x-4">
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="mode" value="normal" class="form-radio" />
                            <span>{{ $t('tools.ai-age-gender-estimator.normalMode') }}</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="mode" value="fun" class="form-radio" />
                            <span>{{ $t('tools.ai-age-gender-estimator.funMode') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!originalImages.length || isProcessing" @click="analyzeImages">
                    <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {{ $t('tools.ai-age-gender-estimator.analyzeBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.ai-age-gender-estimator.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="analyzedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.ai-age-gender-estimator.batchDownload') }}
                    </button>
                </div>

                <div v-if="analyzedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in analyzedImages" :key="idx"
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
                                    @click="zoomIn(idx)" :aria-label="$t('tools.ai-age-gender-estimator.zoomIn')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.ai-age-gender-estimator.zoomOut')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.ai-age-gender-estimator.resetView')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="previewImage(idx)" :aria-label="$t('tools.ai-age-gender-estimator.fullscreen')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 分析结果 -->
                        <div v-if="img.detections && img.detections.length > 0" class="mt-4 space-y-4">
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 class="font-medium text-lg mb-2">{{ $t('tools.ai-age-gender-estimator.analysisResults') }}</h3>
                                
                                <div class="space-y-3">
                                    <div v-for="(detection, i) in img.detections" :key="i" class="p-3 border rounded-lg">
                                        <div class="flex items-center justify-between">
                                            <span class="font-medium">{{ $t('tools.ai-age-gender-estimator.person') }} {{ i + 1 }}</span>
                                            <span class="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                                                {{ $t('tools.ai-age-gender-estimator.face') }} {{ i + 1 }}
                                            </span>
                                        </div>
                                        
                                        <div class="mt-2 grid grid-cols-2 gap-2">
                                            <div class="bg-white dark:bg-gray-800 p-2 rounded border">
                                                <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.ai-age-gender-estimator.estimatedAge') }}</div>
                                                <div class="text-xl font-bold">{{ Math.round(detection.age) }} {{ $t('tools.ai-age-gender-estimator.years') }}</div>
                                            </div>
                                            
                                            <div class="bg-white dark:bg-gray-800 p-2 rounded border">
                                                <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.ai-age-gender-estimator.estimatedGender') }}</div>
                                                <div class="text-xl font-bold" :class="{
                                                    'text-blue-600 dark:text-blue-400': detection.gender === 'male',
                                                    'text-pink-600 dark:text-pink-400': detection.gender === 'female'
                                                }">
                                                    {{ detection.gender === 'male' ? $t('tools.ai-age-gender-estimator.male') : $t('tools.ai-age-gender-estimator.female') }}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-2">
                                            <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.ai-age-gender-estimator.genderConfidence') }}</div>
                                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                                <div class="h-2.5 rounded-full" 
                                                    :style="`width: ${Math.round(detection.genderProbability * 100)}%`"
                                                    :class="{
                                                        'bg-blue-600': detection.gender === 'male',
                                                        'bg-pink-600': detection.gender === 'female'
                                                    }"></div>
                                            </div>
                                            <div class="text-xs text-right mt-1">{{ Math.round(detection.genderProbability * 100) }}%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 导出选项 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.ai-age-gender-estimator.exportFormat') }}
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
                                    {{ $t('tools.ai-age-gender-estimator.imageQuality') }}: {{ Math.round(img.quality * 100)
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
                                    {{ $t('tools.ai-age-gender-estimator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                        
                        <!-- 未检测到人脸 -->
                        <div v-else class="mt-4 text-center py-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-gray-500">{{ $t('tools.ai-age-gender-estimator.noFaceDetected') }}</p>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.ai-age-gender-estimator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- 底部声明 -->
        <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400">
            <h3 class="font-medium mb-2">{{ $t('tools.ai-age-gender-estimator.disclaimer') }}</h3>
            <p>{{ $t('tools.ai-age-gender-estimator.disclaimerText') }}</p>
            <p class="mt-2">{{ $t('tools.ai-age-gender-estimator.modelInfo') }}</p>
        </div>
        
        <AIAgeGenderEstimatorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, computed, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AIAgeGenderEstimatorArticle from './AIAgeGenderEstimatorArticle.vue'
import * as faceapi from 'face-api.js'

const { t } = useI18n()

const fileInput = ref(null)
const originalImages = ref([])
const analyzedImages = reactive([])
const previewUrl = ref(null)
const isDragging = ref(false)
const imageContainers = reactive([])
const canvasRefs = ref([])
const isProcessing = ref(false)
const modelsLoaded = ref(false)
const mode = ref('normal') // 'normal' or 'fun'

// 图像变换状态
const transformStates = reactive([])

// 修改示例图片部分
const sampleImages = [
    {
        name: 'sample-portrait.png',
        url: '/images/sample-portrait.png',
        fallbackUrl: 'https://www.ufreetools.com/images/sample-portrait.png'
    },
    {
        name: 'sample-portrait2.png',
        url: '/images/sample-portrait2.png',
        fallbackUrl: 'https://www.ufreetools.com/images/sample-portrait2.png'
    }
]

// 加载face-api.js模型
async function loadModels() {
    if (modelsLoaded.value) return
    
    isProcessing.value = true
    try {
        // 使用CDN托管的模型
        const modelUrl = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model'
        
        // 加载所需模型
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl),
            faceapi.nets.faceLandmark68Net.loadFromUri(modelUrl),
            faceapi.nets.ageGenderNet.loadFromUri(modelUrl)
        ])
        
        modelsLoaded.value = true
    } catch (error) {
        console.error('Error loading face-api.js models:', error)
    } finally {
        isProcessing.value = false
    }
}

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
    
    // 自动分析
    if (originalImages.value.length > 0) {
        await nextTick()
        analyzeImages()
    }
}

// 在组件挂载时加载模型和示例图片
onMounted(async () => {
    await loadModels()
    loadSampleImages()
})

// 组件卸载时清理资源
onBeforeUnmount(() => {
    // 释放资源
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
    analyzedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
    if (analyzedImages[idx]) {
        analyzedImages.splice(idx, 1)
        transformStates.splice(idx, 1)
    }
}

// 分析图片
async function analyzeImages() {
    if (!modelsLoaded.value) {
        await loadModels()
    }
    
    if (!originalImages.value.length) return
    
    isProcessing.value = true
    analyzedImages.splice(0)
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
            
            // 检测人脸并分析年龄和性别
            const detections = await detectFaces(image)
            
            // 在画布上绘制分析结果
            if (detections && detections.length > 0) {
                if (mode.value === 'fun') {
                    drawFunDetections(ctx, detections)
                } else {
                    drawDetections(ctx, detections)
                }
            }

            analyzedImages.push({
                canvas,
                width: canvas.width,
                height: canvas.height,
                exportType: 'image/png',
                quality: 0.92,
                name: img.name.replace(/\.(\w+)$/, '_analyzed.$1'),
                detections
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
        console.error('Error analyzing images:', error)
    } finally {
        isProcessing.value = false
    }
}

// 检测人脸并分析年龄和性别
async function detectFaces(image) {
    try {
        // 使用TinyFaceDetector进行人脸检测
        const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withAgeAndGender();
        
        return detections;
    } catch (error) {
        console.error('Error detecting faces:', error);
        return [];
    }
}

// 在画布上绘制检测结果
function drawDetections(ctx, detections) {
    // 绘制每个检测到的人脸
    detections.forEach(detection => {
        const { box } = detection.detection;
        const { age, gender, genderProbability } = detection;
        
        // 绘制人脸框
        ctx.strokeStyle = gender === 'male' ? '#4A90E2' : '#E24A8E';
        ctx.lineWidth = 3;
        ctx.strokeRect(box.x, box.y, box.width, box.height);
        
        // 绘制年龄和性别标签背景
        const labelText = `${Math.round(age)} years, ${gender} (${Math.round(genderProbability * 100)}%)`;
        const labelY = box.y - 10;
        const labelPadding = 5;
        
        ctx.font = '16px Arial';
        const labelWidth = ctx.measureText(labelText).width + labelPadding * 2;
        
        ctx.fillStyle = gender === 'male' ? 'rgba(74, 144, 226, 0.7)' : 'rgba(226, 74, 142, 0.7)';
        ctx.fillRect(box.x, labelY - 16, labelWidth, 20);
        
        // 绘制文本
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(labelText, box.x + labelPadding, labelY);
        
        // 绘制关键点
        const landmarks = detection.landmarks;
        const positions = landmarks.positions;
        
        ctx.fillStyle = '#FFFFFF';
        positions.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
            ctx.fill();
        });
    });
}

// 在画布上绘制有趣的检测结果
function drawFunDetections(ctx, detections) {
    // 加载卡通效果图像
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    };
    
    // 为每个检测到的人脸绘制基本信息
    detections.forEach(async (detection) => {
        const { box } = detection.detection;
        const { age, gender, genderProbability } = detection;
        
        // 绘制彩色人脸框
        ctx.strokeStyle = gender === 'male' ? '#4A90E2' : '#E24A8E';
        ctx.lineWidth = 3;
        ctx.strokeRect(box.x, box.y, box.width, box.height);
        
        // 添加年龄效果
        if (age < 18) {
            // 年轻效果 - 明亮色彩
            ctx.fillStyle = 'rgba(255, 255, 0, 0.15)';
            ctx.fillRect(box.x, box.y, box.width, box.height);
            
            // 添加卡通贴纸
            try {
                const sticker = await loadImage('https://cdn-icons-png.flaticon.com/512/5229/5229377.png');
                ctx.drawImage(sticker, box.x + box.width - 40, box.y - 30, 40, 40);
            } catch (e) {
                console.error('Failed to load young sticker');
            }
        } else if (age >= 18 && age < 40) {
            // 成年效果 - 适中色彩
            ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
            ctx.fillRect(box.x, box.y, box.width, box.height);
            
            // 添加卡通贴纸
            try {
                const sticker = await loadImage('https://cdn-icons-png.flaticon.com/512/5229/5229391.png');
                ctx.drawImage(sticker, box.x + box.width - 40, box.y - 30, 40, 40);
            } catch (e) {
                console.error('Failed to load adult sticker');
            }
        } else {
            // 年长效果 - 暖色调
            ctx.fillStyle = 'rgba(255, 165, 0, 0.15)';
            ctx.fillRect(box.x, box.y, box.width, box.height);
            
            // 添加卡通贴纸
            try {
                const sticker = await loadImage('https://cdn-icons-png.flaticon.com/512/5229/5229383.png');
                ctx.drawImage(sticker, box.x + box.width - 40, box.y - 30, 40, 40);
            } catch (e) {
                console.error('Failed to load senior sticker');
            }
        }
        
        // 绘制年龄和性别标签背景
        const labelText = `${Math.round(age)} years, ${gender}`;
        const labelY = box.y - 10;
        const labelPadding = 5;
        
        ctx.font = 'bold 16px Arial';
        const labelWidth = ctx.measureText(labelText).width + labelPadding * 2;
        
        ctx.fillStyle = gender === 'male' ? 'rgba(74, 144, 226, 0.8)' : 'rgba(226, 74, 142, 0.8)';
        ctx.fillRect(box.x, labelY - 16, labelWidth, 20);
        
        // 绘制文本
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(labelText, box.x + labelPadding, labelY);
    });
}

// 设置画布引用
function setCanvasRef(el, idx) {
    if (!el || !analyzedImages[idx]) return

    canvasRefs.value[idx] = el
    const ctx = el.getContext('2d')
    const img = analyzedImages[idx]
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
    const img = analyzedImages[idx]
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
    const img = analyzedImages[idx]
    previewUrl.value = img.canvas.toDataURL(img.exportType, img.quality)
}


// 批量下载功能
async function downloadAll() {
    const zip = new JSZip()
    isProcessing.value = true // **补充14: 显示处理状态**
    try {
        for (let i = 0; i < analyzedImages.length; i++) {
            const img = analyzedImages[i]
            const originalCanvas = img.canvas
            const mime = img.exportType
            const ext = mime.split('/')[1]
            const quality = img.quality || 0.92
            const url = originalCanvas.toDataURL(mime, quality)
            const response = await fetch(url)
            const blob = await response.blob()
            zip.file(img.name.replace(/\.\w+$/i, `.${ext}`), blob)
        }
        const content = await zip.generateAsync({ type: 'blob' })
        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = 'analyzed_images.zip'
        a.click()
        URL.revokeObjectURL(url)
    } catch (error) {
        console.error('Error creating zip:', error)
        alert(t('tools.ai-age-gender-estimator.zipError'))
    } finally {
        isProcessing.value = false
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
