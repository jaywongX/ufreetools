export default {
    title: 'Excel zu CSV Konverter: Online Batch Excel Datei Konvertierungsanleitung',
    functionTitle: 'Was ist ein Excel zu CSV Konverter und wofür wird er verwendet?',
    intro: 'Unser <strong>Excel zu CSV Konverter</strong> ist ein leistungsstarkes Online-Tool, das Excel-Dateien (.xlsx und .xls) schnell in das CSV-Format konvertieren kann. Dieses Tool unterstützt die Stapelverarbeitung mehrerer Dateien, die Erkennung mehrerer Arbeitsblätter, benutzerdefinierte Trennzeichen und Kodierungsformate und erfüllt die Datenimportanforderungen verschiedener Systeme und Software. Mit unserem <strong>Online Excel zu CSV Tool</strong> können Sie problemlos große Datenmengen verarbeiten, ohne Software installieren zu müssen, da alle Konvertierungen lokal im Browser durchgeführt werden, was die Datensicherheit gewährleistet.',

    useCasesTitle: 'Häufige Anwendungsszenarien der Excel-zu-CSV-Konvertierung',
    useCases: [
        'Excel-Daten in Datenbanksysteme importieren (MySQL, PostgreSQL usw.)',
        'CSV-formatierte Daten für Datenanalysetools vorbereiten (Python pandas, R-Sprache)',
        'Benutzerdaten oder Produktinformationen stapelweise in Webanwendungen importieren',
        'Excel-Berichte in das CSV-Format konvertieren, damit sie von anderen Systemen verwendet werden können',
        'Excel-Dateien mit mehreren Arbeitsblättern verarbeiten und separat als CSV exportieren',
        'Historische Excel-Dateien stapelweise für Datenmigrationsprojekte konvertieren',
        'Excel-Daten in das CSV-Format konvertieren, um Versionskontrolle durchzuführen',
        'Standardisierte CSV-Datendateien für API-Schnittstellen vorbereiten'
    ],

    logoAlt: "Produktvorschau des Excel-zu-CSV-Konverters",
    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Für Daten, die Sonderzeichen oder Zeilenumbrüche enthalten, wird empfohlen, doppelte Anführungszeichen als Textqualifizierer zu verwenden, um sicherzustellen, dass beim Import von CSV-Dateien in andere Systeme keine Formatfehler auftreten. Für chinesische Daten wird die Verwendung der UTF-8-BOM-Kodierung empfohlen, um sicherzustellen, dass chinesische Zeichen bei der Öffnung in Excel korrekt angezeigt werden.',

    conclusion: 'Das <strong>Excel-zu-CSV-Konvertierungstool</strong> ist besonders nützlich für Datenanalysten, Entwickler, Datenadministratoren und Benutzer, die häufig Excel-Dateien verarbeiten müssen. Mit unserem Konverter können Sie Excel-Daten schnell in das CSV-Format konvertieren, was den Datenaustausch zwischen verschiedenen Systemen und Tools erleichtert. Unser Tool unterstützt die Stapelverarbeitung, benutzerdefinierte Formateinstellungen und Echtzeit-Vorschau, wodurch der Datenkonvertierungsprozess einfach und effizient wird, ohne Software installieren zu müssen.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Welche Excel-Formate unterstützt der Excel-zu-CSV-Konverter?',
            answer: 'Unser <strong>Online Excel zu CSV Tool</strong> unterstützt die beiden wichtigsten Excel-Formate: .xlsx (Office Open XML) und .xls (traditionelles Binärformat). Das Tool kann das Dateiformat automatisch erkennen und entsprechend verarbeiten. Es unterstützt Excel-Dateien mit mehreren Arbeitsblättern, bei denen Sie wählen können, ob alle Arbeitsblätter oder nur bestimmte Arbeitsblätter konvertiert werden sollen.'
        },
        {
            question: 'Behält die konvertierte CSV-Datei das ursprüngliche Datenformat bei?',
            answer: 'Das CSV-Format selbst enthält keine Formatierungsinformationen (wie Schriftart, Farbe, Formeln usw.), aber der gesamte Dateninhalt wird vollständig erhalten. Datumswerte, Zahlen und Textdaten werden korrekt konvertiert. Wenn eine Excel-Zelle Formeln enthält, extrahiert der Konverter den berechneten Ergebniswert der Formeln.'
        },
        {
            question: 'Wie werden Excel-Daten behandelt, die Sonderzeichen enthalten?',
            answer: 'Unser Tool unterstützt benutzerdefinierte Textqualifizierer (doppelte oder einfache Anführungszeichen), die Daten mit Kommas, Zeilenumbrüchen, Anführungszeichen und anderen Sonderzeichen korrekt verarbeiten können. Bei der Konvertierung von Daten mit Sonderzeichen wird empfohlen, doppelte Anführungszeichen als Textqualifizierer auszuwählen, um sicherzustellen, dass das CSV-Dateiformat korrekt ist.'
        },
        {
            question: 'Können mehrere Excel-Dateien stapelweise konvertiert werden?',
            answer: 'Ja, unser <strong>Excel-zu-CSV-Stapelkonvertierungstool</strong> unterstützt die Stapelverarbeitung vollständig. Sie können mehrere Excel-Dateien gleichzeitig hochladen, das Tool verarbeitet jede Datei nacheinander und bietet nach Abschluss eine Stapel-Download-Funktion, bei der alle konvertierten CSV-Dateien in einer ZIP-Datei zusammengefasst und heruntergeladen werden.'
        },
        {
            question: 'Welche Kodierungsformate werden von der konvertierten CSV-Datei unterstützt?',
            answer: 'Unser Tool unterstützt mehrere Kodierungsformate, darunter UTF-8, UTF-8 BOM, GBK und ANSI. Das UTF-8-BOM-Format eignet sich besonders gut zum Öffnen von CSV-Dateien mit chinesischen Zeichen in Excel, während das UTF-8-Format besser für die Verwendung in Programmen geeignet ist. Sie können je nach Anforderungen des Zielsystems das entsprechende Kodierungsformat auswählen.'
        },
        {
            question: 'Können verschlüsselte oder geschützte Excel-Dateien verarbeitet werden?',
            answer: 'Aufgrund der Einschränkungen der Browserumgebung kann unser Tool keine passwortgeschützten Excel-Dateien verarbeiten. Wenn Ihre Excel-Dateien verschlüsselt sind, entschlüsseln Sie diese zunächst mit der Excel-Software, bevor Sie die Konvertierung durchführen. Für nicht verschlüsselte Excel-Dateien kann unser Tool problemlos verwendet werden.'
        }
    ],

    tutorialTitle: 'So verwenden Sie den Excel-zu-CSV-Konverter',
    steps: [
        {
            title: 'Excel-Dateien hochladen',
            description: 'Laden Sie zunächst die Excel-Dateien hoch, die Sie konvertieren möchten. Sie können Dateien einfach per <strong>Drag & Drop</strong> in den Upload-Bereich ziehen oder auf Durchsuchen klicken und Dateien von Ihrem Gerät auswählen. Unser Tool unterstützt die Formate .xlsx und .xls, Sie können mehrere Dateien gleichzeitig für die Stapelkonvertierung hochladen.',
            note: 'Sie können auch die Funktion "Von URL importieren" verwenden, um direkt die Webadresse einer Excel-Datei einzugeben und die Konvertierung durchzuführen.'
        },
        {
            title: 'Arbeitsblatt auswählen (optional)',
            description: 'Wenn Ihre Excel-Dateien mehrere Arbeitsblätter enthalten, können Sie für jede Datei in der Dateiliste das zu konvertierende Arbeitsblatt auswählen. Standardmäßig konvertiert das Tool alle Arbeitsblätter, wobei jedes Arbeitsblatt eine separate CSV-Datei generiert.',
            note: 'Bei großen Excel-Dateien wird empfohlen, zunächst ein einzelnes Arbeitsblatt zum Testen auszuwählen und zu bestätigen, dass die Konvertierungsergebnisse den Erwartungen entsprechen, bevor die Stapelverarbeitung durchgeführt wird.'
        },
        {
            title: 'CSV-Formateinstellungen konfigurieren',
            description: 'Im Bereich "CSV-Formateinstellungen" können Sie das Trennzeichen (Komma, Semikolon, Tabulator usw.), den Textqualifizierer (doppelte Anführungszeichen, einfache Anführungszeichen oder keiner), das Zeilenende (Windows/Unix/Mac) und das Kodierungsformat (UTF-8, UTF-8 BOM, GBK, ANSI) anpassen. Diese Einstellungen beeinflussen das Format der konvertierten CSV-Datei.',
            note: 'Für chinesische Daten wird die Verwendung der UTF-8-BOM-Kodierung empfohlen; für Dateien, die in Excel geöffnet werden sollen, wird die Verwendung von doppelten Anführungszeichen als Textqualifizierer empfohlen.'
        },
        {
            title: 'Datenvorschau (optional)',
            description: 'Vor der Konvertierung können Sie auf "Datenvorschau" klicken, um den Inhalt der Excel-Datei anzuzeigen. Die Vorschaufunktion zeigt die ersten Zeilen der Daten an und hilft Ihnen dabei, das Dateiformat und den Inhalt zu überprüfen.',
            note: 'Die Vorschaufunktion kann Ihnen helfen, Probleme mit dem Datenformat zu erkennen und Fehler nach der Konvertierung zu vermeiden.'
        },
        {
            title: 'Konvertierung durchführen',
            description: 'Klicken Sie auf die Schaltfläche <strong>"Konvertierung starten"</strong>, um mit der Dateiverarbeitung zu beginnen. Das Tool zeigt den Konvertierungsfortschritt an, einschließlich der aktuell verarbeiteten Datei, des Arbeitsblatts und der Zeilenanzahl. Der Konvertierungsprozess erfolgt vollständig lokal im Browser, ohne dass Daten auf einen Server hochgeladen werden.',
            note: 'Bei großen Dateien kann die Konvertierung einige Zeit dauern, bitte haben Sie Geduld. Sie können den detaillierten Konvertierungsprozess im Verarbeitungsprotokoll einsehen.'
        },
        {
            title: 'Konvertierungsergebnisse herunterladen',
            description: 'Nach Abschluss der Konvertierung können Sie auf die Schaltfläche <strong>"Herunterladen"</strong> unter jeder CSV-Datei klicken, um sie einzeln zu speichern, oder die Schaltfläche <strong>"Batch-Download"</strong> oben verwenden, um alle CSV-Dateien in einer ZIP-Datei zusammenzufassen und herunterzuladen. Die Dateinamen werden entsprechend Ihren Einstellungen automatisch generiert.',
            note: 'Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Excel-Dateien niemals auf einen Server hochgeladen werden, was die Datenschutz und Sicherheit Ihrer Daten gewährleistet.'
        }
    ],

    successTitle: 'Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Excel-zu-CSV-Konverter verwendet. Jetzt können Sie Excel-Dateien einfach in das CSV-Format konvertieren, um sie für Datenanalysen, Datenbankimporte oder andere Zwecke zu verwenden.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Bionic Reading Konverter',
            description: 'Kostenloser Online Bionic Reading Konverter, konvertiert Text in Echtzeit in den Bionic Reading Stil.',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: 'Bildgrößenänderung',
            description: 'Passt Bilder an bestimmte Abmessungen an oder skaliert sie prozentual.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Stempelgenerator',
            description: 'Erstellt online verschiedene Stempelbilder und generiert Firmenstempel, Privatstempel und andere digitale Stempel.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'QR-Code Generator',
            description: 'Erstellt benutzerdefinierte QR-Codes für URLs, Texte, Kontaktinformationen usw.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'CSV-Dateiformat-Spezifikationen (RFC 4180)',
            description: 'Erfahren Sie mehr über die Standardformat-Spezifikationen und bewährte Methoden für CSV-Dateien',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Office Open XML Standard',
            description: 'Erfahren Sie mehr über die technischen Spezifikationen des Excel .xlsx-Dateiformats',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Zeichenkodierungsstandards (Unicode)',
            description: 'Erfahren Sie mehr über Zeichenkodierungsstandards wie UTF-8, GBK usw.',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}