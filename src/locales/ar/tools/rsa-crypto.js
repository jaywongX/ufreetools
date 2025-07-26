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
  }
}; 