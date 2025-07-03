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
  },
  article: {
    title: "Rilevatore Proxy HTTP - Identifica e analizza i proxy di rete",
    intro: {
      title: "Cos'è il rilevamento proxy HTTP?",
      p1: "<b>Il rilevamento proxy HTTP</b> è il processo per determinare se la tua connessione internet passa attraverso uno o più server intermedi chiamati proxy. Il nostro strumento di rilevamento proxy analizza le tue richieste di rete esaminando header HTTP (come X-Forwarded-For, Via e altri indicatori) per identificare la presenza di proxy nel percorso di connessione.",
      p2: "I proxy sono server intermedi tra il tuo dispositivo e i siti web che visiti. Possono essere utilizzati per vari scopi legittimi, come migliorare le prestazioni tramite cache, implementare controlli di accesso o fornire anonimato. Tuttavia, l'uso di proxy senza la tua conoscenza o consenso può anche presentare rischi per la sicurezza. Il nostro <b>strumento di rilevamento proxy</b> ti aiuta a identificare proxy nascosti nella tua rete, aumentando la consapevolezza della sicurezza e assistendo nella risoluzione dei problemi.",
      p3: "Quando ti connetti tramite un <b>server proxy HTTP</b>, alcune informazioni sulle tue attività di navigazione possono essere visibili all'operatore del proxy. Questo strumento online di rilevamento proxy ti permette di sapere se la tua connessione è diretta o passa attraverso uno o più livelli proxy, dandoti maggiore controllo sulla tua privacy e sicurezza online."
    },
    useCases: {
      title: "Applicazioni pratiche del rilevamento proxy",
      case1: "<b>Risoluzione problemi di rete</b>: Quando incontri problemi di connessione, rilevare i proxy può aiutare a determinare se sono server intermedi a causare il problema. I professionisti IT spesso devono verificare le configurazioni proxy per diagnosticare problemi di rete.",
      case2: "<b>Verifica della sicurezza</b>: Assicurarsi che la tua navigazione privata non passi attraverso server proxy non autorizzati che potrebbero monitorare o modificare il tuo traffico. Le organizzazioni possono usare il rilevamento proxy per verificare che le politiche di sicurezza aziendali siano implementate correttamente.",
      case3: "<b>Sviluppatori web</b>: Gli sviluppatori web devono capire come i loro contenuti vengono distribuiti agli utenti, specialmente quando usano reti di distribuzione contenuti (CDN) o bilanciatori di carico che agiscono come proxy. Testare il corretto trattamento degli header è cruciale per sicurezza e analisi.",
      case4: "<b>Verifica restrizioni geografiche</b>: Controlla se il tuo servizio VPN o proxy nasconde correttamente la tua posizione per accedere a contenuti con restrizioni regionali. Il nostro strumento aiuta a verificare se le misure di bypass geografico funzionano correttamente.",
      case5: "<b>Controllo ambienti aziendali</b>: Per dipendenti che lavorano in ambienti aziendali, verifica la presenza e configurazione di proxy aziendali che potrebbero influenzare il tuo accesso a internet o la funzionalità delle applicazioni. Questo è particolarmente importante quando si risolvono problemi di connessione delle applicazioni."
    },
    tutorial: {
      title: "Come rilevare proxy HTTP nella tua connessione",
      intro: "Segui questa guida passo-passo per usare efficacemente il nostro strumento di rilevamento proxy HTTP e comprendere la tua configurazione di rete:",
      step1: {
        title: "Passo 1: Avvia il processo di rilevamento",
        description: "Clicca il pulsante <b>\"Avvia rilevamento\"</b> nell'interfaccia dello strumento per iniziare. Il rilevatore inizierà immediatamente ad analizzare la tua connessione inviando richieste a endpoint API specializzati. Di default, lo strumento seleziona automaticamente il metodo di rilevamento più affidabile, ma puoi usare il menu a discesa per scegliere API diverse per test più completi."
      },
      step2: {
        title: "Passo 2: Esamina i risultati di riepilogo",
        description: "Al completamento del rilevamento, la scheda <b>\"Riepilogo proxy\"</b> mostrerà se sono stati rilevati proxy nella tua connessione. Cerca il segno di spunta verde che indica una connessione diretta o l'icona di avviso gialla che mostra proxy rilevati. Il riepilogo mostrerà anche il tuo indirizzo IP rilevato e informazioni sulla posizione, che possono aiutare a verificare se la tua posizione reale è mascherata."
      },
      step3: {
        title: "Passo 3: Controlla in dettaglio gli header proxy",
        description: "Clicca sulla scheda <b>\"Header richiesta completi\"</b> per vedere tutti gli header HTTP nella tua richiesta. Presta particolare attenzione a header come X-Forwarded-For, Via e Forwarded che indicano l'uso di proxy. L'header X-Forwarded-For è particolarmente importante perché contiene una serie di indirizzi IP che mostrano il percorso della tua richiesta attraverso vari proxy. Puoi usare il pulsante in fondo a questa sezione per copiare tutti gli header negli appunti per ulteriori analisi."
      },
      step4: {
        title: "Passo 4: Comprendi le informazioni sul proxy",
        description: "Per una comprensione più approfondita del significato degli header rilevati, visita la scheda <b>\"Spiegazione informazioni proxy\"</b>. Questa sezione spiega lo scopo dei diversi header relativi ai proxy e il loro impatto sulla sicurezza della connessione. Usa questa conoscenza per determinare se i proxy rilevati sono previsti (come i proxy della tua rete aziendale) o potenziali intermediari indesiderati."
      }
    },
    techniques: {
      title: "Comprendere le tecniche di rilevamento proxy HTTP",
      intro: "Il nostro strumento usa diversi metodi per rilevare accuratamente i proxy nelle connessioni di rete. Ecco una panoramica delle tecnologie chiave utilizzate:",
      method1: {
        title: "Analisi degli header",
        description: "Il metodo più comune per rilevare i proxy è controllare gli header HTTP che sono tipicamente aggiunti dai server proxy, come X-Forwarded-For, Via e Forwarded. Questi header spesso contengono informazioni sugli indirizzi IP originali dei client e sulle catene di proxy."
      },
      method2: {
        title: "Confronto IP",
        description: "Il nostro strumento confronta l'indirizzo IP visto dal server con l'IP client previsto. Differenze tra questi IP spesso indicano la presenza di proxy. Questo metodo è particolarmente utile per rilevare proxy trasparenti."
      },
      method3: {
        title: "Analisi tempi di risposta",
        description: "Analizzando i tempi di risposta, possiamo a volte rilevare proxy perché tipicamente aggiungono latenza alle richieste di rete. I proxy di cache possono mostrare pattern di tempo inconsistenti a seconda che il contenuto sia memorizzato nella cache o meno."
      },
      method4: {
        title: "Rilevamento lato server",
        description: "Le nostre API eseguono controlli lato server che possono identificare certi tipi di proxy basandosi su scansioni di porte, database di IP proxy conosciuti e pattern di comportamento nelle richieste HTTP."
      }
    },
    faq: {
      title: "Domande frequenti sul rilevamento proxy HTTP",
      q1: "Perché dovrei controllare se la mia connessione usa proxy?",
      a1: "Controllare i proxy è importante per diversi motivi: <b>consapevolezza della sicurezza</b> (sapere se il tuo traffico è monitorato), <b>preoccupazioni sulla privacy</b> (sapere chi può accedere ai tuoi dati di navigazione), <b>risoluzione problemi di rete</b> (determinare se i proxy causano problemi di connessione), e <b>verifica funzionalità VPN</b> (assicurarsi che i tuoi strumenti di privacy funzionino correttamente). Eseguire regolarmente il rilevamento proxy aiuta a mantenere la consapevolezza dello stato della tua sicurezza di rete.",
      
      q2: "Lo strumento di rilevamento proxy HTTP può identificare tutti i tipi di proxy?",
      a2: "Sebbene il nostro rilevatore proxy sia efficace nell'identificare proxy comuni tramite analisi degli header, certi tipi avanzati di proxy possono essere più difficili da rilevare. I <b>proxy trasparenti</b> che non modificano gli header possono a volte essere identificati tramite differenze IP. I <b>proxy anonimi</b> progettati per nascondere la loro presenza possono essere rilevati tramite analisi temporale o tecnologie lato server. Comunque, <b>proxy ad alto anonimato</b> specificamente progettati per evitare il rilevamento potrebbero non essere identificabili da strumenti client. Per un rilevamento più completo, raccomandiamo di usare multiple opzioni API nel nostro strumento.",
      
      q3: "Usare proxy è illegale o dannoso per il mio computer?",
      a3: "In molti paesi usare proxy è generalmente legale e non dannoso per il computer. I proxy hanno molti usi legittimi, incluso <b>migliorare le prestazioni internet</b> tramite cache, <b>aumentare la privacy</b> mascherando l'indirizzo IP, <b>accedere a contenuti con restrizioni regionali</b>, e <b>implementare politiche di sicurezza</b> in ambienti aziendali. Comunque, la legalità dipende da come usi i proxy - aggirare restrizioni di copyright o violare termini di servizio tramite proxy potrebbe essere problematico. Assicurati di usare i proxy in conformità con le leggi locali e i termini di servizio.",
      
      q4: "Qual è la differenza tra proxy e VPN?",
      a4: "Sebbene sia proxy che VPN instradino il tuo traffico attraverso server intermedi, differiscono in diversi modi significativi: Le <b>VPN cifrano tutto il traffico</b> (tra il tuo dispositivo e il server VPN), mentre la maggior parte dei proxy non fornisce cifratura. Le VPN tipicamente instradano <b>tutto il traffico internet</b> del tuo dispositivo, mentre i proxy di solito gestiscono solo traffico di specifiche applicazioni o protocolli. Rispetto ai proxy standard, le VPN generalmente offrono <b>migliori protezioni per la privacy</b> e funzionalità di sicurezza. Poiché entrambe le tecnologie modificano il percorso della tua connessione, il nostro rilevatore proxy potrebbe identificare la tua connessione VPN come un proxy.",
      
      q5: "Perché la mia azienda usa server proxy e dovrei preoccuparmi?",
      a5: "Le aziende implementano server proxy per diverse ragioni legittime: <b>filtraggio contenuti</b> (limitare accesso a certi siti web), <b>ottimizzazione banda</b> (memorizzare nella cache contenuti frequentemente accessibili), <b>migliorare la sicurezza</b> (scansione per malware o vulnerabilità), <b>monitorare attività dipendenti</b> (assicurare conformità con politiche di utilizzo accettabile), e <b>fornire accesso remoto</b> a risorse interne. Sebbene i proxy aziendali tipicamente non siano un problema di privacy, è importante ricordare che le tue attività online sulla rete aziendale potrebbero essere monitorate. Se il nostro rilevatore proxy identifica un proxy aziendale, questo è tipicamente normale in ambienti corporate.",
      
      q6: "Come sono correlati le reti di distribuzione contenuti (CDN) e i proxy?",
      a6: "Le reti di distribuzione contenuti (CDN) funzionano in modo simile a <b>proxy inversi</b> e potrebbero essere rilevate dal nostro strumento. Le CDN distribuiscono contenuti web attraverso una rete globale di server per migliorare velocità di caricamento e affidabilità. Quando accedi a un sito web usando una CDN, la tua richiesta è tipicamente instradata al server CDN più vicino invece che al server originale. Questo appare nella tua connessione come un proxy, poiché il server CDN agisce da intermediario. A differenza dei proxy tradizionali che potrebbero essere motivo di preoccupazione per la privacy, le CDN sono implementate dai proprietari dei siti web per migliorare l'esperienza utente e sono una parte normale dell'infrastruttura web moderna."
    },
    relatedTools: {
      title: "Strumenti correlati per l'analisi di rete",
      description: "Esplora questi strumenti aggiuntivi per maggiori informazioni sulla tua configurazione di rete e sicurezza:",
      tool1: {
        name: "Controllore sicurezza header HTTP",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "Analizza gli header di risposta HTTP di un sito web, rileva configurazioni di sicurezza come CSP, HSTS e fornisce raccomandazioni per miglioramenti"
      },
      tool2: {
        name: "Editor header richiesta",
        url: "https://www.ufreetools.com/tool/request-header-editor",
        description: "Crea, modifica e testa header HTTP"
      },
      tool3: {
        name: "Ricerca codici di stato HTTP",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "Consulta e comprendi codici di stato e messaggi di risposta HTTP"
      },
      tool4: {
        name: "Parser parametri URL",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "Analizza, interpreta e manipola parametri e stringhe di query URL"
      }
    },
    resources: {
      title: "Ulteriori risorse su proxy e sicurezza di rete",
      resource1: {
        name: "Guida ai test OWASP",
        url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
        description: "OWASP è una comunità globale gratuita e aperta focalizzata sul miglioramento della sicurezza del software applicativo."
      },
      resource2: {
        name: "Header HTTP - Documentazione MDN Web",
        url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers",
        description: "Documentazione dettagliata di Mozilla Developer Network sugli header HTTP, inclusi contenuti relativi a proxy e forwarding."
      },
      resource3: {
        name: "Internet Engineering Task Force (IETF) - Header HTTP Forwarded",
        url: "https://tools.ietf.org/html/rfc7239",
        description: "Documento ufficiale RFC 7239 che definisce l'header HTTP Forwarded, che standardizza le informazioni aggiunte dai proxy."
      }
    }
  }
}