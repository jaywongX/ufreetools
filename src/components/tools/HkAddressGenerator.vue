<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.hk-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.hk-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.hk-address-generator.selectDistrict') }}</label>
                            <select v-model="config.district" @change="onDistrictChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.hk-address-generator.allDistricts') }}</option>
                                <option v-for="district in districts" :key="district.code" :value="district.code">{{ district.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.hk-address-generator.selectArea') }}</label>
                            <select v-model="config.area"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.district">
                                <option value="">{{ $t('tools.hk-address-generator.allAreas') }}</option>
                                <option v-for="area in filteredAreas" :key="area.key" :value="area.name">{{ area.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.hk-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.hk-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.hk-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.hk-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.hk-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.hk-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.hk-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.hk-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.hk-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.hk-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.hk-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.hk-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.hk-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.hk-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.hk-address-generator.generating') : $t('tools.hk-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.hk-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.hk-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.hk-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.hk-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.hk-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.hk-address-generator.collapse') : $t('tools.hk-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.hk-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.hk-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.hk-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.floorLabel') }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.unitLabel') }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.districtLabel') }}：</span> {{ item.address.district }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.hk-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.hk-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.hk-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.hk-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.hk-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.hk-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.hk-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <HkAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import HkAddressGeneratorArticle from './HkAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    district: '',
    area: '',
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

// 香港18个区
const districts = computed(() => [
    { code: 'CW', name: t('tools.hk-address-generator.districts.CW') },
    { code: 'WAN', name: t('tools.hk-address-generator.districts.WAN') },
    { code: 'E', name: t('tools.hk-address-generator.districts.E') },
    { code: 'S', name: t('tools.hk-address-generator.districts.S') },
    { code: 'YTM', name: t('tools.hk-address-generator.districts.YTM') },
    { code: 'SSP', name: t('tools.hk-address-generator.districts.SSP') },
    { code: 'KC', name: t('tools.hk-address-generator.districts.KC') },
    { code: 'WTS', name: t('tools.hk-address-generator.districts.WTS') },
    { code: 'KT', name: t('tools.hk-address-generator.districts.KT') },
    { code: 'TM', name: t('tools.hk-address-generator.districts.TM') },
    { code: 'YL', name: t('tools.hk-address-generator.districts.YL') },
    { code: 'N', name: t('tools.hk-address-generator.districts.N') },
    { code: 'TP', name: t('tools.hk-address-generator.districts.TP') },
    { code: 'ST', name: t('tools.hk-address-generator.districts.ST') },
    { code: 'SK', name: t('tools.hk-address-generator.districts.SK') },
    { code: 'TW', name: t('tools.hk-address-generator.districts.TW') },
    { code: 'KW', name: t('tools.hk-address-generator.districts.KW') },
    { code: 'IS', name: t('tools.hk-address-generator.districts.IS') }
])

// 区域列表（主要区域）
const getAreasForDistrict = (districtCode) => {
    const areaMap = {
        'CW': ['central', 'sheungWan', 'saiWan', 'midLevels'],
        'WAN': ['wanChai', 'causewayBay', 'happyValley', 'taiHang'],
        'E': ['northPoint', 'quarryBay', 'taiKooShing', 'shauKeiWan', 'chaiWan'],
        'S': ['repulseBay', 'deepWaterBay', 'stanley', 'aberdeen', 'apLeiChau'],
        'YTM': ['tsimShaTsui', 'yauMaTei', 'mongKok', 'jordan'],
        'SSP': ['shamShuiPo', 'cheungShaWan', 'laiChiKok', 'shekKipMei'],
        'KC': ['kowloonCity', 'toKwaWan', 'hungHom', 'hoManTin'],
        'WTS': ['wongTaiSin', 'diamondHill', 'sanPoKong', 'lokFu'],
        'KT': ['kwunTong', 'lamTin', 'ngauTauKok', 'kowloonBay'],
        'TM': ['tuenMun', 'yuenLong', 'tinShuiWai', 'tsingShan'],
        'YL': ['yuenLong', 'tinShuiWai', 'kamTin', 'pingShan'],
        'N': ['sheungShui', 'fanLing', 'shaTauKok', 'taKuLing'],
        'TP': ['taiPo', 'taiPoMarket', 'taiWo', 'lamTsuen'],
        'ST': ['shaTin', 'taiWai', 'maOnShan', 'foTan'],
        'SK': ['saiKung', 'tseungKwanO', 'hangHau', 'clearWaterBay'],
        'TW': ['tsuenWan', 'kwaiChung', 'tsingYi', 'shamTseng']
    }
    return areaMap[districtCode] || []
}

const filteredAreas = computed(() => {
    if (!config.district) return []
    const areaKeys = getAreasForDistrict(config.district)
    return areaKeys.map(key => ({
        key,
        name: t(`tools.hk-address-generator.areas.${config.district}.${key}`)
    }))
})

// 香港街道名称
const hkStreets = [
    '皇后大道', '德辅道', '轩尼诗道', '弥敦道', '广东道', '尖沙咀道', '铜锣湾道',
    '英皇道', '北角道', '太古城道', '柴湾道', '湾仔道', '跑马地道', '大坑道',
    '中环道', '上环道', '西环道', '半山道', '浅水湾道', '深水湾道', '赤柱道',
    '香港仔道', '鸭脷洲道', '油麻地道', '旺角道', '佐敦道', '深水埗道', '长沙湾道',
    '荔枝角道', '石硖尾道', '土瓜湾道', '红磡道', '何文田道', '钻石山道', '新蒲岗道',
    '乐富道', '蓝田道', '牛头角道', '九龙湾道', '天水围道', '青山道', '锦田道',
    '屏山道', '粉岭道', '沙头角道', '打鼓岭道', '大埔墟道', '太和道', '林村道',
    '大围道', '马鞍山道', '火炭道', '将军澳道', '坑口道', '清水湾道', '葵涌道',
    '青衣道', '深井道'
]

// 香港大厦名称后缀
const buildingSuffixes = ['大厦', '中心', '广场', '花园', '轩', '苑', '居', '邨', '楼', '台', '阁', '湾', '峰', '豪庭']

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

// 生成香港身份证号
function generateHKIdCard() {
    // 香港身份证格式：字母+6位数字+括号内校验码
    const prefixLetters = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
    const prefix = faker.helpers.arrayElement(prefixLetters.split(''))
    const serial = faker.string.numeric(6)
    
    // 计算校验码（简化算法）
    const weights = [9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    const prefixValue = prefixLetters.indexOf(prefix) + 1
    sum += prefixValue * 9
    
    for (let i = 0; i < 6; i++) {
        sum += parseInt(serial[i]) * weights[i]
    }
    
    const remainder = sum % 11
    const checkDigit = remainder === 0 ? '0' : (11 - remainder).toString()
    
    return {
        number: `${prefix}${serial}(${checkDigit})`,
        prefixLetter: prefix,
        serialNumber: serial,
        checkDigit: checkDigit
    }
}

// 生成香港地址
function generateAddress() {
    const districtObj = config.district 
        ? districts.value.find(d => d.code === config.district)
        : faker.helpers.arrayElement(districts.value)
    const districtName = districtObj ? districtObj.name : t('tools.hk-address-generator.districts.CW')
    
    const areaName = config.area || (config.district && filteredAreas.value.length > 0
        ? faker.helpers.arrayElement(filteredAreas.value).name
        : t('tools.hk-address-generator.areas.CW.central'))
    
    const street = faker.helpers.arrayElement(hkStreets)
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const buildingName = faker.helpers.arrayElement([
        '海', '金', '银', '新', '大', '中', '华', '富', '康', '乐', '安', '和', '兴', '旺', '盛'
    ]) + faker.helpers.arrayElement(buildingSuffixes)
    
    const floor = faker.number.int({ min: 1, max: 50 })
    const unit = faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']) + faker.number.int({ min: 1, max: 20 })
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${houseNumber}${t('tools.hk-address-generator.addressNumber')} ${street} ${buildingName} ${floor}${t('tools.hk-address-generator.addressFloor')} ${unit}${t('tools.hk-address-generator.addressUnit')}，${areaName}，${districtName}`
            break
        case 'commercial':
            fullAddress = `${houseNumber}${t('tools.hk-address-generator.addressNumber')} ${street} ${buildingName} ${floor}${t('tools.hk-address-generator.addressFloor')} ${unit}${t('tools.hk-address-generator.addressUnit')}${t('tools.hk-address-generator.commercialUnit')}，${areaName}，${districtName}`
            break
        case 'virtual':
            fullAddress = `${t('tools.hk-address-generator.hongKong')}${districtName}${areaName}${t('tools.hk-address-generator.postOfficeBox')} ${faker.number.int({ min: 100, max: 9999 })}${t('tools.hk-address-generator.addressNumber')}`
            break
        case 'campus':
            const universities = [t('tools.hk-address-generator.universities.HKU'), t('tools.hk-address-generator.universities.CUHK'), t('tools.hk-address-generator.universities.HKUST'), t('tools.hk-address-generator.universities.PolyU'), t('tools.hk-address-generator.universities.CityU')]
            const campusTypes = [t('tools.hk-address-generator.studentDormitory'), t('tools.hk-address-generator.teachingBuilding'), t('tools.hk-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}${t('tools.hk-address-generator.buildingUnit')}，${areaName}，${districtName}`
            break
        default:
            fullAddress = `${houseNumber}${t('tools.hk-address-generator.addressNumber')} ${street} ${buildingName} ${floor}${t('tools.hk-address-generator.addressFloor')} ${unit}${t('tools.hk-address-generator.addressUnit')}，${areaName}，${districtName}`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}${t('tools.hk-address-generator.addressNumber')}`,
        building: buildingName,
        floor: `${floor}${t('tools.hk-address-generator.addressFloor')}`,
        unit: `${unit}${t('tools.hk-address-generator.addressUnit')}`,
        area: areaName,
        district: districtName,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 使用中文姓名生成
    const chineseSurnames = ['陈', '李', '张', '黄', '王', '刘', '吴', '周', '林', '何', '梁', '罗', '郑', '谢', '叶', '赵', '杨', '许', '郭', '马']
    const chineseGivenNames = ['伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '军', '洋', '勇', '艳', '杰', '娟', '涛', '明', '超', '秀兰', '霞', '平', '刚', '桂英']
    
    const surname = faker.helpers.arrayElement(chineseSurnames)
    const givenName = faker.helpers.arrayElement(chineseGivenNames) + (Math.random() > 0.5 ? faker.helpers.arrayElement(chineseGivenNames) : '')
    const fullName = surname + givenName
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    const zodiacSigns = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
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
        gender: gender === 'male' ? t('tools.hk-address-generator.genderMale') : t('tools.hk-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('zh-HK'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 香港电话：+852开头，8位数字
    const phoneNumber = faker.string.numeric(8)
    const phone = `+852 ${phoneNumber.substring(0, 4)} ${phoneNumber.substring(4)}`
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.hk-address-generator.phoneTypeMobile') : t('tools.hk-address-generator.phoneTypeLandline'),
        areaCode: '852',
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
    const jobTitles = ['软件工程师', '市场经理', '销售代表', '教师', '护士', '会计师', '设计师', '顾问', '医生', '律师']
    const industries = ['科技', '医疗', '教育', '金融', '零售', '制造业', '房地产', '酒店业']
    const companySizes = ['小型 (1-50)', '中型 (51-200)', '大型 (201-1000)', '企业 (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `HK$${faker.number.int({ min: 15000, max: 80000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.hk-address-generator.employmentFullTime') 
            : t('tools.hk-address-generator.employmentPartTime')
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
        timezone: 'Asia/Hong_Kong',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.hk-address-generator.invalidQuantity'))
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
                item.idCard = generateHKIdCard()
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
    config.district = 'CW'
    config.area = t('tools.hk-address-generator.areas.CW.central')
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
    toastRef.value.show(t('tools.hk-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `hk-address-${idx + 1}.json`
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
    link.download = 'hk-addresses.json'
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
            row[t('tools.hk-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.hk-address-generator.csv.street')] = item.address.street
            row[t('tools.hk-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.hk-address-generator.csv.building')] = item.address.building
            row[t('tools.hk-address-generator.csv.floor')] = item.address.floor
            row[t('tools.hk-address-generator.csv.unit')] = item.address.unit
            row[t('tools.hk-address-generator.csv.district')] = item.address.district
        }
        if (item.identity) {
            row[t('tools.hk-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.hk-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.hk-address-generator.csv.age')] = item.identity.age
            row[t('tools.hk-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.hk-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.hk-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.hk-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.hk-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.hk-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'hk-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 区改变
function onDistrictChange() {
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

