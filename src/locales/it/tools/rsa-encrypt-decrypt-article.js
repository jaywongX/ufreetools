export default {
  title: "Guida allo strumento RSA Crittografia/Decrittografia: Proteggi i tuoi dati con la crittografia a chiave pubblica",
  introTitle: "Comprendere la crittografia RSA",
  intro1: "La crittografia RSA è un potente algoritmo asimmetrico che utilizza una coppia di chiavi - pubblica e privata - per proteggere dati sensibili. Il nostro <strong>strumento RSA</strong> fornisce un'interfaccia user-friendly per eseguire operazioni di crittografia e decrittografia RSA direttamente nel browser, senza inviare i tuoi dati a server esterni.",
  intro2: "A differenza dei metodi di crittografia simmetrica che usano una singola chiave condivisa, la crittografia RSA utilizza coppie di chiavi matematicamente correlate, dove i dati cifrati con la chiave pubblica possono essere decifrati solo con la corrispondente chiave privata. Questo rende RSA ideale per comunicazioni sicure e firme digitali in varie applicazioni.",
  intro3: "Il nostro strumento supporta la generazione di chiavi con diverse lunghezze (1024, 2048, 3072 e 4096 bit), diversi metodi di padding (PKCS#1 v1.5 e OAEP) e vari formati di input/output (testo, Base64 ed esadecimale). Questa flessibilità lo rende adatto sia per scopi educativi che per esigenze crittografiche pratiche.",
  
  useCasesTitle: "Applicazioni pratiche della crittografia RSA",
  useCase1: "<strong>Comunicazioni sicure</strong>: Cifra messaggi riservati utilizzando la chiave pubblica del destinatario, garantendo che solo chi possiede la chiave privata corrispondente possa decifrarli.",
  useCase2: "<strong>Verifica certificati</strong>: Genera coppie di chiavi per testare implementazioni di certificati digitali, infrastrutture PKI o configurazioni SSL/TLS.",
  useCase3: "<strong>Protezione dati</strong>: Cifra file sensibili prima di archiviarli su servizi cloud o trasmetterli su reti non sicure, mantenendo la riservatezza anche se i dati cifrati vengono intercettati.",
  useCase4: "<strong>Scopi educativi</strong>: Studia e dimostra i principi della crittografia a chiave pubblica, esplorando come funziona la crittografia RSA nella pratica con diverse dimensioni di chiave e metodi di padding.",
  
  faqTitle: "Domande frequenti",
  
  faq1q: "In cosa differisce RSA dagli altri algoritmi di crittografia?",
  faq1a: "RSA è un <strong>algoritmo di crittografia asimmetrica</strong> che utilizza una coppia chiave pubblica-privata, mentre algoritmi simmetrici come AES utilizzano una singola chiave condivisa. Questo approccio a coppia di chiavi consente a RSA di fornire scambi sicuri di chiavi e firme digitali, funzionalità che gli algoritmi simmetrici non possono offrire. Tuttavia, RSA è computazionalmente più intensivo e viene tipicamente utilizzato per cifrare piccole quantità di dati o per lo scambio di chiavi, mentre gli algoritmi simmetrici sono più veloci e vengono utilizzati per la crittografia di grandi quantità di dati.",
  
  faq2q: "Quale dimensione di chiave RSA dovrei scegliere per la massima sicurezza?",
  faq2a: "Per requisiti di sicurezza moderni, consigliamo di utilizzare almeno chiavi RSA a 2048 bit. Le chiavi a 1024 bit sono considerate vulnerabili ad attacchi ben finanziati e dovrebbero essere evitate per dati sensibili. Le chiavi a 3072 bit offrono un livello di sicurezza paragonabile alla crittografia simmetrica a 128 bit (raccomandata dal NIST per la protezione oltre il 2030), mentre le chiavi a 4096 bit forniscono un ulteriore margine di sicurezza per applicazioni altamente sensibili. Tuttavia, chiavi più grandi richiedono più risorse computazionali per la generazione e le operazioni di crittografia/decrittografia.",
  
  faq3q: "Qual è la differenza tra padding PKCS#1 v1.5 e OAEP?",
  faq3a: "PKCS#1 v1.5 è uno schema di padding più vecchio che, sebbene ampiamente supportato, presenta vulnerabilità note ad alcuni tipi di attacchi (come quello di Bleichenbacher). <strong>OAEP (Optimal Asymmetric Encryption Padding)</strong> è uno schema di padding più recente e sicuro, progettato per fornire sicurezza semantica contro attacchi a testo cifrato scelto adattivo. Per nuove applicazioni, consigliamo di utilizzare OAEP quando possibile, ma PKCS#1 v1.5 può ancora essere utilizzato per compatibilità con sistemi legacy.",
  
  faq4q: "Come posso archiviare e condividere in sicurezza le mie chiavi RSA?",
  faq4a: "Per le <strong>chiavi private RSA</strong>, conservale sempre con controlli di accesso rigorosi, preferibilmente cifrate, e in modo sicuro. Non condividere mai chiavi private o archiviarle in chiaro su sistemi non sicuri. Per le <strong>chiavi pubbliche RSA</strong>, sebbene siano progettate per essere condivise, verifica l'autenticità delle chiavi pubbliche ricevute da altri per prevenire attacchi man-in-the-middle. Il nostro strumento consente di esportare chiavi in formato PEM standard, che può essere importato nella maggior parte delle applicazioni e librerie crittografiche.",
  
  faq5q: "Quali sono i limiti della crittografia RSA basata su browser?",
  faq5a: "Strumenti basati su browser come il nostro hanno alcune limitazioni: (1) <strong>Vincoli prestazionali</strong> - La generazione di chiavi e la crittografia/decrittografia di file grandi possono essere più lente rispetto alle applicazioni locali; (2) <strong>Limitazioni di memoria</strong> - I browser limitano la quantità di memoria utilizzabile, il che può influenzare operazioni molto grandi; (3) <strong>Limitazioni delle librerie crittografiche</strong> - Utilizziamo librerie standard del settore (Forge), ma le implementazioni nei browser possono differire leggermente. Per applicazioni di sicurezza critiche che richiedono alte prestazioni o l'elaborazione di file molto grandi, considera l'uso di software crittografici dedicati.",
  
  tutorialTitle: "Guida passo-passo all'uso dello strumento RSA Crittografia/Decrittografia",
  tutorialIntro: "Segui questa guida completa per utilizzare efficacemente il nostro strumento RSA per proteggere i tuoi dati sensibili:",
  
  step1Title: "Passo 1: Genera o importa una coppia di chiavi RSA",
  step1: "Per iniziare, genera una nuova coppia di chiavi RSA o importa chiavi esistenti. Per generare nuove chiavi, seleziona la dimensione desiderata (per sicurezza, consigliamo 2048 bit o superiore) e clicca il pulsante <strong>Genera coppia di chiavi</strong>. Lo strumento creerà chiavi pubbliche e private in formato PEM. In alternativa, puoi importare chiavi esistenti cliccando il pulsante Importa o utilizzando l'area di trascinamento nei campi chiave pubblica o privata.",
  
  step2Title: "Passo 2: Crittografa dati con la chiave pubblica",
  step2: "Per crittografare dati, assicurati di avere una chiave pubblica nel campo corrispondente. Seleziona la modalità <strong>Crittografia</strong>, scegli il metodo di padding preferito (per sicurezza consigliamo OAEP) e seleziona il formato di input. Inserisci il messaggio in chiaro che desideri crittografare nel campo di input. Puoi anche importare testo in chiaro da file utilizzando il pulsante Importa o l'area di trascinamento. Clicca il pulsante <strong>Crittografa</strong> per elaborare i tuoi dati. L'output crittografato verrà visualizzato in formato Base64 per default, ma puoi passare al formato esadecimale utilizzando le opzioni del formato di output.",
  
  step3Title: "Passo 3: Decrittografa dati con la chiave privata",
  step3: "Per decrittografare dati precedentemente crittografati, assicurati di avere la chiave privata corretta nel campo corrispondente. Seleziona la modalità <strong>Decrittografia</strong>, scegli lo stesso metodo di padding utilizzato per la crittografia e seleziona l'appropriato formato di input (solitamente Base64 per dati crittografati). Incolla il testo cifrato nel campo di input o importalo da file. Clicca il pulsante <strong>Decrittografa</strong> per recuperare il testo originale. L'output decrittografato apparirà nel campo di output e può essere copiato o scaricato secondo necessità.",
  
  step4Title: "Passo 4: Esporta e gestisci le chiavi",
  step4: "Dopo aver generato o importato chiavi, puoi esportarle per uso futuro cliccando i pulsanti <strong>Esporta</strong> accanto a ciascun campo chiave. Questo salva le chiavi in formato PEM standard, compatibile con la maggior parte delle applicazioni e librerie crittografiche. Ricorda di archiviare le tue chiavi private in modo sicuro e di non condividerle mai con parti non autorizzate. Le chiavi pubbliche, invece, possono essere liberamente distribuite a chiunque abbia bisogno di crittografare dati per te.",
  
  relatedToolsTitle: "Strumenti crittografici correlati",
  relatedTool1: "Calcolatore hash",
  relatedTool1Desc: "Genera valori hash sicuri utilizzando vari algoritmi come SHA-256, SHA-512 e altri.",
  relatedTool2: "Generatore password",
  relatedTool2Desc: "Crea password forti e casuali per migliorare la tua sicurezza online.",
  relatedTool3: "Strumento crittografia simmetrica",
  relatedTool3Desc: "Crittografa dati con algoritmi simmetrici come AES per un'elaborazione più rapida di file di grandi dimensioni.",
  relatedTool4: "Codificatore/Decodificatore Base64",
  relatedTool4Desc: "Converti dati binari in formato Base64 e viceversa per trasmissioni sicure.",
  
  resourcesTitle: "Risorse aggiuntive",
  resource1: "NIST FIPS 186-4: Digital Signature Standard (DSS)",
  resource2: "RFC 8017: PKCS #1: RSA Cryptography Specifications Version 2.2",
  resource3: "NIST SP 800-57: Recommendation for Key Management"
}
