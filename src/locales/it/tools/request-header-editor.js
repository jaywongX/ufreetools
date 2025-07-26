export default {
  name: 'Editor Intestazioni HTTP',
  description: 'Crea, modifica e testa intestazioni HTTP per le richieste',

  editor: {
    title: 'Editor Intestazioni',
    headers: 'Intestazioni',
    add: 'Aggiungi intestazione',
    bulk: 'Modifica multipla',
    import: 'Importa intestazioni',
    export: 'Esporta intestazioni',
    clear: 'Pulisci tutto',
    importError: 'Errore importazione'
  },

  header: {
    name: 'Nome intestazione',
    value: 'Valore',
    description: 'Descrizione',
    namePlaceholder: 'Inserisci nome intestazione',
    valuePlaceholder: 'Inserisci valore intestazione',
    actions: 'Azioni',
    enabled: 'Abilitato',
    duplicate: 'Duplica',
    delete: 'Elimina',
    noHeaders: 'Nessuna intestazione, clicca "Aggiungi" o carica un template',
    bulkPlaceholder: 'Incolla intestazioni nel formato \'Nome: Valore\', una per riga, o testo raw'
  },

  presets: {
    title: 'Preset',
    save: 'Salva corrente',
    load: 'Carica preset',
    delete: 'Elimina preset',
    presetName: 'Nome preset',
    namePlaceholder: 'Inserisci nome preset',
    confirmDelete: 'Confermi eliminazione preset?',
    common: 'Intestazioni comuni',
    custom: 'Preset personalizzati'
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
    title: 'Test intestazioni',
    url: 'URL',
    urlPlaceholder: 'Inserisci URL per testare',
    method: 'Metodo',
    send: 'Invia richiesta',
    response: 'Risposta'
  },

  response: {
    title: 'Risposta',
    status: 'Stato',
    headers: 'Intestazioni risposta',
    body: 'Corpo',
    time: 'Tempo',
    size: 'Dimensione',
    loading: 'Caricamento...',
    noResponse: 'Aggiungi intestazioni per vedere l\'anteprima',
    headerCount: 'intestazioni'
  },

  options: {
    title: 'Opzioni',
    followRedirects: 'Segui reindirizzamenti',
    timeout: 'Timeout (secondi)',
    validateSSL: 'Valida certificati SSL',
    sendCredentials: 'Invia credenziali'
  },

  formats: {
    title: 'Formati esportazione',
    raw: 'Testo raw',
    json: 'JSON',
    curl: 'Comando cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'Guida intestazioni',
    description: 'Scopri intestazioni HTTP comuni e utilizzi',
    securityHeaders: 'Intestazioni sicurezza',
    cachingHeaders: 'Intestazioni cache',
    corsHeaders: 'Intestazioni CORS',
    authenticationHeaders: 'Intestazioni autenticazione',
    commonValues: 'Valori comuni'
  },

  actions: {
    copy: 'Copia',
    format: 'Formatta',
    validate: 'Valida',
    clear: 'Pulisci'
  },

  messages: {
    headerAdded: 'Intestazione aggiunta',
    headerDeleted: 'Intestazione eliminata',
    headersCleared: 'Tutte le intestazioni sono state rimosse',
    presetSaved: 'Preset salvato',
    presetLoaded: 'Preset caricato',
    presetDeleted: 'Preset eliminato',
    requestSent: 'Richiesta inviata',
    requestFailed: 'Richiesta fallita: {error}',
    copied: 'Copiato negli appunti',
    importSuccess: 'Importazione intestazioni riuscita',
    exportSuccess: 'Esportazione intestazioni riuscita',
    invalidUrl: 'URL non valido',
    pleaseEnterHeader: 'Inserisci testo intestazione',
    invalidHeader: 'Nessuna intestazione valida trovata, usa formato \'Nome: Valore\'',
    invalidHeaderName: 'Nome intestazione non valido: {error}',
    copyFailed: 'Copia fallita, copia manualmente'
  }
};