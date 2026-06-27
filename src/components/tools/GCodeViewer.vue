<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <!-- 左侧：文件列表和控制面板 -->
            <div class="lg:col-span-1 space-y-4">
                <!-- 文件上传区域 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.gcode-viewer.fileList') }}</h2>
                    
                    <!-- 拖拽上传区域 -->
                    <div class="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="handleDrop"
                        @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false"
                        @click="fileInput?.click()"
                        :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                        <input type="file" ref="fileInput" class="hidden"
                            accept=".gcode"
                            multiple @change="handleFiles" />
                        <svg class="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="text-sm text-gray-500 text-center">{{ $t('tools.gcode-viewer.dragTip') }}</span>
                        <span class="text-xs text-gray-400 mt-1">{{ $t('tools.gcode-viewer.supported') }}</span>
                    </div>

                    <!-- 文件列表 -->
                    <div v-if="gcodeFiles.length" class="mt-3 space-y-2 max-h-[200px] overflow-y-auto">
                        <div v-for="(file, idx) in gcodeFiles" :key="idx"
                            class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            :class="{ 'ring-2 ring-blue-500': activeFileIndex === idx }"
                            @click="selectFile(idx)">
                            <div class="flex items-center space-x-2 min-w-0">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                <div class="min-w-0">
                                    <p class="text-sm font-medium truncate">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                </div>
                            </div>
                            <button class="text-red-500 hover:text-red-600 flex-shrink-0 ml-2" @click.stop="removeFile(idx)">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- 清除按钮 -->
                    <button v-if="gcodeFiles.length" 
                        class="mt-3 w-full text-sm text-red-500 hover:text-red-600 py-1"
                        @click="clearFiles">
                        {{ $t('tools.gcode-viewer.clearAll') }}
                    </button>
                </div>

                <!-- GCode信息面板 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.gcode-viewer.gcodeInfo') }}</h2>
                    
                    <div v-if="gcodeInfo" class="space-y-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-gray-500">{{ $t('tools.gcode-viewer.totalLines') }}:</span>
                            <span class="font-medium">{{ gcodeInfo.totalLines.toLocaleString() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">{{ $t('tools.gcode-viewer.totalCommands') }}:</span>
                            <span class="font-medium">{{ gcodeInfo.totalCommands.toLocaleString() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">{{ $t('tools.gcode-viewer.fileSize') }}:</span>
                            <span class="font-medium">{{ formatFileSize(gcodeInfo.fileSize) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">{{ $t('tools.gcode-viewer.estimatedTime') }}:</span>
                            <span class="font-medium">{{ gcodeInfo.estimatedTime }}</span>
                        </div>
                        <div class="border-t pt-2 mt-2">
                            <p class="text-gray-500 mb-1">{{ $t('tools.gcode-viewer.dimensions') }}:</p>
                            <div class="grid grid-cols-3 gap-2 text-center">
                                <div class="bg-gray-50 dark:bg-gray-700 p-1 rounded">
                                    <p class="text-xs text-gray-400">X</p>
                                    <p class="font-medium">{{ gcodeInfo.width.toFixed(1) }}mm</p>
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-700 p-1 rounded">
                                    <p class="text-xs text-gray-400">Y</p>
                                    <p class="font-medium">{{ gcodeInfo.height.toFixed(1) }}mm</p>
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-700 p-1 rounded">
                                    <p class="text-xs text-gray-400">Z</p>
                                    <p class="font-medium">{{ gcodeInfo.depth.toFixed(1) }}mm</p>
                                </div>
                            </div>
                        </div>
                        <div class="border-t pt-2 mt-2">
                            <p class="text-gray-500 mb-1">{{ $t('tools.gcode-viewer.printSettings') }}:</p>
                            <div class="space-y-1">
                                <div v-if="gcodeInfo.layerHeight" class="flex justify-between">
                                    <span class="text-gray-400">{{ $t('tools.gcode-viewer.layerHeight') }}:</span>
                                    <span>{{ gcodeInfo.layerHeight }}mm</span>
                                </div>
                                <div v-if="gcodeInfo.nozzleTemp" class="flex justify-between">
                                    <span class="text-gray-400">{{ $t('tools.gcode-viewer.nozzleTemp') }}:</span>
                                    <span>{{ gcodeInfo.nozzleTemp }}°C</span>
                                </div>
                                <div v-if="gcodeInfo.bedTemp" class="flex justify-between">
                                    <span class="text-gray-400">{{ $t('tools.gcode-viewer.bedTemp') }}:</span>
                                    <span>{{ gcodeInfo.bedTemp }}°C</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div v-else class="text-center py-4 text-gray-400 text-sm">
                        {{ $t('tools.gcode-viewer.noGcode') }}
                    </div>
                </div>

                <!-- 视图控制 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.gcode-viewer.viewControls') }}</h2>
                    
                    <div class="space-y-2">
                        <button class="w-full flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                            @click="resetView">
                            <span>{{ $t('tools.gcode-viewer.resetView') }}</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                        
                        <label class="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer text-sm">
                            <span>{{ $t('tools.gcode-viewer.showTravel') }}</span>
                            <input type="checkbox" v-model="showTravel" class="form-checkbox" @change="updateVisualization" />
                        </label>
                        
                        <label class="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer text-sm">
                            <span>{{ $t('tools.gcode-viewer.showRetraction') }}</span>
                            <input type="checkbox" v-model="showRetraction" class="form-checkbox" @change="updateVisualization" />
                        </label>
                        
                        <label class="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer text-sm">
                            <span>{{ $t('tools.gcode-viewer.autoRotate') }}</span>
                            <input type="checkbox" v-model="autoRotate" class="form-checkbox" @change="toggleAutoRotate" />
                        </label>
                        
                        <button class="w-full flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                            @click="toggleFullscreen">
                            <span>{{ isFullscreen ? $t('tools.gcode-viewer.exitFullscreen') : $t('tools.gcode-viewer.fullscreen') }}</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- 渲染设置 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.gcode-viewer.renderSettings') }}</h2>
                    
                    <div class="space-y-3">
                        <!-- 移动颜色 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.gcode-viewer.moveColor') }}</label>
                            <input type="color" v-model="moveColor" class="w-full h-8 cursor-pointer" @input="updateVisualization" />
                        </div>
                        
                        <!-- 回抽颜色 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.gcode-viewer.retractionColor') }}</label>
                            <input type="color" v-model="retractionColor" class="w-full h-8 cursor-pointer" @input="updateVisualization" />
                        </div>
                        
                        <!-- 背景颜色 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.gcode-viewer.backgroundColor') }}</label>
                            <input type="color" v-model="backgroundColor" class="w-full h-8 cursor-pointer" @input="updateBackgroundColor" />
                        </div>
                        
                        <!-- 线条粗细 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.gcode-viewer.lineWidth') }}</label>
                            <input type="range" v-model="lineWidth" min="0.5" max="3" step="0.1" class="w-full" @input="updateVisualization" />
                        </div>
                        
                        <!-- 显示选项 -->
                        <label class="flex items-center justify-between text-sm">
                            <span>{{ $t('tools.gcode-viewer.showGrid') }}</span>
                            <input type="checkbox" v-model="showGrid" class="form-checkbox" @change="toggleGrid" />
                        </label>
                        
                        <label class="flex items-center justify-between text-sm">
                            <span>{{ $t('tools.gcode-viewer.showAxes') }}</span>
                            <input type="checkbox" v-model="showAxes" class="form-checkbox" @change="toggleAxes" />
                        </label>
                    </div>
                </div>

                <!-- 层控制 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.gcode-viewer.layerControl') }}</h2>
                    
                    <div class="space-y-3">
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.gcode-viewer.currentLayer') }}: {{ currentLayer }} / {{ totalLayers }}</label>
                            <input type="range" v-model="currentLayer" :min="1" :max="totalLayers" step="1" class="w-full" @input="updateLayer" />
                        </div>
                        
                        <div class="flex space-x-2">
                            <button class="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                                @click="prevLayer">
                                {{ $t('tools.gcode-viewer.prevLayer') }}
                            </button>
                            <button class="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                                @click="nextLayer">
                                {{ $t('tools.gcode-viewer.nextLayer') }}
                            </button>
                        </div>
                        
                        <button class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                            @click="playLayerAnimation">
                            {{ isPlaying ? $t('tools.gcode-viewer.stopAnimation') : $t('tools.gcode-viewer.playAnimation') }}
                        </button>
                    </div>
                </div>

                <!-- 导出功能 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.gcode-viewer.export') }}</h2>
                    
                    <div class="space-y-3">
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.gcode-viewer.screenshotFormat') }}</label>
                            <select v-model="screenshotFormat" class="w-full px-3 py-2 border rounded text-sm dark:bg-gray-700 dark:border-gray-600">
                                <option value="png">PNG</option>
                                <option value="jpeg">JPEG</option>
                            </select>
                        </div>
                        
                        <label class="flex items-center justify-between text-sm">
                            <span>{{ $t('tools.gcode-viewer.transparentBg') }}</span>
                            <input type="checkbox" v-model="transparentBg" class="form-checkbox" />
                        </label>
                        
                        <button class="w-full btn btn-primary" @click="exportScreenshot">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {{ $t('tools.gcode-viewer.screenshot') }}
                        </button>
                    </div>
                </div>

                <!-- 提示 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h3 class="font-semibold mb-2 text-sm">{{ $t('tools.gcode-viewer.tipsTitle') }}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.gcode-viewer.tipContent') }}</p>
                </div>
            </div>

            <!-- 右侧：3D 视图 -->
            <div class="lg:col-span-3 h-full">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative w-full h-full" 
                    ref="viewerContainer"
                    @dblclick="resetView">
                    <!-- 加载状态 -->
                    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg flex items-center space-x-3">
                            <svg class="animate-spin h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>{{ $t('tools.gcode-viewer.loading') }}</span>
                        </div>
                    </div>
                    
                    <!-- 空状态 -->
                    <div v-if="!gcodeFiles.length && !isLoading" class="flex flex-col items-center justify-center h-[600px] text-gray-400">
                        <svg class="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <p class="text-lg">{{ $t('tools.gcode-viewer.noGcode') }}</p>
                        <p class="text-sm mt-2">{{ $t('tools.gcode-viewer.dragTip') }}</p>
                        <!-- 重试按钮（如果场景初始化失败） -->
                        <button v-if="!scene" 
                            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            @click="initScene">
                            {{ $t('tools.gcode-viewer.retryInit') }}
                        </button>
                    </div>
                    
                    <!-- Three.js 画布容器 -->
                    <div ref="canvasContainer" class="w-full h-full" v-show="gcodeFiles.length > 0">
                        <!-- 如果场景初始化失败，显示错误消息 -->
                        <div v-if="gcodeFiles.length > 0 && !scene" class="flex flex-col items-center justify-center h-full text-red-500">
                            <p>{{ $t('tools.gcode-viewer.renderInitFailed') }}</p>
                            <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="initScene">
                                {{ $t('tools.gcode-viewer.retry') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <GCodeViewerArticle />
        <Toast ref="toastRef" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GCodeViewerArticle from './GCodeViewerArticle.vue'
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// Refs
const fileInput = ref(null)
const viewerContainer = ref(null)
const canvasContainer = ref(null)
const isDragging = ref(false)
const isLoading = ref(false)
const isFullscreen = ref(false)

// 文件相关
const gcodeFiles = ref([])
const activeFileIndex = ref(-1)

// GCode信息
const gcodeInfo = ref(null)

// 视图控制
const showTravel = ref(true)
const showRetraction = ref(true)
const autoRotate = ref(false)

// 渲染设置
const moveColor = ref('#00ff00')
const retractionColor = ref('#ff0000')
const backgroundColor = ref('#1a1a2e')
const lineWidth = ref(1.5)
const showGrid = ref(true)
const showAxes = ref(true)

// 层控制
const currentLayer = ref(1)
const totalLayers = ref(1)
const isPlaying = ref(false)
let playInterval = null

// 导出设置
const screenshotFormat = ref('png')
const transparentBg = ref(false)

// Three.js 相关变量
let scene, camera, renderer, controls
let gcodeGroup = null
let gridHelper, axesHelper
let gcodeData = null

// 初始化 Three.js 场景
function initScene() {
    if (!canvasContainer.value) {
        console.warn('canvasContainer not ready, retrying...')
        setTimeout(initScene, 100)
        return
    }

    let width = canvasContainer.value.clientWidth
    let height = canvasContainer.value.clientHeight
    
    if (width === 0 || height === 0) {
        width = 800
        height = 600
        console.log('Container not visible, using default size:', width, 'x', height)
    }

    // 场景
    scene = new THREE.Scene()
    updateBackgroundColor()

    // 相机
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
    camera.position.set(100, 80, 100)

    // 渲染器
    try {
        renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            preserveDrawingBuffer: true 
        })
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        
        while (canvasContainer.value.firstChild) {
            canvasContainer.value.removeChild(canvasContainer.value.firstChild)
        }
        canvasContainer.value.appendChild(renderer.domElement)
    } catch (error) {
        console.error('WebGL renderer creation failed:', error)
        setTimeout(() => {
            toastRef.value?.show(t('tools.gcode-viewer.webglError'))
        }, 100)
        return
    }

    // 控制器
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = autoRotate.value
    controls.autoRotateSpeed = 2

    // 网格
    gridHelper = new THREE.GridHelper(200, 20, 0xcccccc, 0xeeeeee)
    gridHelper.visible = showGrid.value
    scene.add(gridHelper)

    // 坐标轴
    axesHelper = new THREE.AxesHelper(100)
    axesHelper.visible = showAxes.value
    scene.add(axesHelper)

    // 动画循环
    animate()

    // 监听窗口大小变化
    window.addEventListener('resize', onWindowResize)
    
    console.log('Three.js scene initialized successfully')
}

// 动画循环
function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
}

// 窗口大小变化处理
function onWindowResize() {
    if (!canvasContainer.value || !camera || !renderer) return
    camera.aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// 处理文件上传
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer?.files || [])
    files.forEach(file => {
        const ext = file.name.toLowerCase().split('.').pop()
        if (ext === 'gcode') {
            gcodeFiles.value.push(file)
        }
    })
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
    
    if (gcodeFiles.value.length > 0 && activeFileIndex.value === -1) {
        nextTick(() => {
            selectFile(0)
        })
    }
}

function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 选择文件
async function selectFile(idx) {
    if (idx < 0 || idx >= gcodeFiles.value.length) return
    activeFileIndex.value = idx
    await loadGCode(gcodeFiles.value[idx])
}

// 移除文件
function removeFile(idx) {
    gcodeFiles.value.splice(idx, 1)
    if (activeFileIndex.value === idx) {
        if (gcodeFiles.value.length > 0) {
            selectFile(Math.min(idx, gcodeFiles.value.length - 1))
        } else {
            activeFileIndex.value = -1
            clearGCode()
        }
    } else if (activeFileIndex.value > idx) {
        activeFileIndex.value--
    }
}

// 清除所有文件
function clearFiles() {
    gcodeFiles.value = []
    activeFileIndex.value = -1
    clearGCode()
}

// 清除GCode
function clearGCode() {
    if (gcodeGroup) {
        scene.remove(gcodeGroup)
        gcodeGroup = null
    }
    gcodeInfo.value = null
    gcodeData = null
    totalLayers.value = 1
    currentLayer.value = 1
}

// 加载GCode文件
async function loadGCode(file) {
    isLoading.value = true
    
    if (!scene || !renderer) {
        console.log('Scene not initialized, initializing now...')
        initScene()
        await new Promise(resolve => setTimeout(resolve, 300))
        
        if (!scene || !renderer) {
            console.error('Failed to initialize scene')
            toastRef.value?.show(t('tools.gcode-viewer.webglError'))
            isLoading.value = false
            return
        }
    }
    
    if (canvasContainer.value && canvasContainer.value.clientWidth > 0) {
        const width = canvasContainer.value.clientWidth
        const height = canvasContainer.value.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
    }
    
    clearGCode()

    try {
        const text = await file.text()
        gcodeData = parseGCode(text)
        
        if (gcodeData.commands.length === 0) {
            toastRef.value?.show(t('tools.gcode-viewer.parseError'))
            isLoading.value = false
            return
        }
        
        // 更新GCode信息
        gcodeInfo.value = {
            totalLines: gcodeData.totalLines,
            totalCommands: gcodeData.commands.length,
            fileSize: file.size,
            estimatedTime: gcodeData.estimatedTime,
            width: gcodeData.bounds.maxX - gcodeData.bounds.minX,
            height: gcodeData.bounds.maxY - gcodeData.bounds.minY,
            depth: gcodeData.bounds.maxZ - gcodeData.bounds.minZ,
            layerHeight: gcodeData.layerHeight,
            nozzleTemp: gcodeData.nozzleTemp,
            bedTemp: gcodeData.bedTemp
        }
        
        totalLayers.value = gcodeData.totalLayers
        currentLayer.value = 1
        
        // 创建可视化
        createVisualization()
        
        // 更新网格位置以匹配打印床
        updateGridPosition()
        
        // 自动调整相机
        fitCameraToObject()
        
        console.log('GCode loaded successfully')
    } catch (error) {
        console.error('Load GCode failed:', error)
        toastRef.value?.show(t('tools.gcode-viewer.loadError'))
    } finally {
        isLoading.value = false
    }
}

// 解析GCode文件
function parseGCode(text) {
    const lines = text.split('\n')
    const commands = []
    const bounds = { minX: Infinity, minY: Infinity, minZ: Infinity, maxX: -Infinity, maxY: -Infinity, maxZ: -Infinity }
    let currentX = 0, currentY = 0, currentZ = 0
    let currentE = 0
    let currentLayer = 0
    let layerHeight = null
    let nozzleTemp = null
    let bedTemp = null
    let isAbsolutePositioning = true
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        
        // 跳过注释和空行
        if (!line || line.startsWith(';')) {
            // 尝试提取层信息
            if (line.includes('LAYER:') || line.includes('layer ')) {
                const layerMatch = line.match(/(\d+)/)
                if (layerMatch) {
                    currentLayer = parseInt(layerMatch[1])
                }
            }
            
            // 尝试提取打印设置
            if (line.includes('layer_height') || line.includes('Layer height')) {
                const match = line.match(/[\d.]+/)
                if (match) {
                    layerHeight = parseFloat(match[0])
                }
            }
            if (line.includes('temperature') && line.includes('nozzle')) {
                const match = line.match(/[\d.]+/)
                if (match) {
                    nozzleTemp = parseFloat(match[0])
                }
            }
            if (line.includes('temperature') && line.includes('bed')) {
                const match = line.match(/[\d.]+/)
                if (match) {
                    bedTemp = parseFloat(match[0])
                }
            }
            
            continue
        }
        
        // 解析命令
        const parts = line.split(' ')
        const command = parts[0]
        
        if (command === 'G0' || command === 'G1') {
            let newX = currentX, newY = currentY, newZ = currentZ
            let newE = currentE
            let isMove = false
            let isExtrude = false
            
            for (let j = 1; j < parts.length; j++) {
                const param = parts[j]
                const letter = param[0]
                const value = parseFloat(param.substring(1))
                
                if (letter === 'X') {
                    newX = isAbsolutePositioning ? value : currentX + value
                    isMove = true
                } else if (letter === 'Y') {
 newY = isAbsolutePositioning ? value : currentY + value
                    isMove = true
                } else if (letter === 'Z') {
                    newZ = isAbsolutePositioning ? value : currentZ + value
                    isMove = true
                } else if (letter === 'E') {
                    newE = isAbsolutePositioning ? value : currentE + value
                    isExtrude = true
                }
            }
            
            if (isMove) {
                const isRetraction = newE < currentE
                commands.push({
                    type: isExtrude ? 'extrude' : 'travel',
                    isRetraction,
                    from: { x: currentX, y: currentY, z: currentZ },
                    to: { x: newX, y: newY, z: newZ },
                    layer: currentLayer
                })
                
                currentX = newX
                currentY = newY
                currentZ = newZ
                currentE = newE
                
                // 更新边界
                bounds.minX = Math.min(bounds.minX, newX)
                bounds.minY = Math.min(bounds.minY, newY)
                bounds.minZ = Math.min(bounds.minZ, newZ)
                bounds.maxX = Math.max(bounds.maxX, newX)
                bounds.maxY = Math.max(bounds.maxY, newY)
                bounds.maxZ = Math.max(bounds.maxZ, newZ)
            }
        } else if (command === 'G28') {
            // 归位命令
            currentX = 0
            currentY = 0
            currentZ = 0
        } else if (command === 'G90') {
            // 绝对定位
            isAbsolutePositioning = true
        } else if (command === 'G91') {
            // 相对定位
            isAbsolutePositioning = false
        } else if (command === 'M82') {
            // 绝对挤出
            // 已经默认是绝对挤出
        } else if (command === 'M83') {
            // 相对挤出
            // 需要处理相对挤出逻辑
        }
    }
    
    // 计算估计时间（简化计算）
    let totalTime = 0
    for (const cmd of commands) {
        if (cmd.type === 'extrude') {
            const distance = Math.sqrt(
                Math.pow(cmd.to.x - cmd.from.x, 2) +
                Math.pow(cmd.to.y - cmd.from.y, 2) +
                Math.pow(cmd.to.z - cmd.from.z, 2)
            )
            totalTime += distance / 60 // 假设60mm/s的速度
        }
    }
    
    const hours = Math.floor(totalTime / 3600)
    const minutes = Math.floor((totalTime % 3600) / 60)
    const estimatedTime = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
    
    return {
        commands,
        bounds,
        totalLines: lines.length,
        totalLayers: currentLayer + 1,
        estimatedTime,
        layerHeight,
        nozzleTemp,
        bedTemp
    }
}

// 创建可视化
function createVisualization() {
    if (!gcodeData || !scene) return
    
    gcodeGroup = new THREE.Group()
    
    // 创建路径线条
    for (const cmd of gcodeData.commands) {
        if (!showTravel.value && cmd.type === 'travel') continue
        if (!showRetraction.value && cmd.isRetraction) continue
        
        const material = new THREE.LineBasicMaterial({
            color: cmd.isRetraction ? retractionColor.value : moveColor.value,
            linewidth: lineWidth.value
        })
        
        const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(cmd.from.x, cmd.from.z, cmd.from.y),
            new THREE.Vector3(cmd.to.x, cmd.to.z, cmd.to.y)
        ])
        
        const line = new THREE.Line(geometry, material)
        gcodeGroup.add(line)
    }
    
    scene.add(gcodeGroup)
}

// 更新可视化
function updateVisualization() {
    if (!gcodeData) return
    
    // 移除旧的可视化
    if (gcodeGroup) {
        scene.remove(gcodeGroup)
        gcodeGroup = null
    }
    
    // 创建新的可视化
    createVisualization()
}

// 更新层显示
function updateLayer() {
    if (!gcodeData || !gcodeGroup) return
    
    // 隐藏所有层
    gcodeGroup.children.forEach(child => {
        child.visible = true
    })
    
    // 只显示当前层及以下的层
    gcodeGroup.children.forEach((child, index) => {
        const cmd = gcodeData.commands[index]
        if (cmd) {
            child.visible = cmd.layer < currentLayer.value
        }
    })
}

// 上一层
function prevLayer() {
    if (currentLayer.value > 1) {
        currentLayer.value--
        updateLayer()
    }
}

// 下一层
function nextLayer() {
    if (currentLayer.value < totalLayers.value) {
        currentLayer.value++
        updateLayer()
    }
}

// 播放层动画
function playLayerAnimation() {
    if (isPlaying.value) {
        clearInterval(playInterval)
        isPlaying.value = false
        return
    }
    
    isPlaying.value = true
    currentLayer.value = 1
    updateLayer()
    
    playInterval = setInterval(() => {
        if (currentLayer.value < totalLayers.value) {
            currentLayer.value++
            updateLayer()
        } else {
            clearInterval(playInterval)
            isPlaying.value = false
        }
    }, 100)
}

// 更新网格位置以匹配打印床
function updateGridPosition() {
    if (!gcodeData || !gridHelper) return
    
    const bounds = gcodeData.bounds
    
    // 计算打印床尺寸
    const bedWidth = bounds.maxX - bounds.minX
    const bedDepth = bounds.maxY - bounds.minY  // GCode Y是深度
    
    // 网格需要足够大来覆盖打印床
    const gridSize = Math.max(bedWidth, bedDepth, 200) * 1.2
    
    // 更新网格大小
    scene.remove(gridHelper)
    gridHelper = new THREE.GridHelper(gridSize, Math.floor(gridSize / 10), 0xcccccc, 0xeeeeee)
    gridHelper.visible = showGrid.value
    
    // 网格位置：在打印床中心，Y=0（打印床表面）
    const centerX = (bounds.minX + bounds.maxX) / 2
    const centerZ = (bounds.minY + bounds.maxY) / 2  // GCode Y -> Three.js Z
    gridHelper.position.set(centerX, 0, centerZ)
    
    scene.add(gridHelper)
}

// 调整相机以适应对象
function fitCameraToObject() {
    if (!gcodeData) return
    
    const bounds = gcodeData.bounds
    
    // GCode坐标系: X=X, Y=Y(深度), Z=Z(高度)
    // Three.js坐标系: X=X, Y=Z(高度), Z=Y(深度)
    // 所以Three.js的centerX = GCode的centerX
    //    Three.js的centerY = GCode的centerZ (高度)
    //    Three.js的centerZ = GCode的centerY (深度)
    const centerX = (bounds.minX + bounds.maxX) / 2
    const threeCenterY = (bounds.minZ + bounds.maxZ) / 2  // GCode Z -> Three.js Y
    const threeCenterZ = (bounds.minY + bounds.maxY) / 2  // GCode Y -> Three.js Z
    
    const sizeX = bounds.maxX - bounds.minX
    const sizeY = bounds.maxY - bounds.minY  // GCode Y (深度)
    const sizeZ = bounds.maxZ - bounds.minZ  // GCode Z (高度)
    const maxDim = Math.max(sizeX, sizeY, sizeZ)
    
    const fov = camera.fov * (Math.PI / 180)
    let cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)))
    cameraZ *= 1.5
    
    // 设置相机位置和朝向
    camera.position.set(centerX + cameraZ, threeCenterY + cameraZ * 0.7, threeCenterZ + cameraZ)
    camera.lookAt(centerX, threeCenterY, threeCenterZ)
    
    // 更新控制器目标
    controls.target.set(centerX, threeCenterY, threeCenterZ)
    controls.update()
    
    // 更新网格位置 - 网格应该在打印床的Y=0平面上
    if (gridHelper) {
        gridHelper.position.set(centerX, 0, threeCenterZ)
    }
    
    // 更新坐标轴位置
    if (axesHelper) {
        axesHelper.position.set(0, 0, 0)
    }
}

// 重置视角
function resetView() {
    if (gcodeData) {
        fitCameraToObject()
    } else {
        // 没有数据时，将相机放在一个合适的默认位置
        camera.position.set(100, 80, 100)
        camera.lookAt(0, 0, 0)
        controls.target.set(0, 0, 0)
    }
    controls.update()
}

// 切换自动旋转
function toggleAutoRotate() {
    controls.autoRotate = autoRotate.value
}

// 切换全屏
function toggleFullscreen() {
    if (!viewerContainer.value) return
    
    if (!document.fullscreenElement) {
        viewerContainer.value.requestFullscreen().then(() => {
            isFullscreen.value = true
            nextTick(onWindowResize)
        }).catch(err => {
            console.error(t('tools.gcode-viewer.fullscreenFailed'), err)
        })
    } else {
        document.exitFullscreen().then(() => {
            isFullscreen.value = false
            nextTick(onWindowResize)
        })
    }
}

// 更新背景颜色
function updateBackgroundColor() {
    if (scene) {
        scene.background = new THREE.Color(backgroundColor.value)
    }
}

// 切换网格显示
function toggleGrid() {
    if (gridHelper) {
        gridHelper.visible = showGrid.value
    }
}

// 切换坐标轴显示
function toggleAxes() {
    if (axesHelper) {
        axesHelper.visible = showAxes.value
    }
}

// 导出截图
function exportScreenshot() {
    if (!renderer) return
    
    const originalBackground = scene.background
    if (transparentBg.value) {
        scene.background = null
    }
    
    renderer.render(scene, camera)
    
    const dataUrl = renderer.domElement.toDataURL(`image/${screenshotFormat.value}`)
    
    if (transparentBg.value) {
        scene.background = originalBackground
    }
    
    const link = document.createElement('a')
    link.download = `gcode-screenshot.${screenshotFormat.value}`
    link.href = dataUrl
    link.click()
}

// 监听全屏变化
function onFullscreenChange() {
    isFullscreen.value = !!document.fullscreenElement
    nextTick(onWindowResize)
}

// 组件挂载
onMounted(() => {
    nextTick(() => {
        initScene()
    })
    document.addEventListener('fullscreenchange', onFullscreenChange)
})

// 组件卸载
onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize)
    document.removeEventListener('fullscreenchange', onFullscreenChange)
    
    if (playInterval) {
        clearInterval(playInterval)
    }
    
    if (renderer) {
        renderer.dispose()
    }
    if (controls) {
        controls.dispose()
    }
})
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }
}
</style>