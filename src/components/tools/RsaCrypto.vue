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

        <!-- 密钥长度选择 (仅在生成密钥时显示) -->
        <div v-if="selectedTab === 'keygen'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            密钥长度
          </label>
          <select 
            v-model="keySize" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option :value="512">512位 (不推荐用于安全场景)</option>
            <option :value="1024">1024位 (基本安全)</option>
            <option :value="2048">2048位 (推荐)</option>
            <option :value="4096">4096位 (高安全性)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 密钥生成 -->
    <div v-if="selectedTab === 'keygen'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">RSA密钥对生成</h3>
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
              rows="6" 
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
              导出公钥
            </button>
            <button 
              @click="downloadKey(privateKey, 'private.pem')"
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              导出私钥
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">了解RSA密钥对</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>RSA是一种非对称加密算法，使用一对密钥：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>公钥</strong>：可以安全地分享给任何人，用于加密数据或验证签名。</li>
            <li><strong>私钥</strong>：必须安全保管，不能泄露，用于解密数据或创建签名。</li>
          </ul>
          <p>密钥长度决定了安全性级别：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>512位 - 已不再安全，仅用于测试</li>
            <li>1024位 - 较弱，不推荐用于敏感数据</li>
            <li>2048位 - 目前推荐使用的标准</li>
            <li>4096位 - 提供更高安全性，但处理速度较慢</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 加密/解密 -->
    <div v-if="selectedTab === 'encrypt'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">加密与解密</h3>
            <div class="flex gap-2">
              <button 
                @click="operation = 'encrypt'" 
                class="px-3 py-1 text-sm rounded-md"
                :class="operation === 'encrypt' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                加密模式
              </button>
              <button 
                @click="operation = 'decrypt'" 
                class="px-3 py-1 text-sm rounded-md"
                :class="operation === 'decrypt' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                解密模式
              </button>
            </div>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ operation === 'encrypt' ? '使用公钥加密数据，只有拥有对应私钥的人才能解密。' : '使用私钥解密之前用公钥加密的数据。' }}
          </p>
        </div>

        <!-- 密钥输入 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ operation === 'encrypt' ? '公钥 (Public Key)' : '私钥 (Private Key)' }}
          </label>
          <textarea 
            :value="operation === 'encrypt' ? encryptPublicKey : decryptPrivateKey" 
            @input="e => operation === 'encrypt' ? encryptPublicKey = e.target.value : decryptPrivateKey = e.target.value"
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="请粘贴RSA密钥"
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
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :placeholder="operation === 'encrypt' ? '在此输入要加密的文本' : '在此输入要解密的数据（Base64格式）'"
          ></textarea>
        </div>
        
        <!-- 处理按钮 -->
        <div class="mb-4">
          <button 
            @click="processEncryptDecrypt" 
            :disabled="isProcessing || !canProcess"
            class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isProcessing" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              处理中...
            </span>
            <span v-else>{{ operation === 'encrypt' ? '加密数据' : '解密数据' }}</span>
          </button>
        </div>
        
        <!-- 输出结果 -->
        <div v-if="outputData" class="mt-4">
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
        
        <!-- 错误消息 -->
        <div v-if="error" class="mt-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm rounded-md border border-red-200 dark:border-red-900">
          {{ error }}
        </div>
      </div>
    </div>
    
    <!-- 签名/验证 -->
    <div v-if="selectedTab === 'sign'" class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">签名与验证</h3>
            <div class="flex gap-2">
              <button 
                @click="signOperation = 'sign'" 
                class="px-3 py-1 text-sm rounded-md"
                :class="signOperation === 'sign' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                签名模式
              </button>
              <button 
                @click="signOperation = 'verify'" 
                class="px-3 py-1 text-sm rounded-md"
                :class="signOperation === 'verify' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                验证模式
              </button>
            </div>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ signOperation === 'sign' ? '使用私钥对数据进行签名，证明数据来源的真实性和完整性。' : '使用公钥验证签名，确认数据未被篡改且来自预期的发送者。' }}
          </p>
        </div>

        <!-- 密钥输入 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ signOperation === 'sign' ? '私钥 (Private Key)' : '公钥 (Public Key)' }}
          </label>
          <textarea 
            :value="signOperation === 'sign' ? signPrivateKey : verifyPublicKey" 
            @input="e => signOperation === 'sign' ? signPrivateKey = e.target.value : verifyPublicKey = e.target.value"
            rows="4" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="请粘贴RSA密钥"
          ></textarea>
        </div>
        
        <!-- 选择哈希算法 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            哈希算法
          </label>
          <select 
            v-model="hashAlgorithm" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="sha1">SHA-1 (不推荐用于安全场景)</option>
            <option value="sha256">SHA-256 (推荐)</option>
            <option value="sha512">SHA-512 (高安全性)</option>
            <option value="md5">MD5 (仅用于测试，不安全)</option>
          </select>
        </div>
        
        <!-- 输入数据 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            数据
          </label>
          <textarea 
            v-model="signData" 
            rows="5" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            placeholder="在此输入要签名或验证的数据"
          ></textarea>
        </div>
        
        <!-- 签名 -->
        <div v-if="signOperation === 'verify'" class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            签名 (Base64格式)
          </label>
          <textarea 
            v-model="signature" 
            rows="3" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="在此输入签名数据"
          ></textarea>
        </div>
        
        <!-- 处理按钮 -->
        <div class="mb-4">
          <button 
            @click="processSignVerify" 
            :disabled="isProcessingSign || !canProcessSign"
            class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
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
        
        <!-- 结果输出 (签名结果或验证结果) -->
        <div v-if="signOperation === 'sign' && generatedSignature" class="mt-4">
          <div class="flex justify-between items-center mb-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              签名结果 (Base64格式)
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
            rows="3" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
        
        <!-- 验证结果 -->
        <div v-if="signOperation === 'verify' && verificationResult !== null" class="mt-4">
          <div 
            class="p-4 rounded-md text-center"
            :class="verificationResult ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900' : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900'"
          >
            <div class="text-lg font-medium mb-1">
              {{ verificationResult ? '签名验证成功' : '签名验证失败' }}
            </div>
            <p class="text-sm">
              {{ verificationResult ? '数据未被篡改，且来自预期的发送者。' : '数据可能已被篡改，或签名不是由对应的私钥创建的。' }}
            </p>
          </div>
        </div>
        
        <!-- 错误消息 -->
        <div v-if="signError" class="mt-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm rounded-md border border-red-200 dark:border-red-900">
          {{ signError }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import JSEncrypt from 'jsencrypt'

// 通用状态
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
    alert('生成RSA密钥对时出错：' + err.message)
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
  // 可以在这里添加初始化逻辑，如从localStorage加载上一次使用的密钥等
})
</script> 