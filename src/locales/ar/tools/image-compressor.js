export default {
  name: 'ضاغط الصور',
  description: 'ضغط وتحسين الصور مع الحفاظ على الجودة',

  input: {
    dragDrop: 'اسحب وأفلت الصور هنا أو انقر للرفع',
    supportedFormats: 'التنسيقات المدعومة: JPG، PNG، GIF، WEBP',
    selected: 'تم اختيار {count} ملفات',
    changeFiles: 'تغيير الملفات',
    width: 'العرض',
    height: 'الارتفاع',
    keepOriginal: 'تعيين 0 للحفاظ على الأبعاد الأصلية',
  },

  results: {
    originalImage: 'الصورة الأصلية',
    compressedImage: 'بعد الضغط',
    filename: 'اسم الملف:',
    dimensions: 'الأبعاد:',
    fileSize: 'الحجم:',
    compressionRatio: 'نسبة الضغط:',
    viewOriginal: 'عرض الصورة الأصلية',
  },

  about: {
    title: 'عن ضغط الصور',
    description: 'يتم تنفيذ هذه الأداة باستخدام Canvas API للمتصفح، وجميع المعالجة تتم على جهازك، ولا يتم رفع الصور إلى الخادم.',
    principlesTitle: 'مبادئ الضغط:',
    principles: {
      resize: 'تغيير حجم الصورة: الأبعاد الأصغر تعني بيانات بكسل أقل',
      quality: 'تقليل الجودة: خفض معامل جودة الصورة لتقليل حجم الملف',
      format: 'تحويل التنسيق: تنسيقات الصور المختلفة لها خصائص ضغط مختلفة'
    },
    useCasesTitle: 'حالات الاستخدام:',
    useCases: {
      web: 'تحسين صور المواقع، تسريع وقت التحميل',
      email: 'تقليل حجم مرفقات البريد الإلكتروني',
      social: 'ضغط الصور قبل رفعها على وسائل التواصل الاجتماعي',
      storage: 'تحسين مساحة التخزين'
    }
  },

  options: {
    quality: 'الجودة',
    qualityValue: 'الجودة ({value}%)',
    lowQuality: 'جودة منخفضة/ملف صغير',
    highQuality: 'جودة عالية/ملف كبير',
    format: 'تنسيق الإخراج',
    maxSize: 'الحد الأقصى للأبعاد ({width} × {height} بكسل)',
    keepExif: 'الحفاظ على بيانات EXIF',
    resizeImage: 'تغيير حجم الصورة',
    maxWidth: 'الحد الأقصى للعرض',
    maxHeight: 'الحد الأقصى للارتفاع',
    compressionLevel: 'مستوى الضغط',
    maxFileSize: 'حجم الملف المستهدف',
    optimizationLevel: 'مستوى التحسين',
    convertTo: 'تحويل إلى'
  },

  presets: {
    web: 'تحسين الويب',
    highQuality: 'جودة عالية',
    balanced: 'متوازن',
    smallSize: 'حجم صغير',
    custom: 'مخصص'
  },

  formats: {
    original: 'التنسيق الأصلي',
    jpeg: 'JPEG',
    jpegDesc: 'تنسيق JPEG مناسب للصور، لا يدعم الخلفية الشفافة',
    png: 'PNG',
    pngDesc: 'تنسيق PNG يدعم الخلفية الشفافة، مناسب للأيقونات والرسوم التوضيحية',
    webp: 'WebP',
    webpDesc: 'تنسيق WebP يوفر نسبة ضغط عالية، مناسب للاستخدام على الويب',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'عدم تغيير الحجم',
    maxDimension: 'الحد الأقصى للأبعاد',
    exactDimensions: 'أبعاد دقيقة',
    percentage: 'تغيير الحجم بنسبة مئوية'
  },

  actions: {
    upload: 'رفع الصور',
    compress: 'ضغط',
    processing: 'جاري المعالجة...',
    download: 'تحميل',
    downloadAll: 'تحميل الكل',
    batchDownload: 'تحميل متعدد',
    clear: 'مسح',
    addMore: 'إضافة المزيد من الصور',
    removeAll: 'إزالة الكل',
    preview: 'معاينة',
    delete: 'حذف'
  },

  table: {
    filename: 'اسم الملف',
    originalSize: 'الحجم الأصلي',
    original: 'حجم الملف الأصلي',
    compressedSize: 'الحجم بعد الضغط',
    compressed: 'الحجم بعد الضغط',
    savings: 'التوفير',
    ratio: 'نسبة الضغط',
    quality: 'الجودة',
    dimensions: 'الأبعاد',
    originalDimensions: 'الأبعاد الأصلية',
    newDimensions: 'الأبعاد الجديدة',
    status: 'الحالة'
  },

  messages: {
    dropped: 'تم إسقاط {count} صورة',
    uploading: 'جاري رفع الصور...',
    compressing: 'جاري ضغط الصور...',
    compressed: 'تم ضغط الصور بنجاح',
    downloadPreparing: 'جاري تجهيز التحميل...',
    downloadReady: 'التحميل جاهز',
    cleared: 'تم مسح جميع الصور',
    tooManyFiles: 'عدد الملفات كبير جداً. الحد الأقصى المسموح به: {max}',
    fileTooLarge: 'حجم الملف كبير جداً. الحد الأقصى المسموح به: {max} ميجابايت',
    unsupportedFormat: 'تنسيق ملف غير مدعوم: {format}',
    imageError: 'حدث خطأ أثناء معالجة الصورة: {error}',
    batchDownloadNotSupported: 'ميزة التحميل المتعدد تتطلب إضافة مكتبة JSZip. يرجى تحميل الصور واحداً تلو الآخر، أو إضافة دعم مكتبة zip.',
    batchDownloadError: 'حدث خطأ أثناء تحميل الصور المتعددة: {error}',
    invalidImage: 'الرجاء اختيار ملف صورة صالح'
  }
}; 