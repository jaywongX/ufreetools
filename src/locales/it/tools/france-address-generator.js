export default {
    name: 'Generatore di indirizzi Francia - Genera indirizzi francesi reali, informazioni di identità e contatti online',
    description: 'Generatore di indirizzi francese online gratuito che crea indirizzi francesi con formato reale, numeri di identità, numeri di telefono, numeri di carte di credito e profili di identità completi. Supporta il filtraggio per dipartimento, formati di esportazione JSON/CSV e funziona completamente nel browser per la protezione della privacy.',
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
    selectDepartment: 'Seleziona dipartimento',
    allRegions: 'Tutte le regioni',
    allDepartments: 'Tutti i dipartimenti',
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
    idCardTitle: 'Carta d\'identità francese',
    idCardNumber: 'Numero carta d\'identità',
    nirNumber: 'Numero NIR',
    serialNumber: 'Numero di serie',
    checkKey: 'Chiave di controllo',
    
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
    departmentLabel: 'Dipartimento',
    regionLabel: 'Regione',
    postalCode: 'Codice postale',
    
    // Formato indirizzo
    addressNumber: 'N°',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità commerciale)',
    france: 'Francia',
    postOfficeBox: 'Casella postale',
    studentDormitory: 'Residenza studenti',
    teachingBuilding: 'Edificio didattico',
    library: 'Biblioteca',
    buildingUnit: 'Unità',
    apartment: 'Appartamento',
    
    // Messaggi di allerta
    idCardImageAlert: 'La generazione di immagine carta d\'identità richiede implementazione canvas',
    businessCardAlert: 'La generazione di biglietti da visita richiede implementazione canvas',
    
    // Nomi delle regioni (regioni francesi)
    regions: {
        IDF: 'Île-de-France',
        ARA: 'Alvernia-Rodano-Alpi',
        OCC: 'Occitania',
        NAQ: 'Nuova Aquitania',
        PAC: 'Provenza-Alpi-Costa Azzurra',
        HDF: 'Alta Francia',
        BFC: 'Borgogna-Franca Contea',
        NAC: 'Paesi della Loira',
        PDL: 'Paesi della Loira',
        BRE: 'Bretagna',
        NOR: 'Normandia',
        GUA: 'Guadalupa',
        MQ: 'Martinica',
        GUY: 'Guyana francese',
        REU: 'La Riunione',
        COR: 'Corsica',
        ALO: 'Alsazia-Lorena',
        MP: 'Metz-Pomerania'
    },
    
    // Dati dei dipartimenti (esempio della regione Île-de-France)
    departmentsData: {
        IDF: {
            paris: 'Parigi',
            hautsDeSeine: 'Alta Senna',
            seineSaintDenis: 'Senna-Saint-Denis',
            valDeMarne: 'Valle della Marna',
            yvelines: 'Yvelines',
            essonne: 'Essonne',
            valDOise: 'Valle dell\'Oise',
            seineEtMarne: 'Senna e Marna'
        },
        ARA: {
            rhone: 'Rodano',
            loire: 'Loira',
            isere: 'Isère',
            ain: 'Ain',
            savoie: 'Savoia',
            hauteSavoie: 'Alta Savoia',
            allier: 'Allier',
            puyDeDome: 'Puy-de-Dôme'
        },
        OCC: {
            herault: 'Hérault',
            gard: 'Gard',
            aude: 'Aude',
            pyreneesOrientales: 'Pirenei Orientali',
            tarn: 'Tarn',
            hauteGaronne: 'Alta Garonna',
            gers: 'Gers',
            lotEtGaronne: 'Lot e Garonna'
        },
        NAQ: {
            gironde: 'Gironda',
            charenteMaritime: 'Charente Marittima',
            dordogne: 'Dordogna',
            landes: 'Landes',
            vienne: 'Vienne',
            hauteVienne: 'Alta Vienne',
            charente: 'Charente',
            correze: 'Corrèze'
        },
        PAC: {
            bouchesDuRhone: 'Bocche del Rodano',
            alpesMaritimes: 'Alpi Marittime',
            var: 'Var',
            vaucluse: 'Vaucluse',
            alpesDeHauteProvence: 'Alpi di Alta Provenza',
            hautesAlpes: 'Alte Alpi'
        },
        HDF: {
            nord: 'Nord',
            pasDeCalais: 'Passo di Calais',
            somme: 'Somme',
            aisne: 'Aisne',
            oise: 'Oise',
            aisne: 'Aisne'
        }
    },
    
    // Nomi delle università
    universities: {
        UP1: 'Università di Parigi 1 Panthéon-Sorbonne',
        UP2: 'Università di Parigi 2 Panthéon-Assas',
        UP3: 'Università di Parigi 3 Sorbona Nuova',
        UP4: 'Università di Parigi 1 Panthéon-Sorbonne',
        UP5: 'Università di Parigi Descartes',
        UP6: 'Università Pierre e Marie Curie',
        UP7: 'Università di Parigi Diderot',
        UP8: 'Università di Parigi 8 Vincennes-Saint-Denis',
        UP9: 'Università di Parigi Dauphine',
        UP10: 'Università di Parigi Nanterre',
        UP11: 'Università di Parigi-Saclay',
        UP12: 'Università di Parigi-Est Créteil',
        UP13: 'Università Sorbona Parigi Nord',
        ENS: 'École normale supérieure',
        X: 'École polytechnique'
    },
    
    // Nomi colonne CSV
    csv: {
        fullAddress: 'Indirizzo completo',
        street: 'Via',
        houseNumber: 'Numero civico',
        building: 'Edificio',
        floor: 'Piano',
        unit: 'Unità',
        department: 'Dipartimento',
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