<template>
    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 左侧输入区 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <!-- 选择计算类型 -->
          <div class="mb-6">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.calculationType') }}</h2>
            <div class="flex flex-wrap gap-4">
              <button 
                @click="calculationType = 'forward'" 
                class="px-4 py-2 rounded-md transition-colors"
                :class="calculationType === 'forward' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'"
              >
                {{ $t('tools.gaussian-projection.forward') }}
              </button>
              <button 
                @click="calculationType = 'inverse'" 
                class="px-4 py-2 rounded-md transition-colors"
                :class="calculationType === 'inverse' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'"
              >
                {{ $t('tools.gaussian-projection.inverse') }}
              </button>
            </div>
          </div>
    
          <!-- 椭球参数设置 -->
          <div class="mb-6">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.ellipsoidParameters') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.ellipsoidType') }}</label>
                <select 
                  v-model="selectedEllipsoid" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  @change="updateEllipsoidParams"
                >
                  <option v-for="(ellipsoid, key) in ellipsoids" :key="key" :value="key">
                    {{ $t(`tools.gaussian-projection.ellipsoids.${key}`) }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.centralMeridian') }}</label>
                <div class="flex">
                  <input 
                    v-model.number="centralMeridian" 
                    type="number" 
                    class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    step="1"
                  />
                  <button 
                    @click="centralMeridian = calculateCentralMeridian()" 
                    class="p-2 bg-gray-200 dark:bg-gray-600 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                    :title="t('tools.gaussian-projection.autoCalculate')"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.a') }} (m)</label>
                <input 
                  v-model.number="a" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  step="0.001"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.f') }}</label>
                <input 
                  v-model.number="f" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  step="0.0000001"
                />
              </div>
            </div>
          </div>
    
          <!-- 投影带参数 -->
          <div class="mb-6">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.projectionParameters') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.projectionType') }}</label>
                <select 
                  v-model="projectionType" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  @change="centralMeridian = calculateCentralMeridian()"
                >
                  <option value="3">{{ $t('tools.gaussian-projection.3degree') }}</option>
                  <option value="6">{{ $t('tools.gaussian-projection.6degree') }}</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.zoneNumber') }}</label>
                <input 
                  v-model.number="zoneNumber" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  min="1"
                  :max="maxZones"
                  @change="centralMeridian = calculateCentralMeridian()"
                />
              </div>
            </div>
          </div>

          <!-- 单位系统 -->
          <div class="mt-6">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.unitSystem') }}</h2>
            <div class="flex flex-wrap gap-4">
              <button 
                v-for="option in unitOptions" 
                :key="option.value"
                @click="unitSystem = option.value" 
                class="px-4 py-2 rounded-md transition-colors whitespace-nowrap"
                :class="unitSystem === option.value 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'"
              >
                {{ $t(option.label) }}
              </button>
            </div>
          </div>
    
          <!-- 正算输入 -->
          <div v-if="calculationType === 'forward'" class="mb-6">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.forwardInput') }}</h2>
            
            <!-- 度分秒输入 -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.dmsInput') }}</label>
              <div class="flex">
                <input 
                  id="dmsInput"
                  type="text" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  :placeholder="t('tools.gaussian-projection.dmsInputPlaceholder')"
                />
                <button 
                  @click="handleDMSInput" 
                  class="p-2 bg-gray-200 dark:bg-gray-600 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                  :title="t('tools.gaussian-projection.parse')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- 十进制度输入 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.latitude') }} (°)</label>
                <input 
                  v-model.number="latitude" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  :class="{ 'input-error': !isValidLatitude }"
                  step="0.000001"
                  min="-90"
                  max="90"
                />
                <p v-if="!isValidLatitude" class="text-red-500 text-xs mt-1">{{ $t('tools.gaussian-projection.invalidLatitude') }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.longitude') }} (°)</label>
                <input 
                  v-model.number="longitude" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  :class="{ 'input-error': !isValidLongitude }"
                  step="0.000001"
                  min="-180"
                  max="180"
                />
                <p v-if="!isValidLongitude" class="text-red-500 text-xs mt-1">{{ $t('tools.gaussian-projection.invalidLongitude') }}</p>
              </div>
            </div>
          </div>
    
          <!-- 反算输入 -->
          <div v-if="calculationType === 'inverse'" class="mb-6">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.inverseInput') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.x') }} (m)</label>
                <input 
                  v-model.number="x" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  :class="{ 'input-error': !isValidX }"
                  step="0.001"
                />
                <p v-if="!isValidX" class="text-red-500 text-xs mt-1">{{ $t('tools.gaussian-projection.invalidX') }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.y') }} (m)</label>
                <input 
                  v-model.number="y" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  :class="{ 'input-error': !isValidY }"
                  step="0.001"
                />
                <p v-if="!isValidY" class="text-red-500 text-xs mt-1">{{ $t('tools.gaussian-projection.invalidY') }}</p>
              </div>
            </div>
          </div>
    
          <!-- 操作按钮 -->
          <div class="flex flex-wrap gap-4 mb-6">
            <button 
              @click="calculate" 
              class="flex-1 py-3 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-md transition-colors"
            >
              {{ $t('tools.gaussian-projection.calculate') }}
            </button>
            <button 
              @click="loadExample" 
              class="py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition-colors"
            >
              {{ $t('tools.gaussian-projection.loadExample') }}
            </button>
            <button 
              @click="clearInput" 
              class="py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {{ $t('tools.gaussian-projection.clear') }}
            </button>
          </div>
          
          <!-- 批量处理 -->
          <div class="mt-8">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.batchProcessing') }}</h2>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.inputFormat') }}</label>
              <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {{ calculationType === 'forward' ? t('tools.gaussian-projection.batchForwardFormat') : t('tools.gaussian-projection.batchInverseFormat') }}
              </div>
              <div class="flex items-center mb-2">
                <input 
                  type="file" 
                  id="csvFile" 
                  accept=".csv,.txt,.xlsx,.xls" 
                  class="hidden" 
                  @change="uploadCSV"
                />
                <label 
                  for="csvFile" 
                  class="cursor-pointer text-sm flex items-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md transition-colors"
                  title="支持 .csv, .txt, .xlsx, .xls 格式"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  {{ $t('tools.gaussian-projection.uploadCSV') }}
                </label>
                <div class="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  {{ $t('tools.gaussian-projection.supportedFormats') }}
                </div>
              </div>
              <textarea 
                v-model="batchInput" 
                rows="5" 
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                :placeholder="calculationType === 'forward' 
                  ? '39.9042,116.4074\n40.0522,116.3936' 
                  : '435422.9,4415456.7\n442152.8,4429248.1'"
              ></textarea>
            </div>
            <div class="flex flex-wrap gap-4">
              <button 
                @click="processBatch" 
                class="flex-1 py-3 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-md transition-colors"
              >
                {{ $t('tools.gaussian-projection.processBatch') }}
              </button>
              <button 
                @click="loadBatchExample" 
                class="py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition-colors"
              >
                {{ $t('tools.gaussian-projection.loadExample') }}
              </button>
              <button 
                @click="clearBatchInput" 
                class="py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {{ $t('tools.gaussian-projection.clear') }}
              </button>
            </div>
            
            <!-- 批量处理结果 -->
            <div v-if="batchResults.length > 0" class="mt-4">
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.gaussian-projection.batchResults') }}</label>
                <div class="flex gap-2">
                  <button 
                    @click="copyBatchResults" 
                    class="text-sm text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    {{ $t('tools.gaussian-projection.copyAll') }}
                  </button>
                  <button 
                    @click="downloadCSV" 
                    class="text-sm text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {{ $t('tools.gaussian-projection.downloadCSV') }}
                  </button>
                </div>
              </div>
              <textarea 
                v-model="formattedBatchResults" 
                rows="5" 
                readonly
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              ></textarea>
            </div>
          </div>

          <!-- 自定义椭球体参数 -->
          <div class="mt-6" v-if="selectedEllipsoid === 'Custom'">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.customEllipsoid') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.a') }} (m)</label>
                <input 
                  v-model.number="customEllipsoid.a" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  step="0.001"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.f') }}</label>
                <input 
                  v-model.number="customEllipsoid.f" 
                  type="number" 
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  step="0.0000001"
                />
              </div>
            </div>
            <button 
              @click="saveCustomEllipsoid" 
              class="mt-4 py-2 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-md transition-colors"
            >
              {{ $t('tools.gaussian-projection.saveCustomEllipsoid') }}
            </button>
          </div>
        </div>
        
        <!-- 右侧结果和地图区 -->
        <div>
          <!-- 计算结果 -->
          <div v-if="hasResult" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.results') }}</h2>
            
            <!-- 正算结果 -->
            <div v-if="calculationType === 'forward'" class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.x') }} ({{ $t(`tools.gaussian-projection.units.${unitSystem}`) }})</label>
                <div class="flex">
                  <input 
                    :value="formatNumber(result.x * unitConversionFactor)" 
                    readonly 
                    class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  />
                  <button 
                    @click="copyToClipboard(result.x * unitConversionFactor)" 
                    class="p-2 bg-gray-200 dark:bg-gray-600 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                    :title="t('tools.gaussian-projection.copyToClipboard')"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.y') }} ({{ $t(`tools.gaussian-projection.units.${unitSystem}`) }})</label>
                <div class="flex">
                  <input 
                    :value="formatNumber(result.y * unitConversionFactor)" 
                    readonly 
                    class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  />
                  <button 
                    @click="copyToClipboard(result.y * unitConversionFactor)" 
                    class="p-2 bg-gray-200 dark:bg-gray-600 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                    :title="t('copyToClipboard')"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- 反算结果 -->
            <div v-if="calculationType === 'inverse'" class="grid grid-cols-1 gap-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.latitude') }} (°)</label>
                  <div class="flex">
                    <input 
                      :value="formatNumber(result.latitude, 8)" 
                      readonly 
                      class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    />
                    <button 
                      @click="copyToClipboard(result.latitude)" 
                      class="p-2 bg-gray-200 dark:bg-gray-600 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                      :title="t('copyToClipboard')"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.longitude') }} (°)</label>
                  <div class="flex">
                    <input 
                      :value="formatNumber(result.longitude, 8)" 
                      readonly 
                      class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    />
                    <button 
                      @click="copyToClipboard(result.longitude)" 
                      class="p-2 bg-gray-200 dark:bg-gray-600 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                      :title="t('copyToClipboard')"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.gaussian-projection.dms') }}</label>
                <div class="flex">
                  <input 
                    :value="result.dms" 
                    readonly 
                    class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  />
                  <button 
                    @click="copyToClipboard(result.dms)" 
                    class="p-2 bg-gray-200 dark:bg-gray-600 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                    :title="t('copyToClipboard')"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 地图显示 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.mapView') }}</h2>
              
              <!-- 地图图层选择 -->
              <div class="flex items-center">
                <label class="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.gaussian-projection.mapLayers') }}:</label>
                <select 
                  v-model="selectedMapLayer" 
                  class="p-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                  @change="changeMapLayer"
                >
                  <option v-for="layer in mapLayers" :key="layer.id" :value="layer.id">
                    {{ $t(`tools.gaussian-projection.${layer.id}`) }}
                  </option>
                </select>
              </div>
            </div>
            
            <div class="map-container">
              <div id="map" class="w-full h-full md:h-[400px] sm:h-[300px]"></div>
            </div>
            
            <!-- 地图点位操作 -->
            <div class="mt-4">
              <h3 class="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.pointsOnMap') }}</h3>
              <div class="flex flex-wrap gap-2">
                <button 
                  @click="clearMapPoints" 
                  class="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {{ $t('tools.gaussian-projection.clearPoints') }}
                </button>
                <button 
                  @click="exportAsGeoJSON" 
                  class="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {{ $t('tools.gaussian-projection.exportAsGeoJSON') }}
                </button>
                <button 
                  @click="exportAsKML" 
                  class="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {{ $t('tools.gaussian-projection.exportAsKML') }}
                </button>
                <button 
                  @click="exportAsTXT" 
                  class="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {{ $t('tools.gaussian-projection.exportAsTXT') }}
                </button>
                <button 
                  @click="exportAsCSV" 
                  class="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {{ $t('tools.gaussian-projection.exportAsCSV') }}
                </button>
                <button 
                  @click="exportAsExcel" 
                  class="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {{ $t('tools.gaussian-projection.exportAsExcel') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GaussianProjectionArticle />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import GaussianProjectionArticle from './GaussianProjectionArticle.vue'

  const { t } = useI18n()
  
  // 计算类型：正算或反算
  const calculationType = ref('forward')
  
  // 椭球参数
  const ellipsoids = {
    WGS84: { a: 6378137.0, f: 1/298.257223563 },
    Krasovsky: { a: 6378245.0, f: 1/298.3 },
    CGCS2000: { a: 6378137.0, f: 1/298.257222101 },
    GRS80: { a: 6378137.0, f: 1/298.257222101 },
    Beijing54: { a: 6378245.0, f: 1/298.3 },
    Xian80: { a: 6378140.0, f: 1/298.257 }
  }
  
  const selectedEllipsoid = ref('WGS84')
  const a = ref(ellipsoids.WGS84.a)
  const f = ref(ellipsoids.WGS84.f)
  const centralMeridian = ref(0)
  
  // 投影带参数
  const projectionType = ref('6')
  const zoneNumber = ref(1)
  
  // 输入参数
  const latitude = ref(39.9042)
  const longitude = ref(116.4074)
  const x = ref(435422.9)
  const y = ref(4415456.7)
  
  // 输入验证
  const isValidLatitude = computed(() => {
    return !isNaN(latitude.value) && latitude.value >= -90 && latitude.value <= 90
  })
  
  const isValidLongitude = computed(() => {
    return !isNaN(longitude.value) && longitude.value >= -180 && longitude.value <= 180
  })
  
  const isValidX = computed(() => {
    return !isNaN(x.value)
  })
  
  const isValidY = computed(() => {
    return !isNaN(y.value)
  })
  
  // 计算结果
  const result = ref({})
  const hasResult = ref(false)
  
  // 批量处理
  const batchInput = ref('')
  const batchResults = ref([])
  
  // 计算最大带号
  const maxZones = computed(() => {
    return projectionType.value === '3' ? 120 : 60
  })
  
  // 格式化批量结果
  const formattedBatchResults = computed(() => {
    return batchResults.value.join('\n')
  })
  
  // 监听椭球体选择变化
  watch(selectedEllipsoid, () => {
    updateEllipsoidParams()
  })
  
  // 更新椭球体参数
  function updateEllipsoidParams() {
    if (ellipsoids[selectedEllipsoid.value]) {
      a.value = ellipsoids[selectedEllipsoid.value].a
      f.value = ellipsoids[selectedEllipsoid.value].f
    }
  }
  
  // 计算中央子午线
  function calculateCentralMeridian() {
    const zoneWidth = parseInt(projectionType.value)
    return zoneWidth * (zoneNumber.value - 0.5) - 180
  }
  
  // 度转弧度
  function degToRad(deg) {
    return deg * Math.PI / 180
  }
  
  // 弧度转度
  function radToDeg(rad) {
    return rad * 180 / Math.PI
  }
  
  // 格式化数字
  function formatNumber(num, decimals = 3) {
    if (num === undefined || num === null) return ''
    return Number(num).toFixed(decimals)
  }
  
  // 度分秒格式化
  function formatDMS(degrees, isLatitude = true) {
    const absolute = Math.abs(degrees)
    const deg = Math.floor(absolute)
    const minFloat = (absolute - deg) * 60
    const min = Math.floor(minFloat)
    const sec = (minFloat - min) * 60
    
    const direction = isLatitude 
      ? (degrees >= 0 ? 'N' : 'S')
      : (degrees >= 0 ? 'E' : 'W')
    
    return `${deg}° ${min}' ${sec.toFixed(2)}" ${direction}`
  }
  
  // 高斯投影正算
  function gaussForward(lat, lng) {
    // 确保中央子午线已设置
    const L0 = centralMeridian.value !== 0 
      ? centralMeridian.value 
      : calculateCentralMeridian()
    
    // 转换为弧度
    const B = degToRad(lat)
    const L = degToRad(lng)
    const L0_rad = degToRad(L0)
    
    // 计算参数
    const e2 = 2 * f.value - f.value * f.value
    const n = f.value / (2 - f.value)
    const nu = a.value / Math.sqrt(1 - e2 * Math.sin(B) * Math.sin(B))
    const t = Math.tan(B)
    const l = L - L0_rad
    
    // 子午线弧长计算
    const A0 = 1 + 3/4 * e2 + 45/64 * Math.pow(e2, 2) + 175/256 * Math.pow(e2, 3) + 11025/16384 * Math.pow(e2, 4)
    const A2 = 3/8 * e2 + 15/32 * Math.pow(e2, 2) + 525/1024 * Math.pow(e2, 3) + 2205/4096 * Math.pow(e2, 4)
    const A4 = 15/256 * Math.pow(e2, 2) + 105/1024 * Math.pow(e2, 3) + 2205/16384 * Math.pow(e2, 4)
    const A6 = 35/3072 * Math.pow(e2, 3) + 105/4096 * Math.pow(e2, 4)
    const A8 = 315/131072 * Math.pow(e2, 4)
    
    const m = a.value * (1 - e2) * (A0 * B - A2 * Math.sin(2 * B) + A4 * Math.sin(4 * B) - A6 * Math.sin(6 * B) + A8 * Math.sin(8 * B))
    
    // 计算高斯投影坐标
    const x = m + (nu * Math.sin(B) * Math.cos(B) * l * l / 2) + 
              (nu * Math.sin(B) * Math.pow(Math.cos(B), 3) * (5 - t * t + 9 * Math.pow(Math.cos(B), 2)) * Math.pow(l, 4) / 24) +
              (nu * Math.sin(B) * Math.pow(Math.cos(B), 5) * (61 - 58 * t * t + Math.pow(t, 4)) * Math.pow(l, 6) / 720)
    
    const y = nu * Math.cos(B) * l + 
              (nu * Math.pow(Math.cos(B), 3) * (1 - t * t + Math.pow(Math.cos(B), 2)) * Math.pow(l, 3) / 6) +
              (nu * Math.pow(Math.cos(B), 5) * (5 - 18 * t * t + Math.pow(t, 4) + 14 * Math.pow(Math.cos(B), 2) - 58 * t * t * Math.pow(Math.cos(B), 2)) * Math.pow(l, 5) / 120)
    
    // 添加偏移量，默认为false带
    const yOffset = 500000.0
    const y_with_offset = y + yOffset
    
    return { x, y: y_with_offset }
  }
  
  // 高斯投影反算
  function gaussInverse(x_input, y_input) {
    // 确保中央子午线已设置
    const L0 = centralMeridian.value !== 0 
      ? centralMeridian.value 
      : calculateCentralMeridian()
    
    // 移除偏移量
    const yOffset = 500000.0
    const y = y_input - yOffset
    const x = x_input
    
    // 计算参数
    const e2 = 2 * f.value - f.value * f.value
    const e1 = (1 - Math.sqrt(1 - e2)) / (1 + Math.sqrt(1 - e2))
    
    // 计算底点纬度
    const M = x
    let mu = M / (a.value * (1 - e2 / 4 - 3 * Math.pow(e2, 2) / 64 - 5 * Math.pow(e2, 3) / 256))
    
    // 迭代计算纬度
    let B = mu + 
            (3 * e1 / 2 - 27 * Math.pow(e1, 3) / 32) * Math.sin(2 * mu) +
            (21 * Math.pow(e1, 2) / 16 - 55 * Math.pow(e1, 4) / 32) * Math.sin(4 * mu) +
            (151 * Math.pow(e1, 3) / 96) * Math.sin(6 * mu) +
            (1097 * Math.pow(e1, 4) / 512) * Math.sin(8 * mu)
    
    // 计算其他参数
    const nu = a.value / Math.sqrt(1 - e2 * Math.sin(B) * Math.sin(B))
    const rho = a.value * (1 - e2) / Math.pow(1 - e2 * Math.sin(B) * Math.sin(B), 1.5)
    const t = Math.tan(B)
    const C1 = t / (2 * rho * nu)
    const D = y / (nu * Math.cos(B))
    
    // 计算经纬度
    const lat = B - C1 * (D * D) * (1 - D * D / 12 * (5 + 3 * t * t - 9 * t * t * Math.pow(Math.cos(B), 2) - 4 * Math.pow(Math.cos(B), 4)) - 
                Math.pow(D, 6) / 360 * (61 + 90 * t * t + 45 * Math.pow(t, 4)))
    
    const lng = degToRad(L0)
    const lon = lng + D * (1 - D * D / 6 * (1 + 2 * t * t + Math.pow(Math.cos(B), 2)) - 
                Math.pow(D, 4) / 120 * (5 + 28 * t * t + 24 * Math.pow(t, 4) + 6 * Math.pow(Math.cos(B), 2) + 8 * t * t * Math.pow(Math.cos(B), 2)))
    
    return {
      latitude: radToDeg(lat),
      longitude: radToDeg(lon),
      dms: `${formatDMS(radToDeg(lat), true)}, ${formatDMS(radToDeg(lon), false)}`
    }
  }
  
  // 解析度分秒格式
  function parseDMS(dmsStr) {
    // 支持多种格式：
    // 40°26'46"N, 79°58'56"W
    // 40° 26' 46" N, 79° 58' 56" W
    // 40°26'46"N 79°58'56"W
    // 40:26:46N 79:58:56W
    
    // 清理输入字符串
    const cleanStr = dmsStr.trim().replace(/\s+/g, ' ')
    
    // 尝试匹配常见的度分秒格式
    const dmsRegex = /(\d+)[°:\s]?\s*(\d+)['\s:]?\s*(\d+(?:\.\d+)?)["\s]?\s*([NSEW])/gi
    const matches = [...cleanStr.matchAll(dmsRegex)]
    
    if (matches.length >= 2) {
      const results = matches.map(match => {
        const deg = parseInt(match[1])
        const min = parseInt(match[2])
        const sec = parseFloat(match[3])
        const dir = match[4].toUpperCase()
        
        // 转换为十进制度
        let decimal = deg + min / 60 + sec / 3600
        
        // 根据方向调整符号
        if (dir === 'S' || dir === 'W') {
          decimal = -decimal
        }
        
        return decimal
      })
      
      // 返回纬度和经度
      return {
        latitude: results[0],
        longitude: results[1]
      }
    }
    
    return null
  }
  
  // 处理DMS输入
  function handleDMSInput() {
    const dmsInput = document.getElementById('dmsInput').value
    const parsed = parseDMS(dmsInput)
    
    if (parsed) {
      latitude.value = parsed.latitude
      longitude.value = parsed.longitude
      calculate()
    } else {
      // 显示错误信息
      showToast(t('tools.gaussian-projection.dmsParseError'))
    }
  }
  
  // 验证输入
  function validateInput() {
    let isValid = true
    
    if (calculationType.value === 'forward') {
      if (!isValidLatitude.value || !isValidLongitude.value) {
        isValid = false
      }
    } else {
      if (!isValidX.value || !isValidY.value) {
        isValid = false
      }
    }
    
    return isValid
  }
  
  // 执行计算
  function calculate() {
    if (!validateInput()) return
    
    if (calculationType.value === 'forward') {
      result.value = gaussForward(latitude.value, longitude.value)
    } else {
      result.value = gaussInverse(x.value, y.value)
    }
    hasResult.value = true
    
    // 如果有地图实例，更新地图标记
    updateMapMarker()
  }
  
  // 复制到剪贴板
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text.toString()).then(() => {
      // 可以添加复制成功的提示
      showToast(t('tools.gaussian-projection.copySuccess'))
    }).catch(err => {
      console.error('Failed to copy: ', err)
      showToast(t('tools.gaussian-projection.copyFailed'))
    })
  }
  
  // 显示提示信息
  function showToast(message) {
    const toast = document.createElement('div')
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md z-50'
    toast.textContent = message
    document.body.appendChild(toast)
    
    setTimeout(() => {
      toast.classList.add('opacity-0', 'transition-opacity', 'duration-500')
      setTimeout(() => {
        document.body.removeChild(toast)
      }, 500)
    }, 2000)
  }
  
  // 批量处理
  function processBatch() {
    if (!batchInput.value.trim()) return
    
    const lines = batchInput.value.trim().split('\n')
    const results = []
    
    for (const line of lines) {
      const parts = line.trim().split(/[,\s]+/)
      
      if (calculationType.value === 'forward' && parts.length >= 2) {
        const lat = parseFloat(parts[0])
        const lng = parseFloat(parts[1])
        
        if (!isNaN(lat) && !isNaN(lng)) {
          const res = gaussForward(lat, lng)
          results.push(`${formatNumber(res.x)},${formatNumber(res.y)}`)
        }
      } else if (calculationType.value === 'inverse' && parts.length >= 2) {
        const x_val = parseFloat(parts[0])
        const y_val = parseFloat(parts[1])
        
        if (!isNaN(x_val) && !isNaN(y_val)) {
          const res = gaussInverse(x_val, y_val)
          results.push(`${formatNumber(res.latitude, 8)},${formatNumber(res.longitude, 8)}`)
        }
      }
    }
    
    batchResults.value = results
  }
  
  // 复制批量结果
  function copyBatchResults() {
    navigator.clipboard.writeText(formattedBatchResults.value).then(() => {
      showToast(t('tools.gaussian-projection.copySuccess'))
    }).catch(err => {
      console.error('Failed to copy batch results: ', err)
      showToast(t('tools.gaussian-projection.copyFailed'))
    })
  }
  
  // 下载CSV
  function downloadCSV() {
    if (!batchResults.value.length) return
    
    const csvContent = batchResults.value.join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    
    link.setAttribute('href', url)
    link.setAttribute('download', `gaussian_projection_${calculationType.value}_results.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  // 清空输入
  function clearInput() {
    if (calculationType.value === 'forward') {
      latitude.value = null
      longitude.value = null
    } else {
      x.value = null
      y.value = null
    }
    
    hasResult.value = false
    result.value = {}
  }
  
  // 清空批量输入
  function clearBatchInput() {
    batchInput.value = ''
    batchResults.value = []
  }
  
  // 地图相关功能
  let map = null
  let marker = null
  
  // 组件挂载时初始化
  onMounted(() => {
    // 加载Leaflet
    const leafletCSS = document.createElement('link')
    leafletCSS.rel = 'stylesheet'
    leafletCSS.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
    document.head.appendChild(leafletCSS)
    
    const leafletScript = document.createElement('script')
    leafletScript.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
    leafletScript.onload = initMap
    document.head.appendChild(leafletScript)
    
    // 监听输入变化，实时计算
    watch([latitude, longitude, x, y], () => {
      if ((calculationType.value === 'forward' && latitude.value !== null && longitude.value !== null) ||
          (calculationType.value === 'inverse' && x.value !== null && y.value !== null)) {
        calculate()
      }
    })
    
    // 监听计算类型变化
    watch(calculationType, () => {
      hasResult.value = false
      result.value = {}
    })
  })

  // 单位系统
const unitSystem = ref('metric')
const unitConversionFactor = computed(() => {
  switch(unitSystem.value) {
    case 'metric': return 1;
    case 'imperial': return 3.28084;
    case 'km': return 0.001;
    case 'miles': return 0.000621371;
    default: return 1;
  }
})

// 地图图层
const mapLayers = ref([
  { id: 'standard', name: t('tools.gaussian-projection.standard'), url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' },
  { id: 'satellite', name: t('tools.gaussian-projection.satellite'), url: 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] },
  { id: 'terrain', name: t('tools.gaussian-projection.terrain'), url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' }
])
const selectedMapLayer = ref('standard')

// 地图上的点
const mapPoints = ref([])

// 自定义椭球体
const customEllipsoid = ref({ a: 6378137.0, f: 1/298.257223563 })

// 椭球体列表添加自定义选项
ellipsoids.Custom = { a: customEllipsoid.value.a, f: customEllipsoid.value.f }

// 保存自定义椭球体
function saveCustomEllipsoid() {
  ellipsoids.Custom = { a: customEllipsoid.value.a, f: customEllipsoid.value.f }
  if (selectedEllipsoid.value === 'Custom') {
    updateEllipsoidParams()
  }
  showToast(t('tools.gaussian-projection.customEllipsoidSaved'))
}

// 上传CSV文件
function uploadCSV(event) {
  const file = event.target.files[0]
  if (!file) return
  
  const ext = file.name.split('.').pop().toLowerCase()
  
  if (ext === 'csv' || ext === 'txt') {
    // Handle CSV/TXT files
    const reader = new FileReader()
    reader.onload = (e) => {
      batchInput.value = e.target.result
    }
    reader.readAsText(file)
  } else if (ext === 'xlsx' || ext === 'xls') {
    // Handle Excel files
    try {
      // Load the SheetJS library if it's not already loaded
      // if (typeof XLSX === 'undefined') {
      //   await loadScript('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js')
      // }
      
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result)
          const workbook = XLSX.read(data, { type: 'array' })
          
          // Get the first sheet
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          
          // Convert to CSV format
          const csv = XLSX.utils.sheet_to_csv(worksheet)
          batchInput.value = csv
          
          showToast(t('tools.gaussian-projection.excelImportSuccess'))
        } catch (error) {
          console.error('Excel parsing failed:', error)
          showToast(t('tools.gaussian-projection.excelImportFailed'))
        }
      }
      reader.readAsArrayBuffer(file)
    } catch (error) {
      console.error('Excel import failed:', error)
      showToast(t('tools.gaussian-projection.excelImportFailed'))
    }
  }
}

// 导出为GeoJSON
function exportAsGeoJSON() {
  if (!mapPoints.value.length && !hasResult.value) return
  
  const points = [...mapPoints.value]
  
  // 如果有当前结果但不在地图点中，添加它
  if (hasResult.value) {
    let lat, lng
    if (calculationType.value === 'forward') {
      lat = latitude.value
      lng = longitude.value
    } else if (result.value && result.value.latitude && result.value.longitude) {
      lat = result.value.latitude
      lng = result.value.longitude
    }
    
    if (lat && lng) {
      const existingPoint = points.find(p => p.lat === lat && p.lng === lng)
      if (!existingPoint) {
        points.push({ lat, lng })
      }
    }
  }
  
  const geoJSON = {
    type: 'FeatureCollection',
    features: points.map((point, index) => ({
      type: 'Feature',
      properties: {
        id: index + 1,
        name: `Point ${index + 1}`
      },
      geometry: {
        type: 'Point',
        coordinates: [point.lng, point.lat]
      }
    }))
  }
  
  downloadFile(JSON.stringify(geoJSON, null, 2), 'gaussian_projection_points.geojson', 'application/json')
}

// 导出为KML
function exportAsKML() {
  if (!mapPoints.value.length && !hasResult.value) return
  
  const points = [...mapPoints.value]
  
  // 如果有当前结果但不在地图点中，添加它
  if (hasResult.value) {
    let lat, lng
    if (calculationType.value === 'forward') {
      lat = latitude.value
      lng = longitude.value
    } else if (result.value && result.value.latitude && result.value.longitude) {
      lat = result.value.latitude
      lng = result.value.longitude
    }
    
    if (lat && lng) {
      const existingPoint = points.find(p => p.lat === lat && p.lng === lng)
      if (!existingPoint) {
        points.push({ lat, lng })
      }
    }
  }
  
  const kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Gaussian Projection Points</name>
    <Style id="pointStyle">
      <IconStyle>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/red-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>
${points.map((point, index) => `    <Placemark>
      <name>Point ${index + 1}</name>
      <styleUrl>#pointStyle</styleUrl>
      <Point>
        <coordinates>${point.lng},${point.lat},0</coordinates>
      </Point>
    </Placemark>`).join('\n')}
  </Document>
</kml>`
  
  downloadFile(kmlContent, 'gaussian_projection_points.kml', 'application/vnd.google-earth.kml+xml')
}

// 导出为TXT
function exportAsTXT() {
  if (!mapPoints.value.length && !hasResult.value) return
  
  const points = [...mapPoints.value]
  
  // 如果有当前结果但不在地图点中，添加它
  if (hasResult.value) {
    let lat, lng
    if (calculationType.value === 'forward') {
      lat = latitude.value
      lng = longitude.value
    } else if (result.value && result.value.latitude && result.value.longitude) {
      lat = result.value.latitude
      lng = result.value.longitude
    }
    
    if (lat && lng) {
      const existingPoint = points.find(p => p.lat === lat && p.lng === lng)
      if (!existingPoint) {
        points.push({ lat, lng })
      }
    }
  }
  
  const txtContent = points.map((point, index) => `Point ${index + 1}: Latitude=${point.lat}, Longitude=${point.lng}`).join('\n')
  
  downloadFile(txtContent, 'gaussian_projection_points.txt', 'text/plain')
}

// 通用文件下载函数
function downloadFile(content, fileName, contentType) {
  const blob = new Blob([content], { type: contentType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  
  link.setAttribute('href', url)
  link.setAttribute('download', fileName)
  link.style.visibility = 'hidden'
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 清除地图上的所有点
function clearMapPoints() {
  mapPoints.value = []
  if (map) {
    map.eachLayer(layer => {
      if (layer instanceof L.Marker && layer !== marker) {
        map.removeLayer(layer)
      }
    })
  }
}

// 更新地图图层
function changeMapLayer() {
  if (!map) return
  
  const selectedLayer = mapLayers.value.find(layer => layer.id === selectedMapLayer.value)
  if (!selectedLayer) return
  
  // 移除现有图层
  map.eachLayer(layer => {
    if (layer instanceof L.TileLayer) {
      map.removeLayer(layer)
    }
  })
  
  // 添加新图层
  if (selectedLayer.subdomains) {
    L.tileLayer(selectedLayer.url, {
      subdomains: selectedLayer.subdomains,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  } else {
    L.tileLayer(selectedLayer.url, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  }
}

// 初始化地图
function initMap() {
  if (typeof L === 'undefined') return
  
  // 如果地图已经初始化，先销毁
  if (map) {
    map.remove()
    map = null
  }
  
  // 创建地图实例
  map = L.map('map').setView([39.9042, 116.4074], 5)
  
  // 添加默认底图
  const selectedLayer = mapLayers.value.find(layer => layer.id === selectedMapLayer.value) || mapLayers.value[0]
  
  if (selectedLayer.subdomains) {
    L.tileLayer(selectedLayer.url, {
      subdomains: selectedLayer.subdomains,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  } else {
    L.tileLayer(selectedLayer.url, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  }
  
  // 添加点击事件，允许用户在地图上添加点
  map.on('click', function(e) {
    const lat = e.latlng.lat
    const lng = e.latlng.lng
    
    // 添加到点位列表
    mapPoints.value.push({ lat, lng })
    
    // 在地图上添加标记
    L.marker([lat, lng]).addTo(map)
    
    // 如果是正算模式，自动填充经纬度
    if (calculationType.value === 'forward') {
      latitude.value = lat
      longitude.value = lng
      calculate()
    }
  })
  
  // 监听窗口大小变化，调整地图大小
  window.addEventListener('resize', () => {
    if (map) {
      map.invalidateSize()
    }
  })
}

// 更新地图标记
function updateMapMarker() {
  if (!map) return
  
  let lat, lng
  
  if (calculationType.value === 'forward') {
    lat = latitude.value
    lng = longitude.value
  } else if (result.value && result.value.latitude && result.value.longitude) {
    lat = result.value.latitude
    lng = result.value.longitude
  } else {
    return
  }
  
  // 移除现有标记
  if (marker) {
    map.removeLayer(marker)
  }
  
  // 添加新标记
  marker = L.marker([lat, lng]).addTo(map)
  
  // 调整地图视图
  map.flyToBounds([[lat, lng]], {
    padding: [50, 50],
    maxZoom: 15,
    duration: 1
  })
}

// 加载示例数据
function loadExample() {
  if (calculationType.value === 'forward') {
    // 正算示例
    latitude.value = 39.9042
    longitude.value = 116.4074
  } else {
    // 反算示例
    x.value = 4415456.7
    y.value = 435422.9
  }
  calculate()
}

// 导出为CSV专用函数
function exportAsCSV() {
  if (!mapPoints.value.length && !hasResult.value) return
  
  const points = [...mapPoints.value]
  
  // 如果有当前结果但不在地图点中，添加它
  if (hasResult.value) {
    let lat, lng
    if (calculationType.value === 'forward') {
      lat = latitude.value
      lng = longitude.value
    } else if (result.value && result.value.latitude && result.value.longitude) {
      lat = result.value.latitude
      lng = result.value.longitude
    }
    
    if (lat && lng) {
      const existingPoint = points.find(p => p.lat === lat && p.lng === lng)
      if (!existingPoint) {
        points.push({ lat, lng })
      }
    }
  }
  
  // 生成CSV内容
  const header = 'ID,Latitude,Longitude,X,Y\n'
  const rows = points.map((point, index) => {
    const coords = gaussForward(point.lat, point.lng)
    return `${index + 1},${point.lat},${point.lng},${coords.x},${coords.y}`
  }).join('\n')
  
  const csvContent = header + rows
  downloadFile(csvContent, 'gaussian_projection_points.csv', 'text/csv')
}

// Add the function to load external scripts dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// Replace the existing exportAsExcel function with this implementation
async function exportAsExcel() {
  if (!mapPoints.value.length && !hasResult.value) return
  
  try {
    // Load the SheetJS library if it's not already loaded
    if (typeof XLSX === 'undefined') {
      await loadScript('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js')
    }
    
    const points = [...mapPoints.value]
    
    // If there's a current result but not in map points, add it
    if (hasResult.value) {
      let lat, lng
      if (calculationType.value === 'forward') {
        lat = latitude.value
        lng = longitude.value
      } else if (result.value && result.value.latitude && result.value.longitude) {
        lat = result.value.latitude
        lng = result.value.longitude
      }
      
      if (lat && lng) {
        const existingPoint = points.find(p => p.lat === lat && p.lng === lng)
        if (!existingPoint) {
          points.push({ lat, lng })
        }
      }
    }
    
    // Create worksheet data
    const worksheetData = [
      ['ID', 'Latitude', 'Longitude', 'X', 'Y', 'DMS Latitude', 'DMS Longitude'] // Header row
    ]
    
    // Add data rows
    points.forEach((point, index) => {
      const coords = gaussForward(point.lat, point.lng)
      worksheetData.push([
        index + 1,
        point.lat,
        point.lng,
        coords.x,
        coords.y,
        formatDMS(point.lat, true),
        formatDMS(point.lng, false)
      ])
    })
    
    // Create worksheet and workbook
    const ws = XLSX.utils.aoa_to_sheet(worksheetData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Gaussian Projection')
    
    // Generate Excel file
    XLSX.writeFile(wb, 'gaussian_projection_points.xlsx')
    
    showToast(t('tools.gaussian-projection.excelExportSuccess'))
  } catch (error) {
    console.error('Excel export failed:', error)
    showToast(t('tools.gaussian-projection.excelExportFailed'))
    
    // Fallback to CSV export
    exportAsCSV()
  }
}

// 在文件中添加批量示例加载函数，放在clearBatchInput函数后面（约 line 1450附近）
function loadBatchExample() {
  if (calculationType.value === 'forward') {
    // 正算批量示例
    batchInput.value = '39.9042,116.4074\n40.0522,116.3936\n39.9522,116.3359';
  } else {
    // 反算批量示例
    batchInput.value = '4415456.7,435422.9\n4429248.1,442152.8\n4418456.2,430422.5';
  }
  processBatch();
}

// Add this after the mapLayers definition (around line 970)
const unitOptions = [
  { value: 'metric', label: 'tools.gaussian-projection.units.metric' },
  { value: 'imperial', label: 'tools.gaussian-projection.units.imperial' },
  { value: 'km', label: 'tools.gaussian-projection.units.km' },
  { value: 'miles', label: 'tools.gaussian-projection.units.miles' }
]

</script>

<style scoped>
.map-container {
  height: 400px;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}

#map {
  height: 100%;
  width: 100%;
}

.input-error {
  border-color: #ef4444;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 移动端适配 */
@media (max-width: 640px) {
  .map-container {
    height: 300px;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }
  
  button, .button {
    min-height: 44px;
    min-width: 44px;
  }
  
  input, select, textarea {
    min-height: 44px;
    font-size: 16px; /* 避免iOS自动缩放 */
  }
}
</style>