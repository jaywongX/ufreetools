export default {
  name: 'Codifica/Decodifica URL',
  description: 'La codifica URL converte caratteri speciali in un formato accettabile per gli URL, utile per gestire parametri URL e invii di form.',

  options: {
    operationType: 'Tipo di operazione',
    encodeMode: 'Modalità di codifica'
  },

  encodeOptions: {
    standard: 'Codifica standard (encodeURI)',
    component: 'Codifica componenti (encodeURIComponent)',
    full: 'Codifica completa (tutti i caratteri)',
    standardDescription: 'Codifica l\'intero URL preservando i caratteri strutturali',
    componentDescription: 'Adatto per parametri URL, codifica tutti i caratteri speciali',
    fullDescription: 'Codifica tutti i caratteri non alfanumerici, inclusi spazi (convertiti in %20 invece di +)'
  },

  actions: {
    encode: 'Codifica URL',
    decode: 'Decodifica URL',
    clear: 'Pulisci',
    copyResult: 'Copia risultato'
  },

  input: {
    textToEncode: 'Testo da codificare',
    textToDecode: 'Testo da decodificare',
    encodePlaceholder: 'Inserisci URL o testo da codificare...',
    decodePlaceholder: 'Inserisci URL o testo da decodificare...'
  },

  output: {
    encodeResult: 'Risultato codifica',
    decodeResult: 'Risultato decodifica'
  },

  messages: {
    copied: '(Copiato',
    error: 'Errore: {message}',
    decodeError: 'Decodifica fallita: "{text}"',
    copyFailed: 'Copia fallita, copia manualmente'
  },

  referenceTable: {
    title: 'Tabella di riferimento per codifica URL',
    showTable: 'Mostra tabella',
    hideTable: 'Nascondi tabella',
    character: 'Carattere',
    encoded: 'Codifica URL',
    description: 'Descrizione',
    descriptions: {
      space: 'Spazio',
      exclamation: 'Punto esclamativo',
      doubleQuote: 'Virgolette doppie',
      hash: 'Cancelletto',
      dollar: 'Simbolo dollaro',
      percent: 'Simbolo percentuale',
      ampersand: 'E commerciale',
      singleQuote: 'Apice singolo',
      leftParenthesis: 'Parentesi sinistra',
      rightParenthesis: 'Parentesi destra',
      asterisk: 'Asterisco',
      plus: 'Simbolo più',
      comma: 'Virgola',
      slash: 'Barra',
      colon: 'Due punti',
      semicolon: 'Punto e virgola',
      lessThan: 'Minore di',
      equals: 'Uguale',
      greaterThan: 'Maggiore di',
      questionMark: 'Punto interrogativo',
      at: 'Chiocciola',
      leftBracket: 'Parentesi quadra sinistra',
      backslash: 'Barra inversa',
      rightBracket: 'Parentesi quadra destra',
      caret: 'Accento circonflesso',
      backtick: 'Accento grave',
      leftBrace: 'Parentesi graffa sinistra',
      pipe: 'Barra verticale',
      rightBrace: 'Parentesi graffa destra',
      tilde: 'Tilde',
      chinese: 'Caratteri cinesi (codifica UTF-8)'
    }
  }
};