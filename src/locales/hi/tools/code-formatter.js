export default {
  name: 'कोड फॉर्मेटर',
  description: 'कई भाषाओं के कोड को फॉर्मेट और सुंदर बनाएं',
  languages: {
    title: 'भाषा',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: 'विकल्प',
    indent: 'इंडेंट',
    tabSize: 'टैब साइज',
    insertSpaces: 'स्पेस डालें',
    formatSelection: 'चयन फॉर्मेट करें',
    formatOnType: 'टाइप करते समय फॉर्मेट करें',
    removeComments: 'टिप्पणियां हटाएं',
    mangle: 'वेरिएबल नाम मिश्रित करें',
    lineBreak: 'लाइन ब्रेक स्टाइल'
  },
  actions: {
    beautify: 'सुंदर बनाएं',
    minify: 'संक्षिप्त करें',
    format: 'फॉर्मेट करें',
    copy: 'परिणाम कॉपी करें',
    clear: 'साफ़ करें',
    download: 'डाउनलोड करें',
    paste: 'क्लिपबोर्ड से पेस्ट करें',
    loadSample: 'उदाहरण कोड लोड करें'
  },
  messages: {
    formatSuccess: 'कोड सफलतापूर्वक फॉर्मेट किया गया',
    formatError: 'कोड फॉर्मेट करते समय त्रुटि हुई',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    languageChangeWarning: 'भाषा बदलने से आपका कोड रीसेट हो जाएगा। जारी रखें?'
  },
  errors: {
    emptyCode: 'कृपया फॉर्मेट करने के लिए कोड दर्ज करें',
    invalidJson: 'अमान्य JSON',
    jsCompressionError: 'JavaScript संक्षिप्तीकरण त्रुटि'
  },
  input: 'इनपुट',
  output: 'आउटपुट',
  placeholders: {
    input: 'अपना कोड यहां पेस्ट करें...',
    output: 'फॉर्मेट किया गया कोड यहां दिखाई देगा...'
  },
  characters: 'अक्षर',
  space: 'स्पेस',
  spaces: 'स्पेस',
  auto: 'स्वचालित',
  tips: {
    title: 'उपयोग के सुझाव',
    selectLanguage: 'सर्वोत्तम फॉर्मेटिंग परिणामों के लिए, अपने कोड के लिए उपयुक्त भाषा चुनें।',
    beautifyMinify: 'कोड को अधिक पठनीय बनाने के लिए "सुंदर बनाएं" फ़ंक्शन का उपयोग करें, फ़ाइल का आकार कम करने के लिए "संक्षिप्त करें" का उपयोग करें।',
    customizeOptions: 'फॉर्मेटिंग विकल्पों को अनुकूलित करने के लिए नीचे दिए गए सेटिंग पैनल का उपयोग करें।',
    keyboard: 'एडिटर में इंडेंट डालने के लिए Tab कुंजी दबाएं।'
  }
}