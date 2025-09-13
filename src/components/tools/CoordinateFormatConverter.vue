<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.coordinate-format-converter.inputTitle') }}</h2>

                <!-- 转换模式选择 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.coordinate-format-converter.conversionMode') }}
                    </label>
                    <div class="grid grid-cols-3 gap-2">
                        <button 
                            class="btn-mode"
                            :class="{ 'btn-mode-active': conversionMode === 'dd' }"
                            @click="setConversionMode('dd')"
                        >
                            {{ $t('tools.coordinate-format-converter.ddMode') }}
                        </button>
                        
                        <button 
                            class="btn-mode"
                            :class="{ 'btn-mode-active': conversionMode === 'dms' }"
                            @click="setConversionMode('dms')"
                        >
                            {{ $t('tools.coordinate-format-converter.dmsMode') }}
                        </button>
                        
                        <button 
                            class="btn-mode"
                            :class="{ 'btn-mode-active': conversionMode === 'dm' }"
                            @click="setConversionMode('dm')"
                        >
                            {{ $t('tools.coordinate-format-converter.dmMode') }}
                        </button>
                    </div>
                </div>

                <!-- 输入区域 -->
                <div class="mb-6">
                    <div v-if="conversionMode === 'dd'">
                        <h3 class="font-medium mb-2">{{ $t('tools.coordinate-format-converter.decimalDegrees') }}</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.coordinate-format-converter.latitude') }}
                                </label>
                                <input 
                                    type="text" 
                                    v-model="inputDD.lat"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                    :placeholder="$t('tools.coordinate-format-converter.enterLatitude')"
                                />
                            </div>
                            
                            <div>
                                <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.coordinate-format-converter.longitude') }}
                                </label>
                                <input 
                                    type="text" 
                                    v-model="inputDD.lon"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                    :placeholder="$t('tools.coordinate-format-converter.enterLongitude')"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div v-else-if="conversionMode === 'dms'">
                        <h3 class="font-medium mb-2">{{ $t('tools.coordinate-format-converter.degreesMinutesSeconds') }}</h3>
                        <div class="space-y-4">
                            <!-- 纬度 -->
                            <div>
                                <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.coordinate-format-converter.latitude') }}
                                </label>
                                <div class="grid grid-cols-4 gap-2">
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="90"
                                            v-model.number="inputDMS.lat.deg"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.degrees')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">°</div>
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="59"
                                            v-model.number="inputDMS.lat.min"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.minutes')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">'</div>
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="59.9999"
                                            step="0.0001"
                                            v-model.number="inputDMS.lat.sec"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.seconds')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">"</div>
                                    </div>
                                    
                                    <div>
                                        <select 
                                            v-model="inputDMS.lat.dir"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        >
                                            <option value="N">N</option>
                                            <option value="S">S</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 经度 -->
                            <div>
                                <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.coordinate-format-converter.longitude') }}
                                </label>
                                <div class="grid grid-cols-4 gap-2">
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="180"
                                            v-model.number="inputDMS.lon.deg"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.degrees')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">°</div>
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="59"
                                            v-model.number="inputDMS.lon.min"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.minutes')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">'</div>
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="59.9999"
                                            step="0.0001"
                                            v-model.number="inputDMS.lon.sec"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.seconds')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">"</div>
                                    </div>
                                    
                                    <div>
                                        <select 
                                            v-model="inputDMS.lon.dir"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        >
                                            <option value="E">E</option>
                                            <option value="W">W</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div v-else-if="conversionMode === 'dm'">
                        <h3 class="font-medium mb-2">{{ $t('tools.coordinate-format-converter.degreesMinutes') }}</h3>
                        <div class="space-y-4">
                            <!-- 纬度 -->
                            <div>
                                <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.coordinate-format-converter.latitude') }}
                                </label>
                                <div class="grid grid-cols-3 gap-2">
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="90"
                                            v-model.number="inputDM.lat.deg"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.degrees')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">°</div>
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="59.9999"
                                            step="0.0001"
                                            v-model.number="inputDM.lat.min"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.minutes')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">'</div>
                                    </div>
                                    
                                    <div>
                                        <select 
                                            v-model="inputDM.lat.dir"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        >
                                            <option value="N">N</option>
                                            <option value="S">S</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 经度 -->
                            <div>
                                <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    {{ $t('tools.coordinate-format-converter.longitude') }}
                                </label>
                                <div class="grid grid-cols-3 gap-2">
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="180"
                                            v-model.number="inputDM.lon.deg"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.degrees')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">°</div>
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="59.9999"
                                            step="0.0001"
                                            v-model.number="inputDM.lon.min"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                            :placeholder="$t('tools.coordinate-format-converter.minutes')"
                                        />
                                        <div class="text-xs text-gray-500 text-center mt-1">'</div>
                                    </div>
                                    
                                    <div>
                                        <select 
                                            v-model="inputDM.lon.dir"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                        >
                                            <option value="E">E</option>
                                            <option value="W">W</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 批量输入 -->
                <div class="mb-6">
                    <h3 class="font-medium mb-2">{{ $t('tools.coordinate-format-converter.batchInput') }}</h3>
                    <textarea 
                        v-model="batchInput"
                        rows="4"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.coordinate-format-converter.batchInputPlaceholder')"
                    ></textarea>
                </div>

                <!-- 小数位数设置 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ $t('tools.coordinate-format-converter.decimalPlaces') }}
                    </label>
                    <div class="flex items-center space-x-4">
                        <input 
                            type="range" 
                            min="0" 
                            max="8"
                            v-model.number="decimalPlaces"
                            class="flex-1"
                        />
                        <span class="text-sm font-medium w-8">{{ decimalPlaces }}</span>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="flex flex-wrap gap-2">
                    <button class="btn btn-primary flex-1" @click="convert">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        {{ $t('tools.coordinate-format-converter.convertBtn') }}
                    </button>
                    
                    <button class="btn btn-secondary" @click="loadSampleData">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.coordinate-format-converter.loadSample') }}
                    </button>
                    
                    <button class="btn btn-secondary" @click="clearAll">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ $t('tools.coordinate-format-converter.clearAll') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.coordinate-format-converter.outputTitle') }}</h2>
                    
                    <!-- 批量导出按钮 -->
                    <button 
                        v-if="results.length > 1" 
                        class="btn btn-primary btn-sm" 
                        @click="exportAll"
                    >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.coordinate-format-converter.batchExport') }}
                    </button>
                </div>

                <!-- 转换结果 -->
                <div v-if="results.length" class="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                    <div 
                        v-for="(result, idx) in results" 
                        :key="idx"
                        class="border rounded-lg p-4 bg-white dark:bg-gray-800 transition-all duration-300"
                        :class="{ 'ring-2 ring-blue-500 animate-pulse': result.highlight }"
                    >
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    {{ $t('tools.coordinate-format-converter.coordinate') }} #{{ idx + 1 }}
                                </div>
                                
                                <!-- 显示原始输入格式 -->
                                <div class="mb-3 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                        {{ $t('tools.coordinate-format-converter.inputTitle') }} ({{ $t(`tools.coordinate-format-converter.${result.inputFormat}Mode`) }})
                                    </div>
                                    <div class="font-mono text-sm">{{ result.inputLat }}, {{ result.inputLon }}</div>
                                </div>
                                
                                <!-- 显示转换结果 -->
                                <div class="text-sm font-medium mb-2">
                                    {{ $t('tools.coordinate-format-converter.conversions') }}
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                                    <div class="p-2 bg-blue-50 dark:bg-blue-900/30 rounded">
                                        <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                            {{ $t('tools.coordinate-format-converter.decimalDegrees') }}
                                        </div>
                                        <div class="font-mono text-sm">{{ result.conversions.dd.lat }}, {{ result.conversions.dd.lon }}</div>
                                    </div>
                                    
                                    <div class="p-2 bg-green-50 dark:bg-green-900/30 rounded">
                                        <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                            {{ $t('tools.coordinate-format-converter.degreesMinutesSeconds') }}
                                        </div>
                                        <div class="font-mono text-sm">{{ result.conversions.dms.lat }}, {{ result.conversions.dms.lon }}</div>
                                    </div>
                                    
                                    <div class="p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded">
                                        <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                            {{ $t('tools.coordinate-format-converter.degreesMinutes') }}
                                        </div>
                                        <div class="font-mono text-sm">{{ result.conversions.dm.lat }}, {{ result.conversions.dm.lon }}</div>
                                    </div>
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
                    <p class="mt-4 text-gray-500">{{ $t('tools.coordinate-format-converter.noOutput') }}</p>
                </div>
            </div>
        </div>
        <CoordinateConverterArticle />
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import CoordinateConverterArticle from './CoordinateFormatConverterArticle.vue'

const { t } = useI18n()

// 转换模式
const conversionMode = ref('dd')

// 输入数据
const inputDD = reactive({
    lat: '',
    lon: ''
})

const inputDMS = reactive({
    lat: {
        deg: null,
        min: null,
        sec: null,
        dir: 'N'
    },
    lon: {
        deg: null,
        min: null,
        sec: null,
        dir: 'E'
    }
})

const inputDM = reactive({
    lat: {
        deg: null,
        min: null,
        dir: 'N'
    },
    lon: {
        deg: null,
        min: null,
        dir: 'E'
    }
})

// 批量输入
const batchInput = ref('')

// 小数位数
const decimalPlaces = ref(6)

// 转换结果
const results = ref([])

// 设置转换模式
function setConversionMode(mode) {
    conversionMode.value = mode
}

// 加载示例数据
function loadSampleData() {
    if (conversionMode.value === 'dd') {
        inputDD.lat = '39.9042'
        inputDD.lon = '116.4074'
    } else if (conversionMode.value === 'dms') {
        inputDMS.lat.deg = 39
        inputDMS.lat.min = 54
        inputDMS.lat.sec = 15.12
        inputDMS.lat.dir = 'N'
        
        inputDMS.lon.deg = 116
        inputDMS.lon.min = 24
        inputDMS.lon.sec = 26.64
        inputDMS.lon.dir = 'E'
    } else if (conversionMode.value === 'dm') {
        inputDM.lat.deg = 39
        inputDM.lat.min = 54.252
        inputDM.lat.dir = 'N'
        
        inputDM.lon.deg = 116
        inputDM.lon.min = 24.444
        inputDM.lon.dir = 'E'
    }
    
    batchInput.value = '39.9042,116.4074\n31.23527,121.46694\n40.7128,-74.0060'
}

// 清除所有数据
function clearAll() {
    inputDD.lat = ''
    inputDD.lon = ''
    
    inputDMS.lat.deg = null
    inputDMS.lat.min = null
    inputDMS.lat.sec = null
    inputDMS.lat.dir = 'N'
    inputDMS.lon.deg = null
    inputDMS.lon.min = null
    inputDMS.lon.sec = null
    inputDMS.lon.dir = 'E'
    
    inputDM.lat.deg = null
    inputDM.lat.min = null
    inputDM.lat.dir = 'N'
    inputDM.lon.deg = null
    inputDM.lon.min = null
    inputDM.lon.dir = 'E'
    
    batchInput.value = ''
    results.value = []
}

// 转换函数
function convert() {
    results.value = []
    
    // 处理单个坐标
    if (conversionMode.value === 'dd' && inputDD.lat && inputDD.lon) {
        const result = convertDD(inputDD.lat, inputDD.lon)
        if (result) {
            results.value.push(result)
        }
    } else if (conversionMode.value === 'dms' && 
               inputDMS.lat.deg !== null && inputDMS.lat.min !== null && inputDMS.lat.sec !== null &&
               inputDMS.lon.deg !== null && inputDMS.lon.min !== null && inputDMS.lon.sec !== null) {
        const result = convertDMS(
            inputDMS.lat.deg, inputDMS.lat.min, inputDMS.lat.sec, inputDMS.lat.dir,
            inputDMS.lon.deg, inputDMS.lon.min, inputDMS.lon.sec, inputDMS.lon.dir
        )
        if (result) {
            results.value.push(result)
        }
    } else if (conversionMode.value === 'dm' && 
               inputDM.lat.deg !== null && inputDM.lat.min !== null &&
               inputDM.lon.deg !== null && inputDM.lon.min !== null) {
        const result = convertDM(
            inputDM.lat.deg, inputDM.lat.min, inputDM.lat.dir,
            inputDM.lon.deg, inputDM.lon.min, inputDM.lon.dir
        )
        if (result) {
            results.value.push(result)
        }
    }
    
    // 处理批量坐标
    if (batchInput.value.trim()) {
        const lines = batchInput.value.trim().split('\n')
        lines.forEach(line => {
            const coords = line.split(',').map(c => c.trim())
            if (coords.length >= 2) {
                const result = convertDD(coords[0], coords[1])
                if (result) {
                    results.value.push(result)
                }
            }
        })
    }
    
    // 高亮动画
    if (results.value.length > 0) {
        results.value[0].highlight = true
        setTimeout(() => {
            results.value[0].highlight = false
        }, 1000)
    }
}

// 十进制度转换
function convertDD(lat, lon) {
    try {
        const latNum = parseFloat(lat)
        const lonNum = parseFloat(lon)
        
        if (isNaN(latNum) || isNaN(lonNum)) {
            return null
        }
        
        // 验证范围
        if (Math.abs(latNum) > 90 || Math.abs(lonNum) > 180) {
            return null
        }
        
        // 转换为其他格式
        const dmsLat = ddToDMS(latNum)
        const dmsLon = ddToDMS(lonNum)
        const dmLat = ddToDM(latNum)
        const dmLon = ddToDM(lonNum)
        
        return {
            inputLat: lat,
            inputLon: lon,
            inputFormat: 'dd',
            conversions: {
                dd: { lat: latNum.toFixed(decimalPlaces.value), lon: lonNum.toFixed(decimalPlaces.value) },
                dms: { lat: dmsLat, lon: dmsLon },
                dm: { lat: dmLat, lon: dmLon }
            },
            highlight: false
        }
    } catch (e) {
        return null
    }
}

// 度分秒转换
function convertDMS(latDeg, latMin, latSec, latDir, lonDeg, lonMin, lonSec, lonDir) {
    try {
        // 验证输入
        if (latDeg < 0 || latDeg > 90 || lonDeg < 0 || lonDeg > 180 ||
            latMin < 0 || latMin > 59 || lonMin < 0 || lonMin > 59 ||
            latSec < 0 || latSec > 59.9999 || lonSec < 0 || lonSec > 59.9999) {
            return null
        }
        
        // 转换为十进制度
        let latDD = latDeg + latMin/60 + latSec/3600
        let lonDD = lonDeg + lonMin/60 + lonSec/3600
        
        if (latDir === 'S') latDD = -latDD
        if (lonDir === 'W') lonDD = -lonDD
        
        // 转换为度分
        const dmLat = ddToDM(latDD)
        const dmLon = ddToDM(lonDD)
        
        return {
            inputLat: formatDMS(latDeg, latMin, latSec, latDir),
            inputLon: formatDMS(lonDeg, lonMin, lonSec, lonDir),
            inputFormat: 'dms',
            conversions: {
                dd: { lat: latDD.toFixed(decimalPlaces.value), lon: lonDD.toFixed(decimalPlaces.value) },
                dms: { lat: formatDMS(latDeg, latMin, latSec, latDir), lon: formatDMS(lonDeg, lonMin, lonSec, lonDir) },
                dm: { lat: dmLat, lon: dmLon }
            },
            highlight: false
        }
    } catch (e) {
        return null
    }
}

// 度分转换
function convertDM(latDeg, latMin, latDir, lonDeg, lonMin, lonDir) {
    try {
        // 验证输入
        if (latDeg < 0 || latDeg > 90 || lonDeg < 0 || lonDeg > 180 ||
            latMin < 0 || latMin > 59.9999 || lonMin < 0 || lonMin > 59.9999) {
            return null
        }
        
        // 转换为十进制度
        let latDD = latDeg + latMin/60
        let lonDD = lonDeg + lonMin/60
        
        if (latDir === 'S') latDD = -latDD
        if (lonDir === 'W') lonDD = -lonDD
        
        // 转换为度分秒
        const dmsLat = ddToDMS(latDD)
        const dmsLon = ddToDMS(lonDD)
        
        return {
            inputLat: formatDM(latDeg, latMin, latDir),
            inputLon: formatDM(lonDeg, lonMin, lonDir),
            inputFormat: 'dm',
            conversions: {
                dd: { lat: latDD.toFixed(decimalPlaces.value), lon: lonDD.toFixed(decimalPlaces.value) },
                dms: { lat: dmsLat, lon: dmsLon },
                dm: { lat: formatDM(latDeg, latMin, latDir), lon: formatDM(lonDeg, lonMin, lonDir) }
            },
            highlight: false
        }
    } catch (e) {
        return null
    }
}

// 十进制度转度分秒
function ddToDMS(dd) {
    const absDD = Math.abs(dd)
    const deg = Math.floor(absDD)
    const min = Math.floor((absDD - deg) * 60)
    const sec = ((absDD - deg) * 60 - min) * 60
    
    const dir = dd >= 0 ? (dd <= 90 && dd >= -90 ? (dd >= 0 ? 'N' : 'S') : (dd >= 0 ? 'E' : 'W')) : (dd <= 90 && dd >= -90 ? (dd >= 0 ? 'N' : 'S') : (dd >= 0 ? 'E' : 'W'))
    
    return `${deg}°${min}'${sec.toFixed(2)}"${dir}`
}

// 十进制度转度分
function ddToDM(dd) {
    const absDD = Math.abs(dd)
    const deg = Math.floor(absDD)
    const min = (absDD - deg) * 60
    
    const isLat = Math.abs(dd) <= 90
    const dir = isLat ? (dd >= 0 ? 'N' : 'S') : (dd >= 0 ? 'E' : 'W')
    
    return `${deg}°${min.toFixed(4)}'${dir}`
}

// 格式化度分秒
function formatDMS(deg, min, sec, dir) {
    return `${deg}°${min}'${sec.toFixed(2)}"${dir}`
}

// 格式化度分
function formatDM(deg, min, dir) {
    return `${deg}°${min.toFixed(4)}'${dir}`
}

// 复制结果
function copyResult(index) {
    const result = results.value[index]
    let textToCopy = ''
    
    textToCopy += `${t('tools.coordinate-format-converter.decimalDegrees')}: ${result.conversions.dd.lat}, ${result.conversions.dd.lon}\n`
    textToCopy += `${t('tools.coordinate-format-converter.degreesMinutesSeconds')}: ${result.conversions.dms.lat}, ${result.conversions.dms.lon}\n`
    textToCopy += `${t('tools.coordinate-format-converter.degreesMinutes')}: ${result.conversions.dm.lat}, ${result.conversions.dm.lon}`
    
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
    let exportText = ''
    results.value.forEach((result, index) => {
        exportText += `# ${index + 1}\n`
        exportText += `${t('tools.coordinate-format-converter.decimalDegrees')}: ${result.conversions.dd.lat}, ${result.conversions.dd.lon}\n`
        exportText += `${t('tools.coordinate-format-converter.degreesMinutesSeconds')}: ${result.conversions.dms.lat}, ${result.conversions.dms.lon}\n`
        exportText += `${t('tools.coordinate-format-converter.degreesMinutes')}: ${result.conversions.dm.lat}, ${result.conversions.dm.lon}\n\n`
    })
    
    const blob = new Blob([exportText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'coordinates.txt'
    a.click()
    URL.revokeObjectURL(url)
}

// 监听小数位数变化，实时更新结果
watch(decimalPlaces, () => {
    if (results.value.length > 0) {
        convert()
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
    @apply bg-green-600 hover:bg-green-700 text-white;
}

.btn-mode {
    @apply px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700;
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