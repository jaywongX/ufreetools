<template>
  <div class="relative">
    <!-- 分享按钮 -->
    <button 
      @click="toggleShareDropdown"
      class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
      :aria-label="$t('common.share')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
    </button>

    <!-- 分享下拉菜单 -->
    <div v-if="showShareDropdown" class="fixed inset-0 bg-black bg-opacity-20 z-[998]" @click="closeShareDropdown"></div>

    <transition name="fade">
      <div v-if="showShareDropdown" class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-[999]">
        <div class="p-4">
          <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">{{ $t('common.shareTo') }}</h3>
          
          <!-- 社交媒体分享按钮 -->
          <div class="grid grid-cols-2 gap-2">
            <!-- Facebook Share -->
            <button 
              @click="shareToFacebook()"
              class="flex items-center justify-center px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {{ $t('common.share') }}
            </button>

            <!-- Twitter Tweet -->
            <button 
              @click="shareToTwitter"
              class="flex items-center justify-center px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              {{ $t('common.tweet') }}
            </button>

            <!-- LinkedIn Share -->
            <button 
              @click="shareToLinkedIn"
              class="flex items-center justify-center px-3 py-2 bg-blue-800 hover:bg-blue-900 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {{ $t('common.share') }}
            </button>

            <!-- Reddit Share -->
            <button 
              @click="shareToReddit"
              class="flex items-center justify-center px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              {{ $t('common.share') }}
            </button>

            <!-- WhatsApp Share -->
            <button 
              @click="shareToWhatsApp"
              class="flex items-center justify-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              {{ $t('common.share') }}
            </button>

            <!-- Pinterest Save -->
            <button 
              @click="shareToPinterest"
              class="flex items-center justify-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
              {{ $t('common.save') }}
            </button>

            <!-- Telegram -->
            <button 
              @click="shareToTelegram"
              class="flex items-center justify-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {{ $t('common.telegram') }}
            </button>

            <!-- Line -->
            <button 
              @click="shareToLine"
              class="flex items-center justify-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              {{ $t('common.line') }}
            </button>

            <!-- QQ -->
            <button 
              @click="shareToQQ"
              class="flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 13.795 3.55 17.05c0 .975.324 1.624.324 1.624s.324.975 1.949.325c0 0 1.624 1.949 4.873 1.949 3.248 0 4.873-1.949 4.873-1.949 1.624.65 1.949-.325 1.949-.325s.324-.65.324-1.624c0-3.255-2.163-6.53-2.163-6.53V9.325C18.293 3.364 14.268 2 12.003 2z"/>
              </svg>
              {{ $t('common.qq') }}
            </button>

            <!-- 微博 -->
            <button 
              @click="shareToWeibo"
              class="flex items-center justify-center px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zm9.35-12.98c-.337.059-1.836-.346-2.922-.346-2.086 0-4.221 1.65-4.221 1.65s1.804.519 3.229 1.518c1.425 1 2.295 2.295 2.295 2.295s.519-1.804 1.518-3.229c1-1.425 2.295-2.295 2.295-2.295s-.346-1.836-.346-2.922c0-.337.059-.337.059-.337z"/>
              </svg>
              {{ $t('common.weibo') }}
            </button>
          </div>

          <!-- 复制链接 -->
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button 
              @click="copyLink"
              class="w-full flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {{ copySuccess ? $t('common.copied') : $t('common.copyLink') }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const showShareDropdown = ref(false)
const copySuccess = ref(false)

// 获取当前页面信息
const currentPageInfo = computed(() => {
  const url = window.location.href
  const title = document.title || t('common.defaultTitle')
  
  // 根据当前路由生成分享内容
  let description = t('common.defaultDescription')
  
  if (route.name === 'Tool' && route.params.id) {
    const toolId = route.params.id
    const toolName = toolId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    description = t('common.toolShareDescription', { toolName })
  } else if (route.name === 'category-page' && route.params.slug) {
    const categorySlug = route.params.slug
    const categoryName = categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    description = t('common.categoryShareDescription', { categoryName })
  } else if (route.name === 'home') {
    description = t('common.homeShareDescription')
  } else if (route.name === 'search') {
    const searchQuery = route.query.q
    if (searchQuery) {
      description = t('common.searchShareDescription', { searchQuery })
    }
  }
  
  return { url, title, description }
})

// 切换分享下拉菜单
function toggleShareDropdown() {
  showShareDropdown.value = !showShareDropdown.value
  
  if (showShareDropdown.value) {
    window.setTimeout(() => {
      window.addEventListener('click', handleClickOutside)
    }, 0)
  }
}

// 关闭分享下拉菜单
function closeShareDropdown() {
  showShareDropdown.value = false
  window.removeEventListener('click', handleClickOutside)
}

// 处理点击外部区域
function handleClickOutside(event) {
  const dropdown = event.target.closest('.social-share-dropdown')
  const button = event.target.closest('.social-share-button')
  
  if (!dropdown && !button) {
    closeShareDropdown()
  }
}

// Facebook 分享
function shareToFacebook(type) {
  const { url, title, description } = currentPageInfo.value
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// Twitter 分享
function shareToTwitter() {
  const { url, title, description } = currentPageInfo.value
  const text = `${title} - ${description}`
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=UFreeTools,${t('common.freeTools')}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// LinkedIn 分享
function shareToLinkedIn() {
  const { url, title, description } = currentPageInfo.value
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// Reddit 分享
function shareToReddit() {
  const { url, title } = currentPageInfo.value
  const shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// WhatsApp 分享
function shareToWhatsApp() {
  const { url, title, description } = currentPageInfo.value
  const text = `${title} - ${description} ${url}`
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// Pinterest 保存
function shareToPinterest() {
  const { url, title, description } = currentPageInfo.value
  const shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}&media=${encodeURIComponent('https://www.ufreetools.com/og-image.jpg')}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// Telegram 分享
function shareToTelegram() {
  const { url, title, description } = currentPageInfo.value
  const shareUrl = `https://t.me/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// Line 分享
function shareToLine() {
  const { url, title, description } = currentPageInfo.value
  const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(title)} ${encodeURIComponent(description)} ${encodeURIComponent(url)}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// QQ 分享
function shareToQQ() {
  const { url, title, description } = currentPageInfo.value
  const shareUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}&site=YOUR_SITE_NAME`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// Weibo 分享
function shareToWeibo() {
  const { url, title, description } = currentPageInfo.value
  const shareUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&pic=${encodeURIComponent('https://www.ufreetools.com/og-image.jpg')}&searchPic=false&ralateUid=&location=1-1-1&object_type=webpage&object_id=1&trace_id=1&object_source=1&object_action=share&object_display=0&luicode=10000011&lfid=100103type%3D1%26q%3D${encodeURIComponent(title)}`
  
  window.open(shareUrl, '_blank')
  closeShareDropdown()
}

// 复制链接
async function copyLink() {
  try {
    await navigator.clipboard.writeText(currentPageInfo.value.url)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = currentPageInfo.value.url
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  }
}

// 组件卸载时清理事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 640px) {
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
