export default {
  name: 'LaTeX Formel-Generator',
  description: 'Echtzeit-Generierung und Export von LaTeX-Mathematikformeln',

  // UI-Texte
  input: 'LaTeX-Code eingeben',

  output: 'Vorschau-Ergebnis',
  renderButton: 'Formel rendern',
  exportButton: 'Als Bild exportieren',
  copyButton: 'LaTeX-Code kopieren',

  // Einstellungen
  settings: {
    title: 'Einstellungen',
    fontSize: 'Schriftgröße',
    textColor: 'Textfarbe',
    backgroundColor: 'Hintergrundfarbe',
    displayMode: 'Anzeigemodus',
    displayModeInline: 'Inline-Modus',
    displayModeBlock: 'Block-Modus'
  },

  // Beispiele
  examples: {
    title: 'Beispiele',
    basic: 'Grundlegende Formeln',
    fraction: 'Brüche',
    superscript: 'Hoch-/Tiefstellungen',
    integral: 'Integrale',
    matrix: 'Matrizen',
    more: 'Weitere Beispiele'
  },

  // Nachrichten
  copied: 'In die Zwischenablage kopiert',

  errorTitle: 'Rendering-Fehler',
  errorMessage: 'Bitte überprüfen Sie Ihre LaTeX-Syntax'
};