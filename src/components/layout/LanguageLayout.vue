<template>
  <router-view />
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';
import { isLanguageSupported } from '../../config/languages';

const { locale } = useI18n();
const route = useRoute();

function updateLanguage() {
  const lang = route.params.lang;
  if (lang && isLanguageSupported(lang)) {
    locale.value = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('userLanguage', lang);
  }
}

onMounted(() => {
  updateLanguage();
});

watch(() => route.params.lang, () => {
  updateLanguage();
});
</script> 