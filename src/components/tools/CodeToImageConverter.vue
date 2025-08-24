<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.code-to-image-converter.inputTitle') }}</h2>

                <!-- 代码输入区域 -->
                <div class="space-y-4">
                    <!-- 语言选择 -->
                    <!-- 语言选择和文件名 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.language') }}
                            </label>
                            <select v-model="settings.language" @change="handleLanguageChange"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                                <option v-for="lang in languages" :key="lang.value" :value="lang.value">
                                    {{ lang.label }}
                                </option>
                            </select>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.fileName') }}
                            </label>
                            <input type="text" v-model="settings.fileName" @input="handleRealTimePreview"
                                :placeholder="$t('tools.code-to-image-converter.fileNamePlaceholder')"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                        </div>
                    </div>

                    <!-- 代码编辑器 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.code-to-image-converter.codeInput') }}
                        </label>
                        <div class="relative">
                            <textarea v-model="codeInput"
                                :placeholder="$t('tools.code-to-image-converter.codePlaceholder')"
                                class="w-full h-64 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none"
                                @input="handleRealTimePreview"></textarea>
                        </div>
                    </div>

                    <!-- 示例代码按钮和转换按钮 -->
                    <div class="flex gap-2">
                        <button class="btn btn-secondary flex-1" @click="loadSampleCode">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            {{ $t('tools.code-to-image-converter.loadSample') }}
                        </button>
                        <button class="btn btn-primary flex-1" @click="convertToImage" :disabled="!codeInput.trim()">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {{ $t('tools.code-to-image-converter.convertBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 样式设置 -->
                <div class="mt-6 space-y-4">
                    <h3 class="text-lg font-semibold">{{ $t('tools.code-to-image-converter.styleSettings') }}</h3>

                    <!-- 主题选择 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.theme') }}
                            </label>
                            <select v-model="settings.theme" @change="handleRealTimePreview"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
                                <option v-for="theme in themes" :key="theme.value" :value="theme.value">
                                    {{ theme.label }}
                                </option>
                            </select>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.fontFamily') }}
                            </label>
                            <select v-model="settings.fontFamily" @change="handleRealTimePreview"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
                                <option v-for="font in fonts" :key="font.value" :value="font.value">
                                    {{ font.label }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- 字体大小和Tab大小 -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.fontSize') }}: {{ settings.fontSize }}px
                            </label>
                            <input type="range" min="12" max="24" v-model.number="settings.fontSize"
                                @input="handleRealTimePreview" class="w-full" />
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.tabSize') }}: {{ settings.tabSize }}
                            </label>
                            <input type="range" min="2" max="8" v-model.number="settings.tabSize"
                                @input="handleRealTimePreview" class="w-full" />
                        </div>
                    </div>

                    <!-- 背景设置 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.code-to-image-converter.background') }}
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.backgroundType" value="solid"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.code-to-image-converter.solidColor') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.backgroundType" value="gradient"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.code-to-image-converter.gradient') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.backgroundType" value="image"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.code-to-image-converter.backgroundImage') }}</span>
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
                            <span class="text-sm">{{ $t('tools.code-to-image-converter.to') }}</span>
                            <input type="color" v-model="settings.gradientEnd" @change="handleRealTimePreview"
                                class="w-12 h-8 border border-gray-300 rounded">
                        </div>

                        <!-- 背景图片上传 -->
                        <div v-if="settings.backgroundType === 'image'" class="space-y-2">
                            <input type="file" ref="backgroundImageInput" accept="image/*"
                                @change="handleBackgroundImageUpload"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
                            <div class="flex items-center space-x-2">
                                <label class="text-sm">{{ $t('tools.code-to-image-converter.backgroundOpacity')
                                }}:</label>
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
                                <span class="text-sm font-medium">{{ $t('tools.code-to-image-converter.shadow')
                                }}</span>
                            </label>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.padding') }}: {{ settings.padding }}px
                            </label>
                            <input type="range" min="20" max="80" v-model.number="settings.padding"
                                @input="handleRealTimePreview" class="w-full" />
                        </div>
                    </div>

                    <!-- 水印设置 -->
                    <!-- 布局模式和行号 -->
                    <div class="space-y-3">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ $t('tools.code-to-image-converter.layoutMode') }}
                            </label>
                            <div class="flex flex-wrap gap-2">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="settings.layoutMode" value="wide"
                                        @change="handleRealTimePreview" class="form-radio">
                                    <span>{{ $t('tools.code-to-image-converter.wide') }}</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="settings.layoutMode" value="compact"
                                        @change="handleRealTimePreview" class="form-radio">
                                    <span>{{ $t('tools.code-to-image-converter.compact') }}</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="settings.layoutMode" value="square"
                                        @change="handleRealTimePreview" class="form-radio">
                                    <span>{{ $t('tools.code-to-image-converter.square') }}</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="settings.layoutMode" value="fullscreen"
                                        @change="handleRealTimePreview" class="form-radio">
                                    <span>{{ $t('tools.code-to-image-converter.fullscreen') }}</span>
                                </label>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" v-model="settings.showLineNumbers"
                                    @change="handleRealTimePreview" class="form-checkbox">
                                <span class="text-sm font-medium">{{ $t('tools.code-to-image-converter.showLineNumbers')
                                }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- 水印设置 -->
                    <div class="space-y-2">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="settings.showWatermark" @change="handleRealTimePreview"
                                class="form-checkbox">
                            <span class="text-sm font-medium">{{ $t('tools.code-to-image-converter.watermark') }}</span>
                        </label>

                        <div v-if="settings.showWatermark" class="space-y-3 ml-6">
                            <!-- 水印类型 -->
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.code-to-image-converter.watermarkType') }}
                                </label>
                                <div class="flex gap-4">
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="settings.watermarkType" value="text"
                                            @change="handleRealTimePreview" class="form-radio">
                                        <span>{{ $t('tools.code-to-image-converter.textOnly') }}</span>
                                    </label>
                                    <label class="flex items-center space-x-2">
                                        <input type="radio" v-model="settings.watermarkType" value="textWithAvatar"
                                            @change="handleRealTimePreview" class="form-radio">
                                        <span>{{ $t('tools.code-to-image-converter.textWithAvatar') }}</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 水印文本 -->
                            <input type="text" v-model="settings.watermarkText" @input="handleRealTimePreview"
                                :placeholder="$t('tools.code-to-image-converter.watermarkText')"
                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">

                            <!-- 头像上传 -->
                            <div v-if="settings.watermarkType === 'textWithAvatar'" class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ $t('tools.code-to-image-converter.uploadAvatar') }}
                                </label>
                                <input type="file" ref="avatarInput" accept="image/*" @change="handleAvatarUpload"
                                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
                            </div>

                            <div class="flex items-center space-x-4">
                                <select v-model="settings.watermarkPosition" @change="handleRealTimePreview"
                                    class="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700">
                                    <option value="bottom-right">{{ $t('tools.code-to-image-converter.bottomRight') }}
                                    </option>
                                    <option value="bottom-left">{{ $t('tools.code-to-image-converter.bottomLeft') }}
                                    </option>
                                    <option value="top-right">{{ $t('tools.code-to-image-converter.topRight') }}
                                    </option>
                                    <option value="top-left">{{ $t('tools.code-to-image-converter.topLeft') }}</option>
                                </select>

                                <input type="color" v-model="settings.watermarkColor" @change="handleRealTimePreview"
                                    class="w-8 h-6 border border-gray-300 rounded">
                            </div>
                        </div>
                    </div>

                    <!-- 图片质量 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.code-to-image-converter.qualityLevel') }}
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.qualityLevel" value="standard"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.code-to-image-converter.standard') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.qualityLevel" value="high"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.code-to-image-converter.high') }}</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" v-model="settings.qualityLevel" value="ultra"
                                    @change="handleRealTimePreview" class="form-radio">
                                <span>{{ $t('tools.code-to-image-converter.ultra') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- 实时预览开关 -->
                    <div class="space-y-2">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="settings.realTimePreview"
                                @change="handleRealTimePreviewToggle" class="form-checkbox">
                            <span class="text-sm font-medium">{{ $t('tools.code-to-image-converter.realTimePreview')
                            }}</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.code-to-image-converter.outputTitle') }}</h2>
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
                            {{ $t('tools.code-to-image-converter.downloadBtn') }}
                        </button>
                    </div>
                </div>
                <!-- 导出选项 -->
                <div class="space-y-4 mt-6">
                    <div class="flex items-center justify-between">
                        <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.code-to-image-converter.exportFormat') }}
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
                            {{ $t('tools.code-to-image-converter.imageQuality') }}: {{ Math.round(imageQuality *
                                100) }}%
                        </label>
                        <input type="range" min="0.5" max="1" step="0.01" v-model.number="imageQuality"
                            class="w-full" />
                    </div>
                </div>

                <!-- ✅ Wrap both preview and export options under the same condition -->
                <div class="preview-container overflow-auto" style="height: calc(100vh - 200px);">
                    <canvas ref="previewCanvas" class="w-full border rounded"></canvas>
                </div>

            </div>
        </div>
    </div>

    <!-- 全屏预览模态框 -->
    <div v-if="showFullscreenModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        @click="closeFullscreen">
        <div class="max-w-[90vw] max-h-[90vh] p-4">
            <canvas ref="fullscreenCanvas" class="max-w-full max-h-full"></canvas>
            <button @click="closeFullscreen" class="absolute top-4 right-4 text-white hover:text-gray-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>

    <CodeToImageConverterArticle />
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeToImageConverterArticle from './CodeToImageConverterArticle.vue'

const { t } = useI18n()

const previewCanvas = ref(null)
const codeInput = ref('')
const generatedImage = ref(null)
const exportFormat = ref('png')
const imageQuality = ref(0.92)

// 设置选项
const settings = reactive({
    language: 'javascript',
    fileName: '',
    theme: 'dark',
    fontFamily: 'Fira Code',
    fontSize: 16,
    tabSize: 4,
    layoutMode: 'wide',
    showLineNumbers: true,
    backgroundType: 'solid',
    backgroundColor: '#1a1a1a',
    gradientStart: '#667eea',
    gradientEnd: '#764ba2',
    backgroundOpacity: 0.8,
    showShadow: true,
    padding: 40,
    showWatermark: false,
    watermarkText: 'ufreetools.com',
    watermarkType: 'text',
    watermarkPosition: 'bottom-right',
    watermarkColor: '#ffffff',
    qualityLevel: 'high',
    realTimePreview: true
})

const avatarImage = ref(null)
const showFullscreenModal = ref(false)
const avatarInput = ref(null)
const fullscreenCanvas = ref(null)
const backgroundImageInput = ref(null)
const backgroundImage = ref(null)

// Preview zoom and pan variables
const previewZoom = ref(1)
const panX = ref(0)
const panY = ref(0)
const isPanning = ref(false)
const lastPanPoint = ref({ x: 0, y: 0 })

// 支持的编程语言
const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'c', label: 'C' },
    { value: 'csharp', label: 'C#' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'scss', label: 'SCSS' },
    { value: 'json', label: 'JSON' },
    { value: 'xml', label: 'XML' },
    { value: 'yaml', label: 'YAML' },
    { value: 'sql', label: 'SQL' },
    { value: 'bash', label: 'Bash' },
    { value: 'powershell', label: 'PowerShell' }
]

// 主题选项
const themes = [
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
    { value: 'monokai', label: 'Monokai' },
    { value: 'github', label: 'GitHub' },
    { value: 'dracula', label: 'Dracula' },
    { value: 'nord', label: 'Nord' },
    { value: 'solarized-dark', label: 'Solarized Dark' },
    { value: 'solarized-light', label: 'Solarized Light' },
    { value: 'atom-one-dark', label: 'Atom One Dark' },
    { value: 'atom-one-light', label: 'Atom One Light' },
    { value: 'material-dark', label: 'Material Dark' },
    { value: 'material-light', label: 'Material Light' },
    { value: 'cobalt', label: 'Cobalt' },
    { value: 'tomorrow-night', label: 'Tomorrow Night' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'oceanic-next', label: 'Oceanic Next' }
]

// 字体选项
const fonts = [
    { value: 'Fira Code', label: 'Fira Code' },
    { value: 'Monaco', label: 'Monaco' },
    { value: 'Consolas', label: 'Consolas' },
    { value: 'Source Code Pro', label: 'Source Code Pro' },
    { value: 'JetBrains Mono', label: 'JetBrains Mono' },
    { value: 'Cascadia Code', label: 'Cascadia Code' },
    { value: 'SF Mono', label: 'SF Mono' },
    { value: 'Ubuntu Mono', label: 'Ubuntu Mono' },
    { value: 'Roboto Mono', label: 'Roboto Mono' },
    { value: 'Hack', label: 'Hack' },
    { value: 'Inconsolata', label: 'Inconsolata' },
    { value: 'DejaVu Sans Mono', label: 'DejaVu Sans Mono' },
    { value: 'Courier New', label: 'Courier New' },
    { value: 'Menlo', label: 'Menlo' },
    { value: 'Anonymous Pro', label: 'Anonymous Pro' },
    { value: 'IBM Plex Mono', label: 'IBM Plex Mono' }
]

// 获取示例代码
const sampleCodes = {
    javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(\`fibonacci(\${i}) = \${fibonacci(i)}\`);
}`,

    typescript: `interface User {
  id: number;
  name: string;
  email: string;
}

function createUser(name: string, email: string): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email
  };
}

const user = createUser("John Doe", "john@example.com");
console.log(user);`,

    python: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")`,

    java: `public class Fibonacci {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.println("fibonacci(" + i + ") = " + fibonacci(i));
        }
    }
}`,

    cpp: `#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    for (int i = 0; i < 10; i++) {
        cout << "fibonacci(" << i << ") = " << fibonacci(i) << endl;
    }
    return 0;
}`
}

// 语法高亮颜色方案
const colorSchemes = {
    dark: {
        background: '#1a1a1a',
        text: '#f8f8f2',
        comment: '#6272a4',
        keyword: '#ff79c6',
        string: '#f1fa8c',
        number: '#bd93f9',
        function: '#50fa7b',
        operator: '#ff79c6'
    },
    light: {
        background: '#ffffff',
        text: '#24292e',
        comment: '#6a737d',
        keyword: '#d73a49',
        string: '#032f62',
        number: '#005cc5',
        function: '#6f42c1',
        operator: '#d73a49'
    },
    monokai: {
        background: '#272822',
        text: '#f8f8f2',
        comment: '#75715e',
        keyword: '#f92672',
        string: '#e6db74',
        number: '#ae81ff',
        function: '#a6e22e',
        operator: '#f92672'
    },
    github: {
        background: '#f6f8fa',
        text: '#24292e',
        comment: '#6a737d',
        keyword: '#d73a49',
        string: '#032f62',
        number: '#005cc5',
        function: '#6f42c1',
        operator: '#d73a49'
    },
    dracula: {
        background: '#282a36',
        text: '#f8f8f2',
        comment: '#6272a4',
        keyword: '#ff79c6',
        string: '#f1fa8c',
        number: '#bd93f9',
        function: '#50fa7b',
        operator: '#ff79c6'
    },
    nord: {
        background: '#2e3440',
        text: '#d8dee9',
        comment: '#616e88',
        keyword: '#81a1c1',
        string: '#a3be8c',
        number: '#b48ead',
        function: '#88c0d0',
        operator: '#81a1c1'
    },
    'solarized-dark': {
        background: '#002b36',
        text: '#839496',
        comment: '#586e75',
        keyword: '#268bd2',
        string: '#2aa198',
        number: '#d33682',
        function: '#b58900',
        operator: '#268bd2'
    },
    'solarized-light': {
        background: '#fdf6e3',
        text: '#657b83',
        comment: '#93a1a1',
        keyword: '#268bd2',
        string: '#2aa198',
        number: '#d33682',
        function: '#b58900',
        operator: '#268bd2'
    },
    'atom-one-dark': {
        background: '#282c34',
        text: '#abb2bf',
        comment: '#5c6370',
        keyword: '#c678dd',
        string: '#98c379',
        number: '#d19a66',
        function: '#61afef',
        operator: '#56b6c2'
    },
    'atom-one-light': {
        background: '#fafafa',
        text: '#383a42',
        comment: '#a0a1a7',
        keyword: '#a626a4',
        string: '#50a14f',
        number: '#986801',
        function: '#4078f2',
        operator: '#0184bc'
    },
    'material-dark': {
        background: '#263238',
        text: '#eeffff',
        comment: '#546e7a',
        keyword: '#c792ea',
        string: '#c3e88d',
        number: '#f78c6c',
        function: '#82aaff',
        operator: '#89ddff'
    },
    'material-light': {
        background: '#fafafa',
        text: '#90a4ae',
        comment: '#aabfc9',
        keyword: '#9c27b0',
        string: '#91b859',
        number: '#f76d47',
        function: '#6182b8',
        operator: '#39adb5'
    },
    'cobalt': {
        background: '#002240',
        text: '#ffffff',
        comment: '#0088ff',
        keyword: '#ff9d00',
        string: '#3ad900',
        number: '#ff628c',
        function: '#ffee80',
        operator: '#ff9d00'
    },
    'tomorrow-night': {
        background: '#1d1f21',
        text: '#c5c8c6',
        comment: '#969896',
        keyword: '#b294bb',
        string: '#b5bd68',
        number: '#de935f',
        function: '#81a2be',
        operator: '#8abeb7'
    },
    'tomorrow': {
        background: '#ffffff',
        text: '#4d4d4c',
        comment: '#8e908c',
        keyword: '#8959a8',
        string: '#718c00',
        number: '#f5871f',
        function: '#4271ae',
        operator: '#3e999f'
    },
    'oceanic-next': {
        background: '#1b2b34',
        text: '#d8dee9',
        comment: '#65737e',
        keyword: '#c594c5',
        string: '#99c794',
        number: '#f99157',
        function: '#6699cc',
        operator: '#5fb3b3'
    }
}

// 加载示例代码
function loadSampleCode() {
    codeInput.value = sampleCodes[settings.language] || sampleCodes.javascript || 'console.log("Hello, World!");'
    generatePreview()
}

// 转换为图片
async function convertToImage() {
    if (!codeInput.value.trim()) {
        return
    }
    await generatePreview()
}

// 处理语言变化
function handleLanguageChange() {
    loadSampleCode()
    if (settings.realTimePreview) {
        generatePreview()
    }
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

// 预览缩放功能
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
    panX.value = 0
    panY.value = 0
    updateCanvasTransform()
}

function updateCanvasTransform() {
    if (previewCanvas.value) {
        previewCanvas.value.style.transform =
            `scale(${previewZoom.value}) translate(${panX.value}px, ${panY.value}px)`
        previewCanvas.value.style.transformOrigin = 'top left'
    }
}

// 预览拖拽功能
function startPan(event) {
    if (previewZoom.value > 1) {
        isPanning.value = true
        lastPanPoint.value = { x: event.clientX, y: event.clientY }
        event.preventDefault()
    }
}

function handlePan(event) {
    if (isPanning.value && previewZoom.value > 1) {
        const deltaX = event.clientX - lastPanPoint.value.x
        const deltaY = event.clientY - lastPanPoint.value.y

        panX.value += deltaX / previewZoom.value
        panY.value += deltaY / previewZoom.value

        lastPanPoint.value = { x: event.clientX, y: event.clientY }
        event.preventDefault()
    }
}

function endPan() {
    isPanning.value = false
}

// 鼠标滚轮缩放
function handleWheel(event) {
    event.preventDefault()
    const delta = event.deltaY > 0 ? -0.1 : 0.1
    const newZoom = Math.max(0.25, Math.min(3, previewZoom.value + delta))
    previewZoom.value = newZoom
}

// 简单的语法高亮
function highlightCode(code, language) {
    const scheme = colorSchemes[settings.theme] || colorSchemes.dark

    // 基本的语法高亮规则
    const rules = {
        comment: /\/\/.*$|\/\*[\s\S]*?\*\/|#.*$/gm,
        string: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`/g,
        number: /\b\d+\.?\d*\b/g,
        keyword: /\b(function|const|let|var|if|else|for|while|return|class|import|export|from|async|await|try|catch|finally|throw|new|this|super|extends|implements|interface|type|enum|public|private|protected|static|abstract|readonly|namespace|module|declare|as|is|in|of|typeof|instanceof|void|null|undefined|true|false|break|continue|switch|case|default|do|with|delete|yield|debugger)\b/g,
        function: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/g,
        operator: /[+\-*/%=<>!&|^~?:;,.\[\]{}()]/g
    }

    let highlightedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

    // 应用语法高亮
    highlightedCode = highlightedCode
        .replace(rules.comment, `<span style="color: ${scheme.comment}">$&</span>`)
        .replace(rules.string, `<span style="color: ${scheme.string}">$&</span>`)
        .replace(rules.number, `<span style="color: ${scheme.number}">$&</span>`)
        .replace(rules.keyword, `<span style="color: ${scheme.keyword}">$&</span>`)
        .replace(rules.function, `<span style="color: ${scheme.function}">$&</span>`)
        .replace(rules.operator, `<span style="color: ${scheme.operator}">$&</span>`)

    return highlightedCode
}

// 生成预览图像
async function generatePreview() {
    if (!codeInput.value.trim()) {
        generatedImage.value = null
        return
    }

    // ✅ Wait for font to load
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
    ctx.font = `${fontSize}px ${settings.fontFamily}, monospace`

    // 处理代码（替换tab为空格）
    const processedCode = codeInput.value.replace(/\t/g, ' '.repeat(settings.tabSize))
    const lines = processedCode.split('\n')

    // 计算尺寸
    const lineHeight = fontSize * 1.4
    const lineNumberWidth = settings.showLineNumbers ? ctx.measureText(lines.length.toString()).width + 20 * scale : 0
    const maxWidth = Math.max(...lines.map(line => ctx.measureText(line).width))

    // 根据布局模式调整尺寸
    let contentWidth, contentHeight
    switch (settings.layoutMode) {
        case 'wide':
            contentWidth = Math.max(800 * scale, maxWidth + lineNumberWidth + settings.padding * 2 * scale)
            contentHeight = lines.length * lineHeight + settings.padding * 2 * scale
            break
        case 'compact':
            contentWidth = maxWidth + lineNumberWidth + settings.padding * 2 * scale
            contentHeight = lines.length * lineHeight + settings.padding * 2 * scale
            break
        case 'square':
            const size = Math.max(maxWidth + lineNumberWidth + settings.padding * 2 * scale, lines.length * lineHeight + settings.padding * 2 * scale)
            contentWidth = contentHeight = size
            break
        case 'fullscreen':
            contentWidth = 1920 * scale
            contentHeight = 1080 * scale
            break
    }

    // 设置画布尺寸
    canvas.width = contentWidth
    canvas.height = contentHeight

    // 重新设置字体（画布尺寸改变后需要重新设置）
    ctx.font = `${fontSize}px ${settings.fontFamily}, monospace`
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
        // 绘制背景图片
        ctx.globalAlpha = settings.backgroundOpacity
        ctx.drawImage(backgroundImage.value, 0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 1

        // 添加半透明覆盖层以提高代码可读性
        const scheme = colorSchemes[settings.theme] || colorSchemes.dark
        ctx.fillStyle = scheme.background
        ctx.globalAlpha = 0.8
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 1
    } else {
        // 默认渐变背景
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, settings.gradientStart)
        gradient.addColorStop(1, settings.gradientEnd)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // 计算实际边距（包含文件名标题栏）
    let actualPadding = settings.padding * scale
    let titleHeight = 0

    // 添加文件名标题栏
    if (settings.fileName) {
        titleHeight = 40 * scale
        const scheme = colorSchemes[settings.theme] || colorSchemes.dark

        // 绘制标题栏背景
        ctx.fillStyle = scheme.background === '#ffffff' ? '#f6f8fa' : '#2d3748'
        ctx.fillRect(actualPadding, actualPadding, canvas.width - actualPadding * 2, titleHeight)

        // 绘制文件名
        ctx.fillStyle = scheme.text
        ctx.font = `${fontSize * 0.8}px ${settings.fontFamily}, sans-serif`
        ctx.fillText(settings.fileName, actualPadding + 10 * scale, actualPadding + 12 * scale)

        // 调整代码起始位置
        actualPadding += titleHeight
    }

    // 添加阴影效果
    if (settings.showShadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 20 * scale
        ctx.shadowOffsetX = 5 * scale
        ctx.shadowOffsetY = 5 * scale
    }

    // 绘制代码
    const scheme = colorSchemes[settings.theme] || colorSchemes.dark

    lines.forEach((line, index) => {
        const y = actualPadding + index * lineHeight

        // 绘制行号
        if (settings.showLineNumbers) {
            ctx.fillStyle = scheme.comment
            ctx.font = `${fontSize}px ${settings.fontFamily}, monospace`
            const lineNumber = (index + 1).toString().padStart(lines.length.toString().length, ' ')
            ctx.fillText(lineNumber, actualPadding, y)
        }

        // 绘制代码行
        const codeX = actualPadding + lineNumberWidth

        // 简单的语法高亮
        if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
            ctx.fillStyle = scheme.comment
        } else if (line.includes('"') || line.includes("'") || line.includes('`')) {
            ctx.fillStyle = scheme.string
        } else if (/\b(function|const|let|var|if|else|for|while|return|class|import|export)\b/.test(line)) {
            ctx.fillStyle = scheme.keyword
        } else {
            ctx.fillStyle = scheme.text
        }

        ctx.fillText(line, codeX, y)
    })

    // 重置阴影
    ctx.shadowColor = 'transparent'
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    // 添加水印
    if (settings.showWatermark && settings.watermarkText) {
        const watermarkFontSize = Math.max(12, fontSize * 0.6)
        ctx.font = `${watermarkFontSize}px ${settings.fontFamily}, sans-serif`
        ctx.fillStyle = settings.watermarkColor
        ctx.globalAlpha = 0.7

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

        // 绘制头像（如果有）
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
    link.download = `code-image.${exportFormat.value}`
    link.href = dataUrl
    link.click()
}

// 全屏预览
function previewFullscreen() {
    showFullscreenModal.value = true
    nextTick(() => {
        if (fullscreenCanvas.value && previewCanvas.value) {
            const ctx = fullscreenCanvas.value.getContext('2d')
            fullscreenCanvas.value.width = previewCanvas.value.width
            fullscreenCanvas.value.height = previewCanvas.value.height
            ctx.drawImage(previewCanvas.value, 0, 0)
        }
    })
}

async function ensureFontLoaded(fontFamily) {
    if ('fonts' in document) {
        try {
            await document.fonts.load(`16px "${fontFamily}"`)
        } catch (error) {
            console.warn(`Font ${fontFamily} failed to load, using fallback`)
        }
    }
}

// 关闭全屏
function closeFullscreen() {
    showFullscreenModal.value = false
}

// 组件挂载时加载示例代码
onMounted(() => {
    loadSampleCode()
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

/* 响应式调整 */
@media (max-width: 1024px) {
    .grid-cols-1.lg\\:grid-cols-2 {
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
    max-height: 1140;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 0.5rem;
    padding: 1rem;
}

/* 确保左右两侧高度一致 */
.grid-cols-1.lg\\:grid-cols-2>div {
    height: fit-content;
    min-height: 800px;
    /* 设置最小高度 */
}
</style>
