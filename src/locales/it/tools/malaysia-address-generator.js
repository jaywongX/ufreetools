export default {
    name: 'Generatore di Indirizzi Malesia - Genera Indirizzi Malesi Reali, Informazioni d\'Identità e Dettagli di Contatto Online',
    description: 'Generatore di indirizzi malesi gratuito online che crea indirizzi malesi in formato reale, numeri MyKad, numeri di telefono, numeri di carta di credito e profili d\'identità completi. Supporta il filtraggio per stati, i formati di esportazione JSON/CSV e funziona interamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di Generazione',
    outputTitle: 'Risultati Generati',
    generateBtn: 'Genera Dati',
    loadSampleBtn: 'Carica Esempio e Genera',
    clearAll: 'Cancella Tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima Dati',
    
    // Filtro Geografico
    locationTitle: 'Filtro Geografico',
    selectRegion: 'Seleziona Stato',
    allRegions: 'Tutti gli Stati',
    postalCodeLabel: 'Codice Postale',
    validatePostalCode: 'Valida Codice Postale',
    
    // Tipi di Indirizzo
    addressTypeTitle: 'Tipo di Indirizzo',
    addressTypeResidential: 'Indirizzo Residenziale',
    addressTypeCommercial: 'Indirizzo Commerciale',
    addressTypeVirtual: 'Casella Postale Virtuale',
    addressTypeCampus: 'Campus Universitario',
    
    // Informazioni d\'Identità
    identityTitle: 'Informazioni d\'Identità',
    fullName: 'Nome Completo',
    gender: 'Genere',
    genderMale: 'Maschile',
    genderFemale: 'Femminile',
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
    phoneTypeLandline: 'Fisso',
    areaCode: 'Codice Area',
    email: 'Indirizzo Email',
    tempEmail: 'Email Temporanea',
    
    // Carta di Credito
    creditCardTitle: 'Informazioni Carta di Credito',
    cardType: 'Tipo Carta',
    cardNumber: 'Numero Carta',
    expiryDate: 'Data di Scadenza',
    cvv: 'CVV',
    bankBin: 'BIN Bancario',
    
    // Carriera
    careerTitle: 'Profilo Professionale',
    jobTitle: 'Posizione',
    salary: 'Stipendio',
    companyName: 'Nome Azienda',
    companySize: 'Dimensione Azienda',
    industry: 'Settore',
    employmentStatus: 'Stato Occupazionale',
    employmentFullTime: 'Tempo Pieno',
    employmentPartTime: 'Part-Time',
    
    // Carta d\'Identità
    idCardTitle: 'Carta d\'Identità Malesiana',
    idCardNumber: 'Numero Carta d\'Identità',
    mykadNumber: 'Numero MyKad',
    
    // Impronta Digitale
    fingerprintTitle: 'Impronta Digitale',
    os: 'Sistema Operativo',
    osVersion: 'Versione OS',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Risoluzione Schermo',
    timezone: 'Fuso Orario',
    guid: 'GUID',
    ipAddress: 'Indirizzo IP',
    macAddress: 'Indirizzo MAC',
    cookiePolicy: 'Politica Cookie',
    
    // Opzioni di Esportazione
    exportTitle: 'Formato di Esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
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
    invalidQuantity: 'Inserisci un numero tra 1 e 100',
    
    // Visualizzazione Risultati
    resultCount: '{count} record generati',
    resultSummary: 'Riepilogo Risultati',
    showAll: 'Mostra Tutto',
    collapse: 'Comprimi',
    
    // Opzioni di Generazione
    generateOptionsTitle: 'Opzioni di Generazione',
    
    // Visualizzazione Record
    recordLabel: 'Record #{num}',
    addressLabel: 'Indirizzo',
    streetLabel: 'Via',
    houseNumberLabel: 'Numero Civico',
    buildingLabel: 'Edificio',
    floorLabel: 'Piano',
    unitLabel: 'Unità',
    regionLabel: 'Stato',
    postalCode: 'Codice Postale',
    
    // Formato Indirizzo
    addressNumber: 'N.',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità Commerciale)',
    malaysia: 'Malesia',
    postOfficeBox: 'Casella Postale',
    studentDormitory: 'Residenza Studenti',
    teachingBuilding: 'Edificio Didattico',
    library: 'Biblioteca',
    buildingUnit: 'Blocco',
    apartment: 'Appartamento',
    
    // Nomi degli Stati (13 stati + 3 territori federali)
    regions: {
        'Johor': 'Johor',
        'Kedah': 'Kedah',
        'Kelantan': 'Kelantan',
        'Malacca': 'Malacca',
        'Negeri Sembilan': 'Negeri Sembilan',
        'Pahang': 'Pahang',
        'Penang': 'Penang',
        'Perak': 'Perak',
        'Perlis': 'Perlis',
        'Sabah': 'Sabah',
        'Sarawak': 'Sarawak',
        'Selangor': 'Selangor',
        'Terengganu': 'Terengganu',
        'Kuala Lumpur': 'Kuala Lumpur',
        'Putrajaya': 'Putrajaya',
        'Labuan': 'Labuan'
    },
    
    // Nomi delle Università
    universities: {
        'UM': 'Università di Malaya',
        'UKM': 'Universiti Kebangsaan Malaysia',
        'UPM': 'Universiti Putra Malaysia',
        'USM': 'Universiti Sains Malaysia',
        'UTM': 'Universiti Teknologi Malaysia',
        'UUM': 'Universiti Utara Malaysia',
        'UMS': 'Universiti Malaysia Sabah',
        'UMK': 'Universiti Malaysia Kelantan',
        'UPSI': 'Universiti Pendidikan Sultan Idris'
    },
    
    // Nomi Colonne CSV
    csv: {
        fullAddress: 'Indirizzo Completo',
        street: 'Via',
        houseNumber: 'Numero Civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
        region: 'Stato',
        postalCode: 'Codice Postale',
        fullName: 'Nome Completo',
        gender: 'Genere',
        age: 'Età',
        birthDate: 'Data di Nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo Carta',
        cardNumber: 'Numero Carta',
        idCardNumber: 'Numero Carta d\'Identità'
    }
};