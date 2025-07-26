export default {
  name: 'HTML फॉर्मेटर',
  description: 'बेहतर पठनीयता के लिए HTML कोड को फॉर्मेट और सुंदर बनाएं',
  formatMode: 'फॉर्मेट मोड',
  beautify: 'सुंदर बनाएं',
  minify: 'छोटा करें',
  formatOptions: 'फॉर्मेट विकल्प',
  removeComments: 'टिप्पणियां हटाएं',
  preserveComments: 'टिप्पणियां संरक्षित करें',
  showLineNumbers: 'लाइन नंबर दिखाएं',
  helpText: 'HTML सुंदरीकरण/छोटा करने का उपकरण डेवलपर्स को HTML कोड को जल्दी से व्यवस्थित या अनुकूलित करने में मदद करता है, जिससे पठनीयता में सुधार होता है या फ़ाइल का आकार कम होता है।',
  input: 'HTML इनपुट',
  inputPlaceholder: 'यहां HTML कोड पेस्ट करें या टाइप करें...',
  examples: 'उदाहरण',

  exampleNames: {
    simple: 'सरल HTML',
    complex: 'जटिल HTML पेज'
  },

  beautifiedResult: 'सुंदर किया गया परिणाम',
  minifiedResult: 'छोटा किया गया परिणाम',

  stats: {
    chars: 'अक्षर',
    lines: 'पंक्तियां',
    reduction: '{chars} अक्षरों से कम किया गया ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} स्पेस',
    tab: 'टैब इंडेंटेशन'
  },

  errorMessages: {
    emptyInput: 'कृपया प्रोसेस करने के लिए HTML कोड दर्ज करें',
    processingFailed: 'HTML प्रोसेस करने में विफल: {message}'
  },

  options: {
    indentSize: 'इंडेंट आकार',
    wrapLength: 'रैप लाइन लंबाई',
    indentInnerHtml: 'इनर HTML इंडेंट करें',
    preserveNewlines: 'नई लाइनें संरक्षित करें',
    maxPreserveNewlines: 'अधिकतम लगातार नई लाइनें',
    wrapAttributes: 'विशेषताओं को रैप करें',
    sortAttributes: 'विशेषताओं को क्रमबद्ध करें',
    sortClassNames: 'क्लास नामों को क्रमबद्ध करें'
  },

  actions: {
    format: 'HTML फॉर्मेट करें',
    minify: 'छोटा करें',
    clear: 'साफ़ करें',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें',
    upload: 'फ़ाइल अपलोड करें'
  },

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    formatSuccess: 'HTML सफलतापूर्वक फॉर्मेट किया गया',
    formatError: 'HTML फॉर्मेट करने में त्रुटि',
    invalidHtml: 'अमान्य HTML सिंटैक्स'
  }
};