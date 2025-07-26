export default {
  name: 'Compresor de Imágenes',
  description: 'Comprimir y optimizar imágenes manteniendo su calidad',

  input: {
    dragDrop: 'Arrastre las imágenes aquí o haga clic para subirlas',
    supportedFormats: 'Admite formatos JPG, PNG, GIF, WEBP',
    selected: '{count} archivos seleccionados',
    changeFiles: 'Cambiar archivos',
    width: 'Ancho',
    height: 'Alto',
    keepOriginal: 'Establezca en 0 para mantener las dimensiones originales'
  },

  results: {
    originalImage: 'Imagen Original',
    compressedImage: 'Después de la Compresión',
    filename: 'Nombre del Archivo:',
    dimensions: 'Dimensiones:',
    fileSize: 'Tamaño del Archivo:',
    compressionRatio: 'Relación de Compresión:',
    viewOriginal: 'Ver Original'
  },

  about: {
    title: 'Acerca de la Compresión de Imágenes',
    description: 'Esta herramienta comprime imágenes utilizando la API Canvas del navegador. Todo el procesamiento ocurre en su dispositivo y ninguna imagen se carga al servidor.',
    principlesTitle: 'Principios de Compresión:',
    principles: {
      resize: 'Redimensionar Imágenes: Menores dimensiones significan menos datos de píxeles',
      quality: 'Reducir Calidad: Disminuir el parámetro de calidad reduce el tamaño del archivo',
      format: 'Convertir Formato: Diferentes formatos de imagen tienen distintas características de compresión'
    },
    useCasesTitle: 'Casos de Uso:',
    useCases: {
      web: 'Optimizar imágenes de sitios web para mejorar la velocidad de carga',
      email: 'Reducir tamaños de adjuntos de correo electrónico',
      social: 'Comprimir imágenes antes de subirlas a redes sociales',
      storage: 'Optimizar espacio de almacenamiento'
    }
  },

  options: {
    quality: 'Calidad',
    qualityValue: 'Calidad ({value}%)',
    lowQuality: 'Baja Calidad/Archivo Pequeño',
    highQuality: 'Alta Calidad/Archivo Grande',
    format: 'Formato de Salida',
    maxSize: 'Dimensiones Máximas ({width} × {height} px)',
    keepExif: 'Conservar Datos EXIF',
    resizeImage: 'Redimensionar Imagen',
    maxWidth: 'Ancho Máximo',
    maxHeight: 'Alto Máximo',
    compressionLevel: 'Nivel de Compresión',
    maxFileSize: 'Tamaño Objetivo del Archivo',
    optimizationLevel: 'Nivel de Optimización',
    convertTo: 'Convertir A'
  },

  presets: {
    web: 'Optimización Web',
    highQuality: 'Alta Calidad',
    balanced: 'Equilibrado',
    smallSize: 'Tamaño Pequeño',
    custom: 'Personalizado'
  },

  formats: {
    original: 'Formato Original',
    jpeg: 'JPEG',
    jpegDesc: 'El formato JPEG es adecuado para fotografías y no admite fondos transparentes',
    png: 'PNG',
    pngDesc: 'El formato PNG admite fondos transparentes y es ideal para iconos e ilustraciones',
    webp: 'WebP',
    webpDesc: 'El formato WebP ofrece altas tasas de compresión y es adecuado para uso web',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'Sin Redimensionamiento',
    maxDimension: 'Dimensiones Máximas',
    exactDimensions: 'Dimensiones Exactas',
    percentage: 'Escala Porcentual'
  },

  actions: {
    upload: 'Subir Imágenes',
    compress: 'Comprimir',
    processing: 'Procesando...',
    download: 'Descargar',
    downloadAll: 'Descargar Todas',
    batchDownload: 'Descarga por Lotes',
    clear: 'Limpiar',
    addMore: 'Agregar Más Imágenes',
    removeAll: 'Eliminar Todos',
    preview: 'Vista Previa',
    delete: 'Eliminar'
  },

  table: {
    filename: 'Nombre del Archivo',
    originalSize: 'Tamaño Original',
    original: 'Tamaño Original del Archivo',
    compressedSize: 'Tamaño Comprimido',
    compressed: 'Tamaño del Archivo Comprimido',
    savings: 'Ahorro',
    ratio: 'Relación de Compresión',
    quality: 'Calidad',
    dimensions: 'Dimensiones',
    originalDimensions: 'Dimensiones Originales',
    newDimensions: 'Nuevas Dimensiones',
    status: 'Estado'
  },

  messages: {
    dropped: '{count} imágenes cargadas',
    uploading: 'Subiendo imágenes...',
    compressing: 'Comprimiendo imágenes...',
    compressed: 'Imágenes comprimidas exitosamente',
    downloadPreparing: 'Preparando descarga...',
    downloadReady: 'Descarga lista',
    cleared: 'Todas las imágenes han sido eliminadas',
    tooManyFiles: 'Demasiados archivos. Máximo permitido: {max}',
    fileTooLarge: 'Archivo demasiado grande. Máximo permitido: {max}MB',
    unsupportedFormat: 'Formato no soportado: {format}',
    imageError: 'Ocurrió un error al procesar la imagen: {error}',
    batchDownloadNotSupported: 'La función de descarga por lotes requiere la biblioteca JSZip. Descargue las imágenes individualmente o agregue soporte a la biblioteca zip.',
    batchDownloadError: 'Ocurrió un error durante la descarga por lotes: {error}',
    invalidImage: 'Por favor seleccione un archivo de imagen válido'
  }
};