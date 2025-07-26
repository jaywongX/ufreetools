export default {
  name: 'मार्कडाउन से HTML',
  description: 'मार्कडाउन टेक्स्ट को अनुकूलन योग्य विकल्पों के साथ HTML में बदलें',

  input: {
    title: 'इनपुट मार्कडाउन',
    placeholder: 'अपना मार्कडाउन टेक्स्ट यहाँ दर्ज करें या पेस्ट करें...',
    loadSample: 'नमूना लोड करें',
    clearInput: 'इनपुट साफ़ करें',
    uploadFile: 'मार्कडाउन फ़ाइल अपलोड करें',
    paste: 'क्लिपबोर्ड से पेस्ट करें',
    charCount: 'अक्षर',
    lineCount: 'पंक्तियाँ'
  },

  output: {
    title: 'HTML आउटपुट',
    copied: 'HTML क्लिपबोर्ड पर कॉपी किया गया',
    download: 'HTML डाउनलोड करें',
    copyOutput: 'HTML कॉपी करें',
    clearOutput: 'आउटपुट साफ़ करें',
    previewTab: 'पूर्वावलोकन',
    htmlTab: 'HTML कोड',
    previewMode: 'पूर्वावलोकन मोड',
    sourceMode: 'HTML स्रोत'
  },

  options: {
    title: 'रूपांतरण विकल्प',
    headerIds: 'स्वतः हेडर आईडी',
    gfm: 'GitHub फ्लेवर्ड मार्कडाउन',
    tables: 'तालिकाएँ',
    breaks: 'लाइन ब्रेक',
    smartLists: 'स्मार्ट सूचियाँ',
    smartypants: 'स्मार्टीपैंट्स',
    xhtml: 'XHTML',
    highlight: 'सिंटैक्स हाइलाइटिंग',
    sanitize: 'HTML को सैनिटाइज़ करें',
    footnotes: 'फ़ुटनोट्स',
    taskLists: 'कार्य सूचियाँ',
    emoji: 'इमोजी समर्थन',
    includeStyle: 'डिफ़ॉल्ट CSS शामिल करें',
    realtimePreview: 'वास्तविक समय पूर्वावलोकन',
    scrollSync: 'स्क्रॉल सिंक',
    htmlOptions: 'HTML विकल्प'
  },

  styles: {
    title: 'शैली विकल्प',
    theme: 'थीम',
    codeTheme: 'कोड थीम',
    customCSS: 'कस्टम CSS',
    fontSize: 'फ़ॉन्ट आकार',
    lineHeight: 'पंक्ति ऊँचाई',
    enableCustom: 'कस्टम स्टाइलिंग सक्षम करें'
  },

  themes: {
    default: 'डिफ़ॉल्ट',
    github: 'GitHub',
    bootstrap: 'बूटस्ट्रैप',
    bulma: 'बुल्मा',
    medium: 'मध्यम',
    solarized: 'सोलराइज्ड',
    dark: 'डार्क मोड',
    custom: 'कस्टम'
  },

  codeThemes: {
    default: 'डिफ़ॉल्ट',
    github: 'GitHub',
    vscode: 'VS कोड',
    atom: 'एटम',
    dracula: 'ड्रैकुला',
    monokai: 'मोनोकाई',
    solarized: 'सोलराइज्ड'
  },

  actions: {
    convert: 'HTML में बदलें',
    clearAll: 'सभी साफ़ करें',
    copyHtml: 'HTML कॉपी करें',
    saveAsHtml: 'HTML के रूप में सहेजें',
    generateToc: 'सामग्री तालिका उत्पन्न करें'
  },

  messages: {
    conversionSuccess: 'मार्कडाउन सफलतापूर्वक परिवर्तित हुआ',
    conversionFailed: 'मार्कडाउन परिवर्तित करने में विफल: {error}',
    emptyInput: 'कृपया परिवर्तित करने के लिए कुछ मार्कडाउन दर्ज करें',
    copied: 'HTML क्लिपबोर्ड पर कॉपी किया गया',
    tocGenerated: 'सामग्री तालिका उत्पन्न हुई'
  },

  alerts: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    copyFailed: 'क्लिपबोर्ड पर कॉपी करने में विफल',
    pasteFailed: 'क्लिपबोर्ड से पेस्ट करने में विफल',
    confirmClear: 'क्या आप वाकई इनपुट साफ़ करना चाहते हैं?'
  },

  status: {
    lastConversion: 'अंतिम रूपांतरण समय'
  },

  samples: {
    basic: 'बुनियादी',
    extended: 'विस्तारित',
    article: 'लेख'
  },

  download: {
    title: 'मार्कडाउन से HTML निर्यात'
  }
};