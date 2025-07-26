export default {
    title: "Strumento firma digitale SM2 - Generazione e verifica sicura online",
    introduction: {
        title: "Cos'è una firma digitale SM2?",
        p1: "La firma digitale SM2 fa parte dello standard cinese per la crittografia commerciale, un algoritmo crittografico. Il nostro <strong>strumento di verifica firme digitali SM2</strong> fornisce un'interfaccia user-friendly per creare e verificare firme digitali usando l'algoritmo a curva ellittica SM2, che offre una sicurezza equivalente a RSA a 256 bit con dimensioni di chiave più piccole.",
        p2: "Questo strumento online SM2 è progettato per risolvere la sfida di firmare e verificare dati digitali in modo sicuro senza installare software specializzato. Che tu sia uno sviluppatore che implementa la verifica SM2 in applicazioni, un professionista della sicurezza che verifica certificati digitali o un'azienda che deve conformarsi agli standard crittografici cinesi, il nostro strumento offre una soluzione efficiente.",
        p3: "Con l'aumento dell'adozione globale dello standard SM2, specialmente nelle regioni che devono conformarsi alle normative cinesi, avere un <strong>generatore e verificatore di firme digitali SM2</strong> affidabile è cruciale per aziende internazionali e professionisti della sicurezza."
    },
    applications: {
        title: "Scenari pratici per le firme SM2",
        p1: "La verifica SM2 ha numerose applicazioni pratiche in vari settori, specialmente dove l'integrità dei dati e l'autenticazione sono cruciali:",
        scenario1: {
            title: "Fintech e banche",
            description: "Nei servizi finanziari, la <strong>verifica firme SM2 per il banking online</strong> aiuta a proteggere transazioni e mantenere la conformità. Le banche che operano in regioni che richiedono conformità agli standard SM usano firme SM2 per autenticare richieste di transazione, verificare l'identità dei clienti e garantire comunicazioni sicure tra banche."
        },
        scenario2: {
            title: "Settore pubblico e governativo",
            description: "Le agenzie governative che implementano <strong>password SM2 sicure per documenti ufficiali</strong> si affidano a firme digitali per verificare l'autenticità di registri elettronici. Il nostro strumento supporta la verifica di firme su certificati digitali, comunicazioni ufficiali e documenti legali."
        },
        scenario3: {
            title: "E-commerce internazionale e commercio",
            description: "Le aziende impegnate nel <strong>commercio internazionale con verifica firme SM2</strong> usano firme crittografiche per proteggere contratti, verificare fatture e autenticare documenti doganali. Il nostro strumento permette di implementare facilmente processi di verifica SM2 senza conoscenze specialistiche."
        }
    },
    tutorial: {
        title: "Come usare lo strumento SM2",
        intro: "Segui questa guida passo-passo per creare e verificare firme digitali SM2:",
        step1: {
            title: "Passo 1: Gestione chiavi",
            description: "Inserisci la tua chiave privata SM2 (per firmare) e pubblica (per verificare). Puoi incollare chiavi esistenti in vari formati (HEX, PEM, Base64 o DER) o generare nuove chiavi direttamente nello strumento."
        },
        step2: {
            title: "Passo 2: Configura parametro ID",
            description: "Inserisci il parametro ID, un identificatore unico usato nell'algoritmo SM2. Il valore predefinito è \"1234567812345678\", ma puoi personalizzarlo."
        },
        step3: {
            title: "Passo 3: Crea firma",
            description: "Nella sezione firma, inserisci i dati da firmare e seleziona il formato. Clicca \"Firma\" per generare la firma. Lo strumento mostrerà la firma completa e i suoi componenti (valori R e S)."
        },
        step4: {
            title: "Passo 4: Verifica firma",
            description: "Per verificare una firma, inserisci i dati originali e la firma da verificare. Seleziona i formati appropriati e clicca \"Verifica\". Lo strumento controllerà immediatamente la validità della firma."
        }
    },
    specifications: {
        title: "Specifiche tecniche",
        p1: "Il nostro strumento SM2 implementa l'algoritmo a curva ellittica SM2 definito nello standard GM/T 0003-2012 rilasciato dall'Administration of China. Lo strumento è completamente conforme a questi standard.",
        p2: "Le principali caratteristiche tecniche includono:",
        feature1: "Uso fisso dell'algoritmo hash SM3 (256 bit) come richiesto dallo standard",
        feature2: "Supporto per parametri ID personalizzati in vari formati (testo/HEX/Base64)",
        feature3: "Multipli formati di output per la firma (DER/HEX/Base64/PEM)",
        feature4: "Visualizzazione completa dei componenti della firma (valori R e S)",
        feature5: "Supporto per vari formati di chiave (PEM/HEX/Base64/DER)",
        feature6: "Dettagliata segnalazione errori per la risoluzione di problemi"
    },
    faq: {
        title: "Domande frequenti",
        q1: "Qual è la differenza tra firme SM2 e altri algoritmi?",
        a1: "Le firme SM2 sono basate su crittografia a curva ellittica (ECC) e fanno parte dello standard cinese. Rispetto alle firme RSA, le <strong>firme SM2</strong> offrono sicurezza equivalente con dimensioni di chiave più piccole.",

        q2: "Lo strumento SM2 è sicuro per dati sensibili?",
        a2: "Sì, il nostro <strong>strumento sicuro per firme SM2</strong> esegue tutte le operazioni crittografiche direttamente nel tuo browser. Le tue chiavi private e dati sensibili non lasciano mai il tuo dispositivo.",

        q3: "Perché il parametro ID è importante nelle firme SM2?",
        a3: "Il parametro ID è una caratteristica unica dell'algoritmo SM2 che lo distingue da altri schemi ECC. Funge da input aggiuntivo che lega l'identità del firmatario alla firma.",

        q4: "Posso usare firme SM2 per affari internazionali?",
        a4: "Assolutamente sì. Sebbene SM2 abbia origine dagli standard cinesi, l'<strong>adozione internazionale delle firme SM2</strong> sta crescendo, specialmente per aziende che operano con la Cina.",

        q5: "Cosa fare se la verifica fallisce?",
        a5: "Se incontri <strong>errori di verifica SM2</strong>, controlla: 1) La chiave pubblica corrisponde a quella privata usata per firmare; 2) Il parametro ID corrisponde; 3) I dati verificati sono identici a quelli firmati; 4) Il formato firma è corretto."
    },
    related: {
        title: "Strumenti crittografici correlati",
        description: "Migliora il tuo toolkit di sicurezza con questi strumenti complementari:",
        tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>Verificatore firme RSA</a> - Crea e verifica firme digitali con l'algoritmo RSA.",
        tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>Calcolatore hash</a> - Genera valori hash sicuri con vari algoritmi incluso SM3.",
        tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>Decodificatore certificati</a> - Decodifica e analizza certificati X.509, inclusi quelli che usano crittografia SM2."
    }
}
