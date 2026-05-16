export default {
   name: 'Mexico Address Generator - Generate Real Mexico Addresses, ID Information & Contact Details Online',
   description: 'Free online Mexico address generator that generates real-format Mexico addresses, RFC/CURP ID numbers, phone numbers, credit card numbers and complete identity profiles. Supports filtering by state/city, exporting to JSON/CSV format, runs entirely on the frontend for privacy protection.',
   inputTitle: 'Generation Configuration',
   outputTitle: 'Generation Results',
   generateBtn: 'Generate Data',
   loadSampleBtn: 'Load Sample & Generate',
   clearAll: 'Clear All',
   noOutput: 'No generation results yet',
   preview: 'Preview Data',
   
   // Geographic filtering
   locationTitle: 'Geographic Filtering',
   selectState: 'Select State',
   selectCity: 'Select City',
   allStates: 'All States',
   allCities: 'All Cities',
   
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
   employmentFullTime: 'Full-time',
   employmentPartTime: 'Part-time',
   
   // ID card
   idCardTitle: 'Mexico ID Card',
   rfcLabel: 'RFC (Federal Taxpayer Registry)',
   curpLabel: 'CURP (Population Registry Unique Key)',
   
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
   neighborhoodLabel: 'Neighborhood',
   postalCodeLabel: 'Postal Code',
   cityLabel: 'City',
   stateLabel: 'State',
   
   // Address format
   commercialAddress: '(Commercial Address)',
   postOfficeBox: 'Post Office Box',
   studentDormitory: 'Student Dormitory',
   teachingBuilding: 'Teaching Building',
   library: 'Library',
   
   // Mexico's 32 states
   states: {
       AGS: 'Aguascalientes',
       BCN: 'Baja California',
       BCS: 'Baja California Sur',
       CAMP: 'Campeche',
       COAH: 'Coahuila',
       COL: 'Colima',
       CHIS: 'Chiapas',
       CHIH: 'Chihuahua',
       CDMX: 'Mexico City',
       DUR: 'Durango',
       GTO: 'Guanajuato',
       GRO: 'Guerrero',
       HGO: 'Hidalgo',
       JAL: 'Jalisco',
       MEX: 'State of Mexico',
       MIC: 'Michoacán',
       MOR: 'Morelos',
       NAY: 'Nayarit',
       NLE: 'Nuevo León',
       OAX: 'Oaxaca',
       PUE: 'Puebla',
       QRO: 'Querétaro',
       QROO: 'Quintana Roo',
       SLP: 'San Luis Potosí',
       SIN: 'Sinaloa',
       SON: 'Sonora',
       TAB: 'Tabasco',
       TAM: 'Tamaulipas',
       TLAX: 'Tlaxcala',
       VER: 'Veracruz',
       YUC: 'Yucatán',
       ZAC: 'Zacatecas'
   },
   
   // University names
   universities: {
       UNAM: 'National Autonomous University of Mexico',
       IPN: 'National Polytechnic Institute',
       UdeG: 'University of Guadalajara',
       UANL: 'Autonomous University of Nuevo León'
   },
   
   // CSV column names
   csv: {
       fullAddress: 'Full Address',
       street: 'Street',
       houseNumber: 'House Number',
       neighborhood: 'Neighborhood',
       postalCode: 'Postal Code',
       city: 'City',
       state: 'State',
       fullName: 'Full Name',
       gender: 'Gender',
       age: 'Age',
       birthDate: 'Birth Date',
       phone: 'Phone',
       email: 'Email',
       cardType: 'Card Type',
       cardNumber: 'Card Number',
       rfc: 'RFC',
       curp: 'CURP'
   }
};