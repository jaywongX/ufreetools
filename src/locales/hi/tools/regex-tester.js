export default {
  name: 'रेगुलर एक्सप्रेशन टेस्टर',
  description: 'रीयल-टाइम हाइलाइटिंग और व्याख्या के साथ रेगुलर एक्सप्रेशन का परीक्षण और डिबग करें',

  actions: {
    test: 'परीक्षण करें',
    clear: 'साफ़ करें',
    showExamples: 'उदाहरण दिखाएं',
    hideExamples: 'उदाहरण छिपाएं',
    copy: 'कॉपी करें'
  },

  sections: {
    examples: 'सामान्य रेगुलर एक्सप्रेशन उदाहरण',
    pattern: 'रेगुलर एक्सप्रेशन पैटर्न',
    input: 'परीक्षण स्ट्रिंग',
    results: 'मिलान परिणाम',
    flags: 'फ्लैग'
  },

  flags: {
    g: 'वैश्विक मिलान (g)',
    i: 'केस-असंवेदनशील (i)',
    m: 'मल्टीलाइन (m)',
    s: 'डॉट ऑल (s)',
    u: 'यूनिकोड (u)',
    y: 'स्टिकी (y)'
  },

  errors: {
    emptyRegex: 'कृपया रेगुलर एक्सप्रेशन दर्ज करें',
    emptyTestString: 'कृपया परीक्षण के लिए टेक्स्ट दर्ज करें',
    invalidRegex: 'अमान्य रेगुलर एक्सप्रेशन'
  },

  messages: {
    matchesFound: '{count} मिलान मिले',
    noMatches: 'कोई मिलान नहीं मिला',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!'
  },

  placeholders: {
    pattern: 'रेगुलर एक्सप्रेशन पैटर्न दर्ज करें',
    testString: 'परीक्षण के लिए टेक्स्ट दर्ज करें'
  },

  options: {
    flags: 'फ्लैग',
    global: 'वैश्विक मिलान (g)',
    caseInsensitive: 'केस-असंवेदनशील (i)',
    multiline: 'मल्टीलाइन (m)',
    dotAll: 'डॉट ऑल (s)',
    unicode: 'यूनिकोड (u)',
    sticky: 'स्टिकी (y)'
  },

  labels: {
    pattern: 'रेगुलर एक्सप्रेशन',
    testString: 'परीक्षण स्ट्रिंग',
    matches: 'मिलान',
    groups: 'समूह',
    noMatches: 'कोई मिलान नहीं मिला'
  },

  tips: {
    title: 'उपयोग के सुझाव',
    pattern: 'रेगुलर एक्सप्रेशन पैटर्न दर्ज करते समय स्लैश (/) शामिल करने की आवश्यकता नहीं है।',
    flags: 'पैटर्न मिलान व्यवहार को संशोधित करने के लिए फ्लैग का उपयोग करें (g: वैश्विक, i: केस-असंवेदनशील, m: मल्टीलाइन)।',
    examples: 'सामान्य रेगेक्स पैटर्न देखने और उपयोग करने के लिए "उदाहरण दिखाएं" पर क्लिक करें।',
    testing: 'पैटर्न और परीक्षण स्ट्रिंग दर्ज करने के बाद, मिलान देखने के लिए "परीक्षण करें" पर क्लिक करें।'
  },

  match: 'मिलान',
  position: 'स्थिति',
  group: 'समूह',
  resultsWillAppearHere: 'रेगुलर एक्सप्रेशन मिलान परिणाम यहां दिखाई देंगे...',
  regexError: 'रेगुलर एक्सप्रेशन त्रुटि: {message}',
  emailAddress: 'ईमेल पता',
  phoneNumber: 'फोन नंबर (चीन)',
  ipAddress: 'आईपी पता',
  dateFormat: 'दिनांक (yyyy-mm-dd)',
  chineseCharacters: 'चीनी अक्षर',
  phoneNumberExample: 'संपर्क: 13912345678\nवीचैट: 18887654321\nलैंडलाइन: 010-12345678',
  urlExample: 'देखें https://example.com\nया http://www.domain.org/path?query=value',
  ipAddressExample: 'सर्वर पता: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'प्रारंभ तिथि: 2023-01-15\nसमाप्ति तिथि: 2023-02-28\nअमान्य तिथि: 2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
};