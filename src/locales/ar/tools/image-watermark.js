export default {
  name: 'علامة مائية للصور',
  description: 'أضف علامة مائية نصية أو صورية لصورك مع إعدادات قابلة للتخصيص',

  upload: {
    title: 'رفع الصورة',
    dropzone: 'اسحب وأفلت الصورة هنا أو انقر للتصفح',
    addMore: 'إضافة المزيد من الصور',
    clearAll: 'مسح الكل',
    maxFiles: 'الحد الأقصى {count} صورة',
    maxSize: 'الحد الأقصى لحجم كل صورة: {size} ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP، GIF'
  },

  watermarkType: {
    title: 'نوع العلامة المائية',
    text: 'علامة مائية نصية',
    image: 'علامة مائية صورية',
    both: 'نص وصورة'
  },

  textWatermark: {
    title: 'علامة مائية نصية',
    text: 'نص العلامة المائية',
    font: 'الخط',
    size: 'الحجم',
    color: 'اللون',
    opacity: 'الشفافية',
    rotation: 'الدوران',
    shadow: 'ظل النص',
    background: 'خلفية النص',
    padding: 'التباعد الداخلي',
    border: 'الإطار',
    spacing: 'المسافة بين الأحرف'
  },

  imageWatermark: {
    title: 'علامة مائية صورية',
    upload: 'رفع صورة العلامة المائية',
    selectLogo: 'اختيار الشعار',
    presetLogos: 'الشعارات الجاهزة',
    size: 'الحجم',
    opacity: 'الشفافية',
    rotation: 'الدوران',
    offset: 'الإزاحة'
  },

  positioning: {
    title: 'الموضع',
    position: 'الموقع',
    custom: 'موضع مخصص',
    xPosition: 'الموقع الأفقي',
    yPosition: 'الموقع العمودي',
    tiled: 'نمط التكرار',
    margin: 'الهامش',
    scale: 'تغيير الحجم مع الصورة'
  },

  positions: {
    topLeft: 'أعلى اليسار',
    topCenter: 'أعلى الوسط',
    topRight: 'أعلى اليمين',
    middleLeft: 'وسط اليسار',
    middleCenter: 'الوسط',
    middleRight: 'وسط اليمين',
    bottomLeft: 'أسفل اليسار',
    bottomCenter: 'أسفل الوسط',
    bottomRight: 'أسفل اليمين',
    custom: 'موضع مخصص'
  },

  output: {
    title: 'المخرجات',
    quality: 'جودة المخرجات',
    format: 'تنسيق المخرجات',
    original: 'مثل الأصل',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'معاينة',
    downloadIndividual: 'تحميل',
    downloadAll: 'تحميل الكل',
    downloadAsZip: 'تحميل كملف ZIP'
  },

  presets: {
    title: 'الإعدادات المسبقة',
    save: 'حفظ الإعدادات الحالية',
    load: 'تحميل إعدادات مسبقة',
    delete: 'حذف إعدادات مسبقة',
    presetName: 'اسم الإعدادات المسبقة'
  },

  actions: {
    apply: 'تطبيق العلامة المائية',
    applyToAll: 'تطبيق على الكل',
    reset: 'إعادة تعيين',
    preview: 'معاينة',
    undo: 'تراجع',
    cancel: 'إلغاء المعالجة'
  },

  messages: {
    processing: 'جاري المعالجة...',
    success: 'تم تطبيق العلامة المائية بنجاح',
    error: 'خطأ: {error}',
    noImages: 'الرجاء إضافة صور أولاً',
    noWatermark: 'الرجاء إضافة علامة مائية نصية أو صورية',
    presetSaved: 'تم حفظ الإعدادات المسبقة بنجاح',
    presetLoaded: 'تم تحميل الإعدادات المسبقة بنجاح',
    presetDeleted: 'تم حذف الإعدادات المسبقة',
    watermarkApplied: 'تم تطبيق العلامة المائية',
    watermarkImageLoadError: 'فشل تحميل صورة العلامة المائية',
    imageLoadError: 'فشل تحميل الصورة',
    resetSuccess: 'تمت إعادة التعيين',
    downloadStarted: 'بدأ التحميل',
    downloadError: 'فشل تحميل الصورة',
    imageLoaded: 'تم تحميل الصورة بنجاح',
    canvasInitError: 'فشل تهيئة اللوحة',
    tiledWatermarkError: 'فشل إنشاء العلامة المائية المتكررة'
  }
}; 