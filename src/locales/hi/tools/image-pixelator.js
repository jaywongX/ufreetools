export default {
  name: 'इमेज पिक्सलाइज़र',
  description: 'अनुकूलन योग्य रिज़ॉल्यूशन और प्रभावों के साथ छवियों को पिक्सेल कला में परिवर्तित करें',

  upload: {
    title: 'छवि अपलोड करें',
    dropzone: 'अपनी छवि को यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
    maxSize: 'अधिकतम फ़ाइल आकार: 10MB',
    supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'पिक्सेलाइज़ेशन सेटिंग्स',
    pixelSize: 'पिक्सेल आकार',
    pixelShape: 'पिक्सेल आकृति',
    shapes: {
      square: 'वर्ग',
      rounded: 'गोलाकार',
      circle: 'वृत्त',
      diamond: 'हीरा',
      custom: 'कस्टम'
    },
    resolution: 'रिज़ॉल्यूशन',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    preserveAspect: 'पहलू अनुपात सुरक्षित रखें',
    colorReduction: 'रंग में कमी',
    colors: 'रंगों की संख्या',
    dithering: 'डाइथरिंग',
    ditheringTypes: {
      none: 'कोई नहीं',
      floydSteinberg: 'फ़्लॉइड-स्टाइनबर्ग',
      atkinson: 'एटकिंसन',
      ordered: 'आदेशित',
      bayer: 'बायर'
    },
    palette: 'रंग पैलेट',
    palettes: {
      auto: 'स्वतः',
      grayscale: 'ग्रेस्केल',
      gameboy: 'गेम बॉय',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'कस्टम',
      normal: 'सामान्य',
      retro: 'रेट्रो',
      sepia: 'सेपिया',
      bright: 'उज्ज्वल',
      cool: 'शांत',
      warm: 'गर्म',
      bw: 'काला और सफेद',
      invert: 'उलटा'
    },
    customPalette: 'कस्टम पैलेट रंग',
    small: 'छोटा (ठीक)',
    large: 'बड़ा (मोटा)',
    low: 'कम (रेट्रो)',
    high: 'उच्च (सच्चा रंग)'
  },

  effects: {
    title: 'प्रभाव',
    brightness: 'चमक',
    contrast: 'कंट्रास्ट',
    saturation: 'संतृप्ति',
    hue: 'रंग',
    outline: 'आउटलाइन',
    outlineColor: 'आउटलाइन रंग',
    noise: 'शोर',
    posterize: 'पोस्टराइज़',
    invert: 'रंगों को उल्टा करें',
    grayscale: 'ग्रेस्केल',
    sepia: 'सेपिया',
    vignette: 'विग्नेट'
  },

  animation: {
    title: 'एनिमेशन सेटिंग्स',
    animated: 'एनिमेशन के रूप में संसाधित करें',
    frameRate: 'फ़्रेम दर',
    optimizeFrames: 'फ़्रेम अनुकूलित करें',
    looping: 'लूपिंग',
    loopCount: 'लूप गणना'
  },

  output: {
    title: 'आउटपुट',
    preview: 'पूर्वावलोकन',
    original: 'मूल',
    pixelated: 'पिक्सेलयुक्त',
    comparison: 'तुलना',
    zoomIn: 'ज़ूम इन',
    zoomOut: 'ज़ूम आउट',
    gridOverlay: 'ग्रिड ओवरले',
    downloadAs: 'इस रूप में डाउनलोड करें',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'स्प्राइटशीट',
    quality: 'गुणवत्ता',
    scale: 'स्केल',
    loading: 'लोड हो रहा है...',
    noImage: 'कृपया एक छवि चुनें',
    processing: 'संसाधित हो रहा है...'
  },

  presets: {
    title: 'प्रीसेट',
    save: 'वर्तमान सेटिंग्स सहेजें',
    load: 'प्रीसेट लोड करें',
    delete: 'प्रीसेट हटाएं',
    presetName: 'प्रीसेट नाम',
    defaults: {
      lowRes: 'कम रिज़ॉल्यूशन',
      highContrast: 'उच्च कंट्रास्ट',
      retro: 'रेट्रो',
      minimal: 'न्यूनतम',
      sketch: 'स्केच',
      blueprint: 'ब्लूप्रिंट'
    }
  },

  actions: {
    pixelate: 'छवि को पिक्सेलाइज़ करें',
    reset: 'सेटिंग्स रीसेट करें',
    applyChanges: 'परिवर्तन लागू करें',
    undoChanges: 'परिवर्तन पूर्ववत करें',
    downloadImage: 'छवि डाउनलोड करें',
    selectImage: 'छवि चुनें'
  },

  messages: {
    processing: 'छवि संसाधित हो रही है...',
    success: 'छवि पिक्सेलाइज़ेशन सफल',
    downloading: 'डाउनलोड के लिए तैयारी हो रही है...',
    presetSaved: 'प्रीसेट सफलतापूर्वक सहेजा गया',
    presetLoaded: 'प्रीसेट लोड किया गया',
    presetDeleted: 'प्रीसेट हटाया गया',
    error: 'त्रुटि: {error}',
    fileSize: 'फ़ाइल का आकार',
    pixels: 'पिक्सेल',
    imageSize: 'छवि आयाम',
    downloadSuccess: 'छवि सफलतापूर्वक डाउनलोड की गई',
    downloadFailed: 'डाउनलोड विफल',
    resetSuccess: 'सेटिंग्स रीसेट कर दी गई हैं',
    fileName: 'फ़ाइल का नाम'
  }
};