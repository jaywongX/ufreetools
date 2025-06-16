export default {
  name: 'जावास्क्रिप्ट ऑबफस्केटर',
  description: 'विभिन्न तकनीकों के साथ अपने जावास्क्रिप्ट कोड को ऑबफस्केट करके सुरक्षित करें',
  input: {
    title: 'इनपुट जावास्क्रिप्ट',
    placeholder: 'अपना जावास्क्रिप्ट कोड यहाँ दर्ज करें या पेस्ट करें',
    loadSample: 'नमूना लोड करें',
    clearInput: 'इनपुट साफ़ करें',
    uploadFile: 'जेएस फ़ाइल अपलोड करें'
  },
  output: {
    title: 'ऑबफस्केटेड कोड',
    copied: 'कोड क्लिपबोर्ड पर कॉपी किया गया',
    download: 'ऑबफस्केटेड कोड डाउनलोड करें',
    copyOutput: 'कोड कॉपी करें',
    clearOutput: 'आउटपुट साफ़ करें'
  },
  options: {
    title: 'ऑबफस्केशन विकल्प',
    compact: 'कॉम्पैक्ट कोड',
    selfDefending: 'आत्म-रक्षा',
    controlFlowFlattening: 'नियंत्रण प्रवाह समतलन',
    controlFlowFlatteningThreshold: 'नियंत्रण प्रवाह समतलन थ्रेशोल्ड',
    deadCodeInjection: 'डेड कोड इंजेक्शन',
    deadCodeInjectionThreshold: 'डेड कोड इंजेक्शन थ्रेशोल्ड',
    debugProtection: 'डीबग सुरक्षा',
    debugProtectionInterval: 'डीबग सुरक्षा अंतराल',
    disableConsoleOutput: 'कंसोल आउटपुट अक्षम करें',
    domainLock: 'डोमेन लॉक',
    domainLockRedirectUrl: 'डोमेन लॉक रीडायरेक्ट यूआरएल',
    identifierNamesGenerator: 'पहचानकर्ता नाम जनरेटर',
    identifiersPrefix: 'पहचानकर्ता उपसर्ग',
    renameGlobals: 'ग्लोबल्स का नाम बदलें',
    reservedNames: 'आरक्षित नाम',
    reservedStrings: 'आरक्षित स्ट्रिंग्स',
    rotateStringArray: 'स्ट्रिंग ऐरे घुमाएँ',
    seed: 'बीज',
    shuffleStringArray: 'स्ट्रिंग ऐरे शफ़ल करें',
    sourceMap: 'स्रोत मानचित्र',
    sourceMapBaseUrl: 'स्रोत मानचित्र आधार यूआरएल',
    sourceMapFileName: 'स्रोत मानचित्र फ़ाइल नाम',
    splitStrings: 'स्ट्रिंग्स विभाजित करें',
    splitStringsChunkLength: 'स्ट्रिंग्स विभाजित करें चंक लंबाई',
    stringArray: 'स्ट्रिंग ऐरे',
    stringArrayEncoding: 'स्ट्रिंग ऐरे एन्कोडिंग',
    stringArrayThreshold: 'स्ट्रिंग ऐरे थ्रेशोल्ड',
    target: 'लक्ष्य',
    transformObjectKeys: 'ऑब्जेक्ट कुंजियाँ रूपांतरित करें',
    unicodeEscapeSequence: 'यूनिकोड एस्केप अनुक्रम'
  },
  presets: {
    title: 'प्रीसेट',
    low: 'कम ऑबफस्केशन',
    medium: 'मध्यम ऑबफस्केशन',
    high: 'उच्च ऑबफस्केशन',
    custom: 'कस्टम'
  },
  actions: {
    obfuscate: 'ऑबफस्केट',
    reset: 'विकल्प रीसेट करें',
    savePreset: 'प्रीसेट सहेजें',
    loadPreset: 'प्रीसेट लोड करें'
  },
  messages: {
    obfuscationSuccess: 'कोड सफलतापूर्वक ऑबफस्केट किया गया',
    obfuscationFailed: 'ऑबफस्केशन विफल: {error}',
    emptyCode: 'कृपया ऑबफस्केट करने के लिए जावास्क्रिप्ट कोड दर्ज करें',
    uploadSuccess: 'फ़ाइल सफलतापूर्वक अपलोड की गई',
    presetSaved: 'प्रीसेट सहेजा गया',
    presetLoaded: 'प्रीसेट लोड किया गया'
  },
  help: {
    title: 'विकल्प सहायता',
    stringArrayDesc: 'स्ट्रिंग लिटरल को एक विशेष ऐरे में ले जाता है और उन्हें ऐरे कॉल से बदल देता है',
    controlFlowDesc: 'कोड नियंत्रण प्रवाह समतलन को सक्षम करता है, जिससे तर्क का पालन करना कठिन हो जाता है',
    deadCodeDesc: 'हमलावरों को भ्रमित करने के लिए यादृच्छिक डेड कोड इंजेक्ट करता है',
    selfDefendingDesc: 'आउटपुट को प्रारूप परिवर्तनों के प्रति लचीला बनाता है'
  }
}