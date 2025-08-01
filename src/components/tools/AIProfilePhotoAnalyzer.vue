<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.ai-profile-photo-analyzer.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.ai-profile-photo-analyzer.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.ai-profile-photo-analyzer.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.ai-profile-photo-analyzer.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalImages.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.ai-profile-photo-analyzer.preview') }} ({{ originalImages.length
                        }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.ai-profile-photo-analyzer.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.ai-profile-photo-analyzer.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.ai-profile-photo-analyzer.deleteImage')">
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
                <button class="btn btn-primary w-full mt-4" :disabled="!originalImages.length || isProcessing" @click="analyzePhotos">
                    <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {{ $t('tools.ai-profile-photo-analyzer.analyzeBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.ai-profile-photo-analyzer.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="analyzedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.ai-profile-photo-analyzer.batchDownload') }}
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
                                    @click="zoomIn(idx)" :aria-label="$t('tools.ai-profile-photo-analyzer.zoomIn')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.ai-profile-photo-analyzer.zoomOut')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.ai-profile-photo-analyzer.resetView')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="previewImage(idx)" :aria-label="$t('tools.ai-profile-photo-analyzer.fullscreen')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 分析结果 -->
                        <div class="mt-4 space-y-4">
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 class="font-medium text-lg mb-2">{{ $t('tools.ai-profile-photo-analyzer.analysisResults') }}</h3>
                                
                                <div v-if="img.analysis.faceDetected" class="space-y-3">
                                    <!-- 总体评分 -->
                                    <div class="flex items-center justify-between">
                                        <span class="font-medium">{{ $t('tools.ai-profile-photo-analyzer.overallScore') }}</span>
                                        <div class="flex items-center">
                                            <div class="w-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-2">
                                                <div class="bg-blue-600 h-2.5 rounded-full" :style="`width: ${img.analysis.overallScore}%`"></div>
                                            </div>
                                            <span class="text-sm font-medium">{{ img.analysis.overallScore }}%</span>
                                        </div>
                                    </div>
                                    
                                    <!-- 头部姿势 -->
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <span>{{ $t('tools.ai-profile-photo-analyzer.headPosition') }}</span>
                                            <span :class="getScoreColorClass(img.analysis.headPositionScore)">
                                                {{ getHeadPositionText(img.analysis.headPosition) }}
                                            </span>
                                        </div>
                                        <div v-if="img.analysis.headPositionTip" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {{ img.analysis.headPositionTip }}
                                        </div>
                                    </div>
                                    
                                    <!-- 微笑检测 -->
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <span>{{ $t('tools.ai-profile-photo-analyzer.smileDetection') }}</span>
                                            <span :class="getScoreColorClass(img.analysis.smileScore)">
                                                {{ img.analysis.smileScore }}%
                                            </span>
                                        </div>
                                        <div v-if="img.analysis.smileTip" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {{ img.analysis.smileTip }}
                                        </div>
                                    </div>
                                    
                                    <!-- 眼神接触 -->
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <span>{{ $t('tools.ai-profile-photo-analyzer.eyeContact') }}</span>
                                            <span :class="getScoreColorClass(img.analysis.eyeContactScore)">
                                                {{ img.analysis.eyeContactScore }}%
                                            </span>
                                        </div>
                                        <div v-if="img.analysis.eyeContactTip" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {{ img.analysis.eyeContactTip }}
                                        </div>
                                    </div>
                                    
                                    <!-- 光线质量 -->
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <span>{{ $t('tools.ai-profile-photo-analyzer.lightingQuality') }}</span>
                                            <span :class="getScoreColorClass(img.analysis.lightingScore)">
                                                {{ img.analysis.lightingScore }}%
                                            </span>
                                        </div>
                                        <div v-if="img.analysis.lightingTip" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {{ img.analysis.lightingTip }}
                                        </div>
                                    </div>
                                    
                                    <!-- 改进建议 -->
                                    <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">
                                            {{ $t('tools.ai-profile-photo-analyzer.recommendations.title') }}
                                        </h4>
                                        <ul class="list-disc list-inside space-y-1 text-sm">
                                            <li v-for="(tip, i) in img.analysis.recommendations" :key="i">{{ tip }}</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <!-- 未检测到人脸 -->
                                <div v-else class="text-center py-4">
                                    <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p class="text-gray-500">{{ $t('tools.ai-profile-photo-analyzer.noFaceDetected') }}</p>
                                </div>
                            </div>

                            <!-- 导出选项 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.ai-profile-photo-analyzer.exportFormat') }}
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
                                    {{ $t('tools.ai-profile-photo-analyzer.imageQuality') }}: {{ Math.round(img.quality * 100)
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
                                    {{ $t('tools.ai-profile-photo-analyzer.downloadBtn') }}
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
                    <p class="mt-4 text-gray-500">{{ $t('tools.ai-profile-photo-analyzer.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- 底部声明 -->
        <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400">
            <h3 class="font-medium mb-2">{{ $t('tools.ai-profile-photo-analyzer.disclaimer') }}</h3>
            <p>{{ $t('tools.ai-profile-photo-analyzer.disclaimerText') }}</p>
            <p class="mt-2">{{ $t('tools.ai-profile-photo-analyzer.modelInfo') }}</p>
        </div>
        
        <AIProfilePhotoAnalyzerArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, computed, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AIProfilePhotoAnalyzerArticle from './AIProfilePhotoAnalyzerArticle.vue'
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

// 图像变换状态
const transformStates = reactive([])

// 修改示例图片部分
const sampleImages = [
    {
        name: 'profile-sample1.png',
        url: '/images/profile-sample1.png',
        fallbackUrl: 'https://www.ufreetools.com/images/profile-sample1.png'
    },
    {
        name: 'profile-sample2.png',
        url: '/images/profile-sample2.png',
        fallbackUrl: 'https://www.ufreetools.com/images/profile-sample2.png'
    }
]

// 加载face-api.js模型
async function loadModels() {
    if (modelsLoaded.value) return
    
    isProcessing.value = true
    try {
        // 设置模型路径
        const modelPath = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model/'
        
        // 加载所需模型
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(modelPath),
            faceapi.nets.faceLandmark68Net.loadFromUri(modelPath),
            faceapi.nets.faceRecognitionNet.loadFromUri(modelPath),
            faceapi.nets.faceExpressionNet.loadFromUri(modelPath)
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
        analyzePhotos()
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

// 分析照片
async function analyzePhotos() {
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
            
            // 分析图像
            const analysis = await analyzeImage(image)
            
            // 在画布上绘制分析结果
            if (analysis.faceDetected) {
                drawFaceDetection(ctx, analysis.detection)
            }

            analyzedImages.push({
                canvas,
                width: canvas.width,
                height: canvas.height,
                exportType: 'image/png',
                quality: 0.92,
                name: img.name.replace(/\.(\w+)$/, '_analyzed.$1'),
                analysis
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
        console.error('Error analyzing photos:', error)
    } finally {
        isProcessing.value = false
    }
}

// 分析单张图像
async function analyzeImage(image) {
    try {
        // 检测人脸
        const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();
        
        // 如果没有检测到人脸，返回默认结果
        if (!detections || detections.length === 0) {
            return {
                faceDetected: false
            };
        }
        
        // 使用第一个检测到的人脸
        const detection = detections[0];
        const landmarks = detection.landmarks;
        const expressions = detection.expressions;
        
        // 分析头部姿势
        const headPosition = analyzeHeadPosition(landmarks);
        const headPositionScore = headPosition === 'straight' ? 100 : (headPosition === 'slightly_tilted' ? 70 : 40);
        const headPositionTip = getHeadPositionTip(headPosition);
        
        // 分析微笑
        const smileScore = Math.round(expressions.happy * 100);
        const smileTip = getSmileTip(smileScore);
        
        // 分析眼神接触
        const eyeContactScore = analyzeEyeContact(landmarks);
        const eyeContactTip = getEyeContactTip(eyeContactScore);
        
        // 分析光线质量
        const lightingScore = analyzeLighting(image);
        const lightingTip = getLightingTip(lightingScore);
        
        // 计算总体评分
        const overallScore = Math.round((headPositionScore + smileScore + eyeContactScore + lightingScore) / 4);
        
        // 生成改进建议
        const recommendations = generateRecommendations(headPositionScore, smileScore, eyeContactScore, lightingScore);
        
        return {
            faceDetected: true,
            detection,
            headPosition,
            headPositionScore,
            headPositionTip,
            smileScore,
            smileTip,
            eyeContactScore,
            eyeContactTip,
            lightingScore,
            lightingTip,
            overallScore,
            recommendations
        };
    } catch (error) {
        console.error('Error analyzing image:', error);
        return {
            faceDetected: false,
            error: error.message
        };
    }
}

// 分析头部姿势
function analyzeHeadPosition(landmarks) {
    // 简化版：通过眼睛和鼻子的相对位置判断头部是否倾斜
    const leftEye = landmarks.getLeftEye();
    const rightEye = landmarks.getRightEye();
    const nose = landmarks.getNose();
    
    // 计算眼睛的中心点
    const leftEyeCenter = {
        x: leftEye.reduce((sum, point) => sum + point.x, 0) / leftEye.length,
        y: leftEye.reduce((sum, point) => sum + point.y, 0) / leftEye.length
    };
    
    const rightEyeCenter = {
        x: rightEye.reduce((sum, point) => sum + point.x, 0) / rightEye.length,
        y: rightEye.reduce((sum, point) => sum + point.y, 0) / rightEye.length
    };
    
    // 计算眼睛连线的角度
    const angle = Math.atan2(rightEyeCenter.y - leftEyeCenter.y, rightEyeCenter.x - leftEyeCenter.x) * 180 / Math.PI;
    
    // 根据角度判断头部姿势
    if (Math.abs(angle) < 5) {
        return 'straight'; // 直立
    } else if (Math.abs(angle) < 10) {
        return 'slightly_tilted'; // 轻微倾斜
    } else {
        return 'tilted'; // 明显倾斜
    }
}

// 分析眼神接触
function analyzeEyeContact(landmarks) {
    // 简化版：通过眼睛的开合程度估计眼神接触
    const leftEye = landmarks.getLeftEye();
    const rightEye = landmarks.getRightEye();
    
    // 计算眼睛的垂直开合度
    const leftEyeOpen = calculateEyeOpenness(leftEye);
    const rightEyeOpen = calculateEyeOpenness(rightEye);
    
    // 取两只眼睛开合度的平均值作为眼神接触分数
    const eyeContactScore = Math.round((leftEyeOpen + rightEyeOpen) / 2 * 100);
    
    return Math.min(100, Math.max(0, eyeContactScore));
}

// 计算眼睛开合度
function calculateEyeOpenness(eye) {
    // 简化计算：上下眼睑的距离与眼睛宽度的比例
    const topY = Math.min(eye[1].y, eye[2].y);
    const bottomY = Math.max(eye[4].y, eye[5].y);
    const leftX = Math.min(eye[0].x, eye[1].x, eye[2].x, eye[3].x, eye[4].x, eye[5].x);
    const rightX = Math.max(eye[0].x, eye[1].x, eye[2].x, eye[3].x, eye[4].x, eye[5].x);
    
    const height = bottomY - topY;
    const width = rightX - leftX;
    
    return height / width;
}

// 分析光线质量
function analyzeLighting(image) {
    // 创建临时画布来分析图像亮度
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    
    // 获取图像数据
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // 计算平均亮度
    let totalBrightness = 0;
    for (let i = 0; i < data.length; i += 4) {
        // 使用RGB值的加权平均值计算亮度
        const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
        totalBrightness += brightness;
    }
    
    const avgBrightness = totalBrightness / (data.length / 4);
    
    // 将亮度转换为0-100的分数
    // 理想亮度在0.4-0.7之间
    let score;
    if (avgBrightness < 0.2) {
        // 太暗
        score = avgBrightness * 250; // 0-0.2 => 0-50
    } else if (avgBrightness < 0.4) {
        // 偏暗但可接受
        score = 50 + (avgBrightness - 0.2) * 250; // 0.2-0.4 => 50-100
    } else if (avgBrightness < 0.7) {
        // 理想亮度
        score = 100;
    } else if (avgBrightness < 0.9) {
        // 偏亮但可接受
        score = 100 - (avgBrightness - 0.7) * 250; // 0.7-0.9 => 100-50
    } else {
        // 太亮
        score = 50 - (avgBrightness - 0.9) * 500; // 0.9-1.0 => 50-0
    }
    
    return Math.round(Math.max(0, Math.min(100, score)));
}

// 获取头部姿势提示
function getHeadPositionTip(position) {
    switch (position) {
        case 'straight':
            return t('tools.ai-profile-photo-analyzer.tips.headStraight');
        case 'slightly_tilted':
            return t('tools.ai-profile-photo-analyzer.tips.headSlightlyTilted');
        case 'tilted':
            return t('tools.ai-profile-photo-analyzer.tips.headTilted');
        default:
            return '';
    }
}

// 获取微笑提示
function getSmileTip(score) {
    if (score < 20) {
        return t('tools.ai-profile-photo-analyzer.tips.smileLow');
    } else if (score < 50) {
        return t('tools.ai-profile-photo-analyzer.tips.smileMedium');
    } else if (score < 80) {
        return t('tools.ai-profile-photo-analyzer.tips.smileGood');
    } else {
        return t('tools.ai-profile-photo-analyzer.tips.smileExcellent');
    }
}

// 获取眼神接触提示
function getEyeContactTip(score) {
    if (score < 30) {
        return t('tools.ai-profile-photo-analyzer.tips.eyeContactLow');
    } else if (score < 60) {
        return t('tools.ai-profile-photo-analyzer.tips.eyeContactMedium');
    } else if (score < 85) {
        return t('tools.ai-profile-photo-analyzer.tips.eyeContactGood');
    } else {
        return t('tools.ai-profile-photo-analyzer.tips.eyeContactExcellent');
    }
}

// 获取光线质量提示
function getLightingTip(score) {
    if (score < 30) {
        return t('tools.ai-profile-photo-analyzer.tips.lightingLow');
    } else if (score < 60) {
        return t('tools.ai-profile-photo-analyzer.tips.lightingMedium');
    } else if (score < 85) {
        return t('tools.ai-profile-photo-analyzer.tips.lightingGood');
    } else {
        return t('tools.ai-profile-photo-analyzer.tips.lightingExcellent');
    }
}

// 生成改进建议
function generateRecommendations(headPositionScore, smileScore, eyeContactScore, lightingScore) {
    const recommendations = [];
    
    if (headPositionScore < 70) {
        recommendations.push(t('tools.ai-profile-photo-analyzer.recommendations.improveHeadPosition'));
    }
    
    if (smileScore < 40) {
        recommendations.push(t('tools.ai-profile-photo-analyzer.recommendations.improveSmile'));
    } else if (smileScore > 90) {
        recommendations.push(t('tools.ai-profile-photo-analyzer.recommendations.naturalSmile'));
    }
    
    if (eyeContactScore < 60) {
        recommendations.push(t('tools.ai-profile-photo-analyzer.recommendations.improveEyeContact'));
    }
    
    if (lightingScore < 60) {
        recommendations.push(t('tools.ai-profile-photo-analyzer.recommendations.improveLighting'));
    }
    
    // 如果没有具体建议，添加一个通用的积极反馈
    if (recommendations.length === 0) {
        recommendations.push(t('tools.ai-profile-photo-analyzer.recommendations.goodPhoto'));
    }
    
    return recommendations;
}

// 在画布上绘制人脸检测结果
function drawFaceDetection(ctx, detection) {
    // 绘制人脸框
    const box = detection.detection.box;
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.strokeRect(box.x, box.y, box.width, box.height);
    
    // 绘制关键点
    const landmarks = detection.landmarks;
    const points = landmarks.positions;
    
    ctx.fillStyle = '#FF5722';
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// 获取头部姿势文本
function getHeadPositionText(position) {
    switch (position) {
        case 'straight':
            return t('tools.ai-profile-photo-analyzer.positions.straight');
        case 'slightly_tilted':
            return t('tools.ai-profile-photo-analyzer.positions.slightlyTilted');
        case 'tilted':
            return t('tools.ai-profile-photo-analyzer.positions.tilted');
        default:
            return t('tools.ai-profile-photo-analyzer.positions.unknown');
    }
}

// 获取分数颜色类
function getScoreColorClass(score) {
    if (score >= 80) {
        return 'text-green-600 dark:text-green-400 font-medium';
    } else if (score >= 60) {
        return 'text-blue-600 dark:text-blue-400 font-medium';
    } else if (score >= 40) {
        return 'text-yellow-600 dark:text-yellow-400 font-medium';
    } else {
        return 'text-red-600 dark:text-red-400 font-medium';
    }
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

    // 添加所有图片到 zip
    for (let i = 0; i < analyzedImages.length; i++) {
        const img = analyzedImages[i]
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
    a.download = 'analyzed_photos.zip'
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
