export default {
  name: 'Convertitore Verticale a Orizzontale',
  description: 'Converte immagini verticali in formato orizzontale con diverse opzioni di conversione',
  
  upload: {
    title: 'Carica Immagine',
    dropzone: 'Trascina e rilascia l\'immagine qui',
    maxSize: 'Dimensione massima: 10MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF'
  },
  
  settings: {
    title: 'Impostazioni Conversione',
    presets: 'Preset rapidi',
    conversionMode: 'Modalità conversione',
    modes: {
      rotate: 'Ruota',
      fill: 'Riempimento sfondo',
      blur: 'Sfocatura sfondo',
      stretch: 'Allunga bordi',
      dualColor: 'Sfondo bicolore'
    },
    rotationAngle: 'Angolo di rotazione',
    fillColor: 'Colore sfondo',
    blurRadius: 'Intensità sfocatura',
    stretchEdges: 'Intensità allungamento',
    leftColor: 'Colore sinistro',
    rightColor: 'Colore destro',
    sizeOption: 'Impostazioni dimensioni',
    sizeModes: {
      auto: 'Dimensioni automatiche',
      preset: 'Dimensioni predefinite',
      custom: 'Dimensioni personalizzate'
    },
    sizePresets: 'Preset dimensioni',
    outputSize: 'Dimensioni output',
    width: 'Larghezza',
    height: 'Altezza',
    dimensionsHint: 'Inserisci dimensioni in pixel',
    autoSize: 'Calcola dimensioni automaticamente',
    outputFormat: 'Formato output',
    quality: 'Qualità immagine',
    advancedOptions: 'Opzioni avanzate',
    preserveRatio: 'Mantieni proporzioni',
    sharpen: 'Nitidezza',
    addWatermark: 'Aggiungi watermark',
    watermarkPlaceholder: 'Inserisci testo watermark',
    watermarkColor: 'Colore watermark'
  },
  
  output: {
    preview: 'Anteprima risultato',
    dimensions: 'Dimensioni',
    before: 'Prima',
    after: 'Dopo'
  },
  
  actions: {
    selectImage: 'Seleziona immagine',
    convert: 'Converti immagine',
    download: 'Scarica immagine',
    reset: 'Rimuovi',
    showSideBySide: 'Mostra confronto',
    hideComparison: 'Nascondi confronto',
    hideSideBySide: 'Chiudi'
  },
  
  messages: {
    processing: 'Elaborazione immagine in corso...',
    convertPrompt: 'Il risultato della conversione apparirà qui',
    error: 'Errore durante l\'elaborazione',
    success: 'Conversione completata con successo!'
  },

  examples: {
    title: 'Suggerimenti',
    social: 'Perfetto per post sui social, le immagini orizzontali performano meglio',
    socialTip: 'Usa la modalità sfocatura per i migliori risultati sui social',
    website: 'Crea banner per siti web e blog',
    websiteTip: 'La modalità bicolore è perfetta per banner web'
  },

  help: {
    title: 'Come usare questo strumento',
    description: 'Questo strumento converte immagini verticali in formato orizzontale mantenendo qualità ed effetti visivi.',
    example1: {
      title: 'Post social media',
      description: 'Converti foto verticali in formato orizzontale con sfondo sfocato per i social'
    },
    example2: {
      title: 'Banner sito web',
      description: 'Crea header e banner per siti web partendo da immagini verticali con sfondo colorato'
    }
  },

  article: {
    title: "Convertitore Verticale a Orizzontale: Guida Completa",
    
    intro: {
      title: "Funzionalità e casi d'uso",
      content: `
        <p>Il nostro <strong>convertitore verticale a orizzontale</strong> trasforma immagini verticali in formato orizzontale mantenendo la qualità visiva. Offre diversi metodi di conversione tra cui sfocatura sfondo, riempimento colorato, gradiente bicolore, allungamento bordi e rotazione.</p>
        
        <p>Funzionalità principali:</p>
        <ul>
          <li><strong>Diverse modalità</strong> per vari stili visivi</li>
          <li><strong>Ottimizzazione social media</strong> con dimensioni predefinite</li>
          <li><strong>Opzioni avanzate</strong> tra cui nitidezza e watermark</li>
          <li><strong>Output di qualità</strong> in vari formati (JPEG, PNG, WebP)</li>
        </ul>
        
        <h4>Casi d'uso comuni:</h4>
        
        <p><strong>Contenuti social</strong>: Converti foto verticali da smartphone in post orizzontali per Facebook, Twitter, LinkedIn e YouTube.</p>
        
        <p><strong>Banner web</strong>: Crea header e banner partendo da foto verticali di prodotti o ritratti.</p>
        
        <p><strong>Marketing digitale</strong>: Adatta immagini verticali di prodotti a formati pubblicitari orizzontali.</p>
        
        <p><strong>Miniature video</strong>: Converti screenshot verticali in miniature orizzontali per YouTube e Vimeo.</p>
        
        <p><strong>Presentazioni</strong>: Adatta immagini verticali a formati orizzontali per PowerPoint e Google Slides.</p>
      `
    },
    
    faq: {
      title: "Domande Frequenti",
      q1: "Perché convertire immagini verticali in orizzontali?",
      a1: "Le immagini orizzontali performano meglio su social media, siti web e materiali di marketing, ottenendo maggiore engagement.",
      q2: "La conversione riduce la qualità?",
      a2: "No, il nostro strumento mantiene la qualità originale usando tecniche avanzate come sfocatura e riempimento invece del semplice ritaglio.",
      q3: "Quale modalità usare per i social?",
      a3: "La modalità sfocatura è ideale per i social, mantenendo il soggetto al centro con uno sfondo sfocato esteso orizzontalmente.",
      q4: "Quali sono le dimensioni ottimali?",
      a4: "Proporzioni comuni includono 16:9 (widescreen), 3:2 (standard) e dimensioni specifiche come 1200×630 per Facebook o 1280×720 per YouTube.",
      q5: "Posso aggiungere un watermark?",
      a5: "Sì, nelle opzioni avanzate puoi aggiungere testo personalizzato e regolarne il colore per proteggere i tuoi contenuti.",
      q6: "Lo strumento funziona su mobile?",
      a6: "Assolutamente! Il convertitore è responsive e funziona su smartphone, tablet e computer con browser moderni."
    },
    
    tutorial: {
      title: "Guida Passo Passo",
      step1: "Carica la tua immagine verticale trascinandola nell'area di upload o cliccando \"Seleziona immagine\".",
      step2: "Scegli la modalità di conversione: sfocatura, riempimento, bicolore, allungamento o rotazione.",
      step3: "Regola le impostazioni specifiche (intensità sfocatura, colore sfondo, ecc.) per personalizzare il risultato.",
      step4: "Seleziona le dimensioni: automatiche (consigliate), preset per piattaforme specifiche o personalizzate.",
      step5: "Per esigenze avanzate, accedi alle opzioni di nitidezza, proporzioni e watermark.",
      step6: "Clicca \"Converti immagine\" per trasformare la tua immagine in formato orizzontale.",
      step7: "Visualizza l'anteprima e confronta prima/dopo con la vista comparativa.",
      step8: "Se necessario, modifica le impostazioni e riconverti fino a ottenere il risultato desiderato.",
      step9: "Scarica l'immagine orizzontale nel formato preferito (JPEG, PNG o WebP)."
    }
  }
}