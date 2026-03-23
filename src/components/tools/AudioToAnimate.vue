<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.audio-to-animate.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop"
                    @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false"
                    @click="fileInput?.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept="audio/*,.wav,.mp3,.flac,.ogg,.aac,.m4a,.wma,.amr,.aiff,.ape"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.audio-to-animate.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.audio-to-animate.supported') }}</span>
                </div>

                <!-- 清除按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleAudio">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3s-3 .895-3 3 3 .895 3 3zM9 10l12-3" />
                        </svg>
                        {{ $t('tools.audio-to-animate.loadSample') }}
                    </button>
                    <button v-if="originalAudios.length" class="text-sm text-red-500 hover:text-red-600"
                        @click="clearAudios">
                        {{ $t('tools.audio-to-animate.clearAll') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalAudios.length" class="mt-4">
                    <h3 class="font-medium mb-2">
                        {{ $t('tools.audio-to-animate.preview') }} ({{ originalAudios.length }})
                    </h3>
                    <div class="space-y-3 max-h-[300px] overflow-y-auto">
                        <div v-for="(audio, idx) in originalAudios" :key="idx"
                            class="flex items-center gap-3 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700">
                            <button class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
                                @click="playAudio(audio.url)">
                                <svg v-if="playingUrl !== audio.url" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                </svg>
                            </button>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium truncate">{{ audio.name }}</p>
                                <p class="text-xs text-gray-500">{{ formatFileSize(audio.file.size) }}</p>
                            </div>
                            <button class="text-red-500 hover:text-red-600 p-2" @click="removeAudio(idx)">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 20H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 动画设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.audio-to-animate.settingsTitle') }}</h3>
                    
                    <!-- 动画风格 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-animate.styleLabel') }}
                        </label>
                        <select v-model="animationStyle" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="wave">{{ $t('tools.audio-to-animate.styleWave') }}</option>
                            <option value="bars">{{ $t('tools.audio-to-animate.styleBars') }}</option>
                            <option value="circle">{{ $t('tools.audio-to-animate.styleCircle') }}</option>
                            <option value="particles">{{ $t('tools.audio-to-animate.styleParticles') }}</option>
                            <option value="waveform">{{ $t('tools.audio-to-animate.styleWaveform') }}</option>
                        </select>
                    </div>
                    
                    <!-- 配色方案 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-animate.colorLabel') }}
                        </label>
                        <select v-model="colorScheme" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="gradient">{{ $t('tools.audio-to-animate.colorGradient') }}</option>
                            <option value="rainbow">{{ $t('tools.audio-to-animate.colorRainbow') }}</option>
                            <option value="neon">{{ $t('tools.audio-to-animate.colorNeon') }}</option>
                            <option value="ocean">{{ $t('tools.audio-to-animate.colorOcean') }}</option>
                            <option value="sunset">{{ $t('tools.audio-to-animate.colorSunset') }}</option>
                        </select>
                    </div>
                    
                    <!-- 分辨率 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-animate.resolutionLabel') }}
                        </label>
                        <select v-model="resolution" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="480">{{ $t('tools.audio-to-animate.resolution480') }}</option>
                            <option value="720">{{ $t('tools.audio-to-animate.resolution720') }}</option>
                            <option value="1080">{{ $t('tools.audio-to-animate.resolution1080') }}</option>
                            <option value="square">{{ $t('tools.audio-to-animate.resolutionSquare') }}</option>
                        </select>
                    </div>
                    
                    <!-- 帧率 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-animate.fpsLabel') }}
                        </label>
                        <select v-model="fps" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="24">{{ $t('tools.audio-to-animate.fps24') }}</option>
                            <option value="30">{{ $t('tools.audio-to-animate.fps30') }}</option>
                            <option value="60">{{ $t('tools.audio-to-animate.fps60') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-6"
                    :disabled="!originalAudios.length || isConverting"
                    @click="convertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span v-if="!isConverting">
                        {{ originalAudios.length > 1 ? $t('tools.audio-to-animate.convertBtn') + ` (${originalAudios.length}个)` : $t('tools.audio-to-animate.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.audio-to-animate.converting') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.audio-to-animate.tipsTitle') }}</h4>
                    <p>{{ $t('tools.audio-to-animate.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.audio-to-animate.outputTitle') }}</h2>
                    <button v-if="convertedAnimations.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.audio-to-animate.batchDownload') }}
                    </button>
                </div>

                <div v-if="convertedAnimations.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(anim, idx) in convertedAnimations" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 动画预览 -->
                        <div class="mb-4">
                            <canvas :ref="el => canvasRefs[idx] = el" class="w-full rounded bg-black" 
                                :width="anim.width" :height="anim.height"
                                @click="playPreview(idx)"></canvas>
                        </div>
                        
                        <!-- 动画信息 -->
                        <div class="mb-4">
                            <h3 class="text-sm font-semibold mb-2">{{ anim.name }}</h3>
                            <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                <p><span class="font-medium">{{ $t('tools.audio-to-animate.duration') }}:</span> {{ anim.duration.toFixed(2) }}s</p>
                                <p><span class="font-medium">{{ $t('tools.audio-to-animate.frameCount') }}:</span> {{ anim.frameCount }}</p>
                            </div>
                        </div>

                        <!-- 预览按钮 -->
                        <button class="btn btn-secondary w-full mb-2" @click="playPreview(idx)">
                            <svg v-if="!isPlaying[idx]" class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg v-else class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                            {{ isPlaying[idx] ? '停止预览' : $t('tools.audio-to-animate.previewBtn') }}
                        </button>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.audio-to-animate.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.audio-to-animate.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AudioToAnimateArticle />
    </div>
</template>

<script setup>
import { ref, onUnmounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import gifshot from 'gifshot'
import AudioToAnimateArticle from './AudioToAnimateArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalAudios = ref([])
const convertedAnimations = ref([])
const canvasRefs = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })
const playingUrl = ref(null)

// 动画预览
const previewFrames = ref([])
const currentPreviewFrame = ref(0)
const previewIntervals = ref([])
const isPlaying = ref([])

// 设置
const animationStyle = ref('bars')
const colorScheme = ref('gradient')
const resolution = ref('720')
const fps = ref('30')

// 音频元素用于播放
let audioElement = null

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// 播放音频
function playAudio(url) {
    if (!audioElement) {
        audioElement = new Audio()
        audioElement.onended = () => {
            playingUrl.value = null
        }
    }
    
    if (playingUrl.value === url) {
        audioElement.pause()
        playingUrl.value = null
    } else {
        audioElement.src = url
        audioElement.play()
        playingUrl.value = url
    }
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer?.files || [])
    files.forEach(file => {
        const type = file.type.toLowerCase()
        const isAudio = /^audio\//i.test(type) || 
            file.name.match(/\.(wav|mp3|flac|ogg|aac|m4a|wma|amr|aiff|ape)$/i)
        if (!isAudio) return

        const url = URL.createObjectURL(file)
        originalAudios.value.push({ file, url, name: file.name })
    })
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除所有音频
function clearAudios() {
    originalAudios.value.forEach(audio => URL.revokeObjectURL(audio.url))
    convertedAnimations.value.forEach(anim => {
        if (anim.gifUrl) URL.revokeObjectURL(anim.gifUrl)
    })
    stopAllPreviews()
    convertedAnimations.value = []
    originalAudios.value = []
}

// 移除单个音频
function removeAudio(idx) {
    URL.revokeObjectURL(originalAudios.value[idx].url)
    originalAudios.value.splice(idx, 1)
    if (previewIntervals.value[idx]) {
        clearInterval(previewIntervals.value[idx])
    }
}

// 加载示例音频
async function loadSampleAudio() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const sampleRateValue = 44100
        const duration = 3
        const numSamples = sampleRateValue * duration
        
        const buffer = audioContext.createBuffer(2, numSamples, sampleRateValue)
        
        // 生成一个简单的正弦波
        for (let channel = 0; channel < 2; channel++) {
            const data = buffer.getChannelData(channel)
            for (let i = 0; i < numSamples; i++) {
                data[i] = Math.sin(2 * Math.PI * 440 * i / sampleRateValue) * 0.5
            }
        }
        
        const wavBlob = audioBufferToWav(buffer)
        const file = new File([wavBlob], 'sample-audio.wav', { type: 'audio/wav' })
        const url = URL.createObjectURL(file)
        originalAudios.value.push({ file, url, name: file.name })
        
        audioContext.close()
    } catch (error) {
        console.error('Failed to generate sample audio', error)
    }
}

// AudioBuffer转WAV
function audioBufferToWav(buffer) {
    const numChannels = buffer.numberOfChannels
    const sampleRateValue = buffer.sampleRate
    const format = 1
    const bitDepth = 16
    
    const bytesPerSample = bitDepth / 8
    const blockAlign = numChannels * bytesPerSample
    
    const dataLength = buffer.length * blockAlign
    const bufferLength = 44 + dataLength
    
    const arrayBuffer = new ArrayBuffer(bufferLength)
    const view = new DataView(arrayBuffer)
    
    writeString(view, 0, 'RIFF')
    view.setUint32(4, 36 + dataLength, true)
    writeString(view, 8, 'WAVE')
    writeString(view, 12, 'fmt ')
    view.setUint32(16, 16, true)
    view.setUint16(20, format, true)
    view.setUint16(22, numChannels, true)
    view.setUint32(24, sampleRateValue, true)
    view.setUint32(28, sampleRateValue * blockAlign, true)
    view.setUint16(32, blockAlign, true)
    view.setUint16(34, bitDepth, true)
    writeString(view, 36, 'data')
    view.setUint32(40, dataLength, true)
    
    const offset = 44
    const channels = []
    for (let i = 0; i < numChannels; i++) {
        channels.push(buffer.getChannelData(i))
    }
    
    let pos = offset
    for (let i = 0; i < buffer.length; i++) {
        for (let ch = 0; ch < numChannels; ch++) {
            const sample = Math.max(-1, Math.min(1, channels[ch][i]))
            const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF
            view.setInt16(pos, intSample, true)
            pos += 2
        }
    }
    
    return new Blob([arrayBuffer], { type: 'audio/wav' })
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i))
    }
}

// 获取分辨率尺寸
function getResolutionSize() {
    switch (resolution.value) {
        case '480': return { width: 854, height: 480 }
        case '720': return { width: 1280, height: 720 }
        case '1080': return { width: 1920, height: 1080 }
        case 'square': return { width: 1080, height: 1080 }
        default: return { width: 1280, height: 720 }
    }
}

// 获取配色
function getColors() {
    switch (colorScheme.value) {
        case 'rainbow':
            return ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3']
        case 'neon':
            return ['#ff00ff', '#00ffff', '#ff0080', '#80ff00']
        case 'ocean':
            return ['#006994', '#00a8cc', '#0077b6', '#023e8a', '#03045e']
        case 'sunset':
            return ['#ff6b35', '#f7931e', '#ffb627', '#ff006e', '#8338ec']
        default: // gradient
            return ['#667eea', '#764ba2', '#f093fb', '#f5576c']
    }
}

// 生成动画帧
async function generateAnimation(audioData, index) {
    return new Promise((resolve, reject) => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const { width, height } = getResolutionSize()
        const fpsValue = parseInt(fps.value)
        const colors = getColors()
        
        // 限制最大帧数以避免生成时间过长
        const maxFrames = Math.min(Math.ceil(5 * fpsValue), 150) // 最多5秒或150帧
        
        fetch(audioData.url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                const channelData = audioBuffer.getChannelData(0)
                const duration = Math.min(audioBuffer.duration, 5) // 限制最多5秒
                const frameCount = Math.ceil(duration * fpsValue)
                const actualFrameCount = Math.min(frameCount, maxFrames)
                
                if (actualFrameCount <= 0) {
                    reject(new Error('Invalid frame count'))
                    audioContext.close()
                    return
                }
                
                // 创建离屏canvas
                const canvas = document.createElement('canvas')
                canvas.width = width
                canvas.height = height
                const ctx = canvas.getContext('2d')
                
                // 生成帧数据
                const frames = []
                const samplesPerFrame = Math.max(1, Math.floor(channelData.length / actualFrameCount))
                
                for (let frame = 0; frame < actualFrameCount; frame++) {
                    // 获取当前帧的音频数据
                    const startSample = frame * samplesPerFrame
                    const endSample = Math.min(startSample + samplesPerFrame, channelData.length)
                    
                    // 计算频谱数据（简化版）
                    const spectrumData = []
                    const barCount = 64
                    const samplesPerBar = Math.max(1, Math.floor((endSample - startSample) / barCount))
                    
                    for (let i = 0; i < barCount; i++) {
                        let sum = 0
                        for (let j = 0; j < samplesPerBar; j++) {
                            const idx = startSample + i * samplesPerBar + j
                            if (idx < channelData.length) {
                                sum += Math.abs(channelData[idx])
                            }
                        }
                        spectrumData.push(samplesPerBar > 0 ? sum / samplesPerBar : 0)
                    }
                    
                    // 绘制帧
                    ctx.fillStyle = '#1a1a2e'
                    ctx.fillRect(0, 0, width, height)
                    
                    // 根据动画风格绘制
                    drawAnimationFrame(ctx, spectrumData, width, height, colors, frame, actualFrameCount)
                    
                    // 保存帧用于预览和GIF生成
                    frames.push(canvas.toDataURL('image/png'))
                }
                
                audioContext.close()
                
                // 使用 gifshot 创建 GIF
                const intervalSec = 1 / fpsValue
                gifshot.createGIF({
                    images: frames,
                    gifWidth: width,
                    gifHeight: height,
                    interval: intervalSec,
                    sampleInterval: 10,
                    numWorkers: 2
                }, function(obj) {
                    if (!obj.error) {
                        const blob = dataURLtoBlob(obj.image)
                        resolve({
                            name: audioData.name.replace(/\.\w+$/, '.gif'),
                            width,
                            height,
                            duration,
                            frameCount: actualFrameCount,
                            frames,
                            gifBlob: blob,
                            gifUrl: URL.createObjectURL(blob)
                        })
                    } else {
                        console.error('GIF creation error:', obj.error)
                        reject(obj.error)
                    }
                })
            })
            .catch(error => {
                console.error('Audio processing error:', error)
                reject(error)
                audioContext.close()
            })
    })
}

// DataURL 转 Blob
function dataURLtoBlob(dataURL) {
    const parts = dataURL.split(',')
    const mime = parts[0].match(/:(.*?);/)[1]
    const bstr = atob(parts[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}

// 绘制动画帧
function drawAnimationFrame(ctx, spectrumData, width, height, colors, frameIndex, totalFrames) {
    const barCount = spectrumData.length
    const style = animationStyle.value
    
    // 计算时间进度
    const progress = frameIndex / totalFrames
    
    switch (style) {
        case 'bars':
            // 频谱条形
            const barWidth = width / barCount * 0.8
            const gap = width / barCount * 0.2
            for (let i = 0; i < barCount; i++) {
                const barHeight = spectrumData[i] * height * 2
                const x = i * (barWidth + gap)
                const y = height - barHeight
                const colorIndex = Math.floor((i / barCount) * colors.length)
                ctx.fillStyle = colors[colorIndex % colors.length]
                ctx.fillRect(x, y, barWidth, barHeight)
            }
            break
            
        case 'wave':
            // 波形动画
            ctx.beginPath()
            ctx.moveTo(0, height / 2)
            for (let i = 0; i < barCount; i++) {
                const x = (i / barCount) * width
                const y = height / 2 + spectrumData[i] * height * (i % 2 === 0 ? 1 : -1)
                ctx.lineTo(x, y)
            }
            ctx.strokeStyle = colors[0]
            ctx.lineWidth = 3
            ctx.stroke()
            break
            
        case 'circle':
            // 圆形频谱
            const centerX = width / 2
            const centerY = height / 2
            const maxRadius = Math.min(width, height) / 3
            
            for (let i = 0; i < barCount; i++) {
                const angle = (i / barCount) * Math.PI * 2 - Math.PI / 2
                const radius = maxRadius * (0.5 + spectrumData[i] * 2)
                const x1 = centerX + Math.cos(angle) * maxRadius * 0.5
                const y1 = centerY + Math.sin(angle) * maxRadius * 0.5
                const x2 = centerX + Math.cos(angle) * radius
                const y2 = centerY + Math.sin(angle) * radius
                
                const colorIndex = Math.floor((i / barCount) * colors.length)
                ctx.beginPath()
                ctx.moveTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.strokeStyle = colors[colorIndex % colors.length]
                ctx.lineWidth = 4
                ctx.stroke()
            }
            break
            
        case 'particles':
            // 粒子效果
            for (let i = 0; i < barCount; i++) {
                const count = Math.floor(spectrumData[i] * 10)
                for (let j = 0; j < count; j++) {
                    const x = Math.random() * width
                    const y = Math.random() * height
                    const size = spectrumData[i] * 20 + 2
                    const colorIndex = Math.floor(Math.random() * colors.length)
                    
                    ctx.beginPath()
                    ctx.arc(x, y, size, 0, Math.PI * 2)
                    ctx.fillStyle = colors[colorIndex]
                    ctx.fill()
                }
            }
            break
            
        case 'waveform':
            // 波形线条
            ctx.beginPath()
            const waveformY = height / 2
            ctx.moveTo(0, waveformY)
            
            for (let i = 0; i < width; i++) {
                const dataIndex = Math.floor((i / width) * spectrumData.length)
                const offset = spectrumData[dataIndex] * height * 0.4
                const y = waveformY + Math.sin(i * 0.02 + progress * Math.PI * 4) * offset
                ctx.lineTo(i, y)
            }
            
            const gradient = ctx.createLinearGradient(0, 0, width, 0)
            colors.forEach((color, i) => {
                gradient.addColorStop(i / (colors.length - 1), color)
            })
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.stroke()
            break
    }
}

// 转换所有音频
async function convertAll() {
    if (!originalAudios.value.length) return
    
    isConverting.value = true
    convertedAnimations.value = []
    canvasRefs.value = []
    convertingProgress.value = { current: 0, total: originalAudios.value.length }
    
    try {
        for (let i = 0; i < originalAudios.value.length; i++) {
            convertingProgress.value.current = i + 1
            const result = await generateAnimation(originalAudios.value[i], i)
            convertedAnimations.value.push(result)
        }
    } catch (error) {
        console.error('转换失败', error)
        alert(t('tools.audio-to-animate.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 播放预览动画
function playPreview(idx) {
    const anim = convertedAnimations.value[idx]
    if (!anim || !anim.frames.length) return
    
    // 停止其他正在播放的动画
    previewIntervals.value.forEach((interval, i) => {
        if (i !== idx && interval) {
            clearInterval(interval)
            isPlaying.value[i] = false
        }
    })
    
    if (isPlaying.value[idx]) {
        // 停止播放
        clearInterval(previewIntervals.value[idx])
        isPlaying.value[idx] = false
        return
    }
    
    isPlaying.value[idx] = true
    currentPreviewFrame.value = 0
    const fpsValue = parseInt(fps.value)
    const frameDelay = Math.round(1000 / fpsValue)
    
    previewIntervals.value[idx] = setInterval(() => {
        currentPreviewFrame.value = (currentPreviewFrame.value + 1) % anim.frames.length
        drawPreviewFrame(idx, currentPreviewFrame.value)
    }, frameDelay)
}

// 绘制预览帧
function drawPreviewFrame(idx, frameIndex) {
    const anim = convertedAnimations.value[idx]
    const canvas = canvasRefs.value[idx]
    if (!anim || !canvas || !anim.frames[frameIndex]) return
    
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    img.src = anim.frames[frameIndex]
}

// 停止所有预览
function stopAllPreviews() {
    previewIntervals.value.forEach((interval, i) => {
        if (interval) {
            clearInterval(interval)
            isPlaying.value[i] = false
        }
    })
}

// 下载单个动画
function download(idx) {
    const anim = convertedAnimations.value[idx]
    if (!anim || !anim.gifUrl) return
    
    const a = document.createElement('a')
    a.href = anim.gifUrl
    a.download = anim.name
    a.click()
}

// 批量下载
async function downloadAll() {
    if (!convertedAnimations.value.length) return
    
    const zip = new JSZip()
    
    for (let i = 0; i < convertedAnimations.value.length; i++) {
        const anim = convertedAnimations.value[i]
        if (anim.gifBlob) {
            zip.file(anim.name, anim.gifBlob)
        }
    }
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'animations.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 清理
onUnmounted(() => {
    stopAllPreviews()
    clearAudios()
    if (audioElement) {
        audioElement.pause()
        audioElement = null
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
