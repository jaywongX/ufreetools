export default {
    title: 'Vier-Parameter-Transformator: Batch-Anleitung zur ebenen Ähnlichkeits- und Helmert-Transformation',
    functionTitle: 'Wie gewährleistet der Vier-Parameter-Transformator die Ein-Klick-Integration regionaler Koordinaten?',
    intro: '<p>Der Vier-Parameter-Transformator basiert auf Modellen der ebenen Ähnlichkeit, vereinfachtem Bursa und Helmert und deckt alle Parameter einschließlich ΔX-, ΔY-Verschiebung, Drehung θ und Maßstab m ab. Durch reine Frontend-Algorithmen kann das System lokal im Browser Einzelpunkt- und Batch-Vorwärts-/Rückwärtsberechnungen durchführen und in Echtzeit Residuenvektoren, RMSE, 95%-Konfidenzintervalle und Genauigkeits-Wärmekarten bereitstellen, wodurch sichergestellt wird, dass jede Koordinatenintegration nachverfolgbar, verifizierbar und bewertbar ist.</p>',
    useCasesTitle: 'Tool-Funktionen und Anwendungsszenarien',
    useCases: {
        first: '<strong>Integration von Ingenieurkoordinaten</strong>: Bei städtischen Erneuerungs- oder Schienenverkehrsprojekten wird schnell von lokalen unabhängigen Koordinatensystemen auf einheitliche Ingenieurkoordinatensysteme abgebildet, wodurch die Effizienz der Zusammenarbeit in Design und Bau verbessert wird.',
        second: '<strong>Regionale Projektionsmosaik</strong>: Fernerkundungs- und UAV-Ergebnisse stammen oft aus verschiedenen Projektionszonen, der Vier-Parameter-Transformator kann ebene Kontrollpunkte batchweise aktualisieren, um nahtlose Verknüpfung zu erreichen.',
        third: '<strong>Fusion benutzerdefinierter ebener Systeme</strong>: Integration selbst erstellter Koordinatensysteme in Fabriken oder Industrieparks, unter Verwendung des Vier-Parameter-Modells zur Beseitigung von Maßstabs- und Drehdifferenzen, Erreichung von Konsistenz zwischen Zeichnungen und Feldbedingungen.',
        fourth: '<strong>Ergebnisüberprüfung und Abnahme</strong>: Ausgabe von Residuenverteilungshistogrammen und Konfidenzintervallen zur Einreichung quantitativer Bewertungsberichte an Kunden oder Aufsichtsbehörden.'
    },
    tipTitle: 'Produktseitenbild',
    logoAlt: 'Vorschau des Vier-Parameter-Transformator-Produkts',
    tipContent: 'Diese Illustration kann von Suchmaschinen für Rich-Media-Snippets in Suchergebnissen gecrawlt werden.',
    conclusion: '<p>Mit dem Vier-Parameter-Transformator können Vermessungs-, Design- und Aufsichtsteams lokalisierte Konvertierungen, Residuenprüfungen und Berichtsausgaben ohne Offenlegung originaler Koordinaten abschließen, wodurch die Anforderungen des Projekt-Lebenszyklus an Datenrückverfolgbarkeit und -verifizierung erfüllt werden. Für weitere Projektionszonen-Transformationen kann es mit dem <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">Batch-Koordinatenzonen-Switcher</a> verwendet werden; für internationale Standards besuchen Sie <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">OGC-Koordinatentransformation</a> für weitere Anleitungen.</p>',
    faqTitle: 'Häufig gestellte Fragen',
    faqs: {
        q1: {
            question: 'Wie gewährleistet der Vier-Parameter-Transformator die Genauigkeit und Stabilität der ebenen Ähnlichkeitstransformation?',
            answer: '<p>Das Tool verwendet die Methode der kleinsten Quadrate zur Lösung von ΔX, ΔY, θ, m und gibt RMSE, maximales Residuum und 95%-Konfidenzintervall aus. Benutzer können Matrixoperationen über Protokolle überprüfen, um die Genauigkeit der ebenen Ähnlichkeitstransformation zu verifizieren.</p>'
        },
        q2: {
            question: 'Können fehlerhafte Koordinaten beim Batch-Import automatisch übersprungen werden?',
            answer: '<p>Ja. Wenn während der Analysephase inkonsistente Spaltenzählungen oder anomale Daten gefunden werden, protokolliert und überspringt das System diesen Eintrag und verarbeitet die verbleibenden Koordinaten weiter, um eine unterbrechungsfreie Batch-Konvertierung zu gewährleisten.</p>'
        },
        q3: {
            question: 'Unterstützt der Vier-Parameter-Transformator Vorwärts- und Rückwärtsberechnungen?',
            answer: '<p>Ja. Das Tool bietet Schaltflächen für Vorwärtsberechnung (Quelle → Ziel) und Rückwärtsberechnung (Ziel → Quelle), was den Vergleich von Koordinaten vor und nach der Transformation und die Erstellung überlagerter Visualisierungen erleichtert.</p>'
        },
        q4: {
            question: 'Wie zeigt man die Residuenverteilung im Vier-Parameter-Transformator an?',
            answer: '<p>Nach Abschluss der Konvertierung zeichnet das System automatisch Verteilungsdiagramme der Kontrollpunkte, Residuen-Histogramme und Genauigkeits-Wärmekartengitter, die Ihnen helfen zu bestimmen, ob Punktgruppen gleichmäßig sind und Fehler konzentriert auftreten.</p>'
        },
        q5: {
            question: 'Können Berichte, die vom Vier-Parameter-Transformator generiert wurden, zitiert werden?',
            answer: '<p>Ja. Der Ergebnisbereich unterstützt CSV-Export, Protokolle können mit einem Klick kopiert und Diagramme als Screenshots in technische Berichte eingefügt werden, was den Anforderungen für Ingenieurabnahme oder -archivierung entspricht.</p>'
        }
    },
    tutorialTitle: 'Bedienungsanleitung des Vier-Parameter-Transformators',
    steps: {
        step1: {
            title: 'Quellkoordinaten und Kontrollpunkte vorbereiten',
            description: 'Organisieren Sie zunächst Quellkoordinaten mit entsprechenden Zielkoordinaten und bestätigen Sie das Trennzeichenformat, wobei sichergestellt wird, dass jede Datenzeile X, Y und optionale Zielwerte sowie Punktbezeichnungen enthält.'
        },
        step2: {
            title: 'Modell auswählen und Parameter eingeben',
            description: 'In den "Modelleinstellungen" wählen Sie ebene Ähnlichkeit, vereinfachtes Bursa-Modell oder Helmert-Modell, geben ΔX, ΔY, θ, m ein oder lassen es leer, um auf Ausgleichsergebnisse zu warten.'
        },
        step3: {
            title: 'Beispiel laden oder Datei importieren',
            description: 'Sie können "Beispiel laden" für eine schnelle Erfahrung verwenden oder CSV/TXT-Dateien ziehen, um große Mengen an Koordinaten zu importieren und automatisch zu analysieren.'
        },
        step4: {
            title: 'Ausgleich und Konvertierung durchführen',
            description: 'Fügen Sie gepaarte Koordinaten im Bereich für Gemeinsame Punktlösung ein, klicken Sie auf "Ebenen Ähnlichkeitsausgleich", um optimale Parameter zu erhalten, führen Sie dann Vorwärts- oder Rückwärtsberechnung zur Batch-Konvertierung durch.'
        },
        step5: {
            title: 'Protokolle und Visualisierung anzeigen',
            description: 'Echtzeit-Protokolle zeigen Analyse-, Ausgleichs-, Konvertierungs- und Statistikprozesse an, während gleichzeitig die Verteilung der Kontrollpunkte, Residuen-Histogramme und Wärmekartenübersicht gezeichnet werden.'
        },
        step6: {
            title: 'Ergebnisse exportieren und teilen',
            description: 'Nach Bestätigung der Ergebnisse exportieren Sie CSV und Protokolle und erstellen Screenshots der Visualisierungsdiagramme für Ergebnisvorlage, Überprüfung oder Dokumentenarchivierung.'
        }
    },
    successTitle: 'Bereitstellung abgeschlossen',
    successContent: 'Glückwunsch! Sie haben den gesamten Arbeitsablauf des Vier-Parameter-Transformators gemeistert und können nun verschiedene Aufgaben zur Integration ebener Koordinaten selbstbewusst bewältigen und Genauigkeitsbewertungsberichte erstellen.',
    relatedToolsTitle: 'Empfohlene verwandte Tools',
    relatedTools: {
        first: {
            name: 'Kartenblatt-Rechner',
            description: 'Berechnet Blattnummern basierend auf Breiten- und Längengradkoordinaten, unterstützt mehrere Maßstäbe.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'GNSS-Zeitkonverter',
            description: 'Tool zur Umwandlung zwischen GPS-Zeit, BeiDou-Zeit und UTC-Zeit.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Flächen- und Umfangsrechner',
            description: 'Unterstützt das Zeichnen von Polygonen zur automatischen Flächen- und Umfangsberechnung, bietet mehrere Einheitenschalter.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Baselines-Rechner',
            description: 'Eingabe von Start- und Endpunktkoordinaten zur Berechnung von Baseline-Länge und Azimut, unterstützt Fehlerfortpflanzungsanalyse.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Referenzen',
    references: {
        first: {
            name: 'Chinesische Vereinigung für Geoinformationswissenschaft - Standards und Vorschriften',
            description: 'Chinesische Geoinformations-Industriestandards und technische Vorschriften',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'ISO 19111 Raumbezugssystem-Standard',
            description: 'Maßgeblicher internationaler Standard für Raumbezugstransformation und Projektionen.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Open Geospatial Consortium (OGC) Standards',
            description: 'Internationale Standards für georäumliche Datentransformation',
            url: 'https://www.ogc.org/'
        }
    }
}