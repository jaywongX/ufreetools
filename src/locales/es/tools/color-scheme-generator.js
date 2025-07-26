export default {
  name: 'Generador de esquemas de color',
  description: 'Cree esquemas de color armoniosos para sus proyectos de diseño',

  baseColor: {
    title: 'Color Base',
    picker: 'Selector de colores',
    hex: 'Hex',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'Color Aleatorio',
    recent: 'Colores Recientes',
    hint: 'Haga clic en el bloque de color o ingrese un valor hexadecimal'
  },

  schemeTypes: {
    title: 'Teoría del color',
    monochromatic: 'Monocromático',
    analogous: 'Análogo',
    complementary: 'Complementario',
    splitComplementary: 'Complementario Dividido',
    triadic: 'Triádico',
    tetradic: 'Tetrádico',
    square: 'Cuadrado',
    compound: 'Compuesto',
    shades: 'Tonos',
    custom: 'Personalizado'
  },

  options: {
    colorCount: 'Número de Colores',
    saturationRange: 'Rango de Saturación',
    brightnessRange: 'Rango de Brillo',
    includeBaseColor: 'Incluir Color Base',
    lockBaseColor: 'Bloquear Color Base',
    colorSpace: 'Espacio de Color',
    sortBy: 'Ordenar Por',
    colorBlindSafe: 'Seguro para Daltónicos',
    contrastRatio: 'Relación de Contraste Mínima'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: 'Matiz',
    saturation: 'Saturación',
    brightness: 'Brillo',
    harmony: 'Armonía',
    none: 'Ninguno'
  },

  palettes: {
    title: 'Paleta Generada',
    save: 'Guardar Paleta',
    copy: 'Copiar Paleta',
    export: 'Exportar como variable CSS',
    apply: 'Aplicar a la Vista Previa'
  },

  exportFormats: {
    title: 'Formato de Exportación',
    css: 'Variables CSS',
    scss: 'Variables SCSS',
    less: 'Variables LESS',
    json: 'JSON',
    svg: 'Muestras SVG',
    ase: 'Adobe ASE',
    tailwind: 'Configuración Tailwind',
    pdf: 'PDF'
  },

  preview: {
    title: 'Vista Previa',
    website: 'Sitio Web',
    mobilApp: 'Aplicación Móvil',
    dashboard: 'Panel de Control',
    card: 'Tarjeta',
    poster: 'Póster',
    custom: 'Personalizado',
    mainButton: 'Botón Principal',
    secondButton: 'Botón Secundario',
    tag: 'Etiqueta'
  },

  savedPalettes: {
    title: 'Paletas Guardadas',
    load: 'Cargar',
    delete: 'Eliminar',
    rename: 'Renombrar',
    noSavedPalettes: 'No hay paletas guardadas',
    saved: 'Paletas guardadas',
    schemeNameEmpty: 'Nombre del esquema vacío'
  },

  actions: {
    generate: 'Generar Esquema',
    regenerate: 'Regenerar',
    reset: 'Restablecer',
    lockColor: 'Bloquear Color',
    unlockColor: 'Desbloquear Color',
    save: 'Guardar esquema'
  },

  messages: {
    paletteSaved: 'Paleta guardada correctamente',
    paletteDeleted: 'Paleta eliminada',
    copied: 'Copiado al portapapeles',
    exported: 'Exportado correctamente',
    adjustmentParam: 'Parámetro de ajuste',
    schemeName: 'Nombre del esquema',
    copyAllColors: 'Copiar Todos los Colores'
  }
};