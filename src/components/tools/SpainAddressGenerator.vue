<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.spain-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.spain-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.spain-address-generator.selectRegion') }}</label>
                            <select v-model="config.region"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.spain-address-generator.allRegions') }}</option>
                                <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.spain-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.spain-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.spain-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.spain-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.spain-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.spain-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.spain-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.spain-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.spain-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.spain-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.spain-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.spain-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.spain-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.spain-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.spain-address-generator.generating') : $t('tools.spain-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.spain-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.spain-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.spain-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.spain-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.spain-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.spain-address-generator.collapse') : $t('tools.spain-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.spain-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.spain-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.spain-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.floorLabel') }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.regionLabel') }}：</span> {{ item.address.region }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.postalCode') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.spain-address-generator.dniNumber') }}：</span> {{ item.idCard.dni }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.spain-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.spain-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.spain-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.spain-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.spain-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.spain-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <SpainAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import SpainAddressGeneratorArticle from './SpainAddressGeneratorArticle.vue'
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    region: '',
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

// 西班牙自治区
const regions = computed(() => [
    { code: 'Andalucía', name: t('tools.spain-address-generator.regions.Andalucía') },
    { code: 'Aragón', name: t('tools.spain-address-generator.regions.Aragón') },
    { code: 'Asturias', name: t('tools.spain-address-generator.regions.Asturias') },
    { code: 'Islas Baleares', name: t('tools.spain-address-generator.regions.Islas Baleares') },
    { code: 'Canarias', name: t('tools.spain-address-generator.regions.Canarias') },
    { code: 'Cantabria', name: t('tools.spain-address-generator.regions.Cantabria') },
    { code: 'Castilla-La Mancha', name: t('tools.spain-address-generator.regions.Castilla-La Mancha') },
    { code: 'Castilla y León', name: t('tools.spain-address-generator.regions.Castilla y León') },
    { code: 'Cataluña', name: t('tools.spain-address-generator.regions.Cataluña') },
    { code: 'Extremadura', name: t('tools.spain-address-generator.regions.Extremadura') },
    { code: 'Galicia', name: t('tools.spain-address-generator.regions.Galicia') },
    { code: 'La Rioja', name: t('tools.spain-address-generator.regions.La Rioja') },
    { code: 'Comunidad de Madrid', name: t('tools.spain-address-generator.regions.Comunidad de Madrid') },
    { code: 'Región de Murcia', name: t('tools.spain-address-generator.regions.Región de Murcia') },
    { code: 'Comunidad Foral de Navarra', name: t('tools.spain-address-generator.regions.Comunidad Foral de Navarra') },
    { code: 'País Vasco', name: t('tools.spain-address-generator.regions.País Vasco') },
    { code: 'Comunidad Valenciana', name: t('tools.spain-address-generator.regions.Comunidad Valenciana') },
    { code: 'Ceuta', name: t('tools.spain-address-generator.regions.Ceuta') },
    { code: 'Melilla', name: t('tools.spain-address-generator.regions.Melilla') }
])

// 西班牙街道名称
const spainStreets = [
    'Calle Mayor', 'Calle Real', 'Calle de Alcalá', 'Gran Vía', 'Calle de Serrano',
    'Paseo del Prado', 'Calle de Goya', 'Calle de Velázquez', 'Calle de Preciados', 'Calle de Fuencarral',
    'Carrer de Mallorca', 'Carrer de Balmes', 'Avinguda Diagonal', 'Passeig de Gràcia', 'Rambla de Catalunya',
    'Calle Larios', 'Calle Sierpes', 'Calle Marqués de Larios', 'Puerta del Sol', 'Calle de Toledo'
]

// 西班牙省份邮编前缀
const postalCodePrefixes = {
    'Andalucía': ['41', '29', '14', '23', '04', '18', '11', '12'],
    'Aragón': ['50', '44', '22', '28'],
    'Asturias': ['33'],
    'Islas Baleares': ['07'],
    'Canarias': ['38', '35'],
    'Cantabria': ['39'],
    'Castilla-La Mancha': ['45', '13', '02', '19', '42'],
    'Castilla y León': ['47', '40', '24', '09', '49', '21', '34', '05'],
    'Cataluña': ['08', '43', '25', '17', '08'],
    'Extremadura': ['06', '10'],
    'Galicia': ['15', '36', '32', '15'],
    'La Rioja': ['26'],
    'Comunidad de Madrid': ['28'],
    'Región de Murcia': ['30'],
    'Comunidad Foral de Navarra': ['31'],
    'País Vasco': ['48', '20', '01'],
    'Comunidad Valenciana': ['46', '03', '12'],
    'Ceuta': ['51'],
    'Melilla': ['52']
}

onMounted(() => {
    loadSample()
})

// 生成Luhn算法信用卡号
function generateCreditCardNumber(type = 'visa') {
    const prefixes = {
        visa: ['4'],
        mastercard: ['51', '52', '53', '54', '55']
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

// 生成西班牙DNI（8位数字+1字母）
function generateDni() {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE'
    const number = faker.string.numeric(8)
    const index = parseInt(number) % 23
    return number + letters[index]
}

// 生成西班牙地址
function generateAddress() {
    const regionObj = config.region 
        ? regions.value.find(r => r.code === config.region)
        : faker.helpers.arrayElement(regions.value)
    const regionName = regionObj ? regionObj.name : t('tools.spain-address-generator.regions.Comunidad de Madrid')
    const regionCode = regionObj ? regionObj.code : 'Comunidad de Madrid'
    
    const street = faker.helpers.arrayElement(spainStreets)
    const houseNumber = faker.number.int({ min: 1, max: 200 })
    
    // 生成符合自治区的邮政编码
    const prefixes = postalCodePrefixes[regionCode] || ['28']
    const prefix = faker.helpers.arrayElement(prefixes)
    const postalCode = prefix + faker.string.numeric({ length: 3, allowLeadingZeros: true }).slice(0, 3)
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${regionName}`
            break
        case 'commercial':
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${regionName} ${t('tools.spain-address-generator.commercialUnit')}`
            break
        case 'virtual':
            fullAddress = `Apdo. ${faker.number.int({ min: 1, max: 9999 })}, ${postalCode} ${regionName}`
            break
        case 'campus':
            const universities = Object.values(t('tools.spain-address-generator.universities'))
            fullAddress = `${faker.helpers.arrayElement(universities)}, ${postalCode} ${regionName}`
            break
        default:
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${regionName}`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}`,
        building: '',
        floor: '',
        unit: '',
        region: regionName,
        postalCode,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    const spanishSurnames = ['García', 'López', 'Rodríguez', 'Martínez', 'Hernández', 'González', 'Pérez', 'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez', 'Díaz', 'Cruz', 'Morales', 'Reyes', 'Ortiz', 'Gutiérrez', 'Chávez']
    const spanishGivenNames = ['Antonio', 'José', 'Manuel', 'Francisco', 'Juan', 'Pedro', 'Pablo', 'Luis', 'Jorge', 'Alejandro', 'María', 'Carmen', 'Ana', 'Isabel', 'Laura', 'Lucía', 'Sara', 'Paula', 'Elena', 'Claudia']
    
    const surname = faker.helpers.arrayElement(spanishSurnames)
    const givenName = faker.helpers.arrayElement(spanishGivenNames)
    const fullName = `${givenName} ${surname}`
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    return {
        fullName,
        gender: gender === 'male' ? t('tools.spain-address-generator.genderMale') : t('tools.spain-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('es-ES'),
        zodiac: '',
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneNumber = faker.string.numeric(9)
    const phone = `+34 ${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6)}`
    
    return {
        phone,
        phoneType: t('tools.spain-address-generator.phoneTypeMobile'),
        areaCode: '34',
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

// 生成信用卡
function generateCreditCard() {
    const types = ['visa', 'mastercard']
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
    const jobTitles = ['Software Engineer', 'Project Manager', 'Consultant', 'Accountant', 'Marketing Manager', 'Sales Executive', 'Human Resources Manager', 'Financial Analyst', 'Business Analyst', 'Operations Manager']
    const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Construction', 'Transportation']
    const companySizes = ['Small (1-50)', 'Medium (51-200)', 'Large (201-1000)', 'Multinational (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `€${faker.number.int({ min: 20000, max: 55000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.spain-address-generator.employmentFullTime') 
            : t('tools.spain-address-generator.employmentPartTime')
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.spain-address-generator.invalidQuantity'))
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
                item.idCard = {
                    dni: generateDni()
                }
            }
            
            if (config.includeFingerprint) {
                item.fingerprint = {
                    os: faker.helpers.arrayElement(['Windows', 'macOS', 'Linux', 'iOS', 'Android']),
                    browser: faker.helpers.arrayElement(['Chrome', 'Firefox', 'Safari', 'Edge']),
                    userAgent: faker.internet.userAgent(),
                    screenResolution: `${faker.number.int({ min: 1280, max: 3840 })}x${faker.number.int({ min: 720, max: 2160 })}`,
                    timezone: 'Europe/Madrid',
                    guid: faker.string.uuid(),
                    ipAddress: faker.internet.ip(),
                    macAddress: faker.internet.mac(),
                    cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
                }
            }
            
            generatedData.value.push(item)
            expandedItems.value[i] = true
        }
        isGenerating.value = false
    }, 100)
}

// 加载示例
function loadSample() {
    config.region = 'Comunidad de Madrid'
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
    toastRef.value.show(t('tools.spain-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `spain-address-${idx + 1}.json`
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
    link.download = 'spain-addresses.json'
    link.click()
    URL.revokeObjectURL(url)
}

// 导出CSV
function exportCsv() {
    if (generatedData.value.length === 0) return
    
    const rows = []
    
    generatedData.value.forEach((item, idx) => {
        const row = {}
        if (item.address) {
            row[t('tools.spain-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.spain-address-generator.csv.street')] = item.address.street
            row[t('tools.spain-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.spain-address-generator.csv.building')] = item.address.building
            row[t('tools.spain-address-generator.csv.floor')] = item.address.floor
            row[t('tools.spain-address-generator.csv.unit')] = item.address.unit
            row[t('tools.spain-address-generator.csv.region')] = item.address.region
            row[t('tools.spain-address-generator.csv.postalCode')] = item.address.postalCode
        }
        if (item.identity) {
            row[t('tools.spain-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.spain-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.spain-address-generator.csv.age')] = item.identity.age
            row[t('tools.spain-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.spain-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.spain-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.spain-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.spain-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.spain-address-generator.csv.idCardNumber')] = item.idCard.dni
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
    link.download = 'spain-addresses.csv'
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
