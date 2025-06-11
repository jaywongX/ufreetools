export default {
  name: 'Cifrado Simétrico',
  description: 'Cifra y descifra texto y archivos de forma segura usando varios algoritmos de cifrado simétrico, incluyendo AES, DES y SM4',
  encryption: {
    title: 'Cifrado / Descifrado',
    plaintext: 'Texto en claro',
    plaintextPlaceholder: 'Ingrese el texto a cifrar',
    ciphertext: 'Texto cifrado',
    ciphertextPlaceholder: 'Los datos cifrados aparecerán aquí',
    encrypt: 'Cifrar',
    decrypt: 'Descifrar',
    decrypted: 'Texto descifrado',
    decryptedPlaceholder: 'Los datos descifrados aparecerán aquí',
    encryptSuccess: 'Cifrado exitoso',
    decryptSuccess: 'Descifrado exitoso',
    encryptError: 'Fallo en el cifrado: {error}',
    decryptError: 'Fallo en el descifrado: {error}'
  },
  algorithm: {
    title: 'Seleccionar Algoritmo',
    aes: 'AES',
    des: 'DES',
    tripledes: 'Triple DES',
    sm4: 'SM4 (Estándar Chino)',
    "3des": 'Triple DES'
  },
  mode: {
    title: 'Modo de Operación',
    ecb: 'ECB - Modo Libro de Códigos Electrónico',
    cbc: 'CBC - Modo Encadenamiento de Bloques de Cifrado',
    cfb: 'CFB - Modo Retroalimentación de Cifrado',
    ofb: 'OFB - Modo Retroalimentación de Salida',
    ctr: 'CTR - Modo Contador'
  },
  padding: {
    title: 'Método de Relleno',
    pkcs7: 'PKCS7',
    zeroPadding: 'Relleno con Ceros',
    zeropadding: 'Relleno con Ceros'
  },
  operation: {
    title: 'Tipo de Operación',
    encrypt: 'Cifrar',
    decrypt: 'Descifrar'
  },
  key: {
    title: 'Clave',
    label: 'Clave',
    placeholder: 'Ingrese una clave de {keySize}',
    placeholderString: 'Ingrese una clave de cadena de {keySize} (relleno automático)',
    placeholderHex: 'Ingrese una clave HEX de {keySize} (relleno automático)',
    placeholderBase64: 'Ingrese una clave Base64 de {keySize} (relleno automático)',
    generateRandom: 'Generar Aleatoria',
    sizeHint: '{keySize}',
    autoFillHint: 'Las claves más cortas que la longitud requerida serán rellenadas con ceros, las más largas serán truncadas'
  },
  iv: {
    title: 'Vector de Inicialización (IV)',
    label: 'Vector de Inicialización (IV)',
    placeholder: 'Ingrese un IV de {blockSize}',
    placeholderString: 'Ingrese un IV de cadena de {blockSize} (relleno automático)',
    placeholderHex: 'Ingrese un IV HEX de {blockSize} (relleno automático)',
    placeholderBase64: 'Ingrese un IV Base64 de {blockSize} (relleno automático)',
    generateRandom: 'Generar Aleatorio',
    sizeHint: '{blockSize}',
    autoFillHint: 'Los IVs más cortos que la longitud requerida serán rellenados con ceros, los más largos serán truncados'
  },
  input: {
    title: 'Contenido a Cifrar',
    titleDecrypt: 'Contenido a Descifrar',
    clear: 'Limpiar',
    placeholder: 'Ingrese el texto a cifrar',
    placeholderDecrypt: 'Ingrese texto en formato {format} para descifrar'
  },
  inputFormat: {
    title: 'Formato de Entrada',
    string: 'Cadena',
    hex: 'HEX',
    base64: 'Base64'
  },
  output: {
    title: 'Resultado del Cifrado',
    titleDecrypt: 'Resultado del Descifrado',
    copyResult: 'Copiar Resultado',
    copied: 'Copiado'
  },
  outputFormat: {
    title: 'Formato de Salida',
    string: 'Cadena',
    hex: 'HEX',
    base64: 'Base64'
  },
  error: {
    title: 'Error',
    invalidHex: 'La clave debe estar en formato HEX',
    invalidIvHex: 'El IV debe estar en formato HEX',
    invalidHexInput: 'Entrada inválida en formato HEX',
    invalidBase64: 'Entrada inválida en formato Base64',
    unsupportedAlgorithm: 'Algoritmo no soportado',
    decryptionFailed: 'Fallo en el descifrado: {message}',
    copyFailed: 'Fallo al copiar, por favor copie manualmente',
    unknownError: 'Ocurrió un error durante el procesamiento',
    invalidHexFormat: 'Formato HEX inválido',
    invalidBase64Format: 'Formato Base64 inválido',
    emptyBase64: 'Codificación Base64 inválida',
    decryptFailed: 'Fallo en el descifrado: '
  },
  info: {
    title: 'Información del Algoritmo',
    algorithms: {
      aes: 'AES: Estándar de Cifrado Avanzado, puede usar claves de 128, 192 o 256 bits',
      des: 'DES: Estándar de Cifrado de Datos, usa claves de 56 bits, seguridad baja',
      tripledes: '3DES: Triple DES, usa tres claves DES de 56 bits para mayor seguridad',
      sm4: 'SM4: Estándar Nacional Chino, algoritmo de cifrado de bloques con claves de 128 bits',
      "3des": '3DES: Triple DES, usa tres claves DES de 56 bits para mayor seguridad'
    },
    modes: {
      title: 'Información sobre Modos de Operación',
      ecb: 'ECB: Modo Libro de Códigos Electrónico, cifra bloques independientemente, no recomendado para datos sensibles',
      cbc: 'CBC: Modo Encadenamiento de Bloques de Cifrado, cada bloque depende del anterior, más seguro',
      cfb: 'CFB: Modo Retroalimentación de Cifrado, transforma cifradores de bloque en cifradores de flujo',
      ofb: 'OFB: Modo Retroalimentación de Salida, también es un modo de cifrador de flujo, usa la misma operación para cifrar y descifrar',
      ctr: 'CTR: Modo Contador, cifra cada bloque usando un contador incremental, permite procesamiento paralelo'
    }
  },
  buttons: {
    process: 'Cifrar',
    processDecrypt: 'Descifrar'
  },
  file: {
    title: 'Cifrado de Archivos',
    select: 'Seleccionar Archivo',
    drop: 'o suéltelo aquí',
    encrypt: 'Cifrar Archivo',
    decrypt: 'Descifrar Archivo',
    download: 'Descargar Resultado',
    selected: 'Seleccionado: {name}',
    size: 'Tamaño: {size}',
    maxSize: 'Tamaño máximo: 100MB',
    encryptingFile: 'Cifrando archivo...',
    decryptingFile: 'Descifrando archivo...',
    downloadReady: 'Listo para descargar',
    fileTooBig: 'El archivo es demasiado grande. El tamaño máximo permitido es de 100MB.'
  },
  options: {
    title: 'Opciones',
    autoDecrypt: 'Auto-descifrar después del cifrado',
    includeMeta: 'Incluir metadatos del algoritmo en la salida',
    kdf: 'Función de Derivación de Clave',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: 'Sal (para derivación de clave)',
    saltPlaceholder: 'Ingrese sal en hexadecimal o déjela vacía para generar aleatoriamente',
    autoClear: 'Auto-limpiar datos sensibles',
    saveSettings: 'Guardar configuración'
  },
  security: {
    title: 'Información de Seguridad',
    description: 'Acerca de la seguridad del cifrado',
    warning: 'Advertencia',
    ecbInsecure: 'El modo ECB no es recomendado para aplicaciones seguras ya que no oculta bien los patrones de datos.',
    useModern: 'Para datos sensibles, use AES-256 con modo GCM o CBC.',
    keyWarning: 'Proteja sus claves de cifrado. Si se pierden, los datos no podrán recuperarse.',
    browserWarning: 'El cifrado basado en navegador es conveniente pero puede no ser adecuado para datos muy sensibles.',
    learnMore: 'Aprenda más sobre el cifrado'
  },
  messages: {
    noAlgorithm: 'Por favor seleccione un algoritmo de cifrado',
    noKey: 'Por favor ingrese una clave o contraseña de cifrado',
    invalidKeyLength: 'Longitud de clave inválida para el algoritmo seleccionado',
    invalidIv: 'Longitud de IV inválida para el algoritmo y modo seleccionados',
    noData: 'Por favor ingrese datos para cifrar/descifrar',
    padError: 'Error de relleno - la clave o los datos pueden ser incorrectos',
    fileSuccess: 'Archivo procesado correctamente',
    fileError: 'Error al procesar el archivo: {error}',
    clipboardError: 'Error al copiar al portapapeles: {error}',
    invalidFormat: 'Formato de entrada inválido'
  },
  article: {
    title: "Cifrado Simétrico: Herramienta Integral de Seguridad de Datos",
    features: {
      title: "Entendiendo el Cifrado Simétrico y Sus Capabilidades",
      description: "La <strong>Herramienta de Cifrado Simétrico</strong> es una utilidad criptográfica poderosa que le permite proteger información sensible mediante varios algoritmos estándar de la industria. A diferencia del cifrado asimétrico que usa pares de claves, el cifrado simétrico utiliza una única <strong>clave secreta</strong> tanto para el cifrado como para el descifrado. Nuestra herramienta soporta múltiples algoritmos incluyendo <strong>AES (Advanced Encryption Standard)</strong>, <strong>DES (Data Encryption Standard)</strong>, <strong>Triple DES</strong> y <strong>SM4 (Estándar Nacional Chino)</strong>.<br><br>La funcionalidad principal incluye el cifrado de texto y archivos con opciones configurables tales como <strong>modos de cifrado</strong> (CBC, ECB, CFB, OFB, CTR), <strong>métodos de relleno</strong> y formatos flexibles de entrada/salida. Esta <strong>herramienta de cifrado de datos</strong> proporciona una interfaz amigable para implementar medidas de seguridad robustas sin requerir un conocimiento extenso de criptografía, haciendo accesible el cifrado avanzado para todos mientras mantiene altos estándares de seguridad.",
      useCases: {
        title: "Aplicaciones Prácticas del Cifrado Simétrico",
        items: [
          "<strong>Compartir Archivos Seguros</strong>: Cifre documentos sensibles, hojas de cálculo o archivos multimedia antes de compartirlos a través de canales potencialmente inseguros. Los destinatarios con la clave correcta pueden fácilmente descifrar y acceder al contenido original, asegurando confidencialidad durante la transmisión.",
          "<strong>Almacenamiento y Gestión de Contraseñas</strong>: Cree almacenamiento cifrado para sus contraseñas y credenciales de autenticación. Al cifrar esta información sensible con una contraseña maestra, puede mantener una colección segura de detalles de inicio de sesión mientras solo necesita recordar una sola contraseña fuerte.",
          "<strong>Autenticación de API</strong>: Genere y valide tokens cifrados para sistemas de autenticación de API. El cifrado simétrico proporciona un equilibrio entre seguridad y rendimiento ideal para manejar tokens de autenticación en aplicaciones y servicios web.",
          "<strong>Cifrado de Campos de Bases de Datos</strong>: Proteja campos específicos sensibles en bases de datos sin necesidad de reestructurar todo el sistema. El <strong>cifrado simétrico</strong> permite cifrado selectivo de información crítica como identificadores personales, detalles financieros o datos privados de usuarios.",
          "<strong>Seguridad de Configuración</strong>: Cifre archivos de configuración de aplicaciones que contengan credenciales sensibles tales como contraseñas de bases de datos, claves API y tokens de servicio. Esto evita la exposición de información crítica de acceso incluso si los archivos de configuración se exponen accidentalmente.",
          "<strong>Canales de Comunicación Seguros</strong>: Implemente comunicación cifrada extremo a extremo generando claves simétricas para cada sesión. Este enfoque permite mensajería segura en tiempo real manteniendo el rendimiento para aplicaciones con restricciones de ancho de banda."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre el Cifrado Simétrico",
      items: [
        {
          question: "¿Cuál es la diferencia entre los algoritmos AES, DES, Triple DES y SM4?",
          answer: "Estos son diferentes <strong>algoritmos de cifrado simétrico</strong> con características de seguridad y rendimiento variadas. <strong>AES (Advanced Encryption Standard)</strong> es el estándar global actual, ofreciendo excelente seguridad y rendimiento con tamaños de clave de 128, 192 o 256 bits. <strong>DES (Data Encryption Standard)</strong> es un algoritmo antiguo con clave de 56 bits, considerado ahora inseguro para aplicaciones críticas debido a su vulnerabilidad ante ataques de fuerza bruta. <strong>Triple DES</strong> mejora la seguridad de DES aplicando el algoritmo tres veces con claves diferentes, proporcionando protección más fuerte pero con menor rendimiento. <strong>SM4</strong> es el estándar nacional chino de algoritmo de cifrado de bloques con tamaño de clave de 128 bits, diseñado como contrapeso a AES con seguridad comparable. Para la mayoría de aplicaciones modernas que requieren seguridad, AES es la opción recomendada debido a su óptimo balance entre fuerte seguridad y eficiencia."
        },
        {
          question: "¿Qué modo de cifrado debo elegir para mi aplicación?",
          answer: "El <strong>modo de cifrado</strong> determina cómo el algoritmo de cifrado de bloques procesa los bloques de datos. <strong>ECB (Electronic Codebook)</strong> es el más simple pero menos seguro ya que bloques idénticos de texto plano se cifran en bloques idénticos de texto cifrado, potencialmente revelando patrones. <strong>CBC (Cipher Block Chaining)</strong> agrega seguridad haciendo cada bloque cifrado dependiente de los bloques anteriores, requiriendo un vector de inicialización (IV). <strong>CFB (Cipher Feedback)</strong>, <strong>OFB (Output Feedback)</strong> y <strong>CTR (Counter)</strong> convierten cifradores de bloques en cifradores de flujo con características diferentes. Para cifrado general de datos sensibles, CBC ofrece buena seguridad con razonable rendimiento cuando se implementa correctamente con un IV aleatorio. El modo CTR es excelente para implementaciones paralelizables y evita requisitos de relleno. Los sistemas criptográficos modernos frecuentemente prefieren modos de cifrado autentificado como GCM (no directamente disponible en esta herramienta) para garantizar confidencialidad e integridad de datos simultáneamente."
        },
        {
          question: "¿Es seguro este herramienta de cifrado online para datos sensibles?",
          answer: "Esta <strong>herramienta de cifrado basada en navegador</strong> procesa todos los datos localmente en su navegador sin enviar ninguna información a servidores externos, proporcionando un nivel básico de confidencialidad. Sin embargo, para información verdaderamente sensible, considere varios factores: 1) La herramienta usa bibliotecas de <strong>cifrado estándar</strong> implementadas en JavaScript, que pueden no tener las mismas garantías de seguridad que implementaciones nativas auditadas. 2) Los entornos de navegador enfrentan amenazas potenciales como extensiones de navegador, malware o inspección de memoria. 3) La gestión de claves sigue siendo crítica - si pierde su clave de cifrado, la recuperación de datos será imposible. Para datos altamente sensibles o sistemas de producción, recomendamos usar software de cifrado dedicado o bibliotecas criptográficas en entornos controlados, con prácticas adecuadas de gestión de claves. Esta herramienta es más apropiada para fines educativos, uso ocasional o cifrado de información moderadamente sensible."
        },
        {
          question: "¿Cómo debo manejar y compartir claves de cifrado de forma segura?",
          answer: "Una gestión segura de <strong>claves de cifrado</strong> es crucial para mantener la seguridad criptográfica. Nunca comparta claves a través del mismo canal que los datos cifrados - esto elimina el propósito del cifrado ya que cualquiera que intercepte ambos podría descifrar su información. En lugar de eso: 1) Use un canal de comunicación separado y seguro para el intercambio de claves. 2) Considere división de claves, donde diferentes partes de la clave se envían a través de canales diferentes. 3) Emplee protocolos seguros de intercambio de claves cuando sea posible. 4) Para comunicaciones continuas, considere usar cifrado asimétrico para intercambiar claves simétricas de forma segura. 5) Implemente prácticas de rotación de claves para seguridad a largo plazo. 6) Almacene las claves de forma segura, nunca en texto plano, e idealmente usando sistemas especializados de gestión de claves. 7) Para máxima seguridad de claves críticas, considere módulos de seguridad hardware (HSM) o servicios especializados de gestión de claves. Recuerde que la seguridad de sus datos cifrados es tan fuerte como sus prácticas de gestión de claves."
        },
        {
          question: "¿Cómo puedo asegurarme de que mis datos cifrados mantienen su integridad y no han sido alterados?",
          answer: "El <strong>cifrado simétrico</strong> estándar proporciona confidencialidad pero no garantiza inherentemente la integridad de los datos. Para verificar que sus datos cifrados no hayan sido modificados: 1) Use modos de cifrado autentificados cuando estén disponibles. Aunque esta herramienta principalmente ofrece modos tradicionales (CBC, ECB, etc.), los sistemas criptográficos modernos prefieren cifrado autentificado como AES-GCM que provee verificación de confidencialidad e integridad. 2) Implemente una verificación de integridad separada calculando un hash criptográfico (como SHA-256) o HMAC de sus datos cifrados y almacenándolo de forma segura. Antes del descifrado, recalcule y compare este valor para detectar manipulaciones. 3) Para aplicaciones críticas, considere usar firmas digitales junto con el cifrado. 4) Verifique siempre que el texto cifrado completo haya sido recibido comprobando su longitud y estructura antes del descifrado. 5) Si es posible, incluya información de versión y otros metadatos en su esquema de cifrado para prevenir ataques de degradación. Estas medidas ayudan a asegurar tanto la confidencialidad como la integridad de su información sensible a través de canales potencialmente no seguros."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar la Herramienta de Cifrado Simétrico",
      steps: [
        "<strong>Seleccione un algoritmo de cifrado</strong>: Elija entre AES (recomendado para la mayoría de aplicaciones), DES, Triple DES o SM4 (estándar chino) basándose en sus requisitos de seguridad y necesidades de compatibilidad. AES proporciona el mejor balance de seguridad y rendimiento para aplicaciones modernas.",
        "<strong>Elija el modo de operación</strong>: Seleccione un <strong>modo de cifrado</strong> desde las opciones disponibles (CBC, ECB, CFB, OFB, CTR). Para propósitos generales de seguridad, se recomienda el modo CBC ya que proporciona buena seguridad cuando se usa con un vector de inicialización (IV) aleatorio.",
        "<strong>Configure el método de relleno</strong>: Si su modo seleccionado requiere relleno (como CBC o ECB), elija entre PKCS7 (estándar) o relleno con ceros. Esta configuración determina cómo se llenará el último bloque cuando la longitud de sus datos no sea múltiplo del tamaño de bloque.",
        "<strong>Genere o ingrese su clave de cifrado</strong>: Puede ingresar una clave personalizada o usar el botón \"Generar Aleatoria\" para crear una clave criptográficamente segura. Para AES, la longitud de la clave será de 16, 24 o 32 bytes dependiendo de la fuerza deseada. Seleccione el formato de entrada apropiado (cadena, hex o Base64) para su clave.",
        "<strong>Proporcione un vector de inicialización (IV) si es necesario</strong>: Para modos distintos de ECB, necesitará un IV. Haga clic en \"Generar Aleatorio\" para crear un IV seguro aleatorio, o ingrese el suyo propio. El IV no necesita ser secreto pero debe ser aleatorio y único para cada operación de cifrado.",
        "<strong>Ingrese los datos a cifrar</strong>: Escriba o pegue el texto que desea cifrar en el campo de entrada. Seleccione el formato de entrada apropiado (cadena para texto normal, o hex/Base64 para datos ya codificados). Para descifrado, proporcione el texto cifrado en el formato en que fue originalmente generado (típicamente hex o Base64).",
        "<strong>Procese y utilice el resultado</strong>: Haga clic en el botón \"Cifrar\" o \"Descifrar\" para procesar sus datos. El resultado se mostrará en el formato especificado. Use el botón de copia para transferir fácilmente el resultado a otra aplicación o documento. Para el cifrado, asegúrese de almacenar de forma segura tanto la clave como el IV (si se usó) ya que serán necesarios para el descifrado."
      ]
    },
    conclusion: "La herramienta de Cifrado Simétrico ofrece una manera poderosa pero accesible de proteger su información sensible usando algoritmos criptográficos estándar de la industria. Siguiendo buenas prácticas de seguridad y entendiendo las opciones disponibles, puede implementar efectivamente cifrado fuerte para una amplia gama de aplicaciones, desde proteger archivos personales hasta implementar sistemas de seguridad más complejos. Aunque esta herramienta basada en navegador proporciona conveniencia y flexibilidad para muchas necesidades de cifrado, recuerde que aplicaciones críticas de seguridad pueden requerir soluciones criptográficas dedicadas con infraestructura adecuada de gestión de claves. Ya sea que busque añadir una capa de privacidad a sus datos personales o esté explorando conceptos criptográficos, esta herramienta proporciona una introducción práctica a la técnica esencial de cifrado simétrico."
  }
}