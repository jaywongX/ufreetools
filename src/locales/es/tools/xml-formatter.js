export default {
  name: 'Formateador XML',
  description: 'Dar formato, embellecer y validar documentos XML',

  options: {
    indentSize: 'Tamaño de sangrado',
    useTabs: 'Usar Tabulaciones',
    collapseContent: 'Colapsar Contenido',
    maxLineWidth: 'Ancho Máximo de Línea',
    indentAttributes: 'Sangrar Atributos',
    sortAttributes: 'Ordenar Atributos',
    newlineAfterPI: 'Nueva línea después de Instrucciones de Procesamiento',
    operationType: 'Tipo de Operación',
    indentSettings: 'Configuración de Sangrado',
    displayOptions: 'Opciones de Visualización',
    showLineNumbers: 'Mostrar Números de Línea'
  },

  indentOptions: {
    twoSpaces: '2 espacios',
    fourSpaces: '4 espacios',
    tabIndent: 'Sangrado con tabulación'
  },

  actions: {
    format: 'Dar Formato',
    minify: 'Minificar',
    validate: 'Validar',
    toJSON: 'Convertir a JSON',
    copy: 'Copiar',
    clear: 'Limpiar',
    download: 'Descargar',
    upload: 'Subir XML',
    beautify: 'Embellir',
    copyCode: 'Copiar Código'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    formatSuccess: 'XML formateado exitosamente',
    formatError: 'Error al dar formato al XML',
    validXml: 'El XML es válido',
    invalidXml: 'XML inválido: {0}',
    lineCol: 'Línea {line}, Columna {col}',
    minifySuccess: 'XML minificado exitosamente',
    conversionSuccess: 'Conversión exitosa',
    conversionError: 'Error durante la conversión',
    pleaseEnterXml: 'Por favor ingrese contenido XML',
    processingError: 'Error procesando el XML: {0}',
    formatResult: 'Resultado del Formateo',
    characterCount: 'Conteo de caracteres: {0}',
    lineCount: 'Conteo de líneas: {0}',
    characterAndLineCount: 'Conteo de caracteres: {0} | Conteo de líneas: {1}'
  },

  input: {
    xmlInput: 'Entrada XML',
    placeholder: 'Pegue o escriba XML aquí...'
  },

  examples: {
    title: 'Ejemplo XML',
    description: 'Haga clic para cargar ejemplo:',
    simpleXml: 'XML Simple',
    bookstore: 'Catálogo de Librería',
    complexXml: 'XML Complejo'
  }
};