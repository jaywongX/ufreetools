export default {
  name: 'Codificatore HTML Entities',
  description: 'Converti tra testo HTML e codifica entities',
  title: 'Codificatore/Decodificatore HTML Entities',
  intro: 'La codifica HTML entities converte caratteri speciali in un formato sicuro per HTML, utile per prevenire attacchi XSS o visualizzare codice sorgente HTML.',

  operation: {
    title: 'Tipo Operazione',
    encode: 'Codifica HTML Entities',
    decode: 'Decodifica HTML Entities'
  },

  mode: {
    title: 'Modalità Codifica',
    named: 'Entities con nome (&amp;lt;)',
    decimal: 'Entities decimali (&amp;#60;)',
    hex: 'Entities esadecimali (&amp;#x3C;)',
    full: 'Codifica completa (tutti i caratteri)'
  },

  input: {
    encodeTitle: 'Testo da codificare',
    decodeTitle: 'Testo da decodificare',
    encodePlaceholder: 'Inserisci HTML o testo da codificare...',
    decodePlaceholder: 'Inserisci testo con HTML entities da decodificare...',
    clear: 'Pulisci'
  },

  output: {
    encodeTitle: 'Risultato codifica',
    decodeTitle: 'Risultato decodifica',
    copy: 'Copia risultato',
    copied: '(Copiato',
    preview: 'Anteprima',
    showSource: 'Mostra sorgente'
  },

  reference: {
    title: 'Riferimento Entities',
    commonReferenceTables: 'Tabella HTML entities comuni',
    show: 'Mostra tabella',
    hide: 'Nascondi tabella',
    description: {
      named: 'Usa formato con nome come &amp;lt; per &lt; (solo per HTML entities comuni)',
      decimal: 'Usa formato decimale come &amp;#60; per &lt;',
      hex: 'Usa formato esadecimale come &amp;#x3C; per &lt;',
      full: 'Codifica tutti i caratteri non alfanumerici, inclusi spazi e a capo'
    },
    table: {
      char: 'Carattere',
      named: 'Entity con nome',
      decimal: 'Entity decimale',
      description: 'Descrizione'
    },
    entities: {
      lt: 'Minore di',
      gt: 'Maggiore di',
      amp: 'E commerciale',
      quot: 'Virgolette doppie',
      apos: 'Virgolette singole',
      copy: 'Simbolo copyright',
      reg: 'Simbolo marchio registrato',
      trade: 'Simbolo trademark',
      nbsp: 'Spazio indivisibile',
      cent: 'Simbolo centesimo',
      pound: 'Simbolo sterlina',
      euro: 'Simbolo euro',
      yen: 'Simbolo yen/yuan',
      sect: 'Simbolo sezione',
      minus: 'Segno meno',
      times: 'Segno moltiplicazione',
      divide: 'Segno divisione',
      deg: 'Simbolo grado',
      plusmn: 'Segno più/meno',
      frac14: 'Un quarto'
    }
  },

  messages: {
    copySuccess: 'Copiato negli appunti',
    copyError: 'Errore copia, copia manualmente',
    encodeSuccess: 'Codifica completata',
    decodeSuccess: 'Decodifica completata',
    invalidInput: 'Testo di input non valido'
  }
};