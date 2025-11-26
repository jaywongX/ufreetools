export default {
    title: 'Sieben-Parameter-Transformator: Bursa-Wolf-Geodätenkoordinaten-Batch-Konvertierungs-Tutorial',
    functionTitle: 'Wie löst der Sieben-Parameter-Transformator die Herausforderungen der Multi-Koordinatensystem-Integration?',
    intro: '<p>Der Sieben-Parameter-Transformator bietet Batch-Konvertierung zwischen <strong>WGS84, CGCS2000, Beijing 54, Xi\'an 80</strong> XYZ und BLH-Koordinaten basierend auf dem Bursa-Wolf-Modell und konzentriert sich auf die Lösung von Versatz- und Nachverfolgbarkeitsproblemen bei der Fusion multipler Quellenkoordinaten in Vermessungs-, Ingenieur- und GIS-Plattformen. Das Tool verfügt über offene Algorithmen, Fehleranpassung und Prozessprotokolle, um sicherzustellen, dass jede Konvertierung nachverfolgbar, reproduzierbar und bewertbar ist.</p><p>Mit automatischer Anpassung und vorlagenbasierter Parameterverwaltung können Teams schnell hochvertrauenswürdige Sieben-Parameter-Sätze projektübergreifend wiederverwenden und jeden Rotations- und Skalierungskorrekturschritt über Protokolle verifizieren, was die Einreichung vollständiger technischer Dokumentation während öffentlicher Ausschreibungs- und Abnahmephase erleichtert.</p>',
    useCasesTitle: 'Praktische Anwendungsszenarien',
    useCases: {
        first: '<strong>Bau- und kommunale Vermessung</strong>: Integration von CGCS2000-Ergebnissen mit lokalen unabhängigen Koordinatensystemen zur Gewährleistung nahtloser Verbindung von unterirdischen Rohrleitungen, BIM-Modellen und Bauzeichnungen.',
        second: '<strong>Energie- und Verkehrsingenieurwesen</strong>: Überregionale Bauprojekte benötigen Interoperabilität zwischen Beijing 54, Xi\'an 80 und WGS84-Koordinaten, der Sieben-Parameter-Transformator liefert eine vollständige Fehlerbewertung.',
        third: '<strong>Fernerkundung und UAVs</strong>: Luftbildergebnisse werden oft in WGS84 ausgegeben und benötigen eine hochpräzise Sieben-Parameter-Konvertierung vor dem Import in lokale Gauß-Krüger-Projektionen.',
        fourth: '<strong>Naturschutz-Ressourcenregistrierung</strong>: Historische Grenzpunkt-Koordinaten verwenden häufig alte geodätische Datumsangaben, das Tool kann diese zuverlässig auf CGCS2000 abbilden für Registrierung und Prüfung.'
    },
    tipTitle: 'Produktabbildung',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: 'Diese Abbildung kann von Suchmaschinen für Rich-Media-Snippets in Suchergebnissen erfasst werden.',
    conclusion: '<p>Von Einzelpunkt-Checks bis zur Verarbeitung von zehntausenden Batches kann der Sieben-Parameter-Transformator Berichte mit Koordinatenresiduen, RMSE und Konfidenzintervallen ausgeben. Durch 100% Frontend-Implementierung verlassen sensible Punktkoordinaten nie den Browser, was den Compliance-Anforderungen für klassifizierte Projekte bezüglich Datenhaltung entspricht.</p>',
    faqTitle: 'Häufig gestellte Fragen',
    faqs: {
        q1: {
            question: 'Wie gewährleistet der Sieben-Parameter-Transformator die Genauigkeit der Bursa-Wolf-Sieben-Parameter-Berechnung?',
            answer: '<p>Das Tool verwendet die Methode der kleinsten Quadrate für gemeinsame Punkte zur Lösung der sieben Parameter und gibt Residualvektoren, Sigma0 und 95%-Konfidenzintervalle aus. Sie können den Matrixberechnungsprozess über Protokolle überprüfen, um sicherzustellen, dass die Bursa-Wolf-Sieben-Parameter-Genauigkeit den Projektspezifikationen entspricht.</p>'
        },
        q2: {
            question: 'Wie legt man benutzerdefinierte Trennzeichen beim Batch-CSV-Import fest?',
            answer: '<p>Passen Sie im Bereich "Koordinatendateneingabe" das Trennzeichen-Feld an. Der Sieben-Parameter-Transformator analysiert XYZ/BLH/ENH-Daten entsprechend dem neuen Trennzeichen und behält gleichzeitig Punktname- oder Kommentarspalten für nachfolgende Übereinstimmung bei.</p>'
        },
        q3: {
            question: 'Kann der Sieben-Parameter-Transformator gleichzeitig Gauß-Krüger- und UTM-Projektionen verarbeiten?',
            answer: '<p>Ja, wählen Sie einfach den entsprechenden Modus unter "Projektions-/Höhenparameter" und füllen Sie Zentralmeridian, Zonenbreite und Skalierungsfaktor aus. Der Konvertierungsprozess führt zunächst eine 3D-Vorwärtsberechnung durch, dann eine Rückberechnung zu den Zielprojektionskoordinaten.</p>'
        },
        q4: {
            question: 'Wie erhält man sieben Parameter bei unzureichenden gemeinsamen Punkten?',
            answer: '<p>Wenn Sie weniger als drei gemeinsame Punkte haben, können Sie integrierte Beispielparameter in der "Parameter-Vorlage" aufrufen oder Referenzwerte aus historischen Projekten eingeben und dann iterativ mit neu gesammelten Feldpunkten aktualisieren.</p>'
        },
        q5: {
            question: 'Unterstützt der Sieben-Parameter-Transformator lokale unabhängige Koordinatensysteme?',
            answer: '<p>Ja. Sie können große Halbachse und Abplattungsreziproke in "Benutzerdefinierte Ellipsoid-Parameter" eingeben und mit benutzerdefinierten Projektionsparametern kombinieren, um eine realistische Wiederherstellung und gegenseitige Konvertierung lokaler unabhängiger Koordinatensysteme zu erreichen.</p>'
        }
    },
    tutorialTitle: 'Sieben-Parameter-Transformator Bedienungsanleitung',
    steps: {
        step1: {
            title: 'Koordinatensystem und Projektionsmodus auswählen',
            description: 'Wählen Sie zunächst Quell- und Ziel-Koordinatensysteme aus und füllen Sie dann im Projektionsparameter-Bereich Informationen wie Zentralmeridian und Zonenbreite aus, um Konsistenz mit gemessenen Daten sicherzustellen.'
        },
        step2: {
            title: 'Koordinatenpunkte eingeben oder importieren',
            description: 'Sie können einzelne XYZ/BLH/ENH-Punkte manuell eingeben oder CSV/TXT per Drag & Drop für Batch-Import ziehen. Passen Sie bei Bedarf Trennzeichen an, um korrekte Analyse zu gewährleisten.'
        },
        step3: {
            title: 'Sieben Parameter konfigurieren',
            description: 'Wenn Parameter bekannt sind, füllen Sie direkt ΔX, ΔY, ΔZ, Rx, Ry, Rz und Skalierung aus; wenn unbekannt, fügen Sie Punktpaare in den "Gemeinsame Punkte-Löser" ein und führen Sie die Anpassung durch.'
        },
        step4: {
            title: 'Konvertierung durchführen und Protokolle anzeigen',
            description: 'Nach Klick auf "Konvertierung durchführen" zeigen Echtzeitprotokolle Analyse, Vorwärts-/Rückwärtsberechnungen, Rotationen und Skalierungskorrekturen an, was Problemlösung erleichtert.'
        },
        step5: {
            title: 'Genauigkeit bewerten',
            description: 'Das Ergebnispanel zeigt RMSE, maximales Residuum und 95%-Konfidenzintervall an. Wenn Metriken Grenzwerte überschreiten, kehren Sie zum Parameterbereich zurück, um anzupassen oder neu anzupassen.'
        },
        step6: {
            title: 'Ergebnisse und Berichte exportieren',
            description: 'Nach Genauigkeitsbestätigung exportieren Sie die Ergebnis-CSV und Protokolle zusammen für Archivierung oder Prüfungseinreichung.'
        }
    },
    successTitle: 'Bereitstellung abgeschlossen',
    successContent: 'Herzlichen Glückwunsch! Sie haben den gesamten Arbeitsablauf des Sieben-Parameter-Transformators gemeistert und können jetzt schnell Batch-Konvertierungen in Multi-Source-Koordinatenfusion-Projekten durchführen und professionelle Genauigkeitsberichte erstellen.',
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
            description: 'Unterstützt Polygonzeichnung zur automatischen Flächen- und Umfangsberechnung mit mehreren Einheitenumstellungen.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Baselines-Rechner',
            description: 'Eingabe von Start- und Endpunktkoordinaten zur Berechnung von Baseline-Länge und Azimut, unterstützt Fehlerfortpflanzungsanalyse.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Externe Referenzen',
    references: {
        first: {
            name: 'Chinesische Vereinigung für Geoinformationswissenschaft - Standards und Vorschriften',
            description: 'Chinesische Geoinformations-Industrie-Standards und technische Vorschriften',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'ISO 19111 Referenz-Koordinatensystem-Standard',
            description: 'Maßgeblicher internationaler Standard für Koordinatenreferenzen und Projektionstransformationen.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Open Geospatial Consortium (OGC) Standards',
            description: 'Internationale Standards für Geodaten-Transformation',
            url: 'https://www.ogc.org/'
        }
    }
}