<template>
  <div class="mb-6">
    <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">按标签筛选</h3>
    
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tag in popularTags"
        :key="tag.id"
        @click="toggleTag(tag.id)"
        class="tag-filter-btn"
        :class="{ 'tag-selected': selectedTags.includes(tag.id) }"
      >
        <TagBadge :tag-id="tag.id" />
      </button>
      
      <button 
        v-if="!showAllTags && allTags.length > popularTagCount"
        @click="showAllTags = true"
        class="text-xs text-primary dark:text-primary-light hover:underline"
      >
        显示更多 ({{ allTags.length - popularTagCount }})
      </button>
    </div>
    
    <!-- 展开时显示所有标签 -->
    <div v-if="showAllTags" class="mt-2 flex flex-wrap gap-2">
      <button
        v-for="tag in additionalTags"
        :key="tag.id"
        @click="toggleTag(tag.id)"
        class="tag-filter-btn"
        :class="{ 'tag-selected': selectedTags.includes(tag.id) }"
      >
        <TagBadge :tag-id="tag.id" />
      </button>
      
      <button 
        @click="showAllTags = false"
        class="text-xs text-primary dark:text-primary-light hover:underline"
      >
        收起
      </button>
    </div>
    
    <!-- 已选标签 -->
    <div v-if="selectedTags.length > 0" class="mt-3">
      <div class="flex justify-between items-center">
        <span class="text-xs text-gray-600 dark:text-gray-400">已选：{{ selectedTags.length }}</span>
        <button 
          @click="clearTags"
          class="text-xs text-red-600 dark:text-red-400 hover:underline"
        >
          清除全部
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, inject } from 'vue'
import TagBadge from './TagBadge.vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  maxPopular: {
    type: Number,
    default: 8
  }
})

const emit = defineEmits(['update:modelValue'])

const allTags = inject('allTags')
const selectedTags = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const showAllTags = ref(false)
const popularTagCount = computed(() => Math.min(props.maxPopular, allTags.value.length))

// 获取常用标签（前N个）
const popularTags = computed(() => {
  return allTags.value.slice(0, popularTagCount.value)
})

// 获取其余标签
const additionalTags = computed(() => {
  return allTags.value.slice(popularTagCount.value)
})

// 切换标签选择状态
function toggleTag(tagId) {
  if (selectedTags.value.includes(tagId)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tagId)
  } else {
    selectedTags.value = [...selectedTags.value, tagId]
  }
}

// 清除所有已选标签
function clearTags() {
  selectedTags.value = []
}
</script>

<style scoped>
.tag-filter-btn {
  transition: all 0.2s;
}

.tag-filter-btn:hover {
  transform: translateY(-1px);
}

.tag-selected {
  outline: 2px solid rgb(59, 130, 246);
  outline-offset: 1px;
}
</style> 