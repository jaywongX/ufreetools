export default {
    title: "3MF zu STL Tool: Online 3D-Druckformat-Konverter Bedienungsanleitung",
    functionTitle: "Was ist das 3MF zu STL Tool und seine Verwendungen?",
    intro: "Unser <strong>3MF zu STL Tool</strong> ist eine professionelle Online-3D-Druckformat-Konvertierungsanwendung, die 3MF (3D Manufacturing Format)-Dateien schnell in das STL (Stereo Lithography)-Format konvertieren kann. Obwohl 3MF das modernere Format ist, ist STL immer noch das am weitesten verbreitete Dateiformat in der 3D-Druckbranche und wird von fast allen 3D-Druckern und Slicing-Software unterstützt. Mit unserem <strong>Online-3MF-zu-STL-Konverter</strong> können Sie mehrere 3MF-Dateien stapelweise verarbeiten, Modelleinheiten festlegen, das Ausgabeformat (binär oder ASCII) wählen und die Formatkonvertierung abschließen, ohne Software installieren zu müssen.",

    useCasesTitle: "Häufige Anwendungsfälle für 3MF zu STL",
    useCases: [
            "3D-Druckmodelle im 3MF-Format in das STL-Format konvertieren für breitere Gerätekompatibilität",
            "Mehrere 3MF-Dateien stapelweise in das STL-Format konvertieren, um die Effizienz des 3D-Druck-Workflows zu verbessern",
            "3MF-Dateien in das STL-Format konvertieren für ältere 3D-Drucker oder Slicing-Software",
            "Geometrische Informationen aus 3MF-Dateien extrahieren und in einfaches STL-Format konvertieren",
            "Dateien für 3D-Druckgeräte vorbereiten, die das 3MF-Format nicht unterstützen",
            "3MF-Modelle in das STL-Format konvertieren für einfachen Datenaustausch zwischen verschiedenen Systemen",
            "3D-Druck-Dateiformat optimieren, STL hat die breiteste Kompatibilität",
            "Standardisierte STL-Format-Dateien für 3D-Druckdienstleister vorbereiten"
    ],

    tipTitle: "Profi-Tipp:",
    tipContent: "Das 3MF-Format unterstützt reichhaltige Informationen wie Farbe und Material, die beim Konvertieren in STL verloren gehen. Wenn Sie Farbinformationen erhalten möchten, ziehen Sie andere Formate in Betracht. Für den 3D-Druck sind Millimeter die empfohlene Einheit.",

    conclusion: "Das <strong>3MF zu STL-Formatkonvertierungs</strong>-Tool ist besonders nützlich für 3D-Druck-Enthusiasten, Designer, Ingenieure und Benutzer, die viele 3D-Modelle verarbeiten müssen. Mit unserem Online-Konverter können Sie moderne 3D-Druckformate schnell in ein universelles Format konvertieren und Kompatibilität mit verschiedenen 3D-Druckgeräten und -Software gewährleisten. Unser Tool unterstützt Stapelverarbeitung, bietet Formatauswahl-Funktionen, und die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, was die Privatsphäre und Sicherheit Ihrer Modelldaten gewährleistet.",

    faqTitle: "Häufig gestellte Fragen",
    faqs: [
        {
            question: "Welche 3MF-Formate unterstützt das 3MF zu STL Tool?",
            answer: "Unser <strong>Online-3MF-zu-STL-Konverter</strong> unterstützt das Standard-3MF (3D Manufacturing Format)-Dateiformat. 3MF ist ein ZIP-basiertes XML-Format, das Modellgeometrie, Farbe, Material und andere Informationen enthält. Unser Tool analysiert 3MF-Dateien, extrahiert geometrische Daten und konvertiert sie in das STL-Format."
        },
        {
            question: "Welche Vorteile hat das STL-Format gegenüber 3MF?",
            answer: "Vorteile des STL-Formats im 3D-Druck umfassen: (1) Breiteste Kompatibilität, unterstützt von allen 3D-Druckern und Slicing-Software; (2) Einfache Dateistruktur mit schneller Verarbeitung; (3) Der traditionelle Standard der 3D-Druckbranche; (4) Geringe Binärdateigröße. Obwohl 3MF reichhaltigere Funktionen hat, hat STL bessere Kompatibilität."
        },
        {
            question: "Welche Informationen gehen während der Konvertierung verloren?",
            answer: "Das 3MF-Format unterstützt reichhaltige Informationen wie Farbe, Material, Textur und Druckparameter, während das STL-Format nur geometrische Informationen (Eckpunkte und Flächen) enthält. Während der Konvertierung gehen Farb-, Material- und andere Informationen verloren, nur die Modellgeometrie wird erhalten. Wenn diese Informationen wichtig sind, ziehen Sie andere Konvertierungsmethoden in Betracht."
        },
        {
            question: "Was ist der Unterschied zwischen binärem STL und ASCII STL?",
            answer: "Binäres STL verwendet binäre Kodierung mit kleinerer Dateigröße und schnellerer Verarbeitung, was es zum bevorzugten Format für den 3D-Druck macht. ASCII STL verwendet Textformat mit größerer Dateigröße, aber einfacher für Menschen zu lesen und zu bearbeiten. Unser Tool unterstützt die Generierung beider Formate, und wir empfehlen, in den meisten Fällen binäres STL für bessere Leistung zu wählen."
        },
        {
            question: "In welcher Software können die konvertierten STL-Dateien verwendet werden?",
            answer: "Das STL-Format wird von gängiger 3D-Druck-Slicing-Software weitgehend unterstützt, darunter Cura, PrusaSlicer, Simplify3D, 3D Builder (Windows) und mehr. Konvertierte STL-Dateien können direkt in diese Software für Slicing und Druckvorbereitung importiert werden. STL ist das universellste Format in der 3D-Druckbranche."
        },
        {
            question: "Ist der Konvertierungsprozess sicher? Werden Dateien auf Server hochgeladen?",
            answer: "Vollständig sicher! Unser Tool verwendet reine Front-End-Technologie, und die gesamte Dateiverarbeitung erfolgt lokal in Ihrem Browser. Ihre 3MF-Dateien werden nicht auf einen Server hochgeladen, was Privatsphäre und Datensicherheit gewährleistet. Sie können 3D-Modelldateien mit Geschäftsgeheimnissen oder persönlichen Designs zuversichtlich verarbeiten."
        },
        {
            question: "Ändert sich die Größe der konvertierten STL-Datei?",
            answer: "Normalerweise ändert sie sich. Das 3MF-Format verwendet ZIP-Komprimierung, sodass Dateien normalerweise kleiner als STL sind. Nach der Konvertierung in STL hängt die Dateigröße von der Modellkomplexität und Dreiecksanzahl ab. Binäres STL ist normalerweise 30-50% kleiner als ASCII STL."
        }
    ],

    tutorialTitle: "So verwenden Sie das 3MF zu STL Tool",
    steps: [
        {
            title: "3MF-Dateien hochladen",
            description: "Laden Sie zuerst die 3MF-Dateien hoch, die Sie in das STL-Format konvertieren möchten. Sie können <strong>Dateien per Drag-and-Drop</strong> in den Upload-Bereich ziehen oder auf <strong>Durchsuchen</strong> klicken, um Dateien auszuwählen. Unser Tool unterstützt das Standard-3MF-Dateiformat, und Sie können mehrere Dateien gleichzeitig für die Stapelverarbeitung hochladen.",
            note: "Unterstützt das gleichzeitige Hochladen mehrerer 3MF-Dateien, das Tool wird sie automatisch analysieren und verarbeiten."
        },
        {
            title: "Konvertierungsparameter festlegen",
            description: "Stellen Sie im linken Bedienfeld den <strong>Modellnamen</strong> (optional) und das <strong>Ausgabeformat</strong> (binäres STL oder ASCII STL) ein. Binärformat wird für kleinere Dateigröße empfohlen.",
            note: "Bei Unsicherheit über das Format ist binäres STL normalerweise die sicherste Wahl."
        },
        {
            title: "In STL-Format konvertieren",
            description: "Klicken Sie nach Abschluss der Einstellungen auf die Schaltfläche <strong>\"In STL konvertieren\"</strong>, um die Verarbeitung zu starten. Das Tool verarbeitet alle hochgeladenen 3MF-Dateien nacheinander und zeigt Fortschrittsinformationen während der Stapelverarbeitung an. Der Konvertierungsprozess umfasst das Parsen von 3MF-Daten, das Extrahieren geometrischer Informationen und das Generieren der STL-Dateistruktur.",
            note: "Bitte lassen Sie die Seite während der Konvertierung geöffnet. Große Dateien können einige Sekunden dauern."
        },
        {
            title: "Konvertierungsergebnisse vorschauen",
            description: "Nach Abschluss der Konvertierung zeigt der rechte Ausgabebereich Informationen für alle konvertierten STL-Dateien an. Sie können detaillierte Informationen anzeigen, einschließlich <strong>Dateigrößenvergleich</strong>, <strong>Dreiecksanzahl</strong> und <strong>Eckpunktanzahl</strong>. Diese Informationen helfen zu bestätigen, ob die Konvertierungsergebnisse den Erwartungen entsprechen.",
            note: "STL-Dateien verwenden Dreiecksnetze zur Darstellung von Modellen, geeignet für 3D-Druck."
        },
        {
            title: "STL-Dateien herunterladen",
            description: "Wenn Sie mit den Konvertierungsergebnissen zufrieden sind, können Sie auf die Schaltfläche <strong>\"STL herunterladen\"</strong> unter jeder Datei klicken, um sie einzeln zu speichern, oder die Schaltfläche <strong>\"Stapel-Download (ZIP)\"</strong> oben im Ausgabebereich verwenden, um alle konvertierten STL-Dateien in einer ZIP-Datei für den einmaligen Download zu verpacken. Heruntergeladene Dateien können direkt in Slicing-Software importiert werden, die STL unterstützt.",
            note: "Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, was die Privatsphäre und Sicherheit Ihrer 3D-Modelldaten gewährleistet."
        }
    ],

    successTitle: "Herzlichen Glückwunsch!",
    successContent: "Sie haben erfolgreich gelernt, wie Sie unser 3MF zu STL Tool verwenden. Jetzt können Sie 3D-Druckmodelle im 3MF-Format einfach in das universelle STL-Format konvertieren und breitere 3D-Drucker-Kompatibilität genießen.",

    relatedToolsTitle: "Verwandte Tools, die Sie interessieren könnten",
    relatedTools: [
            {
                    "name": "STL zu 3MF Tool",
                    "description": "STL-Dateien ins 3MF-Format konvertieren, unterstützt Farbe, Material und weitere reichhaltige Informationen, geeignet für modernen 3D-Druck.",
                    "url": "https://www.ufreetools.com/tool/stl-to-3mf-converter"
            },
            {
                    "name": "STL zu OBJ Tool",
                    "description": "STL-Dateien ins OBJ-Format konvertieren, unterstützt Normalenberechnung und Texturkoordinaten, geeignet für Spieleentwicklung und komplexe Modellierung.",
                    "url": "https://www.ufreetools.com/tool/stl-to-obj-converter"
            },
            {
                    "name": "Bild zu PNG Tool",
                    "description": "JPG, WebP und andere Formate ins PNG-Format konvertieren, unterstützt transparente Hintergründe und Stapelverarbeitung.",
                    "url": "https://www.ufreetools.com/tool/image-to-png"
            },
            {
                    "name": "Bild zu JPG Tool",
                    "description": "PNG, WebP und andere Formate ins JPG-Format konvertieren, geeignet für Fotos und komplexe Bilder.",
                    "url": "https://www.ufreetools.com/tool/image-to-jpg"
            }
    ],

    referencesTitle: "Referenzressourcen",
    references: [
            {
                    "name": "3MF-Format offizielle Spezifikation",
                    "description": "Verstehen Sie die technische Spezifikation und Dateistruktur des 3MF-Formats",
                    "url": "https://3mf.io/specification/"
            },
            {
                    "name": "STL-Dateiformatbeschreibung",
                    "description": "Verstehen Sie die Geschichte und Dateistruktur des STL-Formats",
                    "url": "https://en.wikipedia.org/wiki/STL_%28file_format%29"
            },
            {
                    "name": "3D-Druck-Dateiformatvergleich",
                    "description": "Eigenschaften und Anwendungsszenarien von STL, OBJ, 3MF und anderen Formaten",
                    "url": "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
            }
    ]
}
