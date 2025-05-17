<template>
    <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Generation settings -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.rsa-key-pair-generator.settings') }}</h2>

                <!-- Key size selection -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.keySize')
                        }}</label>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <button v-for="size in commonKeySizes" :key="size" @click="keySize = size" :class="[
                            'px-3 py-1 rounded-md transition duration-200',
                            keySize === size
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                        ]">
                            {{ size }}
                        </button>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="number" v-model.number="keySize" min="256" max="16384" step="8"
                            class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                        <span class="text-sm">{{ $t('tools.rsa-key-pair-generator.bits') }}</span>
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {{ $t('tools.rsa-key-pair-generator.keySizeHint') }}
                    </p>
                </div>

                <!-- Output format -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.outputFormat')
                        }}</label>
                    <select v-model="outputFormat"
                        class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                        <option value="pem">PEM (-----BEGIN RSA PRIVATE KEY-----)</option>
                        <option value="pkcs8">PKCS#8 (-----BEGIN PRIVATE KEY-----)</option>
                        <option value="hex">Hexadecimal</option>
                        <option value="base64">Base64</option>
                    </select>
                </div>

                <!-- Key pair count -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.keyPairCount')
                        }}</label>
                    <input type="number" v-model.number="keyPairCount" min="1" max="10"
                        class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <!-- Generate button -->
                <button @click="generateKeyPairs"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    :disabled="isGenerating">
                    <template v-if="isGenerating">
                        <span class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            {{ $t('tools.rsa-key-pair-generator.generating') }} ({{ generationProgress }}%)
                        </span>
                    </template>
                    <template v-else>
                        {{ $t('tools.rsa-key-pair-generator.generate') }}
                    </template>
                </button>
            </div>

            <!-- Key pairs display -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.rsa-key-pair-generator.results') }}</h2>

                <!-- Export all buttons -->
                <div v-if="keyPairs.length > 0" class="mt-4 flex flex-wrap gap-2">
                    <button @click="exportAllKeyPairs('pem')"
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.rsa-key-pair-generator.exportAllAsPem') }}
                    </button>
                    <button @click="exportAllKeyPairs('pkcs8')"
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.rsa-key-pair-generator.exportAllAsPkcs8') }}
                    </button>
                    <button @click="copyAllKeyPairs()"
                        class="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 rounded-md transition duration-300">
                        {{ $t('tools.rsa-key-pair-generator.copyAll') }}
                    </button>
                </div>

                <div v-if="keyPairs.length === 0"
                    class="flex-grow flex items-center justify-center text-gray-500 dark:text-gray-400">
                    {{ $t('tools.rsa-key-pair-generator.noResults') }}
                </div>

                <!-- <div v-else class="flex-grow overflow-auto"> -->
                <div class="overflow-y-auto flex-grow" style="max-height: calc(100vh - 350px)">
                    <div v-for="(keyPair, index) in keyPairs" :key="index" class="mb-6">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-semibold">{{ $t('tools.rsa-key-pair-generator.keyPair') }} #{{ index + 1 }}
                            </h3>
                            <div class="flex gap-2">
                                <button @click="exportKeyPair(keyPair)"
                                    class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                    title="Export">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </button>
                                <button @click="copyKeyPair(keyPair)"
                                    class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                    title="Copy">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Tabs for public/private keys/components -->
                        <div class="mb-4">
                            <div class="flex border-b dark:border-gray-700">
                                <button @click="activeTab[index] = 'public'" :class="[
                                    'px-4 py-2 font-medium',
                                    activeTab[index] === 'public'
                                        ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                                ]">
                                    {{ $t('tools.rsa-key-pair-generator.publicKey') }}
                                </button>
                                <button @click="activeTab[index] = 'private'" :class="[
                                    'px-4 py-2 font-medium',
                                    activeTab[index] === 'private'
                                        ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                                ]">
                                    {{ $t('tools.rsa-key-pair-generator.privateKey') }}
                                </button>
                                <button @click="activeTab[index] = 'components'" :class="[
                                    'px-4 py-2 font-medium',
                                    activeTab[index] === 'components'
                                        ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                                ]">
                                    {{ $t('tools.rsa-key-pair-generator.components') }}
                                </button>
                            </div>

                            <!-- Public Key Tab -->
                            <div v-if="activeTab[index] === 'public'" class="mt-3">
                                <div class="relative">
                                    <pre
                                        class="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-auto max-h-60 text-xs">{{
                            keyPair.publicKeyFormatted }}</pre>
                                    <button @click="copyToClipboard(keyPair.publicKeyFormatted)"
                                        class="absolute top-2 right-2 bg-white dark:bg-gray-700 p-1 rounded shadow"
                                        title="Copy">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Private Key Tab -->
                            <div v-if="activeTab[index] === 'private'" class="mt-3">
                                <div class="relative">
                                    <pre
                                        class="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-auto max-h-60 text-xs">{{
                            keyPair.privateKeyFormatted }}</pre>
                                    <button @click="copyToClipboard(keyPair.privateKeyFormatted)"
                                        class="absolute top-2 right-2 bg-white dark:bg-gray-700 p-1 rounded shadow"
                                        title="Copy">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Components Tab -->
                            <div v-if="activeTab[index] === 'components'" class="mt-3">
                                <div class="space-y-3">
                                    <div v-for="(value, key) in keyPair.components" :key="key" class="relative">
                                        <div class="font-mono text-sm bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                            <span class="font-semibold">{{ key }}: </span>
                                            <span class="break-all">{{ value }}</span>
                                        </div>
                                        <button @click="copyToClipboard(value)"
                                            class="absolute top-2 right-2 bg-white dark:bg-gray-700 p-1 rounded shadow"
                                            title="Copy">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Explanation section -->
        <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-4">{{ $t('tools.rsa-key-pair-generator.aboutRsa') }}</h2>
            <div class="prose max-w-none dark:prose-invert">
                <p>{{ $t('tools.rsa-key-pair-generator.rsaDescription') }}</p>
                <h3>{{ $t('tools.rsa-key-pair-generator.keySizeTitle') }}</h3>
                <ul>
                    <li>{{ $t('tools.rsa-key-pair-generator.keySize1024') }}</li>
                    <li>{{ $t('tools.rsa-key-pair-generator.keySize2048') }}</li>
                    <li>{{ $t('tools.rsa-key-pair-generator.keySize4096') }}</li>
                </ul>
                <h3>{{ $t('tools.rsa-key-pair-generator.keyComponentsTitle') }}</h3>
                <ul>
                    <li><strong>m (modulus):</strong> {{ $t('tools.rsa-key-pair-generator.modulusDesc') }}</li>
                    <li><strong>e (public exponent):</strong> {{ $t('tools.rsa-key-pair-generator.publicExponentDesc')
                        }}</li>
                    <li><strong>d (private exponent):</strong> {{ $t('tools.rsa-key-pair-generator.privateExponentDesc')
                        }}</li>
                    <li><strong>p, q:</strong> {{ $t('tools.rsa-key-pair-generator.primesDesc') }}</li>
                    <li><strong>dp, dq, coef:</strong> {{ $t('tools.rsa-key-pair-generator.crtParamsDesc') }}</li>
                </ul>
            </div>
        </div>
        <RsaKeyPairGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import forge from 'node-forge'
import RsaKeyPairGeneratorArticle from './RsaKeyPairGeneratorArticle.vue'

const { t } = useI18n()

// State variables
const keySize = ref(2048)
const outputFormat = ref('pem')
const keyPairCount = ref(1)
const isGenerating = ref(false)
const generationProgress = ref(0)
const keyPairs = ref([])
const activeTab = reactive({})
const commonKeySizes = [1024, 2048, 3072, 4096, 8192]

// Generate RSA key pairs
async function generateKeyPairs() {
    if (isGenerating.value) return

    isGenerating.value = true
    generationProgress.value = 0
    keyPairs.value = []

    try {
        for (let i = 0; i < keyPairCount.value; i++) {
            // Update progress
            generationProgress.value = Math.floor((i / keyPairCount.value) * 90)

            // Use setTimeout to allow UI updates between key generations
            await new Promise(resolve => {
                setTimeout(async () => {
                    const keyPair = await generateRsaKeyPair()
                    keyPairs.value.push(keyPair)
                    activeTab[i] = 'public'
                    resolve()
                }, 0)
            })
        }

        generationProgress.value = 100
    } catch (error) {
        console.error('Error generating RSA key pairs:', error)
        alert(t('tools.rsa-key-pair-generator.generationError'))
    } finally {
        isGenerating.value = false
    }
}

// Generate a single RSA key pair
function generateRsaKeyPair() {
    return new Promise((resolve, reject) => {
        try {
            // Generate key pair using node-forge
            const keypair = forge.pki.rsa.generateKeyPair({ bits: keySize.value });

            // Extract components for display
            const n = keypair.privateKey.n.toString(16);
            const e = keypair.privateKey.e.toString(16);
            const d = keypair.privateKey.d.toString(16);
            const p = keypair.privateKey.p.toString(16);
            const q = keypair.privateKey.q.toString(16);
            const dP = keypair.privateKey.dP.toString(16);
            const dQ = keypair.privateKey.dQ.toString(16);
            const qInv = keypair.privateKey.qInv.toString(16);

            // Format keys according to selected format
            let publicKeyFormatted, privateKeyFormatted;

            if (outputFormat.value === 'pem') {
                publicKeyFormatted = forge.pki.publicKeyToPem(keypair.publicKey);
                privateKeyFormatted = forge.pki.privateKeyToPem(keypair.privateKey);
            } else if (outputFormat.value === 'pkcs8') {
                publicKeyFormatted = forge.pki.publicKeyToPem(keypair.publicKey);
                privateKeyFormatted = forge.pki.privateKeyToPem(keypair.privateKey)
                    .replace('-----BEGIN RSA PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----')
                    .replace('-----END RSA PRIVATE KEY-----', '-----END PRIVATE KEY-----');
            } else if (outputFormat.value === 'hex') {
                const publicDer = forge.pki.publicKeyToAsn1(keypair.publicKey);
                const privateDer = forge.pki.privateKeyToAsn1(keypair.privateKey);
                publicKeyFormatted = forge.util.bytesToHex(forge.asn1.toDer(publicDer).getBytes());
                privateKeyFormatted = forge.util.bytesToHex(forge.asn1.toDer(privateDer).getBytes());
            } else if (outputFormat.value === 'base64') {
                const publicDer = forge.pki.publicKeyToAsn1(keypair.publicKey);
                const privateDer = forge.pki.privateKeyToAsn1(keypair.privateKey);
                publicKeyFormatted = forge.util.encode64(forge.asn1.toDer(publicDer).getBytes());
                privateKeyFormatted = forge.util.encode64(forge.asn1.toDer(privateDer).getBytes());
            }

            resolve({
                publicKey: keypair.publicKey,
                privateKey: keypair.privateKey,
                publicKeyFormatted,
                privateKeyFormatted,
                components: {
                    n, // modulus
                    e, // public exponent
                    d, // private exponent
                    p, // first prime
                    q, // second prime
                    dP, // first exponent
                    dQ, // second exponent
                    qInv // coefficient
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(t('tools.rsa-key-pair-generator.copied'));
    });
}

// Copy a key pair to clipboard
function copyKeyPair(keyPair) {
    const text = `=== ${t('tools.rsa-key-pair-generator.publicKey')} ===\n${keyPair.publicKeyFormatted}\n\n=== ${t('tools.rsa-key-pair-generator.privateKey')} ===\n${keyPair.privateKeyFormatted}`;
    copyToClipboard(text);
}

// Copy all key pairs to clipboard
function copyAllKeyPairs() {
    const text = keyPairs.value.map((keyPair, index) => {
        return `=== ${t('tools.rsa-key-pair-generator.keyPair')} #${index + 1} ===\n=== ${t('tools.rsa-key-pair-generator.publicKey')} ===\n${keyPair.publicKeyFormatted}\n\n=== ${t('tools.rsa-key-pair-generator.privateKey')} ===\n${keyPair.privateKeyFormatted}`;
    }).join('\n\n');

    copyToClipboard(text);
}

// Export a key pair
function exportKeyPair(keyPair) {
    const text = `${keyPair.publicKeyFormatted}\n\n${keyPair.privateKeyFormatted}`;
    downloadText(text, `rsa_key_pair_${keySize.value}.txt`);
}

// Export all key pairs
function exportAllKeyPairs(format) {
    // Set the output format temporarily
    const previousFormat = outputFormat.value;
    outputFormat.value = format;

    // Re-format all keys
    const formattedPairs = keyPairs.value.map((keyPair, index) => {
        return `=== ${t('tools.rsa-key-pair-generator.keyPair')} #${index + 1} ===\n=== ${t('tools.rsa-key-pair-generator.publicKey')} ===\n${keyPair.publicKeyFormatted}\n\n=== ${t('tools.rsa-key-pair-generator.privateKey')} ===\n${keyPair.privateKeyFormatted}`;
    }).join('\n\n');

    // Download the file
    downloadText(formattedPairs, `rsa_key_pairs_${keySize.value}_${format}.txt`);

    // Restore the original format
    outputFormat.value = previousFormat;
}

// Helper function to download text
function downloadText(text, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
</script>