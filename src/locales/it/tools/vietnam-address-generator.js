export default {
    name: 'Generatore di indirizzi Vietnam - Genera indirizzi vietnamiti reali, informazioni di identità e contatti online',
    description: 'Generatore di indirizzi vietnamita online gratuito che crea indirizzi vietnamiti con formato reale, numeri di identità, numeri di telefono, numeri di carte di credito e profili di identità completi. Supporta il filtraggio per provincia, formati di esportazione JSON/CSV e funziona completamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di generazione',
    outputTitle: 'Risultati generati',
    generateBtn: 'Genera dati',
    loadSampleBtn: 'Carica esempio e genera',
    clearAll: 'Cancella tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima dati',
    
    // Filtraggio geografico
    locationTitle: 'Filtraggio geografico',
    selectProvince: 'Seleziona provincia/città',
    selectDistrict: 'Seleziona distretto',
    allProvinces: 'Tutte le province/città',
    allDistricts: 'Tutti i distretti',
    postalCodeLabel: 'Codice postale',
    validatePostalCode: 'Valida codice postale',
    
    // Tipi di indirizzo
    addressTypeTitle: 'Tipo di indirizzo',
    addressTypeResidential: 'Indirizzo residenziale',
    addressTypeCommercial: 'Indirizzo commerciale',
    addressTypeVirtual: 'Casella virtuale',
    addressTypeCampus: 'Campus universitario',
    
    // Informazioni di identità
    identityTitle: 'Informazioni di identità',
    fullName: 'Nome completo',
    gender: 'Genere',
    genderMale: 'Maschile',
    genderFemale: 'Femminile',
    age: 'Età',
    birthDate: 'Data di nascita',
    zodiac: 'Segno zodiacale',
    height: 'Altezza',
    weight: 'Peso',
    
    // Informazioni di contatto
    contactTitle: 'Informazioni di contatto',
    phoneNumber: 'Numero di telefono',
    phoneType: 'Tipo di telefono',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Fisso',
    areaCode: 'Prefisso',
    email: 'Indirizzo email',
    tempEmail: 'Email temporanea',
    
    // Carta di credito
    creditCardTitle: 'Informazioni carta di credito',
    cardType: 'Tipo di carta',
    cardNumber: 'Numero di carta',
    expiryDate: 'Data di scadenza',
    cvv: 'CVV',
    bankBin: 'BIN bancario',
    
    // Carriera
    careerTitle: 'Profilo professionale',
    jobTitle: 'Posizione',
    salary: 'Stipendio',
    companyName: 'Nome azienda',
    companySize: 'Dimensione azienda',
    industry: 'Industria',
    employmentStatus: 'Stato occupazionale',
    employmentFullTime: 'Tempo pieno',
    employmentPartTime: 'Part-time',
    
    // Carta d\'identità
    idCardTitle: 'Carta d\'identità vietnamita',
    idCardNumber: 'Numero carta d\'identità',
    cmndNumber: 'Numero CMND',
    cccdNumber: 'Numero CCCD',
    serialNumber: 'Numero di serie',
    
    // Impronta digitale
    fingerprintTitle: 'Impronta digitale',
    os: 'Sistema operativo',
    osVersion: 'Versione sistema',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Risoluzione schermo',
    timezone: 'Fuso orario',
    guid: 'GUID',
    ipAddress: 'Indirizzo IP',
    macAddress: 'Indirizzo MAC',
    cookiePolicy: 'Policy cookie',
    
    // Opzioni di esportazione
    exportTitle: 'Formato di esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    exportIdCard: 'Genera immagine carta d\'identità',
    exportBusinessCard: 'Genera biglietto da visita',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Visualizza dettagli',
    
    // Generazione batch
    batchTitle: 'Generazione batch',
    quantityLabel: 'Quantità',
    quantityPlaceholder: 'Inserisci quantità (1-100)',
    
    // Messaggi di notifica
    generating: 'Generazione in corso...',
    generated: 'Generazione completata',
    copySuccess: 'Copiato negli appunti',
    downloadSuccess: 'Download riuscito',
    invalidQuantity: 'Inserisci un numero tra 1 e 100',
    
    // Visualizzazione risultati
    resultCount: '{count} record generati',
    resultSummary: 'Riepilogo risultati',
    showAll: 'Mostra tutto',
    collapse: 'Comprimi',
    
    // Opzioni di generazione
    generateOptionsTitle: 'Opzioni di generazione',
    
    // Visualizzazione record
    recordLabel: 'Record #{num}',
    addressLabel: 'Indirizzo',
    streetLabel: 'Via',
    houseNumberLabel: 'Numero civico',
    buildingLabel: 'Edificio',
    floorLabel: 'Piano',
    unitLabel: 'Unità',
    wardLabel: 'Quartiere',
    districtLabel: 'Distretto',
    provinceLabel: 'Provincia/Città',
    postalCode: 'Codice postale',
    
    // Formato indirizzo
    addressNumber: 'N°',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità commerciale)',
    vietnam: 'Vietnam',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    buildingUnit: 'Unità',
    apartment: 'Appartamento',
    
    // Messaggi di allerta
    idCardImageAlert: 'La generazione di immagini carte d\'identità richiede implementazione canvas',
    businessCardAlert: 'La generazione di biglietti da visita richiede implementazione canvas',
    
    // Nomi delle province (province vietnamite)
    provinces: {
        HN: 'Hanoi',
        HCM: 'Ho Chi Minh City',
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
    
    // Dati distretti (esempi per Hanoi e Ho Chi Minh City)
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
            quan1: 'Distretto 1',
            quan3: 'Distretto 3',
            quan4: 'Distretto 4',
            quan5: 'Distretto 5',
            quan6: 'Distretto 6',
            quan7: 'Distretto 7',
            quan10: 'Distretto 10',
            quan11: 'Distretto 11',
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
    
    // Nomi delle università
    universities: {
        HUST: 'Università di Scienza e Tecnologia di Hanoi',
        VNU: 'Università Nazionale del Vietnam',
        HANU: 'Università Nazionale di Hanoi',
        HCMUS: 'Università Nazionale di Ho Chi Minh City',
        RMIT: 'Università RMIT Vietnam',
        FTU: 'Università del Commercio Estero',
        NEU: 'Università Nazionale di Economia',
        HPU: 'Università di Farmacia di Hanoi',
        PTIT: 'Istituto di Poste e Telecomunicazioni',
        FPT: 'Università FPT'
    },
    
    // Nomi colonne CSV
    csv: {
        fullAddress: 'Indirizzo completo',
        street: 'Via',
        houseNumber: 'Numero civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
        ward: 'Quartiere',
        district: 'Distretto',
        province: 'Provincia/Città',
        postalCode: 'Codice postale',
        fullName: 'Nome completo',
        gender: 'Genere',
        age: 'Età',
        birthDate: 'Data di nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo di carta',
        cardNumber: 'Numero di carta',
        idCardNumber: 'Numero carta d\'identità'
    }
};