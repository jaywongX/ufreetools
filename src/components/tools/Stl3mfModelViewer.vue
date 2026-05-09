<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <!-- 左侧：文件列表和控制面板 -->
            <div class="lg:col-span-1 space-y-4">
                <!-- 文件上传区域 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.stl-3mf-model-viewer.fileList') }}</h2>
                    
                    <!-- 拖拽上传区域 -->
                    <div class="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="handleDrop"
                        @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false"
                        @click="fileInput?.click()"
                        :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                        <input type="file" ref="fileInput" class="hidden"
                            accept=".stl,.3mf"
                            multiple @change="handleFiles" />
                        <svg class="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="text-sm text-gray-500 text-center">{{ $t('tools.stl-3mf-model-viewer.dragTip') }}</span>
                        <span class="text-xs text-gray-400 mt-1">{{ $t('tools.stl-3mf-model-viewer.supported') }}</span>
                    </div>

                    <!-- 文件列表 -->
                    <div v-if="modelFiles.length" class="mt-3 space-y-2 max-h-[200px] overflow-y-auto">
                        <div v-for="(file, idx) in modelFiles" :key="idx"
                            class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            :class="{ 'ring-2 ring-blue-500': activeFileIndex === idx }"
                            @click="selectFile(idx)">
                            <div class="flex items-center space-x-2 min-w-0">
                                <svg class="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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
                    <button v-if="modelFiles.length" 
                        class="mt-3 w-full text-sm text-red-500 hover:text-red-600 py-1"
                        @click="clearFiles">
                        {{ $t('tools.stl-3mf-model-viewer.clearAll') }}
                    </button>
                </div>

                <!-- 模型信息面板 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.stl-3mf-model-viewer.modelInfo') }}</h2>
                    
                    <div v-if="modelInfo" class="space-y-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-gray-500">{{ $t('tools.stl-3mf-model-viewer.vertices') }}:</span>
                            <span class="font-medium">{{ modelInfo.vertices.toLocaleString() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">{{ $t('tools.stl-3mf-model-viewer.faces') }}:</span>
                            <span class="font-medium">{{ modelInfo.faces.toLocaleString() }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">{{ $t('tools.stl-3mf-model-viewer.fileSize') }}:</span>
                            <span class="font-medium">{{ formatFileSize(modelInfo.fileSize) }}</span>
                        </div>
                        <div class="border-t pt-2 mt-2">
                            <p class="text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.dimensions') }}:</p>
                            <div class="grid grid-cols-3 gap-2 text-center">
                                <div class="bg-gray-50 dark:bg-gray-700 p-1 rounded">
                                    <p class="text-xs text-gray-400">X</p>
                                    <p class="font-medium">{{ modelInfo.width.toFixed(1) }}mm</p>
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-700 p-1 rounded">
                                    <p class="text-xs text-gray-400">Y</p>
                                    <p class="font-medium">{{ modelInfo.height.toFixed(1) }}mm</p>
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-700 p-1 rounded">
                                    <p class="text-xs text-gray-400">Z</p>
                                    <p class="font-medium">{{ modelInfo.depth.toFixed(1) }}mm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div v-else class="text-center py-4 text-gray-400 text-sm">
                        {{ $t('tools.stl-3mf-model-viewer.noModel') }}
                    </div>
                </div>

                <!-- 视图控制 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.stl-3mf-model-viewer.viewControls') }}</h2>
                    
                    <div class="space-y-2">
                        <button class="w-full flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                            @click="resetView">
                            <span>{{ $t('tools.stl-3mf-model-viewer.resetView') }}</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                        
                        <label class="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer text-sm">
                            <span>{{ $t('tools.stl-3mf-model-viewer.wireframe') }}</span>
                            <input type="checkbox" v-model="wireframeMode" class="form-checkbox" @change="toggleWireframe" />
                        </label>
                        
                        <label class="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer text-sm">
                            <span>{{ $t('tools.stl-3mf-model-viewer.autoRotate') }}</span>
                            <input type="checkbox" v-model="autoRotate" class="form-checkbox" @change="toggleAutoRotate" />
                        </label>
                        
                        <button class="w-full flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                            @click="toggleFullscreen">
                            <span>{{ isFullscreen ? $t('tools.stl-3mf-model-viewer.exitFullscreen') : $t('tools.stl-3mf-model-viewer.fullscreen') }}</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- 渲染设置 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.stl-3mf-model-viewer.renderSettings') }}</h2>
                    
                    <div class="space-y-3">
                        <!-- 材质颜色 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.materialColor') }}</label>
                            <input type="color" v-model="materialColor" class="w-full h-8 cursor-pointer" @input="updateMaterialColor" />
                        </div>
                        
                        <!-- 背景颜色 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.backgroundColor') }}</label>
                            <input type="color" v-model="backgroundColor" class="w-full h-8 cursor-pointer" @input="updateBackgroundColor" />
                        </div>
                        
                        <!-- 预设材质 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.presetMaterials') }}</label>
                            <div class="grid grid-cols-2 gap-2">
                                <button v-for="mat in presetMaterials" :key="mat.key"
                                    class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                    :class="{ 'ring-2 ring-blue-500': activeMaterial === mat.key }"
                                    @click="applyMaterial(mat)">
                                    {{ mat.name }}
                                </button>
                            </div>
                        </div>
                        
                        <!-- 背景预设 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.presetBackgrounds') }}</label>
                            <div class="grid grid-cols-2 gap-2">
                                <button v-for="bg in presetBackgrounds" :key="bg.key"
                                    class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                    :class="{ 'ring-2 ring-blue-500': activeBackground === bg.key }"
                                    @click="applyBackground(bg)">
                                    {{ bg.name }}
                                </button>
                            </div>
                        </div>
                        
                        <!-- 显示选项 -->
                        <label class="flex items-center justify-between text-sm">
                            <span>{{ $t('tools.stl-3mf-model-viewer.showGrid') }}</span>
                            <input type="checkbox" v-model="showGrid" class="form-checkbox" @change="toggleGrid" />
                        </label>
                        
                        <label class="flex items-center justify-between text-sm">
                            <span>{{ $t('tools.stl-3mf-model-viewer.showAxes') }}</span>
                            <input type="checkbox" v-model="showAxes" class="form-checkbox" @change="toggleAxes" />
                        </label>
                        
                        <!-- 光照强度 -->
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.ambientLight') }}</label>
                            <input type="range" v-model="ambientLightIntensity" min="0" max="2" step="0.1" class="w-full" @input="updateLighting" />
                        </div>
                        
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.directionalLight') }}</label>
                            <input type="range" v-model="directionalLightIntensity" min="0" max="2" step="0.1" class="w-full" @input="updateLighting" />
                        </div>
                    </div>
                </div>

                <!-- 导出功能 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-lg font-bold mb-3">{{ $t('tools.stl-3mf-model-viewer.export') }}</h2>
                    
                    <div class="space-y-3">
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">{{ $t('tools.stl-3mf-model-viewer.screenshotFormat') }}</label>
                            <select v-model="screenshotFormat" class="w-full px-3 py-2 border rounded text-sm dark:bg-gray-700 dark:border-gray-600">
                                <option value="png">PNG</option>
                                <option value="jpeg">JPEG</option>
                            </select>
                        </div>
                        
                        <label class="flex items-center justify-between text-sm">
                            <span>{{ $t('tools.stl-3mf-model-viewer.transparentBg') }}</span>
                            <input type="checkbox" v-model="transparentBg" class="form-checkbox" />
                        </label>
                        
                        <button class="w-full btn btn-primary" @click="exportScreenshot">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {{ $t('tools.stl-3mf-model-viewer.screenshot') }}
                        </button>
                    </div>
                </div>

                <!-- 提示 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h3 class="font-semibold mb-2 text-sm">{{ $t('tools.stl-3mf-model-viewer.tipsTitle') }}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.stl-3mf-model-viewer.tipContent') }}</p>
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
                            <span>{{ $t('tools.stl-3mf-model-viewer.loading') }}</span>
                        </div>
                    </div>
                    
                    <!-- 空状态 -->
                    <div v-if="!modelFiles.length && !isLoading" class="flex flex-col items-center justify-center h-[600px] text-gray-400">
                        <svg class="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <p class="text-lg">{{ $t('tools.stl-3mf-model-viewer.noModel') }}</p>
                        <p class="text-sm mt-2">{{ $t('tools.stl-3mf-model-viewer.dragTip') }}</p>
                        <!-- 重试按钮（如果场景初始化失败） -->
                        <button v-if="!scene" 
                            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            @click="initScene">
                            {{ $t('tools.stl-3mf-model-viewer.retryInit') }}
                        </button>
                    </div>
                    
                    <!-- Three.js 画布容器 -->
                    <div ref="canvasContainer" class="w-full h-full" v-show="modelFiles.length > 0">
                        <!-- 如果场景初始化失败，显示错误消息 -->
                        <div v-if="modelFiles.length > 0 && !scene" class="flex flex-col items-center justify-center h-full text-red-500">
                            <p>{{ $t('tools.stl-3mf-model-viewer.renderInitFailed') }}</p>
                            <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="initScene">
                                {{ $t('tools.stl-3mf-model-viewer.retry') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Stl3mfModelViewerArticle />
        <Toast ref="toastRef" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import Stl3mfModelViewerArticle from './Stl3mfModelViewerArticle.vue'
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
const modelFiles = ref([])
const activeFileIndex = ref(-1)

// 模型信息
const modelInfo = ref(null)

// 视图控制
const wireframeMode = ref(false)
const autoRotate = ref(false)

// 渲染设置
const materialColor = ref('#4a90d9')
const backgroundColor = ref('#f5f5f5')
const showGrid = ref(true)
const showAxes = ref(true)
const ambientLightIntensity = ref(0.6)
const directionalLightIntensity = ref(0.8)
const activeMaterial = ref('default')
const activeBackground = ref('gradient')

// 导出设置
const screenshotFormat = ref('png')
const transparentBg = ref(false)

// 预设材质
const presetMaterials = computed(() => [
    { key: 'pla', name: t('tools.stl-3mf-model-viewer.materialPla'), color: '#4a90d9', metalness: 0.1, roughness: 0.8 },
    { key: 'resin', name: t('tools.stl-3mf-model-viewer.materialResin'), color: '#e8e8e8', metalness: 0.3, roughness: 0.2 },
    { key: 'metal', name: t('tools.stl-3mf-model-viewer.materialMetal'), color: '#c0c0c0', metalness: 0.9, roughness: 0.1 },
    { key: 'default', name: t('tools.stl-3mf-model-viewer.materialDefault'), color: '#4a90d9', metalness: 0.2, roughness: 0.6 }
])

// 预设背景
const presetBackgrounds = computed(() => [
    { key: 'checker', name: t('tools.stl-3mf-model-viewer.bgChecker'), type: 'checker' },
    { key: 'white', name: t('tools.stl-3mf-model-viewer.bgWhite'), color: '#ffffff' },
    { key: 'black', name: t('tools.stl-3mf-model-viewer.bgBlack'), color: '#000000' },
    { key: 'gradient', name: t('tools.stl-3mf-model-viewer.bgGradient'), type: 'gradient' }
])

// Three.js 相关变量
let scene, camera, renderer, controls
let currentModel = null
let gridHelper, axesHelper
let ambientLight, directionalLight

// 初始化 Three.js 场景
function initScene() {
    if (!canvasContainer.value) {
        console.warn('canvasContainer not ready, retrying...')
        // 如果容器还没准备好，延迟重试
        setTimeout(initScene, 100)
        return
    }

    // 检查容器尺寸 - 如果容器不可见，使用默认尺寸
    let width = canvasContainer.value.clientWidth
    let height = canvasContainer.value.clientHeight
    
    // 如果容器不可见（被v-show隐藏），使用默认尺寸
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
    camera.position.set(100, 100, 100)

    // 渲染器
    try {
        renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            preserveDrawingBuffer: true 
        })
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.shadowMap.enabled = true
        
        // 清除可能存在的旧canvas
        while (canvasContainer.value.firstChild) {
            canvasContainer.value.removeChild(canvasContainer.value.firstChild)
        }
        canvasContainer.value.appendChild(renderer.domElement)
    } catch (error) {
        console.error('WebGL renderer creation failed:', error)
        // 延迟显示错误，确保toast组件已准备好
        setTimeout(() => {
            toastRef.value?.show(t('tools.stl-3mf-model-viewer.webglError'))
        }, 100)
        return
    }

    // 控制器
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = autoRotate.value
    controls.autoRotateSpeed = 2

    // 光照
    ambientLight = new THREE.AmbientLight(0xffffff, ambientLightIntensity.value)
    scene.add(ambientLight)

    directionalLight = new THREE.DirectionalLight(0xffffff, directionalLightIntensity.value)
    directionalLight.position.set(100, 100, 100)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // 辅助光源
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3)
    directionalLight2.position.set(-100, -50, -100)
    scene.add(directionalLight2)

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
        if (ext === 'stl' || ext === '3mf') {
            modelFiles.value.push(file)
        }
    })
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
    
    // 自动加载第一个文件
    if (modelFiles.value.length > 0 && activeFileIndex.value === -1) {
        // 延迟一点让DOM更新
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
    if (idx < 0 || idx >= modelFiles.value.length) return
    activeFileIndex.value = idx
    await loadModel(modelFiles.value[idx])
}

// 移除文件
function removeFile(idx) {
    modelFiles.value.splice(idx, 1)
    if (activeFileIndex.value === idx) {
        if (modelFiles.value.length > 0) {
            selectFile(Math.min(idx, modelFiles.value.length - 1))
        } else {
            activeFileIndex.value = -1
            clearModel()
        }
    } else if (activeFileIndex.value > idx) {
        activeFileIndex.value--
    }
}

// 清除所有文件
function clearFiles() {
    modelFiles.value = []
    activeFileIndex.value = -1
    clearModel()
}

// 清除模型
function clearModel() {
    if (currentModel) {
        scene.remove(currentModel)
        currentModel.geometry.dispose()
        currentModel.material.dispose()
        currentModel = null
    }
    modelInfo.value = null
}

// 加载模型
async function loadModel(file) {
    isLoading.value = true
    
    // 确保场景已初始化
    if (!scene || !renderer) {
        console.log('Scene not initialized, initializing now...')
        initScene()
        // 等待场景初始化完成
        await new Promise(resolve => setTimeout(resolve, 300))
        
        // 再次检查场景是否初始化成功
        if (!scene || !renderer) {
            console.error('Failed to initialize scene')
            toastRef.value?.show(t('tools.stl-3mf-model-viewer.webglError'))
            isLoading.value = false
            return
        }
    }
    
    // 如果容器现在可见，更新渲染器尺寸
    if (canvasContainer.value && canvasContainer.value.clientWidth > 0) {
        const width = canvasContainer.value.clientWidth
        const height = canvasContainer.value.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
    }
    
    clearModel()

    try {
        const ext = file.name.toLowerCase().split('.').pop()
        
        if (ext === 'stl') {
            await loadSTL(file)
        } else if (ext === '3mf') {
            // 3MF 加载需要特殊处理
            // 暂时显示不支持消息
            toastRef.value?.show(t('tools.stl-3mf-model-viewer.unsupported3mf'))
            isLoading.value = false
            return
        }
    } catch (error) {
        console.error('Load model failed:', error)
        // 提供更详细的错误信息
        let errorMessage = t('tools.stl-3mf-model-viewer.loadError')
        if (error.message) {
            console.error('Error details:', error.message)
            // 如果是WebGL错误，显示特定消息
            if (error.message.includes('WebGL')) {
                errorMessage = t('tools.stl-3mf-model-viewer.webglError')
            }
        }
        toastRef.value?.show(errorMessage)
    } finally {
        isLoading.value = false
    }
}

// 加载 STL 文件
async function loadSTL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            try {
                console.log('STL file loaded, parsing...')
                const loader = new STLLoader()
                const geometry = loader.parse(e.target.result)
                
                console.log('Geometry parsed, vertices:', geometry.attributes.position.count)
                
                // 计算法线
                geometry.computeVertexNormals()
                
                // 创建材质
                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(materialColor.value),
                    metalness: 0.2,
                    roughness: 0.6,
                    side: THREE.DoubleSide
                })
                
                // 创建网格
                const mesh = new THREE.Mesh(geometry, material)
                mesh.castShadow = true
                mesh.receiveShadow = true
                
                // 计算包围盒
                geometry.computeBoundingBox()
                const box = geometry.boundingBox
                const center = box.getCenter(new THREE.Vector3())
                const size = box.getSize(new THREE.Vector3())
                
                console.log('Model size:', size)
                
                // 居中模型
                mesh.position.sub(center)
                
                // 添加到场景
                if (!scene) {
                    console.error('Scene is not initialized!')
                    reject(new Error('Scene not initialized'))
                    return
                }
                
                scene.add(mesh)
                currentModel = mesh
                
                // 更新模型信息
                const position = geometry.attributes.position
                modelInfo.value = {
                    vertices: position.count,
                    faces: position.count / 3,
                    fileSize: file.size,
                    width: size.x,
                    height: size.y,
                    depth: size.z
                }
                
                // 自动调整相机
                fitCameraToObject(mesh)
                
                console.log('STL model loaded successfully')
                resolve()
            } catch (error) {
                console.error('Error parsing STL:', error)
                reject(error)
            }
        }
        reader.onerror = (error) => {
            console.error('FileReader error:', error)
            reject(error)
        }
        reader.readAsArrayBuffer(file)
    })
}

// 调整相机以适应对象
function fitCameraToObject(object) {
    const box = new THREE.Box3().setFromObject(object)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = camera.fov * (Math.PI / 180)
    let cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)))
    cameraZ *= 1.5
    
    camera.position.set(cameraZ, cameraZ * 0.7, cameraZ)
    camera.lookAt(0, 0, 0)
    
    controls.target.set(0, 0, 0)
    controls.update()
}

// 重置视角
function resetView() {
    if (currentModel) {
        fitCameraToObject(currentModel)
    } else {
        camera.position.set(100, 100, 100)
        camera.lookAt(0, 0, 0)
        controls.target.set(0, 0, 0)
    }
    controls.update()
}

// 切换线框模式
function toggleWireframe() {
    if (currentModel) {
        currentModel.material.wireframe = wireframeMode.value
    }
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
            console.error(t('tools.stl-3mf-model-viewer.fullscreenFailed'), err)
        })
    } else {
        document.exitFullscreen().then(() => {
            isFullscreen.value = false
            nextTick(onWindowResize)
        })
    }
}

// 更新材质颜色
function updateMaterialColor() {
    if (currentModel) {
        currentModel.material.color.set(materialColor.value)
    }
}

// 更新背景颜色
function updateBackgroundColor() {
    if (scene) {
        scene.background = new THREE.Color(backgroundColor.value)
    }
}

// 应用材质预设
function applyMaterial(mat) {
    materialColor.value = mat.color
    activeMaterial.value = mat.key
    if (currentModel) {
        currentModel.material.color.set(mat.color)
        currentModel.material.metalness = mat.metalness
        currentModel.material.roughness = mat.roughness
    }
}

// 应用背景预设
function applyBackground(bg) {
    activeBackground.value = bg.key
    if (bg.type === 'checker') {
        // 棋盘格背景
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 512
        const ctx = canvas.getContext('2d')
        const size = 64
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                ctx.fillStyle = (i + j) % 2 === 0 ? '#ffffff' : '#e0e0e0'
                ctx.fillRect(i * size, j * size, size, size)
            }
        }
        const texture = new THREE.CanvasTexture(canvas)
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        scene.background = texture
    } else if (bg.type === 'gradient') {
        // 渐变背景
        const canvas = document.createElement('canvas')
        canvas.width = 2
        canvas.height = 512
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 0, 512)
        gradient.addColorStop(0, '#e8e8e8')
        gradient.addColorStop(1, '#f5f5f5')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 2, 512)
        const texture = new THREE.CanvasTexture(canvas)
        scene.background = texture
    } else {
        backgroundColor.value = bg.color
        scene.background = new THREE.Color(bg.color)
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

// 更新光照
function updateLighting() {
    if (ambientLight) {
        ambientLight.intensity = ambientLightIntensity.value
    }
    if (directionalLight) {
        directionalLight.intensity = directionalLightIntensity.value
    }
}

// 导出截图
function exportScreenshot() {
    if (!renderer) return
    
    // 临时设置透明背景
    const originalBackground = scene.background
    if (transparentBg.value) {
        scene.background = null
    }
    
    // 渲染
    renderer.render(scene, camera)
    
    // 获取图片数据
    const dataUrl = renderer.domElement.toDataURL(`image/${screenshotFormat.value}`)
    
    // 恢复背景
    if (transparentBg.value) {
        scene.background = originalBackground
    }
    
    // 下载
    const link = document.createElement('a')
    link.download = `model-screenshot.${screenshotFormat.value}`
    link.href = dataUrl
    link.click()
}

// 监听全屏变化
function onFullscreenChange() {
    isFullscreen.value = !!document.fullscreenElement
    nextTick(onWindowResize)
}

// 监听modelFiles变化，当第一个文件上传时更新渲染器尺寸
watch(modelFiles, (newFiles) => {
    if (newFiles.length === 1 && renderer && canvasContainer.value) {
        // 延迟一小段时间让DOM更新
        nextTick(() => {
            const width = canvasContainer.value.clientWidth || 800
            const height = canvasContainer.value.clientHeight || 600
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            console.log('Updated renderer size after first file:', width, 'x', height)
        })
    }
}, { deep: true })

// 组件挂载
onMounted(() => {
    // 延迟初始化场景，确保DOM已渲染
    nextTick(() => {
        initScene()
    })
    document.addEventListener('fullscreenchange', onFullscreenChange)
})

// 组件卸载
onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize)
    document.removeEventListener('fullscreenchange', onFullscreenChange)
    
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