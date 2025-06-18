export default {
  name: 'صانع صور الهوية',
  description: 'إنشاء صور هوية احترافية بخلفية وأبعاد قابلة للتخصيص',
  upload: {
    title: 'رفع صورة',
    dropzone: 'اسحب وأفلت الصورة هنا أو انقر للتصفح',
    or: 'أو',
    camera: 'التقاط صورة بالكاميرا',
    constraints: 'الحد الأقصى للحجم: 10 ميجابايت. التنسيقات: JPG، PNG، WEBP',
    takePicture: 'التقاط صورة',
    retake: 'إعادة التقاط'
  },
  editing: {
    title: 'تعديل الصورة',
    faceDetection: 'كشف الوجه',
    autoDetect: 'كشف الوجه تلقائياً',
    manualMode: 'التعديل اليدوي',
    zoom: 'تكبير/تصغير',
    rotate: 'تدوير',
    brightness: 'السطوع',
    contrast: 'التباين',
    saturation: 'التشبع',
    filters: 'المرشحات'
  },
  background: {
    title: 'الخلفية',
    original: 'الأصلية',
    white: 'بيضاء',
    blue: 'زرقاء',
    red: 'حمراء',
    custom: 'لون مخصص',
    transparent: 'شفافة'
  },
  size: {
    title: 'حجم الصورة',
    presets: 'الأحجام الجاهزة',
    custom: 'حجم مخصص',
    width: 'العرض',
    height: 'الارتفاع',
    unit: 'الوحدة',
    mm: 'مليمتر',
    inches: 'بوصة',
    pixels: 'بكسل'
  },
  presets: {
    passport: 'جواز السفر (35×45 ملم)',
    visa: 'التأشيرة (2×2 بوصة)',
    drivingLicense: 'رخصة القيادة (2.5×3 بوصة)',
    idCard: 'بطاقة الهوية (25×35 ملم)',
    linkedin: 'لينكد إن (400×400 بكسل)',
    schengen: 'تأشيرة شنغن (35×45 ملم)',
    chinese: 'التأشيرة الصينية (33×48 ملم)',
    indian: 'التأشيرة الهندية (2×2 بوصة)'
  },
  output: {
    title: 'المخرجات',
    preview: 'معاينة',
    grid: 'صور متعددة',
    columns: 'عدد الأعمدة',
    rows: 'عدد الصفوف',
    spacing: 'المسافة',
    background: 'خلفية الصفحة',
    paperSize: 'حجم الورق',
    download: 'تحميل',
    print: 'طباعة',
    downloadAs: 'تحميل كـ',
    jpg: 'صورة JPG',
    png: 'صورة PNG',
    pdf: 'مستند PDF'
  },
  actions: {
    apply: 'تطبيق',
    reset: 'إعادة تعيين',
    undo: 'تراجع',
    redo: 'إعادة',
    save: 'حفظ الصورة',
    share: 'مشاركة'
  },
  messages: {
    noFaceDetected: 'لم يتم اكتشاف وجه. حاول التعديل يدوياً أو استخدام صورة مختلفة.',
    multipleFacesDetected: 'تم اكتشاف وجوه متعددة. سيتم استخدام أكبر وجه.',
    processing: 'جاري معالجة صورتك...',
    downloadReady: 'صورتك جاهزة للتحميل',
    photoSaved: 'تم حفظ الصورة بنجاح'
  }
} 