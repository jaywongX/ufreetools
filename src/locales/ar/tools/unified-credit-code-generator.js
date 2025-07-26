export default {
  name: 'مولد الرمز الموحد للائتمان',
  description: 'إنشاء رموز ائتمان موحدة للشركات',

  input: {
    title: 'معلومات الشركة',
    company: {
      title: 'اسم الشركة',
      placeholder: 'أدخل اسم الشركة...'
    },
    type: {
      title: 'نوع الشركة',
      options: {
        domestic: 'محلية',
        foreign: 'أجنبية',
        individual: 'فردية'
      }
    },
    region: {
      title: 'المنطقة',
      placeholder: 'اختر المنطقة...'
    },
    industry: {
      title: 'القطاع',
      placeholder: 'اختر القطاع...'
    }
  },

  output: {
    title: 'الرمز الموحد للائتمان',
    code: 'الرمز',
    validation: 'التحقق',
    format: 'التنسيق',
    copy: 'نسخ',
    save: 'حفظ',
    share: 'مشاركة'
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
    validate: 'التحقق',
    reset: 'إعادة تعيين',
    clear: 'مسح'
  },

  messages: {
    generating: 'جاري الإنشاء...',
    validating: 'جاري التحقق...',
    success: 'تمت العملية بنجاح',
    error: 'حدث خطأ: {error}'
  },

  errors: {
    invalidCompany: 'اسم شركة غير صالح',
    invalidType: 'نوع شركة غير صالح',
    invalidRegion: 'منطقة غير صالحة',
    invalidIndustry: 'قطاع غير صالح',
    generationFailed: 'فشل الإنشاء',
    validationFailed: 'فشل التحقق'
  }
}; 