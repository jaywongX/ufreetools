<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.image-base64-converter.inputTitle') }}</h2>

                <!-- 转换方向选择 -->
                <div class="mb-4">
                    <div class="flex gap-4">
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="conversionMode" value="image-to-base64" class="form-radio">
                            <span>{{ $t('tools.image-base64-converter.imageToBase64') }}</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="conversionMode" value="base64-to-image" class="form-radio">
                            <span>{{ $t('tools.image-base64-converter.base64ToImage') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 图片转Base64模式 -->
                <div v-if="conversionMode === 'image-to-base64'">
                    <!-- 文件上传区域 -->
                    <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                        :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                        <input type="file" ref="fileInput" class="hidden" accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/svg+xml"
                            multiple @change="handleFiles" />
                        <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="text-gray-500">{{ $t('tools.image-base64-converter.dragTip') }}</span>
                        <span class="text-xs text-gray-400 mt-2">{{ $t('tools.image-base64-converter.supported') }}</span>
                    </div>

                    <!-- 质量控制 -->
                    <div v-if="originalImages.length" class="mt-4 space-y-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.image-base64-converter.imageQuality') }}: {{ Math.round(imageQuality * 100) }}%
                            </label>
                            <input type="range" min="0.01" max="1" step="0.01" v-model.number="imageQuality"
                                class="w-full" />
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.image-base64-converter.maxFileSize') }}: {{ maxFileSizeMB }}MB
                            </label>
                            <input type="range" min="0.1" max="10" step="0.1" v-model.number="maxFileSizeMB"
                                class="w-full" />
                        </div>
                    </div>

                    <!-- 预览区域 -->
                    <div v-if="originalImages.length" class="mt-4 space-y-4">
                        <div class="flex justify-between items-center">
                            <h3 class="font-medium">{{ $t('tools.image-base64-converter.preview') }} ({{ originalImages.length }})</h3>
                            <button class="text-sm text-red-500 hover:text-red-600" @click="clearImages">
                                {{ $t('tools.image-base64-converter.clearAll') }}
                            </button>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                            <div v-for="(img, idx) in originalImages" :key="idx"
                                class="relative group rounded-lg overflow-hidden shadow-sm border">
                                <img :src="img.url" class="w-full h-24 object-cover"
                                    :alt="`${$t('tools.image-base64-converter.originalImage')} ${idx + 1}`" />
                                <div
                                    class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button class="text-white hover:text-red-400" @click.stop="removeImage(idx)"
                                        :aria-label="$t('tools.image-base64-converter.deleteImage')">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 转换按钮 -->
                    <div class="flex gap-2 mt-4">
                        <button class="btn btn-secondary" @click="loadSampleImage">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {{ $t('tools.image-base64-converter.loadSample') }}
                        </button>
                        <button class="btn btn-primary flex-1" :disabled="!originalImages.length" @click="convertImagesToBase64">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.image-base64-converter.convertBtn') }}
                        </button>
                    </div>
                </div>

                <!-- Base64转图片模式 -->
                <div v-if="conversionMode === 'base64-to-image'">
                    <!-- Base64输入区域 -->
                    <div class="space-y-4">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.image-base64-converter.base64Input') }}
                        </label>
                        <textarea v-model="base64Input" rows="8"
                            class="w-full p-3 border rounded-lg font-mono text-sm bg-white dark:bg-gray-700 dark:text-gray-200"
                            :placeholder="$t('tools.image-base64-converter.base64Placeholder')"></textarea>

                        <!-- 输出格式选择 -->
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.image-base64-converter.exportFormat') }}
                            </label>
                            <div class="flex flex-wrap gap-4">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="outputFormat" value="image/png" class="form-radio">
                                    <span>PNG</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="outputFormat" value="image/jpeg" class="form-radio">
                                    <span>JPG</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="outputFormat" value="image/webp" class="form-radio">
                                    <span>WEBP</span>
                                </label>
                            </div>
                        </div>

                        <!-- 转换按钮 -->
                        <div class="flex gap-2">
                            <button class="btn btn-secondary" @click="loadSampleBase64">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {{ $t('tools.image-base64-converter.loadSample') }}
                            </button>
                            <button class="btn btn-primary flex-1" :disabled="!base64Input.trim()" @click="convertBase64ToImage">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                {{ $t('tools.image-base64-converter.convertBtn') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.image-base64-converter.outputTitle') }}</h2>
                    <button v-if="outputResults.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.image-base64-converter.batchDownload') }}
                    </button>
                </div>

                <div v-if="outputResults.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(result, idx) in outputResults" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 图片转Base64输出 -->
                        <div v-if="conversionMode === 'image-to-base64'">
                            <!-- 图片预览 -->
                            <div class="mb-4">
                                <img :src="result.imageUrl" class="w-full max-h-[300px] object-contain border rounded"
                                    :alt="`${$t('tools.image-base64-converter.previewImage')} ${idx + 1}`" />
                            </div>

                            <!-- Base64信息 -->
                            <div class="space-y-2 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.image-base64-converter.base64Length') }}:</span>
                                    <span class="font-mono">{{ result.base64Length.toLocaleString() }} {{ $t('tools.image-base64-converter.characters') }}</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.image-base64-converter.originalSize') }}:</span>
                                    <span>{{ formatFileSize(result.originalSize) }}</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.image-base64-converter.compressionRatio') }}:</span>
                                    <span>{{ result.compressionRatio }}%</span>
                                </div>
                            </div>

                            <!-- Base64文本 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.image-base64-converter.base64Output') }}
                                </label>
                                <textarea :value="result.base64" rows="6" readonly
                                    class="w-full p-3 border rounded-lg font-mono text-xs bg-gray-50 dark:bg-gray-700 dark:text-gray-200"></textarea>
                                <button class="btn btn-success w-full" @click="copyBase64(idx)">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    {{ $t('tools.image-base64-converter.copyBase64') }}
                                </button>
                            </div>
                        </div>

                        <!-- Base64转图片输出 -->
                        <div v-if="conversionMode === 'base64-to-image'">
                            <!-- 图片预览 -->
                            <div class="mb-4">
                                <img :src="result.imageUrl" class="w-full max-h-[400px] object-contain border rounded"
                                    :alt="`${$t('tools.image-base64-converter.convertedImage')} ${idx + 1}`" />
                            </div>

                            <!-- 图片信息 -->
                            <div class="space-y-2 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.image-base64-converter.imageSize') }}:</span>
                                    <span>{{ result.width }} × {{ result.height }} px</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-600 dark:text-gray-400">{{ $t('tools.image-base64-converter.detectedFormat') }}:</span>
                                    <span>{{ result.detectedFormat }}</span>
                                </div>
                            </div>

                            <!-- 下载按钮 -->
                            <button class="btn btn-success w-full" @click="downloadImage(idx)">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                {{ $t('tools.image-base64-converter.downloadBtn') }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.image-base64-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <ImageBase64ConverterArticle />
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import ImageBase64ConverterArticle from './ImageBase64ConverterArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalImages = ref([])
const outputResults = reactive([])
const isDragging = ref(false)
const conversionMode = ref('image-to-base64')
const base64Input = ref('')
const outputFormat = ref('image/png')
const imageQuality = ref(1.0)
const maxFileSizeMB = ref(5)

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    files.forEach(file => {
        if (!/^image\/(png|jpeg|jpg|webp|gif|svg\+xml)$/.test(file.type)) return
        const url = URL.createObjectURL(file)
        originalImages.value.push({ file, url, name: file.name })
    })
    isDragging.value = false
    fileInput.value.value = ''
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除所有图片
function clearImages() {
    originalImages.value.forEach(img => URL.revokeObjectURL(img.url))
    originalImages.value = []
    outputResults.splice(0)
}

// 移除单张图片
function removeImage(idx) {
    URL.revokeObjectURL(originalImages.value[idx].url)
    originalImages.value.splice(idx, 1)
}

// 图片转Base64
async function convertImagesToBase64() {
    outputResults.splice(0)

    for (let idx = 0; idx < originalImages.value.length; idx++) {
        const img = originalImages.value[idx]
        
        try {
            const image = new window.Image()
            image.crossOrigin = "Anonymous"
            image.src = img.url

            await new Promise((resolve, reject) => {
                image.onload = resolve
                image.onerror = reject
                if (image.complete) resolve()
            })

            const canvas = document.createElement('canvas')
            canvas.width = image.naturalWidth || image.width
            canvas.height = image.naturalHeight || image.height

            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0)

            // 检查文件大小
            const maxSize = maxFileSizeMB.value * 1024 * 1024
            let quality = imageQuality.value
            let base64 = ''

            // 尝试转换，如果太大则降低质量
            while (quality >= 0.01) {
                base64 = canvas.toDataURL(img.file.type || 'image/png', quality)
                const base64Size = (base64.length * 3) / 4
                
                if (base64Size <= maxSize || quality <= 0.01) {
                    break
                }
                quality -= 0.1
            }

            const originalSize = img.file.size
            const base64Size = (base64.length * 3) / 4
            const compressionRatio = ((1 - base64Size / originalSize) * 100).toFixed(1)

            outputResults.push({
                imageUrl: img.url,
                base64: base64,
                base64Length: base64.length,
                originalSize: originalSize,
                compressionRatio: compressionRatio,
                name: img.name
            })
        } catch (error) {
            console.error('Error converting image to base64:', error)
        }
    }
}

// Base64转图片
function convertBase64ToImage() {
    outputResults.splice(0)
    
    try {
        let base64String = base64Input.value.trim()
        
        // 移除data URL前缀（如果存在）
        const dataUrlMatch = base64String.match(/^data:image\/([^;]+);base64,(.+)$/)
        if (dataUrlMatch) {
            base64String = dataUrlMatch[2]
        }
        
        // 解码Base64
        const binaryString = atob(base64String)
        const bytes = new Uint8Array(binaryString.length)
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i)
        }
        
        // 创建Blob
        const blob = new Blob([bytes], { type: outputFormat.value })
        const url = URL.createObjectURL(blob)
        
        // 创建图片以获取尺寸
        const image = new window.Image()
        image.src = url
        
        image.onload = () => {
            let detectedFormat = outputFormat.value.split('/')[1].toUpperCase()
            if (dataUrlMatch) {
                detectedFormat = dataUrlMatch[1].toUpperCase()
            }
            
            outputResults.push({
                imageUrl: url,
                width: image.width,
                height: image.height,
                detectedFormat: detectedFormat,
                blob: blob,
                name: `converted_image.${outputFormat.value.split('/')[1]}`
            })
        }
        
        image.onerror = () => {
            alert(t('tools.image-base64-converter.invalidBase64'))
        }
    } catch (error) {
        console.error('Error converting base64 to image:', error)
        alert(t('tools.image-base64-converter.invalidBase64'))
    }
}

// 复制Base64
function copyBase64(idx) {
    const result = outputResults[idx]
    navigator.clipboard.writeText(result.base64).then(() => {
        alert(t('tools.image-base64-converter.copied'))
    }).catch(() => {
        // 降级方案
        const textarea = document.createElement('textarea')
        textarea.value = result.base64
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        alert(t('tools.image-base64-converter.copied'))
    })
}

// 下载图片
function downloadImage(idx) {
    const result = outputResults[idx]
    const url = result.imageUrl
    const a = document.createElement('a')
    a.href = url
    a.download = result.name
    a.click()
}

// 批量下载
async function downloadAll() {
    if (conversionMode.value === 'image-to-base64') {
        // 下载所有Base64文本
        const zip = new JSZip()
        outputResults.forEach((result, idx) => {
            zip.file(`base64_${idx + 1}.txt`, result.base64)
        })
        const content = await zip.generateAsync({ type: 'blob' })
        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = 'base64_texts.zip'
        a.click()
        URL.revokeObjectURL(url)
    } else {
        // 下载所有图片
        const zip = new JSZip()
        for (let i = 0; i < outputResults.length; i++) {
            const result = outputResults[i]
            zip.file(result.name, result.blob)
        }
        const content = await zip.generateAsync({ type: 'blob' })
        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = 'converted_images.zip'
        a.click()
        URL.revokeObjectURL(url)
    }
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// 加载示例图片
function loadSampleImage() {
    // 清除现有图片
    clearImages()
    
    // 创建示例图片 (1x1像素的PNG)
    const canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 150
    const ctx = canvas.getContext('2d')
    
    // 绘制简单的渐变示例图
    const gradient = ctx.createLinearGradient(0, 0, 200, 150)
    gradient.addColorStop(0, '#4A90E2')
    gradient.addColorStop(0.5, '#7B68EE')
    gradient.addColorStop(1, '#FF6B6B')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 200, 150)
    
    // 添加一些装饰元素
    ctx.fillStyle = 'white'
    ctx.font = 'bold 20px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('示例图片', 100, 75)
    
    // 转换为blob并添加到列表
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        originalImages.value.push({ 
            file: new File([blob], 'sample.png', { type: 'image/png' }), 
            url, 
            name: '示例图片.png' 
        })
    }, 'image/png')
}

// 加载示例Base64数据
function loadSampleBase64() {
    // 创建一个简单的1x1像素的红色PNG图片的Base64编码
    const sampleBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
    
    // 加载一个更复杂的示例图 (蓝色渐变)
    const canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 150
    const ctx = canvas.getContext('2d')
    
    // 绘制渐变背景
    const gradient = ctx.createLinearGradient(0, 0, 200, 150)
    gradient.addColorStop(0, '#3498db')
    gradient.addColorStop(1, '#2980b9')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 200, 150)
    
    // 添加文字
    ctx.fillStyle = 'white'
    ctx.font = 'bold 24px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Base64示例', 100, 80)
    
    // 转换为Base64并设置到输入框
    const dataUrl = canvas.toDataURL('image/png')
    base64Input.value = dataUrl
}

// 监听转换模式变化，清空结果
watch(conversionMode, () => {
    outputResults.splice(0)
    base64Input.value = ''
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

.form-radio {
    @apply text-blue-600 focus:ring-blue-500;
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