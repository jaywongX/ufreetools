export default {
  name: 'URL एनकोड डिकोड',
  description: 'URL एनकोडिंग विशेष वर्णों को एक ऐसे प्रारूप में परिवर्तित करती है जो URL के लिए स्वीकार्य है, आमतौर पर URL पैरामीटर और फॉर्म सबमिशन के लिए उपयोग किया जाता है।',

  options: {
    operationType: 'ऑपरेशन प्रकार',
    encodeMode: 'एनकोडिंग मोड'
  },

  encodeOptions: {
    standard: 'मानक एनकोडिंग (encodeURI)',
    component: 'कंपोनेंट एनकोडिंग (encodeURIComponent)',
    full: 'पूर्ण एनकोडिंग (सभी वर्ण)',
    standardDescription: 'URL संरचना वर्णों को संरक्षित करते हुए पूरे URL को एनकोड करता है',
    componentDescription: 'URL पैरामीटर के लिए उपयुक्त, सभी विशेष वर्णों को एनकोड करता है',
    fullDescription: 'सभी गैर-अल्फ़ान्यूमेरिक वर्णों को एनकोड करता है, स्पेस सहित (+ नहीं बल्कि %20 के रूप में)'
  },

  actions: {
    encode: 'URL एनकोड',
    decode: 'URL डिकोड',
    clear: 'साफ़ करें',
    copyResult: 'परिणाम कॉपी करें'
  },

  input: {
    textToEncode: 'एनकोड करने के लिए टेक्स्ट',
    textToDecode: 'डिकोड करने के लिए टेक्स्ट',
    encodePlaceholder: 'एनकोड करने के लिए URL या टेक्स्ट दर्ज करें...',
    decodePlaceholder: 'डिकोड करने के लिए URL या टेक्स्ट दर्ज करें...'
  },

  output: {
    encodeResult: 'एनकोड परिणाम',
    decodeResult: 'डिकोड परिणाम'
  },

  messages: {
    copied: '(कॉपी किया गया!)',
    error: 'त्रुटि: {message}',
    decodeError: 'डिकोड करने में असमर्थ: "{text}"',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें'
  },

  referenceTable: {
    title: 'सामान्य URL वर्ण एनकोडिंग संदर्भ',
    showTable: 'तालिका दिखाएं',
    hideTable: 'तालिका छिपाएं',
    character: 'वर्ण',
    encoded: 'URL एनकोडेड',
    description: 'विवरण',
    descriptions: {
      space: 'स्पेस',
      exclamation: 'विस्मयादिबोधक चिह्न',
      doubleQuote: 'डबल कोट',
      hash: 'हैश',
      dollar: 'डॉलर चिह्न',
      percent: 'प्रतिशत चिह्न',
      ampersand: 'एम्परसैंड',
      singleQuote: 'सिंगल कोट',
      leftParenthesis: 'बायां कोष्ठक',
      rightParenthesis: 'दायां कोष्ठक',
      asterisk: 'तारांकन',
      plus: 'प्लस चिह्न',
      comma: 'अल्पविराम',
      slash: 'फॉरवर्ड स्लैश',
      colon: 'कोलन',
      semicolon: 'सेमीकोलन',
      lessThan: 'से कम',
      equals: 'बराबर चिह्न',
      greaterThan: 'से अधिक',
      questionMark: 'प्रश्नवाचक चिह्न',
      at: 'एट साइन',
      leftBracket: 'बायां ब्रैकेट',
      backslash: 'बैकस्लैश',
      rightBracket: 'दायां ब्रैकेट',
      caret: 'कैरेट',
      backtick: 'बैकटिक',
      leftBrace: 'बायां ब्रेस',
      pipe: 'पाइप',
      rightBrace: 'दायां ब्रेस',
      tilde: 'टिल्ड',
      chinese: 'UTF-8 एनकोडेड चीनी'
    }
  }
};