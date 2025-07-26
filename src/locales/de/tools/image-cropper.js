export default {
  name: 'Bildausschnitt-Tool',
  description: 'Präzises Zuschneiden, Größenanpassen und Drehen von Bildern',

  upload: {
    title: 'Bild hochladen',
    dropzone: 'Bild hierher ziehen und ablegen oder zum Durchsuchen klicken',
    maxSize: 'Maximale Dateigröße: 10MB',
    supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF',
    select: 'Bitte wählen Sie ein Bild zum Zuschneiden und Bearbeiten aus'
  },

  editor: {
    title: 'Bildeditor',
    zoom: 'Zoom',
    rotate: 'Drehen',
    flipHorizontal: 'Horizontal spiegeln',
    flipVertical: 'Vertikal spiegeln',
    reset: 'Bild zurücksetzen',
    undo: 'Rückgängig',
    redo: 'Wiederherstellen',
    dragMode: 'Verschiebungsmodus',
    scaleMode: 'Skalierungsmodus'
  },

  crop: {
    title: 'Zuschnitt-Einstellungen',
    aspectRatio: 'Seitenverhältnis',
    freeform: 'Freiform',
    square: 'Quadratisch (1:1)',
    portrait: 'Porträt (3:4)',
    landscape: 'Landschaft (4:3)',
    widescreen: 'Breitbild (16:9)',
    panorama: 'Panorama (2:1)',
    custom: 'Benutzerdefiniert',
    width: 'Breite',
    height: 'Höhe',
    unit: 'Einheit',
    pixels: 'Pixel',
    percent: 'Prozent',
    lockAspectRatio: 'Seitenverhältnis sperren'
  },

  presets: {
    title: 'Größen-Voreinstellungen',
    original: 'Originalgröße',
    social: 'Social Media',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Druckgrößen',
    fourBySix: '4×6 Zoll',
    fiveBySeven: '5×7 Zoll',
    eightByTen: '8×10 Zoll'
  },

  output: {
    title: 'Ausgabe',
    preview: 'Vorschau',
    dimensions: 'Ausgabegröße',
    quality: 'Qualität',
    format: 'Format',
    fileName: 'Dateiname',
    download: 'Herunterladen',
    saveAs: 'Speichern unter',
    copy: 'In Zwischenablage kopieren'
  },

  actions: {
    crop: 'Bild zuschneiden',
    apply: 'Anwenden',
    cancel: 'Abbrechen',
    save: 'Bild speichern',
    download: 'Herunterladen',
    newImage: 'Neues Bild'
  },

  messages: {
    cropSuccess: 'Bild erfolgreich zugeschnitten',
    downloadReady: 'Ihr zugeschnittenes Bild ist zum Download bereit',
    processing: 'Bild wird verarbeitet...',
    copied: 'Bild in Zwischenablage kopiert',
    invalidFile: 'Ungültige Datei. Bitte laden Sie ein gültiges Bild hoch.',
    fileTooLarge: 'Datei zu groß. Maximale Größe: 10MB.'
  }
};