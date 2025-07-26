export default {
  name: 'Générateur de User-Agent',
  description: 'Génère des chaînes User-Agent pour différents navigateurs et appareils, utilisées pour les tests de sites web, le scraping et le développement',

  filters: {
    title: 'Filtres',
    browser: 'Navigateur',
    os: 'Système d\'exploitation',
    deviceType: 'Type d\'appareil'
  },

  browsers: {
    all: 'Tous les navigateurs',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Navigateur inconnu'
  },

  operatingSystems: {
    all: 'Tous les systèmes',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Système inconnu'
  },

  deviceTypes: {
    all: 'Tous les appareils',
    desktop: 'Ordinateur de bureau',
    mobile: 'Appareil mobile',
    tablet: 'Tablette',
    unknown: 'Appareil inconnu'
  },

  generation: {
    quantity: 'Quantité',
    generateRandom: 'Générer des User-Agent aléatoires',
    clearResults: 'Effacer les résultats'
  },

  results: {
    title: 'Résultats',
    copyAll: 'Copier tout',
    empty: 'Cliquez sur "Générer des User-Agent aléatoires" pour afficher des résultats'
  },

  messages: {
    copied: 'Copié dans le presse-papiers',
    allCopied: 'Tous les User-Agent copiés',
    copyFailed: 'Échec de la copie, veuillez copier manuellement'
  },

  info: {
    formatTitle: 'Format du User-Agent',
    formatDescription: 'Les chaînes User-Agent contiennent généralement le nom du navigateur, la version, le système d\'exploitation et les informations sur l\'appareil, avec le format suivant :',
    formatExample: 'Mozilla/5.0 (informations sur la plateforme) moteur informations sur le navigateur',
    examplesTitle: 'Exemples courants de User-Agent :',
    chromeWindows: 'Chrome (Windows) :',
    firefoxMac: 'Firefox (macOS) :',
    safariIOS: 'Safari (iOS) :',
    useCasesTitle: 'Cas d\'utilisation :',
    useCases: [
      'Tests de compatibilité de sites web',
      'Scraping et collecte de données',
      'Développement et tests d\'API',
      'Contournement de la détection du navigateur',
      'Simulation d\'accès depuis différents appareils'
    ]
  }
};