<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.mac-address-generator.inputTitle') }}</h2>

                <!-- MAC地址格式 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mac-address-generator.formatTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="colon" />
                            <span>{{ $t('tools.mac-address-generator.formatColon') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="hyphen" />
                            <span>{{ $t('tools.mac-address-generator.formatHyphen') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="dot" />
                            <span>{{ $t('tools.mac-address-generator.formatDot') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.format" value="none" />
                            <span>{{ $t('tools.mac-address-generator.formatNone') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 大小写 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mac-address-generator.caseTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.upperCase" :value="true" />
                            <span>{{ $t('tools.mac-address-generator.caseUpper') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.upperCase" :value="false" />
                            <span>{{ $t('tools.mac-address-generator.caseLower') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mac-address-generator.typeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.unicast" />
                            <span>{{ $t('tools.mac-address-generator.typeUnicast') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.multicast" />
                            <span>{{ $t('tools.mac-address-generator.typeMulticast') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.global" />
                            <span>{{ $t('tools.mac-address-generator.typeGlobal') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.local" />
                            <span>{{ $t('tools.mac-address-generator.typeLocal') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 厂商前缀 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mac-address-generator.vendorTitle') }}</h3>
                    <div class="space-y-3">
                        <select v-model="config.vendor"
                            class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            <option value="">{{ $t('tools.mac-address-generator.allVendors') }}</option>
                            <option v-for="(name, key) in vendorOuis" :key="key" :value="key">
                                {{ $t(`tools.mac-address-generator.vendors.${key}`) }}
                            </option>
                        </select>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.mac-address-generator.customPrefix') }}</label>
                            <input type="text" v-model="config.customPrefix"
                                :placeholder="$t('tools.mac-address-generator.customPrefixPlaceholder')"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.mac-address-generator.vendorHint') }}</p>
                    </div>
                </div>

                <!-- 生成选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mac-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeVendorName" />
                            <span>{{ $t('tools.mac-address-generator.includeVendorName') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeAddressType" />
                            <span>{{ $t('tools.mac-address-generator.includeAddressType') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeTimestamp" />
                            <span>{{ $t('tools.mac-address-generator.includeTimestamp') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.mac-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="1000"
                        :placeholder="$t('tools.mac-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.mac-address-generator.generating') : $t('tools.mac-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.mac-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.mac-address-generator.outputTitle') }}</h2>
                    <div class="flex gap-2">
                        <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="copyAll">
                            {{ $t('tools.mac-address-generator.copyAllBtn') }}
                        </button>
                        <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                            {{ $t('tools.mac-address-generator.clearAll') }}
                        </button>
                    </div>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.mac-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.mac-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.mac-address-generator.collapse') : $t('tools.mac-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div class="flex items-center gap-2">
                                    <span class="font-medium">{{ $t('tools.mac-address-generator.macAddressLabel') }}：</span>
                                    <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded font-mono text-base">{{ item.macAddress }}</code>
                                    <button class="text-blue-600 hover:text-blue-700 text-xs" @click="copyToClipboard(item.macAddress)">
                                        {{ $t('tools.mac-address-generator.copyBtn') }}
                                    </button>
                                </div>
                                <div v-if="item.vendorName">
                                    <span class="font-medium">{{ $t('tools.mac-address-generator.vendorLabel') }}：</span>
                                    <span>{{ item.vendorName }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.vendorName" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mac-address-generator.vendorLabel') }}：</span> {{ item.vendorName }}</div>
                                </div>
                                <div v-if="item.addressType" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mac-address-generator.typeLabel') }}：</span> {{ item.addressType }}</div>
                                </div>
                                <div v-if="item.format" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mac-address-generator.formatLabel') }}：</span> {{ item.format }}</div>
                                </div>
                                <div v-if="item.timestamp" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mac-address-generator.timestampLabel') }}：</span> {{ item.timestamp }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.mac-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="downloadItem(item, idx)">
                                    {{ $t('tools.mac-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.mac-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.mac-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.mac-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.mac-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <MacAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import MacAddressGeneratorArticle from './MacAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    format: 'colon',
    upperCase: true,
    unicast: true,
    multicast: false,
    global: true,
    local: false,
    vendor: '',
    customPrefix: '',
    includeVendorName: true,
    includeAddressType: true,
    includeTimestamp: false,
    quantity: 10
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 常见厂商OUI前缀
const vendorOuis = {
    apple: '00:03:93',
    cisco: '00:00:0C',
    intel: '00:1B:21',
    samsung: '00:12:FB',
    huawei: '00:E0:FC',
    dell: '00:01:C8',
    hp: '00:01:E6',
    lenovo: '00:1F:29',
    microsoft: '00:03:FF',
    google: '00:1A:11',
    amazon: '00:15:99',
    facebook: '00:1D:E2',
    netgear: '00:09:5B',
    tpLink: '00:0E:2E',
    dLink: '00:05:5D',
    asus: '00:0E:A6',
    xiaomi: '00:0E:8F',
    oppo: '00:1B:B5',
    vivo: '00:1B:35',
    sony: '00:02:5B',
    nintendo: '00:09:BF',
    lg: '00:1C:62',
    nokia: '00:1F:5B',
    ericsson: '00:1D:40',
    qualcomm: '00:03:7F',
    broadcom: '00:10:18',
    realtek: '00:E0:4C',
    nvidia: '00:04:0B',
    vmware: '00:05:69',
    raspberry: 'B8:27:EB'
}

// 格式名称
const formatNames = {
    colon: '冒号分隔 (XX:XX:XX:XX:XX:XX)',
    hyphen: '连字符分隔 (XX-XX-XX-XX-XX-XX)',
    dot: '点分隔 (XXXX.XXXX.XXXX)',
    none: '无分隔符 (XXXXXXXXXXXX)'
}

onMounted(() => {
    loadSample()
})

// 生成随机字节
function randomByte() {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
}

// 解析OUI前缀
function parseOuiPrefix(prefix) {
    if (!prefix) return null
    // 移除所有分隔符并转小写
    const clean = prefix.replace(/[:\-\.]/g, '').toLowerCase()
    if (clean.length !== 6) return null
    // 验证是否为有效的十六进制
    if (!/^[0-9a-f]{6}$/i.test(clean)) return null
    return [clean.substring(0, 2), clean.substring(2, 4), clean.substring(4, 6)]
}

// 生成MAC地址
function generateMacAddress() {
    let bytes = []
    
    // 获取OUI前缀
    let ouiBytes = null
    if (config.customPrefix) {
        ouiBytes = parseOuiPrefix(config.customPrefix)
        if (!ouiBytes) {
            toastRef.value.show(t('tools.mac-address-generator.invalidPrefix'))
            return null
        }
    } else if (config.vendor && vendorOuis[config.vendor]) {
        ouiBytes = parseOuiPrefix(vendorOuis[config.vendor])
    }
    
    if (ouiBytes) {
        bytes = ouiBytes.map(b => parseInt(b, 16))
    } else {
        // 生成随机前3个字节
        bytes = [parseInt(randomByte(), 16), parseInt(randomByte(), 16), parseInt(randomByte(), 16)]
    }
    
    // 生成后3个字节
    bytes.push(parseInt(randomByte(), 16))
    bytes.push(parseInt(randomByte(), 16))
    bytes.push(parseInt(randomByte(), 16))
    
    // 设置单播/多播位 (第一个字节的最低位)
    // 0 = 单播, 1 = 多播
    if (config.unicast && !config.multicast) {
        bytes[0] &= 0xFE // 设置最低位为0
    } else if (config.multicast && !config.unicast) {
        bytes[0] |= 0x01 // 设置最低位为1
    }
    // 如果两个都选或都不选，保持随机
    
    // 设置全局/本地位 (第一个字节的倒数第二位)
    // 0 = 全局(UAA), 1 = 本地(LAA)
    if (config.global && !config.local) {
        bytes[0] &= 0xFD // 设置倒数第二位为0
    } else if (config.local && !config.global) {
        bytes[0] |= 0x02 // 设置倒数第二位为1
    }
    
    // 格式化
    const hexBytes = bytes.map(b => b.toString(16).padStart(2, '0'))
    const caseBytes = config.upperCase ? hexBytes.map(b => b.toUpperCase()) : hexBytes
    
    let formattedMac = ''
    switch (config.format) {
        case 'colon':
            formattedMac = caseBytes.join(':')
            break
        case 'hyphen':
            formattedMac = caseBytes.join('-')
            break
        case 'dot':
            formattedMac = caseBytes[0] + caseBytes[1] + '.' + caseBytes[2] + caseBytes[3] + '.' + caseBytes[4] + caseBytes[5]
            break
        case 'none':
            formattedMac = caseBytes.join('')
            break
        default:
            formattedMac = caseBytes.join(':')
    }
    
    return formattedMac
}

// 获取地址类型描述
function getAddressTypeDescription(macAddress) {
    const types = []
    const firstByte = parseInt(macAddress.replace(/[:\-\.]/g, '').substring(0, 2), 16)
    
    // 检查单播/多播
    if (firstByte & 0x01) {
        types.push(t('tools.mac-address-generator.multicastDesc'))
    } else {
        types.push(t('tools.mac-address-generator.unicastDesc'))
    }
    
    // 检查全局/本地
    if (firstByte & 0x02) {
        types.push(t('tools.mac-address-generator.localDesc'))
    } else {
        types.push(t('tools.mac-address-generator.globalDesc'))
    }
    
    return types.join('；')
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 1000) {
        toastRef.value.show(t('tools.mac-address-generator.invalidQuantity'))
        return
    }
    
    // 检查自定义前缀格式
    if (config.customPrefix) {
        const parsed = parseOuiPrefix(config.customPrefix)
        if (!parsed) {
            toastRef.value.show(t('tools.mac-address-generator.invalidPrefix'))
            return
        }
    }
    
    isGenerating.value = true
    generatedData.value = []
    expandedItems.value = {}
    
    setTimeout(() => {
        for (let i = 0; i < config.quantity; i++) {
            const macAddress = generateMacAddress()
            if (!macAddress) continue
            
            const item = {
                macAddress,
                format: formatNames[config.format]
            }
            
            if (config.includeVendorName && config.vendor) {
                item.vendorName = t(`tools.mac-address-generator.vendors.${config.vendor}`)
            } else if (config.includeVendorName && !config.vendor && !config.customPrefix) {
                item.vendorName = t('tools.mac-address-generator.allVendors')
            }
            
            if (config.includeAddressType) {
                item.addressType = getAddressTypeDescription(macAddress)
            }
            
            if (config.includeTimestamp) {
                item.timestamp = new Date().toISOString()
            }
            
            generatedData.value.push(item)
            expandedItems.value[i] = false
        }
        isGenerating.value = false
    }, 100)
}

// 加载示例
function loadSample() {
    config.format = 'colon'
    config.upperCase = true
    config.unicast = true
    config.multicast = false
    config.global = true
    config.local = false
    config.vendor = 'apple'
    config.customPrefix = ''
    config.includeVendorName = true
    config.includeAddressType = true
    config.includeTimestamp = true
    config.quantity = 5
    generateData()
}

// 清除数据
function clearData() {
    generatedData.value = []
    expandedItems.value = {}
}

// 切换展开
function toggleExpand(idx) {
    expandedItems.value[idx] = !expandedItems.value[idx]
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    // 简单提示，不使用alert
}

// 复制项目
function copyItem(item) {
    navigator.clipboard.writeText(JSON.stringify(item, null, 2))
    toastRef.value.show(t('tools.mac-address-generator.copySuccess'))
}

// 复制全部MAC地址
function copyAll() {
    const allMacs = generatedData.value.map(item => item.macAddress).join('\n')
    navigator.clipboard.writeText(allMacs)
    toastRef.value.show(t('tools.mac-address-generator.copySuccess'))
}

// 下载项目
function downloadItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `mac-address-${idx + 1}.json`
    link.click()
    URL.revokeObjectURL(url)
}

// 导出JSON
function exportJson() {
    const dataStr = JSON.stringify(generatedData.value, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'mac-addresses.json'
    link.click()
    URL.revokeObjectURL(url)
}

// 导出CSV
function exportCsv() {
    if (generatedData.value.length === 0) return
    
    const headers = [
        t('tools.mac-address-generator.csv.macAddress'),
        t('tools.mac-address-generator.csv.vendor'),
        t('tools.mac-address-generator.csv.type'),
        t('tools.mac-address-generator.csv.format'),
        t('tools.mac-address-generator.csv.timestamp')
    ]
    
    let csv = headers.join(',') + '\n'
    
    generatedData.value.forEach(item => {
        const row = [
            item.macAddress,
            item.vendorName || '',
            item.addressType || '',
            item.format || '',
            item.timestamp || ''
        ]
        csv += row.map(val => `"${val.toString().replace(/"/g, '""')}"`).join(',') + '\n'
    })
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'mac-addresses.csv'
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
