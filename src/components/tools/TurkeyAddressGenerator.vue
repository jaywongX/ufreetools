<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.turkey-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.turkey-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.turkey-address-generator.selectProvince') }}</label>
                            <select v-model="config.province" @change="onProvinceChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.turkey-address-generator.allProvinces') }}</option>
                                <option v-for="province in provinces" :key="province.code" :value="province.code">{{ province.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.turkey-address-generator.selectDistrict') }}</label>
                            <select v-model="config.district"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.province">
                                <option value="">{{ $t('tools.turkey-address-generator.allDistricts') }}</option>
                                <option v-for="district in filteredDistricts" :key="district.key" :value="district.name">{{ district.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.turkey-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.turkey-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.turkey-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.turkey-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.turkey-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.turkey-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.turkey-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.turkey-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.turkey-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.turkey-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.turkey-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.turkey-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.turkey-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.turkey-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.turkey-address-generator.generating') : $t('tools.turkey-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.turkey-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.turkey-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.turkey-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.turkey-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.turkey-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.turkey-address-generator.collapse') : $t('tools.turkey-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.turkey-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.turkey-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.turkey-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.floorLabel') }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.districtLabel') }}：</span> {{ item.address.district }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.provinceLabel') }}：</span> {{ item.address.province }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.postalCode') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.turkey-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.turkey-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.turkey-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.turkey-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.turkey-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.turkey-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.turkey-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <TurkeyAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import TurkeyAddressGeneratorArticle from './TurkeyAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    province: '',
    district: '',
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

// 土耳其省份
const provinces = computed(() => [
    { code: 'IST', name: t('tools.turkey-address-generator.provinces.IST') },
    { code: 'ANK', name: t('tools.turkey-address-generator.provinces.ANK') },
    { code: 'IZM', name: t('tools.turkey-address-generator.provinces.IZM') },
    { code: 'BUR', name: t('tools.turkey-address-generator.provinces.BUR') },
    { code: 'ANT', name: t('tools.turkey-address-generator.provinces.ANT') },
    { code: 'ADN', name: t('tools.turkey-address-generator.provinces.ADN') },
    { code: 'GAZ', name: t('tools.turkey-address-generator.provinces.GAZ') },
    { code: 'KON', name: t('tools.turkey-address-generator.provinces.KON') },
    { code: 'MRA', name: t('tools.turkey-address-generator.provinces.MRA') },
    { code: 'KAY', name: t('tools.turkey-address-generator.provinces.KAY') },
    { code: 'ESK', name: t('tools.turkey-address-generator.provinces.ESK') },
    { code: 'TRA', name: t('tools.turkey-address-generator.provinces.TRA') },
    { code: 'SAM', name: t('tools.turkey-address-generator.provinces.SAM') },
    { code: 'MAL', name: t('tools.turkey-address-generator.provinces.MAL') },
    { code: 'DIA', name: t('tools.turkey-address-generator.provinces.DIA') },
    { code: 'ERZ', name: t('tools.turkey-address-generator.provinces.ERZ') },
    { code: 'VAN', name: t('tools.turkey-address-generator.provinces.VAN') },
    { code: 'SIV', name: t('tools.turkey-address-generator.provinces.SIV') },
    { code: 'TOK', name: t('tools.turkey-address-generator.provinces.TOK') },
    { code: 'COR', name: t('tools.turkey-address-generator.provinces.COR') }
])

// 区域列表（主要区域）
const getDistrictsForProvince = (provinceCode) => {
    const districtMap = {
        'IST': ['beyoglu', 'fatih', 'kadikoy', 'besiktas', 'sisli', 'uskudar', 'bakirkoy', 'zeytinburnu', 'beylikduzu', 'pendik', 'maltepe', 'kartal', 'tuzla', 'catalca'],
        'ANK': ['cankaya', 'yenimahalle', 'altindag', 'pursaklar', 'eryaman', 'etimesgut', 'sincan'],
        'IZM': ['konak', 'karsiyaka', 'bornova', 'cigli', 'bayrakli', 'balcova', 'guzelbahce'],
        'BUR': ['nilufer', 'osmangazi', 'yildirim', 'mudanya', 'gemlik'],
        'ANT': ['muratpasa', 'kepez', 'konyaalti', 'aksu', 'dosenmeadi']
    }
    return districtMap[provinceCode] || []
}

const filteredDistricts = computed(() => {
    if (!config.province) return []
    const districtKeys = getDistrictsForProvince(config.province)
    return districtKeys.map(key => ({
        key,
        name: t(`tools.turkey-address-generator.districtsData.${config.province}.${key}`)
    }))
})

// 土耳其街道名称
const turkeyStreets = [
    'Atatürk Caddesi', 'İstiklal Caddesi', 'Bağdat Caddesi', 'İnönü Caddesi',
    'Cumhuriyet Caddesi', 'Menderes Caddesi', 'Demokrasi Caddesi', 'Gazi Caddesi',
    'Sakarya Caddesi', 'Necip Fazıl Caddesi', 'Turgut Özal Caddesi', 'Abdi İpekçi Caddesi',
    'Rıhtım Caddesi', 'Sahil Yolu', 'Sokak', 'Cadde', 'Bulvar', 'Sokak',
    'Mahallesi', 'Caddesi', 'Bulvarı', 'Sokağı', 'Yolu', 'Caddesi'
]

// 土耳其建筑名称后缀
const buildingSuffixes = ['Apartmanı', 'Sitesi', 'Konutları', 'Residence', 'Plaza', 'Kule', 'İş Merkezi', 'AVM', 'Pasaj', 'Han']

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

// 生成土耳其身份证号
function generateTurkeyIdCard() {
    // 土耳其身份证号格式：11位数字
    let idNumber = faker.string.numeric(1)
    
    // 计算校验码（简化算法）
    let sum = 0
    for (let i = 0; i < 10; i++) {
        sum += parseInt(idNumber[i]) * (i + 1)
    }
    const checkDigit = sum % 10
    
    return {
        number: idNumber + checkDigit,
        nationalId: idNumber + checkDigit,
        serialNumber: faker.string.numeric(6),
        checkDigit: checkDigit.toString()
    }
}

// 生成土耳其地址
function generateAddress() {
    const provinceObj = config.province 
        ? provinces.value.find(p => p.code === config.province)
        : faker.helpers.arrayElement(provinces.value)
    const provinceName = provinceObj ? provinceObj.name : t('tools.turkey-address-generator.provinces.IST')
    
    const districtName = config.district || (config.province && filteredDistricts.value.length > 0
        ? faker.helpers.arrayElement(filteredDistricts.value).name
        : t('tools.turkey-address-generator.districtsData.IST.beyoglu'))
    
    const street = faker.helpers.arrayElement(turkeyStreets)
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const buildingName = faker.helpers.arrayElement([
        'Yeni', 'Eski', 'Büyük', 'Küçük', 'Yeni', 'Güzel', 'Sağlam', 'Modern', 'Lüks'
    ]) + faker.helpers.arrayElement(buildingSuffixes)
    
    const floor = faker.number.int({ min: 1, max: 15 })
    const unit = faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']) + faker.number.int({ min: 1, max: 10 })
    const postalCode = faker.string.numeric(5)
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${street} No:${houseNumber} ${buildingName} Kat:${floor} Daire:${unit}, ${districtName}/${provinceName} ${postalCode}`
            break
        case 'commercial':
            fullAddress = `${street} No:${houseNumber} ${buildingName} Kat:${floor} Daire:${unit} ${t('tools.turkey-address-generator.commercialUnit')}, ${districtName}/${provinceName} ${postalCode}`
            break
        case 'virtual':
            fullAddress = `${t('tools.turkey-address-generator.turkey')}${provinceName}${districtName}${t('tools.turkey-address-generator.postOfficeBox')} ${faker.number.int({ min: 100, max: 9999 })}`
            break
        case 'campus':
            const universities = [t('tools.turkey-address-generator.universities.ITU'), t('tools.turkey-address-generator.universities.BOUN'), t('tools.turkey-address-generator.universities.METU'), t('tools.turkey-address-generator.universities.HU')]
            const campusTypes = [t('tools.turkey-address-generator.studentDormitory'), t('tools.turkey-address-generator.teachingBuilding'), t('tools.turkey-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}${t('tools.turkey-address-generator.buildingUnit')}, ${districtName}/${provinceName}`
            break
        default:
            fullAddress = `${street} No:${houseNumber} ${buildingName} Kat:${floor} Daire:${unit}, ${districtName}/${provinceName} ${postalCode}`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}`,
        building: buildingName,
        floor: `${floor}`,
        unit: `${unit}`,
        district: districtName,
        province: provinceName,
        postalCode,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 土耳其姓名生成
    const turkishSurnames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Yıldırım', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara', 'Koç', 'Kurt', 'Özkan', 'Şimşek']
    const turkishGivenNames = ['Ali', 'Ayşe', 'Fatma', 'Mehmet', 'Emine', 'Mustafa', 'Zeynep', 'Hüseyin', 'Hatice', 'İbrahim', 'Ömer', 'Elif', 'Hasan', 'Merve', 'Yusuf', 'Seda', 'Murat', 'Burcu', 'Ahmet', 'Gamze']
    
    const surname = faker.helpers.arrayElement(turkishSurnames)
    const givenName = faker.helpers.arrayElement(turkishGivenNames)
    const fullName = `${givenName} ${surname}`
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    const zodiacSigns = ['Koç', 'Boğa', 'İkizler', 'Yengeç', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak', 'Kova', 'Balık']
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
        gender: gender === 'male' ? t('tools.turkey-address-generator.genderMale') : t('tools.turkey-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('tr-TR'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 土耳其电话：+90开头，10位数字
    const phoneNumber = faker.string.numeric(10)
    const phone = `+90 ${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6)}`
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.turkey-address-generator.phoneTypeMobile') : t('tools.turkey-address-generator.phoneTypeLandline'),
        areaCode: '90',
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
    const jobTitles = ['Yazılım Mühendisi', 'Pazarlama Müdürü', 'Satış Temsilcisi', 'Öğretmen', 'Hemşire', 'Muhasebeci', 'Tasarımcı', 'Danışman', 'Doktor', 'Avukat']
    const industries = ['Teknoloji', 'Sağlık', 'Eğitim', 'Finans', 'Perakende', 'Üretim', 'Emlak', 'Turizm']
    const companySizes = ['Küçük (1-50)', 'Orta (51-200)', 'Büyük (201-1000)', 'Kurumsal (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `₺${faker.number.int({ min: 20000, max: 150000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.turkey-address-generator.employmentFullTime') 
            : t('tools.turkey-address-generator.employmentPartTime')
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
        timezone: 'Europe/Istanbul',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.turkey-address-generator.invalidQuantity'))
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
                item.idCard = generateTurkeyIdCard()
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
    config.province = 'IST'
    config.district = t('tools.turkey-address-generator.districtsData.IST.beyoglu')
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
    toastRef.value.show(t('tools.turkey-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `turkey-address-${idx + 1}.json`
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
    link.download = 'turkey-addresses.json'
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
            row[t('tools.turkey-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.turkey-address-generator.csv.street')] = item.address.street
            row[t('tools.turkey-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.turkey-address-generator.csv.building')] = item.address.building
            row[t('tools.turkey-address-generator.csv.floor')] = item.address.floor
            row[t('tools.turkey-address-generator.csv.unit')] = item.address.unit
            row[t('tools.turkey-address-generator.csv.district')] = item.address.district
            row[t('tools.turkey-address-generator.csv.province')] = item.address.province
            row[t('tools.turkey-address-generator.csv.postalCode')] = item.address.postalCode
        }
        if (item.identity) {
            row[t('tools.turkey-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.turkey-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.turkey-address-generator.csv.age')] = item.identity.age
            row[t('tools.turkey-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.turkey-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.turkey-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.turkey-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.turkey-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.turkey-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'turkey-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 省改变
function onProvinceChange() {
    config.district = ''
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