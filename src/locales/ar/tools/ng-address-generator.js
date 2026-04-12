export default {
    name: 'مولد عناوين نيجيريا - إنشاء عناوين نيجيرية حقيقية ومعلومات الهوية عبر الإنترنت',
    description: 'مولد عناوين نيجيريا المجاني عبر الإنترنت، يُنشئ عناوين نيجيرية بتنسيق حقيقي، أرقام NIN، هواتف، أرقام بطاقات ائتمان وملفات هوية كاملة. دعم التصفية حسب الولاية، تصدير JSON/CSV، يعمل محلياً لحماية الخصوصية.',
    inputTitle: 'تكوين الإنشاء',
    outputTitle: 'نتائج الإنشاء',
    generateBtn: 'إنشاء البيانات',
    loadSampleBtn: 'تحميل نموذج وإنشاء',
    clearAll: 'مسح الكل',
    noOutput: 'لا توجد نتائج حالياً',
    preview: 'معاينة البيانات',
    
    // التصفية الجغرافية
    locationTitle: 'التصفية حسب الموقع الجغرافي',
    selectState: 'اختر الولاية',
    selectLga: 'اختر منطقة الحكومة المحلية',
    allStates: 'جميع الولايات',
    allLgas: 'جميع مناطق الحكومة المحلية',
    
    // نوع العنوان
    addressTypeTitle: 'نوع العنوان',
    addressTypeResidential: 'عنوان سكني',
    addressTypeCommercial: 'عنوان تجاري',
    addressTypePoBox: 'صندوق بريد',
    addressTypeCampus: 'حرم جامعي',
    
    // معلومات الهوية
    identityTitle: 'معلومات الهوية',
    fullName: 'الاسم الكامل',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    gender: 'الجنس',
    genderMale: 'ذكر',
    genderFemale: 'أنثى',
    age: 'العمر',
    birthDate: 'تاريخ الميلاد',
    height: 'الطول',
    weight: 'الوزن',
    
    // معلومات الاتصال
    contactTitle: 'معلومات الاتصال',
    phoneNumber: 'رقم الهاتف',
    phoneType: 'نوع الهاتف',
    phoneTypeMobile: 'جوال',
    phoneTypeLandline: 'هاتف أرضي',
    areaCode: 'رمز المنطقة',
    email: 'البريد الإلكتروني',
    tempEmail: 'بريد إلكتروني مؤقت',
    
    // بطاقة الائتمان
    creditCardTitle: 'معلومات بطاقة الائتمان',
    cardType: 'نوع البطاقة',
    cardNumber: 'رقم البطاقة',
    expiryDate: 'تاريخ الانتهاء',
    cvv: 'CVV',
    bankBin: 'رمز البنك BIN',
    
    // المهنة
    careerTitle: 'الملف الوظيفي',
    jobTitle: 'المسمى الوظيفي',
    salary: 'الراتب',
    companyName: 'اسم الشركة',
    companySize: 'حجم الشركة',
    industry: 'القطاع',
    employmentStatus: 'حالة التوظيف',
    
    // رقم NIN
    ninTitle: 'رقم الهوية الوطنية النيجيرية (NIN)',
    ninNumber: 'رقم NIN',
    
    // البصمة الرقمية
    fingerprintTitle: 'البصمة الرقمية',
    os: 'نظام التشغيل',
    osVersion: 'إصدار النظام',
    browser: 'المتصفح',
    userAgent: 'User Agent',
    screenResolution: 'دقة الشاشة',
    timezone: 'المنطقة الزمنية',
    guid: 'GUID',
    ipAddress: 'عنوان IP',
    macAddress: 'عنوان MAC',
    cookiePolicy: 'سياسة ملفات تعريف الارتباط',
    
    // خيارات التصدير
    exportTitle: 'تنسيق التصدير',
    exportJson: 'تصدير JSON',
    exportCsv: 'تصدير CSV',
    downloadBtn: 'تنزيل',
    copyBtn: 'نسخ',
    viewDetails: 'عرض التفاصيل',
    
    // الإنشاء المتعدد
    batchTitle: 'الإنشاء المتعدد',
    quantityLabel: 'عدد السجلات',
    quantityPlaceholder: 'أدخل العدد (1-100)',
    
    // رسائل الإشعار
    generating: 'جاري الإنشاء...',
    generated: 'اكتمل الإنشاء',
    copySuccess: 'تم النسخ إلى الحافظة',
    downloadSuccess: 'تم التنزيل بنجاح',
    invalidQuantity: 'يرجى إدخال رقم بين 1-100',
    
    // عرض النتائج
    resultCount: 'تم إنشاء {count} سجل',
    resultSummary: 'ملخص النتائج',
    showAll: 'عرض الكل',
    collapse: 'طي',
    
    // خيارات الإنشاء
    generateOptionsTitle: 'خيارات الإنشاء',
    
    // عرض السجلات
    recordLabel: 'سجل #{num}',
    addressLabel: 'العنوان',
    streetLabel: 'الشارع',
    houseNumberLabel: 'رقم المنزل',
    areaLabel: 'المنطقة',
    lgaLabel: 'منطقة الحكومة المحلية',
    stateLabel: 'الولاية',
    
    // تنسيق العنوان
    commercialArea: 'منطقة تجارية',
    hostel: 'سكن طلابي',
    faculty: 'كلية',
    library: 'مكتبة',
    
    // 36 ولاية نيجيرية + FCT
    states: {
        AB: 'أبيا',
        AD: 'آداماوا',
        AK: 'أكوا إيبوم',
        AN: 'أنمبرا',
        BA: 'باوتشي',
        BY: 'بايلسا',
        CR: 'كروس ريفر',
        DE: 'دلتا',
        EB: 'إبونيي',
        ED: 'إيدو',
        EK: 'إيكيتي',
        EN: 'إينوغو',
        FC: 'منطقة العاصمة الفيدرالية',
        GO: 'غومبي',
        IM: 'إيمو',
        JI: 'جيغاوا',
        KD: 'كادونا',
        KE: 'كيبي',
        KN: 'كانو',
        KO: 'كوغي',
        KT: 'كاتسينا',
        KW: 'كوارا',
        LA: 'لاجوس',
        NA: 'نصراوة',
        NI: 'نيجر',
        OG: 'أوغون',
        ON: 'أوندو',
        OS: 'أوسون',
        OY: 'أويو',
        PL: 'هضبة',
        RI: 'ريفرز',
        SO: 'سوكوتو',
        TA: 'ترابا',
        YO: 'يوبي',
        ZA: 'زامفارا'
    },
    
    // أسماء الجامعات
    universities: {
        UNILAG: 'جامعة لاجوس',
        'U.I': 'جامعة إبادان',
        ABU: 'جامعة أحمدو بيلو',
        UNIPORT: 'جامعة بورت هاركورت',
        UNN: 'جامعة نيجيريا نسوكا'
    },
    
    // عناوين أعمدة CSV
    csv: {
        fullAddress: 'العنوان الكامل',
        street: 'الشارع',
        houseNumber: 'رقم المنزل',
        area: 'المنطقة',
        lga: 'منطقة الحكومة المحلية',
        state: 'الولاية',
        fullName: 'الاسم',
        gender: 'الجنس',
        age: 'العمر',
        birthDate: 'تاريخ الميلاد',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        cardType: 'نوع البطاقة',
        cardNumber: 'رقم البطاقة',
        ninNumber: 'رقم NIN'
    }
};
