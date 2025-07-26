export default {
  name: 'محرر SQL',
  description: 'تنسيق وتحرير استعلامات SQL',

  input: {
    title: 'إدخال الاستعلام',
    query: 'الاستعلام',
    queryPlaceholder: 'أدخل استعلام SQL هنا...',
    options: {
      title: 'الخيارات',
      indent: 'المسافة البادئة',
      indentPlaceholder: 'أدخل المسافة البادئة هنا...',
      case: 'حالة الأحرف',
      upper: 'أحرف كبيرة',
      lower: 'أحرف صغيرة',
      preserve: 'حفظ الحالة',
      keywordCase: 'حالة الكلمات المفتاحية',
      keywordCasePlaceholder: 'أدخل حالة الكلمات المفتاحية هنا...',
      linesBetweenQueries: 'الأسطر بين الاستعلامات',
      linesBetweenQueriesPlaceholder: 'أدخل عدد الأسطر بين الاستعلامات هنا...'
    }
  },

  output: {
    title: 'النتيجة',
    formatted: 'الاستعلام المنسق',
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
    format: 'تنسيق',
    reset: 'إعادة تعيين',
    clear: 'مسح',
    copy: 'نسخ',
    save: 'حفظ',
    share: 'مشاركة',
    export: 'تصدير'
  },

  messages: {
    formatting: 'جاري التنسيق...',
    formatted: 'تم التنسيق بنجاح',
    error: 'خطأ: {message}',
    copied: 'تم النسخ إلى الحافظة',
    saved: 'تم الحفظ بنجاح',
    shared: 'تمت المشاركة بنجاح',
    exported: 'تم التصدير بنجاح',
    cleared: 'تم المسح بنجاح',
    reset: 'تم إعادة التعيين',
    empty: 'الرجاء إدخال الاستعلام',
    invalid: 'استعلام غير صالح'
  },

  errors: {
    invalidQuery: 'استعلام غير صالح',
    formatError: 'خطأ في التنسيق',
    saveError: 'خطأ في الحفظ',
    shareError: 'خطأ في المشاركة',
    copyError: 'خطأ في النسخ',
    exportError: 'خطأ في التصدير'
  }
}; 