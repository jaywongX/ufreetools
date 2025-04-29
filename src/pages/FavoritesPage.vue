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
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
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

    <!-- 收藏夹功能介绍文章 -->
    <section class="mt-8 mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <article class="prose dark:prose-invert max-w-none">
        <h2 class="text-xl font-bold mb-4">{{ $t('common.favorites.article.title') }}</h2>
        
        <!-- 功能介绍及应用场景 -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">{{ $t('common.favorites.article.intro.title') }}</h3>
          <p v-html="$t('common.favorites.article.intro.p1')"></p>
          <p class="my-3" v-html="$t('common.favorites.article.intro.p2')"></p>
          <p v-html="$t('common.favorites.article.intro.p3')"></p>
        </div>
        
        <!-- 操作指南 -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">{{ $t('common.favorites.article.tutorial.title') }}</h3>
          <p class="mb-4">{{ $t('common.favorites.article.tutorial.intro') }}</p>
          
          <div class="ml-4 mb-3">
            <h4 class="font-medium mb-1">{{ $t('common.favorites.article.tutorial.step1.title') }}</h4>
            <p>{{ $t('common.favorites.article.tutorial.step1.description') }}</p>
          </div>
          
          <div class="ml-4 mb-3">
            <h4 class="font-medium mb-1">{{ $t('common.favorites.article.tutorial.step2.title') }}</h4>
            <p>{{ $t('common.favorites.article.tutorial.step2.description') }}</p>
          </div>
          
          <div class="ml-4 mb-3">
            <h4 class="font-medium mb-1">{{ $t('common.favorites.article.tutorial.step3.title') }}</h4>
            <p>{{ $t('common.favorites.article.tutorial.step3.description') }}</p>
          </div>
          
          <div class="ml-4 mb-3">
            <h4 class="font-medium mb-1">{{ $t('common.favorites.article.tutorial.step4.title') }}</h4>
            <p>{{ $t('common.favorites.article.tutorial.step4.description') }}</p>
          </div>
        </div>
        
        <!-- 常见问题解答 -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">{{ $t('common.favorites.article.faq.title') }}</h3>
          
          <div itemscope itemtype="https://schema.org/FAQPage">
            <div class="border-b border-gray-200 dark:border-gray-700 py-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name" class="font-medium mb-2">{{ $t('common.favorites.article.faq.q1') }}</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div itemprop="text" v-html="$t('common.favorites.article.faq.a1')"></div>
              </div>
            </div>
            
            <div class="border-b border-gray-200 dark:border-gray-700 py-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name" class="font-medium mb-2">{{ $t('common.favorites.article.faq.q2') }}</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div itemprop="text" v-html="$t('common.favorites.article.faq.a2')"></div>
              </div>
            </div>
            
            <div class="border-b border-gray-200 dark:border-gray-700 py-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name" class="font-medium mb-2">{{ $t('common.favorites.article.faq.q3') }}</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div itemprop="text" v-html="$t('common.favorites.article.faq.a3')"></div>
              </div>
            </div>
            
            <div class="border-b border-gray-200 dark:border-gray-700 py-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name" class="font-medium mb-2">{{ $t('common.favorites.article.faq.q4') }}</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div itemprop="text" v-html="$t('common.favorites.article.faq.a4')"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 相关工具推荐 -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">{{ $t('common.favorites.article.relatedTools.title') }}</h3>
          <p class="mb-4">{{ $t('common.favorites.article.relatedTools.description') }}</p>
          
          <ul class="ml-6 list-disc">
            <li class="mb-2">
              <a :href="$t('common.favorites.article.relatedTools.tool1.url')" target="_blank" class="text-primary dark:text-primary-light hover:underline">
                {{ $t('common.favorites.article.relatedTools.tool1.name') }}
              </a>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('common.favorites.article.relatedTools.tool1.description') }}</p>
            </li>
            <li class="mb-2">
              <a :href="$t('common.favorites.article.relatedTools.tool2.url')" target="_blank" class="text-primary dark:text-primary-light hover:underline">
                {{ $t('common.favorites.article.relatedTools.tool2.name') }}
              </a>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('common.favorites.article.relatedTools.tool2.description') }}</p>
            </li>
            <li class="mb-2">
              <a :href="$t('common.favorites.article.relatedTools.tool3.url')" target="_blank" class="text-primary dark:text-primary-light hover:underline">
                {{ $t('common.favorites.article.relatedTools.tool3.name') }}
              </a>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('common.favorites.article.relatedTools.tool3.description') }}</p>
            </li>
          </ul>
        </div>
        
        <!-- 外部资源链接 -->
        <div>
          <h3 class="text-lg font-semibold mb-3">{{ $t('common.favorites.article.resources.title') }}</h3>
          
          <ul class="ml-6 list-disc">
            <li class="mb-2">
              <a :href="$t('common.favorites.article.resources.resource1.url')" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-primary-light hover:underline">
                {{ $t('common.favorites.article.resources.resource1.name') }}
              </a>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('common.favorites.article.resources.resource1.description') }}</p>
            </li>
            <li class="mb-2">
              <a :href="$t('common.favorites.article.resources.resource2.url')" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-primary-light hover:underline">
                {{ $t('common.favorites.article.resources.resource2.name') }}
              </a>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('common.favorites.article.resources.resource2.description') }}</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
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