export default {
  name: 'टाइमस्टैम्प कन्वर्टर',
  description: 'टाइमस्टैम्प और मानव-पठनीय तिथियों के बीच कई प्रारूपों और टाइमज़ोन के साथ रूपांतरण करें',

  options: {
    inputType: 'इनपुट प्रकार',
    outputFormat: 'आउटपुट प्रारूप',
    timezone: 'टाइमज़ोन',
    includeTime: 'समय शामिल करें',
    format: 'प्रारूप स्ट्रिंग'
  },

  inputTypes: {
    timestamp: 'यूनिक्स टाइमस्टैम्प',
    milliseconds: 'यूनिक्स मिलीसेकंड',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'तिथि स्ट्रिंग'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'लोकेल प्रारूप',
    relative: 'सापेक्ष समय',
    custom: 'कस्टम प्रारूप'
  },

  actions: {
    convert: 'कन्वर्ट करें',
    nowTimestamp: 'वर्तमान टाइमस्टैम्प',
    nowDate: 'वर्तमान तिथि',
    copy: 'कॉपी करें',
    clear: 'क्लियर करें',
    refresh: 'रिफ्रेश करें',
    switch: 'स्विच करें'
  },

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    convertSuccess: 'रूपांतरण सफल',
    convertError: 'टाइमस्टैम्प कन्वर्ट करने में त्रुटि',
    invalidInput: 'अमान्य इनपुट प्रारूप',
    invalidFormat: 'अमान्य प्रारूप स्ट्रिंग'
  },

  timeUnits: {
    milliseconds: 'मिलीसेकंड',
    seconds: 'सेकंड',
    minutes: 'मिनट',
    hours: 'घंटे',
    days: 'दिन'
  },

  labels: {
    unixTimestamp: 'यूनिक्स टाइमस्टैम्प (सेकंड)',
    dateTime: 'तिथि समय',
    inputValue: 'इनपुट मान',
    unitConversion: 'समय इकाई रूपांतरण',
    timeUnitLabel: 'समय इकाई'
  },

  placeholders: {
    enterTimestamp: 'यूनिक्स टाइमस्टैम्प दर्ज करें',
    enterValue: 'एक संख्यात्मक मान दर्ज करें'
  },

  info: {
    aboutTimestamp: 'यूनिक्स टाइमस्टैम्प के बारे में',
    timestampDescription: 'यूनिक्स टाइमस्टैम्प 1 जनवरी, 1970 (UTC) से बीते हुए सेकंडों की संख्या का प्रतिनिधित्व करता है। यह समय प्रतिनिधित्व के लिए कंप्यूटर सिस्टम और एप्लिकेशन में व्यापक रूप से उपयोग किया जाता है।',
    commonUsage: 'सामान्य उपयोग:',
    usages: {
      database: 'डेटाबेस टाइमस्टैम्प रिकॉर्ड',
      api: 'API संचार में समय प्रतिनिधित्व',
      logging: 'लॉग एंट्रीज',
      filesystem: 'फाइल सिस्टम टाइमस्टैम्प'
    }
  }
};