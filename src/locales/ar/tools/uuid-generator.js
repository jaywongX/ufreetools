export default {
  name: 'مولد UUID',
  description: 'إنشاء معرفات فريدة عالمية (UUID)',

  input: {
    title: 'خيارات UUID',
    version: {
      title: 'الإصدار',
      options: {
        v1: 'الإصدار 1 (الوقت)',
        v4: 'الإصدار 4 (عشوائي)',
        v5: 'الإصدار 5 (SHA-1)'
      }
    },
    namespace: {
      title: 'المجال',
      placeholder: 'أدخل المجال (للإصدار 5)...'
    },
    name: {
      title: 'الاسم',
      placeholder: 'أدخل الاسم (للإصدار 5)...'
    },
    format: {
      title: 'التنسيق',
      options: {
        standard: 'قياسي',
        compact: 'مختصر',
        urn: 'URN'
      }
    }
  },

  output: {
    title: 'UUID المولد',
    uuid: 'UUID',
    version: 'الإصدار',
    timestamp: 'الطابع الزمني',
    copy: 'نسخ',
    save: 'حفظ',
    share: 'مشاركة',
    export: 'تصدير'
  },

  settings: {
    title: 'الإعدادات',
    theme: {
      title: 'المظهر',
      options: {
        light: 'فاتح',
        dark: 'داكن',
        system: 'نظام'
      }
    },
    fontSize: {
      title: 'حجم الخط',
      options: {
        small: 'صغير',
        medium: 'متوسط',
        large: 'كبير'
      }
    },
    language: {
      title: 'اللغة',
      options: {
        ar: 'العربية',
        en: 'English'
      }
    }
  },

  actions: {
    generate: 'إنشاء',
    reset: 'إعادة تعيين',
    clear: 'مسح'
  },

  messages: {
    generating: 'جاري الإنشاء...',
    success: 'تمت العملية بنجاح',
    error: 'حدث خطأ: {error}'
  },

  errors: {
    invalidVersion: 'إصدار غير صالح',
    invalidNamespace: 'مجال غير صالح',
    invalidName: 'اسم غير صالح',
    invalidFormat: 'تنسيق غير صالح',
    generationFailed: 'فشل الإنشاء'
  }
}; 