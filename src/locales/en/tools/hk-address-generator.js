export default {
    name: 'HK Address Generator - Generate Real Hong Kong Addresses, Identity Info & Contact Details Online',
    description: 'Free online HK address generator that creates real-format Hong Kong addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports district filtering, JSON/CSV export formats, and runs entirely in the browser for privacy protection.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results generated yet',
    preview: 'Preview Data',
    
    // Geographic Filtering
    locationTitle: 'Geographic Filtering',
    selectDistrict: 'Select District',
    selectArea: 'Select Area',
    allDistricts: 'All Districts',
    allAreas: 'All Areas',
    postalCodeLabel: 'Postal Code',
    validatePostalCode: 'Validate Postal Code',
    
    // Address Types
    addressTypeTitle: 'Address Type',
    addressTypeResidential: 'Residential Address',
    addressTypeCommercial: 'Commercial Address',
    addressTypeVirtual: 'Virtual Mailbox',
    addressTypeCampus: 'University Campus',
    
    // Identity Information
    identityTitle: 'Identity Information',
    fullName: 'Full Name',
    gender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    age: 'Age',
    birthDate: 'Birth Date',
    zodiac: 'Zodiac Sign',
    height: 'Height',
    weight: 'Weight',
    
    // Contact Information
    contactTitle: 'Contact Information',
    phoneNumber: 'Phone Number',
    phoneType: 'Phone Type',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Landline',
    areaCode: 'Area Code',
    email: 'Email Address',
    tempEmail: 'Temporary Email',
    
    // Credit Card
    creditCardTitle: 'Credit Card Information',
    cardType: 'Card Type',
    cardNumber: 'Card Number',
    expiryDate: 'Expiry Date',
    cvv: 'CVV',
    bankBin: 'Bank BIN',
    
    // Career
    careerTitle: 'Career Profile',
    jobTitle: 'Job Title',
    salary: 'Salary',
    companyName: 'Company Name',
    companySize: 'Company Size',
    industry: 'Industry',
    employmentStatus: 'Employment Status',
    employmentFullTime: 'Full-time',
    employmentPartTime: 'Part-time',
    
    // ID Card
    idCardTitle: 'Hong Kong ID Card',
    idCardNumber: 'ID Card Number',
    prefixLetter: 'Prefix Letter',
    serialNumber: 'Serial Number',
    checkDigit: 'Check Digit',
    
    // Digital Fingerprint
    fingerprintTitle: 'Digital Fingerprint',
    os: 'Operating System',
    osVersion: 'OS Version',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Screen Resolution',
    timezone: 'Time Zone',
    guid: 'GUID',
    ipAddress: 'IP Address',
    macAddress: 'MAC Address',
    cookiePolicy: 'Cookie Policy',
    
    // Export Options
    exportTitle: 'Export Format',
    exportJson: 'Export JSON',
    exportCsv: 'Export CSV',
    exportIdCard: 'Generate ID Card Image',
    exportBusinessCard: 'Generate Business Card',
    downloadBtn: 'Download',
    copyBtn: 'Copy',
    viewDetails: 'View Details',
    
    // Batch Generation
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-100)',
    
    // Notification Messages
    generating: 'Generating...',
    generated: 'Generation Complete',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-100',
    
    // Result Display
    resultCount: '{count} records generated',
    resultSummary: 'Result Summary',
    showAll: 'Show All',
    collapse: 'Collapse',
    
    // Generation Options
    generateOptionsTitle: 'Generation Options',
    
    // Record Display
    recordLabel: 'Record #{num}',
    addressLabel: 'Address',
    streetLabel: 'Street',
    houseNumberLabel: 'House Number',
    buildingLabel: 'Building',
    floorLabel: 'Floor',
    unitLabel: 'Unit',
    districtLabel: 'District',
    
    // Address Format
    addressNumber: 'No.',
    addressFloor: 'F',
    addressUnit: 'Unit',
    commercialUnit: '(Commercial Unit)',
    hongKong: 'Hong Kong',
    postOfficeBox: 'Post Office Box',
    studentDormitory: 'Student Dormitory',
    teachingBuilding: 'Teaching Building',
    library: 'Library',
    buildingUnit: 'Unit',
    
    // Alert Messages
    idCardImageAlert: 'ID card image generation requires canvas implementation',
    businessCardAlert: 'Business card generation requires canvas implementation',
    
    // District Names
    districts: {
        CW: 'Central & Western',
        WAN: 'Wan Chai',
        E: 'Eastern',
        S: 'Southern',
        YTM: 'Yau Tsim Mong',
        SSP: 'Sham Shui Po',
        KC: 'Kowloon City',
        WTS: 'Wong Tai Sin',
        KT: 'Kwun Tong',
        TM: 'Tuen Mun',
        YL: 'Yuen Long',
        N: 'North',
        TP: 'Tai Po',
        ST: 'Sha Tin',
        SK: 'Sai Kung',
        TW: 'Tsuen Wan',
        KW: 'Kwai Tsing',
        IS: 'Islands'
    },
    
    // Area Names
    areas: {
        CW: {
            central: 'Central',
            sheungWan: 'Sheung Wan',
            saiWan: 'Sai Wan',
            midLevels: 'Mid-Levels'
        },
        WAN: {
            wanChai: 'Wan Chai',
            causewayBay: 'Causeway Bay',
            happyValley: 'Happy Valley',
            taiHang: 'Tai Hang'
        },
        E: {
            northPoint: 'North Point',
            quarryBay: 'Quarry Bay',
            taiKooShing: 'Tai Koo Shing',
            shauKeiWan: 'Shau Kei Wan',
            chaiWan: 'Chai Wan'
        },
        S: {
            repulseBay: 'Repulse Bay',
            deepWaterBay: 'Deep Water Bay',
            stanley: 'Stanley',
            aberdeen: 'Aberdeen',
            apLeiChau: 'Ap Lei Chau'
        },
        YTM: {
            tsimShaTsui: 'Tsim Sha Tsui',
            yauMaTei: 'Yau Ma Tei',
            mongKok: 'Mong Kok',
            jordan: 'Jordan'
        },
        SSP: {
            shamShuiPo: 'Sham Shui Po',
            cheungShaWan: 'Cheung Sha Wan',
            laiChiKok: 'Lai Chi Kok',
            shekKipMei: 'Shek Kip Mei'
        },
        KC: {
            kowloonCity: 'Kowloon City',
            toKwaWan: 'To Kwa Wan',
            hungHom: 'Hung Hom',
            hoManTin: 'Ho Man Tin'
        },
        WTS: {
            wongTaiSin: 'Wong Tai Sin',
            diamondHill: 'Diamond Hill',
            sanPoKong: 'San Po Kong',
            lokFu: 'Lok Fu'
        },
        KT: {
            kwunTong: 'Kwun Tong',
            lamTin: 'Lam Tin',
            ngauTauKok: 'Ngau Tau Kok',
            kowloonBay: 'Kowloon Bay'
        },
        TM: {
            tuenMun: 'Tuen Mun',
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            tsingShan: 'Tsing Shan'
        },
        YL: {
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            kamTin: 'Kam Tin',
            pingShan: 'Ping Shan'
        },
        N: {
            sheungShui: 'Sheung Shui',
            fanLing: 'Fan Ling',
            shaTauKok: 'Sha Tau Kok',
            taKuLing: 'Ta Ku Ling'
        },
        TP: {
            taiPo: 'Tai Po',
            taiPoMarket: 'Tai Po Market',
            taiWo: 'Tai Wo',
            lamTsuen: 'Lam Tsuen'
        },
        ST: {
            shaTin: 'Sha Tin',
            taiWai: 'Tai Wai',
            maOnShan: 'Ma On Shan',
            foTan: 'Fo Tan'
        },
        SK: {
            saiKung: 'Sai Kung',
            tseungKwanO: 'Tseung Kwan O',
            hangHau: 'Hang Hau',
            clearWaterBay: 'Clear Water Bay'
        },
        TW: {
            tsuenWan: 'Tsuen Wan',
            kwaiChung: 'Kwai Chung',
            tsingYi: 'Tsing Yi',
            shamTseng: 'Sham Tseng'
        }
    },
    
    // University Names
    universities: {
        HKU: 'The University of Hong Kong',
        CUHK: 'The Chinese University of Hong Kong',
        HKUST: 'The Hong Kong University of Science and Technology',
        PolyU: 'The Hong Kong Polytechnic University',
        CityU: 'City University of Hong Kong'
    },
    
    // CSV Column Names
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House Number',
        building: 'Building',
        floor: 'Floor',
        unit: 'Unit',
        district: 'District',
        fullName: 'Full Name',
        gender: 'Gender',
        age: 'Age',
        birthDate: 'Birth Date',
        phone: 'Phone',
        email: 'Email',
        cardType: 'Card Type',
        cardNumber: 'Card Number',
        idCardNumber: 'ID Card Number'
    }
};