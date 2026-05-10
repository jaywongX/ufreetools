export default {
    name: 'Italien-Adressengenerator - Generieren Sie echte italienische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Italien-Adressengenerator, der echte italienische Adressen, Codice Fiscale-Steuernummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Regionenfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Daten Vorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectRegion: 'Region auswählen',
    allRegions: 'Alle Regionen',
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
    careerTitle: 'Karriereprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    // Personalausweis
    idCardTitle: 'Italienischer Personalausweis',
    idCardNumber: 'Personalausweisnummer',
    codiceFiscale: 'Codice Fiscale',
    
    // Digitaler Fingerabdruck
    fingerprintTitle: 'Digitaler Fingerabdruck',
    os: 'Betriebssystem',
    osVersion: 'Systemversion',
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
    exportJson: 'Als JSON exportieren',
    exportCsv: 'Als CSV exportieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details anzeigen',
    
    // Stapelgenerierung
    batchTitle: 'Stapelgenerierung',
    quantityLabel: 'Menge',
    quantityPlaceholder: 'Menge eingeben (1-100)',
    
    // Benachrichtigungsnachrichten
    generating: 'Generierung läuft...',
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
    regionLabel: 'Region',
    postalCode: 'Postleitzahl',
    
    // Adressformat
    addressNumber: 'Nr.',
    addressFloor: 'Et.',
    addressUnit: 'Einheit',
    commercialUnit: '(Geschäftseinheit)',
    italy: 'Italien',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Gebäude',
    apartment: 'Wohnung',
    
    // Regionennamen (italienische Regionen)
    regions: {
        'Lombardia': 'Lombardei',
        'Lazio': 'Latium',
        'Campania': 'Kampanien',
        'Sicilia': 'Sizilien',
        'Veneto': 'Venetien',
        'Emilia-Romagna': 'Emilia-Romagna',
        'Piemonte': 'Piemont',
        'Toscana': 'Toskana',
        'Puglia': 'Apulien',
        'Calabria': 'Kalabrien',
        'Sardegna': 'Sardinien',
        'Friuli Venezia Giulia': 'Friaul-Julisch Venetien',
        'Liguria': 'Ligurien',
        'Marche': 'Marken',
        'Abruzzo': 'Abruzzen',
        'Molise': 'Molise',
        'Basilicata': 'Basilikata',
        'Umbria': 'Umbrien',
        "Valle d'Aosta": "Aostatal",
        'Trentino-Alto Adige': 'Südtirol'
    },
    
    // Universitätsnamen
    universities: {
        'Politecnico di Milano': 'Polytechnikum Mailand',
        'Sapienza': 'Universität La Sapienza',
        'Bocconi': 'Bocconi-Universität',
        'Politecnico di Torino': 'Polytechnikum Turin',
        'UniMI': 'Universität Mailand',
        'UniFI': 'Universität Florenz',
        'UniBO': 'Universität Bologna',
        'UniPd': 'Universität Padua',
        'UniNa': 'Universität Neapel Federico II',
        'UniTo': 'Universität Turin'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Etage',
        unit: 'Einheit',
        region: 'Region',
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