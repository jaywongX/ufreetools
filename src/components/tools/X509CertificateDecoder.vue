<template>
    <div class="w-full">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
        <h2 class="text-lg font-semibold mb-2">{{ $t('tools.x509-certificate-decoder.instructions.title') }}</h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">{{ $t('tools.x509-certificate-decoder.instructions.description') }}</p>
        
        <!-- Input methods -->
        <div class="space-y-4">
          <!-- File upload with drag & drop -->
          <div 
            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4"
            :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleFileDrop"
          >
            <div class="flex flex-col items-center justify-center">
              <svg class="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {{ $t('tools.x509-certificate-decoder.dropzone.title') }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ $t('tools.x509-certificate-decoder.dropzone.formats') }}
              </p>
              <div class="flex space-x-3 mt-4">
                <label class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition">
                  {{ $t('tools.x509-certificate-decoder.buttons.browse') }}
                  <input type="file" accept=".cer,.crt,.pem,.der" class="hidden" @change="handleFileUpload" />
                </label>
                <button @click="loadSampleCertificate" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                  {{ $t('tools.x509-certificate-decoder.buttons.loadSample') }}
                </button>
              </div>
            </div>
          </div>
          
          <!-- Text input -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.x509-certificate-decoder.input.paste') }}
            </label>
            <textarea
              v-model="certificateText"
              rows="10"
              class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700"
              :placeholder="$t('tools.x509-certificate-decoder.input.placeholder')"
            ></textarea>
          </div>
          
          <div class="flex justify-center">
            <button 
              @click="decodeCertificate" 
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              :disabled="!certificateText && !selectedFile"
            >
              {{ $t('tools.x509-certificate-decoder.buttons.decode') }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Results -->
      <div v-if="loading" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex justify-center">
        <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <span class="ml-3 text-gray-600 dark:text-gray-400">{{ $t('tools.x509-certificate-decoder.loading') }}</span>
      </div>
      
      <div v-else-if="error" class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800 dark:text-red-200">{{ $t('tools.x509-certificate-decoder.error.title') }}</h3>
            <div class="mt-2 text-sm text-red-700 dark:text-red-300">
              <p>{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="certificate" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 class="text-lg font-semibold mb-4">{{ $t('tools.x509-certificate-decoder.results.title') }}</h3>
        
        <!-- Certificate tabs -->
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li class="mr-2" v-for="(tab, index) in tabs" :key="tab.id">
              <button
                @click="activeTab = tab.id"
                :class="[
                  'inline-block p-4 rounded-t-lg',
                  activeTab === tab.id 
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500' 
                    : 'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                ]"
              >
                {{ $t(`tools.x509-certificate-decoder.tabs.${tab.id}`) }}
              </button>
            </li>
          </ul>
        </div>
        
        <!-- Basic Information Tab -->
        <div v-if="activeTab === 'basic'" class="mb-4">
          <div class="grid gap-4">
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.serialNumber') }}</h4>
                <p class="break-all text-gray-800 dark:text-gray-200">{{ certificate.serialNumber }}</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.version') }}</h4>
                <p class="text-gray-800 dark:text-gray-200">{{ certificate.version }}</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.sigAlg') }}</h4>
                <p class="text-gray-800 dark:text-gray-200">{{ certificate.signatureAlgorithm }}</p>
              </div>
              <!-- Certificate Usage -->
              <!-- <div v-if="certificate" class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-4">{{ $t('tools.x509-certificate-decoder.results.certificateUsage') }}</h4>
                
                <div v-if="hasAnyUsage" class="flex flex-wrap gap-3 justify-center">
                  <div v-if="isServerAuth" class="flex flex-col items-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span class="text-sm mt-1">{{ $t('tools.x509-certificate-decoder.usage.serverAuth') }}</span>
                  </div>
                  
                  <div v-if="isClientAuth" class="flex flex-col items-center p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <svg class="w-8 h-8 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="text-sm mt-1">{{ $t('tools.x509-certificate-decoder.usage.clientAuth') }}</span>
                  </div>
                  
                  <div v-if="isCodeSigning" class="flex flex-col items-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span class="text-sm mt-1">{{ $t('tools.x509-certificate-decoder.usage.codeSigning') }}</span>
                  </div>
                  
                  <div v-if="isEmailProtection" class="flex flex-col items-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="text-sm mt-1">{{ $t('tools.x509-certificate-decoder.usage.emailProtection') }}</span>
                  </div>
                </div>
                
                <div v-else class="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
                  {{ $t('tools.x509-certificate-decoder.results.noSpecificUsage') }}
                </div>
              </div> -->
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.validFrom') }}</h4>
                <p class="text-gray-800 dark:text-gray-200">{{ certificate.validFrom }}</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.validTo') }}</h4>
                <p class="text-gray-800 dark:text-gray-200">{{ certificate.validTo }}</p>
              </div>
            </div>
            
            <!-- Certificate validity status -->
            <div v-if="certificate" class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.x509-certificate-decoder.results.validity') }}</h4>
                <span :class="expiryStatusClass" class="px-2 py-1 rounded-full text-sm font-medium">
                  {{ expiryStatusText }}
                </span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div class="h-2.5 rounded-full" :class="expiryBarClass" :style="`width: ${validityPercentage}%`"></div>
              </div>
            </div>
            
            <!-- Certificate Visualization -->
            <div v-if="certificate" class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-4">{{ $t('tools.x509-certificate-decoder.results.visualization') }}</h4>
              <div class="flex flex-col items-center">
                <div class="relative w-64 h-64 mb-4">
                  <div class="absolute inset-0 rounded-full border-4" :class="certificateHealthClass"></div>
                  <div class="absolute inset-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-3xl font-bold" :class="certificateHealthTextClass">{{ daysUntilExpiry > 0 ? daysUntilExpiry : 0 }}</div>
                      <div class="text-sm">{{ $t('tools.x509-certificate-decoder.results.daysRemaining') }}</div>
                      <div class="mt-2">
                        <div class="inline-block px-3 py-1 rounded-full text-xs font-medium" :class="certificateHealthClass">
                          {{ certificateHealthStatus }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4 w-full">
                  <div class="text-center p-2 rounded bg-blue-100 dark:bg-blue-900">
                    <div class="text-sm text-gray-600 dark:text-gray-300">{{ $t('tools.x509-certificate-decoder.results.validFrom') }}</div>
                    <div class="font-medium">{{ new Date(certificate.validFrom).toLocaleDateString() }}</div>
                  </div>
                  <div class="text-center p-2 rounded" :class="expiryDateClass">
                    <div class="text-sm text-gray-600 dark:text-gray-300">{{ $t('tools.x509-certificate-decoder.results.validTo') }}</div>
                    <div class="font-medium">{{ new Date(certificate.validTo).toLocaleDateString() }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Add field descriptions -->
          <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.fieldDescriptions') }}</h4>
            <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p><span class="font-semibold">{{ $t('tools.x509-certificate-decoder.results.serialNumber') }}:</span> {{ $t('tools.x509-certificate-decoder.descriptions.serialNumber') }}</p>
              <p><span class="font-semibold">{{ $t('tools.x509-certificate-decoder.results.version') }}:</span> {{ $t('tools.x509-certificate-decoder.descriptions.version') }}</p>
              <p><span class="font-semibold">{{ $t('tools.x509-certificate-decoder.results.sigAlg') }}:</span> {{ $t('tools.x509-certificate-decoder.descriptions.sigAlg') }}</p>
              <p><span class="font-semibold">{{ $t('tools.x509-certificate-decoder.results.validFrom') }}:</span> {{ $t('tools.x509-certificate-decoder.descriptions.validFrom') }}</p>
              <p><span class="font-semibold">{{ $t('tools.x509-certificate-decoder.results.validTo') }}:</span> {{ $t('tools.x509-certificate-decoder.descriptions.validTo') }}</p>
            </div>
          </div>
        </div>
        
        <!-- Subject and Issuer Tab -->
        <div v-if="activeTab === 'subject'" class="mb-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-medium text-lg">{{ $t('tools.x509-certificate-decoder.results.subject') }}</h4>
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.x509-certificate-decoder.results.field') }}</th>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.x509-certificate-decoder.results.value') }}</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(value, key) in certificate.subject" :key="'subject-' + key">
                    <td class="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">{{ key }}</td>
                    <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-all">{{ value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-medium text-lg">{{ $t('tools.x509-certificate-decoder.results.issuer') }}</h4>
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.x509-certificate-decoder.results.field') }}</th>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('tools.x509-certificate-decoder.results.value') }}</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(value, key) in certificate.issuer" :key="'issuer-' + key">
                    <td class="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">{{ key }}</td>
                    <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 break-all">{{ value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <!-- Extensions Tab -->
        <div v-if="activeTab === 'extensions'" class="mb-4">
          <h4 class="font-medium text-lg mb-4">{{ $t('tools.x509-certificate-decoder.results.extensions') }}</h4>
          <div v-if="certificate.extensions && certificate.extensions.length > 0">
            <div v-for="(ext, index) in certificate.extensions" :key="index" class="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div class="mb-2">
                <span class="font-semibold text-gray-800 dark:text-gray-200">{{ ext.name || ext.oid }}</span>
                <span v-if="ext.critical" class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  {{ $t('tools.x509-certificate-decoder.results.critical') }}
                </span>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-300 mt-1">
                <p><span class="font-medium">OID:</span> {{ ext.oid }}</p>
              </div>
              <div class="mt-2 break-all">
                <pre v-if="ext.valueFormatted" class="px-4 py-3 bg-gray-700 text-gray-100 rounded overflow-x-auto text-sm">{{ ext.valueFormatted }}</pre>
                <div v-else-if="ext.valueType === 'list'" class="mt-2">
                  <div v-for="(item, itemIndex) in ext.value" :key="itemIndex" class="mb-1">
                    <p>- {{ item }}</p>
                  </div>
                </div>
                <p v-else class="break-all text-gray-700 dark:text-gray-300">{{ ext.value }}</p>
              </div>
            </div>
          </div>
          <div v-else class="text-gray-600 dark:text-gray-400 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            {{ $t('tools.x509-certificate-decoder.results.noExtensions') }}
          </div>
          <!-- Custom OID Parser -->
          <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.customOID.title') }}</h5>
            <div class="flex space-x-2 mb-4">
              <input 
                v-model="customOID" 
                type="text" 
                class="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                :placeholder="$t('tools.x509-certificate-decoder.customOID.placeholder')"
              />
              <button 
                @click="lookupCustomOID" 
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {{ $t('tools.x509-certificate-decoder.customOID.lookup') }}
              </button>
            </div>
            <div v-if="customOIDResult" class="text-sm bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
              <p><span class="font-medium">OID:</span> {{ customOID }}</p>
              <p><span class="font-medium">{{ $t('tools.x509-certificate-decoder.customOID.result') }}:</span> {{ customOIDResult }}</p>
              <div v-if="customOIDValue" class="mt-2">
                <p><span class="font-medium">{{ $t('tools.x509-certificate-decoder.customOID.value') }}:</span></p>
                <pre class="mt-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded overflow-x-auto text-sm">{{ customOIDValue }}</pre>
                <button 
                  @click="copyToClipboard('oid', customOIDValue)" 
                  class="mt-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition text-xs flex items-center"
                >
                  <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                  </svg>
                  {{ $t('tools.x509-certificate-decoder.buttons.copyValue') }}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Public Key Tab -->
        <div v-if="activeTab === 'publicKey'" class="mb-4">
          <h4 class="font-medium text-lg mb-4">{{ $t('tools.x509-certificate-decoder.results.publicKey') }}</h4>
          <div class="grid grid-cols-1 gap-4">
            <!-- Algorithm info -->
            <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.algorithm') }}</h5>
              <p class="text-gray-800 dark:text-gray-200">{{ certificate.publicKey.algorithm }}</p>
            </div>
            
            <!-- Key Size -->
            <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.keySize') }}</h5>
              <p class="text-gray-800 dark:text-gray-200">{{ certificate.publicKey.keySize }} bits</p>
            </div>
            
            <!-- 增强密钥详情 -->
            <div v-if="certificate.publicKey.details && Object.keys(certificate.publicKey.details).length > 0" 
              class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.keyDetails') }}</h5>
              <div class="space-y-2">
                <div v-for="(value, key) in certificate.publicKey.details" :key="key" class="grid grid-cols-1 sm:grid-cols-3">
                  <div class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ formatKeyName(key) }}:</div>
                  <div class="sm:col-span-2 text-sm break-all text-gray-800 dark:text-gray-200">
                    {{ formatKeyValue(key, value) }}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 密钥值 - 这是之前缺失的部分 -->
            <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.x509-certificate-decoder.results.keyValue') }}</h5>
              
              <!-- 格式选择器 -->
              <div class="mb-4">
                <div class="flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
                  <button 
                    v-for="format in keyFormats" 
                    :key="format.id"
                    @click="activeKeyFormat = format.id" 
                    class="py-2 px-3 text-sm"
                    :class="activeKeyFormat === format.id ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'"
                  >
                    {{ format.label }}
                  </button>
                </div>
              </div>
              
              <!-- 密钥值显示 -->
              <div class="mt-2 overflow-auto">
                <pre class="px-4 py-3 bg-gray-700 text-gray-100 rounded overflow-x-auto text-sm">{{ formattedKeyValue }}</pre>
                
                <!-- 操作按钮 -->
                <div class="mt-2 flex space-x-2">
                  <button 
                    @click="copyToClipboard('publicKey', formattedKeyValue)" 
                    class="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm flex items-center"
                  >
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                    </svg>
                    {{ $t('tools.x509-certificate-decoder.buttons.copyValue') }}
                  </button>
                  
                  <button 
                    @click="downloadPublicKey" 
                    class="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm flex items-center"
                  >
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    {{ $t('tools.x509-certificate-decoder.buttons.downloadKey') }}
                  </button>
                  
                  <button 
                    v-if="certificate.publicKey.algorithm === 'RSA'" 
                    @click="exportPublicKeyPEM" 
                    class="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm flex items-center"
                  >
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a2.5 2.5 0 015 0v6M7 14h10M7 8h10"></path>
                    </svg>
                    {{ $t('tools.x509-certificate-decoder.buttons.exportPem') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Fingerprints Tab -->
        <div v-if="activeTab === 'fingerprints'" class="mb-4">
          <h4 class="font-medium text-lg mb-4">{{ $t('tools.x509-certificate-decoder.results.fingerprints') }}</h4>
          <div class="grid grid-cols-1 gap-4">
            <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-2">SHA-1</h5>
              <p class="break-all text-gray-800 dark:text-gray-200">{{ certificate.fingerprints.sha1 }}</p>
            </div>
            <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-2">SHA-256</h5>
              <p class="break-all text-gray-800 dark:text-gray-200">{{ certificate.fingerprints.sha256 }}</p>
            </div>
          </div>
        </div>
        
        <!-- Raw Certificate Tab -->
        <div v-if="activeTab === 'raw'" class="mb-4">
          <h4 class="font-medium text-lg mb-4">{{ $t('tools.x509-certificate-decoder.results.rawCertificate') }}</h4>
          <div class="overflow-auto">
            <pre class="px-4 py-3 bg-gray-700 text-gray-100 rounded overflow-x-auto text-sm">{{ certificateText }}</pre>
          </div>
        </div>
        
        <!-- Enhanced Certificate Chain Visualization -->
        <div v-if="showCertificateChain && pkcs12Certificates.length > 0" class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mt-4">
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-4">{{ $t('tools.x509-certificate-decoder.results.certificateChain') }} - {{ $t('tools.x509-certificate-decoder.results.enhancedView') }}</h4>
          
          <!-- Interactive chain visualization -->
          <div class="overflow-x-auto">
            <svg 
              :width="pkcs12Certificates.length * 200 + 100" 
              height="250" 
              class="certificate-chain-visualization"
            >
              <!-- Background -->
              <rect width="100%" height="100%" fill="#f9fafb" class="dark:fill-gray-800" rx="8" ry="8" />
              
              <!-- Certificate nodes -->
              <g v-for="(cert, index) in pkcs12Certificates" :key="index">
                <!-- Connection lines -->
                <line 
                  v-if="index < pkcs12Certificates.length - 1"
                  :x1="index * 200 + 150" 
                  y1="125" 
                  :x2="(index + 1) * 200 + 50" 
                  y2="125" 
                  stroke="#9ca3af" 
                  stroke-width="2"
                  stroke-dasharray="5,5"
                />
                
                <!-- Certificate box -->
                <rect 
                  :x="index * 200 + 50" 
                  y="75" 
                  width="150" 
                  height="100" 
                  rx="8" 
                  ry="8" 
                  :fill="index === currentCertIndex ? '#dbeafe' : '#ffffff'" 
                  :stroke="index === currentCertIndex ? '#3b82f6' : '#d1d5db'" 
                  stroke-width="2"
                  @click="switchToCertificate(index)"
                  class="cursor-pointer hover:stroke-blue-500 dark:hover:stroke-blue-400"
                />
                
                <!-- Certificate type indicator -->
                <circle 
                  :cx="index * 200 + 75" 
                  cy="95" 
                  r="15" 
                  :fill="index === 0 ? '#d1fae5' : index === pkcs12Certificates.length - 1 ? '#e0e7ff' : '#fee2e2'"
                />
                <text 
                  :x="index * 200 + 75" 
                  y="100" 
                  text-anchor="middle" 
                  font-size="12" 
                  font-weight="bold"
                  :fill="index === 0 ? '#059669' : index === pkcs12Certificates.length - 1 ? '#4f46e5' : '#dc2626'"
                >
                  {{ index === 0 ? 'EE' : index === pkcs12Certificates.length - 1 ? 'CA' : 'I' }}
                </text>
                
                <!-- Certificate info text -->
                <text 
                  :x="index * 200 + 125" 
                  y="105" 
                  text-anchor="middle" 
                  font-size="10"
                  class="fill-gray-700 dark:fill-gray-200"
                >
                  {{ getCertificateShortName(cert) }}
                </text>
                <text 
                  :x="index * 200 + 125" 
                  y="125" 
                  text-anchor="middle" 
                  font-size="8"
                  class="fill-gray-500 dark:fill-gray-400"
                >
                  {{ getCertificateValidityStatus(cert) }}
                </text>
                <text 
                  :x="index * 200 + 125" 
                  y="145" 
                  text-anchor="middle" 
                  font-size="8"
                  class="fill-gray-500 dark:fill-gray-400"
                >
                  {{ getCertificateIssuerShort(cert) }}
                </text>
                
                <!-- Current selection indicator -->
                <path 
                  v-if="index === currentCertIndex"
                  :d="`M${index * 200 + 125},185 l-10,-10 h20 z`" 
                  fill="#3b82f6"
                />
              </g>
              
              <!-- Legend -->
              <g transform="translate(50, 210)">
                <circle cx="10" cy="10" r="5" fill="#d1fae5" />
                <text x="20" y="14" font-size="10" class="fill-gray-700 dark:fill-gray-200">{{ $t('tools.x509-certificate-decoder.results.endEntity') }}</text>
                
                <circle cx="100" cy="10" r="5" fill="#fee2e2" />
                <text x="110" y="14" font-size="10" class="fill-gray-700 dark:fill-gray-200">{{ $t('tools.x509-certificate-decoder.results.intermediate') }}</text>
                
                <circle cx="200" cy="10" r="5" fill="#e0e7ff" />
                <text x="210" y="14" font-size="10" class="fill-gray-700 dark:fill-gray-200">{{ $t('tools.x509-certificate-decoder.results.rootCA') }}</text>
              </g>
            </svg>
          </div>
          
          <!-- Current certificate details summary -->
          <div v-if="currentCertIndex < pkcs12Certificates.length" class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-sm font-medium text-blue-800 dark:text-blue-300">
              {{ getCertificatePositionName(currentCertIndex, pkcs12Certificates.length) }}
            </div>
            <div class="mt-1 text-xs text-gray-600 dark:text-gray-400">
              {{ getCertificateSubject(pkcs12Certificates[currentCertIndex]) }}
            </div>
          </div>
        </div>
        
        <!-- Add more export options and clipboard buttons -->
        <div v-if="certificate" class="mt-6 space-y-4">
          <!-- Clipboard copy buttons for each section -->
          <div class="flex flex-wrap gap-2">
            <button 
              @click="copyToClipboard('basic')" 
              class="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm flex items-center"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
              {{ $t('tools.x509-certificate-decoder.buttons.copyBasic') }}
            </button>
            <button 
              @click="copyToClipboard('subject')" 
              class="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm flex items-center"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
              {{ $t('tools.x509-certificate-decoder.buttons.copySubject') }}
            </button>
            <button 
              @click="copyToClipboard('all')" 
              class="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm flex items-center"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
              {{ $t('tools.x509-certificate-decoder.buttons.copyAll') }}
            </button>
          </div>

          <!-- Export Options -->
          <div class="flex flex-wrap gap-2 justify-end">
            <button 
              @click="downloadReportPDF" 
              class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              {{ $t('tools.x509-certificate-decoder.buttons.downloadPdf') }}
            </button>
            <button 
              @click="downloadReportTXT" 
              class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              {{ $t('tools.x509-certificate-decoder.buttons.downloadTxt') }}
            </button>
            <button 
              @click="downloadReportHTML" 
              class="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              {{ $t('tools.x509-certificate-decoder.buttons.downloadHtml') }}
            </button>
            <button 
              @click="downloadReportJSON" 
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"></path>
              </svg>
              {{ $t('tools.x509-certificate-decoder.buttons.downloadJson') }}
            </button>
          </div>
        </div>
      </div>

        
    <!-- Tool instructions -->
    <div class="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg mb-4">
        <div class="flex items-start">
        <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="ml-3">
            <h3 class="text-sm font-medium text-blue-800 dark:text-blue-200">{{ $t('tools.x509-certificate-decoder.guide.title') }}</h3>
            <div class="mt-2 text-sm text-blue-700 dark:text-blue-300">
            <ol class="list-decimal pl-5 space-y-1">
                <li>{{ $t('tools.x509-certificate-decoder.guide.step1') }}</li>
                <li>{{ $t('tools.x509-certificate-decoder.guide.step2') }}</li>
                <li>{{ $t('tools.x509-certificate-decoder.guide.step3') }}</li>
                <li>{{ $t('tools.x509-certificate-decoder.guide.step4') }}</li>
            </ol>
            </div>
        </div>
        </div>
    </div>
    <X509CertificateDecoderArticle/>
</div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue'
import { Certificate, setEngine } from 'pkijs'
import { fromBER } from 'asn1js'
import { useI18n } from 'vue-i18n'
import jsPDF from 'jspdf'
import X509CertificateDecoderArticle from './X509CertificateDecoderArticle.vue'

// Define state variables
const loading = ref(false)
const error = ref(null)
const certificateText = ref('')
const selectedFile = ref(null)
const certificate = ref(null)
const activeTab = ref('basic')
const { t } = useI18n();

// Define tabs with internationalization
const tabs = [
  { id: 'basic', label: t('tools.x509-certificate-decoder.tabs.basic') },
  { id: 'subject', label: t('tools.x509-certificate-decoder.tabs.subject') },
  { id: 'extensions', label: t('tools.x509-certificate-decoder.tabs.extensions') },
  { id: 'publicKey', label: t('tools.x509-certificate-decoder.tabs.publicKey') },
  { id: 'fingerprints', label: t('tools.x509-certificate-decoder.tabs.fingerprints') },
  { id: 'raw', label: t('tools.x509-certificate-decoder.tabs.raw') },
]

// Import subtle crypto if available
onMounted(() => {
// Check for WebCrypto API support
if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    // Use a simpler approach without CryptoEngine constructor
    setEngine('newEngine', window.crypto, null);
}
})

const validityPercentage = computed(() => {
if (!certificate.value) return 0;

const now = new Date();
const validFrom = new Date(certificate.value.validFrom);
const validTo = new Date(certificate.value.validTo);

if (now < validFrom) return 0;
if (now > validTo) return 100;

const totalDuration = validTo - validFrom;
const elapsedDuration = now - validFrom;

return Math.round((elapsedDuration / totalDuration) * 100);
});

const daysUntilExpiry = computed(() => {
if (!certificate.value) return 0;

const now = new Date();
const validTo = new Date(certificate.value.validTo);

// If already expired, return negative days
if (now > validTo) {
    return -Math.ceil((now - validTo) / (1000 * 60 * 60 * 24));
}

// Return days until expiry
return Math.ceil((validTo - now) / (1000 * 60 * 60 * 24));
});

const expiryStatusClass = computed(() => {
if (!certificate.value) return '';

if (daysUntilExpiry.value < 0) {
    return 'bg-red-500 text-white';
} else if (daysUntilExpiry.value < 30) {
    return 'bg-yellow-500 text-white';
} else {
    return 'bg-green-500 text-white';
}
});

const expiryBarClass = computed(() => {
if (!certificate.value) return '';

if (daysUntilExpiry.value < 0) {
    return 'bg-red-500';
} else if (daysUntilExpiry.value < 30) {
    return 'bg-yellow-500';
} else {
    return 'bg-green-500';
}
});

const expiryStatusText = computed(() => {
if (!certificate.value) return '';

if (daysUntilExpiry.value < 0) {
    return t('tools.x509-certificate-decoder.results.expired', { days: Math.abs(daysUntilExpiry.value) });
} else {
    return t('tools.x509-certificate-decoder.results.expiresIn', { days: daysUntilExpiry.value });
}
});

const issuedTagClass = computed(() => {
return 'bg-blue-500 text-white';
});

// Certificate health status indicators
const certificateHealthStatus = computed(() => {
  if (!certificate.value) return '';
  
  if (daysUntilExpiry.value < 0) {
    return t('tools.x509-certificate-decoder.results.expired');
  } else if (daysUntilExpiry.value < 30) {
    return t('tools.x509-certificate-decoder.results.expiringSoon');
  } else {
    return t('tools.x509-certificate-decoder.results.valid');
  }
});

const certificateHealthClass = computed(() => {
  if (!certificate.value) return '';
  
  if (daysUntilExpiry.value < 0) {
    return 'border-red-500 text-white bg-red-500';
  } else if (daysUntilExpiry.value < 30) {
    return 'border-yellow-500 text-white bg-yellow-500';
  } else {
    return 'border-green-500 text-white bg-green-500';
  }
});

const certificateHealthTextClass = computed(() => {
  if (!certificate.value) return '';
  
  if (daysUntilExpiry.value < 0) {
    return 'text-red-600 dark:text-red-400';
  } else if (daysUntilExpiry.value < 30) {
    return 'text-yellow-600 dark:text-yellow-400';
  } else {
    return 'text-green-600 dark:text-green-400';
  }
});

const expiryDateClass = computed(() => {
  if (!certificate.value) return '';
  
  if (daysUntilExpiry.value < 0) {
    return 'bg-red-100 dark:bg-red-900';
  } else if (daysUntilExpiry.value < 30) {
    return 'bg-yellow-100 dark:bg-yellow-900';
  } else {
    return 'bg-green-100 dark:bg-green-900';
  }
});

// State for drag and drop
const isDragging = ref(false);

// Handle file drop
function handleFileDrop(event) {
  isDragging.value = false;
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    selectedFile.value = file;
    
    // 检查是否为.pfx或.p12格式
    if (file.name.endsWith('.pfx') || file.name.endsWith('.p12')) {
      processPKCS12File(file);
      return;
    }
    
    processFile(file);
  }
}

// Process uploaded file (reuse for both drag & drop and file input)
function processFile(file) {
  // Check if file is .pfx or .p12 format
  if (file.name.endsWith('.pfx') || file.name.endsWith('.p12')) {
    processPKCS12File(file);
    return;
  }
  
  // Handle other certificate formats
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    
    // Auto-detect file format based on extension and content
    if (file.name.endsWith('.der')) {
      // Binary DER format
      const arrayBuffer = content;
      try {
        const pemContent = convertDerToPem(arrayBuffer);
        certificateText.value = pemContent;
      } catch (err) {
        error.value = t('tools.x509-certificate-decoder.error.failedConversion');
      }
    } 
    // For .cer and .crt, they can be either DER or PEM
    else if (file.name.endsWith('.cer') || file.name.endsWith('.crt')) {
      // Try to detect if it's binary or text
      try {
        const textContent = arrayBufferToString(content);
        
        // If it contains PEM markers, it's a PEM file
        if (textContent.includes('-----BEGIN CERTIFICATE-----')) {
          certificateText.value = textContent;
        } 
        // Otherwise, try to treat it as DER
        else {
          try {
            // First attempt to decode as if it's a text file with base64 content
            const formatted = formatPEM(textContent);
            if (formatted) {
              certificateText.value = formatted;
            } else {
              // If that fails, treat it as binary DER
              const pemContent = convertDerToPem(content);
              certificateText.value = pemContent;
            }
          } catch (err) {
            error.value = t('tools.x509-certificate-decoder.error.undetectableFormat');
          }
        }
      } catch (err) {
        error.value = t('tools.x509-certificate-decoder.error.failedParse');
      }
    } 
    // PEM or other text format
    else {
      const textContent = arrayBufferToString(content);
      certificateText.value = textContent;
      
      // If it doesn't already have PEM headers, try to format it
      if (!textContent.includes('-----BEGIN CERTIFICATE-----')) {
        const formatted = formatPEM(textContent);
        if (formatted) {
          certificateText.value = formatted;
        }
      }
    }
  };
  
  // Binary files need ArrayBuffer, text files use text
  if (file.name.endsWith('.der')) {
    reader.readAsArrayBuffer(file);
  } else if (file.name.endsWith('.cer') || file.name.endsWith('.crt')) {
    // For .cer and .crt, we'll try ArrayBuffer first
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file);
  }
}

// Update the existing handleFileUpload to use the new processFile function
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  selectedFile.value = file;
  
  // 检查是否为.pfx或.p12格式
  if (file.name.endsWith('.pfx') || file.name.endsWith('.p12')) {
    processPKCS12File(file);
    return;
  }
  
  // 处理其他证书格式
  processFile(file);
}

// Add a helper function to detect if binary data is a certificate
function isLikelyCertificate(buffer) {
try {
    // Try to parse as ASN.1
    const asn1 = fromBER(buffer);
    return asn1.offset !== -1;
} catch (e) {
    return false;
}
}

// Convert DER to PEM format
function convertDerToPem(buffer) {
// Convert ArrayBuffer to base64
const base64 = arrayBufferToBase64(buffer)
// Format as PEM
return `-----BEGIN CERTIFICATE-----\n${formatBase64(base64)}\n-----END CERTIFICATE-----`
}

// Format base64 with line breaks every 64 characters
function formatBase64(base64) {
return base64.match(/.{1,64}/g).join('\n')
}

// Convert ArrayBuffer to base64
function arrayBufferToBase64(buffer) {
let binary = ''
const bytes = new Uint8Array(buffer)
for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
}
return window.btoa(binary)
}

// Compute certificate fingerprints
async function computeFingerprints(derBytes) {
try {
    const sha1 = await crypto.subtle.digest('SHA-1', derBytes)
    const sha256 = await crypto.subtle.digest('SHA-256', derBytes)
    
    return {
    sha1: bufferToHex(sha1),
    sha256: bufferToHex(sha256)
    }
} catch (err) {
    console.error('Error computing fingerprints:', err)
    return {
    sha1: 'Not available',
    sha256: 'Not available'
    }
}
}

// Convert buffer to hex string with colons
function bufferToHex(buffer) {
return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join(':').toUpperCase()
}

// Extract OID extensions
function getExtensionValue(extension) {
const extName = getExtensionName(extension.extnID)

let value = 'Unable to parse'
let valueFormatted = null
let valueType = 'text'

try {
    // Handle common extensions
    switch (extension.extnID) {
    case '2.5.29.14': // Subject Key Identifier
        value = bufferToHex(extension.parsedValue.valueBlock.valueHex)
        break
    case '2.5.29.35': // Authority Key Identifier
        if (extension.parsedValue.keyIdentifier) {
        value = bufferToHex(extension.parsedValue.keyIdentifier.valueBlock.valueHex)
        }
        break
    case '2.5.29.17': // Subject Alternative Name
        value = extension.parsedValue.altNames.map(name => {
        if (name.type === 2) return `DNS: ${name.value}`
        if (name.type === 1) return `Email: ${name.value}`
        if (name.type === 7) return `IP: ${name.value}`
        return `Type ${name.type}: ${name.value}`
        })
        valueType = 'list'
        break
    case '2.5.29.15': // Key Usage
        const usages = []
        if (extension.parsedValue.digitalSignature) usages.push('Digital Signature')
        if (extension.parsedValue.nonRepudiation) usages.push('Non Repudiation')
        if (extension.parsedValue.keyEncipherment) usages.push('Key Encipherment')
        if (extension.parsedValue.dataEncipherment) usages.push('Data Encipherment')
        if (extension.parsedValue.keyAgreement) usages.push('Key Agreement')
        if (extension.parsedValue.keyCertSign) usages.push('Certificate Sign')
        if (extension.parsedValue.cRLSign) usages.push('CRL Sign')
        value = usages
        valueType = 'list'
        break
    case '2.5.29.37': // Extended Key Usage
        value = extension.parsedValue.keyPurposes.map(purpose => {
        const knownPurposes = {
            '1.3.6.1.5.5.7.3.1': 'Server Authentication',
            '1.3.6.1.5.5.7.3.2': 'Client Authentication',
            '1.3.6.1.5.5.7.3.3': 'Code Signing',
            '1.3.6.1.5.5.7.3.4': 'Email Protection',
            '1.3.6.1.5.5.7.3.8': 'Time Stamping',
            '1.3.6.1.5.5.7.3.9': 'OCSP Signing'
        }
        return knownPurposes[purpose] || purpose
        })
        valueType = 'list'
        break
    case '2.5.29.19': // Basic Constraints
        value = `CA: ${extension.parsedValue.cA ? 'Yes' : 'No'}`
        if (extension.parsedValue.pathLenConstraint !== undefined) {
        value += `, Path Length: ${extension.parsedValue.pathLenConstraint}`
        }
        break
    default:
        // Try to get a string representation for unknown extensions
        try {
        valueFormatted = JSON.stringify(extension.parsedValue, (key, value) => {
            if (value instanceof ArrayBuffer || (value && value.byteLength !== undefined)) {
            return bufferToHex(value)
            }
            return value
        }, 2)
        } catch (err) {
        // If JSON conversion fails, provide hex representation
        if (extension.extnValue) {
            value = bufferToHex(extension.extnValue.valueBlock.valueHex)
        }
        }
    }
} catch (err) {
    console.error(`Error parsing extension ${extension.extnID}:`, err)
    // If parsing fails, try to get raw hex value
    if (extension.extnValue) {
    value = bufferToHex(extension.extnValue.valueBlock.valueHex)
    }
}

return {
    name: extName,
    oid: extension.extnID,
    critical: extension.critical,
    value,
    valueType,
    valueFormatted
}
}

// Get human-readable name for common OIDs with internationalization
function getExtensionName(oid) {
  const extensionOIDs = {
    '2.5.29.14': 'subjectKeyIdentifier',
    '2.5.29.15': 'keyUsage',
    '2.5.29.17': 'subjectAltName',
    '2.5.29.19': 'basicConstraints',
    '2.5.29.31': 'crlDistributionPoints',
    '2.5.29.32': 'certificatePolicies',
    '2.5.29.35': 'authorityKeyIdentifier',
    '2.5.29.37': 'extKeyUsage',
    '1.3.6.1.5.5.7.1.1': 'authorityInfoAccess',
    '1.3.6.1.4.1.11129.2.4.2': 'ctPrecertificateScts'
  }

  const oidKey = extensionOIDs[oid];
  
  if (oidKey) {
    return t(`tools.x509-certificate-decoder.extensions.${oidKey}`);
  }
  
  return null;
}

// Improved parseCertificate function for better format detection
async function parseCertificate(data) {
  try {
    let certData;

    // Try to automatically detect the format
    if (typeof data === 'string') {
      // Case 1: Standard PEM format with headers
      if (data.includes('-----BEGIN CERTIFICATE-----')) {
        const pemMatch = data.match(/-----BEGIN CERTIFICATE-----([^-]*)-----END CERTIFICATE-----/);
        if (pemMatch) {
          const base64 = pemMatch[1].replace(/\s/g, '');
          certData = stringToArrayBuffer(window.atob(base64));
        } else {
          throw new Error(t('tools.x509-certificate-decoder.error.invalidFormat'));
        }
      } 
      // Case 2: It might be just base64 data without PEM headers
      else {
        try {
          // Clean the input - remove whitespace
          const cleanData = data.replace(/\s/g, '');
          
          // Check if it's valid base64
          try {
            // Try to decode as base64
            const decoded = window.atob(cleanData);
            certData = stringToArrayBuffer(decoded);
            
            // Additional validation by trying to parse ASN.1
            const testParse = fromBER(certData);
            if (testParse.offset === -1) {
              throw new Error(t('tools.x509-certificate-decoder.error.invalidStructure'));
            }
          } catch (e) {
            // Not valid base64 or not a certificate
            throw new Error(t('tools.x509-certificate-decoder.error.invalidBase64'));
          }
        } catch (e) {
          throw new Error(t('tools.x509-certificate-decoder.error.failedParse') + ': ' + e.message);
        }
      }
    } 
    // Case 3: Binary DER format (from file upload)
    else if (data instanceof ArrayBuffer) {
      certData = data;
      
      // Validate if it's a proper ASN.1 structure
      const testParse = fromBER(certData);
      if (testParse.offset === -1) {
        throw new Error(t('tools.x509-certificate-decoder.error.invalidDer'));
      }
    } else {
      throw new Error(t('tools.x509-certificate-decoder.error.unsupportedType'));
    }

    // Parse ASN.1 BER encoded data
    const asn1 = fromBER(certData);
    if (asn1.offset === -1) {
      throw new Error(t('tools.x509-certificate-decoder.error.invalidAsn1'));
    }

    // Create certificate object from ASN.1 data
    const cert = new Certificate({ schema: asn1.result });

    // Calculate certificate fingerprints
    const fingerprints = await computeFingerprints(certData);

    // Parse subject and issuer
    const subject = {};
    const issuer = {};

    if (cert.subject.typesAndValues) {
    for (const attr of cert.subject.typesAndValues) {
        const type = attr.type;
        const value = attr.value.valueBlock.value;
        
        // Map OIDs to readable names
        const typeMap = {
        '2.5.4.3': 'CN',
        '2.5.4.6': 'C',
        '2.5.4.7': 'L',
        '2.5.4.8': 'ST',
        '2.5.4.10': 'O',
        '2.5.4.11': 'OU',
        '2.5.4.5': 'Serial Number',
        '2.5.4.42': 'GN',
        '2.5.4.43': 'Initials',
        '2.5.4.4': 'SN',
        '1.2.840.113549.1.9.1': 'E'
        };
        
        subject[typeMap[type] || type] = value;
    }
    }

    if (cert.issuer.typesAndValues) {
    for (const attr of cert.issuer.typesAndValues) {
        const type = attr.type;
        const value = attr.value.valueBlock.value;
        
        // Map OIDs to readable names
        const typeMap = {
        '2.5.4.3': 'CN',
        '2.5.4.6': 'C',
        '2.5.4.7': 'L',
        '2.5.4.8': 'ST',
        '2.5.4.10': 'O',
        '2.5.4.11': 'OU',
        '2.5.4.5': 'Serial Number',
        '2.5.4.42': 'GN',
        '2.5.4.43': 'Initials',
        '2.5.4.4': 'SN',
        '1.2.840.113549.1.9.1': 'E'
        };
        
        issuer[typeMap[type] || type] = value;
    }
    }

    // Parse public key
    let pubKeyAlgo = 'Unknown';
    let pubKeySize = 0;
    let pubKeyValue = '';

    try {
    if (cert.subjectPublicKeyInfo.algorithm.algorithmId === '1.2.840.113549.1.1.1') {
        pubKeyAlgo = 'RSA';
        // For RSA, try to get key size from modulus
        if (cert.subjectPublicKeyInfo.parsedKey) {
        const modulus = cert.subjectPublicKeyInfo.parsedKey.modulus;
        pubKeySize = modulus.valueBlock.valueHex.byteLength * 8;
        pubKeyValue = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
        }
    } else if (cert.subjectPublicKeyInfo.algorithm.algorithmId === '1.2.840.10045.2.1') {
        pubKeyAlgo = 'EC';
        // For EC, key size depends on the curve
        pubKeyValue = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
        // Try to determine curve and key size
        if (cert.subjectPublicKeyInfo.algorithm.algorithmParams) {
        const namedCurve = cert.subjectPublicKeyInfo.algorithm.algorithmParams.valueBlock.toString();
        if (namedCurve.includes('1.2.840.10045.3.1.7')) {
            pubKeySize = 256; // P-256
        } else if (namedCurve.includes('1.3.132.0.34')) {
            pubKeySize = 384; // P-384
        } else if (namedCurve.includes('1.3.132.0.35')) {
            pubKeySize = 521; // P-521
        }
        }
    } else {
        pubKeyAlgo = cert.subjectPublicKeyInfo.algorithm.algorithmId;
        pubKeyValue = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
    }
    } catch (err) {
    console.error('Error parsing public key:', err);
    pubKeyValue = 'Error parsing public key';
    }

    // Parse extensions
    const extensions = [];
    if (cert.extensions) {
    for (const ext of cert.extensions) {
        extensions.push(getExtensionValue(ext));
    }
    }

    // Create signature algorithm string
    let sigAlgo = 'Unknown';
    try {
    const algoMap = {
        '1.2.840.113549.1.1.5': 'SHA1withRSA',
        '1.2.840.113549.1.1.11': 'SHA256withRSA',
        '1.2.840.113549.1.1.12': 'SHA384withRSA',
        '1.2.840.113549.1.1.13': 'SHA512withRSA',
        '1.2.840.10045.4.3.2': 'SHA256withECDSA',
        '1.2.840.10045.4.3.3': 'SHA384withECDSA',
        '1.2.840.10045.4.3.4': 'SHA512withECDSA'
    };
    
    sigAlgo = algoMap[cert.signatureAlgorithm.algorithmId] || cert.signatureAlgorithm.algorithmId;
    } catch (err) {
    console.error('Error determining signature algorithm:', err);
    }

    // Format serial number as hex
    let serialNumberHex = '';
    try {
    serialNumberHex = bufferToHex(cert.serialNumber.valueBlock.valueHex).replace(/:/g, '');
    } catch (err) {
    console.error('Error formatting serial number:', err);
    serialNumberHex = 'Error parsing serial number';
    }

    // 解析签名值
    let signatureValue = '';
    try {
      signatureValue = bufferToHex(cert.signatureValue.valueBlock.valueHex);
    } catch (err) {
      console.error('Error parsing signature value:', err);
      signatureValue = 'Error parsing signature value';
    }
    
    // Return parsed certificate information
    return {
    version: `V${cert.version + 1}`,
    serialNumber: serialNumberHex,
    signatureAlgorithm: sigAlgo,
    validFrom: cert.notBefore.value.toString(),
    validTo: cert.notAfter.value.toString(),
    subject,
    issuer,
    publicKey: {
        algorithm: pubKeyAlgo,
        keySize: pubKeySize,
        value: pubKeyValue
    },
    extensions,
    fingerprints,
    signatureValue  // 添加签名值
    };
} catch (error) {
    console.error('Certificate parsing error:', error);
    throw new Error(`Failed to parse certificate: ${error.message}`);
}
}

// Decode certificate
async function decodeCertificate() {
loading.value = true
error.value = null
certificate.value = null

try {
    // Parse certificate data
    certificate.value = await parseCertificate(certificateText.value)
    activeTab.value = 'basic' // Reset to basic tab after decoding
}
catch (err) {
    console.error('Error decoding certificate:', err)
    error.value = err.message || 'Failed to decode certificate'
    certificate.value = null
} finally {
    loading.value = false
}
}

function stringToArrayBuffer(str) {
const buf = new ArrayBuffer(str.length);
const bufView = new Uint8Array(buf);
for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
}
return buf;
}

function arrayBufferToString(buffer) {
const arr = new Uint8Array(buffer);
let str = '';
for (let i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i]);
}
return str;
}

function formatPEM(certString) {
// Check if already in PEM format
if (certString.includes('-----BEGIN CERTIFICATE-----')) {
    return certString;
}

// Try to handle base64 encoded certificate
try {
    // Remove whitespace
    const cleanedCert = certString.replace(/\s/g, '');
    
    // Test if it's valid base64
    try {
    window.atob(cleanedCert);
    } catch (e) {
    return null; // Not valid base64
    }
    
    // Format as PEM with line breaks every 64 characters
    const formattedBase64 = cleanedCert.match(/.{1,64}/g).join('\n');
    return `-----BEGIN CERTIFICATE-----\n${formattedBase64}\n-----END CERTIFICATE-----`;
} catch (e) {
    return null;
}
}

// Load sample certificate
function loadSampleCertificate() {
certificateText.value = `-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIUdTEDPGOuQBWD6MqW1w761W3pZE0wDQYJKoZIhvcNAQEL
BQAwRTELMAkGA1UEBhMCVVMxEzARBgNVBAgMClNvbWUtU3RhdGUxITAfBgNVBAoM
GEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDAeFw0yMzAxMDEwMDAwMDBaFw0yNDAx
MDEwMDAwMDBaMEUxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMSEw
HwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwggIiMA0GCSqGSIb3DQEB
AQUAA4ICDwAwggIKAoICAQC6SWQjJkgArMWGjf0g/JgQECsL8HjP+rAwlOPKMSrK
9XQYxGM0L2ZFh5SYcbslU7R7FRjP17J6Y2BsU/5imj96AfYxGQYGQ9CwOzozGCCh
QHXYpGSQHp8IK7t+kVwuIL46MZFGsuL51d5eMRazaS4v01qKXPZjkN+22Qv2BHG9
ZLVpx/EqwI0w5Z2XgGtZ7+C+NfXh3GlRnCgUFAHNnESsAoOvQF6c3yXUdb/QfRcL
u3ZtKz50R5rC/XQfFESvbT5COExaAoXYyoTbTfcXRFHyK8YWESQmPzwQqpUNMmql
ARIewTWx/fxz0qEr4CIkQK/QiRBM6EPm/yVL9DMApUqiMjO2kzUZxK8qjbzgRuAY
YsxKp5hiRUYeuXzfj3AgTCN6y1SIYwbGBaNiF/2zVNlNY/c3T8X/EN0uh9IS4HHY
VL1kWQLUJBtNlYr2L1SLI16/vwn9mG/QxN5T6MKQWLSzUqKPvYXx3rKQIUkCRBT6
OKGaQFOJwDKgpEYY6kIx1osaWbkVsQKTFj0A4+IrVRWkiJ6I+TJyBmQjFiPyQm8F
QsGhhpTBsMcb1XFjxBQVJJDLlKmhQ3uXQnZ2mFTmLpfI4+uBx8KuLmqCrFpFeYFB
LE+TBs0z5JcPdYfaFI5YaLm7WZEUhO8aKWcOVBNsZ3jFzalGvZUhrzMZKJZ3KLe+
nQIDAQABo1MwUTAdBgNVHQ4EFgQUKsPaQC76Y9jgBqTjvJ5LzQUlzNowHwYDVR0j
BBgwFoAUKsPaQC76Y9jgBqTjvJ5LzQUlzNowDwYDVR0TAQH/BAUwAwEB/zANBgkq
hkiG9w0BAQsFAAOCAgEAosMid75lwZOH2Q2MQoY1eFqDUNQ2xx2gdvCgReMX1VAA
tKQNh1SYJ8/JtI21pAeYKh9PzuJR+hZN6pYxOA/o5HAxKCKM6cSICPFvBZYHAc5K
rUwN88+yBaYXzfGRq7M+QDvzGgKgRjAEY/EYMjZUbGwkjPhwUGtwNbWaIQHg6GR3
l+ha6BG0YbxnnrORZeXzos1ITtWu6aVf1HLgA7NMNQRV4jO4M+fO+aAQCYJSF5+6
ISMqESRMPKHmnDXyj1Gr3SjELRwWw/6B/vmWZM2x+XaxgYS5QwxY+Vn1ZAKvMK93
wJBUEp2JtBGkNKGCFwro8gWjqCh1x6JvP0mTRGA6SQ2rvGvw1jUmpVuZbbsBECke
skVL3R1hGGTt70elw9UE6PT6LYK/qlR3aprsGkrWlEFjvlrKzy9h0UbolkBVKrRk
Z+0xxDRKjNS0FjBTMZ5StVZM2f/z8wHI0/6adXLgXYtLHiHnkTiRwbpNynwIYqRh
F0EdVZOz83oHm36tqBs0HmQTnqvGFQNyXnezwZa52a9WS8k/3vEKbSZ0Gn73zOaM
mP+M/IJB3jIfUZ+JB8+dDTa80sSDhZe9evRXfnGy9V6cu+lHH0latiYCpZCwqlx5
6C9PEf1JKIyQzJmO9KN3N7E0QN05TFgJG9TopAP+XJBNu56XzBZz0RyQPqv7ksE=
-----END CERTIFICATE-----`;
decodeCertificate();
}

// Download report functions
function downloadReportTXT() {
  if (!certificate.value) return;
  
  const content = generateReportContent();
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `certificate-report-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadReportPDF() {
  if (!certificate.value) return;
  
  const content = generateReportContent();
  
  // 使用不依赖外部字体的方式
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  // 使用UTF-8编码
  try {
    // 设置标题
    doc.setFontSize(18);
    // 使用内置字体，避免加载外部字体
    doc.setFont("helvetica", "bold");
    doc.text(t('tools.x509-certificate-decoder.report.title'), 14, 20);
    
    // 添加生成日期
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${t('tools.x509-certificate-decoder.report.generatedOn')}: ${new Date().toLocaleString()}`, 14, 30);
    
    // 设置内容字体大小
    doc.setFontSize(12);
    
    // 使用图片方式处理内容，解决中文显示问题
    const textCanvas = document.createElement('canvas');
    const ctx = textCanvas.getContext('2d');
    textCanvas.width = 800;
    textCanvas.height = 1600;
    
    // 设置白色背景
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);
    
    // 设置文本
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    
    // 绘制内容，处理换行
    const lines = content.split('\n');
    let y = 30;
    for (const line of lines) {
      ctx.fillText(line, 20, y);
      y += 20;
    }
    
    // 将Canvas转换为图片并添加到PDF
    const imgData = textCanvas.toDataURL('image/png');
    doc.addImage(imgData, 'PNG', 10, 40, 190, y - 20);
    
    // 保存PDF
    doc.save(`certificate-report-${new Date().toISOString().slice(0, 10)}.pdf`);
  } catch (e) {
    console.error("PDF generation error:", e);
    alert("Error generating PDF, downloading as text instead");
    downloadReportTXT();
  }
}

function generateReportContent() {
  if (!certificate.value) return '';
  
  let content = `${t('tools.x509-certificate-decoder.report.title')}\n`;
  content += `${t('tools.x509-certificate-decoder.report.generatedOn')}: ${new Date().toLocaleString()}\n\n`;
  
  // Basic information
  content += `=== ${t('tools.x509-certificate-decoder.tabs.basic')} ===\n`;
  content += `${t('tools.x509-certificate-decoder.results.serialNumber')}: ${certificate.value.serialNumber}\n`;
  content += `${t('tools.x509-certificate-decoder.results.version')}: ${certificate.value.version}\n`;
  content += `${t('tools.x509-certificate-decoder.results.sigAlg')}: ${certificate.value.signatureAlgorithm}\n`;
  content += `${t('tools.x509-certificate-decoder.results.validFrom')}: ${certificate.value.validFrom}\n`;
  content += `${t('tools.x509-certificate-decoder.results.validTo')}: ${certificate.value.validTo}\n`;
  
  // Validity status
  if (daysUntilExpiry.value < 0) {
    content += `${t('tools.x509-certificate-decoder.results.expired', { days: Math.abs(daysUntilExpiry.value) })}\n`;
  } else {
    content += `${t('tools.x509-certificate-decoder.results.expiresIn', { days: daysUntilExpiry.value })}\n`;
  }
  
  // Subject
  content += `\n=== ${t('tools.x509-certificate-decoder.results.subject')} ===\n`;
  for (const [key, value] of Object.entries(certificate.value.subject)) {
    content += `${key}: ${value}\n`;
  }
  
  // Issuer
  content += `\n=== ${t('tools.x509-certificate-decoder.results.issuer')} ===\n`;
  for (const [key, value] of Object.entries(certificate.value.issuer)) {
    content += `${key}: ${value}\n`;
  }
  
  // Public Key
  content += `\n=== ${t('tools.x509-certificate-decoder.results.publicKey')} ===\n`;
  content += `${t('tools.x509-certificate-decoder.results.algorithm')}: ${certificate.value.publicKey.algorithm}\n`;
  content += `${t('tools.x509-certificate-decoder.results.keySize')}: ${certificate.value.publicKey.keySize} bits\n`;
  
  // Fingerprints
  content += `\n=== ${t('tools.x509-certificate-decoder.results.fingerprints')} ===\n`;
  content += `SHA-1: ${certificate.value.fingerprints.sha1}\n`;
  content += `SHA-256: ${certificate.value.fingerprints.sha256}\n`;
  
  return content;
}

// Replace the PKCS12 processing function with this version
async function processPKCS12File(file) {
  try {
    loading.value = true;
    error.value = null;
    
    // Read file as ArrayBuffer
    const arrayBuffer = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
    
    // Ask for password
    const password = prompt(t('tools.x509-certificate-decoder.pkcs12.passwordPrompt'), '');
    if (password === null) {
      loading.value = false;
      return; // User cancelled
    }
    
    // Use simpler approach without PKCS12 constructor
    // Convert to base64 and set as PEM
    const base64 = arrayBufferToBase64(arrayBuffer);
    certificateText.value = `-----BEGIN CERTIFICATE-----\n${formatBase64(base64)}\n-----END CERTIFICATE-----`;
    
    // Attempt to decode normally
    await decodeCertificate();
    
  } catch (err) {
    console.error('Error processing PKCS#12 file:', err);
    error.value = err.message || t('tools.x509-certificate-decoder.error.unableToProcessP12');
  } finally {
    loading.value = false;
  }
}

// Add additional state for PKCS#12
const pkcs12Certificates = ref([]);
const showCertificateChain = ref(false);
const currentCertIndex = ref(0);

// Function to switch to a different certificate in the chain
function switchToCertificate(index) {
  if (!pkcs12Certificates.value || index >= pkcs12Certificates.value.length) return;
  
  try {
    currentCertIndex.value = index;
    const certRaw = pkcs12Certificates.value[index].toSchema().toBER(false);
    const pemContent = convertDerToPem(certRaw);
    certificateText.value = pemContent;
    decodeCertificate();
  } catch (err) {
    console.error('Error switching certificate:', err);
    error.value = err.message;
  }
}

// Fix the certificate usage computed properties to better detect usage
const isServerAuth = computed(() => {
  if (!certificate.value || !certificate.value.extensions) return false;
  
  const extKeyUsage = certificate.value.extensions.find(ext => ext.oid === '2.5.29.37');
  if (extKeyUsage && extKeyUsage.value && Array.isArray(extKeyUsage.value)) {
    return extKeyUsage.value.some(usage => 
      usage.includes('Server Authentication') || 
      usage.includes('1.3.6.1.5.5.7.3.1')
    );
  }
  
  // Check KeyUsage extension for digital signature or key encipherment (common for server certs)
  const keyUsage = certificate.value.extensions.find(ext => ext.oid === '2.5.29.15');
  if (keyUsage && keyUsage.value && Array.isArray(keyUsage.value)) {
    return keyUsage.value.includes('Digital Signature') || keyUsage.value.includes('Key Encipherment');
  }
  
  return false;
});

const isClientAuth = computed(() => {
  if (!certificate.value || !certificate.value.extensions) return false;
  
  const extKeyUsage = certificate.value.extensions.find(ext => ext.oid === '2.5.29.37');
  if (extKeyUsage && extKeyUsage.value && Array.isArray(extKeyUsage.value)) {
    return extKeyUsage.value.some(usage => 
      usage.includes('Client Authentication') || 
      usage.includes('1.3.6.1.5.5.7.3.2')
    );
  }
  
  return false;
});

const isCodeSigning = computed(() => {
  if (!certificate.value || !certificate.value.extensions) return false;
  
  const extKeyUsage = certificate.value.extensions.find(ext => ext.oid === '2.5.29.37');
  if (extKeyUsage && extKeyUsage.value && Array.isArray(extKeyUsage.value)) {
    return extKeyUsage.value.some(usage => 
      usage.includes('Code Signing') || 
      usage.includes('1.3.6.1.5.5.7.3.3')
    );
  }
  
  return false;
});

const isEmailProtection = computed(() => {
  if (!certificate.value || !certificate.value.extensions) return false;
  
  const extKeyUsage = certificate.value.extensions.find(ext => ext.oid === '2.5.29.37');
  if (extKeyUsage && extKeyUsage.value && Array.isArray(extKeyUsage.value)) {
    return extKeyUsage.value.some(usage => 
      usage.includes('Email Protection') || 
      usage.includes('1.3.6.1.5.5.7.3.4')
    );
  }
  
  return false;
});

// Add a computed property to detect if any usage is found
const hasAnyUsage = computed(() => {
  return isServerAuth.value || isClientAuth.value || isCodeSigning.value || isEmailProtection.value;
});

function getCertificateSubject(cert) {
  try {
    const subjectList = [];
    if (cert.subject && cert.subject.typesAndValues) {
      for (const attr of cert.subject.typesAndValues) {
        if (attr.type === '2.5.4.3') { // Common Name
          return attr.value.valueBlock.value;
        }
        subjectList.push(attr.value.valueBlock.value);
      }
    }
    return subjectList.length > 0 ? subjectList[0] : 'Unknown Subject';
  } catch (e) {
    return 'Unknown Subject';
  }
}

function getCertificateIssuer(cert) {
  try {
    const issuerList = [];
    if (cert.issuer && cert.issuer.typesAndValues) {
      for (const attr of cert.issuer.typesAndValues) {
        if (attr.type === '2.5.4.3') { // Common Name
          return `Issuer: ${attr.value.valueBlock.value}`;
        }
        issuerList.push(attr.value.valueBlock.value);
      }
    }
    return issuerList.length > 0 ? `Issuer: ${issuerList[0]}` : 'Unknown Issuer';
  } catch (e) {
    return 'Unknown Issuer';
  }
}

// Custom OID Parser
const customOID = ref('');
const customOIDResult = ref('');

// OID lookup dictionary
const oidDictionary = {
  // Common X.509 OIDs
  '2.5.29.14': 'Subject Key Identifier',
  '2.5.29.15': 'Key Usage',
  '2.5.29.17': 'Subject Alternative Name',
  '2.5.29.19': 'Basic Constraints',
  '2.5.29.31': 'CRL Distribution Points',
  '2.5.29.32': 'Certificate Policies',
  '2.5.29.35': 'Authority Key Identifier',
  '2.5.29.37': 'Extended Key Usage',
  '1.3.6.1.5.5.7.1.1': 'Authority Information Access',
  '1.3.6.1.4.1.11129.2.4.2': 'ctPrecertificateScts',
  
  // Extended Key Usage values
  '1.3.6.1.5.5.7.3.1': 'Server Authentication',
  '1.3.6.1.5.5.7.3.2': 'Client Authentication', 
  '1.3.6.1.5.5.7.3.3': 'Code Signing',
  '1.3.6.1.5.5.7.3.4': 'Email Protection',
  '1.3.6.1.5.5.7.3.8': 'Time Stamping',
  '1.3.6.1.5.5.7.3.9': 'OCSP Signing',
  
  // Other common OIDs
  '1.2.840.113549.1.1.1': 'RSA Encryption',
  '1.2.840.113549.1.1.5': 'SHA1 with RSA Signature',
  '1.2.840.113549.1.1.11': 'SHA256 with RSA Signature',
  '1.2.840.10045.2.1': 'Elliptic Curve Public Key',
  '1.2.840.10045.4.3.2': 'ECDSA with SHA256',
  '1.2.840.10045.4.3.3': 'ECDSA with SHA384',
  '2.5.4.3': 'Common Name',
  '2.5.4.6': 'Country Name',
  '2.5.4.7': 'Locality Name',
  '2.5.4.8': 'State or Province Name',
  '2.5.4.10': 'Organization Name',
  '2.5.4.11': 'Organizational Unit Name',
  
  // Certificate Transparency OIDs
  '1.3.6.1.4.1.11129.2.4.2': 'Certificate Transparency SCT List',
  
  // Certificate Policies
  '2.23.140.1.2.1': 'Domain Validated (DV) Certificate',
  '2.23.140.1.2.2': 'Organization Validated (OV) Certificate',
  '2.23.140.1.2.3': 'Individual Validated (IV) Certificate',
  '2.23.140.1.1': 'Extended Validation (EV) Certificate'
};

// Lookup custom OID
function lookupCustomOID() {
  if (!customOID.value) return;
  
  customOIDResult.value = ''; // 重置值
  
  // 首先检查字典
  if (oidDictionary[customOID.value]) {
    customOIDResult.value = oidDictionary[customOID.value];
    
    // 如果证书中有此OID，也显示其值
    if (certificate.value && certificate.value.extensions) {
      const foundExt = certificate.value.extensions.find(ext => ext.oid === customOID.value);
      if (foundExt) {
        if (typeof foundExt.value === 'string') {
          customOIDValue.value = foundExt.value;
        } else if (Array.isArray(foundExt.value)) {
          customOIDValue.value = foundExt.value.join('\n');
        } else if (foundExt.valueFormatted) {
          customOIDValue.value = foundExt.valueFormatted;
        }
      }
    }
    return;
  }
  
  // 如果不在字典中，检查当前证书
  if (certificate.value && certificate.value.extensions) {
    const foundExt = certificate.value.extensions.find(ext => ext.oid === customOID.value);
    if (foundExt) {
      if (foundExt.name) {
        customOIDResult.value = foundExt.name;
      } else {
        customOIDResult.value = t('tools.x509-certificate-decoder.customOID.unknownName');
      }
      
      if (typeof foundExt.value === 'string') {
        customOIDValue.value = foundExt.value;
      } else if (Array.isArray(foundExt.value)) {
        customOIDValue.value = foundExt.value.join('\n');
      } else if (foundExt.valueFormatted) {
        customOIDValue.value = foundExt.valueFormatted;
      } else {
        try {
          // 尝试从原始值中提取信息
          customOIDValue.value = JSON.stringify(foundExt, null, 2);
        } catch (e) {
          customOIDValue.value = t('tools.x509-certificate-decoder.customOID.complexValue');
        }
      }
      return;
    }
  }
  
  // 如果都找不到
  customOIDResult.value = t('tools.x509-certificate-decoder.customOID.notFound');
}

// Copy certificate info to clipboard
function copyToClipboard(section, customValue = null) {
  if (!certificate.value && !customValue) return;
  
  let content = '';
  
  if (customValue) {
    content = customValue;
  } else {
    switch(section) {
      case 'basic':
        content = `${t('tools.x509-certificate-decoder.results.serialNumber')}: ${certificate.value.serialNumber}\n`;
        content += `${t('tools.x509-certificate-decoder.results.version')}: ${certificate.value.version}\n`;
        content += `${t('tools.x509-certificate-decoder.results.sigAlg')}: ${certificate.value.signatureAlgorithm}\n`;
        content += `${t('tools.x509-certificate-decoder.results.validFrom')}: ${certificate.value.validFrom}\n`;
        content += `${t('tools.x509-certificate-decoder.results.validTo')}: ${certificate.value.validTo}\n`;
        break;
      
      case 'subject':
        content = `${t('tools.x509-certificate-decoder.results.subject')}:\n`;
        for (const [key, value] of Object.entries(certificate.value.subject)) {
          content += `${key}: ${value}\n`;
        }
        content += `\n${t('tools.x509-certificate-decoder.results.issuer')}:\n`;
        for (const [key, value] of Object.entries(certificate.value.issuer)) {
          content += `${key}: ${value}\n`;
        }
        break;
      
      case 'all':
        content = generateReportContent();
        break;
      
      case 'publicKey':
        content = formattedKeyValue.value;
        break;
      
      case 'signature':
        content = certificate.value.signatureValue;
        break;
    }
  }
  
  // 复制到剪贴板
  navigator.clipboard.writeText(content)
    .then(() => {
      // 显示成功消息
      alert(t('tools.x509-certificate-decoder.messages.copiedToClipboard'));
    })
    .catch(err => {
      console.error('Error copying to clipboard:', err);
      alert(t('tools.x509-certificate-decoder.messages.copyError'));
    });
}

// Download HTML report
function downloadReportHTML() {
  if (!certificate.value) return;
  
  const htmlContent = generateHTMLReport();
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `certificate-report-${new Date().toISOString().slice(0, 10)}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Download JSON report
function downloadReportJSON() {
  if (!certificate.value) return;
  
  // Create a clean JSON object from the certificate data
  const jsonData = {
    basicInfo: {
      version: certificate.value.version,
      serialNumber: certificate.value.serialNumber,
      signatureAlgorithm: certificate.value.signatureAlgorithm,
      validFrom: certificate.value.validFrom,
      validTo: certificate.value.validTo,
      daysUntilExpiry: daysUntilExpiry.value
    },
    subject: certificate.value.subject,
    issuer: certificate.value.issuer,
    publicKey: certificate.value.publicKey,
    extensions: certificate.value.extensions,
    fingerprints: certificate.value.fingerprints
  };
  
  const jsonContent = JSON.stringify(jsonData, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `certificate-report-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Generate HTML report
function generateHTMLReport() {
  if (!certificate.value) return '';
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${t('tools.x509-certificate-decoder.report.title')}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    h1 { color: #2c3e50; }
    h2 { color: #3498db; margin-top: 20px; }
    .certificate-info { margin-bottom: 20px; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
    th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
    th { background-color: #f2f2f2; }
    .validity { padding: 10px; margin: 10px 0; border-radius: 4px; }
    .valid { background-color: #d4edda; color: #155724; }
    .expiring { background-color: #fff3cd; color: #856404; }
    .expired { background-color: #f8d7da; color: #721c24; }
    .footer { margin-top: 40px; font-size: 12px; color: #7f8c8d; }
  </style>
</head>
<body>
  <h1>${t('tools.x509-certificate-decoder.report.title')}</h1>
  <p>${t('tools.x509-certificate-decoder.report.generatedOn')}: ${new Date().toLocaleString()}</p>
  
  <h2>${t('tools.x509-certificate-decoder.tabs.basic')}</h2>
  <div class="certificate-info">
    <table>
      <tr>
        <th>${t('tools.x509-certificate-decoder.results.serialNumber')}</th>
        <td>${certificate.value.serialNumber}</td>
      </tr>
      <tr>
        <th>${t('tools.x509-certificate-decoder.results.version')}</th>
        <td>${certificate.value.version}</td>
      </tr>
      <tr>
        <th>${t('tools.x509-certificate-decoder.results.sigAlg')}</th>
        <td>${certificate.value.signatureAlgorithm}</td>
      </tr>
      <tr>
        <th>${t('tools.x509-certificate-decoder.results.validFrom')}</th>
        <td>${certificate.value.validFrom}</td>
      </tr>
      <tr>
        <th>${t('tools.x509-certificate-decoder.results.validTo')}</th>
        <td>${certificate.value.validTo}</td>
      </tr>
    </table>
    
    <div class="validity ${daysUntilExpiry.value < 0 ? 'expired' : daysUntilExpiry.value < 30 ? 'expiring' : 'valid'}">
      ${daysUntilExpiry.value < 0 
        ? t('tools.x509-certificate-decoder.results.expired', { days: Math.abs(daysUntilExpiry.value) })
        : t('tools.x509-certificate-decoder.results.expiresIn', { days: daysUntilExpiry.value })}
    </div>
  </div>
  
  <h2>${t('tools.x509-certificate-decoder.results.subject')}</h2>
  <table>
    <tr>
      <th>${t('tools.x509-certificate-decoder.results.field')}</th>
      <th>${t('tools.x509-certificate-decoder.results.value')}</th>
    </tr>
    ${Object.entries(certificate.value.subject).map(([key, value]) => `
    <tr>
      <td>${key}</td>
      <td>${value}</td>
    </tr>
    `).join('')}
  </table>
  
  <h2>${t('tools.x509-certificate-decoder.results.issuer')}</h2>
  <table>
    <tr>
      <th>${t('tools.x509-certificate-decoder.results.field')}</th>
      <th>${t('tools.x509-certificate-decoder.results.value')}</th>
    </tr>
    ${Object.entries(certificate.value.issuer).map(([key, value]) => `
    <tr>
      <td>${key}</td>
      <td>${value}</td>
    </tr>
    `).join('')}
  </table>
  
  <h2>${t('tools.x509-certificate-decoder.results.extensions')}</h2>
  ${certificate.value.extensions && certificate.value.extensions.length > 0 
    ? `<table>
        <tr>
          <th>${t('tools.x509-certificate-decoder.results.field')}</th>
          <th>${t('tools.x509-certificate-decoder.results.value')}</th>
          <th>${t('tools.x509-certificate-decoder.results.critical')}</th>
        </tr>
        ${certificate.value.extensions.map(ext => `
        <tr>
          <td>${ext.name || ext.oid}</td>
          <td>${Array.isArray(ext.value) ? ext.value.join('<br>') : ext.value}</td>
          <td>${ext.critical ? '✓' : ''}</td>
        </tr>
        `).join('')}
      </table>`
    : `<p>${t('tools.x509-certificate-decoder.results.noExtensions')}</p>`}
  
  <h2>${t('tools.x509-certificate-decoder.results.publicKey')}</h2>
  <table>
    <tr>
      <th>${t('tools.x509-certificate-decoder.results.algorithm')}</th>
      <td>${certificate.value.publicKey.algorithm}</td>
    </tr>
    <tr>
      <th>${t('tools.x509-certificate-decoder.results.keySize')}</th>
      <td>${certificate.value.publicKey.keySize} bits</td>
    </tr>
  </table>
  
  <h2>${t('tools.x509-certificate-decoder.results.fingerprints')}</h2>
  <table>
    <tr>
      <th>SHA-1</th>
      <td>${certificate.value.fingerprints.sha1}</td>
    </tr>
    <tr>
      <th>SHA-256</th>
      <td>${certificate.value.fingerprints.sha256}</td>
    </tr>
  </table>
  
  <div class="footer">
    <p>Generated by X.509 Certificate Decoder Tool</p>
  </div>
</body>
</html>`;

  return html;
}

// 添加自定义OID值的显示
const customOIDValue = ref('');

// 添加公钥格式选择
const keyFormats = [
  { id: 'hex', label: 'HEX' },
  { id: 'base64', label: 'Base64' },
  { id: 'der', label: 'DER' }
];
const activeKeyFormat = ref('hex');

// 格式化公钥
const formattedKeyValue = computed(() => {
  if (!certificate.value || !certificate.value.publicKey) return '';
  
  const keyValue = certificate.value.publicKey.value;
  
  switch (activeKeyFormat.value) {
    case 'base64':
      // 去掉冒号，转换为连续的十六进制
      const hexWithoutColons = keyValue.replace(/:/g, '');
      // 每两个字符为一组，转换为数字
      const bytes = [];
      for (let i = 0; i < hexWithoutColons.length; i += 2) {
        bytes.push(parseInt(hexWithoutColons.substr(i, 2), 16));
      }
      // 转换为Uint8Array，然后转为base64
      const uint8Array = new Uint8Array(bytes);
      return btoa(String.fromCharCode.apply(null, uint8Array));
      
    case 'der':
      return `[${keyValue.length / 3} bytes DER-encoded data]`;
      
    case 'hex':
    default:
      return keyValue;
  }
});

// 下载公钥
function downloadPublicKey() {
  if (!certificate.value || !certificate.value.publicKey) return;
  
  let content = formattedKeyValue.value;
  let fileName = `public-key-${new Date().toISOString().slice(0, 10)}`;
  let type = 'text/plain';
  
  if (activeKeyFormat.value === 'der') {
    // 转换为二进制
    const hexWithoutColons = certificate.value.publicKey.value.replace(/:/g, '');
    const bytes = new Uint8Array(hexWithoutColons.length / 2);
    for (let i = 0; i < hexWithoutColons.length; i += 2) {
      bytes[i/2] = parseInt(hexWithoutColons.substr(i, 2), 16);
    }
    
    content = bytes;
    fileName += '.der';
    type = 'application/octet-stream';
  } else {
    fileName += activeKeyFormat.value === 'base64' ? '.b64' : '.txt';
  }
  
  // 创建Blob并下载
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 导出PEM格式公钥
function exportPublicKeyPEM() {
  if (!certificate.value || !certificate.value.publicKey || certificate.value.publicKey.algorithm !== 'RSA') return;
  
  // 转换为base64
  const hexWithoutColons = certificate.value.publicKey.value.replace(/:/g, '');
  const bytes = [];
  for (let i = 0; i < hexWithoutColons.length; i += 2) {
    bytes.push(parseInt(hexWithoutColons.substr(i, 2), 16));
  }
  const uint8Array = new Uint8Array(bytes);
  const base64 = btoa(String.fromCharCode.apply(null, uint8Array));
  
  // 格式化为PEM，每64个字符一行
  const formattedBase64 = base64.match(/.{1,64}/g).join('\n');
  const pemContent = `-----BEGIN PUBLIC KEY-----\n${formattedBase64}\n-----END PUBLIC KEY-----`;
  
  // 下载PEM文件
  const blob = new Blob([pemContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `public-key-${new Date().toISOString().slice(0, 10)}.pem`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Enhanced algorithm mapping for better algorithm display
const enhancedAlgorithmMap = {
  // RSA Algorithms
  '1.2.840.113549.1.1.1': 'RSA',
  '1.2.840.113549.1.1.5': 'SHA1withRSA',
  '1.2.840.113549.1.1.11': 'SHA256withRSA',
  '1.2.840.113549.1.1.12': 'SHA384withRSA',
  '1.2.840.113549.1.1.13': 'SHA512withRSA',
  
  // ECDSA Algorithms
  '1.2.840.10045.2.1': 'ECDSA',
  '1.2.840.10045.4.3.2': 'SHA256withECDSA',
  '1.2.840.10045.4.3.3': 'SHA384withECDSA',
  '1.2.840.10045.4.3.4': 'SHA512withECDSA',
  
  // EdDSA Algorithms 
  '1.3.101.112': 'Ed25519',
  '1.3.101.113': 'Ed448',
  
  // GOST Algorithms (Russian standards)
  '1.2.643.2.2.3': 'GOST R 34.10-2001',
  '1.2.643.7.1.1.1.1': 'GOST R 34.10-2012 256-bit',
  '1.2.643.7.1.1.1.2': 'GOST R 34.10-2012 512-bit',
  
  // Curve identifiers for EC
  '1.2.840.10045.3.1.7': 'secp256r1 (NIST P-256)',
  '1.3.132.0.34': 'secp384r1 (NIST P-384)',
  '1.3.132.0.35': 'secp521r1 (NIST P-521)',
  '1.3.132.0.10': 'secp256k1 (Bitcoin curve)'
};

// Add Enhanced Public Key Information Display
function getEnhancedKeyDetails(cert) {
  const result = {
    algorithm: 'Unknown',
    keySize: 0,
    value: '',
    details: {}
  };
  
  try {
    if (cert.subjectPublicKeyInfo.algorithm.algorithmId === '1.2.840.113549.1.1.1') {
      // RSA Key
      result.algorithm = 'RSA';
      if (cert.subjectPublicKeyInfo.parsedKey) {
        const modulus = cert.subjectPublicKeyInfo.parsedKey.modulus;
        result.keySize = modulus.valueBlock.valueHex.byteLength * 8;
        result.value = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
        
        // Enhanced details for RSA
        result.details = {
          modulus: bufferToHex(modulus.valueBlock.valueHex),
          publicExponent: cert.subjectPublicKeyInfo.parsedKey.publicExponent.toString(),
          modulusLength: result.keySize
        };
      }
    } else if (cert.subjectPublicKeyInfo.algorithm.algorithmId === '1.2.840.10045.2.1') {
      // EC Key
      result.algorithm = 'ECDSA';
      result.value = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
      
      // Determine curve and key size
      if (cert.subjectPublicKeyInfo.algorithm.algorithmParams) {
        const namedCurve = cert.subjectPublicKeyInfo.algorithm.algorithmParams.valueBlock.toString();
        
        // Map curves to human-readable names and sizes
        const curveMap = {
          '1.2.840.10045.3.1.7': { name: 'secp256r1 (NIST P-256)', size: 256 },
          '1.3.132.0.34': { name: 'secp384r1 (NIST P-384)', size: 384 },
          '1.3.132.0.35': { name: 'secp521r1 (NIST P-521)', size: 521 },
          '1.3.132.0.10': { name: 'secp256k1 (Bitcoin curve)', size: 256 }
        };
        
        if (curveMap[namedCurve]) {
          result.details.curve = curveMap[namedCurve].name;
          result.keySize = curveMap[namedCurve].size;
        } else {
          result.details.curveOID = namedCurve;
        }
      }
    } else if (cert.subjectPublicKeyInfo.algorithm.algorithmId === '1.3.101.112') {
      // Ed25519
      result.algorithm = 'Ed25519';
      result.keySize = 256;
      result.value = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
      result.details.keyType = 'Edwards-curve Digital Signature Algorithm (EdDSA)';
    } else if (cert.subjectPublicKeyInfo.algorithm.algorithmId === '1.3.101.113') {
      // Ed448
      result.algorithm = 'Ed448';
      result.keySize = 448;
      result.value = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
      result.details.keyType = 'Edwards-curve Digital Signature Algorithm (EdDSA)';
    } else {
      // Other algorithms
      result.algorithm = enhancedAlgorithmMap[cert.subjectPublicKeyInfo.algorithm.algorithmId] || 
                          cert.subjectPublicKeyInfo.algorithm.algorithmId;
      result.value = bufferToHex(cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
    }
  } catch (err) {
    console.error('Error parsing public key details:', err);
  }
  
  return result;
}

// Helper functions for enhanced certificate chain visualization
function getCertificateShortName(cert) {
  try {
    if (cert.subject && cert.subject.typesAndValues) {
      // First try to get Common Name
      for (const attr of cert.subject.typesAndValues) {
        if (attr.type === '2.5.4.3') { // CN
          const cn = attr.value.valueBlock.value;
          // Shorten if too long
          return cn.length > 20 ? cn.substring(0, 18) + '...' : cn;
        }
      }
      
      // Fallback to Organization
      for (const attr of cert.subject.typesAndValues) {
        if (attr.type === '2.5.4.10') { // O
          return attr.value.valueBlock.value;
        }
      }
    }
    return 'Unknown';
  } catch (e) {
    return 'Unknown';
  }
}

function getCertificateValidityStatus(cert) {
  try {
    const now = new Date();
    const notBefore = cert.notBefore.value;
    const notAfter = cert.notAfter.value;
    
    if (now < notBefore) return t('tools.x509-certificate-decoder.results.notYetValid');
    if (now > notAfter) return t('tools.x509-certificate-decoder.results.expired');
    
    // 计算到期前的天数
    const daysUntil = Math.ceil((notAfter - now) / (1000 * 60 * 60 * 24));
    return `${t('tools.x509-certificate-decoder.results.valid')} (${daysUntil} ${t('tools.x509-certificate-decoder.results.daysRemaining')})`;
  } catch (e) {
    return t('tools.x509-certificate-decoder.results.notAvailable');
  }
}

function getCertificateIssuerShort(cert) {
  try {
    if (cert.issuer && cert.issuer.typesAndValues) {
      for (const attr of cert.issuer.typesAndValues) {
        if (attr.type === '2.5.4.3') { // CN
          return `${t('tools.x509-certificate-decoder.results.issuedBy')}: ${attr.value.valueBlock.value}`;
        }
      }
    }
    return t('tools.x509-certificate-decoder.results.unknownIssuer');
  } catch (e) {
    return t('tools.x509-certificate-decoder.results.unknownIssuer');
  }
}

function getCertificatePositionName(index, total) {
  if (index === 0) return t('tools.x509-certificate-decoder.results.endEntityCert');
  if (index === total - 1) return t('tools.x509-certificate-decoder.results.rootCert');
  return `${t('tools.x509-certificate-decoder.results.intermediateCert')} ${index}`;
}

// Utility functions for key details display
function formatKeyName(key) {
  // Convert camelCase to Title Case with spaces
  return key.replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}

function formatKeyValue(key, value) {
  // Format certain key values for better display
  if (key === 'modulus' && value.length > 50) {
    return value.substring(0, 20) + '...' + value.substring(value.length - 20);
  }
  return value;
}
</script>