export default {
  name: 'محسن SVG',
  description: 'تحسين وتنظيف ملفات SVG لتحسين الأداء وتقليل حجم الملف',

  upload: {
    title: 'رفع SVG',
    dropzone: 'اسحب وأفلت ملف SVG هنا أو انقر للرفع',
    or: 'أو',
    pasteCode: 'لصق كود SVG',
    maxSize: 'الحد الأقصى لحجم الملف: 5 ميجابايت',
    onlySvg: 'يدعم فقط ملفات بتنسيق SVG',
    selected: 'تم الاختيار',
    changeFile: 'تغيير الملف'
  },

  input: {
    title: 'إدخال SVG',
    pasteHere: 'الصق كود SVG هنا...',
    loadExample: 'تحميل مثال',
    clear: 'مسح',
    validate: 'التحقق من صحة SVG'
  },

  output: {
    title: 'نتيجة التحسين',
    copyToClipboard: 'نسخ إلى الحافظة',
    download: 'تنزيل SVG',
    beforeSize: 'الحجم الأصلي',
    afterSize: 'الحجم بعد التحسين',
    reduction: 'نسبة التخفيض',
    reductionBy: 'تم التخفيض بنسبة',
    svgCode: 'كود SVG'
  },

  options: {
    title: 'خيارات التحسين',
    preset: 'الإعداد المسبق',
    presets: {
      default: 'افتراضي',
      light: 'خفيف',
      aggressive: 'عدواني',
      custom: 'مخصص'
    },
    removeComments: 'إزالة التعليقات',
    removeCommentsDesc: 'إزالة التعليقات وأقسام cdata',
    removeHiddenElements: 'إزالة العناصر المخفية',
    removeEmptyContainers: 'إزالة الحاويات الفارغة',
    removeUnusedDefs: 'إزالة التعريفات غير المستخدمة',
    removeViewBox: 'إزالة viewBox',
    keepViewBox: 'الاحتفاظ بـ viewBox',
    keepViewBoxDesc: 'الاحتفاظ بسمة viewBox لضمان قابلية تغيير حجم SVG',
    cleanupIDs: 'تنظيف المعرفات',
    cleanupIDsDesc: 'إزالة أو تقصير المعرفات غير المستخدمة',
    convertColors: 'تحويل الألوان إلى نظام الست عشري',
    removeMetadata: 'إزالة البيانات الوصفية',
    removeMetadataDesc: 'إزالة عنصر &lt;metadata&gt;',
    removeDoctype: 'إزالة نوع المستند',
    removeXMLProcInst: 'إزالة تعليمات XML',
    removeEditorsNS: 'إزالة مساحات أسماء المحرر',
    collapseGroups: 'دمج المجموعات',
    collapseGroupsDesc: 'دمج عناصر المجموعة التي ليس لها سمات خاصة',
    convertPathData: 'تحسين بيانات المسار',
    convertPathDataDesc: 'تحويل بيانات المسار إلى إحداثيات نسبية، تقليل المنازل العشرية، إلخ',
    convertTransforms: 'تحسين التحويلات',
    convertShapeToPath: 'تحويل الشكل إلى مسار',
    convertShapeToPathDesc: 'تحويل الأشكال الأساسية إلى عناصر &lt;path&gt;',
    removeUselessStrokeAndFill: 'إزالة الحدود والملء غير المفيدة',
    moveElemsAttrsToGroup: 'نقل سمات العناصر إلى المجموعة',
    mergePaths: 'دمج المسارات',
    minifyStyles: 'تصغير الأنماط',
    inlineStyles: 'دمج الأنماط',
    inlineStylesDesc: 'تحويل الأنماط من عنصر &lt;style&gt; إلى أنماط مضمنة',
    cleanupNumericValues: 'تقريب القيم العددية',
    precision: 'دقة القيم',
    decimalPlaces: 'منازل عشرية',
    lowPrecision: 'دقة منخفضة (حجم أصغر)',
    highPrecision: 'دقة عالية (جودة أفضل)',
    removeDimensions: 'إزالة سمات الأبعاد',
    removeDimensionsDesc: 'إزالة سمات العرض/الارتفاع، استخدام viewBox للتحكم في الحجم',
    sortAttrs: 'ترتيب السمات',
    sortAttrsDesc: 'ترتيب سمات العناصر أبجدياً'
  },

  view: {
    title: 'معاينة',
    original: 'الأصلي',
    optimized: 'بعد التحسين',
    showBorder: 'إظهار الحدود',
    backgroundColor: 'لون الخلفية',
    grid: 'إظهار الشبكة',
    zoom: 'تكبير/تصغير',
    toggleAnimation: 'تبديل الرسوم المتحركة'
  },

  actions: {
    optimize: 'بدء التحسين',
    optimizing: 'جاري التحسين...',
    resetOptions: 'إعادة تعيين الخيارات',
    download: 'تنزيل SVG المحسن',
    copy: 'نسخ',
    copyCode: 'نسخ الكود',
    viewCode: 'عرض الكود',
    viewPreview: 'عرض المعاينة'
  },

  messages: {
    optimizationSuccess: 'تم تحسين SVG بنجاح',
    optimizationFailed: 'فشل تحسين SVG: {error}',
    invalidSvg: 'ملف أو كود SVG غير صالح',
    copied: 'تم النسخ إلى الحافظة',
    copyFailed: 'فشل النسخ، يرجى النسخ يدوياً',
    downloaded: 'تم تنزيل SVG المحسن',
    emptyInput: 'يرجى تقديم كود SVG أو ملف للتحسين',
    onlySvgAllowed: 'يرجى رفع ملف بتنسيق SVG فقط!',
    failedToLoadLibrary: 'تعذر تحميل مكتبة SVGO'
  }
}; 