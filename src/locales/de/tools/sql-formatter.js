export default {
    name: 'SQL-Formatierung',
    description: 'Online-SQL-Formatierungs- und Validierungstool, unterstützt Komprimierung und Verschönerung',
    options: {
      language: 'SQL-Dialekt',
      indent: 'Einrückungsart',
      spaceCount: 'Anzahl der Leerzeichen',
      keywordCase: 'Schlüsselwort-Groß-/Kleinschreibung',
      uppercase: 'Schlüsselwörter groß',
      lineBreak: 'Zeilenumbruchstil',
      tabSize: 'Tabulatorgröße'
    },
    languages: {
      standard: 'Standard-SQL',
      mysql: 'MySQL',
      postgresql: 'PostgreSQL',
      sqlite: 'SQLite',
      tsql: 'T-SQL (SQL Server)',
      oracle: 'Oracle PL/SQL'
    },
    indentOptions: {
      spaces: 'Leerzeichen',
      tabs: 'Tabulator-Einrückung'
    },
    spaceOptions: {
      two: '2 Leerzeichen',
      four: '4 Leerzeichen'
    },
    caseOptions: {
      preserve: 'Original beibehalten',
      upper: 'Großbuchstaben',
      lower: 'Kleinbuchstaben'
    },
    actions: {
      format: 'SQL formatieren',
      minify: 'SQL komprimieren',
      clear: 'Löschen',
      copy: 'Kopieren',
      download: 'Herunterladen',
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      formatSuccess: 'SQL-Formatierung erfolgreich',
      formatError: 'Fehler bei der SQL-Formatierung'
    },
    placeholders: {
      input: 'SQL-Abfrage hier eingeben...',
      output: 'Formatierte SQL wird hier angezeigt...'
    },
    output: 'Formatierungsergebnis',
    tips: {
      title: 'Verwendungstipps',
      dialect: 'Wählen Sie den passenden SQL-Dialekt für genaue Formatierungsergebnisse.',
      formatting: 'Passen Sie Einrückungsstil und Leerzeichenanzahl an Ihren bevorzugten Codierungsstil an.',
      keywords: 'Wählen Sie, ob SQL-Schlüsselwörter beibehalten, groß- oder kleingeschrieben werden sollen.',
      copy: 'Verwenden Sie die Kopieren-Schaltfläche, um formatierte SQL schnell in die Zwischenablage zu kopieren.'
    }
  }