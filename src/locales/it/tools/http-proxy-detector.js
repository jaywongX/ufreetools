export default {
  name: 'Rilevatore Proxy HTTP',
  description: 'Rileva e analizza proxy e dispositivi intermedi nelle connessioni HTTP',
  title: 'Rilevatore Proxy Frontend',
  intro: 'Verifica se la tua connessione di rete utilizza proxy, analizza X-Forwarded-For e altri header HTTP relativi ai proxy',

  detection: {
    title: 'Rilevamento Proxy',
    start: 'Avvia rilevamento',
    detecting: 'Rilevamento in corso...',
    stop: 'Interrompi rilevamento',
    completed: 'Rilevamento completato',
    noProxies: 'Nessun proxy rilevato',
    proxiesFound: 'Proxy rilevati: {count}'
  },

  options: {
    title: 'Opzioni di rilevamento',
    testUrl: 'URL di test',
    urlPlaceholder: 'Inserisci URL da testare (predefinito: automatico)',
    testMethod: 'Metodo HTTP',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'Timeout (secondi)',
    parallel: 'Test paralleli',
    techniques: 'Tecniche di rilevamento',
    headerAnalysis: 'Analisi header',
    traceMethod: 'Metodo TRACE',
    viaHeader: 'Controllo header Via',
    maxForwards: 'Test Max-Forwards',
    fingerprinting: 'Identificazione fingerprint proxy',
    timing: 'Analisi temporale',
    advanced: 'Opzioni avanzate',
    apiSelection: 'Selezione API'
  },

  apis: {
    ipify: 'API ipify',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: 'Risultati rilevamento',
    summary: 'Riepilogo proxy',
    headers: 'Header richiesta completi',
    info: 'Spiegazione informazioni proxy',
    detected: 'Proxy rilevato',
    notDetected: 'Nessun proxy rilevato',
    detectedDescription: 'La tua richiesta potrebbe aver attraversato uno o più server proxy',
    notDetectedDescription: 'La tua richiesta sembra aver raggiunto direttamente il server di destinazione, senza passare per proxy',
    clientInfo: 'Informazioni IP client',
    remoteIp: 'Indirizzo IP remoto',
    location: 'Posizione geografica',
    isp: 'Provider ISP',
    proxyHeaders: 'Header relativi ai proxy',
    details: 'Risultati dettagliati',
    proxy: 'Proxy',
    type: 'Tipo',
    ip: 'Indirizzo IP',
    software: 'Software',
    confidence: 'Affidabilità',
    latency: 'Latenza',
    headers: 'Header modificati',
    fingerprint: 'Fingerprint',
    export: 'Esporta risultati',
    clear: 'Cancella risultati',
    noData: 'Nessun dato disponibile',
    originalRequest: 'Richiesta originale',
    modifiedRequest: 'Richiesta modificata',
    proxyChain: 'Catena proxy',
    server: 'Server',
    notSet: 'Non impostato'
  },

  types: {
    forward: 'Proxy diretto',
    reverse: 'Proxy inverso',
    transparent: 'Proxy trasparente',
    anonymous: 'Proxy anonimo',
    elite: 'Proxy ad alto anonimato',
    caching: 'Proxy di cache',
    gateway: 'Gateway',
    loadBalancer: 'Bilanciatore di carico',
    cdn: 'CDN',
    corporate: 'Proxy aziendale',
    unknown: 'Tipo sconosciuto'
  },

  headers: {
    title: 'Analisi header',
    original: 'Header originali',
    modified: 'Header modificati',
    added: 'Header aggiunti',
    removed: 'Header rimossi',
    changed: 'Header modificati',
    suspicious: 'Header sospetti',
    select: 'Seleziona header da analizzare',
    name: 'Nome header',
    value: 'Valore',
    all: 'Tutti gli header HTTP',
    notFound: 'Header non trovato'
  },

  details: {
    title: 'Dettagli proxy',
    software: 'Software',
    version: 'Versione',
    features: 'Funzionalità',
    modifications: 'Modifiche',
    behavior: 'Comportamento',
    security: 'Impatto sicurezza',
    recommendations: 'Raccomandazioni'
  },

  map: {
    title: 'Mappa connessione',
    client: 'Il tuo client',
    target: 'Server di destinazione',
    hop: 'Hop {n}',
    direct: 'Connessione diretta',
    proxied: 'Connessione proxy',
    unknown: 'Percorso sconosciuto'
  },

  actions: {
    copyHeaders: 'Copia header richiesta',
    copyToClipboard: 'Copia negli appunti'
  },

  messages: {
    startDetection: 'Avvio rilevamento proxy...',
    detectionComplete: 'Rilevamento proxy completato',
    error: 'Rilevamento fallito: {message}',
    timeout: 'Timeout rilevamento',
    exportComplete: 'Esportazione risultati completata',
    noConnection: 'Impossibile stabilire connessione',
    limitedResults: 'Risultati limitati a causa di restrizioni',
    privateNetwork: 'Rete privata rilevata',
    publicNetwork: 'Rete pubblica rilevata',
    warning: 'Avviso: {message}',
    proxyRemoved: 'Potrebbe esserci un proxy che rimuove gli header di rilevamento',
    copied: 'Header richiesta copiati negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    unknown: 'Errore sconosciuto'
  },

  info: {
    description: 'I proxy HTTP sono server intermedi tra client e server che possono elaborare richieste HTTP per vari scopi. I proxy possono essere configurati da provider di rete, organizzazioni, aziende o individui.'
  },

  xff: {
    title: 'Cos\'è X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) è un campo header HTTP utilizzato per identificare l\'indirizzo IP originale del client che si connette al server web tramite un proxy HTTP o un bilanciatore di carico. Quando una richiesta passa attraverso un proxy, il server di solito vede solo l\'indirizzo IP del proxy, mentre l\'header XFF fornisce un modo per risalire all\'IP originale del client.',
    notFound: 'Header X-Forwarded-For non trovato, il che suggerisce che la richiesta potrebbe non aver passato proxy o che il proxy non ha aggiunto questo header.',
    format: {
      title: 'Formato header XFF',
      description: 'Il formato standard dell\'header XFF è una lista di indirizzi IP separati da virgole, dove l\'IP più a sinistra è il client originale e gli IP successivi sono i server proxy attraversati:'
    },
    related: {
      title: 'Altri header proxy correlati',
      forwardedProto: 'Identifica il protocollo (HTTP o HTTPS) usato dal client per connettersi al proxy',
      forwardedHost: 'Identifica il nome host originale richiesto dal client',
      via: 'Indica i server proxy attraversati da richiesta e risposta',
      forwarded: 'Header più recente che include informazioni su client e tutti i proxy'
    },
    importance: {
      title: 'Perché le informazioni sui proxy sono importanti',
      security: 'Sicurezza e controllo accessi - Identificare accuratamente l\'IP client è importante per prevenire abusi e implementare controlli di accesso basati su IP',
      logging: 'Registrazione - Per audit e diagnosi problemi, registrare l\'IP reale del client è più utile dell\'IP del proxy',
      geolocation: 'Servizi geografici - I servizi di geolocalizzazione basati su IP necessitano dell\'IP reale del client per fornire risultati accurati',
      content: 'Personalizzazione contenuti - Alcuni servizi forniscono contenuti localizzati basati sulla posizione geografica dell\'utente'
    },
    security: {
      title: 'Considerazioni sulla sicurezza',
      description: 'È importante notare che l\'header X-Forwarded-For può essere falsificato dal client. In ambienti con elevati requisiti di sicurezza, dovresti fidarti solo delle informazioni XFF aggiunte da proxy conosciuti o usare altri metodi per verificare l\'IP del client.'
    }
  },

  privacy: {
    title: 'Note sulla privacy',
    description: 'Durante il rilevamento, il tuo indirizzo IP e gli header HTTP verranno inviati a servizi API di terze parti per l\'analisi. Questi servizi potrebbero raccogliere e conservare queste informazioni per fornire il servizio.',
    suggestion: 'Se hai preoccupazioni sulla privacy, scegli un provider API diverso o considera l\'uso di un servizio VPN.'
  }
};