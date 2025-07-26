export default {
  name: 'Comparador de Código',
  description: 'Compara dos bloques de código y resalta las diferencias',

  options: {
    title: 'Opciones',
    ignoreCase: 'Ignorar mayúsculas/minúsculas',
    ignoreWhitespace: 'Ignorar espacios en blanco',
    trimWhitespace: 'Recortar espacios al inicio/fin',
    diffMode: 'Modo de Comparación',
    diffModes: {
      chars: 'Caracteres',
      words: 'Palabras',
      lines: 'Líneas',
      sentences: 'Frases',
      json: 'JSON'
    },
    diffStyle: 'Estilo de Visualización',
    diffStyles: {
      split: 'Vista dividida',
      inline: 'Vista en línea'
    },
    context: 'Líneas de Contexto',
    wrap: 'Ajustar texto',
    languages: {
      plaintext: 'Texto plano',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: 'Código Original',
    modified: 'Código Modificado',
    placeholderOriginal: 'Introduce el código original aquí...',
    placeholderModified: 'Introduce el código modificado aquí...'
  },

  actions: {
    compare: 'Comparar',
    clear: 'Limpiar',
    swap: 'Intercambiar',
    copy: 'Copiar Diferencia',
    download: 'Descargar Diferencia',
    upload: 'Subir Archivos'
  },

  results: {
    title: 'Resultados de la Comparación',
    changes: 'Cambios',
    additions: 'Añadidos',
    deletions: 'Eliminados',
    unchanged: 'Sin cambios',
    noChanges: 'No se encontraron diferencias - los textos son idénticos',
    loading: 'Generando comparación...'
  },

  upload: {
    originalFile: 'Archivo Original',
    modifiedFile: 'Archivo Modificado',
    dropOriginal: 'Arrastra el archivo original aquí o haz clic para buscar',
    dropModified: 'Arrastra el archivo modificado aquí o haz clic para buscar'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    inputRequired: 'Por favor, introduce texto en ambos campos',
    diffGenerated: 'Diferencia generada con éxito',
    error: 'Error generando la diferencia',
    fileError: 'Fallo al leer el archivo'
  },

  tips: {
    title: 'Consejos de Uso',
    compareOptions: 'Ajusta las opciones de comparación según tus necesidades - ignorar espacios puede ser útil al comparar código.',
    diffModes: 'Diferentes modos de diferenciaresaltan distintos niveles de detalle en la comparación.',
    largeFiles: 'Para archivos grandes, la comparación por líneas es más eficiente.',
    jsonMode: 'Usa el modo JSON al comparar datos estructurados - normalizará las estructuras antes de la comparación.'
  }
};