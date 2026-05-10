<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.vietnam-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.vietnam-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.vietnam-address-generator.selectProvince') }}</label>
                            <select v-model="config.province" @change="onProvinceChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.vietnam-address-generator.allProvinces') }}</option>
                                <option v-for="province in provinces" :key="province.code" :value="province.code">{{ province.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.vietnam-address-generator.selectDistrict') }}</label>
                            <select v-model="config.district"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.province">
                                <option value="">{{ $t('tools.vietnam-address-generator.allDistricts') }}</option>
                                <option v-for="district in filteredDistricts" :key="district.key" :value="district.name">{{ district.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.vietnam-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.vietnam-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.vietnam-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.vietnam-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.vietnam-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.vietnam-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.vietnam-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.vietnam-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.vietnam-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.vietnam-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.vietnam-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.vietnam-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.vietnam-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.vietnam-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.vietnam-address-generator.generating') : $t('tools.vietnam-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.vietnam-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.vietnam-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.vietnam-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.vietnam-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx" class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.vietnam-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.vietnam-address-generator.collapse') : $t('tools.vietnam-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.vietnam-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.vietnam-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.vietnam-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.wardLabel') }}：</span> {{ item.address.ward }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.districtLabel') }}：</span> {{ item.address.district }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.provinceLabel') }}：</span> {{ item.address.province }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.postalCode') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.vietnam-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">{{ $t('tools.vietnam-address-generator.copyBtn') }}</button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">{{ $t('tools.vietnam-address-generator.downloadBtn') }}</button>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.vietnam-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">{{ $t('tools.vietnam-address-generator.exportJson') }}</button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">{{ $t('tools.vietnam-address-generator.exportCsv') }}</button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.vietnam-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <VietnamAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import VietnamAddressGeneratorArticle from './VietnamAddressGeneratorArticle.vue'
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

const config = reactive({
    province: '',
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

const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

const provinces = computed(() => [
    { code: 'HN', name: t('tools.vietnam-address-generator.provinces.HN') },
    { code: 'HCM', name: t('tools.vietnam-address-generator.provinces.HCM') },
    { code: 'HP', name: t('tools.vietnam-address-generator.provinces.HP') },
    { code: 'DN', name: t('tools.vietnam-address-generator.provinces.DN') },
    { code: 'CT', name: t('tools.vietnam-address-generator.provinces.CT') },
    { code: 'BH', name: t('tools.vietnam-address-generator.provinces.BH') },
    { code: 'BD', name: t('tools.vietnam-address-generator.provinces.BD') },
    { code: 'QN', name: t('tools.vietnam-address-generator.provinces.QN') }
])

const getDistrictsForProvince = (provinceCode) => {
    const districtMap = {
        'HN': ['hoanKiem', 'baDinh', 'dongDa', 'haiBaTrung', 'thanhXuan', 'cauGiay', 'hoangMai', 'longBien', 'tayHo', 'haDong'],
        'HCM': ['quan1', 'quan3', 'quan4', 'quan5', 'quan6', 'quan7', 'quan10', 'quan11', 'binhThanh', 'phuNhuan', 'tanBinh', 'goVap', 'binhChanh', 'thuDuc'],
        'DN': ['haiChau', 'thanhKhe', 'sonTra', 'NguHanhSon', 'LienChieu', 'CamLe'],
        'HP': ['HongBang', 'LeChan', 'NgoQuyen', 'HaiAn', 'KiAn']
    }
    return districtMap[provinceCode] || []
}

const filteredDistricts = computed(() => {
    if (!config.province) return []
    const districtKeys = getDistrictsForProvince(config.province)
    return districtKeys.map(key => ({
        key,
        name: t(`tools.vietnam-address-generator.districtsData.${config.province}.${key}`)
    }))
})

// 越南街道名称
const vietnamStreets = [
    'Đường Lê Lợi', 'Đường Nguyễn Huệ', 'Đường Trần Hưng Đạo', 'Đường Lý Tự Trọng',
    'Đường Nguyễn Đình Chiểu', 'Đường Võ Văn Tần', 'Đường Hai Bà Trưng', 'Đường Pasteur',
    'Đường Đồng Khởi', 'Đường Lê Duẩn', 'Đường Điện Biên Phủ', 'Đường Nam Kỳ Khởi Nghĩa',
    'Đường Cách Mạng Tháng 8', 'Đường Nguyễn Thị Minh Khai', 'Đường Sư Vạn Hạnh',
    'Đường 3 Tháng 2', 'Đường Lê Hồng Phong', 'Đường Phạm Văn Đồng', 'Đường Xô Viết Nghệ Tĩnh'
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

// 生成越南身份证号码（CMND 9位或CCCD 12位）
function generateVietnamIdCard() {
    const isCccd = faker.datatype.boolean()
    const number = isCccd ? faker.string.numeric(12) : faker.string.numeric(9)
    return {
        number, cmndNumber: isCccd ? '' : number, cccdNumber: isCccd ? number : '', serialNumber: faker.string.numeric(6)
    }
}

function generateAddress() {
    const provinceObj = config.province ? provinces.value.find(p => p.code === config.province) : faker.helpers.arrayElement(provinces.value)
    const provinceName = provinceObj ? provinceObj.name : t('tools.vietnam-address-generator.provinces.HN')
    const districtName = config.district || (config.province && filteredDistricts.value.length > 0 ? faker.helpers.arrayElement(filteredDistricts.value).name : t('tools.vietnam-address-generator.districtsData.HN.hoanKiem'))
    
    const street = faker.helpers.arrayElement(vietnamStreets)
    const houseNumber = faker.number.int({ min: 1, max: 200 })
    const wardNumber = faker.number.int({ min: 1, max: 30 })
    const wardName = `Phường ${wardNumber}`
    const postalCode = faker.string.numeric(6)
    
    let fullAddress = ''
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${houseNumber} ${street}, ${wardName}, ${districtName}, ${provinceName} ${postalCode}`
            break
        case 'commercial':
            fullAddress = `${houseNumber} ${street}, ${wardName}, ${districtName}, ${provinceName} ${postalCode} ${t('tools.vietnam-address-generator.commercialUnit')}`
            break
        case 'virtual':
            fullAddress = `Tổ PO ${faker.number.int({ min: 1, max: 999 })}, ${districtName}, ${provinceName} ${postalCode}`
            break
        case 'campus':
            fullAddress = `Đại học Quốc gia Hà Nội, Khuôn viên, ${districtName}, ${provinceName} ${postalCode}`
            break
        default:
            fullAddress = `${houseNumber} ${street}, ${districtName}, ${provinceName} ${postalCode}`
    }
    
    return { street, houseNumber: `${houseNumber}`, ward: wardName, district: districtName, province: provinceName, postalCode, fullAddress }
}

function generateIdentity() {
    const gender = faker.person.sexType()
    const vietnameseSurnames = ['Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Huỳnh', 'Phan', 'Vũ', 'Võ', 'Đặng', 'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý']
    const vietnameseGivenNames = ['An', 'Bình', 'Cường', 'Đạt', 'Dũng', 'Giang', 'Hải', 'Hùng', 'Hương', 'Khanh', 'Lan', 'Linh', 'Mai', 'Nam', 'Oanh', 'Phương', 'Quân', 'Sơn', 'Thảo', 'Thu']
    
    const surname = faker.helpers.arrayElement(vietnameseSurnames)
    const givenName = faker.helpers.arrayElement(vietnameseGivenNames) + (faker.datatype.boolean() ? faker.helpers.arrayElement(vietnameseGivenNames) : '')
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    return {
        fullName: `${surname} ${givenName}`,
        gender: gender === 'male' ? t('tools.vietnam-address-generator.genderMale') : t('tools.vietnam-address-generator.genderFemale'),
        age, birthDate: birthDate.toLocaleDateString('vi-VN'), zodiac: '', height: `${faker.number.int({ min: 150, max: 200 })} cm`, weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

function generateContact() {
    const phoneNumber = faker.string.numeric(9)
    return {
        phone: `+84 ${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6)}`,
        phoneType: t('tools.vietnam-address-generator.phoneTypeMobile'), areaCode: '84', email: faker.internet.email(), tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
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
    const jobTitles = ['Kỹ sư phần mềm', 'Quản lý dự án', 'Kỹ sư', 'Nhân viên kinh doanh', 'Kiến trúc sư', 'Bác sĩ', 'Luật sư', 'Kế toán viên']
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `${faker.number.int({ min: 10000000, max: 50000000 })} VNĐ`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(['Nhỏ (1-50)', 'Trung bình (51-200)', 'Lớn (201-1000)']),
        industry: faker.helpers.arrayElement(['Công nghệ', 'Y tế', 'Giáo dục', 'Tài chính', 'Thương mại', 'Công nghiệp']),
        employmentStatus: faker.helpers.arrayElement(['full-time', 'part-time']) === 'full-time' ? t('tools.vietnam-address-generator.employmentFullTime') : t('tools.vietnam-address-generator.employmentPartTime')
    }
}

function generateFingerprint() {
    const os = faker.helpers.arrayElement(['Windows', 'macOS', 'Linux', 'iOS', 'Android'])
    return {
        os, osVersion: faker.helpers.arrayElement(['10', '11', '14.0', 'Ubuntu 22.04']),
        browser: faker.helpers.arrayElement(['Chrome', 'Firefox', 'Safari', 'Edge']),
        userAgent: faker.internet.userAgent(),
        screenResolution: `${faker.number.int({ min: 1280, max: 3840 })}x${faker.number.int({ min: 720, max: 2160 })}`,
        timezone: 'Asia/Ho_Chi_Minh', guid: faker.string.uuid(), ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(), cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

function generateData() {
    if (config.quantity < 1 || config.quantity > 100) { toastRef.value.show(t('tools.vietnam-address-generator.invalidQuantity')); return }
    isGenerating.value = true; generatedData.value = []; expandedItems.value = {}
    setTimeout(() => {
        for (let i = 0; i < config.quantity; i++) {
            const item = { address: generateAddress() }
            if (config.includeIdentity) item.identity = generateIdentity()
            if (config.includeContact) item.contact = generateContact()
            if (config.includeCreditCard) item.creditCard = generateCreditCard()
            if (config.includeCareer) item.career = generateCareer()
            if (config.includeIdCard) item.idCard = generateVietnamIdCard()
            if (config.includeFingerprint) item.fingerprint = generateFingerprint()
            generatedData.value.push(item); expandedItems.value[i] = true
        }
        isGenerating.value = false
    }, 100)
}

function loadSample() {
    config.province = 'HN'; config.district = t('tools.vietnam-address-generator.districtsData.HN.hoanKiem')
    config.addressType = 'residential'; config.includeIdentity = true; config.includeContact = true
    config.includeCreditCard = true; config.includeCareer = true; config.includeIdCard = true
    config.includeFingerprint = true; config.quantity = 3; generateData()
}

function clearData() { generatedData.value = []; expandedItems.value = {} }
function toggleExpand(idx) { expandedItems.value[idx] = !expandedItems.value[idx] }
function copyItem(item) { navigator.clipboard.writeText(JSON.stringify(item, null, 2)); toastRef.value.show(t('tools.vietnam-address-generator.copySuccess')) }
function exportItem(item, idx) { const blob = new Blob([JSON.stringify(item, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `vietnam-address-${idx + 1}.json`; link.click() }
function exportJson() { const blob = new Blob([JSON.stringify(generatedData.value, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'vietnam-addresses.json'; link.click() }
function exportCsv() {
    if (generatedData.value.length === 0) return
    const rows = generatedData.value.map(item => {
        const row = {}
        if (item.address) { row['Address'] = item.address.fullAddress; row['Street'] = item.address.street; row['Ward'] = item.address.ward; row['District'] = item.address.district; row['Province'] = item.address.province; row['PostalCode'] = item.address.postalCode }
        if (item.identity) { row['Name'] = item.identity.fullName; row['Gender'] = item.identity.gender; row['Age'] = item.identity.age }
        if (item.contact) { row['Phone'] = item.contact.phone; row['Email'] = item.contact.email }
        if (item.idCard) { row['IDCard'] = item.idCard.number }
        return row
    })
    const headers = [...new Set(rows.flatMap(r => Object.keys(r)))]
    const csv = headers.join(',') + '\n' + rows.map(row => headers.map(h => `"${(row[h] || '').toString().replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'vietnam-addresses.csv'; link.click()
}
function onProvinceChange() { config.district = '' }
</script>

<style scoped>
.btn { @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center; }
.btn-sm { @apply px-3 py-1 text-sm; }
.btn-primary { @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed; }
.btn-secondary { @apply bg-gray-600 hover:bg-gray-700 text-white; }
@media (max-width: 768px) { .btn { @apply px-3 py-1.5 text-sm; } .btn-sm { @apply px-2 py-1 text-xs; } }
</style>