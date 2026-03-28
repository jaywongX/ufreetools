<template>
    <div class="w-full">
        <div class="grid grid-cols-1 gap-6">
            <!-- 输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.audio-visual-editor.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div v-if="!audioBuffer" class="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop"
                    @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false"
                    @click="fileInput?.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept="audio/*,.wav,.mp3,.flac,.ogg,.aac,.m4a,.wma,.amr,.aiff,.ape"
                        @change="handleFile" />
                    <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                    </svg>
                    <span class="text-gray-500 text-lg">{{ $t('tools.audio-visual-editor.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.audio-visual-editor.supported') }}</span>
                </div>

                <!-- 音频编辑器 -->
                <div v-if="audioBuffer" class="space-y-4">
                    <!-- 文件信息 -->
                    <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                            <p class="font-medium">{{ fileName }}</p>
                            <p class="text-sm text-gray-500">
                                {{ formatDuration(audioBuffer.duration) }} | {{ audioBuffer.sampleRate }}Hz | {{ audioBuffer.numberOfChannels }}ch
                            </p>
                        </div>
                        <button class="text-red-500 hover:text-red-600 p-2" @click="clearAudio">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>

                    <!-- 波形显示区域 -->
                    <div class="relative border rounded-lg overflow-hidden bg-gray-900 select-none" ref="waveformContainer">
                        <canvas ref="waveformCanvas" class="w-full h-48 cursor-crosshair"></canvas>
                        <!-- 选区显示 -->
                        <div v-if="selection.start !== selection.end"
                            class="absolute top-0 bottom-0 bg-blue-500/30 border-l-2 border-r-2 border-blue-500"
                            :style="{ left: (selection.start / audioBuffer.duration * 100) + '%', width: ((selection.end - selection.start) / audioBuffer.duration * 100) + '%' }">
                        </div>
                        <!-- 左侧调整手柄 -->
                        <div v-if="selection.start !== selection.end"
                            class="absolute top-0 bottom-0 w-3 cursor-ew-resize group"
                            :style="{ left: 'calc(' + (selection.start / audioBuffer.duration * 100) + '% - 6px)' }"
                            @mousedown="startResizeHandle('start', $event)">
                            <div class="w-1 h-full bg-blue-500 group-hover:bg-blue-400 transition-colors"
                                :class="{ 'bg-blue-400': resizingHandle === 'start' }"></div>
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-8 bg-blue-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                :class="{ 'opacity-100': resizingHandle === 'start' }">
                                <div class="flex flex-col items-center justify-center h-full gap-0.5">
                                    <div class="w-1 h-0.5 bg-white rounded"></div>
                                    <div class="w-1 h-0.5 bg-white rounded"></div>
                                    <div class="w-1 h-0.5 bg-white rounded"></div>
                                </div>
                            </div>
                        </div>
                        <!-- 右侧调整手柄 -->
                        <div v-if="selection.start !== selection.end"
                            class="absolute top-0 bottom-0 w-3 cursor-ew-resize group"
                            :style="{ left: 'calc(' + (selection.end / audioBuffer.duration * 100) + '% - 6px)' }"
                            @mousedown="startResizeHandle('end', $event)">
                            <div class="w-1 h-full bg-blue-500 group-hover:bg-blue-400 transition-colors ml-auto"
                                :class="{ 'bg-blue-400': resizingHandle === 'end' }"></div>
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-8 bg-blue-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                :class="{ 'opacity-100': resizingHandle === 'end' }">
                                <div class="flex flex-col items-center justify-center h-full gap-0.5">
                                    <div class="w-1 h-0.5 bg-white rounded"></div>
                                    <div class="w-1 h-0.5 bg-white rounded"></div>
                                    <div class="w-1 h-0.5 bg-white rounded"></div>
                                </div>
                            </div>
                        </div>
                        <!-- 播放位置指示器 -->
                        <div v-if="isPlaying"
                            class="absolute top-0 bottom-0 w-0.5 bg-red-500 transition-all pointer-events-none"
                            :style="{ left: (playbackPosition / audioBuffer.duration * 100) + '%' }">
                        </div>
                    </div>

                    <!-- 时间标尺 -->
                    <div class="flex justify-between text-xs text-gray-500 px-1">
                        <span>{{ formatDuration(0) }}</span>
                        <span>{{ formatDuration(audioBuffer.duration / 2) }}</span>
                        <span>{{ formatDuration(audioBuffer.duration) }}</span>
                    </div>

                    <!-- 播放控制 -->
                    <div class="flex items-center justify-center gap-4">
                        <button @click="skipBackward" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"/>
                            </svg>
                        </button>
                        <button @click="togglePlayback" 
                            class="p-4 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                            <svg v-if="!isPlaying" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg v-else class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                        </button>
                        <button @click="skipForward" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/>
                            </svg>
                        </button>
                        <button @click="stopPlayback" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="6" y="6" width="12" height="12"/>
                            </svg>
                        </button>
                    </div>

                    <!-- 选区信息 -->
                    <div v-if="selection.start !== selection.end" class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div class="flex justify-between items-center">
                            <span class="text-sm">
                                {{ $t('tools.audio-visual-editor.selection') }}: {{ formatDuration(selection.start) }} - {{ formatDuration(selection.end) }}
                                ({{ formatDuration(selection.end - selection.start) }})
                            </span>
                            <button @click="clearSelection" class="text-sm text-blue-500 hover:text-blue-600">
                                {{ $t('tools.audio-visual-editor.clearSelection') }}
                            </button>
                        </div>
                    </div>

                    <!-- 编辑工具 -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <button v-for="tool in editTools" :key="tool.id"
                            @click="tool.action"
                            :disabled="tool.disabled"
                            :class="[
                                'p-3 rounded-lg border text-sm font-medium transition-colors',
                                tool.disabled 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500'
                            ]">
                            <component :is="tool.icon" class="w-5 h-5 mx-auto mb-1"/>
                            {{ tool.label }}
                        </button>
                    </div>

                    <!-- 音量控制 -->
                    <div class="flex items-center gap-4">
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                        </svg>
                        <input type="range" v-model="volume" min="0" max="100" class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                        <span class="text-sm text-gray-500 w-12 text-right">{{ volume }}%</span>
                    </div>
                </div>

                <p class="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    {{ $t('tools.audio-visual-editor.tip') }}
                </p>
            </div>

            <!-- 导出区域 -->
            <div v-if="audioBuffer" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.audio-visual-editor.outputTitle') }}</h2>
                
                <div class="space-y-4">
                    <!-- 导出格式选择 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.audio-visual-editor.formatLabel') }}
                        </label>
                        <select v-model="exportFormat" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="wav">WAV (无损)</option>
                            <option value="mp3">MP3 (压缩)</option>
                        </select>
                    </div>

                    <!-- 导出按钮 -->
                    <div class="flex gap-2">
                        <button @click="exportAudio('full')" 
                            class="btn btn-primary flex-1">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                            {{ $t('tools.audio-visual-editor.exportFull') }}
                        </button>
                        <button v-if="selection.start !== selection.end"
                            @click="exportAudio('selection')"
                            class="btn btn-success flex-1">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                            {{ $t('tools.audio-visual-editor.exportSelection') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <AudioVisualEditorArticle />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, h } from 'vue'
import { useI18n } from 'vue-i18n'
import AudioVisualEditorArticle from './AudioVisualEditorArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const waveformCanvas = ref(null)
const waveformContainer = ref(null)
const audioBuffer = ref(null)
const fileName = ref('')
const isDragging = ref(false)
const isPlaying = ref(false)
const playbackPosition = ref(0)
const volume = ref(100)
const exportFormat = ref('wav')

const selection = ref({
    start: 0,
    end: 0
})

let audioContext = null
let sourceNode = null
let gainNode = null
let animationFrame = null

// 编辑工具
const editTools = computed(() => [
    {
        id: 'trim',
        label: t('tools.audio-visual-editor.toolTrim'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' })
        ]),
        action: trimSelection,
        disabled: selection.value.start === selection.value.end
    },
    {
        id: 'delete',
        label: t('tools.audio-visual-editor.toolDelete'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' })
        ]),
        action: deleteSelection,
        disabled: selection.value.start === selection.value.end
    },
    {
        id: 'fadeIn',
        label: t('tools.audio-visual-editor.toolFadeIn'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
        ]),
        action: () => applyFade('in'),
        disabled: selection.value.start === selection.value.end
    },
    {
        id: 'fadeOut',
        label: t('tools.audio-visual-editor.toolFadeOut'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6' })
        ]),
        action: () => applyFade('out'),
        disabled: selection.value.start === selection.value.end
    },
    {
        id: 'copy',
        label: t('tools.audio-visual-editor.toolCopy'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' })
        ]),
        action: copySelection,
        disabled: selection.value.start === selection.value.end
    },
    {
        id: 'mute',
        label: t('tools.audio-visual-editor.toolMute'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' }),
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2' })
        ]),
        action: muteSelection,
        disabled: selection.value.start === selection.value.end
    },
    {
        id: 'normalize',
        label: t('tools.audio-visual-editor.toolNormalize'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
        ]),
        action: normalizeSelection,
        disabled: selection.value.start === selection.value.end
    },
    {
        id: 'reverse',
        label: t('tools.audio-visual-editor.toolReverse'),
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' })
        ]),
        action: reverseSelection,
        disabled: selection.value.start === selection.value.end
    }
])

// 处理文件上传
async function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    await loadAudioFile(file)
}

async function handleDrop(e) {
    isDragging.value = false
    const file = e.dataTransfer?.files?.[0]
    if (!file) return
    await loadAudioFile(file)
}

async function loadAudioFile(file) {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)()
        }
        
        const arrayBuffer = await file.arrayBuffer()
        const buffer = await audioContext.decodeAudioData(arrayBuffer)
        
        audioBuffer.value = buffer
        fileName.value = file.name
        selection.value = { start: 0, end: 0 }
        
        // 绘制波形
        setTimeout(() => drawWaveform(), 0)
    } catch (error) {
        console.error('Failed to load audio:', error)
        alert(t('tools.audio-visual-editor.loadError'))
    }
}

// 绘制波形
function drawWaveform() {
    const canvas = waveformCanvas.value
    if (!canvas || !audioBuffer.value) return
    
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    
    const width = rect.width
    const height = rect.height
    const buffer = audioBuffer.value
    const data = buffer.getChannelData(0)
    const step = Math.ceil(data.length / width)
    
    // 背景
    ctx.fillStyle = '#1a1a2e'
    ctx.fillRect(0, 0, width, height)
    
    // 中心线
    ctx.strokeStyle = '#333'
    ctx.beginPath()
    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.stroke()
    
    // 波形
    ctx.fillStyle = '#4f46e5'
    const halfHeight = height / 2
    
    for (let i = 0; i < width; i++) {
        let min = 1.0
        let max = -1.0
        
        for (let j = 0; j < step; j++) {
            const datum = data[(i * step) + j]
            if (datum < min) min = datum
            if (datum > max) max = datum
        }
        
        const y1 = (1 + min) * halfHeight
        const y2 = (1 + max) * halfHeight
        ctx.fillRect(i, y1, 1, y2 - y1)
    }
}

// 播放控制
function togglePlayback() {
    if (isPlaying.value) {
        pausePlayback()
    } else {
        startPlayback()
    }
}

function startPlayback(startTime = null) {
    if (!audioContext || !audioBuffer.value) return
    
    if (audioContext.state === 'suspended') {
        audioContext.resume()
    }
    
    sourceNode = audioContext.createBufferSource()
    sourceNode.buffer = audioBuffer.value
    
    gainNode = audioContext.createGain()
    gainNode.gain.value = volume.value / 100
    
    sourceNode.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    const startOffset = startTime !== null ? startTime : playbackPosition.value
    sourceNode.start(0, startOffset)
    
    isPlaying.value = true
    
    sourceNode.onended = () => {
        if (isPlaying.value) {
            playbackPosition.value = 0
            isPlaying.value = false
        }
    }
    
    // 更新播放位置
    const startRealTime = audioContext.currentTime - startOffset
    animationFrame = requestAnimationFrame(function updatePosition() {
        if (isPlaying.value) {
            playbackPosition.value = audioContext.currentTime - startRealTime
            if (playbackPosition.value >= audioBuffer.value.duration) {
                playbackPosition.value = 0
                isPlaying.value = false
            } else {
                animationFrame = requestAnimationFrame(updatePosition)
            }
        }
    })
}

function pausePlayback() {
    if (sourceNode) {
        sourceNode.stop()
        sourceNode = null
    }
    isPlaying.value = false
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
    }
}

function stopPlayback() {
    pausePlayback()
    playbackPosition.value = 0
}

function skipBackward() {
    const newPosition = Math.max(0, playbackPosition.value - 5)
    if (isPlaying.value) {
        pausePlayback()
        startPlayback(newPosition)
    } else {
        playbackPosition.value = newPosition
    }
}

function skipForward() {
    const newPosition = Math.min(audioBuffer.value.duration, playbackPosition.value + 5)
    if (isPlaying.value) {
        pausePlayback()
        startPlayback(newPosition)
    } else {
        playbackPosition.value = newPosition
    }
}

// 选区处理
function clearSelection() {
    selection.value = { start: 0, end: 0 }
}

// 编辑操作
function trimSelection() {
    if (selection.value.start === selection.value.end) return
    
    const startSample = Math.floor(selection.value.start * audioBuffer.value.sampleRate)
    const endSample = Math.floor(selection.value.end * audioBuffer.value.sampleRate)
    const newLength = endSample - startSample
    
    const newBuffer = audioContext.createBuffer(
        audioBuffer.value.numberOfChannels,
        newLength,
        audioBuffer.value.sampleRate
    )
    
    for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
        const oldData = audioBuffer.value.getChannelData(channel)
        const newData = newBuffer.getChannelData(channel)
        for (let i = 0; i < newLength; i++) {
            newData[i] = oldData[startSample + i]
        }
    }
    
    audioBuffer.value = newBuffer
    clearSelection()
    drawWaveform()
}

function deleteSelection() {
    if (selection.value.start === selection.value.end) return
    
    const startSample = Math.floor(selection.value.start * audioBuffer.value.sampleRate)
    const endSample = Math.floor(selection.value.end * audioBuffer.value.sampleRate)
    const deletedLength = endSample - startSample
    const newLength = audioBuffer.value.length - deletedLength
    
    const newBuffer = audioContext.createBuffer(
        audioBuffer.value.numberOfChannels,
        newLength,
        audioBuffer.value.sampleRate
    )
    
    for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
        const oldData = audioBuffer.value.getChannelData(channel)
        const newData = newBuffer.getChannelData(channel)
        
        // 复制删除点之前的数据
        for (let i = 0; i < startSample; i++) {
            newData[i] = oldData[i]
        }
        // 复制删除点之后的数据
        for (let i = endSample; i < audioBuffer.value.length; i++) {
            newData[i - deletedLength] = oldData[i]
        }
    }
    
    audioBuffer.value = newBuffer
    clearSelection()
    drawWaveform()
}

function applyFade(type) {
    if (selection.value.start === selection.value.end) return
    
    const startSample = Math.floor(selection.value.start * audioBuffer.value.sampleRate)
    const endSample = Math.floor(selection.value.end * audioBuffer.value.sampleRate)
    const fadeLength = endSample - startSample
    
    for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
        const data = audioBuffer.value.getChannelData(channel)
        
        for (let i = 0; i < fadeLength; i++) {
            const factor = type === 'in' ? i / fadeLength : 1 - i / fadeLength
            data[startSample + i] *= factor
        }
    }
    
    drawWaveform()
}

function copySelection() {
    if (selection.value.start === selection.value.end) return
    
    const startSample = Math.floor(selection.value.start * audioBuffer.value.sampleRate)
    const endSample = Math.floor(selection.value.end * audioBuffer.value.sampleRate)
    const copyLength = endSample - startSample
    
    const newBuffer = audioContext.createBuffer(
        audioBuffer.value.numberOfChannels,
        audioBuffer.value.length + copyLength,
        audioBuffer.value.sampleRate
    )
    
    for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
        const oldData = audioBuffer.value.getChannelData(channel)
        const newData = newBuffer.getChannelData(channel)
        
        // 复制选区之前的数据
        for (let i = 0; i < endSample; i++) {
            newData[i] = oldData[i]
        }
        // 插入选区数据
        for (let i = 0; i < copyLength; i++) {
            newData[endSample + i] = oldData[startSample + i]
        }
        // 复制剩余数据
        for (let i = endSample; i < audioBuffer.value.length; i++) {
            newData[i + copyLength] = oldData[i]
        }
    }
    
    audioBuffer.value = newBuffer
    drawWaveform()
}

function muteSelection() {
    if (selection.value.start === selection.value.end) return
    
    const startSample = Math.floor(selection.value.start * audioBuffer.value.sampleRate)
    const endSample = Math.floor(selection.value.end * audioBuffer.value.sampleRate)
    
    for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
        const data = audioBuffer.value.getChannelData(channel)
        for (let i = startSample; i < endSample; i++) {
            data[i] = 0
        }
    }
    
    drawWaveform()
}

function normalizeSelection() {
    if (selection.value.start === selection.value.end) return
    
    const startSample = Math.floor(selection.value.start * audioBuffer.value.sampleRate)
    const endSample = Math.floor(selection.value.end * audioBuffer.value.sampleRate)
    
    // 找到最大值
    let maxAmplitude = 0
    for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
        const data = audioBuffer.value.getChannelData(channel)
        for (let i = startSample; i < endSample; i++) {
            const abs = Math.abs(data[i])
            if (abs > maxAmplitude) maxAmplitude = abs
        }
    }
    
    if (maxAmplitude > 0) {
        const factor = 0.95 / maxAmplitude
        for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
            const data = audioBuffer.value.getChannelData(channel)
            for (let i = startSample; i < endSample; i++) {
                data[i] *= factor
            }
        }
    }
    
    drawWaveform()
}

function reverseSelection() {
    if (selection.value.start === selection.value.end) return
    
    const startSample = Math.floor(selection.value.start * audioBuffer.value.sampleRate)
    const endSample = Math.floor(selection.value.end * audioBuffer.value.sampleRate)
    
    for (let channel = 0; channel < audioBuffer.value.numberOfChannels; channel++) {
        const data = audioBuffer.value.getChannelData(channel)
        const slice = data.slice(startSample, endSample).reverse()
        for (let i = 0; i < slice.length; i++) {
            data[startSample + i] = slice[i]
        }
    }
    
    drawWaveform()
}

// 导出
function exportAudio(type) {
    if (!audioBuffer.value) return
    
    let buffer = audioBuffer.value
    let exportName = fileName.value.replace(/\.\w+$/, '')
    
    if (type === 'selection' && selection.value.start !== selection.value.end) {
        const startSample = Math.floor(selection.value.start * buffer.sampleRate)
        const endSample = Math.floor(selection.value.end * buffer.sampleRate)
        const newLength = endSample - startSample
        
        const newBuffer = audioContext.createBuffer(
            buffer.numberOfChannels,
            newLength,
            buffer.sampleRate
        )
        
        for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
            const oldData = buffer.getChannelData(channel)
            const newData = newBuffer.getChannelData(channel)
            for (let i = 0; i < newLength; i++) {
                newData[i] = oldData[startSample + i]
            }
        }
        
        buffer = newBuffer
        exportName += '_selection'
    }
    
    const wavBlob = audioBufferToWav(buffer)
    const url = URL.createObjectURL(wavBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${exportName}.${exportFormat.value}`
    a.click()
    URL.revokeObjectURL(url)
}

function audioBufferToWav(buffer) {
    const numChannels = buffer.numberOfChannels
    const sampleRate = buffer.sampleRate
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
    view.setUint32(24, sampleRate, true)
    view.setUint32(28, sampleRate * blockAlign, true)
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

// 工具函数
function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    const ms = Math.floor((seconds % 1) * 100)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`
}

function clearAudio() {
    pausePlayback()
    audioBuffer.value = null
    fileName.value = ''
    clearSelection()
    if (fileInput.value) fileInput.value.value = ''
}

// 波形点击选择 - 状态变量
let isWaveformDragging = false
let dragStartTime = 0

// 波形点击选择
function setupWaveformInteraction() {
    const canvas = waveformCanvas.value
    if (!canvas) return
    
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseUp)
}

function handleMouseDown(e) {
    if (!audioBuffer.value) return
    const canvas = waveformCanvas.value
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const time = (x / rect.width) * audioBuffer.value.duration
    
    isWaveformDragging = true
    dragStartTime = time
    selection.value = { start: time, end: time }
}

function handleMouseMove(e) {
    if (!isWaveformDragging || !audioBuffer.value) return
    const canvas = waveformCanvas.value
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const time = Math.max(0, Math.min(audioBuffer.value.duration, (x / rect.width) * audioBuffer.value.duration))
    
    selection.value = {
        start: Math.min(dragStartTime, time),
        end: Math.max(dragStartTime, time)
    }
}

function handleMouseUp() {
    isWaveformDragging = false
}

// 调整手柄相关
const resizingHandle = ref(null) // 'start' | 'end' | null

function startResizeHandle(handle, e) {
    e.preventDefault()
    e.stopPropagation()
    resizingHandle.value = handle
    
    document.addEventListener('mousemove', handleResizeMove)
    document.addEventListener('mouseup', handleResizeEnd)
}

function handleResizeMove(e) {
    if (!resizingHandle.value || !audioBuffer.value) return
    
    const container = waveformContainer.value
    if (!container) return
    
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const time = Math.max(0, Math.min(audioBuffer.value.duration, (x / rect.width) * audioBuffer.value.duration))
    
    if (resizingHandle.value === 'start') {
        // 确保起点不会超过终点
        selection.value = {
            start: Math.min(time, selection.value.end - 0.01),
            end: selection.value.end
        }
    } else if (resizingHandle.value === 'end') {
        // 确保终点不会小于起点
        selection.value = {
            start: selection.value.start,
            end: Math.max(time, selection.value.start + 0.01)
        }
    }
}

function handleResizeEnd() {
    resizingHandle.value = null
    document.removeEventListener('mousemove', handleResizeMove)
    document.removeEventListener('mouseup', handleResizeEnd)
}

// 监听音量变化
watch(volume, (newVolume) => {
    if (gainNode) {
        gainNode.gain.value = newVolume / 100
    }
})

// 监听 audioBuffer 变化，加载音频后设置事件监听
watch(audioBuffer, (newBuffer) => {
    if (newBuffer) {
        // 等待 DOM 更新后设置事件监听
        setTimeout(() => {
            setupWaveformInteraction()
        }, 0)
    }
})

// 监听窗口大小变化
function handleResize() {
    if (audioBuffer.value) {
        drawWaveform()
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    stopPlayback()
    // 清理调整手柄事件
    document.removeEventListener('mousemove', handleResizeMove)
    document.removeEventListener('mouseup', handleResizeEnd)
    if (audioContext) {
        audioContext.close()
    }
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>
