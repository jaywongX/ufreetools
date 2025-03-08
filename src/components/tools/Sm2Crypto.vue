<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <!-- 功能选择 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            功能选择
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
              密钥生成
            </button>
            <button 
              @click="selectedTab = 'encrypt'" 
              class="px-4 py-2 border border-r-0 border-gray-300 dark:border-gray-600"
              :class="selectedTab === 'encrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              加密/解密
            </button>
            <button 
              @click="selectedTab = 'sign'" 
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md"
              :class="selectedTab === 'sign' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              签名/验证
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 密钥生成 -->
    <div v-if="selectedTab === 'keygen'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">SM2密钥对生成</h3>
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
              生成中...
            </span>
            <span v-else>生成密钥对</span>
          </button>
        </div>
        
        <div v-if="privateKey || publicKey" class="mt-4 space-y-4">
          <!-- 公钥 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                公钥 (Public Key)
              </label>
              <button 
                @click="copyToClipboard(publicKey)"
                class="text-xs text-primary hover:text-primary-dark"
              >
                复制
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
                私钥 (Private Key)
              </label>
              <button 
                @click="copyToClipboard(privateKey)"
                class="text-xs text-primary hover:text-primary-dark"
              >
                复制
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
              导出公钥
            </button>
            <button 
              @click="downloadKey(privateKey, 'sm2_private.txt')"
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              导出私钥
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">了解SM2密钥对</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>SM2是中国国家密码管理局发布的椭圆曲线公钥密码算法，是一种非对称加密算法：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>公钥</strong>：可以分享给他人，用于加密数据或验证签名</li>
            <li><strong>私钥</strong>：必须安全保管，不能泄露，用于解密数据或创建签名</li>
          </ul>
          <p>SM2算法特点：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>基于256位椭圆曲线，安全性相当于RSA 3072位</li>
            <li>执行速度快，密钥短</li>
            <li>国密标准（GB/T 32918系列），适用于中国国内商用密码场景</li>
            <li>集成了加密、签名、密钥交换等功能</li>
          </ul>
          <p class="text-yellow-600 dark:text-yellow-400 font-medium mt-2">
            安全提示：私钥决不能泄露给他人，请妥善保管您的密钥对。
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
            操作类型
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="operation = 'encrypt'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="operation === 'encrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              加密
            </button>
            <button 
              @click="operation = 'decrypt'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="operation === 'decrypt' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              解密
            </button>
          </div>
        </div>
        
        <!-- 密钥输入 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ operation === 'encrypt' ? '公钥' : '私钥' }}
          </label>
          <textarea 
            :value="operation === 'encrypt' ? encryptPublicKey : decryptPrivateKey" 
            @input="e => operation === 'encrypt' ? encryptPublicKey = e.target.value : decryptPrivateKey = e.target.value"
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="请粘贴SM2密钥"
          ></textarea>
        </div>
        
        <!-- 输入数据 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ operation === 'encrypt' ? '要加密的数据' : '要解密的数据' }}
          </label>
          <textarea 
            v-model="inputData" 
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :placeholder="operation === 'encrypt' ? '输入要加密的文本' : '输入要解密的密文'"
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
              处理中...
            </span>
            <span v-else>{{ operation === 'encrypt' ? '加密' : '解密' }}</span>
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
              {{ operation === 'encrypt' ? '加密结果' : '解密结果' }}
            </label>
            <button 
              @click="copyToClipboard(outputData)"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
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
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">SM2加密/解密说明</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>SM2加密/解密使用方法：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>加密</strong>：使用接收方的<span class="text-green-600 dark:text-green-400">公钥</span>加密，只有拥有对应私钥的人才能解密</li>
            <li><strong>解密</strong>：使用您的<span class="text-red-600 dark:text-red-400">私钥</span>解密由您公钥加密的数据</li>
          </ul>
          <p>使用限制：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>SM2算法对明文长度有限制，适合加密短消息、密钥或敏感数据</li>
            <li>加密长文本建议先使用对称加密（如SM4），再用SM2加密对称密钥</li>
          </ul>
          <p class="text-yellow-600 dark:text-yellow-400 mt-2">
            注意：SM2加密的数据格式与RSA不兼容，确保接收方支持SM2算法。
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
            操作类型
          </label>
          <div class="flex flex-wrap">
            <button 
              @click="signOperation = 'sign'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="signOperation === 'sign' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              签名
            </button>
            <button 
              @click="signOperation = 'verify'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="signOperation === 'verify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              验证
            </button>
          </div>
        </div>
        
        <!-- 密钥输入 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ signOperation === 'sign' ? '私钥' : '公钥' }}
          </label>
          <textarea 
            :value="signOperation === 'sign' ? signPrivateKey : verifyPublicKey" 
            @input="e => signOperation === 'sign' ? signPrivateKey = e.target.value : verifyPublicKey = e.target.value"
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="请粘贴SM2密钥"
          ></textarea>
        </div>
        
        <!-- 输入数据 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            要{{ signOperation === 'sign' ? '签名' : '验证' }}的数据
          </label>
          <textarea 
            v-model="signData" 
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="输入原始数据文本"
          ></textarea>
        </div>
        
        <!-- 签名值，仅在验证时显示 -->
        <div v-if="signOperation === 'verify'" class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            签名值
          </label>
          <textarea 
            v-model="signature" 
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="输入要验证的签名值"
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
              处理中...
            </span>
            <span v-else>{{ signOperation === 'sign' ? '生成签名' : '验证签名' }}</span>
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
              生成的签名
            </label>
            <button 
              @click="copyToClipboard(generatedSignature)"
              class="text-xs text-primary hover:text-primary-dark"
            >
              复制
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
              {{ verificationResult ? '签名验证成功！数据完整且未被篡改。' : '签名验证失败！数据可能已被篡改或签名不正确。' }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- 说明信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">SM2签名/验证说明</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>SM2数字签名主要用途：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>数据完整性</strong>：确保数据在传输过程中未被篡改</li>
            <li><strong>身份认证</strong>：证明数据确实来自声称的发送者</li>
            <li><strong>不可抵赖性</strong>：发送者无法否认曾发送过该消息</li>
          </ul>
          <p>使用方法：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>签名</strong>：使用您的<span class="text-red-600 dark:text-red-400">私钥</span>为数据生成签名</li>
            <li><strong>验证</strong>：使用发送者的<span class="text-green-600 dark:text-green-400">公钥</span>验证签名的真实性</li>
          </ul>
          <p class="text-yellow-600 dark:text-yellow-400 mt-2">
            注意：SM2签名采用国密标准算法，与国际通用的签名算法不兼容，需要接收方支持SM2算法。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import * as sm2 from 'sm-crypto/src/sm2'
import { sm3 } from 'sm-crypto'

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
    alert('生成SM2密钥对时出错：' + err.message)
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
    signError.value = err.message || '操作失败。请检查您的密钥和输入数据。'
  } finally {
    isProcessingSign.value = false
  }
}

// 复制内容到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已复制到剪贴板')
  }).catch(err => {
    alert('复制失败，请手动复制')
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