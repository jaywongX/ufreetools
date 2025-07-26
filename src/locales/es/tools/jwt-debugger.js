export default {
  name: 'Depurador JWT',
  description: 'Analiza, verifica y depura tokens JWT en línea',

  sections: {
    encoded: 'JWT Codificado',
    decoded: 'JWT Decodificado',
    header: 'Encabezado',
    payload: 'Payload',
    signature: 'Firma',
    verification: 'Verificación'
  },

  actions: {
    decode: 'Decodificar',
    verify: 'Verificar Firma',
    copy: 'Copiar',
    share: 'Compartir Token',
    generateToken: 'Generar Token',
    generateRandomToken: 'Token Aleatorio',
    clear: 'Limpiar',
    generateRandomPayload: 'Generar Payload Aleatorio',
    generateRandomKey: 'Generar Clave Aleatoria',
    generateKeyPair: 'Generar Par de Claves'
  },

  messages: {
    invalidToken: 'Formato JWT inválido',
    copied: '¡Copiado al portapapeles!',
    copyFailed: 'Error al copiar, por favor copie manualmente',
    verificationSuccess: 'Firma verificada correctamente',
    verificationFailed: 'Fallo en la verificación de firma',
    keyGenerated: 'Par de claves generado correctamente',
    keyGenerationFailed: 'Fallo al generar el par de claves',
    tokenGenerated: 'Token generado correctamente',
    tokenGenerationFailed: 'Fallo al generar el token',
    randomTokenGenerated: 'Token aleatorio generado y analizado correctamente',
    certUploadSuccess: 'Certificado cargado correctamente',
    certFormatInvalid: 'Formato de certificado inválido',
    certReadFailed: 'Fallo al leer el certificado',
    tokenFormatError: 'Formato de token inválido. JWT debe contener tres partes separadas por puntos',
    tokenHeaderMissingAlg: 'El encabezado del token no contiene el campo de algoritmo (alg)',
    tokenHeaderInvalid: 'Formato inválido del encabezado del token',
    tokenVerificationFailed: 'Fallo en la verificación del formato del token',
    tokenExpired: 'El token ha expirado. Fecha de expiración: {time}',
    tokenNotEffective: 'El token aún no es válido. Válido desde: {time}',
    tokenIssuedInFuture: 'La fecha de emisión del token está en el futuro. Fecha de emisión: {time}',
    algorithmNotSupported: 'Algoritmo no soportado',
    randomSecretGenerated: 'Clave secreta aleatoria generada correctamente',
    randomSecretGenerationFailed: 'Fallo al generar la clave secreta aleatoria',
    randomPayloadGenerated: 'Payload aleatorio generada',
    randomPayloadGenerationFailed: 'Fallo al generar el payload aleatorio',
    contentCleared: 'Todo el contenido limpiado',
    tokenDecodeSuccess: 'Token decodificado correctamente',
    tokenDecodeFailed: 'Fallo al decodificar el token',
    pleaseInputKey: 'Por favor ingrese una clave',
    pleaseGenerateKeyPair: 'Por favor genere primero un par de claves {type}',
    pleaseInputVerificationKey: 'Por favor ingrese una clave de verificación',
    pleaseInputPublicKey: 'Por favor ingrese una clave pública para verificación',
    pleaseInputToken: 'Por favor ingrese un token para verificar',
    payloadFormatError: 'Error en el formato del payload, por favor revise el formato JSON',
    invalidTimestamp: 'Marca de tiempo inválida'
  },

  placeholders: {
    secretKey: 'Ingrese la clave secreta',
    privateKey: 'Ingrese o genere una clave privada',
    publicKey: 'Ingrese o genere una clave pública',
    payload: 'Ingrese el payload con formato JSON',
    token: 'Ingrese o genere un token JWT',
    verificationSecretKey: 'Ingrese la clave de verificación',
    verificationPublicKey: 'Ingrese la clave pública de verificación'
  },

  labels: {
    algorithm: 'Algoritmo',
    secretKey: 'Clave Secreta',
    privateKey: 'Clave Privada',
    publicKey: 'Clave Pública',
    certificate: 'Certificado (Opcional)',
    payload: 'Payload',
    token: 'Token',
    verificationPublicKey: 'Clave Pública de Verificación',
    tokenResult: 'Resultado de Decodificación del Token',
    verifyToken: 'Verificar Token',
    tokenDecoded: 'El token usa firma {alg}',
    timestamp: 'Interpretación de Marca de Tiempo',
    issuedAt: 'Emitido en (iat)',
    expiration: 'Fecha de Expiración (exp)',
    notBefore: 'No válido antes (nbf)',
    tokenFormat: 'Sin Contenido',
    tokenFormatDesc: 'Aquí se mostrará el resultado de decodificación después de ingresar o generar un token JWT',
    uploadCert: 'Arrastre y suelte el archivo del certificado o haga clic para seleccionarlo',
    certName: 'Nombre del Certificado',
    sm3Fingerprint: 'Huella SM3 (x5t#sm3)',
    certUploadNote: 'Después de cargar el certificado, se añadirá el campo "x5t#sm3" al encabezado JWT',
    secondsTimestamp: 'marca de tiempo en segundos',
    millisecondsTimestamp: 'marca de tiempo en milisegundos'
  },

  buttons: {
    cancel: 'Cancelar',
    verify: 'Verificar',
    clearCert: 'Limpiar',
    generateToken: 'Generar Token',
    decodeToken: 'Decodificar Token',
    verifyToken: 'Verificar Token',
    close: 'Cerrar'
  },

  verification: {
    success: 'Verificación Exitosa',
    failure: 'Verificación Fallida',
    validMessage: 'La firma del token es válida.',
    invalidMessage: 'Fallo en la verificación de la firma del token.'
  },

  errors: {
    noToken: 'Por favor ingrese un token para verificar',
    invalidToken: 'Formato de token inválido',
    noSecretKey: 'Por favor proporcione una clave secreta',
    noPublicKey: 'Por favor proporcione una clave pública de verificación',
    invalidSignature: 'Firma inválida',
    verificationFailed: 'Fallo en la verificación del token'
  }
};