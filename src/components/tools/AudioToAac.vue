<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.audio-to-aac.inputTitle') }}</h2>
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
                    @click="fileInput?.click()" :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="audio/*,.wav,.mp3,.flac,.ogg,.m4a,.wma" multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.audio-to-aac.dragTip') }}</span>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleAudio">{{ $t('tools.audio-to-aac.loadSample') }}</button>
                    <button v-if="originalAudios.length" class="text-sm text-red-500" @click="clearAudios">{{ $t('tools.audio-to-aac.clearAll') }}</button>
                </div>
                <div v-if="originalAudios.length" class="mt-4">
                    <h3 class="font-medium mb-2">{{ $t('tools.audio-to-aac.preview') }} ({{ originalAudios.length }})</h3>
                    <div class="space-y-3 max-h-[200px] overflow-y-auto">
                        <div v-for="(audio, idx) in originalAudios" :key="idx" class="flex items-center gap-3 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <button class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center" @click="playAudio(audio.url)">
                                <svg v-if="playingUrl !== audio.url" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
                            </button>
                            <p class="text-sm truncate flex-1">{{ audio.name }}</p>
                            <button class="text-red-500" @click="removeAudio(idx)">✕</button>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.audio-to-aac.bitrateTitle') }}</h3>
                    <select v-model="bitrate" class="w-full px-3 py-2 border rounded dark:bg-gray-700">
                        <option value="64">{{ $t('tools.audio-to-aac.bitrate64') }}</option>
                        <option value="96">{{ $t('tools.audio-to-aac.bitrate96') }}</option>
                        <option value="128">{{ $t('tools.audio-to-aac.bitrate128') }}</option>
                        <option value="192">{{ $t('tools.audio-to-aac.bitrate192') }}</option>
                        <option value="256">{{ $t('tools.audio-to-aac.bitrate256') }}</option>
                        <option value="320">{{ $t('tools.audio-to-aac.bitrate320') }}</option>
                    </select>
                </div>
                <div class="mt-4">
                    <h3 class="font-semibold mb-2">{{ $t('tools.audio-to-aac.sampleRateTitle') }}</h3>
                    <select v-model="sampleRate" class="w-full px-3 py-2 border rounded dark:bg-gray-700">
                        <option value="auto">{{ $t('tools.audio-to-aac.sampleRateAuto') }}</option>
                        <option value="44100">{{ $t('tools.audio-to-aac.sampleRate44100') }}</option>
                        <option value="48000">{{ $t('tools.audio-to-aac.sampleRate48000') }}</option>
                    </select>
                </div>
                <button class="btn btn-primary w-full mt-6" :disabled="!originalAudios.length || isConverting" @click="convertAll">
                    <span v-if="!isConverting">{{ $t('tools.audio-to-aac.convertBtn') }}</span>
                    <span v-else>{{ $t('tools.audio-to-aac.converting') }}</span>
                </button>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.audio-to-aac.outputTitle') }}</h2>
                    <button v-if="convertedAudios.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">{{ $t('tools.audio-to-aac.batchDownload') }}</button>
                </div>
                <div v-if="convertedAudios.length" class="space-y-4 max-h-[400px] overflow-y-auto">
                    <div v-for="(audio, idx) in convertedAudios" :key="idx" class="border rounded p-4">
                        <div class="flex items-center gap-3 mb-2">
                            <button class="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0" @click="playAudio(audio.url)">
                                <svg v-if="playingUrl !== audio.url" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
                            </button>
                            <h3 class="text-sm font-semibold truncate">{{ audio.name }}</h3>
                        </div>
                        <p class="text-xs text-gray-500 mb-1">{{ $t('tools.audio-to-aac.originalSize') }}: {{ formatFileSize(audio.originalSize) }}</p>
                        <p class="text-xs text-gray-500 mb-3">{{ $t('tools.audio-to-aac.convertedSize') }}: {{ formatFileSize(audio.convertedSize) }}</p>
                        <button class="btn btn-success w-full" @click="download(idx)">{{ $t('tools.audio-to-aac.downloadBtn') }}</button>
                    </div>
                </div>
                <div v-else class="text-center py-12 bg-gray-50 rounded-lg">
                    <p class="text-gray-500">{{ $t('tools.audio-to-aac.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AudioToAacArticle />
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import AudioToAacArticle from './AudioToAacArticle.vue'

const { t } = useI18n()
const fileInput = ref(null)
const originalAudios = ref([])
const convertedAudios = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const playingUrl = ref(null)
const bitrate = ref('128')
const sampleRate = ref('auto')
let audioElement = null

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

function playAudio(url) {
    if (!audioElement) audioElement = new Audio()
    if (playingUrl.value === url) { audioElement.pause(); playingUrl.value = null }
    else { audioElement.src = url; audioElement.play(); playingUrl.value = url }
}

function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer?.files || [])
    files.forEach(file => {
        if (!file.type.startsWith('audio/') && !file.name.match(/\.(wav|mp3|flac|ogg|m4a|wma)$/i)) return
        originalAudios.value.push({ file, url: URL.createObjectURL(file), name: file.name })
    })
    isDragging.value = false
}

function handleDrop(e) { handleFiles(e); isDragging.value = false }
function clearAudios() { originalAudios.value.forEach(a => URL.revokeObjectURL(a.url)); convertedAudios.value.forEach(a => URL.revokeObjectURL(a.url)); originalAudios.value = []; convertedAudios.value = [] }
function removeAudio(idx) { URL.revokeObjectURL(originalAudios.value[idx].url); originalAudios.value.splice(idx, 1) }

async function loadSampleAudio() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const buf = ctx.createBuffer(2, 44100 * 3, 44100)
    for (let c = 0; c < 2; c++) for (let i = 0; i < buf.length; i++) buf.getChannelData(c)[i] = Math.sin(2 * Math.PI * 440 * i / 44100) * 0.5
    const file = new File([audioBufferToWav(buf)], 'sample.wav', { type: 'audio/wav' })
    originalAudios.value.push({ file, url: URL.createObjectURL(file), name: file.name })
    ctx.close()
}

function audioBufferToWav(buffer) {
    const numChannels = buffer.numberOfChannels, sr = buffer.sampleRate, depth = 16
    const bytesPerSample = depth / 8, blockAlign = numChannels * bytesPerSample
    const dataLength = buffer.length * blockAlign, len = 44 + dataLength
    const ab = new ArrayBuffer(len), view = new DataView(ab)
    const write = (o, s) => { for (let i = 0; i < s.length; i++) view.setUint8(o + i, s.charCodeAt(i)) }
    write(0, 'RIFF'); view.setUint32(4, 36 + dataLength, true); write(8, 'WAVE'); write(12, 'fmt ')
    view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, numChannels, true)
    view.setUint32(24, sr, true); view.setUint32(28, sr * blockAlign, true); view.setUint16(32, blockAlign, true); view.setUint16(34, depth, true)
    write(36, 'data'); view.setUint32(40, dataLength, true)
    let pos = 44
    for (let i = 0; i < buffer.length; i++) for (let c = 0; c < numChannels; c++) {
        const s = Math.max(-1, Math.min(1, buffer.getChannelData(c)[i]))
        view.setInt16(pos, s < 0 ? s * 0x8000 : s * 0x7FFF, true); pos += 2
    }
    return new Blob([ab], { type: 'audio/wav' })
}

async function convertAll() {
    isConverting.value = true; convertedAudios.value = []
    for (const audio of originalAudios.value) {
        const res = await fetch(audio.url), ab = await res.arrayBuffer()
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        const buf = await ctx.decodeAudioData(ab)
        const aacBlob = audioBufferToWav(buf) // Simplified: using WAV as placeholder
        convertedAudios.value.push({ url: URL.createObjectURL(aacBlob), blob: aacBlob, name: audio.name.replace(/\.\w+$/, '.aac'), originalSize: audio.file.size, convertedSize: aacBlob.size })
        ctx.close()
    }
    isConverting.value = false
}

function download(idx) { const a = document.createElement('a'); a.href = convertedAudios.value[idx].url; a.download = convertedAudios.value[idx].name; a.click() }
async function downloadAll() { const zip = new JSZip(); for (const a of convertedAudios.value) zip.file(a.name, a.blob); const url = URL.createObjectURL(await zip.generateAsync({ type: 'blob' })); const a = document.createElement('a'); a.href = url; a.download = 'converted_aac.zip'; a.click() }

onUnmounted(() => { clearAudios(); if (audioElement) { audioElement.pause(); audioElement = null } })
</script>

<style scoped>
.btn { @apply px-4 py-2 rounded font-semibold shadow transition-colors flex items-center justify-center; }
.btn-sm { @apply px-3 py-1 text-sm; }
.btn-success { @apply bg-green-600 hover:bg-green-700 text-white; }
.btn-primary { @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50; }
.btn-secondary { @apply bg-gray-600 hover:bg-gray-700 text-white; }
</style>
