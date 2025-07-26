export default {
  name: 'منسق JavaScript',
  description: 'تنسيق وتجميل كود JavaScript تلقائياً',

  input: {
    title: 'الكود المدخل',
    placeholder: 'الصق كود JavaScript هنا...',
    upload: 'رفع ملف',
    sample: 'تحميل نموذج',
    clear: 'مسح'
  },

  output: {
    title: 'الكود المنسق',
    copy: 'نسخ',
    download: 'تحميل',
    share: 'مشاركة',
    format: 'تنسيق'
  },

  settings: {
    title: 'إعدادات التنسيق',
    indentSize: 'حجم المسافة البادئة',
    indentType: 'نوع المسافة البادئة',
    spaces: 'مسافات',
    tabs: 'علامات التبويب',
    lineLength: 'طول السطر',
    wrapLines: 'تفاف الأسطر',
    semicolons: 'الفاصلة المنقوطة',
    add: 'إضافة',
    remove: 'إزالة',
    quotes: 'علامات الاقتباس',
    single: 'فردية',
    double: 'مزدوجة',
    backticks: 'علامات الاقتباس المائلة',
    bracketSpacing: 'مسافات الأقواس',
    arrowParens: 'أقواس السهم',
    trailingComma: 'الفاصلة الزائدة',
    none: 'لا شيء',
    es5: 'ES5',
    all: 'الكل',
    preserveNewlines: 'الحفاظ على الأسطر الجديدة',
    maxEmptyLines: 'الحد الأقصى للأسطر الفارغة',
    endOfLine: 'نهاية السطر',
    lf: 'LF',
    crlf: 'CRLF',
    cr: 'CR',
    auto: 'تلقائي'
  },

  actions: {
    format: 'تنسيق',
    minify: 'تصغير',
    beautify: 'تجميل',
    validate: 'التحقق من الصحة',
    reset: 'إعادة تعيين'
  },

  messages: {
    formatting: 'جاري التنسيق...',
    formatted: 'تم التنسيق بنجاح',
    minified: 'تم التصغير بنجاح',
    beautified: 'تم التجميل بنجاح',
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

  errors: {
    syntax: 'خطأ في التركيب',
    unexpected: 'رمز غير متوقع',
    missing: 'رمز مفقود',
    invalid: 'عملية غير صالحة',
    reference: 'مرجع غير معرف',
    type: 'خطأ في النوع',
    range: 'خارج النطاق',
    uri: 'URI غير صالح',
    eval: 'خطأ في التقييم'
  }
}; 