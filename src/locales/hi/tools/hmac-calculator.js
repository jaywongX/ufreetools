export default {
  name: 'HMAC कैलकुलेटर',
  description: 'कुंजी का उपयोग करके डेटा के लिए HMAC (हैश-आधारित संदेश प्रमाणीकरण कोड) की गणना करें',
  title: 'HMAC संदेश प्रमाणीकरण कोड कैलकुलेटर',
  intro: 'कई हैश एल्गोरिदम और आउटपुट प्रारूपों के समर्थन के साथ, कुंजी का उपयोग करके संदेश प्रमाणीकरण कोड उत्पन्न करें',

  input: {
    title: 'इनपुट',
    message: 'संदेश',
    messagePlaceholder: 'प्रमाणित करने के लिए संदेश दर्ज करें',
    key: 'कुंजी',
    keyLabel: 'कुंजी (गुप्त कुंजी)',
    keyPlaceholder: 'HMAC कुंजी दर्ज करें',
    messageLabel: 'संदेश',
    messageLongPlaceholder: 'HMAC की गणना के लिए संदेश दर्ज करें',
    file: 'फ़ाइल',
    text: 'टेक्स्ट',
    fileSelect: 'फ़ाइल चुनें',
    fileDrop: 'या फ़ाइल को यहां खींचें और छोड़ें',
    fileSelected: 'चयनित फ़ाइल: {name}',
    clearFile: 'फ़ाइल हटाएं',
    encoding: 'इनपुट एन्कोडिंग',
    keyEncoding: 'कुंजी एन्कोडिंग',
    outputFormat: 'आउटपुट प्रारूप',
    inputType: 'इनपुट प्रकार',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'हेक्साडेसिमल',
    binary: 'बाइनरी',
    calculate: 'HMAC की गणना करें',
    calculating: 'गणना हो रही है...',
    clear: 'सभी साफ़ करें'
  },

  algorithms: {
    title: 'एल्गोरिदम',
    label: 'हैश एल्गोरिदम',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'HMAC परिणाम',
    digest: 'HMAC डाइजेस्ट',
    outputLabel: 'HMAC परिणाम',
    copy: 'कॉपी करें',
    copied: 'कॉपी किया गया!',
    noResult: 'HMAC की गणना के लिए एक संदेश और कुंजी दर्ज करें',
    calculating: 'गणना हो रही है...',
    placeholder: 'HMAC परिणाम यहां प्रदर्शित किया जाएगा',
    useExample: 'उदाहरण का उपयोग करें',
    jsExample: 'JavaScript उदाहरण:'
  },

  validation: {
    title: 'HMAC सत्यापन',
    hmacToVerify: 'सत्यापित करने के लिए HMAC',
    verifyPlaceholder: 'सत्यापित करने के लिए HMAC दर्ज करें',
    verify: 'HMAC सत्यापित करें',
    valid: 'HMAC मान्य है',
    invalid: 'HMAC अमान्य है',
    verifying: 'सत्यापन हो रहा है...'
  },

  options: {
    title: 'विकल्प',
    uppercase: 'अपरकेस आउटपुट',
    showDetails: 'तकनीकी विवरण दिखाएं',
    autoUpdate: 'स्वचालित अपडेट',
    truncate: 'आउटपुट को काटें',
    truncateLength: 'काटने की लंबाई'
  },

  details: {
    title: 'तकनीकी विवरण',
    algorithm: 'एल्गोरिदम',
    keyLength: 'कुंजी की लंबाई',
    blockSize: 'ब्लॉक का आकार',
    outputLength: 'आउटपुट की लंबाई',
    execution: 'निष्पादन समय',
    ms: 'मिलीसेकंड'
  },

  messages: {
    noMessage: 'कृपया एक संदेश दर्ज करें',
    noKey: 'कृपया एक कुंजी दर्ज करें',
    invalidEncoding: 'अमान्य एन्कोडिंग प्रारूप',
    processingError: 'प्रोसेसिंग त्रुटि: {error}',
    success: 'HMAC गणना सफल',
    invalidKey: 'चयनित एन्कोडिंग के लिए अमान्य कुंजी प्रारूप',
    fileTooBig: 'फ़ाइल बहुत बड़ी है। अधिकतम आकार 5MB है',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें',
    invalidHex: 'कुंजी मान्य हेक्साडेसिमल प्रारूप में नहीं है',
    invalidBase64: 'कुंजी मान्य Base64 प्रारूप में नहीं है'
  },

  security: {
    title: 'सुरक्षा नोट्स',
    keyStorage: 'अपनी कुंजी कभी भी साझा न करें',
    keyStrength: 'प्रत्येक एप्लिकेशन के लिए मजबूत और अद्वितीय कुंजियों का उपयोग करें',
    recommendation: 'सुरक्षा-महत्वपूर्ण एप्लिकेशन के लिए, कम से कम HMAC-SHA256 का उपयोग करें',
    warning: 'HMAC-MD5 और HMAC-SHA1 उच्च-सुरक्षा एप्लिकेशन के लिए उपयुक्त नहीं हो सकते हैं'
  }
};