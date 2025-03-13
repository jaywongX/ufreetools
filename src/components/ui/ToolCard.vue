<template>
  <router-link :to="`/tool/${tool.id}`" class="tool-card flex flex-col cursor-pointer hover:shadow-md transition-shadow">
    <div class="p-4">
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
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{{ tool.description }}</p>
      
      <!-- 标签显示 -->
      <div class="flex flex-wrap gap-1">
        <TagBadge 
          v-for="tag in tool.tags" 
          :key="tag" 
          :tag-id="tag"
          class="pointer-events-none"
        />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'
import TagBadge from './TagBadge.vue'

defineProps({
  tool: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.tool-card {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

:deep(.dark) .tool-card {
  background-color: #1f2937;
  border-color: #374151;
}

.tool-card:hover {
  transform: translateY(-2px);
}
</style> 