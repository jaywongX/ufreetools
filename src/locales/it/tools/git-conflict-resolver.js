export default {
  name: 'Simulatore Risoluzione Conflitti Git',
  description: 'Simula scenari di conflitto in Git per esercitarsi a risolvere conflitti di codice',
  title: 'Simulatore Risoluzione Conflitti Git',
  intro: 'Questo strumento ti aiuta a comprendere e praticare la risoluzione dei conflitti di merge in Git. Inserisci contenuti in conflitto o usa un esempio, poi risolvi manualmente i conflitti.',
  buttons: {
    generateExample: 'Genera conflitto di esempio',
    resolveOurs: 'Usa le mie modifiche (HEAD)',
    resolveTheirs: 'Usa le loro modifiche',
    validate: 'Verifica soluzione',
    reset: 'Ripristina',
    useOurs: 'Usa mio',
    useTheirs: 'Usa loro',
    useBoth: 'Combina entrambi'
  },
  conflictArea: {
    label: 'Contenuto conflitto',
    hasConflict: '⚠️ Conflitti non risolti presenti',
    noConflict: '✓ Nessun conflitto'
  },
  analysis: {
    title: 'Analisi conflitto',
    conflict: 'Conflitto #{number}',
    ours: 'Le mie modifiche (HEAD)',
    theirs: 'Le loro modifiche'
  },
  tutorial: {
    title: 'Come risolvere i conflitti Git',
    intro: 'I conflitti Git si verificano tipicamente durante operazioni di merge o rebase, quando due branch modificano la stessa parte dello stesso file.',
    markerExplanation: 'I marcatori di conflitto appaiono così:',
    markerExample: `<<<<<<< HEAD
Le tue modifiche (branch corrente)
=======
Le loro modifiche (branch da unire)
>>>>>>> nome-branch`,
    steps: {
      title: 'Passi base per risolvere i conflitti:',
      step1: 'Trova tutti i marcatori di conflitto (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> nome-branch</code>)',
      step2: 'Decidi quale codice mantenere (tuo, loro o una combinazione)',
      step3: 'Rimuovi i marcatori di conflitto, mantenendo solo il codice scelto',
      step4: 'Procedi con il conflitto successivo fino a risoluzione completa'
    },
    commands: {
      title: 'Comandi Git utili:',
      status: '<code>git status</code> - Mostra file con conflitti',
      diff: '<code>git diff</code> - Visualizza dettagli conflitti',
      abort: '<code>git merge --abort</code> - Annulla merge, torna allo stato precedente',
      add: '<code>git add &lt;file&gt;</code> - Segna file come risolto',
      commit: '<code>git commit</code> - Completa il merge'
    }
  },
  messages: {
    generated: "Generato esempio di conflitto",
    resolvedOurs: "Tutti i conflitti risolti usando 'Le mie modifiche'",
    resolvedTheirs: "Tutti i conflitti risolti usando 'Le loro modifiche'",
    resolvedSingle: "Conflitto #{number} risolto",
    allResolved: "✅ Tutti i conflitti risolti con successo!",
    stillHasConflicts: "⚠️ Sono ancora presenti conflitti non risolti"
  },
  article: {
    title: "Comprendere e risolvere i conflitti Git",
    overview: {
      title: "Cos'è la risoluzione dei conflitti Git?",
      content: "La risoluzione dei conflitti Git è il processo di gestione e soluzione dei conflitti che emergono durante merge o rebase in Git. Quando più sviluppatori modificano la stessa parte di un file, Git non può determinare automaticamente quali modifiche mantenere. È qui che entra in gioco il risolutore di conflitti Git.<br><br>Questo simulatore ti aiuta a comprendere e praticare la risoluzione dei conflitti di merge in un ambiente sicuro. Simulando scenari comuni di conflitto, puoi apprendere i meccanismi di risoluzione senza impattare codice di progetto reale. Il simulatore evidenzia i conflitti, mostra le modifiche conflittuali affiancate e fornisce strumenti per esercitarsi nella risoluzione efficace."
    },
    useCases: {
      title: "Scenari comuni che richiedono risoluzione conflitti Git",
      items: [
        {
          title: "Collaborazione in team su codice condiviso",
          description: "Quando più membri modificano lo stesso file, è probabile che si verifichino conflitti durante il merge. Imparare a risolverli garantisce collaborazione fluida."
        },
        {
          title: "Integrazione feature branch",
          description: "Il merge di feature branch nel branch principale spesso genera conflitti nelle aree sviluppate in parallelo."
        },
        {
          title: "Gestione pull request",
          description: "Risolvere conflitti durante l'integrazione di pull request nel repository principale, assicurando merge sicuro delle modifiche."
        },
        {
          title: "Gestione branch a lungo termine",
          description: "Risolvere conflitti accumulati quando un branch rimane separato dalla linea di sviluppo principale per lungo tempo."
        },
        {
          title: "Contributi a progetti open source",
          description: "I contributori spesso affrontano conflitti quando le loro modifiche si sovrappongono ad aggiornamenti di altri."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo alla risoluzione conflitti Git",
      intro: "Risolvere conflitti Git può sembrare intimidatorio inizialmente, ma un approccio sistematico rende il processo gestibile. Ecco come risolverli efficacemente:",
      steps: [
        {
          title: "Identifica file in conflitto",
          description: "Usa 'git status' per identificare file marcati come conflittuali. Questi file contengono marcatori di conflitto da risolvere."
        },
        {
          title: "Apri file conflittuali",
          description: "Apri i file in un editor. Cerca i marcatori di conflitto (<<<<<<< HEAD, =======, e >>>>>>> nome-branch) che indicano la presenza di conflitti."
        },
        {
          title: "Comprendi entrambe le modifiche",
          description: "Analizza le modifiche conflittuali. Il contenuto tra <<<<<<< HEAD e ======= mostra le tue modifiche, mentre tra ======= e >>>>>>> mostra quelle del branch da unire."
        },
        {
          title: "Decidi come risolvere ogni conflitto",
          description: "Scegli se mantenere le tue modifiche, accettare quelle in arrivo o creare una combinazione. Considera l'intento dietro ogni modifica, non limitarti a sceglierne una."
        },
        {
          title: "Modifica il file per risolvere i conflitti",
          description: "Modifica il file rimuovendo i marcatori di conflitto e mantenendo solo il contenuto finale desiderato. Potrebbe implicare selezionare una versione o combinare manualmente elementi di entrambe."
        },
        {
          title: "Segna come risolto",
          description: "Dopo le modifiche, usa 'git add <file>' per segnare il file come risolto. Questo prepara il file risolto per il commit."
        },
        {
          title: "Completa il processo di merge",
          description: "Una volta risolti tutti i conflitti e preparati i file, usa 'git commit' per completare il merge. Git creerà un commit di merge per registrare la soluzione."
        }
      ]
    },
    conflictTypes: {
      title: "Tipi comuni di conflitti Git",
      intro: "I conflitti Git possono presentarsi in varie forme, ciascuna richiedendo un approccio leggermente diverso. Comprenderli aiuta a identificarli e risolverli efficientemente:",
      types: [
        {
          title: "Conflitti di contenuto",
          description: "Il tipo più comune, si verifica quando due branch modificano la stessa riga di codice. Git non può determinare automaticamente quale cambiamento mantenere."
        },
        {
          title: "Conflitti di file eliminati",
          description: "Si verificano quando un branch modifica un file e un altro lo elimina. Git deve sapere se mantenere il file modificato o confermarne l'eliminazione."
        },
        {
          title: "Conflitti di rinominazione file",
          description: "Quando un branch rinomina un file e un altro modifica il file originale, Git può avere difficoltà a tracciare correttamente queste modifiche."
        },
        {
          title: "Conflitti in file binari",
          description: "Conflitti in file non testuali (come immagini o file compilati) che non possono essere uniti riga per riga. Richiedono tipicamente di selezionare completamente una versione."
        },
        {
          title: "Conflitti di spazi bianchi",
          description: "A volte i conflitti sono causati da cambiamenti negli spazi bianchi (come indentazione o fine riga), che possono essere particolarmente frustranti ma generalmente facili da risolvere."
        }
      ]
    },
    faq: {
      title: "Domande frequenti sulla risoluzione conflitti Git",
      items: [
        {
          question: "Come evitare conflitti Git?",
          answer: "Sebbene non si possano evitare completamente, specialmente in progetti attivi, puoi minimizzarli: comunicando con il team sui file su cui stai lavorando, effettuando pull frequenti dei cambiamenti, mantenendo i feature branch brevi e usando commit piccoli e focalizzati più facili da unire."
        },
        {
          question: "Posso usare strumenti per aiutare a risolvere conflitti Git?",
          answer: "Sì, molti client Git e IDE forniscono strumenti visuali per la risoluzione conflitti, mostrando le differenze affiancate. Opzioni popolari includono Visual Studio Code, IntelliJ IDEA, GitKraken e SourceTree. Questi strumenti evidenziano i conflitti e forniscono pulsanti per selezionare tra diverse versioni."
        },
        {
          question: "Cosa fare se risolvo un conflitto in modo errato?",
          answer: "Se commetti un errore nella risoluzione, puoi usare 'git merge --abort' per annullare il merge corrente (se non hai ancora effettuato commit) o revertare il commit dopo il completamento. È buona pratica testare il codice dopo la risoluzione conflitti per assicurarsi che funzioni come previsto."
        },
        {
          question: "Come risolvere conflitti durante un rebase?",
          answer: "Il processo è simile alla risoluzione conflitti di merge, ma viene eseguito per ogni commit nel rebase. Dopo aver risolto i conflitti, usa 'git add' per segnare i file come risolti e 'git rebase --continue' per procedere con il commit successivo (o conflitto) nel processo di rebase."
        },
        {
          question: "È meglio usare merge o rebase per minimizzare i conflitti?",
          answer: "Entrambe le strategie hanno scopi diversi. Il merge preserva la storia accurata ma può creare grafi complessi con molti commit di merge. Il rebase crea una storia più pulita e lineare ma riscrive la cronologia dei commit, problematico per branch condivisi. I team dovrebbero concordare il flusso di lavoro più adatto alle loro esigenze."
        },
        {
          question: "Cosa sono i 'marcatori di conflitto' in Git?",
          answer: "I marcatori di conflitto sono sequenze di testo speciali che Git inserisce nei file per indicare modifiche conflittuali. Includono: <<<<<<< HEAD (inizio tue modifiche), ======= (separatore tra tue e loro modifiche), e >>>>>>> nome-branch (fine modifiche dal branch specificato)."
        },
        {
          question: "Come esercitarsi in sicurezza nella risoluzione conflitti Git?",
          answer: "Questo simulatore è progettato proprio per esercitarsi. Inoltre, puoi creare repository di test locali, fare modifiche conflittuali in branch diversi e esercitarti a unirli. Questo fornisce un ambiente sicuro per acquisire confidenza nella gestione dei conflitti."
        }
      ]
    },
    bestPractices: {
      title: "Migliori pratiche per risolvere conflitti efficientemente",
      items: [
        "Comunica con il team prima di modificare file potenzialmente conflittuali",
        "Esegui pull e merge frequenti dal branch principale per ridurre dimensione e complessità dei conflitti",
        "Usa feature flag per consentire il merge anticipato di funzionalità incomplete senza impattare funzionalità",
        "Suddividi grandi cambiamenti in commit più piccoli e focalizzati, più facili da unire",
        "Comprendi il contesto del codice e l'intento dietro entrambe le modifiche prima di risolvere conflitti complessi",
        "Considera il pair programming per risolvere conflitti complessi, combinando diverse prospettive",
        "Testa sempre l'applicazione dopo aver risolto i conflitti per assicurarsi che funzioni correttamente",
        "Documenta la tua strategia di risoluzione conflitti per mantenere coerenza nel team",
        "Usa messaggi di commit significativi per spiegare le tue decisioni durante la risoluzione conflitti",
        "Sfrutta opzioni di configurazione Git come 'git config merge.conflictstyle diff3' per visualizzare il contenuto originale insieme alle modifiche conflittuali"
      ]
    }
  }
}