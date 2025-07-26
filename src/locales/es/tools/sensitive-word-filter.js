export default {
  name: 'Filtro de Palabras Sensibles',
  description: 'Detecte y filtre palabras sensibles en texto, soporta bibliotecas personalizadas de palabras y reglas de filtrado',

  input: {
    title: 'Texto de Entrada',
    placeholder: 'Ingrese el texto a verificar...',
    loadSample: 'Cargar Muestra',
    clearInput: 'Limpiar Entrada',
    uploadFile: 'Subir Archivo de Texto'
  },

  output: {
    title: 'Texto Filtrado',
    original: 'Texto Original',
    filtered: 'Texto Filtrado',
    statistics: 'Estadísticas',
    copyOutput: 'Copiar Texto Filtrado',
    clearOutput: 'Limpiar Salida',
    download: 'Descargar Texto Filtrado'
  },

  options: {
    title: 'Opciones de Filtro',
    filterMode: 'Modo de Filtro',
    caseSensitive: 'Distinguir Mayúsculas/Minúsculas',
    wholeWordOnly: 'Solo Palabra Completa',
    customReplacement: 'Reemplazo Personalizado',
    replacementChar: 'Carácter de Reemplazo',
    highlightWords: 'Resaltar Palabras',
    customDictionary: 'Diccionario Personalizado',
    importDictionary: 'Importar Diccionario',
    exportDictionary: 'Exportar Diccionario'
  },

  filterModes: {
    replace: 'Reemplazar Palabras',
    highlight: 'Resaltar Palabras',
    remove: 'Eliminar Palabras',
    detect: 'Solo Detectar'
  },

  dictionary: {
    title: 'Biblioteca de Palabras',
    add: 'Añadir Palabra',
    remove: 'Eliminar Palabra',
    clear: 'Limpiar Diccionario',
    wordInput: 'Ingrese una palabra para añadir',
    categories: 'Categorías',
    severity: 'Gravedad',
    bulkAdd: 'Añadir Múltiples',
    search: 'Buscar en Diccionario'
  },

  categories: {
    profanity: 'Palabras Groseras',
    slurs: 'Insultos o Epítetos',
    adult: 'Contenido Adulto',
    offensive: 'Lenguaje Ofensivo',
    violence: 'Violencia',
    discrimination: 'Discriminación',
    personal: 'Información Personal',
    custom: 'Personalizado'
  },

  severityLevels: {
    low: 'Baja',
    medium: 'Media',
    high: 'Alta',
    critical: 'Crítica'
  },

  statistics: {
    totalWords: 'Total de Palabras',
    sensitiveWords: 'Palabras Sensibles',
    uniqueSensitiveWords: 'Palabras Sensibles Únicas',
    severityBreakdown: 'Desglose por Gravedad',
    categoryBreakdown: 'Desglose por Categoría',
    cleanlinessScore: 'Puntaje de Limpieza'
  },

  filterOptions: {
    title: 'Modo de Filtro',
    modes: {
      asterisk: 'Reemplazar con *',
      custom: 'Carácter personalizado',
      remove: 'Eliminar palabras sensibles'
    },
    replaceChar: {
      title: 'Carácter de Reemplazo',
      placeholder: 'Ingrese el carácter de reemplazo'
    }
  },

  customWords: {
    title: 'Biblioteca de Palabras Sensibles Personalizadas',
    addWord: 'Añadir Palabra',
    addPrompt: 'Por favor ingrese la palabra sensible a añadir:',
    removeWord: 'Eliminar Palabra'
  },

  actions: {
    filter: 'Iniciar Filtro',
    reset: 'Restablecer',
    processing: 'Procesando...',
    clearAll: 'Limpiar Todo',
    copyFiltered: 'Copiar Filtrado',
    downloadReport: 'Descargar Informe',
    resetSettings: 'Restablecer Configuración'
  },

  results: {
    title: 'Resultados del Filtro',
    tabs: {
      filteredResult: 'Resultado Filtrado',
      detectionReport: 'Informe de Detección'
    },
    filteredText: {
      title: 'Texto Filtrado',
      copy: 'Copiar Resultado',
      empty: 'No hay texto filtrado que mostrar'
    },
    statistics: {
      detectedCount: 'Palabras Sensibles Detectadas',
      retentionRate: 'Tasa de Retención de Texto',
      totalWords: 'Recuento Total de Palabras'
    },
    detectedWords: {
      title: 'Palabras Sensibles Detectadas',
      empty: 'No se detectaron palabras sensibles'
    }
  },

  messages: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Error al copiar, por favor copie manualmente',
    noInput: 'Por favor ingrese un texto para filtrar',
    inputTooLong: 'El texto de entrada es demasiado largo',
    wordAdded: 'Palabra añadida a la biblioteca de palabras sensibles',
    wordExists: 'Esta palabra ya existe en la biblioteca',
    wordRemoved: 'Palabra eliminada de la biblioteca',
    filterSuccess: 'Texto filtrado exitosamente',
    noSensitiveWords: 'No se encontraron palabras sensibles',
    dictionaryCleared: 'Diccionario limpiado',
    dictionaryImported: 'Diccionario importado',
    dictionaryExported: 'Diccionario exportado',
    emptyText: 'Por favor ingrese un texto para filtrar'
  }
};