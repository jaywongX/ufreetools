export default {
    name: 'Generatore di Indirizzi UK - Genera indirizzi UK reali, informazioni di identità e contatti online',
    description: 'Generatore gratuito di indirizzi UK online. Genera indirizzi britannici in formato reale, numeri di assicurazione nazionale (NINO), telefoni, numeri di carte di credito e profili di identità completi. Filtra per contea, esporta in JSON/CSV, elaborazione frontend pura per la privacy.',
    inputTitle: 'Configurazione Generazione',
    outputTitle: 'Risultati',
    generateBtn: 'Genera Dati',
    loadSampleBtn: 'Carica Esempio e Genera',
    clearAll: 'Cancella Tutto',
    noOutput: 'Nessun risultato',
    preview: 'Anteprima',
    
    locationTitle: 'Filtro Geografico',
    selectCounty: 'Seleziona Contea',
    selectCity: 'Seleziona Città',
    allCounties: 'Tutte le Contee',
    allCities: 'Tutte le Città',
    postcodeLabel: 'Codice Postale',
    validatePostcode: 'Valida Codice Postale',
    
    addressTypeTitle: 'Tipo di Indirizzo',
    addressTypeResidential: 'Indirizzo Residenziale',
    addressTypeCommercial: 'Indirizzo Commerciale',
    addressTypePoBox: 'Casella Postale',
    addressTypeCampus: 'Campus Universitario',
    
    identityTitle: 'Informazioni Identità',
    fullName: 'Nome Completo',
    gender: 'Genere',
    genderMale: 'Maschio',
    genderFemale: 'Femmina',
    age: 'Età',
    birthDate: 'Data di Nascita',
    zodiac: 'Segno Zodiacale',
    height: 'Altezza',
    weight: 'Peso',
    
    contactTitle: 'Informazioni Contatto',
    phoneNumber: 'Numero di Telefono',
    phoneType: 'Tipo di Telefono',
    phoneTypeMobile: 'Cellulare',
    phoneTypeLandline: 'Fisso',
    areaCode: 'Prefisso',
    email: 'Indirizzo Email',
    tempEmail: 'Email Temporanea',
    
    creditCardTitle: 'Informazioni Carta di Credito',
    cardType: 'Tipo di Carta',
    cardNumber: 'Numero Carta',
    expiryDate: 'Data di Scadenza',
    cvv: 'CVV',
    bankBin: 'Codice BIN Bancario',
    
    careerTitle: 'Profilo Professionale',
    jobTitle: 'Titolo di Lavoro',
    salary: 'Stipendio',
    companyName: 'Nome Azienda',
    companySize: 'Dimensione Azienda',
    industry: 'Industria',
    employmentStatus: 'Stato Occupazionale',
    employmentFullTime: 'Tempo Pieno',
    employmentPartTime: 'Part-time',
    
    idCardTitle: 'Numero di Assicurazione Nazionale (NINO)',
    idCardNumber: 'Numero di Assicurazione Nazionale',
    prefixLetter: 'Lettera Prefisso',
    serialNumber: 'Numero Seriale',
    suffixLetter: 'Lettera Suffisso',
    
    fingerprintTitle: 'Impronta Digitale',
    os: 'Sistema Operativo',
    osVersion: 'Versione Sistema',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Risoluzione Schermo',
    timezone: 'Fuso Orario',
    guid: 'GUID',
    ipAddress: 'Indirizzo IP',
    macAddress: 'Indirizzo MAC',
    cookiePolicy: 'Policy Cookie',
    
    exportTitle: 'Formato Esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Vedi Dettagli',
    
    batchTitle: 'Generazione Batch',
    quantityLabel: 'Quantità da Generare',
    quantityPlaceholder: 'Inserisci quantità (1-100)',
    
    generating: 'Generazione in corso...',
    generated: 'Generazione Completata',
    copySuccess: 'Copiato negli appunti',
    downloadSuccess: 'Download riuscito',
    invalidQuantity: 'Inserisci un numero tra 1-100',
    
    resultCount: 'Totale {count} record generati',
    resultSummary: 'Riepilogo Risultati',
    showAll: 'Mostra Tutto',
    collapse: 'Comprimi',
    
    generateOptionsTitle: 'Opzioni di Generazione',
    
    recordLabel: 'Record #{num}',
    addressLabel: 'Indirizzo',
    streetLabel: 'Via',
    houseNumberLabel: 'Numero Civico',
    buildingLabel: 'Edificio',
    cityLabel: 'Città',
    countyLabel: 'Contea',
    
    counties: {
        LND: 'Greater London',
        GRM: 'Greater Manchester',
        MAN: 'Manchester',
        BIR: 'West Midlands',
        LEE: 'West Yorkshire',
        SHE: 'South Yorkshire',
        LIV: 'Merseyside',
        BRS: 'Bristol',
        NEW: 'Tyne and Wear',
        NOT: 'Nottinghamshire',
        EDB: 'Edimburgo',
        GLA: 'Glasgow',
        CDF: 'Cardiff',
        BEL: 'Belfast',
        SOU: 'Southampton',
        POR: 'Plymouth',
        BRI: 'Brighton',
        CAM: 'Cambridgeshire'
    },
    
    cities: {
        LND: {
            westminster: 'Westminster',
            kensington: 'Kensington',
            chelsea: 'Chelsea',
            camden: 'Camden',
            islington: 'Islington',
            hackney: 'Hackney',
            towerHamlets: 'Tower Hamlets',
            greenwich: 'Greenwich'
        },
        GRM: {
            manchester: 'Manchester',
            salford: 'Salford',
            bolton: 'Bolton',
            bury: 'Bury',
            oldham: 'Oldham',
            rochdale: 'Rochdale',
            stockport: 'Stockport',
            wigan: 'Wigan'
        },
        MAN: {
            manchesterCity: 'Città di Manchester',
            trafford: 'Trafford',
            tameside: 'Tameside',
            sale: 'Sale'
        },
        BIR: {
            birmingham: 'Birmingham',
            coventry: 'Coventry',
            wolverhampton: 'Wolverhampton',
            dudley: 'Dudley',
            walsall: 'Walsall',
            sandwell: 'Sandwell',
            solihull: 'Solihull'
        },
        LEE: {
            leeds: 'Leeds',
            bradford: 'Bradford',
            wakefield: 'Wakefield',
            kirklees: 'Kirklees',
            calderdale: 'Calderdale'
        },
        SHE: {
            sheffield: 'Sheffield',
            rotherham: 'Rotherham',
            doncaster: 'Doncaster',
            barnsley: 'Barnsley'
        },
        LIV: {
            liverpool: 'Liverpool',
            knowsley: 'Knowsley',
            sefton: 'Sefton',
            wirral: 'Wirral',
            stHelens: 'St Helens'
        },
        BRS: {
            bristol: 'Bristol',
            southGloucestershire: 'South Gloucestershire',
            bath: 'Bath'
        },
        NEW: {
            newcastle: 'Newcastle',
            gateshead: 'Gateshead',
            sunderland: 'Sunderland',
            durham: 'Durham',
            northTyneside: 'North Tyneside',
            southTyneside: 'South Tyneside'
        },
        NOT: {
            nottingham: 'Nottingham',
            derby: 'Derby',
            leicester: 'Leicester',
            lincoln: 'Lincoln'
        },
        EDB: {
            edinburgh: 'Edimburgo',
            glasgow: 'Glasgow',
            aberdeen: 'Aberdeen',
            dundee: 'Dundee',
            inverness: 'Inverness'
        },
        GLA: {
            glasgowCity: 'Città di Glasgow',
            paisley: 'Paisley',
            motherwell: 'Motherwell',
            hamilton: 'Hamilton',
            eastKilbride: 'East Kilbride'
        },
        CDF: {
            cardiff: 'Cardiff',
            swansea: 'Swansea',
            newport: 'Newport',
            wrexham: 'Wrexham',
            barry: 'Barry'
        },
        BEL: {
            belfast: 'Belfast',
            derry: 'Derry',
            lisburn: 'Lisburn',
            newry: 'Newry',
            bangor: 'Bangor'
        },
        SOU: {
            southampton: 'Southampton',
            portsmouth: 'Portsmouth',
            bournemouth: 'Bournemouth',
            poole: 'Poole',
            winchester: 'Winchester'
        },
        POR: {
            plymouth: 'Plymouth',
            exeter: 'Exeter',
            truro: 'Truro',
            bath: 'Bath',
            taunton: 'Taunton'
        },
        BRI: {
            brighton: 'Brighton',
            hove: 'Hove',
            worthing: 'Worthing',
            eastbourne: 'Eastbourne',
            hastings: 'Hastings'
        },
        CAM: {
            cambridge: 'Cambridge',
            oxford: 'Oxford',
            peterborough: 'Peterborough',
            luton: 'Luton',
            miltonKeynes: 'Milton Keynes'
        }
    },
    
    universities: {
        OXF: 'Università di Oxford',
        CAM: 'Università di Cambridge',
        IMP: 'Imperial College London',
        UCL: 'University College London',
        EDB: 'Università di Edimburgo'
    },
    
    studentHall: 'Residenza Studenti',
    academicBuilding: 'Edificio Accademico',
    library: 'Biblioteca',
    
    csv: {
        fullAddress: 'Indirizzo Completo',
        street: 'Via',
        houseNumber: 'Numero Civico',
        building: 'Edificio',
        postcode: 'Codice Postale',
        city: 'Città',
        county: 'Contea',
        fullName: 'Nome',
        gender: 'Genere',
        age: 'Età',
        birthDate: 'Data di Nascita',
        phone: 'Telefono',
        email: 'Email',
        cardType: 'Tipo Carta',
        cardNumber: 'Numero Carta',
        idCardNumber: 'Numero Assicurazione Nazionale'
    }
};
