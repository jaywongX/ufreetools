<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.text-to-image-converter.inputTitle') }}</h2>

                <!-- 文本输入区域 -->
                <div class="space-y-4">
                    <!-- 文本编辑器 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.textInput') }}
                        </label>
                        <div class="relative">
                            <textarea v-model="textInput"
                                :placeholder="$t('tools.text-to-image-converter.textPlaceholder')"
                                class="w-full h-64 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm resize-none"
                                @input="handleRealTimePreview"></textarea>
                        </div>
                    </div>

                    <!-- 示例文本按钮和转换按钮 -->
                    <div class="flex gap-2">
                        <button class="btn btn-secondary flex-1" @click="loadSampleText">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {{ $t('tools.text-to-image-converter.loadSample') }}
                        </button>
                        <button class="btn btn-primary flex-1" @click="convertToImage" :disabled="!textInput.trim()">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {{ $t('tools.text-to-image-converter.convertBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 样式设置 -->
                <div class="mt-6 space-y-4">
                    <h3 class="text-lg font-semibold">{{ $t('tools.text-to-image-converter.styleSettings') }}</h3>

                    <!-- 字体选择 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.fontFamily') }}
                        </label>
                        <select v-model="settings.fontFamily" @change="handleRealTimePreview"
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
                            <optgroup :label="$t('tools.text-to-image-converter.chineseFonts')">
                                <option v-for="font in chineseFonts" :key="font.value" :value="font.value">
                                    {{ font.label }}
                                </option>
                            </optgroup>
                            <optgroup :label="$t('tools.text-to-image-converter.englishFonts')">
                                <option v-for="font in englishFonts" :key="font.value" :value="font.value">
                                    {{ font.label }}
                                </option>
                            </optgroup>
                        </select>
                    </div>

                    <!-- 字体大小和行高 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.text-to-image-converter.fontSize') }}: {{ settings.fontSize }}px
                            </label>
                            <input type="range" min="12" max="48" v-model.number="settings.fontSize"
                                @input="handleRealTimePreview" class="w-full" />
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.text-to-image-converter.lineHeight') }}: {{ settings.lineHeight }}
                            </label>
                            <input type="range" min="1" max="3" step="0.1" v-model.number="settings.lineHeight"
                                @input="handleRealTimePreview" class="w-full" />
                        </div>
                    </div>

                    <!-- 文本对齐 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.textAlign') }}
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.textAlign" value="left"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.alignLeft') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.textAlign" value="center"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.alignCenter') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.textAlign" value="right"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.alignRight') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- 文字颜色 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.textColor') }}
                        </label>
                        <div class="flex items-center space-x-2">
                            <input type="color" v-model="settings.textColor" @change="handleRealTimePreview"
                                class="w-12 h-8 border border-gray-300 rounded">
                            <span class="text-sm">{{ settings.textColor }}</span>
                        </div>
                    </div>

                    <!-- 背景设置 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.background') }}
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.backgroundType" value="solid"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.solidColor') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.backgroundType" value="gradient"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.gradient') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.backgroundType" value="image"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.backgroundImage') }}</span>
                            </label>
                        </div>

                        <!-- 颜色选择器 -->
                        <div v-if="settings.backgroundType === 'solid'" class="flex items-center space-x-2">
                            <input type="color" v-model="settings.backgroundColor" @change="handleRealTimePreview"
                                class="w-12 h-8 border border-gray-300 rounded">
                            <span class="text-sm">{{ settings.backgroundColor }}</span>
                        </div>

                        <div v-if="settings.backgroundType === 'gradient'" class="flex items-center space-x-2">
                            <input type="color" v-model="settings.gradientStart" @change="handleRealTimePreview"
                                class="w-12 h-8 border border-gray-300 rounded">
                            <span class="text-sm">{{ $t('tools.text-to-image-converter.to') }}</span>
                            <input type="color" v-model="settings.gradientEnd" @change="handleRealTimePreview"
                                class="w-12 h-8 border border-gray-300 rounded">
                        </div>

                        <!-- 背景图片上传 -->
                        <div v-if="settings.backgroundType === 'image'" class="space-y-2">
                            <input type="file" ref="backgroundImageInput" accept="image/*"
                                @change="handleBackgroundImageUpload"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
                            <div class="flex items-center space-x-2">
                                <label class="text-sm">{{ $t('tools.text-to-image-converter.backgroundOpacity') }}:</label>
                                <input type="range" min="0.1" max="1" step="0.1"
                                    v-model.number="settings.backgroundOpacity" @input="handleRealTimePreview"
                                    class="flex-1" />
                                <span class="text-sm">{{ Math.round(settings.backgroundOpacity * 100) }}%</span>
                            </div>
                        </div>
                    </div>

                    <!-- 阴影和边距 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="settings.showShadow" @change="handleRealTimePreview"
                                    class="form-checkbox">
                                <span class="text-sm font-medium">{{ $t('tools.text-to-image-converter.shadow') }}</span>
                            </label>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.text-to-image-converter.padding') }}: {{ settings.padding }}px
                            </label>
                            <input type="range" min="20" max="80" v-model.number="settings.padding"
                                @input="handleRealTimePreview" class="w-full" />
                        </div>
                    </div>

                    <!-- 布局模式 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.layoutMode') }}
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.layoutMode" value="wide"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.wide') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.layoutMode" value="compact"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.compact') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.layoutMode" value="square"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.square') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- 水印设置 -->
                    <div class="space-y-2">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="settings.showWatermark" @change="handleRealTimePreview"
                                class="form-checkbox">
                            <span class="text-sm font-medium">{{ $t('tools.text-to-image-converter.watermark') }}</span>
                        </label>

                        <div v-if="settings.showWatermark" class="space-y-3 ml-6">
                            <!-- 水印类型 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.text-to-image-converter.watermarkType') }}
                                </label>
                                <div class="flex gap-4">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="settings.watermarkType" value="text"
                                            @change="handleRealTimePreview" class="form-radio">
                                        <span>{{ $t('tools.text-to-image-converter.textOnly') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="settings.watermarkType" value="textWithAvatar"
                                            @change="handleRealTimePreview" class="form-radio">
                                        <span>{{ $t('tools.text-to-image-converter.textWithAvatar') }}</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 水印文本 -->
                            <input type="text" v-model="settings.watermarkText" @input="handleRealTimePreview"
                                :placeholder="$t('tools.text-to-image-converter.watermarkText')"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">

                            <!-- 头像上传 -->
                            <div v-if="settings.watermarkType === 'textWithAvatar'" class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.text-to-image-converter.uploadAvatar') }}
                                </label>
                                <input type="file" ref="avatarInput" accept="image/*" @change="handleAvatarUpload"
                                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
                            </div>

                            <div class="flex items-center space-x-4">
                                <select v-model="settings.watermarkPosition" @change="handleRealTimePreview"
                                    class="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700">
                                    <option value="bottom-right">{{ $t('tools.text-to-image-converter.bottomRight') }}</option>
                                    <option value="bottom-left">{{ $t('tools.text-to-image-converter.bottomLeft') }}</option>
                                    <option value="top-right">{{ $t('tools.text-to-image-converter.topRight') }}</option>
                                    <option value="top-left">{{ $t('tools.text-to-image-converter.topLeft') }}</option>
                                </select>

                                <input type="color" v-model="settings.watermarkColor" @change="handleRealTimePreview"
                                    class="w-8 h-6 border border-gray-300 rounded">
                            </div>
                        </div>
                    </div>

                    <!-- 图片质量 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.qualityLevel') }}
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.qualityLevel" value="standard"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.standard') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.qualityLevel" value="high"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.high') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.qualityLevel" value="ultra"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.text-to-image-converter.ultra') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- 实时预览开关 -->
                    <div class="space-y-2">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="settings.realTimePreview"
                                @change="handleRealTimePreviewToggle" class="form-checkbox">
                            <span class="text-sm font-medium">{{ $t('tools.text-to-image-converter.realTimePreview') }}</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.text-to-image-converter.outputTitle') }}</h2>
                    <div class="flex items-center space-x-2">
                        <!-- 预览控制按钮 -->
                        <div v-if="generatedImage" class="flex items-center space-x-1 mr-2">
                            <button @click="zoomOut" class="btn btn-secondary btn-sm" :disabled="previewZoom <= 0.25">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20 12H4" />
                                </svg>
                            </button>
                            <span class="text-sm px-2">{{ Math.round(previewZoom * 100) }}%</span>
                            <button @click="zoomIn" class="btn btn-secondary btn-sm" :disabled="previewZoom >= 3">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <button @click="resetZoom" class="btn btn-secondary btn-sm">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                        <button v-if="generatedImage" class="btn btn-primary btn-sm" @click="downloadImage">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.text-to-image-converter.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 导出选项 -->
                <div class="space-y-4 mt-6">
                    <div class="flex items-center justify-between">
                        <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.exportFormat') }}
                        </label>
                        <select v-model="exportFormat"
                            class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700">
                            <option value="png">PNG</option>
                            <option value="jpeg">JPEG</option>
                            <option value="webp">WebP</option>
                        </select>
                    </div>
                    <div v-if="exportFormat === 'jpeg'" class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.text-to-image-converter.imageQuality') }}: {{ Math.round(imageQuality * 100) }}%
                        </label>
                        <input type="range" min="0.5" max="1" step="0.01" v-model.number="imageQuality" class="w-full" />
                    </div>
                </div>

                <!-- 预览容器 -->
                <div class="preview-container overflow-auto" style="height: calc(100vh - 200px);">
                    <canvas ref="previewCanvas" class="w-full border rounded"></canvas>
                </div>
            </div>
        </div>
    </div>

    <TextToImageConverterArticle />
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import TextToImageConverterArticle from './TextToImageConverterArticle.vue'

const { t } = useI18n()

const previewCanvas = ref(null)
const textInput = ref('')
const generatedImage = ref(null)
const exportFormat = ref('png')
const imageQuality = ref(0.92)

// 设置选项
const settings = reactive({
    fontFamily: 'Source Han Sans SC',
    fontSize: 20,
    lineHeight: 1.6,
    textAlign: 'left',
    textColor: '#333333',
    backgroundType: 'solid',
    backgroundColor: '#ffffff',
    gradientStart: '#667eea',
    gradientEnd: '#764ba2',
    backgroundOpacity: 0.8,
    showShadow: false,
    padding: 40,
    layoutMode: 'compact',
    showWatermark: false,
    watermarkText: 'ufreetools.com',
    watermarkType: 'text',
    watermarkPosition: 'bottom-right',
    watermarkColor: '#999999',
    qualityLevel: 'high',
    realTimePreview: true
})

const avatarImage = ref(null)
const avatarInput = ref(null)
const backgroundImageInput = ref(null)
const backgroundImage = ref(null)
const previewZoom = ref(1)

// 中文字体
const chineseFonts = [
    { value: 'Source Han Sans SC', label: '思源黑体' },
    { value: 'Microsoft YaHei', label: '微软雅黑' },
    { value: 'PingFang SC', label: '苹方' },
    { value: 'SimHei', label: '黑体' },
    { value: 'SimSun', label: '宋体' },
    { value: 'KaiTi', label: '楷体' },
    { value: 'FangSong', label: '仿宋' }
]

// 英文字体
const englishFonts = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'Courier New', label: 'Courier New' }
]

// 示例文本
const sampleTexts = {
    zh: `文本转图片工具

将您的文字内容转换为精美的图片，
适用于社交媒体分享、广告文案制作。

使用方法：
1. 输入或粘贴文本内容
2. 选择字体和样式
3. 自定义背景效果
4. 点击转换并下载图片

立即体验，创建属于您的精美文本图片！`,
    en: `Text to Image Tool

Convert your text content into beautiful images,
Perfect for social media sharing and creative design.

How to use:
1. Enter or paste your text
2. Choose font and style
3. Customize background effects
4. Click convert and download

Start creating your beautiful text images now!`
}

// 加载示例文本
function loadSampleText() {
    textInput.value = sampleTexts.zh
    generatePreview()
}

// 转换为图片
async function convertToImage() {
    if (!textInput.value.trim()) {
        return
    }
    await generatePreview()
}

// 处理实时预览
function handleRealTimePreview() {
    if (settings.realTimePreview) {
        generatePreview()
    }
}

// 切换实时预览
function handleRealTimePreviewToggle() {
    if (settings.realTimePreview) {
        generatePreview()
    }
}

// 处理头像上传
function handleAvatarUpload(event) {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const img = new Image()
            img.onload = () => {
                avatarImage.value = img
                handleRealTimePreview()
            }
            img.src = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

// 处理背景图片上传
function handleBackgroundImageUpload(event) {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const img = new Image()
            img.onload = () => {
                backgroundImage.value = img
                handleRealTimePreview()
            }
            img.src = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

// 缩放功能
function zoomIn() {
    if (previewZoom.value < 3) {
        previewZoom.value = Math.min(3, previewZoom.value + 0.25)
        updateCanvasTransform()
    }
}

function zoomOut() {
    if (previewZoom.value > 0.25) {
        previewZoom.value = Math.max(0.25, previewZoom.value - 0.25)
        updateCanvasTransform()
    }
}

function resetZoom() {
    previewZoom.value = 1
    updateCanvasTransform()
}

function updateCanvasTransform() {
    if (previewCanvas.value) {
        previewCanvas.value.style.transform = `scale(${previewZoom.value})`
        previewCanvas.value.style.transformOrigin = 'top left'
    }
}

// 生成预览图像
async function generatePreview() {
    if (!textInput.value.trim()) {
        generatedImage.value = null
        return
    }

    await ensureFontLoaded(settings.fontFamily)
    await nextTick()

    const canvas = previewCanvas.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    // 根据质量级别设置缩放
    let scale = 1
    switch (settings.qualityLevel) {
        case 'standard': scale = 1; break
        case 'high': scale = 2; break
        case 'ultra': scale = 3; break
    }

    // 设置字体
    const fontSize = settings.fontSize * scale
    ctx.font = `${fontSize}px "${settings.fontFamily}", sans-serif`

    // 处理文本
    const lines = textInput.value.split('\n')
    const lineHeight = fontSize * settings.lineHeight

    // 计算最大宽度
    const maxWidth = Math.max(...lines.map(line => ctx.measureText(line).width))

    // 根据布局模式调整尺寸
    let contentWidth, contentHeight
    switch (settings.layoutMode) {
        case 'wide':
            contentWidth = Math.max(800 * scale, maxWidth + settings.padding * 2 * scale)
            contentHeight = lines.length * lineHeight + settings.padding * 2 * scale
            break
        case 'compact':
            contentWidth = maxWidth + settings.padding * 2 * scale
            contentHeight = lines.length * lineHeight + settings.padding * 2 * scale
            break
        case 'square':
            const size = Math.max(maxWidth + settings.padding * 2 * scale, lines.length * lineHeight + settings.padding * 2 * scale)
            contentWidth = contentHeight = size
            break
    }

    // 设置画布尺寸
    canvas.width = contentWidth
    canvas.height = contentHeight

    // 重新设置字体
    ctx.font = `${fontSize}px "${settings.fontFamily}", sans-serif`
    ctx.textBaseline = 'top'

    // 绘制背景
    if (settings.backgroundType === 'solid') {
        ctx.fillStyle = settings.backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else if (settings.backgroundType === 'gradient') {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, settings.gradientStart)
        gradient.addColorStop(1, settings.gradientEnd)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else if (settings.backgroundType === 'image' && backgroundImage.value) {
        ctx.globalAlpha = settings.backgroundOpacity
        ctx.drawImage(backgroundImage.value, 0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 1
        // 添加半透明覆盖层
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, settings.gradientStart)
        gradient.addColorStop(1, settings.gradientEnd)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // 设置文本对齐
    ctx.textAlign = settings.textAlign
    let textX = settings.padding * scale
    if (settings.textAlign === 'center') {
        textX = canvas.width / 2
    } else if (settings.textAlign === 'right') {
        textX = canvas.width - settings.padding * scale
    }

    // 添加阴影效果
    if (settings.showShadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 10 * scale
        ctx.shadowOffsetX = 2 * scale
        ctx.shadowOffsetY = 2 * scale
    }

    // 绘制文本
    ctx.fillStyle = settings.textColor
    lines.forEach((line, index) => {
        const y = settings.padding * scale + index * lineHeight
        ctx.fillText(line, textX, y)
    })

    // 重置阴影
    ctx.shadowColor = 'transparent'
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    // 添加水印
    if (settings.showWatermark && settings.watermarkText) {
        const watermarkFontSize = Math.max(12, fontSize * 0.5)
        ctx.font = `${watermarkFontSize}px "${settings.fontFamily}", sans-serif`
        ctx.fillStyle = settings.watermarkColor
        ctx.globalAlpha = 0.7
        ctx.textAlign = 'left'

        let watermarkWidth = ctx.measureText(settings.watermarkText).width
        const watermarkHeight = watermarkFontSize

        // 如果是文本+头像水印
        if (settings.watermarkType === 'textWithAvatar' && avatarImage.value) {
            const avatarSize = watermarkFontSize
            watermarkWidth += avatarSize + 5 * scale
        }

        let x, y
        switch (settings.watermarkPosition) {
            case 'bottom-right':
                x = canvas.width - watermarkWidth - 10 * scale
                y = canvas.height - watermarkHeight - 10 * scale
                break
            case 'bottom-left':
                x = 10 * scale
                y = canvas.height - watermarkHeight - 10 * scale
                break
            case 'top-right':
                x = canvas.width - watermarkWidth - 10 * scale
                y = 10 * scale
                break
            case 'top-left':
                x = 10 * scale
                y = 10 * scale
                break
        }

        // 绘制头像
        if (settings.watermarkType === 'textWithAvatar' && avatarImage.value) {
            const avatarSize = watermarkFontSize
            ctx.save()
            ctx.beginPath()
            ctx.arc(x + avatarSize / 2, y + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2)
            ctx.clip()
            ctx.drawImage(avatarImage.value, x, y, avatarSize, avatarSize)
            ctx.restore()
            x += avatarSize + 5 * scale
        }

        // 绘制水印文本
        ctx.fillText(settings.watermarkText, x, y)
        ctx.globalAlpha = 1
    }

    generatedImage.value = canvas.toDataURL('image/png')
}

// 下载图像
function downloadImage() {
    if (!generatedImage.value) return

    const canvas = previewCanvas.value
    const format = exportFormat.value === 'png' ? 'image/png' :
        exportFormat.value === 'jpeg' ? 'image/jpeg' : 'image/webp'
    const quality = exportFormat.value === 'jpeg' ? imageQuality.value : undefined

    const dataUrl = canvas.toDataURL(format, quality)
    const link = document.createElement('a')
    link.download = `text-image.${exportFormat.value}`
    link.href = dataUrl
    link.click()
}

// 确保字体加载
async function ensureFontLoaded(fontFamily) {
    if ('fonts' in document) {
        try {
            await document.fonts.load(`16px "${fontFamily}"`)
        } catch (error) {
            console.warn(`Font ${fontFamily} failed to load, using fallback`)
        }
    }
}

// 组件挂载时加载示例文本
onMounted(() => {
    loadSampleText()
})
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

.form-radio {
    @apply text-blue-600 focus:ring-blue-500;
}

.form-checkbox {
    @apply text-blue-600 focus:ring-blue-500;
}

@media (max-width: 1024px) {
    .grid-cols-1.lg\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}

.preview-container {
    max-height: 1140px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 0.5rem;
    padding: 1rem;
}

.grid-cols-1.lg\:grid-cols-2 > div {
    height: fit-content;
    min-height: 800px;
}
</style>
