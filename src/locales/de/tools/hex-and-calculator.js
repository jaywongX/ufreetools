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
    
    article: {
      title: 'Hexadezimal-UND-Rechner: Vollständige Anleitung',
      introduction: {
        title: 'Hexadezimal-UND-Operationen verstehen',
        content: [
          'Der Hexadezimal-UND-Rechner ist ein spezielles Tool zur Durchführung bitweiser UND-Operationen mit Hexadezimalzahlen. Diese Operation vergleicht jedes Bitposition in zwei oder mehr Hexadezimalwerten und erzeugt ein Ergebnis, bei dem nur die Bits gesetzt sind, die in allen Operanden gesetzt sind.',
          'Bitweise UND-Operationen sind grundlegend in der Informatik, besonders bei der Arbeit mit Binärdaten, Hardware-Schnittstellen, Berechtigungsflags und anderen Low-Level-Programmieraufgaben. Die hexadezimale Darstellung macht diese Operationen für Entwickler und Hardware-Ingenieure besser lesbar und handhabbar.',
          'Unser Rechner unterstützt mehrere Eingabewerte und bietet eine bequeme Möglichkeit, UND-Operationen mit mehreren Hexadezimalzahlen gleichzeitig durchzuführen. Ergebnisse werden in hexadezimaler, dezimaler und binärer Form angezeigt, mit einer bitweisen Visualisierung zur besseren Verständlichkeit.'
        ]
      },
      useCases: {
        title: 'Typische Anwendungsfälle für Hexadezimal-UND-Operationen',
        cases: [
          {
            title: 'Berechtigungsprüfungen',
            description: 'Entwickler verwenden UND-Operationen, um spezifische Berechtigungsbits in Zugriffskontrollsystemen zu prüfen. Beispiel: UND-Vergleich eines Benutzerberechtigungswerts (0xA5) mit einer Berechtigungsmaske (0x80) bestimmt, ob eine bestimmte Berechtigung erteilt wurde.'
          },
          {
            title: 'Hardware-Registermanipulation',
            description: 'Hardware-Ingenieure nutzen UND-Operationen, um spezifische Bits in Steuerregistern zu löschen, während andere Bits unverändert bleiben. Beispiel: 0xFFFF & 0xFF00 löscht gezielt bestimmte Bits.'
          },
          {
            title: 'Bitmasken in Netzwerkprotokollen',
            description: 'Netzwerkprotokolle nutzen UND-Operationen, um spezifische Felder aus Paketheadern zu extrahieren. Beispiel: UND-Vergleich einer IP-Adresse mit einer Subnetzmaske isoliert den Netzwerkanteil der Adresse.'
          },
          {
            title: 'Farbkanalextraktion',
            description: 'Grafikprogrammierer nutzen UND-Operationen, um spezifische Farbkanäle aus hexadezimalen Farbwerten zu isolieren. Beispiel: 0x00FF00 & 0xFFFFFF extrahiert den grünen Kanal aus einem RGB-Farbwert.'
          },
          {
            title: 'Flag-Tests in Systemprogrammierung',
            description: 'Systemprogrammierer nutzen UND-Operationen, um spezifische Flag-Bits in Statusregistern zu testen. Dies ist entscheidend für die Bestimmung von Hardware-Zuständen oder Konfigurationseinstellungen.'
          }
        ]
      },
      faq: {
        title: 'Häufige Fragen zu Hexadezimal-UND-Operationen',
        questions: [
          {
            question: 'Was ist eine bitweise UND-Operation?',
            answer: 'Eine bitweise UND-Operation vergleicht jedes Bit zweier Binärzahlen und erzeugt eine neue Binärzahl, bei der jedes Bit nur dann 1 ist, wenn beide korrespondierenden Eingabebits 1 sind. Bei Hexadezimalzahlen repräsentiert jede Hex-Ziffer 4 Bits, was die Darstellung kompakter macht.'
          },
          {
            question: 'Warum Hexadezimal statt Binär für Bitoperationen?',
            answer: 'Hexadezimale Darstellung ist kompakter (eine Hex-Ziffer = 4 Bits) und behält eine klare Beziehung zur Binärdarstellung. Dies macht Hex-Werte besser lesbar, schreibbar und kommunizierbar, besonders bei größeren Zahlen.'
          },
          {
            question: 'Kann der Rechner mehr als zwei Eingaben verarbeiten?',
            answer: 'Ja, unser Rechner unterstützt mehrere Eingaben. Bei mehr als zwei Werten wird die UND-Operation sequentiell auf alle Werte angewendet. Dies ist nützlich für komplexe Maskenoperationen mit mehreren Bedingungen.'
          },
          {
            question: 'Unterschied zwischen logischem UND und bitweisem UND?',
            answer: 'Logisches UND (&&) wertet Ausdrücke als wahr/falsch aus und behandelt Operanden als einzelne Boolesche Werte. Bitweises UND (&) wirkt auf jede einzelne Bitposition und vergleicht korrespondierende Bits zwischen Operanden. Unser Rechner führt bitweise UND-Operationen durch.'
          },
          {
            question: 'Gibt es Größenbeschränkungen für Hexadezimalzahlen?',
            answer: 'Der Rechner unterstützt Standard-JavaScript-Zahlenpräzision (typisch 53-Bit-Ganzzahlen). Für die meisten praktischen Anwendungen (Registermanipulation, Flag-Operationen) ist dies ausreichend.'
          },
          {
            question: 'Wie interpretiere ich die binäre Visualisierung?',
            answer: 'Die binäre Visualisierung zeigt eine bitweise Aufschlüsselung jedes Eingabewerts und des UND-Ergebnisses. "1"-Bits sind hervorgehoben, "0"-Bits nicht. Diese Darstellung hilft zu verstehen, welche Bitpositionen von der Operation betroffen sind.'
          }
        ]
      },
      tutorial: {
        title: 'Schritt-für-Schritt-Anleitung für den Hexadezimal-UND-Rechner',
        steps: [
          {
            title: 'Ersten Hexadezimalwert eingeben',
            description: 'Geben Sie eine Hexadezimalzahl im ersten Eingabefeld ein. Das "0x"-Präfix ist nicht nötig. Beispiel: "FF" für hexadezimal FF (dezimal 255).'
          },
          {
            title: 'Zweiten Hexadezimalwert eingeben',
            description: 'Geben Sie eine zweite Hexadezimalzahl ein. Beispiel: "0F" für hexadezimal 0F (dezimal 15).'
          },
          {
            title: 'Weitere Werte hinzufügen (optional)',
            description: 'Für Operationen mit mehr als zwei Werten klicken Sie auf "+ Weitere Zahl hinzufügen" für zusätzliche Eingabefelder.'
          },
          {
            title: 'Berechnen klicken',
            description: 'Klicken Sie auf "Berechnen", um die bitweise UND-Operation durchzuführen. Der Rechner verarbeitet die Werte sequentiell.'
          },
          {
            title: 'Ergebnisse anzeigen',
            description: 'Ergebnisse werden in hexadezimaler, dezimaler und binärer Form angezeigt. Beispiel: FF & 0F ergibt 0F (dezimal 15). Die Visualisierung zeigt genau, welche Bits im Ergebnis gesetzt sind.'
          },
          {
            title: 'Ergebnisse kopieren oder verwenden',
            description: 'Klicken Sie auf "Kopieren", um Ergebnisse in die Zwischenablage zu kopieren, für die Verwendung in Code, Dokumentation oder weiteren Berechnungen.'
          }
        ],
        advancedTips: {
          title: 'Fortgeschrittene Tipps für Hexadezimal-UND-Operationen',
          tips: [
            'Nutzen Sie Schnellbeispiele für gängige Bitmaskenmuster wie 0xFF & 0x0F oder 0xA5 & 0x80.',
            'Für komplexe Operationen können Sie mehrere Hexadezimalwerte verketten, statt separate Berechnungen durchzuführen.',
            'Achten Sie auf die binäre Visualisierung, um genau zu verstehen, welche Bits betroffen sind.',
            'Bei Statusregistern oder Flags nutzen Sie die binäre Darstellung zur Bestätigung, dass bestimmte Bitpositionen korrekt isoliert wurden.',
            'UND-Operationen können Bits nur löschen, nicht setzen - beachten Sie diese Einschränkung bei Ihren Berechnungen.',
            'Hexadezimale Darstellung bietet Kompaktheit, während die binäre Visualisierung das Bitverständnis verbessert.'
          ]
        }
      }
    },
    
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
  }