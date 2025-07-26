export default {
  name: 'SVG ऑप्टिमाइज़र',
  description: 'बेहतर प्रदर्शन और फाइल साइज़ के लिए SVG फाइलों को ऑप्टिमाइज़ और क्लीन अप करें',

  upload: {
    title: 'SVG अपलोड करें',
    dropzone: 'SVG फाइल यहां ड्रॉप करें या ब्राउज़ करने के लिए क्लिक करें',
    or: 'या',
    pasteCode: 'SVG कोड पेस्ट करें',
    maxSize: 'अधिकतम फाइल साइज़: 5MB',
    onlySvg: 'केवल SVG फाइलें समर्थित हैं',
    selected: 'चयनित',
    changeFile: 'फाइल बदलें'
  },

  input: {
    title: 'इनपुट SVG',
    pasteHere: 'SVG कोड यहां पेस्ट करें...',
    loadExample: 'उदाहरण लोड करें',
    clear: 'क्लियर करें',
    validate: 'SVG वैलिडेट करें'
  },

  output: {
    title: 'ऑप्टिमाइज़ेशन परिणाम',
    copyToClipboard: 'क्लिपबोर्ड पर कॉपी करें',
    download: 'SVG डाउनलोड करें',
    beforeSize: 'मूल साइज़',
    afterSize: 'ऑप्टिमाइज़्ड साइज़',
    reduction: 'कमी',
    reductionBy: 'कम हुआ',
    svgCode: 'SVG कोड'
  },

  options: {
    title: 'ऑप्टिमाइज़ेशन विकल्प',
    preset: 'प्रीसेट',
    presets: {
      default: 'डिफ़ॉल्ट',
      light: 'लाइट',
      aggressive: 'एग्रेसिव',
      custom: 'कस्टम'
    },
    removeComments: 'कमेंट्स हटाएं',
    removeCommentsDesc: 'कमेंट्स और CDATA सेक्शन हटाएं',
    removeHiddenElements: 'छिपे हुए एलिमेंट्स हटाएं',
    removeEmptyContainers: 'खाली कंटेनर्स हटाएं',
    removeUnusedDefs: 'अनुपयोगी Defs हटाएं',
    removeViewBox: 'viewBox हटाएं',
    keepViewBox: 'viewBox रखें',
    keepViewBoxDesc: 'SVG स्केलेबिलिटी सुनिश्चित करने के लिए viewBox एट्रिब्यूट रखें',
    cleanupIDs: 'IDs क्लीन अप करें',
    cleanupIDsDesc: 'अनुपयोगी IDs हटाएं या छोटा करें',
    convertColors: 'कलर्स को हेक्स में कन्वर्ट करें',
    removeMetadata: 'मेटाडेटा हटाएं',
    removeMetadataDesc: '&lt;metadata&gt; एलिमेंट्स हटाएं',
    removeDoctype: 'डॉकटाइप हटाएं',
    removeXMLProcInst: 'XML इंस्ट्रक्शंस हटाएं',
    removeEditorsNS: 'एडिटर नेमस्पेस हटाएं',
    collapseGroups: 'ग्रुप्स कोलैप्स करें',
    collapseGroupsDesc: 'विशेष एट्रिब्यूट्स के बिना ग्रुप्स कोलैप्स करें',
    convertPathData: 'पाथ डेटा ऑप्टिमाइज़ करें',
    convertPathDataDesc: 'पाथ डेटा को रिलेटिव कोऑर्डिनेट्स में कन्वर्ट करें, डेसिमल्स कम करें, आदि।',
    convertTransforms: 'ट्रांसफॉर्म्स ऑप्टिमाइज़ करें',
    convertShapeToPath: 'शेप्स को पाथ्स में कन्वर्ट करें',
    convertShapeToPathDesc: 'बेसिक शेप्स को &lt;path&gt; एलिमेंट्स में कन्वर्ट करें',
    removeUselessStrokeAndFill: 'अनुपयोगी स्ट्रोक और फिल हटाएं',
    moveElemsAttrsToGroup: 'एलिमेंट्स एट्रिब्यूट्स को ग्रुप में मूव करें',
    mergePaths: 'पाथ्स मर्ज करें',
    minifyStyles: 'स्टाइल्स मिनिफाई करें',
    inlineStyles: 'इनलाइन स्टाइल्स',
    inlineStylesDesc: '&lt;style&gt; एलिमेंट्स से स्टाइल्स को इनलाइन में कन्वर्ट करें',
    cleanupNumericValues: 'न्यूमेरिक वैल्यूज़ राउंड करें',
    precision: 'न्यूमेरिक प्रिसिज़न',
    decimalPlaces: 'दशमलव स्थान',
    lowPrecision: 'लो प्रिसिज़न (छोटा साइज़)',
    highPrecision: 'हाई प्रिसिज़न (बेहतर क्वालिटी)',
    removeDimensions: 'डाइमेंशन्स हटाएं',
    removeDimensionsDesc: 'width/height एट्रिब्यूट्स हटाएं, इसके बजाय viewBox का उपयोग करें',
    sortAttrs: 'एट्रिब्यूट्स सॉर्ट करें',
    sortAttrsDesc: 'एलिमेंट एट्रिब्यूट्स को वर्णानुक्रम में सॉर्ट करें'
  },

  view: {
    title: 'प्रीव्यू',
    original: 'मूल',
    optimized: 'ऑप्टिमाइज़्ड',
    showBorder: 'बॉर्डर दिखाएं',
    backgroundColor: 'बैकग्राउंड कलर',
    grid: 'ग्रिड दिखाएं',
    zoom: 'ज़ूम',
    toggleAnimation: 'एनिमेशन टॉगल करें'
  },

  actions: {
    optimize: 'SVG ऑप्टिमाइज़ करें',
    optimizing: 'ऑप्टिमाइज़ हो रहा है...',
    resetOptions: 'विकल्प रीसेट करें',
    download: 'ऑप्टिमाइज़्ड SVG डाउनलोड करें',
    copy: 'कोड कॉपी करें',
    copyCode: 'कोड कॉपी करें',
    viewCode: 'कोड देखें',
    viewPreview: 'प्रीव्यू देखें'
  },

  messages: {
    optimizationSuccess: 'SVG सफलतापूर्वक ऑप्टिमाइज़ किया गया',
    optimizationFailed: 'SVG ऑप्टिमाइज़ करने में विफल: {error}',
    invalidSvg: 'अमान्य SVG फाइल या कोड',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें',
    downloaded: 'ऑप्टिमाइज़्ड SVG डाउनलोड किया गया',
    emptyInput: 'कृपया ऑप्टिमाइज़ करने के लिए SVG कोड या फाइल प्रदान करें',
    onlySvgAllowed: 'कृपया एक SVG फाइल अपलोड करें!',
    failedToLoadLibrary: 'SVGO लाइब्रेरी लोड करने में विफल'
  }
};