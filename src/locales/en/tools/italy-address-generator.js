export default {
    name: 'Italy Address Generator - Generate Real Italian Addresses, Identity Info & Contact Details Online',
    description: 'Free online Italy address generator that creates real-format Italian addresses, Codice Fiscale tax numbers, phone numbers, credit card numbers and complete identity profiles. Supports region filtering, JSON/CSV export formats, and runs entirely in the browser for privacy protection.',
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
    allRegions: 'All Regions',
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
    idCardTitle: 'Italy ID Card',
    idCardNumber: 'ID Card Number',
    codiceFiscale: 'Codice Fiscale',
    
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
    regionLabel: 'Region',
    postalCode: 'Postal Code',
    
    // Address Format
    addressNumber: 'No.',
    addressFloor: 'F',
    addressUnit: 'Unit',
    commercialUnit: '(Commercial Unit)',
    italy: 'Italy',
    postOfficeBox: 'Post Office Box',
    studentDormitory: 'Student Dormitory',
    teachingBuilding: 'Teaching Building',
    library: 'Library',
    buildingUnit: 'Unit',
    apartment: 'Apartment',
    
    // Region Names (Italian Regions)
    regions: {
        'Lombardia': 'Lombardy',
        'Lazio': 'Lazio',
        'Campania': 'Campania',
        'Sicilia': 'Sicily',
        'Veneto': 'Veneto',
        'Emilia-Romagna': 'Emilia-Romagna',
        'Piemonte': 'Piedmont',
        'Toscana': 'Tuscany',
        'Puglia': 'Apulia',
        'Calabria': 'Calabria',
        'Sardegna': 'Sardinia',
        'Friuli Venezia Giulia': 'Friuli Venezia Giulia',
        'Liguria': 'Liguria',
        'Marche': 'Marche',
        'Abruzzo': 'Abruzzo',
        'Molise': 'Molise',
        'Basilicata': 'Basilicata',
        'Umbria': 'Umbria',
        "Valle d'Aosta": "Valle d'Aosta",
        'Trentino-Alto Adige': 'Trentino-Alto Adige'
    },
    
    // University Names
    universities: {
        'Politecnico di Milano': 'Politecnico di Milano',
        'Sapienza': 'Sapienza University of Rome',
        'Bocconi': 'Bocconi University',
        'Politecnico di Torino': 'Politecnico di Torino',
        'UniMI': 'University of Milan',
        'UniFI': 'University of Florence',
        'UniBO': 'University of Bologna',
        'UniPd': 'University of Padua',
        'UniNa': 'University of Naples Federico II',
        'UniTo': 'University of Turin'
    },
    
    // CSV Column Names
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House Number',
        building: 'Building',
        floor: 'Floor',
        unit: 'Unit',
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
