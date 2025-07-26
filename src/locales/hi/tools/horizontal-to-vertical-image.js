export default {
  name: 'क्षैतिज से ऊर्ध्वाधर छवि',
  description: 'क्षैतिज छवियों को सोशल मीडिया और मोबाइल वॉलपेपर के लिए ऊर्ध्वाधर प्रारूप में बदलें',
  tags: ['image', 'conversion', 'social', 'mobile', 'portrait'],

  upload: {
    title: 'क्षैतिज से ऊर्ध्वाधर छवि में बदलें',
    dropzone: 'अपनी छवि को यहां खींचें और छोड़ें',
    maxSize: 'अधिकतम फ़ाइल आकार: 10MB',
    supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'रूपांतरण सेटिंग्स',
    presets: 'प्रीसेट',
    conversionMode: 'रूपांतरण मोड',
    modes: {
      crop: 'क्रॉप',
      fill: 'रंग भरें',
      blur: 'धुंधला पृष्ठभूमि',
      stretch: 'किनारों को खींचें',
      dualColor: 'दोहरे रंग की पृष्ठभूमि'
    },
    cropPosition: 'क्रॉप स्थिति',
    positions: {
      left: 'बाएँ',
      center: 'केंद्र',
      right: 'दाएँ'
    },
    fillColor: 'भरने का रंग',
    blurRadius: 'धुंधलापन त्रिज्या',
    stretchFactor: 'खिंचाव कारक',
    topColor: 'ऊपरी रंग',
    bottomColor: 'निचला रंग',
    sizeOption: 'आउटपुट आकार',
    sizeModes: {
      auto: 'स्वचालित',
      preset: 'प्रीसेट',
      custom: 'कस्टम'
    },
    sizePresets: 'आकार प्रीसेट',
    outputSize: 'कस्टम आयाम',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    dimensionsHint: 'पिक्सेल में आयाम दर्ज करें',
    outputFormat: 'आउटपुट प्रारूप',
    quality: 'छवि गुणवत्ता',
    advancedOptions: 'उन्नत विकल्प',
    preserveRatio: 'अनुपात बनाए रखें',
    sharpen: 'तेज करें',
    addWatermark: 'वॉटरमार्क जोड़ें',
    watermarkPlaceholder: 'वॉटरमार्क टेक्स्ट दर्ज करें',
    watermarkColor: 'वॉटरमार्क रंग'
  },

  output: {
    preview: 'आउटपुट पूर्वावलोकन',
    before: 'पहले',
    after: 'बाद में',
    dimensions: 'आयाम'
  },

  actions: {
    selectImage: 'छवि चुनें',
    convert: 'ऊर्ध्वाधर में बदलें',
    download: 'छवि डाउनलोड करें',
    showSideBySide: 'तुलना दिखाएं',
    hideSideBySide: 'तुलना छिपाएं',
    hideComparison: 'तुलना छिपाएं'
  },

  messages: {
    convertPrompt: 'एक क्षैतिज छवि अपलोड करें और इसे ऊर्ध्वाधर प्रारूप में बदलें',
    processing: 'आपकी छवि प्रोसेस हो रही है...',
    imageOnly: 'कृपया एक छवि फ़ाइल चुनें'
  },

  examples: {
    title: 'उपयोग के उदाहरण',
    social: 'इंस्टाग्राम, टिकटॉक और अन्य सोशल प्लेटफॉर्म के लिए ऊर्ध्वाधर स्टोरीज बनाएं',
    socialTip: 'लैंडस्केप फोटो को आकर्षक स्टोरीज में बदलने के लिए एकदम सही',
    mobile: 'लैंडस्केप छवियों से मोबाइल वॉलपेपर बनाएं',
    mobileTip: 'विभिन्न आस्पेक्ट अनुपातों के साथ स्मार्टफोन स्क्रीन के लिए छवियों को अनुकूलित करें'
  }
};