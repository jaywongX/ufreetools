export default {
  name: 'Generatore di Configurazioni CORS',
  description: 'Crea rapidamente configurazioni per la condivisione delle risorse tra origini diverse (CORS), con supporto per vari ambienti server',
  options: {
    title: 'Opzioni CORS',
    allowedOrigins: {
      title: 'Origini consentite (Access-Control-Allow-Origin)',
      allowAll: 'Consenti tutte le origini (*) <span class="text-yellow-500 text-xs ml-1">(non sicuro, non supporta credenziali)</span>',
      specific: 'Specifica origini consentite (consigliato)',
      addOrigin: 'Aggiungi origine',
      placeholder: 'Inserisci origine (es: https://example.com)',
      wildcard: 'Consenti sottodomini (wildcard)',
      null: 'Consenti origine null',
      remove: 'Rimuovi origine'
    },
    allowedMethods: {
      title: 'Metodi HTTP consentiti (Access-Control-Allow-Methods)',
      selectMethods: 'Seleziona metodi HTTP',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: 'Intestazioni consentite (Access-Control-Allow-Headers)',
      all: 'Consenti tutte le intestazioni (*)',
      specific: 'Solo intestazioni specifiche',
      addHeader: 'Aggiungi intestazione',
      headerPlaceholder: 'Inserisci nome intestazione',
      common: 'Intestazioni comuni',
      custom: 'Intestazioni personalizzate',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'Rimuovi intestazione'
    },
    exposedHeaders: {
      title: 'Intestazioni esposte (Access-Control-Expose-Headers)',
      description: 'Intestazioni di risposta accessibili dal browser',
      addHeader: 'Aggiungi intestazione esposta',
      headerPlaceholder: 'Inserisci nome intestazione'
    },
    credentials: {
      title: 'Credenziali consentite (Access-Control-Allow-Credentials)',
      description: 'Consenti l\'uso di cookie e intestazioni di autenticazione',
      allow: 'Consenti credenziali',
      warning: 'Deve essere usato con origini specifiche, non con wildcard (*)'
    },
    maxAge: {
      title: 'Durata cache richieste preflight (Access-Control-Max-Age)',
      description: 'Durata della cache per risultati richieste preflight (secondi)',
      seconds: 'secondi',
      default: 'Predefinito: ',
      recommended: 'Consigliato: 3600 (1 ora)'
    },
    serverType: {
      title: 'Tipo di server',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'Intestazioni HTTP'
    }
  },
  output: {
    title: 'Intestazioni generate',
    instructions: 'Aggiungi queste intestazioni alle risposte del tuo server:',
    copy: 'Copia intestazioni',
    test: 'Test intestazioni',
    downloadConfig: 'Scarica configurazione'
  },
  configs: {
    title: 'Esempi di configurazione',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },
  testing: {
    title: 'Test CORS',
    description: 'Verifica se la tua configurazione CORS funziona correttamente',
    originUrl: 'URL origine',
    targetUrl: 'URL destinazione',
    method: 'Metodo richiesta',
    credentials: 'Includi credenziali',
    headers: 'Intestazioni personalizzate',
    addHeader: 'Aggiungi intestazione',
    testButton: 'Test CORS',
    results: 'Risultati test',
    success: 'Test CORS riuscito ✓',
    failure: 'Test CORS fallito ✗✗',
    details: 'Dettagli risposta',
    response: 'Risposta',
    logs: 'Log CORS',
    errorDetails: 'Dettagli errore'
  },
  presets: {
    title: 'Preset',
    api: 'Server API',
    assets: 'Risorse statiche (CDN)',
    auth: 'Servizio autenticazione',
    publicAccess: 'Accesso pubblico',
    restrictive: 'Restrittivo',
    load: 'Carica preset',
    save: 'Salva corrente come preset'
  },
  tips: {
    title: 'Suggerimenti CORS',
    tip1: 'La condivisione delle risorse tra origini diverse (CORS) è un meccanismo basato su intestazioni HTTP che consente a un server di indicare quali origini (domini, protocolli o porte) diverse dalla propria possono caricare risorse sul browser.',
    tip2: 'La protezione CORS è una funzionalità di sicurezza dei browser moderni che impedisce alle pagine web di effettuare richieste a server con origini diverse, proteggendo gli utenti da attacchi di tipo Cross-Site Request Forgery.',
    usage: {
      title: 'Casi d\'uso CORS:',
      tip1: 'Consenti a JavaScript frontend di accedere ad API su domini diversi',
      tip2: 'Supporta richieste Ajax o Fetch cross-origin',
      tip3: 'Consenti accesso cross-origin a font, CSS o altre risorse',
      tip4: 'Configura la comunicazione tra servizi in architetture microservizi',
    },
    safe: 'Suggerimento sicurezza: Evita generalmente di usare il carattere jolly "*" per le origini consentite, specifica invece esplicitamente i domini di cui ti fidi per ridurre rischi di sicurezza.'
  },
  messages: {
    copied: 'Intestazioni copiate negli appunti',
    configDownloaded: 'Configurazione scaricata',
    testStarted: 'Test CORS avviato',
    testSucceeded: 'Richiesta CORS riuscita',
    testFailed: 'Richiesta CORS fallita: {error}',
    presetSaved: 'Preset salvato',
    presetLoaded: 'Preset caricato'
  },
  config: {
    title: 'Configurazione',
    empty: 'Configura le opzioni per generare impostazioni CORS',
    copied: 'Configurazione copiata negli appunti!',
    copy: 'Copia'
  },
  comments: {
    expressMiddleware: "// Usa middleware Express",
    applyGlobalCors: "// Applica middleware CORS",
    applySpecificRoute: "// Oppure applica solo a route specifiche",
    applyRequest: "// Gestisci richiesta",
    apacheAllowedOrigins: "# Origini consentite",
    apacheAllowedMethods: "# Metodi HTTP consentiti",
    apacheAllowedHeaders: "# Intestazioni HTTP consentite",
    apacheAllowedCredentials: "# Credenziali consentite",
    preflightCacheDuration: "# Durata cache richieste preflight",
    apacheExposeHeaders: '# Intestazioni esposte',
    handlePreflightRequest: "# Gestisci richieste preflight",
    nginxConfiguration: "# Configurazione CORS\n# Aggiungi questa configurazione ai blocchi server o location",
    nginxAllowedOrigins: "# Origini consentite",
    nginxAllowedMethods: "# Metodi HTTP consentiti",
    nginxAllowedHeaders: "# Intestazioni HTTP consentite",
    nginxAllowedCredentials: "# Credenziali consentite",
    nginxPreflightCacheDuration: "# Durata cache richieste preflight",
    nginxExposeHeaders: '# Intestazioni esposte',
    nginxHandlePreflight: "# Gestisci richieste preflight",
    httpHeadersConfiguration: "# Configurazione intestazioni HTTP CORS",
    httpAllowedOrigins: "# Origini consentite",
    httpAllowedMethods: "# Metodi HTTP consentiti",
    httpAllowedHeaders: "# Intestazioni HTTP consentite",
    httpAllowedCredentials: "# Credenziali consentite",
    httpPreflightCacheDuration: "# Durata cache richieste preflight",
    httpExposeHeaders: '# Intestazioni esposte',
  },
  article: {
    title: "Guida Completa al Generatore di Configurazioni CORS - Impostazioni Sicure per la Condivisione Risorse tra Origini",
    intro: {
      title: "Comprendere le configurazioni CORS e il loro ruolo cruciale nella sicurezza web",
      p1: "<b>La condivisione delle risorse tra origini diverse (CORS)</b> è un meccanismo di sicurezza fondamentale implementato dai browser moderni per controllare come una pagina web su un dominio può richiedere e interagire con risorse ospitate su un altro dominio. Il nostro strumento Generatore di Configurazioni CORS semplifica il complesso processo di creazione delle appropriate intestazioni CORS e configurazioni server, assicurando che le tue applicazioni web possano comunicare in sicurezza tra domini diversi mantenendo appropriati confini di sicurezza. Generando impostazioni CORS su misura, questo strumento aiuta gli sviluppatori a implementare controlli di accesso appropriati, abilitando funzionalità cross-origin legittime mentre proteggono dati sensibili.",
      p2: "<b>Configurazioni CORS corrette sono essenziali</b> per le moderne applicazioni web, specialmente quelle che utilizzano architetture distribuite, API di terze parti e microservizi. Senza appropriate impostazioni CORS, i browser bloccheranno per impostazione predefinita le richieste cross-origin come misura di sicurezza, impedendo il corretto funzionamento di molte comuni architetture di applicazioni web. Il nostro generatore crea configurazioni standardizzate per vari ambienti server tra cui Node.js/Express, Apache, Nginx e intestazioni HTTP raw, permettendo agli sviluppatori di implementare politiche CORS consistenti indipendentemente dal loro stack tecnologico backend. Questo semplifica il flusso di lavoro di sviluppo e riduce la possibilità di errori di configurazione della sicurezza che potrebbero esporre le applicazioni a vulnerabilità CSRF (Cross-Site Request Forgery) e furto di dati.",
      p3: "<b>La generazione di politiche CORS richiede attenta considerazione</b> di vari parametri di sicurezza, tra cui origini consentite, metodi HTTP, intestazioni, gestione delle credenziali e istruzioni di caching. Le configurazioni manuali sono soggette a errori e possono risultare in politiche troppo restrittive che interrompono funzionalità o pericolosamente lasche che compromettono la sicurezza. Il nostro strumento guida gli utenti attraverso ogni opzione di configurazione con spiegazioni chiare e valori predefiniti sicuri, aiutando gli sviluppatori a prendere decisioni informate sulle loro implementazioni CORS. Le configurazioni generate bilanciano requisiti di sicurezza e necessità di funzionalità cross-origin, fornendo valore immediato a sviluppatori frontend, architetti API e ingegneri della sicurezza che lavorano su moderne applicazioni web."
    },
    useCases: {
      title: "Applicazioni pratiche del Generatore di Configurazioni CORS",
      case1: "<b>Gateway API e architetture a microservizi</b>: Le organizzazioni che sviluppano sistemi distribuiti con gateway API e microservizi spesso necessitano di configurazioni CORS precise per garantire comunicazioni sicure tra applicazioni frontend e servizi backend. Gli architetti API utilizzano il nostro generatore CORS per sviluppare configurazioni standardizzate di intestazioni che possono essere implementate coerentemente su più endpoint di servizio. Questo approccio permette ai microservizi di mantenere un appropriato isolamento mentre consentono ancora richieste cross-origin legittime da applicazioni client autorizzate. Ad esempio, una società fintech potrebbe configurare la sua API di elaborazione pagamenti per accettare solo richieste da specifici domini frontend, bloccando tutte le altre richieste cross-origin. Il nostro generatore crea configurazioni che mantengono questi confini di sicurezza senza richiedere agli sviluppatori di scrivere manualmente complesse regole per le intestazioni per ogni servizio.",
      case2: "<b>Integrazioni con API di terze parti e applicazioni SaaS</b>: Le aziende che forniscono servizi API e piattaforme SaaS necessitano di abilitare integrazioni cross-origin attraverso appropriate configurazioni CORS mentre mantengono confini di sicurezza. Gli ingegneri di piattaforma utilizzano il nostro generatore per creare configurazioni che consentano selettivamente accesso cross-origin basato su domini partner e stato di sottoscrizione. Ad esempio, una piattaforma di analisi di marketing potrebbe configurare la sua API dati per accettare richieste da domini client mentre previene accessi non autorizzati. Il generatore aiuta a creare politiche CORS con ambito preciso che possono evolvere dinamicamente con le relazioni con i clienti, assicurando che l'accesso alle API rimanga sicuro e allineato al business. Questa funzionalità è particolarmente preziosa in scenari di ecosistemi partner dove i fornitori di API devono bilanciare apertura alle integrazioni e requisiti di sicurezza.",
      case3: "<b>Reti per la distribuzione di contenuti (CDN) sicure e hosting di asset</b>: Le organizzazioni che ospitano asset statici come font, fogli di stile, immagini e librerie JavaScript su CDN dedicati necessitano di appropriate impostazioni CORS per rendere queste risorse accessibili alle loro applicazioni web. Gli ingegneri DevOps utilizzano il nostro generatore per creare configurazioni che consentano a specifiche applicazioni di accedere alle risorse ospitate su CDN mentre prevengono l'uso non autorizzato da altri domini. Ad esempio, una casa editrice che ospita font premium configurerebbe intestazioni CORS per consentire solo ai propri siti web di utilizzare questi asset. Il generatore crea configurazioni specifiche per ambienti CDN e server edge, ottimizzando sicurezza e performance attraverso appropriate istruzioni di caching e controlli di accesso. Questo assicura che le risorse statiche rimangano protette mentre vengono ancora consegnate efficientemente alle applicazioni autorizzate.",
      case4: "<b>Ambienti di sviluppo e testing</b>: Team di sviluppo software che lavorano con più ambienti (sviluppo, staging, produzione) necessitano di configurazioni CORS flessibili per adattarsi a diversi requisiti di sicurezza durante il ciclo di vita dello sviluppo. Gli sviluppatori frontend utilizzano il nostro generatore per creare configurazioni specifiche per ambiente che consentano accesso cross-origin durante sviluppo e testing mentre implementano controlli più rigorosi in produzione. Ad esempio, un ambiente di sviluppo potrebbe consentire origini localhost per testing locale, mentre l'ambiente produzione sarebbe limitato solo a domini di produzione verificati. Il generatore aiuta a creare queste politiche di sicurezza graduate senza richiedere estese riconfigurazioni manuali, semplificando il flusso di lavoro di sviluppo mentre mantiene appropriati confini di sicurezza in ogni fase. Questo approccio previene scorciatoie di sicurezza durante lo sviluppo che potrebbero persistere negli ambienti di produzione.",
      case5: "<b>Applicazioni web multiregionali e internazionali</b>: Organizzazioni globali che operano applicazioni in più regioni geografiche spesso distribuiscono servizi a domini e sottodomini specifici per regione che devono comunicare in sicurezza tra loro. Gli architetti di sistema utilizzano il nostro generatore per creare configurazioni CORS che consentano richieste cross-origin tra diversi domini regionali dell'organizzazione mentre bloccano richieste esterne. Ad esempio, una multinazionale potrebbe aver bisogno di consentire a api.us.example.com di ricevere richieste da app.eu.example.com. Il generatore crea specifiche di origine precise che considerano queste complesse relazioni tra domini mentre mantengono confini di sicurezza contro domini non autorizzati. Queste configurazioni assicurano che i componenti geograficamente distribuiti della stessa applicazione possano operare in coordinamento mentre mantengono protezione contro minacce cross-origin."
    },
    tutorial: {
      title: "Come generare configurazioni CORS sicure",
      intro: "Segui questa guida passo-passo per creare configurazioni CORS personalizzate per le tue esigenze specifiche:",
      step1: {
        title: "Passo 1: Configura le origini consentite",
        description: "Inizia specificando quali domini possono accedere alle tue risorse nella sezione <b>Origini consentite</b>. Per massima sicurezza, evita l'opzione wildcard (*) che consente a qualsiasi dominio di accedere alle tue risorse. Scegli invece l'opzione \"Specifica origini consentite\" e aggiungi individualmente ogni dominio fidato. Ad esempio, inserisci \"https://tuasitofidato.com\" per consentire solo quel dominio specifico. Ricorda di includere il protocollo (https://) e nota che i sottodomini sono considerati origini diverse (app.example.com e api.example.com sono origini distinte). Se hai bisogno di supportare ambienti di sviluppo, puoi aggiungere domini di sviluppo accanto a quelli di produzione, come \"http://localhost:3000\". Dopo aver aggiunto tutti i domini fidati, verifica attentamente eventuali errori di battitura, poiché anche piccoli errori possono causare il blocco da parte del browser di richieste legittime."
      },
      step2: {
        title: "Passo 2: Specifica i metodi HTTP consentiti",
        description: "Successivamente, nella sezione <b>Metodi HTTP consentiti</b>, seleziona quali metodi HTTP la tua API o risorse dovrebbero accettare da richieste cross-origin. Segui il principio del privilegio minimo, abilitando solo i metodi effettivamente necessari alla tua applicazione. Per risorse di sola lettura, considera di limitarti a GET e OPTIONS (OPTIONS è necessario per le richieste preflight). Per risorse che accettano aggiornamenti, abilita selettivamente POST, PUT, PATCH o DELETE in base alle effettive necessità della tua API. Sii particolarmente cauto nell'abilitare metodi che modificano dati (POST, PUT, PATCH, DELETE), poiché richiedono ulteriori considerazioni di sicurezza. Il metodo OPTIONS dovrebbe generalmente rimanere abilitato, poiché i browser lo usano per richieste preflight per verificare i permessi prima di effettuare effettive richieste cross-origin. Le tue scelte qui influenzano direttamente quali operazioni i client cross-origin possono eseguire sulle tue risorse."
      },
      step3: {
        title: "Passo 3: Configura intestazioni e credenziali",
        description: "Nella sezione <b>Intestazioni consentite</b>, specifica quali intestazioni HTTP dovrebbero essere permesse nelle richieste cross-origin. Abilita le intestazioni comuni necessarie alla tua applicazione, come 'Content-Type' per specificare il formato della richiesta, 'Authorization' per token di autenticazione e qualsiasi intestazione personalizzata richiesta dalla tua app. Per autenticazione basata su credenziali (cookie, autenticazione HTTP o certificati client), configura appropriatamente l'opzione <b>Credenziali consentite</b>. Nota importante: quando permetti credenziali, non puoi usare il wildcard (*) per le origini consentite - devi specificare origini esplicite. Imposta poi un appropriato <b>Tempo di cache per richieste preflight</b> per ridurre il numero di richieste preflight. Il valore raccomandato di 3600 secondi (un'ora) bilancia performance e flessibilità di aggiornamento delle politiche CORS quando necessario. Infine, se la tua API restituisce intestazioni personalizzate che le applicazioni client devono poter leggere, aggiungile alla sezione <b>Intestazioni esposte</b>."
      },
      step4: {
        title: "Passo 4: Genera e implementa la configurazione server",
        description: "Dopo aver configurato tutti i parametri CORS, seleziona il tuo ambiente server target (Node.js/Express, Apache, Nginx o intestazioni HTTP) dalle opzioni di formato. Rivedi il codice di configurazione generato per assicurarti che soddisfi i tuoi requisiti. Usa il pulsante \"Copia\" per copiare la configurazione e implementala nel tuo ambiente server seguendo la documentazione della tua piattaforma. Per applicazioni Node.js, installa il pacchetto 'cors' e applica la configurazione alla tua app Express. Per server Apache, aggiungi le direttive generate al tuo file .htaccess o configurazione server. Per Nginx, includi le direttive nei tuoi blocchi server o location. Dopo l'implementazione, testa accuratamente la tua configurazione CORS con richieste cross-origin per verificare che le richieste legittime siano permesse mentre origini non autorizzate siano bloccate. Considera l'uso degli strumenti per sviluppatori del browser per controllare le intestazioni CORS restituite dal tuo server e debugga eventuali problemi."
      }
    },
    corsDetails: {
      title: "Dettagli tecnici sull'implementazione CORS",
      intro: "Comprendere i meccanismi sottostanti del CORS aiuta a creare configurazioni più efficaci e sicure:",
      preflight: {
        title: "Richieste preflight e loro ruolo",
        description: "<b>Le richieste preflight sono un meccanismo di sicurezza chiave nel protocollo CORS</b>, usate dai browser per verificare se hanno il permesso di effettuare determinate richieste cross-origin prima di inviarle effettivamente. Quando una richiesta potrebbe modificare dati sul server (come richieste POST o PUT) o usa intestazioni non semplici, il browser invierà automaticamente prima una richiesta OPTIONS al server. Questa richiesta preflight include intestazioni che indicano i metodi HTTP e le intestazioni che la richiesta effettiva intende usare. Il server deve rispondere con appropriate intestazioni Access-Control-Allow-* che indicano se la richiesta prevista è permessa. Questo meccanismo preflight fornisce un importante punto di controllo della sicurezza, prevenendo che potenzialmente pericolose richieste cross-origin vengano inviate a server che non hanno esplicitamente scelto di riceverle. Il nostro generatore di configurazioni CORS crea automaticamente l'elaborazione lato server necessaria per gestire queste richieste preflight su tutte le piattaforme server supportate, assicurando che il tuo server risponda correttamente a questi controlli di sicurezza del browser con i permessi da te specificati."
      },
      security: {
        title: "Impatto sulla sicurezza delle impostazioni CORS",
        description: "<b>Le configurazioni CORS influenzano direttamente</b> lo stato di sicurezza della tua applicazione web, controllando quali domini esterni possono interagire con i tuoi endpoint API e risorse. Configurazioni CORS troppo permissive - specialmente usando origini wildcard (*) - possono esporre la tua applicazione ad attacchi Cross-Site Request Forgery, dove siti malintenzionati usano sessioni autenticate degli utenti per effettuare richieste non autorizzate alle tue API. È particolarmente importante specificare origini precise invece di wildcard quando usi l'intestazione Access-Control-Allow-Credentials: true, poiché consentire credenziali con origini wildcard creerebbe gravi vulnerabilità di sicurezza. Il principio del privilegio minimo dovrebbe guidare le tue configurazioni CORS: consenti solo le specifiche origini, metodi e intestazioni effettivamente necessarie alla tua applicazione. Il nostro generatore promuove queste migliori pratiche di sicurezza fornendo chiari avvisi su configurazioni potenzialmente insicure e valori predefiniti sicuri che proteggono le tue risorse mentre abilitano le necessarie funzionalità cross-origin. Questo approccio aiuta a prevenire comuni errori di configurazione della sicurezza che potrebbero portare a esposizione di dati o operazioni non autorizzate."
      },
      headers: {
        title: "Spiegazione delle intestazioni CORS fondamentali",
        description: "<b>Ogni intestazione CORS ha una specifica funzione di sicurezza</b> nel controllare l'accesso cross-origin alle tue risorse. Access-Control-Allow-Origin specifica quali domini possono accedere alle tue risorse ed è l'intestazione CORS più fondamentale - i browser applicano rigorosamente questa corrispondenza di origini. Access-Control-Allow-Methods dichiara quali metodi HTTP i domini esterni possono usare quando richiedono le tue risorse, permettendoti di limitare le richieste cross-origin a operazioni di sola lettura se necessario. Access-Control-Allow-Headers controlla quali intestazioni HTTP possono essere incluse nelle richieste cross-origin, permettendoti di abilitare intestazioni specifiche come Authorization mentre ne blocchi altre. Access-Control-Allow-Credentials determina se il browser può inviare cookie o informazioni di autenticazione nelle richieste cross-origin, cruciale per mantenere sessioni autenticate tra origini. Access-Control-Max-Age specifica per quanto tempo il browser dovrebbe memorizzare nella cache le risposte preflight, ottimizzando le performance riducendo il numero di richieste preflight. Access-Control-Expose-Headers ti permette di rendere visibili al client cross-origin specifiche intestazioni di risposta, necessario quando i client hanno bisogno di accedere a intestazioni personalizzate nelle risposte della tua API. Il nostro generatore crea appropriate combinazioni di queste intestazioni basate sulle tue specifiche esigenze, assicurando una configurazione CORS completa e coerente."
      }
    },
    faq: {
      title: "Domande frequenti sulle configurazioni CORS",
      q1: "Qual è la differenza tra CORS e la tradizionale Same-Origin Policy?",
      a1: "<b>La Same-Origin Policy (SOP) e Cross-Origin Resource Sharing (CORS)</b> lavorano insieme per creare un ambiente di navigazione web sicuro, sebbene servano scopi diversi. La Same-Origin Policy è il meccanismo di sicurezza predefinito nei browser che limita come documenti o script da un'origine possono interagire con risorse da un'altra origine. È una linea di base restrittiva che blocca per impostazione predefinita le richieste cross-origin. CORS, d'altra parte, è un allentamento controllato di questa policy - fornisce un modo strutturato per i server di dichiarare quali origini dovrebbero essere permesse ad accedere alle loro risorse nonostante le restrizioni della SOP. Mentre la SOP è una restrizione applicata dal browser, CORS è implementato attraverso intestazioni HTTP che il server invia per dire al browser quali richieste cross-origin dovrebbero essere permesse come eccezioni alla SOP. Il nostro generatore CORS crea configurazioni lato server che abilitano queste eccezioni controllate alla Same-Origin Policy. Senza appropriate intestazioni CORS, i browser applicheranno la SOP e bloccheranno le richieste cross-origin, anche se il tuo server potrebbe tecnicamente gestirle. Questo è il motivo per cui le configurazioni CORS sono essenziali per le moderne applicazioni web che hanno bisogno di condividere risorse tra domini diversi.",
      
      q2: "Perché non posso usare il wildcard (*) per l'origine quando abilito le credenziali?",
      a2: "<b>I browser proibiscono rigorosamente l'uso di origini wildcard con credenziali</b>, una misura di sicurezza critica per prevenire gravi vulnerabilità. Se i browser permettessero la combinazione di Access-Control-Allow-Origin: * con Access-Control-Allow-Credentials: true, creerebbero uno scenario pericoloso dove qualsiasi sito web potrebbe effettuare richieste autenticate alla tua API usando le credenziali dell'utente (cookie, autenticazione HTTP o certificati client). Questo eliminerebbe efficacemente la protezione della Same-Origin Policy contro gli attacchi Cross-Site Request Forgery (CSRF). Ad esempio, se questa combinazione fosse permessa, un sito malintenzionato potrebbe usare i cookie di autenticazione dell'utente per effettuare richieste alla tua API bancaria, potenzialmente trasferendo fondi o accedendo a informazioni sensibili. Per prevenire questa vulnerabilità, tutti i principali browser applicano una regola rigorosa: quando Access-Control-Allow-Credentials è impostato a true, l'intestazione Access-Control-Allow-Origin deve specificare un'origine esatta, non un wildcard. Il nostro generatore CORS applica questo vincolo di sicurezza disabilitando l'opzione credenziali quando si seleziona l'origine wildcard e viceversa, assicurando che le tue configurazioni generate siano sempre conformi a questo fondamentale requisito di sicurezza del browser.",
      
      q3: "Come influiscono le richieste preflight CORS sulle performance delle API?",
      a3: "<b>Le richieste preflight CORS possono impattare significativamente le performance delle API</b>, poiché aggiungono una richiesta HTTP aggiuntiva (OPTIONS) prima di molte richieste cross-origin effettive. Ogni richiesta preflight introduce latenza, poiché il browser deve attendere la risposta OPTIONS prima di procedere con la richiesta effettiva. Questo raddoppia efficacemente il numero di richieste HTTP e round-trip server per richieste cross-origin non semplici. L'impatto sulle performance è particolarmente evidente in applicazioni con frequenti chiamate API o connessioni ad alta latenza. Per mitigare questo sovraccarico di performance, l'intestazione Access-Control-Max-Age è cruciale - indica al browser per quanto tempo (in secondi) memorizzare nella cache i risultati delle preflight, prevenendo ulteriori richieste preflight per la stessa risorsa in quel lasso di tempo. Il nostro generatore raccomanda un valore predefinito di 3600 secondi (un'ora) come bilanciamento ragionevole tra ottimizzazione delle performance e flessibilità nell'aggiornare le politiche CORS quando necessario. Per applicazioni ad alto traffico, potresti considerare di aumentare ulteriormente questo valore (fino a 86400 secondi/24 ore, sebbene i browser possano imporre i propri limiti). Inoltre, per massimizzare le performance in ambienti di produzione, assicurati che il tuo server risponda rapidamente alle richieste OPTIONS e considera l'implementazione di route ottimizzate specifiche per gestire le preflight con overhead minimo.",
      
      q4: "Come posso testare correttamente se la mia configurazione CORS funziona?",
      a4: "<b>Testare le configurazioni CORS richiede un approccio metodico</b>, poiché configurazioni errate spesso si manifestano con messaggi di errore del browser poco chiari e difficili da diagnosticare. La strategia di test più efficace coinvolge la creazione di un semplice client cross-origin ospitato su un dominio diverso dalla tua API. Potrebbe essere una pagina HTML basilare con JavaScript che effettua vari tipi di richieste ai tuoi endpoint API. Usando gli strumenti per sviluppatori di Chrome o Firefox (scheda Network), osserva le richieste preflight OPTIONS e le successive richieste effettive. Verifica che le richieste OPTIONS ricevano risposte 200 o 204 con le corrette intestazioni Access-Control-Allow-*. Testa vari scenari, inclusi diversi metodi HTTP, intestazioni personalizzate e richieste con credenziali, per assicurarti che la tua configurazione gestisca tutti i requisiti della tua applicazione. Problemi comuni nei test includono dimenticare che localhost:3000 e localhost:8080 sono considerati origini diverse dai browser, o trascurare differenze di protocollo (http vs https). Se vedi errori CORS, verifica che le tue origini consentite corrispondano esattamente all'origine della pagina richiedente (incluso protocollo, dominio e porta), accertati che il server stia effettivamente inviando le intestazioni CORS nelle risposte (non solo nella configurazione), e assicurati che le richieste preflight siano gestite correttamente. Il nostro generatore crea configurazioni per ambienti server comuni, ma potresti bisogno di adattarle per il tuo specifico setup server.",
      
      q5: "Quali sono i rischi per la sicurezza di politiche CORS troppo permissive?",
      a5: "<b>Politiche CORS troppo permissive possono introdurre gravi vulnerabilità</b>, indebolendo la protezione della Same-Origin Policy contro attacchi cross-site. Il rischio più significativo deriva dalla configurazione di Access-Control-Allow-Origin: * con Access-Control-Allow-Credentials: true (sebbene i browser blocchino questa specifica combinazione, proxy configurati male potrebbero non farlo). Anche senza credenziali, politiche CORS eccessivamente aperte possono esporre API e dati sensibili a siti non autorizzati. Ad esempio, se un'API di amministrazione interna consente qualsiasi origine, un sito malintenzionato potrebbe effettuarvi richieste e potenzialmente accedere a dati sensibili o eseguire operazioni. Un altro rischio comune è la validazione ingenua delle origini - ad esempio corrispondenze di stringhe semplici che approvano origini contenenti domini fidati (permettendo attacker.com/evil.yourcompany.com invece di solo yourcompany.com). Inoltre, CORS configurati male possono abilitare attacchi Cross-Site Request Forgery se la politica permette a origini non fidate di effettuare richieste che modificano lo stato. Per mitigare questi rischi, segui il principio del privilegio minimo, consentendo solo le specifiche origini, metodi e intestazioni effettivamente necessari alla tua applicazione. Per API interne, non usare mai origini wildcard. Esegui audit regolari delle tue configurazioni CORS come parte delle revisioni di sicurezza e considera l'implementazione di meccanismi di autenticazione aggiuntivi per operazioni sensibili. Il nostro generatore crea configurazioni che promuovono queste migliori pratiche di sicurezza mentre abilitano le necessarie funzionalità cross-origin."
    },
    relatedTools: {
      title: "Esplora strumenti correlati per lo sviluppo web",
      description: "Migliora il tuo flusso di lavoro di sviluppo web con questi strumenti complementari:",
      tool1: {
        name: "Strumento di formattazione e validazione JSON",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Formatta, valida e rendi leggibili i dati JSON per le risposte e richieste API."
      },
      tool2: {
        name: "Riferimento codici di stato HTTP",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "Guida completa ai codici di stato HTTP per una corretta gestione delle risposte API."
      },
      tool3: {
        name: "Debugger JWT",
        url: "https://www.ufreetools.com/tool/jwt-debugger",
        description: "Analizza, convalida e debugga token JWT online."
      },
      tool4: {
        name: "Codificatore/Decodificatore URL",
        url: "https://www.ufreetools.com/tool/url-encode-decode",
        description: "Codifica o decodifica componenti URL per il corretto trattamento di caratteri speciali nelle richieste cross-origin."
      }
    },
    resources: {
      title: "Risorse autorevoli su CORS e sicurezza web",
      resource1: {
        name: "Documentazione MDN: Cross-Origin Resource Sharing (CORS)",
        url: "https://developer.mozilla.org/it/docs/Web/HTTP/CORS",
        description: "Guida completa di Mozilla alla comprensione e implementazione del CORS, con spiegazioni dettagliate di tutte le intestazioni e comportamenti del browser."
      },
      resource2: {
        name: "Specifica W3C CORS",
        url: "https://www.w3.org/TR/cors/",
        description: "Specifica ufficiale W3C che definisce lo standard Cross-Origin Resource Sharing implementato dai browser."
      },
      resource3: {
        name: "Cheat Sheet Sicurezza Applicazioni: CORS Misconfiguration",
        url: "https://0xn3va.gitbook.io/cheat-sheets/web-application/cors-misconfiguration",
        description: "Il Cross-Origin Resource Sharing (CORS) è un meccanismo dei browser che abilita l'accesso controllato a risorse situate al di fuori di un dato dominio. Estende e aggiunge flessibilità alla Same-Origin Policy (SOP)."
      }
    }
  }
}