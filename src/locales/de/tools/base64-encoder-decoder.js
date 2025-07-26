export default {
  name: 'Base64 Kodierer/Dekodierer',
  description: 'Schnelle Konvertierung zwischen Text und Base64-kodierten Daten',

  mode: {
    title: 'Modus',
    encode: 'Kodieren',
    decode: 'Dekodieren'
  },

  input: {
    title: 'Eingabe',
    placeholder: 'Text zur Verarbeitung eingeben...',
    clear: 'Löschen',
    copy: 'Kopieren',
    paste: 'Einfügen',
    upload: 'Datei hochladen',
    dragDrop: 'Datei hierher ziehen oder zum Hochladen klicken',
    textOption: 'Text',
    fileOption: 'Datei',
    hexOption: 'Hex',
    selectFile: 'Datei auswählen',
  },

  output: {
    title: 'Ausgabe',
    placeholder: 'Ergebnis wird hier angezeigt...',
    copy: 'Kopieren',
    download: 'Herunterladen',
    empty: 'Keine Ausgabe'
  },

  options: {
    title: 'Optionen',
    encoding: 'Zeichenkodierung',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'URL-sichere Kodierung verwenden',
    autoDecode: 'Automatisch erkennen und dekodieren',
    includeDataURI: 'Data-URI-Präfix einbeziehen',
    trimWhitespace: 'Leerzeichen entfernen',
    preserveLineBreaks: 'Zeilenumbrüche beibehalten',
    addImageHeader:'Bild-Base64-Header hinzufügen',
  },

  dataUri: {
    title: 'Data-URI',
    mimeType: 'MIME-Typ',
    common: 'Häufige Typen',
    custom: 'Benutzerdefiniert'
  },

  messages: {
    copied: 'In Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen',
    pasteFailed: 'Einfügen fehlgeschlagen',
    uploadSuccess: 'Datei erfolgreich hochgeladen',
    uploadFailed: 'Datei-Upload fehlgeschlagen',
    readFailed: 'Dateilesen fehlgeschlagen',
    invalidBase64: 'Ungültige Base64-Kodierung',
    invalidHex: 'Ungültige Hex-Kodierung',
    fileTooLarge: 'Datei zu groß, bitte direkt herunterladen',
    processError: 'Fehler bei der Verarbeitung',
    encodeSuccess: 'Kodierung erfolgreich',
    decodeSuccess: 'Dekodierung erfolgreich',
    processing: 'Wird verarbeitet...'
  },

  mimeTypes: {
    'text/plain': 'Text',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG-Bild',
    'image/png': 'PNG-Bild',
    'image/gif': 'GIF-Bild',
    'image/svg+xml': 'SVG-Bild',
    'application/pdf': 'PDF-Dokument'
  },

  tips: {
    title: 'Anwendungstipps',
    tip1: 'Base64-Kodierung kann beliebige Binärdaten in reines Textformat umwandeln',
    tip2: 'URL-sichere Option entfernt "+" und "/" aus der Standard-Base64-Kodierung',
    tip3: 'Data-URI-Präfix ermöglicht direkte Verwendung kodierter Daten in HTML img-Tags',
    tip4: 'Große Dateien benötigen mehr Ressourcen - Empfohlene Grenze: 2MB',
    tip5: 'Spezielle Zeichen erfordern möglicherweise bestimmte Zeichenkodierungen'
  },

  about: {
    title: 'Über Base64-Kodierung',
    description: 'Base64 ist eine Methode zur Darstellung von Binärdaten mit 64 druckbaren ASCII-Zeichen, häufig verwendet zur Übertragung und Speicherung von Binärdaten in textbasierten Systemen.'
  },

  features: {
    title: 'Funktionsübersicht',
    multiInput: 'Unterstützt Text-, Hex- und Dateieingabe',
    charsetSupport: 'UTF-8 und GBK Zeichensätze unterstützt',
    imagePreview: 'Bildvorschau (für Dateien unter 1MB)',
    fileDownload: 'Mehrere Dateiformate zum Download (Standard: PDF)',
    chunkProcessing: 'Blockweise Verarbeitung großer Dateien mit Fortschrittsanzeige',
    autoDetect: 'Automatische Erkennung von Bildtypen'
  },

  notes: {
    title: 'Hinweise',
    sizeIncrease: 'Base64-Kodierung erhöht Datenmenge um ~33%',
    chunkProcessing: 'Große Dateien werden blockweise verarbeitet',
    largeFiles: 'Dateien über 10MB können nur heruntergeladen werden',
    fileInput: 'Für große Dateien direkte Dateieingabe empfohlen'
  },

  fileTypeLabel: {
    pdf: 'PDF-Dokument',
    txt: 'Textdatei',
    jpg: 'JPG-Bild', 
    png: 'PNG-Bild', 
    zip: 'ZIP-Archiv',
    bin: 'Binärdatei',
  }
};