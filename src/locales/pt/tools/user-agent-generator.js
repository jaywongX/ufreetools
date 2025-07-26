export default {
  name: 'Gerador de User Agent',
  description: 'Gera strings de User-Agent para diversos navegadores e dispositivos, útil para testes de sites, web scraping e desenvolvimento',

  filters: {
    title: 'Filtros',
    browser: 'Navegador',
    os: 'Sistema Operacional',
    deviceType: 'Tipo de Dispositivo'
  },

  browsers: {
    all: 'Todos navegadores',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Navegador desconhecido'
  },

  operatingSystems: {
    all: 'Todos sistemas',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Sistema desconhecido'
  },

  deviceTypes: {
    all: 'Todos dispositivos',
    desktop: 'Computador',
    mobile: 'Dispositivo móvel',
    tablet: 'Tablet',
    unknown: 'Dispositivo desconhecido'
  },

  generation: {
    quantity: 'Quantidade',
    generateRandom: 'Gerar User-Agent aleatório',
    clearResults: 'Limpar resultados'
  },

  results: {
    title: 'Resultados',
    copyAll: 'Copiar todos',
    empty: 'Clique em "Gerar User-Agent aleatório" para gerar resultados'
  },

  messages: {
    copied: 'Copiado para área de transferência',
    allCopied: 'Todos User-Agents copiados',
    copyFailed: 'Falha ao copiar, copie manualmente'
  },

  info: {
    formatTitle: 'Formato do User-Agent',
    formatDescription: 'Strings de User-Agent geralmente contêm nome do navegador, versão, sistema operacional e informações do dispositivo no formato:',
    formatExample: 'Mozilla/5.0 (informações da plataforma) detalhes do motor informações do navegador',
    examplesTitle: 'Exemplos comuns:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: 'Casos de uso:',
    useCases: [
      'Testes de compatibilidade de sites',
      'Web scraping e coleta de dados',
      'Desenvolvimento e testes de API',
      'Contornar detecção de navegador',
      'Simular acesso de diferentes dispositivos'
    ]
  }
};