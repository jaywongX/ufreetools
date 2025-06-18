export default {
  name: 'مشوش JavaScript',
  description: 'حماية كود JavaScript الخاص بك من خلال التشفير والتعتيم',
  input: {
    title: 'الكود المدخل',
    placeholder: 'الصق كود JavaScript هنا...',
    upload: 'رفع ملف',
    sample: 'تحميل نموذج',
    clear: 'مسح'
  },
  output: {
    title: 'الكود المشوش',
    copy: 'نسخ',
    download: 'تحميل',
    share: 'مشاركة',
    obfuscate: 'تعتيم'
  },
  settings: {
    title: 'إعدادات التعتيم',
    compact: 'مضغوط',
    controlFlowFlattening: 'تسطيح تدفق التحكم',
    controlFlowFlatteningThreshold: 'عتبة تسطيح تدفق التحكم',
    deadCodeInjection: 'حقن الكود الميت',
    deadCodeInjectionThreshold: 'عتبة حقن الكود الميت',
    debugProtection: 'حماية التصحيح',
    debugProtectionInterval: 'فاصل حماية التصحيح',
    disableConsoleOutput: 'تعطيل إخراج وحدة التحكم',
    domainLock: 'قفل النطاق',
    forceTransformStrings: 'إجبار تحويل السلاسل',
    identifierNamesGenerator: 'مولد أسماء المعرفات',
    hexadecimal: 'سداسي عشري',
    mangled: 'مشوه',
    renameGlobals: 'إعادة تسمية المتغيرات العامة',
    reservedNames: 'الأسماء المحجوزة',
    reservedStrings: 'السلاسل المحجوزة',
    rotateStringArray: 'تدوير مصفوفة السلاسل',
    seed: 'البذرة',
    selfDefending: 'الدفاع الذاتي',
    shuffleStringArray: 'خلط مصفوفة السلاسل',
    splitStrings: 'تقسيم السلاسل',
    splitStringsChunkLength: 'طول جزء تقسيم السلاسل',
    stringArray: 'مصفوفة السلاسل',
    stringArrayEncoding: 'ترميز مصفوفة السلاسل',
    stringArrayThreshold: 'عتبة مصفوفة السلاسل',
    transformObjectKeys: 'تحويل مفاتيح الكائنات',
    unicodeEscapeSequence: 'تسلسل الهروب يونيكود'
  },
  options: {
    low: 'منخفض',
    medium: 'متوسط',
    high: 'مرتفع',
    custom: 'مخصص',
    none: 'لا شيء',
    base64: 'Base64',
    rc4: 'RC4'
  },
  actions: {
    obfuscate: 'تعتيم',
    deobfuscate: 'إزالة التعتيم',
    validate: 'التحقق من الصحة',
    reset: 'إعادة تعيين'
  },
  messages: {
    obfuscating: 'جاري التعتيم...',
    obfuscated: 'تم التعتيم بنجاح',
    deobfuscated: 'تمت إزالة التعتيم بنجاح',
    validated: 'الكود صالح',
    invalid: 'الكود غير صالح',
    error: 'خطأ: {message}',
    copied: 'تم النسخ إلى الحافظة',
    downloaded: 'تم التحميل بنجاح',
    shared: 'تم إنشاء رابط المشاركة',
    empty: 'الرجاء إدخال كود JavaScript',
    tooLarge: 'الكود كبير جداً (الحد الأقصى: {max} حرف)',
    invalidFile: 'ملف غير صالح',
    processing: 'جاري المعالجة...'
  },
  warnings: {
    performance: 'تحذير: قد يؤثر التعتيم على أداء الكود',
    compatibility: 'تحذير: قد لا يعمل الكود المشوش في بعض المتصفحات القديمة',
    size: 'تحذير: سيزداد حجم الكود بعد التعتيم',
    debugging: 'تحذير: سيكون من الصعب تصحيح الكود المشوش'
  },
  article: {
    title: 'دليل شامل لتعتيم كود JavaScript',
    intro: {
      title: 'ما هو تعتيم JavaScript ولماذا تحتاجه؟',
      p1: 'تعتيم JavaScript هو تقنية لحماية كود JavaScript الخاص بك من خلال جعله صعب القراءة والفهم. يستخدم مجموعة من التقنيات مثل إعادة تسمية المتغيرات، وتشفير السلاسل، وتسطيح تدفق التحكم لجعل الكود أصعب في العكس الهندسي.',
      p2: 'في حين أن التعتيم لا يمكن أن يحمي كودك بشكل كامل، فإنه يوفر طبقة إضافية من الأمان ضد النسخ غير المصرح به والتلاعب. هذا مهم بشكل خاص للتطبيقات التي تحتوي على منطق أعمال حساس أو خوارزميات ملكية.',
      p3: 'مع مشوش JavaScript الخاص بنا، يمكنك تخصيص مستوى التعتيم وفقاً لاحتياجاتك. من التعتيم البسيط إلى الحماية المتقدمة، لديك تحكم كامل في كيفية حماية كودك.'
    },
    features: {
      title: 'الميزات الرئيسية لمشوش JavaScript',
      feature1: {
        title: 'تعتيم متقدم',
        description: 'يستخدم مشوشنا مجموعة من تقنيات التعتيم المتقدمة، بما في ذلك تسطيح تدفق التحكم، وحقن الكود الميت، وتشفير السلاسل.'
      },
      feature2: {
        title: 'خيارات تخصيص متقدمة',
        description: 'قم بتخصيص كل جانب من جوانب التعتيم، من مستوى الحماية إلى تقنيات التشفير المستخدمة.'
      },
      feature3: {
        title: 'حماية التصحيح',
        description: 'يمنع مشوشنا استخدام أدوات التصحيح مثل وحدة تحكم المتصفح، مما يجعل من الصعب عكس هندسة الكود.'
      },
      feature4: {
        title: 'قفل النطاق',
        description: 'يمكنك تحديد النطاقات التي يمكن تشغيل الكود المشوش عليها، مما يضيف طبقة إضافية من الحماية.'
      }
    },
    bestPractices: {
      title: 'أفضل الممارسات لتعتيم JavaScript',
      practice1: {
        title: 'اختر مستوى التعتيم المناسب',
        description: 'لا تستخدم دائماً أعلى مستوى من التعتيم. اختر المستوى الذي يوازن بين الأمان والأداء.'
      },
      practice2: {
        title: 'اختبر الكود المشوش',
        description: 'تأكد من اختبار الكود المشوش بدقة للتأكد من أنه يعمل كما هو متوقع في جميع المتصفحات المستهدفة.'
      },
      practice3: {
        title: 'احتفظ بنسخة غير مشوشة',
        description: 'احتفظ دائماً بنسخة غير مشوشة من الكود للصيانة والتصحيح.'
      },
      practice4: {
        title: 'استخدم معايير أمان إضافية',
        description: 'لا تعتمد على التعتيم وحده للحماية. استخدمه كجزء من استراتيجية أمان شاملة.'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة حول تعتيم JavaScript',
      q1: {
        question: 'هل يمكن عكس التعتيم؟',
        answer: 'نعم، يمكن عكس التعتيم، لكن مستوى الصعوبة يعتمد على تقنيات التعتيم المستخدمة. التعتيم المتقدم يجعل العكس الهندسي أكثر صعوبة ولكنه ليس مستحيلاً.'
      },
      q2: {
        question: 'كيف يؤثر التعتيم على أداء الكود؟',
        answer: 'يمكن أن يؤثر التعتيم على أداء الكود، خاصة عند استخدام تقنيات متقدمة مثل تسطيح تدفق التحكم وحقن الكود الميت. ومع ذلك، يمكن تقليل التأثير من خلال اختيار إعدادات التعتيم المناسبة.'
      },
      q3: {
        question: 'هل يمكنني استخدام التعتيم مع أطر العمل الحديثة؟',
        answer: 'نعم، يمكن استخدام التعتيم مع أطر العمل الحديثة مثل React وVue وAngular. ومع ذلك، قد تحتاج إلى تكوين خاص لبعض الميزات.'
      },
      q4: {
        question: 'كيف أختار إعدادات التعتيم المناسبة؟',
        answer: 'يعتمد اختيار إعدادات التعتيم على احتياجاتك الخاصة. فكر في مستوى الحماية المطلوب، ومتطلبات الأداء، وتوافق المتصفح عند اختيار الإعدادات.'
      }
    },
    relatedTools: {
      title: 'أدوات ذات صلة',
      tool1: {
        name: 'مشفر Base64',
        url: 'https://www.ufreetools.com/tool/base64-encoder',
        description: 'تشفير وفك تشفير البيانات باستخدام Base64.'
      },
      tool2: {
        name: 'مشفر URL',
        url: 'https://www.ufreetools.com/tool/url-encoder',
        description: 'تشفير وفك تشفير عناوين URL.'
      },
      tool3: {
        name: 'مشفر HTML',
        url: 'https://www.ufreetools.com/tool/html-encoder',
        description: 'تشفير وفك تشفير كود HTML.'
      }
    }
  }
}; 