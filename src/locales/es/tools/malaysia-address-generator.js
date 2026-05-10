export default {
    name: 'Generador de Direcciones de Malasia - Genere Direcciones Malasias Reales, Información de Identidad y Datos de Contacto en Línea',
    description: 'Generador de direcciones de Malasia gratuito en línea que crea direcciones malasias con formato real, números MyKad, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por estados, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados Generados',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Ejemplo y Generar',
    clearAll: 'Limpiar Todo',
    noOutput: 'Aún no se han generado resultados',
    preview: 'Vista Previa de Datos',
    
    // Filtrado Geográfico
    locationTitle: 'Filtrado Geográfico',
    selectRegion: 'Seleccionar Estado',
    allRegions: 'Todos los Estados',
    postalCodeLabel: 'Código Postal',
    validatePostalCode: 'Validar Código Postal',
    
    // Tipos de Dirección
    addressTypeTitle: 'Tipo de Dirección',
    addressTypeResidential: 'Dirección Residencial',
    addressTypeCommercial: 'Dirección Comercial',
    addressTypeVirtual: 'Buzón Virtual',
    addressTypeCampus: 'Campus Universitario',
    
    // Información de Identidad
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
    
    // Información de Contacto
    contactTitle: 'Información de Contacto',
    phoneNumber: 'Número de Teléfono',
    phoneType: 'Tipo de Teléfono',
    phoneTypeMobile: 'Móvil',
    phoneTypeLandline: 'Fijo',
    areaCode: 'Código de Área',
    email: 'Correo Electrónico',
    tempEmail: 'Correo Electrónico Temporal',
    
    // Tarjeta de Crédito
    creditCardTitle: 'Información de Tarjeta de Crédito',
    cardType: 'Tipo de Tarjeta',
    cardNumber: 'Número de Tarjeta',
    expiryDate: 'Fecha de Vencimiento',
    cvv: 'CVV',
    bankBin: 'BIN del Banco',
    
    // Carrera
    careerTitle: 'Perfil Profesional',
    jobTitle: 'Cargo',
    salary: 'Salario',
    companyName: 'Nombre de la Empresa',
    companySize: 'Tamaño de la Empresa',
    industry: 'Industria',
    employmentStatus: 'Estado de Empleo',
    employmentFullTime: 'Tiempo Completo',
    employmentPartTime: 'Medio Tiempo',
    
    // Tarjeta de Identidad
    idCardTitle: 'Tarjeta de Identidad de Malasia',
    idCardNumber: 'Número de Tarjeta de Identidad',
    mykadNumber: 'Número MyKad',
    
    // Huella Digital
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
    
    // Opciones de Exportación
    exportTitle: 'Formato de Exportación',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalles',
    
    // Generación por Lotes
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese cantidad (1-100)',
    
    // Mensajes de Notificación
    generating: 'Generando...',
    generated: 'Generación Completa',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Por favor ingrese un número entre 1-100',
    
    // Visualización de Resultados
    resultCount: '{count} registros generados',
    resultSummary: 'Resumen de Resultados',
    showAll: 'Mostrar Todo',
    collapse: 'Contraer',
    
    // Opciones de Generación
    generateOptionsTitle: 'Opciones de Generación',
    
    // Visualización de Registros
    recordLabel: 'Registro #{num}',
    addressLabel: 'Dirección',
    streetLabel: 'Calle',
    houseNumberLabel: 'Número de Casa',
    buildingLabel: 'Edificio',
    floorLabel: 'Piso',
    unitLabel: 'Unidad',
    regionLabel: 'Estado',
    postalCode: 'Código Postal',
    
    // Formato de Dirección
    addressNumber: 'Núm.',
    addressFloor: 'P',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad Comercial)',
    malaysia: 'Malasia',
    postOfficeBox: 'Apartado de Correos',
    studentDormitory: 'Residencia Estudiantil',
    teachingBuilding: 'Edificio de Enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Bloque',
    apartment: 'Apartamento',
    
    // Nombres de Estados (Estados de Malasia)
    regions: {
        'Johor': 'Johor',
        'Kedah': 'Kedah',
        'Kelantan': 'Kelantan',
        'Malacca': 'Malacca',
        'Negeri Sembilan': 'Negeri Sembilan',
        'Pahang': 'Pahang',
        'Penang': 'Penang',
        'Perak': 'Perak',
        'Perlis': 'Perlis',
        'Sabah': 'Sabah',
        'Sarawak': 'Sarawak',
        'Selangor': 'Selangor',
        'Terengganu': 'Terengganu',
        'Kuala Lumpur': 'Kuala Lumpur',
        'Putrajaya': 'Putrajaya',
        'Labuan': 'Labuan'
    },
    
    // Nombres de Universidades
    universities: {
        'UM': 'Universidad de Malaya',
        'UKM': 'Universiti Kebangsaan Malaysia',
        'UPM': 'Universiti Putra Malaysia',
        'USM': 'Universiti Sains Malaysia',
        'UTM': 'Universiti Teknologi Malaysia',
        'UUM': 'Universiti Utara Malaysia',
        'UMS': 'Universiti Malaysia Sabah',
        'UMK': 'Universiti Malaysia Kelantan',
        'UPSI': 'Universiti Pendidikan Sultan Idris'
    },
    
    // Nombres de Columnas CSV
    csv: {
        fullAddress: 'Dirección Completa',
        street: 'Calle',
        houseNumber: 'Número de Casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
        region: 'Estado',
        postalCode: 'Código Postal',
        fullName: 'Nombre Completo',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de Nacimiento',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        cardType: 'Tipo de Tarjeta',
        cardNumber: 'Número de Tarjeta',
        idCardNumber: 'Número de Tarjeta de Identidad'
    }
};