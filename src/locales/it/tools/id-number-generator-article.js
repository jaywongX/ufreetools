export default {
  introduction: {
    title: "Generatore di Codici Fiscali Cinesi: Funzionalità e Funzionamento",
    p1: "Il generatore di codici fiscali cinesi è uno strumento progettato per creare numeri di identificazione validi per test e sviluppo. Questi codici generati seguono il formato ufficiale stabilito dal governo cinese e le regole di verifica, risultando strutturalmente validi ma completamente fittizi.",
    p2: "Questo strumento è particolarmente utile per sviluppatori software, tester QA e designer UI/UX che necessitano di utilizzare codici fiscali cinesi nelle loro applicazioni senza impiegare dati personali reali. I codici generati includono informazioni incorporate come codice regionale, data di nascita e genere, tutti conformi al formato ufficiale.",
    p3: "Offrendo opzioni di personalizzazione per regione, intervallo di date di nascita, genere e quantità, il nostro generatore fornisce flessibilità mantenendo la conformità con il formato richiesto e gli algoritmi di verifica.",
    structureTitle: "Comprendere la struttura del codice fiscale",
    structureDesc: "Ogni codice fiscale cinese è composto da 18 cifre che seguono uno schema specifico:"
  },
  useCases: {
    title: "Casi d'uso pratici del generatore",
    case1: {
      title: "Test e sviluppo software",
      description: "Per gli sviluppatori che necessitano di verificare sistemi che accettano codici fiscali cinesi, questo strumento genera dati di test che superano i controlli di validazione senza usare informazioni personali reali. Utile per test di validazione di form, popolamento di database e test API."
    },
    case2: {
      title: "Design UI/UX e prototipazione",
      description: "I designer che creano mockup e prototipi per applicazioni che gestiscono l'identificazione di utenti cinesi possono utilizzare questi codici generati, assicurando una rappresentazione realistica dei dati senza problemi di privacy."
    },
    case3: {
      title: "Scopi educativi",
      description: "Studenti e educatori che studiano strutture dati, algoritmi di verifica o il sistema amministrativo cinese possono usare questo strumento per comprendere come i codici fiscali codificano le informazioni e come funzionano i meccanismi di verifica."
    },
    case4: {
      title: "Conformità alla privacy dei dati",
      description: "Le organizzazioni possono evitare di usare codici fiscali reali in ambienti non di produzione, aiutando a rispettare le normative sulla protezione dei dati fornendo al contempo dati di test realistici per i sistemi."
    }
  },
  guide: {
    title: "Come usare il generatore di codici fiscali",
    step1: {
      title: "Seleziona impostazioni regionali",
      description: "Scegli tra generazione casuale della regione o selezione di province e città specifiche. Puoi abilitare la selezione multipla per generare codici da diverse regioni o usare la barra di ricerca per trovare località specifiche."
    },
    step2: {
      title: "Imposta l'intervallo di date di nascita",
      description: "Definisci l'intervallo di date di nascita da includere nei codici generati. Questo permette di creare codici per fasce d'età o periodi specifici, da date storiche a più recenti."
    },
    step3: {
      title: "Seleziona opzioni di genere",
      description: "Scegli se generare codici con genere casuale o specificamente maschile/femminile. Nel codice fiscale cinese, il genere è codificato nel codice sequenziale (dispari=maschio, pari=femmina)."
    },
    step4: {
      title: "Genera ed esporta",
      description: "Specifica il numero di codici necessari e clicca il pulsante di generazione. Dopo la generazione, puoi copiare singoli codici, copiarli tutti in una volta o esportare i risultati in formato TXT, CSV o Excel per ulteriore utilizzo."
    },
    tip: "Per i migliori risultati, considera i requisiti specifici del tuo scenario di test. Se stai testando un sistema con limiti d'età, regola di conseguenza l'intervallo di date di nascita. Per test regionali, seleziona province specifiche rilevanti per la tua applicazione.",
    additionalTip: "Per verificare la correttezza dei codici generati, puoi usare il nostro",
    hashCalculatorLink: "strumento di calcolo hash"
  },
  faq: {
    title: "Domande frequenti sui codici fiscali cinesi",
    q1: "I codici fiscali generati sono legalmente validi?",
    a1: "No, i codici generati sono strutturalmente validi (superano i controlli di formato e verifica), ma sono completamente fittizi. Sono destinati esclusivamente a test, educazione e dimostrazione. Usarli per identificazione ufficiale o rappresentazione falsa è illegale.",
    q2: "Come viene codificato il genere nel codice fiscale cinese?",
    a2: "L'informazione di genere è codificata nella penultima cifra del codice a 18 cifre (17° posizione). Se questa cifra è dispari (1,3,5,7,9), il codice appartiene a un maschio. Se è pari (2,4,6,8,0), appartiene a una femmina.",
    q3: "Posso generare codici per regioni specifiche della Cina?",
    a3: "Sì, il nostro strumento supporta la selezione di province e città specifiche. Puoi scegliere una singola regione o abilitare la selezione multipla per generare codici da più regioni contemporaneamente. Sono incluse tutte le prefetture e divisioni amministrative provinciali.",
    q4: "Qual è il significato dell'ultima cifra del codice fiscale cinese?",
    a4: "L'ultima cifra (18°) è una cifra di controllo calcolata basandosi sulle prime 17 cifre usando un algoritmo specifico. Questo checksum aiuta a verificare la validità del codice e può essere 0-9 o X (che rappresenta 10).",
    q5: "Con quale frequenza viene aggiornato il formato del codice fiscale cinese?",
    a5: "Il formato a 18 cifre è lo standard dall'ottobre 1999. Sebbene il formato stesso cambi raramente, i codici regionali possono essere aggiornati man mano che la Cina riorganizza le sue divisioni amministrative. Il nostro generatore utilizza i codici regionali più recenti.",
    officialSource: "Ministero della Pubblica Sicurezza cinese (sito ufficiale)"
  },
  resources: {
    title: "Strumenti e risorse correlati",
    passwordGenerator: "Generatore di password - Crea password sicure e casuali con opzioni personalizzabili",
    wordShuffler: "Mescolatore di parole - Rimescola casualmente parole, frasi o righe di testo mantenendo la formattazione",
    hashCalculator: "Calcolatore hash - Verifica l'integrità dei dati usando diversi algoritmi hash",
    wikipediaLink: "Wikipedia: Carta d'identità cinese - Informazioni dettagliate sul sistema di identificazione cinese"
  },
  conclusion: {
    title: "Conclusione",
    p1: "Il generatore di codici fiscali cinesi è una risorsa preziosa per sviluppatori, tester e designer che lavorano con sistemi di identificazione cinesi. Generando codici formalmente validi ma non appartenenti a persone reali, aiuta a bilanciare il bisogno di dati di test realistici con considerazioni di privacy ed etica.",
    p2: "Che tu stia sviluppando nuove applicazioni, testando sistemi esistenti o creando materiali educativi, questo strumento offre la flessibilità e l'accuratezza necessarie per gestire con sicurezza il formato dei codici fiscali cinesi, rispettando i principi di privacy dei dati.",
    disclaimer: "Disclaimer: Questo strumento è destinato esclusivamente a test legittimi, educazione e sviluppo. I codici generati non devono essere usati per frode d'identità, falsa rappresentazione o qualsiasi attività illegale."
  }
}
