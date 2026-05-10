export default {
    name: 'Generatore di indirizzi Thailandia - Genera indirizzi thailandesi reali, informazioni sull\'identità e dettagli di contatto online',
    description: 'Generatore di indirizzi thailandesi online gratuito che crea indirizzi thailandesi in formato reale, numeri di identità, numeri di telefono, numeri di carta di credito e profili di identità completi. Supporta il filtraggio per provincia, formati di esportazione JSON/CSV e funziona completamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di generazione',
    outputTitle: 'Risultati generati',
    generateBtn: 'Genera dati',
    loadSampleBtn: 'Carica esempio e genera',
    clearAll: 'Cancella tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima dati',
    
    // Filtraggio geografico
    locationTitle: 'Filtraggio geografico',
    selectRegion: 'Seleziona provincia',
    allRegions: 'Tutte le province',
    postalCodeLabel: 'Codice postale',
    validatePostalCode: 'Valida codice postale',
    
    // Tipi di indirizzo
    addressTypeTitle: 'Tipo di indirizzo',
    addressTypeResidential: 'Indirizzo residenziale',
    addressTypeCommercial: 'Indirizzo commerciale',
    addressTypeVirtual: 'Casella postale virtuale',
    addressTypeCampus: 'Campus universitario',
    
    // Informazioni sull\'identità
    identityTitle: 'Informazioni sull\'identità',
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
    phoneTypeMobile: 'Cellulare',
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
    industry: 'Settore',
    employmentStatus: 'Stato occupazionale',
    employmentFullTime: 'Tempo pieno',
    employmentPartTime: 'Part-time',
    
    // Carta d\'identità
    idCardTitle: 'Carta d\'identità thailandese',
    idCardNumber: 'Numero carta d\'identità',
    
    // Impronta digitale
    fingerprintTitle: 'Impronta digitale',
    os: 'Sistema operativo',
    osVersion: 'Versione OS',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Risoluzione schermo',
    timezone: 'Fuso orario',
    guid: 'GUID',
    ipAddress: 'Indirizzo IP',
    macAddress: 'Indirizzo MAC',
    cookiePolicy: 'Politica dei cookie',
    
    // Opzioni di esportazione
    exportTitle: 'Formato di esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Vedi dettagli',
    
    // Generazione in blocco
    batchTitle: 'Generazione in blocco',
    quantityLabel: 'Quantità',
    quantityPlaceholder: 'Inserisci quantità (1-100)',
    
    // Messaggi di notifica
    generating: 'Generazione...',
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
    regionLabel: 'Provincia',
    postalCode: 'Codice postale',
    
    // Formato indirizzo
    addressNumber: 'N°',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità commerciale)',
    thailand: 'Thailandia',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    buildingUnit: 'Edificio',
    apartment: 'Appartamento',
    
    // Nomi delle province (province thailandesi)
    regions: {
        'Bangkok': 'Bangkok',
        'Chiang Mai': 'Chiang Mai',
        'Phuket': 'Phuket',
        'Pattaya': 'Pattaya',
        'Nonthaburi': 'Nonthaburi',
        'Pathum Thani': 'Pathum Thani',
        'Samut Prakan': 'Samut Prakan',
        'Nakhon Ratchasima': 'Nakhon Ratchasima',
        'Chiang Rai': 'Chiang Rai',
        'Khon Kaen': 'Khon Kaen',
        'Nakhon Si Thammarat': 'Nakhon Si Thammarat',
        'Surat Thani': 'Surat Thani',
        'Udon Thani': 'Udon Thani',
        'Rayong': 'Rayong',
        'Lampang': 'Lampang',
        'Nakhon Pathom': 'Nakhon Pathom',
        'Ayutthaya': 'Ayutthaya',
        'Chanthaburi': 'Chanthaburi',
        'Trat': 'Trat',
        'Kanchanaburi': 'Kanchanaburi'
    },
    
    // Nomi delle università
    universities: {
        'CU': 'Università Chulalongkorn',
        'TU': 'Università Mahidol',
        'KU': 'Università Kasetsart',
        'TU': 'Università Thammasat',
        'KMUTT': 'Università di tecnologia King Mongkut Thonburi',
        'KMUTNB': 'Università di tecnologia King Mongkut Bangkok Settentrionale',
        'SIIT': 'Istituto internazionale Sirindhorn di tecnologia',
        'AIT': 'Istituto asiatico di tecnologia',
        'ABAC': 'Università Assumption'
    },
    
    // Nomi delle colonne CSV
    csv: {
        fullAddress: 'Indirizzo completo',
        street: 'Via',
        houseNumber: 'Numero civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
        region: 'Provincia',
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