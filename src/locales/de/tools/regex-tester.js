export default {
  name: 'Regex-Tester',
  description: 'Testen und debuggen Sie reguläre Ausdrücke mit Echtzeit-Hervorhebung und Erklärungen',

  actions: {
    test: 'Testen',
    clear: 'Löschen',
    showExamples: 'Beispiele anzeigen',
    hideExamples: 'Beispiele ausblenden',
    copy: 'Kopieren'
  },

  sections: {
    examples: 'Häufige Regex-Beispiele',
    pattern: 'Regex-Muster',
    input: 'Test-Text',
    results: 'Treffer',
    flags: 'Flags'
  },

  flags: {
    g: 'Global (g)',
    i: 'Groß-/Kleinschreibung ignorieren (i)',
    m: 'Mehrzeilenmodus (m)',
    s: 'Punkt matcht alles (s)',
    u: 'Unicode-Modus (u)',
    y: 'Sticky-Modus (y)'
  },

  errors: {
    emptyRegex: 'Bitte geben Sie einen regulären Ausdruck ein',
    emptyTestString: 'Bitte geben Sie einen Testtext ein',
    invalidRegex: 'Ungültiger regulärer Ausdruck'
  },

  messages: {
    matchesFound: '{count} Treffer gefunden',
    noMatches: 'Keine Treffer gefunden',
    copied: 'In die Zwischenablage kopiert!'
  },

  placeholders: {
    pattern: 'Regulären Ausdruck eingeben',
    testString: 'Testtext eingeben'
  },

  options: {
    flags: 'Flags',
    global: 'Global (g)',
    caseInsensitive: 'Groß-/Kleinschreibung ignorieren (i)',
    multiline: 'Mehrzeilenmodus (m)',
    dotAll: 'Punkt matcht alles (s)',
    unicode: 'Unicode-Modus (u)',
    sticky: 'Sticky-Modus (y)'
  },

  labels: {
    pattern: 'Regulärer Ausdruck',
    testString: 'Testtext',
    matches: 'Treffer',
    groups: 'Gruppen',
    noMatches: 'Keine Treffer'
  },

  tips: {
    title: 'Tipps zur Verwendung',
    pattern: 'Sie müssen beim Eingeben des Regex-Musters keine Schrägstriche hinzufügen.',
    flags: 'Verwenden Sie Flags, um das Matching-Verhalten zu ändern (g: global, i: case-insensitive, m: mehrzeilig).',
    examples: 'Klicken Sie auf "Beispiele anzeigen", um häufig verwendete Regex-Muster zu sehen.',
    testing: 'Nach Eingabe von Muster und Testtext klicken Sie auf "Testen", um die Ergebnisse zu sehen.'
  },

  match: 'Treffer',
  position: 'Position',
  group: 'Gruppe',
  resultsWillAppearHere: 'Regex-Treffer werden hier angezeigt...',
  regexError: 'Regex-Fehler: {message}',
  emailAddress: 'E-Mail-Adresse',
  phoneNumber: 'Telefonnummer (China)',
  ipAddress: 'IP-Adresse',
  dateFormat: 'Datum (JJJJ-MM-TT)',
  chineseCharacters: 'Chinesische Zeichen',
  phoneNumberExample: 'Kontakt: 13912345678\nWeChat: 18887654321\nFestnetz: 010-12345678',
  urlExample: 'Besuchen Sie https://example.com\noder http://www.domain.org/pfad?query=wert',
  ipAddressExample: 'Server: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Startdatum: 2023-01-15\nEnddatum: 2023-02-28\nUngültiges Datum: 2023-13-45',
  chineseCharactersExample: 'Hallo Welt! 你好，World!'
};