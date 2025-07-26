export default {
  name: 'इमेज कलर एक्सट्रैक्टर',
  description: 'छवियों से रंग पैलेट और प्रमुख रंग निकालें',

  input: {
    title: 'छवि अपलोड करें',
    dropzone: 'छवि को यहां खींचें या अपलोड करने के लिए क्लिक करें',
    formats: 'समर्थित प्रारूप: JPG, PNG, GIF, WebP, SVG',
    browse: 'फ़ाइलें ब्राउज़ करें',
    selectImage: 'छवि चुनें',
    orText: 'या',
    pasteUrl: 'छवि URL पेस्ट करें:',
    loadUrl: 'URL से लोड करें',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'अनामित छवि'
  },

  options: {
    title: 'निष्कर्षण विकल्प',
    extractSettings: 'निष्कर्षण सेटिंग्स',
    colorCount: 'रंगों की संख्या',
    paletteSize: 'पैलेट आकार',
    paletteMin: 'न्यूनतम (3)',
    paletteMax: 'अधिकतम (20)',
    colorSimilarity: 'रंग समानता',
    similiarityToggle: 'समान रंगों की अनुमति दें',
    quality: 'निष्कर्षण गुणवत्ता',
    colorModel: 'रंग मॉडल',
    colorSpace: 'रंग स्पेस',
    colorFormat: 'रंग प्रारूप',
    sortBy: 'रंगों को इसके अनुसार क्रमबद्ध करें',
    sortByPopularity: 'उपस्थिति की आवृत्ति के अनुसार',
    sortByLuminance: 'चमक के अनुसार',
    sortByHue: 'रंगत के अनुसार',
    sortBySaturation: 'संतृप्ति के अनुसार',
    ignoreWhite: 'सफेद को अनदेखा करें',
    ignoreBlack: 'काले को अनदेखा करें',
    threshold: 'समानता सीमा'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'हेक्साडेसिमल (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'पारदर्शिता के साथ RGBA',
    hsl: 'HSL',
    hsla: 'पारदर्शिता के साथ HSLA',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'उपस्थिति की आवृत्ति',
    luminance: 'चमक',
    hue: 'रंगत',
    saturation: 'संतृप्ति',
    original: 'मूल क्रम'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'डिस्प्ले P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'निकाले गए रंग',
    colorsFound: '{count} रंग निकाले गए',
    dominantColor: 'प्रमुख रंग',
    mainColor: 'मुख्य रंग',
    complementary: 'पूरक रंग',
    palette: 'रंग पैलेट',
    colorPalette: 'रंग पैलेट',
    palettePreview: 'पैलेट पूर्वावलोकन',
    usage: 'रंग उपयोग (%)',
    percentage: 'प्रतिशत: {value}%',
    copyAll: 'सभी रंग कॉपी करें',
    clickToCopy: 'रंग कॉपी करने के लिए क्लिक करें: {color}',
    downloading: 'पैलेट डाउनलोड हो रहा है...'
  },

  display: {
    originalImage: 'मूल छवि',
    colorPalette: 'रंग पैलेट',
    uploadFirst: 'कृपया पहले एक छवि अपलोड करें',
    clickExtract: 'छवि का रंग पैलेट प्राप्त करने के लिए "रंग निकालें" बटन पर क्लिक करें'
  },

  actions: {
    extract: 'रंग निकालें',
    extracting: 'प्रोसेसिंग...',
    download: 'पैलेट डाउनलोड करें',
    copy: 'कॉपी करें',
    copyValue: 'मान कॉपी करें',
    reset: 'रीसेट करें',
    copyPalette: 'पैलेट कॉपी करें',
    exportJson: 'JSON के रूप में निर्यात करें',
    exportCss: 'CSS वेरिएबल्स के रूप में निर्यात करें',
    exportSass: 'SASS वेरिएबल्स के रूप में निर्यात करें',
    exportSwatch: 'ASE स्वॉच के रूप में निर्यात करें'
  },

  palette: {
    title: 'नामित पैलेट',
    vibrant: 'जीवंत',
    muted: 'मंद',
    dark: 'गहरा',
    light: 'हल्का',
    custom: 'कस्टम'
  },

  messages: {
    imageLoaded: 'छवि सफलतापूर्वक लोड हुई',
    processingImage: 'छवि प्रोसेस हो रही है...',
    extractionComplete: 'रंग निष्कर्षण पूर्ण',
    extractionFailed: 'रंग निष्कर्षण विफल: {error}',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    copiedColor: 'कॉपी किया गया: {color}',
    copiedAll: 'सभी रंग कॉपी किए गए',
    copyFailed: 'कॉपी विफल',
    resetDone: 'रीसेट पूर्ण',
    invalidImage: 'अमान्य छवि फ़ाइल',
    noImageSelected: 'कोई छवि चयनित नहीं'
  }
};