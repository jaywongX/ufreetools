<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
    <div class="py-6 px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- 版权信息 -->
        <div class="flex-grow text-center text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} ufreetools. {{ $t('footer.copyright') }}
        </div>
        
        <!-- 页脚导航 -->
        <div class="flex space-x-4">
          <router-link :to="localizedRoute('/privacy-policy')" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            {{ $t('footer.privacyPolicy') }}
          </router-link>
          <router-link :to="localizedRoute('/terms')" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            {{ $t('footer.terms') }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useInternationalizedRoute } from '../../composables/useInternationalizedRoute';

const { localizedRoute } = useInternationalizedRoute();
</script> 