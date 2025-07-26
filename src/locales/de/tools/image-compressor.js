export default {
  name: 'Bildkompressor',
  description: 'Bilder komprimieren und optimieren bei gleichbleibender Qualität',

  input: {
    dragDrop: 'Bilder hierher ziehen und ablegen oder zum Hochladen klicken',
    supportedFormats: 'Unterstützte Formate: JPG, PNG, GIF, WEBP',
    selected: '{count} Dateien ausgewählt',
    changeFiles: 'Dateien ändern',
    width: 'Breite',
    height: 'Höhe',
    keepOriginal: '0 eingeben, um Originalgröße beizubehalten',
  },

  results: {
    originalImage: 'Originalbild',
    compressedImage: 'Komprimiert',
    filename: 'Dateiname:',
    dimensions: 'Abmessungen:',
    fileSize: 'Dateigröße:',
    compressionRatio: 'Kompressionsrate:',
    viewOriginal: 'Original anzeigen',
  },

  about: {
    title: 'Über Bildkompression',
    description: 'Dieses Tool nutzt die Canvas-API des Browsers zur Bildkompression. Alle Verarbeitungen erfolgen lokal auf Ihrem Gerät - Bilder werden nicht auf Server hochgeladen.',
    principlesTitle: 'Kompressionsprinzipien:',
    principles: {
      resize: 'Bildgröße anpassen: Kleinere Abmessungen bedeuten weniger Pixeldaten',
      quality: 'Qualität reduzieren: Bildqualitätsparameter verringern die Dateigröße',
      format: 'Format konvertieren: Unterschiedliche Bildformate haben verschiedene Kompressionseigenschaften'
    },
    useCasesTitle: 'Anwendungsfälle:',
    useCases: {
      web: 'Webbilder optimieren für schnellere Ladezeiten',
      email: 'E-Mail-Anhanggrößen reduzieren',
      social: 'Komprimierung vor Social Media Upload',
      storage: 'Speicherplatz optimieren'
    }
  },

  options: {
    quality: 'Qualität',
    qualityValue: 'Qualität ({value}%)',
    lowQuality: 'Niedrige Qualität/kleine Datei',
    highQuality: 'Hohe Qualität/große Datei',
    format: 'Ausgabeformat',
    maxSize: 'Maximale Größe ({width} × {height} px)',
    keepExif: 'EXIF-Daten behalten',
    resizeImage: 'Bildgröße ändern',
    maxWidth: 'Maximale Breite',
    maxHeight: 'Maximale Höhe',
    compressionLevel: 'Kompressionsstufe',
    maxFileSize: 'Zieldateigröße',
    optimizationLevel: 'Optimierungsstufe',
    convertTo: 'Konvertieren zu'
  },

  presets: {
    web: 'Weboptimierung',
    highQuality: 'Hohe Qualität',
    balanced: 'Ausgewogen',
    smallSize: 'Kleine Größe',
    custom: 'Benutzerdefiniert'
  },

  formats: {
    original: 'Originalformat',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG-Format geeignet für Fotos, unterstützt keine Transparenz',
    png: 'PNG',
    pngDesc: 'PNG unterstützt Transparenz, ideal für Icons und Illustrationen',
    webp: 'WebP',
    webpDesc: 'WebP bietet hohe Kompressionsrate, ideal für Webnutzung',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'Nicht verkleinern',
    maxDimension: 'Maximale Abmessung',
    exactDimensions: 'Exakte Abmessungen',
    percentage: 'Prozentuale Skalierung'
  },

  actions: {
    upload: 'Bilder hochladen',
    compress: 'Komprimieren',
    processing: 'Wird verarbeitet...',
    download: 'Herunterladen',
    downloadAll: 'Alle herunterladen',
    batchDownload: 'Stapeldownload',
    clear: 'Löschen',
    addMore: 'Weitere Bilder hinzufügen',
    removeAll: 'Alle entfernen',
    preview: 'Vorschau',
    delete: 'Löschen'
  },

  table: {
    filename: 'Dateiname',
    originalSize: 'Originalgröße',
    original: 'Originalgröße',
    compressedSize: 'Komprimierte Größe',
    compressed: 'Komprimierte Größe',
    savings: 'Ersparnis',
    ratio: 'Kompressionsrate',
    quality: 'Qualität',
    dimensions: 'Abmessungen',
    originalDimensions: 'Originalabmessungen',
    newDimensions: 'Neue Abmessungen',
    status: 'Status'
  },

  messages: {
    dropped: '{count} Bilder eingefügt',
    uploading: 'Bilder werden hochgeladen...',
    compressing: 'Bilder werden komprimiert...',
    compressed: 'Bilder erfolgreich komprimiert',
    downloadPreparing: 'Download wird vorbereitet...',
    downloadReady: 'Download bereit',
    cleared: 'Alle Bilder gelöscht',
    tooManyFiles: 'Zu viele Dateien. Maximum: {max}',
    fileTooLarge: 'Datei zu groß. Maximum: {max}MB',
    unsupportedFormat: 'Nicht unterstütztes Format: {format}',
    imageError: 'Fehler bei Bildverarbeitung: {error}',
    batchDownloadNotSupported: 'Für Stapeldownloads wird die JSZip-Bibliothek benötigt. Bitte laden Sie Bilder einzeln herunter oder fügen Sie Zip-Unterstützung hinzu.',
    batchDownloadError: 'Fehler beim Stapeldownload: {error}',
    invalidImage: 'Bitte gültige Bilddatei auswählen'
  }
};