export default {
  name: 'Generador de Mosaicos de Imagen',
  description: 'Crea arte de mosaico combinando pequeñas imágenes en una imagen más grande',

  upload: {
    title: 'Subir Imagen Principal',
    dropzone: 'Arrastra y suelta tu imagen principal aquí o haz clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 15MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP'
  },

  tiles: {
    title: 'Imágenes de Mosaico',
    uploadTiles: 'Subir Imágenes de Mosaico',
    dropzoneTiles: 'Arrastra y suelta las imágenes de mosaico aquí o haz clic para navegar',
    maxTiles: 'Hasta {count} imágenes',
    useFolder: 'Sube una carpeta de imágenes',
    orUseSample: 'O usa galerías de muestra',
    sampleSets: 'Conjuntos de Mosaicos de Muestra',
    nature: 'Naturaleza',
    people: 'Personas',
    art: 'Arte',
    abstract: 'Abstracto',
    animals: 'Animales',
    clearAll: 'Limpiar Todas las Imágenes'
  },

  settings: {
    title: 'Configuración del Mosaico',
    tileSize: 'Tamaño del Mosaico',
    small: 'Pequeño (Detallado)',
    medium: 'Mediano',
    large: 'Grande (Rudo)',
    shape: 'Forma',
    square: 'Cuadrado',
    circle: 'Círculo',
    applicationMode: 'Modo de Aplicación del Mosaico',
    all: 'Toda la Imagen',
    selectRegion: 'Seleccionar Región',
    selectingRegion: 'Seleccionando región...',
    autoDetectFaces: 'Detectar Rostros Automáticamente',
    detectFaces: 'Detectar Rostros',
    detectFacesDescription: 'Detectar rostros en la imagen y aplicar automáticamente mosaicos a ellos',
    edgeSmoothing: 'Suavizado de Bordes',
    edgeSmoothingDescription: 'Suavizar los bordes de los mosaicos para transiciones más naturales',
    custom: 'Personalizado',
    width: 'Ancho',
    height: 'Alto',
    tilesWide: 'Número de Mosaicos Horizontalmente',
    tilesHigh: 'Número de Mosaicos Verticalmente',
    colorMatch: 'Coincidencia de Color',
    intensity: 'Intensidad',
    low: 'Baja',
    high: 'Alta',
    reuseTiles: 'Reutilización de Mosaicos',
    allowDuplicates: 'Permitir Duplicados',
    maxUses: 'Uso Máximo por Mosaico',
    colorAdjustment: 'Ajuste de Color',
    adjustTiles: 'Ajustar colores de los mosaicos para coincidir',
    blendOriginal: 'Mezclar con la Original',
    blendAmount: 'Cantidad de Mezcla',
    random: 'Variación Aleatoria',
    shuffle: 'Barajar Mosaicos'
  },

  advanced: {
    title: 'Opciones Avanzadas',
    algorithm: 'Algoritmo de Coincidencia',
    algorithms: {
      average: 'Color Promedio',
      dominant: 'Color Dominante',
      histogram: 'Histograma de Color',
      pattern: 'Coincidencia de Patrón'
    },
    tileShape: 'Forma del Mosaico',
    shapes: {
      square: 'Cuadrado',
      circle: 'Círculo',
      hexagon: 'Hexágono',
      triangle: 'Triángulo',
      random: 'Aleatorio'
    },
    tileGap: 'Espacio entre Mosaicos',
    borderColor: 'Color del Borde',
    backgroundColor: 'Color de Fondo'
  },

  output: {
    fileName: 'Nombre del Archivo',
    title: 'Salida',
    preview: 'Vista Previa',
    original: 'Original',
    mosaic: 'Mosaico',
    sideBySide: 'Lado a Lado',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    download: 'Descargar Mosaico',
    asJpg: 'Descargar como JPG',
    asPng: 'Descargar como PNG',
    highRes: 'Alta Resolución',
    resolution: 'Resolución de Salida',
    format: 'Formato',
    quality: 'Calidad',
    size: 'Tamaño',
    pixel: 'Píxeles',
    pleaseSelectImage: 'Por favor selecciona una imagen',
    pleaseSelectImageAndAdjustSettings: 'Por favor selecciona una imagen y ajusta la configuración'
  },

  actions: {
    generate: 'Generar Mosaico',
    regenerate: 'Regenerar',
    cancel: 'Cancelar Generación',
    reset: 'Restablecer',
    detectFaces: 'Detectar Rostros',
    saveSettings: 'Guardar Configuración',
    loadSettings: 'Cargar Configuración'
  },

  messages: {
    generating: 'Generando mosaico... Esto puede tomar algo de tiempo.',
    generationComplete: '¡Generación del mosaico exitosa!',
    notEnoughTiles: 'No hay suficientes imágenes de mosaico. Por favor carga más imágenes.',
    tileProcessing: 'Procesando imágenes de mosaico: {progress}%',
    downloadStarted: 'La descarga ha comenzado',
    settingsSaved: 'Configuración guardada',
    selecting: 'Seleccionando región...',
    preview: 'El resultado después de aplicar el mosaico se mostrará aquí',
    faceDetected: 'Regiones de rostros detectadas',
    faceDetectionFailed: 'Fallo al detectar rostros',
    reset: 'La configuración ha sido restablecida',
    error: 'Error: {message}'
  }
};