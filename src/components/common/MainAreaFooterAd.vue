<template>
  <div class="ad-container my-8" ref="adContainer">
    <div class="ad-flex-container">
      <!-- 广告单元1 -->
      <div class="ad-item">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8218613358195023"
             data-ad-slot="9073833793"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
      
      <!-- 广告单元2 -->
      <div class="ad-item">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8218613358195023"
             data-ad-slot="5556689791"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
      
      <!-- 广告单元3 -->
      <div class="ad-item">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8218613358195023"
             data-ad-slot="8510156191"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const adContainer = ref(null)

onMounted(() => {
  try {
    // Only select ad elements within this component
    const adElements = adContainer.value.querySelectorAll('.adsbygoogle');
    
    adElements.forEach(ad => {
      // Only initialize if not already initialized
      if (!ad.getAttribute('data-adsbygoogle-initialized')) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        ad.setAttribute('data-adsbygoogle-initialized', 'true');
      }
    });
  } catch (error) {
    console.error('AdSense error:', error);
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

.ad-flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.ad-item {
  flex: 1;
  min-width: 300px;
  min-height: 90px;
}

@media (max-width: 768px) {
  .ad-item {
    flex: 100%;
  }
}
</style> 