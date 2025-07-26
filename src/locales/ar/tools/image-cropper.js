export default {
  name: 'قص الصور',
  description: 'قص وتغيير حجم وتدوير الصور بدقة',

  upload: {
    title: 'رفع صورة',
    dropzone: 'اسحب وأفلت الصورة هنا أو انقر للتصفح',
    maxSize: 'الحد الأقصى لحجم الملف: 10 ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP، GIF',
    select: 'الرجاء اختيار صورة للبدء في القص والتحرير'
  },

  editor: {
    title: 'محرر الصور',
    zoom: 'تكبير/تصغير',
    rotate: 'تدوير',
    flipHorizontal: 'قلب أفقي',
    flipVertical: 'قلب عمودي',
    reset: 'إعادة تعيين الصورة',
    undo: 'تراجع',
    redo: 'إعادة',
    dragMode: 'وضع السحب',
    scaleMode: 'وضع التحجيم'
  },

  crop: {
    title: 'إعدادات القص',
    aspectRatio: 'نسبة العرض إلى الارتفاع',
    freeform: 'حر',
    square: 'مربع (1:1)',
    portrait: 'عمودي (3:4)',
    landscape: 'أفقي (4:3)',
    widescreen: 'شاشة عريضة (16:9)',
    panorama: 'بانوراما (2:1)',
    custom: 'مخصص',
    width: 'العرض',
    height: 'الارتفاع',
    unit: 'الوحدة',
    pixels: 'بكسل',
    percent: 'نسبة مئوية',
    lockAspectRatio: 'قفل نسبة العرض إلى الارتفاع'
  },

  presets: {
    title: 'أحجام جاهزة',
    original: 'الحجم الأصلي',
    social: 'وسائل التواصل الاجتماعي',
    facebook: 'فيسبوك',
    instagram: 'انستغرام',
    twitter: 'تويتر',
    linkedin: 'لينكد إن',
    youtube: 'يوتيوب',
    print: 'أحجام الطباعة',
    fourBySix: '4×6 بوصة',
    fiveBySeven: '5×7 بوصة',
    eightByTen: '8×10 بوصة'
  },

  output: {
    title: 'الإخراج',
    preview: 'معاينة',
    dimensions: 'أبعاد الإخراج',
    quality: 'الجودة',
    format: 'التنسيق',
    fileName: 'اسم الملف',
    download: 'تحميل',
    saveAs: 'حفظ باسم',
    copy: 'نسخ إلى الحافظة'
  },

  actions: {
    crop: 'قص الصورة',
    apply: 'تطبيق',
    cancel: 'إلغاء',
    save: 'حفظ الصورة',
    download: 'تحميل',
    newImage: 'صورة جديدة'
  },

  messages: {
    cropSuccess: 'تم قص الصورة بنجاح',
    downloadReady: 'صورة القص جاهزة للتحميل',
    processing: 'جاري معالجة الصورة...',
    copied: 'تم نسخ الصورة إلى الحافظة',
    invalidFile: 'ملف غير صالح. الرجاء رفع صورة صالحة.',
    fileTooLarge: 'حجم الملف كبير جداً. الحد الأقصى هو 10 ميجابايت.'
  }
}; 