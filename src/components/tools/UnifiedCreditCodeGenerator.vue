<template>
    <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 生成设置 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.unified-credit-code-generator.settings') }}</h2>

                <!-- 注册机关类型 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{
                        $t('tools.unified-credit-code-generator.registrationAuthority') }}</label>
                    <div class="border rounded-md dark:border-gray-600 h-40 overflow-y-auto">
                        <div v-for="key in Object.keys(registrationAuthorityTypes)" :key="key" 
                             class="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                             :class="{'bg-blue-50 dark:bg-blue-900': registrationAuthority === key}"
                             @click="registrationAuthority = key">
                            <label class="flex items-center cursor-pointer w-full">
                                <input type="radio" :value="key" v-model="registrationAuthority" class="mr-2">
                                <span>{{ key }} - {{ registrationAuthorityTypes[key] }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 机构类型 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{
                        $t('tools.unified-credit-code-generator.entityType') }}</label>
                    <div class="border rounded-md dark:border-gray-600 h-40 overflow-y-auto">
                        <div v-for="key in Object.keys(entityTypes)" :key="key" 
                             class="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                             :class="{'bg-blue-50 dark:bg-blue-900': entityType === key}"
                             @click="entityType = key">
                            <label class="flex items-center cursor-pointer w-full">
                                <input type="radio" :value="key" v-model="entityType" class="mr-2">
                                <span>{{ key }} - {{ entityTypes[key] }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 行政区划代码 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{
                        $t('tools.unified-credit-code-generator.regionCode') }}</label>
                    <div class="border rounded-md dark:border-gray-600 h-40 overflow-y-auto">
                        <div class="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                             :class="{'bg-blue-50 dark:bg-blue-900': regionCode === 'random'}"
                             @click="regionCode = 'random'">
                            <label class="flex items-center cursor-pointer w-full">
                                <input type="radio" value="random" v-model="regionCode" class="mr-2">
                                <span>{{ $t('tools.unified-credit-code-generator.random') }}</span>
                            </label>
                        </div>
                        <div v-for="key in Object.keys(regionCodeMap)" :key="key" 
                             class="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                             :class="{'bg-blue-50 dark:bg-blue-900': regionCode === key}"
                             @click="regionCode = key">
                            <label class="flex items-center cursor-pointer w-full">
                                <input type="radio" :value="key" v-model="regionCode" class="mr-2">
                                <span>{{ key }} - {{ regionCodeMap[key] }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 数量设置 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.unified-credit-code-generator.quantity')
                        }}</label>
                    <input type="number" v-model.number="quantity" min="1" max="1000"
                        class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 生成按钮 -->
                <button @click="generateCodes"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                    {{ $t('tools.unified-credit-code-generator.generate') }}
                </button>
            </div>

            <!-- 生成结果 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.unified-credit-code-generator.results') }}</h2>

                <div v-if="generatedCodes.length === 0"
                    class="text-center text-gray-500 dark:text-gray-400 py-12 flex-grow">
                    {{ $t('tools.unified-credit-code-generator.noResults') }}
                </div>

                <div v-else class="flex-grow overflow-auto mb-4">
                    <div class="space-y-2">
                        <div v-for="(code, index) in generatedCodes" :key="index"
                            class="border dark:border-gray-700 rounded-md p-2 flex justify-between">
                            <div>
                                <span class="font-mono">
                                    <span class="text-purple-600 dark:text-purple-400">{{ code.substring(0, 1) }}</span>
                                    <span class="text-blue-600 dark:text-blue-400">{{ code.substring(1, 2) }}</span>
                                    <span class="text-red-600 dark:text-red-400">{{ code.substring(2, 8) }}</span>
                                    <span class="text-yellow-600 dark:text-yellow-400">{{ code.substring(8, 17)
                                        }}</span>
                                    <span class="text-green-600 dark:text-green-400">{{ code.substring(17) }}</span>
                                </span>
                            </div>
                            <button @click="copyToClipboard(code)"
                                class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                title="Copy">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 代码说明 -->
                <div v-if="generatedCodes.length > 0"
                    class="mb-4 text-xs text-gray-500 dark:text-gray-400 border-t pt-2">
                    <div class="flex flex-wrap gap-2 mt-1">
                        <span class="flex items-center"><span
                                class="w-3 h-3 inline-block bg-purple-600 dark:bg-purple-400 mr-1 rounded"></span>{{
                                    $t('tools.unified-credit-code-generator.registrationAuthorityLabel') }}</span>
                        <span class="flex items-center"><span
                                class="w-3 h-3 inline-block bg-blue-600 dark:bg-blue-400 mr-1 rounded"></span>{{
                                    $t('tools.unified-credit-code-generator.entityTypeLabel') }}</span>
                        <span class="flex items-center"><span
                                class="w-3 h-3 inline-block bg-red-600 dark:bg-red-400 mr-1 rounded"></span>{{
                                    $t('tools.unified-credit-code-generator.regionCodeLabel') }}</span>
                        <span class="flex items-center"><span
                                class="w-3 h-3 inline-block bg-yellow-600 dark:bg-yellow-400 mr-1 rounded"></span>{{
                                    $t('tools.unified-credit-code-generator.orgCodeLabel') }}</span>
                        <span class="flex items-center"><span
                                class="w-3 h-3 inline-block bg-green-600 dark:bg-green-400 mr-1 rounded"></span>{{
                                    $t('tools.unified-credit-code-generator.checksumLabel') }}</span>
                    </div>
                </div>

                <!-- 导出按钮 -->
                <div v-if="generatedCodes.length > 0" class="flex flex-wrap gap-2 mt-auto">
                    <button @click="copyAllToClipboard" 
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.unified-credit-code-generator.copyAll') }}
                    </button>
                    <button @click="clearResults" 
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.unified-credit-code-generator.clearResults') }}
                    </button>
                    <button @click="exportAs('txt')" 
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.unified-credit-code-generator.exportAsTxt') }}
                    </button>
                    <button @click="exportAs('csv')" 
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.unified-credit-code-generator.exportAsCsv') }}
                    </button>
                    <button @click="exportAs('excel')" 
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.unified-credit-code-generator.exportAsExcel') }}
                    </button>
                </div>
            </div>
        </div>

        <!-- 解释说明 -->
        <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-4">{{ $t('tools.unified-credit-code-generator.formatInfo') }}</h2>
            <div class="space-y-2">
                <p>{{ $t('tools.unified-credit-code-generator.formatDescription') }}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div class="flex">
                        <div
                            class="w-6 h-6 rounded bg-purple-600 dark:bg-purple-400 flex items-center justify-center text-white mr-2">
                            1</div>
                        <div>
                            <p class="font-medium">{{
                                $t('tools.unified-credit-code-generator.registrationAuthorityTitle') }}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                $t('tools.unified-credit-code-generator.registrationAuthorityDesc') }}</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div
                            class="w-6 h-6 rounded bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white mr-2">
                            1</div>
                        <div>
                            <p class="font-medium">{{ $t('tools.unified-credit-code-generator.entityTypeTitle') }}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                $t('tools.unified-credit-code-generator.entityTypeDesc') }}</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div
                            class="w-6 h-6 rounded bg-red-600 dark:bg-red-400 flex items-center justify-center text-white mr-2">
                            6</div>
                        <div>
                            <p class="font-medium">{{ $t('tools.unified-credit-code-generator.regionCodeTitle') }}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                $t('tools.unified-credit-code-generator.regionCodeDesc') }}</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div
                            class="w-6 h-6 rounded bg-yellow-600 dark:bg-yellow-400 flex items-center justify-center text-white mr-2">
                            9</div>
                        <div>
                            <p class="font-medium">{{ $t('tools.unified-credit-code-generator.orgCodeTitle') }}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                $t('tools.unified-credit-code-generator.orgCodeDesc') }}</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div
                            class="w-6 h-6 rounded bg-green-600 dark:bg-green-400 flex items-center justify-center text-white mr-2">
                            1</div>
                        <div>
                            <p class="font-medium">{{ $t('tools.unified-credit-code-generator.checksumTitle') }}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                $t('tools.unified-credit-code-generator.checksumDesc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <UnifiedCreditCodeGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import * as XLSX from 'xlsx'
import UnifiedCreditCodeGeneratorArticle from './UnifiedCreditCodeGeneratorArticle.vue'

const { t } = useI18n()

// 直接使用硬编码对象，然后遍历它们获取翻译值
const registrationAuthorityTypes = {
    '1': t('tools.unified-credit-code-generator.registrationAuthorityTypes.1'),
    '2': t('tools.unified-credit-code-generator.registrationAuthorityTypes.2'),
    '3': t('tools.unified-credit-code-generator.registrationAuthorityTypes.3'),
    '4': t('tools.unified-credit-code-generator.registrationAuthorityTypes.4'),
    '5': t('tools.unified-credit-code-generator.registrationAuthorityTypes.5'),
    '6': t('tools.unified-credit-code-generator.registrationAuthorityTypes.6'),
    '7': t('tools.unified-credit-code-generator.registrationAuthorityTypes.7'),
    '8': t('tools.unified-credit-code-generator.registrationAuthorityTypes.8'),
    '9': t('tools.unified-credit-code-generator.registrationAuthorityTypes.9'),
    'A': t('tools.unified-credit-code-generator.registrationAuthorityTypes.A'),
    'B': t('tools.unified-credit-code-generator.registrationAuthorityTypes.B'),
    'C': t('tools.unified-credit-code-generator.registrationAuthorityTypes.C'),
    'D': t('tools.unified-credit-code-generator.registrationAuthorityTypes.D'),
    'E': t('tools.unified-credit-code-generator.registrationAuthorityTypes.E'),
    'F': t('tools.unified-credit-code-generator.registrationAuthorityTypes.F'),
    'G': t('tools.unified-credit-code-generator.registrationAuthorityTypes.G'),
    'H': t('tools.unified-credit-code-generator.registrationAuthorityTypes.H'),
    'J': t('tools.unified-credit-code-generator.registrationAuthorityTypes.J'),
    'K': t('tools.unified-credit-code-generator.registrationAuthorityTypes.K'),
    'L': t('tools.unified-credit-code-generator.registrationAuthorityTypes.L'),
    'M': t('tools.unified-credit-code-generator.registrationAuthorityTypes.M'),
    'N': t('tools.unified-credit-code-generator.registrationAuthorityTypes.N'),
    'O': t('tools.unified-credit-code-generator.registrationAuthorityTypes.O'),
    'P': t('tools.unified-credit-code-generator.registrationAuthorityTypes.P'),
    'Q': t('tools.unified-credit-code-generator.registrationAuthorityTypes.Q'),
    'R': t('tools.unified-credit-code-generator.registrationAuthorityTypes.R'),
    'S': t('tools.unified-credit-code-generator.registrationAuthorityTypes.S'),
    'T': t('tools.unified-credit-code-generator.registrationAuthorityTypes.T'),
    'U': t('tools.unified-credit-code-generator.registrationAuthorityTypes.U'),
    'V': t('tools.unified-credit-code-generator.registrationAuthorityTypes.V'),
    'W': t('tools.unified-credit-code-generator.registrationAuthorityTypes.W'),
    'X': t('tools.unified-credit-code-generator.registrationAuthorityTypes.X')
}

const entityTypes = {
    '1': t('tools.unified-credit-code-generator.entityTypes.1'),
    '2': t('tools.unified-credit-code-generator.entityTypes.2'),
    '3': t('tools.unified-credit-code-generator.entityTypes.3'),
    '9': t('tools.unified-credit-code-generator.entityTypes.9')
}

// 行政区划代码太多，这里只列出常用的几个
const regionCodeMap = {
    '110000': t('tools.unified-credit-code-generator.regionCodes.110000'),
    '120000': t('tools.unified-credit-code-generator.regionCodes.120000'),
    '130000': t('tools.unified-credit-code-generator.regionCodes.130000'),
    '140000': t('tools.unified-credit-code-generator.regionCodes.140000'),
    '150000': t('tools.unified-credit-code-generator.regionCodes.150000'),
    '210000': t('tools.unified-credit-code-generator.regionCodes.210000'),
    '220000': t('tools.unified-credit-code-generator.regionCodes.220000'),
    '230000': t('tools.unified-credit-code-generator.regionCodes.230000'),
    '310000': t('tools.unified-credit-code-generator.regionCodes.310000'),
    '320000': t('tools.unified-credit-code-generator.regionCodes.320000'),
    '330000': t('tools.unified-credit-code-generator.regionCodes.330000'),
    '340000': t('tools.unified-credit-code-generator.regionCodes.340000'),
    '350000': t('tools.unified-credit-code-generator.regionCodes.350000'),
    '360000': t('tools.unified-credit-code-generator.regionCodes.360000'),
    '370000': t('tools.unified-credit-code-generator.regionCodes.370000'),
    '410000': t('tools.unified-credit-code-generator.regionCodes.410000'),
    '420000': t('tools.unified-credit-code-generator.regionCodes.420000'),
    '430000': t('tools.unified-credit-code-generator.regionCodes.430000'),
    '440000': t('tools.unified-credit-code-generator.regionCodes.440000'),
    '450000': t('tools.unified-credit-code-generator.regionCodes.450000'),
    '460000': t('tools.unified-credit-code-generator.regionCodes.460000'),
    '500000': t('tools.unified-credit-code-generator.regionCodes.500000'),
    '510000': t('tools.unified-credit-code-generator.regionCodes.510000'),
    '520000': t('tools.unified-credit-code-generator.regionCodes.520000'),
    '530000': t('tools.unified-credit-code-generator.regionCodes.530000'),
    '540000': t('tools.unified-credit-code-generator.regionCodes.540000'),
    '610000': t('tools.unified-credit-code-generator.regionCodes.610000'),
    '620000': t('tools.unified-credit-code-generator.regionCodes.620000'),
    '630000': t('tools.unified-credit-code-generator.regionCodes.630000'),
    '640000': t('tools.unified-credit-code-generator.regionCodes.640000'),
    '650000': t('tools.unified-credit-code-generator.regionCodes.650000'),
    '710000': t('tools.unified-credit-code-generator.regionCodes.710000'),
    '810000': t('tools.unified-credit-code-generator.regionCodes.810000'),
    '820000': t('tools.unified-credit-code-generator.regionCodes.820000')
}

// 获取区域代码键数组用于随机选择
const regionCodes = Object.keys(regionCodeMap)

// 响应式数据
const registrationAuthority = ref('8') // 默认工商
const entityType = ref('1') // 默认企业
const regionCode = ref('random') // 默认随机
const quantity = ref(5) // 默认生成5个
const generatedCodes = ref([])

// 生成统一社会信用代码
const generateCodes = () => {
    const codes = []
    for (let i = 0; i < quantity.value; i++) {
        codes.push(generateSingleCode())
    }
    generatedCodes.value = codes
}

// 生成单个统一社会信用代码
const generateSingleCode = () => {
    // 第1位：登记管理部门代码
    const regAuthority = registrationAuthority.value

    // 第2位：机构类别代码
    const entType = entityType.value

    // 第3-8位：行政区划代码
    let region
    if (regionCode.value === 'random') {
        // 随机选择一个行政区划代码
        const regionKeys = Object.keys(regionCodes)
        region = regionKeys[Math.floor(Math.random() * regionKeys.length)]
    } else {
        region = regionCode.value
    }

    // 第9-17位：组织机构代码（随机生成8位数字/字母 + 1位校验码）
    let orgCode = ''
    const characters = '0123456789ABCDEFGHJKLMNPQRTUWXY'
    for (let i = 0; i < 8; i++) {
        orgCode += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    // 计算组织机构代码校验位
    const weights = [3, 7, 9, 10, 5, 8, 4, 2]
    let sum = 0
    for (let i = 0; i < 8; i++) {
        const charValue = characters.indexOf(orgCode[i])
        sum += charValue * weights[i]
    }

    const remainder = sum % 11
    const checkChar = remainder === 0 ? '0' : remainder === 1 ? 'Y' : characters.charAt(11 - remainder)
    orgCode += checkChar

    // 前17位
    const code17 = regAuthority + entType + region + orgCode

    // 计算最后一位校验码（ISO 7064:1983, MOD 11-2）
    const c18 = calculateChecksum(code17)

    return code17 + c18
}

// 计算统一社会信用代码校验码
const calculateChecksum = (code) => {
    const weight = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
    const chars = '0123456789ABCDEFGHJKLMNPQRTUWXY'

    let sum = 0
    for (let i = 0; i < 17; i++) {
        const char = code[i]
        const value = chars.indexOf(char)
        sum += value * weight[i]
    }

    const mod = sum % 31
    const remainder = (31 - mod) % 31

    return remainder < 10 ? remainder.toString() : chars.charAt(remainder)
}

// 复制单个代码到剪贴板
const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
        alert(t('tools.unified-credit-code-generator.copiedToClipboard'))
    })
}

// 复制所有代码到剪贴板
const copyAllToClipboard = () => {
    const allCodes = generatedCodes.value.join('\n')
    navigator.clipboard.writeText(allCodes).then(() => {
        alert(t('tools.unified-credit-code-generator.allCopiedToClipboard'))
    })
}

// 导出功能
const exportAs = (format) => {
    if (generatedCodes.value.length === 0) return

    const fileName = `unified-credit-codes-${new Date().toISOString().slice(0, 10)}`

    if (format === 'txt') {
        // 导出为TXT
        const content = generatedCodes.value.join('\n')
        downloadFile(content, `${fileName}.txt`, 'text/plain')
    }
    else if (format === 'csv') {
        // 导出为CSV
        const content = generatedCodes.value.map(code => `"${code}"`).join('\n')
        downloadFile(content, `${fileName}.csv`, 'text/csv')
    }
    else if (format === 'excel') {
        // 导出为Excel
        const worksheet = XLSX.utils.aoa_to_sheet([
            [t('tools.unified-credit-code-generator.unifiedCreditCode')],
            ...generatedCodes.value.map(code => [code])
        ])
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Codes')
        XLSX.writeFile(workbook, `${fileName}.xlsx`)
    }
}

// 辅助下载函数
const downloadFile = (content, fileName, contentType) => {
    const a = document.createElement('a')
    const file = new Blob([content], { type: contentType })
    a.href = URL.createObjectURL(file)
    a.download = fileName
    a.click()
    URL.revokeObjectURL(a.href)
}

// 初始加载
onMounted(() => {
    generateCodes();
})

// 清除生成的结果
const clearResults = () => {
    generatedCodes.value = []
}
</script>