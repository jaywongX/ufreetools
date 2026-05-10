export default {
    name: 'Generatore di Indirizzi Turchi - Genera indirizzi turchi reali, informazioni di identità e dettagli di contatto online',
    description: 'Generatore gratuito online di indirizzi turchi che crea indirizzi turchi in formato reale, numeri di identificazione, numeri di telefono, numeri di carta di credito e profili di identità completi. Supporta il filtraggio per provincia, i formati di esportazione JSON/CSV e funziona interamente nel browser per la protezione della privacy.',
    inputTitle: 'Impostazioni di Generazione',
    outputTitle: 'Risultati Generati',
    generateBtn: 'Genera Dati',
    loadSampleBtn: 'Carica Esempio e Genera',
    clearAll: 'Cancella Tutto',
    noOutput: 'Nessun risultato generato ancora',
    preview: 'Anteprima Dati',
    
    // Filtraggio Geografico
    locationTitle: 'Filtraggio Geografico',
    selectProvince: 'Seleziona Provincia',
    selectDistrict: 'Seleziona Distretto',
    allProvinces: 'Tutte le Province',
    allDistricts: 'Tutti i Distretti',
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
    cardType: 'Tipo di Carta',
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
    industry: 'Industria',
    employmentStatus: 'Stato Occupazionale',
    employmentFullTime: 'Tempo Pieno',
    employmentPartTime: 'Part-Time',
    
    // Carta d\'Identità
    idCardTitle: 'Carta d\'Identità Turca',
    idCardNumber: 'Numero Carta d\'Identità',
    nationalId: 'Numero Identificazione Nazionale',
    serialNumber: 'Numero di Serie',
    checkDigit: 'Cifra di Controllo',
    
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
    exportIdCard: 'Genera Immagine Carta d\'Identità',
    exportBusinessCard: 'Genera Carta da Visita',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Visualizza Dettagli',
    
    // Generazione in Lotti
    batchTitle: 'Generazione in Lotti',
    quantityLabel: 'Quantità',
    quantityPlaceholder: 'Inserisci quantità (1-100)',
    
    // Messaggi di Notifica
    generating: 'Generazione...',
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
    districtLabel: 'Distretto',
    provinceLabel: 'Provincia',
    postalCode: 'Codice Postale',
    
    // Formato Indirizzo
    addressNumber: 'N°',
    addressFloor: 'Piano',
    addressUnit: 'Unità',
    commercialUnit: '(Unità Commerciale)',
    turkey: 'Turchia',
    postOfficeBox: 'Casella Postale',
    studentDormitory: 'Residenza Studenti',
    teachingBuilding: 'Edificio Didattico',
    library: 'Biblioteca',
    buildingUnit: 'Edificio',
    apartment: 'Appartamento',
    
    // Messaggi di Allerta
    idCardImageAlert: 'La generazione di immagine carta d\'identità richiede implementazione canvas',
    businessCardAlert: 'La generazione di carta da visita richiede implementazione canvas',
    
    // Nomi delle Province (Principali province turche)
    provinces: {
        IST: 'Istanbul',
        ANK: 'Ankara',
        IZM: 'Izmir',
        BUR: 'Bursa',
        ANT: 'Antalya',
        ADN: 'Adana',
        GAZ: 'Gaziantep',
        KON: 'Konya',
        MRA: 'Mersin',
        KAY: 'Kayseri',
        ESK: 'Eskisehir',
        TRA: 'Trabzon',
        SAM: 'Samsun',
        MAL: 'Malatya',
        DIA: 'Diyarbakir',
        ERZ: 'Erzurum',
        VAN: 'Van',
        SIV: 'Sivas',
        TOK: 'Tokat',
        COR: 'Corum'
    },
    
    // Nomi dei Distretti (Esempio Istanbul)
    districtsData: {
        IST: {
            beyoglu: 'Beyoglu',
            fatih: 'Fatih',
            kadikoy: 'Kadikoy',
            besiktas: 'Besiktas',
            sisli: 'Sisli',
            uskudar: 'Uskudar',
            bakirkoy: 'Bakirkoy',
            zeytinburnu: 'Zeytinburnu',
            beylikduzu: 'Beylikduzu',
            pendik: 'Pendik',
            maltepe: 'Maltepe',
            kartal: 'Kartal',
            tuzla: 'Tuzla',
            catalca: 'Catalca'
        },
        ANK: {
            cankaya: 'Cankaya',
            yenimahalle: 'Yenimahalle',
            altindag: 'Altindag',
            pursaklar: 'Pursaklar',
            eryaman: 'Eryaman',
            etimesgut: 'Etimesgut',
            sincan: 'Sincan'
        },
        IZM: {
            konak: 'Konak',
            karsiyaka: 'Karsiyaka',
            bornova: 'Bornova',
            cigli: 'Cigli',
            bayrakli: 'Bayrakli',
            balcova: 'Balcova',
            guzelbahce: 'Guzelbahce'
        },
        BUR: {
            nilufer: 'Nilufer',
            osmangazi: 'Osmangazi',
            yildirim: 'Yildirim',
            mudanya: 'Mudanya',
            gemlik: 'Gemlik'
        },
        ANT: {
            muratpasa: 'Muratpasa',
            kepez: 'Kepez',
            konyaalti: 'Konyaalti',
            aksu: 'Aksu',
            dosenmeadi: 'Dosenmeadi'
        }
    },
    
    // Nomi delle Università
    universities: {
        ITU: 'Politecnico di Istanbul',
        ITU: 'Università di Istanbul',
        BOUN: 'Università del Bosforo',
        METU: 'Politecnico del Medio Oriente',
        HU: 'Università Hacettepe',
        ANU: 'Università di Ankara',
        DEU: 'Università Dokuz Eylul'
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
        province: 'Provincia',
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