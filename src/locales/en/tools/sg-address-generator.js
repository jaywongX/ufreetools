export default {
    name: 'Singapore Address Generator - Generate Realistic Singapore Addresses Online',
    description: 'Free online Singapore address generator that creates realistic Singapore addresses, NRIC numbers, phone numbers, credit card numbers and complete identity profiles. Filter by region, export to JSON/CSV, runs locally for privacy.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results generated',
    preview: 'Preview Data',
    
    // Location Filter
    locationTitle: 'Location Filter',
    selectRegion: 'Select Region',
    selectArea: 'Select Area',
    allRegions: 'All Regions',
    allAreas: 'All Areas',
    postalCodeLabel: 'Postal Code',
    
    // Address Type
    addressTypeTitle: 'Address Type',
    addressTypeResidential: 'Residential',
    addressTypeCommercial: 'Commercial',
    addressTypeHDB: 'HDB Flat',
    addressTypeCondo: 'Private Condo',
    
    // Identity Information
    identityTitle: 'Identity Information',
    fullName: 'Full Name',
    gender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    age: 'Age',
    birthDate: 'Birth Date',
    race: 'Race',
    raceChinese: 'Chinese',
    raceMalay: 'Malay',
    raceIndian: 'Indian',
    raceOthers: 'Others',
    
    // Contact Information
    contactTitle: 'Contact Information',
    phoneNumber: 'Phone Number',
    areaCode: 'Area Code',
    email: 'Email Address',
    tempEmail: 'Temp Email',
    
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
    idCardTitle: 'NRIC ID Card',
    idCardNumber: 'NRIC Number',
    prefixLetter: 'Prefix Letter',
    serialNumber: 'Serial Number',
    checkLetter: 'Check Letter',
    
    // Export Options
    exportTitle: 'Export Format',
    exportJson: 'Export JSON',
    exportCsv: 'Export CSV',
    downloadBtn: 'Download',
    copyBtn: 'Copy',
    viewDetails: 'View Details',
    
    // Batch Generation
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-100)',
    
    // Messages
    generating: 'Generating...',
    generated: 'Generation Complete',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-100',
    
    // Result Display
    resultCount: 'Generated {count} records',
    resultSummary: 'Result Summary',
    showAll: 'Show All',
    collapse: 'Collapse',
    
    // Generation Options
    generateOptionsTitle: 'Generation Options',
    
    // Record Display
    recordLabel: 'Record #{num}',
    addressLabel: 'Address',
    streetLabel: 'Street',
    houseNumberLabel: 'House No.',
    buildingLabel: 'Building',
    unitLabel: 'Unit',
    postalCodeLabel: 'Postal Code',
    regionLabel: 'Region',
    
    // Region Names
    regions: {
        CR: 'Central Region',
        ER: 'East Region',
        NR: 'North Region',
        NER: 'North-East Region',
        WR: 'West Region'
    },
    
    // Area Names
    areas: {
        CR: {
            orchard: 'Orchard',
            riverValley: 'River Valley',
            newton: 'Newton',
            tanglin: 'Tanglin',
            bukitTimah: 'Bukit Timah',
            clementi: 'Clementi',
            queenstown: 'Queenstown'
        },
        ER: {
            bedok: 'Bedok',
            changi: 'Changi',
            pasirRis: 'Pasir Ris',
            tampines: 'Tampines',
            payaLebar: 'Paya Lebar'
        },
        NR: {
            angMoKio: 'Ang Mo Kio',
            bishan: 'Bishan',
            serangoon: 'Serangoon',
            hougang: 'Hougang',
            sengkang: 'Sengkang',
            punggol: 'Punggol'
        },
        NER: {
            hougang: 'Hougang',
            punggol: 'Punggol',
            seletar: 'Seletar',
            sengkang: 'Sengkang',
            serangoon: 'Serangoon'
        },
        WR: {
            jurongEast: 'Jurong East',
            jurongWest: 'Jurong West',
            bukitBatok: 'Bukit Batok',
            choaChuKang: 'Choa Chu Kang',
            woodlands: 'Woodlands',
            sembawang: 'Sembawang',
            yishun: 'Yishun'
        }
    },
    
    // CSV Headers
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House No.',
        building: 'Building',
        postalCode: 'Postal Code',
        fullName: 'Name',
        gender: 'Gender',
        age: 'Age',
        birthDate: 'Birth Date',
        phone: 'Phone',
        email: 'Email',
        cardType: 'Card Type',
        cardNumber: 'Card Number',
        idCardNumber: 'NRIC Number'
    }
};
