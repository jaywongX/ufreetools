export default {
  name: 'Farbverlaufs-Generator',
  description: 'Erstellen und passen Sie schöne CSS-Farbverläufe an, mit Live-Vorschau und Code zum Kopieren für Ihr Projekt',

  gradientTypes: {
    title: 'Farbverlaufs-Typ',
    linear: 'Linearer Verlauf',
    radial: 'Radialer Verlauf',
    conic: 'Konischer Verlauf'
  },

  controls: {
    title: 'Farbsteuerung',
    addColor: 'Farbe hinzufügen',
    color: 'Farbe',
    position: 'Position (%)',
    delete: 'Farbe entfernen',
    angle: 'Winkel',
    degrees: 'Grad',
    shape: 'Form',
    circle: 'Kreis',
    ellipse: 'Ellipse',
    positionX: 'Position X (%)',
    positionY: 'Position Y (%)',
    size: 'Größe',
    closestSide: 'Nächste Seite',
    closestCorner: 'Nächste Ecke',
    farthestSide: 'Entfernteste Seite',
    farthestCorner: 'Entfernteste Ecke',
    fromAngle: 'Startwinkel'
  },

  output: {
    title: 'CSS-Code',
    copyCode: 'Code kopieren',
    preview: 'Vorschaubereich',
    copied: 'CSS-Code in die Zwischenablage kopiert!',
    download: 'PNG herunterladen'
  },

  presets: {
    title: 'Farbverlaufs-Voreinstellungen',
    apply: 'Voreinstellung anwenden',
    sunnyMorning: 'Sonniger Morgen',
    winterNeva: 'Winterliche Newa',
    rareWind: 'Seltener Wind',
    deepBlue: 'Tiefblau',
    perfect: 'Perfektes Weiß',
    cloudyKnoxville: 'Bewölktes Knoxville',
    greenBeach: 'Grüner Strand',
    plumBath: 'Pflaumenbad',
    everlasting: 'Ewiger Himmel'
  },

  accessibility: {
    colorPicker: 'Farbauswahl',
    deleteSwatch: 'Farbstopp entfernen',
    dragToReposition: 'Zum Positionieren ziehen'
  },

  actions: {
    reset: 'Zurücksetzen',
    generateCSS: 'CSS generieren',
    clickToCopy: 'Zum Kopieren klicken',
    completeEdit: 'Bearbeitung abschließen'
  },

  messages: {
    copied: 'CSS-Code in die Zwischenablage kopiert!',
    noColors: 'Mindestens zwei Farben für einen Verlauf benötigt',
    maxColors: 'Maximale Anzahl an Farbstopps erreicht (10)',
    useKeyboard: 'Entf-Taste zum Löschen ausgewählter Farbstopps',
    invalidHex: 'Ungültiger Hex-Farbcode',
    downloadError: 'PNG-Download fehlgeschlagen, bitte erneut versuchen',
    preview: 'Vorschau'
  },

  anglePresets: {
    top: 'Oben',
    topRight: 'Oben rechts',
    right: 'Rechts',
    bottomRight: 'Unten rechts',
    bottom: 'Unten',
    bottomLeft: 'Unten links',
    left: 'Links',
    topLeft: 'Oben links'
  },

  radialShapes: {
    circle: 'Kreis',
    ellipse: 'Ellipse'
  },

  radialSizes: {
    farthestCorner: 'Entfernteste Ecke',
    closestCorner: 'Nächste Ecke',
    farthestSide: 'Entfernteste Seite',
    closestSide: 'Nächste Seite',
  }
};