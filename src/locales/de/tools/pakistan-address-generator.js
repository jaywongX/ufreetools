export default {
   name: 'Pakistan Adressgenerator - Generieren Sie echte pakistanische Adressen, Identitätsinformationen und Kontaktdaten online',
   description: 'Kostenloser Online-Pakistan-Adressgenerator, der echte pakistanische Adressen, ID-Nummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Provinzfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
   inputTitle: 'Generierungseinstellungen',
   outputTitle: 'Generierte Ergebnisse',
   generateBtn: 'Daten generieren',
   loadSampleBtn: 'Beispiel laden und generieren',
   clearAll: 'Alles löschen',
   noOutput: 'Noch keine Ergebnisse generiert',
   preview: 'Datenvorschau',
   
   // Geografische Filterung
   locationTitle: 'Geografische Filterung',
   selectRegion: 'Provinz/Region auswählen',
   allRegions: 'Alle Provinzen/Regionen',
   postalCodeLabel: 'Postleitzahl',
   validatePostalCode: 'Postleitzahl überprüfen',
   
   // Adresstypen
   addressTypeTitle: 'Adresstyp',
   addressTypeResidential: 'Wohnadresse',
   addressTypeCommercial: 'Geschäftsadresse',
   addressTypeVirtual: 'Virtueller Briefkasten',
   addressTypeCampus: 'Universitätsgelände',
   
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
   careerTitle: 'Karriereprofil',
   jobTitle: 'Stellenbezeichnung',
   salary: 'Gehalt',
   companyName: 'Firmenname',
   companySize: 'Unternehmensgröße',
   industry: 'Branche',
   employmentStatus: 'Beschäftigungsstatus',
   employmentFullTime: 'Vollzeit',
   employmentPartTime: 'Teilzeit',
   
   // Ausweis
   idCardTitle: 'Pakistanischer Personalausweis',
   idCardNumber: 'Personalausweisnummer',
   
   // Digitaler Fingerabdruck
   fingerprintTitle: 'Digitaler Fingerabdruck',
   os: 'Betriebssystem',
   osVersion: 'Betriebssystemversion',
   browser: 'Browser',
   userAgent: 'User Agent',
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
   
   // Benachrichtigungsmeldungen
   generating: 'Generierung...',
   generated: 'Generierung abgeschlossen',
   copySuccess: 'In Zwischenablage kopiert',
   downloadSuccess: 'Download erfolgreich',
   invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1 und 100 ein',
   
   // Ergebnisanzeige
   resultCount: '{count} Datensätze generiert',
   resultSummary: 'Ergebniszusammenfassung',
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
   unitLabel: 'Einheit',
   regionLabel: 'Provinz/Region',
   postalCode: 'Postleitzahl',
   
   // Adressformat
   addressNumber: 'Nr.',
   addressFloor: 'Etage',
   addressUnit: 'Einheit',
   commercialUnit: '(Geschäftseinheit)',
   pakistan: 'Pakistan',
   postOfficeBox: 'Postfach',
   studentDormitory: 'Studentenwohnheim',
   teachingBuilding: 'Lehrgebäude',
   library: 'Bibliothek',
   buildingUnit: 'Gebäude',
   apartment: 'Wohnung',
   
   // Provinz-/Regionnamen (4 pakistanische Provinzen + Territorium)
   regions: {
       'Punjab': 'Punjab',
       'Sindh': 'Sindh',
       'Khyber Pakhtunkhwa': 'Khyber Pakhtunkhwa',
       'Balochistan': 'Belutschistan',
       'Islamabad Capital Territory': 'Hauptstadtterritorium Islamabad'
   },
   
   // Universitätsnamen
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
   
   // CSV-Spaltennamen
   csv: {
       fullAddress: 'Vollständige Adresse',
       street: 'Straße',
       houseNumber: 'Hausnummer',
       building: 'Gebäude',
       floor: 'Etage',
       unit: 'Einheit',
       region: 'Provinz/Region',
       postalCode: 'Postleitzahl',
       fullName: 'Vollständiger Name',
       gender: 'Geschlecht',
       age: 'Alter',
       birthDate: 'Geburtsdatum',
       phone: 'Telefon',
       email: 'E-Mail',
       cardType: 'Kartentyp',
       cardNumber: 'Kartennummer',
       idCardNumber: 'Personalausweisnummer'
   }
};