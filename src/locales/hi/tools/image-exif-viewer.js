export default {
  name: 'इमेज EXIF व्यूअर',
  description: 'फोटो में EXIF मेटाडेटा देखें और विश्लेषण करें',

  upload: {
    title: 'इमेज अपलोड करें',
    dropzone: 'अपनी इमेज यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
    maxSize: 'अधिकतम फ़ाइल आकार: 15MB',
    supportedFormats: 'समर्थित प्रारूप: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'कोई भी इमेज फ़ाइल जिसमें EXIF डेटा हो'
  },

  display: {
    title: 'इमेज जानकारी',
    noExif: 'इस इमेज में कोई EXIF डेटा नहीं मिला',
    basicInfo: 'बुनियादी जानकारी',
    camera: 'कैमरा जानकारी',
    exposure: 'एक्सपोज़र जानकारी',
    location: 'स्थान जानकारी',
    dates: 'दिनांक जानकारी',
    advanced: 'उन्नत EXIF डेटा',
    thumbnail: 'EXIF थंबनेल'
  },

  exif: {
    fileName: 'फ़ाइल नाम',
    fileSize: 'फ़ाइल आकार',
    fileType: 'फ़ाइल प्रकार',
    dimensions: 'आयाम',
    make: 'कैमरा निर्माता',
    model: 'कैमरा मॉडल',
    lens: 'लेंस',
    focalLength: 'फोकल लेंथ',
    focalLength35: 'फोकल लेंथ (35mm)',
    aperture: 'एपर्चर',
    fNumber: 'F-वैल्यू',
    exposureTime: 'एक्सपोज़र समय',
    shutterSpeed: 'शटर स्पीड',
    iso: 'ISO',
    exposureMode: 'एक्सपोज़र मोड',
    exposureProgram: 'एक्सपोज़र प्रोग्राम',
    meteringMode: 'मीटरिंग मोड',
    flash: 'फ्लैश',
    flashMode: 'फ्लैश मोड',
    whiteBalance: 'व्हाइट बैलेंस',
    exposureBias: 'एक्सपोज़र कंपेनसेशन',
    latitude: 'अक्षांश',
    longitude: 'देशांतर',
    altitude: 'ऊंचाई',
    locationName: 'स्थान का नाम',
    dateOriginal: 'लिया गया दिनांक',
    dateDigitized: 'डिजिटलीकरण दिनांक',
    dateModified: 'संशोधन दिनांक',
    software: 'सॉफ्टवेयर',
    artist: 'कलाकार',
    copyright: 'कॉपीराइट',
    resolution: 'रेज़ोल्यूशन',
    colorSpace: 'कलर स्पेस',
    orientation: 'ओरिएंटेशन',
    compression: 'कंप्रेशन',
    bitsPerSample: 'बिट्स प्रति सैंपल',
    maxAperture: 'अधिकतम एपर्चर',
    contrast: 'कंट्रास्ट',
    saturation: 'सैचुरेशन',
    sharpness: 'शार्पनेस',
    brightness: 'ब्राइटनेस',
    sceneCaptureType: 'सीन कैप्चर टाइप',
    gainControl: 'गेन कंट्रोल',
    serialNumber: 'सीरियल नंबर',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
  },

  map: {
    title: 'फोटो स्थान',
    show: 'मानचित्र पर दिखाएं',
    noLocation: 'कोई स्थान डेटा उपलब्ध नहीं है',
    directions: 'दिशा-निर्देश प्राप्त करें',
    copy: 'निर्देशांक कॉपी करें',
    warning: 'चेतावनी: इस इमेज में स्थान डेटा है। साझा करते समय सावधान रहें।'
  },

  actions: {
    showAll: 'सभी मेटाडेटा दिखाएं',
    hideAll: 'सभी मेटाडेटा छिपाएं',
    copyAll: 'सभी मेटाडेटा कॉपी करें',
    save: 'मेटाडेटा को JSON के रूप में सहेजें',
    removeMeta: 'मेटाडेटा हटाएं',
    download: 'मेटाडेटा के बिना इमेज डाउनलोड करें',
    viewFullSize: 'मूल आकार देखें',
    refresh: 'डेटा रीलोड करें'
  },

  settings: {
    title: 'डिस्प्ले सेटिंग्स',
    showGroups: 'मेटाडेटा समूहित करें',
    showRaw: 'रॉ वैल्यू दिखाएं',
    showTechnical: 'तकनीकी डेटा दिखाएं',
    showFiltered: 'खाली फ़ील्ड छिपाएं',
    darkMode: 'डार्क मोड',
    mapProvider: 'मानचित्र प्रदाता'
  },

  tips: {
    privacy: 'गोपनीयता टिप: फोटो में स्थान और डिवाइस जानकारी जैसे व्यक्तिगत डेटा हो सकते हैं।',
    noExif: "EXIF डेटा नहीं दिख रहा है? कुछ सोशल मीडिया प्लेटफॉर्म और इमेज एडिटिंग टूल मेटाडेटा हटा देते हैं।",
    rawView: 'सभी उपलब्ध मेटाडेटा देखने के लिए "रॉ व्यू" पर स्विच करें।'
  },

  messages: {
    copied: 'मेटाडेटा क्लिपबोर्ड पर कॉपी किया गया',
    saved: 'मेटाडेटा JSON फ़ाइल के रूप में सहेजा गया',
    noExif: 'इस इमेज में कोई EXIF डेटा नहीं मिला',
    metadataRemoved: 'मेटाडेटा हटाना सफल रहा',
    imageLoaded: 'इमेज सफलतापूर्वक लोड हुई',
    notUse: 'उपयोग नहीं किया गया',
    use: 'उपयोग किया गया',
    auto: 'ऑटो',
    manual: 'मैनुअल',
    reset: 'सफलतापूर्वक रीसेट किया गया',
    exifExtracted: 'EXIF डेटा सफलतापूर्वक निकाला गया'
  },

  error: {
    copyFailed: 'कॉपी विफल',
    exportFailed: 'निर्यात विफल',
    exifExtractionFailed: 'EXIF डेटा निकालने में विफल',
    imageLoadFailed: 'इमेज लोड करने में विफल'
  },

  orientation: {
    normal: 'सामान्य',
    horizontalFlip: 'क्षैतिज फ्लिप',
    rotate180: '180° घुमाएं',
    verticalFlip: 'ऊर्ध्वाधर फ्लिप',
    rotate90VerticalFlip: '90° दक्षिणावर्त घुमाएं और ऊर्ध्वाधर फ्लिप',
    rotate90: '90° दक्षिणावर्त घुमाएं',
    rotate90HorizontalFlip: '90° दक्षिणावर्त घुमाएं और क्षैतिज फ्लिप',
    rotate270: '90° वामावर्त घुमाएं'
  }
};