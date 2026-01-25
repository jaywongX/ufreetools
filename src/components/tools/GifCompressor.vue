<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.gif-compressor.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="image/gif"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.gif-compressor.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.gif-compressor.supported') }}</span>
                </div>

                <!-- 示例GIF按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleGif">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.gif-compressor.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalGifs.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.gif-compressor.preview') }} ({{ originalGifs.length }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearGifs">
                            {{ $t('tools.gif-compressor.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(gif, idx) in originalGifs" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="gif.url" class="w-full h-24 object-cover"
                                :alt="`${$t('tools.gif-compressor.originalImage')} ${idx + 1}`" />
                            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeGif(idx)"
                                    :aria-label="$t('tools.gif-compressor.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 压缩选项 -->
                <div class="mt-6 space-y-4">
                    <h3 class="font-medium">{{ $t('tools.gif-compressor.compressionOptions') }}</h3>

                    <!-- 尺寸调整 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.gif-compressor.resizeTitle') }}
                        </label>
                        <div class="flex flex-wrap gap-4">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="resizeOption" value="1" class="form-radio">
                                <span>{{ $t('tools.gif-compressor.keepOriginal') }} (100%)</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="resizeOption" value="0.75" class="form-radio">
                                <span>75%</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="resizeOption" value="0.5" class="form-radio">
                                <span>50%</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="resizeOption" value="0.25" class="form-radio">
                                <span>25%</span>
                            </label>
                        </div>
                    </div>

                    <!-- 帧数减少 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.gif-compressor.frameReduction') }}
                        </label>
                        <div class="flex flex-wrap gap-4">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="frameSkip" value="1" class="form-radio">
                                <span>{{ $t('tools.gif-compressor.allFrames') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="frameSkip" value="2" class="form-radio">
                                <span>{{ $t('tools.gif-compressor.skipEvery') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="frameSkip" value="3" class="form-radio">
                                <span>{{ $t('tools.gif-compressor.skipEvery3') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- 质量设置 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.gif-compressor.qualityTitle') }}
                        </label>
                        <div class="flex flex-wrap gap-4">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="quality" value="20" class="form-radio">
                                <span>{{ $t('tools.gif-compressor.qualityHigh') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="quality" value="10" class="form-radio">
                                <span>{{ $t('tools.gif-compressor.qualityMedium') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="quality" value="1" class="form-radio">
                                <span>{{ $t('tools.gif-compressor.qualityLow') }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!originalGifs.length || isProcessing" @click="compressAll">
                    <svg v-if="isProcessing" class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-if="isProcessing">{{ $t('tools.gif-compressor.processing') }}</span>
                    <span v-else>{{ $t('tools.gif-compressor.compressBtn') }}</span>
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.gif-compressor.outputTitle') }}</h2>

                    <!-- 批量下载按钮 -->
                    <button v-if="compressedGifs.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.gif-compressor.batchDownload') }}
                    </button>
                </div>

                <div v-if="compressedGifs.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(gif, idx) in compressedGifs" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- GIF预览 -->
                        <div class="relative group">
                            <div class="image-container overflow-hidden"
                                :ref="el => { if (el) imageContainers[idx] = el }">
                                <img :ref="el => setImgRef(el, idx)" :src="gif.url"
                                    class="w-full h-auto max-h-[400px] object-contain border rounded cursor-move"
                                    @mousedown="startPan($event, idx)" @wheel="handleZoom($event, idx)"
                                    @touchstart="startTouch($event, idx)" @touchmove="moveTouch($event, idx)"
                                    @touchend="endTouch" />
                            </div>
                            <div class="absolute top-2 right-2 flex space-x-2">
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomIn(idx)" :aria-label="$t('tools.gif-compressor.zoomIn')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="zoomOut(idx)" :aria-label="$t('tools.gif-compressor.zoomOut')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                    </svg>
                                </button>
                                <button
                                    class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                    @click="resetView(idx)" :aria-label="$t('tools.gif-compressor.resetView')">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- 压缩统计 -->
                        <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.gif-compressor.originalSize') }}:</span>
                                    <span class="font-medium ml-1">{{ formatSize(gif.originalSize) }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.gif-compressor.compressedSize') }}:</span>
                                    <span class="font-medium ml-1 text-green-600">{{ formatSize(gif.compressedSize) }}</span>
                                </div>
                            </div>
                            <div class="mt-2 text-sm">
                                <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.gif-compressor.compressionRatio') }}:</span>
                                <span class="font-medium ml-1 text-green-600">{{ gif.compressionRatio }}%</span>
                            </div>
                        </div>

                        <!-- 下载按钮 -->
                        <div class="mt-4">
                            <button class="btn btn-success w-full" @click="download(idx)">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.gif-compressor.downloadBtn') }}
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
                    <p class="mt-4 text-gray-500">{{ $t('tools.gif-compressor.noOutput') }}</p>
                </div>
            </div>
        </div>
        <GifCompressorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import { parseGIF, decompressFrames } from 'gifuct-js'
import gifshot from 'gifshot'
import GifCompressorArticle from './GifCompressorArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalGifs = ref([])
const compressedGifs = reactive([])
const isDragging = ref(false)
const isProcessing = ref(false)
const imageContainers = reactive([])
const imgRefs = ref([])

// 压缩选项
const resizeOption = ref('1')
const frameSkip = ref('1')
const quality = ref('10')

// 图像变换状态
const transformStates = reactive([])

// 示例GIF
const sampleGifs = [
    {
        name: 'sample.gif',
        url: '/images/sample.gif',
        fallbackUrl: 'https://www.ufreetools.com/images/sample.gif'
    }
]

// 加载示例GIF
async function loadSampleGif() {
    clearGifs()
    for (const sample of sampleGifs) {
        try {
            let response;
            try {
                response = await fetch(sample.url)
                if (!response.ok) throw new Error('Local GIF not found')
            } catch (e) {
                response = await fetch(sample.fallbackUrl)
            }

            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            originalGifs.value.push({
                file: new File([blob], sample.name, { type: blob.type || 'image/gif' }),
                url,
                name: sample.name,
                size: blob.size
            })
        } catch (error) {
            console.error('Failed to load sample GIF:', error)
        }
    }
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (!file.type.includes('gif')) return
        const url = URL.createObjectURL(file)
        originalGifs.value.push({ file, url, name: file.name, size: file.size })
    })
    isDragging.value = false
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除所有GIF
function clearGifs() {
    originalGifs.value.forEach(gif => URL.revokeObjectURL(gif.url))
    originalGifs.value = []
    compressedGifs.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)
}

// 移除单个GIF
function removeGif(idx) {
    URL.revokeObjectURL(originalGifs.value[idx].url)
    originalGifs.value.splice(idx, 1)
    if (compressedGifs[idx]) {
        URL.revokeObjectURL(compressedGifs[idx].url)
        compressedGifs.splice(idx, 1)
        transformStates.splice(idx, 1)
    }
}

// 压缩所有GIF
async function compressAll() {
    isProcessing.value = true
    compressedGifs.splice(0)
    transformStates.splice(0)
    imageContainers.splice(0)

    const resizeScale = parseFloat(resizeOption.value)
    const skipFrames = parseInt(frameSkip.value)
    const qualityValue = parseInt(quality.value)

    for (let i = 0; i < originalGifs.value.length; i++) {
        const gif = originalGifs.value[i]
        try {
            const compressedUrl = await compressGif(gif, resizeScale, skipFrames, qualityValue)
            const originalSize = gif.size

            // 获取压缩后的文件大小
            const response = await fetch(compressedUrl)
            const blob = await response.blob()
            const compressedSize = blob.size

            const compressionRatio = Math.round((1 - compressedSize / originalSize) * 100)

            compressedGifs.push({
                url: compressedUrl,
                originalSize,
                compressedSize,
                compressionRatio: compressionRatio > 0 ? compressionRatio : 0,
                name: gif.name.replace(/\.gif$/i, '_compressed.gif')
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
            if (imgRefs.value[i]) {
                setImgRef(imgRefs.value[i], i)
            }
        } catch (error) {
            console.error('Error compressing GIF:', error)
        }
    }

    isProcessing.value = false
}

// 压换单个GIF
async function compressGif(gif, resizeScale, skipFrames, qualityValue) {
    return new Promise(async (resolve, reject) => {
        try {
            // 使用 gifuct-js 解析 GIF
            const response = await fetch(gif.url)
            const arrayBuffer = await response.arrayBuffer()
            const gifData = new Uint8Array(arrayBuffer)

            // 解析 GIF
            const parsedGif = parseGIF(gifData)
            
            // 解压缩帧（buildPatch: true 会生成适用于 Canvas 的 Uint8ClampedArray）
            const frames = decompressFrames(parsedGif, true)

            if (!frames || frames.length === 0) {
                reject(new Error('Failed to extract GIF frames'))
                return
            }

            // 获取第一帧的尺寸
            const originalWidth = parsedGif.lsd.width
            const originalHeight = parsedGif.lsd.height

            // 计算新尺寸（至少为 1，避免 0 导致内部数组长度错误）
            const newWidth = Math.max(1, Math.round(originalWidth * resizeScale))
            const newHeight = Math.max(1, Math.round(originalHeight * resizeScale))

            // 创建canvas用于绘制帧
            const frameCanvas = document.createElement('canvas')
            frameCanvas.width = originalWidth
            frameCanvas.height = originalHeight
            const frameCtx = frameCanvas.getContext('2d', { willReadFrequently: true })

            // 创建临时canvas用于调整尺寸
            const tempCanvas = document.createElement('canvas')
            tempCanvas.width = newWidth
            tempCanvas.height = newHeight
            const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true })

            // 准备图像数组
            const images = []
            
            // 获取第一帧的延迟时间作为基准
            const baseDelay = frames[0].delay || 100

            // 处理每一帧
            const maxImageSize = 1000000; // 限制图像数据大小
            for (let i = 0; i < frames.length; i += skipFrames) {
                const frame = frames[i]

                try {
                    // 创建 ImageData
                    const imageData = new ImageData(
                        new Uint8ClampedArray(frame.patch),
                        frame.dims.width,
                        frame.dims.height
                    )

                    // 检查图像数据大小
                    if (imageData.data.length > maxImageSize) {
                        console.warn(`Frame ${i} too large, skipping. Size: ${imageData.data.length}`)
                        continue
                    }

                    // 将帧绘制到原始尺寸的 canvas 上
                    frameCtx.clearRect(0, 0, originalWidth, originalHeight)
                    frameCtx.putImageData(imageData, frame.dims.left, frame.dims.top)

                    // 清空临时canvas
                    tempCtx.clearRect(0, 0, newWidth, newHeight)

                    // 调整尺寸
                    tempCtx.drawImage(frameCanvas, 0, 0, newWidth, newHeight)

                    // 将 canvas 转换为 data URL
                    const dataUrl = tempCanvas.toDataURL('image/png')
                    
                    // 检查 data URL 长度
                    if (dataUrl.length > maxImageSize) {
                        console.warn(`Frame ${i} data URL too large, skipping. Length: ${dataUrl.length}`)
                        continue
                    }
                    
                    images.push(dataUrl)
                } catch (e) {
                    console.error(`Error processing frame ${i}:`, e)
                    continue
                }
            }

            // 使用 gifshot 创建 GIF
            // sampleInterval: 控制质量，值越小质量越高（2-20），设置安全的取样间隔
            const sampleInterval = qualityValue >= 20 ? 5 : (qualityValue >= 10 ? 10 : 15)

            // 检查是否有足够的帧
            if (images.length === 0) {
                reject(new Error('No valid frames to create GIF'))
                return
            }

            const intervalSec = Math.max(0.02, baseDelay / 1000) // 最小 20ms，防止 0 间隔

            gifshot.createGIF({
                gifWidth: newWidth,
                gifHeight: newHeight,
                images: images,
                interval: intervalSec,
                sampleInterval: sampleInterval,
                numWorkers: 2
            }, function(obj) {
                if (!obj.error) {
                    resolve(obj.image)
                } else {
                    reject(obj.error)
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

// 设置图片引用
function setImgRef(el, idx) {
    if (!el || !compressedGifs[idx]) return

    imgRefs.value[idx] = el
    const state = transformStates[idx]

    // 应用变换
    el.style.transform = `scale(${state.scale}) translate(${state.offsetX}px, ${state.offsetY}px)`
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

    setImgRef(imgRefs.value[idx], idx)
}

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

    setImgRef(imgRefs.value[idx], idx)

    e.preventDefault()
}

function endTouch() {
    transformStates.forEach(state => {
        state.isDragging = false
    })
}

function handleZoom(e, idx) {
    e.preventDefault()

    const state = transformStates[idx]
    const delta = e.deltaY > 0 ? 0.9 : 1.1

    const newScale = Math.max(0.1, Math.min(10, state.scale * delta))
    state.scale = newScale

    setImgRef(imgRefs.value[idx], idx)
}

function zoomIn(idx) {
    const state = transformStates[idx]
    state.scale = Math.min(10, state.scale * 1.2)
    setImgRef(imgRefs.value[idx], idx)
}

function zoomOut(idx) {
    const state = transformStates[idx]
    state.scale = Math.max(0.1, state.scale / 1.2)
    setImgRef(imgRefs.value[idx], idx)
}

function resetView(idx) {
    const state = transformStates[idx]
    state.scale = 1
    state.offsetX = 0
    state.offsetY = 0
    setImgRef(imgRefs.value[idx], idx)
}

// 下载
function download(idx) {
    const gif = compressedGifs[idx]
    const a = document.createElement('a')
    a.href = gif.url
    a.download = gif.name
    a.click()
}

// 批量下载
async function downloadAll() {
    const zip = new JSZip()

    for (let i = 0; i < compressedGifs.length; i++) {
        const gif = compressedGifs[i]
        const response = await fetch(gif.url)
        const blob = await response.blob()
        zip.file(gif.name, blob)
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'compressed_gifs.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 格式化文件大小
function formatSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
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

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>
