export default {
  name: 'Tablero de Dibujo',
  description: 'Herramienta en línea para dibujar con soporte para dibujo libre, selección de color y ajuste del tamaño del pincel',

  // Barra de herramientas
  tools: {
    brush: 'Pincel',
    eraser: 'Borrador',
    clear: 'Limpiar lienzo',
    save: 'Guardar imagen',
    undo: 'Deshacer',
    redo: 'Rehacer',
    apply: 'Aplicar'
  },

  // Configuración
  settings: {
    brushSize: 'Tamaño del Pincel',
    color: 'Color',
    opacity: 'Opacidad',
    backgroundColor: 'Color de Fondo'
  },

  // Selector de Color
  colors: {
    black: 'Negro',
    white: 'Blanco',
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul',
    yellow: 'Amarillo',
    orange: 'Naranja',
    purple: 'Morado',
    pink: 'Rosa',
    brown: 'Marrón',
    gray: 'Gris',
    custom: 'Color Personalizado'
  },

  // Configuración del Lienzo
  canvas: {
    width: 'Ancho',
    height: 'Alto',
    resize: 'Redimensionar Lienzo',
    orientation: 'Orientación',
    portrait: 'Retrato',
    landscape: 'Paisaje',
    square: 'Cuadrado'
  },

  // Consejos y Mensajes
  messages: {
    saveSuccess: 'Imagen guardada',
    confirmClear: '¿Está seguro de que desea limpiar el lienzo? Todo el contenido no guardado se perderá.',
    unsupportedBrowser: 'Su navegador no admite Canvas. Por favor use un navegador moderno.',
    fileNamePrompt: 'Ingrese nombre de archivo',
    defaultFileName: 'Mi Arte'
  },

  // Introducción a la herramienta
  aboutTitle: 'Acerca del Tablero de Dibujo',

  aboutDescription: 'El Tablero de Dibujo es una herramienta de dibujo en línea intuitiva y fácil de usar que le permite expresar su creatividad libremente. Ya sea que desee dibujar, crear ilustraciones simples o anotar ideas visualmente, esta herramienta lo cubre.',
  featuresTitle: 'Características Principales',
  feature1: 'Dibujo libre con varios colores y tamaños de pincel',
  feature2: 'Herramienta de borrador para modificaciones fáciles',
  feature3: 'Funcionalidad de deshacer y rehacer para corregir errores',
  feature4: 'Opacidad ajustable del pincel para efectos de dibujo ricos',
  feature5: 'Limpieza del lienzo con un solo clic para comenzar de nuevo',
  feature6: 'Descargar su obra de arte como archivo de imagen',
  howToUseTitle: 'Cómo Usar',
  howToUseStep1: '1. Seleccione la herramienta de pincel y el color para comenzar a dibujar',
  howToUseStep2: '2. Use los controles deslizantes para ajustar el tamaño y la opacidad del pincel',
  howToUseStep3: '3. Use la herramienta de borrador para eliminar contenido no deseado',
  howToUseStep4: '4. Puede deshacer o rehacer acciones en cualquier momento',
  howToUseStep5: '5. Cuando termine, haga clic en el botón guardar para descargar su obra de arte',
  tipsTitle: 'Consejos de Uso',
  tip1: 'Use pinceles finos para detalles finos y pinceles gruesos para áreas grandes',
  tip2: 'Una opacidad baja crea efectos similares a acuarelas o translúcidos',
  tip3: 'No se preocupe por los errores - utilice bien la función de deshacer',
  tip4: 'Comience con el contorno de su dibujo antes de completar los detalles',
  tip5: 'Experimente con diferentes combinaciones de colores para obras de arte ricas y vibrantes'
};