<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <!-- 功能选择 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.rsa-crypto.tabs.title') }}
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
              {{ $t('tools.rsa-crypto.tabs.keyGeneration') }}
            </button>
            <button 
              @click="selectedTab = 'encrypt'" 
              class="px-4 py-2 border border-r-0 border-gray-300 dark:border-gray-600"
              :class="selectedTab === 'encrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.rsa-crypto.tabs.encryptDecrypt') }}
            </button>
            <button 
              @click="selectedTab = 'sign'" 
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md"
              :class="selectedTab === 'sign' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.rsa-crypto.tabs.signVerify') }}
            </button>
          </div>
        </div>

        <!-- 密钥长度选择 (仅在生成密钥时显示) -->
        <div v-if="selectedTab === 'keygen'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.rsa-crypto.keyGeneration.keyLength') }}
          </label>
          <select 
            v-model="keySize" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option :value="512">{{ $t('tools.rsa-crypto.keyGeneration.keySizes.size512') }}</option>
            <option :value="1024">{{ $t('tools.rsa-crypto.keyGeneration.keySizes.size1024') }}</option>
            <option :value="2048">{{ $t('tools.rsa-crypto.keyGeneration.keySizes.size2048') }}</option>
            <option :value="4096">{{ $t('tools.rsa-crypto.keyGeneration.keySizes.size4096') }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 密钥生成 -->
    <div v-if="selectedTab === 'keygen'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-crypto.keyGeneration.title') }}</h3>
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
              {{ $t('tools.rsa-crypto.keyGeneration.generating') }}
            </span>
            <span v-else>{{ $t('tools.rsa-crypto.keyGeneration.generateButton') }}</span>
          </button>
        </div>
        
        <div v-if="privateKey || publicKey" class="mt-4 space-y-4">
          <!-- 公钥 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('tools.rsa-crypto.keyGeneration.publicKey') }}
              </label>
              <button 
                @click="copyToClipboard(publicKey)"
                class="text-xs text-primary hover:text-primary-dark"
              >
                {{ $t('tools.rsa-crypto.keyGeneration.copy') }}
              </button>
            </div>
            <textarea 
              v-model="publicKey" 
              readonly
              rows="6" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            ></textarea>
          </div>
          
          <!-- 私钥 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('tools.rsa-crypto.keyGeneration.privateKey') }}
              </label>
              <button 
                @click="copyToClipboard(privateKey)"
                class="text-xs text-primary hover:text-primary-dark"
              >
                {{ $t('tools.rsa-crypto.keyGeneration.copy') }}
              </button>
            </div>
            <textarea 
              v-model="privateKey" 
              readonly
              rows="10" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            ></textarea>
          </div>
          
          <!-- 导出按钮 -->
          <div class="flex flex-wrap gap-2">
            <button 
              @click="downloadKey(publicKey, 'public.pem')"
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ $t('tools.rsa-crypto.keyGeneration.exportPublicKey') }}
            </button>
            <button 
              @click="downloadKey(privateKey, 'private.pem')"
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ $t('tools.rsa-crypto.keyGeneration.exportPrivateKey') }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.rsa-crypto.keyGeneration.info.title') }}</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{{ $t('tools.rsa-crypto.keyGeneration.info.description') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>{{ $t('tools.rsa-crypto.keyGeneration.info.points.0') }}</li>
            <li>{{ $t('tools.rsa-crypto.keyGeneration.info.points.1') }}</li>
          </ul>
          <p>{{ $t('tools.rsa-crypto.keyGeneration.info.keyLengthTitle') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>{{ $t('tools.rsa-crypto.keyGeneration.info.keyLengthPoints.0') }}</li>
            <li>{{ $t('tools.rsa-crypto.keyGeneration.info.keyLengthPoints.1') }}</li>
            <li>{{ $t('tools.rsa-crypto.keyGeneration.info.keyLengthPoints.2') }}</li>
            <li>{{ $t('tools.rsa-crypto.keyGeneration.info.keyLengthPoints.3') }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 加密/解密 -->
    <div v-if="selectedTab === 'encrypt'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.rsa-crypto.encryptDecrypt.title') }}
          </label>
          <div class="flex">
            <button 
              @click="operation = 'encrypt'" 
              class="px-4 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md"
              :class="operation === 'encrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.rsa-crypto.encryptDecrypt.encrypt') }}
            </button>
            <button 
              @click="operation = 'decrypt'" 
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md"
              :class="operation === 'decrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.rsa-crypto.encryptDecrypt.decrypt') }}
            </button>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ operation === 'encrypt' ? $t('tools.rsa-crypto.encryptDecrypt.keyLabel.encrypt') : $t('tools.rsa-crypto.encryptDecrypt.keyLabel.decrypt') }}
          </label>
          <textarea 
            v-model="cryptoKey" 
            rows="4" 
            :placeholder="$t('tools.rsa-crypto.encryptDecrypt.keyPlaceholder')"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ operation === 'encrypt' ? $t('tools.rsa-crypto.encryptDecrypt.dataLabel.encrypt') : $t('tools.rsa-crypto.encryptDecrypt.dataLabel.decrypt') }}
          </label>
          <textarea 
            v-model="inputData" 
            rows="5" 
            :placeholder="operation === 'encrypt' ? $t('tools.rsa-crypto.encryptDecrypt.dataPlaceholder.encrypt') : $t('tools.rsa-crypto.encryptDecrypt.dataPlaceholder.decrypt')"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <div class="flex justify-end">
          <button 
            @click="processData" 
            :disabled="isProcessing || !inputData || !cryptoKey"
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isProcessing" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('tools.rsa-crypto.encryptDecrypt.processing') }}
            </span>
            <span v-else>{{ operation === 'encrypt' ? $t('tools.rsa-crypto.encryptDecrypt.encrypt') : $t('tools.rsa-crypto.encryptDecrypt.decrypt') }}</span>
          </button>
        </div>
        
        <div v-if="processedData" class="mt-2">
          <div class="flex justify-between items-center mb-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ operation === 'encrypt' ? $t('tools.rsa-crypto.encryptDecrypt.resultLabel.encrypt') : $t('tools.rsa-crypto.encryptDecrypt.resultLabel.decrypt') }}
            </label>
            <button 
              @click="copyToClipboard(processedData)"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.rsa-crypto.keyGeneration.copy') }}
            </button>
          </div>
          <textarea 
            v-model="processedData" 
            readonly
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.rsa-crypto.encryptDecrypt.info.title') }}</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{{ $t('tools.rsa-crypto.encryptDecrypt.info.description') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>{{ $t('tools.rsa-crypto.encryptDecrypt.info.points.0') }}</li>
            <li>{{ $t('tools.rsa-crypto.encryptDecrypt.info.points.1') }}</li>
            <li>{{ $t('tools.rsa-crypto.encryptDecrypt.info.points.2') }}</li>
            <li>{{ $t('tools.rsa-crypto.encryptDecrypt.info.points.3') }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 签名/验证 -->
    <div v-if="selectedTab === 'sign'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.rsa-crypto.signVerify.title') }}
          </label>
          <div class="flex">
            <button 
              @click="signOperation = 'sign'" 
              class="px-4 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md"
              :class="signOperation === 'sign' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.rsa-crypto.signVerify.sign') }}
            </button>
            <button 
              @click="signOperation = 'verify'" 
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md"
              :class="signOperation === 'verify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.rsa-crypto.signVerify.verify') }}
            </button>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ signOperation === 'sign' ? $t('tools.rsa-crypto.signVerify.keyLabel.sign') : $t('tools.rsa-crypto.signVerify.keyLabel.verify') }}
          </label>
          <textarea 
            v-model="signKey" 
            rows="4" 
            :placeholder="$t('tools.rsa-crypto.signVerify.keyPlaceholder')"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.rsa-crypto.signVerify.dataLabel', { operation: signOperation === 'sign' ? $t('tools.rsa-crypto.signVerify.sign') : $t('tools.rsa-crypto.signVerify.verify') }) }}
          </label>
          <textarea 
            v-model="signData" 
            rows="4" 
            :placeholder="$t('tools.rsa-crypto.signVerify.dataPlaceholder')"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <div v-if="signOperation === 'verify'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.rsa-crypto.signVerify.signatureLabel') }}
          </label>
          <textarea 
            v-model="signature" 
            rows="4" 
            :placeholder="$t('tools.rsa-crypto.signVerify.signaturePlaceholder')"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <div class="flex justify-end">
          <button 
            @click="processSignVerify" 
            :disabled="isSignProcessing || !signData || !signKey || (signOperation === 'verify' && !signature)"
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isSignProcessing" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('tools.rsa-crypto.signVerify.processing') }}
            </span>
            <span v-else>{{ signOperation === 'sign' ? $t('tools.rsa-crypto.signVerify.sign') : $t('tools.rsa-crypto.signVerify.verify') }}</span>
          </button>
        </div>
        
        <!-- 签名结果 -->
        <div v-if="signOperation === 'sign' && signatureOutput" class="mt-2">
          <div class="flex justify-between items-center mb-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ $t('tools.rsa-crypto.signVerify.signatureValue') }}
            </label>
            <button 
              @click="copyToClipboard(signatureOutput)"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.rsa-crypto.keyGeneration.copy') }}
            </button>
          </div>
          <textarea 
            v-model="signatureOutput" 
            readonly
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <!-- 验证结果 -->
        <div v-if="signOperation === 'verify' && verificationResult !== null" class="mt-2">
          <div class="p-3 rounded-md text-sm"
            :class="{
              'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900': verificationResult,
              'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900': !verificationResult
            }"
          >
            <div class="flex items-center">
              <svg v-if="verificationResult" class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <svg v-else class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              {{ verificationResult ? $t('tools.rsa-crypto.signVerify.verificationResult.success') : $t('tools.rsa-crypto.signVerify.verificationResult.failed') }}
            </div>
          </div>
        </div>
        
        <div v-if="signError" class="mt-2 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm rounded-md border border-red-200 dark:border-red-900">
          {{ signError }}
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.rsa-crypto.signVerify.info.title') }}</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{{ $t('tools.rsa-crypto.signVerify.info.description') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>{{ $t('tools.rsa-crypto.signVerify.info.points.0') }}</li>
            <li>{{ $t('tools.rsa-crypto.signVerify.info.points.1') }}</li>
            <li>{{ $t('tools.rsa-crypto.signVerify.info.points.2') }}</li>
            <li>{{ $t('tools.rsa-crypto.signVerify.info.points.3') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import JSEncrypt from 'jsencrypt'

// 通用状态
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const selectedTab = ref('keygen')

// 密钥生成状态
const keySize = ref(2048)
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
const hashAlgorithm = ref('sha256')
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

// 生成RSA密钥对
async function generateKeyPair() {
  isGenerating.value = true
  
  try {
    setTimeout(() => {
      const encrypt = new JSEncrypt({ default_key_size: keySize.value })
      encrypt.getKey()
      
      publicKey.value = encrypt.getPublicKey()
      privateKey.value = encrypt.getPrivateKey()
      
      isGenerating.value = false
    }, 100) // 小延迟让UI更新
  } catch (err) {
    console.error('生成密钥对时出错:', err)
    toastRef.value.show('生成RSA密钥对时出错：' + err.message)
    isGenerating.value = false
  }
}

// 处理加密/解密
function processEncryptDecrypt() {
  isProcessing.value = true
  error.value = ''
  outputData.value = ''
  
  try {
    const encrypt = new JSEncrypt()
    
    if (operation.value === 'encrypt') {
      encrypt.setPublicKey(encryptPublicKey.value)
      const encrypted = encrypt.encrypt(inputData.value)
      
      if (encrypted === false) {
        throw new Error('加密失败，请检查您的公钥和输入数据。RSA加密对数据长度有限制。')
      }
      
      outputData.value = encrypted
    } else {
      encrypt.setPrivateKey(decryptPrivateKey.value)
      const decrypted = encrypt.decrypt(inputData.value)
      
      if (decrypted === false) {
        throw new Error('解密失败，请确保私钥正确且输入数据是有效的加密文本。')
      }
      
      outputData.value = decrypted
    }
  } catch (err) {
    console.error('处理加密/解密时出错:', err)
    error.value = err.message || '操作失败。请检查您的密钥和输入数据。'
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
    const encrypt = new JSEncrypt()
    
    if (signOperation.value === 'sign') {
      encrypt.setPrivateKey(signPrivateKey.value)
      generatedSignature.value = encrypt.sign(signData.value, hashAlgorithm.value, 'sha256')
      
      if (!generatedSignature.value) {
        throw new Error('生成签名失败，请检查您的私钥和输入数据。')
      }
    } else {
      encrypt.setPublicKey(verifyPublicKey.value)
      verificationResult.value = encrypt.verify(signData.value, signature.value, hashAlgorithm.value)
    }
  } catch (err) {
    console.error('处理签名/验证时出错:', err)
    signError.value = err.message || '操作失败。请检查您的密钥和输入数据。'
  } finally {
    isProcessingSign.value = false
  }
}

// 复制内容到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toastRef.value.show('已复制到剪贴板')
  }).catch(err => {
    toastRef.value.show('复制失败，请手动复制')
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
  // 可以在这里添加初始化逻辑，如从localStorage加载上一次使用的密钥等
})
</script> 