export default {
  name: 'JSON Formatierer',
  description: 'Online JSON Formatierung und Validierungstool, unterstützt Komprimierung und Verschönerung',

  options: {
    indent: 'Einzug',
    sort: 'Schlüssel sortieren',
    compress: 'Komprimieren',
    beautify: 'Verschönern'
  },

  actions: {
    format: 'JSON formatieren',
    compress: 'Komprimieren',
    clear: 'Löschen',
    copy: 'Kopieren',
    download: 'Herunterladen',
    transferMeaning: 'Escapen',
    contraposition: 'Unescapen'
  },

  messages: {
    invalidJson: 'Ungültige JSON-Syntax',
    copied: 'In die Zwischenablage kopiert!',
    empty: 'Bitte JSON-Inhalt eingeben',
    formatTip: 'Nach Formatierung oder Komprimierung wird die Eigenschaftsliste angezeigt',
    formatSuccess: 'JSON erfolgreich formatiert',
    compressSuccess: 'JSON erfolgreich komprimiert',
    escapeSuccess: 'JSON erfolgreich escaped',
    unescapeSuccess: 'JSON erfolgreich unescaped',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
  },

  labels: {
    jsonData: 'JSON-Daten',
    propertyList: 'Eigenschaftsliste',
    clickToCopy: '(Klicken zum Kopieren)'
  },

  placeholders: {
    jsonInput: 'Fügen Sie Ihre JSON-Daten ein...'
  }
};