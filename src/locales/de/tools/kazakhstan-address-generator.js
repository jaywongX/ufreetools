export default {
    name: 'Kasachstan-Adressgenerator - Erstellen Sie echte kasachische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Kasachstan-Adressgenerator, der echte kasachische Adressen, Ausweisnummern (ИИН), Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Regionenfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectRegion: 'Region/Stadt auswählen',
    selectCity: 'Stadt auswählen',
    allRegions: 'Alle Regionen/Städte',
    allCities: 'Alle Städte',
    postalCodeLabel: 'Postleitzahl',
    
    // Adresstypen
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeVirtual: 'Virtueller Briefkasten',
    addressTypeCampus: 'Uni-Campus',
    
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
    bankBin: 'Bank-BIN',
    
    // Karriere
    careerTitle: 'Berufsprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    
    // Ausweis
    idCardTitle: 'Kasachischer Ausweis (ИИН)',
    idCardNumber: 'Ausweisnummer (ИИН)',
    
    // Digitaler Abdruck
    fingerprintTitle: 'Digitaler Abdruck',
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
    regionLabel: 'Region/Stadt',
    
    // Adressformat
    addressFloor: 'Geschoss',
    addressUnit: 'Einheit',
    commercialUnit: '(Geschäftseinheit)',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Gebäude',
    
    // Regionsnamen (Regionen Kasachstans)
    regions: {
        NUR: 'Nur-Sultan (Astana)',
        ALA: 'Almaty',
        SHY: 'Schymkent',
        AKM: 'Region Akmola',
        AKT: 'Region Aktöbe',
        ATY: 'Region Atyrau',
        MAN: 'Region Mangghystau',
        PAV: 'Region Pawlodar',
        SKZ: 'Region Südkasachstan',
        KUS: 'Region Qostanai',
        KAR: 'Region Qaraghandy',
        ZAP: 'Region Westkasachstan',
        MNG: 'Region Schambyl',
        TUR: 'Region Almaty',
        YUZ: 'Region Qysylorda',
        VOS: 'Region Ostkasachstan',
        ZHE: 'Region Schesqasghan'
    },
    
    // Stadtdaten
    cities: {
        NUR: {
            nursultan: 'Nur-Sultan'
        },
        ALA: {
            almaty: 'Almaty'
        },
        SHY: {
            shymkent: 'Schymkent'
        },
        AKM: {
            akmola: 'Akmola',
            kokshetau: 'Kökschetau'
        },
        AKT: {
            aktobe: 'Aktöbe'
        },
        ATY: {
            atyrau: 'Atyrau'
        },
        MAN: {
            aktau: 'Aqtau'
        },
        PAV: {
            pavlodar: 'Pawlodar'
        },
        SKZ: {
            turkestan: 'Türkistan'
        },
        KUS: {
            kostanay: 'Qostanai'
        },
        KAR: {
            karaganda: 'Qaraghandy'
        },
        ZAP: {
            uralsk: 'Oral'
        },
        MNG: {
            taraz: 'Taras'
        },
        TUR: {
            taldykorgan: 'Taldyqorghan'
        },
        YUZ: {
            kyzylorda: 'Qysylorda'
        },
        VOS: {
            'ust-kamenogorsk': 'Öskemen'
        },
        ZHE: {
            temirtau: 'Temirtau'
        }
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Geschoss',
        unit: 'Einheit',
        region: 'Region/Stadt',
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