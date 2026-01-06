<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">
                    {{ $t('tools.image-to-ico.inputTitle') }}
                </h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop"
                    @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false"
                    @click="fileInput?.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept="image/png,image/jpeg,image/webp"
                        multiple
                        @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">
                        {{ $t('tools.image-to-ico.dragTip') }}
                    </span>
                    <span class="text-xs text-gray-400 mt-2">
                        {{ $t('tools.image-to-ico.supported') }}
                    </span>
                </div>

                <!-- 示例图片按钮 和 清理按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.image-to-ico.loadSample') }}
                    </button>

                    <button v-if="originalImages.length"
                        class="text-sm text-red-500 hover:text-red-600"
                        @click="clearAllImages">
                        {{ $t('tools.image-to-ico.clearAllImages') }}
                    </button>
                </div>

                <!-- 预览区域（支持多图） -->
                <div v-if="originalImages.length" class="mt-4 space-y-2">
                    <div class="flex items-center justify-between">
                        <h3 class="font-medium">
                            {{ $t('tools.image-to-ico.preview') }}
                            ({{ originalImages.length }})
                        </h3>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                            {{ $t('tools.image-to-ico.previewCount') }}：{{ originalImages.length }}
                        </p>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in originalImages" :key="idx"
                            class="relative rounded-lg overflow-hidden shadow-sm border bg-gray-50 dark:bg-gray-900">
                            <img :src="img.url"
                                class="w-full h-24 object-contain bg-white dark:bg-gray-900"
                                :alt="`${$t('tools.image-to-ico.originalImage')} ${idx + 1}`" />
                        </div>
                    </div>
                </div>

                <!-- 尺寸配置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">
                        {{ $t('tools.image-to-ico.sizeConfigTitle') }}
                    </h3>

                    <div class="mb-4">
                        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.image-to-ico.standardSizesLabel') }}
                        </p>
                        <div class="space-y-2 text-sm">
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="use16"
                                    class="form-checkbox">
                                <span>{{ $t('tools.image-to-ico.size16') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="use32"
                                    class="form-checkbox">
                                <span>{{ $t('tools.image-to-ico.size32') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="use48"
                                    class="form-checkbox">
                                <span>{{ $t('tools.image-to-ico.size48') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="use64"
                                    class="form-checkbox">
                                <span>{{ $t('tools.image-to-ico.size64') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="use128"
                                    class="form-checkbox">
                                <span>{{ $t('tools.image-to-ico.size128') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="use256"
                                    class="form-checkbox">
                                <span>{{ $t('tools.image-to-ico.size256') }}</span>
                            </label>
                        </div>
                    </div>

                    <div class="mb-4">
                        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.image-to-ico.presetTitle') }}
                        </p>
                        <div class="space-y-2 text-sm">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="preset" value="none"
                                    class="form-radio" @change="applyPreset">
                                <span>{{ $t('tools.image-to-ico.presetNone') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="preset" value="windows"
                                    class="form-radio" @change="applyPreset">
                                <span>{{ $t('tools.image-to-ico.presetWindows') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="preset" value="favicon"
                                    class="form-radio" @change="applyPreset">
                                <span>{{ $t('tools.image-to-ico.presetFavicon') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="preset" value="dev"
                                    class="form-radio" @change="applyPreset">
                                <span>{{ $t('tools.image-to-ico.presetDev') }}</span>
                            </label>
                        </div>
                    </div>

                    <div class="text-xs text-gray-500 dark:text-gray-400">
                        <p class="font-semibold mb-1">
                            {{ $t('tools.image-to-ico.currentSizesLabel') }}
                        </p>
                        <p>
                            {{ $t('tools.image-to-ico.currentSizesValue') }}
                        </p>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-6"
                    :disabled="!originalImages.length || isGenerating"
                    @click="generateIco">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="!isGenerating">
                        {{ originalImages.length === 1
                            ? $t('tools.image-to-ico.generateBtn')
                            : $t('tools.image-to-ico.generateAllBtn') }}
                    </span>
                    <span v-else>
                        {{ originalImages.length === 1
                            ? $t('tools.image-to-ico.generating')
                            : $t('tools.image-to-ico.generatingAll') }}
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">
                        {{ $t('tools.image-to-ico.tipsTitle') }}
                    </h4>
                    <p>{{ $t('tools.image-to-ico.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">
                        {{ $t('tools.image-to-ico.outputTitle') }}
                    </h2>
                    <button v-if="icoResults.length > 1"
                        class="btn btn-primary btn-sm"
                        @click="downloadAllIco">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.image-to-ico.batchDownloadIcoBtn') }}
                    </button>
                </div>

                <div v-if="icoResults.length" class="space-y-6 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                    <div v-for="(ico, idx) in icoResults" :key="idx"
                        class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                        <!-- ICO 预览 -->
                        <div class="flex items-center space-x-6 mb-4">
                            <div
                                class="w-20 h-20 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-inner">
                                <img :src="ico.url"
                                    class="w-12 h-12 object-contain"
                                    :alt="`${$t('tools.image-to-ico.icoPreview')} ${idx + 1}`" />
                            </div>
                            <div class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                <p class="font-semibold break-all">
                                    {{ ico.name }}
                                </p>
                                <p>
                                    <strong>ICO:</strong>
                                    {{ $t('tools.image-to-ico.seoNote') }}
                                </p>
                                <p>
                                    <strong>Sizes:</strong>
                                    {{ ico.sizes }}
                                </p>
                                <p>
                                    <strong>Type:</strong>
                                    image/x-icon
                                </p>
                            </div>
                        </div>

                        <!-- 尺寸下载按钮 -->
                        <div class="mb-3">
                            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {{ $t('tools.image-to-ico.downloadSpecificSize') }}
                            </p>
                            <div class="grid grid-cols-3 gap-2">
                                <button v-for="size in getSizesArray(ico.sizes)" :key="size"
                                    class="btn btn-outline text-xs py-1 px-2"
                                    @click="downloadSpecificSize(idx, size)">
                                    {{ size }}×{{ size }}
                                </button>
                            </div>
                        </div>
                        
                        <!-- 单个下载按钮 -->
                        <div class="flex gap-2">
                            <button class="btn btn-success flex-1"
                                @click="downloadSingleIco(idx)">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.image-to-ico.downloadIcoBtn') }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">
                        {{ $t('tools.image-to-ico.noOutput') }}
                    </p>
                </div>
            </div>

        </div>
        <ImageToIcoArticle />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import ImageToIcoArticle from './ImageToIcoArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalImages = ref([]) // { file, url, name }
const icoResults = ref([]) // { url, name, sizes, sizeBuffers }
const isDragging = ref(false)
const isGenerating = ref(false)
const lastSelectedSizes = ref([]) // 记录最近一次生成时勾选的尺寸

// 尺寸配置状态
const use16 = ref(true)
const use32 = ref(true)
const use48 = ref(true)
const use64 = ref(true)
const use128 = ref(true)
const use256 = ref(true)
const preset = ref('none')

function applyPreset() {
    if (preset.value === 'windows') {
        use16.value = true
        use32.value = true
        use48.value = true
        use64.value = true
        use128.value = true
        use256.value = true
    } else if (preset.value === 'favicon') {
        use16.value = true
        use32.value = true
        use48.value = true
        use64.value = false
        use128.value = false
        use256.value = false
    } else if (preset.value === 'dev') {
        use16.value = false
        use32.value = true
        use48.value = false
        use64.value = true
        use128.value = false
        use256.value = true
    }
}

function handleFiles(e) {
    const files = e.target.files || e.dataTransfer?.files
    if (!files || !files.length) return

    const list = Array.from(files)
    list.forEach(file => {
        if (!/^image\/(png|jpeg|jpg|webp)$/i.test(file.type)) return
        const url = URL.createObjectURL(file)
        originalImages.value.push({
            file,
            url,
            name: file.name.replace(/\.(\w+)$/, '')
        })
    })

    isDragging.value = false
}

function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

function clearAllImages() {
    originalImages.value.forEach(img => {
        URL.revokeObjectURL(img.url)
    })
    icoResults.value.forEach(ico => {
        URL.revokeObjectURL(ico.url)
    })
    originalImages.value = []
    icoResults.value = []
}

async function loadSampleImages() {
    try {
        clearAllImages()
        // 与其它工具保持一致：先尝试本地，再回退到线上
        let response
        try {
            response = await fetch('/favicon.png')
            if (!response.ok) throw new Error('local not found')
        } catch (e) {
            response = await fetch('https://www.ufreetools.com/favicon.png')
        }
        const blob = await response.blob()
        const file = new File([blob], 'sample-favicon.png', { type: blob.type || 'image/png' })
        const url = URL.createObjectURL(blob)
        originalImages.value.push({
            file,
            url,
            name: 'sample-favicon'
        })
    } catch (error) {
        console.error('Failed to load sample image', error)
    }
}

function getSelectedSizes() {
    const sizes = []
    if (use16.value) sizes.push(16)
    if (use32.value) sizes.push(32)
    if (use48.value) sizes.push(48)
    if (use64.value) sizes.push(64)
    if (use128.value) sizes.push(128)
    if (use256.value) sizes.push(256)
    return sizes
}

async function generateIco() {
    if (!originalImages.value.length) return
    const sizes = getSelectedSizes()
    if (!sizes.length) return

    // 记录当前选中的尺寸，供下载 ZIP 时使用
    lastSelectedSizes.value = sizes.slice()

    isGenerating.value = true

    // 清理旧的 ICO 结果
    icoResults.value.forEach(ico => {
        URL.revokeObjectURL(ico.url)
    })
    icoResults.value = []

    try {
        for (let i = 0; i < originalImages.value.length; i += 1) {
            const imgItem = originalImages.value[i]
            const image = await loadImageFromFile(imgItem.file)
            const buffers = [] // { size, buffer }，用于后续单尺寸 ICO 生成

            for (let j = 0; j < sizes.length; j += 1) {
                const size = sizes[j]
                const buffer = await renderSizeToBmpBuffer(image, size)
                buffers.push({ size, buffer })
            }

            // 多尺寸 ICO 仅用于预览，实际下载时会按尺寸拆分为多个 ICO 放入压缩包
            const icoBlobForPreview = createIcoFromBmpBuffers(buffers)
            const icoUrl = URL.createObjectURL(icoBlobForPreview)
            icoResults.value.push({
                url: icoUrl,
                name: `${imgItem.name || 'icon'}-multi-size.ico`,
                sizes: sizes.join(', '),
                sizeBuffers: buffers
            })
        }
    } catch (error) {
        console.error('generate ico error', error)
        alert(t('tools.image-to-ico.generateError'))
    } finally {
        isGenerating.value = false
    }
}

function loadImageFromFile(file) {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file)
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = () => {
            URL.revokeObjectURL(url)
            resolve(img)
        }
        img.onerror = (e) => {
            URL.revokeObjectURL(url)
            reject(e)
        }
        img.src = url
    })
}

// 生成 BMP/DIB 缓冲区（32 位，带 alpha），用于 ICO 条目
function renderSizeToBmpBuffer(image, size) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        if (!ctx) {
            reject(new Error('Canvas not supported'))
            return
        }

        // 使用等比缩放并居中裁剪为正方形
        const minSide = Math.min(image.width, image.height)
        const sx = (image.width - minSide) / 2
        const sy = (image.height - minSide) / 2

        ctx.clearRect(0, 0, size, size)
        ctx.drawImage(image, sx, sy, minSide, minSide, 0, 0, size, size)

        const imageData = ctx.getImageData(0, 0, size, size)
        const pixels = imageData.data // RGBA

        const width = size
        const height = size

        const rowSize = width * 4 // 32bpp
        const maskRowSize = Math.ceil(width / 32) * 4 // 1bpp 行，按 32 位对齐
        const dibSize = 40 + rowSize * height + maskRowSize * height

        const buffer = new ArrayBuffer(dibSize)
        const view = new DataView(buffer)
        let offset = 0

        // BITMAPINFOHEADER (40 bytes)
        view.setUint32(offset, 40, true) // biSize
        offset += 4
        view.setInt32(offset, width, true) // biWidth
        offset += 4
        view.setInt32(offset, height * 2, true) // biHeight (XOR + AND)
        offset += 4
        view.setUint16(offset, 1, true) // biPlanes
        offset += 2
        view.setUint16(offset, 32, true) // biBitCount
        offset += 2
        view.setUint32(offset, 0, true) // biCompression = BI_RGB
        offset += 4
        view.setUint32(offset, rowSize * height, true) // biSizeImage
        offset += 4
        view.setInt32(offset, 0, true) // biXPelsPerMeter
        offset += 4
        view.setInt32(offset, 0, true) // biYPelsPerMeter
        offset += 4
        view.setUint32(offset, 0, true) // biClrUsed
        offset += 4
        view.setUint32(offset, 0, true) // biClrImportant
        offset += 4

        const pixelOffset = offset
        const bytes = new Uint8Array(buffer)

        // 写 XOR 位图（自底向上，BGRA）
        for (let y = 0; y < height; y += 1) {
            const srcY = height - 1 - y // bottom-up
            for (let x = 0; x < width; x += 1) {
                const srcIndex = (srcY * width + x) * 4
                const dstIndex = pixelOffset + y * rowSize + x * 4
                const r = pixels[srcIndex]
                const g = pixels[srcIndex + 1]
                const b = pixels[srcIndex + 2]
                const a = pixels[srcIndex + 3]
                bytes[dstIndex] = b
                bytes[dstIndex + 1] = g
                bytes[dstIndex + 2] = r
                bytes[dstIndex + 3] = a
            }
        }

        // AND mask：对于 32 位带 alpha 的 ICO，可以全部置 0
        const maskOffset = pixelOffset + rowSize * height
        for (let i = 0; i < maskRowSize * height; i += 1) {
            bytes[maskOffset + i] = 0
        }

        resolve(buffer)
    })
}

function createIcoFromBmpBuffers(entries) {
    // 经典 ICO：使用 BMP/DIB 数据作为每个图标条目，保证多尺寸兼容性更好
    const count = entries.length
    const headerSize = 6
    const entrySize = 16

    let imageDataSize = 0
    for (let i = 0; i < count; i += 1) {
        imageDataSize += entries[i].buffer.byteLength
    }

    const totalSize = headerSize + entrySize * count + imageDataSize
    const buffer = new ArrayBuffer(totalSize)
    const view = new DataView(buffer)
    let offset = 0

    // ICONDIR
    view.setUint16(offset, 0, true) // reserved
    offset += 2
    view.setUint16(offset, 1, true) // type = 1 (icon)
    offset += 2
    view.setUint16(offset, count, true) // count
    offset += 2

    // 预先计算每个图像数据的偏移
    let currentImageOffset = headerSize + entrySize * count

    for (let i = 0; i < count; i += 1) {
        const { size, buffer: imgBuffer } = entries[i]
        const dataSize = imgBuffer.byteLength

        const widthByte = size === 256 ? 0 : size
        const heightByte = size === 256 ? 0 : size

        view.setUint8(offset, widthByte)
        offset += 1
        view.setUint8(offset, heightByte)
        offset += 1
        view.setUint8(offset, 0) // color count
        offset += 1
        view.setUint8(offset, 0) // reserved
        offset += 1
        view.setUint16(offset, 1, true) // planes
        offset += 2
        view.setUint16(offset, 32, true) // bit count
        offset += 2
        view.setUint32(offset, dataSize, true) // bytes in resource
        offset += 4
        view.setUint32(offset, currentImageOffset, true) // image offset
        offset += 4

        currentImageOffset += dataSize
    }

    // 写入图像数据
    let dataOffset = headerSize + entrySize * count
    const uint8View = new Uint8Array(buffer)

    for (let i = 0; i < count; i += 1) {
        const { buffer: imgBuffer } = entries[i]
        uint8View.set(new Uint8Array(imgBuffer), dataOffset)
        dataOffset += imgBuffer.byteLength
    }

    return new Blob([buffer], { type: 'image/x-icon' })
}

function downloadSingleIco(index) {
    const ico = icoResults.value[index]
    if (!ico) return
    // 按需求：将当前图片已勾选的多个尺寸分别导出为单尺寸 ICO，一起放入一个 ZIP 中下载
    const sizes = lastSelectedSizes.value.length
        ? lastSelectedSizes.value
        : (ico.sizes || '')
            .split(',')
            .map(s => parseInt(s.trim(), 10))
            .filter(n => !Number.isNaN(n))

    if (!ico.sizeBuffers || !ico.sizeBuffers.length || !sizes.length) {
        // 兜底：退回到单个多尺寸 ICO 下载
        const a = document.createElement('a')
        a.href = ico.url
        a.download = ico.name || 'icon-multi-size.ico'
        a.click()
        return
    }

    const baseName = (ico.name || 'icon-multi-size.ico').replace(/\.ico$/i, '')
    const zip = new JSZip()

    sizes.forEach(size => {
        const entry = ico.sizeBuffers.find(b => b.size === size)
        if (!entry) return
        const singleIcoBlob = createIcoFromBmpBuffers([entry])
        const fileName = `${baseName}-${size}x${size}.ico`
        const buffer = await singleIcoBlob.arrayBuffer()
        zip.file(fileName, new Uint8Array(buffer))
    })

    zip.generateAsync({ type: 'blob' }).then(content => {
        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = `${baseName}-icons.zip`
        a.click()
        URL.revokeObjectURL(url)
    })
}

async function downloadAllIco() {
    if (!icoResults.value.length) return
    const zip = new JSZip()
    const sizes = lastSelectedSizes.value.length ? lastSelectedSizes.value : []

    for (let i = 0; i < icoResults.value.length; i += 1) {
        const ico = icoResults.value[i]
        const baseName = (ico.name || `icon-${i + 1}.ico`).replace(/\.ico$/i, '')

        if (ico.sizeBuffers && ico.sizeBuffers.length && sizes.length) {
            // 为每张图片，将选中的每个尺寸导出为单尺寸 ICO
            sizes.forEach(size => {
                const entry = ico.sizeBuffers.find(b => b.size === size)
                if (!entry) return
                const singleIcoBlob = createIcoFromBmpBuffers([entry])
                const fileName = `${baseName}-${size}x${size}.ico`
                const buffer = await singleIcoBlob.arrayBuffer()
                zip.file(fileName, new Uint8Array(buffer))
            })
        } else {
            // 兜底：没有尺寸信息时，把预览用的多尺寸 ICO 直接放入 ZIP
            const response = await fetch(ico.url)
            const blob = await response.blob()
            zip.file(`${baseName}.ico`, blob)
        }
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'icons-multi-size.zip'
    a.click()
    URL.revokeObjectURL(url)
}

// 从尺寸字符串获取尺寸数组
function getSizesArray(sizesStr) {
    if (!sizesStr) return []
    return sizesStr.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !Number.isNaN(n))
}

// 下载特定尺寸的ICO
function downloadSpecificSize(index, size) {
    const ico = icoResults.value[index]
    if (!ico || !ico.sizeBuffers || !ico.sizeBuffers.length) return
    
    const entry = ico.sizeBuffers.find(b => b.size === size)
    if (!entry) return
    
    const singleIcoBlob = createIcoFromBmpBuffers([entry])
    const baseName = (ico.name || 'icon.ico').replace(/\.ico$/i, '')
    const fileName = `${baseName}-${size}x${size}.ico`
    
    const url = URL.createObjectURL(singleIcoBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.click()
    URL.revokeObjectURL(url)
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

.btn-outline {
    @apply border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800;
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
