<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.au-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.au-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.au-address-generator.selectState') }}</label>
                            <select v-model="config.state" @change="onStateChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.au-address-generator.allStates') }}</option>
                                <option v-for="state in states" :key="state.code" :value="state.code">{{ state.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.au-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.state">
                                <option value="">{{ $t('tools.au-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city.key" :value="city.name">{{ city.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.au-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.au-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.au-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="poBox" />
                            <span>{{ $t('tools.au-address-generator.addressTypePoBox') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.au-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.au-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.au-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.au-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.au-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.au-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeTaxFile" />
                            <span>{{ $t('tools.au-address-generator.taxFileTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.au-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.au-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.au-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.au-address-generator.generating') : $t('tools.au-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.au-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.au-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.au-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.au-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.au-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.au-address-generator.collapse') : $t('tools.au-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.au-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.au-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.au-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.streetNumberLabel') }}：</span> {{ item.address.streetNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.suburbLabel') }}：</span> {{ item.address.suburb }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.stateLabel') }}：</span> {{ item.address.state }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.postcodeLabel') }}：</span> {{ item.address.postcode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.unitLabel') }}：</span> {{ item.address.unit || '-' }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.taxFile">
                                    <div><span class="font-medium">{{ $t('tools.au-address-generator.taxFileNumber') }}：</span> {{ item.taxFile.tfn }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.au-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.au-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.au-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.au-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.au-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.au-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <AuAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import AuAddressGeneratorArticle from './AuAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    state: '',
    city: '',
    addressType: 'residential',
    includeIdentity: true,
    includeContact: true,
    includeCreditCard: false,
    includeCareer: false,
    includeTaxFile: false,
    includeFingerprint: false,
    quantity: 5
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 澳大利亚州和领地
const states = computed(() => [
    { code: 'NSW', name: t('tools.au-address-generator.states.NSW') },
    { code: 'VIC', name: t('tools.au-address-generator.states.VIC') },
    { code: 'QLD', name: t('tools.au-address-generator.states.QLD') },
    { code: 'WA', name: t('tools.au-address-generator.states.WA') },
    { code: 'SA', name: t('tools.au-address-generator.states.SA') },
    { code: 'TAS', name: t('tools.au-address-generator.states.TAS') },
    { code: 'ACT', name: t('tools.au-address-generator.states.ACT') },
    { code: 'NT', name: t('tools.au-address-generator.states.NT') }
])

// 各州主要城市
const getCitiesForState = (stateCode) => {
    const cityMap = {
        'NSW': ['sydney', 'newcastle', 'wollongong', 'centralCoast', 'canberra'],
        'VIC': ['melbourne', 'geelong', 'ballarat', 'bendigo'],
        'QLD': ['brisbane', 'goldCoast', 'sunshineCoast', 'townsville', 'cairns'],
        'WA': ['perth', 'fremantle', 'mandurah'],
        'SA': ['adelaide', 'mountGambier', 'whyalla'],
        'TAS': ['hobart', 'launceston', 'devonport'],
        'ACT': ['canberra', 'queanbeyan'],
        'NT': ['darwin', 'aliceSprings', 'palmerston']
    }
    return cityMap[stateCode] || []
}

const filteredCities = computed(() => {
    if (!config.state) return []
    const cityKeys = getCitiesForState(config.state)
    return cityKeys.map(key => ({
        key,
        name: t(`tools.au-address-generator.cities.${config.state}.${key}`)
    }))
})

// 澳大利亚街道名称
const auStreets = [
    'Collins Street', 'Bourke Street', 'Elizabeth Street', 'Swanston Street', 'Flinders Street',
    'George Street', 'Pitt Street', 'York Street', 'King Street', 'Sussex Street',
    'Queen Street', 'Adelaide Street', 'Ann Street', 'Creek Street', 'Edward Street',
    'Hay Street', 'Murray Street', 'Barrack Street', 'William Street', 'St Georges Terrace',
    'Rundle Mall', 'Hindley Street', 'Grenfell Street', 'Currie Street', 'King William Street',
    'Liverpool Street', 'Collins Street', 'Bathurst Street', 'Hunter Street', 'Darling Harbour'
]

// 邮政编码范围
const postcodeRanges = {
    'NSW': { min: 2000, max: 2999 },
    'VIC': { min: 3000, max: 3999 },
    'QLD': { min: 4000, max: 4999 },
    'WA': { min: 6000, max: 6999 },
    'SA': { min: 5000, max: 5999 },
    'TAS': { min: 7000, max: 7999 },
    'ACT': { min: 2600, max: 2999 },
    'NT': { min: 800, max: 999 }
}

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

// 生成澳大利亚税号 (TFN)
function generateTFN() {
    // TFN是8-9位数字
    const tfn = faker.string.numeric(9)
    return {
        tfn: `${tfn.substring(0, 3)} ${tfn.substring(3, 6)} ${tfn.substring(6)}`,
        rawNumber: tfn
    }
}

// 生成澳大利亚地址
function generateAddress() {
    const stateObj = config.state 
        ? states.value.find(s => s.code === config.state)
        : faker.helpers.arrayElement(states.value)
    const stateName = stateObj ? stateObj.name : t('tools.au-address-generator.states.NSW')
    const stateCode = stateObj ? stateObj.code : 'NSW'
    
    const cityName = config.city || (config.state && filteredCities.value.length > 0
        ? faker.helpers.arrayElement(filteredCities.value).name
        : t('tools.au-address-generator.cities.NSW.sydney'))
    
    const street = faker.helpers.arrayElement(auStreets)
    const streetNumber = faker.number.int({ min: 1, max: 999 })
    const unit = config.addressType === 'residential' && Math.random() > 0.5 
        ? `${faker.number.int({ min: 1, max: 50 })}/${faker.number.int({ min: 1, max: 200 })}` 
        : ''
    
    // 生成邮政编码
    const postcodeRange = postcodeRanges[stateCode] || postcodeRanges['NSW']
    const postcode = faker.number.int({ min: postcodeRange.min, max: postcodeRange.max })
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            const unitPrefix = unit ? `${unit} ` : ''
            fullAddress = `${unitPrefix}${streetNumber} ${street}, ${cityName} ${stateCode} ${postcode}, Australia`
            break
        case 'commercial':
            const suite = `Suite ${faker.number.int({ min: 1, max: 100 })}`
            fullAddress = `${suite}, ${streetNumber} ${street}, ${cityName} ${stateCode} ${postcode}, Australia`
            break
        case 'poBox':
            const poBoxNumber = faker.number.int({ min: 100, max: 9999 })
            fullAddress = `PO Box ${poBoxNumber}, ${cityName} ${stateCode} ${postcode}, Australia`
            break
        case 'campus':
            const universities = [t('tools.au-address-generator.universities.USYD'), t('tools.au-address-generator.universities.UNSW'), t('tools.au-address-generator.universities.UMELB'), t('tools.au-address-generator.universities.UQ'), t('tools.au-address-generator.universities.ANU')]
            const campusBuildings = [t('tools.au-address-generator.studentDormitory'), t('tools.au-address-generator.academicBuilding'), t('tools.au-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)}, ${faker.helpers.arrayElement(campusBuildings)}, ${cityName} ${stateCode} ${postcode}, Australia`
            break
        default:
            fullAddress = `${streetNumber} ${street}, ${cityName} ${stateCode} ${postcode}, Australia`
    }
    
    return {
        street,
        streetNumber: streetNumber.toString(),
        suburb: cityName,
        state: stateCode,
        stateName,
        postcode: postcode.toString(),
        unit,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    const firstName = faker.person.firstName(gender)
    const lastName = faker.person.lastName()
    const fullName = `${firstName} ${lastName}`
    
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
        fullName,
        firstName,
        lastName,
        gender: gender === 'male' ? t('tools.au-address-generator.genderMale') : t('tools.au-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('en-AU'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 澳大利亚电话：+61开头
    let phone
    if (phoneType === 'mobile') {
        // 移动电话：04xx xxx xxx
        const mobileNumber = `04${faker.string.numeric(2)} ${faker.string.numeric(3)} ${faker.string.numeric(3)}`
        phone = `+61 ${mobileNumber.substring(1)}`
    } else {
        // 座机：02/03/07/08 xxxx xxxx
        const areaCodes = ['02', '03', '07', '08']
        const areaCode = faker.helpers.arrayElement(areaCodes)
        phone = `+61 ${areaCode} ${faker.string.numeric(4)} ${faker.string.numeric(4)}`
    }
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.au-address-generator.phoneTypeMobile') : t('tools.au-address-generator.phoneTypeLandline'),
        areaCode: '61',
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

// 生成信用卡
function generateCreditCard() {
    const types = ['visa', 'mastercard', 'amex']
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
    const jobTitles = ['Software Engineer', 'Marketing Manager', 'Sales Representative', 'Teacher', 'Nurse', 'Accountant', 'Designer', 'Consultant', 'Doctor', 'Lawyer']
    const industries = ['Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Real Estate', 'Hospitality']
    const companySizes = ['Small (1-50)', 'Medium (51-200)', 'Large (201-1000)', 'Enterprise (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `AU$${faker.number.int({ min: 50000, max: 200000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.au-address-generator.employmentFullTime') 
            : t('tools.au-address-generator.employmentPartTime')
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
    
    // 澳大利亚时区
    const timezones = ['Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Perth', 'Australia/Adelaide']
    
    return {
        os,
        osVersion: faker.helpers.arrayElement(osVersions[os] || ['Unknown']),
        browser: faker.helpers.arrayElement(browsers),
        userAgent: faker.internet.userAgent(),
        screenResolution: `${faker.number.int({ min: 1280, max: 3840 })}x${faker.number.int({ min: 720, max: 2160 })}`,
        timezone: faker.helpers.arrayElement(timezones),
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.au-address-generator.invalidQuantity'))
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
            
            if (config.includeTaxFile) {
                item.taxFile = generateTFN()
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
    config.state = 'NSW'
    config.city = t('tools.au-address-generator.cities.NSW.sydney')
    config.addressType = 'residential'
    config.includeIdentity = true
    config.includeContact = true
    config.includeCreditCard = true
    config.includeCareer = true
    config.includeTaxFile = true
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
    toastRef.value.show(t('tools.au-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `au-address-${idx + 1}.json`
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
    link.download = 'au-addresses.json'
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
            row[t('tools.au-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.au-address-generator.csv.street')] = item.address.street
            row[t('tools.au-address-generator.csv.streetNumber')] = item.address.streetNumber
            row[t('tools.au-address-generator.csv.suburb')] = item.address.suburb
            row[t('tools.au-address-generator.csv.state')] = item.address.state
            row[t('tools.au-address-generator.csv.postcode')] = item.address.postcode
        }
        if (item.identity) {
            row[t('tools.au-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.au-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.au-address-generator.csv.age')] = item.identity.age
            row[t('tools.au-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.au-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.au-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.au-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.au-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.taxFile) {
            row[t('tools.au-address-generator.csv.taxFileNumber')] = item.taxFile.tfn
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
    link.download = 'au-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 州改变
function onStateChange() {
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
