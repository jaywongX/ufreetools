export default {
  name: 'संवेदनशील शब्द फिल्टर',
  description: 'टेक्स्ट में संवेदनशील शब्दों का पता लगाएं और फिल्टर करें, कस्टम शब्द लाइब्रेरी और फिल्टरिंग नियमों का समर्थन करता है',

  input: {
    title: 'इनपुट टेक्स्ट',
    placeholder: 'जांच के लिए टेक्स्ट दर्ज करें...',
    loadSample: 'सैंपल लोड करें',
    clearInput: 'इनपुट साफ़ करें',
    uploadFile: 'टेक्स्ट फाइल अपलोड करें'
  },

  output: {
    title: 'फिल्टर किया गया टेक्स्ट',
    original: 'मूल टेक्स्ट',
    filtered: 'फिल्टर किया गया टेक्स्ट',
    statistics: 'आंकड़े',
    copyOutput: 'फिल्टर किया गया टेक्स्ट कॉपी करें',
    clearOutput: 'आउटपुट साफ़ करें',
    download: 'फिल्टर किया गया टेक्स्ट डाउनलोड करें'
  },

  options: {
    title: 'फिल्टर विकल्प',
    filterMode: 'फिल्टर मोड',
    caseSensitive: 'केस सेंसिटिव',
    wholeWordOnly: 'केवल पूरे शब्द',
    customReplacement: 'कस्टम प्रतिस्थापन',
    replacementChar: 'प्रतिस्थापन वर्ण',
    highlightWords: 'शब्द हाइलाइट करें',
    customDictionary: 'कस्टम डिक्शनरी',
    importDictionary: 'डिक्शनरी आयात करें',
    exportDictionary: 'डिक्शनरी निर्यात करें'
  },

  filterModes: {
    replace: 'शब्द बदलें',
    highlight: 'शब्द हाइलाइट करें',
    remove: 'शब्द हटाएं',
    detect: 'केवल पता लगाएं'
  },

  dictionary: {
    title: 'शब्द डिक्शनरी',
    add: 'शब्द जोड़ें',
    remove: 'हटाएं',
    clear: 'डिक्शनरी साफ़ करें',
    wordInput: 'जोड़ने के लिए एक शब्द दर्ज करें',
    categories: 'श्रेणियां',
    severity: 'गंभीरता',
    bulkAdd: 'बल्क जोड़ें',
    search: 'डिक्शनरी खोजें'
  },

  categories: {
    profanity: 'अश्लीलता',
    slurs: 'अपमानजनक शब्द',
    adult: 'वयस्क सामग्री',
    offensive: 'आक्रामक',
    violence: 'हिंसा',
    discrimination: 'भेदभाव',
    personal: 'व्यक्तिगत जानकारी',
    custom: 'कस्टम'
  },

  severityLevels: {
    low: 'निम्न',
    medium: 'मध्यम',
    high: 'उच्च',
    critical: 'अत्यंत गंभीर'
  },

  statistics: {
    totalWords: 'कुल शब्द',
    sensitiveWords: 'संवेदनशील शब्द',
    uniqueSensitiveWords: 'अद्वितीय संवेदनशील शब्द',
    severityBreakdown: 'गंभीरता विश्लेषण',
    categoryBreakdown: 'श्रेणी विश्लेषण',
    cleanlinessScore: 'स्वच्छता स्कोर'
  },

  filterOptions: {
    title: 'फिल्टर मोड',
    modes: {
      asterisk: '* से बदलें',
      custom: 'कस्टम प्रतिस्थापन वर्ण',
      remove: 'संवेदनशील शब्द हटाएं'
    },
    replaceChar: {
      title: 'प्रतिस्थापन वर्ण',
      placeholder: 'प्रतिस्थापन वर्ण दर्ज करें'
    }
  },

  customWords: {
    title: 'कस्टम संवेदनशील शब्द लाइब्रेरी',
    addWord: 'शब्द जोड़ें',
    addPrompt: 'कृपया जोड़ने के लिए संवेदनशील शब्द दर्ज करें:',
    removeWord: 'हटाएं'
  },

  actions: {
    filter: 'फिल्टरिंग शुरू करें',
    reset: 'रीसेट करें',
    processing: 'प्रोसेसिंग...',
    clearAll: 'सभी साफ़ करें',
    copyFiltered: 'फिल्टर किया गया कॉपी करें',
    downloadReport: 'रिपोर्ट डाउनलोड करें',
    resetSettings: 'सेटिंग्स रीसेट करें'
  },

  results: {
    title: 'फिल्टर परिणाम',
    tabs: {
      filteredResult: 'फिल्टर किया गया परिणाम',
      detectionReport: 'डिटेक्शन रिपोर्ट'
    },
    filteredText: {
      title: 'फिल्टर किया गया टेक्स्ट',
      copy: 'परिणाम कॉपी करें',
      empty: 'प्रदर्शित करने के लिए कोई फिल्टर किया गया टेक्स्ट नहीं है'
    },
    statistics: {
      detectedCount: 'पता लगाए गए संवेदनशील शब्द',
      retentionRate: 'टेक्स्ट रिटेंशन रेट',
      totalWords: 'कुल वर्ण गिनती'
    },
    detectedWords: {
      title: 'पता लगाए गए संवेदनशील शब्द',
      empty: 'कोई संवेदनशील शब्द नहीं मिला'
    }
  },

  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें',
    noInput: 'कृपया फिल्टर करने के लिए टेक्स्ट दर्ज करें',
    inputTooLong: 'इनपुट टेक्स्ट बहुत लंबा है',
    wordAdded: 'शब्द संवेदनशील शब्द लाइब्रेरी में जोड़ा गया',
    wordExists: 'यह शब्द पहले से ही लाइब्रेरी में मौजूद है',
    wordRemoved: 'शब्द लाइब्रेरी से हटाया गया',
    filterSuccess: 'टेक्स्ट सफलतापूर्वक फिल्टर किया गया',
    noSensitiveWords: 'कोई संवेदनशील शब्द नहीं मिला',
    dictionaryCleared: 'डिक्शनरी साफ़ की गई',
    dictionaryImported: 'डिक्शनरी आयात की गई',
    dictionaryExported: 'डिक्शनरी निर्यात की गई',
    emptyText: 'कृपया फिल्टर करने के लिए टेक्स्ट दर्ज करें'
  }
};