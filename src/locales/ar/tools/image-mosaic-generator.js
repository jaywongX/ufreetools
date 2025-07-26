export default {
  name: 'مولد الفسيفساء',
  description: 'إنشاء فن الفسيفساء من خلال دمج الصور الصغيرة في صورة أكبر',

  upload: {
    title: 'رفع الصورة الرئيسية',
    dropzone: 'اسحب وأفلت الصورة الرئيسية هنا أو انقر للتصفح',
    maxSize: 'الحد الأقصى لحجم الملف: 15 ميجابايت',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، WEBP'
  },

  tiles: {
    title: 'صور الفسيفساء',
    uploadTiles: 'رفع صور الفسيفساء',
    dropzoneTiles: 'اسحب وأفلت صور الفسيفساء هنا أو انقر للتصفح',
    maxTiles: 'الحد الأقصى {count} صورة',
    useFolder: 'رفع مجلد الصور',
    orUseSample: 'أو استخدم معرض الأمثلة',
    sampleSets: 'مجموعات الفسيفساء النموذجية',
    nature: 'الطبيعة',
    people: 'الأشخاص',
    art: 'الفن',
    abstract: 'المجرد',
    animals: 'الحيوانات',
    clearAll: 'مسح جميع الفسيفساء'
  },

  settings: {
    title: 'إعدادات الفسيفساء',
    tileSize: 'حجم الفسيفساء',
    small: 'صغير (دقيق)',
    medium: 'متوسط',
    large: 'كبير (خشن)',
    square: 'مربع',
    circle: 'دائري',
    applicationMode: 'طريقة تطبيق الفسيفساء',
    all: 'الصورة كاملة',
    selectRegion: 'اختيار منطقة',
    selectingRegion: 'جاري اختيار المنطقة...',
    autoDetectFaces: 'الكشف التلقائي عن الوجوه',
    detectFaces: 'كشف الوجوه',
    detectFacesDescription: 'كشف الوجوه في الصورة وتطبيق الفسيفساء عليها تلقائياً',
    edgeSmoothing: 'تنعيم الحواف',
    edgeSmoothingDescription: 'تنعيم حواف قطع الفسيفساء لجعل الانتقال أكثر طبيعية',
    custom: 'مخصص',
    width: 'العرض',
    height: 'الارتفاع',
    tilesWide: 'عدد قطع الفسيفساء في العرض',
    tilesHigh: 'عدد قطع الفسيفساء في الارتفاع',
    colorMatch: 'تطابق الألوان',
    intensity: 'الشدة',
    low: 'منخفضة',
    high: 'عالية',
    reuseTiles: 'إعادة استخدام القطع',
    allowDuplicates: 'السماح بالتكرار',
    maxUses: 'الحد الأقصى لاستخدام كل قطعة',
    colorAdjustment: 'ضبط اللون',
    adjustTiles: 'ضبط ألوان القطع لتتطابق',
    blendOriginal: 'مزج مع الصورة الأصلية',
    blendAmount: 'كمية المزج',
    random: 'تغييرات عشوائية',
    shuffle: 'ترتيب القطع عشوائياً'
  },

  advanced: {
    title: 'خيارات متقدمة',
    algorithm: 'خوارزمية المطابقة',
    algorithms: {
      average: 'متوسط اللون',
      dominant: 'اللون السائد',
      histogram: 'رسم بياني للألوان',
      pattern: 'مطابقة النمط'
    },
    tileShape: 'شكل القطع',
    shapes: {
      square: 'مربع',
      circle: 'دائرة',
      hexagon: 'سداسي',
      triangle: 'مثلث',
      random: 'عشوائي'
    },
    tileGap: 'المسافة بين القطع',
    borderColor: 'لون الحدود',
    backgroundColor: 'لون الخلفية'
  },

  output: {
    fileName: 'اسم الملف',
    title: 'المخرجات',
    preview: 'معاينة',
    original: 'الأصلية',
    mosaic: 'الفسيفساء',
    sideBySide: 'عرض جنباً إلى جنب',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    download: 'تحميل الفسيفساء',
    asJpg: 'تحميل كـ JPG',
    asPng: 'تحميل كـ PNG',
    highRes: 'دقة عالية',
    resolution: 'دقة المخرجات',
    format: 'التنسيق',
    quality: 'الجودة',
    size: 'الحجم',
    pixel: 'بكسل',
    pleaseSelectImage: 'الرجاء اختيار صورة',
    pleaseSelectImageAndAdjustSettings: 'الرجاء اختيار صورة وضبط الإعدادات'
  },

  actions: {
    generate: 'إنشاء الفسيفساء',
    regenerate: 'إعادة الإنشاء',
    cancel: 'إلغاء الإنشاء',
    reset: 'إعادة تعيين',
    detectFaces: 'كشف الوجوه',
    saveSettings: 'حفظ الإعدادات',
    loadSettings: 'تحميل الإعدادات'
  },

  messages: {
    generating: 'جاري إنشاء الفسيفساء... قد يستغرق هذا بعض الوقت.',
    generationComplete: 'تم إنشاء الفسيفساء بنجاح!',
    notEnoughTiles: 'لا توجد صور فسيفساء كافية. الرجاء رفع المزيد من الصور.',
    tileProcessing: 'جاري معالجة صور الفسيفساء: {progress}%',
    downloadStarted: 'بدأ التحميل',
    settingsSaved: 'تم حفظ الإعدادات',
    selecting: 'جاري اختيار المنطقة...',
    preview: 'سيظهر تأثير تطبيق الفسيفساء هنا',
    faceDetected: 'تم اكتشاف منطقة وجه',
    facesDetected: 'تم اكتشاف {count} وجه',
    noFacesDetected: 'لم يتم اكتشاف وجوه',
    loadingModels: 'جاري تحميل نموذج كشف الوجوه...',
    faceDetectionFailed: 'فشل كشف الوجوه',
    reset: 'تمت إعادة التعيين',
    error: 'خطأ: {message}'
  }
}; 