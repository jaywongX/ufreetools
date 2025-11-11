export default {
    name: 'HK पता जेनरेटर - ऑनलाइन में वास्तविक हॉगकॉग पते, पहचान जानकारी और संपर्क विवरण उत्पन्न करें',
    description: 'मुफ्त ऑनलाइन HK पता जेनरेटर जो वास्तविक प्रारूप हॉगकॉग पते, आईडी नंबर, फोन नंबर, क्रेडिट कार्ड नंबर और पूर्ण पहचान प्रोफ़ाइल बनाता है। जिला फ़िल्टरिंग, JSON/CSV निर्यात प्रारूपों का समर्थन करता है, और गोपनीयता सुरक्षा के लिए पूरी तरह से ब्राउज़र में चलता है।',
    inputTitle: 'उत्पन्न सेटिंग्स',
    outputTitle: 'उत्पन्न परिणाम',
    generateBtn: 'डेटा उत्पन्न करें',
    loadSampleBtn: 'नमूना लोड करें और उत्पन्न करें',
    clearAll: 'सभी साफ़ करें',
    noOutput: 'अभी तक कोई परिणाम उत्पन्न नहीं हुआ है',
    preview: 'डेटा पूर्वावलोकन करें',
    
    // भौगोलिक फ़िल्टरिंग
    locationTitle: 'भौगोलिक फ़िल्टरिंग',
    selectDistrict: 'ज़िला चुनें',
    selectArea: 'क्षेत्र चुनें',
    allDistricts: 'सभी ज़िले',
    allAreas: 'सभी क्षेत्र',
    postalCodeLabel: 'डाक कोड',
    validatePostalCode: 'डाक कोड मान्य करें',
    
    // पता प्रकार
    addressTypeTitle: 'पता प्रकार',
    addressTypeResidential: 'आवासीय पता',
    addressTypeCommercial: 'व्यावसायिक पता',
    addressTypeVirtual: 'आभासी मेलबॉक्स',
    addressTypeCampus: 'विश्वविद्यालय परिसर',
    
    // पहचान जानकारी
    identityTitle: 'पहचान जानकारी',
    fullName: 'पूरा नाम',
    gender: 'लिंग',
    genderMale: 'पुरुष',
    genderFemale: 'महिला',
    age: 'आयु',
    birthDate: 'जन्म तिथि',
    zodiac: 'राशि चिह्न',
    height: 'ऊँचाई',
    weight: 'वजन',
    
    // संपर्क जानकारी
    contactTitle: 'संपर्क जानकारी',
    phoneNumber: 'फ़ोन नंबर',
    phoneType: 'फ़ोन प्रकार',
    phoneTypeMobile: 'मोबाइल',
    phoneTypeLandline: 'लैंडलाइन',
    areaCode: 'क्षेत्र कोड',
    email: 'ईमेल पता',
    tempEmail: 'अस्थायी ईमेल',
    
    // क्रेडिट कार्ड
    creditCardTitle: 'क्रेडिट कार्ड जानकारी',
    cardType: 'कार्ड प्रकार',
    cardNumber: 'कार्ड नंबर',
    expiryDate: 'समाप्ति तिथि',
    cvv: 'CVV',
    bankBin: 'बैंक BIN',
    
    // करियर
    careerTitle: 'करियर प्रोफ़ाइल',
    jobTitle: 'पद के नाम',
    salary: 'वेतन',
    companyName: 'कंपनी का नाम',
    companySize: 'कंपनी का आकार',
    industry: 'उद्योग',
    employmentStatus: 'रोजगार स्थिति',
    employmentFullTime: 'पूरा समय',
    employmentPartTime: 'आंशिक समय',
    
    // आईडी कार्ड
    idCardTitle: 'हॉगकॉग आईडी कार्ड',
    idCardNumber: 'आईडी कार्ड नंबर',
    prefixLetter: 'उपसर्ग अक्षर',
    serialNumber: 'क्रम संख्या',
    checkDigit: 'जाँच अंक',
    
    // डिजिटल फिंगरप्रिंट
    fingerprintTitle: 'डिजिटल फिंगरप्रिंट',
    os: 'ऑपरेटिंग सिस्टम',
    osVersion: 'ओएस संस्करण',
    browser: 'ब्राउज़र',
    userAgent: 'उपयोगकर्ता एजेंट',
    screenResolution: 'स्क्रीन रिज़ॉल्यूशन',
    timezone: 'समय क्षेत्र',
    guid: 'GUID',
    ipAddress: 'IP पता',
    macAddress: 'MAC पता',
    cookiePolicy: 'कुकी नीति',
    
    // निर्यात विकल्प
    exportTitle: 'निर्यात प्रारूप',
    exportJson: 'JSON निर्यात करें',
    exportCsv: 'CSV निर्यात करें',
    exportIdCard: 'आईडी कार्ड छवि उत्पन्न करें',
    exportBusinessCard: 'बिज़नेस कार्ड उत्पन्न करें',
    downloadBtn: 'डाउनलोड करें',
    copyBtn: 'प्रतिलिपि बनाएँ',
    viewDetails: 'विवरण देखें',
    
    // बैच उत्पादन
    batchTitle: 'बैच उत्पादन',
    quantityLabel: 'मात्रा',
    quantityPlaceholder: 'मात्रा दर्ज करें (1-100)',
    
    // सूचना संदेश
    generating: 'उत्पन्न हो रहा है...',
    generated: 'उत्पन्न पूर्ण',
    copySuccess: 'क्लिपबोर्ड पर प्रतिलिपि बनाई गई',
    downloadSuccess: 'डाउनलोड सफल',
    invalidQuantity: 'कृपया 1-100 के बीच की संख्या दर्ज करें',
    
    // परिणाम प्रदर्शन
    resultCount: '{count} रिकॉर्ड उत्पन्न हुए',
    resultSummary: 'परिणाम सारांश',
    showAll: 'सभी दिखाएँ',
    collapse: 'संक्षिप्त करें',
    
    // उत्पन्न विकल्प
    generateOptionsTitle: 'उत्पन्न विकल्प',
    
    // रिकॉर्ड प्रदर्शन
    recordLabel: 'रिकॉर्ड #{num}',
    addressLabel: 'पता',
    streetLabel: 'गली',
    houseNumberLabel: 'घर संख्या',
    buildingLabel: 'भवन',
    floorLabel: 'मंजिल',
    unitLabel: 'इकाई',
    districtLabel: 'ज़िला',
    
    // पता प्रारूप
    addressNumber: 'नंबर',
    addressFloor: 'एफ',
    addressUnit: 'इकाई',
    commercialUnit: '(व्यावसायिक इकाई)',
    hongKong: 'हॉगकॉग',
    postOfficeBox: 'डाक बक्सा',
    studentDormitory: 'छात्रावास',
    teachingBuilding: 'शिक्षण भवन',
    library: 'पुस्तकालय',
    buildingUnit: 'इकाई',
    
    // चेतावनी संदेश
    idCardImageAlert: 'आईडी कार्ड छवि उत्पन्न करने के लिए कैनवास कार्यान्वयन की आवश्यकता है',
    businessCardAlert: 'बिज़नेस कार्ड उत्पन्न करने के लिए कैनवास कार्यान्वयन की आवश्यकता है',
    
    // ज़िला नाम
    districts: {
        CW: 'सेंट्रल एंड वेस्टर्न',
        WAN: 'वान चाई',
        E: 'पूर्वी',
        S: 'दक्षिणी',
        YTM: 'यौ त्सिम मोंग',
        SSP: 'शैम शुई पो',
        KC: 'कौलून सिटी',
        WTS: 'वॉंग तै सिन',
        KT: 'क्वून टोंग',
        TM: 'तुएन मुन',
        YL: 'युएन लोंग',
        N: 'उत्तरी',
        TP: 'तै पो',
        ST: 'शा तीन',
        SK: 'सै कुंग',
        TW: 'त्सुएन वान',
        KW: 'क्वै त्सिंग',
        IS: 'द्वीप'
    },
    
    // क्षेत्र नाम
    areas: {
        CW: {
            central: 'सेंट्रल',
            sheungWan: 'शेउंग वान',
            saiWan: 'सै वान',
            midLevels: 'मिड-लेवल्स'
        },
        WAN: {
            wanChai: 'वान चाई',
            causewayBay: 'कॉज़वे बे',
            happyValley: 'हैप्पी वैली',
            taiHang: 'तै हैंग'
        },
        E: {
            northPoint: 'नॉर्थ पॉइंट',
            quarryBay: 'क्वारी बे',
            taiKooShing: 'तै कू शिंग',
            shauKeiWan: 'शौ केई वान',
            chaiWan: 'चै वान'
        },
        S: {
            repulseBay: 'रिपल्स बे',
            deepWaterBay: 'डीप वॉटर बे',
            stanley: 'स्टैनले',
            aberdeen: 'एबरडीन',
            apLeiChau: 'एप लेई चौ'
        },
        YTM: {
            tsimShaTsui: 'त्सिम शा त्सुई',
            yauMaTei: 'यौ मा तेई',
            mongKok: 'मोंग कॉक',
            jordan: 'जॉर्डन'
        },
        SSP: {
            shamShuiPo: 'शैम शुई पो',
            cheungShaWan: 'चेउंग शा वान',
            laiChiKok: 'लै ची कॉक',
            shekKipMei: 'शेक किप मेई'
        },
        KC: {
            kowloonCity: 'कौलून सिटी',
            toKwaWan: 'टो क्वा वान',
            hungHom: 'हंग होम',
            hoManTin: 'हो मैन टिन'
        },
        WTS: {
            wongTaiSin: 'वॉंग तै सिन',
            diamondHill: 'डायमंड हिल',
            sanPoKong: 'सैन पो कॉग',
            lokFu: 'लॉक फू'
        },
        KT: {
            kwunTong: 'क्वून टोंग',
            lamTin: 'लैम टिन',
            ngauTauKok: 'ंगौ तौ कॉक',
            kowloonBay: 'कौलून बे'
        },
        TM: {
            tuenMun: 'तुएन मुन',
            yuenLong: 'युएन लोंग',
            tinShuiWai: 'टिन शुई वै',
            tsingShan: 'त्सिंग शैन'
        },
        YL: {
            yuenLong: 'युएन लोंग',
            tinShuiWai: 'टिन शुई वै',
            kamTin: 'कैम टिन',
            pingShan: 'पिंग शैन'
        },
        N: {
            sheungShui: 'शेउंग शुई',
            fanLing: 'फैन लिंग',
            shaTauKok: 'शा तौ कॉक',
            taKuLing: 'ता कू लिंग'
        },
        TP: {
            taiPo: 'तै पो',
            taiPoMarket: 'तै पो मार्केट',
            taiWo: 'तै वो',
            lamTsuen: 'लैम त्सुएन'
        },
        ST: {
            shaTin: 'शा तीन',
            taiWai: 'तै वै',
            maOnShan: 'मा ऑन शैन',
            foTan: 'फो तैन'
        },
        SK: {
            saiKung: 'सै कुंग',
            tseungKwanO: 'त्सेउंग क्वैन ओ',
            hangHau: 'हैंग हौ',
            clearWaterBay: 'क्लियर वॉटर बे'
        },
        TW: {
            tsuenWan: 'त्सुएन वान',
            kwaiChung: 'क्वै चुंग',
            tsingYi: 'त्सिंग यी',
            shamTseng: 'शैम त्सेंग'
        }
    },
    
    // विश्वविद्यालय नाम
    universities: {
        HKU: 'हॉगकॉग विश्वविद्यालय',
        CUHK: 'चीनी विश्वविद्यालय हॉगकॉग',
        HKUST: 'हॉगकॉग विज्ञान और प्रौद्योगिकी विश्वविद्यालय',
        PolyU: 'हॉगकॉग पॉलिटेक्निक विश्वविद्यालय',
        CityU: 'सिटी विश्वविद्यालय हॉगकॉग'
    },
    
    // CSV कॉलम नाम
    csv: {
        fullAddress: 'पूर्ण पता',
        street: 'गली',
        houseNumber: 'घर संख्या',
        building: 'भवन',
        floor: 'मंजिल',
        unit: 'इकाई',
        district: 'ज़िला',
        fullName: 'पूरा नाम',
        gender: 'लिंग',
        age: 'आयु',
        birthDate: 'जन्म तिथि',
        phone: 'फ़ोन',
        email: 'ईमेल',
        cardType: 'कार्ड प्रकार',
        cardNumber: 'कार्ड नंबर',
        idCardNumber: 'आईडी कार्ड नंबर'
    }
};