<template>
  <!-- SEO only component, no content -->
</template>

<script setup>
import { computed, onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
});

const route = useRoute();
const { t, locale } = useI18n();

// 跟踪是否已经初始化，避免重复操作
const initialized = ref(false);

// 计算最终的标题和描述
const pageTitle = computed(() => 
  props.title || (route.meta?.title ? t(route.meta.title) : t('home.title'))
);

const pageDescription = computed(() => 
  props.description || (route.meta?.description ? t(route.meta.description) : t('home.description'))
);

// 网站URL和默认图片
const siteUrl = 'https://www.ufreetools.com';
const defaultImage = '/images/og-image.jpg';
const pageImage = computed(() => props.image || `${siteUrl}${defaultImage}`);

// 当前完整URL
const currentUrl = computed(() => {
  const pathWithoutLang = route.path.replace(/^\/[^\/]+/, '');
  return `${siteUrl}/${locale.value}${pathWithoutLang}`;
});

// 计算当前页面的路径（不包含语言部分）
const currentPath = computed(() => {
  const pathWithoutLang = route.path.replace(/^\/[^\/]+/, '');
  return pathWithoutLang || '/';  // 如果是首页，返回/
});

// 支持的语言列表
const supportedLanguages = ['zh', 'en'];

// 更新文档元数据
function updateMetaTags() {
  // 页面标题
  document.title = `${pageTitle.value}`;
  
  // 基本元标签
  updateMetaTag('description', pageDescription.value);
  
  // Open Graph 标签
  updateMetaTag('og:title', pageTitle.value);
  updateMetaTag('og:description', pageDescription.value);
  updateMetaTag('og:url', currentUrl.value);
  updateMetaTag('og:image', pageImage.value);
  updateMetaTag('og:type', 'website');
  updateMetaTag('og:locale', locale.value);
  
  // Twitter 卡片
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', pageTitle.value);
  updateMetaTag('twitter:description', pageDescription.value);
  updateMetaTag('twitter:image', pageImage.value);
  
  // 更新语言替代链接
  updateLanguageAlternates();
}

// 更新语言替代链接
function updateLanguageAlternates() {
  // 移除现有的语言替代链接
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
  
  // 为每种语言添加alternate链接
  supportedLanguages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = `${siteUrl}/${lang}${currentPath.value}`;
    document.head.appendChild(link);
  });
  
  // 添加x-default链接
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = `${siteUrl}/en${currentPath.value}`;
  document.head.appendChild(defaultLink);
  
  // 添加规范链接
  updateMetaTag('canonical', currentUrl.value, 'link');
}

// 辅助函数：更新或创建元标签
function updateMetaTag(name, content, tagType = 'meta') {
  // 确定属性名称
  const propertyName = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
  
  // 查找现有元素
  let selector = tagType === 'meta' ? `meta[${propertyName}="${name}"]` : `link[rel="${name}"]`;
  let element = document.querySelector(selector);
  
  if (element) {
    // 更新现有元素
    if (tagType === 'meta') {
      element.setAttribute('content', content);
    } else if (tagType === 'link') {
      element.setAttribute('href', content);
    }
  } else {
    // 创建新元素
    element = document.createElement(tagType);
    
    if (tagType === 'meta') {
      element.setAttribute(propertyName, name);
      element.setAttribute('content', content);
    } else if (tagType === 'link') {
      element.setAttribute('rel', name);
      element.setAttribute('href', content);
    }
    
    document.head.appendChild(element);
  }
}

// 初始化函数
function initialize() {
  if (initialized.value) return;
  initialized.value = true;
  updateMetaTags();
}

// 监听路径和语言变化，更新元标签
watch([() => route.path, locale], updateMetaTags, { immediate: true });

onMounted(initialize);
</script>