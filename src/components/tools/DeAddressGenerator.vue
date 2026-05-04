<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.de-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.de-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.de-address-generator.selectState') }}</label>
                            <select v-model="config.state" @change="onStateChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.de-address-generator.allStates') }}</option>
                                <option v-for="state in states" :key="state.code" :value="state.code">{{ state.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.de-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.state">
                                <option value="">{{ $t('tools.de-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city" :value="city">{{ city }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.de-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.de-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.de-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="pobox" />
                            <span>{{ $t('tools.de-address-generator.addressTypePoBox') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.de-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.de-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.de-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.de-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.de-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.de-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.de-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.de-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.de-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.de-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.de-address-generator.generating') : $t('tools.de-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.de-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.de-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.de-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.de-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.de-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.de-address-generator.collapse') : $t('tools.de-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.de-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.de-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.de-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.postalCodeLabel') }}：</span> {{ item.address.postalCode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.cityLabel') }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.stateLabel') }}：</span> {{ item.address.state }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.de-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.de-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.de-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.de-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.de-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.de-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.de-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <DeAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import DeAddressGeneratorArticle from './DeAddressGeneratorArticle.vue'

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
    includeIdCard: false,
    includeFingerprint: false,
    quantity: 5
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 德国16个州
const states = computed(() => [
    { code: 'BW', name: t('tools.de-address-generator.states.BW') },
    { code: 'BY', name: t('tools.de-address-generator.states.BY') },
    { code: 'BE', name: t('tools.de-address-generator.states.BE') },
    { code: 'BB', name: t('tools.de-address-generator.states.BB') },
    { code: 'HB', name: t('tools.de-address-generator.states.HB') },
    { code: 'HH', name: t('tools.de-address-generator.states.HH') },
    { code: 'HE', name: t('tools.de-address-generator.states.HE') },
    { code: 'MV', name: t('tools.de-address-generator.states.MV') },
    { code: 'NI', name: t('tools.de-address-generator.states.NI') },
    { code: 'NW', name: t('tools.de-address-generator.states.NW') },
    { code: 'RP', name: t('tools.de-address-generator.states.RP') },
    { code: 'SL', name: t('tools.de-address-generator.states.SL') },
    { code: 'SN', name: t('tools.de-address-generator.states.SN') },
    { code: 'ST', name: t('tools.de-address-generator.states.ST') },
    { code: 'SH', name: t('tools.de-address-generator.states.SH') },
    { code: 'TH', name: t('tools.de-address-generator.states.TH') }
])

// 各州主要城市
const stateCities = {
    'BW': ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Heilbronn', 'Ulm', 'Pforzheim', 'Reutlingen', 'Esslingen'],
    'BY': ['München', 'Nürnberg', 'Augsburg', 'Regensburg', 'Würzburg', 'Ingolstadt', 'Fürth', 'Erlangen', 'Bayreuth', 'Bamberg'],
    'BE': ['Berlin'],
    'BB': ['Potsdam', 'Cottbus', 'Brandenburg', 'Frankfurt (Oder)', 'Oranienburg'],
    'HB': ['Bremen', 'Bremerhaven'],
    'HH': ['Hamburg'],
    'HE': ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt', 'Offenbach', 'Hanau', 'Gießen', 'Marburg', 'Fulda', 'Rüsselsheim'],
    'MV': ['Rostock', 'Schwerin', 'Neubrandenburg', 'Greifswald', 'Stralsund', 'Wismar'],
    'NI': ['Hannover', 'Braunschweig', 'Wolfsburg', 'Osnabrück', 'Göttingen', 'Oldenburg', 'Salzgitter', 'Hildesheim', 'Wilhelmshaven'],
    'NW': ['Köln', 'Düsseldorf', 'Dortmund', 'Essen', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mülheim', 'Gelsenkirchen', 'Aachen', 'Mönchengladbach'],
    'RP': ['Mainz', 'Ludwigshafen', 'Koblenz', 'Trier', 'Kaiserslautern', 'Worms', 'Neuwied', 'Speyer'],
    'SL': ['Saarbrücken', 'Neunkirchen', 'Völklingen', 'Homburg', 'St. Wendel'],
    'SN': ['Leipzig', 'Dresden', 'Chemnitz', 'Zwickau', 'Plauen', 'Freital', 'Görlitz'],
    'ST': ['Magdeburg', 'Halle (Saale)', 'Dessau-Roßlau', 'Lutherstadt Wittenberg', 'Stendal', 'Halberstadt'],
    'SH': ['Kiel', 'Lübeck', 'Flensburg', 'Neumünster', 'Norderstedt', 'Elmshorn'],
    'TH': ['Erfurt', 'Jena', 'Gera', 'Weimar', 'Gotha', 'Eisenach', 'Suhl']
}

const filteredCities = computed(() => {
    if (!config.state) return []
    return stateCities[config.state] || []
})

// 德国街道名称
const germanStreets = [
    'Hauptstraße', 'Bahnhofstraße', 'Schulstraße', 'Gartenstraße', 'Kirchstraße',
    'Lindenstraße', 'Dorfstraße', 'Bergstraße', 'Ringstraße', 'Schillerstraße',
    'Goethestraße', 'Waldstraße', 'Birkenweg', 'Mühlweg', 'Wiesenweg',
    'Sonnenstraße', 'Rathausstraße', 'Marktstraße', 'Parkstraße', 'Buchenweg',
    'Tannenweg', 'Ahornweg', 'Feldstraße', 'Wasserstraße', 'Mühlenstraße',
    'Breite Straße', 'Lange Straße', 'Neue Straße', 'Alte Straße', 'Berliner Straße',
    'Münchner Straße', 'Hamburger Straße', 'Frankfurter Straße', 'Kölner Straße',
    'Bismarckstraße', 'Friedrichstraße', 'Wilhelmstraße', 'Königstraße', 'Kaiserstraße'
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

// 生成德国身份证号 (Personalausweis格式简化版)
function generateDEIdCard() {
    // 德国身份证格式：10位数字
    const number = faker.string.numeric(10)
    return {
        number,
        type: 'Personalausweis'
    }
}

// 生成德国邮政编码
function generatePostalCode(state) {
    const postalCodeRanges = {
        'BW': ['69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '88'],
        'BY': ['80', '81', '82', '83', '84', '85', '86', '87', '89', '90', '91', '92', '93', '94', '95', '96', '97'],
        'BE': ['10', '11', '12', '13', '14'],
        'BB': ['01', '02', '03', '04', '15', '19', '30', '39'],
        'HB': ['27', '28'],
        'HH': ['20', '21', '22'],
        'HE': ['35', '36', '60', '61', '63', '64', '65'],
        'MV': ['17', '18', '19'],
        'NI': ['21', '26', '27', '29', '30', '31', '37', '38', '49'],
        'NW': ['32', '33', '40', '41', '42', '44', '45', '46', '47', '48', '50', '51', '52', '53', '54', '55', '57', '58', '59'],
        'RP': ['54', '55', '56', '60', '65', '66', '67'],
        'SL': ['66'],
        'SN': ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        'ST': ['06', '38', '39'],
        'SH': ['22', '23', '24', '25'],
        'TH': ['07', '36', '37', '99']
    }
    const prefix = faker.helpers.arrayElement(postalCodeRanges[state] || ['10'])
    return prefix + faker.string.numeric(3)
}

// 生成德国地址
function generateAddress() {
    const stateObj = config.state 
        ? states.value.find(s => s.code === config.state)
        : faker.helpers.arrayElement(states.value)
    const stateName = stateObj ? stateObj.name : t('tools.de-address-generator.states.BE')
    const stateCode = stateObj ? stateObj.code : 'BE'
    
    const cityName = config.city || (config.state && filteredCities.value.length > 0
        ? faker.helpers.arrayElement(filteredCities.value)
        : faker.helpers.arrayElement(stateCities[stateCode] || ['Berlin']))
    
    const street = faker.helpers.arrayElement(germanStreets)
    const houseNumber = faker.number.int({ min: 1, max: 200 })
    const postalCode = generatePostalCode(stateCode)
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${cityName}, ${stateName}`
            break
        case 'commercial':
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${cityName}, ${stateName} (${t('tools.de-address-generator.commercialArea')})`
            break
        case 'pobox':
            fullAddress = `Postfach ${faker.string.numeric(6)}, ${postalCode} ${cityName}, ${stateName}`
            break
        case 'campus':
            const universities = [
                t('tools.de-address-generator.universities.TUM'),
                t('tools.de-address-generator.universities.LMU'),
                t('tools.de-address-generator.universities.HU'),
                t('tools.de-address-generator.universities.TU'),
                t('tools.de-address-generator.universities.UniHeidelberg')
            ]
            const campusTypes = [t('tools.de-address-generator.studentDormitory'), t('tools.de-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)}, ${postalCode} ${cityName}`
            break
        default:
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${cityName}, ${stateName}`
    }
    
    return {
        street,
        houseNumber: houseNumber.toString(),
        postalCode,
        city: cityName,
        state: stateName,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 使用德语姓名
    const germanFirstNamesMale = ['Hans', 'Klaus', 'Peter', 'Michael', 'Thomas', 'Andreas', 'Stefan', 'Christian', 'Markus', 'Martin', 'Alexander', 'Philipp', 'Sebastian', 'Maximilian', 'Felix']
    const germanFirstNamesFemale = ['Maria', 'Anna', 'Lisa', 'Sophie', 'Julia', 'Laura', 'Sarah', 'Emma', 'Hannah', 'Lena', 'Anna', 'Marie', 'Sophia', 'Leonie', 'Mia']
    const germanSurnames = ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Braun', 'Zimmermann', 'Krüger', 'Hofmann', 'Hartmann', 'Lange']
    
    const firstName = gender === 'male' 
        ? faker.helpers.arrayElement(germanFirstNamesMale)
        : faker.helpers.arrayElement(germanFirstNamesFemale)
    const lastName = faker.helpers.arrayElement(germanSurnames)
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    return {
        fullName: `${firstName} ${lastName}`,
        firstName,
        lastName,
        gender: gender === 'male' ? t('tools.de-address-generator.genderMale') : t('tools.de-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('de-DE'),
        height: `${faker.number.int({ min: 160, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 50, max: 100 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 德国电话：+49开头，手机以15/16/17开头，座机根据城市
    let phoneNumber
    if (phoneType === 'mobile') {
        const mobilePrefix = faker.helpers.arrayElement(['15', '16', '17'])
        phoneNumber = `+49 ${mobilePrefix}${faker.string.numeric(3)} ${faker.string.numeric(6)}`
    } else {
        const landlinePrefix = faker.string.numeric(2) + faker.string.numeric({ length: { min: 1, max: 2 } })
        phoneNumber = `+49 ${landlinePrefix} ${faker.string.numeric(7)}`
    }
    
    return {
        phone: phoneNumber,
        phoneType: phoneType === 'mobile' ? t('tools.de-address-generator.phoneTypeMobile') : t('tools.de-address-generator.phoneTypeLandline'),
        areaCode: '49',
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.de`
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
    const jobTitles = ['软件工程师', '市场经理', '销售代表', '教师', '护士', '会计师', '设计师', '顾问', '医生', '律师']
    const industries = ['科技', '医疗', '教育', '金融', '零售', '制造业', '房地产', '汽车']
    const companySizes = ['小型 (1-50)', '中型 (51-200)', '大型 (201-1000)', '企业 (1000+)']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `€${faker.number.int({ min: 30000, max: 120000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(['全职', '兼职'])
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
        timezone: 'Europe/Berlin',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.de-address-generator.invalidQuantity'))
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
                item.idCard = generateDEIdCard()
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
    config.state = 'BY'
    config.city = 'München'
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
    toastRef.value.show(t('tools.de-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `de-address-${idx + 1}.json`
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
    link.download = 'de-addresses.json'
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
            row[t('tools.de-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.de-address-generator.csv.street')] = item.address.street
            row[t('tools.de-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.de-address-generator.csv.postalCode')] = item.address.postalCode
            row[t('tools.de-address-generator.csv.city')] = item.address.city
            row[t('tools.de-address-generator.csv.state')] = item.address.state
        }
        if (item.identity) {
            row[t('tools.de-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.de-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.de-address-generator.csv.age')] = item.identity.age
            row[t('tools.de-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.de-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.de-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.de-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.de-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.de-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'de-addresses.csv'
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
