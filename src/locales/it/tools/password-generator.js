export default {
  name: 'Generatore di Password',
  description: 'Genera password sicure e casuali con opzioni personalizzabili',
  options: {
    length: 'Lunghezza password',
    quantity: 'Quantità password',
    includeLowercase: 'Lettere minuscole (a-z)',
    includeUppercase: 'Lettere maiuscole (A-Z)',
    includeNumbers: 'Numeri (0-9)',
    includeSymbols: 'Simboli (!@#$%)',
    excludeSimilar: 'Escludi caratteri simili (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Escludi simboli ambigui ({}<>[]()\'"`\\)',
    requireAll: 'Richiedi tutti i tipi di caratteri',
    noConsecutive: 'Nessun carattere consecutivo simile',
    advancedOptions: 'Opzioni avanzate',
    characterTypes: 'Tipi di caratteri'
  },
  presets: {
    standard: 'Standard',
    strong: 'Forte',
    memorable: 'Memorabile',
    pin: 'PIN',
    pronounceable: 'Pronunciabile',
    custom: 'Personalizzato',
    easyToRemember: 'Facile da ricordare',
    balanced: 'Bilanciato',
    secure: 'Sicuro'
  },
  strength: {
    title: 'Forza della password',
    veryWeak: 'Molto debole',
    weak: 'Debole', 
    medium: 'Medio',
    strong: 'Forte',
    veryStrong: 'Molto forte',
    unknown: 'Sconosciuto'
  },
  actions: {
    generate: 'Genera password',
    regenerate: 'Rigenera',
    copy: 'Copia',
    copyAll: 'Copia tutto',
    clear: 'Pulisci',
    expand: 'Espandi',
    collapse: 'Riduci'
  },
  messages: {
    copied: 'Copiato negli appunti!',
    allCopied: 'Tutte le password copiate negli appunti!',
    generated: 'Password generate con successo',
    invalidOptions: 'Seleziona almeno un tipo di carattere',
    tooManyPasswords: 'Il numero massimo di password è 100',
    clickToGenerate: 'Clicca il pulsante sopra per generare password'
  },
  errors: {
    copyFailed: 'Impossibile copiare la password: ',
    copyFailedManual: 'Copia fallita, copia manualmente'
  },
  results: {
    title: 'Password generate'
  },
  units: {
    passwords: 'password'
  },
  tips: {
    title: 'Suggerimenti per la sicurezza',
    useLength: 'Usa password abbastanza lunghe (almeno 12 caratteri) per maggiore sicurezza',
    useDifferent: 'Usa password diverse per ogni sito o servizio',
    changeRegularly: 'Cambia regolarmente le password per account importanti',
    useManager: 'Considera l\'uso di un gestore di password per memorizzare password complesse',
    use2FA: 'Abilita l\'autenticazione a due fattori per una protezione aggiuntiva'
  },
  article: {
    title: "Guida allo strumento Generatore di Password: crea password forti e sicure",
    features: {
      title: "Scopri lo strumento Generatore di Password",
      description: "Il nostro <strong>Generatore di Password</strong> è uno strumento di sicurezza avanzato progettato per creare <strong>password</strong> casuali e altamente sicure per proteggere i tuoi account da accessi non autorizzati. A differenza di <strong>password</strong> semplici e facili da indovinare, il nostro strumento crea combinazioni complesse di caratteri estremamente difficili da violare con attacchi brute force o tentativi di hacking basati su dizionario.<br><br>Questo <strong>Generatore di Password</strong> ti permette di personalizzare lunghezza, tipi di caratteri e livello di complessità delle <strong>password</strong>, assicurando che soddisfino i requisiti di sicurezza specifici di diverse piattaforme e servizi.",
      useCases: {
        title: "Scenari comuni per il Generatore di Password",
        items: [
          "Creare password forti per nuovi account online (email, social media, banche)",
          "Generare password sicure per reti Wi-Fi e router",
          "Sviluppare password complesse per sistemi aziendali e account professionali",
          "Creare password sicure per file e cartelle crittografati",
          "Generare password diverse per più account, evitando il riutilizzo",
          "Creare una password principale forte per gestori di password",
          "Generare chiavi API e token di accesso sicuri per sviluppatori"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sul Generatore di Password",
      items: [
        {
          question: "Quanto sono sicure le password generate?",
          answer: "Con le impostazioni consigliate, le password generate sono estremamente sicure. Una password forte (oltre 16 caratteri con mix di tipi di caratteri) richiederebbe milioni di anni per essere violata con le tecnologie attuali. Il nostro generatore usa una randomizzazione sicura a livello crittografico per garantire imprevedibilità."
        },
        {
          question: "Cosa rende una password forte?",
          answer: "Una password forte ha diverse caratteristiche chiave: lunghezza adeguata (almeno 12-16 caratteri), complessità (mix di maiuscole, minuscole, numeri e simboli), casualità (nessuno schema prevedibile) e unicità (non usata altrove). Il nostro generatore crea password che soddisfano tutti questi criteri."
        },
        {
          question: "Con quale frequenza dovrei cambiare le password?",
          answer: "Gli esperti di sicurezza ora consigliano di cambiare le password solo quando si sospetta una violazione, non su base regolare. Tuttavia, per account critici (banche, email), cambiare la password ogni 3-6 mesi rimane una buona pratica, usando sempre il generatore di password."
        },
        {
          question: "Posso generare più password contemporaneamente?",
          answer: "Sì, il nostro generatore permette di creare più password sicure simultaneamente. È particolarmente utile quando si configurano più nuovi account o si aggiornano più password esistenti durante un audit di sicurezza."
        },
        {
          question: "Come posso ricordare password complesse?",
          answer: "Il metodo migliore è usare un gestore di password per memorizzare in sicurezza le password generate. In alternativa, per password critiche da ricordare, considera il preset 'memorabile' che crea password bilanciando sicurezza e facilità di memorizzazione."
        }
      ]
    },
    guide: {
      title: "Come usare lo strumento Generatore di Password",
      steps: [
        "Usa il cursore per selezionare la lunghezza desiderata (consigliamo almeno 16 caratteri per massima sicurezza)",
        "Scegli un preset di forza password (facile da ricordare, standard o forte) o seleziona 'Personalizzato' per configurare manualmente le opzioni",
        "Per impostazioni personalizzate, seleziona i tipi di caratteri da includere (maiuscole, minuscole, numeri, simboli)",
        "Opzionalmente espandi le opzioni avanzate per escludere caratteri simili o simboli ambigui",
        "Seleziona il numero di password da generare (1, 5, 10, 20 o 50)",
        "Clicca 'Genera password' per creare le tue password sicure",
        "Per ogni password generata, puoi vedere la valutazione della forza, da 'Molto debole' a 'Molto forte'",
        "Clicca l'icona di copia accanto a qualsiasi password per copiarla negli appunti, o usa 'Copia tutto' per copiare tutte le password",
        "Archivia le password generate in modo sicuro in un gestore di password o altro luogo sicuro"
      ]
    },
    conclusion: "L'uso regolare di questo strumento migliorerà significativamente la tua sicurezza online. Creando password uniche e forti per ogni account, stai adottando la misura più importante per proteggere la tua identità digitale e le informazioni personali dalle minacce informatiche. Ricorda che anche le password più forti dovrebbero essere abbinate a misure di sicurezza aggiuntive come l'autenticazione a due fattori, quando possibile."
  }
}