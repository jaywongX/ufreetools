export default {
  name: 'Calculadora HMAC',
  description: 'Calcular HMAC (Código de Autenticación de Mensaje Basado en Hash) para datos usando una clave',
  title: 'Calculadora de Código de Autenticación de Mensaje HMAC',
  intro: 'Genera códigos de autenticación de mensaje usando una clave, con soporte para múltiples algoritmos hash y formatos de salida',

  input: {
    title: 'Entrada',
    message: 'Mensaje',
    messagePlaceholder: 'Introduce el mensaje a autenticar',
    key: 'Clave',
    keyLabel: 'Clave (Clave Secreta)',
    keyPlaceholder: 'Introduce la clave HMAC',
    messageLabel: 'Mensaje',
    messageLongPlaceholder: 'Introduce el mensaje para calcular HMAC',
    file: 'Archivo',
    text: 'Texto',
    fileSelect: 'Seleccionar Archivo',
    fileDrop: 'O arrastra y suelta el archivo aquí',
    fileSelected: 'Archivo seleccionado: {name}',
    clearFile: 'Limpiar Archivo',
    encoding: 'Codificación de Entrada',
    keyEncoding: 'Codificación de Clave',
    outputFormat: 'Formato de Salida',
    inputType: 'Tipo de Entrada',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Hexadecimal',
    binary: 'Binario',
    calculate: 'Calcular HMAC',
    calculating: 'Calculando...',
    clear: 'Limpiar Todo'
  },

  algorithms: {
    title: 'Algoritmos',
    label: 'Algoritmo Hash',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'Resultado HMAC',
    digest: 'Resumen HMAC',
    outputLabel: 'Resultado HMAC',
    copy: 'Copiar',
    copied: '¡Copiado!',
    noResult: 'Introduce un mensaje y una clave para calcular HMAC',
    calculating: 'Calculando...',
    placeholder: 'Aquí se mostrará el resultado HMAC',
    useExample: 'Usar Ejemplo',
    jsExample: 'Ejemplo en JavaScript:'
  },

  validation: {
    title: 'Validación HMAC',
    hmacToVerify: 'HMAC a Verificar',
    verifyPlaceholder: 'Introduce HMAC para verificar',
    verify: 'Verificar HMAC',
    valid: 'El HMAC es válido',
    invalid: 'El HMAC es inválido',
    verifying: 'Verificando...'
  },

  options: {
    title: 'Opciones',
    uppercase: 'Salida en Mayúsculas',
    showDetails: 'Mostrar Detalles Técnicos',
    autoUpdate: 'Actualización Automática',
    truncate: 'Recortar Salida',
    truncateLength: 'Longitud del Recorte'
  },

  details: {
    title: 'Detalles Técnicos',
    algorithm: 'Algoritmo',
    keyLength: 'Longitud de la Clave',
    blockSize: 'Tamaño de Bloque',
    outputLength: 'Longitud de Salida',
    execution: 'Tiempo de Ejecución',
    ms: 'Milisegundos'
  },

  messages: {
    noMessage: 'Por favor, introduce un mensaje',
    noKey: 'Por favor, introduce una clave',
    invalidEncoding: 'Formato de codificación inválido',
    processingError: 'Error de procesamiento: {error}',
    success: 'Cálculo HMAC exitoso',
    invalidKey: 'Formato de clave inválido para la codificación seleccionada',
    fileTooBig: 'El archivo es demasiado grande. El tamaño máximo es de 5MB',
    copied: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar, por favor copia manualmente',
    invalidHex: 'La clave no está en formato hexadecimal válido',
    invalidBase64: 'La clave no está en formato Base64 válido'
  },

  security: {
    title: 'Notas de Seguridad',
    keyStorage: 'Nunca compartas tu clave',
    keyStrength: 'Usa claves fuertes y únicas para cada aplicación',
    recommendation: 'Para aplicaciones críticas de seguridad, usa al menos HMAC-SHA256',
    warning: 'HMAC-MD5 y HMAC-SHA1 podrían no ser adecuados para aplicaciones de alta seguridad'
  }
};