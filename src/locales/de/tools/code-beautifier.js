export default {
    name: 'Code-Verschönerer',
    description: 'Formatieren und verschönern Sie Code mit Syntaxhervorhebung und Einrückung',
    languages: {
      title: 'Sprachen',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON',
      sql: 'SQL',
      xml: 'XML',
      markdown: 'Markdown',
      php: 'PHP',
      python: 'Python',
      ruby: 'Ruby',
      java: 'Java',
      csharp: 'C#',
      cpp: 'C++',
      typescript: 'TypeScript'
    },
    actions: {
      beautify: 'Verschönern',
      minify: 'Minifizieren',
      clear: 'Löschen',
      copy: 'Kopieren',
      download: 'Herunterladen',
      upload: 'Datei hochladen'
    },
    options: {
      title: 'Optionen',
      indentSize: 'Einrückungsgröße',
      indentWith: 'Einrückungsart',
      spaces: 'Leerzeichen',
      tabs: 'Tabulatoren',
      lineBreaks: 'Zeilenumbruchstil',
      quoteStyle: 'Anführungszeichen-Stil',
      bracketStyle: 'Klammerstil',
      preserveNewlines: 'Zeilenumbrüche beibehalten',
      endWithNewline: 'Mit Zeilenumbruch enden',
      removeComments: 'Kommentare entfernen',
      wrapLineLength: 'Zeilenumbruchslänge',
      lineNumbers: 'Zeilennummern',
      showLineNumbers: 'Zeilennummern anzeigen',
      wrapLines: 'Automatischer Zeilenumbruch',
      theme: 'Thema',
      autoDetect: 'Automatische Erkennung',
      tryAutoDetect: 'Sprache automatisch erkennen'
    },
    input: {
      title: 'Eingabe',
      placeholder: 'Fügen Sie hier Ihren Code ein...'
    },
    output: {
      title: 'Ausgabe',
      placeholder: 'Der verschönerte Code wird hier angezeigt...'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      beautifySuccess: 'Code erfolgreich verschönert',
      minifySuccess: 'Code erfolgreich minifiziert',
      beautifyError: 'Fehler beim Verschönern des Codes',
      minifyError: 'Fehler beim Minifizieren des Codes',
      emptyCode: 'Bitte geben Sie Code zum Verschönern ein',
      fileTooBig: 'Datei zu groß (maximal 2MB)',
      invalidFile: 'Ungültiger oder nicht unterstützter Dateityp',
      preview: 'Vorschau',
      HTMLCode: 'HTML-Code',
    },
    stats: {
      original: 'Original',
      beautified: 'Verschönert',
      minified: 'Minifiziert',
      size: 'Größe',
      characters: 'Zeichen',
      lines: 'Zeilen'
    },
    tips: {
      title: 'Anwendungstipps',
      tip1: 'Wählen Sie die passende Programmiersprache für optimale Syntaxhervorhebung',
      tip2: 'Wählen Sie verschiedene Themenstile, die zu Ihrer Website passen',
      tip3: 'Kopieren Sie den generierten HTML-Code, der direkt in HTML-fähige Editoren oder Websites eingefügt werden kann',
      tip4: 'Der generierte Highlight-Code unterstützt Anpassung und Dunkelmodus',
      tip5: 'Zeilennummern verbessern die Lesbarkeit und Referenzierbarkeit'
    }
  }