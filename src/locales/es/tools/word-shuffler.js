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
  article: {
    title: "Barajador de Palabras: Cree Texto Aleatorio con Estructura Preservada",
    features: {
      title: "Entendiendo el Barajado de Palabras y la Aleatorización del Texto",
      description: "El <strong>Barajador de Palabras</strong> es una versátil <strong>herramienta de manipulación de texto</strong> que le permite reordenar aleatoriamente palabras, oraciones o líneas dentro de un texto manteniendo elementos importantes de formato. Este <strong>aleatorizador de texto</strong> proporciona múltiples modos de barajado para satisfacer diferentes necesidades, ya sea que desee crear contenido aleatorio para pruebas, generar ideas creativas de escritura o producir texto con palabras desordenadas pero manteniendo legibilidad.<br><br>Nuestro <strong>aleatorizador de palabras</strong> ofrece control detallado mediante opciones inteligentes de preservación de capitalización y puntuación, asegurando que su texto barajado mantenga formato adecuado. Ya sea que esté trabajando con párrafos simples o documentos complejos, esta herramienta proporciona una forma eficiente de generar texto aleatoriamente organizado que retiene elementos estructurales clave."
    },
    primaryFeatures: [
      {
        title: "Múltiples Modos de Barajado",
        description: "Elija entre barajar palabras, oraciones, líneas, caracteres o párrafos enteros para lograr el nivel específico de aleatorización que necesita."
      },
      {
        title: "Preservación de Formato",
        description: "Mantenga mayúsculas y puntuación incluso después de barajar para mantener el texto natural y correctamente formateado."
      },
      {
        title: "Delimitadores Personalizables",
        description: "Defina sus propios delimitadores de palabras y oraciones para control preciso sobre cómo se divide el texto antes del barajado."
      },
      {
        title: "Barajado por Grupos",
        description: "Baraje palabras en grupos para mantener cierta relación semántica aún cuando esté aleatorizando contenido."
      }
    ],
    howToUse: {
      title: "Cómo Usar la Herramienta Barajadora de Palabras",
      steps: [
        "Introduzca o pegue su texto en el campo de entrada a la izquierda de la herramienta.",
        "Elija su modo de barajado preferido (palabras, oraciones, líneas, caracteres o párrafos).",
        "Configure opciones avanzadas si es necesario, como configuraciones de preservación y delimitadores.",
        "Haga clic en el botón \"Barajar Texto\" para generar su contenido aleatorio.",
        "Revise el resultado en el campo de salida y utilice los botones de copia o descarga para guardar su texto.",
        "Para varias variaciones, ajuste la configuración de conteo de repetición y vuelva a barajar."
      ]
    },
    useCases: {
      title: "Aplicaciones Prácticas del Barajado de Texto",
      examples: [
        {
          title: "Ejercicios de Escritura",
          description: "Genere ideas o ejercicios escribiendo mediante el barajado de texto existente para crear nuevas combinaciones e inspiración para clases de escritura creativa, talleres poéticos o proyectos personales."
        },
        {
          title: "Prueba de Interfaz",
          description: "Cree contenido textual aleatorio para probar interfaces de usuario, asegurando que manejen contenido variable apropiadamente. Ideal para desarrolladores web verificando diseños responsivos y adaptabilidad de contenido."
        },
        {
          title: "Actividades Educativas",
          description: "Desarrolle actividades de aprendizaje de idiomas donde estudiantes deban reordenar texto barajado a su secuencia correcta, mejorando comprensión y habilidades gramaticales mediante ejercicios interactivos."
        },
        {
          title: "Inspiration Creativa",
          description: "Descubra nuevas perspectivas o ideas al barajar contenido existente e identificar interesantes nuevas combinaciones, ayudando a escritores a superar bloqueos y encontrar enfoques frescos."
        },
        {
          title: "Anonimización de Datos",
          description: "Baraje palabras en texto sensible para crear contenido realista pero anónimo para demostraciones, presentaciones o entornos de prueba donde no pueden usarse datos reales."
        },
        {
          title: "Práctica de Discurso y Presentaciones",
          description: "Cree variaciones de contenido de discursos para practicar su entrega con diferentes ordenamientos de palabras, mejorando la adaptabilidad y reduciendo dependencia de secuencias memorizadas."
        }
      ]
    },
    faqs: {
      title: "Preguntas Frecuentes Sobre el Barajador de Palabras",
      questions: [
        {
          question: "¿Afectará el barajado mi formato de texto?",
          answer: "Con las opciones de preservación activadas, el Barajador de Palabras mantendrá las mayúsculas y puntuación en su texto, asegurando que el resultado barajado retenga formato adecuado. Esto significa que las mayúsculas iniciales de oraciones y puntuación final permanecerán intactas, incluso cuando las palabras mismas sean reorganizadas."
        },
        {
          question: "¿Puedo barajar solo partes de mi texto?",
          answer: "La herramienta opera en todo el texto introducido, pero puede lograr barajado parcial procesando secciones más pequeñas individualmente y luego combinándolas con su contenido sin barajar. Para control más granular, pruebe usar el modo párrafo para barajar solo secciones específicas."
        },
        {
          question: "¿Es realmente aleatorio el barajado?",
          answer: "Sí, la herramienta usa un algoritmo estándar de aleatorización (barajado de Fisher-Yates) para asegurar un reordenamiento verdaderamente aleatorio de sus elementos de texto con cada barajado. Cada vez que haga clic en el botón de barajado, obtendrá una disposición diferente de su texto."
        },
        {
          question: "¿Cuál es la diferencia entre los distintos modos de barajado?",
          answer: "El modo palabra baraja palabras individuales manteniendo puntuación (si se selecciona). El modo oración mantiene cada oración intacta pero aleatoriza su orden. El modo línea preserva cada línea pero baraja su secuencia. El modo carácter aleatoriza caracteres individuales para completo desorden. El modo párrafo mantiene párrafos intactos pero reordena su secuencia."
        },
        {
          question: "¿Puedo personalizar qué caracteres se tratan como separadores de palabras u oraciones?",
          answer: "Sí, el panel de opciones avanzadas le permite definir delimitadores personalizados tanto para palabras como oraciones. Esto le da control preciso sobre cómo se divide su texto antes del barajado, especialmente útil para contenido especializado o idiomas con puntuación única."
        },
        {
          question: "¿Cómo puedo eliminar palabras repetidas del texto barajado?",
          answer: "Active la opción 'Eliminar Palabras Repetidas' en el panel de configuración avanzada. Esto asegurará que cada palabra aparezca solo una vez en la salida, útil para crear listas de vocabulario o eliminar redundancia en su texto barajado."
        },
        {
          question: "¿Existe un límite sobre cuánto texto puedo barajar?",
          answer: "La herramienta puede manejar cantidades considerables de texto, pero documentos extremadamente grandes (más de 100,000 caracteres) podrían experimentar algo de ralentización en el rendimiento. Para mejores resultados con textos muy largos, considere procesarlos en secciones más pequeñas."
        }
      ]
    },
    advancedTips: {
      title: "Consejos Avanzados para Dominar el Barajado de Palabras",
      description: "Obtenga el máximo provecho de la herramienta Barajador de Palabras con estas técnicas expertas que lo ayudarán a crear exactamente el tipo de texto aleatorio que necesita para sus propósitos específicos.",
      tips: [
        "Use la configuración 'Tamaño del Grupo de Barajado' para mantener pequeñas frases juntas aún cuando esté aleatorizando su orden - excelente para mantener pares adjetivo-nombre intactos.",
        "Para generar escritura surrealista o experimental, combine barajado de carácteres con barajado de palabras ejecutando el texto dos veces con modos diferentes.",
        "Cree patrones de organización de palabras más variados ajustando los delimitadores de palabras para incluir o excluir ciertos signos de puntuación.",
        "Al trabajar con poesía o verso, use el modo línea para preservar líneas individuales mientras explora diferentes arreglos de estrofas.",
        "Para fines de prueba, genere múltiples variaciones a la vez usando la función de conteo de repetición en lugar de hacer clic en barajar múltiples veces.",
        "Preserve mayúsculas pero no puntuación para crear estilo de texto fluido y corriente de conciencia que aún mantenga sustantivos propios y comienzos de oraciones.",
        "Use el modo barajado de carácteres en frases cortas para crear códigos o contraseñas únicas basadas en texto significativo.",
        "Importe texto desde múltiples fuentes, barájalos por separado y luego combine los resultados para una interesante polinización cruzada de ideas y estilos."
      ]
    }
  },
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
}