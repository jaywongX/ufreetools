<template>
  <div>
    <!-- 落地页部分 -->
    <section class="landing-section mb-16">
      <div class="w-full mx-auto px-4 py-2 md:py-5">
        <div class="flex flex-col md:flex-row items-center">
          <!-- 左侧文本内容 -->
          <div class="w-full mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              {{ $t('home.title') }}
            </h1>
            <p class="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              {{ $t('home.description') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="scrollToTools"
                class="btn-primary px-8 py-4 text-lg rounded-lg font-medium text-white hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center">
                {{ $t('home.startUsing') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <!-- 在"快速开始"部分下方添加 -->
            <div class="mt-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ $t('home.browseByCategory') }}</div>
              <div class="flex flex-wrap gap-3">
                <button v-for="(section, index) in toolSections" :key="index" @click="scrollToSection(section.id)"
                  class="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :class="`bg-${section.color}`"></span>
                  {{ section.title }}
                </button>
              </div>
              <!-- 浏览器插件模块 -->
              <div class="mt-6">
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ $t('common.browserExtensionsDesc') }}
                </div>
                <div class="flex flex-wrap gap-4">
                  <!-- Chrome -->
                  <a href="https://chromewebstore.google.com/detail/ufreetools/helippppkokcmlcngkegfmdmodlihjid"
                    target="_blank" rel="noopener" class="browser-ext-btn">
                    <img src="/chrome-96x96.webp" sizes="32x32" alt="Chrome Browser Plugin" class="browser-ext-icon" />
                    <span>{{ $t('common.addToChrome') }}</span>
                  </a>
                  <!-- Firefox -->
                  <a href="https://addons.mozilla.org/firefox/addon/ufreetools/" target="_blank" rel="noopener"
                    class="browser-ext-btn">
                    <img src="/Firefox_logo,_2019.webp"  sizes="32x32"alt="Firefox Browser Plugin" class="browser-ext-icon" />
                    <span>{{ $t('common.addToFireFox') }}</span>
                  </a>
                  <!-- Edge -->
                  <a href="https://microsoftedge.microsoft.com/addons/detail/ufreetools/bnacfmkhnhbpgkjkgkndoiakkpceigfb"
                    target="_blank" rel="noopener" class="browser-ext-btn">
                    <img src="/Microsoft_Edge_logo_(2019).webp"  sizes="32x32"alt="Edge Browser Plugin" class="browser-ext-icon" />
                    <span>{{ $t('common.addToEdge') }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧插图 -->
          <div class="w-full md:w-1/2 mt-8 md:mt-0">
            <img src="/landing-illustration.webp" alt="Landing Page Illustration" class="w-full h-auto" />
          </div>

        </div>
      </div>

      <FeaturedIn />

      <!-- 工具总数展示 -->
      <!-- <div class="w-full mx-auto px-4 mb-12">
        <div
          class="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl shadow-lg overflow-hidden">
          <div class="flex flex-col md:flex-row items-center justify-center p-8 text-white">
            <div class="stats-card text-center px-6 py-4 animate-pulse-slow">
              <div class="text-4xl md:text-5xl font-bold mb-2 counter animate-count">{{ toolsArray.length }}</div>
              <div class="text-lg md:text-xl font-medium">{{ $t('home.totalTools') }}</div>
              <div class="text-sm mt-1 opacity-90">{{ $t('home.totalToolsDesc') }}</div>
            </div>
            <div class="hidden md:block h-16 w-px bg-white/30 mx-8"></div>
            <div class="stats-card text-center px-6 py-4 animate-pulse-slow" style="animation-delay: 0.2s">
              <div class="text-4xl md:text-5xl font-bold mb-2 counter animate-count">{{ Object.keys(categories).length
              }}</div>
              <div class="text-lg md:text-xl font-medium">{{ $t('home.categories') }}</div>
              <div class="text-sm mt-1 opacity-90">{{ $t('home.categoriesDesc') }}</div>
            </div>
            <div class="hidden md:block h-16 w-px bg-white/30 mx-8"></div>
            <div class="stats-card text-center px-6 py-4 animate-pulse-slow" style="animation-delay: 0.4s">
              <div class="text-4xl md:text-5xl font-bold mb-2 counter">100%</div>
              <div class="text-lg md:text-xl font-medium">{{ $t('home.freeTools') }}</div>
              <div class="text-sm mt-1 opacity-90">{{ $t('home.freeToolsDesc') }}</div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- 特色功能展示 -->
      <div id="features-section">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in-up"
            style="animation-delay: 0.1s">
            <div class="icon-wrapper bg-blue-100 dark:bg-blue-900 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{{ $t('about.efficient') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('about.efficientDescription') }}</p>
          </div>

          <div
            class="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in-up"
            style="animation-delay: 0.2s">
            <div class="icon-wrapper bg-green-100 dark:bg-green-900 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{{ $t('about.security') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('about.securityDescription') }}</p>
          </div>

          <div
            class="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in-up"
            style="animation-delay: 0.4s">
            <div class="icon-wrapper bg-amber-100 dark:bg-amber-900 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600 dark:text-amber-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{{ $t('about.onlineOnly') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('about.onlineDescription') }}</p>
          </div>

          <div
            class="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in-up"
            style="animation-delay: 0.5s">
            <div class="icon-wrapper bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{{ $t('about.privacy') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('about.privacyDescription') }}</p>
          </div>

          <!-- 新增特色功能 - 多语言支持 -->
          <div
            class="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in-up"
            style="animation-delay: 0.6s">
            <div class="icon-wrapper bg-cyan-100 dark:bg-cyan-900 p-3 rounded-full inline-block mb-4">
              <!-- 地球/语言 SVG 图标 -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                <path d="M3.68 13.7a8 8 0 0 0 10.28 10.26 2.37 2.37 0 0 0-2.91-2.91A8 8 0 0 1 3.68 13.7z"></path>
                <path
                  d="M11.84 15.86a2.36 2.36 0 0 0 2.36 2.36 2.36 2.36 0 0 0 2.36-2.36 2.36 2.36 0 0 0-2.36-2.36 2.36 2.36 0 0 0-2.36 2.36z">
                </path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{{ $t('about.multilingual') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('about.multilingualDescription') }}</p>
          </div>

          <div
            class="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in-up"
            style="animation-delay: 0.3s">
            <div class="icon-wrapper bg-purple-100 dark:bg-purple-900 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{{ $t('about.updates') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('about.updatesDescription') }}</p>
          </div>

        </div>
      </div>
    </section>

    <div id="tools-section">
      <!-- 收藏工具部分 -->
      <section v-if="selectedTags.length === 0 && favoritedTools.length > 0" class="mb-10" id="favoriteTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('common.home.favoritedToolsTitle') }}</h2>
          <router-link :to="localizedRoute('/favorites')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in favoritedTools.slice(0, 3)" :key="tool.id" :tool="tool"
            @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 最近使用部分 -->
      <section v-if="selectedTags.length === 0 && recentTools.length > 0" class="mb-10" id="recentTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('home.recentToolsTitle') }}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in recentTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 热门工具部分 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="popularTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('home.popularToolsTitle') }}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in popularTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 最新添加部分 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="newTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('home.newToolsTitle') }}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in newTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 各个分类工具 -->
      <!-- 开发工具 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="devTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.dev.title') }}</h2>
          <router-link :to="localizedRoute('/category/dev')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in devTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 设计工具 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="designTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.design.title') }}</h2>
          <router-link :to="localizedRoute('/category/design')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in designTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 转换工具 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="convertTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.convert.title') }}</h2>
          <router-link :to="localizedRoute('/category/convert')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in convertTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 文本编辑 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="textTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.text.title') }}</h2>
          <router-link :to="localizedRoute('/category/text')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in textTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 图像处理 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="imageTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.image.title') }}</h2>
          <router-link :to="localizedRoute('/category/image')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in imageTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 网络工具 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="networkTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.network.title') }}</h2>
          <router-link :to="localizedRoute('/category/network')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in networkTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 密码安全 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="cryptoTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.crypto.title') }}</h2>
          <router-link :to="localizedRoute('/category/crypto')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in cryptoTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 实用工具 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="utilityTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.utility.title') }}</h2>
          <router-link :to="localizedRoute('/category/utility')"
            class="text-primary dark:text-primary-light hover:underline text-sm">
            {{ $t('common.home.viewAllFavorites') }}
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in utilityTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>

      <!-- 测绘工具 -->
      <section v-if="selectedTags.length === 0" class="mb-10" id="samTools">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ $t('categories.surveying_and_mapping.title') }}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard v-for="tool in SAMTools" :key="tool.id" :tool="tool" @tag-click="addTagToFilter" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted, watch, onUpdated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'
import FeaturedIn from '../components/ui/FeaturedIn.vue'
import { getHistory } from '../services/historyService'
import { useMetaInfo } from '../mixins/metaInfoMixin'
import { useI18n } from 'vue-i18n'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'
import { getFavorites } from '../services/favoritesService'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

// 搜索功能
const searchQuery = ref('')

function handleSearch() {
  if (searchQuery.value.trim()) {
    router.push(localizedRoute(`/search?q=${encodeURIComponent(searchQuery.value.trim())}`))
  }
}

// 滚动到工具部分
function scrollToTools() {
  document.getElementById('tools-section').scrollIntoView({
    behavior: 'smooth'
  })
}

// 注入全局数据
const allTools = inject('allTools')
const categories = inject('categories', [])
const allTags = inject('allTags', [])
const toolsByTag = inject('toolsByTag', {})

// 已选标签
const selectedTags = ref([])

// 最近使用的工具
const recentTools = ref([])

// 使用元信息钩子
const { updateMetaInfo } = useMetaInfo('home.title', 'home.description')

// 控制标签显示状态
const showAllTags = ref(false)

// 计算要显示的标签
const displayedTags = computed(() => {
  if (!Array.isArray(allTags.value)) return []
  return showAllTags.value ? allTags.value : allTags.value.slice(0, 10)
})

// 切换标签显示
function toggleTagsDisplay() {
  showAllTags.value = !showAllTags.value
}

// 从URL获取标签筛选参数
function getTagsFromUrl() {
  const tagParam = route.query.tags
  if (!tagParam) return []
  // 只取第一个标签
  return [tagParam]
}

// 更新URL以反映当前筛选的标签
function updateUrlWithTags() {
  if (selectedTags.value.length === 0) {
    // 如果没有选择标签，则移除URL参数
    if (route.query.tags) {
      router.replace({
        query: { ...route.query, tags: undefined }
      })
    }
    return
  }

  // 只使用第一个标签更新URL
  router.replace({
    query: { ...route.query, tags: selectedTags.value[0] }
  })
}

// 根据所选标签筛选工具
const filteredTools = computed(() => {
  if (selectedTags.value.length === 0) return []
  if (!Array.isArray(allTools)) return []

  // 只使用第一个标签进行筛选
  const selectedTag = selectedTags.value[0]
  return allTools.value.filter(tool => tool.tags.includes(selectedTag))
})

// 添加清除选中标签的方法
function clearSelectedTags() {
  selectedTags.value = []
  updateUrlWithTags()
}

// 添加标签到筛选器
function addTagToFilter(tagId) {
  // 如果点击的是当前选中的标签，则清除选择
  if (selectedTags.value[0] === tagId) {
    selectedTags.value = []
  } else {
    // 否则替换为新标签
    selectedTags.value = [tagId]
  }
  updateUrlWithTags()
}

// 监听URL变化，更新选中的标签
watch(() => route.query.tags, () => {
  selectedTags.value = getTagsFromUrl()
}, { immediate: true })

// 监听选中标签的变化，更新URL
watch(selectedTags, () => {
  updateUrlWithTags()
})

// 确保 allTools 是数组
const toolsArray = computed(() => {
  return Array.isArray(allTools.value) ? allTools.value : []
})

const popularTools = computed(() => {
  if (!toolsArray.value.length) return []

  // Define IDs of tools we consider "popular"
  const popularToolIds = [
    'json-formatter',
    'password-generator',
    'qr-code-generator',
    'code-obfuscator',
    'name-generator',
    'uuid-generator',
    'base64-encoder-decoder',
    'image-cropper',
    'hex-and-calculator',
  ]

  // Filter tools by ID to get the popular ones
  return toolsArray.value.filter(tool => popularToolIds.includes(tool.id))
})

const newTools = computed(() => {
  if (!toolsArray.value.length) return []
  return [...toolsArray.value].reverse().slice(0, 6)
})

// 收藏的工具
const favoritedTools = ref([])

// 组件挂载时，同步URL和选中标签状态，加载最近使用的工具
onMounted(() => {
  selectedTags.value = getTagsFromUrl()
  recentTools.value = getHistory()
  updateMetaInfo()
  favoritedTools.value = getFavorites().slice(0, 3)
})

onUpdated(() => {
  updateMetaInfo()
})

// 各分类工具
const devTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'dev').slice(0, 6);
});

const designTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'design').slice(0, 6);
});

const convertTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'convert').slice(0, 6);
});

const textTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'text').slice(0, 6);
});

const imageTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'image').slice(0, 6);
});

const networkTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'network').slice(0, 6);
});

const cryptoTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'crypto').slice(0, 6);
});

const utilityTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'utility').slice(0, 6);
});

const SAMTools = computed(() => {
  return toolsArray.value.filter(tool => tool.categoryId === 'surveying_and_mapping').slice(0, 6);
});

// 快速开始工具列表
const quickStartTools = computed(() => {
  return [
    {
      id: 'json-formatter',
      name: t('tools.json-formatter.name'),
      dotColor: 'blue-500'
    },
    {
      id: 'password-generator',
      name: t('tools.password-generator.name'),
      dotColor: 'green-500'
    },
    {
      id: 'qr-code-generator',
      name: t('tools.qr-code-generator.name'),
      dotColor: 'purple-500'
    },
    {
      id: 'image-compressor',
      name: t('tools.image-compressor.name'),
      dotColor: 'red-500'
    },
    {
      id: 'base64-encoder-decoder',
      name: t('tools.base64-encoder-decoder.name'),
      dotColor: 'yellow-500'
    }
  ];
});

// 添加工具分类导航数据 - 完整版本
const toolSections = computed(() => [
  // { id: 'favoriteTools', title: t('common.home.favoritedToolsTitle'), color: 'red-500' },
  { id: 'recentTools', title: t('home.recentToolsTitle'), color: 'blue-500' },
  { id: 'popularTools', title: t('home.popularToolsTitle'), color: 'green-500' },
  { id: 'newTools', title: t('home.newToolsTitle'), color: 'purple-500' },
  // { id: 'devTools', title: t('categories.dev.title'), color: 'red-500' },
  // { id: 'designTools', title: t('categories.design.title'), color: 'yellow-500' },
  // { id: 'textTools', title: t('categories.text.title'), color: 'indigo-500' },
  // { id: 'imageTools', title: t('categories.image.title'), color: 'pink-500' },
  // { id: 'convertTools', title: t('categories.convert.title'), color: 'amber-500' },
  // { id: 'networkTools', title: t('categories.network.title'), color: 'cyan-500' },
  // { id: 'cryptoTools', title: t('categories.crypto.title'), color: 'red-500' },
  // { id: 'utilityTools', title: t('categories.utility.title'), color: 'violet-500' },
  // { id: 'samTools', title: t('categories.surveying_and_mapping.title'), color: 'emerald-500' }
])

// 为每个部分添加ID标识，方便导航 - 完整版本
const sectionIds = {
  favoriteTools: 'favoriteTools',
  recentTools: 'recentTools',
  popularTools: 'popularTools',
  newTools: 'newTools',
  devTools: 'devTools',
  designTools: 'designTools',
  textTools: 'textTools',
  imageTools: 'imageTools',
  convertTools: 'convertTools',
  networkTools: 'networkTools',
  cryptoTools: 'cryptoTools',
  utilityTools: 'utilityTools',
  samTools: 'samTools'
}

// 滚动到指定区域
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 导航到URL
function navigateToUrl(path) {
  router.push(localizedRoute(path))
}
</script>

<style scoped>
.tag-cloud-item {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: white;
  transition: all 0.2s;
}

.dark .tag-cloud-item {
  background-color: rgb(31, 41, 55);
}

.tag-cloud-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 统一滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* 暗色模式滚动条 */
.dark ::-webkit-scrollbar-thumb {
  background: #4b5563;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* 落地页动画 */
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-in-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 按钮样式 */
.btn-primary {
  background-color: var(--color-primary, #1d4ed8);
  color: white;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.25);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark, #1e40af);
  box-shadow: 0 6px 10px rgba(59, 130, 246, 0.35);
  transform: translateY(-3px);
}

.btn-secondary {
  background-color: transparent;
  border: 2px solid var(--color-primary, #3b82f6);
  color: var(--color-primary, #3b82f6);
}

.dark .btn-secondary {
  border-color: var(--color-primary-light, #60a5fa);
  color: var(--color-primary-light, #60a5fa);
}

.landing-section {
  background-image: linear-gradient(to bottom, rgba(249, 250, 251, 0.8), rgba(249, 250, 251, 1));
}

.dark .landing-section {
  background-image: linear-gradient(to bottom, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 1));
}

/* 新增样式 */
.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

@keyframes pulse-slow {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.03);
    opacity: 0.95;
  }
}

.counter {
  display: inline-block;
  position: relative;
}

.counter::after {
  content: '+';
  position: absolute;
  font-size: 60%;
  top: 0;
  right: -15px;
  opacity: 0.8;
}

.stats-card {
  transition: all 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-5px);
}

@keyframes countUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-count {
  animation: countUp 1.5s ease-out forwards;
  display: inline-block;
}

/* 浮动动画 */
@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.card {
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.2) rotate(360deg);
}

#center-u {
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

/* 旋转动画 */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

/* 脉冲扩散动画 */
@keyframes ping-slow {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }

  70%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.featured-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border-radius: 9999px;
  padding: 0.25rem 1rem 0.25rem 0.25rem;
  transition: box-shadow 0.2s, transform 0.2s;
  text-decoration: none;
  color: #2563eb;
  font-weight: 500;
  font-size: 1rem;
}

.featured-badge:hover,
.featured-badge:focus {
  box-shadow: 0 4px 16px 0 rgba(59, 130, 246, 0.10);
  background: #f0f4ff;
  transform: translateY(-2px) scale(1.04);
  color: #1d4ed8;
}

.icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background: white;
  box-shadow: 0 2px 8px 0 rgba(59, 130, 246, 0.06);
  margin-right: 0.25rem;
}

.featured-label {
  white-space: nowrap;
  font-size: 1rem;
  color: #2563eb;
  transition: color 0.2s;
}

.dark .featured-badge {
  color: #60a5fa;
}

.dark .featured-badge:hover,
.dark .featured-badge:focus {
  background: #1e293b;
  color: #3b82f6;
}

.dark .icon-bg {
  background: #111827;
}

.dark .featured-label {
  color: #60a5fa;
}

.browser-ext-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 1.5px solid #e0e7ef;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-weight: 500;
  font-size: 1rem;
  color: #3b4261;
  box-shadow: 0 1px 4px 0 rgba(59, 130, 246, 0.04);
  text-decoration: none;
  transition: box-shadow 0.18s, border-color 0.18s, color 0.18s;
}

.browser-ext-btn:hover {
  border-color: #b6c3e0;
  box-shadow: 0 2px 8px 0 rgba(59, 130, 246, 0.10);
  color: #2563eb;
}

.browser-ext-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  object-fit: contain;
  box-shadow: 0 1px 2px rgba(59, 130, 246, 0.06);
}

.dark .browser-ext-btn {
  background: #232a3b;
  border-color: #2d3748;
  color: #bcd1f7;
}

.dark .browser-ext-btn:hover {
  border-color: #3b82f6;
  color: #60a5fa;
}

.dark .browser-ext-icon {
  background: #232a3b;
}
</style>