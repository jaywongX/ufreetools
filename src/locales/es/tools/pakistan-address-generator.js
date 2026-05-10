export default {
   name: 'Generador de direcciones Pakistán - Genere direcciones pakistaníes reales, información de identidad y datos de contacto en línea',
   description: 'Generador de direcciones pakistaní en línea gratuito que crea direcciones pakistaníes con formato real, números de identificación, números de teléfono, números de tarjetas de crédito y perfiles de identidad completos. Admite filtrado por provincia, formatos de exportación JSON/CSV y se ejecuta completamente en el navegador para protección de privacidad.',
   inputTitle: 'Configuración de generación',
   outputTitle: 'Resultados generados',
   generateBtn: 'Generar datos',
   loadSampleBtn: 'Cargar ejemplo y generar',
   clearAll: 'Borrar todo',
   noOutput: 'Aún no se han generado resultados',
   preview: 'Vista previa de datos',
   
   // Filtrado geográfico
   locationTitle: 'Filtrado geográfico',
   selectRegion: 'Seleccionar provincia/región',
   allRegions: 'Todas las provincias/regiones',
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
   idCardTitle: 'Tarjeta de identidad pakistaní',
   idCardNumber: 'Número de tarjeta de identidad',
   
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
   regionLabel: 'Provincia/Región',
   postalCode: 'Código postal',
   
   // Formato de dirección
   addressNumber: 'N°',
   addressFloor: 'Piso',
   addressUnit: 'Unidad',
   commercialUnit: '(Unidad comercial)',
   pakistan: 'Pakistán',
   postOfficeBox: 'Casilla de correo',
   studentDormitory: 'Residencia estudiantil',
   teachingBuilding: 'Edificio de enseñanza',
   library: 'Biblioteca',
   buildingUnit: 'Unidad',
   apartment: 'Apartamento',
   
   // Nombres de provincias/regiones (4 provincias + territorio de Pakistán)
   regions: {
       'Punjab': 'Punyab',
       'Sindh': 'Sind',
       'Khyber Pakhtunkhwa': 'Jáiber Pajtunjua',
       'Balochistan': 'Baluchistán',
       'Islamabad Capital Territory': 'Territorio Capital de Islamabad'
   },
   
   // Nombres de universidades
   universities: {
       'LUMS': 'Universidad de Ciencias de la Gestión de Lahore',
       'PU': 'Universidad del Punyab',
       'KU': 'Universidad de Karachi',
       'QAU': 'Universidad Quaid-i-Azam',
       'COMSATS': 'Universidad COMSATS de Islamabad',
       'NUST': 'Universidad Nacional de Ciencias y Tecnología',
       'IBA': 'Instituto de Administración de Empresas',
       'PIDE': 'Instituto de Investigación del Desarrollo de Pakistán',
       'NCA': 'Colegio Nacional de Artes'
   },
   
   // Nombres de columnas CSV
   csv: {
       fullAddress: 'Dirección completa',
       street: 'Calle',
       houseNumber: 'Número de casa',
       building: 'Edificio',
       floor: 'Piso',
       unit: 'Unidad',
       region: 'Provincia/Región',
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