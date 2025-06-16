export default {
  name: 'CSS फॉर्मेटर',
  description: 'बेहतर पठनीयता के लिए CSS कोड को फॉर्मेट और सुंदर बनाएं',
  options: {
    indentSize: 'इंडेंट आकार',
    indentWithTabs: 'टैब्स के साथ इंडेंट करें',
    convertQuotes: 'उद्धरण चिह्नों को परिवर्तित करें',
    sortSelectors: 'सिलेक्टर्स को क्रमबद्ध करें',
    sortProperties: 'प्रॉपर्टीज को क्रमबद्ध करें',
    compressColors: 'रंगों को संकुचित करें',
    expandShorthand: 'शॉर्टहैंड प्रॉपर्टीज का विस्तार करें'
  },
  actions: {
    format: 'CSS फॉर्मेट करें',
    minify: 'मिनिफाई करें',
    clear: 'साफ़ करें',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें',
    upload: 'फ़ाइल अपलोड करें'
  },
  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    formatSuccess: 'CSS सफलतापूर्वक फॉर्मेट किया गया',
    formatError: 'CSS फॉर्मेटिंग में त्रुटि',
    invalidCss: 'अमान्य CSS सिंटैक्स'
  }
}