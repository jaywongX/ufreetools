export default {
    name: 'France Address Generator - Generate Real French Addresses, Identity Info & Contact Details Online',
    description: 'Free online French address generator that creates real-format French addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports department filtering, JSON/CSV export formats, and runs entirely in the browser for privacy protection.',
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
    selectDepartment: 'Select Department',
    allRegions: 'All Regions',
    allDepartments: 'All Departments',
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
    idCardTitle: 'French ID Card',
    idCardNumber: 'ID Card Number',
    nirNumber: 'NIR Number',
    serialNumber: 'Serial Number',
    checkKey: 'Check Key',
    
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
    departmentLabel: 'Department',
    regionLabel: 'Region',
    postalCode: 'Postal Code',
    
    // Address Format
    addressNumber: 'No.',
    addressFloor: 'F',
    addressUnit: 'Unit',
    commercialUnit: '(Commercial Unit)',
    france: 'France',
    postOfficeBox: 'Post Office Box',
    studentDormitory: 'Student Dormitory',
    teachingBuilding: 'Teaching Building',
    library: 'Library',
    buildingUnit: 'Unit',
    apartment: 'Apartment',
    
    // Alert Messages
    idCardImageAlert: 'ID card image generation requires canvas implementation',
    businessCardAlert: 'Business card generation requires canvas implementation',
    
    // Region Names (French Regions)
    regions: {
        IDF: 'Île-de-France',
        ARA: 'Auvergne-Rhône-Alpes',
        OCC: 'Occitanie',
        NAQ: 'Nouvelle-Aquitaine',
        PAC: 'Provence-Alpes-Côte d\'Azur',
        HDF: 'Hauts-de-France',
        BFC: 'Bourgogne-Franche-Comté',
        NAC: 'Pays de la Loire',
        PDL: 'Pays de la Loire',
        BRE: 'Bretagne',
        NOR: 'Normandie',
        GUA: 'Guadeloupe',
        MQ: 'Martinique',
        GUY: 'Guyane française',
        REU: 'La Réunion',
        COR: 'Corse',
        ALO: 'Alsace-Lorraine',
        MP: 'Metz-Poméranie'
    },
    
    // Department Data (Île-de-France example)
    departmentsData: {
        IDF: {
            paris: 'Paris',
            hautsDeSeine: 'Hauts-de-Seine',
            seineSaintDenis: 'Seine-Saint-Denis',
            valDeMarne: 'Val-de-Marne',
            yvelines: 'Yvelines',
            essonne: 'Essonne',
            valDOise: 'Val-d\'Oise',
            seineEtMarne: 'Seine-et-Marne'
        },
        ARA: {
            rhone: 'Rhône',
            loire: 'Loire',
            isere: 'Isère',
            ain: 'Ain',
            savoie: 'Savoie',
            hauteSavoie: 'Haute-Savoie',
            allier: 'Allier',
            puyDeDome: 'Puy-de-Dôme'
        },
        OCC: {
            herault: 'Hérault',
            gard: 'Gard',
            aude: 'Aude',
            pyreneesOrientales: 'Pyrénées-Orientales',
            tarn: 'Tarn',
            hauteGaronne: 'Haute-Garonne',
            gers: 'Gers',
            lotEtGaronne: 'Lot-et-Garonne'
        },
        NAQ: {
            gironde: 'Gironde',
            charenteMaritime: 'Charente-Maritime',
            dordogne: 'Dordogne',
            landes: 'Landes',
            vienne: 'Vienne',
            hauteVienne: 'Haute-Vienne',
            charente: 'Charente',
            correze: 'Corrèze'
        },
        PAC: {
            bouchesDuRhone: 'Bouches-du-Rhône',
            alpesMaritimes: 'Alpes-Maritimes',
            var: 'Var',
            vaucluse: 'Vaucluse',
            alpesDeHauteProvence: 'Alpes-de-Haute-Provence',
            hautesAlpes: 'Hautes-Alpes'
        },
        HDF: {
            nord: 'Nord',
            pasDeCalais: 'Pas-de-Calais',
            somme: 'Somme',
            aisne: 'Aisne',
            oise: 'Oise',
            aisne: 'Aisne'
        }
    },
    
    // University Names
    universities: {
        UP1: 'Université Paris 1 Panthéon-Sorbonne',
        UP2: 'Université Paris 2 Panthéon-Assas',
        UP3: 'Université Paris 3 Sorbonne Nouvelle',
        UP4: 'Université Paris 1 Panthéon-Sorbonne',
        UP5: 'Université Paris Descartes',
        UP6: 'Université Pierre et Marie Curie',
        UP7: 'Université Paris Diderot',
        UP8: 'Université Paris 8 Vincennes-Saint-Denis',
        UP9: 'Université Paris Dauphine',
        UP10: 'Université Paris Nanterre',
        UP11: 'Université Paris-Saclay',
        UP12: 'Université Paris-Est Créteil',
        UP13: 'Université Sorbonne Paris Nord',
        ENS: 'École normale supérieure',
        X: 'École polytechnique'
    },
    
    // CSV Column Names
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House Number',
        building: 'Building',
        floor: 'Floor',
        unit: 'Unit',
        department: 'Department',
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