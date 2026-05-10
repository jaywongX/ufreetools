export default {
    name: 'Generador de direcciones Tailandia - Genere direcciones tailandesas reales, información de identidad y datos de contacto en línea',
    description: 'Generador de direcciones tailandés en línea gratuito que crea direcciones tailandesas con formato real, números de identificación, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por provincia, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
    inputTitle: 'Configuración de generación',
    outputTitle: 'Resultados generados',
    generateBtn: 'Generar datos',
    loadSampleBtn: 'Cargar ejemplo y generar',
    clearAll: 'Borrar todo',
    noOutput: 'Aún no se han generado resultados',
    preview: 'Vista previa de datos',
    
    // Filtrado geográfico
    locationTitle: 'Filtrado geográfico',
    selectRegion: 'Seleccionar provincia',
    allRegions: 'Todas las provincias',
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
    idCardTitle: 'Tarjeta de identidad tailandesa',
    idCardNumber: 'Número de tarjeta de identidad',
    
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
    regionLabel: 'Provincia',
    postalCode: 'Código postal',
    
    // Formato de dirección
    addressNumber: 'N°',
    addressFloor: 'Piso',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad comercial)',
    thailand: 'Tailandia',
    postOfficeBox: 'Casilla de correo',
    studentDormitory: 'Residencia estudiantil',
    teachingBuilding: 'Edificio de enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Edificio',
    apartment: 'Apartamento',
    
    // Nombres de regiones (provincias tailandesas)
    regions: {
        'Bangkok': 'Bangkok',
        'Chiang Mai': 'Chiang Mai',
        'Phuket': 'Phuket',
        'Pattaya': 'Pattaya',
        'Nonthaburi': 'Nonthaburi',
        'Pathum Thani': 'Pathum Thani',
        'Samut Prakan': 'Samut Prakan',
        'Nakhon Ratchasima': 'Nakhon Ratchasima',
        'Chiang Rai': 'Chiang Rai',
        'Khon Kaen': 'Khon Kaen',
        'Nakhon Si Thammarat': 'Nakhon Si Thammarat',
        'Surat Thani': 'Surat Thani',
        'Udon Thani': 'Udon Thani',
        'Rayong': 'Rayong',
        'Lampang': 'Lampang',
        'Nakhon Pathom': 'Nakhon Pathom',
        'Ayutthaya': 'Ayutthaya',
        'Chanthaburi': 'Chanthaburi',
        'Trat': 'Trat',
        'Kanchanaburi': 'Kanchanaburi'
    },
    
    // Nombres de universidades
    universities: {
        'CU': 'Universidad Chulalongkorn',
        'TU': 'Universidad Mahidol',
        'KU': 'Universidad Kasetsart',
        'TU': 'Universidad Thammasat',
        'KMUTT': 'Universidad de Tecnología King Mongkut Thonburi',
        'KMUTNB': 'Universidad de Tecnología King Mongkut North Bangkok',
        'SIIT': 'Instituto Internacional Sirindhorn de Tecnología',
        'AIT': 'Instituto Asiático de Tecnología',
        'ABAC': 'Universidad Assumption'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección completa',
        street: 'Calle',
        houseNumber: 'Número de casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
        region: 'Provincia',
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