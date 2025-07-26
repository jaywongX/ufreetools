export default {
  name: 'XML फॉर्मेटर',
  description: 'XML दस्तावेज़ों को फॉर्मेट, सुंदर और मान्य करें',

  options: {
    indentSize: 'इंडेंट साइज़',
    useTabs: 'टैब्स का उपयोग करें',
    collapseContent: 'सामग्री को संक्षिप्त करें',
    maxLineWidth: 'अधिकतम लाइन चौड़ाई',
    indentAttributes: 'इंडेंट विशेषताएँ',
    sortAttributes: 'विशेषताओं को क्रमबद्ध करें',
    newlineAfterPI: 'प्रोसेसिंग निर्देशों के बाद नई लाइन',
    operationType: 'ऑपरेशन प्रकार',
    indentSettings: 'इंडेंट सेटिंग्स',
    displayOptions: 'प्रदर्शन विकल्प',
    showLineNumbers: 'लाइन नंबर दिखाएं'
  },

  indentOptions: {
    twoSpaces: '2 स्पेस',
    fourSpaces: '4 स्पेस',
    tabIndent: 'टैब इंडेंट'
  },

  actions: {
    format: 'XML फॉर्मेट करें',
    minify: 'XML मिनिफाई करें',
    validate: 'मान्य करें',
    toJSON: 'JSON में परिवर्तित करें',
    copy: 'कॉपी करें',
    clear: 'साफ़ करें',
    download: 'डाउनलोड करें',
    upload: 'XML अपलोड करें',
    beautify: 'सुंदर बनाएं',
    copyCode: 'कोड कॉपी करें'
  },

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    formatSuccess: 'XML सफलतापूर्वक फॉर्मेट किया गया',
    formatError: 'XML फॉर्मेटिंग में त्रुटि',
    validXml: 'XML मान्य है',
    invalidXml: 'अमान्य XML: {0}',
    lineCol: 'लाइन {line}, कॉलम {col}',
    minifySuccess: 'XML सफलतापूर्वक मिनिफाई किया गया',
    conversionSuccess: 'परिवर्तन सफल रहा',
    conversionError: 'परिवर्तन के दौरान त्रुटि',
    pleaseEnterXml: 'कृपया XML सामग्री दर्ज करें',
    processingError: 'XML प्रोसेसिंग में त्रुटि: {0}',
    formatResult: 'फॉर्मेटिंग परिणाम',
    characterCount: 'अक्षर संख्या: {0}',
    lineCount: 'लाइन संख्या: {0}',
    characterAndLineCount: 'अक्षर संख्या: {0} | लाइन संख्या: {1}'
  },

  input: {
    xmlInput: 'XML इनपुट',
    placeholder: 'यहां XML पेस्ट करें या टाइप करें...'
  },

  examples: {
    title: 'उदाहरण XML',
    description: 'उदाहरण लोड करने के लिए क्लिक करें:',
    simpleXml: 'सरल XML',
    bookstore: 'बुकस्टोर कैटलॉग',
    complexXml: 'जटिल XML'
  }
};