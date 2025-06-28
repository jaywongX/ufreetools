export default {
    name: 'Gauß-Krüger-Transformation',
    title: 'Gauß-Krüger-Transformation',
    description: 'Werkzeug zur Umrechnung zwischen Gauß-Krüger-Koordinaten und geografischen Koordinaten (Längen-/Breitengrad)',
    calculationType: 'Berechnungstyp',
    forward: 'Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)',
    inverse: 'Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)',
    ellipsoidParameters: 'Ellipsoidparameter',
    ellipsoidType: 'Ellipsoidtyp',
    centralMeridian: 'Hauptmeridian (Grad)',
    a: 'Große Halbachse',
    f: 'Abplattung',
    projectionParameters: 'Projektionszonenparameter',
    projectionType: 'Projektionszonentyp',
    '3degree': '3°-Zone',
    '6degree': '6°-Zone',
    zoneNumber: 'Zonennummer',
    forwardInput: 'Längen-/Breitengrad eingeben',
    latitude: 'Breitengrad',
    longitude: 'Längengrad',
    inverseInput: 'GK-Koordinaten eingeben',
    x: 'X-Koordinate (Nordwert)',
    y: 'Y-Koordinate (Ostwert)',
    calculate: 'Berechnen',
    results: 'Ergebnisse',
    dms: 'Grad-Minuten-Sekunden-Format',
    batchProcessing: 'Stapelverarbeitung',
    inputFormat: 'Eingabeformat',
    batchForwardFormat: 'Pro Zeile ein Koordinatenpaar: Breitengrad,Längengrad',
    batchInverseFormat: 'Pro Zeile ein Koordinatenpaar: X-Koordinate,Y-Koordinate',
    processBatch: 'Stapelberechnung',
    batchResults: 'Stapelergebnisse',
    copyAll: 'Alle kopieren',
    downloadCSV: 'CSV herunterladen',
    copySuccess: 'Erfolgreich kopiert',
    copyFailed: 'Kopieren fehlgeschlagen',
    clear: 'Leeren',
    formula: 'Formelerklärung',
    mapView: 'Kartenansicht',
    dmsInput: 'Grad-Minuten-Sekunden-Eingabe',
    dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
    parse: 'Parsen',
    dmsParseError: 'Fehler beim Parsen des Grad-Minuten-Sekunden-Formats',
    invalidLatitude: 'Ungültiger Breitengrad',
    invalidLongitude: 'Ungültiger Längengrad',
    invalidX: 'Ungültige X-Koordinate',
    invalidY: 'Ungültige Y-Koordinate',
    copyToClipboard: 'In Zwischenablage kopieren',
    autoCalculate: 'Automatische Berechnung',
    formulaExplanation: 'Erklärung der Gauß-Krüger-Formeln',
    uploadCSV: 'CSV hochladen',
    exportResults: 'Ergebnisse exportieren',
    exportAsGeoJSON: 'Als GeoJSON exportieren',
    exportAsKML: 'Als KML exportieren',
    exportAsTXT: 'Als TXT exportieren',
    mapLayers: 'Kartenebenen',
    standard: 'Standard',
    satellite: 'Satellit',
    terrain: 'Gelände',
    pointsOnMap: 'Punkte auf der Karte',
    clearPoints: 'Alle Punkte löschen',
    unitSystem: 'Einheitensystem',
    metric: 'Meter (m)',
    imperial: 'Fuß (ft)',
    customEllipsoid: 'Benutzerdefiniertes Ellipsoid',
    saveCustomEllipsoid: 'Benutzerdefiniertes Ellipsoid speichern',
    formulaContent: `
      <p>Die Gauß-Krüger-Projektion verwendet folgende Hauptformeln:</p>
      <h4>Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)</h4>
      <p>Umwandlung geografischer Koordinaten in ebene rechtwinklige Koordinaten:</p>
      <ul>
        <li>X = m + Korrekturterm</li>
        <li>Y = ν·cos(B)·l + Korrekturterm</li>
      </ul>
      <h4>Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)</h4>
      <p>Umwandlung ebener Koordinaten in geografische Koordinaten:</p>
      <ul>
        <li>B = μ + Korrekturterm</li>
        <li>L = L₀₀ + Korrekturterm</li>
      </ul>
      <p>Dabei gilt:</p>
      <ul>
        <li>B: Breitengrad</li>
        <li>L: Längengrad</li>
        <li>L₀₀: Hauptmeridian</li>
        <li>m: Meridianbogenlänge</li>
        <li>ν: Querkrümmungsradius</li>
      </ul>
    `,
    close: 'Schließen',
    
    ellipsoids: {
      WGS84: 'WGS84-Ellipsoid',
      Krasovsky: 'Krassowski-Ellipsoid',
      CGCS2000: 'CGCS2000-Ellipsoid',
      GRS80: 'GRS80-Ellipsoid',
      Beijing54: 'Beijing54-Ellipsoid',
      Xian80: 'Xian80-Ellipsoid',
      Custom: 'Benutzerdefiniertes Ellipsoid'
    },
    
    about: {
      title: 'Über Gauß-Krüger-Projektion',
      description: 'Die Gauß-Krüger-Projektion ist eine winkeltreue transversale Zylinderprojektion, die in der Vermessung und Kartografie weit verbreitet ist. Sie projiziert Punkte vom Erdellipsoid auf eine Ebene und wird häufig für topografische Karten mittlerer und großer Maßstäbe verwendet.',
      forwardTitle: 'Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)',
      forwardDescription: 'Die Vorwärtstransformation wandelt geografische Koordinaten (Längen-/Breitengrad) in ebene rechtwinklige Koordinaten (X, Y) um. Die X-Achse zeigt nach Norden, die Y-Achse nach Osten, der Ursprung liegt am Schnittpunkt von Hauptmeridian und Äquator.',
      inverseTitle: 'Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)',
      inverseDescription: 'Die Rückwärtstransformation ist die Umkehrung der Vorwärtstransformation und wandelt ebene Koordinaten (X, Y) zurück in geografische Koordinaten (Längen-/Breitengrad).',
      parametersTitle: 'Parametererklärung',
      ellipsoidParam: 'Ellipsoidparameter',
      ellipsoidDescription: 'Mathematisches Modell der Erdform, verschiedene geodätische Systeme verwenden unterschiedliche Ellipsoidparameter. Übliche Modelle sind WGS84, Beijing54, Xian80, CGCS2000 etc.',
      projectionParam: 'Projektionszonenparameter',
      projectionDescription: 'Die Gauß-Krüger-Projektion wird typischerweise in 3°- oder 6°-Zonen unterteilt. 3°-Zonen werden für großmaßstäbige Karten verwendet, 6°-Zonen für klein- und mittelmaßstäbige Karten. Die Zonennummer bestimmt die Lage des Hauptmeridians.'
    },
    
    loadExample: 'Beispiel laden',
    customEllipsoidSaved: 'Benutzerdefiniertes Ellipsoid erfolgreich gespeichert',
    
    guide: {
      title: 'Bedienungsanleitung',
      forwardTitle: 'Vorwärtstransformation (Längen-/Breitengrad → GK-Koordinaten)',
      step1: 'Oben "Vorwärtstransformation" als Berechnungstyp wählen',
      step2: 'Passende Ellipsoidparameter und Projektionszone auswählen',
      step3: 'Breiten- und Längengrad im Dezimalformat eingeben (z.B. 52.5200, 13.4050) oder Grad-Minuten-Sekunden-Format verwenden',
      step4: 'Ergebnisse werden automatisch aktualisiert oder mit "Berechnen"-Button berechnet',
      
      inverseTitle: 'Rückwärtstransformation (GK-Koordinaten → Längen-/Breitengrad)',
      step5: 'Oben "Rückwärtstransformation" als Berechnungstyp wählen',
      step6: 'X- und Y-Koordinaten in Metern eingeben',
      step7: 'Ergebnisse in Dezimalgrad und Grad-Minuten-Sekunden anzeigen',
      
      batchTitle: 'Stapelverarbeitung',
      step8: 'Im Stapelbereich mehrere Koordinatenpaare eingeben (ein Paar pro Zeile)',
      step9: '"Stapelberechnung" klicken für gleichzeitige Berechnung aller Koordinaten',
      step10: 'Ergebnisse als CSV exportieren oder in Zwischenablage kopieren',
      
      mapTitle: 'Karteninteraktion',
      step11: 'Auf Karte klicken um Punkte hinzuzufügen und Eingabewerte automatisch zu füllen',
      step12: 'Mit Dropdown-Menü verschiedene Kartenebenen wechseln',
      step13: 'Punkte als GeoJSON, KML oder TXT exportieren für andere Anwendungen'
    },
    gaussianProjectionPoints: 'Gauß-Krüger-Punkte',
    point: 'Punkt',
    gaussianProjection: 'Gauß-Krüger-Projektion',
    supportedFormats: 'Unterstützt: CSV, TXT, Excel',
    excelExportNotice: 'Excel-Export bereit, kann direkt in Excel geöffnet werden.',
    excelProcessNotice: 'Excel-Verarbeitung nicht vollständig unterstützt, für beste Ergebnisse CSV verwenden.',
    exportAsCSV: 'Als CSV exportieren',
    exportAsExcel: 'Als Excel exportieren',
    excelExportSuccess: 'Excel-Datei erfolgreich exportiert',
    excelExportFailed: 'Excel-Export fehlgeschlagen, auf CSV zurückgegriffen',
    excelImportSuccess: 'Excel-Datei erfolgreich importiert',
    excelImportFailed: 'Excel-Import fehlgeschlagen, bitte CSV versuchen',
    units: {
      metric: 'Meter (m)',
      km: 'Kilometer (km)',
      imperial: 'Fuß (ft)',
      miles: 'Meilen (mi)'
    },
    resetView: 'Kartenansicht zurücksetzen',
    pointsTotal: 'Punkte insgesamt',
    currentPoint: 'Aktuelles Ergebnis',
    article: {
      title: "Gauß-Krüger-Rechner: Umwandlung zwischen geografischen und ebenen Koordinaten",
      introTitle: "Grundlagen der Gauß-Krüger-Projektion",
      introPara1: "Der <strong>Gauß-Krüger-Rechner</strong> ist ein unverzichtbares Werkzeug für Vermessungsingenieure, Kartografen, GIS-Experten und alle, die mit geografischen Informationssystemen arbeiten. Dieses leistungsstarke Koordinatenumwandlungstool ermöglicht die präzise Transformation zwischen geografischen Koordinaten (Breiten-/Längengrad) und ebenen rechtwinkligen Koordinaten (X/Y) mittels der Gauß-Krüger-Projektion.",
      introPara2: "Unser <strong>Gauß-Krüger-Umwandlungstool</strong> führt hochpräzise Vorwärts- und Rückwärtstransformationen durch und unterstützt verschiedene Ellipsoidmodelle wie WGS84, CGCS2000, Krassowski (Beijing54) und mehr. Das Tool wendet automatisch die korrekten mathematischen Formeln und Korrekturterme an, um genaue Koordinatenumwandlungen für Ihre Vermessungs- und Kartierungsprojekte zu gewährleisten.",
      
      scenariosTitle: "Praktische Anwendungsfälle",
      scenario1: "<strong>Vermessung und Landmanagement:</strong> Vermessungsingenieure nutzen Gauß-Krüger-Transformationen, um GPS-Koordinaten in lokale ebene Koordinatensysteme umzuwandeln für präzise Landvermessung, Grundstücksgrenzen und Bauplanung.",
      scenario2: "<strong>Topografische Kartenerstellung:</strong> Kartografen verwenden die Gauß-Krüger-Projektion zur Erstellung präziser topografischer Karten mit winkeltreuen Eigenschaften und minimalen Verzerrungen.",
      scenario3: "<strong>GIS-Datenintegration:</strong> GIS-Analysten nutzen Gauß-Krüger-Berechnungen, um Daten aus verschiedenen Quellen mit unterschiedlichen Koordinatensystemen in ein einheitliches Bezugssystem zu integrieren.",
      scenario4: "<strong>Ingenieurprojekte:</strong> Bauingenieure und Bauleiter verwenden Gauß-Krüger-Koordinaten für Infrastrukturplanung, um Straßen, Brücken und Versorgungsleitungen präzise zu positionieren.",
      scenario5: "<strong>Militärische Anwendungen:</strong> Militäroperationen nutzen Gauß-Krüger-Koordinaten für taktische Planung, Navigation und Zielbestimmung.",
      scenariosConclusion: "Die Vielseitigkeit der <strong>Gauß-Krüger-Berechnung</strong> macht sie in vielen Fachgebieten unverzichtbar, die präzise räumliche Positionierung erfordern. Unser Tool vereinfacht diesen komplexen mathematischen Prozess zu einer intuitiven Benutzeroberfläche für Profis und Einsteiger.",
      
      faqTitle: "Häufige Fragen zur Gauß-Krüger-Projektion",
      faq1q: "Was ist der Unterschied zwischen Gauß-Krüger und UTM?",
      faq1a: "Die Gauß-Krüger-Projektion ist die mathematische Grundlage des UTM-Systems (Universal Transverse Mercator). Hauptunterschiede:<ul><li>UTM verwendet standardisierte 6°-Zonen mit festen Parametern</li><li>Gauß-Krüger ist flexibler mit anpassbaren Hauptmeridianen und Zonenbreiten (3° oder 6°)</li><li>UTM hat feste 500.000m Ostverschiebung und 0.9996 Maßstabsfaktor</li><li>Unser <strong>Gauß-Krüger-Rechner</strong> bietet mehr Anpassungsmöglichkeiten für Ellipsoidparameter</li></ul>",
      
      faq2q: "Welches Ellipsoid sollte ich für Gauß-Krüger-Berechnungen wählen?",
      faq2a: "Die Wahl des Ellipsoids hängt von Ihrer Region und dem verwendeten Koordinatensystem ab:<ul><li><strong>WGS84:</strong> Globaler Standard für GPS und internationale Kartierung</li><li><strong>CGCS2000:</strong> Offizielles chinesisches Koordinatensystem seit 2000</li><li><strong>Krassowski/Beijing54:</strong> Historisches System in China und Osteuropa</li><li><strong>Xian80:</strong> Chinesischer Nationalstandard vor CGCS2000</li></ul> Für moderne Anwendungen empfehlen wir WGS84 oder CGCS2000, außer für spezielle historische Daten.",
      
      faq3q: "Wie genau sind die Berechnungen dieses Tools?",
      faq3a: "Unser <strong>Gauß-Krüger-Rechner</strong> implementiert das vollständige mathematische Modell mit allen Korrekturtermen für höchste Genauigkeit. Für die meisten praktischen Anwendungen erreicht das Tool Submillimeter-Genauigkeit, die über den Anforderungen typischer Vermessungsprojekte liegt. Die Genauigkeit hängt von korrekten Ellipsoidparametern und richtiger Zonendefinition ab.",
      
      faq4q: "Kann ich dieses Tool für Stapelverarbeitung verwenden?",
      faq4a: "Ja, unser <strong>Gauß-Krüger-Umwandler</strong> bietet vollständige Stapelverarbeitung:<ul><li>Eingabe mehrerer Koordinatenpaare</li><li>Upload von CSV-, TXT- oder Excel-Dateien</li><li>Gleichzeitige Verarbeitung hunderter Punkte</li><li>Export in CSV, Excel, GeoJSON, KML und TXT</li></ul> Ideal für Projekte mit großen Datensätzen.",
      
      faq5q: "Was sind 3°- und 6°-Zonen in der Gauß-Krüger-Projektion?",
      faq5a: "Die Gauß-Krüger-Projektion unterteilt die Erde in Längenzonen zur Minimierung von Verzerrungen:<ul><li><strong>3°-Zonen:</strong> Schmalere Zonen für höhere Genauigkeit (Zonennummern 1-120)</li><li><strong>6°-Zonen:</strong> Breitere Zonen für größere Gebiete (Zonennummern 1-60)</li></ul> Unser <strong>Gauß-Krüger-Tool</strong> unterstützt beide Systeme und berechnet automatisch den Hauptmeridian basierend auf Ihrer Zonenwahl.",
      
      tutorialTitle: "Schritt-für-Schritt-Anleitung",
      forwardCalcTitle: "Vorwärtstransformation (geografisch → eben)",
      step1: "<strong>Berechnungstyp wählen:</strong> Oben 'Vorwärtstransformation' auswählen.",
      step2: "<strong>Ellipsoid wählen:</strong> Passendes Ellipsoid (WGS84, CGCS2000 etc.) aus Dropdown wählen.",
      step3: "<strong>Projektionsparameter:</strong> 3°- oder 6°-Zone wählen und Zonennummer eingeben.",
      step4: "<strong>Koordinaten eingeben:</strong> Breiten- und Längengrad im Dezimalgradformat oder DMS-Format eingeben.",
      
      inverseCalcTitle: "Rückwärtstransformation (eben → geografisch)",
      step5: "<strong>Berechnungstyp wählen:</strong> 'Rückwärtstransformation' auswählen.",
      step6: "<strong>Parameter konfigurieren:</strong> Ursprüngliche Ellipsoid- und Projektionseinstellungen verwenden.",
      step7: "<strong>Koordinaten eingeben:</strong> X (Nordwert) und Y (Ostwert) in Metern eingeben.",
      step8: "<strong>Ergebnisse anzeigen:</strong> Umgewandelte Koordinaten in Dezimalgrad und DMS anzeigen.",
      
      batchTitle: "Stapelverarbeitung",
      step9: "<strong>Daten vorbereiten:</strong> Koordinatenpaare formatieren (ein Paar pro Zeile).",
      step10: "<strong>Stapelberechnung:</strong> 'Stapelberechnung' klicken für Massenumwandlung.",
      step11: "<strong>Ergebnisse exportieren:</strong> Mit 'Alle kopieren' oder 'CSV herunterladen' speichern.",
      
      tutorialConclusion: "Mit diesem <strong>Gauß-Krüger-Rechner</strong> können Sie schnell zwischen geografischen und ebenen Koordinatensystemen wechseln, ohne komplexe manuelle Berechnungen durchführen zu müssen. Die intuitive Oberfläche macht professionelle Koordinatentransformationen für alle Nutzer zugänglich.",
      
      relatedToolsTitle: "Verwandte Tools",
      relatedTool1: "Koordinatenkonverter",
      relatedTool1Desc: "Umwandlung zwischen verschiedenen Koordinatensystemen wie UTM, MGRS und nationalen Gittern.",
      relatedTool2: "GPS-Track-Analyse",
      relatedTool2Desc: "Visualisierung und Analyse von GPS-Tracks mit Koordinatendaten.",
      
      referencesTitle: "Technische Referenzen",
      reference1: "World Geodetic System 1984 (WGS84) - NGA",
      reference2: "Transverse Mercator-Projektion - Wikipedia",
      reference3: "State Plane Coordinate System - NGS"
    },
}