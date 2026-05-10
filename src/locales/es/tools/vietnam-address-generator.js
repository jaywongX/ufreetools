export default {
    name: 'Generador de direcciones Vietnam - Genere direcciones vietnamitas reales, información de identidad y datos de contacto en línea',
    description: 'Generador de direcciones vietnamita en línea gratuito que crea direcciones vietnamitas con formato real, números de identificación, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por provincia, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
    inputTitle: 'Configuración de generación',
    outputTitle: 'Resultados generados',
    generateBtn: 'Generar datos',
    loadSampleBtn: 'Cargar ejemplo y generar',
    clearAll: 'Borrar todo',
    noOutput: 'Aún no se han generado resultados',
    preview: 'Vista previa de datos',
    
    // Filtrado geográfico
    locationTitle: 'Filtrado geográfico',
    selectProvince: 'Seleccionar provincia/ciudad',
    selectDistrict: 'Seleccionar distrito',
    allProvinces: 'Todas las provincias/ciudades',
    allDistricts: 'Todos los distritos',
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
    bankBin: 'BIN del banco',
    
    // Carrera
    careerTitle: 'Perfil profesional',
    jobTitle: 'Cargo',
    salary: 'Salario',
    companyName: 'Nombre de la empresa',
    companySize: 'Tamaño de la empresa',
    industry: 'Industria',
    employmentStatus: 'Estado de empleo',
    employmentFullTime: 'Tiempo completo',
    employmentPartTime: 'Medio tiempo',
    
    // Tarjeta de identificación
    idCardTitle: 'Tarjeta de identificación vietnamita',
    idCardNumber: 'Número de tarjeta de identificación',
    cmndNumber: 'Número CMND',
    cccdNumber: 'Número CCCD',
    serialNumber: 'Número de serie',
    
    // Huella digital
    fingerprintTitle: 'Huella digital',
    os: 'Sistema operativo',
    osVersion: 'Versión del sistema',
    browser: 'Navegador',
    userAgent: 'User Agent',
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
    exportIdCard: 'Generar imagen de tarjeta de identificación',
    exportBusinessCard: 'Generar tarjeta de presentación',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver detalles',
    
    // Generación por lotes
    batchTitle: 'Generación por lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese cantidad (1-100)',
    
    // Mensajes de notificación
    generating: 'Generando...',
    generated: 'Generación completa',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Por favor ingrese un número entre 1-100',
    
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
    wardLabel: 'Barrio',
    districtLabel: 'Distrito',
    provinceLabel: 'Provincia/Ciudad',
    postalCode: 'Código postal',
    
    // Formato de dirección
    addressNumber: 'Núm.',
    addressFloor: 'P',
    addressUnit: 'Unidad',
    commercialUnit: '(Unidad comercial)',
    vietnam: 'Vietnam',
    postOfficeBox: 'Apartado postal',
    studentDormitory: 'Dormitorio estudiantil',
    teachingBuilding: 'Edificio de enseñanza',
    library: 'Biblioteca',
    buildingUnit: 'Unidad',
    apartment: 'Apartamento',
    
    // Mensajes de alerta
    idCardImageAlert: 'La generación de imágenes de tarjetas de identificación requiere implementación de canvas',
    businessCardAlert: 'La generación de tarjetas de presentación requiere implementación de canvas',
    
    // Nombres de provincias (provincias vietnamitas)
    provinces: {
        HN: 'Hanói',
        HCM: 'Ciudad Ho Chi Minh',
        HP: 'Hai Phong',
        DN: 'Da Nang',
        CT: 'Can Tho',
        BH: 'Ba Ria-Vung Tau',
        BD: 'Binh Duong',
        QN: 'Quang Ninh',
        QG: 'Quang Nam',
        KG: 'Ca Mau',
        DT: 'Dong Nai',
        HB: 'Ha Nam',
        TH: 'Thai Binh',
        NB: 'Nam Dinh',
        VL: 'Vinh Long',
        TG: 'Soc Trang',
        NT: 'Ninh Thuan',
        PY: 'Phu Yen',
        TV: 'Tay Ninh',
        BD: 'Binh Dinh',
        HT: 'Hoa Binh',
        TB: 'Tuyen Quang',
        TN: 'Thai Nguyen',
        LC: 'Lai Chau',
        YB: 'Yen Bai',
        DB: 'Dien Bien',
        LA: 'Lao Cai',
        CB: 'Cao Bang',
        LD: 'Lam Dong',
        DC: 'Dak Lak',
        QN: 'Quang Binh',
        QT: 'Quang Tri',
        HT: 'Ha Tinh',
        NA: 'Nghe An',
        TT: 'Thanh Hoa',
        NB: 'Ninh Binh',
        ST: 'An Giang',
        CT: 'Tra Vinh',
        BP: 'Ben Tre',
        BL: 'Bac Lieu',
        KG: 'Ca Mau',
        CM: 'Ca Mau'
    },
    
    // Datos de distritos (ejemplos de Hanói y Ciudad Ho Chi Minh)
    districtsData: {
        HN: {
            hoanKiem: 'Hoan Kiem',
            baDinh: 'Ba Dinh',
            dongDa: 'Dong Da',
            haiBaTrung: 'Hai Ba Trung',
            thanhXuan: 'Thanh Xuan',
            cauGiay: 'Cau Giay',
            hoangMai: 'Hoang Mai',
            longBien: 'Long Bien',
            tayHo: 'Tay Ho',
            bacTuLiem: 'Bac Tu Liem',
            namTuLiem: 'Nam Tu Liem',
            haDong: 'Ha Dong'
        },
        HCM: {
            quan1: 'Distrito 1',
            quan3: 'Distrito 3',
            quan4: 'Distrito 4',
            quan5: 'Distrito 5',
            quan6: 'Distrito 6',
            quan7: 'Distrito 7',
            quan10: 'Distrito 10',
            quan11: 'Distrito 11',
            binhThanh: 'Binh Thanh',
            phuNhuan: 'Phu Nhuan',
            tanBinh: 'Tan Binh',
            goVap: 'Go Vap',
            binhChanh: 'Binh Chanh',
            thuDuc: 'Thu Duc'
        },
        DN: {
            haiChau: 'Hai Chau',
            thanhKhe: 'Thanh Khe',
            sonTra: 'Son Tra',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'Hong Bang',
            LeChan: 'Le Chan',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'Hai An',
            KiAn: 'Ki An'
        }
    },
    
    // Nombres de universidades
    universities: {
        HUST: 'Universidad de Ciencia y Tecnología de Hanói',
        VNU: 'Universidad Nacional de Vietnam',
        HANU: 'Universidad Nacional de Hanói',
        HCMUS: 'Universidad Nacional de Ciudad Ho Chi Minh',
        RMIT: 'Universidad RMIT Vietnam',
        FTU: 'Universidad de Comercio Exterior',
        NEU: 'Universidad Nacional de Economía',
        HPU: 'Universidad de Farmacia de Hanói',
        PTIT: 'Instituto de Tecnología de Correos y Telecomunicaciones',
        FPT: 'Universidad FPT'
    },
    
    // Nombres de columnas CSV
    csv: {
        fullAddress: 'Dirección completa',
        street: 'Calle',
        houseNumber: 'Número de casa',
        building: 'Edificio',
        floor: 'Piso',
        unit: 'Unidad',
        ward: 'Barrio',
        district: 'Distrito',
        province: 'Provincia/Ciudad',
        postalCode: 'Código postal',
        fullName: 'Nombre completo',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de nacimiento',
        phone: 'Teléfono',
        email: 'Correo electrónico',
        cardType: 'Tipo de tarjeta',
        cardNumber: 'Número de tarjeta',
        idCardNumber: 'Número de tarjeta de identificación'
    }
};