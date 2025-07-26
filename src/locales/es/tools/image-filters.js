export default {
  name: 'Filtros de Imagen',
  description: 'Aplica diversos filtros y efectos a imágenes con vista previa en tiempo real',

  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastra y suelta tu imagen aquí o haz clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 10MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: 'Editor de Filtro',
    original: 'Original',
    filtered: 'Filtrada',
    reset: 'Restablecer Todo',
    undo: 'Deshacer',
    redo: 'Rehacer',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    fitToScreen: 'Ajustar a la Pantalla',
    showOriginal: 'Mostrar Original'
  },

  filters: {
    title: 'Filtros',
    basic: 'Ajustes Básicos',
    brightness: 'Brillo',
    contrast: 'Contraste',
    saturation: 'Saturación',
    hue: 'Matiz',
    exposure: 'Exposición',
    vibrance: 'Vibración',
    temperature: 'Temperatura',
    gamma: 'Gamma',
    clarity: 'Claridad',
    effects: 'Efectos',
    grayscale: 'Escala de Grises',
    sepia: 'Sepia',
    vintage: 'Vintage',
    polaroid: 'Polaroid',
    duotone: 'Duotono',
    noise: 'Ruido',
    pixelate: 'Pixelado',
    blur: 'Desenfoque',
    sharpen: 'Enfocar',
    vignette: 'Viñeta',
    color: 'Color',
    colorOverlay: 'Superposición de Color',
    colorize: 'Colorear',
    gradientMap: 'Mapa de Gradiente',
    replaceColor: 'Reemplazar Color',
    advanced: 'Avanzado',
    levels: 'Niveles',
    curves: 'Curvas',
    shadows: 'Sombras',
    highlights: 'Resaltados',
    blacks: 'Negros',
    whites: 'Blancos',
    channels: 'Canales RGB'
  },

  presets: {
    title: 'Preestablecidos',
    custom: 'Personalizado',
    blackAndWhite: 'Blanco y Negro',
    highContrast: 'Alto Contraste',
    normal: 'Normal',
    cinematic: 'Cinematográfico',
    warm: 'Cálido',
    cool: 'Frío',
    sunset: 'Atardecer',
    vintage: 'Vintage',
    invert: 'Invertir',
    cross: 'Proceso Cruzado',
    matte: 'Mate',
    flat: 'Plano',
    portrait: 'Retrato',
    landscape: 'Paisaje',
    vivid: 'Vívido',
    moody: 'Melancólico',
    savePreset: 'Guardar Actual como Preestablecido',
    deletePreset: 'Eliminar Preestablecido',
    presetName: 'Nombre del Preestablecido'
  },

  output: {
    title: 'Salida',
    fileName: 'Nombre del Archivo',
    format: 'Formato',
    quality: 'Calidad',
    width: 'Ancho',
    height: 'Altura',
    download: 'Descargar Imagen',
    saveOnline: 'Guardar En Línea',
    share: 'Compartir',
    applyToNew: 'Aplicar a Nueva Imagen'
  },

  history: {
    title: 'Historial',
    revert: 'Revertir a Este Paso',
    clear: 'Limpiar Historial'
  },

  actions: {
    apply: 'Aplicar Filtro',
    download: 'Descargar',
    save: 'Guardar',
    reset: 'Restablecer',
    cancel: 'Cancelar'
  },

  messages: {
    imageLoaded: 'Imagen cargada exitosamente',
    filterApplied: 'Filtro aplicado exitosamente',
    filtersReset: 'Los filtros se han restablecido a los valores predeterminados',
    downloadStarted: 'La descarga ha comenzado',
    presetSaved: 'Preestablecido guardado exitosamente',
    presetDeleted: 'El preestablecido ha sido eliminado',
    invalidFile: 'Archivo inválido. Por favor carga una imagen válida.',
    fileTooLarge: 'El archivo es demasiado grande. El tamaño máximo es de 10MB.'
  }
};