export default {
  name: 'مشوش الكود',
  description: 'تشويش كود JavaScript و CSS لتحسين الأمان وحماية الملكية الفكرية',

  languages: {
    title: 'اختر اللغة',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'خيارات التشويش',
    javascript: {
      compact: 'مخرجات مضغوطة (إزالة المسافات)',
      controlFlowFlattening: 'تسطيح تدفق التحكم',
      deadCodeInjection: 'حقن كود غير فعال',
      debugProtection: 'حماية من التصحيح',
      selfDefending: 'الدفاع الذاتي (منع التنسيق)',
      stringArray: 'تحويل النصوص إلى مصفوفة',
      renameGlobals: 'إعادة تسمية المتغيرات العامة',
      renameProperties: 'إعادة تسمية الخصائص',
      mangle: 'تشويش أسماء المتغيرات',
      stringArrayEncoding: 'ترميز مصفوفة النصوص',
      stringArrayThreshold: 'حد مصفوفة النصوص',
      unicodeEscapeSequence: 'تسلسل الهروب Unicode'
    },
    css: {
      compact: 'مخرجات مضغوطة',
      renameSelectors: 'إعادة تسمية المحددات',
      preserveImportant: 'الحفاظ على !important',
      restructure: 'إعادة هيكلة القواعد',
      keepVendorPrefixes: 'الحفاظ على بادئات المتصفح',
      removeComments: 'إزالة التعليقات'
    }
  },

  input: {
    title: 'الكود المدخل',
    placeholder: 'أدخل الكود المراد تشويشه هنا...',
    clear: 'مسح',
    paste: 'لصق',
    upload: 'رفع ملف',
    inputObfuscatorCode: 'الرجاء إدخال الكود المراد تشويشه'
  },

  output: {
    title: 'نتيجة التشويش',
    placeholder: 'سيظهر الكود المشوش هنا...',
    copy: 'نسخ',
    download: 'تنزيل',
    stats: {
      original: 'الحجم الأصلي',
      obfuscated: 'الحجم بعد التشويش',
      ratio: 'نسبة الضغط'
    },
    increase: 'زيادة',
    decrease: 'نقصان'
  },

  actions: {
    obfuscate: 'تشويش',
    clear: 'مسح'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة',
    copyFailed: 'فشل النسخ، يرجى النسخ يدوياً',
    processing: 'جاري المعالجة...',
    error: 'حدث خطأ أثناء التشويش',
    invalidInput: 'كود إدخال غير صالح',
    uploadError: 'فشل رفع الملف',
    fileTooLarge: 'الملف كبير جداً (الحد الأقصى 2 ميجابايت)'
  },

  tips: {
    title: 'نصائح الاستخدام',
    tip1: 'تشويش الكود يزيد من صعوبة الهندسة العكسية، لكنه لا يمنع كسر الكود تماماً',
    tip2: 'تفعيل المزيد من خيارات التشويش يزيد من حجم الكود وتكلفة التشغيل',
    tip3: 'بعض خيارات التشويش قد تؤثر على قابلية تصحيح الكود',
    tip4: 'يُنصح بعمل نسخة احتياطية من الكود الأصلي قبل التشويش',
    tip5: 'للمشاريع الكبيرة، يُنصح باستخدام أدوات تشويش احترافية'
  },

  demo: {
    title: 'أمثلة',
    function: 'مثال دالة',
    class: 'مثال فئة',
    simple: 'نمط بسيط',
    animation: 'تأثيرات حركية'
  }
}; 