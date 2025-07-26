export default {
  name: 'MQTT टेस्टर',
  description: 'MQTT कनेक्शन का परीक्षण और डिबग करें, संदेश प्रकाशित करें, और विषयों की सदस्यता लें',

  connection: {
    title: 'कनेक्शन',
    broker: 'पोर्ट',
    url: 'ब्रोकर URL',
    urlPlaceholder: 'उदा., mqtt://broker.example.com:1883',
    clientId: 'क्लाइंट ID',
    clientIdPlaceholder: 'क्लाइंट ID दर्ज करें या यादृच्छिक के लिए खाली छोड़ दें',
    username: 'उपयोगकर्ता नाम',
    password: 'पासवर्ड',
    keepAlive: 'जीवित रखें',
    cleanSession: 'क्लीन सेशन',
    autoReconnect: 'ऑटो रीकनेक्ट',
    ssl: 'SSL/TLS का उपयोग करें',
    sslOptions: 'SSL/TLS विकल्प',
    protocol: 'प्रोटोकॉल संस्करण',
    portInfo: 'डिफ़ॉल्ट पोर्ट: MQTT(1883), WebSocket(8083)',
    connect: 'कनेक्ट करें',
    disconnect: 'डिस्कनेक्ट करें',
    status: 'स्थिति',
    connected: 'कनेक्टेड',
    disconnected: 'डिस्कनेक्टेड',
    connecting: 'कनेक्ट हो रहा है...'
  },

  publish: {
    title: 'प्रकाशित करें',
    topic: 'विषय',
    topicPlaceholder: 'प्रकाशित करने के लिए विषय दर्ज करें',
    message: 'संदेश',
    messagePlaceholder: 'संदेश पेलोड दर्ज करें',
    qos: 'QoS',
    retain: 'रिटेन',
    format: 'पेलोड प्रारूप',
    text: 'टेक्स्ट',
    json: 'JSON',
    hex: 'हेक्स',
    binary: 'बाइनरी',
    send: 'प्रकाशित करें',
    clear: 'साफ़ करें',
    history: 'इतिहास',
    addToFavorites: 'पसंदीदा में जोड़ें',
    validateJson: 'JSON मान्य करें'
  },

  subscribe: {
    title: 'सदस्यता लें',
    topic: 'विषय',
    topicPlaceholder: 'सदस्यता लेने के लिए विषय दर्ज करें (वाइल्डकार्ड # और + का समर्थन करता है)',
    qos: 'QoS',
    subscribe: 'सदस्यता लें',
    unsubscribe: 'सदस्यता समाप्त करें',
    unsubscribeAll: 'सभी की सदस्यता समाप्त करें',
    subscriptions: 'सक्रिय सदस्यताएँ',
    noSubscriptions: 'कोई सक्रिय सदस्यता नहीं',
    addSubscription: 'सदस्यता जोड़ें',
    topicPatterns: 'विषय पैटर्न',
    systemTopics: 'सिस्टम विषय'
  },

  messages: {
    title: 'संदेश',
    received: 'प्राप्त संदेश',
    sent: 'भेजे गए संदेश',
    topic: 'विषय',
    payload: 'पेलोड',
    qos: 'QoS',
    retained: 'रिटेन किया गया',
    time: 'समय',
    clear: 'संदेश साफ़ करें',
    export: 'संदेश निर्यात करें',
    filter: 'फ़िल्टर',
    noMessages: 'कोई संदेश नहीं',
    view: 'विवरण देखें',
    copy: 'पेलोड कॉपी करें',
    duplicate: 'प्रकाशित के रूप में डुप्लिकेट करें'
  },

  tools: {
    title: 'उपकरण',
    topicGenerator: 'विषय जेनरेटर',
    payloadFormatter: 'पेलोड फॉर्मेटर',
    qosExplainer: 'QoS व्याख्याता',
    wildcardTester: 'वाइल्डकार्ड टेस्टर',
    packetInspector: 'पैकेट इंस्पेक्टर',
    loadTest: 'लोड टेस्ट'
  },

  settings: {
    title: 'सेटिंग्स',
    maxMessages: 'अधिकतम संदेश',
    timeFormat: 'समय प्रारूप',
    theme: 'थीम',
    autoExpand: 'संदेशों को ऑटो एक्सपैंड करें',
    saveHistory: 'इतिहास सहेजें',
    clearOnDisconnect: 'डिस्कनेक्ट होने पर संदेश साफ़ करें',
    advanced: 'उन्नत सेटिंग्स',
    lastWill: 'अंतिम इच्छा और वसीयतनामा'
  },

  lastWill: {
    title: 'अंतिम इच्छा',
    enable: 'अंतिम इच्छा सक्षम करें',
    topic: 'इच्छा विषय',
    message: 'इच्छा संदेश',
    qos: 'इच्छा QoS',
    retain: 'इच्छा रिटेन'
  },

  notifications: {
    connectSuccess: '{broker} से कनेक्टेड',
    connectError: 'कनेक्शन त्रुटि: {error}',
    disconnected: 'ब्रोकर से डिस्कनेक्टेड',
    subscribeSuccess: '{topic} की सदस्यता ली गई',
    subscribeError: 'सदस्यता लेने में विफल: {error}',
    unsubscribeSuccess: '{topic} से सदस्यता समाप्त की गई',
    publishSuccess: 'संदेश {topic} पर प्रकाशित हुआ',
    publishError: 'प्रकाशित करने में विफल: {error}',
    invalidJson: 'अमान्य JSON पेलोड',
    packetReceived: '{packets} पैकेट प्राप्त हुए'
  }
};