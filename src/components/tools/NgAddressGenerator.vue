<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.ng-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.ng-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.ng-address-generator.selectState') }}</label>
                            <select v-model="config.state" @change="onStateChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.ng-address-generator.allStates') }}</option>
                                <option v-for="state in states" :key="state.code" :value="state.code">{{ state.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.ng-address-generator.selectLga') }}</label>
                            <select v-model="config.lga"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.state">
                                <option value="">{{ $t('tools.ng-address-generator.allLgas') }}</option>
                                <option v-for="lga in filteredLgas" :key="lga" :value="lga">{{ lga }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.ng-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.ng-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.ng-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="pobox" />
                            <span>{{ $t('tools.ng-address-generator.addressTypePoBox') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.ng-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.ng-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.ng-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.ng-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.ng-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.ng-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeNin" />
                            <span>{{ $t('tools.ng-address-generator.ninTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.ng-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.ng-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.ng-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.ng-address-generator.generating') : $t('tools.ng-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.ng-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.ng-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.ng-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.ng-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.ng-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.ng-address-generator.collapse') : $t('tools.ng-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.ng-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.ng-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.ng-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.areaLabel') }}：</span> {{ item.address.area }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.lgaLabel') }}：</span> {{ item.address.lga }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.stateLabel') }}：</span> {{ item.address.state }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.nin">
                                    <div><span class="font-medium">{{ $t('tools.ng-address-generator.ninNumber') }}：</span> {{ item.nin.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.ng-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.ng-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.ng-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.ng-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.ng-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.ng-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <NgAddressGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import NgAddressGeneratorArticle from './NgAddressGeneratorArticle.vue'

const { t } = useI18n()

// 配置
const config = reactive({
    state: '',
    lga: '',
    addressType: 'residential',
    includeIdentity: true,
    includeContact: true,
    includeCreditCard: false,
    includeCareer: false,
    includeNin: false,
    includeFingerprint: false,
    quantity: 5
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 尼日利亚36个州 + FCT
const states = computed(() => [
    { code: 'AB', name: t('tools.ng-address-generator.states.AB') },
    { code: 'AD', name: t('tools.ng-address-generator.states.AD') },
    { code: 'AK', name: t('tools.ng-address-generator.states.AK') },
    { code: 'AN', name: t('tools.ng-address-generator.states.AN') },
    { code: 'BA', name: t('tools.ng-address-generator.states.BA') },
    { code: 'BY', name: t('tools.ng-address-generator.states.BY') },
    { code: 'CR', name: t('tools.ng-address-generator.states.CR') },
    { code: 'DE', name: t('tools.ng-address-generator.states.DE') },
    { code: 'EB', name: t('tools.ng-address-generator.states.EB') },
    { code: 'ED', name: t('tools.ng-address-generator.states.ED') },
    { code: 'EK', name: t('tools.ng-address-generator.states.EK') },
    { code: 'EN', name: t('tools.ng-address-generator.states.EN') },
    { code: 'FC', name: t('tools.ng-address-generator.states.FC') },
    { code: 'GO', name: t('tools.ng-address-generator.states.GO') },
    { code: 'IM', name: t('tools.ng-address-generator.states.IM') },
    { code: 'JI', name: t('tools.ng-address-generator.states.JI') },
    { code: 'KD', name: t('tools.ng-address-generator.states.KD') },
    { code: 'KE', name: t('tools.ng-address-generator.states.KE') },
    { code: 'KN', name: t('tools.ng-address-generator.states.KN') },
    { code: 'KO', name: t('tools.ng-address-generator.states.KO') },
    { code: 'KT', name: t('tools.ng-address-generator.states.KT') },
    { code: 'KW', name: t('tools.ng-address-generator.states.KW') },
    { code: 'LA', name: t('tools.ng-address-generator.states.LA') },
    { code: 'NA', name: t('tools.ng-address-generator.states.NA') },
    { code: 'NI', name: t('tools.ng-address-generator.states.NI') },
    { code: 'OG', name: t('tools.ng-address-generator.states.OG') },
    { code: 'ON', name: t('tools.ng-address-generator.states.ON') },
    { code: 'OS', name: t('tools.ng-address-generator.states.OS') },
    { code: 'OY', name: t('tools.ng-address-generator.states.OY') },
    { code: 'PL', name: t('tools.ng-address-generator.states.PL') },
    { code: 'RI', name: t('tools.ng-address-generator.states.RI') },
    { code: 'SO', name: t('tools.ng-address-generator.states.SO') },
    { code: 'TA', name: t('tools.ng-address-generator.states.TA') },
    { code: 'YO', name: t('tools.ng-address-generator.states.YO') },
    { code: 'ZA', name: t('tools.ng-address-generator.states.ZA') }
])

// LGA列表（地方政府区）
const getLgasForState = (stateCode) => {
    const lgaMap = {
        'LA': ['Lagos Island', 'Lagos Mainland', 'Ikeja', 'Eti-Osa', 'Surulere', 'Agege', 'Ifako-Ijaiye', 'Kosofe', 'Mushin', 'Oshodi-Isolo', 'Shomolu', 'Apapa', 'Amuwo-Odofin', 'Ojo', 'Ajeromi-Ifelodun', 'Badagry', 'Ikorodu', 'Epe', 'Ibeju-Lekki'],
        'FC': ['Abuja Municipal', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Abaji'],
        'KN': ['Municipal', 'Dala', 'Gwale', 'Tarauni', 'Nassarawa', 'Fagge', 'Kumbotso', 'Ungogo', 'Dawakin Tofa', 'Tofa', 'Rimin Gado', 'Bagwai', 'Gezawa', 'Gabasawa', 'Wudil', 'Dawakin Kudu', 'Bichi', 'Minjibir', 'Takai', 'Albasu', 'Bebeji', 'Rano', 'Kibiya', 'Sumaila', 'Garko', 'Doguwa', 'Madobi', 'Kura', 'Garun Mallam', 'Kano'],
        'RI': ['Port Harcourt', 'Obio-Akpor', 'Eleme', 'Oyigbo', 'Ikwerre', 'Etche', 'Khana', 'Gokana', 'Tai', 'Andoni', 'Opobo-Nkoro', 'Ogba-Egbema-Ndoni', 'Ahoada East', 'Ahoada West', 'Abua-Odual', 'Degema', 'Asari-Toru', 'Akuku-Toru', 'Bonny', 'Okrika'],
        'OY': ['Ibadan North', 'Ibadan North East', 'Ibadan North West', 'Ibadan South East', 'Ibadan South West', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Egbeda', 'Ona Ara', 'Oluyole', 'Irepo', 'Orelope', 'Olorunsogo', 'Iseyin', 'Saki East', 'Saki West', 'Atisbo', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Ogo Oluwa', 'Surulere', 'Afijio', 'Akinyele', 'Lagelu'],
        'KD': ['Kaduna North', 'Kaduna South', 'Zaria', 'Igabi', 'Chikun', 'Kajuru', 'Kubau', 'Kudan', 'Soba', 'Makarfi', 'Ikara', 'Sabon Gari', 'Giwa', 'Birnin Gwari', 'Kachia', 'Kagarko', 'Jaba', 'Jema\'a', 'Kaura', 'Sanga', 'Lere'],
        'OG': ['Abeokuta North', 'Abeokuta South', 'Ewekoro', 'Ifo', 'Obafemi Owode', 'Odeda', 'Ado-Odo/Ota', 'Imeko Afon', 'Ipokia', 'Yewa North', 'Yewa South', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Odogbolu', 'Ogun Waterside', 'Remo North', 'Sagamu', 'Ikenne'],
        'DE': ['Asaba', 'Oshimili South', 'Oshimili North', 'Aniocha South', 'Aniocha North', 'Ika South', 'Ika North East', 'Ndokwa East', 'Ndokwa West', 'Ukwuani', 'Ethiope East', 'Ethiope West', 'Sapele', 'Okpe', 'Uvwie', 'Udu', 'Warri North', 'Warri South', 'Warri South West', 'Isoko North', 'Isoko South', 'Bomadi', 'Burutu', 'Patani']
    }
    return lgaMap[stateCode] || ['Central', 'North', 'South', 'East', 'West']
}

const filteredLgas = computed(() => {
    if (!config.state) return []
    return getLgasForState(config.state)
})

// 尼日利亚街道名称
const ngStreets = [
    'Adekunle Street', 'Adeniran Ogunsanya Street', 'Allen Avenue', 'Awolowo Road', 'Bode Thomas Street',
    'Broad Street', 'Church Street', 'Glover Road', 'Hospital Road', 'Ikorodu Road',
    'Kingsway Road', 'Lagos Island', 'Marina', 'Mobolaji Bank Anthony Way', 'Oba Akran Avenue',
    'Opebi Road', 'Toyin Street', 'Victoria Island', 'Ahmadu Bello Way', 'Garki Road',
    'Wuse Road', 'Maitama Street', 'Asokoro Road', 'Central Business District', 'Airport Road',
    'Ring Road', 'Sango Road', 'Challenge Road', 'Dugbe Road', 'Jericho Road',
    'Bodija Road', 'Secretariat Road', 'Eleyele Road', 'Monatan Road', 'Gate Road',
    'Abuja Road', 'Kano Road', 'Zaria Road', 'Tudun Wada Road', 'Sabon Gari Road'
]

// 区域名称
const areaNames = [
    'GRA', 'Estate', 'Layout', 'Quarters', 'District', 'Zone', 'Extension', 'Scheme', 'Garden', 'Layout'
]

onMounted(() => {
    loadSample()
})

// 生成Luhn算法信用卡号
function generateCreditCardNumber(type = 'visa') {
    const prefixes = {
        visa: ['4'],
        mastercard: ['51', '52', '53', '54', '55'],
        verve: ['5061', '5062']
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

// 生成尼日利亚NIN号码
function generateNIN() {
    // NIN是11位数字
    const number = faker.string.numeric(11)
    return {
        number
    }
}

// 生成尼日利亚地址
function generateAddress() {
    const stateObj = config.state 
        ? states.value.find(s => s.code === config.state)
        : faker.helpers.arrayElement(states.value)
    const stateName = stateObj ? stateObj.name : t('tools.ng-address-generator.states.LA')
    
    const lgaName = config.lga || (config.state && filteredLgas.value.length > 0
        ? faker.helpers.arrayElement(filteredLgas.value)
        : faker.helpers.arrayElement(getLgasForState('LA')))
    
    const street = faker.helpers.arrayElement(ngStreets)
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const areaName = faker.helpers.arrayElement(areaNames)
    const areaNumber = faker.number.int({ min: 1, max: 50 })
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${houseNumber}, ${street}, ${areaName} ${areaNumber}, ${lgaName}, ${stateName}`
            break
        case 'commercial':
            fullAddress = `${houseNumber}, ${street}, ${areaName} ${areaNumber}, ${lgaName}, ${stateName} (${t('tools.ng-address-generator.commercialArea')})`
            break
        case 'pobox':
            fullAddress = `P.O. Box ${faker.number.int({ min: 100, max: 9999 })}, ${lgaName}, ${stateName}`
            break
        case 'campus':
            const universities = [t('tools.ng-address-generator.universities.UNILAG'), t('tools.ng-address-generator.universities.U.I'), t('tools.ng-address-generator.universities.ABU'), t('tools.ng-address-generator.universities.UNIPORT'), t('tools.ng-address-generator.universities.UNN')]
            const campusTypes = [t('tools.ng-address-generator.hostel'), t('tools.ng-address-generator.faculty'), t('tools.ng-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)}, ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}, ${lgaName}, ${stateName}`
            break
        default:
            fullAddress = `${houseNumber}, ${street}, ${areaName} ${areaNumber}, ${lgaName}, ${stateName}`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}`,
        area: `${areaName} ${areaNumber}`,
        lga: lgaName,
        state: stateName,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 使用尼日利亚姓名
    const firstName = faker.person.firstName(gender)
    const lastName = faker.person.lastName()
    const fullName = `${firstName} ${lastName}`
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    return {
        fullName,
        firstName,
        lastName,
        gender: gender === 'male' ? t('tools.ng-address-generator.genderMale') : t('tools.ng-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('en-NG'),
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    // 尼日利亚电话：+234开头，10位数字（去掉前导0）
    const networkPrefixes = ['803', '806', '813', '816', '810', '814', '815', '811', '703', '706', '802', '808', '812', '902', '903', '906', '913', '915', '916']
    const prefix = faker.helpers.arrayElement(networkPrefixes)
    const phoneNumber = faker.string.numeric(7)
    const phone = `+234 ${prefix} ${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3)}`
    
    return {
        phone,
        phoneType: t('tools.ng-address-generator.phoneTypeMobile'),
        areaCode: '234',
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

// 生成信用卡
function generateCreditCard() {
    const types = ['visa', 'mastercard', 'verve']
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
    const jobTitles = ['Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Doctor', 'Lawyer', 'Banker', 'Trader', 'Civil Servant', 'Entrepreneur']
    const industries = ['Technology', 'Finance', 'Education', 'Healthcare', 'Oil & Gas', 'Manufacturing', 'Retail', 'Agriculture', 'Telecommunications']
    const companySizes = ['Small (1-50)', 'Medium (51-200)', 'Large (201-1000)', 'Enterprise (1000+)']
    const employmentStatuses = ['full-time', 'part-time', 'contract']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `₦${faker.number.int({ min: 50000, max: 500000 }).toLocaleString()}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses)
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
        timezone: 'Africa/Lagos',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        alert(t('tools.ng-address-generator.invalidQuantity'))
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
            
            if (config.includeNin) {
                item.nin = generateNIN()
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
    config.state = 'LA'
    config.lga = 'Ikeja'
    config.addressType = 'residential'
    config.includeIdentity = true
    config.includeContact = true
    config.includeCreditCard = true
    config.includeCareer = true
    config.includeNin = true
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
    alert(t('tools.ng-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `ng-address-${idx + 1}.json`
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
    link.download = 'ng-addresses.json'
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
            row[t('tools.ng-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.ng-address-generator.csv.street')] = item.address.street
            row[t('tools.ng-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.ng-address-generator.csv.area')] = item.address.area
            row[t('tools.ng-address-generator.csv.lga')] = item.address.lga
            row[t('tools.ng-address-generator.csv.state')] = item.address.state
        }
        if (item.identity) {
            row[t('tools.ng-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.ng-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.ng-address-generator.csv.age')] = item.identity.age
            row[t('tools.ng-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.ng-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.ng-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.ng-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.ng-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.nin) {
            row[t('tools.ng-address-generator.csv.ninNumber')] = item.nin.number
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
    link.download = 'ng-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 州改变
function onStateChange() {
    config.lga = ''
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
