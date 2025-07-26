export default {
  name: 'कलर पिकर',
  description: 'उन्नत कलर टूल्स का उपयोग करके रंग चुनें, परिवर्तित करें और कलर स्कीम बनाएं',

  options: {
    colorSpace: 'कलर स्पेस',
    paletteType: 'पैलेट प्रकार',
    includeAlpha: 'अल्फा शामिल करें',
    colorNaming: 'रंग नामकरण'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'नामित रंग'
  },

  palettes: {
    monochromatic: 'मोनोक्रोमैटिक',
    complementary: 'कॉम्प्लिमेंटरी',
    analogous: 'एनालॉगस',
    triadic: 'ट्रायडिक',
    tetradic: 'टेट्राडिक',
    split: 'स्प्लिट कॉम्प्लिमेंटरी'
  },

  actions: {
    pickColor: 'रंग चुनें',
    randomColor: 'रैंडम रंग',
    generatePalette: 'पैलेट जनरेट करें',
    convert: 'कन्वर्ट करें',
    copyColor: 'वर्तमान रंग कॉपी करें',
    copyAll: 'सभी कॉपी करें',
    save: 'रंग सेव करें',
    reset: 'रीसेट करें',
    clear: 'क्लियर करें'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'कलर स्कीम',
    complementary: 'कॉम्प्लिमेंटरी',
    triadic: 'ट्रायडिक',
    analogous: 'एनालॉगस',
    monochromatic: 'मोनोक्रोमैटिक',
    split: 'स्प्लिट कॉम्प्लिमेंटरी',
    double: 'डबल कॉम्प्लिमेंटरी',
    square: 'स्क्वेयर',
    compound: 'कंपाउंड'
  },

  colorAdjust: {
    title: 'रंग समायोजन',
    hue: 'ह्यू',
    saturation: 'सैचुरेशन',
    lightness: 'लाइटनेस',
    alpha: 'अल्फा'
  },

  colorInfo: {
    title: 'रंग जानकारी',
    name: 'रंग का नाम',
    format: 'फॉर्मेट',
    contrast: 'कंट्रास्ट',
    accessibility: {
      title: 'एक्सेसिबिलिटी',
      pass: 'WCAG मानक पास',
      fail: 'WCAG मानक फेल',
      normal: 'सामान्य टेक्स्ट',
      large: 'बड़ा टेक्स्ट'
    }
  },

  messages: {
    copied: 'रंग क्लिपबोर्ड पर कॉपी किया गया',
    copyFailed: 'रंग कॉपी करने में विफल',
    invalidColor: 'अमान्य रंग फॉर्मेट',
    contrastWarning: 'कम कंट्रास्ट',
    saved: 'रंग सेव किया गया',
    contrast: 'कंट्रास्ट: {ratio}',
    accessibility: {
      AAA: 'उत्कृष्ट कंट्रास्ट (AAA)',
      AA: 'अच्छा कंट्रास्ट (AA)',
      fail: 'अपर्याप्त कंट्रास्ट - एक्सेसिबिलिटी मानकों को पूरा नहीं करता'
    },
    preview: 'प्रीव्यू',
    colorValue: 'रंग मान',
  },

  history: {
    title: 'रंग इतिहास',
    empty: 'कोई रंग इतिहास नहीं',
    clear: 'इतिहास साफ़ करें'
  },

  colorPalette: {
    title: 'पैलेट',
    addToPalette: 'पैलेट में जोड़ें',
    removeFromPalette: 'पैलेट से हटाएं',
    exportPalette: 'पैलेट एक्सपोर्ट करें',
    importPalette: 'पैलेट इम्पोर्ट करें',
    clearPalette: 'पैलेट साफ़ करें'
  }
};