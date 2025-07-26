export default {
  name: 'Redimensionador de Imágenes Masivo',
  description: 'Ajustar, convertir y optimizar múltiples imágenes a la vez',

  input: {
    title: 'Imágenes de Entrada',
    dropzone: 'Arrastre las imágenes aquí o haga clic para navegar',
    addMore: 'Agregar más imágenes',
    selectImages: 'Seleccionar Imágenes',
    clearAll: 'Limpiar Todo',
    maxFiles: 'Hasta {count} imágenes',
    maxSize: 'Tamaño máximo por imagen: {size}MB',
    supportedFormats: 'Formatos admitidos: {formats}'
  },

  options: {
    title: 'Opciones de Redimensión',
    settingsTitle: 'Ajustes de Redimensión',
    resizeMode: 'Modo de Redimensión',
    resizeMethod: 'Método de Redimensión',
    pixelMode: 'Píxel',
    percentageMode: 'Porcentaje',
    maxDimensionMode: 'Dimensiones Máximas',
    outputFormat: 'Formato de Salida',
    quality: 'Calidad',
    width: 'Ancho',
    height: 'Alto',
    maintainAspectRatio: 'Mantener Relación de Aspecto',
    maxWidth: 'Ancho Máximo',
    maxHeight: 'Alto Máximo',
    percentage: 'Porcentaje',
    backgroundColor: 'Color de Fondo',
    naming: 'Nombre de Salida',
    filenamePrefix: 'Prefijo del Nombre de Archivo',
    filenameSuffix: 'Sufijo del Nombre de Archivo',
    applyToAllImages: 'Aplicar a todas las imágenes',
    applyToAll: 'Aplicar a todas'
  },

  resizeModes: {
    exact: 'Dimensiones Exactas',
    maxDimensions: 'Dimensiones Máximas',
    percentage: 'Escala Porcentual',
    fit: 'Ajustar Dentro',
    cover: 'Cubrir',
    crop: 'Recortar'
  },

  formats: {
    original: 'Igual que el Origen',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'Nombre Original',
    dimensions: 'Original + Dimensiones',
    format: 'Original + Formato',
    custom: 'Patrón Personalizado',
    random: 'Cadena Aleatoria'
  },

  output: {
    title: 'Imágenes Redimensionadas',
    downloadAll: 'Descargar Todas',
    downloadAsZip: 'Descargar como ZIP',
    processingStatus: 'Procesando: {processed}/{total}',
    originalSize: 'Tamaño Original',
    newSize: 'Nuevo Tamaño',
    reduction: 'Reducción',
    individualDownload: 'Descargar'
  },

  batch: {
    title: 'Procesamiento por Lotes',
    process: 'Procesar Todas las Imágenes',
    cancel: 'Cancelar Procesamiento',
    selectPreset: 'Seleccionar Preajuste',
    savePreset: 'Guardar Configuración Actual',
    progress: 'Progreso del Procesamiento'
  },

  watermark: {
    title: 'Marca de Agua',
    enable: 'Agregar Marca de Agua',
    text: 'Texto de la Marca de Agua',
    image: 'Imagen de la Marca de Agua',
    position: 'Posición',
    opacity: 'Opacidad',
    rotation: 'Rotación',
    size: 'Tamaño',
    padding: 'Espaciado'
  },

  positions: {
    topLeft: 'Arriba Izquierda',
    topCenter: 'Arriba Centro',
    topRight: 'Arriba Derecha',
    middleLeft: 'Centro Izquierda',
    middleCenter: 'Centro',
    middleRight: 'Centro Derecha',
    bottomLeft: 'Abajo Izquierda',
    bottomCenter: 'Abajo Centro',
    bottomRight: 'Abajo Derecha'
  },

  actions: {
    resize: 'Redimensionar',
    preview: 'Vista Previa',
    processing: 'Procesando...',
    reset: 'Restablecer',
    applySettings: 'Aplicar Ajustes',
    resetSettings: 'Restablecer Ajustes',
    cancel: 'Cancelar'
  },

  messages: {
    resizeSuccess: 'Redimensión exitosa',
    resizeFailed: 'Fallo en redimensión: {error}',
    invalidDimensions: 'Por favor ingrese dimensiones válidas',
    invalidWidthHeight: 'Por favor ingrese ancho y alto válidos',
    noImages: 'Por favor agregue imágenes para redimensionar',
    noImagesToDownload: 'No hay imágenes disponibles para descargar',
    processing: 'Procesando imágenes...',
    processingComplete: 'Procesamiento completado',
    processingError: 'Ocurrió un error durante el procesamiento',
    waitingForProcess: 'Esperando procesamiento',
    downloadStarted: 'Descarga iniciada',
    allDownloaded: 'Todas las imágenes han sido descargadas',
    presetSaved: 'Preajuste guardado',
    presetLoaded: 'Preajuste cargado',
    zipCreated: 'Un archivo ZIP con {count} imágenes ha sido creado',
    zipError: 'Ocurrió un error al crear el archivo ZIP'
  },

  preview: {
    title: 'Vista Previa de Imagen ({count} imágenes)',
    selectImage: 'Seleccione una imagen',
    batchSupport: 'Soporta selección masiva de múltiples imágenes para procesamiento único',
    download: 'Descargar',
    delete: 'Eliminar'
  },

  qualityOptions: {
    fast: 'Procesamiento Rápido',
    medium: 'Calidad Media',
    high: 'Alta Calidad (Recomendado)',
    best: 'Mejor Calidad (Más lento)'
  }
};