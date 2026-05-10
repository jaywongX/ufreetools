export default {
    name: 'Generador de direcciones Italia - Genere direcciones italianas reales, información de identidad y datos de contacto en línea',
    description: 'Generador de direcciones Italia gratuito en línea que crea direcciones italianas con formato real, números de Codice Fiscale, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Soporta filtrado por región, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
    inputTitle: 'Configuración de generación',
    outputTitle: 'Resultados generados',
    generateBtn: 'Generar datos',
    loadSampleBtn: 'Cargar ejemplo y generar',
    clearAll: 'Limpiar todo',
    noOutput: 'Aún no se han generado resultados',
    preview: 'Vista previa de datos',
    
    // Filtrado geográfico
    locationTitle: 'Filtrado geográfico',
    selectRegion: 'Seleccionar región',
    allRegions: 'Todas las regiones',
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
    tempEmail: 'Correo temporal',
    
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
    employmentPartTime: 'Medio tiempo',
    
    // Documento de identidad
    idCardTitle: 'Documento de identidad italiano',
    idCardNumber: 'Número de documento de identidad',
    codiceFiscale: 'Codice Fiscale',
    
    // Huella digital
    fingerprintTitle: 'Huella digital',
    os: 'Sistema operativo',
    osVersion: 'Versión del sistema',
    browser: 'Navegador',
    userAgent: 'User Agent',
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
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver detalles',
    
    // Generación por lotes
    batchTitle: 'Generación por lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese la cantidad (1-100)',
    
    // Mensajes de notificación
    generating: 'Generando...',
    generated: 'Generación completa',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Por favor ingrese un número entre 1 y 100',
    
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
    regionLabel: 'Región',
    postalCode: 'Código postal',
    
    // Formato de dirección
    addressNumber: 'N°',
    addressFloor: 'P',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad comercial)',
    italy: 'Italia',
    postOfficeBox: 'Apartado postal',
    studentDormitory: 'Residencia estudiantil',
    teachingBuilding: 'Edificio de enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Edificio',
    apartment: 'Apartamento',
    
    // Nombres de regiones (regiones italianas)
    regions: {
        'Lombardia': 'Lombardía',
        'Lazio': 'Lacio',
        'Campania': 'Campania',
        'Sicilia': 'Sicilia',
        'Veneto': 'Véneto',
        'Emilia-Romagna': 'Emilia-Romaña',
        'Piemonte': 'Piamonte',
        'Toscana': 'Toscana',
        'Puglia': 'Apulia',
        'Calabria': 'Calabria',
        'Sardegna': 'Cerdeña',
        'Friuli Venezia Giulia': 'Friuli-Venecia Julia',
        'Liguria': 'Liguria',
        'Marche': 'Marcas',
        'Abruzzo': 'Abruzos',
        'Molise': 'Molise',
        'Basilicata': 'Basilicata',
        'Umbria': 'Umbría',
        "Valle d'Aosta": "Valle de Aosta",
        'Trentino-Alto Adige': 'Trentino-Alto Adigio'
    },
    
    // Nombres de universidades
    universities: {
        'Politecnico di Milano': 'Politécnico de Milán',
        'Sapienza': 'Universidad de Roma La Sapienza',
        'Bocconi': 'Universidad Bocconi',
        'Politecnico di Torino': 'Politécnico de Turín',
        'UniMI': 'Universidad de Milán',
        'UniFI': 'Universidad de Florencia',
        'UniBO': 'Universidad de Bolonia',
        'UniPd': 'Universidad de Padua',
        'UniNa': 'Universidad de Nápoles Federico II',
        'UniTo': 'Universidad de Turín'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección completa',
        street: 'Calle',
        houseNumber: 'Número de casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
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
        idCardNumber: 'Número de documento de identidad'
    }
};