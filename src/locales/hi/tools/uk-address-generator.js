export default {
    name: 'यूके पता जनरेटर - ऑनलाइन वास्तविक यूके पते, पहचान जानकारी और संपर्क उत्पन्न करें',
    description: 'मुफ्त ऑनलाइन यूके पता जनरेटर। वास्तविक प्रारूप में यूके पते, राष्ट्रीय बीमा संख्या (NINO), फोन, क्रेडिट कार्ड नंबर और पूर्ण पहचान प्रोफाइल उत्पन्न करें। काउंटी द्वारा फ़िल्टर करें, JSON/CSV में निर्यात करें, गोपनीयता के लिए शुद्ध फ्रंटएंड प्रोसेसिंग।',
    inputTitle: 'जनरेशन कॉन्फ़िगरेशन',
    outputTitle: 'परिणाम',
    generateBtn: 'डेटा उत्पन्न करें',
    loadSampleBtn: 'उदाहरण लोड करें और उत्पन्न करें',
    clearAll: 'सब साफ करें',
    noOutput: 'कोई परिणाम नहीं',
    preview: 'पूर्वावलोकन',
    
    locationTitle: 'भौगोलिक फ़िल्टर',
    selectCounty: 'काउंटी चुनें',
    selectCity: 'शहर चुनें',
    allCounties: 'सभी काउंटी',
    allCities: 'सभी शहर',
    postcodeLabel: 'पोस्टकोड',
    validatePostcode: 'पोस्टकोड सत्यापित करें',
    
    addressTypeTitle: 'पता प्रकार',
    addressTypeResidential: 'आवासीय पता',
    addressTypeCommercial: 'वाणिज्यिक पता',
    addressTypePoBox: 'पोस्ट बॉक्स',
    addressTypeCampus: 'विश्वविद्यालय परिसर',
    
    identityTitle: 'पहचान जानकारी',
    fullName: 'पूरा नाम',
    gender: 'लिंग',
    genderMale: 'पुरुष',
    genderFemale: 'महिला',
    age: 'आयु',
    birthDate: 'जन्म तिथि',
    zodiac: 'राशि',
    height: 'ऊंचाई',
    weight: 'वजन',
    
    contactTitle: 'संपर्क जानकारी',
    phoneNumber: 'फोन नंबर',
    phoneType: 'फोन प्रकार',
    phoneTypeMobile: 'मोबाइल',
    phoneTypeLandline: 'लैंडलाइन',
    areaCode: 'एरिया कोड',
    email: 'ईमेल पता',
    tempEmail: 'अस्थायी ईमेल',
    
    creditCardTitle: 'क्रेडिट कार्ड जानकारी',
    cardType: 'कार्ड प्रकार',
    cardNumber: 'कार्ड नंबर',
    expiryDate: 'समाप्ति तिथि',
    cvv: 'CVV',
    bankBin: 'बैंक BIN कोड',
    
    careerTitle: 'व्यावसायिक प्रोफाइल',
    jobTitle: 'नौकरी शीर्षक',
    salary: 'वेतन',
    companyName: 'कंपनी का नाम',
    companySize: 'कंपनी का आकार',
    industry: 'उद्योग',
    employmentStatus: 'रोजगार स्थिति',
    employmentFullTime: 'पूर्णकालिक',
    employmentPartTime: 'अंशकालिक',
    
    idCardTitle: 'राष्ट्रीय बीमा संख्या (NINO)',
    idCardNumber: 'राष्ट्रीय बीमा संख्या',
    prefixLetter: 'उपसर्ग अक्षर',
    serialNumber: 'क्रम संख्या',
    suffixLetter: 'प्रत्यय अक्षर',
    
    fingerprintTitle: 'डिजिटल फिंगरप्रिंट',
    os: 'ऑपरेटिंग सिस्टम',
    osVersion: 'सिस्टम संस्करण',
    browser: 'ब्राउज़र',
    userAgent: 'User Agent',
    screenResolution: 'स्क्रीन रिज़ॉल्यूशन',
    timezone: 'समय क्षेत्र',
    guid: 'GUID',
    ipAddress: 'IP पता',
    macAddress: 'MAC पता',
    cookiePolicy: 'कुकी नीति',
    
    exportTitle: 'निर्यात प्रारूप',
    exportJson: 'JSON निर्यात करें',
    exportCsv: 'CSV निर्यात करें',
    downloadBtn: 'डाउनलोड',
    copyBtn: 'कॉपी करें',
    viewDetails: 'विवरण देखें',
    
    batchTitle: 'बैच जनरेशन',
    quantityLabel: 'उत्पन्न करने की मात्रा',
    quantityPlaceholder: 'मात्रा दर्ज करें (1-100)',
    
    generating: 'उत्पन्न हो रहा है...',
    generated: 'जनरेशन पूर्ण',
    copySuccess: 'क्लिपबोर्ड पर कॉपी किया गया',
    downloadSuccess: 'डाउनलोड सफल',
    invalidQuantity: '1-100 के बीच एक संख्या दर्ज करें',
    
    resultCount: 'कुल {count} रिकॉर्ड उत्पन्न',
    resultSummary: 'परिणाम सारांश',
    showAll: 'सभी दिखाएं',
    collapse: 'संक्षिप्त करें',
    
    generateOptionsTitle: 'जनरेशन विकल्प',
    
    recordLabel: 'रिकॉर्ड #{num}',
    addressLabel: 'पता',
    streetLabel: 'गली',
    houseNumberLabel: 'मकान नंबर',
    buildingLabel: 'इमारत',
    cityLabel: 'शहर',
    countyLabel: 'काउंटी',
    
    counties: {
        LND: 'ग्रेटर लंदन',
        GRM: 'ग्रेटर मैनचेस्टर',
        MAN: 'मैनचेस्टर',
        BIR: 'वेस्ट मिडलैंड्स',
        LEE: 'वेस्ट यॉर्कशायर',
        SHE: 'साउथ यॉर्कशायर',
        LIV: 'मर्सीसाइड',
        BRS: 'ब्रिस्टल',
        NEW: 'टाइन एंड वियर',
        NOT: 'नॉटिंघमशायर',
        EDB: 'एडिनबर्ग',
        GLA: 'ग्लासगो',
        CDF: 'कार्डिफ',
        BEL: 'बेलफास्ट',
        SOU: 'साउथेम्प्टन',
        POR: 'प्लायमाउथ',
        BRI: 'ब्राइटन',
        CAM: 'कैम्ब्रिजशायर'
    },
    
    cities: {
        LND: {
            westminster: 'वेस्टमिंस्टर',
            kensington: 'केंसिंग्टन',
            chelsea: 'चेल्सी',
            camden: 'कैमडेन',
            islington: 'इज़लिंग्टन',
            hackney: 'हैकनी',
            towerHamlets: 'टॉवर हैमलेट्स',
            greenwich: 'ग्रीनविच'
        },
        GRM: {
            manchester: 'मैनचेस्टर',
            salford: 'सालफोर्ड',
            bolton: 'बोल्टन',
            bury: 'बरी',
            oldham: 'ओल्डहम',
            rochdale: 'रोचडेल',
            stockport: 'स्टॉकपोर्ट',
            wigan: 'विगान'
        },
        MAN: {
            manchesterCity: 'मैनचेस्टर शहर',
            trafford: 'ट्रैफोर्ड',
            tameside: 'टेमसाइड',
            sale: 'सेल'
        },
        BIR: {
            birmingham: 'बर्मिंघम',
            coventry: 'कोवेंट्री',
            wolverhampton: 'वुल्वरहैम्प्टन',
            dudley: 'डडली',
            walsall: 'वॉल्सॉल',
            sandwell: 'सैंडवेल',
            solihull: 'सोलिहुल'
        },
        LEE: {
            leeds: 'लीड्स',
            bradford: 'ब्रैडफोर्ड',
            wakefield: 'वेकफील्ड',
            kirklees: 'किर्कलीस',
            calderdale: 'काल्डरडेल'
        },
        SHE: {
            sheffield: 'शेफ़ील्ड',
            rotherham: 'रोथरहैम',
            doncaster: 'डॉनकास्टर',
            barnsley: 'बार्न्सली'
        },
        LIV: {
            liverpool: 'लिवरपूल',
            knowsley: 'नोज़ली',
            sefton: 'सेफ्टन',
            wirral: 'विरल',
            stHelens: 'सेंट हेलेंस'
        },
        BRS: {
            bristol: 'ब्रिस्टल',
            southGloucestershire: 'साउथ ग्लॉस्टरशायर',
            bath: 'बाथ'
        },
        NEW: {
            newcastle: 'न्यूकैसल',
            gateshead: 'गेट्सहेड',
            sunderland: 'सुंदरलैंड',
            durham: 'डरहम',
            northTyneside: 'नॉर्थ टाइनसाइड',
            southTyneside: 'साउथ टाइनसाइड'
        },
        NOT: {
            nottingham: 'नॉटिंघम',
            derby: 'डर्बी',
            leicester: 'लीसेस्टर',
            lincoln: 'लिंकन'
        },
        EDB: {
            edinburgh: 'एडिनबर्ग',
            glasgow: 'ग्लासगो',
            aberdeen: 'अबरडीन',
            dundee: 'डंडी',
            inverness: 'इनवरनेस'
        },
        GLA: {
            glasgowCity: 'ग्लासगो शहर',
            paisley: 'पैस्ली',
            motherwell: 'मदरवेल',
            hamilton: 'हैमिल्टन',
            eastKilbride: 'ईस्ट किलब्राइड'
        },
        CDF: {
            cardiff: 'कार्डिफ',
            swansea: 'स्वानसी',
            newport: 'न्यूपोर्ट',
            wrexham: 'रेक्सहैम',
            barry: 'बैरी'
        },
        BEL: {
            belfast: 'बेलफास्ट',
            derry: 'डेरी',
            lisburn: 'लिसबर्न',
            newry: 'न्यूरी',
            bangor: 'बैंगर'
        },
        SOU: {
            southampton: 'साउथेम्प्टन',
            portsmouth: 'पोर्ट्समाउथ',
            bournemouth: 'बोर्नमाउथ',
            poole: 'पूल',
            winchester: 'विंचेस्टर'
        },
        POR: {
            plymouth: 'प्लायमाउथ',
            exeter: 'एक्सेटर',
            truro: 'ट्रूरो',
            bath: 'बाथ',
            taunton: 'टॉन्टन'
        },
        BRI: {
            brighton: 'ब्राइटन',
            hove: 'होव',
            worthing: 'वोर्थिंग',
            eastbourne: 'ईस्टबर्न',
            hastings: 'हेस्टिंग्स'
        },
        CAM: {
            cambridge: 'कैम्ब्रिज',
            oxford: 'ऑक्सफोर्ड',
            peterborough: 'पीटरबोरो',
            luton: 'लूटन',
            miltonKeynes: 'मिल्टन कीन्स'
        }
    },
    
    universities: {
        OXF: 'ऑक्सफोर्ड विश्वविद्यालय',
        CAM: 'कैम्ब्रिज विश्वविद्यालय',
        IMP: 'इंपीरियल कॉलेज लंदन',
        UCL: 'यूनिवर्सिटी कॉलेज लंदन',
        EDB: 'एडिनबर्ग विश्वविद्यालय'
    },
    
    studentHall: 'छात्रावास',
    academicBuilding: 'शैक्षणिक भवन',
    library: 'पुस्तकालय',
    
    csv: {
        fullAddress: 'पूरा पता',
        street: 'गली',
        houseNumber: 'मकान नंबर',
        building: 'इमारत',
        postcode: 'पोस्टकोड',
        city: 'शहर',
        county: 'काउंटी',
        fullName: 'नाम',
        gender: 'लिंग',
        age: 'आयु',
        birthDate: 'जन्म तिथि',
        phone: 'फोन',
        email: 'ईमेल',
        cardType: 'कार्ड प्रकार',
        cardNumber: 'कार्ड नंबर',
        idCardNumber: 'राष्ट्रीय बीमा संख्या'
    }
};
