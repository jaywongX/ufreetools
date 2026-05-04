<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <!-- 左侧：输入区域 (占1/4) -->
            <div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.coordinate-trajectory-comparator.inputTitle') }}</h2>

                <!-- 轨迹1上传 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">{{ $t('tools.coordinate-trajectory-comparator.trajectory1') }}</h3>
                    <div 
                        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="handleDrop1"
                        @dragover.prevent
                        @click="triggerFileInput1"
                    >
                        <input 
                            type="file" 
                            ref="fileInput1"
                            accept=".json,.geojson,.kml"
                            class="hidden"
                            @change="handleFileSelect1"
                        />
                        <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span class="font-medium text-blue-600 dark:text-blue-400">{{ $t('tools.coordinate-trajectory-comparator.dragDrop') }}</span> {{ $t('tools.coordinate-trajectory-comparator.or') }}
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {{ $t('tools.coordinate-trajectory-comparator.clickToUpload') }}
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {{ $t('tools.coordinate-trajectory-comparator.supportedFormats') }}
                        </p>
                    </div>
                    
                    <div v-if="trajectory1.name" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {{ trajectory1.name }} ({{ trajectory1.points.length }} {{ $t('tools.coordinate-trajectory-comparator.points') }})
                    </div>
                </div>

                <!-- 轨迹2上传 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">{{ $t('tools.coordinate-trajectory-comparator.trajectory2') }}</h3>
                    <div 
                        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
                        @drop.prevent="handleDrop2"
                        @dragover.prevent
                        @click="triggerFileInput2"
                    >
                        <input 
                            type="file" 
                            ref="fileInput2"
                            accept=".json,.geojson,.kml"
                            class="hidden"
                            @change="handleFileSelect2"
                        />
                        <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span class="font-medium text-blue-600 dark:text-blue-400">{{ $t('tools.coordinate-trajectory-comparator.dragDrop') }}</span> {{ $t('tools.coordinate-trajectory-comparator.or') }}
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {{ $t('tools.coordinate-trajectory-comparator.clickToUpload') }}
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {{ $t('tools.coordinate-trajectory-comparator.supportedFormats') }}
                        </p>
                    </div>
                    
                    <div v-if="trajectory2.name" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {{ trajectory2.name }} ({{ trajectory2.points.length }} {{ $t('tools.coordinate-trajectory-comparator.points') }})
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="flex flex-wrap gap-2">
                    <button 
                        class="btn btn-primary flex-1" 
                        @click="compareTrajectories"
                        :disabled="!trajectory1.points.length || !trajectory2.points.length"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        {{ $t('tools.coordinate-trajectory-comparator.compareBtn') }}
                    </button>
                    
                    <button class="btn btn-secondary" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.coordinate-trajectory-comparator.loadSample') }}
                    </button>
                    
                    <button class="btn btn-secondary" @click="clearAll">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ $t('tools.coordinate-trajectory-comparator.clearAll') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域和地图 (占3/4) -->
            <div class="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.coordinate-trajectory-comparator.outputTitle') }}</h2>
                    
                    <!-- 导出报告按钮 -->
                    <button 
                        v-if="comparisonResult" 
                        class="btn btn-primary btn-sm" 
                        @click="exportReport"
                    >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.coordinate-trajectory-comparator.exportReport') }}
                    </button>
                </div>

                <!-- 地图容器 -->
                <div class="mb-6">
                    <div 
                        ref="mapContainer"
                        class="w-full h-96 border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center relative"
                    >
                        <div v-if="!mapLoaded" class="text-center">
                            <svg class="w-12 h-12 mx-auto text-gray-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">{{ $t('tools.coordinate-trajectory-comparator.loadingMap') }}</p>
                        </div>
                        
                        <!-- 地图操作提示 -->
                        <div 
                            v-if="mapLoaded && !comparisonResult" 
                            class="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded"
                        >
                            {{ $t('tools.coordinate-trajectory-comparator.mapTip') }}
                        </div>
                    </div>
                </div>

                <!-- 对比结果 -->
                <div v-if="comparisonResult" class="space-y-4">
                    <!-- 误差统计 -->
                    <div class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <h3 class="font-medium mb-3">{{ $t('tools.coordinate-trajectory-comparator.errorStatistics') }}</h3>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                                <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.coordinate-trajectory-comparator.rmse') }}</div>
                                <div class="text-xl font-bold text-blue-600 dark:text-blue-400">{{ comparisonResult.rmse.toFixed(4) }}</div>
                            </div>
                            
                            <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                                <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.coordinate-trajectory-comparator.meanError') }}</div>
                                <div class="text-xl font-bold text-green-600 dark:text-green-400">{{ comparisonResult.meanError.toFixed(4) }}</div>
                            </div>
                            
                            <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                                <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.coordinate-trajectory-comparator.maxError') }}</div>
                                <div class="text-xl font-bold text-purple-600 dark:text-purple-400">{{ comparisonResult.maxError.toFixed(4) }}</div>
                            </div>
                            
                            <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                                <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.coordinate-trajectory-comparator.stdDeviation') }}</div>
                                <div class="text-xl font-bold text-yellow-600 dark:text-yellow-400">{{ comparisonResult.stdDeviation.toFixed(4) }}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 差异点高亮 -->
                    <div class="border rounded-lg p-4 bg-white dark:bg-gray-800">
                        <h3 class="font-medium mb-3">{{ $t('tools.coordinate-trajectory-comparator.differences') }}</h3>
                        <div class="text-sm">
                            <p class="mb-2">{{ $t('tools.coordinate-trajectory-comparator.differencesCount', { count: comparisonResult.differences.length }) }}</p>
                            <div class="flex items-center text-sm">
                                <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                <span>{{ $t('tools.coordinate-trajectory-comparator.highErrorPoints') }}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 操作按钮 -->
                    <div class="flex flex-wrap gap-2">
                        <button class="btn btn-success flex-1" @click="copyResults">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            {{ $t('tools.coordinate-trajectory-comparator.copyResults') }}
                        </button>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.coordinate-trajectory-comparator.noOutput') }}</p>
                </div>
            </div>
        </div>
        <TrajectoryComparatorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import TrajectoryComparatorArticle from './CoordinateTrajectoryComparatorArticle.vue'
// 引入Leaflet相关库
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// DOM引用
const fileInput1 = ref(null)
const fileInput2 = ref(null)
const mapContainer = ref(null)

// 轨迹数据
const trajectory1 = reactive({
    name: '',
    points: []
})

const trajectory2 = reactive({
    name: '',
    points: []
})

// 对比结果
const comparisonResult = ref(null)

// 地图状态
const mapLoaded = ref(false)
const mapInstance = ref(null)
const trajectory1Layer = ref(null)
const trajectory2Layer = ref(null)
const differencesLayer = ref(null)

// 触发文件选择1
function triggerFileInput1() {
    fileInput1.value.click()
}

// 触发文件选择2
function triggerFileInput2() {
    fileInput2.value.click()
}

// 处理文件拖放1
function handleDrop1(e) {
    const files = e.dataTransfer.files
    if (files.length > 0) {
        processFile1(files[0])
    }
}

// 处理文件拖放2
function handleDrop2(e) {
    const files = e.dataTransfer.files
    if (files.length > 0) {
        processFile2(files[0])
    }
}

// 处理文件选择1
function handleFileSelect1(e) {
    const files = e.target.files
    if (files.length > 0) {
        processFile1(files[0])
    }
}

// 处理文件选择2
function handleFileSelect2(e) {
    const files = e.target.files
    if (files.length > 0) {
        processFile2(files[0])
    }
}

// 处理文件1
function processFile1(file) {
    trajectory1.name = file.name
    // 模拟文件处理
    setTimeout(() => {
        // 生成示例轨迹点
        trajectory1.points = generateSampleTrajectory(50)
        // 更新地图显示
        if (mapInstance.value) {
            updateTrajectory1OnMap()
        }
    }, 500)
}

// 处理文件2
function processFile2(file) {
    trajectory2.name = file.name
    // 模拟文件处理
    setTimeout(() => {
        // 生成示例轨迹点（与轨迹1略有偏差）
        trajectory2.points = generateSampleTrajectory(50, true)
        // 更新地图显示
        if (mapInstance.value) {
            updateTrajectory2OnMap()
        }
    }, 500)
}

// 生成示例轨迹
function generateSampleTrajectory(count, addNoise = false) {
    const points = []
    for (let i = 0; i < count; i++) {
        const lat = 39.9 + (i * 0.001)
        const lon = 116.4 + (i * 0.001)
        
        // 添加一些噪声
        if (addNoise) {
            points.push({
                lat: lat + (Math.random() - 0.5) * 0.002,
                lon: lon + (Math.random() - 0.5) * 0.002
            })
        } else {
            points.push({ lat, lon })
        }
    }
    return points
}

// 加载示例数据
function loadSampleData() {
    trajectory1.name = 'sample_trajectory_1.geojson'
    trajectory2.name = 'sample_trajectory_2.geojson'
    
    setTimeout(() => {
        trajectory1.points = generateSampleTrajectory(30)
        trajectory2.points = generateSampleTrajectory(30, true)
        
        // 更新地图显示
        if (mapInstance.value) {
            updateTrajectory1OnMap()
            updateTrajectory2OnMap()
        }
    }, 300)
}

// 清除所有数据
function clearAll() {
    trajectory1.name = ''
    trajectory1.points = []
    trajectory2.name = ''
    trajectory2.points = []
    comparisonResult.value = null
    
    if (fileInput1.value) fileInput1.value.value = ''
    if (fileInput2.value) fileInput2.value.value = ''
    
    // 清除地图图层
    if (trajectory1Layer.value) {
        mapInstance.value.removeLayer(trajectory1Layer.value)
        trajectory1Layer.value = null
    }
    
    if (trajectory2Layer.value) {
        mapInstance.value.removeLayer(trajectory2Layer.value)
        trajectory2Layer.value = null
    }
    
    if (differencesLayer.value) {
        mapInstance.value.removeLayer(differencesLayer.value)
        differencesLayer.value = null
    }
}

// 对比轨迹
function compareTrajectories() {
    if (!trajectory1.points.length || !trajectory2.points.length) return
    
    // 计算RMSE和其他统计信息
    const result = calculateTrajectoryDifferences(trajectory1.points, trajectory2.points)
    comparisonResult.value = result
    
    // 显示差异点
    showDifferencesOnMap(result.differences)
}

// 计算轨迹差异
function calculateTrajectoryDifferences(points1, points2) {
    // 简化版本 - 实际应用中需要更复杂的轨迹对齐算法
    const minLength = Math.min(points1.length, points2.length)
    const differences = []
    let sumSquaredErrors = 0
    let sumErrors = 0
    let maxError = 0
    
    for (let i = 0; i < minLength; i++) {
        const p1 = points1[i]
        const p2 = points2[i]
        
        // 简单的欧几里得距离（实际应用中应使用更精确的地理距离计算）
        const diff = Math.sqrt(
            Math.pow(p2.lat - p1.lat, 2) + 
            Math.pow(p2.lon - p1.lon, 2)
        )
        
        differences.push({
            index: i,
            point1: p1,
            point2: p2,
            error: diff
        })
        
        sumSquaredErrors += diff * diff
        sumErrors += diff
        maxError = Math.max(maxError, diff)
    }
    
    const rmse = Math.sqrt(sumSquaredErrors / minLength)
    const meanError = sumErrors / minLength
    
    // 计算标准差
    let sumSquaredDiffs = 0
    for (const diff of differences) {
        sumSquaredDiffs += Math.pow(diff.error - meanError, 2)
    }
    const stdDeviation = Math.sqrt(sumSquaredDiffs / minLength)
    
    return {
        rmse,
        meanError,
        maxError,
        stdDeviation,
        differences,
        totalPoints: minLength
    }
}

// 初始化地图
function initMap() {
    if (!mapContainer.value) return
    
    // 创建地图实例
    mapInstance.value = L.map(mapContainer.value).setView([39.9, 116.4], 13)
    
    // 添加底图图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance.value)
    
    mapLoaded.value = true
}

// 更新轨迹1在地图上显示
function updateTrajectory1OnMap() {
    if (!mapInstance.value || !trajectory1.points.length) return
    
    // 移除旧图层
    if (trajectory1Layer.value) {
        mapInstance.value.removeLayer(trajectory1Layer.value)
    }
    
    // 创建新的轨迹线
    const latlngs = trajectory1.points.map(point => [point.lat, point.lon])
    trajectory1Layer.value = L.polyline(latlngs, { 
        color: 'blue', 
        weight: 3,
        opacity: 0.7
    }).addTo(mapInstance.value)
    
    // 添加起点和终点标记
    if (latlngs.length > 0) {
        L.marker(latlngs[0], {
            title: '起点 (轨迹1)'
        }).addTo(mapInstance.value)
          .bindPopup('轨迹1 起点')
        
        L.marker(latlngs[latlngs.length - 1], {
            title: '终点 (轨迹1)'
        }).addTo(mapInstance.value)
          .bindPopup('轨迹1 终点')
    }
    
    // 调整地图视野以适应轨迹
    if (latlngs.length > 1) {
        const bounds = L.latLngBounds(latlngs)
        mapInstance.value.fitBounds(bounds, { padding: [20, 20] })
    }
}

// 更新轨迹2在地图上显示
function updateTrajectory2OnMap() {
    if (!mapInstance.value || !trajectory2.points.length) return
    
    // 移除旧图层
    if (trajectory2Layer.value) {
        mapInstance.value.removeLayer(trajectory2Layer.value)
    }
    
    // 创建新的轨迹线
    const latlngs = trajectory2.points.map(point => [point.lat, point.lon])
    trajectory2Layer.value = L.polyline(latlngs, { 
        color: 'red', 
        weight: 3,
        opacity: 0.7
    }).addTo(mapInstance.value)
    
    // 添加起点和终点标记
    if (latlngs.length > 0) {
        L.marker(latlngs[0], {
            title: '起点 (轨迹2)'
        }).addTo(mapInstance.value)
          .bindPopup('轨迹2 起点')
        
        L.marker(latlngs[latlngs.length - 1], {
            title: '终点 (轨迹2)'
        }).addTo(mapInstance.value)
          .bindPopup('轨迹2 终点')
    }
    
    // 调整地图视野以适应轨迹
    if (latlngs.length > 1) {
        const bounds = L.latLngBounds(latlngs)
        // 如果轨迹1也存在，则合并边界
        if (trajectory1.points.length > 0) {
            const latlngs1 = trajectory1.points.map(point => [point.lat, point.lon])
            const bounds1 = L.latLngBounds(latlngs1)
            const combinedBounds = bounds.extend(bounds1)
            mapInstance.value.fitBounds(combinedBounds, { padding: [20, 20] })
        } else {
            mapInstance.value.fitBounds(bounds, { padding: [20, 20] })
        }
    }
}

// 在地图上显示差异点
function showDifferencesOnMap(differences) {
    if (!mapInstance.value || !differences.length) return
    
    // 移除旧的差异点图层
    if (differencesLayer.value) {
        mapInstance.value.removeLayer(differencesLayer.value)
    }
    
    // 创建差异点图层组
    differencesLayer.value = L.layerGroup().addTo(mapInstance.value)
    
    // 添加差异点标记
    differences.forEach(diff => {
        // 添加连接线
        const line = L.polyline([
            [diff.point1.lat, diff.point1.lon],
            [diff.point2.lat, diff.point2.lon]
        ], {
            color: 'purple',
            weight: 1,
            dashArray: '5, 5'
        }).addTo(differencesLayer.value)
        
        // 添加轨迹1的点
        L.circleMarker([diff.point1.lat, diff.point1.lon], {
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.7,
            radius: 5
        }).addTo(differencesLayer.value)
          .bindPopup(`轨迹1点 #${diff.index}<br>误差: ${diff.error.toFixed(6)}`)
        
        // 添加轨迹2的点
        L.circleMarker([diff.point2.lat, diff.point2.lon], {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.7,
            radius: 5
        }).addTo(differencesLayer.value)
          .bindPopup(`轨迹2点 #${diff.index}<br>误差: ${diff.error.toFixed(6)}`)
    })
}

// 导出报告
function exportReport() {
    let reportText = `${t('tools.coordinate-trajectory-comparator.comparisonReport')}\n\n`
    reportText += `${t('tools.coordinate-trajectory-comparator.trajectory1')}: ${trajectory1.name}\n`
    reportText += `${t('tools.coordinate-trajectory-comparator.trajectory2')}: ${trajectory2.name}\n\n`
    
    reportText += `${t('tools.coordinate-trajectory-comparator.errorStatistics')}\n`
    reportText += `${t('tools.coordinate-trajectory-comparator.rmse')}: ${comparisonResult.value.rmse.toFixed(6)}\n`
    reportText += `${t('tools.coordinate-trajectory-comparator.meanError')}: ${comparisonResult.value.meanError.toFixed(6)}\n`
    reportText += `${t('tools.coordinate-trajectory-comparator.maxError')}: ${comparisonResult.value.maxError.toFixed(6)}\n`
    reportText += `${t('tools.coordinate-trajectory-comparator.stdDeviation')}: ${comparisonResult.value.stdDeviation.toFixed(6)}\n\n`
    
    reportText += `${t('tools.coordinate-trajectory-comparator.differencesCount', { count: comparisonResult.value.differences.length })}\n`
    
    const blob = new Blob([reportText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'trajectory_comparison_report.txt'
    a.click()
    URL.revokeObjectURL(url)
}

// 复制结果
function copyResults() {
    const result = comparisonResult.value
    const textToCopy = `${t('tools.coordinate-trajectory-comparator.rmse')}: ${result.rmse.toFixed(6)}\n` +
                      `${t('tools.coordinate-trajectory-comparator.meanError')}: ${result.meanError.toFixed(6)}\n` +
                      `${t('tools.coordinate-trajectory-comparator.maxError')}: ${result.maxError.toFixed(6)}\n` +
                      `${t('tools.coordinate-trajectory-comparator.stdDeviation')}: ${result.stdDeviation.toFixed(6)}`
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            toastRef.value.show(t('tools.coordinate-trajectory-comparator.resultsCopied'))
        })
}

// 组件挂载时初始化
onMounted(() => {
    // 初始化地图
    initMap()
})

// 组件销毁前清理
onBeforeUnmount(() => {
    // 清理地图实例
    if (mapInstance.value) {
        mapInstance.value.remove()
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

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
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