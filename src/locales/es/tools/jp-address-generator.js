export default {
    name: 'Generador de Direcciones de Japón - Genera Direcciones Japonesas Reales, Información de Identidad y Contacto en Línea',
    description: 'Generador de direcciones de Japón en línea gratuito. Crea direcciones japonesas con formato auténtico, número de identificación personal (My Number), números de teléfono, tarjetas de crédito y perfiles de identidad completos. Filtra por prefectura, exporta a JSON/CSV, se ejecuta completamente en el navegador para proteger la privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados Generados',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Muestra y Generar',
    clearAll: 'Borrar Todo',
    noOutput: 'Sin resultados generados',
    preview: 'Vista Previa de Datos',
    
    // Filtro geográfico
    locationTitle: 'Filtro de Ubicación Geográfica',
    selectPrefecture: 'Seleccionar Prefectura',
    selectCity: 'Seleccionar Ciudad/Barrio',
    allPrefectures: 'Todas las Prefecturas',
    allCities: 'Todas las Ciudades/Barrios',
    postalCodeLabel: 'Código Postal',
    validatePostalCode: 'Validar Código Postal',
    
    // Tipos de dirección
    addressTypeTitle: 'Tipo de Dirección',
    addressTypeResidential: 'Dirección Residencial',
    addressTypeCommercial: 'Dirección Comercial',
    addressTypeVirtual: 'Buzón Virtual',
    addressTypeCampus: 'Campus Universitario',
    
    // Información de identidad
    identityTitle: 'Información de Identidad',
    fullName: 'Nombre Completo',
    fullNameKana: 'Nombre en Katakana',
    gender: 'Género',
    genderMale: 'Masculino',
    genderFemale: 'Femenino',
    age: 'Edad',
    birthDate: 'Fecha de Nacimiento',
    zodiac: 'Signo Zodiacal',
    bloodType: 'Tipo de Sangre',
    height: 'Estatura',
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
    careerTitle: 'Perfil Profesional',
    jobTitle: 'Cargo',
    salary: 'Salario',
    companyName: 'Nombre de la Empresa',
    companySize: 'Tamaño de la Empresa',
    industry: 'Industria',
    employmentStatus: 'Estado Laboral',
    employmentFullTime: 'Empleado de Tiempo Completo',
    employmentPartTime: 'Empleado por Contrato',
    
    // My Number (Número de Identificación Personal)
    idCardTitle: 'My Number (Número de Identificación Personal)',
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
    exportIdCard: 'Generar Imagen de Tarjeta de Residente',
    exportBusinessCard: 'Generar Tarjeta de Presentación',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalles',
    
    // Generación por lotes
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingresar cantidad (1-100)',
    
    // Mensajes de estado
    generating: 'Generando...',
    generated: 'Generación Completada',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Por favor ingrese un número entre 1-100',
    
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
    postalCodeLabelDisplay: 'Código Postal',
    prefectureLabel: 'Prefectura',
    cityLabel: 'Ciudad/Barrio',
    townLabel: 'Pueblo',
    chomeLabel: 'Chome',
    banLabel: 'Ban',
    goLabel: 'Go',
    buildingLabel: 'Nombre del Edificio',
    floorLabel: 'Piso',
    roomLabel: 'Habitación',
    
    // Formato de dirección
    addressNumber: '-',
    addressFloor: 'P',
    addressRoom: '',
    commercialUnit: ' (Comercial)',
    japan: 'Japón',
    postOfficeBox: 'Apartado Postal',
    studentDormitory: 'Dormitorio Estudiantil',
    teachingBuilding: 'Edificio Académico',
    library: 'Biblioteca',
    buildingUnit: 'Edificio',
    
    // Mensajes de alerta
    idCardImageAlert: 'La generación de imagen de tarjeta de residente requiere implementación de canvas',
    businessCardAlert: 'La generación de tarjeta de presentación requiere implementación de canvas',
    
    // Prefecturas
    prefectures: {
        '01': 'Hokkaido',
        '02': 'Aomori',
        '03': 'Iwate',
        '04': 'Miyagi',
        '05': 'Akita',
        '06': 'Yamagata',
        '07': 'Fukushima',
        '08': 'Ibaraki',
        '09': 'Tochigi',
        '10': 'Gunma',
        '11': 'Saitama',
        '12': 'Chiba',
        '13': 'Tokio',
        '14': 'Kanagawa',
        '15': 'Niigata',
        '16': 'Toyama',
        '17': 'Ishikawa',
        '18': 'Fukui',
        '19': 'Yamanashi',
        '20': 'Nagano',
        '21': 'Gifu',
        '22': 'Shizuoka',
        '23': 'Aichi',
        '24': 'Mie',
        '25': 'Shiga',
        '26': 'Kioto',
        '27': 'Osaka',
        '28': 'Hyogo',
        '29': 'Nara',
        '30': 'Wakayama',
        '31': 'Tottori',
        '32': 'Shimane',
        '33': 'Okayama',
        '34': 'Hiroshima',
        '35': 'Yamaguchi',
        '36': 'Tokushima',
        '37': 'Kagawa',
        '38': 'Ehime',
        '39': 'Kochi',
        '40': 'Fukuoka',
        '41': 'Saga',
        '42': 'Nagasaki',
        '43': 'Kumamoto',
        '44': 'Oita',
        '45': 'Miyazaki',
        '46': 'Kagoshima',
        '47': 'Okinawa'
    },
    
    // Ciudades
    cities: {
        '01': {
            sapporo: 'Sapporo',
            asahikawa: 'Asahikawa',
            hakodate: 'Hakodate',
            obihiro: 'Obihiro'
        },
        '04': {
            sendai: 'Sendai',
            shiogama: 'Shiogama',
            ishinomaki: 'Ishinomaki'
        },
        '13': {
            chiyoda: 'Barrio Chiyoda',
            chuo: 'Barrio Chuo',
            minato: 'Barrio Minato',
            shinjuku: 'Barrio Shinjuku',
            shibuya: 'Barrio Shibuya',
            shinagawa: 'Barrio Shinagawa',
            meguro: 'Barrio Meguro',
            setagaya: 'Barrio Setagaya',
            ota: 'Barrio Ota',
            nerima: 'Barrio Nerima'
        },
        '14': {
            yokohama: 'Yokohama',
            kawasaki: 'Kawasaki',
            sagamihara: 'Sagamihara',
            fujisawa: 'Fujisawa'
        },
        '23': {
            nagoya: 'Nagoya',
            toyohashi: 'Toyohashi',
            okazaki: 'Okazaki'
        },
        '26': {
            kyoto: 'Kioto',
            utsunomiya: 'Uji'
        },
        '27': {
            osaka: 'Osaka',
            sakai: 'Sakai',
            hirakata: 'Hirakata',
            toyonaka: 'Toyonaka'
        },
        '28': {
            kobe: 'Kobe',
            himeji: 'Himeji',
            amagasaki: 'Amagasaki'
        },
        '40': {
            fukuoka: 'Fukuoka',
            kitakyushu: 'Kitakyushu',
            kurume: 'Kurume'
        },
        '47': {
            naha: 'Naha',
            okinawa: 'Okinawa'
        }
    },
    
    // Universidades
    universities: {
        UTokyo: 'Universidad de Tokio',
        KyotoU: 'Universidad de Kioto',
        OsakaU: 'Universidad de Osaka',
        TohokuU: 'Universidad de Tohoku',
        NagoyaU: 'Universidad de Nagoya',
        KyushuU: 'Universidad de Kyushu',
        HokkaidoU: 'Universidad de Hokkaido',
        Keio: 'Universidad Keio',
        Waseda: 'Universidad Waseda'
    },
    
    // Tipos de sangre
    bloodTypes: {
        A: 'Tipo A',
        B: 'Tipo B',
        O: 'Tipo O',
        AB: 'Tipo AB'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección Completa',
        postalCode: 'Código Postal',
        prefecture: 'Prefectura',
        city: 'Ciudad/Barrio',
        town: 'Pueblo',
        building: 'Edificio',
        fullName: 'Nombre Completo',
        fullNameKana: 'Nombre en Katakana',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de Nacimiento',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        cardType: 'Tipo de Tarjeta',
        cardNumber: 'Número de Tarjeta',
        idCardNumber: 'My Number'
    }
};
