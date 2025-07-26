export default {
  name: 'Extractor de Colores de Imágenes',
  description: 'Extraer paletas de colores y colores dominantes a partir de imágenes',

  input: {
    title: 'Subir Imagen',
    dropzone: 'Arrastre la imagen aquí o haga clic para cargarla',
    formats: 'Formatos admitidos: JPG, PNG, GIF, WebP, SVG',
    browse: 'Buscar Archivos',
    selectImage: 'Seleccionar Imagen',
    orText: 'o',
    pasteUrl: 'Pegar URL de la imagen:',
    loadUrl: 'Cargar desde URL',
    urlPlaceholder: 'https://ejemplo.com/imagen.jpg',
    unnamed: 'Imagen Sin Nombre'
  },

  options: {
    title: 'Opciones de Extracción',
    extractSettings: 'Ajustes de Extracción',
    colorCount: 'Número de Colores',
    paletteSize: 'Tamaño de la Paleta',
    paletteMin: 'Mínimo (3)',
    paletteMax: 'Máximo (20)',
    colorSimilarity: 'Similitud de Color',
    similiarityToggle: 'Permitir colores similares',
    quality: 'Calidad de Extracción',
    colorModel: 'Modelo de Color',
    colorSpace: 'Espacio de Color',
    colorFormat: 'Formato de Color',
    sortBy: 'Ordenar Colores Por',
    sortByPopularity: 'Por Frecuencia de Aparición',
    sortByLuminance: 'Por Luminancia',
    sortByHue: 'Por Tono',
    sortBySaturation: 'Por Saturación',
    ignoreWhite: 'Ignorar Blanco',
    ignoreBlack: 'Ignorar Negro',
    threshold: 'Umbral de Similitud'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'Hexadecimal (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA con Transparencia',
    hsl: 'HSL',
    hsla: 'HSLA con Transparencia',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Frecuencia de Aparición',
    luminance: 'Luminancia',
    hue: 'Tono',
    saturation: 'Saturación',
    original: 'Orden Original'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Colores Extraídos',
    colorsFound: '{count} colores extraídos',
    dominantColor: 'Color Dominante',
    mainColor: 'Color Principal',
    complementary: 'Color Complementario',
    palette: 'Paleta de Colores',
    colorPalette: 'Paleta de Colores',
    palettePreview: 'Vista Previa de la Paleta',
    usage: 'Uso del Color (%)',
    percentage: 'Porcentaje: {value}%',
    copyAll: 'Copiar Todos los Colores',
    clickToCopy: 'Haga clic para copiar el color: {color}'
  },

  display: {
    originalImage: 'Imagen Original',
    colorPalette: 'Paleta de Colores',
    uploadFirst: 'Por favor, suba una imagen primero',
    clickExtract: 'Haga clic en el botón \"Extraer Colores\" para obtener la paleta de colores de la imagen'
  },

  actions: {
    extract: 'Extraer Colores',
    extracting: 'Procesando...',
    download: 'Descargar Paleta',
    copy: 'Copiar',
    copyValue: 'Copiar Valor',
    reset: 'Restablecer',
    copyPalette: 'Copiar Paleta',
    exportJson: 'Exportar como JSON',
    exportCss: 'Exportar como Variables CSS',
    exportSass: 'Exportar como Variables SASS',
    exportSwatch: 'Exportar como ASE Swatch'
  },

  palette: {
    title: 'Paleta Nombrada',
    vibrant: 'Vibrante',
    muted: 'Suave',
    dark: 'Oscuro',
    light: 'Claro',
    custom: 'Personalizado'
  },

  messages: {
    imageLoaded: 'Imagen cargada exitosamente',
    processingImage: 'Procesando imagen...',
    extractionComplete: 'Extracción de colores completada',
    extractionFailed: 'La extracción de colores falló: {error}',
    copied: 'Copiado al portapapeles',
    copiedColor: 'Copiado: {color}',
    copiedAll: 'Todos los colores copiados',
    copyFailed: 'Fallo al copiar',
    resetDone: 'Restablecimiento completado',
    invalidImage: 'Archivo de imagen inválido',
    noImageSelected: 'No se ha seleccionado ninguna imagen'
  }
};