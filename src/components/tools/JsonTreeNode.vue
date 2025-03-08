<template>
  <div class="json-node" :style="{ paddingLeft: depth ? '1rem' : '0' }">
    <div 
      class="flex items-center p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <div class="flex items-center space-x-1.5 min-w-0 flex-1">
        <div 
          v-if="isObject" 
          class="cursor-pointer p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
          @click="toggleExpand"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 transition-transform" 
            :class="isExpanded ? 'rotate-90' : ''"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <span class="text-blue-600 dark:text-blue-400 font-medium truncate">{{ name }}</span>
        <span class="text-gray-400">:</span>
        <div 
          class="flex-1 min-w-0 relative group/value"
          :class="{'cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded px-2': !isObject || !isExpanded}"
          @click="!isObject || !isExpanded ? copyNodeValue() : null"
        >
          <span v-if="!isExpanded || !isObject" class="truncate block">
            <span v-if="isObject" class="text-gray-600 dark:text-gray-400 italic">
              {{ isArray ? `Array[${value.length}]` : 'Object' }}
            </span>
            <span v-else-if="typeof value === 'string'" class="text-green-600 dark:text-green-400">"{{ value }}"</span>
            <span v-else-if="typeof value === 'number'" class="text-purple-600 dark:text-purple-400">{{ value }}</span>
            <span v-else-if="typeof value === 'boolean'" class="text-red-600 dark:text-red-400">{{ value }}</span>
            <span v-else class="text-gray-600 dark:text-gray-400">{{ value }}</span>
          </span>
          <div 
            v-if="(!isObject || !isExpanded) && showTooltip"
            class="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover/value:opacity-100 transition-opacity whitespace-nowrap"
          >
            点击复制
          </div>
        </div>
      </div>
      <button 
        v-if="!isExpanded || !isObject"
        class="opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded flex-shrink-0 relative group/copy"
        @click="copyNodeValue"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <div 
          class="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover/copy:opacity-100 transition-opacity whitespace-nowrap"
        >
          复制
        </div>
      </button>
    </div>
    <div v-if="isExpanded && isObject">
      <json-tree-node
        v-for="(v, k) in value"
        :key="k"
        :name="k"
        :value="v"
        :depth="depth + 1"
        @copy="$emit('copy', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    required: true
  },
  depth: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['copy']);

const isExpanded = ref(props.depth < 1);
const isObject = computed(() => typeof props.value === 'object' && props.value !== null);
const isArray = computed(() => Array.isArray(props.value));
const showTooltip = computed(() => {
  return props.value !== null && props.value !== undefined;
});

const toggleExpand = () => {
  if (isObject.value) {
    isExpanded.value = !isExpanded.value;
  }
};

const copyNodeValue = () => {
  emit('copy', props.value);
};
</script>

<style scoped>
.json-node {
  @apply text-sm;
}
</style> 