export default {
  name: 'Criptografía SM2',
  description: 'Genere pares de claves, cifre/descifre datos y cree/verifique firmas usando criptografía SM2',
  tabs: {
    title: 'Selección de Función',
    keyGeneration: 'Generación de Clave',
    encryptDecrypt: 'Cifrar/Descifrar',
    signVerify: 'Firmar/Verificar'
  },
  keyGeneration: {
    title: 'Generación del Par de Claves SM2',
    generateButton: 'Generar Par de Claves',
    generating: 'Generando...',
    publicKey: 'Clave Pública',
    privateKey: 'Clave Privada',
    exportPublicKey: 'Exportar Clave Pública',
    exportPrivateKey: 'Exportar Clave Privada',
    copy: 'Copiar',
    info: {
      title: 'Acerca de los Pares de Claves SM2',
      description: 'SM2 es un algoritmo de criptografía de curva elíptica publicado por la Administración Nacional de Criptografía de China:',
      points: [
        'Clave Pública: Puede compartirse con otros, se usa para cifrar datos o verificar firmas',
        'Clave Privada: Debe mantenerse segura, se usa para descifrar datos o crear firmas'
      ],
      features: 'Características del Algoritmo SM2:',
      featuresList: [
        'Basado en curva elíptica de 256 bits, seguridad equivalente a RSA de 3072 bits',
        'Ejecución rápida, claves cortas',
        'Estándar nacional chino (serie GB/T 32918), adecuado para criptografía comercial en China',
        'Integra funciones de cifrado, firma e intercambio de claves'
      ],
      securityTip: 'Consejo de Seguridad: Nunca comparta su clave privada con nadie, mantenga su par de claves seguro.'
    }
  },
  encryptDecrypt: {
    title: 'Tipo de Operación',
    encrypt: 'Cifrar',
    decrypt: 'Descifrar',
    keyLabel: {
      encrypt: 'Clave Pública',
      decrypt: 'Clave Privada'
    },
    dataLabel: {
      encrypt: 'Datos a Cifrar',
      decrypt: 'Datos a Descifrar'
    },
    keyPlaceholder: 'Pegue la clave SM2',
    dataPlaceholder: {
      encrypt: 'Escriba el texto a cifrar',
      decrypt: 'Escriba el texto cifrado a descifrar'
    },
    processButton: {
      encrypt: 'Cifrar',
      decrypt: 'Descifrar'
    },
    processing: 'Procesando...',
    resultLabel: {
      encrypt: 'Resultado del Cifrado',
      decrypt: 'Resultado del Descifrado'
    },
    info: {
      title: 'Instrucciones de Cifrado/Descifrado SM2',
      usage: 'Cómo usar el cifrado/descifrado SM2:',
      points: [
        'Cifrado: Use la clave pública del destinatario para cifrar datos que solo él pueda descifrar',
        'Descifrado: Use su clave privada para descifrar datos cifrados con su clave pública'
      ],
      limitations: 'Limitaciones:',
      limitationsList: [
        'El algoritmo SM2 tiene limitaciones en la longitud del texto plano, adecuado para mensajes cortos, claves o datos sensibles',
        'Para cifrar textos largos, considere usar primero un cifrado simétrico (como SM4) y luego cifrar la clave simétrica con SM2'
      ],
      note: 'Nota: El formato de datos cifrados SM2 no es compatible con RSA, asegúrese de que el destinatario soporte el algoritmo SM2.'
    }
  },
  signVerify: {
    title: 'Tipo de Operación',
    sign: 'Firmar',
    verify: 'Verificar',
    keyLabel: {
      sign: 'Clave Privada',
      verify: 'Clave Pública'
    },
    dataLabel: 'Datos para {operation}',
    signatureLabel: 'Firma',
    signatureValue: 'Firma Generada',
    keyPlaceholder: 'Pegue la clave SM2',
    dataPlaceholder: 'Escriba el texto original',
    signaturePlaceholder: 'Escriba la firma a verificar',
    processButton: {
      sign: 'Generar Firma',
      verify: 'Verificar Firma'
    },
    processing: 'Procesando...',
    verificationSuccess: '¡Verificación exitosa! Los datos están intactos y sin alterar.',
    verificationFailed: '¡Verificación fallida! Los datos pueden haber sido modificados o la firma es incorrecta.',
    info: {
      title: 'Instrucciones para Firmar/Verificar con SM2',
      mainUses: 'Usos principales de las firmas digitales SM2:',
      usesList: [
        'Integridad de Datos: Asegurar que los datos no hayan sido alterados durante la transmisión',
        'Autenticación: Verificar que los datos provienen realmente del remitente declarado',
        'No Repudio: El remitente no puede negar haber enviado el mensaje'
      ],
      usage: 'Cómo usar:',
      usageList: [
        'Firma: Use su clave privada para generar una firma para sus datos',
        'Verificación: Use la clave pública del remitente para verificar la autenticidad de la firma'
      ],
      note: 'Nota: Las firmas SM2 usan estándares criptográficos chinos, que no son compatibles con algoritmos internacionales de firma, requiriendo que el destinatario soporte el algoritmo SM2.'
    }
  },
  messages: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Error al copiar, por favor copie manualmente',
    keygenError: 'Error generando el par de claves: {error}',
    processError: 'Operación fallida. Por favor verifique su clave y datos de entrada.',
    emptyKey: 'Por favor ingrese una clave',
    emptyData: 'Por favor ingrese datos para procesar'
  }
}