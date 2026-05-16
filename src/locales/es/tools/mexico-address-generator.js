export default {
    name: 'Generador de direcciones México - Genere direcciones mexicanas reales, información de identidad y datos de contacto en línea',
    description: 'Generador de direcciones mexicano en línea gratuito que crea direcciones mexicanas con formato real, números de identificación RFC/CURP, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por estado, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
    inputTitle: 'Configuración de generación',
    outputTitle: 'Resultados generados',
    generateBtn: 'Generar datos',
    loadSampleBtn: 'Cargar ejemplo y generar',
    clearAll: 'Borrar todo',
    noOutput: 'Aún no se han generado resultados',
    preview: 'Vista previa de datos',
    
    // Filtrado geográfico
    locationTitle: 'Filtrado geográfico',
    selectState: 'Seleccionar estado',
    selectCity: 'Seleccionar ciudad',
    allStates: 'Todos los estados',
    allCities: 'Todas las ciudades',
    
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
    idCardTitle: 'Tarjeta de identidad mexicana',
    rfcLabel: 'RFC (Registro Federal de Contribuyentes)',
    curpLabel: 'CURP (Clave Única de Registro de Población)',
    
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
    neighborhoodLabel: 'Vecindario',
    postalCodeLabel: 'Código postal',
    cityLabel: 'Ciudad',
    stateLabel: 'Estado',
    
    // Formato de dirección
    commercialAddress: '(Dirección comercial)',
    postOfficeBox: 'Casilla de correo',
    studentDormitory: 'Residencia estudiantil',
    teachingBuilding: 'Edificio de enseñanza',
    library: 'Biblioteca',
    
    // Estados de México (32 estados)
    states: {
        AGS: 'Aguascalientes',
        BCN: 'Baja California',
        BCS: 'Baja California Sur',
        CAMP: 'Campeche',
        COAH: 'Coahuila',
        COL: 'Colima',
        CHIS: 'Chiapas',
        CHIH: 'Chihuahua',
        CDMX: 'Ciudad de México',
        DUR: 'Durango',
        GTO: 'Guanajuato',
        GRO: 'Guerrero',
        HGO: 'Hidalgo',
        JAL: 'Jalisco',
        MEX: 'Estado de México',
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
    
    // Nombres de universidades
    universities: {
        UNAM: 'Universidad Nacional Autónoma de México',
        IPN: 'Instituto Politécnico Nacional',
        UdeG: 'Universidad de Guadalajara',
        UANL: 'Universidad Autónoma de Nuevo León'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección completa',
        street: 'Calle',
        houseNumber: 'Número de casa',
        neighborhood: 'Vecindario',
        postalCode: 'Código postal',
        city: 'Ciudad',
        state: 'Estado',
        fullName: 'Nombre completo',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de nacimiento',
        phone: 'Teléfono',
        email: 'Correo electrónico',
        cardType: 'Tipo de tarjeta',
        cardNumber: 'Número de tarjeta',
        rfc: 'RFC',
        curp: 'CURP'
    }
};