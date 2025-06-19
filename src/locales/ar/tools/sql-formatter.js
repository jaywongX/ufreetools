export default {
  name: 'محرر SQL',
  description: 'تنسيق وتحرير استعلامات SQL',
  input: {
    title: 'إدخال الاستعلام',
    query: 'الاستعلام',
    queryPlaceholder: 'أدخل استعلام SQL هنا...',
    options: {
      title: 'الخيارات',
      indent: 'المسافة البادئة',
      indentPlaceholder: 'أدخل المسافة البادئة هنا...',
      case: 'حالة الأحرف',
      upper: 'أحرف كبيرة',
      lower: 'أحرف صغيرة',
      preserve: 'حفظ الحالة',
      keywordCase: 'حالة الكلمات المفتاحية',
      keywordCasePlaceholder: 'أدخل حالة الكلمات المفتاحية هنا...',
      linesBetweenQueries: 'الأسطر بين الاستعلامات',
      linesBetweenQueriesPlaceholder: 'أدخل عدد الأسطر بين الاستعلامات هنا...'
    }
  },
  output: {
    title: 'النتيجة',
    formatted: 'الاستعلام المنسق',
    copy: 'نسخ',
    save: 'حفظ',
    share: 'مشاركة',
    export: 'تصدير'
  },
  settings: {
    title: 'الإعدادات',
    theme: 'المظهر',
    light: 'فاتح',
    dark: 'داكن',
    system: 'نظام',
    fontSize: 'حجم الخط',
    fontFamily: 'نوع الخط',
    autoSave: 'حفظ تلقائي',
    showSettings: 'إظهار الإعدادات',
    language: 'اللغة'
  },
  actions: {
    format: 'تنسيق',
    reset: 'إعادة تعيين',
    clear: 'مسح',
    copy: 'نسخ',
    save: 'حفظ',
    share: 'مشاركة',
    export: 'تصدير'
  },
  messages: {
    formatting: 'جاري التنسيق...',
    formatted: 'تم التنسيق بنجاح',
    error: 'خطأ: {message}',
    copied: 'تم النسخ إلى الحافظة',
    saved: 'تم الحفظ بنجاح',
    shared: 'تمت المشاركة بنجاح',
    exported: 'تم التصدير بنجاح',
    cleared: 'تم المسح بنجاح',
    reset: 'تم إعادة التعيين',
    empty: 'الرجاء إدخال الاستعلام',
    invalid: 'استعلام غير صالح'
  },
  errors: {
    invalidQuery: 'استعلام غير صالح',
    formatError: 'خطأ في التنسيق',
    saveError: 'خطأ في الحفظ',
    shareError: 'خطأ في المشاركة',
    copyError: 'خطأ في النسخ',
    exportError: 'خطأ في التصدير'
  },
  article: {
    title: 'دليل محرر SQL',
    intro: {
      title: 'ما هو محرر SQL؟',
      p1: 'محرر SQL هو أداة لتنسيق وتحرير استعلامات SQL.',
      p2: 'يستخدم في تحسين قراءة وفهم استعلامات SQL.',
      p3: 'مع هذه الأداة يمكنك تنسيق استعلامات SQL بسهولة.'
    },
    features: {
      title: 'الميزات الرئيسية',
      feature1: {
        title: 'تنسيق الاستعلامات',
        description: 'تنسيق استعلامات SQL لتحسين القراءة.'
      },
      feature2: {
        title: 'خيارات متعددة',
        description: 'خيارات متعددة لتنسيق الاستعلامات.'
      },
      feature3: {
        title: 'حالة الأحرف',
        description: 'تغيير حالة الأحرف في الاستعلامات.'
      },
      feature4: {
        title: 'واجهة سهلة الاستخدام',
        description: 'واجهة سهلة الاستخدام لتنسيق الاستعلامات.'
      }
    },
    bestPractices: {
      title: 'أفضل الممارسات',
      practice1: {
        title: 'استخدم مسافات بادئة مناسبة',
        description: 'استخدم مسافات بادئة مناسبة لتحسين قراءة الاستعلامات.'
      },
      practice2: {
        title: 'حافظ على حالة الكلمات المفتاحية',
        description: 'حافظ على حالة الكلمات المفتاحية في الاستعلامات.'
      },
      practice3: {
        title: 'راجع النتائج',
        description: 'راجع النتائج للتأكد من دقة التنسيق.'
      },
      practice4: {
        title: 'احتفظ بنسخة احتياطية',
        description: 'احتفظ بنسخة احتياطية من الاستعلامات الأصلية.'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة',
      q1: {
        question: 'ما هو SQL؟',
        answer: 'SQL هي لغة استعلامات قياسية تستخدم في إدارة قواعد البيانات.'
      },
      q2: {
        question: 'هل يمكنني تغيير حالة الأحرف؟',
        answer: 'نعم، يمكنك تغيير حالة الأحرف في الاستعلامات.'
      },
      q3: {
        question: 'هل يمكنني تغيير المسافات البادئة؟',
        answer: 'نعم، يمكنك تغيير المسافات البادئة في الاستعلامات.'
      },
      q4: {
        question: 'هل يمكنني تصدير النتائج؟',
        answer: 'نعم، يمكنك تصدير النتائج إلى ملف.'
      }
    },
    relatedTools: {
      title: 'أدوات ذات صلة',
      tool1: {
        name: 'محرر النصوص',
        url: 'https://www.ufreetools.com/tool/text-editor',
        description: 'تحرير ومعالجة النصوص.'
      },
      tool2: {
        name: 'محول النصوص',
        url: 'https://www.ufreetools.com/tool/text-converter',
        description: 'تحويل النصوص بين التنسيقات المختلفة.'
      },
      tool3: {
        name: 'مضغط النصوص',
        url: 'https://www.ufreetools.com/tool/text-compressor',
        description: 'ضغط وتقليل حجم النصوص.'
      }
    }
  }
}; 