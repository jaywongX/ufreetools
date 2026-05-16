export default {
    name: 'Generatore di indirizzi Messico - Genera indirizzi messicani reali, informazioni di identità e contatti online',
    description: 'Generatore di indirizzi messicano online gratuito che crea indirizzi con formato reale, numeri di identità RFC/CURP, numeri di telefono, numeri di carte di credito e profili di identità completi. Supporta il filtraggio per stato, formati di esportazione JSON/CSV e funziona completamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di generazione',
    outputTitle: 'Risultati generati',
    generateBtn: 'Genera dati',
    loadSampleBtn: 'Carica esempio e genera',
    clearAll: 'Cancella tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima dati',
    
    // Filtraggio geografico
    locationTitle: 'Filtraggio geografico',
    selectState: 'Seleziona stato',
    selectCity: 'Seleziona città',
    allStates: 'Tutti gli stati',
    allCities: 'Tutte le città',
    
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
    idCardTitle: 'Carta d\'identità messicana',
    rfcLabel: 'RFC (Registro Federal de Contribuyentes)',
    curpLabel: 'CURP (Clave Única de Registro de Población)',
    
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
    neighborhoodLabel: 'Quartiere',
    postalCodeLabel: 'Codice postale',
    cityLabel: 'Città',
    stateLabel: 'Stato',
    
    // Formato indirizzo
    commercialAddress: '(Indirizzo commerciale)',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    
    // 32 stati del Messico
    states: {
        AGS: 'Aguascalientes',
        BCN: 'Baja California',
        BCS: 'Baja California Sur',
        CAMP: 'Campeche',
        COAH: 'Coahuila',
        COL: 'Colima',
        CHIS: 'Chiapas',
        CHIH: 'Chihuahua',
        CDMX: 'Città del Messico',
        DUR: 'Durango',
        GTO: 'Guanajuato',
        GRO: 'Guerrero',
        HGO: 'Hidalgo',
        JAL: 'Jalisco',
        MEX: 'Stato del Messico',
        MIC: 'Michoacán',
        MOR: 'Morelos',
        NAY: 'Nayarit',
        NLE: 'Nuevo León',
        OAX: 'Oaxaca',
        PUE: 'Puebla',
        QRO: 'Querétaro',
        QROO: 'Quintana Roo',
        SLP: 'San Luis Potosí',
        SIN: 'Sinaloa',
        SON: 'Sonora',
        TAB: 'Tabasco',
        TAM: 'Tamaulipas',
        TLAX: 'Tlaxcala',
        VER: 'Veracruz',
        YUC: 'Yucatán',
        ZAC: 'Zacatecas'
    },
    
    // Nomi delle università
    universities: {
        UNAM: 'Universidad Nacional Autónoma de México',
        IPN: 'Instituto Politécnico Nacional',
        UdeG: 'Universidad de Guadalajara',
        UANL: 'Universidad Autónoma de Nuevo León'
    },
    
    // Nomi colonne CSV
    csv: {
        fullAddress: 'Indirizzo completo',
        street: 'Via',
        houseNumber: 'Numero civico',
        neighborhood: 'Quartiere',
        postalCode: 'Codice postale',
        city: 'Città',
        state: 'Stato',
        fullName: 'Nome completo',
        gender: 'Genere',
        age: 'Età',
        birthDate: 'Data di nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo carta',
        cardNumber: 'Numero carta',
        rfc: 'RFC',
        curp: 'CURP'
    }
};