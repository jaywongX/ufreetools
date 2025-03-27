<template>
  <!-- 这是一个仅用于SEO的组件，不渲染任何内容 -->
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 计算当前页面的路径（不包含语言部分）
const currentPath = computed(() => {
  const pathWithoutLang = route.path.replace(/^\/[^\/]+/, '');
  return pathWithoutLang || '/';  // 如果是首页，返回/
});

// 支持的语言列表
const supportedLanguages = ['zh', 'en'];

onMounted(() => {
  // 为每种语言添加alternate链接
  supportedLanguages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = `${window.location.origin}/${lang}${currentPath.value}`;
    document.head.appendChild(link);
  });
  
  // 添加x-default链接
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = `${window.location.origin}/zh${currentPath.value}`;  // 默认使用中文
  document.head.appendChild(defaultLink);
});
</script> 