<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.projection-zone-finder.inputTitle') }}</h2>

                <!-- 投影类型选择 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.projection-zone-finder.projectionType') }}
                    </label>
                    <div class="grid grid-cols-2 gap-2">
                        <button 
                            class="btn-mode"
                            :class="{ 'btn-mode-active': projectionType === 'utm6' }"
                            @click="setProjectionType('utm6')"
                        >
                            {{ $t('tools.projection-zone-finder.utm6Degree') }}
                        </button>
                        
                        <button 
                            class="btn-mode"
                            :class="{ 'btn-mode-active': projectionType === 'utm3' }"
                            @click="setProjectionType('utm3')"
                        >
                            {{ $t('tools.projection-zone-finder.utm3Degree') }}
                        </button>
                    </div>
                </div>

                <!-- 单个输入 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">{{ $t('tools.projection-zone-finder.singleInput') }}</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.projection-zone-finder.longitude') }}
                            </label>
                            <input 
                                type="number" 
                                min="-180" 
                                max="180"
                                step="0.000001"
                                v-model.number="singleInput.longitude"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                :placeholder="$t('tools.projection-zone-finder.enterLongitude')"
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                {{ $t('tools.projection-zone-finder.latitude') }}
                            </label>
                            <input 
                                type="number" 
                                min="-90" 
                                max="90"
                                step="0.000001"
                                v-model.number="singleInput.latitude"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                :placeholder="$t('tools.projection-zone-finder.enterLatitude')"
                            />
                        </div>
                    </div>
                </div>

                <!-- 批量输入 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">{{ $t('tools.projection-zone-finder.batchInput') }}</h3>
                    <textarea 
                        v-model="batchInput"
                        rows="4"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.projection-zone-finder.batchInputPlaceholder')"
                    ></textarea>
                </div>

                <!-- 操作按钮 -->
                <div class="flex flex-wrap gap-2">
                    <button class="btn btn-primary flex-1" @click="calculateZones">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {{ $t('tools.projection-zone-finder.calculateBtn') }}
                    </button>
                    
                    <button class="btn btn-secondary" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.projection-zone-finder.loadSample') }}
                    </button>
                    
                    <button class="btn btn-secondary" @click="clearAll">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ $t('tools.projection-zone-finder.clearAll') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域和地图 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.projection-zone-finder.outputTitle') }}</h2>
                    
                    <!-- 批量导出按钮 -->
                    <button 
                        v-if="results.length > 1" 
                        class="btn btn-primary btn-sm" 
                        @click="exportAll"
                    >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.projection-zone-finder.batchExport') }}
                    </button>
                </div>

                <!-- 地图容器 -->
                <div class="mb-6">
                    <div 
                        ref="mapContainer"
                        class="w-full h-64 border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 relative"
                    >
                        <div v-if="!mapLoaded" class="text-center">
                            <svg class="w-12 h-12 mx-auto text-gray-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">{{ $t('tools.projection-zone-finder.loadingMap') }}</p>
                        </div>
                        
                        <!-- 地图提示 -->
                        <div 
                            v-if="mapLoaded && mapTooltip.visible" 
                            class="absolute bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded pointer-events-none"
                            :style="{ left: mapTooltip.x + 'px', top: mapTooltip.y + 'px', transform: 'translate(-50%, -100%)' }"
                        >
                            {{ mapTooltip.content }}
                        </div>
                    </div>
                </div>

                <!-- 转换结果 -->
                <div v-if="results.length" class="space-y-4 max-h-[calc(100vh-350px)] overflow-y-auto">
                    <div 
                        v-for="(result, idx) in results" 
                        :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800 transition-all duration-300"
                        :class="{ 'ring-2 ring-blue-500': result.highlight }"
                    >
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    {{ $t('tools.projection-zone-finder.coordinate') }} #{{ idx + 1 }}
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                                    <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                                        <div class="text-xs text-gray-500 dark:text-gray-400">
                                            {{ $t('tools.projection-zone-finder.latitude') }}
                                        </div>
                                        <div class="font-mono text-sm">{{ result.latitude }}</div>
                                    </div>
                                    
                                    <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                                        <div class="text-xs text-gray-500 dark:text-gray-400">
                                            {{ $t('tools.projection-zone-finder.longitude') }}
                                        </div>
                                        <div class="font-mono text-sm">{{ result.longitude }}</div>
                                    </div>
                                    
                                    <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                                        <div class="text-xs text-gray-500 dark:text-gray-400">
                                            {{ $t('tools.projection-zone-finder.zoneNumber') }}
                                        </div>
                                        <div class="font-mono text-sm">
                                            {{ result.zone }} 
                                            <span v-if="result.hemisphere">{{ result.hemisphere }}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="text-xs text-gray-600 dark:text-gray-400">
                                    {{ $t('tools.projection-zone-finder.centralMeridian') }}: {{ result.centralMeridian }}°
                                </div>
                            </div>
                            
                            <button 
                                class="btn btn-success btn-sm ml-2 flex-shrink-0"
                                @click="copyResult(idx)"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.projection-zone-finder.noOutput') }}</p>
                </div>
            </div>
        </div>
        <ProjectionZoneFinderArticle />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectionZoneFinderArticle from './ProjectionZoneFinderArticle.vue'
// 引入leaflet地图库
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const { t } = useI18n()

// DOM引用
const mapContainer = ref(null)

// 投影类型
const projectionType = ref('utm6')

// 输入数据
const singleInput = reactive({
    longitude: null,
    latitude: null
})

// 批量输入
const batchInput = ref('')

// 转换结果
const results = ref([])

// 地图状态
const mapLoaded = ref(false)
const mapTooltip = reactive({
    visible: false,
    x: 0,
    y: 0,
    content: ''
})

// 地图实例
const map = ref(null)
const zonesLayer = ref(null)

// 设置投影类型
function setProjectionType(type) {
    projectionType.value = type
    updateMapZones()
}

// 加载示例数据
function loadSampleData() {
    singleInput.longitude = 116.3975
    singleInput.latitude = 39.9085
    
    batchInput.value = '116.3975,39.9085\n121.4737,31.2304\n113.2644,23.1291\n104.0661,30.5723\n120.1551,30.2742'
}

// 清除所有数据
function clearAll() {
    singleInput.longitude = null
    singleInput.latitude = null
    batchInput.value = ''
    results.value = []
    
    // 清除地图上的标记
    if (zonesLayer.value) {
        zonesLayer.value.clearLayers()
    }
}

// 计算投影带号
function calculateZones() {
    results.value = []
    
    // 处理单个坐标
    if (singleInput.longitude !== null && singleInput.latitude !== null) {
        const result = calculateZone(singleInput.longitude, singleInput.latitude)
        if (result) {
            results.value.push(result)
        }
    }
    
    // 处理批量坐标
    if (batchInput.value.trim()) {
        const lines = batchInput.value.trim().split('\n')
        lines.forEach(line => {
            const coords = line.split(',').map(c => parseFloat(c.trim()))
            if (coords.length >= 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
                const result = calculateZone(coords[0], coords[1])
                if (result) {
                    results.value.push(result)
                }
            }
        })
    }
    
    // 更新地图显示
    updateMapZones()
    
    // 高亮第一个结果
    if (results.value.length > 0) {
        results.value[0].highlight = true
        setTimeout(() => {
            results.value[0].highlight = false
        }, 1000)
    }
}

// 计算单个坐标的投影带号
function calculateZone(lon, lat) {
    try {
        // 验证范围
        if (lon < -180 || lon > 180 || lat < -90 || lat > 90) {
            return null
        }
        
        let zone, centralMeridian
        
        if (projectionType.value === 'utm6') {
            // 6度带计算
            zone = Math.floor((lon + 180) / 6) + 1
            centralMeridian = (zone - 1) * 6 + 3 - 180
        } else {
            // 3度带计算
            zone = Math.floor((lon + 180) / 3) + 1
            centralMeridian = (zone - 1) * 3 + 1.5 - 180
        }
        
        // 半球
        const hemisphere = lat >= 0 ? 'N' : 'S'
        
        return {
            longitude: lon.toFixed(6),
            latitude: lat.toFixed(6),
            zone: zone,
            hemisphere: hemisphere,
            centralMeridian: centralMeridian.toFixed(1),
            highlight: false
        }
    } catch (e) {
        return null
    }
}

// 复制结果
function copyResult(index) {
    const result = results.value[index]
    const textToCopy = `${result.longitude},${result.latitude} -> ${result.zone}${result.hemisphere || ''} (中央经线: ${result.centralMeridian}°)`
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // 高亮动画
            result.highlight = true
            setTimeout(() => {
                result.highlight = false
            }, 1000)
        })
}

// 批量导出
function exportAll() {
    let exportText = `${t('tools.projection-zone-finder.projectionType')}: ${projectionType.value === 'utm6' ? t('tools.projection-zone-finder.utm6Degree') : t('tools.projection-zone-finder.utm3Degree')}\n\n`
    
    results.value.forEach((result, index) => {
        exportText += `# ${index + 1}\n`
        exportText += `${t('tools.projection-zone-finder.longitude')}: ${result.longitude}\n`
        exportText += `${t('tools.projection-zone-finder.latitude')}: ${result.latitude}\n`
        exportText += `${t('tools.projection-zone-finder.zoneNumber')}: ${result.zone}${result.hemisphere || ''}\n`
        exportText += `${t('tools.projection-zone-finder.centralMeridian')}: ${result.centralMeridian}°\n\n`
    })
    
    const blob = new Blob([exportText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'projection_zones.txt'
    a.click()
    URL.revokeObjectURL(url)
}

// 初始化地图
function initMap() {
    if (!mapContainer.value) return
    
    // 创建地图实例
    map.value = L.map(mapContainer.value, {
        center: [35, 105], // 中国中心
        zoom: 4,
        attributionControl: true
    })
    
    // 添加瓦片图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map.value)
    
    // 创建投影带图层组
    zonesLayer.value = L.layerGroup().addTo(map.value)
    
    mapLoaded.value = true
}

// 更新地图上的投影带显示
function updateMapZones() {
    if (!map.value || !zonesLayer.value) return
    
    // 清除之前的图层
    zonesLayer.value.clearLayers()
    
    // 如果有结果，显示所有结果的位置
    if (results.value.length > 0) {
        const markers = []
        
        results.value.forEach(result => {
            const lat = parseFloat(result.latitude)
            const lon = parseFloat(result.longitude)
            
            // 添加标记
            const marker = L.marker([lat, lon]).addTo(zonesLayer.value)
                .bindPopup(`坐标: ${result.longitude}, ${result.latitude}<br>
                           投影带: ${result.zone}${result.hemisphere || ''}<br>
                           中央经线: ${result.centralMeridian}°`)
            
            markers.push([lat, lon])
        })
        
        // 自动调整地图视野以包含所有标记
        if (markers.length > 0) {
            const bounds = L.latLngBounds(markers)
            map.value.fitBounds(bounds, { padding: [50, 50] })
        }
    } else {
        // 绘制全球投影带网格
        drawProjectionZones()
    }
}

// 绘制投影带网格
function drawProjectionZones() {
    if (!map.value || !zonesLayer.value) return
    
    const step = projectionType.value === 'utm6' ? 6 : 3
    const rectangles = []
    
    // 绘制经度带
    for (let lon = -180; lon < 180; lon += step) {
        const bounds = L.latLngBounds(
            L.latLng(-80, lon),
            L.latLng(80, lon + step)
        )
        
        const zoneNumber = Math.floor((lon + 180) / step) + 1
        const rect = L.rectangle(bounds, {
            color: "#3b82f6",
            weight: 1,
            fillOpacity: 0.1
        }).addTo(zonesLayer.value)
        
        // 添加带号标签
        const center = bounds.getCenter()
        L.marker(center, {
            icon: L.divIcon({
                className: 'zone-label',
                html: `<div style="background: rgba(59, 130, 246, 0.8); color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${zoneNumber}</div>`,
                iconSize: [30, 20]
            })
        }).addTo(zonesLayer.value)
        
        rectangles.push(bounds)
    }
}

// 处理地图鼠标移动
function handleMapMouseMove(e) {
    if (!map.value) return
    
    const lat = e.latlng.lat
    const lon = e.latlng.lng
    
    // 计算投影带号
    let zone
    if (projectionType.value === 'utm6') {
        zone = Math.floor((lon + 180) / 6) + 1
    } else {
        zone = Math.floor((lon + 180) / 3) + 1
    }
    
    mapTooltip.visible = true
    mapTooltip.x = e.originalEvent.clientX
    mapTooltip.y = e.originalEvent.clientY
    mapTooltip.content = `${t('tools.projection-zone-finder.zoneNumber')}: ${zone} (${lon.toFixed(2)}°, ${lat.toFixed(2)}°)`
}

// 处理地图鼠标离开
function handleMapMouseLeave() {
    mapTooltip.visible = false
}

// 组件挂载时初始化地图
onMounted(() => {
    initMap()
})

// 组件销毁前清理事件监听
onBeforeUnmount(() => {
    if (map.value) {
        map.value.remove()
    }
})

// 监听投影类型变化
watch(projectionType, () => {
    updateMapZones()
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
    @apply bg-green-600 hover:bg-green-700 text-white;
}

.btn-mode {
    @apply px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700;
}

.btn-mode-active {
    @apply border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400;
}

/* 地图上的带号标签样式 */
.zone-label {
    text-align: center;
    font-size: 12px;
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