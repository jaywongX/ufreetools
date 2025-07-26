export default {
  name: 'YAML-JSON कन्वर्टर',
  description: 'अनुकूलन योग्य विकल्पों के साथ YAML और JSON प्रारूपों के बीच परिवर्तित करें',

  input: {
    title: 'इनपुट',
    yamlPlaceholder: 'यहां YAML दर्ज करें...',
    jsonPlaceholder: 'यहां JSON दर्ज करें...',
    loadSample: 'उदाहरण लोड करें',
    clearInput: 'इनपुट साफ़ करें',
    uploadFile: 'फ़ाइल अपलोड करें'
  },

  output: {
    title: 'आउटपुट',
    copyOutput: 'आउटपुट कॉपी करें',
    downloadOutput: 'आउटपुट डाउनलोड करें',
    clearOutput: 'आउटपुट साफ़ करें'
  },

  options: {
    conversionMode: 'परिवर्तन मोड',
    jsonToYaml: 'JSON से YAML',
    yamlToJson: 'YAML से JSON',
    formatOutput: 'आउटपुट फॉर्मेट करें',
    indentSize: 'इंडेंट साइज़',
    quoteKeys: 'ऑब्जेक्ट कीज़ को उद्धरण चिह्न में रखें',
    sortKeys: 'कीज़ को वर्णानुक्रम में सॉर्ट करें',
    flowStyle: 'YAML फ्लो स्टाइल',
    jsonCompatible: 'JSON संगत',
    singleQuotes: 'एकल उद्धरण चिह्न का उपयोग करें',
    includeSchema: 'स्कीमा शामिल करें',
    preserveKeyOrder: 'की क्रम संरक्षित करें'
  },

  flowStyles: {
    block: 'ब्लॉक स्टाइल',
    flow: 'फ्लो स्टाइल',
    auto: 'ऑटो'
  },

  validation: {
    validate: 'परिवर्तन से पहले मान्य करें',
    validInput: 'मान्य {format}',
    invalidInput: 'अमान्य {format}: {error}',
    checkSyntax: 'सिंटैक्स जांचें'
  },

  actions: {
    convert: 'परिवर्तित करें',
    swap: 'प्रारूप बदलें',
    beautify: 'सुंदर बनाएं',
    minify: 'छोटा करें'
  },

  messages: {
    conversionSuccess: 'परिवर्तन सफल रहा',
    conversionFailed: 'परिवर्तन विफल: {error}',
    copySuccess: 'क्लिपबोर्ड पर कॉपी किया गया',
    downloadSuccess: 'फ़ाइल सफलतापूर्वक डाउनलोड की गई',
    emptyInput: 'कृपया परिवर्तित करने के लिए कुछ इनपुट दर्ज करें',
    invalidYaml: 'अमान्य YAML सिंटैक्स',
    invalidJson: 'अमान्य JSON सिंटैक्स'
  }
};