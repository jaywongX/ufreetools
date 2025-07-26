export default {
  name: "مولد User Agent",
  description: "إنشاء سلاسل User-Agent لمتصفحات وأجهزة مختلفة لأغراض اختبار المواقع، الزحف، والتطوير",

  filters: {
    title: "فلاتر التصفية",
    browser: "المتصفح",
    os: "نظام التشغيل",
    deviceType: "نوع الجهاز"
  },

  browsers: {
    all: "جميع المتصفحات",
    chrome: "Chrome",
    firefox: "Firefox",
    safari: "Safari",
    opera: "Opera",
    edge: "Edge",
    ie: "Internet Explorer",
    unknown: "متصفح غير معروف"
  },

  operatingSystems: {
    all: "جميع الأنظمة",
    windows: "Windows",
    macos: "macOS",
    linux: "Linux",
    android: "Android",
    ios: "iOS",
    unknown: "نظام غير معروف"
  },

  deviceTypes: {
    all: "جميع الأجهزة",
    desktop: "كمبيوتر مكتبي",
    mobile: "جهاز محمول",
    tablet: "جهاز لوحي",
    unknown: "جهاز غير معروف"
  },

  generation: {
    quantity: "عدد السلاسل المطلوبة",
    generateRandom: "إنشاء User-Agent عشوائي",
    clearResults: "مسح النتائج"
  },

  results: {
    title: "النتائج المولدة",
    copyAll: "نسخ الكل",
    empty: "يرجى النقر على زر \"إنشاء User-Agent عشوائي\" لإنشاء النتائج"
  },

  messages: {
    copied: "تم النسخ إلى الحافظة",
    allCopied: "تم نسخ جميع سلاسل User-Agent إلى الحافظة",
    copyFailed: "فشل النسخ، يرجى النسخ يدويًا"
  },

  info: {
    formatTitle: "شرح تنسيق User-Agent",
    formatDescription: "تحتوي سلسلة User-Agent عادةً على اسم المتصفح، الإصدار، نظام التشغيل ومعلومات الجهاز، بالتنسيق التالي:",
    formatExample: "Mozilla/5.0 (معلومات المنصة) معلومات المحرك معلومات المتصفح",
    examplesTitle: "أمثلة شائعة لـ User-Agent:",
    chromeWindows: "Chrome (Windows):",
    firefoxMac: "Firefox (macOS):",
    safariIOS: "Safari (iOS):",
    useCasesTitle: "حالات الاستخدام:",
    useCases: [
      "اختبار توافق الموقع",
      "الزحف وجمع البيانات",
      "تطوير واختبار API",
      "تجاوز كشف المتصفح",
      "محاكاة وصول أجهزة مختلفة"
    ]
  }
};