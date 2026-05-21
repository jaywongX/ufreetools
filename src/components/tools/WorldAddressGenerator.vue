<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.world-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.world-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.world-address-generator.selectCountry') }}</label>
                            <select v-model="config.country" @change="onCountryChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.world-address-generator.allCountries') }}</option>
                                <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.flag }} {{ $t(`tools.world-address-generator.countries.${country.code}`) }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.world-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.country">
                                <option value="">{{ $t('tools.world-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city" :value="city">{{ city }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.world-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.world-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.world-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.world-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.world-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.world-address-generator.generationOptions') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.world-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.world-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.world-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.world-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.world-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.world-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.world-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.world-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.world-address-generator.generating') : $t('tools.world-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.world-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.world-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.world-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.world-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.world-address-generator.record') }} #{{ idx + 1 }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.world-address-generator.collapse') : $t('tools.world-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.world-address-generator.address') }}：</span>
                                    <span>{{ item.address.street }}, {{ item.address.city }}, {{ item.address.region }} {{ item.address.postalCode }}, {{ item.address.country }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.world-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.world-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.country') }}：</span> {{ item.address.country }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.region') }}：</span> {{ item.address.region }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.city') }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.street') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.postalCode') }}：</span> {{ item.address.postalCode }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.cvvLabel') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.idCardNumber') }}：</span> {{ item.idCard.number }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.world-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.world-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.world-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.world-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.world-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.world-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.world-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <WorldAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import WorldAddressGeneratorArticle from './WorldAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

const config = reactive({
    country: '',
    city: '',
    addressType: 'residential',
    includeIdentity: true,
    includeContact: true,
    includeCreditCard: true,
    includeCareer: true,
    includeIdCard: true,
    includeFingerprint: true,
    quantity: 5
})

const generatedData = ref([])
const expandedItems = ref({})
const isGenerating = ref(false)

// 国家定义：code 用于国家筛选和 i18n key，name 由翻译提供
const countries = [
    { code: 'US', flag: '🇺🇸', dial: '+1', postalFmt: 'XXXXX' },
    { code: 'GB', flag: '🇬🇧', dial: '+44', postalFmt: 'AA9 9AA' },
    { code: 'CA', flag: '🇨🇦', dial: '+1', postalFmt: 'A9A 9A9' },
    { code: 'AU', flag: '🇦🇺', dial: '+61', postalFmt: 'XXXX' },
    { code: 'DE', flag: '🇩🇪', dial: '+49', postalFmt: 'XXXXX' },
    { code: 'FR', flag: '🇫🇷', dial: '+33', postalFmt: 'XXXXX' },
    { code: 'IT', flag: '🇮🇹', dial: '+39', postalFmt: 'XXXXX' },
    { code: 'ES', flag: '🇪🇸', dial: '+34', postalFmt: 'XXXXX' },
    { code: 'NL', flag: '🇳🇱', dial: '+31', postalFmt: 'XXXX AA' },
    { code: 'SE', flag: '🇸🇪', dial: '+46', postalFmt: 'XXX XX' },
    { code: 'NO', flag: '🇳🇴', dial: '+47', postalFmt: 'XXXX' },
    { code: 'FI', flag: '🇫🇮', dial: '+358', postalFmt: 'XXXXX' },
    { code: 'CH', flag: '🇨🇭', dial: '+41', postalFmt: 'XXXX' },
    { code: 'AT', flag: '🇦🇹', dial: '+43', postalFmt: 'XXXX' },
    { code: 'BE', flag: '🇧🇪', dial: '+32', postalFmt: 'XXXX' },
    { code: 'PT', flag: '🇵🇹', dial: '+351', postalFmt: 'XXXX-XXX' },
    { code: 'RU', flag: '🇷🇺', dial: '+7', postalFmt: 'XXXXXX' },
    { code: 'PL', flag: '🇵🇱', dial: '+48', postalFmt: 'XX-XXX' },
    { code: 'JP', flag: '🇯🇵', dial: '+81', postalFmt: 'XXX-XXXX' },
    { code: 'KR', flag: '🇰🇷', dial: '+82', postalFmt: 'XXXXX' },
    { code: 'CN', flag: '🇨🇳', dial: '+86', postalFmt: 'XXXXXX' },
    { code: 'TW', flag: '🇹🇼', dial: '+886', postalFmt: 'XXX' },
    { code: 'HK', flag: '🇭🇰', dial: '+852', postalFmt: '' },
    { code: 'SG', flag: '🇸🇬', dial: '+65', postalFmt: 'XXXXXX' },
    { code: 'MY', flag: '🇲🇾', dial: '+60', postalFmt: 'XXXXX' },
    { code: 'TH', flag: '🇹🇭', dial: '+66', postalFmt: 'XXXXX' },
    { code: 'ID', flag: '🇮🇩', dial: '+62', postalFmt: 'XXXXX' },
    { code: 'VN', flag: '🇻🇳', dial: '+84', postalFmt: 'XXXXXX' },
    { code: 'PH', flag: '🇵🇭', dial: '+63', postalFmt: 'XXXX' },
    { code: 'IN', flag: '🇮🇳', dial: '+91', postalFmt: 'XXXXXX' },
    { code: 'PK', flag: '🇵🇰', dial: '+92', postalFmt: 'XXXXX' },
    { code: 'AE', flag: '🇦🇪', dial: '+971', postalFmt: '' },
    { code: 'SA', flag: '🇸🇦', dial: '+966', postalFmt: 'XXXXX' },
    { code: 'TR', flag: '🇹🇷', dial: '+90', postalFmt: 'XXXXX' },
    { code: 'EG', flag: '🇪🇬', dial: '+20', postalFmt: 'XXXXX' },
    { code: 'ZA', flag: '🇿🇦', dial: '+27', postalFmt: 'XXXX' },
    { code: 'NG', flag: '🇳🇬', dial: '+234', postalFmt: 'XXXXXX' },
    { code: 'BR', flag: '🇧🇷', dial: '+55', postalFmt: 'XXXXX-XXX' },
    { code: 'AR', flag: '🇦🇷', dial: '+54', postalFmt: 'XXXX' },
    { code: 'MX', flag: '🇲🇽', dial: '+52', postalFmt: 'XXXXX' },
    { code: 'NZ', flag: '🇳🇿', dial: '+64', postalFmt: 'XXXX' }
]

// 各国主要城市与对应行政区（state/province/region）
const countryData = {
    US: { cities: { 'New York': 'NY', 'Los Angeles': 'CA', 'Chicago': 'IL', 'Houston': 'TX', 'Miami': 'FL', 'San Francisco': 'CA', 'Seattle': 'WA', 'Boston': 'MA' }, streets: ['Main St', 'Oak Ave', 'Pine Rd', 'Maple Dr', 'Cedar Ln', 'Elm St', 'Park Blvd', '1st St'] },
    GB: { cities: { 'London': 'England', 'Manchester': 'England', 'Birmingham': 'England', 'Edinburgh': 'Scotland', 'Glasgow': 'Scotland', 'Cardiff': 'Wales', 'Belfast': 'Northern Ireland', 'Liverpool': 'England' }, streets: ['High Street', 'Church Lane', 'Victoria Road', 'Queen Street', 'King Road', 'Mill Lane', 'Station Road', 'Park Lane'] },
    CA: { cities: { 'Toronto': 'ON', 'Vancouver': 'BC', 'Montreal': 'QC', 'Calgary': 'AB', 'Ottawa': 'ON', 'Edmonton': 'AB', 'Quebec City': 'QC', 'Winnipeg': 'MB' }, streets: ['Yonge St', 'Main St', 'King St', 'Queen St', 'Bay St', 'Bloor St', 'Granville St', 'Robson St'] },
    AU: { cities: { 'Sydney': 'NSW', 'Melbourne': 'VIC', 'Brisbane': 'QLD', 'Perth': 'WA', 'Adelaide': 'SA', 'Canberra': 'ACT', 'Hobart': 'TAS', 'Darwin': 'NT' }, streets: ['George St', 'Pitt St', 'King St', 'Queen St', 'Elizabeth St', 'Collins St', 'Bourke St', 'Flinders St'] },
    DE: { cities: { 'Berlin': 'Berlin', 'Hamburg': 'Hamburg', 'München': 'Bayern', 'Köln': 'NRW', 'Frankfurt': 'Hessen', 'Stuttgart': 'BW', 'Düsseldorf': 'NRW', 'Leipzig': 'Sachsen' }, streets: ['Hauptstraße', 'Bahnhofstraße', 'Gartenstraße', 'Schillerstraße', 'Goethestraße', 'Mozartstraße', 'Lindenstraße', 'Bergstraße'] },
    FR: { cities: { 'Paris': 'Île-de-France', 'Marseille': 'PACA', 'Lyon': 'AURA', 'Toulouse': 'Occitanie', 'Nice': 'PACA', 'Nantes': 'PDL', 'Bordeaux': 'Nouvelle-Aquitaine', 'Lille': 'Hauts-de-France' }, streets: ['Rue de la Paix', 'Avenue des Champs-Élysées', 'Rue de Rivoli', 'Boulevard Saint-Germain', 'Rue Saint-Honoré', 'Avenue Montaigne', 'Rue de la République', 'Place de la Concorde'] },
    IT: { cities: { 'Roma': 'Lazio', 'Milano': 'Lombardia', 'Napoli': 'Campania', 'Torino': 'Piemonte', 'Firenze': 'Toscana', 'Bologna': 'Emilia-Romagna', 'Venezia': 'Veneto', 'Genova': 'Liguria' }, streets: ['Via Roma', 'Via Garibaldi', 'Via Mazzini', 'Via Dante', 'Corso Italia', 'Via Verdi', 'Via Cavour', 'Via Vittorio Emanuele'] },
    ES: { cities: { 'Madrid': 'Madrid', 'Barcelona': 'Cataluña', 'Valencia': 'Valencia', 'Sevilla': 'Andalucía', 'Zaragoza': 'Aragón', 'Málaga': 'Andalucía', 'Bilbao': 'País Vasco', 'Granada': 'Andalucía' }, streets: ['Calle Mayor', 'Gran Vía', 'Calle Alcalá', 'Paseo de la Castellana', 'Calle Serrano', 'Calle de Goya', 'Avenida de América', 'Calle de Atocha'] },
    NL: { cities: { 'Amsterdam': 'NH', 'Rotterdam': 'ZH', 'The Hague': 'ZH', 'Utrecht': 'UT', 'Eindhoven': 'NB', 'Groningen': 'GR', 'Tilburg': 'NB', 'Almere': 'FL' }, streets: ['Damrak', 'Kalverstraat', 'Leidsestraat', 'Prinsengracht', 'Herengracht', 'Singel', 'Vondelpark', 'Rokin'] },
    SE: { cities: { 'Stockholm': 'Stockholm', 'Gothenburg': 'Västra Götaland', 'Malmö': 'Skåne', 'Uppsala': 'Uppsala', 'Linköping': 'Östergötland', 'Örebro': 'Örebro', 'Västerås': 'Västmanland', 'Lund': 'Skåne' }, streets: ['Drottninggatan', 'Sveavägen', 'Kungsgatan', 'Birger Jarlsgatan', 'Storgatan', 'Vasagatan', 'Hornsgatan', 'Götgatan'] },
    NO: { cities: { 'Oslo': 'Oslo', 'Bergen': 'Vestland', 'Stavanger': 'Rogaland', 'Trondheim': 'Trøndelag', 'Drammen': 'Viken', 'Fredrikstad': 'Viken', 'Kristiansand': 'Agder', 'Tromsø': 'Troms' }, streets: ['Karl Johans gate', 'Storgata', 'Bogstadveien', 'Grünerløkka', 'Aker Brygge', 'Frognerveien', 'Markveien', 'Torggata'] },
    FI: { cities: { 'Helsinki': 'Uusimaa', 'Espoo': 'Uusimaa', 'Tampere': 'Pirkanmaa', 'Vantaa': 'Uusimaa', 'Oulu': 'Pohjois-Pohjanmaa', 'Turku': 'Varsinais-Suomi', 'Jyväskylä': 'Keski-Suomi', 'Lahti': 'Päijät-Häme' }, streets: ['Mannerheimintie', 'Aleksanterinkatu', 'Esplanadi', 'Bulevardi', 'Hämeentie', 'Sturenkatu', 'Mechelininkatu', 'Runeberginkatu'] },
    CH: { cities: { 'Zürich': 'ZH', 'Geneva': 'GE', 'Basel': 'BS', 'Bern': 'BE', 'Lausanne': 'VD', 'Winterthur': 'ZH', 'Lucerne': 'LU', 'Lugano': 'TI' }, streets: ['Bahnhofstrasse', 'Bahnhofplatz', 'Limmatquai', 'Kramgasse', 'Marktgasse', 'Rue du Rhône', 'Avenue de la Gare', 'Freie Strasse'] },
    AT: { cities: { 'Wien': 'Wien', 'Graz': 'Steiermark', 'Linz': 'Oberösterreich', 'Salzburg': 'Salzburg', 'Innsbruck': 'Tirol', 'Klagenfurt': 'Kärnten', 'Villach': 'Kärnten', 'Wels': 'Oberösterreich' }, streets: ['Mariahilfer Straße', 'Kärntner Straße', 'Ringstraße', 'Graben', 'Stephansplatz', 'Praterstraße', 'Hauptstraße', 'Landstraße'] },
    BE: { cities: { 'Brussels': 'Brussels', 'Antwerp': 'Antwerp', 'Ghent': 'East Flanders', 'Charleroi': 'Hainaut', 'Liège': 'Liège', 'Bruges': 'West Flanders', 'Namur': 'Namur', 'Leuven': 'Flemish Brabant' }, streets: ['Avenue Louise', 'Grand-Place', 'Rue Neuve', 'Avenue de Tervueren', 'Boulevard Anspach', 'Rue Royale', 'Chaussée de Charleroi', 'Avenue de la Toison d\'Or'] },
    PT: { cities: { 'Lisboa': 'Lisboa', 'Porto': 'Porto', 'Vila Nova de Gaia': 'Porto', 'Amadora': 'Lisboa', 'Braga': 'Braga', 'Coimbra': 'Coimbra', 'Funchal': 'Madeira', 'Faro': 'Faro' }, streets: ['Avenida da Liberdade', 'Rua Augusta', 'Avenida da República', 'Rua do Carmo', 'Praça do Comércio', 'Rua Garrett', 'Avenida Almirante Reis', 'Rua de Santa Catarina'] },
    RU: { cities: { 'Москва': 'Москва', 'Санкт-Петербург': 'Санкт-Петербург', 'Новосибирск': 'Новосибирская область', 'Екатеринбург': 'Свердловская область', 'Казань': 'Татарстан', 'Нижний Новгород': 'Нижегородская область', 'Челябинск': 'Челябинская область', 'Самара': 'Самарская область' }, streets: ['ул. Тверская', 'Невский проспект', 'ул. Арбат', 'Кутузовский проспект', 'Ленинский проспект', 'ул. Пушкина', 'ул. Гагарина', 'пр. Мира'] },
    PL: { cities: { 'Warszawa': 'Mazowieckie', 'Kraków': 'Małopolskie', 'Łódź': 'Łódzkie', 'Wrocław': 'Dolnośląskie', 'Poznań': 'Wielkopolskie', 'Gdańsk': 'Pomorskie', 'Szczecin': 'Zachodniopomorskie', 'Lublin': 'Lubelskie' }, streets: ['ul. Marszałkowska', 'ul. Nowy Świat', 'ul. Krakowskie Przedmieście', 'al. Jerozolimskie', 'ul. Floriańska', 'ul. Długa', 'ul. Piotrkowska', 'ul. Świętokrzyska'] },
    JP: { cities: { '東京': '東京都', '横浜': '神奈川県', '大阪': '大阪府', '名古屋': '愛知県', '札幌': '北海道', '福岡': '福岡県', '京都': '京都府', '神戸': '兵庫県' }, streets: ['中央通り', '銀座', '新宿', '渋谷', '六本木', '表参道', '青山通り', '明治通り'] },
    KR: { cities: { '서울': '서울특별시', '부산': '부산광역시', '인천': '인천광역시', '대구': '대구광역시', '대전': '대전광역시', '광주': '광주광역시', '울산': '울산광역시', '수원': '경기도' }, streets: ['강남대로', '테헤란로', '종로', '명동길', '을지로', '세종대로', '한강대로', '봉은사로'] },
    CN: { cities: { '北京': '北京市', '上海': '上海市', '广州': '广东省', '深圳': '广东省', '成都': '四川省', '杭州': '浙江省', '武汉': '湖北省', '西安': '陕西省' }, streets: ['长安街', '南京路', '王府井大街', '中山路', '建国路', '北京路', '人民路', '解放路'] },
    TW: { cities: { '台北': '台北市', '新北': '新北市', '桃園': '桃園市', '台中': '台中市', '台南': '台南市', '高雄': '高雄市', '基隆': '基隆市', '新竹': '新竹市' }, streets: ['信義路', '忠孝東路', '仁愛路', '敦化南路', '中山北路', '南京東路', '光復南路', '復興南路'] },
    HK: { cities: { 'Central': 'Hong Kong Island', 'Causeway Bay': 'Hong Kong Island', 'Tsim Sha Tsui': 'Kowloon', 'Mong Kok': 'Kowloon', 'Sha Tin': 'New Territories', 'Kwun Tong': 'Kowloon', 'Wan Chai': 'Hong Kong Island', 'Tuen Mun': 'New Territories' }, streets: ['Queen\'s Road Central', 'Nathan Road', 'Hennessy Road', 'Des Voeux Road', 'Hollywood Road', 'Canton Road', 'Argyle Street', 'Mong Kok Road'] },
    SG: { cities: { 'Singapore': 'Central', 'Jurong': 'West', 'Tampines': 'East', 'Woodlands': 'North', 'Bedok': 'East', 'Sengkang': 'NE', 'Hougang': 'NE', 'Yishun': 'North' }, streets: ['Orchard Road', 'Bukit Timah Road', 'Serangoon Road', 'Bencoolen Street', 'Beach Road', 'Marina Boulevard', 'Raffles Place', 'Clarke Quay'] },
    MY: { cities: { 'Kuala Lumpur': 'WP', 'George Town': 'Penang', 'Ipoh': 'Perak', 'Shah Alam': 'Selangor', 'Petaling Jaya': 'Selangor', 'Johor Bahru': 'Johor', 'Kuching': 'Sarawak', 'Kota Kinabalu': 'Sabah' }, streets: ['Jalan Bukit Bintang', 'Jalan Sultan Ismail', 'Jalan Tun Razak', 'Jalan Ampang', 'Jalan Imbi', 'Jalan Pudu', 'Jalan Raja Chulan', 'Jalan P. Ramlee'] },
    TH: { cities: { 'Bangkok': 'Bangkok', 'Nonthaburi': 'Nonthaburi', 'Chiang Mai': 'Chiang Mai', 'Pattaya': 'Chonburi', 'Phuket': 'Phuket', 'Hat Yai': 'Songkhla', 'Khon Kaen': 'Khon Kaen', 'Udon Thani': 'Udon Thani' }, streets: ['Sukhumvit Road', 'Silom Road', 'Sathorn Road', 'Rama IV Road', 'Phaholyothin Road', 'Ratchadamri Road', 'Wireless Road', 'Asok Road'] },
    ID: { cities: { 'Jakarta': 'DKI Jakarta', 'Surabaya': 'East Java', 'Bandung': 'West Java', 'Medan': 'North Sumatra', 'Semarang': 'Central Java', 'Makassar': 'South Sulawesi', 'Palembang': 'South Sumatra', 'Denpasar': 'Bali' }, streets: ['Jalan Sudirman', 'Jalan Thamrin', 'Jalan Gatot Subroto', 'Jalan Rasuna Said', 'Jalan Casablanca', 'Jalan Asia Afrika', 'Jalan Braga', 'Jalan Malioboro'] },
    VN: { cities: { 'Hà Nội': 'Hà Nội', 'TP. Hồ Chí Minh': 'TP. Hồ Chí Minh', 'Đà Nẵng': 'Đà Nẵng', 'Hải Phòng': 'Hải Phòng', 'Cần Thơ': 'Cần Thơ', 'Biên Hòa': 'Đồng Nai', 'Nha Trang': 'Khánh Hòa', 'Huế': 'Thừa Thiên Huế' }, streets: ['Đường Nguyễn Huệ', 'Đường Lê Lợi', 'Đường Hai Bà Trưng', 'Đường Đồng Khởi', 'Đường Trần Hưng Đạo', 'Đường Phan Đình Phùng', 'Đường Nguyễn Trãi', 'Đường Lý Thường Kiệt'] },
    PH: { cities: { 'Manila': 'NCR', 'Quezon City': 'NCR', 'Cebu City': 'Cebu', 'Davao City': 'Davao', 'Caloocan': 'NCR', 'Pasig': 'NCR', 'Taguig': 'NCR', 'Makati': 'NCR' }, streets: ['Ayala Avenue', 'EDSA', 'Roxas Boulevard', 'Taft Avenue', 'Quezon Avenue', 'Commonwealth Avenue', 'Aurora Boulevard', 'C5 Road'] },
    IN: { cities: { 'Mumbai': 'Maharashtra', 'Delhi': 'Delhi', 'Bangalore': 'Karnataka', 'Chennai': 'Tamil Nadu', 'Kolkata': 'West Bengal', 'Hyderabad': 'Telangana', 'Pune': 'Maharashtra', 'Ahmedabad': 'Gujarat' }, streets: ['MG Road', 'Brigade Road', 'Park Street', 'Anna Salai', 'Marine Drive', 'Connaught Place', 'Linking Road', 'Commercial Street'] },
    PK: { cities: { 'Karachi': 'Sindh', 'Lahore': 'Punjab', 'Faisalabad': 'Punjab', 'Rawalpindi': 'Punjab', 'Multan': 'Punjab', 'Hyderabad': 'Sindh', 'Peshawar': 'KPK', 'Islamabad': 'ICT' }, streets: ['Mall Road', 'Shahrah-e-Faisal', 'Tariq Road', 'Jinnah Avenue', 'Jail Road', 'Liberty Road', 'Boulevard Road', 'Constitution Avenue'] },
    AE: { cities: { 'Dubai': 'Dubai', 'Abu Dhabi': 'Abu Dhabi', 'Sharjah': 'Sharjah', 'Al Ain': 'Abu Dhabi', 'Ajman': 'Ajman', 'Ras Al Khaimah': 'RAK', 'Fujairah': 'Fujairah', 'Umm Al Quwain': 'UAQ' }, streets: ['Sheikh Zayed Road', 'Al Wasl Road', 'Jumeirah Beach Road', 'Al Khaleej Road', 'Al Maktoum Road', 'Hamdan Street', 'Corniche Road', 'Khalifa Street'] },
    SA: { cities: { 'Riyadh': 'Riyadh', 'Jeddah': 'Mecca', 'Mecca': 'Mecca', 'Medina': 'Medina', 'Dammam': 'Eastern', 'Khobar': 'Eastern', 'Taif': 'Mecca', 'Tabuk': 'Tabuk' }, streets: ['King Fahd Road', 'King Abdullah Road', 'Olaya Street', 'Tahlia Street', 'King Khalid Road', 'Prince Sultan Road', 'Madinah Road', 'Corniche Road'] },
    TR: { cities: { 'İstanbul': 'İstanbul', 'Ankara': 'Ankara', 'İzmir': 'İzmir', 'Bursa': 'Bursa', 'Adana': 'Adana', 'Gaziantep': 'Gaziantep', 'Konya': 'Konya', 'Antalya': 'Antalya' }, streets: ['İstiklal Caddesi', 'Bağdat Caddesi', 'Atatürk Bulvarı', 'Tunalı Hilmi Caddesi', 'Cumhuriyet Caddesi', 'Barbaros Bulvarı', 'Büyükdere Caddesi', 'Halaskargazi Caddesi'] },
    EG: { cities: { 'Cairo': 'Cairo', 'Alexandria': 'Alexandria', 'Giza': 'Giza', 'Shubra El Kheima': 'Qalyubia', 'Port Said': 'Port Said', 'Suez': 'Suez', 'Luxor': 'Luxor', 'Mansoura': 'Dakahlia' }, streets: ['Tahrir Square', 'Corniche El Nil', 'Talaat Harb Street', 'Qasr El Nil Street', 'El-Tahrir Street', 'Pyramids Road', 'Salah Salem Street', 'Ramsis Street'] },
    ZA: { cities: { 'Johannesburg': 'Gauteng', 'Cape Town': 'Western Cape', 'Durban': 'KZN', 'Pretoria': 'Gauteng', 'Port Elizabeth': 'Eastern Cape', 'Bloemfontein': 'Free State', 'East London': 'Eastern Cape', 'Nelspruit': 'Mpumalanga' }, streets: ['Long Street', 'Adderley Street', 'Commissioner Street', 'Pritchard Street', 'Smith Street', 'West Street', 'Florida Road', 'Oxford Road'] },
    NG: { cities: { 'Lagos': 'Lagos', 'Kano': 'Kano', 'Ibadan': 'Oyo', 'Abuja': 'FCT', 'Port Harcourt': 'Rivers', 'Benin City': 'Edo', 'Kaduna': 'Kaduna', 'Enugu': 'Enugu' }, streets: ['Broad Street', 'Marina', 'Awolowo Road', 'Allen Avenue', 'Adeola Odeku Street', 'Victoria Island', 'Lekki-Epe Expressway', 'Ahmadu Bello Way'] },
    BR: { cities: { 'São Paulo': 'SP', 'Rio de Janeiro': 'RJ', 'Brasília': 'DF', 'Salvador': 'BA', 'Fortaleza': 'CE', 'Belo Horizonte': 'MG', 'Manaus': 'AM', 'Curitiba': 'PR' }, streets: ['Avenida Paulista', 'Avenida Brasil', 'Rua Augusta', 'Avenida Atlântica', 'Rua Oscar Freire', 'Avenida Faria Lima', 'Avenida Rebouças', 'Rua da Consolação'] },
    AR: { cities: { 'Buenos Aires': 'CABA', 'Córdoba': 'Córdoba', 'Rosario': 'Santa Fe', 'Mendoza': 'Mendoza', 'La Plata': 'Buenos Aires', 'Tucumán': 'Tucumán', 'Mar del Plata': 'Buenos Aires', 'Salta': 'Salta' }, streets: ['Avenida 9 de Julio', 'Avenida Corrientes', 'Avenida de Mayo', 'Avenida Santa Fe', 'Calle Florida', 'Avenida Callao', 'Avenida Rivadavia', 'Avenida Libertador'] },
    MX: { cities: { 'Ciudad de México': 'CDMX', 'Guadalajara': 'Jalisco', 'Monterrey': 'Nuevo León', 'Puebla': 'Puebla', 'Tijuana': 'Baja California', 'León': 'Guanajuato', 'Juárez': 'Chihuahua', 'Mérida': 'Yucatán' }, streets: ['Paseo de la Reforma', 'Avenida Insurgentes', 'Avenida Juárez', 'Avenida Madero', 'Avenida Universidad', 'Avenida Revolución', 'Calzada de Tlalpan', 'Avenida Chapultepec'] },
    NZ: { cities: { 'Auckland': 'Auckland', 'Wellington': 'Wellington', 'Christchurch': 'Canterbury', 'Hamilton': 'Waikato', 'Tauranga': 'Bay of Plenty', 'Napier': 'Hawke\'s Bay', 'Dunedin': 'Otago', 'Palmerston North': 'Manawatu' }, streets: ['Queen Street', 'Lambton Quay', 'Cuba Street', 'Ponsonby Road', 'Karangahape Road', 'Cashel Street', 'High Street', 'Victoria Street'] }
}

onMounted(() => {
    loadSample()
})

const filteredCities = computed(() => {
    if (!config.country) return []
    const data = countryData[config.country]
    return data ? Object.keys(data.cities) : []
})

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function formatPostal(fmt) {
    if (!fmt) return ''
    let out = ''
    for (const ch of fmt) {
        if (ch === 'X') out += faker.string.numeric(1)
        else if (ch === 'A') out += faker.string.alpha({ length: 1, casing: 'upper' })
        else if (ch === '9') out += faker.string.numeric(1)
        else out += ch
    }
    return out
}

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

function generateAddress() {
    const countryCode = config.country || pickRandom(countries.map(c => c.code))
    const meta = countries.find(c => c.code === countryCode)
    const data = countryData[countryCode]
    const cityNames = Object.keys(data.cities)
    const cityName = config.city && data.cities[config.city] ? config.city : pickRandom(cityNames)
    const region = data.cities[cityName]
    const street = pickRandom(data.streets)
    const houseNumber = faker.number.int({ min: 1, max: 9999 })
    let streetLine = `${houseNumber} ${street}`

    switch (config.addressType) {
        case 'commercial':
            streetLine = `${houseNumber} ${street} ${faker.helpers.arrayElement(['Suite', 'Unit', 'Floor', 'Office'])} ${faker.number.int({ min: 1, max: 999 })}`
            break
        case 'virtual':
            streetLine = `PO Box ${faker.number.int({ min: 100, max: 9999 })}, ${street}`
            break
        case 'campus':
            streetLine = `${houseNumber} ${faker.helpers.arrayElement(['University', 'College', 'Campus'])} ${street}`
            break
    }

    return {
        street: streetLine,
        city: cityName,
        region,
        postalCode: formatPostal(meta.postalFmt),
        country: t(`tools.world-address-generator.countries.${countryCode}`),
        countryCode
    }
}

function generateIdentity() {
    const gender = faker.person.sexType()
    const firstName = faker.person.firstName(gender)
    const lastName = faker.person.lastName()
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()

    return {
        fullName: `${firstName} ${lastName}`,
        firstName,
        lastName,
        gender: gender === 'male' ? t('tools.world-address-generator.genderMale') : t('tools.world-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('en-US'),
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

function generateContact(countryCode) {
    const meta = countries.find(c => c.code === countryCode) || { dial: '+1' }
    const phone = `${meta.dial}-${faker.string.numeric(3)}-${faker.string.numeric(3)}-${faker.string.numeric(4)}`
    return {
        phone,
        phoneType: t('tools.world-address-generator.phoneTypeMobile'),
        email: faker.internet.email(),
        tempEmail: `${faker.string.alphanumeric(10)}@temp-mail.org`
    }
}

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

function generateCareer() {
    const jobTitles = ['Software Engineer', 'Marketing Manager', 'Sales Representative', 'Teacher', 'Nurse', 'Accountant', 'Designer', 'Consultant']
    const industries = ['Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Real Estate', 'Hospitality']
    const companySizes = ['Small (1-50)', 'Medium (51-200)', 'Large (201-1000)', 'Enterprise (1000+)']
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `$${faker.number.int({ min: 30000, max: 150000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.datatype.boolean()
            ? t('tools.world-address-generator.employmentFullTime')
            : t('tools.world-address-generator.employmentPartTime')
    }
}

function generateIdCard() {
    return {
        number: faker.string.alphanumeric({ length: 12, casing: 'upper' })
    }
}

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
        timezone: faker.location.timeZone(),
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Accept All', 'Reject All', 'Custom'])
    }
}

function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.world-address-generator.invalidQuantity'))
        return
    }

    isGenerating.value = true
    generatedData.value = []
    expandedItems.value = {}

    setTimeout(() => {
        for (let i = 0; i < config.quantity; i++) {
            const item = {}
            item.address = generateAddress()
            if (config.includeIdentity) item.identity = generateIdentity()
            if (config.includeContact) item.contact = generateContact(item.address.countryCode)
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
    config.country = 'GB'
    config.city = 'London'
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
    toastRef.value.show(t('tools.world-address-generator.copySuccess'))
}

function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `world-address-${idx + 1}.json`
    link.click()
    URL.revokeObjectURL(url)
}

function exportJson() {
    const dataStr = JSON.stringify(generatedData.value, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'world-addresses.json'
    link.click()
    URL.revokeObjectURL(url)
}

function exportCsv() {
    if (generatedData.value.length === 0) return
    const rows = []
    generatedData.value.forEach(item => {
        const row = {}
        if (item.address) {
            row['Country'] = item.address.country
            row['Region'] = item.address.region
            row['City'] = item.address.city
            row['Street'] = item.address.street
            row['Postal Code'] = item.address.postalCode
        }
        if (item.identity) {
            row['Full Name'] = item.identity.fullName
            row['Gender'] = item.identity.gender
            row['Age'] = item.identity.age
            row['Birth Date'] = item.identity.birthDate
        }
        if (item.contact) {
            row['Phone'] = item.contact.phone
            row['Email'] = item.contact.email
        }
        if (item.creditCard) {
            row['Card Type'] = item.creditCard.type
            row['Card Number'] = item.creditCard.number
        }
        if (item.idCard) {
            row['ID Card'] = item.idCard.number
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
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'world-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

function onCountryChange() {
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
