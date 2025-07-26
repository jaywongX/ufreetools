export default {
  name: 'Generador de Gradientes de Color',
  description: 'Cree y personalice hermosos gradientes CSS con vista previa en tiempo real y copie el código a su proyecto',

  gradientTypes: {
    title: 'Tipo de Gradiente',
    linear: 'Gradiente Lineal',
    radial: 'Gradiente Radial',
    conic: 'Gradiente Cónico'
  },

  controls: {
    title: 'Controles de Color',
    addColor: 'Añadir Color',
    color: 'Color',
    position: 'Posición (%)',
    delete: 'Eliminar Color',
    angle: 'Ángulo',
    degrees: 'Grados',
    shape: 'Forma',
    circle: 'Círculo',
    ellipse: 'Elipse',
    positionX: 'Posición X (%)',
    positionY: 'Posición Y (%)',
    size: 'Tamaño',
    closestSide: 'Lado Más Cercano',
    closestCorner: 'Esquina Más Cercana',
    farthestSide: 'Lado Más Lejano',
    farthestCorner: 'Esquina Más Lejana',
    fromAngle: 'Ángulo de Inicio'
  },

  output: {
    title: 'Código CSS',
    copyCode: 'Copiar Código',
    preview: 'Área de Vista Previa',
    copied: '¡Código CSS Copiado al Portapapeles!',
    download: 'Descargar PNG'
  },

  presets: {
    title: 'Preestablecidos de Gradiente',
    apply: 'Aplicar Preestablecido',
    sunnyMorning: 'Mañana Soleada',
    winterNeva: 'Invierno en Neva',
    rareWind: 'Viento Raro',
    deepBlue: 'Azul Profundo',
    perfect: 'Blanco Perfecto',
    cloudyKnoxville: 'Knoxville Nublado',
    greenBeach: 'Playa Verde',
    plumBath: 'Baño de Ciruela',
    everlasting: 'Cielo Eterno'
  },

  accessibility: {
    colorPicker: 'Selector de Color',
    deleteSwatch: 'Eliminar Punto de Color',
    dragToReposition: 'Arrastrar para Reubicar Punto de Color'
  },

  actions: {
    reset: 'Restablecer',
    generateCSS: 'Generar CSS',
    clickToCopy: 'Haga clic para Copiar Código',
    completeEdit: 'Completar Edición'
  },

  messages: {
    copied: '¡Código CSS Copiado al Portapapeles!',
    noColors: 'Agregue al menos dos colores para crear un gradiente',
    maxColors: 'Número máximo de puntos de color alcanzado (10)',
    useKeyboard: 'Use la tecla Eliminar para eliminar el punto de color seleccionado',
    invalidHex: 'Ingrese un código hexadecimal de color válido',
    downloadError: 'Fallo al descargar PNG, intente nuevamente más tarde',
    preview: 'Vista Previa'
  },

  anglePresets: {
    top: 'Arriba',
    topRight: 'Arriba Derecha',
    right: 'Derecha',
    bottomRight: 'Abajo Derecha',
    bottom: 'Abajo',
    bottomLeft: 'Abajo Izquierda',
    left: 'Izquierda',
    topLeft: 'Arriba Izquierda'
  },

  radialShapes: {
    circle: 'Círculo',
    ellipse: 'Elipse'
  },

  radialSizes: {
    farthestCorner: 'Esquina Más Lejana',
    closestCorner: 'Esquina Más Cercana',
    farthestSide: 'Lado Más Lejano',
    closestSide: 'Lado Más Cercano',
  }
};