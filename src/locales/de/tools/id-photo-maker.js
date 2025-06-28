export default {
    name: 'Passfoto-Ersteller',
    description: 'Erstellen Sie professionelle Passfotos mit anpassbarem Hintergrund und Größen',
    upload: {
      title: 'Bild hochladen',
      dropzone: 'Bild hierher ziehen und ablegen oder zum Durchsuchen klicken',
      or: 'oder',
      camera: 'Foto mit Kamera aufnehmen',
      constraints: 'Maximale Größe: 10MB. Formate: JPG, PNG, WEBP',
      takePicture: 'Foto aufnehmen',
      retake: 'Neu aufnehmen'
    },
    editing: {
      title: 'Foto bearbeiten',
      faceDetection: 'Gesichtserkennung',
      autoDetect: 'Automatische Gesichtserkennung',
      manualMode: 'Manueller Modus',
      zoom: 'Zoom',
      rotate: 'Drehen',
      brightness: 'Helligkeit',
      contrast: 'Kontrast',
      saturation: 'Sättigung',
      filters: 'Filter'
    },
    background: {
      title: 'Hintergrund',
      original: 'Original',
      white: 'Weiß',
      blue: 'Blau',
      red: 'Rot',
      custom: 'Benutzerdefinierte Farbe',
      transparent: 'Transparent'
    },
    size: {
      title: 'Fotogröße',
      presets: 'Größen-Voreinstellungen',
      custom: 'Benutzerdefinierte Größe',
      width: 'Breite',
      height: 'Höhe',
      unit: 'Einheit',
      mm: 'Millimeter',
      inches: 'Zoll',
      pixels: 'Pixel'
    },
    presets: {
      passport: 'Reisepass (35×45 mm)',
      visa: 'Visum (2×2 Zoll)',
      drivingLicense: 'Führerschein (2.5×3 Zoll)',
      idCard: 'Personalausweis (25×35 mm)',
      linkedin: 'LinkedIn (400×400 Pixel)',
      schengen: 'Schengen-Visum (35×45 mm)',
      chinese: 'Chinesisches Visum (33×48 mm)',
      indian: 'Indisches Visum (2×2 Zoll)'
    },
    output: {
      title: 'Ausgabe',
      preview: 'Vorschau',
      grid: 'Mehrere Fotos',
      columns: 'Spalten',
      rows: 'Zeilen',
      spacing: 'Abstand',
      background: 'Seitenhintergrund',
      paperSize: 'Papierformat',
      download: 'Herunterladen',
      print: 'Drucken',
      downloadAs: 'Herunterladen als',
      jpg: 'JPG-Bild',
      png: 'PNG-Bild',
      pdf: 'PDF-Dokument'
    },
    actions: {
      apply: 'Anwenden',
      reset: 'Zurücksetzen',
      undo: 'Rückgängig',
      redo: 'Wiederherstellen',
      save: 'Foto speichern',
      share: 'Teilen'
    },
    messages: {
      noFaceDetected: 'Kein Gesicht erkannt. Versuchen Sie manuelle Anpassung oder ein anderes Foto.',
      multipleFacesDetected: 'Mehrere Gesichter erkannt. Größtes Gesicht wird verwendet.',
      processing: 'Ihr Foto wird verarbeitet...',
      downloadReady: 'Ihr Foto ist zum Download bereit',
      photoSaved: 'Foto erfolgreich gespeichert'
    }
  }