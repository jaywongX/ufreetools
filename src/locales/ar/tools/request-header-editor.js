export default {
  name: 'محرر رؤوس HTTP',
  description: 'إنشاء وتحرير واختبار رؤوس طلبات HTTP',

  editor: {
    title: 'محرر الرؤوس',
    headers: 'رؤوس الطلب',
    add: 'إضافة رأس',
    bulk: 'تحرير جماعي',
    import: 'استيراد الرؤوس',
    export: 'تصدير الرؤوس',
    clear: 'مسح الكل',
    importError: 'خطأ في الاستيراد'
  },

  header: {
    name: 'اسم الرأس',
    value: 'القيمة',
    description: 'الوصف',
    namePlaceholder: 'أدخل اسم الرأس',
    valuePlaceholder: 'أدخل قيمة الرأس',
    actions: 'الإجراءات',
    enabled: 'مفعل',
    duplicate: 'نسخ',
    delete: 'حذف',
    noHeaders: 'لا توجد رؤوس طلب، انقر على زر "إضافة" أو قم بتحميل قالب للبدء',
    bulkPlaceholder: 'الصق رؤوس الطلب، التنسيق: \'الاسم: القيمة\'، سطر واحد لكل رأس، أو الصق نص رؤوس الطلب الخام'
  },

  presets: {
    title: 'القوالب',
    save: 'حفظ الحالي',
    load: 'تحميل قالب',
    delete: 'حذف قالب',
    presetName: 'اسم القالب',
    namePlaceholder: 'أدخل اسم القالب',
    confirmDelete: 'هل أنت متأكد من حذف هذا القالب؟',
    common: 'رؤوس شائعة',
    custom: 'قوالب مخصصة'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: 'اختبار الرؤوس',
    url: 'URL',
    urlPlaceholder: 'أدخل URL لاختبار الرؤوس',
    method: 'الطريقة',
    send: 'إرسال الطلب',
    response: 'الاستجابة'
  },

  response: {
    title: 'الاستجابة',
    status: 'الحالة',
    headers: 'رؤوس الاستجابة',
    body: 'المحتوى',
    time: 'الوقت',
    size: 'الحجم',
    loading: 'جاري التحميل...',
    noResponse: 'أضف رؤوس طلب لرؤية المعاينة',
    headerCount: 'رؤوس الطلب'
  },

  options: {
    title: 'خيارات',
    followRedirects: 'متابعة إعادة التوجيه',
    timeout: 'الوقت المحدد (بالثواني)',
    validateSSL: 'التحقق من شهادة SSL',
    sendCredentials: 'إرسال بيانات الاعتماد'
  },

  formats: {
    title: 'تنسيقات التصدير',
    raw: 'نص خام',
    json: 'JSON',
    curl: 'أمر cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'دليل الرؤوس',
    description: 'تعرف على رؤوس HTTP الشائعة واستخداماتها',
    securityHeaders: 'رؤوس الأمان',
    cachingHeaders: 'رؤوس التخزين المؤقت',
    corsHeaders: 'رؤوس CORS',
    authenticationHeaders: 'رؤوس المصادقة',
    commonValues: 'القيم الشائعة'
  },

  actions: {
    copy: 'نسخ',
    format: 'تنسيق',
    validate: 'تحقق',
    clear: 'مسح'
  },

  messages: {
    headerAdded: 'تمت إضافة الرأس',
    headerDeleted: 'تم حذف الرأس',
    headersCleared: 'تم مسح جميع الرؤوس',
    presetSaved: 'تم حفظ القالب',
    presetLoaded: 'تم تحميل القالب',
    presetDeleted: 'تم حذف القالب',
    requestSent: 'تم إرسال الطلب',
    requestFailed: 'فشل الطلب: {error}',
    copied: 'تم النسخ إلى الحافظة',
    importSuccess: 'تم استيراد الرؤوس بنجاح',
    exportSuccess: 'تم تصدير الرؤوس بنجاح',
    invalidUrl: 'رابط غير صالح',
    pleaseEnterHeader: 'الرجاء إدخال نص الرأس',
    invalidHeader: 'تعذر تحليل أي رؤوس طلب صالحة، يرجى استخدام تنسيق \'الاسم: القيمة\'',
    invalidHeaderName: 'اسم رأس غير صالح: {error}',
    copyFailed: 'فشل النسخ، يرجى النسخ يدويًا'
  }
};