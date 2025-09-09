export default {
    title: 'Anleitung zum Kartenblatt-Rechner - Online-Tool zur Abfrage von Kartenblatt-Nummern',
    functionTitle: 'Was ist der Kartenblatt-Rechner und wozu dient er?',
    intro: 'Unser <strong>Kartenblatt-Rechner</strong> ist ein leistungsstarkes Online-Tool, das schnell und präzise Kartenblatt-Nummern basierend auf Breiten- und Längengrad-Koordinaten berechnet. Das Tool unterstützt verschiedene Maßstäbe (einschließlich 1:500, 1:1000, 1:50000 usw.) und bietet Funktionen für Stapelberechnungen und Kartenblatt-Gittervisualisierung. Mit unserem <strong>Tool zur Abfrage von Kartenblatt-Nummern</strong> können Sie problemlos große Mengen an Koordinatendaten verarbeiten und die Ergebnisse im Excel- oder PDF-Format exportieren.',

    useCasesTitle: 'Häufige Anwendungen des Kartenblatt-Rechners',
    useCases: [
        'Verwaltung und Nummerierung von Kartenblättern in Vermessungs- und Kartierungsprojekten',
        'Organisation räumlicher Daten in Geographischen Informationssystemen (GIS)',
        'Blatteinteilung in der Landplanung und im Städtebau',
        'Aufteilung von Arbeitsbereichen bei geologischen Erkundungen und Ressourcenerhebungen',
        'Erstellung militärischer Karten und Aufteilung des Schlachtfelds',
        'Verarbeitung großräumiger geografischer Daten in Forschungsprojekten'
    ],

    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Bei der Kartenblatteinteilung für große Gebiete wird empfohlen, 3-Grad-Zonen für höhere Genauigkeit zu verwenden, während 6-Grad-Zonen für kleinere Gebiete verwendet werden können, um die Berechnungen zu vereinfachen.',

    conclusion: 'Der <strong>Kartenblatt-Rechner</strong> ist äußerst nützlich für Vermessungsingenieure, GIS-Fachleute, Stadtplaner und jeden, der Geodaten verarbeiten muss. Mit unserem Tool können Sie erhebliche Zeit bei manuellen Berechnungen sparen, Nummerierungsfehler vermeiden und die Arbeitseffizienz verbessern. Unser Tool macht den Prozess der Kartenblatteinteilung einfach und effizient, ohne dass professionelle Software installiert werden muss.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Welche Maßstäbe unterstützt der Kartenblatt-Rechner?',
            answer: 'Unser <strong>Online-Kartenblatt-Rechner</strong> unterstützt verschiedene gängige Maßstäbe von 1:500 bis 1:1000000, darunter 1:500, 1:1000, 1:2000, 1:5000, 1:10000, 1:25000, 1:50000, 1:100000, 1:250000, 1:500000 und 1:1000000. Sie können den geeigneten Maßstab entsprechend Ihren spezifischen Anforderungen wählen.'
        },
        {
            question: 'Was sind 3-Grad-Zonen und 6-Grad-Zonen?',
            answer: '3-Grad-Zonen und 6-Grad-Zonen sind zwei Zonierungsmethoden in der Gauß-Krüger-Projektion. 6-Grad-Zonen beginnen bei 0° östlicher Länge, wobei jede Zone 6° abdeckt, was den Globus in 60 Zonen unterteilt. 3-Grad-Zonen beginnen bei 1,5° östlicher Länge, wobei jede Zone 3° abdeckt, was den Globus in 120 Zonen unterteilt. 3-Grad-Zonen bieten eine höhere Genauigkeit und eignen sich für großmaßstäbliche Kartierung; 6-Grad-Zonen decken größere Bereiche ab und eignen sich für kleinmaßstäbliche Kartierung.'
        },
        {
            question: 'Wie berechne ich Kartenblatt-Nummern für mehrere Koordinatenpunkte im Stapel?',
            answer: 'Mit unserer <strong>Stapelberechnungsfunktion</strong> können Sie mehrere Koordinatenpunkte in das Stapeleingabefeld eingeben, jede Zeile im Format "Breitengrad,Längengrad,Beschreibung(optional)". Zum Beispiel: "39.9042,116.4074,Peking Zentrum". Nach der Eingabe klicken Sie auf die Schaltfläche "Kartenblatt berechnen", und das System berechnet automatisch die Kartenblatt-Nummern für alle Koordinatenpunkte.'
        },
        {
            question: 'In welchen Formaten können die Berechnungsergebnisse exportiert werden?',
            answer: 'Unser Tool unterstützt den Export der Berechnungsergebnisse in Excel- und PDF-Formaten. Das Excel-Format ist praktisch für die weitere Verarbeitung und Analyse der Daten, während das PDF-Format für den Druck und die Weitergabe geeignet ist. Sie können den Export durchführen, indem Sie auf die Schaltfläche "Nach Excel exportieren" oder "Als PDF exportieren" oben im Ausgabebereich klicken.'
        },
        {
            question: 'Was ist der Zweck der Kartengitter-Visualisierungsfunktion?',
            answer: 'Die Kartengitter-Visualisierungsfunktion zeigt intuitiv die Position und Verteilung aller berechneten Punkte auf der Karte an. Durch Klicken auf die Punkte im Gitter können Sie detaillierte Informationen zu diesem Punkt sehen. Das ausgewählte Kartenblatt wird hervorgehoben, was Ihnen hilft, die räumlichen Verteilungsmerkmale der Daten besser zu verstehen. Diese Funktion ist besonders nützlich zur Überprüfung der Berechnungsergebnisse und zur Durchführung räumlicher Analysen.'
        }
    ],

    tutorialTitle: 'Wie man den Kartenblatt-Rechner verwendet',
    steps: [
        {
            title: 'Koordinatendaten eingeben',
            description: 'Geben Sie die Koordinatendaten, die Sie berechnen möchten, in den Eingabebereich auf der linken Seite ein. Sie können einen einzelnen Koordinatenpunkt eingeben (geben Sie Breiten- und Längengrad in ihre jeweiligen Eingabefelder ein) oder mehrere Koordinatenpunkte im Stapel eingeben (geben Sie sie in das Stapeleingabefeld ein, jede Zeile im Format "Breitengrad,Längengrad,Beschreibung(optional)").',
            note: 'Die Koordinatenformate sollten in Dezimalgrad sein, z.B. Breitengrad 39.9042, Längengrad 116.4074.'
        },
        {
            title: 'Berechnungsparameter festlegen',
            description: 'Wählen Sie im Parametereinstellungsbereich den geeigneten Maßstab und die Projektionszonenmethode aus. Zu den gängigen Maßstäben gehören 1:500, 1:1000, 1:50000 usw., und zu den Zonenmethoden gehören 3-Grad-Zonen oder 6-Grad-Zonen.',
            note: 'Für große Maßstäbe (wie 1:500, 1:1000) wird empfohlen, 3-Grad-Zonen für höhere Genauigkeit zu verwenden.'
        },
        {
            title: 'Berechnung durchführen',
            description: 'Klicken Sie auf die Schaltfläche <strong>"Kartenblatt berechnen"</strong>, um die Berechnung zu starten. Das System berechnet automatisch die Kartenblatt-Nummer und zugehörige Informationen für jeden Punkt basierend auf den von Ihnen festgelegten Koordinaten und Parametern.',
            note: 'Der Berechnungsprozess ist in der Regel innerhalb von Sekunden abgeschlossen, selbst für große Datenmengen.'
        },
        {
            title: 'Ergebnisse anzeigen und analysieren',
            description: 'Nach Abschluss der Berechnung werden die Ergebnisse im Ausgabebereich auf der rechten Seite angezeigt. Sie können detaillierte Informationen wie Kartenblatt-Nummer, Koordinaten und Maßstab für jeden Punkt sehen. Der Kartengitter-Visualisierungsbereich zeigt die Verteilung aller Punkte auf der Karte.',
            note: 'Klicken Sie auf ein beliebiges Ergebniselement oder einen Punkt im Gitter, um detaillierte Informationen anzuzeigen und es hervorzuheben.'
        },
        {
            title: 'Ergebnisse exportieren',
            description: 'Wenn Sie die Ergebnisse speichern müssen, können Sie auf die Schaltfläche <strong>"Nach Excel exportieren"</strong> oder <strong>"Als PDF exportieren"</strong> oben im Ausgabebereich klicken. Das Excel-Format ist praktisch für die Datenverarbeitung, während das PDF-Format für den Druck und die Weitergabe geeignet ist.',
            note: 'Die exportierte Datei enthält vollständige Informationen zu allen Berechnungsergebnissen.'
        },
        {
            title: 'Erweiterte Funktionen nutzen',
            description: 'Sie können die Schaltfläche "Beispieldaten laden" verwenden, um die Funktionalität des Tools schnell zu testen, oder die Schaltfläche "Alles löschen", um alle Eingaben und Ergebnisse zurückzusetzen. Durch Klicken auf verschiedene Ergebniselemente können Sie deren Position im Kartengitter sehen.',
            note: 'Das Tool läuft vollständig im Browser, und Ihre Daten werden nicht auf einen Server hochgeladen, was Privatsphäre und Sicherheit gewährleistet.'
        }
    ],

    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Kartenblatt-Rechner verwendet. Jetzt können Sie ganz einfach Kartenblatt-Nummern für beliebige Koordinatenpunkte berechnen, die in der Vermessung, GIS, Stadtplanung und verschiedenen anderen Anwendungsszenarien verwendet werden können.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Koordinatenumrechner',
            description: 'Umrechnung von Breiten- und Längengrad-Koordinaten zwischen verschiedenen Koordinatensystemen, unterstützt viele Projektionssysteme.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS-Track-Wiedergabe',
            description: 'Hochladen und Visualisieren von GPS-Track-Daten, unterstützt viele Dateiformate.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gauß-Projektion-Rechner',
            description: 'Durchführung von Gauß-Krüger-Projektion Vorwärts- und Rückwärtsberechnungen, unterstützt 3-Grad- und 6-Grad-Zonen.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Höhenlinien-Generator',
            description: 'Erstellung von Höhenlinienkarten basierend auf Höhendaten, unterstützt viele Ausgabeformate.',
            url: 'https://www.ufreetools.com/tool/elevation-contour-generator'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Internationale Kartengittersysteme',
            description: 'Internationale Standards für Kartengitter und Blattnummerierungssysteme',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-grids'
        },
        {
            name: 'Transversale Mercator-Projektion',
            description: 'Detaillierte Erklärung der mathematischen Prinzipien hinter UTM/Gauß-Krüger-Projektionen',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection'
        },
        {
            name: 'Kartenprojektionen',
            description: 'Detaillierter Leitfaden zu Kartenprojektionen und Koordinatensystemen, bereitgestellt von australischen Regierungsbehörden',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-projections'
        }
    ]
}