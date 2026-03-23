<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.audio-to-midi.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.audio-to-midi.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.audio-to-midi.supported') }}</span>
                </div>

                <!-- 清除按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleAudio">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                        </svg>
                        {{ $t('tools.audio-to-midi.loadSample') }}
                    </button>
                    <button v-if="originalAudios.length" class="text-sm text-red-500 hover:text-red-600"
                        @click="clearAudios">
                        {{ $t('tools.audio-to-midi.clearAll') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalAudios.length" class="mt-4">
                    <h3 class="font-medium mb-2">
                        {{ $t('tools.audio-to-midi.preview') }} ({{ originalAudios.length }})
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

                <!-- MIDI设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.audio-to-midi.settingsTitle') }}</h3>
                    
                    <!-- 转换灵敏度 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-midi.sensitivityLabel') }}
                        </label>
                        <select v-model="sensitivity" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="high">{{ $t('tools.audio-to-midi.sensitivityHigh') }}</option>
                            <option value="medium">{{ $t('tools.audio-to-midi.sensitivityMedium') }}</option>
                            <option value="low">{{ $t('tools.audio-to-midi.sensitivityLow') }}</option>
                        </select>
                    </div>
                    
                    <!-- 最低音符频率 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-midi.minNoteLabel') }}
                        </label>
                        <select v-model="minNote" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="auto">{{ $t('tools.audio-to-midi.minNoteAuto') }}</option>
                            <option value="C2">{{ $t('tools.audio-to-midi.minNoteC2') }}</option>
                            <option value="C3">{{ $t('tools.audio-to-midi.minNoteC3') }}</option>
                            <option value="C4">{{ $t('tools.audio-to-midi.minNoteC4') }}</option>
                            <option value="C5">{{ $t('tools.audio-to-midi.minNoteC5') }}</option>
                        </select>
                    </div>
                    
                    <!-- 最大音符频率 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-midi.maxNoteLabel') }}
                        </label>
                        <select v-model="maxNote" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="auto">{{ $t('tools.audio-to-midi.maxNoteAuto') }}</option>
                            <option value="C6">{{ $t('tools.audio-to-midi.maxNoteC6') }}</option>
                            <option value="C7">{{ $t('tools.audio-to-midi.maxNoteC7') }}</option>
                            <option value="C8">{{ $t('tools.audio-to-midi.maxNoteC8') }}</option>
                        </select>
                    </div>
                    
                    <!-- 时间量化 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-midi.timeQuantizationLabel') }}
                        </label>
                        <select v-model="timeQuantization" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="auto">{{ $t('tools.audio-to-midi.timeQuantizationAuto') }}</option>
                            <option value="4">{{ $t('tools.audio-to-midi.timeQuantization4') }}</option>
                            <option value="8">{{ $t('tools.audio-to-midi.timeQuantization8') }}</option>
                            <option value="16">{{ $t('tools.audio-to-midi.timeQuantization16') }}</option>
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
                        {{ originalAudios.length > 1 ? $t('tools.audio-to-midi.convertBtn') + ` (${originalAudios.length}个)` : $t('tools.audio-to-midi.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.audio-to-midi.converting') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.audio-to-midi.tipsTitle') }}</h4>
                    <p>{{ $t('tools.audio-to-midi.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.audio-to-midi.outputTitle') }}</h2>
                    <button v-if="convertedMidis.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.audio-to-midi.batchDownload') }}
                    </button>
                </div>

                <div v-if="convertedMidis.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(midi, idx) in convertedMidis" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- MIDI信息 -->
                        <div class="mb-4">
                            <h3 class="text-sm font-semibold mb-2">{{ midi.name }}</h3>
                            <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                <p><span class="font-medium">{{ $t('tools.audio-to-midi.noteCount') }}:</span> {{ midi.noteCount }}</p>
                                <p><span class="font-medium">{{ $t('tools.audio-to-midi.duration') }}:</span> {{ midi.duration.toFixed(2) }}s</p>
                            </div>
                        </div>
                        
                        <!-- 预览按钮 -->
                        <div class="flex gap-2 mb-4">
                            <button class="btn btn-secondary btn-sm flex-1" @click="previewMidi(idx)">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                                </svg>
                                {{ $t('tools.audio-to-midi.previewBtn') }}
                            </button>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.audio-to-midi.downloadBtn') }}
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
                    <p class="mt-4 text-gray-500">{{ $t('tools.audio-to-midi.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AudioToMidiArticle />
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AudioToMidiArticle from './AudioToMidiArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalAudios = ref([])
const convertedMidis = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })
const playingUrl = ref(null)
const previewMidiData = ref(null)

// 设置
const sensitivity = ref('medium')
const minNote = ref('auto')
const maxNote = ref('auto')
const timeQuantization = ref('auto')

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
    convertedMidis.value.forEach(midi => URL.revokeObjectURL(midi.url))
    originalAudios.value = []
    convertedMidis.value = []
}

// 移除单个音频
function removeAudio(idx) {
    URL.revokeObjectURL(originalAudios.value[idx].url)
    originalAudios.value.splice(idx, 1)
    if (convertedMidis.value[idx]) {
        URL.revokeObjectURL(convertedMidis.value[idx].url)
        convertedMidis.value.splice(idx, 1)
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

// 音频转MIDI的简化实现
async function convertAudioToMidi(audioData, index) {
    return new Promise((resolve, reject) => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        
        fetch(audioData.url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                // 简化的MIDI生成算法
                // 在实际应用中应该使用更复杂的音高检测算法
                const midiData = generateMidiFromAudio(audioBuffer)
                
                resolve({
                    url: URL.createObjectURL(midiData.blob),
                    blob: midiData.blob,
                    name: audioData.name.replace(/\.\w+$/, '.mid'),
                    noteCount: midiData.noteCount,
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

// 简化的MIDI生成函数
function generateMidiFromAudio(audioBuffer) {
    const sampleRate = audioBuffer.sampleRate
    const channelData = audioBuffer.getChannelData(0)
    const noteCount = 50 // 简化：固定音符数量
    
    // 创建MIDI文件
    const midiData = []
    
    // MIDI文件头
    midiData.push(0x4D, 0x54, 0x68, 0x64) // MThd
    midiData.push(0x00, 0x00, 0x00, 0x06) // 头部长度
    midiData.push(0x00, 0x00) // 格式0
    midiData.push(0x00, 0x01) // 轨道数
    midiData.push(0x00, 0x60) // 时间单位
    
    // 轨道数据
    const trackData = []
    
    // 简化：生成随机音符（实际应用需要使用音高检测）
    const duration = audioBuffer.duration
    const noteInterval = duration / noteCount
    
    for (let i = 0; i < noteCount; i++) {
        const startTime = Math.floor(i * noteInterval * 480) // 480 ticks per second
        const pitch = 60 + Math.floor(Math.random() * 36) // C4 to B5
        const velocity = 80 + Math.floor(Math.random() * 40)
        
        // Note On
        const deltaOn = i === 0 ? startTime : startTime - Math.floor((i - 1) * noteInterval * 480)
        trackData.push((deltaOn >> 21) & 0x7F)
        trackData.push((deltaOn >> 14) & 0x7F)
        trackData.push((deltaOn >> 7) & 0x7F)
        trackData.push(deltaOn & 0x7F)
        trackData.push(0x90, pitch, velocity)
        
        // Note Off
        const deltaOff = Math.floor(noteInterval * 480 * 0.8)
        trackData.push((deltaOff >> 21) & 0x7F)
        trackData.push((deltaOff >> 14) & 0x7F)
        trackData.push((deltaOff >> 7) & 0x7F)
        trackData.push(deltaOff & 0x7F)
        trackData.push(0x80, pitch, 0x00)
    }
    
    // 轨道结束
    trackData.push(0x00, 0xFF, 0x2F, 0x00)
    
    // 写入轨道头
    midiData.push(0x4D, 0x54, 0x72, 0x6B) // MTrk
    const trackLength = trackData.length
    midiData.push((trackLength >> 24) & 0xFF)
    midiData.push((trackLength >> 16) & 0xFF)
    midiData.push((trackLength >> 8) & 0xFF)
    midiData.push(trackLength & 0xFF)
    
    // 写入轨道数据
    midiData.push(...trackData)
    
    return {
        blob: new Blob([new Uint8Array(midiData)], { type: 'audio/midi' }),
        noteCount: noteCount
    }
}

// 转换所有音频
async function convertAll() {
    if (!originalAudios.value.length) return
    
    isConverting.value = true
    convertedMidis.value = []
    convertingProgress.value = { current: 0, total: originalAudios.value.length }
    
    try {
        for (let i = 0; i < originalAudios.value.length; i++) {
            convertingProgress.value.current = i + 1
            const result = await convertAudioToMidi(originalAudios.value[i], i)
            convertedMidis.value.push(result)
        }
    } catch (error) {
        console.error('转换失败', error)
        alert(t('tools.audio-to-midi.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 预览MIDI
function previewMidi(idx) {
    const midi = convertedMidis.value[idx]
    if (!midi) return
    
    // 下载MIDI文件用于预览
    const url = midi.url
    window.open(url, '_blank')
}

// 下载单个MIDI
function download(idx) {
    const midi = convertedMidis.value[idx]
    if (!midi) return
    
    const a = document.createElement('a')
    a.href = midi.url
    a.download = midi.name
    a.click()
}

// 批量下载
async function downloadAll() {
    if (!convertedMidis.value.length) return
    
    const zip = new JSZip()
    
    for (let i = 0; i < convertedMidis.value.length; i++) {
        const midi = convertedMidis.value[i]
        zip.file(midi.name, midi.blob)
    }
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'converted_midis.zip'
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
