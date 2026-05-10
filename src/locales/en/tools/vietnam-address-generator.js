export default {
    name: 'Vietnam Address Generator - Generate Real Vietnamese Addresses, Identity Info & Contact Details Online',
    description: 'Free online Vietnamese address generator that creates real-format Vietnamese addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports province filtering, JSON/CSV export formats, and runs entirely in the browser for privacy protection.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Data',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results generated yet',
    preview: 'Preview Data',
    
    // Geographic Filtering
    locationTitle: 'Geographic Filtering',
    selectProvince: 'Select Province/City',
    selectDistrict: 'Select District',
    allProvinces: 'All Provinces/Cities',
    allDistricts: 'All Districts',
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
    idCardTitle: 'Vietnamese ID Card',
    idCardNumber: 'ID Card Number',
    cmndNumber: 'CMND Number',
    cccdNumber: 'CCCD Number',
    serialNumber: 'Serial Number',
    
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
    wardLabel: 'Ward',
    districtLabel: 'District',
    provinceLabel: 'Province/City',
    postalCode: 'Postal Code',
    
    // Address Format
    addressNumber: 'No.',
    addressFloor: 'F',
    addressUnit: 'Unit',
    commercialUnit: '(Commercial Unit)',
    vietnam: 'Vietnam',
    postOfficeBox: 'Post Office Box',
    studentDormitory: 'Student Dormitory',
    teachingBuilding: 'Teaching Building',
    library: 'Library',
    buildingUnit: 'Unit',
    apartment: 'Apartment',
    
    // Alert Messages
    idCardImageAlert: 'ID card image generation requires canvas implementation',
    businessCardAlert: 'Business card generation requires canvas implementation',
    
    // Province Names (Vietnamese Provinces)
    provinces: {
        HN: 'Hanoi',
        HCM: 'Ho Chi Minh City',
        HP: 'Hai Phong',
        DN: 'Da Nang',
        CT: 'Can Tho',
        BH: 'Ba Ria-Vung Tau',
        BD: 'Binh Duong',
        QN: 'Quang Ninh',
        QG: 'Quang Nam',
        KG: 'Ca Mau',
        DT: 'Dong Nai',
        HB: 'Ha Nam',
        TH: 'Thai Binh',
        NB: 'Nam Dinh',
        VL: 'Vinh Long',
        TG: 'Soc Trang',
        NT: 'Ninh Thuan',
        PY: 'Phu Yen',
        TV: 'Tay Ninh',
        BD: 'Binh Dinh',
        HT: 'Hoa Binh',
        TB: 'Tuyen Quang',
        TN: 'Thai Nguyen',
        LC: 'Lai Chau',
        YB: 'Yen Bai',
        DB: 'Dien Bien',
        LA: 'Lao Cai',
        CB: 'Cao Bang',
        LD: 'Lam Dong',
        DC: 'Dak Lak',
        QN: 'Quang Binh',
        QT: 'Quang Tri',
        HT: 'Ha Tinh',
        NA: 'Nghe An',
        TT: 'Thanh Hoa',
        NB: 'Ninh Binh',
        ST: 'An Giang',
        CT: 'Tra Vinh',
        BP: 'Ben Tre',
        BL: 'Bac Lieu',
        KG: 'Ca Mau',
        CM: 'Ca Mau'
    },
    
    // District Data (Hanoi and Ho Chi Minh City examples)
    districtsData: {
        HN: {
            hoanKiem: 'Hoan Kiem',
            baDinh: 'Ba Dinh',
            dongDa: 'Dong Da',
            haiBaTrung: 'Hai Ba Trung',
            thanhXuan: 'Thanh Xuan',
            cauGiay: 'Cau Giay',
            hoangMai: 'Hoang Mai',
            longBien: 'Long Bien',
            tayHo: 'Tay Ho',
            bacTuLiem: 'Bac Tu Liem',
            namTuLiem: 'Nam Tu Liem',
            haDong: 'Ha Dong'
        },
        HCM: {
            quan1: 'District 1',
            quan3: 'District 3',
            quan4: 'District 4',
            quan5: 'District 5',
            quan6: 'District 6',
            quan7: 'District 7',
            quan10: 'District 10',
            quan11: 'District 11',
            binhThanh: 'Binh Thanh',
            phuNhuan: 'Phu Nhuan',
            tanBinh: 'Tan Binh',
            goVap: 'Go Vap',
            binhChanh: 'Binh Chanh',
            thuDuc: 'Thu Duc'
        },
        DN: {
            haiChau: 'Hai Chau',
            thanhKhe: 'Thanh Khe',
            sonTra: 'Son Tra',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'Hong Bang',
            LeChan: 'Le Chan',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'Hai An',
            KiAn: 'Ki An'
        }
    },
    
    // University Names
    universities: {
        HUST: 'Hanoi University of Science and Technology',
        VNU: 'Vietnam National University',
        HANU: 'Hanoi National University',
        HCMUS: 'Ho Chi Minh City National University',
        RMIT: 'RMIT University Vietnam',
        FTU: 'Foreign Trade University',
        NEU: 'National Economics University',
        HPU: 'Hanoi University of Pharmacy',
        PTIT: 'Posts and Telecommunications Institute of Technology',
        FPT: 'FPT University'
    },
    
    // CSV Column Names
    csv: {
        fullAddress: 'Full Address',
        street: 'Street',
        houseNumber: 'House Number',
        building: 'Building',
        floor: 'Floor',
        unit: 'Unit',
        ward: 'Ward',
        district: 'District',
        province: 'Province/City',
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