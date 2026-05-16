<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.kazakhstan-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.kazakhstan-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.kazakhstan-address-generator.selectRegion') }}</label>
                            <select v-model="config.region" @change="onRegionChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.kazakhstan-address-generator.allRegions') }}</option>
                                <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.kazakhstan-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.region">
                                <option value="">{{ $t('tools.kazakhstan-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city.key" :value="city.name">{{ city.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.kazakhstan-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.kazakhstan-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.kazakhstan-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.kazakhstan-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.kazakhstan-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.kazakhstan-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.kazakhstan-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.kazakhstan-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.kazakhstan-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.kazakhstan-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.kazakhstan-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.kazakhstan-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.kazakhstan-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.kazakhstan-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.kazakhstan-address-generator.generating') : $t('tools.kazakhstan-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.kazakhstan-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.kazakhstan-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.kazakhstan-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.kazakhstan-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.kazakhstan-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.kazakhstan-address-generator.collapse') : $t('tools.kazakhstan-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.kazakhstan-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.kazakhstan-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.kazakhstan-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.floorLabel') }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.regionLabel') }}：</span> {{ item.address.region }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.postalCodeLabel') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.kazakhstan-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.kazakhstan-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.kazakhstan-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.kazakhstan-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.kazakhstan-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.kazakhstan-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.kazakhstan-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <KazakhstanAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import KazakhstanAddressGeneratorArticle from './KazakhstanAddressGeneratorArticle.vue'

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
    includeCreditCard: false,
    includeCareer: false,
    includeIdCard: false,
    includeFingerprint: false,
    quantity: 5
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 哈萨克斯坦17个州和3个直辖市
const regions = computed(() => [
    { code: 'NUR', name: t('tools.kazakhstan-address-generator.regions.NUR') },
    { code: 'ALA', name: t('tools.kazakhstan-address-generator.regions.ALA') },
    { code: 'SHY', name: t('tools.kazakhstan-address-generator.regions.SHY') },
    { code: 'AKM', name: t('tools.kazakhstan-address-generator.regions.AKM') },
    { code: 'AKT', name: t('tools.kazakhstan-address-generator.regions.AKT') },
    { code: 'ATY', name: t('tools.kazakhstan-address-generator.regions.ATY') },
    { code: 'MAN', name: t('tools.kazakhstan-address-generator.regions.MAN') },
    { code: 'PAV', name: t('tools.kazakhstan-address-generator.regions.PAV') },
    { code: 'SKZ', name: t('tools.kazakhstan-address-generator.regions.SKZ') },
    { code: 'KUS', name: t('tools.kazakhstan-address-generator.regions.KUS') },
    { code: 'KAR', name: t('tools.kazakhstan-address-generator.regions.KAR') },
    { code: 'ZAP', name: t('tools.kazakhstan-address-generator.regions.ZAP') },
    { code: 'MNG', name: t('tools.kazakhstan-address-generator.regions.MNG') },
    { code: 'TUR', name: t('tools.kazakhstan-address-generator.regions.TUR') },
    { code: 'YUZ', name: t('tools.kazakhstan-address-generator.regions.YUZ') },
    { code: 'VOS', name: t('tools.kazakhstan-address-generator.regions.VOS') },
    { code: 'ZHE', name: t('tools.kazakhstan-address-generator.regions.ZHE') }
])

// 城市列表（主要城市）
const getCitiesForRegion = (regionCode) => {
    const cityMap = {
        'NUR': ['nursultan'],
        'ALA': ['almaty'],
        'SHY': ['shymkent'],
        'AKM': ['akmola', 'kokshetau'],
        'AKT': ['aktobe', 'Aktobe'],
        'ATY': ['atyrau', 'Atyrau'],
        'MAN': ['aktau', 'Aktau'],
        'PAV': ['pavlodar', 'Pavlodar'],
        'SKZ': ['turkestan', 'Turkestan'],
        'KUS': ['kostanay', 'Kostanay'],
        'KAR': ['karaganda', 'Karaganda'],
        'ZAP': ['uralsk', 'Uralsk'],
        'MNG': ['taraz', 'Taraz'],
        'TUR': ['taldykorgan', 'Taldykorgan'],
        'YUZ': ['kyzylorda', 'Kyzylorda'],
        'VOS': ['ust-kamenogorsk', 'Ust-Kamenogorsk'],
        'ZHE': ['temirtau', 'Temirtau']
    }
    return cityMap[regionCode] || []
}

const filteredCities = computed(() => {
    if (!config.region) return []
    const cityKeys = getCitiesForRegion(config.region)
    return cityKeys.map(key => ({
        key,
        name: t(`tools.kazakhstan-address-generator.cities.${config.region}.${key}`)
    }))
})

// 哈萨克斯坦街道名称
const kazakhstanStreets = [
    'Абая проспект', 'Аbay Avenue', 'Достык проспект', 'Dostyk Avenue', 'Абай проспект', 'Abay Avenue',
    'Назарбаева проспект', 'Nazarbayev Avenue', 'Сатпаева улица', 'Satpayev Street',
    'Кунаева проспект', 'Kunaev Avenue', 'Байтурсынова улица', 'Baitursynov Street',
    'Тулебаева улица', 'Tulebayev Street', 'Масанчи улица', 'Masanchi Street',
    'Казыбек би улица', 'Kazybek Bi Street', 'Тауелсиздик проспект', 'Tauelsizdik Avenue',
    'Абылай хана проспект', 'Abilkhan Avenue', 'Сейфуллина проспект', 'Seifullin Avenue',
    'Жибек жолы проспект', 'Zhibek Zholy Avenue', 'Алтынсарина улица', 'Altynsarin Street',
    'Кенесары улица', 'Kenesary Street', 'Жамбыла улица', 'Zhambyl Street',
    'Ауэзова улица', 'Auezov Street', 'Муханова улица', 'Mukhanov Street',
    'Торайгырова улица', 'Toraygirov Street', 'Лермонтова улица', 'Lermontov Street',
    'Гagarина проспект', 'Gagarin Avenue', 'Пушкина улица', 'Pushkin Street'
]

// 哈萨克斯坦建筑名称后缀
const buildingSuffixes = ['дом', 'дом', 'здание', 'центр', 'массив', 'жилой комплекс', 'башня', 'небоскреб', 'комплекс', 'парк', 'квартал', 'район', 'территория', 'зона', 'площадка']

// 哈萨克斯坦大学
const universities = [
    'KazNU named after al-Farabi', 'MUIK', 'KBTU', 'SKSU', 'Eurasian National University',
    'Turan University', 'KIMEP University', 'INHA University in Kazakhstan',
    'L.N. Gumilyov Eurasian National University', 'Kazakh National Women\'s Pedagogical University'
]

onMounted(() => {
    loadSample()
})

// 生成Luhn算法信用卡号
function generateCreditCardNumber(type = 'visa') {
    const prefixes = {
        visa: ['4'],
        mastercard: ['51', '52', '53', '54', '55'],
        amex: ['34', '37'],
        discover: ['6011', '65']
    }
    const prefix = faker.helpers.arrayElement(prefixes[type] || prefixes.visa)
    let number = prefix
    while (number.length < 15) {
        number += faker.string.numeric(1)
    }
    // 计算校验位
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

// 生成哈萨克斯坦身份证号（ИИН）
function generateIdCard() {
    // 哈萨克斯坦身份证号：12位数字（ИИН - 哈萨克斯坦个人识别号）
    // 格式：RRMMDDSSSSSS C
    // RR - 地区码，MM - 月份，DD - 日期，SSSSSS - 序列号，C - 校验码
    
    // 生成出生日期
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const year = birthDate.getFullYear().toString().slice(-2)
    const month = (birthDate.getMonth() + 1).toString().padStart(2, '0')
    const day = birthDate.getDate().toString().padStart(2, '0')
    
    // 生成地区码（1-17代表州，31-99代表城市）
    const regionCodes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99']
    const regionCode = faker.helpers.arrayElement(regionCodes)
    
    // 生成序列号（6位数字）
    const serialNumber = faker.string.numeric(6)
    
    // 组合前11位
    const baseNumber = `${year}${month}${day}${regionCode}${serialNumber}`
    
    // 计算校验码
    let sum = 0
    for (let i = 0; i < 11; i++) {
        sum += parseInt(baseNumber[i]) * (i + 1)
    }
    const checkDigit = sum % 11
    
    return {
        number: `${baseNumber}${checkDigit}`,
        birthDate: `${year}${month}${day}`,
        regionCode,
        serialNumber,
        checkDigit
    }
}

// 生成哈萨克斯坦地址
function generateAddress() {
    const regionObj = config.region 
        ? regions.value.find(r => r.code === config.region)
        : faker.helpers.arrayElement(regions.value)
    const regionName = regionObj ? regionObj.name : t('tools.kazakhstan-address-generator.regions.NUR')
    
    const cityName = config.city || (config.region && filteredCities.value.length > 0
        ? faker.helpers.arrayElement(filteredCities.value).name
        : t('tools.kazakhstan-address-generator.cities.NUR.nursultan'))
    
    const street = faker.helpers.arrayElement(kazakhstanStreets)
    const houseNumber = faker.number.int({ min: 1, max: 150 })
    const buildingName = faker.helpers.arrayElement([
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П'
    ]) + faker.helpers.arrayElement(buildingSuffixes)
    
    const floor = faker.number.int({ min: 1, max: 25 })
    const unit = faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']) + faker.number.int({ min: 1, max: 20 })
    
    // 生成6位邮政编码
    const postalCode = faker.number.int({ min: 0o10000, max: 999999 }).toString().padStart(6, '0')
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${street}, ${houseNumber}, ${buildingName}, ${floor}${t('tools.kazakhstan-address-generator.addressFloor')} ${unit}${t('tools.kazakhstan-address-generator.addressUnit')}, ${cityName}, ${regionName}, ${postalCode}`
            break
        case 'commercial':
            fullAddress = `${street}, ${houseNumber}, ${buildingName} ${floor}${t('tools.kazakhstan-address-generator.addressFloor')} ${unit}${t('tools.kazakhstan-address-generator.addressUnit')}${t('tools.kazakhstan-address-generator.commercialUnit')}, ${cityName}, ${regionName}, ${postalCode}`
            break
        case 'virtual':
            fullAddress = `${cityName} ${regionName} ${t('tools.kazakhstan-address-generator.postOfficeBox')} ${faker.number.int({ min: 100, max: 9999 })}, ${postalCode}`
            break
        case 'campus':
            const campusTypes = [t('tools.kazakhstan-address-generator.studentDormitory'), t('tools.kazakhstan-address-generator.teachingBuilding'), t('tools.kazakhstan-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}${t('tools.kazakhstan-address-generator.buildingUnit')}, ${cityName}, ${regionName}, ${postalCode}`
            break
        default:
            fullAddress = `${street}, ${houseNumber}, ${buildingName}, ${floor}${t('tools.kazakhstan-address-generator.addressFloor')} ${unit}${t('tools.kazakhstan-address-generator.addressUnit')}, ${cityName}, ${regionName}, ${postalCode}`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}`,
        building: buildingName,
        floor: `${floor}${t('tools.kazakhstan-address-generator.addressFloor')}`,
        unit: `${unit}${t('tools.kazakhstan-address-generator.addressUnit')}`,
        region: regionName,
        city: cityName,
        postalCode,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 使用哈萨克斯坦姓名生成
    const kazakhSurnames = ['Абай', 'Досым', 'Кайрат', 'Ерлан', 'Александр', 'Марат', 'Сергей', 'Андрей', 'Виктор', 'Олег', 'Нурлан', 'Тимур', 'Булат', 'Арман', 'Данияр']
    const kazakhGivenNames = ['Абай', 'Досым', 'Кайрат', 'Ерлан', 'Александр', 'Марат', 'Сергей', 'Андрей', 'Виктор', 'Олег', 'Нурлан', 'Тимур', 'Булат', 'Арман', 'Данияр']
    
    const surname = faker.helpers.arrayElement(kazakhSurnames)
    const givenName = faker.helpers.arrayElement(kazakhGivenNames)
    const fullName = surname + givenName
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    const zodiacSigns = ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы']
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
        fullName,
        gender: gender === 'male' ? t('tools.kazakhstan-address-generator.genderMale') : t('tools.kazakhstan-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('ru-RU'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 哈萨克斯坦电话：+7开头，10位数字
    const phoneNumber = faker.string.numeric(10)
    const phone = `+7 ${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6)}`
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.kazakhstan-address-generator.phoneTypeMobile') : t('tools.kazakhstan-address-generator.phoneTypeLandline'),
        areaCode: '7',
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

// 生成信用卡
function generateCreditCard() {
    const types = ['visa', 'mastercard', 'amex', 'discover']
    const type = faker.helpers.arrayElement(types)
    const number = generateCreditCardNumber(type)
    const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
    const expiryYear = (new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })).toString().slice(-2)
    
    return {
        type: type.charAt(0).toUpperCase() + type.slice(1),
        number: number.replace(/(\d{4})/g, '$1 ').trim(),
        expiry: `${expiryMonth}/${expiryYear}`,
        cvv: faker.string.numeric(3),
        bankBin: number.substring(0, 6)
    }
}

// 生成职业
function generateCareer() {
    const jobTitles = ['Программист', 'Менеджер по продажам', 'Учитель', 'Врач', 'Бухгалтер', 'Дизайнер', 'Консультант', 'Юрист', 'Инженер', 'Архитектор']
    const industries = ['Технологии', 'Медицина', 'Образование', 'Финансы', 'Розничная торговля', 'Производство', 'Недвижимость', 'Гостиничный бизнес']
    const companySizes = ['Малый (1-50)', 'Средний (51-200)', 'Крупный (201-1000)', 'Корпоративный (1000+)']
    const employmentStatuses = ['Полная занятость', 'Частичная занятость']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `${faker.number.int({ min: 200000, max: 1500000 })} KZT`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses)
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
        timezone: 'Asia/Almaty',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Принять все', 'Отклонить все', 'Пользовательские'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.kazakhstan-address-generator.invalidQuantity'))
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
    config.region = 'NUR'
    config.city = t('tools.kazakhstan-address-generator.cities.NUR.nursultan')
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
    toastRef.value.show(t('tools.kazakhstan-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `kazakhstan-address-${idx + 1}.json`
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
    link.download = 'kazakhstan-addresses.json'
    link.click()
    URL.revokeObjectURL(url)
}

// 导出CSV
function exportCsv() {
    if (generatedData.value.length === 0) return
    
    const headers = []
    const rows = []
    
    generatedData.value.forEach((item, idx) => {
        const row = {}
        if (item.address) {
            row[t('tools.kazakhstan-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.kazakhstan-address-generator.csv.street')] = item.address.street
            row[t('tools.kazakhstan-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.kazakhstan-address-generator.csv.building')] = item.address.building
            row[t('tools.kazakhstan-address-generator.csv.floor')] = item.address.floor
            row[t('tools.kazakhstan-address-generator.csv.unit')] = item.address.unit
            row[t('tools.kazakhstan-address-generator.csv.region')] = item.address.region
            row[t('tools.kazakhstan-address-generator.csv.postalCode')] = item.address.postalCode
        }
        if (item.identity) {
            row[t('tools.kazakhstan-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.kazakhstan-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.kazakhstan-address-generator.csv.age')] = item.identity.age
            row[t('tools.kazakhstan-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.kazakhstan-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.kazakhstan-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.kazakhstan-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.kazakhstan-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.kazakhstan-address-generator.csv.idCardNumber')] = item.idCard.number
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
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'kazakhstan-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 州改变
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
