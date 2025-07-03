export default {
  name: 'Registro Personale',
  description: 'Tieni traccia delle tue entrate e uscite con questo semplice strumento finanziario personale',
  tags: ['Finanza', 'Contabilità', 'Budget', 'Denaro', 'Tracciamento spese', 'Finanza personale'],
  category: 'strumenti-pratici',
  
  // Elementi UI
  ui: {
    addTransaction: 'Aggiungi transazione',
    editTransaction: 'Modifica transazione',
    deleteTransaction: 'Elimina transazione',
    income: 'Entrata',
    expense: 'Uscita',
    transfer: 'Trasferimento',
    date: 'Data',
    amount: 'Importo',
    category: 'Categoria',
    account: 'Conto',
    description: 'Descrizione',
    tags: 'Tag',
    save: 'Salva',
    cancel: 'Annulla',
    confirm: 'Conferma',
    filter: 'Filtra',
    search: 'Cerca',
    clear: 'Pulisci',
    overview: 'Panoramica',
    transactions: 'Transazioni',
    statistics: 'Statistiche',
    budget: 'Budget',
    settings: 'Impostazioni',
    exportData: 'Esporta dati',
    importData: 'Importa dati',
    backup: 'Backup',
    restore: 'Ripristina',
    currency: 'Valuta',
    language: 'Lingua',
    theme: 'Tema',
    darkMode: 'Modalità scura',
    lightMode: 'Modalità chiara',
    resetData: 'Resetta dati',
    resetConfirmation: 'Sei sicuro di voler resettare tutti i dati? Questa azione non può essere annullata.',
    from: 'Da',
    to: 'A',
    filterByDate: 'Filtra per data',
    noTransactions: 'Nessuna transazione da visualizzare',
    allCategories: 'Tutte le categorie',
    addCategory: 'Aggiungi categoria',
    editCategory: 'Modifica categoria',
    deleteCategory: 'Elimina categoria',
    categoryName: 'Nome categoria',
    categoryIcon: 'Icona categoria',
    categoryColor: 'Colore categoria',
    addAccount: 'Aggiungi conto',
    editAccount: 'Modifica conto',
    deleteAccount: 'Elimina conto',
    accountName: 'Nome conto',
    accountType: 'Tipo conto',
    accountBalance: 'Saldo conto',
    totalIncome: 'Entrate totali',
    totalExpense: 'Uscite totali',
    balance: 'Saldo',
    netWorth: 'Patrimonio netto',
    daily: 'Giornaliero',
    weekly: 'Settimanale',
    monthly: 'Mensile',
    yearly: 'Annuale',
    today: 'Oggi',
    thisWeek: 'Questa settimana',
    thisMonth: 'Questo mese',
    thisYear: 'Quest\'anno',
    lastWeek: 'Scorsa settimana',
    lastMonth: 'Scorso mese',
    lastYear: 'Scorso anno',
    custom: 'Personalizzato',
    setBudget: 'Imposta budget',
    budgetLimit: 'Limite budget',
    budgetPeriod: 'Periodo budget',
    budgetCategory: 'Categoria budget',
    budgetAlert: 'Avviso budget',
    budgetUsage: 'Utilizzo budget',
    remaining: 'Rimanente',
    spent: 'Speso',
    over: 'Superato',
    exportFormat: 'Formato esportazione',
    importFormat: 'Formato importazione',
    csv: 'CSV',
    json: 'JSON',
    selectFile: 'Seleziona file',
    successfullyImported: 'Dati importati con successo',
    errorImporting: 'Errore durante l\'importazione',
    successfullyExported: 'Dati esportati con successo',
    errorExporting: 'Errore durante l\'esportazione',
    confirmDelete: 'Sei sicuro di voler eliminare questo elemento?',
    recurringTransaction: 'Transazione ricorrente',
    frequency: 'Frequenza',
    startDate: 'Data inizio',
    endDate: 'Data fine',
    never: 'Mai',
    daily: 'Giornaliero',
    weekly: 'Settimanale',
    monthly: 'Mensile',
    yearly: 'Annuale',
    note: 'Nota',
    attachment: 'Allegato',
    dataSecurity: 'Sicurezza dati',
    type: 'Tipo',
    clearTransactions: 'Pulisci transazioni',
    confirmClearTransactions: 'Sei sicuro di voler cancellare tutte le transazioni? Questa azione non può essere annullata.',
    transactionsCleared: 'Tutte le transazioni sono state cancellate',
    enterValidAmount: 'Inserisci un importo valido',
    selectDate: 'Seleziona una data',
    selectCategory: 'Seleziona una categoria'
  },
  
  // Categorie predefinite
  categories: {
    income: {
      salary: 'Stipendio',
      freelance: 'Lavoro autonomo',
      investments: 'Investimenti',
      gifts: 'Regali',
      refunds: 'Rimborsi',
      other: 'Altre entrate'
    },
    expense: {
      food: 'Cibo',
      groceries: 'Spesa',
      rent: 'Affitto/Mutuo',
      utilities: 'Bollette',
      transportation: 'Trasporti',
      entertainment: 'Intrattenimento',
      shopping: 'Shopping',
      health: 'Salute',
      education: 'Educazione',
      personal: 'Cura personale',
      travel: 'Viaggi',
      insurance: 'Assicurazione',
      taxes: 'Tasse',
      debt: 'Debiti',
      subscription: 'Abbonamenti',
      charity: 'Donazioni',
      business: 'Spese business',
      other: 'Altre uscite'
    },
    transfer: {
      bank_transfer: 'Bonifico',
      savings: 'Risparmi',
      investment: 'Investimento',
      debt_payment: 'Pagamento debito',
      other: 'Altri trasferimenti'
    }
  },
  
  // Tipi di conto
  accountTypes: {
    cash: 'Contanti',
    checking: 'Conto corrente',
    savings: 'Conto risparmio',
    creditCard: 'Carta di credito',
    investment: 'Conto investimento',
    loan: 'Prestito',
    asset: 'Attività',
    other: 'Altro'
  },
  
  // Etichette grafici
  charts: {
    incomeVsExpense: 'Entrate vs Uscite',
    expenseByCategory: 'Uscite per categoria',
    monthlyTrend: 'Andamento mensile',
    savingsRate: 'Tasso di risparmio',
    netWorthTrend: 'Andamento patrimonio',
    budgetPerformance: 'Performance budget',
    topExpenseCategories: 'Principali categorie di spesa',
    cashFlow: 'Flusso di cassa'
  },
  
  // Documentazione
  documentation: {
    title: 'Informazioni sul Registro Personale',
    introduction: 'Il Registro Personale è uno strumento per la gestione finanziaria personale. Tutti i dati sono memorizzati nel tuo browser, garantendo la completa privacy delle tue informazioni finanziarie.',
    whyUse: {
      title: 'Perché usare il Registro Personale?',
      points1: 'Completamente privato - Tutti i dati sono memorizzati localmente e non vengono inviati a server esterni',
      points2: 'Interfaccia semplice - Design intuitivo per registrare facilmente le transazioni',
      points3: 'Visualizzazione dati - Grafici per comprendere le tue abitudini di spesa',
      points4: 'Categorie personalizzabili - Crea categorie personalizzate per entrate e uscite',
      points5: 'Esportazione dati - Supporto per esportare dati in formato CSV per backup o analisi'
    },
    tips: {
      title: 'Consigli per l\'uso',
      points1: 'Registra regolarmente le transazioni per mantenere il registro aggiornato',
      points2: 'Usa i tag per classificare meglio le tue spese',
      points3: 'Imposta budget mensili per controllare le spese',
      points4: 'Esporta regolarmente i dati come backup',
      points5: 'Usa le statistiche per identificare modelli di spesa e aree di miglioramento'
    },
    dataStorage: {
      title: 'Memorizzazione dati',
      content: 'Tutti i tuoi dati finanziari sono memorizzati esclusivamente nella memoria locale del tuo browser. Ciò significa che i tuoi dati non lasciano mai il tuo dispositivo e nessuno può accedervi. Tuttavia, cancellare i dati del browser cancellerà anche i dati del registro, quindi ricordati di esportarli regolarmente.'
    }
  },
  
  // Sezione articolo
  article: {
    title: "Registro Personale: Controlla la tua Salute Finanziaria",
    features: {
      title: "Scopri la gestione finanziaria personale",
      description: "Il Registro Personale è uno strumento completo per la gestione del denaro, progettato per aiutarti a prendere il controllo della tua vita finanziaria. Questo potente strumento di tracciamento spese fornisce una piattaforma sicura e privata per registrare entrate e uscite, monitorare il tuo flusso di cassa e analizzare i tuoi modelli finanziari, senza condividere i tuoi dati con server esterni.<br><br>Il nostro strumento di gestione finanziaria personale offre varie funzionalità tra cui classificazione delle transazioni, pianificazione del budget, visualizzazione statistica ed esportazione dati. L'interfaccia intuitiva rende semplice il tracciamento finanziario quotidiano, mentre gli strumenti avanzati di reporting offrono approfondimenti sui tuoi modelli di spesa e risparmio. Che tu voglia ridurre i debiti, risparmiare per un acquisto importante o semplicemente capire meglio dove va il tuo denaro, questo strumento di pianificazione budget fornisce tutti gli strumenti necessari per una gestione finanziaria efficace.",
      useCases: {
        title: "Scenari pratici per il budget personale",
        items: [
          "Studenti che tracciano le spese mensili e le entrate per evitare spese eccessive e gestire risorse finanziarie limitate",
          "Liberi professionisti che monitorano entrate da progetti e spese regolari, aiutando a mantenere un flusso di cassa stabile tra contratti",
          "Giovani professionisti che creano piani di risparmio per obiettivi importanti come l'anticipo per una casa, analizzando modelli di spesa per trovare opportunità di riduzione",
          "Famiglie che gestiscono budget domestici, tracciano spese comuni e pianificano spese future come fondi per l'istruzione o ristrutturazioni",
          "Piccoli imprenditori che separano spese personali e aziendali mantenendo una visione completa della loro situazione finanziaria",
          "Pensionati che monitorano fonti di reddito fisso e spese mensili, assicurando che i loro risparmi durino negli anni non lavorativi"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sulla gestione finanziaria personale",
      items: [
        {
          question: "I miei dati finanziari sono al sicuro usando questo registro personale?",
          answer: "Assolutamente sì. La sicurezza dei tuoi dati finanziari è la nostra priorità. Il Registro Personale memorizza tutte le informazioni esclusivamente nella memoria locale del tuo browser, il che significa che i tuoi dati finanziari sensibili non lasciano mai il tuo dispositivo e non vengono trasmessi a server esterni. Non è necessario creare un account o effettuare login, aumentando ulteriormente la privacy. Tuttavia, questo approccio di memorizzazione locale significa che dovresti esportare regolarmente i dati come backup, poiché cancellare la cache del browser eliminerà i tuoi registri finanziari. Questo equilibrio tra privacy completa e responsabilità locale ti dà il controllo totale sulle tue informazioni finanziarie personali."
        },
        {
          question: "Come la funzionalità di tracciamento budget può aiutarmi a risparmiare?",
          answer: "La funzionalità di tracciamento budget nel nostro Registro Personale è uno strumento potente per aumentare i risparmi, creando consapevolezza e responsabilità finanziaria. Puoi impostare limiti di budget specifici per diverse categorie di spesa (come generi alimentari, intrattenimento, bollette ecc.) e monitorare in tempo reale come le tue spese si confrontano con questi obiettivi. Quando ti avvicini o superi le soglie del budget, il sistema fornisce indicatori visivi che aiutano a prevenire spese eccessive. I report mensili e per categoria rivelano i tuoi modelli di spesa, evidenziando possibili aree di riduzione. Questo monitoraggio completo del budget crea un ciclo di feedback che incoraggia naturalmente decisioni di spesa più consapevoli e migliori abitudini finanziarie."
        },
        {
          question: "Posso tracciare più conti o valute con questo strumento di tracciamento spese?",
          answer: "Sì, il nostro strumento di tracciamento spese supporta completamente la gestione di più conti finanziari e valute. Puoi creare e monitorare vari tipi di conti, inclusi contanti, conti correnti, conti risparmio, carte di credito e conti investimento, tutti all'interno di un unico pannello. Per gli utenti che gestiscono più valute, lo strumento permette di definire diversi tipi di valuta e gestire calcoli di conversione. La funzionalità di trasferimento ti consente di registrare movimenti di fondi tra conti, mantenendo saldi accurati attraverso il tuo portafoglio finanziario. Questa funzionalità multi-conto fornisce una visione completa della tua situazione finanziaria, piuttosto che una vista frammentata su piattaforme diverse."
        },
        {
          question: "Quanto sono dettagliati i report finanziari e le visualizzazioni?",
          answer: "I report finanziari e le visualizzazioni nel Registro Personale offrono una profondità straordinaria pur rimanendo user-friendly. Il pannello di analisi offre vari tipi di visualizzazioni, tra cui confronti entrate-uscite, ripartizioni delle spese per categoria, analisi di tendenze mensili e monitoraggio del tasso di risparmio. I report possono essere filtrati per intervalli di date personalizzati, categorie, tag o conti per esaminare aspetti specifici del tuo comportamento finanziario. Grafici interattivi ti permettono di approfondire i dettagli delle transazioni direttamente dalle visualizzazioni. Queste analisi complete trasformano dati finanziari grezzi in informazioni utilizzabili, aiutandoti a identificare modelli di spesa, tracciare performance del budget e prendere decisioni informate sulla gestione finanziaria personale."
        },
        {
          question: "In cosa differisce questo gestore finanziario personale dalle app bancarie?",
          answer: "A differenza delle app bancarie che si concentrano principalmente su saldi e transazioni di singole istituzioni, il nostro gestore finanziario personale offre una supervisione finanziaria completa su tutti i conti con privacy totale. Le app bancarie mostrano ciò che è già accaduto, mentre il nostro strumento enfatizza pianificazione, budget e analisi, con categorie personalizzabili che corrispondono alla tua situazione finanziaria specifica. Le app bancarie spesso mancano di analisi dettagliate delle spese o offrono solo classificazioni di base, mentre il nostro gestore finanziario personale fornisce report approfonditi e visualizzazioni sui tuoi modelli finanziari. Soprattutto, la nostra soluzione memorizza i dati localmente sul tuo dispositivo, dandoti pieno controllo e protezione della privacy delle tue informazioni finanziarie, a differenza delle app bancarie che memorizzano i tuoi dati sui loro server."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo per gestire le tue finanze",
      steps: [
        "Inizia dal pannello panoramico per ottenere un quadro completo della tua situazione finanziaria, incluse entrate totali, uscite e saldi correnti su tutti i conti",
        "Configura i tuoi conti cliccando il pulsante 'Aggiungi conto' e inserendo i dettagli come nome, tipo (conto corrente, risparmio, carta di credito ecc.) e saldo attuale",
        "Clicca 'Aggiungi transazione' per registrare le tue operazioni finanziarie, selezionando il tipo (entrata, uscita o trasferimento) e compilando dettagli come data, importo, categoria e conto",
        "Stabilisci limiti di budget navigando alla sezione budget e creando limiti mensili per diverse categorie di spesa, aiutandoti a controllare le tue uscite",
        "Usa la sezione statistiche per analizzare i tuoi modelli di spesa attraverso grafici visuali, permettendoti di identificare aree di possibile spesa eccessiva",
        "Rivedi regolarmente la cronologia delle transazioni per assicurarti che tutte le voci siano accurate e correttamente classificate, apportando modifiche quando necessario per mantenere l'integrità dei dati",
        "Usa la funzione 'Esporta dati' per esportare regolarmente i tuoi dati finanziari, creando backup in formato CSV o JSON per proteggere i tuoi record da perdite accidentali dovute alla cancellazione dei dati del browser"
      ]
    },
    conclusion: "Il Registro Personale trasforma il tipicamente intimidatorio compito della gestione finanziaria in un processo semplice e persino coinvolgente. Fornendo un ambiente sicuro per tracciare spese, monitorare entrate e visualizzare modelli di spesa, questo strumento ti dà una chiarezza senza precedenti sulle tue abitudini finanziarie. Continuando a registrare transazioni e rivedere le informazioni generate, acquisirai una comprensione più profonda del tuo rapporto con il denaro e individuerai opportunità specifiche per ottimizzare le tue finanze. Che il tuo obiettivo sia ridurre i debiti, accumulare risparmi o semplicemente ottenere una maggiore consapevolezza finanziaria, l'uso continuativo di questo gestore finanziario personale ti guiderà verso una migliore salute finanziaria e una maggiore tranquillità economica per il futuro."
  }
}