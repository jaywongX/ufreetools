<template>
  <router-view />
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';
import { isLanguageSupported } from '../../config/languages';
import { setLanguage } from '../../main';

const { locale } = useI18n();
const route = useRoute();

function updateLanguage() {
  const lang = route.params.lang;
  if (lang && isLanguageSupported(lang)) {
    document.documentElement.setAttribute('lang', lang);
    setLanguage(lang);
  }
}

onMounted(() => {
  updateLanguage();
});

watch(() => route.params.lang, () => {
  updateLanguage();
});
</script> 