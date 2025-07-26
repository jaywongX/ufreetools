export default {
  name: 'أداة تنسيق HTML',
  description: 'تنسيق وتحسين كود HTML، وتحسين قابلية القراءة',
  formatMode: 'وضع التنسيق',
  beautify: 'تحسين',
  minify: 'ضغط',
  formatOptions: 'خيارات التنسيق',
  removeComments: 'إزالة التعليقات',
  preserveComments: 'الاحتفاظ بالتعليقات',
  showLineNumbers: 'إظهار أرقام الأسطر',
  helpText: 'تساعد أداة تحسين/ضغط HTML المطورين على تنظيم أو تحسين كود HTML بسرعة، وتحسين قابلية القراءة أو تقليل حجم الملف.',
  input: 'إدخال HTML',
  inputPlaceholder: 'الصق أو أدخل كود HTML هنا...',
  examples: 'أمثلة',

  exampleNames: {
    simple: 'HTML بسيط',
    complex: 'صفحة HTML معقدة'
  },

  beautifiedResult: 'نتيجة التحسين',
  minifiedResult: 'نتيجة الضغط',

  stats: {
    chars: 'عدد الأحرف',
    lines: 'عدد الأسطر',
    reduction: 'تم تقليل {chars} حرف ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} مسافة',
    tab: 'مسافة بادئة Tab'
  },

  errorMessages: {
    emptyInput: 'الرجاء إدخال كود HTML للمعالجة',
    processingFailed: 'فشل معالجة HTML: {message}'
  },

  options: {
    indentSize: 'حجم المسافة البادئة',
    wrapLength: 'طول السطر',
    indentInnerHtml: 'مسافة بادئة للـ HTML الداخلي',
    preserveNewlines: 'الاحتفاظ بأسطر جديدة',
    maxPreserveNewlines: 'الحد الأقصى لأسطر جديدة متتالية',
    wrapAttributes: 'تفاف السمات',
    sortAttributes: 'ترتيب السمات',
    sortClassNames: 'ترتيب أسماء الفئات'
  },

  actions: {
    format: 'تنسيق HTML',
    minify: 'ضغط',
    clear: 'مسح',
    copy: 'نسخ',
    download: 'تحميل',
    upload: 'رفع ملف'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    formatSuccess: 'تم تنسيق HTML بنجاح',
    formatError: 'حدث خطأ أثناء تنسيق HTML',
    invalidHtml: 'صيغة HTML غير صالحة'
  }
}; 