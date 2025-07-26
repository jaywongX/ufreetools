export default {
  name: 'مولد رمز الاستجابة السريعة (QR)',
  description: 'إنشاء رموز QR قابلة للتخصيص للروابط والنصوص وغيرها',

  options: {
    content: 'محتوى الرمز',
    contentType: 'نوع المحتوى',
    errorCorrectionLevel: 'مستوى تصحيح الأخطاء',
    size: 'الحجم',
    margin: 'الهامش',
    foregroundColor: 'لون المقدمة',
    backgroundColor: 'لون الخلفية',
    logo: 'إضافة شعار',
    logoSize: 'حجم الشعار',
    cornerRadius: 'زوايا مدورة'
  },

  contentTypes: {
    url: 'رابط ويب',
    text: 'نص عادي',
    email: 'بريد إلكتروني',
    phone: 'رقم هاتف',
    sms: 'رسالة نصية',
    wifi: 'شبكة WiFi',
    vcard: 'بطاقة تعريف (vCard)',
    mecard: 'بطاقة تعريف (MeCard)'
  },

  errorLevels: {
    L: 'منخفض (7%)',
    M: 'متوسط (15%)',
    Q: 'مرتفع (25%)',
    H: 'عالي جدًا (30%)'
  },

  actions: {
    generate: 'إنشاء رمز QR',
    download: 'تحميل',
    downloadSVG: 'تحميل SVG',
    downloadPNG: 'تحميل PNG',
    copy: 'نسخ الصورة',
    clear: 'إعادة تعيين',
    uploadLogo: 'رفع شعار'
  },

  templates: {
    title: 'قوالب سريعة',
    confirmReplace: 'هل تريد استبدال المحتوى الحالي؟',
    confirm: 'تأكيد',
    cancel: 'إلغاء',
    url: {
      name: 'رابط ويب'
    },
    email: {
      name: 'عنوان بريد إلكتروني'
    },
    phone: {
      name: 'رقم هاتف'
    },
    sms: {
      name: 'رسالة نصية'
    },
    wifi: {
      name: 'إعدادات Wi-Fi',
      example: {
        ssid: 'اسم الشبكة',
        password: 'كلمة المرور'
      }
    },
    geo: {
      name: 'موقع جغرافي'
    }
  },

  appearance: {
    title: 'إعدادات المظهر'
  },

  preview: {
    title: 'معاينة',
    generating: 'جاري الإنشاء...',
    clickGenerateButton: 'انقر على زر "إنشاء رمز QR"',
    clickToDownload: 'انقر للتحميل'
  },

  tips: {
    title: 'نصائح',
    saveToPrint: 'يمكن حفظ رمز QR كصورة للطباعة أو المشاركة.',
    errorCorrection: 'مستوى تصحيح الأخطاء يحدد قابلية القراءة عند تضرر الرمز. المستوى L أقل تحملاً للأخطاء، بينما المستوى H أكثر تحملاً لكنه يجعل الرمز أكثر تعقيدًا.'
  },

  wifi: {
    ssid: 'اسم الشبكة (SSID)',
    password: 'كلمة المرور',
    encryption: 'طريقة التشفير',
    hidden: 'شبكة مخفية'
  },

  placeholders: {
    content: 'أدخل نصًا، رابطًا أو أي محتوى آخر...'
  },

  characters: 'حرف',
  maxChars: 'يُفضل ألا يتجاوز 300 حرف',

  messages: {
    copied: 'تم النسخ إلى الحافظة!',
    generated: 'تم إنشاء رمز QR بنجاح',
    contentRequired: 'الرجاء إدخال محتوى الرمز',
    downloaded: 'تم تحميل رمز QR',
    confirmReplace: 'انقر لتأكيد استبدال المحتوى الحالي',
    contentUpdated: 'تم تحديث المحتوى',
    changesCancelled: 'تم إلغاء التغييرات',
    invalidUrl: 'الرجاء إدخال رابط صحيح',
    invalidEmail: 'الرجاء إدخال بريد إلكتروني صحيح',
    invalidPhone: 'الرجاء إدخال رقم هاتف صحيح',
    logoTooBig: 'حجم ملف الشعار كبير جدًا، الحد الأقصى 1MB'
  },

  errors: {
    canvasNotReady: 'عنصر Canvas غير جاهز',
    generationError: 'حدث خطأ أثناء إنشاء رمز QR',
    generationErrorWithMessage: 'حدث خطأ أثناء إنشاء رمز QR: {message}',
    downloadError: 'حدث خطأ أثناء التحميل: {message}'
  }
};