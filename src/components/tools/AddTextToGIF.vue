<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.add-text-to-gif.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="image/gif"
                        @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.add-text-to-gif.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.add-text-to-gif.supported') }}</span>
                </div>

                <!-- URL导入 -->
                <div class="mt-4">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.add-text-to-gif.importFromUrl') }}
                    </label>
                    <div class="flex">
                        <input type="text" v-model="gifUrl" 
                            :placeholder="$t('tools.add-text-to-gif.urlPlaceholder')"
                            class="flex-1 rounded-l border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r"
                            @click="loadFromUrl" :disabled="!gifUrl">
                            {{ $t('tools.add-text-to-gif.loadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 示例GIF按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSampleGIF">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.add-text-to-gif.loadSample') }}
                    </button>
                </div>

                <!-- 预览区域 -->
                <div v-if="originalGIF" class="mt-4">
                    <h3 class="font-medium mb-2">{{ $t('tools.add-text-to-gif.preview') }}</h3>
                    <div class="border rounded-lg p-2 bg-gray-100 dark:bg-gray-700">
                        <img :src="originalGIF.url" class="max-h-64 w-full object-contain" 
                            :alt="$t('tools.add-text-to-gif.originalGif')" />
                    </div>
                </div>

                <!-- 文本设置 -->
                <div v-if="originalGIF" class="mt-6 space-y-4">
                    <h3 class="font-medium">{{ $t('tools.add-text-to-gif.textSettings') }}</h3>
                    
                    <!-- 文本输入 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.add-text-to-gif.text') }}
                        </label>
                        <textarea v-model="textSettings.text" rows="3"
                            class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                            :placeholder="$t('tools.add-text-to-gif.textPlaceholder')">
                        </textarea>
                    </div>
                    
                    <!-- 字体选择 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.add-text-to-gif.font') }}
                        </label>
                        <select v-model="textSettings.font" 
                            class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500">
                            <option value="Arial, sans-serif">Arial</option>
                            <option value="'Times New Roman', serif">Times New Roman</option>
                            <option value="'Courier New', monospace">Courier New</option>
                            <option value="Georgia, serif">Georgia</option>
                            <option value="Verdana, sans-serif">Verdana</option>
                        </select>
                    </div>
                    
                    <!-- 字号和颜色 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.add-text-to-gif.fontSize') }}
                            </label>
                            <input type="range" min="10" max="100" v-model.number="textSettings.fontSize"
                                class="w-full" />
                            <div class="text-center text-sm mt-1">{{ textSettings.fontSize }}px</div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.add-text-to-gif.color') }}
                            </label>
                            <input type="color" v-model="textSettings.color"
                                class="w-full h-10 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                    </div>
                    
                    <!-- 描边和阴影 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.add-text-to-gif.stroke') }}
                            </label>
                            <input type="range" min="0" max="10" v-model.number="textSettings.strokeWidth"
                                class="w-full" />
                            <div class="text-center text-sm mt-1">{{ textSettings.strokeWidth }}px</div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.add-text-to-gif.shadow') }}
                            </label>
                            <input type="range" min="0" max="10" v-model.number="textSettings.shadowBlur"
                                class="w-full" />
                            <div class="text-center text-sm mt-1">{{ textSettings.shadowBlur }}px</div>
                        </div>
                    </div>
                    
                    <!-- 透明度 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.add-text-to-gif.opacity') }}: {{ Math.round(textSettings.opacity * 100) }}%
                        </label>
                        <input type="range" min="0" max="1" step="0.01" v-model.number="textSettings.opacity"
                            class="w-full" />
                    </div>
                    
                    <!-- 文本位置 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.add-text-to-gif.position') }}
                        </label>
                        <div class="grid grid-cols-3 gap-2">
                            <button 
                                v-for="pos in positions" :key="pos.value"
                                @click="setTextPosition(pos.value)"
                                class="py-2 px-3 text-sm rounded border"
                                :class="textSettings.position === pos.value ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'">
                                {{ $t(pos.label) }}
                            </button>
                        </div>
                    </div>
                    
                    <!-- 精确坐标 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                X: {{ textSettings.x }}px
                            </label>
                            <input type="range" min="0" :max="originalGIF.width" v-model.number="textSettings.x"
                                class="w-full" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Y: {{ textSettings.y }}px
                            </label>
                            <input type="range" min="0" :max="originalGIF.height" v-model.number="textSettings.y"
                                class="w-full" />
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button v-if="originalGIF" class="btn btn-primary w-full mt-4" 
                    :disabled="!textSettings.text.trim()" @click="processGIF">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ $t('tools.add-text-to-gif.processBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.add-text-to-gif.outputTitle') }}</h2>
                </div>

                <div v-if="processedGIF" class="space-y-6">
                    <!-- GIF预览 -->
                    <div class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <div class="relative group">
                            <div class="border rounded overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <img :src="processedGIF.url" class="w-full max-h-96 object-contain" 
                                    :alt="$t('tools.add-text-to-gif.processedGif')" />
                            </div>
                        </div>

                        <!-- 导出选项 -->
                        <div class="mt-4 space-y-4">
                            <!-- 循环次数 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.add-text-to-gif.loopCount') }}
                                </label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="exportSettings.loopCount" :value="0"
                                            class="form-radio">
                                        <span>{{ $t('tools.add-text-to-gif.infinite') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="exportSettings.loopCount" :value="1"
                                            class="form-radio">
                                        <span>1</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="exportSettings.loopCount" :value="3"
                                            class="form-radio">
                                        <span>3</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="exportSettings.loopCount" :value="5"
                                            class="form-radio">
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 质量 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.add-text-to-gif.quality') }}: {{ exportSettings.quality }}
                                </label>
                                <input type="range" min="1" max="20" v-model.number="exportSettings.quality"
                                    class="w-full" />
                            </div>

                            <!-- 透明背景 -->
                            <div class="flex items-center">
                                <input type="checkbox" v-model="exportSettings.transparent"
                                    class="form-checkbox rounded h-5 w-5 text-blue-600" />
                                <label class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.add-text-to-gif.transparentBg') }}
                                </label>
                            </div>

                            <!-- 下载按钮 -->
                            <div class="flex gap-2">
                                <button class="btn btn-success flex-1" @click="downloadGIF">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ $t('tools.add-text-to-gif.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.add-text-to-gif.noOutput') }}</p>
                </div>
            </div>
        </div>
        <AddTextToGIFArticle />
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import GIF from 'gif.js'
import workerUrl from 'gif.js/dist/gif.worker.js?url'
import { parseGIF, decompressFrames } from 'gifuct-js'
import AddTextToGIFArticle from './AddTextToGIFArticle.vue'

const { t } = useI18n()

const fileInput = ref(null)
const originalGIF = ref(null)
const processedGIF = ref(null)
const isDragging = ref(false)
const gifUrl = ref('')

// 文本设置
const textSettings = reactive({
    text: '',
    font: 'Arial, sans-serif',
    fontSize: 24,
    color: '#ffffff',
    strokeWidth: 1,
    strokeColor: '#000000',
    shadowBlur: 2,
    opacity: 1,
    position: 'center',
    x: 0,
    y: 0
})

// 导出设置
const exportSettings = reactive({
    loopCount: 0, // 0 = infinite
    quality: 10,
    transparent: true // 默认启用透明背景
})

// 位置选项
const positions = [
    { value: 'top-left', label: 'tools.add-text-to-gif.topLeft' },
    { value: 'top-center', label: 'tools.add-text-to-gif.topCenter' },
    { value: 'top-right', label: 'tools.add-text-to-gif.topRight' },
    { value: 'center-left', label: 'tools.add-text-to-gif.centerLeft' },
    { value: 'center', label: 'tools.add-text-to-gif.center' },
    { value: 'center-right', label: 'tools.add-text-to-gif.centerRight' },
    { value: 'bottom-left', label: 'tools.add-text-to-gif.bottomLeft' },
    { value: 'bottom-center', label: 'tools.add-text-to-gif.bottomCenter' },
    { value: 'bottom-right', label: 'tools.add-text-to-gif.bottomRight' }
]

// 设置文本位置
function setTextPosition(position) {
    if (!originalGIF.value) return
    
    textSettings.position = position
    const { width, height } = originalGIF.value
    const textHeight = textSettings.fontSize
    
    switch (position) {
        case 'top-left':
            textSettings.x = 20
            textSettings.y = textHeight + 10
            break
        case 'top-center':
            textSettings.x = width / 2
            textSettings.y = textHeight + 10
            break
        case 'top-right':
            textSettings.x = width - 20
            textSettings.y = textHeight + 10
            break
        case 'center-left':
            textSettings.x = 20
            textSettings.y = height / 2
            break
        case 'center':
            textSettings.x = width / 2
            textSettings.y = height / 2
            break
        case 'center-right':
            textSettings.x = width - 20
            textSettings.y = height / 2
            break
        case 'bottom-left':
            textSettings.x = 20
            textSettings.y = height - 10
            break
        case 'bottom-center':
            textSettings.x = width / 2
            textSettings.y = height - 10
            break
        case 'bottom-right':
            textSettings.x = width - 20
            textSettings.y = height - 10
            break
    }
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    const file = files[0]
    
    if (!file || file.type !== 'image/gif') {
        return
    }
    
    const url = URL.createObjectURL(file)
    loadGIF(url, file.name)
    isDragging.value = false
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 从URL加载GIF
async function loadFromUrl() {
    if (!gifUrl.value) return
    
    try {
        loadGIF(gifUrl.value, 'imported.gif')
    } catch (error) {
        console.error('Failed to load GIF from URL:', error)
    }
}

// 加载示例GIF
function loadSampleGIF() {
    // 使用示例GIF URL
    const sampleUrl = 'https://disk.sample.cat/samples/gif/sample-1.gif'
    loadGIF(sampleUrl, 'sample.gif')
}

// 加载GIF
async function loadGIF(url, name) {
    try {
        // 清除之前的GIF
        if (originalGIF.value) {
            URL.revokeObjectURL(originalGIF.value.url)
        }
        
        if (processedGIF.value) {
            URL.revokeObjectURL(processedGIF.value.url)
            processedGIF.value = null
        }
        
        // 获取GIF数据
        const response = await fetch(url)
        const arrayBuffer = await response.arrayBuffer()
        const gifData = parseGIF(arrayBuffer)
        // 确保 decompressFrames 返回完整的 RGBA 数据
        const frames = decompressFrames(gifData, true)
        
        // 获取GIF尺寸
        const width = gifData.lsd.width
        const height = gifData.lsd.height
        
        originalGIF.value = {
            url,
            name,
            width,
            height,
             gifData,
            frames
        }
        
        // 设置默认文本位置
        setTextPosition('center')
    } catch (error) {
        console.error('Error loading GIF:', error)
    }
}

// 获取文本对齐方式
function getTextAlign() {
    if (textSettings.position.includes('center')) return 'center'
    if (textSettings.position.includes('right')) return 'right'
    return 'left'
}

// 获取文本基线
function getTextBaseline() {
    if (textSettings.position.includes('center')) return 'middle'
    if (textSettings.position.includes('bottom')) return 'bottom'
    return 'top'
}

// 在画布上绘制文本
function drawTextOnCanvas(ctx, width, height) {
    if (!textSettings.text.trim()) return
    
    ctx.save()
    
    // 设置文本样式
    ctx.font = `${textSettings.fontSize}px ${textSettings.font}`
    ctx.textAlign = getTextAlign()
    ctx.textBaseline = getTextBaseline()
    
    // 设置透明度
    ctx.globalAlpha = textSettings.opacity
    
    // 设置阴影（如果启用）
    if (textSettings.shadowBlur > 0) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
        ctx.shadowBlur = textSettings.shadowBlur
        ctx.shadowOffsetX = 1
        ctx.shadowOffsetY = 1
    }
    
    // 绘制描边（如果启用）
    if (textSettings.strokeWidth > 0) {
        ctx.strokeStyle = textSettings.strokeColor
        ctx.lineWidth = textSettings.strokeWidth
        ctx.strokeText(textSettings.text, textSettings.x, textSettings.y)
    }
    
    // 绘制文本
    ctx.fillStyle = textSettings.color
    ctx.fillText(textSettings.text, textSettings.x, textSettings.y)
    
    ctx.restore()
}

// 处理GIF - 正确的方法
async function processGIF() {
    if (!originalGIF.value || !textSettings.text.trim()) return
    
    try {
        const { width, height, frames } = originalGIF.value
        
        // 创建GIF实例
        const gif = new GIF({
            workers: 2,
            quality: exportSettings.quality,
            width,
            height,
            loop: exportSettings.loopCount,
            transparent: exportSettings.transparent ? null : null,
            workerScript: workerUrl
        })
        
        // 创建用于处理的canvas
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        
        // 处理每一帧
        for (const frame of frames) {
            // 根据dispose操作清理画布
            if (frame.disposalType === 2) {
                // restore to background color
                ctx.clearRect(0, 0, width, height)
            } else if (frame.disposalType === 3) {
                // restore to previous
                // 这里需要保存上一帧的状态，但为了简化处理，我们暂时不处理
            }
            
            // 创建临时canvas来处理当前帧
            const frameCanvas = document.createElement('canvas')
            frameCanvas.width = width
            frameCanvas.height = height
            const frameCtx = frameCanvas.getContext('2d')
            
            // 将帧数据绘制到临时canvas
            const imageData = frameCtx.createImageData(width, height)
            imageData.data.set(frame.patch)
            frameCtx.putImageData(imageData, 0, 0)
            
            // 将帧绘制到主canvas
            ctx.drawImage(frameCanvas, frame.dims.left, frame.dims.top)
            
            // 在当前帧上添加文本
            drawTextOnCanvas(ctx, width, height)
            
            // 将处理后的帧添加到新的GIF
            gif.addFrame(canvas, {
                delay: frame.delay || 100,
                copy: true // 重要：复制canvas内容而不是引用
            })
            
            // 如果disposeType为2，需要在下一帧开始前清理
            if (frame.disposalType === 2) {
                ctx.clearRect(0, 0, width, height)
            }
        }
        
        // 处理完成回调
        gif.on('finished', (blob) => {
            const url = URL.createObjectURL(blob)
            
            // 清除之前的处理结果
            if (processedGIF.value) {
                URL.revokeObjectURL(processedGIF.value.url)
            }
            
            processedGIF.value = {
                url,
                name: originalGIF.value.name.replace(/\.gif$/i, '_text.gif'),
                width,
                height
            }
        })
        
        // 开始渲染
        gif.render()
    } catch (error) {
        console.error('Error processing GIF:', error)
    }
}

// 下载GIF
function downloadGIF() {
    if (!processedGIF.value) return
    
    const a = document.createElement('a')
    a.href = processedGIF.value.url
    a.download = processedGIF.value.name
    a.click()
}
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
}

.btn-secondary {
    @apply bg-gray-500 hover:bg-gray-600 text-white;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white;
}

.btn:disabled {
    @apply bg-gray-300 dark:bg-gray-600 cursor-not-allowed;
}
</style>