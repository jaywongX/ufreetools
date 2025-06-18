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
  },
  article: {
    title: 'مولد UUID: إنشاء معرفات فريدة عالمية',
    features: {
      title: 'ميزات المولد',
      description: 'مولد UUID هو أداة تساعدك على إنشاء معرفات فريدة عالمية بأشكال مختلفة.',
      items: [
        'دعم إصدارات UUID المختلفة',
        'إنشاء UUIDs قائمة على الوقت',
        'إنشاء UUIDs عشوائية',
        'إنشاء UUIDs قائمة على SHA-1',
        'تنسيقات متعددة للنتائج'
      ]
    },
    bestPractices: {
      title: 'أفضل الممارسات',
      items: [
        'اختر الإصدار المناسب لاحتياجاتك',
        'استخدم المجال والاسم المناسبين للإصدار 5',
        'تحقق من صحة UUID المولد',
        'احتفظ بسجل للـ UUIDs المستخدمة',
        'استخدم التنسيق المناسب للتطبيق'
      ]
    },
    faq: {
      title: 'الأسئلة الشائعة',
      items: [
        {
          question: 'ما هو UUID؟',
          answer: 'UUID هو معرف فريد عالمي يستخدم لتحديد المعلومات في أنظمة الكمبيوتر.'
        },
        {
          question: 'ما الفرق بين إصدارات UUID؟',
          answer: 'الإصدار 1 يستخدم الوقت، والإصدار 4 عشوائي، والإصدار 5 يستخدم SHA-1 مع مجال واسم.'
        },
        {
          question: 'هل يمكن تكرار UUID؟',
          answer: 'نظرياً، احتمال تكرار UUID من الإصدار 4 ضئيل جداً، لكن الإصدار 1 يعتمد على الوقت.'
        }
      ]
    },
    relatedTools: {
      title: 'الأدوات ذات الصلة',
      items: [
        'محلل UUID',
        'مولد GUID',
        'محول UUID',
        'مدقق UUID'
      ]
    }
  }
} 