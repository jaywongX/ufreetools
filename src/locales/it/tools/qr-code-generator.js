export default {
  name: 'Generatore di Codici QR',
  description: 'Genera codici QR personalizzabili per URL, testo e altro',
  options: {
    content: 'Contenuto QR',
    contentType: 'Tipo di contenuto',
    errorCorrectionLevel: 'Livello correzione errori',
    size: 'Dimensioni',
    margin: 'Margine',
    foregroundColor: 'Colore primo piano',
    backgroundColor: 'Colore sfondo',
    logo: 'Aggiungi logo',
    logoSize: 'Dimensioni logo',
    cornerRadius: 'Raggio angoli'
  },
  contentTypes: {
    url: 'URL',
    text: 'Testo',
    email: 'Email',
    phone: 'Telefono',
    sms: 'SMS',
    wifi: 'Rete WiFi',
    vcard: 'vCard',
    mecard: 'MeCard'
  },
  errorLevels: {
    L: 'Basso (7%)',
    M: 'Medio (15%)',
    Q: 'Alto (25%)',
    H: 'Massimo (30%)'
  },
  actions: {
    generate: 'Genera QR',
    download: 'Scarica',
    downloadSVG: 'Scarica SVG',
    downloadPNG: 'Scarica PNG',
    copy: 'Copia immagine',
    clear: 'Ripristina',
    uploadLogo: 'Carica logo'
  },
  templates: {
    title: 'Modelli rapidi',
    confirmReplace: 'Confermi di sostituire il contenuto corrente?',
    confirm: 'Conferma',
    cancel: 'Annulla',
    url: {
      name: 'Collegamento URL'
    },
    email: {
      name: 'Indirizzo email'
    },
    phone: {
      name: 'Numero di telefono'
    },
    sms: {
      name: 'Messaggio SMS'
    },
    wifi: {
      name: 'Configurazione WiFi',
      example: {
        ssid: 'Nome rete',
        password: 'Password'
      }
    },
    geo: {
      name: 'Posizione geografica'
    }
  },
  appearance: {
    title: 'Aspetto'
  },
  preview: {
    title: 'Anteprima',
    generating: 'Generazione in corso...',
    clickGenerateButton: 'Clicca "Genera QR"',
    clickToDownload: 'Clicca per scaricare QR'
  },
  tips: {
    title: 'Suggerimenti',
    saveToPrint: 'Puoi salvare il QR generato come immagine per stampe o condivisioni.',
    errorCorrection: 'Il livello di correzione errori indica la leggibilità del QR se danneggiato. Livello L ha la tolleranza più bassa, H la più alta ma aumenta la complessità.'
  },
  wifi: {
    ssid: 'Nome rete (SSID)',
    password: 'Password',
    encryption: 'Crittografia',
    hidden: 'Rete nascosta'
  },
  placeholders: {
    content: 'Inserisci testo, URL o altro contenuto...'
  },
  characters: 'caratteri',
  maxChars: 'Consigliato max 300 caratteri',
  messages: {
    copied: 'Copiato negli appunti!',
    generated: 'QR generato con successo',
    contentRequired: 'Inserisci il contenuto del QR',
    downloaded: 'QR scaricato',
    confirmReplace: 'Conferma per sostituire il contenuto corrente',
    contentUpdated: 'Contenuto aggiornato',
    changesCancelled: 'Modifiche annullate',
    invalidUrl: 'Inserisci un URL valido',
    invalidEmail: 'Inserisci un\'email valida',
    invalidPhone: 'Inserisci un numero di telefono valido',
    logoTooBig: 'Logo troppo grande (max 1MB)'
  },
  errors: {
    canvasNotReady: 'Elemento canvas non pronto',
    generationError: 'Errore generazione QR',
    generationErrorWithMessage: 'Errore generazione QR: {message}',
    downloadError: 'Errore download QR: {message}'
  },
  article: {
    title: "Generatore QR: Crea e personalizza codici a risposta rapida",
    features: {
      title: "Scopri i codici QR e le loro applicazioni",
      description: "Il nostro <strong>Generatore di QR</strong> è uno strumento online versatile per creare codici QR personalizzabili per vari tipi di informazioni. A differenza dei codici a barre tradizionali, i <strong>codici QR</strong> possono memorizzare grandi quantità di dati in un formato compatto e leggibile da dispositivi mobili.<br><br>Questo avanzato <strong>creatore di QR</strong> supporta diversi tipi di contenuto: URL, testo, informazioni di contatto, credenziali WiFi e coordinate geografiche. Ogni codice generato è completamente personalizzabile in dimensioni, colori, livello di correzione errori, e può includere loghi mantenendo la scansionabilità.<br><br>I <strong>codici QR</strong> ad alta risoluzione possono essere scaricati in formato PNG o SVG, ideali per uso digitale o stampa su materiali promozionali, packaging o cartelli.",
      useCases: {
        title: "Applicazioni pratiche dei codici QR",
        items: [
          "<strong>Marketing</strong>: Crea <strong>QR personalizzati</strong> per biglietti da visita, brochure e materiali promozionali, collegandoli a siti web, offerte speciali o informazioni di contatto. I QR con colori aziendali e loghi rafforzano il branding.",
          
          "<strong>Pagamenti contactless</strong>: Genera QR che collegano a piattaforme di pagamento o contengono informazioni su portafogli crittografici, abilitando transazioni rapide e sicure. Ideale per piccole attività senza terminali POS costosi.",
          
          "<strong>Menu digitali</strong>: Sviluppa <strong>QR scansionabili</strong> per accedere ai menu senza contatto, permettendo ai clienti di visualizzare i piatti direttamente sul telefono. I ristoranti possono aggiornare i menu digitali senza ristampe.",
          
          "<strong>Gestione eventi</strong>: Crea <strong>biglietti QR</strong> per conferenze, concerti o mostre, scansionabili per la verifica. Gli organizzatori possono tracciare le presenze in tempo reale e ridurre i falsi.",
          
          "<strong>Packaging prodotti</strong>: Aggiungi <strong>etichette QR</strong> che collegano a manuali, istruzioni, registrazioni garanzia o verifiche di autenticità. I produttori forniscono informazioni dettagliate senza aumentare i costi di stampa.",
          
          "<strong>Risorse educative</strong>: Genera <strong>QR educativi</strong> che collegano a materiali di apprendimento supplementari, quiz interattivi o video dimostrativi. Gli insegnanti possono usarli per collegare ambienti fisici e digitali."
        ]
      }
    },
    faq: {
      title: "Domande frequenti sui codici QR",
      items: [
        {
          question: "Quali sono le differenze tra i livelli di correzione errori?",
          answer: "Il livello di correzione errori determina quanto un <strong>codice QR</strong> può essere danneggiato rimanendo scansionabile:<br><br>• <strong>L (Basso)</strong>: Recupera fino al 7% di danni, codice più compatto<br>• <strong>M (Medio)</strong>: Gestisce fino al 15% di danni, buon equilibrio per usi standard<br>• <strong>Q (Alto)</strong>: Resiste fino al 25% di danni, ideale per usi industriali<br>• <strong>H (Massimo)</strong>: Tolleranza fino al 30%, perfetto per ambienti difficili o loghi<br><br>Livelli più alti creano codici leggermente più grandi ma significativamente più affidabili."
        },
        {
          question: "Posso aggiungere un logo senza compromettere la funzionalità?",
          answer: "Sì, puoi aggiungere un logo mantenendo la scansionabilità seguendo queste linee guida:<br><br>1. Usa un livello di correzione errori alto (preferibilmente H)<br>2. Mantieni il logo piccolo (max 30% dell'area centrale)<br>3. Assicurati un buon contrasto tra logo e codice<br>4. Evita di coprire i marcatori di posizione (quadrati angolari)<br><br>Il nostro <strong>generatore di QR</strong> regola automaticamente la densità dei dati quando aggiungi un logo. Testa sempre il codice con diversi dispositivi."
        },
        {
          question: "Quali informazioni posso codificare?",
          answer: "I codici QR possono memorizzare vari tipi di dati:<br><br>• <strong>URL</strong>: Collegamenti a pagine web<br>• <strong>Testo</strong>: Messaggi fino a ~4000 caratteri<br>• <strong>Contatti</strong>: Dettagli salvabili direttamente nella rubrica<br>• <strong>Credenziali WiFi</strong>: Connessione automatica alle reti<br>• <strong>Telefono/SMS</strong>: Chiamate o messaggi precompilati<br>• <strong>Coordinate</strong>: Apertura mappe in posizioni specifiche<br><br>Il nostro <strong>creatore di QR</strong> offre modelli specifici per ogni tipo di contenuto."
        },
        {
          question: "Quale dimensione di stampa è ottimale?",
          answer: "La dimensione ideale dipende dalla distanza di scansione:<br><br>• <strong>Minimo</strong>: 2 × 2 cm per scansioni ravvicinate<br>• <strong>Standard</strong>: 3 × 3 cm per usi tipici<br>• <strong>1-2 metri</strong>: 10 × 10 cm o più<br>• <strong>Cartelloni</strong>: Almeno 30 × 30 cm<br><br>Come regola generale, il <strong>QR stampato</strong> dovrebbe essere circa 1/10 della distanza di scansione. Lascia sempre un margine bianco attorno al codice."
        },
        {
          question: "Come posso tracciare le scansioni?",
          answer: "Per monitorare le scansioni:<br><br>1. Usa un <strong>URL abbreviato</strong> con tracciamento (Bit.ly, TinyURL)<br>2. Puntare a una landing page specifica con Google Analytics<br>3. Usare servizi di <strong>QR dinamici</strong> con analisi integrate<br>4. Aggiungere parametri UTM per distinguere le fonti di traffico<br><br>Il nostro generatore crea QR statici, ma puoi implementare queste strategie di tracciamento codificando URL appropriati."
        }
      ]
    },
    guide: {
      title: "Come creare un codice QR: guida passo-passo",
      step1: "<strong>Scegli il tipo di contenuto</strong>: Decidi quali informazioni codificare (URL, testo, contatti, WiFi). Usa i modelli del nostro <strong>generatore QR</strong> per formattare automaticamente i dati correttamente.",
      step2: "<strong>Inserisci le informazioni</strong>: Compila i campi richiesti. Per gli URL, includi 'http://' o 'https://'. Per il WiFi, fornisci SSID, password e tipo di crittografia. Il <strong>creatore di QR</strong> verificherà l'input.",
      step3: "<strong>Personalizza l'aspetto</strong>: Regola dimensioni, colori, livello correzione errori e angoli. Aggiungi un logo mantenendo la scansionabilità. Il nostro <strong>generatore</strong> adatta automaticamente la densità dei dati.",
      step4: "<strong>Genera e testa</strong>: Clicca \"Genera QR\" e verifica la funzionalità con diversi dispositivi. Testa particolarmente se hai aggiunto personalizzazioni o loghi.",
      step5: "<strong>Scarica e usa</strong>: Scarica in PNG (digitale) o SVG (stampa). Integra il <strong>QR</strong> in materiali promozionali, siti web, packaging o ovunque sia necessario un accesso rapido alle informazioni."
    },
    conclusion: "I codici QR hanno rivoluzionato il modo in cui colleghiamo mondi fisici e digitali, offrendo un metodo semplice per condividere informazioni e coinvolgere gli utenti. Con la loro crescente adozione, creare QR efficaci è diventata un'abilità essenziale per professionisti, educatori e privati. Il nostro generatore semplifica questo processo, permettendo di creare codici personalizzati che riflettono l'identità del brand mantenendo la piena funzionalità. Che tu colleghi a contenuti web, semplifichi pagamenti o arricchisca materiali educativi, i QR offrono una soluzione versatile che combina convenienza ed efficienza tecnologica. Con l'evoluzione della tecnologia mobile, l'importanza e le applicazioni dei codici QR continueranno a crescere, rendendoli asset sempre più preziosi nel nostro mondo connesso."
  }
}