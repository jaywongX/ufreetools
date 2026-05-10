export default {
    name: 'Generatore di indirizzi Italia - Genera indirizzi italiani reali, informazioni d\'identità e dati di contatto online',
    description: 'Generatore di indirizzi Italia gratuito online che crea indirizzi italiani in formato reale, numeri Codice Fiscale, numeri di telefono, numeri di carta di credito e profili d\'identità completi. Supporta il filtraggio per regione, formati di esportazione JSON/CSV e funziona interamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di generazione',
    outputTitle: 'Risultati generati',
    generateBtn: 'Genera dati',
    loadSampleBtn: 'Carica esempio e genera',
    clearAll: 'Cancella tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima dati',
    
    // Filtro geografico
    locationTitle: 'Filtro geografico',
    selectRegion: 'Seleziona regione',
    allRegions: 'Tutte le regioni',
    postalCodeLabel: 'Codice postale',
    validatePostalCode: 'Valida codice postale',
    
    // Tipi di indirizzo
    addressTypeTitle: 'Tipo di indirizzo',
    addressTypeResidential: 'Indirizzo residenziale',
    addressTypeCommercial: 'Indirizzo commerciale',
    addressTypeVirtual: 'Casella postale virtuale',
    addressTypeCampus: 'Campus universitario',
    
    // Informazioni d\'identità
    identityTitle: 'Informazioni d\'identità',
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
    jobTitle: 'Posizione',
    salary: 'Stipendio',
    companyName: 'Nome azienda',
    companySize: 'Dimensione azienda',
    industry: 'Settore',
    employmentStatus: 'Stato occupazionale',
    employmentFullTime: 'Tempo pieno',
    employmentPartTime: 'Part-time',
    
    // Carta d\'identità
    idCardTitle: 'Carta d\'identità italiana',
    idCardNumber: 'Numero carta d\'identità',
    codiceFiscale: 'Codice Fiscale',
    
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
    cookiePolicy: 'Politica cookie',
    
    // Opzioni di esportazione
    exportTitle: 'Formato di esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
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
    regionLabel: 'Regione',
    postalCode: 'Codice postale',
    
    // Formato indirizzo
    addressNumber: 'n.',
    addressFloor: 'piano',
    addressUnit: 'int.',
    commercialUnit: '(Unità commerciale)',
    italy: 'Italia',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    buildingUnit: 'Edificio',
    apartment: 'Appartamento',
    
    // Nomi delle regioni (regioni italiane)
    regions: {
        'Lombardia': 'Lombardia',
        'Lazio': 'Lazio',
        'Campania': 'Campania',
        'Sicilia': 'Sicilia',
        'Veneto': 'Veneto',
        'Emilia-Romagna': 'Emilia-Romagna',
        'Piemonte': 'Piemonte',
        'Toscana': 'Toscana',
        'Puglia': 'Puglia',
        'Calabria': 'Calabria',
        'Sardegna': 'Sardegna',
        'Friuli Venezia Giulia': 'Friuli Venezia Giulia',
        'Liguria': 'Liguria',
        'Marche': 'Marche',
        'Abruzzo': 'Abruzzo',
        'Molise': 'Molise',
        'Basilicata': 'Basilicata',
        'Umbria': 'Umbria',
        "Valle d'Aosta": "Valle d'Aosta",
        'Trentino-Alto Adige': 'Trentino-Alto Adige'
    },
    
    // Nomi delle università
    universities: {
        'Politecnico di Milano': 'Politecnico di Milano',
        'Sapienza': 'Università degli Studi di Roma La Sapienza',
        'Bocconi': 'Università Bocconi',
        'Politecnico di Torino': 'Politecnico di Torino',
        'UniMI': 'Università degli Studi di Milano',
        'UniFI': 'Università degli Studi di Firenze',
        'UniBO': 'Università di Bologna',
        'UniPd': 'Università degli Studi di Padova',
        'UniNa': 'Università degli Studi di Napoli Federico II',
        'UniTo': 'Università degli Studi di Torino'
    },
    
    // Nomi colonne CSV
    csv: {
        fullAddress: 'Indirizzo completo',
        street: 'Via',
        houseNumber: 'Numero civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
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