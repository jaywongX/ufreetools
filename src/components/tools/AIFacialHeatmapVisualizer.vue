<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.ai-facial-heatmap-visualizer.inputTitle') }}</h2>
                
                <!-- 参数设置区域 -->
                <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 class="font-medium mb-2 text-sm">{{ $t('tools.ai-facial-heatmap-visualizer.paramSettings') || '参数设置' }}</h3>
                    
                    <!-- 热图强度 -->
                    <div class="mb-3">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.ai-facial-heatmap-visualizer.heatmapIntensity') || '热图强度' }}: {{ heatmapSettings.intensity }}
                        </label>
                        <input type="range" min="0.3" max="1" step="0.05" v-model.number="heatmapSettings.intensity" class="w-full" />
                    </div>
                    
                    <!-- 热点大小 -->
                    <div class="mb-3">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.ai-facial-heatmap-visualizer.heatmapRadius') || '热点大小' }}: {{ heatmapSettings.radius }}
                        </label>
                        <input type="range" min="5" max="25" step="1" v-model.number="heatmapSettings.radius" class="w-full" />
                    </div>
                    
                    <!-- 颜色方案 -->
                    <div class="mb-3">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.ai-facial-heatmap-visualizer.colorScheme') || '颜色方案' }}:
                        </label>
                        <div class="grid grid-cols-3 gap-2">
                            <button 
                                v-for="(scheme, idx) in colorSchemes" 
                                :key="idx"
                                @click="heatmapSettings.colorScheme = idx"
                                class="p-1 rounded border flex items-center justify-center h-8"
                                :class="{'border-blue-500 ring-2 ring-blue-300': heatmapSettings.colorScheme === idx}">
                                <div class="flex w-full h-full">
                                    <div v-for="color in scheme" :style="{backgroundColor: `rgb(${color.r},${color.g},${color.b})`, flex: 1}"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                    <!-- 显示特征点 -->
                    <div class="mb-3">
                        <label class="flex items-center text-sm text-gray-700 dark:text-gray-300">
                            <input type="checkbox" v-model="heatmapSettings.showLandmarks" class="mr-2">
                            {{ $t('tools.ai-facial-heatmap-visualizer.showLandmarks') || '显示特征点' }}
                        </label>
                    </div>
                </div>

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
                    <span class="text-gray-500">{{ $t('tools.ai-facial-heatmap-visualizer.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.ai-facial-heatmap-visualizer.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.ai-facial-heatmap-visualizer.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalImages.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.ai-facial-heatmap-visualizer.preview') }} ({{ originalImages.length
                        }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.ai-facial-heatmap-visualizer.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.ai-facial-heatmap-visualizer.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.ai-facial-heatmap-visualizer.deleteImage')">
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
                <button class="btn btn-primary w-full mt-4" :disabled="!originalImages.length || isProcessing" @click="processAll">
                    <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {{ $t('tools.ai-facial-heatmap-visualizer.processBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.ai-facial-heatmap-visualizer.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="processedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.ai-facial-heatmap-visualizer.batchDownload') }}
                    </button>
                </div>

                <div v-if="processedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in processedImages" :key="idx"
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
                                    @click="zoomIn(idx)" :aria-label="$t('tools.ai-facial-heatmap-visualizer.zoomIn')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.ai-facial-heatmap-visualizer.zoomOut')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.ai-facial-heatmap-visualizer.resetView')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="previewImage(idx)" :aria-label="$t('tools.ai-facial-heatmap-visualizer.fullscreen')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 分析结果 -->
                        <div v-if="img.analysis" class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <h4 class="font-medium mb-2">{{ $t('tools.ai-facial-heatmap-visualizer.analysisTitle') }}</h4>
                            <ul class="space-y-1 text-sm">
                                <li v-for="(tip, i) in img.analysis" :key="i" class="flex items-start">
                                    <svg class="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{{ tip }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- 导出选项 -->
                        <div class="mt-4 space-y-4">
                            <!-- 导出格式选择 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.ai-facial-heatmap-visualizer.exportFormat') }}
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
                                    {{ $t('tools.ai-facial-heatmap-visualizer.imageQuality') }}: {{ Math.round(img.quality * 100)
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
                                    {{ $t('tools.ai-facial-heatmap-visualizer.downloadBtn') }}
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
                    <p class="mt-4 text-gray-500">{{ $t('tools.ai-facial-heatmap-visualizer.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- 模型加载状态 -->
        <div v-if="isModelLoading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
                <div class="flex items-center justify-center mb-4">
                    <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h3 class="text-lg font-medium">{{ $t('tools.ai-facial-heatmap-visualizer.loadingModels') }}</h3>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: `${modelLoadingProgress}%` }"></div>
                </div>
                <p class="text-sm text-gray-500 mt-2 text-center">{{ $t('tools.ai-facial-heatmap-visualizer.loadingModelsTip') }}</p>
            </div>
        </div>

        <!-- 全屏预览模态框 -->
        <div v-if="previewImageUrl" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click="previewImageUrl = null">
            <div class="max-w-4xl w-full max-h-[90vh] p-2" @click.stop>
                <img :src="previewImageUrl" class="max-w-full max-h-[80vh] mx-auto object-contain" />
                <button class="mt-4 mx-auto block bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100" @click="previewImageUrl = null">
                    {{ $t('tools.ai-facial-heatmap-visualizer.closePreview') }}
                </button>
            </div>
        </div>

        <!-- 底部声明 -->
        <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 p-4 border-t">
            <p>{{ $t('tools.ai-facial-heatmap-visualizer.disclaimer') }}</p>
            <p class="mt-2">{{ $t('tools.ai-facial-heatmap-visualizer.modelInfo') }}</p>
        </div>

        <AIFacialHeatmapVisualizerArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AIFacialHeatmapVisualizerArticle from './AIFacialHeatmapVisualizerArticle.vue'
import * as faceapi from 'face-api.js'

const { t } = useI18n()

const fileInput = ref(null)
const originalImages = ref([])
const processedImages = reactive([])
const previewImageUrl = ref(null)
const isDragging = ref(false)
const imageContainers = reactive([])
const canvasRefs = ref([])
const isModelLoading = ref(false)
const modelLoadingProgress = ref(0)
const isProcessing = ref(false)
const modelsLoaded = ref(false)

// 图像变换状态
const transformStates = reactive([])

// 热力图设置
const heatmapSettings = reactive({
    intensity: 0.7,
    radius: 15,
    colorScheme: 0,
    showLandmarks: false
})

// 颜色方案
const colorSchemes = [
    // 默认方案：蓝-绿-红
    [
        { value: 0, r: 0, g: 0, b: 255, a: 0.6 },    // 蓝色 (低)
        { value: 0.5, r: 0, g: 255, b: 0, a: 0.6 },  // 绿色 (中)
        { value: 1, r: 255, g: 0, b: 0, a: 0.6 }     // 红色 (高)
    ],
    // 热力方案：黄-橙-红
    [
        { value: 0, r: 255, g: 255, b: 0, a: 0.6 },  // 黄色 (低)
        { value: 0.5, r: 255, g: 165, b: 0, a: 0.6 }, // 橙色 (中)
        { value: 1, r: 255, g: 0, b: 0, a: 0.6 }     // 红色 (高)
    ],
    // 彩虹方案：紫-蓝-绿-黄-红
    [
        { value: 0, r: 148, g: 0, b: 211, a: 0.6 },  // 紫色 (低)
        { value: 0.25, r: 0, g: 0, b: 255, a: 0.6 }, // 蓝色
        { value: 0.5, r: 0, g: 255, b: 0, a: 0.6 },  // 绿色
        { value: 0.75, r: 255, g: 255, b: 0, a: 0.6 }, // 黄色
        { value: 1, r: 255, g: 0, b: 0, a: 0.6 }     // 红色 (高)
    ]
]

// 获取当前颜色方案
const getHeatmapColors = () => {
    return colorSchemes[heatmapSettings.colorScheme];
}

// 示例图片
const sampleImages = [
    {
        name: 'ai-facial-heatmap-visualizer-sample-face-1.png',
        url: '/images/ai-facial-heatmap-visualizer-sample-face-1.png',
        fallbackUrl: 'https://www.ufreetools.com/images/ai-facial-heatmap-visualizer-sample-face-1.png'
    },
    {
        name: 'ai-facial-heatmap-visualizer-sample-face-2.png',
        url: '/images/ai-facial-heatmap-visualizer-sample-face-2.png',
        fallbackUrl: 'https://www.ufreetools.com/images/ai-facial-heatmap-visualizer-sample-face-2.png'
    }
]

// 加载模型
async function loadModels() {
    if (modelsLoaded.value) return

    isModelLoading.value = true
    modelLoadingProgress.value = 0

    try {
        const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model'
        
        // 加载模型
        await faceapi.nets.tinyFaceDetector.load(MODEL_URL)
        modelLoadingProgress.value = 25
        
        await faceapi.nets.faceLandmark68Net.load(MODEL_URL)
        modelLoadingProgress.value = 50
        
        await faceapi.nets.faceRecognitionNet.load(MODEL_URL)
        modelLoadingProgress.value = 75
        
        await faceapi.nets.faceExpressionNet.load(MODEL_URL)
        modelLoadingProgress.value = 100
        
        modelsLoaded.value = true
    } catch (error) {
        console.error('Error loading face-api models:', error)
    } finally {
        isModelLoading.value = false
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
    
    // 确保模型已加载
    if (!modelsLoaded.value) {
        await loadModels()
    }
    
    // 自动处理图片
    if (originalImages.value.length > 0) {
        await nextTick()
        processAll()
    }
}

// 在组件挂载时加载模型
onMounted(() => {
    loadModels()
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

// 处理所有图片
async function processAll() {
    if (!modelsLoaded.value) {
        await loadModels()
    }
    
    isProcessing.value = true
    processedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)

    for (let idx = 0; idx < originalImages.value.length; idx++) {
        const img = originalImages.value[idx]
        await processImage(img, idx)
    }
    
    isProcessing.value = false
}

// 监听热图设置变化，自动重新处理图片
watch(heatmapSettings, () => {
    if (originalImages.value.length > 0 && !isProcessing.value) {
        processAll()
    }
}, { deep: true })

// 处理单张图片
async function processImage(img, idx) {
    const image = new window.Image()
    image.crossOrigin = "Anonymous"  // 允许跨域图片
    image.src = img.url

    try {
        await new Promise((resolve, reject) => {
            image.onload = resolve
            image.onerror = reject
            if (image.complete) resolve()
        })

        // 创建输入画布
        const inputCanvas = document.createElement('canvas')
        inputCanvas.width = image.naturalWidth || image.width
        inputCanvas.height = image.naturalHeight || image.height
        const inputCtx = inputCanvas.getContext('2d')
        inputCtx.drawImage(image, 0, 0)

        // 创建输出画布
        const outputCanvas = document.createElement('canvas')
        outputCanvas.width = inputCanvas.width
        outputCanvas.height = inputCanvas.height
        const outputCtx = outputCanvas.getContext('2d')
        outputCtx.drawImage(image, 0, 0)

        // 检测人脸
        const detections = await faceapi.detectAllFaces(
            inputCanvas, 
            new faceapi.TinyFaceDetectorOptions()
        ).withFaceLandmarks().withFaceExpressions()

        // 分析结果
        const analysis = []
        
        if (detections.length === 0) {
            analysis.push(t('tools.ai-facial-heatmap-visualizer.noFaceDetected'))
        } else {
            // 为每个检测到的人脸创建热力图
            for (let i = 0; i < detections.length; i++) {
                const detection = detections[i]
                const landmarks = detection.landmarks
                const expressions = detection.expressions
                
                // 获取人脸区域
                const box = detection.detection.box
                
                // 创建热力图
                createFacialHeatmap(outputCtx, landmarks, box)
                
                // 分析表情
                const dominantExpression = getDominantExpression(expressions)
                analysis.push(t('tools.ai-facial-heatmap-visualizer.expressionDetected', { expression: dominantExpression }))
                
                // 分析光照
                const lightingAnalysis = analyzeFacialLighting(inputCanvas, landmarks, box)
                analysis.push(...lightingAnalysis)
                
                // 分析人脸位置
                const positionAnalysis = analyzeFacialPosition(box, inputCanvas)
                analysis.push(...positionAnalysis)
            }
        }

        // 添加到处理后的图片列表
        processedImages.push({
            canvas: outputCanvas,
            width: outputCanvas.width,
            height: outputCanvas.height,
            exportType: 'image/png',
            quality: 0.92,
            name: img.name.replace(/\.(\w+)$/, '_heatmap.$1'),
            analysis: analysis
        })

        // 初始化变换状态
        transformStates.push({
            scale: 0.5,
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
        console.error('Error processing image:', error)
    }
}

// 创建面部热力图
function createFacialHeatmap(ctx, landmarks, box) {
    // 绘制人脸轮廓
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.lineWidth = 2
    ctx.strokeRect(box.x, box.y, box.width, box.height)
    
    // 获取关键点
    const points = landmarks.positions
    
    // 创建热力图
    const heatmapCanvas = document.createElement('canvas')
    heatmapCanvas.width = ctx.canvas.width
    heatmapCanvas.height = ctx.canvas.height
    const heatmapCtx = heatmapCanvas.getContext('2d')
    
    // 绘制热力图
    for (let i = 0; i < points.length; i++) {
        const point = points[i]
        const confidence = getPointConfidence(i, points)
        
        // 使用用户设置的半径
        const radius = heatmapSettings.radius * confidence
        
        // 绘制热点
        const gradient = heatmapCtx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, radius
        )
        
        // 根据置信度设置颜色
        const color = getColorForValue(confidence)
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        heatmapCtx.fillStyle = gradient
        heatmapCtx.beginPath()
        heatmapCtx.arc(point.x, point.y, radius, 0, Math.PI * 2)
        heatmapCtx.fill()
    }
    
    // 显示特征点（如果启用）
    if (heatmapSettings.showLandmarks) {
        heatmapCtx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        for (let i = 0; i < points.length; i++) {
            const point = points[i]
            heatmapCtx.beginPath()
            heatmapCtx.arc(point.x, point.y, 1.5, 0, Math.PI * 2)
            heatmapCtx.fill()
        }
    }
    
    // 将热力图叠加到原始图像上（使用用户设置的强度）
    ctx.globalAlpha = heatmapSettings.intensity
    ctx.drawImage(heatmapCanvas, 0, 0)
    ctx.globalAlpha = 1.0
}

// 获取点的置信度（这里简化为根据点的类型分配不同的置信度）
function getPointConfidence(index, points) {
    // 眼睛区域 (36-47) 通常检测精度较高
    if (index >= 36 && index <= 47) {
        return 0.9 + Math.random() * 0.1
    }
    // 嘴巴区域 (48-67) 检测精度中等
    else if (index >= 48 && index <= 67) {
        return 0.7 + Math.random() * 0.2
    }
    // 鼻子区域 (27-35) 检测精度较高
    else if (index >= 27 && index <= 35) {
        return 0.8 + Math.random() * 0.15
    }
    // 其他区域
    else {
        return 0.6 + Math.random() * 0.3
    }
}

// 根据值获取颜色（线性插值）
function getColorForValue(value) {
    // 确保值在 0-1 范围内
    value = Math.max(0, Math.min(1, value))
    
    // 获取当前颜色方案
    const colors = getHeatmapColors()
    
    // 找到对应的颜色区间
    let startColor, endColor, startValue, endValue
    
    for (let i = 0; i < colors.length - 1; i++) {
        if (value >= colors[i].value && value <= colors[i + 1].value) {
            startColor = colors[i]
            endColor = colors[i + 1]
            startValue = colors[i].value
            endValue = colors[i + 1].value
            break
        }
    }
    
    // 如果没有找到匹配的区间，使用最后一个颜色
    if (!startColor) {
        return {
            r: colors[colors.length - 1].r,
            g: colors[colors.length - 1].g,
            b: colors[colors.length - 1].b,
            a: colors[colors.length - 1].a
        }
    }
    
    // 计算插值比例
    const ratio = (value - startValue) / (endValue - startValue)
    
    // 线性插值计算颜色
    return {
        r: Math.round(startColor.r + ratio * (endColor.r - startColor.r)),
        g: Math.round(startColor.g + ratio * (endColor.g - startColor.g)),
        b: Math.round(startColor.b + ratio * (endColor.b - startColor.b)),
        a: startColor.a + ratio * (endColor.a - startColor.a)
    }
}

// 获取主要表情
function getDominantExpression(expressions) {
    let maxExpression = null
    let maxValue = -1
    
    for (const [expression, value] of Object.entries(expressions)) {
        if (value > maxValue) {
            maxValue = value
            maxExpression = expression
        }
    }
    
    // 将表情名称转换为更友好的格式
    const expressionMap = {
        'neutral': t('tools.ai-facial-heatmap-visualizer.expressions.neutral'),
        'happy': t('tools.ai-facial-heatmap-visualizer.expressions.happy'),
        'sad': t('tools.ai-facial-heatmap-visualizer.expressions.sad'),
        'angry': t('tools.ai-facial-heatmap-visualizer.expressions.angry'),
        'fearful': t('tools.ai-facial-heatmap-visualizer.expressions.fearful'),
        'disgusted': t('tools.ai-facial-heatmap-visualizer.expressions.disgusted'),
        'surprised': t('tools.ai-facial-heatmap-visualizer.expressions.surprised')
    }
    
    return expressionMap[maxExpression] || maxExpression
}

// 分析面部光照
function analyzeFacialLighting(canvas, landmarks, box) {
    const ctx = canvas.getContext('2d')
    const analysis = []
    
    // 获取左右脸颊区域
    const leftCheek = {
        x: landmarks.positions[1].x,
        y: landmarks.positions[1].y,
        width: (box.width / 4),
        height: (box.height / 4)
    }
    
    const rightCheek = {
        x: landmarks.positions[15].x - (box.width / 4),
        y: landmarks.positions[15].y,
        width: (box.width / 4),
        height: (box.height / 4)
    }
    
    // 获取左右脸颊区域的亮度
    const leftBrightness = getAverageBrightness(ctx, leftCheek)
    const rightBrightness = getAverageBrightness(ctx, rightCheek)
    
    // 比较左右脸颊亮度
    const brightnessDiff = Math.abs(leftBrightness - rightBrightness)
    const brightnessRatio = Math.min(leftBrightness, rightBrightness) / Math.max(leftBrightness, rightBrightness)
    
    if (brightnessDiff > 20 && brightnessRatio < 0.8) {
        if (leftBrightness < rightBrightness) {
            analysis.push(t('tools.ai-facial-heatmap-visualizer.lightingTips.leftDark'))
        } else {
            analysis.push(t('tools.ai-facial-heatmap-visualizer.lightingTips.rightDark'))
        }
    }
    
    // 获取整体亮度
    const overallBrightness = (leftBrightness + rightBrightness) / 2
    
    if (overallBrightness < 60) {
        analysis.push(t('tools.ai-facial-heatmap-visualizer.lightingTips.tooLow'))
    } else if (overallBrightness > 200) {
        analysis.push(t('tools.ai-facial-heatmap-visualizer.lightingTips.tooHigh'))
    } else if (overallBrightness > 100 && overallBrightness < 180) {
        analysis.push(t('tools.ai-facial-heatmap-visualizer.lightingTips.good'))
    }
    
    return analysis
}

// 获取区域平均亮度
function getAverageBrightness(ctx, area) {
    try {
        const imageData = ctx.getImageData(area.x, area.y, area.width, area.height)
        const data = imageData.data
        let sum = 0
        let count = 0
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i]
            const g = data[i + 1]
            const b = data[i + 2]
            
            // 计算亮度 (简化的亮度公式)
            const brightness = (r + g + b) / 3
            sum += brightness
            count++
        }
        
        return sum / count
    } catch (error) {
        console.error('Error calculating brightness:', error)
        return 128 // 返回中等亮度作为默认值
    }
}

// 分析人脸位置
function analyzeFacialPosition(box, canvas) {
    const analysis = []
    const centerX = box.x + box.width / 2
    const centerY = box.y + box.height / 2
    
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    
    // 检查人脸是否居中
    const horizontalOffset = Math.abs((centerX / canvasWidth) - 0.5)
    const verticalOffset = Math.abs((centerY / canvasHeight) - 0.5)
    
    if (horizontalOffset > 0.2) {
        if (centerX < canvasWidth / 2) {
            analysis.push(t('tools.ai-facial-heatmap-visualizer.positionTips.tooLeft'))
        } else {
            analysis.push(t('tools.ai-facial-heatmap-visualizer.positionTips.tooRight'))
        }
    }
    
    if (verticalOffset > 0.2) {
        if (centerY < canvasHeight / 2) {
            analysis.push(t('tools.ai-facial-heatmap-visualizer.positionTips.tooHigh'))
        } else {
            analysis.push(t('tools.ai-facial-heatmap-visualizer.positionTips.tooLow'))
        }
    }
    
    // 检查人脸大小
    const faceRatio = (box.width * box.height) / (canvasWidth * canvasHeight)
    
    if (faceRatio < 0.05) {
        analysis.push(t('tools.ai-facial-heatmap-visualizer.positionTips.tooSmall'))
    } else if (faceRatio > 0.5) {
        analysis.push(t('tools.ai-facial-heatmap-visualizer.positionTips.tooBig'))
    }
    
    return analysis
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
    const img = processedImages[idx]
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
    const img = processedImages[idx]
    previewImageUrl.value = img.canvas.toDataURL(img.exportType, img.quality)
}

// 批量下载功能
async function downloadAll() {
    const zip = new JSZip()

    // 添加所有图片到 zip
    for (let i = 0; i < processedImages.length; i++) {
        const img = processedImages[i]
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
    a.download = 'facial_heatmap_images.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 组件卸载时清理资源
onBeforeUnmount(() => {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
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
