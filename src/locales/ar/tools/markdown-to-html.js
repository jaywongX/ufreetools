export default {
  name: 'محول Markdown إلى HTML',
  description: 'تحويل مستندات Markdown إلى HTML بسهولة',
  input: {
    title: 'إدخال Markdown',
    placeholder: 'الصق محتوى Markdown هنا...',
    upload: 'رفع ملف',
    dragDrop: 'اسحب وأفلت الملف هنا أو انقر للاختيار'
  },
  output: {
    title: 'HTML الناتج',
    copy: 'نسخ',
    download: 'تحميل',
    preview: 'معاينة',
    share: 'مشاركة'
  },
  settings: {
    title: 'إعدادات التحويل',
    sanitize: 'تنظيف HTML',
    prettify: 'تنسيق HTML',
    minify: 'تصغير HTML',
    addStyles: 'إضافة أنماط CSS',
    addScripts: 'إضافة سكريبتات',
    customStyles: 'أنماط CSS مخصصة',
    customScripts: 'سكريبتات مخصصة'
  },
  actions: {
    convert: 'تحويل',
    reset: 'إعادة تعيين',
    clear: 'مسح',
    copy: 'نسخ',
    download: 'تحميل'
  },
  messages: {
    converting: 'جاري التحويل...',
    converted: 'تم التحويل بنجاح',
    error: 'خطأ: {message}',
    copied: 'تم النسخ إلى الحافظة',
    downloaded: 'تم التحميل بنجاح',
    empty: 'الرجاء إدخال محتوى Markdown',
    invalid: 'محتوى Markdown غير صالح',
    processing: 'جاري المعالجة...'
  },
  errors: {
    invalidMarkdown: 'محتوى Markdown غير صالح',
    conversionError: 'خطأ في التحويل',
    downloadError: 'خطأ في التحميل',
    copyError: 'خطأ في النسخ'
  },
  article: {
    title: 'دليل شامل لمحول Markdown إلى HTML',
    intro: {
      title: 'ما هو محول Markdown إلى HTML ولماذا تحتاجه؟',
      p1: 'محول Markdown إلى HTML هو أداة ضرورية لتحويل مستندات Markdown إلى HTML. يمكن أن يساعدك في إنشاء صفحات ويب منسقة بشكل جميل بسهولة.',
      p2: 'Markdown هي لغة ترميز خفيفة تتيح لك تنسيق النص باستخدام رموز بسيطة. HTML هي لغة الترميز القياسية لإنشاء صفحات الويب. المحول يجعل عملية التحويل بينهما سهلة وسريعة.',
      p3: 'مع محول Markdown إلى HTML الخاص بنا، يمكنك تحويل مستندات Markdown إلى HTML بسهولة مع خيارات تخصيص متعددة للتحويل والعرض.'
    },
    features: {
      title: 'الميزات الرئيسية لمحول Markdown إلى HTML',
      feature1: {
        title: 'تحويل دقيق',
        description: 'تحويل دقيق لمستندات Markdown إلى HTML.'
      },
      feature2: {
        title: 'خيارات تخصيص متعددة',
        description: 'خيارات تخصيص متعددة للتحويل والعرض.'
      },
      feature3: {
        title: 'معاينة مباشرة',
        description: 'معاينة مباشرة للنتائج أثناء التحويل.'
      },
      feature4: {
        title: 'تصدير متعدد',
        description: 'تصدير النتائج بتنسيقات مختلفة.'
      }
    },
    bestPractices: {
      title: 'أفضل الممارسات لتحويل Markdown إلى HTML',
      practice1: {
        title: 'تحقق من التنسيق',
        description: 'تحقق من تنسيق Markdown قبل التحويل.'
      },
      practice2: {
        title: 'استخدم الأنماط',
        description: 'استخدم أنماط CSS لتحسين مظهر HTML.'
      },
      practice3: {
        title: 'اختبر النتيجة',
        description: 'اختبر HTML الناتج في متصفحات مختلفة.'
      },
      practice4: {
        title: 'حافظ على البساطة',
        description: 'حافظ على تنسيق Markdown بسيطاً للحصول على نتائج أفضل.'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة حول محول Markdown إلى HTML',
      q1: {
        question: 'هل يمكنني تحويل ملفات Markdown كبيرة؟',
        answer: 'نعم، يمكنك تحويل ملفات Markdown كبيرة بسهولة.'
      },
      q2: {
        question: 'هل يدعم المحول الصور والروابط؟',
        answer: 'نعم، يدعم المحول الصور والروابط والعناصر الأخرى.'
      },
      q3: {
        question: 'هل يمكنني تخصيص HTML الناتج؟',
        answer: 'نعم، يمكنك تخصيص HTML الناتج من خلال خيارات متعددة.'
      },
      q4: {
        question: 'هل يمكنني تصدير النتائج بتنسيقات مختلفة؟',
        answer: 'نعم، يمكنك تصدير النتائج بتنسيقات مختلفة مثل HTML و PDF.'
      }
    },
    relatedTools: {
      title: 'أدوات ذات صلة',
      tool1: {
        name: 'محرر Markdown',
        url: 'https://www.ufreetools.com/tool/markdown-editor',
        description: 'تحرير وتنسيق مستندات Markdown.'
      },
      tool2: {
        name: 'محرر HTML',
        url: 'https://www.ufreetools.com/tool/html-editor',
        description: 'تحرير وتنسيق كود HTML.'
      },
      tool3: {
        name: 'محرر CSS',
        url: 'https://www.ufreetools.com/tool/css-editor',
        description: 'تحرير وتنسيق أنماط CSS.'
      }
    }
  }
}; 