export default {
  name: 'इमेज क्रॉपर',
  description: 'सटीक रूप से छवियों को क्रॉप, रीसाइज़ और रोटेट करें',

  upload: {
    title: 'छवि अपलोड करें',
    dropzone: 'अपनी छवि यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
    maxSize: 'अधिकतम फ़ाइल आकार: 10MB',
    supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WEBP, GIF',
    select: 'क्रॉपिंग और संपादन शुरू करने के लिए कृपया एक छवि चुनें'
  },

  editor: {
    title: 'इमेज एडिटर',
    zoom: 'ज़ूम',
    rotate: 'घुमाएँ',
    flipHorizontal: 'क्षैतिज फ्लिप',
    flipVertical: 'ऊर्ध्वाधर फ्लिप',
    reset: 'छवि रीसेट करें',
    undo: 'पूर्ववत करें',
    redo: 'फिर से करें',
    dragMode: 'ड्रैग मोड',
    scaleMode: 'स्केल मोड'
  },

  crop: {
    title: 'क्रॉप सेटिंग्स',
    aspectRatio: 'आस्पेक्ट अनुपात',
    freeform: 'फ्रीफॉर्म',
    square: 'वर्ग (1:1)',
    portrait: 'पोर्ट्रेट (3:4)',
    landscape: 'लैंडस्केप (4:3)',
    widescreen: 'वाइडस्क्रीन (16:9)',
    panorama: 'पैनोरमा (2:1)',
    custom: 'कस्टम',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    unit: 'इकाई',
    pixels: 'पिक्सेल',
    percent: 'प्रतिशत',
    lockAspectRatio: 'आस्पेक्ट अनुपात लॉक करें'
  },

  presets: {
    title: 'आकार प्रीसेट',
    original: 'मूल आकार',
    social: 'सोशल मीडिया',
    facebook: 'फेसबुक',
    instagram: 'इंस्टाग्राम',
    twitter: 'ट्विटर',
    linkedin: 'लिंक्डइन',
    youtube: 'यूट्यूब',
    print: 'प्रिंट आकार',
    fourBySix: '4×6 इंच',
    fiveBySeven: '5×7 इंच',
    eightByTen: '8×10 इंच'
  },

  output: {
    title: 'आउटपुट',
    preview: 'पूर्वावलोकन',
    dimensions: 'आउटपुट आयाम',
    quality: 'गुणवत्ता',
    format: 'प्रारूप',
    fileName: 'फ़ाइल नाम',
    download: 'डाउनलोड',
    saveAs: 'इस रूप में सहेजें',
    copy: 'क्लिपबोर्ड पर कॉपी करें'
  },

  actions: {
    crop: 'छवि क्रॉप करें',
    apply: 'लागू करें',
    cancel: 'रद्द करें',
    save: 'छवि सहेजें',
    download: 'डाउनलोड',
    newImage: 'नई छवि'
  },

  messages: {
    cropSuccess: 'छवि सफलतापूर्वक क्रॉप की गई',
    downloadReady: 'आपकी क्रॉप की गई छवि डाउनलोड के लिए तैयार है',
    processing: 'छवि प्रोसेस हो रही है...',
    copied: 'छवि क्लिपबोर्ड पर कॉपी की गई है',
    invalidFile: 'अमान्य फ़ाइल। कृपया एक वैध छवि अपलोड करें।',
    fileTooLarge: 'फ़ाइल बहुत बड़ी है। अधिकतम आकार 10MB है।'
  }
};