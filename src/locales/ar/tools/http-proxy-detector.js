export default {
  name: 'كاشف الوكيل HTTP',
  description: 'كشف وتحليل الوكيل HTTP والأجهزة الوسيطة في الاتصال',
  title: 'كاشف الوكيل الأمامي',
  intro: 'اكتشف ما إذا كان اتصال الشبكة الخاص بك يستخدم وكيلاً، وقم بتحليل رأس X-Forwarded-For وغيرها من رؤوس HTTP المتعلقة بالوكيل',

  detection: {
    title: 'كشف الوكيل',
    start: 'بدء الكشف',
    detecting: 'جاري الكشف...',
    stop: 'إيقاف الكشف',
    completed: 'اكتمل الكشف',
    noProxies: 'لم يتم اكتشاف أي وكلاء',
    proxiesFound: 'تم اكتشاف الوكلاء: {count}'
  },

  options: {
    title: 'خيارات الكشف',
    testUrl: 'رابط الاختبار',
    urlPlaceholder: 'أدخل رابط الاختبار (افتراضي: تلقائي)',
    testMethod: 'طريقة HTTP',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'المهلة (بالثواني)',
    parallel: 'اختبار متوازي',
    techniques: 'تقنيات الكشف',
    headerAnalysis: 'تحليل الرؤوس',
    traceMethod: 'طريقة TRACE',
    viaHeader: 'فحص رأس Via',
    maxForwards: 'اختبار Max-Forwards',
    fingerprinting: 'بصمة الوكيل',
    timing: 'تحليل التوقيت',
    advanced: 'خيارات متقدمة',
    apiSelection: 'اختيار API'
  },

  apis: {
    ipify: 'ipify API',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: 'نتائج الكشف',
    summary: 'ملخص الوكيل',
    headers: 'رؤوس الطلب الكاملة',
    info: 'شرح معلومات الوكيل',
    detected: 'تم اكتشاف وكيل',
    notDetected: 'لم يتم اكتشاف وكيل',
    detectedDescription: 'يبدو أن طلبك مر عبر خادم وكيل واحد أو أكثر',
    notDetectedDescription: 'يبدو أن طلبك وصل مباشرة إلى الخادم الهدف دون المرور عبر وكيل',
    clientInfo: 'معلومات IP العميل',
    remoteIp: 'عنوان IP البعيد',
    location: 'الموقع الجغرافي',
    isp: 'مزود خدمة الإنترنت',
    proxyHeaders: 'رؤوس متعلقة بالوكيل',
    details: 'نتائج مفصلة',
    proxy: 'الوكيل',
    type: 'النوع',
    ip: 'عنوان IP',
    software: 'البرنامج',
    confidence: 'مستوى الثقة',
    latency: 'زمن الوصول',
    headers: 'الرؤوس المعدلة',
    fingerprint: 'البصمة',
    export: 'تصدير النتائج',
    clear: 'مسح النتائج',
    noData: 'لا توجد بيانات متاحة',
    originalRequest: 'طلب أصلي',
    modifiedRequest: 'طلب معدل',
    proxyChain: 'سلسلة الوكلاء',
    server: 'الخادم',
    notSet: 'غير مضبوط'
  },

  types: {
    forward: 'وكيل أمامي',
    reverse: 'وكيل خلفي',
    transparent: 'وكيل شفاف',
    anonymous: 'وكيل مجهول',
    elite: 'وكيل عالي الخصوصية',
    caching: 'وكيل تخزين مؤقت',
    gateway: 'بوابة',
    loadBalancer: 'موزع حمل',
    cdn: 'شبكة توصيل المحتوى',
    corporate: 'وكيل شركة',
    unknown: 'نوع غير معروف'
  },

  headers: {
    title: 'تحليل الرؤوس',
    original: 'رؤوس أصلية',
    modified: 'رؤوس معدلة',
    added: 'رؤوس مضافة',
    removed: 'رؤوس محذوفة',
    changed: 'رؤوس متغيرة',
    suspicious: 'رؤوس مشبوهة',
    select: 'اختر الرؤوس لتحليلها',
    name: 'اسم الرأس',
    value: 'القيمة',
    all: 'جميع رؤوس HTTP',
    notFound: 'لم يتم العثور على هذا الرأس'
  },

  details: {
    title: 'تفاصيل الوكيل',
    software: 'البرنامج',
    version: 'الإصدار',
    features: 'الميزات',
    modifications: 'التعديلات',
    behavior: 'السلوك',
    security: 'التأثير الأمني',
    recommendations: 'التوصيات'
  },

  map: {
    title: 'خريطة الاتصال',
    client: 'عميلك',
    target: 'الخادم الهدف',
    hop: 'قفزة {n}',
    direct: 'اتصال مباشر',
    proxied: 'اتصال عبر وكيل',
    unknown: 'مسار غير معروف'
  },

  actions: {
    copyHeaders: 'نسخ رؤوس الطلب',
    copyToClipboard: 'نسخ إلى الحافظة'
  },

  messages: {
    startDetection: 'بدء كشف الوكيل...',
    detectionComplete: 'اكتمل كشف الوكيل',
    error: 'فشل الكشف: {message}',
    timeout: 'انتهت مهلة الكشف',
    exportComplete: 'تم تصدير النتائج بنجاح',
    noConnection: 'تعذر إنشاء الاتصال',
    limitedResults: 'نتائج محدودة بسبب القيود',
    privateNetwork: 'تم اكتشاف شبكة خاصة',
    publicNetwork: 'تم اكتشاف شبكة عامة',
    warning: 'تحذير: {message}',
    proxyRemoved: 'قد يكون هناك وكيل يزيل رؤوس الكشف',
    copied: 'تم نسخ رؤوس الطلب إلى الحافظة',
    copyFailed: 'فشل النسخ، يرجى النسخ يدوياً',
    unknown: 'خطأ غير معروف'
  },

  info: {
    description: 'الوكلاء HTTP هي خوادم وسيطة تقع بين العميل والخادم، ويمكنها معالجة طلبات HTTP لأغراض مختلفة. يمكن إعداد الوكلاء من قبل مزودي الشبكة أو المنظمات أو الشركات أو الأفراد.'
  },

  xff: {
    title: 'ما هو X-Forwarded-For؟',
    description: 'X-Forwarded-For (XFF) هو حقل رأس HTTP يستخدم لتحديد عنوان IP الأصلي للعميل الذي يتصل بخادم الويب عبر وكيل HTTP أو موزع حمل. عندما يمر الطلب عبر وكيل، عادةً ما يرى الخادم فقط عنوان IP لخادم الوكيل، بينما يوفر رأس XFF طريقة لتتبع عنوان IP الأصلي للعميل.',
    notFound: 'لم يتم العثور على رأس X-Forwarded-For، مما يشير إلى أن الطلب ربما لم يمر عبر وكيل أو أن الوكيل لم يضف هذا الرأس.',
    format: {
      title: 'تنسيق رأس XFF',
      description: 'التنسيق القياسي لرأس XFF هو قائمة عناوين IP مفصولة بفواصل، حيث يكون عنوان IP الأيسر هو العميل الأصلي والعناوين اللاحقة هي خوادم الوكيل التي مر بها الطلب:'
    },
    related: {
      title: 'رؤوس الوكيل الأخرى ذات الصلة',
      forwardedProto: 'يحدد البروتوكول الذي استخدمه العميل للاتصال بالوكيل (HTTP أو HTTPS)',
      forwardedHost: 'يحدد اسم المضيف الأصلي الذي طلبه العميل',
      via: 'يشير إلى خوادم الوكيل التي مر بها الطلب والاستجابة',
      forwarded: 'رأس معياري أحدث يحتوي على معلومات العميل وجميع الوكلاء'
    },
    importance: {
      title: 'لماذا تعتبر معلومات الوكيل مهمة',
      security: 'الأمان وضوابط الوصول - تحديد عنوان IP الحقيقي للعميل مهم لمنع إساءة الاستخدام وتنفيذ ضوابط الوصول بناءً على IP',
      logging: 'تسجيل الأحداث - لتقييم الأحداث وتشخيص المشكلات، يكون تسجيل عنوان IP الحقيقي للعميل أكثر فائدة من عنوان IP الوكيل',
      geolocation: 'خدمات الموقع الجغرافي - تحتاج خدمات الموقع الجغرافي بناءً على IP إلى عنوان IP الحقيقي للعميل لتقديم نتائج دقيقة',
      content: 'تخصيص المحتوى - تقدم بعض الخدمات محتوى محلياً بناءً على موقع المستخدم الجغرافي'
    },
    security: {
      title: 'اعتبارات الأمان',
      description: 'من المهم ملاحظة أنه يمكن تزوير رأس X-Forwarded-For من قبل العميل. في البيئات ذات متطلبات الأمان العالية، يجب الوثوق فقط بمعلومات XFF المضافة من قبل خوادم الوكيل المعروفة، أو استخدام طرق أخرى للتحقق من عنوان IP للعميل.'
    }
  },

  privacy: {
    title: 'نصائح الخصوصية',
    description: 'خلال عملية الكشف، سيتم إرسال عنوان IP الخاص بك ورؤوس HTTP إلى خدمات API طرف ثالث للتحليل. قد تقوم هذه الخدمات بجمع وتخزين هذه المعلومات لتقديم الخدمة.',
    suggestion: 'إذا كانت لديك مخاوف بشأن الخصوصية، يرجى اختيار موفر API مختلف أو النظر في استخدام خدمة VPN.'
  }
};