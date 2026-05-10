export default {
    name: 'Generatore di indirizzi Paesi Bassi - Genera indirizzi olandesi reali, informazioni di identità e contatti online',
    description: 'Generatore di indirizzi olandese online gratuito che crea indirizzi olandesi con formato reale, numeri di identità, numeri di telefono, numeri di carte di credito e profili di identità completi. Supporta il filtraggio per provincia, formati di esportazione JSON/CSV e funziona completamente nel browser per la protezione della privacy.',
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
    idCardTitle: 'Carta d\'identità olandese',
    idCardNumber: 'Numero carta d\'identità',
    bsnNumber: 'Numero BSN',
    
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
    regionLabel: 'Provincia',
    postalCode: 'Codice postale',
    
    // Formato indirizzo
    addressNumber: 'N°',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità commerciale)',
    netherlands: 'Paesi Bassi',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    buildingUnit: 'Unità',
    apartment: 'Appartamento',
    
    // Nomi delle province (province olandesi)
    regions: {
        'Noord-Holland': 'Olanda Settentrionale',
        'Zuid-Holland': 'Olanda Meridionale',
        'Utrecht': 'Utrecht',
        'Gelderland': 'Gheldria',
        'Overijssel': 'Overijssel',
        'Flevoland': 'Flevoland',
        'Friesland': 'Frisia',
        'Drenthе': 'Drenthe',
        'Groningen': 'Groninga',
        'Limburg': 'Limburgo',
        'Noord-Brabant': 'Brabante Settentrionale',
        'Zeeland': 'Zelanda'
    },
    
    // Nomi delle università
    universities: {
        'UvA': 'Università di Amsterdam',
        'VU': 'Università Libera di Amsterdam',
        'TU': 'Università Tecnologica di Delft',
        'UU': 'Università di Utrecht',
        'EUR': 'Università Erasmus di Rotterdam',
        'RUG': 'Università di Groninga',
        'WUR': 'Università di Wageningen',
        'UL': 'Università di Leida',
        'RU': 'Università Radboud',
        'UM': 'Università di Maastricht'
    },
    
    // Nomi colonne CSV
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
        cardType: 'Tipo carta',
        cardNumber: 'Numero carta',
        idCardNumber: 'Numero carta d\'identità'
    }
};