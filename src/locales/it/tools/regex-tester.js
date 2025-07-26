export default {
  name: 'Tester Espressioni Regolari',
  description: 'Testa e debugga espressioni regolari con evidenziazione in tempo reale e spiegazioni',

  actions: {
    test: 'Testa',
    clear: 'Pulisci',
    showExamples: 'Mostra esempi',
    hideExamples: 'Nascondi esempi',
    copy: 'Copia'
  },

  sections: {
    examples: 'Esempi comuni di regex',
    pattern: 'Pattern regex',
    input: 'Stringa di test',
    results: 'Risultati corrispondenza',
    flags: 'Flag'
  },

  flags: {
    g: 'Corrispondenza globale (g)',
    i: 'Ignora maiuscole/minuscole (i)',
    m: 'Modalità multilinea (m)',
    s: 'Punto corrisponde a tutto (s)',
    u: 'Modalità Unicode (u)',
    y: 'Corrispondenza adesiva (y)'
  },

  errors: {
    emptyRegex: 'Inserisci un\'espressione regolare',
    emptyTestString: 'Inserisci un testo da testare',
    invalidRegex: 'Espressione regolare non valida'
  },

  messages: {
    matchesFound: 'Trovate {count} corrispondenze',
    noMatches: 'Nessuna corrispondenza trovata',
    copied: 'Copiato negli appunti!'
  },

  placeholders: {
    pattern: 'Inserisci il pattern regex',
    testString: 'Inserisci il testo da testare'
  },

  options: {
    flags: 'Flag',
    global: 'Corrispondenza globale (g)',
    caseInsensitive: 'Ignora maiuscole/minuscole (i)',
    multiline: 'Modalità multilinea (m)',
    dotAll: 'Punto corrisponde a tutto (s)',
    unicode: 'Modalità Unicode (u)',
    sticky: 'Corrispondenza adesiva (y)'
  },

  labels: {
    pattern: 'Espressione regolare',
    testString: 'Stringa di test',
    matches: 'Corrispondenze',
    groups: 'Gruppi',
    noMatches: 'Nessuna corrispondenza'
  },

  tips: {
    title: 'Suggerimenti',
    pattern: 'Non includere le barre / nel pattern regex.',
    flags: 'Usa i flag per modificare il comportamento della corrispondenza (g: globale, i: case-insensitive, m: multilinea).',
    examples: 'Clicca "Mostra esempi" per vedere pattern regex comuni.',
    testing: 'Dopo aver inserito pattern e testo, clicca "Testa" per vedere i risultati.'
  },

  match: 'Corrispondenza',
  position: 'Posizione',
  group: 'Gruppo',
  resultsWillAppearHere: 'I risultati delle corrispondenze regex appariranno qui...',
  regexError: 'Errore regex: {message}',
  emailAddress: 'Indirizzo email',
  phoneNumber: 'Numero di telefono (Cina)',
  ipAddress: 'Indirizzo IP',
  dateFormat: 'Data (aaaa-mm-gg)',
  chineseCharacters: 'Caratteri cinesi',
  phoneNumberExample: 'Contatti: 13912345678\nWeChat: 18887654321\nTelefono fisso: 010-12345678',
  urlExample: 'Visita https://example.com\no http://www.domain.org/path?query=value',
  ipAddressExample: 'Server: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Data inizio: 2023-01-15\nData fine: 2023-02-28\nData non valida: 2023-13-45',
  chineseCharactersExample: 'Hello mondo! 你好，World!'
};