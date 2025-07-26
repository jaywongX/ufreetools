export default {
  name: 'Decodificador de Certificados X.509',
  description: 'Herramienta gratuita en línea para decodificar certificados X.509. Analiza certificados SSL/TLS, visualiza detalles, verifica validez, extrae claves públicas y exporta informes.',

  instructions: {
    title: 'Decodificador de Certificados',
    description: 'Sube un archivo de certificado o pega un certificado codificado en PEM para ver sus detalles.'
  },

  dropzone: {
    title: 'Arrastra y suelta tu certificado aquí',
    formats: 'Soporta archivos .crt, .cer, .pem y .der'
  },

  buttons: {
    browse: 'Explorar Archivos',
    decode: 'Decodificar Certificado',
    loadSample: 'Cargar Ejemplo',
    downloadPdf: 'Descargar Informe PDF',
    downloadTxt: 'Descargar Informe de Texto',
    downloadHtml: 'Descargar Informe HTML',
    downloadJson: 'Descargar Informe JSON',
    copyBasic: 'Copiar Info Básica',
    copySubject: 'Copiar Sujeto/Emisor',
    copyAll: 'Copiar Toda la Info',
    copyValue: 'Copiar Valor',
    downloadKey: 'Descargar Clave',
    exportPem: 'Exportar PEM',
    downloadCert: 'Descargar Certificado',
  },

  input: {
    paste: 'O pega los datos del certificado:',
    placeholder: 'Pega tu certificado codificado en PEM (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'Decodificando certificado...',

  error: {
    title: 'Error al decodificar el certificado',
    invalidFormat: 'Formato de certificado inválido',
    invalidBase64: 'No es un certificado codificado en base64 válido',
    invalidStructure: 'Estructura de datos de certificado inválida',
    invalidDer: 'Certificado con formato DER inválido',
    invalidAsn1: 'Certificado inválido: no se pueden analizar los datos ASN.1',
    unsupportedType: 'Tipo de datos de certificado no compatible',
    failedParse: 'Error al analizar los datos del certificado',
    invalidP12: 'Formato de archivo PKCS#12 inválido',
    invalidP12Password: 'Contraseña de archivo PKCS#12 inválida',
    noCertificatesInP12: 'No se encontraron certificados en el archivo PKCS#12',
    unableToProcessP12: 'No se puede procesar el archivo PKCS#12'
  },

  guide: {
    title: 'Cómo usar esta herramienta',
    step1: 'Sube tu archivo de certificado X.509 (.crt, .cer, .pem o .der) o pega los datos del certificado en el área de texto a continuación.',
    step2: 'La herramienta detecta automáticamente el formato (PEM o DER) y lo decodifica.',
    step3: 'Visualiza información detallada del certificado incluyendo sujeto, emisor, validez, extensiones y datos de clave pública.',
    step4: 'Puedes descargar un informe de los detalles del certificado en formato PDF o TXT usando los botones de la parte inferior.'
  },

  tabs: {
    basic: 'Información Básica',
    subject: 'Sujeto y Emisor',
    extensions: 'Extensiones',
    publicKey: 'Clave Pública',
    fingerprints: 'Huellas Digitales',
    raw: 'Certificado Raw'
  },

  results: {
    title: 'Detalles del Certificado',
    serialNumber: 'Número de Serie',
    version: 'Versión',
    sigAlg: 'Algoritmo de Firma',
    validFrom: 'Válido Desde',
    validTo: 'Válido Hasta',
    subject: 'Sujeto',
    issuer: 'Emisor',
    extensions: 'Extensiones',
    publicKey: 'Clave Pública',
    algorithm: 'Algoritmo',
    keySize: 'Tamaño de Clave',
    keyValue: 'Valor de Clave',
    fingerprints: 'Huellas Digitales',
    rawCertificate: 'Certificado Raw',
    field: 'Campo',
    value: 'Valor',
    critical: 'Crítico',
    noExtensions: 'No se encontraron extensiones en este certificado.',
    validity: 'Validez del Certificado',
    expiresIn: 'Expira en {days} días',
    visualization: 'Visualización del Certificado',
    daysRemaining: 'días restantes',
    valid: 'Válido',
    expired: 'Expirado',
    expiringSoon: 'A punto de expirar',
    fieldDescriptions: 'Descripciones de Campos',
    certificateUsage: 'Uso del Certificado',
    certificateChain: 'Cadena de Certificados',
    signatureValue: 'Valor de la Firma',
    notAvailable: 'No disponible',
    noSpecificUsage: 'No se especificó uso específico',
    signatureError: 'Error al analizar el valor de la firma',
    keyDetails: 'Detalles de la Clave',
    enhancedView: 'Vista Mejorada',
    endEntity: 'Entidad Final',
    intermediate: 'Intermedio',
    rootCA: 'CA Raíz',
    endEntityCert: 'Certificado de Entidad Final',
    intermediateCert: 'Certificado Intermedio',
    rootCert: 'Autoridad de Certificación Raíz',
    issuedBy: 'Emitido por',
    unknownIssuer: 'Emisor desconocido',
    notYetValid: 'Aún no válido'
  },

  report: {
    title: 'Informe de Certificado X.509',
    generatedOn: 'Generado el'
  },

  extensions: {
    subjectKeyIdentifier: 'Identificador de Clave del Sujeto',
    keyUsage: 'Uso de Clave',
    subjectAltName: 'Nombre Alternativo del Sujeto',
    basicConstraints: 'Restricciones Básicas',
    crlDistributionPoints: 'Puntos de Distribución CRL',
    certificatePolicies: 'Políticas de Certificado',
    authorityKeyIdentifier: 'Identificador de Clave de la Autoridad',
    extKeyUsage: 'Uso Extendido de Clave',
    authorityInfoAccess: 'Acceso a Información de Autoridad',
    ctPrecertificateScts: 'SCTs de Precertificado CT'
  },

  usage: {
    serverAuth: 'Autenticación de Servidor',
    clientAuth: 'Autenticación de Cliente',
    codeSigning: 'Firma de Código',
    emailProtection: 'Protección de Email',
    timeStamping: 'Sellado de Tiempo',
    ocspSigning: 'Firma OCSP'
  },

  customOID: {
    title: 'Búsqueda de OID Personalizado',
    placeholder: 'Ingrese OID, p.ej., 2.5.29.15',
    lookup: 'Buscar',
    result: 'Resultado',
    value: 'Valor',
    notFound: 'No se encontró información para este OID',
    foundButComplex: 'OID encontrado pero el valor es complejo',
    unknownName: 'OID con nombre desconocido',
    complexValue: 'Valor complejo, no se puede mostrar directamente'
  },

  descriptions: {
    serialNumber: 'Un identificador único para el certificado asignado por la autoridad certificadora',
    version: 'La versión del formato de certificado X.509, típicamente V3',
    sigAlg: 'El algoritmo utilizado para generar la firma del certificado',
    validFrom: 'La fecha y hora cuando el certificado comienza a ser válido',
    validTo: 'La fecha y hora cuando el certificado expira',
    subject: 'Información sobre la entidad a la que se emite el certificado',
    issuer: 'Información sobre la autoridad certificadora que emitió el certificado',
    publicKey: 'Información de la clave pública del titular del certificado',
    extensions: 'Campos adicionales que contienen información sobre el uso del certificado'
  },

  messages: {
    copiedToClipboard: 'Copiado al portapapeles',
    copyError: 'Error al copiar al portapapeles'
  },

  pkcs12: {
    passwordPrompt: 'Por favor, introduzca la contraseña para el archivo PKCS#12',
    noPassword: 'Sin contraseña'
  },

  keyUsages: {
    digitalSignature: 'Firma Digital',
    nonRepudiation: 'No Repudio',
    keyEncipherment: 'Encriptación de Clave',
    dataEncipherment: 'Encriptación de Datos',
    keyAgreement: 'Acuerdo de Clave',
    keyCertSign: 'Firma de Certificado de Clave',
    crlSign: 'Firma de CRL',
    encipherOnly: 'Solo Encriptación',
    decipherOnly: 'Solo Desencriptación'
  }
}; 