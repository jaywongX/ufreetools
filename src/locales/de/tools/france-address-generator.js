export default {
    name: 'Frankreich-Adressgenerator - Erstellen Sie echte französische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Frankreich-Adressgenerator, der echte französische Adressen, Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Departement-Filterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
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
    selectDepartment: 'Departement auswählen',
    allRegions: 'Alle Regionen',
    allDepartments: 'Alle Departemente',
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
    idCardTitle: 'Französischer Personalausweis',
    idCardNumber: 'Ausweisnummer',
    nirNumber: 'NIR-Nummer',
    serialNumber: 'Seriennummer',
    checkKey: 'Prüfschlüssel',
    
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
    departmentLabel: 'Departement',
    regionLabel: 'Region',
    postalCode: 'Postleitzahl',
    
    // Adressformat
    addressNumber: 'Nr.',
    addressFloor: 'Geschoss',
    addressUnit: 'Einheit',
    commercialUnit: '(Geschäftseinheit)',
    france: 'Frankreich',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Einheit',
    apartment: 'Wohnung',
    
    // Warnmeldungen
    idCardImageAlert: 'Die Generierung von Ausweisbildern erfordert Canvas-Implementierung',
    businessCardAlert: 'Die Generierung von Visitenkarten erfordert Canvas-Implementierung',
    
    // Regionsnamen (französische Regionen)
    regions: {
        IDF: 'Île-de-France',
        ARA: 'Auvergne-Rhône-Alpes',
        OCC: 'Okzitanien',
        NAQ: 'Nouvelle-Aquitaine',
        PAC: 'Provence-Alpes-Côte d\'Azur',
        HDF: 'Hauts-de-France',
        BFC: 'Bourgogne-Franche-Comté',
        NAC: 'Pays de la Loire',
        PDL: 'Pays de la Loire',
        BRE: 'Bretagne',
        NOR: 'Normandie',
        GUA: 'Guadeloupe',
        MQ: 'Martinique',
        GUY: 'Französisch-Guayana',
        REU: 'Réunion',
        COR: 'Korsika',
        ALO: 'Elsass-Lothringen',
        MP: 'Metz-Pommern'
    },
    
    // Departementdaten (Beispiel der Region Île-de-France)
    departmentsData: {
        IDF: {
            paris: 'Paris',
            hautsDeSeine: 'Hauts-de-Seine',
            seineSaintDenis: 'Seine-Saint-Denis',
            valDeMarne: 'Val-de-Marne',
            yvelines: 'Yvelines',
            essonne: 'Essonne',
            valDOise: 'Val-d\'Oise',
            seineEtMarne: 'Seine-et-Marne'
        },
        ARA: {
            rhone: 'Rhône',
            loire: 'Loire',
            isere: 'Isère',
            ain: 'Ain',
            savoie: 'Savoie',
            hauteSavoie: 'Haute-Savoie',
            allier: 'Allier',
            puyDeDome: 'Puy-de-Dôme'
        },
        OCC: {
            herault: 'Hérault',
            gard: 'Gard',
            aude: 'Aude',
            pyreneesOrientales: 'Pyrénées-Orientales',
            tarn: 'Tarn',
            hauteGaronne: 'Haute-Garonne',
            gers: 'Gers',
            lotEtGaronne: 'Lot-et-Garonne'
        },
        NAQ: {
            gironde: 'Gironde',
            charenteMaritime: 'Charente-Maritime',
            dordogne: 'Dordogne',
            landes: 'Landes',
            vienne: 'Vienne',
            hauteVienne: 'Haute-Vienne',
            charente: 'Charente',
            correze: 'Corrèze'
        },
        PAC: {
            bouchesDuRhone: 'Bouches-du-Rhône',
            alpesMaritimes: 'Alpes-Maritimes',
            var: 'Var',
            vaucluse: 'Vaucluse',
            alpesDeHauteProvence: 'Alpes-de-Haute-Provence',
            hautesAlpes: 'Hautes-Alpes'
        },
        HDF: {
            nord: 'Nord',
            pasDeCalais: 'Pas-de-Calais',
            somme: 'Somme',
            aisne: 'Aisne',
            oise: 'Oise',
            aisne: 'Aisne'
        }
    },
    
    // Universitätsnamen
    universities: {
        UP1: 'Universität Paris 1 Panthéon-Sorbonne',
        UP2: 'Universität Paris 2 Panthéon-Assas',
        UP3: 'Universität Paris 3 Sorbonne Nouvelle',
        UP4: 'Universität Paris 1 Panthéon-Sorbonne',
        UP5: 'Universität Paris Descartes',
        UP6: 'Universität Pierre und Marie Curie',
        UP7: 'Universität Paris Diderot',
        UP8: 'Universität Paris 8 Vincennes-Saint-Denis',
        UP9: 'Universität Paris Dauphine',
        UP10: 'Universität Paris Nanterre',
        UP11: 'Universität Paris-Saclay',
        UP12: 'Universität Paris-Est Créteil',
        UP13: 'Universität Sorbonne Paris Nord',
        ENS: 'École normale supérieure',
        X: 'École polytechnique'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Geschoss',
        unit: 'Einheit',
        department: 'Departement',
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