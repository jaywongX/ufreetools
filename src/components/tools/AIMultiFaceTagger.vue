<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left side: Input area -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.ai-multi-face-tagger.inputTitle') }}</h2>

                <!-- File upload area -->
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
                    <span class="text-gray-500">{{ $t('tools.ai-multi-face-tagger.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.ai-multi-face-tagger.supported') }}</span>
                </div>

                <!-- Sample image button -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.ai-multi-face-tagger.loadSample') }}
                    </button>
                </div>

                <!-- Preview area -->
                <div v-if="originalImages.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.ai-multi-face-tagger.preview') }} ({{ originalImages.length
                        }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.ai-multi-face-tagger.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.ai-multi-face-tagger.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.ai-multi-face-tagger.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Action button -->
                <button class="btn btn-primary w-full mt-4" :disabled="!originalImages.length || isProcessing" @click="detectFaces">
                    <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ $t('tools.ai-multi-face-tagger.detectBtn') }}
                </button>
            </div>

            <!-- Right side: Output area -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.ai-multi-face-tagger.outputTitle') }}</h2>

                    <!-- Batch download button -->
                    <button v-if="taggedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.ai-multi-face-tagger.batchDownload') }}
                    </button>
                </div>

                <div v-if="taggedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(img, idx) in taggedImages" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- Image preview -->
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
                                    @click="zoomIn(idx)" :aria-label="$t('tools.ai-multi-face-tagger.zoomIn')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.ai-multi-face-tagger.zoomOut')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.ai-multi-face-tagger.resetView')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="previewImage(idx)" :aria-label="$t('tools.ai-multi-face-tagger.fullscreen')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Face tagging section -->
                        <div v-if="img.detections && img.detections.length > 0" class="mt-4 space-y-4">
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 class="font-medium text-lg mb-2">{{ $t('tools.ai-multi-face-tagger.detectedFaces') }} ({{ img.detections.length }})</h3>
                                
                                <div class="space-y-3">
                                    <div v-for="(face, i) in img.detections" :key="i" class="p-3 border rounded-lg">
                                        <div class="flex items-center justify-between">
                                            <span class="font-medium">{{ $t('tools.ai-multi-face-tagger.face') }} {{ i + 1 }}</span>
                                            <span class="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                                                {{ face.tag || $t('tools.ai-multi-face-tagger.untagged') }}
                                            </span>
                                        </div>
                                        
                                        <div class="mt-2">
                                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                {{ $t('tools.ai-multi-face-tagger.nameLabel') }}
                                            </label>
                                            <div class="flex space-x-2">
                                                <input type="text" v-model="face.tag" 
                                                    class="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
                                                    :placeholder="$t('tools.ai-multi-face-tagger.namePlaceholder')"
                                                    @input="updateCanvas(idx)" />
                                                <button class="btn btn-secondary btn-sm" @click="face.tag = ''; updateCanvas(idx)">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Export options -->
                            <div class="space-y-4">
                                <!-- Export format selection -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {{ $t('tools.ai-multi-face-tagger.exportFormat') }}
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

                                <!-- Quality slider -->
                                <div v-if="img.exportType === 'image/jpeg'" class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {{ $t('tools.ai-multi-face-tagger.imageQuality') }}: {{ Math.round(img.quality * 100) }}%
                                    </label>
                                    <input type="range" min="0.5" max="1" step="0.01" v-model.number="img.quality"
                                        class="w-full" />
                                </div>

                                <!-- Export options -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {{ $t('tools.ai-multi-face-tagger.exportOptions') }}
                                    </label>
                                    <div class="flex flex-wrap gap-4">
                                        <label class="flex items-center space-x-2">
                                            <input type="checkbox" v-model="img.exportWithOverlay" class="form-checkbox">
                                            <span>{{ $t('tools.ai-multi-face-tagger.exportWithOverlay') }}</span>
                                        </label>
                                        <label class="flex items-center space-x-2">
                                            <input type="checkbox" v-model="img.exportJSON" class="form-checkbox">
                                            <span>{{ $t('tools.ai-multi-face-tagger.exportJSON') }}</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Download buttons -->
                                <div class="flex gap-2">
                                    <button class="btn btn-success flex-1" @click="download(idx)">
                                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {{ $t('tools.ai-multi-face-tagger.downloadBtn') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- No faces detected -->
                        <div v-else class="mt-4 text-center py-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-gray-500">{{ $t('tools.ai-multi-face-tagger.noFaceDetected') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Empty state -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.ai-multi-face-tagger.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- Disclaimer section -->
        <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400">
            <h3 class="font-medium mb-2">{{ $t('tools.ai-multi-face-tagger.disclaimer') }}</h3>
            <p>{{ $t('tools.ai-multi-face-tagger.disclaimerText') }}</p>
            <p class="mt-2">{{ $t('tools.ai-multi-face-tagger.modelInfo') }}</p>
        </div>
        
        <AIMultiFaceTaggerArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AIMultiFaceTaggerArticle from './AIMultiFaceTaggerArticle.vue'
import * as faceapi from 'face-api.js'

const { t } = useI18n()

const fileInput = ref(null)
const originalImages = ref([])
const taggedImages = reactive([])
const previewUrl = ref(null)
const isDragging = ref(false)
const imageContainers = reactive([])
const canvasRefs = ref([])
const isProcessing = ref(false)
const modelsLoaded = ref(false)

// Image transformation states
const transformStates = reactive([])

// Sample images
const sampleImages = [
    {
        name: 'profile-sample3.png',
        url: '/images/profile-sample3.png',
        fallbackUrl: 'https://www.ufreetools.com/images/profile-sample3.png'
    }
]

// Load face-api.js models
async function loadModels() {
    if (modelsLoaded.value) return
    
    isProcessing.value = true
    try {
        // Use CDN-hosted models
        const modelUrl = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model'
        
        // Load required models
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl),
            faceapi.nets.faceLandmark68Net.loadFromUri(modelUrl),
            faceapi.nets.faceRecognitionNet.loadFromUri(modelUrl)
        ])
        
        modelsLoaded.value = true
    } catch (error) {
        console.error('Error loading face-api.js models:', error)
    } finally {
        isProcessing.value = false
    }
}

// Load sample images
async function loadSampleImages() {
    clearImages()
    for (const sample of sampleImages) {
        try {
            // Try to load local image, use fallback URL if it fails
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
    
    // Automatically detect faces
    if (originalImages.value.length > 0) {
        await nextTick()
        detectFaces()
    }
}

// Load models and sample images when component is mounted
onMounted(async () => {
    await loadModels()
    loadSampleImages()
})

// Clean up resources when component is unmounted
onBeforeUnmount(() => {
    // Release resources
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
})

// Handle file uploads
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (!/^image\/(png|jpeg|bmp|webp)$/.test(file.type)) return
        const url = URL.createObjectURL(file)
        originalImages.value.push({ file, url, name: file.name })
    })
    isDragging.value = false
}

// Handle drag and drop
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// Clear all images
function clearImages() {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
    originalImages.value = []
    taggedImages.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)
}

// Remove a single image
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
    if (taggedImages[idx]) {
        taggedImages.splice(idx, 1)
        transformStates.splice(idx, 1)
    }
}

// Detect faces in images
async function detectFaces() {
    if (!modelsLoaded.value) {
        await loadModels()
    }
    
    if (!originalImages.value.length) return
    
    isProcessing.value = true
    taggedImages.splice(0)
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

            // Create canvas
            const canvas = document.createElement('canvas')
            canvas.width = image.naturalWidth || image.width
            canvas.height = image.naturalHeight || image.height
            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0)
            
            // Detect faces
            const detections = await faceapi.detectAllFaces(
                image, 
                new faceapi.TinyFaceDetectorOptions()
            ).withFaceLandmarks()
            
            // Process detections to add tag property
            const processedDetections = detections.map(detection => {
                return {
                    box: detection.detection.box,
                    landmarks: detection.landmarks,
                    tag: ''
                }
            })
            
            // Draw faces on canvas
            drawDetectionsWithTags(ctx, processedDetections)

            taggedImages.push({
                canvas,
                width: canvas.width,
                height: canvas.height,
                exportType: 'image/png',
                quality: 0.92,
                name: img.name.replace(/\.(\w+)$/, '_tagged.$1'),
                detections: processedDetections,
                originalImage: image,
                exportWithOverlay: true,
                exportJSON: false
            })

            // Initialize transformation state
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
        console.error('Error detecting faces:', error)
    } finally {
        isProcessing.value = false
    }
}

// Draw face detections with tags
function drawDetectionsWithTags(ctx, detections) {
    detections.forEach((detection, i) => {
        const { x, y, width, height } = detection.box
        
        // 设置绘制样式 - 使用更明显的颜色
        ctx.lineWidth = 3
        ctx.strokeStyle = '#00ff00' // 绿色边框
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)' // 半透明绿色填充
        
        // 绘制人脸框
        ctx.beginPath()
        ctx.rect(x, y, width, height)
        ctx.stroke()
        ctx.fill()
        
        // 绘制编号标签背景
        const numberSize = 24
        ctx.fillStyle = '#00ff00' // 绿色背景
        ctx.fillRect(x, y - numberSize, numberSize, numberSize)
        
        // 绘制编号文字
        ctx.fillStyle = '#000000' // 黑色文字
        ctx.font = 'bold 16px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(
            (i + 1).toString(), 
            x + numberSize / 2, 
            y - numberSize / 2
        )
        
        // 如果有标签，绘制标签
        if (detection.tag && detection.tag.trim()) {
            const tagText = detection.tag.trim()
            ctx.font = 'bold 14px Arial'
            ctx.textAlign = 'left'
            ctx.textBaseline = 'top'
            
            // 测量文字宽度
            const textMetrics = ctx.measureText(tagText)
            const tagWidth = textMetrics.width + 10
            const tagHeight = 20
            
            // 绘制标签背景
            ctx.fillStyle = 'rgba(0, 200, 0, 0.9)' // 深绿色背景
            ctx.fillRect(x, y + height, tagWidth, tagHeight)
            
            // 绘制标签文字
            ctx.fillStyle = '#ffffff' // 白色文字
            ctx.fillText(tagText, x + 5, y + height + 3)
        }
        
        // 重置文字对齐方式
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
    })
}

// Update canvas when tags change
function updateCanvas(idx) {
    const img = taggedImages[idx]
    if (!img || !img.canvas) return
    
    const ctx = img.canvas.getContext('2d')
    
    // 清除画布
    ctx.clearRect(0, 0, img.canvas.width, img.canvas.height)
    
    // 重新绘制原始图像
    if (img.originalImage) {
        ctx.drawImage(img.originalImage, 0, 0)
    }
    
    // 重新绘制检测结果
    if (img.detections && img.detections.length > 0) {
        drawDetectionsWithTags(ctx, img.detections)
    }
    
    // 更新显示画布
    if (canvasRefs.value[idx]) {
        setCanvasRef(canvasRefs.value[idx], idx)
    }
}

// 同时也修复 setCanvasRef 函数，确保正确的颜色显示
function setCanvasRef(el, idx) {
    if (!el || !taggedImages[idx]) return

    canvasRefs.value[idx] = el
    const ctx = el.getContext('2d')
    const img = taggedImages[idx]
    const state = transformStates[idx]

    // 使用父元素宽度
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
    
    // 确保使用原始画布而不是重新绘制
    if (img.canvas) {
        ctx.drawImage(img.canvas, 0, 0, drawWidth, drawHeight)
    }

    ctx.restore()
}

// Image zoom and pan functionality
function startPan(e, idx) {
    const state = transformStates[idx]
    state.isDragging = true
    state.lastX = e.clientX
    state.lastY = e.clientY

    // Add global event listeners
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

    // Redraw
    setCanvasRef(canvasRefs.value[idx], idx)
}

// Touch event handling
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

    // Redraw
    setCanvasRef(canvasRefs.value[idx], idx)

    e.preventDefault()
}

function endTouch() {
    // End dragging state
    transformStates.forEach(state => {
        state.isDragging = false
    })
}

// Zoom handling
function handleZoom(e, idx) {
    e.preventDefault()

    const state = transformStates[idx]
    const delta = e.deltaY > 0 ? 0.9 : 1.1

    // Limit zoom range
    const newScale = Math.max(0.1, Math.min(10, state.scale * delta))
    state.scale = newScale

    // Redraw
    setCanvasRef(canvasRefs.value[idx], idx)
}

// Zoom buttons
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

// Preview image
function previewImage(idx) {
    const img = taggedImages[idx]
    previewUrl.value = img.canvas.toDataURL(img.exportType, img.quality)
}

// Download image
async function download(idx) {
    const img = taggedImages[idx]
    const originalCanvas = img.canvas
    const mime = img.exportType
    const ext = mime.split('/')[1]
    const quality = img.quality || 0.92
    
    // Create a zip file if JSON export is selected
    if (img.exportJSON) {
        const zip = new JSZip()
        
        // Add image to zip
        const imageUrl = originalCanvas.toDataURL(mime, quality)
        const imageResponse = await fetch(imageUrl)
        const imageBlob = await imageResponse.blob()
        zip.file(`${img.name.replace(/\.\w+$/, `.${ext}`)}`, imageBlob)
        
        // Add JSON data to zip
        const jsonData = {
            imageName: img.name,
            width: img.width,
            height: img.height,
            faces: img.detections.map((detection, index) => {
                return {
                    id: index + 1,
                    tag: detection.tag || '',
                    box: {
                        x: detection.box.x,
                        y: detection.box.y,
                        width: detection.box.width,
                        height: detection.box.height
                    }
                }
            })
        }
        zip.file(`${img.name.replace(/\.\w+$/, '.json')}`, JSON.stringify(jsonData, null, 2))
        
        // Generate and download zip
        const content = await zip.generateAsync({ type: 'blob' })
        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = `${img.name.replace(/\.\w+$/, '_with_tags.zip')}`
        a.click()
        URL.revokeObjectURL(url)
    } else {
        // Just download the image
        const url = originalCanvas.toDataURL(mime, quality)
        const a = document.createElement('a')
        a.href = url
        a.download = img.name.replace(/\.\w+$/, `.${ext}`)
        a.click()
    }
}

// Batch download functionality
async function downloadAll() {
    const zip = new JSZip()

    // Add all images to zip
    for (let i = 0; i < taggedImages.length; i++) {
        const img = taggedImages[i]
        const originalCanvas = img.canvas
        const mime = img.exportType
        const ext = mime.split('/')[1]
        const quality = img.quality || 0.92
        const url = originalCanvas.toDataURL(mime, quality)

        // Convert base64 to blob
        const response = await fetch(url)
        const blob = await response.blob()

        // Add to zip
        zip.file(img.name.replace(/\.\w+$/, `.${ext}`), blob)
        
        // Add JSON data if selected
        if (img.exportJSON) {
            const jsonData = {
                imageName: img.name,
                width: img.width,
                height: img.height,
                faces: img.detections.map((detection, index) => {
                    return {
                        id: index + 1,
                        tag: detection.tag || '',
                        box: {
                            x: detection.box.x,
                            y: detection.box.y,
                            width: detection.box.width,
                            height: detection.box.height
                        }
                    }
                })
            }
            zip.file(img.name.replace(/\.\w+$/, '.json'), JSON.stringify(jsonData, null, 2))
        }
    }

    // Generate and download zip
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'tagged_images.zip'
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
