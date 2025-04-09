<template>
  <div class="donate-container">
    <button 
      class="donate-button flex items-center justify-center"
      @mouseenter="showMenu = true"
      @mouseleave="showMenu = false"
    >
      <span class="coffee-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M2 21h18v-2H2v2M20 8h-2V5h2v3m0-5H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z" />
        </svg>
      </span>
    </button>
    
    <div 
      class="donate-menu" 
      :class="{ 'show': showMenu }"
      @mouseenter="showMenu = true"
      @mouseleave="showMenu = false"
    >
      <a href="https://ko-fi.com/jaywong" target="_blank" rel="noopener" class="donate-option">
        <span>{{ $t('common.donateInternational') || '海外用户' }}</span>
        <span class="text-sm text-gray-500">(Ko-fi)</span>
      </a>
      
      <button @click="showWeChatQR = true" class="donate-option">
        <span>{{ $t('common.donateChina') || '中国大陆' }}</span>
        <span class="text-sm text-gray-500">({{ $t('common.wechatPay') || '微信赞赏码' }})</span>
      </button>
    </div>
    
    <!-- 微信支付二维码弹窗 -->
    <div v-if="showWeChatQR" class="modal-overlay" @click="showWeChatQR = false">
      <div class="qr-modal" @click.stop>
        <div class="qr-header">
          <h3>{{ $t('common.wechatDonation') || '微信赞赏码' }}</h3>
          <button @click="showWeChatQR = false" class="close-button">×</button>
        </div>
        <div class="qr-content">
          <!-- 替换为实际的微信赞赏码图片 -->
          <div class="qr-placeholder">
            <p>{{ $t('common.scanToSupport') || '扫描下面的二维码进行赞赏' }}</p>
            <div class="qr-code-wrapper">
              <!-- 这里可以替换为实际的微信赞赏码图片 -->
              <img src="/wechat-donate.jpg" alt="WeChat Donation QR Code" class="qr-image" />
            </div>
            <p class="text-sm text-gray-500 mt-2">{{ $t('common.thankYouForSupport') || '感谢您的支持！' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonateButton',
  data() {
    return {
      showMenu: false,
      showWeChatQR: false
    };
  }
};
</script>

<style scoped>
.donate-container {
  position: relative;
  display: inline-block;
}

.donate-button {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  color: #6f4e37;
  cursor: pointer;
  transition: all 0.2s ease;
}

.donate-button:hover {
  background-color: rgba(111, 78, 55, 0.1);
  color: #6f4e37;
  border: none;
}

.coffee-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.donate-menu {
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
}

.donate-menu.show {
  opacity: 1;
  visibility: visible;
}

.donate-option {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
  text-align: center;
}

.donate-option:hover {
  background-color: #f8f9fa;
}

.donate-option:first-child {
  border-bottom: 1px solid #eee;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.qr-modal {
  background-color: white;
  border-radius: 0.5rem;
  width: 400px;
  max-width: 90vw;
  overflow: hidden;
}

.qr-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.qr-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.qr-content {
  padding: 1.5rem;
  text-align: center;
}

.qr-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-code-wrapper {
  margin: 1rem 0;
  padding: 0;
  width: 100%;
}

.qr-image {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 640px) {
  .donate-text {
    display: none;
  }
  
  .donate-button {
    padding: 0.5rem;
  }
}
</style> 