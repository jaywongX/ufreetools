export default {
    title: 'Excel-Duplikatentfernungstool: Benutzerhandbuch für den Online-Tabellendaten-Duplikatentferner',
    functionTitle: 'Was ist das Excel-Duplikatentfernungstool und wofür wird es verwendet?',
    intro: 'Unser <strong>Excel-Duplikatentfernungstool</strong> ist eine professionelle Online-Datenverarbeitungsanwendung, die doppelte Daten in Excel-Tabellen intelligent erkennen und entfernen kann. Das Tool unterstützt mehrere Dateiformate (XLSX, XLS, CSV) und bietet flexible Konfiguration von Duplikatentfernungsregeln, einschließlich vollständiger Zeilenduplikatentfernung, Einzelspalten-Duplikatentfernung und Mehrspalten-Kombinations-Duplikatentfernung. Mit unserem <strong>Online-Excel-Duplikatentferner</strong> können Sie Daten schnell bereinigen, die Datenqualität verbessern, die Batch-Verarbeitung mehrerer Dateien unterstützen und Ergebnisse in mehreren Formaten exportieren.',
    
    useCasesTitle: 'Häufige Anwendungsszenarien des Excel-Duplikatentfernungstools',
    useCases: [
        'Bereinigung doppelter Kontaktinformationen in Kundendatenbanken',
        'Entfernung doppelter Datensätze beim Zusammenführen mehrerer Excel-Dateien',
        'Verarbeitung von Umfragedaten, Löschen doppelter Einreichungen',
        'Organisation von Produktkatalogen, Entfernung doppelter Produktinformationen',
        'Bereinigung von Finanzdaten, Gewährleistung der Einzigartigkeit von Transaktionsdatensätzen',
        'Verarbeitung von Mitarbeiterinformationstabellen, Löschen doppelter Mitarbeiterdatensätze',
        'Organisation von Verkaufsdaten, Entfernung doppelter Bestellungen',
        'Bereinigung von E-Mail-Listen, Löschen doppelter E-Mail-Adressen'
    ],
    
    tipTitle: 'Professionelle Tipps:',
    tipContent: 'Bei der Verwendung des Excel-Duplikatentfernungstools wird empfohlen, zuerst ein Backup der Originaldaten zu erstellen. Für wichtige Daten können Sie die "Vorschau"-Funktion verwenden, um den Effekt der Duplikatentfernung zu sehen und zu bestätigen, bevor Sie die tatsächliche Duplikatentfernungsoperation durchführen.',
    
    conclusion: 'Das <strong>Excel-Datenduplikat-Entfernungstool</strong> ist besonders nützlich für Datenanalysten, Geschäftsleute, Forscher und jeden, der große Mengen an Tabellendaten verarbeiten muss. Durch die Verwendung unseres intelligenten Duplikatentferners zur Verarbeitung von Excel-Daten können Sie schnell doppelte Datensätze identifizieren und entfernen, die Datenqualität verbessern und eine solide Grundlage für nachfolgende Datenanalysen schaffen. Unser Tool macht diesen Prozess einfach und effizient, ohne dass Software installiert werden muss.',
    
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Welche Dateiformate unterstützt das Excel-Duplikatentfernungstool?',
            answer: 'Unser <strong>Online-Excel-Duplikatentferner</strong> unterstützt mehrere gängige Tabellenformate, darunter XLSX (Excel 2007 und höher), XLS (Excel 97-2003) und CSV-Dateien (durch Kommas getrennte Werte). Das Tool erkennt das Dateiformat automatisch und führt die entsprechende Analyseverarbeitung durch.'
        },
        {
            question: 'Beeinflusst die Duplikatentfernungsoperation die Originaldaten?',
            answer: 'Nein, unser Tool verwendet clientseitige Verarbeitung, alle Daten werden in Ihrem Browser verarbeitet und nicht auf den Server hochgeladen. Die Originaldatei bleibt unverändert, und die Duplikatentfernungsergebnisse erzeugen neue Dateien zum Herunterladen.'
        },
        {
            question: 'Wie werden benutzerdefinierte Duplikatentfernungsregeln festgelegt?',
            answer: 'Unser <strong>Excel-Datenduplikat-Entfernungstool</strong> bietet drei Duplikatentfernungsmodi: vollständige Zeilenduplikatentfernung (exakte Übereinstimmung aller Spalten), Einzelspalten-Duplikatentfernung (Angabe der Schlüsselspalte) und Mehrspalten-Kombinations-Duplikatentfernung (benutzerdefinierte Spaltenkombination). Sie können auch erweiterte Optionen wie Groß-/Kleinschreibung, Leerzeichenbehandlung und unscharfe Übereinstimmung festlegen.'
        },
        {
            question: 'Können mehrere Excel-Dateien gleichzeitig verarbeitet werden?',
            answer: 'Ja, unser Tool unterstützt die Batch-Verarbeitung. Sie können mehrere Excel-Dateien gleichzeitig hochladen, das Tool führt die Duplikatentfernung für jede Datei separat durch und bietet eine Batch-Download-Funktion, um alle Duplikatentfernungsergebnisse in einer ZIP-Datei zu bündeln.'
        },
        {
            question: 'In welche Formate können die Daten nach der Duplikatentfernung exportiert werden?',
            answer: 'Daten nach der Duplikatentfernung können in Excel-Format (XLSX), CSV-Format und JSON-Format exportiert werden. Das Excel-Format bewahrt das ursprüngliche Format und den Stil, das CSV-Format eignet sich für den Datenaustausch und das JSON-Format ist praktisch für die Programmverarbeitung.'
        },
        {
            question: 'Wie geht das Tool mit Excel-Dateien um, die Formeln enthalten?',
            answer: 'Unser Tool liest die tatsächlichen Werte in Excel-Dateien, einschließlich der Formelberechnungsergebnisse. Wenn eine Formel auf andere Zellen verweist, zeigt das Tool das endgültige Berechnungsergebnis der Formel an, nicht die Formel selbst.'
        }
    ],
    
    tutorialTitle: 'Wie verwendet man das Excel-Duplikatentfernungstool',
    steps: [
        {
            title: 'Excel-Datei hochladen',
            description: 'Laden Sie zunächst die Excel-Datei hoch, aus der Sie Duplikate entfernen möchten. Sie können die Datei einfach per <strong>Drag & Drop</strong> in den Upload-Bereich ziehen oder auf Durchsuchen klicken und die Datei von Ihrem Gerät auswählen. Unser Tool unterstützt die Formate XLSX, XLS und CSV.',
            note: 'Sie können mehrere Dateien auf einmal für die Batch-Verarbeitung hochladen.'
        },
        {
            title: 'Daten voranzeigen und prüfen',
            description: 'Nach dem Hochladen sehen Sie eine tabellarische Ansicht der Originaldaten im Vorschaubereich. Prüfen Sie die Datenstruktur und den Inhalt, um zu bestätigen, dass es sich um die Daten handelt, die Sie verarbeiten möchten. Das Tool erkennt automatisch Kopfzeilen und Datentypen.',
            note: 'Wenn die Daten Sonderzeichen oder Kodierungsprobleme enthalten, behandelt das Tool diese automatisch.'
        },
        {
            title: 'Duplikatentfernungsregeln konfigurieren',
            description: 'Wählen Sie im Bereich zur Konfiguration der Duplikatentfernungsregeln die geeignete Entfernungsmethode aus: <strong>vollständige Zeilenduplikatentfernung</strong> (exakte Übereinstimmung aller Spalten), <strong>Einzelspalten-Duplikatentfernung</strong> (Angabe der Schlüsselspalte) oder <strong>Mehrspalten-Kombinations-Duplikatentfernung</strong> (benutzerdefinierte Spaltenkombination). Legen Sie Optionen wie Groß-/Kleinschreibung und Leerzeichenbehandlung fest.',
            note: 'Es wird empfohlen, die Vorschaufunktion zu verwenden, um den Effekt der Duplikatentfernung zu sehen und zu bestätigen, dass die Regel-Einstellungen korrekt sind.'
        },
        {
            title: 'Duplikatentfernungsoperation durchführen',
            description: 'Klicken Sie auf die Schaltfläche <strong>"Duplikatentfernung starten"</strong>, um Ihre Daten zu verarbeiten. Das Tool zeigt den Bearbeitungsfortschritt an und zeigt nach Abschluss die Duplikatentfernungsstatistiken, einschließlich Originalzeilen, doppelter Zeilen und Zeilen nach der Duplikatentfernung.',
            note: 'Bei großen Dateien kann die Verarbeitung einige Sekunden dauern, bitte haben Sie Geduld.'
        },
        {
            title: 'Ergebnisse anzeigen und überprüfen',
            description: 'Nach Abschluss der Duplikatentfernung können Sie eine Vorschau der Ergebnisse anzeigen. Das Tool hebt doppelte und behaltene Elemente hervor, um Ihnen bei der Überprüfung des Duplikatentfernungseffekts zu helfen. Sie können zwischen den Anzeigemodi wechseln, um doppelte oder einzigartige Elemente anzuzeigen.',
            note: 'Verwenden Sie die Zoom- und Scroll-Funktionen, um die Datendetails besser zu sehen.'
        },
        {
            title: 'Duplikatentfernungsergebnisse exportieren',
            description: 'Wählen Sie das Exportformat (Excel, CSV oder JSON), legen Sie die Exportoptionen fest (z. B. ob Kopfzeilen einbezogen werden, Dateikodierung usw.) und klicken Sie dann auf die Schaltfläche <strong>"Ergebnisse herunterladen"</strong>, um die Daten nach der Duplikatentfernung zu speichern.',
            note: 'Das Excel-Format bewahrt das ursprüngliche Format, das CSV-Format eignet sich für den Datenaustausch und das JSON-Format ist praktisch für die Programmverarbeitung.'
        }
    ],
    
    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unser Excel-Duplikatentfernungstool verwendet. Jetzt können Sie verschiedene Tabellendaten einfach verarbeiten, schnell doppelte Datensätze identifizieren und entfernen und die Datenqualität verbessern.',
    
    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'PDF-Zusammenführung',
            description: 'Zusammenführung mehrerer PDF-Dateien zu einem vollständigen PDF-Dokument mit Unterstützung für die Neuanordnung von Seiten zwischen Dateien.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF-Aufteilung',
            description: 'Aufteilung großer PDF-Dokumente in mehrere kleinere PDF-Dateien mit Unterstützung für benutzerdefinierte Seitenaufteilung.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF-zu-Word-Konverter',
            description: 'Umwandlung von PDF-Dokumenten in ein editierbares Word-Format unter Beibehaltung des ursprünglichen Layouts und Formats.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'PDF-zu-Bild-Konverter',
            description: 'Umwandlung jeder Seite eines PDF-Dokuments in hochwertige Bilddateien mit Unterstützung für mehrere Ausgabeformate.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
    ],
    
    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Best Practices für Excel-Datenverarbeitung',
            description: 'Lernen Sie professionelle Techniken und Methoden zur Excel-Datenverarbeitung kennen',
            url: 'https://support.microsoft.com/de-de/excel'
        },
        {
            name: 'Leitfaden zur Datenqualitätsverwaltung',
            description: 'Professionelle Ressourcen zur Datenqualitätsverwaltung und Verarbeitung doppelter Daten',
            url: 'https://www.ibm.com/topics/data-quality'
        },
        {
            name: 'Excel-Funktionsreferenz',
            description: 'Offizielle Referenzdokumentation der Microsoft Excel-Funktionen',
            url: 'https://support.microsoft.com/en-us/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb'
        }
    ]
}