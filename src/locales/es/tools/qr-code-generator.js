export default {
  name: 'Generador de Código QR',
  description: 'Genere códigos QR personalizables para URLs, texto y más',

  options: {
    content: 'Contenido del Código QR',
    contentType: 'Tipo de Contenido',
    errorCorrectionLevel: 'Nivel de Corrección de Errores',
    size: 'Tamaño',
    margin: 'Margen',
    foregroundColor: 'Color Principal',
    backgroundColor: 'Color de Fondo',
    logo: 'Agregar Logo',
    logoSize: 'Tamaño del Logo',
    cornerRadius: 'Radio de las Esquinas'
  },

  contentTypes: {
    url: 'URL',
    text: 'Texto Plano',
    email: 'Correo Electrónico',
    phone: 'Número de Teléfono',
    sms: 'SMS',
    wifi: 'Red WiFi',
    vcard: 'vCard',
    mecard: 'MeCard'
  },

  errorLevels: {
    L: 'Bajo (7%)',
    M: 'Medio (15%)',
    Q: 'Cuartil (25%)',
    H: 'Alto (30%)'
  },

  actions: {
    generate: 'Generar Código QR',
    download: 'Descargar',
    downloadSVG: 'Descargar SVG',
    downloadPNG: 'Descargar PNG',
    copy: 'Copiar Imagen',
    clear: 'Limpiar',
    uploadLogo: 'Subir Logo'
  },

  templates: {
    title: 'Plantillas Rápidas',
    confirmReplace: '¿Está seguro que desea reemplazar el contenido actual?',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    url: {
      name: 'URL de Sitio Web'
    },
    email: {
      name: 'Dirección de Correo'
    },
    phone: {
      name: 'Número de Teléfono'
    },
    sms: {
      name: 'SMS'
    },
    wifi: {
      name: 'Configuración Wi-Fi',
      example: {
        ssid: 'nombre-red',
        password: 'contraseña'
      }
    },
    geo: {
      name: 'Geolocalización'
    }
  },

  appearance: {
    title: 'Ajustes de Apariencia'
  },

  preview: {
    title: 'Vista Previa',
    generating: 'Generando...',
    clickGenerateButton: 'Haga clic en "Generar Código QR"',
    clickToDownload: 'Haga clic para descargar el código QR'
  },

  tips: {
    title: 'Consejos',
    saveToPrint: 'El código QR generado puede guardarse como imagen para imprimir o compartir.',
    errorCorrection: 'El nivel de corrección de errores indica la capacidad de lectura cuando el código QR está parcialmente dañado. El nivel L tiene la menor tolerancia, mientras que el nivel H tiene la mayor tolerancia pero hace que el código QR sea más complejo.'
  },

  wifi: {
    ssid: 'Nombre de la Red (SSID)',
    password: 'Contraseña',
    encryption: 'Encriptación',
    hidden: 'Red Oculta'
  },

  placeholders: {
    content: 'Ingrese texto, enlace u otro contenido...'
  },

  characters: 'caracteres',
  maxChars: 'Se recomienda no exceder los 300 caracteres',

  messages: {
    copied: '¡Copiado al portapapeles!',
    generated: 'Código QR generado exitosamente',
    contentRequired: 'Por favor ingrese contenido para el código QR',
    downloaded: 'Código QR descargado',
    confirmReplace: 'Haga clic en confirmar para reemplazar el contenido actual',
    contentUpdated: 'Contenido actualizado',
    changesCancelled: 'Cambios cancelados',
    invalidUrl: 'Por favor ingrese una URL válida',
    invalidEmail: 'Por favor ingrese un correo electrónico válido',
    invalidPhone: 'Por favor ingrese un número de teléfono válido',
    logoTooBig: 'El logo es demasiado grande, el tamaño máximo del archivo es 1MB'
  },

  errors: {
    canvasNotReady: 'El elemento Canvas no está listo',
    generationError: 'Error generando el código QR',
    generationErrorWithMessage: 'Error generando el código QR: {message}',
    downloadError: 'Error descargando el código QR: {message}'
  }
};