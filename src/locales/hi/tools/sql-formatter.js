export default {
  name: 'SQL फॉर्मेटर',
  description: 'ऑनलाइन SQL फॉर्मेटिंग और वैलिडेशन टूल, कंप्रेशन और ब्यूटिफिकेशन का समर्थन करता है',
  options: {
    language: 'SQL डायलेक्ट',
    indent: 'इंडेंटेशन स्टाइल',
    spaceCount: 'स्पेस काउंट',
    keywordCase: 'कीवर्ड केस',
    uppercase: 'अपरकेस कीवर्ड्स',
    lineBreak: 'लाइन ब्रेक स्टाइल',
    tabSize: 'टैब साइज़'
  },
  languages: {
    standard: 'स्टैंडर्ड SQL',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL सर्वर)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: 'स्पेसेज़',
    tabs: 'टैब्स'
  },
  spaceOptions: {
    two: '2 स्पेसेज़',
    four: '4 स्पेसेज़'
  },
  caseOptions: {
    preserve: 'मूल रूप बनाए रखें',
    upper: 'अपरकेस',
    lower: 'लोअरकेस'
  },
  actions: {
    format: 'SQL फॉर्मेट करें',
    minify: 'SQL मिनिफाई करें',
    clear: 'क्लियर करें',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें'
  },
  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    formatSuccess: 'SQL सफलतापूर्वक फॉर्मेट किया गया',
    formatError: 'SQL फॉर्मेट करने में त्रुटि'
  },
  placeholders: {
    input: 'SQL क्वेरी यहां दर्ज करें...',
    output: 'फॉर्मेटेड SQL यहां दिखाई देगा...'
  },
  output: 'फॉर्मेटेड परिणाम',
  tips: {
    title: 'उपयोग के टिप्स',
    dialect: 'सटीक फॉर्मेटिंग के लिए उपयुक्त SQL डायलेक्ट चुनें।',
    formatting: 'अपनी पसंदीदा कोडिंग स्टाइल से मेल खाने के लिए इंडेंटेशन स्टाइल और स्पेस काउंट को कस्टमाइज़ करें।',
    keywords: 'SQL कीवर्ड्स को बनाए रखने, अपरकेस या लोअरकेस करने का चयन करें।',
    copy: 'फॉर्मेटेड SQL को जल्दी से अपने क्लिपबोर्ड पर कॉपी करने के लिए कॉपी बटन का उपयोग करें।'
  }
}