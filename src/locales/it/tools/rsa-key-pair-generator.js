export default {
  name: "Generatore di coppie di chiavi RSA",
  description: "Genera in batch coppie di chiavi RSA con lunghezza personalizzabile, mostrando chiaramente la struttura delle chiavi pubbliche/private, inclusi modulo (n), esponente pubblico (e), esponente privato (d), fattori primi (p, q), inverso modulo dell'esponente privato (dp, dq, coef) ecc.",
  settings: "Impostazioni generazione",
  keySize: "Lunghezza chiave",
  bits: "bit",
  keySizeHint: "La lunghezza della chiave deve essere compresa tra 256 e 16384 bit e multipla di 8",
  outputFormat: "Formato output",
  keyPairCount: "Numero di coppie di chiavi",
  generate: "Genera coppie di chiavi",
  generating: "Generazione in corso",
  results: "Coppie di chiavi generate",
  noResults: "Nessuna coppia di chiavi generata. Configura le impostazioni e clicca \"Genera coppie di chiavi\".",
  keyPair: "Coppia di chiavi",
  publicKey: "Chiave pubblica",
  privateKey: "Chiave privata",
  components: "Componenti chiave",
  exportAllAsPem: "Esporta tutto in formato PEM",
  exportAllAsPkcs8: "Esporta tutto in formato PKCS#8",
  copyAll: "Copia tutto",
  copied: "Copiato negli appunti!",
  generationError: "Errore durante la generazione delle coppie di chiavi. Riprova.",
  aboutRsa: "Informazioni sulle coppie di chiavi RSA",
  rsaDescription: "RSA (Rivest–Shamir–Adleman) è un algoritmo crittografico a chiave pubblica che utilizza una coppia di chiavi: la chiave pubblica per cifrare e quella privata per decifrare. RSA è ampiamente utilizzato per trasmissione sicura di dati, firme digitali e scambio di chiavi.",
  keySizeTitle: "Raccomandazioni lunghezza chiave",
  keySize1024: "1024 bit: sconsigliato per dati sensibili (considerato poco sicuro)",
  keySize2048: "2048 bit: lunghezza minima raccomandata per uso generico",
  keySize4096: "4096 bit: raccomandato per massima sicurezza o applicazioni sensibili",
  keyComponentsTitle: "Descrizione componenti chiave",
  modulusDesc: "Prodotto di due numeri primi grandi p e q",
  publicExponentDesc: "Esponente pubblico (solitamente un numero primo piccolo, spesso 65537)",
  privateExponentDesc: "Esponente privato utilizzato per la decrittazione",
  primesDesc: "I due numeri primi grandi utilizzati per generare le chiavi",
  crtParamsDesc: "Parametri del teorema cinese del resto, utilizzati per accelerare il processo di decrittazione",
  article: {
    title: "Generatore di coppie di chiavi RSA: crea chiavi crittografiche sicure online",
    intro: "<strong>Generatore di coppie di chiavi RSA</strong> è un potente strumento online che genera coppie di chiavi pubbliche/private RSA ad alta sicurezza con lunghezza personalizzabile (da 256 a 16384 bit). RSA (Rivest-Shamir-Adleman) è uno degli algoritmi di crittografia asimmetrica più utilizzati al mondo, alla base delle comunicazioni sicure su Internet e nei sistemi aziendali. Il nostro strumento rende semplice, intuitivo e sicuro creare questi componenti crittografici essenziali.",
    
    featuresTitle: "Funzionalità principali del generatore RSA",
    feature1: "<strong>Opzioni flessibili di lunghezza chiave</strong>: genera chiavi RSA da 256 a 16384 bit per soddisfare le tue esigenze di sicurezza specifiche.",
    feature2: "<strong>Multipli formati di output</strong>: esporta chiavi in formati standard del settore tra cui PEM, PKCS#8, esadecimale e codifica Base64.",
    feature3: "<strong>Generazione in batch</strong>: crea più coppie di chiavi contemporaneamente per scopi di test o distribuzione.",
    feature4: "<strong>Visualizzazione componenti</strong>: ispeziona i componenti matematici delle chiavi, inclusi modulo, esponenti, fattori primi e parametri CRT.",
    feature5: "<strong>Elaborazione lato client</strong>: tutta la generazione delle chiavi avviene nel tuo browser, i materiali crittografici sensibili non lasciano mai il tuo dispositivo.",
    
    useCasesTitle: "Casi d'uso pratici per le coppie di chiavi RSA",
    
    useCase1Title: "Comunicazioni sicure e crittografia dati",
    useCase1Desc: "Le coppie di chiavi RSA sono fondamentali per stabilire canali di comunicazione sicuri su reti non protette. La chiave pubblica può essere condivisa liberamente, permettendo ad altri di cifrare messaggi che solo tu, con la chiave privata corrispondente, puoi decifrare. Questo sistema di <strong>crittografia RSA</strong> supporta tecnologie come SSL/TLS per siti HTTPS, sistemi di posta elettronica sicura e reti private virtuali (VPN).",
    
    useCase2Title: "Firme digitali e autenticazione documenti",
    useCase2Desc: "RSA abilita le <strong>firme digitali</strong>, permettendoti di firmare documenti con la tua chiave privata in modo che chiunque abbia la tua chiave pubblica possa verificare che il documento sia stato effettivamente firmato da te e non sia stato alterato. Questo è ampiamente utilizzato in certificati di firma codice, transazioni finanziarie, documenti legali e tecnologia blockchain.",
    
    useCase3Title: "Autenticazione e controllo accessi",
    useCase3Desc: "Le coppie di chiavi RSA forniscono meccanismi robusti per i sistemi di <strong>autenticazione sicura</strong>. SSH (Secure Shell) utilizza chiavi RSA per l'accesso remoto a server senza password. Anche i certificati client in ambienti come l'autenticazione TLS reciproca si basano su coppie di chiavi RSA per verificare in sicurezza l'identità dei client.",
    
    useCase4Title: "Comunicazioni API sicure e firma token",
    useCase4Desc: "Le applicazioni moderne e i microservizi utilizzano spesso chiavi RSA per <strong>proteggere le comunicazioni API</strong> e firmare token di autenticazione come JWT (JSON Web Token). La natura asimmetrica di RSA consente la verifica sicura dei token in sistemi distribuiti senza dover condividere chiavi.",
    
    relatedToolsText: "Potresti trovare utili anche questi strumenti crittografici correlati:",
    relatedTool1: "Calcolatore hash - genera e verifica valori hash per l'integrità dei dati",
    relatedTool2: "Generatore codici fiscali aziendali cinesi - crea codici di registrazione validi per aziende cinesi",
    
    tutorialTitle: "Come utilizzare il generatore di coppie di chiavi RSA",
    
    step1Title: "Passo 1: Seleziona la lunghezza della chiave",
    step1Desc: "Per prima cosa scegli la lunghezza desiderata della chiave (in bit). Per scopi generici di sicurezza, si raccomanda di utilizzare come minimo chiavi a 2048 bit. Per applicazioni che richiedono maggiore sicurezza, scegli chiavi a 4096 bit o superiori. Ricorda che chiavi più grandi offrono maggiore sicurezza ma richiedono più risorse computazionali per la generazione e l'uso.",
    
    step2Title: "Passo 2: Seleziona il formato di output",
    step2Desc: "Scegli il formato di output preferito dal menu a discesa. PEM è il formato più compatibile, riconoscibile dall'intestazione '-----BEGIN RSA PRIVATE KEY-----'. PKCS#8 è un formato più moderno supportato dalla maggior parte dei sistemi attuali. Le codifiche esadecimali e Base64 sono utili per specifiche esigenze di programmazione o integrazione di sistemi.",
    
    step3Title: "Passo 3: Specifica il numero di coppie di chiavi",
    step3Desc: "Se hai bisogno di più coppie di chiavi, regola la quantità usando il campo di input. Questo è particolarmente utile per ambienti di test o distribuzioni simultanee di più sistemi di sicurezza.",
    
    step4Title: "Passo 4: Genera e proteggi le tue chiavi",
    step4Desc: "Clicca il pulsante \"Genera coppie di chiavi\" e attendi il completamento del processo. Per lunghezze di chiave maggiori, questo potrebbe richiedere del tempo. Una volta generate, puoi visualizzare, copiare o esportare le tue chiavi. Assicurati di archiviare in modo sicuro le tue chiavi private e di non condividerle mai con parti non autorizzate.",
    
    faqTitle: "Domande frequenti sulle coppie di chiavi RSA",
    
    faq1Question: "Cosa sono le coppie di chiavi RSA? Perché dovrei generarle?",
    faq1Answer: "Una coppia di chiavi RSA consiste in una chiave pubblica e una privata, fondamentali per la crittografia asimmetrica. La chiave pubblica serve per cifrare dati o verificare firme, mentre quella privata per decifrare dati o creare firme. È necessario generare coppie di chiavi RSA per implementare funzionalità come comunicazioni sicure, crittografia dati, firme digitali e autenticazione.",
    
    faq2Question: "Quale lunghezza di chiave RSA dovrei scegliere?",
    faq2Answer: "Per garantire la sicurezza, si raccomanda attualmente una lunghezza minima di chiave RSA di 2048 bit. Per uso generico, chiavi a 2048 bit offrono sufficiente sicurezza; per dati sensibili che richiedono protezione a lungo termine o sistemi ad alta sicurezza, si consigliano chiavi a 4096 bit o superiori. Chiavi più lunghe offrono maggiore sicurezza ma consumano più risorse computazionali.",
    
    faq3Question: "Qual è la differenza tra formato PEM e PKCS#8?",
    faq3Answer: "PEM e PKCS#8 sono due comuni modalità di codifica per archiviare e trasmettere chiavi RSA. Il formato PEM utilizza la codifica BASE64, con file chiave che iniziano con '-----BEGIN RSA PRIVATE KEY-----'; PKCS#8 è un formato più generico in grado di archiviare vari tipi di chiavi private, con file che iniziano con '-----BEGIN PRIVATE KEY-----'. La maggior parte dei sistemi moderni supporta PKCS#8, mentre alcuni sistemi legacy potrebbero supportare solo il tradizionale formato PEM.",
    
    faq4Question: "Come posso archiviare in sicurezza le chiavi private RSA generate?",
    faq4Answer: "Le chiavi private RSA devono essere adeguatamente protette da accessi non autorizzati. I metodi di archiviazione sicura consigliati includono: utilizzare un password manager, dispositivi di archiviazione cifrati, moduli di sicurezza hardware (HSM) o sistemi di gestione delle chiavi. I file delle chiavi private dovrebbero essere protetti con password complesse e impostare appropriati permessi di accesso. Inoltre, è importante creare backup, assicurandosi che anche questi siano adeguatamente protetti.",
    
    faq5Question: "Per quali applicazioni specifiche posso utilizzare le coppie di chiavi RSA generate?",
    faq5Answer: "Le coppie di chiavi RSA trovano ampia applicazione in vari scenari di sicurezza: certificati SSL/TLS e sicurezza di siti HTTPS; accesso remoto sicuro via SSH; verifica di firme digitali per autenticità di file o codice; comunicazioni email sicure (S/MIME); VPN aziendali e sistemi di autenticazione sicura; portafogli per blockchain e valute digitali; e autenticazione API e generazione di token sicuri.",
    
    referencesTitle: "Riferimenti e letture approfondite",
    reference1: "NIST Special Publication 800-57: Raccomandazioni per la gestione delle chiavi",
    reference2: "RFC 8017: PKCS #1: Specifiche di crittografia RSA versione 2.2",
    reference3: "FIPS 186-5: Standard per firme digitali (DSS)",
    
    conclusionTitle: "Conclusione",
    conclusionText: "<strong>Generatore di coppie di chiavi RSA</strong> fornisce un metodo semplice e sicuro per creare chiavi crittografiche essenziali per la sicurezza digitale moderna. Che tu stia proteggendo comunicazioni di rete, implementando sistemi di autenticazione o firmando documenti sensibili, coppie di chiavi RSA generate correttamente sono alla base di queste misure di sicurezza. Utilizzando il nostro strumento, puoi generare rapidamente chiavi con la giusta robustezza e formato per soddisfare le tue specifiche esigenze applicative, garantendo al contempo che i tuoi materiali crittografici rimangano privati e sicuri."
  }
}