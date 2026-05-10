export default {
   name: 'مولد عناوين الهند - توليد عناوين هندية حقيقية ومعلومات الهوية وبيانات الاتصال عبر الإنترنت',
   description: 'مولد عناوين هندي مجاني عبر الإنترنت ينشئ عناوين هندية بصيغة حقيقية وأرقام الهوية وأرقام الهاتف وأرقام بطاقات الائتمان وملفات الهوية الكاملة. يدعم تصفية الولايات وتنسيقات تصدير JSON/CSV ويتم تشغيله بالكامل في المتصفح لحماية الخصوصية.',
   inputTitle: 'إعدادات التوليد',
   outputTitle: 'النتائج المولدة',
   generateBtn: 'توليد البيانات',
   loadSampleBtn: 'تحميل النموذج وتوليد',
   clearAll: 'مسح الكل',
   noOutput: 'لم يتم توليد نتائج بعد',
   preview: 'معاينة البيانات',
   
   // التصفية الجغرافية
   locationTitle: 'التصفية الجغرافية',
   selectRegion: 'اختيار الولاية',
   allRegions: 'جميع الولايات',
   postalCodeLabel: 'الرمز البريدي',
   validatePostalCode: 'التحقق من الرمز البريدي',
   
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
   zodiac: 'برج الأبراج',
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
   
   // بطاقة الهوية
   idCardTitle: 'بطاقة الهوية الهندية',
   idCardNumber: 'رقم بطاقة الهوية',
   aadhaarNumber: 'رقم آدهار',
   
   // البصمة الرقمية
   fingerprintTitle: 'البصمة الرقمية',
   os: 'نظام التشغيل',
   osVersion: 'إصدار النظام',
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
   downloadBtn: 'تنزيل',
   copyBtn: 'نسخ',
   viewDetails: 'عرض التفاصيل',
   
   // التوليد الدفعي
   batchTitle: 'التوليد الدفعي',
   quantityLabel: 'الكمية',
   quantityPlaceholder: 'أدخل الكمية (1-100)',
   
   // رسائل الإشعار
   generating: 'جارٍ التوليد...',
   generated: 'اكتمل التوليد',
   copySuccess: 'تم النسخ إلى الحافظة',
   downloadSuccess: 'تم التنزيل بنجاح',
   invalidQuantity: 'يرجى إدخال رقم بين 1 و100',
   
   // عرض النتائج
   resultCount: 'تم توليد {count} سجل',
   resultSummary: 'ملخص النتائج',
   showAll: 'عرض الكل',
   collapse: 'طي',
   
   // خيارات التوليد
   generateOptionsTitle: 'خيارات التوليد',
   
   // عرض السجلات
   recordLabel: 'سجل #{num}',
   addressLabel: 'العنوان',
   streetLabel: 'الشارع',
   houseNumberLabel: 'رقم المنزل',
   buildingLabel: 'المبنى',
   floorLabel: 'الطابق',
   unitLabel: 'الوحدة',
   regionLabel: 'الولاية',
   postalCode: 'الرمز البريدي',
   
   // تنسيق العنوان
   addressNumber: 'رقم',
   addressFloor: 'طابق',
   addressUnit: 'وحدة',
   commercialUnit: '(وحدة تجارية)',
   india: 'الهند',
   postOfficeBox: 'صندوق البريد',
   studentDormitory: 'سكن الطلاب',
   teachingBuilding: 'مبنى التدريس',
   library: 'المكتبة',
   buildingUnit: 'وحدة',
   apartment: 'شقة',
   
   // أسماء المناطق (ولايات هندية)
   regions: {
       'Maharashtra': 'ماهاراشترا',
       'Karnataka': 'كارناتاكا',
       'Tamil Nadu': 'تاميل نادو',
       'Delhi': 'دلهي',
       'Gujarat': 'غوجarat',
       'Rajasthan': 'راجاستان',
       'Uttar Pradesh': 'أوتار براديش',
       'West Bengal': 'البنغال الغربية',
       'Kerala': 'كيرالا',
       'Andhra Pradesh': 'أندرا براديش',
       'Telangana': 'تلانغانا',
       'Madhya Pradesh': 'ماديا براديش',
       'Bihar': 'بيهار',
       'Punjab': 'بنجاب',
       'Haryana': 'هاريانا',
       'Odisha': 'أوديشا',
       'Chhattisgarh': ' تشاتيسغار',
       'Jharkhand': 'جوركخارد',
       'Assam': 'أسام',
       'Jammu and Kashmir': 'جامو وكشمير'
   },
   
   // أسماء الجامعات
   universities: {
       'IIT': 'معهد التقنية الهندي',
       'IISc': 'معهد العلوم الهندي',
       'IIM': 'معهد الإدارة الهندي',
       'AIIMS': 'معهد جميع أنحاء الهند للعلوم الطبية',
       'JNU': 'جامعة جواهر لال نهرو',
       'DU': 'جامعة دلهي',
       'BHU': 'جامعة بناراس الهندوسية',
       'Jadavpur': 'جامعة جادافبور',
       'Anna': 'جامعة أنا',
       'Osmania': 'جامعة عثمانية'
   },
   
   // أسماء أعمدة CSV
   csv: {
       fullAddress: 'العنوان الكامل',
       street: 'الشارع',
       houseNumber: 'رقم المنزل',
       building: 'المبنى',
       floor: 'الطابق',
       unit: 'الوحدة',
       region: 'الولاية',
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