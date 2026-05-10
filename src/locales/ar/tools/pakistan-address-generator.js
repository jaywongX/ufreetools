export default {
   name: 'مولّد عناوين باكستان - إنشاء عناوين باكستانية حقيقية ومعلومات الهوية وبيانات الاتصال عبر الإنترنت',
   description: 'مولّد عناوين باكستاني مجاني عبر الإنترنت ينشئ عناوين باكستانية بصيغة حقيقية وأرقام هوية وأرقام هواتف وأرقام بطاقات ائتمان وملفات هوية كاملة. يدعم التصفية حسب المحافظة وتنسيقات التصدير JSON/CSV ويتم تشغيله بالكامل في المتصفح لحماية الخصوصية.',
   inputTitle: 'إعدادات الإنشاء',
   outputTitle: 'النتائج المنشأة',
   generateBtn: 'إنشاء البيانات',
   loadSampleBtn: 'تحميل النموذج وإنشاء',
   clearAll: 'مسح الكل',
   noOutput: 'لم يتم إنشاء نتائج بعد',
   preview: 'معاينة البيانات',
   
   // التصفية الجغرافية
   locationTitle: 'التصفية الجغرافية',
   selectRegion: 'اختيار المحافظة/المنطقة',
   allRegions: 'جميع المحافظات/المناطق',
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
   bankBin: 'BIN البنكي',
   
   //Career
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
   idCardTitle: 'بطاقة الهوية الباكستانية',
   idCardNumber: 'رقم بطاقة الهوية',
   
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
   cookiePolicy: 'سياسة ملفات تعريف الارتباط',
   
   // خيارات التصدير
   exportTitle: 'تنسيق التصدير',
   exportJson: 'تصدير JSON',
   exportCsv: 'تصدير CSV',
   downloadBtn: 'تحميل',
   copyBtn: 'نسخ',
   viewDetails: 'عرض التفاصيل',
   
   // الإنشاء بالدفعات
   batchTitle: 'الإنشاء بالدفعات',
   quantityLabel: 'الكمية',
   quantityPlaceholder: 'أدخل الكمية (1-100)',
   
   // رسائل الإشعار
   generating: 'جاري الإنشاء...',
   generated: 'اكتمل الإنشاء',
   copySuccess: 'تم النسخ إلى الحافظة',
   downloadSuccess: 'تم التحميل بنجاح',
   invalidQuantity: 'أدخل رقماً بين 1 و 100',
   
   // عرض النتائج
   resultCount: 'تم إنشاء {count} سجلات',
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
   buildingLabel: 'المبنى',
   floorLabel: 'الطابق',
   unitLabel: 'الوحدة',
   regionLabel: 'المحافظة/المنطقة',
   postalCode: 'الرمز البريدي',
   
   // تنسيق العنوان
   addressNumber: 'رقم',
   addressFloor: 'طابق',
   addressUnit: 'وحدة',
   commercialUnit: '(وحدة تجارية)',
   pakistan: 'باكستان',
   postOfficeBox: 'صندوق بريد',
   studentDormitory: 'سكن الطلاب',
   teachingBuilding: 'مبنى تعليمي',
   library: 'مكتبة',
   buildingUnit: 'مبنى',
   apartment: 'شقة',
   
   // أسماء المحافظات/المناطق (4 محافظات + إقليم في باكستان)
   regions: {
       'Punjab': 'البنجاب',
       'Sindh': 'السند',
       'Khyber Pakhtunkhwa': 'خايبير بختونخوا',
       'Balochistan': 'بلوشستان',
       'Islamabad Capital Territory': 'إقليم العاصمة إسلام آباد'
   },
   
   // أسماء الجامعات
   universities: {
       'LUMS': 'جامعة لاهور لعلوم الإدارة',
       'PU': 'جامعة البنجاب',
       'KU': 'جامعة كراتشي',
       'QAU': 'جامعة قائدة آزام',
       'COMSATS': 'جامعة كومساتس إسلام آباد',
       'NUST': 'الجامعة الوطنية للعلوم والتكنولوجيا',
       'IBA': 'معهد إدارة الأعمال',
       'PIDE': 'معهد باكستان لاقتصاديات التنمية',
       'NCA': 'الكلية الوطنية للفنون'
   },
   
   // أسماء أعمدة CSV
   csv: {
       fullAddress: 'العنوان الكامل',
       street: 'الشارع',
       houseNumber: 'رقم المنزل',
       building: 'المبنى',
       floor: 'الطابق',
       unit: 'الوحدة',
       region: 'المحافظة/المنطقة',
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