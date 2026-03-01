<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.sg-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.sg-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.sg-address-generator.selectRegion') }}</label>
                            <select v-model="config.region" @change="onRegionChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.sg-address-generator.allRegions') }}</option>
                                <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.sg-address-generator.selectArea') }}</label>
                            <select v-model="config.area"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.region">
                                <option value="">{{ $t('tools.sg-address-generator.allAreas') }}</option>
                                <option v-for="area in filteredAreas" :key="area.key" :value="area.name">{{ area.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.sg-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.sg-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.sg-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="hdb" />
                            <span>{{ $t('tools.sg-address-generator.addressTypeHDB') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="condo" />
                            <span>{{ $t('tools.sg-address-generator.addressTypeCondo') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.sg-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.sg-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.sg-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.sg-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.sg-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.sg-address-generator.idCardTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.sg-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.sg-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.sg-address-generator.generating') : $t('tools.sg-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.sg-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.sg-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.sg-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.sg-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.sg-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.sg-address-generator.collapse') : $t('tools.sg-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.sg-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.sg-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.sg-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.postalCodeLabel') }}：</span> {{ item.address.postalCode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.race') }}：</span> {{ item.identity.race }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.sg-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.sg-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.sg-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.sg-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.sg-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.sg-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.sg-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <SgAddressGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import SgAddressGeneratorArticle from './SgAddressGeneratorArticle.vue'

const { t } = useI18n()

// 配置
const config = reactive({
    region: '',
    area: '',
    addressType: 'residential',
    includeIdentity: true,
    includeContact: true,
    includeCreditCard: false,
    includeCareer: false,
    includeIdCard: false,
    quantity: 5
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 新加坡5个区域
const regions = computed(() => [
    { code: 'CR', name: t('tools.sg-address-generator.regions.CR') },
    { code: 'ER', name: t('tools.sg-address-generator.regions.ER') },
    { code: 'NR', name: t('tools.sg-address-generator.regions.NR') },
    { code: 'NER', name: t('tools.sg-address-generator.regions.NER') },
    { code: 'WR', name: t('tools.sg-address-generator.regions.WR') }
])

// 区域列表
const getAreasForRegion = (regionCode) => {
    const areaMap = {
        'CR': ['orchard', 'riverValley', 'newton', 'tanglin', 'bukitTimah', 'clementi', 'queenstown'],
        'ER': ['bedok', 'changi', 'pasirRis', 'tampines', 'payaLebar'],
        'NR': ['angMoKio', 'bishan', 'serangoon', 'hougang', 'sengkang', 'punggol'],
        'NER': ['hougang', 'punggol', 'seletar', 'sengkang', 'serangoon'],
        'WR': ['jurongEast', 'jurongWest', 'bukitBatok', 'choaChuKang', 'woodlands', 'sembawang', 'yishun']
    }
    return areaMap[regionCode] || []
}

const filteredAreas = computed(() => {
    if (!config.region) return []
    const areaKeys = getAreasForRegion(config.region)
    return areaKeys.map(key => ({
        key,
        name: t(`tools.sg-address-generator.areas.${config.region}.${key}`)
    }))
})

// 新加坡街道名称
const sgStreets = [
    'Orchard Road', 'Tanglin Road', 'Holland Road', 'Bukit Timah Road', 'Dunearn Road',
    'Clementi Road', 'Commonwealth Avenue', 'Alexandra Road', 'Tiong Bahru Road', 'Havelock Road',
    'Bedok North Road', 'Bedok South Road', 'Changi Road', 'Tampines Avenue', 'Pasir Ris Drive',
    'Ang Mo Kio Avenue', 'Bishan Street', 'Serangoon Avenue', 'Hougang Avenue', 'Sengkang East Road',
    'Punggol Central', 'Jurong East Avenue', 'Jurong West Street', 'Bukit Batok Street', 'Choa Chu Kang Avenue',
    'Woodlands Avenue', 'Sembawang Road', 'Yishun Avenue', 'Upper Thomson Road', 'Marymount Road'
]

// 新加坡大楼名称
const buildingNames = [
    'Marina Bay Sands', 'Raffles City', 'Suntec City', 'VivoCity', 'ION Orchard',
    'Ngee Ann City', 'Paragon', 'Takashimaya', 'Plaza Singapura', 'Junction 8',
    'Lot One', 'Northpoint City', 'Causeway Point', 'Jurong Point', 'Bedok Mall',
    'Tampines Mall', 'White Sands', 'Compass One', 'Hougang Mall', 'Serangoon Nex'
]

// HDB小镇名称
const hdbTowns = [
    'Ang Mo Kio', 'Bedok', 'Bishan', 'Bukit Batok', 'Bukit Merah', 'Choa Chu Kang',
    'Clementi', 'Geylang', 'Hougang', 'Jurong East', 'Jurong West', 'Kallang',
    'Marine Parade', 'Pasir Ris', 'Punggol', 'Queenstown', 'Sembawang', 'Sengkang',
    'Serangoon', 'Tampines', 'Toa Payoh', 'Woodlands', 'Yishun'
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

// 生成新加坡NRIC/FIN号码
function generateSGIdCard() {
    // 新加坡身份证格式：S/T/F/G + 7位数字 + 校验字母
    const prefixLetters = 'STFG'
    const prefix = faker.helpers.arrayElement(prefixLetters.split(''))
    const serial = faker.string.numeric(7)
    
    // 计算校验码
    const weights = [2, 7, 6, 5, 4, 3, 2]
    let sum = 0
    const prefixValue = prefix === 'S' || prefix === 'F' ? 0 : 4
    
    for (let i = 0; i < 7; i++) {
        sum += parseInt(serial[i]) * weights[i]
    }
    sum += prefixValue
    
    const checkLetters = 'ABCDEFGHIZJ'
    const checkLetter = checkLetters[sum % 11]
    
    return {
        number: `${prefix}${serial}${checkLetter}`,
        prefixLetter: prefix,
        serialNumber: serial,
        checkLetter: checkLetter
    }
}

// 生成新加坡邮政编码（6位数字）
function generatePostalCode() {
    const prefix = faker.number.int({ min: 1, max: 80 }).toString().padStart(2, '0')
    const suffix = faker.string.numeric(4)
    return prefix + suffix
}

// 生成新加坡地址
function generateAddress() {
    const regionObj = config.region 
        ? regions.value.find(r => r.code === config.region)
        : faker.helpers.arrayElement(regions.value)
    const regionName = regionObj ? regionObj.name : t('tools.sg-address-generator.regions.CR')
    
    const areaName = config.area || (config.region && filteredAreas.value.length > 0
        ? faker.helpers.arrayElement(filteredAreas.value).name
        : t('tools.sg-address-generator.areas.CR.orchard'))
    
    const street = faker.helpers.arrayElement(sgStreets)
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const postalCode = generatePostalCode()
    
    let fullAddress = ''
    let building = ''
    let unit = ''
    
    switch (config.addressType) {
        case 'residential':
            building = faker.helpers.arrayElement(buildingNames)
            const floor = faker.number.int({ min: 1, max: 40 })
            unit = `#${floor.toString().padStart(2, '0')}-${faker.number.int({ min: 1, max: 200 }).toString().padStart(3, '0')}`
            fullAddress = `${houseNumber} ${street}, ${building}, ${unit}, Singapore ${postalCode}`
            break
        case 'commercial':
            building = faker.helpers.arrayElement(buildingNames)
            const comFloor = faker.number.int({ min: 1, max: 20 })
            unit = `#${comFloor.toString().padStart(2, '0')}-${faker.number.int({ min: 1, max: 50 }).toString().padStart(2, '0')}`
            fullAddress = `${houseNumber} ${street}, ${building}, ${unit}, Singapore ${postalCode}`
            break
        case 'hdb':
            const hdbTown = faker.helpers.arrayElement(hdbTowns)
            building = `${hdbTown} ${faker.helpers.arrayElement(['Ave', 'Street', 'Drive'])} ${faker.number.int({ min: 1, max: 10 })}`
            const hdbBlock = faker.number.int({ min: 1, max: 900 })
            const hdbFloor = faker.number.int({ min: 1, max: 25 })
            unit = `#${hdbFloor.toString().padStart(2, '0')}-${faker.number.int({ min: 1, max: 150 }).toString().padStart(3, '0')}`
            fullAddress = `Blk ${hdbBlock} ${building}, ${unit}, Singapore ${postalCode}`
            break
        case 'condo':
            const condoNames = ['The Bayshore', 'Costa del Sol', 'Cote d\'Azur', 'The Sea View', 'Meyer House', 'The Makena', 'Costa Rhu', 'Camelot']
            building = faker.helpers.arrayElement(condoNames)
            const condoFloor = faker.number.int({ min: 1, max: 30 })
            unit = `#${condoFloor.toString().padStart(2, '0')}-${faker.number.int({ min: 1, max: 100 }).toString().padStart(2, '0')}`
            fullAddress = `${houseNumber} ${street}, ${building}, ${unit}, Singapore ${postalCode}`
            break
        default:
            building = faker.helpers.arrayElement(buildingNames)
            fullAddress = `${houseNumber} ${street}, ${building}, Singapore ${postalCode}`
    }
    
    return {
        street,
        houseNumber: houseNumber.toString(),
        building,
        unit,
        postalCode,
        area: areaName,
        region: regionName,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 新加坡常见姓名
    const surnames = ['Tan', 'Lim', 'Lee', 'Ng', 'Ong', 'Wong', 'Goh', 'Chua', 'Chan', 'Koh', 'Teo', 'Ang', 'Yeo', 'Tay', 'Ho', 'Low', 'Toh', 'Sim', 'Chong', 'Chia']
    const givenNames = ['Wei Ming', 'Siew Hoon', 'David', 'Sarah', 'Jun Wei', 'Pei Lin', 'Kenneth', 'Rachel', 'Jin Long', 'Mei Ling', 'Christopher', 'Amanda', 'Zhi Wei', 'Hui Min', 'Benjamin', 'Nicole', 'Kai Jie', 'Yu Ting', 'Jia Wen', 'Xin Yi']
    
    const surname = faker.helpers.arrayElement(surnames)
    const givenName = faker.helpers.arrayElement(givenNames)
    const fullName = `${givenName} ${surname}`
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    // 新加坡种族
    const races = [
        t('tools.sg-address-generator.raceChinese'),
        t('tools.sg-address-generator.raceMalay'),
        t('tools.sg-address-generator.raceIndian'),
        t('tools.sg-address-generator.raceOthers')
    ]
    const raceWeights = [0.74, 0.13, 0.09, 0.04]
    const race = faker.helpers.weightedArrayElement(races.map((r, i) => ({ value: r, weight: raceWeights[i] })))

    return {
        fullName,
        gender: gender === 'male' ? t('tools.sg-address-generator.genderMale') : t('tools.sg-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('en-SG'),
        race
    }
}

// 生成联系方式
function generateContact() {
    // 新加坡电话：+65开头，8位数字
    const phonePrefix = faker.helpers.arrayElement(['8', '9'])
    const phoneNumber = phonePrefix + faker.string.numeric(7)
    const phone = `+65 ${phoneNumber.substring(0, 4)} ${phoneNumber.substring(4)}`
    
    return {
        phone,
        areaCode: '65',
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
    const jobTitles = ['Software Engineer', 'Marketing Manager', 'Sales Executive', 'Teacher', 'Nurse', 'Accountant', 'Designer', 'Consultant', 'Doctor', 'Lawyer']
    const industries = ['Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Real Estate', 'Hospitality']
    const companySizes = ['Small (1-50)', 'Medium (51-200)', 'Large (201-1000)', 'Enterprise (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `SGD ${faker.number.int({ min: 3000, max: 15000 }).toLocaleString()}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.sg-address-generator.employmentFullTime') 
            : t('tools.sg-address-generator.employmentPartTime')
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        alert(t('tools.sg-address-generator.invalidQuantity'))
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
                item.idCard = generateSGIdCard()
            }
            
            generatedData.value.push(item)
            expandedItems.value[i] = true
        }
        isGenerating.value = false
    }, 100)
}

// 加载示例
function loadSample() {
    config.region = 'CR'
    config.area = t('tools.sg-address-generator.areas.CR.orchard')
    config.addressType = 'residential'
    config.includeIdentity = true
    config.includeContact = true
    config.includeCreditCard = true
    config.includeCareer = true
    config.includeIdCard = true
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
    alert(t('tools.sg-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `sg-address-${idx + 1}.json`
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
    link.download = 'sg-addresses.json'
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
            row[t('tools.sg-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.sg-address-generator.csv.street')] = item.address.street
            row[t('tools.sg-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.sg-address-generator.csv.building')] = item.address.building
            row[t('tools.sg-address-generator.csv.postalCode')] = item.address.postalCode
        }
        if (item.identity) {
            row[t('tools.sg-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.sg-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.sg-address-generator.csv.age')] = item.identity.age
            row[t('tools.sg-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.sg-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.sg-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.sg-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.sg-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.sg-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'sg-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 区改变
function onRegionChange() {
    config.area = ''
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
