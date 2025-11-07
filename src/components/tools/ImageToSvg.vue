<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入与设置 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" @paste.prevent="handlePaste">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.image-to-svg.inputTitle') }}</h2>

                <!-- 上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="image/png,image/jpeg,image/bmp,image/webp,image/gif" multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.image-to-svg.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.image-to-svg.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-3">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.image-to-svg.loadSample') }}
                    </button>
                    <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">{{ $t('tools.image-to-svg.clearAll') }}</button>
                </div>

                <!-- 设置 -->
                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">{{ $t('tools.image-to-svg.colorsLabel') }}: {{ options.numberofcolors }}</label>
                        <input type="range" min="2" max="32" step="1" v-model.number="options.numberofcolors" @input="debouncedReconverAll" class="w-full" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">{{ $t('tools.image-to-svg.pathomitLabel') }}: {{ options.pathomit }}</label>
                        <input type="range" min="0" max="16" step="0.5" v-model.number="options.pathomit" @input="debouncedReconverAll" class="w-full" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">{{ $t('tools.image-to-svg.ltresLabel') }}: {{ options.ltres }}</label>
                        <input type="range" min="0.1" max="10" step="0.1" v-model.number="options.ltres" @input="debouncedReconverAll" class="w-full" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">{{ $t('tools.image-to-svg.qtresLabel') }}: {{ options.qtres }}</label>
                        <input type="range" min="0.1" max="10" step="0.1" v-model.number="options.qtres" @input="debouncedReconverAll" class="w-full" />
                    </div>
                    <div class="md:col-span-2">
                        <label class="inline-flex items-center space-x-2">
                            <input type="checkbox" v-model="linefilter" @change="debouncedReconverAll" />
                            <span>{{ $t('tools.image-to-svg.linefilterLabel') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!originalImages.length" @click="convertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ $t('tools.image-to-svg.convertBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.image-to-svg.outputTitle') }}</h2>
                    <button v-if="results.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.image-to-svg.batchDownload') }}
                    </button>
                </div>

                <div v-if="results.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(item, idx) in results" :key="idx" class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 对比视图 -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <h3 class="font-medium mb-2">{{ $t('tools.image-to-svg.original') }}</h3>
                                <img :src="item.originalUrl" class="w-full h-auto object-contain border rounded" :alt="$t('tools.image-to-svg.originalAlt', { index: idx + 1 })" />
                            </div>
                            <div>
                                <h3 class="font-medium mb-2">{{ $t('tools.image-to-svg.vectorized') }}</h3>
                                <div class="relative border rounded overflow-hidden bg-white dark:bg-gray-900">
                                    <div v-html="item.svgString" class="w-full h-auto"></div>
                                </div>
                            </div>
                        </div>

                        <!-- 导出选项 -->
                        <div class="mt-4 space-y-4">
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.image-to-svg.exportFormat') }}</label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="item.exportType" value="svg" class="form-radio" />
                                        <span>SVG</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="item.exportType" value="svgz" class="form-radio" />
                                        <span>SVGZ</span>
                                    </label>
                                </div>
                            </div>

                            <div class="flex justify-between items-center mb-2">
                                <button class="btn btn-primary btn-sm" @click="download(idx)">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ $t('tools.image-to-svg.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.image-to-svg.noOutput') }}</p>
                </div>
            </div>
        </div>

        <ImageToSvgArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import ImageToSvgArticle from './ImageToSvgArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const isDragging = ref(false)
const originalImages = ref([]) // {file,url,name}
const results = reactive([]) // {svgString, exportType: 'svg'|'svgz', name, originalUrl}

// ImageTracer 选项（详见 https://github.com/jankovicsandras/imagetracerjs ）
const options = reactive({
    numberofcolors: 8,
    ltres: 1,
    qtres: 1,
    pathomit: 0,
    colorsampling: 2,
    strokewidth: 1,
    roundcoords: 1
})
const linefilter = ref(true)

// CDN 动态加载
let imageTracerLoaded = false
async function ensureImageTracer() {
    if (imageTracerLoaded) return
    if (window.ImageTracer) {
        imageTracerLoaded = true
        return
    }
    await loadScript('https://cdn.jsdelivr.net/npm/imagetracerjs@1.2.6/imagetracer_v1.2.6.js')
    imageTracerLoaded = true
}

async function ensurePako() {
    if (window.pako) return
    await loadScript('https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js')
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script')
        s.src = src
        s.async = true
        s.onload = resolve
        s.onerror = reject
        document.head.appendChild(s)
    })
}

// 选择/拖拽/粘贴
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    addFiles(files)
    isDragging.value = false
}

function handleDrop(e) {
    handleFiles(e)
}

function handlePaste(e) {
    const items = e.clipboardData?.items
    if (!items) return
    const files = []
    for (const it of items) {
        if (it.kind === 'file') {
            const f = it.getAsFile()
            if (f) files.push(f)
        }
    }
    addFiles(files)
}

function addFiles(files) {
    files.forEach(file => {
        if (!/^image\/(png|jpeg|bmp|webp|gif)$/.test(file.type)) return
        const url = URL.createObjectURL(file)
        originalImages.value.push({ file, url, name: file.name })
    })
}

function clearImages() {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
    originalImages.value = []
    results.splice(0)
}

// 示例
const sampleImages = [
    { name: 'favicon.png', url: '/favicon.png', fallbackUrl: 'https://www.ufreetools.com/favicon.png' }
]

async function loadSampleImages() {
    clearImages()
    for (const sample of sampleImages) {
        try {
            let response
            try {
                response = await fetch(sample.url)
                if (!response.ok) throw new Error('Local image not found')
            } catch (_) {
                response = await fetch(sample.fallbackUrl)
            }
            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            originalImages.value.push({ file: new File([blob], sample.name, { type: blob.type || 'image/png' }), url, name: sample.name })
        } catch (err) {
            console.error('Failed to load sample image:', err)
        }
    }
    await nextTick()
    convertAll()
}

// 转换
async function convertAll() {
    await ensureImageTracer()
    results.splice(0)
    for (let i = 0; i < originalImages.value.length; i++) {
        const img = originalImages.value[i]
        const svgString = await rasterToSvg(img.url)
        results.push({ svgString, exportType: 'svg', name: img.name.replace(/\.(\w+)$/, '_vector.svg'), originalUrl: img.url })
    }
}

// 重新转换（用于参数变更）
const debouncedReconverAll = debounce(() => {
    if (!originalImages.value.length) return
    convertAll()
}, 300)

function debounce(fn, wait) {
    let t
    return (...args) => {
        clearTimeout(t)
        t = setTimeout(() => fn(...args), wait)
    }
}

function rasterToSvg(url) {
    return new Promise(async (resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = () => {
            try {
                const cnv = document.createElement('canvas')
                cnv.width = img.naturalWidth || img.width
                cnv.height = img.naturalHeight || img.height
                const ctx = cnv.getContext('2d')
                ctx.drawImage(img, 0, 0)

                // 对透明背景进行预处理（保持透明像素为白或保留透明）
                // ImageTracer 可以处理透明度，将透明像素视为白色近似
                const svg = window.ImageTracer.imagedataToSVG(ctx.getImageData(0, 0, cnv.width, cnv.height), {
                    ...options,
                    linefilter: linefilter.value ? true : false
                })
                resolve(svg)
            } catch (err) {
                reject(err)
            }
        }
        img.onerror = reject
        img.src = url
        if (img.complete) img.onload()
    })
}

// 下载单个
async function download(idx) {
    const item = results[idx]
    if (item.exportType === 'svg') {
        const blob = new Blob([item.svgString], { type: 'image/svg+xml;charset=utf-8' })
        triggerDownload(blob, item.name)
    } else {
        await ensurePako()
        const svgz = window.pako.gzip(item.svgString)
        const blob = new Blob([svgz], { type: 'application/gzip' })
        const name = item.name.replace(/\.svg$/, '.svgz')
        triggerDownload(blob, name)
    }
}

// 批量下载（ZIP）
async function downloadAll() {
    await ensurePako()
    const zip = new JSZip()
    for (let i = 0; i < results.length; i++) {
        const item = results[i]
        if (item.exportType === 'svg') {
            zip.file(item.name, item.svgString)
        } else {
            const svgz = window.pako.gzip(item.svgString)
            const name = item.name.replace(/\.svg$/, '.svgz')
            zip.file(name, svgz)
        }
    }
    const content = await zip.generateAsync({ type: 'blob' })
    triggerDownload(content, 'vectorized_svgs.zip')
}

function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

onMounted(() => {
    // 可选：自动加载示例
    loadSampleImages()
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

</style>

