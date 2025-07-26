export default {
    title: "Generatore di coppie di chiavi SM2: guida completa allo standard crittografico cinese",
    introTitle: "Cos'è il generatore di coppie di chiavi SM2 e a cosa serve?",
    introPara1: "<strong>Generatore di coppie di chiavi SM2</strong> è uno strumento crittografico specializzato che crea coppie di chiavi pubbliche/private sicure secondo lo standard nazionale cinese GB/T 32918-2016. Diversamente da standard internazionali come RSA o ECC, SM2 è stato specificamente progettato e approvato dalle autorità di regolamentazione cinesi, rendendolo essenziale per le organizzazioni che operano nel quadro normativo cinese.",
    introPara2: "Il nostro <strong>strumento di generazione chiavi SM2</strong> permette agli utenti di generare facilmente coppie di chiavi SM2 crittograficamente sicure senza bisogno di conoscenze specialistiche sull'algoritmo sottostante. Lo strumento supporta vari formati di output tra cui PEM, HEX e Base64, rendendolo versatile in diversi ambienti di sviluppo e sicurezza.",
    
    useCaseTitle: "Principali scenari di utilizzo",
    useCase1: "<strong>Conformità servizi finanziari</strong>: banche e fintech che operano in Cina devono utilizzare la crittografia SM2 per proteggere transazioni finanziarie e dati dei clienti in conformità con i requisiti normativi.",
    useCase2: "<strong>Sistemi informativi governativi e aziendali</strong>: agenzie governative cinesi e grandi imprese devono implementare SM2 per comunicazioni sicure, firma di documenti e autenticazione.",
    useCase3: "<strong>E-commerce transfrontaliero</strong>: aziende che commerciano con la Cina spesso necessitano di implementare tecnologie crittografiche SM2 per scambi sicuri di dati e conformità normativa.",
    useCase4: "<strong>Sicurezza applicazioni mobili</strong>: sviluppatori che creano app per il mercato cinese necessitano di coppie di chiavi SM2 per implementare meccanismi di autenticazione sicura e protezione dei dati.",
    standardInfo: "L'algoritmo SM2 fa parte della suite di algoritmi crittografici SM (Shangmi) che include SM2 (crittografia a chiave pubblica), SM3 (hash) e SM4 (crittografia simmetrica). Con la Cina che continua a sviluppare il proprio framework di cybersecurity indipendente dagli standard internazionali, questi standard stanno diventando sempre più importanti.",
    
    tutorialTitle: "Come usare il generatore di coppie di chiavi SM2",
    tutorialIntro: "Seguire questa guida passo-passo ti aiuterà a generare coppie di chiavi SM2 sicure in modo rapido ed efficiente. Ogni coppia di chiavi generata include i componenti di chiave pubblica e privata necessari per operazioni di cifratura, decifratura, firma e verifica.",
    
    step1Title: "Passo 1: Seleziona i parametri delle chiavi",
    step1Desc: "Lo standard SM2 utilizza una lunghezza fissa di 256 bit per le chiavi, offrendo forte sicurezza mantenendo buone prestazioni. Questa è pre-selezionata nel nostro strumento e non può essere modificata, in quanto conforme allo standard ufficiale.",
    
    step2Title: "Passo 2: Scegli il formato di output",
    step2Desc: "Seleziona il formato di output preferito: <ul><li><strong>PEM</strong>: formato standard per certificati e chiavi crittografiche, facilmente riconoscibile dalla maggior parte di sistemi e applicazioni.</li><li><strong>HEX</strong>: rappresentazione esadecimale, adatta per implementazioni dirette nel codice.</li><li><strong>Base64</strong>: rappresentazione compatta, comunemente usata in applicazioni web e comunicazioni API.</li></ul>",
    
    step3Title: "Passo 3: Specifica il numero di coppie di chiavi",
    step3Desc: "Decidi quante coppie di chiavi ti servono. Questo è particolarmente utile per testing o configurazione di multipli canali sicuri.",
    
    step4Title: "Passo 4: Genera e gestisci le chiavi",
    step4Desc: "Clicca il pulsante \"Genera coppie di chiavi\" e attendi il completamento del processo. Una volta generate, puoi visualizzare, copiare o esportare le chiavi. Assicurati di conservare in sicurezza le tue chiavi private e di non condividerle mai con parti non autorizzate.",
    
    relatedToolsTitle: "Strumenti crittografici correlati",
    relatedToolsDesc: "Per implementare misure di sicurezza complete, potresti voler esplorare questi strumenti complementari:",
    relatedTool1: "Generatore di coppie di chiavi RSA - Genera chiavi RSA conformi a standard crittografici internazionali",
    relatedTool2: "Calcolatore di hash - Calcola vari valori hash, incluso SM3 per la verifica dell'integrità dei dati",
    
    faqTitle: "Domande frequenti sulla crittografia SM2",
    faq1Question: "Quali sono le differenze tra SM2 e altri algoritmi a chiave pubblica come RSA?",
    faq1Answer: "SM2 è un algoritmo a chiave pubblica basato su curve ellittiche sviluppato dalle autorità cinesi. Rispetto a RSA, SM2 offre sicurezza comparabile ma con lunghezze di chiave più corte (256 bit per SM2 vs 2048+ bit per RSA), risultando in migliori prestazioni. La differenza principale è che SM2 è specificamente progettato per conformità normativa in Cina, mentre RSA è più diffuso a livello internazionale. Anche le basi matematiche differiscono: SM2 si basa sulla crittografia a curve ellittiche, mentre RSA sulla difficoltà di fattorizzare grandi numeri primi.",
    
    faq2Question: "La crittografia SM2 è sicura per applicazioni commerciali internazionali?",
    faq2Answer: "Sì, SM2 offre una robusta sicurezza crittografica conforme agli standard internazionali. Con la sua lunghezza di chiave a 256 bit, fornisce una sicurezza equivalente a chiavi RSA a 3072 bit. SM2 è stato sottoposto ad ampia analisi crittografica dalle autorità cinesi ed è considerato resistente ad attacchi conosciuti. Tuttavia, per interoperabilità internazionale, alcune organizzazioni potrebbero preferire standard internazionali ampiamente adottati come RSA o ECDSA. La scelta dipende solitamente dai tuoi specifici requisiti di conformità e dalla localizzazione dell'applicazione.",
    
    faq3Question: "Come verificare che la mia coppia di chiavi SM2 funzioni correttamente?",
    faq3Answer: "Per testare la tua coppia di chiavi SM2, puoi eseguire un semplice test di cifratura/decifratura: usa la chiave pubblica per cifrare un messaggio di test, poi usa la corrispondente chiave privata per decifrarlo. Se il messaggio decifrato corrisponde all'originale, la tua coppia di chiavi funziona correttamente. In alternativa, puoi usare la chiave privata per firmare un messaggio e la chiave pubblica per verificare la firma. Il nostro strumento garantisce che tutte le coppie di chiavi generate siano matematicamente valide secondo le specifiche dello standard SM2.",
    
    faq4Question: "Le chiavi SM2 possono essere usate in implementazioni SSL/TLS standard?",
    faq4Answer: "Il supporto per SM2 in SSL/TLS dipende dall'implementazione specifica. La Cina ha sviluppato una variante chiamata TLCP (Transport Layer Cryptography Protocol) che utilizza algoritmi SM2/SM3/SM4 al posto degli standard internazionali. I principali browser in Cina generalmente supportano questi standard. Per sistemi internazionali, potresti aver bisogno di librerie specializzate o configurazioni per abilitare il supporto SM2. OpenSSL 1.1.1 e versioni successive includono supporto per la crittografia SM2, rendendo più semplice l'integrazione in molti sistemi.",
    
    faq5Question: "Cosa rappresentano i componenti x, y e d in una coppia di chiavi SM2?",
    faq5Answer: "In una coppia di chiavi SM2, questi componenti rappresentano importanti valori matematici: <ul><li><strong>x e y</strong>: sono le coordinate del punto sulla curva ellittica che rappresenta la tua chiave pubblica. Insieme formano la chiave pubblica completa che può essere condivisa pubblicamente.</li><li><strong>d</strong>: è la tua chiave privata, un grande numero casuale che deve essere mantenuto segreto. Viene usato per operazioni di decifratura e firma.</li></ul> Diversamente da RSA che ha multipli componenti come p, q, d, e, n, la chiave privata SM2 è più semplice, con solo il valore scalare d, mentre la chiave pubblica consiste nelle coordinate del punto (x,y).",
    
    resourcesTitle: "Risorse aggiuntive",
    resourcesDesc: "Per maggiori informazioni sulla crittografia SM2 e gli standard crittografici cinesi, queste fonti autorevoli forniscono informazioni preziose:",
    resource1: "GB/T 32918-2016 - Pubblicazione ufficiale dello standard SM2 (in cinese)",
    resource2: "Amministrazione statale della crittografia - Documenti normativi ufficiali",
    resource3: "ISO/IEC 14888-3:2018 - Standard internazionale che cita l'algoritmo di firma SM2",
    
    conclusionTitle: "Conclusione",
    conclusionPara: "<strong>Generatore di coppie di chiavi SM2</strong> offre un modo user-friendly per creare chiavi crittograficamente sicure conformi agli standard nazionali cinesi. Che tu stia sviluppando applicazioni per il mercato cinese, implementando canali di comunicazione sicuri o soddisfacendo requisiti normativi, il nostro strumento semplifica il complesso processo di generazione chiavi SM2. Supportando multipli formati di output e fornendo funzionalità complete di gestione chiavi, questo <strong>strumento crittografico SM2</strong> aiuta le organizzazioni a implementare robuste misure di sicurezza mantenendo la conformità con le normative crittografiche cinesi."
}
