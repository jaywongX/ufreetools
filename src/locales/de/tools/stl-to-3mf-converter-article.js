export default {
    title: 'STL-zu-3MF-Tool: Online-Leitfaden für den 3D-Druckformat-Konverter',
    functionTitle: 'Was ist das STL-zu-3MF-Tool und seine Anwendungen?',
    intro: 'Unser <strong>STL-zu-3MF-Tool</strong> ist ein professioneller Online-3D-Druckformat-Konverter, der STL-Dateien (Stereo Lithography) schnell in das 3MF-Format (3D Manufacturing Format) konvertiert. 3MF ist ein 3D-Druckdateiformat der nächsten Generation, das vom 3MF-Konsortium entwickelt wurde. Im Vergleich zum traditionellen STL-Format unterstützt es Farb-, Material- und Textureinformationen, hat kleinere Dateigrößen und eine bessere Datenintegrität. Mit unserem <strong>Online-STL-zu-3MF-Konverter</strong> können Sie mehrere STL-Dateien stapelweise verarbeiten, Modelleinheiten festlegen und sogar mehrere Modelle zu einer einzelnen 3MF-Datei zusammenführen, ohne Software zu installieren.',

    useCasesTitle: 'Häufige Anwendungsfälle für die STL-zu-3MF-Konvertierung',
    useCases: [
        '3D-Druckmodelle im STL-Format in das 3MF-Format konvertieren für bessere Druckkompatibilität',
        'Mehrere STL-Dateien stapelweise in das 3MF-Format konvertieren zur Verbesserung der 3D-Druckworkflow-Effizienz',
        'Mehrere STL-Modelle zu einer einzelnen 3MF-Datei zusammenführen für einheitliche Verwaltung und Druck',
        'Richtige Einheiten (Millimeter, Zentimeter, Zoll usw.) für 3D-Druckmodelle festlegen um Größenfehler zu vermeiden',
        'STL-Dateien in das 3MF-Format konvertieren zur Verwendung in 3MF-kompatibler Slicing-Software',
        '3D-Druckdateigröße optimieren, da das 3MF-Format typischerweise kompakter als STL ist',
        'Standardisierte 3MF-Formatdateien für 3D-Druckdienstleister vorbereiten',
        'Ältere STL-Modelle in das modernere 3MF-Format migrieren für langfristige Archivierung und Verwaltung'
    ],

    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Das 3MF-Format verwendet ZIP-Kompression mit Dateigrößen, die typischerweise 30-50% kleiner als STL sind. 3MF unterstützt mehrere Einheitensysteme - stellen Sie sicher, dass Sie die richtige Einheit während der Konvertierung auswählen, um Druckgrößenprobleme zu vermeiden. Für Modelle, die Farb- und Materialinformationen benötigen, ist 3MF die bessere Wahl.',

    conclusion: 'Das <strong>STL-zu-3MF-Formatkonvertierungs</strong>tool ist besonders nützlich für 3D-Druck-Enthusiasten, Designer, Ingenieure und Benutzer, die große Mengen an 3D-Modellen verarbeiten müssen. Mit unserem Online-STL-zu-3MF-Konverter können Sie schnell 3D-Druckdateiformate standardisieren, Dateigrößen optimieren, die Druckkompatibilität verbessern oder spezifische 3D-Druckplattformanforderungen erfüllen. Unser Tool unterstützt Stapelverarbeitung, bietet Einheiteneinstellungen und Dateizusammenführungsfunktionen, und die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, um die Privatsphäre und Sicherheit Ihrer Modelldaten zu gewährleisten.',

    faqTitle: 'Häufig Gestellte Fragen',
    faqs: [
        {
            question: 'Welche STL-Formate unterstützt das STL-zu-3MF-Tool?',
            answer: 'Unser <strong>Online-STL-zu-3MF-Konverter</strong> unterstützt zwei Haupt-STL-Dateiformate: Binäres STL und ASCII STL. Das Tool erkennt automatisch das Dateiformat und verarbeitet entsprechend. Ob STL-Dateien, die aus CAD-Software exportiert oder aus 3D-Modellbibliotheken heruntergeladen wurden, sie können problemlos in das 3MF-Format konvertiert werden.'
        },
        {
            question: 'Welche Vorteile hat das 3MF-Format gegenüber STL?',
            answer: 'Das 3MF-Format hat mehrere Vorteile gegenüber STL: (1) Unterstützt Farb-, Material- und Textureinformationen; (2) Verwendet ZIP-Kompression für kleinere Dateien; (3) Bessere Datenintegrität ohne häufige STL-Mesh-Fehler; (4) Unterstützt mehrere Einheitensysteme; (5) Kann mehrere Objekte und Druckparameter enthalten. Für moderne 3D-Druck-Workflows ist 3MF das empfohlene Format.'
        },
        {
            question: 'Wie wählt man die richtige Einheit während der Konvertierung?',
            answer: 'Unser <strong>STL-zu-3MF-Tool</strong> bietet vier häufig verwendete Einheiten: Millimeter, Zentimeter, Meter und Zoll. STL-Dateien selbst enthalten keine Einheiteninformationen, daher müssen Sie basierend auf der Konstruktionseinheit des Originalmodells auswählen. Wenn Sie unsicher sind, sind Millimeter die am häufigsten verwendete 3D-Druckeinheit. Die Auswahl der falschen Einheit kann zu Druckgrößenabweichungen führen.'
        },
        {
            question: 'Können mehrere STL-Dateien zu einer einzelnen 3MF-Datei zusammengeführt werden?',
            answer: 'Ja! Unser Tool unterstützt die Zusammenführung mehrerer STL-Dateien in eine einzelne 3MF-Datei. Aktivieren Sie die Option "Alle STL-Dateien in eine einzelne 3MF-Datei zusammenführen" und das Tool wird automatisch alle hochgeladenen STL-Modelle in einer 3MF-Datei zusammenführen. Jedes Modell wird automatisch versetzt, um Überlappungen zu vermeiden, was die einheitliche Verarbeitung in Slicing-Software erleichtert.'
        },
        {
            question: 'In welcher Software können die konvertierten 3MF-Dateien verwendet werden?',
            answer: 'Das 3MF-Format wird von主流 3D-Druck-Slicing-Software weitgehend unterstützt, einschließlich Cura, PrusaSlicer, Simplify3D, 3D Builder (Windows) und mehr. Die konvertierten 3MF-Dateien können direkt in diese Software für Slicing und Druckvorbereitung importiert werden. Immer mehr 3D-Druckdienstleister unterstützen auch das 3MF-Format.'
        },
        {
            question: 'Ist der Konvertierungsprozess sicher? Werden Dateien auf Server hochgeladen?',
            answer: 'Völlig sicher! Unser Tool verwendet reine Front-End-Technologie, und die gesamte Dateiverarbeitung erfolgt lokal in Ihrem Browser. Ihre STL-Dateien werden nicht auf einen Server hochgeladen, was Privatsphäre und Datensicherheit gewährleistet. Sie können 3D-Modelldateien mit Geschäftsgeheimnissen oder persönlichen Entwürfen sicher verarbeiten.'
        },
        {
            question: 'Wird sich die Größe der konvertierten 3MF-Datei ändern?',
            answer: 'Normalerweise ja. Das 3MF-Format verwendet ZIP-Kompression mit Dateigrößen, die typischerweise 30-50% kleiner als STL sind. Für binäre STL-Dateien kann der Kompressionseffekt auffälliger sein. Für ASCII-STL-Dateien, da sie文本格式 sind, wird der Kompressionseffekt noch signifikanter sein. Die spezifische Dateigröße hängt von der Modellkomplexität und der Anzahl der Dreiecke ab.'
        }
    ],

    tutorialTitle: 'Wie man das STL-zu-3MF-Tool verwendet',
    steps: [
        {
            title: 'STL-Dateien Hochladen',
            description: 'Laden Sie首先 die STL-Dateien hoch, die Sie in das 3MF-Format konvertieren möchten. Sie können <strong>Dateien ziehen und ablegen</strong> im Hochladbereich, oder <strong>auf Durchsuchen klicken</strong> um Dateien auszuwählen. Unser Tool unterstützt sowohl Binär- als auch ASCII-STL-Formate, und Sie können mehrere Dateien auf einmal für die Stapelverarbeitung hochladen.',
            note: 'Unterstützt das gleichzeitige Hochladen mehrerer STL-Dateien, das Tool erkennt automatisch das Format und verarbeitet.'
        },
        {
            title: 'Konvertierungsparameter Festlegen',
            description: 'Im linken Kontrollpanel legen Sie den <strong>Modellnamen</strong> (optional) und die <strong>Modelleinheit</strong> fest. Wenn Sie mehrere STL in eine einzelne 3MF-Datei zusammenführen müssen, aktivieren Sie die Option "Alle STL-Dateien in eine einzelne 3MF-Datei zusammenführen". Die Auswahl der richtigen Einheit ist sehr wichtig, um genaue Druckabmessungen zu gewährleisten.',
            note: 'Wenn Sie unsicher über die Einheit sind, ist die Auswahl von Millimetern (mm)通常 die sicherste Wahl.'
        },
        {
            title: 'In das 3MF-Format Konvertieren',
            description: 'Nach der Einstellung klicken Sie auf die Schaltfläche <strong>"In 3MF Konvertieren"</strong> um die Verarbeitung zu starten. Das Tool verarbeitet sequenziell alle hochgeladenen STL-Dateien und zeigt Fortschrittsinformationen während der Stapelverarbeitung an. Die Konvertierung umfasst das Analysieren von STL-Daten, das Optimieren von Ecken und das Generieren der 3MF-Dateistruktur.',
            note: 'Halten Sie die Seite während der Konvertierung geöffnet, große Dateien können einige Sekunden dauern.'
        },
        {
            title: 'Konvertierungsergebnisse Vorschau',
            description: 'Nach der Konvertierung zeigt der rechte Ausgabebereich alle Informationen der konvertierten 3MF-Dateien an. Sie können die <strong>Dateigrößenvergleich</strong>, <strong>Dreiecksanzahl</strong> und <strong>Eckenanzahl</strong> Details anzeigen. Diese Informationen helfen zu bestätigen, ob die Konvertierungsergebnisse den Erwartungen entsprechen.',
            note: '3MF-Dateien sind typischerweise kleiner als die originalen STL-Dateien aufgrund der ZIP-Kompression.'
        },
        {
            title: '3MF-Dateien Herunterladen',
            description: 'Nach der Überprüfung der Konvertierungsergebnisse können Sie auf die Schaltfläche <strong>"3MF Herunterladen"</strong> unter jeder Datei klicken, um sie einzeln zu speichern, oder die Schaltfläche <strong>"Batch-Download (ZIP)"</strong> oben im Ausgabebereich verwenden, um alle konvertierten 3MF-Dateien in eine einzelne ZIP-Datei zu打包 für einmaligen Download. Heruntergeladene Dateien können direkt in 3MF-kompatible Slicing-Software importiert werden.',
            note: 'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, um die Privatsphäre und Sicherheit Ihrer 3D-Modelldaten zu gewährleisten.'
        }
    ],

    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unser STL-zu-3MF-Tool verwendet. Jetzt können Sie einfach 3D-Druckmodelle im STL-Format in das modernere 3MF-Format konvertieren und von besserer Druckkompatibilität und kleineren Dateigrößen profitieren.',

    relatedToolsTitle: 'Verwandte Tools, Die Sie Interessieren Könnten',
    relatedTools: [
        {
            name: 'Bild-zu-PNG-Tool',
            description: 'Konvertiert JPG, WebP und andere Formate in PNG mit transparentem Hintergrund und Stapelverarbeitungsunterstützung.',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: 'Bild-zu-JPG-Tool',
            description: 'Konvertiert PNG, WebP und andere Formate in JPG, geeignet für Fotos und komplexe Bilder.',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        },
        {
            name: 'Bildkompressor',
            description: 'Reduziert die Bilddateigröße ohne merklichen Qualitätsverlust, unterstützt多种 Formate.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Bildgrößenänderer',
            description: 'Ändert die Bildgröße auf bestimmte Abmessungen oder skaliert prozentual, unterstützt Stapelverarbeitung.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: '3MF-Format Offizielle Spezifikation',
            description: 'Erfahren Sie mehr über die technische Spezifikation und die Dateistruktur des 3MF-Formats',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'STL-Dateiformat Beschreibung',
            description: 'Erfahren Sie mehr über die Geschichte und die Dateistruktur des STL-Formats',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D-Druckdateiformat-Vergleich',
            description: 'Merkmale und Anwendungsfälle von STL, 3MF, OBJ und anderen Format',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}
