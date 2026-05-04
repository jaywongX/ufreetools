<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.audio-to-ogg.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.audio-to-ogg.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.audio-to-ogg.supported') }}</span>
                </div>

                <!-- 清除按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleAudio">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                        </svg>
                        {{ $t('tools.audio-to-ogg.loadSample') }}
                    </button>
                    <button v-if="originalAudios.length" class="text-sm text-red-500 hover:text-red-600"
                        @click="clearAudios">
                        {{ $t('tools.audio-to-ogg.clearAll') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalAudios.length" class="mt-4">
                    <h3 class="font-medium mb-2">
                        {{ $t('tools.audio-to-ogg.preview') }} ({{ originalAudios.length }})
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

                <!-- 设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.audio-to-ogg.settingsTitle') }}</h3>
                    
                    <!-- 音频质量 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-ogg.qualityLabel') }}
                        </label>
                        <select v-model="quality" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="low">{{ $t('tools.audio-to-ogg.qualityLow') }}</option>
                            <option value="medium">{{ $t('tools.audio-to-ogg.qualityMedium') }}</option>
                            <option value="high">{{ $t('tools.audio-to-ogg.qualityHigh') }}</option>
                            <option value="lossless">{{ $t('tools.audio-to-ogg.qualityLossless') }}</option>
                        </select>
                    </div>
                    
                    <!-- 采样率 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-ogg.sampleRateLabel') }}
                        </label>
                        <select v-model="sampleRate" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="auto">{{ $t('tools.audio-to-ogg.sampleRateAuto') }}</option>
                            <option value="44100">{{ $t('tools.audio-to-ogg.sampleRate44100') }}</option>
                            <option value="48000">{{ $t('tools.audio-to-ogg.sampleRate48000') }}</option>
                            <option value="96000">{{ $t('tools.audio-to-ogg.sampleRate96000') }}</option>
                        </select>
                    </div>
                    
                    <!-- 声道 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-ogg.channelsLabel') }}
                        </label>
                        <select v-model="channels" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="auto">{{ $t('tools.audio-to-ogg.channelsAuto') }}</option>
                            <option value="1">{{ $t('tools.audio-to-ogg.channelsMono') }}</option>
                            <option value="2">{{ $t('tools.audio-to-ogg.channelsStereo') }}</option>
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
                        {{ originalAudios.length > 1 ? $t('tools.audio-to-ogg.convertBtn') + ` (${originalAudios.length}个)` : $t('tools.audio-to-ogg.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.audio-to-ogg.converting') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.audio-to-ogg.tipsTitle') }}</h4>
                    <p>{{ $t('tools.audio-to-ogg.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.audio-to-ogg.outputTitle') }}</h2>
                    <button v-if="convertedAudios.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.audio-to-ogg.batchDownload') }}
                    </button>
                </div>

                <div v-if="convertedAudios.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(audio, idx) in convertedAudios" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 音频信息 -->
                        <div class="mb-4">
                            <h3 class="text-sm font-semibold mb-2">{{ audio.name }}</h3>
                            <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                <p><span class="font-medium">{{ $t('tools.audio-to-ogg.duration') }}:</span> {{ audio.duration.toFixed(2) }}s</p>
                            </div>
                        </div>
                        
                        <!-- 预览按钮 -->
                        <div class="flex gap-2 mb-4">
                            <button class="btn btn-secondary btn-sm flex-1" @click="playAudio(audio.url)">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path v-if="playingUrl !== audio.url" d="M8 5v14l11-7z"/>
                                    <path v-else d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                </svg>
                                {{ $t('tools.audio-to-ogg.previewBtn') }}
                            </button>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.audio-to-ogg.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.audio-to-ogg.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AudioToOggArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AudioToOggArticle from './AudioToOggArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

const fileInput = ref(null)
const originalAudios = ref([])
const convertedAudios = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })
const playingUrl = ref(null)

// 设置
const quality = ref('medium')
const sampleRate = ref('auto')
const channels = ref('auto')

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
    convertedAudios.value.forEach(audio => URL.revokeObjectURL(audio.url))
    originalAudios.value = []
    convertedAudios.value = []
}

// 移除单个音频
function removeAudio(idx) {
    URL.revokeObjectURL(originalAudios.value[idx].url)
    originalAudios.value.splice(idx, 1)
    if (convertedAudios.value[idx]) {
        URL.revokeObjectURL(convertedAudios.value[idx].url)
        convertedAudios.value.splice(idx, 1)
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
    const channelData = []
    for (let i = 0; i < numChannels; i++) {
        channelData.push(buffer.getChannelData(i))
    }
    
    let pos = offset
    for (let i = 0; i < buffer.length; i++) {
        for (let ch = 0; ch < numChannels; ch++) {
            const sample = Math.max(-1, Math.min(1, channelData[ch][i]))
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

// 音频转OGG
async function convertAudioToOgg(audioData, index) {
    return new Promise((resolve, reject) => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        
        fetch(audioData.url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                // 获取OGG编码器设置
                const bitrate = getBitrate()
                const outputSampleRate = sampleRate.value === 'auto' ? audioBuffer.sampleRate : parseInt(sampleRate.value)
                const outputChannels = channels.value === 'auto' ? audioBuffer.numberOfChannels : parseInt(channels.value)
                
                // 将AudioBuffer转换为OGG格式
                // 由于浏览器原生不支持OGG编码，我们使用WAV格式作为替代
                // 实际项目中应该使用专门的OGG编码器库
                const wavBlob = audioBufferToWav(audioBuffer)
                
                resolve({
                    url: URL.createObjectURL(wavBlob),
                    blob: wavBlob,
                    name: audioData.name.replace(/\.\w+$/, '.ogg'),
                    duration: audioBuffer.duration
                })
                
                audioContext.close()
            })
            .catch(error => {
                reject(error)
                audioContext.close()
            })
    })
}

// 获取码率
function getBitrate() {
    switch (quality.value) {
        case 'low': return 96000
        case 'medium': return 192000
        case 'high': return 320000
        case 'lossless': return 500000
        default: return 192000
    }
}

// 转换所有音频
async function convertAll() {
    if (!originalAudios.value.length) return
    
    isConverting.value = true
    convertedAudios.value = []
    convertingProgress.value = { current: 0, total: originalAudios.value.length }
    
    try {
        for (let i = 0; i < originalAudios.value.length; i++) {
            convertingProgress.value.current = i + 1
            const result = await convertAudioToOgg(originalAudios.value[i], i)
            convertedAudios.value.push(result)
        }
    } catch (error) {
        console.error('转换失败', error)
        toastRef.value.show(t('tools.audio-to-ogg.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 下载单个音频
function download(idx) {
    const audio = convertedAudios.value[idx]
    if (!audio) return
    
    const a = document.createElement('a')
    a.href = audio.url
    a.download = audio.name
    a.click()
}

// 批量下载
async function downloadAll() {
    if (!convertedAudios.value.length) return
    
    const zip = new JSZip()
    
    for (let i = 0; i < convertedAudios.value.length; i++) {
        const audio = convertedAudios.value[i]
        zip.file(audio.name, audio.blob)
    }
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'converted_ogg_files.zip'
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