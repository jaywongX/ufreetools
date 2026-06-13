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
import { onMounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const adContainer = ref(null)
const route = useRoute()

// 检查容器是否可见且有尺寸
const isContainerReady = () => {
  if (!adContainer.value) return false;
  
  const rect = adContainer.value.getBoundingClientRect();
  const isVisible = rect.width > 0 && rect.height > 0;
  const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
  
  return isVisible && isInViewport;
};

// 等待容器准备就绪
const waitForContainer = () => {
  return new Promise((resolve) => {
    const check = () => {
      if (isContainerReady()) {
        resolve();
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
};

// 初始化广告的函数
const initAd = async () => {
  try {
    // 等待容器准备就绪
    await waitForContainer();
    
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
      
      // 等待DOM更新
      await nextTick();
      
      // 再次检查容器状态
      if (!isContainerReady()) {
        console.warn('Ad container not ready, skipping ad initialization');
        return;
      }
      
      // 初始化新广告
      setTimeout(() => {
        try {
          const newAdElement = adContainer.value.querySelector('.adsbygoogle');
          (window.adsbygoogle = window.adsbygoogle || []).push({});

          // 监听广告加载完成，添加淡入效果
          const observer = new MutationObserver(() => {
            const status = newAdElement.getAttribute('data-ad-status');
            if (status === 'filled') {
              adContainer.value.classList.add('ad-loaded');
              observer.disconnect();
            } else if (status === 'unfilled') {
              // 广告加载失败，保持透明
              observer.disconnect();
            }
          });

          observer.observe(newAdElement, {
            attributes: true,
            attributeFilter: ['data-ad-status']
          });
        } catch (error) {
          console.warn('Failed to push ad:', error);
        }
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
  // 延迟初始化，确保页面完全加载
  setTimeout(() => {
    initAd()
  }, 1000)
})
</script>

<style scoped>
.ad-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  /* 为侧边栏广告预留固定空间，防止CLS */
  min-height: 250px;
  /* 透明背景，只占位不显示 */
  background-color: transparent;
  border-radius: 8px;
  /* 使用 content-visibility 优化渲染 */
  content-visibility: auto;
  contain-intrinsic-size: auto 250px;
  /* 广告加载前透明 */
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

/* 广告加载完成后显示 */
.ad-container.ad-loaded {
  opacity: 1;
}
</style> 