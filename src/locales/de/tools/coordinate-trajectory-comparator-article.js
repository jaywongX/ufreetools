export default {
    title: 'Benutzerhandbuch für den Koordinatenbahnvergleicher - Online-Werkzeug zur Bahnabweichungsanalyse',
    functionTitle: 'Was ist der Koordinatenbahnvergleicher und wofür wird er verwendet?',
    intro: 'Unser <strong>Koordinatenbahnvergleicher</strong> ist ein leistungsstarkes Online-Tool, mit dem Sie zwei Sätze von Bahndaten hochladen und eine visuelle Vergleichsanalyse auf einer Karte durchführen können. Das Tool unterstützt Bahnverschiebung, -rotation und Abweichungsberechnung und berechnet automatisch Schlüsselindikatoren wie den Root-Mean-Square-Fehler (RMSE) und den Versatz zwischen zwei Bahnsätzen. Durch die Darstellung zweier Bahnen in verschiedenen Farben mit einem dynamischen "blinkenden" Vergleichseffekt werden unterschiedliche Abschnitte automatisch hervorgehoben. Mit unserem <strong>Bahnabweichungsanalysetool</strong> können Sie detaillierte Vergleichsberichte mit Kartenscreenshots und Fehlerstatistikdiagrammen exportieren und Ergebnisse mit einem Klick in die Zwischenablage kopieren, was professionelle Anforderungen in Vermessung, Navigation und Bahnanalyse erfüllt.',

    useCasesTitle: 'Häufige Anwendungsszenarien des Koordinatenbahnvergleichers',
    useCases: [
        'GPS-Bahngenauigkeitsbewertung, Vergleich von Messbahnen mit Referenzbahnen',
        'Navigationsalgorithmus-Optimierung, Analyse von Bahnunterschieden zwischen verschiedenen Routenplanungsalgorithmen',
        'Autonomes Fahren-Tests, Vergleich von tatsächlichen Fahrzeugfahrten mit erwarteten Bahnen',
        'Sportbahn-Analyse, Vergleich der Bahnleistung verschiedener Athleten oder Trainingsphasen',
        'Logistiklieferungs-Optimierung, Analyse von Abweichungen zwischen Lieferwegen und optimalen Pfaden',
        'Geographische Forschungsdatenvalidierung, Bewertung der Genauigkeit und Konsistenz von Bahndaten'
    ],

    tipTitle: 'Professionelle Tipps:',
    tipContent: 'Bei der Durchführung von Bahnvergleichsanalysen wird empfohlen, zunächst Beispieldaten zu verwenden, um sich mit den Toolfunktionen vertraut zu machen und die Bedeutung verschiedener Fehlerindikatoren zu verstehen. Durch den dynamischen "blinkenden" Vergleichseffekt können Sie die Unterschiede zwischen zwei Bahnen intuitiver beobachten. Der exportierte Vergleichsbericht enthält detaillierte Fehlerstatistiken und visuelle Diagramme, die eine spätere Analyse und Archivierung erleichtern.',

    conclusion: 'Der <strong>Koordinatenbahnvergleicher</strong> ist für Vermessungsingenieure, Navigationsalgorithmus-Entwickler, Forscher im Bereich autonomes Fahren und alle, die Bahnanalysen durchführen müssen, sehr nützlich. Mit unserem Bahnabweichungsanalysetool können Sie schnell und genau die Qualität von Bahndaten bewerten, Bahnabweichungen identifizieren und Algorithmusleistungen optimieren. Unser Tool macht den Bahnvergleichsprozess einfach und effizient, ohne professionelle Software installieren zu müssen.',

    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
        {
            question: 'Welche Dateiformate unterstützt der Koordinatenbahnvergleicher?',
            answer: 'Unser <strong>Online-Bahnvergleichstool</strong> unterstützt mehrere gängige Bahn-Dateiformate, darunter GeoJSON, JSON und KML. Diese Formate werden weit verbreitet in GIS-Software und GPS-Geräten verwendet, sodass Sie problemlos Bahndaten aus verschiedenen Quellen importieren können. Nach dem Hochladen der Dateien analysiert das Tool automatisch die Bahn-Punkte und führt eine Vergleichsanalyse durch.'
        },
        {
            question: 'Wie interpretiert man RMSE und andere Fehlerindikatoren?',
            answer: 'Unser <strong>Bahnabweichungsanalysetool</strong> bietet mehrere Fehlerindikatoren, die Ihnen helfen, Bahnunterschiede umfassend zu bewerten. Der Root-Mean-Square-Fehler (RMSE) ist ein häufig verwendeter Indikator zur Messung der Gesamtabweichung der Bahn, wobei kleinere Werte näher liegende Bahnen anzeigen; der mittlere Fehler stellt den arithmetischen Durchschnitt aller Punktfehler dar; der maximale Fehler zeigt den Punkt mit der größten Abweichung in der Bahn; die Standardabweichung spiegelt den Grad der Streuung der Fehlerverteilung wider. Diese Indikatoren in Kombination können die Bahnqualität umfassend bewerten.'
        },
        {
            question: 'Wie wird der visuelle Effekt des Bahnvergleichs erreicht?',
            answer: 'Unser <strong>Koordinatenbahnvergleicher</strong> zeigt zwei Bahnen in verschiedenen Farben an, eine in Blau und eine in Rot. Durch einen dynamischen "blinkenden" Effekt können Sie Bahnunterschiede intuitiver beobachten. Punkte mit größeren Unterschieden werden automatisch hervorgehoben, was eine schnelle Identifizierung problematischer Bereiche erleichtert. Die Kartenoberfläche unterstützt Zoom- und Schwenkvorgänge, sodass Sie Bahnvergleichsdetails in bestimmten Bereichen detailliert anzeigen können.'
        },
        {
            question: 'Welche Inhalte enthält der Vergleichsbericht?',
            answer: 'Der von unserem <strong>Bahnvergleichstool</strong> generierte Bericht enthält umfangreiche Informationen: 1) Grundlegende Informationen: Bahn-Dateinamen, Punktzahlen usw.; 2) Fehlerstatistiken: Schlüsselindikatoren wie RMSE, mittlerer Fehler, maximaler Fehler und Standardabweichung; 3) Differenzanalyse: Anzahl und Verteilung von Differenzpunkten; 4) Kartenscreenshots: visuelle Ergebnisse des Bahnvergleichs; 5) Fehlerstatistikdiagramme: intuitive Darstellung der Fehlerverteilung. Berichte können im Textformat exportiert werden, um Archivierung und Austausch zu erleichtern.'
        },
        {
            question: 'Wie kann die Genauigkeit des Bahnvergleichs verbessert werden?',
            answer: 'Um genauere Bahnvergleichsergebnisse zu erhalten, wird empfohlen: 1) Zeitliche Synchronisation zweier Bahnen sicherzustellen oder eine Zeitabgleichverarbeitung durchzuführen; 2) Bahnen vorzuverarbeiten, wie Filterung und Entrauschen, Koordinatensystemumwandlung usw.; 3) Geeignete Fehlerberechnungsmethoden und Parametereinstellungen auszuwählen; 4) Für Bahnen unterschiedlicher Längen Bahninterpolation oder -abtastung zu verwenden, um die Punktzahl konsistent zu machen. Unser Tool bietet grundlegende Vergleichsfunktionen, und für komplexe professionelle Anwendungen kann es notwendig sein, Domänenwissen für eine detaillierte Analyse zu kombinieren.'
        }
    ],

    tutorialTitle: 'Wie verwendet man den Koordinatenbahnvergleicher',
    steps: [
        {
            title: 'Bahn-Dateien hochladen',
            description: 'Laden Sie im linken Eingabebereich zwei zu vergleichende Bahn-Dateien hoch. Klicken Sie auf die Upload-Bereiche für Bahn 1 und Bahn 2, wählen Sie lokale GeoJSON-, JSON- oder KML-Format-Bahn-Dateien aus oder ziehen Sie die Dateien direkt in den Upload-Bereich. Das Tool analysiert die Dateien automatisch und zeigt die Anzahl der Bahn-Punkte an.',
            note: 'Unterstützte Dateiformate umfassen GeoJSON, JSON und KML, wodurch sichergestellt wird, dass die Dateien gültige Bahn-Koordinatendaten enthalten.'
        },
        {
            title: 'Beispieldaten laden',
            description: 'Wenn Sie das Tool zum ersten Mal verwenden, können Sie auf die Schaltfläche "Beispiel laden" klicken, um voreingestellte Bahndaten zu laden. Dies hilft Ihnen, sich schnell mit den Tool-Funktionen und Ausgabeergebnissen vertraut zu machen und sich mit dem gesamten Bahnvergleichsprozess vertraut zu machen.',
            note: 'Beispieldaten enthalten zwei voreingestellte Bahnen mit bestimmten Unterschieden, was die Demonstration der verschiedenen Tool-Funktionen erleichtert.'
        },
        {
            title: 'Bahnvergleich durchführen',
            description: 'Nach dem Hochladen von zwei Bahnen klicken Sie auf die Schaltfläche "Bahnen vergleichen", um die Analyse zu starten. Das Tool berechnet automatisch Bahnunterschiede, einschließlich RMSE-, mittlerer Fehler-, maximaler Fehler- und Standardabweichungsindikatoren, und zeigt zwei Bahnen visuell auf der Karte an.',
            note: 'Der Vergleichsprozess kann einige Sekunden dauern, abhängig von der Größe und Komplexität der Bahndaten.'
        },
        {
            title: 'Vergleichsergebnisse anzeigen',
            description: 'Nach Abschluss des Vergleichs zeigt der rechte Bereich detaillierte Fehlerstatistiken und Differenzanalyseergebnisse an. Sie können den visuellen Vergleich von zwei Bahnen auf der Karte anzeigen, wobei Punkte mit größeren Unterschieden hervorgehoben werden. Durch den dynamischen "blinkenden" Effekt können Sie Bahnunterschiede intuitiver beobachten.',
            note: 'Die Karte unterstützt Zoom- und Schwenkvorgänge, was die Anzeige von Bahnvergleichsdetails in bestimmten Bereichen erleichtert.'
        },
        {
            title: 'Ergebnisse exportieren oder kopieren',
            description: 'Sie können auf die Schaltfläche "Bericht exportieren" klicken, um einen detaillierten Vergleichsbericht mit Fehlerstatistiken, Differenzanalyse und Kartenscreenshots zu erstellen. Wenn Sie nur Schlüsselindikatoren benötigen, können Sie die Schaltfläche "Ergebnisse kopieren" verwenden, um Kerndaten wie RMSE in die Zwischenablage zu kopieren.',
            note: 'Der exportierte Bericht liegt im Textformat vor, was die Archivierung und den Austausch erleichtert. Die Kopierfunktion kopiert nur Schlüsselfehlerindikatoren.'
        }
    ],

    successTitle: 'Herzlichen Glückwunsch!',
    successContent: 'Sie haben erfolgreich gelernt, wie man unseren Koordinatenbahnvergleicher verwendet. Jetzt können Sie problemlos zwei Bahnen hochladen und vergleichen, Bahnunterschiede durch detaillierte Fehlerstatistiken und visuelle Effekte analysieren und professionelle Vergleichsberichte exportieren.',

    relatedToolsTitle: 'Verwandte Tools, die Sie interessieren könnten',
    relatedTools: [
        {
            name: 'Flächen- und Umfangsrechner',
            description: 'Unterstützt das Zeichnen von Polygonen zur automatischen Flächen- und Umfangsberechnung, bietet mehrere Einheitenumstellungen.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Flächen- und Umfangsrechner',
            description: 'Unterstützt das Zeichnen von Polygonen zur automatischen Flächen- und Umfangsberechnung, bietet mehrere Einheitenumstellungen.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Projektionszonen-Finder',
            description: 'Geben Sie den Längengrad ein, um automatisch UTM 3°- und 6°-Zonennummern zu berechnen, unterstützt Stapelverarbeitung.',
            url: 'https://www.ufreetools.com/tool/projection-zone-finder'
        },
        {
            name: 'Koordinatenformat-Konverter',
            description: 'Unterstützt die Umwandlung zwischen Dezimalgrad-, Grad-Minuten-Sekunden- und Grad-Minuten-Formaten, bietet Stapelumwandlungsfunktionen.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        }
    ],

    referencesTitle: 'Referenzressourcen',
    references: [
        {
            name: 'Bahndatenanalyse',
            description: 'Akademische Ressourcen zur GPS-Bahndatenverarbeitung und -analyse',
            url: 'https://de.wikipedia.org/wiki/Bahndatenanalyse'
        },
        {
            name: 'Root-Mean-Square-Fehler',
            description: 'Detaillierte Einführung zu RMSE in Wikipedia',
            url: 'https://de.wikipedia.org/wiki/Mittlerer_quadratischer_Fehler'
        },
        {
            name: 'GeoJSON-Format-Spezifikation',
            description: 'Offizielles Spezifikationsdokument für das GeoJSON-Geodatenformat',
            url: 'https://tools.ietf.org/html/rfc7946'
        }
    ]
}