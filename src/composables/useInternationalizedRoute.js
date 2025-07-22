import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { setLanguage } from '../main';

export function useInternationalizedRoute() {
  const route = useRoute();
  const router = useRouter();
  const { locale } = useI18n();
  
  // 获取当前语言
  const currentLanguage = () => {
    return locale.value;
  };
  
  // 创建带有当前语言前缀的路由
  const localizedRoute = (path) => {
    // 确保路径开头没有 '/'
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `/${locale.value}/${cleanPath}`;
  };
  
  // 获取替换语言的当前路由
  const switchLanguageRoute = (newLanguage) => {
    const currentPath = route.fullPath;
    const regex = new RegExp(`^/(${locale.value})/`);
    return currentPath.replace(regex, `/${newLanguage}/`);
  };
  
  // 切换语言并保持相同页面
  function changeLanguage(lang) {
    if (lang === locale.value) return;
    
    const currentPath = route.path;
    const pathWithoutLang = currentPath.replace(/^\/[^\/]+/, '');
    
    setLanguage(lang);
    
    router.push(`/${lang}${pathWithoutLang}`);
  }
  
  return {
    currentLanguage,
    localizedRoute,
    switchLanguageRoute,
    changeLanguage
  };
} 