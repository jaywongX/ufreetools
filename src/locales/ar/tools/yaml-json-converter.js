export default {
  name: 'محول YAML-JSON',
  description: 'تحويل بين تنسيقات YAML و JSON مع خيارات قابلة للتخصيص',

  input: {
    title: 'الإدخال',
    yamlPlaceholder: 'أدخل YAML هنا...',
    jsonPlaceholder: 'أدخل JSON هنا...',
    loadSample: 'تحميل نموذج',
    clearInput: 'مسح الإدخال',
    uploadFile: 'رفع ملف'
  },

  output: {
    title: 'الإخراج',
    copyOutput: 'نسخ الإخراج',
    downloadOutput: 'تنزيل الإخراج',
    clearOutput: 'مسح الإخراج'
  },

  options: {
    conversionMode: 'وضع التحويل',
    jsonToYaml: 'JSON إلى YAML',
    yamlToJson: 'YAML إلى JSON',
    formatOutput: 'تنسيق الإخراج',
    indentSize: 'حجم المسافة البادئة',
    quoteKeys: 'إضافة علامات اقتباس للمفاتيح',
    sortKeys: 'ترتيب المفاتيح أبجدياً',
    flowStyle: 'نمط التدفق YAML',
    jsonCompatible: 'متوافق مع JSON',
    singleQuotes: 'استخدام علامات اقتباس مفردة',
    includeSchema: 'تضمين المخطط',
    preserveKeyOrder: 'الحفاظ على ترتيب المفاتيح'
  },

  flowStyles: {
    block: 'نمط الكتلة',
    flow: 'نمط التدفق',
    auto: 'تلقائي'
  },

  validation: {
    validate: 'التحقق قبل التحويل',
    validInput: '{format} صالح',
    invalidInput: '{format} غير صالح: {error}',
    checkSyntax: 'التحقق من الصيغة'
  },

  actions: {
    convert: 'تحويل',
    swap: 'تبديل التنسيق',
    beautify: 'تجميل',
    minify: 'تصغير'
  },

  messages: {
    conversionSuccess: 'تم التحويل بنجاح',
    conversionFailed: 'فشل التحويل: {error}',
    copySuccess: 'تم النسخ إلى الحافظة',
    downloadSuccess: 'تم تنزيل الملف بنجاح',
    emptyInput: 'الرجاء إدخال محتوى للتحويل',
    invalidYaml: 'صيغة YAML غير صالحة',
    invalidJson: 'صيغة JSON غير صالحة'
  }
}; 