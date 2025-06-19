export default {
  name: 'منسق الكود',
  description: 'تنسيق وتحسين الكود باستخدام التظليل النحوي والمسافات البادئة',
  languages: {
    title: 'اللغة',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: 'تحسين',
    minify: 'تصغير',
    clear: 'مسح',
    copy: 'نسخ',
    download: 'تنزيل',
    upload: 'رفع ملف'
  },
  options: {
    title: 'الخيارات',
    indentSize: 'حجم المسافة البادئة',
    indentWith: 'نوع المسافة البادئة',
    spaces: 'مسافات',
    tabs: 'علامات التبويب',
    lineBreaks: 'نمط السطر الجديد',
    quoteStyle: 'نمط علامات الاقتباس',
    bracketStyle: 'نمط الأقواس',
    preserveNewlines: 'الحفاظ على الأسطر الجديدة',
    endWithNewline: 'إنهاء بسطر جديد',
    removeComments: 'إزالة التعليقات',
    wrapLineLength: 'طول السطر',
    lineNumbers: 'أرقام الأسطر',
    showLineNumbers: 'إظهار أرقام الأسطر',
    wrapLines: 'التفاف تلقائي للأسطر',
    theme: 'المظهر',
    autoDetect: 'كشف تلقائي',
    tryAutoDetect: 'محاولة الكشف التلقائي للغة'
  },
  input: {
    title: 'الإدخال',
    placeholder: 'الصق الكود الخاص بك هنا...'
  },
  output: {
    title: 'الإخراج',
    placeholder: 'سيظهر الكود المحسن هنا...'
  },
  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    beautifySuccess: 'تم تحسين الكود بنجاح',
    minifySuccess: 'تم تصغير الكود بنجاح',
    beautifyError: 'حدث خطأ أثناء تحسين الكود',
    minifyError: 'حدث خطأ أثناء تصغير الكود',
    emptyCode: 'الرجاء إدخال الكود المراد تحسينه',
    fileTooBig: 'الملف كبير جداً (الحد الأقصى 2 ميجابايت)',
    invalidFile: 'نوع ملف غير صالح أو غير مدعوم',
    preview: 'معاينة',
    HTMLCode: 'كود HTML'
  },
  stats: {
    original: 'الأصلي',
    beautified: 'بعد التحسين',
    minified: 'بعد التصغير',
    size: 'الحجم',
    characters: 'الأحرف',
    lines: 'الأسطر'
  },
  tips: {
    title: 'نصائح الاستخدام',
    tip1: 'اختر لغة البرمجة المناسبة للحصول على أفضل تأثير للتظليل النحوي',
    tip2: 'يمكنك اختيار أنماط مظهر مختلفة لتتناسب مع تصميم موقعك',
    tip3: 'انسخ كود HTML المُنشأ، يمكن لصقه مباشرة في محرر أو موقع يدعم HTML',
    tip4: 'الكود المظلل المُنشأ يدعم الوضع التكيفي والوضع الداكن',
    tip5: 'إضافة أرقام الأسطر عند عرض الكود يحسن القراءة وسهولة الإشارة'
  }
}; 