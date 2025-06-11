export default {
  name: 'RSA Criptografía',
  description: 'Genere pares de claves RSA, cifre/descifre datos y cree/verifique firmas digitales',
  tabs: {
    title: 'Selección de Función',
    keyGeneration: 'Generación de Clave',
    encryptDecrypt: 'Cifrar/Descifrar',
    signVerify: 'Firmar/Verificar'
  },
  keyGeneration: {
    title: 'Generación del Par de Claves RSA',
    keyLength: 'Longitud de la Clave',
    keySizes: {
      size512: '512 bits (No recomendado para seguridad)',
      size1024: '1024 bits (Seguridad básica)',
      size2048: '2048 bits (Recomendado)',
      size4096: '4096 bits (Alta seguridad)'
    },
    generateButton: 'Generar Par de Claves',
    generating: 'Generando...',
    publicKey: 'Clave Pública',
    privateKey: 'Clave Privada',
    exportPublicKey: 'Exportar Clave Pública',
    exportPrivateKey: 'Exportar Clave Privada',
    copy: 'Copiar',
    info: {
      title: 'Acerca de los Pares de Claves RSA',
      description: 'RSA es un algoritmo de cifrado asimétrico que utiliza un par de claves:',
      points: {
        0: 'Clave Pública: Se puede compartir con cualquiera, se usa para cifrar datos o verificar firmas.',
        1: 'Clave Privada: Debe mantenerse segura, nunca debe compartirse, se usa para descifrar datos o crear firmas.'
      },
      keyLengthTitle: 'La longitud de la clave determina el nivel de seguridad:',
      keyLengthPoints: {
        0: '512 bits - Ya no es seguro, solo para pruebas',
        1: '1024 bits - Débil, no recomendado para datos sensibles',
        2: '2048 bits - Estándar actual recomendado',
        3: '4096 bits - Mayor seguridad, pero procesamiento más lento'
      }
    }
  },
  encryptDecrypt: {
    title: 'Cifrado y Descifrado',
    encryptMode: 'Modo de Cifrado',
    decryptMode: 'Modo de Descifrado',
    encryptDescription: 'Use la clave pública para cifrar datos que solo pueda descifrar quien posee la clave privada.',
    decryptDescription: 'Use la clave privada para descifrar datos previamente cifrados con su clave pública.',
    keyLabel: {
      encrypt: 'Clave Pública',
      decrypt: 'Clave Privada'
    },
    dataLabel: {
      encrypt: 'Datos a Cifrar',
      decrypt: 'Datos a Descifrar (Formato Base64)'
    },
    keyPlaceholder: 'Pegue la clave RSA',
    dataPlaceholder: {
      encrypt: 'Escriba el texto a cifrar',
      decrypt: 'Escriba los datos a descifrar (en formato Base64)'
    },
    processButton: {
      encrypt: 'Cifrar Datos',
      decrypt: 'Descifrar Datos'
    },
    processing: 'Procesando...',
    resultLabel: {
      encrypt: 'Resultado del Cifrado',
      decrypt: 'Resultado del Descifrado'
    },
    info: {
      title: 'Acerca del Cifrado y Descifrado RSA',
      description: 'RSA es un algoritmo de cifrado asimétrico que funciona así:',
      points: {
        0: 'Cifrado: Use la clave pública del destinatario para cifrar datos, asegurando que solo él pueda descifrarlos.',
        1: 'Descifrado: El destinatario usa su clave privada para descifrar los datos.',
        2: 'El cifrado RSA tiene limitaciones en la longitud de los datos y no es adecuado para cifrar directamente archivos grandes.',
        3: 'Para datos extensos, generalmente se usa un cifrado simétrico (como AES) para los datos y RSA para cifrar la clave simétrica.'
      }
    },
    encrypt: 'Cifrar',
    decrypt: 'Descifrar'
  },
  signVerify: {
    title: 'Firma y Verificación',
    signMode: 'Modo de Firma',
    verifyMode: 'Modo de Verificación',
    signDescription: 'Use la clave privada para firmar datos, probando autenticidad e integridad de los mismos.',
    verifyDescription: 'Use la clave pública para verificar la firma, confirmando integridad de los datos y la identidad del emisor.',
    keyLabel: {
      sign: 'Clave Privada',
      verify: 'Clave Pública'
    },
    dataLabel: 'Datos',
    hashAlgorithm: 'Algoritmo Hash',
    hashOptions: {
      sha1: 'SHA-1 (No recomendado para seguridad)',
      sha256: 'SHA-256 (Recomendado)',
      sha512: 'SHA-512 (Alta seguridad)',
      md5: 'MD5 (Solo para pruebas, inseguro)'
    },
    signatureLabel: 'Firma (formato Base64)',
    signaturePlaceholder: 'Escriba los datos de la firma',
    processButton: {
      sign: 'Generar Firma',
      verify: 'Verificar Firma'
    },
    processing: 'Procesando...',
    signatureResult: 'Resultado de la Firma (formato Base64)',
    verificationSuccess: '¡Verificación Exitosa!',
    verificationFailure: '¡Verificación Fallida!',
    verificationSuccessMessage: 'Los datos están intactos y provienen del remitente esperado.',
    verificationFailureMessage: 'Los datos pueden haber sido alterados o la firma no fue creada con la clave privada correspondiente.',
    info: {
      title: 'Acerca de las Firmas y Verificación RSA',
      description: 'Las firmas RSA son una técnica digital utilizada para verificar autenticidad e integridad de los mensajes:',
      points: {
        0: 'Proceso de firma: El emisor usa su clave privada para cifrar un hash del mensaje, creando una firma digital.',
        1: 'Proceso de verificación: El receptor usa la clave pública del emisor para descifrar la firma y la compara con el hash del mensaje.',
        2: 'Una verificación exitosa confirma que el mensaje fue enviado por el propietario de la clave privada y no ha sido modificado.',
        3: 'Las firmas no cifran el mensaje, solo verifican su origen e integridad. Para privacidad, también se necesita cifrado.'
      }
    },
    sign: 'Firmar',
    verify: 'Verificar',
    signatureValue: 'Valor de la Firma',
    verificationResult: {
      success: '¡Verificación exitosa! La firma es válida, los datos están intactos y provienen de una fuente confiable.',
      failed: '¡Verificación fallida! La firma no es válida, los datos pueden estar manipulados o provenir de una fuente no confiable.'
    },
    dataPlaceholder: 'Escriba los datos a firmar o verificar',
    keyPlaceholder: 'Pegue la clave RSA'
  },
  messages: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Error al copiar, por favor copie manualmente',
    keygenError: 'Error generando el par de claves: {error}',
    encryptError: 'Error en el cifrado. Por favor verifique la clave pública y los datos de entrada. El cifrado RSA tiene límites en la longitud de los datos.',
    decryptError: 'Error en el descifrado. Asegúrese de que la clave privada sea correcta y los datos de entrada estén cifrados correctamente.',
    signError: 'Error generando la firma. Por favor verifique la clave privada y los datos de entrada.',
    verifyError: 'Error en la verificación. Por favor verifique las claves y los datos de entrada.',
    processingError: 'Operación fallida. Por favor verifique la clave y los datos de entrada.'
  }
}