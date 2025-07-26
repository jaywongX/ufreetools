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
  }
};