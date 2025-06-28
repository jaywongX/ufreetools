export default {
    name: 'CSS-Formatierung',
    description: 'Formatieren und verschönern Sie CSS-Code für bessere Lesbarkeit',
    options: {
      indentSize: 'Einzugsgröße',
      indentWithTabs: 'Mit Tabulatoren einrücken',
      convertQuotes: 'Anführungszeichen konvertieren',
      sortSelectors: 'Selektoren sortieren',
      sortProperties: 'Eigenschaften sortieren',
      compressColors: 'Farbwerte komprimieren',
      expandShorthand: 'Kurzschreibweise erweitern'
    },
    actions: {
      format: 'CSS formatieren',
      minify: 'Minifizieren',
      clear: 'Löschen',
      copy: 'Kopieren',
      download: 'Herunterladen',
      upload: 'Datei hochladen'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      formatSuccess: 'CSS erfolgreich formatiert',
      formatError: 'Fehler beim Formatieren des CSS',
      invalidCss: 'Ungültige CSS-Syntax'
    }
  }