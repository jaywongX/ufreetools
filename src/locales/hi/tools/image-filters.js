export default {
  name: 'इमेज फिल्टर्स',
  description: 'रियल-टाइम प्रीव्यू के साथ छवियों पर विभिन्न फिल्टर और प्रभाव लागू करें',

  upload: {
    title: 'छवि अपलोड करें',
    dropzone: 'अपनी छवि यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
    maxSize: 'अधिकतम फ़ाइल आकार: 10MB',
    supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: 'फिल्टर एडिटर',
    original: 'मूल',
    filtered: 'फिल्टर किया गया',
    reset: 'सभी रीसेट करें',
    undo: 'पूर्ववत करें',
    redo: 'फिर से करें',
    zoomIn: 'ज़ूम इन',
    zoomOut: 'ज़ूम आउट',
    fitToScreen: 'स्क्रीन के अनुसार फिट करें',
    showOriginal: 'मूल दिखाएं'
  },

  filters: {
    title: 'फिल्टर्स',
    basic: 'बुनियादी समायोजन',
    brightness: 'चमक',
    contrast: 'कंट्रास्ट',
    saturation: 'संतृप्ति',
    hue: 'रंग',
    exposure: 'एक्सपोज़र',
    vibrance: 'जीवंतता',
    temperature: 'तापमान',
    gamma: 'गामा',
    clarity: 'स्पष्टता',
    effects: 'प्रभाव',
    grayscale: 'ग्रेस्केल',
    sepia: 'सेपिया',
    vintage: 'विंटेज',
    polaroid: 'पोलरॉइड',
    duotone: 'डुओटोन',
    noise: 'नॉइज़',
    pixelate: 'पिक्सेलेट',
    blur: 'धुंधला',
    sharpen: 'तेज़',
    vignette: 'विग्नेट',
    color: 'रंग',
    colorOverlay: 'रंग ओवरले',
    colorize: 'रंगीन बनाएं',
    gradientMap: 'ग्रेडिएंट मैप',
    replaceColor: 'रंग बदलें',
    advanced: 'उन्नत',
    levels: 'स्तर',
    curves: 'वक्र',
    shadows: 'छाया',
    highlights: 'हाइलाइट्स',
    blacks: 'काले',
    whites: 'सफेद',
    channels: 'RGB चैनल्स'
  },

  presets: {
    title: 'प्रीसेट्स',
    custom: 'कस्टम',
    blackAndWhite: 'ब्लैक एंड व्हाइट',
    highContrast: 'हाई कंट्रास्ट',
    normal: 'सामान्य',
    cinematic: 'सिनेमैटिक',
    warm: 'गर्म',
    cool: 'ठंडा',
    sunset: 'सूर्यास्त',
    vintage: 'विंटेज',
    invert: 'उलट',
    cross: 'क्रॉस प्रोसेस',
    matte: 'मैट',
    flat: 'फ्लैट',
    portrait: 'पोर्ट्रेट',
    landscape: 'लैंडस्केप',
    vivid: 'जीवंत',
    moody: 'मूडी',
    savePreset: 'वर्तमान को प्रीसेट के रूप में सहेजें',
    deletePreset: 'प्रीसेट हटाएं',
    presetName: 'प्रीसेट नाम'
  },

  output: {
    title: 'आउटपुट',
    fileName: 'फ़ाइल नाम',
    format: 'प्रारूप',
    quality: 'गुणवत्ता',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    download: 'छवि डाउनलोड करें',
    saveOnline: 'ऑनलाइन सहेजें',
    share: 'शेयर करें',
    applyToNew: 'नई छवि पर लागू करें'
  },

  history: {
    title: 'इतिहास',
    revert: 'इस चरण पर वापस जाएं',
    clear: 'इतिहास साफ़ करें'
  },

  actions: {
    apply: 'फिल्टर लागू करें',
    download: 'डाउनलोड',
    save: 'सहेजें',
    reset: 'रीसेट',
    cancel: 'रद्द करें'
  },

  messages: {
    imageLoaded: 'छवि सफलतापूर्वक लोड की गई',
    filterApplied: 'फिल्टर सफलतापूर्वक लागू किया गया',
    filtersReset: 'फिल्टर्स को डिफ़ॉल्ट मान पर रीसेट कर दिया गया है',
    downloadStarted: 'डाउनलोड शुरू हो गया है',
    presetSaved: 'प्रीसेट सफलतापूर्वक सहेजा गया',
    presetDeleted: 'प्रीसेट हटा दिया गया है',
    invalidFile: 'अमान्य फ़ाइल। कृपया एक वैध छवि अपलोड करें।',
    fileTooLarge: 'फ़ाइल बहुत बड़ी है। अधिकतम आकार 10MB है।'
  }
};