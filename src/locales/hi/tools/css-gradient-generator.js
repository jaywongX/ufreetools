export default {
  name: 'ग्रेडिएंट कलर जनरेटर',
  description: 'रीयल-टाइम प्रीव्यू के साथ सुंदर CSS ग्रेडिएंट बनाएं और कस्टमाइज़ करें और कोड को अपने प्रोजेक्ट में कॉपी करें',

  gradientTypes: {
    title: 'ग्रेडिएंट प्रकार',
    linear: 'लीनियर ग्रेडिएंट',
    radial: 'रेडियल ग्रेडिएंट',
    conic: 'कोनिक ग्रेडिएंट'
  },

  controls: {
    title: 'कलर कंट्रोल्स',
    addColor: 'कलर जोड़ें',
    color: 'रंग',
    position: 'स्थिति (%)',
    delete: 'कलर हटाएं',
    angle: 'कोण',
    degrees: 'डिग्री',
    shape: 'आकार',
    circle: 'वृत्त',
    ellipse: 'अंडाकार',
    positionX: 'स्थिति X (%)',
    positionY: 'स्थिति Y (%)',
    size: 'आकार',
    closestSide: 'निकटतम किनारा',
    closestCorner: 'निकटतम कोना',
    farthestSide: 'सबसे दूर का किनारा',
    farthestCorner: 'सबसे दूर का कोना',
    fromAngle: 'प्रारंभिक कोण'
  },

  output: {
    title: 'CSS कोड',
    copyCode: 'कोड कॉपी करें',
    preview: 'प्रीव्यू क्षेत्र',
    copied: 'CSS कोड क्लिपबोर्ड पर कॉपी किया गया!',
    download: 'PNG डाउनलोड करें'
  },

  presets: {
    title: 'ग्रेडिएंट प्रीसेट्स',
    apply: 'प्रीसेट लागू करें',
    sunnyMorning: 'सनी मॉर्निंग',
    winterNeva: 'नेवा में सर्दी',
    rareWind: 'रेयर विंड',
    deepBlue: 'डीप ब्लू',
    perfect: 'परफेक्ट व्हाइट',
    cloudyKnoxville: 'क्लाउडी नॉक्सविले',
    greenBeach: 'ग्रीन बीच',
    plumBath: 'प्लम बाथ',
    everlasting: 'एवरलास्टिंग स्काई'
  },

  accessibility: {
    colorPicker: 'कलर पिकर',
    deleteSwatch: 'कलर स्टॉप हटाएं',
    dragToReposition: 'कलर स्टॉप को पुनः स्थापित करने के लिए खींचें'
  },

  actions: {
    reset: 'रीसेट करें',
    generateCSS: 'CSS जनरेट करें',
    clickToCopy: 'कोड कॉपी करने के लिए क्लिक करें',
    completeEdit: 'संपादन पूरा करें'
  },

  messages: {
    copied: 'CSS कोड क्लिपबोर्ड पर कॉपी किया गया!',
    noColors: 'ग्रेडिएंट बनाने के लिए कम से कम दो रंग जोड़ें',
    maxColors: 'अधिकतम कलर स्टॉप्स की संख्या पहुंच गई (10)',
    useKeyboard: 'चयनित कलर स्टॉप को हटाने के लिए डिलीट कुंजी का उपयोग करें',
    invalidHex: 'कृपया एक वैध हेक्साडेसिमल कलर कोड दर्ज करें',
    downloadError: 'PNG डाउनलोड करने में विफल, कृपया बाद में पुनः प्रयास करें',
    preview: 'प्रीव्यू'
  },

  anglePresets: {
    top: 'ऊपर',
    topRight: 'ऊपर दाएं',
    right: 'दाएं',
    bottomRight: 'नीचे दाएं',
    bottom: 'नीचे',
    bottomLeft: 'नीचे बाएं',
    left: 'बाएं',
    topLeft: 'ऊपर बाएं'
  },

  radialShapes: {
    circle: 'वृत्त',
    ellipse: 'अंडाकार'
  },

  radialSizes: {
    farthestCorner: 'सबसे दूर का कोना',
    closestCorner: 'निकटतम कोना',
    farthestSide: 'सबसे दूर का किनारा',
    closestSide: 'निकटतम किनारा',
  }
};