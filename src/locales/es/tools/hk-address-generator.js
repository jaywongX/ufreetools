export default {
    name: 'Generador de Direcciones de HK - Genere direcciones reales de Hong Kong, información de identidad y datos de contacto en línea',
    description: 'Generador gratuito en línea de direcciones de HK que crea direcciones de Hong Kong con formato real, números de identificación, teléfonos, números de tarjetas de crédito y perfiles completos de identidad. Soporta filtrado por distrito, exportación en formatos JSON/CSV y se ejecuta completamente en el navegador para proteger la privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados Generados',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Ejemplo y Generar',
    clearAll: 'Limpiar Todo',
    noOutput: 'Aún no hay resultados generados',
    preview: 'Previsualizar Datos',
    
    // Filtrado Geográfico
    locationTitle: 'Filtrado Geográfico',
    selectDistrict: 'Seleccionar Distrito',
    selectArea: 'Seleccionar Área',
    allDistricts: 'Todos los Distritos',
    allAreas: 'Todas las Áreas',
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
    idCardTitle: 'Tarjeta de Identidad de Hong Kong',
    idCardNumber: 'Número de Tarjeta de Identidad',
    prefixLetter: 'Letra Prefija',
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
    
    // Formato de Dirección
    addressNumber: 'Nº',
    addressFloor: 'Piso',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad Comercial)',
    hongKong: 'Hong Kong',
    postOfficeBox: 'Apartado Postal',
    studentDormitory: 'Residencia Estudiantil',
    teachingBuilding: 'Edificio de Enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Unidad',
    
    // Mensajes de Alerta
    idCardImageAlert: 'La generación de imagen de tarjeta de identidad requiere implementación de canvas',
    businessCardAlert: 'La generación de tarjeta de presentación requiere implementación de canvas',
    
    // Nombres de Distritos
    districts: {
        CW: 'Central y Occidental',
        WAN: 'Wan Chai',
        E: 'Del Este',
        S: 'Del Sur',
        YTM: 'Yau Tsim Mong',
        SSP: 'Sham Shui Po',
        KC: 'Ciudad Kowloon',
        WTS: 'Wong Tai Sin',
        KT: 'Kwun Tong',
        TM: 'Tuen Mun',
        YL: 'Yuen Long',
        N: 'Del Norte',
        TP: 'Tai Po',
        ST: 'Sha Tin',
        SK: 'Sai Kung',
        TW: 'Tsuen Wan',
        KW: 'Kwai Tsing',
        IS: 'Islas'
    },
    
    // Nombres de Áreas
    areas: {
        CW: {
            central: 'Central',
            sheungWan: 'Sheung Wan',
            saiWan: 'Sai Wan',
            midLevels: 'Niveles Medios'
        },
        WAN: {
            wanChai: 'Wan Chai',
            causewayBay: 'Bahía Causeway',
            happyValley: 'Valle Feliz',
            taiHang: 'Tai Hang'
        },
        E: {
            northPoint: 'North Point',
            quarryBay: 'Quarry Bay',
            taiKooShing: 'Tai Koo Shing',
            shauKeiWan: 'Shau Kei Wan',
            chaiWan: 'Chai Wan'
        },
        S: {
            repulseBay: 'Bahía Repulse',
            deepWaterBay: 'Bahía Deep Water',
            stanley: 'Stanley',
            aberdeen: 'Aberdeen',
            apLeiChau: 'Ap Lei Chau'
        },
        YTM: {
            tsimShaTsui: 'Tsim Sha Tsui',
            yauMaTei: 'Yau Ma Tei',
            mongKok: 'Mong Kok',
            jordan: 'Jordan'
        },
        SSP: {
            shamShuiPo: 'Sham Shui Po',
            cheungShaWan: 'Cheung Sha Wan',
            laiChiKok: 'Lai Chi Kok',
            shekKipMei: 'Shek Kip Mei'
        },
        KC: {
            kowloonCity: 'Ciudad Kowloon',
            toKwaWan: 'To Kwa Wan',
            hungHom: 'Hung Hom',
            hoManTin: 'Ho Man Tin'
        },
        WTS: {
            wongTaiSin: 'Wong Tai Sin',
            diamondHill: 'Colina Diamante',
            sanPoKong: 'San Po Kong',
            lokFu: 'Lok Fu'
        },
        KT: {
            kwunTong: 'Kwun Tong',
            lamTin: 'Lam Tin',
            ngauTauKok: 'Ngau Tau Kok',
            kowloonBay: 'Bahía Kowloon'
        },
        TM: {
            tuenMun: 'Tuen Mun',
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            tsingShan: 'Tsing Shan'
        },
        YL: {
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            kamTin: 'Kam Tin',
            pingShan: 'Ping Shan'
        },
        N: {
            sheungShui: 'Sheung Shui',
            fanLing: 'Fan Ling',
            shaTauKok: 'Sha Tau Kok',
            taKuLing: 'Ta Ku Ling'
        },
        TP: {
            taiPo: 'Tai Po',
            taiPoMarket: 'Mercado Tai Po',
            taiWo: 'Tai Wo',
            lamTsuen: 'Lam Tsuen'
        },
        ST: {
            shaTin: 'Sha Tin',
            taiWai: 'Tai Wai',
            maOnShan: 'Ma On Shan',
            foTan: 'Fo Tan'
        },
        SK: {
            saiKung: 'Sai Kung',
            tseungKwanO: 'Tseung Kwan O',
            hangHau: 'Hang Hau',
            clearWaterBay: 'Bahía Clear Water'
        },
        TW: {
            tsuenWan: 'Tsuen Wan',
            kwaiChung: 'Kwai Chung',
            tsingYi: 'Tsing Yi',
            shamTseng: 'Sham Tseng'
        }
    },
    
    // Nombres de Universidades
    universities: {
        HKU: 'Universidad de Hong Kong',
        CUHK: 'Universidad China de Hong Kong',
        HKUST: 'Universidad de Ciencia y Tecnología de Hong Kong',
        PolyU: 'Universidad Politécnica de Hong Kong',
        CityU: 'Universidad Ciudad de Hong Kong'
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