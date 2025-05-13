<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.hash-calculator.input.selectAlgorithm') }}
          </label>
          <select 
            v-model="selectedHash" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option v-for="hash in hashAlgorithms" :key="hash.value" :value="hash.value">
              {{ hash.name }}
            </option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.hash-calculator.input.title') }}
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="inputMode = 'text'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="inputMode === 'text' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.hash-calculator.input.text') }}
            </button>
            <button 
              @click="inputMode = 'file'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="inputMode === 'file' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.hash-calculator.input.file') }}
            </button>
          </div>
        </div>
        
        <div v-if="inputMode === 'text'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.hash-calculator.input.encoding') }}
          </label>
          <select 
            v-model="encoding" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="utf8">UTF-8</option>
            <option value="ascii">ASCII</option>
            <option value="latin1">Latin1</option>
          </select>
        </div>
      </div>
      
      <div class="mb-4">
        <div v-if="inputMode === 'text'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.hash-calculator.input.title') }}
          </label>
          <textarea 
            v-model="inputText" 
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :placeholder="$t('tools.hash-calculator.input.textPlaceholder')"
          ></textarea>
        </div>
        
        <div v-else>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.hash-calculator.input.fileSelect') }}
          </label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750">
              <div class="flex flex-col items-center justify-center pt-5 pb-6" v-if="!selectedFile">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-medium">{{ $t('tools.hash-calculator.input.fileSelect') }}</span> {{ $t('tools.hash-calculator.input.fileDrop') }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {{ $t('tools.hash-calculator.input.localProcessing') }}
                </p>
              </div>
              <div class="flex flex-col items-center justify-center pt-5 pb-6" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-sm text-gray-700 dark:text-gray-300 font-medium">{{ $t('tools.hash-calculator.input.fileSelected', {name: selectedFile.name}) }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {{ $t('tools.hash-calculator.input.fileSize', {size: formatFileSize(selectedFile.size)}) }}
                </p>
                <button 
                  @click.prevent="selectedFile = null" 
                  class="text-xs text-red-500 hover:text-red-700 mt-2"
                >
                  {{ $t('tools.hash-calculator.input.removeFile') }}
                </button>
              </div>
              <input 
                type="file" 
                class="hidden" 
                @change="handleFileUpload"
              />
            </label>
          </div>
        </div>
      </div>
      
      <div class="flex gap-4 items-center">
        <div class="flex items-center">
          <input type="checkbox" id="autoCalculate" v-model="autoCalculate" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
          <label for="autoCalculate" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.hash-calculator.options.autoCalculate') }}</label>
        </div>
        
        <div class="flex items-center">
          <input type="checkbox" id="showAllHashes" v-model="showAllHashes" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
          <label for="showAllHashes" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.hash-calculator.options.showAllHashes') }}</label>
        </div>
        
        <button 
          @click="calculateHash" 
          :disabled="isCalculating || (!inputText && inputMode === 'text') || (!selectedFile && inputMode === 'file')"
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          v-if="!autoCalculate"
        >
          <span v-if="isCalculating" class="inline-flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ $t('tools.hash-calculator.input.calculating') }}
          </span>
          <span v-else>{{ $t('tools.hash-calculator.input.calculate') }}</span>
        </button>
      </div>
    </div>
    
    <!-- 结果显示区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-6" v-if="hashResult">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.hash-calculator.results.title') }}</h3>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ getSelectedAlgorithmName() }} {{ $t('tools.hash-calculator.results.hashValue') }}
        </label>
        <div class="flex">
          <input 
            type="text" 
            readonly 
            :value="hashResult" 
            class="flex-grow px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          <button 
            @click="copyToClipboard(hashResult)" 
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 显示哈希值的不同格式表示 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.hash-calculator.results.upperHexFormat') }}
          </label>
          <div class="flex">
            <input 
              type="text" 
              readonly 
              :value="hashResult.toUpperCase()" 
              class="flex-grow px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              @click="copyToClipboard(hashResult.toUpperCase())" 
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Base64 {{ $t('tools.hash-calculator.input.encoding') }}
          </label>
          <div class="flex">
            <input 
              type="text" 
              readonly 
              :value="hashResultBase64" 
              class="flex-grow px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              @click="copyToClipboard(hashResultBase64)" 
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 全部哈希值结果 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-6" v-if="showAllHashes && Object.keys(allHashResults).length > 0">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.hash-calculator.results.allHashesTitle') }}</h3>
        <div class="flex gap-2">
          <button 
            @click="allHashDisplayFormat = 'hex'" 
            class="px-3 py-1 text-sm rounded-md border"
            :class="allHashDisplayFormat === 'hex' ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
          >
            {{ $t('tools.hash-calculator.results.hexFormat') }}
          </button>
          <button 
            @click="allHashDisplayFormat = 'base64'" 
            class="px-3 py-1 text-sm rounded-md border"
            :class="allHashDisplayFormat === 'base64' ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
          >
            Base64
          </button>
          <button 
            @click="exportAllHashes" 
            class="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-650"
          >
            {{ $t('tools.hash-calculator.results.export') }}
          </button>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.hash-calculator.results.algorithm') }}</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">{{ $t('tools.hash-calculator.results.digest') }}</th>
              <th class="px-4 py-2 w-10"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="(result, algorithm) in allHashResults" :key="algorithm" class="hover:bg-gray-50 dark:hover:bg-gray-750">
              <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{{ result.name }}</td>
              <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                {{ allHashDisplayFormat === 'hex' ? result.hex : result.base64 }}
              </td>
              <td class="px-4 py-3 text-right">
                <button 
                  @click="copyToClipboard(allHashDisplayFormat === 'hex' ? result.hex : result.base64)" 
                  class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- 哈希验证区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700" v-if="hashResult">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.hash-calculator.verification.title') }}</h3>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ $t('tools.hash-calculator.verification.inputVerifyHash') }}
        </label>
        <input 
          type="text" 
          v-model="verifyHash" 
          :placeholder="$t('tools.hash-calculator.verification.inputVerifyHash')"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
      </div>
      
      <div v-if="verifyHash" class="mt-3">
        <div v-if="verifyHash.toLowerCase() === hashResult.toLowerCase()" class="p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-green-700 dark:text-green-400">{{ $t('tools.hash-calculator.verification.matches') }}</span>
        </div>
        <div v-else class="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="text-red-700 dark:text-red-400">{{ $t('tools.hash-calculator.verification.doesNotMatch') }}</span>
        </div>
      </div>
    </div>
    
    <!-- 算法说明 -->
    <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.hash-calculator.algorithmDetails.title') }}</h3>
      
      <div v-if="selectedHash" class="text-sm text-gray-600 dark:text-gray-400">
        <div class="mb-2" v-if="getSelectedAlgorithmDescription()">
          <p>{{ getSelectedAlgorithmDescription() }}</p>
        </div>
        
        <div class="mb-2" v-if="getSelectedAlgorithmUsage()">
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.hash-calculator.algorithmDetails.usage') }}</h4>
          <p>{{ getSelectedAlgorithmUsage() }}</p>
        </div>
        
        <div v-if="getSelectedAlgorithmSecurity()">
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('tools.hash-calculator.algorithmDetails.safe') }}</h4>
          <p>{{ getSelectedAlgorithmSecurity() }}</p>
        </div>
      </div>
    </div>

    <!-- 添加文章部分 -->
    <HashCalculatorArticle />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import HashCalculatorArticle from './HashCalculatorArticle.vue'
import CryptoJS from 'crypto-js'
import sm3 from 'sm-crypto'
import md2 from 'js-md2'
import md4 from 'js-md4'
import { shake128, shake256, sha3_224, sha3_256, sha3_384, sha3_512, keccak224, keccak256, keccak384, keccak512, cshake128, cshake256 } from 'js-sha3'
import blake2b from 'blake2b'
import blake2s from 'blake2s'
import { blake3 } from 'hash-wasm'
import crc32 from 'crc-32'
import murmurHash3 from 'murmurhash3js'
import { sha512_224, sha512_256 } from 'js-sha512'
import { Buffer } from 'buffer'

// Make Buffer globally available
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

// 状态变量
const { t } = useI18n()
const inputMode = ref('text')
const selectedHash = ref('sha256')
const inputText = ref('')
const selectedFile = ref(null)
const hashResult = ref('')
const hashResultBase64 = ref('')
const verifyHash = ref('')
const isCalculating = ref(false)
const encoding = ref('utf8')
const textChangeTimeout = ref(null)
const autoCalculate = ref(true)
const showAllHashes = ref(false)
const allHashResults = ref({})
const allHashDisplayFormat = ref('hex') // 默认显示十六进制格式

// 可用的哈希算法
const hashAlgorithms = [
  { 
    name: t('tools.hash-calculator.algorithmDetails.crc32.name'), 
    value: 'crc32', 
    description: t('tools.hash-calculator.algorithmDetails.crc32.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.crc32.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.crc32.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.md2.name'), 
    value: 'md2', 
    description: t('tools.hash-calculator.algorithmDetails.md2.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.md2.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.md2.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.md4.name'), 
    value: 'md4', 
    description: t('tools.hash-calculator.algorithmDetails.md4.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.md4.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.md4.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.md5.name'), 
    value: 'md5', 
    description: t('tools.hash-calculator.algorithmDetails.md5.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.md5.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.md5.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha1.name'), 
    value: 'sha1', 
    description: t('tools.hash-calculator.algorithmDetails.sha1.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha1.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha1.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha224.name'), 
    value: 'sha224', 
    description: t('tools.hash-calculator.algorithmDetails.sha224.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha224.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha224.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha256.name'), 
    value: 'sha256', 
    description: t('tools.hash-calculator.algorithmDetails.sha256.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha256.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha256.security') 
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.dsha256.name'),
    value: 'dsha256',
    description: t('tools.hash-calculator.algorithmDetails.dsha256.description'),
    usage: t('tools.hash-calculator.algorithmDetails.dsha256.usage'),
    security: t('tools.hash-calculator.algorithmDetails.dsha256.security')
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha384.name'), 
    value: 'sha384', 
    description: t('tools.hash-calculator.algorithmDetails.sha384.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha384.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha384.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha512.name'), 
    value: 'sha512', 
    description: t('tools.hash-calculator.algorithmDetails.sha512.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha512.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha512.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha512_224.name'), 
    value: 'sha512_224', 
    description: t('tools.hash-calculator.algorithmDetails.sha512_224.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha512_224.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha512_224.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha512_256.name'), 
    value: 'sha512_256', 
    description: t('tools.hash-calculator.algorithmDetails.sha512_256.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha512_256.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha512_256.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha3_224.name'), 
    value: 'sha3_224', 
    description: t('tools.hash-calculator.algorithmDetails.sha3_224.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha3_224.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha3_224.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha3_256.name'), 
    value: 'sha3_256', 
    description: t('tools.hash-calculator.algorithmDetails.sha3_256.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha3_256.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha3_256.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha3_384.name'), 
    value: 'sha3_384', 
    description: t('tools.hash-calculator.algorithmDetails.sha3_384.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha3_384.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha3_384.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sha3_512.name'), 
    value: 'sha3_512', 
    description: t('tools.hash-calculator.algorithmDetails.sha3_512.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sha3_512.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sha3_512.security') 
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.keccak224.name'),
    value: 'keccak224',
    description: t('tools.hash-calculator.algorithmDetails.keccak224.description'),
    usage: t('tools.hash-calculator.algorithmDetails.keccak224.usage'),
    security: t('tools.hash-calculator.algorithmDetails.keccak224.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.keccak256.name'),
    value: 'keccak256',
    description: t('tools.hash-calculator.algorithmDetails.keccak256.description'),
    usage: t('tools.hash-calculator.algorithmDetails.keccak256.usage'),
    security: t('tools.hash-calculator.algorithmDetails.keccak256.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.keccak384.name'),
    value: 'keccak384',
    description: t('tools.hash-calculator.algorithmDetails.keccak384.description'),
    usage: t('tools.hash-calculator.algorithmDetails.keccak384.usage'),
    security: t('tools.hash-calculator.algorithmDetails.keccak384.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.keccak512.name'),
    value: 'keccak512',
    description: t('tools.hash-calculator.algorithmDetails.keccak512.description'),
    usage: t('tools.hash-calculator.algorithmDetails.keccak512.usage'),
    security: t('tools.hash-calculator.algorithmDetails.keccak512.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.shake128.name'),
    value: 'shake128',
    description: t('tools.hash-calculator.algorithmDetails.shake128.description'),
    usage: t('tools.hash-calculator.algorithmDetails.shake128.usage'),
    security: t('tools.hash-calculator.algorithmDetails.shake128.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.shake256.name'),
    value: 'shake256',
    description: t('tools.hash-calculator.algorithmDetails.shake256.description'),
    usage: t('tools.hash-calculator.algorithmDetails.shake256.usage'),
    security: t('tools.hash-calculator.algorithmDetails.shake256.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.cshake128.name'),
    value: 'cshake128',
    description: t('tools.hash-calculator.algorithmDetails.cshake128.description'),
    usage: t('tools.hash-calculator.algorithmDetails.cshake128.usage'),
    security: t('tools.hash-calculator.algorithmDetails.cshake128.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.cshake256.name'),
    value: 'cshake256',
    description: t('tools.hash-calculator.algorithmDetails.cshake256.description'),
    usage: t('tools.hash-calculator.algorithmDetails.cshake256.usage'),
    security: t('tools.hash-calculator.algorithmDetails.cshake256.security')
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.ripemd160.name'), 
    value: 'ripemd160', 
    description: t('tools.hash-calculator.algorithmDetails.ripemd160.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.ripemd160.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.ripemd160.security') 
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.blake2b.name'),
    value: 'blake2b',
    description: t('tools.hash-calculator.algorithmDetails.blake2b.description'),
    usage: t('tools.hash-calculator.algorithmDetails.blake2b.usage'),
    security: t('tools.hash-calculator.algorithmDetails.blake2b.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.blake2s.name'),
    value: 'blake2s',
    description: t('tools.hash-calculator.algorithmDetails.blake2s.description'),
    usage: t('tools.hash-calculator.algorithmDetails.blake2s.usage'),
    security: t('tools.hash-calculator.algorithmDetails.blake2s.security')
  },
  {
    name: t('tools.hash-calculator.algorithmDetails.blake3.name'),
    value: 'blake3',
    description: t('tools.hash-calculator.algorithmDetails.blake3.description'),
    usage: t('tools.hash-calculator.algorithmDetails.blake3.usage'),
    security: t('tools.hash-calculator.algorithmDetails.blake3.security')
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.sm3.name'), 
    value: 'sm3', 
    description: t('tools.hash-calculator.algorithmDetails.sm3.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.sm3.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.sm3.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.murmur3_x86_32.name'), 
    value: 'murmur3_x86_32', 
    description: t('tools.hash-calculator.algorithmDetails.murmur3_x86_32.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.murmur3_x86_32.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.murmurx8632.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.murmur3_x86_128.name'), 
    value: 'murmur3_x86_128', 
    description: t('tools.hash-calculator.algorithmDetails.murmur3_x86_128.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.murmur3_x86_128.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.murmur3_x86_128.security') 
  },
  { 
    name: t('tools.hash-calculator.algorithmDetails.murmur3_x64_128.name'), 
    value: 'murmur3_x64_128', 
    description: t('tools.hash-calculator.algorithmDetails.murmur3_x64_128.description'), 
    usage: t('tools.hash-calculator.algorithmDetails.murmur3_x64_128.usage'), 
    security: t('tools.hash-calculator.algorithmDetails.murmur3_x64_128.security') 
  },
]

async function calculateTextHash(selectedHash, text) {
  try {
    switch (selectedHash) {
      case 'crc32':
        const crc32Result = (crc32.str(text) >>> 0).toString(16).padStart(8, '0');
        return {
          hex: crc32Result,
          base64: Buffer.from(crc32Result, 'hex').toString('base64')
        }
      case 'md2':
        const md2Result = md2(text);
        return {
          hex: md2Result,
          base64: Buffer.from(md2Result, 'hex').toString('base64')
        }
      case 'md4':
        const md4Result = md4(text);
        return {
          hex: md4Result,
          base64: Buffer.from(md4Result, 'hex').toString('base64')
        }
      case 'md5':
        const md5Result = CryptoJS.MD5(text).toString(CryptoJS.enc.Hex);
        return {
          hex: md5Result,
          base64: Buffer.from(md5Result, 'hex').toString('base64')
        }
      case 'sha1':
        const sha1Result = CryptoJS.SHA1(text).toString(CryptoJS.enc.Hex);
        return {
          hex: sha1Result,
          base64: Buffer.from(sha1Result, 'hex').toString('base64')
        }
      case 'sha224':
        const sha224Result = CryptoJS.SHA224(text).toString(CryptoJS.enc.Hex);
        return {
          hex: sha224Result,
          base64: Buffer.from(sha224Result, 'hex').toString('base64')
        }
      case 'sha256':
        const sha256Result = CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
        return {
          hex: sha256Result,
          base64: Buffer.from(sha256Result, 'hex').toString('base64')
        }
      case 'dsha256':
        const firstHash = CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex)
        const dsha256Result = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(firstHash)).toString(CryptoJS.enc.Hex)
        return {
          hex: dsha256Result,
          base64: Buffer.from(dsha256Result, 'hex').toString('base64')
        }
      case 'sha384':
        const sha384Result = CryptoJS.SHA384(text).toString(CryptoJS.enc.Hex);
        return {
          hex: sha384Result,
          base64: Buffer.from(sha384Result, 'hex').toString('base64')
        }
      case 'sha512':
        const sha512Result = CryptoJS.SHA512(text).toString(CryptoJS.enc.Hex);
        return {
          hex: sha512Result,
          base64: Buffer.from(sha512Result, 'hex').toString('base64')
        }
      case 'sha512_224':
        const sha512_224Result = sha512_224(text)
        return {
          hex: sha512_224Result,
          base64: Buffer.from(sha512_224Result, 'hex').toString('base64')
        }
      case 'sha512_256':
        const sha512_256Result = sha512_256(text)
        return {
          hex: sha512_256Result,
          base64: Buffer.from(sha512_256Result, 'hex').toString('base64')
        }
      case 'sha3_224':
        const sha3_224Result = sha3_224(text)
        return {
          hex: sha3_224Result,
          base64: Buffer.from(sha3_224Result, 'hex').toString('base64')
        }
      case 'sha3_256':
        const sha3_256Result = sha3_256(text)
        return {
          hex: sha3_256Result,
          base64: Buffer.from(sha3_256Result, 'hex').toString('base64')
        }
      case 'sha3_384':
        const sha3_384Result = sha3_384(text)
        return {
          hex: sha3_384Result,
          base64: Buffer.from(sha3_384Result, 'hex').toString('base64')
        }
      case 'sha3_512':
        const sha3_512Result = sha3_512(text)
        return {
          hex: sha3_512Result,
          base64: Buffer.from(sha3_512Result, 'hex').toString('base64')
        }
      case 'keccak224':
        const keccak224Result = keccak224(text)
        return {
          hex: keccak224Result,
          base64: Buffer.from(keccak224Result, 'hex').toString('base64')
        }
      case 'keccak256':
        const keccak256Result = keccak256(text)
        return {
          hex: keccak256Result,
          base64: Buffer.from(keccak256Result, 'hex').toString('base64')
        }
      case 'keccak384':
        const keccak384Result = keccak384(text)
        return {
          hex: keccak384Result,
          base64: Buffer.from(keccak384Result, 'hex').toString('base64')
        }
      case 'keccak512':
        const keccak512Result = keccak512(text)
        return {
          hex: keccak512Result,
          base64: Buffer.from(keccak512Result, 'hex').toString('base64')
        }
      case 'shake128':
        const shake128Instance = shake128.create(128)
        shake128Instance.update(text)
        const shake128Result = shake128Instance.hex()
        return {
          hex: shake128Result,
          base64: Buffer.from(shake128Result, 'hex').toString('base64')
        }
      case 'shake256':
        const shake256Instance = shake256.create(256)
        shake256Instance.update(text)
        const shake256Result = shake256Instance.hex()
        return {
          hex: shake256Result,
          base64: Buffer.from(shake256Result, 'hex').toString('base64')
        }
      case 'cshake128':
        const cshake128Output = cshake128.create(128, '', '')
        cshake128Output.update(text)
        const cshake128Result = cshake128Output.hex()
        return {
          hex: cshake128Result,
          base64: Buffer.from(cshake128Result, 'hex').toString('base64')
        }
      case 'cshake256':
        const cshake256Output = cshake256.create(256, '', '')
        cshake256Output.update(text)
        const cshake256Result = cshake256Output.hex()
        return {
          hex: cshake256Result,
          base64: Buffer.from(cshake256Result, 'hex').toString('base64')
        }
      case 'ripemd160':
        const ripemd160Result = CryptoJS.RIPEMD160(text).toString(CryptoJS.enc.Hex)
        return {
          hex: ripemd160Result,
          base64: Buffer.from(ripemd160Result, 'hex').toString('base64')
        }
      case 'blake2b':
        const blake2bOutput = blake2b(64)
        blake2bOutput.update(Buffer.from(text))
        const blake2bResult = Buffer.from(blake2bOutput.digest()).toString('hex')
        return {
          hex: blake2bResult,
          base64: Buffer.from(blake2bResult, 'hex').toString('base64')
        }
      case 'blake2s':
        const blake2sOutput = blake2s(32)
        blake2sOutput.update(Buffer.from(text))
        const blake2sResult = Buffer.from(blake2sOutput.digest()).toString('hex')
        return {
          hex: blake2sResult,
          base64: Buffer.from(blake2sResult, 'hex').toString('base64')
        }
      case 'blake3':
        const blake3Result = await blake3(text)
        return {
          hex: blake3Result,
          base64: Buffer.from(blake3Result, 'hex').toString('base64')
        }
      case 'sm3':
        const sm3Result = sm3.sm3(text)
    return {
          hex: sm3Result,
          base64: Buffer.from(sm3Result, 'hex').toString('base64')
        }
      case 'murmur3_x86_32':
        const murmur32Result = murmurHash3.x86.hash32(text).toString()
        return {
          hex: murmur32Result,
          base64: Buffer.from(murmur32Result, 'hex').toString('base64')
        }
      case 'murmur3_x86_128':
        const murmur128Result = murmurHash3.x86.hash128(text)
        return {
          hex: murmur128Result,
          base64: Buffer.from(murmur128Result, 'hex').toString('base64')
        }
      case 'murmur3_x64_128':
        const murmur64Result = murmurHash3.x64.hash128(text)
        return {
          hex: murmur64Result,
          base64: Buffer.from(murmur64Result, 'hex').toString('base64')
        }
      default:
        console.error(t('tools.hash-calculator.messages.algorithmError'));
    return {
          hex: '',
          base64: ''
        }
    }
  } catch (error) {
    return Promise.reject(new Error(`${t('tools.hash-calculator.messages.processingError')}: ${error.message}`))
  }
}

// 计算文件的哈希值
function calculateFileHash(selectedHash) {
  return new Promise((resolve, reject) => {
    if (!selectedFile.value) {
      reject(new Error(t('tools.hash-calculator.messages.readError')))
      return
    }
    
    const reader = new FileReader()
    
    reader.onload = async function(event) {
      try {
        const fileData = new Uint8Array(event.target.result);
        
        switch (selectedHash) {
          case 'crc32':
            const crc32Result = (crc32.buf(fileData) >>> 0).toString(16).padStart(8, '0');
            resolve({
              hex: crc32Result,
              base64: Buffer.from(crc32Result, 'hex').toString('base64')
            });
            return;
          
          case 'md2':
            const md2Result = md2(Buffer.from(fileData).toString('binary'));
            resolve({
              hex: md2Result,
              base64: Buffer.from(md2Result, 'hex').toString('base64')
            });
            return;
          
          case 'md4':
            const md4Result = md4(Buffer.from(fileData).toString('binary'));
            resolve({
              hex: md4Result,
              base64: Buffer.from(md4Result, 'hex').toString('base64')
            });
            return;
          
        case 'md5':
            const md5Result = CryptoJS.MD5(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: md5Result,
              base64: Buffer.from(md5Result, 'hex').toString('base64')
            });
            return;
          
        case 'sha1':
            const sha1Result = CryptoJS.SHA1(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: sha1Result,
              base64: Buffer.from(sha1Result, 'hex').toString('base64')
            });
            return;
          
          case 'sha224':
            const sha224Result = CryptoJS.SHA224(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: sha224Result,
              base64: Buffer.from(sha224Result, 'hex').toString('base64')
            });
            return;
          
        case 'sha256':
            const sha256Result = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: sha256Result,
              base64: Buffer.from(sha256Result, 'hex').toString('base64')
            });
            return;
          
          case 'dsha256':
            const firstHashData = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            const dsha256Result = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(firstHashData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: dsha256Result,
              base64: Buffer.from(dsha256Result, 'hex').toString('base64')
            });
            return;
          
        case 'sha384':
            const sha384Result = CryptoJS.SHA384(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: sha384Result,
              base64: Buffer.from(sha384Result, 'hex').toString('base64')
            });
            return;
          
        case 'sha512':
            const sha512Result = CryptoJS.SHA512(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: sha512Result,
              base64: Buffer.from(sha512Result, 'hex').toString('base64')
            });
            return;
          
          case 'sha512_224':
            const sha512_224Result = sha512_224(fileData);
            resolve({
              hex: sha512_224Result,
              base64: Buffer.from(sha512_224Result, 'hex').toString('base64')
            });
            return;
          
          case 'sha512_256':
            const sha512_256Result = sha512_256(fileData);
            resolve({
              hex: sha512_256Result,
              base64: Buffer.from(sha512_256Result, 'hex').toString('base64')
            });
            return;
          
          case 'sha3_224':
            const sha3_224Result = sha3_224(fileData);
            resolve({
              hex: sha3_224Result,
              base64: Buffer.from(sha3_224Result, 'hex').toString('base64')
            });
            return;
          
        case 'sha3_256':
            const sha3_256Result = sha3_256(fileData);
            resolve({
              hex: sha3_256Result,
              base64: Buffer.from(sha3_256Result, 'hex').toString('base64')
            });
            return;

          case 'sha3_384':
            const sha3_384Result = sha3_384(fileData);
            resolve({
              hex: sha3_384Result,
              base64: Buffer.from(sha3_384Result, 'hex').toString('base64')
            });
            return;

        case 'sha3_512':
            const sha3_512Result = sha3_512(fileData);
            resolve({
              hex: sha3_512Result,
              base64: Buffer.from(sha3_512Result, 'hex').toString('base64')
            });
            return;
          case 'keccak224':
            const keccak224Instance = keccak224.create();
            keccak224Instance.update(fileData);
            const keccak224Result = keccak224Instance.hex();
      resolve({
              hex: keccak224Result,
              base64: Buffer.from(keccak224Result, 'hex').toString('base64')
            });
            return;
          
          case 'keccak256':
            const keccak256Instance = keccak256.create();
            keccak256Instance.update(fileData);
            const keccak256Result = keccak256Instance.hex();
      resolve({
              hex: keccak256Result,
              base64: Buffer.from(keccak256Result, 'hex').toString('base64')
            });
            return;
          
          case 'keccak384':
            const keccak384Instance = keccak384.create();
            keccak384Instance.update(fileData);
            const keccak384Result = keccak384Instance.hex();
            resolve({
              hex: keccak384Result,
              base64: Buffer.from(keccak384Result, 'hex').toString('base64')
            });
            return;
          
          case 'keccak512':
            const keccak512Instance = keccak512.create();
            keccak512Instance.update(fileData);
            const keccak512Result = keccak512Instance.hex();
            resolve({
              hex: keccak512Result,
              base64: Buffer.from(keccak512Result, 'hex').toString('base64')
            });
            return;
          
          case 'shake128':
            const shake128FileInstance = shake128.create(128)
            shake128FileInstance.update(new Uint8Array(fileData))
            const shake128FileResult = shake128FileInstance.hex()
            resolve({
              hex: shake128FileResult,
              base64: Buffer.from(shake128FileResult, 'hex').toString('base64')
  })
            return
          
          case 'shake256':
            const shake256FileInstance = shake256.create(256)
            shake256FileInstance.update(new Uint8Array(fileData))
            const shake256FileResult = shake256FileInstance.hex()
            resolve({
              hex: shake256FileResult,
              base64: Buffer.from(shake256FileResult, 'hex').toString('base64')
            })
            return
          
          case 'cshake128':
            const cshake128Instance = cshake128.create(128, '', '');
            cshake128Instance.update(new Uint8Array(fileData));
            const cshake128Result = cshake128Instance.hex();
            resolve({
              hex: cshake128Result,
              base64: Buffer.from(cshake128Result, 'hex').toString('base64')
            });
            return;
          
          case 'cshake256':
            const cshake256Instance = cshake256.create(256, '', '');
            cshake256Instance.update(new Uint8Array(fileData));
            const cshake256Result = cshake256Instance.hex();
            resolve({
              hex: cshake256Result,
              base64: Buffer.from(cshake256Result, 'hex').toString('base64')
            });
            return;
          
          case 'ripemd160':
            const ripemd160Result = CryptoJS.RIPEMD160(CryptoJS.lib.WordArray.create(fileData)).toString(CryptoJS.enc.Hex);
            resolve({
              hex: ripemd160Result,
              base64: Buffer.from(ripemd160Result, 'hex').toString('base64')
            });
            return;
          
          case 'blake2b':
            const blake2bOutput = blake2b(64);
            blake2bOutput.update(Buffer.from(fileData));
            const blake2bResult = Buffer.from(blake2bOutput.digest()).toString('hex');
            resolve({
              hex: blake2bResult,
              base64: Buffer.from(blake2bResult, 'hex').toString('base64')
            });
            return;
          
          case 'blake2s':
            const blake2sOutput = blake2s(32);
            blake2sOutput.update(Buffer.from(fileData));
            const blake2sResult = Buffer.from(blake2sOutput.digest()).toString('hex');
            resolve({
              hex: blake2sResult,
              base64: Buffer.from(blake2sResult, 'hex').toString('base64')
            });
            return;
          
          case 'blake3':
            const blake3Result = await blake3(fileData);
            resolve({
              hex: blake3Result,
              base64: Buffer.from(blake3Result, 'hex').toString('base64')
            });
            return;
          
          case 'sm3':
            const sm3FileResult = sm3.sm3(new Uint8Array(fileData))
            resolve({
              hex: sm3FileResult,
              base64: Buffer.from(sm3FileResult, 'hex').toString('base64')
            })
            return
          
          case 'murmur3_x86_32':
            const murmur32Result = murmurHash3.x86.hash32(Buffer.from(fileData).toString('binary')).toString();
            resolve({
              hex: murmur32Result,
              base64: Buffer.from(murmur32Result, 'hex').toString('base64')
            });
            return;
          
          case 'murmur3_x86_128':
            const murmur128Result = murmurHash3.x86.hash128(Buffer.from(fileData).toString('binary'));
            resolve({
              hex: murmur128Result,
              base64: Buffer.from(murmur128Result, 'hex').toString('base64')
            });
            return;
          
          case 'murmur3_x64_128':
            const murmur64Result = murmurHash3.x64.hash128(Buffer.from(fileData).toString('binary'));
            resolve({
              hex: murmur64Result,
              base64: Buffer.from(murmur64Result, 'hex').toString('base64')
            });
          default:
            console.error(t('tools.hash-calculator.messages.algorithmError'));
            resolve({
              hex: '',
              base64: ''
            });
            return;
        }
      } catch (error) {
        reject(new Error(`${t('tools.hash-calculator.messages.processingError')}: ${error.message}`));
      }
    }
    
    reader.onerror = function() {
      reject(new Error(t('tools.hash-calculator.messages.readError')))
    }
    
    reader.readAsArrayBuffer(selectedFile.value)
  })
}

// 获取当前选择的算法名称
function getSelectedAlgorithmName() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.name : selectedHash.value
}

// 获取当前选择的算法描述
function getSelectedAlgorithmDescription() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.description : ''
}

// 获取当前选择的算法用途
function getSelectedAlgorithmUsage() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.usage : ''
}

// 获取当前选择的算法安全性描述
function getSelectedAlgorithmSecurity() {
  const algorithm = hashAlgorithms.find(a => a.value === selectedHash.value)
  return algorithm ? algorithm.security : ''
}

// 计算所有哈希值
async function calculateAllHashes() {
  if(!showAllHashes.value){
    return
  }
  
  isCalculating.value = true
  allHashResults.value = {}
  
  try {
    const totalAlgorithms = hashAlgorithms.length
    
    for (let i = 0; i < totalAlgorithms; i++) {
      await Promise.all(hashAlgorithms.map(async (algorithm) => {
        try {
          let result
          
          if (inputMode.value === 'text') {
            if (!inputText.value) return
            result = await calculateTextHash(algorithm.value, inputText.value)
          } else {
            if (!selectedFile.value) return
            result = await calculateFileHash(algorithm.value)
          }
          
          allHashResults.value[algorithm.value] = {
            name: algorithm.name,
            hex: result.hex,
            base64: result.base64
          }
        } catch (error) {
          console.error(`Error calculating ${algorithm.value}:`, error)
          allHashResults.value[algorithm.value] = {
            name: algorithm.name,
            hex: t('tools.hash-calculator.messages.calculationError'),
            base64: ''
          }
        }
      }))
      
      // 给UI一点时间来更新，防止页面卡死
      await new Promise(resolve => setTimeout(resolve, 10))
    }
  } catch (error) {
    console.error(error)
    alert(t('tools.hash-calculator.messages.processingError', {error: error.message}))
  } finally {
    isCalculating.value = false
  }
}

// 计算哈希值
async function calculateHash() {
  isCalculating.value = true
  hashResult.value = ''
  hashResultBase64.value = ''
  verifyHash.value = ''
  
  try {
    let result
    
    if (inputMode.value === 'text') {
      if (!inputText.value) {
        return Promise.reject(new Error(t('tools.hash-calculator.messages.invalidInput')))
      }
      result = await calculateTextHash(selectedHash.value, inputText.value)
    } else {
      result = await calculateFileHash(selectedHash.value)
    }
    
    hashResult.value = result.hex
    hashResultBase64.value = result.base64
    verifyHash.value = result.hex
  } catch (error) {
    alert(t('tools.hash-calculator.messages.processingError', {error: error.message}))
  } finally {
    isCalculating.value = false
  }
}

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(t('tools.hash-calculator.results.copied'))
  }).catch(err => {
    alert(t('tools.hash-calculator.results.copyFailed'))
    console.error(t('tools.hash-calculator.messages.processingError', {error: err}))
  })
}

// Add these watch functions after the component setup variables
watch(inputText, () => {
  if (autoCalculate.value && inputMode.value === 'text') {
    if (textChangeTimeout.value) clearTimeout(textChangeTimeout.value)
    textChangeTimeout.value = setTimeout(() => {
      calculateHash()
      calculateAllHashes()
    }, 500) // Debounce for better performance
  }
})

watch(selectedHash, () => {
  if (autoCalculate.value && ((inputText.value && inputMode.value === 'text') || 
      (selectedFile.value && inputMode.value === 'file'))) {
    calculateHash()
  }
})

watch(selectedFile, () => {
  if (autoCalculate.value && inputMode.value === 'file' && selectedFile.value) {
    calculateHash()
    calculateAllHashes()
  }
})

watch(encoding, () => {
  if (autoCalculate.value && inputMode.value === 'text' && inputText.value) {
    calculateHash()
    calculateAllHashes()
  }
})

watch(inputMode, () => {
  if (autoCalculate.value) {
    if ((inputMode.value === 'text' && inputText.value) || 
        (inputMode.value === 'file' && selectedFile.value)) {
      calculateHash()
    }
  }
})

// Also define the handleFileUpload function if it's missing
function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
    if (autoCalculate.value) {
      calculateHash()
      calculateAllHashes()
    }
  }
}

// Add this to formatFileSize function if it's missing
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 在现有watch函数后添加对showAllHashes的监听
watch(showAllHashes, (newValue) => {
  if (newValue && ((inputText.value && inputMode.value === 'text') || 
      (selectedFile.value && inputMode.value === 'file'))) {
    if(showAllHashes.value){
      calculateAllHashes()
    }
  }
})

// 添加导出所有哈希值功能
function exportAllHashes() {
  const format = allHashDisplayFormat.value
  let csvContent = 'data:text/csv;charset=utf-8,'
  
  // 添加CSV头
  csvContent += `Algorithm,${format === 'hex' ? 'Hex Hash' : 'Base64 Hash'}\n`
  
  // 添加每个算法的哈希值
  Object.entries(allHashResults.value).forEach(([key, result]) => {
    const hashValue = format === 'hex' ? result.hex : result.base64
    csvContent += `${result.name},"${hashValue}"\n`
  })
  
  // 创建下载链接
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', `hash_results_${format}_${new Date().toISOString().slice(0,10)}.csv`)
  document.body.appendChild(link)
  
  // 触发下载
  link.click()
  
  // 清理DOM
  document.body.removeChild(link)
}

</script> 