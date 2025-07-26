export default {
  name: 'LaTeX फॉर्मूला जनरेटर',
  description: 'रीयल-टाइम में LaTeX गणितीय फॉर्मूला जनरेट करें और एक्सपोर्ट करें',

  // UI टेक्स्ट
  input: 'LaTeX कोड इनपुट करें',

  output: 'पूर्वावलोकन परिणाम',
  renderButton: 'फॉर्मूला रेंडर करें',
  exportButton: 'इमेज के रूप में एक्सपोर्ट करें',
  copyButton: 'LaTeX कोड कॉपी करें',

  // सेटिंग्स
  settings: {
    title: 'सेटिंग्स',
    fontSize: 'फॉन्ट साइज़',
    textColor: 'टेक्स्ट रंग',
    backgroundColor: 'बैकग्राउंड रंग',
    displayMode: 'डिस्प्ले मोड',
    displayModeInline: 'इनलाइन मोड',
    displayModeBlock: 'ब्लॉक मोड'
  },

  // उदाहरण
  examples: {
    title: 'उदाहरण',
    basic: 'बेसिक फॉर्मूला',
    fraction: 'भिन्न',
    superscript: 'सुपरस्क्रिप्ट/सबस्क्रिप्ट',
    integral: 'इंटीग्रल',
    matrix: 'मैट्रिक्स',
    more: 'अधिक उदाहरण'
  },

  // संदेश
  copied: 'क्लिपबोर्ड पर कॉपी किया गया',

  errorTitle: 'रेंडरिंग त्रुटि',
  errorMessage: 'कृपया अपने LaTeX सिंटैक्स की जाँच करें'
};