export default {
  name: 'Barajador de Palabras',
  description: 'Barajar palabras, oraciones o líneas en su texto manteniendo el formato',
  inputLabel: 'Ingresar Texto',
  inputPlaceholder: 'Ingrese o pegue su texto aquí para barajar...',
  outputLabel: 'Resultado Barajado',
  shuffleMode: 'Modo de Barajado',

  modes: {
    word: 'Palabras',
    sentence: 'Oraciones',
    line: 'Líneas',
    character: 'Caracteres',
    paragraph: 'Párrafos'
  },

  preserveOptions: 'Opciones de Preservación',
  preserveCapitalization: 'Preservar Mayúsculas',
  preservePunctuation: 'Preservar Puntuación',
  shuffleButton: 'Barajar Texto',
  copyButton: 'Copiar Resultado',
  clearButton: 'Limpiar Todo',
  copiedMessage: '¡Copiado al portapapeles!',
  tagline: 'El Barajador de Texto Más Avanzado del Mundo',
  wordCount: 'palabras',
  importButton: 'Importar Archivo',
  clearInputButton: 'Limpiar Entrada',
  clearOutputButton: 'Limpiar Salida',
  downloadButton: 'Descargar',
  useExampleButton: 'Usar Ejemplo',
  advancedOptions: 'Opciones Avanzadas',
  delimiterOptions: 'Opciones de Delimitadores',
  wordDelimiters: 'Delimitadores de Palabras',
  wordDelimitersHint: 'Caracteres que separan palabras',
  sentenceDelimiters: 'Delimitadores de Oraciones',
  sentenceDelimitersHint: 'Caracteres que terminan oraciones',
  additionalOptions: 'Opciones Adicionales',
  repeatCount: 'Conteo de Repetición',
  repeatCountHint: 'Generar múltiples versiones barajadas',
  shuffleGroup: 'Tamaño del Grupo de Barajado',
  shuffleGroupHint: 'Barajar palabras en grupos de este tamaño',
  removeRepeatedWords: 'Eliminar Palabras Repetidas',
  preserveSpacing: 'Preservar Espaciado',
  examplesTitle: 'Ejemplos',
  useThisExample: 'Usar Este Ejemplo',
  helpTitle: 'Ayuda & Información',
  whatIsTitle: '¿Qué es un Barajador de Palabras?',
  whatIsDescription: 'Un Barajador de Palabras es una herramienta que aleatoriza el orden de las palabras, oraciones, líneas, caracteres o párrafos en un texto. Utiliza un algoritmo sofisticado para asegurar resultados verdaderamente aleatorios mientras preserva opciones de formato elegidas como mayúsculas y puntuación.',
  howToUseTitle: 'Cómo Usar Esta Herramienta',
  tipsTitle: 'Consejos para Mejores Resultados',
  stepLabel: 'Paso',

  examples: {
    basic: {
      title: "Barajado Básico de Palabras",
      description: "Aleatorización simple de palabras manteniendo puntuación y mayúsculas",
      input: "El rápido zorro marrón salta sobre el perro perezoso. Todas cinco brujas saltan rápidamente.",
      output: "El marrón rápido perro salta zorro perezoso sobre el. Brutas cinco saltan rápidamente todas."
    },
    sentence: {
      title: "Barajado de Oraciones",
      description: "Aleatorizar el orden de oraciones completas",
      input: "Primera oración va aquí. Esta es la segunda. Y aquí llega la tercera. Finalmente, tenemos la cuarta oración.",
      output: "Y aquí llega la tercera. Primera oración va aquí. Finalmente, tenemos la cuarta oración. Esta es la segunda."
    },
    creative: {
      title: "Remix Creativo",
      description: "Genere nuevo texto creativo barajando palabras sin restricciones de formato",
      input: "La poesía es la creación rítmica de belleza en palabras. Es la revelación de un sentimiento que el poeta cree interior y personal, pero que el lector reconoce como propio.",
      output: "belleza rítmica es palabras poeta revelación pero lector reconoce como suyo creación poesía sentimiento cree interior personal el de la en que el."
    }
  },

  howToUseSteps: [
    "Introduzca o pegue su texto en el campo de entrada a la izquierda.",
    "Elija su modo deseado de barajado y opciones abajo.",
    "Haga clic en el botón \"Barajar Texto\" para generar texto aleatorio.",
    "El resultado aparecerá en el campo de salida a la derecha.",
    "Use los botones de copia o descarga para guardar sus resultados."
  ],

  tips: [
    "Para ejercicios de escritura creativa, pruebe el modo palabra con mayúsculas preservadas pero puntuación eliminada.",
    "Para probar diseños, use el modo oración con todas las opciones de preservación activas para mantener texto legible pero aleatorio.",
    "Use el modo carácter para crear contraseñas seguras o códigos desde entrada textual.",
    "La característica de grupo de barajado permite mantener palabras relacionadas juntas aún cuando esté aleatorizando el texto completo.",
    "¿Necesita múltiples variaciones? Establezca el conteo de repetición para generar múltiples versiones barajadas en una sola operación."
  ],

  downloadFileName: 'texto_barajado.txt',

  errorMessages: {
    shuffleError: 'Error en procesamiento de barajado:',
    sentenceError: 'Error en barajado de oraciones:',
    copyError: 'Error al copiar texto:'
  }
};