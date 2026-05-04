<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left side: Input area -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.ai-face-morph-blend.inputTitle') }}</h2>

                <!-- Model loading status -->
                <div v-if="isModelLoading" class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div class="flex items-center">
                        <svg class="animate-spin h-5 w-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{{ $t('tools.ai-face-morph-blend.modelLoading') }}</span>
                    </div>
                </div>

                <!-- First image upload area -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.ai-face-morph-blend.uploadFirstImage') }}</label>
                    <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="(e) => handleDrop(e, 0)" @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false" @click="() => fileInputs[0].click()"
                        :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                        <input type="file" ref="fileInput1" class="hidden" accept="image/png,image/jpeg,image/bmp,image/webp"
                            @change="(e) => handleFiles(e, 0)" />
                        <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="text-gray-500">{{ $t('tools.ai-face-morph-blend.dragTip') }}</span>
                        <span class="text-xs text-gray-400 mt-2">{{ $t('tools.ai-face-morph-blend.supported') }}</span>
                    </div>
                </div>

                <!-- Second image upload area -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.ai-face-morph-blend.uploadSecondImage') }}</label>
                    <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="(e) => handleDrop(e, 1)" @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false" @click="() => fileInputs[1].click()"
                        :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                        <input type="file" ref="fileInput2" class="hidden" accept="image/png,image/jpeg,image/bmp,image/webp"
                            @change="(e) => handleFiles(e, 1)" />
                        <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="text-gray-500">{{ $t('tools.ai-face-morph-blend.dragTip') }}</span>
                        <span class="text-xs text-gray-400 mt-2">{{ $t('tools.ai-face-morph-blend.supported') }}</span>
                    </div>
                </div>

                <!-- Sample images button -->
                <div class="flex justify-between items-center mb-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.ai-face-morph-blend.loadSample') }}
                    </button>
                    <button v-if="originalImages.length" class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                        {{ $t('tools.ai-face-morph-blend.clearAll') }}
                    </button>
                </div>

                <!-- Preview area -->
                <div v-if="originalImages.length" class="space-y-4 mb-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-32 object-cover"
                                :alt="`${$t('tools.ai-face-morph-blend.originalImage')} ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.ai-face-morph-blend.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-1 text-center">
                                {{ idx === 0 ? $t('tools.ai-face-morph-blend.person1') : $t('tools.ai-face-morph-blend.person2') }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Morph ratio slider -->
                <div v-if="originalImages.length === 2 && !isProcessing" class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.ai-face-morph-blend.morphRatio') }}</label>
                    <div class="flex items-center space-x-2">
                        <span class="text-xs">{{ $t('tools.ai-face-morph-blend.person1') }}</span>
                        <input type="range" min="0" max="1" step="0.01" v-model.number="morphRatio" class="w-full" />
                        <span class="text-xs">{{ $t('tools.ai-face-morph-blend.person2') }}</span>
                    </div>
                    <div class="text-center text-sm mt-1">{{ Math.round((1 - morphRatio) * 100) }}% / {{ Math.round(morphRatio * 100) }}%</div>
                </div>

                <!-- Preset effects -->
                <div v-if="originalImages.length === 2 && !isProcessing" class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.ai-face-morph-blend.presetTitle') }}</label>
                    <div class="flex flex-wrap gap-2">
                        <button
                            class="px-3 py-2 text-sm rounded-md border transition-colors"
                            :class="currentPreset === 'normal' ? 'bg-blue-100 border-blue-500 dark:bg-blue-900 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'"
                            @click="setPreset('normal')">
                            {{ $t('tools.ai-face-morph-blend.presets.normal') }}
                        </button>

                        <button
                            class="px-3 py-2 text-sm rounded-md border transition-colors"
                            :class="currentPreset === 'cartoon' ? 'bg-blue-100 border-blue-500 dark:bg-blue-900 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'"
                            @click="setPreset('cartoon')">
                            {{ $t('tools.ai-face-morph-blend.presets.cartoon') }}
                        </button>

                        <button
                            class="px-3 py-2 text-sm rounded-md border transition-colors"
                            :class="currentPreset === 'zombie' ? 'bg-blue-100 border-blue-500 dark:bg-blue-900 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'"
                            @click="setPreset('zombie')">
                            {{ $t('tools.ai-face-morph-blend.presets.zombie') }}
                        </button>

                        <button
                            class="px-3 py-2 text-sm rounded-md border transition-colors"
                            :class="currentPreset === 'aging' ? 'bg-blue-100 border-blue-500 dark:bg-blue-900 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'"
                            @click="setPreset('aging')">
                            {{ $t('tools.ai-face-morph-blend.presets.aging') }}
                        </button>

                        <button
                            class="px-3 py-2 text-sm rounded-md border transition-colors"
                            :class="currentPreset === 'younger' ? 'bg-blue-100 border-blue-500 dark:bg-blue-900 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'"
                            @click="setPreset('younger')">
                            {{ $t('tools.ai-face-morph-blend.presets.younger') }}
                        </button>
                    </div>
                </div>

                <!-- Action button -->
                <button class="btn btn-primary w-full" 
                    :disabled="originalImages.length !== 2 || isProcessing || isModelLoading" 
                    @click="startMorphing">
                    <svg v-if="isProcessing" class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ isProcessing ? $t('tools.ai-face-morph-blend.morphingFaces') : $t('tools.ai-face-morph-blend.morphBtn') }}
                </button>
            </div>

            <!-- Right side: Output area -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.ai-face-morph-blend.outputTitle') }}</h2>

                <div v-if="morphedImage" class="space-y-6">
                    <!-- Image preview -->
                    <div class="relative group">
                        <div class="image-container overflow-hidden" ref="outputContainer">
                            <canvas ref="outputCanvas" class="w-full h-auto max-h-[400px] object-contain border rounded cursor-move"
                                @mousedown="startPan" @wheel="handleZoom"
                                @touchstart="startTouch" @touchmove="moveTouch"
                                @touchend="endTouch"></canvas>
                        </div>
                        <div class="absolute top-2 right-2 flex space-x-2">
                            <button
                                class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                @click="zoomIn" :aria-label="$t('tools.ai-face-morph-blend.zoomIn')">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </button>
                            <button
                                class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                @click="zoomOut" :aria-label="$t('tools.ai-face-morph-blend.zoomOut')">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                </svg>
                            </button>
                            <button
                                class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                @click="resetView" :aria-label="$t('tools.ai-face-morph-blend.resetView')">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Export options -->
                    <div class="space-y-4">
                        <!-- Export format selection -->
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.ai-face-morph-blend.exportFormat') }}
                            </label>
                            <div class="flex flex-wrap gap-4">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="exportType" value="image/png"
                                        class="form-radio">
                                    <span>PNG</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="exportType" value="image/jpeg"
                                        class="form-radio">
                                    <span>JPG</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="exportType" value="image/webp"
                                        class="form-radio">
                                    <span>WEBP</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="exportType" value="image/bmp"
                                        class="form-radio">
                                    <span>BMP</span>
                                </label>
                            </div>
                        </div>

                        <!-- Quality slider -->
                        <div v-if="exportType === 'image/jpeg'" class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.ai-face-morph-blend.imageQuality') }}: {{ Math.round(quality * 100) }}%
                            </label>
                            <input type="range" min="0.5" max="1" step="0.01" v-model.number="quality"
                                class="w-full" />
                        </div>

                        <!-- Download button -->
                        <div class="flex gap-2">
                            <button class="btn btn-success flex-1" @click="download">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.ai-face-morph-blend.downloadBtn') }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Empty state -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.ai-face-morph-blend.noOutput') }}</p>
                </div>
            </div>
        </div>

        <!-- Disclaimer -->
        <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 text-center">
            {{ $t('tools.ai-face-morph-blend.disclaimer') }}
        </div>

        <AIFaceMorphBlendArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import * as faceapi from 'face-api.js'
import AIFaceMorphBlendArticle from './AIFaceMorphBlendArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// Refs
const fileInput1 = ref(null)
const fileInput2 = ref(null)
const fileInputs = [fileInput1, fileInput2]
const outputCanvas = ref(null)
const outputContainer = ref(null)

// State
const originalImages = ref([])
const morphedImage = ref(null)
const isDragging = ref(false)
const isModelLoading = ref(true)
const isProcessing = ref(false)
const morphRatio = ref(0.5)
const exportType = ref('image/png')
const quality = ref(0.92)
const currentPreset = ref('normal')

// Face detection results
const faceDetections = ref([null, null])
const faceLandmarks = ref([null, null])

// Canvas transform state
const transformState = reactive({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0
})

// Sample images
const sampleImages = [
    {
        name: 'ai-face-morph-blend-sample-1.png',
        url: '/images/ai-face-morph-blend-sample-1.png',
        fallbackUrl: 'https://www.ufreetools.com/images/ai-face-morph-blend-sample-1.png'
    },
    {
        name: 'ai-face-morph-blend-sample-2.png',
        url: '/images/ai-face-morph-blend-sample-2.png',
        fallbackUrl: 'https://www.ufreetools.com/images/ai-face-morph-blend-sample-2.png'
    }
]

// Load face-api.js models
onMounted(async () => {
    try {
        const modelUrl = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model'
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl),
            faceapi.nets.faceLandmark68Net.loadFromUri(modelUrl),
            faceapi.nets.faceRecognitionNet.loadFromUri(modelUrl)
        ])
        isModelLoading.value = false
        console.log('Face-api models loaded successfully')
    } catch (error) {
        console.error('Error loading face-api models:', error)
        isModelLoading.value = false
    }
})

// Clean up event listeners
onBeforeUnmount(() => {
    window.removeEventListener('mousemove', movePan)
    window.removeEventListener('mouseup', endPan)
})

// Watch for morph ratio changes to update the output
watch(morphRatio, () => {
    if (morphedImage.value && !isProcessing.value) {
        applyMorph()
    }
})

// Watch for preset changes
watch(currentPreset, () => {
    if (morphedImage.value && !isProcessing.value) {
        applyMorph()
    }
})

// Load sample images
async function loadSampleImages() {
    clearImages()
    for (let i = 0; i < 2; i++) {
        const sample = sampleImages[i]
        try {
            // Try to load local image, fallback to remote URL
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

            // Detect faces in the sample image
            await detectFace(i)
        } catch (error) {
            console.error('Failed to load sample image:', error)
        }
    }

    // If both images are loaded and faces detected, start morphing
    if (originalImages.value.length === 2 && 
        faceLandmarks.value[0] && 
        faceLandmarks.value[1]) {
        startMorphing()
    }
}

// Handle file uploads
function handleFiles(e, index) {
    const file = e.target.files[0]
    if (!file || !/^image\/(png|jpeg|bmp|webp)$/.test(file.type)) return
    
    // Remove existing image at this index
    if (originalImages.value[index]) {
        URL.revokeObjectURL(originalImages.value[index].url)
        originalImages.value.splice(index, 1)
        faceDetections.value[index] = null
        faceLandmarks.value[index] = null
    }
    
    const url = URL.createObjectURL(file)
    originalImages.value[index] = { file, url, name: file.name }
    isDragging.value = false
    
    // Detect face in the uploaded image
    detectFace(index)
}

// Handle drag and drop
function handleDrop(e, index) {
    const file = e.dataTransfer.files[0]
    if (!file || !/^image\/(png|jpeg|bmp|webp)$/.test(file.type)) return
    
    // Remove existing image at this index
    if (originalImages.value[index]) {
        URL.revokeObjectURL(originalImages.value[index].url)
        originalImages.value.splice(index, 1)
        faceDetections.value[index] = null
        faceLandmarks.value[index] = null
    }
    
    const url = URL.createObjectURL(file)
    originalImages.value[index] = { file, url, name: file.name }
    isDragging.value = false
    
    // Detect face in the uploaded image
    detectFace(index)
}

// Clear all images
function clearImages() {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
    originalImages.value = []
    morphedImage.value = null
    faceDetections.value = [null, null]
    faceLandmarks.value = [null, null]
    resetView()
}

// Remove a specific image
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
    faceDetections.value[idx] = null
    faceLandmarks.value[idx] = null
    
    if (morphedImage.value) {
        morphedImage.value = null
    }
}

// Detect face in an image
async function detectFace(index) {
    if (!originalImages.value[index]) return
    
    isProcessing.value = true
    
    try {
        const img = await faceapi.fetchImage(originalImages.value[index].url)
        
        // Detect face with landmarks
        const detection = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
        
        if (detection) {
            faceDetections.value[index] = detection.detection
            faceLandmarks.value[index] = detection.landmarks
        } else {
            console.error('No face detected in image', index)
            toastRef.value.show(t('tools.ai-face-morph-blend.noFaceDetected'))
        }
    } catch (error) {
        console.error('Error detecting face:', error)
    } finally {
        isProcessing.value = false
    }
}

// Start the morphing process
async function startMorphing() {
    if (originalImages.value.length !== 2) return
    if (!faceLandmarks.value[0] || !faceLandmarks.value[1]) {
        toastRef.value.show(t('tools.ai-face-morph-blend.noFaceDetected'))
        return
    }
    
    isProcessing.value = true
    
    try {
        await applyMorph()
    } catch (error) {
        console.error('Error during morphing:', error)
    } finally {
        isProcessing.value = false
    }
}
// 工具函数：计算两点距离
function distance(p1, p2) {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
}

// 工具函数：获取左右眼中心点
function getEyeCenter(landmarks) {
    // faceapi.js 的 68 点模型：左眼 36-41，右眼 42-47
    const leftEye = landmarks.slice(36, 42)
    const rightEye = landmarks.slice(42, 48)

    const leftCenter = leftEye.reduce((acc, pt) => ({ x: acc.x + pt.x, y: acc.y + pt.y }), { x: 0, y: 0 })
    const rightCenter = rightEye.reduce((acc, pt) => ({ x: acc.x + pt.x, y: acc.y + pt.y }), { x: 0, y: 0 })

    leftCenter.x /= 6; leftCenter.y /= 6
    rightCenter.x /= 6; rightCenter.y /= 6

    return { left: leftCenter, right: rightCenter }
}

// 主函数：应用对齐融合
async function applyMorph() {
    try {
        const img1 = await createImageFromUrl(originalImages.value[0].url)
        const img2 = await createImageFromUrl(originalImages.value[1].url)

        const landmarks1 = faceLandmarks.value[0].positions
        const landmarks2 = faceLandmarks.value[1].positions

        // 获取双眼中心
        const eyes1 = getEyeCenter(landmarks1)
        const eyes2 = getEyeCenter(landmarks2)

        // 目标对齐中心（取两张脸的中间位置）
        const targetLeftEye = {
            x: (eyes1.left.x + eyes2.left.x) / 2,
            y: (eyes1.left.y + eyes2.left.y) / 2
        }
        const targetRightEye = {
            x: (eyes1.right.x + eyes2.right.x) / 2,
            y: (eyes1.right.y + eyes2.right.y) / 2
        }

        // 计算参考长度（两眼间距）
        const refDist1 = distance(eyes1.left, eyes1.right)
        const refDist2 = distance(eyes2.left, eyes2.right)
        const targetDist = (refDist1 + refDist2) / 2

        // 创建输出 canvas
        const canvas = document.createElement('canvas')
        const size = Math.max(img1.width, img1.height, img2.width, img2.height) * 2
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')

        // 以目标眼睛中心为基准，偏移画布中心
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        // 绘制图像1（变形到目标位置）
        drawAlignedFace(ctx, img1, landmarks1, targetLeftEye, targetRightEye, targetDist, centerX, centerY, 1 - morphRatio.value)

        // 绘制图像2（变形到目标位置）
        drawAlignedFace(ctx, img2, landmarks2, targetLeftEye, targetRightEye, targetDist, centerX, centerY, morphRatio.value)

        // 应用预设滤镜（如 cartoon, zombie 等）
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        applyPresetEffect(imageData, currentPreset.value)
        ctx.putImageData(imageData, 0, 0)

        // 存储结果
        morphedImage.value = canvas

        // 更新显示
        await nextTick()
        updateOutputCanvas()

    } catch (error) {
        console.error('Error in applyMorph:', error)
        throw error
    }
}

function drawAlignedFace(ctx, img, landmarks, targetLeft, targetRight, targetDist, centerX, centerY, alpha) {
    const eyes = getEyeCenter(landmarks)
    const srcLeft = eyes.left
    const srcRight = eyes.right

    // 计算源和目标的角度
    const srcAngle = Math.atan2(srcRight.y - srcLeft.y, srcRight.x - srcLeft.x)
    const dstAngle = Math.atan2(targetRight.y - targetLeft.y, targetRight.x - targetLeft.x)

    // 计算缩放比例（基于眼睛间距）
    const srcDist = distance(srcLeft, srcRight)
    const scale = targetDist / srcDist

    // 计算源人脸中心
    const srcCenter = {
        x: (srcLeft.x + srcRight.x) / 2,
        y: (srcLeft.y + srcRight.y) / 2
    }

    ctx.save()
    ctx.globalAlpha = alpha

    // 1. 平移到画布中心
    ctx.translate(centerX, centerY)

    // 2. 旋转对齐角度
    ctx.rotate(dstAngle - srcAngle)

    // 3. 缩放
    ctx.scale(scale, scale)

    // 4. 平移使人脸中心对齐目标中心（反向平移）
    ctx.translate(-srcCenter.x, -srcCenter.y)

    // 5. 绘制图像
    ctx.drawImage(img, 0, 0)

    ctx.restore()
}

// Apply preset effects to the image data
function applyPresetEffect(imageData, preset) {
    const data = imageData.data
    
    switch (preset) {
        case 'cartoon':
            // Simplify colors and enhance edges for cartoon effect
            for (let i = 0; i < data.length; i += 4) {
                // Quantize colors
                data[i] = Math.round(data[i] / 32) * 32
                data[i + 1] = Math.round(data[i + 1] / 32) * 32
                data[i + 2] = Math.round(data[i + 2] / 32) * 32
                
                // Increase saturation
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
                data[i] = Math.min(255, data[i] + (data[i] - avg) * 0.5)
                data[i + 1] = Math.min(255, data[i + 1] + (data[i + 1] - avg) * 0.5)
                data[i + 2] = Math.min(255, data[i + 2] + (data[i + 2] - avg) * 0.5)
            }
            break
            
        case 'zombie':
            // Green tint and contrast for zombie effect
            for (let i = 0; i < data.length; i += 4) {
                // Reduce red, increase green, add blue tint
                data[i] = data[i] * 0.7
                data[i + 1] = Math.min(255, data[i + 1] * 1.2)
                data[i + 2] = data[i + 2] * 0.8
                
                // Increase contrast
                for (let j = 0; j < 3; j++) {
                    data[i + j] = data[i + j] < 128 ? data[i + j] * 0.8 : Math.min(255, data[i + j] * 1.2)
                }
            }
            break
            
        case 'aging':
            // Sepia tone and wrinkle simulation for aging effect
            for (let i = 0; i < data.length; i += 4) {
                // Sepia effect
                const r = data[i]
                const g = data[i + 1]
                const b = data[i + 2]
                
                data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189))
                data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168))
                data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131))
                
                // Reduce brightness slightly
                for (let j = 0; j < 3; j++) {
                    data[i + j] = Math.max(0, data[i + j] - 10)
                }
            }
            break
            
        case 'younger':
            // Brighten and smooth for younger effect
            for (let i = 0; i < data.length; i += 4) {
                // Brighten
                data[i] = Math.min(255, data[i] * 1.1)
                data[i + 1] = Math.min(255, data[i + 1] * 1.1)
                data[i + 2] = Math.min(255, data[i + 2] * 1.1)
                
                // Slight pink tint for youthful appearance
                if (data[i] > data[i + 1] && data[i] > data[i + 2]) {
                    data[i] = Math.min(255, data[i] * 1.05)
                }
            }
            break
            
        case 'normal':
        default:
            // No effect applied
            break
    }
}

// Helper function to create an image from URL
function createImageFromUrl(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = url
    })
}

// Set the current preset
function setPreset(preset) {
    currentPreset.value = preset
}

// Update the output canvas with the morphed image
function updateOutputCanvas() {
    if (!outputCanvas.value || !morphedImage.value) return
    
    const canvas = outputCanvas.value
    const ctx = canvas.getContext('2d')
    const container = outputContainer.value
    const parentWidth = container?.clientWidth || 300
    const maxHeight = 400
    
    // Calculate dimensions while maintaining aspect ratio
    const imgRatio = morphedImage.value.height / morphedImage.value.width
    const displayWidth = parentWidth
    const displayHeight = Math.min(parentWidth * imgRatio, maxHeight)
    
    // Set canvas dimensions
    canvas.width = displayWidth
    canvas.height = displayHeight
    
    // Apply transform
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    
    // Calculate center position
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    
    // Apply transform
    ctx.translate(centerX + transformState.offsetX, centerY + transformState.offsetY)
    ctx.scale(transformState.scale, transformState.scale)
    
    // Draw image centered
    const drawWidth = morphedImage.value.width
    const drawHeight = morphedImage.value.height
    ctx.translate(-drawWidth / 2, -drawHeight / 2)
    ctx.drawImage(morphedImage.value, 0, 0, drawWidth, drawHeight)
    
    ctx.restore()
}

// Canvas pan and zoom functions
function startPan(e) {
    transformState.isDragging = true
    transformState.lastX = e.clientX
    transformState.lastY = e.clientY
    
    // Add global event listeners
    window.addEventListener('mousemove', movePan)
    window.addEventListener('mouseup', endPan)
}

function movePan(e) {
    if (!transformState.isDragging) return
    
    const deltaX = e.clientX - transformState.lastX
    const deltaY = e.clientY - transformState.lastY
    
    transformState.offsetX += deltaX / transformState.scale
    transformState.offsetY += deltaY / transformState.scale
    
    transformState.lastX = e.clientX
    transformState.lastY = e.clientY
    
    // Redraw
    updateOutputCanvas()
}

function endPan() {
    transformState.isDragging = false
    window.removeEventListener('mousemove', movePan)
    window.removeEventListener('mouseup', endPan)
}

// Touch events
function startTouch(e) {
    if (e.touches.length !== 1) return
    
    const touch = e.touches[0]
    transformState.isDragging = true
    transformState.lastX = touch.clientX
    transformState.lastY = touch.clientY
    
    e.preventDefault()
}

function moveTouch(e) {
    if (e.touches.length !== 1 || !transformState.isDragging) return
    
    const touch = e.touches[0]
    const deltaX = touch.clientX - transformState.lastX
    const deltaY = touch.clientY - transformState.lastY
    
    transformState.offsetX += deltaX / transformState.scale
    transformState.offsetY += deltaY / transformState.scale
    
    transformState.lastX = touch.clientX
    transformState.lastY = touch.clientY
    
    // Redraw
    updateOutputCanvas()
    
    e.preventDefault()
}

function endTouch() {
    transformState.isDragging = false
}

// Zoom handling
function handleZoom(e) {
    e.preventDefault()
    
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newScale = Math.max(0.1, Math.min(10, transformState.scale * delta))
    transformState.scale = newScale
    
    // Redraw
    updateOutputCanvas()
}

// Zoom buttons
function zoomIn() {
    transformState.scale = Math.min(10, transformState.scale * 1.2)
    updateOutputCanvas()
}

function zoomOut() {
    transformState.scale = Math.max(0.1, transformState.scale / 1.2)
    updateOutputCanvas()
}

function resetView() {
    transformState.scale = 0.5
    transformState.offsetX = 0
    transformState.offsetY = 0
    if (morphedImage.value) {
        updateOutputCanvas()
    }
}

// Download the morphed image
function download() {
    if (!morphedImage.value) return
    
    const mime = exportType.value
    const ext = mime.split('/')[1]
    const imageQuality = quality.value || 0.92
    
    // Create a new canvas with the original dimensions
    const downloadCanvas = document.createElement('canvas')
    downloadCanvas.width = morphedImage.value.width
    downloadCanvas.height = morphedImage.value.height
    const ctx = downloadCanvas.getContext('2d')
    ctx.drawImage(morphedImage.value, 0, 0)
    
    // Convert to data URL and download
    const url = downloadCanvas.toDataURL(mime, imageQuality)
    const a = document.createElement('a')
    a.href = url
    a.download = `face_morph.${ext}`
    a.click()
}

// Monitor window resize to update canvas
window.addEventListener('resize', () => {
    if (morphedImage.value) {
        nextTick(() => updateOutputCanvas())
    }
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
