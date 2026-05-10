export default {
    name: 'Generador de direcciones Finlandia - Genere direcciones finlandesas reales, información de identidad y datos de contacto en línea',
    description: 'Generador de direcciones finlandés en línea gratuito que crea direcciones finlandesas con formato real, números de identificación, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por región, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
    inputTitle: 'Configuración de generación',
    outputTitle: 'Resultados generados',
    generateBtn: 'Generar datos',
    loadSampleBtn: 'Cargar ejemplo y generar',
    clearAll: 'Borrar todo',
    noOutput: 'Aún no se han generado resultados',
    preview: 'Vista previa de datos',
    
    // Filtrado geográfico
    locationTitle: 'Filtrado geográfico',
    selectRegion: 'Seleccionar región',
    selectMunicipality: 'Seleccionar municipio',
    allRegions: 'Todas las regiones',
    allMunicipalities: 'Todos los municipios',
    postalCodeLabel: 'Código postal',
    validatePostalCode: 'Validar código postal',
    
    // Tipos de dirección
    addressTypeTitle: 'Tipo de dirección',
    addressTypeResidential: 'Dirección residencial',
    addressTypeCommercial: 'Dirección comercial',
    addressTypeVirtual: 'Buzón virtual',
    addressTypeCampus: 'Campus universitario',
    
    // Información de identidad
    identityTitle: 'Información de identidad',
    fullName: 'Nombre completo',
    gender: 'Género',
    genderMale: 'Masculino',
    genderFemale: 'Femenino',
    age: 'Edad',
    birthDate: 'Fecha de nacimiento',
    zodiac: 'Signo zodiacal',
    height: 'Altura',
    weight: 'Peso',
    
    // Información de contacto
    contactTitle: 'Información de contacto',
    phoneNumber: 'Número de teléfono',
    phoneType: 'Tipo de teléfono',
    phoneTypeMobile: 'Móvil',
    phoneTypeLandline: 'Teléfono fijo',
    areaCode: 'Código de área',
    email: 'Correo electrónico',
    tempEmail: 'Correo electrónico temporal',
    
    // Tarjeta de crédito
    creditCardTitle: 'Información de tarjeta de crédito',
    cardType: 'Tipo de tarjeta',
    cardNumber: 'Número de tarjeta',
    expiryDate: 'Fecha de vencimiento',
    cvv: 'CVV',
    bankBin: 'BIN bancario',
    
    // Carrera
    careerTitle: 'Perfil profesional',
    jobTitle: 'Cargo',
    salary: 'Salario',
    companyName: 'Nombre de la empresa',
    companySize: 'Tamaño de la empresa',
    industry: 'Industria',
    employmentStatus: 'Estado de empleo',
    employmentFullTime: 'Tiempo completo',
    employmentPartTime: 'Tiempo parcial',
    
    // Tarjeta de identidad
    idCardTitle: 'Tarjeta de identidad finlandesa',
    idCardNumber: 'Número de tarjeta de identidad',
    henkilötunnus: 'Número de identificación personal',
    serialNumber: 'Número de serie',
    checkDigit: 'Dígito de verificación',
    
    // Huella digital
    fingerprintTitle: 'Huella digital',
    os: 'Sistema operativo',
    osVersion: 'Versión del sistema operativo',
    browser: 'Navegador',
    userAgent: 'Agente de usuario',
    screenResolution: 'Resolución de pantalla',
    timezone: 'Zona horaria',
    guid: 'GUID',
    ipAddress: 'Dirección IP',
    macAddress: 'Dirección MAC',
    cookiePolicy: 'Política de cookies',
    
    // Opciones de exportación
    exportTitle: 'Formato de exportación',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    exportIdCard: 'Generar imagen de tarjeta de identidad',
    exportBusinessCard: 'Generar tarjeta de presentación',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver detalles',
    
    // Generación por lotes
    batchTitle: 'Generación por lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese la cantidad (1-100)',
    
    // Mensajes de notificación
    generating: 'Generando...',
    generated: 'Generación completada',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Ingrese un número entre 1 y 100',
    
    // Visualización de resultados
    resultCount: '{count} registros generados',
    resultSummary: 'Resumen de resultados',
    showAll: 'Mostrar todo',
    collapse: 'Contraer',
    
    // Opciones de generación
    generateOptionsTitle: 'Opciones de generación',
    
    // Visualización de registros
    recordLabel: 'Registro #{num}',
    addressLabel: 'Dirección',
    streetLabel: 'Calle',
    houseNumberLabel: 'Número de casa',
    buildingLabel: 'Edificio',
    floorLabel: 'Piso',
    unitLabel: 'Unidad',
    municipalityLabel: 'Municipio',
    regionLabel: 'Región',
    postalCode: 'Código postal',
    
    // Formato de dirección
    addressNumber: 'N°',
    addressFloor: 'Piso',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad comercial)',
    finland: 'Finlandia',
    postOfficeBox: 'Casilla de correo',
    studentDormitory: 'Residencia estudiantil',
    teachingBuilding: 'Edificio de enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Unidad',
    apartment: 'Apartamento',
    
    // Mensajes de alerta
    idCardImageAlert: 'La generación de imagen de tarjeta de identidad requiere implementación de canvas',
    businessCardAlert: 'La generación de tarjeta de presentación requiere implementación de canvas',
    
    // Nombres de regiones (regiones finlandesas)
    regions: {
        Uusimaa: 'Uusimaa',
        Pirkanmaa: 'Pirkanmaa',
        VarsinaisSuomi: 'Varsinais-Suomi',
        PohjoisPohjanmaa: 'Pohjois-Pohjanmaa',
        KeskiSuomi: 'Keski-Suomi',
        PäijätHäme: 'Päijät-Häme',
        KantaHäme: 'Kanta-Häme',
        EteläKarjala: 'Etelä-Karjala',
        PohjoisKarjala: 'Pohjois-Karjala',
        PohjoisSavo: 'Pohjois-Savo',
        EteläSavo: 'Etelä-Savo',
        Kainuu: 'Kainuu',
        KeskiPohjanmaa: 'Keski-Pohjanmaa',
        EteläPohjanmaa: 'Etelä-Pohjanmaa',
        Satakunta: 'Satakunta',
        Ahvenanmaa: 'Ahvenanmaa',
        Lapland: 'Lappi'
    },
    
    // Datos de municipios (ejemplo de la región Uusimaa)
    municipalitiesData: {
        Uusimaa: {
            helsinki: 'Helsinki',
            espoo: 'Espoo',
            vantaa: 'Vantaa',
            kauniainen: 'Kauniainen',
            järvenpää: 'Järvenpää',
            kerava: 'Kerava',
            tuusula: 'Tuusula',
            nurmijärvi: 'Nurmijärvi',
            lyly: 'Länsi-Uusimaa',
            sipoo: 'Sipoo'
        },
        Pirkanmaa: {
            tampere: 'Tampere',
            Nokia: 'Nokia',
            ylöjärvi: 'Ylöjärvi',
            kangasala: 'Kangasala',
            lempäälä: 'Lempäälä',
            pirkkala: 'Pirkkala',
            orivesi: 'Orivesi',
            hängenkyrö: 'Hämeenkyrö'
        },
        VarsinaisSuomi: {
            turku: 'Turku',
            rauma: 'Rauma',
            salo: 'Salo',
            pori: 'Pori',
            kaarina: 'Kaarina',
            littoinen: 'Littoinen',
            raisio: 'Raisio',
            naantali: 'Naantali'
        },
        KeskiSuomi: {
            jyväskylä: 'Jyväskylä',
            jyväskylänML: 'Jyväskylän mlk',
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala'
        },
        PäijätHäme: {
            lahti: 'Lahti',
            hollola: 'Hollola',
            hrmeentti: 'Hämeenlinna',
            asikkala: 'Asikkala',
            pertunmaa: 'Pertunmaa',
            hartola: 'Hartola'
        }
    },
    
    // Nombres de universidades
    universities: {
        HY: 'Universidad de Helsinki',
        AALTO: 'Universidad Aalto',
        TUNI: 'Universidad de Tampere',
        UTA: 'Universidad de Oulu',
        UTU: 'Universidad de Turku',
        JYU: 'Universidad de Jyväskylä',
        UEF: 'Universidad de Finlandia Oriental',
        TAMK: 'Universidad de Ciencias Aplicadas de Tampere',
        HAAGA: 'Universidad de Ciencias Aplicadas Haaga-Helia',
        Laurea: 'Universidad de Ciencias Aplicadas Laurea'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección completa',
        street: 'Calle',
        houseNumber: 'Número de casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
        municipality: 'Municipio',
        region: 'Región',
        postalCode: 'Código postal',
        fullName: 'Nombre completo',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de nacimiento',
        phone: 'Teléfono',
        email: 'Correo electrónico',
        cardType: 'Tipo de tarjeta',
        cardNumber: 'Número de tarjeta',
        idCardNumber: 'Número de tarjeta de identidad'
    }
};