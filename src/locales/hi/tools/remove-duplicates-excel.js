export default {
    name: 'Excel डुप्लिकेट हटाने का उपकरण - ऑनलाइन स्प्रेडशीट डेटा डुप्लिकेट हटाने वाला',
    description: 'निःशुल्क ऑनलाइन Excel डुप्लिकेट हटाने का उपकरण, xlsx/xls/csv फ़ाइल डुप्लिकेट हटाने का समर्थन करता है। डुप्लिकेट डेटा को स्मार्ट तरीके से पहचानता है, कई डुप्लिकेट हटाने के नियम प्रदान करता है, बैच प्रसंस्करण का समर्थन करता है, और एक क्लिक में Excel/CSV प्रारूप में निर्यात करता है',
    inputTitle: 'Excel फ़ाइल अपलोड करें',
    outputTitle: 'डुप्लिकेट हटाने के परिणाम',
    dragTip: 'Excel फ़ाइलों को यहाँ खींचें और छोड़ें या अपलोड करने के लिए क्लिक करें',
    supported: 'समर्थित प्रारूप: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'डुप्लिकेट हटाना शुरू करें',
    downloadBtn: 'परिणाम डाउनलोड करें',
    noOutput: 'कोई डुप्लिकेट हटाने के परिणाम नहीं',
    loadSample: 'नमूना डेटा लोड करें',
    preview: 'डेटा का पूर्वावलोकन करें',
    clearAll: 'सभी साफ़ करें',
    originalData: 'मूल डेटा',
    deleteFile: 'फ़ाइल हटाएँ',
    batchDownload: 'बैच डाउनलोड (ZIP)',
    exportFormat: 'निर्यात प्रारूप',
    dataQuality: 'डेटा गुणवत्ता',
    zoomIn: 'बड़ा करें',
    zoomOut: 'छोटा करें',
    resetView: 'दृश्य रीसेट करें',
    fullscreen: 'पूर्ण स्क्रीन पूर्वावलोकन',
    
    // डुप्लिकेट हटाने के नियम कॉन्फ़िगरेशन
    duplicateRulesTitle: 'डुप्लिकेट हटाने के नियम कॉन्फ़िगरेशन',
    ruleType: 'डुप्लिकेट हटाने का प्रकार',
    ruleTypes: {
        fullRow: 'पूरी पंक्ति डुप्लिकेट हटाना',
        singleColumn: 'एकल स्तंभ डुप्लिकेट हटाना',
        multiColumn: 'बहु-स्तंभ संयोजन डुप्लिकेट हटाना'
    },
    selectedColumns: 'स्तंभ चुनें',
    selectColumns: 'कृपया डुप्लिकेट हटाने के लिए स्तंभ चुनें',
    caseSensitive: 'केस संवेदनशील',
    trimSpaces: 'अग्रणी/पीछे के रिक्त स्थान हटाएँ',
    ignoreEmpty: 'खाली मान अनदेखा करें',
    fuzzyMatch: 'फज़ी मैचिंग',
    similarityThreshold: 'समानता सीमा',
    
    // डेटा आंकड़े
    statisticsTitle: 'डेटा आंकड़े',
    originalRows: 'मूल पंक्तियाँ',
    duplicateRows: 'डुप्लिकेट पंक्तियाँ',
    uniqueRows: 'डुप्लिकेट हटाने के बाद पंक्तियाँ',
    duplicateRate: 'डुप्लिकेट दर',
    
    // पूर्वावलोकन तालिका
    previewTitle: 'डेटा पूर्वावलोकन',
    showDuplicates: 'डुप्लिकेट दिखाएँ',
    showUnique: 'अद्वितीय आइटम दिखाएँ',
    highlightDuplicates: 'डुप्लिकेट हाइलाइट करें',
    
    // निर्यात विकल्प
    exportOptions: 'निर्यात विकल्प',
    includeHeaders: 'शीर्षलेख शामिल करें',
    encoding: 'फ़ाइल एन्कोडिंग',
    delimiter: 'डिलीमिटर',
    
    // कार्रवाई बटन
    processBtn: 'डेटा प्रसंस्करण',
    resetBtn: 'रीसेट करें',
    saveTemplate: 'टेम्पलेट सहेजें',
    loadTemplate: 'टेम्पलेट लोड करें',
    
    // टेम्पलेट प्रबंधन
    savedTemplates: 'सहेजे गए टेम्पलेट',
    deleteTemplate: 'हटाएँ',
    templateNamePrompt: 'कृपया टेम्पलेट का नाम दर्ज करें:',
    templateSaved: 'टेम्पलेट सफलतापूर्वक सहेजा गया!',
    deleteTemplateConfirm: 'क्या आप वाकई इस टेम्पलेट को हटाना चाहते हैं?',
    templateLoadError: 'टेम्पलेट लोड करने में विफल:',
    
    // नमूना डेटा
    sampleHeaders: {
        name: 'नाम',
        email: 'ईमेल',
        phone: 'फ़ोन',
        department: 'विभाग'
    },
    sampleData: {
        zhangsan: 'राम कुमार',
        lisi: 'सीता देवी',
        wangwu: 'मोहन सिंह',
        zhaoliu: 'प्रिया पाटील',
        techDept: 'प्रौद्योगिकी विभाग',
        salesDept: 'बिक्री विभाग',
        hrDept: 'मानव संसाधन विभाग',
        financeDept: 'वित्त विभाग'
    },
    
    // निर्यात से संबंधित
    exportSheetName: 'डुप्लिकेट हटाने के परिणाम',
    exportFileName: 'डुप्लिकेट हटाने के परिणाम',
    jsonMetadataTitle: 'Excel डुप्लिकेट हटाने के परिणाम',
    columnNumber: 'स्तंभ {number}',
    
    // त्रुटि संदेश
    processError: 'फ़ाइल प्रसंस्करण में त्रुटि, कृपया फ़ाइल प्रारूप जाँचें'
};