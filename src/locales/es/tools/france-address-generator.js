export default {
    name: 'Generador de direcciones Francia - Genere direcciones francesas reales, información de identidad y datos de contacto en línea',
    description: 'Generador de direcciones francés en línea gratuito que crea direcciones francesas con formato real, números de identificación, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por departamento, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
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
    selectDepartment: 'Seleccionar departamento',
    allRegions: 'Todas las regiones',
    allDepartments: 'Todos los departamentos',
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
    idCardTitle: 'Tarjeta de identidad francesa',
    idCardNumber: 'Número de tarjeta de identidad',
    nirNumber: 'Número NIR',
    serialNumber: 'Número de serie',
    checkKey: 'Clave de verificación',
    
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
    departmentLabel: 'Departamento',
    regionLabel: 'Región',
    postalCode: 'Código postal',
    
    // Formato de dirección
    addressNumber: 'N°',
    addressFloor: 'Piso',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad comercial)',
    france: 'Francia',
    postOfficeBox: 'Casilla de correo',
    studentDormitory: 'Residencia estudiantil',
    teachingBuilding: 'Edificio de enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Unidad',
    apartment: 'Apartamento',
    
    // Mensajes de alerta
    idCardImageAlert: 'La generación de imagen de tarjeta de identidad requiere implementación de canvas',
    businessCardAlert: 'La generación de tarjeta de presentación requiere implementación de canvas',
    
    // Nombres de regiones (regiones francesas)
    regions: {
        IDF: 'Isla de Francia',
        ARA: 'Auvernia-Ródano-Alpes',
        OCC: 'Occitania',
        NAQ: 'Nueva Aquitania',
        PAC: 'Provenza-Alpes-Costa Azul',
        HDF: 'Alta Francia',
        BFC: 'Borgoña-Franco Condado',
        NAC: 'Países del Loira',
        PDL: 'Países del Loira',
        BRE: 'Bretaña',
        NOR: 'Normandía',
        GUA: 'Guadalupe',
        MQ: 'Martinica',
        GUY: 'Guayana Francesa',
        REU: 'Reunión',
        COR: 'Córcega',
        ALO: 'Alsacia-Lorena',
        MP: 'Metz-Pomerania'
    },
    
    // Datos de departamentos (ejemplo de la región Isla de Francia)
    departmentsData: {
        IDF: {
            paris: 'París',
            hautsDeSeine: 'Altos del Sena',
            seineSaintDenis: 'Sena-San Denis',
            valDeMarne: 'Valle del Marne',
            yvelines: 'Yvelines',
            essonne: 'Essonne',
            valDOise: 'Valle del Oise',
            seineEtMarne: 'Sena y Marne'
        },
        ARA: {
            rhone: 'Ródano',
            loire: 'Loira',
            isere: 'Isère',
            ain: 'Ain',
            savoie: 'Saboya',
            hauteSavoie: 'Alta Saboya',
            allier: 'Allier',
            puyDeDome: 'Puy-de-Dôme'
        },
        OCC: {
            herault: 'Hérault',
            gard: 'Gard',
            aude: 'Aude',
            pyreneesOrientales: 'Pirineos Orientales',
            tarn: 'Tarn',
            hauteGaronne: 'Alto Garona',
            gers: 'Gers',
            lotEtGaronne: 'Lot y Garona'
        },
        NAQ: {
            gironde: 'Gironda',
            charenteMaritime: 'Charente Marítimo',
            dordogne: 'Dordoña',
            landes: 'Landas',
            vienne: 'Vienne',
            hauteVienne: 'Alto Vienne',
            charente: 'Charente',
            correze: 'Corrèze'
        },
        PAC: {
            bouchesDuRhone: 'Bocas del Ródano',
            alpesMaritimes: 'Alpes Marítimos',
            var: 'Var',
            vaucluse: 'Vaucluse',
            alpesDeHauteProvence: 'Alpes de Alta Provenza',
            hautesAlpes: 'Altos Alpes'
        },
        HDF: {
            nord: 'Norte',
            pasDeCalais: 'Pas de Calais',
            somme: 'Somme',
            aisne: 'Aisne',
            oise: 'Oise',
            aisne: 'Aisne'
        }
    },
    
    // Nombres de universidades
    universities: {
        UP1: 'Universidad de París 1 Panteón-Sorbona',
        UP2: 'Universidad de París 2 Panteón-Assas',
        UP3: 'Universidad de París 3 Sorbona Nueva',
        UP4: 'Universidad de París 1 Panteón-Sorbona',
        UP5: 'Universidad de París Descartes',
        UP6: 'Universidad Pierre y Marie Curie',
        UP7: 'Universidad de París Diderot',
        UP8: 'Universidad de París 8 Vincennes-Saint-Denis',
        UP9: 'Universidad de París Dauphine',
        UP10: 'Universidad de París Nanterre',
        UP11: 'Universidad de París-Saclay',
        UP12: 'Universidad de París-Est Créteil',
        UP13: 'Universidad Sorbona París Norte',
        ENS: 'Escuela Normal Superior',
        X: 'Escuela Politécnica'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección completa',
        street: 'Calle',
        houseNumber: 'Número de casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
        department: 'Departamento',
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