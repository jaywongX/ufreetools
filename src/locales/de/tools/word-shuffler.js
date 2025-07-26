export default {
  name: 'Text-Shuffler',
  description: 'Zufälliges Anordnen von Wörtern, Sätzen oder Zeilen in Texten unter Beibehaltung der Formatierung',

  // Eingabefelder
  inputLabel: 'Eingabetext',

  inputPlaceholder: 'Text hier eingeben oder einfügen zum Shufflen...',
  outputLabel: 'Ergebnis',

  // Shuffle-Modi
  shuffleMode: 'Shuffle-Modus',

  modes: {
    word: 'Wörter',
    sentence: 'Sätze',
    line: 'Zeilen',
    character: 'Zeichen',
    paragraph: 'Absätze'
  },

  // Beibehaltungsoptionen
  preserveOptions: 'Beibehaltungsoptionen',

  preserveCapitalization: 'Groß-/Kleinschreibung beibehalten',
  preservePunctuation: 'Interpunktion beibehalten',

  // Aktionen
  shuffleButton: 'Shufflen',

  copyButton: 'Ergebnis kopieren',
  clearButton: 'Alles löschen',
  copiedMessage: 'In die Zwischenablage kopiert!',

  // Weitere UI-Elemente
  tagline: 'Das weltweit fortschrittlichste Text-Zufallsgenerierungstool',

  wordCount: 'Wörter',
  importButton: 'Datei importieren',
  clearInputButton: 'Eingabe löschen',
  clearOutputButton: 'Ausgabe löschen',
  downloadButton: 'Herunterladen',
  useExampleButton: 'Beispiel verwenden',
  advancedOptions: 'Erweiterte Optionen',
  delimiterOptions: 'Trennzeichen-Optionen',
  wordDelimiters: 'Worttrennzeichen',
  wordDelimitersHint: 'Zeichen zur Worttrennung',
  sentenceDelimiters: 'Satzzeichen',
  sentenceDelimitersHint: 'Zeichen zur Satzbeendigung',
  additionalOptions: 'Zusätzliche Optionen',
  repeatCount: 'Wiederholungen',
  repeatCountHint: 'Mehrere Shuffle-Versionen generieren',
  shuffleGroup: 'Shuffle-Gruppengröße',
  shuffleGroupHint: 'Wörter in Gruppen dieser Größe shufflen',
  removeRepeatedWords: 'Doppelte Wörter entfernen',
  preserveSpacing: 'Abstände beibehalten',
  examplesTitle: 'Beispiele',
  useThisExample: 'Dieses Beispiel verwenden',
  helpTitle: 'Hilfe & Informationen',
  whatIsTitle: 'Was ist ein Text-Shuffler?',
  whatIsDescription: 'Ein Text-Shuffler ist ein Tool, das die Reihenfolge von Wörtern, Sätzen, Zeilen, Zeichen oder Absätzen in Texten zufällig anordnen kann. Es verwendet komplexe Algorithmen, um echte Zufallsergebnisse zu gewährleisten, während Formatierungsoptionen wie Groß-/Kleinschreibung und Interpunktion nach Ihren Wünschen beibehalten werden.',
  howToUseTitle: 'So verwenden Sie dieses Tool',
  tipsTitle: 'Beste Anwendungstipps',

  howToUseSteps: [
    'Geben Sie Ihren Text in das Eingabefeld auf der linken Seite ein oder fügen Sie ihn ein.',
    'Wählen Sie unten den gewünschten Shuffle-Modus und die Optionen aus.',
    'Klicken Sie auf die Schaltfläche "Shufflen", um zufälligen Text zu generieren.',
    'Das Ergebnis wird im Ausgabefeld auf der rechten Seite angezeigt.',
    'Verwenden Sie die Kopier- oder Download-Schaltflächen, um Ihre Ergebnisse zu speichern.'
  ],

  tips: [
    'Für kreative Schreibübungen probieren Sie den Wortmodus mit Beibehaltung der Groß-/Kleinschreibung aber ohne Interpunktion.',
    'Für Layout-Tests verwenden Sie den Satzmodus mit allen Beibehaltungsoptionen, um lesbaren aber zufälligen Text zu erhalten.',
    'Mit dem Zeichenmodus können Sie aus Texteingaben sichere Passwörter oder Codes erstellen.',
    'Die Gruppen-Shuffle-Funktion ermöglicht es, zusammengehörige Wörter beisammenzuhalten, während der Gesamttext randomisiert wird.',
    'Benötigen Sie mehrere Varianten? Stellen Sie die Wiederholungsanzahl ein, um mehrere Shuffle-Versionen auf einmal zu generieren.'
  ],

  examples: {
    basic: {
      title: 'Einfaches Wortshuffling',
      description: 'Einfache Randomisierung von Wörtern unter Beibehaltung von Interpunktion und Groß-/Kleinschreibung',
      input: 'Der schnelle braune Fuchs springt über den faulen Hund. Alle fünf Boxerhexen springen schnell.',
      output: 'Braune der schnelle Fuchs faulen den über springt Hund. Springen Boxerhexen fünf alle schnell.'
    },
    sentence: {
      title: 'Satzshuffling',
      description: 'Zufällige Anordnung vollständiger Sätze',
      input: 'Erster Satz hier. Das ist der zweite Satz. Hier folgt Satz drei. Schließlich haben wir den vierten Satz.',
      output: 'Hier folgt Satz drei. Erster Satz hier. Schließlich haben wir den vierten Satz. Das ist der zweite Satz.'
    },
    creative: {
      title: 'Kreative Neuanordnung',
      description: 'Generierung neuer kreativer Texte durch Shufflen von Wörtern ohne Formatierungseinschränkungen',
      input: 'Poesie ist die rhythmische Schaffung von Schönheit in Worten. Sie ist die Offenbarung eines Gefühls, das der Dichter für innerlich und persönlich hält, das der Leser aber als sein eigenes erkennt.',
      output: 'Schönheit rhythmische ist die Schaffung von in Worten Poesie. Erkennt Leser der aber als sein eigenes das Gefühl eines Offenbarung die ist, das Dichter der für hält innerlich und persönlich.'
    }
  },

  stepLabel: 'Schritt',
  emptyInputMessage: 'Bitte geben Sie Text zum Shufflen ein',
  errorMessage: 'Fehler beim Shufflen - bitte versuchen Sie einen anderen Shuffle-Modus oder andere Optionen',
  downloadFileName: 'shuffled-text.txt',

  errorMessages: {
    shuffleError: 'Shuffle-Fehler:',
    sentenceError: 'Satzshuffle-Fehler:',
    copyError: 'Textkopierfehler:'
  }
};