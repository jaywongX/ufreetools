export default {
  name: 'Imagen Vertical a Horizontal',
  description: 'Convertir imágenes verticales (retrato) a formato horizontal (paisaje) con múltiples opciones de transformación',

  upload: {
    title: 'Cargar Imagen',
    dropzone: 'Arrastra y suelta tu imagen aquí',
    maxSize: 'Tamaño máximo del archivo: 10MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Configuración de Conversión',
    presets: 'Preajustes Rápidos',
    conversionMode: 'Modo de Conversión',
    modes: {
      rotate: 'Rotar',
      fill: 'Rellenar Fondo',
      blur: 'Fondo Desenfocado',
      stretch: 'Estirar Bordes',
      dualColor: 'Fondo de Doble Color'
    },
    rotationAngle: 'Ángulo de Rotación',
    fillColor: 'Color de Fondo',
    blurRadius: 'Intensidad del Desenfoque',
    stretchEdges: 'Cantidad de Estiramiento',
    leftColor: 'Color Izquierdo',
    rightColor: 'Color Derecho',
    sizeOption: 'Opción de Tamaño',
    sizeModes: {
      auto: 'Tamaño Automático',
      preset: 'Tamaños Comunes',
      custom: 'Tamaño Personalizado'
    },
    sizePresets: 'Preajustes de Tamaño',
    outputSize: 'Tamaño de Salida',
    width: 'Ancho',
    height: 'Alto',
    dimensionsHint: 'Introduce las dimensiones en píxeles',
    autoSize: 'Calcular tamaño automáticamente',
    outputFormat: 'Formato de Salida',
    quality: 'Calidad de la Imagen',
    advancedOptions: 'Opciones Avanzadas',
    preserveRatio: 'Mantener proporción original',
    sharpen: 'Enfocar',
    addWatermark: 'Agregar marca de agua',
    watermarkPlaceholder: 'Ingresa el texto de la marca de agua',
    watermarkColor: 'Color de la marca de agua'
  },

  output: {
    preview: 'Vista Previa del Resultado',
    dimensions: 'Dimensiones',
    before: 'Antes',
    after: 'Después'
  },

  actions: {
    selectImage: 'Seleccionar Imagen',
    convert: 'Convertir Imagen',
    download: 'Descargar Imagen',
    reset: 'Eliminar',
    showSideBySide: 'Mostrar Comparación',
    hideComparison: 'Ocultar Comparación',
    hideSideBySide: 'Cerrar'
  },

  messages: {
    processing: 'Procesando imagen...',
    convertPrompt: 'Convierte tu imagen para ver la vista previa aquí',
    error: 'Ocurrió un error al procesar la imagen',
    success: '¡La conversión se completó exitosamente!'
  },

  examples: {
    title: 'Consejos de Uso',
    social: 'Perfecto para publicaciones en redes sociales donde las imágenes horizontales tienen mejor rendimiento',
    socialTip: 'Usa el modo desenfoque para obtener los mejores resultados en redes sociales',
    website: 'Crea imágenes de banner para sitios web y blogs',
    websiteTip: 'El modo de doble color funciona muy bien para banners web'
  },

  help: {
    title: 'Cómo Usar Esta Herramienta',
    description: 'Esta herramienta te permite convertir imágenes verticales (retrato) a formato horizontal (paisaje) utilizando varios métodos que mantienen la calidad visual e impacto estético.',
    example1: {
      title: 'Publicaciones en Redes Sociales',
      description: 'Convierte fotos retrato a formato paisaje ideal para redes sociales con fondo desenfocado'
    },
    example2: {
      title: 'Banners Web',
      description: 'Crea encabezados y banners desde imágenes verticales usando relleno de color como fondo'
    }
  }
};