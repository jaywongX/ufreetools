export default {
  name: 'Hexadezimal-UND-Rechner',
  description: 'Führt bitweise UND-Operationen (AND) mit Hexadezimalzahlen durch und zeigt Ergebnisse in verschiedenen Formaten an.',

  // Eingabe-Labels
  firstNumber: 'Erste Hexadezimalzahl',

  secondNumber: 'Zweite Hexadezimalzahl',
  enterHex: 'Hexadezimalwert eingeben (ohne 0x-Präfix)',
  invalidHex: 'Ungültiger Hexadezimalwert',

  // Aktionen
  calculate: 'Berechnen',

  import: 'Importieren',
  save: 'Speichern',
  copy: 'Kopieren',
  paste: 'Einfügen',

  // Ergebnisse
  result: 'Ergebnis',

  decimal: 'Dezimal',
  binary: 'Binär',
  copied: 'Kopiert!',
  noResult: 'Werte eingeben und auf Berechnen klicken, um Ergebnisse zu sehen',

  // Erklärungen
  explanation: {
    title: 'Wie bitweise UND-Operationen funktionieren',
    content: 'Die bitweise UND-Operation vergleicht jedes Bit der ersten Zahl mit dem entsprechenden Bit der zweiten Zahl. Wenn beide Bits 1 sind, wird das Ergebnisbit auf 1 gesetzt. Andernfalls wird es auf 0 gesetzt.',
    example: 'Detaillierte Berechnung'
  },

  // Beispiele
  examples: {
    title: 'Beispiele',
    example1: {
      description: 'Einfache UND-Operation',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'Bitmasken-Anwendung',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: 'Gängige Masken: 0xFF & 0x0F',
    permissionCheck: 'Berechtigungsprüfung: 0xA5 & 0x80',
    bitClearing: 'Bitlöschung: 0xFFFF & 0xFF00',
    evenCheck: 'Gerade-Prüfung: 0x42 & 0x01'
  },

  // Dokumentation
  documentation: {
    title: 'Hexadezimal-UND-Rechner: Kompletter Leitfaden',
    introduction: 'Der Hexadezimal-UND-Rechner ist ein Tool zur Durchführung bitweiser UND-Operationen mit Hexadezimalzahlen, häufig verwendet in der Programmierung und digitalen Elektronik.',
    
    whatIs: {
      title: 'Was ist eine bitweise UND-Operation?',
      paragraph1: 'Die bitweise UND-Operation ist eine binäre Operation, die zwei gleich lange Bitmuster nimmt und für jedes korrespondierende Bitpaar eine logische UND-Operation durchführt. Wenn beide Bits 1 sind, wird das Ergebnisbit 1, andernfalls 0.',
      paragraph2: 'Diese Operation ist grundlegend für verschiedene Berechnungsszenarien, einschließlich Maskenoperationen, Bitmanipulationen und der Überprüfung bestimmter Bitstatus.'
    },
    
    useCases: {
      title: 'Häufige Anwendungsfälle für Hexadezimal-UND-Operationen',
      masks: {
        title: 'Bitmasken',
        description: 'Verwendung der UND-Operation zum Extrahieren oder Isolieren bestimmter Bits durch Maskierung unerwünschter Bits.'
      },
      permissions: {
        title: 'Berechtigungsprüfungen',
        description: 'Bestimmen, ob bestimmte Berechtigungsbits in einem Berechtigungsbitfeld gesetzt sind.'
      },
      flagsCheck: {
        title: 'Flag-Statusprüfungen',
        description: 'Überprüfen, ob bestimmte Flags in Statusregistern oder Flag-Variablen gesetzt sind.'
      },
      evenOdd: {
        title: 'Gerade/Ungerade-Tests',
        description: 'Verwendung der UND-Operation mit 1 zum Testen, ob eine Zahl gerade oder ungerade ist.'
      },
      bitClearing: {
        title: 'Bitlöschung',
        description: 'Löschen bestimmter Bits durch UND-Operation mit einer Maske, während andere Bits unverändert bleiben.'
      }
    },
    
    howToUse: {
      title: 'So verwenden Sie den Hexadezimal-UND-Rechner',
      step1: 'Erste Hexadezimalzahl eingeben (ohne "0x"-Präfix)',
      step2: 'Zweite Hexadezimalzahl eingeben (ohne "0x"-Präfix)',
      step3: '"Berechnen"-Button klicken',
      step4: 'Ergebnisse in Hexadezimal-, Dezimal- und Binärformat anzeigen',
      step5: 'Kopieren-Button verwenden, um Ergebnisse in die Zwischenablage zu kopieren'
    },
    
    tips: {
      title: 'Tipps für Hexadezimal-UND-Operationen',
      tip1: 'Führende Nullen werden bei der Berechnung ignoriert, aber Ergebnisse werden entsprechend der längsten Eingabe aufgefüllt',
      tip2: 'Für Maskenoperationen verwenden Sie FF (oder F-Sequenzen) für zu behaltende Bits und 00 für zu löschende Bits',
      tip3: 'Zum Prüfen bestimmter Bits mit einem Wert arbeiten, der nur dieses Bit gesetzt hat (z.B. 0x08 für das 4. Bit)',
      tip4: 'Jede Hexadezimalziffer repräsentiert 4 Bits (ein Nibble)',
      tip5: 'Bei Berechtigungen oder Flags eine Referenz behalten, was jedes Bit bedeutet'
    }
  },

  quickExamples: 'Schnellbeispiele',
  operation: 'Operation',

  operations: {
    and: 'UND(AND)',
    or: 'ODER(OR)',
    xor: 'XOR',
    not: 'NICHT(NOT)',
    shiftLeft: 'Linksverschiebung(<<)',
    shiftRight: 'Rechtsverschiebung(>>)'
  },

  input: 'Eingabewerte',
  chainWith: 'Verkettete Berechnung',
  importFromFile: 'Aus Datei importieren',
  noResult: 'Werte eingeben und auf Berechnen klicken für Ergebnisse',
  bitVisualization: 'Visualisierung',
  inputNumbers: 'Hexadezimalzahlen eingeben',
  addNumber: 'Weitere Zahl hinzufügen',
  number: 'Zahl',

  // Button-Labels
  remove: 'Entfernen',

  removeButton: 'Diese Eingabe entfernen',
  importTitle: 'Aus Datei importieren',
  saveTitle: 'In Datei speichern',
  copyTitle: 'Alle Eingaben kopieren',
  pasteTitle: 'Aus Zwischenablage einfügen',
  saveResult: 'Ergebnis speichern',
  saveResultTitle: 'Ergebnis in Datei speichern',
  copyResult: 'Ergebnis kopieren',
  copyResultTitle: 'Alle Ergebnisse kopieren',
  copyAction: 'Kopieren',

  // Hinweise und Nachrichten
  importError: 'Fehler beim Importieren - bitte Dateiformat prüfen',

  inputsCopied: 'Alle Eingaben wurden kopiert',
  resultsCopied: 'Alle Ergebnisse wurden kopiert',
  inputs: 'Eingaben'
};