export default {
  name: 'cURL-Konverter',
  description: 'Konvertiert cURL-Befehle in Code-Snippets verschiedener Programmiersprachen',
  title: 'cURL zu Code',
  subtitle: 'Konvertieren Sie cURL-Befehle in Code für verschiedene Sprachen, um HTTP-Anfragen einfach in Ihre Projekte zu integrieren',

  input: {
    title: 'cURL-Befehl',
    placeholder: 'cURL-Befehl hier einfügen',
    parse: 'cURL parsen',
    clear: 'Leeren',
    examples: 'Beispielbefehle:',
    options: 'Parser-Optionen',
    validateCommand: 'Befehl validieren',
    formatCurl: 'cURL formatieren'
  },

  options: {
    detectAuth: 'Authentifizierung automatisch erkennen',
    resolveVariables: 'Umgebungsvariablen auflösen',
    processContinuations: 'Zeilenfortsetzungen (\\) verarbeiten',
    followRedirects: 'Weiterleitungen folgen',
    preserveHeaders: 'Alle Header behalten',
    ignoreErrors: 'Parsing-Fehler ignorieren',
    noDuplicateHeaders: 'Keine doppelten Header (letzten verwenden)'
  },

  output: {
    title: 'Code-Ausgabe',
    language: 'Zielsprache',
    copy: 'Kopieren',
    copyTooltip: 'In Zwischenablage kopieren',
    download: 'Herunterladen',
    beautify: 'Verschönern',
    codeTitle: '{language} Code',
    errorTitle: 'Konvertierungsfehler',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Browser (fetch)',
      curl: 'cURL (formatiert)',
      json: 'JSON (Anfrageobjekt)',
      har: 'HAR (HTTP-Archiv)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'Anfragedetails',
    method: 'Methode',
    url: 'URL',
    headers: 'Header',
    body: 'Body',
    auth: 'Authentifizierung',
    options: 'Optionen',
    cookie: 'Cookie',
    queryParams: 'Query-Parameter',
    formData: 'Formulardaten',
    visualize: 'Visualisieren'
  },

  visualization: {
    title: 'Anfragevisualisierung',
    request: 'Anfrage',
    response: 'Antwort',
    headers: 'Header',
    body: 'Body',
    timing: 'Timing',
    raw: 'Rohdaten'
  },

  analysis: {
    title: 'Befehlsanalyse',
    insecureWarning: 'Warnung: Dieser Befehl verwendet --insecure/-k (SSL-Überprüfung deaktiviert)',
    verboseIgnored: 'Hinweis: Verbose-Modus (-v) wurde bei der Konvertierung ignoriert',
    unsupportedOptions: 'Nicht unterstützte Optionen',
    warnings: 'Warnungen',
    info: 'Informationen'
  },

  messages: {
    parsing: 'cURL-Befehl wird geparst...',
    parseFailed: 'cURL-Parsing fehlgeschlagen: {error}',
    parseSuccess: 'cURL-Befehl erfolgreich geparst',
    copied: 'Code in Zwischenablage kopiert',
    downloaded: 'Code heruntergeladen',
    invalidCurl: 'Ungültiger cURL-Befehl',
    emptyCurl: 'Bitte cURL-Befehl eingeben',
    validCurl: 'Gültiger cURL-Befehl',
    unknownOption: 'Unbekannte Option: {option}',
    unsupportedMethod: 'Warnung: Nicht alle Sprachen unterstützen HTTP-Methode {method}',
    curlRequired: 'Befehl muss mit "curl" beginnen',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
  },

  examples: {
    title: 'cURL-Beispielbefehle',
    basic: 'Einfache GET-Anfrage',
    headers: 'Benutzerdefinierte Header',
    post: 'POST mit JSON',
    formData: 'Formulardaten senden',
    auth: 'Basic-Authentifizierung',
    complex: 'Komplexes Beispiel',
    exampleCommands: {
      getRequest: 'GET-Anfrage',
      postJson: 'POST JSON',
      postForm: 'POST-Formular',
      withAuth: 'Mit Authentifizierung',
      uploadFile: 'Datei hochladen'
    }
  },

  actions: {
    convert: 'Konvertieren',
    converting: 'Konvertierung läuft...'
  }
};