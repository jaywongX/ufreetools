<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.audio-to-text.inputTitle') }}</h2>

                <!-- 模式切换 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.audio-to-text.modeLabel') }}
                    </label>
                    <div class="flex gap-2">
                        <button 
                            @click="inputMode = 'microphone'"
                            :class="[
                                'flex-1 py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2',
                                inputMode === 'microphone' 
                                    ? 'bg-blue-600 text-white shadow-lg' 
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            ]">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                            </svg>
                            {{ $t('tools.audio-to-text.modeMicrophone') }}
                        </button>
                        <button 
                            @click="inputMode = 'file'"
                            :class="[
                                'flex-1 py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2',
                                inputMode === 'file' 
                                    ? 'bg-blue-600 text-white shadow-lg' 
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            ]">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                            </svg>
                            {{ $t('tools.audio-to-text.modeFile') }}
                        </button>
                    </div>
                </div>

                <!-- 麦克风模式 -->
                <div v-if="inputMode === 'microphone'" class="space-y-4">
                    <!-- 麦克风状态指示器 -->
                    <div class="flex flex-col items-center justify-center py-8">
                        <div 
                            :class="[
                                'w-24 h-24 rounded-full flex items-center justify-center transition-all',
                                isRecording 
                                    ? 'bg-red-500 animate-pulse shadow-lg shadow-red-500/50' 
                                    : 'bg-gray-200 dark:bg-gray-700'
                            ]">
                            <svg class="w-12 h-12" :class="isRecording ? 'text-white' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                            </svg>
                        </div>
                        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            {{ isRecording ? $t('tools.audio-to-text.recording') : $t('tools.audio-to-text.waitingForSpeech') }}
                        </p>
                    </div>

                    <!-- 录音按钮 -->
                    <button 
                        @click="toggleRecording"
                        :class="[
                            'w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2',
                            isRecording 
                                ? 'bg-red-600 hover:bg-red-700 text-white' 
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                        ]">
                        <svg v-if="isRecording" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <rect x="6" y="6" width="12" height="12"/>
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                        </svg>
                        {{ isRecording ? $t('tools.audio-to-text.stopRecording') : $t('tools.audio-to-text.startRecording') }}
                    </button>

                    <!-- 实时识别结果 -->
                    <div v-if="liveTranscript || interimTranscript" class="mt-4">
                        <h3 class="font-medium mb-2">{{ $t('tools.audio-to-text.liveTranscript') }}</h3>
                        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg min-h-[100px] max-h-[200px] overflow-y-auto">
                            <p class="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                                {{ liveTranscript }}<span class="text-gray-400">{{ interimTranscript }}</span>
                            </p>
                        </div>
                    </div>

                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        {{ $t('tools.audio-to-text.microphoneModeTip') }}
                    </p>
                </div>

                <!-- 文件模式 -->
                <div v-else class="space-y-4">
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
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <span class="text-gray-500">{{ $t('tools.audio-to-text.dragTip') }}</span>
                        <span class="text-xs text-gray-400 mt-2">{{ $t('tools.audio-to-text.supported') }}</span>
                    </div>

                    <!-- 预览区域 -->
                    <div v-if="originalAudios.length" class="mt-4">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-medium">{{ $t('tools.audio-to-text.preview') }} ({{ originalAudios.length }})</h3>
                            <button class="text-sm text-red-500 hover:text-red-600" @click="clearAudios">
                                {{ $t('tools.audio-to-text.clearAll') }}
                            </button>
                        </div>
                        <div class="space-y-3 max-h-[200px] overflow-y-auto">
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
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 文件模式播放提示 -->
                    <div class="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                        <div class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                            <p class="text-sm text-amber-700 dark:text-amber-300">
                                {{ $t('tools.audio-to-text.fileModePlayTip') }}
                            </p>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        {{ $t('tools.audio-to-text.fileModeTip') }}
                    </p>
                </div>

                <!-- 公共设置 -->
                <div class="mt-6 pt-4 border-t dark:border-gray-700">
                    <h3 class="font-semibold mb-3">{{ $t('tools.audio-to-text.settingsTitle') }}</h3>
                    
                    <!-- 识别语言 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.audio-to-text.languageLabel') }}
                        </label>
                        <select v-model="recognitionLanguage" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="auto">{{ $t('tools.audio-to-text.languageAuto') }}</option>
                            <option value="zh-CN">{{ $t('tools.audio-to-text.languageZh') }}</option>
                            <option value="en-US">{{ $t('tools.audio-to-text.languageEn') }}</option>
                            <option value="ja-JP">{{ $t('tools.audio-to-text.languageJa') }}</option>
                            <option value="ko-KR">{{ $t('tools.audio-to-text.languageKo') }}</option>
                            <option value="fr-FR">{{ $t('tools.audio-to-text.languageFr') }}</option>
                            <option value="de-DE">{{ $t('tools.audio-to-text.languageDe') }}</option>
                            <option value="es-ES">{{ $t('tools.audio-to-text.languageEs') }}</option>
                            <option value="ru-RU">{{ $t('tools.audio-to-text.languageRu') }}</option>
                            <option value="pt-BR">{{ $t('tools.audio-to-text.languagePt') }}</option>
                            <option value="it-IT">{{ $t('tools.audio-to-text.languageIt') }}</option>
                            <option value="ar-SA">{{ $t('tools.audio-to-text.languageAr') }}</option>
                            <option value="hi-IN">{{ $t('tools.audio-to-text.languageHi') }}</option>
                        </select>
                        <!-- 语言选择提示 -->
                        <div class="p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mt-2">
                            <div class="flex items-start gap-2">
                                <svg class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <p class="text-xs text-blue-600 dark:text-blue-400">
                                    {{ $t('tools.audio-to-text.languageTip') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 文件模式转换按钮 -->
                <button v-if="inputMode === 'file'" class="btn btn-primary w-full mt-6"
                    :disabled="!originalAudios.length || isConverting"
                    @click="convertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="!isConverting">
                        {{ originalAudios.length > 1 ? $t('tools.audio-to-text.convertBtn') + ` (${originalAudios.length})` : $t('tools.audio-to-text.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.audio-to-text.recognizing') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.audio-to-text.outputTitle') }}</h2>
                    <div v-if="convertedTexts.length" class="flex gap-2">
                        <button v-if="convertedTexts.length > 1" class="btn btn-success btn-sm" @click="downloadAll">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.audio-to-text.batchDownload') }}
                        </button>
                        <button class="btn btn-secondary btn-sm" @click="clearResults">
                            {{ $t('tools.audio-to-text.clearAll') }}
                        </button>
                    </div>
                </div>

                <div v-if="convertedTexts.length" class="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-1">
                    <div v-for="(text, idx) in convertedTexts" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 文本信息 -->
                        <div class="mb-3">
                            <h3 class="text-sm font-semibold mb-1">{{ text.name || `Result ${idx + 1}` }}</h3>
                            <div class="text-xs text-gray-600 dark:text-gray-400">
                                <span class="mr-3"><span class="font-medium">{{ $t('tools.audio-to-text.wordCount') }}:</span> {{ text.wordCount }}</span>
                                <span v-if="text.duration"><span class="font-medium">{{ $t('tools.audio-to-text.duration') }}:</span> {{ text.duration.toFixed(1) }}s</span>
                            </div>
                        </div>
                        
                        <!-- 文本预览 -->
                        <div class="mb-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg max-h-60 overflow-y-auto">
                            <p class="text-sm whitespace-pre-wrap">{{ text.content }}</p>
                        </div>
                        
                        <!-- 操作按钮 -->
                        <div class="flex gap-2">
                            <button class="btn btn-secondary btn-sm flex-1" @click="copyText(idx)">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                {{ $t('tools.audio-to-text.copyBtn') }}
                            </button>
                            <button class="btn btn-success btn-sm flex-1" @click="download(idx, 'txt')">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                TXT
                            </button>
                            <button class="btn btn-success btn-sm flex-1" @click="download(idx, 'srt')">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                SRT
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.audio-to-text.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AudioToTextArticle />
    </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AudioToTextArticle from './AudioToTextArticle.vue'

const { t } = useI18n()

// 模式
const inputMode = ref('microphone') // 'microphone' | 'file'

// 文件模式
const fileInput = ref(null)
const originalAudios = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })
const playingUrl = ref(null)

// 麦克风模式
const isRecording = ref(false)
const liveTranscript = ref('')
const interimTranscript = ref('')

// 输出结果
const convertedTexts = ref([])

// 设置
const recognitionLanguage = ref('auto')

// 音频元素用于播放
let audioElement = null

// Web Speech API
let recognition = null

// 初始化语音识别
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    
    if (!SpeechRecognition) {
        alert(t('tools.audio-to-text.noSpeechSupport'))
        return null
    }
    
    recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = recognitionLanguage.value === 'auto' ? '' : recognitionLanguage.value
    
    recognition.onresult = (event) => {
        let finalText = ''
        let interimText = ''
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript
            if (event.results[i].isFinal) {
                finalText += transcript
            } else {
                interimText += transcript
            }
        }
        
        if (finalText) {
            liveTranscript.value += finalText
        }
        interimTranscript.value = interimText
    }
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        if (event.error === 'not-allowed') {
            alert(t('tools.audio-to-text.microphonePermission'))
        }
        isRecording.value = false
    }
    
    recognition.onend = () => {
        // 如果还在录音状态，重新开始（连续识别）
        if (isRecording.value) {
            try {
                recognition.start()
            } catch (e) {
                console.log('Recognition restart failed:', e)
            }
        }
    }
    
    return recognition
}

// 切换录音状态
function toggleRecording() {
    if (isRecording.value) {
        // 停止录音
        if (recognition) {
            recognition.stop()
        }
        isRecording.value = false
        
        // 保存结果
        if (liveTranscript.value.trim()) {
            saveTranscript()
        }
    } else {
        // 开始录音
        if (!recognition) {
            initSpeechRecognition()
        }
        
        if (recognition) {
            // 设置语言
            recognition.lang = recognitionLanguage.value === 'auto' ? '' : recognitionLanguage.value
            
            liveTranscript.value = ''
            interimTranscript.value = ''
            
            try {
                recognition.start()
                isRecording.value = true
            } catch (e) {
                console.error('Failed to start recognition:', e)
            }
        }
    }
}

// 保存识别结果
function saveTranscript() {
    const content = liveTranscript.value.trim()
    if (!content) return
    
    const timestamp = new Date().toLocaleTimeString()
    const result = {
        name: `Recording ${timestamp}`,
        content: content,
        wordCount: content.length,
        duration: 0,
        srtContent: generateSrtFromText(content)
    }
    
    convertedTexts.value.unshift(result)
    
    // 清空当前识别结果
    liveTranscript.value = ''
    interimTranscript.value = ''
}

// 从文本生成SRT
function generateSrtFromText(text) {
    const segments = []
    const words = text.split('')
    const charsPerSegment = 15
    const secondsPerSegment = 2
    
    for (let i = 0; i < words.length; i += charsPerSegment) {
        const segmentText = words.slice(i, i + charsPerSegment).join('')
        const startTime = (i / charsPerSegment) * secondsPerSegment
        const endTime = ((i + charsPerSegment) / charsPerSegment) * secondsPerSegment
        
        segments.push({
            index: Math.floor(i / charsPerSegment) + 1,
            startTime,
            endTime,
            text: segmentText
        })
    }
    
    return segments.map(seg => {
        const formatTime = (seconds) => {
            const h = Math.floor(seconds / 3600)
            const m = Math.floor((seconds % 3600) / 60)
            const s = Math.floor(seconds % 60)
            const ms = Math.floor((seconds % 1) * 1000)
            return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms).padStart(3, '0')}`
        }
        
        return `${seg.index}\n${formatTime(seg.startTime)} --> ${formatTime(seg.endTime)}\n${seg.text}`
    }).join('\n\n')
}

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
    originalAudios.value = []
}

// 移除单个音频
function removeAudio(idx) {
    URL.revokeObjectURL(originalAudios.value[idx].url)
    originalAudios.value.splice(idx, 1)
}

// 清除结果
function clearResults() {
    convertedTexts.value = []
}

// 音频文件识别（使用Web Speech API的技巧）
async function recognizeAudioFile(audioData) {
    return new Promise((resolve, reject) => {
        // 初始化语音识别
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        
        if (!SpeechRecognition) {
            reject(new Error(t('tools.audio-to-text.noSpeechSupport')))
            return
        }
        
        const localRecognition = new SpeechRecognition()
        localRecognition.continuous = true
        localRecognition.interimResults = false
        localRecognition.lang = recognitionLanguage.value === 'auto' ? '' : recognitionLanguage.value
        
        let recognizedText = ''
        let startTime = Date.now()
        
        localRecognition.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    recognizedText += event.results[i][0].transcript
                }
            }
        }
        
        localRecognition.onerror = (event) => {
            console.error('Recognition error:', event.error)
        }
        
        localRecognition.onend = () => {
            const duration = (Date.now() - startTime) / 1000
            resolve({
                content: recognizedText,
                srtContent: generateSrtFromText(recognizedText),
                name: audioData.name.replace(/\.\w+$/, ''),
                wordCount: recognizedText.length,
                duration: duration
            })
        }
        
        // 创建音频上下文并处理音频文件
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        
        fetch(audioData.url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                // 创建音频源
                const audioBlobUrl = audioData.url
                const audioEl = new Audio(audioBlobUrl)
                audioEl.crossOrigin = 'anonymous'
                
                audioEl.oncanplaythrough = async () => {
                    try {
                        // 创建MediaStream目标
                        const dest = audioCtx.createMediaStreamDestination()
                        const sourceNode = audioCtx.createMediaElementSource(audioEl)
                        sourceNode.connect(dest)
                        sourceNode.connect(audioCtx.destination)
                        
                        // 使用虚拟音频流作为输入
                        // 注意：这是一个技巧，某些浏览器可能不支持
                        // 对于不支持的浏览器，我们使用模拟结果
                        
                        // 开始识别
                        localRecognition.start()
                        
                        // 播放音频
                        await audioEl.play()
                        
                        // 音频播放结束后停止识别
                        audioEl.onended = () => {
                            setTimeout(() => {
                                localRecognition.stop()
                                audioCtx.close()
                            }, 500)
                        }
                        
                    } catch (err) {
                        console.log('Audio stream trick failed, using fallback:', err)
                        audioCtx.close()
                        
                        // 如果技巧失败，使用模拟结果
                        // 实际上Web Speech API目前不支持直接从音频文件识别
                        // 这里我们显示一个友好的提示
                        resolve({
                            content: `[${t('tools.audio-to-text.fileModeTip')}]\n\n注意：当前浏览器可能不支持从音频文件直接识别。\n建议使用麦克风实时识别功能以获得最佳效果。`,
                            srtContent: '',
                            name: audioData.name.replace(/\.\w+$/, ''),
                            wordCount: 0,
                            duration: audioBuffer.duration
                        })
                    }
                }
                
                audioEl.onerror = () => {
                    audioCtx.close()
                    reject(new Error('Failed to load audio'))
                }
            })
            .catch(error => {
                audioCtx.close()
                reject(error)
            })
    })
}

// 转换所有音频
async function convertAll() {
    if (!originalAudios.value.length) return
    
    isConverting.value = true
    convertingProgress.value = { current: 0, total: originalAudios.value.length }
    
    try {
        for (let i = 0; i < originalAudios.value.length; i++) {
            convertingProgress.value.current = i + 1
            const result = await recognizeAudioFile(originalAudios.value[i])
            convertedTexts.value.push(result)
        }
    } catch (error) {
        console.error('Conversion failed:', error)
        alert(t('tools.audio-to-text.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 复制文本
async function copyText(idx) {
    const text = convertedTexts.value[idx]
    if (!text) return
    
    try {
        await navigator.clipboard.writeText(text.content)
        alert(t('tools.audio-to-text.copied'))
    } catch (err) {
        console.error('Copy failed:', err)
    }
}

// 下载单个文本
function download(idx, format) {
    const text = convertedTexts.value[idx]
    if (!text) return
    
    let content, filename, mimeType
    
    if (format === 'srt') {
        content = text.srtContent || generateSrtFromText(text.content)
        filename = text.name + '.srt'
        mimeType = 'text/plain'
    } else {
        content = text.content
        filename = text.name + '.txt'
        mimeType = 'text/plain'
    }
    
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

// 批量下载
async function downloadAll() {
    if (!convertedTexts.value.length) return
    
    const zip = new JSZip()
    
    for (let i = 0; i < convertedTexts.value.length; i++) {
        const text = convertedTexts.value[i]
        zip.file(text.name + '.txt', text.content)
        if (text.srtContent) {
            zip.file(text.name + '.srt', text.srtContent)
        }
    }
    
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'audio_transcripts.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 监听语言变化
watch(recognitionLanguage, (newLang) => {
    if (recognition) {
        recognition.lang = newLang === 'auto' ? '' : newLang
    }
})

// 清理
onUnmounted(() => {
    // 停止录音
    if (recognition) {
        recognition.stop()
    }
    
    // 清理音频
    clearAudios()
    if (audioElement) {
        audioElement.pause()
        audioElement = null
    }
    
    // 清理音频上下文
    if (audioContext) {
        audioContext.close()
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

/* 录音动画 */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
}

.animate-pulse {
    animation: pulse 1.5s ease-in-out infinite;
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
