export default {
  name: 'محول XML/JSON',
  title: 'تحويل XML ↔ JSON',
  description: 'تحويل ثنائي الاتجاه بين تنسيقات XML و JSON، مع دعم خيارات متقدمة وإعدادات مخصصة',

  conversion: {
    direction: 'اتجاه التحويل',
    xmlToJson: 'تحويل XML إلى JSON',
    jsonToXml: 'تحويل JSON إلى XML'
  },

  options: {
    title: 'خيارات التحويل',
    show: 'إظهار الخيارات',
    hide: 'إخفاء الخيارات',
    
    xmlToJson: {
      ignoreAttributes: 'تجاهل السمات',
      ignoreAttributesHint: 'تعطيل هذا الخيار للحفاظ على معلومات سمات XML في JSON',
      parseAttributeValue: 'تحليل قيم السمات',
      parseAttributeValueHint: 'تحويل الأرقام والقيم المنطقية في السمات إلى أنواع فعلية بدلاً من السلاسل النصية',
      ignoreDeclaration: 'تجاهل تعريف XML',
      ignoreDeclarationHint: 'تجاهل معلومات التعريف مثل <?xml version="1.0"?>',
      parseTagValue: 'تحليل قيم العلامات',
      parseTagValueHint: 'تحويل المحتوى داخل العلامات (الأرقام، القيم المنطقية) إلى أنواع فعلية بدلاً من السلاسل النصية',
      trimValues: 'إزالة المسافات البيضاء من القيم',
      attributePrefix: 'بادئة السمة',
      attributePrefixPlaceholder: 'مثال: @, _, attr_',
      attributePrefixHint: 'البادئة المستخدمة لتمثيل سمات XML في JSON، الافتراضي هو @'
    },
    
    jsonToXml: {
      format: 'تنسيق XML',
      formatHint: 'تمكين المسافات البادئة والفواصل لجعل XML أكثر قابلية للقراءة',
      indentBy: 'إضافة مسافة بادئة (مسافتان)',
      addDeclaration: 'إضافة تعريف XML',
      addDeclarationHint: 'إضافة <?xml version="1.0" encoding="UTF-8"?> في بداية XML',
      rootName: 'اسم العنصر الجذري (اختياري)',
      rootNamePlaceholder: 'مثال: root, data, xml',
      rootNameHint: 'اسم العنصر الجذري المستخدم عندما يحتوي JSON على مفاتيح متعددة في المستوى الأعلى',
      attributePrefix: 'تمييز بادئة السمة',
      attributePrefixPlaceholder: 'مثال: @, _, attr_',
      attributePrefixHint: 'البادئة المستخدمة للتعرف على سمات XML في JSON، الافتراضي هو @'
    }
  },

  buttons: {
    convert: 'تحويل',
    swap: 'تبديل المحتوى',
    clear: 'مسح',
    loadExample: 'تحميل مثال'
  },

  input: {
    xmlInput: 'إدخال XML',
    jsonInput: 'إدخال JSON',
    placeholder: {
      xml: 'أدخل XML...',
      json: 'أدخل JSON...'
    }
  },

  output: {
    xmlResult: 'نتيجة XML',
    jsonResult: 'نتيجة JSON',
    copy: 'نسخ'
  },

  stats: {
    title: 'إحصائيات التحويل',
    inputSize: 'حجم الإدخال',
    outputSize: 'حجم الإخراج',
    sizeChange: 'التغيير في الحجم',
    conversionTime: 'وقت التحويل'
  },

  help: {
    title: 'مساعدة الاستخدام',
    show: 'إظهار المساعدة',
    hide: 'إخفاء المساعدة',
    about: {
      title: 'شرح تنسيقات XML و JSON',
      content: 'XML (لغة التوصيف الموسعة) هي لغة ترميز قابلة للتوسيع، تُستخدم على نطاق واسع في ملفات التكوين وتبادل البيانات وخدمات الويب. JSON (تدوين كائنات JavaScript) هو تنسيق خفيف الوزن لتبادل البيانات، سهل القراءة والكتابة للبشر، وسهل التحليل والتوليد للآلات.'
    },
    xmlToJson: {
      title: 'ملاحظات حول تحويل XML إلى JSON',
      items: [
        'سيتم تحويل سمات XML إلى مفاتيح تبدأ بعلامة @ في JSON افتراضيًا',
        'سيتم تحويل محتوى النص في XML إلى مفتاح #text في JSON افتراضيًا',
        'تمكين "تحليل قيم العلامات" يحول الأرقام والقيم المنطقية إلى أنواع JSON فعلية',
        'يمكن أن يحتوي XML على علامات متعددة بنفس الاسم، والتي سيتم تحويلها تلقائيًا إلى مصفوفة في JSON'
      ]
    },
    jsonToXml: {
      title: 'ملاحظات حول تحويل JSON إلى XML',
      items: [
        'المفاتيح التي تبدأ بعلامة @ في JSON تُعتبر سمات XML افتراضيًا',
        'استخدام المصفوفات في JSON سيُنشئ علامات متعددة بنفس الاسم في XML',
        'سيُنشئ كائن JSON المتداخل بنية XML هرمية',
        'إذا كان JSON يحتوي على مفاتيح متعددة في المستوى الأعلى ولم يتم تحديد اسم عنصر جذري، سيتم إنشاء عناصر جذرية متعددة في XML'
      ]
    }
  },

  errors: {
    xmlParse: 'خطأ في تحليل XML: {0}',
    jsonParse: 'خطأ في تحليل JSON: {0}',
    xmlGeneration: 'خطأ في إنشاء XML: {0}',
    emptyObject: 'كائن JSON فارغ أو غير صالح',
    conversion: 'خطأ في التحويل: {0}'
  },

  alerts: {
    copied: 'تم النسخ إلى الحافظة'
  }
};