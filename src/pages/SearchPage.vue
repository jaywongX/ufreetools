<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="mb-6 text-sm">
      <router-link :to="localizedRoute('/')" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        {{ $t('header.home') }}
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-700 dark:text-gray-300">{{ $t('search.title') }}</span>
    </div>
    
    <!-- 搜索结果 -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold mb-2">{{ $t('search.resultsFor') }}: "{{ searchQuery }}"</h1>
      
      <!-- 相关标签推荐 -->
      <div v-if="relatedTags.length > 0" class="mb-6">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ $t('search.relatedTags') }}:</p>
        <div class="flex flex-wrap gap-2">
          <router-link
            v-for="tag in relatedTags"
            :key="tag.id"
            :to="localizedRoute(`/tag/${tag.id}`)"
            class="tag-link"
          >
            <TagBadge :tag-id="tag.id" />
          </router-link>
        </div>
      </div>
      
      <!-- 搜索结果列表 -->
      <div v-if="searchResults.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in searchResults" 
          :key="tool.id"
          :tool="tool"
          @tag-click="navigateToTag"
        />
      </div>
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
        <p class="text-gray-600 dark:text-gray-400">{{ $t('search.noResults') }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">{{ $t('search.tryOtherKeywords') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'
import { useI18n } from 'vue-i18n'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

// 注入全局数据
const allTools = inject('allTools', [])
const allTags = inject('allTags', { value: [] })

// 从URL获取搜索查询
const searchQuery = computed(() => route.query.q || '')

// 搜索结果
const searchResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase()
  
  return allTools.value.filter(tool => {
    return tool.name.toLowerCase().includes(query) ||
           tool.description.toLowerCase().includes(query) ||
           tool.tags.some(tag => tag.toLowerCase().includes(query))
  })
})

// 匹配的标签
const matchedTags = computed(() => {
  if (!searchQuery.value || !allTags?.value) return []
  const query = searchQuery.value.toLowerCase()
  
  return allTags.value.filter(tag => 
    tag.name.toLowerCase().includes(query) || 
    tag.id.toLowerCase().includes(query)
  )
})

// 相关标签推荐
const relatedTags = computed(() => {
  if (!searchQuery.value || !allTags?.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  
  // 找出与查询相关的标签
  return allTags.value
    .filter(tag => 
      tag.name.toLowerCase().includes(query) || 
      tag.id.toLowerCase().includes(query)
    )
    .slice(0, 5) // 最多显示5个相关标签
})

// 导航到标签页面
function navigateToTag(tagId) {
  router.push(localizedRoute(`/tag/${tagId}`))
}

// 监听路由变化更新标题
watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    document.title = `${t('search.pageTitle', { query: newQuery })} - ${t('site.name')}`
  }
})

// 设置页面标题
onMounted(() => {
  if (searchQuery.value) {
    document.title = `${t('search.pageTitle', { query: searchQuery.value })} - ${t('site.name')}`
  }
})
</script>

<style scoped>
.tag-link {
  transition: all 0.2s;
}

.tag-link:hover {
  transform: translateY(-1px);
}
</style> 