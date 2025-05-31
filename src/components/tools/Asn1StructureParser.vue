<template>
    <div class="space-y-6">

        <!-- Top section: Input and Settings -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Left top: Input area -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h2 class="text-lg font-semibold mb-2">{{ $t('tools.asn1-structure-parser.input') }}</h2>

                <!-- Input format selection -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.asn1-structure-parser.inputFormat')
                    }}</label>
                    <div class="flex flex-wrap gap-2">
                        <label v-for="format in inputFormats" :key="format" class="inline-flex items-center">
                            <input type="radio" v-model="inputFormat" :value="format"
                                class="form-radio h-4 w-4 text-blue-600">
                            <span class="ml-2">{{ format }}</span>
                        </label>
                    </div>
                </div>

                <!-- Input data textarea -->
                <div class="mb-4">
                    <textarea v-model="inputData"
                        class="w-full h-56 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 font-mono text-sm"
                        :placeholder="$t('tools.asn1-structure-parser.inputPlaceholder')"></textarea>
                </div>

                <!-- File upload -->
                <div class="mb-4">
                    <div class="flex items-center justify-center w-full">
                        <label
                            class="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 border-gray-300 dark:border-gray-600">
                            <div class="flex flex-col items-center justify-center pt-3 pb-2">
                                <p class="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">{{ $t('tools.asn1-structure-parser.clickToUpload')
                                    }}</span>
                                    {{ $t('tools.asn1-structure-parser.orDragDrop') }}
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{
                                    $t('tools.asn1-structure-parser.supportedFormats') }}</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" />
                        </label>
                    </div>
                </div>

                <!-- Load example button -->
                <div class="flex">
                    <button @click="loadExample"
                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2">
                        {{ $t('tools.asn1-structure-parser.loadExample') }}
                    </button>
                </div>
            </div>

            <!-- Right top: Settings area -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h2 class="text-lg font-semibold mb-2">{{ $t('tools.asn1-structure-parser.settings') }}</h2>

                <!-- Display Options -->
                <div class="space-y-4">
                    <div class="space-y-2">
                        <h3 class="font-medium text-sm">{{ $t('tools.asn1-structure-parser.displayOptions') }}</h3>
                        <div class="flex items-center">
                            <input type="checkbox" id="showHexDump" v-model="showHexDump"
                                class="form-checkbox h-4 w-4 text-blue-600">
                            <label for="showHexDump" class="ml-2 block text-sm">{{
                                $t('tools.asn1-structure-parser.showHexDump') }}</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="trimLargeData" v-model="trimLargeData"
                                class="form-checkbox h-4 w-4 text-blue-600">
                            <label for="trimLargeData" class="ml-2 block text-sm">{{
                                $t('tools.asn1-structure-parser.trimLargeData') }}</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="expandAllNodes" v-model="expandAllNodes"
                                class="form-checkbox h-4 w-4 text-blue-600">
                            <label for="expandAllNodes" class="ml-2 block text-sm">{{
                                $t('tools.asn1-structure-parser.expandAllNodes') }}</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="colorHighlight" v-model="colorHighlight"
                                class="form-checkbox h-4 w-4 text-blue-600">
                            <label for="colorHighlight" class="ml-2 block text-sm">{{
                                $t('tools.asn1-structure-parser.colorHighlight') }}</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="autoScroll" v-model="autoScroll"
                                class="form-checkbox h-4 w-4 text-blue-600">
                            <label for="autoScroll" class="ml-2 block text-sm">{{
                                $t('tools.asn1-structure-parser.autoScroll') }}</label>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <h3 class="font-medium text-sm">{{ $t('tools.asn1-structure-parser.advancedOptions') }}</h3>
                        <div class="flex items-center">
                            <input type="checkbox" id="useDefinitionFile" v-model="useDefinitionFile"
                                class="form-checkbox h-4 w-4 text-blue-600">
                            <label for="useDefinitionFile" class="ml-2 block text-sm">{{
                                $t('tools.asn1-structure-parser.useDefinitionFile') }}</label>
                        </div>
                        <div class="mt-3">
                            <label class="block text-sm mb-1">{{ $t('tools.asn1-structure-parser.hexSeparator')
                            }}:</label>
                            <div class="flex flex-wrap gap-2 mt-1">
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="hexSeparator" value=""
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2 text-sm">{{ $t('tools.asn1-structure-parser.none') }}</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="hexSeparator" value=" "
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2 text-sm">{{ $t('tools.asn1-structure-parser.space') }}</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="hexSeparator" value=":"
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2 text-sm">{{ $t('tools.asn1-structure-parser.colon') }}</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="hexSeparator" value="-"
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2 text-sm">{{ $t('tools.asn1-structure-parser.dash') }}</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="hexSeparator" value="."
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2 text-sm">{{ $t('tools.asn1-structure-parser.dot') }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Export options -->
                <div class="mb-6">
                    <h3 class="font-medium text-sm mb-2">{{ $t('tools.asn1-structure-parser.exportFormat') }}</h3>
                    <div class="grid grid-cols-2 gap-2">
                        <button @click="exportTree('json')"
                            class="bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm flex items-center justify-center"
                            :disabled="!parseResult">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            JSON
                        </button>
                        <button @click="exportTree('yaml')"
                            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm flex items-center justify-center"
                            :disabled="!parseResult">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            YAML
                        </button>
                        <button @click="exportTree('xml')"
                            class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm flex items-center justify-center"
                            :disabled="!parseResult">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            XML
                        </button>
                        <button @click="exportTree('csv')"
                            class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm flex items-center justify-center"
                            :disabled="!parseResult">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            CSV
                        </button>
                        <button @click="exportTree('dot')"
                            class="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-300 text-sm flex items-center justify-center"
                            :disabled="!parseResult">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            DOT (Graphviz)
                        </button>
                    </div>
                </div>

                <div v-if="isLoading" class="flex justify-center items-center p-8">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>

                <div v-else-if="error"
                    class="p-4 mt-4 bg-red-100 dark:bg-red-900 rounded text-red-800 dark:text-red-200">
                    <strong>{{ $t('tools.asn1-structure-parser.error') }}:</strong> {{ error }}
                </div>
            </div>
        </div>

        <!-- Bottom section: ASN.1 Tree and Hex Dump -->
        <div v-if="parseResult" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left bottom: ASN.1 Tree Structure -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h2 class="text-lg font-semibold mb-2">{{ $t('tools.asn1-structure-parser.treeStructure') }}</h2>
                <div class="bg-gray-50 dark:bg-gray-900 p-3 rounded border dark:border-gray-700 overflow-auto" :style="{
                    'max-height': '80vh',
                    'min-height': '200px',
                    'height': parseResult && parseResult.tree ? 'auto' : '400px'
                }">
                    <div class="asn1-tree">
                        <div class="tree-container">
                            <Asn1TreeNode v-if="parseResult && parseResult.tree" :nodes="parseResult.tree"
                                :is-node-highlighted="isNodeHighlighted" :highlight-node="highlightNode"
                                :clear-highlight="clearHighlight" :toggle-node="toggleNode" :get-tag-class="getTagClass"
                                :oid-to-string="oidToString" :trim-large-data="trimLargeData"
                                :copy-node-value="copyNodeValue" :toggle-node-expansion="toggleNodeExpansion" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right bottom: Hexadecimal Dump -->
            <div v-if="showHexDump" class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h2 class="text-lg font-semibold mb-2">{{ $t('tools.asn1-structure-parser.hexDump') }}</h2>
                <div class="bg-gray-50 dark:bg-gray-900 p-3 rounded border dark:border-gray-700 overflow-auto font-mono text-sm"
                    style="max-height: 80vh; min-height: 400px;">
                    <div class="hex-dump" ref="hexDumpRef">
                        <div v-for="(line, index) in formattedHexDump" :key="index" :data-offset="line.offset"
                            :class="{ 'bg-yellow-100 dark:bg-yellow-900': line.highlighted }">
                            <span class="text-gray-500 mr-4">{{ line.offset }}</span>
                            <span class="hex-values">
                                <span v-for="(byte, byteIndex) in line.bytes" :key="byteIndex" :class="[
                                    { 'text-red-500 font-bold': byte.highlighted },
                                    { 'bg-blue-100 dark:bg-blue-900': byte.highlighted },
                                    colorHighlight ? getByteColorClass(byte) : ''
                                ]" class="mr-1 px-0.5 py-0.5 rounded cursor-pointer"
                                    @mouseenter="highlightByteInTree(index, byteIndex)" @mouseleave="clearHighlight">
                                    {{ byte.formattedValue }}
                                </span>
                            </span>
                            <span class="ml-4 text-gray-700 dark:text-gray-300">{{ line.ascii }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty state when hex dump is disabled -->
            <div v-else class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h2 class="text-lg font-semibold mb-2">{{ $t('tools.asn1-structure-parser.hexDump') }}</h2>
                <div
                    class="flex items-center justify-center h-96 bg-gray-50 dark:bg-gray-900 p-3 rounded border dark:border-gray-700">
                    <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.asn1-structure-parser.hexDumpDisabled') }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Empty state when no parse result -->
        <div v-else-if="!isLoading && !error" class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div class="p-4 text-gray-500 dark:text-gray-400 text-center">
                {{ $t('tools.asn1-structure-parser.noData') }}
            </div>
        </div>

        <!-- Toast notifications -->
        <div v-if="showToast"
            class="fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg max-w-md transition-opacity duration-300"
            :class="{
                'bg-red-500 text-white': toastType === 'error',
                'bg-green-500 text-white': toastType === 'success',
                'bg-blue-500 text-white': toastType === 'info',
                'opacity-100': showToast,
                'opacity-0': !showToast
            }">
            {{ toastMessage }}
        </div>
        <Asn1StructureParserArticle />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import Asn1StructureParserArticle from './Asn1StructureParserArticle.vue';
import Asn1TreeNode from './asn1/Asn1TreeNode.vue';

const { t } = useI18n();

// State variables
const inputData = ref('');
const inputFormat = ref('PEM');
const inputFormats = ['PEM', 'HEX', 'Base64', 'DER'];
const showHexDump = ref(true);
const trimLargeData = ref(true);
const useDefinitionFile = ref(false);
const colorHighlight = ref(true);
const expandAllNodes = ref(true); // New option to expand all nodes by default
const hexSeparator = ref(' '); // Default separator is space
const isLoading = ref(false);
const error = ref('');
const parseResult = ref(null);
const hexDumpRef = ref(null);
const highlightedNode = ref(null);
const highlightedAncestors = ref([]);
const autoScroll = ref(true);

// Toast notification
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref('info');
const toastTimeout = ref(null);

// Function to show toast notifications
function notify(message, type = 'info') {
    // Clear any existing timeout
    if (toastTimeout.value) {
        clearTimeout(toastTimeout.value);
    }

    // Set toast properties
    toastMessage.value = message;
    toastType.value = type;
    showToast.value = true;

    // Auto-hide after 3 seconds
    toastTimeout.value = setTimeout(() => {
        showToast.value = false;
    }, 3000);
}

// Compute formatted hex dump with separator
const formattedHexDump = computed(() => {
    if (!parseResult.value || !parseResult.value.hexDump) return [];

    return parseResult.value.hexDump.map(line => {
        const formattedBytes = line.bytes.map(byte => ({
            ...byte,
            formattedValue: byte.value + hexSeparator.value
        }));

        return {
            ...line,
            bytes: formattedBytes
        };
    });
});

// Get tag class for coloring
function getTagClass(node) {
    if (!node.tagName) return '';

    if (node.tagName.startsWith('SEQUENCE') || node.tagName.startsWith('SET')) {
        return 'tag-container';
    } else if (node.tagName.includes('String')) {
        return 'tag-string';
    } else if (node.tagName === 'OBJECT IDENTIFIER') {
        return 'tag-oid';
    } else if (node.tagName === 'INTEGER') {
        return 'tag-integer';
    } else if (node.tagName === 'BOOLEAN') {
        return 'tag-boolean';
    } else if (node.tagName.includes('Time')) {
        return 'tag-time';
    } else if (node.tagName.startsWith('BIT') || node.tagName.startsWith('OCTET')) {
        return 'tag-binary';
    } else if (node.tagName.startsWith('Context_')) {
        return 'tag-context';
    }

    return '';
}

// Get byte color class
function getByteColorClass(byte) {
    if (!byte.type) return '';

    switch (byte.type) {
        case 'tag': return 'byte-tag';
        case 'length': return 'byte-length';
        case 'string': return 'byte-string';
        case 'integer': return 'byte-integer';
        case 'oid': return 'byte-oid';
        case 'boolean': return 'byte-boolean';
        case 'binary': return 'byte-binary';
        case 'time': return 'byte-time';
        default: return '';
    }
}

// Sample OID mapping
const oidMap = {
    '1.2.840.113549.1.1.1': 'rsaEncryption',
    '1.2.840.113549.1.1.5': 'sha1WithRSAEncryption',
    '1.2.840.113549.1.1.11': 'sha256WithRSAEncryption',
    '1.2.840.113549.1.1.13': 'sha512WithRSAEncryption',
    '1.2.840.113549.1.9.1': 'emailAddress',
    '2.5.4.3': 'commonName (CN)',
    '2.5.4.4': 'surname (SN)',
    '2.5.4.5': 'serialNumber',
    '2.5.4.6': 'countryName (C)',
    '2.5.4.7': 'localityName (L)',
    '2.5.4.8': 'stateOrProvinceName (ST)',
    '2.5.4.9': 'streetAddress',
    '2.5.4.10': 'organizationName (O)',
    '2.5.4.11': 'organizationalUnitName (OU)',
    '2.5.4.12': 'title',
    '2.5.4.13': 'description',
    '2.5.4.42': 'givenName (G)',
    '2.5.29.14': 'X509v3 Subject Key Identifier',
    '2.5.29.15': 'X509v3 Key Usage',
    '2.5.29.17': 'X509v3 Subject Alternative Name',
    '2.5.29.19': 'X509v3 Basic Constraints',
    '2.5.29.31': 'X509v3 CRL Distribution Points',
    '2.5.29.32': 'X509v3 Certificate Policies',
    '2.5.29.35': 'X509v3 Authority Key Identifier',
    '2.5.29.37': 'X509v3 Extended Key Usage',
    '1.3.6.1.5.5.7.1.1': 'Authority Information Access',
    '1.3.6.1.5.5.7.3.1': 'TLS Web Server Authentication',
    '1.3.6.1.5.5.7.3.2': 'TLS Web Client Authentication',
    '1.3.6.1.5.5.7.3.3': 'Code Signing',
    '1.3.6.1.5.5.7.3.4': 'Email Protection',
    '1.3.6.1.5.5.7.3.8': 'Time Stamping',
};

// Function to convert OID to readable string
function oidToString(oid) {
    if (oidMap[oid]) {
        return `${oid} (${oidMap[oid]})`;
    }
    return oid;
}

// Check if a node is highlighted
function isNodeHighlighted(node) {
    return highlightedNode.value === node || highlightedAncestors.value.includes(node);
}

// Find node at offset
function findNodeAtOffset(nodes, offset) {
    if (!nodes) return null;

    for (const node of nodes) {
        if (offset >= node.offset && offset < node.offset + node.length) {
            // Check if the offset is in a child node
            if (node.children && node.children.length) {
                const childNode = findNodeAtOffset(node.children, offset);
                if (childNode) return childNode;
            }
            return node;
        }
    }

    return null;
}

// Find node and its ancestors at offset
function findNodeAndAncestorsAtOffset(nodes, offset, ancestors = []) {
    if (!nodes) return { node: null, ancestors: [] };

    for (const node of nodes) {
        if (offset >= node.offset && offset < node.offset + node.length) {
            // Check if the offset is in a child node
            if (node.children && node.children.length) {
                const result = findNodeAndAncestorsAtOffset(node.children, offset, [...ancestors, node]);
                if (result.node) return result;
            }
            return { node, ancestors };
        }
    }

    return { node: null, ancestors: [] };
}

// Highlight byte in the tree
function highlightByteInTree(lineIndex, byteIndex) {
    if (!parseResult.value || !parseResult.value.hexDump || !parseResult.value.tree) return;

    const line = parseResult.value.hexDump[lineIndex];
    if (!line) return;

    const byteOffset = parseInt(line.offset, 16) + byteIndex;
    const { node, ancestors } = findNodeAndAncestorsAtOffset(parseResult.value.tree, byteOffset);

    if (node) {
        highlightedNode.value = node;
        highlightedAncestors.value = ancestors;

        // 高亮所有祖先节点并确保它们展开
        ancestors.forEach(ancestor => {
            ancestor.expanded = true;
        });

        // 高亮hex dump中的所有相关字节
        parseResult.value.hexDump.forEach(dumpLine => {
            const lineOffset = parseInt(dumpLine.offset, 16);
            dumpLine.highlighted = (lineOffset >= node.offset &&
                lineOffset < node.offset + node.length);

            dumpLine.bytes.forEach((byte, idx) => {
                const bytePos = lineOffset + idx;
                byte.highlighted = bytePos >= node.offset && bytePos < node.offset + node.length;
            });
        });

        // 根据自动滚动选项决定是否滚动
        if (autoScroll.value) {
            nextTick(() => {
                const highlightedElement = document.querySelector('.node-highlighted');
                if (highlightedElement) {
                    highlightedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    }
}

// Highlight node and corresponding bytes in hex dump
function highlightNode(node) {
    if (!node) return;

    highlightedNode.value = node;
    highlightedAncestors.value = findNodeAncestors(parseResult.value.tree, node);

    // 高亮hex dump中的对应字节
    if (parseResult.value && parseResult.value.hexDump) {
        const startOffset = node.offset;
        const endOffset = node.offset + node.length - 1;

        parseResult.value.hexDump.forEach(line => {
            const lineOffset = parseInt(line.offset, 16);
            const lineEndOffset = lineOffset + 15; // 每行16个字节

            // 如果行的范围与节点范围有重叠，则高亮整行
            line.highlighted = (lineOffset <= endOffset && lineEndOffset >= startOffset);

            line.bytes.forEach((byte, idx) => {
                const bytePos = lineOffset + idx;
                byte.highlighted = bytePos >= startOffset && bytePos <= endOffset;
            });
        });

        // 自动滚动hex dump视图到高亮区域
        nextTick(() => {
            if (hexDumpRef.value) {
                const startLine = Math.floor(startOffset / 16);
                const lineElement = hexDumpRef.value.querySelectorAll('div')[startLine];
                if (lineElement) {
                    lineElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
}

// Find ancestors of a node
function findNodeAncestors(nodes, targetNode, path = []) {
    if (!nodes) return [];

    for (const node of nodes) {
        if (node === targetNode) return path;

        if (node.children && node.children.length) {
            const result = findNodeAncestors(node.children, targetNode, [...path, node]);
            if (result.length) return result;
        }
    }

    return [];
}

// Clear highlighting
function clearHighlight() {
    highlightedNode.value = null;
    highlightedAncestors.value = [];

    if (parseResult.value && parseResult.value.hexDump) {
        parseResult.value.hexDump.forEach(line => {
            line.highlighted = false;
            line.bytes.forEach(byte => {
                byte.highlighted = false;
            });
        });
    }
}

// Toggle node expansion
function toggleNode(node) {
    if (node.children && node.children.length) {
        node.expanded = !node.expanded;
    }
}

// Toggle node and all its children
function toggleNodeExpansion(node, expand) {
    if (!node) return;

    if (node.children && node.children.length) {
        node.expanded = expand;
        node.children.forEach(child => toggleNodeExpansion(child, expand));
    }
}

// Copy node value to clipboard
function copyNodeValue(node) {
    if (!node) return;

    let valueToCopy = '';

    if (node.value) {
        valueToCopy = node.value;
    } else if (node.oid) {
        valueToCopy = node.oid;
    } else {
        // Get hex values from offset
        const nodeBytes = [];
        parseResult.value.hexDump.forEach(line => {
            const lineOffset = parseInt(line.offset, 16);
            line.bytes.forEach((byte, idx) => {
                const bytePos = lineOffset + idx;
                if (bytePos >= node.offset && bytePos < node.offset + node.length) {
                    nodeBytes.push(byte.value);
                }
            });
        });
        valueToCopy = nodeBytes.join(hexSeparator.value);
    }

    if (valueToCopy) {
        navigator.clipboard.writeText(valueToCopy)
            .then(() => notify(t('tools.asn1-structure-parser.copiedToClipboard'), 'success'))
            .catch(() => notify(t('tools.asn1-structure-parser.copyFailed'), 'error'));
    }
}

// Export ASN.1 tree as JSON
function exportTree(format = 'json') {
    if (!parseResult.value || !parseResult.value.tree) {
        notify(t('tools.asn1-structure-parser.noDataToExport'), 'error');
        return;
    }

    try {
        // 简化树以便导出
        const simplifiedTree = simplifyTreeForExport(parseResult.value.tree);
        let exportData = '';
        let mimeType = '';
        let fileName = `asn1_structure.${format}`;

        switch (format) {
            case 'json':
                exportData = JSON.stringify(simplifiedTree, null, 2);
                mimeType = 'application/json';
                break;
            case 'yaml':
                exportData = convertToYaml(simplifiedTree);
                mimeType = 'application/yaml';
                break;
            case 'xml':
                exportData = convertToXml(simplifiedTree);
                mimeType = 'application/xml';
                break;
            case 'csv':
                exportData = convertToCsv(simplifiedTree);
                mimeType = 'text/csv';
                break;
            case 'dot':
                exportData = convertToDot(simplifiedTree);
                mimeType = 'text/plain';
                break;
            default:
                throw new Error('Unsupported export format');
        }

        // 创建并下载文件
        const blob = new Blob([exportData], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        notify(t('tools.asn1-structure-parser.exportSuccess'), 'success');
    } catch (e) {
        notify(t('tools.asn1-structure-parser.exportFailed') + ': ' + e.message, 'error');
    }
}

// YAML 转换函数
function convertToYaml(data, level = 0) {
    const indent = '  '.repeat(level);
    
    if (Array.isArray(data)) {
        return data.map(item => `${indent}- ${convertToYaml(item, level + 1)}`).join('\n');
    } else if (typeof data === 'object' && data !== null) {
        const lines = Object.entries(data).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                return `${indent}${key}:\n${convertToYaml(value, level + 1)}`;
            } else {
                return `${indent}${key}: ${value}`;
            }
        });
        return lines.join('\n');
    } else {
        return String(data);
    }
}

// XML 转换函数
function convertToXml(data) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<ASN1Structure>\n';
    
    function nodeToXml(node, indent = '  ') {
        let nodeXml = '';
        const sanitizeValue = (val) => String(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        
        if (Array.isArray(node)) {
            node.forEach(item => {
                nodeXml += `${indent}<Node>\n`;
                nodeXml += nodeToXml(item, indent + '  ');
                nodeXml += `${indent}</Node>\n`;
            });
        } else if (typeof node === 'object' && node !== null) {
            for (const [key, value] of Object.entries(node)) {
                if (key === 'children' && Array.isArray(value)) {
                    nodeXml += `${indent}<Children>\n`;
                    nodeXml += nodeToXml(value, indent + '  ');
                    nodeXml += `${indent}</Children>\n`;
                } else if (typeof value === 'object' && value !== null) {
                    nodeXml += `${indent}<${key}>\n`;
                    nodeXml += nodeToXml(value, indent + '  ');
                    nodeXml += `${indent}</${key}>\n`;
                } else if (value !== undefined && value !== null) {
                    nodeXml += `${indent}<${key}>${sanitizeValue(value)}</${key}>\n`;
                }
            }
        }
        
        return nodeXml;
    }
    
    xml += nodeToXml(data);
    xml += '</ASN1Structure>';
    return xml;
}

// CSV 转换函数 - 扁平化树结构
function convertToCsv(data) {
    // 列标题
    const headers = ['Path', 'Tag', 'TagName', 'Value', 'OID', 'Offset', 'Length'];
    let csvContent = headers.join(',') + '\n';
    
    // 递归扁平化树
    function flattenNode(node, path = '') {
        if (!node) return [];
        
        let rows = [];
        
        if (Array.isArray(node)) {
            node.forEach((item, index) => {
                rows = rows.concat(flattenNode(item, path ? `${path}.${index}` : `${index}`));
            });
        } else {
            // 添加当前节点
            const row = [
                path,
                node.tag || '',
                node.tagName || '',
                (node.value || '').replace(/,/g, '\\,').replace(/"/g, '""'), // 处理CSV中的逗号和引号
                node.oid || '',
                node.offset || '',
                node.length || ''
            ].map(v => `"${v}"`).join(',');
            
            rows.push(row);
            
            // 处理子节点
            if (node.children && Array.isArray(node.children)) {
                node.children.forEach((child, index) => {
                    rows = rows.concat(flattenNode(child, path ? `${path}.${index}` : `${index}`));
                });
            }
        }
        
        return rows;
    }
    
    csvContent += flattenNode(data).join('\n');
    return csvContent;
}

// DOT (Graphviz) 转换函数，用于可视化树结构
function convertToDot(data) {
    let dot = 'digraph ASN1Structure {\n';
    dot += '  node [shape=box, style="rounded,filled", fillcolor=lightblue];\n';
    dot += '  edge [arrowhead=vee];\n\n';
    
    let nodeId = 0;
    
    function processDot(node, parentId = null) {
        if (!node) return;
        
        if (Array.isArray(node)) {
            const rootId = nodeId++;
            dot += `  node${rootId} [label="ASN.1 Root", fillcolor=lightgray];\n`;
            
            node.forEach(item => {
                processDot(item, rootId);
            });
            
            return;
        }
        
        const currentId = nodeId++;
        let label = node.tagName || 'Unknown';
        
        if (node.oid) {
            label += `\\nOID: ${node.oid}`;
        }
        
        if (node.value) {
            // 截断过长的值
            const truncatedValue = node.value.length > 50 ? node.value.substring(0, 47) + '...' : node.value;
            label += `\\nValue: ${truncatedValue.replace(/"/g, '\\"')}`;
        }
        
        label += `\\nOffset: ${node.offset}, Length: ${node.length}`;
        
        // 根据节点类型设置不同颜色
        let fillColor = 'lightblue';
        if (node.tagName) {
            if (node.tagName.startsWith('SEQUENCE') || node.tagName.startsWith('SET')) {
                fillColor = 'lightgreen';
            } else if (node.tagName.includes('String')) {
                fillColor = 'lightyellow';
            } else if (node.tagName === 'OBJECT IDENTIFIER') {
                fillColor = 'lightpink';
            } else if (node.tagName === 'INTEGER') {
                fillColor = 'lightcoral';
            }
        }
        
        dot += `  node${currentId} [label="${label}", fillcolor=${fillColor}];\n`;
        
        if (parentId !== null) {
            dot += `  node${parentId} -> node${currentId};\n`;
        }
        
        // 处理子节点
        if (node.children && Array.isArray(node.children)) {
            node.children.forEach(child => {
                processDot(child, currentId);
            });
        }
    }
    
    processDot(data);
    dot += '}\n';
    return dot;
}

// Simplify tree for export (remove circular references)
function simplifyTreeForExport(nodes) {
    if (!nodes) return [];

    return nodes.map(node => {
        const simplified = {
            tag: node.tag,
            tagName: node.tagName,
            offset: node.offset,
            length: node.length
        };

        if (node.value) simplified.value = node.value;
        if (node.oid) simplified.oid = node.oid;
        if (node.children && node.children.length) {
            simplified.children = simplifyTreeForExport(node.children);
        }

        return simplified;
    });
}

// Handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Check file size
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
        notify(t('tools.asn1-structure-parser.fileTooLarge'), 'error');
        return;
    }

    isLoading.value = true;
    error.value = '';

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            if (inputFormat.value === 'DER') {
                // Read as array buffer for binary data
                const arrayBuffer = e.target.result;
                const bytes = new Uint8Array(arrayBuffer);

                // Convert to hex for processing
                let hex = '';
                for (let i = 0; i < bytes.length; i++) {
                    hex += bytes[i].toString(16).padStart(2, '0');
                }
                inputData.value = hex;
                parseASN1();
            } else {
                // Read as text for other formats
                inputData.value = e.target.result;
                parseASN1();
            }
        } catch (e) {
            error.value = t('tools.asn1-structure-parser.fileReadError') + ': ' + e.message;
        } finally {
            isLoading.value = false;
        }
    };

    reader.onerror = () => {
        error.value = t('tools.asn1-structure-parser.fileReadError');
        isLoading.value = false;
    };

    if (inputFormat.value === 'DER') {
        reader.readAsArrayBuffer(file);
    } else {
        reader.readAsText(file);
    }
}

// Load example data
function loadExample() {
    // X.509 Certificate in PEM format
    inputFormat.value = 'PEM';
    inputData.value = `-----BEGIN CERTIFICATE-----
MIIDdzCCAl+gAwIBAgIEAgAAuTANBgkqhkiG9w0BAQUFADBaMQswCQYDVQQGEwJJ
RTESMBAGA1UEChMJQmFsdGltb3JlMRMwEQYDVQQLEwpDeWJlclRydXN0MSIwIAYD
VQQDExlCYWx0aW1vcmUgQ3liZXJUcnVzdCBSb290MB4XDTAwMDUxMjE4NDYwMFoX
DTI1MDUxMjIzNTkwMFowWjELMAkGA1UEBhMCSUUxEjAQBgNVBAoTCUJhbHRpbW9y
ZTETMBEGA1UECxMKQ3liZXJUcnVzdDEiMCAGA1UEAxMZQmFsdGltb3JlIEN5YmVy
VHJ1c3QgUm9vdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKMEuyKr
mD1X6CZymrV51Cni4eiVgLGw41uOKymaZN+hXe2wCQVt2yguzmKiYv60iNoS6zjr
IZ3AQSsBUnuId9Mcj8e6uYi1agnnc+gRQKfRzMpijS3ljwumUNKoUMMo6vWrJYeK
mpYcqWe4PwzV9/lSEy/CG9VwcPCPwBLKBsua4dnKM3p31vjsufFoREJIE9LAwqSu
XmD+tqYF/LTdB1kC1FkYmGP1pWPgkAx9XbIGevOF6uvUA65ehD5f/xXtabz5OTZy
dc93Uk3zyZAsuT3lySNTPx8kmCFcB5kpvcY67Oduhjprl3RjM71oGDHweI12v/ye
jl0qhqdNkNwnGjkCAwEAAaNFMEMwHQYDVR0OBBYEFOWdWTCCR1jMrPoIVDaGezq1
BE3wMBIGA1UdEwEB/wQIMAYBAf8CAQMwDgYDVR0PAQH/BAQDAgEGMA0GCSqGSIb3
DQEBBQUAA4IBAQCFDF2O5G9RaEIFoN27TyclhAO992T9Ldcw46QQF+vaKSm2eT92
9hkTI7gQCvlYpNRhcL0EYWoSihfVCr3FvDB81ukMJY2GQE/szKN+OMY3EU/t3Wgx
jkzSswF07r51XgdIGn9w/xZchMB5hbgF/X++ZRGjD8ACtPhSNzkE1akxehi/oCr0
Epn3o0WC4zxe9Z2etciefC7IpJ5OCBRLbf1wbWsaY71k5h+3zvDyny67G7fyUIhz
ksLi4xaNmjICq44Y3ekQEe5+NauQrz4wlHrQMz2nZQ/1/I6eYs9HRCwBXbsdtTLS
R9I4LtD+gdwyah617jzV/OeBHRnDJELqYzmp
-----END CERTIFICATE-----`;

    // 先解析数据
    parseASN1();

    // 使用nextTick确保DOM更新后再展开节点
    nextTick(() => {
        if (parseResult.value && parseResult.value.tree) {
            // 强制展开所有节点
            expandAllTreeNodes(parseResult.value.tree);
            console.log("节点已全部展开");
        }
    });
}

// Parse ASN.1 data
function parseASN1() {
    if (!inputData.value.trim()) {
        parseResult.value = null;
        error.value = '';
        return;
    }

    isLoading.value = true;
    error.value = '';

    try {
        let binaryData;

        switch (inputFormat.value) {
            case 'PEM':
                binaryData = parsePEM(inputData.value);
                break;
            case 'HEX':
                binaryData = parseHEX(inputData.value);
                break;
            case 'Base64':
                binaryData = parseBase64(inputData.value);
                break;
            case 'DER':
                binaryData = parseHEX(inputData.value); // Already converted to hex
                break;
            default:
                throw new Error(t('tools.asn1-structure-parser.unsupportedFormat'));
        }

        if (!binaryData || !binaryData.length) {
            throw new Error(t('tools.asn1-structure-parser.noData'));
        }

        // Parse the ASN.1 structure
        const result = parseASN1Structure(binaryData);

        // Create hex dump
        const hexDump = createHexDump(binaryData);

        parseResult.value = {
            tree: result,
            hexDump: hexDump
        };

        // Apply expand all if requested
        if (expandAllNodes.value) {
            expandAllTreeNodes(parseResult.value.tree);
        }

    } catch (e) {
        error.value = e.message;
        parseResult.value = null;
    } finally {
        isLoading.value = false;
    }
}

// Expand all nodes in the tree
function expandAllTreeNodes(nodes) {
    if (!nodes) return;

    nodes.forEach(node => {
        if (node.children && node.children.length) {
            node.expanded = true;
            expandAllTreeNodes(node.children);
        }
    });
}

// Parse PEM format
function parsePEM(pemData) {
    // Extract base64 data between BEGIN and END markers
    const pemRegex = /-----BEGIN [^-]+-----([A-Za-z0-9+/=\s]+)-----END [^-]+-----/;
    const matches = pemRegex.exec(pemData);

    if (!matches || matches.length < 2) {
        throw new Error(t('tools.asn1-structure-parser.invalidPEM'));
    }

    // Remove whitespace and decode base64
    const base64Data = matches[1].replace(/\s/g, '');
    return parseBase64(base64Data);
}

// Parse hexadecimal format
function parseHEX(hexData) {
    // Remove whitespace and validate hex
    const cleanHex = hexData.replace(/[\s:]/g, '').toUpperCase();

    if (!/^[0-9A-F]*$/.test(cleanHex)) {
        throw new Error(t('tools.asn1-structure-parser.invalidHex'));
    }

    // Convert hex to binary
    const result = new Uint8Array(cleanHex.length / 2);
    for (let i = 0; i < cleanHex.length; i += 2) {
        result[i / 2] = parseInt(cleanHex.substr(i, 2), 16);
    }

    return result;
}

// Parse Base64 format
function parseBase64(base64Data) {
    try {
        // Clean up the base64 string
        const cleanBase64 = base64Data.replace(/\s/g, '');

        // Decode base64 to binary
        const binaryString = atob(cleanBase64);
        const bytes = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes;
    } catch (e) {
        throw new Error(t('tools.asn1-structure-parser.invalidBase64'));
    }
}

// ASN.1 structure parsing
function parseASN1Structure(data) {
    let offset = 0;
    return parseASN1Node(data, offset, []);
}

// Parse a single ASN.1 node
function parseASN1Node(data, offset, path) {
    const nodes = [];
    const initialOffset = offset;

    while (offset < data.length) {
        try {
            const nodeStartOffset = offset;

            // Parse tag
            if (offset >= data.length) {
                throw new Error(t('tools.asn1-structure-parser.unexpectedEOF'));
            }

            const tag = data[offset++];
            const tagClass = (tag & 0xC0) >> 6;
            const constructed = ((tag & 0x20) !== 0);
            let tagNumber = tag & 0x1F;

            // Handle long form tag number
            if (tagNumber === 0x1F) {
                tagNumber = 0;
                let byte;

                do {
                    if (offset >= data.length) {
                        throw new Error(t('tools.asn1-structure-parser.unexpectedEOF'));
                    }

                    byte = data[offset++];
                    tagNumber = (tagNumber << 7) | (byte & 0x7F);
                } while ((byte & 0x80) !== 0);
            }

            // Parse length
            if (offset >= data.length) {
                throw new Error(t('tools.asn1-structure-parser.unexpectedEOF'));
            }

            let length = data[offset++];

            // Handle long form length
            if (length > 127) {
                const lengthBytes = length & 0x7F;

                if (lengthBytes > 4) { // Arbitrary limit for sanity
                    throw new Error(t('tools.asn1-structure-parser.lengthTooLong'));
                }

                length = 0;

                for (let i = 0; i < lengthBytes; i++) {
                    if (offset >= data.length) {
                        throw new Error(t('tools.asn1-structure-parser.unexpectedEOF'));
                    }

                    length = (length << 8) | data[offset++];
                }
            }

            // Determine tag name
            let tagName = '';
            switch (tagClass) {
                case 0: // Universal
                    switch (tagNumber) {
                        case 0x01: tagName = "BOOLEAN"; break;
                        case 0x02: tagName = "INTEGER"; break;
                        case 0x03: tagName = "BIT STRING"; break;
                        case 0x04: tagName = "OCTET STRING"; break;
                        case 0x05: tagName = "NULL"; break;
                        case 0x06: tagName = "OBJECT IDENTIFIER"; break;
                        case 0x07: tagName = "OBJECT DESCRIPTOR"; break;
                        case 0x08: tagName = "EXTERNAL"; break;
                        case 0x09: tagName = "REAL"; break;
                        case 0x0A: tagName = "ENUMERATED"; break;
                        case 0x0B: tagName = "EMBEDDED PDV"; break;
                        case 0x0C: tagName = "UTF8String"; break;
                        case 0x10: tagName = "SEQUENCE"; break;
                        case 0x11: tagName = "SET"; break;
                        case 0x12: tagName = "NumericString"; break;
                        case 0x13: tagName = "PrintableString"; break;
                        case 0x14: tagName = "T61String"; break;
                        case 0x15: tagName = "VideotexString"; break;
                        case 0x16: tagName = "IA5String"; break;
                        case 0x17: tagName = "UTCTime"; break;
                        case 0x18: tagName = "GeneralizedTime"; break;
                        case 0x19: tagName = "GraphicString"; break;
                        case 0x1A: tagName = "VisibleString"; break;
                        case 0x1B: tagName = "GeneralString"; break;
                        case 0x1C: tagName = "UniversalString"; break;
                        case 0x1D: tagName = "CHARACTER STRING"; break;
                        case 0x1E: tagName = "BMPString"; break;
                        default: tagName = `Universal_${tagNumber}`; break;
                    }
                    break;
                case 1: // Application
                    tagName = `Application_${tagNumber}`;
                    break;
                case 2: // Context-specific
                    tagName = `Context_${tagNumber}`;
                    break;
                case 3: // Private
                    tagName = `Private_${tagNumber}`;
                    break;
            }

            // Create node
            const node = {
                tag: tagNumber,
                tagClass: tagClass,
                constructed: constructed,
                tagName: tagName,
                offset: nodeStartOffset,
                length: (offset - nodeStartOffset) + length,
                value: null,
                children: [],
                expanded: false
            };

            // Parse value based on tag
            if (constructed && length > 0) {
                // Parse children for constructed types
                const endOffset = offset + length;
                const childPath = [...path, nodes.length];

                if (tagNumber === 0x10 || tagNumber === 0x11) { // SEQUENCE or SET
                    node.children = parseASN1Node(data.slice(offset, endOffset), 0, childPath);
                    // Adjust offsets of children
                    adjustOffsets(node.children, offset);
                } else if (tagNumber === 0x03) { // BIT STRING might contain further ASN.1 data
                    // Check if the first byte is 0 (no unused bits) and try to parse the rest as ASN.1
                    if (length > 1 && data[offset] === 0) {
                        try {
                            const bitStringChildren = parseASN1Node(data.slice(offset + 1, endOffset), 0, childPath);
                            if (bitStringChildren.length > 0) {
                                node.children = bitStringChildren;
                                // Adjust offsets of children
                                adjustOffsets(node.children, offset + 1);
                            } else {
                                // Fallback to hex display if no valid ASN.1 content
                                node.value = formatValue(data.slice(offset, endOffset), tagNumber);
                            }
                        } catch (e) {
                            // If parsing as ASN.1 fails, display as hex
                            node.value = formatValue(data.slice(offset, endOffset), tagNumber);
                        }
                    } else {
                        node.value = formatValue(data.slice(offset, endOffset), tagNumber);
                    }
                } else if (tagNumber === 0x04) { // OCTET STRING might contain further ASN.1 data
                    try {
                        const octetStringChildren = parseASN1Node(data.slice(offset, endOffset), 0, childPath);
                        if (octetStringChildren.length > 0) {
                            node.children = octetStringChildren;
                            // Adjust offsets of children
                            adjustOffsets(node.children, offset);
                        } else {
                            // Fallback to hex display if no valid ASN.1 content
                            node.value = formatValue(data.slice(offset, endOffset), tagNumber);
                        }
                    } catch (e) {
                        // If parsing as ASN.1 fails, display as hex
                        node.value = formatValue(data.slice(offset, endOffset), tagNumber);
                    }
                } else {
                    // For other constructed types, just show the hex value
                    node.value = formatValue(data.slice(offset, endOffset), tagNumber);
                }
            } else if (length > 0) {
                // Handle primitive types
                const value = data.slice(offset, offset + length);

                switch (tagNumber) {
                    case 0x01: // BOOLEAN
                        node.value = value[0] !== 0 ? "true" : "false";
                        break;
                    case 0x02: // INTEGER
                        if (length <= 8) { // Handle reasonably sized integers
                            let val = 0;
                            const negative = (value[0] & 0x80) !== 0;

                            // Handle two's complement for negative numbers
                            if (negative && length > 0) {
                                val = -1; // Start with all bits set
                                for (let i = 0; i < length; i++) {
                                    val = (val << 8) | value[i];
                                }
                            } else {
                                for (let i = 0; i < length; i++) {
                                    val = (val << 8) | value[i];
                                }
                            }

                            node.value = val.toString();
                        } else {
                            // For very large integers, display hex
                            node.value = toHexString(value);
                        }
                        break;
                    case 0x03: // BIT STRING
                        if (length > 0) {
                            const unusedBits = value[0];
                            node.value = `${length - 1} bytes, ${unusedBits} unused bit(s): ${toHexString(value.slice(1))}`;
                        } else {
                            node.value = "";
                        }
                        break;
                    case 0x05: // NULL
                        node.value = "null";
                        break;
                    case 0x06: // OBJECT IDENTIFIER
                        node.oid = decodeOID(value);
                        break;
                    case 0x0C: // UTF8String
                    case 0x13: // PrintableString
                    case 0x16: // IA5String
                    case 0x1A: // VisibleString
                    case 0x1E: // BMPString
                        try {
                            node.value = new TextDecoder("utf-8").decode(value);
                        } catch (e) {
                            node.value = toHexString(value);
                        }
                        break;
                    case 0x17: // UTCTime
                    case 0x18: // GeneralizedTime
                        try {
                            node.value = new TextDecoder("utf-8").decode(value);
                        } catch (e) {
                            node.value = toHexString(value);
                        }
                        break;
                    default:
                        node.value = formatValue(value, tagNumber);
                        break;
                }
            }

            nodes.push(node);
            offset += length;

            // If this is the end of the data or we're parsing a specific node, stop
            if (path.length === 0 && offset >= data.length) {
                break;
            }

        } catch (e) {
            // If we encounter an error, add an error node and stop parsing
            nodes.push({
                tagName: "ERROR",
                offset: offset,
                length: data.length - offset,
                value: e.message,
                expanded: false
            });
            break;
        }
    }

    return nodes;
}

// Adjust offsets of nodes to account for parent offset
function adjustOffsets(nodes, parentOffset) {
    if (!nodes) return;

    nodes.forEach(node => {
        node.offset += parentOffset;
        if (node.children && node.children.length) {
            adjustOffsets(node.children, parentOffset);
        }
    });
}

// Format value based on tag type
function formatValue(data, tagNumber) {
    if (trimLargeData.value && data.length > 32) {
        return `${data.length} bytes: ${toHexString(data.slice(0, 16))}... (truncated)`;
    } else {
        return `${data.length} bytes: ${toHexString(data)}`;
    }
}

// Convert binary data to hex string
function toHexString(data) {
    return Array.from(data)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join(' ');
}

// Decode OID
function decodeOID(data) {
    if (data.length === 0) return "";

    const first = data[0];
    const oid = [(first / 40) >>> 0, first % 40];

    let value = 0;
    for (let i = 1; i < data.length; i++) {
        const byte = data[i];
        value = (value << 7) | (byte & 0x7F);

        if ((byte & 0x80) === 0) {
            oid.push(value);
            value = 0;
        }
    }

    return oid.join('.');
}

// Create hex dump display
function createHexDump(data) {
    const hexDump = [];
    const bytesPerLine = 16;

    for (let i = 0; i < data.length; i += bytesPerLine) {
        const lineBytes = data.slice(i, i + bytesPerLine);
        const offset = i.toString(16).padStart(8, '0');

        const bytes = [];
        let ascii = '';

        for (let j = 0; j < lineBytes.length; j++) {
            const byte = lineBytes[j];
            bytes.push({
                value: byte.toString(16).padStart(2, '0'),
                highlighted: false,
                offset: i + j,
                type: 'data' // Default type, will be updated based on ASN.1 structure
            });

            // Printable ASCII range
            if (byte >= 32 && byte <= 126) {
                ascii += String.fromCharCode(byte);
            } else {
                ascii += '.';
            }
        }

        // Add line to hex dump
        hexDump.push({
            offset: offset,
            bytes: bytes,
            ascii: ascii,
            highlighted: false
        });
    }

    // Colorize hex dump based on ASN.1 structure
    if (colorHighlight.value) {
        // Go through each node and colorize the hex dump based on tag type
        function colorizeNode(node) {
            if (!node) return;

            const tagByte = node.offset;
            const lengthStart = node.offset + 1;
            const dataStart = lengthLength => node.offset + 1 + lengthLength;

            // Tag byte
            colorizeBytes(tagByte, 1, 'tag');

            // Length bytes (assuming simple DER encoding for now)
            const firstLengthByte = data[lengthStart];
            if (firstLengthByte <= 127) {
                colorizeBytes(lengthStart, 1, 'length');

                // Content
                const contentStart = dataStart(1);
                const contentLength = node.length - 2; // Subtract tag and length
                colorizeBytes(contentStart, contentLength, getByteType(node.tagName));
            } else {
                const lengthBytes = (firstLengthByte & 0x7F) + 1;
                colorizeBytes(lengthStart, lengthBytes, 'length');

                // Content
                const contentStart = dataStart(lengthBytes);
                const contentLength = node.length - (1 + lengthBytes); // Subtract tag and length
                colorizeBytes(contentStart, contentLength, getByteType(node.tagName));
            }

            // Process children
            if (node.children && node.children.length) {
                node.children.forEach(colorizeNode);
            }
        }

        // Helper to get byte type based on tag name
        function getByteType(tagName) {
            if (!tagName) return 'data';

            if (tagName.includes('String')) {
                return 'string';
            } else if (tagName === 'INTEGER') {
                return 'integer';
            } else if (tagName === 'OBJECT IDENTIFIER') {
                return 'oid';
            } else if (tagName === 'BOOLEAN') {
                return 'boolean';
            } else if (tagName.includes('Time')) {
                return 'time';
            } else if (tagName.startsWith('BIT') || tagName.startsWith('OCTET')) {
                return 'binary';
            }

            return 'data';
        }

        // Helper to colorize bytes in the hex dump
        function colorizeBytes(startOffset, length, type) {
            const startLine = Math.floor(startOffset / bytesPerLine);
            const endLine = Math.floor((startOffset + length - 1) / bytesPerLine);

            for (let lineIdx = startLine; lineIdx <= endLine && lineIdx < hexDump.length; lineIdx++) {
                const line = hexDump[lineIdx];
                const lineStartOffset = lineIdx * bytesPerLine;

                for (let byteIdx = 0; byteIdx < line.bytes.length; byteIdx++) {
                    const byteOffset = lineStartOffset + byteIdx;

                    if (byteOffset >= startOffset && byteOffset < startOffset + length) {
                        line.bytes[byteIdx].type = type;
                    }
                }
            }
        }

        // Apply colorization
        parseASN1Structure(data).forEach(colorizeNode);
    }

    return hexDump;
}

// Watch for changes in input data and format
watch([inputData, inputFormat], () => {
    parseASN1();
});

// Watch for changes in options
watch([showHexDump, trimLargeData, expandAllNodes, colorHighlight, hexSeparator], () => {
    if (parseResult.value) {
        // If the parse result already exists, update display options
        if (expandAllNodes.value) {
            expandAllTreeNodes(parseResult.value.tree);
        }
    }
});

// Initialize parsing on mount
onMounted(() => {
    // Default to empty state, user will input data
});
</script>

<style scoped>
.hex-dump {
    white-space: pre;
    line-height: 1.5;
}

.asn1-tree {
    font-family: monospace;
    line-height: 1.5;
}

.asn1-node {
    display: flex;
    align-items: center;
    padding: 2px 0;
    transition: background-color 0.2s;
    border-radius: 4px;
}

.node-highlighted {
    background-color: rgba(255, 240, 0, 0.25);
    box-shadow: 0 0 0 2px rgba(255, 240, 0, 0.3);
    border-radius: 4px;
}

/* 增加hex dump高亮样式 */
.hex-values span {
    transition: all 0.2s ease;
}

.hex-values span.text-red-500 {
    position: relative;
    z-index: 10;
}

/* 其他标签样式保持不变 */
.asn1-tag {
    font-weight: bold;
    margin-right: 0.5rem;
}

/* Tag type colors */
.tag-container {
    color: #0077cc;
}

.tag-string {
    color: #009688;
}

.tag-oid {
    color: #9c27b0;
}

.tag-integer {
    color: #e91e63;
}

.tag-boolean {
    color: #ff9800;
}

.tag-time {
    color: #607d8b;
}

.tag-binary {
    color: #795548;
}

.tag-context {
    color: #673ab7;
}

/* Hex dump byte type colors */
.byte-tag {
    color: #d32f2f;
}

.byte-length {
    color: #ff9800;
}

.byte-string {
    color: #009688;
}

.byte-integer {
    color: #e91e63;
}

.byte-oid {
    color: #9c27b0;
}

.byte-boolean {
    color: #ff9800;
}

.byte-binary {
    color: #795548;
}

.byte-time {
    color: #607d8b;
}

/* Make sure to add enough margin between hex and ASCII display */
.hex-values {
    margin-right: 1.5rem;
    display: inline-block;
    min-width: 350px;
}

/* File drag and drop styling */
.dropzone-active {
    border-color: #4299e1;
    background-color: rgba(66, 153, 225, 0.1);
}
</style>