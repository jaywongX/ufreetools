<template>
  <div>
    <SeoHead 
    :title="$t('common.favorites.title')"
    :description="$t('common.favorites.description')"
    />
    <h1 class="text-3xl font-bold mb-6">{{ $t('common.favorites.title') }}</h1>
    
    <!-- 空状态 -->
    <div v-if="favorites.length === 0" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center mb-6">
      <p class="text-gray-600 dark:text-gray-400">{{ $t('common.favorites.empty') }}</p>
      <router-link :to="localizedRoute('/')" class="mt-4 inline-block text-primary dark:text-primary-light hover:underline">
        {{ $t('common.favorites.browseTools') }}
      </router-link>
    </div>
    
    <!-- 收藏的工具列表 -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="tool in favorites" :key="tool.id" 
          class="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <!-- 工具信息 -->
        <div class="flex items-start">
          <router-link :to="localizedRoute(`/tool/${tool.id}`)" class="flex-1">
            <h3 class="text-lg font-medium mb-2">{{ tool.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{{ tool.description }}</p>
          </router-link>
          
          <!-- 移除收藏按钮 -->
          <button 
            @click="removeTool(tool.id)" 
            class="ml-2 p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
            :title="$t('common.favorites.remove')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        
        <!-- 标签显示 -->
        <div class="flex flex-wrap gap-1 mt-3">
          <span 
            v-for="tagId in tool.tags.slice(0, 3)" 
            :key="tagId"
            class="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            <TagBadge v-if="tagId" :tag-id="tagId" />
          </span>
          <span v-if="tool.tags.length > 3" class="text-xs text-gray-500 dark:text-gray-400 ml-1 self-center">
            +{{ tool.tags.length - 3 }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute';
import { getFavorites, removeFromFavorites } from '../services/favoritesService';
import TagBadge from '../components/ui/TagBadge.vue';
import SeoHead from '../components/seo/SeoHead.vue'
const { t } = useI18n();
const { localizedRoute } = useInternationalizedRoute();
const favorites = ref([]);

const loadFavorites = () => {
    favorites.value = getFavorites();
};

const removeTool = (toolId) => {
  removeFromFavorites(toolId);
  loadFavorites();
};

onMounted(() => {
  loadFavorites()
});
</script> 