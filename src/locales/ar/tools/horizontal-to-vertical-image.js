export default {
  name: 'تحويل الصور الأفقية إلى عمودية',
  description: 'تحويل الصور الأفقية إلى تنسيق عمودي، مناسب لمقاطع الفيديو القصيرة وخلفيات الهواتف المحمولة ومنشورات وسائل التواصل الاجتماعي',
  tags: ['صور', 'تحويل', 'هاتف', 'اجتماعي', 'قصص', 'عمودي', 'بورتريه'],

  upload: {
    title: 'محول الصور الأفقية إلى عمودية',
    dropzone: 'اسحب وأفلت الصورة هنا',
    maxSize: 'الحد الأقصى لحجم الملف: 10 ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP، GIF'
  },

  settings: {
    title: 'إعدادات التحويل',
    presets: 'الإعدادات المسبقة',
    conversionMode: 'وضع التحويل',
    modes: {
      crop: 'قص',
      fill: 'ملء بالألوان',
      blur: 'خلفية ضبابية',
      stretch: 'تمديد الحواف',
      dualColor: 'خلفية ثنائية اللون'
    },
    cropPosition: 'موقع القص',
    positions: {
      left: 'يسار',
      center: 'وسط',
      right: 'يمين'
    },
    fillColor: 'لون الملء',
    blurRadius: 'نصف قطر الضبابية',
    stretchFactor: 'معامل التمديد',
    topColor: 'لون الأعلى',
    bottomColor: 'لون الأسفل',
    sizeOption: 'حجم الإخراج',
    sizeModes: {
      auto: 'تلقائي',
      preset: 'إعداد مسبق',
      custom: 'مخصص'
    },
    sizePresets: 'الأحجام المسبقة',
    outputSize: 'حجم مخصص',
    width: 'العرض',
    height: 'الارتفاع',
    dimensionsHint: 'أدخل الأبعاد بالبكسل',
    outputFormat: 'تنسيق الإخراج',
    quality: 'جودة الصورة',
    advancedOptions: 'خيارات متقدمة',
    preserveRatio: 'الحفاظ على النسبة',
    sharpen: 'تحسين الحدة',
    addWatermark: 'إضافة علامة مائية',
    watermarkPlaceholder: 'أدخل نص العلامة المائية',
    watermarkColor: 'لون العلامة المائية'
  },

  output: {
    preview: 'معاينة الإخراج',
    before: 'قبل التحويل',
    after: 'بعد التحويل',
    dimensions: 'الأبعاد'
  },

  actions: {
    selectImage: 'اختر صورة',
    convert: 'تحويل إلى صورة عمودية',
    download: 'تحميل الصورة',
    showSideBySide: 'عرض المقارنة',
    hideSideBySide: 'إخفاء المقارنة',
    hideComparison: 'إخفاء المقارنة'
  },

  messages: {
    convertPrompt: 'قم بتحميل صورة أفقية وتحويلها إلى تنسيق عمودي',
    processing: 'جاري معالجة صورتك...',
    imageOnly: 'الرجاء اختيار ملف صورة'
  },

  examples: {
    title: 'أمثلة على الاستخدام',
    social: 'إنشاء قصص عمودية لمنصات مثل Instagram وتيك توك',
    socialTip: 'تحويل الصور الأفقية إلى محتوى عمودي جذاب بشكل مثالي',
    mobile: 'تحويل الصور الأفقية إلى خلفيات للهاتف المحمول',
    mobileTip: 'تحسين الصور لمختلف نسب شاشات الهواتف الذكية'
  }
}; 