export default {
  name: 'HTTP-Header-Editor',
  description: 'Erstellen, bearbeiten und testen Sie HTTP-Anfrageheader',

  editor: {
    title: 'Header-Editor',
    headers: 'Anfrageheader',
    add: 'Header hinzufügen',
    bulk: 'Massenbearbeitung',
    import: 'Header importieren',
    export: 'Header exportieren',
    clear: 'Alle löschen',
    importError: 'Importfehler'
  },

  header: {
    name: 'Header-Name',
    value: 'Wert',
    description: 'Beschreibung',
    namePlaceholder: 'Header-Namen eingeben',
    valuePlaceholder: 'Header-Wert eingeben',
    actions: 'Aktionen',
    enabled: 'Aktiviert',
    duplicate: 'Duplizieren',
    delete: 'Löschen',
    noHeaders: 'Keine Header vorhanden. Klicken Sie auf "Hinzufügen" oder laden Sie eine Vorlage',
    bulkPlaceholder: 'Header einfügen (Format: \'Name: Wert\', ein Header pro Zeile) oder Rohheader-Text einfügen'
  },

  presets: {
    title: 'Vorlagen',
    save: 'Aktuelle speichern',
    load: 'Vorlage laden',
    delete: 'Vorlage löschen',
    presetName: 'Vorlagenname',
    namePlaceholder: 'Vorlagenname eingeben',
    confirmDelete: 'Diese Vorlage wirklich löschen?',
    common: 'Häufige Header',
    custom: 'Benutzerdefinierte Vorlagen'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: 'Header testen',
    url: 'URL',
    urlPlaceholder: 'URL zum Testen der Header eingeben',
    method: 'Methode',
    send: 'Anfrage senden',
    response: 'Antwort'
  },

  response: {
    title: 'Antwort',
    status: 'Status',
    headers: 'Antwortheader',
    body: 'Inhalt',
    time: 'Zeit',
    size: 'Größe',
    loading: 'Wird geladen...',
    noResponse: 'Fügen Sie Header hinzu, um eine Vorschau zu sehen',
    headerCount: 'Header'
  },

  options: {
    title: 'Optionen',
    followRedirects: 'Weiterleitungen folgen',
    timeout: 'Timeout (Sekunden)',
    validateSSL: 'SSL-Zertifikat validieren',
    sendCredentials: 'Anmeldedaten senden'
  },

  formats: {
    title: 'Exportformate',
    raw: 'Rohtext',
    json: 'JSON',
    curl: 'cURL-Befehl',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'Header-Leitfaden',
    description: 'Erfahren Sie mehr über häufige HTTP-Header und ihre Verwendung',
    securityHeaders: 'Sicherheitsheader',
    cachingHeaders: 'Cache-Header',
    corsHeaders: 'CORS-Header',
    authenticationHeaders: 'Authentifizierungsheader',
    commonValues: 'Häufige Werte'
  },

  actions: {
    copy: 'Kopieren',
    format: 'Formatieren',
    validate: 'Validieren',
    clear: 'Leeren'
  },

  messages: {
    headerAdded: 'Header hinzugefügt',
    headerDeleted: 'Header gelöscht',
    headersCleared: 'Alle Header gelöscht',
    presetSaved: 'Vorlage gespeichert',
    presetLoaded: 'Vorlage geladen',
    presetDeleted: 'Vorlage gelöscht',
    requestSent: 'Anfrage gesendet',
    requestFailed: 'Anfrage fehlgeschlagen: {error}',
    copied: 'In die Zwischenablage kopiert',
    importSuccess: 'Header erfolgreich importiert',
    exportSuccess: 'Header erfolgreich exportiert',
    invalidUrl: 'Ungültige URL',
    pleaseEnterHeader: 'Bitte Header-Text eingeben',
    invalidHeader: 'Keine gültigen Header gefunden. Verwenden Sie das Format \'Name: Wert\'',
    invalidHeaderName: 'Ungültiger Header-Name: {error}',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
  }
};