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
  }
};