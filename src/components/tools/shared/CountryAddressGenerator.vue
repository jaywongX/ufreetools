<template>
  <div class="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
        <h2 class="text-xl font-bold mb-4">{{ tt('inputTitle') }}</h2>

        <div>
          <h3 class="text-lg font-semibold mb-3">{{ tt('locationTitle') }}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2">{{ tt('selectProvince') }}</label>
              <select v-model="config.province" @change="onProvinceChange" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                <option value="">{{ tt('allProvinces') }}</option>
                <option v-for="province in provinces" :key="province.code" :value="province.code">{{ province.name }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">{{ tt('selectDistrict') }}</label>
              <select v-model="config.district" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" :disabled="!config.province">
                <option value="">{{ tt('allDistricts') }}</option>
                <option v-for="district in filteredDistricts" :key="district.key" :value="district.name">{{ district.name }}</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">{{ tt('addressTypeTitle') }}</h3>
          <div class="grid grid-cols-2 gap-3">
            <label v-for="type in addressTypes" :key="type.value" class="flex items-center gap-2 cursor-pointer">
              <input type="radio" v-model="config.addressType" :value="type.value" />
              <span>{{ tt(type.label) }}</span>
            </label>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">{{ tt('generateOptionsTitle') }}</h3>
          <div class="space-y-2">
            <label v-for="option in dataOptions" :key="option.model" class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" v-model="config[option.model]" />
              <span>{{ tt(option.label) }}</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">{{ tt('quantityLabel') }}</label>
          <input type="number" v-model.number="config.quantity" min="1" max="100" :placeholder="tt('quantityPlaceholder')" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
        </div>

        <div class="flex gap-3">
          <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
            {{ isGenerating ? tt('generating') : tt('generateBtn') }}
          </button>
          <button class="btn btn-secondary" @click="loadSample">{{ tt('loadSampleBtn') }}</button>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">{{ tt('outputTitle') }}</h2>
          <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">{{ tt('clearAll') }}</button>
        </div>

        <div v-if="generatedData.length > 0" class="space-y-4">
          <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p class="text-sm font-medium">{{ t(path('resultCount'), { count: generatedData.length }) }}</p>
          </div>

          <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
            <div v-for="(item, idx) in generatedData" :key="idx" class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <div class="flex justify-between items-start mb-3">
                <h4 class="font-semibold">{{ t(path('recordLabel'), { num: idx + 1 }) }}</h4>
                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                  {{ expandedItems[idx] ? tt('collapse') : tt('viewDetails') }}
                </button>
              </div>

              <div class="space-y-2 text-sm">
                <div><span class="font-medium">{{ tt('addressLabel') }}:</span> <span>{{ item.address.fullAddress }}</span></div>
                <div v-if="item.identity"><span class="font-medium">{{ tt('fullName') }}:</span> <span>{{ item.identity.fullName }}</span></div>
                <div v-if="item.contact"><span class="font-medium">{{ tt('phoneNumber') }}:</span> <span>{{ item.contact.phone }}</span></div>
              </div>

              <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                <div class="grid grid-cols-2 gap-2">
                  <div><span class="font-medium">{{ tt('streetLabel') }}:</span> {{ item.address.street }}</div>
                  <div><span class="font-medium">{{ tt('houseNumberLabel') }}:</span> {{ item.address.houseNumber }}</div>
                  <div><span class="font-medium">{{ tt('buildingLabel') }}:</span> {{ item.address.building }}</div>
                  <div><span class="font-medium">{{ tt('floorLabel') }}:</span> {{ item.address.floor }}</div>
                  <div><span class="font-medium">{{ tt('unitLabel') }}:</span> {{ item.address.unit }}</div>
                  <div><span class="font-medium">{{ tt('districtLabel') }}:</span> {{ item.address.district }}</div>
                  <div><span class="font-medium">{{ tt('provinceLabel') }}:</span> {{ item.address.province }}</div>
                  <div><span class="font-medium">{{ tt('postalCode') }}:</span> {{ item.address.postalCode }}</div>
                </div>
                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                  <div><span class="font-medium">{{ tt('fullName') }}:</span> {{ item.identity.fullName }}</div>
                  <div><span class="font-medium">{{ tt('gender') }}:</span> {{ item.identity.gender }}</div>
                  <div><span class="font-medium">{{ tt('age') }}:</span> {{ item.identity.age }}</div>
                  <div><span class="font-medium">{{ tt('birthDate') }}:</span> {{ item.identity.birthDate }}</div>
                </div>
                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                  <div><span class="font-medium">{{ tt('phoneNumber') }}:</span> {{ item.contact.phone }}</div>
                  <div><span class="font-medium">{{ tt('email') }}:</span> {{ item.contact.email }}</div>
                </div>
                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                  <div><span class="font-medium">{{ tt('cardType') }}:</span> {{ item.creditCard.type }}</div>
                  <div><span class="font-medium">{{ tt('cardNumber') }}:</span> {{ item.creditCard.number }}</div>
                  <div><span class="font-medium">{{ tt('expiryDate') }}:</span> {{ item.creditCard.expiry }}</div>
                  <div><span class="font-medium">{{ tt('cvv') }}:</span> {{ item.creditCard.cvv }}</div>
                </div>
                <div v-if="item.career" class="grid grid-cols-2 gap-2">
                  <div><span class="font-medium">{{ tt('jobTitle') }}:</span> {{ item.career.jobTitle }}</div>
                  <div><span class="font-medium">{{ tt('salary') }}:</span> {{ item.career.salary }}</div>
                  <div><span class="font-medium">{{ tt('companyName') }}:</span> {{ item.career.companyName }}</div>
                  <div><span class="font-medium">{{ tt('industry') }}:</span> {{ item.career.industry }}</div>
                </div>
                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                  <div><span class="font-medium">{{ tt('os') }}:</span> {{ item.fingerprint.os }}</div>
                  <div><span class="font-medium">{{ tt('osVersion') }}:</span> {{ item.fingerprint.osVersion }}</div>
                  <div><span class="font-medium">{{ tt('browser') }}:</span> {{ item.fingerprint.browser }}</div>
                  <div><span class="font-medium">{{ tt('timezone') }}:</span> {{ item.fingerprint.timezone }}</div>
                  <div><span class="font-medium">{{ tt('guid') }}:</span> {{ item.fingerprint.guid }}</div>
                  <div><span class="font-medium">{{ tt('ipAddress') }}:</span> {{ item.fingerprint.ipAddress }}</div>
                  <div class="col-span-2"><span class="font-medium">{{ tt('userAgent') }}:</span> {{ item.fingerprint.userAgent }}</div>
                </div>
                <div v-if="item.idCard"><span class="font-medium">{{ tt('idCardNumber') }}:</span> {{ item.idCard.number }}</div>
              </div>

              <div class="mt-4 flex gap-2">
                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">{{ tt('copyBtn') }}</button>
                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">{{ tt('downloadBtn') }}</button>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t">
            <h3 class="font-semibold mb-3">{{ tt('exportTitle') }}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button class="btn btn-sm btn-primary" @click="exportJson">{{ tt('exportJson') }}</button>
              <button class="btn btn-sm btn-primary" @click="exportCsv">{{ tt('exportCsv') }}</button>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p class="mt-4 text-gray-500">{{ tt('noOutput') }}</p>
        </div>
      </div>
    </div>

    <component :is="articleComponent" />
  </div>
  <Toast ref="toastRef" />
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import Toast from '../../common/Toast.vue'

const props = defineProps({
  toolId: { type: String, required: true },
  countryConfig: { type: Object, required: true },
  articleComponent: { type: Object, default: null }
})

const { t } = useI18n()
const toastRef = ref(null)
const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

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

const addressTypes = [
  { value: 'residential', label: 'addressTypeResidential' },
  { value: 'commercial', label: 'addressTypeCommercial' },
  { value: 'virtual', label: 'addressTypeVirtual' },
  { value: 'campus', label: 'addressTypeCampus' }
]

const dataOptions = [
  { model: 'includeIdentity', label: 'identityTitle' },
  { model: 'includeContact', label: 'contactTitle' },
  { model: 'includeCreditCard', label: 'creditCardTitle' },
  { model: 'includeCareer', label: 'careerTitle' },
  { model: 'includeIdCard', label: 'idCardTitle' },
  { model: 'includeFingerprint', label: 'fingerprintTitle' }
]

const path = key => `tools.${props.toolId}.${key}`
const tt = key => t(path(key))

const provinces = computed(() => props.countryConfig.regions.map(region => ({
  code: region.code,
  name: t(`${path('provinces')}.${region.code}`) || region.name,
  rawName: region.name
})))

const selectedRegion = computed(() => props.countryConfig.regions.find(region => region.code === config.province))

const filteredDistricts = computed(() => {
  if (!selectedRegion.value) return []
  return selectedRegion.value.districts.map(name => ({
    key: slugify(name),
    name: t(`${path('districtsData')}.${selectedRegion.value.code}.${slugify(name)}`) || name
  }))
})

onMounted(() => {
  loadSample()
})

function slugify(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
}

function formatPostalCode() {
  return props.countryConfig.postalPattern.replace(/#/g, () => faker.string.numeric(1)).replace(/A/g, () => faker.string.alpha({ length: 1, casing: 'upper' }))
}

function generateAddress() {
  const provinceObj = config.province ? provinces.value.find(p => p.code === config.province) : faker.helpers.arrayElement(provinces.value)
  const rawRegion = props.countryConfig.regions.find(region => region.code === provinceObj.code)
  const districtName = config.district || faker.helpers.arrayElement(rawRegion.districts)
  const street = faker.helpers.arrayElement(props.countryConfig.streets)
  const houseNumber = faker.number.int({ min: 1, max: 999 })
  const building = `${faker.helpers.arrayElement(props.countryConfig.buildings)} ${faker.string.alpha({ length: 1, casing: 'upper' })}`
  const floor = faker.number.int({ min: 1, max: 30 }).toString()
  const unit = `${faker.string.alpha({ length: 1, casing: 'upper' })}${faker.number.int({ min: 1, max: 20 })}`
  const postalCode = formatPostalCode()

  let fullAddress
  if (config.addressType === 'commercial') {
    fullAddress = `${building} ${tt('commercialUnit')}, ${street} ${houseNumber}, ${districtName}, ${provinceObj.name} ${postalCode}`
  } else if (config.addressType === 'virtual') {
    fullAddress = `${tt('country')} ${provinceObj.name} ${districtName} ${tt('postOfficeBox')} ${faker.number.int({ min: 100, max: 99999 })}`
  } else if (config.addressType === 'campus') {
    fullAddress = `${faker.helpers.arrayElement(props.countryConfig.campus)} ${faker.helpers.arrayElement([tt('studentDormitory'), tt('teachingBuilding'), tt('library')])} ${faker.number.int({ min: 1, max: 12 })}, ${districtName}, ${provinceObj.name}`
  } else {
    fullAddress = `${street} ${houseNumber}, ${building}, ${tt('addressFloor')} ${floor}, ${tt('addressUnit')} ${unit}, ${districtName}, ${provinceObj.name} ${postalCode}`
  }

  return { street, houseNumber: String(houseNumber), building, floor, unit, district: districtName, province: provinceObj.name, postalCode, fullAddress }
}

function generateIdentity() {
  const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
  const age = new Date().getFullYear() - birthDate.getFullYear()
  return {
    fullName: faker.helpers.arrayElement(props.countryConfig.names),
    gender: faker.person.sexType() === 'male' ? tt('genderMale') : tt('genderFemale'),
    age,
    birthDate: birthDate.toLocaleDateString(props.countryConfig.locale),
    zodiac: faker.helpers.arrayElement(['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']),
    height: `${faker.number.int({ min: 150, max: 200 })} cm`,
    weight: `${faker.number.int({ min: 45, max: 120 })} kg`
  }
}

function generateContact() {
  const phoneNumber = faker.string.numeric(9)
  return {
    phone: `+${props.countryConfig.phoneCode} ${phoneNumber.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')}`,
    phoneType: faker.helpers.arrayElement([tt('phoneTypeMobile'), tt('phoneTypeLandline')]),
    areaCode: props.countryConfig.phoneCode,
    email: faker.internet.email(),
    tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
  }
}

function generateCreditCardNumber(type = 'visa') {
  const prefixes = { visa: ['4'], mastercard: ['51', '52', '53', '54', '55'], amex: ['34', '37'], discover: ['6011', '65'] }
  const prefix = faker.helpers.arrayElement(prefixes[type] || prefixes.visa)
  let number = prefix
  while (number.length < 15) number += faker.string.numeric(1)
  let sum = 0
  let isEven = false
  for (let i = number.length - 1; i >= 0; i -= 1) {
    let digit = Number.parseInt(number[i], 10)
    if (isEven) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    isEven = !isEven
  }
  return number + ((10 - (sum % 10)) % 10)
}

function generateCreditCard() {
  const type = faker.helpers.arrayElement(['visa', 'mastercard', 'amex', 'discover'])
  const number = generateCreditCardNumber(type)
  const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
  const expiryYear = (new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })).toString().slice(-2)
  return { type: type.charAt(0).toUpperCase() + type.slice(1), number: number.replace(/(\d{4})/g, '$1 ').trim(), expiry: `${expiryMonth}/${expiryYear}`, cvv: faker.string.numeric(3), bankBin: number.substring(0, 6) }
}

function generateCareer() {
  return {
    jobTitle: faker.helpers.arrayElement(props.countryConfig.jobs),
    salary: `${props.countryConfig.currency} ${faker.number.int({ min: 20000, max: 180000 })}`,
    companyName: faker.company.name(),
    companySize: faker.helpers.arrayElement(['1-50', '51-200', '201-1000', '1000+']),
    industry: faker.helpers.arrayElement(['Technology', 'Finance', 'Education', 'Healthcare', 'Retail', 'Manufacturing']),
    employmentStatus: faker.helpers.arrayElement([tt('employmentFullTime'), tt('employmentPartTime')])
  }
}

function generateIdCard() {
  const base = faker.string.numeric(10)
  const checkDigit = String(base.split('').reduce((sum, digit, index) => sum + Number(digit) * (index + 1), 0) % 10)
  return { number: `${base}${checkDigit}`, nationalId: `${base}${checkDigit}`, serialNumber: faker.string.numeric(6), checkDigit }
}

function generateFingerprint() {
  const os = faker.helpers.arrayElement(['Windows', 'macOS', 'Linux', 'iOS', 'Android'])
  return {
    os,
    osVersion: faker.helpers.arrayElement(['10', '11', '13.0', '14.0', 'Ubuntu 22.04', '17.0', '14']),
    browser: faker.helpers.arrayElement(['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera']),
    userAgent: faker.internet.userAgent(),
    screenResolution: `${faker.number.int({ min: 1280, max: 3840 })}x${faker.number.int({ min: 720, max: 2160 })}`,
    timezone: props.countryConfig.timezone,
    guid: faker.string.uuid(),
    ipAddress: faker.internet.ip(),
    macAddress: faker.internet.mac(),
    cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
  }
}

function generateData() {
  if (config.quantity < 1 || config.quantity > 100) {
    toastRef.value.show(tt('invalidQuantity'))
    return
  }
  isGenerating.value = true
  generatedData.value = []
  expandedItems.value = {}

  setTimeout(() => {
    for (let i = 0; i < config.quantity; i += 1) {
      const item = { address: generateAddress() }
      if (config.includeIdentity) item.identity = generateIdentity()
      if (config.includeContact) item.contact = generateContact()
      if (config.includeCreditCard) item.creditCard = generateCreditCard()
      if (config.includeCareer) item.career = generateCareer()
      if (config.includeIdCard) item.idCard = generateIdCard()
      if (config.includeFingerprint) item.fingerprint = generateFingerprint()
      generatedData.value.push(item)
      expandedItems.value[i] = true
    }
    isGenerating.value = false
  }, 100)
}

function loadSample() {
  config.province = props.countryConfig.regions[0].code
  config.district = props.countryConfig.regions[0].districts[0]
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

function clearData() {
  generatedData.value = []
  expandedItems.value = {}
}

function toggleExpand(idx) {
  expandedItems.value[idx] = !expandedItems.value[idx]
}

function copyItem(item) {
  navigator.clipboard.writeText(JSON.stringify(item, null, 2))
  toastRef.value.show(tt('copySuccess'))
}

function exportItem(item, idx) {
  downloadJson(item, `${props.toolId}-${idx + 1}.json`)
}

function exportJson() {
  downloadJson(generatedData.value, `${props.toolId}.json`)
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

function exportCsv() {
  if (generatedData.value.length === 0) return
  const rows = generatedData.value.map(item => {
    const row = {}
    if (item.address) {
      row[tt('csv.fullAddress')] = item.address.fullAddress
      row[tt('csv.street')] = item.address.street
      row[tt('csv.houseNumber')] = item.address.houseNumber
      row[tt('csv.building')] = item.address.building
      row[tt('csv.floor')] = item.address.floor
      row[tt('csv.unit')] = item.address.unit
      row[tt('csv.district')] = item.address.district
      row[tt('csv.province')] = item.address.province
      row[tt('csv.postalCode')] = item.address.postalCode
    }
    if (item.identity) {
      row[tt('csv.fullName')] = item.identity.fullName
      row[tt('csv.gender')] = item.identity.gender
      row[tt('csv.age')] = item.identity.age
      row[tt('csv.birthDate')] = item.identity.birthDate
    }
    if (item.contact) {
      row[tt('csv.phone')] = item.contact.phone
      row[tt('csv.email')] = item.contact.email
    }
    if (item.creditCard) {
      row[tt('csv.cardType')] = item.creditCard.type
      row[tt('csv.cardNumber')] = item.creditCard.number
    }
    if (item.idCard) row[tt('csv.idCardNumber')] = item.idCard.number
    return row
  })
  const headers = Array.from(new Set(rows.flatMap(row => Object.keys(row))))
  const csv = [headers.join(','), ...rows.map(row => headers.map(header => `"${String(row[header] || '').replace(/"/g, '""')}"`).join(','))].join('\n')
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${props.toolId}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

function onProvinceChange() {
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
</style>
