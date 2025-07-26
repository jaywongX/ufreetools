export default {
  name: 'مولد كلمات المرور',
  description: 'إنشاء كلمات مرور آمنة وعشوائية مع خيارات قابلة للتخصيص',

  options: {
    length: 'طول كلمة المرور',
    quantity: 'عدد كلمات المرور',
    includeLowercase: 'أحرف صغيرة (a-z)',
    includeUppercase: 'أحرف كبيرة (A-Z)',
    includeNumbers: 'أرقام (0-9)',
    includeSymbols: 'رموز (!@#$%)',
    excludeSimilar: 'استبعاد الأحرف المتشابهة (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'استبعاد الرموز الغامضة ({}<>[]()\'"`\\)',
    requireAll: 'تطلب جميع أنواع الأحرف',
    noConsecutive: 'لا توجد أحرف متشابهة متتالية',
    advancedOptions: 'خيارات متقدمة',
    characterTypes: 'أنواع الأحرف'
  },

  presets: {
    standard: 'قياسي',
    strong: 'قوي',
    memorable: 'سهل التذكر',
    pin: 'رمز PIN',
    pronounceable: 'قابل للنطق',
    custom: 'مخصص',
    easyToRemember: 'سهل التذكر',
    balanced: 'متوازن',
    secure: 'آمن'
  },

  strength: {
    title: 'قوة كلمة المرور',
    veryWeak: 'ضعيف جدًا',
    weak: 'ضعيف', 
    medium: 'متوسط',
    strong: 'قوي',
    veryStrong: 'قوي جدًا',
    unknown: 'غير معروف'
  },

  actions: {
    generate: 'إنشاء كلمة المرور',
    regenerate: 'إعادة إنشاء',
    copy: 'نسخ',
    copyAll: 'نسخ الكل',
    clear: 'مسح',
    expand: 'توسيع',
    collapse: 'طي'
  },

  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    allCopied: 'تم نسخ جميع كلمات المرور إلى الحافظة!',
    generated: 'تم إنشاء كلمة المرور بنجاح',
    invalidOptions: 'الرجاء اختيار نوع حرف واحد على الأقل',
    tooManyPasswords: 'الحد الأقصى لعدد كلمات المرور هو 100',
    clickToGenerate: 'انقر فوق الزر أعلاه لإنشاء كلمة المرور'
  },

  errors: {
    copyFailed: 'تعذر نسخ كلمة المرور: ',
    copyFailedManual: 'فشل النسخ، يرجى النسخ يدويًا'
  },

  results: {
    title: 'كلمات المرور المولدة'
  },

  units: {
    passwords: 'كلمات مرور'
  },

  tips: {
    title: 'نصائح أمان كلمة المرور',
    useLength: 'استخدم كلمات مرور طويلة بما يكفي (12 حرفًا على الأقل) لزيادة الأمان',
    useDifferent: 'استخدم كلمات مرور مختلفة لكل موقع أو خدمة',
    changeRegularly: 'قم بتغيير كلمات المرور للحسابات المهمة بانتظام',
    useManager: 'فكر في استخدام مدير كلمات المرور لتخزين كلمات المرور المعقدة بأمان',
    use2FA: 'قم بتمكين المصادقة الثنائية لإضافة طبقة حماية إضافية'
  }
};