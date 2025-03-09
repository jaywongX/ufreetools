<template>
  <div class="tool-card flex flex-col">
    <div class="flex items-start mb-3">
      <div class="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tool.icon" />
        </svg>
      </div>
      <div>
        <h3 class="font-medium">{{ tool.name }}</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">{{ tool.category }}</p>
      </div>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-grow">{{ tool.description }}</p>
    
    <!-- 标签显示 -->
    <div class="flex flex-wrap gap-1 mb-2">
      <TagBadge 
        v-for="tag in tool.tags.slice(0, 3)" 
        :key="tag" 
        :tag-id="tag"
        @click.stop="$emit('tag-click', tag)"
      />
      <span v-if="tool.tags.length > 3" class="text-xs text-gray-500 dark:text-gray-400">
        +{{ tool.tags.length - 3 }}
      </span>
    </div>
    
    <router-link :to="`/tool/${tool.id}`" class="text-sm text-primary dark:text-primary-light hover:underline">使用工具</router-link>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import TagBadge from './TagBadge.vue'

defineProps({
  tool: {
    type: Object,
    required: true
  }
})

defineEmits(['tag-click'])
</script> 