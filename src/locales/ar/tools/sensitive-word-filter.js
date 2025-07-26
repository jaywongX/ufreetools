export default {
  name: 'مرشح الكلمات الحساسة',
  description: 'كشف وتصفية النصوص من الكلمات الحساسة، مع دعم قاموس مخصص للكلمات الحساسة وقواعد التصفية',

  input: {
    title: 'إدخال النص',
    placeholder: 'الرجاء إدخال النص المراد فحصه...',
    loadSample: 'تحميل نموذج',
    clearInput: 'مسح الإدخال',
    uploadFile: 'رفع ملف نصي'
  },

  output: {
    title: 'النص المصفى',
    original: 'النص الأصلي',
    filtered: 'النص المصفى',
    statistics: 'إحصائيات',
    copyOutput: 'نسخ النص المصفى',
    clearOutput: 'مسح المخرجات',
    download: 'تنزيل النص المصفى'
  },

  options: {
    title: 'خيارات التصفية',
    filterMode: 'نمط التصفية',
    caseSensitive: 'حساسية الأحرف',
    wholeWordOnly: 'كلمات كاملة فقط',
    customReplacement: 'استبدال مخصص',
    replacementChar: 'حرف الاستبدال',
    highlightWords: 'تمييز الكلمات الحساسة',
    customDictionary: 'قاموس مخصص',
    importDictionary: 'استيراد قاموس',
    exportDictionary: 'تصدير قاموس'
  },

  filterModes: {
    replace: 'استبدال الكلمات الحساسة',
    highlight: 'تمييز الكلمات الحساسة',
    remove: 'إزالة الكلمات الحساسة',
    detect: 'الكشف فقط'
  },

  dictionary: {
    title: 'قاموس المفردات',
    add: 'إضافة كلمة',
    remove: 'إزالة',
    clear: 'مسح القاموس',
    wordInput: 'إدخال الكلمة المراد إضافتها',
    categories: 'التصنيفات',
    severity: 'درجة الخطورة',
    bulkAdd: 'إضافة جماعية',
    search: 'بحث في القاموس'
  },

  categories: {
    profanity: 'كلمات نابية',
    slurs: 'افتراءات',
    adult: 'محتوى للبالغين',
    offensive: 'محتوى مسيء',
    violence: 'عنف',
    discrimination: 'تمييز',
    personal: 'معلومات شخصية',
    custom: 'مخصص'
  },

  severityLevels: {
    low: 'منخفض',
    medium: 'متوسط',
    high: 'مرتفع',
    critical: 'حرج'
  },

  statistics: {
    totalWords: 'إجمالي الكلمات',
    sensitiveWords: 'عدد الكلمات الحساسة',
    uniqueSensitiveWords: 'عدد الكلمات الحساسة الفريدة',
    severityBreakdown: 'توزيع درجات الخطورة',
    categoryBreakdown: 'توزيع التصنيفات',
    cleanlinessScore: 'درجة النقاء'
  },

  filterOptions: {
    title: 'أنماط التصفية',
    modes: {
      asterisk: 'استبدال بـ *',
      custom: 'حرف استبدال مخصص',
      remove: 'حذف الكلمات الحساسة'
    },
    replaceChar: {
      title: 'حرف الاستبدال',
      placeholder: 'إدخال حرف الاستبدال'
    }
  },

  customWords: {
    title: 'قاموس الكلمات الحساسة المخصص',
    addWord: 'إضافة كلمة',
    addPrompt: 'الرجاء إدخال الكلمة الحساسة المراد إضافتها:',
    removeWord: 'إزالة'
  },

  actions: {
    filter: 'بدء التصفية',
    reset: 'إعادة تعيين',
    processing: 'جاري المعالجة...',
    clearAll: 'مسح الكل',
    copyFiltered: 'نسخ النص المصفى',
    downloadReport: 'تنزيل التقرير',
    resetSettings: 'إعادة تعيين الإعدادات'
  },

  results: {
    title: 'نتائج التصفية',
    tabs: {
      filteredResult: 'نتيجة التصفية',
      detectionReport: 'تقرير الكشف'
    },
    filteredText: {
      title: 'النص المصفى',
      copy: 'نسخ النتيجة',
      empty: 'لا توجد نتائج تصفية لعرضها'
    },
    statistics: {
      detectedCount: 'عدد الكلمات الحساسة المكتشفة',
      retentionRate: 'معدل الاحتفاظ بالنص',
      totalWords: 'إجمالي عدد كلمات النص'
    },
    detectedWords: {
      title: 'الكلمات الحساسة المكتشفة',
      empty: 'لم يتم اكتشاف أي كلمات حساسة'
    }
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة',
    copyFailed: 'فشل النسخ، الرجاء النسخ يدويًا',
    noInput: 'الرجاء إدخال نص للتصفية',
    inputTooLong: 'النص المدخل طويل جدًا',
    wordAdded: 'تمت إضافة الكلمة إلى قاموس الكلمات الحساسة',
    wordExists: 'هذه الكلمة موجودة بالفعل في قاموس الكلمات الحساسة',
    wordRemoved: 'تمت إزالة الكلمة من قاموس الكلمات الحساسة',
    filterSuccess: 'تم تصفية النص بنجاح',
    noSensitiveWords: 'لم يتم العثور على كلمات حساسة',
    dictionaryCleared: 'تم مسح القاموس',
    dictionaryImported: 'تم استيراد القاموس',
    dictionaryExported: 'تم تصدير القاموس',
    emptyText: 'الرجاء إدخال نص للتصفية'
  }
};