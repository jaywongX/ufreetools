export default {
  name: 'Codificador/Decodificador de URL',
  description: 'La codificación URL convierte caracteres especiales en un formato aceptable para URLs, comúnmente utilizado para parámetros de URL y envío de formularios.',

  options: {
    operationType: 'Tipo de Operación',
    encodeMode: 'Modo de Codificación'
  },

  encodeOptions: {
    standard: 'Codificación Estándar (encodeURI)',
    component: 'Codificación de Componente (encodeURIComponent)',
    full: 'Codificación Completa (todos los caracteres)',
    standardDescription: 'Codifica toda la URL preservando los caracteres estructurales de las URLs',
    componentDescription: 'Adecuado para parámetros de URL, codifica todos los caracteres especiales',
    fullDescription: 'Codifica todos los caracteres no alfanuméricos, incluidos los espacios (como %20, no como +)'
  },

  actions: {
    encode: 'Codificar URL',
    decode: 'Decodificar URL',
    clear: 'Limpiar',
    copyResult: 'Copiar Resultado'
  },

  input: {
    textToEncode: 'Texto a Codificar',
    textToDecode: 'Texto a Decodificar',
    encodePlaceholder: 'Ingrese una URL o texto a codificar...',
    decodePlaceholder: 'Ingrese una URL o texto a decodificar...'
  },

  output: {
    encodeResult: 'Resultado de la Codificación',
    decodeResult: 'Resultado de la Decodificación'
  },

  messages: {
    copied: '(¡Copiado!)',
    error: 'Error: {message}',
    decodeError: 'No se pudo decodificar: "{text}"',
    copyFailed: 'Fallo al copiar, por favor copie manualmente'
  },

  referenceTable: {
    title: 'Referencia Común de Codificación de Caracteres en URL',
    showTable: 'Mostrar Tabla',
    hideTable: 'Ocultar Tabla',
    character: 'Caracter',
    encoded: 'Codificado en URL',
    description: 'Descripción',
    descriptions: {
      space: 'Espacio',
      exclamation: 'Signo de Exclamación',
      doubleQuote: 'Comillas Dobles',
      hash: 'Numeral',
      dollar: 'Signo de Dólar',
      percent: 'Porcentaje',
      ampersand: 'Ampersand',
      singleQuote: 'Comilla Simple',
      leftParenthesis: 'Paréntesis Izquierdo',
      rightParenthesis: 'Paréntesis Derecho',
      asterisk: 'Asterisco',
      plus: 'Signo Más',
      comma: 'Coma',
      slash: 'Barra Inclinada',
      colon: 'Dos Puntos',
      semicolon: 'Punto y Coma',
      lessThan: 'Menor Que',
      equals: 'Signo de Igualdad',
      greaterThan: 'Mayor Que',
      questionMark: 'Signo de Interrogación',
      at: 'Arroba',
      leftBracket: 'Corchete Izquierdo',
      backslash: 'Barra Inversa',
      rightBracket: 'Corchete Derecho',
      caret: 'Caret (^)',
      backtick: 'Backtick (`)',
      leftBrace: 'Llave Izquierda',
      pipe: 'Tubería (|)',
      rightBrace: 'Llave Derecha',
      tilde: 'Tilde (~)',
      chinese: 'Chino codificado en UTF-8'
    }
  }
};