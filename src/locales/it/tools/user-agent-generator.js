export default {
  name: 'Generatore di User Agent',
  description: 'Genera stringhe User-Agent per diversi browser e dispositivi, utili per test su siti web, web scraping e sviluppo',

  filters: {
    title: 'Filtri',
    browser: 'Browser',
    os: 'Sistema operativo',
    deviceType: 'Tipo dispositivo'
  },

  browsers: {
    all: 'Tutti i browser',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Browser sconosciuto'
  },

  operatingSystems: {
    all: 'Tutti i sistemi',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Sistema sconosciuto'
  },

  deviceTypes: {
    all: 'Tutti i dispositivi',
    desktop: 'Computer desktop',
    mobile: 'Dispositivo mobile',
    tablet: 'Tablet',
    unknown: 'Dispositivo sconosciuto'
  },

  generation: {
    quantity: 'Quantità da generare',
    generateRandom: 'Genera User-Agent casuali',
    clearResults: 'Pulisci risultati'
  },

  results: {
    title: 'Risultati generati',
    copyAll: 'Copia tutti',
    empty: 'Clicca il pulsante "Genera User-Agent casuali" per ottenere risultati'
  },

  messages: {
    copied: 'Copiato negli appunti',
    allCopied: 'Tutti gli User-Agent copiati negli appunti',
    copyFailed: 'Copia fallita, copia manualmente'
  },

  info: {
    formatTitle: 'Formato User-Agent',
    formatDescription: 'Le stringhe User-Agent contengono tipicamente nome browser, versione, sistema operativo e informazioni sul dispositivo, con questo formato:',
    formatExample: 'Mozilla/5.0 (informazioni piattaforma) informazioni motore informazioni browser',
    examplesTitle: 'Esempi comuni di User-Agent:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: 'Casi d\'uso:',
    useCases: [
      'Test di compatibilità siti web',
      'Web scraping e raccolta dati',
      'Sviluppo e test API',
      'Eludere rilevamento browser',
      'Simulare accessi da diversi dispositivi'
    ]
  }
};