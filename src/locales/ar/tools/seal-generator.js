export default {
  name: 'منشئ الختم',
  description: 'إنشاء صور أختام رقمية عبر الإنترنت، مثل الأختام الشرعية والأختام الشخصية',

  // الواجهة الرئيسية
  text: 'نص الختم',

  textPlaceholder: 'أدخل النص المحيط',
  centerText: 'النص المركزي',
  centerTextPlaceholder: 'أدخل النص أو الرمز المركزي',
  font: 'اختيار الخط',
  shape: 'شكل الختم',
  size: 'حجم الختم',
  color: 'لون الختم',
  generate: 'إنشاء الختم',
  download: 'تحميل الصورة',
  reset: 'إعادة تعيين',
  preview: 'معاينة الختم',
  previewPlaceholder: 'انقر على زر "إنشاء الختم" لمعاينة النتيجة',
  bottomText: 'النص السفلي',
  bottomTextPlaceholder: 'أدخل النص السفلي',
  centerSymbol: 'الرمز المركزي',
  centerImage: 'تحميل شعار مركزي',
  template: 'قوالب الأختام',
  centerSymbolSize: 'حجم الرمز المركزي',
  exportFormat: 'تنسيق التصدير',
  lineWidth: 'سمك الخطوط',
  defaultSealText: 'شركة محافظة ذات مسؤولية محدودة',
  defaultBottomText: 'ختم العقد الرسمي',
  width: 'العرض',
  height: 'الارتفاع',
  agingEffect: 'تأثير التقديم',
  colorHex: 'قيمة اللون السداسي',
  customColor: 'لون مخصص',

  // خيارات الخطوط
  fonts: {
    simsun: 'سونغ تي',
    kaiti: 'كاي تي',
    simhei: 'هي تي',
    yahei: 'مايكروسوفت يا هي',
    stxingkai: 'هوا وين شينغ كاي',
    stzhongsong: 'هوا وين زونغ سونغ',
    stfangsong: 'هوا وين فانغ سونغ',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // خيارات الأشكال
  shapes: {
    circle: 'دائري',
    ellipse: 'بيضاوي',
    square: 'مربع'
  },

  // خيارات الألوان
  colors: {
    red: 'أحمر',
    darkRed: 'أحمر غامق',
    blue: 'أزرق',
    navy: 'أزرق بحري',
    green: 'أخضر',
    darkGreen: 'أخضر غامق',
    purple: 'بنفسجي',
    magenta: 'أرجواني',
    brown: 'بني',
    black: 'أسود',
    custom: 'لون مخصص'
  },

  // دليل الاستخدام
  howToUse: 'تعليمات الاستخدام',

  instructions: {
    step1: 'أدخل النص الذي تريد عرضه حول الختم، مثل اسم الشركة أو الاسم الشخصي',
    step2: 'اختر النص أو الشعار المركزي للختم، يمكن أن يكون نجمة أو رمزًا أو أي علامة أخرى',
    step3: 'اضبط شكل الختم وحجمه ولونه، ثم قم بمعاينة النتيجة',
    step4: 'بعد الرضا عن النتيجة، انقر على زر "تحميل الصورة" لحفظ الختم المخصص'
  },

  templates: {
    custom: 'مخصص',
    company: 'ختم شركة',
    contract: 'ختع العقد الرسمي',
    finance: 'ختم مالي',
    legal: 'ختم قانوني',
    personal: 'ختم شخصي'
  }
};