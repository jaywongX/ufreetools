export default {
  name: 'Formateador HTML',
  description: 'Dar formato y embellecer código HTML para mejorar la legibilidad',
  formatMode: 'Modo de Formato',
  beautify: 'Embellir',
  minify: 'Minificar',
  formatOptions: 'Opciones de Formato',
  removeComments: 'Eliminar Comentarios',
  preserveComments: 'Preservar Comentarios',
  showLineNumbers: 'Mostrar Números de Línea',
  helpText: 'La herramienta de embellecimiento/minificación de HTML ayuda a los desarrolladores a organizar rápidamente o optimizar el código HTML para mejorar la legibilidad o reducir el tamaño del archivo.',
  input: 'Entrada HTML',
  inputPlaceholder: 'Pega o escribe tu código HTML aquí...',
  examples: 'Ejemplos',

  exampleNames: {
    simple: 'HTML Simple',
    complex: 'Página HTML Compleja'
  },

  beautifiedResult: 'Resultado Embellido',
  minifiedResult: 'Resultado Minificado',

  stats: {
    chars: 'Caracteres',
    lines: 'Líneas',
    reduction: 'Reducido en {chars} caracteres ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} Espacios',
    tab: 'Indentación con Tabulador'
  },

  errorMessages: {
    emptyInput: 'Por favor, introduce código HTML para procesar',
    processingFailed: 'Fallo al procesar el HTML: {message}'
  },

  options: {
    indentSize: 'Tamaño de Indentación',
    wrapLength: 'Longitud de Ajuste Automático',
    indentInnerHtml: 'Indentar HTML Interno',
    preserveNewlines: 'Preservar Saltos de Línea',
    maxPreserveNewlines: 'Máximo de Saltos de Línea Consecutivos',
    wrapAttributes: 'Ajustar Atributos',
    sortAttributes: 'Ordenar Atributos',
    sortClassNames: 'Ordenar Nombres de Clases'
  },

  actions: {
    format: 'Formatear HTML',
    minify: 'Minificar',
    clear: 'Limpiar',
    copy: 'Copiar',
    download: 'Descargar',
    upload: 'Subir Archivo'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    formatSuccess: 'HTML formateado correctamente',
    formatError: 'Error al formatear el HTML',
    invalidHtml: 'Sintaxis HTML inválida'
  }
};