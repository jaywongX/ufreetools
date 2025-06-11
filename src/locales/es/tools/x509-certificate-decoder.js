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
  },
  article: {
    title: 'Decodificador de Certificados X.509: Analizar y Validar Certificados SSL/TLS',
    introduction: {
      title: '¿Qué es un Decodificador de Certificados X.509?',
      p1: 'Un <strong>decodificador de certificados X.509</strong> es una herramienta poderosa que ayuda a profesionales de seguridad, desarrolladores web y administradores de sistemas a analizar certificados digitales utilizados en protocolos SSL/TLS. Nuestra herramienta gratuita en línea para decodificar certificados X.509 proporciona un análisis completo de los componentes del certificado, su estado de validez y características de seguridad, sin necesidad de instalar ningún software.',
      p2: 'Los certificados digitales son esenciales para las comunicaciones web seguras, estableciendo conexiones confiables entre navegadores y servidores. Sin embargo, solucionar problemas con los certificados requiere comprender su estructura compleja y datos codificados. El decodificador de certificados X.509 simplifica este proceso al convertir los datos brutos del certificado en información legible, lo que permite identificar rápidamente problemas y verificar la autenticidad del certificado.'
    },
    useCases: {
      title: 'Casos de Uso Comunes para la Decodificación de Certificados',
      case1: '<strong>Verificación de Certificados SSL/TLS</strong>: Valida la autenticidad e integridad de los certificados de sitios web antes de su implementación.',
      case2: '<strong>Supervisión de Expiración de Certificados</strong>: Revisa el período de validez y las fechas de expiración para prevenir interrupciones inesperadas del servicio.',
      case3: '<strong>Validación de la Cadena de Certificados</strong>: Examina las cadenas de certificados para asegurar relaciones de confianza adecuadas entre ellos.',
      case4: '<strong>Solución de Problemas de Configuración de Certificados</strong>: Identifica errores de configuración en los certificados que causan advertencias en los navegadores o problemas de conexión.',
      case5: '<strong>Verificación de Firma Digital</strong>: Inspecciona los algoritmos de firma y parámetros de clave pública del certificado para evaluaciones de seguridad.'
    },
    faq: {
      title: 'Preguntas Frecuentes sobre los Certificados X.509',
      q1: '¿Qué información puedo extraer de un certificado X.509?',
      a1: 'Utilizando nuestro <strong>decodificador de certificados X.509</strong>, puedes extraer información completa, incluyendo detalles del emisor, información del titular, período de validez, parámetros de clave pública, extensiones (como Subject Alternative Names), algoritmo de firma digital y huellas digitales del certificado. La herramienta también proporciona indicadores visuales sobre la salud del certificado y su estado de expiración, facilitando la identificación de certificados que necesitan renovación.',
      q2: '¿Cómo sé si mi certificado es confiado por los navegadores?',
      a2: 'Un certificado suele ser confiado por los navegadores si fue emitido por una Autoridad Certificadora reconocida (CA) y forma una cadena de confianza válida. Nuestra herramienta de decodificación te ayuda a visualizar la cadena de certificados y verificar la validez de cada uno. Los indicadores clave incluyen el emisor del certificado (debe ser una CA de confianza), fechas válidas (no expirado), restricciones básicas adecuadas (para certificados intermedios) y extensiones de uso de clave apropiadas. La confianza del navegador también depende de que el certificado no haya sido revocado, lo cual puede verificarse mediante la información OCSP o CRL incluida en el certificado.',
      q3: '¿Cuál es la diferencia entre los formatos PEM y DER de certificados?',
      a3: 'PEM (Privacy Enhanced Mail) y DER (Distinguished Encoding Rules) son dos formatos comunes para certificados X.509. El <strong>formato PEM</strong> está codificado en Base64, comienza con "-----BEGIN CERTIFICATE-----" y es texto legible por humanos. Se usa comúnmente en servidores web y correo electrónico. El <strong>formato DER</strong> está codificado en binario y no es legible para humanos, aunque es más compacto. Nuestra herramienta de decodificación de certificados admite ambos formatos automáticamente, detectando y analizando el formato apropiado sin necesidad de selección manual.',
      q4: '¿Cómo puedo comprobar si mi certificado admite características específicas de TLS?',
      a4: 'Para comprobar el soporte de características de TLS en tu certificado, examina las extensiones <strong>Extended Key Usage</strong> y <strong>Key Usage</strong> con nuestra herramienta de decodificación de certificados. Para autenticación de servidor (servidores web), busca el valor "Server Authentication" (1.3.6.1.5.5.7.3.1) dentro de Extended Key Usage. La extensión Key Usage indica las operaciones permitidas como firma digital o cifrado de clave. Además, revisa el algoritmo de firma para asegurarte de que utiliza algoritmos modernos y seguros (como SHA-256 con RSA o ECDSA), en lugar de algoritmos obsoletos (como SHA-1 o MD5).',
      q5: '¿Qué debo hacer si mi certificado está próximo a vencerse?',
      a5: 'Si nuestra <strong>herramienta de decodificación de certificados</strong> muestra que tu certificado está próximo a vencerse (habitualmente dentro de 30 días), debes renovarlo oportunamente a través de tu proveedor de certificados o Autoridad Certificadora. El proceso de renovación generalmente implica: 1) Generar una nueva Solicitud de Firma de Certificado (CSR), 2) Enviarla a tu CA, 3) Completar los requisitos de validación, y 4) Instalar el nuevo certificado en tu servidor. Recomendamos iniciar este proceso al menos 2-4 semanas antes de la expiración para evitar interrupciones del servicio o advertencias de seguridad para los usuarios.'
    },
    tutorial: {
      title: 'Cómo Usar el Decodificador de Certificados X.509',
      step1: {
        title: 'Cargar o Pegar Tu Certificado',
        content: 'Comienza cargando tu archivo de certificado (.crt, .cer, .pem o .der) usando el cargador de archivos, o pega directamente el texto del certificado codificado en PEM en el cuadro de entrada. Nuestra herramienta admite funcionalidad de arrastrar y soltar para facilitar la carga de archivos. Si no tienes un certificado para analizar, puedes hacer clic en el botón "Cargar Ejemplo" para ver cómo funciona la herramienta con un certificado de demostración.'
      },
      step2: {
        title: 'Decodificar el Certificado',
        content: 'Una vez que tu certificado esté cargado, haz clic en el botón "Decodificar Certificado". Nuestra herramienta detectará automáticamente el formato (PEM o DER) y analizará los datos del certificado. El procesamiento ocurre completamente en tu navegador, asegurando que tus datos nunca salgan de tu dispositivo, lo que lo convierte en una opción segura para analizar certificados sensibles.'
      },
      step3: {
        title: 'Analizar los Detalles del Certificado',
        content: 'Tras la decodificación, la herramienta mostrará información completa del certificado organizada en pestañas fáciles de navegar. La pestaña "Información Básica" muestra detalles esenciales como el período de validez, número de serie y algoritmo de firma. Los indicadores visuales muestran claramente si el certificado es válido, está próximo a vencer o ya ha expirado. Puedes explorar información más detallada en pestañas especializadas para Titular &amp; Emisor, Extensiones, Clave Pública, entre otras.'
      },
      step4: {
        title: 'Exportar y Descargar Informes',
        content: 'Para guardar o compartir tu análisis del certificado, utiliza las funciones de exportación al final de la sección de resultados. Puedes descargar un informe completo en múltiples formatos (PDF, TXT, HTML o JSON) o copiar secciones específicas al portapapeles. Estos informes son útiles para documentación, cumplimiento normativo o compartir con compañeros durante la solución de problemas.'
      }
    },
    resources: {
      title: 'Recursos Adicionales',
      intro: 'Amplía tus conocimientos sobre certificados X.509 y temas relacionados con seguridad con estos recursos valiosos:',
      relatedTools: 'Herramientas de Seguridad Relacionadas',
      tool1: 'Generador de Hash - Crear hashes criptográficos para verificación de datos',
      tool2: 'Codificador/Decodificador Base64 - Convertir entre formatos binarios y Base64',
      tool3: 'Decodificador JWT - Analizar tokens web JSON usados en autenticación',
      externalLinks: 'Enlaces Externos',
      external1: 'IETF RFC 5280 - Infraestructura de Clave Pública X.509 en Internet',
      external2: 'Wikipedia - Visión General del Estándar X.509',
      external3: 'SSL.com - ¿Qué es un Certificado X.509?'
    },
    conclusion: {
      title: 'Conclusión',
      content: 'El <strong>decodificador de certificados X.509</strong> es una herramienta esencial para cualquier persona que trabaje con certificados digitales y comunicaciones seguras. Al proporcionar información clara y detallada sobre la estructura y validez de los certificados, nuestra herramienta te ayuda a garantizar que tus implementaciones SSL/TLS sean seguras y libres de errores. Ya seas un profesional de seguridad realizando auditorías, un desarrollador web solucionando problemas de HTTPS o un administrador de TI gestionando despliegues de certificados, este decodificador simplifica el análisis de certificados y mejora tus prácticas de seguridad.'
    }
  }
} 