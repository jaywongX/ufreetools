export default {
    name: 'Generador de Direcciones de Alemania - Genera Direcciones Alemanas Reales e Información de Identidad en Línea',
    description: 'Generador gratuito de direcciones de Alemania en línea, genera direcciones alemanas con formato real, números de identificación, números de teléfono, números de tarjeta de crédito y perfiles de identidad completos. Admite filtrado por estado, exportación JSON/CSV, se ejecuta completamente en el frontend para proteger la privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados de Generación',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Muestra y Generar',
    clearAll: 'Borrar Todo',
    noOutput: 'Sin resultados de generación',
    preview: 'Vista Previa de Datos',
    
    // Filtrado geográfico
    locationTitle: 'Filtro de Ubicación Geográfica',
    selectState: 'Seleccionar Estado',
    selectCity: 'Seleccionar Ciudad',
    allStates: 'Todos los Estados',
    allCities: 'Todas las Ciudades',
    
    // Tipos de dirección
    addressTypeTitle: 'Tipo de Dirección',
    addressTypeResidential: 'Dirección Residencial',
    addressTypeCommercial: 'Dirección Comercial',
    addressTypePoBox: 'Apartado Postal',
    addressTypeCampus: 'Campus Universitario',
    
    // Información de identidad
    identityTitle: 'Información de Identidad',
    fullName: 'Nombre Completo',
    firstName: 'Nombre',
    lastName: 'Apellido',
    gender: 'Género',
    genderMale: 'Masculino',
    genderFemale: 'Femenino',
    age: 'Edad',
    birthDate: 'Fecha de Nacimiento',
    height: 'Altura',
    weight: 'Peso',
    
    // Información de contacto
    contactTitle: 'Información de Contacto',
    phoneNumber: 'Número de Teléfono',
    phoneType: 'Tipo de Teléfono',
    phoneTypeMobile: 'Móvil',
    phoneTypeLandline: 'Fijo',
    areaCode: 'Código de Área',
    email: 'Correo Electrónico',
    tempEmail: 'Correo Temporal',
    
    // Tarjeta de crédito
    creditCardTitle: 'Información de Tarjeta de Crédito',
    cardType: 'Tipo de Tarjeta',
    cardNumber: 'Número de Tarjeta',
    expiryDate: 'Fecha de Vencimiento',
    cvv: 'CVV',
    bankBin: 'Código BIN del Banco',
    
    // Carrera
    careerTitle: 'Perfil de Carrera',
    jobTitle: 'Cargo',
    salary: 'Salario',
    companyName: 'Nombre de la Empresa',
    companySize: 'Tamaño de la Empresa',
    industry: 'Industria',
    employmentStatus: 'Estado de Empleo',
    
    // Tarjeta de identificación
    idCardTitle: 'Documento de Identidad Alemán (Personalausweis)',
    idCardNumber: 'Número de Identificación',
    
    // Huella digital
    fingerprintTitle: 'Huella Digital',
    os: 'Sistema Operativo',
    osVersion: 'Versión del SO',
    browser: 'Navegador',
    userAgent: 'User Agent',
    screenResolution: 'Resolución de Pantalla',
    timezone: 'Zona Horaria',
    guid: 'GUID',
    ipAddress: 'Dirección IP',
    macAddress: 'Dirección MAC',
    cookiePolicy: 'Política de Cookies',
    
    // Opciones de exportación
    exportTitle: 'Formato de Exportación',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalles',
    
    // Generación por lotes
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese cantidad (1-100)',
    
    // Mensajes
    generating: 'Generando...',
    generated: 'Generación Completada',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Ingrese un número entre 1-100',
    
    // Visualización de resultados
    resultCount: 'Se generaron {count} registros',
    resultSummary: 'Resumen de Resultados',
    showAll: 'Mostrar Todo',
    collapse: 'Colapsar',
    
    // Opciones de generación
    generateOptionsTitle: 'Opciones de Generación',
    
    // Visualización de registros
    recordLabel: 'Registro #{num}',
    addressLabel: 'Dirección',
    streetLabel: 'Calle',
    houseNumberLabel: 'Número',
    postalCodeLabel: 'Código Postal',
    cityLabel: 'Ciudad',
    stateLabel: 'Estado',
    
    // Formato de dirección
    commercialArea: 'Zona Comercial',
    studentDormitory: 'Residencia Estudiantil',
    library: 'Biblioteca',
    
    // 16 estados de Alemania
    states: {
        BW: 'Baden-Wurtemberg',
        BY: 'Baviera',
        BE: 'Berlín',
        BB: 'Brandeburgo',
        HB: 'Bremen',
        HH: 'Hamburgo',
        HE: 'Hesse',
        MV: 'Mecklemburgo-Pomerania Occidental',
        NI: 'Baja Sajonia',
        NW: 'Renania del Norte-Westfalia',
        RP: 'Renania-Palatinado',
        SL: 'Saarland',
        SN: 'Sajonia',
        ST: 'Sajonia-Anhalt',
        SH: 'Schleswig-Holstein',
        TH: 'Turingia'
    },
    
    // Nombres de universidades
    universities: {
        TUM: 'Universidad Técnica de Múnich',
        LMU: 'Universidad Ludwig Maximilian de Múnich',
        HU: 'Universidad Humboldt de Berlín',
        TU: 'Universidad Técnica de Berlín',
        UniHeidelberg: 'Universidad de Heidelberg'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección Completa',
        street: 'Calle',
        houseNumber: 'Número',
        postalCode: 'Código Postal',
        city: 'Ciudad',
        state: 'Estado',
        fullName: 'Nombre',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de Nacimiento',
        phone: 'Teléfono',
        email: 'Correo',
        cardType: 'Tipo de Tarjeta',
        cardNumber: 'Número de Tarjeta',
        idCardNumber: 'Número de Identificación'
    }
};
