export default {
  name: 'تشفير وفك تشفير URL',
  description: 'يستخدم تشفير URL لتحويل الأحرف الخاصة إلى صيغة مقبولة في الروابط، ويُستخدم عادةً في معالجة معلمات URL وإرسال النماذج.',

  options: {
    operationType: 'نوع العملية',
    encodeMode: 'وضع التشفير'
  },

  encodeOptions: {
    standard: 'تشفير قياسي (encodeURI)',
    component: 'تشفير المكونات (encodeURIComponent)',
    full: 'تشفير كامل (جميع الأحرف)',
    standardDescription: 'يشفر الرابط بالكامل مع الحفاظ على أحرف هيكل URL',
    componentDescription: 'مناسب لمعلمات URL، يشمل جميع الأحرف الخاصة',
    fullDescription: 'يشفر جميع الأحرف غير الأبجدية الرقمية، بما في ذلك المسافات (تتحول إلى %20 بدلاً من +)'
  },

  actions: {
    encode: 'تشفير URL',
    decode: 'فك تشفير URL',
    clear: 'مسح',
    copyResult: 'نسخ النتيجة'
  },

  input: {
    textToEncode: 'النص المراد تشفيره',
    textToDecode: 'النص المراد فك تشفيره',
    encodePlaceholder: 'أدخل الرابط أو النص المراد تشفيره...',
    decodePlaceholder: 'أدخل الرابط أو النص المراد فك تشفيره...'
  },

  output: {
    encodeResult: 'نتيجة التشفير',
    decodeResult: 'نتيجة فك التشفير'
  },

  messages: {
    copied: '(تم النسخ',
    error: 'خطأ: {message}',
    decodeError: 'تعذر فك التشفير: "{text}"',
    copyFailed: 'فشل النسخ، يرجى النسخ يدويًا'
  },

  referenceTable: {
    title: 'جدول مرجعي لأحرف URL المشفرة الشائعة',
    showTable: 'عرض الجدول',
    hideTable: 'إخفاء الجدول',
    character: 'الحرف',
    encoded: 'تشفير URL',
    description: 'الوصف',
    descriptions: {
      space: 'مسافة',
      exclamation: 'علامة تعجب',
      doubleQuote: 'علامة تنصيص مزدوجة',
      hash: 'علامة هاشت',
      dollar: 'علامة دولار',
      percent: 'علامة نسبة مئوية',
      ampersand: 'علامة و',
      singleQuote: 'علامة تنصيص مفردة',
      leftParenthesis: 'قوس فتح',
      rightParenthesis: 'قوس إغلاق',
      asterisk: 'علامة نجم',
      plus: 'علامة جمع',
      comma: 'فاصلة',
      slash: 'شرطة مائلة',
      colon: 'نقطتان',
      semicolon: 'فاصلة منقوطة',
      lessThan: 'علامة أصغر من',
      equals: 'علامة يساوي',
      greaterThan: 'علامة أكبر من',
      questionMark: 'علامة استفهام',
      at: 'علامة at',
      leftBracket: 'قوس مربع فتح',
      backslash: 'شرطة مائلة عكسية',
      rightBracket: 'قوس مربع إغلاق',
      caret: 'علامة إقحام',
      backtick: 'علامة تنصيص عكسية',
      leftBrace: 'قوس مجعد فتح',
      pipe: 'علامة أنبوب',
      rightBrace: 'قوس مجعد إغلاق',
      tilde: 'علامة تيلدا',
      chinese: 'نص صيني مشفر بترميز UTF-8'
    }
  }
};