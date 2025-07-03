export default {
  name: 'Controllore della Forza delle Password',
  description: 'Analizza e valuta la sicurezza delle password con indicatori dettagliati',
  input: {
    title: 'Inserisci la password da analizzare',
    placeholder: 'Inserisci qui la password...',
    showPassword: 'Mostra password',
    hidePassword: 'Nascondi password',
    clear: 'Cancella',
    generate: 'Genera password',
    check: 'Controlla sicurezza',
    empty: 'Inserisci una password per vedere la valutazione',
    disclaimer: 'Inserisci qualsiasi password per valutarne la sicurezza. La tua password non verrà memorizzata o inviata a nessun server.'
  },
  results: {
    title: 'Valutazione della Password',
    strength: 'Sicurezza',
    score: 'Punteggio',
    entropy: 'Entropia',
    crackTime: 'Tempo stimato per violarla',
    very_weak: 'Molto debole',
    weak: 'Debole',
    fair: 'Discreta',
    good: 'Buona',
    strong: 'Forte',
    very_strong: 'Molto forte',
    feedback: 'Feedback',
    suggestions: 'Suggerimenti per migliorare',
    warnings: 'Problemi rilevati',
    noWarnings: 'Nessun problema rilevato',
    noSuggestions: 'Nessun suggerimento disponibile'
  },
  details: {
    title: 'Analisi Dettagliata',
    length: 'Lunghezza password',
    charset: 'Varietà di caratteri',
    patterns: 'Pattern utilizzati',
    uniqueChars: 'Caratteri unici',
    uppercase: 'Lettere maiuscole',
    lowercase: 'Lettere minuscole',
    numbers: 'Numeri',
    symbols: 'Simboli speciali',
    repetitions: 'Ripetizioni',
    sequences: 'Sequenze',
    dictionary: 'Parole da dizionario',
    leaked: 'Già compromessa',
    reused: 'Pattern riutilizzati'
  },
  patterns: {
    dictionary: 'Parola da dizionario',
    sequence: 'Caratteri sequenziali',
    repeat: 'Caratteri ripetuti',
    spatial: 'Pattern spaziali (tastiera)',
    date: 'Pattern di date',
    year: 'Pattern di anni',
    common: 'Password comuni',
    name: 'Pattern di nomi',
    reversal: 'Parole al contrario',
    leet: 'Sostituzioni leet',
    predictable: 'Pattern prevedibili'
  },
  crackTimes: {
    instantly: 'Immediatamente',
    seconds: 'In pochi secondi',
    minutes: 'In pochi minuti',
    hours: 'In poche ore',
    days: 'In pochi giorni',
    months: 'In pochi mesi',
    years: 'In pochi anni',
    centuries: 'In secoli',
    forever: 'Praticamente mai'
  },
  suggestions: {
    addWords: 'Aggiungi più parole o caratteri',
    addSymbols: 'Includi simboli',
    addNumbers: 'Includi numeri',
    upperLower: 'Mischia maiuscole e minuscole',
    avoidPatterns: 'Evita sequenze di tasti o caratteri ripetuti',
    avoidCommon: 'Evita password basate su dizionario o comuni, anche con sostituzioni (es. "e" con "3")',
    avoidPersonal: 'Evita informazioni personali',
    avoidDictionary: 'Evita parole da dizionario',
    usePassphrase: 'Considera combinazioni di parole non correlate o acronimi per password più sicure e memorabili',
    increaseLonger: 'Aumenta la lunghezza della password',
    avoidSequence: 'Evita sequenze',
    avoidRepeated: 'Evita caratteri ripetuti',
    avoidDates: 'Evita date e anni',
    addMoreChars: 'Aumenta la password ad almeno 12 caratteri - ogni carattere aggiuntivo aumenta esponenzialmente la difficoltà di violazione',
    addTypes: 'Aggiungi {types} per aumentare la complessità',
    useManager: 'Usa un gestore di password per generare e gestire password complesse, diverse per ogni sito'
  },
  generator: {
    title: 'Generatore di Password',
    length: 'Lunghezza',
    options: 'Opzioni',
    uppercase: 'Includi maiuscole',
    lowercase: 'Includi minuscole',
    numbers: 'Includi numeri',
    symbols: 'Includi simboli',
    excludeSimilar: 'Escludi caratteri simili',
    excludeAmbiguous: 'Escludi caratteri ambigui',
    generate: 'Genera password',
    passphrase: 'Genera passphrase',
    wordCount: 'Numero di parole',
    separator: 'Separatore tra parole',
    capitalize: 'Maiuscola iniziale',
    includeNumber: 'Includi numero',
    includeSymbol: 'Includi simbolo'
  },
  common: {
    copy: 'Copia negli appunti',
    save: 'Salva nella cronologia',
    clear: 'Cancella',
    refresh: 'Aggiorna',
    copied: 'Copiato negli appunti',
    saved: 'Salvato nella cronologia',
    history: 'Cronologia',
    noHistory: 'Nessuna cronologia disponibile',
    common: 'Comuni'
  },
  breach: {
    title: 'Controllo Violazioni Dati',
    description: 'Verifica se la tua password è comparsa in violazioni dati note',
    disclaimer: 'La tua password non viene mai inviata in rete. Viene controllato solo un hash parziale.',
    checkButton: 'Controlla violazioni',
    safe: 'Non trovata in violazioni note',
    found: 'Trovata in {count} violazioni dati!',
    warning: 'Questa password è stata esposta in violazioni dati e non dovrebbe più essere usata.',
    checking: 'Controllo violazioni in corso...'
  },
  settings: {
    title: 'Impostazioni',
    algorithm: 'Algoritmo di sicurezza',
    history: 'Salva cronologia',
    clearHistory: 'Cancella cronologia',
    breachCheck: 'Controllo violazioni',
    timeout: 'Cancella dopo timeout',
    timeoutDuration: 'Durata timeout (secondi)',
    clipboard: 'Cancella dagli appunti dopo copia',
    language: 'Lingua'
  },
  score: {
    none: 'Nessun punteggio'
  },
  descriptions: {
    none: 'Impossibile valutare la password',
    veryWeak: 'Questa password è molto facile da indovinare o violare, estremamente insicura',
    weak: 'Questa password ha bassa sicurezza e potrebbe essere violata facilmente',
    fair: 'Questa password ha una discreta sicurezza ma può essere migliorata',
    good: 'Questa password è abbastanza sicura e difficile da violare',
    veryStrong: 'Questa password è molto sicura e praticamente impossibile da violare'
  },
  length: {
    none: 'Nessuna',
    tooShort: 'Troppo corta',
    acceptable: 'Accettabile',
    good: 'Buona',
    excellent: 'Eccellente'
  },
  lengthMessage: {
    none: 'Nessuna password inserita',
    needMore: 'Sono necessari almeno {min} caratteri',
    better: '{min} o più caratteri sarebbero più sicuri',
    good: 'Ottimo! Le password lunghe sono più difficili da violare',
    excellent: 'Lunghezza eccellente!'
  },
  complexity: {
    none: 'Nessuna',
    veryLow: 'Molto bassa',
    fair: 'Discreta',
    good: 'Buona',
    excellent: 'Eccellente'
  },
  issues: {
    tooShort: 'Password troppo corta (meno di 8 caratteri)',
    noUppercase: 'Nessuna lettera maiuscola',
    noLowercase: 'Nessuna lettera minuscola',
    noNumbers: 'Nessun numero',
    noSymbols: 'Nessun simbolo speciale',
    hasSequence: 'Contiene sequenze comuni da tastiera (es. "qwerty" o "123456")',
    hasRepeated: 'Contiene caratteri ripetuti (es. "aaa" o "111")',
    commonPassword: 'Usa una password comune o facilmente indovinabile'
  },
  characters: 'caratteri',
  tips: {
    title: 'Consigli per password sicure',
    length: 'Usa password di almeno 12 caratteri',
    mix: 'Mischia maiuscole, minuscole, numeri e simboli',
    avoid: 'Evita parole comuni, frasi o informazioni personali',
    unique: 'Non usare la stessa password su più siti',
    manager: 'Considera l\'uso di un gestore password per generare e memorizzare password complesse'
  },
  article: {
    title: "Controllore della Forza delle Password: Valuta e Migliora la tua Sicurezza Online",
    features: {
      title: "Comprendi la valutazione della sicurezza delle password",
      description: "Questo <strong>controllore della forza delle password</strong> è uno strumento completo di <strong>valutazione della sicurezza</strong> progettato per analizzare e valutare l'efficacia della tua password contro potenziali minacce. Questo <strong>analizzatore di password</strong> esamina molteplici fattori che determinano la sicurezza di una password, tra cui lunghezza, varietà di caratteri, pattern potenziali e somiglianze con password comuni.<br><br>Il nostro <strong>test di sicurezza delle password</strong> fornisce feedback dettagliati sui punti di forza e di debolezza della tua password, con un'analisi completa di ciò che la rende sicura o vulnerabile. Lo strumento genera un punteggio di sicurezza e una valutazione a colori, oltre a suggerimenti specifici per migliorare in base alle caratteristiche della tua password. Come <strong>rilevatore di vulnerabilità delle password</strong>, aiuta a identificare potenziali problemi di sicurezza senza mai memorizzare o trasmettere la tua password, garantendo la massima privacy durante il processo di valutazione.",
      useCases: {
        title: "Scenari pratici per il test della sicurezza delle password",
        items: [
          "<strong>Creazione di account</strong>: Quando crei nuovi account online, usa il <strong>controllore di sicurezza delle password</strong> per assicurarti che le credenziali che crei soddisfino gli standard di sicurezza moderni prima di completare la registrazione",
          "<strong>Audit di sicurezza</strong>: Rivedi e testa periodicamente le tue password esistenti su diversi account, identificando e dando priorità a quelle che necessitano di essere rafforzate come parte della tua <strong>valutazione personale della sicurezza informatica</strong>",
          "<strong>Sviluppo di politiche per le password</strong>: Le organizzazioni possono usare questo strumento per mostrare ai dipendenti linee guida efficaci per le password e testare la conformità agli standard di sicurezza come parte dei loro <strong>protocolli di sicurezza informatica</strong>",
          "<strong>Dimostrazioni educative</strong>: Insegnanti, genitori e professionisti della sicurezza possono usare il feedback visivo per mostrare ad altri le differenze concrete tra password deboli e forti per la <strong>formazione sulla consapevolezza della sicurezza</strong>",
          "<strong>Verifica dopo violazioni di dati</strong>: Dopo notizie di violazioni dei dati, verifica rapidamente se le tue password attuali soddisfano le migliori pratiche di sicurezza o necessitano di aggiornamenti immediati come <strong>misura di sicurezza preventiva</strong>",
          "<strong>Transizione a gestori di password</strong>: Quando passi a un gestore di password, valuta le tue password esistenti per determinare quali dovrebbero essere rigenerate con alternative più forti durante il processo di <strong>aggiornamento della sicurezza digitale</strong>"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sulla sicurezza delle password",
      items: [
        {
          question: "La mia password è al sicuro quando uso questo strumento?",
          answer: "Sì, la tua password è completamente al sicuro quando usi il nostro analizzatore di sicurezza delle password. Lo strumento elabora la tua password interamente all'interno del tuo browser - non trasmette mai la tua password su Internet né la memorizza su alcun server. Questo processo lato client significa che la tua password non lascia mai il tuo dispositivo durante il controllo della sicurezza. Lo strumento utilizza algoritmi JavaScript locali per valutare la complessità, identificare pattern e calcolare il punteggio senza alcuna elaborazione esterna. Questo approccio di controllo delle password a trasmissione zero offre la massima sicurezza fornendo comunque una valutazione completa della forza della password. Puoi verificare questo comportamento usando lo strumento senza connessione Internet, poiché continuerà a funzionare normalmente."
        },
        {
          question: "Cosa rende una password veramente forte?",
          answer: "Una password veramente forte combina molteplici fattori di sicurezza valutati dal nostro test di sicurezza delle password. Gli elementi più importanti includono: lunghezza sufficiente (almeno 12-14 caratteri), complessità attraverso varietà di caratteri (maiuscole, minuscole, numeri e simboli speciali), imprevedibilità (evitando parole o frasi comuni o pattern), unicità (non riutilizzata su più siti) e resistenza ad attacchi automatizzati. Le password più forti evitano informazioni personali, parole da dizionario e sostituzioni prevedibili (come '3' al posto di 'e'). Il nostro strumento di valutazione delle password consiglia password generate casualmente o passphrase che combinano più parole non correlate con numeri e simboli. Ricorda che la lunghezza contribuisce generalmente più della sola complessità alla forza della password."
        },
        {
          question: "Perché lo strumento segnala come debole una password che sembra complessa?",
          answer: "Il rilevatore di vulnerabilità delle password potrebbe segnalare come debole una password apparentemente complessa a causa di diversi fattori sottili che influenzano la sicurezza. Problemi comuni includono: affidarsi a pattern prevedibili (come sequenze da tastiera 'qwerty' o caratteri ripetuti), usare varianti di password note presenti in database di violazioni, includere informazioni personali facilmente indovinabili o seguire comuni pattern di sostituzione mirati dagli strumenti per violare password (come 'pssw0rd'). L'analisi moderna delle password va oltre i semplici tipi di caratteri, valutando fattori come entropia (casualità), attacchi basati su dizionario e riconoscimento di pattern considerati dagli strumenti avanzati per violare password. Anche password con simboli speciali possono essere vulnerabili se seguono pattern prevedibili."
        },
        {
          question: "Con quale frequenza dovrei controllare e aggiornare le mie password?",
          answer: "Dovresti usare lo strumento di valutazione della forza delle password per controllare le tue password critiche almeno ogni 3-6 mesi e aggiornarle di conseguenza. Inoltre, si consiglia una verifica e modifica immediata della password in circostanze specifiche: dopo notizie di violazioni di dati che interessano servizi che usi, quando condividi una password (dopodiché serve una nuova password), se hai effettuato l'accesso su dispositivi pubblici o potenzialmente compromessi, se sospetti accessi non autorizzati a qualsiasi account o in caso di cambiamenti importanti nella vita (nuovo lavoro, trasloco). Implementare un programma di valutazione della sicurezza per diverse categorie di password (finanziarie, email, social media) aiuta a dare priorità ai tuoi account più sensibili. Ricorda che anche la password più forte è inutile se è stata esposta in una violazione di dati."
        },
        {
          question: "Cosa è meglio: una password complessa ma corta o una semplice ma lunga?",
          answer: "Come mostrerà il nostro controllore di sicurezza delle password, una password semplice ma lunga è generalmente più sicura di una complessa ma corta. I benefici di sicurezza offerti dalla lunghezza crescono esponenzialmente e sono più efficaci della sola complessità. Ad esempio, una password di 16 caratteri usando solo minuscole (come 'quattroparoleminuscole') è matematicamente più difficile da violare con metodi brute force di una password di 8 caratteri con vari tipi di caratteri (come 'Ps$w0rd'). Questo perché ogni carattere aggiuntivo moltiplica il numero totale di combinazioni possibili che un hacker deve provare. Tuttavia, l'analisi completa delle password mostra che l'approccio ideale combina una lunghezza significativa (16 o più caratteri) con una moderata complessità (vari tipi di caratteri). Per la massima sicurezza, lo strumento di valutazione delle password consiglia passphrase casuali che combinano più parole non correlate con alcuni numeri o simboli."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo all'uso del Controllore della Forza delle Password",
      steps: [
        "Inserisci la tua password esistente o proposta nel campo di input sicuro. Il design orientato alla privacy dello strumento garantisce che la tua password non venga mai trasmessa o memorizzata durante l'analisi di sicurezza",
        "Esamina il <strong>punteggio di sicurezza</strong> complessivo mostrato sul misuratore a colori, che fornisce un'indicazione visiva del livello di sicurezza della tua password da molto debole (rosso) a molto forte (verde)",
        "Controlla la sezione <strong>analisi dettagliata</strong> per comprendere gli aspetti specifici della forza della tua password che influenzano la valutazione complessiva, inclusa la valutazione della lunghezza e gli indicatori di varietà di caratteri",
        "Presta attenzione a eventuali <strong>problemi rilevati</strong> evidenziati nella sezione avvisi, che identifica vulnerabilità specifiche come pattern comuni, caratteri ripetuti o componenti basate su dizionario",
        "Leggi i <strong>suggerimenti per migliorare</strong> personalizzati in base alle debolezze della tua password, che forniscono consigli pratici specifici su come rafforzare la tua password contro vari metodi di attacco",
        "Applica le modifiche consigliate per creare una password più forte, poi <strong>testa di nuovo</strong> per verificare i miglioramenti e continua a perfezionare finché non raggiungi una valutazione di sicurezza soddisfacente"
      ]
    },
    conclusion: "Il Controllore della Forza delle Password è uno strumento di sicurezza essenziale nell'attuale panorama digitale di violazioni di dati e attacchi alle password in costante aumento. Fornendo un'analisi dettagliata delle vulnerabilità delle password e suggerimenti specifici per migliorare, consente agli utenti di prendere il controllo della propria sicurezza online. Ricorda che password forti rappresentano la tua prima linea di difesa contro accessi non autorizzati - dovrebbero essere uniche per ogni account importante, sufficientemente complesse e aggiornate regolarmente. Per la massima sicurezza, considera l'uso di questo strumento insieme a un gestore di password affidabile che può generare e memorizzare password altamente sicure e uniche per tutti i tuoi account. Prendersi il tempo ora per valutare e rafforzare le tue password può farti evitare gravi problemi in futuro a causa di account compromessi."
  }
}