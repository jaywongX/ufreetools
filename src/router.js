import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import HomePage from './pages/HomePage.vue'
import CategoryPage from './pages/CategoryPage.vue'
import ToolPage from './pages/ToolPage.vue'
import AboutPage from './pages/AboutPage.vue'
import PrivacyPage from './pages/PrivacyPage.vue'
import TermsPage from './pages/TermsPage.vue'
import ContactPage from './pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: CategoryPage,
    props: true
  },
  {
    path: '/tool/:id',
    name: 'Tool',
    component: ToolPage,
    props: route => ({ toolId: Number(route.params.id) })
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPage
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 页面切换时滚动到顶部
    return { top: 0 }
  }
})

export default router 