export default {
  name: 'वेबसॉकेट टेस्टर',
  description: 'वेबसॉकेट सर्वर से कनेक्ट करें, संदेश भेजें और प्रतिक्रिया देखें',

  connection: {
    url: 'वेबसॉकेट पता',
    urlPlaceholder: 'उदाहरण: ws://echo.websocket.org',
    protocol: 'उप-प्रोटोकॉल (वैकल्पिक)',
    protocolPlaceholder: 'अल्पविराम से अलग किए गए प्रोटोकॉल',
    connect: 'कनेक्ट करें',
    disconnect: 'डिस्कनेक्ट करें',
    status: 'कनेक्शन स्थिति',
    connected: 'कनेक्ट हुआ',
    disconnected: 'डिस्कनेक्ट हुआ',
    waiting: 'कनेक्शन की प्रतीक्षा में',
    autoReconnect: 'स्वचालित रूप से फिर से कनेक्ट करें',
    reconnectMessage: '{0} सेकंड बाद फिर से कनेक्ट करने का प्रयास किया जा रहा है...'
  },

  options: {
    title: 'विकल्प',
    autoScroll: 'लॉग में स्वचालित रूप से स्क्रॉल करें'
  },

  messages: {
    send: 'संदेश भेजें',
    logs: 'संदेश लॉग',
    emptyLogs: 'कनेक्शन के बाद संदेश यहाँ दिखाई देंगे',
    placeholder: 'भेजने के लिए संदेश दर्ज करें...',
    sendButton: 'भेजें',
    clearButton: 'साफ़ करें',
    copyButton: 'कॉपी करें',
    clearLogs: 'लॉग साफ़ करें',
    copyLogs: 'लॉग कॉपी करें',

    format: {
      title: 'प्रारूप',
      text: 'सादा पाठ',
      json: 'JSON',
      binary: 'बाइनरी'
    },

    templates: {
      json: 'JSON',
      text: 'पाठ'
    },

    types: {
      sent: 'भेजा →',
      received: 'प्राप्त ←',
      error: 'त्रुटि !',
      info: 'जानकारी'
    }
  },

  savedConnections: {
    title: 'सहेजे गए कनेक्शन',
    empty: 'कोई कनेक्शन नहीं सहेजे गए हैं',
    save: 'वर्तमान कनेक्शन सहेजें',
    saveConnection: 'कनेक्शन सहेजें',
    connectionName: 'कनेक्शन का नाम',
    load: 'लोड करें',
    delete: 'हटाएँ',
    cancel: 'रद्द करें'
  },

  testServers: {
    title: 'परीक्षण सर्वर',
    description: 'नीचे कुछ सार्वजनिक वेबसॉकेट सर्वर दिए गए हैं:',
    useServer: 'इस सर्वर का उपयोग करें',

    servers: {
      echo: {
        name: 'एको परीक्षण',
        description: 'सुरक्षित एको सर्वर, WSS कनेक्शन समर्थित'
      },

      postman: {
        name: 'WebSocket.org',
        description: 'Postman द्वारा प्रदान की गई एको सेवा, WSS समर्थित'
      }
    }
  },

  logs: {
    connectingTo: '{0} से कनेक्ट हो रहा है...',
    connectionSuccess: 'कनेक्शन सफल हुआ',
    connectionError: 'वेबसॉकेट त्रुटि',
    connectionClosed: 'कनेक्शन बंद हो गया (कोड: {0}{1})',
    invalidJson: 'अमान्य JSON प्रारूप: {0}',
    sendFailed: 'भेजना असफल: {0}',
    emptyMessage: 'संदेश खाली नहीं हो सकता',
    notConnected: 'वेबसॉकेट से कनेक्ट नहीं है',
    copied: 'लॉग क्लिपबोर्ड पर कॉपी कर दिए गए',
    copyFailed: 'कॉपी असफल: {0}',
    serverSelected: 'सर्वर चयनित है: {0}',
    binaryData: '[बाइनरी डेटा]'
  }
};