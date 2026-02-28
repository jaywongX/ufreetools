export default {
    name: 'Canada Address Generator - Generate Real Canadian Addresses & Identity Info Online',
    description: 'Free online Canada address generator. Generate real-format Canadian addresses, postal codes, phone numbers, credit cards and complete identity profiles. Filter by province, export JSON/CSV, runs locally for privacy.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results yet',
    preview: 'Preview Data',
    
    locationTitle: 'Location Filter',
    selectProvince: 'Select Province',
    selectCity: 'Select City',
    allProvinces: 'All Provinces',
    allCities: 'All Cities',
    postalCodeLabel: 'Postal Code',
    validatePostalCode: 'Validate Postal Code',
    
    addressTypeTitle: 'Address Type',
    addressTypeResidential: 'Residential',
    addressTypeCommercial: 'Commercial',
    addressTypeVirtual: 'PO Box',
    addressTypeCampus: 'University Campus',
    
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
    
    contactTitle: 'Contact Information',
    phoneNumber: 'Phone Number',
    phoneType: 'Phone Type',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Landline',
    areaCode: 'Area Code',
    email: 'Email Address',
    tempEmail: 'Temp Email',
    
    creditCardTitle: 'Credit Card Info',
    cardType: 'Card Type',
    cardNumber: 'Card Number',
    expiryDate: 'Expiry Date',
    cvv: 'CVV',
    bankBin: 'Bank BIN',
    
    careerTitle: 'Career Profile',
    jobTitle: 'Job Title',
    salary: 'Salary',
    companyName: 'Company Name',
    companySize: 'Company Size',
    industry: 'Industry',
    employmentStatus: 'Employment Status',
    employmentFullTime: 'Full-time',
    employmentPartTime: 'Part-time',
    
    sinTitle: 'Social Insurance Number (SIN)',
    sinNumber: 'SIN Number',
    
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
    
    exportTitle: 'Export Format',
    exportJson: 'Export JSON',
    exportCsv: 'Export CSV',
    exportIdCard: 'Generate ID Card',
    exportBusinessCard: 'Generate Business Card',
    downloadBtn: 'Download',
    copyBtn: 'Copy',
    viewDetails: 'View Details',
    
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-100)',
    
    generating: 'Generating...',
    generated: 'Generated',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-100',
    
    resultCount: 'Generated {count} records',
    resultSummary: 'Result Summary',
    showAll: 'Show All',
    collapse: 'Collapse',
    
    generateOptionsTitle: 'Generation Options',
    
    recordLabel: 'Record #{num}',
    addressLabel: 'Address',
    streetLabel: 'Street',
    houseNumberLabel: 'House Number',
    buildingLabel: 'Building',
    unitLabel: 'Unit',
    cityLabel: 'City',
    provinceLabel: 'Province',
    postalCodeDisplay: 'Postal Code',
    
    addressUnit: 'Unit',
    aptNumber: 'Apt',
    suiteNumber: 'Suite',
    pobox: 'PO Box',
    
    idCardImageAlert: 'ID card generation requires canvas',
    businessCardAlert: 'Business card generation requires canvas',
    
    provinces: {
        ON: 'Ontario',
        QC: 'Quebec',
        BC: 'British Columbia',
        AB: 'Alberta',
        MB: 'Manitoba',
        SK: 'Saskatchewan',
        NS: 'Nova Scotia',
        NB: 'New Brunswick',
        NL: 'Newfoundland and Labrador',
        PE: 'Prince Edward Island',
        NT: 'Northwest Territories',
        YT: 'Yukon',
        NU: 'Nunavut'
    },
    
    cities: {
        ON: {
            toronto: 'Toronto',
            ottawa: 'Ottawa',
            mississauga: 'Mississauga',
            hamilton: 'Hamilton',
            london: 'London',
            markham: 'Markham',
            vaughan: 'Vaughan',
            kitchener: 'Kitchener',
            waterloo: 'Waterloo',
            brampton: 'Brampton'
        },
        QC: {
            montreal: 'Montreal',
            quebec: 'Quebec City',
            laval: 'Laval',
            gatineau: 'Gatineau',
            sherbrooke: 'Sherbrooke'
        },
        BC: {
            vancouver: 'Vancouver',
            victoria: 'Victoria',
            burnaby: 'Burnaby',
            richmond: 'Richmond',
            surrey: 'Surrey',
            kelowna: 'Kelowna'
        },
        AB: {
            calgary: 'Calgary',
            edmonton: 'Edmonton',
            redDeer: 'Red Deer',
            lethbridge: 'Lethbridge'
        },
        MB: {
            winnipeg: 'Winnipeg',
            brandon: 'Brandon'
        },
        SK: {
            saskatoon: 'Saskatoon',
            regina: 'Regina'
        },
        NS: {
            halifax: 'Halifax'
        },
        NB: {
            fredericton: 'Fredericton',
            moncton: 'Moncton',
            saintJohn: 'Saint John'
        },
        NL: {
            stJohns: "St. John's"
        },
        PE: {
            charlottetown: 'Charlottetown'
        },
        NT: {
            yellowknife: 'Yellowknife'
        },
        YT: {
            whitehorse: 'Whitehorse'
        },
        NU: {
            iqaluit: 'Iqaluit'
        }
    },
    
    universities: {
        UofT: 'University of Toronto',
        UBC: 'University of British Columbia',
        McGill: 'McGill University',
        McMaster: 'McMaster University',
        Waterloo: 'University of Waterloo',
        Alberta: 'University of Alberta',
        Ottawa: 'University of Ottawa',
        Montreal: 'Université de Montréal'
    },
    
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House Number',
        building: 'Building',
        unit: 'Unit',
        city: 'City',
        province: 'Province',
        postalCode: 'Postal Code',
        fullName: 'Full Name',
        gender: 'Gender',
        age: 'Age',
        birthDate: 'Birth Date',
        phone: 'Phone',
        email: 'Email',
        cardType: 'Card Type',
        cardNumber: 'Card Number',
        sinNumber: 'SIN Number'
    }
};
