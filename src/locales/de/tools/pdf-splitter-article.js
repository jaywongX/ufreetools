export default {
    title: 'PDF-Teilungstool: Vollständiger Leitfaden zum Online-PDF-Teiler',
    functionTitle: 'Was ist ein PDF-Teilungstool und welche Kernfunktionen hat es?',
    intro: 'Unser <strong>PDF-Teilungstool</strong> ist eine leistungsstarke Online-Anwendung, die speziell für die Aufteilung großer PDF-Dokumente in mehrere kleinere Dateien entwickelt wurde. Dieser <strong>Online-PDF-Teiler</strong> unterstützt mehrere Teilungsmodi, darunter intelligente Teilung nach Seitenbereich, Lesezeichenstruktur, Seitengröße und automatische Erkennung leerer Seiten. Benutzer können den Inhalt jedes geteilten Segments präzise steuern und so eine effiziente Dokumentenverwaltung und -verteilung erreichen. Unser Tool läuft vollständig im Browser, ohne Installation von Software, und gewährleistet so die Sicherheit und den Datenschutz Ihrer Dokumente.',
    
    useCasesTitle: 'Praktische Anwendungsszenarien des PDF-Teilungstools',
    useCases: [
        'Große Berichte nach Kapiteln aufteilen für Teamzusammenarbeit und Verteilung',
        'Bestimmte Seiten aus Vertragsdokumenten extrahieren, wie Unterschriftenseiten oder Klauselseiten',
        'E-Books nach Kapiteln aufteilen für einfaches Lesen und Verwalten',
        'Verschiedene Formulare oder Dokumente aus gescannten Dokumenten trennen',
        'Präsentationsdokumente nach Themen aufteilen für verschiedene Präsentationsanlässe',
        'Diagramm- und Referenzabschnitte aus wissenschaftlichen Arbeiten extrahieren',
        'Rechnungssatzdokumente in einzelne Rechnungsdateien aufteilen',
        'Produktanweisungsseiten aus Handbüchern extrahieren'
    ],
    
    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Bei der Verwendung der Seitenumfangsteilung wird empfohlen, das PDF-Dokument zunächst in der Vorschau anzusehen, um die genauen Seitenzahlen zu bestimmen. Bei PDFs mit Lesezeichen kann die Auswahl der Teilung nach Lesezeichen die Kapitelstruktur automatisch erkennen und die Teilungseffizienz erheblich verbessern.',
    
    conclusion: 'Die <strong>PDF-Dokumententeilung</strong> ist eine wichtige Anforderung in der modernen Büro- und Akademikerarbeit. Unser Online-PDF-Teilungstool hilft Benutzern, große Dokumente effizient zu verwalten, indem es mehrere intelligente Teilungsmodi bietet. Ob präzise Teilung nach Seitenbereich oder automatische Teilung nach Lesezeichenstruktur - es kann den Anforderungen verschiedener Szenarien gerecht werden. Das Tool unterstützt die Stapelverarbeitung und hochwertige Ausgabe, wodurch sichergestellt wird, dass die geteilten Dokumente ihr ursprüngliches Format und ihre Klarheit beibehalten.',
    
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Wie verwendet man die Seitenbereichsfunktion, um PDFs präzise zu teilen?',
            answer: 'Unser <strong>PDF-Seitenteilungstool</strong> unterstützt eine flexible Seitenbereichssyntax. Sie können eine einzelne Seite (z. B. "5"), einen kontinuierlichen Bereich (z. B. "1-10") oder mehrere nicht kontinuierliche Bereiche (z. B. "1-5,8,10-15") eingeben. Das System analysiert Ihre Eingabe automatisch und erstellt die entsprechenden geteilten Dateien. Es wird empfohlen, die Gesamtseitenzahl im PDF vor der Teilung zu überprüfen, um sicherzustellen, dass die eingegebenen Seitenzahlen innerhalb des gültigen Bereichs liegen.'
        },
        {
            question: 'Wie funktioniert die Teilung nach Lesezeichen?',
            answer: 'Die Funktion "Nach Lesezeichen teilen" erkennt automatisch die Lesezeichenstruktur in PDF-Dokumenten und erstellt Teilungspunkte basierend auf der Lesezeichen-Hierarchie. Diese Methode eignet sich besonders für die Verarbeitung von Dokumenten mit klaren Kapitelstrukturen, wie technischen Handbüchern, wissenschaftlichen Arbeiten oder E-Books. Wenn das PDF keine Lesezeichen enthält, fordert das System Sie auf, einen anderen Teilungsmodus zu wählen.'
        },
        {
            question: 'Was ist die Teilung nach Seitengröße und für welche Szenarien ist sie geeignet?',
            answer: 'Die Teilung nach Seitengröße erkennt Seiten unterschiedlicher Größen in PDFs und gruppiert Seiten gleicher Größe zusammen. Diese Methode eignet sich für die Verarbeitung von Dokumenten mit gemischten Formaten, wie Berichte, die A4-Textseiten und A3-Diagrammseiten enthalten. Der <strong>intelligente PDF-Teiler</strong> erkennt automatisch Größenunterschiede der Seiten und erstellt entsprechende Gruppen.'
        },
        {
            question: 'Wie verbessert die Teilung durch Erkennung leerer Seiten die Effizienz der Dokumentenverarbeitung?',
            answer: 'Die Funktion zur Erkennung leerer Seiten identifiziert automatisch leere oder nahezu leere Seiten in PDFs und verwendet diese Seiten als natürliche Teilungspunkte. Dies ist besonders nützlich für die Verarbeitung gescannter Dokumente, da während des Scanvorgangs häufig leere Seiten entstehen. Das System überspringt diese leeren Seiten intelligent und stellt so sicher, dass jede geteilte Datei aussagekräftigen Inhalt enthält.'
        },
        {
            question: 'Wird die Qualität der geteilten PDF-Dateien beeinträchtigt?',
            answer: 'Unser Tool verwendet verlustfreie Teilungstechnologie und kopiert die Original-PDF-Seiten direkt ohne erneutes Rendern, daher ist die Qualität der geteilten Dateien genau dieselbe wie das Originaldokument. Sie können die Auflösungs- und Bildqualitätsparameter in den Ausgabeeinstellungen anpassen, aber diese Einstellungen beeinflussen nur die Vorschauanzeige und ändern nicht die Qualität der endgültigen Ausgabedateien. Der gesamte Text, alle Bilder und Vektorgrafiken werden vollständig erhalten.'
        }
    ],
    
    tutorialTitle: 'Wie verwendet man das PDF-Teilungstool',
    steps: [
        {
            title: 'PDF-Dateien hochladen',
            description: 'Laden Sie zunächst die PDF-Dateien hoch, die Sie teilen möchten. Sie können Dateien direkt per <strong>Drag & Drop</strong> in den Upload-Bereich ziehen oder auf die Upload-Schaltfläche klicken, um Dateien auszuwählen. Das Tool unterstützt auch den direkten Import von PDF-Dateien aus URLs, was die Verarbeitung von Web-Dokumenten erleichtert.',
            note: 'Unterstützt das gleichzeitige Hochladen mehrerer PDF-Dateien für die Stapelverarbeitung. Jede Datei zeigt detaillierte Informationen einschließlich Dateigröße und Seitenzahl an.'
        },
        {
            title: 'Teilungsmodus auswählen',
            description: 'Wählen Sie den geeigneten Teilungsmodus entsprechend Ihren Anforderungen. <strong>Nach Seitenbereich teilen</strong> eignet sich für präzise Steuerung; nach Lesezeichen teilen eignet sich für strukturierte Dokumente; nach Seitengröße teilen eignet sich für Dokumente mit gemischten Formaten; nach leeren Seiten teilen eignet sich für gescannte Dokumente.',
            note: 'Verschiedene Teilungsmodi eignen sich für verschiedene Dokumenttypen. Die richtige Auswahl des Modus kann die Teilungseffizienz erheblich verbessern.'
        },
        {
            title: 'Teilungsparameter festlegen',
            description: 'Wenn Sie die Teilung nach Seitenbereich wählen, geben Sie die zu extrahierenden Seiten im Seitenbereich-Eingabefeld an. Unterstützt mehrere Formate: einzelne Seite (5), Bereich (1-10), mehrere Bereiche (1-5,8,10-15). Das System validiert die Eingabe in Echtzeit.',
            note: 'Die Seitennummerierung beginnt bei 1. Sie können sich auf die Gesamtseitenzahl in den Dateiinformationen beziehen, um den Bereich festzulegen.'
        },
        {
            title: 'Dokumenteninhalt in der Vorschau anzeigen',
            description: 'Nach dem Hochladen generiert das System automatisch Miniaturvorschauen des PDF, die Ihnen helfen, den Dokumenteninhalt und die Seitenreihenfolge zu bestätigen. Die Vorschaufunktion ermöglicht es Ihnen, den Inhalt jeder Seite visuell zu sehen und so die Genauigkeit der Teilungseinstellungen zu gewährleisten.',
            note: 'Die Miniaturvorschau hilft Ihnen, die Dokumentenstruktur besser zu verstehen und ist besonders nützlich beim Festlegen von Seitenbereichen.'
        },
        {
            title: 'Ausgabeeinstellungen anpassen',
            description: 'Im Bereich der Ausgabeeinstellungen können Sie die Auflösung (72-300 DPI) und die Bildqualitätsparameter anpassen. Diese Einstellungen beeinflussen hauptsächlich die Vorschauanzeigeeffekte, während die tatsächlichen geteilten PDF-Dateien die ursprüngliche Qualität beibehalten.',
            note: 'Höhere Auflösungseinstellungen bieten klarere Vorschaueffekte, können aber die Verarbeitungszeit erhöhen.'
        },
        {
            title: 'Teilung ausführen und herunterladen',
            description: 'Klicken Sie auf die Schaltfläche <strong>"Teilung starten"</strong>, um den Teilungsvorgang auszuführen. Nach Abschluss der Verarbeitung werden die Teilungsergebnisse im rechten Ausgabebereich angezeigt, wobei jede geteilte Datei Vorschau- und Download-Optionen enthält. Sie können jede Datei einzeln herunterladen oder die Stapel-Download-Funktion verwenden, um alle Dateien in einer ZIP-Datei zu bündeln.',
            note: 'Die gesamte Verarbeitung erfolgt in Ihrem Browser und gewährleistet so die Dokumentensicherheit. Die geteilten Dateien behalten alle Formate und Eigenschaften des Original-PDF bei.'
        }
    ],
    
    successTitle: 'Glückwunsch!',
    successContent: 'Sie haben die Verwendung des PDF-Teilungstools erfolgreich gemeistert. Sie können jetzt große PDF-Dokumente effizient in die benötigten Segmente aufteilen und so die Effizienz der Dokumentenverwaltung und -verteilung verbessern.',
    
    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'PDF-Zusammenführungstool',
            description: 'Mehrere PDF-Dateien zu einem Dokument zusammenführen, mit Unterstützung für Seitensortierung und Qualitätskontrolle.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF-zu-Excel-Konverter',
            description: 'Kostenloser Online-PDF-zu-Excel-Konverter, extrahiert Tabellendaten aus PDF-Dateien und wandelt sie in editierbare Excel-Tabellen um.',
            url: 'https://www.ufreetools.com/tool/pdf-to-excel-converter'
        },
        {
            name: 'PDF-zu-Bild-Konverter',
            description: 'Jede Seite von PDF-Dokumenten in hochwertige Bilddateien konvertieren, mit Unterstützung für mehrere Ausgabeformate.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        },
        {
            name: 'PDF-zu-Word-Konverter',
            description: 'PDF-Dokumente in editierbares Word-Format konvertieren und ursprüngliches Layout und Formatierung beibehalten.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
    ],
    
    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'PDF-Technologie-Überblick',
            description: 'Verstehen der technischen Details des PDF-Dateiformats',
            url: 'https://opensource.adobe.com/dc-acrobat-sdk-docs/standards/pdfstandards/pdf/PDF32000_2008.pdf'
        },
        {
            name: 'Office Open XML-Standard',
            description: 'Technische Spezifikationen zum Excel-Tabellenformat',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Web Content Accessibility Guidelines (WCAG)',
            description: 'Richtlinien zur Barrierefreiheit von Dokumenten',
            url: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
        }
    ]
}