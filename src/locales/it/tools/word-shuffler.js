export default {
  name: 'Rimescolatore di Testo',
  description: 'Mescola casualmente parole, frasi o righe nel testo mantenendo la formattazione',
  inputLabel: 'Inserisci testo',
  inputPlaceholder: 'Inserisci o incolla qui il testo da rimescolare...',
  outputLabel: 'Risultato rimescolato',
  shuffleMode: 'Modalità di rimescolamento',

  modes: {
    word: 'Parole',
    sentence: 'Frasi',
    line: 'Righe'
  },

  preserveOptions: 'Opzioni di conservazione',
  preserveCapitalization: 'Mantieni maiuscole',
  preservePunctuation: 'Mantieni punteggiatura',
  shuffleButton: 'Rimescola',
  copyButton: 'Copia risultato',
  clearButton: 'Pulisci tutto',
  copiedMessage: 'Copiato negli appunti!',
  tagline: 'Lo strumento di randomizzazione testuale più avanzato al mondo',
  wordCount: 'parole',
  importButton: 'Importa file',
  clearInputButton: 'Svuota input',
  clearOutputButton: 'Svuota output',
  downloadButton: 'Scarica',
  useExampleButton: 'Usa esempio',
  advancedOptions: 'Opzioni avanzate',
  delimiterOptions: 'Opzioni delimitatori',
  wordDelimiters: 'Delimitatori parole',
  wordDelimitersHint: 'Caratteri usati per separare le parole',
  sentenceDelimiters: 'Delimitatori frasi',
  sentenceDelimitersHint: 'Caratteri usati per terminare le frasi',
  additionalOptions: 'Opzioni aggiuntive',
  repeatCount: 'Conteggio ripetizioni',
  repeatCountHint: 'Genera più versioni rimescolate',
  shuffleGroup: 'Dimensione gruppo rimescolamento',
  shuffleGroupHint: 'Rimescola parole in gruppi di dimensione specificata',
  removeRepeatedWords: 'Rimuovi parole ripetute',
  preserveSpacing: 'Mantieni spaziatura',
  examplesTitle: 'Esempi',
  useThisExample: 'Usa questo esempio',
  helpTitle: 'Aiuto e informazioni',
  whatIsTitle: 'Cos\'è il Rimescolatore di Testo?',
  whatIsDescription: 'Il Rimescolatore di Testo è uno strumento che può randomizzare l\'ordine di parole, frasi, righe, caratteri o paragrafi in un testo. Usa algoritmi complessi per garantire risultati veramente casuali mentre preserva le opzioni di formattazione che scegli, come maiuscole e punteggiatura.',
  howToUseTitle: 'Come usare questo strumento',
  tipsTitle: 'Suggerimenti per un uso ottimale',

  modes: {
    word: 'Parole',
    sentence: 'Frasi',
    line: 'Righe',
    character: 'Caratteri',
    paragraph: 'Paragrafi'
  },

  howToUseSteps: [
    'Inserisci o incolla il tuo testo nella casella di input a sinistra.',
    'Seleziona la modalità di rimescolamento e le opzioni desiderate in basso.',
    'Clicca il pulsante "Rimescola" per generare testo casuale.',
    'Il risultato apparirà nella casella di output a destra.',
    'Usa i pulsanti copia o scarica per salvare i tuoi risultati.'
  ],

  tips: [
    'Per esercizi di scrittura creativa, prova la modalità parole mantenendo le maiuscole ma rimuovendo la punteggiatura.',
    'Per testare layout, usa la modalità frasi attivando tutte le opzioni di conservazione per mantenere testo leggibile ma casuale.',
    'Usa la modalità caratteri per creare password o codici sicuri basati su input testuali.',
    'La funzionalità di rimescolamento a gruppi ti permette di mantenere insieme parole correlate mentre randomizzi il testo complessivo.',
    'Hai bisogno di più varianti? Imposta il conteggio ripetizioni per generare più versioni rimescolate in una volta.'
  ],

  examples: {
    basic: {
      title: 'Rimescolamento base di parole',
      description: 'Semplice randomizzazione di parole mantenendo punteggiatura e maiuscole',
      input: 'La veloce volpe marrone salta sopra il cane pigro. Tutti e cinque i maghi pugili saltano velocemente.',
      output: 'Marrone la veloce volpe pigro cane salta sopra. Veloci saltano maghi pugili e cinque tutti i.'
    },
    sentence: {
      title: 'Rimescolamento frasi',
      description: 'Randomizzazione dell\'ordine di frasi complete',
      input: 'Prima frase qui. Questa è la seconda frase. Ecco la terza frase. Infine, abbiamo la quarta frase.',
      output: 'Ecco la terza frase. Prima frase qui. Infine, abbiamo la quarta frase. Questa è la seconda frase.'
    },
    creative: {
      title: 'Ricombinazione creativa',
      description: 'Genera nuovo testo creativo rimescolando parole senza vincoli di formattazione',
      input: 'La poesia è creazione ritmica della bellezza con le parole. È la rivelazione di sentimenti che il poeta crede personali e interiori, ma che il lettore riconosce come propri.',
      output: 'Bellezza con creazione ritmica è parole poeta rivelazione ma lettore personale interiore riconosce come propria la di sentimenti che il crede e, che.'
    }
  },

  stepLabel: 'Passo',
  emptyInputMessage: 'Inserisci del testo da rimescolare',
  errorMessage: 'Errore durante il rimescolamento, prova una modalità o opzioni diverse',
  downloadFileName: 'testo_rimescolato.txt',

  errorMessages: {
    shuffleError: 'Errore di rimescolamento:',
    sentenceError: 'Errore rimescolamento frasi:',
    copyError: 'Errore copia testo:'
  }
};