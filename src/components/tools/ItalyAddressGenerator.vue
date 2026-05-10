<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.italy-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.italy-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.italy-address-generator.selectRegion') }}</label>
                            <select v-model="config.region"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.italy-address-generator.allRegions') }}</option>
                                <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.italy-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.italy-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.italy-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.italy-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.italy-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.italy-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.italy-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.italy-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.italy-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.italy-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.italy-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.italy-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.italy-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.italy-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.italy-address-generator.generating') : $t('tools.italy-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.italy-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.italy-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.italy-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.italy-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.italy-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.italy-address-generator.collapse') : $t('tools.italy-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.italy-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.italy-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.italy-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.floorLabel') }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.regionLabel') }}：</span> {{ item.address.region }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.postalCode') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.italy-address-generator.codiceFiscale') }}：</span> {{ item.idCard.codiceFiscale }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.italy-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.italy-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.italy-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.italy-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.italy-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.italy-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <ItalyAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import ItalyAddressGeneratorArticle from './ItalyAddressGeneratorArticle.vue'
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

// 意大利大区
const regions = computed(() => [
    { code: 'Lombardia', name: t('tools.italy-address-generator.regions.Lombardia') },
    { code: 'Lazio', name: t('tools.italy-address-generator.regions.Lazio') },
    { code: 'Campania', name: t('tools.italy-address-generator.regions.Campania') },
    { code: 'Sicilia', name: t('tools.italy-address-generator.regions.Sicilia') },
    { code: 'Veneto', name: t('tools.italy-address-generator.regions.Veneto') },
    { code: 'Emilia-Romagna', name: t('tools.italy-address-generator.regions.Emilia-Romagna') },
    { code: 'Piemonte', name: t('tools.italy-address-generator.regions.Piemonte') },
    { code: 'Toscana', name: t('tools.italy-address-generator.regions.Toscana') },
    { code: 'Puglia', name: t('tools.italy-address-generator.regions.Puglia') },
    { code: 'Calabria', name: t('tools.italy-address-generator.regions.Calabria') },
    { code: 'Sardegna', name: t('tools.italy-address-generator.regions.Sardegna') },
    { code: 'Friuli Venezia Giulia', name: t('tools.italy-address-generator.regions.Friuli Venezia Giulia') },
    { code: 'Liguria', name: t('tools.italy-address-generator.regions.Liguria') },
    { code: 'Marche', name: t('tools.italy-address-generator.regions.Marche') },
    { code: 'Abruzzo', name: t('tools.italy-address-generator.regions.Abruzzo') },
    { code: 'Molise', name: t('tools.italy-address-generator.regions.Molise') },
    { code: 'Basilicata', name: t('tools.italy-address-generator.regions.Basilicata') },
    { code: 'Umbria', name: t('tools.italy-address-generator.regions.Umbria') },
    { code: "Valle d'Aosta", name: t("tools.italy-address-generator.regions.Valle d'Aosta") },
    { code: 'Trentino-Alto Adige', name: t('tools.italy-address-generator.regions.Trentino-Alto Adige') }
])

// 意大利街道名称
const italyStreets = [
    'Via Roma', 'Via Milano', 'Via Napoli', 'Via Torino', 'Via Firenze',
    'Corso Vittorio Emanuele', 'Via Garibaldi', 'Via Mazzini', 'Via Dante', 'Via Verdi',
    'Via Cavour', 'Piazza della Repubblica', 'Via XX Settembre', 'Via Umberto I', 'Via Europa',
    'Largo Carducci', 'Via Manzoni', 'Piazza del Duomo', 'Via Montenapoleone', 'Via della Spiga'
]

// 意大利省份前缀（用于邮编）
const postalCodePrefixes = {
    'Lombardia': ['20', '21', '22', '23', '24', '25', '26', '27'],
    'Lazio': ['00', '01', '02', '03', '04'],
    'Campania': ['80', '81', '82', '83', '84'],
    'Sicilia': ['90', '91', '92', '93', '94', '95', '96'],
    'Veneto': ['30', '31', '32', '33', '34', '35', '36', '37'],
    'Emilia-Romagna': ['40', '41', '42', '43', '44', '45', '46', '47', '48'],
    'Piemonte': ['10', '11', '12', '13', '14', '15'],
    'Toscana': ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
    'Puglia': ['70', '71', '72', '73', '74', '75', '76'],
    'Calabria': ['87', '88', '89'],
    'Sardegna': ['07', '08', '09'],
    'Friuli Venezia Giulia': ['33', '34'],
    'Liguria': ['16', '17', '18', '19'],
    'Marche': ['60', '61', '62', '63', '64'],
    'Abruzzo': ['64', '65', '66', '67'],
    'Molise': ['86', '87'],
    'Basilicata': ['85'],
    'Umbria': ['05', '06'],
    "Valle d'Aosta": ['11'],
    'Trentino-Alto Adige': ['38', '39']
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

// 生成意大利Codice Fiscale（16位）
function generateCodiceFiscale() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const result = []
    // 前6位：姓氏辅音+名字辅音
    for (let i = 0; i < 6; i++) {
        result.push(faker.helpers.arrayElement(letters.split('')))
    }
    // 第7-10位：出生年份后两位
    const birthYear = faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).getFullYear().toString().slice(-2)
    result.push(birthYear)
    // 第11位：出生月份对应的字母
    const monthLetters = 'ABCDEHLMPRST'
    result.push(faker.helpers.arrayElement(monthLetters.split('')))
    // 第12-13位：出生日
    const day = faker.number.int({ min: 1, max: 31 }).toString().padStart(2, '0')
    result.push(day)
    // 第14-15位：城市代码字母
    result.push(faker.helpers.arrayElement(letters.split('')))
    result.push(faker.helpers.arrayElement(letters.split('')))
    // 第16位：校验字母
    result.push(faker.helpers.arrayElement(letters.split('')))
    
    return result.join('')
}

// 生成意大利地址
function generateAddress() {
    const regionObj = config.region 
        ? regions.value.find(r => r.code === config.region)
        : faker.helpers.arrayElement(regions.value)
    const regionName = regionObj ? regionObj.name : t('tools.italy-address-generator.regions.Lombardia')
    const regionCode = regionObj ? regionObj.code : 'Lombardia'
    
    const street = faker.helpers.arrayElement(italyStreets)
    const houseNumber = faker.number.int({ min: 1, max: 200 })
    
    // 生成符合大区的邮政编码
    const prefixes = postalCodePrefixes[regionCode] || ['00', '01']
    const prefix = faker.helpers.arrayElement(prefixes)
    const postalCode = prefix + faker.string.numeric({ length: 3, allowLeadingZeros: true }).slice(0, 3)
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${regionName}`
            break
        case 'commercial':
            fullAddress = `${street} ${houseNumber}, ${postalCode} ${regionName} ${t('tools.italy-address-generator.commercialUnit')}`
            break
        case 'virtual':
            fullAddress = `Casella Postale ${faker.number.int({ min: 1, max: 9999 })}, ${postalCode} ${regionName}`
            break
        case 'campus':
            const universities = Object.values(t('tools.italy-address-generator.universities'))
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
    const italianSurnames = ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti']
    const italianGivenNames = ['Marco', 'Alessandro', 'Giuseppe', 'Flavio', 'Luca', 'Paolo', 'Davide', 'Simone', 'Gabriele', 'Pierfrancesco', 'Anna', 'Giulia', 'Francesca', 'Lucia', 'Valentina', 'Chiara', 'Sara', 'Elena', 'Maria', 'Laura']
    
    const surname = faker.helpers.arrayElement(italianSurnames)
    const givenName = faker.helpers.arrayElement(italianGivenNames)
    const fullName = `${givenName} ${surname}`
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    return {
        fullName,
        gender: gender === 'male' ? t('tools.italy-address-generator.genderMale') : t('tools.italy-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('it-IT'),
        zodiac: '',
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneNumber = faker.string.numeric(10)
    const phone = `+39 ${phoneNumber.substring(0, 2)} ${phoneNumber.substring(2, 5)} ${phoneNumber.substring(5)}`
    
    return {
        phone,
        phoneType: t('tools.italy-address-generator.phoneTypeMobile'),
        areaCode: '39',
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
        salary: `€${faker.number.int({ min: 25000, max: 65000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.italy-address-generator.employmentFullTime') 
            : t('tools.italy-address-generator.employmentPartTime')
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.italy-address-generator.invalidQuantity'))
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
                    codiceFiscale: generateCodiceFiscale()
                }
            }
            
            if (config.includeFingerprint) {
                item.fingerprint = {
                    os: faker.helpers.arrayElement(['Windows', 'macOS', 'Linux', 'iOS', 'Android']),
                    browser: faker.helpers.arrayElement(['Chrome', 'Firefox', 'Safari', 'Edge']),
                    userAgent: faker.internet.userAgent(),
                    screenResolution: `${faker.number.int({ min: 1280, max: 3840 })}x${faker.number.int({ min: 720, max: 2160 })}`,
                    timezone: 'Europe/Rome',
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
    config.region = 'Lombardia'
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
    toastRef.value.show(t('tools.italy-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `italy-address-${idx + 1}.json`
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
    link.download = 'italy-addresses.json'
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
            row[t('tools.italy-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.italy-address-generator.csv.street')] = item.address.street
            row[t('tools.italy-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.italy-address-generator.csv.building')] = item.address.building
            row[t('tools.italy-address-generator.csv.floor')] = item.address.floor
            row[t('tools.italy-address-generator.csv.unit')] = item.address.unit
            row[t('tools.italy-address-generator.csv.region')] = item.address.region
            row[t('tools.italy-address-generator.csv.postalCode')] = item.address.postalCode
        }
        if (item.identity) {
            row[t('tools.italy-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.italy-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.italy-address-generator.csv.age')] = item.identity.age
            row[t('tools.italy-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.italy-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.italy-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.italy-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.italy-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.italy-address-generator.csv.idCardNumber')] = item.idCard.codiceFiscale
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
    link.download = 'italy-addresses.csv'
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
