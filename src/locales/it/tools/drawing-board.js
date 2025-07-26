export default {
  name: 'Tavolozza Semplice',
  description: 'Strumento di disegno online con supporto per disegno libero, cambio colore e dimensione del pennello',

  // Barra degli strumenti
  tools: {
    brush: 'Pennello',
    eraser: 'Gomma',
    clear: 'Pulisci tavola',
    save: 'Salva immagine',
    undo: 'Annulla',
    redo: 'Ripristina',
    apply: 'Applica'
  },

  // Impostazioni
  settings: {
    brushSize: 'Dimensione pennello',
    color: 'Colore',
    opacity: 'Opacità',
    backgroundColor: 'Colore sfondo'
  },

  // Selettore colori
  colors: {
    black: 'Nero',
    white: 'Bianco',
    red: 'Rosso',
    green: 'Verde',
    blue: 'Blu',
    yellow: 'Giallo',
    orange: 'Arancione',
    purple: 'Viola',
    pink: 'Rosa',
    brown: 'Marrone',
    gray: 'Grigio',
    custom: 'Colore personalizzato'
  },

  // Impostazioni tavola
  canvas: {
    width: 'Larghezza',
    height: 'Altezza',
    resize: 'Ridimensiona tavola',
    orientation: 'Orientamento',
    portrait: 'Verticale',
    landscape: 'Orizzontale',
    square: 'Quadrato'
  },

  // Messaggi e avvisi
  messages: {
    saveSuccess: 'Immagine salvata',
    confirmClear: 'Sei sicuro di voler pulire la tavola? Tutto il contenuto non salvato andrà perso.',
    unsupportedBrowser: 'Il tuo browser non supporta Canvas, usa un browser moderno.',
    fileNamePrompt: 'Inserisci nome file',
    defaultFileName: 'Il mio disegno'
  },

  // Informazioni sullo strumento
  aboutTitle: 'Informazioni su Tavolozza Semplice',

  aboutDescription: 'Tavolozza Semplice è uno strumento di disegno online intuitivo e facile da usare che ti permette di esprimere liberamente la tua creatività attraverso il disegno. Che si tratti di schizzi, illustrazioni semplici o annotazioni visive, questo strumento soddisfa tutte le tue esigenze.',
  featuresTitle: 'Funzionalità principali',
  feature1: 'Disegno libero con supporto per diversi colori e dimensioni del pennello',
  feature2: 'Strumento gomma per modificare facilmente i disegni',
  feature3: 'Funzioni annulla e ripristina per correggere errori',
  feature4: 'Regolazione dell\'opacità del pennello per effetti artistici',
  feature5: 'Pulizia della tavola con un clic per ricominciare',
  feature6: 'Salvataggio delle opere in formato immagine',
  howToUseTitle: 'Come usare',
  howToUseStep1: '1. Seleziona lo strumento pennello e il colore per iniziare a disegnare',
  howToUseStep2: '2. Usa i cursori per regolare dimensione e opacità del pennello',
  howToUseStep3: '3. Per modificare, usa lo strumento gomma per cancellare',
  howToUseStep4: '4. Puoi annullare o ripristinare le azioni in qualsiasi momento',
  howToUseStep5: '5. Al termine, clicca salva per scaricare la tua opera',
  tipsTitle: 'Consigli utili',
  tip1: 'Usa pennelli fini per dettagli precisi e più spessi per riempimenti ampi',
  tip2: 'Riduci l\'opacità per effetti acquerello o trasparenze',
  tip3: 'Sfrutta la funzione annulla senza paura di sbagliare',
  tip4: 'Disegna prima i contorni generali, poi aggiungi i dettagli',
  tip5: 'Sperimenta combinazioni di colori per opere più vivaci'
};