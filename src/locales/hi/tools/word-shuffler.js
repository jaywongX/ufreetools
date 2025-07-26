export default {
  name: 'वर्ड शफलर',
  description: 'फॉर्मेटिंग बनाए रखते हुए अपने टेक्स्ट में शब्दों, वाक्यों या पंक्तियों को यादृच्छिक रूप से शफल करें',
  inputLabel: 'टेक्स्ट दर्ज करें',
  inputPlaceholder: 'शफल करने के लिए अपना टेक्स्ट यहां दर्ज करें या पेस्ट करें...',
  outputLabel: 'शफल किया गया परिणाम',
  shuffleMode: 'शफल मोड',

  modes: {
    word: 'शब्द',
    sentence: 'वाक्य',
    line: 'पंक्तियां',
    character: 'अक्षर',
    paragraph: 'पैराग्राफ'
  },

  preserveOptions: 'संरक्षण विकल्प',
  preserveCapitalization: 'कैपिटलाइजेशन बनाए रखें',
  preservePunctuation: 'विराम चिह्न बनाए रखें',
  shuffleButton: 'टेक्स्ट शफल करें',
  copyButton: 'परिणाम कॉपी करें',
  clearButton: 'सभी साफ करें',
  copiedMessage: 'क्लिपबोर्ड पर कॉपी किया गया!',
  tagline: 'दुनिया का सबसे उन्नत टेक्स्ट रैंडमाइज़र',
  wordCount: 'शब्द',
  importButton: 'फाइल इम्पोर्ट करें',
  clearInputButton: 'इनपुट साफ करें',
  clearOutputButton: 'आउटपुट साफ करें',
  downloadButton: 'डाउनलोड करें',
  useExampleButton: 'उदाहरण का उपयोग करें',
  advancedOptions: 'उन्नत विकल्प',
  delimiterOptions: 'डिलिमिटर विकल्प',
  wordDelimiters: 'शब्द डिलिमिटर',
  wordDelimitersHint: 'वे अक्षर जो शब्दों को अलग करते हैं',
  sentenceDelimiters: 'वाक्य डिलिमिटर',
  sentenceDelimitersHint: 'वे अक्षर जो वाक्यों को समाप्त करते हैं',
  additionalOptions: 'अतिरिक्त विकल्प',
  repeatCount: 'दोहराव संख्या',
  repeatCountHint: 'कई शफल किए गए संस्करण उत्पन्न करें',
  shuffleGroup: 'शफल ग्रुप साइज़',
  shuffleGroupHint: 'इस आकार के समूहों में शब्दों को शफल करें',
  removeRepeatedWords: 'दोहराए गए शब्द हटाएं',
  preserveSpacing: 'स्पेसिंग बनाए रखें',
  examplesTitle: 'उदाहरण',
  useThisExample: 'इस उदाहरण का उपयोग करें',
  helpTitle: 'सहायता और जानकारी',
  whatIsTitle: 'वर्ड शफलर क्या है?',
  whatIsDescription: 'वर्ड शफलर एक ऐसा टूल है जो टेक्स्ट में शब्दों, वाक्यों, पंक्तियों, अक्षरों या पैराग्राफ के क्रम को यादृच्छिक बनाता है। यह वास्तव में यादृच्छिक परिणाम सुनिश्चित करने के लिए एक परिष्कृत एल्गोरिदम का उपयोग करता है, जबकि कैपिटलाइजेशन और विराम चिह्न जैसे आपके चुने हुए फॉर्मेटिंग विकल्पों को संरक्षित रखता है।',
  howToUseTitle: 'इस टूल का उपयोग कैसे करें',
  tipsTitle: 'सर्वोत्तम परिणामों के लिए टिप्स',
  stepLabel: 'चरण',

  examples: {
    basic: {
      title: "बेसिक वर्ड शफल",
      description: "विराम चिह्न और कैपिटलाइजेशन को बनाए रखते हुए शब्दों का सरल रैंडमाइजेशन",
      input: "The quick brown fox jumps over the lazy dog. All five boxing wizards jump quickly.",
      output: "The brown quick dog jumps fox lazy the over. Boxing wizards jump five quickly all."
    },
    sentence: {
      title: "वाक्य शफलिंग",
      description: "पूर्ण वाक्यों के क्रम को यादृच्छिक बनाएं",
      input: "First sentence goes here. This is the second one. And here comes the third. Finally, we have the fourth sentence.",
      output: "And here comes the third. First sentence goes here. Finally, we have the fourth sentence. This is the second one."
    },
    creative: {
      title: "क्रिएटिव रीमिक्स",
      description: "फॉर्मेटिंग बाधाओं के बिना शब्दों को शफल करके नया रचनात्मक टेक्स्ट उत्पन्न करें",
      input: "Poetry is the rhythmical creation of beauty in words. It is the revelation of a feeling that the poet believes to be interior and personal but which the reader recognizes as their own.",
      output: "beauty rhythmical is words poet revelation but reader personal to interior which own creation it as their poetry feeling believes the of recognizes the in that the and a be."
    }
  },

  howToUseSteps: [
    "अपने टेक्स्ट को बाईं ओर इनपुट फील्ड में दर्ज करें या पेस्ट करें।",
    "नीचे अपना वांछित शफल मोड और विकल्प चुनें।",
    "यादृच्छिक टेक्स्ट उत्पन्न करने के लिए \"टेक्स्ट शफल करें\" बटन पर क्लिक करें।",
    "परिणाम दाईं ओर आउटपुट फील्ड में दिखाई देगा।",
    "अपने परिणामों को सहेजने के लिए कॉपी या डाउनलोड बटन का उपयोग करें।"
  ],

  tips: [
    "रचनात्मक लेखन अभ्यासों के लिए, कैपिटलाइजेशन संरक्षित लेकिन विराम चिह्न हटाए गए वर्ड मोड का प्रयास करें।",
    "लेआउट परीक्षण के लिए, पढ़ने योग्य लेकिन यादृच्छिक टेक्स्ट बनाए रखने के लिए सभी संरक्षण विकल्पों के साथ वाक्य मोड का उपयोग करें।",
    "टेक्स्ट इनपुट से सुरक्षित पासवर्ड या कोड बनाने के लिए कैरेक्टर मोड का उपयोग करें।",
    "ग्रुप शफल फीचर आपको संबंधित शब्दों को एक साथ रखने की अनुमति देता है, जबकि अभी भी समग्र टेक्स्ट को यादृच्छिक बनाता है।",
    "कई वेरिएशन चाहिए? एक ही बार में कई शफल किए गए संस्करण उत्पन्न करने के लिए दोहराव गिनती सेट करें।"
  ],

  downloadFileName: 'shuffled_text.txt',

  errorMessages: {
    shuffleError: 'शफल प्रोसेसिंग त्रुटि:',
    sentenceError: 'वाक्य शफल त्रुटि:',
    copyError: 'टेक्स्ट कॉपी करने में त्रुटि:'
  }
};