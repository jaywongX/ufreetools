export default {
  name: 'Formateador de JavaScript',
  description: 'Herramienta en línea para formatear y validar JavaScript, compatible con compresión y embellecimiento',
  options: {
    indent: 'Sangría',
    quotes: 'Estilo de Comillas',
    semicolons: 'Puntos y Comas',
    trailingComma: 'Comas al Final'
  },
  actions: {
    format: 'Formatear JavaScript',
    minify: 'Minificar',
    beautify: 'Embellir',
    clear: 'Limpiar',
    copy: 'Copiar',
    download: 'Descargar'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    formatSuccess: 'JavaScript formateado correctamente',
    formatError: 'Error al formatear JavaScript'
  }
}