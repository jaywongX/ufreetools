<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：密钥管理 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{
                    $t('tools.rsa-encrypt-decrypt.keyManagement') }}</h2>

                <!-- 密钥生成 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
                        $t('tools.rsa-encrypt-decrypt.keySize') }}</label>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <button v-for="size in keySizes" :key="size" @click="keySize = size"
                            class="px-3 py-1.5 rounded-md text-sm"
                            :class="keySize === size
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'">
                            {{ size }} {{ $t('tools.rsa-encrypt-decrypt.bits') }}
                        </button>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <button @click="generateKeyPair"
                            class="flex-1 py-2 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
                            :disabled="isGenerating">
                            <span v-if="isGenerating">{{ $t('tools.rsa-encrypt-decrypt.generating') }}</span>
                            <span v-else>{{ $t('tools.rsa-encrypt-decrypt.generateKeyPair') }}</span>
                        </button>
                    </div>
                </div>

                <!-- 公钥 -->
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{
                            $t('tools.rsa-encrypt-decrypt.publicKey') }}</label>
                        <div class="flex gap-2">
                            <button @click="copyToClipboard(publicKey)"
                                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                                :title="$t('tools.rsa-encrypt-decrypt.copyToClipboard')">
                                {{ $t('tools.rsa-encrypt-decrypt.copy') }}
                            </button>

                            <div class="relative">
                                <label for="import-public-key"
                                    class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors cursor-pointer"
                                    :title="$t('tools.rsa-encrypt-decrypt.importKey')">
                                    {{ $t('tools.rsa-encrypt-decrypt.import') }}
                                </label>
                                <input id="import-public-key" type="file" accept=".pem,.key,.pub" class="hidden"
                                    @change="importPublicKey" />
                            </div>

                            <button @click="exportPublicKey"
                                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                                :title="$t('tools.rsa-encrypt-decrypt.exportKey')">
                                {{ $t('tools.rsa-encrypt-decrypt.export') }}
                            </button>
                        </div>
                    </div>

                    <!-- 拖放区域 -->
                    <div class="w-full mb-2 border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors"
                        :class="isDraggingPublic ? 'border-primary bg-primary bg-opacity-10' : 'border-gray-300 dark:border-gray-600'"
                        @dragover.prevent="isDraggingPublic = true" @dragleave.prevent="isDraggingPublic = false"
                        @drop.prevent="handlePublicKeyDrop" @click="$refs.publicKeyInput.click()">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            {{ $t('tools.rsa-encrypt-decrypt.dragDropKey') }}
                        </p>
                        <input ref="publicKeyInput" type="file" accept=".pem,.key,.pub" class="hidden"
                            @change="importPublicKey" />
                    </div>

                    <textarea v-model="publicKey" rows="5"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm"
                        placeholder="-----BEGIN PUBLIC KEY-----..."></textarea>
                </div>

                <!-- 私钥 -->
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{
                            $t('tools.rsa-encrypt-decrypt.privateKey') }}</label>
                        <div class="flex gap-2">
                            <button @click="copyToClipboard(privateKey)"
                                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                                :title="$t('tools.rsa-encrypt-decrypt.copyToClipboard')">
                                {{ $t('tools.rsa-encrypt-decrypt.copy') }}
                            </button>

                            <div class="relative">
                                <label for="import-private-key"
                                    class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors cursor-pointer"
                                    :title="$t('tools.rsa-encrypt-decrypt.importKey')">
                                    {{ $t('tools.rsa-encrypt-decrypt.import') }}
                                </label>
                                <input id="import-private-key" type="file" accept=".pem,.key" class="hidden"
                                    @change="importPrivateKey" />
                            </div>

                            <button @click="exportPrivateKey"
                                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                                :title="$t('tools.rsa-encrypt-decrypt.exportKey')">
                                {{ $t('tools.rsa-encrypt-decrypt.export') }}
                            </button>
                        </div>
                    </div>

                    <!-- 拖放区域 -->
                    <div class="w-full mb-2 border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors"
                        :class="isDraggingPrivate ? 'border-primary bg-primary bg-opacity-10' : 'border-gray-300 dark:border-gray-600'"
                        @dragover.prevent="isDraggingPrivate = true" @dragleave.prevent="isDraggingPrivate = false"
                        @drop.prevent="handlePrivateKeyDrop" @click="$refs.privateKeyInput.click()">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            {{ $t('tools.rsa-encrypt-decrypt.dragDropKey') }}
                        </p>
                        <input ref="privateKeyInput" type="file" accept=".pem,.key" class="hidden"
                            @change="importPrivateKey" />
                    </div>

                    <textarea v-model="privateKey" rows="5"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm"
                        placeholder="-----BEGIN PRIVATE KEY-----..."></textarea>
                </div>
            </div>

            <!-- 右侧：加密/解密 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{
                    $t('tools.rsa-encrypt-decrypt.encryptDecrypt') }}</h2>

                <!-- 操作选择 -->
                <div class="mb-6">
                    <div class="flex flex-wrap gap-4">
                        <button @click="operation = 'encrypt'" class="flex-1 px-4 py-2 rounded-md transition-colors"
                            :class="operation === 'encrypt'
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'">
                            {{ $t('tools.rsa-encrypt-decrypt.encrypt') }}
                        </button>
                        <button @click="operation = 'decrypt'" class="flex-1 px-4 py-2 rounded-md transition-colors"
                            :class="operation === 'decrypt'
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'">
                            {{ $t('tools.rsa-encrypt-decrypt.decrypt') }}
                        </button>
                    </div>
                </div>

                <!-- 填充和格式选项 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
                            $t('tools.rsa-encrypt-decrypt.padding') }}</label>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <button v-for="pad in paddingMethods" :key="pad.value" @click="padding = pad.value"
                                class="px-3 py-1.5 rounded-md text-sm"
                                :class="padding === pad.value
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'">
                                {{ pad.label }}
                            </button>
                        </div>

                        <!-- 填充模式说明和长度限制 -->
                        <div v-if="padding"
                            class="text-xs text-gray-600 dark:text-gray-400 mb-4 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                            <p v-if="padding === 'none'" v-html="$t('tools.rsa-encrypt-decrypt.noPaddingWarning')"></p>
                            <p>{{ $t('tools.rsa-encrypt-decrypt.maxLength') }}:
                                <span class="font-medium">{{ getMaxInputLength() }} {{
                                    $t('tools.rsa-encrypt-decrypt.bytes') }}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
                            $t('tools.rsa-encrypt-decrypt.inputFormat') }}</label>
                        <div class="flex flex-wrap gap-2">
                            <button v-for="format in inputFormats" :key="format.value"
                                @click="inputFormat = format.value" class="px-3 py-1.5 rounded-md text-sm"
                                :class="inputFormat === format.value
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'">
                                {{ format.label }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 输入 -->
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ operation === 'encrypt' ? $t('tools.rsa-encrypt-decrypt.plaintext') :
                                $t('tools.rsa-encrypt-decrypt.ciphertext') }}
                        </label>
                        <div class="flex gap-2">
                            <label for="import-content"
                                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors cursor-pointer"
                                :title="$t('tools.rsa-encrypt-decrypt.importFile')">
                                {{ $t('tools.rsa-encrypt-decrypt.importFile') }}
                            </label>
                            <input id="import-content" type="file" class="hidden" @change="importContent" />
                        </div>
                    </div>

                    <!-- 拖放区域用于内容 -->
                    <div class="w-full mb-2 border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors"
                        :class="isDraggingContent ? 'border-primary bg-primary bg-opacity-10' : 'border-gray-300 dark:border-gray-600'"
                        @dragover.prevent="isDraggingContent = true" @dragleave.prevent="isDraggingContent = false"
                        @drop.prevent="handleContentDrop" @click="$refs.contentInput.click()">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            {{ $t('tools.rsa-encrypt-decrypt.dragDropContent') }}
                        </p>
                        <input ref="contentInput" type="file" class="hidden" @change="importContent" />
                    </div>

                    <textarea v-model="input" rows="5"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        :placeholder="operation === 'encrypt' ? $t('tools.rsa-encrypt-decrypt.plaintextPlaceholder') : $t('tools.rsa-encrypt-decrypt.ciphertextPlaceholder')"></textarea>
                </div>

                <!-- 操作按钮 -->
                <div class="mb-6">
                    <button @click="processOperation"
                        class="w-full py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-md transition-colors"
                        :disabled="isProcessing || !canProcess">
                        <span v-if="isProcessing">{{ $t('tools.rsa-encrypt-decrypt.processing') }}</span>
                        <span v-else>
                            {{ operation === 'encrypt' ? $t('tools.rsa-encrypt-decrypt.encrypt') :
                                $t('tools.rsa-encrypt-decrypt.decrypt') }}
                        </span>
                    </button>
                </div>

                <!-- 输出格式选择 -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
                        $t('tools.rsa-encrypt-decrypt.outputFormat') }}</label>
                    <div class="flex flex-wrap gap-2">
                        <button v-for="format in outputFormats" :key="format" @click="outputFormat = format"
                            class="px-3 py-1.5 rounded-md text-sm"
                            :class="outputFormat === format
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'">
                            {{ format }}
                        </button>
                    </div>
                </div>

                <!-- 输出 -->
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ operation === 'encrypt' ? $t('tools.rsa-encrypt-decrypt.ciphertext') :
                                $t('tools.rsa-encrypt-decrypt.plaintext') }}
                        </label>
                        <div class="flex gap-2">
                            <button @click="copyToClipboard(formattedOutput)"
                                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                                :disabled="!output" :title="$t('tools.rsa-encrypt-decrypt.copyToClipboard')">
                                {{ $t('tools.rsa-encrypt-decrypt.copy') }}
                            </button>
                            <button @click="downloadOutput"
                                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                                :disabled="!output" :title="$t('tools.rsa-encrypt-decrypt.download')">
                                {{ $t('tools.rsa-encrypt-decrypt.download') }}
                            </button>
                        </div>
                    </div>
                    <textarea v-model="formattedOutput" rows="5" readonly
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"></textarea>
                </div>
            </div>
        </div>
        <RsaEncryptDecryptArticle />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import RsaEncryptDecryptArticle from './RsaEncryptDecryptArticle.vue'
import forge from 'node-forge';


const { t } = useI18n();

// 密钥
const publicKey = ref('');
const privateKey = ref('');
const keySize = ref(2048);
const keySizes = [1024, 2048, 3072, 4096];
const isGenerating = ref(false);

// 拖放状态
const isDraggingPublic = ref(false);
const isDraggingPrivate = ref(false);
const isDraggingContent = ref(false);

// 加密/解密
const operation = ref('encrypt');
const padding = ref('pkcs1');
const paddingMethods = [
    { value: 'pkcs1', label: 'PKCS#1 v1.5' },
    { value: 'oaep', label: 'OAEP' },
    { value: 'none', label: t('tools.rsa-encrypt-decrypt.noPadding') }
];
const inputFormat = ref('text');
const inputFormats = [
    { value: 'text', label: t('tools.rsa-encrypt-decrypt.text') },
    { value: 'base64', label: 'Base64' },
    { value: 'hex', label: 'Hex' }
];
const input = ref('');
const output = ref('');
const outputFormat = ref('Base64');
const outputFormats = ['Base64', 'Hex', 'Text'];
const isProcessing = ref(false);

// 添加错误处理和显示
const error = ref('');
const showError = (msg, details = '') => {
    error.value = details ? `${msg}: ${details}` : msg;
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-red-600 text-white py-2 px-4 rounded-md z-50 transition-opacity duration-300 max-w-md';
    toast.innerHTML = `<div class="font-bold">${msg}</div>${details ? `<div class="text-sm mt-1">${details}</div>` : ''}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 5000);
};

// 计算最大输入长度
function getMaxInputLength() {
    if (!keySize.value) return 0;

    // 密钥字节数 (密钥位数 / 8)
    const keyBytes = keySize.value / 8;

    if (padding.value === 'none') {
        // 无填充：输入长度必须等于密钥长度
        return keyBytes;
    } else if (padding.value === 'pkcs1') {
        // PKCS#1 v1.5: 最大为密钥长度 - 11
        return keyBytes - 11;
    } else if (padding.value === 'oaep') {
        // OAEP: 最大为密钥长度 - 2 * 哈希长度(SHA-1 为 20) - 2
        return keyBytes - 2 * 20 - 2;
    }
    return 0;
}

// 检查输入长度
function checkInputLength(input) {
    if (!input) return true;

    let bytes;
    if (inputFormat.value === 'text') {
        // 字符串转为 UTF-8 字节
        bytes = new TextEncoder().encode(input).length;
    } else if (inputFormat.value === 'base64') {
        // Base64 解码后的字节数
        bytes = atob(input).length;
    } else if (inputFormat.value === 'hex') {
        // 十六进制解码后的字节数
        bytes = input.replace(/\s/g, '').length / 2;
    }

    const maxLength = getMaxInputLength();
    if (bytes > maxLength) {
        showError(
            t('tools.rsa-encrypt-decrypt.inputTooLong'),
            t('tools.rsa-encrypt-decrypt.maxAllowed', { max: maxLength, current: bytes })
        );
        return false;
    }
    return true;
}

// 计算属性
const canProcess = computed(() => {
    if (operation.value === 'encrypt') {
        return publicKey.value && input.value;
    } else {
        return privateKey.value && input.value;
    }
});

// 根据选择的输出格式转换输出
const formattedOutput = computed(() => {
    if (!output.value) return '';

    try {
        if (outputFormat.value === 'Base64') {
            if (operation.value === 'encrypt') {
                // 加密结果已是Base64格式，直接返回
                return output.value;
            } else {
                // 解密结果需要转为Base64
                return forge ? forge.util.encode64(output.value) : output.value;
            }
        } else if (outputFormat.value === 'Hex') {
            if (operation.value === 'encrypt') {
                // 加密结果是Base64，先转为二进制，再转为Hex
                return forge ? forge.util.bytesToHex(forge.util.decode64(output.value)) : output.value;
            } else {
                // 解密结果需要转为Hex
                return forge ? forge.util.bytesToHex(forge.util.createBuffer(output.value).getBytes()) : output.value;
            }
        } else {
            // Text格式
            if (operation.value === 'encrypt') {
                // 加密结果是Base64，不应试图转为文本
                return output.value;
            } else {
                // 解密结果本身就是文本
                return output.value;
            }
        }
    } catch (e) {
        console.error('Error formatting output:', e);
        return output.value;
    }
});

// 监视操作变化，切换时重置输出
watch(operation, () => {
    output.value = '';
});

// 监视输入格式变化
watch(inputFormat, () => {
    output.value = '';
});

// RSA 密钥生成
async function generateKeyPair() {
    if (!forge) {
        showToast(t('tools.rsa-encrypt-decrypt.libraryNotLoaded'));
        return;
    }

    isGenerating.value = true;

    try {
        // 异步生成密钥对，防止UI阻塞
        setTimeout(() => {
            const rsa = forge.pki.rsa;
            rsa.generateKeyPair({ bits: keySize.value, workers: 2 }, (err, keypair) => {
                if (err) {
                    console.error('Key generation error:', err);
                    showToast(t('tools.rsa-encrypt-decrypt.keyGenError'));
                    isGenerating.value = false;
                    return;
                }

                // 转换为 PEM 格式
                publicKey.value = forge.pki.publicKeyToPem(keypair.publicKey);
                privateKey.value = forge.pki.privateKeyToPem(keypair.privateKey);

                isGenerating.value = false;
                showToast(t('tools.rsa-encrypt-decrypt.keyGenSuccess'));
            });
        }, 10);
    } catch (error) {
        console.error('Key generation failed:', error);
        showToast(t('tools.rsa-encrypt-decrypt.keyGenError'));
        isGenerating.value = false;
    }
}

// 处理加密或解密操作
function processOperation() {
    if (!canProcess.value || !forge) return;

    isProcessing.value = true;

    try {
        if (operation.value === 'encrypt') {
            encryptData();
        } else {
            decryptData();
        }
        isProcessing.value = false;
    } catch (error) {
        console.error('Processing error:', error);
        showToast(t('tools.rsa-encrypt-decrypt.processingError'));
        isProcessing.value = false;
    }
}

// 使用公钥加密数据
function encryptData() {
    error.value = '';
    try {
        // 检查输入长度
        if (!checkInputLength(input.value)) {
            return;
        }

        // 解析公钥
        const pubKey = forge.pki.publicKeyFromPem(publicKey.value);

        // 根据选定的格式准备输入
        let data = input.value;
        if (inputFormat.value === 'base64') {
            data = forge.util.decode64(input.value);
        } else if (inputFormat.value === 'hex') {
            data = forge.util.hexToBytes(input.value);
        }

        // 使用选定的填充方式加密
        let encrypted;
        if (padding.value === 'pkcs1') {
            encrypted = pubKey.encrypt(data, 'RSAES-PKCS1-V1_5');
        } else if (padding.value === 'oaep') {
            encrypted = pubKey.encrypt(data, 'RSA-OAEP');
        } else {
            // 无填充，需要确保输入长度正确
            if (data.length !== keySize.value / 8) {
                throw new Error(t('tools.rsa-encrypt-decrypt.noPaddingLengthError'));
            }
            encrypted = pubKey.encrypt(data, 'NONE');
        }

        // 转换为 Base64 用于显示
        output.value = forge.util.encode64(encrypted);
    } catch (error) {
        console.error('Encryption error:', error);
        showError(t('tools.rsa-encrypt-decrypt.encryptionError'), error.message);
        output.value = '';
    }
}

// 使用私钥解密数据
function decryptData() {
    error.value = '';
    try {
        // 解析私钥
        const privKey = forge.pki.privateKeyFromPem(privateKey.value);

        // 准备输入
        let data;
        if (inputFormat.value === 'base64') {
            data = forge.util.decode64(input.value);
        } else if (inputFormat.value === 'hex') {
            data = forge.util.hexToBytes(input.value);
        } else {
            // 如果提供的是文本进行解密，尝试将其视为 Base64
            try {
                data = forge.util.decode64(input.value);
            } catch (e) {
                throw new Error(t('tools.rsa-encrypt-decrypt.invalidInputFormat'));
            }
        }

        // 使用选定的填充方式解密
        let decrypted;
        if (padding.value === 'pkcs1') {
            decrypted = privKey.decrypt(data, 'RSAES-PKCS1-V1_5');
        } else if (padding.value === 'oaep') {
            decrypted = privKey.decrypt(data, 'RSA-OAEP');
        } else {
            // 无填充
            decrypted = privKey.decrypt(data, 'NONE');
        }

        output.value = decrypted;
    } catch (error) {
        console.error('Decryption error:', error);
        showError(t('tools.rsa-encrypt-decrypt.decryptionError'), error.message);
        output.value = '';
    }
}

// 复制文本到剪贴板
function copyToClipboard(text) {
    if (!text) return;

    navigator.clipboard.writeText(text)
        .then(() => showToast(t('tools.rsa-encrypt-decrypt.copiedToClipboard')))
        .catch(() => showToast(t('tools.rsa-encrypt-decrypt.copyFailed')));
}

// 导入公钥
function importPublicKey(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        publicKey.value = e.target.result;
    };
    reader.readAsText(file);

    // 重置 input，允许再次选择同一文件
    event.target.value = '';
}

// 导入私钥
function importPrivateKey(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        privateKey.value = e.target.result;
    };
    reader.readAsText(file);

    // 重置 input，允许再次选择同一文件
    event.target.value = '';
}

// 导入内容
function importContent(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    if (inputFormat.value === 'text') {
        reader.onload = (e) => {
            input.value = e.target.result;
        };
        reader.readAsText(file);
    } else if (inputFormat.value === 'base64') {
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result);
            const base64 = btoa(
                Array.from(binary)
                    .map(byte => String.fromCharCode(byte))
                    .join('')
            );
            input.value = base64;
        };
        reader.readAsArrayBuffer(file);
    } else if (inputFormat.value === 'hex') {
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result);
            const hex = Array.from(binary)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
            input.value = hex;
        };
        reader.readAsArrayBuffer(file);
    }

    // 重置 input，允许再次选择同一文件
    event.target.value = '';
}

// 处理拖放公钥
function handlePublicKeyDrop(event) {
    isDraggingPublic.value = false;
    const file = event.dataTransfer.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        publicKey.value = e.target.result;
    };
    reader.readAsText(file);
}

// 处理拖放私钥
function handlePrivateKeyDrop(event) {
    isDraggingPrivate.value = false;
    const file = event.dataTransfer.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        privateKey.value = e.target.result;
    };
    reader.readAsText(file);
}

// 处理拖放内容
function handleContentDrop(event) {
    isDraggingContent.value = false;
    const file = event.dataTransfer.files[0];
    if (!file) return;

    // 复用导入内容的逻辑
    const reader = new FileReader();
    if (inputFormat.value === 'text') {
        reader.onload = (e) => {
            input.value = e.target.result;
        };
        reader.readAsText(file);
    } else if (inputFormat.value === 'base64') {
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result);
            const base64 = btoa(
                Array.from(binary)
                    .map(byte => String.fromCharCode(byte))
                    .join('')
            );
            input.value = base64;
        };
        reader.readAsArrayBuffer(file);
    } else if (inputFormat.value === 'hex') {
        reader.onload = (e) => {
            const binary = new Uint8Array(e.target.result);
            const hex = Array.from(binary)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
            input.value = hex;
        };
        reader.readAsArrayBuffer(file);
    }
}

// 导出公钥
function exportPublicKey() {
    if (!publicKey.value) return;

    const blob = new Blob([publicKey.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rsa_public_key.pem';
    a.click();
    URL.revokeObjectURL(url);
}

// 导出私钥
function exportPrivateKey() {
    if (!privateKey.value) return;

    const blob = new Blob([privateKey.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rsa_private_key.pem';
    a.click();
    URL.revokeObjectURL(url);
}

// 下载输出内容
function downloadOutput() {
    if (!formattedOutput.value) return;

    const filename = operation.value === 'encrypt' ? 'encrypted_output' : 'decrypted_output';
    const extension = outputFormat.value === 'Text' ? 'txt' : (outputFormat.value === 'Base64' ? 'b64' : 'hex');

    const blob = new Blob([formattedOutput.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
}

// 提示通知
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-md z-50 transition-opacity duration-300';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// 初始化
onMounted(() => {
    // 不需要动态加载库，因为我们已经通过npm导入
    console.log('Using forge library from npm package');
});
</script>

<style scoped>
.input-error {
    border-color: #ef4444;
}

/* 拖拽区域样式 */
.border-dashed {
    border-style: dashed;
}

/* 响应式样式 */
@media (max-width: 768px) {
    .grid-cols-1 {
        gap: 1.5rem;
    }

    /* 在移动设备上增加按钮高度提高点击区域 */
    button {
        min-height: 44px;
    }

    /* 优化移动端拖放区域 */
    [class*="drag"] {
        padding: 0.75rem;
    }
}

/* 按钮禁用状态样式 */
button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* 输入框获取焦点样式 */
textarea:focus,
select:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

/* 高亮动画 */
@keyframes highlight {
    0% {
        background-color: rgba(79, 70, 229, 0.1);
    }

    50% {
        background-color: rgba(79, 70, 229, 0.2);
    }

    100% {
        background-color: rgba(79, 70, 229, 0.1);
    }
}

.highlight {
    animation: highlight 2s ease-in-out infinite;
}
</style>