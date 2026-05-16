export default {
    name: 'Generador de direcciones Kazajistán - Genere direcciones kazajas reales, información de identidad y datos de contacto en línea',
    description: 'Generador de direcciones kazajas en línea gratuito que crea direcciones kazajas con formato real, números de identificación (ИИН), números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por región, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
    inputTitle: 'Configuración de generación',
    outputTitle: 'Resultados generados',
    generateBtn: 'Generar datos',
    loadSampleBtn: 'Cargar ejemplo y generar',
    clearAll: 'Borrar todo',
    noOutput: 'Aún no se han generado resultados',
    preview: 'Vista previa de datos',
    
    // Filtrado geográfico
    locationTitle: 'Filtrado geográfico',
    selectRegion: 'Seleccionar región/ciudad',
    selectCity: 'Seleccionar ciudad',
    allRegions: 'Todas las regiones/ciudades',
    allCities: 'Todas las ciudades',
    postalCodeLabel: 'Código postal',
    
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
    
    // Tarjeta de identidad
    idCardTitle: 'Tarjeta de identidad kazaja (ИИН)',
    idCardNumber: 'Número de tarjeta de identidad (ИИН)',
    
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
    regionLabel: 'Región/ciudad',
    
    // Formato de dirección
    addressFloor: 'Piso',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad comercial)',
    postOfficeBox: 'Casilla de correo',
    studentDormitory: 'Residencia estudiantil',
    teachingBuilding: 'Edificio de enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Edificio',
    
    // Nombres de regiones (regiones kazajas)
    regions: {
        NUR: 'Nur-Sultán (Astana)',
        ALA: 'Almatý',
        SHY: 'Shymkent',
        AKM: 'Región de Akmola',
        AKT: 'Región de Aktobé',
        ATY: 'Región de Atyraú',
        MAN: 'Región de Mangystau',
        PAV: 'Región de Pavlodar',
        SKZ: 'Región de Kazajistán del Sur',
        KUS: 'Región de Kostanay',
        KAR: 'Región de Karagandá',
        ZAP: 'Región de Kazajistán Occidental',
        MNG: 'Región de Zhambyl',
        TUR: 'Región de Almatý',
        YUZ: 'Región de Kyzylorda',
        VOS: 'Región de Kazajistán Oriental',
        ZHE: 'Región de Zhezkazgan'
    },
    
    // Datos de ciudades
    cities: {
        NUR: {
            nursultan: 'Nur-Sultán'
        },
        ALA: {
            almaty: 'Almatý'
        },
        SHY: {
            shymkent: 'Shymkent'
        },
        AKM: {
            akmola: 'Akmola',
            kokshetau: 'Kokshetau'
        },
        AKT: {
            aktobe: 'Aktobé'
        },
        ATY: {
            atyrau: 'Atyraú'
        },
        MAN: {
            aktau: 'Aktau'
        },
        PAV: {
            pavlodar: 'Pavlodar'
        },
        SKZ: {
            turkestan: 'Turkestán'
        },
        KUS: {
            kostanay: 'Kostanay'
        },
        KAR: {
            karaganda: 'Karagandá'
        },
        ZAP: {
            uralsk: 'Uralsk'
        },
        MNG: {
            taraz: 'Taraz'
        },
        TUR: {
            taldykorgan: 'Taldykorgan'
        },
        YUZ: {
            kyzylorda: 'Kyzylorda'
        },
        VOS: {
            'ust-kamenogorsk': 'Ust-Kamenogorsk'
        },
        ZHE: {
            temirtau: 'Temirtau'
        }
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección completa',
        street: 'Calle',
        houseNumber: 'Número de casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
        region: 'Región/ciudad',
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