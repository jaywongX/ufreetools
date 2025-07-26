export default {
  name: 'مولد TypeScript من OpenAPI',
  description: 'إنشاء واجهات TypeScript وكود العميل تلقائيًا بناءً على مواصفات OpenAPI، لتحسين كفاءة التعاون بين الواجهة الأمامية والخلفية',

  options: {
    exportSchemas: 'تصدير جميع تعريفات النماذج',
    generateClient: 'إنشاء كود عميل API',
    addComments: 'إضافة تعليقات وشرح توثيقي',
    useEnums: 'استخدام تعدادات TypeScript (بدلاً من أنواع الاتحاد النصية)',
    indentSize: 'حجم المسافة البادئة',
    operationType: 'نوع العملية',
    displayOptions: 'عرض الخيارات'
  },

  inputMode: {
    toggleToFile: 'التبديل إلى تحميل الملف',
    toggleToText: 'التبديل إلى إدخال نصي',
    loadExample: 'تحميل مثال'
  },

  fileUpload: {
    dragAndDrop: 'اسحب وأفلت ملف OpenAPI هنا، أو انقر للتحميل',
    supportedFormats: 'تنسيقات الملفات المدعومة: .json و .yaml و .yml',
    fileSelected: 'تم الاختيار: {0} ({1})'
  },

  textInput: {
    placeholder: 'الصق مواصفات OpenAPI (JSON أو YAML) هنا...'
  },

  actions: {
    generate: 'إنشاء كود TypeScript',
    processing: 'جاري المعالجة...',
    clear: 'مسح',
    copy: 'نسخ الكود',
    download: 'تنزيل الكود'
  },

  results: {
    generatedCode: 'كود TypeScript المُنشأ',
    copied: 'تم النسخ إلى الحافظة',
    error: 'خطأ',
    characterCount: 'عدد الأحرف: {0}'
  },

  errors: {
    parseError: 'تعذر تحليل مواصفات OpenAPI. يرجى التأكد من تقديم تنسيق JSON أو YAML صالح.',
    invalidSpec: 'مواصفات OpenAPI غير صالحة. لم يتم العثور على معرف إصدار openapi أو swagger.',
    processingError: 'حدث خطأ أثناء معالجة مواصفات OpenAPI: {0}'
  }
};