export default {
    name: 'Generador de Direcciones del Reino Unido - Genera direcciones reales del Reino Unido, información de identidad y contactos en línea',
    description: 'Generador gratuito de direcciones del Reino Unido en línea. Genera direcciones del Reino Unido con formato real, números de seguro nacional (NINO), teléfonos, números de tarjeta de crédito y perfiles de identidad completos. Filtra por condado, exporta en JSON/CSV, procesamiento frontal puro para privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Ejemplo y Generar',
    clearAll: 'Limpiar Todo',
    noOutput: 'Sin resultados',
    preview: 'Vista Previa',
    
    locationTitle: 'Filtro de Ubicación Geográfica',
    selectCounty: 'Seleccionar Condado',
    selectCity: 'Seleccionar Ciudad',
    allCounties: 'Todos los Condados',
    allCities: 'Todas las Ciudades',
    postcodeLabel: 'Código Postal',
    validatePostcode: 'Validar Código Postal',
    
    addressTypeTitle: 'Tipo de Dirección',
    addressTypeResidential: 'Dirección Residencial',
    addressTypeCommercial: 'Dirección Comercial',
    addressTypePoBox: 'Apartado Postal',
    addressTypeCampus: 'Campus Universitario',
    
    identityTitle: 'Información de Identidad',
    fullName: 'Nombre Completo',
    gender: 'Género',
    genderMale: 'Masculino',
    genderFemale: 'Femenino',
    age: 'Edad',
    birthDate: 'Fecha de Nacimiento',
    zodiac: 'Signo Zodiacal',
    height: 'Altura',
    weight: 'Peso',
    
    contactTitle: 'Información de Contacto',
    phoneNumber: 'Número de Teléfono',
    phoneType: 'Tipo de Teléfono',
    phoneTypeMobile: 'Móvil',
    phoneTypeLandline: 'Fijo',
    areaCode: 'Código de Área',
    email: 'Correo Electrónico',
    tempEmail: 'Correo Temporal',
    
    creditCardTitle: 'Información de Tarjeta de Crédito',
    cardType: 'Tipo de Tarjeta',
    cardNumber: 'Número de Tarjeta',
    expiryDate: 'Fecha de Vencimiento',
    cvv: 'CVV',
    bankBin: 'Código BIN del Banco',
    
    careerTitle: 'Perfil Profesional',
    jobTitle: 'Puesto de Trabajo',
    salary: 'Salario',
    companyName: 'Nombre de la Empresa',
    companySize: 'Tamaño de la Empresa',
    industry: 'Industria',
    employmentStatus: 'Estado Laboral',
    employmentFullTime: 'Tiempo Completo',
    employmentPartTime: 'Medio Tiempo',
    
    idCardTitle: 'Número de Seguro Nacional (NINO)',
    idCardNumber: 'Número de Seguro Nacional',
    prefixLetter: 'Letra Prefijo',
    serialNumber: 'Número de Serie',
    suffixLetter: 'Letra Sufijo',
    
    fingerprintTitle: 'Huella Digital',
    os: 'Sistema Operativo',
    osVersion: 'Versión del Sistema',
    browser: 'Navegador',
    userAgent: 'User Agent',
    screenResolution: 'Resolución de Pantalla',
    timezone: 'Zona Horaria',
    guid: 'GUID',
    ipAddress: 'Dirección IP',
    macAddress: 'Dirección MAC',
    cookiePolicy: 'Política de Cookies',
    
    exportTitle: 'Formato de Exportación',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalles',
    
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad a Generar',
    quantityPlaceholder: 'Ingrese cantidad (1-100)',
    
    generating: 'Generando...',
    generated: 'Generación Completada',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Ingrese un número entre 1-100',
    
    resultCount: 'Total de {count} registros generados',
    resultSummary: 'Resumen de Resultados',
    showAll: 'Mostrar Todo',
    collapse: 'Colapsar',
    
    generateOptionsTitle: 'Opciones de Generación',
    
    recordLabel: 'Registro #{num}',
    addressLabel: 'Dirección',
    streetLabel: 'Calle',
    houseNumberLabel: 'Número',
    buildingLabel: 'Edificio',
    cityLabel: 'Ciudad',
    countyLabel: 'Condado',
    
    counties: {
        LND: 'Gran Londres',
        GRM: 'Gran Mánchester',
        MAN: 'Mánchester',
        BIR: 'Midlands Occidentales',
        LEE: 'Yorkshire Occidental',
        SHE: 'Yorkshire del Sur',
        LIV: 'Merseyside',
        BRS: 'Bristol',
        NEW: 'Tyne y Wear',
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
            manchester: 'Mánchester',
            salford: 'Salford',
            bolton: 'Bolton',
            bury: 'Bury',
            oldham: 'Oldham',
            rochdale: 'Rochdale',
            stockport: 'Stockport',
            wigan: 'Wigan'
        },
        MAN: {
            manchesterCity: 'Ciudad de Mánchester',
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
            southGloucestershire: 'Gloucestershire del Sur',
            bath: 'Bath'
        },
        NEW: {
            newcastle: 'Newcastle',
            gateshead: 'Gateshead',
            sunderland: 'Sunderland',
            durham: 'Durham',
            northTyneside: 'Tyneside del Norte',
            southTyneside: 'Tyneside del Sur'
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
            glasgowCity: 'Ciudad de Glasgow',
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
        OXF: 'Universidad de Oxford',
        CAM: 'Universidad de Cambridge',
        IMP: 'Imperial College London',
        UCL: 'University College London',
        EDB: 'Universidad de Edimburgo'
    },
    
    studentHall: 'Residencia de Estudiantes',
    academicBuilding: 'Edificio Académico',
    library: 'Biblioteca',
    
    csv: {
        fullAddress: 'Dirección Completa',
        street: 'Calle',
        houseNumber: 'Número',
        building: 'Edificio',
        postcode: 'Código Postal',
        city: 'Ciudad',
        county: 'Condado',
        fullName: 'Nombre',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de Nacimiento',
        phone: 'Teléfono',
        email: 'Correo',
        cardType: 'Tipo de Tarjeta',
        cardNumber: 'Número de Tarjeta',
        idCardNumber: 'Número de Seguro Nacional'
    }
};
