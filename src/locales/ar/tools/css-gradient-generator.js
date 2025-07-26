export default {
  name: 'مولد تدرجات CSS',
  description: 'أنشئ وخصص تدرجات CSS جميلة مع معاينة فورية ونسخ الكود لمشروعك',

  gradientTypes: {
    title: 'نوع التدرج',
    linear: 'تدرج خطي',
    radial: 'تدرج شعاعي',
    conic: 'تدرج مخروطي'
  },

  controls: {
    title: 'تحكم بالألوان',
    addColor: 'إضافة لون',
    color: 'اللون',
    position: 'الموضع (%)',
    delete: 'حذف اللون',
    angle: 'الزاوية',
    degrees: 'درجة',
    shape: 'الشكل',
    circle: 'دائرة',
    ellipse: 'بيضاوي',
    positionX: 'الموضع X (%)',
    positionY: 'الموضع Y (%)',
    size: 'الحجم',
    closestSide: 'أقرب جانب',
    closestCorner: 'أقرب زاوية',
    farthestSide: 'أبعد جانب',
    farthestCorner: 'أبعد زاوية',
    fromAngle: 'زاوية البداية'
  },

  output: {
    title: 'كود CSS',
    copyCode: 'نسخ الكود',
    preview: 'منطقة المعاينة',
    copied: 'تم نسخ كود CSS إلى الحافظة!',
    download: 'تنزيل PNG'
  },

  presets: {
    title: 'تدرجات جاهزة',
    apply: 'تطبيق التدرج',
    sunnyMorning: 'صباح مشمس',
    winterNeva: 'نيفا الشتوية',
    rareWind: 'رياح نادرة',
    deepBlue: 'أزرق عميق',
    perfect: 'أبيض مثالي',
    cloudyKnoxville: 'نوكسفيل غائم',
    greenBeach: 'شاطئ أخضر',
    plumBath: 'حمام البرقوق',
    everlasting: 'سماء أبدية'
  },

  accessibility: {
    colorPicker: 'منتقي الألوان',
    deleteSwatch: 'حذف نقطة اللون',
    dragToReposition: 'اسحب لإعادة تموضع نقطة اللون'
  },

  actions: {
    reset: 'إعادة تعيين',
    generateCSS: 'توليد CSS',
    clickToCopy: 'انقر لنسخ الكود',
    completeEdit: 'إنهاء التحرير'
  },

  messages: {
    copied: 'تم نسخ كود CSS إلى الحافظة!',
    noColors: 'أضف لونين على الأقل لإنشاء تدرج',
    maxColors: 'تم الوصول للحد الأقصى لنقاط اللون (10)',
    useKeyboard: 'استخدم زر Delete لحذف نقطة اللون المحددة',
    invalidHex: 'يرجى إدخال كود لون سداسي صالح',
    downloadError: 'فشل تنزيل PNG، يرجى المحاولة لاحقاً',
    preview: 'معاينة'
  },

  anglePresets: {
    top: 'أعلى',
    topRight: 'أعلى اليمين',
    right: 'يمين',
    bottomRight: 'أسفل اليمين',
    bottom: 'أسفل',
    bottomLeft: 'أسفل اليسار',
    left: 'يسار',
    topLeft: 'أعلى اليسار'
  },

  radialShapes: {
    circle: 'دائرة',
    ellipse: 'بيضاوي'
  },

  radialSizes: {
    farthestCorner: 'أبعد زاوية',
    closestCorner: 'أقرب زاوية',
    farthestSide: 'أبعد جانب',
    closestSide: 'أقرب جانب',
  }
}; 