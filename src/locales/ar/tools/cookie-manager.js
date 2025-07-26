export default {
  name: 'مدير الكوكيز',
  description: 'عرض وإنشاء وتحرير وحذف كوكيز الموقع الحالي',

  // علامات التبويب الرئيسية
  currentCookies: 'الكوكيز الحالية',

  createCookie: 'إنشاء كوكي',
  importExport: 'استيراد/تصدير',

  // قائمة الكوكيز
  noCookies: 'لا توجد كوكيز للموقع الحالي',

  cookieName: 'الاسم',
  cookieValue: 'القيمة',
  cookieDomain: 'النطاق',
  cookiePath: 'المسار',
  cookieExpires: 'تاريخ الانتهاء',
  cookieSecure: 'آمن (Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'الإجراءات',
  edit: 'تعديل',
  delete: 'حذف',
  save: 'حفظ',
  cancel: 'إلغاء',
  refresh: 'تحديث',

  // نموذج الإنشاء/التعديل
  addCookie: 'إضافة كوكي',

  editCookie: 'تعديل كوكي',
  required: 'مطلوب',
  optional: 'اختياري',
  days: 'أيام',
  hours: 'ساعات',
  minutes: 'دقائق',
  cookieCreated: 'تم إنشاء الكوكي',
  cookieUpdated: 'تم تحديث الكوكي',
  cookieDeleted: 'تم حذف الكوكي',
  createError: 'خطأ في إنشاء الكوكي',
  updateError: 'خطأ في تحديث الكوكي',
  deleteError: 'خطأ في حذف الكوكي',

  // استيراد/تصدير
  export: 'تصدير الكوكيز',

  import: 'استيراد الكوكيز',
  exportAs: 'تصدير كـ',
  exportSuccess: 'تم تصدير الكوكيز',
  importSuccess: 'تم استيراد {count} كوكي',
  importError: 'خطأ في استيراد الكوكيز',

  // خيارات الأمان
  none: 'لا شيء',

  strict: 'صارم',
  lax: 'مرن',

  // ملاحظات وتوضيحات
  domainNote: 'اتركه فارغاً للنطاق الحالي',

  pathNote: 'المسار الافتراضي هو "/"',
  expiresNote: 'عدم التحديد يعني كوكي الجلسة',
  secureNote: 'إرسال عبر HTTPS فقط',
  httpOnlyNote: 'منع الوصول عبر JavaScript',
  sameSiteNote: 'التحكم في طلبات المواقع المتقاطعة',

  // تنسيق الاستيراد
  importFormat: 'مثال تنسيق الاستيراد:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'تنسيق JSON',
  textFormat: 'تنسيق النص',
  invalidFormat: 'تنسيق غير صالح'
}; 