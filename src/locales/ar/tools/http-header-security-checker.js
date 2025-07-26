export default {
  name: 'فاحص أمان رؤوس HTTP',
  description: 'تحليل وتقييم أمان رؤوس استجابة HTTP',
  title: 'أداة فحص أمان رؤوس HTTP',
  intro: 'تحليل رؤوس استجابة HTTP للموقع، واكتشاف إعدادات الأمان مثل CSP وHSTS، وتقديم توصيات للتحسين',

  input: {
    title: 'أدخل URL أو الرؤوس',
    url: 'URL',
    urlPlaceholder: 'أدخل URL للفحص (مثال: https://example.com)',
    headers: 'أو الصق رؤوس HTTP مباشرة',
    headersPlaceholder: 'الصق رؤوس HTTP الأصلية هنا...',
    options: 'خيارات الفحص',
    followRedirects: 'متابعة إعادة التوجيه',
    includeSubresources: 'فحص الموارد الفرعية (CSS، JS، إلخ)',
    timeout: 'مهلة (بالثواني)',
    checkButton: 'فحص الرؤوس',
    analyzing: 'جاري التحليل...'
  },

  results: {
    title: 'تحليل رؤوس الأمان',
    overview: 'نظرة عامة',
    score: 'درجة الأمان',
    totalScore: 'من 100',
    scanned: 'URL المفحوص',
    date: 'تاريخ الفحص',
    headers: {
      title: 'الرؤوس المكتشفة',
      name: 'الرأس',
      value: 'القيمة',
      status: 'الحالة'
    },
    allHeaders: {
      title: 'جميع رؤوس الاستجابة',
      name: 'الاسم',
      value: 'القيمة',
      noData: 'لا توجد بيانات رؤوس استجابة'
    },
    missing: {
      title: 'رؤوس الأمان المفقودة',
      description: 'لم يتم العثور على رؤوس الأمان الموصى بها التالية:'
    },
    issues: {
      title: 'مشاكل الأمان',
      critical: 'حرج',
      high: 'عالٍ',
      medium: 'متوسط',
      low: 'منخفض',
      info: 'معلومات'
    },
    recommendations: {
      title: 'التوصيات',
      description: 'فكر في إضافة الرؤوس التالية لتحسين الأمان:',
      example: 'مثال التكوين'
    },
    rating: {
      unknown: 'غير معروف',
      excellent: 'ممتاز',
      good: 'جيد',
      fair: 'متوسط',
      poor: 'ضعيف',
      high_risk: 'مخاطرة عالية',
      descriptions: {
        unknown: 'لا يمكن الحصول على معلومات رؤوس أمان الموقع',
        excellent: 'الموقع ينفذ جميع رؤوس الأمان الرئيسية',
        good: 'الموقع ينفذ معظم رؤوس الأمان المهمة',
        fair: 'الموقع يفتقد بعض رؤوس الأمان المهمة',
        poor: 'الموقع يفتقد العديد من رؤوس الأمان الحاسمة',
        high_risk: 'الموقع لا ينفذ تقريباً أي حماية لرؤوس الأمان'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'إجبار استخدام اتصال HTTPS بدلاً من HTTP',
      recommendation: 'أضف "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: 'مكون بشكل صحيح',
        bad: 'غير مكون',
        warning: 'يمكن تحسين التكوين'
      },
      recommendationConfigured: 'تم تنفيذ التكوين الحالي، تأكد من تضمين max-age طويل بما يكفي وincludeSubDomains',
      recommendationMissing: 'يوصى بتمكين HSTS لضمان إجراء جميع الاتصالات عبر HTTPS'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'منع استنشاق نوع MIME',
      recommendation: 'أضف "X-Content-Type-Options: nosniff"',
      status: {
        good: 'مكون بشكل صحيح',
        bad: 'غير مكون أو مكون بشكل غير صحيح'
      },
      recommendationConfigured: 'التكوين صحيح، حافظ على الإعدادات الحالية',
      recommendationMissing: 'يوصى بتعيين هذا الرأس إلى قيمة "nosniff"'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'منع تضمين الموقع في iframe، وبالتالي منع هجمات اختطاف النقر',
      recommendation: 'أضف "X-Frame-Options: DENY" أو "SAMEORIGIN"',
      status: {
        good: 'مكون',
        bad: 'غير مكون'
      },
      recommendationConfigured: 'تم تنفيذ التكوين الحالي، يوصى باستخدام DENY أو SAMEORIGIN',
      recommendationMissing: 'يوصى بتكوين هذا الرأس كـ DENY أو SAMEORIGIN لمنع اختطاف النقر'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'التحكم في الموارد التي يمكن للمتصفح تحميلها',
      recommendation: 'أضف رأس Content-Security-Policy مع التوجيهات المناسبة',
      status: {
        good: 'مكون بشكل صحيح',
        bad: 'غير مكون',
        warning: 'يمكن تحسين التكوين'
      },
      recommendationConfigured: 'تم تنفيذ التكوين الحالي، تأكد من مراجعة وتحديث السياسة بانتظام',
      recommendationMissing: 'يوصى بتكوين CSP لتقييد مصادر الموارد التي يمكن تحميلها، مما يعزز الدفاع ضد هجمات XSS'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'يُمكّن هذا الرأس تصفية XSS في المتصفحات القديمة. في المتصفحات الحديثة، يوصى باستخدام CSP بدلاً منه.',
      recommendation: 'على الرغم من أن هذا الرأس قد تم استبداله بـ CSP في المتصفحات الحديثة، إلا أنه لا يزال يوصى بتعيينه إلى "1; mode=block" للتوافق مع المتصفحات القديمة',
      status: {
        enabled: 'ممكّن',
        disabled: 'معطّل',
        notConfigured: 'غير مكون (يوصى باستخدام CSP في المتصفحات الحديثة)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'التحكم في المعلومات المضمنة في رأس Referer',
      recommendation: 'أضف "Referrer-Policy: no-referrer-when-downgrade" أو سياسة أكثر صرامة',
      status: {
        good: 'مكون',
        bad: 'غير مكون'
      },
      recommendationConfigured: 'تم تنفيذ التكوين الحالي، يوصى باستخدام strict-origin أو strict-origin-when-cross-origin',
      recommendationMissing: 'يوصى بتكوين هذا الرأس للتحكم في تمرير معلومات المصدر المرجعي'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'التحكم في ميزات المتصفح وواجهات برمجة التطبيقات التي يمكن استخدامها',
      recommendation: 'أضف رأس Permissions-Policy مع القيود المناسبة',
      status: {
        good: 'مكون',
        bad: 'غير مكون'
      },
      recommendationConfigured: 'تم تنفيذ التكوين الحالي، تأكد من تقييد الميزات غير الضرورية',
      recommendationMissing: 'يوصى بتكوين هذا الرأس لتقييد ميزات المتصفح التي يمكن للموقع استخدامها'
    }
  },

  status: {
    good: 'جيد',
    warning: 'تحذير',
    bad: 'سيئ',
    info: 'معلومات',
    notApplicable: 'غير قابل للتطبيق'
  },

  actions: {
    export: 'تصدير التقرير',
    copyHeaders: 'نسخ الرؤوس',
    copyRecommendations: 'نسخ التوصيات',
    scan: 'فحص جديد',
    share: 'مشاركة النتائج',
    analyze: 'تحليل معلومات الرأس'
  },

  emptyState: {
    line1: 'أدخل URL الموقع لتحليل تكوين أمان رؤوس استجابة HTTP',
    line2: 'احصل على تقييم مفصل وتوصيات حول رؤوس الأمان مثل CSP وHSTS'
  },

  messages: {
    scanning: 'جاري فحص {url}...',
    completed: 'اكتمل الفحص',
    error: 'خطأ: {message}',
    timeout: 'انتهت مهلة الطلب',
    invalidUrl: 'URL غير صالح',
    invalidUrlFormat: 'الرجاء إدخال URL صالح، يبدأ بـ http:// أو https://',
    copied: 'تم النسخ إلى الحافظة',
    exportComplete: 'تم تصدير التقرير بنجاح',
    httpWarning: 'تحذير: استخدام HTTP قد يكون غير آمن',
    noHeaders: 'لم يتم العثور على أي معلومات رؤوس',
    fetchError: 'لا يمكن جلب معلومات الرؤوس: {error}'
  }
}; 