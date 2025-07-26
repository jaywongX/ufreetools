export default {
  name: 'बल्क इमेज रिसाइज़र',
  description: 'एक साथ कई छवियों को समायोजित, परिवर्तित और अनुकूलित करें',

  input: {
    title: 'इनपुट छवियां',
    dropzone: 'छवियों को यहां खींचें या ब्राउज़ करने के लिए क्लिक करें',
    addMore: 'अधिक छवियां जोड़ें',
    selectImages: 'छवियां चुनें',
    clearAll: 'सभी साफ करें',
    maxFiles: '{count} छवियों तक',
    maxSize: 'प्रति छवि अधिकतम आकार: {size}MB',
    supportedFormats: 'समर्थित प्रारूप: {formats}'
  },

  options: {
    title: 'आकार बदलने के विकल्प',
    settingsTitle: 'समायोजन सेटिंग्स',
    resizeMode: 'आकार बदलने का मोड',
    resizeMethod: 'आकार बदलने की विधि',
    pixelMode: 'पिक्सेल',
    percentageMode: 'प्रतिशत',
    maxDimensionMode: 'अधिकतम आयाम',
    outputFormat: 'आउटपुट प्रारूप',
    quality: 'गुणवत्ता',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    maintainAspectRatio: 'आनुपातिक अनुपात बनाए रखें',
    maxWidth: 'अधिकतम चौड़ाई',
    maxHeight: 'अधिकतम ऊंचाई',
    percentage: 'प्रतिशत',
    backgroundColor: 'पृष्ठभूमि रंग',
    naming: 'आउटपुट नामकरण',
    filenamePrefix: 'फ़ाइलनाम उपसर्ग',
    filenameSuffix: 'फ़ाइलनाम प्रत्यय',
    applyToAllImages: 'सभी छवियों पर लागू करें',
    applyToAll: 'सभी छवियों पर लागू करें'
  },

  resizeModes: {
    exact: 'सटीक आयाम',
    maxDimensions: 'अधिकतम आयाम',
    percentage: 'प्रतिशत स्केलिंग',
    fit: 'अंदर फिट',
    cover: 'कवर',
    crop: 'क्रॉप'
  },

  formats: {
    original: 'स्रोत के समान',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'मूल फ़ाइलनाम',
    dimensions: 'मूल + आयाम',
    format: 'मूल + प्रारूप',
    custom: 'कस्टम पैटर्न',
    random: 'यादृच्छिक स्ट्रिंग'
  },

  output: {
    title: 'आकार बदली गई छवियां',
    downloadAll: 'सभी डाउनलोड करें',
    downloadAsZip: 'ZIP के रूप में डाउनलोड करें',
    processingStatus: 'प्रोसेसिंग: {processed}/{total}',
    originalSize: 'मूल आकार',
    newSize: 'नया आकार',
    reduction: 'कमी',
    individualDownload: 'डाउनलोड'
  },

  batch: {
    title: 'बैच प्रोसेसिंग',
    process: 'सभी छवियों को प्रोसेस करें',
    cancel: 'प्रोसेसिंग रद्द करें',
    selectPreset: 'प्रीसेट चुनें',
    savePreset: 'वर्तमान सेटिंग्स सहेजें',
    progress: 'प्रोसेसिंग प्रगति'
  },

  watermark: {
    title: 'वॉटरमार्क',
    enable: 'वॉटरमार्क जोड़ें',
    text: 'वॉटरमार्क टेक्स्ट',
    image: 'वॉटरमार्क छवि',
    position: 'स्थिति',
    opacity: 'अपारदर्शिता',
    rotation: 'घुमाव',
    size: 'आकार',
    padding: 'पैडिंग'
  },

  positions: {
    topLeft: 'ऊपर बाएं',
    topCenter: 'ऊपर केंद्र',
    topRight: 'ऊपर दाएं',
    middleLeft: 'मध्य बाएं',
    middleCenter: 'केंद्र',
    middleRight: 'मध्य दाएं',
    bottomLeft: 'नीचे बाएं',
    bottomCenter: 'नीचे केंद्र',
    bottomRight: 'नीचे दाएं'
  },

  actions: {
    resize: 'आकार बदलें',
    preview: 'पूर्वावलोकन',
    processing: 'प्रोसेसिंग...',
    reset: 'रीसेट',
    applySettings: 'सेटिंग्स लागू करें',
    resetSettings: 'सेटिंग्स रीसेट करें',
    cancel: 'रद्द करें'
  },

  messages: {
    resizeSuccess: 'छवि का आकार बदलना सफल रहा',
    resizeFailed: 'छवि का आकार बदलना विफल रहा: {error}',
    invalidDimensions: 'कृपया वैध आयाम दर्ज करें',
    invalidWidthHeight: 'कृपया वैध चौड़ाई और ऊंचाई दर्ज करें',
    noImages: 'कृपया आकार बदलने के लिए छवियां जोड़ें',
    noImagesToDownload: 'डाउनलोड करने के लिए कोई छवि उपलब्ध नहीं है',
    processing: 'छवियों को प्रोसेस किया जा रहा है...',
    processingComplete: 'प्रोसेसिंग पूर्ण',
    processingError: 'छवियों को प्रोसेस करते समय एक त्रुटि हुई',
    waitingForProcess: 'प्रोसेसिंग के लिए प्रतीक्षा कर रहा है',
    downloadStarted: 'डाउनलोड शुरू हुआ',
    allDownloaded: 'सभी छवियां डाउनलोड कर ली गई हैं',
    presetSaved: 'प्रीसेट सहेजा गया',
    presetLoaded: 'प्रीसेट लोड किया गया',
    zipCreated: '{count} छवियों वाली एक ज़िप फ़ाइल बनाई गई है',
    zipError: 'ज़िप फ़ाइल बनाते समय एक त्रुटि हुई'
  },

  preview: {
    title: 'छवि पूर्वावलोकन ({count} छवियां)',
    selectImage: 'एक छवि चुनें',
    batchSupport: 'एक बार प्रोसेसिंग के लिए कई छवियों के बैच चयन का समर्थन करता है',
    download: 'डाउनलोड',
    delete: 'हटाएं'
  },

  qualityOptions: {
    fast: 'तेज़ प्रोसेसिंग',
    medium: 'मध्यम गुणवत्ता',
    high: 'उच्च गुणवत्ता (अनुशंसित)',
    best: 'सर्वोत्तम गुणवत्ता (धीमी)'
  }
};