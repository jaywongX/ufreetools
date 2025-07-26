export default {
  name: 'Selector de Colores',
  description: 'Elige, convierte y genera esquemas de colores con herramientas avanzadas de color',

  options: {
    colorSpace: 'Espacio de Color',
    paletteType: 'Tipo de Paleta',
    includeAlpha: 'Incluir Canal Alpha',
    colorNaming: 'Nombre del Color'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Colores por Nombre'
  },

  palettes: {
    monochromatic: 'Monocromático',
    complementary: 'Complementario',
    analogous: 'Análogo',
    triadic: 'Triádico',
    tetradic: 'Tetrádico',
    split: 'Split Complementary (Complementario Dividido)'
  },

  actions: {
    pickColor: 'Elegir Color',
    randomColor: 'Generar Color Aleatorio',
    generatePalette: 'Generar Paleta',
    convert: 'Convertir',
    copy: 'Copiar',
    copyAll: 'Copiar Todo',
    save: 'Guardar Color',
    clear: 'Limpiar',
    copyColor: 'Copiar el Color Actual',
    reset: 'Restablecer'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Esquemas de Color',
    complementary: 'Complementario',
    triadic: 'Triádico',
    analogous: 'Análogo',
    monochromatic: 'Monocromático',
    split: 'Split Complementary (Complementario Dividido)',
    double: 'Doble Complementario',
    square: 'Cuadrado',
    compound: 'Compuesto'
  },

  colorAdjust: {
    title: 'Ajuste de Color',
    hue: 'Tono',
    saturation: 'Saturación',
    lightness: 'Brillo',
    alpha: 'Transparencia'
  },

  colorInfo: {
    title: 'Información del Color',
    name: 'Nombre del Color',
    format: 'Formato',
    contrast: 'Contraste',
    accessibility: {
      title: 'Accesibilidad',
      pass: 'Cumple WCAG',
      fail: 'No cumple WCAG',
      normal: 'Texto Normal',
      large: 'Texto Grande'
    }
  },

  messages: {
    copied: 'Color copiado al portapapeles',
    copyFailed: 'Fallo al copiar el color',
    invalidColor: 'Formato de color inválido',
    contrastWarning: 'Relación de contraste inadecuada',
    saved: 'Color guardado',
    contrast: 'Relación de contraste: {ratio}',
    accessibility: {
      AAA: 'Excelente contraste (AAA)',
      AA: 'Buen contraste (AA)',
      fail: 'Contraste bajo - no accesible'
    },
    preview: 'Vista previa',
    colorValue: 'Color'
  },

  history: {
    title: 'Historial de Colores',
    empty: 'No hay colores en el historial',
    clear: 'Limpiar Historial'
  },

  colorPalette: {
    title: 'Paleta de Colores',
    addToPalette: 'Agregar a la Paleta',
    removeFromPalette: 'Eliminar de la Paleta',
    exportPalette: 'Exportar Paleta',
    importPalette: 'Importar Paleta',
    clearPalette: 'Limpiar Paleta'
  }
};