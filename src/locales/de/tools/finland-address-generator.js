export default {
    name: 'Finnland-Adressgenerator - Erstellen Sie echte finnische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Finnland-Adressgenerator, der echte finnische Adressen, Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Regions-Filterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectRegion: 'Region auswählen',
    selectMunicipality: 'Gemeinde auswählen',
    allRegions: 'Alle Regionen',
    allMunicipalities: 'Alle Gemeinden',
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
    
    // Ausweis
    idCardTitle: 'Finnischer Personalausweis',
    idCardNumber: 'Ausweisnummer',
    henkilötunnus: 'Persönliche Identifikationsnummer',
    serialNumber: 'Seriennummer',
    checkDigit: 'Prüfziffer',
    
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
    exportIdCard: 'Ausweisbild generieren',
    exportBusinessCard: 'Visitenkarte generieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details anzeigen',
    
    // Stapelgenerierung
    batchTitle: 'Stapelgenerierung',
    quantityLabel: 'Menge',
    quantityPlaceholder: 'Menge eingeben (1-100)',
    
    // Benachrichtigungsnachrichten
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
    floorLabel: 'Geschoss',
    unitLabel: 'Einheit',
    municipalityLabel: 'Gemeinde',
    regionLabel: 'Region',
    postalCode: 'Postleitzahl',
    
    // Adressformat
    addressNumber: 'Nr.',
    addressFloor: 'Geschoss',
    addressUnit: 'Einheit',
    commercialUnit: '(Geschäftseinheit)',
    finland: 'Finnland',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Einheit',
    apartment: 'Wohnung',
    
    // Warnmeldungen
    idCardImageAlert: 'Die Generierung von Ausweisbildern erfordert Canvas-Implementierung',
    businessCardAlert: 'Die Generierung von Visitenkarten erfordert Canvas-Implementierung',
    
    // Regionsnamen (finnische Regionen)
    regions: {
        Uusimaa: 'Uusimaa',
        Pirkanmaa: 'Pirkanmaa',
        VarsinaisSuomi: 'Varsinais-Suomi',
        PohjoisPohjanmaa: 'Pohjois-Pohjanmaa',
        KeskiSuomi: 'Keski-Suomi',
        PäijätHäme: 'Päijät-Häme',
        KantaHäme: 'Kanta-Häme',
        EteläKarjala: 'Etelä-Karjala',
        PohjoisKarjala: 'Pohjois-Karjala',
        PohjoisSavo: 'Pohjois-Savo',
        EteläSavo: 'Etelä-Savo',
        Kainuu: 'Kainuu',
        KeskiPohjanmaa: 'Keski-Pohjanmaa',
        EteläPohjanmaa: 'Etelä-Pohjanmaa',
        Satakunta: 'Satakunta',
        Ahvenanmaa: 'Ahvenanmaa',
        Lapland: 'Lappi'
    },
    
    // Gemeindedaten (Beispiel der Region Uusimaa)
    municipalitiesData: {
        Uusimaa: {
            helsinki: 'Helsinki',
            espoo: 'Espoo',
            vantaa: 'Vantaa',
            kauniainen: 'Kauniainen',
            järvenpää: 'Järvenpää',
            kerava: 'Kerava',
            tuusula: 'Tuusula',
            nurmijärvi: 'Nurmijärvi',
            lyly: 'Länsi-Uusimaa',
            sipoo: 'Sipoo'
        },
        Pirkanmaa: {
            tampere: 'Tampere',
            Nokia: 'Nokia',
            ylöjärvi: 'Ylöjärvi',
            kangasala: 'Kangasala',
            lempäälä: 'Lempäälä',
            pirkkala: 'Pirkkala',
            orivesi: 'Orivesi',
            hängenkyrö: 'Hämeenkyrö'
        },
        VarsinaisSuomi: {
            turku: 'Turku',
            rauma: 'Rauma',
            salo: 'Salo',
            pori: 'Pori',
            kaarina: 'Kaarina',
            littoinen: 'Littoinen',
            raisio: 'Raisio',
            naantali: 'Naantali'
        },
        KeskiSuomi: {
            jyväskylä: 'Jyväskylä',
            jyväskylänML: 'Jyväskylän mlk',
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala'
        },
        PäijätHäme: {
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala',
            pertunmaa: 'Pertunmaa',
            hartola: 'Hartola'
        }
    },
    
    // Universitätsnamen
    universities: {
        HY: 'Universität Helsinki',
        AALTO: 'Aalto-Universität',
        TUNI: 'Universität Tampere',
        UTA: 'Universität Oulu',
        UTU: 'Universität Turku',
        JYU: 'Universität Jyväskylä',
        UEF: 'Universität Ostfinnland',
        TAMK: 'Fachhochschule Tampere',
        HAAGA: 'Fachhochschule Haaga-Helia',
        Laurea: 'Fachhochschule Laurea'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Geschoss',
        unit: 'Einheit',
        municipality: 'Gemeinde',
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
        idCardNumber: 'Ausweisnummer'
    }
};