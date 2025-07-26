export default {
  name: 'Generatore di formule LaTeX',
  description: 'Genera ed esporta formule matematiche LaTeX in tempo reale',

  // Testi UI
  input: 'Inserisci codice LaTeX',

  output: 'Anteprima risultato',
  renderButton: 'Renderizza formula',
  exportButton: 'Esporta come immagine',
  copyButton: 'Copia codice LaTeX',

  // Impostazioni
  settings: {
    title: 'Impostazioni',
    fontSize: 'Dimensione carattere',
    textColor: 'Colore testo',
    backgroundColor: 'Colore sfondo',
    displayMode: 'Modalità visualizzazione',
    displayModeInline: 'Modalità inline',
    displayModeBlock: 'Modalità blocco'
  },

  // Esempi
  examples: {
    title: 'Esempi',
    basic: 'Formule base',
    fraction: 'Frazioni',
    superscript: 'Apici/pedici',
    integral: 'Integrali',
    matrix: 'Matrici',
    more: 'Altri esempi'
  },

  // Messaggi
  copied: 'Copiato negli appunti',

  errorTitle: 'Errore rendering',
  errorMessage: 'Controlla la sintassi LaTeX'
};