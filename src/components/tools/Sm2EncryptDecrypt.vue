<template>
    <div class="w-full max-w-full">
        <!-- 密钥管理区域 - 与RSA加解密风格一致 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-3 md:p-4 mb-4 md:mb-6 w-full">
            <h2 class="text-xl font-semibold mb-4">{{ t('tools.sm2-encrypt-decrypt.keyManagement') }}</h2>

            <!-- 按钮区域 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button @click="generateKeyPair"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    :disabled="isGenerating">
                    <span v-if="isGenerating">
                        <i class="fas fa-spinner fa-spin mr-2"></i>
                        {{ t('tools.sm2-encrypt-decrypt.generating') }}
                    </span>
                    <span v-else>{{ t('tools.sm2-encrypt-decrypt.generateKeyPair') }}</span>
                </button>

                <button @click="loadSampleData"
                    class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
                    {{ t('tools.sm2-encrypt-decrypt.loadSample') }}
                </button>

                <button @click="clearKeys"
                    class="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded">
                    {{ t('tools.sm2-encrypt-decrypt.clearKeys') }}
                </button>
            </div>

            <!-- 公钥区域 -->
            <div class="mb-6">
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-semibold">{{ t('tools.sm2-encrypt-decrypt.publicKey') }}</h3>
                    <div class="flex space-x-2">
                        <button v-if="publicKey" @click="copyToClipboard(publicKey)"
                            class="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded"
                            :title="t('tools.sm2-encrypt-decrypt.copyToClipboard')">
                            <i class="fas fa-copy mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.copy') }}
                        </button>
                        <button v-if="publicKey" @click="exportKey('public')"
                            class="bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 px-3 py-1 rounded"
                            :title="t('tools.sm2-encrypt-decrypt.exportKey')">
                            <i class="fas fa-download mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.exportKey') }}
                        </button>
                    </div>
                </div>

                <div class="relative">
                    <textarea v-model="publicKey"
                        class="w-full p-2 md:p-3 h-24 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                        readonly :placeholder="t('tools.sm2-encrypt-decrypt.noPublicKey')"></textarea>

                    <div class="absolute top-0 right-0 mt-2 mr-2">
                        <div class="flex space-x-2">
                            <button @click="importKey('public')"
                                class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                                <i class="fas fa-file-import mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.importKey') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 私钥区域 -->
            <div>
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-semibold">{{ t('tools.sm2-encrypt-decrypt.privateKey') }}</h3>
                    <div class="flex space-x-2">
                        <button v-if="privateKey" @click="copyToClipboard(privateKey)"
                            class="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded"
                            :title="t('tools.sm2-encrypt-decrypt.copyToClipboard')">
                            <i class="fas fa-copy mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.copy') }}
                        </button>
                        <button v-if="privateKey" @click="exportKey('private')"
                            class="bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 px-3 py-1 rounded"
                            :title="t('tools.sm2-encrypt-decrypt.exportKey')">
                            <i class="fas fa-download mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.exportKey') }}
                        </button>
                    </div>
                </div>

                <div class="relative">
                    <textarea v-model="privateKey"
                        class="w-full p-3 h-24 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                        readonly :placeholder="t('tools.sm2-encrypt-decrypt.noPrivateKey')"></textarea>

                    <div class="absolute top-0 right-0 mt-2 mr-2">
                        <div class="flex space-x-2">
                            <button @click="importKey('private')"
                                class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                                <i class="fas fa-file-import mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.importKey') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 加解密操作区域 - 左侧加密，右侧解密 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-3 md:p-4 mb-4 md:mb-6">
            <h2 class="text-xl font-semibold mb-4">{{ t('tools.sm2-encrypt-decrypt.operations') }}</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- 加密部分 -->
                <div class="border dark:border-gray-700 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="font-semibold">{{ t('tools.sm2-encrypt-decrypt.encrypt') }}</h3>
                        <div class="flex space-x-2">
                            <button @click="outputFormat = 'C1C2C3'" class="text-xs py-1 px-2 rounded"
                                :class="outputFormat === 'C1C2C3' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                C1C2C3
                            </button>
                            <button @click="outputFormat = 'C1C3C2'" class="text-xs py-1 px-2 rounded"
                                :class="outputFormat === 'C1C3C2' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                C1C3C2
                            </button>
                        </div>
                    </div>

                    <!-- 加密输入区 -->
                    <div class="mb-4">
                        <div class="flex justify-between items-center mb-2">
                            <label class="font-medium text-gray-700 dark:text-gray-300">
                                {{ t('tools.sm2-encrypt-decrypt.plaintext') }}
                            </label>
                            <div class="flex flex-wrap space-x-1 md:space-x-2">
                                <button @click="encryptInputType = 'text'"
                                    class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="encryptInputType === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.text') }}
                                </button>
                                <button @click="encryptInputType = 'hex'" class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="encryptInputType === 'hex' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.hex') }}
                                </button>
                                <button @click="encryptInputType = 'base64'"
                                    class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="encryptInputType === 'base64' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.base64') }}
                                </button>
                                <button @click="encryptInputType = 'file'"
                                    class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="encryptInputType === 'file' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.file') }}
                                </button>
                            </div>
                        </div>

                        <div v-if="encryptInputType === 'file'"
                            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-3 md:p-6 flex flex-col items-center justify-center cursor-pointer min-h-[150px]"
                            @click="triggerEncryptFileSelect" @dragover.prevent @drop.prevent="handleEncryptFileDrop">
                            <i class="fas fa-file-upload text-4xl text-gray-400 mb-2"></i>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                {{ t('tools.sm2-encrypt-decrypt.dragAndDrop') }}
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">{{
                                t('tools.sm2-encrypt-decrypt.orClickHere') }}</p>
                            <input type="file" ref="encryptFileSelector" class="hidden"
                                @change="handleEncryptFileSelect" />
                            <div v-if="encryptFileName" class="mt-4 text-sm font-medium text-blue-600">
                                <i class="fas fa-file mr-1"></i> {{ encryptFileName }}
                            </div>
                        </div>
                        <textarea v-else v-model="encryptInputData"
                            class="w-full p-2 md:p-3 h-36 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                            :placeholder="t('tools.sm2-encrypt-decrypt.enterPlaintext')"></textarea>
                    </div>

                    <!-- 加密输出区 - 新增分解显示 -->
                    <div class="mb-3">
                        <div class="flex justify-between items-center mb-2">
                            <label class="font-medium text-gray-700 dark:text-gray-300">
                                {{ t('tools.sm2-encrypt-decrypt.ciphertext') }}
                            </label>
                            <div class="flex space-x-2">
                                <button @click="encryptOutputViewFormat = 'text'" class="text-xs py-1 px-2 rounded"
                                    :class="encryptOutputViewFormat === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.text') }}
                                </button>
                                <button @click="encryptOutputViewFormat = 'hex'" class="text-xs py-1 px-2 rounded"
                                    :class="encryptOutputViewFormat === 'hex' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.hex') }}
                                </button>
                                <button @click="encryptOutputViewFormat = 'base64'" class="text-xs py-1 px-2 rounded"
                                    :class="encryptOutputViewFormat === 'base64' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.base64') }}
                                </button>
                            </div>
                        </div>

                        <div class="relative">
                            <textarea v-model="formattedEncryptOutput"
                                class="w-full p-3 h-24 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 resize-none"
                                readonly :placeholder="t('tools.sm2-encrypt-decrypt.encryptedResult')"></textarea>

                            <div class="absolute bottom-3 right-3 flex space-x-2">
                                <button v-if="encryptOutputData" @click="copyToClipboard(formattedEncryptOutput)"
                                    class="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded">
                                    <i class="fas fa-copy mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.copy') }}
                                </button>
                                <button v-if="encryptOutputData" @click="downloadEncryptOutput"
                                    class="bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 px-3 py-1 rounded">
                                    <i class="fas fa-download mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.download') }}
                                </button>
                            </div>
                        </div>

                        <!-- 分解显示C1、C2、C3部分 -->
                        <div v-if="encryptOutputData" class="mt-4 space-y-2">
                            <div>
                                <div class="flex justify-between items-center">
                                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">C1 ({{
                                        t('tools.sm2-encrypt-decrypt.coordinatePoint') }})</label>
                                    <button @click="copyToClipboard(cipherParts.c1)"
                                        class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <textarea v-model="cipherParts.c1"
                                    class="w-full p-2 text-xs h-10 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 resize-none"
                                    readonly></textarea>
                            </div>

                            <div>
                                <div class="flex justify-between items-center">
                                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {{ outputFormat === 'C1C2C3' ? 'C2 (' +
                                            t('tools.sm2-encrypt-decrypt.cipherData') + ')' : 'C3 (' +
                                        t('tools.sm2-encrypt-decrypt.hashValue') + ')' }}
                                    </label>
                                    <button
                                        @click="copyToClipboard(outputFormat === 'C1C2C3' ? cipherParts.c2 : cipherParts.c3)"
                                        class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <textarea :value="outputFormat === 'C1C2C3' ? cipherParts.c2 : cipherParts.c3"
                                    class="w-full p-2 text-xs h-10 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 resize-none"
                                    readonly></textarea>
                            </div>

                            <div>
                                <div class="flex justify-between items-center">
                                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {{ outputFormat === 'C1C2C3' ? 'C3 (' + t('tools.sm2-encrypt-decrypt.hashValue')
                                            + ')' : 'C2 (' + t('tools.sm2-encrypt-decrypt.cipherData') + ')' }}
                                    </label>
                                    <button
                                        @click="copyToClipboard(outputFormat === 'C1C2C3' ? cipherParts.c3 : cipherParts.c2)"
                                        class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <textarea :value="outputFormat === 'C1C2C3' ? cipherParts.c3 : cipherParts.c2"
                                    class="w-full p-2 text-xs h-10 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 resize-none"
                                    readonly></textarea>
                            </div>
                        </div>
                    </div>

                    <div v-if="encryptErrorMessage"
                        class="mb-3 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
                        <p class="font-medium">{{ t('tools.sm2-encrypt-decrypt.error') }}</p>
                        <p>{{ encryptErrorMessage }}</p>
                    </div>

                    <div class="flex space-x-3">
                        <button @click="encryptData"
                            class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
                            :disabled="isEncrypting || !canEncrypt">
                            <span v-if="isEncrypting">
                                <i class="fas fa-spinner fa-spin mr-2"></i>
                                {{ t('tools.sm2-encrypt-decrypt.processing') }}
                            </span>
                            <span v-else>
                                {{ t('tools.sm2-encrypt-decrypt.encrypt') }}
                            </span>
                        </button>
                        <button @click="clearEncryptInput"
                            class="flex-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded">
                            {{ t('tools.sm2-encrypt-decrypt.clear') }}
                        </button>
                    </div>
                </div>

                <!-- 解密部分 -->
                <div class="border dark:border-gray-700 rounded-lg p-4">
                    <div class="mb-3">
                        <h3 class="font-semibold">{{ t('tools.sm2-encrypt-decrypt.decrypt') }}</h3>
                    </div>

                    <!-- 解密输入区 -->
                    <div class="mb-4">
                        <div class="flex justify-between items-center mb-2">
                            <label class="font-medium text-gray-700 dark:text-gray-300">
                                {{ t('tools.sm2-encrypt-decrypt.ciphertext') }}
                            </label>
                            <div class="flex flex-wrap space-x-1 md:space-x-2">
                                <button @click="decryptInputType = 'text'"
                                    class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="decryptInputType === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.text') }}
                                </button>
                                <button @click="decryptInputType = 'hex'" class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="decryptInputType === 'hex' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.hex') }}
                                </button>
                                <button @click="decryptInputType = 'base64'"
                                    class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="decryptInputType === 'base64' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.base64') }}
                                </button>
                                <button @click="decryptInputType = 'file'"
                                    class="text-xs py-1 px-1 md:px-2 rounded mb-1"
                                    :class="decryptInputType === 'file' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.file') }}
                                </button>
                            </div>
                        </div>

                        <div v-if="decryptInputType === 'file'"
                            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-3 md:p-6 flex flex-col items-center justify-center cursor-pointer min-h-[150px]"
                            @click="triggerDecryptFileSelect" @dragover.prevent @drop.prevent="handleDecryptFileDrop">
                            <i class="fas fa-file-upload text-4xl text-gray-400 mb-2"></i>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                {{ t('tools.sm2-encrypt-decrypt.dragAndDrop') }}
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">{{
                                t('tools.sm2-encrypt-decrypt.orClickHere') }}</p>
                            <input type="file" ref="decryptFileSelector" class="hidden"
                                @change="handleDecryptFileSelect" />
                            <div v-if="decryptFileName" class="mt-4 text-sm font-medium text-blue-600">
                                <i class="fas fa-file mr-1"></i> {{ decryptFileName }}
                            </div>
                        </div>
                        <textarea v-else v-model="decryptInputData"
                            class="w-full p-2 md:p-3 h-36 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                            :placeholder="t('tools.sm2-encrypt-decrypt.enterCiphertext')"></textarea>
                    </div>

                    <!-- 解密输出区 -->
                    <div class="mb-3">
                        <div class="flex justify-between items-center mb-2">
                            <label class="font-medium text-gray-700 dark:text-gray-300">
                                {{ t('tools.sm2-encrypt-decrypt.plaintext') }}
                            </label>
                            <div class="flex space-x-2">
                                <button @click="decryptOutputViewFormat = 'text'" class="text-xs py-1 px-2 rounded"
                                    :class="decryptOutputViewFormat === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.text') }}
                                </button>
                                <button @click="decryptOutputViewFormat = 'hex'" class="text-xs py-1 px-2 rounded"
                                    :class="decryptOutputViewFormat === 'hex' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.hex') }}
                                </button>
                                <button @click="decryptOutputViewFormat = 'base64'" class="text-xs py-1 px-2 rounded"
                                    :class="decryptOutputViewFormat === 'base64' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'">
                                    {{ t('tools.sm2-encrypt-decrypt.base64') }}
                                </button>
                            </div>
                        </div>

                        <div class="relative">
                            <textarea v-model="formattedDecryptOutput"
                                class="w-full p-3 h-36 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 resize-none"
                                readonly :placeholder="t('tools.sm2-encrypt-decrypt.decryptedResult')"></textarea>

                            <div class="absolute bottom-3 right-3 flex space-x-2">
                                <button v-if="decryptOutputData" @click="copyToClipboard(formattedDecryptOutput)"
                                    class="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded">
                                    <i class="fas fa-copy mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.copy') }}
                                </button>
                                <button v-if="decryptOutputData" @click="downloadDecryptOutput"
                                    class="bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 px-3 py-1 rounded">
                                    <i class="fas fa-download mr-1"></i> {{ t('tools.sm2-encrypt-decrypt.download') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="decryptErrorMessage"
                        class="mb-3 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
                        <p class="font-medium">{{ t('tools.sm2-encrypt-decrypt.error') }}</p>
                        <p>{{ decryptErrorMessage }}</p>
                    </div>

                    <div class="flex space-x-3">
                        <button @click="decryptData"
                            class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
                            :disabled="isDecrypting || !canDecrypt">
                            <span v-if="isDecrypting">
                                <i class="fas fa-spinner fa-spin mr-2"></i>
                                {{ t('tools.sm2-encrypt-decrypt.processing') }}
                            </span>
                            <span v-else>
                                {{ t('tools.sm2-encrypt-decrypt.decrypt') }}
                            </span>
                        </button>
                        <button @click="clearDecryptInput"
                            class="flex-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded">
                            {{ t('tools.sm2-encrypt-decrypt.clear') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Sm2EncryptDecryptArticle />
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import * as sm2 from 'sm-crypto/src/sm2'
import Sm2EncryptDecryptArticle from './Sm2EncryptDecryptArticle.vue'

const { t } = useI18n()

// 密钥状态
const publicKey = ref('')
const privateKey = ref('')
const isGenerating = ref(false)

// 加密状态
const encryptInputType = ref('text')
const encryptInputData = ref('')
const encryptFileName = ref('')
const encryptFileData = ref(null)
const encryptOutputData = ref('')
const encryptOutputViewFormat = ref('text')
const encryptErrorMessage = ref('')
const isEncrypting = ref(false)

// 解密状态
const decryptInputType = ref('text')
const decryptInputData = ref('')
const decryptFileName = ref('')
const decryptFileData = ref(null)
const decryptOutputData = ref('')
const decryptOutputViewFormat = ref('text')
const decryptErrorMessage = ref('')
const isDecrypting = ref(false)

// 格式设置
const outputFormat = ref('C1C2C3') // C1C2C3 or C1C3C2

// 密文分解显示
const cipherParts = ref({
    c1: '',
    c2: '',
    c3: ''
})

// 文件输入引用
const encryptFileSelector = ref(null)
const decryptFileSelector = ref(null)

// 密钥组件
const publicKeyComponents = ref({
    x: '',
    y: ''
})

const privateKeyComponents = ref({
    d: ''
})

// 计算属性
const canEncrypt = computed(() =>
    publicKey.value && (encryptInputData.value || encryptFileData.value)
)

const canDecrypt = computed(() =>
    privateKey.value && (decryptInputData.value || decryptFileData.value)
)

// 格式化输出
const formattedEncryptOutput = computed(() => {
    if (!encryptOutputData.value) return ''

    try {
        if (encryptOutputViewFormat.value === 'text') {
            // Text is already in the proper format
            return encryptOutputData.value
        } else if (encryptOutputViewFormat.value === 'hex') {
            // Convert to hex
            let hex = ''
            for (let i = 0; i < encryptOutputData.value.length; i++) {
                const code = encryptOutputData.value.charCodeAt(i).toString(16)
                hex += code.length === 1 ? '0' + code : code
            }
            return hex.toUpperCase()
        } else {
            // Base64 - Use safe UTF-8 encoding before base64
            try {
                // First convert string to UTF-8 array
                const utf8 = new TextEncoder().encode(encryptOutputData.value);
                // Then convert UTF-8 array to binary string
                let binaryString = '';
                utf8.forEach(byte => {
                    binaryString += String.fromCharCode(byte);
                });
                // Then convert binary string to base64
                return btoa(binaryString);
            } catch (e) {
                console.error('Error converting to base64:', e);
                return encryptOutputData.value;
            }
        }
    } catch (error) {
        console.error('Error formatting encrypt output:', error);
        return encryptOutputData.value;
    }
})

const formattedDecryptOutput = computed(() => {
    if (!decryptOutputData.value) return ''

    try {
        if (decryptOutputViewFormat.value === 'text') {
            return decryptOutputData.value
        } else if (decryptOutputViewFormat.value === 'hex') {
            let hex = ''
            for (let i = 0; i < decryptOutputData.value.length; i++) {
                const code = decryptOutputData.value.charCodeAt(i).toString(16)
                hex += code.length === 1 ? '0' + code : code
            }
            return hex.toUpperCase()
        } else {
            // Base64 - Use safe UTF-8 encoding before base64
            try {
                // First convert string to UTF-8 array
                const utf8 = new TextEncoder().encode(decryptOutputData.value);
                // Then convert UTF-8 array to binary string
                let binaryString = '';
                utf8.forEach(byte => {
                    binaryString += String.fromCharCode(byte);
                });
                // Then convert binary string to base64
                return btoa(binaryString);
            } catch (e) {
                console.error('Error converting to base64:', e);
                return decryptOutputData.value;
            }
        }
    } catch (error) {
        console.error('Error formatting decrypt output:', error);
        return decryptOutputData.value;
    }
})

// 提取公钥中的X和Y坐标
const extractPublicKeyComponents = (pubKeyHex) => {
    try {
        // SM2公钥通常是65字节，其中第一个字节是0x04，表示未压缩格式
        // 接下来的32字节是X坐标，后32字节是Y坐标
        if (pubKeyHex.length === 130 && pubKeyHex.startsWith('04')) {
            const xCoord = pubKeyHex.substring(2, 66)
            const yCoord = pubKeyHex.substring(66)

            publicKeyComponents.value = {
                x: xCoord,
                y: yCoord
            }
        } else {
            // 如果格式不符合预期，清空组件
            publicKeyComponents.value = { x: '', y: '' }
        }
    } catch (error) {
        console.error('Error extracting public key components:', error)
        publicKeyComponents.value = { x: '', y: '' }
    }
}

// 提取私钥D值
const extractPrivateKeyComponents = (priKeyHex) => {
    try {
        // SM2私钥通常是32字节的D值
        if (priKeyHex.length === 64) {
            privateKeyComponents.value = { d: priKeyHex }
        } else {
            privateKeyComponents.value = { d: '' }
        }
    } catch (error) {
        console.error('Error extracting private key components:', error)
        privateKeyComponents.value = { d: '' }
    }
}

// 生成SM2密钥对
const generateKeyPair = async () => {
    try {
        isGenerating.value = true
        encryptErrorMessage.value = ''
        decryptErrorMessage.value = ''

        // 使用 sm-crypto 库生成密钥对
        const keyPair = sm2.generateKeyPairHex()

        // 提取公钥和私钥组件
        extractPublicKeyComponents(keyPair.publicKey)
        extractPrivateKeyComponents(keyPair.privateKey)

        // 格式化为PEM格式
        privateKey.value = formatKeyToPem(keyPair.privateKey, true)
        publicKey.value = formatKeyToPem(keyPair.publicKey, false)

        isGenerating.value = false
    } catch (error) {
        encryptErrorMessage.value = t('tools.sm2-encrypt-decrypt.errorKeyGeneration') + ': ' + error.message
        isGenerating.value = false
    }
}

// 格式化密钥为PEM格式
const formatKeyToPem = (keyHex, isPrivate) => {
    if (isPrivate) {
        return `-----BEGIN PRIVATE KEY-----\n${chunkString(keyHex, 64).join('\n')}\n-----END PRIVATE KEY-----`
    } else {
        return `-----BEGIN PUBLIC KEY-----\n${chunkString(keyHex, 64).join('\n')}\n-----END PUBLIC KEY-----`
    }
}

// 字符串分块函数
const chunkString = (str, length) => {
    return str.match(new RegExp(`.{1,${length}}`, 'g')) || []
}

// 清空所有字段
const clearKeys = () => {
    publicKey.value = ''
    privateKey.value = ''
    clearEncryptInput()
    clearDecryptInput()
}

// 清空加密输入
const clearEncryptInput = () => {
    encryptInputData.value = ''
    encryptOutputData.value = ''
    encryptErrorMessage.value = ''
    encryptFileName.value = ''
    encryptFileData.value = null
    cipherParts.value = { c1: '', c2: '', c3: '' }
}

// 清空解密输入
const clearDecryptInput = () => {
    decryptInputData.value = ''
    decryptOutputData.value = ''
    decryptErrorMessage.value = ''
    decryptFileName.value = ''
    decryptFileData.value = null
}

// 加载示例数据
const loadSampleData = async () => {
    try {
        // 生成新的密钥对
        await generateKeyPair()

        // 设置示例明文
        encryptInputType.value = 'text'
        encryptInputData.value = t('tools.sm2-encrypt-decrypt.samplePlaintext')

        // 设置默认的输出格式为文本
        encryptOutputViewFormat.value = 'text'

        // 立即加密示例数据
        await encryptData()

        // 立即解密示例数据
        await decryptData()
    } catch (error) {
        encryptErrorMessage.value = t('tools.sm2-encrypt-decrypt.error') + ': ' + error.message
    }
}

// 从PEM格式提取实际的密钥
const extractKeyFromPem = (pemString) => {
    try {
        // 移除头尾标记和换行符
        return pemString
            .replace(/-----BEGIN (PRIVATE|PUBLIC) KEY-----/, '')
            .replace(/-----END (PRIVATE|PUBLIC) KEY-----/, '')
            .replace(/\n/g, '')
            .trim()
    } catch (error) {
        return ''
    }
}

// 导入密钥
const importKey = (type) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.pem,.key,.txt'

    input.onchange = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (e) => {
            const content = e.target.result

            if (type === 'public') {
                publicKey.value = content
            } else {
                privateKey.value = content
            }
        }

        reader.readAsText(file)
    }

    input.click()
}

// 导出密钥
const exportKey = (type) => {
    const content = type === 'public' ? publicKey.value : privateKey.value
    const filename = type === 'public' ? 'sm2_public_key.pem' : 'sm2_private_key.pem'

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

// 触发文件选择
const triggerEncryptFileSelect = () => {
    encryptFileSelector.value.click()
}

const triggerDecryptFileSelect = () => {
    decryptFileSelector.value.click()
}

// 处理文件拖放
const handleEncryptFileDrop = (event) => {
    const file = event.dataTransfer.files[0]
    if (file) {
        encryptFileName.value = file.name

        const reader = new FileReader()
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result)

            if (encryptInputType.value === 'text') {
                const decoder = new TextDecoder()
                encryptInputData.value = decoder.decode(binary)
            } else if (encryptInputType.value === 'hex') {
                let hex = ''
                for (let i = 0; i < binary.length; i++) {
                    const code = binary[i].toString(16)
                    hex += code.length === 1 ? '0' + code : code
                }
                encryptInputData.value = hex.toUpperCase()
            } else if (encryptInputType.value === 'base64') {
                let binary_string = ''
                for (let i = 0; i < binary.length; i++) {
                    binary_string += String.fromCharCode(binary[i])
                }
                encryptInputData.value = btoa(binary_string)
            } else {
                encryptFileData.value = binary
                encryptInputData.value = ''
            }
        }

        reader.readAsArrayBuffer(file)
    }
}

const handleDecryptFileDrop = (event) => {
    const file = event.dataTransfer.files[0]
    if (file) {
        decryptFileName.value = file.name

        const reader = new FileReader()
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result)

            if (decryptInputType.value === 'text') {
                const decoder = new TextDecoder()
                decryptInputData.value = decoder.decode(binary)
            } else if (decryptInputType.value === 'hex') {
                let hex = ''
                for (let i = 0; i < binary.length; i++) {
                    const code = binary[i].toString(16)
                    hex += code.length === 1 ? '0' + code : code
                }
                decryptInputData.value = hex.toUpperCase()
            } else if (decryptInputType.value === 'base64') {
                let binary_string = ''
                for (let i = 0; i < binary.length; i++) {
                    binary_string += String.fromCharCode(binary[i])
                }
                decryptInputData.value = btoa(binary_string)
            } else {
                decryptFileData.value = binary
                decryptInputData.value = ''
            }
        }

        reader.readAsArrayBuffer(file)
    }
}

// 处理文件选择
const handleEncryptFileSelect = (event) => {
    const file = event.target.files[0]
    if (file) {
        encryptFileName.value = file.name

        const reader = new FileReader()
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result)

            if (encryptInputType.value === 'text') {
                const decoder = new TextDecoder()
                encryptInputData.value = decoder.decode(binary)
            } else if (encryptInputType.value === 'hex') {
                let hex = ''
                for (let i = 0; i < binary.length; i++) {
                    const code = binary[i].toString(16)
                    hex += code.length === 1 ? '0' + code : code
                }
                encryptInputData.value = hex.toUpperCase()
            } else if (encryptInputType.value === 'base64') {
                let binary_string = ''
                for (let i = 0; i < binary.length; i++) {
                    binary_string += String.fromCharCode(binary[i])
                }
                encryptInputData.value = btoa(binary_string)
            } else {
                encryptFileData.value = binary
                encryptInputData.value = ''
            }
        }

        reader.readAsArrayBuffer(file)
    }
}

const handleDecryptFileSelect = (event) => {
    const file = event.target.files[0]
    if (file) {
        decryptFileName.value = file.name

        const reader = new FileReader()
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result)

            if (decryptInputType.value === 'text') {
                const decoder = new TextDecoder()
                decryptInputData.value = decoder.decode(binary)
            } else if (decryptInputType.value === 'hex') {
                let hex = ''
                for (let i = 0; i < binary.length; i++) {
                    const code = binary[i].toString(16)
                    hex += code.length === 1 ? '0' + code : code
                }
                decryptInputData.value = hex.toUpperCase()
            } else if (decryptInputType.value === 'base64') {
                let binary_string = ''
                for (let i = 0; i < binary.length; i++) {
                    binary_string += String.fromCharCode(binary[i])
                }
                decryptInputData.value = btoa(binary_string)
            } else {
                decryptFileData.value = binary
                decryptInputData.value = ''
            }
        }

        reader.readAsArrayBuffer(file)
    }
}

// 复制到剪贴板
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            // 显示复制成功提示
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
            notification.textContent = t('tools.sm2-encrypt-decrypt.copySuccess');
            notification.style.transition = 'opacity 0.5s ease';
            
            document.body.appendChild(notification);
            
            // 2秒后淡出
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, 2000);
        })
        .catch((error) => {
            console.error('Failed to copy: ', error);
            
            // 显示复制失败提示
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50';
            notification.textContent = t('tools.sm2-encrypt-decrypt.copyError');
            notification.style.transition = 'opacity 0.5s ease';
            
            document.body.appendChild(notification);
            
            // 2秒后淡出
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, 2000);
        });
}

// 下载加密输出
const downloadEncryptOutput = () => {
    const blob = new Blob([formattedEncryptOutput.value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'encrypted_data.' + encryptOutputViewFormat.value
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

// 下载解密输出
const downloadDecryptOutput = () => {
    const blob = new Blob([formattedDecryptOutput.value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'decrypted_data.' + decryptOutputViewFormat.value
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

// 加密数据
const encryptData = async () => {
    try {
        isEncrypting.value = true
        encryptErrorMessage.value = ''

        if (!publicKey.value) {
            throw new Error(t('tools.sm2-encrypt-decrypt.errorNoPublicKey'))
        }

        // 提取公钥
        const pubKeyHex = extractKeyFromPem(publicKey.value)

        // 准备要加密的数据
        let dataToEncrypt = ''

        if (encryptFileData.value && encryptInputType.value === 'file') {
            // 文件数据处理
            const decoder = new TextDecoder()
            dataToEncrypt = decoder.decode(encryptFileData.value)
        } else {
            // 文本数据处理
            if (encryptInputType.value === 'hex') {
                // 十六进制转文本
                if (!/^[0-9A-Fa-f]+$/.test(encryptInputData.value)) {
                    throw new Error(t('tools.sm2-encrypt-decrypt.errorInvalidHex'))
                }

                dataToEncrypt = hexToText(encryptInputData.value)
            } else if (encryptInputType.value === 'base64') {
                // Base64转文本
                try {
                    dataToEncrypt = atob(encryptInputData.value)
                } catch (e) {
                    throw new Error(t('tools.sm2-encrypt-decrypt.errorInvalidBase64'))
                }
            } else {
                // 纯文本
                dataToEncrypt = encryptInputData.value
            }
        }

        // 加密数据 - 返回的是hex格式
        const cipherHex = sm2.doEncrypt(
            dataToEncrypt,
            pubKeyHex,
            outputFormat.value === 'C1C3C2' ? 1 : 0
        )

        // 存储原始hex格式密文用于解析各部分
        const originalCipherHex = cipherHex;

        // 根据输出格式视图选择进行转换
        if (encryptOutputViewFormat.value === 'text') {
            // 将hex转为文本形式的base64字符串，这样可以表示二进制数据
            try {
                // 将hex转为二进制字符串
                let binary = '';
                for (let i = 0; i < cipherHex.length; i += 2) {
                    binary += String.fromCharCode(parseInt(cipherHex.substr(i, 2), 16));
                }
                encryptOutputData.value = binary;
            } catch (e) {
                console.error('Error converting hex to base64:', e)
            }
        } else if (encryptOutputViewFormat.value === 'hex') {
            // 保持原始hex格式
            encryptOutputData.value = cipherHex;
        } else { // base64
            // 将hex转为base64
            try {
                // 将hex转为二进制字符串
                let binary = '';
                for (let i = 0; i < cipherHex.length; i += 2) {
                    binary += String.fromCharCode(parseInt(cipherHex.substr(i, 2), 16));
                }
                // 将二进制字符串转为base64
                encryptOutputData.value = btoa(binary);
            } catch (e) {
                console.error('Error converting hex to base64:', e)
            }
        }

        // 解析密文各部分 - 使用原始hex格式
        const c1Start = 0;
        const c1End = 128; // 公钥点的长度是128个十六进制字符

        if (outputFormat.value === 'C1C2C3') {
            // C1C2C3格式
            const c3Start = originalCipherHex.length - 64; // SM3哈希值的长度是64个十六进制字符

            cipherParts.value = {
                c1: originalCipherHex.substring(c1Start, c1End),
                c2: originalCipherHex.substring(c1End, c3Start),
                c3: originalCipherHex.substring(c3Start)
            }
        } else {
            // C1C3C2格式
            const c3Start = c1End;
            const c3End = c3Start + 64; // SM3哈希值的长度是64个十六进制字符

            cipherParts.value = {
                c1: originalCipherHex.substring(c1Start, c1End),
                c2: originalCipherHex.substring(c3End),
                c3: originalCipherHex.substring(c3Start, c3End)
            }
        }

        // 成功加密后，同步解密输入框的数据和格式
        decryptInputType.value = encryptOutputViewFormat.value;
        decryptInputData.value = encryptOutputData.value;

        isEncrypting.value = false;
    } catch (error) {
        encryptErrorMessage.value = error.message || t('tools.sm2-encrypt-decrypt.errorProcessing');
        isEncrypting.value = false;
    }
}

// 解密数据
const decryptData = async () => {
    try {
        isDecrypting.value = true
        decryptErrorMessage.value = ''

        if (!privateKey.value) {
            throw new Error(t('tools.sm2-encrypt-decrypt.errorNoPrivateKey'))
        }

        // 提取私钥
        const priKeyHex = extractKeyFromPem(privateKey.value)

        // 准备要解密的数据
        let ciphertext = ''

        if (decryptFileData.value && decryptInputType.value === 'file') {
            // 文件数据处理
            const decoder = new TextDecoder()
            ciphertext = decoder.decode(decryptFileData.value)
        } else {
            // 文本数据处理
            if (decryptInputType.value === 'hex') {
                // 已经是十六进制格式
                if (!/^[0-9A-Fa-f]+$/.test(decryptInputData.value)) {
                    throw new Error(t('tools.sm2-encrypt-decrypt.errorInvalidHex'))
                }
                ciphertext = decryptInputData.value
            } else if (decryptInputType.value === 'base64') {
                // Base64转十六进制
                try {
                    const binary = atob(decryptInputData.value)
                    ciphertext = ''
                    for (let i = 0; i < binary.length; i++) {
                        const hex = binary.charCodeAt(i).toString(16)
                        ciphertext += hex.length === 1 ? '0' + hex : hex
                    }
                } catch (e) {
                    throw new Error(t('tools.sm2-encrypt-decrypt.errorInvalidBase64'))
                }
            } else {
                const binary = decryptInputData.value
                ciphertext = ''
                for (let i = 0; i < binary.length; i++) {
                    const hex = binary.charCodeAt(i).toString(16)
                    ciphertext += hex.length === 1 ? '0' + hex : hex
                }
            }
        }

        // 解密数据
        const result = sm2.doDecrypt(
            ciphertext,
            priKeyHex,
            outputFormat.value === 'C1C3C2' ? 1 : 0
        )

        decryptOutputData.value = result
        isDecrypting.value = false
    } catch (error) {
        decryptErrorMessage.value = error.message || t('tools.sm2-encrypt-decrypt.errorProcessing')
        isDecrypting.value = false
    }
}

// 辅助函数：十六进制转文本
const hexToText = (hex) => {
    let text = ''
    for (let i = 0; i < hex.length; i += 2) {
        text += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    }
    return text
}

// 监听输入类型变化，在切换到文件模式时清空输入数据
watch(encryptInputType, (newVal) => {
    if (newVal === 'file') {
        encryptInputData.value = ''
    } else {
        encryptFileData.value = null
        encryptFileName.value = ''

        // 转换当前输入数据到新格式
        if (encryptInputData.value) {
            try {
                if (newVal === 'text') {
                    // 如果之前是hex，转换为文本
                    if (encryptInputType.value === 'hex' && /^[0-9A-Fa-f]+$/.test(encryptInputData.value)) {
                        encryptInputData.value = hexToText(encryptInputData.value)
                    }
                    // 如果之前是base64，转换为文本
                    else if (encryptInputType.value === 'base64') {
                        encryptInputData.value = atob(encryptInputData.value)
                    }
                } else if (newVal === 'hex') {
                    // 如果之前是文本，转换为hex
                    if (encryptInputType.value === 'text') {
                        encryptInputData.value = Array.from(encryptInputData.value)
                            .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
                            .join('')
                            .toUpperCase()
                    }
                    // 如果之前是base64，先转换为文本再转为hex
                    else if (encryptInputType.value === 'base64') {
                        const text = atob(encryptInputData.value)
                        encryptInputData.value = Array.from(text)
                            .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
                            .join('')
                            .toUpperCase()
                    }
                } else if (newVal === 'base64') {
                    // 如果之前是文本，转换为base64
                    if (encryptInputType.value === 'text') {
                        encryptInputData.value = btoa(encryptInputData.value)
                    }
                    // 如果之前是hex，先转为文本再转为base64
                    else if (encryptInputType.value === 'hex' && /^[0-9A-Fa-f]+$/.test(encryptInputData.value)) {
                        encryptInputData.value = btoa(hexToText(encryptInputData.value))
                    }
                }
            } catch (e) {
                // 如果转换失败，清空输入数据
                encryptInputData.value = ''
            }
        }
    }
})

watch(decryptInputType, (newVal) => {
    if (newVal === 'file') {
        decryptInputData.value = ''
    } else {
        decryptFileData.value = null
        decryptFileName.value = ''

        // 转换当前输入数据到新格式
        if (decryptInputData.value) {
            try {
                if (newVal === 'text') {
                    // 如果之前是hex，尝试转换为文本（注意：这可能不是有效的明文）
                    if (decryptInputType.value === 'hex' && /^[0-9A-Fa-f]+$/.test(decryptInputData.value)) {
                        decryptInputData.value = hexToText(decryptInputData.value)
                    }
                    // 如果之前是base64，转换为文本
                    else if (decryptInputType.value === 'base64') {
                        decryptInputData.value = atob(decryptInputData.value)
                    }
                } else if (newVal === 'hex') {
                    // 如果之前是文本，转换为hex
                    if (decryptInputType.value === 'text') {
                        decryptInputData.value = Array.from(decryptInputData.value)
                            .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
                            .join('')
                            .toUpperCase()
                    }
                    // 如果之前是base64，先转换为文本再转为hex
                    else if (decryptInputType.value === 'base64') {
                        const text = atob(decryptInputData.value)
                        decryptInputData.value = Array.from(text)
                            .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
                            .join('')
                            .toUpperCase()
                    }
                } else if (newVal === 'base64') {
                    // 如果之前是文本，转换为base64
                    if (decryptInputType.value === 'text') {
                        decryptInputData.value = btoa(decryptInputData.value)
                    }
                    // 如果之前是hex，先转为文本再转为base64
                    else if (decryptInputType.value === 'hex' && /^[0-9A-Fa-f]+$/.test(decryptInputData.value)) {
                        decryptInputData.value = btoa(hexToText(decryptInputData.value))
                    }
                }
            } catch (e) {
                // 如果转换失败，清空输入数据
                decryptInputData.value = ''
            }
        }
    }
})

// 组件挂载时初始化
onMounted(() => {
    // 可以在这里添加初始化逻辑，如检查是否支持SM2等
})
</script>

<style scoped>
.input-error {
    border-color: #ef4444;
}

textarea {
    font-family: monospace;
}

/* 拖放区域样式 */
.drag-over {
    border-color: #2563eb;
    background-color: rgba(37, 99, 235, 0.1);
}

/* 确保textarea不会被用户调整大小 */
textarea {
    resize: none;
}

/* 响应式调整 */
@media (max-width: 640px) {
    .btn-text {
        display: none;
    }

    .btn-icon {
        margin-right: 0;
    }
}
</style>