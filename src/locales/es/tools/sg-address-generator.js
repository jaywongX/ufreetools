export default {
    name: 'Generador de Direcciones de Singapur - Genera Direcciones Realistas de Singapur en Línea',
    description: 'Generador gratuito de direcciones de Singapur en línea que crea direcciones realistas, números NRIC, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Filtra por región, exporta a JSON/CSV, funciona localmente para privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados Generados',
    generateBtn: 'Generar Datos',
    loadSampleBtn: 'Cargar Muestra y Generar',
    clearAll: 'Borrar Todo',
    noOutput: 'Sin resultados generados',
    preview: 'Vista Previa',
    
    locationTitle: 'Filtro de Ubicación',
    selectRegion: 'Seleccionar Región',
    selectArea: 'Seleccionar Área',
    allRegions: 'Todas las Regiones',
    allAreas: 'Todas las Áreas',
    postalCodeLabel: 'Código Postal',
    
    addressTypeTitle: 'Tipo de Dirección',
    addressTypeResidential: 'Residencial',
    addressTypeCommercial: 'Comercial',
    addressTypeHDB: 'Piso HDB',
    addressTypeCondo: 'Condominio Privado',
    
    identityTitle: 'Información de Identidad',
    fullName: 'Nombre Completo',
    gender: 'Género',
    genderMale: 'Masculino',
    genderFemale: 'Femenino',
    age: 'Edad',
    birthDate: 'Fecha de Nacimiento',
    race: 'Raza',
    raceChinese: 'Chino',
    raceMalay: 'Malayo',
    raceIndian: 'Indio',
    raceOthers: 'Otros',
    
    contactTitle: 'Información de Contacto',
    phoneNumber: 'Número de Teléfono',
    areaCode: 'Código de Área',
    email: 'Correo Electrónico',
    tempEmail: 'Email Temporal',
    
    creditCardTitle: 'Información de Tarjeta de Crédito',
    cardType: 'Tipo de Tarjeta',
    cardNumber: 'Número de Tarjeta',
    expiryDate: 'Fecha de Expiración',
    cvv: 'CVV',
    bankBin: 'BIN Bancario',
    
    careerTitle: 'Perfil Profesional',
    jobTitle: 'Cargo',
    salary: 'Salario',
    companyName: 'Nombre de Empresa',
    companySize: 'Tamaño de Empresa',
    industry: 'Industria',
    employmentStatus: 'Estado Laboral',
    employmentFullTime: 'Tiempo Completo',
    employmentPartTime: 'Medio Tiempo',
    
    idCardTitle: 'Tarjeta NRIC',
    idCardNumber: 'Número NRIC',
    prefixLetter: 'Letra Prefijo',
    serialNumber: 'Número de Serie',
    checkLetter: 'Letra de Verificación',
    
    exportTitle: 'Formato de Exportación',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    downloadBtn: 'Descargar',
    copyBtn: 'Copiar',
    viewDetails: 'Ver Detalles',
    
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese cantidad (1-100)',
    
    generating: 'Generando...',
    generated: 'Generación Completa',
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
    houseNumberLabel: 'Número',
    buildingLabel: 'Edificio',
    unitLabel: 'Unidad',
    postalCodeLabel: 'Código Postal',
    regionLabel: 'Región',
    
    regions: {
        CR: 'Región Central',
        ER: 'Región Este',
        NR: 'Región Norte',
        NER: 'Región Noreste',
        WR: 'Región Oeste'
    },
    
    areas: {
        CR: {
            orchard: 'Orchard',
            riverValley: 'River Valley',
            newton: 'Newton',
            tanglin: 'Tanglin',
            bukitTimah: 'Bukit Timah',
            clementi: 'Clementi',
            queenstown: 'Queenstown'
        },
        ER: {
            bedok: 'Bedok',
            changi: 'Changi',
            pasirRis: 'Pasir Ris',
            tampines: 'Tampines',
            payaLebar: 'Paya Lebar'
        },
        NR: {
            angMoKio: 'Ang Mo Kio',
            bishan: 'Bishan',
            serangoon: 'Serangoon',
            hougang: 'Hougang',
            sengkang: 'Sengkang',
            punggol: 'Punggol'
        },
        NER: {
            hougang: 'Hougang',
            punggol: 'Punggol',
            seletar: 'Seletar',
            sengkang: 'Sengkang',
            serangoon: 'Serangoon'
        },
        WR: {
            jurongEast: 'Jurong Este',
            jurongWest: 'Jurong Oeste',
            bukitBatok: 'Bukit Batok',
            choaChuKang: 'Choa Chu Kang',
            woodlands: 'Woodlands',
            sembawang: 'Sembawang',
            yishun: 'Yishun'
        }
    },
    
    csv: {
        fullAddress: 'Dirección Completa',
        street: 'Calle',
        houseNumber: 'Número',
        building: 'Edificio',
        postalCode: 'Código Postal',
        fullName: 'Nombre',
        gender: 'Género',
        age: 'Edad',
        birthDate: 'Fecha de Nacimiento',
        phone: 'Teléfono',
        email: 'Email',
        cardType: 'Tipo de Tarjeta',
        cardNumber: 'Número de Tarjeta',
        idCardNumber: 'Número NRIC'
    }
};
