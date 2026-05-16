export default {
    name: 'مولد عناوين المكسيك - إنشاء عناوين مكسيكية حقيقية ومعلومات الهوية وبيانات الاتصال عبر الإنترنت',
    description: 'مولد عناوين مكسيكية مجاني عبر الإنترنت ينشئ عناوين بتنسيق حقيقي، أرقام الهوية RFC/CURP، أرقام الهواتف، أرقام بطاقات الائتمان وملفات الهوية الكاملة. يدعم تصفية الولايات وتنسيقات تصدير JSON/CSV ويعتمد بالكامل على المتصفح لحماية الخصوصية.',
    inputTitle: 'إعدادات الإنشاء',
    outputTitle: 'النتائج المولدة',
    generateBtn: 'إنشاء البيانات',
    loadSampleBtn: 'تحميل النموذج وإنشاء',
    clearAll: 'مسح الكل',
    noOutput: 'لم يتم إنشاء نتائج بعد',
    preview: 'معاينة البيانات',
    
    // التصفية الجغرافية
    locationTitle: 'التصفية الجغرافية',
    selectState: 'اختيار الولاية',
    selectCity: 'اختيار المدينة',
    allStates: 'جميع الولايات',
    allCities: 'جميع المدن',
    
    // أنواع العناوين
    addressTypeTitle: 'نوع العنوان',
    addressTypeResidential: 'عنوان سكني',
    addressTypeCommercial: 'عنوان تجاري',
    addressTypeVirtual: 'صندوق بريد افتراضي',
    addressTypeCampus: 'حرم جامعي',
    
    // معلومات الهوية
    identityTitle: 'معلومات الهوية',
    fullName: 'الاسم الكامل',
    gender: 'الجنس',
    genderMale: 'ذكر',
    genderFemale: 'أنثى',
    age: 'العمر',
    birthDate: 'تاريخ الميلاد',
    zodiac: 'البرج',
    height: 'الطول',
    weight: 'الوزن',
    
    // معلومات الاتصال
    contactTitle: 'معلومات الاتصال',
    phoneNumber: 'رقم الهاتف',
    phoneType: 'نوع الهاتف',
    phoneTypeMobile: 'جوال',
    phoneTypeLandline: 'هاتف ثابت',
    areaCode: 'رمز المنطقة',
    email: 'البريد الإلكتروني',
    tempEmail: 'بريد إلكتروني مؤقت',
    
    // بطاقة الائتمان
    creditCardTitle: 'معلومات بطاقة الائتمان',
    cardType: 'نوع البطاقة',
    cardNumber: 'رقم البطاقة',
    expiryDate: 'تاريخ الانتهاء',
    cvv: 'CVV',
    bankBin: ' BIN البنك',
    
    // المهنة
    careerTitle: 'الملف المهني',
    jobTitle: 'المسمى الوظيفي',
    salary: 'الراتب',
    companyName: 'اسم الشركة',
    companySize: 'حجم الشركة',
    industry: 'القطاع',
    employmentStatus: 'حالة التوظيف',
    employmentFullTime: 'دوام كامل',
    employmentPartTime: 'دوام جزئي',
    
    // بطاقة الهوية
    idCardTitle: 'بطاقة الهوية المكسيكية',
    rfcLabel: 'RFC (سجل الضرائب الفيدرالي)',
    curpLabel: 'CURP (الرمز الفريد لسجل السكان)',
    
    // البصمة الرقمية
    fingerprintTitle: 'البصمة الرقمية',
    os: 'نظام التشغيل',
    osVersion: 'إصدار النظام',
    browser: 'المتصفح',
    userAgent: 'وكيل المستخدم',
    screenResolution: 'دقة الشاشة',
    timezone: 'المنطقة الزمنية',
    guid: 'المعرف الفريد',
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
    
    // الإنشاء الدفعي
    batchTitle: 'الإنشاء الدفعي',
    quantityLabel: 'الكمية',
    quantityPlaceholder: 'أدخل الكمية (1-100)',
    
    // رسائل الإخطار
    generating: 'جاري الإنشاء...',
    generated: 'اكتمل الإنشاء',
    copySuccess: 'تم النسخ إلى الحافظة',
    downloadSuccess: 'تم التنزيل بنجاح',
    invalidQuantity: 'أدخل رقمًا بين 1 و100',
    
    // عرض النتائج
    resultCount: 'تم إنشاء {count} سجل',
    resultSummary: 'ملخص النتائج',
    showAll: 'عرض الكل',
    collapse: 'طي',
    
    // خيارات الإنشاء
    generateOptionsTitle: 'خيارات الإنشاء',
    
    // عرض السجلات
    recordLabel: 'السجل #{num}',
    addressLabel: 'العنوان',
    streetLabel: 'الشارع',
    houseNumberLabel: 'رقم المنزل',
    neighborhoodLabel: 'الحي',
    postalCodeLabel: 'الرمز البريدي',
    cityLabel: 'المدينة',
    stateLabel: 'الولاية',
    
    // تنسيق العنوان
    commercialAddress: '(عنوان تجاري)',
    postOfficeBox: 'صندوق البريد',
    studentDormitory: 'سكن الطلاب',
    teachingBuilding: 'المبنى التعليمي',
    library: 'المكتبة',
    
    // ولايات المكسيك (32 ولاية)
    states: {
        AGS: 'أغواسكاليينتس',
        BCN: 'باجا كاليفورنيا',
        BCS: 'باجا كاليفورنيا سور',
        CAMP: 'كامبيتشي',
        COAH: 'كواويلا',
        COL: 'كوليما',
        CHIS: 'شياباس',
        CHIH: 'شيواوا',
        CDMX: 'مدينة مكسيكو',
        DUR: 'دورانجو',
        GTO: 'غواناخواتو',
        GRO: 'غييريرو',
        HGO: 'idalgo',
        JAL: 'خاليسكو',
        MEX: 'ولاية مكسيكو',
        MIC: 'ميشواكان',
        MOR: 'موريلوس',
        NAY: 'ناياريت',
        NLE: 'نويفو ليون',
        OAX: 'واهاكا',
        PUE: 'بويبلو',
        QRO: 'كيريتارو',
        QROO: 'كينتانا رو',
        SLP: 'سان لويس بوتوسي',
        SIN: 'سينالوا',
        SON: 'سونورا',
        TAB: 'تاباسكو',
        TAM: 'تاماوليباس',
        TLAX: 'تلاكسكالا',
        VER: 'فيرا كروز',
        YUC: 'يوكاتان',
        ZAC: 'زاكاتيكاس'
    },
    
    // أسماء الجامعات
    universities: {
        UNAM: 'الجامعة الوطنية المستقلة في المكسيك',
        IPN: 'المعهد البوليتكني الوطني',
        UdeG: 'جامعة غوادالاخارا',
        UANL: 'الجامعة المستقلة في نويفو ليون'
    },
    
    // أسماء أعمدة CSV
    csv: {
        fullAddress: 'العنوان الكامل',
        street: 'الشارع',
        houseNumber: 'رقم المنزل',
        neighborhood: 'الحي',
        postalCode: 'الرمز البريدي',
        city: 'المدينة',
        state: 'الولاية',
        fullName: 'الاسم الكامل',
        gender: 'الجنس',
        age: 'العمر',
        birthDate: 'تاريخ الميلاد',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        cardType: 'نوع البطاقة',
        cardNumber: 'رقم البطاقة',
        rfc: 'RFC',
        curp: 'CURP'
    }
};