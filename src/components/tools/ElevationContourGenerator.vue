<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：地图和输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.elevation-contour-generator.mapTitle') }}</h2>

                <!-- 地图容器 -->
                <div class="relative w-full h-[500px] border rounded-lg overflow-hidden mb-4">
                    <div id="leaflet-map" class="w-full h-full"></div>

                    <!-- 地图控件 -->
                    <div class="absolute top-2 right-2 flex flex-col space-y-2">
                        <button
                            class="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                            @click="zoomIn" :aria-label="$t('tools.elevation-contour-generator.zoomIn')">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </button>
                        <button
                            class="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                            @click="zoomOut" :aria-label="$t('tools.elevation-contour-generator.zoomOut')">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                            </svg>
                        </button>
                        <button
                            class="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                            @click="resetView" :aria-label="$t('tools.elevation-contour-generator.resetView')">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                        <button
                            class="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                            @click="toggleFullscreen" :aria-label="$t('tools.elevation-contour-generator.fullscreen')">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                            </svg>
                        </button>
                    </div>

                    <!-- 搜索框 -->
                    <div class="absolute top-2 left-2 w-64">
                        <div class="relative">
                            <input type="text" v-model="searchQuery"
                                :placeholder="$t('tools.elevation-contour-generator.searchPlaceholder')"
                                class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                                @keyup.enter="searchLocation" />
                            <svg class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <button class="absolute right-2 top-2 text-blue-500 hover:text-blue-700"
                                @click="searchLocation">
                                {{ $t('tools.elevation-contour-generator.searchButton') }}
                            </button>
                        </div>
                    </div>

                    <!-- 底图选择器 -->
                    <div class="absolute bottom-2 left-2 bg-white dark:bg-gray-700 rounded-md shadow-md p-2">
                        <select v-model="selectedBaseMap" @change="changeBaseMap"
                            class="form-select text-sm border-gray-300 dark:border-gray-600 rounded">
                            <option value="osm">OpenStreetMap</option>
                            <option value="satellite">Satellite (Esri)</option>
                            <option value="terrain">OpenTopoMap</option>
                            <option value="outdoors">CyclOSM</option>
                        </select>
                    </div>

                    <!-- 高程信息悬浮框 -->
                    <div v-if="hoverElevation"
                        class="absolute px-3 py-2 bg-white dark:bg-gray-700 rounded shadow-md text-sm pointer-events-none"
                        :style="{ left: hoverPosition.x + 'px', top: hoverPosition.y + 'px' }">
                        {{ $t('tools.elevation-contour-generator.elevation') }}: {{ hoverElevation }} {{
                            $t('tools.elevation-contour-generator.meters') }}
                    </div>

                    <!-- 加载指示器 -->
                    <div v-if="loading"
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center space-x-3">
                            <svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            <span>{{ $t('tools.elevation-contour-generator.loading') }}</span>
                        </div>
                    </div>
                </div>

                <!-- 地图操作按钮 -->
                <div class="flex flex-wrap gap-2 mb-4">
                    <!-- 模式切换按钮组 -->
                    <div class="flex bg-gray-100 dark:bg-gray-600 rounded-lg p-1">
                        <button class="px-3 py-1 rounded text-sm transition-colors"
                            :class="currentMode === 'single' ? 'bg-white dark:bg-gray-700 shadow' : 'hover:bg-gray-200 dark:hover:bg-gray-500'"
                            @click="setMode('single')"
                            :title="$t('tools.elevation-contour-generator.singlePointModeHelp')">
                            <svg class="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.singlePointMode') }}
                        </button>
                        <button class="px-3 py-1 rounded text-sm transition-colors"
                            :class="currentMode === 'measurement' ? 'bg-white dark:bg-gray-700 shadow' : 'hover:bg-gray-200 dark:hover:bg-gray-500'"
                            @click="setMode('measurement')"
                            :title="$t('tools.elevation-contour-generator.measurementModeHelp')">
                            <svg class="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.multiPointMeasurement') }}
                        </button>
                        <button class="px-3 py-1 rounded text-sm transition-colors"
                            :class="currentMode === 'profile' ? 'bg-white dark:bg-gray-700 shadow' : 'hover:bg-gray-200 dark:hover:bg-gray-500'"
                            @click="setMode('profile')"
                            :title="$t('tools.elevation-contour-generator.profileModeHelp')">
                            <svg class="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.drawProfile') }}
                        </button>
                    </div>

                    <!-- 功能按钮 -->
                    <button class="btn btn-secondary" @click="getCurrentLocation">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {{ $t('tools.elevation-contour-generator.currentLocation') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.elevation-contour-generator.loadSample') }}
                    </button>

                    <!-- 测量模式专用按钮 -->
                    <div v-if="currentMode === 'measurement'" class="flex gap-2">
                        <button class="btn btn-danger btn-sm" @click="clearMeasurementPoints"
                            v-if="measurementPoints.length > 0">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.clearMeasurementPoints') }}
                        </button>
                    </div>
                </div>

                <!-- 模式提示信息 -->
                <div v-if="currentMode !== 'single'" class="mb-4 p-3 rounded-lg border-l-4"
                    :class="currentMode === 'measurement' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' : 'bg-green-50 dark:bg-green-900/20 border-green-500'">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 mr-2"
                            :class="currentMode === 'measurement' ? 'text-blue-500' : 'text-green-500'" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-sm">
                            {{ currentMode === 'measurement' ? $t('tools.elevation-contour-generator.clickMapToMeasure')
                                : $t('tools.elevation-contour-generator.profileModeHelp') }}
                        </span>
                    </div>
                </div>

                <!-- 等高线设置 -->
                <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700 mb-4">
                    <h3 class="font-semibold mb-3">{{ $t('tools.elevation-contour-generator.contourTitle') }}</h3>

                    <div class="space-y-4">
                        <!-- 等高线间隔 -->
                        <div>
                            <label class="block text-sm font-medium mb-1">
                                {{ $t('tools.elevation-contour-generator.contourInterval') }}: {{ contourInterval }}m
                            </label>
                            <input type="range" min="5" max="100" step="5" v-model.number="contourInterval"
                                class="w-full" />
                        </div>

                        <!-- 颜色选择 -->
                        <div>
                            <label class="block text-sm font-medium mb-1">
                                {{ $t('tools.elevation-contour-generator.colorRamp') }}
                            </label>
                            <div class="grid grid-cols-4 gap-2">
                                <div v-for="(ramp, index) in colorRamps" :key="index"
                                    class="h-8 rounded cursor-pointer border-2"
                                    :class="{ 'border-blue-500': selectedColorRamp === index, 'border-transparent': selectedColorRamp !== index }"
                                    :style="{ background: `linear-gradient(to right, ${ramp.join(', ')})` }"
                                    @click="selectedColorRamp = index">
                                </div>
                            </div>
                        </div>

                        <!-- 线宽 -->
                        <div>
                            <label class="block text-sm font-medium mb-1">
                                {{ $t('tools.elevation-contour-generator.contourWidth') }}: {{ contourWidth }}px
                            </label>
                            <input type="range" min="0.5" max="3" step="0.5" v-model.number="contourWidth"
                                class="w-full" />
                        </div>

                        <!-- 平滑度 -->
                        <div>
                            <label class="block text-sm font-medium mb-1">
                                {{ $t('tools.elevation-contour-generator.contourSmoothing') }}: {{ contourSmoothing }}
                            </label>
                            <input type="range" min="0" max="1" step="0.1" v-model.number="contourSmoothing"
                                class="w-full" />
                        </div>
                    </div>

                    <!-- 生成等高线按钮 -->
                    <button class="btn btn-primary w-full mt-4" @click="generateContours" :disabled="loading">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        {{ $t('tools.elevation-contour-generator.generateContourBtn') }}
                    </button>
                </div>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept=".csv,.geojson,.kml"
                        @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.elevation-contour-generator.uploadPointsTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.elevation-contour-generator.supportedFormats')
                    }}</span>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.elevation-contour-generator.outputTitle') }}</h2>

                <!-- 高程信息 -->
                <div v-if="selectedPoint && currentMode === 'single'"
                    class="mb-6 border rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
                    <h3 class="font-semibold mb-2">{{ $t('tools.elevation-contour-generator.elevationTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.elevation') }}:</span>
                            <span class="ml-2">{{ selectedPoint.elevation }} {{
                                $t('tools.elevation-contour-generator.meters') }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.latitude') }}:</span>
                            <span class="ml-2">{{ selectedPoint.lat.toFixed(6) }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.longitude') }}:</span>
                            <span class="ml-2">{{ selectedPoint.lng.toFixed(6) }}</span>
                        </div>
                    </div>
                </div>

                <!-- 测量结果 -->
                <div v-if="measurementPoints.length > 0"
                    class="mb-6 border rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold">{{ $t('tools.elevation-contour-generator.measurementResults') }}</h3>
                        <span class="text-sm text-gray-500">{{ $t('tools.elevation-contour-generator.totalPoints') }}:
                            {{ measurementPoints.length }}</span>
                    </div>

                    <!-- 测量摘要 -->
                    <div class="grid grid-cols-2 gap-2 text-sm mb-4 p-3 bg-white dark:bg-gray-700 rounded">
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.totalDistance')
                                }}:</span>
                            <span class="ml-2">{{ measurementSummary.totalDistance.toFixed(2) }} {{
                                $t('tools.elevation-contour-generator.kilometers') }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.netElevationChange')
                                }}:</span>
                            <span class="ml-2">{{ measurementSummary.netElevationChange }} {{
                                $t('tools.elevation-contour-generator.meters') }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.totalElevationGain')
                                }}:</span>
                            <span class="ml-2">{{ measurementSummary.totalElevationGain }} {{
                                $t('tools.elevation-contour-generator.meters') }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.totalElevationLoss')
                                }}:</span>
                            <span class="ml-2">{{ measurementSummary.totalElevationLoss }} {{
                                $t('tools.elevation-contour-generator.meters') }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.highestPoint') }}:</span>
                            <span class="ml-2">{{ measurementSummary.highestPoint }} {{
                                $t('tools.elevation-contour-generator.meters') }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.lowestPoint') }}:</span>
                            <span class="ml-2">{{ measurementSummary.lowestPoint }} {{
                                $t('tools.elevation-contour-generator.meters') }}</span>
                        </div>
                    </div>

                    <!-- 测量点列表 -->
                    <div class="max-h-64 overflow-y-auto">
                        <table class="w-full text-sm">
                            <thead class="bg-gray-100 dark:bg-gray-600 sticky top-0">
                                <tr>
                                    <th class="px-2 py-1 text-left">{{
                                        $t('tools.elevation-contour-generator.pointIndex') }}</th>
                                    <th class="px-2 py-1 text-left">{{
                                        $t('tools.elevation-contour-generator.elevationValue') }}</th>
                                    <th class="px-2 py-1 text-left">{{
                                        $t('tools.elevation-contour-generator.distanceFromPrevious') }}</th>
                                    <th class="px-2 py-1 text-left">{{
                                        $t('tools.elevation-contour-generator.cumulativeDistanceFromStart') }}</th>
                                    <th class="px-2 py-1 text-center">{{
                                        $t('tools.elevation-contour-generator.deletePoint') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(point, index) in measurementPoints" :key="index"
                                    class="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td class="px-2 py-2">
                                        <span class="font-medium">{{ index + 1 }}</span>
                                    </td>
                                    <td class="px-2 py-2">
                                        <span class="font-mono">{{ point.elevation }}m</span>
                                    </td>
                                    <td class="px-2 py-2">
                                        <span class="font-mono">{{ index === 0 ? '-' :
                                            point.distanceFromPrevious.toFixed(2) + 'km' }}</span>
                                    </td>
                                    <td class="px-2 py-2">
                                        <span class="font-mono">{{ point.cumulativeDistance.toFixed(2) }}km</span>
                                    </td>
                                    <td class="px-2 py-2 text-center">
                                        <button @click="removeMeasurementPoint(index)"
                                            class="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 操作按钮 -->
                    <div class="flex gap-2 mt-4">
                        <button class="btn btn-success btn-sm" @click="exportMeasurementData">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.exportMeasurementData') }}
                        </button>
                        <button class="btn btn-danger btn-sm" @click="clearMeasurementPoints">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.clearMeasurementPoints') }}
                        </button>
                    </div>
                </div>

                <!-- 批量点数据结果 -->
                <div v-if="pointsData.length > 0" class="mb-6 border rounded-lg p-4">
                    <h3 class="font-semibold mb-2">{{ $t('tools.elevation-contour-generator.pointCount') }}: {{
                        pointsData.length }}</h3>

                    <div class="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.maxElevation') }}:</span>
                            <span class="ml-2">{{ maxElevation }} {{ $t('tools.elevation-contour-generator.meters')
                            }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.minElevation') }}:</span>
                            <span class="ml-2">{{ minElevation }} {{ $t('tools.elevation-contour-generator.meters')
                            }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.avgElevation') }}:</span>
                            <span class="ml-2">{{ avgElevation }} {{ $t('tools.elevation-contour-generator.meters')
                            }}</span>
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <button class="btn btn-success" @click="downloadPointsData">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.downloadBtn') }}
                        </button>
                        <button class="btn btn-danger" @click="clearPointsData">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.clearBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 剖面图区域 -->
                <div v-if="profileData.length > 0" class="mb-6 border rounded-lg p-4">
                    <h3 class="font-semibold mb-2">{{ $t('tools.elevation-contour-generator.profileTitle') }}</h3>

                    <!-- 剖面图统计信息 -->
                    <div class="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.totalDistance')
                                }}:</span>
                            <span class="ml-2">{{ profileDistance.toFixed(2) }} {{
                                $t('tools.elevation-contour-generator.kilometers') }}</span>
                        </div>
                        <div>
                            <span class="font-medium">{{ $t('tools.elevation-contour-generator.elevationDifference')
                                }}:</span>
                            <span class="ml-2">{{ profileElevationDiff }} {{
                                $t('tools.elevation-contour-generator.meters') }}</span>
                        </div>
                    </div>

                    <!-- 简化的剖面图显示 -->
                    <div class="h-32 bg-gray-100 dark:bg-gray-600 rounded mb-4 relative overflow-hidden">
                        <canvas ref="profileCanvas" class="w-full h-full"></canvas>
                    </div>

                    <div class="flex gap-2">
                        <button class="btn btn-success btn-sm" @click="downloadProfile">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.exportProfile') }}
                        </button>
                        <button class="btn btn-danger btn-sm" @click="clearProfile">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {{ $t('tools.elevation-contour-generator.clearProfile') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ElevationContourGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ElevationContourGeneratorArticle from './ElevationContourGeneratorArticle.vue'

const { t } = useI18n()

// 地图相关 - 使用Leaflet替代Mapbox
const map = ref(null)
const L = ref(null)
const selectedBaseMap = ref('osm')
const isDrawingProfile = ref(false)
const loading = ref(false)
const searchQuery = ref('')

// 开源地图图层配置
const baseMaps = {
    osm: {
        name: 'OpenStreetMap',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
    },
    satellite: {
        name: 'Satellite (Esri)',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: '© Esri'
    },
    terrain: {
        name: 'OpenTopoMap',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: '© OpenTopoMap contributors'
    },
    outdoors: {
        name: 'CyclOSM',
        url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors, CyclOSM'
    }
}

// 地图交互状态
const hoverElevation = ref(null)
const hoverPosition = ref({ x: 0, y: 0 })
const selectedPoint = ref(null)

// 模式控制
const currentMode = ref('single') // 'single', 'measurement', 'profile'

// 测量功能
const measurementPoints = ref([])

// 文件上传
const fileInput = ref(null)
const isDragging = ref(false)

// 等高线设置
const contourInterval = ref(20)
const contourWidth = ref(1)
const contourSmoothing = ref(0.5)
const selectedColorRamp = ref(0)
const colorRamps = [
    ['#00ff00', '#ffff00', '#ff0000'], // 绿-黄-红
    ['#0000ff', '#00ffff', '#ffffff'], // 蓝-青-白
    ['#8c510a', '#f5f5f5', '#01665e'], // 棕-白-绿
    ['#762a83', '#af8dc3', '#e7d4e8', '#d9f0d3', '#7fbf7b', '#1b7837'] // 紫-绿渐变
]

// 数据存储
const pointsData = ref([])
const profileData = ref([])
const contourData = ref(null)
const profileCanvas = ref(null)

// 剖面图数据
const profileDistance = ref(0)
const profileElevationDiff = ref(0)
const profileMaxElevation = ref(0)
const profileMinElevation = ref(0)

// 计算属性
const maxElevation = computed(() => {
    if (!pointsData.value.length) return 0
    return Math.max(...pointsData.value.map(p => p.elevation))
})

const minElevation = computed(() => {
    if (!pointsData.value.length) return 0
    return Math.min(...pointsData.value.map(p => p.elevation))
})

const avgElevation = computed(() => {
    if (!pointsData.value.length) return 0
    const sum = pointsData.value.reduce((acc, p) => acc + p.elevation, 0)
    return Math.round(sum / pointsData.value.length)
})

// 测量功能计算属性
const measurementSummary = computed(() => {
    if (measurementPoints.value.length === 0) {
        return {
            totalDistance: 0,
            netElevationChange: 0,
            totalElevationGain: 0,
            totalElevationLoss: 0,
            highestPoint: 0,
            lowestPoint: 0
        }
    }

    const points = measurementPoints.value
    const elevations = points.map(p => p.elevation)

    let totalDistance = 0
    let totalElevationGain = 0
    let totalElevationLoss = 0

    if (points.length > 0) {
        totalDistance = points[points.length - 1].cumulativeDistance
    }

    for (let i = 1; i < points.length; i++) {
        const elevDiff = points[i].elevation - points[i - 1].elevation
        if (elevDiff > 0) {
            totalElevationGain += elevDiff
        } else {
            totalElevationLoss += Math.abs(elevDiff)
        }
    }

    return {
        totalDistance,
        netElevationChange: points.length > 1 ? points[points.length - 1].elevation - points[0].elevation : 0,
        totalElevationGain,
        totalElevationLoss,
        highestPoint: Math.max(...elevations),
        lowestPoint: Math.min(...elevations)
    }
})

// 初始化地图
onMounted(async () => {
    try {
        // 动态导入Leaflet
        await loadLeaflet()

        // 初始化地图
        initializeMap()

        // 加载示例数据
        loadSampleData()
    } catch (error) {
        console.error('Failed to initialize map:', error)
    }
})

// 加载Leaflet库
async function loadLeaflet() {
    // 加载Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    // 动态加载Leaflet JS
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = () => {
            L.value = window.L
            resolve()
        }
        script.onerror = reject
        document.head.appendChild(script)
    })
}

// 初始化Leaflet地图
function initializeMap() {
    if (!L.value) return

    // 创建地图实例
    map.value = L.value.map('leaflet-map').setView([39.9042, 116.4074], 10)

    // 添加默认图层
    const defaultLayer = L.value.tileLayer(baseMaps.osm.url, {
        attribution: baseMaps.osm.attribution,
        maxZoom: 18
    }).addTo(map.value)

    // 添加点击事件监听器
    map.value.on('click', handleMapClick)
    map.value.on('mousemove', handleMapMouseMove)

    // 创建图层组
    window.markersLayer = L.value.layerGroup().addTo(map.value)
    window.contoursLayer = L.value.layerGroup().addTo(map.value)
    window.profileLayer = L.value.layerGroup().addTo(map.value)
}

// 处理地图点击事件
async function handleMapClick(e) {
    const { lat, lng } = e.latlng

    if (currentMode.value === 'profile') {
        // 剖面线模式
        profileData.value.push({ lat, lng, elevation: 0 })

        // 获取高程数据
        const elevation = await getElevationData(lat, lng)
        profileData.value[profileData.value.length - 1].elevation = elevation

        // 添加剖面点标记
        const marker = L.value.circleMarker([lat, lng], {
            color: 'red',
            radius: 5
        }).addTo(window.profileLayer)

        // 如果有多个点，绘制连线
        if (profileData.value.length > 1) {
            const coordinates = profileData.value.map(p => [p.lat, p.lng])
            L.value.polyline(coordinates, { color: 'red', weight: 3 }).addTo(window.profileLayer)

            // 更新剖面图
            updateProfileChart()
        }
    } else if (currentMode.value === 'measurement') {
        // 测量模式
        await addMeasurementPoint(lat, lng)
    } else {
        // 单点查询模式
        const elevation = await getElevationData(lat, lng)

        selectedPoint.value = {
            lat: lat,
            lng: lng,
            elevation: elevation
        }

        // 清除之前的标记
        window.markersLayer.clearLayers()

        // 添加新标记
        L.value.marker([lat, lng])
            .addTo(window.markersLayer)
            .bindPopup(`${t('tools.elevation-contour-generator.elevation')}: ${elevation}m`)
            .openPopup()
    }
}

// 处理地图鼠标移动事件
async function handleMapMouseMove(e) {
    const { lat, lng } = e.latlng

    // 节流处理，避免频繁请求
    if (window.elevationTimeout) {
        clearTimeout(window.elevationTimeout)
    }

    window.elevationTimeout = setTimeout(async () => {
        try {
            const elevation = await getElevationData(lat, lng)
            hoverElevation.value = elevation
            hoverPosition.value = {
                x: e.containerPoint.x,
                y: e.containerPoint.y
            }
        } catch (error) {
            hoverElevation.value = null
        }
    }, 300)
}

const terrainSources = [
    {
        name: 'Mapzen Terrain Tiles',
        url: 'https://tile.nextzen.org/tilezen/terrain/v1/terrarium/{z}/{x}/{y}.png?api_key=YOUR_KEY',
        encoding: 'terrarium' // (height = (R * 256 + G + B / 256) - 32768)
    },
    {
        name: 'AWS Terrain Tiles',
        url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
        encoding: 'terrarium'
    },
    {
        name: 'OpenTopography',
        url: 'https://cloud.sdsc.edu/v1/AUTH_opentopography/Raster/SRTM_GL1/{z}/{x}/{y}.png',
        encoding: 'mapbox' // (height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1))
    }
]

// 带重试机制的网络请求函数
async function fetchWithRetry(url, options = {}, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), options.timeout || 5000)

            const response = await fetch(url, {
                ...options,
                signal: controller.signal
            })

            clearTimeout(timeoutId)

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`)
            }

            return await response.json()
        } catch (error) {
            console.warn(`Attempt ${attempt}/${maxRetries} failed for ${url}:`, error.message)

            if (attempt === maxRetries) {
                throw error
            }

            // 指数退避延迟
            await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt - 1)))
        }
    }
}

// 获取高程数据 - 使用多个备用API和重试机制
async function getElevationData(lat, lng) {
    try {
        // 将经纬度转换为瓦片坐标
        const zoom = 14 // 使用较高的缩放级别获得更精确的数据
        const tileCoords = latLngToTile(lat, lng, zoom)

        // 获取瓦片内的像素坐标
        const pixelCoords = latLngToPixel(lat, lng, zoom, tileCoords)

        // 从地形瓦片获取高程
        const elevation = await getElevationFromTile(tileCoords, pixelCoords)

        return elevation
    } catch (error) {
        console.warn('Terrain tile failed, using fallback:', error)
        return generateSimulatedElevation(lat, lng)
    }
}


// 生成基于地理位置的智能模拟高程数据
function generateSimulatedElevation(lat, lng) {
    // 基于已知地理特征的模拟数据
    const regions = [
        // 喜马拉雅山脉
        { bounds: [25, 75, 35, 105], baseElevation: 4000, variation: 4000 },
        // 安第斯山脉
        { bounds: [-55, -80, 15, -60], baseElevation: 2000, variation: 4000 },
        // 阿尔卑斯山
        { bounds: [43, 5, 49, 17], baseElevation: 1000, variation: 3000 },
        // 洛基山脉
        { bounds: [31, -125, 60, -100], baseElevation: 1500, variation: 2500 },
        // 海洋区域
        { bounds: [-90, -180, 90, 180], baseElevation: 0, variation: 100, isOcean: true }
    ]

    for (const region of regions) {
        const [minLat, minLng, maxLat, maxLng] = region.bounds
        if (lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng) {
            if (region.isOcean) {
                // 海洋区域返回接近海平面的高度
                return Math.round(Math.random() * 20 - 10)
            }

            // 基于距离中心点的距离计算高程
            const centerLat = (minLat + maxLat) / 2
            const centerLng = (minLng + maxLng) / 2
            const distance = Math.sqrt(Math.pow(lat - centerLat, 2) + Math.pow(lng - centerLng, 2))
            const normalizedDistance = Math.min(distance / 10, 1) // 归一化距离

            const elevation = region.baseElevation +
                (Math.random() - 0.5) * region.variation * (1 - normalizedDistance) +
                Math.sin(lat * 0.1) * Math.cos(lng * 0.1) * 200

            return Math.max(0, Math.round(elevation))
        }
    }

    // 默认模拟数据
    const baseElevation = Math.abs(lat) * 20 + Math.abs(lng) * 5
    const randomVariation = (Math.random() - 0.5) * 200
    const terrainNoise = Math.sin(lat * 0.01) * Math.cos(lng * 0.01) * 100

    return Math.max(0, Math.round(baseElevation + randomVariation + terrainNoise))
}

// 批量获取高程数据（用于等高线生成）
async function getBatchElevationData(coordinates, batchSize = 10, delayBetweenBatches = 100) {
    const results = []
    const batches = []

    // 将坐标分批处理
    for (let i = 0; i < coordinates.length; i += batchSize) {
        batches.push(coordinates.slice(i, i + batchSize))
    }

    console.log(`Processing ${coordinates.length} points in ${batches.length} batches...`)

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
        const batch = batches[batchIndex]
        const batchPromises = batch.map(async (coord) => {
            try {
                const elevation = await getElevationData(coord.lat, coord.lng)
                return { ...coord, elevation }
            } catch (error) {
                console.warn(`Failed to get elevation for ${coord.lat}, ${coord.lng}:`, error)
                return { ...coord, elevation: generateSimulatedElevation(coord.lat, coord.lng) }
            }
        })

        const batchResults = await Promise.allSettled(batchPromises)

        batchResults.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                results.push(result.value)
            } else {
                const coord = batch[index]
                results.push({
                    ...coord,
                    elevation: generateSimulatedElevation(coord.lat, coord.lng)
                })
            }
        })

        // 批次间延迟，避免API限流
        if (batchIndex < batches.length - 1) {
            await new Promise(resolve => setTimeout(resolve, delayBetweenBatches))
        }

        // 更新进度
        const progress = Math.round(((batchIndex + 1) / batches.length) * 100)
        console.log(`Batch ${batchIndex + 1}/${batches.length} completed (${progress}%)`)
    }

    return results
}

// 组件卸载时清理资源
onUnmounted(() => {
    if (map.value) {
        map.value.remove()
        map.value = null
    }
    if (window.elevationTimeout) {
        clearTimeout(window.elevationTimeout)
    }
})

// 地图操作方法
function zoomIn() {
    if (map.value) map.value.zoomIn()
}

function zoomOut() {
    if (map.value) map.value.zoomOut()
}

function resetView() {
    if (map.value) {
        map.value.setView([39.9042, 116.4074], 10)
    }
}

function toggleFullscreen() {
    const container = document.getElementById('leaflet-map')
    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`)
        })
    } else {
        document.exitFullscreen()
    }
}

function changeBaseMap() {
    if (map.value && L.value) {
        // 移除当前图层
        map.value.eachLayer((layer) => {
            if (layer instanceof L.value.TileLayer) {
                map.value.removeLayer(layer)
            }
        })

        // 添加新图层
        const baseMapConfig = baseMaps[selectedBaseMap.value]
        if (baseMapConfig) {
            L.value.tileLayer(baseMapConfig.url, {
                attribution: baseMapConfig.attribution,
                maxZoom: 18
            }).addTo(map.value)
        }
    }
}

// 搜索位置
async function searchLocation() {
    if (!searchQuery.value) return

    loading.value = true

    try {
        // 使用Nominatim开源地理编码服务
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery.value)}&limit=1`
        )
        const data = await response.json()

        if (data && data.length > 0) {
            const result = data[0]
            const lat = parseFloat(result.lat)
            const lng = parseFloat(result.lon)

            if (map.value) {
                map.value.setView([lat, lng], 15)

                // 添加搜索结果标记
                window.markersLayer.clearLayers()
                L.value.marker([lat, lng])
                    .addTo(window.markersLayer)
                    .bindPopup(result.display_name)
                    .openPopup()
            }
        } else {
            alert(t('tools.elevation-contour-generator.locationNotFound'))
        }
    } catch (error) {
        console.error('Search error:', error)
        alert(t('tools.elevation-contour-generator.searchFailed'))
    } finally {
        loading.value = false
    }
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        loading.value = true

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { longitude, latitude } = position.coords
                if (map.value) {
                    map.value.setView([latitude, longitude], 15)

                    window.markersLayer.clearLayers()
                    L.value.marker([latitude, longitude])
                        .addTo(window.markersLayer)
                        .bindPopup(t('tools.elevation-contour-generator.currentLocation'))
                        .openPopup()
                }
                loading.value = false
            },
            (error) => {
                console.error('Error getting current location:', error)
                loading.value = false
                alert(error.message)
            }
        )
    } else {
        alert('Geolocation is not supported by this browser.')
    }
}

// 加载示例数据
function loadSampleData() {
    // 模拟加载示例数据
    console.log('Loading sample data')

    // 模拟点击地图上的点
    const samplePoint = {
        lat: 39.9042,
        lng: 116.4074,
        elevation: 45
    }

    selectedPoint.value = samplePoint

    // 模拟批量点数据
    pointsData.value = [
        { lat: 39.9042, lng: 116.4074, elevation: 45 },
        { lat: 39.9142, lng: 116.4174, elevation: 52 },
        { lat: 39.9242, lng: 116.4274, elevation: 48 },
        { lat: 39.9342, lng: 116.4374, elevation: 56 }
    ]

    // 在地图上显示示例点
    if (map.value && L.value) {
        window.markersLayer.clearLayers()
        pointsData.value.forEach(point => {
            L.value.circleMarker([point.lat, point.lng], {
                color: 'blue',
                radius: 6
            }).addTo(window.markersLayer)
                .bindPopup(`${t('tools.elevation-contour-generator.elevation')}: ${point.elevation}m`)
        })
    }
}

// 文件处理方法
function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    if (files.length === 0) return

    const file = files[0]
    loading.value = true

    const reader = new FileReader()
    reader.onload = (event) => {
        try {
            const content = event.target.result
            let newPoints = []

            if (file.name.endsWith('.csv')) {
                newPoints = parseCSV(content)
            } else if (file.name.endsWith('.geojson')) {
                newPoints = parseGeoJSON(content)
            } else if (file.name.endsWith('.kml')) {
                newPoints = parseKML(content)
            }

            // 为每个点获取高程数据
            Promise.all(newPoints.map(async point => ({
                ...point,
                elevation: await getElevationData(point.lat, point.lng)
            }))).then(pointsWithElevation => {
                pointsData.value = pointsWithElevation

                // 在地图上显示点
                if (map.value && L.value) {
                    window.markersLayer.clearLayers()
                    pointsWithElevation.forEach(point => {
                        L.value.circleMarker([point.lat, point.lng], {
                            color: 'green',
                            radius: 5
                        }).addTo(window.markersLayer)
                            .bindPopup(`${t('tools.elevation-contour-generator.elevation')}: ${point.elevation}m`)
                    })
                }

                loading.value = false
                isDragging.value = false
            })

        } catch (error) {
            console.error('Error parsing file:', error)
            loading.value = false
            isDragging.value = false
        }
    }

    reader.readAsText(file)
}

// 解析CSV文件
function parseCSV(content) {
    const lines = content.split('\n')
    const points = []

    for (let i = 1; i < lines.length; i++) { // 跳过标题行
        const parts = lines[i].split(',')
        if (parts.length >= 2) {
            const lat = parseFloat(parts[0])
            const lng = parseFloat(parts[1])
            if (!isNaN(lat) && !isNaN(lng)) {
                points.push({ lat, lng })
            }
        }
    }

    return points
}

// 解析GeoJSON文件
function parseGeoJSON(content) {
    const geojson = JSON.parse(content)
    const points = []

    if (geojson.features) {
        geojson.features.forEach(feature => {
            if (feature.geometry.type === 'Point') {
                const [lng, lat] = feature.geometry.coordinates
                points.push({ lat, lng })
            }
        })
    }

    return points
}

// 解析KML文件（简化版）
function parseKML(content) {
    const points = []
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/xml')
    const placemarks = doc.getElementsByTagName('Placemark')

    for (let placemark of placemarks) {
        const coordinates = placemark.getElementsByTagName('coordinates')[0]
        if (coordinates) {
            const coords = coordinates.textContent.trim().split(',')
            if (coords.length >= 2) {
                const lng = parseFloat(coords[0])
                const lat = parseFloat(coords[1])
                if (!isNaN(lat) && !isNaN(lng)) {
                    points.push({ lat, lng })
                }
            }
        }
    }

    return points
}

function handleDrop(e) {
    handleFiles(e)
    isDragging.value = false
}

// 清除点数据
function clearPointsData() {
    pointsData.value = []
    if (window.markersLayer) {
        window.markersLayer.clearLayers()
    }
}

// 下载点数据
function downloadPointsData() {
    if (pointsData.value.length === 0) return

    const csvContent = 'Latitude,Longitude,Elevation\n' +
        pointsData.value.map(p => `${p.lat},${p.lng},${p.elevation}`).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'elevation_points.csv'
    a.click()
    URL.revokeObjectURL(url)
}

// 更新剖面图
function updateProfileChart() {
    if (profileData.value.length < 2) return

    // 计算距离和高程差
    let totalDistance = 0
    const elevations = profileData.value.map(p => p.elevation)

    for (let i = 1; i < profileData.value.length; i++) {
        const prev = profileData.value[i - 1]
        const curr = profileData.value[i]
        const distance = calculateDistance(prev.lat, prev.lng, curr.lat, curr.lng)
        totalDistance += distance
    }

    profileDistance.value = totalDistance
    profileMaxElevation.value = Math.max(...elevations)
    profileMinElevation.value = Math.min(...elevations)
    profileElevationDiff.value = profileMaxElevation.value - profileMinElevation.value

    // 绘制简单的剖面图
    nextTick(() => {
        drawProfileChart()
    })
}

// 绘制剖面图到Canvas
function drawProfileChart() {
    if (!profileCanvas.value) return

    const canvas = profileCanvas.value
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()

    // 设置canvas尺寸
    canvas.width = rect.width
    canvas.height = rect.height

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (profileData.value.length < 2) return

    const elevations = profileData.value.map(p => p.elevation)
    const minElev = Math.min(...elevations)
    const maxElev = Math.max(...elevations)
    const elevRange = maxElev - minElev || 1

    // 绘制剖面线
    ctx.beginPath()
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2

    profileData.value.forEach((point, index) => {
        const x = (index / (profileData.value.length - 1)) * canvas.width
        const y = canvas.height - ((point.elevation - minElev) / elevRange) * canvas.height

        if (index === 0) {
            ctx.moveTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
    })

    ctx.stroke()

    // 绘制填充区域
    ctx.beginPath()
    ctx.fillStyle = 'rgba(59, 130, 246, 0.2)'

    profileData.value.forEach((point, index) => {
        const x = (index / (profileData.value.length - 1)) * canvas.width
        const y = canvas.height - ((point.elevation - minElev) / elevRange) * canvas.height

        if (index === 0) {
            ctx.moveTo(x, canvas.height)
            ctx.lineTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
    })

    ctx.lineTo(canvas.width, canvas.height)
    ctx.closePath()
    ctx.fill()
}

// 计算两点间距离（公里）
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371 // 地球半径（公里）
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLng = (lng2 - lng1) * Math.PI / 180
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
}

// 清除剖面图
function clearProfile() {
    profileData.value = []
    profileDistance.value = 0
    profileElevationDiff.value = 0
    profileMaxElevation.value = 0
    profileMinElevation.value = 0
    isDrawingProfile.value = false

    if (window.profileLayer) {
        window.profileLayer.clearLayers()
    }
}

// 下载剖面图
function downloadProfile() {
    if (!profileCanvas.value) return

    const link = document.createElement('a')
    link.download = 'elevation_profile.png'
    link.href = profileCanvas.value.toDataURL()
    link.click()
}

// 等高线相关方法
async function generateContours() {
    if (!map.value) return

    loading.value = true

    // 创建进度显示组件
    const progressContainer = createProgressIndicator()

    try {
        // 步骤1: 获取地图边界
        updateProgress(progressContainer, t('tools.elevation-contour-generator.queryingElevation'), 10)

        // 获取当前地图边界
        const bounds = map.value.getBounds()
        const bbox = [
            bounds.getWest(),
            bounds.getSouth(),
            bounds.getEast(),
            bounds.getNorth()
        ]

        // 步骤2: 生成网格
        updateProgress(progressContainer, t('tools.elevation-contour-generator.processingGrid'), 20)


        // 计算合适的网格大小（基于地图缩放级别）
        const zoom = map.value.getZoom()
        const gridSize = Math.max(8, Math.min(20, Math.floor(zoom * 1.5)))

        console.log(`Generating contours with ${gridSize}x${gridSize} grid (zoom level: ${zoom})`)

        // 生成网格点
        const gridPoints = generateElevationGrid(bbox, gridSize)

        console.log(`Generated ${gridPoints.length} grid points for elevation query`)

        // 步骤3: 获取高程数据（带进度更新）
        updateProgress(progressContainer, t('tools.elevation-contour-generator.queryingElevation'), 30)

        const elevationData = await getBatchElevationDataWithProgress(
            gridPoints,
            5,
            200,
            (progress) => {
                const progressPercent = 30 + (progress * 0.5) // 30-80%
                updateProgress(progressContainer,
                    t('tools.elevation-contour-generator.progress', {
                        current: Math.floor(gridPoints.length * progress),
                        total: gridPoints.length,
                        percent: Math.floor(progress * 100)
                    }),
                    progressPercent
                )
            }
        )
        // 步骤4: 生成等高线
        updateProgress(progressContainer, t('tools.elevation-contour-generator.creatingContours'), 85)


        console.log(`Successfully retrieved elevation data for ${elevationData.length} points`)

        // 验证数据质量
        const validPoints = elevationData.filter(point =>
            point.elevation !== null &&
            point.elevation !== undefined &&
            !isNaN(point.elevation)
        )

        if (validPoints.length < gridPoints.length * 0.5) {
            console.warn(`Only ${validPoints.length}/${gridPoints.length} points have valid elevation data`)
        }

        // 使用改进的等高线算法生成等高线
        const contours = generateContourLines(validPoints, contourInterval.value)

        console.log(`Generated ${contours.length} contour lines`)

        // 步骤5: 添加到地图
        updateProgress(progressContainer, t('tools.elevation-contour-generator.creatingContours'), 95)

        // 清除之前的等高线
        window.contoursLayer.clearLayers()

        if (contours.length === 0) {
            alert(`${t('tools.elevation-contour-generator.contourGenerationFailed')}\n- ${t('tools.elevation-contour-generator.noDataAvailable')}\n- ${t('tools.elevation-contour-generator.suggestions')}\n- ${t('tools.elevation-contour-generator.dataPoints', { count: validPoints.length + '/' + gridPoints.length })}`)
            return
        }

        // 添加等高线到地图
        let addedContours = 0
        contours.forEach((contour, index) => {
            try {
                // 验证坐标数据
                const validCoordinates = contour.coordinates.filter(coord =>
                    Array.isArray(coord) &&
                    coord.length === 2 &&
                    !isNaN(coord[0]) &&
                    !isNaN(coord[1])
                )

                if (validCoordinates.length < 2) {
                    console.warn(`Skipping contour ${index}: insufficient valid coordinates`)
                    return
                }

                const polyline = L.value.polyline(validCoordinates, {
                    color: getContourColor(contour.elevation),
                    weight: contourWidth.value,
                    opacity: 0.8,
                    smoothFactor: contourSmoothing.value
                })

                // 添加高程标签（每隔几条等高线添加一次，避免过于密集）
                if (validCoordinates.length > 0 && index % 2 === 0) {
                    const midPoint = validCoordinates[Math.floor(validCoordinates.length / 2)]
                    L.value.marker(midPoint, {
                        icon: L.value.divIcon({
                            className: 'contour-label',
                            html: `<div style="background: rgba(255,255,255,0.9); padding: 2px 4px; border-radius: 3px; font-size: 10px; border: 1px solid #ccc; font-weight: bold;">${contour.elevation}m</div>`,
                            iconSize: [35, 20],
                            iconAnchor: [17, 10]
                        })
                    }).addTo(window.contoursLayer)
                }

                window.contoursLayer.addLayer(polyline)
                addedContours++
            } catch (error) {
                console.warn(`Failed to add contour ${index}:`, error)
            }
        })

        contourData.value = contours
        // 完成
        updateProgress(progressContainer, t('tools.elevation-contour-generator.contourGenerationSuccess'), 100)

        // 延迟移除进度指示器
        setTimeout(() => {
            removeProgressIndicator(progressContainer)
        }, 2000)

        // 显示成功消息
        const message = `✓ ${t('tools.elevation-contour-generator.contourGenerationSuccess')}\n- ${t('tools.elevation-contour-generator.generatedContours', { count: addedContours })}\n- ${t('tools.elevation-contour-generator.elevationInterval', { interval: contourInterval.value })}\n- ${t('tools.elevation-contour-generator.dataPoints', { count: validPoints.length })}`
        console.log(message)

        // 可选：显示简短的成功提示
        if (addedContours > 0) {
            setTimeout(() => {
                const notification = document.createElement('div')
                notification.innerHTML = `<div style="position: fixed; top: 20px; right: 20px; background: #10b981; color: white; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000; font-size: 14px;">✓ ${t('tools.elevation-contour-generator.generatedContours', { count: addedContours })}</div>`
                document.body.appendChild(notification)
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification)
                    }
                }, 3000)
            }, 100)
        }

    } catch (error) {
        console.error('Error generating contours:', error)

        let errorMessage = t('tools.elevation-contour-generator.contourGenerationFailed') + '：'
        if (error.message.includes('coordinates')) {
            errorMessage += '• ' + t('tools.elevation-contour-generator.invalidCoordinates')
        } else if (error.message.includes('fetch')) {
            errorMessage += '• ' + t('tools.elevation-contour-generator.networkError')
        } else if (error.message.includes('timeout')) {
            errorMessage += '• ' + t('tools.elevation-contour-generator.requestTimeout')
        } else {
            errorMessage += '• ' + t('tools.elevation-contour-generator.unknownError')
        }
        errorMessage += '\n' + t('tools.elevation-contour-generator.suggestions') + '：\n• ' + t('tools.elevation-contour-generator.tryReduceArea') + '\n• ' + t('tools.elevation-contour-generator.increaseInterval') + '\n• ' + t('tools.elevation-contour-generator.checkNetwork')
        alert(errorMessage)
    } finally {
        loading.value = false
    }
}

// 改进的等高线生成算法
function generateContourLines(elevationData, interval) {
    if (!elevationData || elevationData.length === 0) {
        console.warn('No elevation data provided for contour generation')
        return []
    }

    const contours = []
    const elevations = elevationData.map(p => p.elevation).filter(e => !isNaN(e))

    if (elevations.length === 0) {
        console.warn('No valid elevation values found')
        return []
    }

    const minElevation = Math.min(...elevations)
    const maxElevation = Math.max(...elevations)

    console.log(`Elevation range: ${minElevation}m to ${maxElevation}m`)

    // 确保间隔合理
    const effectiveInterval = Math.max(1, interval)
    const elevationRange = maxElevation - minElevation

    if (elevationRange < effectiveInterval) {
        console.warn(`Elevation range (${elevationRange}m) is smaller than interval (${effectiveInterval}m)`)
        // 为小范围创建单一等高线
        const avgElevation = Math.round((minElevation + maxElevation) / 2)
        const allPoints = elevationData.map(p => [p.lat, p.lng])
        if (allPoints.length > 2) {
            contours.push({
                elevation: avgElevation,
                coordinates: allPoints
            })
        }
        return contours
    }

    // 生成等高线级别
    const startElevation = Math.ceil(minElevation / effectiveInterval) * effectiveInterval
    const endElevation = Math.floor(maxElevation / effectiveInterval) * effectiveInterval

    for (let elevation = startElevation; elevation <= endElevation; elevation += effectiveInterval) {
        // 使用更智能的点选择算法
        const tolerance = effectiveInterval * 0.4 // 40%的容差
        const candidatePoints = elevationData.filter(p =>
            Math.abs(p.elevation - elevation) <= tolerance
        )

        if (candidatePoints.length < 3) {
            // 如果点太少，尝试扩大容差
            const expandedTolerance = effectiveInterval * 0.6
            const expandedPoints = elevationData.filter(p =>
                Math.abs(p.elevation - elevation) <= expandedTolerance
            )

            if (expandedPoints.length >= 3) {
                candidatePoints.push(...expandedPoints)
            }
        }

        if (candidatePoints.length >= 3) {
            // 对点进行排序以创建更好的轮廓
            const sortedPoints = sortPointsForContour(candidatePoints)
            const coordinates = sortedPoints.map(p => [p.lat, p.lng])

            // 验证坐标有效性
            const validCoordinates = coordinates.filter(coord =>
                Array.isArray(coord) &&
                coord.length === 2 &&
                !isNaN(coord[0]) &&
                !isNaN(coord[1]) &&
                coord[0] >= -90 && coord[0] <= 90 &&
                coord[1] >= -180 && coord[1] <= 180
            )

            if (validCoordinates.length >= 3) {
                contours.push({
                    elevation: elevation,
                    coordinates: validCoordinates,
                    pointCount: validCoordinates.length
                })
            }
        }
    }

    console.log(`Generated ${contours.length} contour levels from ${elevationData.length} data points`)
    return contours
}

// 对点进行排序以创建更好的等高线轮廓
function sortPointsForContour(points) {
    if (points.length <= 3) return points

    // 计算中心点
    const centerLat = points.reduce((sum, p) => sum + p.lat, 0) / points.length
    const centerLng = points.reduce((sum, p) => sum + p.lng, 0) / points.length

    // 按照相对于中心点的角度排序
    return points.sort((a, b) => {
        const angleA = Math.atan2(a.lat - centerLat, a.lng - centerLng)
        const angleB = Math.atan2(b.lat - centerLat, b.lng - centerLng)
        return angleA - angleB
    })
}

// 改进的网格生成函数
function generateElevationGrid(bbox, gridSize) {
    const [west, south, east, north] = bbox

    // 验证边界框
    if (west >= east || south >= north) {
        console.error('Invalid bounding box:', bbox)
        return []
    }

    // 确保网格大小合理
    const effectiveGridSize = Math.max(5, Math.min(25, gridSize))

    const latStep = (north - south) / effectiveGridSize
    const lngStep = (east - west) / effectiveGridSize

    const points = []

    // 生成网格点，包括边界
    for (let i = 0; i <= effectiveGridSize; i++) {
        for (let j = 0; j <= effectiveGridSize; j++) {
            const lat = south + i * latStep
            const lng = west + j * lngStep

            // 验证坐标范围
            if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                points.push({
                    lat: parseFloat(lat.toFixed(6)),
                    lng: parseFloat(lng.toFixed(6)),
                    gridX: j,
                    gridY: i
                })
            }
        }
    }

    console.log(`Generated ${points.length} grid points (${effectiveGridSize}x${effectiveGridSize})`)
    return points
}

// 根据高程获取等高线颜色
function getContourColor(elevation) {
    const colorRamp = colorRamps[selectedColorRamp.value]
    const normalizedElevation = Math.min(1, Math.max(0, elevation / 1000)) // 假设最大高程1000m

    if (colorRamp.length === 2) {
        // 简单的两色插值
        return interpolateColor(colorRamp[0], colorRamp[1], normalizedElevation)
    } else {
        // 多色插值
        const segmentSize = 1 / (colorRamp.length - 1)
        const segmentIndex = Math.floor(normalizedElevation / segmentSize)
        const segmentProgress = (normalizedElevation % segmentSize) / segmentSize

        const startColor = colorRamp[Math.min(segmentIndex, colorRamp.length - 1)]
        const endColor = colorRamp[Math.min(segmentIndex + 1, colorRamp.length - 1)]

        return interpolateColor(startColor, endColor, segmentProgress)
    }
}

// 颜色插值函数
function interpolateColor(color1, color2, factor) {
    const hex1 = color1.replace('#', '')
    const hex2 = color2.replace('#', '')

    const r1 = parseInt(hex1.substr(0, 2), 16)
    const g1 = parseInt(hex1.substr(2, 2), 16)
    const b1 = parseInt(hex1.substr(4, 2), 16)

    const r2 = parseInt(hex2.substr(0, 2), 16)
    const g2 = parseInt(hex2.substr(2, 2), 16)
    const b2 = parseInt(hex2.substr(4, 2), 16)

    const r = Math.round(r1 + (r2 - r1) * factor)
    const g = Math.round(g1 + (g2 - g1) * factor)
    const b = Math.round(b1 + (b2 - b1) * factor)

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

// 模式切换方法
function setMode(mode) {
    // 清理之前模式的状态
    if (currentMode.value === 'measurement') {
        // 可选：保留测量点或清除
    } else if (currentMode.value === 'profile') {
        clearProfile()
    }

    currentMode.value = mode

    // 更新旧的状态变量以保持兼容性
    isDrawingProfile.value = (mode === 'profile')
}

// 测量功能方法
async function addMeasurementPoint(lat, lng) {
    loading.value = true

    try {
        // 获取高程数据
        const elevation = await getElevationData(lat, lng)

        // 计算距离
        let distanceFromPrevious = 0
        let cumulativeDistance = 0

        if (measurementPoints.value.length > 0) {
            const prevPoint = measurementPoints.value[measurementPoints.value.length - 1]
            distanceFromPrevious = calculateDistance(prevPoint.lat, prevPoint.lng, lat, lng)
            cumulativeDistance = prevPoint.cumulativeDistance + distanceFromPrevious
        }

        // 添加测量点
        const newPoint = {
            lat,
            lng,
            elevation,
            distanceFromPrevious,
            cumulativeDistance,
            index: measurementPoints.value.length
        }

        measurementPoints.value.push(newPoint)

        // 在地图上添加标记
        const marker = L.value.circleMarker([lat, lng], {
            color: '#10b981', // green-500
            fillColor: '#10b981',
            fillOpacity: 0.8,
            radius: 6,
            weight: 2
        }).addTo(window.markersLayer)

        // 添加标签
        const label = L.value.marker([lat, lng], {
            icon: L.value.divIcon({
                className: 'measurement-label',
                html: `<div style="background: white; padding: 2px 6px; border-radius: 4px; font-size: 12px; font-weight: bold; border: 2px solid #10b981; color: #10b981;">${measurementPoints.value.length}</div>`,
                iconSize: [24, 20],
                iconAnchor: [12, 25]
            })
        }).addTo(window.markersLayer)

        // 如果有多个点，绘制连线
        if (measurementPoints.value.length > 1) {
            const coordinates = measurementPoints.value.map(p => [p.lat, p.lng])
            L.value.polyline(coordinates, {
                color: '#10b981',
                weight: 3,
                opacity: 0.7,
                dashArray: '5, 5'
            }).addTo(window.markersLayer)
        }

        // 显示弹窗
        marker.bindPopup(`
            <div style="font-size: 12px;">
                <strong>${t('tools.elevation-contour-generator.pointNumber', { number: measurementPoints.value.length })}</strong><br>
                ${t('tools.elevation-contour-generator.elevation')}: ${elevation}m<br>
                ${measurementPoints.value.length > 1 ?
                `${t('tools.elevation-contour-generator.distanceFromPrevious')}: ${distanceFromPrevious.toFixed(2)}km<br>` :
                ''
            }
                ${t('tools.elevation-contour-generator.cumulativeDistanceFromStart')}: ${cumulativeDistance.toFixed(2)}km
            </div>
        `).openPopup()

    } catch (error) {
        console.error('Error adding measurement point:', error)
        alert(t('tools.elevation-contour-generator.addMeasurementPointFailed'))
    } finally {
        loading.value = false
    }
}

function removeMeasurementPoint(index) {
    measurementPoints.value.splice(index, 1)

    // 重新计算距离
    recalculateMeasurementDistances()

    // 重新绘制地图标记
    redrawMeasurementPoints()
}

function recalculateMeasurementDistances() {
    let cumulativeDistance = 0

    measurementPoints.value.forEach((point, index) => {
        if (index === 0) {
            point.distanceFromPrevious = 0
            point.cumulativeDistance = 0
        } else {
            const prevPoint = measurementPoints.value[index - 1]
            point.distanceFromPrevious = calculateDistance(
                prevPoint.lat, prevPoint.lng,
                point.lat, point.lng
            )
            cumulativeDistance += point.distanceFromPrevious
            point.cumulativeDistance = cumulativeDistance
        }
        point.index = index
    })
}

function redrawMeasurementPoints() {
    // 清除现有标记
    window.markersLayer.clearLayers()

    if (measurementPoints.value.length === 0) return

    // 重新绘制所有测量点
    measurementPoints.value.forEach((point, index) => {
        // 添加圆形标记
        const marker = L.value.circleMarker([point.lat, point.lng], {
            color: '#10b981',
            fillColor: '#10b981',
            fillOpacity: 0.8,
            radius: 6,
            weight: 2
        }).addTo(window.markersLayer)

        // 添加编号标签
        L.value.marker([point.lat, point.lng], {
            icon: L.value.divIcon({
                className: 'measurement-label',
                html: `<div style="background: white; padding: 2px 6px; border-radius: 4px; font-size: 12px; font-weight: bold; border: 2px solid #10b981; color: #10b981;">${index + 1}</div>`,
                iconSize: [24, 20],
                iconAnchor: [12, 25]
            })
        }).addTo(window.markersLayer)

        // 添加弹窗
        marker.bindPopup(`
            <div style="font-size: 12px;">
                <strong>${t('tools.elevation-contour-generator.pointNumber', { number: index + 1 })}</strong><br>
                ${t('tools.elevation-contour-generator.elevation')}: ${point.elevation}m<br>
                ${index > 0 ?
                `${t('tools.elevation-contour-generator.distanceFromPrevious')}: ${point.distanceFromPrevious.toFixed(2)}km<br>` :
                ''
            }
                ${t('tools.elevation-contour-generator.cumulativeDistanceFromStart')}: ${point.cumulativeDistance.toFixed(2)}km
            </div>
        `)
    })

    // 绘制连线
    if (measurementPoints.value.length > 1) {
        const coordinates = measurementPoints.value.map(p => [p.lat, p.lng])
        L.value.polyline(coordinates, {
            color: '#10b981',
            weight: 3,
            opacity: 0.7,
            dashArray: '5, 5'
        }).addTo(window.markersLayer)
    }
}

function clearMeasurementPoints() {
    measurementPoints.value = []
    window.markersLayer.clearLayers()
}

function exportMeasurementData() {
    if (measurementPoints.value.length === 0) return

    // 创建CSV内容
    const headers = [
        t('tools.elevation-contour-generator.pointIndex'),
        t('tools.elevation-contour-generator.latitude'),
        t('tools.elevation-contour-generator.longitude'),
        t('tools.elevation-contour-generator.elevationValue'),
        t('tools.elevation-contour-generator.distanceFromPrevious') + ' (km)',
        t('tools.elevation-contour-generator.cumulativeDistanceFromStart') + ' (km)'
    ]

    const csvContent = [
        headers.join(','),
        ...measurementPoints.value.map((point, index) => [
            index + 1,
            point.lat.toFixed(6),
            point.lng.toFixed(6),
            point.elevation,
            point.distanceFromPrevious.toFixed(3),
            point.cumulativeDistance.toFixed(3)
        ].join(','))
    ].join('\n')

    // 下载文件
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `measurement_data_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
}

// 修改原有的剖面图切换方法以兼容新的模式系统
function toggleProfileDrawing() {
    if (currentMode.value === 'profile') {
        setMode('single')
    } else {
        setMode('profile')
    }
}

// 经纬度转瓦片坐标
function latLngToTile(lat, lng, zoom) {
    const latRad = lat * Math.PI / 180
    const n = Math.pow(2, zoom)
    const x = Math.floor((lng + 180) / 360 * n)
    const y = Math.floor((1 - Math.asinh(Math.tan(latRad)) / Math.PI) / 2 * n)
    return { x, y, z: zoom }
}

// 经纬度转像素坐标
function latLngToPixel(lat, lng, zoom, tileCoords) {
    const latRad = lat * Math.PI / 180
    const n = Math.pow(2, zoom)
    const worldX = (lng + 180) / 360 * n
    const worldY = (1 - Math.asinh(Math.tan(latRad)) / Math.PI) / 2 * n

    const pixelX = Math.floor((worldX - tileCoords.x) * 256)
    const pixelY = Math.floor((worldY - tileCoords.y) * 256)

    return { x: pixelX, y: pixelY }
}

async function getElevationFromTile(tileCoords, pixelCoords) {
    // 构建瓦片URL
    const tileUrl = `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${tileCoords.z}/${tileCoords.x}/${tileCoords.y}.png`

    try {
        // 创建图像对象
        const img = new Image()
        img.crossOrigin = 'anonymous' // 允许跨域

        return new Promise((resolve, reject) => {
            img.onload = () => {
                try {
                    // 创建canvas来读取像素数据
                    const canvas = document.createElement('canvas')
                    const ctx = canvas.getContext('2d')
                    canvas.width = img.width
                    canvas.height = img.height

                    // 绘制图像到canvas
                    ctx.drawImage(img, 0, 0)

                    // 获取指定像素的RGB值
                    const imageData = ctx.getImageData(pixelCoords.x, pixelCoords.y, 1, 1)
                    const [r, g, b] = imageData.data

                    // 解码高程（Terrarium格式）
                    const elevation = (r * 256 + g + b / 256) - 32768

                    resolve(Math.round(elevation))
                } catch (error) {
                    reject(error)
                }
            }

            img.onerror = () => reject(new Error('Failed to load terrain tile'))
            img.src = tileUrl
        })
    } catch (error) {
        throw new Error(`Terrain tile request failed: ${error.message}`)
    }
}



// 创建进度指示器
function createProgressIndicator() {
    const container = document.createElement('div')
    container.className = 'progress-indicator'
    container.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            min-width: 300px;
            text-align: center;
        ">
            <div class="progress-text" style="margin-bottom: 15px; font-weight: 500;">
                ${t('tools.elevation-contour-generator.generatingContours')}
            </div>
            <div style="
                width: 100%;
                height: 8px;
                background: #e5e7eb;
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 10px;
            ">
                <div class="progress-bar" style="
                    height: 100%;
                    background: linear-gradient(90deg, #3b82f6, #10b981);
                    width: 0%;
                    transition: width 0.3s ease;
                "></div>
            </div>
            <div class="progress-percent" style="font-size: 14px; color: #6b7280;">0%</div>
        </div>
    `
    document.body.appendChild(container)
    return container
}

// 更新进度
function updateProgress(container, text, percent, isError = false) {
    const textElement = container.querySelector('.progress-text')
    const barElement = container.querySelector('.progress-bar')
    const percentElement = container.querySelector('.progress-percent')

    if (textElement) textElement.textContent = text
    if (barElement) {
        barElement.style.width = `${percent}%`
        if (isError) {
            barElement.style.background = '#ef4444'
        }
    }
    if (percentElement) percentElement.textContent = `${Math.floor(percent)}%`
}

// 移除进度指示器
function removeProgressIndicator(container) {
    if (container && container.parentNode) {
        container.parentNode.removeChild(container)
    }
}

// 带进度回调的批量获取高程数据
async function getBatchElevationDataWithProgress(coordinates, batchSize = 10, delayBetweenBatches = 100, progressCallback) {
    const results = []
    const batches = []

    for (let i = 0; i < coordinates.length; i += batchSize) {
        batches.push(coordinates.slice(i, i + batchSize))
    }

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
        const batch = batches[batchIndex]
        const batchPromises = batch.map(async (coord) => {
            try {
                const elevation = await getElevationData(coord.lat, coord.lng)
                return { ...coord, elevation }
            } catch (error) {
                return { ...coord, elevation: generateSimulatedElevation(coord.lat, coord.lng) }
            }
        })

        const batchResults = await Promise.allSettled(batchPromises)

        batchResults.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                results.push(result.value)
            } else {
                const coord = batch[index]
                results.push({
                    ...coord,
                    elevation: generateSimulatedElevation(coord.lat, coord.lng)
                })
            }
        })

        // 更新进度
        const progress = (batchIndex + 1) / batches.length
        if (progressCallback) {
            progressCallback(progress)
        }

        if (batchIndex < batches.length - 1) {
            await new Promise(resolve => setTimeout(resolve, delayBetweenBatches))
        }
    }

    return results
}


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

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white;
}

.btn-danger {
    @apply bg-red-600 hover:bg-red-700 text-white;
}

/* Leaflet样式覆盖 */
:deep(.leaflet-container) {
    font-family: inherit;
}

:deep(.contour-label) {
    background: transparent !important;
    border: none !important;
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