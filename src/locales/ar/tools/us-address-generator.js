export default {
    name: 'مولد عناوين الولايات المتحدة - إنشاء عناوين حقيقية للولايات المتحدة ومعلومات الهوية وتفاصيل الاتصال عبر الإنترنت',
    description: 'مولد عناوين الولايات المتحدة المجاني على الإنترنت الذي ينشئ عناوين الولايات المتحدة بصيغة حقيقية، والرموز البريدية، وأرقام الهاتف، وأرقام الضمان الاجتماعي، وأرقام بطاقات الائتمان، وملفات الهوية الكاملة. يدعم التصفية حسب الولاية/المدينة، ويصدّر بصيغ JSON/CSV، ويعمل بالكامل في المتصفح لحماية الخصوصية.',
    inputTitle: 'إعدادات التوليد',
    outputTitle: 'النتائج المُولّدة',
    generateBtn: 'توليد البيانات',
    loadSampleBtn: 'تحميل العينة وتوليد',
    clearAll: 'مسح الكل',
    noOutput: 'لا توجد نتائج مولدة',
    preview: 'معاينة البيانات',
    
    // عنوان خيارات البيانات
    generationOptions: 'خيارات التوليد',
    
    // حقول العنوان
    address: 'العنوان',
    street: 'الشارع',
    city: 'المدينة',
    state: 'الولاية',
    zipCode: 'الرمز البريدي',
    record: 'السجل',
    
    // التصفية الجغرافية
    locationTitle: 'عامل التصفية الجغرافي',
    selectState: 'اختر الولاية',
    selectCity: 'اختر المدينة',
    allStates: 'جميع الولايات',
    allCities: 'جميع المدن',
    zipCodeLabel: 'الرمز البريدي',
    validateZip: 'التحقق من صحة الرمز البريدي',
    
    // أنواع العناوين
    addressTypeTitle: 'نوع العنوان',
    addressTypeResidential: 'عنوان سكني',
    addressTypeCommercial: 'عنوان تجاري',
    addressTypeVirtual: 'صندوق بريد افتراضي',
    addressTypeCampus: 'حرم الجامعة',
    
    // معلومات الهوية
    identityTitle: 'معلومات الهوية',
    fullName: 'الاسم الكامل',
    gender: 'الجنس',
    genderMale: 'ذكر',
    genderFemale: 'أنثى',
    age: 'العمر',
    birthDate: 'تاريخ الميلاد',
    zodiac: 'برج زودياك',
    height: 'الطول',
    weight: 'الوزن',
    
    // معلومات الاتصال
    contactTitle: 'معلومات الاتصال',
    phoneNumber: 'رقم الهاتف',
    phoneType: 'نوع الهاتف',
    phoneTypeMobile: 'جوال',
    phoneTypeLandline: 'هاتف أرضي',
    areaCode: 'رمز المنطقة',
    email: 'عنوان البريد الإلكتروني',
    tempEmail: 'بريد إلكتروني مؤقت',
    
    // بطاقة الائتمان
    creditCardTitle: 'معلومات بطاقة الائتمان',
    cardType: 'نوع البطاقة',
    cardNumber: 'رقم البطاقة',
    expiryDate: 'تاريخ الانتهاء',
    cvv: 'CVV',
    bankBin: 'BIN البنك',
    
    // المهنة
    careerTitle: 'الملف المهني',
    jobTitle: 'المسمى الوظيفي',
    salary: 'الراتب',
    companyName: 'اسم الشركة',
    companySize: 'حجم الشركة',
    industry: 'الصناعة',
    employmentStatus: 'حالة التوظيف',
    employmentFullTime: 'دوام كامل',
    employmentPartTime: 'دوام جزئي',
    
    // رقم الضمان الاجتماعي
    ssnTitle: 'رقم الضمان الاجتماعي',
    ssnNumber: 'رقم الضمان الاجتماعي',
    areaNumber: 'رقم المنطقة',
    groupNumber: 'رقم المجموعة',
    serialNumber: 'الرقم التسلسلي',
    
    // البصمة الرقمية
    fingerprintTitle: 'البصمة الرقمية',
    os: 'نظام التشغيل',
    osVersion: 'إصدار نظام التشغيل',
    browser: 'المتصفح',
    userAgent: 'وكيل المستخدم',
    screenResolution: 'دقة الشاشة',
    timezone: 'المنطقة الزمنية',
    guid: 'GUID',
    ipAddress: 'عنوان IP',
    macAddress: 'عنوان MAC',
    cookiePolicy: 'سياسة الكوكيز',
    
    // خيارات التصدير
    exportTitle: 'تنسيق التصدير',
    exportJson: 'تصدير JSON',
    exportCsv: 'تصدير CSV',
    exportIdCard: 'إنشاء صورة بطاقة الهوية',
    exportBusinessCard: 'إنشاء بطاقة عمل',
    downloadBtn: 'تنزيل',
    copyBtn: 'نسخ',
    viewDetails: 'عرض التفاصيل',
    
    // حقول بطاقة الائتمان
    cvvLabel: 'CVV',
    
    // التوليد الدفعي
    batchTitle: 'التوليد الدفعي',
    quantityLabel: 'الكمية',
    quantityPlaceholder: 'أدخل الكمية (1-100)',
    
    // رسائل الإشعارات
    generating: 'جاري التوليد...',
    generated: 'اكتمل التوليد',
    copySuccess: 'تم النسخ إلى الحافظة',
    downloadSuccess: 'تم التنزيل بنجاح',
    invalidQuantity: 'يرجى إدخال رقم بين 1-100',
    
    // عرض النتائج
    resultCount: 'تم توليد {count} سجل',
    resultSummary: 'ملخص النتائج',
    showAll: 'عرض الكل',
    collapse: 'طي'
};