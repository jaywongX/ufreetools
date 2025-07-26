export default {
  name: 'Analizador de complejidad de código',
  description: 'Analiza métricas de complejidad del código, como la complejidad ciclomática y la mantenibilidad',
  title: 'Análisis de complejidad del código',
  subtitle: 'Analiza las métricas de complejidad del código JavaScript, incluyendo la complejidad ciclomática, las métricas de Halstead y el índice de mantenibilidad',

  input: {
    title: 'Introduzca código JavaScript',
    placeholder: 'Pegue aquí su código JavaScript...',
    loadExample: 'Cargar ejemplo',
    clear: 'Limpiar'
  },

  options: {
    title: 'Opciones de análisis',
    cyclomaticComplexity: 'Calcular complejidad ciclomática (complejidad McCabe)',
    halsteadMetrics: 'Calcular métricas de Halstead (longitud, vocabulario, volumen, etc.)',
    maintainabilityIndex: 'Calcular índice de mantenibilidad',
    functionDetails: 'Mostrar resultados a nivel de función'
  },

  languages: {
    title: 'Lenguajes',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },

  metrics: {
    title: 'Métricas',
    cyclomaticComplexity: 'Complejidad ciclomática',
    maintainabilityIndex: 'Índice de mantenibilidad',
    halsteadVolume: 'Volumen de Halstead',
    halsteadDifficulty: 'Dificultad de Halstead',
    halsteadEffort: 'Esfuerzo de Halstead',
    halsteadTime: 'Tiempo de Halstead',
    halsteadBugs: 'Errores estimados por Halstead',
    linesOfCode: 'Líneas de código',
    logicalLoc: 'Líneas lógicas de código',
    commentLines: 'Líneas de comentario',
    commentRatio: 'Proporción de comentarios',
    operatorCount: 'Número de operadores',
    operandCount: 'Número de operandos',
    functionCount: 'Número de funciones',
    maxNestingDepth: 'Profundidad máxima de anidamiento',
    averageDepth: 'Profundidad promedio',
    halstead: {
      title: 'Métricas de Halstead',
      length: 'Longitud del programa',
      vocabulary: 'Tamaño del vocabulario',
      volume: 'Volumen del programa',
      difficulty: 'Dificultad'
    }
  },

  results: {
    title: 'Resultados del análisis',
    file: 'Archivo',
    method: 'Método',
    score: 'Puntuación',
    complexity: 'Complejidad',
    rating: 'Clasificación',
    loc: 'Líneas',
    issues: 'Problemas',
    summary: 'Resumen general del código',
    details: 'Detalles',
    noResults: 'No hay resultados aún. Introduzca código y haga clic en "Analizar código" para ver las métricas.',
    avgCyclomaticComplexity: 'Promedio de complejidad ciclomática',
    maintainabilityIndex: 'Índice de mantenibilidad',
    linesOfCode: 'Líneas de código',
    functionDetails: 'Análisis por función',
    functionName: 'Nombre de la función',
    parameters: 'Número de parámetros',
    anonymousFunction: '(Función anónima)'
  },

  ratings: {
    excellent: 'Excelente',
    good: 'Buena',
    moderate: 'Moderada',
    poor: 'Mala',
    veryPoor: 'Muy mala'
  },

  complexity: {
    title: 'Explicación de los niveles de complejidad:',
    low: 'Baja complejidad - Código simple, fácil de entender y mantener',
    medium: 'Complejidad media - Código algo complejo, pero aún aceptable',
    high: 'Alta complejidad - Código muy complejo que debería ser reestructurado'
  },

  actions: {
    analyze: 'Analizar código',
    analyzing: 'Analizando...',
    clearCode: 'Limpiar código',
    uploadFile: 'Subir archivo',
    copy: 'Copiar resultados',
    download: 'Descargar informe',
    export: 'Exportar informe (JSON)'
  },

  messages: {
    analyzing: 'Analizando el código...',
    analysisComplete: 'Análisis completado',
    analysisError: 'Error al analizar el código',
    analysisFailure: 'No se pudo analizar el código: {error}',
    copied: '¡Copiado al portapapeles!',
    emptyCode: 'Por favor, introduzca código para analizar',
    fileTooBig: 'El archivo es demasiado grande (máximo 1MB)',
    invalidFile: 'Archivo inválido o no compatible',
    errorTitle: 'Error de análisis'
  },

  tips: {
    title: 'Consejos de uso',
    cyclomaticComplexity: 'La complejidad ciclomática mide la cantidad de caminos independientes en el código fuente.',
    maintainability: 'El índice de mantenibilidad indica qué tan fácil es mantener el código; cuanto más alto, mejor.',
    recommendations: 'Para mejorar la calidad del código, mantenga baja la complejidad y alto el índice de mantenibilidad.',
    refactoring: 'Considere refactorizar funciones con una puntuación de complejidad superior a 10.'
  }
};