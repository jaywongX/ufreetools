export default {
  name: 'Formateador SQL',
  description: 'Herramienta en línea para formatear y validar SQL, con soporte para compresión y embellecimiento',
  options: {
    language: 'Dialecto SQL',
    indent: 'Estilo de sangría',
    spaceCount: 'Número de espacios',
    keywordCase: 'Caso de las palabras clave',
    uppercase: 'Palabras clave en mayúsculas',
    lineBreak: 'Estilo de salto de línea',
    tabSize: 'Tamaño del tabulador'
  },
  languages: {
    standard: 'SQL Estándar',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: 'Espacios',
    tabs: 'Tabuladores'
  },
  spaceOptions: {
    two: '2 espacios',
    four: '4 espacios'
  },
  caseOptions: {
    preserve: 'Preservar original',
    upper: 'MAYÚSCULAS',
    lower: 'minúsculas'
  },
  actions: {
    format: 'Formatear SQL',
    minify: 'Minificar SQL',
    clear: 'Limpiar',
    copy: 'Copiar',
    download: 'Descargar'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    formatSuccess: 'SQL formateado correctamente',
    formatError: 'Error al formatear el SQL'
  },
  placeholders: {
    input: 'Ingrese la consulta SQL aquí...',
    output: 'El SQL formateado aparecerá aquí...'
  },
  output: 'Resultado formateado',
  tips: {
    title: 'Consejos de uso',
    dialect: 'Seleccione el dialecto SQL adecuado para un formateo preciso.',
    formatting: 'Personalice el estilo de sangría y el número de espacios según su estilo de codificación preferido.',
    keywords: 'Elija si desea preservar, usar mayúsculas o minúsculas para las palabras clave SQL.',
    copy: 'Use el botón de copiar para transferir rápidamente el SQL formateado al portapapeles.'
  }
}