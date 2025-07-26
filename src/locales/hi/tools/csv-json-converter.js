export default {
  name: 'CSV से JSON टूल',
  description: 'CSV डेटा को JSON प्रारूप में परिवर्तित करें, अनुकूलन योग्य विकल्पों के साथ',

  options: {
    delimiter: 'डिलिमिटर',
    quote: 'उद्धरण चिह्न',
    header: 'पहली पंक्ति शीर्षक है',
    dynamicTyping: 'गतिशील टाइपिंग',
    dynamicTypingDescription: 'संख्या स्ट्रिंग को संख्या में, "true/false" को बूलियन में आदि परिवर्तित करें',
    skipEmptyLines: 'खाली पंक्तियों को छोड़ें',
    comments: 'टिप्पणी चिह्न',
    outputFormat: 'आउटपुट प्रारूप',
    indentation: 'इंडेंटेशन',
    encoding: 'एनकोडिंग',
    newline: 'नई लाइन',
    title: 'परिवर्तन विकल्प'
  },

  delimiters: {
    comma: 'कॉमा (,)',
    semicolon: 'सेमीकोलन (;)',
    tab: 'टैब (\\t)',
    pipe: 'पाइप (|)',
    custom: 'कस्टम'
  },

  formats: {
    array: 'ऑब्जेक्ट्स की एरे',
    arrayOfArrays: 'एरे की एरे',
    keyed: 'की-वैल्यू ऑब्जेक्ट',
    nested: 'नेस्टेड ऑब्जेक्ट'
  },

  preview: {
    input: 'इनपुट...',
    output: 'आउटपुट...',
    rawCsv: 'कच्चा CSV',
    parsedCsv: 'पार्स किया गया CSV',
    jsonOutput: 'JSON आउटपुट',
    firstRows: 'पहली {count} पंक्तियां',
    showAll: 'सभी दिखाएं'
  },

  actions: {
    convert: 'परिवर्तित करें',
    copy: 'JSON कॉपी करें',
    download: 'JSON डाउनलोड करें',
    clear: 'साफ़ करें',
    uploadCsv: 'CSV अपलोड करें',
    swap: 'इनपुट/आउटपुट स्वैप करें',
    loadExample: 'उदाहरण लोड करें',
    clearInput: 'इनपुट साफ़ करें',
    formatOutput: 'आउटपुट फॉर्मेट करें',
    copyResult: 'परिणाम कॉपी करें',
    downloadResult: 'परिणाम डाउनलोड करें',
    paste: 'पेस्ट करें',
    showOptions: 'विकल्प दिखाएं',
    hideOptions: 'विकल्प छिपाएं',
    uploadJson: 'JSON अपलोड करें'
  },

  results: {
    rowsProcessed: '{count} पंक्तियां प्रोसेस की गईं',
    conversionComplete: 'परिवर्तन पूरा हुआ',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    downloaded: 'डाउनलोड किया गया',
    error: 'त्रुटि'
  },

  errors: {
    noData: 'परिवर्तित करने के लिए कोई CSV डेटा नहीं है',
    invalidCsv: 'अमान्य CSV प्रारूप',
    parsingFailed: 'पार्सिंग विफल: {error}',
    missingHeader: 'शीर्षक पंक्ति गायब है',
    invalidJson: 'अमान्य JSON प्रारूप',
    formatFailed: 'फॉर्मेटिंग विफल: {error}',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें',
    downloadFailed: 'डाउनलोड विफल',
    pasteError: 'क्लिपबोर्ड से पेस्ट नहीं कर सका',
    conversionFailed: 'परिवर्तन विफल'
  },

  conversion: {
    title: 'परिवर्तन दिशा',
    csvToJson: {
      title: 'CSV से JSON',
      delimiterLabel: 'डिलिमिटर',
      headerLabel: 'पहली पंक्ति शीर्षक है',
      dynamicTypingLabel: 'डेटा प्रकार स्वचालित रूप से अनुमानित करें',
      skipEmptyLinesLabel: 'खाली पंक्तियों को छोड़ें',
      convertButton: 'CSV को JSON में परिवर्तित करें'
    },
    jsonToCsv: {
      title: 'JSON से CSV',
      delimiterLabel: 'डिलिमिटर',
      headerLabel: 'शीर्षक पंक्ति शामिल करें',
      quotesLabel: 'सभी फ़ील्ड के लिए उद्धरण चिह्न जोड़ें',
      nestedModeLabel: 'नेस्टेड डेटा प्रोसेसिंग मोड चुनें',
      flat: 'फ्लैट प्रोसेसिंग',
      stringify: 'स्ट्रिंग में परिवर्तित करें',
      ignore: 'अनदेखा करें',
      convertButton: 'JSON को CSV में परिवर्तित करें'
    }
  },

  stats: {
    processed: 'प्रोसेस की गई डेटा पंक्तियां',
    fields: 'फ़ील्ड/कॉलम की संख्या',
    inputSize: 'परिवर्तन से पहले का आकार',
    outputSize: 'परिवर्तन के बाद का आकार',
    title: 'आंकड़े'
  },

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    download: 'डाउनलोड किया गया',
    error: 'त्रुटि'
  },

  formatBytes: {
    bytes: 'बाइट्स',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};