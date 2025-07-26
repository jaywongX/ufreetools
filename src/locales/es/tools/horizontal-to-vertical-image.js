export default {
  name: 'Imagen Horizontal a Vertical',
  description: 'Convierte imágenes horizontales al formato vertical para redes sociales y fondos de pantalla móviles',
  tags: ['imagen', 'conversión', 'social', 'móvil', 'retrato'],

  upload: {
    title: 'Convertir Imagen Horizontal a Vertical',
    dropzone: 'Arrastra y suelta tu imagen aquí',
    maxSize: 'Tamaño máximo del archivo: 10MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Ajustes de Conversión',
    presets: 'Preajustes',
    conversionMode: 'Modo de Conversión',
    modes: {
      crop: 'Recortar',
      fill: 'Rellenar con Color',
      blur: 'Desenfocar Fondo',
      stretch: 'Estirar Bordes',
      dualColor: 'Fondo de Doble Color'
    },
    cropPosition: 'Posición del Recorte',
    positions: {
      left: 'Izquierda',
      center: 'Centro',
      right: 'Derecha'
    },
    fillColor: 'Color de Relleno',
    blurRadius: 'Radio de Desenfoque',
    stretchFactor: 'Factor de Estiramiento',
    topColor: 'Color Superior',
    bottomColor: 'Color Inferior',
    sizeOption: 'Tamaño de Salida',
    sizeModes: {
      auto: 'Automático',
      preset: 'Preestablecido',
      custom: 'Personalizado'
    },
    sizePresets: 'Preajustes de Tamaño',
    outputSize: 'Dimensiones Personalizadas',
    width: 'Ancho',
    height: 'Alto',
    dimensionsHint: 'Introduce las dimensiones en píxeles',
    outputFormat: 'Formato de Salida',
    quality: 'Calidad de la Imagen',
    advancedOptions: 'Opciones Avanzadas',
    preserveRatio: 'Mantener Relación de Aspecto',
    sharpen: 'Enfocar',
    addWatermark: 'Agregar Marca de Agua',
    watermarkPlaceholder: 'Escribe el texto de la marca de agua',
    watermarkColor: 'Color de la Marca de Agua'
  },

  output: {
    preview: 'Vista Previa',
    before: 'Antes',
    after: 'Después',
    dimensions: 'Dimensiones'
  },

  actions: {
    selectImage: 'Seleccionar Imagen',
    convert: 'Convertir a Vertical',
    download: 'Descargar Imagen',
    showSideBySide: 'Mostrar Comparación',
    hideSideBySide: 'Ocultar Comparación',
    hideComparison: 'Ocultar Comparación'
  },

  messages: {
    convertPrompt: 'Sube una imagen horizontal y conviértela al formato vertical',
    processing: 'Procesando tu imagen...',
    imageOnly: 'Por favor, selecciona un archivo de imagen'
  },

  examples: {
    title: 'Ejemplos de Uso',
    social: 'Crea historias verticales para Instagram, TikTok y otras plataformas sociales',
    socialTip: 'Ideal para transformar fotos panorámicas en historias atractivas',
    mobile: 'Crea fondos de pantalla móviles a partir de imágenes horizontales',
    mobileTip: 'Optimiza imágenes para pantallas inteligentes con diferentes proporciones'
  }
};