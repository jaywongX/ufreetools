export default {
  name: 'Formattatore JavaScript',
  description: 'Strumento online per formattare e validare JavaScript, con supporto per compressione e abbellimento',
  options: {
    indent: 'Rientro',
    quotes: 'Stile virgolette',
    semicolons: 'Punto e virgola',
    trailingComma: 'Virgola finale'
  },
  actions: {
    format: 'Formatta JavaScript',
    minify: 'Comprimi',
    beautify: 'Abbellisci',
    clear: 'Pulisci',
    copy: 'Copia',
    download: 'Scarica'
  },
  messages: {
    copied: 'Copiato negli appunti!',
    formatSuccess: 'JavaScript formattato con successo',
    formatError: 'Errore durante la formattazione del JavaScript'
  }
}