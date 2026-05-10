export default {
    name: 'Finland Address Generator - Generate Real Finnish Addresses, Identity Info & Contact Details Online',
    description: 'Free online Finnish address generator that creates real-format Finnish addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports region filtering, JSON/CSV export formats, and runs entirely in the browser for privacy protection.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results generated yet',
    preview: 'Preview Data',
    
    // Geographic Filtering
    locationTitle: 'Geographic Filtering',
    selectRegion: 'Select Region',
    selectMunicipality: 'Select Municipality',
    allRegions: 'All Regions',
    allMunicipalities: 'All Municipalities',
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
    idCardTitle: 'Finnish ID Card',
    idCardNumber: 'ID Card Number',
    henkilötunnus: 'Personal Identity Number',
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
    municipalityLabel: 'Municipality',
    regionLabel: 'Region',
    postalCode: 'Postal Code',
    
    // Address Format
    addressNumber: 'No.',
    addressFloor: 'F',
    addressUnit: 'Unit',
    commercialUnit: '(Commercial Unit)',
    finland: 'Finland',
    postOfficeBox: 'Post Office Box',
    studentDormitory: 'Student Dormitory',
    teachingBuilding: 'Teaching Building',
    library: 'Library',
    buildingUnit: 'Unit',
    apartment: 'Apartment',
    
    // Alert Messages
    idCardImageAlert: 'ID card image generation requires canvas implementation',
    businessCardAlert: 'Business card generation requires canvas implementation',
    
    // Region Names (Finnish Regions)
    regions: {
        Uusimaa: 'Uusimaa',
        Pirkanmaa: 'Pirkanmaa',
        VarsinaisSuomi: 'Varsinais-Suomi',
        PohjoisPohjanmaa: 'Pohjois-Pohjanmaa',
        KeskiSuomi: 'Keski-Suomi',
        PäijätHäme: 'Päijät-Häme',
        KantaHäme: 'Kanta-Häme',
        EteläKarjala: 'Etelä-Karjala',
        PohjoisKarjala: 'Pohjois-Karjala',
        PohjoisSavo: 'Pohjois-Savo',
        EteläSavo: 'Etelä-Savo',
        Kainuu: 'Kainuu',
        KeskiPohjanmaa: 'Keski-Pohjanmaa',
        EteläPohjanmaa: 'Etelä-Pohjanmaa',
        Satakunta: 'Satakunta',
        Ahvenanmaa: 'Ahvenanmaa',
        Lapland: 'Lappi'
    },
    
    // Municipality Data (Uusimaa example)
    municipalitiesData: {
        Uusimaa: {
            helsinki: 'Helsinki',
            espoo: 'Espoo',
            vantaa: 'Vantaa',
            kauniainen: 'Kauniainen',
            järvenpää: 'Järvenpää',
            kerava: 'Kerava',
            tuusula: 'Tuusula',
            nurmijärvi: 'Nurmijärvi',
            lyly: 'Länsi-Uusimaa',
            sipoo: 'Sipoo'
        },
        Pirkanmaa: {
            tampere: 'Tampere',
            Nokia: 'Nokia',
            ylöjärvi: 'Ylöjärvi',
            kangasala: 'Kangasala',
            lempäälä: 'Lempäälä',
            pirkkala: 'Pirkkala',
            orivesi: 'Orivesi',
            hängenkyrö: 'Hämeenkyrö'
        },
        VarsinaisSuomi: {
            turku: 'Turku',
            rauma: 'Rauma',
            salo: 'Salo',
            pori: 'Pori',
            kaarina: 'Kaarina',
            littoinen: 'Littoinen',
            raisio: 'Raisio',
            naantali: 'Naantali'
        },
        KeskiSuomi: {
            jyväskylä: 'Jyväskylä',
            jyväskylänML: 'Jyväskylän mlk',
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala'
        },
        PäijätHäme: {
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala',
            pertunmaa: 'Pertunmaa',
            hartola: 'Hartola'
        }
    },
    
    // University Names
    universities: {
        HY: 'University of Helsinki',
        AALTO: 'Aalto University',
        TUNI: 'Tampere University',
        UTA: 'University of Oulu',
        UTU: 'University of Turku',
        JYU: 'University of Jyväskylä',
        UEF: 'University of Eastern Finland',
        TAMK: 'Tampere University of Applied Sciences',
        HAAGA: 'Haaga-Helia University of Applied Sciences',
        Laurea: 'Laurea University of Applied Sciences'
    },
    
    // CSV Column Names
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House Number',
        building: 'Building',
        floor: 'Floor',
        unit: 'Unit',
        municipality: 'Municipality',
        region: 'Region',
        postalCode: 'Postal Code',
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