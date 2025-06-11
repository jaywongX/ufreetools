export default {
  name: 'Extractor de Fotogramas GIF',
  description: 'Extrae fotogramas individuales de animaciones GIF',
  uploadBtn: 'Seleccionar GIF',
  resetBtn: 'Reiniciar',
  extractBtn: 'Extraer Fotogramas',
  extractingBtn: 'Extrayendo...',
  downloadAllBtn: 'Descargar Todos los Fotogramas',
  upload: {
    title: 'Subir GIF',
    dropzone: 'Arrastra tu archivo GIF aquí o haz clic para buscar',
    maxSize: 'Tamaño máximo del archivo: 20MB',
    onlyGif: 'Solo se admiten archivos GIF',
    selectGif: 'Por favor, selecciona un archivo GIF'
  },
  analysis: {
    title: 'Información del GIF',
    dimensions: 'Dimensiones',
    frameCount: 'Número de Fotogramas',
    duration: 'Duración',
    fps: 'Fotogramas por Segundo',
    fileSize: 'Tamaño del Archivo',
    loopCount: 'Número de Repeticiones',
    infinite: 'Infinito',
    fileName: 'Nombre del Archivo',
    size: 'Tamaño',
    totalFrames: 'Total de Fotogramas',
    notExtracted: 'No Extraído'
  },
  extraction: {
    title: 'Extracción de Fotogramas',
    selectFrames: 'Seleccionar Fotogramas',
    allFrames: 'Todos los Fotogramas',
    rangeOfFrames: 'Rango de Fotogramas',
    from: 'Desde',
    to: 'Hasta',
    specificFrames: 'Fotogramas Específicos',
    frameNumbers: 'Números de Fotogramas (separados por comas)',
    everyNth: 'Cada Nº Fotograma',
    nth: 'Cada',
    frames: 'Fotogramas',
    selectFirst: 'Primer Fotograma',
    selectLast: 'Último Fotograma',
    selectMiddle: 'Fotograma Central',
    selectKeyFrames: 'Detectar Automáticamente Fotogramas Clave'
  },
  output: {
    title: 'Configuración de Exportación',
    format: 'Formato de Salida',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: 'Escala',
    originalSize: 'Tamaño Original',
    customSize: 'Tamaño Personalizado',
    width: 'Ancho',
    height: 'Alto',
    quality: 'Calidad',
    qualityValue: 'Calidad: {value}%',
    lowQuality: 'Baja Calidad (tamaño de archivo más pequeño)',
    highQuality: 'Alta Calidad (tamaño de archivo mayor)',
    naming: 'Nombramiento de Archivos',
    pattern: 'Patrón',
    filename: 'Nombre Original del Archivo',
    framenumber: 'Número de Fotograma',
    timestamp: 'Marca de Tiempo',
    preview: 'Vista Previa',
    downloadOptions: 'Opciones de Descarga',
    separateFiles: 'Archivos Separados',
    zipArchive: 'Archivo ZIP',
    spritesheet: 'Spritesheet',
    gridSize: 'Tamaño de la Cuadrícula',
    columns: 'Columnas',
    animation: 'Nueva Animación'
  },
  frames: {
    title: 'Fotogramas Extraídos',
    frameInfo: 'Fotograma {number} de {total}',
    frame: 'Fotograma',
    delay: 'Retraso: {delay} ms',
    downloadFrame: 'Descargar',
    copyFrame: 'Copiar',
    selectAll: 'Seleccionar Todo',
    unselectAll: 'Deseleccionar Todo',
    invertSelection: 'Invertir Selección',
    noFrames: 'Aún no se han extraído fotogramas',
    extractFirst: 'Por favor, extrae fotogramas primero'
  },
  actions: {
    extract: 'Extraer Fotogramas',
    preview: 'Vista Previa',
    downloadSelected: 'Descargar Seleccionados',
    downloadAll: 'Descargar Todos',
    createSpritesheet: 'Crear Spritesheet',
    createNewGif: 'Crear Nuevo GIF',
    cancel: 'Cancelar',
    processing: 'Procesando...'
  },
  messages: {
    extractionComplete: 'Extracción de fotogramas completada',
    extracting: 'Extrayendo fotogramas...',
    noFramesSelected: 'Ningún fotograma seleccionado',
    processingGif: 'Procesando GIF...',
    invalidGif: 'Archivo GIF inválido',
    framesCopied: 'Fotogramas copiados al portapapeles',
    downloadStarted: 'Descarga iniciada',
    spritesheetCreated: 'Spritesheet creado correctamente',
    frameDownloaded: 'Fotograma descargado',
    preparingFrames: 'Preparando todos los fotogramas, por favor espera...',
    allFramesDownloaded: 'Todos los fotogramas descargados',
    downloadError: 'No se pudieron descargar todos los fotogramas',
    resetComplete: 'Reinicio completado',
    fileEmpty: 'Los datos del archivo están vacíos'
  },
  article: {
    title: "Extractor de Fotogramas GIF: Analiza y Extrae Fotogramas de Animaciones",
    features: {
      title: "Comprensión de la Extracción de Fotogramas GIF",
      description: "El <strong>Extractor de Fotogramas GIF</strong> es una herramienta especializada diseñada para descomponer archivos GIF animados en sus fotogramas individuales. Este potente <strong>descompositor de animaciones</strong> proporciona una forma completa de analizar y extraer cada imagen fija que compone un GIF, permitiéndote aislar momentos específicos de cualquier <strong>secuencia animada</strong>.<br><br>Nuestro <strong>divisor de GIF</strong> ofrece múltiples opciones de formato de salida (PNG, JPEG, WebP), ajustes de calidad para compresión e navegación intuitiva entre fotogramas. La herramienta detecta automáticamente y muestra metadatos esenciales del GIF incluyendo dimensiones, cantidad de fotogramas, tamaño del archivo y tiempos de retraso individuales de cada fotograma. Una vez completada la extracción, puedes previsualizar cada <strong>imagen de fotograma</strong>, descargar fotogramas individuales o exportar todos los fotogramas juntos en un archivo ZIP para edición posterior o análisis.",
      useCases: {
        title: "Aplicaciones Comunes para la Extracción de Fotogramas GIF",
        items: [
          "Diseñadores gráficos extrayendo fotogramas específicos de GIFs animados para modificarlos e incorporarlos a nuevos diseños o presentaciones",
          "Desarrolladores web aislando fotogramas de animaciones para crear spinners personalizados de carga, indicadores de progreso o hojas de sprites",
          "Artistas digitales analizando técnicas de animación fotograma a fotograma en GIFs existentes para mejorar sus propias habilidades de animación",
          "Creadores de contenido extrayendo fotogramas clave de reacciones animadas o memes para usarlos como imágenes estáticas en publicaciones de redes sociales",
          "Educadores y escritores técnicos capturando etapas específicas de tutoriales animados o demostraciones para incluirlas en materiales didácticos",
          "Analistas de movimiento e investigadores extrayendo secuencias de fotogramas para estudiar patrones de movimiento, visualizaciones físicas o animaciones científicas"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Extracción de Fotogramas GIF",
      items: [
        {
          question: "¿Cuál es el tamaño máximo de archivo GIF que puede procesar esta herramienta?",
          answer: "Nuestro Extractor de Fotogramas GIF está diseñado para manejar archivos GIF de hasta 20MB. Este límite permite manejar la mayoría de los GIFs animados encontrados en internet manteniendo un rendimiento óptimo. Para GIFs más grandes, recomendamos utilizar software de edición de video u otras herramientas especializadas. La velocidad de extracción depende tanto del tamaño del archivo como del número de fotogramas en tu animación GIF - archivos más grandes con muchos fotogramas tardarán naturalmente más en procesarse que animaciones más pequeñas con menos fotogramas."
        },
        {
          question: "¿Qué formato de salida debo elegir para los fotogramas extraídos?",
          answer: "La mejor opción de formato depende de tus necesidades específicas: PNG es ideal para mantener la máxima calidad y soporta transparencia, haciéndolo perfecto para edición posterior o cuando necesitas preservar canales alfa en tus fotogramas GIF. JPEG ofrece tamaños de archivo más pequeños pero no soporta transparencia y puede introducir artefactos de compresión, adecuado para imágenes simples o publicación web donde importa el tamaño del archivo. WebP ofrece un buen equilibrio entre calidad y compresión, soportando transparencia mientras ofrece tamaños de archivo menores que PNG, siendo una excelente elección moderna si tu software soporta este formato."
        },
        {
          question: "¿Cómo puedo crear una nueva animación a partir de los fotogramas extraídos?",
          answer: "Después de extraer fotogramas usando nuestro Extractor de Fotogramas GIF, puedes crear nuevas animaciones mediante varios métodos: 1) Usa software de animación como Adobe Animate, After Effects o la alternativa gratuita GIMP para importar los fotogramas extraídos y exportar como un nuevo GIF con configuraciones personalizadas. 2) Herramientas en línea como EZGIF o Canva pueden importar secuencias de imágenes y convertirlas a GIFs con ajustes modificables. 3) Para desarrolladores, considera usar animaciones CSS o bibliotecas de JavaScript como GSAP para crear animaciones web a partir de las imágenes de los fotogramas. Puedes modificar fotogramas individuales antes de recombinarlos para crear versiones mejoradas o editadas del GIF original."
        },
        {
          question: "¿Por qué algunos fotogramas extraídos parecen diferentes a lo que veo en el GIF?",
          answer: "Las diferencias entre los fotogramas extraídos y lo que ves al ver el GIF animado pueden ocurrir por varias razones: 1) Los GIFs suelen usar técnicas de optimización de fotogramas como regiones transparentes o métodos de disposición que solo tienen sentido en secuencia. 2) Algunos fotogramas pueden mostrarse durante muy corto tiempo en la animación, haciéndolos apenas perceptibles cuando se reproduce pero visibles al extraerlos. 3) Algunos visores de GIF podrían aplicar mezcla o interpolación de fotogramas para suavizar animaciones. 4) El GIF podría usar tablas de color locales que cambien la paleta entre fotogramas. Nuestro Extractor de Fotogramas GIF preserva los datos de píxel exactos de cada fotograma tal como están almacenados en el archivo GIF, proporcionando la representación más precisa de los fotogramas originales."
        },
        {
          question: "¿Qué información puedo obtener de los tiempos de retraso de los fotogramas?",
          answer: "Los tiempos de retraso de los fotogramas en un GIF proporcionan información valiosa sobre el ritmo y cadencia de la animación. Cada retraso de fotograma (medido en milisegundos) revela: 1) La velocidad general de la animación - retrasos más cortos crean animaciones más rápidas mientras que retrasos más largos ralentizan el movimiento. 2) Patrones de temporización que indican puntos de énfasis donde la animación se detiene en ciertos fotogramas para efecto. 3) Técnicas de animación como efectos de \"entrada suave\" o \"salida suave\" donde los retrasos de fotogramas cambian gradualmente. 4) Oportunidades potenciales de optimización - fotogramas con retrasos idénticos o muy similares podrían ser candidatos para estandarización. Nuestro Extractor de Fotogramas GIF muestra estos valores de retraso para cada fotograma extraído, ayudándote a entender la estructura temporal de la animación original."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Extractor de Fotogramas GIF",
      steps: [
        "Haz clic en el botón <strong>Seleccionar GIF</strong> en la parte superior de la interfaz de la herramienta y elige el archivo GIF animado que deseas procesar desde tu dispositivo. La herramienta admite archivos GIF de hasta 20MB.",
        "Tras cargarlo, revisa el panel <strong>Información del GIF</strong> que aparece a la izquierda, mostrando detalles como dimensiones, tamaño del archivo y número de fotogramas para verificar que has seleccionado el archivo correcto.",
        "Haz clic en el botón <strong>Extraer Fotogramas</strong> en la barra de herramientas superior para comenzar el proceso de extracción de fotogramas. Aparecerá un indicador de progreso mientras la herramienta analiza y extrae cada fotograma de tu GIF.",
        "Elige tu <strong>formato de salida</strong> preferido (PNG, JPEG, WebP) desde las opciones en el panel izquierdo. Si seleccionas JPEG o WebP, puedes ajustar el control de calidad para equilibrar entre calidad de imagen y tamaño de archivo.",
        "Explora los fotogramas extraídos mostrados en la vista de cuadrícula en el lado derecho de la herramienta. Cada miniatura muestra el número de fotograma y el tiempo de retraso (cuánto tiempo aparece ese fotograma en la animación).",
        "Para guardar fotogramas individuales, pasa el ratón sobre cualquier miniatura de fotograma y haz clic en el icono de descarga que aparece. El fotograma se guardará en tu dispositivo en el formato seleccionado.",
        "Para descargar todos los fotogramas extraídos a la vez, haz clic en el botón <strong>Descargar Todos los Fotogramas</strong> en la barra de herramientas. Esto creará un archivo ZIP conteniendo todos los fotogramas en tu formato elegido para almacenamiento conveniente y edición posterior."
      ]
    },
    conclusion: "El Extractor de Fotogramas GIF proporciona una solución completa para descomponer GIFs animados en sus fotogramas constituyentes. Ya seas un diseñador buscando imágenes específicas de una animación, un desarrollador creando animaciones web personalizadas, o un educador analizando secuencias fotograma a fotograma, esta herramienta ofrece una extracción precisa fotograma a fotograma con opciones flexibles de salida. Al convertir animaciones temporales en secuencias de imágenes estáticas, obtienes control completo sobre el contenido GIF, permitiendo edición avanzada, análisis y reaprovechamiento de contenido animado. Mientras los GIFs continúan siendo un medio popular para expresar ideas, reacciones y demostraciones a través de la web, la capacidad de extraer y manipular fotogramas individuales sigue siendo una capacidad esencial para creadores y analistas de contenido digital."
  }
}