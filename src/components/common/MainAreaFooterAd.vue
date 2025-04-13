<template>
  <div class="ad-container my-8">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-8218613358195023"
         data-ad-slot="9073833793"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (error) {
    console.error('AdSense error:', error)
  }
})
</script>

<style scoped>
.ad-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  min-height: 90px;
  background-color: transparent;
}
</style> 