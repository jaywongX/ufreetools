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
  }
}; 