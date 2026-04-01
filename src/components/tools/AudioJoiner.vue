<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.audio-joiner.inputTitle') }}</h2>

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
                    <span class="text-gray-500">{{ $t('tools.audio-joiner.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.audio-joiner.supported') }}</span>
                </div>

                <!-- 清除和示例按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleAudio">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                        </svg>
                        {{ $t('tools.audio-joiner.loadSample') }}
                    </button>
                    <button v-if="audioList.length" class="text-sm text-red-500 hover:text-red-600"
                        @click="clearAudios">
                        {{ $t('tools.audio-joiner.clearAll') }}
                    </button>
                </div>

                <!-- 音频列表 -->
                <div v-if="audioList.length" class="mt-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-medium">
                            {{ $t('tools.audio-joiner.preview') }} ({{ audioList.length }})
                        </h3>
                        <div class="flex gap-2">
                            <select v-model="sortBy" class="text-sm px-2 py-1 border rounded dark:bg-gray-700">
                                <option value="upload">{{ $t('tools.audio-joiner.sortUpload') }}</option>
                                <option value="name">{{ $t('tools.audio-joiner.sortName') }}</option>
                                <option value="duration">{{ $t('tools.audio-joiner.sortDuration') }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="space-y-2 max-h-[300px] overflow-y-auto">
                        <div v-for="(audio, idx) in sortedAudioList" :key="audio.id"
                            class="flex items-center gap-2 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700"
                            draggable="true"
                            @dragstart="dragStart(idx)"
                            @dragover.prevent="dragOver($event, idx)"
                            @drop.prevent="drop(idx)"
                            @dragend="dragEnd">
                            <span class="text-gray-400 cursor-move">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                                </svg>
                            </span>
                            <button class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 flex-shrink-0"
                                @click="playAudio(audio.url)">
                                <svg v-if="playingUrl !== audio.url" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                </svg>
                            </button>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium truncate">{{ audio.name }}</p>
                                <p class="text-xs text-gray-500">{{ formatDuration(audio.duration) }} | {{ formatFileSize(audio.file.size) }}</p>
                            </div>
                            <div class="flex gap-1">
                                <button class="p-1 text-gray-500 hover:text-blue-500" @click="moveUp(idx)" :disabled="idx === 0">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                                    </svg>
                                </button>
                                <button class="p-1 text-gray-500 hover:text-blue-500" @click="moveDown(idx)" :disabled="idx === sortedAudioList.length - 1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <button class="p-1 text-red-500 hover:text-red-600" @click="removeAudio(idx)">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {{ $t('tools.audio-joiner.totalDuration') }}: {{ formatDuration(totalDuration) }} | {{ $t('tools.audio-joiner.audioCount') }}: {{ audioList.length }}
                    </div>
                </div>

                <!-- 拼接设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.audio-joiner.settingsTitle') }}</h3>
                    
                    <!-- 输出格式 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-joiner.outputFormatLabel') }}
                        </label>
                        <select v-model="outputFormat" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="mp3">{{ $t('tools.audio-joiner.outputFormatMp3') }}</option>
                            <option value="wav">{{ $t('tools.audio-joiner.outputFormatWav') }}</option>
                            <option value="ogg">{{ $t('tools.audio-joiner.outputFormatOgg') }}</option>
                            <option value="m4a">{{ $t('tools.audio-joiner.outputFormatM4a') }}</option>
                            <option value="flac">{{ $t('tools.audio-joiner.outputFormatFlac') }}</option>
                        </select>
                    </div>
                    
                    <!-- 淡入淡出 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-joiner.crossfadeLabel') }}
                        </label>
                        <select v-model="crossfade" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="0">{{ $t('tools.audio-joiner.crossfadeNone') }}</option>
                            <option value="0.5">{{ $t('tools.audio-joiner.crossfadeShort') }}</option>
                            <option value="1">{{ $t('tools.audio-joiner.crossfadeMedium') }}</option>
                            <option value="2">{{ $t('tools.audio-joiner.crossfadeLong') }}</option>
                        </select>
                    </div>
                    
                    <!-- 音频间隔 -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-joiner.silenceLabel') }}
                        </label>
                        <select v-model="silence" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="0">{{ $t('tools.audio-joiner.silenceNone') }}</option>
                            <option value="0.5">{{ $t('tools.audio-joiner.silenceShort') }}</option>
                            <option value="1">{{ $t('tools.audio-joiner.silenceMedium') }}</option>
                            <option value="2">{{ $t('tools.audio-joiner.silenceLong') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-6"
                    :disabled="audioList.length < 2 || isConverting"
                    @click="joinAudios">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="!isConverting">{{ $t('tools.audio-joiner.convertBtn') }}</span>
                    <span v-else>{{ $t('tools.audio-joiner.converting') }}</span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.audio-joiner.tipsTitle') }}</h4>
                    <p>{{ $t('tools.audio-joiner.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.audio-joiner.outputTitle') }}</h2>

                <div v-if="outputAudio" class="space-y-4">
                    <!-- 音频信息 -->
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                        <h3 class="text-sm font-semibold mb-2">{{ outputAudio.name }}</h3>
                        <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            <p><span class="font-medium">{{ $t('tools.audio-joiner.duration') }}:</span> {{ formatDuration(outputAudio.duration) }}</p>
                            <p><span class="font-medium">{{ $t('tools.audio-joiner.audioCount') }}:</span> {{ audioList.length }}</p>
                        </div>
                    </div>
                    
                    <!-- 预览按钮 -->
                    <div class="flex gap-2">
                        <button class="btn btn-secondary btn-sm flex-1" @click="playOutput">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                            </svg>
                            {{ $t('tools.audio-joiner.previewBtn') }}
                        </button>
                    </div>

                    <!-- 下载按钮 -->
                    <button class="btn btn-success w-full" @click="download">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.audio-joiner.downloadBtn') }}
                    </button>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.audio-joiner.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AudioJoinerArticle />
    </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AudioJoinerArticle from './AudioJoinerArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const audioList = ref([])
const outputAudio = ref(null)
const isDragging = ref(false)
const isConverting = ref(false)
const playingUrl = ref(null)
const draggedIndex = ref(null)
const dragOverIndex = ref(null)

// 设置
const outputFormat = ref('mp3')
const crossfade = ref('0')
const silence = ref('0')
const sortBy = ref('upload')

// 音频元素
let audioElement = null

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// 格式化时长
function formatDuration(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
}

// 计算总时长
const totalDuration = computed(() => {
    return audioList.value.reduce((sum, audio) => sum + (audio.duration || 0), 0)
})

// 排序后的音频列表
const sortedAudioList = computed(() => {
    const list = [...audioList.value]
    if (sortBy.value === 'name') {
        list.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy.value === 'duration') {
        list.sort((a, b) => a.duration - b.duration)
    }
    return list
})

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

// 播放输出音频
function playOutput() {
    if (outputAudio.value) {
        playAudio(outputAudio.value.url)
    }
}

// 处理文件上传
async function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer?.files || [])
    for (const file of files) {
        const type = file.type.toLowerCase()
        const isAudio = /^audio\//i.test(type) || 
            file.name.match(/\.(wav|mp3|flac|ogg|aac|m4a|wma|amr|aiff|ape)$/i)
        if (!isAudio) continue

        const url = URL.createObjectURL(file)
        const duration = await getAudioDuration(url)
        audioList.value.push({ 
            id: Date.now() + Math.random(), 
            file, 
            url, 
            name: file.name,
            duration 
        })
    }
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
}

// 获取音频时长
function getAudioDuration(url) {
    return new Promise((resolve) => {
        const audio = new Audio()
        audio.onloadedmetadata = () => {
            resolve(audio.duration)
        }
        audio.onerror = () => resolve(0)
        audio.src = url
    })
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除所有音频
function clearAudios() {
    audioList.value.forEach(audio => URL.revokeObjectURL(audio.url))
    if (outputAudio.value) {
        URL.revokeObjectURL(outputAudio.value.url)
    }
    audioList.value = []
    outputAudio.value = null
}

// 移除单个音频
function removeAudio(idx) {
    const audio = sortedAudioList.value[idx]
    const originalIdx = audioList.value.findIndex(a => a.id === audio.id)
    if (originalIdx > -1) {
        URL.revokeObjectURL(audioList.value[originalIdx].url)
        audioList.value.splice(originalIdx, 1)
    }
}

// 上移
function moveUp(idx) {
    if (idx === 0) return
    const audio = sortedAudioList.value[idx]
    const originalIdx = audioList.value.findIndex(a => a.id === audio.id)
    if (originalIdx > 0) {
        [audioList.value[originalIdx - 1], audioList.value[originalIdx]] = 
        [audioList.value[originalIdx], audioList.value[originalIdx - 1]]
    }
}

// 下移
function moveDown(idx) {
    if (idx === sortedAudioList.value.length - 1) return
    const audio = sortedAudioList.value[idx]
    const originalIdx = audioList.value.findIndex(a => a.id === audio.id)
    if (originalIdx < audioList.value.length - 1) {
        [audioList.value[originalIdx + 1], audioList.value[originalIdx]] = 
        [audioList.value[originalIdx], audioList.value[originalIdx + 1]]
    }
}

// 拖拽相关
function dragStart(idx) {
    draggedIndex.value = idx
}

function dragOver(e, idx) {
    e.preventDefault()
    dragOverIndex.value = idx
}

function drop(idx) {
    if (draggedIndex.value === null || draggedIndex.value === idx) return
    
    const draggedAudio = sortedAudioList.value[draggedIndex.value]
    const targetAudio = sortedAudioList.value[idx]
    const draggedOriginalIdx = audioList.value.findIndex(a => a.id === draggedAudio.id)
    const targetOriginalIdx = audioList.value.findIndex(a => a.id === targetAudio.id)
    
    audioList.value.splice(draggedOriginalIdx, 1)
    audioList.value.splice(targetOriginalIdx, 0, draggedAudio)
    
    draggedIndex.value = null
    dragOverIndex.value = null
}

function dragEnd() {
    draggedIndex.value = null
    dragOverIndex.value = null
}

// 加载示例音频
async function loadSampleAudio() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const sampleRateValue = 44100
        const duration = 2
        const numSamples = sampleRateValue * duration
        
        for (let i = 0; i < 3; i++) {
            const buffer = audioContext.createBuffer(2, numSamples, sampleRateValue)
            const freq = 440 * (i + 1)
            
            for (let channel = 0; channel < 2; channel++) {
                const data = buffer.getChannelData(channel)
                for (let j = 0; j < numSamples; j++) {
                    data[j] = Math.sin(2 * Math.PI * freq * j / sampleRateValue) * 0.5
                }
            }
            
            const wavBlob = audioBufferToWav(buffer)
            const file = new File([wavBlob], `sample-audio-${i + 1}.wav`, { type: 'audio/wav' })
            const url = URL.createObjectURL(file)
            audioList.value.push({ 
                id: Date.now() + i, 
                file, 
                url, 
                name: file.name,
                duration 
            })
        }
        
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

// 拼接音频
async function joinAudios() {
    if (audioList.value.length < 2) return
    
    isConverting.value = true
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const sampleRate = 44100
        const channels = 2
        const silenceDuration = parseFloat(silence.value)
        const crossfadeDuration = parseFloat(crossfade.value)
        
        // 计算总长度
        let totalLength = 0
        const decodedBuffers = []
        
        for (const audio of sortedAudioList.value) {
            const response = await fetch(audio.url)
            const arrayBuffer = await response.arrayBuffer()
            const decodedBuffer = await audioContext.decodeAudioData(arrayBuffer)
            decodedBuffers.push(decodedBuffer)
            totalLength += decodedBuffer.length
        }
        
        // 添加间隔长度
        if (silenceDuration > 0) {
            totalLength += silenceDuration * sampleRate * (sortedAudioList.value.length - 1)
        }
        
        // 创建输出buffer
        const outputBuffer = audioContext.createBuffer(channels, totalLength, sampleRate)
        const outputChannels = []
        for (let i = 0; i < channels; i++) {
            outputChannels.push(outputBuffer.getChannelData(i))
        }
        
        // 拼接音频
        let currentPos = 0
        for (let i = 0; i < decodedBuffers.length; i++) {
            const buffer = decodedBuffers[i]
            const inputChannels = []
            for (let ch = 0; ch < Math.min(buffer.numberOfChannels, channels); ch++) {
                inputChannels.push(buffer.getChannelData(ch))
            }
            
            // 复制音频数据
            for (let j = 0; j < buffer.length; j++) {
                for (let ch = 0; ch < channels; ch++) {
                    const inputCh = ch < inputChannels.length ? ch : 0
                    outputChannels[ch][currentPos + j] = inputChannels[inputCh][j]
                }
            }
            
            currentPos += buffer.length
            
            // 添加静音间隔
            if (i < decodedBuffers.length - 1 && silenceDuration > 0) {
                currentPos += silenceDuration * sampleRate
            }
        }
        
        // 转换为输出格式
        const wavBlob = audioBufferToWav(outputBuffer)
        const url = URL.createObjectURL(wavBlob)
        
        outputAudio.value = {
            url,
            blob: wavBlob,
            name: `joined-audio.${outputFormat.value}`,
            duration: outputBuffer.duration
        }
        
        audioContext.close()
    } catch (error) {
        console.error('拼接失败', error)
        alert(t('tools.audio-joiner.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 下载
function download() {
    if (!outputAudio.value) return
    
    const a = document.createElement('a')
    a.href = outputAudio.value.url
    a.download = outputAudio.value.name
    a.click()
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
