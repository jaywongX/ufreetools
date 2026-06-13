<template>
  <div class="ad-container my-8" ref="adContainer">
    <div class="ad-flex-container">
      <!-- 移动端只显示1个广告，桌面端显示3个 -->
      <div class="ad-item" ref="adSlot1">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8218613358195023"
             data-ad-slot="9073833793"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
      
      <div class="ad-item desktop-only" ref="adSlot2">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8218613358195023"
             data-ad-slot="5556689791"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
      
      <div class="ad-item desktop-only" ref="adSlot3">
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
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const adContainer = ref(null)
const adSlot1 = ref(null)
const adSlot2 = ref(null)
const adSlot3 = ref(null)
const route = useRoute()

// 初始化广告的函数
const initAds = () => {
  try {
    const adElements = adContainer.value.querySelectorAll('.adsbygoogle');

    // 清除现有广告
    adElements.forEach(ad => {
      ad.innerHTML = '';
      ad.removeAttribute('data-adsbygoogle-initialized');
      ad.removeAttribute('data-adsbygoogle-status');
    });

    // 重新创建广告元素
    recreateAdSlot(adSlot1);
    recreateAdSlot(adSlot2);
    recreateAdSlot(adSlot3);

    // 给DOM更新一点时间
    setTimeout(() => {
      // 初始化新广告
      const newAdElements = adContainer.value.querySelectorAll('.adsbygoogle');
      newAdElements.forEach((ad, index) => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});

        // 监听广告加载完成，添加淡入效果
        const observer = new MutationObserver(() => {
          const status = ad.getAttribute('data-ad-status');
          const parentSlot = ad.closest('.ad-item');
          if (status === 'filled' && parentSlot) {
            parentSlot.classList.add('ad-loaded');
            observer.disconnect();
          } else if (status === 'unfilled' && parentSlot) {
            // 广告加载失败，保持透明
            observer.disconnect();
          }
        });

        observer.observe(ad, {
          attributes: true,
          attributeFilter: ['data-ad-status']
        });
      });

      console.log('Ads reinitialized on route change');
    }, 50);
  } catch (error) {
    console.error('AdSense error:', error);
  }
};

// 重新创建广告槽
const recreateAdSlot = (slotRef) => {
  if (!slotRef.value) return;
  
  const slot = slotRef.value;
  // 保存广告基本配置
  const adSlot = slot.querySelector('.adsbygoogle');
  const adClient = adSlot.getAttribute('data-ad-client');
  const adSlotId = adSlot.getAttribute('data-ad-slot');
  const adFormat = adSlot.getAttribute('data-ad-format');
  const responsive = adSlot.getAttribute('data-full-width-responsive');
  
  // 清空并重建广告元素
  slot.innerHTML = `
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="${adClient}"
         data-ad-slot="${adSlotId}"
         data-ad-format="${adFormat}"
         data-full-width-responsive="${responsive}"></ins>
  `;
};

// 监听路由变化
watch(() => route.fullPath, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    // 给广告API一点时间来清理之前的广告
    setTimeout(() => {
      initAds();
    }, 300);
  }
});

onMounted(() => {
  initAds();
})
</script>

<style scoped>
.ad-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  /* 为广告预留固定空间，防止CLS */
  min-height: 280px;
  /* 透明背景，只占位不显示 */
  background-color: transparent;
  border-radius: 8px;
  /* 使用 content-visibility 优化渲染 */
  content-visibility: auto;
  contain-intrinsic-size: auto 280px;
}

.ad-flex-container {
  display: flex;
  flex-wrap: wrap;
  /* gap: 20px; */
  justify-content: space-between;
  min-height: 280px;
}

.ad-item {
  flex: 1;
  min-width: 300px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 广告加载前透明 */
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

/* 广告加载完成后显示 */
.ad-item :deep(.adsbygoogle[data-ad-status="filled"]) {
  opacity: 1;
}

/* 或者使用 JavaScript 添加 class 后显示 */
.ad-item.ad-loaded {
  opacity: 1;
}

/* 平板设备：2个广告 */
@media (max-width: 1023px) and (min-width: 769px) {
  .ad-container {
    min-height: 180px;
  }

  .ad-flex-container {
    min-height: 180px;
  }

  .ad-item:nth-child(3) {
    display: none;
  }
}

/* 移动设备：1个广告 */
@media (max-width: 768px) {
  .ad-container {
    min-height: 100px;
  }

  .ad-flex-container {
    min-height: 100px;
  }

  .ad-item {
    flex: 100%;
  }

  .desktop-only {
    display: none;
  }
}
</style> 