export default {
  name: 'مؤقت بومودورو',
  description: 'إدارة الوقت وتحسين الإنتاجية باستخدام تقنية بومودورو',

  input: {
    title: 'إعدادات المؤقت',
    workDuration: 'مدة العمل',
    shortBreak: 'استراحة قصيرة',
    longBreak: 'استراحة طويلة',
    sessions: 'عدد الجلسات',
    autoStart: 'بدء تلقائي',
    autoBreak: 'استراحة تلقائية',
    notifications: 'الإشعارات',
    sound: 'الصوت',
    volume: 'مستوى الصوت',
    theme: 'المظهر',
    light: 'فاتح',
    dark: 'داكن',
    system: 'نظام'
  },

  output: {
    title: 'المؤقت',
    time: 'الوقت',
    status: 'الحالة',
    working: 'جاري العمل',
    shortBreak: 'استراحة قصيرة',
    longBreak: 'استراحة طويلة',
    completed: 'مكتمل',
    sessions: 'الجلسات',
    current: 'الحالية',
    total: 'الإجمالي',
    next: 'التالي',
    pause: 'إيقاف مؤقت',
    resume: 'استئناف',
    reset: 'إعادة تعيين',
    skip: 'تخطي'
  },

  settings: {
    title: 'الإعدادات',
    workDuration: 'مدة العمل',
    shortBreak: 'استراحة قصيرة',
    longBreak: 'استراحة طويلة',
    sessions: 'عدد الجلسات',
    autoStart: 'بدء تلقائي',
    autoBreak: 'استراحة تلقائية',
    notifications: 'الإشعارات',
    sound: 'الصوت',
    volume: 'مستوى الصوت',
    theme: 'المظهر'
  },

  actions: {
    start: 'بدء',
    pause: 'إيقاف مؤقت',
    resume: 'استئناف',
    reset: 'إعادة تعيين',
    skip: 'تخطي',
    settings: 'الإعدادات',
    statistics: 'الإحصائيات',
    export: 'تصدير'
  },

  messages: {
    starting: 'جاري البدء...',
    pausing: 'جاري الإيقاف المؤقت...',
    resuming: 'جاري الاستئناف...',
    resetting: 'جاري إعادة التعيين...',
    skipping: 'جاري التخطي...',
    completed: 'تم إكمال الجلسة',
    breakTime: 'حان وقت الاستراحة',
    workTime: 'حان وقت العمل',
    error: 'خطأ: {message}',
    empty: 'الرجاء إدخال إعدادات المؤقت',
    invalid: 'إعدادات غير صالحة',
    processing: 'جاري المعالجة...'
  },

  errors: {
    invalidDuration: 'مدة غير صالحة',
    invalidSessions: 'عدد جلسات غير صالح',
    invalidVolume: 'مستوى صوت غير صالح',
    startError: 'خطأ في البدء',
    pauseError: 'خطأ في الإيقاف المؤقت',
    resumeError: 'خطأ في الاستئناف',
    resetError: 'خطأ في إعادة التعيين',
    skipError: 'خطأ في التخطي'
  }
}; 