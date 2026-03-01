export default {
    name: 'सिंगापुर पता जनरेटर - ऑनलाइन वास्तविक सिंगापुर पते उत्पन्न करें',
    description: 'मुफ्त ऑनलाइन सिंगापुर पता जनरेटर, वास्तविक सिंगापुर पते, NRIC नंबर, फोन नंबर, क्रेडिट कार्ड नंबर और पूर्ण पहचान प्रोफाइल बनाता है। क्षेत्र के अनुसार फ़िल्टर, JSON/CSV निर्यात, गोपनीयता के लिए स्थानीय रूप से चलता है।',
    inputTitle: 'जनरेशन सेटिंग्स',
    outputTitle: 'उत्पन्न परिणाम',
    generateBtn: 'डेटा उत्पन्न करें',
    loadSampleBtn: 'नमूना लोड करें और उत्पन्न करें',
    clearAll: 'सभी साफ़ करें',
    noOutput: 'कोई परिणाम नहीं',
    preview: 'डेटा पूर्वावलोकन',
    
    locationTitle: 'स्थान फ़िल्टर',
    selectRegion: 'क्षेत्र चुनें',
    selectArea: 'क्षेत्र चुनें',
    allRegions: 'सभी क्षेत्र',
    allAreas: 'सभी क्षेत्र',
    postalCodeLabel: 'पोस्टल कोड',
    
    addressTypeTitle: 'पता प्रकार',
    addressTypeResidential: 'आवासीय',
    addressTypeCommercial: 'वाणिज्यिक',
    addressTypeHDB: 'HDB फ्लैट',
    addressTypeCondo: 'निजी कोंडो',
    
    identityTitle: 'पहचान जानकारी',
    fullName: 'पूरा नाम',
    gender: 'लिंग',
    genderMale: 'पुरुष',
    genderFemale: 'महिला',
    age: 'आयु',
    birthDate: 'जन्म तिथि',
    race: 'जाति',
    raceChinese: 'चीनी',
    raceMalay: 'मलय',
    raceIndian: 'भारतीय',
    raceOthers: 'अन्य',
    
    contactTitle: 'संपर्क जानकारी',
    phoneNumber: 'फोन नंबर',
    areaCode: 'क्षेत्र कोड',
    email: 'ईमेल पता',
    tempEmail: 'अस्थायी ईमेल',
    
    creditCardTitle: 'क्रेडिट कार्ड जानकारी',
    cardType: 'कार्ड प्रकार',
    cardNumber: 'कार्ड नंबर',
    expiryDate: 'समाप्ति तिथि',
    cvv: 'CVV',
    bankBin: 'बैंक BIN',
    
    careerTitle: 'करियर प्रोफाइल',
    jobTitle: 'नौकरी शीर्षक',
    salary: 'वेतन',
    companyName: 'कंपनी का नाम',
    companySize: 'कंपनी का आकार',
    industry: 'उद्योग',
    employmentStatus: 'रोजगार स्थिति',
    employmentFullTime: 'पूर्णकालिक',
    employmentPartTime: 'अंशकालिक',
    
    idCardTitle: 'NRIC ID कार्ड',
    idCardNumber: 'NRIC नंबर',
    prefixLetter: 'उपसर्ग अक्षर',
    serialNumber: 'क्रम संख्या',
    checkLetter: 'जाँच अक्षर',
    
    exportTitle: 'निर्यात प्रारूप',
    exportJson: 'JSON निर्यात',
    exportCsv: 'CSV निर्यात',
    downloadBtn: 'डाउनलोड',
    copyBtn: 'कॉपी',
    viewDetails: 'विवरण देखें',
    
    batchTitle: 'बैच जनरेशन',
    quantityLabel: 'मात्रा',
    quantityPlaceholder: 'मात्रा दर्ज करें (1-100)',
    
    generating: 'उत्पन्न हो रहा है...',
    generated: 'जनरेशन पूर्ण',
    copySuccess: 'क्लिपबोर्ड पर कॉपी किया गया',
    downloadSuccess: 'डाउनलोड सफल',
    invalidQuantity: 'कृपया 1-100 के बीच एक संख्या दर्ज करें',
    
    resultCount: '{count} रिकॉर्ड उत्पन्न',
    resultSummary: 'परिणाम सारांश',
    showAll: 'सभी दिखाएं',
    collapse: 'संक्षिप्त करें',
    
    generateOptionsTitle: 'जनरेशन विकल्प',
    
    recordLabel: 'रिकॉर्ड #{num}',
    addressLabel: 'पता',
    streetLabel: 'गली',
    houseNumberLabel: 'मकान नंबर',
    buildingLabel: 'इमारत',
    unitLabel: 'इकाई',
    postalCodeLabel: 'पोस्टल कोड',
    regionLabel: 'क्षेत्र',
    
    regions: {
        CR: 'मध्य क्षेत्र',
        ER: 'पूर्व क्षेत्र',
        NR: 'उत्तर क्षेत्र',
        NER: 'पूर्वोत्तर क्षेत्र',
        WR: 'पश्चिम क्षेत्र'
    },
    
    areas: {
        CR: {
            orchard: 'ऑर्चर्ड',
            riverValley: 'रिवर वैली',
            newton: 'न्यूटन',
            tanglin: 'टैंगलिन',
            bukitTimah: 'बुकित तिमाह',
            clementi: 'क्लेमेंटी',
            queenstown: 'क्वींसटाउन'
        },
        ER: {
            bedok: 'बेडोक',
            changi: 'चांगी',
            pasirRis: 'पासिर रिस',
            tampines: 'टैम्पाइन्स',
            payaLebar: 'पाया लेबर'
        },
        NR: {
            angMoKio: 'अंग मो कियो',
            bishan: 'बिशन',
            serangoon: 'सेरंगून',
            hougang: 'हौगंग',
            sengkang: 'सेंगकांग',
            punggol: 'पुंगगोल'
        },
        NER: {
            hougang: 'हौगंग',
            punggol: 'पुंगगोल',
            seletar: 'सेलेटार',
            sengkang: 'सेंगकांग',
            serangoon: 'सेरंगून'
        },
        WR: {
            jurongEast: 'जुरोंग पूर्व',
            jurongWest: 'जुरोंग पश्चिम',
            bukitBatok: 'बुकित बाटोक',
            choaChuKang: 'चोआ चू कांग',
            woodlands: 'वुडलैंड्स',
            sembawang: 'सेम्बावांग',
            yishun: 'यिशुन'
        }
    },
    
    csv: {
        fullAddress: 'पूरा पता',
        street: 'गली',
        houseNumber: 'मकान नंबर',
        building: 'इमारत',
        postalCode: 'पोस्टल कोड',
        fullName: 'नाम',
        gender: 'लिंग',
        age: 'आयु',
        birthDate: 'जन्म तिथि',
        phone: 'फोन',
        email: 'ईमेल',
        cardType: 'कार्ड प्रकार',
        cardNumber: 'कार्ड नंबर',
        idCardNumber: 'NRIC नंबर'
    }
};
