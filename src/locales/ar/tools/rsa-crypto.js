export default {
  name: 'تشفير RSA',
  description: 'تشفير وفك تشفير وتوقيع والتحقق باستخدام خوارزمية RSA',
  input: {
    title: 'إدخال البيانات',
    data: 'البيانات',
    placeholder: 'أدخل البيانات هنا...',
    key: 'المفتاح',
    publicKey: 'المفتاح العام',
    privateKey: 'المفتاح الخاص',
    keyFormat: 'تنسيق المفتاح',
    pem: 'PEM',
    der: 'DER',
    base64: 'Base64',
    hex: 'Hex',
    options: {
      title: 'الخيارات',
      operation: 'العملية',
      encrypt: 'تشفير',
      decrypt: 'فك التشفير',
      sign: 'توقيع',
      verify: 'تحقق',
      padding: 'الحشو',
      pkcs1: 'PKCS#1',
      oaep: 'OAEP',
      mgf1: 'MGF1',
      hash: 'خوارزمية التجزئة',
      sha1: 'SHA-1',
      sha256: 'SHA-256',
      sha384: 'SHA-384',
      sha512: 'SHA-512'
    }
  },
  output: {
    title: 'النتيجة',
    encrypted: 'النص المشفر',
    decrypted: 'النص المفكوك',
    signature: 'التوقيع',
    verified: 'تم التحقق',
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
    decrypt: 'فك التشفير',
    sign: 'توقيع',
    verify: 'تحقق',
    reset: 'إعادة تعيين',
    clear: 'مسح',
    copy: 'نسخ',
    save: 'حفظ',
    share: 'مشاركة',
    export: 'تصدير',
    import: 'استيراد'
  },
  messages: {
    processing: 'جاري المعالجة...',
    encrypted: 'تم التشفير بنجاح',
    decrypted: 'تم فك التشفير بنجاح',
    signed: 'تم التوقيع بنجاح',
    verified: 'تم التحقق بنجاح',
    error: 'خطأ: {message}',
    copied: 'تم النسخ إلى الحافظة',
    saved: 'تم الحفظ بنجاح',
    shared: 'تمت المشاركة بنجاح',
    exported: 'تم التصدير بنجاح',
    imported: 'تم الاستيراد بنجاح',
    cleared: 'تم المسح بنجاح',
    reset: 'تم إعادة التعيين',
    empty: 'الرجاء إدخال البيانات والمفتاح',
    invalid: 'بيانات أو مفتاح غير صالح'
  },
  errors: {
    invalidData: 'بيانات غير صالحة',
    invalidKey: 'مفتاح غير صالح',
    invalidOperation: 'عملية غير صالحة',
    encryptError: 'خطأ في التشفير',
    decryptError: 'خطأ في فك التشفير',
    signError: 'خطأ في التوقيع',
    verifyError: 'خطأ في التحقق',
    saveError: 'خطأ في الحفظ',
    shareError: 'خطأ في المشاركة',
    copyError: 'خطأ في النسخ',
    exportError: 'خطأ في التصدير',
    importError: 'خطأ في الاستيراد'
  },
  article: {
    title: 'دليل شامل لتشفير RSA',
    intro: {
      title: 'ما هو تشفير RSA ولماذا تحتاج إليه؟',
      p1: 'RSA هو خوارزمية تشفير غير متماثل تستخدم لتأمين البيانات.',
      p2: 'يستخدم في العديد من التطبيقات مثل البريد الإلكتروني الآمن وتوقيع المستندات.',
      p3: 'مع أداة تشفير RSA الخاصة بنا، يمكنك تشفير وفك تشفير وتوقيع والتحقق من البيانات بسهولة.'
    },
    features: {
      title: 'الميزات الرئيسية لتشفير RSA',
      feature1: {
        title: 'تشفير وفك تشفير',
        description: 'تشفير وفك تشفير البيانات باستخدام مفاتيح RSA.'
      },
      feature2: {
        title: 'توقيع وتحقيق',
        description: 'توقيع البيانات والتحقق من صحتها.'
      },
      feature3: {
        title: 'خيارات متعددة',
        description: 'خيارات متعددة للحشو وخوارزميات التجزئة.'
      },
      feature4: {
        title: 'دعم تنسيقات متعددة',
        description: 'دعم لتنسيقات مفاتيح متعددة مثل PEM وDER.'
      }
    },
    bestPractices: {
      title: 'أفضل الممارسات لتشفير RSA',
      practice1: {
        title: 'استخدم مفاتيح قوية',
        description: 'استخدم مفاتيح بطول كافٍ لضمان الأمان.'
      },
      practice2: {
        title: 'حافظ على سرية المفاتيح الخاصة',
        description: 'لا تشارك المفاتيح الخاصة مع أي شخص.'
      },
      practice3: {
        title: 'اختر الحشو المناسب',
        description: 'اختر نوع الحشو المناسب لتطبيقك.'
      },
      practice4: {
        title: 'تحقق من صحة البيانات',
        description: 'تحقق من صحة البيانات بعد فك التشفير أو التحقق.'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة حول تشفير RSA',
      q1: {
        question: 'ما هو طول المفتاح الموصى به؟',
        answer: 'يوصى باستخدام مفاتيح بطول 2048 بت أو أكثر.'
      },
      q2: {
        question: 'هل يمكنني استخدام مفاتيح بتنسيقات مختلفة؟',
        answer: 'نعم، تدعم الأداة تنسيقات PEM وDER وBase64 وHex.'
      },
      q3: {
        question: 'ما هي خوارزميات الحشو المدعومة؟',
        answer: 'تدعم الأداة PKCS#1 وOAEP.'
      },
      q4: {
        question: 'هل يمكنني تصدير النتائج؟',
        answer: 'نعم، يمكنك تصدير النتائج بتنسيقات مختلفة.'
      }
    },
    relatedTools: {
      title: 'أدوات ذات صلة',
      tool1: {
        name: 'مولد مفاتيح RSA',
        url: 'https://www.ufreetools.com/tool/rsa-key-pair-generator',
        description: 'توليد أزواج مفاتيح RSA.'
      },
      tool2: {
        name: 'موقع التوقيع RSA',
        url: 'https://www.ufreetools.com/tool/rsa-signature-verifier',
        description: 'التحقق من توقيعات RSA.'
      },
      tool3: {
        name: 'تشفير متماثل',
        url: 'https://www.ufreetools.com/tool/symmetric-crypto',
        description: 'تشفير وفك تشفير متماثل.'
      }
    }
  }
}; 