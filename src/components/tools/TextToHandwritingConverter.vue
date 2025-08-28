<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- 左侧：输入区域 (1/3) -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <!-- 文本输入区域 -->
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.text-to-handwriting-converter.textInput') }}
                        </label>
                        <textarea v-model="inputText" @input="generateHandwriting"
                            class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            :placeholder="$t('tools.text-to-handwriting-converter.textPlaceholder')"></textarea>
                    </div>

                    <!-- 字体选择 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.text-to-handwriting-converter.fontFamily') }}
                        </label>
                        <select v-model="settings.fontFamily" @change="generateHandwriting"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                            <option v-for="font in fontOptions" :key="font.value" :value="font.value">
                                {{ font.name }}
                            </option>
                        </select>
                    </div>

                    <!-- 字号设置 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.text-to-handwriting-converter.fontSize') }}: {{ settings.fontSize }}px
                        </label>
                        <input type="range" min="16" max="48" v-model.number="settings.fontSize"
                            @input="generateHandwriting" class="w-full" />
                        <input type="number" min="16" max="48" v-model.number="settings.fontSize"
                            @input="generateHandwriting"
                            class="mt-2 w-20 p-1 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white text-center" />
                    </div>

                    <!-- 墨水颜色 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.text-to-handwriting-converter.inkColor') }}
                        </label>
                        <div class="flex flex-wrap gap-2 mb-2">
                            <button v-for="color in inkColors" :key="color.value"
                                @click="settings.inkColor = color.value; generateHandwriting()"
                                :class="['w-8 h-8 rounded-full border-2 transition-all',
                                    settings.inkColor === color.value ? 'border-gray-800 scale-110' : 'border-gray-300']" :style="{ backgroundColor: color.value }"
                                :title="color.name">
                            </button>
                        </div>
                        <input type="color" v-model="settings.inkColor" @input="generateHandwriting"
                            class="w-12 h-8 border border-gray-300 dark:border-gray-600 rounded cursor-pointer" />
                    </div>

                    <!-- 纸张样式 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.text-to-handwriting-converter.paperStyle') }}
                        </label>
                        <select v-model="settings.paperStyle" @change="generateHandwriting"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                            <option v-for="paper in paperOptions" :key="paper.value" :value="paper.value">
                                {{ $t(`tools.text-to-handwriting-converter.${paper.key}`) }}
                            </option>
                        </select>
                    </div>

                    <!-- 行间距 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {{ $t('tools.text-to-handwriting-converter.lineHeight') }}: {{ settings.lineHeight }}
                        </label>
                        <input type="range" min="1.2" max="2.5" step="0.1" v-model.number="settings.lineHeight"
                            @input="generateHandwriting" class="w-full" />
                    </div>

                    <!-- 手写效果设置 -->
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <input type="checkbox" id="naturalShake" v-model="settings.naturalShake"
                                @change="generateHandwriting" class="mr-2">
                            <label for="naturalShake" class="text-sm text-gray-700 dark:text-gray-300">
                                {{ $t('tools.text-to-handwriting-converter.enableNaturalShake') }}
                            </label>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" id="inkTexture" v-model="settings.inkTexture"
                                @change="generateHandwriting" class="mr-2">
                            <label for="inkTexture" class="text-sm text-gray-700 dark:text-gray-300">
                                {{ $t('tools.text-to-handwriting-converter.enableInkTexture') }}
                            </label>
                        </div>

                        <!-- 墨水强度（仅当启用时显示） -->
                        <div v-if="settings.inkTexture" class="ml-6 mt-1">
                            <label class="text-xs text-gray-500">{{ $t('tools.text-to-handwriting-converter.effectIntensity') }}: {{ Math.round(settings.inkIntensity * 100) }}%</label>
                            <input type="range" min="0.5" max="1.5" step="0.1" v-model.number="settings.inkIntensity"
                                @input="generateHandwriting" class="w-full" />
                        </div>
                    </div>

                    <!-- 示例文本按钮 -->
                    <button class="btn btn-secondary w-full" @click="loadSampleText">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {{ $t('tools.text-to-handwriting-converter.loadSample') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 (2/3) -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.text-to-handwriting-converter.outputTitle') }}</h2>

                    <!-- 工具栏 -->
                    <div class="flex space-x-2">
                        <button class="btn btn-sm btn-secondary" @click="zoomOut" :disabled="zoomLevel <= 0.5">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                            </svg>
                        </button>
                        <span class="text-sm text-gray-500 flex items-center">{{ Math.round(zoomLevel * 100) }}%</span>
                        <button class="btn btn-sm btn-secondary" @click="zoomIn" :disabled="zoomLevel >= 2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </button>
                        <button class="btn btn-sm btn-secondary" @click="resetZoom">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- 预览区域 -->
                <div class="border rounded-lg overflow-hidden bg-white" style="min-height: 500px;">
                    <div ref="previewContainer" class="handwriting-preview overflow-auto" :style="{
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'top left',
                        width: `${100 / zoomLevel}%`,
                        height: `${100 / zoomLevel}%`
                    }">
                        <div v-for="(page, pageIndex) in pages" :key="pageIndex" class="page-container"
                            :class="getPaperClass()" :style="getPageStyle()">
                            <div class="page-content" :style="getContentStyle()" v-html="page">
                            </div>
                            <div v-if="pages.length > 1" class="page-number">
                                {{ pageIndex + 1 }} / {{ pages.length }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 导出选项 -->
                <div class="mt-6 space-y-4">
                    <div class="flex flex-wrap gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.text-to-handwriting-converter.exportFormat') }}
                            </label>
                            <select v-model="exportSettings.format"
                                class="p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                                <option value="png">PNG</option>
                                <option value="pdf">PDF</option>
                                <option value="jpg">JPG</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.text-to-handwriting-converter.resolution') }}
                            </label>
                            <select v-model="exportSettings.resolution"
                                class="p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                                <option value="1">72 DPI</option>
                                <option value="2">144 DPI</option>
                                <option value="3">216 DPI</option>
                            </select>
                        </div>
                    </div>

                    <!-- 导出按钮 -->
                    <div class="flex space-x-3">
                        <button class="btn btn-primary" @click="exportHandwriting" :disabled="!inputText.trim()">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.text-to-handwriting-converter.exportBtn') }}
                        </button>

                        <button class="btn btn-secondary" @click="copyToClipboard" :disabled="!inputText.trim()">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            {{ $t('tools.text-to-handwriting-converter.copyBtn') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 文章组件 -->
        <TextToHandwritingConverterArticle />
    </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import TextToHandwritingConverterArticle from './TextToHandwritingConverterArticle.vue'

const { t } = useI18n()

// 响应式数据
const inputText = ref('')
const zoomLevel = ref(1)
const previewContainer = ref(null)
const pages = ref([])

// 设置选项
const settings = reactive({
    fontFamily: "'Kalam', cursive",
    fontSize: 20,
    inkColor: '#1e40af',
    paperStyle: 'lined',
    lineHeight: 1.6,
    naturalShake: true,       // 启用自然抖动
    inkTexture: true,         // 启用墨水质感
    inkIntensity: 0.6         // 效果强度（0.5 ~ 1.5）
})

// 导出设置
const exportSettings = reactive({
    format: 'png',
    resolution: 2
})

// 字体选项
const fontOptions = [
    { name: 'Kalam', value: "'Kalam', cursive" },
    { name: 'Caveat', value: "'Caveat', cursive" },
    { name: 'Dancing Script', value: "'Dancing Script', cursive" },
    { name: 'Indie Flower', value: "'Indie Flower', cursive" },
    { name: 'Shadows Into Light', value: "'Shadows Into Light', cursive" },
    { name: 'Amatic SC', value: "'Amatic SC', cursive" },
    { name: 'Pacifico', value: "'Pacifico', cursive" },
    { name: 'Satisfy', value: "'Satisfy', cursive" },
    { name: 'Great Vibes', value: "'Great Vibes', cursive" },
    { name: 'Allura', value: "'Allura', cursive" },
    { name: 'Courgette', value: "'Courgette', cursive" },
    { name: 'Kaushan Script', value: "'Kaushan Script', cursive" }
]

// 墨水颜色选项
const inkColors = [
    { name: '蓝色', value: '#1e40af' },
    { name: '黑色', value: '#1f2937' },
    { name: '深蓝', value: '#1e3a8a' },
    { name: '绿色', value: '#059669' },
    { name: '紫色', value: '#7c3aed' },
    { name: '棕色', value: '#92400e' },
    { name: '红色', value: '#dc2626' },
    { name: '灰色', value: '#4b5563' }
]

// 纸张样式选项
const paperOptions = [
    { value: 'blank', key: 'paperBlank' },
    { value: 'lined', key: 'paperLined' },
    { value: 'grid', key: 'paperGrid' },
    { value: 'dotted', key: 'paperDotted' },
    { value: 'birthday', key: 'paperBirthday' },
    { value: 'letter', key: 'paperLetter' },
    { value: 'music', key: 'paperMusic' }
]

function loadSampleText() {
    const sampleText = 'Dear Friend,\n\tI hope this letter finds you in good health and high spirits. As I sit here writing to you, I am reminded of the beauty of handwritten communication in our digital age.\n\tThere is something magical about putting pen to paper, watching thoughts flow through ink onto the page. Each letter carries a piece of the writer\'s soul.\n\tI look forward to hearing from you soon.\n\tWith warm regards,\nYour friend'
    
    inputText.value = sampleText
    generateHandwriting()
}

// 辅助函数：调整颜色（HSL 色相偏移）
function adjustColor(hex, hueOffset) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max === min) {
        h = s = 0
    } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break
            case g: h = (b - r) / d + 2; break
            case b: h = (r - g) / d + 4; break
        }
        h /= 6
    }

    h = (h * 360 + hueOffset) % 360
    if (h < 0) h += 360

    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs((h / 60) % 2 - 1))
    const m = l - c / 2
    let r1, g1, b1

    if (h < 60) { [r1, g1, b1] = [c, x, 0] }
    else if (h < 120) { [r1, g1, b1] = [x, c, 0] }
    else if (h < 180) { [r1, g1, b1] = [0, c, x] }
    else if (h < 240) { [r1, g1, b1] = [0, x, c] }
    else if (h < 300) { [r1, g1, b1] = [x, 0, c] }
    else { [r1, g1, b1] = [c, 0, x] }

    r1 = Math.round((r1 + m) * 255)
    g1 = Math.round((g1 + m) * 255)
    b1 = Math.round((b1 + m) * 255)

    return `#${r1.toString(16).padStart(2, '0')}${g1.toString(16).padStart(2, '0')}${b1.toString(16).padStart(2, '0')}`
}

function generateHandwriting() {
    if (!inputText.value.trim()) {
        pages.value = []
        return
    }

    const text = inputText.value
    const lines = text.split('\n')
    const processedLines = []

    // 处理每一行
    lines.forEach(line => {
        if (line.trim() === '') {
            processedLines.push('<br>')
            return
        }

        let processedLine = ''
        const words = line.split(' ')

        words.forEach((word, wordIndex) => {
            if (wordIndex > 0) processedLine += ' '

            let wordStyle = ''

            // 【自然抖动】：整词轻微旋转 + 垂直偏移
            if (settings.naturalShake) {
                const rotation = (Math.random() - 0.5) * 3 * settings.inkIntensity
                const offsetY = (Math.random() - 0.5) * 1.5 * settings.inkIntensity
                wordStyle += `transform: rotate(${rotation}deg) translateY(${offsetY}px);`
            }

            // 【墨水质感】：为每个字符添加变化
            let wordContent = ''
            for (let i = 0; i < word.length; i++) {
                const char = word[i]
                let charStyle = ''

                if (settings.inkTexture) {
                    const intensity = settings.inkIntensity

                    // 1. 透明度
                    const opacity = 0.8 + Math.random() * 0.15

                    // 2. 笔压（字体粗细）
                    const fontWeight = 400 + Math.floor(Math.random() * 300) * intensity

                    // 3. 字号微调
                    const fontSize = settings.fontSize + (Math.random() - 0.5) * 1.5 * intensity

                    // 4. 颜色微偏（模拟墨水不均）
                    const hueOffset = (Math.random() - 0.5) * 10 * intensity
                    const color = adjustColor(settings.inkColor, hueOffset)

                    charStyle += `
                        opacity: ${opacity};
                        font-weight: ${fontWeight};
                        font-size: ${fontSize}px;
                        color: ${color};
                    `
                }

                wordContent += `<span style="display: inline-block; ${charStyle}">${char}</span>`
            }

            processedLine += `<span style="${wordStyle}">${wordContent}</span>`
        })

        processedLines.push(processedLine)
    })

    // 分页处理
    const linesPerPage = Math.floor(500 / (settings.fontSize * settings.lineHeight))
    const pageContent = []

    for (let i = 0; i < processedLines.length; i += linesPerPage) {
        const pageLines = processedLines.slice(i, i + linesPerPage)
        pageContent.push(pageLines.join('<br>'))
    }

    pages.value = pageContent.length > 0 ? pageContent : ['']
}

function getPaperClass() {
    return `paper-${settings.paperStyle}`
}

function getPageStyle() {
    const lineHeightInPx = settings.fontSize * settings.lineHeight
    const totalLineHeight = Math.ceil(lineHeightInPx)

    return {
        backgroundColor: '#ffffff',
        minHeight: '500px',
        padding: '40px',
        margin: '20px auto',
        maxWidth: '800px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        backgroundSize: `100% ${totalLineHeight}px`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: '0 40px'
    }
}

function getContentStyle() {
    return {
        fontFamily: settings.fontFamily,
        fontSize: `${settings.fontSize}px`,
        color: settings.inkColor,
        lineHeight: settings.lineHeight,
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap'
    }
}

// 缩放控制
function zoomIn() {
    if (zoomLevel.value < 2) {
        zoomLevel.value = Math.min(2, zoomLevel.value + 0.1)
    }
}

function zoomOut() {
    if (zoomLevel.value > 0.5) {
        zoomLevel.value = Math.max(0.5, zoomLevel.value - 0.1)
    }
}

function resetZoom() {
    zoomLevel.value = 1
}

// 导出功能
async function exportHandwriting() {
    if (!inputText.value.trim()) return

    try {
        if (exportSettings.format === 'pdf') {
            await exportToPDF()
        } else {
            await exportToImage()
        }
    } catch (error) {
        console.error('Export failed:', error)
        alert(t('tools.text-to-handwriting-converter.exportError'))
    }
}

async function exportToImage() {
    const resolution = exportSettings.resolution
    const pageElements = document.querySelectorAll('.page-container')

    if (pageElements.length === 1) {
        const canvas = await html2canvas(pageElements[0], {
            scale: resolution,
            backgroundColor: '#ffffff',
            useCORS: true,
            allowTaint: true
        })

        const link = document.createElement('a')
        link.download = `handwriting.${exportSettings.format}`
        link.href = canvas.toDataURL(`image/${exportSettings.format}`, 0.9)
        link.click()
    } else {
        for (let i = 0; i < pageElements.length; i++) {
            const canvas = await html2canvas(pageElements[i], {
                scale: resolution,
                backgroundColor: '#ffffff',
                useCORS: true,
                allowTaint: true
            })

            const link = document.createElement('a')
            link.download = `handwriting_page_${i + 1}.${exportSettings.format}`
            link.href = canvas.toDataURL(`image/${exportSettings.format}`, 0.9)
            link.click()
            await new Promise(resolve => setTimeout(resolve, 500))
        }
    }
}

async function exportToPDF() {
    const resolution = exportSettings.resolution
    const pageElements = document.querySelectorAll('.page-container')

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    })

    for (let i = 0; i < pageElements.length; i++) {
        if (i > 0) pdf.addPage()
        const canvas = await html2canvas(pageElements[i], {
            scale: resolution,
            backgroundColor: '#ffffff',
            useCORS: true,
            allowTaint: true
        })
        const imgData = canvas.toDataURL('image/png')
        const imgWidth = 210
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, Math.min(imgHeight, 295))
    }

    pdf.save('handwriting.pdf')
}

async function copyToClipboard() {
    try {
        const container = previewContainer.value
        const canvas = await html2canvas(container, {
            backgroundColor: '#ffffff',
            useCORS: true,
            allowTaint: true
        })

        canvas.toBlob(async (blob) => {
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ])
                alert(t('tools.text-to-handwriting-converter.copySuccess'))
            } catch (error) {
                console.error('Copy failed:', error)
                alert(t('tools.text-to-handwriting-converter.copyError'))
            }
        })
    } catch (error) {
        console.error('Copy failed:', error)
        alert(t('tools.text-to-handwriting-converter.copyError'))
    }
}

onMounted(() => {
    nextTick(() => {
        loadSampleText()
    })
})
</script>

<style scoped>
/* 按钮样式 */
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
    @apply bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

/* 预览容器样式 */
.handwriting-preview {
    min-height: 500px;
    max-height: 600px;
}

/* 页面容器样式 */
.page-container {
    position: relative;
    background: white;
    border-radius: 8px;
}

/* 纸张样式 */
.paper-blank {
    background: #ffffff;
}

.paper-lined {
    background-image: repeating-linear-gradient(to bottom, #e5e7eb 0px, #e5e7eb 1px, transparent 1px, transparent 25px);
}

.paper-grid {
    background-image: 
        repeating-linear-gradient(0deg, #e5e7eb, #e5e7eb 1px, transparent 1px, transparent 25px),
        repeating-linear-gradient(90deg, #e5e7eb, #e5e7eb 1px, transparent 1px, transparent 25px);
}

.paper-dotted {
    background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
    background-size: 25px 25px;
}

.paper-birthday {
    background: linear-gradient(45deg, #fef3c7 25%, transparent 25%),
        linear-gradient(-45deg, #fef3c7 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #fef3c7 75%),
        linear-gradient(-45deg, transparent 75%, #fef3c7 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    background-color: #fffbeb;
}

.paper-letter {
    background: #f8fafc;
    background-image:
        repeating-linear-gradient(transparent, transparent 29px, #e2e8f0 29px, #e2e8f0 30px),
        linear-gradient(90deg, #ef4444 0px, #ef4444 2px, transparent 2px);
    padding-left: 60px;
}

.paper-music {
    background: #ffffff;
    background-image: repeating-linear-gradient(transparent,
            transparent 19px, #1f2937 19px, #1f2937 20px,
            transparent 20px, transparent 39px, #1f2937 39px, #1f2937 40px,
            transparent 40px, transparent 59px, #1f2937 59px, #1f2937 60px,
            transparent 60px, transparent 79px, #1f2937 79px, #1f2937 80px);
}

/* 页码样式 */
.page-number {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 12px;
    color: #6b7280;
    background: rgba(255, 255, 255, 0.8);
    padding: 4px 8px;
    border-radius: 4px;
}

/* 页面内容样式 */
.page-content {
    position: relative;
    z-index: 1;
}

/* 响应式调整 */
@media (max-width: 1024px) {
    .grid-cols-1.lg\\:grid-cols-3 {
        grid-template-columns: 1fr;
    }

    .lg\\:col-span-2 {
        grid-column: span 1;
    }
}

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .handwriting-preview {
        max-height: 400px;
    }
}

/* 加载Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Indie+Flower&family=Shadows+Into+Light&family=Amatic+SC:wght@400;700&family=Pacifico&family=Satisfy&family=Great+Vibes&family=Allura&family=Courgette&family=Kaushan+Script&display=swap');
</style>