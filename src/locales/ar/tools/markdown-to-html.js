export default {
  name: 'محول Markdown إلى HTML',
  description: 'تحويل مستندات Markdown إلى HTML بسهولة',

  input: {
    title: 'إدخال Markdown',
    placeholder: 'الصق محتوى Markdown هنا...',
    upload: 'رفع ملف',
    dragDrop: 'اسحب وأفلت الملف هنا أو انقر للاختيار'
  },

  output: {
    title: 'HTML الناتج',
    copy: 'نسخ',
    download: 'تحميل',
    preview: 'معاينة',
    share: 'مشاركة'
  },

  settings: {
    title: 'إعدادات التحويل',
    sanitize: 'تنظيف HTML',
    prettify: 'تنسيق HTML',
    minify: 'تصغير HTML',
    addStyles: 'إضافة أنماط CSS',
    addScripts: 'إضافة سكريبتات',
    customStyles: 'أنماط CSS مخصصة',
    customScripts: 'سكريبتات مخصصة'
  },

  actions: {
    convert: 'تحويل',
    reset: 'إعادة تعيين',
    clear: 'مسح',
    copy: 'نسخ',
    download: 'تحميل'
  },

  messages: {
    converting: 'جاري التحويل...',
    converted: 'تم التحويل بنجاح',
    error: 'خطأ: {message}',
    copied: 'تم النسخ إلى الحافظة',
    downloaded: 'تم التحميل بنجاح',
    empty: 'الرجاء إدخال محتوى Markdown',
    invalid: 'محتوى Markdown غير صالح',
    processing: 'جاري المعالجة...'
  },

  errors: {
    invalidMarkdown: 'محتوى Markdown غير صالح',
    conversionError: 'خطأ في التحويل',
    downloadError: 'خطأ في التحميل',
    copyError: 'خطأ في النسخ'
  }
}; 