export default {
  name: 'محول الطوابع الزمنية',
  description: 'تحويل بين الطوابع الزمنية والتواريخ المقروءة، مع دعم تنسيقات متعددة ومناطق زمنية',

  options: {
    inputType: 'نوع الإدخال',
    outputFormat: 'تنسيق الإخراج',
    timezone: 'المنطقة الزمنية',
    includeTime: 'تضمين الوقت',
    format: 'سلسلة التنسيق'
  },

  inputTypes: {
    timestamp: 'طابع زمني يونكس',
    milliseconds: 'ميلي ثانية يونكس',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'سلسلة تاريخ'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'تنسيق محلي',
    relative: 'وقت نسبي',
    custom: 'تنسيق مخصص'
  },

  actions: {
    convert: 'تحويل',
    nowTimestamp: 'الطابع الزمني الحالي',
    nowDate: 'التاريخ الحالي',
    copy: 'نسخ',
    clear: 'مسح',
    refresh: 'تحديث',
    switch: 'تبديل'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    convertSuccess: 'تم التحويل بنجاح',
    convertError: 'حدث خطأ أثناء تحويل الطابع الزمني',
    invalidInput: 'تنسيق إدخال غير صالح',
    invalidFormat: 'سلسلة تنسيق غير صالحة'
  },

  timeUnits: {
    milliseconds: 'ميلي ثانية',
    seconds: 'ثواني',
    minutes: 'دقائق',
    hours: 'ساعات',
    days: 'أيام'
  },

  labels: {
    unixTimestamp: 'طابع زمني يونكس (ثواني)',
    dateTime: 'التاريخ والوقت',
    inputValue: 'قيمة الإدخال',
    unitConversion: 'تحويل وحدات الوقت',
    timeUnitLabel: 'وحدة الوقت'
  },

  placeholders: {
    enterTimestamp: 'الرجاء إدخال طابع زمني يونكس',
    enterValue: 'الرجاء إدخال قيمة'
  },

  info: {
    aboutTimestamp: 'حول الطوابع الزمنية يونكس',
    timestampDescription: 'يمثل الطابع الزمني يونكس عدد الثواني المنقضية منذ 1 يناير 1970 00:00:00 بالتوقيت العالمي المنسق (UTC). إنه طريقة شائعة لتمثيل الوقت في أنظمة الحاسوب والتطبيقات.',
    commonUsage: 'الاستخدامات الشائعة:',
    usages: {
      database: 'تسجيل الوقت في قواعد البيانات',
      api: 'تمثيل الوقت في اتصالات API',
      logging: 'تسجيل الأحداث',
      filesystem: 'الطوابع الزمنية في أنظمة الملفات'
    }
  }
};