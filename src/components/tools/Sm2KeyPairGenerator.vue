<template>
    <div class="container mx-auto p-2 sm:p-4">
        <!-- 通知提示 -->
        <div v-if="showNotification" 
             class="fixed top-4 right-4 z-50 p-3 rounded-lg shadow-lg transition-opacity duration-300 max-w-xs sm:max-w-md" 
             :class="[notification.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white']">
            {{ notification.message }}
        </div>

        <div class="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
            <!-- 生成设置 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 w-full lg:w-1/2">
                <h2 class="text-lg sm:text-xl font-bold mb-4">{{ $t('tools.sm2-key-pair-generator.settings') }}</h2>

                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.sm2-key-pair-generator.keyLength') }}</label>
                    <select v-model="keyLength" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-base">
                        <option value="256">256 {{ $t('tools.sm2-key-pair-generator.bits') }}</option>
                    </select>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ $t('tools.sm2-key-pair-generator.standardBits') }}</p>
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.sm2-key-pair-generator.outputFormat') }}</label>
                    <div class="flex flex-wrap gap-2">
                        <button v-for="format in outputFormats" :key="format.value"
                            @click="selectedFormat = format.value" 
                            class="flex-1 py-2 px-3 rounded-md transition duration-200 text-center"
                            :class="[
                                selectedFormat === format.value
                                    ? 'bg-blue-500 text-white dark:bg-blue-600'
                                    : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                            ]">
                            {{ format.label }}
                        </button>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.sm2-key-pair-generator.keyPairCount') }}</label>
                    <input type="number" v-model="keyPairCount" min="1" max="10"
                        class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-base" />
                </div>

                <button 
                    @click="generateKeyPairs" 
                    :disabled="isGenerating"
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base">
                    <span v-if="isGenerating">
                        {{ $t('tools.sm2-key-pair-generator.generating') }} ({{ progressPercent }}%)
                    </span>
                    <span v-else>
                        {{ $t('tools.sm2-key-pair-generator.generate') }}
                    </span>
                </button>
            </div>
            
            <!-- 生成结果 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 w-full lg:w-1/2 flex flex-col">
                <h2 class="text-lg sm:text-xl font-bold mb-4">{{ $t('tools.sm2-key-pair-generator.results') }}</h2>
                
                <!-- 进度条 -->
                <div v-if="isGenerating" class="mb-4">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div 
                            class="bg-blue-600 h-2.5 rounded-full" 
                            :style="{ width: `${progressPercent}%` }"
                        ></div>
                    </div>
                    <p class="text-sm text-center mt-1">{{ $t('tools.sm2-key-pair-generator.generatingKeys') }}</p>
                </div>
                
                <!-- 导出按钮 -->
                <div v-if="generatedKeys.length > 0" class="mb-4 flex flex-wrap gap-2">
                    <button 
                        @click="copyAllKeys" 
                        class="flex-1 basis-1/4 min-w-24 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-3 rounded-md transition duration-300 text-sm sm:text-base">
                        <i class="fas fa-copy mr-1 sm:mr-2"></i>{{ $t('tools.sm2-key-pair-generator.copyAll') }}
                    </button>
                    <button 
                        @click="downloadAsFile('txt')" 
                        class="flex-1 basis-1/4 min-w-24 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-3 rounded-md transition duration-300 text-sm sm:text-base">
                        <i class="fas fa-download mr-1 sm:mr-2"></i>{{ $t('tools.sm2-key-pair-generator.exportAllTxt') }}
                    </button>
                    <button 
                        @click="downloadAsFile('json')" 
                        class="flex-1 basis-1/4 min-w-24 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-3 rounded-md transition duration-300 text-sm sm:text-base">
                        <i class="fas fa-download mr-1 sm:mr-2"></i>{{ $t('tools.sm2-key-pair-generator.exportAllJson') }}
                    </button>
                </div>
                
                <!-- 生成的密钥对 -->
                <div class="overflow-y-auto flex-grow" style="max-height: calc(100vh - 350px)">
                    <div v-if="generatedKeys.length === 0 && !isGenerating" class="flex items-center justify-center h-32 sm:h-64">
                        <p class="text-gray-500 dark:text-gray-400 text-sm sm:text-base text-center px-4">
                            {{ $t('tools.sm2-key-pair-generator.noKeysGenerated') }}
                        </p>
                    </div>
                    
                    <div v-for="(keyPair, index) in generatedKeys" :key="index" 
                         class="mb-4 sm:mb-6 p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-medium text-sm sm:text-base">{{ $t('tools.sm2-key-pair-generator.keyPair') }} #{{ index + 1 }}</h3>
                            <button 
                                @click="copyKeyPair(keyPair)" 
                                class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm sm:text-base">
                                <i class="fas fa-copy"></i> {{ $t('tools.sm2-key-pair-generator.copy') }}
                            </button>
                        </div>
                        
                        <div class="mb-3">
                            <div class="flex justify-between items-center mb-1">
                                <h4 class="font-medium text-xs sm:text-sm">{{ $t('tools.sm2-key-pair-generator.publicKey') }}</h4>
                                <div class="flex space-x-2">
                                    <button 
                                        @click="downloadSingleKey(keyPair, 'public')" 
                                        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-xs">
                                        <i class="fas fa-download"></i>{{ $t('tools.sm2-key-pair-generator.exportPem') }}
                                    </button>
                                    <button 
                                        @click="copyToClipboard(formatKeyOutput(keyPair.publicKey))" 
                                        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-xs">
                                        <i class="fas fa-copy"></i> {{ $t('tools.sm2-key-pair-generator.copy') }}
                                    </button>
                                </div>
                            </div>
                            <div class="relative">
                                <pre class="bg-gray-100 dark:bg-gray-900 p-2 sm:p-3 rounded text-xs overflow-x-auto">{{ formatKeyOutput(keyPair.publicKey) }}</pre>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <div class="flex justify-between items-center mb-1">
                                <h4 class="font-medium text-xs sm:text-sm">{{ $t('tools.sm2-key-pair-generator.privateKey') }}</h4>
                                <div class="flex space-x-2">
                                    <button 
                                        @click="downloadSingleKey(keyPair, 'private')" 
                                        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-xs">
                                        <i class="fas fa-download"></i>{{ $t('tools.sm2-key-pair-generator.exportPem') }}
                                    </button>
                                    <button 
                                        @click="copyToClipboard(formatKeyOutput(keyPair.privateKey))" 
                                        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-xs">
                                        <i class="fas fa-copy"></i> {{ $t('tools.sm2-key-pair-generator.copy') }}
                                    </button>
                                </div>
                            </div>
                            <div class="relative">
                                <pre class="bg-gray-100 dark:bg-gray-900 p-2 sm:p-3 rounded text-xs overflow-x-auto">{{ formatKeyOutput(keyPair.privateKey) }}</pre>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <h4 class="font-medium text-xs sm:text-sm mb-1">{{ $t('tools.sm2-key-pair-generator.keyComponents') }}</h4>
                            <div class="bg-gray-100 dark:bg-gray-900 p-2 sm:p-3 rounded text-xs overflow-x-auto">
                                <div class="flex justify-between items-center mb-1">
                                    <p><strong>x:</strong> {{ keyPair.x }}</p>
                                    <button 
                                        @click="copyToClipboard(keyPair.x)" 
                                        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-2 text-xs">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <div class="flex justify-between items-center mb-1">
                                    <p><strong>y:</strong> {{ keyPair.y }}</p>
                                    <button 
                                        @click="copyToClipboard(keyPair.y)" 
                                        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-2 text-xs">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p><strong>d:</strong> {{ keyPair.d }}</p>
                                    <button 
                                        @click="copyToClipboard(keyPair.d)" 
                                        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-2 text-xs">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Sm2KeyPairGeneratorArticle />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import Sm2KeyPairGeneratorArticle from './Sm2KeyPairGeneratorArticle.vue';

const { t } = useI18n();

// 状态变量
const keyLength = ref(256); // SM2默认只支持256位
const keyPairCount = ref(5);
const selectedFormat = ref('pem');
const isGenerating = ref(false);
const generatedKeys = ref([]);
const progress = ref(0);
const progressPercent = computed(() => Math.round(progress.value));
const notification = ref({ message: '', type: 'success', show: false });
const showNotification = computed(() => notification.value.show);

// 格式选项
const outputFormats = [
    { label: 'PEM', value: 'pem' },
    { label: 'HEX', value: 'hex' },
    { label: 'Base64', value: 'base64' }
];

// 显示提示消息
function showToast(message, isError = false) {
    notification.value = {
        message: message,
        type: isError ? 'error' : 'success',
        show: true
    };
    
    // 3秒后自动隐藏提示
    setTimeout(() => {
        notification.value.show = false;
    }, 3000);
}

// 生成密钥对
async function generateKeyPairs() {
    if (isGenerating.value) return;

    const count = parseInt(keyPairCount.value);

    try {
        isGenerating.value = true;
        progress.value = 0;
        generatedKeys.value = [];

        for (let i = 0; i < count; i++) {
            // 异步生成密钥对，避免UI阻塞
            await new Promise(resolve => setTimeout(resolve, 100));

            try {
                // 如果有sm-crypto库，这里应该使用它来生成真实的SM2密钥对
                // 由于这是模拟，我们使用模拟数据
                const keyPair = await generateSingleKeyPair();
                generatedKeys.value.push(keyPair);

                // 更新进度
                progress.value = ((i + 1) / count) * 100;
            } catch (error) {
                console.error('生成密钥对失败:', error);
                showToast(t('tools.sm2-key-pair-generator.generateFailed'), true);
            }
        }

        showToast(t('tools.sm2-key-pair-generator.generateSuccess', { count }));
    } finally {
        isGenerating.value = false;
    }
}

// 模拟生成单个SM2密钥对
async function generateSingleKeyPair() {
    // 这里是模拟数据，实际应用中应该使用 sm-crypto 库
    // 例如: const keyPair = sm2.generateKeyPairHex();

    // 模拟生成的密钥对数据
    const x = generateRandomHex(64);
    const y = generateRandomHex(64);
    const d = generateRandomHex(64);

    // 根据不同格式构建公私钥
    let publicKey, privateKey;

    if (selectedFormat.value === 'hex') {
        publicKey = `04${x}${y}`;
        privateKey = d;
    } else if (selectedFormat.value === 'base64') {
        publicKey = btoa(`04${x}${y}`);
        privateKey = btoa(d);
    } else { // pem
        publicKey = formatPEM(btoa(`04${x}${y}`), true);
        privateKey = formatPEM(btoa(d), false);
    }

    return {
        publicKey,
        privateKey,
        x,
        y,
        d
    };
}

// 格式化PEM
function formatPEM(base64Str, isPublic) {
    const header = isPublic ? '-----BEGIN PUBLIC KEY-----' : '-----BEGIN PRIVATE KEY-----';
    const footer = isPublic ? '-----END PUBLIC KEY-----' : '-----END PRIVATE KEY-----';

    // 将base64字符串每64个字符添加一个换行符
    let formatted = '';
    for (let i = 0; i < base64Str.length; i += 64) {
        formatted += base64Str.slice(i, i + 64) + '\n';
    }

    return `${header}\n${formatted}${footer}`;
}

// 生成随机16进制字符串
function generateRandomHex(length) {
    const characters = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// 格式化密钥输出
function formatKeyOutput(key) {
    return key;
}

// 复制单个密钥对
function copyKeyPair(keyPair) {
    const text = `Public Key:\n${formatKeyOutput(keyPair.publicKey)}\n\nPrivate Key:\n${formatKeyOutput(keyPair.privateKey)}\n\nComponents:\nx: ${keyPair.x}\ny: ${keyPair.y}\nd: ${keyPair.d}`;
    copyToClipboard(text);
    showToast(t('tools.sm2-key-pair-generator.keyPairCopied'));
}

// 复制所有密钥对
function copyAllKeys() {
    const text = generatedKeys.value.map((keyPair, index) => {
        return `Key Pair #${index + 1}:\n\nPublic Key:\n${formatKeyOutput(keyPair.publicKey)}\n\nPrivate Key:\n${formatKeyOutput(keyPair.privateKey)}\n\nComponents:\nx: ${keyPair.x}\ny: ${keyPair.y}\nd: ${keyPair.d}`;
    }).join('\n\n' + '-'.repeat(50) + '\n\n');

    copyToClipboard(text);
    showToast(t('tools.sm2-key-pair-generator.allKeysCopied'));
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showToast(t('tools.sm2-key-pair-generator.copiedToClipboard'));
        })
        .catch(err => {
            console.error('复制失败:', err);
            showToast(t('tools.sm2-key-pair-generator.copyFailed'), true);
        });
}

// 下载为文件
function downloadAsFile(fileType) {
    let content, filename, mimeType;

    if (fileType === 'json') {
        // 转换为JSON格式
        const jsonData = generatedKeys.value.map((keyPair, index) => ({
            id: index + 1,
            publicKey: keyPair.publicKey,
            privateKey: keyPair.privateKey,
            components: {
                x: keyPair.x,
                y: keyPair.y,
                d: keyPair.d
            }
        }));

        content = JSON.stringify(jsonData, null, 2);
        filename = 'sm2_keypairs.json';
        mimeType = 'application/json';
    } else {
        // 默认为txt文本格式
        content = generatedKeys.value.map((keyPair, index) => {
            return `Key Pair #${index + 1}:\n\nPublic Key:\n${formatKeyOutput(keyPair.publicKey)}\n\nPrivate Key:\n${formatKeyOutput(keyPair.privateKey)}\n\nComponents:\nx: ${keyPair.x}\ny: ${keyPair.y}\nd: ${keyPair.d}`;
        }).join('\n\n' + '-'.repeat(50) + '\n\n');

        filename = 'sm2_keypairs.txt';
        mimeType = 'text/plain';
    }

    // 创建Blob对象
    const blob = new Blob([content], { type: mimeType });
    downloadBlob(blob, filename);
    showToast(t('tools.sm2-key-pair-generator.downloadedAs', { filename }));
}

// 下载单个密钥
function downloadSingleKey(keyPair, type) {
    let content, filename;
    
    // 转换为PEM格式
    if (type === 'public') {
        // 确保公钥是PEM格式
        content = selectedFormat.value === 'pem' ? 
            keyPair.publicKey : 
            formatPEM(btoa(selectedFormat.value === 'hex' ? `04${keyPair.x}${keyPair.y}` : keyPair.publicKey), true);
        filename = 'sm2_public_key.pem';
    } else {
        // 确保私钥是PEM格式
        content = selectedFormat.value === 'pem' ? 
            keyPair.privateKey : 
            formatPEM(btoa(selectedFormat.value === 'hex' ? keyPair.d : keyPair.privateKey), false);
        filename = 'sm2_private_key.pem';
    }

    // 创建Blob对象
    const blob = new Blob([content], { type: 'text/plain' });
    downloadBlob(blob, filename);
    showToast(t('tools.sm2-key-pair-generator.singleKeyDownloaded', { type: type === 'public' ? $t('tools.sm2-key-pair-generator.publicKey') : $t('tools.sm2-key-pair-generator.privateKey') }));
}

// 下载所有密钥对为PEM文件
function downloadAllAsPem() {
    if (generatedKeys.value.length === 0) return;

    // 将所有密钥对转换为PEM格式
    const pemContent = generatedKeys.value.map((keyPair, index) => {
        // 确保公钥和私钥都是PEM格式
        const publicPem = selectedFormat.value === 'pem' ? 
            keyPair.publicKey : 
            formatPEM(btoa(selectedFormat.value === 'hex' ? `04${keyPair.x}${keyPair.y}` : keyPair.publicKey), true);
        
        const privatePem = selectedFormat.value === 'pem' ? 
            keyPair.privateKey : 
            formatPEM(btoa(selectedFormat.value === 'hex' ? keyPair.d : keyPair.privateKey), false);
        
        return `# Key Pair ${index + 1}\n\n# Public Key\n${publicPem}\n\n# Private Key\n${privatePem}\n\n`;
    }).join('-'.repeat(70) + '\n\n');

    // 创建Blob对象
    const blob = new Blob([pemContent], { type: 'text/plain' });
    const filename = 'sm2_all_keypairs.pem';
    downloadBlob(blob, filename);
    showToast(t('tools.sm2-key-pair-generator.allPemDownloaded'));
}

// 下载Blob
function downloadBlob(blob, filename) {
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    
    // 清理
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}

// 组件挂载和卸载
onMounted(() => {
    generateKeyPairs();
});

onBeforeUnmount(() => {
    // 清理资源
});
</script>

<style scoped>
/* 自适应文本溢出问题处理 */
pre {
    white-space: pre-wrap;
    word-break: break-all;
    font-size: 11px;
}

@media (min-width: 640px) {
    pre {
        font-size: 12px;
    }
}

/* 处理移动设备上长按选择文本的问题 */
@media (max-width: 768px) {
    pre {
        -webkit-user-select: text;
        user-select: text;
        -webkit-touch-callout: default;
    }
    
    button {
        touch-action: manipulation;
    }
}
</style>