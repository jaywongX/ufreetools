<template>
  <div class="container-custom py-8">
    <SeoHead 
      :title="$t('about.title')"
      :description="$t('about.description')"
    />
    <div class="max-w-5xl mx-auto">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">{{ $t('about.title') }}</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('about.description') }} <span class="text-primary dark:text-primary-light font-semibold">{{ toolCount }}+</span>
        </p>
      </div>
      
      <!-- 主要内容 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-10">
        <div class="p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">{{ $t('about.ourMission') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {{ $t('about.missionText') }}
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.onlineOnly') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('about.onlineDescription') }}
              </p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.privacy') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('about.privacyDescription') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 平台优势 -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8 mb-12">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">{{ $t('about.whyChooseUs') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.efficient') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.efficientDescription') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.quality') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.qualityDescription') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.security') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.securityDescription') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.updates') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.updatesDescription') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- 用户群体 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-10">
        <div class="p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">{{ $t('about.ourUsers') }}</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.developers') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ $t('about.developersDescription') }}
              </p>
            </div>
            
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.designers') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ $t('about.designersDescription') }}
              </p>
            </div>
            
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.generalUsers') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ $t('about.generalUsersDescription') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import SeoHead from '../components/seo/SeoHead.vue'
const router = useRouter()
const allTools = inject('allTools')
const allCategories = inject('categories')

// 计算总工具数量
const toolCount = computed(() => allTools.length)

// 分类描述映射
const categoryDescriptions = {
  'development': '为开发者提供的编程、调试和代码管理工具集，提高开发效率和代码质量',
  'design': '满足设计师需求的色彩、布局和图形设计工具，激发创意灵感',
  'text': '强大的文本处理和编辑工具，支持多种文本格式的转换和编辑',
  'media': '图像处理和多媒体工具，满足图片编辑、优化和转换需求',
  'converter': '多种格式转换工具，轻松在不同数据格式间切换',
  'network': '网络协议和API相关工具，帮助开发者调试和优化网络应用',
  'security': '加密、解密和安全相关工具，保护您的数据安全',
  'utility': '各类实用小工具集合，解决日常工作中的各种问题',
  'surveying_and_mapping': '测绘工具，帮助测绘人员进行测绘工作'
}

// 使用内联SVG图标替代导入组件
const categoryIcons = {
  development: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>`,
  
  design: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>`,
  
  text: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>`,
  
  media: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>`,
  
  converter: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>`,
  
  network: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>`,
  
  security: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>`,
  
  utility: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`,

  surveying_and_mapping: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>`
}

// 每个分类的典型工具
const categoryFeaturedTools = {
  'development': ['代码格式化', '正则表达式测试', 'JSON格式化', 'Git冲突解决', 'HTML格式化'],
  'design': ['渐变生成器', '调色板生成', 'SVG优化器', '流程图生成', '配色方案'],
  'text': ['Markdown编辑器', '文本转HTML', 'XML格式化', 'CSS格式化', '敏感词过滤'],
  'media': ['图片压缩', '图片裁剪', '图片滤镜', '水印添加', '图片转ASCII'],
  'converter': ['Base64编解码', 'CSV转JSON', '进制转换', '时间戳转换', 'URL编解码'],
  'network': ['API请求工具', 'HTTP状态码查询', 'IP地址查询', 'WebSocket测试', 'CORS生成器'],
  'security': ['密码生成器', '密码强度检测', '哈希计算器', 'RSA加密', '对称加密'],
  'utility': ['二维码生成', '随机数生成', '计算器', '日期计算', '单位换算'],
  'surveying_and_mapping': ['测绘工具', '地图绘制', '坐标转换', '距离测量', '面积计算']
}

// 构建带有统计数据的分类列表
const categoriesWithCounts = computed(() => {
  return allCategories.map(category => {
    // 计算该分类下的工具数量
    const count = allTools.filter(tool => tool.category === category.name).length
    
    return {
      id: category.id,
      name: category.name,
      count,
      description: categoryDescriptions[category.id] || `${category.name}类工具集合`,
      featuredTools: categoryFeaturedTools[category.id] || []
    }
  })
})
</script> 