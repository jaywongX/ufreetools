export default {
   name: 'Kazakhstan Address Generator - Generate Real Kazakhstan Addresses, ID Information & Contact Details Online',
   description: 'Free online Kazakhstan address generator that generates real-format Kazakhstan addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports filtering by region/city, exporting to JSON/CSV format, runs entirely on the frontend for privacy protection.',
   inputTitle: 'Generation Configuration',
   outputTitle: 'Generation Results',
   generateBtn: 'Generate Data',
   loadSampleBtn: 'Load Sample & Generate',
   clearAll: 'Clear All',
   noOutput: 'No generation results yet',
   preview: 'Preview Data',
   
   // Geographic filtering
   locationTitle: 'Geographic Filtering',
   selectRegion: 'Select Region/City',
   selectCity: 'Select City',
   allRegions: 'All Regions/Cities',
   allCities: 'All Cities',
   postalCodeLabel: 'Postal Code',
   
   // Address type
   addressTypeTitle: 'Address Type',
   addressTypeResidential: 'Residential Address',
   addressTypeCommercial: 'Commercial Address',
   addressTypeVirtual: 'Virtual Mailbox',
   addressTypeCampus: 'University Campus',
   
   // Identity information
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
   
   // ID card
   idCardTitle: 'Kazakhstan ID Card',
   idCardNumber: 'ID Card Number (ИИН)',
   
   // Digital fingerprint
   fingerprintTitle: 'Digital Fingerprint',
   os: 'Operating System',
   osVersion: 'System Version',
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
   quantityLabel: 'Generation Quantity',
   quantityPlaceholder: 'Enter quantity (1-100)',
   
   // Prompt messages
   generating: 'Generating...',
   generated: 'Generation Complete',
   copySuccess: 'Copied to clipboard',
   downloadSuccess: 'Download successful',
   invalidQuantity: 'Please enter a number between 1-100',
   
   // Result display
   resultCount: 'Generated {count} records',
   resultSummary: 'Generation Result Summary',
   showAll: 'Show All',
   collapse: 'Collapse',
   
   // Generation options
   generateOptionsTitle: 'Generation Options',
   
   // Record display
   recordLabel: 'Record #{num}',
   addressLabel: 'Address',
   streetLabel: 'Street',
   houseNumberLabel: 'House Number',
   buildingLabel: 'Building',
   floorLabel: 'Floor',
   unitLabel: 'Unit',
   regionLabel: 'Region/City',
   
   // Address format
   addressFloor: 'Floor',
   addressUnit: 'Unit',
   commercialUnit: '(Commercial Unit)',
   postOfficeBox: 'Post Office Box',
   studentDormitory: 'Student Dormitory',
   teachingBuilding: 'Teaching Building',
   library: 'Library',
   buildingUnit: 'Building',
   
   // Region names
   regions: {
       NUR: 'Astana (Nur-Sultan)',
       ALA: 'Almaty',
       SHY: 'Shymkent',
       AKM: 'Akmola Region',
       AKT: 'Aktobe Region',
       ATY: 'Atyrau Region',
       MAN: 'Mangystau Region',
       PAV: 'Pavlodar Region',
       SKZ: 'South Kazakhstan Region',
       KUS: 'Kostanay Region',
       KAR: 'Karaganda Region',
       ZAP: 'West Kazakhstan Region',
       MNG: 'Jambyl Region',
       TUR: 'Almaty Region',
       YUZ: 'Kyzylorda Region',
       VOS: 'East Kazakhstan Region',
       ZHE: 'Zhezkazgan Region'
   },
   
   // City names
   cities: {
       NUR: {
           nursultan: 'Astana'
       },
       ALA: {
           almaty: 'Almaty'
       },
       SHY: {
           shymkent: 'Shymkent'
       },
       AKM: {
           akmola: 'Akmola',
           kokshetau: 'Kokshetau'
       },
       AKT: {
           aktobe: 'Aktobe'
       },
       ATY: {
           atyrau: 'Atyrau'
       },
       MAN: {
           aktau: 'Aktau'
       },
       PAV: {
           pavlodar: 'Pavlodar'
       },
       SKZ: {
           turkestan: 'Turkestan'
       },
       KUS: {
           kostanay: 'Kostanay'
       },
       KAR: {
           karaganda: 'Karaganda'
       },
       ZAP: {
           uralsk: 'Uralsk'
       },
       MNG: {
           taraz: 'Taraz'
       },
       TUR: {
           taldykorgan: 'Taldykorgan'
       },
       YUZ: {
           kyzylorda: 'Kyzylorda'
       },
       VOS: {
           'ust-kamenogorsk': 'Ust-Kamenogorsk'
       },
       ZHE: {
           temirtau: 'Temirtau'
       }
   },
   
   // CSV column names
   csv: {
       fullAddress: 'Full Address',
       street: 'Street',
       houseNumber: 'House Number',
       building: 'Building',
       floor: 'Floor',
       unit: 'Unit',
       region: 'Region/City',
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