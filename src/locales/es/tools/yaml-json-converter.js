export default {
  name: 'Conversor YAML-JSON',
  description: 'Convertir entre formatos YAML y JSON con opciones personalizables',

  input: {
    title: 'Entrada',
    yamlPlaceholder: 'Ingrese YAML aquí...',
    jsonPlaceholder: 'Ingrese JSON aquí...',
    loadSample: 'Cargar Ejemplo',
    clearInput: 'Limpiar Entrada',
    uploadFile: 'Subir Archivo'
  },

  output: {
    title: 'Salida',
    copyOutput: 'Copiar Salida',
    downloadOutput: 'Descargar Salida',
    clearOutput: 'Limpiar Salida'
  },

  options: {
    conversionMode: 'Modo de Conversión',
    jsonToYaml: 'JSON a YAML',
    yamlToJson: 'YAML a JSON',
    formatOutput: 'Dar Formato a la Salida',
    indentSize: 'Tamaño de Sangrado',
    quoteKeys: 'Comillas en las Claves del Objeto',
    sortKeys: 'Ordenar Claves Alfabéticamente',
    flowStyle: 'Estilo de Flujo (Flow Style) de YAML',
    jsonCompatible: 'Compatibilidad con JSON',
    singleQuotes: 'Usar Comillas Simples',
    includeSchema: 'Incluir Esquema',
    preserveKeyOrder: 'Preservar Orden de las Claves'
  },

  flowStyles: {
    block: 'Estilo Bloque',
    flow: 'Estilo Flujo',
    auto: 'Automático'
  },

  validation: {
    validate: 'Validar Antes de Convertir',
    validInput: '{format} válido',
    invalidInput: '{format} inválido: {error}',
    checkSyntax: 'Verificar Sintaxis'
  },

  actions: {
    convert: 'Convertir',
    swap: 'Intercambiar Formatos',
    beautify: 'Embellecer',
    minify: 'Minificar'
  },

  messages: {
    conversionSuccess: 'Conversión exitosa',
    conversionFailed: 'Fallo en la conversión: {error}',
    copySuccess: '¡Copiado al portapapeles!',
    downloadSuccess: 'Archivo descargado exitosamente',
    emptyInput: 'Por favor ingrese contenido para convertir',
    invalidYaml: 'Sintaxis YAML inválida',
    invalidJson: 'Sintaxis JSON inválida'
  }
};