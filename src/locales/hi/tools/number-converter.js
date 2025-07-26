export default {
  name: 'संख्या परिवर्तक',
  description: 'विभिन्न संख्या प्रणालियों और प्रारूपों के बीच संख्याओं को परिवर्तित करें',

  input: {
    title: 'संख्या दर्ज करें',
    placeholder: 'परिवर्तित करने के लिए एक संख्या दर्ज करें',
    fromBase: 'आधार से',
    toBase: 'आधार तक',
    customBase: 'कस्टम आधार'
  },

  bases: {
    binary: 'बाइनरी (आधार 2)',
    octal: 'ऑक्टल (आधार 8)',
    decimal: 'दशमलव (आधार 10)',
    hexadecimal: 'हेक्साडेसिमल (आधार 16)',
    base32: 'आधार 32',
    base36: 'आधार 36',
    base58: 'आधार 58',
    base64: 'आधार 64',
    custom: 'कस्टम आधार'
  },

  options: {
    signed: 'हस्ताक्षरित',
    bitLength: 'बिट लंबाई',
    byteOrder: 'बाइट क्रम',
    formatOutput: 'आउटपुट प्रारूपित करें',
    separator: 'विभाजक',
    prefix: 'उपसर्ग जोड़ें',
    uppercase: 'बड़े अक्षर'
  },

  byteOrders: {
    littleEndian: 'लिटिल एंडियन',
    bigEndian: 'बिग एंडियन'
  },

  bitLengths: {
    '8': '8-बिट',
    '16': '16-बिट',
    '32': '32-बिट',
    '64': '64-बिट',
    custom: 'कस्टम'
  },

  output: {
    title: 'रूपांतरण परिणाम',
    binary: 'बाइनरी',
    octal: 'ऑक्टल',
    decimal: 'दशमलव',
    hexadecimal: 'हेक्साडेसिमल',
    custom: 'कस्टम आधार',
    all: 'सभी रूपांतरण'
  },

  actions: {
    convert: 'परिवर्तित करें',
    clear: 'साफ़ करें',
    copy: 'परिणाम कॉपी करें',
    swap: 'आधार स्वैप करें'
  },

  bitConverters: {
    title: 'बिट कन्वर्टर्स',
    ieee754: 'IEEE 754 फ्लोटिंग प्वाइंट',
    twosComplement: "दो का पूरक",
    bitMask: 'बिट मास्क',
    bitField: 'बिट फील्ड एक्सट्रैक्टर'
  },

  calculators: {
    title: 'गणनाएँ',
    add: 'जोड़ें',
    subtract: 'घटाएँ',
    multiply: 'गुणा करें',
    divide: 'भाग दें',
    modulo: 'मापांक',
    power: 'घात'
  },

  messages: {
    invalidInput: 'चयनित आधार के लिए अमान्य संख्या',
    outOfRange: 'चयनित बिट लंबाई के लिए सीमा से बाहर संख्या',
    copied: 'रूपांतरण क्लिपबोर्ड पर कॉपी किया गया',
    conversionComplete: 'रूपांतरण पूरा हुआ'
  }
};