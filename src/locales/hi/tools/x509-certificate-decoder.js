export default {
  name: 'X.509 सर्टिफिकेट डिकोडर',
  description: 'मुफ्त ऑनलाइन X.509 सर्टिफिकेट डिकोडर टूल। SSL/TLS सर्टिफिकेट्स को पार्स और विश्लेषण करें, सर्टिफिकेट विवरण देखें, वैधता जांचें, पब्लिक कीज निकालें, और रिपोर्ट निर्यात करें।',

  instructions: {
    title: 'सर्टिफिकेट डिकोडर',
    description: 'सर्टिफिकेट फाइल अपलोड करें या PEM-एनकोडेड सर्टिफिकेट पेस्ट करें ताकि उसके विवरण देख सकें।'
  },

  dropzone: {
    title: 'अपना सर्टिफिकेट यहां खींचें और छोड़ें',
    formats: '.crt, .cer, .pem, और .der फाइलों का समर्थन करता है'
  },

  buttons: {
    browse: 'फाइलें ब्राउज़ करें',
    decode: 'सर्टिफिकेट डिकोड करें',
    loadSample: 'सैंपल लोड करें',
    downloadPdf: 'PDF रिपोर्ट डाउनलोड करें',
    downloadTxt: 'टेक्स्ट रिपोर्ट डाउनलोड करें',
    downloadHtml: 'HTML रिपोर्ट डाउनलोड करें',
    downloadJson: 'JSON रिपोर्ट डाउनलोड करें',
    copyBasic: 'बेसिक जानकारी कॉपी करें',
    copySubject: 'सब्जेक्ट/इशुअर कॉपी करें',
    copyAll: 'सभी जानकारी कॉपी करें',
    copyValue: 'वैल्यू कॉपी करें',
    downloadKey: 'की डाउनलोड करें',
    exportPem: 'PEM एक्सपोर्ट करें',
    downloadCert: 'सर्टिफिकेट डाउनलोड करें',
  },

  input: {
    paste: 'या सर्टिफिकेट डेटा पेस्ट करें:',
    placeholder: 'अपना PEM-एनकोडेड सर्टिफिकेट पेस्ट करें (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'सर्टिफिकेट डिकोड कर रहा है...',

  error: {
    title: 'सर्टिफिकेट डिकोड करने में त्रुटि',
    invalidFormat: 'अमान्य सर्टिफिकेट फॉर्मेट',
    invalidBase64: 'मान्य base64-एनकोडेड सर्टिफिकेट नहीं है',
    invalidStructure: 'अमान्य सर्टिफिकेट डेटा संरचना',
    invalidDer: 'अमान्य DER फॉर्मेट सर्टिफिकेट',
    invalidAsn1: 'अमान्य सर्टिफिकेट: ASN.1 डेटा पार्स नहीं कर सकता',
    unsupportedType: 'सर्टिफिकेट के लिए असमर्थित डेटा प्रकार',
    failedParse: 'सर्टिफिकेट डेटा पार्स करने में विफल',
    invalidP12: 'अमान्य PKCS#12 फाइल फॉर्मेट',
    invalidP12Password: 'अमान्य PKCS#12 पासवर्ड',
    noCertificatesInP12: 'PKCS#12 फाइल में कोई सर्टिफिकेट नहीं मिला',
    unableToProcessP12: 'PKCS#12 फाइल प्रोसेस करने में असमर्थ'
  },

  guide: {
    title: 'इस टूल का उपयोग कैसे करें',
    step1: 'अपनी X.509 सर्टिफिकेट फाइल (.crt, .cer, .pem, या .der) अपलोड करें या नीचे दिए गए टेक्स्ट एरिया में सर्टिफिकेट डेटा पेस्ट करें।',
    step2: 'यह टूल स्वचालित रूप से फॉर्मेट (PEM या DER) का पता लगाता है और इसे डिकोड करता है।',
    step3: 'सब्जेक्ट, इशुअर, वैधता, एक्सटेंशन और पब्लिक की डेटा सहित विस्तृत सर्टिफिकेट जानकारी देखें।',
    step4: 'आप नीचे दिए गए बटनों का उपयोग करके PDF या TXT फॉर्मेट में सर्टिफिकेट विवरण की रिपोर्ट डाउनलोड कर सकते हैं।'
  },

  tabs: {
    basic: 'बेसिक जानकारी',
    subject: 'सब्जेक्ट और इशुअर',
    extensions: 'एक्सटेंशन',
    publicKey: 'पब्लिक की',
    fingerprints: 'फिंगरप्रिंट्स',
    raw: 'रॉ सर्टिफिकेट'
  },

  results: {
    title: 'सर्टिफिकेट विवरण',
    serialNumber: 'सीरियल नंबर',
    version: 'वर्जन',
    sigAlg: 'सिग्नेचर एल्गोरिथम',
    validFrom: 'वैधता प्रारंभ',
    validTo: 'वैधता समाप्ति',
    subject: 'सब्जेक्ट',
    issuer: 'इशुअर',
    extensions: 'एक्सटेंशन',
    publicKey: 'पब्लिक की',
    algorithm: 'एल्गोरिथम',
    keySize: 'की साइज',
    keyValue: 'की वैल्यू',
    fingerprints: 'फिंगरप्रिंट्स',
    rawCertificate: 'रॉ सर्टिफिकेट',
    field: 'फील्ड',
    value: 'वैल्यू',
    critical: 'क्रिटिकल',
    noExtensions: 'इस सर्टिफिकेट में कोई एक्सटेंशन नहीं मिला।',
    validity: 'सर्टिफिकेट वैधता',
    expiresIn: '{days} दिनों में समाप्त होता है',
    visualization: 'सर्टिफिकेट विज़ुअलाइज़ेशन',
    daysRemaining: 'दिन शेष',
    valid: 'वैध',
    expired: 'समाप्त',
    expiringSoon: 'जल्द समाप्त होने वाला',
    fieldDescriptions: 'फील्ड विवरण',
    certificateUsage: 'सर्टिफिकेट उपयोग',
    certificateChain: 'सर्टिफिकेट चेन',
    signatureValue: 'सिग्नेचर वैल्यू',
    notAvailable: 'उपलब्ध नहीं',
    noSpecificUsage: 'कोई विशिष्ट उपयोग निर्दिष्ट नहीं',
    signatureError: 'सिग्नेचर वैल्यू पार्स करने में त्रुटि',
    keyDetails: 'की विवरण',
    enhancedView: 'एनहांस्ड व्यू',
    endEntity: 'एंड-एंटिटी',
    intermediate: 'इंटरमीडिएट',
    rootCA: 'रूट CA',
    endEntityCert: 'एंड-एंटिटी सर्टिफिकेट',
    intermediateCert: 'इंटरमीडिएट सर्टिफिकेट',
    rootCert: 'रूट सर्टिफिकेट अथॉरिटी',
    issuedBy: 'जारीकर्ता',
    unknownIssuer: 'अज्ञात जारीकर्ता',
    notYetValid: 'अभी तक वैध नहीं'
  },

  report: {
    title: 'X.509 सर्टिफिकेट रिपोर्ट',
    generatedOn: 'जनरेट किया गया'
  },

  extensions: {
    subjectKeyIdentifier: 'सब्जेक्ट की आइडेंटिफायर',
    keyUsage: 'की उपयोग',
    subjectAltName: 'सब्जेक्ट अल्टरनेटिव नेम',
    basicConstraints: 'बेसिक कंस्ट्रेंट्स',
    crlDistributionPoints: 'CRL डिस्ट्रीब्यूशन पॉइंट्स',
    certificatePolicies: 'सर्टिफिकेट पॉलिसीज',
    authorityKeyIdentifier: 'अथॉरिटी की आइडेंटिफायर',
    extKeyUsage: 'एक्सटेंडेड की उपयोग',
    authorityInfoAccess: 'अथॉरिटी इन्फॉर्मेशन एक्सेस',
    ctPrecertificateScts: 'CT प्रीसर्टिफिकेट SCTs'
  },

  usage: {
    serverAuth: 'सर्वर प्रमाणीकरण',
    clientAuth: 'क्लाइंट प्रमाणीकरण',
    codeSigning: 'कोड साइनिंग',
    emailProtection: 'ईमेल प्रोटेक्शन',
    timeStamping: 'टाइम स्टैम्पिंग',
    ocspSigning: 'OCSP साइनिंग'
  },

  customOID: {
    title: 'कस्टम OID लुकअप',
    placeholder: 'OID दर्ज करें, उदाहरण, 2.5.29.15',
    lookup: 'लुकअप',
    result: 'परिणाम',
    value: 'वैल्यू',
    notFound: 'इस OID के लिए कोई जानकारी नहीं मिली',
    foundButComplex: 'OID मिला लेकिन वैल्यू जटिल है',
    unknownName: 'अज्ञात OID नाम',
    complexValue: 'जटिल वैल्यू, सीधे प्रदर्शित नहीं कर सकते'
  },

  descriptions: {
    serialNumber: 'सर्टिफिकेट अथॉरिटी द्वारा असाइन किया गया सर्टिफिकेट के लिए एक अद्वितीय पहचानकर्ता',
    version: 'X.509 सर्टिफिकेट फॉर्मेट वर्जन, आमतौर पर V3',
    sigAlg: 'सर्टिफिकेट सिग्नेचर जनरेट करने के लिए उपयोग किया गया एल्गोरिथम',
    validFrom: 'वह तारीख और समय जब सर्टिफिकेट वैध हो जाता है',
    validTo: 'वह तारीख और समय जब सर्टिफिकेट समाप्त हो जाता है',
    subject: 'उस एंटिटी के बारे में जानकारी जिसे सर्टिफिकेट जारी किया गया है',
    issuer: 'उस सर्टिफिकेट अथॉरिटी के बारे में जानकारी जिसने सर्टिफिकेट जारी किया',
    publicKey: 'सर्टिफिकेट धारक की पब्लिक की जानकारी',
    extensions: 'सर्टिफिकेट उपयोग के बारे में जानकारी वाले अतिरिक्त फील्ड'
  },

  messages: {
    copiedToClipboard: 'क्लिपबोर्ड पर कॉपी किया गया',
    copyError: 'क्लिपबोर्ड पर कॉपी करने में विफल'
  },

  pkcs12: {
    passwordPrompt: 'कृपया PKCS#12 फाइल के लिए पासवर्ड दर्ज करें',
    noPassword: 'कोई पासवर्ड नहीं'
  },

  keyUsages: {
    digitalSignature: 'डिजिटल सिग्नेचर',
    nonRepudiation: 'नॉन रिप्यूडिएशन',
    keyEncipherment: 'की एनसिफरमेंट',
    dataEncipherment: 'डेटा एनसिफरमेंट',
    keyAgreement: 'की एग्रीमेंट',
    keyCertSign: 'की सर्टिफिकेट साइन',
    crlSign: 'CRL साइन',
    encipherOnly: 'एनसिफर ओनली',
    decipherOnly: 'डिसिफर ओनली'
  }
};