<template>
  <div class="container mx-auto p-2 sm:p-4">
    <!-- Notification toast -->
    <div v-if="showNotification"
      class="fixed top-4 right-4 z-50 p-3 rounded-lg shadow-lg transition-opacity duration-300 max-w-xs sm:max-w-md"
      :class="[notification.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white']">
      {{ notification.message }}
    </div>

    <!-- Key Input Section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4">
      <h2 class="text-lg sm:text-xl font-bold mb-4">{{ $t('tools.rsa-signature-verifier.keyInput') }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <!-- Private Key for Signing -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 class="text-md font-semibold mb-2">{{ $t('tools.rsa-signature-verifier.privateKey') }}</h3>
          <textarea v-model="privateKeyInput"
            class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
            :placeholder="$t('tools.rsa-signature-verifier.privateKeyPlaceholder')"></textarea>
          <div class="flex justify-between mt-2">
            <div>
              <button @click="generateKeyPair"
                class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                {{ $t('tools.rsa-signature-verifier.generateKeyPair') }}
              </button>
            </div>
            <div class="flex space-x-2">
              <button @click="clearPrivateKey" class="text-gray-600 dark:text-gray-400 hover:text-red-500 text-sm">
                {{ $t('tools.rsa-signature-verifier.clear') }}
              </button>
            </div>
          </div>
        </div>

        <!-- Public Key for Verification -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 class="text-md font-semibold mb-2">{{ $t('tools.rsa-signature-verifier.publicKey') }}</h3>
          <textarea v-model="publicKeyInput"
            class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
            :placeholder="$t('tools.rsa-signature-verifier.publicKeyPlaceholder')"></textarea>
          <div class="flex justify-between mt-2">
            <div class="flex space-x-2">
              <button @click="clearPublicKey" class="text-gray-600 dark:text-gray-400 hover:text-red-500 text-sm">
                {{ $t('tools.rsa-signature-verifier.clear') }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Settings -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.keySize')
          }}</label>
          <select v-model="keySize" class="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600">
            <option v-for="size in keySizes" :key="size" :value="size">{{ size }} bits</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.hashAlgorithm')
          }}</label>
          <select v-model="hashAlgorithm" class="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600">
            <option v-for="algo in hashAlgorithms" :key="algo.value" :value="algo.value">{{ algo.label }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.paddingScheme')
          }}</label>
          <select v-model="paddingScheme" class="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600">
            <option v-for="scheme in paddingSchemes" :key="scheme.value" :value="scheme.value">{{
              scheme.label }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.keyFormat')
          }}</label>
          <select v-model="keyFormat" class="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600">
            <option v-for="format in keyFormats" :key="format.value" :value="format.value">{{ format.label
            }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Sign and Verify Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Signing Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
        <h2 class="text-lg sm:text-xl font-bold mb-4">{{ $t('tools.rsa-signature-verifier.sign') }}</h2>

        <!-- Input Format Selection -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.inputFormat')
          }}</label>
          <div class="flex space-x-2">
            <button v-for="format in inputFormats" :key="format.value" @click="signInputFormat = format.value"
              class="px-3 py-1 rounded border text-sm"
              :class="signInputFormat === format.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
              {{ format.label }}
            </button>
          </div>
        </div>

        <!-- Processing Mode Selection -->
        <!-- <div class="mb-4">
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.processMode')
          }}</label>
          <div class="flex space-x-2">
            <button @click="isPreProcessedSign = false" class="px-3 py-1 rounded border text-sm"
              :class="!isPreProcessedSign ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
              {{ $t('tools.rsa-signature-verifier.originalData') }}
            </button>
            <button @click="isPreProcessedSign = true" class="px-3 py-1 rounded border text-sm"
              :class="isPreProcessedSign ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
              {{ $t('tools.rsa-signature-verifier.preProcessed') }}
            </button>
          </div>
        </div> -->

        <!-- Input for signing -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">
            {{ isPreProcessedSign ? $t('tools.rsa-signature-verifier.preProcessedDataToSign') :
              $t('tools.rsa-signature-verifier.dataToSign') }}
          </label>
          <textarea v-model="dataToSign"
            class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
            :placeholder="isPreProcessedSign ? $t('tools.rsa-signature-verifier.preProcessedDataToSignPlaceholder') : $t('tools.rsa-signature-verifier.dataToSignPlaceholder')"></textarea>
        </div>

        <!-- Preprocessing options -->
        <div class="mb-4" v-if="!isPreProcessedSign">
          <div class="mb-4">
            <div class="flex justify-between items-center mb-1">
              <label class="block text-sm font-medium">{{ $t('tools.rsa-signature-verifier.preprocessedData') }}</label>
              <button @click="showDetailedPreprocessing = !showDetailedPreprocessing"
                class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
                {{ showDetailedPreprocessing ? $t('tools.rsa-signature-verifier.showSimple') :
                  $t('tools.rsa-signature-verifier.showDetailed') }}
              </button>
            </div>

            <div v-if="!showDetailedPreprocessing">
              <textarea v-model="preprocessedDataSign" readonly
                class="w-full p-2 border rounded h-24 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm bg-gray-50 dark:bg-gray-800"></textarea>
              <div class="flex justify-end mt-1">
                <button @click="copyToClipboard(preprocessedDataSign)"
                  class="text-blue-500 hover:text-blue-700 text-sm">
                  {{ $t('tools.rsa-signature-verifier.copy') }}
                </button>
              </div>
            </div>

            <div v-else>
              <div class="mb-2">
                <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{
                  $t('tools.rsa-signature-verifier.hashDigest') }}</label>
                <textarea v-model="preprocessedSignData.hash" readonly
                  class="w-full p-2 border rounded h-16 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm bg-gray-50 dark:bg-gray-800"></textarea>
                <div class="flex justify-end mt-1">
                  <button @click="copyToClipboard(preprocessedSignData.hash)"
                    class="text-blue-500 hover:text-blue-700 text-xs">
                    {{ $t('tools.rsa-signature-verifier.copy') }}
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{
                  $t('tools.rsa-signature-verifier.paddedData') }}</label>
                <textarea v-model="preprocessedSignData.padded" readonly
                  class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm bg-gray-50 dark:bg-gray-800"></textarea>
                <div class="flex justify-end mt-1">
                  <button @click="copyToClipboard(preprocessedSignData.padded)"
                    class="text-blue-500 hover:text-blue-700 text-xs">
                    {{ $t('tools.rsa-signature-verifier.copy') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sign button -->
        <div class="mb-4">
          <button @click="signData"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" :disabled="!canSign">
            {{ $t('tools.rsa-signature-verifier.signButton') }}
          </button>
        </div>

        <!-- Signature output -->
        <div>
          <div class="flex justify-between items-center mb-1">
            <label class="block text-sm font-medium">{{ $t('tools.rsa-signature-verifier.signature')
            }}</label>
            <div class="flex space-x-2">
              <button v-for="format in outputFormats" :key="format.value" @click="setSignatureFormat(format.value)"
                class="text-xs border rounded px-2 py-1"
                :class="signatureOutputFormat === format.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
                {{ format.label }}
              </button>
            </div>
          </div>

          <div class="relative">
            <textarea v-model="signature" readonly
              class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm bg-gray-50 dark:bg-gray-800"></textarea>
            <div class="absolute top-2 right-2 flex space-x-2">
              <button @click="copyToClipboard(signature)"
                class="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 p-1 rounded">
                <i class="fas fa-copy"></i>
              </button>
              <button @click="exportSignature()" class="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 p-1 rounded">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Verification Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
        <h2 class="text-lg sm:text-xl font-bold mb-4">{{ $t('tools.rsa-signature-verifier.verify') }}</h2>

        <!-- Input Format Selection for Verification -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.inputFormat')
          }}</label>
          <div class="flex space-x-2">
            <button v-for="format in inputFormats" :key="format.value" @click="verifyInputFormat = format.value"
              class="px-3 py-1 rounded border text-sm"
              :class="verifyInputFormat === format.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
              {{ format.label }}
            </button>
          </div>
        </div>

        <!-- Processing Mode Selection for Verification -->
        <!-- <div class="mb-4">
          <label class="block text-sm font-medium mb-1">{{ $t('tools.rsa-signature-verifier.processMode')
          }}</label>
          <div class="flex space-x-2">
            <button @click="isPreProcessedVerify = false" class="px-3 py-1 rounded border text-sm"
              :class="!isPreProcessedVerify ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
              {{ $t('tools.rsa-signature-verifier.originalData') }}
            </button>
            <button @click="isPreProcessedVerify = true" class="px-3 py-1 rounded border text-sm"
              :class="isPreProcessedVerify ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
              {{ $t('tools.rsa-signature-verifier.preProcessed') }}
            </button>
          </div>
        </div> -->

        <!-- Data to verify -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">
            {{ isPreProcessedVerify ? $t('tools.rsa-signature-verifier.preProcessedDataToVerify') :
              $t('tools.rsa-signature-verifier.dataToVerify') }}
          </label>
          <textarea v-model="dataToVerify"
            class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
            :placeholder="isPreProcessedVerify ? $t('tools.rsa-signature-verifier.preProcessedDataToVerifyPlaceholder') : $t('tools.rsa-signature-verifier.dataToVerifyPlaceholder')"></textarea>
        </div>

        <!-- Preprocessing options for verification -->
        <div class="mb-4" v-if="!isPreProcessedVerify">
          <!-- <div class="flex items-center mb-2">
                <input type="checkbox" id="preprocess-only-verify" v-model="preprocessOnlyVerify" class="mr-2">
                <label for="preprocess-only-verify" class="text-sm">{{ $t('tools.rsa-signature-verifier.preprocessOnly') }}</label>
            </div> -->

          <div v-if="preprocessOnlyVerify" class="mb-4">
            <div class="flex justify-between items-center mb-1">
              <label class="block text-sm font-medium">{{ $t('tools.rsa-signature-verifier.preprocessedData') }}</label>
              <button @click="showDetailedPreprocessing = !showDetailedPreprocessing"
                class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
                {{ showDetailedPreprocessing ? $t('tools.rsa-signature-verifier.showSimple') :
                  $t('tools.rsa-signature-verifier.showDetailed') }}
              </button>
            </div>

            <div v-if="!showDetailedPreprocessing">
              <textarea v-model="preprocessedDataVerify" readonly
                class="w-full p-2 border rounded h-24 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm bg-gray-50 dark:bg-gray-800"></textarea>
              <div class="flex justify-end mt-1">
                <button @click="copyToClipboard(preprocessedDataVerify)"
                  class="text-blue-500 hover:text-blue-700 text-sm">
                  {{ $t('tools.rsa-signature-verifier.copy') }}
                </button>
              </div>
            </div>

            <div v-else>
              <div class="mb-2">
                <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{
                  $t('tools.rsa-signature-verifier.hashDigest') }}</label>
                <textarea v-model="preprocessedVerifyData.hash" readonly
                  class="w-full p-2 border rounded h-16 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm bg-gray-50 dark:bg-gray-800"></textarea>
                <div class="flex justify-end mt-1">
                  <button @click="copyToClipboard(preprocessedVerifyData.hash)"
                    class="text-blue-500 hover:text-blue-700 text-xs">
                    {{ $t('tools.rsa-signature-verifier.copy') }}
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{
                  $t('tools.rsa-signature-verifier.paddedData') }}</label>
                <textarea v-model="preprocessedVerifyData.padded" readonly
                  class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm bg-gray-50 dark:bg-gray-800"></textarea>
                <div class="flex justify-end mt-1">
                  <button @click="copyToClipboard(preprocessedVerifyData.padded)"
                    class="text-blue-500 hover:text-blue-700 text-xs">
                    {{ $t('tools.rsa-signature-verifier.copy') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Signature input -->
        <div class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <label class="block text-sm font-medium">{{ $t('tools.rsa-signature-verifier.signatureToVerify')
            }}</label>
            <div class="flex space-x-2">
              <button v-for="format in outputFormats" :key="format.value" @click="signatureInputFormat = format.value"
                class="text-xs border rounded px-2 py-1"
                :class="signatureInputFormat === format.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'">
                {{ format.label }}
              </button>
            </div>
          </div>

          <div class="relative">
            <textarea v-model="signatureToVerify"
              class="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
              :placeholder="$t('tools.rsa-signature-verifier.signatureToVerifyPlaceholder')"></textarea>
            <div class="absolute top-2 right-2 flex space-x-2">
              <button @click="copyToClipboard(signatureToVerify)"
                class="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 p-1 rounded">
                <i class="fas fa-copy"></i>
              </button>
              <button @click="importSignature()" class="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 p-1 rounded">
                <i class="fas fa-upload"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Verify button -->
        <div class="mb-4">
          <button @click="verifySignature"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
            :disabled="!canVerify">
            {{ $t('tools.rsa-signature-verifier.verifyButton') }}
          </button>
        </div>

        <!-- Verification result -->
        <div>
          <label class="block text-sm font-medium mb-1">{{
            $t('tools.rsa-signature-verifier.verificationResult') }}</label>
          <div class="p-3 rounded-md text-center font-medium" :class="[
            verificationResult === null ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400' :
              verificationResult ? 'bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-400' :
                'bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-400'
          ]">
            {{
              verificationResult === null ?
                $t('tools.rsa-signature-verifier.notVerifiedYet') :
                (verificationResult ?
                  $t('tools.rsa-signature-verifier.signatureValid') :
                  $t('tools.rsa-signature-verifier.signatureInvalid'))
            }}
          </div>
        </div>
      </div>
    </div>
    <RsaSignatureVerifierArticle />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import forge from 'node-forge';
import RsaSignatureVerifierArticle from './RsaSignatureVerifierArticle.vue';

const { t } = useI18n();

// Key inputs
const privateKeyInput = ref('');
const publicKeyInput = ref('');

// Signing and verification data
const dataToSign = ref('');
const signature = ref('');
const dataToVerify = ref('');
const signatureToVerify = ref('');
const verificationResult = ref(null);

// Input formats
const signInputFormat = ref('string');
const verifyInputFormat = ref('string');

// Pre-hashed mode flags
const isPreProcessedSign = ref(false);
const isPreProcessedVerify = ref(false);

// Preprocessing options
const preprocessOnlyVerify = ref(true);
const preprocessedDataSign = ref('');
const preprocessedDataVerify = ref('');
const preprocessedSignData = ref({
  hash: '',
  padded: ''
});
const preprocessedVerifyData = ref({
  hash: '',
  padded: ''
});
const showDetailedPreprocessing = ref(true);

// Settings
const keySize = ref(2048);
const hashAlgorithm = ref('sha256');
const paddingScheme = ref('pkcs1');
const keyFormat = ref('pem');
const signatureOutputFormat = ref('base64');
const signatureInputFormat = ref('base64');

// Notification system
const notification = ref({ message: '', type: 'success', show: false });
const showNotification = computed(() => notification.value.show);

// Available options
const keySizes = [1024, 2048, 3072, 4096, 8192, 16384];
const hashAlgorithms = [
  { label: 'SHA-1', value: 'sha1' },
  { label: 'SHA-256', value: 'sha256' },
  { label: 'SHA-384', value: 'sha384' },
  { label: 'SHA-512', value: 'sha512' }
];
const paddingSchemes = [
  { label: 'PKCS#1 v1.5', value: 'pkcs1' },
  { label: 'PSS', value: 'pss' }
];
const keyFormats = [
  { label: 'PEM', value: 'pem' },
  { label: 'DER', value: 'der' },
  { label: 'HEX', value: 'hex' },
  { label: 'Base64', value: 'base64' }
];
const outputFormats = [
  { label: 'Base64', value: 'base64' },
  { label: 'HEX', value: 'hex' },
  { label: 'DER', value: 'der' },
  { label: 'PEM', value: 'pem' }
];
const inputFormats = [
  { label: 'String', value: 'string' },
  { label: 'HEX', value: 'hex' },
  { label: 'Base64', value: 'base64' }
];

// Computed properties for validation
const canSign = computed(() => {
  return privateKeyInput.value.trim() !== '' && dataToSign.value.trim() !== '';
});

const canVerify = computed(() => {
  return publicKeyInput.value.trim() !== '' &&
    dataToVerify.value.trim() !== '' &&
    signatureToVerify.value.trim() !== '';
});

// Watch for changes in data to preprocess
watch(dataToSign, () => {
  updatePreprocessedDataSign();
  // Don't automatically sign when typing
});
watch(dataToVerify, updatePreprocessedDataVerify);
watch(hashAlgorithm, () => {
  updatePreprocessedDataSign();
  updatePreprocessedDataVerify();
});
watch(signInputFormat, updatePreprocessedDataSign);
watch(verifyInputFormat, updatePreprocessedDataVerify);
watch(paddingScheme, () => {
  updatePreprocessedDataSign();
  updatePreprocessedDataVerify();
});

// Functions for key generation and management
function generateKeyPair() {
  try {
    const rsa = forge.pki.rsa;
    const startTime = Date.now();

    // Show generating notification
    showToast(t('tools.rsa-signature-verifier.generatingKeys'), false);

    // Using setTimeout to not block UI
    setTimeout(() => {
      try {
        const keypair = rsa.generateKeyPair({ bits: keySize.value, e: 0x10001 });

        let pubKey, privKey;

        if (keyFormat.value === 'pem') {
          pubKey = forge.pki.publicKeyToPem(keypair.publicKey);
          privKey = forge.pki.privateKeyToPem(keypair.privateKey);
        } else if (keyFormat.value === 'der') {
          const pubDer = forge.pki.publicKeyToAsn1(keypair.publicKey);
          const privDer = forge.pki.privateKeyToAsn1(keypair.privateKey);
          pubKey = forge.util.encode64(forge.asn1.toDer(pubDer).getBytes());
          privKey = forge.util.encode64(forge.asn1.toDer(privDer).getBytes());
        } else if (keyFormat.value === 'hex') {
          const pubDer = forge.pki.publicKeyToAsn1(keypair.publicKey);
          const privDer = forge.pki.privateKeyToAsn1(keypair.privateKey);
          pubKey = forge.util.bytesToHex(forge.asn1.toDer(pubDer).getBytes());
          privKey = forge.util.bytesToHex(forge.asn1.toDer(privDer).getBytes());
        } else if (keyFormat.value === 'base64') {
          const pubDer = forge.pki.publicKeyToAsn1(keypair.publicKey);
          const privDer = forge.pki.privateKeyToAsn1(keypair.privateKey);
          pubKey = forge.util.encode64(forge.asn1.toDer(pubDer).getBytes());
          privKey = forge.util.encode64(forge.asn1.toDer(privDer).getBytes());
        }

        publicKeyInput.value = pubKey;
        privateKeyInput.value = privKey;

        const timeElapsed = ((Date.now() - startTime) / 1000).toFixed(2);
        showToast(t('tools.rsa-signature-verifier.keysGenerated', { bits: keySize.value, time: timeElapsed }), false);
      } catch (error) {
        console.error('Error generating key pair:', error);
        showToast(t('tools.rsa-signature-verifier.keyGenerationFailed') + ' ' + error.message, true);
      }
    }, 100);
  } catch (error) {
    console.error('Error initiating key generation:', error);
    showToast(t('tools.rsa-signature-verifier.keyGenerationFailed') + ' ' + error.message, true);
  }
}

function clearPrivateKey() {
  privateKeyInput.value = '';
}

function clearPublicKey() {
  publicKeyInput.value = '';
}

// Process input data based on format
function processInputData(data, format) {
  if (!data) return '';

  try {
    if (format === 'hex') {
      return forge.util.hexToBytes(data);
    } else if (format === 'base64') {
      return forge.util.decode64(data);
    } else {
      // Default to string
      return data;
    }
  } catch (error) {
    console.error('Error processing input data:', error);
    throw new Error('Invalid input format');
  }
}

// Signing and verification functions
function updatePreprocessedDataSign() {
  if (!dataToSign.value || isPreProcessedSign.value) {
    preprocessedDataSign.value = '';
    preprocessedSignData.value = { hash: '', padded: '' };
    return;
  }

  try {
    const processedData = processInputData(dataToSign.value, signInputFormat.value);
    const md = getHashDigest(processedData);
    const hashHex = forge.util.bytesToHex(md.digest().getBytes());
    preprocessedDataSign.value = hashHex;
    preprocessedSignData.value.hash = hashHex;

    // Apply padding according to selected scheme
    try {
      const privateKey = getPrivateKeyFromInput();
      if (privateKey) {
        const paddedData = getPaddedData(md, privateKey);
        preprocessedSignData.value.padded = forge.util.bytesToHex(paddedData);
      }
    } catch (err) {
      console.error('Error applying padding:', err);
      preprocessedSignData.value.padded = t('tools.rsa-signature-verifier.paddingError');
    }
  } catch (error) {
    console.error('Error preprocessing sign data:', error);
    preprocessedDataSign.value = t('tools.rsa-signature-verifier.preprocessingError');
    preprocessedSignData.value = { hash: '', padded: '' };
  }
}

function updatePreprocessedDataVerify() {
  if (!preprocessOnlyVerify.value || !dataToVerify.value || isPreProcessedVerify.value) {
    preprocessedDataVerify.value = '';
    preprocessedVerifyData.value = { hash: '', padded: '' };
    return;
  }

  try {
    const processedData = processInputData(dataToVerify.value, verifyInputFormat.value);
    const md = getHashDigest(processedData);
    const hashHex = forge.util.bytesToHex(md.digest().getBytes());
    preprocessedDataVerify.value = hashHex;
    preprocessedVerifyData.value.hash = hashHex;

    // Apply padding according to selected scheme
    try {
      const publicKey = getPublicKeyFromInput();
      if (publicKey) {
        const paddedData = getPaddedData(md, publicKey);
        preprocessedVerifyData.value.padded = forge.util.bytesToHex(paddedData);
      }
    } catch (err) {
      console.error('Error applying padding:', err);
      preprocessedVerifyData.value.padded = t('tools.rsa-signature-verifier.paddingError');
    }
  } catch (error) {
    console.error('Error preprocessing verify data:', error);
    preprocessedDataVerify.value = t('tools.rsa-signature-verifier.preprocessingError');
    preprocessedVerifyData.value = { hash: '', padded: '' };
  }
}

// Get private key from input
function getPrivateKeyFromInput() {
  if (!privateKeyInput.value.trim()) return null;

  try {
    if (keyFormat.value === 'pem') {
      return forge.pki.privateKeyFromPem(privateKeyInput.value);
    } else if (keyFormat.value === 'der' || keyFormat.value === 'base64') {
      const derBytes = forge.util.decode64(privateKeyInput.value);
      const asn1 = forge.asn1.fromDer(derBytes);
      return forge.pki.privateKeyFromAsn1(asn1);
    } else if (keyFormat.value === 'hex') {
      const derBytes = forge.util.hexToBytes(privateKeyInput.value);
      const asn1 = forge.asn1.fromDer(derBytes);
      return forge.pki.privateKeyFromAsn1(asn1);
    }
  } catch (error) {
    console.error('Error parsing private key:', error);
    return null;
  }
  return null;
}

// Get public key from input
function getPublicKeyFromInput() {
  if (!publicKeyInput.value.trim()) return null;

  try {
    if (keyFormat.value === 'pem') {
      return forge.pki.publicKeyFromPem(publicKeyInput.value);
    } else if (keyFormat.value === 'der' || keyFormat.value === 'base64') {
      const derBytes = forge.util.decode64(publicKeyInput.value);
      const asn1 = forge.asn1.fromDer(derBytes);
      return forge.pki.publicKeyFromAsn1(asn1);
    } else if (keyFormat.value === 'hex') {
      const derBytes = forge.util.hexToBytes(publicKeyInput.value);
      const asn1 = forge.asn1.fromDer(derBytes);
      return forge.pki.publicKeyFromAsn1(asn1);
    }
  } catch (error) {
    console.error('Error parsing public key:', error);
    return null;
  }
  return null;
}

// Get padded data according to selected padding scheme
function getPaddedData(md, key) {
  const digestBytes = md.digest().getBytes();

  if (paddingScheme.value === 'pkcs1') {
    // PKCS#1 v1.5 padding
    const digestOid = getDigestOid(hashAlgorithm.value);
    if (!digestOid) throw new Error('Unsupported hash algorithm');

    // DigestInfo ASN.1 structure
    const digestInfo = forge.asn1.create(
      forge.asn1.Class.UNIVERSAL,
      forge.asn1.Type.SEQUENCE,
      true,
      [
        // AlgorithmIdentifier
        forge.asn1.create(
          forge.asn1.Class.UNIVERSAL,
          forge.asn1.Type.SEQUENCE,
          true,
          [
            // algorithm
            forge.asn1.create(
              forge.asn1.Class.UNIVERSAL,
              forge.asn1.Type.OID,
              false,
              forge.asn1.oidToDer(digestOid).getBytes()
            ),
            // parameters (null)
            forge.asn1.create(
              forge.asn1.Class.UNIVERSAL,
              forge.asn1.Type.NULL,
              false,
              ''
            )
          ]
        ),
        // digest
        forge.asn1.create(
          forge.asn1.Class.UNIVERSAL,
          forge.asn1.Type.OCTETSTRING,
          false,
          digestBytes
        )
      ]
    );

    // Create DigestInfo DER encoding
    const digestInfoDer = forge.asn1.toDer(digestInfo).getBytes();

    // Apply PKCS#1 v1.5 padding
    const modulus = key.n;
    const k = Math.ceil(modulus.bitLength() / 8);

    // EM = 0x00 || 0x01 || PS || 0x00 || T
    // where PS is a string of 0xFF bytes
    const EM = forge.util.createBuffer();
    EM.putByte(0x00);
    EM.putByte(0x01);

    // Add padding bytes (0xFF)
    const psLen = k - digestInfoDer.length - 3;
    for (let i = 0; i < psLen; i++) {
      EM.putByte(0xFF);
    }

    EM.putByte(0x00);
    EM.putBytes(digestInfoDer);

    return EM.getBytes();
  } else if (paddingScheme.value === 'pss') {
    // PSS padding simulation
    const salt = forge.random.getBytesSync(20); // Salt length is typically 20 bytes
    const modBits = key.n.bitLength();
    const emBits = modBits - 1;
    const emLen = Math.ceil(emBits / 8);

    // We'll show a simplified representation of PSS padded data
    // In reality, forge handles PSS internally when signing
    const EM = forge.util.createBuffer();

    // Simplified PSS representation (not actual encoding)
    EM.putByte(0x00); // padding indicator
    EM.putBytes(digestBytes); // hash of message
    EM.putByte(0x01); // separator
    EM.putBytes(salt); // salt

    return EM.getBytes();
  }

  return digestBytes; // Default if no padding or unsupported
}

// Get OID for hash algorithm
function getDigestOid(hashAlgo) {
  const oids = {
    'sha1': '1.3.14.3.2.26',
    'sha256': '2.16.840.1.101.3.4.2.1',
    'sha384': '2.16.840.1.101.3.4.2.2',
    'sha512': '2.16.840.1.101.3.4.2.3'
  };
  return oids[hashAlgo];
}

function getHashDigest(data) {
  const md = forge.md[hashAlgorithm.value].create();
  md.update(data);
  return md;
}

function signData() {
  if (!canSign.value) return;

  try {
    let privateKey;

    // Parse private key based on format
    try {
      privateKey = getPrivateKeyFromInput();
      if (!privateKey) {
        showToast(t('tools.rsa-signature-verifier.invalidPrivateKey') + ' ' + error.message, true);
        return;
      }
    } catch (error) {
      console.error('Error parsing private key:', error);
      showToast(t('tools.rsa-signature-verifier.invalidPrivateKey') + ' ' + error.message, true);
      return;
    }

    let dataToProcess;
    try {
      dataToProcess = processInputData(dataToSign.value, signInputFormat.value);
    } catch (error) {
      console.error('Error processing input data:', error);
      showToast(t('tools.rsa-signature-verifier.invalidInputData') + ' ' + error.message, true);
      return;
    }

    // Create message digest if not pre-hashed
    let signatureBytes;
    if (isPreProcessedSign.value) {
      // Direct sign the provided hash
      if (paddingScheme.value === 'pkcs1') {
        signatureBytes = privateKey.decrypt(dataToProcess);
      } else if (paddingScheme.value === 'pss') {
        throw new Error('PSS padding cannot be used with preprocessed data.');
      }
    } else {
      // Hash and sign
      const md = getHashDigest(dataToProcess);

      if (paddingScheme.value === 'pkcs1') {
        signatureBytes = privateKey.sign(md);
      } else if (paddingScheme.value === 'pss') {
        const saltLength = 20; // PSS salt length
        const pss = forge.pss.create({
          md: forge.md[hashAlgorithm.value].create(),
          mgf: forge.mgf.mgf1.create(forge.md[hashAlgorithm.value].create()),
          saltLength: saltLength
        });

        signatureBytes = privateKey.sign(md, pss);
      }
    }

    // Format the signature according to output preference
    setSignatureFormat(signatureOutputFormat.value, signatureBytes);

    // Auto-copy to verification side
    dataToVerify.value = dataToSign.value;
    verifyInputFormat.value = signInputFormat.value;
    isPreProcessedVerify.value = isPreProcessedSign.value;
    signatureToVerify.value = signature.value;
    signatureInputFormat.value = signatureOutputFormat.value;

    showToast(t('tools.rsa-signature-verifier.signatureCreated'), false);
  } catch (error) {
    console.error('Error signing data:', error);
    showToast(t('tools.rsa-signature-verifier.signingFailed') + ' ' + error.message, true);
  }
}

function setSignatureFormat(format, signatureBytes = null) {
  const bytes = signatureBytes || currentSignatureBytes.value;
  if (!bytes) return;

  signatureOutputFormat.value = format;

  if (format === 'base64') {
    signature.value = forge.util.encode64(bytes);
  } else if (format === 'hex') {
    signature.value = forge.util.bytesToHex(bytes);
  } else if (format === 'der') {
    // DER is just base64 for display purposes
    signature.value = forge.util.encode64(bytes);
  } else if (format === 'pem') {
    // Wrap base64 in PEM format
    const base64 = forge.util.encode64(bytes);
    signature.value = `-----BEGIN RSA SIGNATURE-----\n${formatPem(base64)}\n-----END RSA SIGNATURE-----`;
  }
}

// Store the current signature bytes for format conversion
const currentSignatureBytes = {
  get value() {
    try {
      if (signatureOutputFormat.value === 'base64') {
        return forge.util.decode64(signature.value);
      } else if (signatureOutputFormat.value === 'hex') {
        return forge.util.hexToBytes(signature.value);
      } else if (signatureOutputFormat.value === 'der') {
        return forge.util.decode64(signature.value);
      } else if (signatureOutputFormat.value === 'pem') {
        const pemMatch = signature.value.match(/-----BEGIN RSA SIGNATURE-----\s*([\s\S]*?)\s*-----END RSA SIGNATURE-----/);
        if (pemMatch) {
          const base64 = pemMatch[1].replace(/\s+/g, '');
          return forge.util.decode64(base64);
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  }
};

function verifySignature() {
  if (!canVerify.value) return;

  try {
    let publicKey;

    // Parse public key based on format
    try {
      if (keyFormat.value === 'pem') {
        publicKey = forge.pki.publicKeyFromPem(publicKeyInput.value);
      } else if (keyFormat.value === 'der' || keyFormat.value === 'base64') {
        const derBytes = forge.util.decode64(publicKeyInput.value);
        const asn1 = forge.asn1.fromDer(derBytes);
        publicKey = forge.pki.publicKeyFromAsn1(asn1);
      } else if (keyFormat.value === 'hex') {
        const derBytes = forge.util.hexToBytes(publicKeyInput.value);
        const asn1 = forge.asn1.fromDer(derBytes);
        publicKey = forge.pki.publicKeyFromAsn1(asn1);
      }
    } catch (error) {
      console.error('Error parsing public key:', error);
      showToast(t('tools.rsa-signature-verifier.invalidPublicKey') + ' ' + error.message, true);
      return;
    }

    // Parse signature based on input format
    let signatureBytes;
    try {
      if (signatureInputFormat.value === 'base64') {
        signatureBytes = forge.util.decode64(signatureToVerify.value);
      } else if (signatureInputFormat.value === 'hex') {
        signatureBytes = forge.util.hexToBytes(signatureToVerify.value);
      } else if (signatureInputFormat.value === 'der') {
        signatureBytes = forge.util.decode64(signatureToVerify.value);
      } else if (signatureInputFormat.value === 'pem') {
        // Extract base64 from PEM format
        const pemMatch = signatureToVerify.value.match(/-----BEGIN RSA SIGNATURE-----\s*([\s\S]*?)\s*-----END RSA SIGNATURE-----/);
        if (pemMatch) {
          const base64 = pemMatch[1].replace(/\s+/g, '');
          signatureBytes = forge.util.decode64(base64);
        } else {
          throw new Error('Invalid PEM format');
        }
      }
    } catch (error) {
      console.error('Error parsing signature:', error);
      showToast(t('tools.rsa-signature-verifier.invalidSignature') + ' ' + error.message, true);
      return;
    }

    let dataToProcess;
    try {
      if (isPreProcessedVerify.value) {
        // Use the provided hash directly
        dataToProcess = forge.util.hexToBytes(dataToVerify.value);
      } else {
        // Process and hash the input data
        dataToProcess = processInputData(dataToVerify.value, verifyInputFormat.value);
      }
    } catch (error) {
      console.error('Error processing verification data:', error);
      showToast(t('tools.rsa-signature-verifier.invalidVerificationData') + ' ' + error.message, true);
      return;
    }

    // Verify the signature
    let verified;
    if (isPreProcessedVerify.value) {
      // Direct verify with the provided hash
      if (paddingScheme.value === 'pkcs1') {
        verified = publicKey.verify(dataToProcess, signatureBytes);
      } else if (paddingScheme.value === 'pss') {
        const saltLength = 20; // PSS salt length
        const pss = forge.pss.create({
          md: forge.md[hashAlgorithm.value].create(),
          mgf: forge.mgf.mgf1.create(forge.md[hashAlgorithm.value].create()),
          saltLength: saltLength
        });

        verified = publicKey.verify(dataToProcess, signatureBytes, pss);
      }
    } else {
      // Hash and verify
      const md = getHashDigest(dataToProcess);

      if (paddingScheme.value === 'pkcs1') {
        verified = publicKey.verify(md.digest().getBytes(), signatureBytes);
      } else if (paddingScheme.value === 'pss') {
        const saltLength = 20; // PSS salt length
        const pss = forge.pss.create({
          md: forge.md[hashAlgorithm.value].create(),
          mgf: forge.mgf.mgf1.create(forge.md[hashAlgorithm.value].create()),
          saltLength: saltLength
        });

        verified = publicKey.verify(md.digest().getBytes(), signatureBytes, pss);
      }
    }

    verificationResult.value = verified;

    if (verified) {
      showToast(t('tools.rsa-signature-verifier.verificationSuccess'), false);
    } else {
      showToast(t('tools.rsa-signature-verifier.verificationFailed'), true);
    }
  } catch (error) {
    console.error('Error verifying signature:', error);
    showToast(t('tools.rsa-signature-verifier.verificationError') + ' ' + error.message, true);
    verificationResult.value = false;
  }
}

// Export and import functions
function exportSignature() {
  if (!signature.value) {
    showToast(t('tools.rsa-signature-verifier.noSignatureToExport'), true);
    return;
  }

  let filename = 'signature';
  let content = signature.value;
  let mimeType = 'text/plain';

  if (signatureOutputFormat.value === 'hex') {
    filename += '.hex';
  } else if (signatureOutputFormat.value === 'base64') {
    filename += '.b64';
  } else if (signatureOutputFormat.value === 'pem') {
    filename += '.pem';
  } else if (signatureOutputFormat.value === 'der') {
    filename += '.der';
    // Convert base64 to binary for DER download
    const binaryString = forge.util.decode64(content);
    content = binaryString;
    mimeType = 'application/octet-stream';
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(t('tools.rsa-signature-verifier.signatureExported', { format: signatureOutputFormat.value.toUpperCase() }), false);
}

function importSignature() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pem,.b64,.hex,.der';

  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    if (file.name.endsWith('.der')) {
      reader.readAsArrayBuffer(file);
      signatureInputFormat.value = 'der';
    } else {
      reader.readAsText(file);

      // Determine format based on file extension
      if (file.name.endsWith('.pem')) {
        signatureInputFormat.value = 'pem';
      } else if (file.name.endsWith('.b64')) {
        signatureInputFormat.value = 'base64';
      } else if (file.name.endsWith('.hex')) {
        signatureInputFormat.value = 'hex';
      }
    }

    reader.onload = event => {
      try {
        if (file.name.endsWith('.der')) {
          // Convert binary to base64 for display
          const arrayBuffer = event.target.result;
          const bytes = new Uint8Array(arrayBuffer);
          let binary = '';
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          signatureToVerify.value = forge.util.encode64(binary);
        } else {
          signatureToVerify.value = event.target.result;
        }

        showToast(t('tools.rsa-signature-verifier.signatureImported'), false);
      } catch (error) {
        console.error('Error importing signature:', error);
        showToast(t('tools.rsa-signature-verifier.signatureImportFailed'), true);
      }
    };

    reader.onerror = () => {
      showToast(t('tools.rsa-signature-verifier.signatureImportFailed'), true);
    };
  };

  input.click();
}

// Utility functions
function formatPem(base64String) {
  // Format base64 string with line breaks every 64 characters
  let formatted = '';
  for (let i = 0; i < base64String.length; i += 64) {
    formatted += base64String.substring(i, i + 64) + '\n';
  }
  return formatted.trim();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showToast(t('tools.rsa-signature-verifier.copied'), false);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      showToast(t('tools.rsa-signature-verifier.copyFailed'), true);
    });
}

function showToast(message, isError = false) {
  notification.value = {
    message: message,
    type: isError ? 'error' : 'success',
    show: true
  };

  setTimeout(() => {
    notification.value.show = false;
  }, 3000);
}
</script>

<style scoped>
pre,
textarea {
  white-space: pre-wrap;
  word-break: break-all;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

@media (max-width: 768px) {

  button,
  select {
    touch-action: manipulation;
  }
}
</style>