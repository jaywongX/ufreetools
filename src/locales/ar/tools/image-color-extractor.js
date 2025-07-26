export default {
  name: 'مستخرج ألوان الصور',
  description: 'استخراج لوحة الألوان والألوان الرئيسية من الصور',

  input: {
    title: 'رفع صورة',
    dropzone: 'اسحب وأفلت الصورة هنا أو انقر للرفع',
    formats: 'التنسيقات المدعومة: JPG، PNG، GIF، WebP، SVG',
    browse: 'تصفح الملفات',
    selectImage: 'اختر صورة',
    orText: 'أو',
    pasteUrl: 'الصق رابط الصورة:',
    loadUrl: 'تحميل من الرابط',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'صورة بدون اسم'
  },

  options: {
    title: 'خيارات الاستخراج',
    extractSettings: 'إعدادات الاستخراج',
    colorCount: 'عدد الألوان',
    paletteSize: 'حجم اللوحة',
    paletteMin: 'الحد الأدنى (3)',
    paletteMax: 'الحد الأقصى (20)',
    colorSimilarity: 'تشابه الألوان',
    similiarityToggle: 'السماح بألوان متشابهة',
    quality: 'جودة الاستخراج',
    colorModel: 'نموذج اللون',
    colorSpace: 'مساحة اللون',
    colorFormat: 'تنسيق اللون',
    sortBy: 'ترتيب الألوان حسب',
    sortByPopularity: 'حسب تكرار اللون',
    sortByLuminance: 'حسب السطوع',
    sortByHue: 'حسب درجة اللون',
    sortBySaturation: 'حسب التشبع',
    ignoreWhite: 'تجاهل الأبيض',
    ignoreBlack: 'تجاهل الأسود',
    threshold: 'عتبة التشابه'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'سداسي (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA مع الشفافية',
    hsl: 'HSL',
    hsla: 'HSLA مع الشفافية',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'التكرار',
    luminance: 'السطوع',
    hue: 'درجة اللون',
    saturation: 'التشبع',
    original: 'الترتيب الأصلي'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'الألوان المستخرجة',
    colorsFound: 'تم استخراج {count} لون',
    dominantColor: 'اللون السائد',
    mainColor: 'اللون الرئيسي',
    complementary: 'اللون المكمل',
    palette: 'لوحة الألوان',
    colorPalette: 'لوحة الألوان',
    palettePreview: 'معاينة اللوحة',
    usage: 'نسبة استخدام اللون (%)',
    percentage: 'النسبة: {value}%',
    copyAll: 'نسخ جميع الألوان',
    clickToCopy: 'انقر لنسخ اللون: {color}',
    downloading: 'جاري تحميل اللوحة...'
  },

  display: {
    originalImage: 'الصورة الأصلية',
    colorPalette: 'لوحة الألوان',
    uploadFirst: 'الرجاء رفع صورة أولاً',
    clickExtract: 'انقر على زر "استخراج الألوان" للحصول على لوحة ألوان الصورة',
  },

  actions: {
    extract: 'استخراج الألوان',
    extracting: 'جاري المعالجة...',
    download: 'تحميل اللوحة',
    copy: 'نسخ',
    copyValue: 'نسخ القيمة',
    reset: 'إعادة تعيين',
    copyPalette: 'نسخ اللوحة',
    exportJson: 'تصدير كـ JSON',
    exportCss: 'تصدير كمتغيرات CSS',
    exportSass: 'تصدير كمتغيرات SASS',
    exportSwatch: 'تصدير كلوحة ASE'
  },

  palette: {
    title: 'لوحات الألوان المسماة',
    vibrant: 'حيوي',
    muted: 'هادئ',
    dark: 'داكن',
    light: 'فاتح',
    custom: 'مخصص'
  },

  messages: {
    imageLoaded: 'تم تحميل الصورة بنجاح',
    processingImage: 'جاري معالجة الصورة...',
    extractionComplete: 'اكتمل استخراج الألوان',
    extractionFailed: 'فشل استخراج الألوان: {error}',
    copied: 'تم النسخ إلى الحافظة',
    copiedColor: 'تم النسخ: {color}',
    copiedAll: 'تم نسخ جميع الألوان',
    copyFailed: 'فشل النسخ',
    resetDone: 'تمت إعادة التعيين',
    invalidImage: 'ملف صورة غير صالح',
    noImageSelected: 'لم يتم اختيار صورة'
  }
}; 