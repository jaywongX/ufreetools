export default {
   name: 'India Address Generator - Generate Real Indian Addresses, Identity Info & Contact Details Online',
   description: 'Free online Indian address generator that creates real-format Indian addresses, ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports state filtering, JSON/CSV export formats, and runs entirely in the browser for privacy protection.',
   inputTitle: 'Generation Settings',
   outputTitle: 'Generated Results',
   generateBtn: 'Generate Data',
   loadSampleBtn: 'Load Sample & Generate',
   clearAll: 'Clear All',
   noOutput: 'No results generated yet',
   preview: 'Preview Data',
   
   // Geographic Filtering
   locationTitle: 'Geographic Filtering',
   selectRegion: 'Select State',
   allRegions: 'All States',
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
   idCardTitle: 'Indian ID Card',
   idCardNumber: 'ID Card Number',
   aadhaarNumber: 'Aadhaar Number',
   
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
   regionLabel: 'State',
   postalCode: 'Postal Code',
   
   // Address Format
   addressNumber: 'No.',
   addressFloor: 'F',
   addressUnit: 'Unit',
   commercialUnit: '(Commercial Unit)',
   india: 'India',
   postOfficeBox: 'Post Office Box',
   studentDormitory: 'Student Dormitory',
   teachingBuilding: 'Teaching Building',
   library: 'Library',
   buildingUnit: 'Unit',
   apartment: 'Apartment',
   
   // Region Names (Indian States)
   regions: {
       'Maharashtra': 'Maharashtra',
       'Karnataka': 'Karnataka',
       'Tamil Nadu': 'Tamil Nadu',
       'Delhi': 'Delhi',
       'Gujarat': 'Gujarat',
       'Rajasthan': 'Rajasthan',
       'Uttar Pradesh': 'Uttar Pradesh',
       'West Bengal': 'West Bengal',
       'Kerala': 'Kerala',
       'Andhra Pradesh': 'Andhra Pradesh',
       'Telangana': 'Telangana',
       'Madhya Pradesh': 'Madhya Pradesh',
       'Bihar': 'Bihar',
       'Punjab': 'Punjab',
       'Haryana': 'Haryana',
       'Odisha': 'Odisha',
       'Chhattisgarh': 'Chhattisgarh',
       'Jharkhand': 'Jharkhand',
       'Assam': 'Assam',
       'Jammu and Kashmir': 'Jammu and Kashmir'
   },
   
   // University Names
   universities: {
       'IIT': 'Indian Institute of Technology',
       'IISc': 'Indian Institute of Science',
       'IIM': 'Indian Institute of Management',
       'AIIMS': 'All India Institute of Medical Sciences',
       'JNU': 'Jawaharlal Nehru University',
       'DU': 'University of Delhi',
       'BHU': 'Banaras Hindu University',
       'Jadavpur': 'Jadavpur University',
       'Anna': 'Anna University',
       'Osmania': 'Osmania University'
   },
   
   // CSV Column Names
   csv: {
       fullAddress: 'Full Address',
       street: 'Street',
       houseNumber: 'House Number',
       building: 'Building',
       floor: 'Floor',
       unit: 'Unit',
       region: 'State',
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