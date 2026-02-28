export default {
    name: 'Japan-Adressgenerator - Generieren Sie Echte Japanische Adressen, Identitätsinformationen und Kontaktdaten Online',
    description: 'Kostenloser Online-Japan-Adressgenerator. Erstellt authentische japanische Adressformate, My Number (Persönliche Identifikationsnummer), Telefonnummern, Kreditkarten und vollständige Identitätsprofile. Filterung nach Präfektur, JSON/CSV-Export, läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten Generieren',
    loadSampleBtn: 'Beispiel Laden und Generieren',
    clearAll: 'Alles Löschen',
    noOutput: 'Keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Standortfilterung',
    selectPrefecture: 'Präfektur Auswählen',
    selectCity: 'Stadt/Stadtbezirk Auswählen',
    allPrefectures: 'Alle Präfekturen',
    allCities: 'Alle Städte/Stadtbezirke',
    postalCodeLabel: 'Postleitzahl',
    validatePostalCode: 'Postleitzahl Validieren',
    
    // Adresstypen
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeVirtual: 'Virtuelles Postfach',
    addressTypeCampus: 'Universitätscampus',
    
    // Identitätsinformationen
    identityTitle: 'Identitätsinformationen',
    fullName: 'Vollständiger Name',
    fullNameKana: 'Katakana-Name',
    gender: 'Geschlecht',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    age: 'Alter',
    birthDate: 'Geburtsdatum',
    zodiac: 'Sternzeichen',
    bloodType: 'Blutgruppe',
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
    careerTitle: 'Berufsprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeitbeschäftigter',
    employmentPartTime: 'Vertragsmitarbeiter',
    
    // My Number (Persönliche Identifikationsnummer)
    idCardTitle: 'My Number (Persönliche Identifikationsnummer)',
    idCardNumber: 'Identifikationsnummer',
    
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
    exportJson: 'JSON Exportieren',
    exportCsv: 'CSV Exportieren',
    exportIdCard: 'Bewohnerkarten-Bild Generieren',
    exportBusinessCard: 'Visitenkarte Generieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details Anzeigen',
    
    // Stapelverarbeitung
    batchTitle: 'Stapelverarbeitung',
    quantityLabel: 'Menge',
    quantityPlaceholder: 'Menge eingeben (1-100)',
    
    // Statusmeldungen
    generating: 'Generierung läuft...',
    generated: 'Generierung Abgeschlossen',
    copySuccess: 'In Zwischenablage kopiert',
    downloadSuccess: 'Download erfolgreich',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1-100 ein',
    
    // Ergebnisanzeige
    resultCount: '{count} Datensätze generiert',
    resultSummary: 'Ergebniszusammenfassung',
    showAll: 'Alle Anzeigen',
    collapse: 'Einklappen',
    
    // Generierungsoptionen
    generateOptionsTitle: 'Generierungsoptionen',
    
    // Datensatzanzeige
    recordLabel: 'Datensatz #{num}',
    addressLabel: 'Adresse',
    postalCodeLabelDisplay: 'Postleitzahl',
    prefectureLabel: 'Präfektur',
    cityLabel: 'Stadt/Stadtbezirk',
    townLabel: 'Stadtteil',
    chomeLabel: 'Chome',
    banLabel: 'Ban',
    goLabel: 'Go',
    buildingLabel: 'Gebäudename',
    floorLabel: 'Etage',
    roomLabel: 'Raum',
    
    // Adressformat
    addressNumber: '-',
    addressFloor: 'E',
    addressRoom: '',
    commercialUnit: ' (Gewerblich)',
    japan: 'Japan',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Akademiegebäude',
    library: 'Bibliothek',
    buildingUnit: 'Gebäude',
    
    // Warnmeldungen
    idCardImageAlert: 'Die Generierung von Bewohnerkarten-Bildern erfordert Canvas-Implementierung',
    businessCardAlert: 'Die Generierung von Visitenkarten erfordert Canvas-Implementierung',
    
    // Präfekturen
    prefectures: {
        '01': 'Hokkaido',
        '02': 'Aomori',
        '03': 'Iwate',
        '04': 'Miyagi',
        '05': 'Akita',
        '06': 'Yamagata',
        '07': 'Fukushima',
        '08': 'Ibaraki',
        '09': 'Tochigi',
        '10': 'Gunma',
        '11': 'Saitama',
        '12': 'Chiba',
        '13': 'Tokio',
        '14': 'Kanagawa',
        '15': 'Niigata',
        '16': 'Toyama',
        '17': 'Ishikawa',
        '18': 'Fukui',
        '19': 'Yamanashi',
        '20': 'Nagano',
        '21': 'Gifu',
        '22': 'Shizuoka',
        '23': 'Aichi',
        '24': 'Mie',
        '25': 'Shiga',
        '26': 'Kyoto',
        '27': 'Osaka',
        '28': 'Hyogo',
        '29': 'Nara',
        '30': 'Wakayama',
        '31': 'Tottori',
        '32': 'Shimane',
        '33': 'Okayama',
        '34': 'Hiroshima',
        '35': 'Yamaguchi',
        '36': 'Tokushima',
        '37': 'Kagawa',
        '38': 'Ehime',
        '39': 'Kochi',
        '40': 'Fukuoka',
        '41': 'Saga',
        '42': 'Nagasaki',
        '43': 'Kumamoto',
        '44': 'Oita',
        '45': 'Miyazaki',
        '46': 'Kagoshima',
        '47': 'Okinawa'
    },
    
    // Städte
    cities: {
        '01': {
            sapporo: 'Sapporo',
            asahikawa: 'Asahikawa',
            hakodate: 'Hakodate',
            obihiro: 'Obihiro'
        },
        '04': {
            sendai: 'Sendai',
            shiogama: 'Shiogama',
            ishinomaki: 'Ishinomaki'
        },
        '13': {
            chiyoda: 'Bezirk Chiyoda',
            chuo: 'Bezirk Chuo',
            minato: 'Bezirk Minato',
            shinjuku: 'Bezirk Shinjuku',
            shibuya: 'Bezirk Shibuya',
            shinagawa: 'Bezirk Shinagawa',
            meguro: 'Bezirk Meguro',
            setagaya: 'Bezirk Setagaya',
            ota: 'Bezirk Ota',
            nerima: 'Bezirk Nerima'
        },
        '14': {
            yokohama: 'Yokohama',
            kawasaki: 'Kawasaki',
            sagamihara: 'Sagamihara',
            fujisawa: 'Fujisawa'
        },
        '23': {
            nagoya: 'Nagoya',
            toyohashi: 'Toyohashi',
            okazaki: 'Okazaki'
        },
        '26': {
            kyoto: 'Kyoto',
            utsunomiya: 'Uji'
        },
        '27': {
            osaka: 'Osaka',
            sakai: 'Sakai',
            hirakata: 'Hirakata',
            toyonaka: 'Toyonaka'
        },
        '28': {
            kobe: 'Kobe',
            himeji: 'Himeji',
            amagasaki: 'Amagasaki'
        },
        '40': {
            fukuoka: 'Fukuoka',
            kitakyushu: 'Kitakyushu',
            kurume: 'Kurume'
        },
        '47': {
            naha: 'Naha',
            okinawa: 'Okinawa'
        }
    },
    
    // Universitäten
    universities: {
        UTokyo: 'Universität Tokio',
        KyotoU: 'Universität Kyoto',
        OsakaU: 'Universität Osaka',
        TohokuU: 'Universität Tohoku',
        NagoyaU: 'Universität Nagoya',
        KyushuU: 'Universität Kyushu',
        HokkaidoU: 'Universität Hokkaido',
        Keio: 'Universität Keio',
        Waseda: 'Universität Waseda'
    },
    
    // Blutgruppen
    bloodTypes: {
        A: 'Gruppe A',
        B: 'Gruppe B',
        O: 'Gruppe O',
        AB: 'Gruppe AB'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        postalCode: 'Postleitzahl',
        prefecture: 'Präfektur',
        city: 'Stadt/Stadtbezirk',
        town: 'Stadtteil',
        building: 'Gebäude',
        fullName: 'Vollständiger Name',
        fullNameKana: 'Katakana-Name',
        gender: 'Geschlecht',
        age: 'Alter',
        birthDate: 'Geburtsdatum',
        phone: 'Telefon',
        email: 'E-Mail',
        cardType: 'Kartentyp',
        cardNumber: 'Kartennummer',
        idCardNumber: 'My Number'
    }
};
