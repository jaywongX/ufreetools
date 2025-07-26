export default {
  name: 'URL-Parameter-Parser',
  description: 'Analysieren und bearbeiten Sie URL-Parameter und Query-Strings',

  // Eingabefelder
  input: {
    title: 'URL-Eingabe',
    url: 'URL',
    urlPlaceholder: 'https://example.com/path?param1=value1&param2=value2 oder param1=value1&param2=value2',
    parse: 'Aktuelle Seiten-URL verwenden',
    clear: 'Leeren',
    examples: 'Beispiele laden',
    parseFromClipboard: 'Aus Zwischenablage einfügen',
    history: 'Verlauf'
  },

  // Parameterliste
  params: {
    title: 'Parameterliste',
    name: 'Parametername',
    value: 'Parameterwert',
    decoded: 'Dekodierter Wert',
    type: 'Typ',
    actions: 'Aktionen',
    add: 'Parameter hinzufügen',
    remove: 'Entfernen',
    edit: 'Bearbeiten',
    copy: 'Als Text kopieren',
    sort: 'Sortierreihenfolge',
    encode: 'Kodieren',
    decode: 'Dekodieren',
    noParams: 'Keine URL-Parameter gefunden',
    noMatchingParams: 'Keine passenden Parameter gefunden',
    modified: 'Modifiziert',
    original: 'Original',
    search: 'Parameter suchen...'
  },

  // Ergebnisse
  results: {
    title: 'URL-Komponenten',
    parsed: 'URL-Bestandteile',
    protocol: 'Protokoll',
    domain: 'Hostname',
    port: 'Port',
    path: 'Pfad',
    queryString: 'Query-String',
    fragment: 'Anker (Hash)',
    constructed: 'Konstruierte URL',
    copyUrl: 'URL kopieren',
    openUrl: 'URL öffnen',
    shareUrl: 'URL teilen',
    shortenUrl: 'URL kürzen',
    encoded: 'Kodierte URL',
    decoded: 'Dekodierte URL'
  },

  // Werkzeuge
  tools: {
    title: 'Werkzeuge',
    buildQuery: 'Query erstellen',
    compareUrls: 'URLs vergleichen',
    validateUrl: 'URL validieren',
    trackingRemoval: 'Tracking-Parameter entfernen',
    convertToCode: 'In Code konvertieren',
    diffTool: 'Parameter-Differenz',
    baseConversion: 'Basisumwandlung',
    jsonToQuery: 'JSON zu Query-String',
    queryToJson: 'Query-String zu JSON'
  },

  // Visualisierung
  visualization: {
    title: 'Visualisierung',
    tree: 'Baumansicht',
    table: 'Parametertabelle',
    json: 'JSON-Format',
    raw: 'Rohansicht',
    hierarchical: 'Hierarchische Ansicht',
    nested: 'Verschachtelte Parameter',
    auto: 'Automatische Erkennung',
    fullUrl: 'Vollständige URL',
    queryOnly: 'Nur Query-String',
    hideJson: 'JSON ausblenden',
    viewAsJson: 'Als JSON anzeigen'
  },

  // Datentypen
  types: {
    string: 'String',
    number: 'Zahl',
    boolean: 'Boolean',
    array: 'Array',
    object: 'Objekt',
    date: 'Datum',
    email: 'E-Mail',
    ip: 'IP-Adresse',
    color: 'Farbe',
    unknown: 'Unbekannt'
  },

  // Einstellungen
  settings: {
    title: 'Einstellungen',
    detectTypes: 'Parsing-Modus',
    decodeAutomatically: 'URL-Dekodierung',
    decodeAuto: 'Automatisch dekodieren',
    decodeOnce: 'Einmal dekodieren',
    decodeTwice: 'Zweimal dekodieren',
    noDecode: 'Nicht dekodieren',
    encodeAutomatically: 'Sonderzeichen kodieren',
    preserveCase: 'Parameter-Groß-/Kleinschreibung beibehalten',
    sortAlphabetically: 'Parameter alphabetisch sortieren',
    sortDefault: 'Standardreihenfolge',
    sortNameAsc: 'Parametername aufsteigend',
    sortNameDesc: 'Parametername absteigend',
    sortValueAsc: 'Parameterwert aufsteigend',
    sortValueDesc: 'Parameterwert absteigend',
    arrayFormat: 'Array-Format',
    objectFormat: 'Objekt-Format',
    emptyValues: 'Leere Werte',
    defaultProtocol: 'Standardprotokoll'
  },

  // Code-Generierung
  codes: {
    title: 'Exportoptionen',
    javascript: 'JavaScript (URLSearchParams)',
    python: 'Python',
    php: 'PHP',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    go: 'Go',
    copyCode: 'Kopieren',
    copyJson: 'JSON kopieren',
    jsComment1: 'URLSearchParams-Objekt erstellen',
    jsComment2: 'Query-String abrufen',
    jsComment3: 'Zu URL hinzufügen',
    phpComment1: 'Parameter-Array',
    phpComment2: 'Query-String erstellen',
    phpComment3: 'Vollständige URL',
    pythonComment1: 'Mit urllib.parse',
    pythonComment2: 'Parameter-Dictionary',
    pythonComment3: 'Query-String erstellen',
    pythonComment4: 'Vollständige URL'
  },

  // Nachrichten
  messages: {
    parsed: 'URL erfolgreich geparst',
    noUrl: 'Bitte URL eingeben',
    invalidUrl: 'Ungültige URL oder Query-String',
    copied: 'In Zwischenablage kopiert',
    paramAdded: 'Parameter hinzugefügt',
    paramRemoved: 'Parameter entfernt',
    trackingRemoved: 'Tracking-Parameter entfernt',
    urlOpened: 'URL in neuem Tab geöffnet',
    urlShortened: 'URL gekürzt',
    error: 'Fehler: {message}',
    importSuccess: 'URL erfolgreich importiert',
    exportSuccess: 'Daten erfolgreich exportiert',
    clipboardError: 'Zugriff auf Zwischenablage fehlgeschlagen. Bitte Berechtigungen überprüfen oder manuell einfügen.',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
  }
};