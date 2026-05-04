<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：工具栏和设置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.area-perimeter-calculator.toolsTitle') }}</h2>

                <!-- 绘制工具 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.area-perimeter-calculator.drawingTools') }}
                    </label>
                    <div class="grid grid-cols-2 gap-2">
                        <button 
                            class="btn-tool"
                            :class="{ 'btn-tool-active': activeTool === 'polygon' }"
                            @click="setActiveTool('polygon')"
                        >
                            <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span class="text-xs mt-1">{{ $t('tools.area-perimeter-calculator.polygon') }}</span>
                        </button>
                        
                        <button 
                            class="btn-tool"
                            :class="{ 'btn-tool-active': activeTool === 'rectangle' }"
                            @click="setActiveTool('rectangle')"
                        >
                            <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                            </svg>
                            <span class="text-xs mt-1">{{ $t('tools.area-perimeter-calculator.rectangle') }}</span>
                        </button>
                        
                        <button 
                            class="btn-tool"
                            :class="{ 'btn-tool-active': activeTool === 'circle' }"
                            @click="setActiveTool('circle')"
                        >
                            <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12m-10 0a10 10 0 110 20 10 10 0 010-20z" />
                            </svg>
                            <span class="text-xs mt-1">{{ $t('tools.area-perimeter-calculator.circle') }}</span>
                        </button>
                        
                        <button 
                            class="btn-tool"
                            :class="{ 'btn-tool-active': activeTool === 'edit' }"
                            @click="setActiveTool('edit')"
                        >
                            <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span class="text-xs mt-1">{{ $t('tools.area-perimeter-calculator.edit') }}</span>
                        </button>
                    </div>
                </div>

                <!-- 单位选择 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.area-perimeter-calculator.units') }}
                    </label>
                    <div class="grid grid-cols-2 gap-2">
                        <select 
                            v-model="areaUnit"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        >
                            <option value="squareMeters">{{ $t('tools.area-perimeter-calculator.squareMeters') }}</option>
                            <option value="hectares">{{ $t('tools.area-perimeter-calculator.hectares') }}</option>
                            <option value="squareKilometers">{{ $t('tools.area-perimeter-calculator.squareKilometers') }}</option>
                            <option value="acres">{{ $t('tools.area-perimeter-calculator.acres') }}</option>
                            <option value="mu">{{ $t('tools.area-perimeter-calculator.mu') }}</option>
                        </select>
                        
                        <select 
                            v-model="lengthUnit"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        >
                            <option value="meters">{{ $t('tools.area-perimeter-calculator.meters') }}</option>
                            <option value="kilometers">{{ $t('tools.area-perimeter-calculator.kilometers') }}</option>
                            <option value="miles">{{ $t('tools.area-perimeter-calculator.miles') }}</option>
                        </select>
                    </div>
                </div>

                <!-- 计算模式 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.area-perimeter-calculator.calculationMode') }}
                    </label>
                    <div class="flex space-x-2">
                        <button 
                            class="btn-mode"
                            :class="{ 'btn-mode-active': calculationMode === 'planar' }"
                            @click="setCalculationMode('planar')"
                        >
                            {{ $t('tools.area-perimeter-calculator.planar') }}
                        </button>
                        
                        <button 
                            class="btn-mode"
                            :class="{ 'btn-mode-active': calculationMode === 'ellipsoidal' }"
                            @click="setCalculationMode('ellipsoidal')"
                        >
                            {{ $t('tools.area-perimeter-calculator.ellipsoidal') }}
                        </button>
                    </div>
                </div>

                <!-- 坐标输入 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.area-perimeter-calculator.coordinateInput') }}
                    </label>
                    <div class="mb-2">
                        <textarea
                            v-model="coordinateInput"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            rows="4"
                            :placeholder="$t('tools.area-perimeter-calculator.coordinateInputPlaceholder')"
                        ></textarea>
                    </div>
                    <div class="flex space-x-2">
                        <button 
                            class="btn btn-primary flex-1"
                            @click="calculateFromCoordinates"
                        >
                            {{ $t('tools.area-perimeter-calculator.calculate') }}
                        </button>
                        <button 
                            class="btn btn-secondary flex-1"
                            @click="coordinateInput = ''"
                        >
                            {{ $t('tools.area-perimeter-calculator.clear') }}
                        </button>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                        {{ $t('tools.area-perimeter-calculator.coordinateInputHelp') }}
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="flex flex-wrap gap-2">
                    <button class="btn btn-primary flex-1" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.area-perimeter-calculator.loadSample') }}
                    </button>
                    
                    <button class="btn btn-secondary" @click="clearAll">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ $t('tools.area-perimeter-calculator.clearAll') }}
                    </button>
                </div>

                <!-- 导出功能 -->
                <div class="mt-4">
                    <h3 class="font-medium mb-2">{{ $t('tools.area-perimeter-calculator.exportTitle') }}</h3>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <button 
                            class="btn btn-success flex-1" 
                            @click="exportAsGeoJSON"
                            :disabled="!hasShapes"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            GeoJSON
                        </button>
                        
                        <button 
                            class="btn btn-success flex-1" 
                            @click="exportAsKML"
                            :disabled="!hasShapes"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            KML
                        </button>
                        
                        <button 
                            class="btn btn-success flex-1" 
                            @click="exportAsImage"
                            :disabled="!hasShapes"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.area-perimeter-calculator.image') }}
                        </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <button 
                            class="btn btn-success flex-1" 
                            @click="exportAsCSV"
                            :disabled="!hasShapes"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            CSV
                        </button>
                        
                        <button 
                            class="btn btn-success flex-1" 
                            @click="exportAsTXT"
                            :disabled="!hasShapes"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            TXT
                        </button>
                        
                        <!-- <button 
                            class="btn btn-success flex-1" 
                            @click="exportAsPDF"
                            :disabled="!hasShapes"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            PDF
                        </button> -->
                    </div>
                </div>
            </div>

            <!-- 右侧：地图显示区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.area-perimeter-calculator.mapTitle') }}</h2>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                        {{ $t('tools.area-perimeter-calculator.shapeCount') }}: {{ shapeCount }}
                    </div>
                </div>

                <!-- 地图容器 -->
                <div class="relative">
                    <div 
                        ref="mapContainer"
                        class="w-full h-[500px] border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700"
                    ></div>
                    
                    <!-- 浮动标签 -->
                    <div 
                        v-if="currentMeasurement" 
                        class="absolute top-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border animate-pulse"
                    >
                        <div class="font-medium text-blue-600 dark:text-blue-400">
                            {{ $t('tools.area-perimeter-calculator.currentMeasurement') }}
                        </div>
                        <div class="text-sm">
                            {{ $t('tools.area-perimeter-calculator.area') }}: {{ formatArea(currentMeasurement.area) }}
                        </div>
                        <div class="text-sm">
                            {{ $t('tools.area-perimeter-calculator.perimeter') }}: {{ formatPerimeter(currentMeasurement.perimeter) }}
                        </div>
                    </div>
                </div>

                <!-- 计算结果 -->
                <div v-if="shapeCount > 0" class="mt-4">
                    <h3 class="font-medium mb-2">{{ $t('tools.area-perimeter-calculator.results') }}</h3>
                    <div class="max-h-40 overflow-y-auto border rounded p-2 bg-gray-50 dark:bg-gray-700">
                        <div 
                            v-for="(shape, idx) in shapes" 
                            :key="idx"
                            class="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                        >
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
                                <span class="text-sm">
                                    {{ $t(`tools.area-perimeter-calculator.${shape.type}`) }} #{{ idx + 1 }}
                                </span>
                            </div>
                            <div class="text-sm">
                                <span class="font-medium">{{ formatArea(shape.area) }}</span>
                                <span class="mx-1">|</span>
                                <span>{{ formatPerimeter(shape.perimeter) }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg mt-4">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.area-perimeter-calculator.noMapData') }}</p>
                </div>
            </div>
        </div>
        <AreaPerimeterCalculatorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AreaPerimeterCalculatorArticle from './AreaPerimeterCalculatorArticle.vue'

// 全局变量声明
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
let L = null
let drawControl = null
let drawnItems = null
let editableLayers = null
let turf = null
let tokml = null
let html2canvas = null
let saveAs = null

const { t } = useI18n()

// 地图相关
const mapContainer = ref(null)
let map = null

// 工具状态
const activeTool = ref('polygon')
const calculationMode = ref('ellipsoidal')
const areaUnit = ref('squareMeters')
const lengthUnit = ref('meters')
const coordinateInput = ref('')

// 数据
const shapes = ref([])
const currentMeasurement = ref(null)

// 计算属性
const hasShapes = computed(() => shapes.value.length > 0)
const shapeCount = computed(() => shapes.value.length)

// 设置活动工具
function setActiveTool(tool) {
    activeTool.value = tool
    
    if (!map || !drawControl) return
    
    // 移除当前绘图控件
    if (map.hasLayer(drawControl)) {
        map.removeControl(drawControl)
    }
    
    // 根据选择的工具设置绘图控件
    const drawOptions = {
        draw: {
            polyline: false,
            marker: false,
            circlemarker: false,
            polygon: tool === 'polygon',
            rectangle: tool === 'rectangle',
            circle: tool === 'circle'
        },
        edit: {
            featureGroup: editableLayers,
            edit: tool === 'edit',
            remove: tool === 'edit'
        }
    }
    
    drawControl = new L.Control.Draw(drawOptions)
    map.addControl(drawControl)
}

// 设置计算模式
function setCalculationMode(mode) {
    calculationMode.value = mode
    // 重新计算所有形状的面积和周长
    recalculateAllMeasurements()
}

// 从坐标输入计算面积和周长
function calculateFromCoordinates() {
    if (!coordinateInput.value.trim()) {
        toastRef.value.show(t('tools.area-perimeter-calculator.noCoordinates'))
        return
    }
    
    try {
        // 解析坐标输入
        // 支持格式：
        // 1. 经度,纬度 每行一个点
        // 2. [经度,纬度] 每行一个点
        // 3. 经度 纬度 每行一个点
        const lines = coordinateInput.value.trim().split('\n')
        const coordinates = []
        
        for (const line of lines) {
            if (!line.trim()) continue
            
            let lat, lng
            
            // 尝试解析 [经度,纬度] 格式
            if (line.includes('[') && line.includes(']')) {
                const match = line.match(/\[([-\d.]+),\s*([-\d.]+)\]/)
                if (match) {
                    lng = parseFloat(match[1])
                    lat = parseFloat(match[2])
                }
            } 
            // 尝试解析 经度,纬度 格式
            else if (line.includes(',')) {
                const parts = line.split(',')
                if (parts.length >= 2) {
                    lng = parseFloat(parts[0].trim())
                    lat = parseFloat(parts[1].trim())
                }
            } 
            // 尝试解析 经度 纬度 格式
            else {
                const parts = line.trim().split(/\s+/)
                if (parts.length >= 2) {
                    lng = parseFloat(parts[0].trim())
                    lat = parseFloat(parts[1].trim())
                }
            }
            
            // 验证坐标有效性
            if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
                throw new Error(t('tools.area-perimeter-calculator.invalidCoordinate') + ': ' + line)
            }
            
            coordinates.push([lat, lng])
        }
        
        // 确保至少有3个点形成多边形
        if (coordinates.length < 3) {
            toastRef.value.show(t('tools.area-perimeter-calculator.notEnoughPoints'))
            return
        }
        
        // 确保多边形闭合
        if (coordinates[0][0] !== coordinates[coordinates.length - 1][0] || 
            coordinates[0][1] !== coordinates[coordinates.length - 1][1]) {
            coordinates.push([coordinates[0][0], coordinates[0][1]])
        }
        
        // 创建多边形
        const polygon = L.polygon(coordinates, { color: 'green' })
        editableLayers.addLayer(polygon)
        
        // 计算并添加到shapes数组
        calculateAndAddShape(polygon, 'polygon')
        
        // 设置地图视图以包含所有形状
        map.fitBounds(polygon.getBounds())
        
        // 清空输入框
        coordinateInput.value = ''
    } catch (error) {
        console.error('Error parsing coordinates:', error)
        toastRef.value.show(error.message || t('tools.area-perimeter-calculator.coordinateParseError'))
    }
}

// 加载示例数据
function loadSampleData() {
    if (!map || !L) return
    
    // 清除现有数据
    clearAll()
    
    // 示例多边形
    const polygonCoords = [
        [39.9, 116.4],
        [39.9, 116.5],
        [39.8, 116.5],
        [39.8, 116.4],
        [39.9, 116.4]
    ]
    
    // 创建多边形
    const polygon = L.polygon(polygonCoords, { color: 'green' }).addTo(map)
    editableLayers.addLayer(polygon)
    
    // 创建矩形
    const rectangle = L.rectangle([[39.95, 116.3], [39.85, 116.35]], { color: 'blue' }).addTo(map)
    editableLayers.addLayer(rectangle)
    
    // 创建圆形
    const circle = L.circle([39.92, 116.45], { radius: 1000, color: 'red' }).addTo(map)
    editableLayers.addLayer(circle)
    
    // 计算并添加到shapes数组
    calculateAndAddShape(polygon, 'polygon')
    calculateAndAddShape(rectangle, 'rectangle')
    calculateAndAddShape(circle, 'circle')
    
    // 设置地图视图以包含所有形状
    map.fitBounds(editableLayers.getBounds())
}

// 计算形状的面积和周长并添加到shapes数组
function calculateAndAddShape(layer, type) {
    const measurement = calculateMeasurement(layer)
    
    shapes.value.push({
        id: Date.now() + Math.random(),
        type,
        layer,
        area: measurement.area,
        perimeter: measurement.perimeter
    })
    
    // 更新当前测量值
    currentMeasurement.value = measurement
}

// 计算测量值
function calculateMeasurement(layer) {
    let area = 0
    let perimeter = 0
    
    try {
        // 确保 L 已定义
        if (!window.L) {
            console.error('Leaflet is not defined')
            return { area: 0, perimeter: 0 }
        }
        
        // 确保 turf 已定义
        if (!turf) {
            console.error('Turf.js is not defined')
            return { area: 0, perimeter: 0 }
        }
        
        // 将Leaflet图层转换为GeoJSON
        const geoJson = layer.toGeoJSON()
        
        if (calculationMode.value === 'planar') {
            // 平面计算
            if (layer instanceof L.Circle) {
                // 圆形面积和周长
                const radius = layer.getRadius()
                area = Math.PI * radius * radius
                perimeter = 2 * Math.PI * radius
            } else {
                // 多边形和矩形
                area = turf.area(geoJson)
                const length = turf.length(geoJson, { units: 'meters' })
                perimeter = length * 1000 // 转换为米
            }
        } else {
            // 椭球体计算 (使用turf.js)
            area = turf.area(geoJson)
            
            if (layer instanceof L.Circle) {
                // 圆形周长
                const center = layer.getLatLng()
                const radius = layer.getRadius()
                const points = 64 // 用于近似圆的点数
                const coords = []
                
                for (let i = 0; i < points; i++) {
                    const angle = (i / points) * 2 * Math.PI
                    const dx = radius * Math.cos(angle)
                    const dy = radius * Math.sin(angle)
                    const point = L.latLng(
                        center.lat + (dy / 111320), // 约等于1度纬度的米数
                        center.lng + (dx / (111320 * Math.cos(center.lat * Math.PI / 180)))
                    )
                    coords.push([point.lng, point.lat])
                }
                coords.push(coords[0]) // 闭合多边形
                
                const ring = turf.lineString(coords)
                perimeter = turf.length(ring, { units: 'meters' }) * 1000
            } else {
                // 多边形和矩形周长
                const line = turf.polygonToLine(geoJson)
                perimeter = turf.length(line, { units: 'meters' }) * 1000
            }
        }
    } catch (error) {
        console.error('Error calculating measurements:', error)
    }
    
    return { area, perimeter }
}

// 重新计算所有测量值
function recalculateAllMeasurements() {
    shapes.value.forEach(shape => {
        const measurement = calculateMeasurement(shape.layer)
        shape.area = measurement.area
        shape.perimeter = measurement.perimeter
    })
    
    // 更新当前测量值
    if (shapes.value.length > 0) {
        currentMeasurement.value = {
            area: shapes.value[shapes.value.length - 1].area,
            perimeter: shapes.value[shapes.value.length - 1].perimeter
        }
    } else {
        currentMeasurement.value = null
    }
}

// 清除所有内容
function clearAll() {
    shapes.value = []
    currentMeasurement.value = null
    
    if (editableLayers) {
        editableLayers.clearLayers()
    }
}

// 格式化面积
function formatArea(area) {
    switch (areaUnit.value) {
        case 'squareMeters':
            return `${area.toFixed(2)} m²`
        case 'hectares':
            return `${(area / 10000).toFixed(4)} ha`
        case 'squareKilometers':
            return `${(area / 1000000).toFixed(6)} km²`
        case 'acres':
            return `${(area / 4046.86).toFixed(4)} acres`
        case 'mu':
            return `${(area / 666.67).toFixed(4)} 亩`
        default:
            return `${area.toFixed(2)} m²`
    }
}

// 格式化周长
function formatPerimeter(perimeter) {
    switch (lengthUnit.value) {
        case 'meters':
            return `${perimeter.toFixed(2)} m`
        case 'kilometers':
            return `${(perimeter / 1000).toFixed(4)} km`
        case 'miles':
            return `${(perimeter / 1609.34).toFixed(4)} miles`
        default:
            return `${perimeter.toFixed(2)} m`
    }
}

// 导出为GeoJSON
function exportAsGeoJSON() {
    if (!hasShapes.value) return
    
    try {
        // 确保 saveAs 已定义
        if (!saveAs) {
            console.error('FileSaver is not defined')
            toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
            return
        }
        
        // 创建FeatureCollection
        const features = shapes.value.map(shape => {
            const feature = shape.layer.toGeoJSON()
            // 添加属性
            feature.properties = {
                type: shape.type,
                area: shape.area,
                perimeter: shape.perimeter,
                areaFormatted: formatArea(shape.area),
                perimeterFormatted: formatPerimeter(shape.perimeter)
            }
            return feature
        })
        
        const featureCollection = {
            type: 'FeatureCollection',
            features
        }
        
        // 转换为字符串
        const geoJsonString = JSON.stringify(featureCollection, null, 2)
        
        // 创建Blob并下载
        const blob = new Blob([geoJsonString], { type: 'application/json' })
        saveAs(blob, 'area-perimeter-shapes.geojson')
    } catch (error) {
        console.error('Error exporting GeoJSON:', error)
        toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
    }
}

// 导出为KML
function exportAsKML() {
    if (!hasShapes.value) return
    
    try {
        // 确保 tokml 和 saveAs 已定义
        if (!tokml || !saveAs) {
            console.error('tokml or FileSaver is not defined')
            toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
            return
        }
        
        // 创建FeatureCollection
        const features = shapes.value.map(shape => {
            const feature = shape.layer.toGeoJSON()
            // 添加属性
            feature.properties = {
                name: `${t(`tools.area-perimeter-calculator.${shape.type}`)} - ${formatArea(shape.area)}`,
                description: `${t('tools.area-perimeter-calculator.area')}: ${formatArea(shape.area)}\n${t('tools.area-perimeter-calculator.perimeter')}: ${formatPerimeter(shape.perimeter)}`
            }
            return feature
        })
        
        const featureCollection = {
            type: 'FeatureCollection',
            features
        }
        
        // 转换为KML
        const kml = tokml(featureCollection, {
            name: 'name',
            description: 'description'
        })
        
        // 创建Blob并下载
        const blob = new Blob([kml], { type: 'application/vnd.google-earth.kml+xml' })
        saveAs(blob, 'area-perimeter-shapes.kml')
    } catch (error) {
        console.error('Error exporting KML:', error)
        toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
    }
}

// 导出为图像
function exportAsImage() {
    if (!hasShapes.value || !mapContainer.value) return
    
    try {
        // 确保 html2canvas 和 saveAs 已定义
        if (!html2canvas || !saveAs) {
            console.error('html2canvas or FileSaver is not defined')
            toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
            return
        }
        
        html2canvas(mapContainer.value).then(canvas => {
            canvas.toBlob(blob => {
                saveAs(blob, 'area-perimeter-map.png')
            })
        })
    } catch (error) {
        console.error('Error exporting image:', error)
        toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
    }
}

// 导出为CSV
function exportAsCSV() {
    if (!hasShapes.value) return
    
    try {
        // 确保 saveAs 已定义
        if (!saveAs) {
            console.error('FileSaver is not defined')
            toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
            return
        }
        
        // 创建CSV内容
        let csvContent = 'ID,Type,Area,Area Unit,Perimeter,Perimeter Unit\n'
        
        shapes.value.forEach((shape, index) => {
            csvContent += `${index + 1},${t(`tools.area-perimeter-calculator.${shape.type}`)},${shape.area.toFixed(2)},${t(`tools.area-perimeter-calculator.${areaUnit.value}`)},${shape.perimeter.toFixed(2)},${t(`tools.area-perimeter-calculator.${lengthUnit.value}`)}\n`
        })
        
        // 创建Blob并下载
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' })
        saveAs(blob, 'area-perimeter-measurements.csv')
    } catch (error) {
        console.error('Error exporting CSV:', error)
        toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
    }
}

// 导出为TXT
function exportAsTXT() {
    if (!hasShapes.value) return
    
    try {
        // 确保 saveAs 已定义
        if (!saveAs) {
            console.error('FileSaver is not defined')
            toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
            return
        }
        
        // 创建TXT内容
        let txtContent = `${t('tools.area-perimeter-calculator.results')}\n`
        txtContent += '='.repeat(50) + '\n\n'
        
        shapes.value.forEach((shape, index) => {
            txtContent += `${t('tools.area-perimeter-calculator.shape')} #${index + 1}: ${t(`tools.area-perimeter-calculator.${shape.type}`)}\n`
            txtContent += `${t('tools.area-perimeter-calculator.area')}: ${formatArea(shape.area)}\n`
            txtContent += `${t('tools.area-perimeter-calculator.perimeter')}: ${formatPerimeter(shape.perimeter)}\n`
            
            // 添加坐标点
            if (shape.layer && shape.layer.getLatLngs) {
                txtContent += `${t('tools.area-perimeter-calculator.coordinates')}:\n`
                
                let coords
                if (shape.type === 'circle') {
                    const center = shape.layer.getLatLng()
                    const radius = shape.layer.getRadius()
                    txtContent += `${t('tools.area-perimeter-calculator.center')}: ${center.lng.toFixed(6)}, ${center.lat.toFixed(6)}\n`
                    txtContent += `${t('tools.area-perimeter-calculator.radius')}: ${radius.toFixed(2)} m\n`
                } else {
                    coords = shape.layer.getLatLngs()
                    
                    // 处理多边形和矩形的坐标
                    if (Array.isArray(coords) && coords.length > 0) {
                        let points = coords
                        
                        // 处理嵌套数组
                        if (Array.isArray(coords[0]) && coords[0].length > 0) {
                            points = coords[0]
                        }
                        
                        points.forEach((point, i) => {
                            txtContent += `  Point ${i + 1}: ${point.lng.toFixed(6)}, ${point.lat.toFixed(6)}\n`
                        })
                    }
                }
            }
            
            txtContent += '\n' + '-'.repeat(50) + '\n\n'
        })
        
        // 添加总计
        if (shapes.value.length > 1) {
            const totalArea = shapes.value.reduce((sum, shape) => sum + shape.area, 0)
            const totalPerimeter = shapes.value.reduce((sum, shape) => sum + shape.perimeter, 0)
            
            txtContent += `${t('tools.area-perimeter-calculator.total')}:\n`
            txtContent += `${t('tools.area-perimeter-calculator.totalShapes')}: ${shapes.value.length}\n`
            txtContent += `${t('tools.area-perimeter-calculator.totalArea')}: ${formatArea(totalArea)}\n`
            txtContent += `${t('tools.area-perimeter-calculator.totalPerimeter')}: ${formatPerimeter(totalPerimeter)}\n`
        }
        
        // 创建Blob并下载
        const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' })
        saveAs(blob, 'area-perimeter-measurements.txt')
    } catch (error) {
        console.error('Error exporting TXT:', error)
        toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
    }
}

// 导出为PDF
function exportAsPDF() {
    if (!hasShapes.value) return
    
    try {
        // 确保 jsPDF 已定义
        if (!window.jspdf) {
            console.error('jsPDF is not defined')
            toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
            return
        }
        
        const { jsPDF } = window.jspdf
        const doc = new jsPDF()
        
        // 添加标题
        doc.setFontSize(18)
        doc.text(t('tools.area-perimeter-calculator.results'), 105, 15, { align: 'center' })
        
        // 添加日期
        doc.setFontSize(10)
        doc.text(`${t('tools.area-perimeter-calculator.date')}: ${new Date().toLocaleDateString()}`, 105, 22, { align: 'center' })
        
        // 添加分隔线
        doc.setLineWidth(0.5)
        doc.line(20, 25, 190, 25)
        
        let y = 35
        
        // 添加每个形状的信息
        shapes.value.forEach((shape, index) => {
            // 检查是否需要新页
            if (y > 270) {
                doc.addPage()
                y = 20
            }
            
            doc.setFontSize(14)
            doc.text(`${t('tools.area-perimeter-calculator.shape')} #${index + 1}: ${t(`tools.area-perimeter-calculator.${shape.type}`)}`, 20, y)
            y += 8
            
            doc.setFontSize(12)
            doc.text(`${t('tools.area-perimeter-calculator.area')}: ${formatArea(shape.area)}`, 25, y)
            y += 7
            doc.text(`${t('tools.area-perimeter-calculator.perimeter')}: ${formatPerimeter(shape.perimeter)}`, 25, y)
            y += 10
            
            // 添加坐标点
            if (shape.layer && shape.layer.getLatLngs) {
                doc.text(`${t('tools.area-perimeter-calculator.coordinates')}:`, 25, y)
                y += 7
                
                let coords
                if (shape.type === 'circle') {
                    const center = shape.layer.getLatLng()
                    const radius = shape.layer.getRadius()
                    doc.text(`${t('tools.area-perimeter-calculator.center')}: ${center.lng.toFixed(6)}, ${center.lat.toFixed(6)}`, 30, y)
                    y += 7
                    doc.text(`${t('tools.area-perimeter-calculator.radius')}: ${radius.toFixed(2)} m`, 30, y)
                    y += 7
                } else {
                    coords = shape.layer.getLatLngs()
                    
                    // 处理多边形和矩形的坐标
                    if (Array.isArray(coords) && coords.length > 0) {
                        let points = coords
                        
                        // 处理嵌套数组
                        if (Array.isArray(coords[0]) && coords[0].length > 0) {
                            points = coords[0]
                        }
                        
                        // 限制显示的点数，避免PDF过长
                        const maxPoints = 10
                        const displayPoints = points.length > maxPoints ? 
                            [...points.slice(0, maxPoints), { note: `...${points.length - maxPoints} more points` }] : 
                            points
                        
                        displayPoints.forEach((point, i) => {
                            // 检查是否需要新页
                            if (y > 270) {
                                doc.addPage()
                                y = 20
                            }
                            
                            if (point.note) {
                                doc.text(`  ${point.note}`, 30, y)
                            } else {
                                doc.text(`  Point ${i + 1}: ${point.lng.toFixed(6)}, ${point.lat.toFixed(6)}`, 30, y)
                            }
                            y += 7
                        })
                    }
                }
            }
            
            // 添加分隔线
            y += 5
            doc.setLineWidth(0.2)
            doc.line(20, y, 190, y)
            y += 10
        })
        
        // 添加总计
        if (shapes.value.length > 1) {
            // 检查是否需要新页
            if (y > 250) {
                doc.addPage()
                y = 20
            }
            
            const totalArea = shapes.value.reduce((sum, shape) => sum + shape.area, 0)
            const totalPerimeter = shapes.value.reduce((sum, shape) => sum + shape.perimeter, 0)
            
            doc.setFontSize(14)
            doc.text(`${t('tools.area-perimeter-calculator.total')}:`, 20, y)
            y += 8
            
            doc.setFontSize(12)
            doc.text(`${t('tools.area-perimeter-calculator.totalShapes')}: ${shapes.value.length}`, 25, y)
            y += 7
            doc.text(`${t('tools.area-perimeter-calculator.totalArea')}: ${formatArea(totalArea)}`, 25, y)
            y += 7
            doc.text(`${t('tools.area-perimeter-calculator.totalPerimeter')}: ${formatPerimeter(totalPerimeter)}`, 25, y)
        }
        
        // 添加页脚
        const pageCount = doc.internal.getNumberOfPages()
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i)
            doc.setFontSize(10)
            doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' })
        }
        
        // 保存PDF
        doc.save('area-perimeter-measurements.pdf')
    } catch (error) {
        console.error('Error exporting PDF:', error)
        toastRef.value.show(t('tools.area-perimeter-calculator.exportError'))
    }
}

// 初始化Leaflet地图
function initializeLeaflet(center = [39.9, 116.4], zoom = 12) {
    // 首先加载 Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
        const linkEl = document.createElement('link')
        linkEl.id = 'leaflet-css'
        linkEl.rel = 'stylesheet'
        linkEl.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
        document.head.appendChild(linkEl)
    }
    
    // 然后加载 Leaflet JS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
    script.onload = function() {
        // Leaflet 加载完成后，加载 Leaflet.draw CSS
        if (!document.getElementById('leaflet-draw-css')) {
            const drawCssEl = document.createElement('link')
            drawCssEl.id = 'leaflet-draw-css'
            drawCssEl.rel = 'stylesheet'
            drawCssEl.href = 'https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.css'
            document.head.appendChild(drawCssEl)
        }
        
        // 然后加载 Leaflet.draw JS
        const drawScript = document.createElement('script')
        drawScript.src = 'https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.js'
        drawScript.onload = function() {
            // 现在 L 和 L.Control.Draw 都已定义，可以初始化地图
            L = window.L
            initMap(center, zoom)
        }
        document.head.appendChild(drawScript)
    }
    document.head.appendChild(script)
}

// 将地图初始化逻辑移到单独的函数中
function initMap(center, zoom) {
    // 初始化地图
    map = L.map(mapContainer.value).setView(center, zoom)
    
    // 添加底图
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
    
    // 初始化可编辑图层
    editableLayers = new L.FeatureGroup()
    map.addLayer(editableLayers)
    
    // 初始化绘图控件
    const drawOptions = {
        draw: {
            polyline: false,
            marker: false,
            circlemarker: false,
            polygon: activeTool.value === 'polygon',
            rectangle: activeTool.value === 'rectangle',
            circle: activeTool.value === 'circle'
        },
        edit: {
            featureGroup: editableLayers,
            edit: activeTool.value === 'edit',
            remove: activeTool.value === 'edit'
        }
    }
    
    drawControl = new L.Control.Draw(drawOptions)
    map.addControl(drawControl)
    
    // 监听绘图完成事件
    map.on(L.Draw.Event.CREATED, function(event) {
        const layer = event.layer
        editableLayers.addLayer(layer)
        
        // 计算并添加到shapes数组
        calculateAndAddShape(layer, event.layerType)
    })
    
    // 监听编辑完成事件
    map.on(L.Draw.Event.EDITED, function(event) {
        const layers = event.layers
        
        layers.eachLayer(function(layer) {
            // 查找对应的shape并更新
            const shape = shapes.value.find(s => s.layer === layer)
            if (shape) {
                const measurement = calculateMeasurement(layer)
                shape.area = measurement.area
                shape.perimeter = measurement.perimeter
                
                // 更新当前测量值
                currentMeasurement.value = measurement
            }
        })
    })
    
    // 监听删除完成事件
    map.on(L.Draw.Event.DELETED, function(event) {
        const layers = event.layers
        
        layers.eachLayer(function(layer) {
            // 从shapes数组中移除
            const index = shapes.value.findIndex(s => s.layer === layer)
            if (index !== -1) {
                shapes.value.splice(index, 1)
            }
        })
        
        // 更新当前测量值
        if (shapes.value.length > 0) {
            currentMeasurement.value = {
                area: shapes.value[shapes.value.length - 1].area,
                perimeter: shapes.value[shapes.value.length - 1].perimeter
            }
        } else {
            currentMeasurement.value = null
        }
    })
}

// 监听单位变化
watch([areaUnit, lengthUnit], () => {
    // 单位变化时不需要重新计算，只需要重新格式化显示
})

// 在onMounted中加载其他依赖
onMounted(() => {
    // 加载turf.js
    const turfScript = document.createElement('script')
    turfScript.src = 'https://unpkg.com/@turf/turf@6.5.0/turf.min.js'
    turfScript.onload = function() {
        turf = window.turf
    }
    document.head.appendChild(turfScript)
    
    // 加载tokml
    const tokmlScript = document.createElement('script')
    tokmlScript.src = 'https://unpkg.com/tokml@0.4.0/tokml.js'
    tokmlScript.onload = function() {
        tokml = window.tokml
    }
    document.head.appendChild(tokmlScript)
    
    // 加载html2canvas
    const html2canvasScript = document.createElement('script')
    html2canvasScript.src = 'https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js'
    html2canvasScript.onload = function() {
        html2canvas = window.html2canvas
    }
    document.head.appendChild(html2canvasScript)
    
    // 加载FileSaver
    const fileSaverScript = document.createElement('script')
    fileSaverScript.src = 'https://unpkg.com/file-saver@2.0.5/dist/FileSaver.min.js'
    fileSaverScript.onload = function() {
        saveAs = window.saveAs
    }
    document.head.appendChild(fileSaverScript)
    
    // 加载jsPDF
    const jsPDFScript = document.createElement('script')
    jsPDFScript.src = 'https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js'
    jsPDFScript.onload = function() {
        window.jspdf = window.jspdf || window.jsPDF
    }
    document.head.appendChild(jsPDFScript)
    
    // 初始化地图
    initializeLeaflet()
})

onBeforeUnmount(() => {
    // 清理地图实例
    if (map) {
        map.remove()
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
    @apply bg-blue-600 hover:bg-blue-700 text-white;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-tool {
    @apply flex flex-col items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700;
}

.btn-tool-active {
    @apply border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400;
}

.btn-mode {
    @apply flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700;
}

.btn-mode-active {
    @apply border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400;
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