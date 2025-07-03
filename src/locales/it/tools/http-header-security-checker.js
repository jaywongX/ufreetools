export default {
  name: 'Controllore di sicurezza degli header HTTP',
  description: 'Analizza e valuta la sicurezza degli header di risposta HTTP',
  title: 'Strumento di analisi sicurezza header HTTP',
  intro: 'Analizza gli header HTTP di un sito web, verifica configurazioni di sicurezza come CSP, HSTS e fornisce raccomandazioni per miglioramenti',
  input: {
    title: 'Inserisci URL o header',
    url: 'URL',
    urlPlaceholder: 'Inserisci l\'URL da controllare (es: https://example.com)',
    headers: 'Oppure incolla direttamente gli header HTTP',
    headersPlaceholder: 'Incolla qui gli header HTTP originali...',
    options: 'Opzioni di scansione',
    followRedirects: 'Segui reindirizzamenti',
    includeSubresources: 'Controlla sottorisorse (CSS, JS ecc.)',
    timeout: 'Timeout (secondi)',
    checkButton: 'Controlla header',
    analyzing: 'Analisi in corso...'
  },
  results: {
    title: 'Analisi header di sicurezza',
    overview: 'Panoramica',
    score: 'Punteggio di sicurezza',
    totalScore: 'Punteggio totale 100',
    scanned: 'URL scansionato',
    date: 'Data scansione',
    headers: {
      title: 'Header rilevati',
      name: 'Header',
      value: 'Valore',
      status: 'Stato'
    },
    allHeaders: {
      title: 'Tutti gli header di risposta',
      name: 'Nome',
      value: 'Valore',
      noData: 'Nessun dato sugli header di risposta'
    },
    missing: {
      title: 'Header di sicurezza mancanti',
      description: 'Non sono stati trovati questi header di sicurezza raccomandati:'
    },
    issues: {
      title: 'Problemi di sicurezza',
      critical: 'Critico',
      high: 'Alto',
      medium: 'Medio',
      low: 'Basso',
      info: 'Informazione'
    },
    recommendations: {
      title: 'Raccomandazioni',
      description: 'Considera di aggiungere questi header per migliorare la sicurezza:',
      example: 'Configurazione di esempio'
    },
    rating: {
      unknown: 'Sconosciuto',
      excellent: 'Eccellente',
      good: 'Buono',
      fair: 'Discreto',
      poor: 'Scarso',
      high_risk: 'Alto rischio',
      descriptions: {
        unknown: 'Impossibile ottenere informazioni sugli header di sicurezza del sito',
        excellent: 'Il sito implementa tutti gli header di sicurezza principali',
        good: 'Il sito implementa la maggior parte degli header di sicurezza importanti',
        fair: 'Il sito manca di alcuni header di sicurezza importanti',
        poor: 'Il sito manca di diversi header di sicurezza critici',
        high_risk: 'Il sito non implementa quasi nessuna protezione tramite header di sicurezza'
      }
    }
  },
  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'Impone connessioni HTTPS invece di HTTP',
      recommendation: 'Aggiungi "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: 'Configurato correttamente',
        bad: 'Non configurato',
        warning: 'Configurazione migliorabile'
      },
      recommendationConfigured: 'La configurazione esistente è implementata, assicurati di includere un max-age sufficientemente lungo e includeSubDomains',
      recommendationMissing: 'Si raccomanda di abilitare HSTS per garantire che tutte le comunicazioni avvengano tramite HTTPS'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'Previene lo sniffing del tipo MIME',
      recommendation: 'Aggiungi "X-Content-Type-Options: nosniff"',
      status: {
        good: 'Configurato correttamente',
        bad: 'Non configurato o configurato in modo errato'
      },
      recommendationConfigured: 'Configurazione corretta, mantieni le impostazioni attuali',
      recommendationMissing: 'Si raccomanda di impostare questo header al valore "nosniff"'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'Previene l\'incorporamento del sito in iframe, proteggendo dagli attacchi clickjacking',
      recommendation: 'Aggiungi "X-Frame-Options: DENY" o "SAMEORIGIN"',
      status: {
        good: 'Configurato',
        bad: 'Non configurato'
      },
      recommendationConfigured: 'La configurazione esistente è implementata, si raccomanda di usare DENY o SAMEORIGIN',
      recommendationMissing: 'Si raccomanda di configurare questo header come DENY o SAMEORIGIN per prevenire attacchi clickjacking'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'Controlla quali risorse l\'user agent può caricare',
      recommendation: 'Aggiungi un header Content-Security-Policy con direttive appropriate',
      status: {
        good: 'Configurato correttamente',
        bad: 'Non configurato',
        warning: 'Configurazione migliorabile'
      },
      recommendationConfigured: 'La configurazione esistente è implementata, assicurati di revisionare e aggiornare periodicamente la policy',
      recommendationMissing: 'Si raccomanda di configurare CSP per limitare l\'origine delle risorse caricabili, migliorando così la difesa contro attacchi XSS'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'Questo header abilita il filtro XSS nei browser più vecchi. Nei browser moderni, si raccomanda di usare CSP invece.',
      recommendation: 'Sebbene questo header sia stato sostituito da CSP nei browser moderni, si raccomanda comunque di impostarlo a "1; mode=block" per compatibilità con browser vecchi',
      status: {
        enabled: 'Abilitato',
        disabled: 'Disabilitato',
        notConfigured: 'Non configurato (si raccomanda CSP per browser moderni)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Controlla quali informazioni sono incluse nell\'header Referer',
      recommendation: 'Aggiungi "Referrer-Policy: no-referrer-when-downgrade" o una policy più restrittiva',
      status: {
        good: 'Configurato',
        bad: 'Non configurato'
      },
      recommendationConfigured: 'La configurazione esistente è implementata, si raccomanda di usare strict-origin o strict-origin-when-cross-origin',
      recommendationMissing: 'Si raccomanda di configurare questo header per controllare la trasmissione delle informazioni sul referente'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'Controlla quali funzionalità e API del browser possono essere utilizzate',
      recommendation: 'Aggiungi un header Permissions-Policy con restrizioni appropriate',
      status: {
        good: 'Configurato',
        bad: 'Non configurato'
      },
      recommendationConfigured: 'La configurazione esistente è implementata, assicurati di limitare le funzionalità non necessarie',
      recommendationMissing: 'Si raccomanda di configurare questo header per limitare le funzionalità del browser che il sito può utilizzare'
    }
  },
  status: {
    good: 'Buono',
    warning: 'Avviso',
    bad: 'Scarso',
    info: 'Informazione',
    notApplicable: 'Non applicabile'
  },
  actions: {
    export: 'Esporta report',
    copyHeaders: 'Copia header',
    copyRecommendations: 'Copia raccomandazioni',
    scan: 'Nuova scansione',
    share: 'Condividi risultati',
    analyze: 'Analizza informazioni header'
  },
  emptyState: {
    line1: 'Inserisci l\'URL di un sito web per analizzare la configurazione di sicurezza degli header HTTP',
    line2: 'Ottieni una valutazione dettagliata e raccomandazioni su header di sicurezza come CSP, HSTS e altri'
  },
  messages: {
    scanning: 'Scansione di {url} in corso...',
    completed: 'Scansione completata',
    error: 'Errore: {message}',
    timeout: 'Richiesta timeout',
    invalidUrl: 'URL non valido',
    invalidUrlFormat: 'Inserisci un URL valido, che inizi con http:// o https://',
    copied: 'Copiato negli appunti',
    exportComplete: 'Report esportato con successo',
    httpWarning: 'Avviso: l\'uso di HTTP potrebbe non essere sicuro',
    noHeaders: 'Nessun header trovato',
    fetchError: 'Impossibile ottenere gli header: {error}'
  },
  article: {
    title: "Controllore di sicurezza degli header HTTP: migliora lo stato di sicurezza del tuo sito",
    features: {
      title: "Comprendere la sicurezza degli header HTTP",
      description: "<strong>Il controllore di sicurezza degli header HTTP</strong> è uno strumento progettato specificamente per analizzare e valutare gli <strong>header di sicurezza</strong> di qualsiasi sito web. Gli <strong>header di sicurezza</strong> sono speciali header di risposta HTTP che il server può impostare, fornendo un ulteriore livello di <strong>sicurezza</strong> aiutando a difendersi da vulnerabilità web comuni come attacchi cross-site scripting (XSS), clickjacking e altri attacchi di iniezione di codice.<br><br>Il nostro strumento scansiona i principali <strong>header di sicurezza</strong>, inclusi Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), X-Content-Type-Options, X-Frame-Options e altri. Valuta le <strong>configurazioni degli header</strong> esistenti, identifica gli <strong>header di sicurezza</strong> mancanti e fornisce un <strong>punteggio di sicurezza</strong> completo e raccomandazioni attuabili per migliorare lo <strong>stato di sicurezza</strong> del tuo sito.",
      useCases: {
        title: "Casi d'uso comuni per il controllore di sicurezza degli header HTTP",
        items: [
          "Sviluppatori web che eseguono audit di sicurezza su nuovi siti web prima del deployment",
          "Professionisti della sicurezza che eseguono penetration test e valutazioni delle vulnerabilità",
          "Amministratori di sistema che verificano configurazioni di sicurezza su più domini",
          "Team DevOps che implementano monitoraggio continuo della sicurezza nei processi CI/CD",
          "Proprietari di siti web che verificano lo stato di sicurezza dopo aver implementato gli header raccomandati",
          "Consulenti di sicurezza che dimostrano ai clienti la necessità di migliorare le misure di sicurezza",
          "Responsabili conformità che assicurano che i siti web aderiscano a standard e regolamenti di sicurezza del settore"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sulla sicurezza degli header HTTP",
      items: [
        {
          question: "Cosa sono gli header di sicurezza HTTP e perché sono importanti?",
          answer: "Gli header di sicurezza HTTP sono istruzioni speciali inviate dal server al browser per controllare come il browser dovrebbe comportarsi quando elabora i contenuti del tuo sito web. Sono molto importanti perché forniscono un ulteriore livello di sicurezza che può difendere da vulnerabilità web comuni come XSS, CSRF, clickjacking e attacchi di iniezione di codice. Header di sicurezza configurati correttamente possono migliorare significativamente lo stato di sicurezza del tuo sito con uno sforzo minimo."
        },
        {
          question: "Quali header di sicurezza dovrebbe implementare ogni sito web?",
          answer: "Al minimo, ogni sito web moderno dovrebbe implementare: Content Security Policy (CSP) per prevenire attacchi XSS, HTTP Strict Transport Security (HSTS) per imporre HTTPS, X-Content-Type-Options per prevenire MIME sniffing, X-Frame-Options per prevenire clickjacking, e Referrer-Policy per controllare le informazioni nell'header Referer. Il nostro controllore di sicurezza degli header valuta automaticamente questi header essenziali e altri."
        },
        {
          question: "Come viene calcolato il punteggio di sicurezza?",
          answer: "Il punteggio di sicurezza è calcolato basandosi sulla presenza e corretta configurazione degli header di sicurezza chiave. Header di sicurezza principali come Content Security Policy e HSTS contribuiscono ciascuno fino a 20 punti, mentre altri header come X-Content-Type-Options e X-Frame-Options contribuiscono 10-15 punti ciascuno. Valutiamo anche la qualità dell'implementazione, non solo la presenza degli header, con un punteggio massimo di 100 punti."
        },
        {
          question: "Posso usare questo strumento per controllare siti web che non possiedo?",
          answer: "Sì, puoi usare il controllore di sicurezza degli header HTTP per analizzare qualsiasi sito web accessibile pubblicamente. Lo strumento controlla solo gli header di risposta HTTP, che sono informazioni disponibili pubblicamente inviate dal server web. Tuttavia, raccomandiamo di usarlo principalmente su siti web che possiedi o hai il permesso di testare."
        },
        {
          question: "Come posso implementare gli header di sicurezza raccomandati da questo strumento?",
          answer: "L'implementazione dipende dal tuo server web o piattaforma. Per Apache, puoi aggiungere gli header nel file .htaccess. Per Nginx, puoi aggiungerli nella configurazione del server. Molti content management system hanno plugin per gli header di sicurezza. Il controllore di sicurezza degli header HTTP fornisce configurazioni di esempio che puoi adattare al tuo ambiente specifico."
        }
      ]
    },
    guide: {
      title: "Come usare il controllore di sicurezza degli header HTTP",
      steps: [
        "Inserisci l'URL completo del sito web che vuoi controllare nel campo di input URL (deve includere http:// o https://)",
        "Per controlli avanzati, considera di abilitare opzioni come 'Segui reindirizzamenti' se il sito usa reindirizzamenti",
        "Clicca il pulsante 'Controlla header' per iniziare l'analisi di sicurezza",
        "Esamina il punteggio di sicurezza e la valutazione complessiva nella parte superiore della sezione risultati",
        "Controlla l'analisi dettagliata degli header di sicurezza rilevati, ciascuno etichettato con un indicatore di stato (buono, avviso o scarso)",
        "Clicca su qualsiasi header di sicurezza per espanderlo e vedere dettagli, incluso il suo valore corrente, scopo e raccomandazioni specifiche",
        "Nella sezione 'Tutti gli header di risposta', vedi la lista completa di tutti gli header HTTP restituiti dal server",
        "Implementa gli header di sicurezza raccomandati sul tuo server web in base alle raccomandazioni fornite, poi esegui nuovamente il controllore per verificare i miglioramenti"
      ]
    },
    conclusion: "Controllare e aggiornare regolarmente gli header di sicurezza del tuo sito web è una pratica fondamentale nella manutenzione della sicurezza web. Usando il controllore di sicurezza degli header HTTP, puoi facilmente identificare punti deboli nelle tue configurazioni attuali e implementare i miglioramenti necessari per rafforzare le difese contro attacchi web comuni. Ricorda che gli header di sicurezza sono solo un aspetto di una strategia di sicurezza completa, ma offrono una protezione significativa con uno sforzo di implementazione relativamente piccolo."
  }
}