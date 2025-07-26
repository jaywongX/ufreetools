export default {
  name: 'مُنسق XML',
  description: 'تنسيق، تجميل والتحقق من صحة مستندات XML',

  options: {
    indentSize: 'حجم المسافة البادئة',
    useTabs: 'استخدام علامات الجدولة',
    collapseContent: 'طي المحتوى',
    maxLineWidth: 'أقصى عرض للسطر',
    indentAttributes: 'إضافة مسافة بادئة للسمات',
    sortAttributes: 'ترتيب السمات',
    newlineAfterPI: 'سطر جديد بعد تعليمات المعالجة',
    operationType: 'نوع العملية',
    indentSettings: 'إعدادات المسافة البادئة',
    displayOptions: 'خيارات العرض',
    showLineNumbers: 'عرض أرقام الأسطر'
  },

  indentOptions: {
    twoSpaces: 'مسافتان',
    fourSpaces: '4 مسافات',
    tabIndent: 'علامة جدولة'
  },

  actions: {
    format: 'تنسيق XML',
    minify: 'ضغط XML',
    validate: 'التحقق من الصحة',
    toJSON: 'تحويل إلى JSON',
    copy: 'نسخ',
    clear: 'مسح',
    download: 'تنزيل',
    upload: 'رفع XML',
    beautify: 'تجميل',
    copyCode: 'نسخ الكود'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    formatSuccess: 'تم تنسيق XML بنجاح',
    formatError: 'حدث خطأ أثناء تنسيق XML',
    validXml: 'XML صالح',
    invalidXml: 'XML غير صالح: {0}',
    lineCol: 'السطر {line}، العمود {col}',
    minifySuccess: 'تم ضغط XML بنجاح',
    conversionSuccess: 'تم التحويل بنجاح',
    conversionError: 'حدث خطأ أثناء التحويل',
    pleaseEnterXml: 'الرجاء إدخال محتوى XML',
    processingError: 'حدث خطأ أثناء معالجة XML: {0}',
    formatResult: 'نتيجة التنسيق',
    characterCount: 'عدد الأحرف: {0}',
    lineCount: 'عدد الأسطر: {0}',
    characterAndLineCount: 'عدد الأحرف: {0} | عدد الأسطر: {1}'
  },

  input: {
    xmlInput: 'إدخال XML',
    placeholder: 'الصق أو أدخل XML هنا...'
  },

  examples: {
    title: 'أمثلة XML',
    description: 'انقر لتحميل مثال:',
    simpleXml: 'XML بسيط',
    bookstore: 'كتالوج متجر الكتب',
    complexXml: 'XML معقد'
  }
};