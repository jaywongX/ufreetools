export default {
   name: 'Indien Adressgenerator - Echte Indische Adressen, Identitätsinformationen und Kontaktdaten online generieren',
   description: 'Kostenloser Online-Indien-Adressgenerator, der echte indische Adressen, Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Staatenfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
   inputTitle: 'Generierungseinstellungen',
   outputTitle: 'Generierte Ergebnisse',
   generateBtn: 'Daten generieren',
   loadSampleBtn: 'Muster laden und generieren',
   clearAll: 'Alles löschen',
   noOutput: 'Noch keine Ergebnisse generiert',
   preview: 'Datenvorschau',
   
   // Geografische Filterung
   locationTitle: 'Geografische Filterung',
   selectRegion: 'Staat auswählen',
   allRegions: 'Alle Staaten',
   postalCodeLabel: 'Postleitzahl',
   validatePostalCode: 'Postleitzahl validieren',
   
   // Adresstypen
   addressTypeTitle: 'Adresstyp',
   addressTypeResidential: 'Wohnadresse',
   addressTypeCommercial: 'Geschäftsadresse',
   addressTypeVirtual: 'Virtueller Briefkasten',
   addressTypeCampus: 'Universitätscampus',
   
   // Identitätsinformationen
   identityTitle: 'Identitätsinformationen',
   fullName: 'Vollständiger Name',
   gender: 'Geschlecht',
   genderMale: 'Männlich',
   genderFemale: 'Weiblich',
   age: 'Alter',
   birthDate: 'Geburtsdatum',
   zodiac: 'Sternzeichen',
   height: 'Größe',
   weight: 'Gewicht',
   
   // Kontaktinformationen
   contactTitle: 'Kontaktinformationen',
   phoneNumber: 'Telefonnummer',
   phoneType: 'Telefontyp',
   phoneTypeMobile: 'Mobiltelefon',
   phoneTypeLandline: 'Festnetz',
   areaCode: 'Vorwahl',
   email: 'E-Mail-Adresse',
   tempEmail: 'Temporäre E-Mail',
   
   // Kreditkarte
   creditCardTitle: 'Kreditkarteninformationen',
   cardType: 'Kartentyp',
   cardNumber: 'Kartennummer',
   expiryDate: 'Ablaufdatum',
   cvv: 'CVV',
   bankBin: 'Bank-BIN',
   
   // Karriere
   careerTitle: 'Berufsprofil',
   jobTitle: 'Berufsbezeichnung',
   salary: 'Gehalt',
   companyName: 'Firmenname',
   companySize: 'Unternehmensgröße',
   industry: 'Branche',
   employmentStatus: 'Beschäftigungsstatus',
   employmentFullTime: 'Vollzeit',
   employmentPartTime: 'Teilzeit',
   
   // Ausweis
   idCardTitle: 'Indischer Ausweis',
   idCardNumber: 'Ausweisnummer',
   aadhaarNumber: 'Aadhaar-Nummer',
   
   // Digitaler Fingerabdruck
   fingerprintTitle: 'Digitaler Fingerabdruck',
   os: 'Betriebssystem',
   osVersion: 'Systemversion',
   browser: 'Browser',
   userAgent: 'Benutzeragent',
   screenResolution: 'Bildschirmauflösung',
   timezone: 'Zeitzone',
   guid: 'GUID',
   ipAddress: 'IP-Adresse',
   macAddress: 'MAC-Adresse',
   cookiePolicy: 'Cookie-Richtlinie',
   
   // Exportoptionen
   exportTitle: 'Exportformat',
   exportJson: 'JSON exportieren',
   exportCsv: 'CSV exportieren',
   downloadBtn: 'Herunterladen',
   copyBtn: 'Kopieren',
   viewDetails: 'Details anzeigen',
   
   // Stapelgenerierung
   batchTitle: 'Stapelgenerierung',
   quantityLabel: 'Menge',
   quantityPlaceholder: 'Menge eingeben (1-100)',
   
   // Benachrichtigungen
   generating: 'Wird generiert...',
   generated: 'Generierung abgeschlossen',
   copySuccess: 'In die Zwischenablage kopiert',
   downloadSuccess: 'Download erfolgreich',
   invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1 und 100 ein',
   
   // Ergebnisanzeige
   resultCount: '{count} Datensätze generiert',
   resultSummary: 'Ergebnisübersicht',
   showAll: 'Alle anzeigen',
   collapse: 'Einklappen',
   
   // Generierungsoptionen
   generateOptionsTitle: 'Generierungsoptionen',
   
   // Datensatzanzeige
   recordLabel: 'Datensatz #{num}',
   addressLabel: 'Adresse',
   streetLabel: 'Straße',
   houseNumberLabel: 'Hausnummer',
   buildingLabel: 'Gebäude',
   floorLabel: 'Etage',
   unitLabel: 'Wohnung',
   regionLabel: 'Staat',
   postalCode: 'Postleitzahl',
   
   // Adressformat
   addressNumber: 'Nr.',
   addressFloor: 'Etage',
   addressUnit: 'Wohnung',
   commercialUnit: '(Gewerbeeinheit)',
   india: 'Indien',
   postOfficeBox: 'Postfach',
   studentDormitory: 'Studentenwohnheim',
   teachingBuilding: 'Lehrgebäude',
   library: 'Bibliothek',
   buildingUnit: 'Gebäudeteil',
   apartment: 'Wohnung',
   
   // Regionennamen (Indische Staaten)
   regions: {
       'Maharashtra': 'Maharashtra',
       'Karnataka': 'Karnataka',
       'Tamil Nadu': 'Tamil Nadu',
       'Delhi': 'Delhi',
       'Gujarat': 'Gujarat',
       'Rajasthan': 'Rajasthan',
       'Uttar Pradesh': 'Uttar Pradesh',
       'West Bengal': 'Westbengalen',
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
       'Jammu and Kashmir': 'Jammu und Kaschmir'
   },
   
   // Universitätsnamen
   universities: {
       'IIT': 'Indisches Technologieinstitut',
       'IISc': 'Indisches Wissenschaftsinstitut',
       'IIM': 'Indisches Managementinstitut',
       'AIIMS': 'All India Institute of Medical Sciences',
       'JNU': 'Jawaharlal Nehru Universität',
       'DU': 'Universität Delhi',
       'BHU': 'Banaras Hindu Universität',
       'Jadavpur': 'Jadavpur Universität',
       'Anna': 'Anna Universität',
       'Osmania': 'Osmania Universität'
   },
   
   // CSV-Spaltennamen
   csv: {
       fullAddress: 'Vollständige Adresse',
       street: 'Straße',
       houseNumber: 'Hausnummer',
       building: 'Gebäude',
       floor: 'Etage',
       unit: 'Wohnung',
       region: 'Staat',
       postalCode: 'Postleitzahl',
       fullName: 'Vollständiger Name',
       gender: 'Geschlecht',
       age: 'Alter',
       birthDate: 'Geburtsdatum',
       phone: 'Telefon',
       email: 'E-Mail',
       cardType: 'Kartentyp',
       cardNumber: 'Kartennummer',
       idCardNumber: 'Ausweisnummer'
   }
};