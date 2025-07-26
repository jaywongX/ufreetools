export default {
  name: 'Visor de EXIF de Imágenes',
  description: 'Ver y analizar metadatos EXIF en fotos',

  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastre la imagen aquí o haga clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 15MB',
    supportedFormats: 'Formatos admitidos: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'Cualquier archivo de imagen que contenga datos EXIF'
  },

  display: {
    title: 'Información de la Imagen',
    noExif: 'No se encontraron datos EXIF en esta imagen',
    basicInfo: 'Información Básica',
    camera: 'Información de la Cámara',
    exposure: 'Información de Exposición',
    location: 'Información de Ubicación',
    dates: 'Información de Fechas',
    advanced: 'Datos EXIF Avanzados',
    thumbnail: 'Miniatura EXIF'
  },

  exif: {
    fileName: 'Nombre del Archivo',
    fileSize: 'Tamaño del Archivo',
    fileType: 'Tipo de Archivo',
    dimensions: 'Dimensiones',
    make: 'Marca de la Cámara',
    model: 'Modelo de la Cámara',
    lens: 'Lente',
    focalLength: 'Longitud Focal',
    focalLength35: 'Longitud Focal (35mm)',
    aperture: 'Apertura',
    fNumber: 'Valor F',
    exposureTime: 'Tiempo de Exposición',
    shutterSpeed: 'Velocidad de Obturación',
    iso: 'ISO',
    exposureMode: 'Modo de Exposición',
    exposureProgram: 'Programa de Exposición',
    meteringMode: 'Modo de Medición',
    flash: 'Flash',
    flashMode: 'Modo Flash',
    whiteBalance: 'Balance de Blancos',
    exposureBias: 'Compensación de Exposición',
    latitude: 'Latitud',
    longitude: 'Longitud',
    altitude: 'Altitud',
    locationName: 'Nombre de la Ubicación',
    dateOriginal: 'Fecha de Toma',
    dateDigitized: 'Fecha de Digitalización',
    dateModified: 'Fecha de Modificación',
    software: 'Software',
    artist: 'Artista',
    copyright: 'Derechos de Autor',
    resolution: 'Resolución',
    colorSpace: 'Espacio de Color',
    orientation: 'Orientación',
    compression: 'Compresión',
    bitsPerSample: 'Bits por Muestra',
    maxAperture: 'Apertura Máxima',
    contrast: 'Contraste',
    saturation: 'Saturación',
    sharpness: 'Nitidez',
    brightness: 'Brillo',
    sceneCaptureType: 'Tipo de Captura de Escena',
    gainControl: 'Control de Ganancia',
    serialNumber: 'Número de Serie',
    width: 'Ancho',
    height: 'Alto'
  },

  map: {
    title: 'Ubicación de la Foto',
    show: 'Mostrar en el Mapa',
    noLocation: 'No hay datos de ubicación disponibles',
    directions: 'Obtener Direcciones',
    copy: 'Copiar Coordenadas',
    warning: 'Advertencia: Esta imagen contiene datos de ubicación. Tenga cuidado al compartir.'
  },

  actions: {
    showAll: 'Mostrar Todos los Metadatos',
    hideAll: 'Ocultar Todos los Metadatos',
    copyAll: 'Copiar Todos los Metadatos',
    save: 'Guardar Metadatos como JSON',
    removeMeta: 'Eliminar Metadatos',
    download: 'Descargar Imagen Sin Metadatos',
    viewFullSize: 'Ver Tamaño Original',
    refresh: 'Recargar Datos'
  },

  settings: {
    title: 'Ajustes de Visualización',
    showGroups: 'Agrupar Metadatos',
    showRaw: 'Mostrar Valores Crudos',
    showTechnical: 'Mostrar Datos Técnicos',
    showFiltered: 'Ocultar Campos Vacíos',
    darkMode: 'Modo Oscuro',
    mapProvider: 'Proveedor de Mapas'
  },

  tips: {
    privacy: 'Consejo de Privacidad: Las fotos pueden contener datos personales como ubicación e información del dispositivo.',
    noExif: '¿No ves los datos EXIF? Algunas plataformas sociales y herramientas de edición de imágenes eliminan los metadatos.',
    rawView: 'Cambie a "Vista Cruda" para ver todos los metadatos disponibles.'
  },

  messages: {
    copied: 'Metadatos copiados al portapapeles',
    saved: 'Metadatos guardados como archivo JSON',
    noExif: 'No se encontraron datos EXIF en esta imagen',
    metadataRemoved: 'Eliminación de metadatos exitosa',
    imageLoaded: 'Imagen cargada exitosamente',
    notUse: 'No Usado',
    use: 'Usado',
    auto: 'Automático',
    manual: 'Manual',
    reset: 'Restablecido Exitosamente',
    exifExtracted: 'Datos EXIF extraídos correctamente'
  },

  error: {
    copyFailed: 'Fallo al copiar',
    exportFailed: 'Exportación fallida',
    exifExtractionFailed: 'Fallo al extraer los datos EXIF',
    imageLoadFailed: 'Fallo al cargar la imagen'
  },

  orientation: {
    normal: 'Normal',
    horizontalFlip: 'Volteo Horizontal',
    rotate180: 'Rotar 180°',
    verticalFlip: 'Volteo Vertical',
    rotate90VerticalFlip: 'Rotar 90° y Volteo Vertical',
    rotate90: 'Rotar 90° a la Derecha',
    rotate90HorizontalFlip: 'Rotar 90° a la Derecha y Volteo Horizontal',
    rotate270: 'Rotar 90° a la Izquierda'
  }
};