export default {
    title: "STL zu GLB Tool: Online 3D-Modellformat-Konverter Bedienungsanleitung",
    functionTitle: "Was ist das STL zu GLB Tool und seine Verwendungen?",
    intro: "Unser <strong>STL zu GLB Tool</strong> ist eine professionelle Online-Anwendung zur Konvertierung von 3D-Modellformaten, die STL (Stereo Lithography)-Dateien schnell in das GLB (Binary glTF)-Format konvertieren kann. GLB ist die Binärversion von glTF, ein effizientes 3D-Dateiformat, das weit verbreitet in der Spieleentwicklung, AR/VR-Anwendungen, Web-3D-Anzeige und mehr verwendet wird. Mit unserem <strong>Online-STL-zu-GLB-Konverter</strong> können Sie mehrere STL-Dateien stapelweise verarbeiten, Modelleinheiten festlegen, Materialfarben anpassen und die Konvertierung abschließen, ohne Software installieren zu müssen.",

    useCasesTitle: "Häufige Anwendungsfälle für STL zu GLB",
    useCases: [
        "3D-Druckmodelle im STL-Format in das GLB-Format konvertieren für Spieleentwicklung oder AR/VR-Anwendungen",
        "Mehrere STL-Dateien stapelweise in das GLB-Format konvertieren, um die 3D-Content-Produktionseffizienz zu verbessern",
        "GLB-Format-Modelldateien für Web-3D-Anzeige vorbereiten",
        "STL-Dateien in das GLB-Format konvertieren für Game-Engines wie Unity, Unreal Engine",
        "Optimierte 3D-Modellressourcen für AR/VR-Anwendungen vorbereiten",
        "STL-Modelle in das GLB-Format mit Material- und Texturunterstützung konvertieren",
        "Leichtgewichtige 3D-Modellformate für mobile Anwendungen vorbereiten",
        "STL-Modelle in das GLB-Format migrieren für einfaches Teilen über verschiedene Plattformen"
    ],

    tipTitle: "Profi-Tipp:",
    tipContent: "Das GLB-Format unterstützt reichhaltige Informationen einschließlich Materialien, Texturen und Animationen, mit kleinen Dateigrößen und schnellem Laden. STL-Dateien enthalten nur geometrische Informationen, sodass Materialfarben beim Konvertieren in GLB hinzugefügt werden können. Für Web-Anwendungen ist GLB das bevorzugte Format.",

    conclusion: "Das <strong>STL zu GLB-Formatkonvertierungs</strong>-Tool ist besonders nützlich für Spieleentwickler, AR/VR-Designer, Webentwickler und Benutzer, die 3D-Modelle verarbeiten müssen. Mit unserem Online-Konverter können Sie 3D-Druckmodelle schnell in Formate konvertieren, die für Spiele und AR/VR-Anwendungen geeignet sind, mit Materialinformationsunterstützung und Dateigrößenoptimierung. Unser Tool unterstützt Stapelverarbeitung, bietet Materialfarbeinstellungen, und die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, was die Privatsphäre und Sicherheit Ihrer Modelldaten gewährleistet.",

    faqTitle: "Häufig gestellte Fragen",
    faqs: [
        {
            question: "Welche STL-Formate unterstützt das STL zu GLB Tool?",
            answer: "Unser <strong>Online-STL-zu-GLB-Konverter</strong> unterstützt beide Haupt-STL-Dateiformate: binäres STL und ASCII STL. Das Tool erkennt das Dateiformat automatisch und verarbeitet entsprechend. Egal ob STL-Dateien aus CAD-Software exportiert oder aus 3D-Modellbibliotheken heruntergeladen wurden, sie können reibungslos in das GLB-Format konvertiert werden."
        },
        {
            question: "Welche Vorteile hat das GLB-Format gegenüber STL?",
            answer: "Das GLB-Format hat mehrere Vorteile gegenüber STL: (1) Unterstützt Material-, Textur- und Animationsinformationen; (2) Verwendet Binärformat mit kleiner Dateigröße; (3) Schnelles Laden, geeignet für Echtzeit-Rendering; (4) Unterstützt von gängigen Game-Engines und AR/VR-Plattformen; (5) Unterstützt PBR (Physically Based Rendering)-Materialien. Für Spiele und AR/VR-Anwendungen ist GLB das empfohlene Format."
        },
        {
            question: "Wie wird die Materialfarbe während der Konvertierung eingestellt?",
            answer: "Unser <strong>STL zu GLB Tool</strong> bietet Materialfarbeinstellungen. Sie können voreingestellte Farben wählen oder RGB-Farbwerte anpassen. Die eingestellte Farbe wird auf die gesamte Modelloberfläche angewendet. Für komplexere Materialeffekte können Sie nach dem Importieren der GLB-Datei 3D-Software zur weiteren Bearbeitung verwenden."
        },
        {
            question: "In welcher Software können die konvertierten GLB-Dateien verwendet werden?",
            answer: "Das GLB-Format wird von gängigen Game-Engines und 3D-Plattformen weitgehend unterstützt, darunter Unity, Unreal Engine, Blender, Three.js, Babylon.js und mehr. Konvertierte GLB-Dateien können direkt in diese Software für weitere Bearbeitung, Rendering oder Integration in Spiele und AR/VR-Anwendungen importiert werden."
        },
        {
            question: "Ist der Konvertierungsprozess sicher? Werden Dateien auf Server hochgeladen?",
            answer: "Vollständig sicher! Unser Tool verwendet reine Front-End-Technologie, und die gesamte Dateiverarbeitung erfolgt lokal in Ihrem Browser. Ihre STL-Dateien werden nicht auf einen Server hochgeladen, was Privatsphäre und Datensicherheit gewährleistet."
        },
        {
            question: "Ändert sich die Größe der konvertierten GLB-Datei?",
            answer: "Normalerweise ändert sie sich. Das GLB-Format verwendet binäre Codierung und Komprimierungstechnologie, mit Dateigrößen, die normalerweise kleiner als STL sind. Für einfache Modelle können GLB-Dateien etwas größer als binäres STL sein (aufgrund der Materialinformationen); für komplexe Modelle sind GLB-Dateien normalerweise kleiner."
        },
        {
            question: "Welche 3D-Funktionen unterstützt das GLB-Format?",
            answer: "Das GLB-Format unterstützt viele 3D-Funktionen: geometrische Daten, PBR-Materialien, Textur-Mapping, Skelettanimation, Morph-Ziele, Szenenhierarchien und mehr. Basierend auf dem glTF 2.0-Standard ist es das empfohlene Format für Web-3D und Echtzeit-Rendering."
        }
    ],

    tutorialTitle: "So verwenden Sie das STL zu GLB Tool",
    steps: [
        {
            title: "STL-Dateien hochladen",
            description: "Laden Sie zuerst die STL-Dateien hoch, die Sie in das GLB-Format konvertieren möchten. Sie können <strong>Dateien per Drag-and-Drop</strong> in den Upload-Bereich ziehen oder auf <strong>Durchsuchen klicken</strong>, um Dateien auszuwählen. Unser Tool unterstützt sowohl binäre als auch ASCII-STL-Formate, und Sie können mehrere Dateien gleichzeitig für die Stapelverarbeitung hochladen.",
            note: "Unterstützt das gleichzeitige Hochladen mehrerer STL-Dateien, das Tool wird sie automatisch erkennen und verarbeiten."
        },
        {
            title: "Konvertierungsparameter festlegen",
            description: "Stellen Sie im linken Bedienfeld den <strong>Modellnamen</strong> (optional) und die <strong>Modelleinheit</strong> ein. Wählen Sie die <strong>Materialfarbe</strong>, Sie können voreingestellte Farben verwenden oder RGB-Werte anpassen. Die Wahl der richtigen Einheit ist sehr wichtig, um genaue Modellabmessungen zu gewährleisten.",
            note: "Bei Unsicherheit über die Einheiten ist die Auswahl von Millimetern (mm) normalerweise die sicherste Wahl."
        },
        {
            title: "In GLB-Format konvertieren",
            description: "Klicken Sie nach Abschluss der Einstellungen auf die Schaltfläche <strong>\"In GLB konvertieren\"</strong>, um die Verarbeitung zu starten. Das Tool verarbeitet alle hochgeladenen STL-Dateien nacheinander und zeigt Fortschrittsinformationen. Der Konvertierungsprozess umfasst das Parsen von STL-Daten, das Berechnen von Normalen und das Generieren von GLB-Binärdaten.",
            note: "Bitte lassen Sie die Seite während der Konvertierung geöffnet. Große Dateien können einige Sekunden dauern."
        },
        {
            title: "Konvertierungsergebnisse vorschauen",
            description: "Nach Abschluss der Konvertierung zeigt der rechte Ausgabebereich Informationen für alle konvertierten GLB-Dateien an. Sie können detaillierte Informationen anzeigen, einschließlich <strong>Dateigrößenvergleich</strong>, <strong>Dreiecksanzahl</strong> und <strong>Eckpunktanzahl</strong>.",
            note: "GLB-Dateien sind normalerweise kleiner als die ursprünglichen STL-Dateien, geeignet für Echtzeit-Rendering."
        },
        {
            title: "GLB-Dateien herunterladen",
            description: "Wenn Sie mit den Konvertierungsergebnissen zufrieden sind, können Sie auf die Schaltfläche <strong>\"GLB herunterladen\"</strong> unter jeder Datei klicken, um sie einzeln zu speichern, oder die Schaltfläche <strong>\"Stapel-Download (ZIP)\"</strong> oben im Ausgabebereich verwenden, um alle konvertierten GLB-Dateien in einer ZIP-Datei zu verpacken. Heruntergeladene Dateien können direkt in Game-Engines oder 3D-Software importiert werden, die GLB unterstützt.",
            note: "Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, was die Privatsphäre und Sicherheit Ihrer 3D-Modelldaten gewährleistet."
        }
    ],

    successTitle: "Herzlichen Glückwunsch!",
    successContent: "Sie haben erfolgreich gelernt, wie Sie unser STL zu GLB Tool verwenden. Jetzt können Sie 3D-Druckmodelle im STL-Format einfach in das GLB-Format konvertieren, das für Spieleentwicklung und AR/VR-Anwendungen geeignet ist.",

    relatedToolsTitle: "Verwandte Tools, die Sie interessieren könnten",
    relatedTools: [
        {
            name: "STL zu OBJ Tool",
            description: "STL-Dateien ins OBJ-Format konvertieren, unterstützt Normalenberechnung und Texturkoordinaten, geeignet für Spieleentwicklung und komplexe Modellierung.",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
        },
        {
            name: "STL zu 3MF Tool",
            description: "STL-Dateien ins 3MF-Format konvertieren, unterstützt Farbe, Material und weitere reichhaltige Informationen, geeignet für modernen 3D-Druck.",
            url: "https://www.ufreetools.com/tool/stl-to-3mf-converter"
        },
        {
            name: "Bild zu PNG Tool",
            description: "JPG, WebP und andere Formate ins PNG-Format konvertieren, unterstützt transparente Hintergründe und Stapelverarbeitung.",
            url: "https://www.ufreetools.com/tool/image-to-png"
        },
        {
            name: "Bild zu JPG Tool",
            description: "PNG, WebP und andere Formate ins JPG-Format konvertieren, geeignet für Fotos und komplexe Bilder.",
            url: "https://www.ufreetools.com/tool/image-to-jpg"
        }
    ],

    referencesTitle: "Referenzressourcen",
    references: [
        {
            name: "glTF-Format offizielle Spezifikation",
            description: "Verstehen Sie die technische Spezifikation und Dateistruktur des glTF/GLB-Formats",
            url: "https://www.khronos.org/gltf/"
        },
        {
            name: "STL-Dateiformatbeschreibung",
            description: "Verstehen Sie die Geschichte und Dateistruktur des STL-Formats",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3D-Dateiformatvergleich",
            description: "Eigenschaften und Anwendungsszenarien von STL, OBJ, glTF und anderen Formaten",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
