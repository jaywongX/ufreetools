<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.taiwan-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.taiwan-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{
                                $t('tools.taiwan-address-generator.selectCity') }}</label>
                            <select v-model="config.city" @change="onCityChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.taiwan-address-generator.allCities') }}</option>
                                <option v-for="city in cities" :key="city.code" :value="city.code">{{ city.name }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{
                                $t('tools.taiwan-address-generator.selectDistrict') }}</label>
                            <select v-model="config.district"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.city">
                                <option value="">{{ $t('tools.taiwan-address-generator.allDistricts') }}</option>
                                <option v-for="district in filteredDistricts" :key="district.key" :value="district.key">
                                    {{ district.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.taiwan-address-generator.addressTypeTitle') }}
                    </h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.taiwan-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.taiwan-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.taiwan-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.taiwan-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.taiwan-address-generator.generateOptionsTitle')
                        }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.taiwan-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.taiwan-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.taiwan-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.taiwan-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.taiwan-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.taiwan-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.taiwan-address-generator.quantityLabel')
                        }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.taiwan-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.taiwan-address-generator.generating') :
                            $t('tools.taiwan-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.taiwan-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.taiwan-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.taiwan-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.taiwan-address-generator.resultCount', {
                            count:
                            generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.taiwan-address-generator.recordLabel', {
                                    num: idx
                                    + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.taiwan-address-generator.collapse') :
                                        $t('tools.taiwan-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.taiwan-address-generator.addressLabel')
                                        }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.taiwan-address-generator.fullName')
                                        }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.taiwan-address-generator.phoneNumber')
                                        }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.streetLabel')
                                            }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{
                                        $t('tools.taiwan-address-generator.houseNumberLabel') }}：</span> {{
                                        item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.buildingLabel')
                                            }}：</span> {{ item.address.building }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.floorLabel')
                                            }}：</span> {{ item.address.floor }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.unitLabel')
                                            }}：</span> {{ item.address.unit }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.districtLabel')
                                            }}：</span> {{ item.address.district }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.cityLabel')
                                            }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{
                                        $t('tools.taiwan-address-generator.postalCodeLabel') }}：</span> {{
                                        item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.fullName')
                                            }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.gender')
                                            }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.age')
                                            }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.birthDate')
                                            }}：</span> {{ item.identity.birthDate }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.zodiac')
                                            }}：</span> {{ item.identity.zodiac }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.height')
                                            }}：</span> {{ item.identity.height }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.weight')
                                            }}：</span> {{ item.identity.weight }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.phoneNumber')
                                            }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.phoneType')
                                            }}：</span> {{ item.contact.phoneType }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.areaCode')
                                            }}：</span> {{ item.contact.areaCode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.email')
                                            }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.cardType')
                                            }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.cardNumber')
                                            }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.expiryDate')
                                            }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.cvv')
                                            }}：</span> {{ item.creditCard.cvv }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.bankBin')
                                            }}：</span> {{ item.creditCard.bankBin }}</div>
                                </div>
                                <div v-if="item.career" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.jobTitle')
                                            }}：</span> {{ item.career.jobTitle }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.salary')
                                            }}：</span> {{ item.career.salary }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.companyName')
                                            }}：</span> {{ item.career.companyName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.companySize')
                                            }}：</span> {{ item.career.companySize }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.industry')
                                            }}：</span> {{ item.career.industry }}</div>
                                    <div><span class="font-medium">{{
                                        $t('tools.taiwan-address-generator.employmentStatus') }}：</span> {{
                                        item.career.employmentStatus }}</div>
                                </div>
                                <div v-if="item.idCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.idCardNumber')
                                            }}：</span> {{ item.idCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.prefixLetter')
                                            }}：</span> {{ item.idCard.prefixLetter }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.serialNumber')
                                            }}：</span> {{ item.idCard.serialNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.checkDigit')
                                            }}：</span> {{ item.idCard.checkDigit }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.os') }}：</span>
                                        {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.osVersion')
                                            }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.browser')
                                            }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.userAgent')
                                            }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{
                                        $t('tools.taiwan-address-generator.screenResolution') }}：</span> {{
                                        item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.timezone')
                                            }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.guid')
                                            }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.ipAddress')
                                            }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.macAddress')
                                            }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.taiwan-address-generator.cookiePolicy')
                                            }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.taiwan-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.taiwan-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.taiwan-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.taiwan-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.taiwan-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.taiwan-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <TaiwanAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import TaiwanAddressGeneratorArticle from './TaiwanAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    city: '',
    district: '',
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

// 台湾县市
const cities = computed(() => [
    { code: 'TPE', name: t('tools.taiwan-address-generator.cities.TPE') },
    { code: 'NWT', name: t('tools.taiwan-address-generator.cities.NWT') },
    { code: 'TAO', name: t('tools.taiwan-address-generator.cities.TAO') },
    { code: 'TCH', name: t('tools.taiwan-address-generator.cities.TCH') },
    { code: 'TNN', name: t('tools.taiwan-address-generator.cities.TNN') },
    { code: 'KHH', name: t('tools.taiwan-address-generator.cities.KHH') },
    { code: 'KEL', name: t('tools.taiwan-address-generator.cities.KEL') },
    { code: 'HSC', name: t('tools.taiwan-address-generator.cities.HSC') },
    { code: 'MAC', name: t('tools.taiwan-address-generator.cities.MAC') },
    { code: 'CHA', name: t('tools.taiwan-address-generator.cities.CHA') },
    { code: 'PHS', name: t('tools.taiwan-address-generator.cities.PHS') },
    { code: 'ILN', name: t('tools.taiwan-address-generator.cities.ILN') },
    { code: 'HUN', name: t('tools.taiwan-address-generator.cities.HUN') },
    { code: 'TTT', name: t('tools.taiwan-address-generator.cities.TTT') },
    { code: 'PHE', name: t('tools.taiwan-address-generator.cities.PHE') },
    { code: 'CYI', name: t('tools.taiwan-address-generator.cities.CYI') },
    { code: 'HSQ', name: t('tools.taiwan-address-generator.cities.HSQ') },
    { code: 'MLI', name: t('tools.taiwan-address-generator.cities.MLI') },
    { code: 'CSG', name: t('tools.taiwan-address-generator.cities.CSG') },
    { code: 'NAN', name: t('tools.taiwan-address-generator.cities.NAN') },
    { code: 'YUN', name: t('tools.taiwan-address-generator.cities.YUN') },
    { code: 'CYY', name: t('tools.taiwan-address-generator.cities.CYY') },
    { code: 'PIF', name: t('tools.taiwan-address-generator.cities.PIF') },
    { code: 'ILA', name: t('tools.taiwan-address-generator.cities.ILA') },
    { code: 'HUA', name: t('tools.taiwan-address-generator.cities.HUA') },
    { code: 'TTT_C', name: t('tools.taiwan-address-generator.cities.TTT_C') },
    { code: 'KIN', name: t('tools.taiwan-address-generator.cities.KIN') },
    { code: 'LIE', name: t('tools.taiwan-address-generator.cities.LIE') }
])

// 获取区域名
const getDistrictsForCity = (cityCode) => {
    const districtMap = {
        'TPE': ['songshan', 'xinyi', 'daan', 'zhongshan', 'zhongzheng', 'datong', 'wanhua', 'wenshan', 'nangang', 'neihu', 'shilin', 'bei'],
        'NWT': ['banqiao', 'sanxia', 'yingge', 'tucheng', 'xindian', 'pinglin', 'shenkeng', 'shiding', 'ruifang', 'gongliao', 'shuangxi', 'jinshan', 'wulai', 'yonghe', 'zhonghe', 'xinzhuang', 'taishan', 'Linkou', 'sansia', 'xizhi', 'pingxi'],
        'TAO': ['taoyuan', 'zhongli', 'daxi', 'yangmei', 'lujhu', 'dayuan', 'guishan', 'bade', 'longtan', 'pingzhen', 'fusing', 'dashan', 'sinwu', 'guanxi', 'xinwu'],
        'TCH': ['central', 'east', 'south', 'west', 'bei', 'nantun', 'xitun', 'wuri', 'fengyuan', 'houli', 'shengang', 'dali', 'taiping', 'dajia', 'shalu', 'wuqi', 'qingshui', 'daan', 'wufeng', 'dongshi', 'heping', 'xinshi', 'tanzih', 'waipu', 'daya']
    }
    return districtMap[cityCode] || []
}

const filteredDistricts = computed(() => {
    if (!config.city) return []
    const districtKeys = getDistrictsForCity(config.city)
    return districtKeys.map(key => ({
        key,
        name: t(`tools.taiwan-address-generator.districts.${config.city}.${key}`)
    }))
})

// 台湾街道名称
const taiwanStreets = computed(() => [
    t('tools.taiwan-address-generator.streetNames.zhongshan'),
    t('tools.taiwan-address-generator.streetNames.zhongzheng'),
    t('tools.taiwan-address-generator.streetNames.minzu'),
    t('tools.taiwan-address-generator.streetNames.minsheng'),
    t('tools.taiwan-address-generator.streetNames.minquan'),
    t('tools.taiwan-address-generator.streetNames.fuxing'),
    t('tools.taiwan-address-generator.streetNames.boai'),
    t('tools.taiwan-address-generator.streetNames.renai'),
    t('tools.taiwan-address-generator.streetNames.heping'),
    t('tools.taiwan-address-generator.streetNames.jianguo'),
    t('tools.taiwan-address-generator.streetNames.zhongxiao'),
    t('tools.taiwan-address-generator.streetNames.xinyi'),
    t('tools.taiwan-address-generator.streetNames.datong'),
    t('tools.taiwan-address-generator.streetNames.guangfu'),
    t('tools.taiwan-address-generator.streetNames.ziqiang'),
    t('tools.taiwan-address-generator.streetNames.sanmin'),
    t('tools.taiwan-address-generator.streetNames.zhonghua'),
    t('tools.taiwan-address-generator.streetNames.wenhua'),
    t('tools.taiwan-address-generator.streetNames.ziqiang'),
    t('tools.taiwan-address-generator.streetNames.jianshe'),
    t('tools.taiwan-address-generator.streetNames.nanjing'),
    t('tools.taiwan-address-generator.streetNames.beijing'),
    t('tools.taiwan-address-generator.streetNames.shanghai'),
    t('tools.taiwan-address-generator.streetNames.tianjin'),
    t('tools.taiwan-address-generator.streetNames.chongqing'),
    t('tools.taiwan-address-generator.streetNames.hankou'),
    t('tools.taiwan-address-generator.streetNames.chengdu'),
    t('tools.taiwan-address-generator.streetNames.xian'),
    t('tools.taiwan-address-generator.streetNames.taiyuan'),
    t('tools.taiwan-address-generator.streetNames.jinan'),
    t('tools.taiwan-address-generator.streetNames.changchun'),
    t('tools.taiwan-address-generator.streetNames.siping'),
    t('tools.taiwan-address-generator.streetNames.shenyang'),
    t('tools.taiwan-address-generator.streetNames.haerbin'),
    t('tools.taiwan-address-generator.streetNames.changchun'),
    t('tools.taiwan-address-generator.streetNames.nanjingdong'),
    t('tools.taiwan-address-generator.streetNames.nanjingxi'),
    t('tools.taiwan-address-generator.streetNames.chongqingbei'),
    t('tools.taiwan-address-generator.streetNames.chongqingnan'),
    t('tools.taiwan-address-generator.streetNames.zhongshanbei'),
    t('tools.taiwan-address-generator.streetNames.zhongshannan'),
    t('tools.taiwan-address-generator.streetNames.jianguobei'),
    t('tools.taiwan-address-generator.streetNames.jianguonan'),
    t('tools.taiwan-address-generator.streetNames.minzudong'),
    t('tools.taiwan-address-generator.streetNames.minzuxi'),
    t('tools.taiwan-address-generator.streetNames.minshengdong'),
    t('tools.taiwan-address-generator.streetNames.minshengxi'),
    t('tools.taiwan-address-generator.streetNames.minquandong'),
    t('tools.taiwan-address-generator.streetNames.minquanxi'),
    t('tools.taiwan-address-generator.streetNames.fuxingdong'),
    t('tools.taiwan-address-generator.streetNames.fuxingxi'),
    t('tools.taiwan-address-generator.streetNames.hepingdong'),
    t('tools.taiwan-address-generator.streetNames.hepingxi')
])

// 台湾大厦名称后缀
const buildingSuffixes = ['大厦', '大楼', '中心', '广场', '花园', '商号', '商厦', '大楼', '精品', '城', '馆', '大楼', '大楼', '大楼']

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

// 生成台湾身份证号
function generateTaiwanIdCard() {
    // 台湾身份证格式：首字母+9位数字
    const prefixLetters = 'ABCDEFGHJKLMNPQRSTUVWXYZIO'
    const prefix = faker.helpers.arrayElement(prefixLetters.split(''))
    const genderDigit = faker.helpers.arrayElement(['1', '2']) // 1:男, 2:女
    const serial = faker.string.numeric(8)

    // 计算校验码（简化算法）
    const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
    let sum = 0
    const prefixValue = prefixLetters.indexOf(prefix) + 10
    sum += Math.floor(prefixValue / 10) * 1 + (prefixValue % 10) * 9

    const idNumber = prefix + genderDigit + serial
    for (let i = 0; i < idNumber.length - 1; i++) {
        sum += parseInt(idNumber[i]) * weights[i + 2]
    }

    const checkDigit = (10 - (sum % 10)) % 10

    return {
        number: idNumber + checkDigit,
        prefixLetter: prefix,
        serialNumber: genderDigit + serial,
        checkDigit: checkDigit.toString()
    }
}

// 生成台湾地址
function generateAddress() {
    const cityObj = config.city
        ? cities.value.find(c => c.code === config.city)
        : faker.helpers.arrayElement(cities.value)
    const cityName = cityObj ? cityObj.name : t('tools.taiwan-address-generator.cities.TPE')

    // 获取区域名称，将区域键转换为实际名称
    let districtName = ''
    if (config.district) {
        districtName = t(`tools.taiwan-address-generator.districts.${config.city}.${config.district}`)
    } else if (config.city && filteredDistricts.value.length > 0) {
        districtName = faker.helpers.arrayElement(filteredDistricts.value).name
    } else {
        districtName = t('tools.taiwan-address-generator.districts.TPE.daan')
    }

    const street = faker.helpers.arrayElement(taiwanStreets.value)
    const section = Math.random() > 0.7 ? faker.number.int({ min: 1, max: 5 }) : ''
    const lane = Math.random() > 0.8 ? faker.number.int({ min: 1, max: 50 }) : ''
    const alley = Math.random() > 0.9 ? faker.number.int({ min: 1, max: 20 }) : ''
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const buildingName = faker.helpers.arrayElement([
        t('tools.taiwan-address-generator.buildingPrefixes.xinyi'),
        t('tools.taiwan-address-generator.buildingPrefixes.daan'),
        t('tools.taiwan-address-generator.buildingPrefixes.zhongshan'),
        t('tools.taiwan-address-generator.buildingPrefixes.zhongzheng'),
        t('tools.taiwan-address-generator.buildingPrefixes.songshan'),
        t('tools.taiwan-address-generator.buildingPrefixes.neihu'),
        t('tools.taiwan-address-generator.buildingPrefixes.nangang'),
        t('tools.taiwan-address-generator.buildingPrefixes.wenshan'),
        t('tools.taiwan-address-generator.buildingPrefixes.shilin'),
        t('tools.taiwan-address-generator.buildingPrefixes.beitou')
    ]) + faker.helpers.arrayElement(buildingSuffixes)

    const floor = Math.random() > 0.5 ? faker.number.int({ min: 1, max: 20 }) : ''
    const unit = floor ? faker.helpers.arrayElement(['A', 'B', 'C', 'D']) + faker.number.int({ min: 1, max: 20 }) : ''

    // 台湾邮编（3位数字）
    const postalCode = faker.string.numeric(3)

    let fullAddress = ''

    switch (config.addressType) {
        case 'residential':
            fullAddress = `${postalCode} ${cityName}${districtName}`
            if (section) fullAddress += `${section}${t('tools.taiwan-address-generator.section')}`
            fullAddress += `${street}`
            if (lane) fullAddress += `${lane}${t('tools.taiwan-address-generator.lane')}`
            if (alley) fullAddress += `${alley}${t('tools.taiwan-address-generator.alley')}`
            fullAddress += `${houseNumber}${t('tools.taiwan-address-generator.addressNumber')}`
            if (buildingName) fullAddress += ` ${buildingName}`
            if (floor) fullAddress += ` ${floor}${t('tools.taiwan-address-generator.addressFloor')}`
            if (unit) fullAddress += ` ${unit}${t('tools.taiwan-address-generator.addressUnit')}`
            break
        case 'commercial':
            fullAddress = `${postalCode} ${cityName}${districtName}`
            if (section) fullAddress += `${section}${t('tools.taiwan-address-generator.section')}`
            fullAddress += `${street}`
            if (lane) fullAddress += `${lane}${t('tools.taiwan-address-generator.lane')}`
            if (alley) fullAddress += `${alley}${t('tools.taiwan-address-generator.alley')}`
            fullAddress += `${houseNumber}${t('tools.taiwan-address-generator.addressNumber')}`
            if (buildingName) fullAddress += ` ${buildingName}`
            if (floor) fullAddress += ` ${floor}${t('tools.taiwan-address-generator.addressFloor')}`
            if (unit) fullAddress += ` ${unit}${t('tools.taiwan-address-generator.addressUnit')}${t('tools.taiwan-address-generator.commercialUnit')}`
            break
        case 'virtual':
            fullAddress = `${postalCode} ${cityName}${districtName}${t('tools.taiwan-address-generator.postOfficeBox')} ${faker.number.int({ min: 100, max: 9999 })}${t('tools.taiwan-address-generator.addressNumber')}`
            break
        case 'campus':
            const universityCodes = t('tools.taiwan-address-generator.universityList')
            const universities = universityCodes.map(code => t(`tools.taiwan-address-generator.universities.${code}`))
            const campusTypes = [t('tools.taiwan-address-generator.studentDormitory'), t('tools.taiwan-address-generator.teachingBuilding'), t('tools.taiwan-address-generator.library')]
            fullAddress = `${postalCode} ${cityName}${districtName}${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}${t('tools.taiwan-address-generator.buildingUnit')}`
            break
        default:
            fullAddress = `${postalCode} ${cityName}${districtName}`
            if (section) fullAddress += `${section}${t('tools.taiwan-address-generator.section')}`
            fullAddress += `${street}`
            if (lane) fullAddress += `${lane}${t('tools.taiwan-address-generator.lane')}`
            if (alley) fullAddress += `${alley}${t('tools.taiwan-address-generator.alley')}`
            fullAddress += `${houseNumber}${t('tools.taiwan-address-generator.addressNumber')}`
    }

    return {
        street,
        houseNumber: `${houseNumber}${t('tools.taiwan-address-generator.addressNumber')}`,
        building: buildingName,
        floor: floor ? `${floor}${t('tools.taiwan-address-generator.addressFloor')}` : '',
        unit: unit ? `${unit}${t('tools.taiwan-address-generator.addressUnit')}` : '',
        section: section ? `${section}${t('tools.taiwan-address-generator.section')}` : '',
        lane: lane ? `${lane}${t('tools.taiwan-address-generator.lane')}` : '',
        alley: alley ? `${alley}${t('tools.taiwan-address-generator.alley')}` : '',
        district: districtName,
        city: cityName,
        postalCode,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 使用中文姓名生成
    const chineseSurnames = t('tools.taiwan-address-generator.surnames')
    const chineseGivenNames = t('tools.taiwan-address-generator.givenNames')

    const surname = faker.helpers.arrayElement(chineseSurnames)
    const givenName = faker.helpers.arrayElement(chineseGivenNames) + (Math.random() > 0.5 ? faker.helpers.arrayElement(chineseGivenNames) : '')
    const fullName = surname + givenName

    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()

    const zodiacSigns = t('tools.taiwan-address-generator.zodiacSigns')
    const month = birthDate.getMonth()
    const day = birthDate.getDate()
    let zodiac = ''
    if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) zodiac = zodiacSigns.aries
    else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) zodiac = zodiacSigns.taurus
    else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) zodiac = zodiacSigns.gemini
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) zodiac = zodiacSigns.cancer
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) zodiac = zodiacSigns.leo
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiac = zodiacSigns.virgo
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiac = zodiacSigns.libra
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) zodiac = zodiacSigns.scorpio
    else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) zodiac = zodiacSigns.sagittarius
    else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) zodiac = zodiacSigns.capricorn
    else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) zodiac = zodiacSigns.aquarius
    else zodiac = zodiacSigns.pisces

    return {
        fullName,
        gender: gender === 'male' ? t('tools.taiwan-address-generator.genderMale') : t('tools.taiwan-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('zh-TW'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 台湾电话：+886开头，9位手机号或8位座机号
    const phoneNumber = phoneType === 'mobile'
        ? faker.string.numeric(9)
        : faker.string.numeric(8)

    // 台湾手机号前缀通常是09
    const phone = phoneType === 'mobile'
        ? `+886 0${phoneNumber.substring(0, 1)}-${phoneNumber.substring(1, 4)}-${phoneNumber.substring(4)}`
        : `+886 0${phoneNumber.substring(0, 2)}-${phoneNumber.substring(2, 5)}-${phoneNumber.substring(5)}`

    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.taiwan-address-generator.phoneTypeMobile') : t('tools.taiwan-address-generator.phoneTypeLandline'),
        areaCode: '886',
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
    const jobTitles = t('tools.taiwan-address-generator.jobTitles')
    const industries = t('tools.taiwan-address-generator.industries')
    const companySizes = t('tools.taiwan-address-generator.companySizes')
    const employmentStatuses = ['full-time', 'part-time']

    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `NT$${faker.number.int({ min: 22000, max: 120000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time'
            ? t('tools.taiwan-address-generator.employmentFullTime')
            : t('tools.taiwan-address-generator.employmentPartTime')
    }
}

// 生成数字指纹
function generateFingerprint() {
    const osTypes = t('tools.taiwan-address-generator.osTypes')
    const browsers = t('tools.taiwan-address-generator.browsers')
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
        timezone: 'Asia/Taipei',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(t('tools.taiwan-address-generator.cookiePolicies'))
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.taiwan-address-generator.invalidQuantity'))
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
                item.idCard = generateTaiwanIdCard()
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
    config.city = 'TPE'
    config.district = 'daan'
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
    toastRef.value.show(t('tools.taiwan-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `taiwan-address-${idx + 1}.json`
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
    link.download = 'taiwan-addresses.json'
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
            row[t('tools.taiwan-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.taiwan-address-generator.csv.street')] = item.address.street
            row[t('tools.taiwan-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.taiwan-address-generator.csv.building')] = item.address.building
            row[t('tools.taiwan-address-generator.csv.floor')] = item.address.floor
            row[t('tools.taiwan-address-generator.csv.unit')] = item.address.unit
            row[t('tools.taiwan-address-generator.csv.district')] = item.address.district
            row[t('tools.taiwan-address-generator.csv.city')] = item.address.city
            row[t('tools.taiwan-address-generator.csv.postalCode')] = item.address.postalCode
        }
        if (item.identity) {
            row[t('tools.taiwan-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.taiwan-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.taiwan-address-generator.csv.age')] = item.identity.age
            row[t('tools.taiwan-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.taiwan-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.taiwan-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.taiwan-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.taiwan-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.taiwan-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'taiwan-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 市改变
function onCityChange() {
    config.district = ''
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