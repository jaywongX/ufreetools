export default {
  name: 'क्यूआर कोड जेनरेटर',
  description: 'यूआरएल, टेक्स्ट और बहुत कुछ के लिए अनुकूलन योग्य क्यूआर कोड उत्पन्न करें',

  options: {
    content: 'क्यूआर कोड सामग्री',
    contentType: 'सामग्री प्रकार',
    errorCorrectionLevel: 'त्रुटि सुधार स्तर',
    size: 'आकार',
    margin: 'हाशिया',
    foregroundColor: 'अग्रभूमि रंग',
    backgroundColor: 'पृष्ठभूमि रंग',
    logo: 'लोगो जोड़ें',
    logoSize: 'लोगो आकार',
    cornerRadius: 'कोने की त्रिज्या'
  },

  contentTypes: {
    url: 'यूआरएल',
    text: 'सादा पाठ',
    email: 'ईमेल',
    phone: 'फ़ोन नंबर',
    sms: 'एसएमएस',
    wifi: 'वाईफाई नेटवर्क',
    vcard: 'वीकार्ड',
    mecard: 'मीकार्ड'
  },

  errorLevels: {
    L: 'कम (7%)',
    M: 'मध्यम (15%)',
    Q: 'चौथाई (25%)',
    H: 'उच्च (30%)'
  },

  actions: {
    generate: 'क्यूआर कोड उत्पन्न करें',
    download: 'डाउनलोड करें',
    downloadSVG: 'एसवीजी डाउनलोड करें',
    downloadPNG: 'पीएनजी डाउनलोड करें',
    copy: 'छवि कॉपी करें',
    clear: 'साफ़ करें',
    uploadLogo: 'लोगो अपलोड करें'
  },

  templates: {
    title: 'त्वरित टेम्पलेट',
    confirmReplace: 'क्या आप वाकई वर्तमान सामग्री को बदलना चाहते हैं?',
    confirm: 'पुष्टि करें',
    cancel: 'रद्द करें',
    url: {
      name: 'वेबसाइट यूआरएल'
    },
    email: {
      name: 'ईमेल पता'
    },
    phone: {
      name: 'फ़ोन नंबर'
    },
    sms: {
      name: 'एसएमएस'
    },
    wifi: {
      name: 'वाई-फाई कॉन्फ़िगरेशन',
      example: {
        ssid: 'नेटवर्क-नाम',
        password: 'पासवर्ड'
      }
    },
    geo: {
      name: 'जियोलोकेशन'
    }
  },

  appearance: {
    title: 'उपस्थिति सेटिंग्स'
  },

  preview: {
    title: 'पूर्वावलोकन',
    generating: 'उत्पन्न हो रहा है...',
    clickGenerateButton: '"क्यूआर कोड उत्पन्न करें" बटन पर क्लिक करें',
    clickToDownload: 'क्यूआर कोड डाउनलोड करने के लिए क्लिक करें'
  },

  tips: {
    title: 'टिप्स',
    saveToPrint: 'उत्पन्न क्यूआर कोड को प्रिंटिंग या साझा करने के लिए एक छवि के रूप में सहेजा जा सकता है।',
    errorCorrection: 'त्रुटि सुधार स्तर पठनीयता को इंगित करता है जब क्यूआर कोड आंशिक रूप से ढका या क्षतिग्रस्त हो जाता है। स्तर L में सबसे कम सहनशीलता होती है, जबकि स्तर H में सबसे अधिक होती है लेकिन यह क्यूआर कोड को अधिक जटिल बनाता है।'
  },

  wifi: {
    ssid: 'नेटवर्क नाम (SSID)',
    password: 'पासवर्ड',
    encryption: 'एन्क्रिप्शन',
    hidden: 'छिपा हुआ नेटवर्क'
  },

  placeholders: {
    content: 'टेक्स्ट, लिंक या अन्य सामग्री दर्ज करें...'
  },

  characters: 'अक्षर',
  maxChars: '300 अक्षरों से अधिक न होने की अनुशंसा की जाती है',

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    generated: 'क्यूआर कोड सफलतापूर्वक उत्पन्न हुआ',
    contentRequired: 'कृपया क्यूआर कोड के लिए सामग्री दर्ज करें',
    downloaded: 'क्यूआर कोड डाउनलोड किया गया',
    confirmReplace: 'वर्तमान सामग्री को बदलने के लिए पुष्टि करें पर क्लिक करें',
    contentUpdated: 'सामग्री अपडेट की गई',
    changesCancelled: 'परिवर्तन रद्द किए गए',
    invalidUrl: 'कृपया एक मान्य यूआरएल दर्ज करें',
    invalidEmail: 'कृपया एक मान्य ईमेल पता दर्ज करें',
    invalidPhone: 'कृपया एक मान्य फ़ोन नंबर दर्ज करें',
    logoTooBig: 'लोगो बहुत बड़ा है, अधिकतम फ़ाइल आकार 1MB है'
  },

  errors: {
    canvasNotReady: 'कैनवास तत्व तैयार नहीं है',
    generationError: 'क्यूआर कोड उत्पन्न करने में त्रुटि',
    generationErrorWithMessage: 'क्यूआर कोड उत्पन्न करने में त्रुटि: {message}',
    downloadError: 'क्यूआर कोड डाउनलोड करने में त्रुटि: {message}'
  }
};