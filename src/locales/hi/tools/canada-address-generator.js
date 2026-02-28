export default {
    name: 'कनाडा पता जनरेटर - ऑनलाइन वास्तविक कनाडाई पते बनाएं',
    description: 'मुफ्त ऑनलाइन कनाडा पता जनरेटर। वास्तविक प्रारूप कनाडाई पते, पिन कोड, फोन नंबर, क्रेडिट कार्ड और पूर्ण पहचान प्रोफाइल बनाएं।',
    inputTitle: 'जनरेशन सेटिंग्स',
    outputTitle: 'उत्पन्न परिणाम',
    generateBtn: 'डेटा जनरेट करें',
    loadSampleBtn: 'नमूना लोड करें और जनरेट करें',
    clearAll: 'सभी साफ़ करें',
    noOutput: 'अभी तक कोई परिणाम नहीं',
    
    locationTitle: 'स्थान फ़िल्टर',
    selectProvince: 'प्रांत चुनें',
    selectCity: 'शहर चुनें',
    allProvinces: 'सभी प्रांत',
    allCities: 'सभी शहर',
    postalCodeLabel: 'पिन कोड',
    
    addressTypeTitle: 'पता प्रकार',
    addressTypeResidential: 'आवासीय',
    addressTypeCommercial: 'व्यावसायिक',
    addressTypeVirtual: 'पीओ बॉक्स',
    addressTypeCampus: 'विश्वविद्यालय परिसर',
    
    identityTitle: 'पहचान जानकारी',
    fullName: 'पूरा नाम',
    gender: 'लिंग',
    genderMale: 'पुरुष',
    genderFemale: 'महिला',
    age: 'आयु',
    birthDate: 'जन्म तिथि',
    
    contactTitle: 'संपर्क जानकारी',
    phoneNumber: 'फोन नंबर',
    phoneTypeMobile: 'मोबाइल',
    phoneTypeLandline: 'लैंडलाइन',
    email: 'ईमेल पता',
    
    creditCardTitle: 'क्रेडिट कार्ड जानकारी',
    cardType: 'कार्ड प्रकार',
    cardNumber: 'कार्ड नंबर',
    expiryDate: 'समाप्ति तिथि',
    cvv: 'CVV',
    
    careerTitle: 'करियर प्रोफाइल',
    jobTitle: 'नौकरी शीर्षक',
    salary: 'वेतन',
    companyName: 'कंपनी का नाम',
    
    sinTitle: 'सामाजिक बीमा संख्या (SIN)',
    sinNumber: 'SIN नंबर',
    
    fingerprintTitle: 'डिजिटल फिंगरप्रिंट',
    os: 'ऑपरेटिंग सिस्टम',
    browser: 'ब्राउज़र',
    ipAddress: 'IP पता',
    
    exportTitle: 'निर्यात प्रारूप',
    exportJson: 'JSON निर्यात करें',
    exportCsv: 'CSV निर्यात करें',
    downloadBtn: 'डाउनलोड करें',
    copyBtn: 'कॉपी करें',
    viewDetails: 'विवरण देखें',
    
    quantityLabel: 'मात्रा',
    quantityPlaceholder: 'मात्रा दर्ज करें (1-100)',
    
    generating: 'जनरेट हो रहा है...',
    copySuccess: 'क्लिपबोर्ड पर कॉपी किया गया',
    invalidQuantity: 'कृपया 1-100 के बीच एक संख्या दर्ज करें',
    
    resultCount: '{count} रिकॉर्ड उत्पन्न हुए',
    collapse: 'संक्षिप्त करें',
    
    generateOptionsTitle: 'जनरेशन विकल्प',
    
    recordLabel: 'रिकॉर्ड #{num}',
    addressLabel: 'पता',
    streetLabel: 'गली',
    houseNumberLabel: 'घर नंबर',
    cityLabel: 'शहर',
    provinceLabel: 'प्रांत',
    postalCodeDisplay: 'पिन कोड',
    
    provinces: {
        ON: 'ओंटारियो',
        QC: 'क्यूबेक',
        BC: 'ब्रिटिश कोलंबिया',
        AB: 'अल्बर्टा',
        MB: 'मैनिटोबा',
        SK: 'सस्केचेवान',
        NS: 'नोवा स्कोशिया',
        NB: 'न्यू ब्रंसविक',
        NL: 'न्यूफाउंडलैंड और लैब्राडोर',
        PE: 'प्रिंस एडवर्ड आइलैंड',
        NT: 'उत्तर पश्चिम क्षेत्र',
        YT: 'युकोन',
        NU: 'नुनावुत'
    },
    
    cities: {
        ON: { toronto: 'टोरंटो', ottawa: 'ओटावा', mississauga: 'मिसिसॉगा' },
        QC: { montreal: 'मॉन्ट्रियल', quebec: 'क्यूबेक सिटी', laval: 'लावाल' },
        BC: { vancouver: 'वैंकूवर', victoria: 'विक्टोरिया', burnaby: 'बर्नाबी' },
        AB: { calgary: 'कैलगरी', edmonton: 'एडमॉन्टन' }
    },
    
    universities: {
        UofT: 'टोरंटो विश्वविद्यालय',
        UBC: 'ब्रिटिश कोलंबिया विश्वविद्यालय',
        McGill: 'मैकगिल विश्वविद्यालय',
        Waterloo: 'वाटरलू विश्वविद्यालय',
        Alberta: 'अल्बर्टा विश्वविद्यालय'
    },
    
    csv: {
        fullAddress: 'पूरा पता',
        street: 'गली',
        city: 'शहर',
        province: 'प्रांत',
        postalCode: 'पिन कोड',
        fullName: 'पूरा नाम',
        phone: 'फोन',
        email: 'ईमेल'
    }
};
