export default {
  name: 'Pixelizador de Imagen',
  description: 'Convierte imágenes en arte pixelado con resolución y efectos personalizables',

  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastra y suelta tu imagen aquí o haz clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 10MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Ajustes de Pixelización',
    pixelSize: 'Tamaño del Píxel',
    pixelShape: 'Forma del Píxel',
    shapes: {
      square: 'Cuadrado',
      rounded: 'Redondeado',
      circle: 'Círculo',
      diamond: 'Rombo',
      custom: 'Personalizado'
    },
    resolution: 'Resolución',
    width: 'Ancho',
    height: 'Alto',
    preserveAspect: 'Mantener Relación de Aspecto',
    colorReduction: 'Reducción de Color',
    colors: 'Número de Colores',
    dithering: 'Dithering',
    ditheringTypes: {
      none: 'Ninguno',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: 'Ordenado',
      bayer: 'Bayer'
    },
    palette: 'Paleta de Colores',
    palettes: {
      auto: 'Auto',
      grayscale: 'Escala de Grises',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Personalizado',
      normal: 'Normal',
      retro: 'Retro',
      sepia: 'Sepia',
      bright: 'Brillante',
      cool: 'Frío',
      warm: 'Cálido',
      bw: 'Negro & Blanco',
      invert: 'Invertido'
    },
    customPalette: 'Colores de Paleta Personalizada',
    small: 'Pequeño (Detallado)',
    large: 'Grande (Rudo)',
    low: 'Bajo (Retro)',
    high: 'Alto (Color Verdadero)'
  },

  effects: {
    title: 'Efectos',
    brightness: 'Brillo',
    contrast: 'Contraste',
    saturation: 'Saturación',
    hue: 'Matiz',
    outline: 'Contorno',
    outlineColor: 'Color del Contorno',
    noise: 'Ruido',
    posterize: 'Posterizar',
    invert: 'Invertir Colores',
    grayscale: 'Escala de Grises',
    sepia: 'Sepia',
    vignette: 'Viñeta'
  },

  animation: {
    title: 'Ajustes de Animación',
    animated: 'Procesar como Animación',
    frameRate: 'Velocidad de Cuadros',
    optimizeFrames: 'Optimizar Cuadros',
    looping: 'Repetición',
    loopCount: 'Número de Repeticiones'
  },

  output: {
    title: 'Salida',
    preview: 'Vista Previa',
    original: 'Original',
    pixelated: 'Pixelada',
    comparison: 'Comparación',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    gridOverlay: 'Superposición de Cuadrícula',
    downloadAs: 'Descargar Como',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Hoja de Sprite',
    quality: 'Calidad',
    scale: 'Escala',
    loading: 'Cargando...',
    noImage: 'Por favor selecciona una imagen',
    processing: 'Procesando...'
  },

  presets: {
    title: 'Preestablecidos',
    save: 'Guardar Ajustes Actuales',
    load: 'Cargar Preestablecido',
    delete: 'Eliminar Preestablecido',
    presetName: 'Nombre del Preestablecido',
    defaults: {
      lowRes: 'Baja Resolución',
      highContrast: 'Alto Contraste',
      retro: 'Retro',
      minimal: 'Minimalista',
      sketch: 'Esquema',
      blueprint: 'Plano'
    }
  },

  actions: {
    pixelate: 'Pixelizar Imagen',
    reset: 'Restablecer Ajustes',
    applyChanges: 'Aplicar Cambios',
    undoChanges: 'Deshacer Cambios',
    downloadImage: 'Descargar Imagen',
    selectImage: 'Seleccionar Imagen'
  },

  messages: {
    processing: 'Procesando la imagen...',
    success: 'Pixelización de imagen exitosa',
    downloading: 'Preparando para descargar...',
    presetSaved: 'Preestablecido guardado exitosamente',
    presetLoaded: 'Preestablecido cargado',
    presetDeleted: 'Preestablecido eliminado',
    error: 'Error: {error}',
    fileSize: 'Tamaño del Archivo',
    pixels: 'Píxeles',
    imageSize: 'Dimensiones de la Imagen',
    downloadSuccess: 'Imagen descargada exitosamente',
    downloadFailed: 'Fallo al descargar',
    resetSuccess: 'Los ajustes han sido restablecidos',
    fileName: 'Nombre del Archivo'
  }
};