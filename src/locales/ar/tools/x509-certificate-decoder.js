export default {
  name: "محلل شهادات X.509",
  description: "أداة مجانية على الإنترنت لتحليل شهادات X.509. تحليل وتفصيل شهادات SSL/TLS، عرض تفاصيل الشهادة، التحقق من الصلاحية، استخراج المفتاح العام، تصدير التقارير.",

  instructions: {
    title: "محلل الشهادات",
    description: "قم بتحميل ملف الشهادة أو لصق الشهادة المشفرة بتنسيق PEM لعرض تفاصيلها."
  },

  dropzone: {
    title: "اسحب وأسقط ملف الشهادة هنا",
    formats: "يدعم ملفات .crt و.cer و.pem و.der و.p12 و.pfx"
  },

  buttons: {
    browse: "تصفح الملفات",
    decode: "تحليل الشهادة",
    loadSample: "تحميل نموذج",
    downloadPdf: "تنزيل تقرير PDF",
    downloadTxt: "تنزيل تقرير نصي",
    downloadHtml: "تنزيل تقرير HTML",
    downloadJson: "تنزيل تقرير JSON",
    copyBasic: "نسخ المعلومات الأساسية",
    copySubject: "نسخ الموضوع/المصدر",
    copyAll: "نسخ كل المعلومات",
    copyValue: "نسخ القيمة",
    downloadKey: "تنزيل المفتاح",
    exportPem: "تصدير PEM",
    downloadCert: "تنزيل الشهادة"
  },

  input: {
    paste: "أو لصق بيانات الشهادة:",
    placeholder: "الصق شهادتك المشفرة بتنسيق PEM (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)"
  },

  loading: "جارٍ تحليل الشهادة...",

  error: {
    title: "حدث خطأ أثناء تحليل الشهادة",
    invalidFormat: "تنسيق شهادة غير صالح",
    invalidBase64: "ليست شهادة مشفرة بصيغة base64 صالحة",
    invalidStructure: "هيكل بيانات شهادة غير صالح",
    invalidDer: "شهادة بتنسيق DER غير صالحة",
    invalidAsn1: "شهادة غير صالحة: تعذر تحليل بيانات ASN.1",
    unsupportedType: "نوع بيانات شهادة غير مدعوم",
    failedParse: "تعذر تحليل بيانات الشهادة",
    invalidP12: "تنسيق ملف PKCS#12 غير صالح",
    invalidP12Password: "كلمة مرور PKCS#12 غير صالحة",
    noCertificatesInP12: "لم يتم العثور على شهادات في ملف PKCS#12",
    unableToProcessP12: "تعذر معالجة ملف PKCS#12"
  },

  guide: {
    title: "كيفية استخدام هذه الأداة",
    step1: "قم بتحميل ملف شهادة X.509 الخاص بك (.crt، .cer، .pem، .der، .p12 أو .pfx) أو الصق بيانات الشهادة في مربع النص أدناه.",
    step2: "ستكتشف الأداة التنسيق تلقائيًا (PEM، DER أو PKCS#12) وتقوم بفك تشفيره.",
    step3: "عرض معلومات الشهادة التفصيلية، بما في ذلك الموضوع، المصدر، فترة الصلاحية، الامتدادات وبيانات المفتاح العام.",
    step4: "يمكنك استخدام الأزرار في الأسفل لتنزيل تقرير الشهادة بتنسيقات متعددة أو نسخ المعلومات إلى الحافظة."
  },

  tabs: {
    basic: "معلومات أساسية",
    subject: "الموضوع والمصدر",
    extensions: "الامتدادات",
    publicKey: "المفتاح العام",
    fingerprints: "البصمات",
    raw: "الشهادة الأصلية"
  },

  results: {
    title: "تفاصيل الشهادة",
    serialNumber: "الرقم التسلسلي",
    version: "الإصدار",
    sigAlg: "خوارزمية التوقيع",
    validFrom: "تاريخ البدء",
    validTo: "تاريخ الانتهاء",
    subject: "الموضوع",
    issuer: "المصدر",
    extensions: "الامتدادات",
    publicKey: "المفتاح العام",
    algorithm: "الخوارزمية",
    keySize: "حجم المفتاح",
    keyValue: "قيمة المفتاح",
    fingerprints: "البصمات",
    rawCertificate: "الشهادة الأصلية",
    field: "الحقل",
    value: "القيمة",
    critical: "حرج",
    noExtensions: "لم يتم العثور على امتدادات في هذه الشهادة.",
    validity: "صلاحية الشهادة",
    expiresIn: "ستنتهي الصلاحية بعد {days} يومًا",
    visualization: "تصور الشهادة",
    daysRemaining: "الأيام المتبقية",
    valid: "صالح",
    expired: "منتهي الصلاحية",
    expiringSoon: "على وشك الانتهاء",
    fieldDescriptions: "وصف الحقول",
    certificateUsage: "استخدام الشهادة",
    certificateChain: "سلسلة الشهادات",
    signatureValue: "قيمة التوقيع",
    notAvailable: "غير متاح",
    noSpecificUsage: "لا يوجد استخدام محدد",
    signatureError: "حدث خطأ أثناء تحليل قيمة التوقيع",
    keyDetails: "تفاصيل المفتاح",
    enhancedView: "عرض معزز",
    endEntity: "كيان نهائي",
    intermediate: "شهادة وسيطة",
    rootCA: "شهادة الجذر",
    endEntityCert: "شهادة الكيان النهائي",
    intermediateCert: "شهادة وسيطة",
    rootCert: "سلطة الشهادة الجذرية",
    issuedBy: "صادر عن",
    unknownIssuer: "مصدر غير معروف",
    notYetValid: "غير ساري المفعول بعد"
  },

  report: {
    title: "تقرير شهادة X.509",
    generatedOn: "تم إنشاؤه في"
  },

  extensions: {
    subjectKeyIdentifier: "معرف مفتاح الموضوع",
    keyUsage: "استخدام المفتاح",
    subjectAltName: "اسم بديل للموضوع",
    basicConstraints: "قيود أساسية",
    crlDistributionPoints: "نقاط توزيع CRL",
    certificatePolicies: "سياسات الشهادة",
    authorityKeyIdentifier: "معرف مفتاح السلطة",
    extKeyUsage: "استخدام المفتاح الممتد",
    authorityInfoAccess: "وصول معلومات السلطة",
    ctPrecertificateScts: "SCTs شهادة CT مسبقة"
  },

  usage: {
    serverAuth: "مصادقة الخادم",
    clientAuth: "مصادقة العميل",
    codeSigning: "توقيع الكود",
    emailProtection: "حماية البريد الإلكتروني",
    timeStamping: "الطابع الزمني",
    ocspSigning: "توقيع OCSP"
  },

  customOID: {
    title: "استعلام OID مخصص",
    placeholder: "أدخل OID، على سبيل المثال 2.5.29.15",
    lookup: "بحث",
    result: "النتيجة",
    value: "القيمة",
    notFound: "لم يتم العثور على معلومات لهذا OID",
    foundButComplex: "تم العثور على OID ولكن القيمة معقدة",
    unknownName: "OID باسم غير معروف",
    complexValue: "قيمة معقدة، لا يمكن عرضها مباشرة"
  },

  descriptions: {
    serialNumber: "الرقم التسلسلي الفريد للشهادة، المخصص من قبل سلطة الشهادة",
    version: "رقم إصدار تنسيق الشهادة، عادةً V3",
    sigAlg: "الخوارزمية المستخدمة لإنشاء توقيع الشهادة",
    validFrom: "تاريخ ووقت بدء صلاحية الشهادة",
    validTo: "تاريخ ووقت انتهاء صلاحية الشهادة",
    subject: "معلومات هوية حامل الشهادة",
    issuer: "معلومات هوية سلطة الشهادة التي أصدرت الشهادة",
    publicKey: "معلومات المفتاح العام لحامل الشهادة",
    extensions: "حقول الامتداد التي تحتوي على معلومات إضافية حول استخدام الشهادة"
  },

  messages: {
    copiedToClipboard: "تم النسخ إلى الحافظة",
    copyError: "فشل النسخ إلى الحافظة"
  },

  pkcs12: {
    passwordPrompt: "الرجاء إدخال كلمة مرور ملف PKCS#12",
    noPassword: "بدون كلمة مرور"
  },

  keyUsages: {
    digitalSignature: "توقيع رقمي",
    nonRepudiation: "عدم الإنكار",
    keyEncipherment: "تشفير المفتاح",
    dataEncipherment: "تشفير البيانات",
    keyAgreement: "اتفاقية المفتاح",
    keyCertSign: "توقيع الشهادة",
    crlSign: "توقيع CRL",
    encipherOnly: "تشفير فقط",
    decipherOnly: "فك تشفير فقط"
  }
};