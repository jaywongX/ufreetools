export default {
  name: 'Confronto Differenze Codice',
  description: 'Confronta due porzioni di codice ed evidenzia le differenze',

  options: {
    title: 'Opzioni',
    ignoreCase: 'Ignora maiuscole/minuscole',
    ignoreWhitespace: 'Ignora spazi bianchi',
    trimWhitespace: 'Taglia spazi bianchi',
    diffMode: 'Modalità differenze',
    diffModes: {
      chars: 'Caratteri',
      words: 'Parole',
      lines: 'Righe',
      sentences: 'Frasi',
      json: 'JSON'
    },
    diffStyle: 'Stile visualizzazione',
    diffStyles: {
      split: 'Vista affiancata',
      inline: 'Vista inline'
    },
    context: 'Numero righe contesto',
    wrap: 'A capo automatico',
    languages: {
      plaintext: 'Testo semplice',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: 'Codice originale',
    modified: 'Codice modificato',
    placeholderOriginal: 'Inserisci qui il codice originale...',
    placeholderModified: 'Inserisci qui il codice modificato...'
  },

  actions: {
    compare: 'Confronta',
    clear: 'Pulisci',
    swap: 'Scambia',
    copy: 'Copia differenze',
    download: 'Scarica differenze',
    upload: 'Carica file'
  },

  results: {
    title: 'Risultati differenze',
    changes: 'Modifiche',
    additions: 'Aggiunte',
    deletions: 'Eliminazioni',
    unchanged: 'Invariato',
    noChanges: 'Nessuna differenza trovata - i testi sono identici',
    loading: 'Generazione differenze in corso...'
  },

  upload: {
    originalFile: 'File originale',
    modifiedFile: 'File modificato',
    dropOriginal: 'Trascina qui il file originale o fai clic per sfogliare',
    dropModified: 'Trascina qui il file modificato o fai clic per sfogliare'
  },

  messages: {
    copied: 'Copiato negli appunti!',
    inputRequired: 'Inserisci testo in entrambi i campi di input',
    diffGenerated: 'Differenze generate con successo',
    error: 'Errore durante la generazione delle differenze',
    fileError: 'Errore durante la lettura del file'
  },

  tips: {
    title: 'Suggerimenti',
    compareOptions: 'Regola le opzioni di confronto in base alle tue esigenze - ignorare gli spazi è utile per confrontare codice.',
    diffModes: 'Diverse modalità di differenze forniscono diversi livelli di dettaglio nel confronto.',
    largeFiles: 'Per file grandi, il confronto basato sulle righe è più efficiente.',
    jsonMode: 'Usa la modalità JSON per confrontare dati strutturati - normalizzerà e confronterà la struttura degli oggetti.'
  }
};