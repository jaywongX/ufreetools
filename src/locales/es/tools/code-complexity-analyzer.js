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
  },
  article: {
    title: "Comprender el análisis de complejidad del código para mejorar la calidad del desarrollo de software",
    overview: {
      title: "¿Qué es el análisis de complejidad del código?",
      content: "<strong>El análisis de complejidad del código</strong> es una herramienta profesional que examina el código fuente y mide su complejidad estructural, mantenibilidad y factores de riesgo potenciales. Esta poderosa herramienta ayuda a los desarrolladores a identificar segmentos de código excesivamente complejos que podrían ser propensos a errores, difíciles de mantener o de escalar.<br><br>Mediante el uso de estándares de medición de software como la complejidad ciclomática, las métricas de Halstead y el índice de mantenibilidad, esta herramienta proporciona datos objetivos sobre la calidad del código, permitiendo a los equipos tomar decisiones informadas sobre dónde enfocar sus esfuerzos de refactorización. El análisis de complejidad del código es una práctica fundamental en el desarrollo moderno de software y apoya la gestión de la deuda técnica y la mejora de la calidad del código."
    },
    useCases: {
      title: "Casos comunes de uso del análisis de complejidad",
      items: [
        {
          title: "Gestión de deuda técnica",
          description: "Identifica áreas complejas del código que contribuyen a la deuda técnica, permitiendo a los equipos priorizar los esfuerzos de reducción de deuda centrados en las zonas de mayor riesgo y complejidad."
        },
        {
          title: "Mejora de revisiones de código",
          description: "Refuerza las revisiones manuales de código con métricas objetivas de complejidad, ayudando a los revisores a identificar áreas problemáticas que requieren atención especial durante la revisión."
        },
        {
          title: "Priorización de refactorizaciones",
          description: "Usa métricas de complejidad para decidir objetivamente qué partes del código deben refactorizarse primero, asegurando que los esfuerzos de mantenimiento estén bien dirigidos."
        },
        {
          title: "Control de calidad en CI",
          description: "Establece umbrales de complejidad en las tuberías de integración continua para evitar que código excesivamente complejo entre en la base principal y así mantener altos estándares de calidad."
        },
        {
          title: "Asignación de recursos de prueba",
          description: "Asigna más recursos de prueba a segmentos de código con alta complejidad, ya que estadísticamente son más propensos a contener defectos, optimizando así el trabajo de garantía de calidad."
        },
        {
          title: "Onboarding de nuevos desarrolladores",
          description: "Ayuda a los nuevos miembros del equipo a identificar partes simples del código para comenzar, progresando gradualmente hacia segmentos más complejos conforme adquieren familiaridad."
        },
        {
          title: "Evaluación de código heredado",
          description: "Evalúa la complejidad de sistemas heredados para estimar costos de mantenimiento, esfuerzos de refactorización o riesgos asociados a cambios en código antiguo."
        }
      ]
    },
    guide: {
      title: "Cómo usar el Analizador de Complejidad del Código",
      intro: "Siga estos pasos para analizar eficazmente la complejidad del código e interpretar los resultados:",
      steps: [
        {
          title: "Prepare su muestra de código",
          description: "Primero determine qué código JavaScript desea analizar. Puede usar archivos completos o concentrarse en funciones o módulos específicos. Un código limpio y bien formateado proporcionará resultados más precisos."
        },
        {
          title: "Introduzca su código",
          description: "Pegue su código JavaScript en el área de texto correspondiente. Si es nuevo en este tipo de análisis, puede usar el botón \"Cargar ejemplo\" para ver cómo funciona con un caso práctico."
        },
        {
          title: "Seleccione opciones de análisis",
          description: "Active las casillas para elegir qué métricas calcular: la complejidad ciclomática mide la complejidad de ruta, las métricas de Halstead evalúan tamaño y dificultad, el índice de mantenibilidad ofrece una visión global de facilidad de mantenimiento y los detalles por función muestran métricas individuales."
        },
        {
          title: "Inicie el análisis",
          description: "Haga clic en \"Analizar código\" para procesar su entrada. La herramienta analizará el código JavaScript, calculará las métricas seleccionadas y generará un informe completo."
        },
        {
          title: "Revise el resumen general",
          description: "Revise la sección de resumen, que ofrece una visión general del estado del código. Enfoque su atención en la complejidad ciclomática promedio, el índice de mantenibilidad y las líneas de código para tener una idea del estado general del código."
        },
        {
          title: "Revisar detalles por función",
          description: "Si ha activado la opción \"Mostrar análisis por función\", revise la tabla con los datos de cada función individual. Busque funciones con puntajes altos (resaltadas en amarillo o rojo), estas son candidatas principales para la refactorización."
        },
        {
          title: "Exporte los resultados si es necesario",
          description: "Use el botón \"Exportar informe\" para descargar los resultados en formato JSON para procesamiento posterior, documentación o compartir con su equipo. Esto es especialmente útil para seguir tendencias de complejidad con el tiempo."
        }
      ]
    },
    metrics: {
      title: "Entendiendo las métricas de complejidad",
      intro: "El análisis de complejidad utiliza varias métricas establecidas para evaluar diferentes aspectos de la calidad y mantenibilidad del código:",
      items: [
        {
          name: "Complejidad ciclomática",
          description: "Mide la cantidad de caminos independientes en el código fuente, cuantificando esencialmente la complejidad de decisión. Valores altos indican código con más ramificaciones, condiciones y posibles rutas de ejecución. El código con alta complejidad ciclomática suele ser difícil de comprender, probar y mantener. Lo ideal es que la mayoría de las funciones tengan valores menores a 10."
        },
        {
          name: "Métricas de Halstead",
          description: "Una serie de métricas basadas en el número de operadores y operandos en el código, midiendo el tamaño y esfuerzo del programa. Estas métricas ofrecen información sobre la carga cognitiva necesaria para comprender el código. Bajos niveles de dificultad y volumen suelen significar código más mantenible."
        },
        {
          name: "Índice de mantenibilidad",
          description: "Indicador compuesto que combina la complejidad ciclomática, el volumen de Halstead y las líneas de código para dar una visión general de la mantenibilidad. Su valor va de 0 a 100, donde mayores valores indican mayor mantenibilidad. Una puntuación por encima de 70 se considera buena, mientras que una menor a 20 sugiere que el código podría ser extremadamente difícil de mantener."
        },
        {
          name: "Líneas de código (LOC)",
          description: "Una medida simple pero efectiva del tamaño del código. Aunque no es directamente una métrica de complejidad, frecuentemente está relacionada con ella. Funciones con muchas líneas (generalmente más de 100) pueden beneficiarse de dividirse en funciones más pequeñas y especializadas."
        },
        {
          name: "Conteo de parámetros",
          description: "El número de parámetros que recibe una función. Funciones con muchos parámetros (habitualmente más de 4) pueden ser difíciles de entender y usar correctamente, lo que sugiere que probablemente deban refactorizarse o simplificarse usando objetos de parámetros."
        }
      ]
    },
    faq: {
      title: "Preguntas frecuentes sobre el análisis de complejidad del código",
      items: [
        {
          question: "¿Por qué es importante el análisis de complejidad del código?",
          answer: "Este análisis ayuda a identificar código problemático antes de que cause errores, problemas de mantenimiento o cuellos de botella en el desarrollo. Estudios muestran que el código complejo tiene mucha mayor probabilidad de contener errores y costear más en mantenimiento. Al identificar y reducir la complejidad, los equipos mejoran la calidad del software, reducen costos, aceleran el desarrollo y aumentan la productividad y satisfacción de los desarrolladores."
        },
        {
          question: "¿Cuál es un buen puntaje de complejidad ciclomática?",
          answer: "Generalmente, funciones con menos de 5 puntos se consideran sencillas y fáciles de mantener. Entre 6 y 10 se considera moderadamente complejo pero aceptable. Por encima de 10 se considera complejo y merece reflexionar sobre una refactorización. Cualquier valor por encima de 15 se considera críticamente complejo y debe priorizarse su simplificación. Las organizaciones pueden tener sus propios umbrales según sus criterios de calidad."
        },
        {
          question: "¿Se puede usar esta herramienta para lenguajes distintos de JavaScript?",
          answer: "La implementación actual solo permite analizar código JavaScript. Sin embargo, los principios y métricas utilizadas se aplican a la mayoría de los lenguajes de programación. Para analizar otros lenguajes, se requerirían herramientas específicas para ellos, ya que el análisis sintáctico depende del lenguaje."
        },
        {
          question: "¿Qué tan precisas son estas métricas de complejidad?",
          answer: "Las métricas están basadas en sólidos principios de ingeniería de software y ofrecen mediciones objetivas, aunque no son perfectas. Son buenas para cuantificar la complejidad estructural y encontrar áreas problemáticas, pero no capturan todos los aspectos de la calidad del código, como diseño arquitectónico, adecuación al dominio o factores de legibilidad como convenciones de nomenclatura. Para una evaluación completa, combine estas métricas con otras prácticas como revisiones de código y análisis estático."
        },
        {
          question: "¿Puedo integrar este analizador en mis pipelines de CI/CD?",
          answer: "Aunque esta herramienta web está diseñada para uso interactivo, las mismas métricas pueden integrarse en pipelines de CI/CD usando bibliotecas como 'complexity-report', 'eslint-plugin-complexity' o 'SonarQube' para proyectos en JavaScript. Estas herramientas permiten hacer cumplir umbrales de complejidad, impedir que código excesivamente complejo entre en producción y monitorear continuamente la calidad del código."
        },
        {
          question: "¿Qué hago si tengo una puntuación alta de complejidad?",
          answer: "Una puntuación alta indica que el código necesita ser refactorizado. Considere técnicas como dividir funciones grandes en funciones más pequeñas, reducir niveles de anidamiento, simplificar lógica condicional con cláusulas guardia o tablas de búsqueda, extraer cálculos complejos a funciones auxiliares, aplicar patrones de diseño para simplificar la estructura y reemplazar código complejo por funciones de librería cuando sea apropiado. Priorice funciones complejas que además son modificadas con frecuencia."
        },
        {
          question: "¿Los puntajes bajos de complejidad siempre indican mejor código?",
          answer: "No necesariamente. Aunque en general una complejidad baja se asocia con código más mantenible, existen excepciones. A veces soluciones un poco más complejas pueden ser más eficientes, más alineadas con el dominio o incluso más legibles para expertos en ese dominio. Las métricas deberían guiar sus decisiones, no sustituirlas. Equilibre la complejidad con factores como rendimiento, adecuación al dominio y familiaridad del equipo."
        }
      ]
    },
    optimization: {
      title: "Estrategias de optimización basadas en el análisis de complejidad",
      intro: "Cuando el análisis revele áreas complejas, considere estas técnicas para reducir la complejidad y mejorar la calidad del código:",
      tips: [
        "Divida funciones grandes en funciones más pequeñas y especializadas, cada una realizando una sola tarea.",
        "Reduzca el anidamiento mediante retornos anticipados, cláusulas guardia o extrayendo bloques anidados a funciones separadas.",
        "Simplifique condiciones booleanas complejas dividiéndolas en variables nombradas o funciones que expliquen su propósito.",
        "Reemplace declaraciones switch complejas o cadenas de if-else por patrones de estrategia o tablas de búsqueda.",
        "Use técnicas funcionales como map, filter y reduce en lugar de bucles complejos con múltiples condiciones.",
        "Extraiga patrones repetidos en utilidades reutilizables o métodos compartidos.",
        "Aplique el principio de responsabilidad única, asegurándose de que cada clase y función tenga una sola razón para cambiar.",
        "Reemplace algoritmos personalizados complejos por funciones de bibliotecas bien probadas cuando sea posible.",
        "Simplifique la complejidad de interfaces reduciendo listas largas de parámetros usando objetos de configuración.",
        "Documente cuidadosamente código complejo cuando sea necesario, explicando por qué debe ser complejo.",
        "Agregue pruebas completas a fragmentos complejos para asegurar que funcionan correctamente y facilitar futuras refactorizaciones.",
        "Establezca umbrales de complejidad para su equipo y revise código que supere esos umbrales antes de aceptarlo."
      ]
    }
  }
}