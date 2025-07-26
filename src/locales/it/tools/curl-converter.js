export default {
  name: 'Convertitore cURL',
  description: 'Converte comandi cURL in frammenti di codice per diversi linguaggi di programmazione',
  title: 'Da cURL a codice',
  subtitle: 'Trasforma comandi cURL in codice per vari linguaggi, per integrare rapidamente richieste HTTP nei tuoi progetti',

  input: {
    title: 'Comando cURL',
    placeholder: 'Inserisci qui il comando cURL',
    parse: 'Analizza cURL',
    clear: 'Pulisci',
    examples: 'Comandi di esempio:',
    options: 'Opzioni analizzatore',
    validateCommand: 'Valida comando',
    formatCurl: 'Formatta cURL'
  },

  options: {
    detectAuth: 'Rileva automaticamente autenticazione',
    resolveVariables: 'Risolvi variabili d\'ambiente',
    processContinuations: 'Elabora continuazioni di riga (\\)',
    followRedirects: 'Segui reindirizzamenti',
    preserveHeaders: 'Mantieni tutti gli header',
    ignoreErrors: 'Ignora errori di analisi',
    noDuplicateHeaders: 'Nessun header duplicato (usa l\'ultimo)'
  },

  output: {
    title: 'Output codice',
    language: 'Linguaggio di destinazione',
    copy: 'Copia',
    copyTooltip: 'Copia negli appunti',
    download: 'Scarica',
    beautify: 'Formatta',
    codeTitle: 'Codice {language}',
    errorTitle: 'Errore conversione',
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
      curl: 'cURL (formattato)',
      json: 'JSON (oggetto richiesta)',
      har: 'HAR (archivio HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'Dettagli richiesta',
    method: 'Metodo',
    url: 'URL',
    headers: 'Header',
    body: 'Corpo',
    auth: 'Autenticazione',
    options: 'Opzioni',
    cookie: 'Cookie',
    queryParams: 'Parametri query',
    formData: 'Dati form',
    visualize: 'Visualizza'
  },

  visualization: {
    title: 'Visualizzazione richiesta',
    request: 'Richiesta',
    response: 'Risposta',
    headers: 'Header',
    body: 'Corpo',
    timing: 'Tempistica',
    raw: 'Grezzo'
  },

  analysis: {
    title: 'Analisi comando',
    insecureWarning: 'Attenzione: questo comando usa --insecure/-k (verifica SSL disabilitata)',
    verboseIgnored: 'Nota: la modalità verbose (-v) è stata ignorata nella conversione',
    unsupportedOptions: 'Opzioni non supportate',
    warnings: 'Avvisi',
    info: 'Informazioni'
  },

  messages: {
    parsing: 'Analisi comando cURL in corso...',
    parseFailed: 'Analisi comando cURL fallita: {error}',
    parseSuccess: 'Comando cURL analizzato con successo',
    copied: 'Codice copiato negli appunti',
    downloaded: 'Codice scaricato',
    invalidCurl: 'Comando cURL non valido',
    emptyCurl: 'Inserisci un comando cURL',
    validCurl: 'Comando cURL valido',
    unknownOption: 'Opzione sconosciuta: {option}',
    unsupportedMethod: 'Attenzione: non tutti i linguaggi supportano il metodo HTTP {method}',
    curlRequired: 'Il comando deve iniziare con "curl "',
    copyFailed: 'Copia fallita, copia manualmente'
  },

  examples: {
    title: 'Comandi cURL di esempio',
    basic: 'Richiesta GET base',
    headers: 'Header personalizzati',
    post: 'POST con JSON',
    formData: 'Invio dati form',
    auth: 'Autenticazione base',
    complex: 'Esempio complesso',
    exampleCommands: {
      getRequest: 'Richiesta GET',
      postJson: 'POST JSON',
      postForm: 'POST form',
      withAuth: 'Con autenticazione',
      uploadFile: 'Carica file'
    }
  },

  actions: {
    convert: 'Converti',
    converting: 'Conversione in corso...'
  }
};