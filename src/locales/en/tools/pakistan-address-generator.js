export default {
   name: 'Pakistan Address Generator - Generate Real Pakistani Addresses, Identity Info & Contact Details Online',
   description: 'Free online Pakistani address generator that creates real-format Pakistani addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports province filtering, JSON/CSV export formats, and runs entirely in the browser for privacy protection.',
   inputTitle: 'Generation Settings',
   outputTitle: 'Generated Results',
   generateBtn: 'Generate Data',
   loadSampleBtn: 'Load Sample & Generate',
   clearAll: 'Clear All',
   noOutput: 'No results generated yet',
   preview: 'Preview Data',
   
   // Geographic Filtering
   locationTitle: 'Geographic Filtering',
   selectRegion: 'Select Province/Region',
   allRegions: 'All Provinces/Regions',
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
   idCardTitle: 'Pakistan ID Card',
   idCardNumber: 'ID Card Number',
   
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
   regionLabel: 'Province/Region',
   postalCode: 'Postal Code',
   
   // Address Format
   addressNumber: 'No.',
   addressFloor: 'F',
   addressUnit: 'Unit',
   commercialUnit: '(Commercial Unit)',
   pakistan: 'Pakistan',
   postOfficeBox: 'Post Office Box',
   studentDormitory: 'Student Dormitory',
   teachingBuilding: 'Teaching Building',
   library: 'Library',
   buildingUnit: 'Unit',
   apartment: 'Apartment',
   
   // Province/Region Names (Pakistan 4 provinces + territory)
   regions: {
       'Punjab': 'Punjab',
       'Sindh': 'Sindh',
       'Khyber Pakhtunkhwa': 'Khyber Pakhtunkhwa',
       'Balochistan': 'Balochistan',
       'Islamabad Capital Territory': 'Islamabad Capital Territory'
   },
   
   // University Names
   universities: {
       'LUMS': 'Lahore University of Management Sciences',
       'PU': 'University of the Punjab',
       'KU': 'University of Karachi',
       'QAU': 'Quaid-i-Azam University',
       'COMSATS': 'COMSATS University Islamabad',
       'NUST': 'National University of Sciences and Technology',
       'IBA': 'Institute of Business Administration',
       'PIDE': 'Pakistan Institute of Development Economics',
       'NCA': 'National College of Arts'
   },
   
   // CSV Column Names
   csv: {
       fullAddress: 'Full Address',
       street: 'Street',
       houseNumber: 'House Number',
       building: 'Building',
       floor: 'Floor',
       unit: 'Unit',
       region: 'Province/Region',
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