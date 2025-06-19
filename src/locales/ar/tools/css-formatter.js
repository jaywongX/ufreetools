export default {
  name: 'منسق CSS',
  description: 'تنسيق وتحسين كود CSS لزيادة قابلية القراءة',
  options: {
    indentSize: 'حجم المسافة البادئة',
    indentWithTabs: 'استخدام علامات التبويب للمسافة البادئة',
    convertQuotes: 'تحويل علامات الاقتباس',
    sortSelectors: 'ترتيب المحددات',
    sortProperties: 'ترتيب الخصائص',
    compressColors: 'ضغط قيم الألوان',
    expandShorthand: 'توسيع الخصائص المختصرة'
  },
  actions: {
    format: 'تنسيق CSS',
    minify: 'ضغط',
    clear: 'مسح',
    copy: 'نسخ',
    download: 'تنزيل',
    upload: 'رفع ملف'
  },
  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    formatSuccess: 'تم تنسيق CSS بنجاح',
    formatError: 'حدث خطأ أثناء تنسيق CSS',
    invalidCss: 'صيغة CSS غير صالحة'
  }
}; 