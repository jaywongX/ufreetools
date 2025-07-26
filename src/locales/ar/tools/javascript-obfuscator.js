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
  }
}; 