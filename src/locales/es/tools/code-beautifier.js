export default {
  name: 'Mejorador de Código',
  description: 'Formatea y mejora el código con resaltado de sintaxis e indentación',
  languages: {
    title: 'Lenguaje',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: 'Mejorar',
    minify: 'Minificar',
    clear: 'Limpiar',
    copy: 'Copiar',
    download: 'Descargar',
    upload: 'Subir Archivo'
  },
  options: {
    title: 'Opciones',
    indentSize: 'Tamaño de Indentación',
    indentWith: 'Indentar Con',
    spaces: 'Espacios',
    tabs: 'Tabuladores',
    lineBreaks: 'Estilo de Saltos de Línea',
    quoteStyle: 'Estilo de Comillas',
    bracketStyle: 'Estilo de Llaves',
    preserveNewlines: 'Preservar Saltos de Línea',
    endWithNewline: 'Finalizar con Salto de Línea',
    removeComments: 'Eliminar Comentarios',
    wrapLineLength: 'Longitud para Ajuste de Líneas',
    lineNumbers: 'Mostrar Números de Línea',
    showLineNumbers: 'Mostrar Números de Línea',
    wrapLines: 'Ajustar Líneas',
    theme: 'Tema',
    autoDetect: 'Detección Automática',
    tryAutoDetect: 'Intentar detección automática del lenguaje'
  },
  input: {
    title: 'Entrada',
    placeholder: 'Pega tu código aquí...'
  },
  output: {
    title: 'Salida',
    placeholder: 'El código mejorado aparecerá aquí...'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    beautifySuccess: 'Código mejorado con éxito',
    minifySuccess: 'Código minificado con éxito',
    beautifyError: 'Error al mejorar el código',
    minifyError: 'Error al minificar el código',
    emptyCode: 'Por favor ingresa un código para mejorar',
    fileTooBig: 'El archivo es demasiado grande (máximo 2MB)',
    invalidFile: 'Archivo no válido o tipo no soportado',
    preview: 'vista previa',
    HTMLCode: 'Código HTML'
  },
  stats: {
    original: 'Original',
    beautified: 'Mejorado',
    minified: 'Minificado',
    size: 'Tamaño',
    characters: 'Caracteres',
    lines: 'Líneas'
  },
  tips: {
    title: 'Consejos de Uso',
    tip1: 'Selecciona el lenguaje correcto para obtener el mejor resaltado de sintaxis',
    tip2: 'Puedes elegir entre varios estilos de tema que se adapten al estilo de tu sitio web',
    tip3: 'Copia el código HTML generado y pégalo directamente en un editor o sitio que admita HTML',
    tip4: 'El código resaltado generado soporta modo oscuro y adaptativo',
    tip5: 'Agregar números de línea al mostrar código mejora la legibilidad y facilita su referencia'
  }
};