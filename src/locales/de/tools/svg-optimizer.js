export default {
  name: 'SVG-Optimierer',
  description: 'SVG-Dateien optimieren und bereinigen für bessere Performance und kleinere Dateigrößen',

  upload: {
    title: 'SVG hochladen',
    dropzone: 'SVG-Datei hier ablegen oder klicken zum Hochladen',
    or: 'oder',
    pasteCode: 'SVG-Code einfügen',
    maxSize: 'Maximale Dateigröße: 5MB',
    onlySvg: 'Nur SVG-Dateien werden unterstützt',
    selected: 'Ausgewählt',
    changeFile: 'Datei ändern'
  },

  input: {
    title: 'SVG-Eingabe',
    pasteHere: 'SVG-Code hier einfügen...',
    loadExample: 'Beispiel laden',
    clear: 'Löschen',
    validate: 'SVG validieren'
  },

  output: {
    title: 'Optimierungsergebnis',
    copyToClipboard: 'In Zwischenablage kopieren',
    download: 'SVG herunterladen',
    beforeSize: 'Originalgröße',
    afterSize: 'Optimierte Größe',
    reduction: 'Reduzierung',
    reductionBy: 'Reduziert um',
    svgCode: 'SVG-Code'
  },

  options: {
    title: 'Optimierungsoptionen',
    preset: 'Voreinstellung',
    presets: {
      default: 'Standard',
      light: 'Leicht',
      aggressive: 'Aggressiv',
      custom: 'Benutzerdefiniert'
    },
    removeComments: 'Kommentare entfernen',
    removeCommentsDesc: 'Entfernt Kommentare und CDATA-Abschnitte',
    removeHiddenElements: 'Versteckte Elemente entfernen',
    removeEmptyContainers: 'Leere Container entfernen',
    removeUnusedDefs: 'Unbenutzte Definitionen entfernen',
    removeViewBox: 'viewBox entfernen',
    keepViewBox: 'viewBox behalten',
    keepViewBoxDesc: 'Behält das viewBox-Attribut für skalierbare SVGs',
    cleanupIDs: 'IDs bereinigen',
    cleanupIDsDesc: 'Entfernt oder kürzt nicht referenzierte IDs',
    convertColors: 'Farben in Hexadezimal umwandeln',
    removeMetadata: 'Metadaten entfernen',
    removeMetadataDesc: 'Entfernt &lt;metadata&gt;-Elemente',
    removeDoctype: 'Dokumenttyp entfernen',
    removeXMLProcInst: 'XML-Anweisungen entfernen',
    removeEditorsNS: 'Editor-Namespaces entfernen',
    collapseGroups: 'Gruppen zusammenführen',
    collapseGroupsDesc: 'Fasst Gruppen ohne spezielle Attribute zusammen',
    convertPathData: 'Pfaddaten optimieren',
    convertPathDataDesc: 'Wandelt Pfaddaten in relative Koordinaten um, reduziert Dezimalstellen etc.',
    convertTransforms: 'Transformationen optimieren',
    convertShapeToPath: 'Formen in Pfade umwandeln',
    convertShapeToPathDesc: 'Konvertiert Grundformen in &lt;path&gt;-Elemente',
    removeUselessStrokeAndFill: 'Unnötige Striche und Füllungen entfernen',
    moveElemsAttrsToGroup: 'Elementattribute in Gruppen verschieben',
    mergePaths: 'Pfade zusammenführen',
    minifyStyles: 'Stile komprimieren',
    inlineStyles: 'Stile einbinden',
    inlineStylesDesc: 'Konvertiert Stile aus &lt;style&gt;-Elementen in Inline-Stile',
    cleanupNumericValues: 'Numerische Werte runden',
    precision: 'Numerische Präzision',
    decimalPlaces: 'Dezimalstellen',
    lowPrecision: 'Niedrige Präzision (kleinere Datei)',
    highPrecision: 'Hohe Präzision (bessere Qualität)',
    removeDimensions: 'Abmessungen entfernen',
    removeDimensionsDesc: 'Entfernt width/height-Attribute, verwendet viewBox für Größensteuerung',
    sortAttrs: 'Attribute sortieren',
    sortAttrsDesc: 'Sortiert Elementattribute alphabetisch'
  },

  view: {
    title: 'Vorschau',
    original: 'Original',
    optimized: 'Optimiert',
    showBorder: 'Rahmen anzeigen',
    backgroundColor: 'Hintergrundfarbe',
    grid: 'Raster anzeigen',
    zoom: 'Zoom',
    toggleAnimation: 'Animation umschalten'
  },

  actions: {
    optimize: 'Optimierung starten',
    optimizing: 'Wird optimiert...',
    resetOptions: 'Optionen zurücksetzen',
    download: 'Optimierte SVG herunterladen',
    copy: 'Code kopieren',
    copyCode: 'Code kopieren',
    viewCode: 'Code anzeigen',
    viewPreview: 'Vorschau anzeigen'
  },

  messages: {
    optimizationSuccess: 'SVG-Optimierung erfolgreich',
    optimizationFailed: 'SVG-Optimierung fehlgeschlagen: {error}',
    invalidSvg: 'Ungültige SVG-Datei oder ungültiger Code',
    copied: 'In Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    downloaded: 'Optimierte SVG wurde heruntergeladen',
    emptyInput: 'Bitte SVG-Code oder Datei zur Optimierung angeben',
    onlySvgAllowed: 'Bitte nur SVG-Dateien hochladen!',
    failedToLoadLibrary: 'SVGO-Bibliothek konnte nicht geladen werden'
  }
};