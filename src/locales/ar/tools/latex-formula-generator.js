export default {
  name: "مولد معادلات LaTeX",
  description: "إنشاء وتصدير معادلات LaTeX الرياضية في الوقت الفعلي",

  // نصوص واجهة المستخدم
  input: "أدخل كود LaTeX",

  output: "معاينة النتيجة",
  renderButton: "عرض المعادلة",
  exportButton: "تصدير كصورة",
  copyButton: "نسخ كود LaTeX",

  // الإعدادات
  settings: {
    title: "الإعدادات",
    fontSize: "حجم الخط",
    textColor: "لون النص",
    backgroundColor: "لون الخلفية",
    displayMode: "وضع العرض",
    displayModeInline: "وضع مضمن",
    displayModeBlock: "وضع كتلة"
  },

  // الأمثلة
  examples: {
    title: "أمثلة",
    basic: "معادلات أساسية",
    fraction: "كسور",
    superscript: "أس/أس سفلي",
    integral: "تكاملات",
    matrix: "مصفوفات",
    more: "المزيد من الأمثلة"
  },

  // الرسائل
  copied: "تم النسخ إلى الحافظة",

  errorTitle: "خطأ في العرض",
  errorMessage: "الرجاء التحقق من صيغة LaTeX الخاصة بك"
};
