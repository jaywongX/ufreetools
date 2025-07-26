export default {
  name: 'कोड जटिलता विश्लेषक',
  description: 'साइक्लोमैटिक जटिलता और रखरखाव योग्यता जैसे कोड जटिलता मेट्रिक्स का विश्लेषण करें',
  title: 'कोड जटिलता विश्लेषण',
  subtitle: 'साइक्लोमैटिक जटिलता, हैलस्टेड मेट्रिक्स और रखरखाव सूचकांक सहित JavaScript कोड के विभिन्न जटिलता मेट्रिक्स का विश्लेषण करें',

  input: {
    title: 'JavaScript कोड इनपुट करें',
    placeholder: 'यहां JavaScript कोड पेस्ट करें...',
    loadExample: 'उदाहरण लोड करें',
    clear: 'साफ़ करें'
  },

  options: {
    title: 'विश्लेषण विकल्प',
    cyclomaticComplexity: 'साइक्लोमैटिक जटिलता की गणना करें (McCabe जटिलता)',
    halsteadMetrics: 'हैलस्टेड मेट्रिक्स की गणना करें (प्रोग्राम लंबाई, शब्दावली, वॉल्यूम आदि)',
    maintainabilityIndex: 'रखरखाव सूचकांक की गणना करें (कोड रखरखाव योग्यता मेट्रिक)',
    functionDetails: 'फ़ंक्शन स्तर के विश्लेषण परिणाम दिखाएं'
  },

  languages: {
    title: 'भाषा',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },

  metrics: {
    title: 'मेट्रिक्स',
    cyclomaticComplexity: 'साइक्लोमैटिक जटिलता',
    maintainabilityIndex: 'रखरखाव योग्यता सूचकांक',
    halsteadVolume: 'हैलस्टेड वॉल्यूम',
    halsteadDifficulty: 'हैलस्टेड कठिनाई',
    halsteadEffort: 'हैलस्टेड प्रयास',
    halsteadTime: 'हैलस्टेड समय',
    halsteadBugs: 'हैलस्टेड बग्स',
    linesOfCode: 'कोड की लाइनें',
    logicalLoc: 'लॉजिकल कोड लाइनें',
    commentLines: 'टिप्पणी लाइनें',
    commentRatio: 'टिप्पणी अनुपात',
    operatorCount: 'ऑपरेटर संख्या',
    operandCount: 'ऑपरेंड संख्या',
    functionCount: 'फ़ंक्शन संख्या',
    maxNestingDepth: 'अधिकतम नेस्टिंग गहराई',
    averageDepth: 'औसत गहराई',
    halstead: {
      title: 'हैलस्टेड मेट्रिक्स',
      length: 'प्रोग्राम लंबाई',
      vocabulary: 'शब्दावली',
      volume: 'प्रोग्राम वॉल्यूम',
      difficulty: 'कठिनाई'
    }
  },

  results: {
    title: 'विश्लेषण परिणाम',
    file: 'फ़ाइल',
    method: 'मेथड',
    score: 'स्कोर',
    complexity: 'जटिलता',
    rating: 'रेटिंग',
    loc: 'लाइनें',
    issues: 'समस्याएं',
    summary: 'समग्र कोड सारांश',
    details: 'विवरण',
    noResults: 'कोई विश्लेषण परिणाम नहीं। मेट्रिक्स देखने के लिए कोड इनपुट करें और "कोड विश्लेषण करें" पर क्लिक करें।',
    avgCyclomaticComplexity: 'औसत साइक्लोमैटिक जटिलता',
    maintainabilityIndex: 'रखरखाव सूचकांक',
    linesOfCode: 'कोड की लाइनें',
    functionDetails: 'फ़ंक्शन स्तर का विश्लेषण',
    functionName: 'फ़ंक्शन नाम',
    parameters: 'पैरामीटर संख्या',
    anonymousFunction: '(अनाम फ़ंक्शन)'
  },

  ratings: {
    excellent: 'उत्कृष्ट',
    good: 'अच्छा',
    moderate: 'मध्यम',
    poor: 'खराब',
    veryPoor: 'बहुत खराब'
  },

  complexity: {
    title: 'जटिलता मेट्रिक्स व्याख्या:',
    low: 'कम जटिलता - कोड सरल और स्पष्ट है, समझने और रखरखाव में आसान',
    medium: 'मध्यम जटिलता - कोड थोड़ा जटिल है, लेकिन अभी भी स्वीकार्य है',
    high: 'उच्च जटिलता - कोड अत्यधिक जटिल है, पुनर्गठन पर विचार करना चाहिए'
  },

  actions: {
    analyze: 'कोड विश्लेषण करें',
    analyzing: 'विश्लेषण हो रहा है...',
    clearCode: 'कोड साफ़ करें',
    uploadFile: 'फ़ाइल अपलोड करें',
    copy: 'परिणाम कॉपी करें',
    download: 'रिपोर्ट डाउनलोड करें',
    export: 'रिपोर्ट निर्यात करें (JSON)'
  },

  messages: {
    analyzing: 'कोड का विश्लेषण किया जा रहा है...',
    analysisComplete: 'विश्लेषण पूरा हुआ',
    analysisError: 'कोड विश्लेषण में त्रुटि',
    analysisFailure: 'कोड का विश्लेषण नहीं किया जा सका: {error}',
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    emptyCode: 'कृपया विश्लेषण के लिए कोड इनपुट करें',
    fileTooBig: 'फ़ाइल बहुत बड़ी है (अधिकतम 1MB)',
    invalidFile: 'अमान्य या असमर्थित फ़ाइल प्रकार',
    errorTitle: 'विश्लेषण त्रुटि'
  },

  tips: {
    title: 'उपयोग के सुझाव',
    cyclomaticComplexity: 'साइक्लोमैटिक जटिलता सोर्स कोड में स्वतंत्र पथों की संख्या का माप है।',
    maintainability: 'रखरखाव योग्यता सूचकांक कोड की रखरखाव योग्यता को दर्शाता है, उच्च मान बेहतर है।',
    recommendations: 'बेहतर कोड गुणवत्ता के लिए, कम जटिलता और उच्च रखरखाव योग्यता स्कोर बनाए रखने का प्रयास करें।',
    refactoring: '10 से अधिक जटिलता स्कोर वाले फ़ंक्शन के पुनर्गठन पर विचार करें।'
  }
};