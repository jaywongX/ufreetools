<template>
  <div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <!-- 工具控制栏 -->
      <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex space-x-2 mb-2 sm:mb-0">
        
          <button 
            @click="handleGenerateRandomToken" 
            class="btn-primary"
            :disabled="isProcessing"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ $t('tools.jwt-debugger.actions.generateRandomToken') }}
          </button>
          <button 
            @click="clearAll" 
            class="btn-secondary"
            :disabled="isProcessing"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            {{ $t('tools.jwt-debugger.actions.clear') }}
          </button>
        </div>
      </div>
      
      <!-- 配置和结果区域 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <!-- 左侧配置区域 -->
        <div class="h-[calc(100vh-16rem)] min-h-[28rem] max-h-[40rem] flex flex-col">
          <div class="flex flex-wrap items-center mb-3">
            <div class="mr-4 mb-2 sm:mb-0">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">{{ $t('tools.jwt-debugger.labels.algorithm') }}:</span>
              <div class="inline-flex space-x-3">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="algorithm" value="HS256" class="form-radio text-primary">
                  <span class="ml-1 text-sm text-gray-700 dark:text-gray-300">HS256</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="algorithm" value="RSA" class="form-radio text-primary">
                  <span class="ml-1 text-sm text-gray-700 dark:text-gray-300">RSA</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="algorithm" value="SM2" class="form-radio text-primary">
                  <span class="ml-1 text-sm text-gray-700 dark:text-gray-300">SM2</span>
                </label>
              </div>
            </div>
          </div>
          
          <!-- 密钥输入和各种配置区域的容器 -->
          <div class="flex-1 overflow-y-auto pr-1 space-y-3">
            <!-- 密钥输入区域 -->
            <template v-if="algorithm === 'HS256'">
              <div>
                <div class="flex justify-between items-center mb-1">
                  <div class="flex items-center">
                    <span class="text-xs font-medium text-gray-700 dark:text-gray-300 mr-2">{{ $t('tools.jwt-debugger.labels.secretKey') }}</span>
                    <button 
                      @click="generateRandomSecretKey" 
                      class="btn-mini bg-indigo-500 hover:bg-indigo-600 text-white"
                      :disabled="isProcessing"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      {{ $t('tools.jwt-debugger.actions.generateRandomKey') }}
                    </button>
                  </div>
                  <button 
                    v-if="secretKey"
                    @click="copyToClipboard(secretKey)" 
                    class="text-xs text-primary hover:text-primary-dark"
                    :title="$t('tools.jwt-debugger.actions.copy')"
                  >
                    {{ $t('tools.jwt-debugger.actions.copy') }}
                  </button>
                </div>
                <input 
                  v-model="secretKey" 
                  :placeholder="$t('tools.jwt-debugger.placeholders.secretKey')" 
                  type="text"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                  :disabled="isProcessing"
                />
              </div>
            </template>
            
            <template v-else>
              <div>
                <div class="flex justify-between items-center mb-1">
                  <div class="flex items-center">
                    <span class="text-xs font-medium text-gray-700 dark:text-gray-300 mr-2">{{ $t('tools.jwt-debugger.labels.privateKey') }}</span>
                    <button 
                      @click="generateKeyPair(algorithm)" 
                      class="btn-mini bg-indigo-500 hover:bg-indigo-600 text-white"
                      :disabled="isProcessing"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      {{ $t('tools.jwt-debugger.actions.generateKeyPair') }} {{ algorithm }}
                    </button>
                  </div>
                  <button 
                    v-if="privateKey"
                    @click="copyToClipboard(privateKey)" 
                    class="text-xs text-primary hover:text-primary-dark"
                    :title="$t('tools.jwt-debugger.actions.copy')"
                  >
                    {{ $t('tools.jwt-debugger.actions.copy') }}
                  </button>
                </div>
                <textarea 
                  v-model="privateKey" 
                  :placeholder="$t('tools.jwt-debugger.placeholders.privateKey')" 
                  rows="2"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :disabled="isProcessing"
                ></textarea>
              </div>
              
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.jwt-debugger.labels.publicKey') }}</span>
                  <button 
                    v-if="publicKey"
                    @click="copyToClipboard(publicKey)" 
                    class="text-xs text-primary hover:text-primary-dark"
                    :title="$t('tools.jwt-debugger.actions.copy')"
                  >
                    {{ $t('tools.jwt-debugger.actions.copy') }}
                  </button>
                </div>
                <textarea 
                  v-model="publicKey" 
                  :placeholder="$t('tools.jwt-debugger.placeholders.publicKey')" 
                  rows="2"
                  class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :disabled="isProcessing"
                ></textarea>
              </div>

              <!-- 证书上传区域 (仅SM2算法显示) -->
              <div v-if="algorithm === 'SM2'">
                <div class="flex justify-between items-center mb-1 cursor-pointer" @click="toggleCertificatePanel">
                  <div class="flex items-center">
                    <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.jwt-debugger.labels.certificate') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-gray-500 dark:text-gray-400 transition-transform duration-200" :class="{'rotate-180': isCertificatePanelOpen}" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <button 
                    v-if="certificate"
                    @click.stop="clearCertificate" 
                    class="text-xs text-red-500 hover:text-red-700"
                    :title="$t('tools.jwt-debugger.buttons.clearCert')"
                  >
                    {{ $t('tools.jwt-debugger.buttons.clearCert') }}
                  </button>
                </div>
                
                <transition 
                  enter-active-class="transition ease-out duration-200" 
                  enter-from-class="transform opacity-0 scale-95" 
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-100" 
                  leave-from-class="transform opacity-100 scale-100" 
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div v-if="isCertificatePanelOpen || certificate" class="mt-2">
                    <div class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
                      <div v-if="!certificate" class="flex items-center justify-center">
                        <label class="cursor-pointer flex flex-col items-center justify-center py-4 w-full">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.jwt-debugger.labels.uploadCert') }}</span>
                          <input 
                            type="file" 
                            accept=".cer,.crt,.pem,.der" 
                            class="hidden" 
                            @change="handleCertificateUpload"
                          />
                        </label>
                      </div>
                      <div v-else class="text-sm text-gray-700 dark:text-gray-300 py-2">
                        <div><span class="font-semibold">{{ $t('tools.jwt-debugger.labels.certName') }}:</span> {{ certificateInfo.name }}</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400 mt-1 break-all">
                          <span class="font-semibold">{{ $t('tools.jwt-debugger.labels.sm3Fingerprint') }}:</span> {{ certificateInfo.sm3Fingerprint }}
                        </div>
                      </div>
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {{ $t('tools.jwt-debugger.labels.certUploadNote') }}
                    </div>
                  </div>
                </transition>
              </div>
            </template>
            
            <!-- 载荷区域添加复制按钮 -->
            <div>
              <div class="flex justify-between items-center mb-1">
                <div class="flex items-center">
                  <span class="text-xs font-medium text-gray-700 dark:text-gray-300 mr-2">{{ $t('tools.jwt-debugger.labels.payload') }}</span>
                  <button 
                    @click="generateRandomPayload" 
                    class="btn-mini bg-indigo-500 hover:bg-indigo-600 text-white"
                    :disabled="isProcessing"
                    :title="$t('tools.jwt-debugger.actions.generateRandomPayload')"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {{ $t('tools.jwt-debugger.actions.generateRandomPayload') }}
                  </button>
                </div>
                <button 
                  v-if="payload"
                  @click="copyToClipboard(payload)" 
                  class="text-xs text-primary hover:text-primary-dark"
                  :title="$t('tools.jwt-debugger.actions.copy')"
                >
                  {{ $t('tools.jwt-debugger.actions.copy') }}
                </button>
              </div>
              <textarea 
                v-model="payload" 
                :placeholder="$t('tools.jwt-debugger.placeholders.payload')"
                rows="6"
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                :disabled="isProcessing"
              ></textarea>
            </div>

            <!-- Token输入框 -->
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.jwt-debugger.labels.token') }}</span>
                <div class="flex space-x-2">
                  <button 
                    v-if="token"
                    @click="copyToClipboard(token)" 
                    class="text-xs text-primary hover:text-primary-dark"
                    :title="$t('tools.jwt-debugger.actions.copy')"
                  >
                    {{ $t('tools.jwt-debugger.actions.copy') }}
                  </button>
                </div>
              </div>
              <textarea 
                v-model="token" 
                :placeholder="$t('tools.jwt-debugger.placeholders.token')"
                rows="4"
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                :disabled="isProcessing"
                @input="handleTokenInput"
              ></textarea>
            </div>

            <!-- 验证公钥输入框 -->
            <div v-if="token && !publicKey && (detectedAlgorithm === 'RSA' || detectedAlgorithm === 'SM2')">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.jwt-debugger.labels.verificationPublicKey') }}</span>
              </div>
              <textarea 
                v-model="verificationPublicKey" 
                :placeholder="$t('tools.jwt-debugger.placeholders.verificationPublicKey')" 
                rows="2"
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                :disabled="isProcessing"
              ></textarea>
            </div>
          </div>

          <!-- 生成和验证按钮组 -->
          <div class="flex space-x-2 mt-3">
            <button 
              @click="handleGenerateToken" 
              class="btn-primary"
              :disabled="isProcessing"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ $t('tools.jwt-debugger.buttons.generateToken') }}
            </button>
            <button 
              @click="handleDecodeToken" 
              class="btn-info"
              :disabled="!token || isProcessing"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ $t('tools.jwt-debugger.buttons.decodeToken') }}
            </button>
            <button 
              @click="handleVerifyToken" 
              class="btn-success"
              :disabled="!token || isProcessing"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ $t('tools.jwt-debugger.buttons.verifyToken') }}
            </button>
          </div>
        </div>
        
        <!-- 右侧结果区域 -->
        <div class="h-[calc(100vh-16rem)] min-h-[28rem] max-h-[40rem] flex flex-col">
          <div class="flex justify-between items-center mb-1">
            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.jwt-debugger.labels.tokenResult') }}</span>
          </div>
          <div v-if="token && decodedToken" class="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md p-3 flex-1 overflow-auto">
            <!-- Token可视化 -->
            <div class="mb-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
              <div class="font-mono text-sm break-all">
                <span 
                  class="text-pink-600 dark:text-pink-400 cursor-pointer" 
                  @click="copyToClipboard(token.split('.')[0])"
                  :title="$t('tools.jwt-debugger.actions.copy')"
                >{{ token.split('.')[0] }}</span>
                <span class="text-gray-500 dark:text-gray-400">.</span>
                <span 
                  class="text-purple-600 dark:text-purple-400 cursor-pointer" 
                  @click="copyToClipboard(token.split('.')[1])"
                  :title="$t('tools.jwt-debugger.actions.copy')"
                >{{ token.split('.')[1] }}</span>
                <span class="text-gray-500 dark:text-gray-400">.</span>
                <span 
                  class="text-blue-600 dark:text-blue-400 cursor-pointer" 
                  @click="copyToClipboard(token.split('.')[2])"
                  :title="$t('tools.jwt-debugger.actions.copy')"
                >{{ token.split('.')[2] }}</span>
              </div>
            </div>
            
            <!-- Header -->
            <div class="mb-3">
              <div class="flex items-center justify-between mb-1">
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.jwt-debugger.sections.header') }}</div>
                <button 
                  @click="copyToClipboard(JSON.stringify(decodedToken.header, null, 2))" 
                  class="btn-link"
                  :title="$t('tools.jwt-debugger.actions.copy')"
                >
                  {{ $t('tools.jwt-debugger.actions.copy') }}
                </button>
              </div>
              <pre class="bg-white dark:bg-gray-700 p-2 rounded-md font-mono text-sm overflow-x-auto">{{ JSON.stringify(decodedToken.header, null, 2) }}</pre>
            </div>
            
            <!-- Payload -->
            <div>
              <div class="flex items-center justify-between mb-1">
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.jwt-debugger.sections.payload') }}</div>
                <button 
                  @click="copyToClipboard(JSON.stringify(decodedToken.payload, null, 2))" 
                  class="btn-link"
                  :title="$t('tools.jwt-debugger.actions.copy')"
                >
                  {{ $t('tools.jwt-debugger.actions.copy') }}
                </button>
              </div>
              <pre class="bg-white dark:bg-gray-700 p-2 rounded-md font-mono text-sm overflow-x-auto">{{ JSON.stringify(decodedToken.payload, null, 2) }}</pre>
              
              <!-- 时间戳解析 -->
              <div v-if="decodedToken.payload.iat || decodedToken.payload.exp" class="mt-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
                <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">{{ $t('tools.jwt-debugger.labels.timestamp') }}</div>
                <div v-if="decodedToken.payload.iat" class="text-sm mb-1">
                  <span class="font-medium">{{ $t('tools.jwt-debugger.labels.issuedAt') }}:</span> {{ formatTimestamp(decodedToken.payload.iat) }}
                </div>
                <div v-if="decodedToken.payload.exp" class="text-sm">
                  <span class="font-medium">{{ $t('tools.jwt-debugger.labels.expiration') }}:</span> {{ formatTimestamp(decodedToken.payload.exp) }}
                </div>
              </div>
            </div>
          </div>
          
          <div v-else class="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md p-3 flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div class="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p class="text-sm">{{ $t('tools.jwt-debugger.labels.tokenFormatDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 悬浮消息提示 -->
      <div 
        v-if="message" 
        class="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full shadow-lg rounded-lg px-6 py-4 flex items-center animate-message-pop"
        :class="{ 
          'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 border-l-4 border-green-500': messageType === 'success',
          'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100 border-l-4 border-red-500': messageType === 'error',
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 border-l-4 border-yellow-500': messageType === 'warning'
        }"
      >
        <div class="shrink-0">
          <svg v-if="messageType === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-green-500 dark:text-green-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <svg v-if="messageType === 'error'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-red-500 dark:text-red-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <svg v-if="messageType === 'warning'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-yellow-500 dark:text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3 font-medium">{{ message }}</div>
      </div>
    </div>

    <!-- 验证密钥输入弹窗 -->
    <div v-if="showVerificationDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-lg w-full mx-4">
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">{{ $t('tools.jwt-debugger.labels.verifyToken') }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {{ $t('tools.jwt-debugger.labels.tokenDecoded', { alg: detectedAlgorithm }) }}
          </p>
        </div>
        
        <template v-if="detectedAlgorithm === 'HS256'">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.jwt-debugger.labels.secretKey') }}
            </label>
            <input 
              v-model="verificationSecretKey" 
              type="text"
              class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              :placeholder="$t('tools.jwt-debugger.placeholders.verificationSecretKey')"
            />
          </div>
        </template>
        <template v-else>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.jwt-debugger.labels.publicKey') }}
            </label>
            <textarea 
              v-model="verificationPublicKey" 
              rows="3"
              class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
              :placeholder="$t('tools.jwt-debugger.placeholders.verificationPublicKey')"
            ></textarea>
          </div>
        </template>

        <div class="flex justify-end space-x-3 mt-6">
          <button 
            @click="closeVerificationDialog"
            class="btn-secondary"
          >
            {{ $t('tools.jwt-debugger.buttons.cancel') }}
          </button>
          <button 
            @click="confirmVerification"
            class="btn-primary"
          >
            {{ $t('tools.jwt-debugger.buttons.verify') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import * as jose from 'jose'
import * as sm2 from 'sm-crypto/src/sm2'
import { sm3 } from 'sm-crypto'

// 初始化国际化
const { t, locale } = useI18n()

// 路由信息
const route = useRoute()

// 状态变量
const algorithm = ref('HS256')
const payload = ref('{"sub": "1234567890", "name": "John Doe", "iat": 1516239022}')
const secretKey = ref('')
const privateKey = ref('')
const publicKey = ref('')
const token = ref('')
const decodedToken = ref(null)
const message = ref('')
const messageType = ref('success')
const isProcessing = ref(false)
const verificationPublicKey = ref('')
const detectedAlgorithm = ref(null)
const showVerificationDialog = ref(false)
const verificationSecretKey = ref('')
const certificate = ref(null)
const certificateInfo = ref({ name: '', sm3Fingerprint: '' })
const isCertificatePanelOpen = ref(false)

// 页面加载时设置标题
onMounted(() => {
  if (route.meta && route.meta.title) {
    document.title = route.meta.title
  }
})

// 监听算法变化，自动清空token和密钥
watch(algorithm, (newAlgorithm, oldAlgorithm) => {
  if (newAlgorithm !== oldAlgorithm) {
    token.value = ''
    decodedToken.value = null
    privateKey.value = ''
    publicKey.value = ''
    secretKey.value = ''
    verificationPublicKey.value = ''
    detectedAlgorithm.value = null
    certificate.value = null
    certificateInfo.value = { name: '', sm3Fingerprint: '' }
    isCertificatePanelOpen.value = false
  }
})

// 显示消息
const showMessage = (text, type = 'success') => {
  message.value = text
  messageType.value = type
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 复制到剪贴板
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    showMessage(t('tools.jwt-debugger.messages.copied'), 'success')
  } catch (err) {
    showMessage(t('tools.jwt-debugger.messages.copyFailed'), 'error')
  }
}

// 清空所有
const clearAll = () => {
  if (algorithm.value !== 'HS256') {
    privateKey.value = ''
    publicKey.value = ''
  } else {
    secretKey.value = ''
  }
  token.value = ''
  payload.value = '{"sub": "1234567890", "name": "John Doe", "iat": 1516239022}'
  decodedToken.value = null
  message.value = ''
  verificationPublicKey.value = ''
  showMessage(t('tools.jwt-debugger.messages.contentCleared'), 'success')
}

// 生成密钥对
const generateKeyPair = async (type) => {
  try {
    isProcessing.value = true
    
    if (type === 'RSA') {
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: 'RSASSA-PKCS1-v1_5',
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: 'SHA-256',
        },
        true,
        ['sign', 'verify']
      )

      const privateKeyData = await window.crypto.subtle.exportKey('pkcs8', keyPair.privateKey)
      const publicKeyData = await window.crypto.subtle.exportKey('spki', keyPair.publicKey)

      const privateKeyBase64 = btoa(String.fromCharCode(...new Uint8Array(privateKeyData)))
      const publicKeyBase64 = btoa(String.fromCharCode(...new Uint8Array(publicKeyData)))

      privateKey.value = `-----BEGIN PRIVATE KEY-----\n${privateKeyBase64}\n-----END PRIVATE KEY-----`
      publicKey.value = `-----BEGIN PUBLIC KEY-----\n${publicKeyBase64}\n-----END PUBLIC KEY-----`
    } else if (type === 'SM2') {
      const keyPair = sm2.generateKeyPairHex()
      privateKey.value = keyPair.privateKey
      publicKey.value = keyPair.publicKey
    }
    showMessage(t('tools.jwt-debugger.messages.keyGenerated'), 'success')
  } catch (error) {
    console.error('生成密钥对失败:', error)
    showMessage(t('tools.jwt-debugger.messages.keyGenerationFailed'), 'error')
  } finally {
    isProcessing.value = false
  }
}

// 处理证书上传
const handleCertificateUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  const reader = new FileReader()
  reader.onload = async (e) => {
    try {
      // 读取证书内容
      const fileContent = new Uint8Array(e.target.result)
      certificate.value = fileContent
      
      // 提取DER编码
      let derEncoded
      
      // 将内容转为文本进行检查
      const contentText = new TextDecoder().decode(fileContent)
      
      // 检测内容格式
      if (contentText.includes('-----BEGIN CERTIFICATE-----') && contentText.includes('-----END CERTIFICATE-----')) {
        // PEM格式 (带有BEGIN/END标记的Base64)
        console.log('检测到PEM格式证书')
        const base64Content = contentText
          .replace(/-----BEGIN CERTIFICATE-----/g, '')
          .replace(/-----END CERTIFICATE-----/g, '')
          .replace(/\s/g, '')
        
        try {
          derEncoded = Uint8Array.from(atob(base64Content), c => c.charCodeAt(0))
        } catch (error) {
          console.error('PEM格式解析失败:', error)
          showMessage(t('tools.jwt-debugger.messages.certFormatInvalid'), 'error')
          clearCertificate()
          return
        }
        
      } else if (/^[A-Za-z0-9+/=]+$/.test(contentText.trim())) {
        // 纯Base64格式（无PEM头尾）
        console.log('检测到Base64格式证书')
        try {
          derEncoded = Uint8Array.from(atob(contentText.trim()), c => c.charCodeAt(0))
        } catch (error) {
          // Base64解析失败，可能是DER格式
          console.warn('文件内容Base64解析失败，将作为DER格式处理')
          derEncoded = fileContent
        }
        
      } else {
        // 默认当作DER二进制格式处理
        console.log('检测到DER格式证书')
        derEncoded = fileContent
      }

      // 将DER编码转换为Base64
      const derBase64 = btoa(String.fromCharCode(...derEncoded))
      console.log(`DER编码Base64: ${derBase64}`)
      

      // 2. 使用SM3库计算哈希值（SM3库接受十六进制字符串输入）
      const sm3Hash = sm3(derEncoded)
      console.log(`SM3哈希结果: ${sm3Hash}`)
      
      // 3. 将SM3哈希结果（十六进制字符串）转换为字节数组
      const hashBytes = new Uint8Array(sm3Hash.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))
      
      // 4. 计算Base64Url编码（不带填充符）
      const base64Fingerprint = btoa(String.fromCharCode(...hashBytes))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '')
      
      console.log(`Base64Url编码结果: ${base64Fingerprint}`)
      
      certificateInfo.value = {
        name: file.name,
        sm3Fingerprint: base64Fingerprint
      }
      
      showMessage(t('tools.jwt-debugger.messages.certUploadSuccess'), 'success')
    } catch (error) {
      console.error('证书处理失败:', error)
      showMessage(t('tools.jwt-debugger.messages.certFormatInvalid'), 'error')
      clearCertificate()
    }
  }
  
  reader.onerror = () => {
    showMessage(t('tools.jwt-debugger.messages.certReadFailed'), 'error')
    clearCertificate()
  }
  
  reader.readAsArrayBuffer(file)
}

// 清除证书
const clearCertificate = () => {
  certificate.value = null
  certificateInfo.value = { name: '', sm3Fingerprint: '' }
}

// 切换证书面板显示/隐藏
const toggleCertificatePanel = () => {
  isCertificatePanelOpen.value = !isCertificatePanelOpen.value
}

// 修改生成Token函数以支持x5t#sm3字段
const generateToken = async () => {
  try {
    isProcessing.value = true
    
    let payloadObj
    try {
      payloadObj = JSON.parse(payload.value)
    } catch (error) {
      showMessage(t('tools.jwt-debugger.messages.payloadFormatError'), 'error')
      return null
    }

    let generatedToken
    const secretKeyBytes = new TextEncoder().encode(secretKey.value)

    switch (algorithm.value) {
      case 'HS256':
        if (!secretKey.value) {
          showMessage(t('tools.jwt-debugger.messages.pleaseInputKey'), 'warning')
          return null
        }
        generatedToken = await new jose.SignJWT(payloadObj)
          .setProtectedHeader({ alg: 'HS256' })
          .sign(secretKeyBytes)
        break
      case 'RSA':
        if (!privateKey.value) {
          showMessage(t('tools.jwt-debugger.messages.pleaseGenerateKeyPair', { type: 'RSA' }), 'warning')
          return null
        }
        const privateKeyBase64 = privateKey.value
          .replace('-----BEGIN PRIVATE KEY-----', '')
          .replace('-----END PRIVATE KEY-----', '')
          .replace(/\s/g, '')
        const privateKeyBinary = Uint8Array.from(atob(privateKeyBase64), c => c.charCodeAt(0))
        const privateKeyObject = await window.crypto.subtle.importKey(
          'pkcs8',
          privateKeyBinary,
          {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256',
          },
          true,
          ['sign']
        )
        generatedToken = await new jose.SignJWT(payloadObj)
          .setProtectedHeader({ alg: 'RS256' })
          .sign(privateKeyObject)
        break
      case 'SM2':
        if (!privateKey.value) {
          showMessage(t('tools.jwt-debugger.messages.pleaseGenerateKeyPair', { type: 'SM2' }), 'warning')
          return null
        }
        const encoder = new TextEncoder()
        // 创建JWT头部，根据是否有证书来决定是否添加x5t#sm3字段
        const header = {
          alg: 'SGD_SM3_SM2',
          typ: 'JWT'
        }
        
        // 如果上传了证书，添加x5t#sm3字段
        if (certificate.value && certificateInfo.value.sm3Fingerprint) {
          header['x5t#sm3'] = certificateInfo.value.sm3Fingerprint
        }
        
        const headerBase64 = btoa(String.fromCharCode(...encoder.encode(JSON.stringify(header)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
        const payloadBase64 = btoa(String.fromCharCode(...encoder.encode(JSON.stringify(payloadObj)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
        const message = headerBase64 + '.' + payloadBase64
        const signature = sm2.doSignature(sm3(message), privateKey.value, { hash: true })
        const signatureBase64 = btoa(String.fromCharCode(...new TextEncoder().encode(signature))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
        generatedToken = message + '.' + signatureBase64
        break
    }

    showMessage(t('tools.jwt-debugger.messages.tokenGenerated'), 'success')
    return generatedToken
  } catch (error) {
    console.error('生成Token失败:', error)
    showMessage(t('tools.jwt-debugger.messages.tokenGenerationFailed'), 'error')
    return null
  } finally {
    isProcessing.value = false
  }
}

// 处理生成Token
const handleGenerateToken = async () => {
  const newToken = await generateToken()
  if (newToken) {
    token.value = newToken
    decodedToken.value = decodeToken(newToken)
    showMessage(t('tools.jwt-debugger.messages.tokenGenerated'), 'success')
  }
}

// 处理生成随机Token
const handleGenerateRandomToken = async () => {
  // 先生成随机Payload
  generateRandomPayload()
  
  // 如果是HS256算法且没有密钥，则生成随机密钥
  if (algorithm.value === 'HS256' && !secretKey.value) {
    // 生成真正的随机密钥
    const randomBytes = new Uint8Array(32)
    window.crypto.getRandomValues(randomBytes)
    const randomKey = Array.from(randomBytes)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    secretKey.value = randomKey
  }
  
  // 如果是RSA或SM2算法且没有密钥对，则生成密钥对
  if (algorithm.value !== 'HS256' && (!privateKey.value || !publicKey.value)) {
    await generateKeyPair(algorithm.value)
  }
  
  // 生成Token
  const newToken = await generateToken()
  if (newToken) {
    token.value = newToken
    decodedToken.value = decodeToken(newToken)
    showMessage(t('tools.jwt-debugger.messages.randomTokenGenerated'), 'success')
  }
}

// 处理验证Token
const handleVerifyToken = async () => {
  if (!token.value) {
    showMessage(t('tools.jwt-debugger.messages.pleaseInputToken'), 'warning')
    return
  }

  try {
    // 验证token格式
    const parts = token.value.split('.')
    if (parts.length !== 3) {
      showMessage(t('tools.jwt-debugger.messages.tokenFormatError'), 'error')
      return
    }

    // 验证header部分是否为有效的base64和JSON
    try {
      const header = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')))
      if (!header.alg) {
        showMessage(t('tools.jwt-debugger.messages.tokenHeaderMissingAlg'), 'error')
        return
      }
      
      // 检测算法并自动填充密钥
      detectedAlgorithm.value = header.alg
      
      // 自动填充验证密钥
      if (detectedAlgorithm.value === 'HS256') {
        verificationSecretKey.value = secretKey.value
      } else if (detectedAlgorithm.value === 'RS256' && algorithm.value === 'RSA') {
        verificationPublicKey.value = publicKey.value
      } else if (detectedAlgorithm.value === 'SGD_SM3_SM2' && algorithm.value === 'SM2') {
        verificationPublicKey.value = publicKey.value
      }
      
      // 如果没有密钥值但当前算法相同，也尝试自动填充
      if (!verificationPublicKey.value && !verificationSecretKey.value) {
        if ((detectedAlgorithm.value === 'RS256' || detectedAlgorithm.value === 'SGD_SM3_SM2') && 
            (algorithm.value === 'RSA' || algorithm.value === 'SM2')) {
          verificationPublicKey.value = publicKey.value
        }
      }
    } catch (error) {
      showMessage(t('tools.jwt-debugger.messages.tokenHeaderInvalid'), 'error')
      return
    }

    // 显示验证弹窗
    showVerificationDialog.value = true
  } catch (error) {
    showMessage(t('tools.jwt-debugger.messages.tokenVerificationFailed'), 'error')
  }
}

// 处理Token输入
const handleTokenInput = () => {
  if (token.value) {
    const [headerB64, payloadB64] = token.value.split('.')
    const header = JSON.parse(atob(headerB64.replace(/-/g, '+').replace(/_/g, '/')))
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')))
    detectedAlgorithm.value = header.alg
  }
}

// 生成随机密钥
const generateRandomSecretKey = () => {
  try {
    const randomBytes = new Uint8Array(32)
    window.crypto.getRandomValues(randomBytes)
    const randomKey = Array.from(randomBytes)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    secretKey.value = randomKey
    showMessage(t('tools.jwt-debugger.messages.randomSecretGenerated'), 'success')
  } catch (error) {
    console.error('生成随机密钥失败:', error)
    showMessage(t('tools.jwt-debugger.messages.randomSecretGenerationFailed'), 'error')
  }
}

// 关闭验证弹窗
const closeVerificationDialog = () => {
  showVerificationDialog.value = false
  verificationSecretKey.value = ''
  verificationPublicKey.value = ''
}

// 确认验证
const confirmVerification = async () => {
  if (detectedAlgorithm.value === 'HS256' && !verificationSecretKey.value) {
    showMessage(t('tools.jwt-debugger.messages.pleaseInputVerificationKey'), 'warning')
    return
  }
  if ((detectedAlgorithm.value === 'RSA' || detectedAlgorithm.value === 'SM2') && !verificationPublicKey.value) {
    showMessage(t('tools.jwt-debugger.messages.pleaseInputPublicKey'), 'warning')
    return
  }

  const result = await verifyToken(token.value)
  if (result) {
    closeVerificationDialog()
  }
}

// 解码Token
const decodeToken = (tokenToDecode) => {
  try {
    const [headerB64, payloadB64] = tokenToDecode.split('.')
    const header = JSON.parse(atob(headerB64.replace(/-/g, '+').replace(/_/g, '/')))
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')))
    return { header, payload }
  } catch (error) {
    console.error('解码Token失败:', error)
    return null
  }
}

// 格式化时间戳为本地时间
const formatTimestamp = (timestamp) => {
  try {
    // 检查时间戳是秒级还是毫秒级
    // 如果时间戳小于13位数字，则认为是秒级时间戳
    const isSeconds = String(timestamp).length < 13
    const date = new Date(isSeconds ? timestamp * 1000 : timestamp)
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) {
      return t('tools.jwt-debugger.messages.invalidTimestamp')
    }
    
    // 格式化为当前语言环境的时间
    const formattedDate = new Intl.DateTimeFormat(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Shanghai'
    }).format(date)
    
    // 添加时间戳信息
    const timestampType = isSeconds ? 
      t('tools.jwt-debugger.labels.secondsTimestamp') : 
      t('tools.jwt-debugger.labels.millisecondsTimestamp')
    
    return `${formattedDate} (${timestampType}: ${timestamp})`
  } catch (error) {
    console.error('格式化时间戳失败:', error)
    return t('tools.jwt-debugger.messages.invalidTimestamp')
  }
}

// 生成随机Payload
const generateRandomPayload = () => {
  try {
    const now = Math.floor(Date.now() / 1000)
    const randomId = Math.random().toString(36).substring(2, 15)
    
    // 生成一个简单的UUID
    const generateSimpleUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      }).replace(/-/g, '')
    }
    
    const randomPayload = {
      sub: randomId,
      name: `user_${randomId.substring(0, 5)}`,
      iat: now,
      exp: now + 3600, // 1小时后过期
      jti: generateSimpleUUID(),
      iss: 'https://ufreetools.com',
      aud: 'ufreetools-client'
    }
    payload.value = JSON.stringify(randomPayload, null, 2)
    showMessage(t('tools.jwt-debugger.messages.randomPayloadGenerated'), 'success')
  } catch (error) {
    console.error('生成随机Payload失败:', error)
    showMessage(t('tools.jwt-debugger.messages.randomPayloadGenerationFailed'), 'error')
  }
}

// 验证Token
const verifyToken = async (tokenToVerify) => {
  try {
    isProcessing.value = true
    
    const [headerB64, payloadB64, signatureB64] = tokenToVerify.split('.')
    const header = JSON.parse(atob(headerB64.replace(/-/g, '+').replace(/_/g, '/')))
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')))

    // 验证时间
    const now = Math.floor(Date.now() / 1000)
    
    // 检查是否过期
    if (payload.exp && now > payload.exp) {
      throw new Error(t('tools.jwt-debugger.messages.tokenExpired', { time: formatTimestamp(payload.exp) }))
    }
    
    // 检查是否在生效时间之前
    if (payload.nbf && now < payload.nbf) {
      throw new Error(t('tools.jwt-debugger.messages.tokenNotEffective', { time: formatTimestamp(payload.nbf) }))
    }

    // 检查签发时间是否在未来
    if (payload.iat && now < payload.iat) {
      throw new Error(t('tools.jwt-debugger.messages.tokenIssuedInFuture', { time: formatTimestamp(payload.iat) }))
    }

    switch (header.alg) {
      case 'HS256': {
        const secretKeyBytes = new TextEncoder().encode(verificationSecretKey.value)
        await jose.jwtVerify(tokenToVerify, secretKeyBytes)
        break
      }
      case 'RS256': {
        const publicKeyBase64 = verificationPublicKey.value
          .replace('-----BEGIN PUBLIC KEY-----', '')
          .replace('-----END PUBLIC KEY-----', '')
          .replace(/\s/g, '')
        const publicKeyBinary = Uint8Array.from(atob(publicKeyBase64), c => c.charCodeAt(0))
        const publicKeyObject = await window.crypto.subtle.importKey(
          'spki',
          publicKeyBinary,
          {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256',
          },
          true,
          ['verify']
        )
        await jose.jwtVerify(tokenToVerify, publicKeyObject)
        break
      }
      case 'SGD_SM3_SM2': {
        const message = headerB64 + '.' + payloadB64
        const signature = atob(signatureB64.replace(/-/g, '+').replace(/_/g, '/'))
        const result = sm2.doVerifySignature(sm3(message), signature, verificationPublicKey.value, { hash: true })
        if (!result) {
          throw new Error(t('tools.jwt-debugger.errors.invalidSignature'))
        }
        break
      }
      default:
        throw new Error(t('tools.jwt-debugger.messages.algorithmNotSupported'))
    }

    showMessage(t('tools.jwt-debugger.messages.verificationSuccess'), 'success')
    return true
  } catch (error) {
    console.error('Token验证失败:', error)
    showMessage(error.message || t('tools.jwt-debugger.messages.verificationFailed'), 'error')
    return false
  } finally {
    isProcessing.value = false
  }
}

// 处理解析Token按钮点击
const handleDecodeToken = () => {
  if (!token.value) {
    showMessage(t('tools.jwt-debugger.messages.pleaseInputToken'), 'warning')
    return
  }
  
  try {
    decodedToken.value = decodeToken(token.value)
    if (decodedToken.value) {
      showMessage(t('tools.jwt-debugger.messages.tokenDecodeSuccess'), 'success')
    } else {
      showMessage(t('tools.jwt-debugger.messages.tokenDecodeFailed'), 'error')
    }
  } catch (error) {
    console.error('Token解析失败:', error)
    showMessage(t('tools.jwt-debugger.messages.tokenDecodeFailed'), 'error')
  }
}
</script>

<style scoped>
/* 基本按钮样式 */
.btn-base {
  @apply rounded font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50;
}

/* 主要按钮 - 主色调按钮 */
.btn-primary {
  @apply btn-base px-3 py-1.5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 text-white text-sm;
}

/* 次要按钮 - 灰色调 */
.btn-secondary {
  @apply btn-base px-3 py-1.5 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-sm;
}

/* 信息按钮 - 蓝色调 */
.btn-info {
  @apply btn-base px-3 py-1.5 bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 text-white text-sm;
}

/* 成功按钮 - 绿色调 */
.btn-success {
  @apply btn-base px-3 py-1.5 bg-green-500 hover:bg-green-600 focus:ring-green-400 text-white text-sm;
}

/* 迷你按钮 - 用于密钥生成等辅助功能 */
.btn-mini {
  @apply btn-base px-2 py-1 rounded text-xs focus:ring-1;
}

/* 链接按钮 - 用于次要操作 */
.btn-link {
  @apply text-xs text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 focus:outline-none;
}

/* 动画相关样式 */
@keyframes message-pop {
  0% { opacity: 0; transform: translate(-50%, -20px); }
  20% { opacity: 1; transform: translate(-50%, 0); }
  80% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -10px); }
}

.animate-message-pop {
  animation: message-pop 3s forwards;
}
</style> 