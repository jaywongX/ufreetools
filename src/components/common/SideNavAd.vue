<template>
  <div class="ad-container my-8" ref="adContainer">
    <!-- side_nav_ad -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-8218613358195023"
         data-ad-slot="5681383691"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const adContainer = ref(null)
const route = useRoute()

// 初始化广告的函数
const initAd = () => {
  try {
    const adElement = adContainer.value.querySelector('.adsbygoogle')
    
    // 清除现有广告
    if (adElement) {
      adElement.innerHTML = ''
      adElement.removeAttribute('data-adsbygoogle-initialized')
      adElement.removeAttribute('data-adsbygoogle-status')
      
      // 保存广告配置
      const adClient = adElement.getAttribute('data-ad-client')
      const adSlot = adElement.getAttribute('data-ad-slot')
      const adFormat = adElement.getAttribute('data-ad-format')
      const responsive = adElement.getAttribute('data-full-width-responsive')
      
      // 重建广告元素
      adContainer.value.innerHTML = `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${adClient}"
             data-ad-slot="${adSlot}"
             data-ad-format="${adFormat}"
             data-full-width-responsive="${responsive}"></ins>
      `
      
      // 初始化新广告
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
        console.log('SideNav ad reinitialized')
      }, 50)
    }
  } catch (error) {
    console.error('AdSense error:', error)
  }
}

// 监听路由变化
watch(() => route.fullPath, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    setTimeout(() => {
      initAd()
    }, 300)
  }
})

onMounted(() => {
  initAd()
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