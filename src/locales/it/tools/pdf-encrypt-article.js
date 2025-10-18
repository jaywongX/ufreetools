export default {
  title: 'Strumento di Crittografia PDF: Soluzione Basata sul Browser per Impostare Password di Apertura e Permessi',
  functionTitle: 'Cosa è uno Strumento di Crittografia PDF Online e Come Protegge i Documenti?',
  intro: 'Il nostro <strong>strumento di crittografia PDF online</strong> utilizza uno stack tecnologico open-source puramente front-end, supportando la crittografia <strong>AES-128/AES-256 e RC4-40</strong>. Può impostare <strong>password di apertura (password utente)</strong> e <strong>password di permessi (password proprietario)</strong>, fornendo allo stesso tempo opzioni di controllo dei permessi per stampa, modifica, copia e compilazione di moduli. Supporta caricamento drag-and-drop, selezione multipla tradizionale, importazione batch di URL e aggiunta batch, offrendo un\'<strong>anteprima comparativa in tempo reale</strong> e analisi di base per aiutarti a verificare rapidamente gli effetti della crittografia e le configurazioni dei permessi. Dopo la crittografia, puoi <span style="font-weight:bold">scaricare singolarmente</span> o <span style="font-weight:bold">scaricare in batch come ZIP</span>. Tutte le operazioni vengono eseguite localmente nel browser senza caricamento sul server, garantendo privacy ed efficienza.',

  useCasesTitle: 'Scenari Comuni di Applicazione della Crittografia PDF',
  useCases: [
    'Impostare password di apertura e controlli dei permessi per documenti condivisi aziendali',
    'Aggiungere crittografia ad alta sicurezza AES-256 a PDF sensibili come contratti e fatture',
    'Limitare stampa e copia per prevenire diffusione non autorizzata',
    'Impostare stampa a bassa risoluzione e modifica limitata per materiali di formazione online',
    'Crittografare PDF in batch e impostare permessi uniformemente',
    'Crittografare rapidamente e visualizzare in anteprima gli effetti della crittografia sui dispositivi mobili',
    'Crittografia locale nel browser senza caricamento per proteggere la privacy'
  ],

  tipTitle: 'Suggerimenti Professionali:',
  tipContent: 'Si consiglia di utilizzare <strong>password complesse</strong> combinate con il livello di crittografia <strong>AES-256</strong> per una maggiore sicurezza; per migliori prestazioni di ricerca, puoi compilare titoli e parole chiave nei metadati e mantenere una strategia di denominazione coerente (lo strumento attuale non modifica i metadati PDF).',

  conclusion: 'Lo <strong>strumento di crittografia PDF online</strong> può completare rapidamente la crittografia e la configurazione dei permessi nel browser, adatto a vari scenari come aziende, istituzioni educative e utenti individuali. Impostando password utente e password proprietario e selezionando algoritmi di crittografia appropriati, puoi garantire sicurezza mantenendo una buona usabilità.',

  faqTitle: 'Domande Frequenti (FAQ)',
  faqs: [
    {
      question: 'Quali algoritmi di crittografia supporta lo strumento di crittografia PDF online?',
      answer: 'Questo strumento supporta la crittografia <strong>AES-128</strong>, <strong>AES-256</strong> e la crittografia <strong>RC4-40</strong> compatibile con versioni legacy. La scelta specifica dell\'algoritmo per la crittografia a 128 bit (AES o RC4) dipende dalla configurazione e dalla versione di QPDF.'
    },
    {
      question: 'Come impostare password di apertura (password utente) e password di permessi (password proprietario)?',
      answer: 'Inserisci rispettivamente la <strong>password utente</strong> e la <strong>password proprietario</strong> nella sezione "Protezione Password"; lo strumento attuale richiede entrambe per eseguire la crittografia (questo potrebbe essere attenuato a solo password utente nelle versioni future).'
    },
    {
      question: 'Supporta crittografia batch e anteprima comparativa in tempo reale?',
      answer: 'Supporta importazione batch e aggiunta batch; dopo aver eseguito la crittografia, puoi effettuare un\'<strong>anteprima comparativa in tempo reale</strong> (prime pagine dell\'originale e del crittografato), e fornisce pulsanti di download individuale (visualizzati solo dopo il completamento della crittografia di quell\'elemento) e <strong>download batch ZIP</strong>.'
    }
  ],

  tutorialTitle: 'Come Utilizzare lo Strumento di Crittografia PDF Online',
  steps: [
    {
      title: 'Aggiungere File PDF',
      description: 'Carica tramite <strong>drag-and-drop</strong> o clicca per selezionare i file (supporta <strong>selezione multipla</strong> e <strong>aggiunta batch</strong>); puoi anche incollare più URL contemporaneamente nella sezione "Importazione Batch di URL PDF Online".',
      note: 'Si consiglia di familiarizzare prima con il processo utilizzando PDF di esempio.'
    },
    {
      title: 'Anteprima e Analisi',
      description: 'Lo strumento renderizzerà automaticamente la prima pagina del PDF originale e la prima pagina del PDF crittografato per confronto dopo il completamento della crittografia; per visualizzare gli effetti dei permessi, regola nella sezione "Controllo Permessi" a sinistra e crittografa nuovamente.',
      note: 'Se l\'anteprima fallisce, il file potrebbe essere corrotto o incompatibile.'
    },
    {
      title: 'Impostare Password e Permessi',
      description: 'Imposta la <strong>password utente</strong> e la <strong>password proprietario</strong> in "Protezione Password" mentre visualizzi i suggerimenti di <strong>robustezza password</strong>; configura i permessi di stampa, modifica, copia e compilazione moduli nel "Controllo Permessi".',
      note: 'Si consiglia di selezionare AES-256 e utilizzare password complesse.'
    }
  ],

  successTitle: 'Completato!',
  successContent: 'Hai imparato come utilizzare lo strumento di crittografia PDF online per impostare password e permessi dei documenti, e verificato l\'effetto della crittografia tramite anteprima comparativa.',

  relatedToolsTitle: 'Strumenti Correlati che Potrebbero Interessarti',
  relatedTools: [
        {
            name: 'Unisci PDF',
            description: 'Combina più file PDF in un unico documento PDF completo, supportando il riordinamento delle pagine tra file.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'Dividi PDF',
            description: 'Divide documenti PDF di grandi dimensioni in più file PDF più piccoli, supportando pagine di divisione personalizzate.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'Convertitore PDF in Word',
            description: 'Converte documenti PDF nel formato Word modificabile, preservando il layout e la formattazione originale.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'Convertitore PDF in Immagine',
            description: 'Converte ogni pagina di un documento PDF in file di immagine di alta qualità, supportando più formati di output.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: 'Risorse di Riferimento',
  references: [
    { title: 'QPDF Ufficiale', description: 'QPDF è uno strumento potente di elaborazione strutturale e crittografia PDF, che fornisce ricche capacità di controllo dei permessi.' },
    { title: 'Documentazione PDF.js', description: 'PDF.js è una libreria open-source per il rendering di PDF nei browser, adatta per anteprima e recupero di informazioni di base.' },
    { title: 'Specifiche di Riferimento PDF Adobe', description: 'I documenti di riferimento PDF di Adobe forniscono dettagli sulle specifiche PDF e definizioni relative alla sicurezza.' }
  ],

  coverAlt: 'Immagine della Pagina Prodotto dello Strumento di Crittografia PDF Online'
}