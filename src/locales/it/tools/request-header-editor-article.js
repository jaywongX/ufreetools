export default {
  title: "Editor Intestazioni HTTP: Guida Completa",
  features: {
    title: "Comprendere le intestazioni HTTP e la loro importanza",
    description: "<strong>Editor Intestazioni HTTP</strong> è uno strumento avanzato per sviluppatori, tester e appassionati di API per creare, modificare e validare intestazioni HTTP nelle richieste web. Queste intestazioni sono componenti cruciali della comunicazione HTTP, trasmettendo metadati importanti tra client e server per gestire autenticazione, negoziazione contenuti, caching e altro.<br><br>Il nostro <strong>strumento di editing</strong> offre un'interfaccia intuitiva per costruire complessi set di intestazioni, testare diverse configurazioni ed esportare risultati in vari formati per l'implementazione nelle applicazioni. Che tu stia debugando problemi API, sviluppando nuove integrazioni o imparando i protocolli web, questo strumento semplifica la gestione delle intestazioni HTTP.",
    useCases: {
      title: "Applicazioni pratiche dell'editing intestazioni",
      items: [
        "<strong>Test autenticazione API</strong>: Quando lavori con API che richiedono token o chiavi nelle intestazioni (OAuth, JWT, API key), il nostro <strong>costruttore di intestazioni</strong> ti permette di creare e testare rapidamente diversi scenari senza modificare il codice.",
        
        "<strong>Debug CORS</strong>: Per applicazioni web con richieste cross-origin, configurare e testare la corretta combinazione di intestazioni Origin, Access-Control e preflight è essenziale. Questo <strong>strumento HTTP</strong> aiuta identificando e risolvendo problemi CORS provando diverse configurazioni.",
        
        "<strong>Negoziazione contenuti</strong>: I servizi web moderni supportano multipli tipi di contenuto, lingue e codifiche. Usando intestazioni come Accept, Accept-Language e Accept-Encoding, puoi testare come il server risponde a diverse preferenze client.",
        
        "<strong>Ottimizzazione caching</strong>: Intestazioni di cache configurate correttamente possono migliorare significativamente le prestazioni. Con il nostro <strong>gestore di intestazioni</strong>, puoi sperimentare direttive Cache-Control, configurazioni ETag e intestazioni condizionali per trovare la strategia ottimale.",
        
        "<strong>Configurazione sicurezza</strong>: Implementare intestazioni di sicurezza come Content-Security-Policy, Strict-Transport-Security e X-Content-Type-Options è cruciale. Questo strumento ti permette di costruire e validare queste complesse intestazioni prima del deployment.",
        
        "<strong>Generazione client API</strong>: Dopo aver completato il set di intestazioni, puoi esportare snippet di codice pronti all'uso in vari linguaggi per implementare facilmente le stesse intestazioni in applicazioni, comandi cURL o strumenti di test."
      ]
    }
  },
  faq: {
    title: "Domande Frequenti su HTTP Headers",
    items: [
      {
        question: "Cosa sono le intestazioni HTTP e perché sono importanti?",
        answer: "Le intestazioni HTTP sono coppie nome-valore inviate dal client (browser, API client) al server come parte di una richiesta HTTP. Forniscono metadati essenziali su richiesta, capacità e preferenze client.<br><br>Sono importanti perché:<br><br>• Controllano meccanismi di <strong>autenticazione/autorizzazione</strong><br>• Gestiscono <strong>comportamento cache</strong> per prestazioni<br>• Abilitano <strong>negoziazione contenuti</strong> (formati, lingue, codifiche)<br>• Configurano <strong>richieste cross-origin</strong> e politiche sicurezza<br>• Forniscono <strong>contesto client</strong> come user agent e referrer<br><br>Senza intestazioni appropriate, molte funzionalità web moderne non funzionerebbero, le API mancherebbero di controlli sicurezza e le prestazioni sarebbero compromesse."
      },
      {
        question: "Quali sono le differenze tra Content-Type, Authorization e Accept?",
        answer: "Queste intestazioni servono scopi diversi:<br><br><strong>Content-Type</strong>: Specifica il media type del corpo richiesta (quando invii dati) o tipi di contenuto che il client può comprendere. Valori comuni:<br>• <code>application/json</code> per dati JSON<br>• <code>application/x-www-form-urlencoded</code> per form data<br>• <code>multipart/form-data</code> per upload file<br><br><strong>Authorization</strong>: Contiene credenziali per autenticare il client. Formati comuni:<br>• <code>Bearer eyJhbGc...</code> per token JWT/OAuth<br>• <code>Basic dXNlcm5hbWU6cGFzc3dvcmQ=</code> per autenticazione base<br>• <code>ApiKey 12345abcde...</code> per chiavi API<br><br><strong>Accept</strong>: Indica tipi di contenuto che il client può elaborare. Permette al server di fornire il formato più adatto. Esempi:<br>• <code>application/json</code> per ricevere JSON<br>• <code>text/html</code> per contenuto HTML<br>• <code>*/*</code> per accettare qualsiasi tipo<br><br>Usare correttamente queste intestazioni assicura scambio dati appropriato, autenticazione sicura e delivery ottimale."
      },
      {
        question: "Come verifico se le mie intestazioni funzionano?",
        answer: "Per testare efficacemente:<br><br>1. <strong>Usa il nostro editor</strong> per costruire il set di intestazioni ed esportalo come comando cURL o snippet da eseguire.<br><br>2. <strong>Strumenti browser</strong>: La maggior parte include tool di rete che mostrano tutte le intestazioni richiesta/risposta. Verifica che siano inviate come previsto.<br><br>3. <strong>Servizi test API</strong>: Strumenti come Postman o Insomnia permettono di impostare intestazioni personalizzate e verificare l'intero ciclo richiesta/risposta.<br><br>4. <strong>Servizi echo</strong>: Endpoint come httpbin.org riflettono i dettagli della tua richiesta, facilitando la validazione.<br><br>5. <strong>Log server</strong>: Se accessibili, spesso registrano intestazioni in ingresso.<br><br>Problemi comuni da verificare:<br>• Maiuscole/minuscole errate (sebbene HTTP sia case-insensitive, alcune implementazioni sono rigide)<br>• Token Authorization mancanti o malformati<br>• Content-Type non corrispondente al contenuto effettivo<br>• Configurazione CORS errata per richieste cross-origin"
      },
      {
        question: "Posso salvare e riutilizzare configurazioni per diversi progetti?",
        answer: "Sebbene lo strumento online non abbia storage persistente, puoi salvare e riutilizzare configurazioni in questi modi:<br><br>1. <strong>Esporta come codice</strong>: Genera snippet nel linguaggio preferito (JavaScript, Python, cURL) da salvare in repository o documentazione.<br><br>2. <strong>Copia come testo raw</strong>: Salva il formato raw in file di testo o sistemi di documentazione.<br><br>3. <strong>Estensioni browser</strong>: Diverse estensioni per Chrome/Firefox permettono di salvare set di intestazioni per domini/progetti diversi.<br><br>4. <strong>Piattaforme API</strong>: Strumenti come Postman/Insomnia offrono funzionalità workspace per organizzare configurazioni.<br><br>5. <strong>Variabili d'ambiente</strong>: Per workflow di sviluppo, definisci intestazioni come variabili in file .env o pipeline CI/CD.<br><br>Per team che lavorano su API complesse, consigliamo un repository centrale con configurazioni standard per diversi ambienti (dev, test, produzione)."
      },
      {
        question: "Quali errori comuni evitare con le intestazioni HTTP?",
        answer: "Attenzione a queste insidie:<br><br>1. <strong>Intestazioni sicurezza mancanti</strong>: Omettendo Content-Security-Policy, X-Content-Type-Options o Strict-Transport-Security si espone ad attacchi.<br><br>2. <strong>Content-Type errato</strong>: Un Content-Type non corrispondente al formato effettivo causa errori di parsing.<br><br>3. <strong>Fuga dati Authorization</strong>: Inviare token a servizi terzi o registrarli crea rischi sicurezza.<br><br>4. <strong>Intestazioni CORS mancanti</strong>: Per risorse cross-origin, Access-Control-Allow-* configurati male causano fallimenti.<br><br>5. <strong>Intestazioni ridondanti/contrastanti</strong>: Multipli header che controllano lo stesso comportamento con valori diversi producono risultati imprevedibili.<br><br>6. <strong>Sensibilità maiuscole</strong>: Sebbene i nomi header siano case-insensitive, alcune implementazioni sono rigide.<br><br>7. <strong>Intestazioni troppo permissive</strong>: Valori come Access-Control-Allow-Origin: * o politiche CSP troppo ampie possono creare vulnerabilità.<br><br>8. <strong>Limiti dimensione</strong>: Alcuni server limitano la dimensione totale delle intestazioni (tipicamente 8KB). Cookie o token molto grandi possono superarli."
      }
    ]
  },
  guide: {
    title: "Come usare l'Editor Intestazioni: Guida Passo-Passo",
    step1: "<strong>Aggiungi intestazioni</strong>: Clicca \"Aggiungi intestazione\" per creare nuove voci. Ogni intestazione ha nome (es. \"Content-Type\") e valore. Puoi aggiungere quante intestazioni necessarie. Usa i pulsanti preset per aggiungere rapidamente intestazioni comuni.",
    step2: "<strong>Inserisci nome e valore</strong>: Per ogni intestazione, inserisci nome appropriato (seguendo convenzioni HTTP) e valore corrispondente. Lo strumento valida automaticamente gli input.",
    step3: "<strong>Modifica multipla</strong>: Per aggiungere più intestazioni insieme, usa l'area di testo \"Modifica multipla\" in fondo al pannello.",
    step4: "<strong>Consulta la guida</strong>: Se incerto su quali valori usare, fai riferimento alla sezione guida a destra. Clicca su nomi come \"Content-Type\" per vedere valori comuni e aggiungerli al tuo set.",
    step5: "<strong>Scegli formato esportazione</strong>: Dopo aver configurato le intestazioni, seleziona il formato di esportazione desiderato dal menu a tendina. Opzioni includono testo raw, comandi cURL e vari linguaggi di programmazione.",
    step6: "<strong>Visualizza output formattato</strong>: Lo strumento genera codice o testo formattato basato sulle intestazioni e formato selezionato, pronto per l'uso.",
    step7: "<strong>Copia il risultato</strong>: Clicca \"Copia\" per trasferire l'output negli appunti, da incollare in editor di codice, terminale o strumenti di test."
  },
  conclusion: "L'Editor Intestazioni HTTP semplifica il processo complesso di creazione, testing e implementazione di intestazioni, fornendo un'interfaccia intuitiva con supporto a multipli formati di esportazione. Con requisiti di sicurezza e prestazioni web in continua evoluzione, configurare correttamente le intestazioni è sempre più cruciale. Questo strumento aiuta ad assicurare che le tue applicazioni seguano le migliori pratiche per comunicazione HTTP, sicurezza e ottimizzazioni."
}
