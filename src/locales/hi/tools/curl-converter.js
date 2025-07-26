export default {
  name: 'cURL कन्वर्टर',
  description: 'cURL कमांड को विभिन्न प्रोग्रामिंग भाषाओं में कोड स्निपेट में बदलें',
  title: 'cURL से कोड',
  subtitle: 'cURL कमांड को कई प्रोग्रामिंग भाषाओं के कोड में बदलें ताकि आप अपने प्रोजेक्ट में HTTP अनुरोधों को जल्दी से एकीकृत कर सकें',

  input: {
    title: 'cURL कमांड',
    placeholder: 'यहां cURL कमांड दर्ज करें, उदाहरण',
    parse: 'cURL पार्स करें',
    clear: 'साफ़ करें',
    examples: 'उदाहरण कमांड:',
    options: 'पार्सर विकल्प',
    validateCommand: 'कमांड सत्यापित करें',
    formatCurl: 'cURL फॉर्मेट करें'
  },

  options: {
    detectAuth: 'प्रमाणीकरण स्वतः पहचानें',
    resolveVariables: 'पर्यावरण वेरिएबल्स को हल करें',
    processContinuations: 'लाइन कंटिन्यूएशन (\\) को संभालें',
    followRedirects: 'रीडायरेक्ट का अनुसरण करें',
    preserveHeaders: 'सभी हेडर्स को संरक्षित करें',
    ignoreErrors: 'पार्सिंग त्रुटियों को अनदेखा करें',
    noDuplicateHeaders: 'डुप्लिकेट हेडर्स नहीं (अंतिम वाला उपयोग करें)'
  },

  output: {
    title: 'कोड आउटपुट',
    language: 'लक्षित भाषा',
    copy: 'कॉपी करें',
    copyTooltip: 'क्लिपबोर्ड पर कॉपी करें',
    download: 'डाउनलोड करें',
    beautify: 'सुंदर बनाएं',
    codeTitle: '{language} कोड',
    errorTitle: 'रूपांतरण त्रुटि',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Browser (fetch)',
      curl: 'cURL (फॉर्मेटेड)',
      json: 'JSON (अनुरोध ऑब्जेक्ट)',
      har: 'HAR (HTTP आर्काइव)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'अनुरोध विवरण',
    method: 'मेथड',
    url: 'URL',
    headers: 'हेडर्स',
    body: 'बॉडी',
    auth: 'प्रमाणीकरण',
    options: 'विकल्प',
    cookie: 'कुकीज़',
    queryParams: 'क्वेरी पैरामीटर्स',
    formData: 'फॉर्म डेटा',
    visualize: 'विज़ुअलाइज़ करें'
  },

  visualization: {
    title: 'अनुरोध विज़ुअलाइज़ेशन',
    request: 'अनुरोध',
    response: 'प्रतिक्रिया',
    headers: 'हेडर्स',
    body: 'बॉडी',
    timing: 'टाइमिंग',
    raw: 'रॉ'
  },

  analysis: {
    title: 'कमांड विश्लेषण',
    insecureWarning: 'चेतावनी: यह कमांड --insecure/-k का उपयोग करती है (SSL सत्यापन अक्षम है)',
    verboseIgnored: 'नोट: वर्बोज़ मोड (-v) को रूपांतरण के दौरान अनदेखा किया गया था',
    unsupportedOptions: 'असमर्थित विकल्प',
    warnings: 'चेतावनियां',
    info: 'जानकारी'
  },

  messages: {
    parsing: 'cURL कमांड पार्स कर रहा है...',
    parseFailed: 'cURL कमांड पार्स करने में विफल: {error}',
    parseSuccess: 'cURL कमांड सफलतापूर्वक पार्स किया गया',
    copied: 'कोड क्लिपबोर्ड पर कॉपी किया गया',
    downloaded: 'कोड डाउनलोड किया गया',
    invalidCurl: 'अमान्य cURL कमांड',
    emptyCurl: 'कृपया एक cURL कमांड दर्ज करें',
    validCurl: 'मान्य cURL कमांड',
    unknownOption: 'अज्ञात विकल्प: {option}',
    unsupportedMethod: 'चेतावनी: सभी भाषाएँ HTTP मेथड {method} का समर्थन नहीं करती हैं',
    curlRequired: 'कमांड "curl " से शुरू होनी चाहिए',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें'
  },

  examples: {
    title: 'उदाहरण cURL कमांड',
    basic: 'बेसिक GET अनुरोध',
    headers: 'कस्टम हेडर्स',
    post: 'JSON के साथ POST',
    formData: 'फॉर्म डेटा सबमिशन',
    auth: 'बेसिक प्रमाणीकरण',
    complex: 'जटिल उदाहरण',
    exampleCommands: {
      getRequest: 'GET अनुरोध',
      postJson: 'POST JSON',
      postForm: 'POST फॉर्म',
      withAuth: 'प्रमाणीकरण के साथ',
      uploadFile: 'फ़ाइल अपलोड करें'
    }
  },

  actions: {
    convert: 'कन्वर्ट करें',
    converting: 'कन्वर्ट कर रहा है...'
  }
};