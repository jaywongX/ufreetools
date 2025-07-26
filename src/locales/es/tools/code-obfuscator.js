export default {
  name: 'Ofuscador de Código',
  description: 'Ofusca código JavaScript y CSS para mejorar la seguridad y proteger la propiedad intelectual',

  languages: {
    title: 'Selecciona el Lenguaje',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'Opciones de Ofuscación',
    javascript: {
      compact: 'Compactar Salida (Eliminar espacios)',
      controlFlowFlattening: 'Aplanamiento del Flujo de Control',
      deadCodeInjection: 'Inyección de Código Muerto',
      debugProtection: 'Protección contra Depuración',
      selfDefending: 'Autodefensa (Evitar mejoras al código)',
      stringArray: 'Transformar Cadenas en Arreglos',
      renameGlobals: 'Renombrar Variables Globales',
      renameProperties: 'Renombrar Propiedades',
      mangle: 'Ofuscar Nombres de Variables',
      stringArrayEncoding: 'Codificación de Arreglo de Cadenas',
      stringArrayThreshold: 'Umbral del Arreglo de Cadenas',
      unicodeEscapeSequence: 'Secuencias de Escape Unicode'
    },
    css: {
      compact: 'Salida Compacta',
      renameSelectors: 'Renombrar Selectores',
      preserveImportant: 'Preservar !important',
      restructure: 'Reestructurar Reglas',
      keepVendorPrefixes: 'Mantener Prefijos de Proveedores',
      removeComments: 'Eliminar Comentarios'
    }
  },

  input: {
    title: 'Código de Entrada',
    placeholder: 'Introduce el código a ofuscar...',
    clear: 'Limpiar',
    paste: 'Pegar desde portapapeles',
    upload: 'Subir Archivo'
  },

  output: {
    title: 'Resultado Ofuscado',
    placeholder: 'El código ofuscado aparecerá aquí...',
    copy: 'Copiar',
    download: 'Descargar',
    stats: {
      original: 'Tamaño Original',
      obfuscated: 'Tamaño Ofuscado',
      ratio: 'Ratio de Compresión'
    },
    increase: 'Aumento',
    decrease: 'Disminución',
  },

  actions: {
    obfuscate: 'Ofuscar',
    clear: 'Limpiar'
  },

  messages: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar, por favor hazlo manualmente',
    processing: 'Procesando...',
    error: 'Error al ofuscar',
    emptyInput: 'Por favor introduce un código para ofuscar',
    invalidInput: 'Código inválido',
    uploadError: 'Fallo al subir el archivo',
    fileTooLarge: 'El archivo es demasiado grande (máximo 2MB)'
  },

  tips: {
    title: 'Consejos de Uso',
    tip1: 'La ofuscación dificulta el análisis inverso pero no puede evitar completamente que el código sea descifrado',
    tip2: 'Activar más opciones de ofuscación aumentará el tamaño del código y el uso de recursos en ejecución',
    tip3: 'Algunas opciones pueden afectar la depuración del código',
    tip4: 'Es recomendable hacer una copia del código original antes de ofuscar',
    tip5: 'Para proyectos grandes, considera usar herramientas profesionales de ofuscación'
  },

  demo: {
    title: 'Demostración',
    function: 'Demuestra función',
    class: 'Demuestra clase',
    simple: 'Estilo sencillo',
    animation: 'Efecto de animación',
  }
};