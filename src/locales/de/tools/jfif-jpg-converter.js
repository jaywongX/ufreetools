export default {
  name: 'JFIF zu JPG Konverter',
  description: 'Konvertieren Sie JFIF-Bilder online in das JPG-Format, hohe Qualität, verschiedene Optionen',
  tags: ['Bilder', 'Konvertierung', 'jpg', 'jfif', 'jpeg', 'Format', 'Tool'],

  meta: {
    title: 'JFIF zu JPG Konverter - Kostenloses Online-Bildkonvertierungstool',
    description: 'Kostenlos JFIF zu JPG online konvertieren. Schnelle, sichere Browser-basierte Konvertierung mit Batch-Verarbeitung, Vorher-Nachher-Vergleich und erweiterten Qualitätseinstellungen. Kein Wasserzeichen, keine Anmeldung erforderlich.'
  },

  upload: {
    title: 'JFIF zu JPG Konverter',
    subtitle: 'Konvertieren Sie JFIF-Bilder in perfekter Qualität in das JPG-Format',
    dropzone: 'Ziehen Sie Ihre JFIF-Dateien hierher',
    dropzoneActive: 'Dateien loslassen zum Konvertieren',
    maxSize: 'Maximale Dateigröße: 50MB',
    supportedFormats: 'Unterstützte Formate: JFIF, JPEG, JPG'
  },

  settings: {
    title: 'Konvertierungseinstellungen',
    advanced: 'Erweiterte Einstellungen',
    quality: {
      label: 'Bildqualität',
      description: 'Höhere Qualität führt zu größeren Dateien',
      auto: 'Automatische Optimierung (empfohlen)'
    },
    qualityLabels: {
      maximum: 'Höchste Qualität',
      high: 'Hohe Qualität',
      good: 'Gute Qualität',
      medium: 'Mittlere Qualität',
      low: 'Niedrige Qualität',
      veryLow: 'Sehr niedrige Qualität'
    },
    metadata: {
      label: 'Bild-Metadaten',
      preserve: 'Alle Metadaten behalten (EXIF, GPS etc.)',
      strip: 'Alle Metadaten entfernen (kleinere Dateien)',
      keepBasic: 'Nur grundlegende Metadaten behalten'
    },
    filenameOption: 'Ausgabe-Dateiname',
    filenameOriginal: 'Original',
    filenameConverted: 'Präfix hinzufügen',
    filenameCustom: 'Benutzerdefiniert',
    filenameTemplatePlaceholder: 'Z.B.: converted-{name}',
    filenameTemplateHelp: 'Verwenden Sie {name} für den Originaldateinamen',
    preserveMetadata: 'Bild-Metadaten behalten'
  },

  preview: {
    title: 'Bildvorschau',
    before: 'Original JFIF',
    after: 'JPG Vorschau',
    noPreview: 'Keine Vorschau verfügbar',
    togglePreview: 'Vorschau ein-/ausblenden',
    imageDetails: 'Bilddetails'
  },

  fileTable: {
    fileName: 'Dateiname',
    type: 'Typ',
    size: 'Größe',
    status: 'Status',
    preview: 'Vorschau',
    pending: 'Wartend',
    converting: 'Wird konvertiert...',
    done: 'Fertig',
    error: 'Fehler',
    progress: 'Fortschritt'
  },

  results: {
    title: 'Konvertierte Dateien',
    summary: '{count} Dateien konvertiert, {saved} Speicherplatz gespart',
    originalName: 'Originalname',
    convertedName: 'Konvertierter Name',
    originalSize: 'Originalgröße',
    convertedSize: 'Neue Größe',
    compressionRate: 'Kompressionsrate',
    actions: 'Aktionen',
    noResults: 'Noch keine Konvertierungsergebnisse'
  },

  actions: {
    selectFile: 'Datei auswählen',
    addMore: 'Mehr hinzufügen',
    clear: 'Dateien löschen',
    convertAll: 'Alle konvertieren',
    converting: 'Wird konvertiert...',
    download: 'Herunterladen',
    downloadAll: 'Alle herunterladen',
    clearResults: 'Ergebnisse löschen',
    viewDetails: 'Details anzeigen',
    compare: 'Vergleichen',
    retry: 'Fehlgeschlagene wiederholen',
    cancelAll: 'Abbrechen',
    optimizeAll: 'Automatisch optimieren'
  },

  messages: {
    noValidFiles: 'Bitte wählen Sie gültige JFIF- oder JPEG-Dateien aus.',
    conversionError: 'Fehler beim Konvertieren der Datei. Bitte versuchen Sie es erneut.',
    conversionSuccess: 'Alle Dateien erfolgreich konvertiert!',
    partialSuccess: '{success} von {total} Dateien erfolgreich konvertiert.',
    downloadStarted: 'Download gestartet...',
    processingFiles: 'Ihre Dateien werden verarbeitet...',
    dragActive: 'Ziehen Sie Dateien zum Hochladen hierher',
    fileSizeExceeded: 'Dateigröße überschreitet das Limit von 50MB',
    unsupportedFormat: 'Nicht unterstütztes Dateiformat'
  },

  history: {
    title: 'Letzte Konvertierungen',
    empty: 'Keine letzten Konvertierungen',
    clear: 'Verlauf löschen',
    restore: 'Dateien wiederherstellen'
  },

  info: {
    title: 'Über JFIF zu JPG Konvertierung',
    description: 'Unser JFIF zu JPG Konverter ermöglicht Ihnen, JFIF-Bilddateien schnell und einfach in das besser kompatible JPG-Format zu konvertieren, wobei die gesamte Verarbeitung sicher in Ihrem Browser erfolgt.',
    
    whatIs: {
      title: 'Was ist JFIF?',
      content: 'JFIF (JPEG File Interchange Format) ist ein Dateiformatstandard für JPEG-Dateien. Es bietet zusätzliche Informationen wie Auflösung, Seitenverhältnis und andere Metadaten, die sicherstellen, dass JPEG-Bilder auf verschiedenen Geräten und Plattformen korrekt angezeigt werden. Obwohl JFIF und JPG technisch verwandte Formate sind, können bestimmte Software und Geräte mit einem der beiden besser umgehen.'
    },
    
    whyConvert: {
      title: 'Warum JFIF in JPG konvertieren?',
      reason1: 'Bessere Kompatibilität mit verschiedenen Anwendungen und Geräten',
      reason2: 'Einfacherer Upload auf Websites, die JFIF-Format möglicherweise ablehnen',
      reason3: 'Standardisierung Ihrer Bildersammlung mit konsistenter Dateiendung',
      reason4: 'Probleme beheben, wenn bestimmte Programme JFIF-Dateien nicht öffnen oder korrekt anzeigen können'
    },
    
    howItWorks: {
      title: 'So funktioniert es',
      content: 'Unser Konverter verarbeitet JFIF-Dateien vollständig in Ihrem Browser. Ihre Bilder werden niemals auf einen Server hochgeladen, was vollständige Privatsphäre und Sicherheit gewährleistet. Das Tool liest die JFIF-Bilddaten, rendert sie und speichert sie dann mit Ihren gewählten Qualitätseinstellungen als Standard-JPG-Format.'
    },
    
    tips: {
      title: 'Tipps für beste Ergebnisse',
      tip1: 'Nutzen Sie den Qualitätsregler für einen Ausgleich zwischen Dateigröße und Bildqualität',
      tip2: 'Für Bilder mit Text oder scharfen Details höhere Qualitätseinstellungen verwenden',
      tip3: 'Mehrere Dateien auf einmal konvertieren und als ZIP-Datei herunterladen',
      tip4: '"Automatisch optimieren" für den besten Kompromiss zwischen Qualität und Dateigröße nutzen',
      tip5: 'Metadaten entfernen für kleinere Dateien, wenn Privatsphäre wichtig ist'
    },
    
    privacy: {
      title: 'Privatsphäre & Sicherheit',
      content: 'Wir nehmen Ihre Privatsphäre ernst. Die gesamte Verarbeitung erfolgt direkt in Ihrem Browser - Ihre Dateien werden niemals auf einen Server hochgeladen. Dies gewährleistet vollständige Sicherheit und Privatsphäre für Ihre Bilder.'
    }
  }
};