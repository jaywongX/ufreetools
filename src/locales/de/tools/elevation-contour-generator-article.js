export default {
    title: 'Höhenabfrage und Höhenlinien-Generator: Leitfaden für Online-Geländeanalyse-Tool',
    functionTitle: 'Was ist der Höhenabfrage und Höhenlinien-Generator und welche Anwendungen hat er?',
    intro: 'Unser <strong>Höhenabfrage und Höhenlinien-Generator</strong> ist ein leistungsstarkes Online-Geländeanalyse-Tool, das sofort Höhendaten für jeden Ort der Welt abfragen und präzise Höhenlinienkarten erstellen kann.',
    
    useCasesTitle: 'Häufige Anwendungsszenarien für den Höhenabfrage und Höhenlinien-Generator',
    useCases: [
        'Geländeanalyse und Standortbewertung für Ingenieurplanung und Bauprojekte',
        'Routenplanung und Höhenänderungsschätzung für Wandern und Bergsteigen',
        'Hydrologische Analyse und Hochwasserrisikobewertung',
        'Geologische Forschung und Geländeanalyse',
        'Demonstration geografischen Wissens in der Bildung',
        'Geländemodellierung in der Spieleentwicklung und virtuellen Realität',
        'Landwirtschaftliche Planung und Bewässerungssystemdesign',
        'Umweltverträglichkeitsprüfung'
    ],
    
    tipTitle: 'Profi-Tipp:',
    tipContent: 'Passen Sie bei der Analyse großer Gebiete den Höhenlinienabstand entsprechend an. Verwenden Sie kleinere Abstände (5-10 Meter) für flache Gebiete und größere Abstände (50-100 Meter) für Bergregionen.',
    
    conclusion: 'Das <strong>Höhenabfrage und Höhenlinien-Generator</strong>-Tool bietet bequeme Geländeanalysefunktionen für Fachleute und Enthusiasten in verschiedenen Branchen.',
    
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Was ist die Datenquelle des Höhenabfrage-Tools?',
            answer: 'Unser <strong>Höhenabfragesystem</strong> verwendet hauptsächlich SRTM- und ASTER GDEM-Daten der NASA. In der globalen Abdeckung beträgt die Datenauflösung in der Regel 30 Meter.'
        },
        {
            question: 'Wie verwendet man die Höhenlinien-Generierungsfunktion für die Geländeanalyse?',
            answer: 'Wählen Sie Ihren Interessenbereich auf der Karte aus und passen Sie dann die Höhenlinienparameter an. Nach dem Klicken auf die Schaltfläche "Höhenlinien generieren" verarbeitet das System automatisch die DEM-Daten und zeichnet die Höhenlinien.'
        },
        {
            question: 'Kann ich meine eigenen Punktdaten für die Batch-Höhenabfrage hochladen?',
            answer: 'Ja, unsere <strong>Batch-Höhenabfragefunktion</strong> unterstützt das Hochladen benutzerdefinierter Punktdaten über CSV-, GeoJSON- oder KML-Dateien.'
        },
        {
            question: 'Wie hilft die Höhenprofil-Funktion bei der Planung von Wander- oder Radrouten?',
            answer: 'Durch das Zeichnen Ihrer geplanten Route auf der Karte erstellt das System sofort ein Höhenprofil, das Anstiege, Abstiege und flache Abschnitte anzeigt.'
        },
        {
            question: 'Welche praktischen Anwendungen hat die 3D-Geländevisualisierung?',
            answer: 'Unser <strong>3D-Geländevisualisierungssystem</strong> ist nützlich in der Bildung, Tourismusplanung, Immobilienentwicklung, Ingenieurprojekten und Umweltschutz.'
        }
    ],
    
    tutorialTitle: 'Wie man den Höhenabfrage und Höhenlinien-Generator verwendet',
    steps: [
        {
            title: 'Karte durchsuchen und Zielgebiet lokalisieren',
            description: 'Verwenden Sie die Kartennavigationssteuerungen, um zu Ihrem Interessengebiet zu navigieren.',
            note: 'Verwenden Sie das Mausrad für schnelles Zoomen.'
        },
        {
            title: 'Höhendaten eines einzelnen Punktes abfragen',
            description: '<strong>Klicken Sie auf einen beliebigen Ort</strong> auf der Karte, um die Höhendaten dieses Punktes abzufragen.',
            note: 'Beim Überfahren der Karte mit der Maus wird die Höhe des aktuellen Standorts in Echtzeit angezeigt.'
        },
        {
            title: 'Punktdateien für Batch-Höhenabfrage hochladen',
            description: 'Laden Sie Dateien mit Breiten- und Längenkoordinaten hoch, und das System fragt automatisch die Höhe für jeden Punkt ab.',
            note: 'Stellen Sie sicher, dass das Koordinatensystem WGS84 ist, bevor Sie hochladen.'
        },
        {
            title: 'Höhenlinienkarte generieren',
            description: 'Passen Sie die Parameter im Höhenlinien-Einstellungsbereich an und klicken Sie auf die Schaltfläche <strong>"Höhenlinien generieren"</strong>.',
            note: 'Passen Sie den geeigneten Abstand basierend auf dem Gelände des Gebiets an.'
        },
        {
            title: '3D-Geländeansicht verwenden',
            description: 'Klicken Sie auf die Schaltfläche "3D-Gelände aktivieren" und erkunden Sie die dreidimensionalen Merkmale des Geländes.',
            note: 'Ziehen Sie bei gedrückter Strg-Taste, um die Perspektivneigung anzupassen.'
        },
        {
            title: 'Höhenprofil erstellen',
            description: 'Klicken Sie auf die Schaltfläche "Profillinie zeichnen" und zeichnen Sie eine Route auf der Karte.',
            note: 'Wenn Sie die Maus über das Profil bewegen, erscheint ein Marker am entsprechenden Standort auf der Karte.'
        },
        {
            title: 'Ergebnisse exportieren und teilen',
            description: 'Laden Sie Höhenlinienkarten, Höhendaten oder Profildiagramme herunter und verwenden Sie die Schaltfläche "Karte teilen".',
            note: 'Exportierte Karten enthalten Koordinatenreferenzinformationen.'
        }
    ],
    
    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unser Höhenabfrage und Höhenlinien-Generator-Tool verwendet.',
    
    relatedToolsTitle: 'Andere Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Koordinatenumrechnungstool',
            description: 'Konvertieren Sie geografische Koordinaten zwischen verschiedenen Koordinatensystemen.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS-Track-Wiedergabe',
            description: 'Visualisieren und spielen Sie GPS-Tracks aus verschiedenen Dateiformaten ab.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gauß-Projektionsrechner',
            description: 'Umrechnung zwischen Gauß-Projektionskoordinaten und geografischen Koordinaten.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'LIDAR-Punktwolken-Viewer',
            description: 'Kostenloser Online-LIDAR-Punktwolken-Viewer mit Unterstützung für LAS-, XYZ-, PLY- und PCD-Formate.',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],
    
    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Grundlagen topografischer Karten - Wikipedia',
            description: 'Detaillierte Beschreibung der Komponenten topografischer Karten und der Interpretation von Höhenlinien',
            url: 'https://en.wikipedia.org/wiki/Topographic_map'
        },
        {
            name: 'REI Kartennavigations-Tutorials',
            description: 'Techniken zum Lesen topografischer Karten und zur Navigation, bereitgestellt von einer professionellen Outdoor-Bildungseinrichtung',
            url: 'https://www.rei.com/learn/expert-advice/navigation-basics.html'
        },
        {
            name: 'OpenTopography Lernressourcen',
            description: 'Geländeanalysemethoden und Fallstudien, bereitgestellt von der Open Terrain Data Platform',
            url: 'https://opentopography.org/learn'
        }
    ]
};