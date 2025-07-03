export default {
    name: "Firma e verifica RSA",
    description: "Firma dati con chiave privata RSA e verifica firme con chiave pubblica, supportando vari formati e algoritmi",
    keyInput: "Input chiavi",
    privateKey: "Chiave privata (per firma)",
    publicKey: "Chiave pubblica (per verifica)",
    privateKeyPlaceholder: "Inserisci chiave privata RSA nel formato selezionato",
    publicKeyPlaceholder: "Inserisci chiave pubblica RSA o certificato nel formato selezionato",
    generateKeyPair: "Genera coppia di chiavi",
    extractFromCert: "Estrai da certificato",
    clear: "Pulisci",
    keySize: "Lunghezza chiave",
    hashAlgorithm: "Algoritmo hash",
    paddingScheme: "Schema di padding",
    keyFormat: "Formato chiave",
    inputFormat: "Formato input",
    processMode: "Modalità elaborazione",
    originalData: "Dati originali",
    preProcessed: "Pre-elaborato",
    sign: "Firma",
    verify: "Verifica",
    dataToSign: "Dati da firmare",
    dataToSignPlaceholder: "Inserisci testo o dati da firmare",
    preProcessedDataToSign: "Hash da firmare",
    preProcessedDataToSignPlaceholder: "Inserisci valore hash in formato esadecimale",
    preprocessOnly: "Solo pre-elaborazione (ottieni digest hash)",
    preprocessedData: "Dati pre-elaborati",
    hashDigest: "Digest hash (passo 1)",
    paddedData: "Dati con padding (passo 2)",
    showDetailed: "Mostra dettagli",
    showSimple: "Mostra versione semplice",
    signButton: "Firma dati",
    signature: "Risultato firma",
    dataToVerify: "Dati da verificare",
    dataToVerifyPlaceholder: "Inserisci testo o dati originali firmati",
    preProcessedDataToVerify: "Hash da verificare",
    preProcessedDataToVerifyPlaceholder: "Inserisci valore hash in formato esadecimale",
    signatureToVerify: "Firma da verificare",
    signatureToVerifyPlaceholder: "Inserisci firma da verificare (nel formato selezionato)",
    verifyButton: "Verifica firma",
    verificationResult: "Risultato verifica",
    notVerifiedYet: "Non ancora verificato",
    signatureValid: "Firma valida ✓",
    signatureInvalid: "Firma non valida ✗✗",
    copy: "Copia",
    copied: "Copiato negli appunti",
    copyFailed: "Copia negli appunti fallita",
    generatingKeys: "Generazione chiavi in corso...",
    keysGenerated: "Generata coppia di chiavi RSA a {bits} bit in {time} secondi",
    keyGenerationFailed: "Generazione coppia di chiavi fallita",
    notValidCertificate: "Input non è un certificato X.509 valido",
    publicKeyExtracted: "Chiave pubblica estratta dal certificato",
    extractionFailed: "Estrazione chiave pubblica da certificato fallita",
    preprocessingError: "Errore durante la pre-elaborazione",
    paddingError: "Errore nell'applicazione del padding",
    invalidPrivateKey: "Formato chiave privata non valido",
    invalidPublicKey: "Formato chiave pubblica non valido",
    invalidInputData: "Formato dati input non valido",
    invalidSignature: "Formato firma non valido",
    invalidVerificationData: "Formato dati verifica non valido",
    signatureCreated: "Firma creata con successo",
    signingFailed: "Creazione firma fallita",
    verificationSuccess: "Verifica firma riuscita",
    verificationFailed: "Verifica firma fallita",
    verificationError: "Errore durante la verifica",
    noSignatureToExport: "Nessuna firma da esportare",
    signatureExported: "Firma esportata come file {format}",
    signatureImported: "Importazione firma riuscita",
    signatureImportFailed: "Importazione firma fallita",
    article: {
        title: "Strumento firma/verifica RSA: firme digitali sicure per garantire l'integrità dei dati",

        introduction: {
            title: "Cos'è la firma e verifica RSA?",
            p1: "La firma e verifica RSA è un processo crittografico che garantisce l'integrità, autenticità e non ripudio nelle comunicazioni digitali. Il nostro strumento permette di firmare dati con una chiave privata RSA e verificare firme con la corrispondente chiave pubblica, fornendo un modo sicuro per verificare che le informazioni non siano state alterate durante la trasmissione.",
            p2: "In un'era dove la sicurezza dei dati è cruciale, le firme digitali RSA sono diventate uno standard industriale per proteggere documenti elettronici, distribuzione software e comunicazioni sicure. Lo strumento implementa gli schemi di padding PKCS#1 v1.5 e PSS, supportando vari algoritmi hash tra cui SHA-1, SHA-256, SHA-384 e SHA-512.",
            p3: "Che tu sia uno sviluppatore che testa implementazioni crittografiche, un professionista della sicurezza che verifica firme digitali o uno studente che apprende la crittografia a chiave pubblica, il nostro strumento offre un'interfaccia user-friendly e funzionalità complete per tutte le tue esigenze di firma digitale.",
            p4: "Il processo di firma/verifica RSA funziona creando un hash crittografico dei dati, che viene poi cifrato con la chiave privata del mittente. Chiunque possieda la corrispondente chiave pubblica può verificare la firma, confermando sia l'integrità dei dati che l'identità del mittente."
        },

        useCases: {
            title: "Applicazioni comuni delle firme RSA",
            case1: "Verificare l'autenticità di download software e aggiornamenti, prevenendo la distribuzione di malware",
            case2: "Verificare certificati digitali nelle comunicazioni di rete sicure (HTTPS)",
            case3: "Garantire l'integrità di documenti e contratti elettronici in contesti legali e aziendali",
            case4: "Implementare l'autenticazione sicura di messaggi in protocolli di comunicazione e applicazioni"
        },

        tutorial: {
            title: "Come usare lo strumento firma/verifica RSA",
            step1: {
                title: "Passo 1: Preparare le chiavi",
                description: "Prima di firmare o verificare, hai bisogno di chiavi RSA:",
                option1: "Genera nuove chiavi direttamente nello strumento cliccando \"Genera coppia di chiavi\" e selezionando la dimensione desiderata (si consigliano 2048 bit o più per sicurezza)",
                option2: "Importa chiavi esistenti in vari formati (PEM, DER, HEX o Base64)"
            },
            step2: {
                title: "Passo 2: Configurare le impostazioni di firma",
                description: "Seleziona le impostazioni appropriate per la tua operazione di firma:",
                option1: "Algoritmo hash: scegli tra SHA-1, SHA-256, SHA-384 o SHA-512 (si consiglia SHA-256 o superiore)",
                option2: "Schema di padding: scegli tra PKCS#1 v1.5 (più comune) o PSS (più moderno e sicuro)",
                option3: "Formato input: specifica se il tuo input è testo semplice, esadecimale o codificato Base64"
            },
            step3: {
                title: "Passo 3: Firmare o verificare dati",
                description: "A seconda delle tue esigenze:",
                option1: "Firma: inserisci i dati nella sezione firma e clicca \"Firma dati\" per generare la firma",
                option2: "Verifica: inserisci i dati originali e la firma nella sezione verifica e clicca \"Verifica firma\""
            },
            step4: {
                title: "Passo 4: Visualizza risultati ed esporta (se necessario)",
                description: "Dopo la firma, puoi copiare la firma o esportarla in vari formati (Base64, HEX, DER, PEM). Per la verifica, lo strumento mostrerà se la firma è valida o meno."
            },
            note: "Nota: Per utenti avanzati, lo strumento mostra anche informazioni dettagliate sulla pre-elaborazione, inclusi digest hash e dati con padding, aiutandoti a comprendere ogni passo del processo di firma RSA."
        },

        faq: {
            title: "Domande frequenti sulle firme RSA",
            q1: "Qual è la differenza tra padding PKCS#1 v1.5 e PSS?",
            a1: "PKCS#1 v1.5 è lo schema di padding tradizionale per firme RSA, ampiamente supportato ma con vulnerabilità teoriche note. PSS (Probabilistic Signature Scheme) è un metodo più moderno con sicurezza dimostrabile e padding casuale, rendendolo più resistente ad alcuni attacchi crittografici. Per la maggior parte delle applicazioni, entrambi gli schemi forniscono sufficiente sicurezza quando usati con algoritmi hash forti e appropriate lunghezze di chiave.",

            q2: "Quale algoritmo hash dovrei usare per firme RSA?",
            a2: "Per applicazioni moderne, consigliamo almeno SHA-256 per garantire sufficiente sicurezza. SHA-1 è considerato crittograficamente debole e dovrebbe essere usato solo per compatibilità con sistemi legacy. Per applicazioni altamente sensibili o quando si firmano grandi quantità di dati, SHA-384 o SHA-512 offrono un ulteriore margine di sicurezza.",

            q3: "Quale dimensione di chiave RSA è raccomandata per firme sicure?",
            a3: "Al 2023, si raccomanda una dimensione minima di 2048 bit per chiavi RSA, con 3072 o 4096 bit preferiti per sicurezza a lungo termine. Chiavi più piccole di 2048 bit sono considerate vulnerabili ad attacchi di fattorizzazione con risorse computazionali moderne. Nota che chiavi più grandi aumenteranno il tempo di elaborazione per le operazioni di firma.",

            q4: "Posso usare questo strumento con dati già hashati?",
            a4: "Sì, il nostro strumento supporta la firma e verifica di dati pre-hashati. Questo è utile quando hai già calcolato il digest hash con strumenti esterni, o quando lavori con file grandi e vuoi calcolare l'hash separatamente. Basta selezionare l'opzione \"pre-hashato\" e fornire il valore hash in formato esadecimale.",

            q5: "È sicuro usare questo strumento online per firme sensibili?",
            a5: "Questo strumento elabora tutti i dati esclusivamente nel tuo browser - nessuna informazione viene inviata ai nostri server. Tuttavia, per operazioni crittografiche altamente sensibili o in ambienti di produzione, consigliamo l'uso di hardware dedicato (come HSM) o librerie crittografiche consolidate in ambienti controllati.",
            a5_extra: "Per scopi educativi, test o applicazioni non critiche, questo strumento offre un modo conveniente e sicuro per gestire firme RSA."
        },

        resources: {
            title: "Strumenti e risorse correlate",
            description: "Migliora il tuo flusso di lavoro crittografico con questi strumenti complementari:",
            tool1: "Generatore hash - crea digest hash con vari algoritmi",
            tool2: "Codificatore/decodificatore Base64 - converti tra dati raw e formato Base64",
            tool3: "Strumento debug JWT - tool online per analizzare, verificare e debug token JWT",

            external: {
                title: "Risorse esterne",
                resource1: "RFC 8017 - PKCS #1: Specifiche crittografiche RSA versione 2.2",
                resource2: "NIST FIPS 186-4 - Standard per firme digitali (DSS)"
            }
        },

        conclusion: {
            title: "Conclusione",
            p1: "La firma e verifica RSA rimane una pietra miliare della sicurezza crittografica moderna, fornendo un meccanismo robusto per garantire integrità e autenticità dei dati. Il nostro strumento rende questa potente tecnologia accessibile a tutti, dai principianti della crittografia ai professionisti della sicurezza.",
            p2: "Che tu stia firmando codice, verificando l'autenticità di documenti o imparando la crittografia a chiave pubblica, questo strumento offre un set completo di funzionalità per gestire firme RSA in un ambiente sicuro basato su browser. Inizia subito con lo strumento firma/verifica RSA per proteggere i tuoi asset digitali e comunicazioni."
        }
    }
}