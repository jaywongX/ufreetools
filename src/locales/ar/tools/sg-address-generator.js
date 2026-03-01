export default {
    name: 'مولد عناوين سنغافورة - إنشاء عناوين سنغافورة واقعية عبر الإنترنت',
    description: 'مولد عناوين سنغافورة المجاني عبر الإنترنت، ينشئ عناوين سنغافورة واقعية وأرقام NRIC وأرقام الهواتف وأرقام بطاقات الائتمان وملفات هوية كاملة. تصفية حسب المنطقة، تصدير JSON/CSV، يعمل محلياً للخصوصية.',
    inputTitle: 'إعدادات التوليد',
    outputTitle: 'النتائج المولدة',
    generateBtn: 'توليد البيانات',
    loadSampleBtn: 'تحميل نموذج وتوليد',
    clearAll: 'مسح الكل',
    noOutput: 'لا توجد نتائج',
    preview: 'معاينة البيانات',
    
    locationTitle: 'تصفية الموقع',
    selectRegion: 'اختر المنطقة',
    selectArea: 'اختر المنطقة',
    allRegions: 'جميع المناطق',
    allAreas: 'جميع المناطق',
    postalCodeLabel: 'الرمز البريدي',
    
    addressTypeTitle: 'نوع العنوان',
    addressTypeResidential: 'سكني',
    addressTypeCommercial: 'تجاري',
    addressTypeHDB: 'شقة HDB',
    addressTypeCondo: 'شقة خاصة',
    
    identityTitle: 'معلومات الهوية',
    fullName: 'الاسم الكامل',
    gender: 'الجنس',
    genderMale: 'ذكر',
    genderFemale: 'أنثى',
    age: 'العمر',
    birthDate: 'تاريخ الميلاد',
    race: 'العرق',
    raceChinese: 'صيني',
    raceMalay: 'مالاي',
    raceIndian: 'هندي',
    raceOthers: 'أخرى',
    
    contactTitle: 'معلومات الاتصال',
    phoneNumber: 'رقم الهاتف',
    areaCode: 'رمز المنطقة',
    email: 'البريد الإلكتروني',
    tempEmail: 'بريد مؤقت',
    
    creditCardTitle: 'معلومات بطاقة الائتمان',
    cardType: 'نوع البطاقة',
    cardNumber: 'رقم البطاقة',
    expiryDate: 'تاريخ الانتهاء',
    cvv: 'CVV',
    bankBin: 'BIN البنك',
    
    careerTitle: 'الملف الوظيفي',
    jobTitle: 'المسمى الوظيفي',
    salary: 'الراتب',
    companyName: 'اسم الشركة',
    companySize: 'حجم الشركة',
    industry: 'الصناعة',
    employmentStatus: 'حالة التوظيف',
    employmentFullTime: 'دوام كامل',
    employmentPartTime: 'دوام جزئي',
    
    idCardTitle: 'بطاقة NRIC',
    idCardNumber: 'رقم NRIC',
    prefixLetter: 'حرف البادئة',
    serialNumber: 'الرقم التسلسلي',
    checkLetter: 'حرف التحقق',
    
    exportTitle: 'تنسيق التصدير',
    exportJson: 'تصدير JSON',
    exportCsv: 'تصدير CSV',
    downloadBtn: 'تحميل',
    copyBtn: 'نسخ',
    viewDetails: 'عرض التفاصيل',
    
    batchTitle: 'توليد دفعي',
    quantityLabel: 'الكمية',
    quantityPlaceholder: 'أدخل كمية (1-100)',
    
    generating: 'جاري التوليد...',
    generated: 'اكتمل التوليد',
    copySuccess: 'تم النسخ إلى الحافظة',
    downloadSuccess: 'تم التحميل بنجاح',
    invalidQuantity: 'الرجاء إدخال رقم بين 1-100',
    
    resultCount: 'تم توليد {count} سجل',
    resultSummary: 'ملخص النتائج',
    showAll: 'عرض الكل',
    collapse: 'طي',
    
    generateOptionsTitle: 'خيارات التوليد',
    
    recordLabel: 'سجل #{num}',
    addressLabel: 'العنوان',
    streetLabel: 'الشارع',
    houseNumberLabel: 'رقم المنزل',
    buildingLabel: 'المبنى',
    unitLabel: 'الوحدة',
    postalCodeLabel: 'الرمز البريدي',
    regionLabel: 'المنطقة',
    
    regions: {
        CR: 'المنطقة الوسطى',
        ER: 'المنطقة الشرقية',
        NR: 'المنطقة الشمالية',
        NER: 'المنطقة الشمالية الشرقية',
        WR: 'المنطقة الغربية'
    },
    
    areas: {
        CR: {
            orchard: 'أورشارد',
            riverValley: 'ريفر فالي',
            newton: 'نيوتن',
            tanglin: 'تانغلين',
            bukitTimah: 'بوكيت تيماه',
            clementi: 'كليمنتي',
            queenstown: 'كوينزتاون'
        },
        ER: {
            bedok: 'بيدوك',
            changi: 'تشانغي',
            pasirRis: 'باسير ريس',
            tampines: 'تامبينس',
            payaLebar: 'بايا ليبار'
        },
        NR: {
            angMoKio: 'أنغ مو كيو',
            bishan: 'بيشان',
            serangoon: 'سرانجون',
            hougang: 'هوغانغ',
            sengkang: 'سينغكانغ',
            punggol: 'بونغول'
        },
        NER: {
            hougang: 'هوغانغ',
            punggol: 'بونغول',
            seletar: 'سيليتار',
            sengkang: 'سينغكانغ',
            serangoon: 'سرانجون'
        },
        WR: {
            jurongEast: 'جورونغ الشرقية',
            jurongWest: 'جورونغ الغربية',
            bukitBatok: 'بوكيت باتوك',
            choaChuKang: 'تشوا تشو كانغ',
            woodlands: 'وودلاندز',
            sembawang: 'سيمباوانغ',
            yishun: 'يشون'
        }
    },
    
    csv: {
        fullAddress: 'العنوان الكامل',
        street: 'الشارع',
        houseNumber: 'رقم المنزل',
        building: 'المبنى',
        postalCode: 'الرمز البريدي',
        fullName: 'الاسم',
        gender: 'الجنس',
        age: 'العمر',
        birthDate: 'تاريخ الميلاد',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        cardType: 'نوع البطاقة',
        cardNumber: 'رقم البطاقة',
        idCardNumber: 'رقم NRIC'
    }
};
