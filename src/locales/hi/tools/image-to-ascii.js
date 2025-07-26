export default {
  name: 'इमेज से ASCII',
  description: 'छवियों को अनुकूलन योग्य ASCII कला पाठ में परिवर्तित करें',

  upload: {
    title: 'छवि अपलोड करें',
    dropzone: 'अपनी छवि को यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
    maxSize: 'अधिकतम फ़ाइल आकार: 5MB',
    supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WEBP, GIF',
    pasteImage: 'या क्लिपबोर्ड से एक छवि पेस्ट करें'
  },

  options: {
    title: 'रूपांतरण विकल्प',
    width: 'आउटपुट चौड़ाई',
    height: 'आउटपुट ऊँचाई',
    preserveAspect: 'पहलू अनुपात सुरक्षित रखें',
    colored: 'रंगीन आउटपुट',
    charSet: 'वर्ण सेट',
    charSets: {
      standard: 'मानक',
      simple: 'सरल',
      complex: 'जटिल',
      blocks: 'ब्लॉक वर्ण',
      custom: 'कस्टम'
    },
    customChars: 'कस्टम वर्ण',
    invert: 'रंगों को उल्टा करें',
    threshold: 'चमक थ्रेशोल्ड',
    brightness: 'चमक',
    contrast: 'कंट्रास्ट',
    fontFamily: 'फ़ॉन्ट परिवार',
    fontSize: 'फ़ॉन्ट आकार',
    lineHeight: 'पंक्ति ऊँचाई',
    backgroundColor: 'पृष्ठभूमि का रंग',
    textColor: 'पाठ का रंग'
  },

  output: {
    title: 'ASCII आउटपुट',
    preview: 'पूर्वावलोकन',
    raw: 'रॉ ASCII',
    html: 'HTML',
    copyToClipboard: 'क्लिपबोर्ड पर कॉपी करें',
    downloadTxt: 'TXT के रूप में डाउनलोड करें',
    downloadHtml: 'HTML के रूप में डाउनलोड करें',
    downloadImage: 'छवि के रूप में डाउनलोड करें',
    stats: {
      title: 'आंकड़े',
      characters: 'वर्णों की संख्या',
      lines: 'पंक्तियों की संख्या',
      colors: 'रंगों की संख्या',
      size: 'पाठ का आकार'
    }
  },

  presets: {
    title: 'प्रीसेट',
    save: 'वर्तमान सेटिंग्स सहेजें',
    load: 'प्रीसेट लोड करें',
    delete: 'प्रीसेट हटाएं',
    presetName: 'प्रीसेट नाम',
    default: 'डिफ़ॉल्ट',
    detailed: 'विस्तृत',
    minimalist: 'न्यूनतमवादी',
    blocky: 'ब्लॉकी शैली',
    small: 'छोटा',
    inverted: 'उलटा'
  },

  adjustment: {
    title: 'छवि समायोजन',
    grayscale: 'ग्रेस्केल',
    negative: 'नकारात्मक',
    resize: 'रूपांतरण से पहले आकार बदलें',
    crop: 'छवि काटें',
    rotate: 'घुमाएँ',
    flipH: 'क्षैतिज रूप से पलटें',
    flipV: 'लंबवत रूप से पलटें'
  },

  animation: {
    title: 'एनिमेशन',
    animated: 'एनिमेशन के रूप में संसाधित करें',
    frameDelay: 'फ़्रेम विलंब',
    loop: 'लूप एनिमेशन',
    loopCount: 'लूप गणना',
    extractFrame: 'वर्तमान फ़्रेम निकालें'
  },

  actions: {
    convert: 'ASCII में परिवर्तित करें',
    resetOptions: 'विकल्प रीसेट करें',
    refreshPreview: 'पूर्वावलोकन ताज़ा करें',
    loadImage: 'नई छवि लोड करें',
    applyChanges: 'परिवर्तन लागू करें',
    selectImage: 'छवि चुनें',
    reset: 'रीसेट',
    processing: 'संसाधित हो रहा है...',
    generate: 'ASCII उत्पन्न करें',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें'
  },

  messages: {
    converting: 'छवि को ASCII में परिवर्तित किया जा रहा है...',
    conversionComplete: 'रूपांतरण पूर्ण',
    conversionFailed: 'छवि रूपांतरण विफल: {error}',
    copied: 'ASCII क्लिपबोर्ड पर कॉपी किया गया',
    downloadStarted: 'डाउनलोड शुरू हुआ',
    downloadComplete: 'ASCII डाउनलोड किया गया',
    downloadFailed: 'डाउनलोड विफल',
    copyFailed: 'कॉपी विफल',
    resetComplete: 'सेटिंग्स रीसेट कर दी गई हैं',
    asciiGenerated: 'ASCII कला उत्पन्न हो गई है',
    generationFailed: 'ASCII उत्पन्न करने में विफल',
    presetSaved: 'प्रीसेट सफलतापूर्वक सहेजा गया',
    presetLoaded: 'प्रीसेट लोड किया गया',
    presetDeleted: 'प्रीसेट हटाया गया',
    invalidImage: 'अमान्य छवि प्रारूप या दूषित फ़ाइल',
    imageTooBig: 'छवि आयाम परिवर्तित करने के लिए बहुत बड़े हैं',
    selectOrLoad: 'कृपया एक छवि चुनें या URL से लोड करें',
    asciiWillDisplay: 'ASCII कला यहाँ प्रदर्शित होगी',
    customCharsPlaceholder: 'सबसे गहरे से सबसे हल्के क्रम में वर्ण दर्ज करें...',
    tip: 'प्रभाव देखने के लिए सेटिंग्स समायोजित करने के बाद "ASCII उत्पन्न करें" बटन पर क्लिक करें',
    drapPlaceHolder: 'यहां एक छवि चुनें या खींचें और छोड़ें',
    noImage: 'कृपया पहले एक छवि चुनें',
    generateAscii: 'छवि को परिवर्तित करने के लिए "ASCII उत्पन्न करें" बटन पर क्लिक करें',
    tip2: 'सुझाव: ASCII कला को क्लिपबोर्ड पर कॉपी करने के लिए कॉपी बटन का उपयोग करें, या इसे टेक्स्ट फ़ाइल के रूप में सहेजने के लिए डाउनलोड बटन का उपयोग करें।'
  },

  charSets: {
    standard: 'मानक',
    simple: 'सरल',
    blocks: 'ब्लॉक',
    custom: 'कस्टम'
  },

  settings: {
    title: 'ASCII सेटिंग्स',
    customCharsetLabel: 'कस्टम वर्ण सेट (सबसे गहरे से सबसे हल्के तक)',
    asciiWidth: 'ASCII चौड़ाई',
    invert: 'रंगों को उल्टा करें',
    colored: 'रंगीन आउटपुट',
    fontSize: 'फ़ॉन्ट आकार'
  },

  preview: {
    originalImage: 'मूल छवि',
    generatedAscii: 'उत्पन्न ASCII'
  }
};