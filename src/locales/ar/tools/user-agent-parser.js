export default {
  name: "محلل User Agent",
  description: "تحليل وتفكيك سلاسل تعريف متصفح المستخدم لتحديد المتصفح ونظام التشغيل ومعلومات الجهاز",

  input: {
    label: "سلسلة User-Agent",
    placeholder: "أدخل أو الصق سلسلة User-Agent..."
  },

  actions: {
    parse: "تحليل",
    detect: "كشف المتصفح الحالي",
    clear: "مسح"
  },

  results: {
    title: "نتائج التحليل",
    summary: "ملخص",
    details: "تفاصيل",
    originalUA: "سلسلة User-Agent الأصلية"
  },

  sections: {
    browser: "المتصفح",
    os: "نظام التشغيل",
    device: "الجهاز",
    other: "معلومات أخرى"
  },

  deviceTypes: {
    mobile: "جهاز محمول",
    tablet: "جهاز لوحي",
    desktop: "جهاز مكتبي"
  },

  fields: {
    name: "الاسم",
    version: "الإصدار",
    engine: "المحرك",
    platform: "المنصة",
    type: "النوع",
    vendor: "الشركة المصنعة",
    model: "الموديل",
    isMobile: "جهاز محمول",
    isTablet: "جهاز لوحي",
    isDesktop: "جهاز مكتبي"
  },

  messages: {
    parsingError: "حدث خطأ أثناء تحليل سلسلة User-Agent",
    emptyInput: "الرجاء إدخال سلسلة User-Agent",
    unknown: "غير معروف",
    yes: "نعم",
    no: "لا"
  },

  tips: {
    description: "User-Agent هو سلسلة تعريف يرسلها المتصفح إلى الخادم، وتحتوي على معلومات حول المتصفح ونظام التشغيل والجهاز.",
    useCases: "تُستخدم عادةً في تحليل المواقع، ومعالجة توافق المتصفحات، وتكيف الأجهزة."
  }
};