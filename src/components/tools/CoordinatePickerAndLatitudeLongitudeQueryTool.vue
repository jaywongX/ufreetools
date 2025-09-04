<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧：输入与地图 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.leftTitle')
          }}</h2>

        <!-- 搜索 -->
        <div class="mb-4 space-y-3">
          <div class="flex gap-2">
            <input v-model="searchQuery" type="text" class="input input-bordered flex-1"
              :placeholder="$t('tools.coordinate-picker-and-latitude-longitude-query-tool.searchPlaceholder')"
              @keyup.enter="searchPlace" />
            <button class="btn btn-primary" @click="searchPlace">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.searchBtn') }}</button>
          </div>
          <p class="text-xs text-gray-400">{{
            $t('tools.coordinate-picker-and-latitude-longitude-query-tool.searchProviderNote') }}</p>

          <!-- 建议（不使用 v-for，最多展示5条） -->
          <div v-if="suggestions.length" class="space-y-2">
            <h3 class="font-medium">{{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.suggestionsTitle')
              }}</h3>

            <div v-if="suggestions[0]" class="suggestion-item">
              <div class="text-sm break-words text-gray-900 dark:text-gray-100">{{ suggestions[0].display_name }}</div>
              <div class="text-xs text-gray-600 dark:text-gray-400">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lat') }}: {{ suggestions[0].lat }},
                {{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lon') }}: {{ suggestions[0].lon }}
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-secondary" @click="gotoSuggestion(0)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.gotoBtn') }}</button>
                <button class="btn btn-sm btn-primary" @click="addSuggestion(0)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.addFromSearch') }}</button>
              </div>
            </div>

            <div v-if="suggestions[1]" class="suggestion-item">
              <div class="text-sm break-words text-gray-900 dark:text-gray-100">{{ suggestions[1].display_name }}</div>
              <div class="text-xs text-gray-600 dark:text-gray-400">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lat') }}: {{ suggestions[1].lat }},
                {{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lon') }}: {{ suggestions[1].lon }}
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-secondary" @click="gotoSuggestion(1)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.gotoBtn') }}</button>
                <button class="btn btn-sm btn-primary" @click="addSuggestion(1)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.addFromSearch') }}</button>
              </div>
            </div>

            <div v-if="suggestions[2]" class="suggestion-item">
              <div class="text-sm break-words text-gray-900 dark:text-gray-100">{{ suggestions[2].display_name }}</div>
              <div class="text-xs text-gray-600 dark:text-gray-400">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lat') }}: {{ suggestions[2].lat }},
                {{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lon') }}: {{ suggestions[2].lon }}
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-secondary" @click="gotoSuggestion(2)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.gotoBtn') }}</button>
                <button class="btn btn-sm btn-primary" @click="addSuggestion(2)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.addFromSearch') }}</button>
              </div>
            </div>

            <div v-if="suggestions[3]" class="suggestion-item">
              <div class="text-sm break-words text-gray-900 dark:text-gray-100">{{ suggestions[3].display_name }}</div>
              <div class="text-xs text-gray-600 dark:text-gray-400">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lat') }}: {{ suggestions[3].lat }},
                {{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lon') }}: {{ suggestions[3].lon }}
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-secondary" @click="gotoSuggestion(3)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.gotoBtn') }}</button>
                <button class="btn btn-sm btn-primary" @click="addSuggestion(3)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.addFromSearch') }}</button>
              </div>
            </div>

            <div v-if="suggestions[4]" class="suggestion-item">
              <div class="text-sm break-words text-gray-900 dark:text-gray-100">{{ suggestions[4].display_name }}</div>
              <div class="text-xs text-gray-600 dark:text-gray-400">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lat') }}: {{ suggestions[4].lat }},
                {{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.lon') }}: {{ suggestions[4].lon }}
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-secondary" @click="gotoSuggestion(4)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.gotoBtn') }}</button>
                <button class="btn btn-sm btn-primary" @click="addSuggestion(4)">{{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.addFromSearch') }}</button>
              </div>
            </div>
          </div>
        </div>

        <!-- EPSG 设置 -->
        <div class="mb-4 space-y-3">
          <h3 class="font-medium">{{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.epsgLabel') }}</h3>

          <div class="flex flex-wrap gap-2">
            <button class="btn btn-sm btn-secondary" @click="setPreset('4326')">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.preset4326') }}</button>
            <button class="btn btn-sm btn-secondary" @click="setPreset('3857')">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.preset3857') }}</button>
            <button class="btn btn-sm btn-secondary" @click="setPreset('4490')">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.preset4490') }}</button>
          </div>

          <div class="grid grid-cols-1 gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.epsgCode') }}</label>
            <input v-model="epsgCode" type="text" class="input"
              :placeholder="$t('tools.coordinate-picker-and-latitude-longitude-query-tool.epsgCodePlaceholder')" />
          </div>

          <div class="grid grid-cols-1 gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.proj4Label') }}</label>
            <textarea v-model="customProj4" class="textarea" rows="2"
              :placeholder="$t('tools.coordinate-picker-and-latitude-longitude-query-tool.proj4Placeholder')"></textarea>
          </div>
        </div>

        <!-- 地图 -->
        <div class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-medium">{{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.mapTitle') }}</h3>
            <div class="flex gap-2">
              <button class="btn btn-xs map-control-btn" @click="zoomIn">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.zoomIn') }}</button>
              <button class="btn btn-xs map-control-btn" @click="zoomOut">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.zoomOut') }}</button>
              <button class="btn btn-xs map-control-btn" @click="resetView">{{
                $t('tools.coordinate-picker-and-latitude-longitude-query-tool.resetView') }}</button>
            </div>
          </div>
          <div ref="mapEl" class="w-full h-[340px] md:h-[460px] rounded border overflow-hidden"></div>
          <p v-if="mapError" class="text-red-500 text-sm mt-2">{{
            $t('tools.coordinate-picker-and-latitude-longitude-query-tool.loadMapError') }}</p>
        </div>

        <div class="flex justify-between items-center">
          <button class="btn btn-outline btn-error" @click="clearAll">{{
            $t('tools.coordinate-picker-and-latitude-longitude-query-tool.clearMarkers') }}</button>
          <span class="text-sm text-gray-500" v-if="points.length">{{
            $t('tools.coordinate-picker-and-latitude-longitude-query-tool.pointCount', { n: points.length }) }}</span>
        </div>
      </div>

      <!-- 右侧：输出 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-xl font-bold">{{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.rightTitle') }}
          </h2>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
              <span class="text-sm">{{ $t('tools.coordinate-picker-and-latitude-longitude-query-tool.exportFormat')
                }}</span>
              <label class="flex items-center gap-1 text-sm">
                <input type="radio" value="csv" v-model="exportType"> {{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.csv') }}
              </label>
              <label class="flex items-center gap-1 text-sm">
                <input type="radio" value="geojson" v-model="exportType"> {{
                  $t('tools.coordinate-picker-and-latitude-longitude-query-tool.geojson') }}
              </label>
            </div>
            <button class="btn btn-secondary btn-sm" :disabled="!points.length" @click="copyAllText">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.copyAll') }}</button>
            <button class="btn btn-primary btn-sm" :disabled="!points.length" @click="downloadFile">{{
              $t('tools.coordinate-picker-and-latitude-longitude-query-tool.exportAll') }}</button>
          </div>
        </div>

        <div v-if="!points.length"
          class="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
          <svg class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p class="text-gray-500 dark:text-gray-400">{{
            $t('tools.coordinate-picker-and-latitude-longitude-query-tool.none') }}</p>
        </div>

        <div v-else class="space-y-3">
          <textarea class="w-full textarea font-mono text-xs" rows="16" readonly :value="outputText"></textarea>
          <div class="text-xs text-green-600 dark:text-green-400 font-medium" v-if="copied">{{
            $t('tools.coordinate-picker-and-latitude-longitude-query-tool.copySuccess') }}</div>
        </div>
      </div>
    </div>
    <CoordinatePickerAndLatitudeLongitudeQueryToolArticle />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CoordinatePickerAndLatitudeLongitudeQueryToolArticle from './CoordinatePickerAndLatitudeLongitudeQueryToolArticle.vue'

const mapEl = ref(null);
let map = null;
let L = null;
let proj4 = null;

const mapError = ref(false);
const searchQuery = ref('');
const suggestions = ref([]);
const epsgCode = ref('4326');
const customProj4 = ref('');
const points = ref([]);
const exportType = ref('csv');
const copied = ref(false);

const EPSG_DEFS = {
  '4326': '+proj=longlat +datum=WGS84 +no_defs',
  '3857': '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs',
  '4490': '+proj=longlat +ellps=GRS80 +no_defs'
};

function ensureLeaflet() {
  return new Promise((resolve) => {
    if (window.L) {
      L = window.L;
      resolve();
      return;
    }
    const cssId = 'leaflet-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      L = window.L;
      resolve();
    };
    script.onerror = () => {
      mapError.value = true;
      resolve();
    };
    document.body.appendChild(script);
  });
}

function ensureProj4() {
  return new Promise((resolve) => {
    if (window.proj4) {
      proj4 = window.proj4;
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/proj4@2.10.0/dist/proj4.js';
    script.onload = () => {
      proj4 = window.proj4;
      resolve();
    };
    script.onerror = () => resolve(); // 允许无proj4，仅显示经纬度
    document.body.appendChild(script);
  });
}

function defineProj(code, def) {
  if (!proj4) return;
  try {
    proj4.defs(`EPSG:${code}`, def);
  } catch (e) {
    // ignore
  }
}

function applyProjDefs() {
  const code = (epsgCode.value || '').trim();
  if (!proj4 || !code) return;
  const def = customProj4.value.trim() || EPSG_DEFS[code];
  if (def) defineProj(code, def);
}

function toProjected(lon, lat) {
  const code = (epsgCode.value || '').trim();
  if (!code || code === '4326' || !proj4) {
    return { x: lon, y: lat };
  }
  try {
    applyProjDefs();
    const res = proj4('EPSG:4326', `EPSG:${code}`, [lon, lat]);
    return { x: res[0], y: res[1] };
  } catch (e) {
    return { x: lon, y: lat };
  }
}

function addPoint(lat, lon, name = '') {
  const { x, y } = toProjected(lon, lat);
  const p = {
    id: Date.now() + Math.random(),
    name,
    lat: Number(lat),
    lon: Number(lon),
    x: Number(x),
    y: Number(y),
    epsg: (epsgCode.value || '4326'),
    time: new Date().toISOString()
  };
  points.value.push(p);
  if (L && map) {
    const m = L.marker([lat, lon]).addTo(map);
    m.bindTooltip(`${lat.toFixed(6)}, ${lon.toFixed(6)}`);
  }
}

const outputText = computed(() => {
  if (!points.value.length) return '';
  if (exportType.value === 'geojson') {
    const fc = {
      type: 'FeatureCollection',
      features: points.value.map(p => ({
        type: 'Feature',
        properties: {
          name: p.name || '',
          epsg: p.epsg,
          x: p.x,
          y: p.y,
          time: p.time
        },
        geometry: { type: 'Point', coordinates: [p.lon, p.lat] }
      }))
    };
    return JSON.stringify(fc, null, 2);
  }
  // CSV
  const header = ['name', 'lat', 'lon', 'epsg', 'x', 'y', 'time'].join(',');
  const lines = points.value.map(p =>
    [escapeCsv(p.name || ''), p.lat, p.lon, p.epsg, p.x, p.y, p.time].join(',')
  );
  return [header, ...lines].join('\n');
});

function escapeCsv(s) {
  if (s == null) return '';
  const str = String(s);
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

async function searchPlace() {
  if (!searchQuery.value.trim()) return;
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery.value)}&limit=5&addressdetails=0`;
    const resp = await fetch(url, { headers: { 'Accept-Language': 'zh-CN,en;q=0.8', 'User-Agent': 'ufreetools-coordinate-picker-and-latitude-longitude-query-tool' } });
    const data = await resp.json();
    suggestions.value = Array.isArray(data) ? data.slice(0, 5) : [];
  } catch (e) {
    suggestions.value = [];
  }
}

function gotoSuggestion(i) {
  const s = suggestions.value[i];
  if (!s || !map || !L) return;
  const lat = Number(s.lat), lon = Number(s.lon);
  map.setView([lat, lon], Math.max(map.getZoom(), 14));
}

function addSuggestion(i) {
  const s = suggestions.value[i];
  if (!s) return;
  addPoint(Number(s.lat), Number(s.lon), s.display_name || '');
}

function setPreset(code) {
  epsgCode.value = code;
  if (!customProj4.value && EPSG_DEFS[code]) {
    // keep custom empty; we use internal defs
  }
}

function clearAll() {
  points.value = [];
  // rebuild map layer to clear markers quickly
  if (map && L) {
    map.eachLayer(l => {
      if (l instanceof L.Marker) {
        map.removeLayer(l);
      }
    });
  }
}

function copyAllText() {
  try {
    navigator.clipboard.writeText(outputText.value || '');
    copied.value = true;
    setTimeout(() => (copied.value = false), 1600);
  } catch (e) {
    copied.value = false;
    alert(window?.$t ? window.$t('tools.coordinate-picker-and-latitude-longitude-query-tool.copyFail') : 'Copy failed');
  }
}

function downloadFile() {
  const ext = exportType.value === 'geojson' ? 'geojson' : 'csv';
  const mime = exportType.value === 'geojson' ? 'application/geo+json' : 'text/csv';
  const blob = new Blob([outputText.value || ''], { type: `${mime};charset=utf-8` });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${getFileBaseName()}.${ext}`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function getFileBaseName() {
  return 'coordinates';
}

function zoomIn() {
  if (map) map.zoomIn();
}
function zoomOut() {
  if (map) map.zoomOut();
}
function resetView() {
  if (map) map.setView([30.66, 104.06], 4);
}

onMounted(async () => {
  await ensureLeaflet();
  await ensureProj4();
  applyProjDefs();

  if (!L) {
    mapError.value = true;
    return;
  }
  map = L.map(mapEl.value, {
    center: [30.66, 104.06],
    zoom: 4,
    attributionControl: true
  });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  map.on('click', (e) => {
    const lat = e.latlng.lat;
    const lon = e.latlng.lng;
    addPoint(lat, lon, '');
  });
});
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-sm {
  @apply px-3 py-1 text-sm;
}

.btn-xs {
  @apply px-2 py-1 text-xs;
}

.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
  @apply bg-gray-600 hover:bg-gray-700 text-white;
}

.btn-outline {
  @apply border-2 border-current bg-transparent hover:bg-current hover:text-white;
}

.btn-error {
  @apply text-red-600 border-red-600 hover:bg-red-600 hover:text-white;
}

.input {
  @apply border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors duration-200;
}

.textarea {
  @apply border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none;
}

.suggestion-item {
  @apply p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200 flex flex-col gap-2;
}

.map-control-btn {
  @apply bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-200;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .btn {
    @apply px-3 py-1.5 text-sm;
  }

  .btn-sm {
    @apply px-2 py-1 text-xs;
  }

  .btn-xs {
    @apply px-1.5 py-0.5 text-xs;
  }
}
</style>