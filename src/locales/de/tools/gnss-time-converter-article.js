export default {
    title: 'GNSS-Zeitkonverter-Anleitung - Online-Tool zur Umrechnung zwischen GPS-Wochen/Sekunden und UTC-Zeit',
    functionTitle: 'Was ist der GNSS-Zeitkonverter und was ist sein Zweck?',
    intro: 'Unser <strong>GNSS-Zeitkonverter</strong> ist ein professionelles Online-Tool, das die gegenseitige Umrechnung zwischen UTC-Zeit, GPS-Wochen/Sekunden und BeiDou-Zeit ermöglicht. Dieses Tool unterstützt die Berechnung des Julianischen Datums, Stapelverarbeitung und Zeitleisten-Visualisierungsfunktionen, geeignet für Satellitennavigationspositionierung, Vermessungstechnik, wissenschaftliche Forschung und andere Bereiche. Mit unserem <strong>GPS-Wochen/Sekunden-Umrechnungstool</strong> können Sie schnell und präzise verschiedene GNSS-Zeitsystem-Umrechnungsanforderungen erfüllen.',

    useCasesTitle: 'Häufige Anwendungsszenarien für den GNSS-Zeitkonverter',
    useCases: [
        'Zeitsynchronisation bei der Verarbeitung von Satellitennavigationspositionierungsdaten',
        'Analyse und Nachbearbeitung von GNSS-Empfängerdaten',
        'Präzise Zeitumrechnung in der Vermessungstechnik',
        'Vereinheitlichung von Zeitreferenzen in Luft- und Raumfahrtbereichen',
        'Fusion von Zeitdaten aus mehreren Systemen in wissenschaftlichen Forschungsprojekten',
        'Vergleichende Datenanalyse zwischen BeiDou- und GPS-Navigationssystemen'
    ],

    tipTitle: 'Professioneller Tipp:',
    tipContent: 'Achten Sie bei der Durchführung von hochpräzisen Zeitumrechnungen auf die Unterschiede der Schaltsekunden zwischen verschiedenen GNSS-Systemen. Die GPS-Zeit hat eine feste Schaltsekunden-Differenz zur UTC-Zeit, und die BeiDou-Zeit hat ebenfalls unterschiedliche Schaltsekunden-Differenzen zur UTC-Zeit. Diese Unterschiede ändern sich im Laufe der Zeit.',

    conclusion: 'Der <strong>GNSS-Zeitkonverter</strong> ist äußerst nützlich für Satellitennavigationsingenieure, Vermessungsfachleute, wissenschaftliche Forscher und jeden, der GNSS-Zeitdaten verarbeiten muss. Durch die Verwendung unseres Tools können Sie viel manuelle Berechnungszeit sparen, Umrechnungsfehler vermeiden und die Arbeitseffizienz verbessern. Unser Tool macht den GNSS-Zeitumrechnungsprozess einfach und effizient, ohne dass professionelle Software installiert werden muss.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Was sind GPS-Woche und Wochenzeit?',
            answer: 'Die GPS-Woche ist die kontinuierliche Zählung der Wochen ab dem 6. Januar 1980 um 00:00:00 Uhr, und die Wochenzeit (TOW) ist die Anzahl der Sekunden innerhalb einer Woche ab Sonntag 00:00 Uhr. Das GPS-Zeitsystem verwendet Atomzeit-Sekunden als Zeitreferenz, fügt nach seinem Beginn keine Schaltsekunden hinzu und behält die Zeitkontinuität bei. Diese Darstellungsmethode wird in der Satellitennavigation weit verbreitet verwendet, da sie die durch Schaltsekunden-Anpassungen verursachte Komplexität vermeiden kann.'
        },
        {
            question: 'Was ist der Unterschied zwischen UTC-Zeit und GPS-Zeit?',
            answer: 'UTC (Koordinierte Weltzeit) ist der internationale Zeitstandard, der periodisch Schaltsekunden hinzufügt, um sich an Änderungen der Erdrotationsgeschwindigkeit anzupassen. Die GPS-Zeit basiert auf der Atomzeit, ist seit dem 6. Januar 1980 mit der UTC-Zeit abgestimmt, wird aber nicht durch Schaltsekunden angepasst. Daher besteht zwischen der GPS-Zeit und der UTC-Zeit ein Unterschied von ganzen Sekunden, und dieser Unterschied nimmt zu, wenn Schaltsekunden hinzugefügt werden. Bis jetzt ist die GPS-Zeit der UTC-Zeit um etwa 18 Sekunden voraus.'
        },
        {
            question: 'Wie konvertiert man mehrere Zeitdaten im Stapel?',
            answer: 'Mit unserer <strong>Stapel-Zeitumrechnungsfunktion</strong> können Sie mehrere Zeitdaten zeilenweise in das Stapeleingabefeld eingeben. Geben Sie je nach ausgewähltem Eingabemodus (Datum und Uhrzeit, GPS-Zeit oder BeiDou-Zeit) die Daten im entsprechenden Format ein, ein Datensatz pro Zeile. Zum Beispiel ist das GPS-Zeitformat "Woche,Sekunden", wie "2234,172800". Nach Abschluss der Eingabe klicken Sie auf die Schaltfläche "Zeit umrechnen", und das System konvertiert automatisch alle Daten.'
        },
        {
            question: 'Was ist das Julianische Datum? Warum müssen wir es berechnen?',
            answer: 'Das Julianische Datum ist eine kontinuierliche Methode zur Zählung von Tagen, die Tage seit dem 1. Januar 4713 v. Chr. um 12:00 Uhr zählt und in der Astronomie und in Luft- und Raumfahrtbereichen weit verbreitet ist. Das Julianische Datum bietet eine einheitliche Methode der Zeitdarstellung, erleichtert die Zeitumrechnung zwischen Systemen und Berechnungen langer Zeiträume. In GNSS-Anwendungen wird das Julianische Datum häufig für Orbit-Berechnungen und Zeitsynchronisationsszenarien verwendet.'
        },
        {
            question: 'Was ist der Zweck der Zeitleisten-Visualisierungsfunktion?',
            answer: 'Die Zeitleisten-Visualisierungsfunktion kann intuitiv die relativen Positionsbeziehungen aller umgerechneten Zeitpunkte in einer grafischen Oberfläche anzeigen. Durch die Betrachtung der Zeitleiste können Sie schnell die Intervalle und die Verteilung zwischen verschiedenen Zeitpunkten verstehen, was hilft, Anomalien oder Muster in den Daten zu entdecken. Diese Funktion ist besonders geeignet für die Analyse von GNSS-Daten mit langen Zeitreihen.'
        }
    ],

    tutorialTitle: 'Wie man den GNSS-Zeitkonverter verwendet',
    steps: [
        {
            title: 'Eingabemodus auswählen',
            description: 'Wählen Sie den geeigneten Eingabemodus im oberen Bereich des linken Eingabebereichs: Datum und Uhrzeit, GPS-Zeit oder BeiDou-Zeit. Wählen Sie den entsprechenden Modus gemäß Ihrem Datentyp, um die Eingabedaten korrekt zu analysieren.',
            note: 'Der Datum- und Uhrzeitmodus unterstützt das Standard-ISO-Format, wie 2023-01-01T00:00:00.'
        },
        {
            title: 'Zeitdaten eingeben',
            description: 'Geben Sie die Zeitdaten in das entsprechende Eingabefeld ein. Sie können einen einzelnen Zeitpunkt oder mehrere Zeitpunkte im Stapeleingabefeld eingeben, ein Datensatz pro Zeile. Das System unterstützt mehrere Eingabeformate, um verschiedenen Anforderungen gerecht zu werden.',
            note: 'Stellen Sie bei der Stapeleingabe sicher, dass jede Datenzeile ein konsistentes Format hat, um Umrechnungsfehler zu vermeiden.'
        },
        {
            title: 'Ausgabeformat festlegen',
            description: 'Wählen Sie das Ausgabezeitformat im Parametereinstellungsbereich. Sie können das Standard-ISO-Format (YYYY-MM-DD HH:mm:ss) oder ein benutzerdefiniertes Format wählen. Wählen Sie das geeignete Format gemäß den nachfolgenden Verwendungsanforderungen.',
            note: 'Das ISO-Format ist für die Programmverarbeitung bequem, während das benutzerdefinierte Format für das menschliche Lesen bequem ist.'
        },
        {
            title: 'Umrechnung ausführen',
            description: 'Klicken Sie auf die Schaltfläche <strong>"Zeit umrechnen"</strong>, um die Umrechnung zu starten. Das System berechnet und zeigt automatisch UTC-Zeit, GPS-Zeit, BeiDou-Zeit, Julianisches Datum und andere Informationen basierend auf Ihrem ausgewählten Eingabemodus und eingegebenen Daten an.',
            note: 'Der Umrechnungsprozess wird in der Regel innerhalb von Sekunden abgeschlossen, selbst für große Datenmengen.'
        },
        {
            title: 'Ergebnisse anzeigen und exportieren',
            description: 'Nach Abschluss der Umrechnung werden die Ergebnisse im rechten Ausgabebereich angezeigt. Sie können detaillierte Umrechnungsinformationen für jeden Zeitpunkt anzeigen, die Zeitleisten-Visualisierungsfunktion verwenden, um die zeitliche Verteilung zu sehen, oder auf die Schaltfläche "CSV exportieren" klicken, um die Ergebnisse als Datei zu speichern.',
            note: 'Klicken Sie auf die Schaltfläche "Kopieren" für jedes Ergebniselement, um das Umrechnungsergebnis dieses Datensatzes schnell zu kopieren.'
        }
    ],

    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren GNSS-Zeitkonverter verwendet. Jetzt können Sie einfach gegenseitige Umrechnungen zwischen UTC-Zeit, GPS-Zeit und BeiDou-Zeit für Satellitennavigation, Vermessungstechnik, wissenschaftliche Forschung und verschiedene andere Anwendungsszenarien durchführen.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Koordinatenkonverter',
            description: 'Konvertiert Breiten- und Längenkoordinaten zwischen verschiedenen Koordinatensystemen, kompatibel mit verschiedenen Projektionssystemen.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS-Strecken-Wiedergabe',
            description: 'Lädt und visualisiert GPS-Streckendaten, kompatibel mit verschiedenen Dateiformaten.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gauß-Projektionsrechner',
            description: 'Führt direkte und inverse Berechnungen der Gauß-Krüger-Projektion durch, kompatibel mit 3- und 6-Grad-Zonen.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Kartenblatt-Rechner',
            description: 'Berechnet Kartenblatt-Nummern basierend auf Breiten- und Längenkoordinaten, kompatibel mit verschiedenen Maßstäben.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Grundlagen der Zeit in globalen Satellitennavigationssystemen',
            description: 'Detaillierte Einführung in GNSS-Zeitsysteme',
            url: 'https://www.ngs.noaa.gov/CORS/GNSS-Time.shtml'
        },
        {
            name: 'GPS-Zeitsystem erklärt',
            description: 'Detaillierte Einführung in das GPS-Zeitsystem',
            url: 'https://en.wikipedia.org/wiki/GPS_time'
        },
        {
            name: 'BeiDou-Zeitsystem',
            description: 'Erklärung der Zeitreferenz des BeiDou-Navigationssystems',
            url: 'https://en.wikipedia.org/wiki/BeiDou'
        }
    ]
}