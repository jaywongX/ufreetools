export default {
  name: 'Strumento di Ricerca IP',
  description: 'Ottieni informazioni dettagliate su indirizzi IP, inclusa posizione geografica e dettagli di rete',

  input: {
    title: 'Ricerca IP',
    ipAddress: 'Indirizzo IP',
    ipPlaceholder: 'Inserisci un indirizzo IP (es: 8.8.8.8)',
    hostname: 'Nome host',
    hostnamePlaceholder: 'Oppure inserisci un nome host (es: google.com)',
    options: 'Opzioni di ricerca',
    includeGeolocation: 'Includi posizione geografica',
    includeASN: 'Includi informazioni ASN',
    includeDomains: 'Includi domini associati',
    includeAbuse: 'Includi contatto abusi',
    myIP: 'Usa il mio IP'
  },

  actions: {
    lookup: 'Cerca IP',
    clear: 'Cancella risultati',
    copyIP: 'Copia IP',
    copyAll: 'Copia tutte le informazioni',
    export: 'Esporta risultati'
  },

  results: {
    title: 'Informazioni IP',
    noResults: 'Nessuna informazione da visualizzare',
    error: 'Errore: {message}',
    unknown: 'Sconosciuto',
    queryTime: 'Ora della query',
    dataSource: 'Fonte dati',
    general: {
      title: 'Informazioni generali',
      ipAddress: 'Indirizzo IP',
      hostname: 'Nome host',
      type: 'Tipo',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'IP pubblico',
      yes: 'Sì',
      no: 'No',
      reverse: 'DNS inverso'
    },
    location: {
      title: 'Posizione',
      country: 'Paese',
      region: 'Regione',
      city: 'Città',
      postalCode: 'Codice postale',
      timezone: 'Fuso orario',
      coordinates: 'Coordinate',
      latitude: 'Latitudine',
      longitude: 'Longitudine'
    },
    network: {
      title: 'Rete',
      asn: 'ASN',
      organization: 'Organizzazione',
      isp: 'Provider di servizi internet',
      usage: 'Tipo di utilizzo',
      domain: 'Dominio',
      route: 'Rotta',
      subnet: 'Subnet',
      netmask: 'Maschera di rete',
      cidr: 'Notazione CIDR'
    },
    security: {
      title: 'Informazioni di sicurezza',
      threat: 'Rilevamento minacce',
      isTor: 'Nodo di uscita Tor',
      isProxy: 'Proxy',
      isVpn: 'VPN',
      isAttacker: 'Attaccante noto',
      isAbuser: 'Abusatore noto',
      threatLevel: 'Livello di minaccia',
      confidenceScore: 'Punteggio di confidenza',
      abuseReports: 'Segnalazioni abusi',
      lastReported: 'Ultima segnalazione'
    },
    additional: {
      title: 'Informazioni aggiuntive',
      mobile: 'Rete mobile',
      hosting: 'Provider di hosting',
      associated: 'Domini associati',
      abuseContact: 'Contatto abusi'
    }
  },

  map: {
    title: 'Mappa della posizione',
    noLocation: 'Nessun dato di posizione disponibile',
    viewLarger: 'Visualizza mappa più grande'
  },

  messages: {
    lookingUp: 'Ricerca informazioni per {query}...',
    copied: 'Copiato negli appunti',
    exported: 'Risultati esportati con successo',
    invalidIP: 'Indirizzo IP non valido',
    invalidHostname: 'Nome host non valido',
    publicIPOnly: 'Questo strumento funziona solo con indirizzi IP pubblici',
    rateLimited: 'Limite di frequenza superato. Riprova più tardi.',
    historyCleared: 'Cronologia cancellata'
  },

  history: {
    title: 'Cronologia ricerche',
    clear: 'Cancella cronologia'
  }
};