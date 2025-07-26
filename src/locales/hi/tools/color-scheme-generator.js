export default {
  name: 'कलर स्कीम जनरेटर',
  description: 'कलर थ्योरी के आधार पर हार्मोनियस कलर स्कीम जनरेट करें, डिज़ाइनरों को कोऑर्डिनेटेड पैलेट बनाने में मदद करें',

  baseColor: {
    title: 'बेस कलर',
    picker: 'कलर पिकर',
    hex: 'हेक्साडेसिमल',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'रैंडम कलर',
    recent: 'हाल ही में उपयोग किए गए रंग',
    hint: 'कलर स्वॉच पर क्लिक करें या हेक्स कलर वैल्यू इनपुट करें',
  },

  schemeTypes: {
    title: 'कलर थ्योरी',
    monochromatic: 'मोनोक्रोमैटिक',
    analogous: 'एनालॉगस',
    complementary: 'कॉम्प्लिमेंटरी',
    splitComplementary: 'स्प्लिट कॉम्प्लिमेंटरी',
    triadic: 'ट्रायडिक',
    tetradic: 'टेट्राडिक',
    square: 'स्क्वेयर',
    compound: 'कंपाउंड',
    shades: 'शेड्स',
    custom: 'कस्टम',
  },

  options: {
    colorCount: 'रंगों की संख्या',
    saturationRange: 'सैचुरेशन रेंज',
    brightnessRange: 'ब्राइटनेस रेंज',
    includeBaseColor: 'बेस कलर शामिल करें',
    lockBaseColor: 'बेस कलर लॉक करें',
    colorSpace: 'कलर स्पेस',
    sortBy: 'सॉर्ट बाय',
    colorBlindSafe: 'कलर ब्लाइंड सेफ',
    contrastRatio: 'न्यूनतम कंट्रास्ट रेशियो'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: 'ह्यू',
    saturation: 'सैचुरेशन',
    brightness: 'ब्राइटनेस',
    harmony: 'हार्मनी',
    none: 'कोई नहीं'
  },

  palettes: {
    title: 'जनरेटेड पैलेट',
    save: 'पैलेट सेव करें',
    copy: 'पैलेट कॉपी करें',
    export: 'CSS वेरिएबल्स के रूप में एक्सपोर्ट करें',
    apply: 'प्रीव्यू पर अप्लाई करें'
  },

  exportFormats: {
    title: 'एक्सपोर्ट फॉर्मेट',
    css: 'CSS वेरिएबल्स',
    scss: 'SCSS वेरिएबल्स',
    less: 'LESS वेरिएबल्स',
    json: 'JSON',
    svg: 'SVG पैलेट',
    ase: 'Adobe ASE',
    tailwind: 'Tailwind कॉन्फिगरेशन',
    pdf: 'PDF'
  },

  preview: {
    title: 'प्रीव्यू',
    website: 'वेबसाइट',
    mobilApp: 'मोबाइल ऐप',
    dashboard: 'डैशबोर्ड',
    card: 'कार्ड',
    poster: 'पोस्टर',
    custom: 'कस्टम',
    mainButton: 'मुख्य बटन',
    secondButton: 'सेकेंडरी बटन',
    tag: 'टैग'
  },

  savedPalettes: {
    title: 'सेव्ड पैलेट्स',
    load: 'लोड करें',
    delete: 'डिलीट करें',
    rename: 'रीनेम करें',
    noSavedPalettes: 'कोई सेव्ड पैलेट नहीं है',
    saved: 'पैलेट सेव किया गया',
    schemeNameEmpty: 'पैलेट का नाम खाली है',
  },

  actions: {
    generate: 'स्कीम जनरेट करें',
    regenerate: 'रीजनरेट करें',
    reset: 'रीसेट करें',
    lockColor: 'रंग लॉक करें',
    unlockColor: 'रंग अनलॉक करें',
    save: 'पैलेट सेव करें',
  },

  messages: {
    paletteSaved: 'पैलेट सफलतापूर्वक सेव किया गया',
    paletteDeleted: 'पैलेट डिलीट कर दिया गया',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    exported: 'एक्सपोर्ट सफल',
    adjustmentParam: 'एडजस्टमेंट पैरामीटर',
    schemeName: 'स्कीम का नाम',
    copyAllColors: 'सभी रंग कॉपी किए गए',
  }
};