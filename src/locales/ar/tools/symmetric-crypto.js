export default {
  name: "خوارزميات التشفير المتماثل",
  description: "تطبيق التشفير الآمن وفك التشفير للنصوص والملفات، يدعم خوارزميات تشفير متماثل متعددة بما في ذلك AES وDES وSM4 الصيني",

  encryption: {
    title: "تشفير/فك تشفير",
    plaintext: "النص الأصلي",
    plaintextPlaceholder: "أدخل النص المراد تشفيره",
    ciphertext: "النص المشفر",
    ciphertextPlaceholder: "سيتم عرض البيانات المشفرة هنا",
    encrypt: "تشفير",
    decrypt: "فك التشفير",
    decrypted: "النص المفكوك",
    decryptedPlaceholder: "سيتم عرض البيانات المفكوكة هنا",
    encryptSuccess: "تم التشفير بنجاح",
    decryptSuccess: "تم فك التشفير بنجاح",
    encryptError: "فشل التشفير: {error}",
    decryptError: "فشل فك التشفير: {error}"
  },

  algorithm: {
    title: "اختيار الخوارزمية",
    aes: "AES",
    des: "DES",
    tripledes: "3DES (DES ثلاثي)",
    sm4: "SM4 (معيار صيني)",
    "3des": "3DES (DES ثلاثي)"
  },

  mode: {
    title: "وضع التشغيل",
    ecb: "ECB - وضع دفتر الشفرات الإلكتروني",
    cbc: "CBC - وضع ربط كتلة الشفرات",
    cfb: "CFB - وضع التغذية المرتدة للنص المشفر",
    ofb: "OFB - وضع التغذية المرتدة للإخراج",
    ctr: "CTR - وضع العداد"
  },

  padding: {
    title: "طريقة الحشو",
    pkcs7: "PKCS7",
    zeroPadding: "حشو صفري",
    zeropadding: "حشو صفري"
  },

  operation: {
    title: "نوع العملية",
    encrypt: "تشفير",
    decrypt: "فك التشفير"
  },

  key: {
    title: "المفتاح",
    label: "المفتاح",
    placeholder: "أدخل مفتاح {keySize}",
    placeholderString: "أدخل مفتاح سلسلة {keySize} (سيتم الحشو تلقائيًا إذا كان ناقصًا)",
    placeholderHex: "أدخل مفتاح ست عشري {keySize} (سيتم الحشو تلقائيًا إذا كان ناقصًا)",
    placeholderBase64: "أدخل مفتاح Base64 {keySize} (سيتم الحشو تلقائيًا إذا كان ناقصًا)",
    generateRandom: "إنشاء عشوائي",
    sizeHint: "{keySize}",
    autoFillHint: "سيتم حشو المفتاح تلقائيًا بالأصفار إذا كان طوله غير كافٍ، وسيتم اقتطاع الأجزاء الزائدة"
  },

  iv: {
    title: "متجه التهيئة (IV)",
    label: "متجه التهيئة (IV)",
    placeholder: "أدخل متجه تهيئة {blockSize}",
    placeholderString: "أدخل IV سلسلة {blockSize} (سيتم الحشو تلقائيًا إذا كان ناقصًا)",
    placeholderHex: "أدخل IV ست عشري {blockSize} (سيتم الحشو تلقائيًا إذا كان ناقصًا)",
    placeholderBase64: "أدخل IV Base64 {blockSize} (سيتم الحشو تلقائيًا إذا كان ناقصًا)",
    generateRandom: "إنشاء عشوائي",
    sizeHint: "{blockSize}",
    autoFillHint: "سيتم حشو IV تلقائيًا بالأصفار إذا كان طوله غير كافٍ، وسيتم اقتطاع الأجزاء الزائدة"
  },

  input: {
    title: "المحتوى المراد تشفيره",
    titleDecrypt: "المحتوى المراد فك تشفيره",
    clear: "مسح",
    placeholder: "أدخل النص المراد تشفيره",
    placeholderDecrypt: "أدخل النص المشفر بتنسيق {format} لفك تشفيره"
  },

  inputFormat: {
    title: "تنسيق الإدخال",
    string: "سلسلة",
    hex: "HEX",
    base64: "Base64"
  },

  output: {
    title: "نتيجة التشفير",
    titleDecrypt: "نتيجة فك التشفير",
    copyResult: "نسخ النتيجة",
    copied: "تم النسخ"
  },

  outputFormat: {
    title: "تنسيق الإخراج",
    string: "سلسلة",
    hex: "HEX",
    base64: "Base64"
  },

  error: {
    title: "خطأ",
    invalidHex: "يجب أن يكون المفتاح بتنسيق HEX",
    invalidIvHex: "يجب أن يكون IV بتنسيق HEX",
    invalidHexInput: "إدخال بتنسيق HEX غير صالح",
    invalidBase64: "إدخال بتنسيق Base64 غير صالح",
    unsupportedAlgorithm: "خوارزمية غير مدعومة",
    decryptionFailed: "فشل فك التشفير: {message}",
    copyFailed: "فشل النسخ، يرجى النسخ يدويًا",
    unknownError: "حدث خطأ أثناء المعالجة",
    invalidHexFormat: "تنسيق HEX غير صالح",
    invalidBase64Format: "تنسيق Base64 غير صالح",
    emptyBase64: "ترميز Base64 غير صالح",
    decryptFailed: "فشل فك التشفير:"
  },

  info: {
    title: "شرح الخوارزمية",
    algorithms: {
      aes: "AES: معيار التشفير المتقدم، يمكن استخدام مفاتيح بطول 128 أو 192 أو 256 بت",
      des: "DES: معيار تشفير البيانات، يستخدم مفتاح 56 بت، أمان منخفض",
      tripledes: "3DES: DES ثلاثي، يستخدم ثلاثة مفاتيح DES بطول 56 بت، يوفر أمانًا أعلى",
      sm4: "SM4: معيار صيني، خوارزمية تشفير كتلي، يستخدم مفتاح 128 بت",
      "3des": "3DES: DES ثلاثي، يستخدم ثلاثة مفاتيح DES بطول 56 بت، يوفر أمانًا أعلى"
    },
    modes: {
      title: "شرح أوضاع التشغيل",
      ecb: "ECB: وضع دفتر الشفرات الإلكتروني، كل كتلة مشفرة بشكل مستقل، غير موصى به للبيانات الحساسة",
      cbc: "CBC: وضع ربط كتلة الشفرات، كل كتلة تعتمد على الكتلة السابقة، أكثر أمانًا",
      cfb: "CFB: وضع التغذية المرتدة للنص المشفر، يحول شفرة الكتلة إلى شفرة تدفق",
      ofb: "OFB: وضع التغذية المرتدة للإخراج، أيضًا وضع شفرة تدفق، يستخدم نفس العملية للتشفير وفك التشفير",
      ctr: "CTR: وضع العداد، كل كتلة تستخدم عدادًا متزايدًا للتشفير، يمكن معالجته بالتوازي"
    }
  },

  buttons: {
    process: "تشفير",
    processDecrypt: "فك التشفير"
  },

  file: {
    title: "تشفير الملفات",
    select: "اختر ملفًا",
    drop: "أو اسحب الملف وأسقطه هنا",
    encrypt: "تشفير الملف",
    decrypt: "فك تشفير الملف",
    download: "تنزيل النتيجة",
    selected: "تم الاختيار: {name}",
    size: "الحجم: {size}",
    maxSize: "الحجم الأقصى: 100MB",
    encryptingFile: "جارٍ تشفير الملف...",
    decryptingFile: "جارٍ فك تشفير الملف...",
    downloadReady: "جاهز للتنزيل",
    fileTooBig: "الملف كبير جدًا. الحد الأقصى المسموح به هو 100MB."
  },

  options: {
    title: "خيارات",
    autoDecrypt: "فك التشفير تلقائيًا بعد التشفير",
    includeMeta: "تضمين بيانات وصفية للخوارزمية في الإخراج",
    kdf: "دالة اشتقاق المفتاح",
    pbkdf2: "PBKDF2",
    scrypt: "scrypt",
    argon2: "Argon2id",
    salt: "ملح (لاشتقاق المفتاح)",
    saltPlaceholder: "أدخل الملح بتنسيق HEX أو اتركه فارغًا لإنشاء عشوائي",
    autoClear: "مسح البيانات الحساسة تلقائيًا",
    saveSettings: "حفظ الإعدادات"
  },

  security: {
    title: "معلومات الأمان",
    description: "حول أمان التشفير",
    warning: "تحذير",
    ecbInsecure: "وضع ECB غير موصى به للتطبيقات الأمنية لأنه لا يخفي أنماط البيانات بشكل جيد.",
    useModern: "للبيانات الحساسة، استخدم AES-256 مع وضع GCM أو CBC.",
    keyWarning: "احمي مفتاح التشفير الخاص بك. إذا فقدته، لن تتمكن من استعادة البيانات.",
    browserWarning: "تشفير المستعرض مريح ولكن قد لا يكون مناسبًا للبيانات شديدة الحساسية.",
    learnMore: "تعلم المزيد عن التشفير"
  },

  messages: {
    noAlgorithm: "الرجاء اختيار خوارزمية التشفير",
    noKey: "الرجاء إدخال مفتاح التشفير أو كلمة المرور",
    invalidKeyLength: "طول المفتاح غير صالح للخوارزمية المختارة",
    invalidIv: "طول IV غير صالح للخوارزمية والوضع المختارين",
    noData: "الرجاء إدخال البيانات المراد تشفيرها/فك تشفيرها",
    padError: "خطأ في الحشو - قد يكون المفتاح أو البيانات غير صحيحين",
    fileSuccess: "تمت معالجة الملف بنجاح",
    fileError: "خطأ في معالجة الملف: {error}",
    clipboardError: "خطأ في النسخ إلى الحافظة: {error}",
    invalidFormat: "تنسيق إدخال غير صالح"
  }
};
