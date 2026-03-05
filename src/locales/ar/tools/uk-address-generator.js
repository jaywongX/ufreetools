export default {
    name: 'مولد عناوين المملكة المتحدة - إنشاء عناوين حقيقية للمملكة المتحدة ومعلومات الهوية وجهات الاتصال عبر الإنترنت',
    description: 'مولد عناوين المملكة المتحدة المجاني عبر الإنترنت. يُنشئ عناوين بريطانية بتنسيق حقيقي وأرقام التأمين الوطني (NINO) وأرقام الهواتف وأرقام بطاقات الائتمان وملفات هوية كاملة. التصفية حسب المقاطعة، التصدير بصيغة JSON/CSV، معالجة الواجهة الأمامية البحتة للخصوصية.',
    inputTitle: 'إعدادات الإنشاء',
    outputTitle: 'النتائج',
    generateBtn: 'إنشاء البيانات',
    loadSampleBtn: 'تحميل المثال والإنشاء',
    clearAll: 'مسح الكل',
    noOutput: 'لا توجد نتائج',
    preview: 'معاينة',
    
    locationTitle: 'التصفية الجغرافية',
    selectCounty: 'اختر المقاطعة',
    selectCity: 'اختر المدينة',
    allCounties: 'جميع المقاطعات',
    allCities: 'جميع المدن',
    postcodeLabel: 'الرمز البريدي',
    validatePostcode: 'التحقق من الرمز البريدي',
    
    addressTypeTitle: 'نوع العنوان',
    addressTypeResidential: 'عنوان سكني',
    addressTypeCommercial: 'عنوان تجاري',
    addressTypePoBox: 'صندوق بريد',
    addressTypeCampus: 'حرم جامعي',
    
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
    
    contactTitle: 'معلومات الاتصال',
    phoneNumber: 'رقم الهاتف',
    phoneType: 'نوع الهاتف',
    phoneTypeMobile: 'محمول',
    phoneTypeLandline: 'أرضي',
    areaCode: 'رمز المنطقة',
    email: 'البريد الإلكتروني',
    tempEmail: 'بريد مؤقت',
    
    creditCardTitle: 'معلومات بطاقة الائتمان',
    cardType: 'نوع البطاقة',
    cardNumber: 'رقم البطاقة',
    expiryDate: 'تاريخ الانتهاء',
    cvv: 'CVV',
    bankBin: 'رمز BIN البنكي',
    
    careerTitle: 'الملف الوظيفي',
    jobTitle: 'المسمى الوظيفي',
    salary: 'الراتب',
    companyName: 'اسم الشركة',
    companySize: 'حجم الشركة',
    industry: 'القطاع',
    employmentStatus: 'حالة التوظيف',
    employmentFullTime: 'دوام كامل',
    employmentPartTime: 'دوام جزئي',
    
    idCardTitle: 'رقم التأمين الوطني (NINO)',
    idCardNumber: 'رقم التأمين الوطني',
    prefixLetter: 'حرف البادئة',
    serialNumber: 'الرقم التسلسلي',
    suffixLetter: 'حرف اللاحقة',
    
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
    
    exportTitle: 'تنسيق التصدير',
    exportJson: 'تصدير JSON',
    exportCsv: 'تصدير CSV',
    downloadBtn: 'تحميل',
    copyBtn: 'نسخ',
    viewDetails: 'عرض التفاصيل',
    
    batchTitle: 'الإنشاء المجمّع',
    quantityLabel: 'الكمية للإنشاء',
    quantityPlaceholder: 'أدخل الكمية (1-100)',
    
    generating: 'جارٍ الإنشاء...',
    generated: 'اكتمل الإنشاء',
    copySuccess: 'تم النسخ إلى الحافظة',
    downloadSuccess: 'تم التحميل بنجاح',
    invalidQuantity: 'أدخل رقمًا بين 1-100',
    
    resultCount: 'إجمالي {count} سجل تم إنشاؤه',
    resultSummary: 'ملخص النتائج',
    showAll: 'عرض الكل',
    collapse: 'طي',
    
    generateOptionsTitle: 'خيارات الإنشاء',
    
    recordLabel: 'السجل #{num}',
    addressLabel: 'العنوان',
    streetLabel: 'الشارع',
    houseNumberLabel: 'رقم المنزل',
    buildingLabel: 'المبنى',
    cityLabel: 'المدينة',
    countyLabel: 'المقاطعة',
    
    counties: {
        LND: 'لندن الكبرى',
        GRM: 'مانشستر الكبرى',
        MAN: 'مانشستر',
        BIR: 'غرب ميدلاندز',
        LEE: 'غرب يوركشاير',
        SHE: 'جنوب يوركشاير',
        LIV: 'ميرسيسايد',
        BRS: 'بريستول',
        NEW: 'تاين ووير',
        NOT: 'نوتنغهامشاير',
        EDB: 'إدنبرة',
        GLA: 'غلاسكو',
        CDF: 'كارديف',
        BEL: 'بلفاست',
        SOU: 'ساوثهامبتون',
        POR: 'بليموث',
        BRI: 'برايتون',
        CAM: 'كامبريدجشاير'
    },
    
    cities: {
        LND: {
            westminster: 'ويستمنستر',
            kensington: 'كينسينغتون',
            chelsea: 'تشيلسي',
            camden: 'كامدن',
            islington: 'إيزلينغتون',
            hackney: 'هاكني',
            towerHamlets: 'تاور هامليتس',
            greenwich: 'غرينيتش'
        },
        GRM: {
            manchester: 'مانشستر',
            salford: 'سالفورد',
            bolton: 'بولتون',
            bury: 'بوري',
            oldham: 'أولدهام',
            rochdale: 'روشديل',
            stockport: 'ستوكبورت',
            wigan: 'ويغان'
        },
        MAN: {
            manchesterCity: 'مدينة مانشستر',
            trafford: 'ترافورد',
            tameside: 'تايمسايد',
            sale: 'سيل'
        },
        BIR: {
            birmingham: 'برمنغهام',
            coventry: 'كوفنتري',
            wolverhampton: 'وولفرهامبتون',
            dudley: 'دادلي',
            walsall: 'والسول',
            sandwell: 'ساندويل',
            solihull: 'سوليهال'
        },
        LEE: {
            leeds: 'ليدز',
            bradford: 'برادفورد',
            wakefield: 'ويكفيلد',
            kirklees: 'كيركليز',
            calderdale: 'كالديردال'
        },
        SHE: {
            sheffield: 'شيفيلد',
            rotherham: 'روذرهام',
            doncaster: 'دونكاستر',
            barnsley: 'بارنسلي'
        },
        LIV: {
            liverpool: 'ليفربول',
            knowsley: 'نوزلي',
            sefton: 'سيفتون',
            wirral: 'ويرال',
            stHelens: 'سانت هيلينز'
        },
        BRS: {
            bristol: 'بريستول',
            southGloucestershire: 'جنوب غلوسترشاير',
            bath: 'باث'
        },
        NEW: {
            newcastle: 'نيوكاسل',
            gateshead: 'غيتسهيد',
            sunderland: 'ساندرلاند',
            durham: 'دارام',
            northTyneside: 'شمال تاينسايد',
            southTyneside: 'جنوب تاينسايد'
        },
        NOT: {
            nottingham: 'نوتنغهام',
            derby: 'ديربي',
            leicester: 'ليستر',
            lincoln: 'لينكولن'
        },
        EDB: {
            edinburgh: 'إدنبرة',
            glasgow: 'غلاسكو',
            aberdeen: 'أبردين',
            dundee: 'ندي',
            inverness: 'إينفرنس'
        },
        GLA: {
            glasgowCity: 'مدينة غلاسكو',
            paisley: 'بيلزي',
            motherwell: 'ماذرويل',
            hamilton: 'هاميلتون',
            eastKilbride: 'إيست كيلبرايد'
        },
        CDF: {
            cardiff: 'كارديف',
            swansea: 'سوانزي',
            newport: 'نيوبورت',
            wrexham: 'ريكسهام',
            barry: 'باري'
        },
        BEL: {
            belfast: 'بلفاست',
            derry: 'ديري',
            lisburn: 'ليسبورن',
            newry: 'نيوري',
            bangor: 'بانغور'
        },
        SOU: {
            southampton: 'ساوثهامبتون',
            portsmouth: 'بورتسموث',
            bournemouth: 'بورنموث',
            poole: 'بول',
            winchester: 'وينشستر'
        },
        POR: {
            plymouth: 'بليموث',
            exeter: 'إكستر',
            truro: 'ترو',
            bath: 'باث',
            taunton: 'تونتون'
        },
        BRI: {
            brighton: 'برايتون',
            hove: 'هوف',
            worthing: 'وورثينغ',
            eastbourne: 'إيستبورن',
            hastings: 'هاستينغز'
        },
        CAM: {
            cambridge: 'كامبريدج',
            oxford: 'أكسفورد',
            peterborough: 'بيتربره',
            luton: 'لوتون',
            miltonKeynes: 'ميلتون كينز'
        }
    },
    
    universities: {
        OXF: 'جامعة أكسفورد',
        CAM: 'جامعة كامبريدج',
        IMP: 'كلية لندن الإمبراطورية',
        UCL: 'كلية لندن الجامعية',
        EDB: 'جامعة إدنبرة'
    },
    
    studentHall: 'سكن طلابي',
    academicBuilding: 'مبنى أكاديمي',
    library: 'مكتبة',
    
    csv: {
        fullAddress: 'العنوان الكامل',
        street: 'الشارع',
        houseNumber: 'رقم المنزل',
        building: 'المبنى',
        postcode: 'الرمز البريدي',
        city: 'المدينة',
        county: 'المقاطعة',
        fullName: 'الاسم',
        gender: 'الجنس',
        age: 'العمر',
        birthDate: 'تاريخ الميلاد',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        cardType: 'نوع البطاقة',
        cardNumber: 'رقم البطاقة',
        idCardNumber: 'رقم التأمين الوطني'
    }
};
