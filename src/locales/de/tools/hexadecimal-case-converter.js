export default {
  name: 'Hexadezimal-Konverter',
  description: 'Konvertieren und formatieren Sie Hexadezimalzeichenfolgen zwischen Groß- und Kleinschreibung mit verschiedenen Präfixen, Trennzeichen und Gruppierungsoptionen',

  input: {
    title: 'Hexadezimal-Eingabe',
    placeholder: 'Hexadezimalwert eingeben...'
  },

  output: {
    title: 'Konvertierungsergebnis',
    placeholder: 'Das Ergebnis wird hier angezeigt...'
  },

  prefix: {
    title: 'Präfix',
    none: 'Keins',
  },

  format: {
    title: 'Groß-/Kleinschreibung',
    uppercase: 'Großbuchstaben',
    lowercase: 'Kleinbuchstaben'
  },

  separator: {
    title: 'Trennzeichen',
    none: 'Keins',
    space: 'Leerzeichen',
    comma: 'Komma',
    colon: 'Doppelpunkt',
    semicolon: 'Semikolon'
  },

  grouping: {
    title: 'Gruppierung (Bytes)',
    none: 'Keine'
  },

  actions: {
    copy: 'Kopieren',
    clear: 'Löschen',
    convert: 'Konvertieren'
  },

  messages: {
    copied: 'In die Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen',
    invalidHex: 'Ungültiger Hexadezimalwert'
  },

  examples: {
    title: 'Beispiele',
    example1: {
      title: '"Hello World" in Hex',
    },
    example2: {
      title: 'ASCII Hello mit 0x-Präfix',
    },
    example3: {
      title: 'DEADBEEF (häufiger Debug-Wert)',
    },
    example4: {
      title: 'MAC-Adressenformat',
    }
  },

  tips: {
    title: 'Tipps',
    tip1: 'Hexadezimalwerte verwenden die Zeichen 0-9 und A-F (oder a-f)',
    tip2: 'Verschiedene Präfixe werden in unterschiedlichen Kontexten verwendet: 0x in der Programmierung, # für Farben etc.',
    tip3: 'Gruppierung und Trennzeichen verbessern die Lesbarkeit langer Hexadezimalzeichenfolgen',
    tip4: 'MAC-Adressen verwenden typischerweise Doppelpunkte als Trennzeichen und 1-Byte-Gruppierung'
  }
};