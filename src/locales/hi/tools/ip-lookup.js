export default {
  name: 'आईपी पता खोज उपकरण',
  description: 'आईपी पते का विस्तृत विवरण प्राप्त करें, जिसमें स्थान और नेटवर्क विवरण शामिल हैं',

  input: {
    title: 'आईपी पता खोज',
    ipAddress: 'आईपी पता',
    ipPlaceholder: 'आईपी पता दर्ज करें (उदाहरण: 8.8.8.8)',
    hostname: 'होस्टनाम',
    hostnamePlaceholder: 'या होस्टनाम दर्ज करें (उदाहरण: google.com)',
    options: 'खोज विकल्प',
    includeGeolocation: 'भौगोलिक स्थान शामिल करें',
    includeASN: 'ASN जानकारी शामिल करें',
    includeDomains: 'संबंधित डोमेन शामिल करें',
    includeAbuse: 'दुरुपयोग संपर्क शामिल करें',
    myIP: 'मेरा आईपी पता उपयोग करें'
  },

  actions: {
    lookup: 'आईपी खोजें',
    clear: 'परिणाम साफ़ करें',
    copyIP: 'आईपी कॉपी करें',
    copyAll: 'सभी जानकारी कॉपी करें',
    export: 'परिणाम निर्यात करें'
  },

  results: {
    title: 'आईपी जानकारी',
    noResults: 'दिखाने के लिए कोई जानकारी नहीं',
    error: 'त्रुटि: {message}',
    unknown: 'अज्ञात',
    queryTime: 'खोज समय',
    dataSource: 'डेटा स्रोत',
    general: {
      title: 'मूल जानकारी',
      ipAddress: 'आईपी पता',
      hostname: 'होस्टनाम',
      type: 'प्रकार',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'सार्वजनिक आईपी',
      yes: 'हाँ',
      no: 'नहीं',
      reverse: 'रिवर्स DNS'
    },
    location: {
      title: 'स्थान',
      country: 'देश',
      region: 'क्षेत्र',
      city: 'शहर',
      postalCode: 'पिन कोड',
      timezone: 'समय क्षेत्र',
      coordinates: 'निर्देशांक',
      latitude: 'अक्षांश',
      longitude: 'देशांतर'
    },
    network: {
      title: 'नेटवर्क',
      asn: 'ASN',
      organization: 'संगठन',
      isp: 'इंटरनेट सेवा प्रदाता',
      usage: 'उपयोग प्रकार',
      domain: 'डोमेन',
      route: 'रूट',
      subnet: 'सबनेट',
      netmask: 'नेटमास्क',
      cidr: 'CIDR नोटेशन'
    },
    security: {
      title: 'सुरक्षा जानकारी',
      threat: 'खतरा पहचान',
      isTor: 'Tor एक्जिट नोड',
      isProxy: 'प्रॉक्सी',
      isVpn: 'VPN',
      isAttacker: 'ज्ञात हमलावर',
      isAbuser: 'ज्ञात दुरुपयोगकर्ता',
      threatLevel: 'खतरा स्तर',
      confidenceScore: 'विश्वास स्कोर',
      abuseReports: 'दुरुपयोग रिपोर्ट',
      lastReported: 'अंतिम रिपोर्ट समय'
    },
    additional: {
      title: 'अतिरिक्त जानकारी',
      mobile: 'मोबाइल नेटवर्क',
      hosting: 'होस्टिंग प्रदाता',
      associated: 'संबद्ध डोमेन',
      abuseContact: 'दुरुपयोग संपर्क'
    }
  },

  map: {
    title: 'स्थान मानचित्र',
    noLocation: 'स्थान डेटा उपलब्ध नहीं',
    viewLarger: 'बड़ा मानचित्र देखें'
  },

  messages: {
    lookingUp: '{query} की जानकारी खोजी जा रही है...',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    exported: 'परिणाम सफलतापूर्वक निर्यात किए गए',
    invalidIP: 'अमान्य आईपी पता',
    invalidHostname: 'अमान्य होस्टनाम',
    publicIPOnly: 'यह उपकरण केवल सार्वजनिक आईपी पतों के लिए है',
    rateLimited: 'दर सीमा पार हो गई। कृपया बाद में पुनः प्रयास करें।',
    historyCleared: 'इतिहास साफ़ हो गया'
  },

  history: {
    title: 'खोज इतिहास',
    clear: 'इतिहास साफ़ करें'
  }
};