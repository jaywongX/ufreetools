export default {
  name: 'منتقي الألوان',
  description: 'اختر وتحويل وإنشاء مخططات ألوان باستخدام أدوات الألوان المتقدمة',

  options: {
    colorSpace: 'مساحة اللون',
    paletteType: 'نوع لوحة الألوان',
    includeAlpha: 'تضمين الشفافية',
    colorNaming: 'تسمية الألوان'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'ألوان مسماة'
  },

  palettes: {
    monochromatic: 'أحادي اللون',
    complementary: 'ألوان مكملة',
    analogous: 'ألوان متشابهة',
    triadic: 'ثلاثي الألوان',
    tetradic: 'رباعي الألوان',
    split: 'ألوان مكملة منقسمة'
  },

  actions: {
    pickColor: 'اختر لوناً',
    randomColor: 'لون عشوائي',
    generatePalette: 'إنشاء لوحة ألوان',
    convert: 'تحويل',
    copyColor: 'نسخ اللون الحالي',
    copyAll: 'نسخ الكل',
    save: 'حفظ الألوان',
    reset: 'إعادة تعيين',
    clear: 'مسح'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'مخططات الألوان',
    complementary: 'ألوان مكملة',
    triadic: 'ثلاثي الألوان',
    analogous: 'ألوان متشابهة',
    monochromatic: 'أحادي اللون',
    split: 'ألوان مكملة منقسمة',
    double: 'ألوان مكملة مزدوجة',
    square: 'ألوان مربعة',
    compound: 'ألوان مركبة'
  },

  colorAdjust: {
    title: 'ضبط اللون',
    hue: 'درجة اللون',
    saturation: 'التشبع',
    lightness: 'السطوع',
    alpha: 'الشفافية'
  },

  colorInfo: {
    title: 'معلومات اللون',
    name: 'اسم اللون',
    format: 'التنسيق',
    contrast: 'التباين',
    accessibility: {
      title: 'إمكانية الوصول',
      pass: 'يتوافق مع معايير WCAG',
      fail: 'لا يتوافق مع معايير WCAG',
      normal: 'نص عادي',
      large: 'نص كبير'
    }
  },

  messages: {
    copied: 'تم نسخ اللون إلى الحافظة',
    copyFailed: 'فشل نسخ اللون',
    invalidColor: 'تنسيق لون غير صالح',
    contrastWarning: 'تباين منخفض',
    saved: 'تم حفظ اللون',
    contrast: 'التباين: {ratio}',
    accessibility: {
      AAA: 'تباين ممتاز (AAA)',
      AA: 'تباين جيد (AA)',
      fail: 'تباين غير كافٍ - لا يتوافق مع معايير إمكانية الوصول'
    },
    preview: 'معاينة',
    colorValue: 'قيمة اللون'
  },

  history: {
    title: 'سجل الألوان',
    empty: 'لا يوجد سجل ألوان',
    clear: 'مسح السجل'
  },

  colorPalette: {
    title: 'لوحة الألوان',
    addToPalette: 'إضافة إلى لوحة الألوان',
    removeFromPalette: 'إزالة من لوحة الألوان',
    exportPalette: 'تصدير لوحة الألوان',
    importPalette: 'استيراد لوحة الألوان',
    clearPalette: 'مسح لوحة الألوان'
  }
}; 