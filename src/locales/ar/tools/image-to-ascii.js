export default {
  name: 'محول الصور إلى ASCII',
  description: 'تحويل الصور إلى فن نصي ASCII مع خيارات قابلة للتخصيص',

  upload: {
    title: 'رفع الصورة',
    dropzone: 'اسحب وأفلت الصورة هنا أو انقر للتصفح',
    maxSize: 'الحد الأقصى لحجم الملف: 5 ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP، GIF',
    pasteImage: 'أو الصق صورة من الحافظة'
  },

  options: {
    title: 'خيارات التحويل',
    width: 'عرض المخرجات',
    height: 'ارتفاع المخرجات',
    preserveAspect: 'الحفاظ على النسبة',
    colored: 'مخرجات ملونة',
    charSet: 'مجموعة الأحرف',
    charSets: {
      standard: 'قياسي',
      simple: 'بسيط',
      complex: 'معقد',
      blocks: 'أحرف المكعبات',
      custom: 'مخصص'
    },
    customChars: 'أحرف مخصصة',
    invert: 'عكس الألوان',
    threshold: 'عتبة السطوع',
    brightness: 'السطوع',
    contrast: 'التباين',
    fontFamily: 'عائلة الخط',
    fontSize: 'حجم الخط',
    lineHeight: 'ارتفاع السطر',
    backgroundColor: 'لون الخلفية',
    textColor: 'لون النص'
  },

  output: {
    title: 'مخرجات ASCII',
    preview: 'معاينة',
    raw: 'ASCII الخام',
    html: 'HTML',
    copyToClipboard: 'نسخ إلى الحافظة',
    downloadTxt: 'تحميل كملف TXT',
    downloadHtml: 'تحميل كملف HTML',
    downloadImage: 'تحميل كصورة',
    stats: {
      title: 'الإحصائيات',
      characters: 'عدد الأحرف',
      lines: 'عدد الأسطر',
      colors: 'عدد الألوان',
      size: 'حجم النص'
    }
  },

  presets: {
    title: 'الإعدادات المسبقة',
    save: 'حفظ الإعدادات الحالية',
    load: 'تحميل إعدادات مسبقة',
    delete: 'حذف إعدادات مسبقة',
    presetName: 'اسم الإعدادات المسبقة',
    default: 'افتراضي',
    detailed: 'مفصل',
    minimalist: 'بسيط',
    blocky: 'نمط المكعبات',
    small: 'صغير',
    inverted: 'معكوس'
  },

  adjustment: {
    title: 'ضبط الصورة',
    grayscale: 'تدرج رمادي',
    negative: 'صورة سلبية',
    resize: 'تغيير الحجم قبل التحويل',
    crop: 'قص الصورة',
    rotate: 'تدوير',
    flipH: 'قلب أفقي',
    flipV: 'قلب عمودي'
  },

  animation: {
    title: 'الرسوم المتحركة',
    animated: 'معالجة كرسوم متحركة',
    frameDelay: 'تأخير الإطار',
    loop: 'تكرار الرسوم المتحركة',
    loopCount: 'عدد مرات التكرار',
    extractFrame: 'استخراج الإطار الحالي'
  },

  actions: {
    convert: 'تحويل إلى ASCII',
    resetOptions: 'إعادة تعيين الخيارات',
    refreshPreview: 'تحديث المعاينة',
    loadImage: 'تحميل صورة جديدة',
    applyChanges: 'تطبيق التغييرات',
    selectImage: 'اختيار صورة',
    reset: 'إعادة تعيين',
    processing: 'جاري المعالجة...',
    generate: 'إنشاء ASCII',
    copy: 'نسخ',
    download: 'تحميل'
  },

  messages: {
    converting: 'جاري تحويل الصورة إلى ASCII...',
    conversionComplete: 'اكتمل التحويل',
    conversionFailed: 'فشل تحويل الصورة: {error}',
    copied: 'تم نسخ ASCII إلى الحافظة',
    downloadStarted: 'بدأ التحميل',
    downloadComplete: 'تم تحميل ASCII',
    downloadFailed: 'فشل التحميل',
    copyFailed: 'فشل النسخ',
    resetComplete: 'تمت إعادة التعيين',
    asciiGenerated: 'تم إنشاء فن ASCII',
    generationFailed: 'فشل إنشاء ASCII',
    presetSaved: 'تم حفظ الإعدادات المسبقة',
    presetLoaded: 'تم تحميل الإعدادات المسبقة',
    presetDeleted: 'تم حذف الإعدادات المسبقة',
    invalidImage: 'تنسيق صورة غير صالح أو ملف تالف',
    imageTooBig: 'حجم الصورة كبير جداً للتحويل',
    selectOrLoad: 'الرجاء اختيار صورة أو تحميلها من URL',
    asciiWillDisplay: 'سيظهر ASCII هنا',
    customCharsPlaceholder: 'أدخل الأحرف، مرتبة من الأغمق إلى الأفتح...',
    tip: 'اضغط على زر "إنشاء ASCII" بعد ضبط الإعدادات لرؤية النتيجة',
    drapPlaceHolder: 'اختر أو اسحب صورة إلى هنا',
    noImage: 'الرجاء اختيار صورة أولاً',
    generateAscii: 'اضغط على زر "إنشاء ASCII" لتحويل الصورة',
    tip2: 'نصيحة: استخدم زر النسخ لنسخ فن ASCII إلى الحافظة، أو استخدم زر التحميل لحفظه كملف نصي.'
  },

  charSets: {
    standard: 'قياسي',
    simple: 'بسيط',
    blocks: 'مكعبات',
    custom: 'مخصص'
  },

  settings: {
    title: 'إعدادات ASCII',
    customCharsetLabel: 'مجموعة أحرف مخصصة (من الأغمق إلى الأفتح)',
    asciiWidth: 'عرض ASCII',
    invert: 'عكس الألوان',
    colored: 'مخرجات ملونة',
    fontSize: 'حجم الخط'
  },

  preview: {
    originalImage: 'الصورة الأصلية',
    generatedAscii: 'ASCII المنشأ'
  }
}; 