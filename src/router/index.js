import { createRouter, createWebHistory } from 'vue-router'

// 导入新的模块化国际化文件 (需要在 main.js 中配置 i18n)
// 路由配置
const routes = [
  {
    path: '/'
  },
  {
    path: '/:lang',
    component: () => import('../components/layout/LanguageLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../pages/HomePage.vue'),
        meta: { 
          title: 'home.title', 
          description: 'home.description' 
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../pages/AboutPage.vue'),
        meta: { 
          title: 'about.title', 
          description: 'about.description' 
        }
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../pages/ContactPage.vue'),
        meta: { 
          title: 'contact.title', 
          description: 'contact.description' 
        }
      },
      {
        path: 'terms',
        name: 'Terms',
        component: () => import('../pages/TermsPage.vue'),
        meta: { 
          title: 'terms.title', 
          description: 'terms.description' 
        }
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicy',
        component: () => import('../pages/PrivacyPolicyPage.vue'),
        meta: { 
          title: 'privacyPolicy.title', 
          description: 'privacyPolicy.description' 
        }
      },
      {
        path: 'category/:id',
        name: 'Category',
        component: () => import('../pages/CategoryPage.vue')
      },
      {
        path: 'tool/:id',
        name: 'Tool',
        component: () => import('../pages/ToolPage.vue')
      },
      {
        path: 'search',
        component: () => import('../pages/SearchPage.vue')
      },
      {
        path: 'tag/:id',
        name: 'Tag',
        component: () => import('../pages/TagPage.vue')
      },
      {
        path: 'tags',
        name: 'Tags',
        component: () => import('../pages/TagsPage.vue')
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import('../pages/FeedbackPage.vue')
      }
    ]
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

// 设置导航守卫以处理语言设置
const setupLanguageGuard = (i18n) => {
  router.beforeEach((to, from, next) => {
    // 支持的语言列表
    const supportedLanguages = ['zh', 'en'];
    
    // 从路由中获取语言 (例如 /zh/about)
    const lang = to.params.lang;
    
    // 检查是否支持该语言
    if (lang && supportedLanguages.includes(lang)) {
      // 获取用户之前选择的语言偏好
      const savedLang = localStorage.getItem('userLanguage');
      
      // 如果用户有明确的语言偏好且与当前路由语言不同，则重定向
      if (savedLang && supportedLanguages.includes(savedLang) && savedLang !== lang) {
        // 构建新的URL路径，保留当前路径的其余部分
        const path = to.path.replace(`/${lang}`, `/${savedLang}`);
        next(path);
        return;
      }
      
      // 设置i18n的locale
      i18n.global.locale.value = lang;
      
      // 保存用户语言选择到localStorage
      localStorage.setItem('userLanguage', lang);
    } else if (to.path === '/') {
      // 根路径重定向到默认语言或用户之前选择的语言
      // 注意：此处代码通常不会执行，因为vercel.json已经处理了根路径重定向
      // 但保留作为客户端备用方案
      const savedLang = localStorage.getItem('userLanguage');
      const userLang = savedLang && supportedLanguages.includes(savedLang) 
        ? savedLang 
        : navigator.language.split('-')[0]; // 浏览器语言
      
      const targetLang = supportedLanguages.includes(userLang) ? userLang : 'en';
      next(`/${targetLang}`);
      return;
    }
    
    next();
  });
};

export { router, setupLanguageGuard }