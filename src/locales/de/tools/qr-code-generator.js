export default {
  name: 'QR-Code-Generator',
  description: 'Erstellen Sie anpassbare QR-Codes für URLs, Texte und mehr',

  options: {
    content: 'QR-Code-Inhalt',
    contentType: 'Inhaltstyp',
    errorCorrectionLevel: 'Fehlerkorrektur-Level',
    size: 'Größe',
    margin: 'Rand',
    foregroundColor: 'Vordergrundfarbe',
    backgroundColor: 'Hintergrundfarbe',
    logo: 'Logo hinzufügen',
    logoSize: 'Logo-Größe',
    cornerRadius: 'Eckenradius'
  },

  contentTypes: {
    url: 'Webadresse',
    text: 'Reiner Text',
    email: 'E-Mail',
    phone: 'Telefonnummer',
    sms: 'SMS',
    wifi: 'WiFi-Netzwerk',
    vcard: 'Visitenkarte (vCard)',
    mecard: 'Visitenkarte (MeCard)'
  },

  errorLevels: {
    L: 'Niedrig (7%)',
    M: 'Mittel (15%)',
    Q: 'Hoch (25%)',
    H: 'Höchst (30%)'
  },

  actions: {
    generate: 'QR-Code generieren',
    download: 'Herunterladen',
    downloadSVG: 'Als SVG herunterladen',
    downloadPNG: 'Als PNG herunterladen',
    copy: 'Bild kopieren',
    clear: 'Zurücksetzen',
    uploadLogo: 'Logo hochladen'
  },

  templates: {
    title: 'Schnellvorlagen',
    confirmReplace: 'Möchten Sie den aktuellen Inhalt ersetzen?',
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    url: {
      name: 'Weblink'
    },
    email: {
      name: 'E-Mail-Adresse'
    },
    phone: {
      name: 'Telefonnummer'
    },
    sms: {
      name: 'SMS'
    },
    wifi: {
      name: 'Wi-Fi-Konfiguration',
      example: {
        ssid: 'Netzwerkname',
        password: 'Passwort'
      }
    },
    geo: {
      name: 'Geoposition'
    }
  },

  appearance: {
    title: 'Darstellung'
  },

  preview: {
    title: 'Vorschau',
    generating: 'Wird generiert...',
    clickGenerateButton: 'Klicken Sie auf "QR-Code generieren"',
    clickToDownload: 'Zum Herunterladen klicken'
  },

  tips: {
    title: 'Tipps',
    saveToPrint: 'Generierte QR-Codes können als Bild gespeichert werden, zum Drucken oder Teilen.',
    errorCorrection: 'Das Fehlerkorrektur-Level gibt an, wie gut der QR-Code bei Beschädigung lesbar bleibt. L ist am wenigsten robust, H am robustesten aber komplexer.'
  },

  wifi: {
    ssid: 'Netzwerkname (SSID)',
    password: 'Passwort',
    encryption: 'Verschlüsselung',
    hidden: 'Verstecktes Netzwerk'
  },

  placeholders: {
    content: 'Text, Link oder anderen Inhalt eingeben...'
  },

  characters: 'Zeichen',
  maxChars: 'Empfohlen: maximal 300 Zeichen',

  messages: {
    copied: 'In die Zwischenablage kopiert!',
    generated: 'QR-Code erfolgreich generiert',
    contentRequired: 'Bitte QR-Code-Inhalt eingeben',
    downloaded: 'QR-Code heruntergeladen',
    confirmReplace: 'Klicken Sie zum Bestätigen der Inhaltsersetzung',
    contentUpdated: 'Inhalt aktualisiert',
    changesCancelled: 'Änderungen abgebrochen',
    invalidUrl: 'Bitte gültige URL eingeben',
    invalidEmail: 'Bitte gültige E-Mail-Adresse eingeben',
    invalidPhone: 'Bitte gültige Telefonnummer eingeben',
    logoTooBig: 'Logo-Datei zu groß (maximal 1MB)'
  },

  errors: {
    canvasNotReady: 'Canvas-Element nicht bereit',
    generationError: 'Fehler bei der QR-Code-Generierung',
    generationErrorWithMessage: 'Fehler bei der QR-Code-Generierung: {message}',
    downloadError: 'Fehler beim Herunterladen: {message}'
  }
};