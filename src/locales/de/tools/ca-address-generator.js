export default {
    name: 'Kanada Adressgenerator - Echte Kanadische Adressen & Identitätsinformationen Online Generieren',
    description: 'Kostenloser Online-Kanada-Adressgenerator. Generieren Sie echtformatige kanadische Adressen, Postleitzahlen, Telefonnummern, Kreditkarten und vollständige Identitätsprofile. Filtern nach Provinz, Export als JSON/CSV, läuft lokal für Datenschutz.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten Generieren',
    loadSampleBtn: 'Beispiel Laden & Generieren',
    clearAll: 'Alles Löschen',
    noOutput: 'Noch keine Ergebnisse',
    preview: 'Vorschau',
    
    locationTitle: 'Standortfilter',
    selectProvince: 'Provinz Auswählen',
    selectCity: 'Stadt Auswählen',
    allProvinces: 'Alle Provinzen',
    allCities: 'Alle Städte',
    postalCodeLabel: 'Postleitzahl',
    validatePostalCode: 'Postleitzahl Validieren',
    
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeVirtual: 'Postfach',
    addressTypeCampus: 'Universitätscampus',
    
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
    
    contactTitle: 'Kontaktinformationen',
    phoneNumber: 'Telefonnummer',
    phoneType: 'Telefontyp',
    phoneTypeMobile: 'Mobil',
    phoneTypeLandline: 'Festnetz',
    areaCode: 'Vorwahl',
    email: 'E-Mail-Adresse',
    tempEmail: 'Temporäre E-Mail',
    
    creditCardTitle: 'Kreditkarteninformationen',
    cardType: 'Kartentyp',
    cardNumber: 'Kartennummer',
    expiryDate: 'Ablaufdatum',
    cvv: 'CVV',
    bankBin: 'Bank-BIN',
    
    careerTitle: 'Berufsprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    sinTitle: 'Sozialversicherungsnummer (SIN)',
    sinNumber: 'SIN-Nummer',
    
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
    
    exportTitle: 'Exportformat',
    exportJson: 'JSON Exportieren',
    exportCsv: 'CSV Exportieren',
    exportIdCard: 'Ausweis Generieren',
    exportBusinessCard: 'Visitenkarte Generieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details Anzeigen',
    
    batchTitle: 'Stapelverarbeitung',
    quantityLabel: 'Anzahl',
    quantityPlaceholder: 'Anzahl eingeben (1-100)',
    
    generating: 'Generierung läuft...',
    generated: 'Generiert',
    copySuccess: 'In Zwischenablage kopiert',
    downloadSuccess: 'Download erfolgreich',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1-100 ein',
    
    resultCount: '{count} Datensätze generiert',
    resultSummary: 'Ergebniszusammenfassung',
    showAll: 'Alle Anzeigen',
    collapse: 'Einklappen',
    
    generateOptionsTitle: 'Generierungsoptionen',
    
    recordLabel: 'Datensatz #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Straße',
    houseNumberLabel: 'Hausnummer',
    buildingLabel: 'Gebäude',
    unitLabel: 'Einheit',
    cityLabel: 'Stadt',
    provinceLabel: 'Provinz',
    postalCodeDisplay: 'Postleitzahl',
    
    addressUnit: 'Einheit',
    aptNumber: 'Whg.',
    suiteNumber: 'Suite',
    pobox: 'Postfach',
    
    idCardImageAlert: 'Ausweisgenerierung erfordert Canvas',
    businessCardAlert: 'Visitenkartengenerierung erfordert Canvas',
    
    provinces: {
        ON: 'Ontario',
        QC: 'Québec',
        BC: 'British Columbia',
        AB: 'Alberta',
        MB: 'Manitoba',
        SK: 'Saskatchewan',
        NS: 'Nova Scotia',
        NB: 'New Brunswick',
        NL: 'Neufundland und Labrador',
        PE: 'Prinz-Edward-Insel',
        NT: 'Nordwest-Territorien',
        YT: 'Yukon',
        NU: 'Nunavut'
    },
    
    cities: {
        ON: {
            toronto: 'Toronto',
            ottawa: 'Ottawa',
            mississauga: 'Mississauga',
            hamilton: 'Hamilton',
            london: 'London',
            markham: 'Markham',
            vaughan: 'Vaughan',
            kitchener: 'Kitchener',
            waterloo: 'Waterloo',
            brampton: 'Brampton'
        },
        QC: {
            montreal: 'Montreal',
            quebec: 'Québec',
            laval: 'Laval',
            gatineau: 'Gatineau',
            sherbrooke: 'Sherbrooke'
        },
        BC: {
            vancouver: 'Vancouver',
            victoria: 'Victoria',
            burnaby: 'Burnaby',
            richmond: 'Richmond',
            surrey: 'Surrey',
            kelowna: 'Kelowna'
        },
        AB: {
            calgary: 'Calgary',
            edmonton: 'Edmonton',
            redDeer: 'Red Deer',
            lethbridge: 'Lethbridge'
        },
        MB: {
            winnipeg: 'Winnipeg',
            brandon: 'Brandon'
        },
        SK: {
            saskatoon: 'Saskatoon',
            regina: 'Regina'
        },
        NS: {
            halifax: 'Halifax'
        },
        NB: {
            fredericton: 'Fredericton',
            moncton: 'Moncton',
            saintJohn: 'Saint John'
        },
        NL: {
            stJohns: "St. John's"
        },
        PE: {
            charlottetown: 'Charlottetown'
        },
        NT: {
            yellowknife: 'Yellowknife'
        },
        YT: {
            whitehorse: 'Whitehorse'
        },
        NU: {
            iqaluit: 'Iqaluit'
        }
    },
    
    universities: {
        UofT: 'Universität Toronto',
        UBC: 'Universität British Columbia',
        McGill: 'McGill-Universität',
        McMaster: 'McMaster-Universität',
        Waterloo: 'Universität Waterloo',
        Alberta: 'Universität Alberta',
        Ottawa: 'Universität Ottawa',
        Montreal: 'Universität Montreal'
    },
    
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        unit: 'Einheit',
        city: 'Stadt',
        province: 'Provinz',
        postalCode: 'Postleitzahl',
        fullName: 'Vollständiger Name',
        gender: 'Geschlecht',
        age: 'Alter',
        birthDate: 'Geburtsdatum',
        phone: 'Telefon',
        email: 'E-Mail',
        cardType: 'Kartentyp',
        cardNumber: 'Kartennummer',
        sinNumber: 'SIN-Nummer'
    }
};
