export default {
    name: 'Thailand-Adressengenerator - Erstellen Sie reale thailändische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Thailand-Adressengenerator, der reale thailändische Adressen, Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Provinzfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectRegion: 'Provinz auswählen',
    allRegions: 'Alle Provinzen',
    postalCodeLabel: 'Postleitzahl',
    validatePostalCode: 'Postleitzahl überprüfen',
    
    // Adresstypen
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeVirtual: 'Virtueller Briefkasten',
    addressTypeCampus: 'Universitäts-Campus',
    
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
    companyName: 'Unternehmensname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    // Personalausweis
    idCardTitle: 'Thailändischer Personalausweis',
    idCardNumber: 'Personalausweisnummer',
    
    // Digitaler Abdruck
    fingerprintTitle: 'Digitaler Abdruck',
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
    copySuccess: 'In die Zwischenablage kopiert',
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
    regionLabel: 'Provinz',
    postalCode: 'Postleitzahl',
    
    // Adressformat
    addressNumber: 'Nr.',
    addressFloor: 'Etage',
    addressUnit: 'Einheit',
    commercialUnit: '(Geschäftseinheit)',
    thailand: 'Thailand',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Gebäude',
    apartment: 'Wohnung',
    
    // Provinznamen (thailändische Provinzen)
    regions: {
        'Bangkok': 'Bangkok',
        'Chiang Mai': 'Chiang Mai',
        'Phuket': 'Phuket',
        'Pattaya': 'Pattaya',
        'Nonthaburi': 'Nonthaburi',
        'Pathum Thani': 'Pathum Thani',
        'Samut Prakan': 'Samut Prakan',
        'Nakhon Ratchasima': 'Nakhon Ratchasima',
        'Chiang Rai': 'Chiang Rai',
        'Khon Kaen': 'Khon Kaen',
        'Nakhon Si Thammarat': 'Nakhon Si Thammarat',
        'Surat Thani': 'Surat Thani',
        'Udon Thani': 'Udon Thani',
        'Rayong': 'Rayong',
        'Lampang': 'Lampang',
        'Nakhon Pathom': 'Nakhon Pathom',
        'Ayutthaya': 'Ayutthaya',
        'Chanthaburi': 'Chanthaburi',
        'Trat': 'Trat',
        'Kanchanaburi': 'Kanchanaburi'
    },
    
    // Universitätsnamen
    universities: {
        'CU': 'Chulalongkorn-Universität',
        'TU': 'Mahidol-Universität',
        'KU': 'Kasetsart-Universität',
        'TU': 'Thammasat-Universität',
        'KMUTT': 'King Mongkut\'s University of Technology Thonburi',
        'KMUTNB': 'King Mongkut\'s University of Technology North Bangkok',
        'SIIT': 'Sirindhorn International Institute of Technology',
        'AIT': 'Asian Institute of Technology',
        'ABAC': 'Assumption University'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Etage',
        unit: 'Einheit',
        region: 'Provinz',
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