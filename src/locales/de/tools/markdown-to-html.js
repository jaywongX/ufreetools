export default {
  name: 'Markdown zu HTML Konverter',
  description: 'Konvertiert Markdown-Text in HTML mit anpassbaren Optionen',

  // Eingabebereich
  input: {
    title: 'Markdown eingeben',
    placeholder: 'Markdown-Text hier eingeben oder einfügen...',
    loadSample: 'Beispiel laden',
    clearInput: 'Eingabe löschen',
    uploadFile: 'Markdown-Datei hochladen',
    paste: 'Aus Zwischenablage einfügen',
    charCount: 'Zeichenanzahl',
    lineCount: 'Zeilenanzahl'
  },

  // Ausgabebereich
  output: {
    title: 'HTML-Ausgabe',
    copied: 'HTML wurde in die Zwischenablage kopiert',
    download: 'HTML herunterladen',
    copyOutput: 'HTML kopieren',
    clearOutput: 'Ausgabe löschen',
    previewTab: 'Vorschau',
    htmlTab: 'HTML-Code',
    previewMode: 'Vorschaumodus',
    sourceMode: 'HTML-Quellcode'
  },

  // Optionen
  options: {
    title: 'Konvertierungsoptionen',
    headerIds: 'Automatische Überschriften-IDs',
    gfm: 'GitHub Flavored Markdown',
    tables: 'Tabellen',
    breaks: 'Zeilenumbrüche',
    smartLists: 'Intelligente Listen',
    smartypants: 'Intelligente Anführungszeichen',
    xhtml: 'XHTML',
    highlight: 'Syntaxhervorhebung',
    sanitize: 'HTML bereinigen',
    footnotes: 'Fußnoten',
    taskLists: 'Aufgabenlisten',
    emoji: 'Emoji-Unterstützung',
    includeStyle: 'Standard-CSS einbinden',
    realtimePreview: 'Echtzeit-Vorschau',
    scrollSync: 'Synchronisiertes Scrollen',
    htmlOptions: 'HTML-Optionen'
  },

  // Stiloptionen
  styles: {
    title: 'Stiloptionen',
    theme: 'Thema',
    codeTheme: 'Code-Thema',
    customCSS: 'Benutzerdefiniertes CSS',
    fontSize: 'Schriftgröße',
    lineHeight: 'Zeilenhöhe',
    enableCustom: 'Benutzerdefinierte Stile aktivieren'
  },

  // Themen
  themes: {
    default: 'Standard',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Dunkler Modus',
    custom: 'Benutzerdefiniert'
  },

  // Code-Themen
  codeThemes: {
    default: 'Standard',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  // Aktionen
  actions: {
    convert: 'In HTML konvertieren',
    clearAll: 'Alles löschen',
    copyHtml: 'HTML kopieren',
    saveAsHtml: 'Als HTML speichern',
    generateToc: 'Inhaltsverzeichnis generieren'
  },

  // Nachrichten
  messages: {
    conversionSuccess: 'Markdown erfolgreich konvertiert',
    conversionFailed: 'Markdown-Konvertierung fehlgeschlagen: {error}',
    emptyInput: 'Bitte Markdown zum Konvertieren eingeben',
    copied: 'HTML wurde in die Zwischenablage kopiert',
    tocGenerated: 'Inhaltsverzeichnis wurde generiert'
  },

  // Benachrichtigungen
  alerts: {
    copied: 'In Zwischenablage kopiert',
    copyFailed: 'Kopieren in Zwischenablage fehlgeschlagen',
    pasteFailed: 'Einfügen aus Zwischenablage fehlgeschlagen',
    confirmClear: 'Sind Sie sicher, dass Sie die Eingabe löschen möchten?'
  },

  // Status
  status: {
    lastConversion: 'Letzte Konvertierung'
  },

  // Beispiele
  samples: {
    basic: 'Grundlegendes Beispiel',
    extended: 'Erweitertes Beispiel',
    article: 'Artikel-Beispiel'
  },

  // Download
  download: {
    title: 'Markdown zu HTML Export'
  }
};