export default {
  name: 'सील जनरेटर',
  description: 'दस्तावेजों और डिजाइनों के लिए अनुकूलित डिजिटल सील और स्टैम्प बनाएं',

  // Main interface
  text: 'सील टेक्स्ट',

  textPlaceholder: 'चारों ओर का टेक्स्ट दर्ज करें',
  centerText: 'केंद्र टेक्स्ट',
  centerTextPlaceholder: 'केंद्र टेक्स्ट या प्रतीक दर्ज करें',
  font: 'फॉन्ट',
  shape: 'आकार',
  size: 'आकार',
  color: 'रंग',
  generate: 'सील जनरेट करें',
  download: 'इमेज डाउनलोड करें',
  reset: 'रीसेट करें',
  preview: 'प्रीव्यू',
  previewPlaceholder: 'प्रीव्यू देखने के लिए "सील जनरेट करें" बटन पर क्लिक करें',
  bottomText: 'नीचे का टेक्स्ट',
  bottomTextPlaceholder: 'नीचे का टेक्स्ट दर्ज करें',
  centerSymbol: 'केंद्र प्रतीक',
  centerImage: 'केंद्र इमेज अपलोड करें',
  template: 'सील टेम्पलेट',
  centerSymbolSize: 'केंद्र प्रतीक का आकार',
  exportFormat: 'एक्सपोर्ट फॉर्मेट',
  lineWidth: 'लाइन की मोटाई',
  defaultSealText: 'कंपनी का नाम',
  defaultBottomText: 'आधिकारिक सील',
  width: 'चौड़ाई',
  height: 'ऊंचाई',
  agingEffect: 'एजिंग इफेक्ट',
  customColor: 'कस्टम रंग',

  // Font options
  fonts: {
    simsun: 'सिमसन',
    kaiti: 'काईटी',
    simhei: 'सिमहेई',
    yahei: 'माइक्रोसॉफ्ट याहेई',
    stxingkai: 'एसटी शिंगकाई',
    stzhongsong: 'एसटी झोंगसोंग',
    stfangsong: 'एसटी फांगसोंग',
    arial: 'एरियल',
    times: 'टाइम्स न्यू रोमन',
    georgia: 'जॉर्जिया'
  },

  // Shape options
  shapes: {
    circle: 'वृत्त',
    ellipse: 'अंडाकार',
    square: 'वर्ग'
  },

  // Color options
  colors: {
    red: 'लाल',
    darkRed: 'गहरा लाल',
    blue: 'नीला',
    navy: 'नेवी ब्लू',
    green: 'हरा',
    darkGreen: 'गहरा हरा',
    purple: 'बैंगनी',
    magenta: 'मैजेंटा',
    brown: 'भूरा',
    black: 'काला',
    custom: 'कस्टम रंग'
  },

  colorHex: 'हेक्स रंग मान',

  // How to use guide
  howToUse: 'उपयोग कैसे करें',

  instructions: {
    step1: 'सील के चारों ओर प्रदर्शित करने के लिए टेक्स्ट दर्ज करें, जैसे कंपनी का नाम या व्यक्तिगत नाम',
    step2: 'केंद्र टेक्स्ट या प्रतीक चुनें, जैसे तारा, लोगो, या अन्य प्रतीक',
    step3: 'सील के आकार, साइज़, और रंग को समायोजित करके प्रभाव का पूर्वावलोकन करें',
    step4: 'जब संतुष्ट हों, तो अपनी कस्टम सील को सहेजने के लिए "इमेज डाउनलोड करें" बटन पर क्लिक करें'
  },

  templates: {
    custom: 'कस्टम',
    company: 'कंपनी सील',
    contract: 'अनुबंध सील',
    finance: 'वित्त सील',
    legal: 'कानूनी सील',
    personal: 'व्यक्तिगत सील'
  }
};