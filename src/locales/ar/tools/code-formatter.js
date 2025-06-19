export default {
  name: 'تنسيق الكود',
  description: 'تنسيق وتحسين الكود بلغات متعددة',
  languages: {
    title: 'اللغة',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: 'الخيارات',
    indent: 'المسافة البادئة',
    tabSize: 'حجم علامة التبويب',
    insertSpaces: 'إدخال مسافات',
    formatSelection: 'تنسيق التحديد',
    formatOnType: 'التنسيق أثناء الكتابة',
    removeComments: 'إزالة التعليقات',
    mangle: 'تشويش أسماء المتغيرات',
    lineBreak: 'نمط السطر الجديد'
  },
  actions: {
    beautify: 'تحسين',
    minify: 'ضغط',
    format: 'تنسيق',
    copy: 'نسخ النتيجة',
    clear: 'مسح',
    download: 'تنزيل',
    paste: 'لصق من الحافظة',
    loadSample: 'تحميل كود نموذجي'
  },
  messages: {
    formatSuccess: 'تم تنسيق الكود بنجاح',
    formatError: 'حدث خطأ أثناء تنسيق الكود',
    copied: 'تم النسخ إلى الحافظة!',
    languageChangeWarning: 'تغيير اللغة سيؤدي إلى إعادة تعيين الكود الخاص بك. هل تريد المتابعة؟'
  },
  errors: {
    emptyCode: 'الرجاء إدخال الكود المراد تنسيقه',
    invalidJson: 'JSON غير صالح',
    jsCompressionError: 'خطأ في ضغط JavaScript'
  },
  input: 'الإدخال',
  output: 'الإخراج',
  placeholders: {
    input: 'الصق الكود الخاص بك هنا...',
    output: 'سيظهر الكود المنسق هنا...'
  },
  characters: 'الأحرف',
  space: 'مسافة',
  spaces: 'مسافات',
  auto: 'تلقائي',
  tips: {
    title: 'نصائح الاستخدام',
    selectLanguage: 'للحصول على أفضل نتائج التنسيق، اختر اللغة المناسبة للكود الخاص بك.',
    beautifyMinify: 'استخدم ميزة "تحسين" لجعل الكود أكثر قابلية للقراءة، واستخدم ميزة "ضغط" لتقليل حجم الملف.',
    customizeOptions: 'استخدم لوحة الإعدادات أدناه لتخصيص خيارات التنسيق.',
    keyboard: 'اضغط على مفتاح Tab في المحرر لإدخال المسافة البادئة.'
  }
}; 