<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.jp-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.jp-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.jp-address-generator.selectPrefecture') }}</label>
                            <select v-model="config.prefecture" @change="onPrefectureChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.jp-address-generator.allPrefectures') }}</option>
                                <option v-for="prefecture in prefectures" :key="prefecture.code" :value="prefecture.code">{{ prefecture.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.jp-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.prefecture">
                                <option value="">{{ $t('tools.jp-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city.key" :value="city.name">{{ city.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.jp-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.jp-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.jp-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.jp-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.jp-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.jp-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.jp-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.jp-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.jp-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.jp-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.jp-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.jp-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.jp-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.jp-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.jp-address-generator.generating') : $t('tools.jp-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.jp-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.jp-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.jp-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.jp-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.jp-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.jp-address-generator.collapse') : $t('tools.jp-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.jp-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.jp-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.jp-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.postalCodeLabelDisplay') }}：</span> {{ item.address.postalCode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.prefectureLabel') }}：</span> {{ item.address.prefecture }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.cityLabel') }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.townLabel') }}：</span> {{ item.address.town }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.fullNameKana') }}：</span> {{ item.identity.fullNameKana }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.bloodType') }}：</span> {{ item.identity.bloodType }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.jp-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.jp-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.jp-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.jp-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.jp-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.jp-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.jp-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <JpAddressGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import JpAddressGeneratorArticle from './JpAddressGeneratorArticle.vue'

const { t } = useI18n()

// 配置
const config = reactive({
    prefecture: '',
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

// 日本47个都道府县
const prefectures = computed(() => [
    { code: '01', name: t('tools.jp-address-generator.prefectures.01') },
    { code: '02', name: t('tools.jp-address-generator.prefectures.02') },
    { code: '03', name: t('tools.jp-address-generator.prefectures.03') },
    { code: '04', name: t('tools.jp-address-generator.prefectures.04') },
    { code: '05', name: t('tools.jp-address-generator.prefectures.05') },
    { code: '06', name: t('tools.jp-address-generator.prefectures.06') },
    { code: '07', name: t('tools.jp-address-generator.prefectures.07') },
    { code: '08', name: t('tools.jp-address-generator.prefectures.08') },
    { code: '09', name: t('tools.jp-address-generator.prefectures.09') },
    { code: '10', name: t('tools.jp-address-generator.prefectures.10') },
    { code: '11', name: t('tools.jp-address-generator.prefectures.11') },
    { code: '12', name: t('tools.jp-address-generator.prefectures.12') },
    { code: '13', name: t('tools.jp-address-generator.prefectures.13') },
    { code: '14', name: t('tools.jp-address-generator.prefectures.14') },
    { code: '15', name: t('tools.jp-address-generator.prefectures.15') },
    { code: '16', name: t('tools.jp-address-generator.prefectures.16') },
    { code: '17', name: t('tools.jp-address-generator.prefectures.17') },
    { code: '18', name: t('tools.jp-address-generator.prefectures.18') },
    { code: '19', name: t('tools.jp-address-generator.prefectures.19') },
    { code: '20', name: t('tools.jp-address-generator.prefectures.20') },
    { code: '21', name: t('tools.jp-address-generator.prefectures.21') },
    { code: '22', name: t('tools.jp-address-generator.prefectures.22') },
    { code: '23', name: t('tools.jp-address-generator.prefectures.23') },
    { code: '24', name: t('tools.jp-address-generator.prefectures.24') },
    { code: '25', name: t('tools.jp-address-generator.prefectures.25') },
    { code: '26', name: t('tools.jp-address-generator.prefectures.26') },
    { code: '27', name: t('tools.jp-address-generator.prefectures.27') },
    { code: '28', name: t('tools.jp-address-generator.prefectures.28') },
    { code: '29', name: t('tools.jp-address-generator.prefectures.29') },
    { code: '30', name: t('tools.jp-address-generator.prefectures.30') },
    { code: '31', name: t('tools.jp-address-generator.prefectures.31') },
    { code: '32', name: t('tools.jp-address-generator.prefectures.32') },
    { code: '33', name: t('tools.jp-address-generator.prefectures.33') },
    { code: '34', name: t('tools.jp-address-generator.prefectures.34') },
    { code: '35', name: t('tools.jp-address-generator.prefectures.35') },
    { code: '36', name: t('tools.jp-address-generator.prefectures.36') },
    { code: '37', name: t('tools.jp-address-generator.prefectures.37') },
    { code: '38', name: t('tools.jp-address-generator.prefectures.38') },
    { code: '39', name: t('tools.jp-address-generator.prefectures.39') },
    { code: '40', name: t('tools.jp-address-generator.prefectures.40') },
    { code: '41', name: t('tools.jp-address-generator.prefectures.41') },
    { code: '42', name: t('tools.jp-address-generator.prefectures.42') },
    { code: '43', name: t('tools.jp-address-generator.prefectures.43') },
    { code: '44', name: t('tools.jp-address-generator.prefectures.44') },
    { code: '45', name: t('tools.jp-address-generator.prefectures.45') },
    { code: '46', name: t('tools.jp-address-generator.prefectures.46') },
    { code: '47', name: t('tools.jp-address-generator.prefectures.47') }
])

// 市区町村列表
const getCitiesForPrefecture = (prefectureCode) => {
    const cityMap = {
        '01': ['sapporo', 'asahikawa', 'hakodate', 'obihiro'],
        '04': ['sendai', 'shiogama', 'ishinomaki'],
        '13': ['chiyoda', 'chuo', 'minato', 'shinjuku', 'shibuya', 'shinagawa', 'meguro', 'setagaya', 'ota', 'nerima'],
        '14': ['yokohama', 'kawasaki', 'sagamihara', 'fujisawa'],
        '23': ['nagoya', 'toyohashi', 'okazaki'],
        '26': ['kyoto', 'utsunomiya'],
        '27': ['osaka', 'sakai', 'hirakata', 'toyonaka'],
        '28': ['kobe', 'himeji', 'amagasaki'],
        '40': ['fukuoka', 'kitakyushu', 'kurume'],
        '47': ['naha', 'okinawa']
    }
    return cityMap[prefectureCode] || []
}

const filteredCities = computed(() => {
    if (!config.prefecture) return []
    const cityKeys = getCitiesForPrefecture(config.prefecture)
    return cityKeys.map(key => ({
        key,
        name: t(`tools.jp-address-generator.cities.${config.prefecture}.${key}`)
    }))
})

// 日本町名
const jpTowns = [
    '银座', '新桥', '涩谷', '原宿', '表参道', '青山', '六本木', '麻布', '广尾', '惠比寿',
    '池袋', '新宿', '歌舞伎町', '高田马场', '早稻田', '饭田桥', '神乐坂', '四谷', '市谷',
    '秋叶原', '上野', '浅草', '两国', '锦系町', '龟户', '门前仲町', '木场', '丰洲', '有明',
    '品川', '大崎', '五反田', '目黑', '自由之丘', '三轩茶屋', '二子玉川', '�的木', '代官山',
    '中目黑', '池尻大桥', '驹场', '涉谷', '原宿', '竹下通', '明治神宫前'
]

// 日本建物名称后缀
const buildingSuffixes = ['大厦', '公寓', '大楼', '中心', '广场', '花园', '住宅', 'Mansion', 'Heights', 'Court']

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

// 生成日本个人番号（My Number）- 12位数字
function generateMyNumber() {
    // 前11位随机数字
    let number = faker.string.numeric(11)
    
    // 计算校验位（使用11减去加权和模11的余数）
    const weights = [6, 5, 4, 3, 2, 7, 6, 5, 4, 3, 2]
    let sum = 0
    for (let i = 0; i < 11; i++) {
        sum += parseInt(number[i]) * weights[i]
    }
    
    let checkDigit = 11 - (sum % 11)
    if (checkDigit >= 10) checkDigit = 0
    
    number += checkDigit.toString()
    
    return {
        number: number.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3'),
        rawNumber: number
    }
}

// 生成日本地址
function generateAddress() {
    const prefectureObj = config.prefecture 
        ? prefectures.value.find(p => p.code === config.prefecture)
        : faker.helpers.arrayElement(prefectures.value)
    const prefectureName = prefectureObj ? prefectureObj.name : t('tools.jp-address-generator.prefectures.13')
    
    const cityName = config.city || (config.prefecture && filteredCities.value.length > 0
        ? faker.helpers.arrayElement(filteredCities.value).name
        : t('tools.jp-address-generator.cities.13.chiyoda'))
    
    const town = faker.helpers.arrayElement(jpTowns)
    const chome = faker.number.int({ min: 1, max: 10 })
    const ban = faker.number.int({ min: 1, max: 20 })
    const go = faker.number.int({ min: 1, max: 30 })
    
    // 生成邮便番号（3位-4位格式）
    const postalCode = `${faker.string.numeric(3)}-${faker.string.numeric(4)}`
    
    // 生成建物名
    const buildingName = faker.helpers.arrayElement([
        '阳光', '花园', '绿苑', '青山', '樱花', '富士', '新宿', '东京', '日本', '平和'
    ]) + faker.helpers.arrayElement(buildingSuffixes)
    
    const floor = faker.number.int({ min: 1, max: 30 })
    const room = faker.number.int({ min: 101, max: 1505 })
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${postalCode} ${prefectureName}${cityName}${town}${chome}丁目${ban}番${go}号 ${buildingName} ${floor}阶${room}号室`
            break
        case 'commercial':
            fullAddress = `${postalCode} ${prefectureName}${cityName}${town}${chome}丁目${ban}番${go}号 ${buildingName} ${floor}阶${t('tools.jp-address-generator.commercialUnit')}`
            break
        case 'virtual':
            fullAddress = `${postalCode} ${prefectureName}${cityName}${t('tools.jp-address-generator.postOfficeBox')} ${faker.number.int({ min: 100, max: 9999 })}${t('tools.jp-address-generator.addressNumber')}`
            break
        case 'campus':
            const universities = [t('tools.jp-address-generator.universities.UTokyo'), t('tools.jp-address-generator.universities.KyotoU'), t('tools.jp-address-generator.universities.OsakaU'), t('tools.jp-address-generator.universities.Keio'), t('tools.jp-address-generator.universities.Waseda')]
            const campusTypes = [t('tools.jp-address-generator.studentDormitory'), t('tools.jp-address-generator.teachingBuilding'), t('tools.jp-address-generator.library')]
            fullAddress = `${postalCode} ${prefectureName}${cityName} ${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}${t('tools.jp-address-generator.buildingUnit')}`
            break
        default:
            fullAddress = `${postalCode} ${prefectureName}${cityName}${town}${chome}丁目${ban}番${go}号 ${buildingName} ${floor}阶${room}号室`
    }
    
    return {
        postalCode,
        prefecture: prefectureName,
        city: cityName,
        town,
        chome: `${chome}丁目`,
        ban: `${ban}番${go}号`,
        building: buildingName,
        floor: `${floor}阶`,
        room: `${room}号室`,
        fullAddress
    }
}

// 日本姓氏
const jpSurnames = [
    '佐藤', '铃木', '高桥', '田中', '伊藤', '渡边', '山本', '中村', '小林', '加藤',
    '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村', '林', '斋藤', '清水',
    '山崎', '阿部', '森', '池田', '桥本', '石川', '前田', '小川', '藤田', '冈田'
]

// 日本名字
const jpGivenNames = [
    '大翔', '莲', '阳翔', '树', '凑', '悠真', '朝日', '颯真', '苍', '律',
    '结爱', '结菜', '杏', '�的奈', '琴叶', '�的依', '结衣', '芽依', '�的奈', '阳菜',
    '翔太', '健太', '大树', '拓海', '悠斗', '�的翔', '�的人', '�的太', '�的平', '�的也'
]

// 片假名姓氏
const jpSurnamesKana = [
    'サトウ', 'スズキ', 'タカハシ', 'タナカ', 'イトウ', 'ワタナベ', 'ヤマモト', 'ナカムラ', 'コバヤシ', 'カトウ',
    'ヨシダ', 'ヤマダ', 'ササキ', 'ヤマグチ', 'マツモト', 'イノウエ', 'キムラ', 'ハヤシ', 'サイトウ', 'シミズ'
]

// 片假名名字
const jpGivenNamesKana = [
    'ハルト', 'レン', 'ハルト', 'イツキ', 'ミナト', 'ユウマ', 'アサヒ', 'ソウマ', 'ソウ', 'リツ',
    'ユイ', 'ユウナ', 'アン', 'サクラ', 'コトハ', 'メイ', 'ユイ', 'メイ', 'ミウ', 'ヒナ',
    'ショウタ', 'ケンタ', 'ダイキ', 'タクミ', 'ユウト'
]

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    
    const surname = faker.helpers.arrayElement(jpSurnames)
    const givenName = faker.helpers.arrayElement(jpGivenNames)
    const fullName = surname + givenName
    
    // 生成片假名
    const surnameKana = faker.helpers.arrayElement(jpSurnamesKana)
    const givenNameKana = faker.helpers.arrayElement(jpGivenNamesKana)
    const fullNameKana = surnameKana + ' ' + givenNameKana
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    // 日本人重视血型
    const bloodTypes = ['A', 'B', 'O', 'AB']
    const bloodType = faker.helpers.arrayElement(bloodTypes)
    
    // 星座计算
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
        fullNameKana,
        gender: gender === 'male' ? t('tools.jp-address-generator.genderMale') : t('tools.jp-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('ja-JP'),
        zodiac,
        bloodType: t(`tools.jp-address-generator.bloodTypes.${bloodType}`),
        height: `${faker.number.int({ min: 150, max: 190 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 90 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 日本电话：+81开头，手机号以070/080/090开头，共11位
    let phone
    if (phoneType === 'mobile') {
        const mobilePrefix = faker.helpers.arrayElement(['070', '080', '090'])
        const phoneNumber = faker.string.numeric(8)
        phone = `+81 ${mobilePrefix} ${phoneNumber.substring(0, 4)} ${phoneNumber.substring(4)}`
    } else {
        const landlineNumber = faker.string.numeric(8)
        phone = `+81 3 ${landlineNumber.substring(0, 4)} ${landlineNumber.substring(4)}`
    }
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.jp-address-generator.phoneTypeMobile') : t('tools.jp-address-generator.phoneTypeLandline'),
        areaCode: '81',
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
    const industries = ['科技', '医疗', '教育', '金融', '零售', '制造业', '房地产', '服务业']
    const companySizes = ['小型 (1-50)', '中型 (51-200)', '大型 (201-1000)', '企业 (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `JPY ${faker.number.int({ min: 2500000, max: 15000000 }).toLocaleString()}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.jp-address-generator.employmentFullTime') 
            : t('tools.jp-address-generator.employmentPartTime')
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
        timezone: 'Asia/Tokyo',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        alert(t('tools.jp-address-generator.invalidQuantity'))
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
                item.idCard = generateMyNumber()
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
    config.prefecture = '13'
    config.city = t('tools.jp-address-generator.cities.13.shibuya')
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
    alert(t('tools.jp-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `jp-address-${idx + 1}.json`
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
    link.download = 'jp-addresses.json'
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
            row[t('tools.jp-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.jp-address-generator.csv.postalCode')] = item.address.postalCode
            row[t('tools.jp-address-generator.csv.prefecture')] = item.address.prefecture
            row[t('tools.jp-address-generator.csv.city')] = item.address.city
            row[t('tools.jp-address-generator.csv.town')] = item.address.town
            row[t('tools.jp-address-generator.csv.building')] = item.address.building
        }
        if (item.identity) {
            row[t('tools.jp-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.jp-address-generator.csv.fullNameKana')] = item.identity.fullNameKana
            row[t('tools.jp-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.jp-address-generator.csv.age')] = item.identity.age
            row[t('tools.jp-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.jp-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.jp-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.jp-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.jp-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.jp-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'jp-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 都道府县改变
function onPrefectureChange() {
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
