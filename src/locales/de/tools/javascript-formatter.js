export default {
    name: 'JavaScript-Formatierer',
    description: 'Online JavaScript-Formatierungs- und Validierungswerkzeug mit Unterstützung für Komprimierung und Verschönerung',
    options: {
      indent: 'Einzug',
      quotes: 'Anführungszeichen-Stil',
      semicolons: 'Semikolons',
      trailingComma: 'Nachgestelltes Komma'
    },
    actions: {
      format: 'JavaScript formatieren',
      minify: 'Komprimieren',
      beautify: 'Verschönern',
      clear: 'Löschen',
      copy: 'Kopieren',
      download: 'Herunterladen'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      formatSuccess: 'JavaScript erfolgreich formatiert',
      formatError: 'Fehler beim Formatieren von JavaScript'
    }
  }