export default {
  title: 'PDF-Entschlüsselungstool: Browserbasierte Lösung zum Entfernen von Öffnungskennwörtern und Berechtigungsbeschränkungen',
  functionTitle: 'Was ist ein Online-PDF-Entschlüsselungstool und wann wird eine Entschlüsselung benötigt?',
  intro: 'Unser <strong>Online-PDF-Entschlüsselungstool</strong> basiert auf einem rein frontend-basierten Open-Source-Technologie-Stack. Es unterstützt das Bereitstellen eines <strong>Öffnungskennworts (Benutzerkennworts)</strong> für verschlüsselte PDFs, um die Entschlüsselung durchzuführen und Berechtigungsbeschränkungen wie Drucken, Bearbeiten, Kopieren und Formularausfüllen zu entfernen. Es unterstützt Drag-and-Drop-Upload, traditionelle Mehrfachauswahl, URL-Batch-Import und Batch-Hinzufügen sowie einen <strong>Echtzeit-Vorschauvergleich</strong> und grundlegende Analyse, um Ihnen zu helfen, den Entschlüsselungseffekt schnell zu überprüfen. Nach Abschluss der Entschlüsselung können Sie <span style="font-weight:bold">einzeln herunterladen</span> oder als <span style="font-weight:bold">ZIP-Batch-Download</span> erhalten. Alle Operationen erfolgen lokal im Browser ohne Server-Upload, wodurch Privatsphäre geschützt und Effizienz gewährleistet wird.',

  useCasesTitle: 'Häufige Anwendungsszenarien der PDF-Entschlüsselung',
  useCases: [
    'Entfernen von Berechtigungsbeschränkungen von Unternehmensfreigabedokumenten für die interne Bearbeitung',
    'Durchführen konformer Entschlüsselung für Dokumente mit vergessenen Eigentümerberechtigungskonfigurationen',
    'Wiederherstellen von Druck- und Kopierfunktionen für Korrekturlesen und Inhaltsweiterverwendung',
    'Entfernen von Einschränkungen mit niedriger Auflösung von Schulungsmaterialien oder Berichten zur Verbesserung der Ausgabequalität',
    'Batch-Entschlüsselung mehrerer PDFs und einheitliche Verarbeitung',
    'Schnelle Entschlüsselung und Vorschau von Entschlüsselungseffekten auf Mobilgeräten',
    'Lokale Browser-Entschlüsselung ohne Upload zum Schutz der Privatsphäre'
  ],

  tipTitle: 'Professionelle Tipps:',
  tipContent: 'Es wird empfohlen, nur PDFs zu entschlüsseln, für die Sie eine legitime Nutzungsberechtigung besitzen; für bessere Suchleistung können Sie Titel und Schlüsselwörter in den Metadaten ausfüllen und eine konsistente Benennungsstrategie beibehalten (das aktuelle Tool ändert keine PDF-Metadaten).',

  conclusion: 'Das <strong>Online-PDF-Entschlüsselungstool</strong> kann im Browser schnell Berechtigungsbeschränkungen entfernen und Inhalte wiederherstellen, was für verschiedene Szenarien wie Unternehmen, Bildungseinrichtungen und Einzelbenutzer geeignet ist. Durch das Bereitstellen des richtigen Öffnungskennworts und Durchführen der Entschlüsselung können Sie die Dokumentverwendbarkeit innerhalb von Compliance-Grenzen verbessern.',

  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  faqs: [
    {
      question: 'Wie funktioniert das Online-PDF-Entschlüsselungstool?',
      answer: 'Dieses Tool basiert auf den Entschlüsselungsfähigkeiten von QPDF. Nach Bereitstellung des <strong>Öffnungskennworts</strong> führt es die <strong>--decrypt</strong>-Operation durch, um die Dokumentberechtigungsbeschränkungen zu entfernen und ein neues nutzbares PDF zu erzeugen.'
    },
    {
      question: 'Unterstützt es Batch-Entschlüsselung und Echtzeit-Vorschauvergleich?',
      answer: 'Unterstützt Batch-Import und Batch-Hinzufügen; nach Durchführung der Entschlüsselung kann ein <strong>Echtzeit-Vorschauvergleich</strong> (Erste Seiten von Original und entschlüsseltem Dokument) durchgeführt werden, und es werden individuelle Download-Schaltflächen sowie <strong>ZIP-Batch-Download</strong> bereitgestellt.'
    },
    {
      question: 'Kann dieses Tool verwendet werden, wenn das PDF nicht verschlüsselt ist?',
      answer: 'Ja. Für unverschlüsselte PDFs gibt das Tool direkt eine Datei aus, die mit dem Originalinhalt übereinstimmt, für eine einheitliche Prozessbehandlung.'
    }
  ],

  tutorialTitle: 'Wie verwendet man das Online-PDF-Entschlüsselungstool',
  steps: [
    {
      title: 'PDF-Dateien hinzufügen',
      description: 'Hochladen per <strong>Drag-and-Drop</strong> oder Klicken zur Dateiauswahl (unterstützt <strong>Mehrfachauswahl</strong> und <strong>Batch-Hinzufügen</strong>); Sie können auch mehrere URLs gleichzeitig im Bereich "Batch-Import von Online-PDF-URLs" einfügen.',
      note: 'Es wird empfohlen, sich zuerst mit dem Ablauf anhand von Beispiel-PDFs vertraut zu machen.'
    },
    {
      title: 'Öffnungskennwort bereitstellen (falls erforderlich)',
      description: 'Wenn das PDF verschlüsselt ist, geben Sie bitte das <strong>Öffnungskennwort (Benutzerkennwort)</strong> in "Entschlüsselungskennwort" ein, um die Entschlüsselung durchzuführen; wenn nicht verschlüsselt, können Sie direkt ausführen.',
      note: 'Falsche Kennwörter führen zu Entschlüsselungsfehlern oder Vorschaufehlern.'
    },
    {
      title: 'Entschlüsselung durchführen und Vorschau anzeigen',
      description: 'Nach Klicken auf "Entschlüsselung durchführen" wird ein neues PDF generiert, und die ersten Seiten von Original und entschlüsseltem Dokument werden im rechten Vorschaubereich verglichen.',
      note: 'Bei fehlgeschlagener Vorschau ist die Datei möglicherweise beschädigt oder inkompatibel.'
    }
  ],

  successTitle: 'Abgeschlossen!',
  successContent: 'Sie haben gelernt, wie man das Online-PDF-Entschlüsselungstool verwendet, um Dokumentberechtigungsbeschränkungen zu entfernen und Entschlüsselungseffekte zu überprüfen.',

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
    { title: 'QPDF Offiziell', description: 'QPDF bietet leistungsstarke PDF-Strukturverarbeitungsfunktionen, einschließlich Verschlüsselung und Entschlüsselung.' },
    { title: 'PDF.js Dokumentation', description: 'PDF.js ist eine Open-Source-Bibliothek zum Rendern von PDFs in Browsern, geeignet für Vorschau und grundlegende Informationserfassung.' },
    { title: 'Adobe PDF-Referenzspezifikation', description: 'Adobe PDF-Referenzdokumente bieten PDF-Spezifikationsdetails und sicherheitsrelevante Definitionen.' }
  ],

  coverAlt: 'Produktseitenbild des Online-PDF-Entschlüsselungstools'
}