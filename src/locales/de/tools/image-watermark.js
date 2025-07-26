export default {
  name: 'Bildwasserzeichen',
  description: 'Fügen Sie Ihren Fotos anpassbare Text- oder Bildwasserzeichen hinzu',

  upload: {
    title: 'Bild hochladen',
    dropzone: 'Bild hierher ziehen oder zum Durchsuchen klicken',
    addMore: 'Weitere Bilder hinzufügen',
    clearAll: 'Alle löschen',
    maxFiles: 'Maximal {count} Bilder',
    maxSize: 'Maximale Größe pro Bild: {size}MB',
    supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: 'Wasserzeichen-Typ',
    text: 'Text-Wasserzeichen',
    image: 'Bild-Wasserzeichen',
    both: 'Text und Bild'
  },

  textWatermark: {
    title: 'Text-Wasserzeichen',
    text: 'Wasserzeichentext',
    font: 'Schriftart',
    size: 'Größe',
    color: 'Farbe',
    opacity: 'Deckkraft',
    rotation: 'Rotation',
    shadow: 'Textschatten',
    background: 'Texthintergrund',
    padding: 'Innenabstand',
    border: 'Rahmen',
    spacing: 'Zeichenabstand'
  },

  imageWatermark: {
    title: 'Bild-Wasserzeichen',
    upload: 'Wasserzeichenbild hochladen',
    selectLogo: 'Logo auswählen',
    presetLogos: 'Vordefinierte Logos',
    size: 'Größe',
    opacity: 'Deckkraft',
    rotation: 'Rotation',
    offset: 'Versatz'
  },

  positioning: {
    title: 'Positionierung',
    position: 'Position',
    custom: 'Benutzerdefinierte Position',
    xPosition: 'X-Position',
    yPosition: 'Y-Position',
    tiled: 'Kachelmodus',
    margin: 'Rand',
    scale: 'Mit Bild skalieren'
  },

  positions: {
    topLeft: 'Oben links',
    topCenter: 'Oben Mitte',
    topRight: 'Oben rechts',
    middleLeft: 'Mitte links',
    middleCenter: 'Zentriert',
    middleRight: 'Mitte rechts',
    bottomLeft: 'Unten links',
    bottomCenter: 'Unten Mitte',
    bottomRight: 'Unten rechts',
    custom: 'Benutzerdefiniert'
  },

  output: {
    title: 'Ausgabe',
    quality: 'Ausgabequalität',
    format: 'Ausgabeformat',
    original: 'Wie Original',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Vorschau',
    downloadIndividual: 'Einzeln herunterladen',
    downloadAll: 'Alle herunterladen',
    downloadAsZip: 'Als ZIP herunterladen'
  },

  presets: {
    title: 'Voreinstellungen',
    save: 'Aktuelle Einstellungen speichern',
    load: 'Voreinstellung laden',
    delete: 'Voreinstellung löschen',
    presetName: 'Voreinstellungsname'
  },

  actions: {
    apply: 'Wasserzeichen anwenden',
    applyToAll: 'Auf alle anwenden',
    reset: 'Zurücksetzen',
    preview: 'Vorschau',
    undo: 'Rückgängig',
    cancel: 'Verarbeitung abbrechen'
  },

  messages: {
    processing: 'Wird verarbeitet...',
    success: 'Wasserzeichen erfolgreich angewendet',
    error: 'Fehler: {error}',
    noImages: 'Bitte fügen Sie zuerst Bilder hinzu',
    noWatermark: 'Bitte fügen Sie ein Text- oder Bildwasserzeichen hinzu',
    presetSaved: 'Voreinstellung erfolgreich gespeichert',
    presetLoaded: 'Voreinstellung erfolgreich geladen',
    presetDeleted: 'Voreinstellung gelöscht',
    watermarkApplied: 'Wasserzeichen angewendet',
    watermarkImageLoadError: 'Wasserzeichenbild konnte nicht geladen werden',
    imageLoadError: 'Bild konnte nicht geladen werden',
    resetSuccess: 'Zurückgesetzt',
    downloadStarted: 'Download gestartet',
    downloadError: 'Bilddownload fehlgeschlagen',
    imageLoaded: 'Bild erfolgreich geladen',
    canvasInitError: 'Canvas-Initialisierung fehlgeschlagen',
    tiledWatermarkError: 'Erstellung gekachelter Wasserzeichen fehlgeschlagen'
  }
};