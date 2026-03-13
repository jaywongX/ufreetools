<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.kr-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.kr-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.kr-address-generator.selectProvince') }}</label>
                            <select v-model="config.province" @change="onProvinceChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.kr-address-generator.allProvinces') }}</option>
                                <option v-for="province in provinces" :key="province.code" :value="province.code">{{ province.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.kr-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.province">
                                <option value="">{{ $t('tools.kr-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city.key" :value="city.name">{{ city.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.kr-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.kr-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.kr-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.kr-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.kr-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.kr-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.kr-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.kr-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.kr-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.kr-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.kr-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.kr-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.kr-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.kr-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.kr-address-generator.generating') : $t('tools.kr-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.kr-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.kr-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.kr-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.kr-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.kr-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.kr-address-generator.collapse') : $t('tools.kr-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.kr-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.kr-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.kr-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.buildingLabel') }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.postalCodeLabel') }}：</span> {{ item.address.postalCode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.districtLabel') }}：</span> {{ item.address.district }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.koreanName') }}：</span> {{ item.identity.koreanName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.englishName') }}：</span> {{ item.identity.englishName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.zodiac') }}：</span> {{ item.identity.zodiac }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.bloodType') }}：</span> {{ item.identity.bloodType }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.kr-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.kr-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.kr-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.kr-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.kr-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.kr-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.kr-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <KrAddressGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import KrAddressGeneratorArticle from './KrAddressGeneratorArticle.vue'

const { t } = useI18n()

// 配置
const config = reactive({
    province: '',
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

// 韩国17个道/特别市/广域市
const provinces = computed(() => [
    { code: 'SEOUL', name: t('tools.kr-address-generator.provinces.seoul') },
    { code: 'BUSAN', name: t('tools.kr-address-generator.provinces.busan') },
    { code: 'DAEGU', name: t('tools.kr-address-generator.provinces.daegu') },
    { code: 'INCHEON', name: t('tools.kr-address-generator.provinces.incheon') },
    { code: 'GWANGJU', name: t('tools.kr-address-generator.provinces.gwangju') },
    { code: 'DAEJEON', name: t('tools.kr-address-generator.provinces.daejeon') },
    { code: 'ULSAN', name: t('tools.kr-address-generator.provinces.ulsan') },
    { code: 'SEJONG', name: t('tools.kr-address-generator.provinces.sejong') },
    { code: 'GYEONGGI', name: t('tools.kr-address-generator.provinces.gyeonggi') },
    { code: 'GANGWON', name: t('tools.kr-address-generator.provinces.gangwon') },
    { code: 'CHUNGBUK', name: t('tools.kr-address-generator.provinces.chungbuk') },
    { code: 'CHUNGNAM', name: t('tools.kr-address-generator.provinces.chungnam') },
    { code: 'JEONBUK', name: t('tools.kr-address-generator.provinces.jeonbuk') },
    { code: 'JEONNAM', name: t('tools.kr-address-generator.provinces.jeonnam') },
    { code: 'GYEONGBUK', name: t('tools.kr-address-generator.provinces.gyeongbuk') },
    { code: 'GYEONGNAM', name: t('tools.kr-address-generator.provinces.gyeongnam') },
    { code: 'JEJU', name: t('tools.kr-address-generator.provinces.jeju') }
])

// 城市列表
const getCitiesForProvince = (provinceCode) => {
    const cityMap = {
        'SEOUL': ['gangnam', 'gangdong', 'gangbuk', 'gangseo', 'gwanak', 'gwangjin', 'guro', 'geumcheon', 'nowon', 'dobong', 'dongdaemun', 'dongjak', 'mapo', 'seodaemun', 'seocho', 'seongdong', 'seongbuk', 'songpa', 'yangcheon', 'yeongdeungpo', 'yongsan', 'eunpyeong', 'jongno', 'jung', 'jungnang'],
        'BUSAN': ['jung', 'seo', 'dong', 'yeongdo', 'busanjin', 'dongnae', 'nam', 'buk', 'haeundae', 'saha', 'geumjeong', 'yeonje', 'suyeong', 'sasang', 'gijang'],
        'DAEGU': ['jung', 'dong', 'seo', 'nam', 'buk', 'suseong', 'dalseo', 'dalseong'],
        'INCHEON': ['jung', 'dong', 'nam', 'yeonsu', 'namdong', 'buk', 'gyeyang', 'michuhol', 'seo', 'ganghwa', 'ongjin'],
        'GWANGJU': ['dong', 'seo', 'nam', 'buk', 'gwangsang'],
        'DAEJEON': ['dong', 'jung', 'seo', 'yuseong', 'daedeok'],
        'ULSAN': ['jung', 'nam', 'dong', 'buk', 'ulju'],
        'SEJONG': ['sejong'],
        'GYEONGGI': ['suwon', 'seongnam', 'uijeongbu', 'anyang', 'bucheon', 'gwangmyeong', 'pyeongtaek', 'anseong', 'gwangju', 'yangju', 'paju', 'hwaseong', 'yongin', 'goyang', 'ansan', 'gimpo', 'namyangju', 'hanam', 'osan', 'siheung', 'gunpo', 'uiwang', 'dongducheon', 'icheon', 'gwacheon'],
        'GANGWON': ['chuncheon', 'wonju', 'gangneung', 'donghae', 'taebaek', 'sokcho', 'samcheok', 'hongcheon', 'hoengseong', 'yeongwol', 'pyeongchang', 'jeongseon', 'cheorwon', 'hwacheon', 'yanggu', 'inje', 'goseong', 'yangyang'],
        'CHUNGBUK': ['cheongju', 'chungju', 'jecheon', 'boeun', 'okcheon', 'yeongdong', 'jeungpyeong', 'jincheon', 'goesan', 'eumseong', 'danyang'],
        'CHUNGNAM': ['cheonan', 'gongju', 'asan', 'seosan', 'nonsan', 'gyeryong', 'dangjin', 'yesan', 'taean', 'seocheon', 'cheongyang', 'hongseong', 'buyeo'],
        'JEONBUK': ['jeonju', 'gunsan', 'iksan', 'jeongeup', 'namwon', 'gimje', 'wanju', 'jinan', 'muju', 'jangsu', 'imsil', 'sunchang', 'gochang', 'buan'],
        'JEONNAM': ['mokpo', 'yeosu', 'suncheon', 'naju', 'gwangyang', 'damyang', 'gokseong', 'gurye', 'goheung', 'boseong', 'hwasun', 'jangheung', 'gangjin', 'haenam', 'yeongam', 'muan', 'haman', 'yeonggwang', 'jangseong', 'wando', 'jindo', 'sinan'],
        'GYEONGBUK': ['pohang', 'gyeongju', 'gimcheon', 'yeongju', 'andong', 'gumi', 'yeongcheon', 'sangju', 'mungyeong', 'gyeongsan', 'uiseong', 'cheongsong', 'yeongyang', 'yeongdeok', 'cheongdo', 'goryeong', 'seongju', 'chilgok', 'bonghwa', 'uljin', 'ulleung'],
        'GYEONGNAM': ['changwon', 'jinju', 'tongyeong', 'sacheon', 'gimhae', 'miryang', 'geoje', 'yangsan', 'uiryeong', 'haman', 'changnyeong', 'goseong', 'namhae', 'hadong', 'sacheon', 'hamyang', 'geochang', 'hapcheon'],
        'JEJU': ['jeju', 'seogwipo']
    }
    return cityMap[provinceCode] || []
}

const filteredCities = computed(() => {
    if (!config.province) return []
    const cityKeys = getCitiesForProvince(config.province)
    return cityKeys.map(key => ({
        key,
        name: t(`tools.kr-address-generator.cities.${config.province}.${key}`)
    }))
})

// 韩国街道名称
const krStreets = [
    '한강대로', '강남대로', '테헤란로', '여의대로', '마포대교로', '종로', '인사동길', '명동길', '홍대로', '신촌로',
    '세종대로', '을지로', '충무로', '동대문로', '을지로', '을지로입구', '을지로3가', '을지로4가', '을지로5가', '을지로6가',
    '압구정로', '청담동길', '삼성동길', '역삼동길', '논현로', '신사동길', '가로수길', '도산대로', '학동로', '언주로'
]

// 韩国大厦名称后缀
const buildingSuffixes = ['빌딩', '타워', '센터', '플라자', '아파트', '오피스텔', '빌라', '맨션', '하우스', '리버스', '팰리스', '캐슬']

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

// 生成韩国居民登记号码
function generateKRIdCard() {
    // 韩国居民登记号码格式：YYMMDD-GXXXXXXX
    const year = faker.string.numeric(2)
    const month = (faker.number.int({ min: 1, max: 12 })).toString().padStart(2, '0')
    const day = (faker.number.int({ min: 1, max: 28 })).toString().padStart(2, '0')
    const firstPart = `${year}${month}${day}`
    
    // 第7位：性别标识 (1-男性, 2-女性, 3-男性(外国人), 4-女性(外国人))
    const genderDigit = faker.helpers.arrayElement(['1', '2', '3', '4'])
    const restNumber = faker.string.numeric(6)
    const secondPart = `${genderDigit}${restNumber}`
    
    return {
        number: `${firstPart}-${secondPart}`,
        residentRegistrationNumber: `${firstPart}-${secondPart}`
    }
}

// 生成韩国地址
function generateAddress() {
    const provinceObj = config.province 
        ? provinces.value.find(p => p.code === config.province)
        : faker.helpers.arrayElement(provinces.value)
    const provinceName = provinceObj ? provinceObj.name : t('tools.kr-address-generator.provinces.seoul')
    
    const cityName = config.city || (config.province && filteredCities.value.length > 0
        ? faker.helpers.arrayElement(filteredCities.value).name
        : t('tools.kr-address-generator.cities.SEOUL.gangnam'))
    
    // 韩国邮政编码：5位数字
    const postalCode = faker.string.numeric(5)
    
    const street = faker.helpers.arrayElement(krStreets)
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const buildingName = faker.helpers.arrayElement([
        '현대', '삼성', 'LG', 'SK', '한화', '롯데', '신세계', '동대문', 'COEX', 'IFC'
    ]) + faker.helpers.arrayElement(buildingSuffixes)
    
    const floor = faker.number.int({ min: 1, max: 50 })
    const unit = faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']) + faker.number.int({ min: 1, max: 20 })
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `대한민국 ${provinceName} ${cityName} ${street} ${houseNumber}번지 ${buildingName} ${floor}층 ${unit}호`
            break
        case 'commercial':
            fullAddress = `대한민국 ${provinceName} ${cityName} ${street} ${houseNumber}번지 ${buildingName} ${floor}층 ${unit}호 (상가)`
            break
        case 'virtual':
            fullAddress = `대한민국 ${provinceName} ${cityName} 사서함 ${faker.number.int({ min: 100, max: 9999 })}호`
            break
        case 'campus':
            const universities = [
                t('tools.kr-address-generator.universities.SNU'),
                t('tools.kr-address-generator.universities.YU'),
                t('tools.kr-address-generator.universities.KU'),
                t('tools.kr-address-generator.universities.KAIST'),
                t('tools.kr-address-generator.universities.POSTECH')
            ]
            const campusTypes = [
                t('tools.kr-address-generator.studentDormitory'),
                t('tools.kr-address-generator.teachingBuilding'),
                t('tools.kr-address-generator.library')
            ]
            fullAddress = `${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}동, ${cityName}, ${provinceName}`
            break
        default:
            fullAddress = `대한민국 ${provinceName} ${cityName} ${street} ${houseNumber}번지 ${buildingName} ${floor}층 ${unit}호`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}번지`,
        building: buildingName,
        floor: `${floor}층`,
        unit: `${unit}호`,
        district: cityName,
        postalCode,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 使用韩文姓名生成
    const koreanSurnames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '신', '오', '서', '송', '황', '유', '정', '안', '성']
    const koreanGivenNames = ['지은', '수연', '미영', '준혁', '태민', '민준', '혜진', '수빈', '소연', '영수', '지훈', '민지', '준수', '미선', '태준']
    
    const surname = faker.helpers.arrayElement(koreanSurnames)
    const givenName = faker.helpers.arrayElement(koreanGivenNames)
    const fullName = surname + givenName
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    const zodiacSigns = ['양자리', '황소자리', '쌍둥이자리', '게자리', '사자자리', '처녀자리', '천칭자리', '전갈자리', '궁수자리', '염소자리', '물병자리', '물고기자리']
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

    // 韩语转英语音译
    const transliterationMap = {
        '김': 'Kim', '이': 'Lee', '박': 'Park', '최': 'Choi', '정': 'Jung',
        '강': 'Kang', '조': 'Cho', '윤': 'Yoon', '장': 'Jang', '임': 'Lim',
        '지은': 'Ji-eun', '수연': 'Su-yeon', '미영': 'Mi-young', '준혁': 'Jun-hyuk',
        '태민': 'Tae-min', '민준': 'Min-jun', '혜진': 'Hye-jin', '수빈': 'Su-bin'
    }
    const englishName = (transliterationMap[surname] || 'Kim') + ' ' + (transliterationMap[givenName] || 'Ji-eun')

    return {
        fullName,
        koreanName: fullName,
        englishName,
        gender: gender === 'male' ? t('tools.kr-address-generator.genderMale') : t('tools.kr-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('ko-KR'),
        zodiac,
        bloodType: faker.helpers.arrayElement(['A', 'B', 'AB', 'O']),
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 韩国手机号：010-XXXX-XXXX
    const phoneNumber = faker.string.numeric(8)
    const phone = `010-${phoneNumber.substring(0, 4)}-${phoneNumber.substring(4)}`
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.kr-address-generator.phoneTypeMobile') : t('tools.kr-address-generator.phoneTypeLandline'),
        areaCode: '82',
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
    const jobTitles = ['소프트웨어 엔지니어', '마케팅 매니저', '영업 담당자', '교사', '간호사', '회계사', '디자이너', '컨설턴트', '의사', '변호사']
    const industries = ['IT', '의료', '교육', '금융', '소매', '제조업', '부동산', '호텔업']
    const companySizes = ['소형 (1-50)', '중형 (51-200)', '대형 (201-1000)', '기업 (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `₩${faker.number.int({ min: 2500, max: 15000 })}만원`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time' 
            ? t('tools.kr-address-generator.employmentFullTime') 
            : t('tools.kr-address-generator.employmentPartTime')
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
        timezone: 'Asia/Seoul',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        alert(t('tools.kr-address-generator.invalidQuantity'))
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
                item.idCard = generateKRIdCard()
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
    config.province = 'SEOUL'
    config.city = t('tools.kr-address-generator.cities.SEOUL.gangnam')
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
    alert(t('tools.kr-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `kr-address-${idx + 1}.json`
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
    link.download = 'kr-addresses.json'
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
            row[t('tools.kr-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.kr-address-generator.csv.street')] = item.address.street
            row[t('tools.kr-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.kr-address-generator.csv.building')] = item.address.building
            row[t('tools.kr-address-generator.csv.postalCode')] = item.address.postalCode
            row[t('tools.kr-address-generator.csv.district')] = item.address.district
        }
        if (item.identity) {
            row[t('tools.kr-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.kr-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.kr-address-generator.csv.age')] = item.identity.age
            row[t('tools.kr-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.kr-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.kr-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.kr-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.kr-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.kr-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'kr-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 省份改变
function onProvinceChange() {
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
