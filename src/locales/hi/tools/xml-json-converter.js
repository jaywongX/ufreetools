export default {
  name: 'XML/JSON कन्वर्टर',
  title: 'XML ↔ JSON कन्वर्टर',
  description: 'उन्नत विकल्पों और कस्टम सेटिंग्स के साथ XML और JSON प्रारूपों के बीच परिवर्तित करें',

  conversion: {
    direction: 'परिवर्तन दिशा',
    xmlToJson: 'XML से JSON',
    jsonToXml: 'JSON से XML'
  },

  options: {
    title: 'परिवर्तन विकल्प',
    show: 'विकल्प दिखाएं',
    hide: 'विकल्प छिपाएं',
    
    xmlToJson: {
      ignoreAttributes: 'विशेषताओं को अनदेखा करें',
      ignoreAttributesHint: 'JSON में XML विशेषता जानकारी को संरक्षित करने के लिए अक्षम करें',
      parseAttributeValue: 'विशेषता मूल्यों का विश्लेषण करें',
      parseAttributeValueHint: 'विशेषताओं में संख्याओं, बूलियन आदि को स्ट्रिंग्स के बजाय वास्तविक प्रकारों में परिवर्तित करें',
      ignoreDeclaration: 'XML घोषणा को अनदेखा करें',
      ignoreDeclarationHint: '<?xml version="1.0"?> जैसी घोषणाओं को अनदेखा करें',
      parseTagValue: 'टैग मूल्यों का विश्लेषण करें',
      parseTagValueHint: 'टैग सामग्री में संख्याओं, बूलियन आदि को स्ट्रिंग्स के बजाय वास्तविक प्रकारों में परिवर्तित करें',
      trimValues: 'व्हाइटस्पेस ट्रिम करें',
      attributePrefix: 'विशेषता उपसर्ग',
      attributePrefixPlaceholder: 'उदाहरण: at-sign, underscore, attr_',
      attributePrefixHint: 'JSON में XML विशेषताओं के लिए उपसर्ग, डिफ़ॉल्ट at-sign है'
    },
    
    jsonToXml: {
      format: 'XML फॉर्मेट करें',
      formatHint: 'बेहतर पठनीयता के लिए इंडेंटेशन और लाइन ब्रेक सक्षम करें',
      indentBy: 'इंडेंटेशन जोड़ें (2 स्पेस)',
      addDeclaration: 'XML घोषणा जोड़ें',
      addDeclarationHint: 'शुरुआत में <?xml version="1.0" encoding="UTF-8"?> जोड़ें',
      rootName: 'रूट एलिमेंट नाम (वैकल्पिक)',
      rootNamePlaceholder: 'उदाहरण: root, data, xml',
      rootNameHint: 'जब JSON में कई शीर्ष-स्तरीय कुंजियां हों तो उपयोग करने के लिए रूट एलिमेंट नाम',
      attributePrefix: 'विशेषता उपसर्ग पहचान',
      attributePrefixPlaceholder: 'उदाहरण: at-sign, underscore, attr_',
      attributePrefixHint: 'JSON में XML विशेषताओं की पहचान के लिए उपयोग किया जाने वाला उपसर्ग, डिफ़ॉल्ट at-sign है'
    }
  },

  buttons: {
    convert: 'परिवर्तित करें',
    swap: 'सामग्री स्वैप करें',
    clear: 'साफ़ करें',
    loadExample: 'उदाहरण लोड करें'
  },

  input: {
    xmlInput: 'XML इनपुट',
    jsonInput: 'JSON इनपुट',
    placeholder: {
      xml: 'XML दर्ज करें...',
      json: 'JSON दर्ज करें...'
    }
  },

  output: {
    xmlResult: 'XML परिणाम',
    jsonResult: 'JSON परिणाम',
    copy: 'कॉपी करें'
  },

  stats: {
    title: 'परिवर्तन आंकड़े',
    inputSize: 'इनपुट आकार',
    outputSize: 'आउटपुट आकार',
    sizeChange: 'आकार परिवर्तन',
    conversionTime: 'परिवर्तन समय'
  },

  help: {
    title: 'उपयोग सहायता',
    show: 'सहायता दिखाएं',
    hide: 'सहायता छिपाएं',
    about: {
      title: 'XML और JSON के बारे में',
      content: 'XML (eXtensible Markup Language) एक मार्कअप भाषा है जिसका व्यापक रूप से कॉन्फ़िगरेशन फ़ाइलों, डेटा एक्सचेंज और वेब सेवाओं के लिए उपयोग किया जाता है। JSON (JavaScript Object Notation) एक हल्का डेटा इंटरचेंज प्रारूप है जिसे मनुष्यों द्वारा पढ़ना और लिखना और मशीनों द्वारा पार्स करना और जनरेट करना आसान है।'
    },
    xmlToJson: {
      title: 'XML से JSON विचार',
      items: [
        'XML विशेषताएँ डिफ़ॉल्ट रूप से at-sign उपसर्ग वाली कुंजियों में परिवर्तित की जाती हैं',
        'XML टेक्स्ट सामग्री डिफ़ॉल्ट रूप से #text कुंजी के साथ दर्शाई जाती है',
        '"टैग मूल्यों का विश्लेषण करें" सक्षम करने से संख्याएँ, बूलियन आदि वास्तविक JSON प्रकारों में परिवर्तित हो जाएंगे',
        'समान नाम वाले कई टैग स्वचालित रूप से JSON में ऐरे में परिवर्तित हो जाते हैं'
      ]
    },
    jsonToXml: {
      title: 'JSON से XML विचार',
      items: [
        'at-sign उपसर्ग वाली कुंजियों को डिफ़ॉल्ट रूप से XML विशेषताओं के रूप में माना जाता है',
        'JSON में ऐरे XML में समान नाम वाले कई टैग बनाते हैं',
        'जटिल नेस्टेड JSON ऑब्जेक्ट्स पदानुक्रमित XML संरचनाएँ जनरेट करते हैं',
        'निर्दिष्ट रूट एलिमेंट नाम के बिना कई शीर्ष-स्तरीय कुंजियां कई XML रूट एलिमेंट्स जनरेट करेंगी'
      ]
    }
  },

  errors: {
    xmlParse: 'XML पार्सिंग त्रुटि: {0}',
    jsonParse: 'JSON पार्सिंग त्रुटि: {0}',
    xmlGeneration: 'XML जनरेशन त्रुटि: {0}',
    emptyObject: 'JSON ऑब्जेक्ट खाली या अमान्य है',
    conversion: 'परिवर्तन त्रुटि: {0}'
  },

  alerts: {
    copied: 'क्लिपबोर्ड पर कॉपी किया गया'
  }
};