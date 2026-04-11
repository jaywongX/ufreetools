export default {
    name: 'Australia Address Generator - Generate Real Australian Addresses, Identity Information & Contacts Online',
    description: 'Free online Australian address generator that generates real format Australian addresses, phone numbers, credit card numbers and complete identity profiles. Filter by state, export to JSON/CSV, runs entirely in the frontend to protect privacy.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results yet',
    preview: 'Preview Data',
    
    // Location Filter
    locationTitle: 'Location Filter',
    selectState: 'Select State/Territory',
    selectCity: 'Select City',
    allStates: 'All States/Territories',
    allCities: 'All Cities',
    postalCodeLabel: 'Postcode',
    validatePostalCode: 'Validate Postcode',
    
    // Address Type
    addressTypeTitle: 'Address Type',
    addressTypeResidential: 'Residential Address',
    addressTypeCommercial: 'Commercial Address',
    addressTypePoBox: 'PO Box',
    addressTypeCampus: 'University Campus',
    
    // Identity
    identityTitle: 'Identity Information',
    fullName: 'Full Name',
    gender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    age: 'Age',
    birthDate: 'Birth Date',
    zodiac: 'Zodiac',
    height: 'Height',
    weight: 'Weight',
    
    // Contact
    contactTitle: 'Contact Information',
    phoneNumber: 'Phone Number',
    phoneType: 'Phone Type',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Landline',
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
    
    // Tax File
    taxFileTitle: 'Australian Tax File Number',
    taxFileNumber: 'Tax File Number (TFN)',
    
    // Digital Fingerprint
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
    
    // Export
    exportTitle: 'Export Format',
    exportJson: 'Export JSON',
    exportCsv: 'Export CSV',
    downloadBtn: 'Download',
    copyBtn: 'Copy',
    viewDetails: 'View Details',
    
    // Batch
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-100)',
    
    // Messages
    generating: 'Generating...',
    generated: 'Generation Complete',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-100',
    
    // Results
    resultCount: 'Generated {count} records',
    resultSummary: 'Result Summary',
    showAll: 'Show All',
    collapse: 'Collapse',
    
    // Options
    generateOptionsTitle: 'Generation Options',
    
    // Record Display
    recordLabel: 'Record #{num}',
    addressLabel: 'Address',
    streetLabel: 'Street',
    streetNumberLabel: 'Street Number',
    suburbLabel: 'Suburb',
    stateLabel: 'State',
    postcodeLabel: 'Postcode',
    unitLabel: 'Unit',
    
    // Address Format
    addressNumber: 'No.',
    addressFloor: 'Floor',
    addressUnit: 'Unit',
    commercialUnit: '(Commercial)',
    australia: 'Australia',
    postOfficeBox: 'PO Box',
    studentDormitory: 'Student Dormitory',
    academicBuilding: 'Academic Building',
    library: 'Library',
    buildingUnit: 'Building',
    
    // States
    states: {
        NSW: 'New South Wales',
        VIC: 'Victoria',
        QLD: 'Queensland',
        WA: 'Western Australia',
        SA: 'South Australia',
        TAS: 'Tasmania',
        ACT: 'Australian Capital Territory',
        NT: 'Northern Territory'
    },
    
    // Cities
    cities: {
        NSW: {
            sydney: 'Sydney',
            newcastle: 'Newcastle',
            wollongong: 'Wollongong',
            centralCoast: 'Central Coast',
            canberra: 'Canberra'
        },
        VIC: {
            melbourne: 'Melbourne',
            geelong: 'Geelong',
            ballarat: 'Ballarat',
            bendigo: 'Bendigo'
        },
        QLD: {
            brisbane: 'Brisbane',
            goldCoast: 'Gold Coast',
            sunshineCoast: 'Sunshine Coast',
            townsville: 'Townsville',
            cairns: 'Cairns'
        },
        WA: {
            perth: 'Perth',
            fremantle: 'Fremantle',
            mandurah: 'Mandurah'
        },
        SA: {
            adelaide: 'Adelaide',
            mountGambier: 'Mount Gambier',
            whyalla: 'Whyalla'
        },
        TAS: {
            hobart: 'Hobart',
            launceston: 'Launceston',
            devonport: 'Devonport'
        },
        ACT: {
            canberra: 'Canberra',
            queanbeyan: 'Queanbeyan'
        },
        NT: {
            darwin: 'Darwin',
            aliceSprings: 'Alice Springs',
            palmerston: 'Palmerston'
        }
    },
    
    // Universities
    universities: {
        USYD: 'University of Sydney',
        UNSW: 'University of New South Wales',
        UMELB: 'University of Melbourne',
        UQ: 'University of Queensland',
        ANU: 'Australian National University'
    },
    
    // CSV Headers
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        streetNumber: 'Street Number',
        suburb: 'Suburb',
        state: 'State',
        postcode: 'Postcode',
        fullName: 'Full Name',
        gender: 'Gender',
        age: 'Age',
        birthDate: 'Birth Date',
        phone: 'Phone',
        email: 'Email',
        cardType: 'Card Type',
        cardNumber: 'Card Number',
        taxFileNumber: 'Tax File Number'
    }
};
