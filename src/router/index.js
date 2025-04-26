import { createRouter, createWebHistory } from 'vue-router'

// 导入新的模块化国际化文件 (需要在 main.js 中配置 i18n)
// 路由配置
const routes = [
  // Route with language parameter
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
      },
      {
        path: 'submit-tool',
        name: 'SubmitTool',
        component: () => import('../pages/SubmitToolPage.vue')
      }
    ]
  },
  
  // Same routes but without language parameter (direct paths)
  {
    path: '/',
    component: () => import('../components/layout/LanguageLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomeNoLang',
        component: () => import('../pages/HomePage.vue'),
        meta: { 
          title: 'home.title', 
          description: 'home.description' 
        }
      },
      {
        path: 'about',
        name: 'AboutNoLang',
        component: () => import('../pages/AboutPage.vue'),
        meta: { 
          title: 'about.title', 
          description: 'about.description' 
        }
      },
      {
        path: 'contact',
        name: 'ContactNoLang',
        component: () => import('../pages/ContactPage.vue'),
        meta: { 
          title: 'contact.title', 
          description: 'contact.description' 
        }
      },
      {
        path: 'terms',
        name: 'TermsNoLang',
        component: () => import('../pages/TermsPage.vue'),
        meta: { 
          title: 'terms.title', 
          description: 'terms.description' 
        }
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicyNoLang',
        component: () => import('../pages/PrivacyPolicyPage.vue'),
        meta: { 
          title: 'privacyPolicy.title', 
          description: 'privacyPolicy.description' 
        }
      },
      {
        path: 'category/:id',
        name: 'CategoryNoLang',
        component: () => import('../pages/CategoryPage.vue')
      },
      {
        path: 'tool/:id',
        name: 'ToolNoLang',
        component: () => import('../pages/ToolPage.vue')
      },
      {
        path: 'search',
        component: () => import('../pages/SearchPage.vue')
      },
      {
        path: 'tag/:id',
        name: 'TagNoLang',
        component: () => import('../pages/TagPage.vue')
      },
      {
        path: 'tags',
        name: 'TagsNoLang',
        component: () => import('../pages/TagsPage.vue')
      },
      {
        path: 'feedback',
        name: 'FeedbackNoLang',
        component: () => import('../pages/FeedbackPage.vue')
      },
      {
        path: 'submit-tool',
        name: 'SubmitToolNoLang',
        component: () => import('../pages/SubmitToolPage.vue')
      }
    ]
  },
  
  // 404路由 - 必须放在最后
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found'
    }
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
    const supportedLanguages = ['zh', 'en'];
    const lang = to.params.lang;

    // 1. 如果 URL 带语言前缀
    if (lang) {
      if (supportedLanguages.includes(lang)) {
        // 1.1 有效语言前缀
        i18n.global.locale.value = lang;
        localStorage.setItem('userLanguage', lang);
      } else {
        // 1.2 无效语言前缀，重置为英语并记录
        console.warn(`Invalid language parameter: ${lang}. Defaulting to English.`);
        i18n.global.locale.value = 'en';
        localStorage.setItem('userLanguage', 'en');
      }
      next();
      return;
    }

    // 2. URL 不带语言
    const savedLang = localStorage.getItem('userLanguage');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = supportedLanguages.includes(browserLang) ? browserLang : 'en';

    // 优先级：用户偏好 > 浏览器语言 > 默认语言
    const targetLang = (savedLang && supportedLanguages.includes(savedLang))
      ? savedLang
      : defaultLang;

    i18n.global.locale.value = targetLang;
    localStorage.setItem('userLanguage', targetLang);

    next();
  });
};

export { router, setupLanguageGuard }