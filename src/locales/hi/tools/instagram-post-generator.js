export default {
  name: 'इंस्टाग्राम पोस्ट जेनरेटर',
  description: 'कस्टम सामग्री, पृष्ठभूमि और जुड़ाव आंकड़ों के साथ यथार्थवादी इंस्टाग्राम पोस्ट मॉकअप बनाएं',

  // डिज़ाइन विकल्प
  designOptions: 'डिज़ाइन विकल्प',

  // उपयोगकर्ता प्रोफ़ाइल
  userProfile: {
    title: 'उपयोगकर्ता प्रोफ़ाइल सेटिंग्स',
    username: 'उपयोगकर्ता नाम',
    location: 'स्थान',
    postedTime: 'पोस्ट की गई तिथि और समय',
    postDate: 'पोस्ट तिथि',
    avatar: 'अवतार',
    uploadAvatar: 'अवतार अपलोड करें',
    removeAvatar: 'हटाएं',
    verifiedAccount: 'खाता स्थिति',
    isVerified: 'सत्यापित खाता'
  },

  // सामग्री प्रकार
  contentType: 'सामग्री प्रकार',

  contentTypes: {
    text: 'केवल टेक्स्ट',
    image: 'केवल छवि',
    mixed: 'टेक्स्ट और छवि'
  },

  // टेक्स्ट सामग्री
  textContent: 'टेक्स्ट सामग्री',

  postText: 'पोस्ट टेक्स्ट',
  addHashtag: 'हैशटैग जोड़ें',
  mentionUser: 'उपयोगकर्ता का उल्लेख करें',
  insertEmoji: 'इमोजी',
  commonEmojis: 'सामान्य इमोजी',
  recommendedHashtags: 'अनुशंसित हैशटैग',

  // टेक्स्ट फ़ॉर्मेटिंग
  fontFamily: 'फ़ॉन्ट परिवार',

  fontSize: 'फ़ॉन्ट आकार',
  textAlign: 'टेक्स्ट संरेखण',
  textColor: 'टेक्स्ट का रंग',

  // पृष्ठभूमि छवि
  backgroundImage: 'पृष्ठभूमि छवि',

  uploadImage: 'एक छवि अपलोड करें',
  dragAndDrop: 'या खींचें और छोड़ें',
  imageFormats: 'PNG, JPG, GIF 2MB तक',

  // पृष्ठभूमि
  background: 'पृष्ठभूमि',

  backgroundColor: 'पृष्ठभूमि का रंग',
  backgroundType: 'पृष्ठभूमि प्रकार',

  backgroundTypes: {
    solid: 'ठोस रंग',
    gradient: 'ग्रेडिएंट',
    pattern: 'पैटर्न'
  },

  // ग्रेडिएंट विकल्प
  gradientStartColor: 'प्रारंभ रंग',

  gradientEndColor: 'अंतिम रंग',
  gradientDirection: 'दिशा',

  gradientDirections: {
    horizontal: 'क्षैतिज',
    vertical: 'ऊर्ध्वाधर',
    diagonal: 'विकर्ण',
    diagonalReverse: 'विपरीत विकर्ण'
  },

  // पैटर्न विकल्प
  patternType: 'पैटर्न प्रकार',

  // पोस्ट प्रारूप
  postFormat: 'पोस्ट प्रारूप',

  formats: {
    square: 'वर्ग',
    portrait: 'पोर्ट्रेट',
    landscape: 'लैंडस्केप'
  },

  // जुड़ाव
  engagement: {
    title: 'जुड़ाव सिम्युलेटर',
    likeCount: 'पसंद की संख्या',
    commentCount: 'टिप्पणी संख्या',
    viewCount: 'देखे जाने की संख्या',
    isLiked: 'दर्शक द्वारा पसंद किया गया',
    isSaved: 'दर्शक द्वारा सहेजा गया',
    hasStory: 'इंस्टाग्राम स्टोरी है',
    showComments: 'टिप्पणियां दिखाएं',
    isTagged: 'लोग टैग किए गए',
    isSponsored: 'प्रायोजित सामग्री'
  },

  // टिप्पणियाँ
  comments: {
    title: 'नकली टिप्पणियाँ',
    addComment: 'टिप्पणी जोड़ें',
    delete: 'हटाएं',
    addForRealism: 'यथार्थवाद के लिए नकली टिप्पणियाँ जोड़ें',
    username: 'उपयोगकर्ता नाम',
    text: 'टिप्पणी'
  },

  // संकेत
  prompts: {
    enterHashtag: 'हैशटैग दर्ज करें (# के बिना)',
    enterUsername: 'उल्लेख करने के लिए उपयोगकर्ता नाम दर्ज करें',
    enterComment: 'टिप्पणी टेक्स्ट दर्ज करें',
    defaultComment: 'बहुत बढ़िया लग रहा है!',
    enterCommentUsername: 'टिप्पणी उपयोगकर्ता नाम दर्ज करें',
    justNow: 'अभी-अभी'
  },

  // कार्रवाई बटन
  resetDesign: 'डिज़ाइन रीसेट करें',

  // पूर्वावलोकन और निर्यात
  preview: 'पूर्वावलोकन',

  export: 'निर्यात',
  downloadAsPNG: 'PNG के रूप में डाउनलोड करें',
  downloadAsJPG: 'JPG के रूप में डाउनलोड करें',
  copyToClipboard: 'क्लिपबोर्ड पर कॉपी करें',
  copied: 'कॉपी किया गया!',
  generating: 'छवि उत्पन्न हो रही है...'
};