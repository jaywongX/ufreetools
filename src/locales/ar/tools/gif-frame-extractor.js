export default {
  name: 'مستخرج إطارات GIF',
  description: 'استخراج إطارات فردية من رسوم GIF المتحركة',
  uploadBtn: 'اختر ملف GIF',
  resetBtn: 'إعادة تعيين',
  extractBtn: 'استخراج الإطارات',
  extractingBtn: 'جاري الاستخراج...',
  downloadAllBtn: 'تنزيل جميع الإطارات',

  upload: {
    title: 'رفع ملف GIF',
    dropzone: 'اسحب وأفلت ملف GIF هنا أو انقر للتصفح',
    maxSize: 'الحد الأقصى لحجم الملف: 20 ميجابايت',
    onlyGif: 'يدعم ملفات GIF فقط',
    selectGif: 'الرجاء اختيار ملف GIF'
  },

  analysis: {
    title: 'معلومات GIF',
    dimensions: 'الأبعاد',
    frameCount: 'عدد الإطارات',
    duration: 'المدة',
    fps: 'إطارات في الثانية',
    fileSize: 'حجم الملف',
    loopCount: 'عدد التكرار',
    infinite: 'لا نهائي',
    fileName: 'اسم الملف',
    size: 'الحجم',
    totalFrames: 'إجمالي الإطارات',
    notExtracted: 'لم يتم الاستخراج'
  },

  extraction: {
    title: 'استخراج الإطارات',
    selectFrames: 'اختر الإطارات',
    allFrames: 'جميع الإطارات',
    rangeOfFrames: 'نطاق الإطارات',
    from: 'من',
    to: 'إلى',
    specificFrames: 'إطارات محددة',
    frameNumbers: 'أرقام الإطارات (مفصولة بفواصل)',
    everyNth: 'كل إطار N',
    nth: 'كل',
    frames: 'إطار',
    selectFirst: 'الإطار الأول',
    selectLast: 'الإطار الأخير',
    selectMiddle: 'الإطار الأوسط',
    selectKeyFrames: 'اكتشاف الإطارات الرئيسية تلقائياً'
  },

  output: {
    title: 'إعدادات التصدير',
    format: 'تنسيق الإخراج',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: 'التحجيم',
    originalSize: 'الحجم الأصلي',
    customSize: 'حجم مخصص',
    width: 'العرض',
    height: 'الارتفاع',
    quality: 'الجودة',
    qualityValue: 'الجودة: {value}%',
    lowQuality: 'جودة منخفضة (ملف صغير)',
    highQuality: 'جودة عالية (ملف كبير)',
    naming: 'تسمية الملفات',
    pattern: 'النمط',
    filename: 'اسم الملف الأصلي',
    framenumber: 'رقم الإطار',
    timestamp: 'الطابع الزمني',
    preview: 'معاينة',
    downloadOptions: 'خيارات التنزيل',
    separateFiles: 'ملفات منفصلة',
    zipArchive: 'أرشيف ZIP',
    spritesheet: 'ورقة الصور',
    gridSize: 'حجم الشبكة',
    columns: 'عدد الأعمدة',
    animation: 'رسوم متحركة جديدة'
  },

  frames: {
    title: 'الإطارات المستخرجة',
    frameInfo: 'الإطار {number} من {total}',
    frame: 'إطار',
    delay: 'التأخير: {delay} مللي ثانية',
    downloadFrame: 'تنزيل',
    copyFrame: 'نسخ',
    selectAll: 'تحديد الكل',
    unselectAll: 'إلغاء تحديد الكل',
    invertSelection: 'عكس التحديد',
    noFrames: 'لا توجد إطارات مستخرجة',
    extractFirst: 'الرجاء استخراج الإطارات أولاً'
  },

  actions: {
    extract: 'استخراج الإطارات',
    preview: 'معاينة',
    downloadSelected: 'تنزيل المحدد',
    downloadAll: 'تنزيل الكل',
    createSpritesheet: 'إنشاء ورقة صور',
    createNewGif: 'إنشاء GIF جديد',
    cancel: 'إلغاء',
    processing: 'جاري المعالجة...'
  },

  messages: {
    extractionComplete: 'اكتمل استخراج الإطارات',
    extracting: 'جاري استخراج الإطارات...',
    noFramesSelected: 'لم يتم تحديد إطارات',
    processingGif: 'جاري معالجة ملف GIF...',
    invalidGif: 'ملف GIF غير صالح',
    framesCopied: 'تم نسخ الإطارات إلى الحافظة',
    downloadStarted: 'بدأ التنزيل',
    spritesheetCreated: 'تم إنشاء ورقة الصور بنجاح',
    frameDownloaded: 'تم تنزيل الإطار',
    preparingFrames: 'جاري تحضير جميع الإطارات، يرجى الانتظار...',
    allFramesDownloaded: 'تم تنزيل جميع الإطارات',
    downloadError: 'فشل تنزيل جميع الإطارات',
    resetComplete: 'تمت إعادة التعيين',
    fileEmpty: 'بيانات الملف فارغة'
  }
}; 