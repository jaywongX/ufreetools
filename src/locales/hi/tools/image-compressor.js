export default {
  name: 'इमेज कंप्रेसर',
  description: 'गुणवत्ता बनाए रखते हुए छवियों को कंप्रेस और अनुकूलित करें',

  input: {
    dragDrop: 'छवियों को यहां खींचें और छोड़ें या अपलोड करने के लिए क्लिक करें',
    supportedFormats: 'JPG, PNG, GIF, WEBP प्रारूपों का समर्थन करता है',
    selected: '{count} फ़ाइलें चयनित',
    changeFiles: 'फ़ाइलें बदलें',
    width: 'चौड़ाई',
    height: 'ऊंचाई',
    keepOriginal: 'मूल आयामों को बनाए रखने के लिए 0 पर सेट करें'
  },

  results: {
    originalImage: 'मूल छवि',
    compressedImage: 'कंप्रेशन के बाद',
    filename: 'फ़ाइल नाम:',
    dimensions: 'आयाम:',
    fileSize: 'फ़ाइल आकार:',
    compressionRatio: 'कंप्रेशन अनुपात:',
    viewOriginal: 'मूल देखें'
  },

  about: {
    title: 'इमेज कंप्रेशन के बारे में',
    description: 'यह टूल ब्राउज़र के Canvas API का उपयोग करके छवियों को कंप्रेस करता है। सभी प्रोसेसिंग आपके डिवाइस पर होती है, और कोई भी छवि सर्वर पर अपलोड नहीं की जाती है।',
    principlesTitle: 'कंप्रेशन सिद्धांत:',
    principles: {
      resize: 'छवियों का आकार बदलें: छोटे आयाम का अर्थ है कम पिक्सेल डेटा',
      quality: 'गुणवत्ता कम करें: छवि गुणवत्ता पैरामीटर को कम करने से फ़ाइल का आकार कम होता है',
      format: 'प्रारूप परिवर्तित करें: विभिन्न छवि प्रारूपों में विभिन्न कंप्रेशन विशेषताएं होती हैं'
    },
    useCasesTitle: 'उपयोग के मामले:',
    useCases: {
      web: 'लोडिंग स्पीड में सुधार के लिए वेबसाइट छवियों को अनुकूलित करें',
      email: 'ईमेल अटैचमेंट के आकार को कम करें',
      social: 'सोशल मीडिया पर अपलोड करने से पहले छवियों को कंप्रेस करें',
      storage: 'स्टोरेज स्पेस को अनुकूलित करें'
    }
  },

  options: {
    quality: 'गुणवत्ता',
    qualityValue: 'गुणवत्ता ({value}%)',
    lowQuality: 'कम गुणवत्ता/छोटी फ़ाइल',
    highQuality: 'उच्च गुणवत्ता/बड़ी फ़ाइल',
    format: 'आउटपुट प्रारूप',
    maxSize: 'अधिकतम आयाम ({width} × {height} px)',
    keepExif: 'EXIF डेटा संरक्षित करें',
    resizeImage: 'छवि का आकार बदलें',
    maxWidth: 'अधिकतम चौड़ाई',
    maxHeight: 'अधिकतम ऊंचाई',
    compressionLevel: 'कंप्रेशन स्तर',
    maxFileSize: 'लक्षित फ़ाइल आकार',
    optimizationLevel: 'अनुकूलन स्तर',
    convertTo: 'में परिवर्तित करें'
  },

  presets: {
    web: 'वेब अनुकूलन',
    highQuality: 'उच्च गुणवत्ता',
    balanced: 'संतुलित',
    smallSize: 'छोटा आकार',
    custom: 'कस्टम'
  },

  formats: {
    original: 'मूल प्रारूप',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG प्रारूप फोटो के लिए उपयुक्त है और पारदर्शी बैकग्राउंड का समर्थन नहीं करता है',
    png: 'PNG',
    pngDesc: 'PNG प्रारूप पारदर्शी बैकग्राउंड का समर्थन करता है और आइकन और चित्रों के लिए उपयुक्त है',
    webp: 'WebP',
    webpDesc: 'WebP प्रारूप उच्च कंप्रेशन दर प्रदान करता है और वेब उपयोग के लिए उपयुक्त है',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'आकार न बदलें',
    maxDimension: 'अधिकतम आयाम',
    exactDimensions: 'सटीक आयाम',
    percentage: 'प्रतिशत स्केलिंग'
  },

  actions: {
    upload: 'छवियां अपलोड करें',
    compress: 'कंप्रेस करें',
    processing: 'प्रोसेसिंग...',
    download: 'डाउनलोड करें',
    downloadAll: 'सभी डाउनलोड करें',
    batchDownload: 'बैच डाउनलोड',
    clear: 'साफ़ करें',
    addMore: 'अधिक छवियां जोड़ें',
    removeAll: 'सभी हटाएं',
    preview: 'पूर्वावलोकन',
    delete: 'हटाएं'
  },

  table: {
    filename: 'फ़ाइल नाम',
    originalSize: 'मूल आकार',
    original: 'मूल फ़ाइल आकार',
    compressedSize: 'कंप्रेस्ड आकार',
    compressed: 'कंप्रेस्ड फ़ाइल आकार',
    savings: 'बचत',
    ratio: 'कंप्रेशन अनुपात',
    quality: 'गुणवत्ता',
    dimensions: 'आयाम',
    originalDimensions: 'मूल आयाम',
    newDimensions: 'नए आयाम',
    status: 'स्थिति'
  },

  messages: {
    dropped: '{count} छवियां ड्रॉप की गईं',
    uploading: 'छवियां अपलोड हो रही हैं...',
    compressing: 'छवियां कंप्रेस हो रही हैं...',
    compressed: 'छवियां सफलतापूर्वक कंप्रेस की गईं',
    downloadPreparing: 'डाउनलोड तैयार हो रहा है...',
    downloadReady: 'डाउनलोड तैयार है',
    cleared: 'सभी छवियां साफ़ की गईं',
    tooManyFiles: 'बहुत अधिक फ़ाइलें। अधिकतम अनुमति: {max}',
    fileTooLarge: 'फ़ाइल बहुत बड़ी है। अधिकतम अनुमति: {max}MB',
    unsupportedFormat: 'असमर्थित फ़ाइल प्रारूप: {format}',
    imageError: 'छवि को प्रोसेस करते समय एक त्रुटि हुई: {error}',
    batchDownloadNotSupported: 'बैच डाउनलोड सुविधा के लिए JSZip लाइब्रेरी जोड़ने की आवश्यकता है। कृपया छवियों को व्यक्तिगत रूप से डाउनलोड करें या ज़िप लाइब्रेरी समर्थन जोड़ें।',
    batchDownloadError: 'बैच डाउनलोड के दौरान एक त्रुटि हुई: {error}',
    invalidImage: 'कृपया एक वैध छवि फ़ाइल चुनें'
  }
};