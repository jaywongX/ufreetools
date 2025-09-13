export default {
    title: 'Benutzerhandbuch für Projektionszonen-Finder - Online UTM-Projektionszonen-Rechner',
    functionTitle: 'Was ist der Projektionszonen-Finder und wofür wird er verwendet?',
    intro: 'Unser <strong>Projektionszonen-Finder</strong> ist ein leistungsstarkes Online-Tool, das automatisch UTM 3°- und 6°-Zonennummern basierend auf eingegebenen Breiten- und Längengradkoordinaten berechnet. Das Tool unterstützt einzelne und stapelweise Koordinateneingabe, bietet eine Funktion zur Anzeige von Zonengittern auf der Karte und zeigt Echtzeit-Projektionszoneninformationen, während Sie die Maus über die Karte bewegen. Durch dynamische Hervorhebung von Zonenbereichen können Sie intuitiv die Beziehung zwischen Koordinaten und Projektionszonen verstehen. Mit unserem <strong>UTM-Projektionszonen-Rechner</strong> können Sie ganz einfach die entsprechenden Projektionszonennummern für Koordinatenpunkte erhalten, mit Funktionen zum Kopieren per Klick und Stapel-Export zur Erfüllung professioneller Vermessungs- und GIS-Anforderungen.',

    useCasesTitle: 'Häufige Anwendungsszenarien des Projektionszonen-Finders',
    useCases: [
        'GIS-Datenverarbeitung, Bestimmung von UTM-Projektionszonennummern für Koordinatenpunkte',
        'Fernerkundungsbildverarbeitung, Auswahl korrekter Projektionsparameter für Satellitenbilder',
        'Projektionsparametereinstellung in Vermessungsprojekten, Gewährleistung der Konsistenz des Datenkoordinatensystems',
        'Kartenerstellung und räumliche Analyse, Auswahl geeigneter Projektionskoordinatensysteme',
        'Standardisierung geographischer Forschungsdaten, Vereinheitlichung von Projektionszonennummern für Datenintegration',
        'Navigations- und Positionsbestimmungsanwendungen, Einstellung korrekter UTM-Projektionsparameter für GPS-Geräte'
    ],

    tipTitle: 'Professionelle Tipps:',
    tipContent: 'Bei der Stapelverarbeitung von Koordinaten wird empfohlen, die Projektionszonenberechnungsergebnisse zunächst mit Beispieldaten zu testen, um sicherzustellen, dass der ausgewählte Projektionstyp (3°-Zone oder 6°-Zone) den Anforderungen Ihres Projekts entspricht. Durch Bewegen der Maus über die Karte können Sie intuitiv die Verteilung von Projektionszonen in verschiedenen Bereichen anzeigen und das UTM-Projektionszonenprinzip besser verstehen.',

    conclusion: 'Der <strong>Projektionszonen-Finder</strong> ist sehr nützlich für Vermessungsingenieure, GIS-Profis, Fernerkundungsdatenverarbeiter und jeden, der UTM-Projektionskoordinaten benötigt. Mit unserem UTM-Projektionszonen-Rechner können Sie viel manuelle Rechenzeit sparen, Projektionszonen-Auswahlfehler vermeiden und die Beziehung zwischen Koordinaten und Projektionszonen besser verstehen durch Visualisierungsfunktionen. Unser Tool macht den Prozess der Projektionsparameter-Einstellung einfach und effizient, ohne professionelle Software installieren zu müssen.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Welche Projektionstypen unterstützt der Projektionszonen-Finder?',
            answer: 'Unser <strong>Online-Projektionszonen-Finder</strong> unterstützt zwei Haupt-UTM-Projektionstypen: 6°-Zonen und 3°-Zonen. Die 6°-Zone ist die Standard-Zonenaufteilungsmethode für die UTM-Projektion, mit 60 Projektionszonen weltweit, jede 6° Längengrad breit; die 3°-Zone ist eine verfeinerte Aufteilungsmethode, mit 120 Projektionszonen weltweit, jede 3° Längengrad breit. Sie können den geeigneten Projektionstyp für die Berechnung entsprechend Ihren Projektanforderungen auswählen.'
        },
        {
            question: 'Wie führt man Batch-Koordinaten-Projektionszonenabfragen durch?',
            answer: 'Mit unserem <strong>UTM-Projektionszonen-Rechner</strong> geben Sie einfach mehrere Koordinatenpaare zeilenweise im Batch-Eingabebereich ein, wobei Sie Längen- und Breitengrad durch Kommas trennen. Zum Beispiel: 116.3975,39.9085. Nach Klicken auf die Berechnungsschaltfläche berechnet das System automatisch die entsprechenden Projektionszonennummern für alle Koordinatenpunkte und zeigt Zonennummer-, Hemisphären- und Zentralmeridian-Informationen an. Die Stapel-Exportfunktion kann alle Ergebnisse als Textdatei speichern.'
        },
        {
            question: 'Wie wird das Zonengitter auf der Karte angezeigt?',
            answer: 'Unser <strong>Projektionszonen-Finder-Tool</strong> zeigt das UTM-Projektionszonengitter im rechten Kartenbereich an. Wenn Sie die Maus über die Karte bewegen, wird die Projektionszonennummer der aktuellen Position in Echtzeit angezeigt. Diese Visualisierungsfunktion hilft Ihnen, das Verteilungsmuster von UTM-Projektionszonen intuitiv zu verstehen und die Beziehung zwischen Koordinaten und Projektionszonen besser zu erfassen.'
        },
        {
            question: 'Wie wird die Genauigkeit der Projektionszonenberechnung sichergestellt?',
            answer: 'Unser Tool verwendet standardisierte UTM-Projektionszonenberechnungsformeln, um die Genauigkeit der Berechnungsergebnisse zu gewährleisten. Für 6°-Zonen lautet die Zonennummerberechnungsformel: Math.floor((Längengrad + 180) / 6) + 1; für 3°-Zonen lautet die Zonennummerberechnungsformel: Math.floor((Längengrad + 180) / 3) + 1. Das Tool validiert auch die Gültigkeit der eingegebenen Koordinaten (Längengrad -180° bis 180°, Breitengrad -90° bis 90°), um die Zuverlässigkeit der Berechnungsergebnisse zu gewährleisten.'
        },
        {
            question: 'Wie verwendet man die Abfrageergebnisse?',
            answer: 'Die berechneten Projektionszonennummern können für Parametereinstellungen in verschiedenen GIS-Software und Vermessungsausrüstungen verwendet werden. Sie können einzelne Ergebnisse per Klick kopieren oder die Stapel-Exportfunktion verwenden, um alle Ergebnisse als Textdatei zu speichern. Die Ergebnisse enthalten Längen- und Breitengrad-, Zonennummer-, Hemisphären- und Zentralmeridian-Informationen und bieten eine vollständige Referenz für die Einrichtung Ihres Projektionskoordinatensystems.'
        }
    ],

    tutorialTitle: 'Wie verwendet man den Projektionszonen-Finder',
    steps: [
        {
            title: 'Projektionstyp auswählen',
            description: 'Wählen Sie oben im linken Eingabebereich den benötigten Projektionstyp: UTM 6°-Zone oder UTM 3°-Zone. Die 6°-Zone eignet sich für die meisten Standard-Kartenprojektionsbedürfnisse, während die 3°-Zone für Vermessungsprojekte mit höherer Genauigkeit geeignet ist.',
            note: 'Der Projektionstyp bestimmt die Zonendichte und Berechnungsmethode. Bitte wählen Sie den geeigneten Typ entsprechend Ihren Projektanforderungen.'
        },
        {
            title: 'Koordinatendaten eingeben',
            description: 'Bei der Eingabe einzelner Koordinaten geben Sie Werte in die Längen- und Breitengradeingabefelder ein; für die Stapel-Eingabe geben Sie mehrere Koordinatenpaare zeilenweise im Textbereich ein, wobei Sie Längen- und Breitengrad pro Zeile durch Kommas trennen. Zum Beispiel: 116.3975,39.9085.',
            note: 'Der Längengradbereich ist -180° bis 180°, der Breitengradbereich ist -90° bis 90°. Koordinaten außerhalb dieser Bereiche werden ignoriert.'
        },
        {
            title: 'Berechnungsvorgang durchführen',
            description: 'Klicken Sie auf die Schaltfläche "Zone berechnen", um den Berechnungsvorgang durchzuführen. Das Tool berechnet automatisch und zeigt die entsprechende Projektionszonennummer, Hemisphäre und Zentralmeridian für jeden Koordinatenpunkt basierend auf Ihren eingegebenen Koordinaten und dem ausgewählten Projektionstyp an.',
            note: 'Nach Abschluss der Berechnung zeigt das erste Ergebnis einen Hervorhebungseffekt an, um Ihnen bei der schnellen Lokalisierung zu helfen.'
        },
        {
            title: 'Kartenzonen anzeigen',
            description: 'Im rechten Kartenbereich können Sie Zonennummern an verschiedenen Positionen anzeigen, indem Sie die Maus bewegen. Die Karte zeigt die Zonennummerinformationen der Mausposition in Echtzeit an und hilft Ihnen, die Verteilung von UTM-Projektionszonen intuitiv zu verstehen.',
            note: 'Das Zonengitter auf der Karte wird dynamisch entsprechend Ihrem ausgewählten Projektionstyp (3°-Zone oder 6°-Zone) angezeigt.'
        },
        {
            title: 'Ergebnisse exportieren oder kopieren',
            description: 'Klicken Sie auf die Kopierschaltfläche neben jedem Ergebnis, um dieses Ergebnis in die Zwischenablage zu kopieren. Wenn es mehrere Ergebnisse gibt, können Sie die Schaltfläche "Stapel-Export" oben verwenden, um alle Ergebnisse als Textdatei zu speichern.',
            note: 'Kopiervorgänge lösen auch Hervorhebungsanimationen aus, sodass Sie genau wissen, welches Ergebnis kopiert wurde.'
        }
    ],

    successTitle: 'Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Projektionszonen-Finder verwendet. Sie können jetzt ganz einfach UTM-Projektionszonennummern für beliebige Koordinatenpunkte berechnen und die Arbeitseffizienz durch Stapelverarbeitungs- und Visualisierungsfunktionen verbessern.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Koordinatenformat-Konverter',
            description: 'Unterstützt die Umwandlung zwischen Dezimalgrad-, Grad-Minuten-Sekunden- und Grad-Minuten-Formaten, bietet Stapelumwandlungs- und Exportfunktionen.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        },
        {
            name: 'Kartenblatt-Teilungsrechner',
            description: 'Berechnet Kartenblattnummern basierend auf Breiten- und Längengradkoordinaten, unterstützt mehrere Maßstäbe.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Flächen- und Umfangrechner',
            description: 'Unterstützt das Zeichnen von Polygonen zur automatischen Berechnung von Fläche und Umfang, bietet mehrere Einheitenumstellungen.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Baseline-Rechner',
            description: 'Geben Sie Start- und Endkoordinaten ein, um Baseline-Länge und Azimut zu berechnen, unterstützt Fehlerfortpflanzungsanalyse.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Universales Transversales Mercator-Koordinatensystem',
            description: 'Detaillierte Einführung in die universale transversale Mercator-Projektion auf Wikipedia',
            url: 'https://de.wikipedia.org/wiki/Universale_Transversale_Mercator-Projektion'
        },
        {
            name: 'Kartenprojektion',
            description: 'Akademische Ressourcen zu Kartenprojektionsmethoden und -anwendungen',
            url: 'https://de.wikipedia.org/wiki/Kartenprojektion'
        },
        {
            name: 'Gauß-Krüger-Koordinatensystem',
            description: 'Einführung in häufig verwendete Kartenprojektionsmethoden in China',
            url: 'https://de.wikipedia.org/wiki/Gauß-Krüger-Koordinatensystem'
        }
    ]
}