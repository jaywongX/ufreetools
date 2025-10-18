export default {
  title: 'PDF-Verschlüsselungstool: Browserbasierte Lösung zum Festlegen von Öffnungskennwörtern und Berechtigungen',
  functionTitle: 'Was ist ein Online-PDF-Verschlüsselungstool und wie sichert es Dokumente?',
  intro: 'Unser <strong>Online-PDF-Verschlüsselungstool</strong> verwendet einen rein frontend-basierten Open-Source-Technologie-Stack und unterstützt <strong>AES-128/AES-256- und RC4-40</strong>-Verschlüsselung. Es kann <strong>Öffnungskennwörter (Benutzerkennwörter)</strong> und <strong>Berechtigungskennwörter (Eigentümerkennwörter)</strong> festlegen und gleichzeitig Berechtigungskontrolloptionen für Drucken, Bearbeiten, Kopieren und Formularausfüllen bieten. Es unterstützt Drag-and-Drop-Upload, traditionelle Mehrfachauswahl, URL-Batch-Import und stapelweises Hinzufügen sowie einen <strong>Echtzeit-Vorschauvergleich</strong> und grundlegende Analyse, um Ihnen zu helfen, Verschlüsselungseffekte und Berechtigungskonfigurationen schnell zu überprüfen. Nach der Verschlüsselung können Sie <span style="font-weight:bold">einzeln herunterladen</span> oder als <span style="font-weight:bold">ZIP-Batch-Download</span> erhalten. Alle Operationen erfolgen lokal im Browser ohne Server-Upload und gewährleisten so Privatsphäre und Effizienz.',

  useCasesTitle: 'Häufige Anwendungsszenarien der PDF-Verschlüsselung',
  useCases: [
    'Festlegen von Öffnungskennwörtern und Berechtigungskontrollen für Unternehmensfreigabedokumente',
    'Hinzufügen von AES-256-Hochsicherheitsverschlüsselung für sensible PDFs wie Verträge und Rechnungen',
    'Einschränkung von Drucken und Kopieren zur Verhinderung unautorisierte Verbreitung',
    'Festlegen von Drucken mit niedriger Auflösung und eingeschränkter Bearbeitung für Online-Schulungsmaterialien',
    'Stapelverschlüsselung von PDFs und einheitliche Berechtigungsfestlegung',
    'Schnelle Verschlüsselung und Vorschau von Verschlüsselungseffekten auf Mobilgeräten',
    'Lokale Browser-Verschlüsselung ohne Upload zum Schutz der Privatsphäre'
  ],

  tipTitle: 'Professionelle Tipps:',
  tipContent: 'Es wird empfohlen, <strong>starke Kennwörter</strong> mit <strong>AES-256</strong>-Verschlüsselungsstufe für höhere Sicherheit zu verwenden; für bessere Suchleistung können Sie Titel und Schlüsselwörter in den Metadaten ausfüllen und eine konsistente Benennungsstrategie beibehalten (das aktuelle Tool ändert keine PDF-Metadaten).',

  conclusion: 'Das <strong>Online-PDF-Verschlüsselungstool</strong> kann im Browser schnell Verschlüsselung und Berechtigungskonfiguration abschließen und eignet sich für verschiedene Szenarien wie Unternehmen, Bildungseinrichtungen und Einzelbenutzer. Durch das Festlegen von Benutzerkennwörtern und Eigentümerkennwörtern sowie die Auswahl geeigneter Verschlüsselungsalgorithmen können Sie Sicherheit gewährleisten und gleichzeitig gute Benutzerfreundlichkeit beibehalten.',

  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  faqs: [
    {
      question: 'Welche Verschlüsselungsalgorithmen unterstützt das Online-PDF-Verschlüsselungstool?',
      answer: 'Dieses Tool unterstützt <strong>AES-128</strong>-, <strong>AES-256</strong>- und legacy-kompatible <strong>RC4-40</strong>-Verschlüsselung. Die spezifische Algorithmusauswahl für 128-Bit-Verschlüsselung (AES oder RC4) hängt von der QPDF-Konfiguration und -Version ab.'
    },
    {
      question: 'Wie legt man Öffnungskennwörter (Benutzerkennwörter) und Berechtigungskennwörter (Eigentümerkennwörter) fest?',
      answer: 'Geben Sie jeweils das <strong>Benutzerkennwort</strong> und das <strong>Eigentümerkennwort</strong> im Bereich "Passwortschutz" ein; das aktuelle Tool erfordert beide zur Durchführung der Verschlüsselung (dies kann in zukünftigen Versionen auf nur Benutzerkennwort beschränkt werden).'
    },
    {
      question: 'Unterstützt es Stapelverschlüsselung und Echtzeit-Vorschauvergleich?',
      answer: 'Unterstützt Batch-Import und stapelweises Hinzufügen; nach Durchführung der Verschlüsselung kann ein <strong>Echtzeit-Vorschauvergleich</strong> (Erste Seiten von Original und verschlüsseltem Dokument) durchgeführt werden, und es werden individuelle Download-Schaltflächen (nur angezeigt, nachdem die Verschlüsselung dieses Elements abgeschlossen ist) sowie <strong>ZIP-Batch-Download</strong> bereitgestellt.'
    }
  ],

  tutorialTitle: 'Wie verwendet man das Online-PDF-Verschlüsselungstool',
  steps: [
    {
      title: 'PDF-Dateien hinzufügen',
      description: 'Hochladen per <strong>Drag-and-Drop</strong> oder Klicken zur Dateiauswahl (unterstützt <strong>Mehrfachauswahl</strong> und <strong>stapelweises Hinzufügen</strong>); Sie können auch mehrere URLs gleichzeitig im Bereich "Batch-Import von Online-PDF-URLs" einfügen.',
      note: 'Es wird empfohlen, sich zuerst mit dem Ablauf anhand von Beispiel-PDFs vertraut zu machen.'
    },
    {
      title: 'Vorschau und Analyse',
      description: 'Das Tool rendert automatisch die erste Seite des Original-PDF und die erste Seite des verschlüsselten PDF zur Vergleich nach Abschluss der Verschlüsselung; um Berechtigungseffekte anzuzeigen, passen Sie im linken Bereich "Berechtigungskontrolle" an und verschlüsseln Sie erneut.',
      note: 'Bei fehlgeschlagener Vorschau ist die Datei möglicherweise beschädigt oder inkompatibel.'
    },
    {
      title: 'Kennwörter und Berechtigungen festlegen',
      description: 'Legen Sie das <strong>Benutzerkennwort</strong> und das <strong>Eigentümerkennwort</strong> im "Passwortschutz" fest und sehen Sie gleichzeitig die <strong>Passwortstärke</strong>-Hinweise; konfigurieren Sie Druck-, Bearbeitungs-, Kopier- und Formularausfüllberechtigungen in der "Berechtigungskontrolle".',
      note: 'Es wird empfohlen, AES-256 auszuwählen und starke Kennwörter zu verwenden.'
    }
  ],

  successTitle: 'Abgeschlossen!',
  successContent: 'Sie haben gelernt, wie man das Online-PDF-Verschlüsselungstool verwendet, um Kennwörter und Dokumentberechtigungen festzulegen, und den Verschlüsselungseffekt durch Vorschauvergleich überprüft.',

  relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
  relatedTools: [
        {
            name: 'PDF-Zusammenführung',
            description: 'Kombiniert mehrere PDF-Dateien zu einem vollständigen PDF-Dokument mit Unterstützung für seitenübergreifende Neuanordnung.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF-Aufteilung',
            description: 'Teilt große PDF-Dokumente in mehrere kleinere PDF-Dateien mit Unterstützung für benutzerdefinierte Aufteilungsseiten auf.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF-zu-Word-Konverter',
            description: 'Konvertiert PDF-Dokumente in editierbares Word-Format und bewahrt das ursprüngliche Layout und Formatierung.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'PDF-zu-Bild-Konverter',
            description: 'Konvertiert jede Seite eines PDF-Dokuments in hochwertige Bilddateien mit Unterstützung für mehrere Ausgabeformate.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: 'Referenzressourcen',
  references: [
    { title: 'QPDF Offiziell', description: 'QPDF ist ein leistungsstarkes PDF-Strukturverarbeitungs- und Verschlüsselungstool mit umfangreichen Berechtigungskontrollfunktionen.' },
    { title: 'PDF.js Dokumentation', description: 'PDF.js ist eine Open-Source-Bibliothek zum Rendern von PDFs in Browsern, geeignet für Vorschau und grundlegende Informationserfassung.' },
    { title: 'Adobe PDF-Referenzspezifikation', description: 'Adobe PDF-Referenzdokumente bieten PDF-Spezifikationsdetails und sicherheitsrelevante Definitionen.' }
  ],

  coverAlt: 'Produktseitenbild des Online-PDF-Verschlüsselungstools'
}