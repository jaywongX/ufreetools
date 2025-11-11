export default {
    name: 'HK Adressgenerator - Generieren Sie echte Hongkong-Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-HK-Adressgenerator, der echte Hongkong-Adressen, ID-Nummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile im richtigen Format erzeugt. Unterstützt Bezirksfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectDistrict: 'Bezirk auswählen',
    selectArea: 'Gebiet auswählen',
    allDistricts: 'Alle Bezirke',
    allAreas: 'Alle Gebiete',
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
    areaCode: 'Ortsvorwahl',
    email: 'E-Mail-Adresse',
    tempEmail: 'Temporäre E-Mail',
    
    // Kreditkarte
    creditCardTitle: 'Kreditkarteninformationen',
    cardType: 'Kartentyp',
    cardNumber: 'Kartennummer',
    expiryDate: 'Ablaufdatum',
    cvv: 'CVV',
    bankBin: 'Bank-BIN',
    
    // Beruf
    careerTitle: 'Berufsprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Firmengröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    // Personalausweis
    idCardTitle: 'Hongkong-Identitätskarte',
    idCardNumber: 'Identitätskartennummer',
    prefixLetter: 'Präfixbuchstabe',
    serialNumber: 'Seriennummer',
    checkDigit: 'Prüfziffer',
    
    // Digitale Fingerabdrücke
    fingerprintTitle: 'Digitale Fingerabdrücke',
    os: 'Betriebssystem',
    osVersion: 'BS-Version',
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
    exportIdCard: 'Personalausweisbild generieren',
    exportBusinessCard: 'Visitenkarte generieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details anzeigen',
    
    // Stapelgenerierung
    batchTitle: 'Stapelgenerierung',
    quantityLabel: 'Menge',
    quantityPlaceholder: 'Menge eingeben (1-100)',
    
    // Benachrichtigungsmeldungen
    generating: 'Generiere...',
    generated: 'Generierung abgeschlossen',
    copySuccess: 'In die Zwischenablage kopiert',
    downloadSuccess: 'Download erfolgreich',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1-100 ein',
    
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
    unitLabel: 'Einheit',
    districtLabel: 'Bezirk',
    
    // Adressformat
    addressNumber: 'Nr.',
    addressFloor: 'Etage',
    addressUnit: 'Einheit',
    commercialUnit: '(Gewerbeeinheit)',
    hongKong: 'Hongkong',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Einheit',
    
    // Warnmeldungen
    idCardImageAlert: 'Die Generierung von Personalausweisbildern erfordert eine Canvas-Implementierung',
    businessCardAlert: 'Die Generierung von Visitenkarten erfordert eine Canvas-Implementierung',
    
    // Bezirksnamen
    districts: {
        CW: 'Zentral- und West',
        WAN: 'Wan Chai',
        E: 'Ost',
        S: 'Süd',
        YTM: 'Yau Tsim Mong',
        SSP: 'Sham Shui Po',
        KC: 'Kowloon City',
        WTS: 'Wong Tai Sin',
        KT: 'Kwun Tong',
        TM: 'Tuen Mun',
        YL: 'Yuen Long',
        N: 'Nord',
        TP: 'Tai Po',
        ST: 'Sha Tin',
        SK: 'Sai Kung',
        TW: 'Tsuen Wan',
        KW: 'Kwai Tsing',
        IS: 'Inseln'
    },
    
    // Gebietsnamen
    areas: {
        CW: {
            central: 'Zentral',
            sheungWan: 'Sheung Wan',
            saiWan: 'Sai Wan',
            midLevels: 'Mid-Levels'
        },
        WAN: {
            wanChai: 'Wan Chai',
            causewayBay: 'Causeway Bay',
            happyValley: 'Happy Valley',
            taiHang: 'Tai Hang'
        },
        E: {
            northPoint: 'North Point',
            quarryBay: 'Quarry Bay',
            taiKooShing: 'Tai Koo Shing',
            shauKeiWan: 'Shau Kei Wan',
            chaiWan: 'Chai Wan'
        },
        S: {
            repulseBay: 'Repulse Bay',
            deepWaterBay: 'Deep Water Bay',
            stanley: 'Stanley',
            aberdeen: 'Aberdeen',
            apLeiChau: 'Ap Lei Chau'
        },
        YTM: {
            tsimShaTsui: 'Tsim Sha Tsui',
            yauMaTei: 'Yau Ma Tei',
            mongKok: 'Mong Kok',
            jordan: 'Jordan'
        },
        SSP: {
            shamShuiPo: 'Sham Shui Po',
            cheungShaWan: 'Cheung Sha Wan',
            laiChiKok: 'Lai Chi Kok',
            shekKipMei: 'Shek Kip Mei'
        },
        KC: {
            kowloonCity: 'Kowloon City',
            toKwaWan: 'To Kwa Wan',
            hungHom: 'Hung Hom',
            hoManTin: 'Ho Man Tin'
        },
        WTS: {
            wongTaiSin: 'Wong Tai Sin',
            diamondHill: 'Diamond Hill',
            sanPoKong: 'San Po Kong',
            lokFu: 'Lok Fu'
        },
        KT: {
            kwunTong: 'Kwun Tong',
            lamTin: 'Lam Tin',
            ngauTauKok: 'Ngau Tau Kok',
            kowloonBay: 'Kowloon Bay'
        },
        TM: {
            tuenMun: 'Tuen Mun',
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            tsingShan: 'Tsing Shan'
        },
        YL: {
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            kamTin: 'Kam Tin',
            pingShan: 'Ping Shan'
        },
        N: {
            sheungShui: 'Sheung Shui',
            fanLing: 'Fan Ling',
            shaTauKok: 'Sha Tau Kok',
            taKuLing: 'Ta Ku Ling'
        },
        TP: {
            taiPo: 'Tai Po',
            taiPoMarket: 'Tai Po Markt',
            taiWo: 'Tai Wo',
            lamTsuen: 'Lam Tsuen'
        },
        ST: {
            shaTin: 'Sha Tin',
            taiWai: 'Tai Wai',
            maOnShan: 'Ma On Shan',
            foTan: 'Fo Tan'
        },
        SK: {
            saiKung: 'Sai Kung',
            tseungKwanO: 'Tseung Kwan O',
            hangHau: 'Hang Hau',
            clearWaterBay: 'Clear Water Bay'
        },
        TW: {
            tsuenWan: 'Tsuen Wan',
            kwaiChung: 'Kwai Chung',
            tsingYi: 'Tsing Yi',
            shamTseng: 'Sham Tseng'
        }
    },
    
    // Universitätsnamen
    universities: {
        HKU: 'Universität von Hongkong',
        CUHK: 'Chinesische Universität von Hongkong',
        HKUST: 'Hongkong University of Science and Technology',
        PolyU: 'Hongkong Polytechnic University',
        CityU: 'City University of Hongkong'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Etage',
        unit: 'Einheit',
        district: 'Bezirk',
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