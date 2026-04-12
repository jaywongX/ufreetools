export default {
    name: 'Deutschland Adressgenerator - Echte deutsche Adressen & Identitätsdaten online generieren',
    description: 'Kostenloser Online-Deutschland-Adressgenerator, generiert echtformatige deutsche Adressen, Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile. Unterstützt Bundesland-Filterung, JSON/CSV-Export, läuft komplett im Frontend zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungskonfiguration',
    outputTitle: 'Generierungsergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Generierungsergebnisse',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Standortfilterung',
    selectState: 'Bundesland auswählen',
    selectCity: 'Stadt auswählen',
    allStates: 'Alle Bundesländer',
    allCities: 'Alle Städte',
    
    // Adresstypen
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypePoBox: 'Postfach',
    addressTypeCampus: 'Universitätscampus',
    
    // Identitätsinformationen
    identityTitle: 'Identitätsinformationen',
    fullName: 'Vollständiger Name',
    firstName: 'Vorname',
    lastName: 'Nachname',
    gender: 'Geschlecht',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    age: 'Alter',
    birthDate: 'Geburtsdatum',
    height: 'Größe',
    weight: 'Gewicht',
    
    // Kontaktinformationen
    contactTitle: 'Kontaktinformationen',
    phoneNumber: 'Telefonnummer',
    phoneType: 'Telefontyp',
    phoneTypeMobile: 'Mobil',
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
    bankBin: 'Bank-BIN-Code',
    
    // Karriere
    careerTitle: 'Karriereprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    
    // Personalausweis
    idCardTitle: 'Deutscher Personalausweis',
    idCardNumber: 'Ausweisnummer',
    
    // Digitaler Fingerabdruck
    fingerprintTitle: 'Digitaler Fingerabdruck',
    os: 'Betriebssystem',
    osVersion: 'BS-Version',
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
    quantityLabel: 'Anzahl',
    quantityPlaceholder: 'Anzahl eingeben (1-100)',
    
    // Meldungen
    generating: 'Generierung läuft...',
    generated: 'Generierung abgeschlossen',
    copySuccess: 'In Zwischenablage kopiert',
    downloadSuccess: 'Download erfolgreich',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1-100 ein',
    
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
    postalCodeLabel: 'Postleitzahl',
    cityLabel: 'Stadt',
    stateLabel: 'Bundesland',
    
    // Adressformat
    commercialArea: 'Gewerbegebiet',
    studentDormitory: 'Studentenwohnheim',
    library: 'Bibliothek',
    
    // Deutsche 16 Bundesländer
    states: {
        BW: 'Baden-Württemberg',
        BY: 'Bayern',
        BE: 'Berlin',
        BB: 'Brandenburg',
        HB: 'Bremen',
        HH: 'Hamburg',
        HE: 'Hessen',
        MV: 'Mecklenburg-Vorpommern',
        NI: 'Niedersachsen',
        NW: 'Nordrhein-Westfalen',
        RP: 'Rheinland-Pfalz',
        SL: 'Saarland',
        SN: 'Sachsen',
        ST: 'Sachsen-Anhalt',
        SH: 'Schleswig-Holstein',
        TH: 'Thüringen'
    },
    
    // Universität
    universities: {
        TUM: 'Technische Universität München',
        LMU: 'Ludwig-Maximilians-Universität München',
        HU: 'Humboldt-Universität zu Berlin',
        TU: 'Technische Universität Berlin',
        UniHeidelberg: 'Ruprecht-Karls-Universität Heidelberg'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        postalCode: 'Postleitzahl',
        city: 'Stadt',
        state: 'Bundesland',
        fullName: 'Name',
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
