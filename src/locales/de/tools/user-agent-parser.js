export default {
  name: 'User-Agent-Parser',
  description: 'Analysieren Sie Browser-User-Agent-Strings zur Identifikation von Browser, Betriebssystem und Geräteinformationen',

  // Eingabefelder
  input: {
    label: 'User-Agent-String',
    placeholder: 'User-Agent-String eingeben oder einfügen...'
  },

  // Aktionen
  actions: {
    parse: 'Analysieren',
    detect: 'Aktuellen Browser erkennen',
    clear: 'Zurücksetzen'
  },

  // Ergebnisse
  results: {
    title: 'Analyseergebnisse',
    summary: 'Zusammenfassung',
    details: 'Detaillierte Informationen',
    originalUA: 'Originaler User-Agent-String'
  },

  // Abschnitte
  sections: {
    browser: 'Browser',
    os: 'Betriebssystem',
    device: 'Gerät',
    other: 'Weitere Informationen'
  },

  // Gerätetypen
  deviceTypes: {
    mobile: 'Mobilgerät',
    tablet: 'Tablet',
    desktop: 'Desktop'
  },

  // Felder
  fields: {
    name: 'Name',
    version: 'Version',
    engine: 'Engine',
    platform: 'Plattform',
    type: 'Typ',
    vendor: 'Hersteller',
    model: 'Modell',
    isMobile: 'Mobilgerät',
    isTablet: 'Tablet',
    isDesktop: 'Desktop'
  },

  // Nachrichten
  messages: {
    parsingError: 'Fehler beim Parsen des User-Agent-Strings',
    emptyInput: 'Bitte User-Agent-String eingeben',
    unknown: 'Unbekannt',
    yes: 'Ja',
    no: 'Nein'
  },

  // Tipps
  tips: {
    description: 'Der User-Agent ist ein Identifikationsstring, den Browser an Server senden. Er enthält Informationen über Browser, Betriebssystem und Gerät.',
    useCases: 'Häufig verwendet für Webanalysen, Browserkompatibilität und Geräteanpassung.'
  }
};