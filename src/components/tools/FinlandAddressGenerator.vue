<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.finland-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.finland-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.finland-address-generator.selectRegion') }}</label>
                            <select v-model="config.region" @change="onRegionChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.finland-address-generator.allRegions') }}</option>
                                <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.finland-address-generator.selectMunicipality') }}</label>
                            <select v-model="config.municipality"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.region">
                                <option value="">{{ $t('tools.finland-address-generator.allMunicipalities') }}</option>
                                <option v-for="muni in filteredMunicipalities" :key="muni.key" :value="muni.name">{{ muni.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.finland-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.finland-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.finland-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.finland-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.finland-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.finland-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.finland-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.finland-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.finland-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.finland-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.finland-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.finland-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.finland-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.finland-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.finland-address-generator.generating') : $t('tools.finland-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.finland-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.finland-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.finland-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.finland-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx" class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.finland-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.finland-address-generator.collapse') : $t('tools.finland-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.finland-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.finland-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.finland-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.floorLabel') }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.municipalityLabel') }}：</span> {{ item.address.municipality }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.regionLabel') }}：</span> {{ item.address.region }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.postalCode') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.finland-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">{{ $t('tools.finland-address-generator.copyBtn') }}</button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">{{ $t('tools.finland-address-generator.downloadBtn') }}</button>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.finland-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">{{ $t('tools.finland-address-generator.exportJson') }}</button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">{{ $t('tools.finland-address-generator.exportCsv') }}</button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.finland-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <FinlandAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import FinlandAddressGeneratorArticle from './FinlandAddressGeneratorArticle.vue'
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

const config = reactive({
    region: '',
    municipality: '',
    addressType: 'residential',
    includeIdentity: true,
    includeContact: true,
    includeCreditCard: false,
    includeCareer: false,
    includeIdCard: false,
    includeFingerprint: false,
    quantity: 5
})

const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

const regions = computed(() => [
    { code: 'Uusimaa', name: t('tools.finland-address-generator.regions.Uusimaa') },
    { code: 'Pirkanmaa', name: t('tools.finland-address-generator.regions.Pirkanmaa') },
    { code: 'VarsinaisSuomi', name: t('tools.finland-address-generator.regions.VarsinaisSuomi') },
    { code: 'KeskiSuomi', name: t('tools.finland-address-generator.regions.KeskiSuomi') },
    { code: 'PäijätHäme', name: t('tools.finland-address-generator.regions.PäijätHäme') }
])

const getMunicipalitiesForRegion = (regionCode) => {
    const muniMap = {
        'Uusimaa': ['helsinki', 'espoo', 'vantaa', 'kauniainen', 'järvenpää', 'kerava', 'tuusula', 'nurmijärvi', 'sipoo'],
        'Pirkanmaa': ['tampere', 'Nokia', 'ylöjärvi', 'kangasala', 'lempäälä', 'pirkkala', 'orivesi'],
        'VarsinaisSuomi': ['turku', 'rauma', 'salo', 'pori', 'kaarina', 'raisio', 'naantali'],
        'KeskiSuomi': ['jyväskylä', 'lahti', 'hollola', 'asikkala'],
        'PäijätHäme': ['lahti', 'hollola', 'asikkala', 'pertunmaa', 'hartola']
    }
    return muniMap[regionCode] || []
}

const filteredMunicipalities = computed(() => {
    if (!config.region) return []
    const muniKeys = getMunicipalitiesForRegion(config.region)
    return muniKeys.map(key => ({
        key,
        name: t(`tools.finland-address-generator.municipalitiesData.${config.region}.${key}`)
    }))
})

// 芬兰街道名称
const finlandStreets = [
    'Mannerheimintie', 'Aleksanterinkatu', 'Fredrikinkatu', 'Bulevardi', 'Korkeavuorenkatu',
    'Pohjoisesplanadi', 'Eteläesplanadi', 'Katu', 'Tie', 'Polku',
    'Rantatie', 'Vuorikatu', 'Kirkkokatu', 'Kauppakatu', 'Torikatu',
    'Rauhankatu', 'Vapaudenkatu', 'Itsenäisyydenkatu', 'Tehtaankatu', 'Laivurinkatu'
]

onMounted(() => {
    loadSample()
})

function generateCreditCardNumber(type = 'visa') {
    const prefixes = { visa: ['4'], mastercard: ['51', '52', '53', '54', '55'] }
    const prefix = faker.helpers.arrayElement(prefixes[type] || prefixes.visa)
    let number = prefix
    while (number.length < 15) number += faker.string.numeric(1)
    let sum = 0, isEven = false
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i])
        if (isEven) { digit *= 2; if (digit > 9) digit -= 9 }
        sum += digit; isEven = !isEven
    }
    return number + ((10 - (sum % 10)) % 10)
}

// 生成芬兰个人身份号码 (Henkilötunnus)
function generateHenkilötunnus() {
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const ddmmyy = `${birthDate.getDate().toString().padStart(2, '0')}${(birthDate.getMonth() + 1).toString().padStart(2, '0')}${birthDate.getFullYear().toString().slice(-2)}`
    const century = birthDate.getFullYear() >= 2000 ? 'A' : '-'
    const sequence = faker.number.int({ min: 2, max: 888 }).toString().padStart(3, '0')
    const controlChars = '0123456789ABCDEFHJKLMNPRSTUVWXY'
    const controlIndex = parseInt(ddmmyy + sequence) % 31
    const controlChar = controlChars[controlIndex]
    
    return {
        number: `${ddmmyy}${century}${sequence}${controlChar}`,
        henkilötunnus: `${ddmmyy}${century}${sequence}${controlChar}`,
        serialNumber: faker.string.numeric(6),
        checkDigit: controlChar
    }
}

function generateAddress() {
    const regionObj = config.region ? regions.value.find(r => r.code === config.region) : faker.helpers.arrayElement(regions.value)
    const regionName = regionObj ? regionObj.name : t('tools.finland-address-generator.regions.Uusimaa')
    const muniName = config.municipality || (config.region && filteredMunicipalities.value.length > 0 ? faker.helpers.arrayElement(filteredMunicipalities.value).name : t('tools.finland-address-generator.municipalitiesData.Uusimaa.helsinki'))
    
    const street = faker.helpers.arrayElement(finlandStreets)
    const houseNumber = faker.number.int({ min: 1, max: 100 })
    const postalCode = faker.string.numeric(5).replace(/(\d{2})(\d{3})/, '$1 $2')
    
    const floor = faker.number.int({ min: 0, max: 8 })
    const unit = floor > 0 ? `${faker.number.int({ min: 1, max: 20 })}` : ''
    
    let fullAddress = ''
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${street} ${houseNumber}${floor > 0 ? `, ${floor}. krs ${unit}` : ''}, ${postalCode} ${muniName}`
            break
        case 'commercial':
            fullAddress = `${street} ${houseNumber}${floor > 0 ? `, ${floor}. krs ${unit}` : ''}, ${postalCode} ${muniName} ${t('tools.finland-address-generator.commercialUnit')}`
            break
        case 'virtual':
            fullAddress = `PB ${faker.number.int({ min: 1, max: 9999 })}, ${postalCode} ${muniName}`
            break
        case 'campus':
            fullAddress = `Helsingin yliopisto, ${t('tools.finland-address-generator.studentDormitory')}, ${postalCode} ${muniName}`
            break
        default:
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${muniName}`
    }
    
    return { street, houseNumber: `${houseNumber}`, building: '', floor: floor > 0 ? `${floor}` : '', unit, municipality: muniName, region: regionName, postalCode, fullAddress }
}

function generateIdentity() {
    const gender = faker.person.sexType()
    const finnishSurnames = ['Korhonen', 'Virtanen', 'Mäkinen', 'Nieminen', 'Hämäläinen', 'Laine', 'Heikkinen', 'Koskinen', 'Järvinen', 'Lehtonen', 'Lehtinen', 'Saarinen', 'Salonen', 'Niemi', 'Heikkilä', 'Salonen', 'Tuominen', 'Rantanen', 'Johansson', 'Miettinen']
    const finnishGivenNames = ['Mikko', 'Jari', 'Matti', 'Petri', 'Juha', 'Antti', 'Jukka', 'Marko', 'Timo', 'Heikki', 'Maria', 'Anna', 'Heli', 'Minna', 'Katariina', 'Riitta', 'Leena', 'Sari', 'Päivi', 'Johanna']
    
    const surname = faker.helpers.arrayElement(finnishSurnames)
    const givenName = faker.helpers.arrayElement(finnishGivenNames)
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    return {
        fullName: `${givenName} ${surname}`,
        gender: gender === 'male' ? t('tools.finland-address-generator.genderMale') : t('tools.finland-address-generator.genderFemale'),
        age, birthDate: birthDate.toLocaleDateString('fi-FI'), zodiac: '', height: `${faker.number.int({ min: 150, max: 200 })} cm`, weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

function generateContact() {
    const phoneNumber = faker.string.numeric(10)
    return {
        phone: `+358 ${phoneNumber.substring(0, 2)} ${phoneNumber.substring(2, 5)} ${phoneNumber.substring(5, 7)} ${phoneNumber.substring(7)}`,
        phoneType: t('tools.finland-address-generator.phoneTypeMobile'), areaCode: '358', email: faker.internet.email(), tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

function generateCreditCard() {
    const types = ['visa', 'mastercard']
    const type = faker.helpers.arrayElement(types)
    const number = generateCreditCardNumber(type)
    return {
        type: type.charAt(0).toUpperCase() + type.slice(1),
        number: number.replace(/(\d{4})/g, '$1 ').trim(),
        expiry: `${faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')}/${(new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })).toString().slice(-2)}`,
        cvv: faker.string.numeric(3), bankBin: number.substring(0, 6)
    }
}

function generateCareer() {
    const jobTitles = ['Ohjelmoija', 'Projektipäällikkä', 'Insinööri', 'Tutkija', 'Lääkäri', 'Oikeusavustaja', 'Kirjanpitäjä', 'Suunnittelija', 'Konsultti', 'Opettaja']
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `${faker.number.int({ min: 35000, max: 80000 })} €`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(['Pieni (1-50)', 'Keskikoko (51-200)', 'Suuri (201-1000)']),
        industry: faker.helpers.arrayElement(['Teknologia', 'Terveys', 'Koulutus', 'Rahoitus', 'Kauppa', 'Teollisuus']),
        employmentStatus: faker.helpers.arrayElement(['full-time', 'part-time']) === 'full-time' ? t('tools.finland-address-generator.employmentFullTime') : t('tools.finland-address-generator.employmentPartTime')
    }
}

function generateFingerprint() {
    const os = faker.helpers.arrayElement(['Windows', 'macOS', 'Linux', 'iOS', 'Android'])
    return {
        os, osVersion: faker.helpers.arrayElement(['10', '11', '14.0', 'Ubuntu 22.04']),
        browser: faker.helpers.arrayElement(['Chrome', 'Firefox', 'Safari', 'Edge']),
        userAgent: faker.internet.userAgent(),
        screenResolution: `${faker.number.int({ min: 1280, max: 3840 })}x${faker.number.int({ min: 720, max: 2160 })}`,
        timezone: 'Europe/Helsinki', guid: faker.string.uuid(), ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(), cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

function generateData() {
    if (config.quantity < 1 || config.quantity > 100) { toastRef.value.show(t('tools.finland-address-generator.invalidQuantity')); return }
    isGenerating.value = true; generatedData.value = []; expandedItems.value = {}
    setTimeout(() => {
        for (let i = 0; i < config.quantity; i++) {
            const item = { address: generateAddress() }
            if (config.includeIdentity) item.identity = generateIdentity()
            if (config.includeContact) item.contact = generateContact()
            if (config.includeCreditCard) item.creditCard = generateCreditCard()
            if (config.includeCareer) item.career = generateCareer()
            if (config.includeIdCard) item.idCard = generateHenkilötunnus()
            if (config.includeFingerprint) item.fingerprint = generateFingerprint()
            generatedData.value.push(item); expandedItems.value[i] = true
        }
        isGenerating.value = false
    }, 100)
}

function loadSample() {
    config.region = 'Uusimaa'; config.municipality = t('tools.finland-address-generator.municipalitiesData.Uusimaa.helsinki')
    config.addressType = 'residential'; config.includeIdentity = true; config.includeContact = true
    config.includeCreditCard = true; config.includeCareer = true; config.includeIdCard = true
    config.includeFingerprint = true; config.quantity = 3; generateData()
}

function clearData() { generatedData.value = []; expandedItems.value = {} }
function toggleExpand(idx) { expandedItems.value[idx] = !expandedItems.value[idx] }
function copyItem(item) { navigator.clipboard.writeText(JSON.stringify(item, null, 2)); toastRef.value.show(t('tools.finland-address-generator.copySuccess')) }
function exportItem(item, idx) { const blob = new Blob([JSON.stringify(item, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `finland-address-${idx + 1}.json`; link.click() }
function exportJson() { const blob = new Blob([JSON.stringify(generatedData.value, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'finland-addresses.json'; link.click() }
function exportCsv() {
    if (generatedData.value.length === 0) return
    const rows = generatedData.value.map(item => {
        const row = {}
        if (item.address) { row['Address'] = item.address.fullAddress; row['Street'] = item.address.street; row['Municipality'] = item.address.municipality; row['PostalCode'] = item.address.postalCode }
        if (item.identity) { row['Name'] = item.identity.fullName; row['Gender'] = item.identity.gender; row['Age'] = item.identity.age }
        if (item.contact) { row['Phone'] = item.contact.phone; row['Email'] = item.contact.email }
        if (item.idCard) { row['Henkilötunnus'] = item.idCard.number }
        return row
    })
    const headers = [...new Set(rows.flatMap(r => Object.keys(r)))]
    const csv = headers.join(',') + '\n' + rows.map(row => headers.map(h => `"${(row[h] || '').toString().replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'finland-addresses.csv'; link.click()
}
function onRegionChange() { config.municipality = '' }
</script>

<style scoped>
.btn { @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center; }
.btn-sm { @apply px-3 py-1 text-sm; }
.btn-primary { @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed; }
.btn-secondary { @apply bg-gray-600 hover:bg-gray-700 text-white; }
@media (max-width: 768px) { .btn { @apply px-3 py-1.5 text-sm; } .btn-sm { @apply px-2 py-1 text-xs; } }
</style>