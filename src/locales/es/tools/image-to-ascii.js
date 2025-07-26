export default {
  name: 'Imagen a ASCII',
  description: 'Convierte imágenes en arte ASCII personalizable',

  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastra y suelta tu imagen aquí o haz clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 5MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF',
    pasteImage: 'O pega una imagen desde el portapapeles'
  },

  options: {
    title: 'Opciones de Conversión',
    width: 'Ancho de Salida',
    height: 'Alto de Salida',
    preserveAspect: 'Mantener Relación de Aspecto',
    colored: 'Salida con Color',
    charSet: 'Conjunto de Caracteres',
    charSets: {
      standard: 'Estándar',
      simple: 'Simple',
      complex: 'Complejo',
      blocks: 'Caracteres de Bloque',
      custom: 'Personalizado'
    },
    customChars: 'Caracteres Personalizados',
    invert: 'Invertir Colores',
    threshold: 'Umbral de Brillo',
    brightness: 'Brillo',
    contrast: 'Contraste',
    fontFamily: 'Familia de Fuentes',
    fontSize: 'Tamaño de Fuente',
    lineHeight: 'Altura de Línea',
    backgroundColor: 'Color de Fondo',
    textColor: 'Color de Texto'
  },

  output: {
    title: 'Salida ASCII',
    preview: 'Vista Previa',
    raw: 'ASCII Crudo',
    html: 'HTML',
    copyToClipboard: 'Copiar al Portapapeles',
    downloadTxt: 'Descargar como TXT',
    downloadHtml: 'Descargar como HTML',
    downloadImage: 'Descargar como Imagen',
    stats: {
      title: 'Estadísticas',
      characters: 'Número de Caracteres',
      lines: 'Número de Líneas',
      colors: 'Número de Colores',
      size: 'Tamaño del Texto'
    }
  },

  presets: {
    title: 'Preestablecidos',
    save: 'Guardar Configuración Actual',
    load: 'Cargar Preestablecido',
    delete: 'Eliminar Preestablecido',
    presetName: 'Nombre del Preestablecido',
    default: 'Por Defecto',
    detailed: 'Detallado',
    minimalist: 'Minimalista',
    blocky: 'Estilo Bloque',
    small: 'Pequeño',
    inverted: 'Invertido'
  },

  adjustment: {
    title: 'Ajuste de Imagen',
    grayscale: 'Escala de Grises',
    negative: 'Negativo',
    resize: 'Redimensionar Antes de la Conversión',
    crop: 'Recortar Imagen',
    rotate: 'Rotar',
    flipH: 'Voltear Horizontalmente',
    flipV: 'Voltear Verticalmente'
  },

  animation: {
    title: 'Animación',
    animated: 'Procesar como Animación',
    frameDelay: 'Retraso entre Cuadros',
    loop: 'Repetición de Animación',
    loopCount: 'Número de Repeticiones',
    extractFrame: 'Extraer Cuadro Actual'
  },

  actions: {
    convert: 'Convertir a ASCII',
    resetOptions: 'Restablecer Opciones',
    refreshPreview: 'Refrescar Vista Previa',
    loadImage: 'Cargar Nueva Imagen',
    applyChanges: 'Aplicar Cambios',
    selectImage: 'Seleccionar Imagen',
    reset: 'Restablecer',
    processing: 'Procesando...',
    generate: 'Generar ASCII',
    copy: 'Copiar',
    download: 'Descargar'
  },

  messages: {
    converting: 'Convirtiendo imagen a ASCII...',
    conversionComplete: 'Conversión completada',
    conversionFailed: 'Fallo en la conversión: {error}',
    copied: 'ASCII copiado al portapapeles',
    downloadStarted: 'La descarga ha comenzado',
    downloadComplete: 'ASCII descargado',
    downloadFailed: 'Fallo en la descarga',
    copyFailed: 'Fallo al copiar',
    resetComplete: 'Los ajustes han sido restablecidos',
    asciiGenerated: 'Arte ASCII generado',
    generationFailed: 'Fallo al generar el ASCII',
    presetSaved: 'Preestablecido guardado exitosamente',
    presetLoaded: 'Preestablecido cargado',
    presetDeleted: 'Preestablecido eliminado',
    invalidImage: 'Formato de imagen inválido o archivo corrupto',
    imageTooBig: 'Las dimensiones de la imagen son demasiado grandes para la conversión',
    selectOrLoad: 'Por favor selecciona una imagen o cárgala desde una URL',
    asciiWillDisplay: 'El arte ASCII se mostrará aquí',
    customCharsPlaceholder: 'Introduce los caracteres del más oscuro al más claro...',
    tip: 'Haz clic en el botón "Generar ASCII" después de ajustar la configuración para ver el efecto',
    drapPlaceHolder: 'Selecciona o arrastra una imagen aquí',
    noImage: 'Por favor selecciona una imagen primero',
    generateAscii: 'Haz clic en el botón "Generar ASCII" para convertir la imagen',
    tip2: 'Consejo: Usa el botón de copiar para transferir el arte ASCII al portapapeles, o usa el botón de descarga para guardarlo como archivo de texto.'
  },

  charSets: {
    standard: 'Estándar',
    simple: 'Simple',
    blocks: 'Bloques',
    custom: 'Personalizado'
  },

  settings: {
    title: 'Configuración ASCII',
    customCharsetLabel: 'Conjunto de Caracteres Personalizado (del más oscuro al más claro)',
    asciiWidth: 'Ancho ASCII',
    invert: 'Invertir Colores',
    colored: 'Salida con Color',
    fontSize: 'Tamaño de Fuente'
  },

  preview: {
    originalImage: 'Imagen Original',
    generatedAscii: 'ASCII Generado'
  }
};