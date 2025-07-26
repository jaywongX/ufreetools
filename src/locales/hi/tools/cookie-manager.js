export default {
  name: 'कुकी मैनेजर',
  description: 'वर्तमान वेबसाइट के कुकीज़ देखें, बनाएं, संपादित करें और हटाएं',

  // मुख्य फंक्शन टैब्स
  currentCookies: 'वर्तमान कुकीज़',

  createCookie: 'कुकी बनाएं',
  importExport: 'इम्पोर्ट/एक्सपोर्ट',

  // कुकी लिस्ट
  noCookies: 'वर्तमान वेबसाइट पर कोई कुकीज़ नहीं हैं',

  cookieName: 'नाम',
  cookieValue: 'वैल्यू',
  cookieDomain: 'डोमेन',
  cookiePath: 'पाथ',
  cookieExpires: 'एक्सपायरी टाइम',
  cookieSecure: 'सिक्योर',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'एक्शन्स',
  edit: 'एडिट',
  delete: 'डिलीट',
  save: 'सेव',
  cancel: 'कैंसल',
  refresh: 'रिफ्रेश',

  // क्रिएट/एडिट फॉर्म
  addCookie: 'कुकी जोड़ें',

  editCookie: 'कुकी एडिट करें',
  required: 'आवश्यक',
  optional: 'वैकल्पिक',
  days: 'दिन',
  hours: 'घंटे',
  minutes: 'मिनट',
  cookieCreated: 'कुकी बना दी गई है',
  cookieUpdated: 'कुकी अपडेट कर दी गई है',
  cookieDeleted: 'कुकी डिलीट कर दी गई है',
  createError: 'कुकी बनाते समय एरर आया',
  updateError: 'कुकी अपडेट करते समय एरर आया',
  deleteError: 'कुकी डिलीट करते समय एरर आया',

  // इम्पोर्ट/एक्सपोर्ट
  export: 'कुकीज़ एक्सपोर्ट करें',

  import: 'कुकीज़ इम्पोर्ट करें',
  exportAs: 'एक्सपोर्ट फॉर्मेट',
  exportSuccess: 'कुकीज़ एक्सपोर्ट कर दी गई हैं',
  importSuccess: '{count} कुकीज़ इम्पोर्ट कर दी गई हैं',
  importError: 'कुकीज़ इम्पोर्ट करते समय एरर आया',

  // सिक्योरिटी ऑप्शन्स
  none: 'कोई नहीं',

  strict: 'स्ट्रिक्ट',
  lax: 'लैक्स',

  // टिप्स और नोट्स
  domainNote: 'खाली छोड़ने पर वर्तमान डोमेन का उपयोग होगा',

  pathNote: 'डिफॉल्ट रूट पाथ "/" है',
  expiresNote: 'सेट न करने पर सेशन कुकी होगी',
  secureNote: 'केवल HTTPS के माध्यम से भेजी जाएगी',
  httpOnlyNote: 'JavaScript द्वारा एक्सेस को प्रतिबंधित करता है',
  sameSiteNote: 'क्रॉस-साइट रिक्वेस्ट कंट्रोल',

  // इम्पोर्ट फॉर्मेट
  importFormat: 'इम्पोर्ट फॉर्मेट उदाहरण:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'JSON फॉर्मेट',
  textFormat: 'टेक्स्ट फॉर्मेट',
  invalidFormat: 'अमान्य फॉर्मेट'
};