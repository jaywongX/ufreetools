export default {
  name: 'أداة البحث عن عنوان IP',
  description: 'الحصول على معلومات مفصلة عن عنوان IP، بما في ذلك الموقع وتفاصيل الشبكة',

  input: {
    title: 'البحث عن عنوان IP',
    ipAddress: 'عنوان IP',
    ipPlaceholder: 'أدخل عنوان IP (مثال: 8.8.8.8)',
    hostname: 'اسم المضيف',
    hostnamePlaceholder: 'أو أدخل اسم المضيف (مثال: google.com)',
    options: 'خيارات البحث',
    includeGeolocation: 'تضمين الموقع الجغرافي',
    includeASN: 'تضمين معلومات ASN',
    includeDomains: 'تضمين النطاقات المرتبطة',
    includeAbuse: 'تضمين جهات اتصال الإساءة',
    myIP: 'استخدام عنوان IP الخاص بي'
  },

  actions: {
    lookup: 'البحث عن IP',
    clear: 'مسح النتائج',
    copyIP: 'نسخ IP',
    copyAll: 'نسخ جميع المعلومات',
    export: 'تصدير النتائج'
  },

  results: {
    title: 'معلومات IP',
    noResults: 'لا توجد معلومات للعرض',
    error: 'خطأ: {message}',
    unknown: 'غير معروف',
    queryTime: 'وقت الاستعلام',
    dataSource: 'مصدر البيانات',
    general: {
      title: 'المعلومات الأساسية',
      ipAddress: 'عنوان IP',
      hostname: 'اسم المضيف',
      type: 'النوع',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'IP عام',
      yes: 'نعم',
      no: 'لا',
      reverse: 'DNS العكسي'
    },
    location: {
      title: 'الموقع',
      country: 'الدولة',
      region: 'المنطقة',
      city: 'المدينة',
      postalCode: 'الرمز البريدي',
      timezone: 'المنطقة الزمنية',
      coordinates: 'الإحداثيات',
      latitude: 'خط العرض',
      longitude: 'خط الطول'
    },
    network: {
      title: 'الشبكة',
      asn: 'ASN',
      organization: 'المنظمة',
      isp: 'مزود خدمة الإنترنت',
      usage: 'نوع الاستخدام',
      domain: 'النطاق',
      route: 'المسار',
      subnet: 'الشبكة الفرعية',
      netmask: 'قناع الشبكة',
      cidr: 'تدوين CIDR'
    },
    security: {
      title: 'معلومات الأمان',
      threat: 'كشف التهديدات',
      isTor: 'عقدة خروج Tor',
      isProxy: 'الوكيل',
      isVpn: 'VPN',
      isAttacker: 'مهاجم معروف',
      isAbuser: 'مستخدم مسيء معروف',
      threatLevel: 'مستوى التهديد',
      confidenceScore: 'درجة الثقة',
      abuseReports: 'تقارير الإساءة',
      lastReported: 'آخر وقت للإبلاغ'
    },
    additional: {
      title: 'معلومات إضافية',
      mobile: 'شبكة الجوال',
      hosting: 'مزود الاستضافة',
      associated: 'النطاقات المرتبطة',
      abuseContact: 'جهة اتصال الإساءة'
    }
  },

  map: {
    title: 'خريطة الموقع',
    noLocation: 'لا توجد بيانات موقع متاحة',
    viewLarger: 'عرض خريطة أكبر'
  },

  messages: {
    lookingUp: 'جاري البحث عن معلومات {query}...',
    copied: 'تم النسخ إلى الحافظة',
    exported: 'تم تصدير النتائج بنجاح',
    invalidIP: 'عنوان IP غير صالح',
    invalidHostname: 'اسم المضيف غير صالح',
    publicIPOnly: 'هذه الأداة مخصصة لعناوين IP العامة فقط',
    rateLimited: 'تجاوز حد المعدل. يرجى المحاولة مرة أخرى لاحقاً.',
    historyCleared: 'تم مسح السجل'
  },

  history: {
    title: 'سجل البحث',
    clear: 'مسح السجل'
  }
}; 