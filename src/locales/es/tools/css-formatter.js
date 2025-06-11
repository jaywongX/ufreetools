export default {
  name: 'Formateador de CSS',
  description: 'Formatear y mejorar la presentación del código CSS para una mejor legibilidad',
  options: {
    indentSize: 'Tamaño de sangría',
    indentWithTabs: 'Sangrar con tabulaciones',
    convertQuotes: 'Convertir comillas',
    sortSelectors: 'Ordenar selectores',
    sortProperties: 'Ordenar propiedades',
    compressColors: 'Comprimir colores',
    expandShorthand: 'Expandir propiedades abreviadas'
  },
  actions: {
    format: 'Formatear CSS',
    minify: 'Minificar',
    clear: 'Limpiar',
    copy: 'Copiar',
    download: 'Descargar',
    upload: 'Subir archivo'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    formatSuccess: 'CSS formateado correctamente',
    formatError: 'Error al formatear CSS',
    invalidCss: 'Sintaxis CSS inválida'
  }
}