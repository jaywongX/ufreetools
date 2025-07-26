export default {
  name: 'Marca de Agua en Imagen',
  description: 'Agrega marcas de agua de texto o imagen a tus fotos con configuraciones personalizables',

  upload: {
    title: 'Subir Imágenes',
    dropzone: 'Arrastra y suelta las imágenes aquí o haz clic para navegar',
    addMore: 'Agregar Más Imágenes',
    clearAll: 'Limpiar Todo',
    maxFiles: 'Máximo {count} imágenes',
    maxSize: 'Tamaño máximo: {size}MB por imagen',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: 'Tipo de Marca de Agua',
    text: 'Marca de Agua de Texto',
    image: 'Marca de Agua de Imagen',
    both: 'Texto & Imagen'
  },

  textWatermark: {
    title: 'Marca de Agua de Texto',
    text: 'Texto de la Marca de Agua',
    font: 'Fuente',
    size: 'Tamaño',
    color: 'Color',
    opacity: 'Opacidad',
    rotation: 'Rotación',
    shadow: 'Sombra del Texto',
    background: 'Fondo del Texto',
    padding: 'Relleno',
    border: 'Borde',
    spacing: 'Espaciado entre Letras'
  },

  imageWatermark: {
    title: 'Marca de Agua de Imagen',
    upload: 'Subir Imagen de Marca de Agua',
    selectLogo: 'Seleccionar Logotipo',
    presetLogos: 'Logotipos Preestablecidos',
    size: 'Tamaño',
    opacity: 'Opacidad',
    rotation: 'Rotación',
    offset: 'Desplazamiento'
  },

  positioning: {
    title: 'Posicionamiento',
    position: 'Posición',
    custom: 'Posición Personalizada',
    xPosition: 'Posición X',
    yPosition: 'Posición Y',
    tiled: 'Patrón Repetido',
    margin: 'Margen',
    scale: 'Escalar con la Imagen'
  },

  positions: {
    title: 'Posiciones',
    topLeft: 'Arriba a la Izquierda',
    topCenter: 'Centro Arriba',
    topRight: 'Arriba a la Derecha',
    middleLeft: 'Centrado a la Izquierda',
    middleCenter: 'Centro',
    middleRight: 'Centrado a la Derecha',
    bottomLeft: 'Abajo a la Izquierda',
    bottomCenter: 'Centro Abajo',
    bottomRight: 'Abajo a la Derecha',
    custom: 'Posición Personalizada'
  },

  output: {
    title: 'Salida',
    quality: 'Calidad de Salida',
    format: 'Formato de Salida',
    original: 'Igual que el Original',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Vista Previa',
    downloadIndividual: 'Descargar',
    downloadAll: 'Descargar Todas',
    downloadAsZip: 'Descargar como ZIP'
  },

  presets: {
    title: 'Preestablecidos',
    save: 'Guardar Configuración Actual',
    load: 'Cargar Preestablecido',
    delete: 'Eliminar Preestablecido',
    presetName: 'Nombre del Preestablecido'
  },

  actions: {
    apply: 'Aplicar Marca de Agua',
    applyToAll: 'Aplicar a Todas',
    reset: 'Restablecer',
    preview: 'Vista Previa',
    undo: 'Deshacer',
    cancel: 'Cancelar Procesamiento'
  },

  messages: {
    processing: 'Procesando...',
    success: 'Marca de agua aplicada exitosamente',
    error: 'Error: {error}',
    noImages: 'Por favor agrega imágenes primero',
    noWatermark: 'Por favor agrega una marca de agua de texto o imagen',
    presetSaved: 'Preestablecido guardado exitosamente',
    presetLoaded: 'Preestablecido cargado exitosamente',
    presetDeleted: 'Preestablecido eliminado',
    watermarkApplied: 'Marca de agua aplicada',
    watermarkImageLoadError: 'No se pudo cargar la imagen de marca de agua',
    imageLoadError: 'No se pudo cargar la imagen',
    resetSuccess: 'Restablecimiento exitoso',
    downloadStarted: 'La descarga ha comenzado',
    downloadError: 'Fallo al descargar la imagen',
    imageLoaded: 'Imagen cargada exitosamente',
    canvasInitError: 'No se pudo inicializar el lienzo',
    tiledWatermarkError: 'No se pudo crear la marca de agua repetida'
  }
};