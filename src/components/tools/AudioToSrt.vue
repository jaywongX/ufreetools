<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.audio-to-srt.inputTitle') }}</h2>

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
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.audio-to-srt.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.audio-to-srt.supported') }}</span>
                </div>

                <!-- 清除按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleAudio">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                        </svg>
                        {{ $t('tools.audio-to-srt.loadSample') }}
                    </button>
                    <button v-if="originalAudios.length" class="text-sm text-red-500 hover:text-red-600"
                        @click="clearAudios">
                        {{ $t('tools.audio-to-srt.clearAll') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalAudios.length" class="mt-4">
                    <h3 class="font-medium mb-2">
                        {{ $t('tools.audio-to-srt.preview') }} ({{ originalAudios.length }})
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
                                    d="M19 7l-.867 12.142A2 2 0 01-1.995-1.858L5 7m5 4v6m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- SRT设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.audio-to-srt.settingsTitle') }}</h3>
                    
                    <!-- 灵敏度 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-srt.sensitivityLabel') }}
                        </label>
                        <select v-model="sensitivity" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="high">{{ $t('tools.audio-to-srt.sensitivityHigh') }}</option>
                            <option value="medium">{{ $t('tools.audio-to-srt.sensitivityMedium') }}</option>
                            <option value="low">{{ $t('tools.audio-to-srt.sensitivityLow') }}</option>
                        </select>
                    </div>
                    
                    <!-- 最大字幕时长 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-srt.maxDurationLabel') }}
                        </label>
                        <select v-model="maxDuration" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="2">{{ $t('tools.audio-to-srt.maxDuration2') }}</option>
                            <option value="3">{{ $t('tools.audio-to-srt.maxDuration3') }}</option>
                            <option value="5">{{ $t('tools.audio-to-srt.maxDuration5') }}</option>
                            <option value="10">{{ $t('tools.audio-to-srt.maxDuration10') }}</option>
                        </select>
                    </div>

                    <!-- 最小静音时长 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-srt.minSilenceLabel') }}
                        </label>
                        <select v-model="minSilence" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="0.3">{{ $t('tools.audio-to-srt.minSilence0.3') }}</option>
                            <option value="0.5">{{ $t('tools.audio-to-srt.minSilence0.5') }}</option>
                            <option value="0.8">{{ $t('tools.audio-to-srt.minSilence0.8') }}</option>
                            <option value="1.0">{{ $t('tools.audio-to-srt.minSilence1.0') }}</option>
                        </select>
                    </div>
                    
                    <!-- 编码格式 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-srt.encodingLabel') }}
                        </label>
                        <select v-model="encoding" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="utf-8">UTF-8</option>
                            <option value="utf-8-bom">UTF-8 BOM</option>
                        </select>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-6"
                    :disabled="!originalAudios.length || isConverting"
                    @click="convertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="!isConverting">
                        {{ originalAudios.length > 1 ? $t('tools.audio-to-srt.convertBtn') + ` (${originalAudios.length})` : $t('tools.audio-to-srt.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.audio-to-srt.converting') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.audio-to-srt.tipsTitle') }}</h4>
                    <p>{{ $t('tools.audio-to-srt.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.audio-to-srt.outputTitle') }}</h2>
                    <button v-if="convertedSrts.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.audio-to-srt.batchDownload') }}
                    </button>
                </div>

                <div v-if="convertedSrts.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(srt, idx) in convertedSrts" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- SRT信息 -->
                        <div class="mb-4">
                            <h3 class="text-sm font-semibold mb-2">{{ srt.name }}</h3>
                            <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                <p><span class="font-medium">{{ $t('tools.audio-to-srt.subtitleCount') }}:</span> {{ srt.subtitleCount }}</p>
                                <p><span class="font-medium">{{ $t('tools.audio-to-srt.duration') }}:</span> {{ srt.duration.toFixed(2) }}s</p>
                                <p><span class="font-medium">{{ $t('tools.audio-to-srt.fileSize') }}:</span> {{ formatFileSize(srt.blob.size) }}</p>
                            </div>
                        </div>
                        
                        <!-- 预览字幕 -->
                        <div class="mb-4">
                            <h4 class="text-xs font-medium mb-2 text-gray-500">{{ $t('tools.audio-to-srt.previewTitle') }}</h4>
                            <div class="bg-gray-50 dark:bg-gray-900 rounded p-3 max-h-[200px] overflow-y-auto text-xs font-mono whitespace-pre-line">
                                {{ srt.preview }}
                            </div>
                        </div>

                        <!-- 预览按钮 -->
                        <div class="flex gap-2 mb-4">
                            <button class="btn btn-secondary btn-sm flex-1" @click="previewSrt(idx)">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {{ $t('tools.audio-to-srt.previewBtn') }}
                            </button>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.audio-to-srt.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.audio-to-srt.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AudioToSrtArticle />
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AudioToSrtArticle from './AudioToSrtArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalAudios = ref([])
const convertedSrts = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })
const playingUrl = ref(null)

// 设置
const sensitivity = ref('medium')
const maxDuration = ref('5')
const minSilence = ref('0.5')
const encoding = ref('utf-8')

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

// 格式化SRT时间码
function formatSrtTime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    const ms = Math.floor((seconds % 1) * 1000)
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`
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
    convertedSrts.value.forEach(srt => URL.revokeObjectURL(srt.url))
    originalAudios.value = []
    convertedSrts.value = []
}

// 移除单个音频
function removeAudio(idx) {
    URL.revokeObjectURL(originalAudios.value[idx].url)
    originalAudios.value.splice(idx, 1)
    if (convertedSrts.value[idx]) {
        URL.revokeObjectURL(convertedSrts.value[idx].url)
        convertedSrts.value.splice(idx, 1)
    }
}

// 加载示例音频
async function loadSampleAudio() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const sampleRateValue = 44100
        const duration = 5
        const numSamples = sampleRateValue * duration
        
        const buffer = audioContext.createBuffer(1, numSamples, sampleRateValue)
        const data = buffer.getChannelData(0)
        
        // 生成模拟语音的音频（交替的响亮和安静段落）
        const segmentDuration = 1.0
        const segments = Math.floor(duration / segmentDuration)
        for (let seg = 0; seg < segments; seg++) {
            const startSample = Math.floor(seg * segmentDuration * sampleRateValue)
            const endSample = Math.floor((seg + 1) * segmentDuration * sampleRateValue)
            const isActive = seg % 2 === 0
            
            for (let i = startSample; i < endSample && i < numSamples; i++) {
                const t = i / sampleRateValue
                if (isActive) {
                    // 模拟语音：多个频率叠加 + 随机调制
                    data[i] = (Math.sin(2 * Math.PI * 220 * t) * 0.3 +
                               Math.sin(2 * Math.PI * 440 * t) * 0.2 +
                               Math.sin(2 * Math.PI * 660 * t) * 0.1 +
                               (Math.random() - 0.5) * 0.2)
                    // 淡入淡出
                    const segPos = (i - startSample) / (endSample - startSample)
                    const fade = Math.min(segPos * 10, 1, (1 - segPos) * 10)
                    data[i] *= fade
                } else {
                    // 静音段：极低噪声
                    data[i] = (Math.random() - 0.5) * 0.01
                }
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

// 检测语音段落并生成SRT
function detectVoiceSegments(channelData, sampleRate, options) {
    const { sensitivity, maxDuration, minSilence } = options
    
    // 根据灵敏度设置阈值
    const thresholds = { high: 0.01, medium: 0.03, low: 0.06 }
    const threshold = thresholds[sensitivity] || 0.03
    
    const frameSize = Math.floor(sampleRate * 0.02) // 20ms帧
    const totalFrames = Math.floor(channelData.length / frameSize)
    
    // 计算每帧的RMS能量
    const energies = []
    for (let i = 0; i < totalFrames; i++) {
        const start = i * frameSize
        const end = Math.min(start + frameSize, channelData.length)
        let sum = 0
        for (let j = start; j < end; j++) {
            sum += channelData[j] * channelData[j]
        }
        energies.push(Math.sqrt(sum / (end - start)))
    }
    
    // 检测语音/静音段
    const segments = []
    let isActive = false
    let activeStart = 0
    
    for (let i = 0; i < energies.length; i++) {
        const time = i * frameSize / sampleRate
        if (energies[i] > threshold) {
            if (!isActive) {
                isActive = true
                activeStart = time
            }
        } else {
            if (isActive) {
                // 检查静音持续时长
                let silenceEnd = time
                for (let j = i; j < energies.length && energies[j] <= threshold; j++) {
                    silenceEnd = j * frameSize / sampleRate
                }
                if (silenceEnd - time >= minSilence) {
                    segments.push({ start: activeStart, end: time })
                    isActive = false
                }
            }
        }
    }
    
    // 处理末尾活跃段
    if (isActive) {
        const lastTime = energies.length * frameSize / sampleRate
        segments.push({ start: activeStart, end: lastTime })
    }
    
    // 合并距离过近的段
    const merged = []
    for (let i = 0; i < segments.length; i++) {
        if (merged.length === 0) {
            merged.push({ ...segments[i] })
        } else {
            const last = merged[merged.length - 1]
            const gap = segments[i].start - last.end
            if (gap < minSilence * 0.5) {
                last.end = segments[i].end
            } else {
                merged.push({ ...segments[i] })
            }
        }
    }
    
    // 按最大字幕时长拆分过长段落
    const result = []
    const maxDur = parseFloat(maxDuration)
    for (const seg of merged) {
        if (seg.end - seg.start <= maxDur) {
            result.push(seg)
        } else {
            let current = seg.start
            while (current < seg.end) {
                const end = Math.min(current + maxDur, seg.end)
                result.push({ start: current, end })
                current = end
            }
        }
    }
    
    return result
}

// 生成SRT内容
function generateSrt(segments, audioDuration) {
    let srtContent = ''
    
    // 填充首尾静音段
    const allSegments = []
    if (segments.length > 0) {
        if (segments[0].start > 0.1) {
            allSegments.push({ start: 0, end: segments[0].start })
        }
        allSegments.push(...segments)
        if (segments[segments.length - 1].end < audioDuration - 0.1) {
            allSegments.push({ start: segments[segments.length - 1].end, end: audioDuration })
        }
    }
    
    allSegments.forEach((seg, index) => {
        srtContent += `${index + 1}\n`
        srtContent += `${formatSrtTime(seg.start)} --> ${formatSrtTime(seg.end)}\n`
        srtContent += `[Audio ${index + 1}]\n`
        srtContent += '\n'
    })
    
    return srtContent
}

// 音频转SRT
async function convertAudioToSrt(audioData) {
    return new Promise((resolve, reject) => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        
        fetch(audioData.url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                const channelData = audioBuffer.getChannelData(0)
                const options = {
                    sensitivity: sensitivity.value,
                    maxDuration: maxDuration.value,
                    minSilence: parseFloat(minSilence.value)
                }
                
                const segments = detectVoiceSegments(channelData, audioBuffer.sampleRate, options)
                const srtContent = generateSrt(segments, audioBuffer.duration)
                
                // 编码处理
                let blob
                if (encoding.value === 'utf-8-bom') {
                    const bom = new Uint8Array([0xEF, 0xBB, 0xBF])
                    blob = new Blob([bom, srtContent], { type: 'text/plain;charset=utf-8' })
                } else {
                    blob = new Blob([srtContent], { type: 'text/plain;charset=utf-8' })
                }
                
                // 生成预览（最多前5条）
                const previewLines = srtContent.split('\n')
                const preview = previewLines.slice(0, 20).join('\n') + (previewLines.length > 20 ? '\n...' : '')
                
                resolve({
                    url: URL.createObjectURL(blob),
                    blob,
                    name: audioData.name.replace(/\.\w+$/, '.srt'),
                    subtitleCount: segments.length,
                    duration: audioBuffer.duration,
                    preview
                })
                
                audioContext.close()
            })
            .catch(error => {
                reject(error)
                audioContext.close()
            })
    })
}

// 转换所有音频
async function convertAll() {
    if (!originalAudios.value.length) return
    
    isConverting.value = true
    convertedSrts.value = []
    convertingProgress.value = { current: 0, total: originalAudios.value.length }
    
    try {
        for (let i = 0; i < originalAudios.value.length; i++) {
            convertingProgress.value.current = i + 1
            const result = await convertAudioToSrt(originalAudios.value[i])
            convertedSrts.value.push(result)
        }
    } catch (error) {
        console.error('转换失败', error)
        alert(t('tools.audio-to-srt.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 预览SRT内容
function previewSrt(idx) {
    const srt = convertedSrts.value[idx]
    if (!srt) return
    
    const newWindow = window.open('', '_blank')
    if (newWindow) {
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head><title>SRT Preview - ${srt.name}</title></head>
            <body style="font-family: monospace; white-space: pre-wrap; padding: 20px; background: #1a1a2e; color: #e0e0e0;">
${srt.preview.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </body>
            </html>
        `)
        newWindow.document.close()
    }
}

// 下载单个SRT
function download(idx) {
    const srt = convertedSrts.value[idx]
    if (!srt) return
    
    const a = document.createElement('a')
    a.href = srt.url
    a.download = srt.name
    a.click()
}

// 批量下载
async function downloadAll() {
    if (!convertedSrts.value.length) return
    
    const zip = new JSZip()
    
    for (let i = 0; i < convertedSrts.value.length; i++) {
        const srt = convertedSrts.value[i]
        zip.file(srt.name, srt.blob)
    }
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'converted_srts.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 清理
onUnmounted(() => {
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

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>
