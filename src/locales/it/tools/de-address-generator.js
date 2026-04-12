export default {
    name: 'Generatore di Indirizzi Tedeschi - Genera Indirizzi Tedeschi Reali e Informazioni Identità Online',
    description: 'Generatore gratuito di indirizzi tedeschi online, genera indirizzi tedeschi in formato reale, numeri di identificazione, numeri di telefono, numeri di carta di credito e profili di identità completi. Supporta filtraggio per stato, esportazione JSON/CSV, funziona completamente nel frontend per proteggere la privacy.',
    inputTitle: 'Configurazione Generazione',
    outputTitle: 'Risultati Generazione',
    generateBtn: 'Genera Dati',
    loadSampleBtn: 'Carica Esempio e Genera',
    clearAll: 'Cancella Tutto',
    noOutput: 'Nessun risultato di generazione',
    preview: 'Anteprima Dati',
    
    // Filtraggio geografico
    locationTitle: 'Filtro Posizione Geografica',
    selectState: 'Seleziona Stato Federale',
    selectCity: 'Seleziona Città',
    allStates: 'Tutti gli Stati Federali',
    allCities: 'Tutte le Città',
    
    // Tipi di indirizzo
    addressTypeTitle: 'Tipo di Indirizzo',
    addressTypeResidential: 'Indirizzo Residenziale',
    addressTypeCommercial: 'Indirizzo Commerciale',
    addressTypePoBox: 'Casella Postale',
    addressTypeCampus: 'Campus Universitario',
    
    // Informazioni identità
    identityTitle: 'Informazioni Identità',
    fullName: 'Nome Completo',
    firstName: 'Nome',
    lastName: 'Cognome',
    gender: 'Sesso',
    genderMale: 'Maschio',
    genderFemale: 'Femmina',
    age: 'Età',
    birthDate: 'Data di Nascita',
    height: 'Altezza',
    weight: 'Peso',
    
    // Informazioni contatto
    contactTitle: 'Informazioni di Contatto',
    phoneNumber: 'Numero di Telefono',
    phoneType: 'Tipo di Telefono',
    phoneTypeMobile: 'Cellulare',
    phoneTypeLandline: 'Fisso',
    areaCode: 'Prefisso',
    email: 'Indirizzo Email',
    tempEmail: 'Email Temporanea',
    
    // Carta di credito
    creditCardTitle: 'Informazioni Carta di Credito',
    cardType: 'Tipo di Carta',
    cardNumber: 'Numero Carta',
    expiryDate: 'Data di Scadenza',
    cvv: 'CVV',
    bankBin: 'Codice BIN Bancario',
    
    // Carriera
    careerTitle: 'Profilo Carriera',
    jobTitle: 'Posizione',
    salary: 'Stipendio',
    companyName: 'Nome Azienda',
    companySize: 'Dimensione Azienda',
    industry: 'Settore',
    employmentStatus: 'Stato Occupazionale',
    
    // Carta d'identità
    idCardTitle: 'Carta d\'Identità Tedesca (Personalausweis)',
    idCardNumber: 'Numero Carta d\'Identità',
    
    // Impronta digitale
    fingerprintTitle: 'Impronta Digitale',
    os: 'Sistema Operativo',
    osVersion: 'Versione SO',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Risoluzione Schermo',
    timezone: 'Fuso Orario',
    guid: 'GUID',
    ipAddress: 'Indirizzo IP',
    macAddress: 'Indirizzo MAC',
    cookiePolicy: 'Policy Cookie',
    
    // Opzioni esportazione
    exportTitle: 'Formato Esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Vedi Dettagli',
    
    // Generazione batch
    batchTitle: 'Generazione Batch',
    quantityLabel: 'Quantità',
    quantityPlaceholder: 'Inserisci quantità (1-100)',
    
    // Messaggi
    generating: 'Generazione in corso...',
    generated: 'Generazione Completata',
    copySuccess: 'Copiato negli appunti',
    downloadSuccess: 'Download completato',
    invalidQuantity: 'Inserisci un numero tra 1-100',
    
    // Visualizzazione risultati
    resultCount: 'Generati {count} record',
    resultSummary: 'Riepilogo Risultati',
    showAll: 'Mostra Tutti',
    collapse: 'Comprimi',
    
    // Opzioni generazione
    generateOptionsTitle: 'Opzioni Generazione',
    
    // Visualizzazione record
    recordLabel: 'Record #{num}',
    addressLabel: 'Indirizzo',
    streetLabel: 'Via',
    houseNumberLabel: 'Numero Civico',
    postalCodeLabel: 'Codice Postale',
    cityLabel: 'Città',
    stateLabel: 'Stato Federale',
    
    // Formato indirizzo
    commercialArea: 'Area Commerciale',
    studentDormitory: 'Dormitorio Studenti',
    library: 'Biblioteca',
    
    // 16 stati federali tedeschi
    states: {
        BW: 'Baden-Württemberg',
        BY: 'Baviera',
        BE: 'Berlino',
        BB: 'Brandeburgo',
        HB: 'Brema',
        HH: 'Amburgo',
        HE: 'Assia',
        MV: 'Meclemburgo-Pomerania Anteriore',
        NI: 'Bassa Sassonia',
        NW: 'Renania Settentrionale-Vestfalia',
        RP: 'Renania-Palatinato',
        SL: 'Saarland',
        SN: 'Sassonia',
        ST: 'Sassonia-Anhalt',
        SH: 'Schleswig-Holstein',
        TH: 'Turingia'
    },
    
    // Nomi università
    universities: {
        TUM: 'Università Tecnica di Monaco',
        LMU: 'Università Ludwig Maximilian di Monaco',
        HU: 'Università Humboldt di Berlino',
        TU: 'Università Tecnica di Berlino',
        UniHeidelberg: 'Università di Heidelberg'
    },
    
    // Nomi colonne CSV
    csv: {
        fullAddress: 'Indirizzo Completo',
        street: 'Via',
        houseNumber: 'Numero Civico',
        postalCode: 'Codice Postale',
        city: 'Città',
        state: 'Stato Federale',
        fullName: 'Nome',
        gender: 'Sesso',
        age: 'Età',
        birthDate: 'Data di Nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo Carta',
        cardNumber: 'Numero Carta',
        idCardNumber: 'Numero Documento'
    }
};
