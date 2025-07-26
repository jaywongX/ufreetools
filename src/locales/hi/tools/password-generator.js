export default {
  name: 'पासवर्ड जेनरेटर',
  description: 'अनुकूलन योग्य विकल्पों के साथ सुरक्षित, यादृच्छिक पासवर्ड उत्पन्न करें',

  options: {
    length: 'पासवर्ड की लंबाई',
    quantity: 'पासवर्ड की संख्या',
    includeLowercase: 'छोटे अक्षर (a-z)',
    includeUppercase: 'बड़े अक्षर (A-Z)',
    includeNumbers: 'संख्याएँ (0-9)',
    includeSymbols: 'प्रतीक (!@#$%)',
    excludeSimilar: 'समान वर्णों को बाहर निकालें (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'अस्पष्ट प्रतीकों को बाहर निकालें ({}<>[]()\'"`\\)',
    requireAll: 'सभी वर्ण प्रकारों की आवश्यकता है',
    noConsecutive: 'कोई लगातार समान वर्ण नहीं',
    advancedOptions: 'उन्नत विकल्प',
    characterTypes: 'वर्ण प्रकार'
  },

  presets: {
    standard: 'मानक',
    strong: 'मजबूत',
    memorable: 'याद रखने योग्य',
    pin: 'पिन',
    pronounceable: 'उच्चारण योग्य',
    custom: 'कस्टम',
    easyToRemember: 'याद रखने में आसान',
    balanced: 'संतुलित',
    secure: 'सुरक्षित'
  },

  strength: {
    title: 'पासवर्ड की ताकत',
    veryWeak: 'बहुत कमजोर',
    weak: 'कमजोर',
    medium: 'मध्यम',
    strong: 'मजबूत',
    veryStrong: 'बहुत मजबूत',
    unknown: 'अज्ञात'
  },

  actions: {
    generate: 'पासवर्ड उत्पन्न करें',
    regenerate: 'पुनः उत्पन्न करें',
    copy: 'कॉपी करें',
    copyAll: 'सभी कॉपी करें',
    clear: 'साफ़ करें',
    expand: 'विस्तार करें',
    collapse: 'संक्षिप्त करें'
  },

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    allCopied: 'सभी पासवर्ड क्लिपबोर्ड पर कॉपी किए गए!',
    generated: 'पासवर्ड सफलतापूर्वक उत्पन्न हुए',
    invalidOptions: 'कृपया कम से कम एक वर्ण प्रकार चुनें',
    tooManyPasswords: 'पासवर्ड की अधिकतम संख्या 100 है',
    clickToGenerate: 'पासवर्ड उत्पन्न करने के लिए ऊपर दिए गए बटन पर क्लिक करें'
  },

  errors: {
    copyFailed: 'पासवर्ड कॉपी करने में विफल: ',
    copyFailedManual: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें'
  },

  results: {
    title: 'उत्पन्न पासवर्ड'
  },

  units: {
    passwords: 'पासवर्ड'
  },

  tips: {
    title: 'पासवर्ड सुरक्षा युक्तियाँ',
    useLength: 'बेहतर सुरक्षा के लिए कम से कम 12 वर्णों वाले पासवर्ड का उपयोग करें',
    useDifferent: 'प्रत्येक वेबसाइट या सेवा के लिए एक अलग पासवर्ड का उपयोग करें',
    changeRegularly: 'महत्वपूर्ण खातों के लिए नियमित रूप से पासवर्ड बदलें',
    useManager: 'जटिल पासवर्ड को सुरक्षित रूप से संग्रहीत करने के लिए पासवर्ड मैनेजर का उपयोग करने पर विचार करें',
    use2FA: 'अतिरिक्त सुरक्षा के लिए दो-कारक प्रमाणीकरण सक्षम करें'
  }
};