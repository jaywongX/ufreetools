<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.exif-viewer.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept="image/jpeg,image/jpg,image/heic,image/webp,image/png,image/tiff,image/tif" multiple
                        @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.exif-viewer.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.exif-viewer.supported') }}</span>
                </div>

                <!-- 示例图片按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleImages">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.exif-viewer.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="images.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.exif-viewer.preview') }} ({{ images.length }})</h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                            {{ $t('tools.exif-viewer.clearAll') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                        <div v-for="(img, idx) in images" :key="idx"
                            class="relative group rounded-lg overflow-hidden shadow-sm border">
                            <img :src="img.url" class="w-full h-24 object-cover" :alt="`Image ${idx + 1}`" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                    :aria-label="$t('tools.exif-viewer.deleteImage')">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.exif-viewer.outputTitle') }}</h2>
                    <button v-if="exifDataList.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.exif-viewer.downloadAll') }}
                    </button>
                </div>

                <div v-if="exifDataList.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(exifData, idx) in exifDataList" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 图片预览 -->
                        <div class="mb-4">
                            <img :src="images[idx]?.url" class="w-full max-h-64 object-contain rounded border"
                                :alt="`Preview ${idx + 1}`" />
                        </div>

                        <!-- EXIF信息显示 -->
                        <div v-if="exifData.hasExif" class="space-y-4">
                            <!-- 基础拍摄信息 -->
                            <div class="border-b pb-3">
                                <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-viewer.basicInfo') }}</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div v-if="exifData.make">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.cameraMake') }}:</span>
                                        <span class="ml-2">{{ exifData.make }}</span>
                                    </div>
                                    <div v-if="exifData.model">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.cameraModel') }}:</span>
                                        <span class="ml-2">{{ exifData.model }}</span>
                                    </div>
                                    <div v-if="exifData.lensModel">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.lensInfo') }}:</span>
                                        <span class="ml-2">{{ exifData.lensModel }}</span>
                                    </div>
                                    <div v-if="exifData.dateTime">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.dateTime') }}:</span>
                                        <span class="ml-2">{{ exifData.dateTime }}</span>
                                    </div>
                                    <div v-if="exifData.fileSize">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.fileSize') }}:</span>
                                        <span class="ml-2">{{ exifData.fileSize }}</span>
                                    </div>
                                    <div v-if="exifData.dimensions">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.dimensions') }}:</span>
                                        <span class="ml-2">{{ exifData.dimensions }}</span>
                                    </div>
                                    <div v-if="exifData.imageDescription">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.imageDescription') }}:</span>
                                        <span class="ml-2">{{ exifData.imageDescription }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- 拍摄参数 -->
                            <div class="border-b pb-3">
                                <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-viewer.shootingParams') }}</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div v-if="exifData.aperture">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.aperture') }}:</span>
                                        <span class="ml-2">f/{{ exifData.aperture }}</span>
                                    </div>
                                    <div v-if="exifData.shutterSpeed">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.shutterSpeed') }}:</span>
                                        <span class="ml-2">{{ exifData.shutterSpeed }}</span>
                                    </div>
                                    <div v-if="exifData.iso">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.iso') }}:</span>
                                        <span class="ml-2">ISO {{ exifData.iso }}</span>
                                    </div>
                                    <div v-if="exifData.focalLength">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.focalLength') }}:</span>
                                        <span class="ml-2">{{ exifData.focalLength }}mm</span>
                                    </div>
                                    <div v-if="exifData.focalLength35mm">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.focalLength35mm') }}:</span>
                                        <span class="ml-2">{{ exifData.focalLength35mm }}mm</span>
                                    </div>
                                    <div v-if="exifData.exposureCompensation !== null">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.exposureCompensation')
                                        }}:</span>
                                        <span class="ml-2">{{ exifData.exposureCompensation > 0 ? '+' : '' }}{{
                                            exifData.exposureCompensation }} EV</span>
                                    </div>
                                    <div v-if="exifData.whiteBalance">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.whiteBalance') }}:</span>
                                        <span class="ml-2">{{ exifData.whiteBalance }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- 拍摄模式与场景 -->
                            <div v-if="exifData.exposureProgram || exifData.exposureMode || exifData.sceneCaptureType || exifData.lightSource || exifData.digitalZoomRatio"
                                class="border-b pb-3">
                                <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-viewer.captureSettings') }}</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div v-if="exifData.exposureProgram">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.exposureProgram') }}:</span>
                                        <span class="ml-2">{{ exifData.exposureProgram }}</span>
                                    </div>
                                    <div v-if="exifData.exposureMode">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.exposureMode') }}:</span>
                                        <span class="ml-2">{{ exifData.exposureMode }}</span>
                                    </div>
                                    <div v-if="exifData.sceneCaptureType">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.sceneCaptureType') }}:</span>
                                        <span class="ml-2">{{ exifData.sceneCaptureType }}</span>
                                    </div>
                                    <div v-if="exifData.lightSource">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.lightSource') }}:</span>
                                        <span class="ml-2">{{ exifData.lightSource }}</span>
                                    </div>
                                    <div v-if="exifData.digitalZoomRatio">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.digitalZoomRatio') }}:</span>
                                        <span class="ml-2">{{ exifData.digitalZoomRatio }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- GPS信息 -->
                            <div v-if="exifData.gps" class="border-b pb-3">
                                <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-viewer.gpsInfo') }}</h3>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                        <div v-if="exifData.gps.latitude">
                                            <span class="font-medium">{{ $t('tools.exif-viewer.latitude') }}:</span>
                                            <span class="ml-2">{{ exifData.gps.latitude }}</span>
                                        </div>
                                        <div v-if="exifData.gps.longitude">
                                            <span class="font-medium">{{ $t('tools.exif-viewer.longitude') }}:</span>
                                            <span class="ml-2">{{ exifData.gps.longitude }}</span>
                                        </div>
                                        <div v-if="exifData.gps.altitude">
                                            <span class="font-medium">{{ $t('tools.exif-viewer.altitude') }}:</span>
                                            <span class="ml-2">{{ exifData.gps.altitude }}</span>
                                        </div>
                                        <div v-if="exifData.gps.location">
                                            <span class="font-medium">{{ $t('tools.exif-viewer.location') }}:</span>
                                            <span class="ml-2">{{ exifData.gps.location }}</span>
                                        </div>
                                        <div v-if="exifData.gps.speed">
                                            <span class="font-medium">{{ $t('tools.exif-viewer.gpsSpeed') }}:</span>
                                            <span class="ml-2">{{ exifData.gps.speed }}</span>
                                        </div>
                                        <div v-if="exifData.gps.direction">
                                            <span class="font-medium">{{ $t('tools.exif-viewer.gpsDirection') }}:</span>
                                            <span class="ml-2">{{ exifData.gps.direction }}</span>
                                        </div>
                                    </div>
                                    <!-- 地图显示 -->
                                    <div v-if="exifData.gps.lat && exifData.gps.lng" class="mt-3">
                                        <div class="text-sm font-medium mb-2">{{ $t('tools.exif-viewer.mapView') }}
                                        </div>
                                        <div
                                            class="w-full h-48 rounded border overflow-hidden bg-gray-100 dark:bg-gray-700 relative group">
                                            <img :src="getMapUrl(exifData.gps.lat, exifData.gps.lng)"
                                                :alt="$t('tools.exif-viewer.mapView')"
                                                class="w-full h-full object-cover cursor-pointer"
                                                @click="openMapInNewTab(exifData.gps.lat, exifData.gps.lng)"
                                                @error="handleMapImageError" />
                                            <div class="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity cursor-pointer"
                                                @click="openMapInNewTab(exifData.gps.lat, exifData.gps.lng)">
                                                <span
                                                    class="text-sm text-gray-700 dark:text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity">{{
                                                        $t('tools.exif-viewer.clickToViewLargeMap') }}</span>
                                            </div>
                                        </div>
                                        <button class="btn btn-secondary btn-sm mt-2"
                                            @click="reverseGeocode(exifData.gps.lat, exifData.gps.lng, idx)">
                                            {{ $t('tools.exif-viewer.reverseGeocode') }}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- 高级元数据 -->
                            <div class="border-b pb-3">
                                <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-viewer.advancedMetadata') }}
                                </h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div v-if="exifData.colorSpace">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.colorSpace') }}:</span>
                                        <span class="ml-2">{{ exifData.colorSpace }}</span>
                                    </div>
                                    <div v-if="exifData.flash">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.flashMode') }}:</span>
                                        <span class="ml-2">{{ exifData.flash }}</span>
                                    </div>
                                    <div v-if="exifData.meteringMode">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.meteringMode') }}:</span>
                                        <span class="ml-2">{{ exifData.meteringMode }}</span>
                                    </div>
                                    <div v-if="exifData.focusMode">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.focusMode') }}:</span>
                                        <span class="ml-2">{{ exifData.focusMode }}</span>
                                    </div>
                                    <div v-if="exifData.orientation">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.orientation') }}:</span>
                                        <span class="ml-2">{{ exifData.orientation }}</span>
                                    </div>
                                    <div v-if="exifData.sensingMethod">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.sensingMethod') }}:</span>
                                        <span class="ml-2">{{ exifData.sensingMethod }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- 创建信息 -->
                            <div v-if="exifData.software || exifData.artist || exifData.copyright"
                                class="border-b pb-3">
                                <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-viewer.creationInfo') }}</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div v-if="exifData.software">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.software') }}:</span>
                                        <span class="ml-2">{{ exifData.software }}</span>
                                    </div>
                                    <div v-if="exifData.artist">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.artist') }}:</span>
                                        <span class="ml-2">{{ exifData.artist }}</span>
                                    </div>
                                    <div v-if="exifData.copyright">
                                        <span class="font-medium">{{ $t('tools.exif-viewer.copyright') }}:</span>
                                        <span class="ml-2">{{ exifData.copyright }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- 导出选项 -->
                            <div class="mt-4">
                                <h3 class="text-lg font-semibold mb-3">{{ $t('tools.exif-viewer.exportOptions') }}</h3>
                                <div class="flex flex-wrap gap-2">
                                    <button class="btn btn-primary btn-sm" @click="exportJson(idx)">
                                        {{ $t('tools.exif-viewer.exportJson') }}
                                    </button>
                                    <button class="btn btn-primary btn-sm" @click="exportCsv(idx)">
                                        {{ $t('tools.exif-viewer.exportCsv') }}
                                    </button>
                                    <button class="btn btn-primary btn-sm" @click="exportSummary(idx)">
                                        {{ $t('tools.exif-viewer.exportSummary') }}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- 无EXIF数据提示 -->
                        <div v-else class="text-center py-8 text-gray-500">
                            <svg class="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p>{{ $t('tools.exif-viewer.noExifData') }}</p>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.exif-viewer.noOutput') }}</p>
                </div>
            </div>
        </div>
        <ExifViewerArticle />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import ExifViewerArticle from './ExifViewerArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const images = ref([])
const exifDataList = reactive([])
const isDragging = ref(false)

// 加载 exifr 库
let exifr = null

onMounted(async () => {
    try {
        // 动态加载 exifr 库
        const exifrModule = await import('exifr')
        exifr = exifrModule.default || exifrModule
    } catch (error) {
        console.error('Failed to load exifr library:', error)
    }
})

// 示例图片
const sampleImages = [
    {
        name: 'sample-exif.jpeg',
        url: '/images/sample-exif.jpeg',
        fallbackUrl: 'https://www.ufreetools.com/images/sample-exif.jpeg'
    }
]

// 加载示例图片
async function loadSampleImages() {
    clearImages()
    for (const sample of sampleImages) {
        try {
            let response
            try {
                response = await fetch(sample.url)
                if (!response.ok) throw new Error('Local image not found')
            } catch (e) {
                response = await fetch(sample.fallbackUrl)
            }
            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            const file = new File([blob], sample.name, { type: blob.type || 'image/jpeg' })
            await processImage(file, url)
        } catch (error) {
            console.error('Failed to load sample image:', error)
        }
    }
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file)
            processImage(file, url)
        }
    })
    isDragging.value = false
    if (fileInput.value) {
        fileInput.value.value = ''
    }
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 处理单张图片
async function processImage(file, url) {
    images.value.push({ file, url, name: file.name })
    const idx = images.value.length - 1

    try {
        // 等待 exifr 库加载完成
        if (!exifr) {
            // 如果库还没加载，尝试再次加载
            try {
                const exifrModule = await import('exifr')
                exifr = exifrModule.default || exifrModule
            } catch (importError) {
                console.error('Failed to load exifr library:', importError)
                exifDataList[idx] = { hasExif: false, error: 'Library not loaded' }
                return
            }
        }

        // 先尝试完整解析所有EXIF数据（不限制字段）
        // exifr 可以直接接受 File 对象，但为了更好的兼容性，也可以使用 ArrayBuffer
        let exifData = null

        try {
            // 方法1: 直接使用 File 对象解析（推荐）
            exifData = await exifr.parse(file, {
                exif: true,
                tiff: true,
                ifd0: true,
                gps: true,
                reviveValues: true,
                sanitize: true
            })

        } catch (parseError) {
            console.warn('Direct file parse failed, trying ArrayBuffer:', parseError)
            // 方法2: 转换为 ArrayBuffer 再解析
            try {
                const arrayBuffer = await file.arrayBuffer()
                exifData = await exifr.parse(arrayBuffer, {
                    translateKeys: false,
                    translateValues: false,
                    reviveValues: true,
                    sanitize: true
                })
            } catch (bufferError) {
                console.warn('ArrayBuffer parse also failed:', bufferError)
            }
        }

        // 如果完整解析返回空，尝试使用 pick 选项（更宽松的字段列表）
        if (!exifData || Object.keys(exifData).length === 0) {
            try {
                exifData = await exifr.parse(file, {
                    pick: [
                        'Make', 'Model', 'LensModel', 'LensMake', 'DateTimeOriginal', 'CreateDate', 'ModifyDate',
                        'FNumber', 'ExposureTime', 'ISO', 'ISOSpeedRatings', 'FocalLength', 'FocalLengthIn35mmFormat',
                        'ExposureCompensation', 'ExposureBiasValue', 'WhiteBalance', 'ColorSpace', 'Flash',
                        'MeteringMode', 'FocusMode', 'Orientation',
                        'GPSLatitude', 'GPSLongitude', 'GPSAltitude', 'GPSLatitudeRef', 'GPSLongitudeRef',
                        'ImageWidth', 'ImageHeight', 'PixelXDimension', 'PixelYDimension',
                        'Software', 'Artist', 'Copyright'
                    ],
                    translateKeys: false,
                    translateValues: false,
                    reviveValues: true,
                    sanitize: true
                })
            } catch (pickError) {
                console.warn('Pick parse failed:', pickError)
            }
        }

        // 如果还是空，尝试最基本的解析（无任何选项）
        if (!exifData || Object.keys(exifData).length === 0) {
            try {
                exifData = await exifr.parse(file)
            } catch (basicError) {
                console.warn('Basic parse failed:', basicError)
            }
        }

        // 调试信息
        console.log('EXIF parse result:', exifData)
        console.log('File type:', file.type)
        console.log('File size:', file.size)

        if (!exifData || Object.keys(exifData).length === 0) {
            exifDataList[idx] = { hasExif: false, error: 'No EXIF data found' }
            return
        }

        // 格式化EXIF数据
        const formatted = formatExifData(exifData, file)
        exifDataList[idx] = formatted
    } catch (error) {
        console.error('Error reading EXIF:', error)
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            fileType: file.type,
            fileName: file.name
        })
        exifDataList[idx] = { hasExif: false, error: error.message || 'Unknown error' }
    }
}

// 格式化EXIF数据
function formatExifData(data, file) {
    // 处理不同的字段名称变体（exifr 可能返回不同的键名）
    const getValue = (keys) => {
        for (const key of keys) {
            if (data[key] !== undefined && data[key] !== null) {
                return data[key]
            }
        }
        return null
    }

    const formatted = {
        hasExif: true,
        raw: data,
        make: getValue(['Make', 'make']) || null,
        model: getValue(['Model', 'model']) || null,
        lensModel: getValue(['LensModel', 'lensModel', 'Lens', 'lens']) || null,
        dateTime: formatDateTime(getValue(['DateTimeOriginal', 'dateTimeOriginal', 'CreateDate', 'createDate', 'ModifyDate', 'modifyDate'])),
        fileSize: formatFileSize(file.size),
        dimensions: formatDimensions(data),
        imageDescription: getValue(['ImageDescription', 'imageDescription', 'Description', 'description']) || null,
        aperture: getValue(['FNumber', 'fNumber', 'ApertureValue', 'apertureValue']) ? getValue(['FNumber', 'fNumber', 'ApertureValue', 'apertureValue']).toFixed(1) : null,
        shutterSpeed: formatShutterSpeed(getValue(['ExposureTime', 'exposureTime', 'ShutterSpeedValue', 'shutterSpeedValue'])),
        iso: getValue(['ISO', 'iso', 'ISOSpeedRatings', 'isoSpeedRatings', 'ISOSpeed', 'isoSpeed']) || null,
        focalLength: getValue(['FocalLength', 'focalLength']) ? Math.round(getValue(['FocalLength', 'focalLength'])) : null,
        focalLength35mm: getValue(['FocalLengthIn35mmFormat', 'focalLengthIn35mmFormat', 'FocalLength35mm', 'focalLength35mm']) ? Math.round(getValue(['FocalLengthIn35mmFormat', 'focalLengthIn35mmFormat', 'FocalLength35mm', 'focalLength35mm'])) : null,
        exposureCompensation: getValue(['ExposureCompensation', 'exposureCompensation', 'ExposureBiasValue', 'exposureBiasValue']) || null,
        whiteBalance: formatWhiteBalance(getValue(['WhiteBalance', 'whiteBalance'])),
        colorSpace: formatColorSpace(getValue(['ColorSpace', 'colorSpace'])),
        flash: formatFlash(getValue(['Flash', 'flash'])),
        meteringMode: formatMeteringMode(getValue(['MeteringMode', 'meteringMode'])),
        focusMode: formatFocusMode(getValue(['FocusMode', 'focusMode', 'AFMode', 'afMode'])),
        orientation: formatOrientation(getValue(['Orientation', 'orientation'])),
        exposureProgram: formatExposureProgram(getValue(['ExposureProgram', 'exposureProgram'])),
        exposureMode: formatExposureMode(getValue(['ExposureMode', 'exposureMode'])),
        sceneCaptureType: formatSceneCaptureType(getValue(['SceneCaptureType', 'sceneCaptureType'])),
        lightSource: formatLightSource(getValue(['LightSource', 'lightSource'])),
        digitalZoomRatio: formatDigitalZoomRatio(getValue(['DigitalZoomRatio', 'digitalZoomRatio'])),
        sensingMethod: formatSensingMethod(getValue(['SensingMethod', 'sensingMethod'])),
        software: getValue(['Software', 'software']) || null,
        artist: getValue(['Artist', 'artist', 'OwnerName', 'ownerName']) || null,
        copyright: getValue(['Copyright', 'copyright']) || null,
        gps: null
    }

    // 处理GPS信息（支持不同的字段名称）
    const gpsLat = getValue(['GPSLatitude', 'gpsLatitude', 'latitude', 'Latitude'])
    const gpsLng = getValue(['GPSLongitude', 'gpsLongitude', 'longitude', 'Longitude'])
    const gpsSpeed = getValue(['GPSSpeed', 'gpsSpeed'])
    const gpsSpeedRef = getValue(['GPSSpeedRef', 'gpsSpeedRef'])
    const gpsDirection = getValue(['GPSImgDirection', 'gpsImgDirection', 'GPSDirection', 'gpsDirection'])
    const gpsDirectionRef = getValue(['GPSImgDirectionRef', 'gpsImgDirectionRef', 'GPSDirectionRef', 'gpsDirectionRef'])

    if (gpsLat && gpsLng) {
        const lat = typeof gpsLat === 'number' ? gpsLat : parseFloat(gpsLat)
        const lng = typeof gpsLng === 'number' ? gpsLng : parseFloat(gpsLng)

        if (!isNaN(lat) && !isNaN(lng)) {
            formatted.gps = {
                lat,
                lng,
                latitude: formatCoordinate(lat, true),
                longitude: formatCoordinate(lng, false),
                altitude: getValue(['GPSAltitude', 'gpsAltitude', 'altitude', 'Altitude']) ? `${Math.round(getValue(['GPSAltitude', 'gpsAltitude', 'altitude', 'Altitude']))}m` : null,
                location: null,
                speed: formatGpsSpeed(gpsSpeed, gpsSpeedRef),
                direction: formatGpsDirection(gpsDirection, gpsDirectionRef)
            }
        }
    }

    return formatted
}

// 格式化日期时间
function formatDateTime(date) {
    if (!date) return null
    if (typeof date === 'string') {
        try {
            date = new Date(date)
        } catch (e) {
            return date
        }
    }
    if (date instanceof Date) {
        // 使用当前语言环境格式化日期
        const locale = navigator.language || 'zh-CN'
        return date.toLocaleString(locale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        })
    }
    return date.toString()
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

// 格式化尺寸
function formatDimensions(data) {
    const width = data.PixelXDimension || data.ImageWidth
    const height = data.PixelYDimension || data.ImageHeight
    if (width && height) {
        return `${width} × ${height}`
    }
    return null
}

// 格式化快门速度
function formatShutterSpeed(exposureTime) {
    if (!exposureTime) return null
    const secondText = t('tools.exif-viewer.second')
    if (exposureTime >= 1) {
        return `${exposureTime.toFixed(1)}${secondText}`
    }
    const fraction = 1 / exposureTime
    return `1/${Math.round(fraction)}${secondText}`
}

// 格式化白平衡
function formatWhiteBalance(wb) {
    if (wb === undefined || wb === null) return null
    return wb === 0 || wb === 'Auto' ? t('tools.exif-viewer.auto') : t('tools.exif-viewer.manual')
}

// 格式化色彩空间
function formatColorSpace(cs) {
    if (!cs) return null
    const map = {
        1: 'sRGB',
        65535: t('tools.exif-viewer.uncalibrated')
    }
    return map[cs] || cs.toString()
}

// 格式化闪光灯
function formatFlash(flash) {
    if (flash === undefined || flash === null) return null
    if (typeof flash === 'number') {
        return flash === 0 ? t('tools.exif-viewer.flashNotUsed') : t('tools.exif-viewer.flashUsed')
    }
    return flash.toString()
}

// 格式化测光模式
function formatMeteringMode(mode) {
    if (!mode) return null
    const map = {
        0: t('tools.exif-viewer.meteringUnknown'),
        1: t('tools.exif-viewer.meteringAverage'),
        2: t('tools.exif-viewer.meteringCenterWeighted'),
        3: t('tools.exif-viewer.meteringSpot'),
        4: t('tools.exif-viewer.meteringMultiSpot'),
        5: t('tools.exif-viewer.meteringMultiSegment'),
        6: t('tools.exif-viewer.meteringPartial'),
        255: t('tools.exif-viewer.meteringOther')
    }
    return map[mode] || mode.toString()
}

// 格式化对焦模式
function formatFocusMode(mode) {
    if (!mode) return null
    return mode.toString()
}

// 格式化方向
function formatOrientation(orientation) {
    if (!orientation) return null
    const map = {
        1: t('tools.exif-viewer.orientationNormal'),
        3: t('tools.exif-viewer.orientationRotate180'),
        6: t('tools.exif-viewer.orientationRotate90CW'),
        8: t('tools.exif-viewer.orientationRotate90CCW')
    }
    return map[orientation] || orientation.toString()
}

// 格式化曝光程序
function formatExposureProgram(program) {
    if (program === undefined || program === null) return null
    const map = {
        0: t('tools.exif-viewer.exposureProgramNotDefined'),
        1: t('tools.exif-viewer.exposureProgramManual'),
        2: t('tools.exif-viewer.exposureProgramNormal'),
        3: t('tools.exif-viewer.exposureProgramAperture'),
        4: t('tools.exif-viewer.exposureProgramShutter'),
        5: t('tools.exif-viewer.exposureProgramCreative'),
        6: t('tools.exif-viewer.exposureProgramAction'),
        7: t('tools.exif-viewer.exposureProgramPortrait'),
        8: t('tools.exif-viewer.exposureProgramLandscape')
    }
    return map[program] || program.toString()
}

// 格式化曝光模式
function formatExposureMode(mode) {
    if (mode === undefined || mode === null) return null
    const map = {
        0: t('tools.exif-viewer.exposureModeAuto'),
        1: t('tools.exif-viewer.exposureModeManual'),
        2: t('tools.exif-viewer.exposureModeAutoBracket')
    }
    return map[mode] || mode.toString()
}

// 格式化场景捕捉类型
function formatSceneCaptureType(type) {
    if (type === undefined || type === null) return null
    const map = {
        0: t('tools.exif-viewer.sceneCaptureStandard'),
        1: t('tools.exif-viewer.sceneCaptureLandscape'),
        2: t('tools.exif-viewer.sceneCapturePortrait'),
        3: t('tools.exif-viewer.sceneCaptureNight')
    }
    return map[type] || type.toString()
}

// 格式化光源
function formatLightSource(source) {
    if (source === undefined || source === null) return null
    const map = {
        0: t('tools.exif-viewer.lightSourceUnknown'),
        1: t('tools.exif-viewer.lightSourceDaylight'),
        2: t('tools.exif-viewer.lightSourceFluorescent'),
        3: t('tools.exif-viewer.lightSourceTungsten'),
        4: t('tools.exif-viewer.lightSourceFlash'),
        9: t('tools.exif-viewer.lightSourceFineWeather'),
        10: t('tools.exif-viewer.lightSourceCloudy'),
        11: t('tools.exif-viewer.lightSourceShade'),
        12: t('tools.exif-viewer.lightSourceDaylightFluorescent'),
        13: t('tools.exif-viewer.lightSourceDayWhiteFluorescent'),
        14: t('tools.exif-viewer.lightSourceCoolWhiteFluorescent'),
        15: t('tools.exif-viewer.lightSourceWhiteFluorescent'),
        17: t('tools.exif-viewer.lightSourceStandardLightA'),
        18: t('tools.exif-viewer.lightSourceStandardLightB'),
        19: t('tools.exif-viewer.lightSourceStandardLightC'),
        20: t('tools.exif-viewer.lightSourceD55'),
        21: t('tools.exif-viewer.lightSourceD65'),
        22: t('tools.exif-viewer.lightSourceD75'),
        24: t('tools.exif-viewer.lightSourceStudioTungsten'),
        255: t('tools.exif-viewer.lightSourceOther')
    }
    return map[source] || source.toString()
}

// 格式化感应方式
function formatSensingMethod(method) {
    if (method === undefined || method === null) return null
    const map = {
        1: t('tools.exif-viewer.sensingMethodNotDefined'),
        2: t('tools.exif-viewer.sensingMethodOneChip'),
        3: t('tools.exif-viewer.sensingMethodTwoChip'),
        4: t('tools.exif-viewer.sensingMethodThreeChip'),
        5: t('tools.exif-viewer.sensingMethodColorSequential'),
        7: t('tools.exif-viewer.sensingMethodTrilinear'),
        8: t('tools.exif-viewer.sensingMethodColorSequentialLinear')
    }
    return map[method] || method.toString()
}

// 格式化数字变焦
function formatDigitalZoomRatio(ratio) {
    if (!ratio || ratio === 1) return null
    const value = typeof ratio === 'number' ? ratio : parseFloat(ratio)
    if (isNaN(value) || value <= 0) return null
    return `${value.toFixed(2)}x`
}

// 格式化GPS速度
function formatGpsSpeed(speed, ref) {
    if (!speed && speed !== 0) return null
    const value = typeof speed === 'number' ? speed : parseFloat(speed)
    if (isNaN(value)) return null
    const unitMap = {
        K: t('tools.exif-viewer.gpsSpeedUnitKmh'),
        M: t('tools.exif-viewer.gpsSpeedUnitMph'),
        N: t('tools.exif-viewer.gpsSpeedUnitKnots')
    }
    const unit = unitMap[ref] || unitMap.K
    return `${value.toFixed(2)} ${unit}`
}

// 格式化GPS方向
function formatGpsDirection(direction, ref) {
    if (!direction && direction !== 0) return null
    const value = typeof direction === 'number' ? direction : parseFloat(direction)
    if (isNaN(value)) return null
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.round(value / 45) % directions.length
    const fallbackRef = directions[index]
    const refLabel = ref || fallbackRef
    return `${value.toFixed(2)}°${refLabel ? ` (${refLabel})` : ''}`
}

// 格式化坐标
function formatCoordinate(coord, isLat) {
    const abs = Math.abs(coord)
    const deg = Math.floor(abs)
    const min = Math.floor((abs - deg) * 60)
    const sec = ((abs - deg) * 60 - min) * 60
    const dir = isLat ? (coord >= 0 ? 'N' : 'S') : (coord >= 0 ? 'E' : 'W')
    return `${deg}°${min}'${sec.toFixed(2)}"${dir} (${coord.toFixed(6)})`
}

// 清除所有图片
function clearImages() {
    images.value.forEach(img => URL.revokeObjectURL(img.url))
    images.value = []
    exifDataList.splice(0)
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(images.value[idx].url)
    images.value.splice(idx, 1)
    exifDataList.splice(idx, 1)
}

// 获取地图URL（使用静态地图API）
function getMapUrl(lat, lng) {
    // 使用 OpenStreetMap 静态地图 API
    const zoom = 15
    const size = '400x300'
    return `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=${size}&markers=${lat},${lng},red-pushpin`
}

// 处理地图图片加载错误
function handleMapImageError(event) {
    // 如果静态地图加载失败，显示占位符
    event.target.style.display = 'none'
}

// 在新标签页打开地图
function openMapInNewTab(lat, lng) {
    window.open(`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=15`, '_blank', 'noopener,noreferrer')
}

// 反向地理编码
async function reverseGeocode(lat, lng, idx) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`, {
            headers: {
                'User-Agent': 'EXIF Viewer Tool'
            }
        })
        const data = await response.json()
        if (data && data.display_name) {
            if (exifDataList[idx] && exifDataList[idx].gps) {
                exifDataList[idx].gps.location = data.display_name
            }
        }
    } catch (error) {
        console.error('Reverse geocoding failed:', error)
    }
}

// 导出JSON
function exportJson(idx) {
    const data = exifDataList[idx]
    const json = JSON.stringify(data.raw || data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${images.value[idx].name.replace(/\.[^.]+$/, '')}_exif.json`
    a.click()
    URL.revokeObjectURL(url)
}

// 导出CSV
function exportCsv(idx) {
    const data = exifDataList[idx]
    if (!data.hasExif) return

    const rows = []
    rows.push([t('tools.exif-viewer.csvField'), t('tools.exif-viewer.csvValue')])

    if (data.make) rows.push([t('tools.exif-viewer.cameraMake'), data.make])
    if (data.model) rows.push([t('tools.exif-viewer.cameraModel'), data.model])
    if (data.lensModel) rows.push([t('tools.exif-viewer.lensInfo'), data.lensModel])
    if (data.dateTime) rows.push([t('tools.exif-viewer.dateTime'), data.dateTime])
    if (data.fileSize) rows.push([t('tools.exif-viewer.fileSize'), data.fileSize])
    if (data.dimensions) rows.push([t('tools.exif-viewer.dimensions'), data.dimensions])
    if (data.imageDescription) rows.push([t('tools.exif-viewer.imageDescription'), data.imageDescription])
    if (data.aperture) rows.push([t('tools.exif-viewer.aperture'), `f/${data.aperture}`])
    if (data.shutterSpeed) rows.push([t('tools.exif-viewer.shutterSpeed'), data.shutterSpeed])
    if (data.iso) rows.push([t('tools.exif-viewer.iso'), `ISO ${data.iso}`])
    if (data.focalLength) rows.push([t('tools.exif-viewer.focalLength'), `${data.focalLength}mm`])
    if (data.focalLength35mm) rows.push([t('tools.exif-viewer.focalLength35mm'), `${data.focalLength35mm}mm`])
    if (data.exposureCompensation !== null) rows.push([t('tools.exif-viewer.exposureCompensation'), `${data.exposureCompensation > 0 ? '+' : ''}${data.exposureCompensation} EV`])
    if (data.whiteBalance) rows.push([t('tools.exif-viewer.whiteBalance'), data.whiteBalance])
    if (data.exposureProgram) rows.push([t('tools.exif-viewer.exposureProgram'), data.exposureProgram])
    if (data.exposureMode) rows.push([t('tools.exif-viewer.exposureMode'), data.exposureMode])
    if (data.sceneCaptureType) rows.push([t('tools.exif-viewer.sceneCaptureType'), data.sceneCaptureType])
    if (data.lightSource) rows.push([t('tools.exif-viewer.lightSource'), data.lightSource])
    if (data.digitalZoomRatio) rows.push([t('tools.exif-viewer.digitalZoomRatio'), data.digitalZoomRatio])
    if (data.colorSpace) rows.push([t('tools.exif-viewer.colorSpace'), data.colorSpace])
    if (data.flash) rows.push([t('tools.exif-viewer.flashMode'), data.flash])
    if (data.meteringMode) rows.push([t('tools.exif-viewer.meteringMode'), data.meteringMode])
    if (data.focusMode) rows.push([t('tools.exif-viewer.focusMode'), data.focusMode])
    if (data.orientation) rows.push([t('tools.exif-viewer.orientation'), data.orientation])
    if (data.sensingMethod) rows.push([t('tools.exif-viewer.sensingMethod'), data.sensingMethod])
    if (data.software) rows.push([t('tools.exif-viewer.software'), data.software])
    if (data.artist) rows.push([t('tools.exif-viewer.artist'), data.artist])
    if (data.copyright) rows.push([t('tools.exif-viewer.copyright'), data.copyright])

    if (data.gps) {
        if (data.gps.latitude) rows.push([t('tools.exif-viewer.latitude'), data.gps.latitude])
        if (data.gps.longitude) rows.push([t('tools.exif-viewer.longitude'), data.gps.longitude])
        if (data.gps.altitude) rows.push([t('tools.exif-viewer.altitude'), data.gps.altitude])
        if (data.gps.location) rows.push([t('tools.exif-viewer.location'), data.gps.location])
        if (data.gps.speed) rows.push([t('tools.exif-viewer.gpsSpeed'), data.gps.speed])
        if (data.gps.direction) rows.push([t('tools.exif-viewer.gpsDirection'), data.gps.direction])
    }

    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${images.value[idx].name.replace(/\.[^.]+$/, '')}_exif.csv`
    a.click()
    URL.revokeObjectURL(url)
}

// 导出摘要报告
function exportSummary(idx) {
    const data = exifDataList[idx]
    if (!data.hasExif) return

    let report = `${t('tools.exif-viewer.summaryReport')}\n`
    report += `========================\n\n`
    report += `${t('tools.exif-viewer.summaryFileName')}: ${images.value[idx].name}\n\n`

    report += `${t('tools.exif-viewer.summaryBasicInfo')}\n`
    report += `------------------------\n`
    if (data.make) report += `${t('tools.exif-viewer.cameraMake')}: ${data.make}\n`
    if (data.model) report += `${t('tools.exif-viewer.cameraModel')}: ${data.model}\n`
    if (data.lensModel) report += `${t('tools.exif-viewer.lensInfo')}: ${data.lensModel}\n`
    if (data.dateTime) report += `${t('tools.exif-viewer.dateTime')}: ${data.dateTime}\n`
    if (data.fileSize) report += `${t('tools.exif-viewer.fileSize')}: ${data.fileSize}\n`
    if (data.dimensions) report += `${t('tools.exif-viewer.dimensions')}: ${data.dimensions}\n`
    if (data.imageDescription) report += `${t('tools.exif-viewer.imageDescription')}: ${data.imageDescription}\n`
    report += `\n`

    report += `${t('tools.exif-viewer.summaryShootingParams')}\n`
    report += `------------------------\n`
    if (data.aperture) report += `${t('tools.exif-viewer.aperture')}: f/${data.aperture}\n`
    if (data.shutterSpeed) report += `${t('tools.exif-viewer.shutterSpeed')}: ${data.shutterSpeed}\n`
    if (data.iso) report += `${t('tools.exif-viewer.iso')}: ISO ${data.iso}\n`
    if (data.focalLength) report += `${t('tools.exif-viewer.focalLength')}: ${data.focalLength}mm\n`
    if (data.focalLength35mm) report += `${t('tools.exif-viewer.focalLength35mm')}: ${data.focalLength35mm}mm\n`
    if (data.exposureCompensation !== null) report += `${t('tools.exif-viewer.exposureCompensation')}: ${data.exposureCompensation > 0 ? '+' : ''}${data.exposureCompensation} EV\n`
    if (data.whiteBalance) report += `${t('tools.exif-viewer.whiteBalance')}: ${data.whiteBalance}\n`
    if (data.exposureProgram) report += `${t('tools.exif-viewer.exposureProgram')}: ${data.exposureProgram}\n`
    if (data.exposureMode) report += `${t('tools.exif-viewer.exposureMode')}: ${data.exposureMode}\n`
    if (data.sceneCaptureType) report += `${t('tools.exif-viewer.sceneCaptureType')}: ${data.sceneCaptureType}\n`
    if (data.lightSource) report += `${t('tools.exif-viewer.lightSource')}: ${data.lightSource}\n`
    if (data.digitalZoomRatio) report += `${t('tools.exif-viewer.digitalZoomRatio')}: ${data.digitalZoomRatio}\n`
    report += `\n`

    if (data.gps) {
        report += `${t('tools.exif-viewer.summaryGpsInfo')}\n`
        report += `------------------------\n`
        if (data.gps.latitude) report += `${t('tools.exif-viewer.latitude')}: ${data.gps.latitude}\n`
        if (data.gps.longitude) report += `${t('tools.exif-viewer.longitude')}: ${data.gps.longitude}\n`
        if (data.gps.altitude) report += `${t('tools.exif-viewer.altitude')}: ${data.gps.altitude}\n`
        if (data.gps.location) report += `${t('tools.exif-viewer.location')}: ${data.gps.location}\n`
        if (data.gps.speed) report += `${t('tools.exif-viewer.gpsSpeed')}: ${data.gps.speed}\n`
        if (data.gps.direction) report += `${t('tools.exif-viewer.gpsDirection')}: ${data.gps.direction}\n`
        report += `\n`
    }

    report += `${t('tools.exif-viewer.summaryAdvancedMetadata')}\n`
    report += `------------------------\n`
    if (data.colorSpace) report += `${t('tools.exif-viewer.colorSpace')}: ${data.colorSpace}\n`
    if (data.flash) report += `${t('tools.exif-viewer.flashMode')}: ${data.flash}\n`
    if (data.meteringMode) report += `${t('tools.exif-viewer.meteringMode')}: ${data.meteringMode}\n`
    if (data.focusMode) report += `${t('tools.exif-viewer.focusMode')}: ${data.focusMode}\n`
    if (data.orientation) report += `${t('tools.exif-viewer.orientation')}: ${data.orientation}\n`
    if (data.sensingMethod) report += `${t('tools.exif-viewer.sensingMethod')}: ${data.sensingMethod}\n`
    report += `\n`

    if (data.software || data.artist || data.copyright) {
        report += `${t('tools.exif-viewer.summaryCreationInfo')}\n`
        report += `------------------------\n`
        if (data.software) report += `${t('tools.exif-viewer.software')}: ${data.software}\n`
        if (data.artist) report += `${t('tools.exif-viewer.artist')}: ${data.artist}\n`
        if (data.copyright) report += `${t('tools.exif-viewer.copyright')}: ${data.copyright}\n`
    }

    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${images.value[idx].name.replace(/\.[^.]+$/, '')}_exif_summary.txt`
    a.click()
    URL.revokeObjectURL(url)
}

// 批量下载
async function downloadAll() {
    const zip = new JSZip()

    for (let i = 0; i < exifDataList.length; i++) {
        const data = exifDataList[i]
        const fileName = images.value[i].name.replace(/\.[^.]+$/, '')

        // 添加JSON文件
        if (data.hasExif && data.raw) {
            const json = JSON.stringify(data.raw, null, 2)
            zip.file(`${fileName}_exif.json`, json)
        }
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'exif_data_all.zip'
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