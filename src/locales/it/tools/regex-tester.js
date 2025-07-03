export default {
  name: 'Tester Espressioni Regolari',
  description: 'Testa e debugga espressioni regolari con evidenziazione in tempo reale e spiegazioni',
  actions: {
    test: 'Testa',
    clear: 'Pulisci',
    showExamples: 'Mostra esempi',
    hideExamples: 'Nascondi esempi',
    copy: 'Copia'
  },
  sections: {
    examples: 'Esempi comuni di regex',
    pattern: 'Pattern regex',
    input: 'Stringa di test',
    results: 'Risultati corrispondenza',
    flags: 'Flag'
  },
  flags: {
    g: 'Corrispondenza globale (g)',
    i: 'Ignora maiuscole/minuscole (i)',
    m: 'Modalità multilinea (m)',
    s: 'Punto corrisponde a tutto (s)',
    u: 'Modalità Unicode (u)',
    y: 'Corrispondenza adesiva (y)'
  },
  errors: {
    emptyRegex: 'Inserisci un\'espressione regolare',
    emptyTestString: 'Inserisci un testo da testare',
    invalidRegex: 'Espressione regolare non valida'
  },
  messages: {
    matchesFound: 'Trovate {count} corrispondenze',
    noMatches: 'Nessuna corrispondenza trovata',
    copied: 'Copiato negli appunti!'
  },
  placeholders: {
    pattern: 'Inserisci il pattern regex',
    testString: 'Inserisci il testo da testare'
  },
  options: {
    flags: 'Flag',
    global: 'Corrispondenza globale (g)',
    caseInsensitive: 'Ignora maiuscole/minuscole (i)',
    multiline: 'Modalità multilinea (m)',
    dotAll: 'Punto corrisponde a tutto (s)',
    unicode: 'Modalità Unicode (u)',
    sticky: 'Corrispondenza adesiva (y)'
  },
  labels: {
    pattern: 'Espressione regolare',
    testString: 'Stringa di test',
    matches: 'Corrispondenze',
    groups: 'Gruppi',
    noMatches: 'Nessuna corrispondenza'
  },
  tips: {
    title: 'Suggerimenti',
    pattern: 'Non includere le barre / nel pattern regex.',
    flags: 'Usa i flag per modificare il comportamento della corrispondenza (g: globale, i: case-insensitive, m: multilinea).',
    examples: 'Clicca "Mostra esempi" per vedere pattern regex comuni.',
    testing: 'Dopo aver inserito pattern e testo, clicca "Testa" per vedere i risultati.'
  },
  article: {
    title: "Tester Regex: Strumento interattivo per pattern matching",
    features: {
      title: "Comprendere le espressioni regolari",
      description: "<strong>Tester Espressioni Regolari</strong> è uno strumento interattivo per sviluppatori, analisti dati e professionisti del testo per creare, testare e debuggareregex. Le regex sono sequenze di caratteri speciali che definiscono pattern di ricerca per matching, estrazione e manipolazione del testo.<br><br>Il nostro <strong>strumento di test regex</strong> fornisce feedback visivo in tempo reale, evidenziando corrispondenze nel testo e mostrando dettagli su gruppi catturati e posizioni. Questo ciclo di feedback immediato aiuta a capire come i pattern interagiscono con diversi input, facilitando l'identificazione e correzione di problemi.",
      useCases: {
        title: "Applicazioni pratiche delle regex",
        items: [
          "<strong>Validazione form</strong>: Sviluppatori web possono usare questo <strong>tester regex</strong> per affinare espressioni che validano email, numeri di telefono, password e altri campi input.",
          
          "<strong>Estrazione dati</strong>: Le regex aiutano ad estrarre informazioni da testo non strutturato. Il nostro <strong>strumento di pattern matching</strong> assiste nell'ideare espressioni per estrarre date, prezzi, codici prodotto da documenti, log o risultati web scraping.",
          
          "<strong>Manipolazione testo</strong>: Editor e sviluppatori possono usare regex per cercare/sostituire pattern in documenti multipli. Il <strong>validatore regex</strong> verifica che i pattern corrispondano solo al contenuto desiderato.",
          
          "<strong>Analisi log</strong>: Amministratori e ingegneri DevOps usano regex per analizzare file di log. Questo <strong>tester</strong> aiuta a costruire pattern che identificano errori, warning o eventi specifici in grandi dataset.",
          
          "<strong>Sviluppo query</strong>: Le regex abilitano ricerche complesse. Il nostro strumento aiuta a testare e ottimizzare pattern per motori di ricerca, editor di codice o query di database.",
          
          "<strong>Apprendimento</strong>: Studenti e professionisti possono usare questo <strong>strumento interattivo</strong> per sperimentare con diversi pattern e vedere immediatamente i risultati, accelerando l'apprendimento."
        ]
      }
    },
    faq: {
      title: "FAQ sulle Espressioni Regolari",
      items: [
        {
          question: "Cosa sono le regex e perché sono utili?",
          answer: "Le espressioni regolari (regex) sono stringhe speciali che definiscono pattern di ricerca. Sono un linguaggio di programmazione miniaturizzato integrato in molti linguaggi e strumenti.<br><br>Le regex permettono di:<br><br>• <strong>Cercare pattern specifici</strong> invece di corrispondenze esatte<br>• <strong>Validare formati</strong> come email, numeri di telefono o date<br>• <strong>Estrarre parti di testo</strong> da documenti<br>• <strong>Sostituire/modificare testo</strong> basato su pattern<br>• <strong>Dividere testo</strong> a confini specifici<br><br>Il nostro <strong>tester regex</strong> aiuta a sfruttare questa potenza evitando frustrazioni nel debug."
        },
        {
          question: "Cosa significano i flag g, i, m, s, u, y?",
          answer: "I flag modificano il comportamento del pattern matching:<br><br>• <strong>g (globale)</strong>: Trova tutte le corrispondenze invece di fermarsi alla prima<br>• <strong>i (case-insensitive)</strong>: Ignora differenze maiuscole/minuscole<br>• <strong>m (multilinea)</strong>: Fa sì che ^ e $ corrispondano all'inizio/fine di ogni riga<br>• <strong>s (dotAll)</strong>: Fa corrispondere il punto (.) anche ai newline (\\n)<br>• <strong>u (Unicode)</strong>: Abilita il corretto matching di caratteri Unicode<br>• <strong>y (adesivo)</strong>: Cerca solo dalla posizione lastIndex (uso avanzato)<br><br>Nel nostro <strong>tester regex</strong> puoi attivare/disattivare questi flag per vedere come influenzano il matching."
        },
        {
          question: "Come funzionano i gruppi di cattura?",
          answer: "I gruppi di cattura (definiti da parentesi ()) estraggono parti specifiche del testo corrispondente.<br><br>Esempio in <code>([A-Z]\\w+) (\\d{4})</code>:<br><br>• Primo gruppo <code>([A-Z]\\w+)</code> cattura parole che iniziano con maiuscola<br>• Secondo gruppo <code>(\\d{4})</code> cattura 4 cifre<br><br>Il nostro <strong>validatore regex</strong> mostra i gruppi catturati nei dettagli delle corrispondenze.<br><br>I gruppi possono anche essere referenziati nel pattern stesso (\\1, \\2), utili per operazioni complesse di ricerca/sostituzione."
        },
        {
          question: "Perché la mia regex non corrisponde come previsto?",
          answer: "Debug delle regex può essere complesso. Problemi comuni:<br><br>1. <strong>Caratteri speciali</strong>: Usa backslash (\\) per farli corrispondere letteralmente<br>2. <strong>Greedy matching</strong>: Aggiungi ? dopo * o + per matching non greedy (*?, +?)<br>3. <strong>Flag mancanti</strong>: Verifica se servono flag globali (g) o case-insensitive (i)<br>4. <strong>Spazi invisibili</strong>: Attenzione a spazi, tab, newline nel testo<br>5. <strong>Ancore</strong>: ^ e $ corrispondono a inizio/fine testo (o riga con flag m)<br><br>Il nostro <strong>strumento di pattern matching</strong> aiuta identificare questi problemi con feedback visivo immediato."
        }
      ]
    },
    guide: {
      title: "Guida all'uso del Tester Regex",
      step1: "<strong>Inserisci il pattern regex</strong>: Nel campo 'Espressione regolare', inserisci la tua regex senza barre /.",
      step2: "<strong>Seleziona i flag</strong>: Scegli flag che modificano il comportamento del matching. Comuni: 'g' (globale), 'i' (case-insensitive), 'm' (multilinea).",
      step3: "<strong>Inserisci testo di test</strong>: Nel campo 'Stringa di test', inserisci il testo su cui provare la regex.",
      step4: "<strong>Clicca 'Testa'</strong>: Dopo aver impostato pattern e testo, clicca 'Testa' per vedere i risultati.",
      step5: "<strong>Analizza i risultati</strong>: La sezione risultati evidenzia corrispondenze nel testo, mostrando dettagli come testo corrispondente, posizione e gruppi catturati.",
      step6: "<strong>Affina il pattern</strong>: Modifica la regex in base ai risultati e testa nuovamente per ottenere il comportamento desiderato.",
      step7: "<strong>Esplora esempi</strong>: Clicca 'Mostra esempi' per vedere pattern comuni per email, numeri di telefono, date, ecc. Puoi caricarli e modificarli per le tue esigenze."
    },
    conclusion: "Il Tester Regex semplifica la creazione e il debug di pattern attraverso feedback visivo in tempo real e analisi dettagliata delle corrispondenze. Che tu stia validando input utente, estraendo dati o imparando regex, questo strumento interattivo aiuta a costruire competenze preziose per l'elaborazione testuale, sempre più essenziale in sviluppo, analisi dati e gestione contenuti."
  },
  match: 'Corrispondenza',
  position: 'Posizione',
  group: 'Gruppo',
  resultsWillAppearHere: 'I risultati delle corrispondenze regex appariranno qui...',
  regexError: 'Errore regex: {message}',
  emailAddress: 'Indirizzo email',
  phoneNumber: 'Numero di telefono (Cina)',
  ipAddress: 'Indirizzo IP',
  dateFormat: 'Data (aaaa-mm-gg)',
  chineseCharacters: 'Caratteri cinesi',
  phoneNumberExample: 'Contatti: 13912345678\nWeChat: 18887654321\nTelefono fisso: 010-12345678',
  urlExample: 'Visita https://example.com\no http://www.domain.org/path?query=value',
  ipAddressExample: 'Server: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Data inizio: 2023-01-15\nData fine: 2023-02-28\nData non valida: 2023-13-45',
  chineseCharactersExample: 'Hello mondo! 你好，World!'
}