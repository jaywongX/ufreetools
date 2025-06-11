export default {
  name: 'Calculadora de Hash en Línea | Soporta SHA-256, MD5, SHA-3, BLAKE3, SM3 y más',
  description: 'Calculadora gratuita de hash en línea que soporta algoritmos como SHA-256, MD5, SHA-3, BLAKE3, SM3 y otros para verificación de integridad de archivos, seguridad de datos y más.',
  input: {
    title: 'Entrada',
    text: 'Texto',
    file: 'Archivo',
    textPlaceholder: 'Ingrese el texto para calcular su hash...',
    fileSelect: 'Seleccionar archivo',
    fileDrop: 'Arrastre el archivo aquí o haga clic para cargarlo',
    fileSelected: 'Archivo seleccionado: {name}',
    fileSize: '{size}',
    removeFile: 'Eliminar archivo',
    localProcessing: 'El archivo se procesa localmente, no se carga al servidor',
    encoding: 'Codificación',
    selectAlgorithm: 'Seleccione un algoritmo',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: 'Calcular hash',
    calculating: 'Calculando...',
    clear: 'Limpiar entrada',
    hashValue: 'Valor hash'
  },
  algorithms: {
    title: 'Algoritmos',
    selectAll: 'Seleccionar todos',
    deselectAll: 'Deseleccionar todos',
    md5: 'MD5',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sha3_224: 'SHA3-224',
    sha3_256: 'SHA3-256',
    sha3_384: 'SHA3-384',
    sha3_512: 'SHA3-512',
    ripemd160: 'RIPEMD-160',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    whirlpool: 'Whirlpool',
    crc32: 'CRC32',
    hmac: 'Opciones HMAC',
    key: 'Clave HMAC',
    keyPlaceholder: 'Ingrese una clave HMAC'
  },
  results: {
    title: 'Resultados',
    algorithm: 'Algoritmo',
    digest: 'Resumen',
    noInput: 'Introduzca texto o seleccione un archivo para calcular el hash',
    calculating: 'Calculando...',
    copy: 'Copiar',
    copied: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar. Por favor, copie manualmente',
    copyAll: 'Copiar todo',
    download: 'Descargar resultados',
    fileInfo: 'Información del archivo',
    fileName: 'Nombre',
    fileSize: 'Tamaño',
    fileType: 'Tipo',
    lastModified: 'Última modificación',
    hexFormat: 'Formato hexadecimal',
    base64Format: 'Formato Base64',
    upperHexFormat: 'Formato hexadecimal en mayúsculas',
    hashValue: 'Valor hash',
    allHashesTitle: 'Todos los resultados de hash',
    export: 'Exportar a CSV',
    copyToClipboard: 'Copiar al portapapeles'
  },
  verification: {
    title: 'Verificación de hash',
    inputVerifyHash: 'Ingrese el hash a verificar',
    placeholder: 'Ingrese el hash para comparar...',
    paste: 'Pegue el hash para verificar',
    matches: '¡Los hashes coinciden!',
    doesNotMatch: 'Los hashes no coinciden',
    notFound: 'Algoritmo no encontrado',
    verify: 'Verificar',
    autoDetect: 'Detectar automáticamente el algoritmo',
    result: 'Resultado de verificación'
  },
  options: {
    title: 'Opciones',
    uppercase: 'Mostrar en mayúsculas',
    showTiming: 'Mostrar tiempo de cálculo',
    autoCalculate: 'Cálculo automático',
    formatOutput: 'Formatear salida larga',
    binaryOutput: 'Vista binaria (para archivos no textuales)',
    compareHashes: 'Comparar hashes',
    hmacMode: 'Activar modo HMAC',
    autoCalculate: 'Cálculo automático',
    showAllHashes: 'Mostrar todos los algoritmos'
  },
  tools: {
    title: 'Herramientas adicionales',
    batchProcessing: 'Procesamiento por lotes',
    fileHashTool: 'Directorio de hashes de archivos',
    hashIdentifier: 'Identificador de tipo de hash',
    hmacGenerator: 'Generador HMAC',
    checksumVerifier: 'Verificador de suma de comprobación',
    passwordHasher: 'Hasher de contraseñas'
  },
  batchTool: {
    title: 'Procesamiento por lotes',
    addFiles: 'Agregar archivos',
    processFiles: 'Procesar archivos',
    clearAll: 'Limpiar todo',
    fileName: 'Nombre del archivo',
    algorithm: 'Algoritmo',
    status: 'Estado',
    actions: 'Acciones',
    waiting: 'Esperando',
    processing: 'Procesando',
    complete: 'Completado',
    failed: 'Fallido',
    remove: 'Eliminar',
    filesSelected: '{count} archivos seleccionados',
    exportResults: 'Exportar resultados',
    selectAlgorithm: 'Seleccionar algoritmo para todos los archivos'
  },
  messages: {
    fileTooBig: 'El archivo es demasiado grande. Tamaño máximo permitido: 100MB.',
    hashCalculated: 'Hash calculado correctamente',
    invalidInput: 'Entrada inválida',
    readError: 'No se pudo leer el archivo',
    processingError: 'Error al procesar el archivo: {error}',
    algorithmNotAvailable: 'Algoritmo no disponible. Instale la librería necesaria.',
    algorithmFallback: '{algorithm} no disponible, usando {fallback} como alternativa',
    moduleNotReady: 'El módulo {name} aún no está listo',
    algorithmError: 'Error en {algorithm}: {error}'
  },
  security: {
    warning: 'Usar herramientas de hash en conexiones HTTP inseguras puede implicar riesgos'
  },
  algorithmDetails: {
    title: 'Sobre los algoritmos de hash',
    usage: 'Uso común',
    safe: 'Seguridad',
    md2: {
      name: 'MD2 (128 bits)',
      description: 'MD2 es una función hash ampliamente usada que genera un valor hash de 128 bits (16 bytes), generalmente representado como 32 caracteres hexadecimales.',
      usage: 'Verificación de integridad de archivos, almacenamiento de contraseñas (inseguro)',
      security: 'Se ha demostrado que carece de resistencia a colisiones; no debe usarse en entornos seguros.'
    },
    md4: {
      name: 'MD4 (128 bits)',
      description: 'MD4 es una función hash popular que produce un valor hash de 128 bits (16 bytes), mostrado típicamente como 32 dígitos hexadecimales.',
      usage: 'Verificación de integridad de archivos, almacenamiento de contraseñas (inseguro)',
      security: 'Demostradamente vulnerable a colisiones; no recomendado para aplicaciones sensibles a la seguridad.'
    },
    md5: {
      name: 'MD5 (128 bits)',
      description: 'MD5 es una función hash muy utilizada que genera un valor hash de 128 bits (16 bytes), normalmente mostrado como 32 caracteres hexadecimales.',
      usage: 'Verificación de integridad de archivos, almacenamiento de contraseñas (inseguro)',
      security: 'Inseguro debido a vulnerabilidades conocidas; no debe usarse en contextos críticos.'
    },
    sha1: {
      name: 'SHA-1 (160 bits)',
      description: 'SHA-1 es una función hash criptográfica que genera un valor de 160 bits (20 bytes), representado comúnmente como 40 caracteres hexadecimales.',
      usage: 'Sistemas de control de versiones (Git), verificación de integridad',
      security: 'Vulnerable a ataques de colisión; no recomendado para nuevas implementaciones.'
    },
    sha224: {
      name: 'SHA-224 (224 bits)',
      description: 'SHA-224 es parte de la familia SHA-2, produciendo un hash de 224 bits (28 bytes).',
      usage: 'Escenarios con espacio limitado pero alta seguridad requerida',
      security: 'Proporciona buena seguridad, es una versión truncada de SHA-256'
    },
    sha256: {
      name: 'SHA-256 (256 bits)',
      description: 'SHA-256 pertenece a la familia SHA-2, generando un hash de 256 bits (32 bytes), usualmente mostrado como 64 caracteres hexadecimales.',
      usage: 'Firmas digitales, certificados, almacenamiento de contraseñas, blockchain',
      security: 'Actualmente considerado seguro, ampliamente usado en entornos de alta seguridad.'
    },
    dsha256: {
      name: 'Double SHA-256',
      description: 'Double SHA-256 aplica consecutivamente SHA-256 dos veces, es decir SHA-256(SHA-256(x)).',
      usage: 'Hash de bloques, ID de transacciones y generación de direcciones en Bitcoin y otras criptomonedas',
      security: 'Ofrece la misma seguridad que SHA-256 pero con una capa adicional, haciéndolo más difícil de revertir mediante colisiones.'
    },
    sha384: {
      name: 'SHA-384 (384 bits)',
      description: 'SHA-384 es una versión truncada de SHA-512, generando un hash de 384 bits (48 bytes).',
      usage: 'Aplicaciones que requieren mayor seguridad que SHA-256',
      security: 'Más seguro que SHA-256, sin ataques conocidos actualmente.'
    },
    sha512: {
      name: 'SHA-512 (512 bits)',
      description: 'SHA-512 es el algoritmo más largo de la familia SHA-2, generando un hash de 512 bits (64 bytes).',
      usage: 'Aplicaciones que requieren máxima seguridad',
      security: 'Brinda el nivel más alto de seguridad, sin ataques efectivos conocidos.'
    },
    sha512_224: {
      name: 'SHA-512/224 (224 bits)',
      description: 'SHA-512/224 es una variante de SHA-512 con salida truncada a 224 bits.',
      usage: 'Hash con longitud equivalente a SHA-224 pero basado en SHA-512',
      security: 'Mejor rendimiento con datos grandes, mantiene una fuerte seguridad'
    },
    sha512_256: {
      name: 'SHA-512/256 (256 bits)',
      description: 'SHA-512/256 es una variante de SHA-512 con salida truncada a 256 bits.',
      usage: 'Rendimiento superior en sistemas de 64 bits comparado con SHA-256',
      security: 'Seguridad comparable a SHA-256, pero más eficiente en cierta arquitectura'
    },
    sha3_224: {
      name: 'SHA3-224 (224 bits)',
      description: 'SHA3-224 forma parte del estándar SHA-3, ofrece salida de 224 bits.',
      usage: 'Escenarios que necesitan resistencia contra computación cuántica',
      security: 'Estándar certificado por NIST, proporciona buenas garantías de seguridad'
    },
    sha3_256: {
      name: 'SHA3-256 (256 bits)',
      description: 'SHA3-256 forma parte del estándar SHA-3, con estructura interna diferente a SHA-2.',
      usage: 'Aplicaciones de seguridad a largo plazo frente a amenazas cuánticas',
      security: 'Diseñado para resistir futuros ataques incluyendo computación cuántica'
    },
    sha3_384: {
      name: 'SHA3-384 (384 bits)',
      description: 'SHA3-384 forma parte del estándar SHA-3, ofrece salida de 384 bits.',
      usage: 'Escenarios con alta seguridad y resistencia cuántica',
      security: 'Mayor seguridad que SHA3-256, adecuado para datos sensibles'
    },
    sha3_512: {
      name: 'SHA3-512 (512 bits)',
      description: 'SHA3-512 es el algoritmo más seguro dentro de la serie SHA-3.',
      usage: 'Escenarios que exigen máxima seguridad y resistencia cuántica',
      security: 'Brinda la máxima garantía de seguridad, es el más seguro de la serie SHA-3'
    },
    sm3: {
      name: 'SM3 (256 bits)',
      description: 'SM3 es un estándar chino de hash criptográfico publicado por la Administración Estatal de Criptografía, con salida de 256 bits.',
      usage: 'Criptografía comercial china, certificados digitales, gobierno electrónico',
      security: 'Diseñado similar a SHA-2, optimizado contra ataques, ampliamente usado en China'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160 bits)',
      description: 'RIPEMD-160 es una función hash desarrollada por el proyecto europeo RIPE, con salida de 160 bits.',
      usage: 'Generación de direcciones en Bitcoin, aplicaciones blockchain',
      security: 'Más seguro que SHA-1 de igual longitud, aunque menos utilizado'
    },
    crc32: {
      name: 'CRC32 (32 bits)',
      description: 'CRC32 es una función de detección de errores, usada frecuentemente en verificaciones de integridad.',
      usage: 'Verificación de integridad de datos, comunicaciones de red',
      security: 'No apto para escenarios de seguridad criptográfica, solo detección de errores'
    },
    murmur3_x86_32: {
      name: 'MurmurHash3 x86 (32 bits)',
      description: 'MurmurHash3 es una función hash no criptográfica conocida por su alto rendimiento y baja tasa de colisión, ideal para uso en memoria reducida.',
      usage: 'Tablas hash, filtros Bloom, cachés, particionamiento de datos',
      security: 'No criptográficamente seguro, pero excelente para usos de alto rendimiento'
    },
    murmur3_x86_128: {
      name: 'MurmurHash3 x86 (128 bits)',
      description: 'Versión de 128 bits del MurmurHash3, con menor probabilidad de colisión, ideal para conjuntos de datos grandes.',
      usage: 'Grandes tablas hash, eliminación de duplicados, sistemas distribuidos',
      security: 'Igual que la versión de 32 bits, pero con menor colisión'
    },
    murmur3_x64_128: {
      name: 'MurmurHash3 x64 (128 bits)',
      description: 'Versión de 128 bits optimizada para arquitecturas de 64 bits.',
      usage: 'Grandes tablas hash, sistemas distribuidos, almacenamiento orientado a contenido',
      security: 'Ideal para aplicaciones que requieren alta unicidad'
    },
    blake2b: {
      name: 'BLAKE2b (512 bits)',
      description: 'BLAKE2b es una función hash rápida y segura, optimizada para CPUs modernas.',
      usage: 'Procesamiento masivo de datos, tablas hash, comparación de cadenas',
      security: 'Enfocado en velocidad y buen reparto de datos, no seguridad criptográfica absoluta'
    },
    blake2s: {
      name: 'BLAKE2s (256 bits)',
      description: 'BLAKE2s es una función hash rápida y segura, optimizada para CPUs modernas.',
      usage: 'Procesamiento de datos, tablas hash, comparación de cadenas',
      security: 'Velocidad y buen reparto, pero no diseñado para seguridad extrema'
    },
    blake3: {
      name: 'BLAKE3 (256 bits)',
      description: 'BLAKE3 es una función hash ultrarrápida y segura, optimizada para CPUs modernas.',
      usage: 'Procesamiento masivo de datos, tablas hash, comparación de cadenas',
      security: 'Diseñado para velocidad y buen balance entre seguridad y rendimiento'
    },
    keccak224: {
      name: 'Keccak-224 (224 bits)',
      description: 'Keccak-224 es el algoritmo original de la especificación SHA-3, con salida de 224 bits.',
      usage: 'Ethereum y otras aplicaciones blockchain, sistemas criptográficos',
      security: 'Ampliamente usado en blockchain, aunque no estandarizado oficialmente'
    },
    keccak256: {
      name: 'Keccak-256 (256 bits)',
      description: 'Keccak-256 es la variante más usada de la familia Keccak, con salida de 256 bits.',
      usage: 'Contratos inteligentes Ethereum, transacciones blockchain, firmas digitales',
      security: 'Altamente confiable en blockchain, ligeramente diferente a SHA3-256'
    },
    keccak384: {
      name: 'Keccak-384 (384 bits)',
      description: 'Keccak-384 es una variante de la familia Keccak, con salida de 384 bits.',
      usage: 'Aplicaciones que requieren mayor seguridad que Keccak-256',
      security: 'Muy seguro, aunque menos usado que Keccak-256'
    },
    keccak512: {
      name: 'Keccak-512 (512 bits)',
      description: 'Keccak-512 es el algoritmo más largo de la familia Keccak, con salida de 512 bits.',
      usage: 'Aplicaciones con máxima resistencia a colisiones',
      security: 'Máximo nivel de seguridad en la familia Keccak'
    },
    shake128: {
      name: 'SHAKE128 (128 bits)',
      description: 'SHAKE128 es parte de la familia SHA-3, con salida variable, por defecto 256 bits.',
      usage: 'Aplicaciones criptográficas con salida ajustable, derivación de claves',
      security: 'Buen nivel de seguridad, reconocido por NIST'
    },
    shake256: {
      name: 'SHAKE256 (256 bits)',
      description: 'SHAKE256 es parte de la familia SHA-3, con salida variable, por defecto 512 bits.',
      usage: 'Aplicaciones con salida hash extendida y alta seguridad',
      security: 'Nivel de seguridad superior a SHAKE128, ideal para datos sensibles'
    },
    cshake128: {
      name: 'cSHAKE128 (salida variable)',
      description: 'cSHAKE128 es una versión personalizable de SHAKE128, permite definir cadenas y nombres de función para salidas variables.',
      usage: 'Escenarios de hash con parámetros personalizados, funciones estándar NIST, protocolos criptográficos',
      security: 'Ofrece seguridad comparable a SHAKE128 con soporte de personalización'
    },
    cshake256: {
      name: 'cSHAKE256 (salida variable)',
      description: 'cSHAKE256 es una versión personalizable de SHAKE256, permite definir cadenas y nombres de función para salidas variables.',
      usage: 'Hashing personalizado para aplicaciones altamente seguras',
      security: 'Soporta personalización y ofrece alta seguridad'
    }
  },
  article: {
    title: "Calculadora de Hash: Generar y verificar resúmenes criptográficos",
    intro: "Nuestra <strong>calculadora de hash en línea</strong> ofrece una forma sencilla de generar resúmenes criptográficos para cualquier texto o archivo. Esta herramienta gratuita soporta múltiples algoritmos, incluyendo MD5, SHA-1, SHA-256, SHA-512, RIPEMD, BLAKE y muchos más.",
    features: {
      title: "Entendiendo las funciones hash y sus aplicaciones",
      description: "<strong>Las funciones hash</strong> son algoritmos matemáticos que convierten cualquier cantidad de datos en una cadena de tamaño fijo. La <strong>calculadora hash de UFreeTools</strong> le permite generar estas huellas digitales en tiempo real, útiles para validación de seguridad, integridad de datos o aplicaciones blockchain.<br><br>A diferencia del cifrado, las funciones hash son unidireccionales – convierten datos en un <strong>resumen hash</strong> único que no puede revertirse. Una propiedad importante es que cambios mínimos en la entrada generan salidas completamente distintas, lo que hace que estos <strong>algoritmos hash</strong> sean ideales para validar integridad de datos y detectar modificaciones no autorizadas.",
      useCases: {
        title: "Casos prácticos de uso",
        items: [
          "<strong>Verificación de integridad</strong>: Antes de instalar software descargado, puede usar nuestro <strong>verificador de hash</strong> comparando su valor hash con el proporcionado por el desarrollador. Esto asegura que el archivo no haya sido alterado ni contenga malware.",
          "<strong>Detección de duplicados</strong>: Los sistemas de almacenamiento usan <strong>hashes</strong> para identificar archivos repetidos, independientemente del nombre. Nuestra herramienta ayuda a calcular estos identificadores fácilmente.",
          "<strong>Seguridad de contraseñas</strong>: Sistemas modernos almacenan <strong>hashes de contraseñas</strong>, no las contraseñas directamente. Aunque esta herramienta ilustra este proceso, en producción deben usarse funciones especializadas como bcrypt o Argon2 con salting.",
          "<strong>Forense digital</strong>: Investigadores usan la <strong>calculadora de hash</strong> para crear huellas de archivos, estableciendo pruebas inequívocas de autenticidad durante investigaciones.",
          "<strong>Blockchain</strong>: Las <strong>funciones hash</strong> son fundamentales en tecnologías descentralizadas, con SHA-256 y Keccak-256 protegiendo transacciones en Bitcoin y Ethereum respectivamente.",
          "<strong>Validación de contenido</strong>: Autores pueden publicar <strong>resúmenes hash</strong> de sus obras originales, dando a otros una forma de verificar que poseen la versión exacta e inalterada."
        ]
      },
      toolAdvantages: {
        title: "Ventajas de nuestra calculadora de hash",
        items: [
          "Soporta más de 30 algoritmos, desde MD5 hasta opciones avanzadas como BLAKE3",
          "Todo el procesamiento ocurre localmente, sin enviar datos fuera de su dispositivo",
          "Permite verificar hashes contra valores esperados, asegurando integridad",
          "Resultados en múltiples formatos: hexadecimal y Base64",
          "Funciona tanto con texto como con archivos de hasta 100MB",
          "Compare resultados de múltiples algoritmos simultáneamente"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre funciones hash",
      items: [
        {
          question: "¿Cuál es la diferencia entre MD5, SHA-1 y SHA-256?",
          answer: "Son diferentes algoritmos de hash criptográfico con distintos niveles de seguridad.<strong>MD5</strong> genera 128 bits (16 bytes) y está roto por colisiones.<strong>SHA-1</strong> produce 160 bits (20 bytes), también considerado inseguro tras avances en criptoanálisis.<strong>SHA-256</strong> forma parte de la familia SHA-2, con 256 bits (32 bytes), aún seguro. Recomendamos SHA-256 o SHA-512 para aplicaciones críticas. Puede encontrar más información en el sitio del <a href='https://csrc.nist.gov/projects/hash-functions'  target='_blank'>NIST</a>."
        },
        {
          question: "¿Qué tan seguras son las funciones hash criptográficas?",
          answer: "La seguridad depende de tres propiedades: resistencia a colisiones (no encontrar dos entradas con mismo hash), resistencia a preimagen (no encontrar entrada a partir del hash) y resistencia a segunda preimagen. Algoritmos como <strong>SHA-256</strong>, <strong>SHA-512</strong> y <strong>SHA3</strong> son actualmente seguros, mientras que MD5 y SHA-1 tienen fallos conocidos. Para aplicaciones seguras, siempre use SHA-256 o superiores y siga recursos como <a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html'  target='_blank'>el blog de Bruce Schneier</a> para estar informado sobre avances en criptoanálisis."
        },
        {
          question: "¿Puedo usar esta calculadora para verificar la integridad de archivos?",
          answer: "Sí, nuestra <strong>calculadora de hash</strong> sirve perfectamente para esto. Muchos proveedores publican hashes junto a sus archivos descargables. Para verificar: 1) Seleccione el archivo, 2) Elija el algoritmo usado (habitualmente SHA-256), 3) Calcule el hash, 4) Compare con el hash publicado. Si coincide, el archivo es idéntico al original. Esta herramienta procesa archivos localmente, preservando privacidad y seguridad. Es útil para descargar archivos desde <a href='https://ubuntu.com/download/desktop/thank-you'  target='_blank'>Ubuntu</a> o <a href='https://www.python.org/downloads/'  target='_blank'>Python</a>."
        },
        {
          question: "¿Sirve esta herramienta para hashing de contraseñas?",
          answer: "Aunque esta <strong>generadora de hash</strong> ilustra cómo funciona el hashing, para almacenar contraseñas en producción deben usarse funciones especializadas como bcrypt, Argon2 o PBKDF2. Estas añaden sal (datos aleatorios por contraseña) y estiramientos (operaciones lentas deliberadamente) para evitar ataque de fuerza bruta. Esta herramienta sirve fines educativos o de prueba, pero en sistemas reales deben seguirse mejores prácticas de seguridad. Más info en <a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html'  target='_blank'>OWASP Password Storage Cheatsheet</a>."
        },
        {
          question: "¿Cómo comparo o verifico hashes en distintos formatos?",
          answer: "Nuestra <strong>herramienta de verificación</strong> facilita comparar hashes incluso si están en diferentes formatos. Muestra resultados en hexadecimal minúscula, mayúscula y codificación Base64. Para verificar: 1) Calcule el hash del dato, 2) Pegue el hash a comparar, 3) Se ignora la diferencia de mayúsculas/minúsculas. Si el hash referencia está en otro formato, debe usarse el mismo algoritmo para comparar, ya que cada uno produce salidas totalmente distintas."
        },
        {
          question: "¿Qué algoritmo debo elegir según mis necesidades?",
          answer: "La elección depende de su caso:<br><strong>General y alta seguridad:</strong> SHA-256 equilibra bien seguridad y rendimiento.<br><strong>Blockchain:</strong> SHA-256 (Bitcoin) o Keccak-256 (Ethereum).<br><strong>Datos muy sensibles:</strong> SHA-512 o SHA3-512.<br><strong>Rendimiento crítico:</strong> BLAKE2 o BLAKE3 ofrecen gran velocidad y seguridad razonable.<br><strong>Compatibilidad con legacy:</strong> SHA-1 o MD5 pueden ser necesarios, pero evite usarlos en nuevos proyectos por vulnerabilidades.<br><strong>Checksum rápido:</strong> CRC32 es rápido pero solo para detección de errores, no para seguridad.<br>En duda, <strong>SHA-256</strong> es una opción segura y universal. Pruébelo con nuestra <a href='https://www.ufreetools.com/tools/hash-calculator'  target='_blank'>calculadora de hash</a>."
        }
      ]
    },
    guide: {
      title: "Guía paso a paso para usar la calculadora de hash",
      intro: "Instrucciones claras para generar y verificar hashes:",
      step1: "<strong>Seleccione tipo de entrada</strong>: Elija entre 'Texto' o 'Archivo'. Use 'Texto' para cadenas pequeñas y 'Archivo' para documentos, imágenes u otros.",
      step2: "<strong>Elija el algoritmo</strong>: Seleccione el algoritmo deseado del menú desplegable. SHA-256 es una buena opción por defecto, pero puede elegir otros por compatibilidad.",
      step3: "<strong>Introduzca los datos</strong>: Para texto, escriba o pegue el contenido. Para archivos, arrástrelos o haga clic para seleccionarlos.",
      step4: "<strong>Defina codificación</strong>: Si usa texto, seleccione UTF-8 (predeterminado) o Latin1 según sea necesario.",
      step5: "<strong>Calcule el hash</strong>: Haga clic en \"Calcular hash\". El sistema usará el algoritmo seleccionado y mostrará el resultado.",
      step6: "<strong>Revise y copie</strong>: Los resultados se muestran en varios formatos (hexadecimal y Base64). Haga clic en \"Copiar\" para transferir el valor a su portapapeles.",
      step7: "<strong>Verifique (opcional)</strong>: En la sección de verificación, ingrese un hash externo para compararlo con el generado. El sistema indicará si hay coincidencia.",
      additionalTips: "Para archivos grandes, el tiempo de procesamiento puede variar según su dispositivo. Como todo ocurre en su navegador, sus datos permanecen privados."
    },
    relatedTools: {
      title: "Herramientas relacionadas",
      tools: [
        {
          name: 'Generador de contraseñas',
          description: 'Cree contraseñas seguras para sus cuentas',
          url: 'https://www.ufreetools.com/tools/password-generator' 
        },
        {
          name: 'Codificador/decodificador de texto',
          description: 'Convierta texto entre Base64, URL y codificaciones HTML',
          url: 'https://www.ufreetools.com/tools/text-encoder-decoder' 
        },
        {
          name: 'Convertidor de archivos',
          description: 'Transforme archivos entre diferentes formatos',
          url: 'https://www.ufreetools.com/tools/file-converter' 
        }
      ]
    },
    conclusion: "La calculadora de hash proporciona una herramienta potente y accesible para aprovechar funciones hash criptográficas en diversas aplicaciones, desde verificación básica de archivos hasta implementaciones avanzadas de seguridad. Ofreciendo múltiples algoritmos estándar y una interfaz intuitiva, esta herramienta conecta conceptos criptográficos complejos con usos cotidianos. Ya sea un desarrollador implementando funcionalidad segura, un profesional verificando archivos o alguien curioso sobre funcionamiento de hashes, esta calculadora pone potentes herramientas criptográficas a su alcance directamente en el navegador. En un mundo donde la seguridad y la integridad de datos son prioritarias, comprender y usar hashes se vuelve cada vez más relevante."
  },
  listGroups: {
    common: 'Algoritmos comunes',
    sha2: 'Familia SHA-2',
    sha3: 'Familia SHA-3',
    other: 'Otros algoritmos'
  },
  metaTitle: 'Calculadora de Hash en Línea - Genere y verifique hashes criptográficos',
  metaDescription: 'Herramienta gratuita para generar y verificar hashes criptográficos. Soporta múltiples algoritmos, incluyendo {algorithms}.'
} 