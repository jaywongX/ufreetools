export default {
  name: 'Optimizador SVG',
  description: 'Optimiza y limpia archivos SVG para mejorar el rendimiento y reducir el tamaño del archivo',

  upload: {
    title: 'Subir SVG',
    dropzone: 'Arrastra un archivo SVG aquí o haz clic para seleccionar',
    or: 'O',
    pasteCode: 'Pegar código SVG',
    maxSize: 'Tamaño máximo de archivo: 5MB',
    onlySvg: 'Solo se admiten archivos SVG',
    selected: 'Seleccionado',
    changeFile: 'Cambiar archivo'
  },

  input: {
    title: 'SVG de entrada',
    pasteHere: 'Pega el código SVG aquí...',
    loadExample: 'Cargar Ejemplo',
    clear: 'Limpiar',
    validate: 'Validar SVG'
  },

  output: {
    title: 'Resultados de Optimización',
    copyToClipboard: 'Copiar al Portapapeles',
    download: 'Descargar SVG',
    beforeSize: 'Tamaño Original',
    afterSize: 'Tamaño Optimizado',
    reduction: 'Reducción',
    reductionBy: 'Reducido en',
    svgCode: 'Código SVG'
  },

  options: {
    title: 'Opciones de Optimización',
    preset: 'Preajuste',
    presets: {
      default: 'Por Defecto',
      light: 'Ligero',
      aggressive: 'Agresivo',
      custom: 'Personalizado'
    },
    removeComments: 'Eliminar Comentarios',
    removeCommentsDesc: 'Eliminar comentarios y secciones CDATA',
    removeHiddenElements: 'Eliminar Elementos Ocultos',
    removeEmptyContainers: 'Eliminar Contenedores Vacíos',
    removeUnusedDefs: 'Eliminar Definiciones No Utilizadas',
    removeViewBox: 'Eliminar viewBox',
    keepViewBox: 'Mantener viewBox',
    keepViewBoxDesc: 'Mantener el atributo viewBox para asegurar la escalabilidad del SVG',
    cleanupIDs: 'Limpiar IDs',
    cleanupIDsDesc: 'Eliminar o acortar IDs no utilizados',
    convertColors: 'Convertir Colores a Hexadecimal',
    removeMetadata: 'Eliminar Metadatos',
    removeMetadataDesc: 'Eliminar elementos <metadata>',
    removeDoctype: 'Eliminar Doctype',
    removeXMLProcInst: 'Eliminar Instrucciones XML',
    removeEditorsNS: 'Eliminar Espacios de Nombres del Editor',
    collapseGroups: 'Colapsar Grupos',
    collapseGroupsDesc: 'Colapsar grupos sin atributos especiales',
    convertPathData: 'Optimizar Datos de Ruta',
    convertPathDataDesc: 'Convertir datos de ruta a coordenadas relativas, reducir decimales, etc.',
    convertTransforms: 'Optimizar Transformaciones',
    convertShapeToPath: 'Convertir Formas a Rutas',
    convertShapeToPathDesc: 'Convertir formas básicas a elementos <path>',
    removeUselessStrokeAndFill: 'Eliminar Trazo y Relleno Innecesarios',
    moveElemsAttrsToGroup: 'Mover Atributos de Elementos al Grupo',
    mergePaths: 'Fusionar Rutas',
    minifyStyles: 'Minificar Estilos',
    inlineStyles: 'Estilos en Línea',
    inlineStylesDesc: 'Convertir estilos desde elementos <style> a estilos en línea',
    cleanupNumericValues: 'Redondear Valores Numéricos',
    precision: 'Precisión Numérica',
    decimalPlaces: 'lugares decimales',
    lowPrecision: 'Baja Precisión (tamaño menor)',
    highPrecision: 'Alta Precisión (mejor calidad)',
    removeDimensions: 'Eliminar Dimensiones',
    removeDimensionsDesc: 'Eliminar atributos width/height, usar viewBox en su lugar',
    sortAttrs: 'Ordenar Atributos',
    sortAttrsDesc: 'Ordenar atributos de elementos alfabéticamente'
  },

  view: {
    title: 'Vista Previa',
    original: 'Original',
    optimized: 'Optimizado',
    showBorder: 'Mostrar Borde',
    backgroundColor: 'Color de Fondo',
    grid: 'Mostrar Cuadrícula',
    zoom: 'Zoom',
    toggleAnimation: 'Alternar Animación'
  },

  actions: {
    optimize: 'Optimizar SVG',
    optimizing: 'Optimizando...',
    resetOptions: 'Restablecer Opciones',
    download: 'Descargar SVG Optimizado',
    copy: 'Copiar Código',
    copyCode: 'Copiar Código',
    viewCode: 'Ver Código',
    viewPreview: 'Ver Vista Previa'
  },

  messages: {
    optimizationSuccess: 'SVG optimizado correctamente',
    optimizationFailed: 'Error al optimizar el SVG: {error}',
    invalidSvg: 'Archivo o código SVG inválido',
    copied: 'Copiado al portapapeles',
    copyFailed: 'Error al copiar, por favor copie manualmente',
    downloaded: 'SVG optimizado descargado',
    emptyInput: 'Proporcione código o archivo SVG para optimizar',
    onlySvgAllowed: '¡Por favor suba un archivo SVG!',
    failedToLoadLibrary: 'No se pudo cargar la biblioteca SVGO'
  }
};