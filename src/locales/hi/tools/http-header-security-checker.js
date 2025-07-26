export default {
  name: 'HTTP हेडर सुरक्षा चेकर',
  description: 'HTTP प्रतिक्रिया हेडर की सुरक्षा का विश्लेषण और मूल्यांकन करें',
  title: 'HTTP हेडर सुरक्षा चेकर',
  intro: 'किसी वेबसाइट के HTTP प्रतिक्रिया हेडर का विश्लेषण करें, CSP, HSTS जैसे सुरक्षा कॉन्फ़िगरेशन का पता लगाएं और सुधार के सुझाव प्रदान करें',

  input: {
    title: 'URL या हेडर दर्ज करें',
    url: 'URL',
    urlPlaceholder: 'जांच करने के लिए URL दर्ज करें (उदाहरण: https://example.com)',
    headers: 'या HTTP हेडर सीधे पेस्ट करें',
    headersPlaceholder: 'कच्चे HTTP हेडर यहां पेस्ट करें...',
    options: 'स्कैन विकल्प',
    followRedirects: 'रीडायरेक्ट का अनुसरण करें',
    includeSubresources: 'सबरिसोर्सेज की जांच करें (CSS, JS, आदि)',
    timeout: 'टाइमआउट (सेकंड)',
    checkButton: 'हेडर जांचें',
    analyzing: 'विश्लेषण कर रहा है...'
  },

  results: {
    title: 'सुरक्षा हेडर विश्लेषण',
    overview: 'अवलोकन',
    score: 'सुरक्षा स्कोर',
    totalScore: '100 में से कुल स्कोर',
    scanned: 'स्कैन किए गए URL',
    date: 'स्कैन दिनांक',
    headers: {
      title: 'पता लगाए गए हेडर',
      name: 'हेडर',
      value: 'मान',
      status: 'स्थिति'
    },
    allHeaders: {
      title: 'सभी प्रतिक्रिया हेडर',
      name: 'नाम',
      value: 'मान',
      noData: 'कोई प्रतिक्रिया हेडर डेटा उपलब्ध नहीं है'
    },
    missing: {
      title: 'अनुपस्थित सुरक्षा हेडर',
      description: 'निम्नलिखित अनुशंसित सुरक्षा हेडर नहीं मिले:'
    },
    issues: {
      title: 'सुरक्षा समस्याएं',
      critical: 'गंभीर',
      high: 'उच्च',
      medium: 'मध्यम',
      low: 'निम्न',
      info: 'जानकारी'
    },
    recommendations: {
      title: 'अनुशंसाएं',
      description: 'सुरक्षा में सुधार के लिए निम्नलिखित हेडर जोड़ने पर विचार करें:',
      example: 'उदाहरण कॉन्फ़िगरेशन'
    },
    rating: {
      unknown: 'अज्ञात',
      excellent: 'उत्कृष्ट',
      good: 'अच्छा',
      fair: 'उचित',
      poor: 'खराब',
      high_risk: 'उच्च जोखिम',
      descriptions: {
        unknown: 'साइट की सुरक्षा हेडर जानकारी प्राप्त करने में असमर्थ',
        excellent: 'साइट ने सभी प्रमुख सुरक्षा हेडर लागू किए हैं',
        good: 'साइट ने अधिकांश महत्वपूर्ण सुरक्षा हेडर लागू किए हैं',
        fair: 'साइट में कुछ महत्वपूर्ण सुरक्षा हेडर अनुपस्थित हैं',
        poor: 'साइट में कई प्रमुख सुरक्षा हेडर अनुपस्थित हैं',
        high_risk: 'साइट में लगभग कोई सुरक्षा हेडर सुरक्षा उपाय नहीं हैं'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'HTTP के बजाय HTTPS कनेक्शन को लागू करता है',
      recommendation: 'जोड़ें "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: 'सही तरीके से कॉन्फ़िगर किया गया',
        bad: 'कॉन्फ़िगर नहीं किया गया',
        warning: 'कॉन्फ़िगरेशन में सुधार किया जा सकता है'
      },
      recommendationConfigured: 'मौजूदा कॉन्फ़िगरेशन लागू किया गया है; सुनिश्चित करें कि इसमें पर्याप्त लंबा max-age और includeSubDomains शामिल है',
      recommendationMissing: 'यह अनुशंसा की जाती है कि HSTS को सक्षम किया जाए ताकि सभी संचार HTTPS पर हों'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'MIME प्रकार स्निफिंग को रोकता है',
      recommendation: 'जोड़ें "X-Content-Type-Options: nosniff"',
      status: {
        good: 'सही तरीके से कॉन्फ़िगर किया गया',
        bad: 'कॉन्फ़िगर नहीं किया गया या गलत कॉन्फ़िगर किया गया'
      },
      recommendationConfigured: 'कॉन्फ़िगरेशन सही है; वर्तमान सेटिंग्स रखें',
      recommendationMissing: 'यह अनुशंसा की जाती है कि इस हेडर को "nosniff" मान पर सेट किया जाए'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'साइट को iframe में एम्बेड होने से रोकता है, इस प्रकार क्लिकजैकिंग हमलों को रोकता है',
      recommendation: 'जोड़ें "X-Frame-Options: DENY" या "SAMEORIGIN"',
      status: {
        good: 'कॉन्फ़िगर किया गया',
        bad: 'कॉन्फ़िगर नहीं किया गया'
      },
      recommendationConfigured: 'मौजूदा कॉन्फ़िगरेशन लागू किया गया है; DENY या SAMEORIGIN का उपयोग करने की अनुशंसा करें',
      recommendationMissing: 'क्लिकजैकिंग को रोकने के लिए इस हेडर को DENY या SAMEORIGIN पर कॉन्फ़िगर करने की अनुशंसा की जाती है'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'नियंत्रित करता है कि उपयोगकर्ता एजेंट किन संसाधनों को लोड करने की अनुमति देता है',
      recommendation: 'उपयुक्त निर्देशों के साथ Content-Security-Policy हेडर जोड़ें',
      status: {
        good: 'सही तरीके से कॉन्फ़िगर किया गया',
        bad: 'कॉन्फ़िगर नहीं किया गया',
        warning: 'कॉन्फ़िगरेशन में सुधार किया जा सकता है'
      },
      recommendationConfigured: 'मौजूदा कॉन्फ़िगरेशन लागू किया गया है; नीति के नियमित ऑडिट और अपडेट सुनिश्चित करें',
      recommendationMissing: 'XSS हमलों के खिलाफ रक्षा को बढ़ाने के लिए संसाधन स्रोतों को प्रतिबंधित करने के लिए CSP को कॉन्फ़िगर करने की अनुशंसा की जाती है'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'यह हेडर पुराने ब्राउज़रों में XSS फ़िल्टरिंग को सक्षम करता है। आधुनिक ब्राउज़रों में, इसके बजाय CSP की अनुशंसा की जाती है।',
      recommendation: 'हालांकि यह हेडर आधुनिक ब्राउज़रों में CSP द्वारा प्रतिस्थापित किया गया है, पुराने ब्राउज़रों के साथ संगतता के लिए इसे "1; mode=block" पर सेट करने की अभी भी अनुशंसा की जाती है',
      status: {
        enabled: 'सक्षम',
        disabled: 'अक्षम',
        notConfigured: 'कॉन्फ़िगर नहीं किया गया (आधुनिक ब्राउज़रों के लिए CSP की अनुशंसा की जाती है)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Referer हेडर में शामिल जानकारी को नियंत्रित करता है',
      recommendation: 'जोड़ें "Referrer-Policy: no-referrer-when-downgrade" या एक अधिक कठोर नीति',
      status: {
        good: 'कॉन्फ़िगर किया गया',
        bad: 'कॉन्फ़िगर नहीं किया गया'
      },
      recommendationConfigured: 'मौजूदा कॉन्फ़िगरेशन लागू किया गया है; strict-origin या strict-origin-when-cross-origin का उपयोग करने की अनुशंसा करें',
      recommendationMissing: 'रेफरर जानकारी के प्रसारण को नियंत्रित करने के लिए इस हेडर को कॉन्फ़िगर करने की अनुशंसा की जाती है'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'नियंत्रित करता है कि कौन से ब्राउज़र फीचर्स और API का उपयोग किया जा सकता है',
      recommendation: 'उपयुक्त प्रतिबंधों के साथ Permissions-Policy हेडर जोड़ें',
      status: {
        good: 'कॉन्फ़िगर किया गया',
        bad: 'कॉन्फ़िगर नहीं किया गया'
      },
      recommendationConfigured: 'मौजूदा कॉन्फ़िगरेशन लागू किया गया है; सुनिश्चित करें कि अनावश्यक फीचर्स प्रतिबंधित हैं',
      recommendationMissing: 'साइट द्वारा उपयोग किए जा सकने वाले ब्राउज़र फीचर्स को सीमित करने के लिए इस हेडर को कॉन्फ़िगर करने की अनुशंसा की जाती है'
    }
  },

  status: {
    good: 'अच्छा',
    warning: 'चेतावनी',
    bad: 'बुरा',
    info: 'जानकारी',
    notApplicable: 'लागू नहीं'
  },

  actions: {
    export: 'रिपोर्ट निर्यात करें',
    copyHeaders: 'हेडर कॉपी करें',
    copyRecommendations: 'अनुशंसाएं कॉपी करें',
    scan: 'नया स्कैन',
    share: 'परिणाम साझा करें',
    analyze: 'हेडर जानकारी का विश्लेषण करें'
  },

  emptyState: {
    line1: 'HTTP प्रतिक्रिया हेडर के सुरक्षा कॉन्फ़िगरेशन का विश्लेषण करने के लिए एक वेबसाइट URL दर्ज करें',
    line2: 'CSP, HSTS और अन्य सुरक्षा हेडर के बारे में विस्तृत मूल्यांकन और अनुशंसाएं प्राप्त करें'
  },

  messages: {
    scanning: '{url} को स्कैन कर रहा है...',
    completed: 'स्कैन पूरा हुआ',
    error: 'त्रुटि: {message}',
    timeout: 'अनुरोध का समय समाप्त हो गया',
    invalidUrl: 'अमान्य URL',
    invalidUrlFormat: 'कृपया http:// या https:// से शुरू होने वाला एक वैध URL दर्ज करें',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया',
    exportComplete: 'रिपोर्ट सफलतापूर्वक निर्यात की गई',
    httpWarning: 'चेतावनी: HTTP का उपयोग असुरक्षित हो सकता है',
    noHeaders: 'कोई हेडर जानकारी नहीं मिली',
    fetchError: 'हेडर जानकारी प्राप्त करने में असमर्थ: {error}'
  }
};