export default {
    title: 'Benutzerhandbuch für Flächen- und Umfangrechner - Online-Polygon Flächen- und Umfangmesswerkzeug',
    functionTitle: 'Was ist der Flächen- und Umfangrechner und wofür wird er verwendet?',
    intro: 'Unser <strong>Flächen- und Umfangrechner</strong> ist ein leistungsstarkes Online-Tool, mit dem Sie Polygone auf einer Karte zeichnen und automatisch deren Fläche und Umfang berechnen können. Das Tool unterstützt mehrere Einheitenumstellungen, darunter Quadratmeter, Hektar, Quadratkilometer und Mu, und bietet einen Erd-Ellipsoid-Berechnungsmodus für genauere Ergebnisse. Sie können auch direkt Koordinatenpunkte eingeben, um Fläche und Umfang zu berechnen, und unterstützt den Export in mehrere Formate, darunter GeoJSON, KML, Bilder, CSV, TXT und PDF.',

    useCasesTitle: 'Häufige Anwendungsszenarien des Flächen- und Umfangrechners',
    useCases: [
        'Landvermessung und -bewertung, Berechnung von Fläche und Umfang von Grundstücken',
        'Stadtplanung und -design, Messung von Baubereichen und öffentlichen Räumen',
        'Agrarmanagement, Berechnung von Ackerfläche und Bewässerungsbereich',
        'Immobilienbewertung, Messung von Grundstücksgrenzen und nutzbarer Fläche',
        'Umweltüberwachung, Berechnung des Bereichs von Schutzgebieten und betroffenen Gebieten',
        'Ingenieurbau, Messung von Baubereichen und Materialbedarf'
    ],

    tipTitle: 'Professionelle Tipps:',
    tipContent: 'Bei der Messung großer Gebiete wird empfohlen, den Ellipsoid-Berechnungsmodus zu verwenden, um genauere Ergebnisse zu erzielen. Sie können direkt Koordinatenpunkte eingeben, um die Fläche und den Umfang komplexer Gebiete zu berechnen, und mehrere Koordinateneingabeformate werden unterstützt. Das Wechseln zwischen verschiedenen Einheiten kann Ihnen helfen, die Messergebnisse auf die geeignetste Art und Weise darzustellen.',

    conclusion: 'Der <strong>Flächen- und Umfangrechner</strong> ist für Landvermesser, Stadtplaner, Agrarmanager, Immobilienbewerter und jeden, der eine präzise Flächenmessung benötigt, sehr nützlich. Mit unserem Tool können Sie viel manuelle Rechenzeit sparen, Messfehler vermeiden und Daten besser verstehen durch Visualisierungsfunktionen. Unser Tool macht den Flächen- und Umfangberechnungsprozess einfach und effizient, ohne professionelle Software installieren zu müssen.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Welche Berechnungsmodi unterstützt der Flächen- und Umfangrechner?',
            answer: 'Unser <strong>Flächen- und Umfangrechner</strong> unterstützt zwei Berechnungsmodi: planare Berechnung und ellipsoidale Berechnung. Die planare Berechnung eignet sich für die Messung kleiner Gebiete mit schneller Berechnungsgeschwindigkeit; die ellipsoidale Berechnung berücksichtigt den Einfluss der Erdkrümmung, eignet sich für die Messung großer Gebiete mit genaueren Ergebnissen. Sie können je nach spezifischen Anforderungen den geeigneten Berechnungsmodus wählen.'
        },
        {
            question: 'Wie zeichnet man Polygone auf der Karte zur Messung?',
            answer: 'Mit unserem <strong>Online-Flächenmesswerkzeug</strong> wählen Sie einfach das Polygon-Zeichenwerkzeug in der linken Werkzeugleiste aus und klicken dann auf die Karte, um die Eckpunkte des Polygons zu bestimmen. Doppelklicken Sie auf den letzten Eckpunkt, um das Zeichnen abzuschließen, und das System berechnet und zeigt automatisch Fläche und Umfang an. Sie können auch Rechteck- und Kreiswerkzeuge verwenden, um regelmäßige Formen zur Messung zu zeichnen.'
        },
        {
            question: 'Welche Flächen- und Längeneinheiten werden unterstützt?',
            answer: 'Unser Tool unterstützt mehrere häufig verwendete Flächen- und Längeneinheiten. Flächeneinheiten umfassen Quadratmeter, Hektar, Quadratkilometer, Acres und Mu; Längeneinheiten umfassen Meter, Kilometer und Meilen. Sie können jederzeit die Einheit wechseln, um sich an verschiedene Anwendungsszenarien und regionale Gewohnheiten anzupassen, und die Messergebnisse werden in Echtzeit aktualisiert.'
        },
        {
            question: 'Wie verwendet man die Koordinateneingabefunktion?',
            answer: 'Unsere <strong>Flächenrechner-Koordinateneingabe</strong>-Funktion ermöglicht es Ihnen, direkt Koordinatenpunkte einzugeben, um Fläche und Umfang zu berechnen, ohne manuell auf der Karte zu zeichnen. Sie können mehrere Formate zur Eingabe von Koordinaten verwenden, darunter das Format "Längengrad,Breitengrad", "[Längengrad,Breitengrad]" oder "Längengrad Breitengrad", mit einem Punkt pro Zeile. Nach Eingabe von mindestens 3 Punkten klicken Sie auf die Schaltfläche "Berechnen", und das System erstellt automatisch ein Polygon und berechnet dessen Fläche und Umfang. Dies ist besonders nützlich für die Messung von Gebieten mit bekannten Koordinaten.'
        },
        {
            question: 'Wie exportiert man Messergebnisse?',
            answer: 'Nach Abschluss der Messung können Sie die Ergebnisse in mehreren Formaten exportieren: GeoJSON und KML sind standardisierte geospatial Datenformate, die in andere GIS-Software importiert werden können; die Bildexportfunktion kann die aktuelle Kartenansicht als PNG-Bild speichern; CSV- und TXT-Formate sind praktisch zum Öffnen und Analysieren von Daten in Tabellenkalkulationssoftware wie Excel; das PDF-Format eignet sich zur Erstellung formeller Berichte und Dokumente. Wählen Sie entsprechend Ihren Anforderungen das am besten geeignete Exportformat.'
        }
    ],

    tutorialTitle: 'Wie verwendet man den Flächen- und Umfangrechner',
    steps: [
        {
            title: 'Zeichenwerkzeuge und Berechnungsmodus auswählen',
            description: 'Bevor Sie mit der Messung beginnen, wählen Sie zunächst das geeignete Zeichenwerkzeug (Polygon, Rechteck oder Kreis) in der linken Werkzeugleiste aus. Wählen Sie dann den Berechnungsmodus, für große Gebiete wird empfohlen, die Ellipsoid-Berechnung zu wählen, um genauere Ergebnisse zu erzielen.',
            note: 'Zeichenwerkzeuge und Berechnungsmodus können bei Bedarf jederzeit gewechselt werden.'
        },
        {
            title: 'Messbereich auf der Karte zeichnen',
            description: 'Nach Aktivierung des Zeichenwerkzeugs klicken Sie auf die Karte, um die Gebietsgrenze zu bestimmen. Für das Polygon-Werkzeug klicken Sie nacheinander auf jeden Eckpunkt und doppelklicken auf den letzten Eckpunkt, um das Zeichnen abzuschließen. Während des Zeichnungsprozesses werden die Fläche und der Umfang des aktuellen Gebiets in Echtzeit angezeigt.',
            note: 'Sie können die Gebietsform durch Ziehen der Eckpunkte anpassen, und die Messergebnisse werden in Echtzeit aktualisiert.'
        },
        {
            title: 'Koordinateneingabefunktion verwenden',
            description: 'Wenn Sie bereits Koordinatenpunktdaten des Gebiets haben, können Sie direkt die Koordinateneingabefunktion verwenden. Geben Sie im Koordinateneingabefeld einen Koordinatenpunkt pro Zeile ein (Format: Längengrad,Breitengrad) und klicken Sie dann auf die Schaltfläche "Berechnen", woraufhin das System automatisch ein Polygon erstellt und dessen Fläche und Umfang berechnet.',
            note: 'Unterstützt mehrere Koordinateneingabeformate, darunter "Längengrad,Breitengrad", "[Längengrad,Breitengrad]" oder "Längengrad Breitengrad".'
        },
        {
            title: 'Messergebnisse anzeigen und verwalten',
            description: 'In der Ergebnisliste unter dem rechten Kartenbereich können Sie die Fläche und den Umfang aller gezeichneten Gebiete anzeigen. Jedes Gebiet hat eine entsprechende Typkennung und Messdaten, was den Vergleich und die Analyse erleichtert.',
            note: 'Die Ergebnisliste wird in Echtzeit aktualisiert und zeigt die Anzahl und Daten aller aktuellen Messgebiete an.'
        },
        {
            title: 'Messergebnisse exportieren',
            description: 'Nach Abschluss der Messung können Sie die Ergebnisse in mehreren Formaten exportieren, darunter GeoJSON, KML, Bilder, CSV, TXT und PDF. Klicken Sie auf die Export-Schaltfläche in der Werkzeugleiste und wählen Sie das entsprechende Format, um den Exportvorgang abzuschließen.',
            note: 'Die exportierte Datei enthält alle Messinformationen, die für andere GIS-Software, Datenanalyse oder zum Teilen mit anderen verwendet werden können. CSV- und TXT-Formate sind praktisch zum Öffnen in Tabellenkalkulationssoftware, und das PDF-Format eignet sich für formelle Berichte.'
        }
    ],

    successTitle: 'Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Flächen- und Umfangrechner verwendet. Jetzt können Sie ganz einfach Gebiete auf der Karte zeichnen und deren Fläche und Umfang berechnen und durch mehrere Einheiten und Ansichtsmodi die beste Messerfahrung erhalten.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Baseline-Rechner',
            description: 'Geben Sie Start- und Endpunktkoordinaten ein, um Baseline-Länge und Azimut zu berechnen, unterstützt Fehlerfortpflanzungsanalyse.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        },
        {
            name: 'Kartenblatt-Teilungsrechner',
            description: 'Berechnen Sie die Kartenblattnummer basierend auf Längen- und Breitengradkoordinaten, unterstützt mehrere Maßstäbe.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Koordinatenkonverter',
            description: 'Konvertieren Sie Längen- und Breitengradkoordinaten zwischen verschiedenen Koordinatensystemen, unterstützt mehrere Projektionssysteme.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GNSS-Zeitkonverter',
            description: 'Realisieren Sie die gegenseitige Umwandlung zwischen UTC-Zeit und GPS-Wochensekunden, BeiDou-Zeit.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'GeographicLib-Bibliothek',
            description: 'Open-Source-Bibliothek mit Schwerpunkt auf hochpräzise geospatial Berechnungen',
            url: 'https://geographiclib.sourceforge.io/'
        },
        {
            name: 'Leaflet-Kartenbibliothek',
            description: 'Open-Source interaktive Karten-JavaScript-Bibliothek',
            url: 'https://leafletjs.com/'
        },
        {
            name: 'Turf.js-Spatialanalysebibliothek',
            description: 'JavaScript-Bibliothek für geospatial Analyse',
            url: 'https://turfjs.org/'
        },
        {
            name: 'jsPDF-Bibliothek',
            description: 'JavaScript-Bibliothek zur Generierung von PDF-Dokumenten auf der Client-Seite',
            url: 'https://github.com/parallax/jsPDF'
        }
    ]
}