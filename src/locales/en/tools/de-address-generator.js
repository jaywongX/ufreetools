export default {
    name: 'Germany Address Generator - Generate Real German Addresses & Identity Info Online',
    description: 'Free online Germany address generator, generates real-format German addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports state filtering, JSON/CSV export, runs entirely in frontend to protect privacy.',
    inputTitle: 'Generation Configuration',
    outputTitle: 'Generation Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample and Generate',
    clearAll: 'Clear All',
    noOutput: 'No generation results yet',
    preview: 'Preview Data',
    
    // Geographic filtering
    locationTitle: 'Geographic Location Filter',
    selectState: 'Select State',
    selectCity: 'Select City',
    allStates: 'All States',
    allCities: 'All Cities',
    
    // Address types
    addressTypeTitle: 'Address Type',
    addressTypeResidential: 'Residential Address',
    addressTypeCommercial: 'Commercial Address',
    addressTypePoBox: 'PO Box',
    addressTypeCampus: 'University Campus',
    
    // Identity information
    identityTitle: 'Identity Information',
    fullName: 'Full Name',
    firstName: 'First Name',
    lastName: 'Last Name',
    gender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    age: 'Age',
    birthDate: 'Birth Date',
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
    
    // ID Card
    idCardTitle: 'German ID Card (Personalausweis)',
    idCardNumber: 'ID Card Number',
    
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
    downloadBtn: 'Download',
    copyBtn: 'Copy',
    viewDetails: 'View Details',
    
    // Batch generation
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-100)',
    
    // Messages
    generating: 'Generating...',
    generated: 'Generation Complete',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-100',
    
    // Results display
    resultCount: 'Generated {count} records',
    resultSummary: 'Result Summary',
    showAll: 'Show All',
    collapse: 'Collapse',
    
    // Generation options
    generateOptionsTitle: 'Generation Options',
    
    // Record display
    recordLabel: 'Record #{num}',
    addressLabel: 'Address',
    streetLabel: 'Street',
    houseNumberLabel: 'House Number',
    postalCodeLabel: 'Postal Code',
    cityLabel: 'City',
    stateLabel: 'State',
    
    // Address format
    commercialArea: 'Commercial Area',
    studentDormitory: 'Student Dormitory',
    library: 'Library',
    
    // German 16 states
    states: {
        BW: 'Baden-Württemberg',
        BY: 'Bavaria',
        BE: 'Berlin',
        BB: 'Brandenburg',
        HB: 'Bremen',
        HH: 'Hamburg',
        HE: 'Hesse',
        MV: 'Mecklenburg-Vorpommern',
        NI: 'Lower Saxony',
        NW: 'North Rhine-Westphalia',
        RP: 'Rhineland-Palatinate',
        SL: 'Saarland',
        SN: 'Saxony',
        ST: 'Saxony-Anhalt',
        SH: 'Schleswig-Holstein',
        TH: 'Thuringia'
    },
    
    // University names
    universities: {
        TUM: 'Technical University of Munich',
        LMU: 'Ludwig Maximilian University of Munich',
        HU: 'Humboldt University of Berlin',
        TU: 'Technical University of Berlin',
        UniHeidelberg: 'Heidelberg University'
    },
    
    // CSV column names
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House Number',
        postalCode: 'Postal Code',
        city: 'City',
        state: 'State',
        fullName: 'Name',
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
