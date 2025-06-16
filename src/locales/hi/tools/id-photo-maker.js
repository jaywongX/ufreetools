export default {
  name: 'आईडी फोटो मेकर',
  description: 'अनुकूलन योग्य पृष्ठभूमि और आयामों के साथ पेशेवर आईडी फोटो बनाएं',
  upload: {
    title: 'छवि अपलोड करें',
    dropzone: 'अपनी छवि यहां खींचें या ब्राउज़ करने के लिए क्लिक करें',
    or: 'या',
    camera: 'कैमरे से फोटो लें',
    constraints: 'अधिकतम आकार: 10MB. प्रारूप: JPG, PNG, WEBP',
    takePicture: 'तस्वीर लें',
    retake: 'फिर से लें'
  },
  editing: {
    title: 'फोटो संपादित करें',
    faceDetection: 'चेहरा पहचान',
    autoDetect: 'चेहरे को स्वचालित रूप से पहचानें',
    manualMode: 'मैनुअल समायोजन',
    zoom: 'ज़ूम',
    rotate: 'घुमाएँ',
    brightness: 'चमक',
    contrast: 'कंट्रास्ट',
    saturation: 'संतृप्ति',
    filters: 'फिल्टर'
  },
  background: {
    title: 'पृष्ठभूमि',
    original: 'मूल',
    white: 'सफेद',
    blue: 'नीला',
    red: 'लाल',
    custom: 'कस्टम रंग',
    transparent: 'पारदर्शी'
  },
  size: {
    title: 'फोटो का आकार',
    presets: 'आकार प्रीसेट',
    custom: 'कस्टम आकार',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    unit: 'इकाई',
    mm: 'मिमी',
    inches: 'इंच',
    pixels: 'पिक्सेल'
  },
  presets: {
    passport: 'पासपोर्ट (35×45मिमी)',
    visa: 'वीज़ा (2×2 इंच)',
    drivingLicense: 'ड्राइविंग लाइसेंस (2.5×3 इंच)',
    idCard: 'आईडी कार्ड (25×35मिमी)',
    linkedin: 'लिंक्डइन (400×400 पिक्सेल)',
    schengen: 'शेंगेन वीज़ा (35×45मिमी)',
    chinese: 'चीनी वीज़ा (33×48मिमी)',
    indian: 'भारतीय वीज़ा (2×2 इंच)'
  },
  output: {
    title: 'आउटपुट',
    preview: 'पूर्वावलोकन',
    grid: 'कई फोटो',
    columns: 'कॉलम',
    rows: 'पंक्तियाँ',
    spacing: 'अंतराल',
    background: 'पृष्ठ पृष्ठभूमि',
    paperSize: 'कागज़ का आकार',
    download: 'डाउनलोड',
    print: 'प्रिंट',
    downloadAs: 'इस रूप में डाउनलोड करें',
    jpg: 'JPG छवि',
    png: 'PNG छवि',
    pdf: 'PDF दस्तावेज़'
  },
  actions: {
    apply: 'लागू करें',
    reset: 'रीसेट',
    undo: 'पूर्ववत करें',
    redo: 'फिर से करें',
    save: 'फोटो सहेजें',
    share: 'साझा करें'
  },
  messages: {
    noFaceDetected: 'कोई चेहरा नहीं मिला। मैनुअल समायोजन या अलग फोटो का प्रयास करें।',
    multipleFacesDetected: 'कई चेहरे पहचाने गए। सबसे बड़े चेहरे का उपयोग किया जा रहा है।',
    processing: 'आपके फोटो को प्रोसेस किया जा रहा है...',
    downloadReady: 'आपका फोटो डाउनलोड के लिए तैयार है',
    photoSaved: 'फोटो सफलतापूर्वक सहेजा गया'
  }
}