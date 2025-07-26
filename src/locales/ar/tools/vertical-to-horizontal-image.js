export default {
  name: 'تحويل الصور العمودية إلى أفقية',
  description: 'تحويل الصور الرأسية (بورتريه) إلى تنسيق أفقي (لاندسكيب) مع توفير خيارات تحويل متعددة',

  upload: {
    title: 'رفع الصورة',
    dropzone: 'اسحب وأسقط الصورة هنا',
    maxSize: 'الحد الأقصى لحجم الملف: 10MB',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP، GIF'
  },

  settings: {
    title: 'إعدادات التحويل',
    presets: 'إعدادات مسبقة سريعة',
    conversionMode: 'وضع التحويل',
    modes: {
      rotate: 'تدوير',
      fill: 'ملء الخلفية',
      blur: 'طمس الخلفية',
      stretch: 'تمديد الحواف',
      dualColor: 'خلفية ثنائية اللون'
    },
    rotationAngle: 'زاوية التدوير',
    fillColor: 'لون الخلفية',
    blurRadius: 'درجة الطمس',
    stretchEdges: 'درجة التمديد',
    leftColor: 'لون الجانب الأيسر',
    rightColor: 'لون الجانب الأيمن',
    sizeOption: 'إعدادات الأبعاد',
    sizeModes: {
      auto: 'أبعاد تلقائية',
      preset: 'أبعاد شائعة',
      custom: 'أبعاد مخصصة'
    },
    sizePresets: 'أبعاد مسبقة',
    outputSize: 'أبعاد الإخراج',
    width: 'العرض',
    height: 'الارتفاع',
    dimensionsHint: 'أدخل الأبعاد بالبكسل',
    autoSize: 'حساب الأبعاد تلقائيًا',
    outputFormat: 'تنسيق الإخراج',
    quality: 'جودة الصورة',
    advancedOptions: 'خيارات متقدمة',
    preserveRatio: 'الحفاظ على نسبة الطول إلى العرض',
    sharpen: 'زيادة الحدة',
    addWatermark: 'إضافة علامة مائية',
    watermarkPlaceholder: 'أدخل نص العلامة المائية',
    watermarkColor: 'لون العلامة المائية'
  },

  output: {
    preview: 'معاينة النتيجة',
    dimensions: 'الأبعاد',
    before: 'قبل التحويل',
    after: 'بعد التحويل'
  },

  actions: {
    selectImage: 'اختر صورة',
    convert: 'تحويل الصورة',
    download: 'تنزيل الصورة',
    reset: 'إزالة',
    showSideBySide: 'عرض المقارنة',
    hideComparison: 'إخفاء المقارنة',
    hideSideBySide: 'إغلاق'
  },

  messages: {
    processing: 'جاري معالجة الصورة...',
    convertPrompt: 'ستظهر نتيجة تحويل الصورة هنا',
    error: 'حدث خطأ أثناء معالجة الصورة',
    success: 'تم التحويل بنجاح!'
  },

  examples: {
    title: 'نصائح الاستخدام',
    social: 'مثالي لمنشورات وسائل التواصل الاجتماعي حيث تعمل الصور الأفقية بشكل أفضل',
    socialTip: 'استخدم وضع الطمس للحصول على أفضل نتائج لوسائل التواصل الاجتماعي',
    website: 'إنشاء صور بانر للمواقع والمدونات',
    websiteTip: 'وضع الثنائي اللون مثالي لبانرات الويب'
  },

  help: {
    title: 'كيفية استخدام هذه الأداة',
    description: 'تتيح لك هذه الأداة تحويل الصور الرأسية (بورتريه) إلى تنسيق أفقي (لاندسكيب) باستخدام طرق مختلفة مع الحفاظ على الجودة البصرية والتأثيرات.',
    example1: {
      title: 'منشورات وسائل التواصل الاجتماعي',
      description: 'تحويل الصور الشخصية إلى تنسيق أفقي مناسب لوسائل التواصل الاجتماعي مع خلفية ضبابية'
    },
    example2: {
      title: 'بانرات المواقع',
      description: 'إنشاء رؤوس مواقع وبانرات من الصور الرأسية باستخدام خلفية ملونة'
    }
  }
};