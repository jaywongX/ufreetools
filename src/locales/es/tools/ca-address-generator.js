export default {
    name: 'Generador de Direcciones de Canadá - Genera Direcciones Canadienses Reales e Información de Identidad en Línea',
    description: 'Generador gratuito de direcciones de Canadá en línea. Genera direcciones canadienses con formato real, códigos postales, números de teléfono, tarjetas de crédito y perfiles de identidad completos. Filtra por provincia, exporta a JSON/CSV, se ejecuta localmente para privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados Generados',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Ejemplo y Generar',
    clearAll: 'Borrar Todo',
    noOutput: 'Sin resultados aún',
    preview: 'Vista Previa',
    
    locationTitle: 'Filtro de Ubicación',
    selectProvince: 'Seleccionar Provincia',
    selectCity: 'Seleccionar Ciudad',
    allProvinces: 'Todas las Provincias',
    allCities: 'Todas las Ciudades',
    postalCodeLabel: 'Código Postal',
    validatePostalCode: 'Validar Código Postal',
    
    addressTypeTitle: 'Tipo de Dirección',
    addressTypeResidential: 'Residencial',
    addressTypeCommercial: 'Comercial',
    addressTypeVirtual: 'Apartado Postal',
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
    tempEmail: 'Email Temporal',
    
    creditCardTitle: 'Información de Tarjeta de Crédito',
    cardType: 'Tipo de Tarjeta',
    cardNumber: 'Número de Tarjeta',
    expiryDate: 'Fecha de Vencimiento',
    cvv: 'CVV',
    bankBin: 'BIN Bancario',
    
    careerTitle: 'Perfil Profesional',
    jobTitle: 'Puesto de Trabajo',
    salary: 'Salario',
    companyName: 'Nombre de Empresa',
    companySize: 'Tamaño de Empresa',
    industry: 'Industria',
    employmentStatus: 'Estado de Empleo',
    employmentFullTime: 'Tiempo Completo',
    employmentPartTime: 'Medio Tiempo',
    
    sinTitle: 'Número de Seguro Social (SIN)',
    sinNumber: 'Número SIN',
    
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
    
    exportTitle: 'Formato de Exportación',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    exportIdCard: 'Generar Tarjeta de ID',
    exportBusinessCard: 'Generar Tarjeta de Presentación',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalles',
    
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese cantidad (1-100)',
    
    generating: 'Generando...',
    generated: 'Generado',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Por favor ingrese un número entre 1-100',
    
    resultCount: 'Generados {count} registros',
    resultSummary: 'Resumen de Resultados',
    showAll: 'Mostrar Todo',
    collapse: 'Colapsar',
    
    generateOptionsTitle: 'Opciones de Generación',
    
    recordLabel: 'Registro #{num}',
    addressLabel: 'Dirección',
    streetLabel: 'Calle',
    houseNumberLabel: 'Número de Casa',
    buildingLabel: 'Edificio',
    unitLabel: 'Unidad',
    cityLabel: 'Ciudad',
    provinceLabel: 'Provincia',
    postalCodeDisplay: 'Código Postal',
    
    addressUnit: 'Unidad',
    aptNumber: 'Apt',
    suiteNumber: 'Suite',
    pobox: 'Apartado Postal',
    
    idCardImageAlert: 'La generación de tarjeta de ID requiere canvas',
    businessCardAlert: 'La generación de tarjeta de presentación requiere canvas',
    
    provinces: {
        ON: 'Ontario',
        QC: 'Quebec',
        BC: 'Columbia Británica',
        AB: 'Alberta',
        MB: 'Manitoba',
        SK: 'Saskatchewan',
        NS: 'Nueva Escocia',
        NB: 'Nuevo Brunswick',
        NL: 'Terranova y Labrador',
        PE: 'Isla del Príncipe Eduardo',
        NT: 'Territorios del Noroeste',
        YT: 'Yukón',
        NU: 'Nunavut'
    },
    
    cities: {
        ON: {
            toronto: 'Toronto',
            ottawa: 'Ottawa',
            mississauga: 'Mississauga',
            hamilton: 'Hamilton',
            london: 'London',
            markham: 'Markham',
            vaughan: 'Vaughan',
            kitchener: 'Kitchener',
            waterloo: 'Waterloo',
            brampton: 'Brampton'
        },
        QC: {
            montreal: 'Montreal',
            quebec: 'Ciudad de Quebec',
            laval: 'Laval',
            gatineau: 'Gatineau',
            sherbrooke: 'Sherbrooke'
        },
        BC: {
            vancouver: 'Vancouver',
            victoria: 'Victoria',
            burnaby: 'Burnaby',
            richmond: 'Richmond',
            surrey: 'Surrey',
            kelowna: 'Kelowna'
        },
        AB: {
            calgary: 'Calgary',
            edmonton: 'Edmonton',
            redDeer: 'Red Deer',
            lethbridge: 'Lethbridge'
        },
        MB: {
            winnipeg: 'Winnipeg',
            brandon: 'Brandon'
        },
        SK: {
            saskatoon: 'Saskatoon',
            regina: 'Regina'
        },
        NS: {
            halifax: 'Halifax'
        },
        NB: {
            fredericton: 'Fredericton',
            moncton: 'Moncton',
            saintJohn: 'Saint John'
        },
        NL: {
            stJohns: "St. John's"
        },
        PE: {
            charlottetown: 'Charlottetown'
        },
        NT: {
            yellowknife: 'Yellowknife'
        },
        YT: {
            whitehorse: 'Whitehorse'
        },
        NU: {
            iqaluit: 'Iqaluit'
        }
    },
    
    universities: {
        UofT: 'Universidad de Toronto',
        UBC: 'Universidad de Columbia Británica',
        McGill: 'Universidad McGill',
        McMaster: 'Universidad McMaster',
        Waterloo: 'Universidad de Waterloo',
        Alberta: 'Universidad de Alberta',
        Ottawa: 'Universidad de Ottawa',
        Montreal: 'Universidad de Montreal'
    },
    
    csv: {
        fullAddress: 'Dirección Completa',
        street: 'Calle',
        houseNumber: 'Número de Casa',
        building: 'Edificio',
        unit: 'Unidad',
        city: 'Ciudad',
        province: 'Provincia',
        postalCode: 'Código Postal',
        fullName: 'Nombre Completo',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de Nacimiento',
        phone: 'Teléfono',
        email: 'Email',
        cardType: 'Tipo de Tarjeta',
        cardNumber: 'Número de Tarjeta',
        sinNumber: 'Número SIN'
    }
};
