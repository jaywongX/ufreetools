import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export function useMetaInfo(titleKey, descriptionKey) {
  const { t } = useI18n();
  const route = useRoute();
  
  const title = computed(() => {
    if (titleKey) {
      return t(titleKey);
    }
    
    if (route.meta && route.meta.title) {
      return t(route.meta.title);
    }
    
    return 'UFreeTools';
  });
  
  const description = computed(() => {
    if (descriptionKey) {
      return t(descriptionKey);
    }
    
    if (route.meta && route.meta.description) {
      return t(route.meta.description);
    }
    
    return t('common.defaultDescription');
  });
  
  const updateDocumentTitle = () => {
    document.title = `${title.value}`;
  };
  
  const updateMetaInfo = () => {
    updateDocumentTitle();
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description.value);
  };
  
  return {
    title,
    description,
    updateMetaInfo
  };
} 