export default {
  name: 'रिक्वेस्ट हेडर एडिटर',
  description: 'HTTP रिक्वेस्ट हेडर बनाएं, संपादित करें और परीक्षण करें',

  editor: {
    title: 'हेडर एडिटर',
    headers: 'रिक्वेस्ट हेडर्स',
    add: 'हेडर जोड़ें',
    bulk: 'बल्क संपादन',
    import: 'हेडर्स आयात करें',
    export: 'हेडर्स निर्यात करें',
    clear: 'सभी साफ़ करें',
    importError: 'आयात त्रुटि'
  },

  header: {
    name: 'हेडर नाम',
    value: 'मान',
    description: 'विवरण',
    namePlaceholder: 'हेडर नाम दर्ज करें',
    valuePlaceholder: 'हेडर मान दर्ज करें',
    actions: 'क्रियाएँ',
    enabled: 'सक्षम',
    duplicate: 'डुप्लिकेट',
    delete: 'हटाएँ',
    noHeaders: 'कोई हेडर नहीं, शुरू करने के लिए "जोड़ें" बटन पर क्लिक करें या टेम्पलेट लोड करें',
    bulkPlaceholder: 'हेडर्स पेस्ट करें, प्रारूप: \'नाम: मान\', प्रति पंक्ति एक, या कच्चा हेडर टेक्स्ट पेस्ट करें'
  },

  presets: {
    title: 'प्रीसेट्स',
    save: 'वर्तमान सहेजें',
    load: 'प्रीसेट लोड करें',
    delete: 'प्रीसेट हटाएँ',
    presetName: 'प्रीसेट नाम',
    namePlaceholder: 'प्रीसेट नाम दर्ज करें',
    confirmDelete: 'क्या आप वाकई इस प्रीसेट को हटाना चाहते हैं?',
    common: 'सामान्य हेडर्स',
    custom: 'कस्टम प्रीसेट्स'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: 'हेडर्स का परीक्षण करें',
    url: 'URL',
    urlPlaceholder: 'हेडर्स का परीक्षण करने के लिए URL दर्ज करें',
    method: 'मेथड',
    send: 'अनुरोध भेजें',
    response: 'प्रतिक्रिया'
  },

  response: {
    title: 'प्रतिक्रिया',
    status: 'स्थिति',
    headers: 'प्रतिक्रिया हेडर्स',
    body: 'बॉडी',
    time: 'समय',
    size: 'आकार',
    loading: 'लोड हो रहा है...',
    noResponse: 'पूर्वावलोकन देखने के लिए हेडर्स जोड़ें',
    headerCount: 'हेडर्स'
  },

  options: {
    title: 'विकल्प',
    followRedirects: 'रीडायरेक्ट्स का अनुसरण करें',
    timeout: 'टाइमआउट (सेकंड)',
    validateSSL: 'SSL प्रमाणपत्र सत्यापित करें',
    sendCredentials: 'क्रेडेंशियल्स भेजें'
  },

  formats: {
    title: 'निर्यात प्रारूप',
    raw: 'कच्चा टेक्स्ट',
    json: 'JSON',
    curl: 'cURL कमांड',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'हेडर गाइड',
    description: 'सामान्य HTTP हेडर्स और उनके उपयोग के बारे में जानें',
    securityHeaders: 'सुरक्षा हेडर्स',
    cachingHeaders: 'कैशिंग हेडर्स',
    corsHeaders: 'CORS हेडर्स',
    authenticationHeaders: 'प्रमाणीकरण हेडर्स',
    commonValues: 'सामान्य मान'
  },

  actions: {
    copy: 'कॉपी करें',
    format: 'फॉर्मेट',
    validate: 'सत्यापित करें',
    clear: 'साफ़ करें'
  },

  messages: {
    headerAdded: 'हेडर जोड़ा गया',
    headerDeleted: 'हेडर हटाया गया',
    headersCleared: 'सभी हेडर्स साफ़ किए गए',
    presetSaved: 'प्रीसेट सहेजा गया',
    presetLoaded: 'प्रीसेट लोड किया गया',
    presetDeleted: 'प्रीसेट हटाया गया',
    requestSent: 'अनुरोध भेजा गया',
    requestFailed: 'अनुरोध विफल: {error}',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    importSuccess: 'हेडर्स सफलतापूर्वक आयात किए गए',
    exportSuccess: 'हेडर्स सफलतापूर्वक निर्यात किए गए',
    invalidUrl: 'अमान्य URL',
    pleaseEnterHeader: 'कृपया हेडर टेक्स्ट दर्ज करें',
    invalidHeader: 'कोई मान्य हेडर्स पार्स नहीं किए जा सके, कृपया "नाम: मान" प्रारूप का उपयोग करें',
    invalidHeaderName: 'अमान्य हेडर नाम: {error}',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें'
  }
};