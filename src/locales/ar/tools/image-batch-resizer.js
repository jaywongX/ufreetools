export default {
  name: 'معدل حجم الصور المتعدد',
  description: 'تعديل وتحويل وتحسين صور متعددة دفعة واحدة',

  input: {
    title: 'الصور المدخلة',
    dropzone: 'اسحب وأفلت الصور هنا أو انقر للتصفح',
    addMore: 'إضافة المزيد من الصور',
    selectImages: 'اختر الصور',
    clearAll: 'مسح الكل',
    maxFiles: 'الحد الأقصى {count} صورة',
    maxSize: 'الحد الأقصى لكل صورة: {size} ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: {formats}'
  },

  options: {
    title: 'خيارات التعديل',
    settingsTitle: 'إعدادات التعديل',
    resizeMode: 'وضع التعديل',
    resizeMethod: 'طريقة التعديل',
    pixelMode: 'بكسل',
    percentageMode: 'نسبة مئوية',
    maxDimensionMode: 'الحد الأقصى للأبعاد',
    outputFormat: 'تنسيق المخرجات',
    quality: 'الجودة',
    width: 'العرض',
    height: 'الارتفاع',
    maintainAspectRatio: 'الحفاظ على نسبة العرض إلى الارتفاع',
    maxWidth: 'الحد الأقصى للعرض',
    maxHeight: 'الحد الأقصى للارتفاع',
    percentage: 'النسبة المئوية',
    backgroundColor: 'لون الخلفية',
    naming: 'تسمية المخرجات',
    filenamePrefix: 'بادئة اسم الملف',
    filenameSuffix: 'لاحقة اسم الملف',
    applyToAllImages: 'تطبيق على جميع الصور',
    applyToAll: 'تطبيق على جميع الصور'
  },

  resizeModes: {
    exact: 'أبعاد دقيقة',
    maxDimensions: 'الحد الأقصى للأبعاد',
    percentage: 'تغيير الحجم بنسبة مئوية',
    fit: 'ملائمة داخل',
    cover: 'تغطية',
    crop: 'قص'
  },

  formats: {
    original: 'مثل المصدر',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'اسم الملف الأصلي',
    dimensions: 'الأصلي + الأبعاد',
    format: 'الأصلي + التنسيق',
    custom: 'نمط مخصص',
    random: 'سلسلة عشوائية'
  },

  output: {
    title: 'الصور المعدلة',
    downloadAll: 'تحميل الكل',
    downloadAsZip: 'تحميل كملف ZIP',
    processingStatus: 'جاري المعالجة: {processed}/{total}',
    originalSize: 'الحجم الأصلي',
    newSize: 'الحجم الجديد',
    reduction: 'الخفض',
    individualDownload: 'تحميل'
  },

  batch: {
    title: 'المعالجة المتعددة',
    process: 'معالجة جميع الصور',
    cancel: 'إلغاء المعالجة',
    selectPreset: 'اختر الإعداد المسبق',
    savePreset: 'حفظ الإعدادات الحالية',
    progress: 'تقدم المعالجة'
  },

  watermark: {
    title: 'العلامة المائية',
    enable: 'إضافة علامة مائية',
    text: 'نص العلامة المائية',
    image: 'صورة العلامة المائية',
    position: 'الموضع',
    opacity: 'الشفافية',
    rotation: 'التدوير',
    size: 'الحجم',
    padding: 'الحشو'
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
    bottomRight: 'أسفل اليمين'
  },

  actions: {
    resize: 'تغيير الحجم',
    preview: 'معاينة',
    processing: 'جاري المعالجة...',
    reset: 'إعادة تعيين',
    applySettings: 'تطبيق الإعدادات',
    resetSettings: 'إعادة تعيين الإعدادات',
    cancel: 'إلغاء'
  },

  messages: {
    resizeSuccess: 'تم تغيير حجم الصورة بنجاح',
    resizeFailed: 'فشل تغيير حجم الصورة: {error}',
    invalidDimensions: 'الرجاء إدخال أبعاد صالحة',
    invalidWidthHeight: 'الرجاء إدخال عرض وارتفاع صالحين',
    noImages: 'الرجاء إضافة صور لتغيير حجمها',
    noImagesToDownload: 'لا توجد صور للتحميل',
    processing: 'جاري معالجة الصور...',
    processingComplete: 'اكتملت المعالجة',
    processingError: 'حدث خطأ أثناء معالجة الصور',
    waitingForProcess: 'في انتظار المعالجة',
    downloadStarted: 'بدأ التحميل',
    allDownloaded: 'تم تحميل جميع الصور',
    presetSaved: 'تم حفظ الإعداد المسبق',
    presetLoaded: 'تم تحميل الإعداد المسبق',
    zipCreated: 'تم إنشاء ملف مضغوط يحتوي على {count} صورة',
    zipError: 'حدث خطأ أثناء إنشاء الملف المضغوط'
  },

  preview: {
    title: 'معاينة الصور ({count})',
    selectImage: 'الرجاء اختيار الصور',
    batchSupport: 'يدعم اختيار صور متعددة للمعالجة دفعة واحدة',
    download: 'تحميل',
    delete: 'حذف'
  },

  qualityOptions: {
    fast: 'معالجة سريعة',
    medium: 'جودة متوسطة',
    high: 'جودة عالية (موصى به)',
    best: 'أفضل جودة (أبطأ)'
  }
}; 