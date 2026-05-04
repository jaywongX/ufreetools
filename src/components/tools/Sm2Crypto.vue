<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <!-- 功能选择 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.sm2-crypto.tabs.title') }}
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="selectedTab = 'keygen'" 
              class="px-4 py-2 border border-r-0 border-gray-300 dark:border-gray-600"
              :class="[
                selectedTab === 'keygen' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200',
                'rounded-l-md'
              ]"
            >
              {{ $t('tools.sm2-crypto.tabs.keyGeneration') }}
            </button>
            <button 
              @click="selectedTab = 'encrypt'" 
              class="px-4 py-2 border border-r-0 border-gray-300 dark:border-gray-600"
              :class="selectedTab === 'encrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.sm2-crypto.tabs.encryptDecrypt') }}
            </button>
            <button 
              @click="selectedTab = 'sign'" 
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md"
              :class="selectedTab === 'sign' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.sm2-crypto.tabs.signVerify') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 密钥生成 -->
    <div v-if="selectedTab === 'keygen'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.sm2-crypto.keyGeneration.title') }}</h3>
          <button 
            @click="generateKeyPair" 
            :disabled="isGenerating"
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isGenerating" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('tools.sm2-crypto.keyGeneration.generating') }}
            </span>
            <span v-else>{{ $t('tools.sm2-crypto.keyGeneration.generateButton') }}</span>
          </button>
        </div>
        
        <div v-if="privateKey || publicKey" class="mt-4 space-y-4">
          <!-- 公钥 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('tools.sm2-crypto.keyGeneration.publicKey') }}
              </label>
              <button 
                @click="copyToClipboard(publicKey)"
                class="text-xs text-primary hover:text-primary-dark"
              >
                {{ $t('tools.sm2-crypto.keyGeneration.copy') }}
              </button>
            </div>
            <textarea 
              v-model="publicKey" 
              readonly
              rows="3" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            ></textarea>
          </div>
          
          <!-- 私钥 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('tools.sm2-crypto.keyGeneration.privateKey') }}
              </label>
              <button 
                @click="copyToClipboard(privateKey)"
                class="text-xs text-primary hover:text-primary-dark"
              >
                {{ $t('tools.sm2-crypto.keyGeneration.copy') }}
              </button>
            </div>
            <textarea 
              v-model="privateKey" 
              readonly
              rows="3" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            ></textarea>
          </div>
          
          <!-- 导出按钮 -->
          <div class="flex flex-wrap gap-2">
            <button 
              @click="downloadKey(publicKey, 'sm2_public.txt')"
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ $t('tools.sm2-crypto.keyGeneration.exportPublicKey') }}
            </button>
            <button 
              @click="downloadKey(privateKey, 'sm2_private.txt')"
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ $t('tools.sm2-crypto.keyGeneration.exportPrivateKey') }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.sm2-crypto.keyGeneration.info.title') }}</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{{ $t('tools.sm2-crypto.keyGeneration.info.description') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-html="$t('tools.sm2-crypto.keyGeneration.info.points[0]')"></li>
            <li v-html="$t('tools.sm2-crypto.keyGeneration.info.points[1]')"></li>
          </ul>
          <p>{{ $t('tools.sm2-crypto.keyGeneration.info.features') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>{{ $t('tools.sm2-crypto.keyGeneration.info.featuresList[0]') }}</li>
            <li>{{ $t('tools.sm2-crypto.keyGeneration.info.featuresList[1]') }}</li>
            <li>{{ $t('tools.sm2-crypto.keyGeneration.info.featuresList[2]') }}</li>
            <li>{{ $t('tools.sm2-crypto.keyGeneration.info.featuresList[3]') }}</li>
          </ul>
          <p class="text-yellow-600 dark:text-yellow-400 font-medium mt-2">
            {{ $t('tools.sm2-crypto.keyGeneration.info.securityTip') }}
          </p>
        </div>
      </div>
    </div>

    <!-- 加密/解密 -->
    <div v-if="selectedTab === 'encrypt'" class="space-y-6">
      <!-- 操作选择 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.sm2-crypto.encryptDecrypt.title') }}
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="operation = 'encrypt'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="operation === 'encrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.sm2-crypto.encryptDecrypt.encrypt') }}
            </button>
            <button 
              @click="operation = 'decrypt'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="operation === 'decrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.sm2-crypto.encryptDecrypt.decrypt') }}
            </button>
          </div>
        </div>
        
        <!-- 密钥输入 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ operation === 'encrypt' ? $t('tools.sm2-crypto.encryptDecrypt.keyLabel.encrypt') : $t('tools.sm2-crypto.encryptDecrypt.keyLabel.decrypt') }}
          </label>
          <textarea 
            :value="operation === 'encrypt' ? encryptPublicKey : decryptPrivateKey" 
            @input="e => operation === 'encrypt' ? encryptPublicKey = e.target.value : decryptPrivateKey = e.target.value"
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="$t('tools.sm2-crypto.encryptDecrypt.keyPlaceholder')"
          ></textarea>
        </div>
        
        <!-- 输入数据 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ operation === 'encrypt' ? $t('tools.sm2-crypto.encryptDecrypt.dataLabel.encrypt') : $t('tools.sm2-crypto.encryptDecrypt.dataLabel.decrypt') }}
          </label>
          <textarea 
            v-model="inputData" 
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="operation === 'encrypt' ? $t('tools.sm2-crypto.encryptDecrypt.dataPlaceholder.encrypt') : $t('tools.sm2-crypto.encryptDecrypt.dataPlaceholder.decrypt')"
          ></textarea>
        </div>
        
        <div class="mb-4">
          <button 
            @click="processEncryptDecrypt" 
            :disabled="!canProcess || isProcessing"
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isProcessing" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('tools.sm2-crypto.encryptDecrypt.processing') }}
            </span>
            <span v-else>{{ operation === 'encrypt' ? $t('tools.sm2-crypto.encryptDecrypt.processButton.encrypt') : $t('tools.sm2-crypto.encryptDecrypt.processButton.decrypt') }}</span>
          </button>
        </div>
        
        <!-- 错误提示 -->
        <div v-if="error" class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 text-sm">
          {{ error }}
        </div>
        
        <!-- 结果输出 -->
        <div v-if="outputData" class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ operation === 'encrypt' ? $t('tools.sm2-crypto.encryptDecrypt.resultLabel.encrypt') : $t('tools.sm2-crypto.encryptDecrypt.resultLabel.decrypt') }}
            </label>
            <button 
              @click="copyToClipboard(outputData)"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.sm2-crypto.keyGeneration.copy') }}
            </button>
          </div>
          <textarea 
            v-model="outputData" 
            readonly
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
      </div>
      
      <!-- 说明信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.sm2-crypto.encryptDecrypt.info.title') }}</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{{ $t('tools.sm2-crypto.encryptDecrypt.info.usage') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-html="$t('tools.sm2-crypto.encryptDecrypt.info.points[0]')"></li>
            <li v-html="$t('tools.sm2-crypto.encryptDecrypt.info.points[1]')"></li>
          </ul>
          <p>{{ $t('tools.sm2-crypto.encryptDecrypt.info.limitations') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>{{ $t('tools.sm2-crypto.encryptDecrypt.info.limitationsList[0]') }}</li>
            <li>{{ $t('tools.sm2-crypto.encryptDecrypt.info.limitationsList[1]') }}</li>
          </ul>
          <p class="text-yellow-600 dark:text-yellow-400 mt-2">
            {{ $t('tools.sm2-crypto.encryptDecrypt.info.note') }}
          </p>
        </div>
      </div>
    </div>

    <!-- 签名/验证 -->
    <div v-if="selectedTab === 'sign'" class="space-y-6">
      <!-- 操作选择 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.sm2-crypto.signVerify.title') }}
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="signOperation = 'sign'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="signOperation === 'sign' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.sm2-crypto.signVerify.sign') }}
            </button>
            <button 
              @click="signOperation = 'verify'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="signOperation === 'verify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.sm2-crypto.signVerify.verify') }}
            </button>
          </div>
        </div>
        
        <!-- 密钥输入 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ signOperation === 'sign' ? $t('tools.sm2-crypto.signVerify.keyLabel.sign') : $t('tools.sm2-crypto.signVerify.keyLabel.verify') }}
          </label>
          <textarea 
            :value="signOperation === 'sign' ? signPrivateKey : verifyPublicKey" 
            @input="e => signOperation === 'sign' ? signPrivateKey = e.target.value : verifyPublicKey = e.target.value"
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="$t('tools.sm2-crypto.signVerify.keyPlaceholder')"
          ></textarea>
        </div>
        
        <!-- 输入数据 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.sm2-crypto.signVerify.dataLabel', { operation: signOperation === 'sign' ? $t('tools.sm2-crypto.signVerify.sign') : $t('tools.sm2-crypto.signVerify.verify') }) }}
          </label>
          <textarea 
            v-model="signData" 
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="$t('tools.sm2-crypto.signVerify.dataPlaceholder')"
          ></textarea>
        </div>
        
        <!-- 签名值，仅在验证时显示 -->
        <div v-if="signOperation === 'verify'" class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.sm2-crypto.signVerify.signatureLabel') }}
          </label>
          <textarea 
            v-model="signature" 
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="$t('tools.sm2-crypto.signVerify.signaturePlaceholder')"
          ></textarea>
        </div>
        
        <div class="mb-4">
          <button 
            @click="processSignVerify" 
            :disabled="!canProcessSign || isProcessingSign"
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isProcessingSign" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('tools.sm2-crypto.signVerify.processing') }}
            </span>
            <span v-else>{{ signOperation === 'sign' ? $t('tools.sm2-crypto.signVerify.processButton.sign') : $t('tools.sm2-crypto.signVerify.processButton.verify') }}</span>
          </button>
        </div>
        
        <!-- 错误提示 -->
        <div v-if="signError" class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 text-sm">
          {{ signError }}
        </div>
        
        <!-- 签名结果 -->
        <div v-if="generatedSignature" class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ $t('tools.sm2-crypto.signVerify.signatureValue') }}
            </label>
            <button 
              @click="copyToClipboard(generatedSignature)"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.sm2-crypto.keyGeneration.copy') }}
            </button>
          </div>
          <textarea 
            v-model="generatedSignature" 
            readonly
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <!-- 验证结果 -->
        <div v-if="verificationResult !== null" class="mb-4 p-4 rounded-md" :class="verificationResult ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'">
          <div class="flex items-center">
            <svg v-if="verificationResult" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span :class="verificationResult ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'">
              {{ verificationResult ? $t('tools.sm2-crypto.signVerify.verificationSuccess') : $t('tools.sm2-crypto.signVerify.verificationFailed') }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- 说明信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.sm2-crypto.signVerify.info.title') }}</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{{ $t('tools.sm2-crypto.signVerify.info.mainUses') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-html="$t('tools.sm2-crypto.signVerify.info.usesList[0]')"></li>
            <li v-html="$t('tools.sm2-crypto.signVerify.info.usesList[1]')"></li>
            <li v-html="$t('tools.sm2-crypto.signVerify.info.usesList[2]')"></li>
          </ul>
          <p>{{ $t('tools.sm2-crypto.signVerify.info.usage') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-html="$t('tools.sm2-crypto.signVerify.info.usageList[0]')"></li>
            <li v-html="$t('tools.sm2-crypto.signVerify.info.usageList[1]')"></li>
          </ul>
          <p class="text-yellow-600 dark:text-yellow-400 mt-2">
            {{ $t('tools.sm2-crypto.signVerify.info.note') }}
          </p>
        </div>
      </div>
    </div>
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import * as sm2 from 'sm-crypto/src/sm2'
import { sm3 } from 'sm-crypto'
import { useI18n } from 'vue-i18n'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 通用状态
const selectedTab = ref('keygen')
const isGenerating = ref(false)
const publicKey = ref('')
const privateKey = ref('')

// 加密/解密状态
const operation = ref('encrypt')
const encryptPublicKey = ref('')
const decryptPrivateKey = ref('')
const inputData = ref('')
const outputData = ref('')
const isProcessing = ref(false)
const error = ref('')

// 签名/验证状态
const signOperation = ref('sign')
const signPrivateKey = ref('')
const verifyPublicKey = ref('')
const signData = ref('')
const signature = ref('')
const generatedSignature = ref('')
const verificationResult = ref(null)
const isProcessingSign = ref(false)
const signError = ref('')

// 计算属性
const canProcess = computed(() => {
  if (operation.value === 'encrypt') {
    return encryptPublicKey.value && inputData.value
  } else {
    return decryptPrivateKey.value && inputData.value
  }
})

const canProcessSign = computed(() => {
  if (signOperation.value === 'sign') {
    return signPrivateKey.value && signData.value
  } else {
    return verifyPublicKey.value && signData.value && signature.value
  }
})

// 生成SM2密钥对
function generateKeyPair() {
  isGenerating.value = true
  
  try {
    // 生成密钥对
    const keypair = sm2.generateKeyPairHex()
    
    privateKey.value = keypair.privateKey
    publicKey.value = keypair.publicKey
  } catch (err) {
    console.error('生成密钥对时出错:', err)
    toastRef.value.show(t('tools.sm2-crypto.messages.keygenError', { error: err.message }))
  } finally {
    isGenerating.value = false
  }
}

// 处理加密/解密
function processEncryptDecrypt() {
  isProcessing.value = true
  error.value = ''
  outputData.value = ''
  
  try {
    if (operation.value === 'encrypt') {
      // 使用公钥加密
      const ciphertext = sm2.doEncrypt(inputData.value, encryptPublicKey.value, 1) // 1:C1C3C2，0:C1C2C3
      outputData.value = ciphertext
    } else {
      // 使用私钥解密
      const plaintext = sm2.doDecrypt(inputData.value, decryptPrivateKey.value, 1) // 1:C1C3C2，0:C1C2C3
      outputData.value = plaintext
    }
  } catch (err) {
    console.error('处理加密/解密时出错:', err)
    error.value = t('tools.sm2-crypto.messages.processError')
  } finally {
    isProcessing.value = false
  }
}

// 处理签名/验证
function processSignVerify() {
  isProcessingSign.value = true
  signError.value = ''
  generatedSignature.value = ''
  verificationResult.value = null
  
  try {
    if (signOperation.value === 'sign') {
      // 生成签名，使用SM3作为消息摘要
      const dataHash = sm3(signData.value)
      
      // 使用私钥签名
      const signatureValue = sm2.doSignature(dataHash, signPrivateKey.value)
      generatedSignature.value = signatureValue
    } else {
      // 验证签名，使用SM3作为消息摘要
      const dataHash = sm3(signData.value)
      
      // 使用公钥验证
      const result = sm2.doVerifySignature(dataHash, signature.value, verifyPublicKey.value)
      verificationResult.value = result
    }
  } catch (err) {
    console.error('处理签名/验证时出错:', err)
    signError.value = t('tools.sm2-crypto.messages.processError')
  } finally {
    isProcessingSign.value = false
  }
}

// 复制内容到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toastRef.value.show(t('tools.sm2-crypto.messages.copied'))
  }).catch(err => {
    toastRef.value.show(t('tools.sm2-crypto.messages.copyFailed'))
    console.error('复制失败:', err)
  })
}

// 下载密钥文件
function downloadKey(keyContent, filename) {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(keyContent))
  element.setAttribute('download', filename)
  
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

// 初始化
onMounted(() => {
  // 可以在这里添加初始化逻辑
})
</script> 