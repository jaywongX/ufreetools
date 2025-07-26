export default {
  name: 'Probador de Expresiones Regulares',
  description: 'Pruebe y depure expresiones regulares con resaltado en tiempo real y explicaciones',

  actions: {
    test: 'Probar',
    clear: 'Limpiar',
    showExamples: 'Mostrar Ejemplos',
    hideExamples: 'Ocultar Ejemplos',
    copy: 'Copiar'
  },

  sections: {
    examples: 'Ejemplos Comunes de Expresiones Regulares',
    pattern: 'Patrón de Expresión Regular',
    input: 'Texto de Prueba',
    results: 'Resultados de Coincidencia',
    flags: 'Marcadores'
  },

  flags: {
    g: 'Coincidencia global (g)',
    i: 'Ignorar mayúsculas/minúsculas (i)',
    m: 'Multilínea (m)',
    s: 'Punto incluye saltos de línea (s)',
    u: 'Unicode (u)',
    y: 'Anclado (y)'
  },

  errors: {
    emptyRegex: 'Por favor ingrese una expresión regular',
    emptyTestString: 'Por favor ingrese un texto para probar',
    invalidRegex: 'Expresión regular inválida'
  },

  messages: {
    matchesFound: '{count} coincidencias encontradas',
    noMatches: 'No se encontraron coincidencias',
    copied: '¡Copiado al portapapeles!'
  },

  placeholders: {
    pattern: 'Ingrese el patrón de expresión regular',
    testString: 'Ingrese el texto para probar contra el patrón'
  },

  tips: {
    title: 'Consejos de Uso',
    pattern: 'Ingrese su patrón de expresión regular sin las barras que lo rodean.',
    flags: 'Use los marcadores para modificar el comportamiento del patrón (g: global, i: ignorar mayúsculas/minúsculas, m: multilínea).',
    examples: 'Haga clic en "Mostrar Ejemplos" para ver y usar patrones comunes de regex.',
    testing: 'Después de ingresar su patrón y texto de prueba, haga clic en "Probar" para ver las coincidencias.'
  },

  options: {
    flags: 'Marcadores',
    global: 'Coincidencia global (g)',
    caseInsensitive: 'Ignorar mayúsculas/minúsculas (i)',
    multiline: 'Multilínea (m)',
    dotAll: 'Punto incluye saltos de línea (s)',
    unicode: 'Unicode (u)',
    sticky: 'Anclado (y)'
  },

  labels: {
    pattern: 'Expresión Regular',
    testString: 'Texto de Prueba',
    matches: 'Coincidencias',
    groups: 'Grupos',
    noMatches: 'No se encontraron coincidencias'
  },

  match: 'Coincidencia',
  position: 'Posición',
  group: 'Grupo',
  resultsWillAppearHere: 'Los resultados de coincidencia de expresiones regulares aparecerán aquí...',
  regexError: 'Error de expresión regular: {message}',
  emailAddress: 'Correo Electrónico',
  phoneNumber: 'Número de Teléfono (China)',
  ipAddress: 'Dirección IP',
  dateFormat: 'Fecha (yyyy-mm-dd)',
  chineseCharacters: 'Caracteres Chinos',
  phoneNumberExample: 'Contacto: 13912345678\nWeChat: 18887654321\nFijo: 010-12345678',
  urlExample: 'Visita https://example.com\nO http://www.domain.org/path?query=value',
  ipAddressExample: 'Dirección del servidor: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Fecha de inicio: 2023-01-15\nFecha de fin: 2023-02-28\nFecha inválida: 2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
};