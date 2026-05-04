<template>
    <div class="space-y-6">
        <!-- Key Input Section -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 class="text-lg font-medium mb-4">{{ $t('tools.sm2-signature-verifier.keyInput') }}</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Private Key Input -->
                <div>
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.privateKey')
                    }}</label>
                    <div class="mb-2 flex flex-wrap gap-2">
                        <div class="flex items-center">
                            <input type="radio" id="private-key-hex" v-model="privateKeyFormat" value="hex"
                                class="mr-1">
                            <label for="private-key-hex" class="mr-2">HEX</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="private-key-pem" v-model="privateKeyFormat" value="pem"
                                class="mr-1">
                            <label for="private-key-pem" class="mr-2">PEM</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="private-key-base64" v-model="privateKeyFormat" value="base64"
                                class="mr-1">
                            <label for="private-key-base64" class="mr-2">Base64</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="private-key-der" v-model="privateKeyFormat" value="der"
                                class="mr-1">
                            <label for="private-key-der">DER</label>
                        </div>
                    </div>
                    <textarea v-model="privateKey" rows="6"
                        class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.sm2-signature-verifier.privateKeyPlaceholder')"></textarea>
                </div>

                <!-- Public Key Input -->
                <div>
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.publicKey')
                    }}</label>
                    <div class="mb-2 flex flex-wrap gap-2">
                        <div class="flex items-center">
                            <input type="radio" id="public-key-hex" v-model="publicKeyFormat" value="hex" class="mr-1">
                            <label for="public-key-hex" class="mr-2">HEX</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="public-key-pem" v-model="publicKeyFormat" value="pem" class="mr-1">
                            <label for="public-key-pem" class="mr-2">PEM</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="public-key-base64" v-model="publicKeyFormat" value="base64"
                                class="mr-1">
                            <label for="public-key-base64" class="mr-2">Base64</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="public-key-der" v-model="publicKeyFormat" value="der" class="mr-1">
                            <label for="public-key-der">DER</label>
                        </div>
                    </div>
                    <textarea v-model="publicKey" rows="6"
                        class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.sm2-signature-verifier.publicKeyPlaceholder')"></textarea>
                </div>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
                <button @click="generateKeyPair" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {{ $t('tools.sm2-signature-verifier.generateKeyPair') }}
                </button>
                <label for="pfx-file-input" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
                    {{ $t('tools.sm2-signature-verifier.importPfx') }}
                </label>
                <input id="pfx-file-input" type="file" accept=".pfx,.p12" @change="handlePfxImport" class="hidden">
                <button @click="clearKeys"
                    class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                    {{ $t('tools.sm2-signature-verifier.clear') }}
                </button>
            </div>
        </div>

        <!-- ID Parameter Input -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 class="text-lg font-medium mb-4">{{ $t('tools.sm2-signature-verifier.idParameter') }}</h2>
            <div class="mb-2 flex flex-wrap gap-2">
                <div class="flex items-center">
                    <input type="radio" id="id-text" v-model="idFormat" value="text" class="mr-1">
                    <label for="id-text" class="mr-2">{{ $t('tools.sm2-signature-verifier.text') }}</label>
                </div>
                <div class="flex items-center">
                    <input type="radio" id="id-hex" v-model="idFormat" value="hex" class="mr-1">
                    <label for="id-hex" class="mr-2">HEX</label>
                </div>
                <div class="flex items-center">
                    <input type="radio" id="id-base64" v-model="idFormat" value="base64" class="mr-1">
                    <label for="id-base64">Base64</label>
                </div>
            </div>
            <div class="mb-4">
                <input v-model="idValue" type="text"
                    class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                    :placeholder="$t('tools.sm2-signature-verifier.idPlaceholder')">
                <p class="text-sm text-gray-500 mt-1">{{ $t('tools.sm2-signature-verifier.idDescription') }}</p>
            </div>
        </div>

        <!-- Sign and Verify Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Signing Section -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h2 class="text-lg font-medium mb-4">{{ $t('tools.sm2-signature-verifier.sign') }}</h2>

                <!-- Input Format Selection -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.inputFormat')
                    }}</label>
                    <div class="flex flex-wrap gap-2">
                        <div class="flex items-center">
                            <input type="radio" id="sign-input-text" v-model="signInputFormat" value="text"
                                class="mr-1">
                            <label for="sign-input-text" class="mr-2">{{ $t('tools.sm2-signature-verifier.text')
                            }}</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="sign-input-hex" v-model="signInputFormat" value="hex" class="mr-1">
                            <label for="sign-input-hex" class="mr-2">HEX</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="sign-input-base64" v-model="signInputFormat" value="base64"
                                class="mr-1">
                            <label for="sign-input-base64">Base64</label>
                        </div>
                    </div>
                </div>

                <!-- Data to Sign Input -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.dataToSign')
                    }}</label>
                    <textarea v-model="dataToSign" rows="5"
                        class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.sm2-signature-verifier.dataToSignPlaceholder')"></textarea>
                </div>

                <!-- Sign Button -->
                <div class="mb-4">
                    <button @click="signData" :disabled="!canSign"
                        class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed">
                        {{ $t('tools.sm2-signature-verifier.sign') }}
                    </button>
                </div>

                <!-- Signature Output -->
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-1">
                        <label class="block text-sm font-medium">{{ $t('tools.sm2-signature-verifier.signature')
                            }}</label>
                        <div class="flex space-x-2">
                            <button @click="copySignature" :disabled="!signature"
                                class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                                {{ $t('tools.sm2-signature-verifier.copy') }}
                            </button>
                            <button @click="exportSignature" :disabled="!signature"
                                class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                                {{ $t('tools.sm2-signature-verifier.export') }}
                            </button>
                        </div>
                    </div>
                    <textarea v-model="signature" rows="4" readonly
                        class="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600"></textarea>
                </div>

                <!-- R and S Values -->
                <div class="mb-4 bg-gray-50 dark:bg-gray-800 p-2 rounded border">
                    <div class="flex justify-between items-center mb-1">
                        <div class="text-sm font-medium">{{ $t('tools.sm2-signature-verifier.signatureComponents') }}</div>
                        <button @click="showZDetails = !showZDetails" 
                                class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                            {{ showZDetails ? $t('tools.sm2-signature-verifier.hideDetails') : $t('tools.sm2-signature-verifier.showDetails') }}
                        </button>
                    </div>
                    <div class="grid grid-cols-1 gap-2">
                        <div>
                            <label class="text-xs">R:</label>
                            <input type="text" readonly v-model="signatureR"
                                class="w-full p-1 border rounded text-xs bg-gray-100 dark:bg-gray-700" />
                        </div>
                        <div>
                            <label class="text-xs">S:</label>
                            <input type="text" readonly v-model="signatureS"
                                class="w-full p-1 border rounded text-xs bg-gray-100 dark:bg-gray-700" />
                        </div>
                        <div>
                            <label class="text-xs">Z ({{ $t('tools.sm2-signature-verifier.zValue') }}):</label>
                            <input type="text" readonly v-model="zValue"
                                class="w-full p-1 border rounded text-xs bg-gray-100 dark:bg-gray-700" />
                        </div>
                        
                        <!-- Z值的详细信息 -->
                        <div v-if="showZDetails && zComponents" class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                            <div class="font-medium mb-1">{{ $t('tools.sm2-signature-verifier.zValueFormula') }}:</div>
                            <div class="font-mono mb-2">{{ zFormula }}</div>
                            
                            <div class="grid grid-cols-1 gap-1">
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">ENTLA:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.entla }}</div>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">ID:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.userId }}</div>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">a:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.a }}</div>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">b:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.b }}</div>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">xG:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.xG }}</div>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">yG:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.yG }}</div>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">xA:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.xA }}</div>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-1">
                                    <div class="font-medium">yA:</div>
                                    <div class="col-span-2 font-mono break-all">{{ zComponents.yA }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Output Format Selection -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.outputFormat')
                    }}</label>
                    <div class="flex flex-wrap items-center gap-2">
                        <div class="flex items-center">
                            <input type="radio" id="sign-output-der" v-model="signOutputFormat" value="der"
                                class="mr-1">
                            <label for="sign-output-der" class="mr-2">DER</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="sign-output-hex" v-model="signOutputFormat" value="hex"
                                class="mr-1">
                            <label for="sign-output-hex" class="mr-2">HEX</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="sign-output-base64" v-model="signOutputFormat" value="base64"
                                class="mr-1">
                            <label for="sign-output-base64" class="mr-2">Base64</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="sign-output-pem" v-model="signOutputFormat" value="pem"
                                class="mr-1">
                            <label for="sign-output-pem">PEM</label>
                        </div>
                    </div>
                </div>

                <!-- Error Display -->
                <div v-if="signError"
                    class="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
                    <p class="font-medium">{{ $t('tools.sm2-signature-verifier.signError') }}</p>
                    <p class="text-sm">{{ signError }}</p>
                </div>
            </div>

            <!-- Verification Section -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h2 class="text-lg font-medium mb-4">{{ $t('tools.sm2-signature-verifier.verify') }}</h2>

                <!-- Input Format Selection -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.inputFormat')
                    }}</label>
                    <div class="flex flex-wrap gap-2">
                        <div class="flex items-center">
                            <input type="radio" id="verify-input-text" v-model="verifyInputFormat" value="text"
                                class="mr-1">
                            <label for="verify-input-text" class="mr-2">{{ $t('tools.sm2-signature-verifier.text')
                            }}</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="verify-input-hex" v-model="verifyInputFormat" value="hex"
                                class="mr-1">
                            <label for="verify-input-hex" class="mr-2">HEX</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="verify-input-base64" v-model="verifyInputFormat" value="base64"
                                class="mr-1">
                            <label for="verify-input-base64">Base64</label>
                        </div>
                    </div>
                </div>

                <!-- Data to Verify Input -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.dataToVerify')
                    }}</label>
                    <textarea v-model="dataToVerify" rows="5"
                        class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.sm2-signature-verifier.dataToVerifyPlaceholder')"></textarea>
                </div>

                <!-- Signature Input -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">{{
                        $t('tools.sm2-signature-verifier.signatureToVerify') }}</label>
                    <textarea v-model="signatureToVerify" rows="3"
                        class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        :placeholder="$t('tools.sm2-signature-verifier.signatureToVerifyPlaceholder')"></textarea>
                </div>

                <!-- Signature Format Selection -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">{{ $t('tools.sm2-signature-verifier.signatureFormat')
                    }}</label>
                    <div class="flex flex-wrap items-center gap-2">
                        <div class="flex items-center">
                            <input type="radio" id="verify-sig-der" v-model="verifySignatureFormat" value="der"
                                class="mr-1">
                            <label for="verify-sig-der" class="mr-2">DER</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="verify-sig-hex" v-model="verifySignatureFormat" value="hex"
                                class="mr-1">
                            <label for="verify-sig-hex" class="mr-2">HEX</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="verify-sig-base64" v-model="verifySignatureFormat" value="base64"
                                class="mr-1">
                            <label for="verify-sig-base64" class="mr-2">Base64</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="verify-sig-pem" v-model="verifySignatureFormat" value="pem"
                                class="mr-1">
                            <label for="verify-sig-pem">PEM</label>
                        </div>
                    </div>
                </div>

                <!-- Verify Button -->
                <div class="mb-4">
                    <button @click="verifySignature" :disabled="!canVerify"
                        class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed">
                        {{ $t('tools.sm2-signature-verifier.verify') }}
                    </button>
                </div>

                <!-- Verification Result -->
                <div class="p-3 rounded-md" :class="verificationResultClass">
                    <p class="font-medium">{{ verificationResultText }}</p>
                </div>

                <!-- Error Display -->
                <div v-if="verifyError"
                    class="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
                    <p class="font-medium">{{ $t('tools.sm2-signature-verifier.verifyError') }}</p>
                    <p class="text-sm">{{ verifyError }}</p>
                </div>
            </div>
        </div>
        <Sm2SignatureVerifierArticle />
    </div>

    <!-- Add this modal for PIN input -->
    <div v-if="showPinModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 class="text-lg font-medium mb-4">{{ $t('tools.sm2-signature-verifier.enterPin') }}</h3>
            <input type="password" v-model="pfxPin" class="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600" 
                   :placeholder="$t('tools.sm2-signature-verifier.pinPlaceholder')">
            <div class="flex justify-end gap-2">
                <button @click="cancelPfxImport" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                    {{ $t('tools.sm2-signature-verifier.cancel') }}
                </button>
                <button @click="processPfxWithPin" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {{ $t('tools.sm2-signature-verifier.confirm') }}
                </button>
            </div>
        </div>
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import * as sm2 from 'sm-crypto/src/sm2';
import { sm3 } from 'sm-crypto';
import forge from 'node-forge';
import asn1 from 'asn1.js';
import Sm2SignatureVerifierArticle from './Sm2SignatureVerifierArticle.vue';

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n();

// Key pair state
const privateKey = ref('');
const publicKey = ref('');
const privateKeyFormat = ref('hex');
const publicKeyFormat = ref('hex');

// ID Parameter
const idValue = ref('1234567812345678');
const idFormat = ref('text');

// Signing state
const signInputFormat = ref('text');
const dataToSign = ref('');
const signature = ref('');
const signOutputFormat = ref('hex');
const signError = ref('');
const signatureR = ref('');
const signatureS = ref('');
const zValue = ref('');
const zFormula = ref('');
const zComponents = ref(null);
const showZDetails = ref(false);

// Verification state
const verifyInputFormat = ref('text');
const dataToVerify = ref('');
const signatureToVerify = ref('');
const verifySignatureFormat = ref('hex');
const verificationResult = ref(null);
const verifyError = ref('');

// ASN.1 structure
const ECDSASignature = asn1.define('ECDSASignature', function () {
    this.seq().obj(
        this.key('r').int(),
        this.key('s').int()
    );
});

// Add these new state variables
const showPinModal = ref(false);
const pfxPin = ref('');
const pfxBuffer = ref(null);
const pfxImportError = ref('');

// Computed properties
const canSign = computed(() => {
    return privateKey.value && dataToSign.value;
});

const canVerify = computed(() => {
    return publicKey.value && dataToVerify.value && signatureToVerify.value;
});

const verificationResultClass = computed(() => {
    if (verificationResult.value === null) {
        return 'bg-gray-100 dark:bg-gray-700';
    } else if (verificationResult.value === true) {
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
    } else {
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
    }
});

const verificationResultText = computed(() => {
    if (verificationResult.value === null) {
        return t('tools.sm2-signature-verifier.waitingForVerification');
    } else if (verificationResult.value === true) {
        return t('tools.sm2-signature-verifier.verificationSuccess');
    } else {
        return t('tools.sm2-signature-verifier.verificationFailed');
    }
});

// Watch for changes to sync data between sign and verify sections
watch(dataToSign, (newValue) => {
    dataToVerify.value = newValue;
});

watch(signInputFormat, (newValue) => {
    verifyInputFormat.value = newValue;
});

watch(signature, (newValue) => {
    if (newValue) {
        signatureToVerify.value = newValue;
        verifySignatureFormat.value = signOutputFormat.value;
    }
});

// Watch for changes in ID format to update ID representation
watch(idFormat, (newFormat, oldFormat) => {
    if (!idValue.value) return;

    try {
        // First convert to raw bytes based on old format
        let bytes;
        if (oldFormat === 'text') {
            bytes = stringToUtf8Bytes(idValue.value);
        } else if (oldFormat === 'hex') {
            bytes = hexToBytes(idValue.value);
        } else if (oldFormat === 'base64') {
            bytes = base64ToBytes(idValue.value);
        }

        // Then convert bytes to new format
        if (newFormat === 'text') {
            idValue.value = new TextDecoder().decode(bytes);
        } else if (newFormat === 'hex') {
            idValue.value = bytesToHex(bytes);
        } else if (newFormat === 'base64') {
            idValue.value = bytesToBase64(bytes);
        }
    } catch (error) {
        console.error('Error converting ID format:', error);
        // Keep the original value if conversion fails
    }
});

// Watch for changes in signature output format to update signature representation
watch(signOutputFormat, (newFormat, oldFormat) => {
    if (!signature.value) return;

    try {
        // First parse signature to hex format
        const signatureHex = parseSignature(signature.value, oldFormat);

        // Then convert to the new format
        signature.value = formatSignatureOutput(signatureHex, newFormat);

        // Also update the verification input if it matches
        if (signatureToVerify.value === signature.value && verifySignatureFormat.value === oldFormat) {
            signatureToVerify.value = signature.value;
            verifySignatureFormat.value = newFormat;
        }

        // Update R and S values display if needed
        if (signatureR.value && signatureS.value) {
            const { r, s } = extractRSFromSignature(signatureHex);
            signatureR.value = r;
            signatureS.value = s;
        }
    } catch (error) {
        console.error('Error converting signature format:', error);
        // Keep the original value if conversion fails
    }
});

// Helper functions
function stringToUtf8Bytes(str) {
    return new TextEncoder().encode(str);
}

function hexToBytes(hex) {
    if (hex.startsWith('0x')) {
        hex = hex.slice(2);
    }
    return new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

function base64ToBytes(base64) {
    const binary = window.atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

function bytesToHex(bytes) {
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function bytesToBase64(bytes) {
    const binary = String.fromCharCode.apply(null, bytes);
    return window.btoa(binary);
}

function formatPem(type, base64Data) {
    return `-----BEGIN ${type}-----\n${base64Data}\n-----END ${type}-----`;
}

function extractBase64FromPem(pem) {
    const lines = pem.split('\n');
    let base64 = '';
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.startsWith('-----')) {
            base64 += line.trim();
        }
    }
    return base64;
}

function showToast(message, isError = false) {
    toastRef.value.show(message); // Simple toast implementation
}

// Process ID parameter based on format
function processIdParameter() {
    try {
        let processedId = idValue.value;

        // Default is text format
        if (idFormat.value === 'hex') {
            // Convert hex to string
            const bytes = hexToBytes(idValue.value);
            processedId = new TextDecoder().decode(bytes);
        } else if (idFormat.value === 'base64') {
            // Convert base64 to string
            const bytes = base64ToBytes(idValue.value);
            processedId = new TextDecoder().decode(bytes);
        }

        return processedId;
    } catch (error) {
        throw new Error(`${t('tools.sm2-signature-verifier.invalidIdFormat')}: ${error.message}`);
    }
}

// Parse key based on format
function parseKey(keyData, format) {
    try {
        if (format === 'pem') {
            // 提取PEM格式中的base64编码部分
            const base64 = extractBase64FromPem(keyData);
            return bytesToHex(base64ToBytes(base64));
        } else if (format === 'base64') {
            return bytesToHex(base64ToBytes(keyData));
        } else if (format === 'der') {
            // DER格式应该是ASN.1编码的二进制数据的十六进制表示
            // 检查是否是以ASN.1 SEQUENCE标记开始
            if (keyData.startsWith('30')) {
                // 已经是十六进制格式的DER编码，直接返回
                return keyData;
            } else {
                // 尝试解析为base64格式的DER
                try {
                    return bytesToHex(base64ToBytes(keyData));
                } catch (e) {
                    console.error("Failed to parse DER as base64:", e);
                    // 假设输入已经是十六进制格式
                    return keyData;
                }
            }
        } else {
            // 默认为hex格式
            return keyData;
        }
    } catch (error) {
        throw new Error(`${t('tools.sm2-signature-verifier.invalidKeyFormat')}: ${error.message}`);
    }
}

// Generate a new SM2 key pair
function generateKeyPair() {
    try {
        const keyPair = sm2.generateKeyPairHex();

        // Format based on selected format
        if (privateKeyFormat.value === 'hex') {
            privateKey.value = keyPair.privateKey;
        } else if (privateKeyFormat.value === 'base64') {
            privateKey.value = bytesToBase64(hexToBytes(keyPair.privateKey));
        } else if (privateKeyFormat.value === 'pem') {
            const base64 = bytesToBase64(hexToBytes(keyPair.privateKey));
            privateKey.value = formatPem(t('tools.sm2-signature-verifier.privateKeyType'), base64);
        } else {
            privateKey.value = keyPair.privateKey; // Default to hex
        }

        if (publicKeyFormat.value === 'hex') {
            publicKey.value = keyPair.publicKey;
        } else if (publicKeyFormat.value === 'base64') {
            publicKey.value = bytesToBase64(hexToBytes(keyPair.publicKey));
        } else if (publicKeyFormat.value === 'pem') {
            const base64 = bytesToBase64(hexToBytes(keyPair.publicKey));
            publicKey.value = formatPem(t('tools.sm2-signature-verifier.publicKeyType'), base64);
        } else {
            publicKey.value = keyPair.publicKey; // Default to hex
        }
    } catch (error) {
        signError.value = error.message;
        showToast(t('tools.sm2-signature-verifier.keyGenError') + ': ' + error.message, true);
    }
}

// Clear all key fields
function clearKeys() {
    privateKey.value = '';
    publicKey.value = '';
    signError.value = '';
    verifyError.value = '';
}

// Convert input data based on selected format
function getInputDataBytes(data, format) {
    try {
        if (format === 'text') {
            return stringToUtf8Bytes(data);
        } else if (format === 'hex') {
            return hexToBytes(data);
        } else if (format === 'base64') {
            return base64ToBytes(data);
        }
    } catch (error) {
        throw new Error(t('tools.sm2-signature-verifier.invalidInputData') + ': ' + error.message);
    }
    throw new Error(t('tools.sm2-signature-verifier.unsupportedInputFormat'));
}

// Parse signature from various formats
function parseSignature(signatureData, format) {
    try {
        if (format === 'pem') {
            const base64 = extractBase64FromPem(signatureData);
            return bytesToHex(base64ToBytes(base64));
        } else if (format === 'base64') {
            return bytesToHex(base64ToBytes(signatureData));
        } else if (format === 'der') {
            // 检查是否是DER格式（以0x30开头的ASN.1序列）
            if (signatureData.startsWith('30')) {
                try {
                    // 使用ASN.1库解析DER格式签名
                    const signatureBuffer = Buffer.from(hexToBytes(signatureData));
                    const decoded = ECDSASignature.decode(signatureBuffer, 'der');

                    // 将BigInt转换为十六进制字符串，并填充到64字节长度
                    const r = decoded.r.toString(16).padStart(64, '0');
                    const s = decoded.s.toString(16).padStart(64, '0');

                    // 返回R|S拼接格式
                    return r + s;
                } catch (e) {
                    console.error("Error parsing DER signature:", e);
                    throw new Error(t('tools.sm2-signature-verifier.invalidDerFormat') + ': ' + e.message);
                }
            } else {
                // 如果不是DER格式，假设已经是R|S拼接格式
                return signatureData;
            }
        } else {
            // 默认为hex格式，假设是R|S拼接格式
            return signatureData;
        }
    } catch (error) {
        throw new Error(`${t('tools.sm2-signature-verifier.invalidSignatureFormat')}: ${error.message}`);
    }
}

// Format signature to requested output format
function formatSignatureOutput(signatureHex, format) {
    try {
        if (format === 'hex') {
            return signatureHex;
        } else if (format === 'base64') {
            return bytesToBase64(hexToBytes(signatureHex));
        } else if (format === 'pem') {
            const base64 = bytesToBase64(hexToBytes(signatureHex));
            return formatPem(t('tools.sm2-signature-verifier.signatureType'), base64);
        } else if (format === 'der') {
            // 检查是否已经是DER格式
            if (signatureHex.startsWith('30')) {
                return signatureHex;
            }
            
            // 假设是R|S拼接格式（128字节的十六进制字符串）
            if (signatureHex.length >= 128) {
                // 提取R和S值
                const r = signatureHex.substring(0, 64);
                const s = signatureHex.substring(64, 128);
                
                try {
                    // 使用ASN.1库构建DER编码
                    // 将十六进制字符串转换为Buffer，这是asn1.js可以处理的格式
                    const rBuffer = Buffer.from(r, 'hex');
                    const sBuffer = Buffer.from(s, 'hex');
                    
                    const buffer = ECDSASignature.encode({
                        r: rBuffer,
                        s: sBuffer
                    }, 'der');
                    
                    // 转换为十六进制字符串
                    return bytesToHex(new Uint8Array(buffer));
                } catch (e) {
                    console.error("Error encoding to DER format:", e);
                    throw new Error(t('tools.sm2-signature-verifier.derEncodingFailed') + ': ' + e.message);
                }
            } else {
                throw new Error(t('tools.sm2-signature-verifier.invalidSignatureLength'));
            }
        } else {
            // 不支持的格式，默认返回hex
            return signatureHex;
        }
    } catch (error) {
        throw new Error(`${t('tools.sm2-signature-verifier.formatError')}: ${error.message}`);
    }
}

// Extract R and S values from signature
function extractRSFromSignature(signatureHex) {
    try {
        // 检查是否是简单的 R|S 拼接格式
        if (signatureHex.length === 128) {
            const r = signatureHex.substring(0, 64);
            const s = signatureHex.substring(64);
            return { r, s };
        }

        // 尝试使用 ASN.1 解析 DER 格式
        if (signatureHex.startsWith('30')) {
            const signatureBuffer = Buffer.from(hexToBytes(signatureHex));
            const decoded = ECDSASignature.decode(signatureBuffer, 'der');

            // 转换 BN 到十六进制字符串，去掉前导的 0x
            const r = decoded.r.toString(16).padStart(64, '0');
            const s = decoded.s.toString(16).padStart(64, '0');

            return { r, s };
        }

        // 如果既不是 128 位拼接格式，也不是 DER 格式，回退到简单的对半分
        const halfLength = Math.floor(signatureHex.length / 2);
        return {
            r: signatureHex.substring(0, halfLength),
            s: signatureHex.substring(halfLength)
        };
    } catch (error) {
        console.error("Error extracting R and S values:", error);
        throw new Error(t('tools.sm2-signature-verifier.invalidSignatureFormat') + ': ' + error.message);
    }
}

// 计算SM2签名的Z值
function calculateZ(publicKey, userId) {
    try {
        // SM2曲线参数
        const a = 'FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC';
        const b = '28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93';
        const xG = '32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7';
        const yG = 'BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0';

        // 确保公钥是完整的（带04前缀的未压缩格式）
        let fullPublicKey = publicKey;
        if (!fullPublicKey.startsWith('04') && fullPublicKey.length === 128) {
            fullPublicKey = '04' + fullPublicKey;
        }

        // 从完整公钥中提取坐标
        let xA, yA;
        if (fullPublicKey.startsWith('04') && fullPublicKey.length >= 130) {
            xA = fullPublicKey.substring(2, 66);
            yA = fullPublicKey.substring(66, 130);
        } else {
            throw new Error(t('tools.sm2-signature-verifier.invalidPublicKeyFormat'));
        }

        // 转换用户ID为字节数组
        const userIdBytes = typeof userId === 'string' ? stringToUtf8Bytes(userId) : userId;
        
        // 计算ENTLA - 用户ID比特长度的两字节表示
        const entla = new Uint8Array(2);
        const userIdBitsLength = userIdBytes.length * 8;
        entla[0] = (userIdBitsLength >> 8) & 0xFF;
        entla[1] = userIdBitsLength & 0xFF;

        // 拼接所有参数
        const sm3Data = new Uint8Array(entla.length + userIdBytes.length + 64 * 6);
        let offset = 0;
        
        // ENTLA
        sm3Data.set(entla, offset);
        offset += entla.length;
        
        // 用户ID
        sm3Data.set(userIdBytes, offset);
        offset += userIdBytes.length;
        
        // 椭圆曲线参数a
        sm3Data.set(hexToBytes(a), offset);
        offset += 32;
        
        // 椭圆曲线参数b
        sm3Data.set(hexToBytes(b), offset);
        offset += 32;
        
        // 基点G的x坐标
        sm3Data.set(hexToBytes(xG), offset);
        offset += 32;
        
        // 基点G的y坐标
        sm3Data.set(hexToBytes(yG), offset);
        offset += 32;
        
        // 公钥的x坐标
        sm3Data.set(hexToBytes(xA), offset);
        offset += 32;
        
        // 公钥的y坐标
        sm3Data.set(hexToBytes(yA), offset);
        
        // 计算SM3哈希 - 使用已导入的sm-crypto库
        const zValue = sm3 ? sm3(bytesToHex(sm3Data)) : 
                      (sm2.doSM3 ? sm2.doSM3(bytesToHex(sm3Data)) : 
                      sm3(bytesToHex(sm3Data)));
        
        return {
            value: zValue,
            formula: `Z = SM3(ENTLA || ID || a || b || xG || yG || xA || yA)`,
            components: {
                entla: bytesToHex(entla),
                userId: bytesToHex(userIdBytes),
                a: a,
                b: b,
                xG: xG,
                yG: yG,
                xA: xA,
                yA: yA
            }
        };
    } catch (error) {
        console.error('Error calculating Z value:', error);
        throw new Error(t('tools.sm2-signature-verifier.zCalculationFailed') + ': ' + error.message);
    }
}

// 更新signData函数，使用我们自定义的Z值计算函数
function signData() {
    if (!canSign.value) return;

    signError.value = '';
    signatureR.value = '';
    signatureS.value = '';
    zValue.value = '';
    zFormula.value = '';
    zComponents.value = null;

    try {
        // Parse the private key based on format
        const parsedPrivateKey = parseKey(privateKey.value, privateKeyFormat.value);
        
        // 获取对应的公钥（如果用户没有输入公钥，则从私钥派生）
        let parsedPublicKey = '';
        if (publicKey.value) {
            parsedPublicKey = parseKey(publicKey.value, publicKeyFormat.value);
        } else {
            // 从私钥派生公钥
            parsedPublicKey = sm2.getPublicKeyFromPrivateKey(parsedPrivateKey);
        }

        // Process the input data
        const inputBytes = getInputDataBytes(dataToSign.value, signInputFormat.value);
        const inputHex = bytesToHex(inputBytes);
        const idString = processIdParameter();
        
        // 使用自定义函数计算Z值
        const zResult = calculateZ(parsedPublicKey, idString);
        zValue.value = zResult.value;
        zFormula.value = zResult.formula;
        zComponents.value = zResult.components;
        
        // 显示Z值的详细信息
        showZDetails.value = true;

        // Use SM2 to sign with SM3 hashing
        const signatureHex = sm2.doSignature(inputHex, parsedPrivateKey, {
            hash: true, // Use SM3 for hashing
            userId: idString
        });

        // Extract and display R and S components
        const { r, s } = extractRSFromSignature(signatureHex);
        signatureR.value = r;
        signatureS.value = s;

        // Format output according to selected format
        signature.value = formatSignatureOutput(signatureHex, signOutputFormat.value);

        // Also set the verification data
        dataToVerify.value = dataToSign.value;
        signatureToVerify.value = signature.value;
        verifySignatureFormat.value = signOutputFormat.value;

    } catch (error) {
        signError.value = error.message;
        console.error('Signing error:', error);
    }
}

// Copy signature to clipboard
function copySignature() {
    if (!signature.value) return;

    try {
        navigator.clipboard.writeText(signature.value);
        showToast(t('tools.sm2-signature-verifier.signatureCopied'));
    } catch (error) {
        showToast(t('tools.sm2-signature-verifier.copyError') + ': ' + error.message, true);
    }
}

// Export signature to file
function exportSignature() {
    if (!signature.value) return;

    try {
        // Create file name based on current date/time
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `sm2-signature-${timestamp}`;

        // Add appropriate extension based on format
        let fileExtension;
        let fileContent = signature.value;
        let mimeType;

        if (signOutputFormat.value === 'pem') {
            fileExtension = '.pem';
            mimeType = 'application/x-pem-file';
        } else if (signOutputFormat.value === 'der') {
            fileExtension = '.der';
            mimeType = 'application/octet-stream';
        } else if (signOutputFormat.value === 'base64') {
            fileExtension = '.b64';
            mimeType = 'text/plain';
        } else {
            fileExtension = '.hex';
            mimeType = 'text/plain';
        }

        // Create blob and download link
        const blob = new Blob([fileContent], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName + fileExtension;

        // Trigger download
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showToast(t('tools.sm2-signature-verifier.signatureExported'));
    } catch (error) {
        showToast(t('tools.sm2-signature-verifier.exportError') + ': ' + error.message, true);
    }
}

// Verify a signature
function verifySignature() {
    if (!canVerify.value) return;

    verificationResult.value = null;
    verifyError.value = '';

    try {
        // Parse the public key based on format
        const parsedPublicKey = parseKey(publicKey.value, publicKeyFormat.value);

        // Process the input data with SM3
        const inputBytes = getInputDataBytes(dataToVerify.value, verifyInputFormat.value);
        const inputHex = bytesToHex(inputBytes);

        // Parse signature from selected format
        const parsedSignature = parseSignature(signatureToVerify.value, verifySignatureFormat.value);

        // Get ID parameter
        const idString = processIdParameter();

        // Verify the signature
        const isValid = sm2.doVerifySignature(inputHex, parsedSignature, parsedPublicKey, {
            hash: true, // Use SM3 for hashing
            userId: idString
        });

        verificationResult.value = isValid;

        if (!isValid) {
            verifyError.value = t('tools.sm2-signature-verifier.signatureHashMismatch');
        }
    } catch (error) {
        verificationResult.value = false;
        verifyError.value = error.message;
        console.error('Verification error:', error);
    }
}

// Add these new functions for PFX handling
function handlePfxImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        pfxBuffer.value = e.target.result;
        showPinModal.value = true;
    };
    reader.onerror = (e) => {
        pfxImportError.value = t('tools.sm2-signature-verifier.fileReadError');
        showToast(t('tools.sm2-signature-verifier.fileReadError'), true);
    };
    reader.readAsArrayBuffer(file);
    
    // Reset file input so the same file can be selected again
    event.target.value = '';
}

function cancelPfxImport() {
    showPinModal.value = false;
    pfxPin.value = '';
    pfxBuffer.value = null;
}

function processPfxWithPin() {
    if (!pfxBuffer.value) {
        cancelPfxImport();
        return;
    }
    
    try {
        // Convert ArrayBuffer to forge buffer
        const pfxBytes = new Uint8Array(pfxBuffer.value);
        
        console.log('Processing PFX file, size:', pfxBytes.length);
        
        // Create a forge buffer from the bytes
        const pfxForgeBuffer = forge.util.createBuffer(pfxBytes);
        
        // Parse the PKCS#12 ASN.1 structure
        const pfxAsn1 = forge.asn1.fromDer(pfxForgeBuffer);
        
        // Parse the PKCS#12 structure with the provided PIN
        const pfx = forge.pkcs12.pkcs12FromAsn1(pfxAsn1, pfxPin.value);
        
        console.log('PFX parsed successfully');
        
        // Extract private key and certificates
        let privateKeyInfo = null;
        let certBags = [];
        
        // Find private key bags - try all common bag types
        const keyBagTypes = [
            forge.pki.oids.pkcs8ShroudedKeyBag,
            forge.pki.oids.keyBag,
            forge.pki.oids.pkcs8EncryptedPrivateKeyInfo
        ];
        
        for (const bagType of keyBagTypes) {
            const bags = pfx.getBags({bagType: bagType});
            if (bags[bagType] && bags[bagType].length > 0) {
                privateKeyInfo = bags[bagType][0];
                console.log(`Found private key in bag type: ${bagType}`);
                break;
            }
        }
        
        // Find certificate bags
        const certBagType = forge.pki.oids.certBag;
        const certBagsObj = pfx.getBags({bagType: certBagType});
        if (certBagsObj[certBagType]) {
            certBags = certBagsObj[certBagType];
            console.log(`Found ${certBags.length} certificates`);
        }
        
        if (!privateKeyInfo) {
            throw new Error(t('tools.sm2-signature-verifier.noPrivateKeyFound'));
        }
        
        // Check if this is an RSA key
        if (privateKeyInfo.key && privateKeyInfo.key.n && privateKeyInfo.key.e) {
            // This is an RSA key
            throw new Error(t('tools.sm2-signature-verifier.rsaKeyNotSupported'));
        }
        
        // Check certificates for RSA
        if (certBags.length > 0) {
            const cert = certBags[0].cert;
            if (cert && cert.publicKey && cert.publicKey.n && cert.publicKey.e) {
                // This is an RSA certificate
                throw new Error(t('tools.sm2-signature-verifier.rsaCertNotSupported'));
            }
        }
        
        // Extract SM2 private key
        if (privateKeyInfo.key) {
            console.log('Extracting private key');
            
            try {
                // For SM2, we need to extract the raw private key value
                const privateKeyHex = extractSM2PrivateKeyFromASN1(privateKeyInfo.key);
                
                if (privateKeyHex) {
                    // Check if it's a valid SM2 private key (should be 32 bytes / 64 hex chars)
                    if (privateKeyHex.length >= 64) {
                        // Use the last 64 chars if longer
                        privateKey.value = privateKeyHex.slice(-64);
                    } else {
                        privateKey.value = privateKeyHex;
                    }
                    privateKeyFormat.value = 'hex';
                    
                    console.log('Private key extracted successfully');
                    
                    // If we have certificates, try to extract the public key
                    if (certBags.length > 0) {
                        console.log('Extracting public key from certificate');
                        const cert = certBags[0].cert;
                        
                        // Extract public key from certificate
                        const publicKeyHex = extractSM2PublicKeyFromCert(cert);
                        if (publicKeyHex) {
                            publicKey.value = publicKeyHex;
                            publicKeyFormat.value = 'hex';
                            console.log('Public key extracted from certificate');
                        } else {
                            // If extraction fails, try to derive from private key
                            try {
                                console.log('Deriving public key from private key');
                                const derivedPublicKey = sm2.getPublicKeyFromPrivateKey(privateKey.value);
                                publicKey.value = derivedPublicKey;
                                publicKeyFormat.value = 'hex';
                                console.log('Public key derived from private key');
                            } catch (e) {
                                console.error('Failed to derive public key:', e);
                                throw new Error(t('tools.sm2-signature-verifier.failedToDerivePublicKey') + ': ' + e.message);
                            }
                        }
                    } else {
                        // If no certificate, derive public key from private key
                        try {
                            console.log('Deriving public key from private key');
                            const derivedPublicKey = sm2.getPublicKeyFromPrivateKey(privateKey.value);
                            publicKey.value = derivedPublicKey;
                            publicKeyFormat.value = 'hex';
                            console.log('Public key derived from private key');
                        } catch (e) {
                            console.error('Failed to derive public key:', e);
                            throw new Error(t('tools.sm2-signature-verifier.failedToDerivePublicKey') + ': ' + e.message);
                        }
                    }
                    
                    showToast(t('tools.sm2-signature-verifier.pfxImportSuccess'));
                } else {
                    throw new Error(t('tools.sm2-signature-verifier.invalidPrivateKeyFormat'));
                }
            } catch (error) {
                if (error.message.includes('RSA') || error.message.includes('rsa')) {
                    throw new Error(t('tools.sm2-signature-verifier.rsaKeyNotSupported'));
                } else {
                    throw error;
                }
            }
        } else {
            throw new Error(t('tools.sm2-signature-verifier.invalidPrivateKeyFormat'));
        }
    } catch (error) {
        console.error('PFX import error:', error);
        pfxImportError.value = error.message;
        showToast(t('tools.sm2-signature-verifier.pfxImportError') + ': ' + error.message, true);
    } finally {
        cancelPfxImport();
    }
}

function extractSM2PrivateKeyFromASN1(asn1Data) {
    try {
        // Log the ASN.1 structure to help with debugging
        console.log('Private key ASN.1:', asn1Data);
        
        // Check if we have a forge key object with a special format
        if (asn1Data && typeof asn1Data === 'object') {
            // If it's a forge key object with direct access to the private key value
            if (asn1Data.privateKeyHex) {
                console.log('Found privateKeyHex property directly');
                return asn1Data.privateKeyHex;
            }
            
            // If it's a forge key object with direct access to the d value (private key)
            if (asn1Data.d) {
                console.log('Found d property (private key value)');
                if (typeof asn1Data.d.toString === 'function') {
                    return asn1Data.d.toString(16).padStart(64, '0');
                }
            }
        }
        
        // Handle ASN.1 structure parsing
        try {
            // 1. Convert to DER if needed
            let derBytes;
            if (typeof asn1Data === 'object' && asn1Data.type !== undefined && asn1Data.value !== undefined) {
                // It's already an ASN.1 object from forge
                derBytes = forge.asn1.toDer(asn1Data).getBytes();
            } else if (typeof asn1Data === 'string') {
                // It's already DER encoded as string
                derBytes = asn1Data;
            } else {
                // Assume it's already DER encoded in some format
                derBytes = asn1Data;
            }
            
            // 2. Parse the PKCS#8 or EC private key structure
            const buffer = forge.util.createBuffer(derBytes);
            
            // Check if we have enough bytes to parse
            if (buffer.length() < 2) {
                throw new Error('Not enough bytes to parse DER structure');
            }
            
            const asn1 = forge.asn1.fromDer(buffer);
            
            // Try different parsing strategies for different key formats
            
            // Strategy 1: Direct PKCS#8 structure
            // PKCS#8 structure: PrivateKeyInfo ::= SEQUENCE {
            //   version                   Version,
            //   privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
            //   privateKey                PrivateKey,
            //   attributes           [0]  IMPLICIT Attributes OPTIONAL }
            if (asn1.value && asn1.value.length >= 3) {
                const privateKeyObj = asn1.value[2];
                
                // Check if it's an OCTET STRING
                if (privateKeyObj && privateKeyObj.type === forge.asn1.Type.OCTET_STRING) {
                    const privateKeyBytes = privateKeyObj.value;
                    
                    // Try to parse the inner structure if it exists
                    try {
                        const innerBuffer = forge.util.createBuffer(privateKeyBytes);
                        if (innerBuffer.length() >= 2) {
                            const innerAsn1 = forge.asn1.fromDer(innerBuffer);
                            
                            // If it's a sequence, it might be an ECPrivateKey structure
                            if (innerAsn1.type === forge.asn1.Type.SEQUENCE) {
                                // ECPrivateKey ::= SEQUENCE {
                                //   version        INTEGER { ecPrivkeyVer1(1) },
                                //   privateKey     OCTET STRING,
                                //   parameters [0] ECParameters OPTIONAL,
                                //   publicKey  [1] BIT STRING OPTIONAL
                                // }
                                
                                // The private key value is typically at position 1
                                if (innerAsn1.value && innerAsn1.value.length >= 2) {
                                    const innerKeyObj = innerAsn1.value[1];
                                    if (innerKeyObj && innerKeyObj.type === forge.asn1.Type.OCTET_STRING) {
                                        const rawKeyHex = forge.util.bytesToHex(innerKeyObj.value);
                                        console.log('Found private key in nested ECPrivateKey structure');
                                        return rawKeyHex;
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.log('Failed to parse inner ASN.1 structure, using raw bytes');
                    }
                    
                    // If inner parsing fails, use the raw bytes
                    return forge.util.bytesToHex(privateKeyBytes);
                }
            }
            
            // Strategy 2: Direct ECPrivateKey structure (not wrapped in PKCS#8)
            // ECPrivateKey ::= SEQUENCE {
            //   version        INTEGER { ecPrivkeyVer1(1) },
            //   privateKey     OCTET STRING,
            //   parameters [0] ECParameters OPTIONAL,
            //   publicKey  [1] BIT STRING OPTIONAL
            // }
            if (asn1.type === forge.asn1.Type.SEQUENCE && asn1.value && asn1.value.length >= 2) {
                const versionObj = asn1.value[0];
                const privateKeyObj = asn1.value[1];
                
                if (versionObj.type === forge.asn1.Type.INTEGER && 
                    privateKeyObj && privateKeyObj.type === forge.asn1.Type.OCTET_STRING) {
                    console.log('Found direct ECPrivateKey structure');
                    return forge.util.bytesToHex(privateKeyObj.value);
                }
            }
            
            // Strategy 3: Just look for any OCTET STRING that might contain the private key
            // This is a fallback approach
            const findOctetString = (node) => {
                if (!node) return null;
                
                if (node.type === forge.asn1.Type.OCTET_STRING) {
                    return node.value;
                }
                
                if (node.value && Array.isArray(node.value)) {
                    for (const child of node.value) {
                        const result = findOctetString(child);
                        if (result) return result;
                    }
                }
                
                return null;
            };
            
            const octetStringValue = findOctetString(asn1);
            if (octetStringValue) {
                console.log('Found OCTET STRING using fallback search');
                return forge.util.bytesToHex(octetStringValue);
            }
            
            // If we get here, we couldn't find the private key
            throw new Error('Could not locate private key in ASN.1 structure');
            
        } catch (parseError) {
            console.error('ASN.1 parsing error:', parseError);
            
            // Last resort: If asn1Data is a forge key object, try to access raw key data
            if (asn1Data && typeof asn1Data === 'object') {
                // Try to access any property that might contain the key
                for (const prop of ['keyData', 'keyValue', 'rawKey', 'key', 'value']) {
                    if (asn1Data[prop]) {
                        console.log(`Found key data in property: ${prop}`);
                        if (typeof asn1Data[prop] === 'string') {
                            return asn1Data[prop];
                        } else if (typeof asn1Data[prop] === 'object' && asn1Data[prop].data) {
                            return forge.util.bytesToHex(asn1Data[prop].data);
                        }
                    }
                }
            }
            
            throw parseError;
        }
    } catch (error) {
        console.error('Error extracting SM2 private key:', error);
        throw new Error(t('tools.sm2-signature-verifier.privateKeyExtractionFailed') + ': ' + error.message);
    }
}

function extractSM2PublicKeyFromCert(cert) {
    try {
        // Extract public key from X.509 certificate
        console.log('Certificate:', cert);
        
        if (!cert || !cert.publicKey) {
            throw new Error('Invalid certificate or missing public key');
        }
        
        // For SM2, we need the raw public key point (x,y coordinates)
        // First try to access the key data directly if available
        if (cert.publicKey.n && cert.publicKey.e) {
            // This is an RSA key, not SM2
            throw new Error(t('tools.sm2-signature-verifier.rsaCertNotSupported'));
        }
        
        // Try to get the raw public key
        let publicKeyBytes;
        
        // If forge exposes the key point directly
        if (cert.publicKey.data) {
            publicKeyBytes = cert.publicKey.data;
            return forge.util.bytesToHex(publicKeyBytes);
        }
        
        // Otherwise, try to extract from ASN.1
        const publicKeyAsn1 = cert.publicKey.toAsn1();
        const publicKeyDer = forge.asn1.toDer(publicKeyAsn1).getBytes();
        
        // Parse the SubjectPublicKeyInfo structure
        return extractSM2PublicKeyFromDER(forge.util.bytesToHex(publicKeyDer));
    } catch (error) {
        console.error('Error extracting public key from cert:', error);
        return null;
    }
}

function extractSM2PublicKeyFromDER(derHex) {
    try {
        console.log('Extracting SM2 public key from DER:', derHex);
        
        // Parse the SubjectPublicKeyInfo structure
        const asn1 = forge.asn1.fromDer(forge.util.createBuffer(forge.util.hexToBytes(derHex)));
        
        // SubjectPublicKeyInfo ::= SEQUENCE {
        //   algorithm        AlgorithmIdentifier,
        //   subjectPublicKey BIT STRING
        // }
        
        // The public key is in the BIT STRING at position 1
        if (asn1.value && asn1.value.length >= 2) {
            const publicKeyBitString = asn1.value[1];
            
            if (publicKeyBitString && publicKeyBitString.type === forge.asn1.Type.BIT_STRING) {
                // Extract the raw key bytes from the BIT STRING
                // For SM2, this is typically the uncompressed point format: 04 || x || y
                const publicKeyBytes = publicKeyBitString.value;
                const publicKeyHex = forge.util.bytesToHex(publicKeyBytes);
                
                // If the key starts with '04', it's already in the uncompressed format
                if (publicKeyHex.startsWith('04')) {
                    return publicKeyHex;
                } else {
                    // Otherwise, add the '04' prefix to indicate uncompressed format
                    return '04' + publicKeyHex;
                }
            }
        }
        
        throw new Error('Could not find public key in ASN.1 structure');
    } catch (error) {
        console.error('Error extracting SM2 public key from DER:', error);
        return null;
    }
}
</script>