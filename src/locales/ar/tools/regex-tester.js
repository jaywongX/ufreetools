export default {
  name: 'اختبار تعبيرات عادية',
  description: 'اختبار وتصحيح تعبيرات عادية مع تمييز مباشر وتفسير',

  actions: {
    test: 'اختبار',
    clear: 'مسح',
    showExamples: 'عرض أمثلة',
    hideExamples: 'إخفاء أمثلة',
    copy: 'نسخ'
  },

  sections: {
    examples: 'أمثلة شائعة للتعبيرات العادية',
    pattern: 'نمط التعبير العادي',
    input: 'سلسلة الاختبار',
    results: 'نتائج المطابقة',
    flags: 'أعلام'
  },

  flags: {
    g: 'مطابقة عامة (g)',
    i: 'تجاهل حالة الأحرف (i)',
    m: 'وضع متعدد الأسطر (m)',
    s: 'مطابقة النقاط للكل (s)',
    u: 'وضع يونيكود (u)',
    y: 'مطابقة لزجة (y)'
  },

  errors: {
    emptyRegex: 'الرجاء إدخال تعبير عادي',
    emptyTestString: 'الرجاء إدخال نص للاختبار',
    invalidRegex: 'تعبير عادي غير صالح'
  },

  messages: {
    matchesFound: 'تم العثور على {count} تطابق',
    noMatches: 'لم يتم العثور على تطابقات',
    copied: 'تم النسخ إلى الحافظة!'
  },

  placeholders: {
    pattern: 'أدخل نمط التعبير العادي',
    testString: 'أدخل النص للاختبار'
  },

  options: {
    flags: 'أعلام',
    global: 'مطابقة عامة (g)',
    caseInsensitive: 'تجاهل حالة الأحرف (i)',
    multiline: 'وضع متعدد الأسطر (m)',
    dotAll: 'مطابقة النقاط للكل (s)',
    unicode: 'وضع يونيكود (u)',
    sticky: 'مطابقة لزجة (y)'
  },

  labels: {
    pattern: 'تعبير عادي',
    testString: 'سلسلة الاختبار',
    matches: 'نتائج المطابقة',
    groups: 'مجموعات',
    noMatches: 'لم يتم العثور على تطابقات'
  },

  tips: {
    title: 'نصائح الاستخدام',
    pattern: 'لا حاجة لإدراج الشرطات المائلة حول نمط التعبير العادي.',
    flags: 'استخدم الأعلام لتعديل سلوك مطابقة النمط (g: عامة، i: تجاهل حالة الأحرف، m: متعدد الأسطر).',
    examples: 'انقر على "عرض أمثلة" لرؤية واستخدام أنماط تعبيرات عادية شائعة.',
    testing: 'بعد إدخال النمط وسلسلة الاختبار، انقر على "اختبار" لرؤية نتائج المطابقة.'
  },

  match: 'مطابقة',
  position: 'موضع',
  group: 'مجموعة',
  resultsWillAppearHere: 'ستظهر نتائج مطابقة التعبير العادي هنا...',
  regexError: 'خطأ في التعبير العادي: {message}',
  emailAddress: 'بريد إلكتروني',
  phoneNumber: 'رقم هاتف (الصين)',
  ipAddress: 'عنوان IP',
  dateFormat: 'تاريخ (yyyy-mm-dd)',
  chineseCharacters: 'أحرف صينية',
  phoneNumberExample: 'اتصل بنا: 13912345678\nرقم واتساب: 18887654321\nهاتف أرضي: 010-12345678',
  urlExample: 'زوروا https://example.com\nأو http://www.domain.org/path?query=value',
  ipAddressExample: 'عنوان الخادم: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'تاريخ البدء: 2023-01-15\nتاريخ الانتهاء: 2023-02-28\nتاريخ غير صالح: 2023-13-45',
  chineseCharactersExample: 'مرحبًا بالعالم! 你好，World!'
};