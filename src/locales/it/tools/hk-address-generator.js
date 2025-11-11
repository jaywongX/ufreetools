export default {
    name: 'Generatore di Indirizzi HK - Genera indirizzi reali di Hong Kong, informazioni di identità e dettagli di contatto online',
    description: 'Generatore gratuito di indirizzi HK online che crea indirizzi di Hong Kong in formato reale, numeri di identità, numeri di telefono, numeri di carta di credito e profili di identità completi. Supporta il filtraggio per distretto, formati di esportazione JSON/CSV e funziona interamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di Generazione',
    outputTitle: 'Risultati Generati',
    generateBtn: 'Genera Dati',
    loadSampleBtn: 'Carica Esempio e Genera',
    clearAll: 'Cancella Tutto',
    noOutput: 'Nessun risultato ancora generato',
    preview: 'Anteprima Dati',
    
    // Filtraggio Geografico
    locationTitle: 'Filtraggio Geografico',
    selectDistrict: 'Seleziona Distretto',
    selectArea: 'Seleziona Area',
    allDistricts: 'Tutti i Distretti',
    allAreas: 'Tutte le Aree',
    postalCodeLabel: 'Codice Postale',
    validatePostalCode: 'Valida Codice Postale',
    
    // Tipi di Indirizzo
    addressTypeTitle: 'Tipo di Indirizzo',
    addressTypeResidential: 'Indirizzo Residenziale',
    addressTypeCommercial: 'Indirizzo Commerciale',
    addressTypeVirtual: 'Casella Postale Virtuale',
    addressTypeCampus: 'Campus Universitario',
    
    // Informazioni di Identità
    identityTitle: 'Informazioni di Identità',
    fullName: 'Nome Completo',
    gender: 'Genere',
    genderMale: 'Maschio',
    genderFemale: 'Femmina',
    age: 'Età',
    birthDate: 'Data di Nascita',
    zodiac: 'Segno Zodiacale',
    height: 'Altezza',
    weight: 'Peso',
    
    // Informazioni di Contatto
    contactTitle: 'Informazioni di Contatto',
    phoneNumber: 'Numero di Telefono',
    phoneType: 'Tipo di Telefono',
    phoneTypeMobile: 'Cellulare',
    phoneTypeLandline: 'Telefono Fisso',
    areaCode: 'Prefisso',
    email: 'Indirizzo Email',
    tempEmail: 'Email Temporanea',
    
    // Carta di Credito
    creditCardTitle: 'Informazioni sulla Carta di Credito',
    cardType: 'Tipo di Carta',
    cardNumber: 'Numero della Carta',
    expiryDate: 'Data di Scadenza',
    cvv: 'CVV',
    bankBin: 'BIN della Banca',
    
    // Carriera
    careerTitle: 'Profilo Professionale',
    jobTitle: 'Titolo Professionale',
    salary: 'Stipendio',
    companyName: 'Nome dell\'Azienda',
    companySize: 'Dimensione dell\'Azienda',
    industry: 'Settore',
    employmentStatus: 'Stato Occupazionale',
    employmentFullTime: 'Tempo Pieno',
    employmentPartTime: 'Tempo Parziale',
    
    // Carta d\'Identità
    idCardTitle: 'Carta d\'Identità di Hong Kong',
    idCardNumber: 'Numero della Carta d\'Identità',
    prefixLetter: 'Lettera Prefissa',
    serialNumber: 'Numero di Serie',
    checkDigit: 'Cifra di Controllo',
    
    // Impronta Digitale
    fingerprintTitle: 'Impronta Digitale',
    os: 'Sistema Operativo',
    osVersion: 'Versione del SO',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Risoluzione dello Schermo',
    timezone: 'Fuso Orario',
    guid: 'GUID',
    ipAddress: 'Indirizzo IP',
    macAddress: 'Indirizzo MAC',
    cookiePolicy: 'Politica dei Cookie',
    
    // Opzioni di Esportazione
    exportTitle: 'Formato di Esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    exportIdCard: 'Genera Immagine della Carta d\'Identità',
    exportBusinessCard: 'Genera Biglietto da Visita',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Visualizza Dettagli',
    
    // Generazione in Batch
    batchTitle: 'Generazione in Batch',
    quantityLabel: 'Quantità',
    quantityPlaceholder: 'Inserisci quantità (1-100)',
    
    // Messaggi di Notifica
    generating: 'Generazione in corso...',
    generated: 'Generazione Completata',
    copySuccess: 'Copiato negli appunti',
    downloadSuccess: 'Download riuscito',
    invalidQuantity: 'Si prega di inserire un numero tra 1-100',
    
    // Visualizzazione dei Risultati
    resultCount: '{count} record generati',
    resultSummary: 'Riepilogo dei Risultati',
    showAll: 'Mostra Tutto',
    collapse: 'Comprimi',
    
    // Opzioni di Generazione
    generateOptionsTitle: 'Opzioni di Generazione',
    
    // Visualizzazione dei Record
    recordLabel: 'Record #{num}',
    addressLabel: 'Indirizzo',
    streetLabel: 'Via',
    houseNumberLabel: 'Numero Civico',
    buildingLabel: 'Edificio',
    floorLabel: 'Piano',
    unitLabel: 'Unità',
    districtLabel: 'Distretto',
    
    // Formato dell'Indirizzo
    addressNumber: 'N.',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità Commerciale)',
    hongKong: 'Hong Kong',
    postOfficeBox: 'Casella Postale',
    studentDormitory: 'Dormitorio Studentesco',
    teachingBuilding: 'Edificio Didattico',
    library: 'Biblioteca',
    buildingUnit: 'Unità',
    
    // Messaggi di Avviso
    idCardImageAlert: 'La generazione dell\'immagine della carta d\'identità richiede l\'implementazione canvas',
    businessCardAlert: 'La generazione del biglietto da visita richiede l\'implementazione canvas',
    
    // Nomi dei Distretti
    districts: {
        CW: 'Centrale e Occidentale',
        WAN: 'Wan Chai',
        E: 'Est',
        S: 'Sud',
        YTM: 'Yau Tsim Mong',
        SSP: 'Sham Shui Po',
        KC: 'Città di Kowloon',
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
        IS: 'Isole'
    },
    
    // Nomi delle Aree
    areas: {
        CW: {
            central: 'Centrale',
            sheungWan: 'Sheung Wan',
            saiWan: 'Sai Wan',
            midLevels: 'Livelli Medi'
        },
        WAN: {
            wanChai: 'Wan Chai',
            causewayBay: 'Baia di Causeway',
            happyValley: 'Valle Felice',
            taiHang: 'Tai Hang'
        },
        E: {
            northPoint: 'Punto Nord',
            quarryBay: 'Baia Quarry',
            taiKooShing: 'Tai Koo Shing',
            shauKeiWan: 'Shau Kei Wan',
            chaiWan: 'Chai Wan'
        },
        S: {
            repulseBay: 'Baia di Repulse',
            deepWaterBay: 'Baia delle Acque Profonde',
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
            kowloonCity: 'Città di Kowloon',
            toKwaWan: 'To Kwa Wan',
            hungHom: 'Hung Hom',
            hoManTin: 'Ho Man Tin'
        },
        WTS: {
            wongTaiSin: 'Wong Tai Sin',
            diamondHill: 'Collina dei Diamanti',
            sanPoKong: 'San Po Kong',
            lokFu: 'Lok Fu'
        },
        KT: {
            kwunTong: 'Kwun Tong',
            lamTin: 'Lam Tin',
            ngauTauKok: 'Ngau Tau Kok',
            kowloonBay: 'Baia di Kowloon'
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
            taiPoMarket: 'Mercato di Tai Po',
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
            clearWaterBay: 'Baia delle Acque Chiare'
        },
        TW: {
            tsuenWan: 'Tsuen Wan',
            kwaiChung: 'Kwai Chung',
            tsingYi: 'Tsing Yi',
            shamTseng: 'Sham Tseng'
        }
    },
    
    // Nomi delle Università
    universities: {
        HKU: 'Università di Hong Kong',
        CUHK: 'Università Cinese di Hong Kong',
        HKUST: 'Università di Scienza e Tecnologia di Hong Kong',
        PolyU: 'Università Politecnica di Hong Kong',
        CityU: 'Università della Città di Hong Kong'
    },
    
    // Nomi delle Colonne CSV
    csv: {
        fullAddress: 'Indirizzo Completo',
        street: 'Via',
        houseNumber: 'Numero Civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
        district: 'Distretto',
        fullName: 'Nome Completo',
        gender: 'Genere',
        age: 'Età',
        birthDate: 'Data di Nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo di Carta',
        cardNumber: 'Numero della Carta',
        idCardNumber: 'Numero della Carta d\'Identità'
    }
};