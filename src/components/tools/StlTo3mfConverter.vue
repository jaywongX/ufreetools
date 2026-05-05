<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.stl-to-3mf-converter.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop"
                    @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false"
                    @click="fileInput?.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden"
                        accept=".stl"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.stl-to-3mf-converter.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.stl-to-3mf-converter.supported') }}</span>
                </div>

                <!-- 文件列表 -->
                <div v-if="stlFiles.length" class="mt-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-medium">
                            {{ $t('tools.stl-to-3mf-converter.fileList') }} ({{ stlFiles.length }})
                        </h3>
                        <button class="text-sm text-red-500 hover:text-red-600" @click="clearFiles">
                            {{ $t('tools.stl-to-3mf-converter.clearAll') }}
                        </button>
                    </div>
                    <div class="space-y-2 max-h-[300px] overflow-y-auto p-1">
                        <div v-for="(file, idx) in stlFiles" :key="idx"
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
                    <h3 class="font-semibold mb-2">{{ $t('tools.stl-to-3mf-converter.settingsTitle') }}</h3>

                    <!-- 模型名称 -->
                    <div class="mb-4">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.stl-to-3mf-converter.modelNameLabel') }}
                        </label>
                        <input type="text" v-model="modelName"
                            :placeholder="$t('tools.stl-to-3mf-converter.modelNamePlaceholder')"
                            class="w-full px-3 py-2 border rounded text-sm dark:bg-gray-700 dark:border-gray-600" />
                    </div>

                    <!-- 单位选择 -->
                    <div class="mb-4">
                        <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                            {{ $t('tools.stl-to-3mf-converter.unitLabel') }}
                        </label>
                        <select v-model="unit"
                            class="w-full px-3 py-2 border rounded text-sm dark:bg-gray-700 dark:border-gray-600">
                            <option value="millimeter">{{ $t('tools.stl-to-3mf-converter.unitMillimeter') }}</option>
                            <option value="centimeter">{{ $t('tools.stl-to-3mf-converter.unitCentimeter') }}</option>
                            <option value="meter">{{ $t('tools.stl-to-3mf-converter.unitMeter') }}</option>
                            <option value="inch">{{ $t('tools.stl-to-3mf-converter.unitInch') }}</option>
                        </select>
                    </div>

                    <!-- 合并为单个文件 -->
                    <div class="mb-4">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="mergeFiles" class="form-checkbox" />
                            <span class="text-sm text-gray-700 dark:text-gray-300">
                                {{ $t('tools.stl-to-3mf-converter.mergeFiles') }}
                            </span>
                        </label>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-6"
                    :disabled="!stlFiles.length || isConverting"
                    @click="convertAll">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span v-if="!isConverting">
                        {{ stlFiles.length > 1 ? $t('tools.stl-to-3mf-converter.convertBtn') + ` (${stlFiles.length})` : $t('tools.stl-to-3mf-converter.convertBtn') }}
                    </span>
                    <span v-else>
                        {{ $t('tools.stl-to-3mf-converter.converting') }}
                        <span v-if="convertingProgress.total > 1">
                            ({{ convertingProgress.current }}/{{ convertingProgress.total }})
                        </span>
                    </span>
                </button>

                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <h4 class="font-semibold mb-1">{{ $t('tools.stl-to-3mf-converter.tipsTitle') }}</h4>
                    <p>{{ $t('tools.stl-to-3mf-converter.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.stl-to-3mf-converter.outputTitle') }}</h2>
                    <button v-if="convertedFiles.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.stl-to-3mf-converter.batchDownload') }}
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
                                    <p class="text-xs text-gray-500 mb-1">{{ $t('tools.stl-to-3mf-converter.originalFile') }}</p>
                                    <p class="font-medium">{{ file.originalName }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.originalSize) }}</p>
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                                    <p class="text-xs text-gray-500 mb-1">{{ $t('tools.stl-to-3mf-converter.convertedFile') }}</p>
                                    <p class="font-medium">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                </div>
                            </div>

                            <!-- 模型信息 -->
                            <div v-if="file.triangleCount" class="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <p>{{ $t('tools.stl-to-3mf-converter.triangleCount') }}: {{ file.triangleCount.toLocaleString() }}</p>
                                <p>{{ $t('tools.stl-to-3mf-converter.vertexCount') }}: {{ (file.triangleCount * 3).toLocaleString() }}</p>
                            </div>
                        </div>

                        <!-- 下载按钮 -->
                        <button class="btn btn-success w-full" @click="download(idx)">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.stl-to-3mf-converter.downloadBtn') }}
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
                    <p class="mt-4 text-gray-500">{{ $t('tools.stl-to-3mf-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <StlTo3mfConverterArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import StlTo3mfConverterArticle from './StlTo3mfConverterArticle.vue'
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

const fileInput = ref(null)
const stlFiles = ref([])
const convertedFiles = ref([])
const isDragging = ref(false)
const isConverting = ref(false)
const convertingProgress = ref({ current: 0, total: 0 })

// 设置
const modelName = ref('')
const unit = ref('millimeter')
const mergeFiles = ref(false)

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
        if (!file.name.toLowerCase().endsWith('.stl')) return
        stlFiles.value.push(file)
    })
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
}

function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

function clearFiles() {
    stlFiles.value = []
    convertedFiles.value.forEach(f => URL.revokeObjectURL(f.url))
    convertedFiles.value = []
}

function removeFile(idx) {
    stlFiles.value.splice(idx, 1)
    if (convertedFiles.value[idx]) {
        URL.revokeObjectURL(convertedFiles.value[idx].url)
        convertedFiles.value.splice(idx, 1)
    }
}

// 解析二进制STL
function parseBinaryStl(buffer) {
    const view = new DataView(buffer)
    const triangleCount = view.getUint32(80, true)
    const triangles = []
    let offset = 84

    for (let i = 0; i < triangleCount; i++) {
        const normal = [
            view.getFloat32(offset, true),
            view.getFloat32(offset + 4, true),
            view.getFloat32(offset + 8, true)
        ]
        const v1 = [
            view.getFloat32(offset + 12, true),
            view.getFloat32(offset + 16, true),
            view.getFloat32(offset + 20, true)
        ]
        const v2 = [
            view.getFloat32(offset + 24, true),
            view.getFloat32(offset + 28, true),
            view.getFloat32(offset + 32, true)
        ]
        const v3 = [
            view.getFloat32(offset + 36, true),
            view.getFloat32(offset + 40, true),
            view.getFloat32(offset + 44, true)
        ]
        triangles.push({ normal, vertices: [v1, v2, v3] })
        offset += 50
    }

    return { triangleCount, triangles }
}

// 解析ASCII STL
function parseAsciiStl(text) {
    const triangles = []
    const lines = text.split('\n')
    let currentNormal = null
    let currentVertices = []
    let vertexCount = 0

    for (const line of lines) {
        const trimmed = line.trim()

        if (trimmed.startsWith('facet normal')) {
            const parts = trimmed.split(/\s+/)
            currentNormal = [parseFloat(parts[2]), parseFloat(parts[3]), parseFloat(parts[4])]
            currentVertices = []
            vertexCount = 0
        } else if (trimmed.startsWith('vertex')) {
            const parts = trimmed.split(/\s+/)
            currentVertices.push([parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])])
            vertexCount++
        } else if (trimmed === 'endfacet' && currentNormal && currentVertices.length === 3) {
            triangles.push({ normal: currentNormal, vertices: currentVertices })
            currentNormal = null
            currentVertices = []
        }
    }

    return { triangleCount: triangles.length, triangles }
}

// 解析STL文件
async function parseStl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            const buffer = e.target.result
            const decoder = new TextDecoder()
            const text = decoder.decode(new Uint8Array(buffer))

            // 判断是二进制还是ASCII格式
            if (text.startsWith('solid') && text.includes('facet normal')) {
                // 可能是ASCII格式，进一步验证
                const asciiResult = parseAsciiStl(text)
                if (asciiResult.triangleCount > 0) {
                    resolve(asciiResult)
                    return
                }
            }

            // 尝试二进制解析
            try {
                const binaryResult = parseBinaryStl(buffer)
                resolve(binaryResult)
            } catch (err) {
                // 如果二进制解析失败，再尝试ASCII
                const asciiResult = parseAsciiStl(text)
                if (asciiResult.triangleCount > 0) {
                    resolve(asciiResult)
                } else {
                    reject(new Error(t('tools.stl-to-3mf-converter.parseError')))
                }
            }
        }
        reader.onerror = () => reject(new Error(t('tools.stl-to-3mf-converter.readError')))
        reader.readAsArrayBuffer(file)
    })
}

// 生成3MF文件内容
function generate3mf(triangleCount, triangles, name) {
    const unitMap = {
        'millimeter': 'millimeter',
        'centimeter': 'centimeter',
        'meter': 'meter',
        'inch': 'inch'
    }

    // 生成顶点和三角形XML
    let verticesXml = ''
    let trianglesXml = ''

    // 去重顶点
    const vertexMap = new Map()
    const vertexList = []
    const triangleIndices = []

    for (const tri of triangles) {
        const indices = []
        for (const v of tri.vertices) {
            const key = `${v[0]},${v[1]},${v[2]}`
            if (!vertexMap.has(key)) {
                vertexMap.set(key, vertexList.length)
                vertexList.push(v)
            }
            indices.push(vertexMap.get(key))
        }
        triangleIndices.push(indices)
    }

    for (const v of vertexList) {
        verticesXml += `      <vertex x="${v[0]}" y="${v[1]}" z="${v[2]}" />\n`
    }

    for (const indices of triangleIndices) {
        trianglesXml += `      <triangle v1="${indices[0]}" v2="${indices[1]}" v3="${indices[2]}" />\n`
    }

    const modelXml = `<?xml version="1.0" encoding="UTF-8"?>
<model unit="${unitMap[unit.value] || 'millimeter'}" xml:lang="en-US"
  xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"
  xmlns:mc="http://schemas.microsoft.com/3dmanufacturing/material/2015/02">
  <metadata name="Application">UFreetools STL to 3MF Converter</metadata>
  <resources>
    <object id="1" type="model">
      <mesh>
        <vertices>
${verticesXml}        </vertices>
        <triangles>
${trianglesXml}        </triangles>
      </mesh>
    </object>
  </resources>
  <build>
    <item objectid="1" transform="0 0 0 1" />
  </build>
</model>`

    return modelXml
}

// 生成 [Content_Types].xml
function generateContentTypes() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" />
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml" />
</Types>`
}

// 生成 _rels/.rels
function generateRels() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel" />
</Relationships>`
}

// 转换单个文件
async function convertFile(file) {
    const { triangleCount, triangles } = await parseStl(file)

    const name = modelName.value || file.name.replace(/\.stli$/i, '')
    const modelXml = generate3mf(triangleCount, triangles, name)

    const zip = new JSZip()
    zip.file('[Content_Types].xml', generateContentTypes())
    zip.file('_rels/.rels', generateRels())
    zip.file('3D/3dmodel.model', modelXml)

    const blob = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(blob)
    const outputName = file.name.replace(/\.stli$/i, '') + '.3mf'

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
    if (!stlFiles.value.length) return

    isConverting.value = true
    convertedFiles.value.forEach(f => URL.revokeObjectURL(f.url))
    convertedFiles.value = []
    convertingProgress.value = { current: 0, total: stlFiles.value.length }

    try {
        if (mergeFiles.value && stlFiles.value.length > 1) {
            // 合并所有STL为单个3MF
            convertingProgress.value.total = 1
            convertingProgress.value.current = 1

            const allTriangles = []
            let totalCount = 0
            let offset = 0

            for (const file of stlFiles.value) {
                const { triangleCount, triangles } = await parseStl(file)
                for (const tri of triangles) {
                    allTriangles.push({
                        normal: tri.normal,
                        vertices: tri.vertices.map(v => [v[0] + offset, v[1], v[2]])
                    })
                }
                totalCount += triangleCount
                offset += 100 // 简单偏移避免重叠
            }

            const name = modelName.value || 'merged_model'
            const modelXml = generate3mf(totalCount, allTriangles, name)

            const zip = new JSZip()
            zip.file('[Content_Types].xml', generateContentTypes())
            zip.file('_rels/.rels', generateRels())
            zip.file('3D/3dmodel.model', modelXml)

            const blob = await zip.generateAsync({ type: 'blob' })
            const url = URL.createObjectURL(blob)

            convertedFiles.value = [{
                url,
                blob,
                name: 'merged.3mf',
                size: blob.size,
                originalName: stlFiles.value.map(f => f.name).join(', '),
                originalSize: stlFiles.value.reduce((sum, f) => sum + f.size, 0),
                triangleCount: totalCount
            }]
        } else {
            // 逐个转换
            for (let i = 0; i < stlFiles.value.length; i++) {
                convertingProgress.value.current = i + 1
                const result = await convertFile(stlFiles.value[i])
                convertedFiles.value.push(result)
            }
        }
    } catch (error) {
        console.error('转换失败', error)
        toastRef.value.show(t('tools.stl-to-3mf-converter.convertError'))
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
    a.download = 'converted_3mf_files.zip'
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
