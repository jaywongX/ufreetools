export default {
  name: 'छवि वॉटरमार्क',
  description: 'अनुकूलन योग्य सेटिंग्स के साथ अपनी तस्वीरों में टेक्स्ट या छवि वॉटरमार्क जोड़ें',

  upload: {
    title: 'छवियां अपलोड करें',
    dropzone: 'छवियों को यहां छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
    addMore: 'और छवियां जोड़ें',
    clearAll: 'सभी साफ़ करें',
    maxFiles: 'अधिकतम {count} छवियां',
    maxSize: 'अधिकतम आकार: {size}MB प्रति छवि',
    supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: 'वॉटरमार्क प्रकार',
    text: 'टेक्स्ट वॉटरमार्क',
    image: 'छवि वॉटरमार्क',
    both: 'टेक्स्ट और छवि'
  },

  textWatermark: {
    title: 'टेक्स्ट वॉटरमार्क',
    text: 'वॉटरमार्क टेक्स्ट',
    font: 'फ़ॉन्ट',
    size: 'आकार',
    color: 'रंग',
    opacity: 'अपारदर्शिता',
    rotation: 'रोटेशन',
    shadow: 'टेक्स्ट शैडो',
    background: 'टेक्स्ट पृष्ठभूमि',
    padding: 'पैडिंग',
    border: 'सीमा',
    spacing: 'अक्षर रिक्ति'
  },

  imageWatermark: {
    title: 'छवि वॉटरमार्क',
    upload: 'वॉटरमार्क छवि अपलोड करें',
    selectLogo: 'लोगो चुनें',
    presetLogos: 'प्रीसेट लोगो',
    size: 'आकार',
    opacity: 'अपारदर्शिता',
    rotation: 'रोटेशन',
    offset: 'ऑफसेट'
  },

  positioning: {
    title: 'पोजीशनिंग',
    position: 'पोजीशन',
    custom: 'कस्टम पोजीशन',
    xPosition: 'X पोजीशन',
    yPosition: 'Y पोजीशन',
    tiled: 'टाइल पैटर्न',
    margin: 'मार्जिन',
    scale: 'छवि के साथ स्केल करें'
  },

  positions: {
    topLeft: 'ऊपर बाएँ',
    topCenter: 'ऊपर केंद्र',
    topRight: 'ऊपर दाएँ',
    middleLeft: 'मध्य बाएँ',
    middleCenter: 'मध्य केंद्र',
    middleRight: 'मध्य दाएँ',
    bottomLeft: 'नीचे बाएँ',
    bottomCenter: 'नीचे केंद्र',
    bottomRight: 'नीचे दाएँ',
    custom: 'कस्टम पोजीशन'
  },

  output: {
    title: 'आउटपुट',
    quality: 'आउटपुट गुणवत्ता',
    format: 'आउटपुट प्रारूप',
    original: 'मूल के समान',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'पूर्वावलोकन',
    downloadIndividual: 'डाउनलोड करें',
    downloadAll: 'सभी डाउनलोड करें',
    downloadAsZip: 'ZIP के रूप में डाउनलोड करें'
  },

  presets: {
    title: 'प्रीसेट',
    save: 'वर्तमान सेटिंग्स सहेजें',
    load: 'प्रीसेट लोड करें',
    delete: 'प्रीसेट हटाएं',
    presetName: 'प्रीसेट नाम'
  },

  actions: {
    apply: 'वॉटरमार्क लागू करें',
    applyToAll: 'सभी पर लागू करें',
    reset: 'रीसेट',
    preview: 'पूर्वावलोकन',
    undo: 'पूर्ववत करें',
    cancel: 'प्रसंस्करण रद्द करें'
  },

  messages: {
    processing: 'प्रसंस्करण हो रहा है...',
    success: 'वॉटरमार्क सफलतापूर्वक लागू किया गया',
    error: 'त्रुटि: {error}',
    noImages: 'कृपया पहले छवियां जोड़ें',
    noWatermark: 'कृपया टेक्स्ट या छवि वॉटरमार्क जोड़ें',
    presetSaved: 'प्रीसेट सफलतापूर्वक सहेजा गया',
    presetLoaded: 'प्रीसेट सफलतापूर्वक लोड किया गया',
    presetDeleted: 'प्रीसेट हटाया गया',
    watermarkApplied: 'वॉटरमार्क लागू किया गया',
    watermarkImageLoadError: 'वॉटरमार्क छवि लोड करने में विफल',
    imageLoadError: 'छवि लोड करने में विफल',
    resetSuccess: 'रीसेट सफल',
    downloadStarted: 'डाउनलोड शुरू हुआ',
    downloadError: 'छवि डाउनलोड करने में विफल',
    imageLoaded: 'छवि सफलतापूर्वक लोड हो गई',
    canvasInitError: 'कैनवास प्रारंभ करने में विफल',
    tiledWatermarkError: 'टाइल वॉटरमार्क बनाने में विफल'
  }
};