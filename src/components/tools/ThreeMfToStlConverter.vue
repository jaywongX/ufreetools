<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.3mf-to-stl-converter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop"
                    @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false"
                    @click="fileInput?.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept=".3mf"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.3mf-to-stl-converter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.3mf-to-stl-converter.supported') }}</span>
                </div>

                <!-- 文件列表 -->
                <div v-if="threeMfFiles.length" class="mt-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-medium">
                            {{ $t('tools.3mf-to-stl-converter.fileList') }} ({{ threeMfFiles.length }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearFiles">
                            {{ $t('tools.3mf-to-stl-converter.clearAll') }}
                        </button>
                    </div>
                    <div class="space-y-2 max-h-[300px] overflow-y-auto p-1">
                        <div v-for="(file, idx) in threeMfFiles" :key="idx"
                            class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div class="flex items-center space-x-3">
                                <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <div>
                                    <p class="text-sm font-medium">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                </div>
                            </div>
                            <button class="text-red-500 hover:text-red-600" @click="removeFile(idx)">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 转换设置 -->
                <div class="mt-6">
                    <h3 class="font-semibold mb-2">{{ $t('tools.3mf-to-stl-converter.settingsTitle') }}</h3>

                    <!-- 模型名称 -->
                    <div class="mb-4">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.3mf-to-stl-converter.modelNameLabel') }}
                        </label>
                        <input type="text" v-model="modelName"
                            :placeholder="$t('tools.3mf-to-stl-converter.modelNamePlaceholder')"
                            class="w-full px-3 py-2 border rounded text-sm dark:bg-gray-700 dark:border-gray-600" />
                    </div>

                    <!-- 输出格式 -->
                    <div class="mb-4">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.3mf-to-stl-converter.outputFormat') }}
                        </label>
                        <select v-model="outputFormat"
                            class="w-full px-3 py-2 border rounded text-sm dark:bg-gray-700 dark:border-gray-600">
                            <option value="binary">{{ $t('tools.3mf-to-stl-converter.outputFormatBinary') }}</option>
                            <option value="ascii">{{ $t('tools.3mf-to-stl-converter.outputFormatAscii') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-6"
                    :disabled="!threeMfFiles.length || isConverting"
                    @click="convertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="!isConverting">
                        {{ threeMfFiles.length > 1 ? $t('tools.3mf-to-stl-converter.convertBtn') + ` (${threeMfFiles.length})` : $t('tools.3mf-to-stl-converter.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.3mf-to-stl-converter.converting') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.3mf-to-stl-converter.tipsTitle') }}</h4>
                    <p>{{ $t('tools.3mf-to-stl-converter.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.3mf-to-stl-converter.outputTitle') }}</h2>
                    <button v-if="convertedFiles.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.3mf-to-stl-converter.batchDownload') }}
                    </button>
                </div>

                <div v-if="convertedFiles.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                    <div v-for="(file, idx) in convertedFiles" :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <!-- 转换信息 -->
                        <div class="mb-4">
                            <div class="flex items-center space-x-3 mb-3">
                                <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <div>
                                    <p class="font-medium">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">
                                        {{ formatFileSize(file.size) }}
                                    </p>
                                </div>
                            </div>

                            <!-- 文件对比 -->
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                                    <p class="text-xs text-gray-500 mb-1">{{ $t('tools.3mf-to-stl-converter.originalFile') }}</p>
                                    <p class="font-medium">{{ file.originalName }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.originalSize) }}</p>
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                                    <p class="text-xs text-gray-500 mb-1">{{ $t('tools.3mf-to-stl-converter.convertedFile') }}</p>
                                    <p class="font-medium">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                </div>
                            </div>

                            <!-- 模型信息 -->
                            <div v-if="file.triangleCount" class="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <p>{{ $t('tools.3mf-to-stl-converter.triangleCount') }}: {{ file.triangleCount.toLocaleString() }}</p>
                                <p>{{ $t('tools.3mf-to-stl-converter.vertexCount') }}: {{ (file.triangleCount * 3).toLocaleString() }}</p>
                            </div>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.3mf-to-stl-converter.downloadBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.3mf-to-stl-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <ThreeMfToStlConverterArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import ThreeMfToStlConverterArticle from './ThreeMfToStlConverterArticle.vue'
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

const fileInput = ref(null)
const threeMfFiles = ref([])
const convertedFiles = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })

// 设置
const modelName = ref('')
const outputFormat = ref('binary')

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer?.files || [])
    files.forEach(file => {
        if (!file.name.toLowerCase().endsWith('.3mf')) return
        threeMfFiles.value.push(file)
    })
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
}

function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

function clearFiles() {
    threeMfFiles.value = []
    convertedFiles.value.forEach(f => URL.revokeObjectURL(f.url))
    convertedFiles.value = []
}

function removeFile(idx) {
    threeMfFiles.value.splice(idx, 1)
    if (convertedFiles.value[idx]) {
        URL.revokeObjectURL(convertedFiles.value[idx].url)
        convertedFiles.value.splice(idx, 1)
    }
}

// 解析3MF文件（ZIP格式）
async function parseThreeMf(file) {
    return new Promise(async (resolve, reject) => {
        try {
            const zip = await JSZip.loadAsync(file)
            const modelFile = zip.file('3D/3dmodel.model')

            if (!modelFile) {
                reject(new Error(t('tools.3mf-to-stl-converter.parseError')))
                return
            }

            const modelXml = await modelFile.async('text')
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(modelXml, 'text/xml')

            // 解析顶点
            const vertices = []
            const vertexElements = xmlDoc.querySelectorAll('vertex')
            vertexElements.forEach(vertex => {
                vertices.push([
                    parseFloat(vertex.getAttribute('x')),
                    parseFloat(vertex.getAttribute('y')),
                    parseFloat(vertex.getAttribute('z'))
                ])
            })

            // 解析三角形
            const triangles = []
            const triangleElements = xmlDoc.querySelectorAll('triangle')
            triangleElements.forEach(triangle => {
                const v1 = parseInt(triangle.getAttribute('v1'))
                const v2 = parseInt(triangle.getAttribute('v2'))
                const v3 = parseInt(triangle.getAttribute('v3'))

                if (v1 < vertices.length && v2 < vertices.length && v3 < vertices.length) {
                    const verticesArr = [vertices[v1], vertices[v2], vertices[v3]]
                    triangles.push({
                        normal: calculateNormal(verticesArr[0], verticesArr[1], verticesArr[2]),
                        vertices: verticesArr
                    })
                }
            })

            resolve({
                triangleCount: triangles.length,
                triangles: triangles
            })
        } catch (error) {
            reject(new Error(t('tools.3mf-to-stl-converter.parseError')))
        }
    })
}

// 计算三角形法线
function calculateNormal(v1, v2, v3) {
    const edge1 = [v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]]
    const edge2 = [v3[0] - v1[0], v3[1] - v1[1], v3[2] - v1[2]]

    const normal = [
        edge1[1] * edge2[2] - edge1[2] * edge2[1],
        edge1[2] * edge2[0] - edge1[0] * edge2[2],
        edge1[0] * edge2[1] - edge1[1] * edge2[0]
    ]

    const length = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1] + normal[2] * normal[2])
    if (length > 0) {
        normal[0] /= length
        normal[1] /= length
        normal[2] /= length
    }

    return normal
}

// 生成二进制STL
function generateBinaryStl(triangleCount, triangles) {
    const bufferSize = 84 + triangleCount * 50
    const buffer = new ArrayBuffer(bufferSize)
    const view = new DataView(buffer)

    // 写入头部（80字节）
    const header = 'Binary STL generated by UFreetools 3MF to STL Converter'
    for (let i = 0; i < 80; i++) {
        view.setUint8(i, i < header.length ? header.charCodeAt(i) : 0)
    }

    // 写入三角形数量
    view.setUint32(80, triangleCount, true)

    let offset = 84
    for (const tri of triangles) {
        // 写入法线
        view.setFloat32(offset, tri.normal[0], true)
        view.setFloat32(offset + 4, tri.normal[1], true)
        view.setFloat32(offset + 8, tri.normal[2], true)

        // 写入顶点
        for (let i = 0; i < 3; i++) {
            view.setFloat32(offset + 12 + i * 12, tri.vertices[i][0], true)
            view.setFloat32(offset + 16 + i * 12, tri.vertices[i][1], true)
            view.setFloat32(offset + 20 + i * 12, tri.vertices[i][2], true)
        }

        // 写入属性字节计数（通常为0）
        view.setUint16(offset + 48, 0, true)
        offset += 50
    }

    return buffer
}

// 生成ASCII STL
function generateAsciiStl(triangleCount, triangles, name) {
    let stlContent = `solid ${name}\n`

    for (const tri of triangles) {
        stlContent += `  facet normal ${tri.normal[0]} ${tri.normal[1]} ${tri.normal[2]}\n`
        stlContent += `    outer loop\n`
        for (const v of tri.vertices) {
            stlContent += `      vertex ${v[0]} ${v[1]} ${v[2]}\n`
        }
        stlContent += `    endloop\n`
        stlContent += `  endfacet\n`
    }

    stlContent += `endsolid ${name}\n`
    return stlContent
}

// 转换单个文件
async function convertFile(file) {
    const { triangleCount, triangles } = await parseThreeMf(file)

    const name = modelName.value || file.name.replace(/\.3mf$/i, '')
    let content, mimeType

    if (outputFormat.value === 'binary') {
        content = generateBinaryStl(triangleCount, triangles)
        mimeType = 'application/octet-stream'
    } else {
        content = generateAsciiStl(triangleCount, triangles, name)
        mimeType = 'text/plain'
    }

    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const outputName = file.name.replace(/\.3mf$/i, '') + '.stl'

    return {
        url,
        blob,
        name: outputName,
        size: blob.size,
        originalName: file.name,
        originalSize: file.size,
        triangleCount
    }
}

// 转换所有文件
async function convertAll() {
    if (!threeMfFiles.value.length) return

    isConverting.value = true
    convertedFiles.value.forEach(f => URL.revokeObjectURL(f.url))
    convertedFiles.value = []
    convertingProgress.value = { current: 0, total: threeMfFiles.value.length }

    try {
        // 逐个转换
        for (let i = 0; i < threeMfFiles.value.length; i++) {
            convertingProgress.value.current = i + 1
            const result = await convertFile(threeMfFiles.value[i])
            convertedFiles.value.push(result)
        }
    } catch (error) {
        console.error('转换失败', error)
        toastRef.value.show(t('tools.3mf-to-stl-converter.convertError'))
    } finally {
        isConverting.value = false
    }
}

// 下载单个文件
function download(idx) {
    const file = convertedFiles.value[idx]
    if (!file) return

    const a = document.createElement('a')
    a.href = file.url
    a.download = file.name
    a.click()
}

// 批量下载
async function downloadAll() {
    if (!convertedFiles.value.length) return

    const zip = new JSZip()

    for (const file of convertedFiles.value) {
        const response = await fetch(file.url)
        const blob = await response.blob()
        zip.file(file.name, blob)
    }

    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = 'converted_stl_files.zip'
    a.click()
    URL.revokeObjectURL(url)
}

onUnmounted(() => {
    clearFiles()
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

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>