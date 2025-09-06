export default {
    title: 'Online Geodätischer Messrechner: Präzise Berechnung von Distanzen und Flächen auf der Erdoberfläche',
    functionTitle: 'Was ist ein geodätischer Rechner und wofür wird er verwendet?',
    intro: 'Unser <strong>Online Geodätischer Messrechner</strong> ist ein professionelles Geospatial-Berechnungstool, das Distanzen, Azimute und Flächen auf der Erdoberfläche basierend auf ellipsoidalen Modellen präzise berechnet. Im Gegensatz zu einfachen ebenen Berechnungen berücksichtigen geodätische Messungen die Erdkrümmung und ihre ellipsoidale Form und liefern hochpräzise geospatiale Messergebnisse für Vermessung, Navigation, Landplanung und wissenschaftliche Forschung. Dieses <strong>geodätische Messtool</strong> unterstützt mehrere internationale Standard-Ellipsoidparameter (wie WGS84, CGCS2000 usw.) und bietet intuitive Kartenvisualisierung, damit Sie die Messergebnisse deutlich sehen können.',

    useCasesTitle: 'Häufige Anwendungsfälle des geodätischen Messrechners',
    useCases: [
        'Vermessungs- und Geoinformationssystem (GIS)-Fachleute, die präzise geospatiale Analysen durchführen',
        'Landvermesser, die Grundstücksflächen und Grenzlängen berechnen',
        'Planung der See- und Luftnavigation, Berechnung von Großkreisroutendistanzen und Azimuten',
        'Geografische Forscher, die geospatiale Daten analysieren',
        'Ingenieure, die Infrastruktur planen, die große Entfernungen überspannt (wie Pipelines, Kabel, Straßen)',
        'Militär- und Verteidigungssektoren für präzise Positionierung und Distanzberechnungen',
        'Umwelt- und Ressourcenmanagement-Fachleute, die die Größe von Schutzgebieten bewerten',
        'Pädagogen, die den Einfluss der Erdkrümmung auf Distanzberechnungen demonstrieren'
    ],

    tipTitle: 'Profi-Tipp:',
    tipContent: 'Für Berechnungen über große Entfernungen, die kontinentale Maßstäbe umfassen, empfehlen wir die Option des hochpräzisen Algorithmus, der ein vollständiges ellipsoidales Modell verwendet. Obwohl rechnerisch langsamer, liefert er genauere Ergebnisse, besonders in polaren Regionen.',

    conclusion: '<strong>Geodätische Messungen</strong> spielen eine entscheidende Rolle in modernen geospatialen Technologien. Durch die Verwendung unseres Rechners können Sie Fehler vermeiden, die durch ebene Berechnungen entstehen, und präzise Ergebnisse erhalten, die die Erdkrümmung berücksichtigen. Ob Sie ein professioneller Vermesser, ein akademischer Forscher oder ein Enthusiast sind, der sich für geospatiale Berechnungen interessiert, dieses Tool erfüllt Ihre Genauigkeitsanforderungen und bietet gleichzeitig intuitive Visualisierung und detaillierte Demonstrationen des Berechnungsprozesses.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Was ist der Unterschied zwischen geodätischen Berechnungen und ebenen Distanzberechnungen?',
            answer: 'Geodätische Berechnungen berücksichtigen die Erdkrümmung und ihre ellipsoidale Form, während ebene Distanzberechnungen die Erdoberfläche als flach behandeln. Bei kurzen Entfernungen (wenige Kilometer) ist der Unterschied minimal, aber mit zunehmender Entfernung wird der Unterschied signifikant. Beispielsweise können bei einer Entfernung von 1000 km ebene Berechnungen zu Fehlern von Dutzenden von Kilometern führen. Unser <strong>geodätischer Rechner</strong> verwendet ellipsoidale Modelle (wie WGS84) für Berechnungen und liefert genauere Distanzen auf der Erdoberfläche.'
        },
        {
            question: 'Wie wähle ich die geeigneten Ellipsoidparameter aus?',
            answer: 'Die Wahl der Ellipsoidparameter sollte auf Ihrem geografischen Standort und den Anforderungen Ihrer Anwendung basieren. WGS84 ist der Standard, der vom Global Positioning System (GPS) verwendet wird und für die meisten globalen Anwendungen geeignet ist; CGCS2000 ist der chinesische nationale Standard, geeignet für Messungen in China; andere Regionen haben möglicherweise ihre eigenen Standards. Für Fälle, in denen Sie mit bestimmten Karten oder Datensätzen arbeiten, wählen Sie dieselben Ellipsoidparameter, die von diesem Datensatz verwendet werden, um Konsistenz in den Berechnungsergebnissen zu gewährleisten.'
        },
        {
            question: 'Was ist der Unterschied zwischen Großkreisdistanz und geodätischer Distanz?',
            answer: 'Die Großkreisdistanz ist die kürzeste Entfernung zwischen zwei Punkten entlang eines Großkreises (dem größten Kreis auf einer Kugel), während die geodätische Distanz die kürzeste Entfernung auf einer ellipsoidalen Oberfläche ist. Unser <strong>hochpräzises geodätisches Messtool</strong> berechnet die geodätische Distanz unter Berücksichtigung der ellipsoidalen Form der Erde. In praktischen Anwendungen ist für kurze bis mittlere Entfernungen der Unterschied gering, aber für lange Entfernungen oder Anwendungen, die hohe Präzision erfordern, ist die Berechnung der geodätischen Distanz genauer.'
        },
        {
            question: 'Wie berechne ich die Fläche eines Polygons?',
            answer: 'Um die Fläche eines Polygons zu berechnen, fügen Sie zunächst mindestens drei Punkte im Koordinateneingabebereich hinzu (in der Reihenfolge, um ein Polygon zu bilden), dann wählen Sie den Modus "Flächenberechnung". Unser Tool verwendet sphärische Polygonflächenberechnungsmethoden, die die Erdkrümmung berücksichtigen, was genauer ist als ebene Berechnungen. Für hochpräzise Anforderungen wählen Sie die Option "Hochpräziser Algorithmus", der ein vollständiges ellipsoidales Modell für Berechnungen verwendet. Die Ergebnisse zeigen die Fläche und den Umfang des Polygons mit visueller Darstellung auf der Karte.'
        },
        {
            question: 'Wie genau sind die Berechnungsergebnisse?',
            answer: 'Unser <strong>geospatialer Messrechner</strong> bietet zwei Genauigkeitsoptionen: schneller Algorithmus und hochpräziser Algorithmus. Der schnelle Algorithmus ist für allgemeine Zwecke geeignet, typischerweise genau innerhalb von 0,1%; der hochpräzise Algorithmus verwendet ein vollständiges ellipsoidales Modell mit iterativen Berechnungen und erreicht eine Genauigkeit von bis zu 0,001% (Zentimeterebene), geeignet für professionelle Vermessung und wissenschaftliche Forschung. Die tatsächliche Genauigkeit hängt auch von der Exaktheit der Eingabekoordinaten und davon ab, wie gut die gewählten Ellipsoidparameter mit der tatsächlichen Region übereinstimmen.'
        }
    ],

    tutorialTitle: 'Wie man den Online Geodätischen Messrechner verwendet',
    steps: [
        {
            title: 'Koordinatenpunkte eingeben',
            description: 'Im Koordinateneingabebereich geben Sie die Breiten- und Längengrade der Punkte ein, die Sie berechnen möchten. Sie können auf die Schaltfläche <strong>"Punkt hinzufügen"</strong> klicken, um weitere Punkte hinzuzufügen. Für Distanzberechnungen werden mindestens zwei Punkte benötigt; für Flächenberechnungen werden mindestens drei Punkte benötigt.',
            note: 'Koordinaten sind im Dezimalgrad-Format (z.B. 39.9042, 116.4074), wobei positive Werte nördliche Breite/östliche Länge und negative Werte südliche Breite/westliche Länge darstellen.'
        },
        {
            title: 'Ellipsoidparameter auswählen',
            description: 'Wählen Sie aus dem Dropdown-Menü die Ellipsoidparameter, die Ihren Anforderungen entsprechen. WGS84 ist der Standard, der von globalen GPS-Systemen verwendet wird und für die meisten Anwendungen geeignet ist; CGCS2000 ist der chinesische nationale Standard; andere Optionen sind für bestimmte Regionen oder historische Daten anwendbar.',
            note: 'Die Wahl derselben Ellipsoidparameter, die von Ihren Kartendaten oder GPS-Gerät verwendet werden, gewährleistet Konsistenz in den Berechnungsergebnissen.'
        },
        {
            title: 'Berechnungsmodus und Genauigkeit festlegen',
            description: 'Wählen Sie den Modus <strong>"Distanz und Azimut"</strong>, um die Distanz und den Azimut zwischen zwei Punkten zu berechnen, oder wählen Sie den Modus <strong>"Flächenberechnung"</strong>, um die Fläche eines Polygons zu berechnen. Wählen Sie dann die gewünschte Genauigkeitsstufe: schneller Algorithmus oder hochpräziser Algorithmus.',
            note: 'Für kurze Entfernungen oder allgemeine Zwecke ist der schnelle Algorithmus ausreichend genau; für lange Entfernungen oder professionelle Anwendungen wird der hochpräzise Algorithmus empfohlen.'
        },
        {
            title: 'Visualisierungsoptionen konfigurieren',
            description: 'Aktivieren Sie nach Bedarf die Optionen <strong>"Berechnungsformeln anzeigen"</strong> und <strong>"Dynamische Demonstration anzeigen"</strong>. Erstere zeigt die mathematischen Formeln und Schritte, die im Berechnungsprozess verwendet werden, während letztere den Großkreisweg oder den Polygonkonstruktionsprozess dynamisch auf der Karte demonstriert.',
            note: 'Das Anzeigen von Berechnungsformeln ist besonders nützlich für Bildungszwecke oder zur Überprüfung des Berechnungsprozesses; die dynamische Demonstration hilft, die Prinzipien der Erdoberflächenmessung intuitiv zu verstehen.'
        },
        {
            title: 'Berechnung durchführen und Ergebnisse anzeigen',
            description: 'Klicken Sie auf die Schaltfläche <strong>"Berechnen"</strong>, um die Berechnung durchzuführen. Der Ergebnisbereich zeigt die berechneten Distanz-, Azimut- oder Flächendaten an, während die Karte die Messergebnisse visualisiert. Sie können die Einheiten (wie Kilometer, Meter, Meilen usw.) anpassen, um die Ergebnisse in verschiedenen Einheiten anzuzeigen.',
            note: 'Die Kartenvisualisierung wird automatisch so skaliert, dass alle Eingabepunkte berücksichtigt werden; Sie können die Kartensteuerungen verwenden, um zu zoomen, zu schwenken oder Kartentypen zu wechseln.'
        },
        {
            title: 'Ergebnisse exportieren oder teilen',
            description: 'Nach der Berechnung können Sie die Schaltflächen <strong>"Als PDF exportieren"</strong> oder <strong>"Als Excel exportieren"</strong> verwenden, um die Ergebnisse zu speichern. Die exportierte Datei enthält alle Eingabeparameter, Berechnungsergebnisse und Visualisierungsdiagramme, die für die Weitergabe oder weitere Analyse praktisch sind.',
            note: 'Alle Berechnungen werden in Ihrem Browser durchgeführt und nicht auf einen Server hochgeladen, was die Sicherheit und Privatsphäre Ihrer geografischen Daten gewährleistet.'
        }
    ],

    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Online Geodätischen Messrechner verwendet. Jetzt können Sie präzise Distanz- und Flächenberechnungen auf der Erdoberfläche für verschiedene professionelle und Bildungszwecke durchführen.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Koordinatensystem-Konverter',
            description: 'Konvertieren Sie geografische Koordinaten zwischen verschiedenen Koordinatensystemen, einschließlich WGS-84, GCJ-02, BD-09, Web Mercator und UTM',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS-Track-Wiedergabe',
            description: 'Visualisieren und spielen Sie GPS-Tracks aus verschiedenen Dateiformaten (GPX, KML, GeoJSON, CSV) ab.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gauß-Projektionsrechner',
            description: 'Tool zur Umrechnung zwischen Gauß-Projektionskoordinaten und geografischen Koordinaten (Breiten- und Längengrad)',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'LIDAR-Punktwolken-Viewer',
            description: 'Kostenloser Online-LIDAR-Punktwolken-Viewer, der LAS-, XYZ-, PLY-, PCD-Formate unterstützt. Bietet 3D-Visualisierung, mehrere Färbungsmodi, interaktive Navigation und Datenanalysefunktionen',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Grundlagen der Geodäsie',
            description: 'Akademische Ressourcen zu Ellipsoidparametern und geodätischen Berechnungsmethoden',
            url: 'https://de.wikipedia.org/wiki/Geodäsie'
        },
        {
            name: 'Internationaler Erdrotations- und Referenzsystemdienst',
            description: 'Maßgebliche Organisation, die internationale terrestrische Referenzrahmen und Ellipsoidparameter bereitstellt',
            url: 'https://www.iers.org/IERS/EN/Home/home_node.html'
        },
        {
            name: 'Berechnungstools des US National Geodetic Survey',
            description: 'Referenzmaterialien für verschiedene geodätische Berechnungsmethoden und Algorithmen',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        }
    ]
}