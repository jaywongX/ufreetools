<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.cn-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.cn-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.cn-address-generator.selectProvince') }}</label>
                            <select v-model="config.province" @change="onProvinceChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.cn-address-generator.allProvinces') }}</option>
                                <option v-for="province in provinces" :key="province.code" :value="province.code">{{ province.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.cn-address-generator.selectCity') }}</label>
                            <select v-model="config.city" @change="onCityChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.province">
                                <option value="">{{ $t('tools.cn-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city.code" :value="city.code">{{ city.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.cn-address-generator.selectDistrict') }}</label>
                            <select v-model="config.district"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.city">
                                <option value="">{{ $t('tools.cn-address-generator.allDistricts') }}</option>
                                <option v-for="district in filteredDistricts" :key="district" :value="district">{{ district }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.cn-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-3 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.cn-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.cn-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.cn-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.cn-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.cn-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.cn-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeBankCard" />
                            <span>{{ $t('tools.cn-address-generator.bankCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.cn-address-generator.idCardTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.cn-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.cn-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.cn-address-generator.generating') : $t('tools.cn-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.cn-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.cn-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.cn-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.cn-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.cn-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.cn-address-generator.collapse') : $t('tools.cn-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.cn-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.cn-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.cn-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.provinceLabel') }}：</span> {{ item.address.province }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.cityLabel') }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.districtLabel') }}：</span> {{ item.address.district }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.communityLabel') }}：</span> {{ item.address.community }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.bankCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.bankName') }}：</span> {{ item.bankCard.bankName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.cardNumber') }}：</span> {{ item.bankCard.cardNumber }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.cn-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.cn-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.cn-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.cn-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.cn-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.cn-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.cn-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <CnAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import CnAddressGeneratorArticle from './CnAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    province: '',
    city: '',
    district: '',
    addressType: 'residential',
    includeIdentity: true,
    includeContact: true,
    includeBankCard: false,
    includeIdCard: false,
    quantity: 5
})

// 数据
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 省份列表
const provinces = computed(() => [
    { code: 'beijing', name: t('tools.cn-address-generator.provinces.beijing') },
    { code: 'shanghai', name: t('tools.cn-address-generator.provinces.shanghai') },
    { code: 'tianjin', name: t('tools.cn-address-generator.provinces.tianjin') },
    { code: 'chongqing', name: t('tools.cn-address-generator.provinces.chongqing') },
    { code: 'guangdong', name: t('tools.cn-address-generator.provinces.guangdong') },
    { code: 'jiangsu', name: t('tools.cn-address-generator.provinces.jiangsu') },
    { code: 'zhejiang', name: t('tools.cn-address-generator.provinces.zhejiang') },
    { code: 'shandong', name: t('tools.cn-address-generator.provinces.shandong') },
    { code: 'henan', name: t('tools.cn-address-generator.provinces.henan') },
    { code: 'sichuan', name: t('tools.cn-address-generator.provinces.sichuan') },
    { code: 'hubei', name: t('tools.cn-address-generator.provinces.hubei') },
    { code: 'hunan', name: t('tools.cn-address-generator.provinces.hunan') },
    { code: 'fujian', name: t('tools.cn-address-generator.provinces.fujian') },
    { code: 'anhui', name: t('tools.cn-address-generator.provinces.anhui') },
    { code: 'hebei', name: t('tools.cn-address-generator.provinces.hebei') },
    { code: 'shaanxi', name: t('tools.cn-address-generator.provinces.shaanxi') },
    { code: 'liaoning', name: t('tools.cn-address-generator.provinces.liaoning') },
    { code: 'jilin', name: t('tools.cn-address-generator.provinces.jilin') },
    { code: 'heilongjiang', name: t('tools.cn-address-generator.provinces.heilongjiang') },
    { code: 'yunnan', name: t('tools.cn-address-generator.provinces.yunnan') },
    { code: 'guizhou', name: t('tools.cn-address-generator.provinces.guizhou') },
    { code: 'guangxi', name: t('tools.cn-address-generator.provinces.guangxi') },
    { code: 'hainan', name: t('tools.cn-address-generator.provinces.hainan') },
    { code: 'shanxi', name: t('tools.cn-address-generator.provinces.shanxi') },
    { code: 'jiangxi', name: t('tools.cn-address-generator.provinces.jiangxi') },
    { code: 'gansu', name: t('tools.cn-address-generator.provinces.gansu') },
    { code: 'qinghai', name: t('tools.cn-address-generator.provinces.qinghai') },
    { code: 'neimenggu', name: t('tools.cn-address-generator.provinces.neimenggu') },
    { code: 'ningxia', name: t('tools.cn-address-generator.provinces.ningxia') },
    { code: 'xinjiang', name: t('tools.cn-address-generator.provinces.xinjiang') },
    { code: 'xizang', name: t('tools.cn-address-generator.provinces.xizang') }
])

// 城市数据
const cityData = {
    beijing: [{ code: 'beijing', name: '北京市' }],
    shanghai: [{ code: 'shanghai', name: '上海市' }],
    tianjin: [{ code: 'tianjin', name: '天津市' }],
    chongqing: [{ code: 'chongqing', name: '重庆市' }],
    guangdong: [
        { code: 'guangzhou', name: '广州市' },
        { code: 'shenzhen', name: '深圳市' },
        { code: 'dongguan', name: '东莞市' },
        { code: 'foshan', name: '佛山市' },
        { code: 'zhuhai', name: '珠海市' }
    ],
    jiangsu: [
        { code: 'nanjing', name: '南京市' },
        { code: 'suzhou', name: '苏州市' },
        { code: 'wuxi', name: '无锡市' },
        { code: 'changzhou', name: '常州市' },
        { code: 'nantong', name: '南通市' }
    ],
    zhejiang: [
        { code: 'hangzhou', name: '杭州市' },
        { code: 'ningbo', name: '宁波市' },
        { code: 'wenzhou', name: '温州市' },
        { code: 'shaoxing', name: '绍兴市' },
        { code: 'jiaxing', name: '嘉兴市' }
    ],
    shandong: [
        { code: 'jinan', name: '济南市' },
        { code: 'qingdao', name: '青岛市' },
        { code: 'yantai', name: '烟台市' },
        { code: 'weifang', name: '潍坊市' }
    ],
    sichuan: [
        { code: 'chengdu', name: '成都市' },
        { code: 'mianyang', name: '绵阳市' },
        { code: 'deyang', name: '德阳市' }
    ],
    hubei: [
        { code: 'wuhan', name: '武汉市' },
        { code: 'yichang', name: '宜昌市' },
        { code: 'xiangyang', name: '襄阳市' }
    ],
    shaanxi: [
        { code: 'xian', name: '西安市' },
        { code: 'xianyang', name: '咸阳市' }
    ]
}

// 区县数据
const districtData = {
    beijing: ['朝阳区', '海淀区', '东城区', '西城区', '丰台区', '石景山区', '通州区', '顺义区', '大兴区', '昌平区'],
    shanghai: ['浦东新区', '黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '闵行区', '宝山区'],
    tianjin: ['和平区', '河东区', '河西区', '南开区', '河北区', '红桥区', '滨海新区', '东丽区', '西青区', '津南区'],
    chongqing: ['渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区', '北碚区', '渝北区', '巴南区'],
    guangzhou: ['天河区', '越秀区', '海珠区', '荔湾区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '增城区'],
    shenzhen: ['福田区', '罗湖区', '南山区', '盐田区', '宝安区', '龙岗区', '龙华区', '坪山区', '光明区'],
    hangzhou: ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '临安区'],
    nanjing: ['玄武区', '秦淮区', '建邺区', '鼓楼区', '浦口区', '栖霞区', '雨花台区', '江宁区', '六合区', '溧水区'],
    chengdu: ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '龙泉驿区', '青白江区', '新都区', '温江区', '双流区'],
    wuhan: ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区'],
    xian: ['新城区', '碑林区', '莲湖区', '灞桥区', '未央区', '雁塔区', '阎良区', '临潼区', '长安区', '高陵区'],
    suzhou: ['姑苏区', '虎丘区', '吴中区', '相城区', '吴江区', '昆山市', '常熟市', '张家港市', '太仓市']
}

// 筛选后的城市列表
const filteredCities = computed(() => {
    if (!config.province) return []
    return cityData[config.province] || []
})

// 筛选后的区县列表
const filteredDistricts = computed(() => {
    if (!config.city) return []
    return districtData[config.city] || districtData[config.province] || []
})

// 行政区划代码（用于身份证前6位）
const areaCodes = {
    beijing: '110000',
    shanghai: '310000',
    tianjin: '120000',
    chongqing: '500000',
    guangzhou: '440100',
    shenzhen: '440300',
    hangzhou: '330100',
    nanjing: '320100',
    chengdu: '510100',
    wuhan: '420100',
    xian: '610100',
    suzhou: '320500'
}

onMounted(() => {
    loadSample()
})

// 生成中国身份证号
function generateCNIdCard() {
    // 获取行政区划代码
    let areaCode = '110101' // 默认北京东城区
    if (config.city && areaCodes[config.city]) {
        areaCode = areaCodes[config.city].substring(0, 4) + '01'
    } else if (config.province && areaCodes[config.province]) {
        areaCode = areaCodes[config.province].substring(0, 4) + '01'
    }
    
    // 出生日期
    const birthYear = faker.number.int({ min: 1960, max: 2005 })
    const birthMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
    const birthDay = faker.number.int({ min: 1, max: 28 }).toString().padStart(2, '0')
    const birthDate = `${birthYear}${birthMonth}${birthDay}`
    
    // 顺序码（3位）
    const sequence = faker.number.int({ min: 1, max: 999 }).toString().padStart(3, '0')
    
    // 前17位
    const first17 = areaCode + birthDate + sequence
    
    // 计算校验码
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
    let sum = 0
    for (let i = 0; i < 17; i++) {
        sum += parseInt(first17[i]) * weights[i]
    }
    const checkCode = checkCodes[sum % 11]
    
    return {
        number: first17 + checkCode
    }
}

// 生成银行卡号
function generateBankCard() {
    const banks = t('tools.cn-address-generator.banks')
    const bankName = Array.isArray(banks) ? faker.helpers.arrayElement(banks) : '中国工商银行'
    
    // 银行卡BIN码
    const bins = {
        '中国工商银行': ['622202', '622203', '622208'],
        '中国建设银行': ['622700', '622280'],
        '中国农业银行': ['622848', '622845'],
        '中国银行': ['621660', '621661'],
        '交通银行': ['622260', '622261'],
        '招商银行': ['622580', '622588'],
        'default': ['622202']
    }
    
    const bin = faker.helpers.arrayElement(bins[bankName] || bins['default'])
    let cardNumber = bin
    while (cardNumber.length < 18) {
        cardNumber += faker.string.numeric(1)
    }
    
    // 格式化银行卡号
    const formatted = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ')
    
    return {
        bankName,
        cardNumber: formatted.trim()
    }
}

// 生成地址
function generateAddress() {
    const provinceObj = config.province 
        ? provinces.value.find(p => p.code === config.province)
        : faker.helpers.arrayElement(provinces.value)
    const provinceName = provinceObj ? provinceObj.name : '北京市'
    
    const cityObj = config.city 
        ? filteredCities.value.find(c => c.code === config.city)
        : (filteredCities.value.length > 0 ? faker.helpers.arrayElement(filteredCities.value) : null)
    const cityName = cityObj ? cityObj.name : provinceName
    
    const district = config.district || (filteredDistricts.value.length > 0 
        ? faker.helpers.arrayElement(filteredDistricts.value) 
        : '朝阳区')
    
    // 生成街道
    const streetPrefix = faker.helpers.arrayElement([
        '人民', '解放', '建设', '和平', '中山', '北京', '上海', '南京', '长江', '黄河',
        '东风', '胜利', '光明', '幸福', '团结', '友谊', '文化', '科技', '创新', '发展'
    ])
    const streetSuffix = faker.helpers.arrayElement(['路', '大道', '街'])
    const streetNumber = faker.number.int({ min: 1, max: 999 })
    const street = `${streetPrefix}${streetSuffix}${streetNumber}号`
    
    // 生成小区/大厦
    const communityPrefix = faker.helpers.arrayElement([
        '阳光', '花园', '绿地', '金色', '和谐', '幸福', '康乐', '紫荆', '玫瑰', '牡丹',
        '碧水', '蓝天', '清风', '明月', '星河', '翠竹', '梧桐', '杨柳', '芙蓉', '百合'
    ])
    const communitySuffix = faker.helpers.arrayElement(['小区', '花园', '苑', '城', '湾', '府', '庭', '园'])
    const buildingNumber = faker.number.int({ min: 1, max: 20 })
    const unitNumber = faker.number.int({ min: 1, max: 10 })
    const roomNumber = faker.number.int({ min: 101, max: 2505 })
    
    const community = `${communityPrefix}${communitySuffix}${buildingNumber}栋${unitNumber}单元${roomNumber}室`
    
    let fullAddress = ''
    
    if (config.addressType === 'residential') {
        fullAddress = `${provinceName}${cityName !== provinceName ? cityName : ''}${district}${street}${community}`
    } else if (config.addressType === 'commercial') {
        const commercialNames = ['国际大厦', '商务中心', '科技园', '创业园', '金融中心']
        const commercial = faker.helpers.arrayElement(commercialNames)
        fullAddress = `${provinceName}${cityName !== provinceName ? cityName : ''}${district}${street}${commercial}${faker.number.int({ min: 1, max: 30 })}层${faker.number.int({ min: 1001, max: 3099 })}室`
    } else if (config.addressType === 'campus') {
        const universities = ['北京大学', '清华大学', '复旦大学', '浙江大学', '南京大学', '武汉大学', '中山大学', '四川大学']
        const campus = faker.helpers.arrayElement(universities)
        fullAddress = `${provinceName}${cityName !== provinceName ? cityName : ''}${district}${campus}学生公寓${faker.number.int({ min: 1, max: 30 })}号楼${faker.number.int({ min: 101, max: 1505 })}室`
    }
    
    return {
        province: provinceName,
        city: cityName,
        district,
        street,
        community,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    const chineseSurnames = ['王', '李', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗']
    const chineseGivenNames = ['伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '军', '洋', '勇', '艳', '杰', '娟', '涛', '明', '超', '秀兰', '霞', '平', '刚', '桂英', '华', '建国', '建华', '小明', '小红']
    
    const surname = faker.helpers.arrayElement(chineseSurnames)
    const givenName = faker.helpers.arrayElement(chineseGivenNames) + (Math.random() > 0.5 ? faker.helpers.arrayElement(chineseGivenNames) : '')
    const fullName = surname + givenName
    
    const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    // 生肖
    const zodiacAnimals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
    const zodiac = zodiacAnimals[(birthDate.getFullYear() - 1900) % 12]

    return {
        fullName,
        gender: gender === 'male' ? t('tools.cn-address-generator.genderMale') : t('tools.cn-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('zh-CN'),
        zodiac
    }
}

// 生成联系方式
function generateContact() {
    // 中国手机号号段
    const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139', 
                      '150', '151', '152', '153', '155', '156', '157', '158', '159',
                      '180', '181', '182', '183', '184', '185', '186', '187', '188', '189']
    const prefix = faker.helpers.arrayElement(prefixes)
    const phoneNumber = faker.string.numeric(8)
    const phone = `${prefix}${phoneNumber}`
    
    return {
        phone,
        email: faker.internet.email()
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.cn-address-generator.invalidQuantity'))
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
            
            if (config.includeBankCard) {
                item.bankCard = generateBankCard()
            }
            
            if (config.includeIdCard) {
                item.idCard = generateCNIdCard()
            }
            
            generatedData.value.push(item)
            expandedItems.value[i] = true
        }
        isGenerating.value = false
    }, 100)
}

// 加载示例
function loadSample() {
    config.province = 'beijing'
    config.city = 'beijing'
    config.district = ''
    config.addressType = 'residential'
    config.includeIdentity = true
    config.includeContact = true
    config.includeBankCard = true
    config.includeIdCard = true
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
    toastRef.value.show(t('tools.cn-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `cn-address-${idx + 1}.json`
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
    link.download = 'cn-addresses.json'
    link.click()
    URL.revokeObjectURL(url)
}

// 导出CSV
function exportCsv() {
    if (generatedData.value.length === 0) return
    
    const rows = []
    
    generatedData.value.forEach((item) => {
        const row = {}
        if (item.address) {
            row[t('tools.cn-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.cn-address-generator.csv.province')] = item.address.province
            row[t('tools.cn-address-generator.csv.city')] = item.address.city
            row[t('tools.cn-address-generator.csv.district')] = item.address.district
            row[t('tools.cn-address-generator.csv.street')] = item.address.street
            row[t('tools.cn-address-generator.csv.community')] = item.address.community
        }
        if (item.identity) {
            row[t('tools.cn-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.cn-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.cn-address-generator.csv.age')] = item.identity.age
            row[t('tools.cn-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.cn-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.cn-address-generator.csv.email')] = item.contact.email
        }
        if (item.bankCard) {
            row[t('tools.cn-address-generator.csv.bankName')] = item.bankCard.bankName
            row[t('tools.cn-address-generator.csv.cardNumber')] = item.bankCard.cardNumber
        }
        if (item.idCard) {
            row[t('tools.cn-address-generator.csv.idCardNumber')] = item.idCard.number
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
    link.download = 'cn-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 省份改变
function onProvinceChange() {
    config.city = ''
    config.district = ''
}

// 城市改变
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
