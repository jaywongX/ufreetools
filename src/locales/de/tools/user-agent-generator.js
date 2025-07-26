export default {
  name: 'User-Agent-Generator',
  description: 'Generieren Sie User-Agent-Strings für verschiedene Browser und Geräte für Website-Tests, Crawler und Entwicklung',

  // Filteroptionen
  filters: {
    title: 'Filterkriterien',
    browser: 'Browser',
    os: 'Betriebssystem',
    deviceType: 'Gerätetyp'
  },

  // Browseroptionen
  browsers: {
    all: 'Alle Browser',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Unbekannter Browser'
  },

  // Betriebssysteme
  operatingSystems: {
    all: 'Alle Systeme',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Unbekanntes System'
  },

  // Gerätetypen
  deviceTypes: {
    all: 'Alle Geräte',
    desktop: 'Desktop-Computer',
    mobile: 'Mobilgerät',
    tablet: 'Tablet',
    unknown: 'Unbekanntes Gerät'
  },

  // Generierung
  generation: {
    quantity: 'Anzahl generieren',
    generateRandom: 'Zufällige User-Agents generieren',
    clearResults: 'Ergebnisse löschen'
  },

  // Ergebnisse
  results: {
    title: 'Generierte User-Agents',
    copyAll: 'Alle kopieren',
    empty: 'Klicken Sie auf "Zufällige User-Agents generieren" um Ergebnisse zu erhalten'
  },

  // Nachrichten
  messages: {
    copied: 'In Zwischenablage kopiert',
    allCopied: 'Alle User-Agents kopiert',
    copyFailed: 'Kopieren fehlgeschlagen - bitte manuell kopieren'
  },

  // Informationen
  info: {
    formatTitle: 'User-Agent-Format',
    formatDescription: 'User-Agent-Strings enthalten typischerweise Browser-Name, Version, Betriebssystem und Geräteinformationen:',
    formatExample: 'Mozilla/5.0 (Plattform-Info) Engine-Info Browser-Info',
    examplesTitle: 'Häufige User-Agent-Beispiele:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: 'Anwendungsfälle:',
    useCases: [
      'Website-Kompatibilitätstests',
      'Web-Crawling und Datenerfassung',
      'API-Entwicklung und Tests',
      'Browser-Erkennung umgehen',
      'Gerätezugriff simulieren'
    ]
  }
};