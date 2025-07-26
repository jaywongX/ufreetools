export default {
  name: 'أداة تصحيح JWT',
  description: 'أداة عبر الإنترنت لتحليل، التحقق من صحة وتصحيح رموز JWT',

  sections: {
    encoded: 'رمز JWT المشفر',
    decoded: 'رمز JWT المفكوك',
    header: 'الرأس',
    payload: 'الحمولة',
    signature: 'التوقيع',
    verification: 'التحقق من الصحة'
  },

  actions: {
    decode: 'فك التشفير',
    verify: 'التحقق من التوقيع',
    copy: 'نسخ',
    share: 'مشاركة الرمز',
    generateToken: 'إنشاء رمز',
    generateRandomToken: 'رمز عشوائي',
    clear: 'مسح',
    generateRandomPayload: 'إنشاء حمولة عشوائية',
    generateRandomKey: 'إنشاء مفتاح عشوائي',
    generateKeyPair: 'إنشاء زوج مفاتيح'
  },

  messages: {
    invalidToken: 'تنسيق JWT غير صالح',
    copied: 'تم النسخ إلى الحافظة!',
    copyFailed: 'فشل النسخ، يرجى النسخ يدويًا',
    verificationSuccess: 'تم التحقق من صحة التوقيع بنجاح',
    verificationFailed: 'فشل التحقق من صحة التوقيع',
    keyGenerated: 'تم إنشاء زوج المفاتيح بنجاح',
    keyGenerationFailed: 'فشل إنشاء زوج المفاتيح',
    tokenGenerated: 'تم إنشاء الرمز بنجاح',
    tokenGenerationFailed: 'فشل إنشاء الرمز',
    randomTokenGenerated: 'تم إنشاء رمز عشوائي وتحليله بنجاح',
    certUploadSuccess: 'تم تحميل الشهادة بنجاح',
    certFormatInvalid: 'تنسيق الشهادة غير صالح',
    certReadFailed: 'فشل قراءة الشهادة',
    tokenFormatError: 'تنسيق الرمز غير صالح، يجب أن يحتوي JWT على ثلاثة أجزاء مفصولة بنقاط',
    tokenHeaderMissingAlg: 'رأس الرمز يفتقد إلى حقل الخوارزمية (alg)',
    tokenHeaderInvalid: 'تنسيق رأس الرمز غير صالح',
    tokenVerificationFailed: 'فشل التحقق من صحة تنسيق الرمز',
    tokenExpired: 'انتهت صلاحية الرمز. وقت الانتهاء: {time}',
    tokenNotEffective: 'الرمز غير فعال بعد. وقت التفعيل: {time}',
    tokenIssuedInFuture: 'وقت إصدار الرمز غير طبيعي، تم الإصدار في المستقبل. وقت الإصدار: {time}',
    algorithmNotSupported: 'خوارزمية غير مدعومة',
    randomSecretGenerated: 'تم إنشاء مفتاح سري عشوائي بنجاح',
    randomSecretGenerationFailed: 'فشل إنشاء مفتاح سري عشوائي',
    randomPayloadGenerated: 'تم إنشاء حمولة عشوائية',
    randomPayloadGenerationFailed: 'فشل إنشاء حمولة عشوائية',
    contentCleared: 'تم مسح جميع المحتويات',
    tokenDecodeSuccess: 'تم فك تشفير الرمز بنجاح',
    tokenDecodeFailed: 'فشل فك تشفير الرمز',
    pleaseInputKey: 'الرجاء إدخال المفتاح',
    pleaseGenerateKeyPair: 'الرجاء إنشاء زوج مفاتيح {type} أولاً',
    pleaseInputVerificationKey: 'الرجاء إدخال مفتاح التحقق',
    pleaseInputPublicKey: 'الرجاء إدخال المفتاح العام للتحقق',
    pleaseInputToken: 'الرجاء إدخال الرمز المطلوب التحقق منه',
    payloadFormatError: 'خطأ في تنسيق الحمولة، يرجى التحقق من تنسيق JSON',
    invalidTimestamp: 'طابع زمني غير صالح'
  },

  placeholders: {
    secretKey: 'الرجاء إدخال المفتاح السري',
    privateKey: 'الرجاء إدخال أو إنشاء مفتاح خاص',
    publicKey: 'الرجاء إدخال أو إنشاء مفتاح عام',
    payload: 'الرجاء إدخال الحمولة بتنسيق JSON',
    token: 'الرجاء إدخال أو إنشاء رمز JWT',
    verificationSecretKey: 'الرجاء إدخال مفتاح التحقق السري',
    verificationPublicKey: 'الرجاء إدخال المفتاح العام للتحقق'
  },

  labels: {
    algorithm: 'الخوارزمية',
    secretKey: 'المفتاح السري',
    privateKey: 'المفتاح الخاص',
    publicKey: 'المفتاح العام',
    certificate: 'شهادة رقمية (اختياري)',
    payload: 'الحمولة (Payload)',
    token: 'الرمز',
    verificationPublicKey: 'المفتاح العام للتحقق',
    tokenResult: 'نتيجة تحليل الرمز',
    verifyToken: 'التحقق من الرمز',
    tokenDecoded: 'تم اكتشاف أن الرمز موقّع باستخدام خوارزمية {alg}',
    timestamp: 'تحليل الطابع الزمني',
    issuedAt: 'وقت الإصدار (iat)',
    expiration: 'وقت الانتهاء (exp)',
    notBefore: 'وقت التفعيل (nbf)',
    tokenFormat: 'تذكير بلا محتوى',
    tokenFormatDesc: 'سيتم عرض نتيجة التحليل هنا بعد إدخال أو إنشاء رمز JWT',
    uploadCert: 'اسحب وأفلت ملف الشهادة أو انقر للاختيار',
    certName: 'اسم الشهادة',
    sm3Fingerprint: 'بصمة SM3 (x5t#sm3)',
    certUploadNote: 'بعد تحميل الشهادة، سيتم إضافة حقل "x5t#sm3" إلى رأس JWT',
    secondsTimestamp: 'طابع زمني بالثواني',
    millisecondsTimestamp: 'طابع زمني بالمللي ثانية'
  },

  buttons: {
    cancel: 'إلغاء',
    verify: 'تحقق',
    clearCert: 'مسح',
    generateToken: 'إنشاء رمز',
    decodeToken: 'تحليل الرمز',
    verifyToken: 'التحقق من الرمز',
    close: 'إغلاق'
  },

  verification: {
    success: 'نجاح التحقق',
    failure: 'فشل التحقق',
    validMessage: 'تم التحقق من توقيع الرمز بنجاح، التوقيع صالح.',
    invalidMessage: 'فشل التحقق من توقيع الرمز، التوقيع غير صالح.'
  },

  errors: {
    noToken: 'الرجاء إدخال الرمز المطلوب التحقق منه',
    invalidToken: 'تنسيق الرمز غير صالح',
    noSecretKey: 'الرجاء تقديم مفتاح التحقق',
    noPublicKey: 'الرجاء تقديم المفتاح العام للتحقق',
    invalidSignature: 'توقيع غير صالح',
    verificationFailed: 'فشل التحقق من الرمز'
  }
};