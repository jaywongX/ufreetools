export default {
  name: 'Formateador JSON',
  description: 'Herramienta en línea para formatear y validar JSON, compatible con compresión y embellecimiento',

  options: {
    indent: 'Sangría',
    sort: 'Ordenar Claves',
    compress: 'Comprimir',
    beautify: 'Embellir'
  },

  actions: {
    format: 'Formatear JSON',
    compress: 'Comprimir',
    clear: 'Limpiar',
    copy: 'Copiar',
    download: 'Descargar',
    transferMeaning: 'Escapar',
    contraposition: 'Desescapar'
  },

  messages: {
    invalidJson: 'Sintaxis JSON inválida',
    copied: '¡Copiado al portapapeles!',
    empty: 'Por favor ingrese contenido JSON',
    formatTip: 'La lista de propiedades se mostrará después de formatear o comprimir JSON',
    formatSuccess: 'JSON formateado correctamente',
    compressSuccess: 'JSON comprimido correctamente',
    escapeSuccess: 'JSON escapado correctamente',
    unescapeSuccess: 'JSON desescapado correctamente',
    copyFailed: 'Fallo al copiar, por favor copie manualmente'
  },

  labels: {
    jsonData: 'Datos JSON',
    propertyList: 'Lista de Propiedades',
    clickToCopy: '(Haz clic en el valor para copiar)'
  },

  placeholders: {
    jsonInput: 'Pega tus datos JSON...'
  }
};