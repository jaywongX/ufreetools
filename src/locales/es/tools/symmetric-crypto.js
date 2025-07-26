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
  }
};