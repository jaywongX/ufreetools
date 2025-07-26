export default {
  name: 'OpenAPI → TypeScript क्लाइंट जेनरेटर',
  description: 'OpenAPI स्पेसिफिकेशन्स के आधार पर स्वचालित रूप से TypeScript इंटरफेस और क्लाइंट कोड जेनरेट करें',

  options: {
    exportSchemas: 'सभी मॉडल परिभाषाएँ निर्यात करें',
    generateClient: 'API क्लाइंट कोड जेनरेट करें',
    addComments: 'टिप्पणियाँ और दस्तावेज़ीकरण जोड़ें',
    useEnums: 'TypeScript एनम का उपयोग करें (स्ट्रिंग यूनियनों के बजाय)',
    indentSize: 'इंडेंट आकार',
    operationType: 'ऑपरेशन प्रकार',
    displayOptions: 'प्रदर्शन विकल्प'
  },

  inputMode: {
    toggleToFile: 'फ़ाइल अपलोड पर स्विच करें',
    toggleToText: 'टेक्स्ट इनपुट पर स्विच करें',
    loadExample: 'उदाहरण लोड करें'
  },

  fileUpload: {
    dragAndDrop: 'OpenAPI फ़ाइल को यहाँ खींचें और छोड़ें, या अपलोड करने के लिए क्लिक करें',
    supportedFormats: '.json, .yaml और .yml फ़ाइल स्वरूपों का समर्थन करता है',
    fileSelected: 'चयनित: {0} ({1})'
  },

  textInput: {
    placeholder: 'OpenAPI स्पेसिफिकेशन (JSON या YAML) यहाँ पेस्ट करें...'
  },

  actions: {
    generate: 'TypeScript कोड जेनरेट करें',
    processing: 'प्रोसेस हो रहा है...',
    clear: 'साफ़ करें',
    copy: 'कोड कॉपी करें',
    download: 'कोड डाउनलोड करें'
  },

  results: {
    generatedCode: 'जेनरेट किया गया TypeScript कोड',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    error: 'त्रुटि',
    characterCount: 'वर्ण गणना: {0}'
  },

  errors: {
    parseError: 'OpenAPI स्पेसिफिकेशन को पार्स करने में असमर्थ। कृपया सुनिश्चित करें कि आप मान्य JSON या YAML प्रारूप प्रदान करते हैं।',
    invalidSpec: 'अमान्य OpenAPI स्पेसिफिकेशन। कोई openapi या swagger संस्करण पहचानकर्ता नहीं मिला।',
    processingError: 'OpenAPI स्पेसिफिकेशन को प्रोसेस करने में त्रुटि: {0}'
  }
};