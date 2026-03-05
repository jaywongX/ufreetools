<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.uk-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.uk-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.uk-address-generator.selectCounty') }}</label>
                            <select v-model="config.county" @change="onCountyChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.uk-address-generator.allCounties') }}</option>
                                <option v-for="county in counties" :key="county.code" :value="county.code">{{ county.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.uk-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.county">
                                <option value="">{{ $t('tools.uk-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city.key" :value="city.name">{{ city.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.uk-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.uk-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.uk-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="poBox" />
                            <span>{{ $t('tools.uk-address-generator.addressTypePoBox') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.uk-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.uk-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.uk-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.uk-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.uk-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.uk-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.uk-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.uk-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.uk-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.uk-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.uk-address-generator.generating') : $t('tools.uk-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.uk-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.uk-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.uk-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.uk-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.uk-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.uk-address-generator.collapse') : $t('tools.uk-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.uk-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.uk-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.uk-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.postcodeLabel') }}：</span> {{ item.address.postcode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.cityLabel') }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.countyLabel') }}：</span> {{ item.address.county }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.uk-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.uk-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.uk-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.uk-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.uk-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.uk-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.uk-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <UkAddressGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import UkAddressGeneratorArticle from './UkAddressGeneratorArticle.vue'

const { t } = useI18n()

// 配置
const config = reactive({
    county: '',
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

// 英国郡（Counties）
const counties = computed(() => [
    { code: 'LND', name: t('tools.uk-address-generator.counties.LND') },
    { code: 'GRM', name: t('tools.uk-address-generator.counties.GRM') },
    { code: 'MAN', name: t('tools.uk-address-generator.counties.MAN') },
    { code: 'BIR', name: t('tools.uk-address-generator.counties.BIR') },
    { code: 'LEE', name: t('tools.uk-address-generator.counties.LEE') },
    { code: 'SHE', name: t('tools.uk-address-generator.counties.SHE') },
    { code: 'LIV', name: t('tools.uk-address-generator.counties.LIV') },
    { code: 'BRS', name: t('tools.uk-address-generator.counties.BRS') },
    { code: 'NEW', name: t('tools.uk-address-generator.counties.NEW') },
    { code: 'NOT', name: t('tools.uk-address-generator.counties.NOT') },
    { code: 'EDB', name: t('tools.uk-address-generator.counties.EDB') },
    { code: 'GLA', name: t('tools.uk-address-generator.counties.GLA') },
    { code: 'CDF', name: t('tools.uk-address-generator.counties.CDF') },
    { code: 'BEL', name: t('tools.uk-address-generator.counties.BEL') },
    { code: 'SOU', name: t('tools.uk-address-generator.counties.SOU') },
    { code: 'POR', name: t('tools.uk-address-generator.counties.POR') },
    { code: 'BRI', name: t('tools.uk-address-generator.counties.BRI') },
    { code: 'CAM', name: t('tools.uk-address-generator.counties.CAM') }
])

// 城市列表
const getCitiesForCounty = (countyCode) => {
    const cityMap = {
        'LND': ['westminster', 'kensington', 'chelsea', 'camden', 'islington', 'hackney', 'towerHamlets', 'greenwich'],
        'GRM': ['manchester', 'salford', 'bolton', 'bury', 'oldham', 'rochdale', 'stockport', 'wigan'],
        'MAN': ['manchesterCity', 'trafford', 'tameside', 'sale'],
        'BIR': ['birmingham', 'coventry', 'wolverhampton', 'dudley', 'walsall', 'sandwell', 'solihull'],
        'LEE': ['leeds', 'bradford', 'wakefield', 'kirklees', 'calderdale'],
        'SHE': ['sheffield', 'rotherham', 'doncaster', 'barnsley'],
        'LIV': ['liverpool', 'knowsley', 'sefton', 'wirral', 'stHelens'],
        'BRS': ['bristol', 'southGloucestershire', 'bath'],
        'NEW': ['newcastle', 'gateshead', 'sunderland', 'durham', 'northTyneside', 'southTyneside'],
        'NOT': ['nottingham', 'derby', 'leicester', 'lincoln'],
        'EDB': ['edinburgh', 'glasgow', 'aberdeen', 'dundee', 'inverness'],
        'GLA': ['glasgowCity', 'paisley', 'motherwell', 'hamilton', 'eastKilbride'],
        'CDF': ['cardiff', 'swansea', 'newport', 'wrexham', 'barry'],
        'BEL': ['belfast', 'derry', 'lisburn', 'newry', 'bangor'],
        'SOU': ['southampton', 'portsmouth', 'bournemouth', 'poole', 'winchester'],
        'POR': ['plymouth', 'exeter', 'truro', 'bath', 'taunton'],
        'BRI': ['brighton', 'hove', 'worthing', 'eastbourne', 'hastings'],
        'CAM': ['cambridge', 'oxford', 'peterborough', 'luton', 'miltonKeynes']
    }
    return cityMap[countyCode] || []
}

const filteredCities = computed(() => {
    if (!config.county) return []
    const cityKeys = getCitiesForCounty(config.county)
    return cityKeys.map(key => ({
        key,
        name: t(`tools.uk-address-generator.cities.${config.county}.${key}`)
    }))
})

// 英国街道名称
const ukStreets = [
    'High Street', 'Station Road', 'Main Street', 'Park Road', 'Church Road',
    'Church Street', 'London Road', 'Victoria Road', 'Green Lane', 'Manor Road',
    'Kings Road', 'Queens Road', 'Oxford Street', 'Regent Street', 'Piccadilly',
    'Bond Street', 'Baker Street', 'Abbey Road', 'Carnaby Street', 'Brick Lane',
    'Portobello Road', 'Columbia Road', 'Kingsland Road', 'Old Street', 'Commercial Road',
    'Whitechapel Road', 'Mile End Road', 'Bow Road', 'Stratford High Street', 'Romford Road'
]

// 英国建筑名称后缀
const buildingSuffixes = ['House', 'Court', 'Mansion', 'Tower', 'Gardens', 'Apartments', 'Place', 'Square', 'Villa', 'Lodge', 'Cottage', 'Hall']

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

// 生成英国国家保险号（National Insurance Number）
function generateUKNINO() {
    // 英国NI号格式：两个字母+6位数字+一个字母
    const prefixLetters = 'ABCEGHJKLMNOPRSTWXYZ' // 排除D, F, I, Q, U, V
    const suffixLetters = 'ABCD'
    
    const prefix = faker.helpers.arrayElement(prefixLetters.split('')) + faker.helpers.arrayElement(prefixLetters.split(''))
    const serial = faker.string.numeric(6)
    const suffix = faker.helpers.arrayElement(suffixLetters.split(''))
    
    return {
        number: `${prefix} ${serial.substring(0,2)} ${serial.substring(2,4)} ${serial.substring(4,6)} ${suffix}`,
        prefix: prefix,
        serialNumber: serial,
        suffix: suffix
    }
}

// 生成英国邮编
function generateUKPostcode(cityName, countyName) {
    // 英国邮编格式：AA9A 9AA 或 A9A 9AA 或 A9 9AA 或 A99 9AA 或 AA9 9AA 或 AA99 9AA
    const postcodeAreas = ['SW', 'W1', 'W2', 'WC', 'EC', 'E1', 'E2', 'N1', 'N2', 'NW', 'SE', 'SW', 'TW', 'UB', 'HA', 'EN', 'IG', 'RM', 'DA', 'BR', 'BN', 'RH', 'GU', 'KT', 'SL', 'RG', 'OX', 'CB', 'PE', 'NR', 'IP', 'CO', 'SS', 'CM', 'RM', 'ME', 'TN', 'CT', 'BH', 'SO', 'PO', 'SP', 'DT', 'EX', 'TA', 'BA', 'BS', 'GL', 'HR', 'WR', 'DY', 'WV', 'ST', 'SK', 'CW', 'WA', 'L', 'CH', 'LL', 'SY', 'LD', 'HR', 'WR', 'B', 'CV', 'DY', 'NN', 'LE', 'NG', 'DE', 'S', 'HD', 'HX', 'LS', 'WF', 'BD', 'HG', 'YO', 'HU', 'DN', 'LN', 'NG', 'NG', 'DE', 'M', 'SK', 'WA', 'BL', 'OL', 'CL', 'FY', 'PR', 'LA', 'CA', 'NE', 'DH', 'SR', 'TS', 'DL', 'YO', 'HG', 'LS', 'WF', 'HD', 'HX', 'S', 'DN', 'LN']
    const area = faker.helpers.arrayElement(postcodeAreas)
    const district = faker.string.numeric({ min: 1, max: 9 }) + (Math.random() > 0.5 ? faker.string.alpha({ length: 1, casing: 'upper' }) : '')
    const sector = faker.string.numeric({ min: 0, max: 9 })
    const unit = faker.string.alpha({ length: 2, casing: 'upper' })
    
    return `${area}${district} ${sector}${unit}`
}

// 生成英国地址
function generateAddress() {
    const countyObj = config.county 
        ? counties.value.find(c => c.code === config.county)
        : faker.helpers.arrayElement(counties.value)
    const countyName = countyObj ? countyObj.name : t('tools.uk-address-generator.counties.LND')
    
    const cityName = config.city || (config.county && filteredCities.value.length > 0
        ? faker.helpers.arrayElement(filteredCities.value).name
        : t('tools.uk-address-generator.cities.LND.westminster'))
    
    const street = faker.helpers.arrayElement(ukStreets)
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const buildingName = faker.helpers.arrayElement([
        'Victoria', 'Albert', 'Kings', 'Queens', 'Royal', 'Imperial', 'Grand', 'Central', 'Northern', 'Western', 'Eastern', 'Southern'
    ]) + ' ' + faker.helpers.arrayElement(buildingSuffixes)
    
    const postcode = generateUKPostcode(cityName, countyName)
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${houseNumber} ${street}, ${buildingName}, ${cityName}, ${countyName}, ${postcode}, UK`
            break
        case 'commercial':
            fullAddress = `${houseNumber} ${street}, ${buildingName} (Commercial), ${cityName}, ${countyName}, ${postcode}, UK`
            break
        case 'poBox':
            fullAddress = `PO Box ${faker.number.int({ min: 100, max: 9999 })}, ${cityName}, ${countyName}, ${postcode}, UK`
            break
        case 'campus':
            const universities = [t('tools.uk-address-generator.universities.OXF'), t('tools.uk-address-generator.universities.CAM'), t('tools.uk-address-generator.universities.IMP'), t('tools.uk-address-generator.universities.UCL'), t('tools.uk-address-generator.universities.EDB')]
            const campusTypes = [t('tools.uk-address-generator.studentHall'), t('tools.uk-address-generator.academicBuilding'), t('tools.uk-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)}, ${cityName}, ${postcode}, UK`
            break
        default:
            fullAddress = `${houseNumber} ${street}, ${buildingName}, ${cityName}, ${countyName}, ${postcode}, UK`
    }
    
    return {
        street,
        houseNumber: houseNumber.toString(),
        building: buildingName,
        city: cityName,
        county: countyName,
        postcode,
        fullAddress
    }
}

// 生成身份信息（英国风格）
function generateIdentity() {
    const gender = faker.person.sexType()
    const fullName = faker.person.fullName({ sex: gender })
    
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
        gender: gender === 'male' ? t('tools.uk-address-generator.genderMale') : t('tools.uk-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('en-GB'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 英国电话：+44开头，手机07开头，座机由区域代码决定
    let phone
    if (phoneType === 'mobile') {
        phone = `+44 7${faker.string.numeric(3)} ${faker.string.numeric(6)}`
    } else {
        phone = `+44 20 ${faker.string.numeric(4)} ${faker.string.numeric(4)}`
    }
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.uk-address-generator.phoneTypeMobile') : t('tools.uk-address-generator.phoneTypeLandline'),
        areaCode: '44',
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
        salary: `£${faker.number.int({ min: 20000, max: 100000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.uk-address-generator.employmentFullTime') 
            : t('tools.uk-address-generator.employmentPartTime')
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
        timezone: 'Europe/London',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        alert(t('tools.uk-address-generator.invalidQuantity'))
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
                item.idCard = generateUKNINO()
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
    config.county = 'LND'
    config.city = t('tools.uk-address-generator.cities.LND.westminster')
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
    alert(t('tools.uk-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `uk-address-${idx + 1}.json`
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
    link.download = 'uk-addresses.json'
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
            row[t('tools.uk-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.uk-address-generator.csv.street')] = item.address.street
            row[t('tools.uk-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.uk-address-generator.csv.building')] = item.address.building
            row[t('tools.uk-address-generator.csv.postcode')] = item.address.postcode
            row[t('tools.uk-address-generator.csv.city')] = item.address.city
            row[t('tools.uk-address-generator.csv.county')] = item.address.county
        }
        if (item.identity) {
            row[t('tools.uk-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.uk-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.uk-address-generator.csv.age')] = item.identity.age
            row[t('tools.uk-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.uk-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.uk-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.uk-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.uk-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.uk-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'uk-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 郡改变
function onCountyChange() {
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
