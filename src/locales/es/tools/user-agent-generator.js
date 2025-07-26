export default {
  name: 'Generador de User-Agent',
  description: 'Genera cadenas User-Agent para distintos navegadores y dispositivos para pruebas en sitios web, extracción de datos (web scraping) y desarrollo',

  filters: {
    title: 'Opciones de Filtro',
    browser: 'Navegador',
    os: 'Sistema Operativo',
    deviceType: 'Tipo de Dispositivo'
  },

  browsers: {
    all: 'Todos los Navegadores',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Navegador Desconocido'
  },

  operatingSystems: {
    all: 'Todos los Sistemas Operativos',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Sistema Operativo Desconocido'
  },

  deviceTypes: {
    all: 'Todos los Dispositivos',
    desktop: 'Escritorio',
    mobile: 'Móvil',
    tablet: 'Tableta',
    unknown: 'Dispositivo Desconocido'
  },

  generation: {
    quantity: 'Cantidad',
    generateRandom: 'Generar User-Agents Aleatorios',
    clearResults: 'Limpiar Resultados'
  },

  results: {
    title: 'Resultados',
    copyAll: 'Copiar Todos',
    empty: 'Haga clic en "Generar User-Agents Aleatorios" para obtener resultados'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    allCopied: 'Todos los User-Agents copiados al portapapeles',
    copyFailed: 'Fallo al copiar, por favor hágalo manualmente'
  },

  info: {
    formatTitle: 'Guía del Formato de User-Agent',
    formatDescription: 'Las cadenas User-Agent típicamente contienen información sobre el navegador, versión, sistema operativo y dispositivo, con un formato como:',
    formatExample: 'Mozilla/5.0 (Información de Plataforma) Información del Motor Información del Navegador',
    examplesTitle: 'Ejemplos Comunes de User-Agent:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: 'Casos de Uso:',
    useCases: [
      'Pruebas de compatibilidad de sitios web',
      'Extracción de datos (web scraping)',
      'Desarrollo y pruebas de APIs',
      'Bypassing a la detección de navegador',
      'Simular acceso desde distintos dispositivos'
    ]
  }
};