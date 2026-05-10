export default {
    name: 'Türkei-Adressgenerator - Erzeugen Sie echte türkische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Türkei-Adressgenerator, der echte türkische Adressen, Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Provinzfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Daten Vorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectProvince: 'Provinz auswählen',
    selectDistrict: 'Bezirk auswählen',
    allProvinces: 'Alle Provinzen',
    allDistricts: 'Alle Bezirke',
    postalCodeLabel: 'Postleitzahl',
    validatePostalCode: 'Postleitzahl validieren',
    
    // Adresstypen
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeVirtual: 'Virtuelles Postfach',
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
    companyName: 'Unternehmensname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    // Ausweis
    idCardTitle: 'Türkischer Personalausweis',
    idCardNumber: 'Ausweisnummer',
    nationalId: 'Nationale Ausweisnummer',
    serialNumber: 'Seriennummer',
    checkDigit: 'Prüfziffer',
    
    // Digitaler Fingerabdruck
    fingerprintTitle: 'Digitaler Fingerabdruck',
    os: 'Betriebssystem',
    osVersion: 'OS-Version',
    browser: 'Browser',
    userAgent: 'User-Agent',
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
    districtLabel: 'Bezirk',
    provinceLabel: 'Provinz',
    postalCode: 'Postleitzahl',
    
    // Adressformat
    addressNumber: 'Nr.',
    addressFloor: 'Geschoss',
    addressUnit: 'Einheit',
    commercialUnit: '(Geschäftseinheit)',
    turkey: 'Türkei',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Gebäudeeinheit',
    apartment: 'Wohnung',
    
    // Warnhinweise
    idCardImageAlert: 'Die Erzeugung von Ausweisbildern erfordert Canvas-Implementierung',
    businessCardAlert: 'Die Erzeugung von Visitenkarten erfordert Canvas-Implementierung',
    
    // Provinznamen (Wichtige türkische Provinzen)
    provinces: {
        IST: 'Istanbul',
        ANK: 'Ankara',
        IZM: 'Izmir',
        BUR: 'Bursa',
        ANT: 'Antalya',
        ADN: 'Adana',
        GAZ: 'Gaziantep',
        KON: 'Konya',
        MRA: 'Mersin',
        KAY: 'Kayseri',
        ESK: 'Eskisehir',
        TRA: 'Trabzon',
        SAM: 'Samsun',
        MAL: 'Malatya',
        DIA: 'Diyarbakir',
        ERZ: 'Erzurum',
        VAN: 'Van',
        SIV: 'Sivas',
        TOK: 'Tokat',
        COR: 'Corum'
    },
    
    // Bezirksnamen (Beispiel Istanbul)
    districtsData: {
        IST: {
            beyoglu: 'Beyoglu',
            fatih: 'Fatih',
            kadikoy: 'Kadikoy',
            besiktas: 'Besiktas',
            sisli: 'Sisli',
            uskudar: 'Uskudar',
            bakirkoy: 'Bakirkoy',
            zeytinburnu: 'Zeytinburnu',
            beylikduzu: 'Beylikduzu',
            pendik: 'Pendik',
            maltepe: 'Maltepe',
            kartal: 'Kartal',
            tuzla: 'Tuzla',
            catalca: 'Catalca'
        },
        ANK: {
            cankaya: 'Cankaya',
            yenimahalle: 'Yenimahalle',
            altindag: 'Altindag',
            pursaklar: 'Pursaklar',
            eryaman: 'Eryaman',
            etimesgut: 'Etimesgut',
            sincan: 'Sincan'
        },
        IZM: {
            konak: 'Konak',
            karsiyaka: 'Karsiyaka',
            bornova: 'Bornova',
            cigli: 'Cigli',
            bayrakli: 'Bayrakli',
            balcova: 'Balcova',
            guzelbahce: 'Guzelbahce'
        },
        BUR: {
            nilufer: 'Nilufer',
            osmangazi: 'Osmangazi',
            yildirim: 'Yildirim',
            mudanya: 'Mudanya',
            gemlik: 'Gemlik'
        },
        ANT: {
            muratpasa: 'Muratpasa',
            kepez: 'Kepez',
            konyaalti: 'Konyaalti',
            aksu: 'Aksu',
            dosenmeadi: 'Dosenmeadi'
        }
    },
    
    // Universitätsnamen
    universities: {
        ITU: 'Istanbul Technische Universität',
        ITU: 'Istanbul Universität',
        BOUN: 'Bogazici Universität',
        METU: 'Middle East Technische Universität',
        HU: 'Hacettepe Universität',
        ANU: 'Ankara Universität',
        DEU: 'Dokuz Eylul Universität'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Geschoss',
        unit: 'Einheit',
        district: 'Bezirk',
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
        idCardNumber: 'Ausweisnummer'
    }
};