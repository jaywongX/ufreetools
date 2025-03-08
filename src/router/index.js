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
  },
  {
    path: '/jwt-debugger',
    name: 'JwtDebugger',
    component: () => import('../components/tools/JwtDebugger.vue'),
    meta: {
      title: 'JWT调试工具'
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

export default router