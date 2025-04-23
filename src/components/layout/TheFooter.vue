<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
    <div class="py-6 px-4">
      
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- 合作伙伴/资源链接 -->
        <div class="flex flex-wrap justify-center gap-4">
          <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 text-center">
            {{ $t('footer.partners') || '合作伙伴' }} :
          </h4>
          <a 
            href="https://twelve.tools" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            Twelve Tools
          </a>
          <a href="https://www.canadawebdir.com/shopping/home_and_garden/"
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            home_and_garden com
          </a>
          <a href="https://www.australiawebdirectory.net/business_and_economy/"
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
          >
          Australia
          </a>
          <!-- 可以在这里添加更多合作伙伴链接 -->
        </div>
      </div>
      
      <!-- 分隔线 -->
      <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>

      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- 版权信息 -->
        <div class="flex-grow text-center text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} ufreetools. {{ $t('footer.copyright') }}
        </div>
        
        <!-- 页脚导航 -->
        <div class="flex space-x-4">
          <router-link 
            :to="localizedRoute('/about')" 
            class="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light" target="_blank"
          >
            {{ $t('header.about') }}
          </router-link>
          <router-link :to="localizedRoute('/privacy-policy')" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light" target="_blank">
            {{ $t('footer.privacyPolicy') }}
          </router-link>
          <router-link :to="localizedRoute('/terms')" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light" target="_blank">
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