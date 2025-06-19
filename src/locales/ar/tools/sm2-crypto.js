export default {
  name: 'تشفير SM2',
  description: 'تشفير وفك تشفير البيانات باستخدام خوارزمية SM2',
  input: {
    title: 'إدخال البيانات',
    data: 'البيانات',
    dataPlaceholder: 'أدخل البيانات هنا...',
    options: {
      title: 'الخيارات',
      mode: 'الوضع',
      encrypt: 'تشفير',
      decrypt: 'فك تشفير',
      key: 'المفتاح',
      keyPlaceholder: 'أدخل المفتاح هنا...',
      iv: 'المتجه الأولي',
      ivPlaceholder: 'أدخل المتجه الأولي هنا...',
      padding: 'الحشو',
      paddingPlaceholder: 'أدخل الحشو هنا...',
      outputFormat: 'تنسيق الإخراج',
      hex: 'سداسي عشري',
      base64: 'Base64',
      utf8: 'UTF-8'
    }
  },
  output: {
    title: 'النتيجة',
    result: 'النتيجة',
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
    encrypt: 'تشفير',
    decrypt: 'فك تشفير',
    reset: 'إعادة تعيين',
    clear: 'مسح',
    copy: 'نسخ',
    save: 'حفظ',
    share: 'مشاركة',
    export: 'تصدير'
  },
  messages: {
    encrypting: 'جاري التشفير...',
    decrypting: 'جاري فك التشفير...',
    encrypted: 'تم التشفير بنجاح',
    decrypted: 'تم فك التشفير بنجاح',
    error: 'خطأ: {message}',
    copied: 'تم النسخ إلى الحافظة',
    saved: 'تم الحفظ بنجاح',
    shared: 'تمت المشاركة بنجاح',
    exported: 'تم التصدير بنجاح',
    cleared: 'تم المسح بنجاح',
    reset: 'تم إعادة التعيين',
    empty: 'الرجاء إدخال البيانات',
    invalid: 'بيانات غير صالحة'
  },
  errors: {
    invalidData: 'بيانات غير صالحة',
    invalidKey: 'مفتاح غير صالح',
    invalidIV: 'متجه أولي غير صالح',
    invalidPadding: 'حشو غير صالح',
    encryptError: 'خطأ في التشفير',
    decryptError: 'خطأ في فك التشفير',
    saveError: 'خطأ في الحفظ',
    shareError: 'خطأ في المشاركة',
    copyError: 'خطأ في النسخ',
    exportError: 'خطأ في التصدير'
  },
  article: {
    title: 'دليل تشفير SM2',
    intro: {
      title: 'ما هو تشفير SM2؟',
      p1: 'تشفير SM2 هو خوارزمية تشفير تستخدم في حماية البيانات.',
      p2: 'يستخدم في تشفير وفك تشفير البيانات بشكل آمن.',
      p3: 'مع هذه الأداة يمكنك تشفير وفك تشفير البيانات بسهولة.'
    },
    features: {
      title: 'الميزات الرئيسية',
      feature1: {
        title: 'تشفير وفك تشفير',
        description: 'تشفير وفك تشفير البيانات باستخدام خوارزمية SM2.'
      },
      feature2: {
        title: 'خيارات متعددة',
        description: 'خيارات متعددة للتشفير وفك التشفير.'
      },
      feature3: {
        title: 'تنسيقات إخراج',
        description: 'دعم تنسيقات إخراج متعددة مثل السداسي العشري وBase64.'
      },
      feature4: {
        title: 'واجهة سهلة الاستخدام',
        description: 'واجهة سهلة الاستخدام للتشفير وفك التشفير.'
      }
    },
    bestPractices: {
      title: 'أفضل الممارسات',
      practice1: {
        title: 'استخدم مفاتيح قوية',
        description: 'استخدم مفاتيح قوية وآمنة للتشفير.'
      },
      practice2: {
        title: 'احتفظ بالمفاتيح',
        description: 'احتفظ بالمفاتيح في مكان آمن.'
      },
      practice3: {
        title: 'راجع النتائج',
        description: 'راجع النتائج للتأكد من دقة التشفير وفك التشفير.'
      },
      practice4: {
        title: 'احتفظ بنسخة احتياطية',
        description: 'احتفظ بنسخة احتياطية من البيانات الأصلية.'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة',
      q1: {
        question: 'ما هي خوارزمية SM2؟',
        answer: 'SM2 هي خوارزمية تشفير تستخدم في حماية البيانات.'
      },
      q2: {
        question: 'هل يمكنني استخدام مفاتيح مخصصة؟',
        answer: 'نعم، يمكنك استخدام مفاتيح مخصصة للتشفير وفك التشفير.'
      },
      q3: {
        question: 'هل يمكنني تغيير تنسيق الإخراج؟',
        answer: 'نعم، يمكنك تغيير تنسيق الإخراج إلى السداسي العشري أو Base64.'
      },
      q4: {
        question: 'هل يمكنني تصدير النتائج؟',
        answer: 'نعم، يمكنك تصدير النتائج إلى ملف.'
      }
    },
    relatedTools: {
      title: 'أدوات ذات صلة',
      tool1: {
        name: 'مولد المفاتيح',
        url: 'https://www.ufreetools.com/tool/key-generator',
        description: 'إنشاء مفاتيح تشفير قوية.'
      },
      tool2: {
        name: 'محول التشفير',
        url: 'https://www.ufreetools.com/tool/crypto-converter',
        description: 'تحويل البيانات بين تنسيقات التشفير المختلفة.'
      },
      tool3: {
        name: 'مختبر التشفير',
        url: 'https://www.ufreetools.com/tool/crypto-tester',
        description: 'اختبار وتصحيح خوارزميات التشفير.'
      }
    }
  }
}; 