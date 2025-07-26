export default {
  name: 'حاسبة HMAC',
  description: 'حساب رمز المصادقة HMAC (رمز المصادقة القائم على التجزئة) للبيانات',
  title: 'أداة حساب رمز المصادقة HMAC',
  intro: 'إنشاء رموز المصادقة باستخدام المفتاح، مع دعم خوارزميات التجزئة المتعددة وتنسيقات الإخراج',

  input: {
    title: 'الإدخال',
    message: 'الرسالة',
    messagePlaceholder: 'أدخل الرسالة للمصادقة',
    key: 'المفتاح',
    keyLabel: 'المفتاح (Secret Key)',
    keyPlaceholder: 'أدخل مفتاح HMAC',
    messageLabel: 'الرسالة (Message)',
    messageLongPlaceholder: 'أدخل الرسالة لحساب HMAC',
    file: 'ملف',
    text: 'نص',
    fileSelect: 'اختر ملف',
    fileDrop: 'أو اسحب وأفلت الملف هنا',
    fileSelected: 'تم اختيار الملف: {name}',
    clearFile: 'مسح الملف',
    encoding: 'ترميز الإدخال',
    keyEncoding: 'ترميز المفتاح',
    outputFormat: 'تنسيق الإخراج',
    inputType: 'نوع الإدخال',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'سداسي',
    binary: 'ثنائي',
    calculate: 'حساب HMAC',
    calculating: 'جاري الحساب...',
    clear: 'مسح الكل'
  },

  algorithms: {
    title: 'الخوارزميات',
    label: 'خوارزمية التجزئة',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'نتيجة HMAC',
    digest: 'ملخص HMAC',
    outputLabel: 'نتيجة HMAC',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    noResult: 'أدخل الرسالة والمفتاح لحساب HMAC',
    calculating: 'جاري الحساب...',
    placeholder: 'ستظهر نتيجة HMAC هنا',
    useExample: 'استخدام مثال',
    jsExample: 'مثال JavaScript:',
  },

  validation: {
    title: 'التحقق من HMAC',
    hmacToVerify: 'HMAC للتحقق',
    verifyPlaceholder: 'أدخل HMAC للتحقق',
    verify: 'التحقق من HMAC',
    valid: 'HMAC صالح',
    invalid: 'HMAC غير صالح',
    verifying: 'جاري التحقق...'
  },

  options: {
    title: 'الخيارات',
    uppercase: 'إخراج بحروف كبيرة',
    showDetails: 'عرض التفاصيل التقنية',
    autoUpdate: 'تحديث تلقائي',
    truncate: 'تقصير الإخراج',
    truncateLength: 'طول التقصير'
  },

  details: {
    title: 'التفاصيل التقنية',
    algorithm: 'الخوارزمية',
    keyLength: 'طول المفتاح',
    blockSize: 'حجم الكتلة',
    outputLength: 'طول الإخراج',
    execution: 'وقت التنفيذ',
    ms: 'مللي ثانية'
  },

  messages: {
    noMessage: 'الرجاء إدخال رسالة',
    noKey: 'الرجاء إدخال مفتاح',
    invalidEncoding: 'تنسيق الترميز غير صالح',
    processingError: 'خطأ في المعالجة: {error}',
    success: 'تم حساب HMAC بنجاح',
    invalidKey: 'تنسيق المفتاح غير صالح للتشفير المحدد',
    fileTooBig: 'الملف كبير جدًا. الحد الأقصى للحجم هو 5 ميجابايت',
    copied: 'تم النسخ إلى الحافظة',
    copyFailed: 'فشل النسخ، يرجى النسخ يدويًا',
    invalidHex: 'المفتاح ليس بتنسيق سداسي صالح',
    invalidBase64: 'المفتاح ليس بتنسيق Base64 صالح',
  },

  security: {
    title: 'ملاحظات أمنية',
    keyStorage: 'لا تشارك مفتاحك أبدًا',
    keyStrength: 'استخدم مفاتيح قوية وفريدة لكل تطبيق',
    recommendation: 'للتطبيقات الحساسة أمنيًا، استخدم HMAC-SHA256 على الأقل',
    warning: 'قد لا يكون HMAC-MD5 و HMAC-SHA1 مناسبين للتطبيقات عالية الأمان'
  }
}; 