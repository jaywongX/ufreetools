export default {
  name: 'Formateador de Código',
  description: 'Formatear y embellecer código en varios lenguajes',
  languages: {
    title: 'Lenguaje',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: 'Opciones',
    indent: 'Indentación',
    tabSize: 'Tamaño de Tabulación',
    insertSpaces: 'Insertar Espacios',
    formatSelection: 'Formatear Selección',
    formatOnType: 'Formatear Al Escribir',
    removeComments: 'Eliminar comentarios',
    mangle: 'Ofuscar nombres de variables',
    lineBreak: 'Estilo de salto de línea'
  },
  actions: {
    beautify: 'Embellecer',
    minify: 'Minificar',
    format: 'Formatear',
    copy: 'Copiar Resultado',
    clear: 'Limpiar',
    download: 'Descargar',
    paste: 'Pegar desde portapapeles',
    loadSample: 'Cargar código de ejemplo'
  },
  messages: {
    formatSuccess: 'Código formateado con éxito',
    formatError: 'Error al formatear el código',
    copied: '¡Copiado al portapapeles!',
    languageChangeWarning: 'Cambiar el lenguaje restablecerá tu código. ¿Continuar?'
  },
  errors: {
    emptyCode: 'Por favor, introduce código para formatear',
    invalidJson: 'JSON inválido',
    jsCompressionError: 'Error de compresión de JavaScript'
  },
  input: 'Entrada',
  output: 'Salida',
  placeholders: {
    input: 'Pega tu código aquí...',
    output: 'El código formateado aparecerá aquí...'
  },
  characters: 'caracteres',
  space: 'Espacio',
  spaces: 'espacios',
  auto: 'Auto',
  tips: {
    title: 'Consejos de Uso',
    selectLanguage: 'Selecciona el lenguaje apropiado para tu código para obtener los mejores resultados de formateo.',
    beautifyMinify: 'Usa "Embellecer" para un código legible e indentado o "Minificar" para reducir el tamaño del archivo.',
    customizeOptions: 'Personaliza las opciones de formateo usando el panel de configuración de abajo.',
    keyboard: 'Presiona la tecla Tab en el editor para insertar indentación.'
  }
};