<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.random-ip-generator.inputTitle') }}</h2>

                <!-- IP版本选择 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.random-ip-generator.ipVersionTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.ipVersion" value="ipv4" />
                            <span>IPv4</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.ipVersion" value="ipv6" />
                            <span>IPv6</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.ipVersion" value="both" />
                            <span>{{ $t('tools.random-ip-generator.bothVersions') }}</span>
                        </label>
                    </div>
                </div>

                <!-- IP类型选择 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.random-ip-generator.ipTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.ipType" value="public" />
                            <span>{{ $t('tools.random-ip-generator.ipTypePublic') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.ipType" value="private" />
                            <span>{{ $t('tools.random-ip-generator.ipTypePrivate') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.ipType" value="any" />
                            <span>{{ $t('tools.random-ip-generator.ipTypeAny') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 地区选择 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.random-ip-generator.regionTitle') }}</h3>
                    <select v-model="config.region"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                        <option value="">{{ $t('tools.random-ip-generator.allRegions') }}</option>
                        <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                    </select>
                </div>

                <!-- 输出格式 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.random-ip-generator.formatTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="plain" />
                            <span>{{ $t('tools.random-ip-generator.formatPlain') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="json" />
                            <span>JSON</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="csv" />
                            <span>CSV</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="list" />
                            <span>{{ $t('tools.random-ip-generator.formatList') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 附加选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.random-ip-generator.optionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includePort" />
                            <span>{{ $t('tools.random-ip-generator.includePort') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeSubnet" />
                            <span>{{ $t('tools.random-ip-generator.includeSubnet') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeGeo" />
                            <span>{{ $t('tools.random-ip-generator.includeGeo') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.random-ip-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="1000"
                        :placeholder="$t('tools.random-ip-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.random-ip-generator.generating') : $t('tools.random-ip-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.random-ip-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.random-ip-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.random-ip-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.random-ip-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-if="config.format === 'plain'" class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                            {{ plainOutput }}
                        </div>
                        <div v-else-if="config.format === 'list'" class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
                            <div v-for="(item, idx) in generatedData" :key="idx" class="py-1">
                                {{ item.ip }}{{ item.port ? ':' + item.port : '' }}
                            </div>
                        </div>
                        <div v-else-if="config.format === 'json'" class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                            <pre>{{ JSON.stringify(generatedData, null, 2) }}</pre>
                        </div>
                        <div v-else class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                            <pre>{{ csvOutput }}</pre>
                        </div>
                    </div>

                    <!-- 导出选项 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.random-ip-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="copyToClipboard">
                                {{ $t('tools.random-ip-generator.copyBtn') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.random-ip-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.random-ip-generator.exportCsv') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportTxt">
                                {{ $t('tools.random-ip-generator.exportTxt') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.random-ip-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <RandomIpGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import RandomIpGeneratorArticle from './RandomIpGeneratorArticle.vue'

const { t } = useI18n()

// 配置
const config = reactive({
    ipVersion: 'ipv4',
    ipType: 'public',
    region: '',
    format: 'plain',
    includePort: false,
    includeSubnet: false,
    includeGeo: false,
    quantity: 10
})

// 数据
const generatedData = ref([])
const isGenerating = ref(false)

// 地区列表
const regions = computed(() => [
    { code: 'US', name: t('tools.random-ip-generator.regions.US') },
    { code: 'EU', name: t('tools.random-ip-generator.regions.EU') },
    { code: 'AS', name: t('tools.random-ip-generator.regions.AS') },
    { code: 'CN', name: t('tools.random-ip-generator.regions.CN') },
    { code: 'JP', name: t('tools.random-ip-generator.regions.JP') },
    { code: 'KR', name: t('tools.random-ip-generator.regions.KR') },
    { code: 'AU', name: t('tools.random-ip-generator.regions.AU') },
    { code: 'BR', name: t('tools.random-ip-generator.regions.BR') },
    { code: 'IN', name: t('tools.random-ip-generator.regions.IN') },
    { code: 'RU', name: t('tools.random-ip-generator.regions.RU') }
])

// 私有IP范围
const privateRanges = {
    ipv4: [
        { start: '10.0.0.0', end: '10.255.255.255' },
        { start: '172.16.0.0', end: '172.31.255.255' },
        { start: '192.168.0.0', end: '192.168.255.255' },
        { start: '127.0.0.0', end: '127.255.255.255' }
    ]
}

// 地区IP范围（简化）
const regionRanges = {
    US: { start: [3, 0, 0, 0], end: [15, 255, 255, 255] },
    EU: { start: [2, 0, 0, 0], end: [5, 255, 255, 255] },
    AS: { start: [1, 0, 0, 0], end: [1, 255, 255, 255] },
    CN: { start: [1, 0, 0, 0], end: [1, 127, 255, 255] },
    JP: { start: [1, 128, 0, 0], end: [1, 191, 255, 255] },
    KR: { start: [1, 192, 0, 0], end: [1, 223, 255, 255] },
    AU: { start: [1, 224, 0, 0], end: [1, 255, 255, 255] },
    BR: { start: [177, 0, 0, 0], end: [177, 255, 255, 255] },
    IN: { start: [14, 0, 0, 0], end: [14, 255, 255, 255] },
    RU: { start: [5, 128, 0, 0], end: [5, 255, 255, 255] }
}

// 地区名称映射
const regionNames = {
    US: 'United States',
    EU: 'Europe',
    AS: 'Asia',
    CN: 'China',
    JP: 'Japan',
    KR: 'South Korea',
    AU: 'Australia',
    BR: 'Brazil',
    IN: 'India',
    RU: 'Russia'
}

onMounted(() => {
    loadSample()
})

// 生成IPv4地址
function generateIPv4() {
    let ip
    
    if (config.ipType === 'private') {
        // 从私有IP范围中随机选择
        const range = privateRanges.ipv4[Math.floor(Math.random() * privateRanges.ipv4.length)]
        const startParts = range.start.split('.').map(Number)
        const endParts = range.end.split('.').map(Number)
        ip = [
            randomInRange(startParts[0], endParts[0]),
            randomInRange(startParts[1], endParts[1]),
            randomInRange(startParts[2], endParts[2]),
            randomInRange(startParts[3], endParts[3])
        ].join('.')
    } else if (config.region && regionRanges[config.region]) {
        // 从指定地区范围生成
        const range = regionRanges[config.region]
        ip = [
            randomInRange(range.start[0], range.end[0]),
            randomInRange(range.start[1], range.end[1]),
            randomInRange(range.start[2], range.end[2]),
            randomInRange(range.start[3], range.end[3])
        ].join('.')
    } else {
        // 生成随机公网IP
        do {
            ip = [
                Math.floor(Math.random() * 223) + 1,
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256)
            ].join('.')
        } while (isPrivateIP(ip))
    }
    
    return ip
}

// 生成IPv6地址
function generateIPv6() {
    const segments = []
    for (let i = 0; i < 8; i++) {
        segments.push(Math.floor(Math.random() * 65536).toString(16).padStart(4, '0'))
    }
    return segments.join(':')
}

// 检查是否为私有IP
function isPrivateIP(ip) {
    const parts = ip.split('.').map(Number)
    return (
        parts[0] === 10 ||
        (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
        (parts[0] === 192 && parts[1] === 168) ||
        parts[0] === 127
    )
}

// 范围内随机数
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// 生成端口号
function generatePort() {
    const commonPorts = [80, 443, 8080, 8443, 3000, 5000, 8000, 8888, 9000, 3306, 5432, 6379, 27017]
    return Math.random() > 0.5 
        ? commonPorts[Math.floor(Math.random() * commonPorts.length)]
        : Math.floor(Math.random() * 65535) + 1
}

// 生成子网掩码
function generateSubnet(version) {
    if (version === 'ipv4') {
        const cidr = Math.floor(Math.random() * 8) * 8 + 8 // 8, 16, 24, 32
        return `/${cidr}`
    } else {
        const cidr = Math.floor(Math.random() * 8) * 16 + 16 // 16, 32, 48, 64
        return `/${cidr}`
    }
}

// 生成地理信息
function generateGeo(region) {
    const cities = {
        US: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
        EU: ['London', 'Paris', 'Berlin', 'Rome', 'Madrid'],
        AS: ['Singapore', 'Hong Kong', 'Bangkok', 'Kuala Lumpur', 'Manila'],
        CN: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu'],
        JP: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya'],
        KR: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'],
        AU: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
        BR: ['Sao Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza'],
        IN: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'],
        RU: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan']
    }
    
    const selectedRegion = region || Object.keys(cities)[Math.floor(Math.random() * Object.keys(cities).length)]
    const cityList = cities[selectedRegion] || cities.US
    
    return {
        country: regionNames[selectedRegion] || 'Unknown',
        city: cityList[Math.floor(Math.random() * cityList.length)],
        isp: ['Amazon', 'Google', 'Microsoft', 'Cloudflare', 'DigitalOcean', 'Linode', 'Vultr'][Math.floor(Math.random() * 7)],
        timezone: `UTC${Math.random() > 0.5 ? '+' : '-'}${Math.floor(Math.random() * 12)}`
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 1000) {
        alert(t('tools.random-ip-generator.invalidQuantity'))
        return
    }
    
    isGenerating.value = true
    generatedData.value = []
    
    setTimeout(() => {
        for (let i = 0; i < config.quantity; i++) {
            const item = {}
            
            // 根据配置生成IP
            if (config.ipVersion === 'both') {
                item.version = Math.random() > 0.7 ? 'IPv6' : 'IPv4'
                item.ip = item.version === 'IPv6' ? generateIPv6() : generateIPv4()
            } else if (config.ipVersion === 'ipv6') {
                item.version = 'IPv6'
                item.ip = generateIPv6()
            } else {
                item.version = 'IPv4'
                item.ip = generateIPv4()
            }
            
            // 添加端口
            if (config.includePort) {
                item.port = generatePort()
            }
            
            // 添加子网
            if (config.includeSubnet) {
                item.subnet = generateSubnet(config.ipVersion === 'ipv6' ? 'ipv6' : 'ipv4')
            }
            
            // 添加地理信息
            if (config.includeGeo) {
                item.geo = generateGeo(config.region)
            }
            
            generatedData.value.push(item)
        }
        isGenerating.value = false
    }, 100)
}

// 加载示例
function loadSample() {
    config.ipVersion = 'ipv4'
    config.ipType = 'public'
    config.region = 'US'
    config.format = 'json'
    config.includePort = true
    config.includeSubnet = true
    config.includeGeo = true
    config.quantity = 5
    generateData()
}

// 清除数据
function clearData() {
    generatedData.value = []
}

// 纯文本输出
const plainOutput = computed(() => {
    return generatedData.value.map(item => {
        let output = item.ip
        if (item.port) output += ':' + item.port
        if (item.subnet) output += item.subnet
        return output
    }).join('\n')
})

// CSV输出
const csvOutput = computed(() => {
    const headers = [t('tools.random-ip-generator.csv.ip'), t('tools.random-ip-generator.csv.version')]
    if (config.includePort) headers.push(t('tools.random-ip-generator.csv.port'))
    if (config.includeSubnet) headers.push(t('tools.random-ip-generator.csv.subnet'))
    if (config.includeGeo) {
        headers.push(t('tools.random-ip-generator.csv.country'))
        headers.push(t('tools.random-ip-generator.csv.city'))
        headers.push(t('tools.random-ip-generator.csv.isp'))
    }
    
    const rows = generatedData.value.map(item => {
        const row = [item.ip, item.version]
        if (config.includePort) row.push(item.port || '')
        if (config.includeSubnet) row.push(item.subnet || '')
        if (config.includeGeo) {
            row.push(item.geo?.country || '')
            row.push(item.geo?.city || '')
            row.push(item.geo?.isp || '')
        }
        return row.join(',')
    })
    
    return [headers.join(','), ...rows].join('\n')
})

// 复制到剪贴板
function copyToClipboard() {
    const text = config.format === 'json' 
        ? JSON.stringify(generatedData.value, null, 2)
        : plainOutput.value
    navigator.clipboard.writeText(text)
    alert(t('tools.random-ip-generator.copySuccess'))
}

// 导出JSON
function exportJson() {
    const dataStr = JSON.stringify(generatedData.value, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'random-ips.json'
    link.click()
    URL.revokeObjectURL(url)
}

// 导出CSV
function exportCsv() {
    const blob = new Blob(['\ufeff' + csvOutput.value], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'random-ips.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 导出TXT
function exportTxt() {
    const blob = new Blob([plainOutput.value], { type: 'text/plain;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'random-ips.txt'
    link.click()
    URL.revokeObjectURL(url)
}
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

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }

    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>
