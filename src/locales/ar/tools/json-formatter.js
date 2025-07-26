export default {
  name: 'منسق JSON',
  description: 'أداة تنسيق وتحقق من JSON عبر الإنترنت، تدعم الضغط والتحسين',

  options: {
    indent: 'المسافة البادئة',
    sort: 'ترتيب المفاتيح',
    compress: 'ضغط',
    beautify: 'تحسين'
  },

  actions: {
    format: 'تنسيق JSON',
    compress:'ضغط',
    clear: 'مسح',
    copy: 'نسخ',
    download: 'تنزيل',
    transferMeaning: 'تهريب',
    contraposition: 'إلغاء التهريب'
  },

  messages: {
    invalidJson: 'بناء JSON غير صالح',
    copied: 'تم النسخ إلى الحافظة!',
    empty: 'الرجاء إدخال محتوى JSON',
    formatTip: 'عرض قائمة الخصائص بعد تنسيق أو ضغط JSON',
    formatSuccess: 'تم تنسيق JSON بنجاح',
    compressSuccess: 'تم ضغط JSON بنجاح',
    escapeSuccess: 'تم تهريب JSON بنجاح',
    unescapeSuccess: 'تم إلغاء تهريب JSON بنجاح',
    copyFailed: 'فشل النسخ، يرجى النسخ يدويًا'
  },

  labels: {
    jsonData: 'بيانات JSON',
    propertyList: 'قائمة الخصائص',
    clickToCopy: '(انقر على القيمة للنسخ)'
  },

  placeholders: {
    jsonInput: 'الصق بيانات JSON الخاصة بك...'
  }
};