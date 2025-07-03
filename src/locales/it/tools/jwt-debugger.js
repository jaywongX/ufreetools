export default {
  name: 'Strumento di debug JWT',
  description: 'Strumento online per analizzare, validare e debug token JWT',
  sections: {
    encoded: 'JWT codificato',
    decoded: 'JWT decodificato',
    header: 'Header',
    payload: 'Payload',
    signature: 'Firma',
    verification: 'Verifica'
  },
  actions: {
    decode: 'Decodifica',
    verify: 'Verifica firma',
    copy: 'Copia',
    share: 'Condividi token',
    generateToken: 'Genera Token',
    generateRandomToken: 'Token casuale',
    clear: 'Pulisci',
    generateRandomPayload: 'Genera payload casuale',
    generateRandomKey: 'Genera chiave casuale',
    generateKeyPair: 'Genera coppia di chiavi'
  },
  messages: {
    invalidToken: 'Formato JWT non valido',
    copied: 'Copiato negli appunti!',
    copyFailed: 'Copia fallita, copia manualmente',
    verificationSuccess: 'Verifica firma riuscita',
    verificationFailed: 'Verifica firma fallita',
    keyGenerated: 'Coppia di chiavi generata con successo',
    keyGenerationFailed: 'Generazione coppia di chiavi fallita',
    tokenGenerated: 'Token generato con successo',
    tokenGenerationFailed: 'Generazione token fallita',
    randomTokenGenerated: 'Token casuale generato e analizzato con successo',
    certUploadSuccess: 'Certificato caricato con successo',
    certFormatInvalid: 'Formato certificato non valido',
    certReadFailed: 'Lettura certificato fallita',
    tokenFormatError: 'Formato token non valido: il JWT deve contenere tre parti separate da punti',
    tokenHeaderMissingAlg: 'Header del token manca il campo algoritmo (alg)',
    tokenHeaderInvalid: 'Formato header token non valido',
    tokenVerificationFailed: 'Verifica formato token fallita',
    tokenExpired: 'Token scaduto. Scadenza: {time}',
    tokenNotEffective: 'Token non ancora valido. Valido da: {time}',
    tokenIssuedInFuture: 'Data di emissione anomala: nel futuro. Emissione: {time}',
    algorithmNotSupported: 'Algoritmo non supportato',
    randomSecretGenerated: 'Chiave segreta casuale generata con successo',
    randomSecretGenerationFailed: 'Generazione chiave segreta casuale fallita',
    randomPayloadGenerated: 'Payload casuale generato',
    randomPayloadGenerationFailed: 'Generazione payload casuale fallita',
    contentCleared: 'Tutti i contenuti sono stati cancellati',
    tokenDecodeSuccess: 'Token decodificato con successo',
    tokenDecodeFailed: 'Decodifica token fallita',
    pleaseInputKey: 'Inserisci la chiave segreta',
    pleaseGenerateKeyPair: 'Genera prima la coppia di chiavi {type}',
    pleaseInputVerificationKey: 'Inserisci la chiave di verifica',
    pleaseInputPublicKey: 'Inserisci la chiave pubblica di verifica',
    pleaseInputToken: 'Inserisci il token da verificare',
    payloadFormatError: 'Errore formato payload: controlla il formato JSON',
    invalidTimestamp: 'Timestamp non valido'
  },
  placeholders: {
    secretKey: 'Inserisci la chiave segreta',
    privateKey: 'Inserisci o genera una chiave privata',
    publicKey: 'Inserisci o genera una chiave pubblica',
    payload: 'Inserisci il payload in formato JSON',
    token: 'Inserisci o genera un token JWT',
    verificationSecretKey: 'Inserisci la chiave segreta di verifica',
    verificationPublicKey: 'Inserisci la chiave pubblica di verifica'
  },
  labels: {
    algorithm: 'Algoritmo',
    secretKey: 'Chiave segreta',
    privateKey: 'Chiave privata',
    publicKey: 'Chiave pubblica',
    certificate: 'Certificato digitale (opzionale)',
    payload: 'Payload',
    token: 'Token',
    verificationPublicKey: 'Chiave pubblica di verifica',
    tokenResult: 'Risultato analisi token',
    verifyToken: 'Verifica token',
    tokenDecoded: 'Token firmato con algoritmo {alg}',
    timestamp: 'Analisi timestamp',
    issuedAt: 'Data emissione (iat)',
    expiration: 'Data scadenza (exp)',
    notBefore: 'Valido da (nbf)',
    tokenFormat: 'Nessun contenuto',
    tokenFormatDesc: 'Inserisci o genera un token JWT per visualizzare i risultati',
    uploadCert: 'Trascina il certificato o clicca per selezionare',
    certName: 'Nome certificato',
    sm3Fingerprint: 'Impronta SM3 (x5t#sm3)',
    certUploadNote: 'Dopo il caricamento, il campo "x5t#sm3" verrà aggiunto all\'header JWT',
    secondsTimestamp: 'Timestamp in secondi',
    millisecondsTimestamp: 'Timestamp in millisecondi'
  },
  buttons: {
    cancel: 'Annulla',
    verify: 'Verifica',
    clearCert: 'Elimina',
    generateToken: 'Genera Token',
    decodeToken: 'Analizza Token',
    verifyToken: 'Verifica Token',
    close: 'Chiudi'
  },
  verification: {
    success: 'Verifica riuscita',
    failure: 'Verifica fallita',
    validMessage: 'Firma token verificata con successo.',
    invalidMessage: 'Verifica firma token fallita.'
  },
  errors: {
    noToken: 'Inserisci il token da verificare',
    invalidToken: 'Formato token non valido',
    noSecretKey: 'Fornisci la chiave di verifica',
    noPublicKey: 'Fornisci la chiave pubblica di verifica',
    invalidSignature: 'Firma non valida',
    verificationFailed: 'Verifica token fallita'
  },
  article: {
    title: "Strumento di debug JWT: analisi, verifica e debug di JSON Web Token",
    features: {
      title: "Comprendere il debug JWT",
      description: "Questo <strong>strumento di debug JWT</strong> è progettato per sviluppatori e professionisti della sicurezza per ispezionare, validare e risolvere problemi relativi ai JSON Web Token (JWT). Questo <strong>decodificatore JWT online</strong> ti consente di incollare qualsiasi JWT e visualizzare immediatamente i componenti decodificati (header, payload e firma) in un formato leggibile.<br><br>Oltre alla semplice <strong>decodifica dei token</strong>, lo strumento offre funzionalità complete di verifica per confermare la validità della firma utilizzando le chiavi appropriate. Questo <strong>strumento di verifica JWT</strong> supporta tutti gli algoritmi JWT standard tra cui HS256, RS256, ES256 e altri, garantendo compatibilità con i moderni sistemi di autenticazione.",
      useCases: {
        title: "Scenari pratici per il debug JWT",
        items: [
          "<strong>Risoluzione problemi autenticazione API</strong>: Quando le chiamate API falliscono a causa di errori di autenticazione, gli sviluppatori possono usare lo <strong>strumento di verifica JWT</strong> per controllare il token e identificare problemi come scadenza, firma non valida o claim errati",
          "<strong>Integrazione con identity provider</strong>: Durante l'integrazione con servizi OAuth o OpenID Connect, il <strong>controllore di token</strong> aiuta a verificare che i token contengano i claim previsti e siano firmati correttamente",
          "<strong>Audit di sicurezza</strong>: I professionisti della sicurezza possono esaminare i <strong>token di autenticazione</strong> per assicurarsi che contengano le autorizzazioni appropriate, tempi di scadenza ragionevoli e seguano le migliori pratiche di sicurezza",
          "<strong>Generazione JWT personalizzati</strong>: Quando si implementano sistemi di autenticazione personalizzati, gli sviluppatori possono usare questo strumento per creare e testare <strong>token JWT codificati</strong> con claim e algoritmi di firma specifici",
          "<strong>Debug bearer token</strong>: Gli sviluppatori frontend che usano <strong>autenticazione bearer</strong> possono verificare che i token usati negli header delle applicazioni siano formattati correttamente e contengano i dati necessari",
          "<strong>Autenticazione microservizi</strong>: I team che costruiscono architetture a microservizi possono verificare che i <strong>token di servizio</strong> trasmettano correttamente le informazioni di autorizzazione tra i servizi mantenendo adeguati confini di sicurezza"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sul debug JWT",
      items: [
        {
          question: "È sicuro incollare il mio JWT in questo debugger online?",
          answer: "Sì, il nostro strumento di debug JWT è progettato con la sicurezza in mente. Tutta l'elaborazione avviene completamente nel tuo browser usando JavaScript lato client, il che significa che il tuo token non viene mai inviato a nessun server per la decodifica o verifica. Il decodificatore JWT non memorizza in alcun modo i tuoi token, chiavi o dati del payload. Tuttavia, come migliore pratica di sicurezza, raccomandiamo di usare solo token di test e non token di produzione contenenti informazioni sensibili."
        },
        {
          question: "Qual è la differenza tra header, payload e firma in un JWT?",
          answer: "Un JSON Web Token è composto da tre parti distinte separate da punti: header, payload e firma. L'header contiene tipicamente il tipo di token ('JWT') e l'algoritmo di firma usato (come 'HS256' o 'RS256'). Il payload contiene i claim, che sono affermazioni su un'entità (solitamente un utente) e dati aggiuntivi. I claim comuni includono ID utente, tempo di scadenza e emittente. La firma è creata usando l'algoritmo specificato nell'header per combinare l'header e il payload codificati con una chiave. Questa firma verifica che il messaggio non sia stato alterato e, con alcuni algoritmi, può verificare l'identità del mittente."
        },
        {
          question: "Come posso verificare se la firma del mio JWT è valida?",
          answer: "Per verificare la firma di un JWT con il nostro strumento, inserisci il token nel campo di input e fornisci la chiave appropriata (a seconda dell'algoritmo usato). Per algoritmi basati su HMAC come HS256, hai bisogno della stessa chiave usata per creare il token. Per algoritmi RSA o ECDSA come RS256 o ES256, hai bisogno della chiave pubblica corrispondente alla chiave privata usata per firmare. Lo strumento calcolerà quindi una firma usando la chiave fornita e la confronterà con quella nel token. Se corrispondono, la firma è valida."
        },
        {
          question: "Perché la verifica JWT potrebbe fallire anche con la chiave corretta?",
          answer: "Ci sono diverse ragioni per cui la verifica JWT potrebbe fallire anche con la chiave corretta. Problemi comuni includono: token scaduto (controlla il claim 'exp'), token non ancora valido (controlla 'nbf'), algoritmo errato (assicurati che l'algoritmo specificato nell'header corrisponda a quello usato per verificare), token alterato (anche piccole modifiche a header o payload causano il fallimento della verifica), formato chiave non corretto (specialmente per chiavi RSA e ECDSA), o problemi di codifica. Lo strumento fornisce messaggi di errore dettagliati per aiutare a identificare la causa specifica del fallimento."
        },
        {
          question: "Posso generare nuovi JWT con questo strumento?",
          answer: "Sì, il nostro strumento include funzionalità di generazione token. Per creare un nuovo JWT, puoi specificare il payload desiderato (i claim che vuoi includere), selezionare l'algoritmo di firma appropriato e fornire la chiave necessaria. Per algoritmi simmetrici come HS256, hai bisogno di una chiave. Per algoritmi asimmetrici come RS256, hai bisogno della chiave privata per firmare. Lo strumento può anche aiutare a generare chiavi casuali se necessario. Questa funzione è particolarmente utile per sviluppatori che implementano autenticazione basata su JWT e hanno bisogno di creare token di esempio per test."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo all'uso dello strumento di debug JWT",
      steps: [
        "Inserisci il tuo <strong>JSON Web Token</strong> nel campo di input nella parte superiore dello strumento. Puoi incollare un JWT completo (con tutte e tre le parti separate da punti) proveniente da un sistema di autenticazione o API",
        "Clicca il pulsante <strong>Decodifica</strong> per visualizzare immediatamente i componenti decodificati del token. Lo strumento mostrerà header e payload in una vista JSON formattata per una facile lettura",
        "Esamina la sezione <strong>header</strong>, che mostra tipicamente il tipo di token ('typ') e l'algoritmo di firma ('alg'). Queste informazioni indicano come è stato creato il token e come dovrebbe essere verificato",
        "Controlla la sezione <strong>payload</strong>, che contiene tutti i claim o dati memorizzati nel token. Presta particolare attenzione ai claim che determinano la validità come tempo di scadenza ('exp'), tempo di emissione ('iat') e soggetto ('sub')",
        "Per verificare la firma del token, inserisci la <strong>chiave di verifica</strong> appropriata nel campo designato. Algoritmi simmetrici (HS256) usano una chiave segreta, mentre algoritmi asimmetrici (RS256/ES256) usano una chiave pubblica",
        "Clicca il pulsante <strong>Verifica firma</strong> per controllare se la firma del token è valida. Lo strumento indicherà se la verifica è riuscita o fallita, con relativi dettagli",
        "Per <strong>generare un nuovo token</strong>, clicca l'opzione 'Genera Token', specifica il payload in formato JSON, seleziona un algoritmo, fornisci una chiave di firma (o generane una), e lo strumento creerà un JWT formattato correttamente"
      ]
    },
    conclusion: "Lo strumento di debug JWT è un'importante risorsa per gli sviluppatori che lavorano con moderni sistemi di autenticazione, fornendo funzionalità complete per l'ispezione, verifica e generazione di token. Offrendo chiara visibilità sulla struttura e stato di validità dei token, semplifica il processo di debug e assicura la sicurezza delle implementazioni JWT. Che tu stia risolvendo problemi di autenticazione, integrando identity provider o progettando nuovi sistemi basati su token, questo strumento semplifica la complessità dell'uso dei JWT. Con i token di autenticazione che rimangono una pietra angolare della sicurezza delle applicazioni web, avere uno strumento affidabile per il debug JWT nel tuo kit di sviluppo diventa sempre più prezioso per mantenere flussi di autenticazione sicuri e funzionanti."
  }
}