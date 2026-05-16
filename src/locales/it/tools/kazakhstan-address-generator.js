export default {
    name: 'Generatore di indirizzi Kazakhstan - Genera indirizzi kazaki reali, informazioni di identità e contatti online',
    description: 'Generatore di indirizzi kazako online gratuito che crea indirizzi con formato reale, numeri di identità, numeri di telefono, numeri di carte di credito e profili di identità completi. Supporta il filtraggio per regione, formati di esportazione JSON/CSV e funziona completamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di generazione',
    outputTitle: 'Risultati generati',
    generateBtn: 'Genera dati',
    loadSampleBtn: 'Carica esempio e genera',
    clearAll: 'Cancella tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima dati',
    
    // Filtraggio geografico
    locationTitle: 'Filtraggio geografico',
    selectRegion: 'Seleziona regione/autonomia',
    selectCity: 'Seleziona città',
    allRegions: 'Tutte le regioni/autonomie',
    allCities: 'Tutte le città',
    postalCodeLabel: 'Codice postale',
    
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
    
    // Carta d'identità
    idCardTitle: 'Carta d\'identità kazaka',
    idCardNumber: 'Numero di identità (ИИН)',
    
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
    regionLabel: 'Regione/Autonomia',
    
    // Formato indirizzo
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità commerciale)',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    buildingUnit: 'Unità',
    
    // Nomi delle regioni (regioni kazake)
    regions: {
        NUR: 'Astana (Nur-Sultan)',
        ALA: 'Almaty',
        SHY: 'Shymkent',
        AKM: 'Regione di Akmola',
        AKT: 'Regione di Aktobe',
        ATY: 'Regione di Atyrau',
        MAN: 'Regione di Mangystau',
        PAV: 'Regione di Pavlodar',
        SKZ: 'Regione del Kazakistan Meridionale',
        KUS: 'Regione di Kostanay',
        KAR: 'Regione di Karaganda',
        ZAP: 'Regione del Kazakistan Occidentale',
        MNG: 'Regione di Zhambyl',
        TUR: 'Regione di Almaty',
        YUZ: 'Regione di Kyzylorda',
        VOS: 'Regione del Kazakistan Orientale',
        ZHE: 'Regione di Zhezkazgan'
    },
    
    // Nomi delle città
    cities: {
        NUR: {
            nursultan: 'Astana'
        },
        ALA: {
            almaty: 'Almaty'
        },
        SHY: {
            shymkent: 'Shymkent'
        },
        AKM: {
            akmola: 'Akmola',
            kokshetau: 'Kokshetau'
        },
        AKT: {
            aktobe: 'Aktobe'
        },
        ATY: {
            atyrau: 'Atyrau'
        },
        MAN: {
            aktau: 'Aktau'
        },
        PAV: {
            pavlodar: 'Pavlodar'
        },
        SKZ: {
            turkestan: 'Turkestan'
        },
        KUS: {
            kostanay: 'Kostanay'
        },
        KAR: {
            karaganda: 'Karaganda'
        },
        ZAP: {
            uralsk: 'Uralsk'
        },
        MNG: {
            taraz: 'Taraz'
        },
        TUR: {
            taldykorgan: 'Taldykorgan'
        },
        YUZ: {
            kyzylorda: 'Kyzylorda'
        },
        VOS: {
            'ust-kamenogorsk': 'Ust-Kamenogorsk'
        },
        ZHE: {
            temirtau: 'Temirtau'
        }
    },
    
    // Nomi colonne CSV
    csv: {
        fullAddress: 'Indirizzo completo',
        street: 'Via',
        houseNumber: 'Numero civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
        region: 'Regione/Autonomia',
        postalCode: 'Codice postale',
        fullName: 'Nome completo',
        gender: 'Genere',
        age: 'Età',
        birthDate: 'Data di nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo carta',
        cardNumber: 'Numero carta',
        idCardNumber: 'Numero di identità'
    }
};