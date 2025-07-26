export default {
  name: 'Convertidor de CSV a JSON',
  description: 'Convierte datos CSV al formato JSON con opciones personalizables',

  options: {
    delimiter: 'Delimitador',
    quote: 'Carácter de comillas',
    header: 'Primera fila como encabezado',
    dynamicTyping: 'Tipado dinámico',
    dynamicTypingDescription: 'Convertir cadenas numéricas a números, "true/false" a booleanos, etc.',
    skipEmptyLines: 'Saltar líneas vacías',
    comments: 'Carácter de comentario',
    outputFormat: 'Formato de salida',
    indentation: 'Indentación',
    encoding: 'Codificación',
    newline: 'Carácter de nueva línea',
    title: 'Opciones de conversión'
  },

  delimiters: {
    comma: 'Coma (,)',
    semicolon: 'Punto y coma (;)',
    tab: 'Tabulador (\\t)',
    pipe: 'Tubería (|)',
    custom: 'Personalizado'
  },

  formats: {
    array: 'Matriz de objetos',
    arrayOfArrays: 'Matriz de matrices',
    keyed: 'Objeto clave-valor',
    nested: 'Objeto anidado'
  },

  preview: {
    input: 'Entrada...',
    output: 'Salida...',
    rawCsv: 'CSV sin procesar',
    parsedCsv: 'CSV analizado',
    jsonOutput: 'Salida JSON',
    firstRows: 'Primeras {count} Filas',
    showAll: 'Mostrar Todo'
  },

  actions: {
    convert: 'Convertir',
    copy: 'Copiar JSON',
    download: 'Descargar JSON',
    clear: 'Limpiar',
    uploadCsv: 'Subir CSV',
    swap: 'Intercambiar Entrada/Salida',
    loadExample: 'Cargar Ejemplo',
    clearInput: 'Limpiar Entrada',
    formatOutput: 'Formatear Salida',
    copyResult: 'Copiar Resultado',
    downloadResult: 'Descargar Resultado',
    paste: 'Pegar',
    showOptions: 'Mostrar Opciones',
    hideOptions: 'Ocultar Opciones',
    uploadJson: 'Subir JSON'
  },

  results: {
    rowsProcessed: 'Procesadas {count} Filas',
    conversionComplete: 'Conversión Completada',
    copied: 'Copiado al Portapapeles',
    downloaded: 'Descargado',
    error: 'Error'
  },

  errors: {
    noData: 'No hay datos CSV para convertir',
    invalidCsv: 'Formato CSV inválido',
    parsingFailed: 'Fallo en el análisis: {error}',
    missingHeader: 'Fila de encabezado faltante',
    invalidJson: 'Formato JSON inválido',
    formatFailed: 'Fallo en el formato: {error}',
    copyFailed: 'Fallo en la copia, por favor cópielo manualmente',
    downloadFailed: 'Fallo en la descarga',
    pasteError: 'No se pudo pegar desde el portapapeles',
    conversionFailed: 'Fallo en la conversión'
  },

  conversion: {
    title: 'Dirección de Conversión',
    csvToJson: {
      title: 'CSV a JSON',
      delimiterLabel: 'Delimitador',
      headerLabel: 'Primera fila como encabezado',
      dynamicTypingLabel: 'Tipado dinámico',
      skipEmptyLinesLabel: 'Saltar líneas vacías',
      convertButton: 'Convertir CSV a JSON'
    },
    jsonToCsv: {
      title: 'JSON a CSV',
      delimiterLabel: 'Delimitador',
      headerLabel: 'Incluir fila de encabezado',
      quotesLabel: 'Añadir comillas a todos los campos',
      nestedModeLabel: 'Seleccionar modo de procesamiento de datos anidados',
      flat: 'Procesamiento aplanado',
      stringify: 'Convertir a cadena',
      ignore: 'Ignorar procesamiento',
      convertButton: 'Convertir JSON a CSV'
    }
  },

  stats: {
    processed: 'Filas de datos procesadas',
    fields: 'Número de campos/columnas',
    inputSize: 'Tamaño de entrada antes de la conversión',
    outputSize: 'Tamaño de salida después de la conversión',
    title: 'Estadísticas de conversión'
  },

  messages: {
    copied: 'Copiado al Portapapeles',
    download: 'Descargado',
    error: 'Error'
  },

  formatBytes: {
    bytes: 'Bytes',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};