export default {
  name: 'मॉक API जनरेटर',
  description: 'OpenAPI विनिर्देश के अनुसार स्वचालित रूप से मॉक API उत्पन्न करें',

  options: {
    version: 'OpenAPI संस्करण',
    format: 'आउटपुट प्रारूप',
    includeExamples: 'उदाहरण प्रतिक्रिया शामिल करें',
    responseDynamism: 'प्रतिक्रिया गतिशीलता',
    responseType: 'प्रतिक्रिया प्रकार',
    arrayLength: 'ऐरे की लंबाई',
    responseFormat: 'प्रतिक्रिया प्रारूप'
  },

  formats: {
    json: 'JSON सर्वर',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'मॉक सर्विस वर्कर'
  },

  actions: {
    generate: 'मॉक उत्पन्न करें',
    preview: 'API पूर्वावलोकन',
    clear: 'साफ़ करें',
    copy: 'कोड कॉपी करें',
    download: 'डाउनलोड करें',
    uploadSpec: 'OpenAPI विनिर्देश अपलोड करें',
    uploadJava: 'Java क्लास फ़ाइल अपलोड करें',
    generateJson: 'JSON उत्पन्न करें',
    generateBuilder: 'बिल्डर उत्पन्न करें',
    format: 'सुंदर बनाएँ'
  },

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    generationSuccess: 'मॉक API सफलतापूर्वक उत्पन्न की गई',
    generationError: 'मॉक API उत्पन्न करते समय त्रुटि हुई',
    specRequired: 'कृपया OpenAPI विनिर्देश प्रदान करें',
    fileUploaded: 'अपलोड किया गया',
    parseError: 'Java क्लास का विश्लेषण करने में विफल, कृपया सुनिश्चित करें कि फ़ाइल प्रारूप सही है'
  },

  help: {
    uploadHint: '.java फ़ाइलों को अपलोड करने का समर्थन है, स्वचालित रूप से क्लास संरचना का विश्लेषण करके मॉक कॉन्फ़िगरेशन उत्पन्न करता है। बहु-स्तरीय ऑब्जेक्ट गुणों का समर्थन अभी तक नहीं है'
  },

  fields: {
    title: 'फ़ील्ड परिभाषा',
    addField: 'फ़ील्ड जोड़ें',
    addChildField: 'चाइल्ड फ़ील्ड जोड़ें',
    fieldName: 'फ़ील्ड नाम'
  },

  fieldTypes: {
    string: 'स्ट्रिंग',
    number: 'संख्या',
    boolean: 'बूलियन',
    date: 'दिनांक',
    name: 'नाम',
    email: 'ईमेल',
    phone: 'फ़ोन',
    address: 'पता',
    id: 'आईडी',
    image: 'छवि URL',
    array: 'ऐरे',
    object: 'ऑब्जेक्ट'
  },

  array: {
    itemType: 'ऐरे आइटम प्रकार',
    arrayFields: 'ऐरे आइटम फ़ील्ड्स'
  },

  object: {
    childFields: 'चाइल्ड फ़ील्ड्स'
  },

  responseTypes: {
    object: 'एकल ऑब्जेक्ट',
    array: 'ऑब्जेक्ट ऐरे',
    custom: 'कस्टम संरचना'
  },

  responseFormats: {
    dataOnly: 'केवल डेटा',
    standard: 'मानक REST प्रतिक्रिया (code, data, message)'
  },

  placeholder: {
    output: '// उत्पन्न किए गए मॉक डेटा यहां दिखाई देंगे'
  }
};