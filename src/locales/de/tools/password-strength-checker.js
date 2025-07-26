export default {
  name: 'Passwortstärke-Prüfer',
  description: 'Analysiert und bewertet die Sicherheit von Passwörtern mit detaillierten Sicherheitsmetriken',

  input: {
    title: 'Passwort zur Überprüfung eingeben',
    placeholder: 'Passwort hier eingeben...',
    showPassword: 'Passwort anzeigen',
    hidePassword: 'Passwort verbergen',
    clear: 'Leeren',
    generate: 'Passwort generieren',
    check: 'Stärke prüfen',
    empty: 'Bitte geben Sie ein Passwort ein, um die Bewertung zu sehen',
    disclaimer: 'Geben Sie jedes Passwort zur Sicherheitsbewertung ein. Ihr Passwort wird nicht gespeichert oder an Server übertragen.'
  },

  results: {
    title: 'Passwortstärke-Bewertung',
    strength: 'Stärke',
    score: 'Punktzahl',
    entropy: 'Entropie',
    crackTime: 'Geschätzte Knackzeit',
    very_weak: 'Sehr schwach',
    weak: 'Schwach',
    fair: 'Mittel',
    good: 'Gut',
    strong: 'Stark',
    very_strong: 'Sehr stark',
    feedback: 'Feedback',
    suggestions: 'Verbesserungsvorschläge',
    warnings: 'Erkannte Probleme',
    noWarnings: 'Keine Warnungen erkannt',
    noSuggestions: 'Keine Vorschläge verfügbar'
  },

  details: {
    title: 'Detaillierte Analyse',
    length: 'Passwortlänge',
    charset: 'Zeichenvielfalt',
    patterns: 'Verwendete Muster',
    uniqueChars: 'Eindeutige Zeichen',
    uppercase: 'Großbuchstaben',
    lowercase: 'Kleinbuchstaben',
    numbers: 'Zahlen',
    symbols: 'Sonderzeichen',
    repetitions: 'Wiederholungen',
    sequences: 'Sequenzen',
    dictionary: 'Wörterbuchwörter',
    leaked: 'Kompromittiert',
    reused: 'Wiederverwendete Muster'
  },

  patterns: {
    dictionary: 'Wörterbuchwort',
    sequence: 'Aufeinanderfolgende Zeichen',
    repeat: 'Wiederholte Zeichen',
    spatial: 'Räumliches Muster (Tastatur)',
    date: 'Datumsmuster',
    year: 'Jahresmuster',
    common: 'Häufiges Passwort',
    name: 'Namensmuster',
    reversal: 'Umgekehrtes Wort',
    leet: 'Leet-Speak-Ersetzungen',
    predictable: 'Vorhersehbares Muster'
  },

  crackTimes: {
    instantly: 'Sofort',
    seconds: 'Innerhalb von Sekunden',
    minutes: 'Innerhalb von Minuten',
    hours: 'Innerhalb von Stunden',
    days: 'Innerhalb von Tagen',
    months: 'Innerhalb von Monaten',
    years: 'Innerhalb von Jahren',
    centuries: 'Innerhalb von Jahrhunderten',
    forever: 'Praktisch nie'
  },

  suggestions: {
    addWords: 'Mehr Wörter oder Zeichen hinzufügen',
    addSymbols: 'Sonderzeichen einbeziehen',
    addNumbers: 'Zahlen einbeziehen',
    upperLower: 'Groß- und Kleinbuchstaben mischen',
    avoidPatterns: 'Vermeiden Sie aufeinanderfolgende oder wiederholte Tastaturzeichen',
    avoidCommon: 'Vermeiden Sie Wörterbuch-basierte oder häufige Passwörter, selbst mit Buchstabenersetzungen (z.B. "e" durch "3")',
    avoidPersonal: 'Persönliche Informationen vermeiden',
    avoidDictionary: 'Wörterbuchwörter vermeiden',
    usePassphrase: 'Erwägen Sie Wortkombinationen, unzusammenhängende Wörter oder Akronyme für einprägsamere starke Passwörter',
    increaseLonger: 'Passwortlänge erhöhen',
    avoidSequence: 'Sequenzmuster vermeiden',
    avoidRepeated: 'Wiederholte Zeichen vermeiden',
    avoidDates: 'Daten und Jahre vermeiden',
    addMoreChars: 'Passwortlänge auf mindestens 12 Zeichen erhöhen - jedes zusätzliche Zeichen erhöht die Sicherheit exponentiell',
    addTypes: 'Fügen Sie {types} hinzu, um die Komplexität zu erhöhen',
    useManager: 'Verwenden Sie einen Passwort-Manager zur Generierung und Verwaltung starker Passwörter - einzigartig für jede Website'
  },

  generator: {
    title: 'Passwort-Generator',
    length: 'Länge',
    options: 'Optionen',
    uppercase: 'Großbuchstaben einbeziehen',
    lowercase: 'Kleinbuchstaben einbeziehen',
    numbers: 'Zahlen einbeziehen',
    symbols: 'Sonderzeichen einbeziehen',
    excludeSimilar: 'Ähnliche Zeichen ausschließen',
    excludeAmbiguous: 'Mehrdeutige Zeichen ausschließen',
    generate: 'Passwort generieren',
    passphrase: 'Passphrase generieren',
    wordCount: 'Anzahl der Wörter',
    separator: 'Worttrennzeichen',
    capitalize: 'Erstes Zeichen großschreiben',
    includeNumber: 'Zahl einbeziehen',
    includeSymbol: 'Sonderzeichen einbeziehen'
  },

  common: {
    copy: 'In Zwischenablage kopieren',
    save: 'In Verlauf speichern',
    clear: 'Leeren',
    refresh: 'Aktualisieren',
    copied: 'In Zwischenablage kopiert',
    saved: 'Im Verlauf gespeichert',
    history: 'Verlauf',
    noHistory: 'Kein Verlauf verfügbar',
    common: 'Häufig'
  },

  breach: {
    title: 'Datenleck-Prüfung',
    description: 'Überprüfen Sie, ob Ihr Passwort in bekannten Datenlecks aufgetaucht ist',
    disclaimer: 'Ihr Passwort wird niemals über das Netzwerk übertragen. Nur Hash-Teile werden geprüft.',
    checkButton: 'Auf Lecks prüfen',
    safe: 'In keinen bekannten Lecks gefunden',
    found: 'In {count} Datenlecks gefunden!',
    warning: 'Dieses Passwort wurde in einem Datenleck offengelegt und sollte nicht mehr verwendet werden.',
    checking: 'Prüfe auf Datenlecks...'
  },

  settings: {
    title: 'Einstellungen',
    algorithm: 'Stärke-Algorithmus',
    history: 'Verlauf speichern',
    clearHistory: 'Verlauf löschen',
    breachCheck: 'Datenleck-Prüfung',
    timeout: 'Nach Timeout löschen',
    timeoutDuration: 'Timeout-Dauer (Sekunden)',
    clipboard: 'Zwischenablage nach Kopieren löschen',
    language: 'Sprache'
  },

  score: {
    none: 'Keine Bewertung'
  },

  descriptions: {
    none: 'Passwortstärke kann nicht bewertet werden',
    veryWeak: 'Dieses Passwort ist sehr leicht zu erraten oder zu knacken, äußerst unsicher',
    weak: 'Dieses Passwort hat geringe Sicherheit und könnte leicht geknackt werden',
    fair: 'Dieses Passwort bietet grundlegende Sicherheit, könnte aber verbessert werden',
    good: 'Dies ist ein sicheres Passwort mit hoher Knackschwierigkeit',
    veryStrong: 'Dies ist ein sehr sicheres Passwort, das praktisch unknackbar ist'
  },

  length: {
    none: 'Keine',
    tooShort: 'Zu kurz',
    acceptable: 'Akzeptabel',
    good: 'Gut',
    excellent: 'Ausgezeichnet'
  },

  lengthMessage: {
    none: 'Noch kein Passwort eingegeben',
    needMore: 'Mindestens {min} Zeichen benötigt',
    better: '{min} oder mehr Zeichen wären sicherer',
    good: 'Gut! Lange Passwörter sind schwerer zu knacken',
    excellent: 'Ausgezeichnete Länge!'
  },

  complexity: {
    none: 'Keine',
    veryLow: 'Sehr niedrig',
    fair: 'Mittel',
    good: 'Gut',
    excellent: 'Ausgezeichnet'
  },

  issues: {
    tooShort: 'Passwort zu kurz (weniger als 8 Zeichen)',
    noUppercase: 'Enthält keine Großbuchstaben',
    noLowercase: 'Enthält keine Kleinbuchstaben',
    noNumbers: 'Enthält keine Zahlen',
    noSymbols: 'Enthält keine Sonderzeichen',
    hasSequence: 'Enthält häufige Tastatursequenzen (z.B. "qwerty" oder "123456")',
    hasRepeated: 'Enthält wiederholte Zeichen (z.B. "aaa" oder "111")',
    commonPassword: 'Verwendet ein häufiges oder leicht zu erratendes Passwort'
  },

  characters: 'Zeichen',

  tips: {
    title: 'Passwort-Sicherheitstipps',
    length: 'Verwenden Sie Passwörter mit mindestens 12 Zeichen',
    mix: 'Kombinieren Sie Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen',
    avoid: 'Vermeiden Sie häufige Wörter, Phrasen oder persönliche Informationen',
    unique: 'Verwenden Sie nicht dasselbe Passwort auf mehreren Websites',
    manager: 'Erwägen Sie einen Passwort-Manager zur Generierung und Speicherung komplexer Passwörter'
  }
};