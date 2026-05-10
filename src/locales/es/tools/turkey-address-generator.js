export default {
    name: 'Generador de Direcciones de Turquía - Genere direcciones reales turcas, información de identidad y datos de contacto en línea',
    description: 'Generador gratuito en línea de direcciones turcas que crea direcciones de formato real turcas, números de identificación, números de teléfono, números de tarjetas de crédito y perfiles completos de identidad. Soporta filtrado por provincia, exportación en formatos JSON/CSV y se ejecuta completamente en el navegador para proteger la privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados Generados',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Ejemplo y Generar',
    clearAll: 'Limpiar Todo',
    noOutput: 'Aún no hay resultados generados',
    preview: 'Previsualizar Datos',
    
    // Filtrado Geográfico
    locationTitle: 'Filtrado Geográfico',
    selectProvince: 'Seleccionar Provincia',
    selectDistrict: 'Seleccionar Distrito',
    allProvinces: 'Todas las Provincias',
    allDistricts: 'Todos los Distritos',
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
    phoneTypeLandline: 'Teléfono Fijo',
    areaCode: 'Código de Área',
    email: 'Dirección de Correo Electrónico',
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
    companyName: 'Nombre de Empresa',
    companySize: 'Tamaño de Empresa',
    industry: 'Industria',
    employmentStatus: 'Estado Laboral',
    employmentFullTime: 'Tiempo Completo',
    employmentPartTime: 'Medio Tiempo',
    
    // Tarjeta de Identidad
    idCardTitle: 'Tarjeta de Identidad Turca',
    idCardNumber: 'Número de Tarjeta de Identidad',
    nationalId: 'Número de Identificación Nacional',
    serialNumber: 'Número Serial',
    checkDigit: 'Dígito de Verificación',
    
    // Huella Digital
    fingerprintTitle: 'Huella Digital',
    os: 'Sistema Operativo',
    osVersion: 'Versión del SO',
    browser: 'Navegador',
    userAgent: 'Agente de Usuario',
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
    exportIdCard: 'Generar Imagen de Tarjeta de Identidad',
    exportBusinessCard: 'Generar Tarjeta de Presentación',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalles',
    
    // Generación por Lotes
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese cantidad (1-100)',
    
    // Mensajes de Notificación
    generating: 'Generando...',
    generated: 'Generación Completada',
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
    districtLabel: 'Distrito',
    provinceLabel: 'Provincia',
    postalCode: 'Código Postal',
    
    // Formato de Dirección
    addressNumber: 'Nº',
    addressFloor: 'Piso',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad Comercial)',
    turkey: 'Turquía',
    postOfficeBox: 'Apartado Postal',
    studentDormitory: 'Residencia Estudiantil',
    teachingBuilding: 'Edificio de Enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Unidad',
    apartment: 'Apartamento',
    
    // Mensajes de Alerta
    idCardImageAlert: 'La generación de imagen de tarjeta de identidad requiere implementación de canvas',
    businessCardAlert: 'La generación de tarjeta de presentación requiere implementación de canvas',
    
    // Nombres de Provincias (Principales provincias turcas)
    provinces: {
        IST: 'Istanbul',
        ANK: 'Ankara',
        IZM: 'Izmir',
        BUR: 'Bursa',
        ANT: 'Antalya',
        ADN: 'Adana',
        GAZ: 'Gaziantep',
        KON: 'Konya',
        MRA: 'Mersin',
        KAY: 'Kayseri',
        ESK: 'Eskisehir',
        TRA: 'Trabzon',
        SAM: 'Samsun',
        MAL: 'Malatya',
        DIA: 'Diyarbakir',
        ERZ: 'Erzurum',
        VAN: 'Van',
        SIV: 'Sivas',
        TOK: 'Tokat',
        COR: 'Corum'
    },
    
    // Nombres de Distritos (Ejemplo de Istanbul)
    districtsData: {
        IST: {
            beyoglu: 'Beyoglu',
            fatih: 'Fatih',
            kadikoy: 'Kadikoy',
            besiktas: 'Besiktas',
            sisli: 'Sisli',
            uskudar: 'Uskudar',
            bakirkoy: 'Bakirkoy',
            zeytinburnu: 'Zeytinburnu',
            beylikduzu: 'Beylikduzu',
            pendik: 'Pendik',
            maltepe: 'Maltepe',
            kartal: 'Kartal',
            tuzla: 'Tuzla',
            catalca: 'Catalca'
        },
        ANK: {
            cankaya: 'Cankaya',
            yenimahalle: 'Yenimahalle',
            altindag: 'Altindag',
            pursaklar: 'Pursaklar',
            eryaman: 'Eryaman',
            etimesgut: 'Etimesgut',
            sincan: 'Sincan'
        },
        IZM: {
            konak: 'Konak',
            karsiyaka: 'Karsiyaka',
            bornova: 'Bornova',
            cigli: 'Cigli',
            bayrakli: 'Bayrakli',
            balcova: 'Balcova',
            guzelbahce: 'Guzelbahce'
        },
        BUR: {
            nilufer: 'Nilufer',
            osmangazi: 'Osmangazi',
            yildirim: 'Yildirim',
            mudanya: 'Mudanya',
            gemlik: 'Gemlik'
        },
        ANT: {
            muratpasa: 'Muratpasa',
            kepez: 'Kepez',
            konyaalti: 'Konyaalti',
            aksu: 'Aksu',
            dosenmeadi: 'Dosenmeadi'
        }
    },
    
    // Nombres de Universidades
    universities: {
        ITU: 'Istanbul Technical University',
        ITU: 'Istanbul University',
        BOUN: 'Bogazici University',
        METU: 'Middle East Technical University',
        HU: 'Hacettepe University',
        ANU: 'Ankara University',
        DEU: 'Dokuz Eylul University'
    },
    
    // Nombres de Columnas CSV
    csv: {
        fullAddress: 'Dirección Completa',
        street: 'Calle',
        houseNumber: 'Número de Casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
        district: 'Distrito',
        province: 'Provincia',
        postalCode: 'Código Postal',
        fullName: 'Nombre Completo',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de Nacimiento',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        cardType: 'Tipo de Tarjeta',
        cardNumber: 'Número de Tarjeta',
        idCardNumber: 'Número de Identificación'
    }
};