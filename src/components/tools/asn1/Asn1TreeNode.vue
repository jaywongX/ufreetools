<template>
    <div class="tree-container">
        <div v-for="(node, index) in nodes" :key="index" class="asn1-node-wrapper">
            <div :class="[
                'asn1-node',
                isNodeHighlighted(node) ? 'node-highlighted' : '',
                getTagClass(node)
            ]" @mouseenter="onMouseEnter(node, $event)" @mouseleave="clearHighlight">
                <span v-if="node.children && node.children.length" class="cursor-pointer" @click.stop="toggle(node)">
                    <svg v-if="node.expanded" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12l-7 7-7-7">
                    </path>
                </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                </span>
                <span v-else class="mr-4"></span>

                <span class="asn1-tag mr-1">{{ node.tagName || 'Unknown' }}</span>

                <span v-if="node.oid" class="asn1-value">
                    {{ oidToString(node.oid) }}
                </span>
                <span v-else-if="node.value" class="asn1-value">
                    {{ node.value }}
                </span>

                <div class="ml-auto flex items-center space-x-2">
                    <button v-if="node.children && node.children.length" @click.stop="expandAll(node)"
                        class="text-xs text-blue-600 hover:underline">
                        {{ $t('tools.asn1-structure-parser.expandAll') }}
                    </button>
                    <button v-if="node.children && node.children.length" @click.stop="collapseAll(node)"
                        class="text-xs text-blue-600 hover:underline">
                        {{ $t('tools.asn1-structure-parser.collapseAll') }}
            </button>
                    <button @click.stop="copyNode(node)" class="text-xs text-blue-600 hover:underline">
                        {{ $t('tools.asn1-structure-parser.copyValue') }}
            </button>
                </div>
        </div>

            <div v-if="node.expanded && node.children && node.children.length" class="pl-6 mt-1">
            <Asn1TreeNode :nodes="node.children" :is-node-highlighted="isNodeHighlighted"
                :highlight-node="highlightNode" :clear-highlight="clearHighlight" :toggle-node="toggleNode"
                :get-tag-class="getTagClass" :oid-to-string="oidToString" :trim-large-data="trimLargeData"
                :copy-node-value="copyNodeValue" :toggle-node-expansion="toggleNodeExpansion" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    nodes: Array,
    isNodeHighlighted: Function,
    highlightNode: Function,
    clearHighlight: Function,
    toggleNode: Function,
    getTagClass: Function,
    oidToString: Function,
    trimLargeData: Boolean,
    copyNodeValue: Function,
    toggleNodeExpansion: Function
});

// 修复鼠标悬停事件问题
function onMouseEnter(node, event) {
    // 阻止事件冒泡，避免子节点和父节点的事件重复触发
    event.stopPropagation();
    props.highlightNode(node);
}

function toggle(node) {
    props.toggleNode(node);
}

function expandAll(node) {
    props.toggleNodeExpansion(node, true);
}

function collapseAll(node) {
    props.toggleNodeExpansion(node, false);
}

function copyNode(node) {
    props.copyNodeValue(node);
}
</script>

<style scoped>
.asn1-node-wrapper {
    margin-bottom: 4px;
}

.asn1-node {
    display: flex;
    align-items: center;
    padding: 4px 6px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    position: relative;
}

.asn1-node:hover {
    background-color: rgba(229, 231, 235, 0.5);
}

.dark .asn1-node:hover {
    background-color: rgba(55, 65, 81, 0.5);
}

.node-highlighted {
    background-color: rgba(255, 240, 0, 0.25) !important;
    box-shadow: 0 0 0 2px rgba(255, 240, 0, 0.3);
}

.toggle {
    display: inline-block;
    width: 16px;
    text-align: center;
    font-size: 10px;
}

.asn1-tag {
    font-weight: 600;
}

.asn1-value {
    font-family: monospace;
    word-break: break-all;
}
</style>