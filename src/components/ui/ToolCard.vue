<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <router-link :to="localizedRoute(`tool/${tool.id}`)" class="block p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">
        {{ tool.name }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
        {{ tool.description }}
      </p>
      
      <!-- 标签显示 -->
      <div class="flex flex-wrap gap-1">
        <TagBadge 
          v-for="tag in tool.tags" 
          :key="tag" 
          :tag-id="tag"
          class="pointer-events-none"
        />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import TagBadge from './TagBadge.vue'
import { useInternationalizedRoute } from '../../composables/useInternationalizedRoute'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  }
})

// 使用国际化路由辅助函数
const { localizedRoute } = useInternationalizedRoute()
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