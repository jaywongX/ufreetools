<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <TheHeader />
    <div class="flex">
      <!-- 左侧导航栏 -->
      <SideNav />
      
      <!-- 主内容区域 -->
      <main class="flex-1 px-6 py-8">
        <router-view />
      </main>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import SideNav from './components/layout/SideNav.vue'
</script>