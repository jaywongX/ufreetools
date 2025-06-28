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
    },
    article: {
      title: "QR-Code-Generator: Erstellen und anpassen Sie Quick-Response-Codes",
      features: {
        title: "QR-Codes und ihre Anwendungen",
        description: "Unser <strong>QR-Code-Generator</strong> ist ein vielseitiges Online-Tool zum Erstellen anpassbarer QR-Codes für verschiedene Informationstypen. Im Gegensatz zu herkömmlichen Barcodes können <strong>QR-Codes</strong> große Datenmengen in kompakter, maschinenlesbarer Form speichern und mit Smartphones oder speziellen Scannern schnell gelesen werden.<br><br>Dieses erweiterte <strong>QR-Code-Tool</strong> unterstützt verschiedene Inhaltstypen wie URLs, Klartext, Kontaktinformationen, WiFi-Zugangsdaten und geografische Koordinaten. Jeder generierte Code ist vollständig anpassbar mit Optionen für Größe, Farbe, Fehlerkorrektur und sogar Logo-Hinzufügung, während die Scanbarkeit erhalten bleibt.<br><br>Die hochauflösenden Codes des <strong>QR-Code-Erstellers</strong> können als PNG oder SVG heruntergeladen werden, ideal für digitale Nutzung oder physischen Druck auf Marketingmaterialien, Produktverpackungen oder Schildern.",
        useCases: {
          title: "Praktische Anwendungsfälle für QR-Codes",
          items: [
            "<strong>Marketing</strong>: Erstellen Sie <strong>maßgeschneiderte QR-Codes</strong> für Visitenkarten, Broschüren und Werbematerial, die Kunden mit Ihrer Website, Sonderangeboten oder Kontaktdaten verbinden. Unternehmen können mit Markenfarben und Logos gestaltete QR-Codes nutzen, um die Markenidentität zu stärken.",
            
            "<strong>Berührungslose Zahlungen</strong>: Generieren Sie <strong>Zahlungs-QR-Codes</strong>, die direkt mit Zahlungsplattformen oder Kryptowährungs-Wallets verlinkt sind, für schnelle Transaktionen. Besonders nützlich für kleine Unternehmen, die ohne teure POS-Terminals digitale Zahlungen akzeptieren möchten.",
            
            "<strong>Restaurant-Menüs</strong>: Entwickeln Sie <strong>scannbare QR-Codes</strong> für kontaktlosen Menüzugang, sodass Gäste Speisen auf ihrem Smartphone einsehen können. Restaurants können digitale Menüs sofort aktualisieren, ohne physische Menüs neu drucken zu müssen.",
            
            "<strong>Event-Management</strong>: Erstellen Sie <strong>QR-Code-Tickets</strong> für Konferenzen, Konzerte oder Ausstellungen, die zur schnellen Verifizierung gescannt werden können. Veranstalter können Teilnehmer in Echtzeit tracken und den Check-in vereinfachen.",
            
            "<strong>Produktverpackungen</strong>: Integrieren Sie <strong>QR-Code-Etiketten</strong> auf Produkten, die zu Handbüchern, Einrichtungsanleitungen oder Garantieregistrierungen verlinken. Hersteller können umfangreiche Produktinformationen bereitstellen, ohne Verpackungskosten zu erhöhen.",
            
            "<strong>Bildungsressourcen</strong>: Generieren Sie <strong>pädagogische QR-Codes</strong>, die Schüler mit Lernmaterialien, interaktiven Tests oder Videos verbinden. Lehrer können diese Codes in Unterlagen integrieren, um Brücken zwischen physischen und digitalen Lernumgebungen zu schlagen."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu QR-Codes",
        items: [
          {
            question: "Was bedeuten die verschiedenen Fehlerkorrektur-Level?",
            answer: "Die <strong>Fehlerkorrektur-Level</strong> bestimmen, wie viel Beschädigung ein QR-Code verkraftet:<br><br>• <strong>L (Niedrig)</strong>: Bis zu 7% Beschädigung, kompakteste Codes, geeignet für kontrollierte Umgebungen<br>• <strong>M (Mittel)</strong>: Bis zu 15% Beschädigung, guter Kompromiss für Standardanwendungen<br>• <strong>Q (Hoch)</strong>: Bis zu 25% Beschädigung, empfohlen für industrielle Nutzung oder Außeneinsatz<br>• <strong>H (Höchst)</strong>: Bis zu 30% Beschädigung, ideal für raue Umgebungen oder bei Logo-Einfügung<br><br>Höhere Level erzeugen komplexere <strong>QR-Code-Muster</strong> mit Redundanz, was die Codes etwas größer aber deutlich robuster macht."
          },
          {
            question: "Kann ich Logos hinzufügen, ohne die Funktion zu beeinträchtigen?",
            answer: "Ja, Sie können Logos in <strong>QR-Codes</strong> einfügen und dabei die Scanbarkeit erhalten:<br><br>1. Verwenden Sie höhere Fehlerkorrektur (vorzugsweise H)<br>2. Halten Sie Logos relativ klein (maximal 30% der Mitte)<br>3. Sorgen Sie für ausreichenden Farbkontrast<br>4. Vermeiden Sie die Positionierung über den Positionierungsmarkierungen (Ecken)<br><br>Unser <strong>QR-Code-Generator</strong> passt automatisch die Datendichte an, wenn Sie ein Logo hinzufügen. Testen Sie den Code nach der Logo-Einfügung mit verschiedenen Geräten."
          },
          {
            question: "Welche Informationen kann ich in QR-Codes kodieren?",
            answer: "QR-Codes können vielfältige Informationen speichern:<br><br>• <strong>Web-URLs</strong>: Weiterleitung zu Webseiten oder Ressourcen<br>• <strong>Klartext</strong>: Nachrichten oder alphanumerische Daten (bis zu 4.000 Zeichen)<br>• <strong>Kontaktdaten</strong>: Vollständige Kontaktinformationen für Smartphones<br>• <strong>WiFi-Daten</strong>: Automatischer Netzwerkzugang ohne Passworteingabe<br>• <strong>Telefonnummern</strong>: Direkter Anrufstart<br>• <strong>SMS</strong>: Vorausgefüllte Textnachrichten<br>• <strong>E-Mails</strong>: Neue Nachricht an Empfänger<br>• <strong>Standorte</strong>: Öffnen von Koordinaten in Karten-Apps<br><br>Unser <strong>QR-Code-Tool</strong> bietet für jeden Typ spezielle Vorlagen, die Daten korrekt formatieren."
          },
          {
            question: "Welche Größe sollte ein gedruckter QR-Code haben?",
            answer: "Die optimale Größe hängt vom Scan-Abstand ab:<br><br>• <strong>Minimal</strong>: 2 × 2 cm für Nahaufnahmen<br>• <strong>Standard</strong>: 3 × 3 cm für typische Nutzung<br>• <strong>1-2 Meter Abstand</strong>: 10 × 10 cm oder größer<br>• <strong>Werbeflächen/Fernscan</strong>: Mindestens 30 × 30 cm<br><br>Als Faustregel gilt: Der <strong>gedruckte QR-Code</strong> sollte mindestens 1/10 der Scan-Distanz groß sein. Unser Generator erstellt hochauflösende SVG-Dateien für verlustfreie Skalierung."
          },
          {
            question: "Wie kann ich QR-Code-Scans tracken?",
            answer: "So verfolgen Sie <strong>QR-Code</strong>-Scans:<br><br>1. <strong>URL-Kürzer</strong> mit Tracking (Bit.ly, TinyURL)<br>2. Spezielle Landingpages mit Google Analytics<br>3. Professionelle <strong>dynamische QR-Code</strong>-Dienste mit Analytics<br>4. Einzigartige UTM-Parameter für Traffic-Quellen<br><br>Unser Generator erstellt statische Codes, aber Sie können Tracking-URLs kodieren. Für Enterprise-Lösungen mit detaillierten Scan-Daten nutzen Sie spezielle QR-Marketing-Plattformen."
          }
        ]
      },
      guide: {
        title: "QR-Code-Erstellung: Schritt-für-Schritt-Anleitung",
        step1: "<strong>Inhaltstyp wählen</strong>: Entscheiden Sie, welche Information kodiert werden soll - URL, Text, Kontaktdaten oder WiFi-Zugang. Nutzen Sie unsere <strong>QR-Code-Vorlagen</strong> für korrekte Datenformatierung.",
        step2: "<strong>Informationen eingeben</strong>: Füllen Sie die erforderlichen Felder aus. Für URLs immer 'http://' oder 'https://' angeben. Unser <strong>QR-Code-Generator</strong> validiert Ihre Eingaben für korrekte Kodierung.",
        step3: "<strong>Design anpassen</strong>: Personalisieren Sie Größe, Farben, Fehlerkorrektur und Eckenradius. Fügen Sie Logos hinzu - unser Tool passt automatisch die Fehlerkorrektur an, um die Scanbarkeit zu erhalten.",
        step4: "<strong>Generieren und testen</strong>: Klicken Sie auf \"QR-Code generieren\" und testen Sie den Code mit verschiedenen Smartphones und Scan-Apps, besonders bei Design-Anpassungen.",
        step5: "<strong>Herunterladen und nutzen</strong>: Laden Sie den Code als PNG (digital) oder SVG (Druck) herunter und integrieren Sie ihn in Marketingmaterialien, Websites oder Produktverpackungen. SVG ist für Druckmaterialien ideal, da es verlustfrei skalierbar ist."
      },
      conclusion: "QR-Codes haben die Art revolutioniert, wie wir physische und digitale Welten verbinden. Mit zunehmender Verbreitung in allen Branchen ist die Erstellung effektiver QR-Codes eine essentielle Fähigkeit geworden. Unser Generator vereinfacht diesen Prozess und ermöglicht die Erstellung individueller Codes, die Ihre Markenidentität widerspiegeln. Egal ob für Webinhalte, Zahlungen oder Bildungsmaterialien - QR-Codes bieten vielseitige Lösungen, die Bequemlichkeit mit technischer Effizienz verbinden. Mit der Weiterentwicklung mobiler Technologien wird die Bedeutung dieser Codes weiter wachsen, was sie zu wertvollen Assets in unserer vernetzten Welt macht."
    }
  }