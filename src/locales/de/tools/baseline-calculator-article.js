export default {
    title: 'Basislinie-Rechner Bedienungsanleitung - Online-Tool zur Berechnung von Länge und Azimut von Koordinaten-Basislinien',
    functionTitle: 'Was ist ein Basislinie-Rechner und wozu dient er?',
    intro: 'Unser <strong>Basislinie-Rechner</strong> ist ein professionelles Online-Tool, das schnell und präzise die Basislinienlänge und den Azimut zwischen zwei Punkten berechnet. Dieses Tool unterstützt die Eingabe von Koordinatenvarianzen, kann Fehlerfortpflanzungsergebnisse berechnen und Fehlerellipsen-Visualisierungen erzeugen. Es ist geeignet für Vermessungstechnik, GIS-Anwendungen, Bauingenieurwesen und geografische Forschung. Mit unserem <strong>Koordinaten-Basislinie-Berechnungstool</strong> können Sie große Mengen an Koordinatendaten einfach verarbeiten und Ergebnisse auf intuitive visuelle Weise darstellen.',

    useCasesTitle: 'Häufige Anwendungsszenarien für den Basislinie-Rechner',
    useCases: [
        'Polygonzugmessung und Kontrollnetzausgleichung in der Vermessungstechnik',
        'Räumliche Datenanalyse und Distanzberechnung in GIS-Projekten',
        'Bauabsteckung und Vermessung im Bauingenieurwesen',
        'Analyse räumlicher Beziehungen in der geografischen Forschung',
        'Basislinienlösung in Navigations-Positionierungssystemen',
        'Punktbeziehungsanalyse in der geologischen Erkundung'
    ],

    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Bei der Durchführung von Hochpräzisionsmessungen wird empfohlen, Koordinatenvarianzdaten einzugeben, um genauere Fehleranalyseergebnisse zu erhalten. Die Fehlerellipsen-Visualisierungsfunktion kann Ihnen helfen, die Verteilung von Punktpositionsfehlern intuitiv zu verstehen.',

    conclusion: 'Der <strong>Basislinie-Rechner</strong> ist äußerst nützlich für Vermessungsingenieure, GIS-Fachleute, Bauingenieure und jeden, der Koordinatendaten verarbeiten muss. Durch die Verwendung unseres Tools können Sie erhebliche manuelle Berechnungszeit sparen, Berechnungsfehler vermeiden und Daten durch Visualisierungsfunktionen besser verstehen. Unser Tool macht den Basislinie-Berechnungsprozess einfach und effizient, ohne dass professionelle Software installiert werden muss.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Was sind Basislinienlänge und Azimut?',
            answer: 'Die <strong>Basislinienlänge</strong> bezieht sich auf die geradlinige Entfernung zwischen zwei Punkten, und der <strong>Azimut</strong> ist der Winkel im Uhrzeigersinn von Norden zur Basislinie. In der Vermessungstechnik ist eine Basislinie eine grundlegende Komponente eines Kontrollnetzes, und ihre Länge und ihr Azimut sind wichtige Parameter, die die räumliche Beziehung zwischen zwei Punkten beschreiben. Durch die genaue Berechnung von Basislinienlänge und Azimut können zuverlässige Grundlagendaten für nachfolgende Vermessungsarbeiten bereitgestellt werden.'
        },
        {
            question: 'Wie gebe ich Koordinatenvarianzdaten ein?',
            answer: 'Bei der Verwendung unseres <strong>Basislinie-Rechners</strong> können Sie die X- und Y-Koordinatenvarianzen der Start- und Endpunkte im Einzelpunkteingabemodus direkt eingeben oder Varianzinformationen nach jeder Datenzeile im Stapeleingabemodus hinzufügen. Das Format der Varianzdaten ist: Startpunkt X, Startpunkt Y, Endpunkt X, Endpunkt Y, Startpunkt X Varianz, Startpunkt Y Varianz, Endpunkt X Varianz, Endpunkt Y Varianz. Nach der Eingabe der Varianzdaten berechnet das Tool automatisch Fehlerfortpflanzungsergebnisse und erzeugt Fehlerellipsen.'
        },
        {
            question: 'Was stellt die Fehlerellipse dar?',
            answer: 'Die <strong>Fehlerellipse</strong> ist ein grafisches Werkzeug, das die Verteilung von Punktpositionsfehlern darstellt. Die große und kleine Halbachse der Ellipse repräsentieren jeweils die maximale und minimale Fehlerrichtung, und der Orientierungswinkel repräsentiert die Richtung der großen Halbachse. Durch die Visualisierung der Fehlerellipse können Sie die Größe und die Richtungsverteilung von Punktpositionsfehlern intuitiv verstehen, was für die Bewertung der Messgenauigkeit und die Durchführung der Qualitätskontrolle sehr wichtig ist.'
        },
        {
            question: 'Wie verarbeite ich mehrere Basislinie-Berechnungen im Stapel?',
            answer: 'Mit unserer <strong>Stapel-Basislinie-Berechnungsfunktion</strong> können Sie mehrere Basisliniendaten zeilenweise in das Stapeleingabefeld eingeben. Das Format jeder Datenzeile ist: Startpunkt X, Startpunkt Y, Endpunkt X, Endpunkt Y [, Startpunkt X Varianz, Startpunkt Y Varianz, Endpunkt X Varianz, Endpunkt Y Varianz]. Nach Abschluss der Eingabe klicken Sie auf die Schaltfläche "Basislinie berechnen", und das System berechnet automatisch die Länge, den Azimut und die zugehörigen Fehlerinformationen für alle Basislinien.'
        },
        {
            question: 'Was ist der Zweck der Kartenvisualisierungsfunktion?',
            answer: 'Die Kartenvisualisierungsfunktion kann alle berechneten Basislinien und Punkte in einem zweidimensionalen Koordinatensystem intuitiv darstellen. Startpunkte werden durch grüne Punkte, Endpunkte durch rote Punkte dargestellt, und Basislinien werden durch blaue Linien verbunden. Wenn Varianzdaten eingegeben werden, werden auch rote Fehlerellipsen angezeigt. Diese Funktion ist besonders geeignet, um die Plausibilität der Daten zu überprüfen, Ausreißer zu identifizieren und räumliche Beziehungsanalysen durchzuführen.'
        }
    ],

    tutorialTitle: 'Wie man den Basislinie-Rechner verwendet',
    steps: [
        {
            title: 'Eingabemodus auswählen',
            description: 'Wählen Sie den geeigneten Eingabemodus oben im linken Eingabebereich: Einzelpunkteingabe oder Stapeleingabe. Die Einzelpunkteingabe eignet sich für die Berechnung weniger Basislinien, während die Stapeleingabe für die Verarbeitung großer Datenmengen geeignet ist.',
            note: 'Der Stapeleingabemodus unterstützt Berechnungen mit Varianzdaten und bietet eine flexiblere Formatierung.'
        },
        {
            title: 'Koordinatendaten eingeben',
            description: 'Geben Sie Koordinatendaten entsprechend dem gewählten Eingabemodus ein. Im Einzelpunkteingabemodus geben Sie die X- und Y-Koordinaten der Start- und Endpunkte separat ein; im Stapeleingabemodus geben Sie mehrere Basisliniendaten zeilenweise ein, wobei jede Zeile das Format hat: Startpunkt X, Startpunkt Y, Endpunkt X, Endpunkt Y.',
            note: 'Wenn eine Fehleranalyse erforderlich ist, sollten auch die entsprechenden Koordinatenvarianzdaten eingegeben werden.'
        },
        {
            title: 'Berechnung durchführen',
            description: 'Klicken Sie auf die Schaltfläche <strong>"Basislinie berechnen"</strong>, um die Berechnung zu starten. Das System berechnet automatisch die Länge und den Azimut jeder Basislinie basierend auf Ihren eingegebenen Koordinatendaten und berechnet Fehlerfortpflanzungsergebnisse und erzeugt Fehlerellipsenparameter, wenn Varianzdaten eingegeben werden.',
            note: 'Der Berechnungsprozess ist in der Regel innerhalb von Sekunden abgeschlossen, selbst für große Datenmengen.'
        },
        {
            title: 'Ergebnisse anzeigen und analysieren',
            description: 'Nach Abschluss der Berechnung werden die Ergebnisse im Ausgabebereich rechts angezeigt. Sie können detaillierte Informationen für jede Basislinie einsehen, einschließlich Basislinienlänge, Azimut, Fehlerfortpflanzungsergebnisse und Fehlerellipsenparameter. Der Kartenvisualisierungsbereich zeigt die Verteilung aller Basislinien und Punkte an.',
            note: 'Klicken Sie auf die Schaltfläche "Kopieren" für ein beliebiges Ergebniselement, um die Berechnungsergebnisse für diesen Datensatz schnell zu kopieren.'
        },
        {
            title: 'Bericht exportieren',
            description: 'Wenn Sie die Ergebnisse speichern müssen, können Sie auf die Schaltfläche <strong>"CSV exportieren"</strong> oder <strong>"TXT exportieren"</strong> oben im Ausgabebereich klicken. Das System generiert einen Bericht mit allen Berechnungsergebnissen, der für den Druck und die Weitergabe geeignet ist.',
            note: 'Der exportierte Bericht enthält vollständige Berechnungsinformationen, die für Projektdokumentation und Berichterstattung geeignet sind.'
        }
    ],

    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Basislinie-Rechner verwendet. Jetzt können Sie einfach die Basislinienlänge und den Azimut zwischen beliebigen zwei Punkten berechnen, Fehleranalysen durchführen und Daten durch Visualisierungsfunktionen besser verstehen.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Koordinatenumrechner',
            description: 'Konvertieren Sie Breiten- und Längenkoordinaten zwischen verschiedenen Koordinatensystemen, unterstützt mehrere Projektionssysteme.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Kartenblattrechner',
            description: 'Berechnen Sie Kartenblattummern basierend auf Breiten- und Längenkoordinaten, unterstützt mehrere Maßstäbe.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'GNSS-Zeitumrechner',
            description: 'Konvertieren Sie zwischen UTC-Zeit und GPS-Wochensekunden, BeiDou-Zeit.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Gauß-Projektionsrechner',
            description: 'Führen Sie Gauß-Krüger-Projektion Vorwärts- und Rückwärtsberechnungen durch, unterstützt 3-Grad- und 6-Grad-Zonen.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'NOAA - National Geodetic Survey',
            description: 'Messreferenzen, Koordinatensysteme und Messwerkzeuge, die vom US National Geodetic Survey bereitgestellt werden',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        },
        {
            name: 'Internationale Vereinigung der Vermessungsingenieure (FIG)',
            description: 'Vermessungsstandards, Best Practices und Forschungsressourcen, die von der Internationalen Vereinigung der Vermessungsingenieure bereitgestellt werden',
            url: 'https://www.fig.net/resources/publications/'
        },
        {
            name: 'Journal of Surveying Engineering - ASCE Library',
            description: 'Akademische Zeitschrift für Vermessungstechnik, herausgegeben von der American Society of Civil Engineers, enthält die neuesten Forschungsergebnisse und Methoden',
            url: 'https://ascelibrary.org/journal/jsued2'
        }
    ]
}