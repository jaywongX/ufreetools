export default {
    name: 'छवि मोज़ेक जनरेटर',
    description: 'छोटी छवियों को बड़ी तस्वीर में संयोजित करके मोज़ेक कला बनाएँ',

    upload: {
      title: 'मुख्य छवि अपलोड करें',
      dropzone: 'मुख्य छवि को यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
      maxSize: 'अधिकतम फ़ाइल आकार: 15MB',
      supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WEBP'
    },

    tiles: {
      title: 'टाइल छवियाँ',
      uploadTiles: 'टाइल छवियाँ अपलोड करें',
      dropzoneTiles: 'टाइल छवियों को यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
      maxTiles: 'अधिकतम {count} छवियाँ',
      useFolder: 'छवि फ़ोल्डर अपलोड करें',
      orUseSample: 'या नमूना गैलरी का उपयोग करें',
      sampleSets: 'नमूना टाइल सेट',
      nature: 'प्रकृति',
      people: 'लोग',
      art: 'कला',
      abstract: 'अमूर्त',
      animals: 'जानवर',
      clearAll: 'सभी टाइल्स साफ़ करें'
    },

    settings: {
      title: 'मोज़ेक सेटिंग्स',
      tileSize: 'टाइल का आकार',
      small: 'छोटा (विस्तृत)',
      medium: 'मध्यम',
      large: 'बड़ा (मोटा)',
      square: 'वर्ग',
      circle: 'वृत्त',
      applicationMode: 'मोज़ेक एप्लिकेशन मोड',
      all: 'पूरी छवि',
      selectRegion: 'क्षेत्र चुनें',
      selectingRegion: 'क्षेत्र चयन कर रहे हैं...',
      autoDetectFaces: 'स्वचालित रूप से चेहरों का पता लगाएँ',
      detectFaces: 'चेहरों का पता लगाएँ',
      detectFacesDescription: 'छवि में चेहरों का पता लगाएँ और उन पर स्वचालित रूप से मोज़ेक लागू करें',
      edgeSmoothing: 'किनारा स्मूदिंग',
      edgeSmoothingDescription: 'मोज़ेक ब्लॉक के किनारों को स्मूद करें, ताकि संक्रमण अधिक प्राकृतिक हो',
      custom: 'कस्टम',
      width: 'चौड़ाई',
      height: 'ऊंचाई',
      tilesWide: 'टाइल्स की चौड़ाई',
      tilesHigh: 'टाइल्स की ऊंचाई',
      colorMatch: 'रंग मिलान',
      intensity: 'तीव्रता',
      low: 'कम',
      high: 'उच्च',
      reuseTiles: 'टाइल्स का पुन: उपयोग करें',
      allowDuplicates: 'डुप्लिकेट की अनुमति दें',
      maxUses: 'प्रति टाइल अधिकतम उपयोग',
      colorAdjustment: 'रंग समायोजन',
      adjustTiles: 'मिलान के लिए टाइल रंगों को समायोजित करें',
      blendOriginal: 'मूल छवि के साथ मिश्रण करें',
      blendAmount: 'मिश्रण मात्रा',
      random: 'यादृच्छिक विविधता',
      shuffle: 'टाइल्स को यादृच्छिक रूप से व्यवस्थित करें'
    },

    advanced: {
      title: 'उन्नत विकल्प',
      algorithm: 'मिलान एल्गोरिदम',
      algorithms: {
        average: 'औसत रंग',
        dominant: 'प्रमुख रंग',
        histogram: 'रंग हिस्टोग्राम',
        pattern: 'पैटर्न मिलान'
      },
      tileShape: 'टाइल का आकार',
      shapes: {
        square: 'वर्ग',
        circle: 'वृत्त',
        hexagon: 'षट्कोण',
        triangle: 'त्रिकोण',
        random: 'यादृच्छिक'
      },
      tileGap: 'टाइल अंतराल',
      borderColor: 'बॉर्डर रंग',
      backgroundColor: 'पृष्ठभूमि रंग'
    },

    output: {
      fileName: 'फ़ाइल नाम',
      title: 'आउटपुट',
      preview: 'पूर्वावलोकन',
      original: 'मूल',
      mosaic: 'मोज़ेक',
      sideBySide: 'साइड बाय साइड',
      zoomIn: 'ज़ूम इन',
      zoomOut: 'ज़ूम आउट',
      download: 'मोज़ेक डाउनलोड करें',
      asJpg: 'JPG के रूप में डाउनलोड करें',
      asPng: 'PNG के रूप में डाउनलोड करें',
      highRes: 'उच्च रिज़ॉल्यूशन',
      resolution: 'आउटपुट रिज़ॉल्यूशन',
      format: 'प्रारूप',
      quality: 'गुणवत्ता',
      size: 'आकार',
      pixel: 'पिक्सेल',
      pleaseSelectImage: 'कृपया एक छवि चुनें',
      pleaseSelectImageAndAdjustSettings: 'कृपया एक छवि चुनें और सेटिंग्स समायोजित करें'
    },

    actions: {
      generate: 'मोज़ेक बनाएँ',
      regenerate: 'पुन: बनाएँ',
      cancel: 'बनाना रद्द करें',
      reset: 'रीसेट',
      detectFaces: 'चेहरों का पता लगाएँ',
      saveSettings: 'सेटिंग्स सहेजें',
      loadSettings: 'सेटिंग्स लोड करें'
    },

    messages: {
      generating: 'मोज़ेक बना रहा है... इसमें कुछ समय लग सकता है।',
      generationComplete: 'मोज़ेक सफलतापूर्वक बनाया गया!',
      notEnoughTiles: 'पर्याप्त टाइल छवियाँ नहीं हैं। कृपया अधिक छवियाँ अपलोड करें।',
      tileProcessing: 'टाइल छवियों को प्रोसेस कर रहा है: {progress}%',
      downloadStarted: 'डाउनलोड शुरू हो गया',
      settingsSaved: 'सेटिंग्स सहेज ली गईं',
      selecting: 'क्षेत्र का चयन कर रहे हैं...',
      preview: 'मोज़ेक लागू होने के बाद का प्रभाव यहां दिखाया जाएगा',
      faceDetected: 'चेहरे का क्षेत्र पहचाना गया',
      facesDetected: '{count} चेहरे पहचाने गए',
      noFacesDetected: 'कोई चेहरा नहीं पहचाना गया',
      loadingModels: 'चेहरा पहचान मॉडल लोड हो रहे हैं...',
      faceDetectionFailed: 'चेहरा पहचान विफल रही',
      reset: 'रीसेट कर दिया गया',
      error: 'त्रुटि: {message}'
    }
};