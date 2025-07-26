export default {
  name: 'محول الصور إلى بكسل',
  description: 'تحويل الصور إلى فن بكسل مع دقة وتأثيرات قابلة للتخصيص',

  upload: {
    title: 'رفع الصورة',
    dropzone: 'اسحب وأفلت الصورة هنا أو انقر للتصفح',
    maxSize: 'الحد الأقصى لحجم الملف: 10 ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP، GIF'
  },

  settings: {
    title: 'إعدادات البكسل',
    pixelSize: 'حجم البكسل',
    pixelShape: 'شكل البكسل',
    shapes: {
      square: 'مربع',
      rounded: 'مستدير',
      circle: 'دائري',
      diamond: 'معين',
      custom: 'مخصص'
    },
    resolution: 'الدقة',
    width: 'العرض',
    height: 'الارتفاع',
    preserveAspect: 'الحفاظ على النسبة',
    colorReduction: 'تقليل الألوان',
    colors: 'عدد الألوان',
    dithering: 'التردد',
    ditheringTypes: {
      none: 'بدون',
      floydSteinberg: 'فلويد-شتاينبرج',
      atkinson: 'أتكينسون',
      ordered: 'منظم',
      bayer: 'باير'
    },
    palette: 'لوحة الألوان',
    palettes: {
      auto: 'تلقائي',
      grayscale: 'تدرج رمادي',
      gameboy: 'جيم بوي',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'مخصص',
      normal: 'عادي',
      retro: 'رجعي',
      sepia: 'بني داكن',
      bright: 'ساطع',
      cool: 'بارد',
      warm: 'دافئ',
      bw: 'أبيض وأسود',
      invert: 'معكوس'
    },
    customPalette: 'ألوان لوحة مخصصة',
    small: 'صغير (دقيق)',
    large: 'كبير (خشن)',
    low: 'منخفض (رجعي)',
    high: 'مرتفع (ملون)'
  },

  effects: {
    title: 'التأثيرات',
    brightness: 'السطوع',
    contrast: 'التباين',
    saturation: 'التشبع',
    hue: 'درجة اللون',
    outline: 'الحدود',
    outlineColor: 'لون الحدود',
    noise: 'الضوضاء',
    posterize: 'تقسيم الألوان',
    invert: 'عكس الألوان',
    grayscale: 'تدرج رمادي',
    sepia: 'بني داكن',
    vignette: 'تأثير الظل'
  },

  animation: {
    title: 'إعدادات الرسوم المتحركة',
    animated: 'معالجة كرسوم متحركة',
    frameRate: 'معدل الإطارات',
    optimizeFrames: 'تحسين الإطارات',
    looping: 'تكرار',
    loopCount: 'عدد مرات التكرار'
  },

  output: {
    title: 'المخرجات',
    preview: 'معاينة',
    original: 'الأصلية',
    pixelated: 'مبكسل',
    comparison: 'مقارنة',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    gridOverlay: 'شبكة التغطية',
    downloadAs: 'تحميل كـ',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'ورقة الرسوم',
    quality: 'الجودة',
    scale: 'المقياس',
    loading: 'جاري التحميل...',
    noImage: 'الرجاء اختيار صورة',
    processing: 'جاري المعالجة...'
  },

  presets: {
    title: 'الإعدادات المسبقة',
    save: 'حفظ الإعدادات الحالية',
    load: 'تحميل إعدادات مسبقة',
    delete: 'حذف إعدادات مسبقة',
    presetName: 'اسم الإعدادات المسبقة',
    defaults: {
      lowRes: 'دقة منخفضة',
      highContrast: 'تباين عالي',
      retro: 'رجعي',
      minimal: 'مبسط',
      sketch: 'رسم',
      blueprint: 'مخطط'
    }
  },

  actions: {
    pixelate: 'تحويل الصورة إلى بكسل',
    reset: 'إعادة تعيين الإعدادات',
    applyChanges: 'تطبيق التغييرات',
    undoChanges: 'تراجع عن التغييرات',
    downloadImage: 'تحميل الصورة',
    selectImage: 'اختيار صورة'
  },

  messages: {
    processing: 'جاري معالجة الصورة...',
    success: 'تم تحويل الصورة إلى بكسل بنجاح',
    downloading: 'جاري التحضير للتحميل...',
    presetSaved: 'تم حفظ الإعدادات المسبقة بنجاح',
    presetLoaded: 'تم تحميل الإعدادات المسبقة',
    presetDeleted: 'تم حذف الإعدادات المسبقة',
    error: 'خطأ: {error}',
    fileSize: 'حجم الملف',
    pixels: 'بكسل',
    imageSize: 'حجم الصورة',
    downloadSuccess: 'تم تحميل الصورة',
    downloadFailed: 'فشل التحميل',
    resetSuccess: 'تمت إعادة التعيين',
    fileName: 'اسم الملف'
  }
};