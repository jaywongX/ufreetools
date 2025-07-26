export default {
  name: 'مولد واجهة API وهمية',
  description: 'إنشاء واجهة API وهمية تلقائيًا بناءً على مواصفات OpenAPI',

  options: {
    version: 'إصدار OpenAPI',
    format: 'تنسيق الإخراج',
    includeExamples: 'تضمين استجابات مثالبة',
    responseDynamism: 'ديناميكية الاستجابة',
    responseType: 'نوع الاستجابة',
    arrayLength: 'طول المصفوفة',
    responseFormat: 'تنسيق الاستجابة'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'إنشاء وهمي',
    preview: 'معاينة API',
    clear: 'مسح',
    copy: 'نسخ الكود',
    download: 'تنزيل',
    uploadSpec: 'تحميل مواصفات OpenAPI',
    uploadJava: 'تحميل ملفات Java',
    generateJson: 'إنشاء JSON',
    generateBuilder: 'إنشاء Builder',
    format: 'تنسيق'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    generationSuccess: 'تم إنشاء واجهة API الوهمية بنجاح',
    generationError: 'حدث خطأ أثناء إنشاء واجهة API الوهمية',
    specRequired: 'الرجاء تقديم مواصفات OpenAPI',
    fileUploaded: 'تم التحميل',
    parseError: 'فشل تحليل ملف Java، يرجى التأكد من صحة تنسيق الملف'
  },

  help: {
    uploadHint: 'يدعم تحميل ملفات .java، وتحليل تلقائي لهيكل الفئة لإنشاء تكوين وهمي. لا يدعم حاليًا خصائص الكائنات متعددة المستويات'
  },

  fields: {
    title: 'تعريف الحقول',
    addField: 'إضافة حقل',
    addChildField: 'إضافة حقل فرعي',
    fieldName: 'اسم الحقل'
  },

  fieldTypes: {
    string: 'سلسلة نصية',
    number: 'رقم',
    boolean: 'قيمة منطقية',
    date: 'تاريخ',
    name: 'اسم',
    email: 'بريد إلكتروني',
    phone: 'هاتف',
    address: 'عنوان',
    id: 'معرف',
    image: 'رابط صورة',
    array: 'مصفوفة',
    object: 'كائن'
  },

  array: {
    itemType: 'نوع عناصر المصفوفة',
    arrayFields: 'حقول المصفوفة'
  },

  object: {
    childFields: 'الحقول الفرعية'
  },

  responseTypes: {
    object: 'كائن مفرد',
    array: 'مصفوفة كائنات',
    custom: 'هيكل مخصص'
  },

  responseFormats: {
    dataOnly: 'البيانات فقط',
    standard: 'استجابة REST قياسية (code, data, message)'
  },

  placeholder: {
    output: '// سيتم عرض البيانات الوهمية المُنشأة هنا'
  }
};