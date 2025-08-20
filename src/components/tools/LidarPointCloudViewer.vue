<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.lidar-point-cloud-viewer.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept=".las,.laz,.xyz,.ply,.pcd,.txt"
                        @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.lidar-point-cloud-viewer.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.lidar-point-cloud-viewer.supported') }}</span>
                </div>

                <!-- URL 加载 -->
                <div class="mt-4">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.lidar-point-cloud-viewer.loadFromUrl') }}
                    </label>
                    <div class="flex space-x-2">
                        <input v-model="urlInput" type="url" placeholder="https://example.com/pointcloud.las"
                            class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                        <button class="btn btn-primary" @click="loadFromUrl" :disabled="!urlInput.trim()">
                            {{ $t('tools.lidar-point-cloud-viewer.load') }}
                        </button>
                    </div>
                </div>

                <!-- 示例文件按钮 -->
                <button class="btn btn-secondary w-full mt-4" @click="loadSampleData">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2-2v-6a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {{ $t('tools.lidar-point-cloud-viewer.loadSample') }}
                </button>

                <!-- 点云设置 -->
                <div class="mt-6 space-y-4">
                    <!-- 着色模式 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.lidar-point-cloud-viewer.coloringMode') }}
                        </label>
                        <select v-model="coloringMode"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <option value="elevation">{{ $t('tools.lidar-point-cloud-viewer.elevation') }}</option>
                            <option value="intensity">{{ $t('tools.lidar-point-cloud-viewer.intensity') }}</option>
                            <option value="classification">{{ $t('tools.lidar-point-cloud-viewer.classification') }}
                            </option>
                            <option value="rgb">{{ $t('tools.lidar-point-cloud-viewer.rgb') }}</option>
                        </select>
                    </div>

                    <!-- 点大小 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.lidar-point-cloud-viewer.pointSize') }}: {{ pointSize }}px
                        </label>
                        <input type="range" min="1" max="10" step="0.5" v-model.number="pointSize"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </div>

                    <!-- 点密度 -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.lidar-point-cloud-viewer.pointDensity') }}: {{ Math.round(pointDensity * 100)
                            }}%
                        </label>
                        <input type="range" min="0.1" max="1" step="0.1" v-model.number="pointDensity"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </div>

                    <!-- 动画控制 -->
                    <div class="flex items-center space-x-3">
                        <input type="checkbox" v-model="enableAnimation" id="animation" class="form-checkbox">
                        <label for="animation" class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.lidar-point-cloud-viewer.enableAnimation') }}
                        </label>
                    </div>
                </div>

                <!-- 文件信息 -->
                <div v-if="pointCloudData" class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 class="font-medium mb-2">{{ $t('tools.lidar-point-cloud-viewer.fileInfo') }}</h3>
                    <div class="text-sm space-y-1">
                        <div class="flex justify-between">
                            <span>{{ $t('tools.lidar-point-cloud-viewer.fileName') }}:</span>
                            <span>{{ fileName }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>{{ $t('tools.lidar-point-cloud-viewer.pointCount') }}:</span>
                            <span>{{ pointCloudData.length.toLocaleString() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>{{ $t('tools.lidar-point-cloud-viewer.fileSize') }}:</span>
                            <span>{{ formatFileSize(fileSize) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>{{ $t('tools.lidar-point-cloud-viewer.bounds') }}:</span>
                            <span class="text-xs">{{ formatBounds() }}</span>
                        </div>
                    </div>
                </div>

                <!-- LAS 元数据 -->
                <div v-if="metadata.systemId" class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 class="font-medium mb-3 text-blue-800 dark:text-blue-200">{{
                        $t('tools.lidar-point-cloud-viewer.metadata.title') }}</h3>
                    <div class="text-sm space-y-2">
                        <div v-if="metadata.systemId">
                            <span class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.metadata.systemId')
                                }}:</span>
                            <span class="ml-2">{{ metadata.systemId }}</span>
                        </div>
                        <div v-if="metadata.generatingSoftware">
                            <span class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.metadata.software')
                                }}:</span>
                            <span class="ml-2">{{ metadata.generatingSoftware }}</span>
                        </div>
                        <div v-if="metadata.version">
                            <span class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.metadata.version')
                                }}:</span>
                            <span class="ml-2">{{ metadata.version }}</span>
                        </div>
                        <div v-if="metadata.creationDate">
                            <span class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.metadata.creationDate')
                                }}:</span>
                            <span class="ml-2">{{ metadata.creationDate }}</span>
                        </div>
                        <div v-if="metadata.pointDataFormat !== undefined">
                            <span class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.metadata.pointFormat')
                                }}:</span>
                            <span class="ml-2">{{ metadata.pointDataFormat }}</span>
                        </div>
                        <div v-if="metadata.vlrCount > 0">
                            <span class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.metadata.vlrCount')
                                }}:</span>
                            <span class="ml-2">{{ metadata.vlrCount }}</span>
                        </div>
                        <div v-if="metadata.pointsByReturn.length > 0" class="mt-3">
                            <span class="font-medium block mb-1">{{
                                $t('tools.lidar-point-cloud-viewer.metadata.returnStats') }}:</span>
                            <div class="grid grid-cols-5 gap-1 text-xs">
                                <div v-for="(count, index) in metadata.pointsByReturn" :key="index" class="text-center">
                                    <div class="font-medium">{{ index + 1 }}</div>
                                    <div>{{ count.toLocaleString() }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <span class="font-medium block mb-1">{{ $t('tools.lidar-point-cloud-viewer.metadata.extent')
                                }}:</span>
                            <div class="text-xs space-y-1">
                                <div>X: {{ metadata.extent.minX.toFixed(3) }} ~ {{ metadata.extent.maxX.toFixed(3) }}
                                </div>
                                <div>Y: {{ metadata.extent.minY.toFixed(3) }} ~ {{ metadata.extent.maxY.toFixed(3) }}
                                </div>
                                <div>Z: {{ metadata.extent.minZ.toFixed(3) }} ~ {{ metadata.extent.maxZ.toFixed(3) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 轨迹和传感器控制 -->
                <div v-if="trajectoryData || sensorMetadata" class="mt-6 space-y-3">
                    <div class="flex items-center space-x-3">
                        <input type="checkbox" v-model="showTrajectory" id="trajectory" class="form-checkbox">
                        <label for="trajectory" class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.lidar-point-cloud-viewer.showTrajectory') }}
                        </label>
                    </div>
                    <div class="flex items-center space-x-3">
                        <input type="checkbox" v-model="showSensorData" id="sensor" class="form-checkbox">
                        <label for="sensor" class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ $t('tools.lidar-point-cloud-viewer.showSensorData') }}
                        </label>
                    </div>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.lidar-point-cloud-viewer.outputTitle') }}</h2>
                    <div class="flex space-x-2">
                        <button v-if="pointCloudData" class="btn btn-secondary btn-sm" @click="resetView">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {{ $t('tools.lidar-point-cloud-viewer.resetView') }}
                        </button>
                        <button v-if="pointCloudData" class="btn btn-primary btn-sm" @click="exportImage">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.lidar-point-cloud-viewer.exportImage') }}
                        </button>
                    </div>
                </div>

                <!-- 3D 查看器 -->
                <div class="relative">
                    <div ref="viewerContainer"
                        class="w-full h-[800px] border rounded-lg bg-gray-100 dark:bg-gray-900 overflow-hidden">
                        <canvas ref="canvas" class="w-full h-full cursor-move"></canvas>

                        <!-- 加载状态 -->
                        <div v-if="isLoading"
                            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div class="text-center text-white">
                                <svg class="animate-spin w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <p>{{ $t('tools.lidar-point-cloud-viewer.loading') }}</p>
                                <p class="text-sm">{{ loadingProgress }}%</p>
                            </div>
                        </div>

                        <!-- 控制提示 -->
                        <div v-if="!pointCloudData && !isLoading"
                            class="absolute inset-0 flex items-center justify-center">
                            <div class="text-center text-gray-500">
                                <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2-2v-6a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <p>{{ $t('tools.lidar-point-cloud-viewer.noData') }}</p>
                            </div>
                        </div>

                        <!-- 控制说明 -->
                        <div v-if="pointCloudData"
                            class="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs p-2 rounded">
                            <div>{{ $t('tools.lidar-point-cloud-viewer.controls.rotate') }}</div>
                            <div>{{ $t('tools.lidar-point-cloud-viewer.controls.zoom') }}</div>
                            <div>{{ $t('tools.lidar-point-cloud-viewer.controls.pan') }}</div>
                        </div>
                    </div>

                    <!-- 统计信息 -->
                    <div v-if="pointCloudData" class="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                            <div class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.stats.visible') }}</div>
                            <div>{{ visiblePoints.toLocaleString() }} {{
                                $t('tools.lidar-point-cloud-viewer.stats.points') }}</div>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                            <div class="font-medium">{{ $t('tools.lidar-point-cloud-viewer.stats.total') }}</div>
                            <div>{{ pointCloudData.length.toLocaleString() }} {{
                                $t('tools.lidar-point-cloud-viewer.stats.points') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部声明 -->
        <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="text-center">
                <h3 class="text-lg font-semibold mb-2">{{ $t('tools.lidar-point-cloud-viewer.disclaimer.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ $t('tools.lidar-point-cloud-viewer.disclaimer.content') }}
                </p>
                <div class="mt-4 text-xs text-gray-500">
                    <p>{{ $t('tools.lidar-point-cloud-viewer.disclaimer.formats') }}</p>
                    <p>{{ $t('tools.lidar-point-cloud-viewer.disclaimer.performance') }}</p>
                </div>
            </div>
        </div>

        <LidarPointCloudViewerArticle />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LidarPointCloudViewerArticle from './LidarPointCloudViewerArticle.vue'

const { t } = useI18n()

// 响应式数据
const fileInput = ref(null)
const canvas = ref(null)
const viewerContainer = ref(null)
const isDragging = ref(false)
const isLoading = ref(false)
const loadingProgress = ref(0)
const urlInput = ref('')

// 点云数据
const pointCloudData = ref(null)
const fileName = ref('')
const fileSize = ref(0)
const bounds = reactive({ minX: 0, maxX: 0, minY: 0, maxY: 0, minZ: 0, maxZ: 0 })

// LAS 元数据
const metadata = reactive({
    systemId: '',
    generatingSoftware: '',
    pointCount: 0,
    pointsByReturn: [],
    vlrCount: 0,
    pointDataFormat: 0,
    creationDate: '',
    version: '',
    extent: {
        minX: 0, maxX: 0,
        minY: 0, maxY: 0,
        minZ: 0, maxZ: 0
    }
})

// 轨迹和传感器数据
const trajectoryData = ref(null)
const sensorMetadata = ref(null)
const showTrajectory = ref(false)
const showSensorData = ref(false)

// 渲染设置
const coloringMode = ref('elevation')
const pointSize = ref(2)
const pointDensity = ref(0.5)
const enableAnimation = ref(false)

// 相机控制
const camera = reactive({
    x: 0, y: 0, z: 0,
    rotationX: 0, rotationY: 0,
    zoom: 1,
    isDragging: false,
    lastX: 0, lastY: 0
})

// WebGL 上下文和着色器
let gl = null
let shaderProgram = null
let vertexBuffer = null
let colorBuffer = null
let animationId = null

// 计算可见点数
const visiblePoints = computed(() => {
    if (!pointCloudData.value) return 0
    return Math.floor(pointCloudData.value.length * pointDensity.value)
})

// 初始化 WebGL
function initWebGL() {
    if (!canvas.value) return false

    gl = canvas.value.getContext('webgl') || canvas.value.getContext('experimental-webgl')
    if (!gl) {
        console.error('WebGL not supported')
        return false
    }

    // 创建着色器程序
    const vertexShaderSource = `
        attribute vec3 a_position;
        attribute vec3 a_color;
        uniform mat4 u_matrix;
        uniform float u_pointSize;
        varying vec3 v_color;
        
        void main() {
            gl_Position = u_matrix * vec4(a_position, 1.0);
            gl_PointSize = u_pointSize;
            v_color = a_color;
        }
    `

    const fragmentShaderSource = `
        precision mediump float;
        varying vec3 v_color;
        
        void main() {
            float dist = distance(gl_PointCoord, vec2(0.5));
            if (dist > 0.5) discard;
            gl_FragColor = vec4(v_color, 1.0);
        }
    `

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

    shaderProgram = createProgram(vertexShader, fragmentShader)

    return true
}

// 创建着色器
function createShader(type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
    }

    return shader
}

// 创建程序
function createProgram(vertexShader, fragmentShader) {
    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return null
    }

    return program
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    if (files.length > 0) {
        loadPointCloudFile(files[0])
    }
    isDragging.value = false
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 加载点云文件
async function loadPointCloudFile(file) {
    isLoading.value = true
    loadingProgress.value = 0
    fileName.value = file.name
    fileSize.value = file.size

    try {
        const extension = file.name.split('.').pop().toLowerCase()
        let data = null

        switch (extension) {
            case 'xyz':
            case 'txt':
                data = await parseXYZFile(file)
                break
            case 'las':
                data = await parseLASFile(file)
                break
            case 'ply':
                data = await parsePLYFile(file)
                break
            case 'pcd':
                data = await parsePCDFile(file)
                break
            default:
                throw new Error('Unsupported file format')
        }

        pointCloudData.value = data
        calculateBounds(data)
        setupWebGLBuffers()
        resetView()

    } catch (error) {
        console.error('Error loading point cloud:', error)
        alert(t('tools.lidar-point-cloud-viewer.error.loadFailed'))
    } finally {
        isLoading.value = false
        loadingProgress.value = 100
    }
}

// 解析 XYZ 文件
async function parseXYZFile(file) {
    const text = await file.text()
    const lines = text.split('\n').filter(line => line.trim())
    const points = []

    for (let i = 0; i < lines.length; i++) {
        if (i % 1000 === 0) {
            loadingProgress.value = Math.round((i / lines.length) * 100)
            await new Promise(resolve => setTimeout(resolve, 1))
        }

        const parts = lines[i].trim().split(/\s+/)
        if (parts.length >= 3) {
            const x = parseFloat(parts[0])
            const y = parseFloat(parts[1])
            const z = parseFloat(parts[2])
            const intensity = parts.length > 3 ? parseFloat(parts[3]) : 0
            const r = parts.length > 4 ? parseInt(parts[4]) : 128
            const g = parts.length > 5 ? parseInt(parts[5]) : 128
            const b = parts.length > 6 ? parseInt(parts[6]) : 128

            if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
                points.push({ x, y, z, intensity, r, g, b, classification: 0 })
            }
        }
    }

    return points
}

async function parseLASFile(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        loadingProgress.value = 10;

        const dv = new DataView(arrayBuffer);
        const sig = String.fromCharCode(
            dv.getUint8(0), dv.getUint8(1),
            dv.getUint8(2), dv.getUint8(3)
        );
        if (sig !== "LASF") {
            throw new Error("Invalid LAS/LAZ file signature");
        }

        // 判断是否是 LAZ（压缩）
        const isLAZ = isLAZFile(dv);
        let points = [];

        if (!isLAZ) {
            // ----------- 解析 LAS (未压缩) -----------
            const header = parseLASHeader(dv);
            updateMetadata(header);

            points = await parseLASPoints(dv, header);

        } else {
            throw new Error('Unsupported file format')
        }

        loadingProgress.value = 100;
        return points;

    } catch (err) {
        console.error("Error parsing LAS/LAZ with laz-perf:", err);
        throw err;
    }
}

// 解析 LAS 头部
function parseLASHeader(dataView) {
    const header = {}

    // 文件签名 (4 bytes)
    const signature = String.fromCharCode(
        dataView.getUint8(0),
        dataView.getUint8(1),
        dataView.getUint8(2),
        dataView.getUint8(3)
    )

    if (signature !== 'LASF') {
        throw new Error('Invalid LAS file signature')
    }

    // 文件源 ID (2 bytes)
    header.fileSourceId = dataView.getUint16(4, true)

    // 全局编码 (2 bytes)
    header.globalEncoding = dataView.getUint16(6, true)

    // GUID (16 bytes)
    header.guid = []
    for (let i = 0; i < 16; i++) {
        header.guid.push(dataView.getUint8(8 + i))
    }

    // 版本信息
    header.versionMajor = dataView.getUint8(24)
    header.versionMinor = dataView.getUint8(25)

    // 系统标识符 (32 bytes)
    header.systemId = ''
    for (let i = 0; i < 32; i++) {
        const char = dataView.getUint8(26 + i)
        if (char !== 0) header.systemId += String.fromCharCode(char)
    }

    // 生成软件 (32 bytes)
    header.generatingSoftware = ''
    for (let i = 0; i < 32; i++) {
        const char = dataView.getUint8(58 + i)
        if (char !== 0) header.generatingSoftware += String.fromCharCode(char)
    }

    // 创建日期
    header.creationDay = dataView.getUint16(90, true)
    header.creationYear = dataView.getUint16(92, true)

    // 头部大小
    header.headerSize = dataView.getUint16(94, true)

    // 点数据偏移
    header.pointDataOffset = dataView.getUint32(96, true)

    // VLR 数量
    header.vlrCount = dataView.getUint32(100, true)

    // 点数据格式
    header.pointDataFormat = dataView.getUint8(104)

    // 点记录长度
    header.pointDataRecordLength = dataView.getUint16(105, true)

    // 点数量
    const versionMajor = dataView.getUint8(24);
    const versionMinor = dataView.getUint8(25);
    if (versionMajor === 1 && versionMinor <= 3) {
        // LAS 1.0 - 1.3
        header.pointCount = dataView.getUint32(107, true);
    } else if (versionMajor === 1 && versionMinor >= 4) {
        // LAS 1.4 使用 8字节
        header.pointCount = Number(dataView.getBigUint64(247, true));
    }

    // 各次回波点数量 (5 * 4 bytes)
    header.pointsByReturn = []
    for (let i = 0; i < 5; i++) {
        header.pointsByReturn.push(dataView.getUint32(111 + i * 4, true))
    }

    // 比例因子
    header.xScaleFactor = dataView.getFloat64(131, true)
    header.yScaleFactor = dataView.getFloat64(139, true)
    header.zScaleFactor = dataView.getFloat64(147, true)

    // 偏移量
    header.xOffset = dataView.getFloat64(155, true)
    header.yOffset = dataView.getFloat64(163, true)
    header.zOffset = dataView.getFloat64(171, true)

    // 最大最小值
    header.maxX = dataView.getFloat64(179, true)
    header.minX = dataView.getFloat64(187, true)
    header.maxY = dataView.getFloat64(195, true)
    header.minY = dataView.getFloat64(203, true)
    header.maxZ = dataView.getFloat64(211, true)
    header.minZ = dataView.getFloat64(219, true)

    return header
}

// 解析 LAS 点数据
async function parseLASPoints(dataView, header) {
    const points = []
    const pointDataOffset = header.pointDataOffset
    const pointCount = header.pointCount
    const pointDataFormat = header.pointDataFormat
    const recordLength = header.pointDataRecordLength

    for (let i = 0; i < pointCount; i++) {
        if (i % 10000 === 0) {
            loadingProgress.value = Math.round((i / pointCount) * 100)
            await new Promise(resolve => setTimeout(resolve, 1))
        }

        const offset = pointDataOffset + i * recordLength

        // 读取 X, Y, Z 坐标 (scaled integers)
        const x = dataView.getInt32(offset, true) * header.xScaleFactor + header.xOffset
        const y = dataView.getInt32(offset + 4, true) * header.yScaleFactor + header.yOffset
        const z = dataView.getInt32(offset + 8, true) * header.zScaleFactor + header.zOffset

        // 读取强度
        const intensity = dataView.getUint16(offset + 12, true)

        // 读取回波信息和分类
        const returnInfo = dataView.getUint8(offset + 14)
        const returnNumber = returnInfo & 0x07
        const numberOfReturns = (returnInfo >> 3) & 0x07
        const scanDirection = (returnInfo >> 6) & 0x01
        const edgeOfFlightLine = (returnInfo >> 7) & 0x01

        const classification = dataView.getUint8(offset + 15)
        const scanAngle = dataView.getInt8(offset + 16)
        const userData = dataView.getUint8(offset + 17)
        const pointSourceId = dataView.getUint16(offset + 18, true)

        let r = 128, g = 128, b = 128

        // 根据点数据格式读取颜色信息
        if (pointDataFormat === 2 || pointDataFormat === 3 || pointDataFormat === 5) {
            r = dataView.getUint16(offset + 20, true) / 256
            g = dataView.getUint16(offset + 22, true) / 256
            b = dataView.getUint16(offset + 24, true) / 256
        }

        points.push({
            x, y, z, intensity, r, g, b,
            classification,
            returnNumber,
            numberOfReturns,
            scanDirection,
            edgeOfFlightLine,
            scanAngle,
            userData,
            pointSourceId
        })
    }

    return points
}

function isLAZFile(dataView) {
    const formatId = dataView.getUint8(104);
    return formatId >= 128;
}

// 解析 PLY 文件 - 使用优化的解析器
async function parsePLYFile(file) {
    // 尝试使用 PLY 库解析（如果可用）
    if (window.PLYLoader) {
        return await parsePLYWithLibrary(file)
    }

    // 回退到自定义解析
    return await parsePLYCustom(file)
}

// 使用 PLY 库解析（如果安装了 ply-loader 或类似库）
async function parsePLYWithLibrary(file) {
    try {
        const arrayBuffer = await file.arrayBuffer()
        const loader = new window.PLYLoader()

        return new Promise((resolve, reject) => {
            loader.load(arrayBuffer, (geometry) => {
                const points = []
                const positions = geometry.attributes.position.array
                const colors = geometry.attributes.color?.array

                for (let i = 0; i < positions.length; i += 3) {
                    const point = {
                        x: positions[i],
                        y: positions[i + 1],
                        z: positions[i + 2],
                        intensity: 0,
                        r: colors ? colors[i] * 255 : 128,
                        g: colors ? colors[i + 1] * 255 : 128,
                        b: colors ? colors[i + 2] * 255 : 128,
                        classification: 0
                    }
                    points.push(point)

                    if (i % 30000 === 0) {
                        loadingProgress.value = Math.round((i / positions.length) * 100)
                    }
                }

                resolve(points)
            }, reject)
        })
    } catch (error) {
        console.warn('PLY library parsing failed, falling back to custom parser:', error)
        return await parsePLYCustom(file)
    }
}

// 自定义 PLY 解析器（改进版）
async function parsePLYCustom(file) {
    const text = await file.text()
    const lines = text.split('\n')
    const points = []
    let headerEnd = 0
    let vertexCount = 0
    let properties = []
    let isBinary = false

    // 解析头部
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()

        if (line.startsWith('format binary')) {
            isBinary = true
        } else if (line.startsWith('element vertex')) {
            vertexCount = parseInt(line.split(' ')[2])
        } else if (line.startsWith('property')) {
            const parts = line.split(' ')
            properties.push({
                type: parts[1],
                name: parts[2]
            })
        } else if (line === 'end_header') {
            headerEnd = i + 1
            break
        }
    }

    if (isBinary) {
        // 对于二进制 PLY，建议使用专门的库
        console.warn('Binary PLY format detected. Consider using a dedicated PLY library for better performance.')
        return []
    }

    // 解析 ASCII 顶点数据
    for (let i = headerEnd; i < headerEnd + vertexCount && i < lines.length; i++) {
        if ((i - headerEnd) % 1000 === 0) {
            loadingProgress.value = Math.round(((i - headerEnd) / vertexCount) * 100)
            await new Promise(resolve => setTimeout(resolve, 1))
        }

        const parts = lines[i].trim().split(/\s+/)
        if (parts.length >= 3) {
            const point = {
                x: parseFloat(parts[0]),
                y: parseFloat(parts[1]),
                z: parseFloat(parts[2]),
                intensity: 0,
                r: 128,
                g: 128,
                b: 128,
                classification: 0
            }

            // 根据属性映射解析其他字段
            for (let j = 3; j < Math.min(parts.length, properties.length); j++) {
                const prop = properties[j]
                const value = parseFloat(parts[j])

                switch (prop.name.toLowerCase()) {
                    case 'red':
                    case 'r':
                        point.r = Math.min(255, Math.max(0, value))
                        break
                    case 'green':
                    case 'g':
                        point.g = Math.min(255, Math.max(0, value))
                        break
                    case 'blue':
                    case 'b':
                        point.b = Math.min(255, Math.max(0, value))
                        break
                    case 'intensity':
                        point.intensity = value
                        break
                    case 'classification':
                    case 'class':
                        point.classification = Math.floor(value)
                        break
                }
            }

            if (!isNaN(point.x) && !isNaN(point.y) && !isNaN(point.z)) {
                points.push(point)
            }
        }
    }

    return points
}

// 解析 PCD 文件 - 使用优化的解析器
async function parsePCDFile(file) {
    // 尝试使用 PCL.js 或类似库（如果可用）
    if (window.PCLLoader) {
        return await parsePCDWithLibrary(file)
    }

    // 回退到改进的自定义解析
    return await parsePCDCustom(file)
}

// 使用 PCL 库解析（如果安装了 pcl.js 或类似库）
async function parsePCDWithLibrary(file) {
    try {
        const arrayBuffer = await file.arrayBuffer()
        const loader = new window.PCLLoader()

        return new Promise((resolve, reject) => {
            loader.parse(arrayBuffer, (pointCloud) => {
                const points = []

                for (let i = 0; i < pointCloud.points.length; i++) {
                    const pt = pointCloud.points[i]
                    points.push({
                        x: pt.x,
                        y: pt.y,
                        z: pt.z,
                        intensity: pt.intensity || 0,
                        r: pt.r || 128,
                        g: pt.g || 128,
                        b: pt.b || 128,
                        classification: pt.label || 0
                    })

                    if (i % 10000 === 0) {
                        loadingProgress.value = Math.round((i / pointCloud.points.length) * 100)
                    }
                }

                resolve(points)
            }, reject)
        })
    } catch (error) {
        console.warn('PCL library parsing failed, falling back to custom parser:', error)
        return await parsePCDCustom(file)
    }
}

// 改进的自定义 PCD 解析器
async function parsePCDCustom(file) {
    const text = await file.text()
    const lines = text.split('\n')
    const points = []
    let dataStart = 0
    let pointCount = 0
    let fields = []
    let sizes = []
    let types = []
    let dataType = 'ascii'

    // 解析头部
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()

        if (line.startsWith('FIELDS')) {
            fields = line.split(' ').slice(1)
        } else if (line.startsWith('SIZE')) {
            sizes = line.split(' ').slice(1).map(Number)
        } else if (line.startsWith('TYPE')) {
            types = line.split(' ').slice(1)
        } else if (line.startsWith('POINTS')) {
            pointCount = parseInt(line.split(' ')[1])
        } else if (line.startsWith('DATA')) {
            dataType = line.split(' ')[1].toLowerCase()
            dataStart = i + 1
            break
        }
    }

    if (dataType === 'binary') {
        console.warn('Binary PCD format detected. Consider using PCL.js for better performance.')
        // 对于二进制格式，建议使用专门的库
        return []
    }

    // 创建字段映射
    const fieldMap = {}
    fields.forEach((field, index) => {
        fieldMap[field.toLowerCase()] = index
    })

    // 解析 ASCII 点数据
    for (let i = dataStart; i < dataStart + pointCount && i < lines.length; i++) {
        if ((i - dataStart) % 1000 === 0) {
            loadingProgress.value = Math.round(((i - dataStart) / pointCount) * 100)
            await new Promise(resolve => setTimeout(resolve, 1))
        }

        const parts = lines[i].trim().split(/\s+/)
        if (parts.length >= 3) {
            const point = {
                x: 0, y: 0, z: 0,
                intensity: 0,
                r: 128, g: 128, b: 128,
                classification: 0
            }

            // 根据字段映射解析数据
            if (fieldMap.x !== undefined) point.x = parseFloat(parts[fieldMap.x])
            if (fieldMap.y !== undefined) point.y = parseFloat(parts[fieldMap.y])
            if (fieldMap.z !== undefined) point.z = parseFloat(parts[fieldMap.z])

            if (fieldMap.intensity !== undefined) {
                point.intensity = parseFloat(parts[fieldMap.intensity])
            }

            if (fieldMap.rgb !== undefined) {
                // 解析打包的 RGB 值
                const rgb = parseInt(parts[fieldMap.rgb])
                point.r = (rgb >> 16) & 0xFF
                point.g = (rgb >> 8) & 0xFF
                point.b = rgb & 0xFF
            } else {
                // 分别的 R, G, B 字段
                if (fieldMap.r !== undefined) point.r = parseFloat(parts[fieldMap.r])
                if (fieldMap.g !== undefined) point.g = parseFloat(parts[fieldMap.g])
                if (fieldMap.b !== undefined) point.b = parseFloat(parts[fieldMap.b])
            }

            if (fieldMap.label !== undefined) {
                point.classification = parseInt(parts[fieldMap.label])
            }

            if (!isNaN(point.x) && !isNaN(point.y) && !isNaN(point.z)) {
                points.push(point)
            }
        }
    }

    return points
}

// 生成示例数据
function generateSampleData() {
    const points = []
    const size = 100

    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * size
        const y = (Math.random() - 0.5) * size
        const z = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 10 + Math.random() * 5
        const intensity = Math.random() * 255
        const height = (z + 15) / 30 // 归一化高度

        points.push({
            x, y, z, intensity,
            r: Math.floor(height * 255),
            g: Math.floor((1 - height) * 255),
            b: 128,
            classification: Math.floor(Math.random() * 5)
        })
    }

    return points
}

// 从URL加载点云文件
async function loadFromUrl() {
    if (!urlInput.value.trim()) return

    isLoading.value = true
    loadingProgress.value = 0

    try {
        const response = await fetch(urlInput.value)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const blob = await response.blob()
        const file = new File([blob], urlInput.value.split('/').pop() || 'remote_file', {
            type: blob.type
        })

        await loadPointCloudFile(file)
    } catch (error) {
        console.error('Error loading from URL:', error)
        alert(t('tools.lidar-point-cloud-viewer.error.urlLoadFailed'))
    } finally {
        isLoading.value = false
    }
}

// 更新LAS元数据
function updateMetadata(header) {
    metadata.systemId = header.systemId || ''
    metadata.generatingSoftware = header.generatingSoftware || ''
    metadata.pointCount = header.pointCount || 0
    metadata.pointsByReturn = header.pointsByReturn || []
    metadata.vlrCount = header.vlrCount || 0
    metadata.pointDataFormat = header.pointDataFormat || 0
    metadata.version = `${header.versionMajor || 0}.${header.versionMinor || 0}`

    if (header.creationYear && header.creationDay) {
        const date = new Date(header.creationYear, 0, header.creationDay)
        metadata.creationDate = date.toLocaleDateString()
    }

    metadata.extent = {
        minX: header.minX || 0,
        maxX: header.maxX || 0,
        minY: header.minY || 0,
        maxY: header.maxY || 0,
        minZ: header.minZ || 0,
        maxZ: header.maxZ || 0
    }

    // 生成模拟轨迹数据（实际应用中应从VLR或外部文件读取）
    generateTrajectoryData(header)

    // 生成模拟传感器元数据
    generateSensorMetadata(header)
}

// 生成轨迹数据
function generateTrajectoryData(header) {
    const trajectory = []
    const centerX = (header.minX + header.maxX) / 2
    const centerY = (header.minY + header.maxY) / 2
    const centerZ = (header.minZ + header.maxZ) / 2
    const radius = Math.max(header.maxX - header.minX, header.maxY - header.minY) / 4

    // 生成螺旋轨迹
    for (let i = 0; i < 100; i++) {
        const angle = (i / 100) * Math.PI * 4
        const height = (i / 100) * (header.maxZ - header.minZ) * 0.5

        trajectory.push({
            x: centerX + Math.cos(angle) * radius * (1 - i / 200),
            y: centerY + Math.sin(angle) * radius * (1 - i / 200),
            z: centerZ + height,
            timestamp: i,
            roll: Math.sin(angle * 0.5) * 0.1,
            pitch: Math.cos(angle * 0.3) * 0.05,
            yaw: angle
        })
    }

    trajectoryData.value = trajectory
}

// 生成传感器元数据
function generateSensorMetadata(header) {
    sensorMetadata.value = {
        sensorType: 'LIDAR',
        manufacturer: 'Simulated',
        model: 'Virtual Scanner',
        serialNumber: 'SIM001',
        wavelength: 905, // nm
        pulseRate: 100000, // Hz
        scanRate: 10, // Hz
        fieldOfView: 360, // degrees
        range: {
            min: 0.5, // meters
            max: 200 // meters
        },
        accuracy: 0.02, // meters
        precision: 0.01, // meters
        imuData: {
            available: true,
            sampleRate: 200, // Hz
            accelerometer: {
                range: '±8g',
                resolution: '0.001g'
            },
            gyroscope: {
                range: '±2000°/s',
                resolution: '0.1°/s'
            }
        }
    }
}

// 加载示例数据
async function loadSampleData() {
    isLoading.value = true
    loadingProgress.value = 0
    fileName.value = 'sample_data.xyz'
    fileSize.value = 0

    try {
        await new Promise(resolve => setTimeout(resolve, 500))
        const data = generateSampleData()
        pointCloudData.value = data
        calculateBounds(data)
        setupWebGLBuffers()
        resetView()

        // 清空元数据
        metadata.systemId = ''
        metadata.generatingSoftware = ''
        metadata.pointCount = 0
        metadata.pointsByReturn = []
        metadata.vlrCount = 0
        metadata.pointDataFormat = 0
        metadata.creationDate = ''
        metadata.version = ''
    } catch (error) {
        console.error('Error loading sample data:', error)
    } finally {
        isLoading.value = false
        loadingProgress.value = 100
    }
}

// 计算边界
function calculateBounds(data) {
    if (!data || data.length === 0) return

    bounds.minX = bounds.maxX = data[0].x
    bounds.minY = bounds.maxY = data[0].y
    bounds.minZ = bounds.maxZ = data[0].z

    for (const point of data) {
        bounds.minX = Math.min(bounds.minX, point.x)
        bounds.maxX = Math.max(bounds.maxX, point.x)
        bounds.minY = Math.min(bounds.minY, point.y)
        bounds.maxY = Math.max(bounds.maxY, point.y)
        bounds.minZ = Math.min(bounds.minZ, point.z)
        bounds.maxZ = Math.max(bounds.maxZ, point.z)
    }
}

// 设置 WebGL 缓冲区
function setupWebGLBuffers() {
    if (!gl || !pointCloudData.value) return

    const visibleCount = Math.floor(pointCloudData.value.length * pointDensity.value)
    const positions = new Float32Array(visibleCount * 3)
    const colors = new Float32Array(visibleCount * 3)

    // 采样点
    const step = Math.max(1, Math.floor(pointCloudData.value.length / visibleCount))

    for (let i = 0; i < visibleCount; i++) {
        const point = pointCloudData.value[i * step]
        if (!point) break

        // 归一化坐标
        const x = (point.x - (bounds.minX + bounds.maxX) / 2) / Math.max(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY, bounds.maxZ - bounds.minZ) * 2
        const y = (point.y - (bounds.minY + bounds.maxY) / 2) / Math.max(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY, bounds.maxZ - bounds.minZ) * 2
        const z = (point.z - (bounds.minZ + bounds.maxZ) / 2) / Math.max(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY, bounds.maxZ - bounds.minZ) * 2

        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z

        // 根据着色模式设置颜色
        let r, g, b
        switch (coloringMode.value) {
            case 'elevation':
                const height = (point.z - bounds.minZ) / (bounds.maxZ - bounds.minZ)
                r = height
                g = 1 - height
                b = 0.5
                break
            case 'intensity':
                const intensity = point.intensity / 255
                r = intensity
                g = intensity
                b = intensity
                break
            case 'classification':
                const classColors = [
                    [0.5, 0.5, 0.5], // 未分类
                    [0.8, 0.4, 0.2], // 地面
                    [0.2, 0.8, 0.2], // 植被
                    [0.2, 0.4, 0.8], // 建筑
                    [0.8, 0.8, 0.2]  // 水体
                ]
                const classColor = classColors[point.classification % classColors.length]
                r = classColor[0]
                g = classColor[1]
                b = classColor[2]
                break
            case 'rgb':
            default:
                r = point.r / 255
                g = point.g / 255
                b = point.b / 255
                break
        }

        colors[i * 3] = r
        colors[i * 3 + 1] = g
        colors[i * 3 + 2] = b
    }

    // 创建缓冲区
    if (vertexBuffer) gl.deleteBuffer(vertexBuffer)
    if (colorBuffer) gl.deleteBuffer(colorBuffer)

    vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    colorBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW)
}

// 渲染点云
function render() {
    if (!gl || !shaderProgram || !pointCloudData.value) return

    const canvas = gl.canvas
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    gl.viewport(0, 0, canvas.width, canvas.height)

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.enable(gl.DEPTH_TEST)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    gl.useProgram(shaderProgram)

    // 设置变换矩阵
    const matrix = createTransformMatrix()
    const matrixLocation = gl.getUniformLocation(shaderProgram, 'u_matrix')
    gl.uniformMatrix4fv(matrixLocation, false, matrix)

    // 设置点大小
    const pointSizeLocation = gl.getUniformLocation(shaderProgram, 'u_pointSize')
    gl.uniform1f(pointSizeLocation, pointSize.value)

    // 绑定位置属性
    const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position')
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0)

    // 绑定颜色属性
    const colorLocation = gl.getAttribLocation(shaderProgram, 'a_color')
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
    gl.enableVertexAttribArray(colorLocation)
    gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0)

    // 绘制点
    const visibleCount = Math.floor(pointCloudData.value.length * pointDensity.value)
    gl.drawArrays(gl.POINTS, 0, visibleCount)
}

// 创建变换矩阵
function createTransformMatrix() {
    const matrix = new Float32Array(16)

    // 单位矩阵
    matrix[0] = 1; matrix[1] = 0; matrix[2] = 0; matrix[3] = 0
    matrix[4] = 0; matrix[5] = 1; matrix[6] = 0; matrix[7] = 0
    matrix[8] = 0; matrix[9] = 0; matrix[10] = 1; matrix[11] = 0
    matrix[12] = 0; matrix[13] = 0; matrix[14] = 0; matrix[15] = 1

    // 应用缩放
    matrix[0] *= camera.zoom
    matrix[5] *= camera.zoom
    matrix[10] *= camera.zoom

    // 应用旋转
    const cosX = Math.cos(camera.rotationX)
    const sinX = Math.sin(camera.rotationX)
    const cosY = Math.cos(camera.rotationY)
    const sinY = Math.sin(camera.rotationY)

    // Y轴旋转
    const rotY = new Float32Array(16)
    rotY[0] = cosY; rotY[2] = sinY; rotY[5] = 1; rotY[8] = -sinY; rotY[10] = cosY; rotY[15] = 1

    // X轴旋转
    const rotX = new Float32Array(16)
    rotX[0] = 1; rotX[5] = cosX; rotX[6] = -sinX; rotX[9] = sinX; rotX[10] = cosX; rotX[15] = 1

    // 矩阵乘法
    multiplyMatrix(matrix, rotY)
    multiplyMatrix(matrix, rotX)

    // 应用平移
    matrix[12] += camera.x
    matrix[13] += camera.y
    matrix[14] += camera.z

    return matrix
}

// 矩阵乘法
function multiplyMatrix(a, b) {
    const result = new Float32Array(16)
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            result[i * 4 + j] = 0
            for (let k = 0; k < 4; k++) {
                result[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j]
            }
        }
    }
    for (let i = 0; i < 16; i++) {
        a[i] = result[i]
    }
}

// 鼠标事件处理
function setupMouseEvents() {
    if (!canvas.value) return

    canvas.value.addEventListener('mousedown', (e) => {
        camera.isDragging = true
        camera.lastX = e.clientX
        camera.lastY = e.clientY
    })

    canvas.value.addEventListener('mousemove', (e) => {
        if (!camera.isDragging) return

        const deltaX = e.clientX - camera.lastX
        const deltaY = e.clientY - camera.lastY

        if (e.shiftKey) {
            // 平移
            camera.x += deltaX * 0.01
            camera.y -= deltaY * 0.01
        } else {
            // 旋转
            camera.rotationY += deltaX * 0.01
            camera.rotationX += deltaY * 0.01
        }

        camera.lastX = e.clientX
        camera.lastY = e.clientY
        render()
    })

    canvas.value.addEventListener('mouseup', () => {
        camera.isDragging = false
    })

    canvas.value.addEventListener('wheel', (e) => {
        e.preventDefault()
        const delta = e.deltaY > 0 ? 0.9 : 1.1
        camera.zoom = Math.max(0.1, Math.min(10, camera.zoom * delta))
        render()
    })

    // 触摸事件
    canvas.value.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            camera.isDragging = true
            camera.lastX = e.touches[0].clientX
            camera.lastY = e.touches[0].clientY
        }
        e.preventDefault()
    })

    canvas.value.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && camera.isDragging) {
            const deltaX = e.touches[0].clientX - camera.lastX
            const deltaY = e.touches[0].clientY - camera.lastY

            camera.rotationY += deltaX * 0.01
            camera.rotationX += deltaY * 0.01

            camera.lastX = e.touches[0].clientX
            camera.lastY = e.touches[0].clientY
            render()
        }
        e.preventDefault()
    })

    canvas.value.addEventListener('touchend', () => {
        camera.isDragging = false
    })
}

// 重置视图
function resetView() {
    camera.x = 0
    camera.y = 0
    camera.z = 0
    camera.rotationX = -0.5
    camera.rotationY = 0
    camera.zoom = 1
    render()
}

// 导出图像
function exportImage() {
    if (!canvas.value) return

    const link = document.createElement('a')
    link.download = `${fileName.value}_screenshot.png`
    link.href = canvas.value.toDataURL()
    link.click()
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 格式化边界
function formatBounds() {
    if (!pointCloudData.value) return ''
    return `X: ${bounds.minX.toFixed(2)} ~ ${bounds.maxX.toFixed(2)}, Y: ${bounds.minY.toFixed(2)} ~ ${bounds.maxY.toFixed(2)}, Z: ${bounds.minZ.toFixed(2)} ~ ${bounds.maxZ.toFixed(2)}`
}

// 动画循环
function animate() {
    if (enableAnimation.value && pointCloudData.value) {
        camera.rotationY += 0.01
        render()
    }
    animationId = requestAnimationFrame(animate)
}

// 监听设置变化
watch([coloringMode, pointSize, pointDensity], () => {
    if (pointCloudData.value) {
        setupWebGLBuffers()
        render()
    }
})

watch(enableAnimation, (newVal) => {
    if (newVal && !animationId) {
        animate()
    }
})

// 组件挂载
onMounted(async () => {
    if (initWebGL()) {
        gl.clearColor(0.1, 0.1, 0.1, 1.0);
        setupMouseEvents();
        animate();

        // Load sample data
        setTimeout(() => {
            loadSampleData();
        }, 1000);
    }
});

// 组件卸载
onUnmounted(() => {
    if (animationId) {
        cancelAnimationFrame(animationId)
    }
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

.form-checkbox {
    @apply rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50;
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
