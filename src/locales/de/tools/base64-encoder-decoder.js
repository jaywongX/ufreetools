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
    },
    article: {
      title: "Base64-Kodierer/Dekodierer: Konvertieren und schützen Sie Ihre Daten",
      features: {
        title: "Base64-Kodierung und -Dekodierung verstehen",
        description: "Der <strong>Base64-Kodierer/Dekodierer</strong> ist ein unverzichtbares Werkzeug zur Konvertierung zwischen Binärdaten und ASCII-Textformat. Dieses leistungsfähige <strong>Datenkodierungstool</strong> kann jede Art von Binärinformation in eine sichere Textdarstellung mit nur 64 druckbaren ASCII-Zeichen (A-Z, a-z, 0-9, +, /) umwandeln, ideal für die Übertragung durch textbasierte Systeme.<br><br>Unser <strong>Base64-Konverter</strong> unterstützt mehrere Eingabemethoden inklusive Text, Dateien und Hexadezimal-Eingabe, mit erweiterten Optionen für Zeichenkodierungen (UTF-8 und GBK). Beim <strong>Base64-Dekodieren</strong> erkennt das Tool automatisch Dateitypen wie Bilder, Dokumente und Archive, bietet Bildvorschau und unterstützt den Download in verschiedenen Formaten. Für große Dateien implementiert unser <strong>Base64-Kodierer</strong> effiziente Blockverarbeitung mit Echtzeit-Fortschrittsanzeige.",
        useCases: {
          title: "Typische Anwendungsfälle für Base64-Kodierung",
          items: [
            "Direktes Einbetten von Binärdateien wie Bildern in HTML-, CSS- oder JavaScript-Code mittels Data-URIs für eigenständige Webseiten ohne externe Ressourcen",
            "Sichere Übertragung von Binärdaten über E-Mail-Systeme oder reine Textprotokolle, um Datenkorruption durch Nicht-Text-Zeichen zu vermeiden",
            "Speicherung komplexer Datenstrukturen in textbasierten Speichermechanismen wie Cookies oder localStorage",
            "Kodierung von Authentifizierungsdaten oder API-Tokens für sichere Übertragung in HTTP-Headern (Basic Authentication)",
            "Konvertierung von Binärdateianhängen für die Einbindung in XML, JSON oder andere textbasierte Austauschformate",
            "Erstellung von URL-sicheren Datenstrings für URL-Parameter ohne spezielle Zeichen"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu Base64-Kodierung",
        items: [
          {
            question: "Warum sind Base64-kodierte Daten größer als die Originaldaten?",
            answer: "Base64-Kodierung erhöht die Datengröße um etwa 33%, da sie 4 ASCII-Zeichen verwendet, um jeweils 3 Bytes Binärdaten darzustellen. Diese Größenzunahme ist ein grundlegendes Merkmal von Base64, da jedes Zeichen nur 6 Bits (2^6 = 64 mögliche Werte) statt 8 Bits verwendet. Dieser Kompromiss ist notwendig für die Textkompatibilität über verschiedene Systeme hinweg, insbesondere bei ASCII-basierten Systemen. Bei großen Dateien sollte diese Größenzunahme bei der Planung von Speicher- oder Übertragungsanforderungen berücksichtigt werden."
          },
          {
            question: "Was ist der Unterschied zwischen Standard-Base64 und URL-sicherer Base64-Kodierung?",
            answer: "Standard-Base64 verwendet die Zeichen '+' und '/', die in URLs eine spezielle Bedeutung haben und Probleme verursachen können, wenn kodierte Daten in URL-Parametern verwendet werden. URL-sichere Base64 ersetzt diese Zeichen durch '-' und '_', wodurch der kodierte String sicher in URLs verwendet werden kann, ohne zusätzlich escaped werden zu müssen. Unser Base64-Kodierer bietet die Option für URL-sichere Ausgabe, sodass Sie je nach Verwendungszweck der kodierten Daten das passende Format wählen können."
          },
          {
            question: "Kann Base64-Kodierung zur Datenverschlüsselung oder -sicherheit verwendet werden?",
            answer: "Nein, Base64-Kodierung ist keine Verschlüsselung und bietet keine Datensicherheit oder Vertraulichkeit. Es handelt sich lediglich um ein Schema zur Konvertierung von Binärdaten in Textformat. Base64-kodierte Daten können von jedem mit allgemein verfügbaren Tools (inklusive unserem Base64-Dekodierer) leicht zurückkonvertiert werden. Wenn Datensicherheit benötigt wird, sollten Sie vor der Base64-Kodierung geeignete Verschlüsselungsalgorithmen (wie AES oder RSA) verwenden. Base64 dient primär der Kompatibilität, nicht der Sicherheit."
          },
          {
            question: "Wie erkenne ich Base64-kodierten Text?",
            answer: "Base64-kodierter Text hat typischerweise folgende Merkmale: Er besteht nur aus Buchstaben (A-Z, a-z), Zahlen (0-9) und meist den Zeichen '+' und '/' (oder deren URL-sicheren Varianten '-' und '_'); die Länge ist immer ein Vielfaches von 4 (manchmal mit '='-Zeichen am Ende aufgefüllt); er sieht aus wie eine zufällige Zeichenkette ohne erkennbare Wortmuster. Unser Base64-Dekodierer enthält eine Validierungsfunktion, die vor dem Dekodieren prüft, ob die Eingabe gültiges Base64 ist."
          },
          {
            question: "Was passiert, wenn meinem Base64-String die Füllzeichen fehlen?",
            answer: "Base64-Kodierung fügt manchmal Füllzeichen ('=') am Ende hinzu, um sicherzustellen, dass die Zeichenkettenlänge ein Vielfaches von 4 ist. Obwohl der Base64-Standard diese Auffüllung verlangt, können viele moderne Base64-Dekodierer (inklusive unseres) mit Base64-Strings ohne Füllzeichen umgehen, indem sie die korrekte Auffüllung basierend auf der Stringlänge automatisch berechnen. Für maximale Kompatibilität mit allen Base64-Dekodierern ist es jedoch empfehlenswert, bei der Generierung von Base64-kodierten Daten die korrekte Auffüllung beizubehalten."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des Base64-Kodierers/Dekodierers",
        steps: [
          "Wählen Sie den gewünschten Modus durch Klicken auf 'Kodieren' oder 'Dekodieren' oben in der Tool-Oberfläche",
          "Zum Kodieren wählen Sie Ihre Eingabemethode: 'Text' für reine Texteingabe, 'Datei' für den Upload von Binärdateien oder 'Hex' für hexadezimale String-Darstellung",
          "Beim Kodieren von Dateien können Sie 'Bild-Base64-Header hinzufügen' aktivieren, um das entsprechende Data-URI-Präfix einzufügen, was die direkte Verwendung in Webumgebungen erleichtert",
          "Zum Dekodieren wählen Sie 'Text' für Base64-String-Eingabe oder 'Datei' für den Upload von Textdateien mit Base64-Daten",
          "Beim Dekodieren können Sie aus dem Dropdown-Menü die gewünschte Zeichenkodierung (UTF-8 oder GBK) auswählen, um internationale Zeichen korrekt zu verarbeiten",
          "Geben Sie je nach gewählter Methode Ihre Daten ein oder laden Sie eine Datei hoch",
          "Klicken Sie auf 'Kodieren' oder 'Dekodieren', um die Daten zu verarbeiten - das Ergebnis wird im unteren Ausgabefeld angezeigt",
          "Für dekodierte Bilder können Sie mit 'Bild anzeigen' das Ergebnis überprüfen oder mit der Download-Option den dekodierten Inhalt in Ihrem bevorzugten Format speichern"
        ]
      },
      conclusion: "Der Base64-Kodierer/Dekodierer ist ein vielseitiges Werkzeug für verschiedene Szenarien, in denen Daten zwischen rein textbasierten Systemen übertragen werden müssen. Ob Sie als Webentwickler Bilder in CSS einbetten, als Systemingenieur Binärdaten über Textprotokolle senden oder einfach nur einen Base64-String dekodieren müssen - dieses Tool bietet eine effiziente Lösung mit erweiterten Optionen für Ihre spezifischen Anforderungen. Durch die Unterstützung verschiedener Eingabemethoden, Zeichenkodierungen und Dateiformate hilft unser Base64-Tool dabei, binäre und textbasierte Systeme in der heutigen vielfältigen Computerumgebung zu verbinden."
    }
  }