export default {
  name: 'फ्लोचार्ट जनरेटर',
  description: 'सरल टेक्स्ट-आधारित सिंटैक्स का उपयोग करके फ्लोचार्ट और आरेख बनाएं',
  title: 'फ्लोचार्ट और आरेख जनरेटर',
  renderBtn: 'आरेख रेंडर करें',
  resetBtn: 'रीसेट करें',
  downloadSvgBtn: 'SVG डाउनलोड करें',
  copySvgBtn: 'SVG कॉपी करें',

  input: {
    title: 'फ्लोचार्ट परिभाषा',
    placeholder: 'मरमेड सिंटैक्स कोड दर्ज करें...',
    loadExample: 'उदाहरण लोड करें',
    clear: 'साफ़ करें',
    uploadFile: 'फाइल अपलोड करें'
  },

  output: {
    title: 'जनरेट किया गया फ्लोचार्ट',
    downloadImage: 'इमेज डाउनलोड करें',
    downloadSVG: 'SVG डाउनलोड करें',
    copyImage: 'इमेज कॉपी करें',
    copySVG: 'SVG कॉपी करें',
    zoomIn: 'ज़ूम इन',
    zoomOut: 'ज़ूम आउट',
    fitView: 'फिट व्यू',
    resetView: 'व्यू रीसेट करें',
    preview: 'प्रीव्यू',
    code: 'मरमेड कोड'
  },

  options: {
    title: 'विकल्प',
    theme: 'थीम',
    orientation: 'अभिविन्यास',
    nodeShape: 'नोड आकार',
    arrowStyle: 'तीर शैली',
    lineStyle: 'रेखा शैली',
    textPosition: 'टेक्स्ट स्थिति',
    fontSize: 'फॉन्ट आकार',
    fontFamily: 'फॉन्ट परिवार',
    showGrid: 'ग्रिड दिखाएं',
    autoRender: 'ऑटो रेंडर'
  },

  themes: {
    default: 'डिफ़ॉल्ट',
    simple: 'सरल',
    forest: 'फॉरेस्ट',
    neutral: 'न्यूट्रल',
    dark: 'डार्क',
    business: 'बिज़नेस',
    base: 'बेस',
    custom: 'कस्टम'
  },

  orientations: {
    topToBottom: 'ऊपर से नीचे',
    bottomToTop: 'नीचे से ऊपर',
    leftToRight: 'बाएं से दाएं',
    rightToLeft: 'दाएं से बाएं'
  },

  nodeShapes: {
    rectangle: 'आयत',
    roundedRectangle: 'गोलाकार आयत',
    circle: 'वृत्त',
    diamond: 'हीरा',
    hexagon: 'षट्कोण',
    parallelogram: 'समांतर चतुर्भुज'
  },

  arrowStyles: {
    arrow: 'तीर',
    open: 'खुला',
    filled: 'भरा हुआ',
    diamond: 'हीरा',
    circle: 'वृत्त'
  },

  lineStyles: {
    solid: 'ठोस',
    dashed: 'डैश्ड',
    dotted: 'डॉटेड',
    curved: 'घुमावदार',
    straight: 'सीधा',
    orthogonal: 'लंबवत'
  },

  syntax: {
    title: 'सिंटैक्स सहायता',
    node: 'नोड',
    edge: 'एज',
    subgraph: 'सबग्राफ',
    comment: 'टिप्पणी',
    styling: 'स्टाइलिंग',
    showMore: 'अधिक दिखाएं'
  },

  actions: {
    render: 'फ्लोचार्ट रेंडर करें',
    save: 'आरेख सहेजें',
    export: 'निर्यात करें',
    share: 'शेयर करें'
  },

  messages: {
    renderSuccess: 'फ्लोचार्ट सफलतापूर्वक रेंडर किया गया',
    renderError: 'फ्लोचार्ट रेंडर करने में त्रुटि: {error}',
    syntaxError: 'सिंटैक्स त्रुटि: {error}',
    saved: 'आरेख सहेज लिया गया है',
    copied: 'SVG कोड क्लिपबोर्ड पर कॉपी किया गया है',
    copyFailed: 'कॉपी विफल, कृपया मैन्युअल रूप से कॉपी करें',
    exported: 'फ्लोचार्ट निर्यात किया गया है',
    emptyCode: 'कृपया मरमेड सिंटैक्स कोड दर्ज करें',
    rendering: 'रेंडरिंग...',
    errorTitle: 'रेंडरिंग त्रुटि'
  },

  examples: {
    flowchart: 'फ्लोचार्ट',
    classDiagram: 'क्लास डायग्राम',
    sequenceDiagram: 'सीक्वेंस डायग्राम',
    entityRelationship: 'एंटिटी रिलेशनशिप डायग्राम',
    gantt: 'गैंट चार्ट',
    stateDiagram: 'स्टेट डायग्राम',
    pieChart: 'पाई चार्ट',
    userJourney: 'यूजर जर्नी मैप'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[Start] --> B{Is it correct?}
    B -->|Yes| C[Correct Result]
    B -->|No| D[Incorrect Result]
    C --> E[End]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant Client
    participant Server
    Client->>Server: Request data
    Server-->>Client: Respond with data
    Client->>Server: Submit form
    Server-->>Client: Confirm submission
`,
    gantt: `gantt
    title Project Progress Schedule
    dateFormat  YYYY-MM-DD
    section Planning Phase
    Requirement Collection           :a1, 2023-01-01, 30d
    System Design                  :after a1, 20d
    section Development Phase
    Backend Development            :2023-02-20, 45d
    Frontend Development           :2023-02-25, 40d
    section Testing Phase
    System Testing                :2023-04-05, 20d
    User Testing                  :2023-04-20, 15d
    section Deployment Phase
    Deployment                    :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> Editing
    Editing --> Reviewing: Submit for review
    Reviewing --> Rejected: Reject
    Reviewing --> Published: Approve
    Rejected --> Editing: Revise and resubmit
    Published --> [*]
`,
    pieChart: `pie
    title Website Traffic Sources Distribution
    "Search Engines" : 42.7
    "Direct Access" : 28.9
    "Social Media" : 18.5
    "Other Channels" : 9.9
`,
    classDiagram: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Cat {
        +String color
        +climb() void
    }
    Animal <|-- Dog
    Animal <|-- Cat
`
  }
};