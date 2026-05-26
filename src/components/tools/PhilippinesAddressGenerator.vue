<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.philippines-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.philippines-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.philippines-address-generator.selectRegion') }}</label>
                            <select v-model="config.region" @change="onRegionChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.philippines-address-generator.allRegions') }}</option>
                                <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.philippines-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.region">
                                <option value="">{{ $t('tools.philippines-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city" :value="city">{{ city }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.philippines-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.philippines-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.philippines-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.philippines-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.philippines-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.philippines-address-generator.generationOptions') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.philippines-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.philippines-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.philippines-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.philippines-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.philippines-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.philippines-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.philippines-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.philippines-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.philippines-address-generator.generating') : $t('tools.philippines-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.philippines-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.philippines-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.philippines-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.philippines-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.philippines-address-generator.record') }} #{{ idx + 1 }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.philippines-address-generator.collapse') : $t('tools.philippines-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.philippines-address-generator.address') }}：</span>
                                    <span>{{ item.address.street }}, {{ item.address.barangay }}, {{ item.address.city }}, {{ item.address.region }} {{ item.address.zipCode }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.philippines-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.philippines-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.street') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.barangay') }}：</span> {{ item.address.barangay }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.city') }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.province') }}：</span> {{ item.address.province }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.region') }}：</span> {{ item.address.region }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.zipCode') }}：</span> {{ item.address.zipCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.cvvLabel') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.idCard" class="grid grid-cols-1 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.tinLabel') }}：</span> {{ item.idCard.tin }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.sssLabel') }}：</span> {{ item.idCard.sss }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.philhealthLabel') }}：</span> {{ item.idCard.philhealth }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.philsysLabel') }}：</span> {{ item.idCard.philsys }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.philippines-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.philippines-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.philippines-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.philippines-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.philippines-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.philippines-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.philippines-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <PhilippinesAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import PhilippinesAddressGeneratorArticle from './PhilippinesAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    region: '',
    city: '',
    addressType: 'residential',
    includeIdentity: true,
    includeContact: true,
    includeCreditCard: true,
    includeCareer: true,
    includeIdCard: true,
    includeFingerprint: true,
    quantity: 5
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 菲律宾17个行政区
const regions = [
    { code: 'NCR', name: 'National Capital Region (Metro Manila)' },
    { code: 'CAR', name: 'Cordillera Administrative Region' },
    { code: 'R1', name: 'Region I (Ilocos Region)' },
    { code: 'R2', name: 'Region II (Cagayan Valley)' },
    { code: 'R3', name: 'Region III (Central Luzon)' },
    { code: 'R4A', name: 'Region IV-A (CALABARZON)' },
    { code: 'R4B', name: 'Region IV-B (MIMAROPA)' },
    { code: 'R5', name: 'Region V (Bicol Region)' },
    { code: 'R6', name: 'Region VI (Western Visayas)' },
    { code: 'R7', name: 'Region VII (Central Visayas)' },
    { code: 'R8', name: 'Region VIII (Eastern Visayas)' },
    { code: 'R9', name: 'Region IX (Zamboanga Peninsula)' },
    { code: 'R10', name: 'Region X (Northern Mindanao)' },
    { code: 'R11', name: 'Region XI (Davao Region)' },
    { code: 'R12', name: 'Region XII (SOCCSKSARGEN)' },
    { code: 'R13', name: 'Region XIII (Caraga)' },
    { code: 'BARMM', name: 'Bangsamoro Autonomous Region in Muslim Mindanao' }
]

// 城市列表（按地区）
const cities = {
    'NCR': ['Manila', 'Quezon City', 'Makati', 'Pasig', 'Taguig', 'Caloocan', 'Parañaque', 'Las Piñas', 'Mandaluyong', 'Marikina', 'Muntinlupa', 'Pasay', 'Valenzuela'],
    'CAR': ['Baguio', 'Tabuk', 'La Trinidad'],
    'R1': ['Laoag', 'Vigan', 'San Fernando', 'Dagupan', 'Alaminos'],
    'R2': ['Tuguegarao', 'Ilagan', 'Cauayan', 'Santiago'],
    'R3': ['San Fernando', 'Angeles', 'Olongapo', 'Tarlac City', 'Cabanatuan', 'Malolos'],
    'R4A': ['Antipolo', 'Calamba', 'Batangas City', 'Lucena', 'Lipa', 'Santa Rosa', 'Tagaytay'],
    'R4B': ['Calapan', 'Puerto Princesa', 'Romblon'],
    'R5': ['Legazpi', 'Naga', 'Sorsogon City', 'Iriga', 'Masbate City'],
    'R6': ['Iloilo City', 'Bacolod', 'Roxas City', 'Kalibo'],
    'R7': ['Cebu City', 'Mandaue', 'Lapu-Lapu', 'Tagbilaran', 'Dumaguete'],
    'R8': ['Tacloban', 'Ormoc', 'Calbayog', 'Catbalogan'],
    'R9': ['Zamboanga City', 'Pagadian', 'Dipolog', 'Dapitan'],
    'R10': ['Cagayan de Oro', 'Iligan', 'Malaybalay', 'Valencia'],
    'R11': ['Davao City', 'Tagum', 'Mati', 'Digos', 'Panabo'],
    'R12': ['General Santos', 'Koronadal', 'Cotabato City', 'Kidapawan', 'Tacurong'],
    'R13': ['Butuan', 'Surigao City', 'Tandag', 'Bislig', 'Cabadbaran'],
    'BARMM': ['Cotabato City', 'Marawi', 'Jolo', 'Lamitan']
}

// 街区名称（barangay）
const barangays = ['San Antonio', 'San Jose', 'Santa Cruz', 'Bagong Silang', 'Poblacion', 'Bagumbayan', 'Concepcion', 'Maligaya', 'San Isidro', 'Santo Niño', 'San Roque', 'Santa Maria', 'Bagong Pag-asa', 'San Pedro', 'Pinagkaisahan']

// 邮编范围（按地区）
const zipRanges = {
    'NCR': [1000, 1799],
    'CAR': [2600, 2625],
    'R1': [2400, 2729],
    'R2': [3300, 3520],
    'R3': [2000, 2317],
    'R4A': [1870, 4334],
    'R4B': [3700, 5311],
    'R5': [4400, 4707],
    'R6': [5000, 5727],
    'R7': [6000, 6342],
    'R8': [6400, 6814],
    'R9': [7000, 7322],
    'R10': [8700, 9217],
    'R11': [8000, 8118],
    'R12': [9400, 9810],
    'R13': [8600, 8616],
    'BARMM': [9600, 9800]
}

onMounted(() => {
    loadSample()
})

const filteredCities = computed(() => {
    if (!config.region) return []
    return cities[config.region] || []
})

// 生成菲律宾邮编
function generateZipCode(regionCode) {
    const range = zipRanges[regionCode] || [1000, 9999]
    const code = faker.number.int({ min: range[0], max: range[1] })
    return code.toString().padStart(4, '0')
}

// 生成菲律宾电话
function generatePhilippinePhone(type = 'mobile') {
    if (type === 'mobile') {
        const prefixes = ['905', '906', '907', '908', '909', '910', '912', '915', '916', '917', '918', '919', '920', '921', '922', '923', '925', '926', '927', '928', '929', '930', '935', '936', '937', '938', '939', '945', '946', '947', '948', '949', '955', '956', '961', '963', '965', '966', '967', '968', '969', '975', '977', '978', '979', '989', '992', '994', '995', '996', '997', '998', '999']
        const prefix = faker.helpers.arrayElement(prefixes)
        return `+63 ${prefix} ${faker.string.numeric(3)} ${faker.string.numeric(4)}`
    }
    // 座机
    const areaCodes = ['02', '32', '33', '34', '35', '36', '38', '42', '43', '44', '45', '46', '47', '48', '49', '52', '53', '54', '55', '56', '62', '63', '64', '65', '68', '74', '75', '77', '78', '82', '83', '84', '85', '86', '87', '88']
    const area = faker.helpers.arrayElement(areaCodes)
    return `+63 ${area} ${faker.string.numeric(3)} ${faker.string.numeric(4)}`
}

// Luhn算法验证
function luhnCheck(cardNumber) {
    let sum = 0
    let isEven = false
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i])
        if (isEven) {
            digit *= 2
            if (digit > 9) digit -= 9
        }
        sum += digit
        isEven = !isEven
    }
    return sum % 10 === 0
}

// 生成Luhn算法信用卡号
function generateCreditCardNumber(type = 'visa') {
    const prefixes = {
        visa: ['4'],
        mastercard: ['51', '52', '53', '54', '55'],
        amex: ['34', '37'],
        jcb: ['3528', '3529', '3530', '3531', '3532', '3533', '3534', '3535', '3536', '3537', '3538', '3539']
    }
    const prefix = faker.helpers.arrayElement(prefixes[type] || prefixes.visa)
    let number = prefix
    while (number.length < 15) {
        number += faker.string.numeric(1)
    }
    let sum = 0
    let isEven = false
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i])
        if (isEven) {
            digit *= 2
            if (digit > 9) digit -= 9
        }
        sum += digit
        isEven = !isEven
    }
    const checkDigit = (10 - (sum % 10)) % 10
    number += checkDigit
    return number
}

// 生成菲律宾身份证号
function generateIdCard() {
    // TIN: 12位（XXX-XXX-XXX-XXX）
    const tin = `${faker.string.numeric(3)}-${faker.string.numeric(3)}-${faker.string.numeric(3)}-${faker.string.numeric(3)}`
    // SSS: 10位（XX-XXXXXXX-X）
    const sss = `${faker.string.numeric(2)}-${faker.string.numeric(7)}-${faker.string.numeric(1)}`
    // PhilHealth: 12位（XX-XXXXXXXXX-X）
    const philhealth = `${faker.string.numeric(2)}-${faker.string.numeric(9)}-${faker.string.numeric(1)}`
    // PhilSys（PSN）: 12位（XXXX-XXXX-XXXX）
    const philsys = `${faker.string.numeric(4)}-${faker.string.numeric(4)}-${faker.string.numeric(4)}`
    return { tin, sss, philhealth, philsys }
}

// 生成地址
function generateAddress() {
    const regionCode = config.region || faker.helpers.arrayElement(regions.map(r => r.code))
    const regionObj = regions.find(r => r.code === regionCode)
    const regionName = regionObj ? regionObj.name : regionCode
    const cityName = config.city || faker.helpers.arrayElement(cities[regionCode] || ['Manila'])
    const barangay = `Barangay ${faker.helpers.arrayElement(barangays)}`
    const zipCode = generateZipCode(regionCode)

    let street
    switch (config.addressType) {
        case 'residential':
            street = `${faker.number.int({ min: 1, max: 999 })} ${faker.helpers.arrayElement(['Rizal', 'Mabini', 'Bonifacio', 'Quezon', 'Aguinaldo', 'Luna', 'Del Pilar', 'Magsaysay'])} Street`
            break
        case 'commercial':
            street = `${faker.number.int({ min: 100, max: 9999 })} ${faker.helpers.arrayElement(['Ayala', 'Roxas', 'Taft', 'EDSA', 'Ortigas', 'Shaw'])} Avenue, Unit ${faker.number.int({ min: 100, max: 999 })}`
            break
        case 'virtual':
            street = `PO Box ${faker.number.int({ min: 100, max: 9999 })}`
            break
        case 'campus':
            street = `${faker.helpers.arrayElement(['University of the Philippines', 'Ateneo de Manila', 'De La Salle', 'University of Santo Tomas', 'Far Eastern University'])} ${faker.helpers.arrayElement(['Campus', 'Dormitory', 'Hall'])} ${faker.number.int({ min: 1, max: 50 })}`
            break
        default:
            street = `${faker.number.int({ min: 1, max: 999 })} Rizal Street`
    }

    return {
        street,
        barangay,
        city: cityName,
        province: cityName,
        region: regionName,
        zipCode
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    const filipinoFirstNamesMale = ['Juan', 'Jose', 'Antonio', 'Pedro', 'Carlos', 'Manuel', 'Miguel', 'Francisco', 'Rafael', 'Ricardo', 'Marco', 'Andres', 'Daniel', 'Mark', 'John', 'Christian', 'Joshua', 'Patrick']
    const filipinoFirstNamesFemale = ['Maria', 'Ana', 'Rosa', 'Carmen', 'Cristina', 'Luz', 'Teresa', 'Josephine', 'Angela', 'Catherine', 'Joanna', 'Michelle', 'Angelica', 'Bianca', 'Sofia', 'Andrea']
    const filipinoLastNames = ['Santos', 'Reyes', 'Cruz', 'Bautista', 'Gonzales', 'Ramos', 'Aquino', 'Mendoza', 'Diaz', 'Garcia', 'Castillo', 'Flores', 'Hernandez', 'Torres', 'Villanueva', 'De Leon', 'Tan', 'Lim', 'Sy', 'Co']
    const firstName = gender === 'male'
        ? faker.helpers.arrayElement(filipinoFirstNamesMale)
        : faker.helpers.arrayElement(filipinoFirstNamesFemale)
    const lastName = faker.helpers.arrayElement(filipinoLastNames)
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()

    const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
    const month = birthDate.getMonth()
    const day = birthDate.getDate()
    let zodiac = ''
    if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) zodiac = zodiacSigns[0]
    else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) zodiac = zodiacSigns[1]
    else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) zodiac = zodiacSigns[2]
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) zodiac = zodiacSigns[3]
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) zodiac = zodiacSigns[4]
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiac = zodiacSigns[5]
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiac = zodiacSigns[6]
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) zodiac = zodiacSigns[7]
    else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) zodiac = zodiacSigns[8]
    else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) zodiac = zodiacSigns[9]
    else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) zodiac = zodiacSigns[10]
    else zodiac = zodiacSigns[11]

    return {
        fullName: `${firstName} ${lastName}`,
        firstName,
        lastName,
        gender: gender === 'male' ? t('tools.philippines-address-generator.genderMale') : t('tools.philippines-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('en-PH'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 195 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 110 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    const phone = generatePhilippinePhone(phoneType)
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.philippines-address-generator.phoneTypeMobile') : t('tools.philippines-address-generator.phoneTypeLandline'),
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

// 生成信用卡
function generateCreditCard() {
    const types = ['visa', 'mastercard', 'amex', 'jcb']
    const type = faker.helpers.arrayElement(types)
    const number = generateCreditCardNumber(type)
    const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
    const expiryYear = (new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })).toString().slice(-2)

    return {
        type: type.toUpperCase(),
        number: number.replace(/(\d{4})/g, '$1 ').trim(),
        expiry: `${expiryMonth}/${expiryYear}`,
        cvv: faker.string.numeric(3),
        bankBin: number.substring(0, 6)
    }
}

// 生成职业
function generateCareer() {
    const jobTitles = ['Software Engineer', 'Marketing Manager', 'Call Center Agent', 'Teacher', 'Nurse', 'Accountant', 'Designer', 'BPO Consultant', 'OFW', 'Government Employee']
    const industries = ['Technology', 'BPO', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Real Estate', 'Hospitality', 'Mining']
    const companySizes = ['Small (1-50)', 'Medium (51-200)', 'Large (201-1000)', 'Enterprise (1000+)']
    const employmentStatuses = ['full-time', 'part-time']

    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `₱${faker.number.int({ min: 15000, max: 200000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time'
            ? t('tools.philippines-address-generator.employmentFullTime')
            : t('tools.philippines-address-generator.employmentPartTime')
    }
}

// 生成数字指纹
function generateFingerprint() {
    const osTypes = ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
    const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera']
    const os = faker.helpers.arrayElement(osTypes)
    const osVersions = {
        'Windows': ['10', '11'],
        'macOS': ['13.0', '14.0', '14.1'],
        'Linux': ['Ubuntu 22.04', 'Ubuntu 20.04', 'Debian 12'],
        'iOS': ['16.0', '17.0', '17.1'],
        'Android': ['13', '14']
    }

    return {
        os,
        osVersion: faker.helpers.arrayElement(osVersions[os] || ['Unknown']),
        browser: faker.helpers.arrayElement(browsers),
        userAgent: faker.internet.userAgent(),
        screenResolution: `${faker.number.int({ min: 1280, max: 3840 })}x${faker.number.int({ min: 720, max: 2160 })}`,
        timezone: 'Asia/Manila',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.philippines-address-generator.invalidQuantity'))
        return
    }

    isGenerating.value = true
    generatedData.value = []
    expandedItems.value = {}

    setTimeout(() => {
        for (let i = 0; i < config.quantity; i++) {
            const item = {}

            item.address = generateAddress()

            if (config.includeIdentity) {
                item.identity = generateIdentity()
            }

            if (config.includeContact) {
                item.contact = generateContact()
            }

            if (config.includeCreditCard) {
                item.creditCard = generateCreditCard()
            }

            if (config.includeCareer) {
                item.career = generateCareer()
            }

            if (config.includeIdCard) {
                item.idCard = generateIdCard()
            }

            if (config.includeFingerprint) {
                item.fingerprint = generateFingerprint()
            }

            generatedData.value.push(item)
            expandedItems.value[i] = true
        }
        isGenerating.value = false
    }, 100)
}

// 加载示例
function loadSample() {
    config.region = 'NCR'
    config.city = 'Manila'
    config.addressType = 'residential'
    config.includeIdentity = true
    config.includeContact = true
    config.includeCreditCard = true
    config.includeCareer = true
    config.includeIdCard = true
    config.includeFingerprint = true
    config.quantity = 3
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

// 复制项目
function copyItem(item) {
    navigator.clipboard.writeText(JSON.stringify(item, null, 2))
    toastRef.value.show(t('tools.philippines-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `philippines-address-${idx + 1}.json`
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
    link.download = 'philippines-addresses.json'
    link.click()
    URL.revokeObjectURL(url)
}

// 导出CSV
function exportCsv() {
    if (generatedData.value.length === 0) return

    const rows = []

    generatedData.value.forEach((item) => {
        const row = {}
        if (item.address) {
            row['Street'] = item.address.street
            row['Barangay'] = item.address.barangay
            row['City'] = item.address.city
            row['Region'] = item.address.region
            row['Zip Code'] = item.address.zipCode
        }
        if (item.identity) {
            row['Full Name'] = item.identity.fullName
            row['Gender'] = item.identity.gender
            row['Age'] = item.identity.age
            row['Birth Date'] = item.identity.birthDate
        }
        if (item.contact) {
            row['Phone'] = item.contact.phone
            row['Email'] = item.contact.email
        }
        if (item.creditCard) {
            row['Card Type'] = item.creditCard.type
            row['Card Number'] = item.creditCard.number
        }
        if (item.idCard) {
            row['TIN'] = item.idCard.tin
            row['SSS'] = item.idCard.sss
            row['PhilHealth'] = item.idCard.philhealth
            row['PhilSys'] = item.idCard.philsys
        }
        rows.push(row)
    })

    const allHeaders = new Set()
    rows.forEach(row => Object.keys(row).forEach(key => allHeaders.add(key)))
    const headerArray = Array.from(allHeaders)

    let csv = headerArray.join(',') + '\n'
    rows.forEach(row => {
        const values = headerArray.map(header => {
            const value = row[header] || ''
            return `"${value.toString().replace(/"/g, '""')}"`
        })
        csv += values.join(',') + '\n'
    })

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'philippines-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 地区改变
function onRegionChange() {
    config.city = ''
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
