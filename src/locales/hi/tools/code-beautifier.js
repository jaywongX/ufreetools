export default {
  name: 'कोड ब्यूटीफायर',
  description: 'सिंटैक्स हाइलाइटिंग और इंडेंटेशन के साथ कोड को फॉर्मेट और सुंदर बनाएं',
  languages: {
    title: 'भाषा',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: 'सुंदर बनाएं',
    minify: 'संक्षिप्त करें',
    clear: 'साफ़ करें',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें',
    upload: 'फ़ाइल अपलोड करें'
  },
  options: {
    title: 'विकल्प',
    indentSize: 'इंडेंट आकार',
    indentWith: 'इंडेंट विधि',
    spaces: 'स्पेस',
    tabs: 'टैब',
    lineBreaks: 'लाइन ब्रेक स्टाइल',
    quoteStyle: 'उद्धरण शैली',
    bracketStyle: 'ब्रैकेट शैली',
    preserveNewlines: 'नई लाइनें संरक्षित करें',
    endWithNewline: 'नई लाइन के साथ समाप्त करें',
    removeComments: 'टिप्पणियां हटाएं',
    wrapLineLength: 'लाइन रैप लंबाई',
    lineNumbers: 'लाइन नंबर',
    showLineNumbers: 'लाइन नंबर दिखाएं',
    wrapLines: 'स्वचालित लाइन रैप',
    theme: 'थीम',
    autoDetect: 'स्वचालित पहचान',
    tryAutoDetect: 'भाषा का स्वचालित पहचान का प्रयास करें'
  },
  input: {
    title: 'इनपुट',
    placeholder: 'अपना कोड यहां पेस्ट करें...'
  },
  output: {
    title: 'आउटपुट',
    placeholder: 'सुंदर किया गया कोड यहां दिखाई देगा...'
  },
  messages: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया!',
    beautifySuccess: 'कोड सफलतापूर्वक सुंदर बनाया गया',
    minifySuccess: 'कोड सफलतापूर्वक संक्षिप्त किया गया',
    beautifyError: 'कोड को सुंदर बनाने में त्रुटि',
    minifyError: 'कोड को संक्षिप्त करने में त्रुटि',
    emptyCode: 'कृपया सुंदर बनाने के लिए कोड दर्ज करें',
    fileTooBig: 'फ़ाइल बहुत बड़ी है (अधिकतम 2MB)',
    invalidFile: 'अमान्य या असमर्थित फ़ाइल प्रकार',
    preview: 'पूर्वावलोकन',
    HTMLCode: 'HTML कोड',
  },
  stats: {
    original: 'मूल',
    beautified: 'सुंदर किया गया',
    minified: 'संक्षिप्त किया गया',
    size: 'आकार',
    characters: 'अक्षर',
    lines: 'लाइनें'
  },
  tips: {
    title: 'उपयोग के सुझाव',
    tip1: 'सर्वोत्तम सिंटैक्स हाइलाइटिंग के लिए उपयुक्त प्रोग्रामिंग भाषा चुनें',
    tip2: 'अपनी वेबसाइट की शैली के अनुरूप विभिन्न थीम शैलियों का चयन कर सकते हैं',
    tip3: 'जनरेट किए गए HTML कोड को कॉपी करें, जिसे HTML समर्थित एडिटर या वेबसाइट में सीधे पेस्ट किया जा सकता है',
    tip4: 'हाइलाइट किया गया कोड रेस्पॉन्सिव और डार्क मोड का समर्थन करता है',
    tip5: 'कोड प्रदर्शित करते समय लाइन नंबर जोड़ने से पठनीयता और संदर्भ देने की सुविधा बढ़ती है'
  }
}