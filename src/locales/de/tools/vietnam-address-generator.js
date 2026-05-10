export default {
    name: 'Vietnam-Adressgenerator - Erstellen Sie echte vietnamesische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Vietnam-Adressgenerator, der echte vietnamesische Adressen, Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Provinz-Filterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectProvince: 'Provinz/Stadt auswählen',
    selectDistrict: 'Bezirk auswählen',
    allProvinces: 'Alle Provinzen/Städte',
    allDistricts: 'Alle Bezirke',
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
    careerTitle: 'Berufsprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    // Ausweis
    idCardTitle: 'Vietnamesischer Ausweis',
    idCardNumber: 'Ausweisnummer',
    cmndNumber: 'CMND-Nummer',
    cccdNumber: 'CCCD-Nummer',
    serialNumber: 'Seriennummer',
    
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
    wardLabel: 'Bezirk',
    districtLabel: 'Bezirk',
    provinceLabel: 'Provinz/Stadt',
    postalCode: 'Postleitzahl',
    
    // Adressformat
    addressNumber: 'Nr.',
    addressFloor: 'Etage',
    addressUnit: 'Einheit',
    commercialUnit: '(Geschäftseinheit)',
    vietnam: 'Vietnam',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    buildingUnit: 'Einheit',
    apartment: 'Wohnung',
    
    // Warnhinweise
    idCardImageAlert: 'Die Generierung von Ausweisbildern erfordert eine Canvas-Implementierung',
    businessCardAlert: 'Die Generierung von Visitenkarten erfordert eine Canvas-Implementierung',
    
    // Provinznamen (vietnamesische Provinzen)
    provinces: {
        HN: 'Hanoi',
        HCM: 'Ho-Chi-Minh-Stadt',
        HP: 'Haiphong',
        DN: 'Da Nang',
        CT: 'Can Tho',
        BH: 'Ba Ria-Vung Tau',
        BD: 'Binh Duong',
        QN: 'Quang Ninh',
        QG: 'Quang Nam',
        KG: 'Ca Mau',
        DT: 'Dong Nai',
        HB: 'Ha Nam',
        TH: 'Thai Binh',
        NB: 'Nam Dinh',
        VL: 'Vinh Long',
        TG: 'Soc Trang',
        NT: 'Ninh Thuan',
        PY: 'Phu Yen',
        TV: 'Tay Ninh',
        BD: 'Binh Dinh',
        HT: 'Hoa Binh',
        TB: 'Tuyen Quang',
        TN: 'Thai Nguyen',
        LC: 'Lai Chau',
        YB: 'Yen Bai',
        DB: 'Dien Bien',
        LA: 'Lao Cai',
        CB: 'Cao Bang',
        LD: 'Lam Dong',
        DC: 'Dak Lak',
        QN: 'Quang Binh',
        QT: 'Quang Tri',
        HT: 'Ha Tinh',
        NA: 'Nghe An',
        TT: 'Thanh Hoa',
        NB: 'Ninh Binh',
        ST: 'An Giang',
        CT: 'Tra Vinh',
        BP: 'Ben Tre',
        BL: 'Bac Lieu',
        KG: 'Ca Mau',
        CM: 'Ca Mau'
    },
    
    // Bezirksdaten (Beispiele für Hanoi und Ho-Chi-Minh-Stadt)
    districtsData: {
        HN: {
            hoanKiem: 'Hoan Kiem',
            baDinh: 'Ba Dinh',
            dongDa: 'Dong Da',
            haiBaTrung: 'Hai Ba Trung',
            thanhXuan: 'Thanh Xuan',
            cauGiay: 'Cau Giay',
            hoangMai: 'Hoang Mai',
            longBien: 'Long Bien',
            tayHo: 'Tay Ho',
            bacTuLiem: 'Bac Tu Liem',
            namTuLiem: 'Nam Tu Liem',
            haDong: 'Ha Dong'
        },
        HCM: {
            quan1: 'Bezirk 1',
            quan3: 'Bezirk 3',
            quan4: 'Bezirk 4',
            quan5: 'Bezirk 5',
            quan6: 'Bezirk 6',
            quan7: 'Bezirk 7',
            quan10: 'Bezirk 10',
            quan11: 'Bezirk 11',
            binhThanh: 'Binh Thanh',
            phuNhuan: 'Phu Nhuan',
            tanBinh: 'Tan Binh',
            goVap: 'Go Vap',
            binhChanh: 'Binh Chanh',
            thuDuc: 'Thu Duc'
        },
        DN: {
            haiChau: 'Hai Chau',
            thanhKhe: 'Thanh Khe',
            sonTra: 'Son Tra',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'Hong Bang',
            LeChan: 'Le Chan',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'Hai An',
            KiAn: 'Ki An'
        }
    },
    
    // Universitätsnamen
    universities: {
        HUST: 'Hanoi University of Science and Technology',
        VNU: 'Vietnam National University',
        HANU: 'Hanoi National University',
        HCMUS: 'Ho Chi Minh City National University',
        RMIT: 'RMIT University Vietnam',
        FTU: 'Foreign Trade University',
        NEU: 'National Economics University',
        HPU: 'Hanoi University of Pharmacy',
        PTIT: 'Posts and Telecommunications Institute of Technology',
        FPT: 'FPT University'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        floor: 'Etage',
        unit: 'Einheit',
        ward: 'Bezirk',
        district: 'Bezirk',
        province: 'Provinz/Stadt',
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