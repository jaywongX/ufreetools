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
  },
  article: {
    title: "Guida Completa alla Ricerca IP - Tracciamento Geografico degli Indirizzi IP",
    intro: {
      title: "Cos'è uno strumento di ricerca IP e a cosa serve?",
      p1: "Il <b>strumento di ricerca IP</b> è un'utilità essenziale che permette di scoprire dettagli su qualsiasi indirizzo IP su Internet. Il nostro strumento fornisce un'analisi completa, includendo informazioni geografiche (paese, regione, città), dettagli di rete (ISP, organizzazione) e informazioni di sicurezza. Per amministratori di rete, professionisti della sicurezza informatica e utenti Internet generici, la ricerca IP è cruciale per identificare e risolvere vari problemi di rete.",
      p2: "Effettuare un <b>tracciamento geografico preciso degli IP</b> ha numerose applicazioni pratiche in diversi campi. Dalla personalizzazione dei contenuti al rilevamento di frodi, le informazioni IP alimentano molti sistemi online critici. Il nostro strumento utilizza multiple banche dati affidabili per fornire risultati precisi sia per indirizzi IPv4 che IPv6, aiutandoti a capire accuratamente l'origine e la destinazione delle comunicazioni digitali.",
      p3: "Con la crescente attenzione alla <b>privacy e sicurezza online</b>, avere accesso a un servizio di ricerca IP affidabile è diventato più importante che mai. Che tu stia risolvendo problemi di rete, verificando la posizione di un utente o investigando attività sospette, il nostro strumento completo di ricerca IP fornisce le informazioni necessarie in un formato intuitivo e facile da comprendere."
    },
    useCases: {
      title: "Applicazioni pratiche della ricerca IP",
      case1: "<b>Investigazioni di sicurezza informatica</b>: I team di sicurezza utilizzano la ricerca IP per investigare tentativi di accesso sospetti, identificare potenziali minacce e tracciare l'origine di attività malevole. Quando nei log del server appare traffico sospetto, la ricerca IP può determinare rapidamente se proviene da aree ad alto rischio note o da reti associate ad attività malevole.",
      case2: "<b>Localizzazione di contenuti e geolocalizzazione</b>: Le aziende online si affidano a un preciso tracciamento geografico degli IP per fornire contenuti regionali, implementare restrizioni basate sulla posizione e personalizzare l'esperienza utente. Questo assicura che i clienti ricevano la lingua, valuta e contenuti appropriati in base alla loro posizione geografica.",
      case3: "<b>Risoluzione di problemi di rete</b>: I professionisti IT usano spesso strumenti di ricerca IP per diagnosticare problemi di connessione, verificare configurazioni di routing e identificare colli di bottiglia nella rete. Quando un utente segnala problemi di connessione, controllare il percorso geografico del traffico di rete può aiutare a determinare dove si verificano latenze o guasti.",
      case4: "<b>Misure antifrode</b>: Istituzioni finanziarie e piattaforme e-commerce utilizzano dati IP per rilevare potenziali frodi identificando discrepanze tra la posizione dichiarata dall'utente e la posizione effettiva del suo IP. Questo aiuta a prevenire transazioni non autorizzate e furti di account.",
      case5: "<b>Conformità e restrizioni geograficas</b>: Molti servizi devono limitare l'accesso basandosi sulla posizione a causa di accordi di licenza o requisiti legali. La ricerca IP fornisce i dati necessari per implementare queste restrizioni efficacemente, minimizzando al contempo i falsi positivi."
    },
    tutorial: {
      title: "Come usare il nostro strumento di ricerca IP",
      intro: "Il nostro strumento di ricerca IP è progettato per essere intuitivo e potente. Segui questi semplici passaggi per ottenere informazioni complete su qualsiasi indirizzo IP:",
      step1: {
        title: "Passo 1: Inserisci l'indirizzo IP o nome host",
        description: "Inizia inserendo un indirizzo IP (es. 8.8.8.8) o un nome host (es. google.com) nel campo di input. Se vuoi controllare il tuo indirizzo IP, clicca semplicemente il pulsante \"Usa il mio IP\" e il nostro strumento rileverà e inserirà automaticamente il tuo attuale indirizzo IP pubblico."
      },
      step2: {
        title: "Passo 2: Configura le opzioni di ricerca",
        description: "Personalizza la ricerca selezionando le informazioni che desideri ottenere. Puoi scegliere di includere dati geografici, informazioni ASN, domini associati e contatti per abusi. Per la maggior parte degli utenti, raccomandiamo di mantenere tutte le opzioni attivate per ottenere i risultati più completi. Se sei interessato solo a informazioni specifiche, puoi deselezionare le altre opzioni per semplificare i risultati."
      },
      step3: {
        title: "Passo 3: Avvia la ricerca",
        description: "Clicca il pulsante \"Cerca IP\" per avviare il processo di ricerca. Il nostro strumento contatterà quindi multiple banche dati IP affidabili per raccogliere le informazioni più accurate e aggiornate disponibili. Questo di solito richiede pochi secondi, ma può variare in base alla velocità della tua connessione e al carico corrente sui nostri server."
      },
      step4: {
        title: "Passo 4: Analizza i risultati",
        description: "Esamina le informazioni dettagliate mostrate nella sezione risultati. I dati sono organizzati in categorie logiche per una facile navigazione: informazioni generali (tipo IP, nome host), posizione (paese, città, coordinate), rete (ISP, organizzazione, ASN) e informazioni di sicurezza (rilevamento minacce, stato proxy/VPN). Puoi salvare tutti i risultati usando il pulsante \"Copia tutte le informazioni\" o esportarli per ulteriori analisi."
      }
    },
    ipTypes: {
      title: "Comprendere i diversi tipi di indirizzi IP",
      intro: "Gli indirizzi IP hanno diversi tipi e formati, ognuno con uno scopo specifico nelle comunicazioni di rete. Ecco i principali tipi di indirizzi IP che dovresti conoscere:",
      public: {
        title: "Indirizzi IP pubblici",
        description: "<b>Gli indirizzi IP pubblici</b> sono assegnati dai provider di servizi Internet (ISP) e sono instradabili globalmente, utilizzati per identificare la tua rete su Internet. Questi indirizzi sono unici in tutto Internet e permettono a sistemi esterni di comunicare con la tua rete. Quando i siti web tracciano visitatori o i servizi implementano restrizioni geografiche, utilizzano indirizzi IP pubblici. Il nostro strumento di ricerca IP fornisce principalmente dettagli per IP pubblici, poiché questi contengono informazioni geografiche e di rete significative."
      },
      private: {
        title: "Indirizzi IP privati",
        description: "<b>Gli indirizzi IP privati</b> sono usati all'interno di reti locali e seguono intervalli riservati specifici (come 192.168.x.x, 10.x.x.x o 172.16.x.x). Questi indirizzi non sono instradabili su Internet e servono a identificare dispositivi all'interno di reti domestiche o aziendali. Quando hai più dispositivi connessi al Wi-Fi di casa, ogni dispositivo ottiene un indirizzo IP privato mentre condividono un singolo IP pubblico fornito dall'ISP. Il nostro strumento indicherà se un indirizzo è privato, ma il tracciamento geografico dettagliato non è applicabile agli IP privati."
      },
      ipv4: {
        title: "Indirizzi IPv4",
        description: "<b>Gli indirizzi IPv4</b> sono il formato originale degli indirizzi IP, composti da quattro numeri separati da punti (es. 192.0.2.1), ciascuno compreso tra 0 e 255. Con circa 4,3 miliardi di indirizzi possibili, IPv4 rimane il protocollo più utilizzato. Tuttavia, con la crescita esplosiva dei dispositivi connessi a Internet, gli indirizzi IPv4 sono diventati scarsi, portando allo sviluppo di IPv6. Il nostro strumento fornisce informazioni complete per indirizzi IPv4, inclusa la precisa posizione geografica e dettagli di rete."
      },
      ipv6: {
        title: "Indirizzi IPv6",
        description: "<b>Gli indirizzi IPv6</b> rappresentano la prossima generazione di indirizzamento IP, utilizzando uno spazio di indirizzi molto più ampio, con un formato di otto gruppi di cifre esadecimali separati da due punti (es. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Con 340 trilioni di trilioni di trilioni di indirizzi unici disponibili, IPv6 garantisce che non esauriremo gli indirizzi nel futuro prevedibile. Il nostro strumento supporta completamente le ricerche IPv6, fornendo gli stessi dettagli completi degli indirizzi IPv4, aiutandoti a prepararti per la continua transizione a questo standard più recente."
      }
    },
    faq: {
      title: "Domande frequenti sulla ricerca IP",
      q1: "Quanto è accurata la geolocalizzazione basata su IP?",
      a1: "L'accuratezza della geolocalizzazione basata su IP dipende da diversi fattori. Per il <b>rilevamento a livello di paese</b>, l'accuratezza è tipicamente molto alta (95-99%). Tuttavia, per la precisione a livello di città, l'accuratezza varia tra il 50-80% a seconda della regione e dei dati disponibili. La geolocalizzazione è generalmente più accurata nelle aree urbane densamente popolate e nei paesi con infrastrutture Internet ben sviluppate.<br><br>Fattori che influenzano l'accuratezza:<br>• Riassegnazione di indirizzi IP da parte degli ISP<br>• Uso di proxy, VPN o reti Tor<br>• Reti aziendali con uscite Internet centralizzate<br>• Reti mobili dove un indirizzo IP può coprire una vasta area geografica<br><br>Il nostro strumento combina multiple banche dati affidabili per fornire risultati il più accurati possibile, ma è importante comprendere che la geolocalizzazione IP dovrebbe essere considerata un'approssimazione piuttosto che una localizzazione precisa come il GPS. Per applicazioni che richiedono alta precisione, la geolocalizzazione IP dovrebbe essere combinata con altri metodi di verifica.",
      
      q2: "La ricerca IP può rilevare VPN e proxy?",
      a2: "Il nostro strumento di ricerca IP può rilevare con una ragionevole accuratezza molti <b>servizi VPN, proxy e di anonimizzazione</b>. Il rilevamento avviene confrontando l'indirizzo IP con banche dati di server VPN noti, servizi proxy e nodi di uscita Tor. Inoltre, lo strumento analizza vari indicatori tecnici che suggeriscono l'uso di proxy, come pattern di porte, fingerprint di hosting e caratteristiche di rete.<br><br>Tuttavia, è importante comprenderne i limiti:<br>• Nuovi o piccoli servizi VPN potrebbero non essere ancora inclusi nei database di rilevamento<br>• Proxy privati o personalizzati possono essere più difficili da rilevare<br>• Alcuni servizi VPN di alta qualità cercano attivamente di apparire come connessioni normali<br>• L'accuratezza del rilevamento varia per regione e provider<br><br>Quando il nostro strumento identifica che una connessione potrebbe passare attraverso VPN o proxy, lo indica nella sezione informazioni di sicurezza con un punteggio di confidenza. Questo è particolarmente utile per applicazioni di sicurezza, reti di distribuzione di contenuti e servizi che devono applicare restrizioni geografiche.",
      
      q3: "È legale ricercare l'IP di qualcun altro?",
      a3: "Nella maggior parte delle giurisdizioni, ricercare informazioni pubblicamente disponibili su un indirizzo IP è generalmente <b>legale</b>, simile a ricercare il proprietario di un dominio o un numero di telefono in un elenco pubblico. Il nostro strumento accede solo a informazioni disponibili pubblicamente attraverso banche dati legittime.<br><br>Tuttavia, ci sono importanti considerazioni etiche e legali:<br><br>• Queste informazioni dovrebbero essere usate per scopi legittimi come risoluzione di problemi di rete, analisi di sicurezza o prevenzione frodi<br>• La sola ricerca IP non fornisce informazioni di identificazione personale associate a quell'indirizzo<br>• Usare dati IP per molestie, stalking o altre attività malevole è illegale nella maggior parte dei luoghi<br>• Alcune giurisdizioni hanno regolamenti specifici sui dati degli indirizzi IP come parte di leggi più ampie sulla privacy (come il GDPR in Europa)<br><br>Per applicazioni commerciali, è consigliabile includere informazioni sulla raccolta di dati IP nella tua politica sulla privacy e assicurarti di avere una base legale appropriata per elaborare queste informazioni. Il nostro strumento è progettato per scenari di uso legittimo e include limiti di frequenza per prevenire pattern di abuso.",
      
      q4: "Perché un indirizzo IP potrebbe mostrare una posizione sbagliata?",
      a4: "Ci sono diverse ragioni per cui un indirizzo IP potrebbe mostrare una posizione inaspettata o <b>errata</b>:<br><br>1. <b>Architettura di rete dell'ISP</b>: Il tuo provider di servizi Internet potrebbe instradare il traffico attraverso punti centrali che potrebbero trovarsi in città o paesi diversi dalla tua effettiva posizione.<br><br>2. <b>Reti aziendali</b>: Le aziende spesso centralizzano il traffico Internet attraverso la sede principale o specifici data center, facendo apparire tutte le connessioni dei dipendenti come provenienti da quella posizione, indipendentemente da dove lavorino effettivamente.<br><br>3. <b>VPN e proxy</b>: Quando usi questi servizi, la tua posizione apparente corrisponderà alla posizione del server di uscita, non alla tua posizione fisica.<br><br>4. <b>Reti mobili</b>: Gli indirizzi IP cellulari sono tipicamente mappati a gateway centrali che possono essere lontani dalla posizione effettiva dell'utente.<br><br>5. <b>Limitazioni dei database</b>: I database di geolocalizzazione IP sono aggiornati regolarmente ma possono contenere informazioni obsolete, specialmente quando gli ISP riassegnano blocchi di IP.<br><br>6. <b>Macchine virtuali e servizi cloud</b>: Questi tipicamente usano indirizzi IP registrati alla posizione del provider cloud, non dell'utente.<br><br>Per ottenere i risultati più accurati, il nostro strumento incrocia i dati di multiple banche dati IP, ma a causa delle limitazioni intrinseche della geolocalizzazione basata su IP, alcune discrepanze possono comunque verificarsi.",
      
      q5: "Con quale frequenza cambia la posizione di un indirizzo IP?",
      a5: "La <b>frequenza di cambiamento della posizione IP</b> dipende da diversi fattori:<br><br>1. <b>IP dinamici vs statici</b>: La maggior parte delle connessioni residenziali usa indirizzi IP dinamici che possono cambiare periodicamente - da giornalmente a mensilmente, o quando il router si riconnette. Le connessioni commerciali e server usano tipicamente IP statici che cambiano raramente.<br><br>2. <b>Politiche degli ISP</b>: Diversi provider di servizi Internet hanno politiche diverse sulla rotazione e riassegnazione degli IP. Alcuni ISP cambiano frequentemente gli IP dei clienti, mentre altri possono mantenerli relativamente stabili per mesi.<br><br>3. <b>Riassegnazione di blocchi IP</b>: Occasionalmente, grandi blocchi di indirizzi IP vengono riassegnati tra organizzazioni o regioni, causando cambiamenti più significativi nella posizione.<br><br>4. <b>Connessioni mobili</b>: Gli indirizzi IP dei dispositivi mobili possono cambiare frequentemente, specialmente quando passano tra reti cellulari e Wi-Fi, o si spostano tra diverse torri di telefonia mobile.<br><br>A causa di questi fattori, i dati di geolocalizzazione IP dovrebbero essere considerati un'istantanea potenzialmente obsoleta. Per applicazioni che richiedono verifica continua della posizione, si raccomanda di ricontrollare regolarmente le informazioni IP. Le nostre fonti di dati sono aggiornate frequentemente per adattarsi a questi cambiamenti, ma c'è sempre la possibilità di incontrare indirizzi riassegnati di recente."
    },
    relatedTools: {
      title: "Esplora strumenti di rete correlati",
      description: "Migliora le tue analisi di rete con questi strumenti complementari:",
      tool1: {
        name: "Controllore sicurezza header HTTP",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "Analizza e valuta la sicurezza degli header di risposta HTTP."
      },
      tool2: {
        name: "Editor header richieste",
        url: "https://www.ufreetools.com/tool/request-header-editor",
        description: "Crea, modifica e testa header di richiesta HTTP."
      },
      tool3: {
        name: "Rilevatore proxy HTTP",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "Rileva se la tua connessione usa un proxy HTTP e analizza gli header relativi al proxy per verifiche di sicurezza."
      },
      tool4: {
        name: "Parser parametri URL",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "Analizza, interpreta e manipola parametri URL e stringhe di query."
      },
    },
    resources: {
      title: "Risorse autorevoli sull'indirizzamento IP",
      resource1: {
        name: "IANA (Internet Assigned Numbers Authority)",
        url: "https://www.iana.org/numbers",
        description: "Coordinatore ufficiale globale dei sistemi di indirizzamento IP e assegnazione ASN, fornisce informazioni autorevoli sull'assegnazione degli indirizzi."
      },
      resource2: {
        name: "Registri Internet Regionali (RIR)",
        url: "https://www.nro.net/about/rirs",
        description: "Organizzazioni responsabili dell'assegnazione di blocchi di indirizzi IP in specifiche regioni geografiche, mantengono database di registrazione ufficiali."
      },
      resource3: {
        name: "RFC 8890 - Internet è per gli utenti finali",
        url: "https://datatracker.ietf.org/doc/html/rfc8890",
        description: "Un importante documento IETF che discute i principi di indirizzamento Internet e la loro relazione con privacy e diritti degli utenti finali."
      }
    }
  }
}