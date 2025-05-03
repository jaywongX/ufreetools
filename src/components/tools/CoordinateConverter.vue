<template>
  <div class="max-w-full mx-auto">

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
      <div class="p-6">
        <!-- Coordinate input form -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Source coordinate system -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ t('tools.coordinate-converter.labels.sourceSystem') }}:
            </label>
            <select
              v-model="sourceSystem"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            >
              <option v-for="system in coordinateSystems" :key="system.value" :value="system.value">
                {{ system.name }}
              </option>
            </select>
          </div>

          <!-- Target coordinate system -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ t('tools.coordinate-converter.labels.targetSystem') }}:
            </label>
            <select
              v-model="targetSystem"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            >
              <option v-for="system in coordinateSystems" :key="system.value" :value="system.value">
                {{ system.name }}
              </option>
            </select>
          </div>
        </div>

        <!-- Input coordinate values -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Latitude/X input -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ getFirstCoordinateLabel() }}:
            </label>
            <input
              v-model="latitude"
              type="text"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              :placeholder="getFirstCoordinatePlaceholder()"
            />
          </div>

          <!-- Longitude/Y input -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ getSecondCoordinateLabel() }}:
            </label>
            <input
              v-model="longitude"
              type="text"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              :placeholder="getSecondCoordinatePlaceholder()"
            />
          </div>
        </div>

        <!-- Buttons row -->
        <div class="flex flex-wrap gap-4 mb-6">
          <button
            @click="convertCoordinates"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :disabled="isConverting"
          >
            <span v-if="isConverting">
              {{ t('tools.coordinate-converter.buttons.converting') }}
            </span>
            <span v-else>
              {{ t('tools.coordinate-converter.buttons.convert') }}
            </span>
          </button>
          <button
            @click="loadExample"
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {{ t('tools.coordinate-converter.buttons.loadExample') }}
          </button>
          <button
            @click="swapCoordinateSystems"
            class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {{ t('tools.coordinate-converter.buttons.swap') }}
          </button>
          <button
            @click="resetForm"
            class="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {{ t('tools.coordinate-converter.buttons.reset') }}
          </button>
        </div>

        <!-- Results section -->
        <div v-if="showResults" class="mb-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            {{ t('tools.coordinate-converter.labels.results') }}
          </h3>
          <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Converted latitude/X -->
              <div>
                <span class="text-sm text-gray-600 dark:text-gray-400">
                  {{ getFirstCoordinateLabel() }}:
                </span>
                <div class="flex items-center">
                  <p class="font-mono text-lg break-all">{{ convertedLatitude }}</p>
                  <button
                    @click="copyToClipboard(convertedLatitude)"
                    class="ml-2 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Converted longitude/Y -->
              <div>
                <span class="text-sm text-gray-600 dark:text-gray-400">
                  {{ getSecondCoordinateLabel() }}:
                </span>
                <div class="flex items-center">
                  <p class="font-mono text-lg break-all">{{ convertedLongitude }}</p>
                  <button
                    @click="copyToClipboard(convertedLongitude)"
                    class="ml-2 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Full coordinate string for direct copying -->
              <div class="md:col-span-2 mt-3">
                <span class="text-sm text-gray-600 dark:text-gray-400">
                  {{ t('tools.coordinate-converter.labels.formatted') }}:
                </span>
                <div class="flex items-center">
                  <p class="font-mono text-lg break-all">{{ formattedCoordinate }}</p>
                  <button
                    @click="copyToClipboard(formattedCoordinate)"
                    class="ml-2 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map preview (optional, can be added if we want to show location on map) -->
        <div v-if="showMapPreview" class="mb-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            {{ t('tools.coordinate-converter.labels.mapPreview') }}
          </h3>
          <div class="bg-gray-100 dark:bg-gray-700 p-1 rounded-md h-64">
            <!-- Map component would go here, using a library like leaflet.js -->
            <div ref="mapContainer" class="h-full w-full rounded-md"></div>
          </div>
        </div>

        <!-- Batch conversion section (advanced feature) -->
        <div class="border-t pt-6 mt-6 border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            {{ t('tools.coordinate-converter.labels.batchConversion') }}
          </h3>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ t('tools.coordinate-converter.labels.batchInput') }}:
            </label>
            <textarea
              v-model="batchInput"
              rows="5"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              :placeholder="t('tools.coordinate-converter.placeholders.batchInput')"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ t('tools.coordinate-converter.labels.inputFormat') }}:
            </label>
            <select
              v-model="batchInputFormat"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="latlon">{{ t('tools.coordinate-converter.formats.latlon') }}</option>
              <option value="lonlat">{{ t('tools.coordinate-converter.formats.lonlat') }}</option>
              <option value="lonlat_comma">{{ t('tools.coordinate-converter.formats.lonlat_comma') }}</option>
              <option value="latlon_comma">{{ t('tools.coordinate-converter.formats.latlon_comma') }}</option>
            </select>
          </div>
          <div class="flex flex-wrap gap-4 mb-4">
            <button
              @click="convertBatch"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :disabled="isBatchConverting"
            >
              <span v-if="isBatchConverting">
                {{ t('tools.coordinate-converter.buttons.batchConverting') }}
              </span>
              <span v-else>
                {{ t('tools.coordinate-converter.buttons.batchConvert') }}
              </span>
            </button>
            <button
              @click="loadBatchExample"
              class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {{ t('tools.coordinate-converter.buttons.loadBatchExample') }}
            </button>
          </div>
          <div v-if="batchResults.length > 0" class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ t('tools.coordinate-converter.labels.batchResults') }}:
            </label>
            <textarea
              v-model="formattedBatchResults"
              rows="5"
              readonly
              class="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-600"
            ></textarea>
            <div class="mt-2">
              <button
                @click="copyToClipboard(formattedBatchResults)"
                class="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                {{ t('tools.coordinate-converter.buttons.copyResults') }}
              </button>
              <button
                @click="exportBatchResults"
                class="ml-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {{ t('tools.coordinate-converter.buttons.exportCsv') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tips and usage information -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
      <div class="p-6">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
          {{ t('tools.coordinate-converter.sections.tips.title') }}
        </h3>
        <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>{{ t('tools.coordinate-converter.sections.tips.item1') }}</li>
          <li>{{ t('tools.coordinate-converter.sections.tips.item2') }}</li>
          <li>{{ t('tools.coordinate-converter.sections.tips.item3') }}</li>
          <li>{{ t('tools.coordinate-converter.sections.tips.item4') }}</li>
        </ul>
      </div>
    </div>

    <!-- About the coordinate systems -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
          {{ t('tools.coordinate-converter.sections.about.title') }}
        </h3>
        <dl class="space-y-4">
          <div v-for="system in coordinateSystems" :key="system.value">
            <dt class="font-medium text-gray-800 dark:text-gray-200">{{ system.name }}</dt>
            <dd class="mt-1 text-gray-700 dark:text-gray-300">{{ getSystemDescription(system.value) }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Article content from localization -->
    <CoordinateConverterArticle />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import CoordinateConverterArticle from './CoordinateConverterArticle.vue';
import proj4 from 'proj4';
import * as turf from '@turf/turf';
import { wgs84togcj02, gcj02towgs84, gcj02tobd09, bd09togcj02 } from 'coordtransform';

// 初始化国际化
const { t } = useI18n();

// 坐标转换所需的常量
const PI = Math.PI;
const X_PI = PI * 3000.0 / 180.0;
const EARTH_RADIUS = 6378245.0;
const EE = 0.00669342162296594323;

// 坐标系统定义
const coordinateSystems = computed(() => [
  { value: 'wgs84', name: t('tools.coordinate-converter.systems.wgs84.name') },
  { value: 'gcj02', name: t('tools.coordinate-converter.systems.gcj02.name') },
  { value: 'bd09', name: t('tools.coordinate-converter.systems.bd09.name') },
  { value: 'webmercator', name: t('tools.coordinate-converter.systems.webmercator.name') },
  { value: 'utm', name: t('tools.coordinate-converter.systems.utm.name') },
  { value: 'dms', name: t('tools.coordinate-converter.systems.dms.name') },
  { value: 'epsg3857', name: t('tools.coordinate-converter.systems.epsg3857.name') },
  { value: 'amap', name: t('tools.coordinate-converter.systems.amap.name') },
  { value: 'cgcs2000', name: t('tools.coordinate-converter.systems.cgcs2000.name') },
  { value: 'lambert', name: t('tools.coordinate-converter.systems.lambert.name') },
  { value: 'miller', name: t('tools.coordinate-converter.systems.miller.name') },
  { value: 'polar', name: t('tools.coordinate-converter.systems.polar.name') },
  { value: 'dkk', name: t('tools.coordinate-converter.systems.dkk.name') }
]);

// 定义组件状态
const sourceSystem = ref('wgs84');
const targetSystem = ref('gcj02');
const latitude = ref('');
const longitude = ref('');
const convertedLatitude = ref('');
const convertedLongitude = ref('');
const formattedCoordinate = ref('');
const showResults = ref(false);
const isConverting = ref(false);
const showMapPreview = ref(false);
const mapContainer = ref(null);

// 批量转换相关
const batchInput = ref('');
const batchInputFormat = ref('latlon_comma');
const batchResults = ref([]);
const formattedBatchResults = computed(() => {
  if (batchResults.value.length === 0) return '';
  
  let result = '';
  batchResults.value.forEach(item => {
    if (item.success) {
      // Format based on selected input format
      switch(batchInputFormat.value) {
        case 'latlon':
          result += `${item.target.lat} ${item.target.lng}\n`;
          break;
        case 'lonlat':
          result += `${item.target.lng} ${item.target.lat}\n`;
          break;
        case 'latlon_comma':
          result += `${item.target.lat}, ${item.target.lng}\n`;
          break;
        case 'lonlat_comma':
          result += `${item.target.lng}, ${item.target.lat}\n`;
          break;
        default:
          result += `${item.target.lat}, ${item.target.lng}\n`;
      }
    } else {
      result += `${t('tools.coordinate-converter.errors.conversionFailed')}: ${item.error}\n`;
    }
  });
  
  return result;
});
const isBatchConverting = ref(false);

// 帮助函数 - 获取输入字段标签
function getFirstCoordinateLabel() {
  if (sourceSystem.value === 'webmercator' || sourceSystem.value === 'utm') {
    return t('tools.coordinate-converter.labels.x');
  }
  return t('tools.coordinate-converter.labels.latitude');
}

function getSecondCoordinateLabel() {
  if (sourceSystem.value === 'webmercator' || sourceSystem.value === 'utm') {
    return t('tools.coordinate-converter.labels.y');
  }
  return t('tools.coordinate-converter.labels.longitude');
}

function getFirstCoordinatePlaceholder() {
  if (sourceSystem.value === 'webmercator' || sourceSystem.value === 'utm') {
    return t('tools.coordinate-converter.placeholders.x');
  }
  return t('tools.coordinate-converter.placeholders.latitude');
}

function getSecondCoordinatePlaceholder() {
  if (sourceSystem.value === 'webmercator' || sourceSystem.value === 'utm') {
    return t('tools.coordinate-converter.placeholders.y');
  }
  return t('tools.coordinate-converter.placeholders.longitude');
}

function getSystemDescription(system) {
  switch (system) {
    case 'wgs84':
      return t('tools.coordinate-converter.sections.about.wgs84');
    case 'gcj02':
      return t('tools.coordinate-converter.sections.about.gcj02');
    case 'bd09':
      return t('tools.coordinate-converter.sections.about.bd09');
    case 'webmercator':
      return t('tools.coordinate-converter.sections.about.webmercator');
    case 'utm':
      return t('tools.coordinate-converter.sections.about.utm');
    case 'dms':
      return t('tools.coordinate-converter.sections.about.dms');
    case 'epsg3857':
      return t('tools.coordinate-converter.sections.about.epsg3857');
    case 'amap':
      return t('tools.coordinate-converter.sections.about.amap');
    case 'cgcs2000':
      return t('tools.coordinate-converter.sections.about.cgcs2000');
    case 'lambert':
      return t('tools.coordinate-converter.sections.about.lambert');
    case 'miller':
      return t('tools.coordinate-converter.sections.about.miller');
    case 'polar':
      return t('tools.coordinate-converter.sections.about.polar');
    case 'dkk':
      return t('tools.coordinate-converter.sections.about.dkk');
    default:
      return '';
  }
}

// 基本功能
function swapCoordinateSystems() {
  const temp = sourceSystem.value;
  sourceSystem.value = targetSystem.value;
  targetSystem.value = temp;
}

function resetForm() {
  latitude.value = '';
  longitude.value = '';
  showResults.value = false;
  convertedLatitude.value = '';
  convertedLongitude.value = '';
  formattedCoordinate.value = '';
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(t('tools.coordinate-converter.messages.copied'));
  }).catch(err => {
    console.error('Could not copy text: ', err);
    alert(t('tools.coordinate-converter.errors.copyFailed'));
  });
}

// 坐标转换主函数
async function convertCoordinates() {
  if (!latitude.value || !longitude.value) {
    alert(t('tools.coordinate-converter.messages.noCoordinates'));
    return;
  }
  
  isConverting.value = true;
  
  try {
    let lat = parseFloat(latitude.value);
    let lng = parseFloat(longitude.value);
    
    // Validate input
    if (isNaN(lat) || isNaN(lng)) {
      throw new Error(t('tools.coordinate-converter.errors.invalidCoordinates'));
    }
    
    // Convert to WGS-84 as an intermediate step
    let wgs84Coords;
    
    switch (sourceSystem.value) {
        case 'wgs84':
            wgs84Coords = { lat, lng };
            break;
        case 'gcj02':
        case 'amap': // 高德坐标系就是GCJ02
            wgs84Coords = gcj02ToWgs84(lat, lng);
            break;
        case 'bd09':
            const gcjCoords = bd09ToGcj02(lat, lng);
            wgs84Coords = gcj02ToWgs84(gcjCoords.lat, gcjCoords.lng);
            break;
        case 'webmercator':
        case 'epsg3857': // EPSG:3857 是 Web Mercator 的标准名称
            wgs84Coords = webMercatorToWgs84(lat, lng);
            break;
        case 'utm':
            wgs84Coords = utmToWgs84(lat, lng, 'N', 50);
            break;
        case 'dms':
            wgs84Coords = dmsToWgs84(lat, lng);
            break;
        case 'cgcs2000':
            wgs84Coords = cgcs2000ToWgs84(lat, lng);
            break;
        case 'lambert':
            wgs84Coords = lambertToWgs84(lat, lng);
            break;
        case 'miller':
            wgs84Coords = millerToWgs84(lat, lng);
            break;
        case 'polar':
            wgs84Coords = polarToWgs84(lat, lng);
            break;
        case 'dkk':
            wgs84Coords = dkkToWgs84(lat, lng);
            break;
        default:
            wgs84Coords = { lat, lng };
        }
    
    // Convert from WGS-84 to target system
    let resultCoords;
    
    switch (targetSystem.value) {
        case 'wgs84':
            resultCoords = wgs84Coords;
            break;
        case 'gcj02':
        case 'amap': // 高德坐标系就是GCJ02
            resultCoords = wgs84ToGcj02(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'bd09':
            const gcjCoords = wgs84ToGcj02(wgs84Coords.lat, wgs84Coords.lng);
            resultCoords = gcj02ToBd09(gcjCoords.lat, gcjCoords.lng);
            break;
        case 'webmercator':
        case 'epsg3857': // EPSG:3857 是 Web Mercator 的标准名称
            resultCoords = wgs84ToWebMercator(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'utm':
            resultCoords = wgs84ToUtm(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'dms':
            resultCoords = wgs84ToDms(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'cgcs2000':
            resultCoords = wgs84ToCgcs2000(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'lambert':
            resultCoords = wgs84ToLambert(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'miller':
            resultCoords = wgs84ToMiller(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'polar':
            resultCoords = wgs84ToPolar(wgs84Coords.lat, wgs84Coords.lng);
            break;
        case 'dkk':
            resultCoords = wgs84ToDkk(wgs84Coords.lat, wgs84Coords.lng);
            break;
        default:
            resultCoords = wgs84Coords;
        }
    
    // Round and format results
    convertedLatitude.value = resultCoords.lat.toFixed(6);
    convertedLongitude.value = resultCoords.lng.toFixed(6);
    
    // Format full coordinate string
    if (targetSystem.value === 'webmercator' || targetSystem.value === 'utm') {
      formattedCoordinate.value = t('tools.coordinate-converter.formats.xy', { x: convertedLatitude.value, y: convertedLongitude.value });
    } else {
      formattedCoordinate.value = t('tools.coordinate-converter.formats.latLng', { lat: convertedLatitude.value, lng: convertedLongitude.value });
    }
    
    showResults.value = true;
    
    // Update map if available
    if (showMapPreview.value) {
      updateMapIfAvailable(resultCoords);
    }
  } catch (error) {
    console.error('Conversion error:', error);
    alert(t('tools.coordinate-converter.errors.conversionFailed'));
  } finally {
    isConverting.value = false;
  }
}

// 批量转换功能
async function convertBatch() {
  if (!batchInput.value.trim()) {
    alert(t('tools.coordinate-converter.messages.noCoordinates'));
    return;
  }
  
  isBatchConverting.value = true;
  batchResults.value = [];
  
  try {
    const lines = batchInput.value.trim().split('\n');
    let failureCount = 0;
    
    for (const line of lines) {
      if (!line.trim()) continue;
      
      try {
        let lat, lng;
        
        // Parse coordinates based on selected format
        switch (batchInputFormat.value) {
          case 'latlon':
            const latLonParts = line.trim().split(/\s+/);
            lat = parseFloat(latLonParts[0]);
            lng = parseFloat(latLonParts[1]);
            break;
          case 'lonlat':
            const lonLatParts = line.trim().split(/\s+/);
            lng = parseFloat(lonLatParts[0]);
            lat = parseFloat(lonLatParts[1]);
            break;
          case 'latlon_comma':
            const latLonCommaParts = line.trim().split(',');
            lat = parseFloat(latLonCommaParts[0].trim());
            lng = parseFloat(latLonCommaParts[1].trim());
            break;
          case 'lonlat_comma':
            const lonLatCommaParts = line.trim().split(',');
            lng = parseFloat(lonLatCommaParts[0].trim());
            lat = parseFloat(lonLatCommaParts[1].trim());
            break;
          default:
            throw new Error(t('tools.coordinate-converter.errors.invalidFormat'));
        }
        
        if (isNaN(lat) || isNaN(lng)) {
          throw new Error(t('tools.coordinate-converter.errors.invalidCoordinates'));
        }
        
        // Convert to WGS-84 as intermediate
        let wgs84Coords;
        switch (sourceSystem.value) {
          case 'wgs84':
            wgs84Coords = { lat, lng };
            break;
          case 'gcj02':
          case 'amap':
            wgs84Coords = gcj02ToWgs84(lat, lng);
            break;
          case 'bd09':
            const gcjCoords = bd09ToGcj02(lat, lng);
            wgs84Coords = gcj02ToWgs84(gcjCoords.lat, gcjCoords.lng);
            break;
          case 'webmercator':
          case 'epsg3857':
            wgs84Coords = webMercatorToWgs84(lat, lng);
            break;
          case 'utm':
            wgs84Coords = utmToWgs84(lat, lng, 'N', 50);
            break;
          case 'dms':
            wgs84Coords = dmsToWgs84(lat, lng);
            break;
          case 'cgcs2000':
            wgs84Coords = cgcs2000ToWgs84(lat, lng);
            break;
          case 'lambert':
            wgs84Coords = lambertToWgs84(lat, lng);
            break;
          case 'miller':
            wgs84Coords = millerToWgs84(lat, lng);
            break;
          case 'polar':
            wgs84Coords = polarToWgs84(lat, lng);
            break;
          case 'dkk':
            wgs84Coords = dkkToWgs84(lat, lng);
            break;
          default:
            wgs84Coords = { lat, lng };
        }
        
        // Convert to target system
        let resultCoords;
        switch (targetSystem.value) {
          case 'wgs84':
            resultCoords = wgs84Coords;
            break;
          case 'gcj02':
          case 'amap':
            resultCoords = wgs84ToGcj02(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'bd09':
            const gcjCoords = wgs84ToGcj02(wgs84Coords.lat, wgs84Coords.lng);
            resultCoords = gcj02ToBd09(gcjCoords.lat, gcjCoords.lng);
            break;
          case 'webmercator':
          case 'epsg3857':
            resultCoords = wgs84ToWebMercator(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'utm':
            resultCoords = wgs84ToUtm(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'dms':
            resultCoords = wgs84ToDms(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'cgcs2000':
            resultCoords = wgs84ToCgcs2000(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'lambert':
            resultCoords = wgs84ToLambert(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'miller':
            resultCoords = wgs84ToMiller(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'polar':
            resultCoords = wgs84ToPolar(wgs84Coords.lat, wgs84Coords.lng);
            break;
          case 'dkk':
            resultCoords = wgs84ToDkk(wgs84Coords.lat, wgs84Coords.lng);
            break;
          default:
            resultCoords = wgs84Coords;
        }
        
        batchResults.value.push({
          success: true,
          source: { lat, lng },
          target: {
            lat: parseFloat(resultCoords.lat.toFixed(6)),
            lng: parseFloat(resultCoords.lng.toFixed(6))
          }
        });
      } catch (error) {
        console.error('Error converting line:', line, error);
        batchResults.value.push({
          success: false,
          input: line,
          error: error.message
        });
        failureCount++;
      }
    }
    
    if (failureCount > 0 && failureCount < lines.length) {
      alert(t('tools.coordinate-converter.errors.batchFailed'));
    } else if (failureCount === 0) {
      alert(t('tools.coordinate-converter.messages.batchSuccess'));
    }
  } catch (error) {
    console.error('Batch conversion error:', error);
    alert(error.message);
  } finally {
    isBatchConverting.value = false;
  }
}

function exportBatchResults() {
  if (batchResults.value.length === 0) return;

  // Add BOM for better Excel compatibility with UTF-8
  let csvContent = "\uFEFF";
  
  // Use tab as separator instead of comma for better compatibility
  const separator = "\t";
  
  // Add headers
  csvContent += `${t('tools.coordinate-converter.export.originalLat')}${separator}${t('tools.coordinate-converter.export.originalLng')}${separator}${t('tools.coordinate-converter.export.convertedLat')}${separator}${t('tools.coordinate-converter.export.convertedLng')}\n`;
  
  // Add data rows
  batchResults.value.forEach(result => {
    if (result.success) {
      csvContent += `${result.source.lat}${separator}${result.source.lng}${separator}${result.target.lat}${separator}${result.target.lng}\n`;
    }
  });
  
  // Create download link with correct MIME type
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${t('tools.coordinate-converter.export.filename')}_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  
  // Trigger download
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// 坐标转换核心算法
function wgs84ToGcj02(lat, lng) {
  const result = wgs84togcj02(lng, lat);
  return { lat: result[1], lng: result[0] };
}

function gcj02ToWgs84(lat, lng) {
  const result = gcj02towgs84(lng, lat);
  return { lat: result[1], lng: result[0] };
}

function bd09ToGcj02(lat, lng) {
  const result = bd09togcj02(lng, lat);
  return { lat: result[1], lng: result[0] };
}

function gcj02ToBd09(lat, lng) {
  const result = gcj02tobd09(lng, lat);
  return { lat: result[1], lng: result[0] };
}

// Web Mercator转换函数
function wgs84ToWebMercator(lat, lng) {
  const result = proj4('EPSG:4326', 'EPSG:3857', [lng, lat]);
  return { lat: result[0], lng: result[1] };
}

function webMercatorToWgs84(x, y) {
  const result = proj4('EPSG:3857', 'EPSG:4326', [x, y]);
  return { lat: result[1], lng: result[0] };
}

// UTM 转换函数 (简化实现)
function wgs84ToUtm(lat, lng) {
  // 计算UTM区域
  const zone = Math.floor((lng + 180) / 6) + 1;
  const hemisphere = lat >= 0 ? 'N' : 'S';
  const utmProj = `+proj=utm +zone=${zone} ${hemisphere === 'S' ? '+south' : ''} +datum=WGS84 +units=m +no_defs`;
  
  const result = proj4('EPSG:4326', utmProj, [lng, lat]);
  return { lat: result[0], lng: result[1] }; // 东距, 北距
}

function utmToWgs84(easting, northing, zone, hemis = 'N') {
  const utmProj = `+proj=utm +zone=${zone} ${hemis === 'S' ? '+south' : ''} +datum=WGS84 +units=m +no_defs`;
  
  const result = proj4(utmProj, 'EPSG:4326', [easting, northing]);
  return { lat: result[1], lng: result[0] };
}

// Map 相关函数
function updateMapIfAvailable(coords) {
  if (!showMapPreview.value || !mapContainer.value) return;
  
  // 这里可以使用地图库如Leaflet来显示坐标
  console.log('Would update map with coordinates:', coords);
}

// 生命周期钩子
onMounted(() => {
  // 如果需要，初始化地图
  if (showMapPreview.value && mapContainer.value) {
    // 在这里初始化地图库如Leaflet
  }

  // 注册常用投影
  proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs'); // WGS84
  proj4.defs('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs'); // Web墨卡托
  proj4.defs('EPSG:4490', '+proj=longlat +ellps=GRS80 +no_defs'); // CGCS2000
  
  // 兰伯特投影定义示例（需要根据具体参数调整）
  proj4.defs('LAMBERT', '+proj=lcc +lat_1=25 +lat_2=47 +lat_0=0 +lon_0=105 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs');
  
  // 米勒投影
  proj4.defs('MILLER', '+proj=mill +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R_A +ellps=WGS84 +datum=WGS84 +units=m +no_defs');
});

// 监听坐标系统变化
watch([sourceSystem, targetSystem], () => {
  if (showResults.value) {
    // 当更改坐标系统时重新运行转换
    convertCoordinates();
  }
});

// 添加示例加载函数到script部分
function loadExample() {
  switch(sourceSystem.value) {
    case 'wgs84':
      latitude.value = '39.916345';
      longitude.value = '116.397155'; // 北京故宫坐标
      break;
    case 'gcj02':
    case 'amap':
      latitude.value = '39.91748';
      longitude.value = '116.40382'; // 北京故宫在GCJ-02系统中的坐标
      break;
    case 'bd09':
      latitude.value = '39.92373';
      longitude.value = '116.41029'; // 北京故宫在BD-09系统中的坐标
      break;
    case 'webmercator':
    case 'epsg3857':
      latitude.value = '12958116.17';
      longitude.value = '4825303.77'; // 北京故宫在墨卡托投影中的近似坐标
      break;
    case 'utm':
      latitude.value = '440471.08';
      longitude.value = '4418144.47'; // 北京故宫在UTM50N区域中的近似坐标
      break;
    case 'dms':
      latitude.value = '39°54\'58.8"N';
      longitude.value = '116°23\'49.8"E'; // 北京故宫的度分秒表示
      break;
    case 'cgcs2000':
      latitude.value = '39.916375';
      longitude.value = '116.397185'; // 北京故宫在CGCS2000中的近似坐标
      break;
    case 'lambert':
      latitude.value = '3968245.12';
      longitude.value = '20591523.77'; // 北京故宫在Lambert投影中的示例值
      break;
    case 'miller':
      latitude.value = '12958116.17';
      longitude.value = '5284156.33'; // 北京故宫在Miller投影中的示例值
      break;
    case 'polar':
      latitude.value = '7654321.12';
      longitude.value = '45.50'; // 北京故宫在极坐标投影中的示例值(距离，角度)
      break;
    case 'dkk':
      latitude.value = '4397255.12';
      longitude.value = '13156422.77'; // 北京故宫在DKK投影中的示例值
      break;
  }
}

function loadBatchExample() {
  // Get coordinates for the current source system
  let coords;
  switch(sourceSystem.value) {
    case 'wgs84':
      coords = [
        { lat: 39.916345, lng: 116.397155 }, // Beijing
        { lat: 31.230416, lng: 121.473701 }, // Shanghai
        { lat: 22.542883, lng: 114.062996 }  // Shenzhen
      ];
      break;
    case 'gcj02':
    case 'amap':
      coords = [
        { lat: 39.91748, lng: 116.40382 },
        { lat: 31.23150, lng: 121.47651 },
        { lat: 22.54501, lng: 114.05792 }
      ];
      break;
    // Keep existing cases for other systems...
    case 'bd09':
      coords = [
        { lat: 39.92373, lng: 116.41029 },
        { lat: 31.23681, lng: 121.48341 },
        { lat: 22.55037, lng: 114.06444 }
      ];
      break;
    // Other existing coordinate system cases...
    default:
      coords = [
        { lat: 39.916345, lng: 116.397155 },
        { lat: 31.230416, lng: 121.473701 },
        { lat: 22.542883, lng: 114.062996 }
      ];
  }
  
  // Format according to the selected input format
  let formattedCoords = '';
  switch(batchInputFormat.value) {
    case 'latlon':
      formattedCoords = coords.map(c => `${c.lat} ${c.lng}`).join('\n');
      break;
    case 'lonlat':
      formattedCoords = coords.map(c => `${c.lng} ${c.lat}`).join('\n');
      break;
    case 'latlon_comma':
      formattedCoords = coords.map(c => `${c.lat}, ${c.lng}`).join('\n');
      break;
    case 'lonlat_comma':
      formattedCoords = coords.map(c => `${c.lng}, ${c.lat}`).join('\n');
      break;
    default:
      formattedCoords = coords.map(c => `${c.lat}, ${c.lng}`).join('\n');
  }
  
  batchInput.value = formattedCoords;
}

// 使用turf.js进行DMS转换
function dmsToWgs84(dmsLat, dmsLng) {
  // DMS解析函数保持原样，因为turf.js不直接提供此功能
  const parseDMS = (dms) => {
    const regex = /(\d+)°(\d+)'([\d\.]+)"([NSEW])/;
    const match = dms.match(regex);
    if (!match) return 0;
    
    const deg = parseFloat(match[1]);
    const min = parseFloat(match[2]);
    const sec = parseFloat(match[3]);
    const dir = match[4];
    
    let result = deg + min/60 + sec/3600;
    if (dir === 'S' || dir === 'W') result = -result;
    
    return result;
  };
  
  const lat = parseDMS(dmsLat);
  const lng = parseDMS(dmsLng);
  
  return { lat, lng };
}

function wgs84ToDms(lat, lng) {
  // 将十进制度数转换为度分秒格式
  const toDMS = (coord, isLat) => {
    const dir = coord >= 0 ? (isLat ? 'N' : 'E') : (isLat ? 'S' : 'W');
    const absCoord = Math.abs(coord);
    
    const deg = Math.floor(absCoord);
    const minFloat = (absCoord - deg) * 60;
    const min = Math.floor(minFloat);
    const sec = ((minFloat - min) * 60).toFixed(1);
    
    return `${deg}°${min}'${sec}"${dir}`;
  };
  
  return { 
    lat: toDMS(lat, true), 
    lng: toDMS(lng, false) 
  };
}

// CGCS2000转换使用proj4
function cgcs2000ToWgs84(lat, lng) {
  const result = proj4('EPSG:4490', 'EPSG:4326', [lng, lat]);
  return { lat: result[1], lng: result[0] };
}

function wgs84ToCgcs2000(lat, lng) {
  const result = proj4('EPSG:4326', 'EPSG:4490', [lng, lat]);
  return { lat: result[1], lng: result[0] };
}

// Lambert投影
function lambertToWgs84(x, y) {
  const result = proj4('LAMBERT', 'EPSG:4326', [x, y]);
  return { lat: result[1], lng: result[0] };
}

function wgs84ToLambert(lat, lng) {
  const result = proj4('EPSG:4326', 'LAMBERT', [lng, lat]);
  return { lat: result[0], lng: result[1] };
}

// Miller投影
function millerToWgs84(x, y) {
  const result = proj4('MILLER', 'EPSG:4326', [x, y]);
  return { lat: result[1], lng: result[0] };
}

function wgs84ToMiller(lat, lng) {
  const result = proj4('EPSG:4326', 'MILLER', [lng, lat]);
  return { lat: result[0], lng: result[1] };
}

// 改进极坐标转换，使用turf库的相关功能
function polarToWgs84(radius, angle) {
  // 将极坐标转换为笛卡尔坐标
  const rad = parseFloat(radius);
  const ang = parseFloat(angle) * Math.PI / 180;
  
  // 使用turf创建点
  const origin = turf.point([0, 90]); // 北极点作为原点
  const distance = rad / 1000; // 转换为千米
  const bearing = ang;
  
  const destination = turf.destination(origin, distance, bearing, {units: 'kilometers'});
  const coords = destination.geometry.coordinates;
  
  return { lat: coords[1], lng: coords[0] };
}

function wgs84ToPolar(lat, lng) {
  const origin = turf.point([0, 90]); // 北极点
  const point = turf.point([lng, lat]);
  
  const distance = turf.distance(origin, point, {units: 'kilometers'}) * 1000; // 转换为米
  const bearing = turf.bearing(origin, point);
  
  return { lat: distance, lng: bearing >= 0 ? bearing : bearing + 360 };
}

// DKK投影(德林凯特投影)可以使用Lambert作为基础，但需要特定参数
function dkkToWgs84(x, y) {
  // 定义特定的DKK投影
  const dkkProj = '+proj=lcc +lat_1=25 +lat_2=47 +lat_0=0 +lon_0=105 +x_0=0 +y_0=0 +ellps=krass +units=m +no_defs';
  proj4.defs('DKK', dkkProj);
  
  const result = proj4('DKK', 'EPSG:4326', [x, y]);
  return { lat: result[1], lng: result[0] };
}

function wgs84ToDkk(lat, lng) {
  // 确保DKK投影已定义
  const dkkProj = '+proj=lcc +lat_1=25 +lat_2=47 +lat_0=0 +lon_0=105 +x_0=0 +y_0=0 +ellps=krass +units=m +no_defs';
  proj4.defs('DKK', dkkProj);
  
  const result = proj4('EPSG:4326', 'DKK', [lng, lat]);
  return { lat: result[0], lng: result[1] };
}
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
