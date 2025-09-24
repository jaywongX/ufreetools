export default {
  title: 'Strumento Sfocatura Sfondo: Sfocatura Immagine Sfondo Online per Effetti di Profondità di Campo Professionali',
  functionTitle: 'Cos\'è uno Strumento Sfocatura Sfondo e a cosa serve?',
  intro: 'Questo strumento è uno <strong>strumento di sfocatura dello sfondo online</strong> puramente frontend (Sfocatura Immagine Sfondo). Combina filtri WebGL con algoritmi di segmentazione umana per ottenere sfocatura gaussiana, profondità di campo dell\'obiettivo, sfocatura di movimento, sfocatura radiale e <b>sfocatura dello sfondo di livello professionale della fotocamera</b>. Supporta l\'elaborazione batch ed esportazione multi-formato, consentendoti di ottenere rapidamente foto con sfondi puliti e soggetti in evidenza nel tuo browser, adatto per immagini principali di e-commerce, foto d\'identità, copertine di social media e altri scenari.',
  useCasesTitle: 'Scenari di Applicazione Comuni per la Sfocatura dello Sfondo',
  useCases: [
    'Immagini principali di e-commerce che rimuovono sfondi distraenti per mettere in evidenza i prodotti',
    'Foto ritratto con sfocatura dello sfondo per effetti di profondità di campo professionali',
    'Foto d\'identità o ritratti professionali, sostituiti con sfondi a tinta unita o gradienti',
    'Abbellimento rapido di copertine di social media e immagini di copertina di video brevi',
    'Elaborazione unificata dello sfondo per diapositive di presentazioni e design di poster',
    'Sfocatura dello sfondo di foto turistiche per proteggere la privacy e migliorare l\'estetica',
    'Sfocatura dello sfondo di foto di gruppo con esportazione batch',
    'Generazione rapida di effetti di fuoco morbido e fuoco radiale per contenuti UGC'
  ],
  tipTitle: 'Suggerimento Professionale:',
  tipContent: 'Quando utilizzato per soggetti ritratto, abilita "Abilita Segmentazione Primo Piano" e aumenta opportunamente "Sfumatura Bordi" per ridurre significativamente il frastagliamento dei bordi dei capelli. Per immagini con requisiti di alta qualità, privilegia l\'esportazione nei formati PNG o WebP.',
  conclusion: 'Lo <strong>strumento di sfocatura dello sfondo</strong> risolve efficacemente i punti critici di "sfondi disordinati" e "soggetti non in evidenza" attraverso segmentazione intelligente e algoritmi di sfocatura multipli. Che si tratti di fotografia di prodotti, ritratti o creazione di contenuti social, completare la sfocatura dello sfondo online può migliorare significativamente la messa a fuoco visiva e il professionalismo.',
  faqTitle: 'Domande Frequenti',
  faqs: [
    {
      question: 'Come lo strumento di sfocatura dello sfondo online raggiunge effetti di profondità di campo della fotocamera professionale?',
      answer: 'Questo strumento di sfocatura dello sfondo online combina la segmentazione del primo piano MediaPipe con filtri WebGL, applicando sfocatura gaussiana/obiettivo/radiale/movimento alle aree dello sfondo per ottenere transizioni di profondità di campo ed effetti di fuoco morbido simili alle fotocamere professionali.'
    },
    {
      question: 'Quali metodi di sostituzione dello sfondo sono supportati (tinta unita/gradiente/immagine)?',
      answer: 'Lo strumento supporta tre modalità: sfondo a tinta unita, sfondo a gradiente lineare e sfondo immagine, con trasparenza dello sfondo e modalità di fusione regolabili per soddisfare i requisiti di immagini principali di e-commerce, foto d\'identità e stili di marca coerenti.'
    },
    {
      question: 'Come garantire la qualità di esportazione e controllare la dimensione del file?',
      answer: 'Puoi scegliere formati PNG/JPG/WebP e controllare la dimensione di esportazione tramite cursori di qualità e preimpostazioni di dimensioni. PNG e WebP sono più adatti per scenari di sfocatura dello sfondo con requisiti di alta qualità.'
    },
    {
      question: 'Come utilizzare l\'elaborazione batch e l\'ordinamento delle pagine?',
      answer: 'È possibile importare più immagini contemporaneamente, con selezione dell\'intervallo e controlli a caselle di controllo per elaborare "pagine" specifiche, supportando l\'ordinamento sposta su/giù e il filtraggio automatico di immagini non valide con "Salta Pagine Vuote".'
    },
    {
      question: 'È necessario caricare le immagini sul server, come viene protetta la privacy?',
      answer: 'Tutta l\'elaborazione della sfocatura dello sfondo viene completata localmente nel browser e non viene caricata su alcun server, garantendo la privacy e la sicurezza delle immagini.'
    }
  ],
  tutorialTitle: 'Come Utilizzare lo Strumento Sfocatura Sfondo',
  steps: [
    {
      title: 'Caricare o Importare Immagini',
      description: 'Trascina e rilascia o clicca per caricare immagini locali, oppure incolla immagini dagli appunti, abilita la cattura della fotocamera o importa immagini di rete tramite URL. Supporta formati PNG, JPG, WEBP, BMP.',
      note: 'È possibile importare più immagini contemporaneamente per sfocatura dello sfondo batch.'
    },
    {
      title: 'Selezionare il Tipo di Sfocatura e i Parametri',
      description: 'Scegli sfocatura gaussiana, obiettivo, movimento o radiale in "Tipo di Sfocatura" e regola finemente gli effetti tramite cursori per raggio, angolo, punto centrale e banda passante del fuoco.',
      note: 'Selezionando "Mostra Confronto Prima/Dopo" è possibile un confronto in tempo reale della sfocatura dello sfondo prima e dopo.'
    },
    {
      title: 'Abilitare la Segmentazione del Primo Piano e le Impostazioni dello Sfondo',
      description: 'Abilita "Abilita Segmentazione Primo Piano" per migliorare la qualità dei bordi del soggetto, aumenta "Sfumatura Bordi" per transizioni più naturali. In "Impostazioni Sfondo", scegli sfondo a tinta unita, gradiente o immagine e regola trasparenza e modalità di fusione se necessario.',
      note: 'Quando si seleziona "Conserva Sfondo Originale", solo l\'area dello sfondo viene sfocata mentre il soggetto rimane nitido.'
    },
    {
      title: 'Dimensioni e Qualità',
      description: 'In "Dimensione e Qualità Output", scegli le preimpostazioni dei social media o dimensioni personalizzate, imposta la qualità JPG/WebP e la percentuale di scala. Per la stampa, aumenta il DPI ed esporta pixel più elevati in modo proporzionale.',
      note: 'PNG e WebP sono più adatti per scenari di sfocatura dello sfondo che richiedono la conservazione dei dettagli.'
    },
    {
      title: 'Esportare e Download Batch',
      description: 'Seleziona il formato di esportazione per ogni immagine e clicca su "Scarica" per salvare; più immagini possono utilizzare "Download Batch (ZIP)" per esportare tutti i risultati di sfocatura dello sfondo contemporaneamente.',
      note: 'Tutta l\'elaborazione viene completata localmente nel browser, le immagini non vengono caricate sul server.'
    },
    {
      title: 'Controllo Pagina',
      description: 'Ordina le "pagine" tramite caselle di controllo, input dell\'intervallo e sposta su/giù, abilita "Salta Pagine Vuote" per filtrare automaticamente immagini non valide con bassa varianza di luminosità.',
      note: 'Esempio di intervallo: 1-3,5,7-9.'
    }
  ],
  successTitle: 'Congratulazioni!',
  successContent: 'Hai imparato a utilizzare il nostro strumento di sfocatura dello sfondo per ottenere effetti di profondità di campo e fuoco morbido di livello professionale della fotocamera, adatti per vari scenari creativi e commerciali.',
  relatedToolsTitle: 'Strumenti Correlati che Potrebbero Interessarti',
  relatedTools: [
    {
      name: 'Compressore di Immagini',
      description: 'Ridurre la dimensione del file immagine senza perdita significativa di qualità.',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: 'Ridimensionatore di Immagini',
      description: 'Ridimensionare le immagini a dimensioni specifiche o scalare in base alla percentuale.',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: 'Generatore di Timbri',
      description: 'Creazione online di varie immagini di timbri, generando timbri aziendali, timbri personali e altri timbri digitali.',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'Generatore di Codici QR',
      description: 'Creare codici QR personalizzati per URL, testi, informazioni di contatto e altro.',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: 'Risorse di Riferimento',
  references: [
    {
      name: 'Segmentazione Selfie MediaPipe',
      description: 'Modello di segmentazione del primo piano umano e utilizzo di Google',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: 'Libreria di effetti immagine in tempo reale basata su WebGL',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: 'Algoritmo di sfocatura canvas veloce e controllabile, adatto come soluzione di fallback e elaborazione di sfumatura',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}