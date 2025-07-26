export default {
  name: 'Extractor de Fotogramas GIF',
  description: 'Extrae fotogramas individuales de animaciones GIF',
  uploadBtn: 'Seleccionar GIF',
  resetBtn: 'Reiniciar',
  extractBtn: 'Extraer Fotogramas',
  extractingBtn: 'Extrayendo...',
  downloadAllBtn: 'Descargar Todos los Fotogramas',

  upload: {
    title: 'Subir GIF',
    dropzone: 'Arrastra tu archivo GIF aquí o haz clic para buscar',
    maxSize: 'Tamaño máximo del archivo: 20MB',
    onlyGif: 'Solo se admiten archivos GIF',
    selectGif: 'Por favor, selecciona un archivo GIF'
  },

  analysis: {
    title: 'Información del GIF',
    dimensions: 'Dimensiones',
    frameCount: 'Número de Fotogramas',
    duration: 'Duración',
    fps: 'Fotogramas por Segundo',
    fileSize: 'Tamaño del Archivo',
    loopCount: 'Número de Repeticiones',
    infinite: 'Infinito',
    fileName: 'Nombre del Archivo',
    size: 'Tamaño',
    totalFrames: 'Total de Fotogramas',
    notExtracted: 'No Extraído'
  },

  extraction: {
    title: 'Extracción de Fotogramas',
    selectFrames: 'Seleccionar Fotogramas',
    allFrames: 'Todos los Fotogramas',
    rangeOfFrames: 'Rango de Fotogramas',
    from: 'Desde',
    to: 'Hasta',
    specificFrames: 'Fotogramas Específicos',
    frameNumbers: 'Números de Fotogramas (separados por comas)',
    everyNth: 'Cada Nº Fotograma',
    nth: 'Cada',
    frames: 'Fotogramas',
    selectFirst: 'Primer Fotograma',
    selectLast: 'Último Fotograma',
    selectMiddle: 'Fotograma Central',
    selectKeyFrames: 'Detectar Automáticamente Fotogramas Clave'
  },

  output: {
    title: 'Configuración de Exportación',
    format: 'Formato de Salida',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: 'Escala',
    originalSize: 'Tamaño Original',
    customSize: 'Tamaño Personalizado',
    width: 'Ancho',
    height: 'Alto',
    quality: 'Calidad',
    qualityValue: 'Calidad: {value}%',
    lowQuality: 'Baja Calidad (tamaño de archivo más pequeño)',
    highQuality: 'Alta Calidad (tamaño de archivo mayor)',
    naming: 'Nombramiento de Archivos',
    pattern: 'Patrón',
    filename: 'Nombre Original del Archivo',
    framenumber: 'Número de Fotograma',
    timestamp: 'Marca de Tiempo',
    preview: 'Vista Previa',
    downloadOptions: 'Opciones de Descarga',
    separateFiles: 'Archivos Separados',
    zipArchive: 'Archivo ZIP',
    spritesheet: 'Spritesheet',
    gridSize: 'Tamaño de la Cuadrícula',
    columns: 'Columnas',
    animation: 'Nueva Animación'
  },

  frames: {
    title: 'Fotogramas Extraídos',
    frameInfo: 'Fotograma {number} de {total}',
    frame: 'Fotograma',
    delay: 'Retraso: {delay} ms',
    downloadFrame: 'Descargar',
    copyFrame: 'Copiar',
    selectAll: 'Seleccionar Todo',
    unselectAll: 'Deseleccionar Todo',
    invertSelection: 'Invertir Selección',
    noFrames: 'Aún no se han extraído fotogramas',
    extractFirst: 'Por favor, extrae fotogramas primero'
  },

  actions: {
    extract: 'Extraer Fotogramas',
    preview: 'Vista Previa',
    downloadSelected: 'Descargar Seleccionados',
    downloadAll: 'Descargar Todos',
    createSpritesheet: 'Crear Spritesheet',
    createNewGif: 'Crear Nuevo GIF',
    cancel: 'Cancelar',
    processing: 'Procesando...'
  },

  messages: {
    extractionComplete: 'Extracción de fotogramas completada',
    extracting: 'Extrayendo fotogramas...',
    noFramesSelected: 'Ningún fotograma seleccionado',
    processingGif: 'Procesando GIF...',
    invalidGif: 'Archivo GIF inválido',
    framesCopied: 'Fotogramas copiados al portapapeles',
    downloadStarted: 'Descarga iniciada',
    spritesheetCreated: 'Spritesheet creado correctamente',
    frameDownloaded: 'Fotograma descargado',
    preparingFrames: 'Preparando todos los fotogramas, por favor espera...',
    allFramesDownloaded: 'Todos los fotogramas descargados',
    downloadError: 'No se pudieron descargar todos los fotogramas',
    resetComplete: 'Reinicio completado',
    fileEmpty: 'Los datos del archivo están vacíos'
  }
};