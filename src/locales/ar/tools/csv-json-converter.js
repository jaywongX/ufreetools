export default {
  name: 'أداة تحويل CSV إلى JSON',
  description: 'تحويل بيانات CSV إلى تنسيق JSON مع خيارات قابلة للتخصيص',

  options: {
    delimiter: 'الفاصل',
    quote: 'حرف الاقتباس',
    header: 'السطر الأول عنوان',
    dynamicTyping: 'التحويل الديناميكي للأنواع',
    dynamicTypingDescription: 'تحويل السلاسل الرقمية إلى أرقام، وتحويل "true/false" إلى قيم منطقية، إلخ',
    skipEmptyLines: 'تخطي الأسطر الفارغة',
    comments: 'حرف التعليق',
    outputFormat: 'تنسيق الإخراج',
    indentation: 'المسافة البادئة',
    encoding: 'التشفير',
    newline: 'حرف السطر الجديد',
    title: 'خيارات التحويل'
  },

  delimiters: {
    comma: 'فاصلة (,)',
    semicolon: 'فاصلة منقوطة (;)',
    tab: 'علامة التبويب (\\t)',
    pipe: 'خط عمودي (|)',
    custom: 'مخصص'
  },

  formats: {
    array: 'مصفوفة كائنات',
    arrayOfArrays: 'مصفوفة مصفوفات',
    keyed: 'كائن مفتاحي',
    nested: 'كائن متداخل'
  },

  preview: {
    input: 'الإدخال...',
    output: 'الإخراج...',
    rawCsv: 'CSV الأصلي',
    parsedCsv: 'CSV المحلل',
    jsonOutput: 'إخراج JSON',
    firstRows: 'الأول {count} صفوف',
    showAll: 'عرض الكل'
  },

  actions: {
    convert: 'تحويل',
    copy: 'نسخ JSON',
    download: 'تنزيل JSON',
    clear: 'مسح',
    uploadCsv: 'رفع CSV',
    swap: 'تبديل الإدخال/الإخراج',
    loadExample: 'تحميل مثال',
    clearInput: 'مسح الإدخال',
    formatOutput: 'تنسيق الإخراج',
    copyResult: 'نسخ النتيجة',
    downloadResult: 'تنزيل النتيجة',
    paste: 'لصق',
    showOptions: 'إظهار الخيارات',
    hideOptions: 'إخفاء الخيارات',
    uploadJson: 'رفع JSON'
  },

  results: {
    rowsProcessed: 'تمت معالجة {count} صفوف',
    conversionComplete: 'اكتمل التحويل',
    copied: 'تم النسخ إلى الحافظة',
    downloaded: 'تم التنزيل',
    error: 'خطأ'
  },

  errors: {
    noData: 'لا توجد بيانات CSV للتحويل',
    invalidCsv: 'تنسيق CSV غير صالح',
    parsingFailed: 'فشل التحليل: {error}',
    missingHeader: 'سطر العنوان مفقود',
    invalidJson: 'تنسيق JSON غير صالح',
    formatFailed: 'فشل التنسيق: {error}',
    copyFailed: 'فشل النسخ، يرجى النسخ يدوياً',
    downloadFailed: 'فشل التنزيل',
    pasteError: 'لا يمكن اللصق من الحافظة',
    conversionFailed: 'فشل التحويل'
  },

  conversion: {
    title: 'اتجاه التحويل',
    csvToJson: {
      title: 'تحويل CSV إلى JSON',
      delimiterLabel: 'الفاصل',
      headerLabel: 'السطر الأول عنوان',
      dynamicTypingLabel: 'استنتاج نوع البيانات تلقائياً',
      skipEmptyLinesLabel: 'تخطي الأسطر الفارغة',
      convertButton: 'تحويل CSV إلى JSON'
    },
    jsonToCsv: {
      title: 'تحويل JSON إلى CSV',
      delimiterLabel: 'الفاصل',
      headerLabel: 'تضمين سطر العنوان',
      quotesLabel: 'إضافة علامات اقتباس لجميع الحقول',
      nestedModeLabel: 'اختر طريقة معالجة البيانات المتداخلة',
      flat: 'معالجة مسطحة',
      stringify: 'تحويل إلى سلسلة',
      ignore: 'تجاهل',
      convertButton: 'تحويل JSON إلى CSV'
    }
  },

  stats: {
    processed: 'عدد صفوف البيانات المعالجة',
    fields: 'عدد الحقول/الأعمدة',
    inputSize: 'الحجم قبل التحويل',
    outputSize: 'الحجم بعد التحويل',
    title: 'إحصائيات'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة',
    download: 'تم التنزيل',
    error: 'خطأ'
  },

  formatBytes: {
    bytes: 'بايت',
    kb: 'كيلوبايت',
    mb: 'ميجابايت',
    gb: 'جيجابايت',
    tb: 'تيرابايت'
  }
}; 