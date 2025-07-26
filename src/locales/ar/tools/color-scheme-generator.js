export default {
  name: 'منشئ أنظمة الألوان',
  description: 'إنشاء أنظمة ألوان متناسقة بناءً على نظرية الألوان لمساعدة المصممين على إنشاء لوحات ألوان متناغمة بسرعة',

  baseColor: {
    title: 'اللون الأساسي',
    picker: 'منتقي الألوان',
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'لون عشوائي',
    recent: 'الألوان المستخدمة مؤخرًا',
    hint: 'انقر على مربع اللون أو أدخل قيمة لون HEX',
  },

  schemeTypes: {
    title: 'نظرية الألوان',
    monochromatic: 'أحادي اللون',
    analogous: 'ألوان متشابهة',
    complementary: 'ألوان مكملة',
    splitComplementary: 'ألوان مكملة منقسمة',
    triadic: 'ألوان ثلاثية',
    tetradic: 'ألوان رباعية',
    square: 'مربع',
    compound: 'مركب',
    shades: 'تدرجات',
    custom: 'مخصص',
  },

  options: {
    colorCount: 'عدد الألوان',
    saturationRange: 'نطاق التشبع',
    brightnessRange: 'نطاق السطوع',
    includeBaseColor: 'تضمين اللون الأساسي',
    lockBaseColor: 'قفل اللون الأساسي',
    colorSpace: 'مساحة اللون',
    sortBy: 'ترتيب حسب',
    colorBlindSafe: 'آمن لمصابي عمى الألوان',
    contrastRatio: 'نسبة التباين الدنيا'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: 'درجة اللون',
    saturation: 'التشبع',
    brightness: 'السطوع',
    harmony: 'التناغم',
    none: 'بدون ترتيب'
  },

  palettes: {
    title: 'لوحة الألوان المنشأة',
    save: 'حفظ اللوحة',
    copy: 'نسخ اللوحة',
    export: 'تصدير كمتغيرات CSS',
    apply: 'تطبيق على المعاينة'
  },

  exportFormats: {
    title: 'صيغ التصدير',
    css: 'متغيرات CSS',
    scss: 'متغيرات SCSS',
    less: 'متغيرات LESS',
    json: 'JSON',
    svg: 'لوحة ألوان SVG',
    ase: 'Adobe ASE',
    tailwind: 'إعدادات Tailwind',
    pdf: 'PDF'
  },

  preview: {
    title: 'معاينة',
    website: 'موقع ويب',
    mobilApp: 'تطبيق جوال',
    dashboard: 'لوحة تحكم',
    card: 'بطاقة',
    poster: 'ملصق',
    custom: 'مخصص',
    mainButton: 'زر رئيسي',
    secondButton: 'زر ثانوي',
    tag: 'علامة'
  },

  savedPalettes: {
    title: 'لوحات الألوان المحفوظة',
    load: 'تحميل',
    delete: 'حذف',
    rename: 'إعادة تسمية',
    noSavedPalettes: 'لا توجد لوحات ألوان محفوظة',
    saved: 'لوحات الألوان المحفوظة',
    schemeNameEmpty: 'اسم اللوحة فارغ',
  },

  actions: {
    generate: 'إنشاء نظام',
    regenerate: 'إعادة إنشاء',
    reset: 'إعادة تعيين',
    lockColor: 'قفل اللون',
    unlockColor: 'إلغاء قفل اللون',
    save: 'حفظ اللوحة',
  },

  messages: {
    paletteSaved: 'تم حفظ اللوحة بنجاح',
    paletteDeleted: 'تم حذف اللوحة',
    copied: 'تم النسخ إلى الحافظة',
    exported: 'تم التصدير بنجاح',
    adjustmentParam: 'معاملات الضبط',
    schemeName: 'اسم النظام',
    copyAllColors: 'تم نسخ جميع الألوان',
  }
};