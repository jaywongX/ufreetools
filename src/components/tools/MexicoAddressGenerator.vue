<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：配置区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.mexico-address-generator.inputTitle') }}</h2>

                <!-- 地理位置筛选 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mexico-address-generator.locationTitle') }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.mexico-address-generator.selectState') }}</label>
                            <select v-model="config.state" @change="onStateChange"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                                <option value="">{{ $t('tools.mexico-address-generator.allStates') }}</option>
                                <option v-for="state in states" :key="state.code" :value="state.code">{{ state.name }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">{{ $t('tools.mexico-address-generator.selectCity') }}</label>
                            <select v-model="config.city"
                                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                :disabled="!config.state">
                                <option value="">{{ $t('tools.mexico-address-generator.allCities') }}</option>
                                <option v-for="city in filteredCities" :key="city.name" :value="city.name">{{ city.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 地址类型 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mexico-address-generator.addressTypeTitle') }}</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="residential" />
                            <span>{{ $t('tools.mexico-address-generator.addressTypeResidential') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="commercial" />
                            <span>{{ $t('tools.mexico-address-generator.addressTypeCommercial') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="virtual" />
                            <span>{{ $t('tools.mexico-address-generator.addressTypeVirtual') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" v-model="config.addressType" value="campus" />
                            <span>{{ $t('tools.mexico-address-generator.addressTypeCampus') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 数据选项 -->
                <div>
                    <h3 class="text-lg font-semibold mb-3">{{ $t('tools.mexico-address-generator.generateOptionsTitle') }}</h3>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdentity" />
                            <span>{{ $t('tools.mexico-address-generator.identityTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeContact" />
                            <span>{{ $t('tools.mexico-address-generator.contactTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCreditCard" />
                            <span>{{ $t('tools.mexico-address-generator.creditCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeCareer" />
                            <span>{{ $t('tools.mexico-address-generator.careerTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeIdCard" />
                            <span>{{ $t('tools.mexico-address-generator.idCardTitle') }}</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="config.includeFingerprint" />
                            <span>{{ $t('tools.mexico-address-generator.fingerprintTitle') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 生成数量 -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.mexico-address-generator.quantityLabel') }}</label>
                    <input type="number" v-model.number="config.quantity" min="1" max="100"
                        :placeholder="$t('tools.mexico-address-generator.quantityPlaceholder')"
                        class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-3">
                    <button class="btn btn-primary flex-1" @click="generateData" :disabled="isGenerating">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {{ isGenerating ? $t('tools.mexico-address-generator.generating') : $t('tools.mexico-address-generator.generateBtn') }}
                    </button>
                    <button class="btn btn-secondary" @click="loadSample">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ $t('tools.mexico-address-generator.loadSampleBtn') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.mexico-address-generator.outputTitle') }}</h2>
                    <button v-if="generatedData.length > 0" class="btn btn-secondary btn-sm" @click="clearData">
                        {{ $t('tools.mexico-address-generator.clearAll') }}
                    </button>
                </div>

                <div v-if="generatedData.length > 0" class="space-y-4">
                    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p class="text-sm font-medium">{{ $t('tools.mexico-address-generator.resultCount', { count: generatedData.length }) }}</p>
                    </div>

                    <div class="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        <div v-for="(item, idx) in generatedData" :key="idx"
                            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="font-semibold">{{ $t('tools.mexico-address-generator.recordLabel', { num: idx + 1 }) }}</h4>
                                <button class="text-sm text-blue-600 hover:text-blue-700" @click="toggleExpand(idx)">
                                    {{ expandedItems[idx] ? $t('tools.mexico-address-generator.collapse') : $t('tools.mexico-address-generator.viewDetails') }}
                                </button>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div v-if="item.address">
                                    <span class="font-medium">{{ $t('tools.mexico-address-generator.addressLabel') }}：</span>
                                    <span>{{ item.address.fullAddress }}</span>
                                </div>
                                <div v-if="item.identity">
                                    <span class="font-medium">{{ $t('tools.mexico-address-generator.fullName') }}：</span>
                                    <span>{{ item.identity.fullName }}</span>
                                </div>
                                <div v-if="item.contact">
                                    <span class="font-medium">{{ $t('tools.mexico-address-generator.phoneNumber') }}：</span>
                                    <span>{{ item.contact.phone }}</span>
                                </div>
                            </div>

                            <div v-if="expandedItems[idx]" class="mt-4 pt-4 border-t space-y-3 text-sm">
                                <div v-if="item.address" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.streetLabel') }}：</span> {{ item.address.street }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.houseNumberLabel') }}：</span> {{ item.address.houseNumber }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.neighborhoodLabel') }}：</span> {{ item.address.neighborhood }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.postalCodeLabel') }}：</span> {{ item.address.postalCode }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.cityLabel') }}：</span> {{ item.address.city }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.stateLabel') }}：</span> {{ item.address.state }}</div>
                                </div>
                                <div v-if="item.identity" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.fullName') }}：</span> {{ item.identity.fullName }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.gender') }}：</span> {{ item.identity.gender }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.age') }}：</span> {{ item.identity.age }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.birthDate') }}：</span> {{ item.identity.birthDate }}</div>
                                </div>
                                <div v-if="item.contact" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.phoneNumber') }}：</span> {{ item.contact.phone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.email') }}：</span> {{ item.contact.email }}</div>
                                </div>
                                <div v-if="item.creditCard" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.cardType') }}：</span> {{ item.creditCard.type }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.cardNumber') }}：</span> {{ item.creditCard.number }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.expiryDate') }}：</span> {{ item.creditCard.expiry }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.cvv') }}：</span> {{ item.creditCard.cvv }}</div>
                                </div>
                                <div v-if="item.fingerprint" class="grid grid-cols-2 gap-2">
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.os') }}：</span> {{ item.fingerprint.os }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.osVersion') }}：</span> {{ item.fingerprint.osVersion }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.browser') }}：</span> {{ item.fingerprint.browser }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.userAgent') }}：</span> {{ item.fingerprint.userAgent }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.screenResolution') }}：</span> {{ item.fingerprint.screenResolution }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.timezone') }}：</span> {{ item.fingerprint.timezone }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.guid') }}：</span> {{ item.fingerprint.guid }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.ipAddress') }}：</span> {{ item.fingerprint.ipAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.macAddress') }}：</span> {{ item.fingerprint.macAddress }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.cookiePolicy') }}：</span> {{ item.fingerprint.cookiePolicy }}</div>
                                </div>
                                <div v-if="item.idCard">
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.rfcLabel') }}：</span> {{ item.idCard.rfc }}</div>
                                    <div><span class="font-medium">{{ $t('tools.mexico-address-generator.curpLabel') }}：</span> {{ item.idCard.curp }}</div>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-sm btn-secondary" @click="copyItem(item)">
                                    {{ $t('tools.mexico-address-generator.copyBtn') }}
                                </button>
                                <button class="btn btn-sm btn-primary" @click="exportItem(item, idx)">
                                    {{ $t('tools.mexico-address-generator.downloadBtn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 批量导出 -->
                    <div class="pt-4 border-t">
                        <h3 class="font-semibold mb-3">{{ $t('tools.mexico-address-generator.exportTitle') }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button class="btn btn-sm btn-primary" @click="exportJson">
                                {{ $t('tools.mexico-address-generator.exportJson') }}
                            </button>
                            <button class="btn btn-sm btn-primary" @click="exportCsv">
                                {{ $t('tools.mexico-address-generator.exportCsv') }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.mexico-address-generator.noOutput') }}</p>
                </div>
            </div>
        </div>

        <MexicoAddressGeneratorArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { faker } from '@faker-js/faker'
import MexicoAddressGeneratorArticle from './MexicoAddressGeneratorArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 配置
const config = reactive({
    state: '',
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

// 墨西哥32个州（包括墨西哥城）
const states = computed(() => [
    { code: 'AGS', name: t('tools.mexico-address-generator.states.AGS') },
    { code: 'BCN', name: t('tools.mexico-address-generator.states.BCN') },
    { code: 'BCS', name: t('tools.mexico-address-generator.states.BCS') },
    { code: 'CAMP', name: t('tools.mexico-address-generator.states.CAMP') },
    { code: 'COAH', name: t('tools.mexico-address-generator.states.COAH') },
    { code: 'COL', name: t('tools.mexico-address-generator.states.COL') },
    { code: 'CHIS', name: t('tools.mexico-address-generator.states.CHIS') },
    { code: 'CHIH', name: t('tools.mexico-address-generator.states.CHIH') },
    { code: 'CDMX', name: t('tools.mexico-address-generator.states.CDMX') },
    { code: 'DUR', name: t('tools.mexico-address-generator.states.DUR') },
    { code: 'GTO', name: t('tools.mexico-address-generator.states.GTO') },
    { code: 'GRO', name: t('tools.mexico-address-generator.states.GRO') },
    { code: 'HGO', name: t('tools.mexico-address-generator.states.HGO') },
    { code: 'JAL', name: t('tools.mexico-address-generator.states.JAL') },
    { code: 'MEX', name: t('tools.mexico-address-generator.states.MEX') },
    { code: 'MIC', name: t('tools.mexico-address-generator.states.MIC') },
    { code: 'MOR', name: t('tools.mexico-address-generator.states.MOR') },
    { code: 'NAY', name: t('tools.mexico-address-generator.states.NAY') },
    { code: 'NLE', name: t('tools.mexico-address-generator.states.NLE') },
    { code: 'OAX', name: t('tools.mexico-address-generator.states.OAX') },
    { code: 'PUE', name: t('tools.mexico-address-generator.states.PUE') },
    { code: 'QRO', name: t('tools.mexico-address-generator.states.QRO') },
    { code: 'QROO', name: t('tools.mexico-address-generator.states.QROO') },
    { code: 'SLP', name: t('tools.mexico-address-generator.states.SLP') },
    { code: 'SIN', name: t('tools.mexico-address-generator.states.SIN') },
    { code: 'SON', name: t('tools.mexico-address-generator.states.SON') },
    { code: 'TAB', name: t('tools.mexico-address-generator.states.TAB') },
    { code: 'TAM', name: t('tools.mexico-address-generator.states.TAM') },
    { code: 'TLAX', name: t('tools.mexico-address-generator.states.TLAX') },
    { code: 'VER', name: t('tools.mexico-address-generator.states.VER') },
    { code: 'YUC', name: t('tools.mexico-address-generator.states.YUC') },
    { code: 'ZAC', name: t('tools.mexico-address-generator.states.ZAC') }
])

// 城市列表
const citiesByState = {
    'AGS': [{ name: 'Aguascalientes' }, { name: 'Jesús María' }, { name: 'Calvillo' }, { name: 'Rincón de Romos' }],
    'BCN': [{ name: 'Tijuana' }, { name: 'Mexicali' }, { name: 'Ensenada' }, { name: 'Rosarito' }],
    'BCS': [{ name: 'La Paz' }, { name: 'Cabo San Lucas' }, { name: 'San José del Cabo' }, { name: 'Loreto' }],
    'CAMP': [{ name: 'Campeche' }, { name: 'Ciudad del Carmen' }, { name: 'Champotón' }, { name: 'Escárcega' }],
    'COAH': [{ name: 'Saltillo' }, { name: 'Torreón' }, { name: 'Monclova' }, { name: 'Piedras Negras' }],
    'COL': [{ name: 'Colima' }, { name: 'Manzanillo' }, { name: 'Villa de Álvarez' }, { name: 'Tecomán' }],
    'CHIS': [{ name: 'Tuxtla Gutiérrez' }, { name: 'Tapachula' }, { name: 'San Cristóbal de las Casas' }, { name: 'Comitán' }],
    'CHIH': [{ name: 'Chihuahua' }, { name: 'Ciudad Juárez' }, { name: 'Delicias' }, { name: 'Parral' }],
    'CDMX': [{ name: 'Ciudad de México' }, { name: 'Tlalpan' }, { name: 'Coyoacán' }, { name: 'Miguel Hidalgo' }],
    'DUR': [{ name: 'Durango' }, { name: 'Gómez Palacio' }, { name: 'Lerdo' }, { name: 'Vicente Guerrero' }],
    'GTO': [{ name: 'Guanajuato' }, { name: 'León' }, { name: 'Irapuato' }, { name: 'Celaya' }],
    'GRO': [{ name: 'Acapulco' }, { name: 'Guerrero Negro' }, { name: 'Zihuatanejo' }, { name: 'Chilpancingo' }],
    'HGO': [{ name: 'Pachuca' }, { name: 'Tulancingo' }, { name: 'Huascalientes' }, { name: 'Ixmiquilpan' }],
    'JAL': [{ name: 'Guadalajara' }, { name: 'Zapopan' }, { name: 'Tlaquepaque' }, { name: 'Tonalá' }],
    'MEX': [{ name: 'Toluca' }, { name: 'Nezahualcóyotl' }, { name: 'Ecatepec' }, { name: 'Naucalpan' }],
    'MIC': [{ name: 'Morelia' }, { name: 'Uruapan' }, { name: 'Lázaro Cárdenas' }, { name: 'Pátzcuaro' }],
    'MOR': [{ name: 'Cuernavaca' }, { name: 'Jiutepec' }, { name: 'Temixco' }, { name: 'Cuautla' }],
    'NAY': [{ name: 'Tepic' }, { name: 'Bahía de Banderas' }, { name: 'San Blas' }, { name: 'Compostela' }],
    'NLE': [{ name: 'Monterrey' }, { name: 'Guadalupe' }, { name: 'San Nicolás' }, { name: 'San Pedro Garza García' }],
    'OAX': [{ name: 'Oaxaca' }, { name: 'Puerto Escondido' }, { name: 'Juchitán' }, { name: 'Mitla' }],
    'PUE': [{ name: 'Puebla' }, { name: 'Tehuacán' }, { name: 'Atlixco' }, { name: 'San Martín Texmelucan' }],
    'QRO': [{ name: 'Querétaro' }, { name: 'San Juan del Río' }, { name: 'Corregidora' }, { name: 'El Marqués' }],
    'QROO': [{ name: 'Cancún' }, { name: 'Playa del Carmen' }, { name: 'Cozumel' }, { name: 'Tulum' }],
    'SLP': [{ name: 'San Luis Potosí' }, { name: 'Soledad' }, { name: 'Ciudad Valles' }, { name: 'Matehuala' }],
    'SIN': [{ name: 'Culiacán' }, { name: 'Mazatlán' }, { name: 'Los Mochis' }, { name: 'Guasave' }],
    'SON': [{ name: 'Hermosillo' }, { name: 'Ciudad Obregón' }, { name: 'Nogales' }, { name: 'Guaymas' }],
    'TAB': [{ name: 'Villahermosa' }, { name: 'Teapa' }, { name: 'Cárdenas' }, { name: 'Comalcalco' }],
    'TAM': [{ name: 'Tampico' }, { name: 'Reynosa' }, { name: 'Nuevo Laredo' }, { name: 'Matamoros' }],
    'TLAX': [{ name: 'Tlaxcala' }, { name: 'San Pablo del Monte' }, { name: 'Apizaco' }, { name: 'Chiautempan' }],
    'VER': [{ name: 'Veracruz' }, { name: 'Xalapa' }, { name: 'Coatzacoalcos' }, { name: 'Poza Rica' }],
    'YUC': [{ name: 'Mérida' }, { name: 'Valladolid' }, { name: 'Progreso' }, { name: 'Izamal' }],
    'ZAC': [{ name: 'Zacatecas' }, { name: 'Fresnillo' }, { name: 'Guadalupe' }, { name: 'Jerez' }]
}

const filteredCities = computed(() => {
    if (!config.state) return []
    return citiesByState[config.state] || []
})

// 墨西哥街道名称
const mexicoStreets = [
    'Av. Insurgentes', 'Av. Reforma', 'Av. Juárez', 'Av. 5 de Mayo', 'Calle Madero',
    'Calle Republica', 'Av. Universidad', 'Av. Revolución', 'Calle Morelos', 'Av. Hidalgo',
    'Calle Allende', 'Av. Constitution', 'Calle Juárez', 'Av. Juárez', 'Calle Independencia',
    'Av. Independencia', 'Calle Allende', 'Av. Reforma', 'Calle Morelos', 'Av. Hidalgo',
    'Calle Juárez', 'Av. Juárez', 'Calle Allende', 'Av. Reforma', 'Calle Morelos',
    'Av. Hidalgo', 'Calle Juárez', 'Av. Juárez', 'Calle Allende', 'Av. Reforma'
]

// 邮编前缀映射（简化）
const postalCodePrefixes = {
    'AGS': '20', 'BCN': '21', 'BCS': '23', 'CAMP': '24', 'COAH': '25',
    'COL': '28', 'CHIS': '29', 'CHIH': '31', 'CDMX': '00', 'DUR': '34',
    'GTO': '36', 'GRO': '39', 'HGO': '42', 'JAL': '44', 'MEX': '50',
    'MIC': '58', 'MOR': '62', 'NAY': '63', 'NLE': '64', 'OAX': '68',
    'PUE': '72', 'QRO': '76', 'QROO': '77', 'SLP': '78', 'SIN': '80',
    'SON': '83', 'TAB': '86', 'TAM': '87', 'TLAX': '90', 'VER': '91',
    'YUC': '97', 'ZAC': '98'
}

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

// 生成RFC（联邦纳税人登记号）
function generateRFC() {
    // RFC格式：4个字母 + 6位数字 + 3位校验码
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
    const vowels = 'AEIOU'
    
    // 4个字母
    let rfc = ''
    rfc += faker.helpers.arrayElement(vowels.split(''))
    rfc += faker.helpers.arrayElement(consonants.split(''))
    rfc += faker.helpers.arrayElement(consonants.split(''))
    rfc += faker.helpers.arrayElement(consonants.split(''))
    
    // 6位数字（出生日期）
    const year = faker.number.int({ min: 1950, max: 2005 }).toString().slice(-2)
    const month = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
    const day = faker.number.int({ min: 1, max: 28 }).toString().padStart(2, '0')
    rfc += year + month + day
    
    // 3位校验码
    rfc += faker.helpers.arrayElement(consonants.split(''))
    rfc += faker.helpers.arrayElement(consonants.split(''))
    rfc += faker.helpers.arrayElement(consonants.split(''))
    
    return rfc.toUpperCase()
}

// 生成CURP（人口登记唯一密钥）
function generateCURP() {
    // CURP格式：4个字母 + 6位数字 + 1个字母（性别）+ 1个字母（出生州）+ 3个辅音 + 3个字母 + 2位数字
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
    const vowels = 'AEIOU'
    
    // 4个字母
    let curp = ''
    curp += faker.helpers.arrayElement(vowels.split(''))
    curp += faker.helpers.arrayElement(consonants.split(''))
    curp += faker.helpers.arrayElement(consonants.split(''))
    curp += faker.helpers.arrayElement(consonants.split(''))
    
    // 6位数字（出生日期）
    const year = faker.number.int({ min: 1950, max: 2005 }).toString().slice(-2)
    const month = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')
    const day = faker.number.int({ min: 1, max: 28 }).toString().padStart(2, '0')
    curp += year + month + day
    
    // 性别（H=男，M=女）
    curp += faker.helpers.arrayElement(['H', 'M'])
    
    // 出生州（第一个字母）
    const stateCode = config.state || faker.helpers.arrayElement(Object.keys(citiesByState))
    curp += stateCode.charAt(0)
    
    // 3个辅音
    for (let i = 0; i < 3; i++) {
        curp += faker.helpers.arrayElement(consonants.split(''))
    }
    
    // 3个字母
    for (let i = 0; i < 3; i++) {
        curp += faker.helpers.arrayElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
    }
    
    // 2位数字（校验码）
    curp += faker.string.numeric(2)
    
    return curp.toUpperCase()
}

// 生成墨西哥地址
function generateAddress() {
    const stateObj = config.state
        ? states.value.find(s => s.code === config.state)
        : faker.helpers.arrayElement(states.value)
    const stateName = stateObj ? stateObj.name : t('tools.mexico-address-generator.states.CDMX')
    
    const stateCode = stateObj ? stateObj.code : 'CDMX'
    const cities = citiesByState[stateCode] || [{ name: 'Ciudad de México' }]
    const cityName = config.city || faker.helpers.arrayElement(cities).name
    
    const street = faker.helpers.arrayElement(mexicoStreets)
    const houseNumber = faker.number.int({ min: 1, max: 999 })
    const neighborhood = faker.location.city() + ' ' + faker.helpers.arrayElement(['Col.', 'Fracc.', 'Res.'])
    
    // 生成墨西哥邮编（5位数字）
    const postalPrefix = postalCodePrefixes[stateCode] || '00'
    const postalCode = postalPrefix + faker.string.numeric(3)
    
    let fullAddress = ''
    
    switch (config.addressType) {
        case 'residential':
            fullAddress = `${street} ${houseNumber}, ${neighborhood}, ${postalCode} ${cityName}, ${stateName}`
            break
        case 'commercial':
            fullAddress = `${street} ${houseNumber}, ${neighborhood}, ${postalCode} ${cityName}, ${stateName} ${t('tools.mexico-address-generator.commercialAddress')}`
            break
        case 'virtual':
            fullAddress = `${t('tools.mexico-address-generator.postOfficeBox')} ${faker.number.int({ min: 100, max: 9999 })}, ${postalCode} ${cityName}, ${stateName}`
            break
        case 'campus':
            const universities = [t('tools.mexico-address-generator.universities.UNAM'), t('tools.mexico-address-generator.universities.IPN'), t('tools.mexico-address-generator.universities.UdeG'), t('tools.mexico-address-generator.universities.UANL')]
            const campusTypes = [t('tools.mexico-address-generator.studentDormitory'), t('tools.mexico-address-generator.teachingBuilding'), t('tools.mexico-address-generator.library')]
            fullAddress = `${faker.helpers.arrayElement(universities)} ${faker.helpers.arrayElement(campusTypes)} ${faker.number.int({ min: 1, max: 10 })}, ${postalCode} ${cityName}, ${stateName}`
            break
        default:
            fullAddress = `${street} ${houseNumber}, ${neighborhood}, ${postalCode} ${cityName}, ${stateName}`
    }
    
    return {
        street,
        houseNumber: `${houseNumber}`,
        neighborhood,
        postalCode,
        city: cityName,
        state: stateName,
        fullAddress
    }
}

// 生成身份信息
function generateIdentity() {
    const gender = faker.person.sexType()
    // 墨西哥姓名生成
    const spanishSurnames = ['García', 'Hernández', 'López', 'Martínez', 'González', 'Rodríguez', 'Pérez', 'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez', 'Díaz', 'Cruz', 'Morales', 'Reyes', 'Gutiérrez', 'Ortiz', 'Ruiz']
    const spanishGivenNames = ['María', 'José', 'Juan', 'Pedro', 'Luis', 'Carlos', 'Antonio', 'Francisco', 'Manuel', 'Alejandro', 'Miguel', 'Ricardo', 'Fernando', 'Roberto', 'Eduardo', 'Patricia', 'Ana', 'Laura', 'Claudia', 'Sofía']
    
    const surname1 = faker.helpers.arrayElement(spanishSurnames)
    const surname2 = faker.helpers.arrayElement(spanishSurnames)
    const givenName = faker.helpers.arrayElement(spanishGivenNames)
    const fullName = `${givenName} ${surname1} ${surname2}`
    
    const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' })
    const age = new Date().getFullYear() - birthDate.getFullYear()
    
    const zodiacSigns = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis']
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
        gender: gender === 'male' ? t('tools.mexico-address-generator.genderMale') : t('tools.mexico-address-generator.genderFemale'),
        age,
        birthDate: birthDate.toLocaleDateString('es-MX'),
        zodiac,
        height: `${faker.number.int({ min: 150, max: 200 })} cm`,
        weight: `${faker.number.int({ min: 45, max: 120 })} kg`
    }
}

// 生成联系方式
function generateContact() {
    const phoneType = faker.helpers.arrayElement(['mobile', 'landline'])
    // 墨西哥电话：+52开头，10位数字
    const phoneNumber = faker.string.numeric(10)
    const phone = `+52 ${phoneNumber.substring(0, 2)} ${phoneNumber.substring(2, 6)} ${phoneNumber.substring(6)}`
    
    return {
        phone,
        phoneType: phoneType === 'mobile' ? t('tools.mexico-address-generator.phoneTypeMobile') : t('tools.mexico-address-generator.phoneTypeLandline'),
        areaCode: '52',
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
    const jobTitles = ['Ingeniero', 'Médico', 'Abogado', 'Contador', 'Arquitecto', 'Profesor', 'Enfermero', 'Chef', 'Periodista', 'Diseñador']
    const industries = ['Tecnología', 'Salud', 'Educación', 'Finanzas', 'Comercio', 'Manufactura', 'Construcción', 'Turismo']
    const companySizes = ['Pequeña (1-50)', 'Mediana (51-200)', 'Grande (201-1000)', 'Corporativa (1000+)']
    const employmentStatuses = ['full-time', 'part-time']
    
    return {
        jobTitle: faker.helpers.arrayElement(jobTitles),
        salary: `MX$${faker.number.int({ min: 10000, max: 80000 })}`,
        companyName: faker.company.name(),
        companySize: faker.helpers.arrayElement(companySizes),
        industry: faker.helpers.arrayElement(industries),
        employmentStatus: faker.helpers.arrayElement(employmentStatuses) === 'full-time'
            ? t('tools.mexico-address-generator.employmentFullTime')
            : t('tools.mexico-address-generator.employmentPartTime')
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
        timezone: 'America/Mexico_City',
        guid: faker.string.uuid(),
        ipAddress: faker.internet.ip(),
        macAddress: faker.internet.mac(),
        cookiePolicy: faker.helpers.arrayElement(['Aceptar Todo', 'Rechazar Todo', 'Personalizado'])
    }
}

// 生成数据
function generateData() {
    if (config.quantity < 1 || config.quantity > 100) {
        toastRef.value.show(t('tools.mexico-address-generator.invalidQuantity'))
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
                item.idCard = {
                    rfc: generateRFC(),
                    curp: generateCURP()
                }
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
    config.state = 'CDMX'
    config.city = 'Ciudad de México'
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
    toastRef.value.show(t('tools.mexico-address-generator.copySuccess'))
}

// 导出项目
function exportItem(item, idx) {
    const dataStr = JSON.stringify(item, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `mexico-address-${idx + 1}.json`
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
    link.download = 'mexico-addresses.json'
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
            row[t('tools.mexico-address-generator.csv.fullAddress')] = item.address.fullAddress
            row[t('tools.mexico-address-generator.csv.street')] = item.address.street
            row[t('tools.mexico-address-generator.csv.houseNumber')] = item.address.houseNumber
            row[t('tools.mexico-address-generator.csv.neighborhood')] = item.address.neighborhood
            row[t('tools.mexico-address-generator.csv.postalCode')] = item.address.postalCode
            row[t('tools.mexico-address-generator.csv.city')] = item.address.city
            row[t('tools.mexico-address-generator.csv.state')] = item.address.state
        }
        if (item.identity) {
            row[t('tools.mexico-address-generator.csv.fullName')] = item.identity.fullName
            row[t('tools.mexico-address-generator.csv.gender')] = item.identity.gender
            row[t('tools.mexico-address-generator.csv.age')] = item.identity.age
            row[t('tools.mexico-address-generator.csv.birthDate')] = item.identity.birthDate
        }
        if (item.contact) {
            row[t('tools.mexico-address-generator.csv.phone')] = item.contact.phone
            row[t('tools.mexico-address-generator.csv.email')] = item.contact.email
        }
        if (item.creditCard) {
            row[t('tools.mexico-address-generator.csv.cardType')] = item.creditCard.type
            row[t('tools.mexico-address-generator.csv.cardNumber')] = item.creditCard.number
        }
        if (item.idCard) {
            row[t('tools.mexico-address-generator.csv.rfc')] = item.idCard.rfc
            row[t('tools.mexico-address-generator.csv.curp')] = item.idCard.curp
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
    link.download = 'mexico-addresses.csv'
    link.click()
    URL.revokeObjectURL(url)
}

// 州改变
function onStateChange() {
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
