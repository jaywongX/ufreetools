export default {
  name: 'Convertitore Markdown a HTML',
  description: 'Converte testo Markdown in HTML con opzioni personalizzabili',

  input: {
    title: 'Input Markdown',
    placeholder: 'Inserisci o incolla qui il tuo testo Markdown...',
    loadSample: 'Carica esempio',
    clearInput: 'Pulisci',
    uploadFile: 'Carica file Markdown',
    paste: 'Incolla dagli appunti',
    charCount: 'Conteggio caratteri',
    lineCount: 'Conteggio righe'
  },

  output: {
    title: 'Output HTML',
    copied: 'HTML copiato negli appunti',
    download: 'Scarica HTML',
    copyOutput: 'Copia HTML',
    clearOutput: 'Pulisci output',
    previewTab: 'Anteprima',
    htmlTab: 'Codice HTML',
    previewMode: 'Modalità anteprima',
    sourceMode: 'Codice sorgente'
  },

  options: {
    title: 'Opzioni conversione',
    headerIds: 'ID automatici per titoli',
    gfm: 'Markdown stile GitHub',
    tables: 'Tabelle',
    breaks: 'A capo',
    smartLists: 'Liste intelligenti',
    smartypants: 'Punteggiatura intelligente',
    xhtml: 'XHTML',
    highlight: 'Evidenzia sintassi',
    sanitize: 'Purifica HTML',
    footnotes: 'Note a piè di pagina',
    taskLists: 'Liste di attività',
    emoji: 'Supporto emoji',
    includeStyle: 'Includi CSS predefinito',
    realtimePreview: 'Anteprima in tempo reale',
    scrollSync: 'Sincronizzazione scorrimento',
    htmlOptions: 'Opzioni HTML'
  },

  styles: {
    title: 'Opzioni stile',
    theme: 'Tema',
    codeTheme: 'Tema codice',
    customCSS: 'CSS personalizzato',
    fontSize: 'Dimensione carattere',
    lineHeight: 'Altezza riga',
    enableCustom: 'Abilita stili personalizzati'
  },

  themes: {
    default: 'Predefinito',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Modalità scura',
    custom: 'Personalizzato'
  },

  codeThemes: {
    default: 'Predefinito',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'Converti in HTML',
    clearAll: 'Pulisci tutto',
    copyHtml: 'Copia HTML',
    saveAsHtml: 'Salva come HTML',
    generateToc: 'Genera sommario'
  },

  messages: {
    conversionSuccess: 'Conversione Markdown completata',
    conversionFailed: 'Conversione Markdown fallita: {error}',
    emptyInput: 'Inserisci Markdown da convertire',
    copied: 'HTML copiato negli appunti',
    tocGenerated: 'Sommario generato'
  },

  alerts: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia negli appunti fallita',
    pasteFailed: 'Incolla dagli appunti fallito',
    confirmClear: 'Sei sicuro di voler cancellare l\'input?'
  },

  status: {
    lastConversion: 'Ultima conversione'
  },

  samples: {
    basic: 'Esempio base',
    extended: 'Esempio avanzato',
    article: 'Esempio articolo'
  },

  download: {
    title: 'Esporta Markdown a HTML'
  }
};