export default {
  name: 'عارض بيانات EXIF للصور',
  description: 'عرض وتحليل بيانات EXIF الوصفية في الصور',

  upload: {
    title: 'رفع صورة',
    dropzone: 'اسحب وأفلت الصورة هنا أو انقر للتصفح',
    maxSize: 'الحد الأقصى لحجم الملف: 15 ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: JPG، TIFF، HEIC، PNG',
    anyImageFile: 'أي ملف صورة يحتوي على بيانات EXIF'
  },

  display: {
    title: 'معلومات الصورة',
    noExif: 'لم يتم العثور على بيانات EXIF في هذه الصورة',
    basicInfo: 'المعلومات الأساسية',
    camera: 'معلومات الكاميرا',
    exposure: 'معلومات التعريض',
    location: 'معلومات الموقع',
    dates: 'معلومات التاريخ',
    advanced: 'بيانات EXIF المتقدمة',
    thumbnail: 'صورة مصغرة EXIF'
  },

  exif: {
    fileName: 'اسم الملف',
    fileSize: 'حجم الملف',
    fileType: 'نوع الملف',
    dimensions: 'الأبعاد',
    make: 'شركة تصنيع الكاميرا',
    model: 'طراز الكاميرا',
    lens: 'العدسة',
    focalLength: 'البعد البؤري',
    focalLength35: 'البعد البؤري (35 مم)',
    aperture: 'فتحة العدسة',
    fNumber: 'قيمة F',
    exposureTime: 'وقت التعريض',
    shutterSpeed: 'سرعة الغالق',
    iso: 'ISO',
    exposureMode: 'وضع التعريض',
    exposureProgram: 'برنامج التعريض',
    meteringMode: 'وضع القياس',
    flash: 'الفلاش',
    flashMode: 'وضع الفلاش',
    whiteBalance: 'توازن اللون الأبيض',
    exposureBias: 'تعويض التعريض',
    latitude: 'خط العرض',
    longitude: 'خط الطول',
    altitude: 'الارتفاع',
    locationName: 'اسم الموقع',
    dateOriginal: 'تاريخ التقاط الصورة',
    dateDigitized: 'تاريخ الرقمنة',
    dateModified: 'تاريخ التعديل',
    software: 'البرنامج',
    artist: 'الفنان',
    copyright: 'حقوق النشر',
    resolution: 'الدقة',
    colorSpace: 'مساحة اللون',
    orientation: 'الاتجاه',
    compression: 'الضغط',
    bitsPerSample: 'البتات لكل عينة',
    maxAperture: 'أقصى فتحة',
    contrast: 'التباين',
    saturation: 'التشبع',
    sharpness: 'الحدة',
    brightness: 'السطوع',
    sceneCaptureType: 'نوع التقاط المشهد',
    gainControl: 'التحكم في الكسب',
    serialNumber: 'الرقم التسلسلي',
    width: 'العرض',
    height: 'الارتفاع'
  },

  map: {
    title: 'موقع الصورة',
    show: 'عرض على الخريطة',
    noLocation: 'لا توجد بيانات موقع متاحة',
    directions: 'الحصول على الاتجاهات',
    copy: 'نسخ الإحداثيات',
    warning: 'تحذير: تحتوي هذه الصورة على بيانات موقع. كن حذراً عند المشاركة.'
  },

  actions: {
    showAll: 'عرض جميع البيانات الوصفية',
    hideAll: 'إخفاء جميع البيانات الوصفية',
    copyAll: 'نسخ جميع البيانات الوصفية',
    save: 'حفظ البيانات الوصفية كملف JSON',
    removeMeta: 'إزالة البيانات الوصفية',
    download: 'تحميل الصورة بدون بيانات وصفية',
    viewFullSize: 'عرض الحجم الأصلي',
    refresh: 'إعادة تحميل البيانات'
  },

  settings: {
    title: 'إعدادات العرض',
    showGroups: 'تجميع البيانات الوصفية',
    showRaw: 'عرض القيم الأصلية',
    showTechnical: 'عرض البيانات التقنية',
    showFiltered: 'إخفاء الحقول الفارغة',
    darkMode: 'الوضع الداكن',
    mapProvider: 'مزود الخريطة'
  },

  tips: {
    privacy: 'نصيحة الخصوصية: قد تحتوي الصور على بيانات شخصية مثل الموقع ومعلومات الجهاز.',
    noExif: 'لا ترى بيانات EXIF؟ بعض منصات التواصل الاجتماعي وأدوات تحرير الصور تزيل البيانات الوصفية.',
    rawView: 'انتقل إلى "العرض الأصلي" لرؤية جميع البيانات الوصفية المتاحة.'
  },

  messages: {
    copied: 'تم نسخ البيانات الوصفية إلى الحافظة',
    saved: 'تم حفظ البيانات الوصفية كملف JSON',
    noExif: 'لم يتم العثور على بيانات EXIF في هذه الصورة',
    metadataRemoved: 'تمت إزالة البيانات الوصفية بنجاح',
    imageLoaded: 'تم تحميل الصورة بنجاح',
    notUse: 'غير مستخدم',
    use: 'مستخدم',
    auto: 'تلقائي',
    manual: 'يدوي',
    reset: 'تمت إعادة التعيين',
    exifExtracted: 'تم استخراج بيانات EXIF'
  },

  error: {
    copyFailed: 'فشل النسخ',
    exportFailed: 'فشل التصدير',
    exifExtractionFailed: 'فشل استخراج بيانات EXIF',
    imageLoadFailed: 'فشل تحميل الصورة'
  },

  orientation: {
    normal: 'عادي',
    horizontalFlip: 'قلب أفقي',
    rotate180: 'تدوير 180°',
    verticalFlip: 'قلب عمودي',
    rotate90VerticalFlip: 'تدوير 90° في اتجاه عقارب الساعة وقلب عمودي',
    rotate90: 'تدوير 90° في اتجاه عقارب الساعة',
    rotate90HorizontalFlip: 'تدوير 90° في اتجاه عقارب الساعة وقلب أفقي',
    rotate270: 'تدوير 90° عكس اتجاه عقارب الساعة'
  }
}; 