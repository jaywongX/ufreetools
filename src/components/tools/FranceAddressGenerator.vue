<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.france-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.france-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.france-address-generator.selectRegion') }}</label>
                            <select v-model="config.region" @change="onRegionChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.france-address-generator.allRegions') }}</option>
                                <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.france-address-generator.selectDepartment') }}</label>
                            <select v-model="config.department"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.region">
                                <option value="">{{ $t('tools.france-address-generator.allDepartments') }}</option>
                                <option v-for="dept in filteredDepartments" :key="dept.key" :value="dept.name">{{ dept.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.france-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.france-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.france-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.france-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.france-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.france-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.france-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.france-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.france-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.france-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.france-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.france-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.france-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.france-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.france-address-generator.generating') : $t('tools.france-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.france-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.france-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.france-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.france-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.france-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.france-address-generator.collapse') : $t('tools.france-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.france-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.france-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.france-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.floorLabel') }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.departmentLabel') }}：</span> {{ item.address.department }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.regionLabel') }}：</span> {{ item.address.region }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.postalCode') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.france-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.france-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.france-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.france-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.france-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.france-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.france-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <FranceAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import FranceAddressGeneratorArticle from './FranceAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    region: '',
    department: '',
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

// 法国大区
const regions = computed(() => [
    { code: 'IDF', name: t('tools.france-address-generator.regions.IDF') },
    { code: 'ARA', name: t('tools.france-address-generator.regions.ARA') },
    { code: 'OCC', name: t('tools.france-address-generator.regions.OCC') },
    { code: 'NAQ', name: t('tools.france-address-generator.regions.NAQ') },
    { code: 'PAC', name: t('tools.france-address-generator.regions.PAC') },
    { code: 'HDF', name: t('tools.france-address-generator.regions.HDF') },
    { code: 'BFC', name: t('tools.france-address-generator.regions.BFC') },
    { code: 'NAC', name: t('tools.france-address-generator.regions.NAC') },
    { code: 'BRE', name: t('tools.france-address-generator.regions.BRE') },
    { code: 'NOR', name: t('tools.france-address-generator.regions.NOR') },
    { code: 'COR', name: t('tools.france-address-generator.regions.COR') }
])

// 省份列表
const getDepartmentsForRegion = (regionCode) => {
    const deptMap = {
        'IDF': ['paris', 'hautsDeSeine', 'seineSaintDenis', 'valDeMarne', 'yvelines', 'essonne', 'valDOise', 'seineEtMarne'],
        'ARA': ['rhone', 'loire', 'isere', 'ain', 'savoie', 'hauteSavoie', 'allier', 'puyDeDome'],
        'OCC': ['herault', 'gard', 'aude', 'pyreneesOrientales', 'tarn', 'hauteGaronne', 'gers', 'lotEtGaronne'],
        'NAQ': ['gironde', 'charenteMaritime', 'dordogne', 'landes', 'vienne', 'hauteVienne', 'charente', 'correze'],
        'PAC': ['bouchesDuRhone', 'alpesMaritimes', 'var', 'vaucluse', 'alpesDeHauteProvence', 'hautesAlpes'],
        'HDF': ['nord', 'pasDeCalais', 'somme', 'aisne', 'oise']
    }
    return deptMap[regionCode] || []
}

const filteredDepartments = computed(() => {
    if (!config.region) return []
    const deptKeys = getDepartmentsForRegion(config.region)
    return deptKeys.map(key => ({
        key,
        name: t(`tools.france-address-generator.departmentsData.${config.region}.${key}`)
    }))
})

// 法国街道名称
const franceStreets = [
    'Rue de la Paix', 'Avenue des Champs-Élysées', 'Boulevard Saint-Germain',
    'Rue de Rivoli', 'Avenue Montaigne', 'Rue du Faubourg Saint-Honoré',
    'Boulevard Haussmann', 'Rue de Belleville', 'Avenue de la République',
    'Rue de Oberkampf', 'Boulevard de Belleville', 'Rue du Temple',
    'Avenue de Wagram', 'Rue de Passy', 'Boulevard des Batignolles',
    'Rue de Ménilmontant', 'Avenue Philippe Auguste', 'Rue de Charonne',
    'Boulevard Voltaire', 'Rue de la Roquette', 'Avenue Daumesnil',
    'Boulevard Richard Lenoir', 'Rue de la Folie Méricourt', 'Avenue Parmentier'
]

// 建筑名称后缀
const buildingSuffixes = ['Immeuble', 'Résidence', 'Building', 'Centre', 'Cité', 'Domaine', 'Ensemble', 'Copropriété']

onMounted(() => {
    loadSample()
})

// 生成Luhn算法信用卡号
function generateCreditCardNumber(type = 'visa') {
    const prefixes = {
        visa: ['4'],
        mastercard: ['51', '52', '53', '54', '55'],
        amex: ['34', '37'],
        cb: ['5600', '5700', '5800']
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

// 生成法国NIR号码（13位）
function generateFrenchNir() {
    const sex = faker.helpers.arrayElement(['1', '2'])
    const year = faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).getFullYear().toString().slice(-2)
    const month = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
    const department = faker.helpers.arrayElement(['75', '77', '78', '92', '93', '94', '69', '13', '31', '33'])
    const commune = faker.string.numeric(3)
    const order = faker.string.numeric(3)
    const key = faker.number.int({ min: 1, max: 97 }).toString().padStart(2, '0')
    
    return {
        number: `${sex}${year}${month}${department}${commune}${order} ${key}`,
        nirNumber: `${sex}${year}${month}${department}${commune}${order} ${key}`,
        serialNumber: faker.string.numeric(6),
        checkKey: key
    }
}

// 生成法国地址
function generateAddress() {
    const regionObj = config.region 
        ? regions.value.find(r => r.code === config.region)
        : faker.helpers.arrayElement(regions.value)
    const regionName = regionObj ? regionObj.name : t('tools.france-address-generator.regions.IDF')
    
    const deptName = config.department || (config.region && filteredDepartments.value.length > 0
        ? faker.helpers.arrayElement(filteredDepartments.value).name
        : t('tools.france-address-generator.departmentsData.IDF.paris'))
    
    const street = faker.helpers.arrayElement(franceStreets)
    const houseNumber = faker.number.int({ min: 1, max: 200 })
    const buildingName = faker.helpers.arrayElement([
        'Le Grand', 'Le Petit', 'Les Beaux', 'Le Beau', 'La Belle', 'Les Jolis', 'Le Vieux', 'Le Nouveau'
    ]) + ' ' + faker.helpers.arrayElement(buildingSuffixes)
    
    const floor = faker.number.int({ min: 0, max: 10 })
    const unit = faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']) + faker.number.int({ min: 1, max: 20 })
    const postalCode = faker.string.numeric(5)
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${houseNumber} ${street}, ${floor > 0 ? `Étage ${floor}, Appartement ${unit}, ` : ''}${buildingName}, ${deptName} ${postalCode}`
            break
        case 'commercial':
            fullAddress = `${houseNumber} ${street}, ${floor > 0 ? `Étage ${floor}, Bureau ${unit}, ` : ''}${buildingName}, ${deptName} ${postalCode} ${t('tools.france-address-generator.commercialUnit')}`
            break
        case 'virtual':
            fullAddress = `BP ${faker.number.int({ min: 1, max: 9999 })}, ${deptName} ${postalCode}`
            break
        case 'campus':
            const universities = Object.values(t('tools.france-address-generator.universities'))
            const campusTypes = [t('tools.france-address-generator.studentDormitory'), t('tools.france-address-generator.teachingBuilding'), t('tools.france-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)}, ${faker.helpers.arrayElement(campusTypes)}, ${faker.number.int({ min: 1, max: 20 })}${t('tools.france-address-generator.buildingUnit')}, ${deptName} ${postalCode}`
            break
        default:
            fullAddress = `${houseNumber} ${street}, ${buildingName}, ${deptName} ${postalCode}`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}`,
        building: buildingName,
        floor: floor > 0 ? `${floor}` : '',
        unit: floor > 0 ? `${unit}` : '',
        department: deptName,
        region: regionName,
        postalCode,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    const frenchSurnames = ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefèvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Girard', 'André']
    const frenchGivenNames = ['Jean', 'Pierre', 'Michel', 'André', 'Philippe', 'René', 'Louis', 'Marie', 'Jeanne', 'Claire', 'Sophie', 'Isabelle', 'Catherine', 'Françoise', 'Monique', 'Nathalie', 'Sylvie', 'Christine', 'Valérie', 'Brigitte']
    
    const surname = faker.helpers.arrayElement(frenchSurnames)
    const givenName = faker.helpers.arrayElement(frenchGivenNames)
    const fullName = `${givenName} ${surname}`
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    const zodiacSigns = ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons']
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
        gender: gender === 'male' ? t('tools.france-address-generator.genderMale') : t('tools.france-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('fr-FR'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    const phoneNumber = faker.string.numeric(10)
    const phone = `+33 ${phoneNumber.substring(0, 1)} ${phoneNumber.substring(1, 3)} ${phoneNumber.substring(3, 5)} ${phoneNumber.substring(5, 7)} ${phoneNumber.substring(7)}`
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.france-address-generator.phoneTypeMobile') : t('tools.france-address-generator.phoneTypeLandline'),
        areaCode: '33',
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

// 生成信用卡
function generateCreditCard() {
    const types = ['visa', 'mastercard', 'cb']
    const type = faker.helpers.arrayElement(types)
    const number = generateCreditCardNumber(type)
    const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
    const expiryYear = (new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })).toString().slice(-2)
    
    return {
        type: type === 'cb' ? 'CB' : type.charAt(0).toUpperCase() + type.slice(1),
        number: number.replace(/(\d{4})/g, '$1 ').trim(),
        expiry: `${expiryMonth}/${expiryYear}`,
        cvv: faker.string.numeric(3),
        bankBin: number.substring(0, 6)
    }
}

// 生成职业
function generateCareer() {
    const jobTitles = ['Ingénieur', 'Chef de projet', 'Développeur', 'Commercial', 'Architecte', 'Médecin', 'Avocat', 'Comptable', 'Designer', 'Enseignant']
    const industries = ['Technologie', 'Santé', 'Éducation', 'Finance', 'Commerce', 'Industrie', 'Immobilier', 'Tourisme']
    const companySizes = ['Petite (1-50)', 'Moyenne (51-200)', 'Grande (201-1000)', 'Multinationale (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `${faker.number.int({ min: 30000, max: 80000 })} €`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.france-address-generator.employmentFullTime') 
            : t('tools.france-address-generator.employmentPartTime')
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
        timezone: 'Europe/Paris',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.france-address-generator.invalidQuantity'))
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
                item.idCard = generateFrenchNir()
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
    config.region = 'IDF'
    config.department = t('tools.france-address-generator.departmentsData.IDF.paris')
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
    toastRef.value.show(t('tools.france-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `france-address-${idx + 1}.json`
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
    link.download = 'france-addresses.json'
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
            row[t('tools.france-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.france-address-generator.csv.street')] = item.address.street
            row[t('tools.france-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.france-address-generator.csv.building')] = item.address.building
            row[t('tools.france-address-generator.csv.floor')] = item.address.floor
            row[t('tools.france-address-generator.csv.unit')] = item.address.unit
            row[t('tools.france-address-generator.csv.department')] = item.address.department
            row[t('tools.france-address-generator.csv.region')] = item.address.region
            row[t('tools.france-address-generator.csv.postalCode')] = item.address.postalCode
        }
        if (item.identity) {
            row[t('tools.france-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.france-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.france-address-generator.csv.age')] = item.identity.age
            row[t('tools.france-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.france-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.france-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.france-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.france-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.france-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'france-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 大区改变
function onRegionChange() {
    config.department = ''
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