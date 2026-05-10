export default {
    name: 'مولّد عناوين فيتنام - إنشاء عناوين فيتنامية حقيقية ومعلومات الهوية وبيانات الاتصال عبر الإنترنت',
    description: 'مولّد عناوين فيتنامي مجاني عبر الإنترنت ينشئ عناوين فيتنامية بصيغة حقيقية وأرقام هوية وأرقام هواتف وأرقام بطاقات ائتمان وملفات هوية كاملة. يدعم التصفية حسب المحافظة وتنسيقات التصدير JSON/CSV ويتم تشغيله بالكامل في المتصفح لحماية الخصوصية.',
    inputTitle: 'إعدادات الإنشاء',
    outputTitle: 'النتائج المنشأة',
    generateBtn: 'إنشاء البيانات',
    loadSampleBtn: 'تحميل النموذج وإنشاء',
    clearAll: 'مسح الكل',
    noOutput: 'لم يتم إنشاء نتائج بعد',
    preview: 'معاينة البيانات',
    
    // التصفية الجغرافية
    locationTitle: 'التصفية الجغرافية',
    selectProvince: 'اختيار المحافظة/المدينة',
    selectDistrict: 'اختيار المنطقة',
    allProvinces: 'جميع المحافظات/المدن',
    allDistricts: 'جميع المناطق',
    postalCodeLabel: 'الرمز البريدي',
    validatePostalCode: 'التحقق من الرمز البريدي',
    
    // أنواع العنوان
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
    phoneTypeLandline: 'هاتف أرضي',
    areaCode: 'رمز المنطقة',
    email: 'البريد الإلكتروني',
    tempEmail: 'بريد مؤقت',
    
    // بطاقة الائتمان
    creditCardTitle: 'معلومات بطاقة الائتمان',
    cardType: 'نوع البطاقة',
    cardNumber: 'رقم البطاقة',
    expiryDate: 'تاريخ الانتهاء',
    cvv: 'CVV',
    bankBin: 'BIN البنك',
    
    // الملف المهني
    careerTitle: 'الملف المهني',
    jobTitle: 'المسمى الوظيفي',
    salary: 'الراتب',
    companyName: 'اسم الشركة',
    companySize: 'حجم الشركة',
    industry: 'الصناعة',
    employmentStatus: 'حالة التوظيف',
    employmentFullTime: 'دوام كامل',
    employmentPartTime: 'دوام جزئي',
    
    // بطاقة الهوية
    idCardTitle: 'بطاقة الهوية الفيتنامية',
    idCardNumber: 'رقم بطاقة الهوية',
    cmndNumber: 'رقم CMND',
    cccdNumber: 'رقم CCCD',
    serialNumber: 'الرقم التسلسلي',
    
    // البصمة الرقمية
    fingerprintTitle: 'البصمة الرقمية',
    os: 'نظام التشغيل',
    osVersion: 'إصدار النظام',
    browser: 'المتصفح',
    userAgent: 'وكيل المستخدم',
    screenResolution: 'دقة الشاشة',
    timezone: 'المنطقة الزمنية',
    guid: 'المعرّف الفريد',
    ipAddress: 'عنوان IP',
    macAddress: 'عنوان MAC',
    cookiePolicy: 'سياسة ملفات تعريف الارتباط',
    
    // خيارات التصدير
    exportTitle: 'تنسيق التصدير',
    exportJson: 'تصدير JSON',
    exportCsv: 'تصدير CSV',
    exportIdCard: 'إنشاء صورة بطاقة الهوية',
    exportBusinessCard: 'إنشاء بطاقة عمل',
    downloadBtn: 'تنزيل',
    copyBtn: 'نسخ',
    viewDetails: 'عرض التفاصيل',
    
    // الإنشاء الدفعي
    batchTitle: 'الإنشاء الدفعي',
    quantityLabel: 'الكمية',
    quantityPlaceholder: 'أدخل الكمية (1-100)',
    
    // رسائل الإشعار
    generating: 'جاري الإنشاء...',
    generated: 'اكتمل الإنشاء',
    copySuccess: 'تم النسخ إلى الحافظة',
    downloadSuccess: ' التنزيل ناجح',
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
    buildingLabel: 'المبنى',
    floorLabel: 'الطابق',
    unitLabel: 'الوحدة',
    wardLabel: 'الحي',
    districtLabel: 'المنطقة',
    provinceLabel: 'المحافظة/المدينة',
    postalCode: 'الرمز البريدي',
    
    // تنسيق العنوان
    addressNumber: 'رقم',
    addressFloor: 'طابق',
    addressUnit: 'وحدة',
    commercialUnit: '(وحدة تجارية)',
    vietnam: 'فيتنام',
    postOfficeBox: 'صندوق بريد',
    studentDormitory: 'سكن الطلاب',
    teachingBuilding: 'مبنى التدريس',
    library: 'المكتبة',
    buildingUnit: 'وحدة',
    apartment: 'شقة',
    
    // رسائل التنبيه
    idCardImageAlert: 'إنشاء صورة بطاقة الهوية يتطلب تنفيذ Canvas',
    businessCardAlert: 'إنشاء بطاقة العمل يتطلب تنفيذ Canvas',
    
    // أسماء المحافظات (محافظات فيتنام)
    provinces: {
        HN: 'هانوي',
        HCM: 'مدينة هو تشي منه',
        HP: 'هايفونغ',
        DN: 'دانانغ',
        CT: 'كانتو',
        BH: 'با ريا - فونغ تاو',
        BD: 'بين زيونغ',
        QN: 'كوانغ نينه',
        QG: 'كوانغ نام',
        KG: 'كا ماو',
        DT: 'دونغ ناي',
        HB: 'ها نام',
        TH: 'تاي بينه',
        NB: 'نام دينه',
        VL: 'فينه لونغ',
        TG: 'سوك ترانغ',
        NT: 'نينه ثوان',
        PY: 'فو ين',
        TV: 'تاي نينه',
        BD: 'بين دينه',
        HT: 'hoa binh',
        TB: 'تويين كوانغ',
        TN: 'تاي نгуين',
        LC: 'لاي تشاو',
        YB: 'ينه باي',
        DB: 'ديين بيان',
        LA: 'لاو كاي',
        CB: 'كاو بانغ',
        LD: 'لام دونغ',
        DC: 'داك لاك',
        QN: 'كوانغ بينه',
        QT: 'كوانغ تري',
        HT: 'ها تينه',
        NA: 'نغيه أنه',
        TT: 'ثانهhoa',
        NB: 'نينه بينه',
        ST: 'أنه كيانغ',
        CT: 'تيرا فينه',
        BP: 'بن تري',
        BL: 'باك لياو',
        KG: 'كا ماو',
        CM: 'كا ماو'
    },
    
    // بيانات المناطق (أمثلة على هانوي ومدينة هو تشي منه)
    districtsData: {
        HN: {
            hoanKiem: 'هوان كيم',
            baDinh: 'با دينه',
            dongDa: 'دونغ دا',
            haiBaTrung: 'هاي با ترونغ',
            thanhXuan: 'ثانه شوان',
            cauGiay: 'كاو غياي',
            hoangMai: 'هوانغ ماي',
            longBien: 'لونغ بينه',
            tayHo: 'تاي هو',
            bacTuLiem: 'باك تو ليه م',
            namTuLiem: 'نام تو ليه م',
            haDong: 'ها دونغ'
        },
        HCM: {
            quan1: 'المنطقة 1',
            quan3: 'المنطقة 3',
            quan4: 'المنطقة 4',
            quan5: 'المنطقة 5',
            quan6: 'المنطقة 6',
            quan7: 'المنطقة 7',
            quan10: 'المنطقة 10',
            quan11: 'المنطقة 11',
            binhThanh: 'بينه ثانه',
            phuNhuan: 'فو نهوان',
            tanBinh: 'تان بينه',
            goVap: 'غو فاب',
            binhChanh: 'بينه تانه',
            thuDuc: 'ثو دوك'
        },
        DN: {
            haiChau: 'هاي تشاو',
            thanhKhe: 'ثانه خيه',
            sonTra: 'سون ترا',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'هونغ بانغ',
            LeChan: 'ليه تشان',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'هاي أن',
            KiAn: 'كي أن'
        }
    },
    
    // أسماء الجامعات
    universities: {
        HUST: 'جامعة هانوي للعلوم والتكنولوجيا',
        VNU: 'جامعة فيتنام الوطنية',
        HANU: 'جامعة هانوي الوطنية',
        HCMUS: 'جامعة مدينة هو تشي منه الوطنية',
        RMIT: 'جامعة RMIT فيتنام',
        FTU: 'جامعة التجارة الخارجية',
        NEU: 'جامعة الاقتصاد الوطني',
        HPU: 'جامعة الصيدلة في هانوي',
        PTIT: 'معهد البريد والاتصالات والتكنولوجيا',
        FPT: 'جامعة FPT'
    },
    
    // أسماء أعمدة CSV
    csv: {
        fullAddress: 'العنوان الكامل',
        street: 'الشارع',
        houseNumber: 'رقم المنزل',
        building: 'المبنى',
        floor: 'الطابق',
        unit: 'الوحدة',
        ward: 'الحي',
        district: 'المنطقة',
        province: 'المحافظة/المدينة',
        postalCode: 'الرمز البريدي',
        fullName: 'الاسم الكامل',
        gender: 'الجنس',
        age: 'العمر',
        birthDate: 'تاريخ الميلاد',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        cardType: 'نوع البطاقة',
        cardNumber: 'رقم البطاقة',
        idCardNumber: 'رقم بطاقة الهوية'
    }
};