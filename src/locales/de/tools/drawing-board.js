export default {
  name: 'Einfaches Zeichenbrett',
  description: 'Online-Zeichenwerkzeug mit freiem Zeichnen, Farbwechsel und Pinselgrößenanpassung',

  // Werkzeugleiste
  tools: {
    brush: 'Pinsel',
    eraser: 'Radierer',
    clear: 'Leinwand leeren',
    save: 'Bild speichern',
    undo: 'Rückgängig',
    redo: 'Wiederherstellen',
    apply: 'Anwenden'
  },

  // Einstellungen
  settings: {
    brushSize: 'Pinselgröße',
    color: 'Farbe',
    opacity: 'Deckkraft',
    backgroundColor: 'Hintergrundfarbe'
  },

  // Farbauswahl
  colors: {
    black: 'Schwarz',
    white: 'Weiß',
    red: 'Rot',
    green: 'Grün',
    blue: 'Blau',
    yellow: 'Gelb',
    orange: 'Orange',
    purple: 'Lila',
    pink: 'Rosa',
    brown: 'Braun',
    gray: 'Grau',
    custom: 'Benutzerdefinierte Farbe'
  },

  // Leinwand-Einstellungen
  canvas: {
    width: 'Breite',
    height: 'Höhe',
    resize: 'Leinwandgröße anpassen',
    orientation: 'Ausrichtung',
    portrait: 'Hochformat',
    landscape: 'Querformat',
    square: 'Quadratisch'
  },

  // Hinweise und Nachrichten
  messages: {
    saveSuccess: 'Bild erfolgreich gespeichert',
    confirmClear: 'Leinwand wirklich leeren? Alle ungespeicherten Inhalte gehen verloren.',
    unsupportedBrowser: 'Ihr Browser unterstützt Canvas nicht. Bitte verwenden Sie einen modernen Browser.',
    fileNamePrompt: 'Dateinamen eingeben',
    defaultFileName: 'Mein Kunstwerk'
  },

  // Tool-Beschreibung
  aboutTitle: 'Über das einfache Zeichenbrett',

  aboutDescription: 'Das einfache Zeichenbrett ist ein intuitives Online-Zeichenwerkzeug, das Ihnen freien kreativen Ausdruck ermöglicht. Ob für Skizzen, einfache Illustrationen oder Ideennotizen - dieses Werkzeug erfüllt Ihre Bedürfnisse.',
  featuresTitle: 'Hauptfunktionen',
  feature1: 'Freies Zeichnen mit verschiedenen Farben und Pinselgrößen',
  feature2: 'Radierer-Funktion für einfache Korrekturen',
  feature3: 'Rückgängig- und Wiederherstellen-Funktion',
  feature4: 'Einstellbare Pinseldeckkraft für vielfältige Effekte',
  feature5: 'Leinwand mit einem Klick leeren',
  feature6: 'Speichern der Werke als Bilddatei',
  howToUseTitle: 'Bedienungsanleitung',
  howToUseStep1: '1. Wählen Sie Pinselwerkzeug und Farbe',
  howToUseStep2: '2. Passen Sie Pinselgröße und Deckkraft an',
  howToUseStep3: '3. Nutzen Sie den Radierer für Korrekturen',
  howToUseStep4: '4. Nutzen Sie Rückgängig/Wiederherstellen',
  howToUseStep5: '5. Klicken Sie auf Speichern zum Herunterladen',
  tipsTitle: 'Anwendungstipps',
  tip1: 'Feine Pinsel für Details, dicke für Flächen',
  tip2: 'Geringere Deckkraft für Aquarelleffekte',
  tip3: 'Nutzen Sie Rückgängig bei Fehlern',
  tip4: 'Erst Umrisse, dann Details zeichnen',
  tip5: 'Experimentieren Sie mit Farbkombinationen'
};