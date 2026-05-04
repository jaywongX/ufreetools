<template>
    <div class="w-full">
  
      <div class="flex flex-col lg:flex-row gap-4">
        <!-- Left panel: Controls -->
        <div class="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">{{ $t('tools.gps-track-replay.uploadTrack') }}</label>
            <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                 @click="triggerFileInput"
                 @dragover.prevent
                 @drop.prevent="handleFileDrop">
              <input type="file" ref="fileInput" class="hidden" accept=".gpx,.txt,.csv,.json,.geojson" @change="handleFileUpload">
              <div v-if="!trackData">
                <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {{ $t('tools.gps-track-replay.dragAndDrop') }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ $t('tools.gps-track-replay.supportedFormats') }}
                </p>
                
                <!-- 加载示例数据按钮 -->
                <div class="mt-4 flex flex-wrap justify-center gap-2">
                  <button @click.stop="loadSampleData('csv')" class="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded">
                    {{ $t('tools.gps-track-replay.loadSampleCSV') }}
                  </button>
                  <button @click.stop="loadSampleData('txt')" class="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded">
                    {{ $t('tools.gps-track-replay.loadSampleTXT') }}
                  </button>
                  <button @click.stop="loadSampleData('gpx')" class="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded">
                    {{ $t('tools.gps-track-replay.loadSampleGPX') }}
                  </button>
                </div>
              </div>
              <div v-else class="text-left">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-medium">{{ fileName }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.gps-track-replay.points', { count: trackData.length }) }}</p>
                  </div>
                  <button @click.stop="clearFile" class="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mb-4" v-if="trackData && trackData.length > 0">
            <label class="block text-sm font-medium mb-2">{{ $t('tools.gps-track-replay.playbackControls') }}</label>
            <div class="flex items-center space-x-2 mb-2">
              <button @click="togglePlayback" class="flex-shrink-0 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
              <button @click="resetPlayback" class="flex-shrink-0 p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
              </button>
              <span class="text-sm">{{ currentPointIndex + 1 }}/{{ trackData.length }}</span>
            </div>
            <input type="range" min="0" :max="trackData.length - 1" v-model="currentPointIndex" class="w-full" @input="updateMarkerPosition">
          </div>
  
          <div class="mb-4" v-if="trackData && trackData.length > 0">
            <label class="block text-sm font-medium mb-2">{{ $t('tools.gps-track-replay.speed') }}</label>
            <div class="flex items-center space-x-2">
              <button @click="decreaseSpeed" class="p-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
              </button>
              <input type="range" min="1" max="20" v-model="playbackSpeed" class="w-full">
              <button @click="increaseSpeed" class="p-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <span class="text-sm">{{ playbackSpeed }}x</span>
            </div>
          </div>
  
          <div class="mb-4" v-if="trackData && trackData.length > 0">
            <label class="block text-sm font-medium mb-2">{{ $t('tools.gps-track-replay.mapStyle') }}</label>
            <select v-model="mapStyle" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option value="standard">{{ $t('tools.gps-track-replay.standard') }}</option>
              <option value="satellite">{{ $t('tools.gps-track-replay.satellite') }}</option>
              <option value="terrain">{{ $t('tools.gps-track-replay.terrain') }}</option>
            </select>
          </div>
  
          <div class="mb-4" v-if="trackData && trackData.length > 0">
            <label class="block text-sm font-medium mb-2">{{ $t('tools.gps-track-replay.exportTrack') }}</label>
            <div class="flex space-x-2">
              <button @click="exportToKml" class="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded">
                KML
              </button>
              <button @click="exportToGeoJson" class="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded">
                GeoJSON
              </button>
            </div>
          </div>
  
          <div v-if="currentPoint" class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 class="font-medium text-sm mb-2">{{ $t('tools.gps-track-replay.pointInfo') }}</h3>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div>{{ $t('tools.gps-track-replay.latitude') }}:</div>
              <div class="font-mono">{{ currentPoint.lat.toFixed(6) }}</div>
              <div>{{ $t('tools.gps-track-replay.longitude') }}:</div>
              <div class="font-mono">{{ currentPoint.lng.toFixed(6) }}</div>
              <div v-if="currentPoint.ele !== undefined">{{ $t('tools.gps-track-replay.elevation') }}:</div>
              <div v-if="currentPoint.ele !== undefined" class="font-mono">{{ currentPoint.ele.toFixed(1) }}m</div>
              <div v-if="currentPoint.time">{{ $t('tools.gps-track-replay.time') }}:</div>
              <div v-if="currentPoint.time" class="font-mono">{{ formatTime(currentPoint.time) }}</div>
              <div v-if="currentSpeed !== null">{{ $t('tools.gps-track-replay.speed') }}:</div>
              <div v-if="currentSpeed !== null" class="font-mono">{{ currentSpeed.toFixed(1) }} km/h</div>
            </div>
          </div>
  
        </div>
  
        <!-- Right panel: Map -->
        <div class="w-full lg:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden" style="height: 500px;">
          <div id="map" class="w-full h-full"></div>
        </div>
      </div>
  
      <div class="mt-6" v-if="trackData && trackData.length > 0 && (hasElevationData || hasSpeedData)">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 class="font-bold mb-4">{{ $t('tools.gps-track-replay.dataCharts') }}</h3>
          <div id="charts" class="w-full" style="height: 200px;"></div>
        </div>
      </div>
  
      <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg" v-if="trackData && trackData.length > 0">
        <h3 class="font-bold mb-2">{{ $t('tools.gps-track-replay.trackSummary') }}</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.gps-track-replay.distance') }}</div>
            <div class="text-xl font-bold">{{ totalDistance.toFixed(2) }} km</div>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.gps-track-replay.duration') }}</div>
            <div class="text-xl font-bold">{{ formatDuration(totalDuration) }}</div>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.gps-track-replay.avgSpeed') }}</div>
            <div class="text-xl font-bold">{{ avgSpeed.toFixed(1) }} km/h</div>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.gps-track-replay.maxSpeed') }}</div>
            <div class="text-xl font-bold">{{ maxSpeed.toFixed(1) }} km/h</div>
          </div>
        </div>
      </div>
  
      <div class="mb-6 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <h3 class="font-bold mb-2">{{ $t('tools.gps-track-replay.userGuide') }}</h3>
        <ol class="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>{{ $t('tools.gps-track-replay.guideStep1') }}</li>
          <li>{{ $t('tools.gps-track-replay.guideStep2') }}</li>
          <li>{{ $t('tools.gps-track-replay.guideStep3') }}</li>
          <li>{{ $t('tools.gps-track-replay.guideStep4') }}</li>
          <li>{{ $t('tools.gps-track-replay.guideStep5') }}</li>
          <li>{{ $t('tools.gps-track-replay.guideStep6') }}</li>
        </ol>
      </div>
  
        <GpsTrackReplayArticle />
    </div>
    <Toast ref="toastRef" />
</template>
  
<script setup>
import { ref, onMounted, computed, watch, onBeforeUnmount, nextTick } from 'vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { DOMParser } from '@xmldom/xmldom';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import GpsTrackReplayArticle from './GpsTrackReplayArticle.vue';
import { useI18n } from 'vue-i18n'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 注册 ECharts 组件
echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

// Refs
const fileInput = ref(null);
const fileName = ref('');
const trackData = ref(null);
const currentPointIndex = ref(0);
const isPlaying = ref(false);
const playbackSpeed = ref(5);
const mapStyle = ref('standard');
const currentSpeed = ref(null);

// 图表相关
let chart = null;

// Map and visualization objects
let map = null;
let marker = null;
let polyline = null;
let playbackInterval = null;

// 计算属性：是否有海拔数据
const hasElevationData = computed(() => {
  if (!trackData.value || trackData.value.length === 0) return false;
  return trackData.value.some(point => point.ele !== undefined);
});

// 计算属性：是否有速度数据
const hasSpeedData = computed(() => {
  if (!trackData.value || trackData.value.length < 2) return false;
  // 如果点有时间数据，我们可以计算速度
  return trackData.value.some((point, index) => 
    index > 0 && point.time && trackData.value[index-1].time);
});

// Computed properties for track statistics
const totalDistance = computed(() => {
  if (!trackData.value || trackData.value.length < 2) return 0;
  
  let distance = 0;
  for (let i = 1; i < trackData.value.length; i++) {
    const from = L.latLng(trackData.value[i-1].lat, trackData.value[i-1].lng);
    const to = L.latLng(trackData.value[i].lat, trackData.value[i].lng);
    distance += from.distanceTo(to) / 1000; // Convert meters to kilometers
  }
  return distance;
});

const totalDuration = computed(() => {
  if (!trackData.value || trackData.value.length < 2) return 0;
  
  const firstPoint = trackData.value[0];
  const lastPoint = trackData.value[trackData.value.length - 1];
  
  if (firstPoint.time && lastPoint.time) {
    return new Date(lastPoint.time) - new Date(firstPoint.time);
  }
  return 0;
});

const avgSpeed = computed(() => {
  if (totalDistance.value > 0 && totalDuration.value > 0) {
    // Convert duration from ms to hours
    const hours = totalDuration.value / 1000 / 60 / 60;
    return totalDistance.value / hours;
  }
  return 0;
});

const maxSpeed = computed(() => {
  if (!trackData.value || trackData.value.length < 2) return 0;
  
  let max = 0;
  for (let i = 1; i < trackData.value.length; i++) {
    const from = trackData.value[i-1];
    const to = trackData.value[i];
    
    if (from.time && to.time) {
      const fromLatLng = L.latLng(from.lat, from.lng);
      const toLatLng = L.latLng(to.lat, to.lng);
      const distance = fromLatLng.distanceTo(toLatLng) / 1000; // km
      const time = (new Date(to.time) - new Date(from.time)) / 1000 / 60 / 60; // hours
      
      if (time > 0) {
        const speed = distance / time;
        max = Math.max(max, speed);
      }
    }
  }
  return max;
});

const currentPoint = computed(() => {
  if (trackData.value && trackData.value.length > currentPointIndex.value) {
    return trackData.value[currentPointIndex.value];
  }
  return null;
});

// Methods
const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file) {
    processFile(file);
  }
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    processFile(file);
  }
};

const processFile = (file) => {
  fileName.value = file.name;
  const reader = new FileReader();
  
  reader.onload = (e) => {
    const extension = file.name.split('.').pop().toLowerCase();
    
    try {
      switch (extension) {
        case 'gpx':
          parseGPXFile(e.target.result);
          break;
        case 'txt':
          parseTXTFile(e.target.result);
          break;
        case 'csv':
          parseCSVFile(e.target.result);
          break;
        case 'json':
        case 'geojson':
          parseGeoJSONFile(e.target.result);
          break;
        default:
          toastRef.value.show('Unsupported file format');
      }
    } catch (error) {
      console.error('Error parsing file:', error);
      toastRef.value.show('Error parsing file. Please check the format.');
    }
  };
  
  reader.readAsText(file);
};

const parseGPXFile = (content) => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(content, 'text/xml');
  
  // Extract track points from GPX
  const points = [];
  
  // Find track points
  const trackpoints = dom.getElementsByTagName('trkpt');
  for (let i = 0; i < trackpoints.length; i++) {
    const point = trackpoints[i];
    const lat = parseFloat(point.getAttribute('lat'));
    const lon = parseFloat(point.getAttribute('lon'));
    
    if (!isNaN(lat) && !isNaN(lon)) {
      const pointData = {
        lat: lat,
        lng: lon
      };
      
      // Check for elevation
      const eleElements = point.getElementsByTagName('ele');
      if (eleElements.length > 0) {
        const ele = parseFloat(eleElements[0].textContent);
        if (!isNaN(ele)) {
          pointData.ele = ele;
        }
      }
      
      // Check for time
      const timeElements = point.getElementsByTagName('time');
      if (timeElements.length > 0) {
        pointData.time = timeElements[0].textContent;
      }
      
      points.push(pointData);
    }
  }
  
  // If no track points found, try waypoints
  if (points.length === 0) {
    const waypoints = dom.getElementsByTagName('wpt');
    for (let i = 0; i < waypoints.length; i++) {
      const point = waypoints[i];
      const lat = parseFloat(point.getAttribute('lat'));
      const lon = parseFloat(point.getAttribute('lon'));
      
      if (!isNaN(lat) && !isNaN(lon)) {
        const pointData = {
          lat: lat,
          lng: lon
        };
        
        // Check for elevation
        const eleElements = point.getElementsByTagName('ele');
        if (eleElements.length > 0) {
          const ele = parseFloat(eleElements[0].textContent);
          if (!isNaN(ele)) {
            pointData.ele = ele;
          }
        }
        
        // Check for time
        const timeElements = point.getElementsByTagName('time');
        if (timeElements.length > 0) {
          pointData.time = timeElements[0].textContent;
        }
        
        points.push(pointData);
      }
    }
  }
  
  if (points.length > 0) {
    trackData.value = points;
    initializeMap();
  } else {
    toastRef.value.show('No track points found in the GPX file.');
  }
};

const parseTXTFile = (content) => {
  const lines = content.split('\n');
  const points = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Try to detect format: space-separated, comma-separated, or tab-separated
    let parts;
    if (line.includes(',')) {
      parts = line.split(',');
    } else if (line.includes('\t')) {
      parts = line.split('\t');
    } else {
      parts = line.split(/\s+/);
    }
    
    if (parts.length >= 2) {
      const lat = parseFloat(parts[0]);
      const lng = parseFloat(parts[1]);
      
      if (!isNaN(lat) && !isNaN(lng)) {
        const point = {
          lat: lat,
          lng: lng
        };
        
        // Check if there's a timestamp (3rd column)
        if (parts.length > 2 && parts[2].trim()) {
          try {
            const timestamp = new Date(parts[2].trim()).toISOString();
            point.time = timestamp;
          } catch (e) {
            // Ignore invalid timestamps
          }
        }
        
        points.push(point);
      }
    }
  }
  
  if (points.length > 0) {
    trackData.value = points;
    initializeMap();
  } else {
    toastRef.value.show('No valid track points found in the TXT file.');
  }
};

const parseCSVFile = (content) => {
  const lines = content.split('\n');
  if (lines.length < 1) {
    toastRef.value.show('CSV file is empty.');
    return;
  }
  
  // Try to detect header
  const firstLine = lines[0].trim().toLowerCase();
  const hasHeader = firstLine.includes('lat') || firstLine.includes('lon') || 
                    firstLine.includes('latitude') || firstLine.includes('longitude');
  
  const startIdx = hasHeader ? 1 : 0;
  const points = [];
  
  // If we have a header, determine column positions
  let latIdx = 0, lngIdx = 1, timeIdx = -1, eleIdx = -1;
  
  if (hasHeader) {
    const headers = firstLine.split(',').map(h => h.trim());
    
    headers.forEach((header, idx) => {
      if (header.includes('lat')) latIdx = idx;
      else if (header.includes('lon') || header.includes('lng')) lngIdx = idx;
      else if (header.includes('time') || header.includes('timestamp') || header.includes('date')) timeIdx = idx;
      else if (header.includes('ele') || header.includes('alt') || header.includes('altitude')) eleIdx = idx;
    });
  }
  
  // Parse data rows
  for (let i = startIdx; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values = line.split(',').map(v => v.trim());
    if (values.length < 2) continue;
    
    const point = {
      lat: parseFloat(values[latIdx]),
      lng: parseFloat(values[lngIdx])
    };
    
    if (eleIdx >= 0 && values[eleIdx]) {
      point.ele = parseFloat(values[eleIdx]);
    }
    
    if (timeIdx >= 0 && values[timeIdx]) {
      try {
        point.time = new Date(values[timeIdx]).toISOString();
      } catch (e) {
        // Ignore invalid timestamps
      }
    }
    
    if (!isNaN(point.lat) && !isNaN(point.lng)) {
      points.push(point);
    }
  }
  
  if (points.length > 0) {
    trackData.value = points;
    initializeMap();
  } else {
    toastRef.value.show('No valid track points found in the CSV file.');
  }
};

const parseGeoJSONFile = (content) => {
  try {
    const geojson = JSON.parse(content);
    const points = [];
    
    // Check for FeatureCollection
    if (geojson.type === 'FeatureCollection' && geojson.features) {
      // Look for LineString features
      const lineStrings = geojson.features.filter(f => 
        f.geometry && (f.geometry.type === 'LineString' || f.geometry.type === 'MultiLineString')
      );
      
      if (lineStrings.length > 0) {
        lineStrings.forEach(feature => {
          let coordinates = [];
          
          if (feature.geometry.type === 'LineString') {
            coordinates = feature.geometry.coordinates;
          } else if (feature.geometry.type === 'MultiLineString') {
            feature.geometry.coordinates.forEach(line => {
              coordinates = coordinates.concat(line);
            });
          }
          
          coordinates.forEach(coord => {
            points.push({
              lng: coord[0],
              lat: coord[1],
              ele: coord.length > 2 ? coord[2] : undefined,
              time: feature.properties && feature.properties.times ? 
                feature.properties.times[points.length] : undefined
            });
          });
        });
      } else {
        // Look for Point features
        const pointFeatures = geojson.features.filter(f => 
          f.geometry && f.geometry.type === 'Point'
        );
        
        pointFeatures.forEach(feature => {
          const coord = feature.geometry.coordinates;
          points.push({
            lng: coord[0],
            lat: coord[1],
            ele: coord.length > 2 ? coord[2] : undefined,
            time: feature.properties && feature.properties.time ? 
              feature.properties.time : undefined
          });
        });
      }
    } else if (geojson.type === 'Feature' && geojson.geometry) {
      // Single feature
      if (geojson.geometry.type === 'LineString') {
        geojson.geometry.coordinates.forEach(coord => {
          points.push({
            lng: coord[0],
            lat: coord[1],
            ele: coord.length > 2 ? coord[2] : undefined
          });
        });
      } else if (geojson.geometry.type === 'MultiLineString') {
        geojson.geometry.coordinates.forEach(line => {
          line.forEach(coord => {
            points.push({
              lng: coord[0],
              lat: coord[1],
              ele: coord.length > 2 ? coord[2] : undefined
            });
          });
        });
      }
    }
    
    if (points.length > 0) {
      trackData.value = points;
      initializeMap();
    } else {
      toastRef.value.show('No track points found in the GeoJSON file.');
    }
  } catch (error) {
    console.error('Error parsing GeoJSON:', error);
    toastRef.value.show('Invalid GeoJSON format.');
  }
};

const clearFile = (event) => {
  event.stopPropagation();
  fileName.value = '';
  trackData.value = null;
  currentPointIndex.value = 0;
  isPlaying.value = false;
  
  if (playbackInterval) {
    clearInterval(playbackInterval);
    playbackInterval = null;
  }
  
  if (map) {
    if (marker) map.removeLayer(marker);
    if (polyline) map.removeLayer(polyline);
    marker = null;
    polyline = null;
  }
};

const initializeMap = () => {
  if (!trackData.value || trackData.value.length === 0) return;
  
  // If map doesn't exist, create it
  if (!map) {
    // Fix Leaflet icon path issues
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
    
    map = L.map('map').setView([trackData.value[0].lat, trackData.value[0].lng], 13);
    
    updateMapTiles();
  } else {
    // Clear existing layers
    if (marker) map.removeLayer(marker);
    if (polyline) map.removeLayer(polyline);
  }
  
  // Create polyline for the track
  const points = trackData.value.map(point => [point.lat, point.lng]);
  polyline = L.polyline(points, { color: 'blue', weight: 3 }).addTo(map);
  
  // Create marker for current position
  marker = L.marker([trackData.value[0].lat, trackData.value[0].lng]).addTo(map);
  
  // 使用 flyToBounds 平滑过渡到轨迹范围
  map.flyToBounds(polyline.getBounds(), {
    padding: [50, 50],
    duration: 1 // 秒
  });
  
  // Update current position
  updateMarkerPosition();
  
  // Calculate initial speed if time data is available
  calculateCurrentSpeed();
  
  // 初始化图表
  nextTick(() => {
    initCharts();
  });
};

const updateMapTiles = () => {
  if (!map) return;
  
  // Remove existing tile layers
  map.eachLayer(layer => {
    if (layer instanceof L.TileLayer) {
      map.removeLayer(layer);
    }
  });
  
  // Add new tile layer based on selected style
  switch (mapStyle.value) {
    case 'satellite':
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(map);
      break;
    case 'terrain':
      L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      }).addTo(map);
      break;
    default: // standard
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  }
};

const updateMarkerPosition = () => {
  if (!trackData.value || !marker || currentPointIndex.value >= trackData.value.length) return;
  
  const point = trackData.value[currentPointIndex.value];
  marker.setLatLng([point.lat, point.lng]);
  
  // 平滑过渡到当前点
  map.panTo([point.lat, point.lng], {
    animate: true,
    duration: 0.5
  });
  
  // 更新图表上的当前位置
  if (chart) {
    chart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentPointIndex.value
    });
  }
  
  // Calculate current speed
  calculateCurrentSpeed();
};

const calculateCurrentSpeed = () => {
  if (!trackData.value || currentPointIndex.value <= 0 || currentPointIndex.value >= trackData.value.length) {
    currentSpeed.value = null;
    return;
  }
  
  const currentPoint = trackData.value[currentPointIndex.value];
  const prevPoint = trackData.value[currentPointIndex.value - 1];
  
  if (currentPoint.time && prevPoint.time) {
    const currentLatLng = L.latLng(currentPoint.lat, currentPoint.lng);
    const prevLatLng = L.latLng(prevPoint.lat, prevPoint.lng);
    
    const distance = currentLatLng.distanceTo(prevLatLng) / 1000; // km
    const timeDiff = (new Date(currentPoint.time) - new Date(prevPoint.time)) / 1000 / 60 / 60; // hours
    
    if (timeDiff > 0) {
      currentSpeed.value = distance / timeDiff;
    } else {
      currentSpeed.value = null;
    }
  } else {
    currentSpeed.value = null;
  }
};

const togglePlayback = () => {
  if (!trackData.value) return;
  
  isPlaying.value = !isPlaying.value;
  
  if (isPlaying.value) {
    // Start playback
    playbackInterval = setInterval(() => {
      if (currentPointIndex.value < trackData.value.length - 1) {
        currentPointIndex.value++;
        updateMarkerPosition();
      } else {
        // End of track
        isPlaying.value = false;
        clearInterval(playbackInterval);
        playbackInterval = null;
      }
    }, 1000 / playbackSpeed.value);
  } else {
    // Pause playback
    clearInterval(playbackInterval);
    playbackInterval = null;
  }
};

const resetPlayback = () => {
  currentPointIndex.value = 0;
  isPlaying.value = false;
  
  if (playbackInterval) {
    clearInterval(playbackInterval);
    playbackInterval = null;
  }
  
  updateMarkerPosition();
};

const increaseSpeed = () => {
  if (playbackSpeed.value < 20) {
    playbackSpeed.value++;
    
    // Update interval if playing
    if (isPlaying.value && playbackInterval) {
      clearInterval(playbackInterval);
      playbackInterval = setInterval(() => {
        if (currentPointIndex.value < trackData.value.length - 1) {
          currentPointIndex.value++;
          updateMarkerPosition();
        } else {
          // End of track
          isPlaying.value = false;
          clearInterval(playbackInterval);
          playbackInterval = null;
        }
      }, 1000 / playbackSpeed.value);
    }
  }
};

const decreaseSpeed = () => {
  if (playbackSpeed.value > 1) {
    playbackSpeed.value--;
    
    // Update interval if playing
    if (isPlaying.value && playbackInterval) {
      clearInterval(playbackInterval);
      playbackInterval = setInterval(() => {
        if (currentPointIndex.value < trackData.value.length - 1) {
          currentPointIndex.value++;
          updateMarkerPosition();
        } else {
          // End of track
          isPlaying.value = false;
          clearInterval(playbackInterval);
          playbackInterval = null;
        }
      }, 1000 / playbackSpeed.value);
    }
  }
};

const formatTime = (timeString) => {
  try {
    const date = new Date(timeString);
    return date.toLocaleString();
  } catch (e) {
    return timeString;
  }
};

const formatDuration = (ms) => {
  if (!ms) return '0:00:00';
  
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const exportToKml = () => {
  if (!trackData.value) return;
  
  let kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>${t('tools.gps-track-replay.title')}</name>
  <Style id="lineStyle">
    <LineStyle>
      <color>ff0000ff</color>
      <width>4</width>
    </LineStyle>
  </Style>
  <Placemark>
    <name>${t('tools.gps-track-replay.title')}</name>
    <styleUrl>#lineStyle</styleUrl>
    <LineString>
      <tessellate>1</tessellate>
      <coordinates>`;
  
  // Add coordinates
  trackData.value.forEach(point => {
    kml += `${point.lng},${point.lat},${point.ele || 0}\n`;
  });
  
  kml += `        </coordinates>
    </LineString>
  </Placemark>
</Document>
</kml>`;
  
  // Create download link
  const blob = new Blob([kml], { type: 'application/vnd.google-earth.kml+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${t('tools.gps-track-replay.title').replace(/\s+/g, '_').toLowerCase()}.kml`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const exportToGeoJson = () => {
  if (!trackData.value) return;
  
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: trackData.value.map(point => {
            const coord = [point.lng, point.lat];
            if (point.ele !== undefined) {
              coord.push(point.ele);
            }
            return coord;
          })
        }
      }
    ]
  };
  
  // Create download link
  const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/geo+json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${t('tools.gps-track-replay.title').replace(/\s+/g, '_').toLowerCase()}.geojson`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// 示例数据
const sampleData = {
  csv: `lat,lng,ele,time
40.7128,-74.0060,10,2023-01-01T12:00:00Z
40.7130,-74.0065,12,2023-01-01T12:01:00Z
40.7135,-74.0070,15,2023-01-01T12:02:00Z
40.7140,-74.0075,14,2023-01-01T12:03:00Z
40.7145,-74.0080,18,2023-01-01T12:04:00Z
40.7150,-74.0085,20,2023-01-01T12:05:00Z
40.7155,-74.0090,22,2023-01-01T12:06:00Z
40.7160,-74.0095,19,2023-01-01T12:07:00Z
40.7165,-74.0100,17,2023-01-01T12:08:00Z
40.7170,-74.0105,15,2023-01-01T12:09:00Z`,

  txt: `40.7128 -74.0060
40.7130 -74.0065
40.7135 -74.0070
40.7140 -74.0075
40.7145 -74.0080
40.7150 -74.0085
40.7155 -74.0090
40.7160 -74.0095
40.7165 -74.0100
40.7170 -74.0105`,

  gpx: `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="GPS Track Replay Tool">
<trk>
  <name>Sample Track</name>
  <trkseg>
    <trkpt lat="40.7128" lon="-74.0060">
      <ele>10</ele>
      <time>2023-01-01T12:00:00Z</time>
    </trkpt>
    <trkpt lat="40.7130" lon="-74.0065">
      <ele>12</ele>
      <time>2023-01-01T12:01:00Z</time>
    </trkpt>
    <trkpt lat="40.7135" lon="-74.0070">
      <ele>15</ele>
      <time>2023-01-01T12:02:00Z</time>
    </trkpt>
    <trkpt lat="40.7140" lon="-74.0075">
      <ele>14</ele>
      <time>2023-01-01T12:03:00Z</time>
    </trkpt>
    <trkpt lat="40.7145" lon="-74.0080">
      <ele>18</ele>
      <time>2023-01-01T12:04:00Z</time>
    </trkpt>
    <trkpt lat="40.7150" lon="-74.0085">
      <ele>20</ele>
      <time>2023-01-01T12:05:00Z</time>
    </trkpt>
    <trkpt lat="40.7155" lon="-74.0090">
      <ele>22</ele>
      <time>2023-01-01T12:06:00Z</time>
    </trkpt>
    <trkpt lat="40.7160" lon="-74.0095">
      <ele>19</ele>
      <time>2023-01-01T12:07:00Z</time>
    </trkpt>
    <trkpt lat="40.7165" lon="-74.0100">
      <ele>17</ele>
      <time>2023-01-01T12:08:00Z</time>
    </trkpt>
    <trkpt lat="40.7170" lon="-74.0105">
      <ele>15</ele>
      <time>2023-01-01T12:09:00Z</time>
    </trkpt>
  </trkseg>
</trk>
</gpx>`
};

// 加载示例数据方法
const loadSampleData = (type) => {
  if (!sampleData[type]) return;
  
  fileName.value = `sample.${type}`;
  
  switch (type) {
    case 'csv':
      parseCSVFile(sampleData.csv);
      break;
    case 'txt':
      parseTXTFile(sampleData.txt);
      break;
    case 'gpx':
      parseGPXFile(sampleData.gpx);
      break;
  }
};

// 初始化图表方法
const initCharts = () => {
  if (!trackData.value || trackData.value.length === 0 || (!hasElevationData.value && !hasSpeedData.value)) return;
  
  // 如果已存在图表，先销毁
  if (chart) {
    chart.dispose();
  }
  
  // 初始化图表
  chart = echarts.init(document.getElementById('charts'));
  
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: []
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: Array.from({ length: trackData.value.length }, (_, i) => i + 1)
    },
    yAxis: [],
    series: []
  };
  
  // 添加海拔数据
  if (hasElevationData.value) {
    options.legend.data.push(t('tools.gps-track-replay.elevation'));
    options.yAxis.push({
      type: 'value',
      name: t('tools.gps-track-replay.elevation') + ' (m)',
      position: 'left'
    });
    
    const elevationData = trackData.value.map(point => point.ele !== undefined ? point.ele : null);
    
    options.series.push({
      name: t('tools.gps-track-replay.elevation'),
      type: 'line',
      yAxisIndex: 0,
      data: elevationData,
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#5470c6'
      },
      areaStyle: {
        opacity: 0.3,
        color: '#5470c6'
      }
    });
  }
  
  // 添加速度数据
  if (hasSpeedData.value) {
    options.legend.data.push(t('tools.gps-track-replay.speed'));
    options.yAxis.push({
      type: 'value',
      name: t('tools.gps-track-replay.speed') + ' (km/h)',
      position: hasElevationData.value ? 'right' : 'left'
    });
    
    const speedData = [];
    speedData.push(0); // 第一个点没有速度
    
    for (let i = 1; i < trackData.value.length; i++) {
      const current = trackData.value[i];
      const prev = trackData.value[i-1];
      
      if (current.time && prev.time) {
        const currentLatLng = L.latLng(current.lat, current.lng);
        const prevLatLng = L.latLng(prev.lat, prev.lng);
        
        const distance = currentLatLng.distanceTo(prevLatLng) / 1000; // km
        const timeDiff = (new Date(current.time) - new Date(prev.time)) / 1000 / 60 / 60; // hours
        
        if (timeDiff > 0) {
          speedData.push(distance / timeDiff);
        } else {
          speedData.push(null);
        }
      } else {
        speedData.push(null);
      }
    }
    
    options.series.push({
      name: t('tools.gps-track-replay.speed'),
      type: 'line',
      yAxisIndex: hasElevationData.value ? 1 : 0,
      data: speedData,
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#91cc75'
      }
    });
  }
  
  chart.setOption(options);
  
  // 添加点击图表跳转到对应位置的功能
  chart.on('click', (params) => {
    if (params.componentType === 'series') {
      const index = params.dataIndex;
      if (index >= 0 && index < trackData.value.length) {
        currentPointIndex.value = index;
        updateMarkerPosition();
      }
    }
  });
};

// Watchers
watch(mapStyle, () => {
  updateMapTiles();
});

// Lifecycle hooks
onMounted(() => {
  // Initialize map with empty view if needed
  if (!map) {
    map = L.map('map').setView([0, 0], 2);
    updateMapTiles();
  }
});

onBeforeUnmount(() => {
  // Clean up
  if (playbackInterval) {
    clearInterval(playbackInterval);
  }
  
  if (map) {
    map.remove();
    map = null;
  }
  
  if (chart) {
    chart.dispose();
    chart = null;
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  z-index: 0;
}

#charts {
  width: 100%;
  height: 100%;
}
</style>