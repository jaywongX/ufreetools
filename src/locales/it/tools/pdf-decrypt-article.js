export default {
  title: 'Strumento di Decrittografia PDF: Soluzione Basata sul Browser per Rimuovere Password di Apertura e Restrizioni dei Permessi',
  functionTitle: 'Cosa è uno Strumento di Decrittografia PDF Online e Quando Serve la Decrittografia?',
  intro: 'Il nostro <strong>strumento di decrittografia PDF online</strong> si basa su uno stack tecnologico open-source puramente front-end. Supporta la fornitura di una <strong>password di apertura (password utente)</strong> per PDF crittografati per eseguire la decrittografia, rimuovendo restrizioni dei permessi come stampa, modifica, copia e compilazione di moduli. Supporta caricamento drag-and-drop, selezione multipla tradizionale, importazione batch di URL e aggiunta batch, offrendo un\'<strong>anteprima comparativa in tempo reale</strong> e analisi di base per aiutarti a verificare rapidamente l\'effetto della decrittografia. Dopo il completamento della decrittografia, puoi <span style="font-weight:bold">scaricare singolarmente</span> o <span style="font-weight:bold">scaricare in batch come ZIP</span>. Tutte le operazioni vengono eseguite localmente nel browser senza caricamento sul server, proteggendo la privacy e garantendo efficienza.',

  useCasesTitle: 'Scenari Comuni di Applicazione della Decrittografia PDF',
  useCases: [
    'Rimuovere restrizioni dei permessi da documenti condivisi aziendali per editing interno',
    'Eseguire decrittografia conforme per documenti con configurazioni di permessi del proprietario dimenticate',
    'Ripristinare capacità di stampa e copia per correzione bozze e riutilizzo del contenuto',
    'Rimuovere restrizioni a bassa risoluzione da materiali di formazione o report per migliorare la qualità di output',
    'Decrittografare batch di più PDF e processarli uniformemente',
    'Decrittografare rapidamente e visualizzare in anteprima gli effetti della decrittografia sui dispositivi mobili',
    'Decrittografia locale nel browser senza caricamento per proteggere la privacy'
  ],

  tipTitle: 'Suggerimenti Professionali:',
  tipContent: 'Si consiglia di decrittografare solo PDF per i quali si dispone di autorizzazione d\'uso legittima; per migliori prestazioni di ricerca, puoi compilare titoli e parole chiave nei metadati e mantenere una strategia di denominazione coerente (lo strumento attuale non modifica i metadati PDF).',

  conclusion: 'Lo <strong>strumento di decrittografia PDF online</strong> può rimuovere rapidamente restrizioni dei permessi e ripristinare contenuti nel browser, adatto a vari scenari come aziende, istituzioni educative e utenti individuali. Fornendo la password di apertura corretta ed eseguendo la decrittografia, puoi migliorare l\'utilizzabilità del documento entro i limiti di conformità.',

  faqTitle: 'Domande Frequenti (FAQ)',
  faqs: [
    {
      question: 'Come funziona lo strumento di decrittografia PDF online?',
      answer: 'Questo strumento si basa sulle capacità di decrittografia di QPDF. Dopo aver fornito la <strong>password di apertura</strong>, esegue l\'operazione <strong>--decrypt</strong> per rimuovere le restrizioni dei permessi del documento e generare un nuovo PDF utilizzabile.'
    },
    {
      question: 'Supporta decrittografia batch e anteprima comparativa in tempo reale?',
      answer: 'Supporta importazione batch e aggiunta batch; dopo aver eseguito la decrittografia, puoi effettuare un\'<strong>anteprima comparativa in tempo reale</strong> (prime pagine dell\'originale e del decrittografato), e fornisce pulsanti di download individuale e <strong>download batch ZIP</strong>.'
    },
    {
      question: 'Si può usare questo strumento se il PDF non è crittografato?',
      answer: 'Sì. Per PDF non crittografati, lo strumento produrrà direttamente un file coerente con il contenuto originale per una gestione uniforme del processo.'
    }
  ],

  tutorialTitle: 'Come Utilizzare lo Strumento di Decrittografia PDF Online',
  steps: [
    {
      title: 'Aggiungere File PDF',
      description: 'Carica tramite <strong>drag-and-drop</strong> o clicca per selezionare i file (supporta <strong>selezione multipla</strong> e <strong>aggiunta batch</strong>); puoi anche incollare più URL contemporaneamente nella sezione "Importazione Batch di URL PDF Online".',
      note: 'Si consiglia di familiarizzare prima con il processo utilizzando PDF di esempio.'
    },
    {
      title: 'Fornire Password di Apertura (se necessaria)',
      description: 'Se il PDF è crittografato, inserisci la <strong>password di apertura (password utente)</strong> in "Password di Decrittografia" per eseguire la decrittografia; se non è crittografato, puoi eseguire direttamente.',
      note: 'Password errate causeranno fallimento della decrittografia o dell\'anteprima.'
    },
    {
      title: 'Eseguire Decrittografia e Anteprima',
      description: 'Dopo aver cliccato su "Esegui Decrittografia", viene generato un nuovo PDF, e le prime pagine dell\'originale e del decrittografato vengono confrontate nell\'area di anteprima destra.',
      note: 'Se l\'anteprima fallisce, il file potrebbe essere corrotto o incompatibile.'
    }
  ],

  successTitle: 'Completato!',
  successContent: 'Hai imparato come utilizzare lo strumento di decrittografia PDF online per rimuovere restrizioni dei permessi dei documenti e verificare gli effetti della decrittografia.',

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
    { title: 'QPDF Ufficiale', description: 'QPDF fornisce potenti capacità di elaborazione strutturale di PDF, inclusi crittografia e decrittografia.' },
    { title: 'Documentazione PDF.js', description: 'PDF.js è una libreria open-source per il rendering di PDF nei browser, adatta per anteprima e recupero di informazioni di base.' },
    { title: 'Specifiche di Riferimento PDF Adobe', description: 'I documenti di riferimento PDF di Adobe forniscono dettagli sulle specifiche PDF e definizioni relative alla sicurezza.' }
  ],

  coverAlt: 'Immagine della Pagina Prodotto dello Strumento di Decrittografia PDF Online'
}