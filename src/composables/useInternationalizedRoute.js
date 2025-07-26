import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

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
  
  return {
    currentLanguage,
    localizedRoute
  };
} 