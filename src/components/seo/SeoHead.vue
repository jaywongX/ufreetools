<template>
  <!-- SEO only component, no content -->
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
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

// 计算最终的标题和描述
const pageTitle = computed(() => 
  props.title || (route.meta?.title ? t(route.meta.title) : t('home.title'))
);

const pageDescription = computed(() => 
  props.description || (route.meta?.description ? t(route.meta.description) : t('home.description'))
);

// 网站URL和默认图片
const siteUrl = 'https://yourdomain.com';
const defaultImage = '/images/og-image.jpg';
const pageImage = computed(() => props.image || `${siteUrl}${defaultImage}`);

// 当前完整URL
const currentUrl = computed(() => {
  const pathWithoutLang = route.path.replace(/^\/[^\/]+/, '');
  return `${siteUrl}/${locale.value}${pathWithoutLang}`;
});

// 更新文档元数据
function updateMetaTags() {
  // 页面标题
  document.title = pageTitle.value;
  
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
}

// 辅助函数：更新或创建元标签
function updateMetaTag(name, content) {
  const propertyName = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
  
  let element = document.querySelector(`meta[${propertyName}="${name}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(propertyName, name);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

// 监听路径和语言变化，更新元标签
watch([() => route.path, locale], updateMetaTags, { immediate: true });

onMounted(updateMetaTags);
</script> 