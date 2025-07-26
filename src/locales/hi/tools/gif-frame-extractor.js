export default {
  name: 'GIF फ्रेम एक्सट्रैक्टर',
  description: 'GIF एनिमेशन से व्यक्तिगत फ्रेम निकालें',
  uploadBtn: 'GIF चुनें',
  resetBtn: 'रीसेट करें',
  extractBtn: 'फ्रेम निकालें',
  extractingBtn: 'निकाल रहे हैं...',
  downloadAllBtn: 'सभी फ्रेम डाउनलोड करें',

  upload: {
    title: 'GIF अपलोड करें',
    dropzone: 'अपनी GIF फाइल यहां ड्रॉप करें या ब्राउज़ करने के लिए क्लिक करें',
    maxSize: 'अधिकतम फाइल आकार: 20MB',
    onlyGif: 'केवल GIF फाइलें समर्थित हैं',
    selectGif: 'कृपया एक GIF फाइल चुनें'
  },

  analysis: {
    title: 'GIF जानकारी',
    dimensions: 'आयाम',
    frameCount: 'फ्रेम संख्या',
    duration: 'अवधि',
    fps: 'प्रति सेकंड फ्रेम',
    fileSize: 'फाइल आकार',
    loopCount: 'लूप संख्या',
    infinite: 'अनंत',
    fileName: 'फाइल नाम',
    size: 'आकार',
    totalFrames: 'कुल फ्रेम',
    notExtracted: 'निकाला नहीं गया'
  },

  extraction: {
    title: 'फ्रेम निष्कर्षण',
    selectFrames: 'फ्रेम चुनें',
    allFrames: 'सभी फ्रेम',
    rangeOfFrames: 'फ्रेम रेंज',
    from: 'से',
    to: 'तक',
    specificFrames: 'विशिष्ट फ्रेम',
    frameNumbers: 'फ्रेम नंबर (अल्पविराम से अलग)',
    everyNth: 'हर N-वां फ्रेम',
    nth: 'हर',
    frames: 'फ्रेम',
    selectFirst: 'पहला फ्रेम',
    selectLast: 'अंतिम फ्रेम',
    selectMiddle: 'मध्य फ्रेम',
    selectKeyFrames: 'स्वचालित रूप से की-फ्रेम का पता लगाएं'
  },

  output: {
    title: 'निर्यात सेटिंग्स',
    format: 'आउटपुट प्रारूप',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: 'स्केलिंग',
    originalSize: 'मूल आकार',
    customSize: 'कस्टम आकार',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    quality: 'गुणवत्ता',
    qualityValue: 'गुणवत्ता: {value}%',
    lowQuality: 'निम्न गुणवत्ता (छोटी फाइल)',
    highQuality: 'उच्च गुणवत्ता (बड़ी फाइल)',
    naming: 'फाइल नामकरण',
    pattern: 'पैटर्न',
    filename: 'मूल फाइलनाम',
    framenumber: 'फ्रेम नंबर',
    timestamp: 'टाइमस्टैम्प',
    preview: 'पूर्वावलोकन',
    downloadOptions: 'डाउनलोड विकल्प',
    separateFiles: 'अलग फाइलें',
    zipArchive: 'ZIP आर्काइव',
    spritesheet: 'स्प्राइटशीट',
    gridSize: 'ग्रिड आकार',
    columns: 'कॉलम',
    animation: 'नया एनिमेशन'
  },

  frames: {
    title: 'निकाले गए फ्रेम',
    frameInfo: '{total} में से फ्रेम {number}',
    frame: 'फ्रेम',
    delay: 'देरी: {delay} ms',
    downloadFrame: 'डाउनलोड करें',
    copyFrame: 'कॉपी करें',
    selectAll: 'सभी चुनें',
    unselectAll: 'सभी अचयनित करें',
    invertSelection: 'चयन उलटें',
    noFrames: 'अभी तक कोई फ्रेम नहीं निकाला गया है',
    extractFirst: 'कृपया पहले फ्रेम निकालें'
  },

  actions: {
    extract: 'फ्रेम निकालें',
    preview: 'पूर्वावलोकन',
    downloadSelected: 'चयनित डाउनलोड करें',
    downloadAll: 'सभी डाउनलोड करें',
    createSpritesheet: 'स्प्राइटशीट बनाएं',
    createNewGif: 'नई GIF बनाएं',
    cancel: 'रद्द करें',
    processing: 'प्रोसेसिंग...'
  },

  messages: {
    extractionComplete: 'फ्रेम निष्कर्षण पूर्ण',
    extracting: 'फ्रेम निकाल रहे हैं...',
    noFramesSelected: 'कोई फ्रेम चयनित नहीं',
    processingGif: 'GIF प्रोसेस कर रहे हैं...',
    invalidGif: 'अमान्य GIF फाइल',
    framesCopied: 'फ्रेम क्लिपबोर्ड पर कॉपी किए गए',
    downloadStarted: 'डाउनलोड शुरू हुआ',
    spritesheetCreated: 'स्प्राइटशीट सफलतापूर्वक बनाई गई',
    frameDownloaded: 'फ्रेम डाउनलोड किया गया',
    preparingFrames: 'सभी फ्रेम तैयार कर रहे हैं, कृपया प्रतीक्षा करें...',
    allFramesDownloaded: 'सभी फ्रेम डाउनलोड किए गए',
    downloadError: 'सभी फ्रेम डाउनलोड करने में विफल',
    resetComplete: 'रीसेट पूर्ण',
    fileEmpty: 'फाइल डेटा खाली है'
  }
};