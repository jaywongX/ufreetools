export default {
  title: 'Gestore di Cookie: comprendere e controllare i cookie dei siti web',
  features: {
    title: 'Funzionalità e casi d\'uso',
    description: 'Il nostro strumento <strong>Gestore di Cookie</strong> offre un controllo completo sui cookie dei siti web, permettendoti di visualizzare, creare, modificare ed eliminare i cookie del sito corrente. Questo potente strumento ti dà piena visibilità e controllo sui cookie memorizzati nel browser, aiutandoti a gestire la privacy online e risolvere problemi di funzionalità dei siti.',
    useCasesTitle: 'Scenari pratici di utilizzo',
    useCases: {
      items: [
        '<strong>Test di sviluppo web</strong>: Verifica il comportamento dei siti con diverse configurazioni di cookie senza dover modificare manualmente lo storage del browser.',
        '<strong>Risoluzione problemi</strong>: Diagnostica problemi di login, sessioni o altri malfunzionamenti legati ai cookie esaminando e modificando i cookie.',
        '<strong>Gestione privacy</strong>: Controlla quali informazioni i siti memorizzano nei cookie ed elimina selettivamente quelli di tracciamento indesiderati per riprendere il controllo dei tuoi dati personali.',
        '<strong>Gestione sessioni</strong>: Crea o modifica cookie di sessione per testare diversi stati utente o scenari di autenticazione senza dover accedere e uscire ripetutamente.',
        '<strong>Test cross-browser</strong>: Esporta i cookie da un browser e importali in un altro per replicare lo stesso stato di navigazione tra browser diversi.'
      ]
    }
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      {
        question: 'Cosa sono i cookie e perché i siti web li usano?',
        answer: 'I cookie sono piccoli frammenti di dati che i siti web memorizzano nel tuo browser. Hanno varie funzioni, tra cui ricordare informazioni di accesso, tracciare il comportamento degli utenti, memorizzare preferenze, mantenere carrelli della spesa e abilitare esperienze personalizzate. I cookie sono essenziali per molte funzionalità web moderne, ma possono anche sollevare preoccupazioni sulla privacy quando usati per il tracciamento.'
      },
      {
        question: 'In cosa differisce questo Gestore di Cookie dalle impostazioni integrate del browser?',
        answer: 'Mentre i browser offrono una gestione di base dei cookie tramite le loro impostazioni, il nostro <strong>Gestore di Cookie</strong> fornisce un controllo più granulare e funzionalità avanzate. Non solo puoi visualizzare ed eliminare i cookie (come permesso dal browser), ma anche crearne di nuovi, modificare quelli esistenti, esportarli per backup e importarli. Questo lo rende ideale per sviluppatori, tester e utenti attenti alla privacy che necessitano di funzionalità di gestione dettagliate.'
      },
      {
        question: 'È sicuro eliminare i cookie? Influirà sulla mia esperienza di navigazione?',
        answer: 'Eliminare i cookie è generalmente sicuro, ma potrebbe influire sulla tua esperienza di navigazione in vari modi. Potresti essere disconnesso dai siti, perdere preferenze salvate o dover ricreare carrelli della spesa. Il <strong>Gestore di Cookie</strong> ti permette di eliminare selettivamente cookie specifici anziché cancellarli tutti, dandoti un controllo preciso su quali dati di navigazione conservare o rimuovere.'
      },
      {
        question: 'Cosa significano i diversi attributi dei cookie come "SameSite" e "HttpOnly"?',
        answer: 'Gli attributi dei cookie controllano il loro comportamento e accessibilità:<br>- <strong>Secure</strong>: Il cookie viene inviato solo su connessioni HTTPS<br>- <strong>HttpOnly</strong>: JavaScript non può accedere al cookie<br>- <strong>SameSite</strong>: Controlla quando il cookie viene inviato con richieste cross-site (None, Lax o Strict)<br>- <strong>Domain</strong>: Specifica quali domini possono ricevere il cookie<br>- <strong>Path</strong>: Limita il cookie a percorsi specifici sul sito<br>- <strong>Expires</strong>: Imposta quando il browser dovrebbe eliminare il cookie'
      },
      {
        question: 'Posso usare questo strumento per importare cookie da un altro computer o browser?',
        answer: 'Sì, la funzione di importazione/esportazione del <strong>Gestore di Cookie</strong> ti permette di trasferire cookie tra browser o dispositivi. Esporta i tuoi cookie come file JSON o di testo, trasferisci il file su un altro dispositivo, quindi usa lo strumento Gestore di Cookie su quel dispositivo per importarli. Questo è particolarmente utile per sviluppatori che necessitano di replicare stati utente o per trasferire sessioni di navigazione tra computer diversi.'
      }
    ]
  },
  guide: {
    title: 'Come usare lo strumento Gestore di Cookie',
    step1: {
      title: 'Visualizza i cookie correnti',
      description: 'Quando apri il <strong>Gestore di Cookie</strong>, la scheda "Cookie attuali" mostra tutti i cookie del sito corrente. Questo elenco visualizza nome, valore e data di scadenza di ogni cookie. Per vedere maggiori dettagli su un cookie specifico, clicca il pulsante "Modifica" accanto ad esso. Per aggiornare l\'elenco e assicurarti di vedere i cookie più recenti, clicca il pulsante "Aggiorna" in cima alla lista.'
    },
    step2: {
      title: 'Crea un nuovo cookie',
      description: 'Per aggiungere un nuovo cookie, clicca la scheda "Crea Cookie". Compila i campi obbligatori (nome e valore) e qualsiasi attributo opzionale come dominio, percorso o data di scadenza. Imposta le opzioni di sicurezza come il flag Secure o l\'attributo SameSite secondo necessità. Una volta configurato il cookie, clicca "Salva" per crearlo. Lo strumento confermerà l\'avvenuta creazione e tornerà automaticamente alla vista elenco cookie.'
    },
    step3: {
      title: 'Modifica un cookie esistente',
      description: 'Per modificare un cookie, trovalo nell\'elenco "Cookie attuali" e clicca "Modifica". Questo caricherà i dettagli del cookie nel modulo di modifica. Apporta le modifiche desiderate a qualsiasi attributo del cookie. Al termine, clicca "Salva" per aggiornare il cookie. Lo strumento confermerà l\'avvenuto aggiornamento. Nota che modificare un cookie crea in realtà un nuovo cookie con lo stesso nome ma attributi aggiornati.'
    },
    step4: {
      title: 'Elimina un cookie',
      description: 'Per eliminare un cookie, trovalo nell\'elenco "Cookie attuali" e clicca "Elimina". Apparirà una finestra di conferma per prevenire eliminazioni accidentali. Dopo la conferma, il cookie verrà immediatamente rimosso dal tuo browser e l\'elenco si aggiornerà automaticamente. Questo ti dà pieno controllo su quali dati i siti possono memorizzare nel tuo browser.'
    },
    step5: {
      title: 'Importa ed esporta cookie',
      description: 'Per trasferire cookie, vai alla scheda "Importa/Esporta". Per esportare, scegli tra formato JSON (struttura migliore) o testo (migliore compatibilità). Clicca il pulsante corrispondente per scaricare il file. Per importare, incolla i dati dei cookie nell\'area di testo e clicca "Importa". Puoi importare cookie in formato testo standard o JSON. Lo strumento confermerà l\'avvenuta importazione e mostrerà quanti cookie sono stati importati.'
    }
  },
  conclusion: 'Lo strumento <strong>Gestore di Cookie</strong> ti dà il controllo completo sui cookie del browser, che tu sia uno sviluppatore che testa funzionalità dei siti, un utente attento alla privacy che gestisce dati personali o qualcuno che risolve problemi di siti web. Comprendendo e gestendo attivamente i cookie, puoi migliorare la tua esperienza di navigazione mantenendo il controllo sulla tua privacy online.'
}
