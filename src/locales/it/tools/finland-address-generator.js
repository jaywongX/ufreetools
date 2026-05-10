export default {
    name: 'Generatore di indirizzi Finlandia - Genera indirizzi finlandesi reali, informazioni di identità e contatti online',
    description: 'Generatore di indirizzi finlandese online gratuito che crea indirizzi finlandesi con formato reale, numeri di identità, numeri di telefono, numeri di carte di credito e profili di identità completi. Supporta il filtraggio per regione, formati di esportazione JSON/CSV e funziona completamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di generazione',
    outputTitle: 'Risultati generati',
    generateBtn: 'Genera dati',
    loadSampleBtn: 'Carica esempio e genera',
    clearAll: 'Cancella tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima dati',
    
    // Filtraggio geografico
    locationTitle: 'Filtraggio geografico',
    selectRegion: 'Seleziona regione',
    selectMunicipality: 'Seleziona comune',
    allRegions: 'Tutte le regioni',
    allMunicipalities: 'Tutti i comuni',
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
    cardNumber: 'Numero carta',
    expiryDate: 'Data di scadenza',
    cvv: 'CVV',
    bankBin: 'BIN bancario',
    
    // Carriera
    careerTitle: 'Profilo professionale',
    jobTitle: 'Posizione lavorativa',
    salary: 'Stipendio',
    companyName: 'Nome azienda',
    companySize: 'Dimensione azienda',
    industry: 'Settore',
    employmentStatus: 'Stato occupazionale',
    employmentFullTime: 'Tempo pieno',
    employmentPartTime: 'Part-time',
    
    // Carta d'identità
    idCardTitle: 'Carta d\'identità finlandese',
    idCardNumber: 'Numero carta d\'identità',
    henkilötunnus: 'Numero di identificazione personale',
    serialNumber: 'Numero di serie',
    checkDigit: 'Cifra di controllo',
    
    // Impronta digitale
    fingerprintTitle: 'Impronta digitale',
    os: 'Sistema operativo',
    osVersion: 'Versione sistema operativo',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Risoluzione schermo',
    timezone: 'Fuso orario',
    guid: 'GUID',
    ipAddress: 'Indirizzo IP',
    macAddress: 'Indirizzo MAC',
    cookiePolicy: 'Politica cookie',
    
    // Opzioni di esportazione
    exportTitle: 'Formato di esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    exportIdCard: 'Genera immagine carta d\'identità',
    exportBusinessCard: 'Genera biglietto da visita',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Visualizza dettagli',
    
    // Generazione in blocco
    batchTitle: 'Generazione in blocco',
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
    showAll: 'Mostra tutti',
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
    municipalityLabel: 'Comune',
    regionLabel: 'Regione',
    postalCode: 'Codice postale',
    
    // Formato indirizzo
    addressNumber: 'N°',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità commerciale)',
    finland: 'Finlandia',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    buildingUnit: 'Unità',
    apartment: 'Appartamento',
    
    // Messaggi di allerta
    idCardImageAlert: 'La generazione di immagine carta d\'identità richiede implementazione canvas',
    businessCardAlert: 'La generazione di biglietti da visita richiede implementazione canvas',
    
    // Nomi delle regioni (regioni finlandesi)
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
    
    // Dati dei comuni (esempio della regione Uusimaa)
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
    
    // Nomi delle università
    universities: {
        HY: 'Università di Helsinki',
        AALTO: 'Università Aalto',
        TUNI: 'Università di Tampere',
        UTA: 'Università di Oulu',
        UTU: 'Università di Turku',
        JYU: 'Università di Jyväskylä',
        UEF: 'Università della Finlandia orientale',
        TAMK: 'Università di scienze applicate di Tampere',
        HAAGA: 'Università di scienze applicate Haaga-Helia',
        Laurea: 'Università di scienze applicate Laurea'
    },
    
    // Nomi colonne CSV
    csv: {
        fullAddress: 'Indirizzo completo',
        street: 'Via',
        houseNumber: 'Numero civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
        municipality: 'Comune',
        region: 'Regione',
        postalCode: 'Codice postale',
        fullName: 'Nome completo',
        gender: 'Genere',
        age: 'Età',
        birthDate: 'Data di nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo carta',
        cardNumber: 'Numero carta',
        idCardNumber: 'Numero carta d\'identità'
    }
};