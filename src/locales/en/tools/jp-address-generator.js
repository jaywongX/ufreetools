export default {
    name: 'Japan Address Generator - Generate Real Japanese Addresses, Identity Info & Contact Details Online',
    description: 'Free online Japan address generator that creates authentic Japanese address formats, My Number (Individual Number), phone numbers, credit cards, and complete identity profiles. Filter by prefecture, export to JSON/CSV, runs entirely in-browser for privacy.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results generated yet',
    preview: 'Preview Data',
    
    // Geographic filtering
    locationTitle: 'Geographic Location Filter',
    selectPrefecture: 'Select Prefecture',
    selectCity: 'Select City/Ward',
    allPrefectures: 'All Prefectures',
    allCities: 'All Cities/Wards',
    postalCodeLabel: 'Postal Code',
    validatePostalCode: 'Validate Postal Code',
    
    // Address types
    addressTypeTitle: 'Address Type',
    addressTypeResidential: 'Residential Address',
    addressTypeCommercial: 'Commercial Address',
    addressTypeVirtual: 'Virtual Mailbox',
    addressTypeCampus: 'University Campus',
    
    // Identity information
    identityTitle: 'Identity Information',
    fullName: 'Full Name',
    fullNameKana: 'Katakana Name',
    gender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    age: 'Age',
    birthDate: 'Birth Date',
    zodiac: 'Zodiac Sign',
    bloodType: 'Blood Type',
    height: 'Height',
    weight: 'Weight',
    
    // Contact information
    contactTitle: 'Contact Information',
    phoneNumber: 'Phone Number',
    phoneType: 'Phone Type',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Landline',
    areaCode: 'Area Code',
    email: 'Email Address',
    tempEmail: 'Temporary Email',
    
    // Credit card
    creditCardTitle: 'Credit Card Information',
    cardType: 'Card Type',
    cardNumber: 'Card Number',
    expiryDate: 'Expiry Date',
    cvv: 'CVV',
    bankBin: 'Bank BIN Code',
    
    // Career
    careerTitle: 'Career Profile',
    jobTitle: 'Job Title',
    salary: 'Salary',
    companyName: 'Company Name',
    companySize: 'Company Size',
    industry: 'Industry',
    employmentStatus: 'Employment Status',
    employmentFullTime: 'Full-time Employee',
    employmentPartTime: 'Contract Employee',
    
    // My Number (Individual Number)
    idCardTitle: 'My Number (Individual Number)',
    idCardNumber: 'Individual Number',
    
    // Digital fingerprint
    fingerprintTitle: 'Digital Fingerprint',
    os: 'Operating System',
    osVersion: 'OS Version',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Screen Resolution',
    timezone: 'Timezone',
    guid: 'GUID',
    ipAddress: 'IP Address',
    macAddress: 'MAC Address',
    cookiePolicy: 'Cookie Policy',
    
    // Export options
    exportTitle: 'Export Format',
    exportJson: 'Export JSON',
    exportCsv: 'Export CSV',
    exportIdCard: 'Generate Resident Card Image',
    exportBusinessCard: 'Generate Business Card',
    downloadBtn: 'Download',
    copyBtn: 'Copy',
    viewDetails: 'View Details',
    
    // Batch generation
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-100)',
    
    // Status messages
    generating: 'Generating...',
    generated: 'Generation Complete',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-100',
    
    // Result display
    resultCount: 'Generated {count} records',
    resultSummary: 'Result Summary',
    showAll: 'Show All',
    collapse: 'Collapse',
    
    // Generation options
    generateOptionsTitle: 'Generation Options',
    
    // Record display
    recordLabel: 'Record #{num}',
    addressLabel: 'Address',
    postalCodeLabelDisplay: 'Postal Code',
    prefectureLabel: 'Prefecture',
    cityLabel: 'City/Ward',
    townLabel: 'Town',
    chomeLabel: 'Chome',
    banLabel: 'Ban',
    goLabel: 'Go',
    buildingLabel: 'Building Name',
    floorLabel: 'Floor',
    roomLabel: 'Room',
    
    // Address format
    addressNumber: '-',
    addressFloor: 'F',
    addressRoom: '',
    commercialUnit: ' (Commercial)',
    japan: 'Japan',
    postOfficeBox: 'PO Box',
    studentDormitory: 'Student Dormitory',
    teachingBuilding: 'Academic Building',
    library: 'Library',
    buildingUnit: 'Building',
    
    // Alert messages
    idCardImageAlert: 'Resident card image generation requires canvas implementation',
    businessCardAlert: 'Business card generation requires canvas implementation',
    
    // Prefectures
    prefectures: {
        '01': 'Hokkaido',
        '02': 'Aomori',
        '03': 'Iwate',
        '04': 'Miyagi',
        '05': 'Akita',
        '06': 'Yamagata',
        '07': 'Fukushima',
        '08': 'Ibaraki',
        '09': 'Tochigi',
        '10': 'Gunma',
        '11': 'Saitama',
        '12': 'Chiba',
        '13': 'Tokyo',
        '14': 'Kanagawa',
        '15': 'Niigata',
        '16': 'Toyama',
        '17': 'Ishikawa',
        '18': 'Fukui',
        '19': 'Yamanashi',
        '20': 'Nagano',
        '21': 'Gifu',
        '22': 'Shizuoka',
        '23': 'Aichi',
        '24': 'Mie',
        '25': 'Shiga',
        '26': 'Kyoto',
        '27': 'Osaka',
        '28': 'Hyogo',
        '29': 'Nara',
        '30': 'Wakayama',
        '31': 'Tottori',
        '32': 'Shimane',
        '33': 'Okayama',
        '34': 'Hiroshima',
        '35': 'Yamaguchi',
        '36': 'Tokushima',
        '37': 'Kagawa',
        '38': 'Ehime',
        '39': 'Kochi',
        '40': 'Fukuoka',
        '41': 'Saga',
        '42': 'Nagasaki',
        '43': 'Kumamoto',
        '44': 'Oita',
        '45': 'Miyazaki',
        '46': 'Kagoshima',
        '47': 'Okinawa'
    },
    
    // Cities
    cities: {
        '01': {
            sapporo: 'Sapporo',
            asahikawa: 'Asahikawa',
            hakodate: 'Hakodate',
            obihiro: 'Obihiro'
        },
        '04': {
            sendai: 'Sendai',
            shiogama: 'Shiogama',
            ishinomaki: 'Ishinomaki'
        },
        '13': {
            chiyoda: 'Chiyoda Ward',
            chuo: 'Chuo Ward',
            minato: 'Minato Ward',
            shinjuku: 'Shinjuku Ward',
            shibuya: 'Shibuya Ward',
            shinagawa: 'Shinagawa Ward',
            meguro: 'Meguro Ward',
            setagaya: 'Setagaya Ward',
            ota: 'Ota Ward',
            nerima: 'Nerima Ward'
        },
        '14': {
            yokohama: 'Yokohama',
            kawasaki: 'Kawasaki',
            sagamihara: 'Sagamihara',
            fujisawa: 'Fujisawa'
        },
        '23': {
            nagoya: 'Nagoya',
            toyohashi: 'Toyohashi',
            okazaki: 'Okazaki'
        },
        '26': {
            kyoto: 'Kyoto',
            utsunomiya: 'Uji'
        },
        '27': {
            osaka: 'Osaka',
            sakai: 'Sakai',
            hirakata: 'Hirakata',
            toyonaka: 'Toyonaka'
        },
        '28': {
            kobe: 'Kobe',
            himeji: 'Himeji',
            amagasaki: 'Amagasaki'
        },
        '40': {
            fukuoka: 'Fukuoka',
            kitakyushu: 'Kitakyushu',
            kurume: 'Kurume'
        },
        '47': {
            naha: 'Naha',
            okinawa: 'Okinawa'
        }
    },
    
    // Universities
    universities: {
        UTokyo: 'University of Tokyo',
        KyotoU: 'Kyoto University',
        OsakaU: 'Osaka University',
        TohokuU: 'Tohoku University',
        NagoyaU: 'Nagoya University',
        KyushuU: 'Kyushu University',
        HokkaidoU: 'Hokkaido University',
        Keio: 'Keio University',
        Waseda: 'Waseda University'
    },
    
    // Blood types
    bloodTypes: {
        A: 'Type A',
        B: 'Type B',
        O: 'Type O',
        AB: 'Type AB'
    },
    
    // CSV column names
    csv: {
        fullAddress: 'Full Address',
        postalCode: 'Postal Code',
        prefecture: 'Prefecture',
        city: 'City/Ward',
        town: 'Town',
        building: 'Building',
        fullName: 'Full Name',
        fullNameKana: 'Katakana Name',
        gender: 'Gender',
        age: 'Age',
        birthDate: 'Birth Date',
        phone: 'Phone',
        email: 'Email',
        cardType: 'Card Type',
        cardNumber: 'Card Number',
        idCardNumber: 'My Number'
    }
};
