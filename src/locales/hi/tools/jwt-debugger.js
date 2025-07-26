export default {
  name: 'JWT डीबगर',
  description: 'ऑनलाइन JWT टोकन पार्स, सत्यापित और डीबग करें',

  sections: {
    encoded: 'एन्कोडेड JWT',
    decoded: 'डीकोडेड JWT',
    header: 'हेडर',
    payload: 'पेलोड',
    signature: 'हस्ताक्षर',
    verification: 'सत्यापन'
  },

  actions: {
    decode: 'डीकोड करें',
    verify: 'हस्ताक्षर सत्यापित करें',
    copy: 'कॉपी करें',
    share: 'टोकन साझा करें',
    generateToken: 'टोकन उत्पन्न करें',
    generateRandomToken: 'यादृच्छिक टोकन',
    clear: 'साफ़ करें',
    generateRandomPayload: 'यादृच्छिक पेलोड उत्पन्न करें',
    generateRandomKey: 'यादृच्छिक कुंजी उत्पन्न करें',
    generateKeyPair: 'कुंजी जोड़ी उत्पन्न करें'
  },

  messages: {
    invalidToken: 'अमान्य JWT प्रारूप',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें',
    verificationSuccess: 'हस्ताक्षर सफलतापूर्वक सत्यापित किया गया',
    verificationFailed: 'हस्ताक्षर सत्यापन विफल रहा',
    keyGenerated: 'कुंजी जोड़ी सफलतापूर्वक उत्पन्न हुई',
    keyGenerationFailed: 'कुंजी जोड़ी उत्पन्न करने में विफल रहा',
    tokenGenerated: 'टोकन सफलतापूर्वक उत्पन्न हुआ',
    tokenGenerationFailed: 'टोकन उत्पन्न करने में विफल रहा',
    randomTokenGenerated: 'यादृच्छिक टोकन उत्पन्न और सफलतापूर्वक पार्स किया गया',
    certUploadSuccess: 'प्रमाणपत्र सफलतापूर्वक अपलोड किया गया',
    certFormatInvalid: 'अमान्य प्रमाणपत्र प्रारूप',
    certReadFailed: 'प्रमाणपत्र पढ़ने में विफल रहा',
    tokenFormatError: 'अमान्य टोकन प्रारूप, JWT में डॉट्स द्वारा अलग किए गए तीन भाग होने चाहिए',
    tokenHeaderMissingAlg: 'टोकन हेडर में एल्गोरिथम (alg) फ़ील्ड गायब है',
    tokenHeaderInvalid: 'अमान्य टोकन हेडर प्रारूप',
    tokenVerificationFailed: 'टोकन प्रारूप सत्यापन विफल रहा',
    tokenExpired: 'टोकन समाप्त हो गया है। समाप्ति समय: {time}',
    tokenNotEffective: 'टोकन अभी तक मान्य नहीं है। मान्य से: {time}',
    tokenIssuedInFuture: 'टोकन जारी करने का समय भविष्य में है। जारी करने का समय: {time}',
    algorithmNotSupported: 'एल्गोरिथम समर्थित नहीं है',
    randomSecretGenerated: 'यादृच्छिक गुप्त कुंजी सफलतापूर्वक उत्पन्न हुई',
    randomSecretGenerationFailed: 'यादृच्छिक गुप्त कुंजी उत्पन्न करने में विफल रहा',
    randomPayloadGenerated: 'यादृच्छिक पेलोड उत्पन्न हुआ',
    randomPayloadGenerationFailed: 'यादृच्छिक पेलोड उत्पन्न करने में विफल रहा',
    contentCleared: 'सभी सामग्री साफ़ कर दी गई',
    tokenDecodeSuccess: 'टोकन सफलतापूर्वक डीकोड किया गया',
    tokenDecodeFailed: 'टोकन डीकोड करने में विफल रहा',
    pleaseInputKey: 'कृपया एक कुंजी दर्ज करें',
    pleaseGenerateKeyPair: 'कृपया पहले {type} कुंजी जोड़ी उत्पन्न करें',
    pleaseInputVerificationKey: 'कृपया सत्यापन कुंजी दर्ज करें',
    pleaseInputPublicKey: 'कृपया सत्यापन सार्वजनिक कुंजी दर्ज करें',
    pleaseInputToken: 'कृपया सत्यापित करने के लिए टोकन दर्ज करें',
    payloadFormatError: 'पेलोड प्रारूप त्रुटि, कृपया JSON प्रारूप जांचें',
    invalidTimestamp: 'अमान्य टाइमस्टैम्प'
  },

  placeholders: {
    secretKey: 'गुप्त कुंजी दर्ज करें',
    privateKey: 'निजी कुंजी दर्ज करें या उत्पन्न करें',
    publicKey: 'सार्वजनिक कुंजी दर्ज करें या उत्पन्न करें',
    payload: 'JSON स्वरूपित पेलोड दर्ज करें',
    token: 'JWT टोकन दर्ज करें या उत्पन्न करें',
    verificationSecretKey: 'सत्यापन कुंजी दर्ज करें',
    verificationPublicKey: 'सत्यापन सार्वजनिक कुंजी दर्ज करें'
  },

  labels: {
    algorithm: 'एल्गोरिथम',
    secretKey: 'गुप्त कुंजी',
    privateKey: 'निजी कुंजी',
    publicKey: 'सार्वजनिक कुंजी',
    certificate: 'प्रमाणपत्र (वैकल्पिक)',
    payload: 'पेलोड',
    token: 'टोकन',
    verificationPublicKey: 'सत्यापन सार्वजनिक कुंजी',
    tokenResult: 'टोकन डीकोड परिणाम',
    verifyToken: 'टोकन सत्यापित करें',
    tokenDecoded: 'टोकन {alg} एल्गोरिथम हस्ताक्षर का उपयोग करता है',
    timestamp: 'टाइमस्टैम्प व्याख्या',
    issuedAt: 'जारी किया गया (iat)',
    expiration: 'समाप्ति समय (exp)',
    notBefore: 'पहले मान्य नहीं (nbf)',
    tokenFormat: 'कोई सामग्री नहीं',
    tokenFormatDesc: 'JWT टोकन दर्ज करने या उत्पन्न करने के बाद डीकोड परिणाम यहां प्रदर्शित किया जाएगा',
    uploadCert: 'प्रमाणपत्र फ़ाइल खींचें और छोड़ें या चुनने के लिए क्लिक करें',
    certName: 'प्रमाणपत्र का नाम',
    sm3Fingerprint: 'SM3 फिंगरप्रिंट (x5t#sm3)',
    certUploadNote: 'प्रमाणपत्र अपलोड करने के बाद, JWT हेडर में "x5t#sm3" फ़ील्ड जोड़ा जाएगा',
    secondsTimestamp: 'सेकंड टाइमस्टैम्प',
    millisecondsTimestamp: 'मिलीसेकंड टाइमस्टैम्प'
  },

  buttons: {
    cancel: 'रद्द करें',
    verify: 'सत्यापित करें',
    clearCert: 'साफ़ करें',
    generateToken: 'टोकन उत्पन्न करें',
    decodeToken: 'टोकन डीकोड करें',
    verifyToken: 'टोकन सत्यापित करें',
    close: 'बंद करें'
  },

  verification: {
    success: 'सत्यापन सफल',
    failure: 'सत्यापन विफल',
    validMessage: 'टोकन हस्ताक्षर मान्य है।',
    invalidMessage: 'टोकन हस्ताक्षर सत्यापन विफल रहा।'
  },

  errors: {
    noToken: 'कृपया सत्यापित करने के लिए एक टोकन दर्ज करें',
    invalidToken: 'अमान्य टोकन प्रारूप',
    noSecretKey: 'कृपया एक गुप्त कुंजी प्रदान करें',
    noPublicKey: 'कृपया एक सत्यापन सार्वजनिक कुंजी प्रदान करें',
    invalidSignature: 'अमान्य हस्ताक्षर',
    verificationFailed: 'टोकन सत्यापन विफल रहा'
  }
};