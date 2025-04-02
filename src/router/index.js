import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import('../pages/CategoryPage.vue')
  },
  {
    path: '/tool/:id',
    name: 'Tool',
    component: () => import('../pages/ToolPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 语言检测和重定向逻辑
router.beforeEach((to, from, next) => {
  // 检查路径是否已包含语言前缀
  const pathSegments = to.path.split('/').filter(segment => segment);
  const firstSegment = pathSegments[0];
  
  // 支持的语言列表
  const supportedLanguages = ['en', 'zh'];
  
  // 如果路径中已经有语言前缀并且是支持的语言
  if (supportedLanguages.includes(firstSegment)) {
    return next();
  }
  
  // 优先获取浏览器语言设置
  const getBrowserLanguage = () => {
    // 尝试从localStorage获取用户上次选择的语言
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // 否则获取浏览器语言
    const browserLang = navigator.language.split('-')[0];
    
    // 如果浏览器语言在支持列表中，使用它
    if (supportedLanguages.includes(browserLang)) {
      return browserLang;
    }
    
    // 默认使用中文
    return 'en';
  };
  
  const targetLang = getBrowserLanguage();
  
  // 重定向到带有语言前缀的同一路径
  return next(`/${targetLang}${to.path === '/' ? '' : to.path}`);
});

export default router