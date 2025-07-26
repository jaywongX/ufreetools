export default {
  name: 'اختبار سرعة الشبكة',
  description: 'قياس سرعة الإنترنت وتشخيص مشاكل الاتصال',

  input: {
    title: 'إعدادات الاختبار',
    server: 'الخادم',
    autoSelect: 'اختيار تلقائي',
    custom: 'مخصص',
    protocol: 'البروتوكول',
    http: 'HTTP',
    https: 'HTTPS',
    duration: 'مدة الاختبار',
    short: 'قصير (10 ثواني)',
    medium: 'متوسط (30 ثانية)',
    long: 'طويل (60 ثانية)',
    custom: 'مخصص'
  },

  output: {
    title: 'نتائج الاختبار',
    download: 'التحميل',
    upload: 'الرفع',
    ping: 'زمن الاستجابة',
    jitter: 'التذبذب',
    packetLoss: 'فقدان الحزم',
    latency: 'زمن الوصول',
    server: 'الخادم',
    location: 'الموقع',
    isp: 'مزود الخدمة',
    ip: 'عنوان IP',
    timestamp: 'الطابع الزمني'
  },

  settings: {
    title: 'إعدادات الاختبار',
    showGraph: 'إظهار الرسم البياني',
    showDetails: 'إظهار التفاصيل',
    showHistory: 'إظهار السجل',
    autoSave: 'حفظ تلقائي',
    notifications: 'الإشعارات',
    darkMode: 'الوضع الداكن',
    language: 'اللغة'
  },

  actions: {
    start: 'بدء',
    stop: 'إيقاف',
    reset: 'إعادة تعيين',
    share: 'مشاركة',
    export: 'تصدير',
    history: 'السجل'
  },

  messages: {
    starting: 'جاري بدء الاختبار...',
    running: 'جاري الاختبار...',
    completed: 'تم الاختبار بنجاح',
    error: 'خطأ: {message}',
    shared: 'تم المشاركة بنجاح',
    exported: 'تم التصدير بنجاح',
    saved: 'تم الحفظ بنجاح',
    empty: 'الرجاء إدخال إعدادات الاختبار',
    invalid: 'إعدادات غير صالحة',
    processing: 'جاري المعالجة...'
  },

  errors: {
    invalidServer: 'خادم غير صالح',
    invalidProtocol: 'بروتوكول غير صالح',
    invalidDuration: 'مدة غير صالحة',
    connectionError: 'خطأ في الاتصال',
    testError: 'خطأ في الاختبار',
    shareError: 'خطأ في المشاركة',
    exportError: 'خطأ في التصدير'
  }
}; 