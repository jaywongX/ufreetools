export default {
  name: "Firma y Verificación SM2",
  description: "Firmar datos con claves privadas SM2 y verificar firmas con claves públicas, compatible con múltiples algoritmos hash",
  keyInput: "Entrada de Clave",
  privateKey: "Clave Privada (para Firmar)",
  publicKey: "Clave Pública (para Verificar)",
  privateKeyPlaceholder: "Ingrese su clave privada SM2 en formato hexadecimal",
  publicKeyPlaceholder: "Ingrese su clave pública SM2 en formato hexadecimal",
  generateKeyPair: "Generar Par de Claves",
  clear: "Limpiar",
  keyGenError: "Error al generar par de claves",
  hashAlgorithm: "Algoritmo de Hash",
  processMode: "Modo de Procesamiento",
  originalData: "Datos Originales",
  preHashed: "Pre-Hash",
  sign: "Firmar",
  verify: "Verificar",
  dataToSign: "Datos para Firmar",
  dataToSignPlaceholder: "Ingrese texto o datos para firmar",
  preHashedDataToSign: "Datos Pre-Hash para Firmar",
  preHashedDataToSignPlaceholder: "Ingrese valor hash en formato hexadecimal",
  dataToVerify: "Datos para Verificar",
  dataToVerifyPlaceholder: "Ingrese texto o datos para verificar",
  preHashedDataToVerify: "Datos Pre-Hash para Verificar",
  preHashedDataToVerifyPlaceholder: "Ingrese valor hash en formato hexadecimal",
  signatureToVerify: "Firma para Verificar",
  signatureToVerifyPlaceholder: "Ingrese la firma para verificar",
  inputFormat: "Formato de Entrada",
  outputFormat: "Formato de Salida",
  signatureFormat: "Formato de Firma",
  text: "Texto",
  hex: "Hexadecimal",
  base64: "Base64",
  signature: "Firma",
  copySignature: "Copiar Firma",
  signatureCopied: "Firma copiada al portapapeles",
  copyError: "Error al copiar al portapapeles",
  signError: "Error al crear firma",
  verifyError: "Error al verificar firma",
  invalidInputData: "Datos de entrada inválidos",
  unsupportedInputFormat: "Formato de entrada no compatible",
  unsupportedHashAlgorithm: "Algoritmo hash no compatible",
  waitingForVerification: "Ingrese datos y firma para verificar",
  verificationSuccess: "¡Verificación exitosa! La firma es válida.",
  verificationFailed: "¡Verificación fallida! La firma es inválida.",
  preHashedMustBeHex: "La entrada pre-hash debe estar en formato hexadecimal",
  idParameter: "Parámetro ID",
  idValue: "Valor ID",
  idPlaceholder: "Ingrese valor ID (predeterminado: 1234567812345678)",
  idDescription: "El algoritmo SM2 utiliza un valor ID para la generación y verificación de firmas. El valor predeterminado es 1234567812345678.",
  signatureComponents: "Componentes de Firma (valores R y S)",
  invalidKeyFormat: "Formato de clave inválido",
  invalidSignatureFormat: "Formato de firma inválido",
  formatError: "Error de formato",
  signatureHashMismatch: "Discrepancia en el hash de firma - verifique que los datos y el algoritmo hash coincidan con los utilizados durante la firma",
  copy: "Copiar",
  export: "Exportar",
  signatureExported: "Firma exportada a archivo",
  exportError: "Error al exportar firma",
  privateKeyType: "CLAVE PRIVADA",
  publicKeyType: "CLAVE PÚBLICA", 
  signatureType: "FIRMA",
  derEncodingFailed: "Error al codificar la firma en formato DER",
  invalidIdFormat: "Formato de ID inválido",
  invalidDerFormat: "Formato DER inválido",
  invalidSignatureLength: "Longitud de firma inválida para codificación DER",
  zValue: "Valor hash preprocesado",
  zValueFormula: "Fórmula del valor Z",
  showDetails: "Mostrar detalles",
  hideDetails: "Ocultar detalles",
  zCalculationFailed: "Falló el cálculo del valor Z",
  invalidPublicKeyFormat: "Formato de clave pública inválido",
  importPfx: "Importar PFX/P12",
  enterPin: "Ingresar PIN/Contraseña",
  pinPlaceholder: "Ingrese la contraseña del archivo PFX",
  cancel: "Cancelar",
  confirm: "Confirmar",
  fileReadError: "Error al leer el archivo",
  pfxImportSuccess: "Archivo PFX importado correctamente",
  pfxImportError: "Error al importar el archivo PFX",
  noPrivateKeyFound: "No se encontró una clave privada en el archivo PFX",
  invalidPrivateKeyFormat: "Formato de clave privada inválido en el archivo PFX",
  privateKeyExtractionFailed: "Falló la extracción de la clave privada",
  pkcs8ParseError: "Error al analizar la estructura PKCS#8",
  rsaKeyNotSupported: "Clave RSA detectada. Esta herramienta solo admite claves SM2.",
  rsaCertNotSupported: "Certificado RSA detectado. Esta herramienta solo admite certificados SM2.",
  failedToDerivePublicKey: "No se pudo derivar la clave pública de la clave privada",
  article: {
    title: "Herramienta de Firma Digital SM2 - Creación y Verificación Segura de Firmas en Línea",
    introduction: {
        title: "¿Qué es la Firma Digital SM2?",
        p1: "La firma digital SM2 es un algoritmo criptográfico desarrollado como parte de los estándares criptográficos comerciales de China. Nuestra <strong>herramienta de verificación de firma digital SM2</strong> proporciona una interfaz fácil de usar para crear y verificar firmas digitales utilizando el algoritmo de curva elíptica SM2, que ofrece una seguridad robusta equivalente a RSA de 256 bits mientras utiliza tamaños de clave más pequeños.",
        p2: "Esta herramienta de firma SM2 en línea está específicamente diseñada para resolver el desafío de firmar y verificar datos digitales de forma segura sin instalar software especializado. Ya sea que sea un desarrollador implementando la verificación de firma SM2 en su aplicación, un profesional de seguridad validando certificados digitales, o una empresa que necesita cumplir con los estándares criptográficos chinos, nuestra herramienta proporciona una solución eficiente.",
        p3: "Con la creciente adopción global de los estándares de cifrado SM2, particularmente en regiones que requieren cumplimiento con las regulaciones chinas, tener acceso a un <strong>generador y verificador de firma digital SM2</strong> confiable es esencial para empresas internacionales y profesionales de seguridad."
    },
    applications: {
        title: "Aplicaciones Reales de las Firmas SM2",
        p1: "La verificación de firma SM2 tiene numerosas aplicaciones prácticas en varias industrias donde la integridad de los datos y la autenticación son críticas:",
        scenario1: {
        title: "Tecnología Financiera y Banca",
        description: "En servicios financieros, la <strong>verificación de firma SM2 para banca en línea</strong> ayuda a asegurar transacciones y mantener el cumplimiento normativo. Los bancos que operan en regiones que requieren estándares de criptografía SM utilizan firmas SM2 para autenticar solicitudes de transacciones, verificar identidades de clientes y asegurar comunicaciones interbancarias. La capacidad de verificar rápidamente una firma SM2 asegura que los documentos financieros no hayan sido alterados y provengan de fuentes legítimas."
        },
        scenario2: {
        title: "Gobierno y Sector Público",
        description: "Las agencias gubernamentales que implementan <strong>criptografía SM2 segura para documentos oficiales</strong> confían en las firmas digitales para validar la autenticidad de los registros electrónicos. Nuestra herramienta soporta la verificación de firmas en certificados digitales, comunicaciones oficiales y documentos legales. Esto es particularmente valioso para organizaciones internacionales que tratan con entidades gubernamentales chinas que requieren cumplimiento con estándares criptográficos nacionales."
        },
        scenario3: {
        title: "Comercio Electrónico Transfronterizo y Comercio Internacional",
        description: "Las empresas involucradas en <strong>verificación de firma digital SM2 para comercio transfronterizo</strong> utilizan firmas criptográficas para asegurar contratos, verificar manifiestos de envío y autenticar documentación aduanera. Nuestra herramienta permite a las empresas implementar fácilmente procesos de verificación de firma SM2 sin requerir conocimiento especializado de los principios criptográficos subyacentes, facilitando operaciones internacionales más fluidas mientras se mantienen altos estándares de seguridad."
        }
    },
    tutorial: {
        title: "Cómo Usar la Herramienta de Firma SM2",
        intro: "Siga esta guía paso a paso para crear y verificar firmas digitales SM2 utilizando nuestra herramienta en línea:",
        step1: {
        title: "Paso 1: Gestión de Claves",
        description: "Comience ingresando su clave privada SM2 (para firmar) y clave pública (para verificación). Puede pegar claves existentes en varios formatos (HEX, PEM, Base64 o DER) o generar un nuevo par de claves directamente en la herramienta haciendo clic en el botón 'Generar Par de Claves'. Por seguridad, todas las operaciones criptográficas se realizan localmente en su navegador - sus claves nunca se transmiten a nuestros servidores."
        },
        step2: {
        title: "Paso 2: Configurar Parámetro ID",
        description: "Ingrese el parámetro ID, que es un identificador único utilizado en el algoritmo de firma SM2. El valor predeterminado es '1234567812345678', pero puede personalizarlo según sus requisitos específicos. Puede ingresar el ID en formato Texto, HEX o Base64, dependiendo de su preferencia."
        },
        step3: {
        title: "Paso 3: Crear una Firma",
        description: "En la sección de firma, ingrese los datos que desea firmar y seleccione el formato de entrada apropiado (Texto, HEX o Base64). Haga clic en el botón 'Firmar' para generar la firma. La herramienta mostrará tanto la firma completa como sus componentes (valores R y S). Puede seleccionar su formato de salida preferido (DER, HEX, Base64 o PEM) y copiar o exportar fácilmente la firma."
        },
        step4: {
        title: "Paso 4: Verificar una Firma",
        description: "Para verificar una firma, ingrese los datos originales en la sección de verificación junto con la firma que desea verificar. Seleccione los formatos apropiados tanto para los datos como para la firma, luego haga clic en 'Verificar'. La herramienta verificará instantáneamente si la firma es válida para los datos y clave pública dados, mostrando un mensaje claro de éxito o fracaso junto con información detallada de error si corresponde."
        }
    },
    specifications: {
        title: "Especificaciones Técnicas",
        p1: "Nuestra herramienta de firma SM2 implementa el algoritmo de firma digital de curva elíptica SM2 como se define en el estándar GM/T 0003-2012 publicado por la Administración Estatal de Criptografía de China. La herramienta cumple completamente con estos estándares mientras proporciona características adicionales para facilidad de uso.",
        p2: "Las características técnicas clave incluyen:",
        feature1: "Uso fijo del algoritmo hash SM3 (256 bits) según lo requerido por el estándar",
        feature2: "Soporte para parámetro ID personalizado con múltiples formatos de entrada (Texto/HEX/Base64)",
        feature3: "Múltiples formatos de salida de firma (DER/HEX/Base64/PEM) para compatibilidad con varios sistemas",
        feature4: "Visualización completa de componentes de firma (valores R y S) para verificación técnica",
        feature5: "Soporte para varios formatos de clave (PEM/HEX/Base64/DER) para gestión flexible de claves",
        feature6: "Informes detallados de errores para solucionar problemas de verificación"
    },
    faq: {
        title: "Preguntas Frecuentes",
        q1: "¿Cuál es la diferencia entre las firmas SM2 y otros algoritmos de firma digital?",
        a1: "Las firmas digitales SM2 se basan en la criptografía de curva elíptica (ECC) y son parte de los estándares criptográficos comerciales de China. En comparación con las firmas RSA, el <strong>cifrado de firma SM2</strong> ofrece seguridad equivalente con tamaños de clave más pequeños, haciéndolo más eficiente. A diferencia de estándares internacionales como ECDSA, SM2 utiliza una curva diferente e incorpora la identidad del firmante (ID) en el proceso de generación de firma, añadiendo una capa extra de seguridad. SM2 es particularmente importante para aplicaciones que deben cumplir con regulaciones chinas o operar dentro del marco de ciberseguridad de China.",
        
        q2: "¿Es segura la herramienta de firma SM2 para datos sensibles?",
        a2: "Sí, nuestra <strong>herramienta segura de verificación de firma SM2</strong> realiza todas las operaciones criptográficas directamente en su navegador usando JavaScript del lado del cliente. Sus claves privadas y datos sensibles nunca abandonan su dispositivo ni se transmiten a nuestros servidores. La implementación sigue el estándar de firma digital SM2 (GM/T 0003-2012) y utiliza SM3 para hashing según lo requerido por la especificación. Para aplicaciones empresariales altamente sensibles, recomendamos realizar una revisión adicional de cualquier herramienta en línea, incluida la nuestra, antes de usarla en entornos de producción.",
        
        q3: "¿Por qué importa el parámetro ID en las firmas SM2?",
        a3: "El parámetro ID es una característica única del <strong>algoritmo de firma digital SM2 con ID personalizado</strong> que lo diferencia de otros esquemas de firma basados en ECC. Actúa como una entrada adicional al proceso de generación de firma, esencialmente vinculando la identidad del firmante a la firma. Esto previene ciertos tipos de ataques y añade una capa de autenticación. En la mayoría de las implementaciones, incluida nuestra herramienta, se utiliza un valor predeterminado de '1234567812345678' cuando no se requiere un ID específico, pero las organizaciones a menudo utilizan IDs personalizados relacionados con identidades de usuarios o identificadores de sistema para mejorar la seguridad y trazabilidad.",
        
        q4: "¿Puedo usar firmas SM2 para negocios internacionales fuera de China?",
        a4: "Absolutamente. Aunque SM2 se originó como parte de los estándares criptográficos de China, la <strong>adopción internacional de firmas SM2</strong> está creciendo, particularmente para empresas con operaciones en China o asociaciones con entidades chinas. Nuestra herramienta facilita operaciones criptográficas transfronterizas al soportar múltiples formatos de entrada y salida que son compatibles con varios sistemas internacionales. Para empresas involucradas en comercio internacional, usar firmas SM2 puede ayudar a asegurar el cumplimiento con requisitos regulatorios chinos mientras se mantiene una fuerte seguridad criptográfica que cumple con estándares globales.",
        
        q5: "¿Qué debo hacer si la verificación de firma falla?",
        a5: "Si encuentra un <strong>error de verificación de firma SM2</strong>, verifique los siguientes problemas comunes: 1) Asegúrese de estar usando la clave pública correcta que corresponde a la clave privada utilizada para firmar; 2) Verifique que el parámetro ID coincida con el utilizado durante la generación de la firma; 3) Confirme que los datos que se están verificando son idénticos a los que se firmaron originalmente, incluido el formato (Texto/HEX/Base64); 4) Compruebe que el formato de firma (DER/HEX/Base64/PEM) esté correctamente seleccionado. Nuestra herramienta proporciona mensajes de error detallados para ayudar a diagnosticar problemas específicos. Para problemas persistentes, es posible que necesite regenerar la firma o verificar si el par de claves es válido."
    },
    related: {
        title: "Herramientas Criptográficas Relacionadas",
        description: "Mejore su conjunto de herramientas de seguridad con estas utilidades criptográficas complementarias:",
        tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>Verificador de Firma RSA</a> - Cree y verifique firmas digitales utilizando el ampliamente adoptado algoritmo RSA.",
        tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>Calculadora de Hash</a> - Genere valores hash seguros utilizando varios algoritmos incluyendo SM3.",
        tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>Decodificador de Certificados</a> - Decodifique y examine certificados X.509 incluyendo aquellos que utilizan criptografía SM2."
    }
  }
} 