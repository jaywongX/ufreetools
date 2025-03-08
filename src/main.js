import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/tailwind.css'

// 路由配置
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/HomePage.vue')
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: () => import('./pages/CategoryPage.vue')
    },
    {
      path: '/tool/:id',
      name: 'Tool',
      component: () => import('./pages/ToolPage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./pages/AboutPage.vue')
    },
    {
      path: '/search',
      component: () => import('./pages/SearchPage.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./pages/ContactPage.vue')
    },
    {
      path: '/tag/:id',
      name: 'Tag',
      component: () => import('./pages/TagPage.vue')
    },
    {
      path: '/tags',
      name: 'Tags',
      component: () => import('./pages/TagsPage.vue')
    }
  ]
})

// 创建应用
const app = createApp(App)
app.use(router)
app.mount('#app')