export default {
  name: 'JSON फ़ॉर्मेटर',
  description: 'ऑनलाइन JSON फ़ॉर्मेटिंग और सत्यापन उपकरण, संपीड़न और सुंदरीकरण का समर्थन करता है',

  options: {
    indent: 'इंडेंटेशन',
    sort: 'कुंजियाँ सॉर्ट करें',
    compress: 'संपीड़ित करें',
    beautify: 'सुंदर बनाएं'
  },

  actions: {
    format: 'JSON फ़ॉर्मेट करें',
    compress: 'संपीड़ित करें',
    clear: 'साफ़ करें',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें',
    transferMeaning: 'एस्केप',
    contraposition: 'अनएस्केप'
  },

  messages: {
    invalidJson: 'अमान्य JSON सिंटैक्स',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    empty: 'कृपया JSON सामग्री दर्ज करें',
    formatTip: 'JSON को फ़ॉर्मेट करने या संपीड़ित करने के बाद संपत्ति सूची प्रदर्शित की जाएगी',
    formatSuccess: 'JSON सफलतापूर्वक फ़ॉर्मेट किया गया',
    compressSuccess: 'JSON सफलतापूर्वक संपीड़ित किया गया',
    escapeSuccess: 'JSON सफलतापूर्वक एस्केप किया गया',
    unescapeSuccess: 'JSON सफलतापूर्वक अनएस्केप किया गया',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें'
  },

  labels: {
    jsonData: 'JSON डेटा',
    propertyList: 'संपत्ति सूची',
    clickToCopy: '(कॉपी करने के लिए मान पर क्लिक करें)'
  },

  placeholders: {
    jsonInput: 'अपना JSON डेटा पेस्ट करें...'
  }
};